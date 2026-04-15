import type { ToolLocaleContent } from '../../../types';

const title = "Guia Mestre de Roux e Molhos Mãe";
const description = "Calculadora interativa de Roux. Aprenda a criar Bechamel, Velouté e Espagnole com proporções exatas. A base da alta cozinha francesa.";
const faq = [
    {
      question: 'O que é um Roux e para que serve?',
      answer: 'É uma mistura de gordura (geralmente manteiga) e farinha cozinhada em lume brando. É utilizada como agente espessante base para os molhos mãe franceses como o Bechamel ou o Velouté.',
    },
    {
      question: 'Qual é a proporção ideal para um Roux?',
      answer: 'A proporção padrão é 1:1 em peso. Por exemplo, 50g de manteiga e 50g de farinha. Esta mistura pode espessar aproximadamente 1 litro de líquido, dependendo da densidade desejada.',
    },
    {
      question: 'Qual a diferença entre os tipos de Roux?',
      answer: 'O Roux branco cozinha 2-3 min (Bechamel). O loiro 5-8 min (Velouté). O escuro até 15-20 min (Espanhol). Quanto mais cor, mais sabor a noz, mas menos capacidade espessante.',
    },
    {
      question: 'Como evitar os grumos?',
      answer: 'A regra de ouro é a temperatura oposta: líquido frio sobre roux quente, ou líquido quente sobre roux frio. Adicione o líquido pouco a pouco e bata constantemente com as varas.',
    },
  ];
const howTo = [
  {
    name: 'Selecione o tipo de líquido',
    text: 'Escolha entre leite (Bechamel), fundo claro (Velouté), fundo escuro (Espagnole) ou tomate.',
  },
  {
    name: 'Defina a espessura desejada',
    text: 'Desde sopa/creme até massa para croquetes. A calculadora ajustará automaticamente o rácio de roux necessário.',
  },
  {
    name: 'Introduza o volume de líquido',
    text: 'Especifique quantos ml de líquido precisa de espessar. A calculadora dirá exatamente quanta manteiga e farinha usar.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'guia-roux-molhos-mae',
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'Larousse Gastronomique',
      url: 'https://www.laroussecocina.com/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Guia Mestre para o Cálculo de Roux e Molhos Mãe',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O <strong>roux</strong> é a base estrutural da cozinha clássica francesa. Entender a relação entre a farinha, a manteiga e o líquido é a diferença entre um molho aveludado e um líquido com grumos.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1:1',
          label: 'Proporção Farinha:Gordura',
          icon: 'mdi:scale-balance',
        },
        {
          value: '3 min',
          label: 'Tempo Roux Branco',
          icon: 'mdi:timer-sand',
        },
        {
          value: '100g/L',
          label: 'Rácio Molhos Espessos',
          icon: 'mdi:waves',
        },
        {
          value: '15 min',
          label: 'Tempo Roux Escuro',
          icon: 'mdi:fire',
        },
      ],
    },
  ],
  ui: {
    baseLiquid: 'Líquido Base',
    volume: 'Volume',
    ml: 'ml',
    liquidType: 'Tipo de Líquido',
    milk: 'Leite',
    lightStock: 'Fundo Claro',
    darkStock: 'Fundo Escuro',
    tomato: 'Tomate',
    sauceTexture: 'Textura do Molho',
    soup: 'Sopa / Creme',
    normalSauce: 'Molho Normal',
    thick: 'Espesso / Recheio',
    croquette: 'Croquete / Massa',
    rouxMix: 'Mistura Roux',
    butter: 'Manteiga',
    flour: 'Farinha',
    instructions: 'Instruções',
    sauceName: 'Tipo de Molho',
    ratio: 'Rácio',
    chefTip: 'Dica do Chef',
    white: 'Branco',
    blond: 'Loiro',
    brown: 'Escuro',
    beurreManied: 'Beurre Manié (Para ajustes finais)',
    recipeBechamel: "Bechamel",
    recipeVeloute: "Velouté",
    recipeEspagnole: "Espanhol",
    recipeTomato: "Molho de Tomate",
    tipBechamel: "Use leite frio. Adicione gradualmente ou de uma só vez se bater forte.",
    tipVeloute: "Use fundo de ave ou peixe. Deixe o roux cheirar a biscoito.",
    tipEspagnole: "O roux deve ter a cor do chocolate, mas sem queimar.",
    tipTomato: "O roux ajudará a dar corpo e suavidade à textura final do tomate.",
    rouxWhiteLabel: "Roux Branco",
    rouxBlondLabel: "Roux Loiro",
    rouxBrownLabel: "Roux Escuro",
    descWhite: "Cozinhe apenas até perder o odor a farinha crua. Sem cor.",
    descBlond: "Procure uma cor dourada pálida e um aroma a noz.",
    descBrown: "Lume muito brando. Cor chocolate. Requer 10% a mais de peso.",
    timeWhite: "2-3 min",
    timeBlond: "5-8 min",
    timeBrown: "15-20 min",
  },
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
