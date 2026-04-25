import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Seletor de Frigideiras Inteligente: Guia de Utensílios de Cozinha";
const description = "Guia interativo para escolher a melhor frigideira ou panela de acordo com o seu estilo de cozinha. Ferro vs Aço vs Teflon. Encontre a ferramenta perfeita.";
const faq = [
  {
    question: 'Qual é a melhor frigideira para uso diário?',
    answer: 'Para a maioria, uma frigideira de aço inoxidável de alta qualidade ou uma de ferro fundido bem curada são as melhores. O aço é versátil e eterno, enquanto o ferro oferece uma antiaderência natural sem químicos.',
  },
  {
    question: 'Por que a comida gruda no aço inoxidável?',
    answer: 'Geralmente é por falta de temperatura ou por colocar a comida antes do tempo. Experimente o "efeito Leidenfrost": aqueça a frigideira até que uma gota de água role como uma pérola. Então ela está pronta.',
  },
  {
    question: 'Como sei se a minha frigideira é segura?',
    answer: 'Procure rótulos "PFOA Free". As frigideiras de ferro, aço carbono e aço inoxidável são as opções mais seguras e duradouras, pois não têm revestimentos que se degradam com o tempo.',
  },
  {
    question: 'O que significa "curar" uma frigideira?',
    answer: 'É o processo de criar uma camada de óleo polimerizado sobre o metal (ferro ou carbono). Isso protege contra a ferrugem e cria uma superfície antiaderente natural que melhora com cada uso.',
  },
  {
    question: 'Quanto devo gastar numa boa frigideira?',
    answer: 'Um conjunto de 2-3 frigideiras de qualidade média-alta (aço inoxidável ou ferro) pode durar 20+ anos. É melhor investir bem numa única frigideira do que comprar 5 baratas que duram 2 anos. Qualidade sobre quantidade.',
  },
];
const howTo = [
  {
    name: 'Selecione o seu estilo de cozinha',
    text: 'Escolha entre fogo alto (dourar), delicado (ovos), guisados (cozedura lenta) ou cozinha rápida. Cada estilo tem requisitos diferentes.',
  },
  {
    name: 'Escolha o material ideal',
    text: 'Com base no seu estilo, a ferramenta recomendará o melhor material: ferro, aço inoxidável, cobre ou teflon.',
  },
  {
    name: 'Leia as características',
    text: 'Entenda vantagens, desvantagens, manutenção e durabilidade. Depois escolha a frigideira específica que se ajusta ao seu orçamento e necessidades.',
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
  slug: 'guia-frigideiras',
  title: 'Seletor de Frigideiras Inteligente: Guia de Utensílios de Cozinha',
  description: 'Guia interativo para escolher a melhor frigideira ou panela de acordo com o seu estilo de cozinha. Ferro vs Aço vs Teflon. Encontre a ferramenta perfeita.',
  faqTitle: 'Perguntas Frequentes',
  faq,  howTo,
  seo: [
    {
      type: 'title',
      text: 'Materiais de Frigideiras: Ciência e Prática',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nem todas as frigideiras são iguais. Cada material tem propriedades termodinâmicas distintas que afetam como distribui o calor, que temperaturas suporta e como interage com os alimentos. Entender estas diferenças é a chave para escolher a ferramenta correta.',
    },
    {
      type: 'title',
      text: 'Ferro Fundido: A Clássica',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Vantagens:</strong> Excelente retenção de calor, distribuição uniforme, antiaderência natural (quando curada), dura séculos, melhora com o tempo. <strong>Desvantagens:</strong> Pesada, requer manutenção, pode enferrujar, demora mais a aquecer, não é apta para ácidos prolongados.',
    },
    {
      type: 'title',
      text: 'Aço Inoxidável: A Versátil',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Vantagens:</strong> Durável, não requer manutenção, apta para ácidos (vinhos, tomates), fácil de limpar, versátil, relativamente económica. <strong>Desvantagens:</strong> Não é antiaderente naturalmente, requer técnica (pré-aquecer bem), distribuição de calor desigual (melhor se tiver fundo multicamada).',
    },
    {
      type: 'title',
      text: 'Teflon/PTFE: A Conveniente',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Vantagens:</strong> Antiaderente instantâneo, fácil de cozinhar, fácil de limpar, económica. <strong>Desvantagens:</strong> Degrada-se com o tempo e temperatura, precisa de substituição a cada 3-5 anos, não é segura a temperaturas muito altas (>260°C).',
    },
  ],
  ui: {
    cookingStyle: 'Como costuma cozinhar?',
    material: 'Tipo de Material',
    highHeat: 'Fogo Alto',
    sear: 'Dourar / Selar',
    delicate: 'Delicado',
    fry: 'Ovos / Tortilhas',
    stew: 'Guisados',
    slowCook: 'Cozedura Lenta',
    fast: 'Rápido',
    quick: 'Cozinha Rápida',
    recommendation: 'Recomendação',
    characteristics: 'Características',
    castIron: 'Ferro Fundido',
    stainlessSteel: 'Aço Inoxidável',
    carbon: 'Aço Carbono',
    copper: 'Cobre',
    nonstick: 'Antiaderente (Teflon)',
    advantages: 'Vantagens',
    disadvantages: 'Desvantagens',
    maintenance: 'Manutenção',
    durability: 'Durabilidade',
    heatRetention: 'Retenção de Calor',
    price: 'Preço',
    step1: 'Como costuma cozinhar?',
    step2: 'Nível de Manutenção',
    maintenanceLazy: 'Baixo / Nulo',
    maintenanceLazyDesc: 'Sem complicações na lavagem.',
    maintenanceCare: 'Médio',
    maintenanceCareDesc: 'Lavagem à mão normal.',
    maintenanceRitual: 'Ritual (Alto)',
    maintenanceRitualDesc: 'Gosto do processo de cura.',
    idealPan: 'A Sua Frigideira Ideal',
    selectOptions: 'Selecione opções',
    seeRecommendation: 'Para ver a sua recomendação',
    pro: 'PRO',
    con: 'CONTRA',
    masterTip: 'Conselho Mestre',
    defaultTip: 'Combinar uma opção de aço para dourar e uma antiaderente para ovos é a base de qualquer cozinha eficiente.',
    stainlessName: 'Aço Inoxidável',
    stainlessTag: 'O Todo-o-terreno Pro',
    stainlessPro: 'Eterno e não reativo. Dourado perfeito.',
    stainlessCon: 'Requer técnica (Tª) para não agarrar.',
    stainlessTip: 'Use o efeito Leidenfrost: quando uma gota de água rolar como uma pérola, está pronta.',
    nonstickName: 'Antiaderente',
    nonstickTag: 'Máxima Comodidade',
    nonstickPro: 'Nada agarra. Fácil limpeza.',
    nonstickCon: 'Dura pouco (2-3 anos). Não usar fogo alto.',
    nonstickTip: 'Lave sempre à mão e use utensílios de madeira/silicone para duplicar a sua vida útil.',
    castironName: 'Ferro Fundido',
    castironTag: 'A Clássica de Sempre',
    castironPro: 'Retenção de calor incrível. Eterna.',
    castironCon: 'Muito pesada. Requer cura habitual.',
    castironTip: 'Aquece lentamente, mas uma vez quente é um tanque. Ideal para bifes.',
    carbonName: 'Aço Carbono',
    carbonTag: 'Agilidade no Fogo',
    carbonPro: 'Leve como o aço, quase como o ferro.',
    carbonCon: 'Enferruja se ficar húmida. Estética vivida.',
    carbonTip: 'Quanto mais preta e feia ficar, melhor funciona. É o segredo dos melhores woks.',
    enamelName: 'Ferro Esmaltado',
    enamelTag: 'Qualidade Gourmet',
    enamelPro: 'Melhor para cozedura lenta. Estética belíssima.',
    enamelCon: 'Muito cara. Esmalte frágil a impactos secos.',
    enamelTip: 'Perfeita para guisados intermináveis. O esmalte permite cozinhar ácidos (tomate) sem problemas.',
  },
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
