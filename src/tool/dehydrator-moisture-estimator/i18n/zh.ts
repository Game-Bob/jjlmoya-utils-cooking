import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = '食物烘干机水分估算工具';
const description = '根据成分类型、温度和目标水分，估算食物烘干时的重量减轻率、蒸发水分和干燥时间。';

const faq = [
  {
    question: '如何计算烘干机重量损失？',
    answer: '烘干机重量损失计算是通过将食物分离为干物质和水分。由于干物质在烘干过程中保持不变，最终的重量即干物质除以1减去目标水分百分比。'
  }
];

const howTo = [
  {
    name: '选择食材预设或手动设置水分',
    text: '选择常用食材预设或手动输入起始水分百分比。'
  }
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
  slug: 'dehydrator-moisture-estimator',
  title,
  description,
  faqTitle: '常见问题解答',
  ui: {
    title: '水分烘干估算器',
    subtitle: '计算重量减轻率并预测干燥时间',
    unitSystemLabel: '单位系统',
    metricOption: '公制 (g, °C)',
    imperialOption: '英制 (oz, °F)',
    ingredientLabel: '食材预设',
    initialMoistureLabel: '初始水分 (%)',
    targetMoistureLabel: '目标水分 (%)',
    weightLabel: '初始重量',
    tempLabel: '烘干温度',
    customOption: '自定义 / 手动',
    beefOption: '牛肉干',
    watermelonOption: '脱水西瓜',
    appleOption: '苹果圈',
    mangoOption: '芒果片',
    mushroomOption: '菌菇',
    targetWeightLabel: '目标重量',
    waterEvaporatedLabel: '水分蒸发量',
    estimatedHoursLabel: '预估烘干时间',
    shrinkageLabel: '重量收缩量'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '精确计算食品脱水重量缩减与烘干时长',
      level: 2
    },
    {
      type: 'paragraph',
      html: '食物保存和食品安全依赖于达到正确的目标水分级别，本工具可帮助您预测烘干重量。'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
