/* =========================================================
   UI/PAINEL-ITEM.JS — Modal do item: "Onde encontrar" (drops)
   + "Detalhes" (nome/descrição/imagem), com fallback pra wiki
   só quando nenhuma das duas fontes tem informação.
   ========================================================= */
import { buscarDrops, ErroDropsIndisponivel } from '../api/drops.js';
import { buscarDetalhesItem } from '../api/items.js';
import { imagemLocalDoItem } from '../imagens-locais.js';
import { normalizarTexto, removerSufixoComponente, urlFallbackWiki } from '../utils/normalizar.js';
import { ehAdaptadorIncarnon } from '../dados-fontes-especiais.js';
import { buscarFonteManual } from '../dados-fontes-manuais.js';
import { ligarSwipeAdicionar, solicitarAdicaoComFeedback } from './swipeParaAdicionar.js';
import { obterIdiomaAtual } from './idioma.js';
import { tornarClicavel } from './lightbox.js';
import { t } from '../i18n.js';

let elementos = null;
let itemAberto = null;

export function iniciarPainelItem({ overlay, modal, botaoFechar, tabs, painéis, corpoOnde, corpoDetalhes }) {
  elementos = { overlay, modal, botaoFechar, tabs, painéis, corpoOnde, corpoDetalhes };

  botaoFechar.addEventListener('click', fecharPainel);
  overlay.addEventListener('click', (ev) => {
    if (ev.target === overlay) fecharPainel();
  });
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape' && overlay.classList.contains('aberto')) fecharPainel();
  });

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => ativarTab(tab.dataset.tab));
  });
}

function ativarTab(nomeTab) {
  elementos.tabs.forEach((tab) => tab.classList.toggle('ativo', tab.dataset.tab === nomeTab));
  elementos.painéis.forEach((p) => p.classList.toggle('ativo', p.dataset.painel === nomeTab));
}

export function fecharPainel() {
  elementos.overlay.classList.remove('aberto');
  itemAberto = null;
}

export async function abrirPainelItem(nomeItem) {
  itemAberto = nomeItem;
  elementos.overlay.classList.add('aberto');

  const local = imagemLocalDoItem(nomeItem);
  elementos.modal.querySelector('.modal__header').innerHTML = local
    ? `<img class="modal__imagem" src="${local}" alt="${nomeItem}">
       <h3 id="modal-titulo" class="modal__titulo">${nomeItem}</h3>`
    : `<h3 id="modal-titulo" class="modal__titulo">${nomeItem}</h3>`;

  if (local) tornarClicavel(elementos.modal.querySelector('.modal__imagem'));

  ativarTab('onde');

  carregarOndeEncontrar(nomeItem);
  carregarDetalhes(nomeItem);
}

async function carregarOndeEncontrar(nomeItem) {
  const alvo = elementos.corpoOnde;
  alvo.innerHTML = '<div class="skeleton-card" style="height:64px"></div>';

  try {
    const resultados = await buscarDrops(nomeItem);
    if (itemAberto !== nomeItem) return; // usuário já trocou de item

    const alvoNormalizado = normalizarTexto(nomeItem);
    const correspondentes = resultados.filter(
      (d) => normalizarTexto(d.item) === alvoNormalizado
    );

    if (correspondentes.length) {
      renderizarCartoesDeDrop(alvo, nomeItem, correspondentes);
      return;
    }

    // Nada na tabela de RNG — tenta achar uma fonte "garantida" (quest,
    // por exemplo), que vive nos dados de detalhe do item, não na tabela
    // de drops oficial.
    await tentarFontesAlternativas(nomeItem, alvo);
  } catch (erro) {
    if (itemAberto !== nomeItem) return;
    if (erro instanceof ErroDropsIndisponivel) {
      alvo.innerHTML = `<p>${t('modal.erroDrops')}</p>`;
    } else {
      console.error('[painelItem] erro ao buscar drops:', erro);
      alvo.innerHTML = `<p>${t('modal.erroGenerico')}</p>`;
    }
  }
}

/**
 * Desenha os cards de "onde encontrar" dentro de `alvo` e já liga o
 * botão "+" de cada um pra adicionar ao Meu Drop.
 * @param {HTMLElement} alvo
 * @param {string} nomeBase nome do item sem sufixo de peça (ex: "Rhino")
 * @param {object[]} lista
 */
function renderizarCartoesDeDrop(alvo, nomeBase, lista) {
  const ordenada = [...lista].sort((a, b) => (b.chance ?? 0) - (a.chance ?? 0));

  alvo.innerHTML = ordenada.map((d, indice) => `
    <div class="card-drop" style="cursor:default">
      <button type="button" class="card-drop__add" data-indice="${indice}" aria-label="${t('meudrop.adicionar')}">+</button>
      <div class="card-drop__corpo">
        ${d.parte ? `<div class="card-drop__local" style="color:var(--destaque)">🔧 ${d.parte}</div>` : ''}
        <div class="card-drop__local">🪐 ${d.local}</div>
        <div class="card-drop__meta">
          <span>${d.rotacao ? `${d.rotacao}` : (d.raridade ? t('raridade.' + d.raridade) : (d.tipo ?? '—'))}</span>
          <span class="card-drop__chance">${d.chance != null ? d.chance.toFixed(2) + '%' : '—'}</span>
        </div>
      </div>
    </div>
  `).join('');

  alvo.querySelectorAll('.card-drop').forEach((card, indice) => {
    const d = ordenada[indice];
    const drop = {
      item: [nomeBase, d.parte].filter(Boolean).join(' '),
      local: d.local ?? null,
      categoria: null,
      raridade: d.raridade ?? null,
      chance: d.chance ?? null,
      faccao: null,
    };

    card.querySelector('.card-drop__add').addEventListener('click', (ev) => {
      ev.stopPropagation();
      const botao = ev.currentTarget;
      const resultado = solicitarAdicaoComFeedback(card, drop);
      if (resultado === 'ja-salvo') {
        botao.textContent = '✓';
        setTimeout(() => { botao.textContent = '+'; }, 900);
      }
    });

    ligarSwipeAdicionar(card, drop);
  });
}

async function tentarFontesAlternativas(nomeItem, alvo) {
  try {
    const idioma = obterIdiomaAtual();
    let detalhes = await buscarDetalhesItem(nomeItem, idioma);

    const nomeBase = removerSufixoComponente(nomeItem);
    if (!detalhes && nomeBase !== nomeItem) {
      detalhes = await buscarDetalhesItem(nomeBase, idioma);
    }

    if (itemAberto !== nomeItem) return;

    const fontes = detalhes?.fontesAlternativas ?? [];
    const identificadorParte = detalhes
      ? normalizarTexto(nomeBase.replace(new RegExp(`^${detalhes.nome ?? ''}`, 'i'), '').trim())
      : '';

    // Se o usuário buscou uma peça específica (ex: "Rhino Blueprint"),
    // mostra só a fonte dessa peça — não cai pras outras peças por engano
    // só porque elas têm drop e essa não.
    const filtradas = identificadorParte
      ? fontes.filter((f) => normalizarTexto(f.parte ?? '') === identificadorParte)
      : fontes;

    if (filtradas.length) {
      renderizarCartoesDeDrop(alvo, detalhes.nome, filtradas);
      return;
    }

    const fonteManual = buscarFonteManual(nomeItem) ?? (nomeBase !== nomeItem ? buscarFonteManual(nomeBase) : null);
    if (fonteManual) {
      renderizarCartoesDeDrop(alvo, detalhes?.nome ?? nomeBase, [{ local: fonteManual.local, chance: null, raridade: null, rotacao: null }]);
      return;
    }

    const precoMercado = detalhes ? formatarPrecoMercado(detalhes) : null;

    if (detalhes?.provavelPesquisaDojo) {
      const local = precoMercado
        ? `${t('busca.dojoLaboratorioDesconhecido')} — ${precoMercado}`
        : t('busca.dojoLaboratorioDesconhecido');
      renderizarCartoesDeDrop(alvo, detalhes.nome, [{ local, chance: null, raridade: null, rotacao: null }]);
      return;
    }

    if (precoMercado) {
      renderizarCartoesDeDrop(alvo, detalhes.nome, [{ local: precoMercado, chance: null, raridade: null, rotacao: null }]);
      return;
    }

    // Não pediu peça específica nenhuma e tinha fontes de outras peças —
    // mostra como visão geral em vez de dizer que não achou nada.
    if (!identificadorParte && fontes.length) {
      renderizarCartoesDeDrop(alvo, detalhes.nome, fontes);
      return;
    }

    alvo.innerHTML = mensagemSemDados(nomeItem);
  } catch (erro) {
    if (itemAberto !== nomeItem) return;
    console.error('[painelItem] erro ao buscar fontes alternativas:', erro);
    alvo.innerHTML = mensagemSemDados(nomeItem);
  }
}

/** Mesma lógica do busca.js — preço real de loja, sem chute. */
function formatarPrecoMercado(detalhes) {
  if (detalhes.precoPlatina) {
    return t('busca.lojaPlatina').replace('{preco}', detalhes.precoPlatina.toLocaleString());
  }
  if (detalhes.precoCreditos) {
    return t('busca.lojaCreditos').replace('{preco}', detalhes.precoCreditos.toLocaleString());
  }
  return null;
}

async function carregarDetalhes(nomeItem) {
  const alvo = elementos.corpoDetalhes;
  alvo.innerHTML = '<div class="skeleton-card" style="height:80px"></div>';
  const idioma = obterIdiomaAtual();

  try {
    let detalhes = await buscarDetalhesItem(nomeItem, idioma);

    // Nomes de drop às vezes trazem sufixo de componente
    // ("X Chassis Blueprint") que não bate com o nome canônico do
    // item ("X Chassis") — tenta de novo sem o sufixo antes de desistir.
    if (!detalhes) {
      const nomeSemSufixo = removerSufixoComponente(nomeItem);
      if (nomeSemSufixo !== nomeItem) {
        detalhes = await buscarDetalhesItem(nomeSemSufixo, idioma);
      }
    }

    if (itemAberto !== nomeItem) return;

    if (!detalhes) {
      alvo.innerHTML = mensagemSemDados(nomeItem);
      return;
    }

    // Se já temos uma imagem local exibida, não vale a pena trocar por
    // uma da rede — só atualiza o cabeçalho se ainda não há imagem.
    const jaTemImagemLocal = !!elementos.modal.querySelector('.modal__imagem');
    if (!jaTemImagemLocal) {
      const imagem = detalhes.imagemUrl
        ? `<img class="modal__imagem" src="${detalhes.imagemUrl}" alt="${detalhes.nome ?? nomeItem}" loading="lazy" onerror="this.remove()">`
        : '';
      elementos.modal.querySelector('.modal__header').innerHTML =
        imagem + `<h3 id="modal-titulo" class="modal__titulo">${detalhes.nome ?? nomeItem}</h3>`;

      const imgInserida = elementos.modal.querySelector('.modal__imagem');
      if (imgInserida) tornarClicavel(imgInserida);
    }

    alvo.innerHTML = `
      ${detalhes.categoria ? `<p><strong>${t('modal.categoria')}:</strong> ${detalhes.categoria}</p>` : ''}
      ${detalhes.masteryRank != null ? `<p><strong>${t('modal.masteryRank')}:</strong> ${detalhes.masteryRank}</p>` : ''}
      ${detalhes.descricao ? `<p>${detalhes.descricao}</p>` : `<p>${t('modal.semDescricao')}</p>`}
    `;
  } catch (erro) {
    if (itemAberto !== nomeItem) return;
    console.error('[painelItem] erro ao buscar detalhes:', erro);
    alvo.innerHTML = `<p>${t('modal.erroDetalhes')}</p>`;
  }
}

function mensagemSemDados(nomeItem) {
  const corpo = ehAdaptadorIncarnon(nomeItem)
    ? t('modal.semDadosIncarnon')
    : t('modal.semDados');

  return `
    <p>${corpo}</p>
    <a class="modal__link-wiki" href="${urlFallbackWiki(nomeItem)}" target="_blank" rel="noopener">
      ${t('modal.verWiki')}
    </a>
  `;
}

/** Chamado quando o usuário troca de idioma com o painel aberto. */
export function atualizarIdiomaPainelAberto() {
  if (itemAberto) {
    carregarDetalhes(itemAberto);
    carregarOndeEncontrar(itemAberto); // re-traduz raridades exibidas
  }
}
