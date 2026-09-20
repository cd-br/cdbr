/* =========================================================
   API/DROPS.JS — Busca de drops na Warframe Status API (WFCD)
   A busca é feita no servidor deles: não baixamos tabelas
   inteiras, só o que combina com o termo digitado.

   Schema confirmado na especificação oficial (WFCD/api-spec):
   array de { item, chance, place, rarity } — sem campo de
   rotação e sem campo de categoria prontos. A categoria exibida
   no app é inferida no cliente a partir do texto de "place".
   ========================================================= */
import { ENDPOINTS } from '../config.js';
import { fetchComTimeout } from '../utils/http.js';
import { ehWarframe } from '../dados-warframes.js';
import { buscarDropsNoDataset } from './datasetLocal.js';

/**
 * Busca drops que combinam com o termo (nome de item OU local).
 * @param {string} query
 * @param {AbortSignal} [signal] permite cancelar se uma busca mais nova começar
 * @returns {Promise<object[]>} lista de drops normalizados
 */
export async function buscarDrops(query, signal) {
  try {
    const resultadosLocais = await buscarDropsNoDataset(query);
    if (resultadosLocais.length) {
      return resultadosLocais.map(normalizarDrop).filter(Boolean);
    }
  } catch (erro) {
    console.warn('[drops] dataset local indisponível; usando API:', erro);
  }

  const resposta = await fetchComTimeout(ENDPOINTS.buscaDrops(query), { signal });

  if (resposta.status === 404) {
    // A própria API informa que o cache de drops está indisponível —
    // não é um erro nosso, é uma indisponibilidade temporária deles.
    throw new ErroDropsIndisponivel();
  }

  if (!resposta.ok) {
    throw new Error(`Falha ao buscar drops (HTTP ${resposta.status})`);
  }

  const dados = await resposta.json();
  const lista = Array.isArray(dados) ? dados : Object.values(dados).flat();

  return lista.map(normalizarDrop).filter(Boolean);
}

function normalizarDrop(bruto) {
  if (!bruto || typeof bruto !== 'object') return null;

  const item = bruto.item ?? bruto.name ?? bruto.itemName ?? null;
  if (!item) return null; // sem nome de item, não há o que mostrar

  const local = bruto.place ?? bruto.local ?? bruto.location ?? bruto.locationName ?? 'Local desconhecido';
  const rotacao = bruto.rotation ?? bruto.rotationName ?? bruto.rewardRotation ?? null;
  const rarezaBruta = bruto.rarity ?? bruto.rarityName ?? null;

  let chanceNumero = bruto.chance ?? bruto.dropChance ?? null;
  if (typeof chanceNumero === 'string') {
    chanceNumero = parseFloat(chanceNumero.replace('%', '').replace(',', '.'));
  }

  const localTexto = String(local).trim();
  const itemTexto = String(item).trim();

  return {
    item: itemTexto,
    local: localTexto,
    rotacao: rotacao ? String(rotacao).trim() : null,
    raridade: normalizarRaridade(rarezaBruta),
    // Se o item é um Warframe (ou peça dele), essa identidade importa
    // mais pra quem busca do que o local onde ele caiu.
    categoria: ehWarframe(itemTexto) ? 'warframe' : inferirCategoria(localTexto),
    faccao: inferirFaccao(localTexto),
    chance: Number.isFinite(chanceNumero) ? chanceNumero : null,
  };
}

export function normalizarRaridade(valor) {
  if (!valor) return null;
  const texto = String(valor).toLowerCase();
  if (texto.includes('legend')) return 'legendary';
  if (texto.includes('rare')) return 'rare';
  if (texto.includes('uncommon')) return 'uncommon';
  if (texto.includes('common')) return 'common'; // cobre "Common" e "Very Common"
  return null;
}

/**
 * Heurística de categoria a partir do texto livre de "place".
 * A API não expõe um campo de categoria — isto é uma aproximação
 * baseada em padrões conhecidos dos nomes de local do próprio jogo.
 * Se você notar um local caindo na categoria errada, me diga o texto
 * exato de "place" que aparece no card, e eu ajusto o padrão.
 */
function inferirCategoria(local) {
  const texto = local.toLowerCase();

  if (/^(lith|meso|neo|axi|requiem)\b/.test(texto)) return 'relíquia';
  if (texto.includes('sortie')) return 'sortie';
  if (texto.includes('bounty') || texto.includes('cetus') || texto.includes('fortuna') || texto.includes('deimos') || texto.includes('zariman')) return 'bounty';
  if (texto.includes('syndicate') || texto.includes('sindicato')) return 'sindicato';
  return 'missão'; // cobre missões e drops de inimigo por padrão

}

/**
 * Heurística de facção a partir do texto de "place" — usada só pra
 * dar um acento de cor no card (mesmo princípio da categoria: a API
 * não expõe isso como campo próprio, então é uma aproximação).
 */
function inferirFaccao(local) {
  const texto = local.toLowerCase();
  if (texto.includes('grineer')) return 'grineer';
  if (texto.includes('corpus')) return 'corpus';
  if (texto.includes('infest')) return 'infestado';
  if (texto.includes('corrupted')) return 'corrompido';
  if (texto.includes('sentient') || texto.includes('narmer')) return 'sentiente';
  if (texto.includes('murmur')) return 'murmur';
  if (texto.includes('orokin')) return 'orokin';
  return null;
}

export class ErroDropsIndisponivel extends Error {
  constructor() {
    super('O serviço de drops está temporariamente indisponível.');
    this.name = 'ErroDropsIndisponivel';
  }
}
