/* =========================================================
   API/ITEMS.JS — Detalhes de item (nome, descrição, imagem)
   Busca só o item pedido, sob demanda — nunca o catálogo inteiro
   (o catálogo completo da WFCD passa de 60MB, inviável no cliente).
   ========================================================= */
import { ENDPOINTS } from '../config.js';
import { fetchComTimeout } from '../utils/http.js';
import { normalizarTexto } from '../utils/normalizar.js';
import { normalizarRaridade } from './drops.js';

const cacheDaSessao = new Map(); // evita rebuscar o mesmo item na mesma visita

/**
 * Busca os detalhes de um item pelo nome (busca por aproximação —
 * a própria API resolve o item mais parecido com o nome enviado).
 * @param {string} nome
 * @param {string} idioma 'pt' | 'en'
 * @returns {Promise<object|null>} null se o item não for encontrado
 */
export async function buscarDetalhesItem(nome, idioma) {
  const chaveCache = `${idioma}:${nome.toLowerCase()}`;
  if (cacheDaSessao.has(chaveCache)) {
    return cacheDaSessao.get(chaveCache);
  }

  const resposta = await fetchComTimeout(ENDPOINTS.item(nome, idioma));

  if (resposta.status === 404) {
    cacheDaSessao.set(chaveCache, null);
    return null;
  }

  if (!resposta.ok) {
    throw new Error(`Falha ao buscar detalhes do item (HTTP ${resposta.status})`);
  }

  const bruto = await resposta.json();
  const item = normalizarItem(bruto);
  cacheDaSessao.set(chaveCache, item);
  return item;
}

function normalizarItem(bruto) {
  if (!bruto || typeof bruto !== 'object') return null;

  return {
    nome: bruto.name ?? null,
    descricao: bruto.description ?? null,
    // Ordem de prioridade conforme a documentação real da WFCD:
    // 1) "thumbnail" e 2) "wikiaThumbnail" já vêm como URL completa
    //    (presentes principalmente em armas);
    // 3) "imageName" é só o nome do arquivo e precisa do prefixo do CDN
    //    (é o campo mais comum, presente na maioria dos itens).
    imagemUrl:
      bruto.thumbnail ??
      bruto.wikiaThumbnail ??
      (bruto.imageName ? `https://cdn.warframestat.us/img/${bruto.imageName}` : null),
    categoria: bruto.category ?? bruto.type ?? bruto.productCategory ?? null,
    masteryRank: bruto.masteryReq ?? bruto.mr ?? null,
    // Fontes que NÃO são "drop" por chance (ex: recompensa garantida de
    // quest) — a tabela oficial de drops não cobre isso, mas os dados de
    // item às vezes trazem, dentro de cada componente (Chassis/Systems/
    // Neuroptics/Blueprint). É o único lugar onde essa info existe.
    fontesAlternativas: extrairFontesAlternativas(bruto),
    // Sinal automático (não é um chute meu): armas que pedem Fieldron,
    // Detonite Injector ou Mutagen Mass pra construir só existem assim
    // porque passaram por pesquisa no Dojo do clã — esses materiais só
    // servem pra isso no jogo. Não cobre 100% dos casos (ex: algumas
    // armas do Laboratório Tenno não usam esses materiais), mas quando
    // detecta, é confiável — e se atualiza sozinho com qualquer arma
    // nova que a DE lançar, sem eu precisar digitar nada.
    provavelPesquisaDojo: pareceExigirPesquisaDojo(bruto),
    // Preço real de compra direta na loja do jogo — dado exato, vem
    // pronto da API (não é chute nenhum, é o preço que a DE cobra mesmo).
    precoPlatina: typeof bruto.marketCost === 'number' ? bruto.marketCost : null,
    precoCreditos: typeof bruto.bpCost === 'number' ? bruto.bpCost : null,
    // Alguns itens (ex: Rhino) têm peças com drop confirmado (Chassis,
    // Neuroptics...) mas o "Blueprint" em si não dropa em lugar nenhum —
    // só é vendido na loja. Isso avisa quando é esse o caso.
    temBlueprintSemFonteDeDrop: temComponenteBlueprintSemDrop(bruto),
  };
}

function temComponenteBlueprintSemDrop(bruto) {
  if (!Array.isArray(bruto.components)) return false;
  const blueprint = bruto.components.find((c) => normalizarTexto(c.name ?? '') === 'blueprint');
  if (!blueprint) return false;
  return !Array.isArray(blueprint.drops) || blueprint.drops.length === 0;
}

const MATERIAIS_DE_PESQUISA_DOJO = new Set(['fieldron', 'detonite injector', 'mutagen mass']);

function pareceExigirPesquisaDojo(bruto) {
  if (!Array.isArray(bruto.components)) return false;
  return bruto.components.some((c) => MATERIAIS_DE_PESQUISA_DOJO.has(normalizarTexto(c.name ?? '')));
}

function extrairFontesAlternativas(bruto) {
  const fontes = [];

  // Item simples (não-Warframe) pode ter "drops" direto na raiz.
  if (Array.isArray(bruto.drops)) {
    bruto.drops.forEach((d) => fontes.push(normalizarFonteAlternativa(d)));
  }

  // Warframes/armas com peças: cada componente tem seu próprio "drops".
  if (Array.isArray(bruto.components)) {
    bruto.components.forEach((componente) => {
      if (Array.isArray(componente.drops)) {
        componente.drops.forEach((d) => fontes.push({
          ...normalizarFonteAlternativa(d),
          parte: componente.name ?? null,
        }));
      }
    });
  }

  return fontes;
}

function normalizarFonteAlternativa(d) {
  return {
    local: d.location ?? d.place ?? null,
    tipo: d.type ?? null,
    chance: typeof d.chance === 'number' ? d.chance : null,
    // Mesma normalização usada no caminho de busca por RNG (drops.js) —
    // sem isso, "Common"/"Uncommon" (como a API manda) não batia com as
    // chaves de tradução ('common'/'uncommon'), e aparecia o texto cru
    // da chave na tela em vez do nome traduzido.
    raridade: normalizarRaridade(d.rarity),
  };
}
