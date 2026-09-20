/* =========================================================
   UI/SWIPE-PARA-ADICIONAR.JS — Gesto de arrastar pra direita
   que pede adicionar ao Meu Drop. Usado tanto nos cards da busca
   principal quanto nos cards do painel "Onde encontrar" — mesma
   lógica, um lugar só, pra nunca ficar um sem o outro de novo.
   ========================================================= */
import { solicitarAdicionar } from './popupsMeuDrop.js';

/**
 * @param {HTMLElement} card elemento com a classe .card-drop
 * @param {object} drop objeto no formato esperado por solicitarAdicionar
 * @param {string} [seletorCorpo] seletor do miolo que desliza visualmente
 */
export function ligarSwipeAdicionar(card, drop, seletorCorpo = '.card-drop__corpo') {
  const corpo = card.querySelector(seletorCorpo);
  if (!corpo) return;

  let inicioX = 0;
  let inicioY = 0;
  let emAndamento = false;
  let ativouSwipe = false;

  card.addEventListener('pointerdown', (ev) => {
    if (ev.pointerType === 'mouse' && ev.button !== 0) return;
    inicioX = ev.clientX;
    inicioY = ev.clientY;
    emAndamento = true;
    ativouSwipe = false;
  });

  card.addEventListener('pointermove', (ev) => {
    if (!emAndamento) return;
    const dx = ev.clientX - inicioX;
    const dy = ev.clientY - inicioY;
    if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;

    if (Math.abs(dx) > Math.abs(dy) && dx > 0) {
      ativouSwipe = true;
      const deslocamento = Math.min(dx, 110);
      corpo.style.transform = `translateX(${deslocamento}px)`;
      card.classList.toggle('card-drop--swipe-pronto', deslocamento > 80);
    }
  });

  const finalizar = (ev) => {
    if (!emAndamento) return;
    emAndamento = false;
    const dx = (ev.clientX ?? inicioX) - inicioX;
    corpo.style.transform = '';
    card.classList.remove('card-drop--swipe-pronto');

    if (ativouSwipe && dx > 80) {
      solicitarAdicaoComFeedback(card, drop);
    }
    if (ativouSwipe) {
      card.dataset.suprimirClique = '1';
    }
  };

  card.addEventListener('pointerup', finalizar);
  card.addEventListener('pointercancel', finalizar);
}

/** Também usado pelo clique no botão "+" (sem precisar do gesto). */
export function solicitarAdicaoComFeedback(card, drop) {
  const resultado = solicitarAdicionar(drop);
  if (resultado === 'ja-salvo') {
    card.classList.add('card-drop--ja-salvo');
    setTimeout(() => card.classList.remove('card-drop--ja-salvo'), 900);
  }
  return resultado;
}
