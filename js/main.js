/* =========================================================
   MAIN.JS — Inicialização geral do Guia de Drops Warframe
   ========================================================= */
import { iniciarBusca, reaplicarTraducoesNaBusca, buscarTermoExterno } from './ui/busca.js';
import { iniciarPainelItem, abrirPainelItem, atualizarIdiomaPainelAberto } from './ui/painelItem.js';
import { iniciarNavegacao, iniciarBotaoTopo } from './ui/navegacao.js';
import { iniciarToggleIdioma, obterIdiomaAtual } from './ui/idioma.js';
import { iniciarPainelAoVivo, atualizarIdiomaPainelAoVivo } from './ui/painelAoVivo.js';
import { iniciarLightbox } from './ui/lightbox.js';
import { iniciarPainelDeslizante } from './ui/painelSwap.js';
import { iniciarTema, iniciarEscalaFonte } from './ui/acessibilidade.js';
import { iniciarPopupsMeuDrop } from './ui/popupsMeuDrop.js';
import { iniciarMeuDropSecao } from './ui/meuDropSecao.js';
import { carregarFontesManuais } from './dados-fontes-manuais.js';
import { carregarFontesBaro } from './dados-fontes-baro.js';
import { carregarImagensDataset } from './imagens-locais.js';
import { carregarTiposDeNo } from './api/nodes.js';
import { aplicarTraducaoEstatica } from './i18n.js';

document.addEventListener('DOMContentLoaded', async () => {
  console.info('[main] iniciando Guia de Drops Warframe');

  aplicarTraducaoEstatica();

  // Dados carregados uma vez, antes de liberar a busca, pra já valerem
  // desde a primeira pesquisa do usuário.
  await Promise.all([
    carregarFontesManuais(),
    carregarFontesBaro(),
    carregarImagensDataset(),
    carregarTiposDeNo(obterIdiomaAtual()),
  ]);

  iniciarNavegacao();

  iniciarBotaoTopo(document.getElementById('btn-topo'));

  iniciarTema(document.getElementById('tema-toggle'));
  iniciarEscalaFonte(document.getElementById('fonte-mais'), document.getElementById('fonte-menos'));

  iniciarToggleIdioma(document.getElementById('idioma-toggle'), () => {
    aplicarTraducaoEstatica();
    reaplicarTraducoesNaBusca();
    atualizarIdiomaPainelAberto();
    atualizarIdiomaPainelAoVivo();
  });

  iniciarPainelItem({
    overlay: document.getElementById('modal-item'),
    modal: document.getElementById('modal-item').querySelector('.modal'),
    botaoFechar: document.getElementById('modal-fechar'),
    tabs: document.querySelectorAll('.modal__tab'),
    painéis: document.querySelectorAll('.modal__painel'),
    corpoOnde: document.getElementById('painel-onde-encontrar'),
    corpoDetalhes: document.getElementById('painel-detalhes'),
  });

  iniciarBusca({
    input: document.getElementById('campo-busca'),
    botaoLimpar: document.getElementById('busca-limpar'),
    grid: document.getElementById('resultados-grid'),
    estado: document.getElementById('resultados-estado'),
    chipsRaridade: document.querySelectorAll('[data-raridade]'),
    chipsCategoria: document.querySelectorAll('[data-categoria]'),
    aoAbrirItem: abrirPainelItem,
  });

  iniciarPainelAoVivo(document.getElementById('live-tira'));

  iniciarLightbox({
    overlay: document.getElementById('lightbox-imagem'),
    img: document.getElementById('lightbox-img'),
    botaoFechar: document.getElementById('lightbox-fechar'),
  });

  // Painel Filtros + Atalhos
  const painelFiltros = iniciarPainelDeslizante({
    conteudo: document.getElementById('bloco-filtros'),
    slotMobile: document.getElementById('slot-mobile-filtros'),
    overlay: document.getElementById('sheet-filtros-overlay'),
    botaoAbrir: document.getElementById('abrir-sheet-filtros'),
    botaoFechar: document.getElementById('sheet-filtros-fechar'),
  });

  // Painel Especial (ciclos dos planetas + links úteis)
  iniciarPainelDeslizante({
    conteudo: document.getElementById('bloco-especial'),
    slotMobile: document.getElementById('slot-mobile-especial'),
    overlay: document.getElementById('sheet-especial-overlay'),
    botaoAbrir: document.getElementById('abrir-sheet-especial'),
    botaoFechar: document.getElementById('sheet-especial-fechar'),
  });

  // Meu Drop: popups (confirmar / nota / conflito de importação)
  iniciarPopupsMeuDrop({
    overlayConfirmar: document.getElementById('popup-confirmar-drop'),
    confirmarNome: document.getElementById('popup-confirmar-nome'),
    confirmarAceitar: document.getElementById('popup-confirmar-aceitar'),
    confirmarRecusar: document.getElementById('popup-confirmar-recusar'),
    overlayNota: document.getElementById('popup-nota-drop'),
    notaTexto: document.getElementById('popup-nota-texto'),
    notaSalvar: document.getElementById('popup-nota-salvar'),
    notaPular: document.getElementById('popup-nota-pular'),
    overlayImportConflito: document.getElementById('popup-import-conflito'),
    importMesclar: document.getElementById('popup-import-mesclar'),
    importSubstituir: document.getElementById('popup-import-substituir'),
    importCancelar: document.getElementById('popup-import-cancelar'),
  });

  // Meu Drop: a seção em si (lista, busca interna, exportar/importar)
  iniciarMeuDropSecao({
    busca: document.getElementById('meudrop-busca'),
    contador: document.getElementById('meudrop-contador'),
    vazio: document.getElementById('meudrop-vazio'),
    lista: document.getElementById('meudrop-lista'),
    exportar: document.getElementById('meudrop-exportar'),
    importarBotao: document.getElementById('meudrop-importar-botao'),
    importarInput: document.getElementById('meudrop-importar-input'),
  });

  document.querySelectorAll('[data-atalho]').forEach((botao) => {
    botao.addEventListener('click', () => {
      buscarTermoExterno(botao.dataset.atalho);
      document.getElementById('campo-busca').focus();
      painelFiltros.fechar(); // já mostra o resultado, sem o sheet no caminho
    });
  });

  // Tocar em "Busca" na barra inferior também abre o teclado pra digitar.
  document.getElementById('btn-nav-busca')?.addEventListener('click', () => {
    document.getElementById('campo-busca').focus();
  });
});
