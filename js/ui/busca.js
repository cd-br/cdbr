/* =========================================================
   UI/BUSCA.JS — Campo de busca, filtros de raridade/categoria
   e renderização dos resultados em grid
   ========================================================= */
import { buscarDrops, ErroDropsIndisponivel, normalizarRaridade } from '../api/drops.js';
import { buscarDetalhesItem } from '../api/items.js';
import { imagemLocalDoItem } from '../imagens-locais.js';
import { ehWarframe } from '../dados-warframes.js';
import { ehRecurso } from '../dados-recursos.js';
import { ehNoDeSobrevivencia } from '../api/nodes.js';
import { ehAdaptadorIncarnon } from '../dados-fontes-especiais.js';
import { buscarFonteManual } from '../dados-fontes-manuais.js';
import { buscarOfertaBaro } from '../dados-fontes-baro.js';
import { buscarNomesCatalogoNoDataset } from '../api/datasetLocal.js';
import { ligarSwipeAdicionar, solicitarAdicaoComFeedback } from './swipeParaAdicionar.js';
import { removerSufixoComponente, normalizarTexto } from '../utils/normalizar.js';
import { tornarClicavel } from './lightbox.js';
import { DEBOUNCE_BUSCA, TAMANHO_MINIMO_BUSCA } from '../config.js';
import { obterIdiomaAtual } from './idioma.js';
import { t } from '../i18n.js';

const AVISO_LENTIDAO_MS = 3000;
const cacheDeBusca = new Map(); // termo -> resultados, evita rebuscar o que já veio

let estadoInterno = null; // guarda referências e estado pra permitir re-render (ex: troca de idioma)

export function iniciarBusca({ input, botaoLimpar, grid, estado, chipsRaridade, chipsCategoria, aoAbrirItem }) {
  let ultimosResultados = [];
  let raridadesAtivas = new Set(); // vazio = todas
  let categoriaAtiva = ''; // '' = todas
  let palavrasRealce = []; // palavras da busca atual, pra destacar nos resultados
  let temporizador = null;
  let idBuscaAtual = 0; // evita que uma resposta antiga sobrescreva uma mais nova
  let controladorAtual = null; // AbortController da busca em andamento
  let avisoLentidaoId = null;

  // Antes, a imagem só carregava quando o card entrava na tela (scroll),
  // pra não disparar 150 requisições de uma vez. Agora que os resultados
  // vêm agrupados por item (bem menos cards na tela), carregamos direto —
  // isso também corrige a imagem não aparecer até o usuário clicar.
  async function carregarImagemDoCard(wrap) {
    const nomeItem = wrap.dataset.itemImagem;

    // Imagem local: instantânea, sem esperar rede.
    const local = imagemLocalDoItem(nomeItem);
    if (local) {
      wrap.innerHTML = `<img src="${local}" alt="${nomeItem}" loading="lazy">`;
      tornarClicavel(wrap.querySelector('img'));
      return;
    }

    try {
      const detalhes = await buscarDetalhesItem(nomeItem, obterIdiomaAtual());
      if (detalhes?.imagemUrl) {
        wrap.innerHTML = `<img src="${detalhes.imagemUrl}" alt="${nomeItem}" loading="lazy" onerror="this.parentElement.classList.add('card-drop__imagem-wrap--vazio')">`;
        tornarClicavel(wrap.querySelector('img'));
      } else {
        wrap.classList.add('card-drop__imagem-wrap--vazio');
        wrap.innerHTML = iconePlaceholder();
      }
    } catch {
      wrap.classList.add('card-drop__imagem-wrap--vazio');
      wrap.innerHTML = iconePlaceholder();
    }
  }

  function iconePlaceholder() {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="22" height="22">
      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
    </svg>`;
  }

  estadoInterno = {
    reaplicarTraducoes: () => {
      if (!grid.children.length) {
        renderizarEstadoInicial();
      } else {
        renderizarResultados(ultimosResultados);
      }
    },
    buscarTermo: (termo) => {
      input.value = termo;
      botaoLimpar.classList.add('visivel');
      clearTimeout(temporizador);
      executarBusca(termo);
    },
  };

  function renderizarSkeleton() {
    grid.innerHTML = '';
    estado.innerHTML = '';
    for (let i = 0; i < 6; i++) {
      const bloco = document.createElement('div');
      bloco.className = 'skeleton-card';
      grid.appendChild(bloco);
    }
  }

  function renderizarEstadoInicial() {
    grid.innerHTML = '';
    estado.innerHTML = '';
  }

  function renderizarMensagem(titulo, corpo, icone = 'busca') {
    const caminhoIcone = icone === 'erro'
      ? '<path d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/>'
      : '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>';

    estado.innerHTML = `
      <div class="estado">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">${caminhoIcone}</svg>
        <div class="estado__titulo">${titulo}</div>
        <p>${corpo}</p>
      </div>`;
  }

  /** Envolve em <mark> os trechos do texto que batem com as palavras buscadas. */
  function realcarTexto(texto) {
    if (!texto || !palavrasRealce.length) return texto;
    const escapadas = palavrasRealce
      .filter(Boolean)
      .map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    if (!escapadas.length) return texto;
    const regex = new RegExp(`(${escapadas.join('|')})`, 'gi');
    return texto.replace(regex, '<mark class="realce-busca">$1</mark>');
  }

  function badgeRaridade(raridade) {
    if (!raridade) return '';
    return `<span class="badge-raridade badge-raridade--${raridade}">${t('raridade.' + raridade)}</span>`;
  }

  /** Quantas palavras tem o texto (usado pra medir "proximidade" com a busca). */
  function contarPalavras(texto) {
    return normalizarTexto(texto).split(/\s+/).filter(Boolean).length;
  }

  /** Agrupa entradas com o mesmo nome de item num só bloco. */
  function agruparPorItem(lista) {
    const mapa = new Map();
    lista.forEach((d) => {
      const chave = normalizarTexto(d.item);
      if (!mapa.has(chave)) mapa.set(chave, { item: d.item, faccao: d.faccao, entradas: [] });
      mapa.get(chave).entradas.push(d);
    });
    return [...mapa.values()];
  }

  /** Ordena as entradas de um grupo (Sobrevivência primeiro pra recurso, depois chance). */
  function ordenarEntradas(grupo) {
    return [...grupo.entradas].sort((a, b) => {
      if (ehRecurso(grupo.item)) {
        const aSobrevivencia = ehNoDeSobrevivencia(a.local) ? 1 : 0;
        const bSobrevivencia = ehNoDeSobrevivencia(b.local) ? 1 : 0;
        if (aSobrevivencia !== bSobrevivencia) return bSobrevivencia - aSobrevivencia;
      }
      return (b.chance ?? 0) - (a.chance ?? 0);
    });
  }

  function renderizarResultados(drops) {
    estado.innerHTML = '';
    grid.innerHTML = '';

    const filtrados = drops.filter((d) => {
      if (raridadesAtivas.size && !(d.raridade && raridadesAtivas.has(d.raridade))) return false;
      if (categoriaAtiva && d.categoria !== categoriaAtiva) return false;
      return true;
    });

    if (!filtrados.length) {
      renderizarMensagem(t('busca.nadaEncontrado.titulo'), t('busca.nadaEncontrado.corpo'));
      return;
    }

    const grupos = agruparPorItem(filtrados);
    const palavrasDaBusca = palavrasRealce.length || 1;

    grupos.sort((a, b) => {
      // 1) Mais perto do que foi digitado primeiro — quanto menos palavras
      // "sobrando" no nome do item além do que foi buscado, mais em cima.
      // Ex: buscando "Nekros Blueprint", "Nekros Blueprint" (0 sobrando)
      // vem antes de algo como "Nekros Prime Blueprint" (1 sobrando).
      const sobraA = Math.max(0, contarPalavras(a.item) - palavrasDaBusca);
      const sobraB = Math.max(0, contarPalavras(b.item) - palavrasDaBusca);
      if (sobraA !== sobraB) return sobraA - sobraB;

      // 2) Recursos "de montão": Sobrevivência primeiro.
      if (ehRecurso(a.item) || ehRecurso(b.item)) {
        const aSobrevivencia = a.entradas.some((e) => ehNoDeSobrevivencia(e.local)) ? 1 : 0;
        const bSobrevivencia = b.entradas.some((e) => ehNoDeSobrevivencia(e.local)) ? 1 : 0;
        if (aSobrevivencia !== bSobrevivencia) return bSobrevivencia - aSobrevivencia;
      }

      // 3) Maior chance entre as entradas do grupo.
      const melhorA = Math.max(0, ...a.entradas.map((e) => e.chance ?? 0));
      const melhorB = Math.max(0, ...b.entradas.map((e) => e.chance ?? 0));
      return melhorB - melhorA;
    });

    const fragmento = document.createDocumentFragment();
    grupos.slice(0, 100).forEach((grupo) => fragmento.appendChild(criarCardGrupo(grupo)));
    grid.appendChild(fragmento);
  }

  /** Monta o card de um grupo: cabeçalho (imagem + nome) + lista de fontes. */
  function criarCardGrupo(grupo) {
    const card = document.createElement('div');
    card.className = 'card-drop card-drop-grupo' + (grupo.faccao ? ` card-drop--${grupo.faccao}` : '');
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', grupo.item);

    const entradas = ordenarEntradas(grupo).slice(0, 6);

    card.innerHTML = `
      <div class="card-drop-grupo__cabecalho">
        <div class="card-drop__imagem-wrap" data-item-imagem="${grupo.item}">
          <div class="skeleton-card" style="height:100%;border-radius:var(--radius-md)"></div>
        </div>
        <span class="card-drop__item">${realcarTexto(grupo.item)}</span>
      </div>
      <div class="card-drop-grupo__entradas">
        ${entradas.map((d) => {
          const linhaLocal = d.semFonte
            ? `<div class="card-drop__local card-drop__local--info">${d.incarnon ? t('busca.incarnon') : t('busca.semFonte')}</div>`
            : `<div class="card-drop__local">🪐 ${realcarTexto(d.local)}</div>`;
          return `
            <div class="card-drop-entrada">
              <button type="button" class="card-drop__add" aria-label="${t('meudrop.adicionar')}">+</button>
              <div class="card-drop__corpo">
                ${linhaLocal}
                <div class="card-drop__meta">
                  <span>${badgeRaridade(d.raridade) || (d.categoria ? t('categoria.' + d.categoria) : '—')}</span>
                  <span class="card-drop__chance">${d.chance != null ? d.chance.toFixed(2) + '%' : '—'}</span>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    const abrir = () => {
      if (card.dataset.suprimirClique === '1') {
        delete card.dataset.suprimirClique;
        return;
      }
      aoAbrirItem(grupo.item);
    };
    card.addEventListener('click', abrir);
    card.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); abrir(); }
    });

    card.querySelectorAll('.card-drop-entrada').forEach((linha, indice) => {
      const d = entradas[indice];
      linha.addEventListener('click', (ev) => ev.stopPropagation());
      linha.querySelector('.card-drop__add').addEventListener('click', (ev) => {
        ev.stopPropagation();
        solicitarAdicaoComFeedback(linha, d);
      });
      ligarSwipeAdicionar(linha, d);
    });

    carregarImagemDoCard(card.querySelector('[data-item-imagem]'));
    return card;
  }

  async function executarBusca(termo) {
    const minhaId = ++idBuscaAtual;

    // Cancela a busca anterior — evita gastar banda com uma resposta
    // que já não importa mais, e reduz a sensação de lentidão.
    if (controladorAtual) controladorAtual.abort();
    controladorAtual = new AbortController();

    if (cacheDeBusca.has(termo)) {
      ultimosResultados = cacheDeBusca.get(termo);
      renderizarResultados(ultimosResultados);
      return;
    }

    renderizarSkeleton();

    clearTimeout(avisoLentidaoId);
    avisoLentidaoId = setTimeout(() => {
      if (minhaId === idBuscaAtual) {
        const aviso = document.createElement('p');
        aviso.style.textAlign = 'center';
        aviso.style.color = 'var(--texto-fraco)';
        aviso.textContent = t('busca.lenta');
        estado.appendChild(aviso);
      }
    }, AVISO_LENTIDAO_MS);

    try {
      // Busca na API só com a primeira palavra — dá uma rede mais ampla
      // de resultados. As palavras seguintes (mesmo incompletas, tipo
      // "Blue" de "Blueprint") só refinam a lista no navegador, sem
      // precisar bater exatamente com o nome completo na busca do servidor.
      const palavras = termo.split(/\s+/).filter(Boolean);
      const termoBusca = palavras[0];
      palavrasRealce = palavras;

      const resultados = await buscarDrops(termoBusca, controladorAtual.signal);
      clearTimeout(avisoLentidaoId);
      if (minhaId !== idBuscaAtual) return; // uma busca mais nova já foi disparada

      let completos = await complementarComCatalogo(termoBusca, resultados);

      if (minhaId !== idBuscaAtual) return;

      // Refino no cliente: cada palavra digitada precisa aparecer (mesmo
      // que incompleta) no nome do item ou no local — assim "Rhino Blue"
      // já acha "Rhino Blueprint" sem precisar escrever a palavra inteira.
      if (palavras.length > 1) {
        const palavrasNormalizadas = palavras.map(normalizarTexto);
        completos = completos.filter((d) => palavrasNormalizadas.every((p) =>
          normalizarTexto(d.item).includes(p) || normalizarTexto(d.local ?? '').includes(p)
        ));
      }

      cacheDeBusca.set(termo, completos);
      ultimosResultados = completos;
      renderizarResultados(completos);
    } catch (erro) {
      clearTimeout(avisoLentidaoId);
      if (minhaId !== idBuscaAtual) return;
      if (erro?.name === 'AbortError') return; // cancelada de propósito, não é erro

      if (erro instanceof ErroDropsIndisponivel) {
        if (ultimosResultados.length) {
          renderizarResultados(ultimosResultados);
        } else {
          renderizarMensagem(t('busca.erro.titulo'), t('busca.erro.corpo'), 'erro');
        }
      } else {
        console.error('[busca] erro inesperado:', erro);
        renderizarMensagem(t('busca.erro.titulo'), t('busca.erro.corpo'), 'erro');
      }
    }
  }

  input.addEventListener('input', () => {
    const termo = input.value.trim();
    botaoLimpar.classList.toggle('visivel', termo.length > 0);

    clearTimeout(temporizador);

    if (termo.length < TAMANHO_MINIMO_BUSCA) {
      idBuscaAtual++; // invalida qualquer busca pendente
      if (controladorAtual) controladorAtual.abort();
      ultimosResultados = [];
      palavrasRealce = [];
      renderizarEstadoInicial();
      return;
    }

    temporizador = setTimeout(() => executarBusca(termo), DEBOUNCE_BUSCA);
  });

  botaoLimpar.addEventListener('click', () => {
    input.value = '';
    input.focus();
    botaoLimpar.classList.remove('visivel');
    idBuscaAtual++;
    if (controladorAtual) controladorAtual.abort();
    ultimosResultados = [];
    palavrasRealce = [];
    renderizarEstadoInicial();
  });

  chipsRaridade.forEach((chip) => {
    chip.addEventListener('click', () => {
      const raridade = chip.dataset.raridade;
      chip.classList.toggle('ativo');
      if (raridadesAtivas.has(raridade)) {
        raridadesAtivas.delete(raridade);
      } else {
        raridadesAtivas.add(raridade);
      }
      renderizarResultados(ultimosResultados);
    });
  });

  chipsCategoria.forEach((chip) => {
    chip.addEventListener('click', () => {
      categoriaAtiva = chip.dataset.categoria;
      chipsCategoria.forEach((c) => c.classList.toggle('ativo', c === chip));
      renderizarResultados(ultimosResultados);
    });
  });

  renderizarEstadoInicial();
}

/** Chamado quando o idioma muda, pra re-traduzir o que já está na tela. */
export function reaplicarTraducoesNaBusca() {
  estadoInterno?.reaplicarTraducoes();
}

/** Usado pelos atalhos de busca rápida — dispara a busca por um termo fixo. */
export function buscarTermoExterno(termo) {
  estadoInterno?.buscarTermo(termo);
}

/**
 * Arrastar o card pra direita (swipe) pede pra adicionar ao Meu Drop —
 * escolhido porque a página já rola na vertical, então o gesto
 * horizontal não briga com o scroll. Lógica compartilhada com o painel
 * de item, em js/ui/swipeParaAdicionar.js.
 */

/**
 * Monta o texto de preço de loja a partir dos dados exatos da API —
 * não é chute, é o preço real que a DE cobra. Prioriza Platina (compra
 * já pronta) e usa Créditos (só o blueprint) como alternativa.
 */
function formatarPrecoMercado(detalhes) {
  if (detalhes.precoPlatina) {
    return t('busca.lojaPlatina').replace('{preco}', detalhes.precoPlatina.toLocaleString());
  }
  if (detalhes.precoCreditos) {
    return t('busca.lojaCreditos').replace('{preco}', detalhes.precoCreditos.toLocaleString());
  }
  return null;
}

/**
 * Muitos itens do jogo nunca aparecem numa busca de drop por chance:
 * recompensa garantida de quest, construído no Arsenal, pesquisado no
 * Dojo do clã, comprado no Mercado, etc. Isso não significa que o item
 * não existe — só que a tabela de drops (RNG) não é o lugar certo pra
 * essa informação. Complementamos com o catálogo completo de itens
 * sempre que a busca por RNG não encontrar o item exato buscado.
 */
async function complementarComCatalogo(termo, resultadosRng) {
  try {
    const idioma = obterIdiomaAtual();
    const nomeBase = removerSufixoComponente(termo);
    const nomesCatalogo = await buscarNomesCatalogoNoDataset(termo);
    const nomesCandidatos = [...new Set([nomeBase, ...nomesCatalogo])]
      .filter((nome) => !resultadosRng.some((r) => normalizarTexto(r.item) === normalizarTexto(nome)))
      .slice(0, 30);
    const jaExistentes = new Set(resultadosRng.map((r) => `${r.item}|${r.local}`));
    const sinteticos = [];

    for (const nome of nomesCandidatos) {
      const detalhes = await buscarDetalhesItem(nome, idioma);
      if (!detalhes) continue;

      try {
        processarItemDoCatalogo(detalhes, sinteticos);
      } catch (erroItem) {
        console.error(`[busca] falha ao processar item "${detalhes?.nome}" do catálogo:`, erroItem);
      }
    }

    const novos = sinteticos.filter((s) => !jaExistentes.has(`${s.item}|${s.local}`));
    return [...resultadosRng, ...novos];
  } catch (erro) {
    console.error('[busca] erro ao complementar com o catálogo:', erro);
    return resultadosRng;
  }
}

/** Processa um item do catálogo e empilha os cards sintéticos correspondentes. */
function processarItemDoCatalogo(detalhes, sinteticos) {
  if (!detalhes.nome) return;

  const ofertaBaro = buscarOfertaBaro(detalhes.nome);
  if (ofertaBaro) {
    sinteticos.push({
      item: detalhes.nome,
      local: ofertaBaro.local,
      rotacao: null,
      raridade: 'legendary',
      categoria: 'baro',
      faccao: null,
      chance: null,
    });
  }

  const fontes = detalhes.fontesAlternativas ?? [];
  const temFontesDeComponente = fontes.length > 0;

  // 1) Toda fonte estruturada que existir (drops de componente/quest).
  fontes.forEach((f) => {
    sinteticos.push({
      item: [detalhes.nome, f.parte].filter(Boolean).join(' '),
      local: f.local ?? '—',
      rotacao: null,
      raridade: normalizarRaridade(f.raridade),
      categoria: ehWarframe(detalhes.nome) ? 'warframe' : null,
      faccao: null,
      chance: f.chance,
    });
  });

  // O Blueprint pode não ter fonte mesmo quando as outras peças têm
  // (ex: Rhino: Chassis/Neuroptics/Systems caem do Jackal, mas o
  // Blueprint só é vendido na loja) — por isso isso NUNCA é pulado
  // só porque outras peças já foram encontradas acima.
  const precisaFonteDoBlueprint = !temFontesDeComponente || detalhes.temBlueprintSemFonteDeDrop;
  if (!precisaFonteDoBlueprint) return;

  const nomeParaCard = temFontesDeComponente ? `${detalhes.nome} Blueprint` : detalhes.nome;

  if (!temFontesDeComponente) {
    // Item inteiro sem nenhuma fonte — tenta a lista manual primeiro.
    const fonteManual = buscarFonteManual(detalhes.nome);
    if (fonteManual) {
      sinteticos.push({
        item: detalhes.nome,
        local: fonteManual.local,
        rotacao: null,
        raridade: null,
        categoria: fonteManual.categoria,
        faccao: null,
        chance: null,
      });
      return;
    }
  }

  const precoMercado = formatarPrecoMercado(detalhes);

  if (detalhes.provavelPesquisaDojo) {
    // Sinal automático (material de pesquisa detectado) — combina
    // com o preço de loja quando a gente também sabe esse dado.
    sinteticos.push({
      item: nomeParaCard,
      local: precoMercado
        ? `${t('busca.dojoLaboratorioDesconhecido')} — ${precoMercado}`
        : t('busca.dojoLaboratorioDesconhecido'),
      rotacao: null,
      raridade: null,
      categoria: 'dojo',
      faccao: null,
      chance: null,
    });
    return;
  }

  if (precoMercado) {
    // Preço de loja — dado exato, não é chute.
    sinteticos.push({
      item: nomeParaCard,
      local: precoMercado,
      rotacao: null,
      raridade: null,
      categoria: 'mercado',
      faccao: null,
      chance: null,
    });
    return;
  }

  if (!temFontesDeComponente) {
    // Nada estruturado, nada manual, sem preço de loja — mostra que
    // existe, com nota honesta.
    sinteticos.push({
      item: detalhes.nome,
      local: null,
      rotacao: null,
      raridade: null,
      categoria: ehWarframe(detalhes.nome) ? 'warframe' : null,
      faccao: null,
      chance: null,
      semFonte: true,
      incarnon: ehAdaptadorIncarnon(detalhes.nome),
    });
  }
}
