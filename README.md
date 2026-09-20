# Guia de Drops Warframe

Ferramenta de busca para encontrar rapidamente onde farmar qualquer item de
Warframe — missões, relíquias, inimigos e recompensas de bounty — com dados
locais atualizados manualmente quando o responsável decidir.

**CLÃ TENNOREINFORCEMENTPRIME** · Desenvolvido por **Br.uxão**

> Projeto de fã, sem fins comerciais, não afiliado à Digital Extremes.

---

## Como funciona

O app lê primeiro um dataset local gerado a partir das fontes da comunidade
**WFCD** (Warframe Community Developers). Isso deixa a busca rápida e reduz a
dependência da API durante o uso normal. A API continua como fallback quando o
dataset ainda está vazio ou não contém o termo procurado.

- Busca de drops local: `dados/atual/compact-items.json`
- Mapa de imagens: `dados/atual/item-images.json`
- Detalhes de item: `GET https://api.warframestat.us/items/{nome}?language={pt|en}`
- Painel ao vivo: endpoints da `Warframe Status API`

O navegador nunca baixa a fonte inteira da WFCD. O script local compacta os
dados antes de gravá-los e cria uma cópia anterior em `dados/backup/`.

## Estrutura do projeto

```
index.html            → página principal
404.html              → página de erro customizada (GitHub Pages)
css/
  tokens.css           → cores, espaçamento, tipografia (mude a marca aqui)
  base.css             → reset e fundamentos
  layout.css           → header, bottom nav, grid responsivo
  componentes.css       → busca, cards, badges, modal, chips, skeleton
  desktop.css            → aumenta fontes/espaçamentos em telas ≥900px
js/
  config.js            → endpoints da API, plataforma (pc/ps4/xb1/swi) e constantes
  api/
    drops.js            → busca de drops (normalização + heurística de categoria/facção)
    datasetLocal.js     → leitura do dataset local de drops
    items.js             → detalhes de item (com cache de sessão)
    worldstate.js         → estado do jogo em tempo real (painel ao vivo)
  ui/
    busca.js             → campo de busca, filtros, grid de resultados
    painelItem.js         → modal "onde encontrar" + "detalhes"
    painelAoVivo.js        → conteúdo da aba "Especial" (ciclos de todos os
                              planetas, Sortie, Baro, Arbitration)
    painelSwap.js           → abre/fecha os bottom sheets (Filtros, Especial) —
                               igual em qualquer tamanho de tela
    navegacao.js          → troca de seções e botão voltar ao topo
    idioma.js              → alternância PT-BR / Inglês
    acessibilidade.js       → tema claro/escuro e escala de fonte
    lightbox.js             → imagem do item em tamanho grande
  i18n.js                → dicionário de textos da interface (PT/EN)
  imagens-locais.js       → mapa de imagens locais dos itens (mais rápido que a API)
  dados-warframes.js       → lista de Warframes conhecidos (filtro de categoria)
  dados-fontes-especiais.js → detecção de Adaptador Incarnon
  dados-fontes-manuais.js   → lê dados/fontes-manuais.txt (mineração, Dojo, etc.)
  utils/
    normalizar.js          → normalização de texto e nomes de item
    http.js                 → fetch com timeout e cancelamento
  main.js                → inicialização geral
dados/
  atual/
    compact-items.json    → dataset local de drops usado pela busca
    item-images.json      → mapa de imagens gerado separadamente
  backup/                  → cópias anteriores geradas pelo script
  fontes-manuais.txt      → lista editável à mão (mineração, Dojo, etc. — ver
                             seção "Lista manual de fontes" abaixo)
  fontes-baro.txt         → catálogo editável das ofertas do Baro; cada linha
                             usa "Nome do item Ducats Créditos"
scripts/
  build-dataset.js        → atualiza os dois JSONs somente quando executado manualmente
imagens/
  CLATENNOLOGO.webp      → emblema oficial do clã (topbar, Sobre, favicon, 404)
  FUNDO1.webp             → imagem de fundo do hero e da página
  logowf.webp              → logo genérico de Warframe (reserva)
  *.webp                    → imagens de Warframes/recursos mapeadas em js/imagens-locais.js
```

## Busca ampliada: itens que não são "drop"

Nem todo item do jogo vem de uma tabela de drop por chance — muitos são
construídos no Arsenal, pesquisados no Dojo do clã, recompensa de quest, ou
comprados no Mercado. Antes, esses itens simplesmente não apareciam na
busca. Agora, sempre que a busca por RNG (`/drops/search`) não encontra o
item exato digitado, o app complementa buscando o item pelo **mesmo
mecanismo de busca por aproximação usado no resto do projeto**
(`buscarDetalhesItem`, o mesmo que já busca imagem/descrição — não
diferencia maiúscula/minúscula, nem exige o nome completo) — cobrindo
armas de pesquisa do Dojo, itens de loja, Adaptadores Incarnon, etc.

> Uma versão anterior dessa busca usava um endpoint diferente (mais
> rígido, exigia o nome exato), o que fazia essa parte da busca se
> comportar diferente do resto do app. Foi corrigido pra usar sempre o
> mesmo mecanismo.

Uma observação honesta sobre o que dá pra saber com certeza:
- **Recompensa de quest** (ex: Octavia): a fonte exata aparece certinha,
  porque os dados de item trazem essa informação estruturada.
- **Adaptador Incarnon**: mostro uma nota específica (O Circuito/Duviri),
  baseada em como o sistema funciona hoje — pode mudar entre atualizações.
- **Arma de pesquisa do Dojo**: aqui conseguimos um sinal real e automático —
  se a arma pede **Fieldron**, **Detonite Injector** ou **Mutagen Mass** pra
  construir, isso só acontece em armas de Clan Tech (esses materiais só
  existem pra isso no jogo). Quando detecta, o app avisa "provável pesquisa
  no Dojo". Isso é 100% automático: não depende de eu digitar nome nenhum,
  e vale pra qualquer arma nova que a DE lançar no futuro, desde que use um
  desses materiais. **Limite conhecido**: algumas armas do Laboratório Tenno
  não usam esses materiais e não são pegas por esse sinal — pra essas, a
  mensagem genérica (Arsenal/Dojo/Mercado + link pra wiki) continua sendo a
  mais honesta.
- **Item de loja, sem sinal nenhum**: mostra que o item existe, com imagem e
  descrição, e a mensagem genérica sugerindo os métodos mais comuns.

### Preço de loja (Platina/Créditos) — dado exato, não é chute

A API traz o preço real que a DE cobra na loja do jogo (`marketCost` em
Platina, `bpCost` em Créditos pro blueprint avulso). Diferente da detecção
de Dojo (que é uma heurística), isso é um número exato, direto da fonte —
por isso tem prioridade alta na cadeia de fontes: se o item também parecer
de pesquisa do Dojo, as duas informações aparecem juntas ("Pesquisa no Dojo
— ou compre pronto por X Platina"). Vale pra qualquer item vendido na loja,
incluindo Warframes inteiros (ex: Rhino, 375 Platina) — some sozinho quando
a DE mudar o preço, sem eu precisar atualizar nada.

### Lista manual de fontes (editável por vocês)

Pra cobrir o que a detecção automática não pega sozinha — mineração
(gemas), armas do Laboratório Tenno, e qualquer categoria parecida que
aparecer no futuro — existe `dados/fontes-manuais.txt`, um arquivo de
texto simples que qualquer pessoa do clã pode editar, sem saber programar:

```
# Nome do item | categoria | onde encontrar
Sentirum | mineracao | Mineração em Plains of Eidolon (Terra) — veio raro
Stug | dojo | Pesquisa no Dojo do clã (Laboratório Tenno)
```

- Três campos por linha, separados por `|` (pipe): nome do item, categoria
  (uma palavra, sem espaço/acento) e onde encontrar (texto livre)
- Nome do item: exatamente como aparece na busca do site
- Linhas começando com `#` são comentários e são ignoradas
- Depois de editar, é só salvar o arquivo e subir de novo pro GitHub —
  nenhum outro arquivo do projeto precisa mudar

Esse arquivo é carregado uma vez quando o site abre (`js/dados-fontes-manuais.js`)
e tem prioridade um degrau abaixo da fonte estruturada (recompensa de
quest) — se um item tiver as duas, a estruturada vence. Já preenchemos com
uma lista inicial de gemas de mineração (conhecimento do modelo, não é
dado automático — confiram e completem à vontade) e as 3 armas de Dojo que
já tínhamos identificado.

A categoria de cada linha também vira um filtro na busca (`Mineração`,
`Dojo`), então itens cadastrados aqui ficam filtráveis igual aos outros.

## Painel ao vivo

A tira no topo da busca mostra o estado atual do jogo (ciclo de Cetus, Sortie
do dia, Baro Ki'Teer, Arbitration) — dados 100% em tempo real, reforçando que
esta é uma ferramenta viva, não uma cópia estática.

> **Atenção:** os dados assumem a plataforma **PC** (`js/config.js`,
> constante `PLATAFORMA`). Se o clã jogar em console, troque para `'ps4'`,
> `'xb1'` ou `'swi'` nesse arquivo.

## Categoria e facção nos resultados

A API não expõe categoria (relíquia/missão/bounty) nem facção
(Grineer/Corpus/Infestado) como campos prontos — ambos são **inferidos no
cliente** a partir do texto do local (`js/api/drops.js`, funções
`inferirCategoria` e `inferirFaccao`). É uma heurística por palavras-chave,
não uma classificação garantida. Se notar algo categorizado errado, me diga
o texto exato que aparece no card — ajusto o padrão.

## Imagens dos itens

Duas camadas, da mais rápida pra mais lenta:

1. **Local** (`imagens/`): arquivos já disponíveis no projeto, instantâneos.
2. **Dataset** (`dados/atual/item-images.json`): URLs geradas junto da
  atualização dos dados, sem editar milhares de nomes à mão.
3. **API** (`js/api/items.js`): último recurso para itens fora das duas listas.

Se vocês adicionarem mais imagens `.webp` na pasta `imagens/`, me mandem a
lista de nomes de arquivo que eu atualizo o mapa em `imagens-locais.js`.

## Atualização manual do dataset

O Node.js é usado somente quando você decidir atualizar os arquivos locais.
Na raiz do projeto, execute:

```text
node scripts/build-dataset.js
```

O script baixa as fontes configuradas, compacta os drops, gera o mapa de
imagens e salva os arquivos em `dados/atual/`. Antes de substituir os atuais,
ele cria cópias datadas em `dados/backup/`. Se a execução falhar, os arquivos
atuais permanecem intactos.

No PowerShell, as URLs das fontes podem ser trocadas por variáveis de ambiente:

```text
$env:WFCD_DROPS_URL = 'https://...'; $env:WFCD_ITEMS_URL = 'https://...'; node scripts/build-dataset.js
```

## Atualização manual do Baro

O arquivo `dados/fontes-baro.txt` pode ser editado sem alterar JavaScript.
Cada linha válida contém o nome do item, a quantidade de Ducats e a quantidade
de Créditos, nesta ordem:

```text
Primed Flow 350 110,000
```

Títulos de categoria e linhas vazias são ignorados. Para adicionar uma oferta,
acrescente uma linha; para atualizar preços, altere os dois números.

## Navegação — igual em qualquer tamanho de tela (Filtros / Especial)

A barra inferior tem 4 botões, e aparece do celular ao desktop (nada de
sidebar):
- **Busca** — vai pra tela de resultados e já foca o campo de busca
- **Filtros** — abre um bottom sheet com abas Filtros/Atalhos
- **Especial** — abre um bottom sheet com os ciclos de todos os planetas
  (Cetus, Terra, Fortuna, Cambion), Sortie, Baro Ki'Teer, Arbitration e
  links úteis (site oficial, Discord do clã, Warframe Market)
- **Sobre** — informações e créditos do projeto

Os painéis Filtros e Especial ficam escondidos até o usuário tocar/clicar —
mesmo comportamento em qualquer tela (`js/ui/painelSwap.js`). Não existe
mais sidebar nem versão "sempre visível" desses painéis — foi removida pra
deixar o desktop com a mesma cara e mecânica do mobile, como decidido.

## "Meu Drop" — lista pessoal salva no aparelho

Cada usuário pode guardar resultados de busca numa lista pessoal, salva só
no navegador dele (`localStorage`, `js/meuDrop.js`) — não sincroniza com
ninguém, nem com o resto do site.

- **Adicionar**: arraste um card de resultado pra **direita** (funciona com
  o dedo ou o mouse), ou toque no botão "+" no canto do card. Abre um
  popup de confirmação e depois um popup opcional pra escrever uma nota.
- **Acessar**: botão "Meu Drop" no topo (onde antes ficava a busca).
- **Dentro do Meu Drop**: busca própria (só filtra o que já está salvo,
  nunca chama a API), reordenar arrastando pelo ícone ⠿, editar nota
  a qualquer momento, remover.
- **Exportar/Importar**: exporta um arquivo `.json` que pode ser
  compartilhado; ao importar, pergunta toda vez se quer somar com o que já
  existe ou substituir tudo.

O gesto de arrastar e a busca principal do site continuam **completamente
separados** — a busca da tela inicial nunca usa os dados salvos do Meu
Drop, e vice-versa.

## Layout: busca no centro, Sobrevivência primeiro pra recursos

- A barra de busca principal saiu do topo e agora fica embaixo do banner
  "GUIA DE DROPS", maior e mais fácil de ler.
- Atalhos de recurso, dentro de Filtros, fecham o painel automaticamente
  ao buscar — sem precisar fechar na mão depois.
- Resultados de recurso (Ferrite, Rubedo, etc. — `js/dados-recursos.js`)
  priorizam nós de **Sobrevivência** primeiro, usando o tipo de missão de
  cada nó (`js/api/nodes.js`, dado estático da API, carregado uma vez).
  Não tentamos identificar bônus específico de drop por nó — isso ainda
  não tem fonte automática (conversamos sobre isso).

## Acessibilidade

No topo, ao lado do idioma, tem dois grupos de controle:
- **A- / A+** — aumenta/diminui o tamanho de toda a fonte do site (persiste
  entre visitas). Tecnicamente, todo `font-size` do projeto usa
  `calc(Npx * var(--escala-fonte))`, então esses botões realmente reescalam
  a interface inteira, não é só cosmético.
- **Ícone de tema** — alterna entre escuro (padrão) e claro
  (`css/tema-claro.css`), também persistente.

## Idioma

O app detecta o idioma do navegador na primeira visita (português ou inglês)
e guarda a escolha manual do usuário em `localStorage` a partir daí. O toggle
PT/EN fica sempre visível no topo e traduz toda a interface (`js/i18n.js`).
Os **nomes dos itens continuam em inglês** mesmo no modo PT — é o nome oficial
usado no jogo e nas trocas entre jogadores, e a API de busca de drops não
tem uma versão traduzida desses nomes (só a descrição do item, na aba
"Detalhes", é de fato traduzida).

## Publicação (GitHub Pages)

1. Suba os arquivos para um repositório no GitHub.
2. Nas configurações do repositório, ative **Settings → Pages → Deploy from
   branch**, selecionando a branch e a pasta raiz.
3. Pronto — não há build, é HTML/CSS/JS puro.

Este repositório não usa licença aberta (todos os direitos reservados) — veja
o aviso no rodapé do próprio site.

## O que NÃO está incluído (por decisão do projeto)

- **PWA** (manifest, service worker, instalação): removido por enquanto.
  Pode ser reintroduzido no futuro se fizer sentido.
- **Builds de mod recomendadas / lore expandida**: fora do escopo — o app é
  focado em busca de item, não em guia completo.

## Checklist de teste sugerida

Como o código foi escrito com validação defensiva (campos ausentes não
quebram a tela), a maioria dos problemas prováveis são de **nomes de campo
diferentes do esperado** vindos da API. Ao testar, separe os achados por
módulo — facilita reportar e corrigir:

### `js/api/drops.js` — busca de drops
- [ ] Buscar um nome de item conhecido (ex: "Vitality") retorna resultados
- [ ] Buscar um nome de local conhecido (ex: "Hydron") retorna resultados
- [ ] Termo com menos de 2 caracteres não dispara busca
- [ ] Termo sem nenhum resultado mostra o estado "Nada encontrado"
- [ ] Se abrir o DevTools → Network e simular "offline", aparece a mensagem
      de indisponibilidade (não uma tela em branco)

### `js/api/items.js` + `js/ui/painelItem.js` — painel do item
- [ ] Clicar em um card abre o modal com o nome certo
- [ ] Aba "Onde encontrar" mostra só os locais daquele item específico
- [ ] Aba "Detalhes" mostra imagem/descrição (comparar com a wiki oficial)
- [ ] Um item de componente (ex: "algo Blueprint") também carrega detalhes
- [ ] Um item sem dado nenhum mostra o link de fallback para a wiki
- [ ] Trocar o idioma com o modal aberto atualiza a aba "Detalhes"

### `js/ui/busca.js` — filtros e grid
- [ ] Ativar um filtro de raridade esconde os itens de outras raridades
- [ ] Grid se reorganiza corretamente ao redimensionar a janela
- [ ] Botão "X" limpa a busca e volta ao estado inicial

### Layout e mobile
- [ ] Testar em pelo menos 3 larguras: ~360px, ~390px, ~768px
- [ ] Bottom nav sincroniza a seção ativa em qualquer tamanho de tela
- [ ] Teclado virtual não cobre o campo de busca ao digitar
- [ ] Zoom do navegador em 150–200% não quebra o layout
- [ ] Orientação paisagem no celular não corta conteúdo

### Geral
- [ ] Console do navegador sem erros (mensagens são prefixadas por módulo,
      ex: `[busca]`, `[painelItem]`, `[main]`)
- [ ] Rodar o Lighthouse (Chrome DevTools) e anotar a pontuação de partida
