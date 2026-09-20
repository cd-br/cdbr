/* =========================================================
   UI/LIGHTBOX.JS — Visualizador de imagem em tamanho grande
   Usado no painel de detalhes do item, pra ler estatísticas de
   mods e ver a arte do item com mais nitidez.
   ========================================================= */

let overlay = null;
let imgEl = null;

export function iniciarLightbox({ overlay: el, img, botaoFechar }) {
  overlay = el;
  imgEl = img;

  const fechar = () => {
    overlay.classList.remove('aberto');
    imgEl.src = ''; // libera a memória da imagem grande
  };

  botaoFechar.addEventListener('click', fechar);
  overlay.addEventListener('click', (ev) => {
    if (ev.target === overlay) fechar();
  });
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape' && overlay.classList.contains('aberto')) fechar();
  });
}

/**
 * Torna uma <img> existente clicável pra abrir em tamanho grande.
 * Chame isso toda vez que uma imagem de item for inserida na tela.
 */
export function tornarClicavel(elementoImg) {
  if (!elementoImg || elementoImg.dataset.lightboxLigado) return;
  elementoImg.dataset.lightboxLigado = '1';
  elementoImg.addEventListener('click', (ev) => {
    ev.stopPropagation(); // não deixa o clique "vazar" pro card/modal por trás
    abrirLightbox(elementoImg.src, elementoImg.alt);
  });
}

export function abrirLightbox(src, alt) {
  if (!overlay || !src) return;
  imgEl.src = src;
  imgEl.alt = alt || '';
  overlay.classList.add('aberto');
}
