/* =========================================================
   UI/ACESSIBILIDADE.JS — Tema (claro/escuro) e escala de fonte
   ========================================================= */

const CHAVE_TEMA = 'guia-drops:tema';
const CHAVE_ESCALA = 'guia-drops:escala-fonte';
const ESCALA_MIN = 0.85;
const ESCALA_MAX = 1.3;
const ESCALA_PASSO = 0.1;

export function iniciarTema(botaoToggle) {
  const salvo = localStorage.getItem(CHAVE_TEMA);
  aplicarTema(salvo === 'claro' ? 'claro' : 'escuro');

  botaoToggle.addEventListener('click', () => {
    const atual = document.documentElement.dataset.tema === 'claro' ? 'claro' : 'escuro';
    aplicarTema(atual === 'claro' ? 'escuro' : 'claro');
  });
}

function aplicarTema(tema) {
  document.documentElement.dataset.tema = tema;
  localStorage.setItem(CHAVE_TEMA, tema);
}

export function iniciarEscalaFonte(botaoMais, botaoMenos) {
  let escala = parseFloat(localStorage.getItem(CHAVE_ESCALA)) || 1;
  aplicarEscala(escala);

  botaoMais.addEventListener('click', () => ajustar(ESCALA_PASSO));
  botaoMenos.addEventListener('click', () => ajustar(-ESCALA_PASSO));

  function ajustar(delta) {
    escala = Math.min(ESCALA_MAX, Math.max(ESCALA_MIN, +(escala + delta).toFixed(2)));
    aplicarEscala(escala);
  }
}

function aplicarEscala(escala) {
  document.documentElement.style.setProperty('--escala-fonte', escala);
  localStorage.setItem(CHAVE_ESCALA, escala);
}
