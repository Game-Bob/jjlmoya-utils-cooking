import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Merengue e Ponto de Neve";
const description = "Calcula a quantidade exata de açúcar para merengue francês, italiano ou suíço segundo o peso das claras. Tempos de batimento e truques de pastelaria.";
const faq = [
  {
    question: 'Qual a relação de açúcar e clara ideal?',
    answer: 'A regra de ouro na pastelaria é o rácio 1:2. Por cada grama de clara de ovo, devem utilizar-se dois gramas de açúcar para assegurar uma estrutura estável e firme.',
  },
  {
    question: 'Como saber se o merengue está em ponto de neve?',
    answer: 'O ponto de neve ou pico firme atinge-se quando, ao levantar as varas, o merengue forma uma ponta que se mantém vertical sem dobrar. Além disso, o merengue deve estar muito brilhante.',
  },
  {
    question: 'Qual o merengue mais estável para decorar?',
    answer: 'O merengue italiano é o mais estável dos três tipos principais, graças à calda quente que coze ligeiramente as proteínas da clara, criando uma estrutura mais resistente ao calor.',
  },
  {
    question: 'Podem usar-se claras pasteurizadas de pacote?',
    answer: 'Sim, podem utilizar-se, mas costumam demorar um pouco mais a montar que as claras frescas. Um truque é adicionar uma pitada de cremor tártaro ou umas gotas de limão para ajudar à estabilidade.',
  },
];
const howTo = [
  {
    name: 'Pesar as claras',
    text: 'Utiliza uma balança digital para obter o peso exato das claras de ovo sem rasto de gema.',
  },
  {
    name: 'Introduzir o peso',
    text: 'Escreve esse peso na nossa calculadora para obteres as quantidades de açúcar necessárias.',
  },
  {
    name: 'Escolher a técnica',
    text: 'Seleciona se vais preparar um merengue francês (básico), italiano (estável) o suíço (sedoso).',
  },
  {
    name: 'Bater e verificar',
    text: 'Segue os tempos estimados e comprova a consistência até atingir o ponto de neve firme.',
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
  slug: 'calculadora-ponto-de-neve-merengue',
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  ui: {
    whitesLabel: 'Peso das Claras',
    whitesPlaceholder: 'Ex. 120',
    whitesUnit: 'g',
    typeLabel: 'Tipo de Merengue',
    typeFrench: 'Francês',
    typeItalian: 'Italiano',
    typeSwiss: 'Suíço',
    timesHeading: 'Tempos Estimados (Batimento a média/alta velocidade)',
    stageSpumado: 'Espumado',
    stageSpumadoDesc: 'Bolhas grandes, como sabão.',
    stageSoftPeaks: 'Pico Brando',
    stageSoftPeaksDesc: 'A ponta dobra-se ao levantar.',
    stageStiffPeaks: 'Ponto de Neve',
    stageStiffPeaksDesc: 'Pico firme e brilhante.',
    frenchSugarWhite: 'Açúcar Branco',
    frenchSugarPowder: 'Açúcar em Pó',
    frenchTip: 'O merengue francês é o mais comum e fácil, ideal para cozer suspiros. Não é próprio para comer cru.',
    frenchTime1: '1-2 min',
    frenchTime2: '3-5 min',
    frenchTime3: '7-9 min',
    italianSugarSyrup: 'Açúcar para a Calda',
    italianWater: 'Água',
    italianTip: 'O merengue italiano é o mais estável. Faz-se com calda a 118°C. Perfeito para decorar bolos.',
    italianTime1: '2 min',
    italianTime2: '5 min',
    italianTime3: '10-12 min',
    swissSugarWhite: 'Açúcar Branco',
    swissMaxTemp: 'Temp. Máx',
    swissTip: 'O merengue suíço aquece-se em banho-maria até o açúcar se dissolver. Ideal para cremes de manteiga.',
    swissTime1: '1-2 min',
    swissTime2: '4-6 min',
    swissTime3: '8-10 min',
    invalidWeightError: 'Introduz um peso válido',
  },
  faq,
  howTo, seo: [
    {
      type: 'title',
      text: 'Guia Mestre para o Cálculo de Merengue',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dominar o <strong>ponto de neve</strong> eleva a tua pastelaria ao nível profissional. A chave reside na precisão do peso.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1:2',
          label: 'Rácio Clara:Açúcar',
          icon: 'mdi:scale-balance',
        },
        {
          value: '118°C',
          label: 'Calda Italiana',
          icon: 'mdi:thermometer-high',
        },
        {
          value: '60°C',
          label: 'Banho-maria Suíço',
          icon: 'mdi:beaker-question-outline',
        },
        {
          value: '0%',
          label: 'Tolerância a Gordura',
          icon: 'mdi:close-circle-outline',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Merengue Francês',
          icon: 'mdi:baguette',
          description: 'O mais simples mas menos estável.',
          points: [
            'Ideal para cozer (suspiros)',
            'Textura leve e arejada',
            'Cozedura obrigatória',
            'Rápido',
          ],
        },
        {
          title: 'Merengue Italiano',
          icon: 'mdi:pizza',
          description: 'O mais estável de todos.',
          highlight: true,
          points: [
            'Perfeito para decorar bolos',
            'Apto para comer cru',
            'Resiste melhor à humidade',
            'Estrutura densa e brilhante',
          ],
        },
        {
          title: 'Merengue Suíço',
          icon: 'mdi:cheese',
          description: 'Aquecido em banho-maria.',
          points: [
            'Base para Buttercreams',
            'Textura muito sedosa',
            'Excelente para recheios',
            'Estabilidade média-alta',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: 'O truque da taça de metal',
      html: 'Limpa a taça com vinagre ou limão. Qualquer rasto de gordura impedirá que as claras subam.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
