const modules = [
  {book:1,title:"Introdução à Web, anatomia e estrutura básica",short:"Entenda o papel do HTML, CSS e JavaScript e aprenda a estrutura mínima de um documento HTML5.",goals:["Diferenciar HTML, CSS e JavaScript.","Reconhecer a anatomia básica de um elemento HTML.","Montar a estrutura mínima de um documento HTML5."],lessons:[
    ["Como a Web funciona?", "Ao acessar um site, o navegador solicita recursos a um servidor. O material apresenta três peças centrais: HTML para estrutura, CSS para aparência e layout e JavaScript para interatividade e lógica. HTML não é linguagem de programação; é uma linguagem de marcação."],
    ["Anatomia de uma tag", "Um elemento HTML normalmente é formado por uma tag de abertura, conteúdo e tag de fechamento. Atributos acrescentam informações à tag de abertura e seguem a forma nome=\"valor\"."],
    ["Documento HTML5", "A base do documento usa <!DOCTYPE html>, o elemento <html lang=\"pt-BR\">, um <head> com informações como charset, viewport e title, e um <body> com o conteúdo que será exibido." ]
  ]},
  {book:1,title:"Texto, listas, links e semântica",short:"Organize conteúdo com títulos, parágrafos, listas, links e elementos semânticos.",goals:["Construir uma hierarquia de títulos coerente.","Usar listas conforme o tipo de conteúdo.","Criar links internos e externos com os atributos adequados."],lessons:[
    ["Hierarquia de títulos", "Use h1 até h6 para representar níveis de título. A hierarquia ajuda a organizar o conteúdo e torna a estrutura mais compreensível."],
    ["Parágrafos e listas", "p representa parágrafos. strong indica importância e em indica ênfase. ul cria listas não ordenadas e ol cria listas ordenadas; cada item é colocado em li."],
    ["Links", "O elemento a cria hiperlinks. href define o destino. target=\"_blank\" pode abrir o destino em uma nova aba; mailto: permite criar um link para e-mail." ]
  ]},
  {book:1,title:"Mídias, tabelas e estrutura semântica",short:"Trabalhe com imagens, áudio, vídeo, tabelas e as principais áreas semânticas do HTML5.",goals:["Inserir imagens com texto alternativo.","Estruturar dados tabulares corretamente.","Separar áreas da página usando elementos semânticos."],lessons:[
    ["Imagens e mídias", "img usa src para indicar o arquivo e alt para fornecer uma descrição textual. audio e video permitem mídia nativa; controls adiciona controles ao usuário e poster pode definir uma imagem de capa para vídeo."],
    ["Tabelas", "Use table para dados tabulares, com tr para linhas, th para células de cabeçalho e td para células de dados. O material ressalta que tabelas não devem ser usadas para criar o layout da página."],
    ["Estrutura semântica", "header representa cabeçalho, nav navegação, main conteúdo principal, article conteúdo independente, section uma seção temática, aside conteúdo complementar e footer rodapé." ]
  ]},
  {book:1,title:"Formulários, validação e acessibilidade",short:"Monte formulários claros usando labels, inputs, textarea, select e validação nativa.",goals:["Associar corretamente labels e campos.","Conhecer os principais tipos de input.","Usar atributos de validação e estrutura semântica."],lessons:[
    ["Estrutura de formulário", "form representa o formulário. action indica o destino do envio e method define como os dados serão enviados. O conteúdo do formulário fica dentro do elemento form."],
    ["Inputs e labels", "Cada campo deve ter uma label associada ao id correspondente. O material apresenta tipos como text, email, password, number, date, checkbox, radio e file, além de textarea e select."],
    ["Validação nativa", "required, minlength, min e max ajudam o navegador a validar campos antes do envio. A validação não substitui uma aplicação completa de tratamento dos dados, mas é uma camada importante no formulário." ]
  ]},
  {book:2,title:"CSS, seletores, cores e tipografia",short:"Aprenda a escrever regras CSS, selecionar elementos e controlar cores, fontes, alinhamento e legibilidade.",goals:["Entender seletor, propriedade e valor.","Distinguir tag, classe e ID.","Aplicar propriedades básicas de texto e cor."],lessons:[
    ["Como o CSS funciona", "CSS define apresentação, espaçamento e layout. O material apresenta CSS inline, interno e externo e recomenda o arquivo externo como abordagem padrão para projetos organizados."],
    ["Seletores básicos", "Um seletor de tag aplica regras a elementos daquele tipo. .classe pode ser reutilizada em vários elementos. #id identifica um elemento específico."],
    ["Cores e tipografia", "Cores podem ser escritas por nomes, hexadecimal e RGB/RGBA. Para texto, o material trabalha com font-family, font-size, font-weight, line-height, text-align e text-decoration." ]
  ]},
  {book:2,title:"Box Model e dimensionamento",short:"Domine content, padding, border, margin e box-sizing para controlar dimensões previsíveis.",goals:["Visualizar as quatro camadas do Box Model.","Diferenciar padding e margin.","Entender por que border-box simplifica o dimensionamento."],lessons:[
    ["As quatro camadas", "Todo elemento é tratado como uma caixa. De dentro para fora: content, padding, border e margin. Content é o conteúdo; padding é o espaço interno; border envolve a caixa; margin cria espaço externo."],
    ["content-box e border-box", "Com content-box, padding e border são adicionados ao tamanho declarado. Com border-box, padding e border ficam dentro do tamanho definido, tornando o cálculo do layout mais previsível."],
    ["Reset inicial", "O material apresenta como reset comum: * { margin: 0; padding: 0; box-sizing: border-box; }. Isso reduz diferenças iniciais entre elementos e facilita o controle do layout." ]
  ]},
  {book:2,title:"Position, display e z-index",short:"Entenda fluxo normal, block, inline e os principais valores de position.",goals:["Reconhecer o comportamento básico de display.","Saber quando relative, absolute, fixed e sticky entram em cena.","Entender o papel do z-index em sobreposições."],lessons:[
    ["display", "block normalmente ocupa a largura disponível e inicia uma nova linha. inline ocupa apenas o espaço necessário. inline-block permite dimensionamento mantendo o comportamento lado a lado. none remove o elemento do layout."],
    ["position", "static é o comportamento padrão. relative mantém o espaço no fluxo e permite deslocamento. absolute sai do fluxo e se posiciona em relação ao ancestral posicionado mais próximo. fixed se relaciona à viewport. sticky combina comportamento de fluxo e fixação conforme a rolagem."],
    ["z-index", "Quando elementos posicionados se sobrepõem, z-index ajuda a definir a ordem de empilhamento." ]
  ]},
  {book:2,title:"Pseudo-classes, pseudo-elementos e efeitos",short:"Crie respostas visuais para interação e efeitos com hover, focus, before, after, sombras, transition e transform.",goals:["Usar estados como :hover e :focus.","Diferenciar pseudo-classe de pseudo-elemento.","Aplicar efeitos sem perder a clareza do layout."],lessons:[
    ["Pseudo-classes", ":hover representa interação com o ponteiro, :focus representa foco, :first-child seleciona o primeiro filho e :nth-child permite selecionar elementos por posição."],
    ["Pseudo-elementos", "::first-letter estiliza a primeira letra. ::before e ::after permitem criar conteúdo visual antes ou depois do conteúdo do elemento."],
    ["Efeitos", "box-shadow e text-shadow criam sombras. transition suaviza mudanças e transform permite alterações visuais como scale e translate." ]
  ]},
  {book:3,title:"Flexbox: eixo principal, transversal e alinhamento",short:"Organize componentes em uma dimensão usando container flexível, eixos, alinhamento, wrap e gap.",goals:["Identificar main axis e cross axis.","Distribuir e alinhar itens corretamente.","Construir layouts flexíveis sem depender de margens artificiais."],lessons:[
    ["O modelo Flexbox", "display: flex transforma os filhos diretos em flex items e cria um sistema de layout unidimensional: linha ou coluna por vez."],
    ["Eixos", "O main axis é o eixo principal e o cross axis é perpendicular a ele. A direção inicial é horizontal; flex-direction pode mudar a orientação."],
    ["Alinhamento e espaçamento", "justify-content atua no eixo principal. align-items atua no eixo transversal. flex-wrap permite quebra e gap cria espaçamento entre os itens." ]
  ]},
  {book:3,title:"Flexbox avançado",short:"Aprofunde-se em crescimento, encolhimento, base, shorthand flex e alinhamento individual.",goals:["Compreender grow, shrink e basis.","Usar o shorthand flex com segurança.","Diferenciar align-items de align-self."],lessons:[
    ["Crescimento e encolhimento", "flex-grow controla quanto um item pode crescer quando existe espaço disponível. flex-shrink controla a capacidade de encolher quando o espaço é insuficiente."],
    ["flex-basis e shorthand", "flex-basis define o tamanho inicial no eixo principal. A propriedade flex reúne grow, shrink e basis em uma única declaração."],
    ["Alinhamento individual", "align-self permite alterar o alinhamento de um item específico sem mudar o alinhamento definido para todos os itens." ]
  ]},
  {book:3,title:"CSS Grid: linhas, colunas e fr",short:"Monte layouts bidimensionais com Grid, templates, gap, repeat e unidades fr.",goals:["Ativar e configurar um grid.","Definir colunas e linhas.","Usar repeat e fr para grades flexíveis."],lessons:[
    ["Grid em duas dimensões", "CSS Grid trabalha simultaneamente com linhas e colunas. Por isso, é especialmente útil para estruturas gerais de página e grades."],
    ["Templates e gap", "display: grid ativa o Grid. grid-template-columns e grid-template-rows definem a grade. gap cria espaço entre linhas e colunas."],
    ["fr e repeat", "fr representa uma fração do espaço livre. repeat(3, 1fr), por exemplo, cria três colunas de uma fração cada." ]
  ]},
  {book:3,title:"Grid Areas e Flexbox + Grid",short:"Desenhe estruturas com áreas nomeadas e combine Grid para estrutura com Flexbox para componentes.",goals:["Ler um layout de grid por áreas nomeadas.","Escolher Grid ou Flexbox conforme o problema.","Combinar os dois sistemas em uma mesma página."],lessons:[
    ["Áreas nomeadas", "grid-template-areas permite representar visualmente a estrutura do layout usando nomes de áreas como header, sidebar, main e footer."],
    ["Grid ou Flexbox?", "O material resume Grid como bidimensional, adequado à estrutura geral, e Flexbox como unidimensional, adequado a componentes menores como menus, alinhamento de ícones e formulários."],
    ["Composição", "Uma arquitetura real pode usar Grid para a estrutura maior e Flexbox dentro de cada componente para organizar seu conteúdo interno." ]
  ]},
  {book:4,title:"Unidades relativas: rem, em, %, vh e vw",short:"Construa interfaces mais adaptáveis usando unidades relativas e limites como max-width.",goals:["Entender por que unidades relativas são úteis.","Diferenciar rem de em.","Usar porcentagens e unidades da viewport com intenção."],lessons:[
    ["Por que evitar depender apenas de px", "O material apresenta unidades relativas como uma escolha importante para interfaces que precisam se adaptar a diferentes telas e às preferências de zoom do usuário."],
    ["rem e em", "rem é relativo ao tamanho de fonte do elemento raiz. em é relativo ao tamanho de fonte do elemento pai direto. O material destaca rem para escalas previsíveis e em para componentes que devem acompanhar o texto do pai."],
    ["%, vh, vw e max-width", "% depende do container de referência. 1vw representa 1% da largura da viewport e 1vh representa 1% da altura. max-width pode limitar a expansão de um elemento." ]
  ]},
  {book:4,title:"Media Queries e mobile-first",short:"Crie responsividade progressiva começando pelo celular e ampliando o layout conforme a largura aumenta.",goals:["Entender o papel das media queries.","Aplicar a estratégia mobile-first.","Trabalhar com breakpoints progressivos."],lessons:[
    ["Media queries", "@media permite aplicar regras CSS conforme características do dispositivo, especialmente a largura da viewport."],
    ["Mobile-first", "Escreva primeiro o layout para telas pequenas. Depois use min-width para adicionar colunas, espaçamentos e componentes mais complexos conforme a tela cresce."],
    ["Breakpoints do material", "O exemplo fornecido usa 768px para tablet e 1024px para desktop, levando a grade de uma coluna para duas e depois três colunas." ]
  ]},
  {book:4,title:"Imagens e mídias responsivas",short:"Evite estouro horizontal e preserve proporções de imagens e vídeos.",goals:["Impedir que mídia ultrapasse o container.","Preservar proporções.","Entender por que max-width: 100% é tão importante."],lessons:[
    ["Regra essencial", "Uma regra comum do material é img, video { max-width: 100%; height: auto; display: block; }. Ela limita a mídia ao espaço disponível e mantém a proporção."],
    ["O problema do overflow", "Uma imagem maior que a tela pode criar rolagem horizontal. max-width: 100% impede que a largura ultrapasse o container de referência."],
    ["Teste prático", "Reduza a janela do navegador e observe a mídia. O objetivo é que ela acompanhe a largura disponível sem ficar deformada." ]
  ]},
  {book:4,title:"Projeto final: portal responsivo",short:"Integre HTML semântico, CSS, Grid, Flexbox, unidades relativas e media queries em um projeto completo.",goals:["Planejar a estrutura semântica.","Combinar Grid e Flexbox.","Implementar uma evolução mobile → tablet → desktop."],lessons:[
    ["Estrutura do portal", "O projeto final do material propõe header, navegação, hero, conteúdo principal, cards, formulário e footer, organizados com HTML semântico."],
    ["Layout e estilo", "O exemplo integra reset, variáveis CSS, container, botão, header sticky, Grid para cards, efeitos de hover e media queries."],
    ["Integração final", "A meta é combinar os conhecimentos anteriores em um único projeto: estrutura semântica, estilização, Box Model, Flexbox, Grid, unidades relativas e responsividade." ]
  ]}
];

const challenges=[
 {id:1,level:"INICIANTE",title:"Currículo Profissional",focus:"HTML5 semântico, hierarquia, listas e links.",goal:"Criar uma página de currículo limpa, bem estruturada e semanticamente correta, sem CSS.",items:["Usar a estrutura mínima do HTML5 com lang=\"pt-BR\".","Definir o título como Currículo de [Seu Nome].","Usar header, main e section/article para organizar o conteúdo.","Usar ul para listar habilidades técnicas.","Adicionar um link externo com target=\"_blank\" e um link mailto:."]},
 {id:2,level:"INTERMEDIÁRIO",title:"Vitrine de Produtos",focus:"Box Model, seletores, :hover e Flexbox.",goal:"Criar três cards de produto alinhados e interativos.",items:["Criar um container com três cartões.","Cada cartão deve ter imagem, h3, descrição, preço e botão.","Aplicar box-sizing, largura máxima, border-radius, padding, borda e sombra.","Usar Flexbox para centralizar os três cartões e gap: 20px.","Criar transition e :hover com translateY(-8px) e sombra mais intensa."]},
 {id:3,level:"AVANÇADO",title:"Painel de Controle",focus:"CSS Grid bidimensional e grid-template-areas.",goal:"Construir a estrutura de um dashboard com áreas nomeadas.",items:["Criar header, aside, main e footer.","Ativar display: grid no container principal.","Usar grid-template-areas para representar a estrutura.","Dar 250px à sidebar e 1fr ao conteúdo principal.","Fazer header e footer ocuparem toda a largura e usar gap: 15px."]},
 {id:4,level:"MESTRE",title:"Portal de Notícias Responsivo",focus:"Mobile-first, rem, vw, media queries, Grid + Flexbox.",goal:"Criar uma página que mude de uma coluna no celular para duas no tablet e três no desktop.",items:["Começar com grid-template-columns: 1fr no mobile.","Em 768px, mudar a grade para duas colunas.","Em 1024px, mudar para três colunas e expandir a navegação.","Usar rem para fontes e espaçamentos do projeto.","Garantir imagens com max-width: 100% e height: auto."]}
];

const globalQuestions=[
 ["Qual é o papel principal do HTML?",["Controlar o banco de dados","Estruturar e marcar o conteúdo","Definir apenas as cores","Executar toda a lógica da aplicação"],1,"O material apresenta HTML como a estrutura e a linguagem de marcação do conteúdo."],
 ["Qual atributo define o destino de um link <a>?",["src","alt","href","poster"],2,"href indica o destino do hiperlink."],
 ["Qual é a ordem correta do Box Model, de dentro para fora?",["margin → border → padding → content","content → padding → border → margin","padding → content → margin → border","content → border → padding → margin"],1,"O material organiza as camadas como content, padding, border e margin."],
 ["Qual valor de position se relaciona diretamente à viewport?",["static","relative","absolute","fixed"],3,"fixed é usado quando o elemento deve ficar preso à viewport."],
 ["No Flexbox, qual propriedade distribui itens no eixo principal?",["align-items","justify-content","align-self","flex-wrap"],1,"justify-content atua no main axis."],
 ["Qual afirmação resume corretamente Flexbox e Grid?",["Ambos são somente bidimensionais","Flexbox é 2D e Grid é 1D","Flexbox é 1D e Grid é 2D","Nenhum deles trabalha com linhas"],2,"O material apresenta Flexbox como unidimensional e Grid como bidimensional."],
 ["O que 1rem representa se a fonte do elemento raiz for 16px?",["8px","12px","16px","32px"],2,"rem é relativo ao tamanho da fonte do elemento raiz: 1rem = 16px nesse cenário."],
 ["Qual abordagem começa pelo layout de telas pequenas?",["Desktop-first","Mobile-first","Print-first","Grid-first"],1,"Mobile-first começa com o CSS para telas pequenas e evolui com min-width."],
 ["Qual regra impede uma imagem de ultrapassar a largura disponível?",["width: 200vw","max-width: 100%","position: fixed","height: 100vh"],1,"max-width: 100% limita a largura da mídia ao espaço disponível."],
 ["Qual propriedade permite que flex items passem para outra linha?",["flex-basis","flex-wrap","flex-grow","align-self"],1,"flex-wrap controla a quebra dos itens Flex."],
 ["Qual sintaxe seleciona uma classe no CSS?",["#classe",".classe","classe()","@classe"],1,"Classes são selecionadas com o ponto."],
 ["Qual elemento representa o conteúdo principal da página?",["aside","footer","main","nav"],2,"main representa o conteúdo principal."],
 ["Qual atributo fornece texto alternativo para uma imagem?",["href","alt","target","method"],1,"alt fornece uma descrição textual da imagem."],
 ["Qual shorthand reúne flex-grow, flex-shrink e flex-basis?",["grid","flex","box","layout"],1,"flex é o shorthand apresentado para essas três propriedades."],
 ["Para que serve grid-template-areas?",["Criar animações","Definir áreas nomeadas do Grid","Alterar a fonte","Validar formulários"],1,"Ele permite desenhar a estrutura do Grid usando nomes de áreas."],
 ["Em um layout mobile-first, o CSS base deve priorizar...",["A maior tela possível","O celular e telas pequenas","Somente TVs","Apenas impressão"],1,"A estratégia começa pelo layout menor e adiciona complexidade conforme a tela cresce."]
];
const globalCodeExamples = [
  {html:`<main><h1>Meu conteúdo</h1><p>Uma estrutura semântica.</p></main>`,css:`main { max-width: 700px; margin: auto; }`,js:``},
  {html:`<a href="https://example.com">Visitar site</a>`,css:`a { color: #2563eb; }`,js:``},
  {html:`<div class="box">Conteúdo</div>`,css:`.box { width: 200px; padding: 20px; border: 5px solid #111; margin: 20px; }`,js:``},
  {html:`<div class="box">Fixado</div>`,css:`.box { position: fixed; right: 20px; bottom: 20px; }`,js:``},
  {html:`<div class="flex"><span>A</span><span>B</span></div>`,css:`.flex { display: flex; justify-content: center; gap: 1rem; }`,js:``},
  {html:`<div class="layout"><div>A</div><div>B</div></div>`,css:`.layout { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }`,js:``},
  {html:`<div class="root">Texto</div>`,css:`:root { font-size: 16px; } .root { font-size: 1rem; }`,js:``},
  {html:`<main>Conteúdo</main>`,css:`main { width: 100%; } @media (min-width: 768px) { main { max-width: 900px; } }`,js:``},
  {html:`<img src="https://picsum.photos/800/400" alt="Imagem">`,css:`img { max-width: 100%; height: auto; }`,js:``},
  {html:`<div class="flex"><span>A</span><span>B</span></div>`,css:`.flex { display: flex; flex-wrap: wrap; }`,js:``},
  {html:`<p class="destaque">Destaque</p>`,css:`.destaque { color: #2563eb; }`,js:``},
  {html:`<main>Conteúdo principal</main>`,css:`main { display: block; }`,js:``},
  {html:`<img src="https://picsum.photos/500/300" alt="Descrição da imagem">`,css:`img { display: block; }`,js:``},
  {html:`<div class="item">Item</div>`,css:`.item { flex: 1 1 200px; }`,js:``},
  {html:`<div class="layout"><header>Header</header><main>Main</main></div>`,css:`.layout { display: grid; grid-template-areas: "header" "main"; }`,js:``},
  {html:`<main>Conteúdo</main>`,css:`main { display: grid; grid-template-columns: 1fr; }`,js:``}
];
function questionCode(q, idx=0){ return q[4] || globalCodeExamples[idx % globalCodeExamples.length]; }
function questionCodeType(q){ return q[5] || "css"; }


const chapterCodeExamples = [
  {html:`<!doctype html>\n<html lang="pt-BR">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Minha página</title>\n</head>\n<body>\n  <h1>Olá, mundo!</h1>\n</body>\n</html>`,css:`body { font-family: Arial, sans-serif; }`,js:`console.log("HTML estruturado!");`},
  {html:`<header><h1>Meu site</h1></header>\n<main>\n  <section><h2>Sobre</h2><p>Conteúdo.</p></section>\n</main>`,css:`h1 { margin: 0; }`,js:``},
  {html:`<main>\n  <section><h2>Galeria</h2><img src="https://picsum.photos/500/280" alt="Imagem de exemplo"></section>\n  <section><h2>Dados</h2><table><tr><th>Item</th><th>Valor</th></tr><tr><td>HTML</td><td>Estrutura</td></tr></table></section>\n</main>`,css:`img { max-width: 100%; height: auto; }\ntable { border-collapse: collapse; }\nth, td { border: 1px solid #ccc; padding: 8px; }`,js:``},
  {html:`<form>\n  <label for="email">E-mail</label>\n  <input id="email" name="email" type="email" required>\n  <button type="submit">Enviar</button>\n</form>`,css:`form { display: grid; gap: 10px; max-width: 360px; }`,js:``},
  {html:`<p class="destaque">Texto em destaque.</p>\n<button id="btn-comprar">Comprar</button>`,css:`p { color: #333; }\n.destaque { font-weight: bold; color: #0f766e; }\n#btn-comprar { background: #2563eb; color: white; }`,js:``},
  {html:`<div class="card">Conteúdo</div>`,css:`* { box-sizing: border-box; }\n.card { width: 300px; padding: 20px; border: 2px solid #111; margin: 20px auto; }`,js:``},
  {html:`<div class="box">Posicionado</div>`,css:`.box { position: relative; top: 10px; z-index: 2; }`,js:``},
  {html:`<button class="btn">Passe o mouse</button>`,css:`.btn { transition: transform .2s, box-shadow .2s; }\n.btn:hover { transform: translateY(-3px); box-shadow: 0 10px 25px #0002; }`,js:``},
  {html:`<div class="container"><div>A</div><div>B</div><div>C</div></div>`,css:`.container { display: flex; justify-content: center; align-items: center; gap: 20px; flex-wrap: wrap; }`,js:``},
  {html:`<div class="container"><div class="item">Item</div></div>`,css:`.container { display: flex; gap: 10px; }\n.item { flex: 1 1 200px; }`,js:``},
  {html:`<div class="grid"><div>A</div><div>B</div><div>C</div></div>`,css:`.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }`,js:``},
  {html:`<div class="layout"><header>Header</header><aside>Sidebar</aside><main>Main</main><footer>Footer</footer></div>`,css:`.layout { display: grid; grid-template-columns: 250px 1fr; grid-template-areas: "header header" "sidebar main" "footer footer"; gap: 15px; }\nheader { grid-area: header; }\naside { grid-area: sidebar; }\nmain { grid-area: main; }\nfooter { grid-area: footer; }`,js:``},
  {html:`<div class="cards"><article>1</article><article>2</article><article>3</article></div>`,css:`.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }`,js:``},
  {html:`<nav><a href="#">Início</a><a href="#">Artigos</a></nav>`,css:`html { font-size: 16px; }\nnav { display: flex; gap: 1rem; }\na { font-size: 1rem; }\n@media (min-width: 768px) { nav { justify-content: center; } }`,js:``},
  {html:`<img src="https://picsum.photos/900/500" alt="Imagem responsiva">`,css:`img { max-width: 100%; height: auto; display: block; }`,js:``},
  {html:`<header>Portal</header><main><article>Notícia</article><article>Outra notícia</article></main><footer>Rodapé</footer>`,css:`* { box-sizing: border-box; }\nmain { display: grid; grid-template-columns: 1fr; gap: 1rem; }\n@media (min-width: 768px) { main { grid-template-columns: repeat(2, 1fr); } }\n@media (min-width: 1024px) { main { grid-template-columns: repeat(3, 1fr); } }`,js:``}
];

function chapterCodeFor(mi, qi){
  const examples = [
    [
      {html:`<!doctype html>\n<html lang="pt-BR">\n<head><meta charset="UTF-8"><title>Minha página</title></head>\n<body><main><h1>Olá!</h1></main></body>\n</html>`,css:``,js:``},
      {html:`<h1>Meu site</h1>\n<h2>Sobre mim</h2>\n<p>Conteúdo da página.</p>`,css:`h1 { color: #2563eb; }`,js:``},
      {html:`<p>Aprendendo <strong>HTML</strong> todos os dias.</p>\n<a href="https://example.com">Visitar</a>`,css:`a { color: #2563eb; }`,js:``}
    ],
    [
      {html:`<h1>Meu site</h1>\n<h2>Projetos</h2>\n<h3>Projeto 1</h3>`,css:``,js:``},
      {html:`<h1>Lista de estudos</h1>\n<ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>`,css:`li { margin: .35rem 0; }`,js:``},
      {html:`<a href="https://developer.mozilla.org/" target="_blank">Documentação</a>`,css:`a { color:#2563eb; text-decoration:none; }`,js:``}
    ],
    [
      {html:`<img src="https://picsum.photos/500/280" alt="Paisagem de exemplo">`,css:`img { max-width:100%; height:auto; display:block; }`,js:``},
      {html:`<table><tr><th>Item</th><th>Valor</th></tr><tr><td>HTML</td><td>Estrutura</td></tr></table>`,css:`table, th, td { border:1px solid #94a3b8; border-collapse:collapse; padding:8px; }`,js:``},
      {html:`<header>Cabeçalho</header>\n<nav>Navegação</nav>\n<main>Conteúdo</main>\n<footer>Rodapé</footer>`,css:`header,nav,main,footer { padding:10px; }`,js:``}
    ],
    [
      {html:`<form>\n  <label for="email">E-mail</label>\n  <input id="email" name="email" type="email">\n  <button>Enviar</button>\n</form>`,css:`form { display:grid; gap:10px; max-width:360px; }`,js:``},
      {html:`<label for="nome">Nome</label>\n<input id="nome" type="text" required>\n<label for="idade">Idade</label>\n<input id="idade" type="number" min="1" max="120">`,css:`label { display:block; margin-top:8px; }`,js:``},
      {html:`<form><input type="email" required minlength="6"><button>Enviar</button></form>`,css:`input:invalid { border:2px solid #ef4444; }`,js:``}
    ],
    [
      {html:`<h1 class="titulo">Olá CSS</h1>`,css:`.titulo { color:#2563eb; font-size:2rem; }`,js:``},
      {html:`<p class="destaque">Texto</p>\n<p id="especial">Outro texto</p>`,css:`p { color:#475569; }\n.destaque { font-weight:700; }\n#especial { color:#dc2626; }`,js:``},
      {html:`<p>Legibilidade importa.</p>`,css:`p { color:#334155; font-family:Arial,sans-serif; font-size:1rem; line-height:1.6; text-align:left; }`,js:``}
    ],
    [
      {html:`<div class="box">Conteúdo</div>`,css:`.box { width:200px; padding:20px; border:4px solid #2563eb; margin:20px; background:#eaf2ff; }`,js:``},
      {html:`<div class="box">300px declarados</div>`,css:`.box { width:300px; padding:20px; border:5px solid #111; box-sizing:border-box; background:#dff7f3; }`,js:``},
      {html:`<div class="a">A</div><div class="b">B</div>`,css:`* { margin:0; padding:0; box-sizing:border-box; }\n.a,.b { padding:1rem; }`,js:``}
    ],
    [
      {html:`<div class="item">Item</div>`,css:`.item { display:block; width:220px; padding:12px; background:#dbeafe; }`,js:``},
      {html:`<div class="parent"><div class="badge">Novo</div></div>`,css:`.parent { position:relative; width:240px; height:120px; background:#e2e8f0; }\n.badge { position:absolute; top:10px; right:10px; }`,js:``},
      {html:`<div class="back">Fundo</div><div class="front">Frente</div>`,css:`.back,.front { position:absolute; padding:20px; }\n.front { z-index:2; }`,js:``}
    ],
    [
      {html:`<button class="btn">Passe o mouse</button>`,css:`.btn { transition:transform .2s; }\n.btn:hover { transform:translateY(-4px); }`,js:``},
      {html:`<input placeholder="Clique aqui">`,css:`input:focus { outline:3px solid #93c5fd; border-color:#2563eb; }`,js:``},
      {html:`<article class="card">Card</article>`,css:`.card { transition:transform .25s, box-shadow .25s; }\n.card::before { content:"★"; }\n.card:hover { transform:scale(1.03); box-shadow:0 12px 25px #0002; }`,js:``}
    ],
    [
      {html:`<div class="container"><div>A</div><div>B</div><div>C</div></div>`,css:`.container { display:flex; }`,js:``},
      {html:`<div class="container"><div>A</div><div>B</div></div>`,css:`.container { display:flex; flex-direction:row; }\n.container { min-height:120px; }`,js:``},
      {html:`<div class="container"><div>A</div><div>B</div><div>C</div></div>`,css:`.container { display:flex; justify-content:center; align-items:center; gap:20px; flex-wrap:wrap; min-height:160px; }`,js:``}
    ],
    [
      {html:`<div class="container"><div class="item">Item</div></div>`,css:`.container { display:flex; }\n.item { flex-grow:1; }`,js:``},
      {html:`<div class="container"><div class="item">Item</div></div>`,css:`.container { display:flex; }\n.item { flex:1 1 200px; }`,js:``},
      {html:`<div class="container"><div>A</div><div class="especial">B</div></div>`,css:`.container { display:flex; align-items:center; min-height:120px; }\n.especial { align-self:flex-end; }`,js:``}
    ],
    [
      {html:`<div class="grid"><div>A</div><div>B</div><div>C</div></div>`,css:`.grid { display:grid; }`,js:``},
      {html:`<div class="grid"><div>A</div><div>B</div><div>C</div></div>`,css:`.grid { display:grid; grid-template-columns:repeat(3,1fr); grid-template-rows:auto; gap:20px; }`,js:``},
      {html:`<div class="grid"><div>A</div><div>B</div><div>C</div></div>`,css:`.grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }`,js:``}
    ],
    [
      {html:`<div class="layout"><header>Header</header><aside>Sidebar</aside><main>Main</main><footer>Footer</footer></div>`,css:`.layout { display:grid; grid-template-columns:250px 1fr; grid-template-areas:"header header" "sidebar main" "footer footer"; gap:15px; }`,js:``},
      {html:`<div class="layout"><header>Header</header><main>Main</main></div>`,css:`.layout { display:grid; grid-template-areas:"header" "main"; gap:1rem; }\nheader { grid-area:header; }\nmain { grid-area:main; }`,js:``},
      {html:`<div class="layout"><nav>Menu</nav><main>Conteúdo</main></div>`,css:`.layout { display:grid; grid-template-columns:220px 1fr; gap:1rem; }\nnav { display:flex; flex-direction:column; gap:.5rem; }`,js:``}
    ],
    [
      {html:`<div class="cards"><article>1</article><article>2</article><article>3</article></div>`,css:`.cards { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }`,js:``},
      {html:`<div class="cards"><article>A</article><article>B</article><article>C</article></div>`,css:`.cards { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:16px; }`,js:``},
      {html:`<nav><a>Início</a><a>Artigos</a></nav>`,css:`nav { display:flex; gap:1rem; }\nnav a { padding:.5rem 1rem; }`,js:``}
    ],
    [
      {html:`<p class="texto">Tamanho relativo</p>`,css:`html { font-size:16px; }\n.texto { font-size:1.25rem; margin:1rem; }`,js:``},
      {html:`<div class="pai"><div class="filho">Texto</div></div>`,css:`.pai { font-size:20px; }\n.filho { font-size:1.5em; }`,js:``},
      {html:`<main>Conteúdo</main>`,css:`html { font-size:16px; }\nmain { padding:1rem; margin:2rem; }`,js:``}
    ],
    [
      {html:`<main class="grid"><article>A</article><article>B</article></main>`,css:`.grid { display:grid; grid-template-columns:1fr; gap:1rem; }`,js:``},
      {html:`<main class="grid"><article>A</article><article>B</article><article>C</article></main>`,css:`.grid { display:grid; grid-template-columns:1fr; gap:1rem; }\n@media (min-width:768px) { .grid { grid-template-columns:repeat(2,1fr); } }`,js:``},
      {html:`<nav><a>Início</a><a>Artigos</a></nav>`,css:`nav { display:flex; flex-wrap:wrap; gap:.75rem; }\n@media (min-width:768px) { nav { justify-content:center; } }`,js:``}
    ],
    [
      {html:`<img src="https://picsum.photos/900/500" alt="Imagem responsiva">`,css:`img { max-width:100%; height:auto; display:block; }`,js:``},
      {html:`<div class="grid"><article>A</article><article>B</article></div>`,css:`.grid { display:grid; grid-template-columns:1fr; }\n@media (min-width:768px) { .grid { grid-template-columns:repeat(2,1fr); } }`,js:``},
      {html:`<main class="container">Conteúdo</main>`,css:`.container { width:min(100% - 2rem, 1100px); margin-inline:auto; }\n@media (min-width:1024px) { .container { padding:2rem; } }`,js:``}
    ],
    [
      {html:`<header>Portal</header><main><article>Notícia</article></main><footer>Rodapé</footer>`,css:`* { box-sizing:border-box; }\nmain { display:grid; grid-template-columns:1fr; gap:1rem; }`,js:``},
      {html:`<main><article>1</article><article>2</article><article>3</article></main>`,css:`main { display:grid; grid-template-columns:1fr; gap:1rem; }\n@media (min-width:768px) { main { grid-template-columns:repeat(2,1fr); } }\n@media (min-width:1024px) { main { grid-template-columns:repeat(3,1fr); } }`,js:``},
      {html:`<nav><a>Início</a><a>Notícias</a><a>Contato</a></nav>`,css:`nav { display:flex; flex-wrap:wrap; gap:1rem; }\n@media (min-width:1024px) { nav { justify-content:space-between; } }`,js:``}
    ]
  ];
  return examples[mi]?.[qi] || chapterCodeExamples[mi];
}

const chapterQuestions = modules.map((m,mi)=>{
  return [
    [
      `Qual é um objetivo central de “${m.title}”?`,
      [...m.goals],
      0,
      `A resposta correta é: ${m.goals[0]} O quadro ao lado mostra um exemplo prático relacionado ao conteúdo desta parte.`,
      chapterCodeFor(mi,0),
      mi<=3 ? "html" : "css"
    ],
    [
      `${m.lessons[0][0]} — qual afirmação está de acordo com o material?`,
      [m.lessons[0][1], m.lessons[1][1], m.lessons[2][1], "Nenhuma das alternativas"],
      0,
      `A primeira alternativa está correta porque resume exatamente o conceito apresentado em “${m.lessons[0][0]}”. No laboratório, o código foi escolhido para demonstrar esse conceito, e não apenas para repetir um exemplo genérico do capítulo.`,
      chapterCodeFor(mi,1),
      mi<=3 ? "html" : "css"
    ],
    [
      `Qual afirmação melhor explica “${m.lessons[1][0]}”?`,
      [m.lessons[1][1], m.lessons[0][1], m.lessons[2][1], "O conceito não faz parte desta parte."],
      0,
      `A alternativa correta é a primeira. Ela descreve o conceito de “${m.lessons[1][0]}”. O laboratório mostra a forma prática de aplicar essa ideia no código.`,
      chapterCodeFor(mi,2),
      "css"
    ]
  ];
});

const flashcards=[
 ["HTML × CSS × JavaScript","HTML estrutura o conteúdo; CSS cuida da apresentação e do layout; JavaScript cuida da interatividade e da lógica."],
 ["Anatomia de um elemento","Tag de abertura + conteúdo + tag de fechamento; atributos acrescentam informações à abertura."],
 ["Box Model","Content → Padding → Border → Margin."],
 ["border-box","Padding e border ficam dentro do tamanho declarado, tornando o dimensionamento mais previsível."],
 ["position: relative","Mantém o espaço do elemento no fluxo e permite deslocá-lo em relação à posição original."],
 ["position: absolute","Sai do fluxo e se posiciona em relação ao ancestral posicionado mais próximo."],
 ["justify-content","Distribui os flex items no eixo principal."],
 ["align-items","Alinha os flex items no eixo transversal."],
 ["flex-grow","Controla a capacidade de um item crescer quando há espaço disponível."],
 ["Grid × Flexbox","Grid trabalha em duas dimensões; Flexbox trabalha em uma dimensão por vez."],
 ["fr","Representa uma fração do espaço livre no CSS Grid."],
 ["grid-template-areas","Permite definir áreas nomeadas para organizar visualmente um Grid."],
 ["rem × em","rem é relativo ao elemento raiz; em é relativo ao tamanho de fonte do elemento pai direto."],
 ["Mobile-first","Comece com telas pequenas e adicione complexidade usando min-width conforme a largura aumenta."],
 ["max-width: 100%","Impede que imagens e vídeos ultrapassem a largura disponível do container. "]
];

const defaultEditor={html:`<main class="card">\n  <h1>Meu primeiro componente</h1>\n  <p>Estou praticando HTML + CSS.</p>\n  <button id="btn">Interagir</button>\n</main>`,css:`body {\n  font-family: Arial, sans-serif;\n  background: #eef2f7;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.card {\n  background: white;\n  padding: 30px;\n  border-radius: 16px;\n  box-shadow: 0 12px 30px #0002;\n  text-align: center;\n}\nbutton {\n  background: #0f766e;\n  color: white;\n  border: 0;\n  padding: 10px 18px;\n  border-radius: 8px;\n  cursor: pointer;\n}\nbutton:hover { transform: translateY(-2px); }`,js:`document.querySelector("#btn").addEventListener("click", () => {\n  document.querySelector("#btn").textContent = "Você executou JavaScript!";\n});`};

const state=JSON.parse(localStorage.getItem("frontlab-state")||"{}");
state.completed=state.completed||{};
state.notes=state.notes||[];
state.currentLesson=Number.isInteger(state.currentLesson)?state.currentLesson:0;
state.quiz=state.quiz||{correct:0,total:0};
state.quizHistory=state.quizHistory||[];
state.challengeChecks=state.challengeChecks||{};
state.theme=state.theme||"dark";
state.fontScale=Number(state.fontScale)||1;
state.flashIndex=state.flashIndex||0;
state.codes=state.codes||[];
state.activeCode=state.activeCode||null;
state.quizSession=null;

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function save(){localStorage.setItem("frontlab-state",JSON.stringify({...state,quizSession:null}));updateProgress()}
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(window._toast);window._toast=setTimeout(()=>t.classList.remove("show"),2300)}
function completedCount(){return Object.keys(state.completed).filter(k=>state.completed[k]).length}
function updateProgress(){
 const pct=Math.round(completedCount()/modules.length*100);$("#progressPercent").textContent=pct+"%";$("#progressBar").style.width=pct+"%";
 const acc=state.quiz.total?Math.round(state.quiz.correct/state.quiz.total*100):0;$("#dashAccuracy").textContent=acc+"% acerto";
}
function applyTheme(){
 document.documentElement.dataset.theme=state.theme;
 document.documentElement.style.fontSize=(16*state.fontScale)+"px";
 document.body.classList.toggle("light",state.theme==="light");
 $("#themeBtn").textContent=state.theme==="light"?"☀":"◐";
 $("#themeBtn").title=state.theme==="light"?"Mudar para tema escuro":"Mudar para tema claro";
}
function showView(name){
 $$(".view").forEach(v=>v.classList.remove("active"));const view=$("#view-"+name);if(!view)return;view.classList.add("active");
 $$(".nav-item").forEach(n=>n.classList.toggle("active",n.dataset.view===name));
 const label={dashboard:"Dashboard",trilha:"Trilha de estudos",aulas:"Aulas",quiz:"Quiz inteligente",flashcards:"Flashcards",desafios:"Desafios práticos",playground:"Meus projetos",anotacoes:"Anotações"}[name];$("#viewTitle").textContent=label||name;
 if(name==="dashboard")renderDashboard();if(name==="trilha")renderRoadmap();if(name==="aulas")renderLessons();if(name==="quiz")renderQuizHome();if(name==="flashcards")renderFlash();if(name==="desafios")renderChallenges();if(name==="playground"){renderCodeList();loadActiveCode()}if(name==="anotacoes")renderNotes();
 $("#sidebar").classList.remove("open");window.scrollTo({top:0,behavior:"smooth"});
}
$$('[data-view]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.view)));
$$('[data-go]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.go)));

function renderDashboard(){
 const i=Math.min(state.currentLesson,modules.length-1),m=modules[i],done=!!state.completed[i];
 $("#continueCard").innerHTML=`<div class="continue-main"><span class="eyebrow">${done?"REVISÃO":"PRÓXIMO ESTUDO"} • PARTE ${i+1} DE ${modules.length}</span><h3>${m.title}</h3><p>${m.short}</p></div><div class="continue-track"><div class="progress-row"><span>Status</span><strong>${done?"100%":"0%"}</strong></div><div class="progress-bar"><i style="width:${done?100:8}%"></i></div><button class="primary-btn small" style="margin-top:10px;width:100%" onclick="openLesson(${i})">${done?"Revisar":"Estudar"} →</button></div>`;
 const books=[1,2,3,4].map(b=>({b,count:modules.filter(m=>m.book===b).length,done:modules.reduce((a,m,i)=>a+(m.book===b&&state.completed[i]?1:0),0)}));
 $("#bookMap").innerHTML=books.map(x=>`<div class="book-card" onclick="showView('trilha')"><strong>Livro ${x.b}</strong><small>${x.done}/${x.count} partes concluídas</small><div class="mini-progress"><i style="width:${x.done/x.count*100}%"></i></div></div>`).join("");
}
function renderRoadmap(){
 const books={1:"A Estrutura Semântica com HTML5",2:"A Estilização e o Box Model com CSS3",3:"Layouts Modernos: Flexbox e CSS Grid",4:"Web Design Responsivo e Projeto Final"};
 $("#roadmap").innerHTML=Object.entries(books).map(([b,title])=>{const arr=modules.map((m,i)=>({m,i})).filter(x=>x.m.book==b);return `<section class="book-section"><div class="book-header"><div><span class="eyebrow">LIVRO ${b}</span><h2>${title}</h2><p>${arr.filter(x=>state.completed[x.i]).length}/${arr.length} partes concluídas</p></div></div><div class="parts">${arr.map((x,j)=>`<div class="part-card ${state.completed[x.i]?"done":""}" onclick="openLesson(${x.i})"><div class="part-number">${j+1}</div><div><strong>${x.m.title}</strong><small>${x.m.short}</small></div><span class="part-status">${state.completed[x.i]?"✓":"→"}</span></div>`).join("")}</div></section>`}).join("");
}
function openLesson(i){state.currentLesson=i;save();showView("aulas")}
function renderLessons(){
 $("#lessonList").innerHTML=modules.map((m,i)=>`<button class="lesson-nav ${i===state.currentLesson?"active":""}" onclick="openLesson(${i})"><b>LIVRO ${m.book}</b>${i+1}. ${m.title}</button>`).join("");renderLessonContent();
}
function renderLessonContent(){
 const i=state.currentLesson,m=modules[i],done=!!state.completed[i];
 const sections=m.lessons.map((l,j)=>`<section class="lesson-section"><h2>${j+1}. ${l[0]}</h2><p>${l[1]}</p><div class="study-check"><label><input type="checkbox" onchange="saveMicroCheck(${i},${j},this.checked)"> Eu consigo explicar este conceito sem consultar.</label></div></section>`).join("");
 let example='';
 if(i===0)example=`<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html lang="pt-BR"&gt;\n&lt;head&gt;\n  &lt;meta charset="UTF-8"&gt;\n  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;\n  &lt;title&gt;Minha página&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;h1&gt;Olá, mundo!&lt;/h1&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre>`;
 if(i===4)example=`<pre><code>p { color: #333; }\n.destaque { font-weight: bold; }\n#btn-comprar { background: green; }</code></pre>`;
 if(i===5)example=`<pre><code>* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.card {\n  width: 300px;\n  padding: 20px;\n  border: 2px solid #000;\n  margin: 20px auto;\n}</code></pre>`;
 if(i===7)example=`<pre><code>.card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 30px rgba(0,0,0,.18);\n  transition: transform .3s ease, box-shadow .3s ease;\n}</code></pre>`;
 if(i===8)example=`<pre><code>.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}</code></pre>`;
 if(i===10)example=`<pre><code>.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}</code></pre>`;
 if(i===11)example=`<pre><code>.layout {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  grid-template-areas:\n    "header header"\n    "sidebar main"\n    "footer footer";\n  gap: 15px;\n}</code></pre>`;
 if(i===13)example=`<pre><code>/* Mobile */\n.grid-artigos { grid-template-columns: 1fr; }\n\n@media (min-width: 768px) {\n  .grid-artigos { grid-template-columns: repeat(2, 1fr); }\n}\n\n@media (min-width: 1024px) {\n  .grid-artigos { grid-template-columns: repeat(3, 1fr); }\n}</code></pre>`;
 if(i===14)example=`<pre><code>img, video {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}</code></pre>`;
 const next=i<modules.length-1?`<button class="primary-btn" onclick="completeLesson(${i})">${done?"Continuar para a próxima parte":"Concluir e continuar"} →</button>`:`<button class="primary-btn" onclick="completeLesson(${i})">${done?"Revisar conclusão":"Concluir trilha"}</button>`;
 $("#lessonContent").innerHTML=`<span class="eyebrow">LIVRO ${m.book} • PARTE ${((i)%4)+1}</span><h1>${m.title}</h1><p class="lesson-lead">${m.short}</p><div class="goal-grid">${m.goals.map((g,n)=>`<div><b>${n+1}</b><span>${g}</span></div>`).join("")}</div>${sections}${example}<div class="concept"><strong>Agora é a sua vez</strong><p>Feche mentalmente a explicação e tente escrever um exemplo sozinho. Só depois compare com o exemplo acima. Se você conseguir explicar o motivo de cada linha, o conceito está começando a consolidar.</p></div><div class="lesson-actions"><button class="secondary-btn" onclick="startChapterQuiz(${i})">🧠 Quiz desta parte</button>${next}</div>`;
}
const micro={};
function saveMicroCheck(i,j,v){micro[i]=micro[i]||{};micro[i][j]=v}
function completeLesson(i){state.completed[i]=true;state.currentLesson=Math.min(i+1,modules.length-1);save();toast("Parte concluída. Excelente — continue para a próxima.");renderLessonContent();renderDashboard()}

function renderQuizHome(){
 if(state.quizSession){renderQuizQuestion();return}
 const acc=state.quiz.total?Math.round(state.quiz.correct/state.quiz.total*100):0;
 const last=state.quizHistory[0];
 const history=state.quizHistory.slice(0,6).map((h,i)=>`<div class="history-row"><span>${escapeHtml(h.title)}</span><b>${h.accuracy}%</b><small>${h.correct}/${h.total}</small></div>`).join("") || `<p class="muted-empty">Você ainda não fez nenhum quiz.</p>`;
 $("#quizShell").innerHTML=`<div class="quiz-home"><div class="quiz-home-icon">🧠</div><span class="eyebrow">RECUPERAÇÃO ATIVA</span><h2>Escolha como quer estudar</h2><p>Os quizzes são específicos por conteúdo, podem ser repetidos e mostram a lógica da resposta com código executável.</p><div class="quiz-choice-grid"><button class="quiz-choice" onclick="startGlobalQuiz()"><strong>Quiz geral</strong><span>Questões variadas de toda a trilha.</span></button><button class="quiz-choice" onclick="showView('trilha')"><strong>Quiz por parte</strong><span>Abra uma aula e escolha “Quiz desta parte”.</span></button></div><div class="metrics-strip"><div><small>Desempenho acumulado</small><strong>${acc}%</strong></div><div><small>Questões respondidas</small><strong>${state.quiz.total}</strong></div><div><small>Acertos</small><strong>${state.quiz.correct}</strong></div></div><div class="quiz-history"><div class="panel-head"><div><span class="eyebrow">HISTÓRICO</span><h3>Suas últimas sessões</h3></div><button class="ghost-btn small" onclick="resetQuizData()">↺ Resetar quizzes</button></div>${history}</div></div>`;
}
function makeSession(pool,type,title,chapterIndex=null){
 const shuffled=[...pool].sort(()=>Math.random()-.5);state.quizSession={pool:shuffled.slice(0,Math.min(10,shuffled.length)),pos:0,correct:0,answered:0,type,title,chapterIndex};renderQuizQuestion();
}
function startGlobalQuiz(){makeSession(globalQuestions,"global","Quiz geral")}
function startChapterQuiz(i){showView("quiz");makeSession(chapterQuestions[i],"chapter",`Quiz da parte ${i+1}: ${modules[i].title}`,i)}
function resetActiveQuiz(){
 const s=state.quizSession;if(!s)return;
 if(confirm("Reiniciar este quiz? O progresso desta sessão será perdido, mas seu histórico anterior será preservado.")){makeSession(s.pool,s.type,s.title,s.chapterIndex);toast("Quiz reiniciado. As questões foram embaralhadas.")}
}
function resetQuizData(){
 if(confirm("Apagar o desempenho acumulado e o histórico dos quizzes? O restante do seu progresso será preservado.")){state.quiz={correct:0,total:0};state.quizHistory=[];delete state.quizSession;save();renderQuizHome();toast("Dados dos quizzes resetados.")}
}
function renderQuizQuestion(){
 const s=state.quizSession;if(!s)return renderQuizHome();
 if(s.pos>=s.pool.length)return renderQuizResult();
 const q=s.pool[s.pos], code=questionCode(q,s.pos);
 $("#quizShell").innerHTML=`<div class="quiz-top"><div><span class="eyebrow">${s.type==="chapter"?"QUIZ DA PARTE":"QUIZ GERAL"}</span><h2 class="quiz-title">${escapeHtml(s.title)}</h2></div><div class="quiz-top-actions"><strong>${s.pos+1}/${s.pool.length}</strong><button class="ghost-btn small" onclick="resetActiveQuiz()">↺ Reiniciar</button></div></div><div class="quiz-progress"><i style="width:${s.pos/s.pool.length*100}%"></i></div><div class="quiz-question-grid single"><section class="quiz-question-card"><span class="eyebrow">QUESTÃO ${s.pos+1}</span><div class="question">${escapeHtml(q[0])}</div><div class="options">${q[1].map((o,i)=>`<button class="option" onclick="answerActiveQuiz(${i})">${String.fromCharCode(65+i)}. ${escapeHtml(o)}</button>`).join("")}</div><div class="quiz-footer"><span>Acertos nesta sessão: ${s.correct}</span><button class="ghost-btn" onclick="cancelQuiz()">Sair do quiz</button></div><div id="answerExplanation" class="answer-explanation hidden"></div></section></div>`;
}
function answerActiveQuiz(choice){
 const s=state.quizSession;
 if(!s||s._answered!==undefined)return;
 const q=s.pool[s.pos];
 s._answered=choice;
 s.answered++;
 const correct=choice===q[2];
 if(correct)s.correct++;
 state.quiz.total++;
 if(correct)state.quiz.correct++;
 save();

 $$(".option").forEach((b,i)=>{
   b.disabled=true;
   if(i===q[2])b.classList.add("correct");
   if(i===choice&&choice!==q[2])b.classList.add("wrong");
 });

 const explanation=$("#answerExplanation");
 if(explanation){
   explanation.classList.remove("hidden");
   explanation.className=`answer-explanation ${correct?"is-correct":"is-wrong"}`;
   explanation.innerHTML=`
     <div class="explanation-head">
       <span class="eyebrow">${correct?"RESPOSTA CORRETA":"REVISÃO DA RESPOSTA"}</span>
       <span class="explanation-icon">${correct?"✓":"!"}</span>
     </div>
     <h3>${correct?"Muito bem!":"Vamos entender a resposta certa."}</h3>
     <p>${escapeHtml(q[3])}</p>
     <div class="correct-answer-box">
       <strong>Resposta correta</strong>
       <span>${String.fromCharCode(65+q[2])}. ${escapeHtml(q[1][q[2]])}</span>
     </div>
     <div class="quiz-footer explanation-footer">
       <span>${correct?"Conceito consolidado.":"Leia a explicação antes de seguir. O objetivo é entender o motivo, não apenas memorizar a alternativa."}</span>
       <button class="primary-btn" onclick="nextActiveQuiz()">${s.pos===s.pool.length-1?"Ver desempenho":"Próxima questão"} →</button>
     </div>`;
 }
}
function nextActiveQuiz(){
 const s=state.quizSession;
 if(!s)return;
 s.pos++;
 delete s._answered;
 renderQuizQuestion();
}
function cancelQuiz(){delete state.quizSession;save();renderQuizHome()}

function renderQuizResult(){
 const s=state.quizSession;const acc=Math.round(s.correct/s.answered*100)||0;state.quizHistory.unshift({date:Date.now(),type:s.type,title:s.title,chapterIndex:s.chapterIndex,correct:s.correct,total:s.answered,accuracy:acc});state.quizHistory=state.quizHistory.slice(0,20);save();
 const label=acc>=90?"Excelente domínio":acc>=70?"Bom desempenho":"Hora de revisar e tentar novamente";
 $("#quizShell").innerHTML=`<div class="score-card"><span class="eyebrow">DESEMPENHO DA SESSÃO</span><strong>${acc}%</strong><h2>${escapeHtml(s.title)}</h2><p>${label}. Você acertou <b>${s.correct}</b> de <b>${s.answered}</b> questões.</p><div class="metric-cards"><div><small>Acertos</small><b>${s.correct}</b></div><div><small>Erros</small><b>${s.answered-s.correct}</b></div><div><small>Precisão</small><b>${acc}%</b></div></div><div class="result-actions"><button class="primary-btn" onclick="newQuizSameType()">↻ Responder novo quiz</button><button class="secondary-btn" onclick="newQuizSameType()">↺ Refazer esta sessão</button><button class="ghost-btn" onclick="renderQuizHome()">Escolher outro modo</button></div></div>`;
 delete state.quizSession;
}
function newQuizSameType(){const last=state.quizHistory[0];if(last?.type==="chapter"&&Number.isInteger(last.chapterIndex))startChapterQuiz(last.chapterIndex);else startGlobalQuiz()}
function cancelQuiz(){delete state.quizSession;save();renderQuizHome()}

function renderFlash(){const i=state.flashIndex,[q,a]=flashcards[i];$("#flashWrap").innerHTML=`<div class="flashcard" id="flashcard" onclick="this.classList.toggle('flipped')"><div class="flash-inner"><div class="flash-face"><small>PERGUNTA ${i+1}/${flashcards.length}</small><h2>${q}</h2><p>Clique para revelar a resposta</p></div><div class="flash-face back"><small>RESPOSTA</small><h2>${a}</h2><p>Clique para voltar</p></div></div></div><div class="flash-controls"><button class="secondary-btn" onclick="prevFlash()">← Anterior</button><button class="primary-btn" onclick="nextFlash()">Próximo →</button></div>`}
function nextFlash(){state.flashIndex=(state.flashIndex+1)%flashcards.length;save();renderFlash()}function prevFlash(){state.flashIndex=(state.flashIndex-1+flashcards.length)%flashcards.length;save();renderFlash()}
function renderChallenges(){
 const grid=$("#challengeGrid");
 if(!grid)return;
 grid.innerHTML=challenges.map(c=>{
   const checks=state.challengeChecks[c.id]||{};
   const done=c.items.filter((_,i)=>checks[i]).length;
   const active=state.activeChallenge===c.id;
   return `<article class="panel challenge ${active?"selected":""}">
     <span class="badge">${c.level}</span><span class="score">${done}/${c.items.length}</span>
     <h2>Desafio ${c.id}: ${c.title}</h2>
     <p><strong>Foco:</strong> ${c.focus}</p><p>${c.goal}</p>
     <ul>${c.items.map((it,i)=>`<li><label class="checkline"><input type="checkbox" ${checks[i]?"checked":""} onchange="toggleChallenge(${c.id},${i},this.checked)"> ${it}</label></li>`).join("")}</ul>
     <button class="primary-btn" onclick="openChallenge(${c.id})">🧪 Abrir corretor</button>
   </article>`;
 }).join("");
 renderChallengeCorrector();
}
function toggleChallenge(id,i,v){
 state.challengeChecks[id]=state.challengeChecks[id]||{};
 state.challengeChecks[id][i]=v;
 save();
 renderChallenges();
}
function openChallenge(id){
 state.activeChallenge=id;
 save();
 renderChallenges();
 document.querySelector("#challengeCorrector")?.scrollIntoView({behavior:"smooth",block:"start"});
 toast(`Corretor do Desafio ${id} aberto.`);
}
function closeChallengeCorrector(){
 state.activeChallenge=null;
 save();
 renderChallenges();
}
function renderChallengeCorrector(){
 const panel=$("#challengeCorrector");
 if(!panel)return;
 const id=state.activeChallenge;
 if(!id){panel.classList.add("hidden");return}
 const c=challenges.find(x=>x.id===id);
 if(!c){panel.classList.add("hidden");return}
 panel.classList.remove("hidden");
 $("#correctorTitle").textContent=`Desafio ${c.id}: ${c.title}`;
 $("#correctorGoal").textContent=c.goal;
 const checks=state.challengeChecks[c.id]||{};
 $("#correctorRequirements").innerHTML=c.items.map((item,i)=>`<div class="requirement-row ${checks[i]?"manual-done":""}"><span>${checks[i]?"✓":"○"}</span><p>${item}</p><button class="ghost-btn tiny" onclick="toggleChallenge(${id},${i},${!checks[i]})">${checks[i]?"Desmarcar":"Marcar"}</button></div>`).join("");
 const saved=state.challengeDrafts?.[id]||{};
 $("#challenge-editor-html").value=saved.html||"";
 $("#challenge-editor-css").value=saved.css||"";
 $("#challenge-editor-js").value=saved.js||"";
 switchChallengeEditor("html");
 runChallengeCode();
 $("#challengeFeedback").innerHTML="";
}
function challengeDraft(){
 state.challengeDrafts=state.challengeDrafts||{};
 const id=state.activeChallenge;if(!id)return;
 state.challengeDrafts[id]={
   html:$("#challenge-editor-html").value,
   css:$("#challenge-editor-css").value,
   js:$("#challenge-editor-js").value
 };
 save();
}
function switchChallengeEditor(type){
 $$("[data-challenge-editor]").forEach(b=>b.classList.toggle("active",b.dataset.challengeEditor===type));
 ["html","css","js"].forEach(k=>$("#challenge-editor-"+k)?.classList.toggle("hidden",k!==type));
}
function runChallengeCode(){
 const html=$("#challenge-editor-html")?.value||"",css=$("#challenge-editor-css")?.value||"",jsCode=$("#challenge-editor-js")?.value||"";
 const frame=$("#challengePreview");if(!frame)return;
 frame.srcdoc=`<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;min-height:100%;font-family:Arial,sans-serif}*{box-sizing:border-box}${css}</style></head><body>${html}<script>${jsCode.replace(/<\//g,"<\\/")}<\/script></body></html>`;
 challengeDraft();
}
function clearChallengeEditor(){
 if(!state.activeChallenge)return;
 if(confirm("Limpar o código deste desafio?")){
   state.challengeDrafts=state.challengeDrafts||{};
   state.challengeDrafts[state.activeChallenge]={html:"",css:"",js:""};
   save();
   renderChallengeCorrector();
   toast("Editor limpo.");
 }
}
function gradeChallenge(){
 const id=state.activeChallenge;
 const c=challenges.find(x=>x.id===id);
 if(!c)return;
 const html=$("#challenge-editor-html").value;
 const css=$("#challenge-editor-css").value;
 const all=(html+"\\n"+css+"\\n"+($("#challenge-editor-js").value||"")).toLowerCase();
 const checks=challengeRequirementChecks(id,html,css,all);
 const passed=checks.filter(Boolean).length;
 const pct=Math.round(passed/checks.length*100);
 state.challengeGrades=state.challengeGrades||{};
 state.challengeGrades[id]={passed,total:checks.length,pct,date:Date.now()};
 save();
 $("#challengeFeedback").innerHTML=`<div class="grade-card ${pct===100?"grade-perfect":pct>=60?"grade-good":"grade-review"}">
   <div><span class="eyebrow">CORREÇÃO AUTOMÁTICA</span><strong>${passed}/${checks.length} requisitos detectados</strong><b>${pct}%</b></div>
   <p>${pct===100?"Excelente! O corretor encontrou todos os requisitos principais. Agora revise seu código e tente deixá-lo mais limpo e semântico.":pct>=60?"Boa evolução. Você já cumpriu parte importante do desafio. Corrija os itens abaixo e tente novamente.":"Ainda há pontos fundamentais faltando. Use as pistas do corretor e faça uma nova tentativa."}</p>
   <ul>${c.items.map((item,i)=>`<li class="${checks[i]?"pass":"fail"}"><span>${checks[i]?"✓":"✗"}</span>${item}</li>`).join("")}</ul>
 </div>`;
}
function challengeRequirementChecks(id,html,css,all){
 const H=html.toLowerCase(),C=css.toLowerCase();
 if(id===1)return [
   /<!doctype html/i.test(html)||/<html\b/i.test(html),
   /<title>\s*currículo|<title>\s*curriculo/i.test(html),
   /<(header|main|section|article)\b/i.test(html),
   /<ul\b[\s\S]*<li\b/i.test(html),
   /<a\b[^>]*target\s*=\s*["']?_blank|target\s*=\s*["']?_blank[\s\S]*<a\b/i.test(html)&&/mailto:/i.test(html)
 ];
 if(id===2)return [
   (H.match(/class\s*=\s*["'][^"']*(card|produto)/gi)||[]).length>=3 || (H.match(/<article\b/g)||[]).length>=3,
   /<img\b/i.test(H)&&/<h3\b/i.test(H)&&/<button\b/i.test(H),
   /box-sizing\s*:/i.test(C)&&/border-radius\s*:/i.test(C)&&/padding\s*:/i.test(C)&&/box-shadow\s*:/i.test(C),
   /display\s*:\s*flex/i.test(C)&&/gap\s*:\s*20px/i.test(C),
   /transition\s*:/i.test(C)&&/:hover\b/i.test(C)&&/translateY\s*\(\s*-8px\s*\)/i.test(C)
 ];
 if(id===3)return [
   /<(header|aside|main|footer)\b/i.test(H),
   /display\s*:\s*grid/i.test(C),
   /grid-template-areas\s*:/i.test(C),
   /250px\s+1fr|250px.*1fr|grid-template-columns\s*:[^;]*250px[^;]*1fr/i.test(C),
   /gap\s*:\s*15px/i.test(C)&&/grid-template-areas/i.test(C)
 ];
 return [
   /grid-template-columns\s*:\s*1fr/i.test(C),
   /@media\s*\(\s*min-width\s*:\s*768px/i.test(C)&&/grid-template-columns\s*:\s*repeat\s*\(\s*2\s*,/i.test(C),
   /@media\s*\(\s*min-width\s*:\s*1024px/i.test(C)&&/grid-template-columns\s*:\s*repeat\s*\(\s*3\s*,/i.test(C),
   /\brem\b/i.test(C),
   /max-width\s*:\s*100%/i.test(C)&&/height\s*:\s*auto/i.test(C)
 ];
}

const codeCatalog={
 html:[
  ["estrutura HTML5","HTML5",`<!doctype html>\n<html lang="pt-BR">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Minha página</title>\n</head>\n<body>\n  <main><h1>Olá!</h1></main>\n</body>\n</html>`],
  ["imagem","img",`<img src="https://picsum.photos/500/300" alt="Descrição da imagem">`],
  ["link","a",`<a href="https://example.com" target="_blank">Visitar</a>`],
  ["formulario","form",`<form>\n  <label for="nome">Nome</label>\n  <input id="nome" name="nome" type="text" required>\n  <button type="submit">Enviar</button>\n</form>`],
  ["semantica","semântica",`<header>...</header>\n<nav>...</nav>\n<main>...</main>\n<aside>...</aside>\n<footer>...</footer>`]
 ],
 css:[
  ["cor","color",`color: #2563eb;`], ["fundo","background",`background: #eef3f8;`], ["display","display",`display: flex;`], ["flex","flex",`display: flex;\njustify-content: center;\nalign-items: center;\ngap: 1rem;`], ["grid","grid",`display: grid;\ngrid-template-columns: repeat(3, 1fr);\ngap: 1rem;`], ["espacamento","gap",`gap: 1rem;`], ["padding","padding",`padding: 1rem;`], ["margin","margin",`margin: 1rem;`], ["borda","border",`border: 1px solid #cbd5e1;`], ["sombra","box-shadow",`box-shadow: 0 10px 30px rgba(0,0,0,.12);`], ["arredondamento","border-radius",`border-radius: 12px;`], ["tamanho fonte","font-size",`font-size: 1rem;`], ["posicao","position",`position: relative;`], ["responsivo","media query",`@media (min-width: 768px) {\n  .container { grid-template-columns: repeat(2, 1fr); }\n}`], ["imagem responsiva","max-width",`img, video { max-width: 100%; height: auto; display: block; }`]
 ],
 js:[
  ["seletor","querySelector",`const el = document.querySelector(".card");`], ["evento","addEventListener",`document.querySelector("button").addEventListener("click", () => {\n  console.log("Clicou!");\n});`], ["texto","textContent",`document.querySelector("h1").textContent = "Novo título";`], ["classe","classList",`document.querySelector(".card").classList.toggle("ativo");`], ["console","console.log",`console.log("Olá, JavaScript!");`]
 ]
};
const colorNames=["#000000","#ffffff","#ef4444","#f97316","#eab308","#22c55e","#06b6d4","#3b82f6","#6366f1","#8b5cf6","#ec4899","#0f766e"];
const codeReference=[
 {cat:"Cores",items:[
  ["Cor de texto","color: #2563eb;","color: #2563eb;","Escolha a cor do texto. Hexadecimal usa #RRGGBB."],
  ["Fundo","background-color: #eef3f8;","background-color: #eef3f8;","Define a cor de fundo."],
  ["Cor em hexadecimal","#2563eb","color: #2563eb;","Formato #RRGGBB. Exemplos: #000000 preto, #ffffff branco."],
  ["Transparência","rgba(37, 99, 235, .35)","background: rgba(37, 99, 235, .35);","RGBA permite controlar o canal alpha de 0 a 1."]
 ]},
 {cat:"Fontes",items:[
  ["Tamanho","font-size: 1rem;","font-size: 1rem;","Use rem para manter o tamanho relativo à raiz."],
  ["Peso","font-weight: 700;","font-weight: 700;","400 é regular; 600/700 deixam o texto mais forte."],
  ["Itálico","font-style: italic;","font-style: italic;","Aplica estilo itálico."],
  ["Sublinhado","text-decoration: underline;","text-decoration: underline;","Adiciona sublinhado ao texto."],
  ["Altura da linha","line-height: 1.6;","line-height: 1.6;","Controla o espaço vertical entre linhas."]
 ]},
 {cat:"Espaçamento",items:[
  ["Padding","padding: 1rem;","padding: 1rem;","Espaço interno entre conteúdo e borda."],
  ["Margin","margin: 1rem;","margin: 1rem;","Espaço externo ao redor do elemento."],
  ["Gap","gap: 1rem;","gap: 1rem;","Espaço entre itens de Flexbox ou Grid."]
 ]},
 {cat:"Efeitos",items:[
  ["Sombra","box-shadow: 0 10px 30px rgba(0,0,0,.12);","box-shadow: 0 10px 30px rgba(0,0,0,.12);","Cria profundidade visual."],
  ["Arredondamento","border-radius: 12px;","border-radius: 12px;","Arredonda os cantos."],
  ["Transição","transition: .2s ease;","transition: .2s ease;","Suaviza mudanças de propriedades."],
  ["Hover","transform: translateY(-4px);","transform: translateY(-4px);","Geralmente usado dentro de :hover para movimento."]
 ]},
 {cat:"Layout",items:[
  ["Flexbox","display: flex;","display: flex;","Ativa layout Flexbox."],
  ["Centralizar Flex","justify-content + align-items","display:flex; justify-content:center; align-items:center;","Centraliza nos dois eixos quando o contexto permite."],
  ["Grid","display: grid;","display: grid;","Ativa CSS Grid."],
  ["Colunas Grid","repeat(3, 1fr)","grid-template-columns: repeat(3, 1fr);","Cria três colunas proporcionais."]
 ]},
 {cat:"Responsividade",items:[
  ["Media Query","@media (min-width: 768px)","@media (min-width: 768px) { ... }","Permite adaptar o layout conforme a largura da tela."],
  ["Imagem responsiva","max-width: 100%","img { max-width: 100%; height: auto; }","Evita que a imagem ultrapasse o container."],
  ["Unidade rem","1rem","font-size: 1rem;","Relacionada ao tamanho da fonte do elemento raiz."]
 ]},
 {cat:"HTML",items:[
  ["Título","<h1>...</h1>","<h1>Título principal</h1>","Use para o título principal da página."],
  ["Link","<a href=\"...\">","<a href=\"https://exemplo.com\">Visitar</a>","Cria hiperlinks."],
  ["Imagem","<img>","<img src=\"imagem.jpg\" alt=\"Descrição\">","Inclua texto alternativo em imagens."]
 ]},
 {cat:"JavaScript",items:[
  ["Selecionar elemento","querySelector","const el = document.querySelector('.card');","Seleciona o primeiro elemento que corresponde ao seletor."],
  ["Clique","addEventListener","button.addEventListener('click', () => {});","Registra uma função para responder a eventos."],
  ["Alterar texto","textContent","el.textContent = 'Novo texto';","Troca o conteúdo textual de um elemento."]
 ]}
];
let referenceCategory="Todos";
function renderCodeReference(){
 const grid=$("#referenceGrid"),cats=$("#referenceCategories");
 if(!grid||!cats)return;
 const allItems=codeReference.flatMap(g=>g.items.map(x=>({...x,cat:g.cat})));
 const query=($("#referenceSearch")?.value||"").toLowerCase().trim();
 const catsList=["Todos",...codeReference.map(g=>g.cat)];
 cats.innerHTML=catsList.map(cat=>`<button class="reference-cat ${referenceCategory===cat?"active":""}" onclick="setReferenceCategory(${JSON.stringify(cat)})">${cat}</button>`).join("");
 const items=allItems.filter(x=>(referenceCategory==="Todos"||x.cat===referenceCategory)&&(!query||(x[0]+" "+x[1]+" "+x[3]).toLowerCase().includes(query)));
 grid.innerHTML=items.length?items.map((x,i)=>`<article class="reference-card">
   <span class="reference-tag">${escapeHtml(x.cat)}</span><h3>${escapeHtml(x[0])}</h3>
   <code>${escapeHtml(x[1])}</code><p>${escapeHtml(x[3])}</p>
   <button class="ghost-btn tiny" onclick="insertReference(${JSON.stringify(x[2])})">Inserir no editor</button>
 </article>`).join(""):`<p class="muted-empty">Nenhuma informação encontrada.</p>`;
}
function setReferenceCategory(cat){referenceCategory=cat;renderCodeReference()}
function insertReference(snippet){
 const c=activeCode();if(!c)return;
 const type=snippet.trim().startsWith("<")?"html":(/^[a-z-]+\s*:/.test(snippet.trim())||snippet.includes("{"))?"css":"js";
 const area=$("#editor-"+type);
 if(!area)return;
 const pos=area.selectionStart??area.value.length;
 area.setRangeText((area.value&&pos>0?"\n":"")+snippet,pos,pos,"end");
 area.focus();
 saveCurrentCode();
 runCode();
 toast(`Trecho inserido no editor ${type.toUpperCase()}.`);
}
function initEditor(){
 if(state.codes.length===0){state.codes=[{id:Date.now(),name:"Meu primeiro código",html:defaultEditor.html,css:defaultEditor.css,js:defaultEditor.js,updated:Date.now()}];state.activeCode=state.codes[0].id;save();}
 renderCodeList();loadActiveCode();bindEditorTools();
}
function activeCode(){return state.codes.find(c=>c.id===state.activeCode)||state.codes[0]}
function loadActiveCode(){const c=activeCode();if(!c)return;["html","css","js"].forEach(k=>{$("#editor-"+k).value=c[k]||""});runCode()}
function renderCodeList(){
 const list=$("#codeList");if(!list)return;
 list.innerHTML=state.codes.map(c=>`<div class="code-item ${c.id===state.activeCode?'active':''}">
   <button class="code-open" onclick="openCode(${c.id})" title="Abrir código">
     <strong>${escapeHtml(c.name)}</strong>
     <small>${new Date(c.updated).toLocaleDateString('pt-BR')}</small>
   </button>
   <button class="delete-code" onclick="deleteCode(${c.id},event)" title="Remover código" aria-label="Remover ${escapeHtml(c.name)}">×</button>
 </div>`).join('');
}
function deleteCode(id,event){
 if(event) event.stopPropagation();
 const code=state.codes.find(c=>c.id===id);
 if(!code)return;
 if(!confirm(`Remover “${code.name}”? Esta ação não pode ser desfeita.`))return;
 state.codes=state.codes.filter(c=>c.id!==id);
 if(!state.codes.length){
   const fresh={id:Date.now(),name:"Meu primeiro código",html:defaultEditor.html,css:defaultEditor.css,js:defaultEditor.js,updated:Date.now()};
   state.codes=[fresh];state.activeCode=fresh.id;
 }else if(state.activeCode===id){
   state.activeCode=state.codes[0].id;
 }
 save();renderCodeList();loadActiveCode();toast("Código removido.");
}
function openCode(id){saveCurrentCode();state.activeCode=id;loadActiveCode();renderCodeList();toast("Código aberto.")}
function saveCurrentCode(){const c=activeCode();if(!c)return;["html","css","js"].forEach(k=>c[k]=$("#editor-"+k).value);c.updated=Date.now();save();renderCodeList();const a=$("#autosaveState");if(a)a.textContent="Salvo automaticamente"}
function createCode(){saveCurrentCode();const id=Date.now();state.codes.unshift({id,name:"Novo código",html:"",css:"",js:"",updated:Date.now()});state.activeCode=id;save();renderCodeList();loadActiveCode();toast("Novo código criado.")}
function saveCodeAs(){const c=activeCode();if(!c)return;const name=prompt("Nome deste código:",c.name)||c.name;c.name=name;saveCurrentCode();renderCodeList();toast("Código salvo como "+name+".")}
function runCode(){
 const html=$("#editor-html").value,css=$("#editor-css").value,js=$("#editor-js").value;const frame=$("#previewFrame");if(!frame)return;frame.srcdoc=`<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;min-height:100%;font-family:Arial,sans-serif}${css}</style></head><body>${html}<script>${js.replace(/<\//g,"<\\/")}<\/script></body></html>`;const a=$("#autosaveState");if(a)a.textContent="Prévia atualizada";saveCurrentCode()}
function resetCode(){if(confirm("Restaurar o código atual para o exemplo inicial?")){const c=activeCode();c.html=defaultEditor.html;c.css=defaultEditor.css;c.js=defaultEditor.js;loadActiveCode();saveCurrentCode();toast("Exemplo restaurado.")}}
function bindEditorTools(){
 ["html","css","js"].forEach(k=>{const el=$("#editor-"+k);el.addEventListener('input',()=>{saveCurrentCode();showSuggestions(k);clearTimeout(el._liveTimer);el._liveTimer=setTimeout(runCode,180)});el.addEventListener('keydown',e=>handleEditorKey(e,k));el.addEventListener('click',()=>showSuggestions(k));el.addEventListener('blur',()=>setTimeout(()=>$("#suggestions-"+k)?.classList.add('hidden'),160));});
 $("#saveCode")?.addEventListener('click',saveCodeAs);$("#newCode")?.addEventListener('click',createCode);$("#runCode")?.addEventListener('click',runCode);$("#resetCode")?.addEventListener('click',resetCode);
 $$('[data-editor]').forEach(b=>b.addEventListener('click',()=>{$$(".tab-btn").forEach(x=>x.classList.remove("active"));b.classList.add("active");["html","css","js"].forEach(k=>$("#editor-"+k).parentElement.classList.toggle("hidden",k!==b.dataset.editor));}));
}
function currentToken(el){const before=el.value.slice(0,el.selectionStart);const m=before.match(/([\\w-]+)$/);return m?m[1]:""}
function showSuggestions(type){const el=$("#editor-"+type),box=$("#suggestions-"+type);if(!el||!box)return;const token=currentToken(el).toLowerCase();if(!token){box.classList.add('hidden');return}let pool=codeCatalog[type].filter(x=>(x[0]+" "+x[1]).toLowerCase().includes(token));if(type==='css'&&/cor|color|#/.test(token))pool=[['escolher cor','color',colorNames.join(', ')],...pool];pool=pool.slice(0,8);if(!pool.length){box.classList.add('hidden');return}box.innerHTML=pool.map((x,i)=>`<button class="suggestion-item" data-suggestion="${i}"><span>${escapeHtml(x[0])}</span><small>${escapeHtml(x[1])}</small></button>`).join('');box.classList.remove('hidden');box.querySelectorAll('.suggestion-item').forEach((b,i)=>b.addEventListener('mousedown',e=>{e.preventDefault();applySuggestion(type,pool[i],token)}));}
function applySuggestion(type,item,token){const el=$("#editor-"+type),box=$("#suggestions-"+type);const [name,label,snippet]=item;const start=el.selectionStart-token.length;const end=el.selectionStart;if(type==='css'&&name==='escolher cor'){openColorPicker(el,start,end);return}el.setRangeText(snippet,start,end,'end');el.focus();saveCurrentCode();runCode();box.classList.add('hidden')}
function openColorPicker(el,start,end){const old=$("#colorPickerPop");if(old)old.remove();const pop=document.createElement('div');pop.id='colorPickerPop';pop.className='color-popover';pop.innerHTML=`<strong>Escolha uma cor</strong><input id="inlineColor" type="color" value="#2563eb"><input id="inlineHex" value="#2563eb" maxlength="7"><button class="primary-btn small" id="applyColor">Aplicar color</button>`;document.body.appendChild(pop);const r=el.getBoundingClientRect();pop.style.left=Math.min(window.innerWidth-280,Math.max(10,r.left+20))+"px";pop.style.top=Math.min(window.innerHeight-180,r.bottom-10)+"px";const c=$("#inlineColor"),h=$("#inlineHex");c.addEventListener('input',()=>h.value=c.value);h.addEventListener('input',()=>{if(/^#[0-9a-f]{6}$/i.test(h.value))c.value=h.value});$("#applyColor").addEventListener('click',()=>{el.setRangeText(`color: ${h.value};`,start,end,'end');pop.remove();el.focus();saveCurrentCode();runCode()});}
function handleEditorKey(e,type){
 const el=$("#editor-"+type),box=$("#suggestions-"+type);if(!box||box.classList.contains('hidden'))return;
 const items=[...box.querySelectorAll('.suggestion-item')];let idx=items.findIndex(x=>x.classList.contains('keyboard-active'));if(e.key==='ArrowDown'){e.preventDefault();idx=(idx+1)%items.length;items.forEach(x=>x.classList.remove('keyboard-active'));items[idx].classList.add('keyboard-active');items[idx].scrollIntoView({block:'nearest'});}else if(e.key==='ArrowUp'){e.preventDefault();idx=(idx<=0?items.length:idx)-1;items.forEach(x=>x.classList.remove('keyboard-active'));items[idx].classList.add('keyboard-active');}else if(e.key==='Enter'&&idx>=0){e.preventDefault();items[idx].dispatchEvent(new MouseEvent('mousedown',{bubbles:true,cancelable:true}));}else if(e.key==='Escape'){box.classList.add('hidden');}
}

function renderNotes(){
 const list=$("#notesList");
 if(!list)return;
 list.innerHTML=state.notes.length?state.notes.map((n,i)=>`<article class="note">
   <div class="note-actions"><button class="edit-note" onclick="editNote(${i})">✎ Editar</button><button class="delete-note" onclick="deleteNote(${i})">×</button></div>
   <h3>${escapeHtml(n.title||"Sem título")}</h3>
   <small>${new Date(n.date).toLocaleString("pt-BR")}</small>
   <p>${escapeHtml(n.text)}</p>
 </article>`).join(""):`<p style="color:var(--muted)">Nenhuma anotação ainda.</p>`;
}
function editNote(i){
 const n=state.notes[i];if(!n)return;
 state.editingNote=i;
 $("#noteTitle").value=n.title||"";
 $("#noteText").value=n.text||"";
 $("#saveNote").textContent="Salvar alterações";
 $("#cancelEditNote").classList.remove("hidden");
 $("#noteTitle").focus();
}
function cancelEditNote(){
 state.editingNote=null;
 $("#noteTitle").value="";
 $("#noteText").value="";
 $("#saveNote").textContent="Salvar anotação";
 $("#cancelEditNote").classList.add("hidden");
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
$("#saveNote").addEventListener("click",()=>{
 const title=$("#noteTitle").value.trim(),text=$("#noteText").value.trim();
 if(!text){toast("Escreva alguma coisa primeiro.");return}
 if(Number.isInteger(state.editingNote)){
   state.notes[state.editingNote]={...state.notes[state.editingNote],title,text,date:Date.now()};
   toast("Anotação atualizada.");
 }else{
   state.notes.unshift({title,text,date:Date.now()});
   toast("Anotação salva.");
 }
 cancelEditNote();
 save();
 renderNotes();
});
$("#cancelEditNote").addEventListener("click",cancelEditNote);
function deleteNote(i){
 if(confirm("Remover esta anotação?")){
   if(state.editingNote===i)cancelEditNote();
   state.notes.splice(i,1);
   save();
   renderNotes();
 }
}

$("#themeBtn").addEventListener("click",()=>{state.theme=state.theme==="dark"?"light":"dark";applyTheme();save();toast(state.theme==="light"?"Tema claro ativado":"Tema escuro ativado")});
$("#fontDown").addEventListener("click",()=>{state.fontScale=Math.max(.9,Math.round((state.fontScale-.05)*100)/100);applyTheme();save();toast("Texto reduzido para facilitar a leitura")});
$("#fontUp").addEventListener("click",()=>{state.fontScale=Math.min(1.25,Math.round((state.fontScale+.05)*100)/100);applyTheme();save();toast("Texto ampliado para facilitar a leitura")});
$("#menuBtn").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
$("#resetProgress").addEventListener("click",()=>{if(confirm("Reiniciar progresso, desempenho e checklists? As anotações serão preservadas.")){state.completed={};state.quiz={correct:0,total:0};state.quizHistory=[];state.currentLesson=0;state.challengeChecks={};state.challengeDrafts={};state.challengeGrades={};state.activeChallenge=null;delete state.quizSession;save();renderDashboard();toast("Progresso reiniciado.")}});
$("#referenceSearch")?.addEventListener("input",()=>renderCodeReference());
$("#globalSearch").addEventListener("input",e=>{const q=e.target.value.trim().toLowerCase(),box=$("#searchResults");if(!q){box.classList.add("hidden");return}const results=[];modules.forEach((m,i)=>{if((m.title+" "+m.short).toLowerCase().includes(q))results.push({type:"Aula",i,title:m.title,text:m.short});m.lessons.forEach(l=>{if((l[0]+" "+l[1]).toLowerCase().includes(q))results.push({type:"Conceito",i,title:l[0],text:l[1]})})});globalQuestions.forEach(x=>{if(x[0].toLowerCase().includes(q))results.push({type:"Quiz",title:x[0],text:"Questão de recuperação ativa"})});box.innerHTML=results.slice(0,12).map(r=>`<div class="search-result" onclick="${r.i!==undefined?`openLesson(${r.i})`:"showView('quiz')"}"><small>${r.type}</small><strong>${r.title}</strong><p>${r.text}</p></div>`).join("")||`<div class="search-result"><p>Nenhum resultado.</p></div>`;box.classList.remove("hidden")});
$$("[data-challenge-editor]").forEach(b=>b.addEventListener("click",()=>switchChallengeEditor(b.dataset.challengeEditor)));
["html","css","js"].forEach(k=>$("#challenge-editor-"+k)?.addEventListener("input",()=>{challengeDraft();clearTimeout(window._challengeTimer);window._challengeTimer=setTimeout(runChallengeCode,180)}));
document.addEventListener("keydown",e=>{if(e.key==="/"&&document.activeElement.tagName!=="INPUT"&&document.activeElement.tagName!=="TEXTAREA"){e.preventDefault();$("#globalSearch").focus()}});

window.openLesson=openLesson;window.showView=showView;window.completeLesson=completeLesson;window.startChapterQuiz=startChapterQuiz;window.startGlobalQuiz=startGlobalQuiz;window.answerActiveQuiz=answerActiveQuiz;window.nextActiveQuiz=nextActiveQuiz;window.cancelQuiz=cancelQuiz;window.newQuizSameType=newQuizSameType;window.nextFlash=nextFlash;window.prevFlash=prevFlash;window.toggleChallenge=toggleChallenge;window.openChallenge=openChallenge;window.closeChallengeCorrector=closeChallengeCorrector;window.gradeChallenge=gradeChallenge;window.runChallengeCode=runChallengeCode;window.clearChallengeEditor=clearChallengeEditor;window.deleteNote=deleteNote;window.editNote=editNote;window.saveMicroCheck=saveMicroCheck;window.resetActiveQuiz=resetActiveQuiz;window.resetQuizData=resetQuizData;window.openCode=openCode;window.deleteCode=deleteCode;window.setReferenceCategory=setReferenceCategory;window.insertReference=insertReference;

applyTheme();initEditor();updateProgress();renderDashboard();

const WORKSHOP_LIBRARY=[
{id:"font-weight",cat:"text",title:"Negrito",desc:"Deixe a fonte mais forte.",code:"font-weight: 700;",lang:"css",hint:"Experimente 400, 600, 700 ou 900."},
{id:"font-style",cat:"text",title:"Itálico",desc:"Incline o texto.",code:"font-style: italic;",lang:"css",hint:"Use normal para voltar ao padrão."},
{id:"underline",cat:"text",title:"Sublinhado",desc:"Adicione uma linha ao texto.",code:"text-decoration: underline;",lang:"css",hint:"Também existem none e line-through."},
{id:"font-size",cat:"text",title:"Tamanho da fonte",desc:"Controle o tamanho do texto.",code:"font-size: 1.25rem;",lang:"css",hint:"Compare px, rem e em."},
{id:"letter-spacing",cat:"text",title:"Espaçamento das letras",desc:"Afaste ou aproxime os caracteres.",code:"letter-spacing: 0.06em;",lang:"css",hint:"Valores negativos aproximam."},
{id:"text-shadow",cat:"effects",title:"Sombra no texto",desc:"Crie profundidade no texto.",code:"text-shadow: 0 2px 8px rgba(0,0,0,.22);",lang:"css",hint:"A ordem é X, Y, blur e cor."},
{id:"uppercase",cat:"text",title:"Maiúsculas",desc:"Transforme visualmente o texto.",code:"text-transform: uppercase;",lang:"css",hint:"Também há lowercase e capitalize."},
{id:"text-center",cat:"layout",title:"Centralizar texto",desc:"Centralize texto.",code:"text-align: center;",lang:"css",hint:"Para elementos, considere Flexbox ou Grid."},
{id:"color",cat:"color",title:"Cor do texto",desc:"Aplique uma cor.",code:"color: #2563eb;",lang:"css",hint:"Troque o hexadecimal e veja o resultado."},
{id:"background",cat:"color",title:"Cor de fundo",desc:"Aplique uma cor ao fundo.",code:"background: #eef3f8;",lang:"css",hint:"Você também pode usar gradientes."},
{id:"border",cat:"effects",title:"Borda",desc:"Adicione uma borda.",code:"border: 1px solid #d0d5dd;",lang:"css",hint:"Espessura, estilo e cor."},
{id:"radius",cat:"effects",title:"Cantos arredondados",desc:"Arredonde os cantos.",code:"border-radius: 12px;",lang:"css",hint:"Aumente o valor para mais arredondamento."},
{id:"shadow",cat:"effects",title:"Sombra no componente",desc:"Crie profundidade.",code:"box-shadow: 0 10px 30px rgba(0,0,0,.12);",lang:"css",hint:"Teste blur e transparência."},
{id:"transition",cat:"effects",title:"Transição suave",desc:"Deixe mudanças naturais.",code:"transition: .2s ease;",lang:"css",hint:"Combine com :hover."},
{id:"hover",cat:"effects",title:"Efeito ao passar o mouse",desc:"Mude o elemento no hover.",code:".demo-card:hover { transform: translateY(-4px); }",lang:"css",hint:"Experimente cor, sombra ou escala."},
{id:"flex-center",cat:"layout",title:"Centralizar com Flexbox",desc:"Centralize filhos nos dois eixos.",code:"display: flex;\njustify-content: center;\nalign-items: center;",lang:"css",hint:"Flexbox é ótimo para alinhamento em uma dimensão."},
{id:"flex-gap",cat:"layout",title:"Espaço entre itens",desc:"Crie distância consistente.",code:"display: flex;\ngap: 16px;",lang:"css",hint:"gap evita margens individuais."},
{id:"grid",cat:"layout",title:"Grade com Grid",desc:"Monte colunas.",code:"display: grid;\ngrid-template-columns: repeat(3, 1fr);\ngap: 16px;",lang:"css",hint:"Grid controla linhas e colunas."},
{id:"padding",cat:"spacing",title:"Espaço interno",desc:"Espaço entre conteúdo e borda.",code:"padding: 20px;",lang:"css",hint:"Padding atua dentro da borda."},
{id:"margin",cat:"spacing",title:"Espaço externo",desc:"Distância ao redor.",code:"margin: 20px;",lang:"css",hint:"Margin atua fora da borda."},
{id:"responsive",cat:"responsive",title:"Media Query",desc:"Adapte o layout.",code:"@media (max-width: 768px) {\n  .demo-card { padding: 16px; }\n}",lang:"css",hint:"Você pode começar pelo mobile e adaptar telas maiores."},
{id:"semantic-card",cat:"html",title:"Estrutura semântica",desc:"Use HTML com significado.",code:"<article>\n  <h2>Título</h2>\n  <p>Conteúdo</p>\n</article>",lang:"html",hint:"Escolha tags que expressem a função do conteúdo."},
{id:"image",cat:"html",title:"Imagem acessível",desc:"Imagem com texto alternativo.",code:'<img src="imagem.jpg" alt="Descrição da imagem">',lang:"html",hint:"O alt ajuda na acessibilidade."},
{id:"query",cat:"js",title:"Selecionar elemento",desc:"Encontre um elemento.",code:'document.querySelector(".demo-card");',lang:"js",hint:"Use um seletor CSS."},
{id:"event",cat:"js",title:"Clique com JavaScript",desc:"Reaja a uma interação.",code:'document.querySelector("button")?.addEventListener("click", () => {\n  console.log("Clique!");\n});',lang:"js",hint:"Eventos conectam ações do usuário ao comportamento."}
];
(function(){
const s=document.getElementById("workshop-search"),r=document.getElementById("workshop-results"),cats=document.getElementById("workshop-categories"),he=document.getElementById("workshop-html"),ce=document.getElementById("workshop-css"),je=document.getElementById("workshop-js"),pv=document.getElementById("workshop-preview"),clear=document.getElementById("workshop-clear"),hint=document.getElementById("workshop-hint"),hb=document.getElementById("workshop-hint-box");
if(!s||!r||!pv)return;let cat="all";
const map={"efeitos na fonte":"text-shadow font-weight font-style underline letter-spacing","efeitos fonte":"text-shadow font-weight font-style underline letter-spacing","fontes":"font-size font-weight font-style letter-spacing","sombra":"shadow text-shadow","centralizar":"flex-center text-center","cor":"color background","cores":"color background","fundo":"background","botao":"hover radius shadow transition color","botão":"hover radius shadow transition color","card":"radius shadow padding border","espaçamento":"padding margin flex-gap","espacamento":"padding margin flex-gap","responsivo":"responsive","responsividade":"responsive","grid":"grid","flex":"flex-center flex-gap"};
const norm=x=>(x||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),esc=x=>x.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
function list(){let q=norm(s.value).trim(),a=WORKSHOP_LIBRARY.filter(x=>cat==="all"||x.cat===cat);if(!q)return a;let words=norm(map[q]||q).split(/\s+/);return a.map(x=>({x,score:words.reduce((n,w)=>n+(norm(x.title+" "+x.desc+" "+x.code+" "+x.id).includes(w)?2:0),0)})).filter(o=>o.score).sort((a,b)=>b.score-a.score).map(o=>o.x)}
function render(){let a=list();r.innerHTML=a.length?a.map(x=>`<article class="workshop-item"><strong>${x.title}</strong><p>${x.desc}</p><code>${esc(x.code)}</code><div class="workshop-item-actions"><button class="primary" data-add="${x.id}">Adicionar</button><button data-hint="${x.id}">Por que usar?</button></div></article>`).join(""):`<div class="workshop-item"><strong>Nada encontrado.</strong><p>Tente “cor”, “sombra”, “centralizar”, “fonte”, “grid” ou “responsivo”.</p></div>`}
function update(){let h=he.value,c=ce.value,j=je.value.replace(/<\/script/gi,"<\\/script");pv.srcdoc=`<!doctype html><html><head><meta charset="utf-8"><style>${c}</style></head><body>${h}<script>${j}<\/script></body></html>`;localStorage.setItem("frontlab_workshop_v1",JSON.stringify({h:he.value,c:ce.value,j:je.value}))}
function add(x){let t=x.lang==="html"?he:x.lang==="js"?je:ce,v=t.value.trimEnd();t.value=(v?v+"\n\n":"")+x.code;t.dispatchEvent(new Event("input"));update()}
s.addEventListener("input",render);cats?.addEventListener("click",e=>{let b=e.target.closest("[data-category]");if(!b)return;cat=b.dataset.category;cats.querySelectorAll(".workshop-cat").forEach(x=>x.classList.toggle("active",x===b));render()});r.addEventListener("click",e=>{let a=e.target.closest("[data-add]"),b=e.target.closest("[data-hint]");if(a){let x=WORKSHOP_LIBRARY.find(y=>y.id===a.dataset.add);if(x)add(x)}if(b){let x=WORKSHOP_LIBRARY.find(y=>y.id===b.dataset.hint);if(x){hb.hidden=false;hb.innerHTML="<strong>💡 "+x.title+"</strong><br>"+x.hint}}});[he,ce,je].forEach(x=>x?.addEventListener("input",update));clear?.addEventListener("click",()=>{he.value="";ce.value="";je.value="";update()});hint?.addEventListener("click",()=>{hb.hidden=!hb.hidden;if(!hb.hidden)hb.innerHTML="<strong>💡 Dica de estudo</strong><br>Escolha uma propriedade, altere um valor e observe. Depois tente reproduzir o resultado sem ajuda."});try{let x=JSON.parse(localStorage.getItem("frontlab_workshop_v1")||"null");if(x){he.value=x.h;ce.value=x.c;je.value=x.j}}catch(e){}render();update()
})();
