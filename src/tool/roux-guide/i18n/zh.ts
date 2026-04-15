import type { ToolLocaleContent } from '../../../types';

const title = "黄油炒面（Roux）与母酱大师指南";
const description = "交互式 Roux 计算器。学习以精确比例制作白酱（Bechamel）、天鹅绒酱（Velouté）和褐酱（Espagnole）。法国高等料理的基础。";
const faq = [
    {
      question: '什么是 Roux，它有什么作用？',
      answer: '它是由油脂（通常是黄油）和面粉低温烹煮而成的混合物。它是法国母酱（如白酱或天鹅绒酱）的基础增稠剂。',
    },
    {
      question: 'Roux 的理想比例是多少？',
      answer: '标准重量比为 1:1。例如，50克黄油和50克面粉。根据所需的浓度，这种混合物大约可以增稠 1 升液体。',
    },
    {
      question: '不同类型的 Roux 有什么区别？',
      answer: '白 Roux 烹煮 2-3 分钟（用于白酱）。金 Roux 烹煮 5-8 分钟（用于天鹅绒酱）。黑/褐 Roux 烹煮长达 15-20 分钟（用于褐酱）。颜色越深，坚果风味越浓，但增稠能力越弱。',
    },
    {
      question: '如何避免结块？',
      answer: '金科玉律是“温度相反”：将冷液体倒入热 Roux 中，或者将热液体倒入冷 Roux 中。徐徐加入液体并用手动打蛋器不断搅拌。',
    },
  ];
const howTo = [
  {
    name: '选择液体类型',
    text: '在牛奶（白酱）、淡高汤（天鹅绒酱）、浓高汤（褐酱）或番茄中选择。',
  },
  {
    name: '定义所需浓度',
    text: '从汤品/奶油到炸饼面团。计算器将自动调整所需的 Roux 比例。',
  },
  {
    name: '输入液体体积',
    text: '指定需要增稠的液体毫升数。计算器将确切告知您需要使用多少黄油和面粉。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
};

export const content: ToolLocaleContent = {
  slug: 'roux-ratio-calculator-thickening-sauce-guide',
  title,
  description,
  faqTitle: '常见问题',
  faq,
  bibliographyTitle: '参考资料',
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
      text: 'Roux 与母酱计算大师指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Roux</strong> 是经典法式料理的结构基础。理解面粉、黄油和液体之间的关系，是制作丝滑酱汁与制作结块或带生粉味液体的区别所在。',
    },
  ],
  ui: {
    baseLiquid: '基础液体',
    volume: '体积',
    ml: 'ml',
    liquidType: '液体类型',
    milk: '牛奶',
    lightStock: '淡高汤',
    darkStock: '浓高汤',
    tomato: '番茄',
    sauceTexture: '酱汁浓度',
    soup: '汤品 / 奶油',
    normalSauce: '常规酱汁',
    thick: '浓稠 / 填充',
    croquette: '炸饼 / 面团',
    rouxMix: 'Roux 混合比例',
    butter: '黄油',
    flour: '面粉',
    instructions: '制作指南',
    sauceName: '酱汁类型',
    ratio: '比例',
    chefTip: '主厨贴士',
    white: '白色',
    blond: '金色',
    brown: '黑色/褐色',
    beurreManied: '面粉黄油块（用于最后微调）',
    recipeBechamel: "白酱",
    recipeVeloute: "天鹅绒酱",
    recipeEspagnole: "褐酱",
    recipeTomato: "番茄酱",
    tipBechamel: "使用冷牛奶。开始时分次加入，如果用力搅拌也可以一次加入。",
    tipVeloute: "使用鸡肉或鱼肉高汤。在加入液体前，Roux 应散发饼干般的香气。",
    tipEspagnole: "Roux 应呈现巧克力色，但注意不要烧焦。",
    tipTomato: "Roux 有助于为番茄酱提供更好的质感和柔滑度。",
    rouxWhiteLabel: "白 Roux",
    rouxBlondLabel: "金 Roux",
    rouxBrownLabel: "黑/褐 Roux",
    descWhite: "煮至生粉味消失即可。不改变颜色。",
    descBlond: "追求浅金色和坚果香气。",
    descBrown: "使用极小火。呈巧克力色。注意：需要多加 10% 的分量。",
    timeWhite: "2-3 分钟",
    timeBlond: "5-8 分钟",
    timeBrown: "15-20 分钟",
  },
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
