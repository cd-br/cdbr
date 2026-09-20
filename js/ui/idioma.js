/* =========================================================
   UI/IDIOMA.JS — Alternância de idioma PT-BR / Inglês
   ========================================================= */
import { IDIOMAS_SUPORTADOS, IDIOMA_PADRAO } from '../config.js';

const CHAVE_STORAGE = 'guia-drops:idioma';

/**
 * Idioma atual: prioridade é 1) escolha manual salva, 2) idioma do
 * navegador (se suportado), 3) padrão do projeto.
 */
export function obterIdiomaAtual() {
  const salvo = localStorage.getItem(CHAVE_STORAGE);
  if (salvo && IDIOMAS_SUPORTADOS.includes(salvo)) return salvo;

  const doNavegador = (navigator.language || '').slice(0, 2).toLowerCase();
  if (IDIOMAS_SUPORTADOS.includes(doNavegador)) return doNavegador;

  return IDIOMA_PADRAO;
}

export function definirIdioma(idioma) {
  if (!IDIOMAS_SUPORTADOS.includes(idioma)) return;
  localStorage.setItem(CHAVE_STORAGE, idioma);
}

/** Liga o toggle visual de idioma e chama `aoTrocar` quando o usuário escolhe outro. */
export function iniciarToggleIdioma(elementoToggle, aoTrocar) {
  const atualizarVisual = (idioma) => {
    elementoToggle.querySelectorAll('[data-idioma]').forEach((botao) => {
      botao.classList.toggle('ativo', botao.dataset.idioma === idioma);
    });
  };

  elementoToggle.querySelectorAll('[data-idioma]').forEach((botao) => {
    botao.addEventListener('click', () => {
      const idioma = botao.dataset.idioma;
      definirIdioma(idioma);
      atualizarVisual(idioma);
      aoTrocar(idioma);
    });
  });

  atualizarVisual(obterIdiomaAtual());
}
