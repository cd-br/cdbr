/* =========================================================
   CONFIG.JS — Configuração central do projeto
   Se a WFCD mudar algum endpoint, o ajuste é feito só aqui.
   ========================================================= */

export const API_BASE = 'https://api.warframestat.us';

export const ENDPOINTS = {
  // Busca de drops (missões, relíquias, inimigos, bounties, sortie...)
  // já vem filtrada pelo próprio servidor — não baixamos a tabela inteira.
  buscaDrops: (query) => `${API_BASE}/drops/search/${encodeURIComponent(query)}`,

  // Detalhes de um item específico (nome, descrição, imagem, stats).
  item: (nome, idioma) => `${API_BASE}/items/${encodeURIComponent(nome)}?language=${idioma}`,

  // Estado atual do jogo ("painel ao vivo") — mesma API, dados em tempo real.
  cetusCycle: (idioma) => `${API_BASE}/${PLATAFORMA}/cetusCycle?language=${idioma}`,
  earthCycle: (idioma) => `${API_BASE}/${PLATAFORMA}/earthCycle?language=${idioma}`,
  vallisCycle: (idioma) => `${API_BASE}/${PLATAFORMA}/vallisCycle?language=${idioma}`,
  cambionCycle: (idioma) => `${API_BASE}/${PLATAFORMA}/cambionCycle?language=${idioma}`,
  sortie: (idioma) => `${API_BASE}/${PLATAFORMA}/sortie?language=${idioma}`,
  voidTrader: (idioma) => `${API_BASE}/${PLATAFORMA}/voidTrader?language=${idioma}`,
  arbitration: (idioma) => `${API_BASE}/${PLATAFORMA}/arbitration?language=${idioma}`,

  // Tipo de missão de cada nó do mapa estelar (dado estático — carregado
  // uma vez só, usado pra priorizar Sobrevivência nos resultados de recurso).
  solNodes: (idioma) => `${API_BASE}/solNodes?language=${idioma}`,
};

// Plataforma usada para os dados de estado do jogo (painel ao vivo).
// A grande maioria dos clãs brasileiros joga no PC — se o seu clã for
// de console, troque aqui ('ps4' | 'xb1' | 'swi').
export const PLATAFORMA = 'pc';

export const IDIOMAS_SUPORTADOS = ['pt', 'en'];
export const IDIOMA_PADRAO = 'pt';

export const CREDITOS = {
  cla: 'CLÃ TENNOREINFORCEMENTPRIME',
  desenvolvedor: 'Br.uxão',
};

// Sufixos comuns de componente — usados para casar nomes de drop
// (ex: "Volt Chassis Blueprint") com o nome canônico do item
// (ex: "Volt Chassis") quando a busca direta não encontra nada.
export const SUFIXOS_COMPONENTE = [
  ' Blueprint',
  ' Blade',
  ' Barrel',
  ' Receiver',
  ' Stock',
  ' String',
  ' Grip',
  ' Chassis',
  ' Systems',
  ' Neuroptics',
  ' Link',
  ' Carapace',
  ' Cerebrum',
];

// Sufixos de variante — podem vir em qualquer ordem em relação aos de
// componente (ex: "Hydroid Neuroptics Prime" ou "Hydroid Prime Neuroptics").
export const SUFIXOS_VARIANTE = [
  ' Prime',
  ' Umbra',
];

// Wiki oficial — usada só como último recurso, quando nenhum dado
// de drop ou de item é encontrado para algo que o usuário procurou.
export const WIKI_BASE = 'https://wiki.warframe.com/w/';
export const wikiUrl = (nome) => `${WIKI_BASE}${nome.replace(/ /g, '_')}`;

// Tempo de espera após parar de digitar antes de disparar a busca (ms).
export const DEBOUNCE_BUSCA = 350;

// Tamanho mínimo do termo de busca.
export const TAMANHO_MINIMO_BUSCA = 2;
