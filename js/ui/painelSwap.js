/* =========================================================
   UI/PAINEL-SWAP.JS — Painéis deslizantes reutilizáveis
  O conteúdo mora dentro de um bottom sheet. No desktop com mouse,
  a barra inferior também pode abrir o painel por hover; no mobile,
  a abertura continua sendo feita por toque/clique.

   Chame iniciarPainelDeslizante() uma vez pra cada painel
   independente (ex: um pra Filtros/Atalhos, outro pro Especial).
   ========================================================= */

export function iniciarPainelDeslizante({ conteudo, slotMobile, overlay, botaoAbrir, botaoFechar }) {
  // --- Abas internas, se o conteúdo tiver (ex: Filtros/Atalhos) ---
  conteudo.querySelectorAll('.swap-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      conteudo.querySelectorAll('.swap-tab').forEach((t) => t.classList.toggle('ativo', t === tab));
      conteudo.querySelectorAll('.swap-painel').forEach((p) => {
        p.classList.toggle('ativo', p.dataset.swapPainel === tab.dataset.swapTab);
      });
    });
  });

  // O conteúdo já nasce dentro do HTML no lugar certo (slot do sheet),
  // mas garantimos aqui caso ele precise ser movido no futuro.
  if (conteudo.parentElement !== slotMobile) {
    slotMobile.appendChild(conteudo);
  }

  // --- Abrir/fechar o sheet ---
  const abrir = () => overlay.classList.add('aberto');
  const fechar = () => overlay.classList.remove('aberto');
  const quadro = overlay.querySelector('.painel-swap-sheet');
  const desktopComMouse = window.matchMedia('(min-width: 900px) and (hover: hover) and (pointer: fine)');
  let temporizadorFecharHover = null;

  function cancelarFechamentoHover() {
    clearTimeout(temporizadorFecharHover);
  }

  function fecharDepoisDoHover() {
    cancelarFechamentoHover();
    temporizadorFecharHover = setTimeout(() => {
      if (desktopComMouse.matches) fechar();
    }, 0);
  }

  botaoAbrir.addEventListener('click', abrir);
  botaoFechar.addEventListener('click', fechar);
  overlay.addEventListener('click', (ev) => {
    if (ev.target === overlay) fechar();
  });
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape' && overlay.classList.contains('aberto')) fechar();
  });

  // Hover só existe para mouse em telas grandes. O atraso evita fechar o
  // painel enquanto o cursor atravessa o pequeno espaço até o sheet.
  botaoAbrir.addEventListener('mouseenter', () => {
    if (!desktopComMouse.matches) return;
    cancelarFechamentoHover();
    abrir();
  });
  quadro.addEventListener('mouseenter', cancelarFechamentoHover);
  quadro.addEventListener('mouseleave', () => {
    if (desktopComMouse.matches) fecharDepoisDoHover();
  });
  overlay.addEventListener('mousemove', (ev) => {
    if (desktopComMouse.matches && ev.target === overlay) fecharDepoisDoHover();
  });

  return { abrir, fechar };
}
