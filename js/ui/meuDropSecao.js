/* =========================================================
   UI/MEU-DROP-SECAO.JS — A aba "Meu Drop": lista salva, busca
   interna (só filtra o que já está salvo), reordenar arrastando,
   editar nota, remover, exportar/importar.
   ========================================================= */
import * as meuDrop from '../meuDrop.js';
import { perguntarModoImportacao } from './popupsMeuDrop.js';
import { normalizarTexto } from '../utils/normalizar.js';
import { t } from '../i18n.js';

let elementos = null;
let termoFiltro = '';
let arrastando = null; // índice do item sendo arrastado

export function iniciarMeuDropSecao(els) {
  elementos = els;

  renderizar();
  document.addEventListener('meudrop:mudou', renderizar);

  els.busca.addEventListener('input', () => {
    termoFiltro = normalizarTexto(els.busca.value);
    renderizar();
  });

  els.exportar.addEventListener('click', () => meuDrop.exportarComoArquivo());

  els.importarBotao.addEventListener('click', () => els.importarInput.click());
  els.importarInput.addEventListener('change', async () => {
    const arquivo = els.importarInput.files?.[0];
    els.importarInput.value = ''; // permite escolher o mesmo arquivo de novo depois
    if (!arquivo) return;

    const jaTinhaItens = meuDrop.listarSalvos().length > 0;
    const modo = jaTinhaItens ? await perguntarModoImportacao() : 'mesclar';
    if (!modo) return;

    try {
      await meuDrop.importarDeArquivo(arquivo, modo);
      renderizar();
    } catch (erro) {
      console.error('[meuDropSecao] falha ao importar:', erro);
      alert(t('meudrop.erroImportar'));
    }
  });
}

function renderizar() {
  const todos = meuDrop.listarSalvos();
  const filtrados = termoFiltro
    ? todos.filter((s) =>
        normalizarTexto(s.item).includes(termoFiltro) ||
        normalizarTexto(s.local ?? '').includes(termoFiltro) ||
        normalizarTexto(s.nota ?? '').includes(termoFiltro))
    : todos;

  elementos.contador.textContent = String(todos.length);
  elementos.vazio.style.display = todos.length ? 'none' : 'block';
  elementos.lista.innerHTML = '';

  if (!filtrados.length && termoFiltro) {
    elementos.lista.innerHTML = `<p class="meudrop-sem-resultado">${t('meudrop.nadaEncontrado')}</p>`;
    return;
  }

  const fragmento = document.createDocumentFragment();

  filtrados.forEach((entrada) => {
    const indiceReal = todos.findIndex((t2) => t2.id === entrada.id);
    const linha = document.createElement('div');
    linha.className = 'meudrop-item';
    linha.dataset.id = entrada.id;
    linha.dataset.indice = String(indiceReal);
    linha.innerHTML = `
      <button type="button" class="meudrop-item__alca" aria-label="${t('meudrop.arrastar')}">⠿</button>
      <div class="meudrop-item__corpo">
        <div class="meudrop-item__topo">
          <span class="meudrop-item__nome">${entrada.item}</span>
          ${entrada.chance != null ? `<span class="meudrop-item__chance">${entrada.chance.toFixed(2)}%</span>` : ''}
        </div>
        ${entrada.local ? `<div class="meudrop-item__local">🪐 ${entrada.local}</div>` : ''}
        <textarea class="meudrop-item__nota" placeholder="${t('meudrop.notaPlaceholder')}">${entrada.nota ?? ''}</textarea>
      </div>
      <button type="button" class="meudrop-item__remover" aria-label="${t('meudrop.remover')}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/>
        </svg>
      </button>
    `;

    linha.querySelector('.meudrop-item__remover').addEventListener('click', () => {
      meuDrop.remover(entrada.id);
      renderizar();
    });

    const textarea = linha.querySelector('.meudrop-item__nota');
    textarea.addEventListener('change', () => meuDrop.atualizarNota(entrada.id, textarea.value));

    ligarArrastar(linha);
    fragmento.appendChild(linha);
  });

  elementos.lista.appendChild(fragmento);
}

/** Arrastar pra reordenar — funciona com mouse e toque (Pointer Events). */
function ligarArrastar(linha) {
  const alca = linha.querySelector('.meudrop-item__alca');

  alca.addEventListener('pointerdown', (ev) => {
    ev.preventDefault();
    arrastando = Number(linha.dataset.indice);
    linha.classList.add('meudrop-item--arrastando');
    alca.setPointerCapture(ev.pointerId);
  });

  alca.addEventListener('pointermove', (ev) => {
    if (arrastando === null) return;
    const abaixo = document.elementFromPoint(ev.clientX, ev.clientY)?.closest('.meudrop-item');
    if (!abaixo || abaixo === linha) return;

    const indiceAlvo = Number(abaixo.dataset.indice);
    if (Number.isNaN(indiceAlvo) || indiceAlvo === arrastando) return;

    meuDrop.reordenar(arrastando, indiceAlvo);
    arrastando = indiceAlvo;
    renderizar();
    // Re-liga o "pressionar" pro elemento re-renderizado, senão perde o gesto.
    const novaLinha = elementos.lista.querySelector(`[data-id="${linha.dataset.id}"]`);
    novaLinha?.classList.add('meudrop-item--arrastando');
  });

  alca.addEventListener('pointerup', () => {
    arrastando = null;
    elementos.lista.querySelectorAll('.meudrop-item--arrastando')
      .forEach((el) => el.classList.remove('meudrop-item--arrastando'));
  });
}
