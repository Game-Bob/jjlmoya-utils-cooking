import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

const title = "Cronômetro de Ovos Científico";
const description = "Calculadora termodinâmica para a cozedura perfeita de ovos baseada em altitude, temperatura e tamanho.";
const faq = [
  {
    question: "Por que a altitude importa ao cozer ovos?",
    answer: "A água nem sempre ferve a 100°C. Em maiores altitudes, a pressão atmosférica é menor e a água ferve a uma temperatura mais baixa. Por exemplo, a 2000m ferve a cerca de 93°C, exigindo mais tempo que ao nível do mar. No Everest é impossível cozer um ovo duro.",
  },
  {
    question: "Ovo do frigorífico ou à temperatura ambiente?",
    answer: "Um ovo do frigorífico (4°C) precisa de mais tempo que um à temperatura ambiente (20°C). A diferença pode ser de 2-3 minutos. Esta calculadora ajusta o tempo automaticamente segundo a temperatura inicial.",
  },
  {
    question: "Por que aparece um anel verde na gema?",
    answer: "É sulfureto ferroso, resultado de sobre-cozedura. Quando superas os 80°C por muito tempo, o enxofre da clara reage com o ferro da gema. Não é tóxico, mas indica que passaste do tempo. Usa um banho de gelo imediato para evitá-lo.",
  },
  {
    question: "Como descascar um ovo facilmente?",
    answer: "Usa ovos com 1-2 semanas (não frescos do dia), começa com água a ferver (não fria) e mergulha em água gelada imediatamente ao terminar. O choque térmico contrai o ovo e facilita o descasque.",
  },
];
const howTo = [
  {
    name: "Seleciona a temperatura inicial",
    text: "Escolhe se o teu ovo está no frigorífico (4°C) ou à temperatura ambiente (20°C). Esta é a temperatura interna do ovo.",
  },
  {
    name: "Escolhe o tamanho do ovo",
    text: "S (pequeno, 53g), M (médio, 58g), L (grande, 63g), ou XL (muito grande, 73g). O tamanho determina quanto tempo o calor demora a chegar ao centro.",
  },
  {
    name: "Especifica a tua altitude",
    text: "Introduz manualmente ou usa a geolocalização. A cada 300m a temperatura de ebulição da água desce cerca de 1°C.",
  },
  {
    name: "Aplica choque térmico",
    text: "Quando o temporizador tocar, mergulha imediatamente em água com gelo. Isto para a cozedura e facilita o descasque. O choque térmico é crítico para a precisão.",
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
  slug: "ovos",
  title: "Cronômetro de Ovos Científico",
  description: "Calculadora termodinâmica para a cozedura perfeita de ovos baseada em altitude, temperatura e tamanho.",
  faqTitle: "Perguntas Frequentes",
  ui: {
    parameters: "Parâmetros",
    initial_temperature: "Temperatura Inicial",
    fridge: "Frio",
    ambient: "Ambiente",
    egg_size: "Tamanho do Ovo",
    altitude: "Altitude",
    use_location: "Usar a minha localização",
    altitude_help: "A água ferve a uma temperatura menor em altitudes mais elevadas, afetando o tempo de cozedura.",
    sea_level: "Mar",
    soft_cooked: "Cozido Suave",
    soft_description: "Gema líquida, clara branca e macia.",
    mollet: "Mollet (Gema cremosa)",
    mollet_description: "Gema cremosa, clara firme.",
    hard_cooked: "Cozido/Duro",
    hard_description: "Totalmente cozido, gema firme.",
  },
  faq, howTo,
  seo: [
    {
      type: 'title',
      text: 'Guia Mestre para a Cozedura Perfeita do Ovo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cozer um ovo é um exercício de <strong>termodinâmica aplicada</strong>. A precisão na temperatura inicial, o tamanho do ovo e a altitude geográfica determinam se obterás uma gema líquida sedosa ou um sólido sobre-cozido com o indesejado anel verde.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '62°C',
          label: 'Coagulação Clara',
          icon: 'mdi:egg-outline',
        },
        {
          value: '68°C',
          label: 'Coagulação Gema',
          icon: 'mdi:egg-fried',
        },
        {
          value: '-1°C',
          label: 'Ebulição / 300m',
          icon: 'mdi:mountain',
        },
        {
          value: '0s',
          label: 'Erro Tolerado',
          icon: 'mdi:timer-check-outline',
        },
      ],
    },
    {
      type: 'title',
      text: 'Comparação dos Estados de Cozedura',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Ovo Quente',
          icon: 'mdi:coffee-outline',
          description: 'Clara parcialmente coagulada e gema totalmente líquida.',
          points: [
            'Textura muito delicada',
            'Ideal para molhar pão',
            'Cozedura rápida (3-4 min)',
            'Difícil de descascar',
          ],
        },
        {
          title: 'Ovo Mollet',
          icon: 'mdi:water-percent',
          description: 'Clara firme e gema cremosa, densa mas não sólida.',
          highlight: true,
          points: [
            'O padrão gourmet',
            'Gema com textura de mel',
            'Camada firme e elástica',
            'Perfeito para saladas',
          ],
        },
        {
          title: 'Ovo Cozido / Duro',
          icon: 'mdi:circle-slice-8',
          description: 'Totalmente sólido mas tenro, sem anel verde.',
          points: [
            'Gema baça e firme',
            'Fácil transporte e descasque',
            'Ideal para rechear',
            'Exige arrefecimento rápido',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Ponto de Ebulição segundo a Altitude',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Cidade / Altitude', 'Metros (msnm)', 'Ebulição (°C)', 'Tempo Extra'],
      rows: [
        ['Nível do Mar', '0m', '100°C', '0s'],
        ['Madrid', '650m', '97.8°C', '+25s'],
        ['Cidade do México', '2240m', '92.6°C', '+75s'],
        ['La Paz (Bolívia)', '3640m', '88.1°C', '+140s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Anel verde ou difícil de descascar?',
      html: 'O anel verde é <strong>sulfureto ferroso</strong> causado por sobre-cozedura. Se o ovo não descasca bem, é por ser demasiado fresco; o pH baixo faz com que a clara adira à membrana. Usa ovos com 1 semana e choque térmico em gelo.',
    },
    {
      type: 'title',
      text: 'Glossário de Ciência do Ovo',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ovotransferrina',
          definition: 'Proteína da clara que coagula primeiro (62°C), dando a estrutura branca inicial.',
        },
        {
          term: 'Ovalbumina',
          definition: 'Proteína maioritária que exige mais calor (80°C) para uma firmeza total.',
        },
        {
          term: 'Pressão Atmosférica',
          definition: 'Factor que determina a temperatura da água a ferver.',
        },
        {
          term: 'Choque Térmico',
          definition: 'Imersão em água gelada para parar a cozedura residual instantaneamente.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'O truque do vinagre',
      html: 'Adiciona um pouco de vinagre à água. Se a casca rachar, o ácido ajudará a coagular a clara que saia rapidamente, selando a racha.',
    },
    {
      type: 'paragraph',
      html: 'O nosso cronômetro utiliza a equação de Charles Williams para ajustar cada segundo segundo a tua localização exacta.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
