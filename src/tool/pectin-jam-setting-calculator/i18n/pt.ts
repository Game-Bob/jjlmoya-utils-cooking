import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calculadora de Pectina e Ponto de Geleia para um Gel Perfeito Sempre';
const description = 'Calcule exatamente quanta pectina, acido citrico e acucar a sua fruta precisa para obter o ponto perfeito da geleia. Evite conservas muito liquidas ou borrachudas com quimica de precisao.';

const faq = [
  {
    question: 'Por que a pectina faz a geleia gelificar?',
    answer: 'A pectina e um polissacarideo natural encontrado nas paredes celulares das frutas. Quando aquecida com acucar e acido (pH 2,8-3,5), as moleculas de pectina formam uma rede tridimensional de gel que aprisiona agua e acucar, criando a textura espalhavel da geleia.',
  },
  {
    question: 'Qual a diferenca entre pectina HM e LM?',
    answer: 'A pectina de alto metoxilo (HM) requer pelo menos 60% de acucar e um pH abaixo de 3,5 para gelificar - ideal para geleias tradicionais. A pectina de baixo metoxilo (LM) gelifica atraves de ions de calcio em vez de acucar, permitindo conservas com baixo teor ou sem acucar.',
  },
  {
    question: 'Por que minha geleia as vezes fica muito liquida?',
    answer: 'Uma geleia liquida geralmente resulta de pectina insuficiente (a fruta naturalmente carece dela), acido insuficiente (pH muito alto para a gelificacao) ou acucar insuficiente (para pectina HM). A diluicao excessiva com agua ou cozimento insuficiente tambem podem impedir o ponto.',
  },
  {
    question: 'Posso usar suco de limao em vez de acido citrico em po?',
    answer: 'Sim. Esta calculadora converte acido citrico em equivalentes de suco de limao. Aproximadamente 25 ml de suco de limao fornecem a mesma acidez que 1 g de acido citrico. O suco de limao tambem adiciona sabor fresco as geleias.',
  },
  {
    question: 'Quais frutas sao naturalmente ricas em pectina?',
    answer: 'Macas, marmelos, amoras, oxicocos e groselhas sao naturalmente ricos em pectina e muitas vezes nao requerem pectina adicionada. Frutas pouco maduras tambem contem mais pectina do que frutas completamente maduras.',
  },
];

const howTo = [
  {
    name: 'Selecione sua fruta',
    text: 'Escolha a fruta com a qual voce esta fazendo a geleia. Cada fruta tem diferentes niveis naturais de pectina e acidez que determinam quais aditivos sao necessarios.',
  },
  {
    name: 'Pese sua fruta preparada',
    text: 'Insira o peso da sua fruta limpa e picada em gramas. A pesagem precisa e essencial para fazer geleia com exatidao.',
  },
  {
    name: 'Escolha seu tipo de pectina',
    text: 'Selecione Classica (HM) para geleia tradicional com alto teor de acucar, ou Baixo Acucar (LM) se voce quiser uma conserva mais saudavel, com acucar reduzido ativada por calcio.',
  },
  {
    name: 'Confira sua receita perfeita',
    text: 'A calculadora informa as gramas exatas de pectina em po, acido citrico (ou suco de limao) e acucar necessarios. Adicione-os durante o cozimento para um ponto garantido.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'calculadora-pectina-geleia',
  title: 'Calculadora de Pectina e Ponto de Geleia',
  description: 'Calcule exatamente quanta pectina, acido citrico e acucar a sua fruta precisa para obter o ponto perfeito da geleia - sem conservas liquidas nem borrachudas.',
  faqTitle: 'Perguntas Frequentes',
  ui: {
    title: 'Calculadora de Pectina e Ponto de Geleia',
    subtitle: 'Quimica de gelificacao de precisao para conservas perfeitas',
    fruitLabel: 'Escolha sua Fruta',
    allFruits: 'Todas',
    highPectin: 'Alta Pectina',
    mediumPectin: 'Media Pectina',
    lowPectin: 'Baixa Pectina',
    weightLabel: 'Peso da Fruta',
    weightPlaceholder: 'ex. 1000',
    weightUnitMetric: 'g',
    weightUnitImperial: 'oz',
    pectinTypeLabel: 'Tipo de Pectina',
    pectinHM: 'Classica (HM)',
    pectinLM: 'Baixo Acucar (LM)',
    sugarModeLabel: 'Modo de Acucar',
    sugarModeAuto: 'Auto',
    sugarModeManual: 'Manual',
    sugarLabel: 'Peso do Acucar',
    sugarPlaceholder: 'ex. 650',
    recipeTitle: 'Receita',
    pectinNeeded: 'Pectina',
    citricAcidNeeded: 'Acido Citrico',
    lemonJuiceNeeded: 'Suco de Limao',
    sugarNeeded: 'Acucar',
    totalYield: 'Rendimento Total',
    sugarPercent: 'Acucar',
    sugarLow: 'Baixo',
    sugarIdeal: 'Ideal',
    sugarHigh: 'Alto',
    sugarOfFruit: 'do peso da fruta',
    sugarOfTotal: 'do total',
    statusPerfect: 'Gel Perfeito',
    statusPerfectDesc: 'Suas proporcoes estao equilibradas. A geleia gelificara lindamente com uma textura sedosa e espalhavel e brilho esplendido.',
    statusSlightlyThin: 'Ligeiramente Fluida',
    statusSlightlyThinDesc: 'A geleia pode ficar com um ponto macio. Considere adicionar mais pectina ou reduzir o conteudo de agua para um gel mais firme.',
    statusTooThin: 'Muito Fluida - Risco de Geleia Liquida',
    statusTooThinDesc: 'Sem ajustes, esta geleia provavelmente permanecera liquida. Aumente o acucar (para HM) ou adicione mais pectina.',
    statusTooStiff: 'Muito Firme',
    statusTooStiffDesc: 'O gel pode ficar borrachudo. Reduza a pectina pela metade ou aumente ligeiramente o peso da fruta.',
    dropTestTitle: 'Teste do Prato Frio',
    dropTestHow: 'Pingue sobre um prato gelado',
    dropStatusLabel: 'Resultado',
    dropTestPerfect: 'Vai firmar. A gota enruga e mantem a forma',
    dropTestThin: 'Fluida. Escorre pelo prato',
    dropTestStiff: 'Muito firme. Quase nao se move',
    dropPlateLabel: 'prato',
    dropDropLabel: 'gota',
    sugarAutoHint: 'calculado automaticamente',
    sugarManualHint: 'inserir quantidade',
    unitLabel: 'Sistema de Medida',
    metricLabel: 'Metrico (g)',
    imperialLabel: 'Imperial (oz)',
    disclaimer: 'Pese todos os ingredientes com uma balanca de cozinha digital para obter os melhores resultados. As medicoes volumetricas nao sao confiaveis para fazer geleia.',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'A Ciencia Completa do Ponto da Geleia: Equilibrio entre Pectina, Acido e Acucar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Fazer geleia e uma interseccao precisa entre quimica e culinaria. Em sua essencia, a transformacao da polpa de fruta em um gel firme e espalhavel depende do equilibrio correto de tres moleculas: <strong>pectina</strong> (o agente gelificante), <strong>acido</strong> (o catalisador que ativa a pectina) e <strong>acucar</strong> (o agente desidratante que extrai a agua das cadeias de pectina). Sem as proporcoes corretas, voce acaba com uma sopa de fruta ou um bloco borrachudo.',
    },
    {
      type: 'title',
      text: 'Como a Pectina Forma uma Rede de Gel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A pectina e um polissacarideo complexo composto principalmente por unidades de acido galacturonico, encontrado na lamela media das paredes celulares vegetais. Em seu estado natural, as moleculas de pectina sao carregadas negativamente e se repelem mutuamente, permanecendo dissolvidas na agua da fruta. Para formar um gel, tres condicoes devem ser satisfeitas simultaneamente: (1) deve haver acucar suficiente para competir pelas moleculas de agua, desidratando as cadeias de pectina; (2) o pH deve cair abaixo de 3,5, neutralizando as cargas negativas via protonacao dos grupos carboxila; e (3) a temperatura deve exceder 104-105 C para dissolver e ativar completamente a pectina. Quando essas condicoes se alinham, as cadeias de pectina formam zonas de juncao - regioes onde as cadeias se associam atraves de ligacoes de hidrogenio e interacoes hidrofobicas - criando uma rede tridimensional continua semelhante a uma esponja que aprisiona o suco de fruta e a calda de acucar.',
    },
    {
      type: 'title',
      text: 'Pectina de Alto Metoxilo (HM) vs. Baixo Metoxilo (LM)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A pectina e classificada pelo seu grau de esterificacao (DE), que e a porcentagem de grupos carboxila esterificados com metanol. <strong>A pectina de alto metoxilo (HM)</strong> (DE > 50%) requer um minimo de 55-65% de solidos soluveis (acucar) e um pH entre 2,8 e 3,5 para formar um gel. Esta e a pectina classica usada em receitas tradicionais de geleia. Sem acucar suficiente, a pectina HM forma um gel fraco ou inexistente. <strong>A pectina de baixo metoxilo (LM)</strong> (DE < 50%) gelifica atraves de um mecanismo diferente: reticula-se via ions de calcio divalentes (Ca) que formam pontes entre os grupos carboxila livres. A pectina LM pode gelificar com pouco ou nenhum acucar adicionado, tornando-a ideal para conservas de baixa caloria, adequadas para diabeticos ou adoçadas naturalmente. Algumas pectinas LM tambem toleram uma faixa de pH mais ampla ate 5,5, util para frutas de baixa acidez como figos e peras.',
    },
    {
      type: 'title',
      text: 'Teor Natural de Pectina nas Diferentes Variedades de Frutas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nem todas as frutas sao iguais quando se trata de pectina. As frutas se dividem em tres categorias com base em seus niveis naturais de pectina e acidez. Entender onde sua fruta se situa nesse espectro determina se voce precisa suplementar com pectina em po ou acido citrico.',
    },
    {
      type: 'table',
      headers: ['Nivel de Pectina', 'Nivel de Acidez', 'Frutas de Exemplo', 'Pectina Adicionada Necessaria'],
      rows: [
        ['Alto', 'Alto', 'Maca, Oxicoco, Groselha', '0% (nenhuma)'],
        ['Alto', 'Medio/Baixo', 'Marmelo, Amora', '0% (nenhuma)'],
        ['Medio', 'Alto', 'Framboesa, Loganberry', '0,3% do peso da fruta'],
        ['Medio', 'Medio', 'Ameixa, Damasco', '0,3% do peso da fruta'],
        ['Medio', 'Baixo', 'Mirtilo', '0,3% do peso da fruta'],
        ['Baixo', 'Alto', 'Cereja, Uva', '0,6% do peso da fruta'],
        ['Baixo', 'Medio', 'Pessego, Manga', '0,6% do peso da fruta'],
        ['Baixo', 'Baixo', 'Morango, Pera, Figo', '0,6% do peso da fruta'],
      ],
    },
    {
      type: 'title',
      text: 'O Papel Critico do pH na Gelificacao da Geleia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O pH da mistura de geleia e provavelmente a variavel mais negligenciada na conservacao caseira. Com um pH acima de 3,8, os grupos carboxila da pectina permanecem ionizados (carregados negativamente), criando repulsao eletrostatica que impede a formacao do gel independentemente da quantidade de acucar ou pectina adicionada. Quando o pH cai abaixo de 3,5 atraves da adicao de acido citrico ou suco de limao, esses grupos se tornam protonados, permitindo a formacao de ligacoes de hidrogenio entre cadeias de pectina adjacentes. A zona ideal de gelificacao esta entre pH 2,8 e 3,2. Abaixo de pH 2,8, o gel se torna quebradico e pode apresentar sinerese (exsudacao de liquido). Acima de pH 3,5, a sinerese tambem ocorre e o gel e muito fraco. E por isso que frutas de baixa acidez como figos e morangos quase sempre precisam de acido citrico adicionado - seu pH natural e muito alto para ativar a pectina adequadamente.',
    },
    {
      type: 'title',
      text: 'Concentracao de Acucar e seu Efeito na Forca do Gel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O acucar desempenha duas funcoes na geleia com pectina HM. Primeiro, e altamente higroscopico - compete intensamente com a pectina pelas moleculas de agua, removendo as camadas de hidratacao das cadeias de pectina e forcando-as a interagir entre si. Segundo, eleva o ponto de ebulicao da mistura, permitindo que a geleia atinja o ponto de firmacao de 104-105 C. Com uma concentracao de acucar de 65%, as cadeias de pectina estao suficientemente desidratadas para formar um gel forte. Abaixo de 60%, o gel enfraquece linearmente. Acima de 68%, a geleia pode cristalizar ao esfriar quando o acucar excede seu limite de solubilidade. Para geleias com pectina LM, o acucar desempenha apenas um papel de sabor, ja que a gelificacao depende das pontes de calcio. O teor de acucar pode ser tao baixo quanto 5-10% em conservas com pectina LM adoçadas com edulcorantes nao nutritivos.',
    },
    {
      type: 'title',
      text: 'Acido Citrico vs. Suco de Limao: Conversao e Melhores Praticas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O acido citrico (CHO) e o acido principal usado na fabricacao comercial de geleias porque e padronizado, insipido e preciso. O suco de limao contem aproximadamente 5% de acido citrico em peso, mais acido malico e acido ascorbico (vitamina C). <strong>1 grama de acido citrico puro equivale aproximadamente a 25 ml de suco de limao fresco</strong> em termos de poder de reducao do pH. No entanto, o suco de limao tambem adiciona volume de liquido, que deve ser considerado no conteudo total de agua. Para resultados mais consistentes, use acido citrico em po dissolvido em uma pequena quantidade de agua. Ao usar suco de limao, leve em conta 20-30 ml extras de liquido que precisam ser evaporados para atingir o ponto de firmacao.',
    },
    {
      type: 'title',
      text: 'O Teste do Prato Frio: Um Metodo Visual para Determinar o Ponto de Firmacao',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O tradicional teste do prato frio (tambem chamado de teste da ruga ou teste do pires) continua sendo um dos metodos mais confiaveis para os produtores caseiros de geleia. Coloque um pequeno prato de ceramica no congelador por 10 minutos antes de comecar a cozinhar. Quando voce acreditar que a geleia atingiu seu ponto de firmacao, pingue uma colher de cha da geleia quente sobre o prato gelado e deixe esfriar por 30 segundos. Empurre a borda da gota com a ponta do dedo: se a superficie enrugar distintamente e a gota mantiver sua forma, o ponto de gel foi alcancado. Se escorrer livremente, continue fervendo por 2-3 minutos e teste novamente. Esta calculadora simula visualmente esse teste, mostrando se as proporcoes da sua receita passarao no teste do prato antes mesmo de voce comecar a cozinhar.',
    },
    {
      type: 'title',
      text: 'Solucao de Problemas: Por que as Geleias Falham e Como Corrigi-las',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Geleia liquida (nao firmou apos esfriar):</strong> A causa mais comum e cozimento insuficiente - a mistura nunca atingiu 104-105 C. Ferva novamente a geleia, adicionando 1-2 g de acido citrico por kg de fruta e testando com o metodo do prato frio. Alternativamente, dissolva 5 g de pectina em po em agua fria, incorpore na geleia fervente e cozinhe por mais 2 minutos.',
        '<strong>Geleia borrachuda ou muito firme:</strong> Foi adicionada pectina demais em relacao ao peso da fruta, ou a geleia foi cozida alem de 106 C, degradando a rede de pectina em uma estrutura rigida e quebradica. Para recuperar, aqueça suavemente com 100-200 ml de suco de maca ou agua para diluir a concentracao de pectina.',
        '<strong>Sinerese (agua escorrendo do gel):</strong> Isso indica excesso de acido (pH abaixo de 2,8) ou acucar acima de 68%, ambos fazendo a rede de pectina se contrair e expelir agua. Adicione uma pequena quantidade de bicarbonato de sodio para elevar o pH gradualmente.',
        '<strong>Cristalizacao (textura granulada):</strong> A concentracao de acucar excedeu a solubilidade, ou cristais de acucar nao dissolvidos atuaram como pontos de nucleacao. Mexa constantemente durante a fervura final e adicione 1 colher de sopa de xarope de milho ou glicose, que inibe a cristalizacao.',
        '<strong>Mofo na superficie durante o armazenamento:</strong> A geleia foi mal cozida (nao atingiu a temperatura de esterilizacao), continha muito pouco acucar (abaixo de 60% para pectina HM) ou os frascos nao foram esterilizados adequadamente. Use sempre frascos esterilizados e processe em banho-maria por 10 minutos.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
