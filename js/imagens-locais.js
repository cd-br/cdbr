/* =========================================================
   IMAGENS-LOCAIS.JS — Mapa de imagens já disponíveis no projeto
   Itens aqui aparecem instantaneamente (sem esperar rede). Para
   qualquer item fora desta lista, o app continua buscando a
   imagem na API normalmente (js/api/items.js).

   Gerado a partir da pasta imagens/ enviada pelo clã — se vocês
   adicionarem mais arquivos .webp lá, me mandem a lista de novo
   que eu atualizo este mapa.
   ========================================================= */
import { normalizarTexto } from './utils/normalizar.js';

const CAMINHO_BASE = 'imagens/';
const CAMINHO_DATASET_IMAGENS = 'dados/atual/item-images.json';

const MAPA_BRUTO = {
  "alloy plate": "Alloy Plate.webp",
  "ash": "Ash.webp",
  "atlas": "Atlas.webp",
  "banshee": "Banshee.webp",
  "baruuk": "Baruuk.webp",
  "caliban": "Caliban.webp",
  "chroma": "Chroma.webp",
  "circuits": "Circuits.webp",
  "citrine": "Citrine.webp",
  "control module": "Control Module.webp",
  "cyte-09": "Cyte-09.webp",
  "dagath": "Dagath.webp",
  "dante": "Dante.webp",
  "detonite ampule": "Detonite Ampule.webp",
  "ember": "Ember.webp",
  "entrati lanthorn": "Entrati Lanthorn.webp",
  "equinox": "Equinox.webp",
  "excalibur": "Excalibur.webp",
  "ferrite": "Ferrite.webp",
  "fieldron sample": "Fieldron Sample.webp",
  "frost": "Frost.webp",
  "gallium": "Gallium.webp",
  "gara": "Gara.webp",
  "garuda": "Garuda.webp",
  "gauss": "Gauss.webp",
  "grendel": "Grendel.webp",
  "gyre": "Gyre.webp",
  "harrow": "Harrow.webp",
  "hexenon": "Hexenon.webp",
  "hildryn": "Hildryn.webp",
  "hydroid": "Hydroid.webp",
  "inaros": "Inaros.webp",
  "inkblot": "Inkblot.webp",
  "ivara": "Ivara.webp",
  "jade": "Jade.webp",
  "khora": "Khora.webp",
  "koumei": "Koumei.webp",
  "kullervo": "Kullervo.webp",
  "kuva (resource)": "Kuva_(Resource).webp",
  "kuva": "Kuva_(Resource).webp",
  "lavos": "Lavos.webp",
  "limbo": "Limbo.webp",
  "loki": "Loki.webp",
  "mag": "Mag.webp",
  "mesa": "Mesa.webp",
  "mirage": "Mirage.webp",
  "morphics": "Morphics.webp",
  "mutagen sample": "Mutagen Sample.webp",
  "nano spores": "Nano Spores.webp",
  "nekros": "Nekros.webp",
  "neural sensors": "Neural Sensors.webp",
  "neurodes": "Neurodes.webp",
  "nezha": "Nezha.webp",
  "nidus": "Nidus.webp",
  "nokko": "Nokko.webp",
  "nova": "Nova.webp",
  "nyx": "Nyx.webp",
  "oberon": "Oberon.webp",
  "octavia": "Octavia.webp",
  "oraxia": "Oraxia.webp",
  "orokin cell": "Orokin Cell.webp",
  "plastids": "Plastids.webp",
  "polymer bundle": "Polymer Bundle.webp",
  "protea": "Protea.webp",
  "qorvex": "Qorvex.webp",
  "revenant": "Revenant.webp",
  "rhino": "Rhino.webp",
  "rubedo": "Rubedo.webp",
  "salvage": "Salvage.webp",
  "saryn": "Saryn.webp",
  "sevagoth": "Sevagoth.webp",
  "siriusorion": "SiriusOrion.webp",
  "styanax": "Styanax.webp",
  "tellurium": "Tellurium.webp",
  "temple": "Temple.webp",
  "titania": "Titania.webp",
  "trinity": "Trinity.webp",
  "uriel": "Uriel.webp",
  "valkyr": "Valkyr.webp",
  "vauban": "Vauban.webp",
  "voidgel orb": "Voidgel Orb.webp",
  "volt": "Volt.webp",
  "voruna": "Voruna.webp",
  "wisp": "Wisp.webp",
  "wukong": "Wukong.webp",
  "xaku": "Xaku.webp",
  "yareli": "Yareli.webp",
  "zephyr": "Zephyr.webp",
};

/** Carrega o mapa gerado junto do dataset, sem remover imagens já locais. */
export async function carregarImagensDataset() {
  try {
    const resposta = await fetch(CAMINHO_DATASET_IMAGENS);
    if (!resposta.ok) return;

    const bruto = await resposta.json();
    const imagens = bruto?.items ?? bruto;
    if (!imagens || typeof imagens !== 'object' || Array.isArray(imagens)) return;

    Object.entries(imagens).forEach(([nome, caminho]) => {
      if (typeof caminho === 'string' && caminho) MAPA_BRUTO[normalizarTexto(nome)] = caminho;
    });
  } catch (erro) {
    console.warn('[imagens] mapa do dataset indisponível:', erro);
  }
}

/** Devolve o caminho local da imagem do item, ou null se não tivermos uma. */
export function imagemLocalDoItem(nomeItem) {
  const chave = normalizarTexto(nomeItem);
  const arquivo = MAPA_BRUTO[chave];
  if (!arquivo) return null;
  if (/^https?:\/\//i.test(arquivo)) return arquivo;
  return CAMINHO_BASE + encodeURIComponent(arquivo);
}
