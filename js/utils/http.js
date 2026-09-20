/* =========================================================
   UTILS/HTTP.JS — fetch com timeout e suporte a cancelamento
   Evita que uma requisição lenta fique "pendurada" pra sempre
   e permite cancelar buscas antigas quando uma nova é disparada.
   ========================================================= */

const TIMEOUT_PADRAO_MS = 8000;

export async function fetchComTimeout(url, { timeoutMs = TIMEOUT_PADRAO_MS, signal } = {}) {
  const controller = new AbortController();

  // Se quem chamou já passou um "signal" (ex: busca cancelada pelo
  // usuário), propaga o cancelamento pra esse controller também.
  if (signal) {
    if (signal.aborted) controller.abort();
    else signal.addEventListener('abort', () => controller.abort());
  }

  const idTimeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(idTimeout);
  }
}

export class ErroTimeout extends Error {
  constructor() {
    super('A requisição demorou demais e foi cancelada.');
    this.name = 'ErroTimeout';
  }
}
