/* =========================================================
   DADOS-RECURSOS.JS — Recursos "de quantidade" conhecidos
   Usado só pra decidir se um item deve priorizar missões de
   Sobrevivência nos resultados (ex: Ferrite, Rubedo — coisas
   que se junta aos montes, diferente de uma peça única).
   ========================================================= */
import { normalizarTexto } from './utils/normalizar.js';

const NOMES_RECURSOS = [
  'Ferrite', 'Rubedo', 'Salvage', 'Circuits', 'Alloy Plate', 'Orokin Cell',
  'Control Module', 'Neurodes', 'Morphics', 'Nano Spores', 'Plastids',
  'Gallium', 'Hexenon', 'Kuva', 'Tellurium', 'Detonite Ampule',
  'Fieldron Sample', 'Mutagen Sample', 'Polymer Bundle', 'Argon Crystal',
  'Nitain Extract', 'Cryotic', 'Oxium', 'Nano-Spores', 'Pustrels',
];

const CONJUNTO = new Set(NOMES_RECURSOS.map(normalizarTexto));

export function ehRecurso(nomeItem) {
  return CONJUNTO.has(normalizarTexto(nomeItem));
}
