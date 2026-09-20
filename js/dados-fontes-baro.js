/* =========================================================
   DADOS-FONTES-BARO.JS — Catálogo manual de ofertas do Baro
   Edite dados/fontes-baro.txt para adicionar ou atualizar itens.
   Formato: Nome do item | ducats | créditos
   ========================================================= */
import { normalizarTexto } from './utils/normalizar.js';

let mapaOfertas = new Map();

export async function carregarFontesBaro() {
  try {
    const resposta = await fetch('dados/fontes-baro.txt');
    if (!resposta.ok) return;

    const texto = await resposta.text();
    const novoMapa = new Map();

    texto.split(/\r?\n/).forEach((linhaBruta) => {
      const linha = linhaBruta.trim();
      if (!linha || linha.startsWith('#')) return;

      const partes = linha.match(/^(.+?)\s+(\d[\d,]*)\s+(\d[\d,]*)$/);
      if (!partes) return;

      const [, nomeBruto, ducatsBruto, creditosBruto] = partes;
      const nome = nomeBruto.trim();
      const ducats = Number(ducatsBruto.replace(/,/g, ''));
      const creditos = Number(creditosBruto.replace(/,/g, ''));
      if (!nome || !Number.isFinite(ducats) || !Number.isFinite(creditos)) return;

      novoMapa.set(normalizarTexto(nome), {
        nome,
        ducats,
        creditos,
        local: `Baro Ki'Teer — ${ducats.toLocaleString()} Ducats + ${creditos.toLocaleString()} Créditos`,
      });
    });

    mapaOfertas = novoMapa;
    console.info(`[fontes-baro] ${mapaOfertas.size} oferta(s) carregada(s)`);
  } catch (erro) {
    console.warn('[fontes-baro] não foi possível carregar:', erro);
  }
}

export function buscarOfertaBaro(nomeItem) {
  return mapaOfertas.get(normalizarTexto(nomeItem)) ?? null;
}
