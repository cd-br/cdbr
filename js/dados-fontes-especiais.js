/* =========================================================
   DADOS-FONTES-ESPECIAIS.JS — Casos conhecidos que não são
   "drop" nem aparecem com fonte estruturada nos dados da API,
   mas que sabemos de onde vêm (conhecimento do próprio jogo).
   ========================================================= */
import { normalizarTexto } from './utils/normalizar.js';

export function ehAdaptadorIncarnon(nomeItem) {
  return normalizarTexto(nomeItem).includes('incarnon');
}
