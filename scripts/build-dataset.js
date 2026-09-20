/*
 * Gera os dois arquivos consumidos pelo site.
 * Uso: node scripts/build-dataset.js
 *
 * As URLs podem ser trocadas sem editar o script:
 * WFCD_DROPS_URL=https://... WFCD_ITEMS_URL=https://... node scripts/build-dataset.js
 */
const fs = require('node:fs/promises');
const path = require('node:path');

const RAIZ = path.resolve(__dirname, '..');
const PASTA_ATUAL = path.join(RAIZ, 'dados', 'atual');
const PASTA_BACKUP = path.join(RAIZ, 'dados', 'backup');
const URL_DROPS = process.env.WFCD_DROPS_URL
  || 'https://raw.githubusercontent.com/WFCD/warframe-drop-data/main/data/all.json';
const URL_ITENS = process.env.WFCD_ITEMS_URL || null;
const URL_LISTA_ITENS = 'https://api.github.com/repos/WFCD/warframe-items/contents/data/json?ref=master';

async function baixarJson(url) {
  const resposta = await fetch(url);
  if (!resposta.ok) throw new Error(`Falha ao baixar ${url} (HTTP ${resposta.status})`);
  return resposta.json();
}

async function baixarCatalogoItens() {
  if (URL_ITENS) return baixarJson(URL_ITENS);

  const arquivos = await baixarJson(URL_LISTA_ITENS);
  const urls = arquivos
    .filter((arquivo) => arquivo.type === 'file' && arquivo.name.endsWith('.json') && arquivo.name !== 'i18n.json')
    .map((arquivo) => arquivo.download_url);
  const listas = await Promise.all(urls.map(baixarJson));
  return listas.flatMap((lista) => Array.isArray(lista) ? lista : Object.values(lista ?? {}));
}

function listaDeDrops(bruto) {
  const resultado = [];

  function adicionar(valor, contexto) {
    const item = valor.item ?? valor.itemName ?? valor.modName ?? valor.name;
    if (!item || !contexto.local) return;
    if (valor.chance == null && !valor.rarity && valor.dropChance == null) return;

    resultado.push({
      ...valor,
      item,
      place: contexto.local,
      ...(contexto.rotation ? { rotation: contexto.rotation } : {}),
    });
  }

  function visitarMissionRewards(missoes) {
    Object.entries(missoes ?? {}).forEach(([planeta, nos]) => {
      Object.entries(nos ?? {}).forEach(([no, dadosNo]) => {
        Object.entries(dadosNo?.rewards ?? {}).forEach(([rotacao, drops]) => {
          (Array.isArray(drops) ? drops : []).forEach((drop) => {
            const modo = dadosNo.gameMode && !no.endsWith(`(${dadosNo.gameMode})`)
              ? ` (${dadosNo.gameMode})`
              : '';
            adicionar(drop, {
              local: `${planeta}/${no}${modo}, Rot ${rotacao}`,
              rotation: rotacao,
            });
          });
        });
      });
    });
  }

  function visitarRelics(reliquias) {
    (Array.isArray(reliquias) ? reliquias : []).forEach((reliquia) => {
      const estado = reliquia.state && reliquia.state !== 'Intact'
        ? ` (${reliquia.state})`
        : '';
      const local = `${reliquia.tier ?? ''} ${reliquia.relicName ?? ''} Relic${estado}`.trim();
      (reliquia.rewards ?? []).forEach((drop) => adicionar(drop, { local }));
    });
  }

  function visitarTabelas(lista, campoFonte, campoItens = 'items') {
    const tabelas = Array.isArray(lista)
      ? lista
      : Object.values(lista ?? {}).flatMap((valor) => Array.isArray(valor) ? valor : [valor]);

    tabelas.forEach((tabela) => {
      if (!tabela || typeof tabela !== 'object') return;
      const local = tabela[campoFonte] ?? tabela.enemyName ?? tabela.objectiveName
        ?? tabela.bountyLevel ?? tabela.place;
      if (local && (tabela.item || tabela.itemName || tabela.modName)
        && (tabela.chance != null || tabela.rarity || tabela.dropChance != null)) {
        adicionar(tabela, { local });
        return;
      }
      const itens = tabela[campoItens] ?? tabela.rewards ?? tabela.mods ?? [];
      const grupos = Array.isArray(itens) ? itens : Object.values(itens).flat();
      grupos.forEach((drop) => adicionar(drop, { local }));
    });
  }

  function visitarLocaisPorInimigo(lista, campoNomeItem) {
    (Array.isArray(lista) ? lista : []).forEach((tabela) => {
      const nomeItem = tabela[campoNomeItem] ?? tabela.itemName;
      (tabela.enemies ?? []).forEach((inimigo) => {
        adicionar({ ...inimigo, item: nomeItem }, { local: inimigo.enemyName });
      });
    });
  }

  function visitarBounties(lista) {
    (Array.isArray(lista) ? lista : []).forEach((bounty) => {
      const local = bounty.bountyLevel ?? bounty.place ?? bounty.location;
      Object.entries(bounty.rewards ?? {}).forEach(([estagio, drops]) => {
        (Array.isArray(drops) ? drops : []).forEach((drop) => {
          adicionar(drop, { local: `${local} - ${estagio}` });
        });
      });
    });
  }

  visitarMissionRewards(bruto.missionRewards);
  visitarRelics(bruto.relics);
  visitarTabelas(bruto.transientRewards, 'objectiveName');
  visitarLocaisPorInimigo(bruto.modLocations, 'modName');
  visitarTabelas(bruto.enemyModTables, 'enemyName', 'mods');
  visitarLocaisPorInimigo(bruto.blueprintLocations, 'blueprintName');
  visitarTabelas(bruto.enemyBlueprintTables, 'enemyName');
  visitarTabelas(bruto.sortieRewards, 'place');
  visitarTabelas(bruto.keyRewards, 'keyName');
  visitarBounties(bruto.cetusBountyRewards);
  visitarBounties(bruto.solarisBountyRewards);
  visitarBounties(bruto.deimosRewards);
  visitarBounties(bruto.zarimanRewards);
  visitarBounties(bruto.entratiLabRewards);
  visitarBounties(bruto.hexRewards);
  visitarTabelas(bruto.syndicates, 'place');
  visitarTabelas(bruto.resourceByAvatar, 'source');
  visitarTabelas(bruto.sigilByAvatar, 'source');
  visitarTabelas(bruto.additionalItemByAvatar, 'source');

  return resultado;
}

function compactarDrop(drop) {
  const item = drop.item ?? drop.name ?? drop.itemName;
  const local = drop.place ?? drop.location ?? drop.locationName;
  if (!item || !local) return null;

  return {
    item: String(item).trim(),
    place: String(local).trim(),
    ...(drop.rotation || drop.rotationName || drop.rewardRotation
      ? { rotation: drop.rotation ?? drop.rotationName ?? drop.rewardRotation }
      : {}),
    ...(drop.rarity || drop.rarityName ? { rarity: drop.rarity ?? drop.rarityName } : {}),
    ...(drop.chance != null || drop.dropChance != null
      ? { chance: drop.chance ?? drop.dropChance }
      : {}),
  };
}

function mapaDeImagens(bruto) {
  const mapa = {};
  const itens = Array.isArray(bruto) ? bruto : Object.values(bruto ?? {});

  itens.forEach((item) => {
    if (!item?.name || !item.imageName) return;
    mapa[item.name] = `https://cdn.warframestat.us/img/${item.imageName}`;
  });

  return mapa;
}

async function gravarJson(caminho, conteudo) {
  await fs.writeFile(caminho, `${JSON.stringify(conteudo, null, 2)}\n`, 'utf8');
}

async function main() {
  const dataGeracao = new Date().toISOString();
  const sufixo = dataGeracao.replace(/[-:TZ.]/g, '').slice(0, 14);
  const [dadosDrops, dadosItens] = await Promise.all([
    baixarJson(URL_DROPS),
    baixarCatalogoItens(),
  ]);

  const items = listaDeDrops(dadosDrops).map(compactarDrop).filter(Boolean);
  const imagens = mapaDeImagens(dadosItens);
  const dataset = { version: 1, generatedAt: dataGeracao, source: URL_DROPS, items };
  const mapa = { version: 1, generatedAt: dataGeracao, source: URL_ITENS, items: imagens };

  await fs.mkdir(PASTA_ATUAL, { recursive: true });
  await fs.mkdir(PASTA_BACKUP, { recursive: true });

  for (const nome of ['compact-items.json', 'item-images.json']) {
    const atual = path.join(PASTA_ATUAL, nome);
    try {
      await fs.copyFile(atual, path.join(PASTA_BACKUP, `${nome.replace('.json', '')}-${sufixo}.json`));
    } catch (erro) {
      if (erro.code !== 'ENOENT') throw erro;
    }
  }

  await gravarJson(path.join(PASTA_ATUAL, 'compact-items.json'), dataset);
  await gravarJson(path.join(PASTA_ATUAL, 'item-images.json'), mapa);
  console.log(`Dataset atualizado: ${items.length} drops, ${Object.keys(imagens).length} imagens.`);
}

main().catch((erro) => {
  console.error('[build-dataset] atualização cancelada:', erro.message);
  process.exitCode = 1;
});