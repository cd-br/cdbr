/* =========================================================
   UTILS/NORMALIZAR.JS — Normalização de texto e nomes de item
   ========================================================= */
import { SUFIXOS_COMPONENTE, SUFIXOS_VARIANTE, wikiUrl } from '../config.js';

/** Remove acentos, baixa a caixa e colapsa espaços — para comparar texto. */
export function normalizarTexto(texto) {
  return String(texto)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

const TODOS_OS_SUFIXOS = [...SUFIXOS_COMPONENTE, ...SUFIXOS_VARIANTE];

/**
 * Remove sufixos conhecidos (peça de componente OU variante tipo Prime/
 * Umbra) — repetidamente, até não sobrar nenhum. Isso cobre qualquer
 * ordem em que apareçam: "Hydroid Neuroptics Prime" e "Hydroid Prime
 * Neuroptics" viram "Hydroid" nos dois casos.
 */
export function removerSufixoComponente(nome) {
  let atual = nome;
  let removeuAlgo = true;

  while (removeuAlgo) {
    removeuAlgo = false;
    for (const sufixo of TODOS_OS_SUFIXOS) {
      if (atual.endsWith(sufixo)) {
        atual = atual.slice(0, -sufixo.length).trim();
        removeuAlgo = true;
        break;
      }
    }
  }

  return atual;
}

/**
 * Monta a URL de fallback para a wiki oficial — usada só quando
 * nenhuma fonte de dados (drops ou detalhes de item) tem informação
 * sobre o item procurado.
 */
export function urlFallbackWiki(nomeItem) {
  return wikiUrl(nomeItem);
}
