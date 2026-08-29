const modules = [
  {book:1,title:"Introdução à Web, anatomia e estrutura básica",short:"Entenda o papel do HTML, CSS e JavaScript e aprenda a estrutura mínima de um documento HTML5.",goals:["Diferenciar HTML, CSS e JavaScript.","Reconhecer a anatomia básica de um elemento HTML.","Montar a estrutura mínima de um documento HTML5."],lessons:[
    ["Como a Web funciona?", "Ao acessar um site, o navegador solicita recursos a um servidor. O material apresenta três peças centrais: HTML para estrutura, CSS para aparência e layout e JavaScript para interatividade e lógica. HTML não é linguagem de programação; é uma linguagem de marcação."],
    ["Anatomia de uma tag", "Um elemento HTML normalmente é formado por uma tag de abertura, conteúdo e tag de fechamento. Atributos acrescentam informações à tag de abertura e seguem a forma nome=\"valor\"."],
    ["Documento HTML5", "A base do documento usa <!DOCTYPE html>, o elemento <html lang=\"pt-BR\">, um <head> com informações como charset, viewport e title, e um <body> com o conteúdo que será exibido." ],
    ["Boas práticas e ferramentas", "O atalho Emmet do VS Code gera essa estrutura inteira digitando apenas ! e apertando Tab. Vale também validar o HTML no validador oficial do W3C de vez em quando — ele aponta tags mal fechadas ou atributos incorretos que o navegador esconde de você."]
  ]},
  {book:1,title:"Texto, listas, links e semântica",short:"Organize conteúdo com títulos, parágrafos, listas, links e elementos semânticos.",goals:["Construir uma hierarquia de títulos coerente.","Usar listas conforme o tipo de conteúdo.","Criar links internos e externos com os atributos adequados."],lessons:[
    ["Hierarquia de títulos", "Use h1 até h6 para representar níveis de título. A hierarquia ajuda a organizar o conteúdo e torna a estrutura mais compreensível."],
    ["Parágrafos e listas", "p representa parágrafos. strong indica importância e em indica ênfase. ul cria listas não ordenadas e ol cria listas ordenadas; cada item é colocado em li."],
    ["Links", "O elemento a cria hiperlinks. href define o destino. target=\"_blank\" pode abrir o destino em uma nova aba; mailto: permite criar um link para e-mail." ],
    ["Erros comuns", "Evite pular níveis de título (ir de h1 direto para h4) só por causa do tamanho da fonte — isso quebra a hierarquia para leitores de tela; ajuste o tamanho depois, com CSS. Em links externos com target=\"_blank\", é boa prática adicionar rel=\"noopener\" por segurança."]
  ]},
  {book:1,title:"Mídias, tabelas e estrutura semântica",short:"Trabalhe com imagens, áudio, vídeo, tabelas e as principais áreas semânticas do HTML5.",goals:["Inserir imagens com texto alternativo.","Estruturar dados tabulares corretamente.","Separar áreas da página usando elementos semânticos."],lessons:[
    ["Imagens e mídias", "img usa src para indicar o arquivo e alt para fornecer uma descrição textual. audio e video permitem mídia nativa; controls adiciona controles ao usuário e poster pode definir uma imagem de capa para vídeo."],
    ["Tabelas", "Use table para dados tabulares, com tr para linhas, th para células de cabeçalho e td para células de dados. O material ressalta que tabelas não devem ser usadas para criar o layout da página."],
    ["Estrutura semântica", "header representa cabeçalho, nav navegação, main conteúdo principal, article conteúdo independente, section uma seção temática, aside conteúdo complementar e footer rodapé." ],
    ["Além do material", "Duas técnicas modernas que valem a pena conhecer: loading=\"lazy\" no <img> atrasa o carregamento de imagens fora da tela, melhorando a performance; e a tag <caption>, colocada logo após <table>, dá um título acessível à tabela."]
  ]},
  {book:1,title:"Formulários, validação e acessibilidade",short:"Monte formulários claros usando labels, inputs, textarea, select e validação nativa.",goals:["Associar corretamente labels e campos.","Conhecer os principais tipos de input.","Usar atributos de validação e estrutura semântica."],lessons:[
    ["Estrutura de formulário", "form representa o formulário. action indica o destino do envio e method define como os dados serão enviados. O conteúdo do formulário fica dentro do elemento form."],
    ["Inputs e labels", "Cada campo deve ter uma label associada ao id correspondente. O material apresenta tipos como text, email, password, number, date, checkbox, radio e file, além de textarea e select."],
    ["Validação nativa", "required, minlength, min e max ajudam o navegador a validar campos antes do envio. A validação não substitui uma aplicação completa de tratamento dos dados, mas é uma camada importante no formulário." ],
    ["Acessibilidade extra", "fieldset e legend agrupam campos relacionados (como endereço) com um título semântico. O atributo autocomplete (ex: autocomplete=\"email\") ajuda o navegador a preencher formulários automaticamente, melhorando a experiência do usuário."]
  ]},
  {book:2,title:"CSS, seletores, cores e tipografia",short:"Aprenda a escrever regras CSS, selecionar elementos e controlar cores, fontes, alinhamento e legibilidade.",goals:["Entender seletor, propriedade e valor.","Distinguir tag, classe e ID.","Aplicar propriedades básicas de texto e cor."],lessons:[
    ["Como o CSS funciona", "CSS define apresentação, espaçamento e layout. O material apresenta CSS inline, interno e externo e recomenda o arquivo externo como abordagem padrão para projetos organizados."],
    ["Seletores básicos", "Um seletor de tag aplica regras a elementos daquele tipo. .classe pode ser reutilizada em vários elementos. #id identifica um elemento específico."],
    ["Cores e tipografia", "Cores podem ser escritas por nomes, hexadecimal e RGB/RGBA. Para texto, o material trabalha com font-family, font-size, font-weight, line-height, text-align e text-decoration." ],
    ["Seletores combinados", "Seletores podem ser combinados: .card p seleciona todo <p> dentro de .card; .card > p seleciona só os filhos diretos; h1, h2, h3 aplica a mesma regra a vários seletores de uma vez, separados por vírgula."]
  ]},
  {book:2,title:"Box Model e dimensionamento",short:"Domine content, padding, border, margin e box-sizing para controlar dimensões previsíveis.",goals:["Visualizar as quatro camadas do Box Model.","Diferenciar padding e margin.","Entender por que border-box simplifica o dimensionamento."],lessons:[
    ["As quatro camadas", "Todo elemento é tratado como uma caixa. De dentro para fora: content, padding, border e margin. Content é o conteúdo; padding é o espaço interno; border envolve a caixa; margin cria espaço externo."],
    ["content-box e border-box", "Com content-box, padding e border são adicionados ao tamanho declarado. Com border-box, padding e border ficam dentro do tamanho definido, tornando o cálculo do layout mais previsível."],
    ["Reset inicial", "O material apresenta como reset comum: * { margin: 0; padding: 0; box-sizing: border-box; }. Isso reduz diferenças iniciais entre elementos e facilita o controle do layout." ],
    ["Depurando o Box Model", "As DevTools do navegador (F12) mostram um diagrama visual do Box Model de qualquer elemento selecionado, com os valores exatos de cada camada — é a forma mais rápida de entender por que um elemento está com um tamanho inesperado."]
  ]},
  {book:2,title:"Position, display e z-index",short:"Entenda fluxo normal, block, inline e os principais valores de position.",goals:["Reconhecer o comportamento básico de display.","Saber quando relative, absolute, fixed e sticky entram em cena.","Entender o papel do z-index em sobreposições."],lessons:[
    ["display", "block normalmente ocupa a largura disponível e inicia uma nova linha. inline ocupa apenas o espaço necessário. inline-block permite dimensionamento mantendo o comportamento lado a lado. none remove o elemento do layout."],
    ["position", "static é o comportamento padrão. relative mantém o espaço no fluxo e permite deslocamento. absolute sai do fluxo e se posiciona em relação ao ancestral posicionado mais próximo. fixed se relaciona à viewport. sticky combina comportamento de fluxo e fixação conforme a rolagem."],
    ["z-index", "Quando elementos posicionados se sobrepõem, z-index ajuda a definir a ordem de empilhamento." ],
    ["Armadilhas comuns", "position: sticky não funciona se o elemento pai tiver overflow: hidden ou altura insuficiente. display: none remove o elemento do layout e da árvore de acessibilidade; visibility: hidden apenas o esconde visualmente, mas ainda ocupa espaço."]
  ]},
  {book:2,title:"Pseudo-classes, pseudo-elementos e efeitos",short:"Crie respostas visuais para interação e efeitos com hover, focus, before, after, sombras, transition e transform.",goals:["Usar estados como :hover e :focus.","Diferenciar pseudo-classe de pseudo-elemento.","Aplicar efeitos sem perder a clareza do layout."],lessons:[
    ["Pseudo-classes", ":hover representa interação com o ponteiro, :focus representa foco, :first-child seleciona o primeiro filho e :nth-child permite selecionar elementos por posição."],
    ["Pseudo-elementos", "::first-letter estiliza a primeira letra. ::before e ::after permitem criar conteúdo visual antes ou depois do conteúdo do elemento."],
    ["Efeitos", "box-shadow e text-shadow criam sombras. transition suaviza mudanças e transform permite alterações visuais como scale e translate." ],
    ["Mais pseudo-classes úteis", ":not(.destaque) seleciona tudo exceto o que casa com .destaque. :nth-of-type(2) funciona como :nth-child, mas conta apenas elementos do mesmo tipo — útil quando há tags diferentes misturadas no mesmo pai."]
  ]},
  {book:3,title:"Flexbox: eixo principal, transversal e alinhamento",short:"Organize componentes em uma dimensão usando container flexível, eixos, alinhamento, wrap e gap.",goals:["Identificar main axis e cross axis.","Distribuir e alinhar itens corretamente.","Construir layouts flexíveis sem depender de margens artificiais."],lessons:[
    ["O modelo Flexbox", "display: flex transforma os filhos diretos em flex items e cria um sistema de layout unidimensional: linha ou coluna por vez."],
    ["Eixos", "O main axis é o eixo principal e o cross axis é perpendicular a ele. A direção inicial é horizontal; flex-direction pode mudar a orientação."],
    ["Alinhamento e espaçamento", "justify-content atua no eixo principal. align-items atua no eixo transversal. flex-wrap permite quebra e gap cria espaçamento entre os itens." ],
    ["Atalhos úteis do Flexbox", "flex-flow é o shorthand que combina flex-direction e flex-wrap em uma linha só. A propriedade order muda a ordem visual dos itens sem precisar reordenar o HTML — útil para ajustes responsivos."]
  ]},
  {book:3,title:"Flexbox avançado",short:"Aprofunde-se em crescimento, encolhimento, base, shorthand flex e alinhamento individual.",goals:["Compreender grow, shrink e basis.","Usar o shorthand flex com segurança.","Diferenciar align-items de align-self."],lessons:[
    ["Crescimento e encolhimento", "flex-grow controla quanto um item pode crescer quando existe espaço disponível. flex-shrink controla a capacidade de encolher quando o espaço é insuficiente."],
    ["flex-basis e shorthand", "flex-basis define o tamanho inicial no eixo principal. A propriedade flex reúne grow, shrink e basis em uma única declaração."],
    ["Alinhamento individual", "align-self permite alterar o alinhamento de um item específico sem mudar o alinhamento definido para todos os itens." ],
    ["Quando Flexbox não é a melhor escolha", "Para alinhar itens em duas dimensões ao mesmo tempo (linhas E colunas relacionadas entre si), o CSS Grid tende a exigir menos gambiarra que o Flexbox, que foi desenhado para apenas uma dimensão por vez."]
  ]},
  {book:3,title:"CSS Grid: linhas, colunas e fr",short:"Monte layouts bidimensionais com Grid, templates, gap, repeat e unidades fr.",goals:["Ativar e configurar um grid.","Definir colunas e linhas.","Usar repeat e fr para grades flexíveis."],lessons:[
    ["Grid em duas dimensões", "CSS Grid trabalha simultaneamente com linhas e colunas. Por isso, é especialmente útil para estruturas gerais de página e grades."],
    ["Templates e gap", "display: grid ativa o Grid. grid-template-columns e grid-template-rows definem a grade. gap cria espaço entre linhas e colunas."],
    ["fr e repeat", "fr representa uma fração do espaço livre. repeat(3, 1fr), por exemplo, cria três colunas de uma fração cada." ],
    ["Grid implícito", "Quando você não define todas as linhas com grid-template-rows, o Grid cria linhas implícitas automaticamente. grid-auto-rows controla a altura dessas linhas extras, e minmax(150px, 1fr) evita que colunas fiquem menores que um tamanho mínimo."]
  ]},
  {book:3,title:"Grid Areas e Flexbox + Grid",short:"Desenhe estruturas com áreas nomeadas e combine Grid para estrutura com Flexbox para componentes.",goals:["Ler um layout de grid por áreas nomeadas.","Escolher Grid ou Flexbox conforme o problema.","Combinar os dois sistemas em uma mesma página."],lessons:[
    ["Áreas nomeadas", "grid-template-areas permite representar visualmente a estrutura do layout usando nomes de áreas como header, sidebar, main e footer."],
    ["Grid ou Flexbox?", "O material resume Grid como bidimensional, adequado à estrutura geral, e Flexbox como unidimensional, adequado a componentes menores como menus, alinhamento de ícones e formulários."],
    ["Composição", "Uma arquitetura real pode usar Grid para a estrutura maior e Flexbox dentro de cada componente para organizar seu conteúdo interno." ],
    ["Grid responsivo sem media query", "repeat(auto-fit, minmax(220px, 1fr)) faz o número de colunas se ajustar sozinho ao espaço disponível — adiciona ou remove colunas automaticamente conforme a tela cresce ou encolhe, sem escrever nenhuma @media."]
  ]},
  {book:4,title:"Unidades relativas: rem, em, %, vh e vw",short:"Construa interfaces mais adaptáveis usando unidades relativas e limites como max-width.",goals:["Entender por que unidades relativas são úteis.","Diferenciar rem de em.","Usar porcentagens e unidades da viewport com intenção."],lessons:[
    ["Por que evitar depender apenas de px", "O material apresenta unidades relativas como uma escolha importante para interfaces que precisam se adaptar a diferentes telas e às preferências de zoom do usuário."],
    ["rem e em", "rem é relativo ao tamanho de fonte do elemento raiz. em é relativo ao tamanho de fonte do elemento pai direto. O material destaca rem para escalas previsíveis e em para componentes que devem acompanhar o texto do pai."],
    ["%, vh, vw e max-width", "% depende do container de referência. 1vw representa 1% da largura da viewport e 1vh representa 1% da altura. max-width pode limitar a expansão de um elemento." ],
    ["A função clamp()", "clamp(1rem, 2vw, 1.5rem) define um valor mínimo, um valor ideal (que escala com a tela) e um valor máximo, tudo em uma única linha — muito usado hoje para tipografia fluida sem precisar de várias media queries."]
  ]},
  {book:4,title:"Media Queries e mobile-first",short:"Crie responsividade progressiva começando pelo celular e ampliando o layout conforme a largura aumenta.",goals:["Entender o papel das media queries.","Aplicar a estratégia mobile-first.","Trabalhar com breakpoints progressivos."],lessons:[
    ["Media queries", "@media permite aplicar regras CSS conforme características do dispositivo, especialmente a largura da viewport."],
    ["Mobile-first", "Escreva primeiro o layout para telas pequenas. Depois use min-width para adicionar colunas, espaçamentos e componentes mais complexos conforme a tela cresce."],
    ["Breakpoints do material", "O exemplo fornecido usa 768px para tablet e 1024px para desktop, levando a grade de uma coluna para duas e depois três colunas." ],
    ["Testando responsividade de verdade", "As DevTools têm um modo de simulação de dispositivos (ícone de celular/tablet) que testa vários tamanhos de tela sem precisar redimensionar a janela manualmente. A media feature orientation: landscape/portrait também pode refinar ainda mais o layout."]
  ]},
  {book:4,title:"Imagens e mídias responsivas",short:"Evite estouro horizontal e preserve proporções de imagens e vídeos.",goals:["Impedir que mídia ultrapasse o container.","Preservar proporções.","Entender por que max-width: 100% é tão importante."],lessons:[
    ["Regra essencial", "Uma regra comum do material é img, video { max-width: 100%; height: auto; display: block; }. Ela limita a mídia ao espaço disponível e mantém a proporção."],
    ["O problema do overflow", "Uma imagem maior que a tela pode criar rolagem horizontal. max-width: 100% impede que a largura ultrapasse o container de referência."],
    ["Teste prático", "Reduza a janela do navegador e observe a mídia. O objetivo é que ela acompanhe a largura disponível sem ficar deformada." ],
    ["Além do max-width: srcset", "Para casos mais avançados que uma imagem só, o atributo srcset permite oferecer vários arquivos da mesma imagem em resoluções diferentes, deixando o navegador escolher a mais adequada ao dispositivo do usuário."]
  ]},
  {book:4,title:"Projeto final: portal responsivo",short:"Integre HTML semântico, CSS, Grid, Flexbox, unidades relativas e media queries em um projeto completo.",goals:["Planejar a estrutura semântica.","Combinar Grid e Flexbox.","Implementar uma evolução mobile → tablet → desktop."],lessons:[
    ["Estrutura do portal", "O projeto final do material propõe header, navegação, hero, conteúdo principal, cards, formulário e footer, organizados com HTML semântico."],
    ["Layout e estilo", "O exemplo integra reset, variáveis CSS, container, botão, header sticky, Grid para cards, efeitos de hover e media queries."],
    ["Integração final", "A meta é combinar os conhecimentos anteriores em um único projeto: estrutura semântica, estilização, Box Model, Flexbox, Grid, unidades relativas e responsividade." ],
    ["Performance e SEO no projeto final", "Antes de publicar, vale rodar o Lighthouse (aba do DevTools) para medir performance, acessibilidade e SEO. Uma <meta name=\"description\"> bem escrita no <head> também melhora como a página aparece nos resultados de busca."]
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
const chapterCodeExamples = [
  {html:`<!doctype html>\n<html lang="pt-BR">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Minha página</title>\n</head>\n<body>\n  <h1>Olá, mundo!</h1>\n  <p>Este parágrafo já está dentro da estrutura mínima do HTML5.</p>\n</body>\n</html>`,css:``,js:``,note:"Este livro ainda não ensina CSS — repare que o exemplo é feito só com HTML, exatamente como o conteúdo desta parte."},
  {html:`<h1>Receitas da Casa</h1>\n<p>Um <strong>caderno de receitas</strong> simples, escrito à mão. <em>Atualizado toda semana.</em></p>\n<ul>\n  <li>Bolo de cenoura</li>\n  <li>Pão caseiro</li>\n  <li>Suco verde</li>\n</ul>\n<a href="https://developer.mozilla.org" target="_blank">Documentação MDN</a>`,css:``,js:``,note:"Só HTML: hierarquia de título, texto com strong/em, lista não ordenada e um link externo."},
  {html:`<header>\n  <h1>Galeria de Fotos</h1>\n</header>\n<main>\n  <section>\n    <h2>Álbum</h2>\n    <img src="https://picsum.photos/500/280" alt="Paisagem de exemplo">\n  </section>\n  <section>\n    <h2>Ficha técnica</h2>\n    <table>\n      <thead><tr><th>Item</th><th>Detalhe</th></tr></thead>\n      <tbody><tr><td>Câmera</td><td>Mirrorless</td></tr></tbody>\n    </table>\n  </section>\n</main>\n<footer><p>&copy; 2026</p></footer>`,css:``,js:``,note:"Combina mídia (img), tabela (table/thead/tbody) e as tags semânticas header/main/section/footer — tudo ainda sem CSS."},
  {html:`<main>\n  <form action="/enviar" method="POST">\n    <label for="nome">Nome completo</label>\n    <input id="nome" name="nome" type="text" required>\n\n    <label for="email">E-mail</label>\n    <input id="email" name="email" type="email" required>\n\n    <label for="plano">Plano de estudo</label>\n    <select id="plano" name="plano">\n      <option value="iniciante">Iniciante</option>\n      <option value="intermediario">Intermediário</option>\n    </select>\n\n    <button type="submit">Enviar cadastro</button>\n  </form>\n</main>`,css:``,js:``,note:"Formulário completo em HTML puro: label associada por for/id, dois tipos de input e um select — sem nenhum estilo ainda."},
  {html:`<h1 id="titulo">Loja Online</h1>\n<p class="destaque">Frete grátis esta semana.</p>\n<button id="btn-comprar">Comprar</button>`,css:`#titulo { color: #1a1a2e; }\n.destaque { font-weight: bold; color: #0f766e; }\n#btn-comprar { background: #2563eb; color: white; padding: 8px 16px; border: none; border-radius: 6px; }`,js:``,note:"O HTML acima já existia; aqui o CSS entra pela primeira vez, usando os três seletores desta parte: tag (h1 implícito), classe (.destaque) e ID (#titulo, #btn-comprar)."},
  {html:`<div class="cartao">\n  <h2>Notebook X1</h2>\n  <p>Ideal para quem estuda front-end.</p>\n</div>`,css:`* { margin: 0; padding: 0; box-sizing: border-box; }\n.cartao { width: 320px; padding: 20px; border: 2px solid #111; border-radius: 10px; margin: 20px auto; }`,js:``,note:"O reset universal (*) zera as margens padrão do navegador antes do Box Model entrar em ação no .cartao."},
  {html:`<div class="pagina">\n  <div class="selo">Novo</div>\n  <p>Conteúdo do cartão.</p>\n</div>`,css:`.pagina { position: relative; width: 280px; padding: 16px; border: 1px solid #ccc; }\n.selo { position: absolute; top: -10px; right: -10px; background: #ef4444; color: #fff; padding: 4px 10px; border-radius: 999px; z-index: 2; }`,js:``,note:"O .selo usa position: absolute em relação ao .pagina, que precisa ser position: relative para servir de referência."},
  {html:`<button class="btn">Passe o mouse aqui</button>\n<p class="aviso">Atenção com este conceito.</p>`,css:`.btn { padding: 10px 18px; background: #2563eb; color: #fff; border: none; border-radius: 6px; transition: transform .2s, box-shadow .2s; }\n.btn:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(0,0,0,.2); }\n.aviso::before { content: "⚠ "; }`,js:``,note:"Combina uma pseudo-classe (:hover) com um pseudo-elemento (::before) no mesmo exemplo."},
  {html:`<div class="container">\n  <div class="item">A</div>\n  <div class="item">B</div>\n  <div class="item">C</div>\n</div>`,css:`.container { display: flex; justify-content: center; align-items: center; gap: 20px; height: 160px; background: #f4f4f5; }\n.item { padding: 20px; background: #fff; border: 1px solid #ddd; }`,js:``,note:"justify-content centraliza no eixo principal, align-items no eixo transversal — a dupla mais usada do Flexbox."},
  {html:`<div class="container">\n  <div class="item destaque">Cresce o dobro</div>\n  <div class="item">Normal</div>\n</div>`,css:`.container { display: flex; gap: 10px; }\n.item { flex: 1; padding: 16px; background: #e5e7eb; }\n.destaque { flex: 2; background: #bfdbfe; }`,js:``,note:"flex: 2 faz o item crescer o dobro do espaço disponível em relação a um item com flex: 1."},
  {html:`<div class="grid">\n  <div>1</div><div>2</div><div>3</div>\n</div>`,css:`.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }\n.grid div { background: #f0fdfa; padding: 24px; text-align: center; }`,js:``,note:"repeat(3, 1fr) cria três colunas de largura igual — o mesmo que escrever 1fr 1fr 1fr."},
  {html:`<div class="layout">\n  <header>Cabeçalho</header>\n  <aside>Menu</aside>\n  <main>Conteúdo</main>\n  <footer>Rodapé</footer>\n</div>`,css:`.layout { display: grid; grid-template-columns: 220px 1fr; grid-template-areas: "header header" "sidebar main" "footer footer"; gap: 15px; }\nheader { grid-area: header; } aside { grid-area: sidebar; } main { grid-area: main; } footer { grid-area: footer; }`,js:``,note:"grid-area conecta cada elemento ao nome definido em grid-template-areas no elemento pai."},
  {html:`<div class="produto">\n  <img src="https://picsum.photos/300/180" alt="Produto">\n  <div class="info"><h3>Título</h3><span>R$ 99</span></div>\n</div>`,css:`.produto { display: grid; grid-template-rows: auto 1fr; border: 1px solid #ddd; }\n.info { display: flex; justify-content: space-between; align-items: center; padding: 12px; }`,js:``,note:"Grid organiza a estrutura maior do cartão (imagem em cima, informações embaixo) enquanto Flexbox alinha os itens dentro de .info — a combinação típica do dia a dia."},
  {html:`<nav>\n  <a href="#">Início</a>\n  <a href="#">Artigos</a>\n  <a href="#">Contato</a>\n</nav>`,css:`html { font-size: 16px; }\nnav { display: flex; gap: 1rem; padding: 1rem; }\na { font-size: 1rem; }\n@media (min-width: 768px) { nav { justify-content: center; gap: 2rem; } }`,js:``,note:"1rem sempre equivale ao font-size do html — aqui, 16px. A media query só entra em ação em telas de 768px ou mais."},
  {html:`<img src="https://picsum.photos/900/500" alt="Paisagem responsiva">`,css:`img { max-width: 100%; height: auto; display: block; }`,js:``,note:"Sem esta regra, uma imagem maior que a tela do celular estoura a largura do container e cria rolagem horizontal."},
  {html:`<header>Portal</header>\n<main>\n  <article>Notícia 1</article>\n  <article>Notícia 2</article>\n  <article>Notícia 3</article>\n</main>\n<footer>Rodapé</footer>`,css:`* { box-sizing: border-box; }\nmain { display: grid; grid-template-columns: 1fr; gap: 1rem; padding: 1rem; }\narticle { background: #f4f4f5; padding: 1rem; }\n@media (min-width: 768px) { main { grid-template-columns: repeat(2, 1fr); } }\n@media (min-width: 1024px) { main { grid-template-columns: repeat(3, 1fr); } }`,js:``,note:"Mobile-first: a base é 1 coluna; min-width vai adicionando colunas conforme a tela cresce — nunca o contrário."}
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
function updateProgress(){
 const acc=state.quiz.total?Math.round(state.quiz.correct/state.quiz.total*100):0;$("#dashAccuracy").textContent=acc+"% acerto";
}
function applyTheme(){
 document.documentElement.dataset.theme=state.theme;
 document.documentElement.style.fontSize=(16*state.fontScale)+"px";
 $("#themeBtn").textContent=state.theme==="light"?"☀":"◐";
 $("#themeBtn").title=state.theme==="light"?"Mudar para tema escuro":"Mudar para tema claro";
}
function showView(name){
 $$(".view").forEach(v=>v.classList.remove("active"));const view=$("#view-"+name);if(!view)return;view.classList.add("active");
 $$(".topnav-item").forEach(n=>n.classList.toggle("active",n.dataset.view===(name==="aulas"?"trilha":name)));
 $("#topnav").classList.remove("open");window.scrollTo({top:0,behavior:"smooth"});
 if(name==="dashboard"){renderDashboard();renderFlash();}if(name==="trilha")renderRoadmap();if(name==="aulas")renderLessons();if(name==="quiz")renderQuizHome();if(name==="desafios")renderChallenges();if(name==="playground"){renderCodeList();loadActiveCode();renderCodeReference()}if(name==="anotacoes")renderNotes();
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
 $("#roadmap").innerHTML=Object.entries(books).map(([b,title])=>{const arr=modules.map((m,i)=>({m,i})).filter(x=>x.m.book==b);return `<section class="book-section"><div class="book-header" onclick="openLesson(${arr[0].i})"><div><span class="eyebrow">LIVRO ${b}</span><h2>${title}</h2><p>${arr.filter(x=>state.completed[x.i]).length}/${arr.length} partes concluídas</p></div><span class="book-enter">Abrir livro →</span></div><div class="parts">${arr.map((x,j)=>`<div class="part-card ${state.completed[x.i]?"done":""}" onclick="event.stopPropagation();openLesson(${x.i})"><div class="part-number">${j+1}</div><div><strong>${x.m.title}</strong><small>${x.m.short}</small></div><span class="part-status">${state.completed[x.i]?"✓":"→"}</span></div>`).join("")}</div></section>`}).join("");
}
function openLesson(i){state.currentLesson=i;save();showView("aulas")}
function renderLessons(){
 const book=modules[state.currentLesson].book;
 const arr=modules.map((m,i)=>({m,i})).filter(x=>x.m.book===book);
 $("#lessonList").innerHTML=`<button class="lesson-back" onclick="showView('trilha')">← Voltar para a trilha</button>`+arr.map(x=>`<button class="lesson-nav ${x.i===state.currentLesson?"active":""}" onclick="openLesson(${x.i})"><b>PARTE ${(x.i%4)+1} DE 4</b>${x.m.title}</button>`).join("");
 renderLessonContent();
}
function estimateReadingTime(m,ex){
 const text=m.lessons.map(l=>l[0]+" "+l[1]).join(" ")+" "+m.short+" "+m.goals.join(" ");
 const words=text.trim().split(/\s+/).filter(Boolean).length;
 const codeChars=ex?((ex.html||"")+(ex.css||"")+(ex.js||"")).length:0;
 return Math.max(4,Math.ceil(words/150+codeChars/450));
}
function renderLessonContent(){
 const i=state.currentLesson,m=modules[i],done=!!state.completed[i];
 const totalSecs=m.lessons.length;
 const mins=estimateReadingTime(m,chapterCodeExamples[i]);
 const rail=m.lessons.map((_,j)=>`<i data-jump="${j}" title="Ir para a seção ${j+1}"></i>`).join("");
 const sections=m.lessons.map((l,j)=>`<section class="lesson-section" id="lsec-${j}"><h2>${j+1}. ${l[0]}</h2><p>${l[1]}</p></section>`).join("");
 const example=formatChapterExample(chapterCodeExamples[i]);
 const recap=`<div class="recap-box"><span class="eyebrow">Pontos-chave para fixar</span><ul>${m.goals.map((g,n)=>`<li><b>${String(n+1).padStart(2,"0")}</b><span>${g}</span></li>`).join("")}</ul></div>`;
 const next=i<modules.length-1?`<button class="primary-btn" onclick="completeLesson(${i})">${done?"Continuar para a próxima parte":"Concluir e continuar"} →</button>`:`<button class="primary-btn" onclick="completeLesson(${i})">${done?"Revisar conclusão":"Concluir trilha"}</button>`;
 $("#lessonContent").innerHTML=`<span class="eyebrow">Livro ${m.book} • Parte ${((i)%4)+1}</span><h1>${m.title}</h1><p class="lesson-lead">${m.short}</p><div class="lesson-meta"><span>◷ ${mins} min de leitura</span><span>· ${totalSecs} seções</span></div><div class="lesson-progress-rail">${rail}</div><div class="goal-grid">${m.goals.map((g,n)=>`<div><b>${n+1}</b><span>${g}</span></div>`).join("")}</div>${sections}${example}${recap}<div class="lesson-actions"><button class="secondary-btn" onclick="startChapterQuiz(${i})">Quiz desta parte</button>${next}</div>`;
 $$(".lesson-progress-rail i").forEach(el=>el.addEventListener("click",()=>{const t=$("#lsec-"+el.dataset.jump);if(t)t.scrollIntoView({behavior:"smooth",block:"start"})}));
}
function formatChapterExample(ex){
 if(!ex)return"";
 const parts=[];
 if(ex.html&&ex.html.trim())parts.push(`<div class="example-block"><span class="example-label">HTML</span><pre><code>${escapeHtml(ex.html)}</code></pre></div>`);
 if(ex.css&&ex.css.trim())parts.push(`<div class="example-block"><span class="example-label">CSS</span><pre><code>${escapeHtml(ex.css)}</code></pre></div>`);
 if(ex.js&&ex.js.trim())parts.push(`<div class="example-block"><span class="example-label">JavaScript</span><pre><code>${escapeHtml(ex.js)}</code></pre></div>`);
 if(!parts.length)return"";
 return `<div class="section-block"><h3><span class="num">▤</span>Exemplo prático</h3>${ex.note?`<p class="example-note">${ex.note}</p>`:""}<div class="example-group">${parts.join("")}</div></div>`;
}
function completeLesson(i){state.completed[i]=true;state.currentLesson=Math.min(i+1,modules.length-1);save();toast("Parte concluída. Excelente — continue para a próxima.");renderLessons();renderDashboard()}

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
 const s=state.quizSession;const acc=Math.round(s.correct/s.answered*100)||0;state.quizHistory.unshift({date:Date.now(),type:s.type,title:s.title,chapterIndex:s.chapterIndex,correct:s.correct,total:s.answered,accuracy:acc});state.quizHistory=state.quizHistory.slice(0,20);
 state.lastSession={pool:s.pool,type:s.type,title:s.title,chapterIndex:s.chapterIndex};
 save();
 const label=acc>=90?"Excelente domínio":acc>=70?"Bom desempenho":"Hora de revisar e tentar novamente";
 $("#quizShell").innerHTML=`<div class="score-card"><span class="eyebrow">DESEMPENHO DA SESSÃO</span><strong>${acc}%</strong><h2>${escapeHtml(s.title)}</h2><p>${label}. Você acertou <b>${s.correct}</b> de <b>${s.answered}</b> questões.</p><div class="metric-cards"><div><small>Acertos</small><b>${s.correct}</b></div><div><small>Erros</small><b>${s.answered-s.correct}</b></div><div><small>Precisão</small><b>${acc}%</b></div></div><div class="result-actions"><button class="primary-btn" onclick="newQuizSameType()">↻ Novo quiz (questões diferentes)</button><button class="secondary-btn" onclick="repeatLastSession()">↺ Refazer estas mesmas questões</button><button class="ghost-btn" onclick="renderQuizHome()">Escolher outro modo</button></div></div>`;
 delete state.quizSession;
}
function newQuizSameType(){const last=state.quizHistory[0];if(last?.type==="chapter"&&Number.isInteger(last.chapterIndex))startChapterQuiz(last.chapterIndex);else startGlobalQuiz()}
function repeatLastSession(){
 const ls=state.lastSession;if(!ls){newQuizSameType();return}
 if(ls.type==="chapter")showView("quiz");
 state.quizSession={pool:ls.pool,pos:0,correct:0,answered:0,type:ls.type,title:ls.title,chapterIndex:ls.chapterIndex};
 renderQuizQuestion();
}

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
  ["Transparência (RGBA)","rgba(37, 99, 235, .35)","background: rgba(37, 99, 235, .35);","RGBA permite controlar o canal alpha (transparência) de 0 a 1."],
  ["Vermelho","#ef4444","background-color: #ef4444;","Ótimo para alertas, erros e chamadas de atenção.","#ef4444"],
  ["Vermelho escuro","#b91c1c","background-color: #b91c1c;","Uma variação mais séria do vermelho.","#b91c1c"],
  ["Rosa","#ec4899","background-color: #ec4899;","Cor vibrante, comum em destaques e selos.","#ec4899"],
  ["Roxo","#8b5cf6","background-color: #8b5cf6;","Transmite criatividade; comum em marcas modernas.","#8b5cf6"],
  ["Índigo","#6366f1","background-color: #6366f1;","Azul-arroxeado equilibrado, muito usado em interfaces.","#6366f1"],
  ["Azul","#3b82f6","background-color: #3b82f6;","Cor clássica para links e ações primárias.","#3b82f6"],
  ["Azul claro","#60a5fa","background-color: #60a5fa;","Uma variação mais suave do azul.","#60a5fa"],
  ["Ciano","#06b6d4","background-color: #06b6d4;","Fresco e moderno, bom para destaques.","#06b6d4"],
  ["Teal (verde-azulado)","#0f766e","background-color: #0f766e;","Combina bem com fundos claros e escuros.","#0f766e"],
  ["Verde","#22c55e","background-color: #22c55e;","Associado a sucesso, confirmação e crescimento.","#22c55e"],
  ["Verde lima","#84cc16","background-color: #84cc16;","Uma cor vibrante e energética.","#84cc16"],
  ["Amarelo","#eab308","background-color: #eab308;","Chama atenção; use com moderação em textos.","#eab308"],
  ["Âmbar","#f59e0b","background-color: #f59e0b;","Bom para avisos e alertas de atenção.","#f59e0b"],
  ["Laranja","#f97316","background-color: #f97316;","Energética, ótima para botões de ação.","#f97316"],
  ["Marrom","#78350f","background-color: #78350f;","Tom terroso, usado em temas mais naturais.","#78350f"],
  ["Cinza claro","#e2e8f0","background-color: #e2e8f0;","Ótimo para fundos neutros e divisores sutis.","#e2e8f0"],
  ["Cinza","#94a3b8","background-color: #94a3b8;","Boa opção para textos secundários.","#94a3b8"],
  ["Cinza escuro","#1e293b","background-color: #1e293b;","Comum em temas escuros como fundo de painel.","#1e293b"],
  ["Preto","#000000","background-color: #000000;","Use com cautela — prefira cinza escuro em telas grandes de texto.","#000000"],
  ["Branco","#ffffff","background-color: #ffffff;","Fundo neutro clássico para temas claros.","#ffffff"]
 ]},
 {cat:"Gradientes",items:[
  ["Degradê azul → ciano","linear-gradient(135deg,#3b82f6,#06b6d4)","background: linear-gradient(135deg, #3b82f6, #06b6d4);","Ótimo para banners e botões de destaque.","linear-gradient(135deg,#3b82f6,#06b6d4)"],
  ["Degradê roxo → rosa","linear-gradient(135deg,#8b5cf6,#ec4899)","background: linear-gradient(135deg, #8b5cf6, #ec4899);","Combinação vibrante para seções de destaque.","linear-gradient(135deg,#8b5cf6,#ec4899)"],
  ["Degradê verde → ciano","linear-gradient(135deg,#22c55e,#06b6d4)","background: linear-gradient(135deg, #22c55e, #06b6d4);","Transmite frescor; funciona bem em cards.","linear-gradient(135deg,#22c55e,#06b6d4)"],
  ["Degradê pôr do sol","linear-gradient(135deg,#f97316,#ec4899)","background: linear-gradient(135deg, #f97316, #ec4899);","Cores quentes, ótimo para heróis chamativos.","linear-gradient(135deg,#f97316,#ec4899)"],
  ["Degradê escuro","linear-gradient(135deg,#0b1020,#1e293b)","background: linear-gradient(135deg, #0b1020, #1e293b);","Sutil, ideal para fundos de seções escuras.","linear-gradient(135deg,#0b1020,#1e293b)"],
  ["Degradê radial","radial-gradient(circle,#3b82f6,#0b1020)","background: radial-gradient(circle, #3b82f6, #0b1020);","Parte de um ponto central e se espalha para fora — bom para holofotes e destaques.","radial-gradient(circle,#3b82f6,#0b1020)"],
  ["Degradê com 3 cores","linear-gradient com 3 paradas","background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);","Use porcentagens para controlar onde cada cor começa e termina.","linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899)"],
  ["Texto com gradiente","background-clip: text","background: linear-gradient(135deg,#3b82f6,#ec4899);\n-webkit-background-clip: text;\n-webkit-text-fill-color: transparent;","Aplica o degradê diretamente no texto em vez do fundo."]
 ]},
 {cat:"Fontes",items:[
  ["Tamanho","font-size: 1rem;","font-size: 1rem;","Use rem para manter o tamanho relativo à raiz."],
  ["Peso","font-weight: 700;","font-weight: 700;","400 é regular; 600/700 deixam o texto mais forte."],
  ["Itálico","font-style: italic;","font-style: italic;","Aplica estilo itálico."],
  ["Sublinhado","text-decoration: underline;","text-decoration: underline;","Adiciona sublinhado ao texto."],
  ["Remover sublinhado","text-decoration: none;","text-decoration: none;","Comum em links para removerem o sublinhado padrão."],
  ["Altura da linha","line-height: 1.6;","line-height: 1.6;","Controla o espaço vertical entre linhas."],
  ["Fonte do sistema","font-family: system-ui, sans-serif;","font-family: system-ui, sans-serif;","Usa a fonte nativa do sistema operacional — carrega mais rápido."],
  ["Pilha de fontes com fallback","font-family: 'Inter', Arial, sans-serif;","font-family: 'Inter', Arial, sans-serif;","Se a primeira fonte não carregar, o navegador tenta a próxima da lista."],
  ["Alinhamento de texto","text-align: center;","text-align: center;","Alinha o texto: left, center, right ou justify."],
  ["Espaçamento entre letras","letter-spacing: .05em;","letter-spacing: .05em;","Útil em títulos maiúsculos e rótulos pequenos."],
  ["Maiúsculas via CSS","text-transform: uppercase;","text-transform: uppercase;","Transforma o texto sem alterar o HTML original."],
  ["Sombra no texto","text-shadow: 0 2px 6px rgba(0,0,0,.3);","text-shadow: 0 2px 6px rgba(0,0,0,.3);","Adiciona profundidade ao texto, útil sobre imagens de fundo."],
  ["Impedir quebra de linha","white-space: nowrap;","white-space: nowrap;","Mantém o texto em uma única linha, mesmo que ultrapasse o espaço."],
  ["Quebrar palavras longas","word-break: break-word;","word-break: break-word;","Evita que uma palavra ou URL muito longa estoure o layout."]
 ]},
 {cat:"Espaçamento",items:[
  ["Padding","padding: 1rem;","padding: 1rem;","Espaço interno entre conteúdo e borda."],
  ["Margin","margin: 1rem;","margin: 1rem;","Espaço externo ao redor do elemento."],
  ["Gap","gap: 1rem;","gap: 1rem;","Espaço entre itens de Flexbox ou Grid."],
  ["Padding só nas laterais","padding: 0 20px;","padding: 0 20px;","Atalho: topo/baixo 0, esquerda/direita 20px."],
  ["Centralizar bloco","margin: 0 auto;","margin: 0 auto;","Centraliza horizontalmente um elemento com largura definida."],
  ["Espaço só embaixo","margin-bottom: 16px;","margin-bottom: 16px;","Empurra o próximo elemento pra baixo."],
  ["Margin negativa","margin-top: -10px;","margin-top: -10px;","Aproxima elementos sobrepondo levemente o espaço padrão."]
 ]},
 {cat:"Bordas",items:[
  ["Borda simples","border: 1px solid #d0d5dd;","border: 1px solid #d0d5dd;","Contorno básico ao redor do elemento."],
  ["Arredondamento total","border-radius: 999px;","border-radius: 999px;","Cria formato de pílula ou círculo perfeito (em quadrados)."],
  ["Arredondamento parcial","border-radius: 12px 12px 0 0;","border-radius: 12px 12px 0 0;","Arredonda só os cantos de cima."],
  ["Borda só embaixo","border-bottom: 2px solid #2563eb;","border-bottom: 2px solid #2563eb;","Comum em abas e indicadores de seleção."],
  ["Contorno de foco","outline: 2px solid #2563eb;","outline: 2px solid #2563eb;","Não ocupa espaço no layout como a borda comum."],
  ["Borda tracejada","border: 2px dashed #94a3b8;","border: 2px dashed #94a3b8;","Boa para áreas de upload ou zonas de destaque leve."]
 ]},
 {cat:"Efeitos",items:[
  ["Sombra padrão","box-shadow: 0 10px 30px rgba(0,0,0,.12);","box-shadow: 0 10px 30px rgba(0,0,0,.12);","Cria profundidade visual equilibrada."],
  ["Sombra leve","box-shadow: 0 4px 12px rgba(0,0,0,.08);","box-shadow: 0 4px 12px rgba(0,0,0,.08);","Sombra sutil, boa para cards discretos."],
  ["Sombra forte","box-shadow: 0 20px 45px rgba(0,0,0,.28);","box-shadow: 0 20px 45px rgba(0,0,0,.28);","Sombra intensa, cria bastante profundidade."],
  ["Sombra colorida","box-shadow: 0 12px 30px rgba(37,99,235,.35);","box-shadow: 0 12px 30px rgba(37,99,235,.35);","Usa a cor do próprio elemento na sombra, efeito moderno."],
  ["Sombra interna","box-shadow: inset 0 2px 6px rgba(0,0,0,.2);","box-shadow: inset 0 2px 6px rgba(0,0,0,.2);","A palavra inset faz a sombra aparecer para dentro do elemento."],
  ["Transição","transition: .2s ease;","transition: .2s ease;","Suaviza mudanças de propriedades."],
  ["Hover com movimento","transform: translateY(-4px);","transform: translateY(-4px);","Geralmente usado dentro de :hover para dar sensação de elevação."],
  ["Opacidade","opacity: .6;","opacity: .6;","Controla a transparência geral do elemento, de 0 a 1."],
  ["Desfoque de fundo","backdrop-filter: blur(8px);","backdrop-filter: blur(8px);","Efeito vidro fosco atrás de um elemento semitransparente."],
  ["Desfoque no elemento","filter: blur(4px);","filter: blur(4px);","Desfoca o próprio elemento (imagem, card, etc)."],
  ["Escala de cinza","filter: grayscale(100%);","filter: grayscale(100%);","Remove a cor da imagem; comum em galerias com hover colorido."],
  ["Brilho","filter: brightness(1.1);","filter: brightness(1.1);","Valores acima de 1 clareiam, abaixo de 1 escurecem."],
  ["Contraste","filter: contrast(1.2);","filter: contrast(1.2);","Aumenta ou diminui a diferença entre claros e escuros."],
  ["Mesclar cores do fundo","mix-blend-mode: multiply;","mix-blend-mode: multiply;","Mescla a cor do elemento com o que está atrás dele."]
 ]},
 {cat:"Transformações",items:[
  ["Girar elemento","transform: rotate(8deg);","transform: rotate(8deg);","Rotaciona o elemento em graus."],
  ["Aumentar no hover","transform: scale(1.05);","transform: scale(1.05);","Cresce levemente o elemento — efeito clássico de hover em cards."],
  ["Inclinar elemento","transform: skew(-6deg);","transform: skew(-6deg);","Inclina o elemento nos eixos X/Y, criando efeito dinâmico."],
  ["Mover sem afetar o layout","transform: translate(10px, -5px);","transform: translate(10px, -5px);","Desloca o elemento visualmente sem empurrar os vizinhos."],
  ["Ponto de origem da transformação","transform-origin: top left;","transform-origin: top left;","Define a partir de qual ponto o rotate/scale acontece."],
  ["Combinar transformações","transform: rotate(5deg) scale(1.1);","transform: rotate(5deg) scale(1.1);","Várias transformações podem ser aplicadas juntas, separadas por espaço."],
  ["Animação simples","@keyframes","@keyframes surgir {\n  from { opacity: 0; transform: translateY(10px); }\n  to { opacity: 1; transform: translateY(0); }\n}","Define os passos de uma animação; aplique com a propriedade animation."],
  ["Aplicar animação","animation: surgir .4s ease;","animation: surgir .4s ease;","Usa um @keyframes já definido, com duração e curva de tempo."],
  ["Animação em loop","animation: girar 2s linear infinite;","animation: girar 2s linear infinite;","infinite repete a animação para sempre; útil para spinners de carregamento."],
  ["Atraso na transição","transition-delay: .15s;","transition-delay: .15s;","Atrasa o início de uma transição — útil para animações em sequência."]
 ]},
 {cat:"Posicionamento",items:[
  ["Relativo","position: relative;","position: relative;","Serve de referência para filhos com position: absolute."],
  ["Absoluto","position: absolute;","position: absolute;","Sai do fluxo normal e se posiciona em relação ao pai posicionado."],
  ["Fixo","position: fixed;","position: fixed;","Fica fixo na tela mesmo com a rolagem da página."],
  ["Grudento (sticky)","position: sticky;","position: sticky;","Rola normalmente até atingir um limite, depois gruda na tela."],
  ["Camadas (z-index)","z-index: 10;","z-index: 10;","Controla qual elemento fica por cima; só funciona em elementos posicionados."]
 ]},
 {cat:"Cursor e overflow",items:[
  ["Cursor de clique","cursor: pointer;","cursor: pointer;","Indica visualmente que o elemento é clicável."],
  ["Esconder excesso","overflow: hidden;","overflow: hidden;","Esconde qualquer conteúdo que ultrapasse os limites da caixa."],
  ["Rolagem automática","overflow: auto;","overflow: auto;","Mostra barra de rolagem só quando necessário."],
  ["Texto cortado com reticências","text-overflow: ellipsis;","white-space: nowrap; overflow: hidden; text-overflow: ellipsis;","Corta o texto longo em uma linha e adiciona “...” no final."]
 ]},
 {cat:"Layout",items:[
  ["Flexbox","display: flex;","display: flex;","Ativa layout Flexbox."],
  ["Centralizar Flex","justify-content + align-items","display:flex; justify-content:center; align-items:center;","Centraliza nos dois eixos quando o contexto permite."],
  ["Flexbox em coluna","flex-direction: column;","display:flex; flex-direction:column;","Empilha os itens na vertical em vez da horizontal."],
  ["Permitir quebra de linha no flex","flex-wrap: wrap;","flex-wrap: wrap;","Deixa os itens passarem para a próxima linha quando não cabem mais."],
  ["Distribuir espaço entre itens","justify-content: space-between;","justify-content: space-between;","Empurra o primeiro item para o início e o último para o fim, distribuindo o resto."],
  ["Crescer para preencher espaço","flex: 1;","flex: 1;","Faz o item crescer para ocupar o espaço disponível no flex container."],
  ["Alinhar múltiplas linhas","align-content: center;","align-content: center;","Controla o alinhamento de várias linhas quando há flex-wrap."],
  ["Grid","display: grid;","display: grid;","Ativa CSS Grid."],
  ["Colunas Grid","repeat(3, 1fr)","grid-template-columns: repeat(3, 1fr);","Cria três colunas proporcionais."],
  ["Grid responsivo automático","repeat(auto-fit, minmax(...))","grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));","Cria colunas automaticamente, sem precisar de media query."],
  ["Áreas nomeadas de Grid","grid-template-areas","grid-template-areas:\n  \"header header\"\n  \"menu   conteudo\";","Desenha o layout com nomes, ligados via grid-area em cada filho."],
  ["Item ocupando várias colunas","grid-column: span 2;","grid-column: span 2;","Faz um item do grid ocupar duas colunas em vez de uma."],
  ["Centralizar em Grid","place-items: center;","place-items: center;","Atalho que centraliza nos dois eixos dentro de um grid container."],
  ["Múltiplas colunas de texto","columns: 3;","columns: 3;","Divide o texto em colunas, como um jornal."],
  ["Proporção fixa","aspect-ratio: 16 / 9;","aspect-ratio: 16 / 9;","Mantém a proporção largura/altura mesmo quando o tamanho muda."],
  ["Ocultar elemento","display: none;","display: none;","Remove o elemento completamente do layout."]
 ]},
 {cat:"Seletores CSS",items:[
  ["Seletor de classe",".minha-classe",".minha-classe { color: blue; }","Aplica o estilo a qualquer elemento com essa classe."],
  ["Seletor de ID","#meu-id","#meu-id { color: blue; }","Aplica o estilo a um único elemento — use com moderação."],
  ["Seletor descendente",".card p",".card p { color: gray; }","Seleciona todo <p> que esteja dentro de um .card, em qualquer profundidade."],
  ["Filho direto",".card > p",".card > p { color: gray; }","Seleciona apenas os <p> que são filhos diretos de .card."],
  ["Irmão adjacente","h2 + p","h2 + p { margin-top: 0; }","Seleciona o elemento que vem logo depois, no mesmo nível."],
  ["Todos os irmãos seguintes","h2 ~ p","h2 ~ p { color: gray; }","Seleciona todos os <p> que vêm depois de h2 no mesmo nível."],
  ["Seletor de atributo","[type=\"email\"]","input[type=\"email\"] { border-color: blue; }","Seleciona elementos com base em um atributo e valor."],
  ["Agrupar seletores","h1, h2, h3","h1, h2, h3 { font-family: sans-serif; }","Aplica o mesmo estilo a vários seletores de uma vez, separados por vírgula."],
  ["Primeiro filho",":first-child",".lista li:first-child { font-weight: bold; }","Seleciona o elemento apenas se for o primeiro filho do seu pai."],
  ["Último filho",":last-child",".lista li:last-child { border: 0; }","Seleciona o elemento apenas se for o último filho do seu pai."],
  ["Elemento específico por posição",":nth-child(2)","tr:nth-child(even) { background: #f4f4f4; }","Seleciona elementos por posição; aceita números, even, odd ou fórmulas."],
  ["Negação",":not(...)",".btn:not(.desativado) { cursor: pointer; }","Seleciona tudo que NÃO casa com o seletor dentro dos parênteses."],
  ["Pseudo-elemento antes","::before",".aviso::before { content: \"⚠ \"; }","Insere conteúdo gerado antes do elemento, via CSS."],
  ["Pseudo-elemento depois","::after",".externo::after { content: \" ↗\"; }","Insere conteúdo gerado depois do elemento, via CSS."],
  ["Seletor universal","*","* { box-sizing: border-box; }","Seleciona absolutamente todos os elementos da página."]
 ]},
 {cat:"Variáveis CSS",items:[
  ["Declarar variável global","--cor-primaria",":root {\n  --cor-primaria: #3b82f6;\n}","Variáveis definidas em :root ficam disponíveis em toda a página."],
  ["Usar variável","var(--cor-primaria)","color: var(--cor-primaria);","Aplica o valor guardado na variável CSS."],
  ["Variável com valor padrão","var(--cor, azul)","color: var(--cor-secundaria, #64748b);","Se a variável não existir, usa o valor depois da vírgula como padrão."],
  ["Redefinir variável num escopo","--espaco local",".card {\n  --espaco: 12px;\n  padding: var(--espaco);\n}","A mesma variável pode ter valores diferentes dentro de contextos específicos."]
 ]},
 {cat:"Box Model e Display",items:[
  ["Incluir borda e padding na largura","box-sizing: border-box;","box-sizing: border-box;","Faz o width definido já incluir padding e borda — muito recomendado usar em tudo (*)."],
  ["Bloco","display: block;","display: block;","Ocupa a linha toda; aceita width, height, margin e padding em todas as direções."],
  ["Em linha","display: inline;","display: inline;","Ocupa só o espaço do conteúdo; ignora width, height e margin vertical."],
  ["Em linha com dimensões","display: inline-block;","display: inline-block;","Fica na mesma linha que os vizinhos, mas aceita width e height."],
  ["Largura total","width: 100%;","width: 100%;","Faz o elemento ocupar toda a largura disponível do pai."],
  ["Largura máxima","max-width: 600px;","max-width: 600px;","Impede que o elemento fique mais largo que o valor definido."],
  ["Altura da tela inteira","height: 100vh;","height: 100vh;","100% da altura visível da janela do navegador."],
  ["Caixa invisível mas ocupando espaço","visibility: hidden;","visibility: hidden;","Diferente de display:none — o espaço do elemento continua reservado no layout."]
 ]},
 {cat:"Responsividade",items:[
  ["Media Query (tablet)","@media (min-width: 768px)","@media (min-width: 768px) { ... }","Ponto de quebra comum para tablets."],
  ["Media Query (desktop)","@media (min-width: 1024px)","@media (min-width: 1024px) { ... }","Ponto de quebra comum para telas maiores."],
  ["Media Query (celular pequeno)","@media (max-width: 480px)","@media (max-width: 480px) { ... }","Ajustes finos para telas bem pequenas."],
  ["Imagem responsiva","max-width: 100%","img { max-width: 100%; height: auto; }","Evita que a imagem ultrapasse o container."],
  ["Ocultar em telas pequenas","display: none dentro de media query","@media (max-width: 600px) {\n  .apenas-desktop { display: none; }\n}","Esconde um elemento apenas abaixo de um tamanho de tela."],
  ["Fonte fluida sem media query","clamp(min, ideal, max)","font-size: clamp(1.2rem, 4vw, 2.5rem);","O tamanho cresce com a tela, mas nunca fica menor nem maior que os limites."],
  ["Orientação da tela","@media (orientation: landscape)","@media (orientation: landscape) { ... }","Aplica estilos conforme o celular está na horizontal ou vertical."],
  ["Media Query combinada","min-width e max-width juntos","@media (min-width: 768px) and (max-width: 1023px) { ... }","Aplica estilos só dentro de uma faixa específica de largura, como tablets."]
 ]},
 {cat:"Unidades",items:[
  ["Pixel","16px","font-size: 16px;","Unidade fixa, não escala com preferências do usuário."],
  ["Rem","1rem","font-size: 1rem;","Relativa ao tamanho de fonte do elemento raiz (html)."],
  ["Em","1.2em","padding: 1.2em;","Relativa ao tamanho de fonte do próprio elemento (ou do pai, em alguns casos)."],
  ["Porcentagem","50%","width: 50%;","Relativa ao tamanho do elemento pai."],
  ["Viewport width","50vw","width: 50vw;","50% da largura visível da tela."],
  ["Viewport height","100vh","height: 100vh;","100% da altura visível da tela."],
  ["Fração do grid","1fr","grid-template-columns: 1fr 2fr;","Só existe dentro do Grid; representa uma fração do espaço disponível."],
  ["Character unit","20ch","max-width: 20ch;","Baseada na largura do caractere “0” da fonte — ótima para limitar linhas de texto."],
  ["Graus","45deg","transform: rotate(45deg);","Usada em rotação e em direções de gradiente."],
  ["Segundos",".3s","transition: .3s ease;","Usada para duração de transições e animações."],
  ["Valor sem unidade (zero)","margin: 0;","margin: 0;","Zero nunca precisa de unidade em CSS."]
 ]},
 {cat:"Acessibilidade",items:[
  ["Texto alternativo","alt=\"...\"","<img src=\"foto.jpg\" alt=\"Descrição da imagem\">","Essencial para leitores de tela e para quando a imagem falha ao carregar."],
  ["Rótulo acessível","aria-label=\"...\"","<button aria-label=\"Fechar\">×</button>","Dá nome a elementos sem texto visível, como ícones."],
  ["Ordem de navegação por teclado","tabindex=\"0\"","<div tabindex=\"0\">Foco por teclado</div>","Permite que um elemento não interativo receba foco via Tab."],
  ["Foco visível","outline no :focus-visible",":focus-visible { outline: 2px solid #2563eb; }","Mostra contorno de foco só na navegação por teclado, não no clique do mouse."],
  ["Associar label e input","for + id","<label for=\"nome\">Nome</label>\n<input id=\"nome\">","O for da label deve ser igual ao id do input correspondente."],
  ["Esconder de todos, exceto leitores de tela","aria-hidden vs sr-only","<span class=\"sr-only\">Menu principal</span>","aria-hidden=\"true\" esconde do leitor de tela; a classe sr-only (custom) esconde visualmente mas mantém acessível."],
  ["Papel semântico extra","role=\"...\"","<div role=\"alert\">Erro ao salvar!</div>","Informa a leitores de tela o propósito de um elemento genérico."],
  ["Respeitar preferência de menos movimento","prefers-reduced-motion","@media (prefers-reduced-motion: reduce) {\n  * { animation: none !important; }\n}","Desativa animações para usuários sensíveis a movimento."]
 ]},
 {cat:"HTML — Estrutura e texto",items:[
  ["Estrutura mínima do documento","<!DOCTYPE html>","<!DOCTYPE html>\n<html lang=\"pt-BR\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Página</title>\n</head>\n<body>\n\n</body>\n</html>","O esqueleto que todo documento HTML5 deve ter."],
  ["Meta viewport (responsivo)","<meta name=\"viewport\">","<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">","Essencial para o site se adaptar corretamente a telas de celular."],
  ["Meta charset","<meta charset=\"UTF-8\">","<meta charset=\"UTF-8\">","Garante que acentos e caracteres especiais apareçam corretamente."],
  ["Título da página","<h1>...</h1>","<h1>Título principal</h1>","Use para o título principal da página — apenas um h1 por página."],
  ["Cabeçalho da página","<header>","<header>\n  <h1>Logo</h1>\n</header>","Área de topo com logo, título ou menu principal."],
  ["Menu de navegação","<nav>","<nav>\n  <a href=\"#\">Início</a>\n  <a href=\"#\">Sobre</a>\n</nav>","Agrupa os principais links de navegação do site."],
  ["Conteúdo principal","<main>","<main>\n  \n</main>","Deve haver apenas um <main> por página, com o conteúdo central."],
  ["Seção de conteúdo","<section>","<section>\n  <h2>Sobre nós</h2>\n</section>","Agrupa um bloco de conteúdo relacionado, geralmente com seu próprio título."],
  ["Artigo independente","<article>","<article>\n  <h2>Título do post</h2>\n  <p>Texto...</p>\n</article>","Conteúdo que faz sentido sozinho, como um post de blog ou notícia."],
  ["Conteúdo lateral","<aside>","<aside>\n  <p>Anúncio ou link relacionado</p>\n</aside>","Conteúdo complementar, não essencial para o entendimento principal."],
  ["Rodapé","<footer>","<footer>\n  <p>&copy; 2026 Minha Empresa</p>\n</footer>","Área final da página, com direitos autorais ou links secundários."],
  ["Link","<a href=\"...\">","<a href=\"https://exemplo.com\">Visitar</a>","Cria hiperlinks; use target=\"_blank\" para abrir em nova aba."],
  ["Parágrafo","<p>","<p>Texto do parágrafo.</p>","Elemento de bloco para blocos de texto corrido."],
  ["Negrito com importância","<strong>","<strong>Texto importante</strong>","Diferente de <b>: <strong> indica importância semântica, não só visual."],
  ["Ênfase (itálico semântico)","<em>","<em>Texto com ênfase</em>","Indica ênfase no tom da frase, lido de forma diferente por leitores de tela."],
  ["Texto em destaque (marcador)","<mark>","<mark>Texto destacado</mark>","Realça um trecho, como um marcador de texto amarelo."],
  ["Texto pequeno","<small>","<small>Termos e condições</small>","Usado para avisos legais, créditos ou texto secundário."],
  ["Citação em bloco","<blockquote>","<blockquote>\n  <p>Uma citação longa.</p>\n</blockquote>","Para citações de outras fontes, geralmente com recuo visual."],
  ["Abreviação com explicação","<abbr>","<abbr title=\"HyperText Markup Language\">HTML</abbr>","O atributo title mostra a explicação completa ao passar o mouse."],
  ["Código inline","<code>","<code>const x = 1;</code>","Para trechos curtos de código dentro de um parágrafo."],
  ["Bloco de código pré-formatado","<pre>","<pre><code>function soma(a, b) {\n  return a + b;\n}</code></pre>","Preserva espaços e quebras de linha exatamente como escritos."],
  ["Linha divisória","<hr>","<hr>","Cria uma linha horizontal separando seções de conteúdo."],
  ["Quebra de linha","<br>","Linha 1<br>Linha 2","Força uma quebra de linha simples, sem criar novo parágrafo."],
  ["Lista não ordenada","<ul><li>...</li></ul>","<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>","Cria uma lista com marcadores."],
  ["Lista ordenada","<ol><li>...</li></ol>","<ol>\n  <li>Primeiro passo</li>\n  <li>Segundo passo</li>\n</ol>","Cria uma lista numerada, ideal para instruções em sequência."],
  ["Lista de definições","<dl><dt><dd>","<dl>\n  <dt>HTML</dt>\n  <dd>Linguagem de marcação.</dd>\n</dl>","dt é o termo, dd é a definição — bom para glossários e FAQs."],
  ["Comentário HTML","<!-- ... -->","<!-- Isto é um comentário, não aparece na página -->","Útil para anotações no código sem afetar o resultado visual."],
  ["Elemento genérico de bloco","<div>","<div class=\"caixa\">\n  \n</div>","Sem significado semântico próprio — use quando nenhuma tag específica se encaixa."],
  ["Elemento genérico em linha","<span>","<span class=\"destaque\">texto</span>","Como o div, mas em linha — útil para estilizar um trecho dentro de um parágrafo."],
  ["Data e hora legíveis pela máquina","<time>","<time datetime=\"2026-06-09\">9 de junho</time>","O atributo datetime deixa a data em formato padrão, mesmo mostrando texto livre."],
  ["Figura com legenda","<figure><figcaption>","<figure>\n  <img src=\"grafico.png\" alt=\"Gráfico de vendas\">\n  <figcaption>Vendas em 2026</figcaption>\n</figure>","Agrupa uma imagem (ou gráfico/código) com sua legenda oficial."],
  ["Conteúdo expansível nativo","<details><summary>","<details>\n  <summary>Clique para expandir</summary>\n  <p>Conteúdo escondido.</p>\n</details>","Cria um acordeão funcional sem precisar de JavaScript."]
 ]},
 {cat:"HTML — Formulários",items:[
  ["Formulário","<form>","<form action=\"/enviar\" method=\"POST\">\n  \n</form>","action define para onde os dados vão; method define como são enviados."],
  ["Campo de texto","<input type=\"text\">","<input type=\"text\" placeholder=\"Seu nome\">","O tipo mais básico de campo de entrada."],
  ["Campo de e-mail","<input type=\"email\">","<input type=\"email\" placeholder=\"seu@email.com\">","O navegador valida automaticamente o formato de e-mail."],
  ["Campo de senha","<input type=\"password\">","<input type=\"password\">","Oculta os caracteres digitados com pontos ou asteriscos."],
  ["Campo numérico","<input type=\"number\">","<input type=\"number\" min=\"0\" max=\"100\">","Mostra setas de incremento e aceita min, max e step."],
  ["Campo de data","<input type=\"date\">","<input type=\"date\">","Abre um seletor de calendário nativo do navegador."],
  ["Caixa de seleção","<input type=\"checkbox\">","<input type=\"checkbox\" id=\"aceite\">\n<label for=\"aceite\">Aceito os termos</label>","Permite selecionar uma ou mais opções independentes."],
  ["Botão de opção único","<input type=\"radio\">","<input type=\"radio\" name=\"plano\" value=\"basico\"> Básico\n<input type=\"radio\" name=\"plano\" value=\"pro\"> Pro","Use o mesmo name em todas as opções para que sejam mutuamente exclusivas."],
  ["Envio de arquivo","<input type=\"file\">","<input type=\"file\" accept=\"image/*\">","Permite ao usuário selecionar um arquivo do dispositivo."],
  ["Controle deslizante","<input type=\"range\">","<input type=\"range\" min=\"0\" max=\"10\">","Um slider visual para escolher um valor dentro de um intervalo."],
  ["Seletor de cor","<input type=\"color\">","<input type=\"color\" value=\"#3b82f6\">","Abre um seletor de cores nativo do sistema operacional."],
  ["Área de texto grande","<textarea>","<textarea rows=\"4\" placeholder=\"Sua mensagem\"></textarea>","Para textos longos, como mensagens ou comentários."],
  ["Lista suspensa","<select><option>","<select>\n  <option value=\"html\">HTML</option>\n  <option value=\"css\">CSS</option>\n</select>","Cria um menu de opções para o usuário escolher uma."],
  ["Sugestões de autocompletar","<datalist>","<input list=\"linguagens\">\n<datalist id=\"linguagens\">\n  <option value=\"HTML\">\n  <option value=\"CSS\">\n</datalist>","Combina um input de texto com uma lista de sugestões editável."],
  ["Agrupar campos do formulário","<fieldset><legend>","<fieldset>\n  <legend>Dados pessoais</legend>\n  \n</fieldset>","Agrupa campos relacionados visualmente, com um título (legend)."],
  ["Rótulo do campo","<label for=\"...\">","<label for=\"nome\">Nome</label>\n<input id=\"nome\" type=\"text\">","O for deve corresponder ao id do input associado."],
  ["Botão de enviar","<button type=\"submit\">","<button type=\"submit\">Enviar</button>","Envia o formulário quando clicado."],
  ["Botão comum","<button type=\"button\">","<button type=\"button\">Clique aqui</button>","Use type=\"button\" quando não estiver dentro de um formulário, ou não deva enviá-lo."],
  ["Campo obrigatório","required","<input type=\"text\" required>","Impede o envio do formulário se o campo estiver vazio."],
  ["Texto de exemplo no campo","placeholder=\"...\"","<input type=\"text\" placeholder=\"Digite seu nome\">","Some assim que o usuário começa a digitar — não substitui o label."]
 ]},
 {cat:"HTML — Mídia e tabelas",items:[
  ["Imagem","<img>","<img src=\"imagem.jpg\" alt=\"Descrição\">","Sempre inclua o atributo alt, mesmo que vazio para imagens decorativas."],
  ["Imagem com diferentes tamanhos","<picture><source>","<picture>\n  <source media=\"(min-width:800px)\" srcset=\"grande.jpg\">\n  <img src=\"pequena.jpg\" alt=\"Descrição\">\n</picture>","Serve imagens diferentes conforme o tamanho da tela."],
  ["Vídeo","<video>","<video src=\"video.mp4\" controls></video>","O atributo controls exibe play, pausa e volume."],
  ["Áudio","<audio>","<audio src=\"musica.mp3\" controls></audio>","Toca arquivos de áudio com os controles nativos do navegador."],
  ["Página incorporada (iframe)","<iframe>","<iframe src=\"https://exemplo.com\" title=\"Conteúdo externo\"></iframe>","Incorpora outra página dentro da atual — sempre inclua um title."],
  ["Tabela simples","<table>","<table>\n  <tr><th>Nome</th><th>Idade</th></tr>\n  <tr><td>Ana</td><td>28</td></tr>\n</table>","Estrutura básica de tabela com cabeçalho e uma linha de dados."],
  ["Tabela com thead/tbody","<thead><tbody>","<table>\n  <thead>\n    <tr><th>Produto</th><th>Preço</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Caneta</td><td>R$ 2</td></tr>\n  </tbody>\n</table>","Separa o cabeçalho do corpo da tabela — melhora semântica e estilização."],
  ["Célula ocupando várias colunas","colspan=\"2\"","<td colspan=\"2\">Ocupa duas colunas</td>","Faz uma célula se estender horizontalmente por mais de uma coluna."],
  ["Célula ocupando várias linhas","rowspan=\"2\"","<td rowspan=\"2\">Ocupa duas linhas</td>","Faz uma célula se estender verticalmente por mais de uma linha."],
  ["Janela modal nativa","<dialog>","<dialog open>\n  <p>Conteúdo do modal</p>\n</dialog>","Cria uma caixa de diálogo nativa, sem precisar construir do zero com CSS/JS."],
  ["Atributo de dado customizado","data-*","<div data-id=\"42\" data-status=\"ativo\"></div>","Guarda informações extras no próprio HTML, acessíveis via JavaScript (dataset)."]
 ]},
 {cat:"JavaScript",items:[
  ["Selecionar elemento","querySelector","const el = document.querySelector('.card');","Seleciona o primeiro elemento que corresponde ao seletor."],
  ["Selecionar vários","querySelectorAll","const cards = document.querySelectorAll('.card');","Retorna uma lista com todos os elementos que casam com o seletor."],
  ["Clique","addEventListener","button.addEventListener('click', () => {});","Registra uma função para responder a eventos."],
  ["Alterar texto","textContent","el.textContent = 'Novo texto';","Troca o conteúdo textual de um elemento."],
  ["Alternar classe","classList.toggle","el.classList.toggle('ativo');","Adiciona a classe se ela não existir, remove se já existir."],
  ["Verificar condição","if / else","if (condicao) {\n  // ...\n} else {\n  // ...\n}","Executa um bloco ou outro dependendo da condição."],
  ["Repetir itens","forEach","elementos.forEach(el => {\n  console.log(el);\n});","Percorre uma lista de elementos ou itens de um array."],
  ["Esperar a página carregar","DOMContentLoaded","document.addEventListener('DOMContentLoaded', () => {\n  // código aqui\n});","Garante que o HTML já foi carregado antes de manipular elementos."],
  ["Criar elemento novo","createElement","const div = document.createElement('div');\ndiv.textContent = 'Novo';\ndocument.body.appendChild(div);","Cria um elemento do zero e o insere na página via JavaScript."],
  ["Ler valor de um input","input.value","const nome = document.querySelector('#nome').value;","Pega o texto atual digitado em um campo de formulário."],
  ["Impedir envio padrão do formulário","preventDefault","form.addEventListener('submit', (e) => {\n  e.preventDefault();\n});","Impede o recarregamento da página ao enviar um formulário, útil para validar antes."]
 ]}
];
const referenceSynonyms={
 "tabela de cores":"cores paleta cor vermelho azul verde amarelo roxo rosa",
 "paleta de cores":"cores paleta cor",
 "sombra suave":"sombra leve suave",
 "sombra leve":"sombra leve suave",
 "sombra forte":"sombra forte intensa",
 "sombra colorida":"sombra colorida",
 "centralizar":"centralizar center margin auto flex",
 "gradiente":"gradiente degrade linear-gradient",
 "degrade":"gradiente degrade linear-gradient",
 "responsivo":"responsividade media query breakpoint",
 "responsividade":"responsividade media query breakpoint",
 "grid responsivo":"grid responsivo auto-fit minmax",
 "fonte":"fonte font tamanho peso",
 "espacamento":"espacamento padding margin gap",
 "animacao":"animacao transform keyframes transicao",
 "borda arredondada":"borda arredondamento radius",
 "acessibilidade":"acessibilidade alt aria label foco",
 "cursor":"cursor pointer overflow"
};
function normText(x){return (x||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}
let referenceCategory="Todos";
let referenceRenderedItems=[];
function renderCodeReference(){
 const grid=$("#referenceGrid"),cats=$("#referenceCategories"),countEl=$("#referenceCount");
 if(!grid||!cats)return;
 const allItems=codeReference.flatMap(g=>g.items.map(x=>({...x,cat:g.cat})));
 const rawQuery=($("#referenceSearch")?.value||"").trim();
 const query=normText(rawQuery);
 const catsList=["Todos",...codeReference.map(g=>g.cat)];
 cats.innerHTML=catsList.map(cat=>`<button class="reference-cat ${referenceCategory===cat?"active":""}" data-cat="${escapeHtml(cat)}">${escapeHtml(cat)}</button>`).join("");
 let items=allItems.filter(x=>referenceCategory==="Todos"||x.cat===referenceCategory);
 if(query){
   const expanded=normText(referenceSynonyms[query]||rawQuery);
   const words=expanded.split(/\s+/).filter(Boolean);
   items=items.map(x=>{
     const haystack=normText(x[0]+" "+x[1]+" "+x[3]+" "+x.cat);
     const score=words.reduce((n,w)=>n+(haystack.includes(w)?1:0),0);
     return {x,score};
   }).filter(o=>o.score>0).sort((a,b)=>b.score-a.score).map(o=>o.x);
 }
 referenceRenderedItems=items;
 if(countEl)countEl.textContent=(query||referenceCategory!=="Todos")?`${items.length} resultado${items.length===1?"":"s"} encontrado${items.length===1?"":"s"}`:`${items.length} itens no banco de referência`;
 grid.innerHTML=items.length?items.map((x,i)=>{
   const swatch=x[4];
   if(swatch){
     return `<article class="reference-card has-swatch">
       <span class="reference-tag">${escapeHtml(x.cat)}</span>
       <div class="reference-swatch-row"><span class="reference-swatch" style="background:${escapeHtml(swatch)}"></span><div class="reference-swatch-info"><h3>${escapeHtml(x[0])}</h3><small>${escapeHtml(x[1])}</small></div></div>
       <p>${escapeHtml(x[3])}</p>
       <button class="ghost-btn tiny" data-copy-ref="${i}">Copiar código</button>
     </article>`;
   }
   return `<article class="reference-card">
   <span class="reference-tag">${escapeHtml(x.cat)}</span><h3>${escapeHtml(x[0])}</h3>
   <code>${escapeHtml(x[1])}</code><p>${escapeHtml(x[3])}</p>
   <button class="ghost-btn tiny" data-copy-ref="${i}">Copiar código</button>
 </article>`;
 }).join(""):`<p class="muted-empty">Nenhuma informação encontrada. Tente "cor", "sombra", "centralizar" ou "gradiente".</p>`;
}
function setReferenceCategory(cat){referenceCategory=cat;renderCodeReference()}
function copyReferenceSnippet(i){
 const item=referenceRenderedItems[i];if(!item)return;
 const text=item[2];
 const done=()=>toast("Código copiado! Cole onde quiser com Ctrl+V.");
 if(navigator.clipboard?.writeText)navigator.clipboard.writeText(text).then(done).catch(()=>fallbackCopy(text,done));
 else fallbackCopy(text,done);
}
function fallbackCopy(text,done){
 const ta=document.createElement("textarea");
 ta.value=text;ta.style.position="fixed";ta.style.opacity="0";
 document.body.appendChild(ta);ta.select();
 try{document.execCommand("copy")}catch(e){}
 ta.remove();done();
}
$("#referenceGrid")?.addEventListener("click",e=>{
 const btn=e.target.closest("[data-copy-ref]");if(!btn)return;
 copyReferenceSnippet(Number(btn.dataset.copyRef));
});
$("#referenceCategories")?.addEventListener("click",e=>{
 const btn=e.target.closest("[data-cat]");if(!btn)return;
 setReferenceCategory(btn.dataset.cat);
});
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
$("#menuBtn").addEventListener("click",()=>$("#topnav").classList.toggle("open"));
document.addEventListener("click",e=>{
 const nav=$("#topnav"),btn=$("#menuBtn");
 if(nav.classList.contains("open")&&!nav.contains(e.target)&&!btn.contains(e.target))nav.classList.remove("open");
});
$("#resetProgress").addEventListener("click",()=>{if(confirm("Reiniciar progresso, desempenho e checklists? As anotações, seus projetos salvos e a Oficina de código serão preservados.")){state.completed={};state.quiz={correct:0,total:0};state.quizHistory=[];state.currentLesson=0;state.challengeChecks={};state.challengeDrafts={};state.challengeGrades={};state.activeChallenge=null;delete state.quizSession;delete state.lastSession;save();renderDashboard();toast("Progresso reiniciado.")}});
$("#referenceSearch")?.addEventListener("input",()=>renderCodeReference());
$("#referenceToggle")?.addEventListener("click",()=>{
 const panel=$("#codeReferencePanel"),btn=$("#referenceToggle");if(!panel||!btn)return;
 const collapsed=panel.classList.toggle("collapsed");
 btn.textContent=collapsed?"Expandir ▾":"Recolher ▴";
 btn.setAttribute("aria-expanded",collapsed?"false":"true");
});
$("#globalSearch").addEventListener("input",e=>{const q=e.target.value.trim().toLowerCase(),box=$("#searchResults");if(!q){box.classList.add("hidden");return}const results=[];modules.forEach((m,i)=>{if((m.title+" "+m.short).toLowerCase().includes(q))results.push({type:"Aula",i,title:m.title,text:m.short});m.lessons.forEach(l=>{if((l[0]+" "+l[1]).toLowerCase().includes(q))results.push({type:"Conceito",i,title:l[0],text:l[1]})})});globalQuestions.forEach(x=>{if(x[0].toLowerCase().includes(q))results.push({type:"Quiz",title:x[0],text:"Questão de recuperação ativa"})});box.innerHTML=results.slice(0,12).map(r=>`<div class="search-result" onclick="${r.i!==undefined?`openLesson(${r.i})`:"showView('quiz')"}"><small>${r.type}</small><strong>${r.title}</strong><p>${r.text}</p></div>`).join("")||`<div class="search-result"><p>Nenhum resultado.</p></div>`;box.classList.remove("hidden")});
$$("[data-challenge-editor]").forEach(b=>b.addEventListener("click",()=>switchChallengeEditor(b.dataset.challengeEditor)));
["html","css","js"].forEach(k=>$("#challenge-editor-"+k)?.addEventListener("input",()=>{challengeDraft();clearTimeout(window._challengeTimer);window._challengeTimer=setTimeout(runChallengeCode,180)}));
document.addEventListener("keydown",e=>{if(e.key==="/"&&document.activeElement.tagName!=="INPUT"&&document.activeElement.tagName!=="TEXTAREA"){e.preventDefault();$("#globalSearch").focus()}});

window.openLesson=openLesson;window.showView=showView;window.completeLesson=completeLesson;window.startChapterQuiz=startChapterQuiz;window.startGlobalQuiz=startGlobalQuiz;window.answerActiveQuiz=answerActiveQuiz;window.nextActiveQuiz=nextActiveQuiz;window.cancelQuiz=cancelQuiz;window.newQuizSameType=newQuizSameType;window.repeatLastSession=repeatLastSession;window.nextFlash=nextFlash;window.prevFlash=prevFlash;window.toggleChallenge=toggleChallenge;window.openChallenge=openChallenge;window.closeChallengeCorrector=closeChallengeCorrector;window.gradeChallenge=gradeChallenge;window.runChallengeCode=runChallengeCode;window.clearChallengeEditor=clearChallengeEditor;window.deleteNote=deleteNote;window.editNote=editNote;window.resetActiveQuiz=resetActiveQuiz;window.resetQuizData=resetQuizData;window.openCode=openCode;window.deleteCode=deleteCode;window.setReferenceCategory=setReferenceCategory;

applyTheme();initEditor();updateProgress();renderDashboard();renderFlash();renderCodeReference();
