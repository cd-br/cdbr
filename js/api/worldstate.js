/* =========================================================
   API/WORLDSTATE.JS — Estado atual do jogo ("painel ao vivo")
   Ciclo de Cetus, Sortie do dia, Baro Ki'Teer e Arbitration —
   tudo em tempo real, pela mesma Warframe Status API.
   ========================================================= */
import { ENDPOINTS } from '../config.js';
import { fetchComTimeout } from '../utils/http.js';

async function buscarJson(url) {
  const resposta = await fetchComTimeout(url, { timeoutMs: 6000 });
  if (!resposta.ok) throw new Error(`Falha ao buscar estado do jogo (HTTP ${resposta.status})`);
  return resposta.json();
}

export async function buscarCetusCycle(idioma) {
  const bruto = await buscarJson(ENDPOINTS.cetusCycle(idioma));
  return {
    isDia: bruto.isDay ?? null,
    estado: bruto.state ?? null,
    tempoRestante: bruto.timeLeft ?? null,
  };
}

export async function buscarEarthCycle(idioma) {
  const bruto = await buscarJson(ENDPOINTS.earthCycle(idioma));
  return {
    isDia: bruto.isDay ?? null,
    tempoRestante: bruto.timeLeft ?? null,
  };
}

export async function buscarVallisCycle(idioma) {
  const bruto = await buscarJson(ENDPOINTS.vallisCycle(idioma));
  return {
    isQuente: bruto.isWarm ?? null,
    tempoRestante: formatarTempoRestante(bruto.expiry),
  };
}

export async function buscarCambionCycle(idioma) {
  const bruto = await buscarJson(ENDPOINTS.cambionCycle(idioma));
  return {
    estado: bruto.state ?? null, // 'fass' (hostil) ou 'vome' (calmo)
    tempoRestante: formatarTempoRestante(bruto.expiry),
  };
}

/**
 * Vallis e Cambion não vêm com um "timeLeft" pronto como Cetus/Terra —
 * só a data de expiração. Calculamos a diferença até agora.
 */
function formatarTempoRestante(dataExpiraIso) {
  if (!dataExpiraIso) return null;
  const diferencaMs = new Date(dataExpiraIso).getTime() - Date.now();
  if (!Number.isFinite(diferencaMs) || diferencaMs <= 0) return null;

  const totalMinutos = Math.floor(diferencaMs / 60000);
  const horas = Math.floor(totalMinutos / 60);
  const minutos = totalMinutos % 60;
  return horas > 0 ? `${horas}h ${minutos}m` : `${minutos}m`;
}

export async function buscarSortie(idioma) {
  const bruto = await buscarJson(ENDPOINTS.sortie(idioma));
  return {
    recompensa: bruto.rewardPool ?? null,
    variantes: Array.isArray(bruto.variants) ? bruto.variants.map((v) => ({
      // "node" já vem como texto completo (ex: "Larissa (Neptune)") —
      // não existe um campo separado de planeta pra combinar com ele.
      no: v.node ?? null,
      chefe: v.boss ?? null,
      tipoMissao: v.missionType ?? null,
      modificador: v.modifier ?? null,
    })) : [],
    expiraEm: bruto.eta ?? null,
  };
}

export async function buscarVoidTrader(idioma) {
  const bruto = await buscarJson(ENDPOINTS.voidTrader(idioma));
  return {
    ativo: bruto.active ?? false,
    local: bruto.location ?? null,
    inventario: Array.isArray(bruto.inventory) ? bruto.inventory : [],
    expiraEm: bruto.eta ?? null,
  };
}

export async function buscarArbitration(idioma) {
  const bruto = await buscarJson(ENDPOINTS.arbitration(idioma));

  // A API usa valores "vazios" conhecidos (ex: "SolNode000", "Unknown")
  // quando não há arbitration ativa no momento — tratamos isso como
  // "indisponível" em vez de mostrar esse código cru na tela.
  const semArbitrationAtiva = !bruto.node || bruto.node === 'SolNode000' || bruto.enemy === 'Unknown';

  return {
    ativo: !semArbitrationAtiva,
    no: bruto.node ?? null,
    inimigo: bruto.enemy ?? null,
    tipoMissao: bruto.type ?? null,
    expiraEm: bruto.eta ?? null,
  };
}
