/* =========================================================
   DADOS-WARFRAMES.JS — Lista de Warframes conhecidos
   Usada pra classificar um resultado de busca como "Warframe"
   (frame inteiro ou peça: Chassis/Neuroptics/Systems/Blueprint)
   independente de onde ele dropa.

   Se a Digital Extremes lançar um Warframe novo e ele não
   aparecer na categoria certa, é só me avisar o nome que eu
   adiciono aqui.
   ========================================================= */
import { normalizarTexto, removerSufixoComponente } from './utils/normalizar.js';

const NOMES_WARFRAMES = [
  'Ash', 'Atlas', 'Banshee', 'Baruuk', 'Caliban', 'Chroma', 'Citrine', 'Cyte-09',
  'Dagath', 'Dante', 'Ember', 'Equinox', 'Excalibur', 'Frost', 'Gara', 'Garuda',
  'Gauss', 'Grendel', 'Gyre', 'Harrow', 'Hildryn', 'Hydroid', 'Inaros', 'Ivara',
  'Jade', 'Khora', 'Koumei', 'Kullervo', 'Lavos', 'Limbo', 'Loki', 'Mag', 'Mesa',
  'Mirage', 'Nekros', 'Nezha', 'Nidus', 'Nova', 'Nyx', 'Oberon', 'Octavia',
  'Oraxia', 'Protea', 'Qorvex', 'Revenant', 'Rhino', 'Saryn', 'Sevagoth',
  'Styanax', 'Titania', 'Trinity', 'Valkyr', 'Vauban', 'Volt', 'Voruna', 'Wisp',
  'Wukong', 'Xaku', 'Yareli', 'Zephyr',
];

const CONJUNTO_NORMALIZADO = new Set(NOMES_WARFRAMES.map(normalizarTexto));

/** True se o item for um Warframe inteiro, uma variante Prime/Umbra, ou uma peça dele. */
export function ehWarframe(nomeItem) {
  // removerSufixoComponente já tira peça E variante, repetidamente,
  // em qualquer ordem — "Hydroid Neuroptics Prime" e "Hydroid Prime
  // Neuroptics" chegam os dois em "Hydroid" aqui.
  const base = normalizarTexto(removerSufixoComponente(nomeItem));
  return CONJUNTO_NORMALIZADO.has(base);
}
