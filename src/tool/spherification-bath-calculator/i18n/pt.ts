import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Spherification Bath Calculator Precision Molecular Gastronomy Guide";
const description = "Calcule proporcoes exatas de alginato de sodio e lactato de calcio para esferificacao direta e reversa. Corrija viscosidade e acidez com xantana e citrato.";

const faq = [
  {
    question: "Qual e a diferenca entre esferificacao direta e reversa?",
    answer: "A esferificacao direta adiciona alginato de sodio a base aromatizada e a gota em um banho de calcio, criando uma membrana fina que continua a gelificar para dentro. A esferificacao reversa adiciona calcio a base e a gota em um banho de alginato, criando uma membrana que cresce para fora, interrompendo o processo de gelificacao quando enxaguada."
  },
  {
    question: "Por que minhas esferas ficam achatadas ou nao afundam?",
    answer: "Se o liquido da base aromatizada for menos denso que o banho de alginato de sodio, ele flutua em vez de formar uma esfera. Adicionar uma pequena quantidade de goma xantana aumenta a viscosidade da base, permitindo que ela afunde e forme esferas perfeitas."
  },
  {
    question: "O que o citrato de sodio faz na esferificacao?",
    answer: "O citrato de sodio e um sequestrante que liga ions de calcio e eleva o pH. Se um liquido de base for altamente acido (pH abaixo de 4,5) ou contiver calcio, o alginato de sodio gelifica prematuramente. Adicionar citrato neutraliza essa acidez."
  },
  {
    question: "Posso usar qualquer agua para o banho de calcio?",
    answer: "Agua de torneira com alto teor de minerais pode fazer o alginato de sodio aglomerar ou gelificar prematuramente. O ideal e usar agua destilada ou agua mineral com baixo teor de calcio."
  }
];

const howTo = [
  {
    name: "Selecione o metodo de esferificacao",
    text: "Escolha Direta para gelificacao fina e imediata, ou Reversa para liquidos que contenham alcool, laticinios ou calcio."
  },
  {
    name: "Insira os pesos dos liquidos",
    text: "Informe o peso do seu liquido de base aromatizada e do banho de agua nas unidades de sua preferencia."
  },
  {
    name: "Adicione correcoes de textura e acidez",
    text: "Ative a Goma Xantana se seu liquido de base for ralo, ou o Citrato de Sodio se for altamente acido."
  },
  {
    name: "Meça os ingredientes",
    text: "Pese as quantidades exatas de alginato de sodio, lactato ou cloreto de calcio e agentes corretivos mostrados no resumo."
  }
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
  slug: 'calculadora-banho-esferificacao',
  title: 'Calculadora de Banho de Esferificacao',
  description: 'Calcule proporcoes exatas de alginato de sodio e lactato de calcio para esferificacao direta e reversa. Corrija viscosidade e acidez com xantana e citrato.',
  faqTitle: 'Perguntas Frequentes',
  ui: {
    title: "Calculadora de Banho de Esferificacao",
    subtitle: "Controle preciso de proporcoes para esferificacao direta e reversa",
    unitLabel: "Sistema de Medida",
    metricUnit: "Metrico (g / gramas)",
    imperialUnit: "Imperial (oz / oncas)",
    methodLabel: "Metodo de Esferificacao",
    directMethod: "Esferificacao Direta",
    reverseMethod: "Esferificacao Reversa",
    baseWeightLabel: "Peso do Liquido de Base",
    bathWeightLabel: "Peso da Agua do Banho",
    xanthanLabel: "Ativar Goma Xantana (Correcao de Viscosidade)",
    citrateLabel: "Ativar Citrato de Sodio (Acidez / Sequestrante de pH)",
    recipeTitle: "Resumo da Receita Calculada",
    baseGellingAgent: "Agente Gelificante de Base",
    bathGellingAgent: "Agente Gelificante do Banho",
    xanthanGum: "Goma Xantana (Espessante)",
    sodiumCitrate: "Citrato de Sodio (Tampao)",
    warningLabel: "Aviso de Solubilidade",
    warningDesc: "O peso do agente necessario esta proximo ou excede o limite de solubilidade para este volume de liquido. A dissolucao pode demorar mais ou exigir aquecimento suave.",
    directDesc: "Ideal para liquidos leves com baixo teor de calcio. Cria esferas delicadas de casca fina que devem ser servidas imediatamente.",
    reverseDesc: "Ideal para laticinios, alcool, liquidos ricos em calcio ou acidos. Cria esferas estaveis que nao continuam gelificando apos o enxague.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'A ciencia da esferificacao molecular e da gelificacao de hidrocoloides',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A esferificacao e uma tecnica culinaria revolucionaria que encapsula um nucleo liquido dentro de uma membrana gelificada fina. Originada no setor de embalagens industriais na decada de 1940, foi adaptada para a culinaria modernista no inicio dos anos 2000. A quimica subjacente depende das interacoes dos hidrocoloides, especificamente da reticulação dos polimeros de alginato de sodio quando expostos a cations de calcio divalentes.',
    },
    {
      type: 'title',
      text: 'A quimica molecular: alginato de sodio e ions de calcio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O alginato de sodio e um polissacarideo extraido de algas marrons, composto por cadeias lineares de acido beta-D-manuronico (blocos M) e acido alpha-L-guluronico (blocos G). Em sua forma de sal de sodio, e totalmente soluvel em agua, formando uma solucao viscosa. Quando ions de calcio (como cloreto de calcio ou lactato gluconato de calcio) sao introduzidos, os ions de calcio divalentes (Ca2+) substituem os ions de sodio monovalentes (Na+). Como o calcio tem duas cargas positivas, ele se liga a dois blocos G em cadeias polimericas adjacentes, ligando-as. Esse processo, descrito cientificamente como o <strong>modelo da caixa de ovos</strong> de gelificacao, conecta as cadeias independentes de polissacarideos em uma rede rigida tridimensional de hidrogel que aprisiona agua e moleculas de sabor.',
    },
    {
      type: 'title',
      text: 'Mecanismos da esferificacao direta versus reversa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Os dois metodos principais de esferificacao diferem em onde o agente gelificante e os sais de calcio sao colocados, levando a diferentes propriedades mecanicas:',
    },
    {
      type: 'list',
      items: [
        '<strong>Esferificacao Direta:</strong> O alginato de sodio e dissolvido no liquido de base aromatizado, que e entao gotejado em um banho de calcio (geralmente 1,0% de cloreto de calcio). A gelificacao comeca instantaneamente na fronteira. Como os ions de calcio sao pequenos e moveis, eles migram continuamente do banho para o nucleo da esfera, fazendo a membrana de gel crescer para dentro. Se nao for enxaguada e servida imediatamente, a esfera eventualmente gelifica completamente, transformando-se em uma conta solida e borrachenta.',
        '<strong>Esferificacao Reversa:</strong> O lactato gluconato de calcio (2,0%) e dissolvido no liquido de base aromatizado, que e entao gotejado em um banho de alginato de sodio (0,5%). Como as moleculas de alginato sao grandes e lentas, elas nao conseguem atravessar facilmente a barreira de gel recem-formada. Em vez disso, os ions de calcio migram para fora em direcao ao banho, fazendo a membrana crescer para fora. Isso interrompe a gelificacao imediatamente assim que a esfera e removida e enxaguada em agua limpa, preservando um nucleo completamente liquido por tempo indeterminado.'
      ],
    },
    {
      type: 'title',
      text: 'Superando barreiras de acidez e pH com citrato de sodio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O alginato de sodio e altamente sensivel a acido. Quando o pH de um liquido de base aromatizado cai abaixo de 4,5, as moleculas de alginato nao conseguem se hidratar adequadamente. Em vez de se dissolver, as cadeias de alginato precipitam em acido alginico insoluvel, formando grumos fibrosos. Para resolver isso, os chefs usam <strong>citrato de sodio</strong> como agente tamponante. O citrato de sodio neutraliza os ions de hidrogenio, elevando o pH de ingredientes acidos como suco de maracuja ou lima acima do limite critico de 4,5, permitindo que o alginato se hidrate completamente e forme formas esfericas limpas.',
    },
    {
      type: 'title',
      text: 'Ajuste de densidade e viscosidade com goma xantana',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para formar uma esfera, a gota do liquido de base aromatizado deve submergir completamente no banho de gelificacao. Se o liquido de base aromatizado for menos denso que o banho (como um alcool leve ou um suco a base de agua em um banho espesso de alginato de sodio durante a esferificacao reversa), ele flutua na superficie, achando-se. Adicionar uma quantidade minima de <strong>goma xantana</strong> (tipicamente 0,1% a 0,2%) aumenta a viscosidade do liquido de base. Essa consistencia extra fornece o impulso necessario para a gota afundar no banho, permitindo que a tensao superficial transforme a gota em uma esfera perfeita.',
    },
    {
      type: 'table',
      headers: ['Metodo de Esferificacao', 'Ingredientes Ideais', 'Aditivos Necessarios', 'Caracteristicas de Armazenamento', 'Direcao do Crescimento do Gel'],
      rows: [
        ['Metodo Direto', 'Sucos de fruta com baixo teor de calcio, caldos claros, xaropes doces', '0,5% Alginato de Sodio na base, 1,0% Cloreto de Calcio no banho', 'Deve ser servido imediatamente, gelifica completamente com o tempo', 'Para dentro (em direcao ao centro)'],
        ['Metodo Reverso', 'Laticinios, alcool, liquidos ricos em calcio ou altamente acidos', '2,0% Lactato de Calcio na base, 0,5% Alginato de Sodio no banho', 'Altamente estavel, pode ser armazenado em oleo ou agua por horas', 'Para fora (a partir do centro)'],
      ],
    },
    {
      type: 'title',
      text: 'Enxague e preservacao final',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sempre enxague as esferas prontas em um banho de agua limpa e fria imediatamente apos remove-las do banho de gelificacao. Isso remove qualquer residuo de calcio ou alginato na superficie, interrompendo a reacao quimica e prevenindo sabores desagradaveis (especialmente o gosto levemente amargo do cloreto de calcio). Para armazenamento, submerja as esferas em um liquido de densidade correspondente (como o liquido de base aromatizado sem aditivos ou uma calda de acucar leve) para evitar que a agua atravesse a membrana por osmose, o que poderia fazer as esferas murcharem ou estourarem.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
