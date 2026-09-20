/* =========================================================
   MEU-DROP.JS — Armazenamento local dos itens salvos pelo usuário
   Tudo fica só no navegador/aparelho da pessoa (localStorage) —
   não é sincronizado com ninguém, nem com o resto do projeto.
   ========================================================= */

const CHAVE_STORAGE = 'guia-drops:meu-drop';

function gerarId() {
  return (crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`);
}

function lerTudo() {
  try {
    const bruto = localStorage.getItem(CHAVE_STORAGE);
    const lista = bruto ? JSON.parse(bruto) : [];
    return Array.isArray(lista) ? lista : [];
  } catch {
    return [];
  }
}

function salvarTudo(lista) {
  try {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(lista));
    return true;
  } catch (erro) {
    console.error('[meuDrop] falha ao salvar no localStorage:', erro);
    return false;
  }
}

export function listarSalvos() {
  return lerTudo();
}

export function estaSalvo(item, local) {
  return lerTudo().some((s) => s.item === item && s.local === local);
}

export function adicionar(drop, nota = '') {
  const lista = lerTudo();
  const entrada = {
    id: gerarId(),
    item: drop.item,
    local: drop.local ?? null,
    categoria: drop.categoria ?? null,
    raridade: drop.raridade ?? null,
    chance: drop.chance ?? null,
    faccao: drop.faccao ?? null,
    nota,
    salvoEm: new Date().toISOString(),
  };
  lista.push(entrada);
  salvarTudo(lista);
  return entrada;
}

export function remover(id) {
  const lista = lerTudo().filter((s) => s.id !== id);
  salvarTudo(lista);
  return lista;
}

export function atualizarNota(id, nota) {
  const lista = lerTudo();
  const alvo = lista.find((s) => s.id === id);
  if (alvo) alvo.nota = nota;
  salvarTudo(lista);
  return lista;
}

/** Move o item na posição `de` pra posição `para` (reordenar). */
export function reordenar(de, para) {
  const lista = lerTudo();
  if (de < 0 || de >= lista.length || para < 0 || para >= lista.length) return lista;
  const [movido] = lista.splice(de, 1);
  lista.splice(para, 0, movido);
  salvarTudo(lista);
  return lista;
}

export function exportarComoArquivo() {
  const lista = lerTudo();
  const conteudo = JSON.stringify({ versao: 1, itens: lista }, null, 2);
  const blob = new Blob([conteudo], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `meu-drop-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/**
 * @param {File} arquivo
 * @param {'substituir'|'mesclar'} modo
 */
export async function importarDeArquivo(arquivo, modo) {
  const texto = await arquivo.text();
  const dados = JSON.parse(texto);
  const itensImportados = Array.isArray(dados) ? dados : (Array.isArray(dados.itens) ? dados.itens : null);
  if (!itensImportados) throw new Error('Arquivo em formato inválido.');

  // Revalida cada item importado, ignorando campos desconhecidos/corrompidos.
  const validados = itensImportados
    .filter((it) => it && typeof it.item === 'string')
    .map((it) => ({
      id: typeof it.id === 'string' ? it.id : gerarId(),
      item: it.item,
      local: it.local ?? null,
      categoria: it.categoria ?? null,
      raridade: it.raridade ?? null,
      chance: it.chance ?? null,
      faccao: it.faccao ?? null,
      nota: typeof it.nota === 'string' ? it.nota : '',
      salvoEm: typeof it.salvoEm === 'string' ? it.salvoEm : new Date().toISOString(),
    }));

  const listaFinal = modo === 'mesclar'
    ? [...lerTudo(), ...validados]
    : validados;

  salvarTudo(listaFinal);
  return listaFinal;
}
