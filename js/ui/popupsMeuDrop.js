/* =========================================================
   UI/POPUPS-MEU-DROP.JS — Confirmar adição, adicionar nota,
   e resolver conflito de importação (substituir x mesclar)
   ========================================================= */
import * as meuDrop from '../meuDrop.js';

let elementos = null;
let dropPendente = null;
let resolverImportacao = null;

export function iniciarPopupsMeuDrop(els) {
  elementos = els;

  els.confirmarAceitar.addEventListener('click', () => {
    fechar(els.overlayConfirmar);
    abrirPopupNota();
  });
  els.confirmarRecusar.addEventListener('click', () => {
    fechar(els.overlayConfirmar);
    dropPendente = null;
  });

  els.notaSalvar.addEventListener('click', () => finalizarAdicao(els.notaTexto.value.trim()));
  els.notaPular.addEventListener('click', () => finalizarAdicao(''));

  [els.overlayConfirmar, els.overlayNota, els.overlayImportConflito].forEach((overlay) => {
    overlay.addEventListener('click', (ev) => {
      if (ev.target === overlay) fechar(overlay);
    });
  });

  els.importMesclar.addEventListener('click', () => concluirImportacao('mesclar'));
  els.importSubstituir.addEventListener('click', () => concluirImportacao('substituir'));
  els.importCancelar.addEventListener('click', () => concluirImportacao(null));
}

function finalizarAdicao(nota) {
  if (dropPendente) {
    meuDrop.adicionar(dropPendente, nota);
    document.dispatchEvent(new CustomEvent('meudrop:mudou'));
  }
  dropPendente = null;
  elementos.notaTexto.value = '';
  fechar(elementos.overlayNota);
}

function concluirImportacao(modo) {
  fechar(elementos.overlayImportConflito);
  resolverImportacao?.(modo);
  resolverImportacao = null;
}

function abrir(overlay) { overlay.classList.add('aberto'); }
function fechar(overlay) { overlay.classList.remove('aberto'); }

/** Chame isso a partir do card (swipe ou botão "+"). */
export function solicitarAdicionar(drop) {
  if (meuDrop.estaSalvo(drop.item, drop.local)) {
    return 'ja-salvo';
  }
  dropPendente = drop;
  elementos.confirmarNome.textContent = drop.item;
  abrir(elementos.overlayConfirmar);
  return 'solicitado';
}

function abrirPopupNota() {
  abrir(elementos.overlayNota);
  elementos.notaTexto.focus();
}

/**
 * Mostra o popup de conflito e espera a escolha do usuário.
 * @returns {Promise<'mesclar'|'substituir'|null>}
 */
export function perguntarModoImportacao() {
  return new Promise((resolve) => {
    resolverImportacao = resolve;
    abrir(elementos.overlayImportConflito);
  });
}
