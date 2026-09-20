/* =========================================================
   API/DATASET-LOCAL.JS — Leitura do dataset gerado manualmente
   ========================================================= */

const CAMINHO_DATASET = 'dados/atual/compact-items.json';
const CAMINHO_CATALOGO = 'dados/atual/item-images.json';

let carregamento = null;
let carregamentoCatalogo = null;

function normalizarTexto(texto) {
  return String(texto ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function extrairItens(bruto) {
  if (Array.isArray(bruto)) return bruto;
  if (Array.isArray(bruto?.items)) return bruto.items;
  if (Array.isArray(bruto?.drops)) return bruto.drops;
  return [];
}

function normalizarItem(bruto) {
  if (!bruto || typeof bruto !== 'object') return null;

  const item = bruto.item ?? bruto.name ?? bruto.itemName;
  const local = bruto.place ?? bruto.location ?? bruto.locationName;
  if (!item || !local) return null;

  return {
    item: String(item).trim(),
    local: String(local).trim(),
    rotacao: bruto.rotation ?? bruto.rotationName ?? bruto.rewardRotation ?? null,
    raridade: bruto.rarity ?? bruto.rarityName ?? null,
    chance: bruto.chance ?? bruto.dropChance ?? null,
  };
}

async function carregarDataset() {
  if (!carregamento) {
    carregamento = fetch(CAMINHO_DATASET)
      .then((resposta) => {
        if (!resposta.ok) throw new Error(`Dataset local indisponível (HTTP ${resposta.status})`);
        return resposta.json();
      })
      .then((bruto) => extrairItens(bruto).map(normalizarItem).filter(Boolean));
  }

  return carregamento;
}

export async function buscarDropsNoDataset(query) {
  const termo = normalizarTexto(query);
  if (!termo) return [];

  const itens = await carregarDataset();
  return itens.filter((drop) => {
    const item = normalizarTexto(drop.item);
    const local = normalizarTexto(drop.local);
    return item.includes(termo) || local.includes(termo);
  });
}

export async function buscarNomesCatalogoNoDataset(query) {
  const palavras = normalizarTexto(query).split(/\s+/).filter(Boolean);
  if (!palavras.length) return [];

  if (!carregamentoCatalogo) {
    carregamentoCatalogo = fetch(CAMINHO_CATALOGO)
      .then((resposta) => {
        if (!resposta.ok) throw new Error(`Catálogo local indisponível (HTTP ${resposta.status})`);
        return resposta.json();
      })
      .then((bruto) => Object.keys(bruto?.items ?? {}));
  }

  const nomes = await carregamentoCatalogo;
  return nomes.filter((nome) => {
    const normalizado = normalizarTexto(nome);
    return palavras.every((palavra) => normalizado.includes(palavra));
  });
}

export function datasetLocalDisponivel() {
  return Boolean(carregamento);
}