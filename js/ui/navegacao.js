/* =========================================================
   UI/NAVEGACAO.JS — Troca de seções (Busca / Sobre) e
   sincronização entre a sidebar (desktop) e a bottom nav (mobile)
   ========================================================= */

export function iniciarNavegacao() {
  const botoesNav = document.querySelectorAll('[data-secao-alvo]');
  const secoes = document.querySelectorAll('.secao');

  function mostrarSecao(idSecao) {
    secoes.forEach((secao) => {
      secao.classList.toggle('ativa', secao.id === idSecao);
    });
    botoesNav.forEach((botao) => {
      botao.classList.toggle('ativo', botao.dataset.secaoAlvo === idSecao);
    });
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  botoesNav.forEach((botao) => {
    botao.addEventListener('click', () => mostrarSecao(botao.dataset.secaoAlvo));
  });

  // Seção inicial: a primeira marcada como ativa no HTML (busca).
}

/** Botão flutuante "voltar ao topo" — só aparece depois de rolar um pouco. */
export function iniciarBotaoTopo(botao) {
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      botao.classList.toggle('visivel', window.scrollY > 400);
      ticking = false;
    });
  });

  botao.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
