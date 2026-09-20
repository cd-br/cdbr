/* =========================================================
   API/NODES.JS — Tipo de missão de cada nó do mapa estelar
   Dado estático (não muda em tempo real) — carregado uma vez
   e guardado em memória. Usado só pra saber se um local de
   drop é uma missão de Sobrevivência, pra priorizar isso nos
   resultados de recurso.

   Aviso honesto: o campo "type" que a API devolve é o código
   interno do jogo, não confirmei o formato exato ao vivo — por
   isso a checagem abaixo é por trecho de texto (case-insensitive)
   em vez de comparação exata, pra ter mais chance de funcionar
   mesmo que o formato real seja um pouco diferente do esperado.
   Se não bater com nada, o app simplesmente não reordena —
   nunca quebra a busca por causa disso.
   ========================================================= */
import { ENDPOINTS } from '../config.js';
import { fetchComTimeout } from '../utils/http.js';
import { normalizarTexto } from '../utils/normalizar.js';

let mapaTipoPorNo = null; // null = ainda não carregado

export async function carregarTiposDeNo(idioma) {
  try {
    const resposta = await fetchComTimeout(ENDPOINTS.solNodes(idioma), { timeoutMs: 8000 });
    if (!resposta.ok) return;

    const bruto = await resposta.json();
    const mapa = new Map();

    Object.values(bruto).forEach((no) => {
      if (no && typeof no === 'object' && no.value && no.type) {
        mapa.set(normalizarTexto(no.value), String(no.type));
      }
    });

    mapaTipoPorNo = mapa;
    console.info(`[nodes] ${mapa.size} nó(s) carregado(s)`);
  } catch (erro) {
    console.warn('[nodes] não foi possível carregar tipos de nó — priorização de Sobrevivência fica desativada:', erro);
  }
}

/** True se o texto do local (ex: "Hydron (Sedna)") for um nó de Sobrevivência. */
export function ehNoDeSobrevivencia(localTexto) {
  if (!mapaTipoPorNo || !localTexto) return false;
  const tipo = mapaTipoPorNo.get(normalizarTexto(localTexto));
  return typeof tipo === 'string' && tipo.toLowerCase().includes('survival');
}
