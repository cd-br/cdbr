/* =========================================================
   UI/PAINEL-AO-VIVO.JS — Conteúdo da aba "Especial": ciclos de
  ciclos com horário (Cetus, Terra, Fortuna e Cambion).
   Cada card carrega e falha de forma independente.
   ========================================================= */
import {
  buscarCetusCycle, buscarEarthCycle, buscarVallisCycle, buscarCambionCycle,
} from '../api/worldstate.js';
import { obterIdiomaAtual } from './idioma.js';
import { t } from '../i18n.js';

let container = null;

export function iniciarPainelAoVivo(elemento) {
  container = elemento;
  carregarPainel();
}

/** Chamado quando o idioma muda, pra recarregar os textos traduzidos. */
export function atualizarIdiomaPainelAoVivo() {
  if (container) carregarPainel();
}

async function carregarPainel() {
  const idioma = obterIdiomaAtual();
  container.innerHTML = '';

  const cartoes = [
    { chave: 'cetus', carregar: () => buscarCetusCycle(idioma), render: renderCetus },
    { chave: 'terra', carregar: () => buscarEarthCycle(idioma), render: renderTerra },
    { chave: 'fortuna', carregar: () => buscarVallisCycle(idioma), render: renderFortuna },
    { chave: 'cambion', carregar: () => buscarCambionCycle(idioma), render: renderCambion },
  ];

  cartoes.forEach((c) => {
    const el = document.createElement('div');
    el.className = 'live-card live-card--carregando';
    el.dataset.card = c.chave;
    el.innerHTML = '<div class="skeleton-card" style="height:100%"></div>';
    container.appendChild(el);
  });

  await Promise.all(cartoes.map(async (c) => {
    const el = container.querySelector(`[data-card="${c.chave}"]`);
    try {
      const dados = await c.carregar();
      el.classList.remove('live-card--carregando');
      el.innerHTML = c.render(dados);
    } catch (erro) {
      console.error(`[painelAoVivo] erro no card "${c.chave}":`, erro);
      el.classList.remove('live-card--carregando');
      el.classList.add('live-card--erro');
      el.innerHTML = `<div class="live-card__titulo">${t('live.indisponivel')}</div>`;
    }
  }));
}

function renderCetus(d) {
  const icone = d.isDia ? '☀️' : '🌙';
  const estado = d.isDia ? t('live.cetus.dia') : t('live.cetus.noite');
  return `
    <div class="live-card__titulo">${icone} ${t('live.cetus.titulo')}</div>
    <div class="live-card__principal">${estado}</div>
    <div class="live-card__sub">${t('live.restam')} ${d.tempoRestante ?? '—'}</div>
  `;
}

function renderTerra(d) {
  const icone = d.isDia ? '☀️' : '🌙';
  const estado = d.isDia ? t('live.cetus.dia') : t('live.cetus.noite');
  return `
    <div class="live-card__titulo">${icone} ${t('live.terra.titulo')}</div>
    <div class="live-card__principal">${estado}</div>
    <div class="live-card__sub">${t('live.restam')} ${d.tempoRestante ?? '—'}</div>
  `;
}

function renderFortuna(d) {
  const icone = d.isQuente ? '🔥' : '❄️';
  const estado = d.isQuente ? t('live.fortuna.quente') : t('live.fortuna.frio');
  return `
    <div class="live-card__titulo">${icone} ${t('live.fortuna.titulo')}</div>
    <div class="live-card__principal">${estado}</div>
    <div class="live-card__sub">${t('live.restam')} ${d.tempoRestante ?? '—'}</div>
  `;
}

function renderCambion(d) {
  const ehFass = d.estado === 'fass';
  const icone = ehFass ? '☣️' : '🌫️';
  const estado = ehFass ? t('live.cambion.fass') : t('live.cambion.vome');
  return `
    <div class="live-card__titulo">${icone} ${t('live.cambion.titulo')}</div>
    <div class="live-card__principal">${estado}</div>
    <div class="live-card__sub">${t('live.restam')} ${d.tempoRestante ?? '—'}</div>
  `;
}

