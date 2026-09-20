/* =========================================================
   DADOS-FONTES-MANUAIS.JS — Carrega dados/fontes-manuais.txt
   Cobre itens que não têm fonte automática (mineração, algumas
   armas de Dojo, etc). O arquivo de verdade é o .txt — pra
   adicionar um item novo, edite ele, não este módulo.
   ========================================================= */
import { normalizarTexto } from './utils/normalizar.js';

let mapaFontes = new Map(); // nome normalizado -> { categoria, local }

/** Chamado uma vez, na inicialização do app. */
export async function carregarFontesManuais() {
  try {
    const resposta = await fetch('dados/fontes-manuais.txt');
    if (!resposta.ok) return;

    const texto = await resposta.text();
    const novoMapa = new Map();

    texto.split('\n').forEach((linhaBruta) => {
      const linha = linhaBruta.trim();
      if (!linha || linha.startsWith('#')) return;

      const partes = linha.split('|').map((p) => p.trim());
      if (partes.length < 3) return; // linha mal formatada — ignora silenciosamente

      const [nome, categoria, local] = partes;
      if (!nome || !categoria || !local) return;

      novoMapa.set(normalizarTexto(nome), { categoria: normalizarTexto(categoria), local });
    });

    mapaFontes = novoMapa;
    console.info(`[fontes-manuais] ${mapaFontes.size} item(ns) carregado(s)`);
  } catch (erro) {
    // Se o arquivo não carregar, o site continua funcionando normalmente,
    // só sem esse complemento manual.
    console.warn('[fontes-manuais] não foi possível carregar:', erro);
  }
}

/** @returns {{categoria: string, local: string} | null} */
export function buscarFonteManual(nomeItem) {
  return mapaFontes.get(normalizarTexto(nomeItem)) ?? null;
}
