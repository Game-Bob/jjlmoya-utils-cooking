import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "干式熟成肉品步留率与成本计算器";
const description = "计算在家或在熟成库中对牛肉或其他肉类进行干式熟成（Dry Aging）时的重量流失、去皮修剪损耗以及实际的每公斤成本。";
const faq = [
  {
    question: "肉类在干式熟成过程中会流失多少重量？",
    answer: "在标准的30至45天干式熟成过程中，由于水分蒸发，肉类会流失约15%至25%的重量。此外，在烹饪前修剪干燥的外表皮（Pellicle）时，还会损失约15%的初始重量。"
  },
  {
    question: "干式熟成的最佳湿度是多少？",
    answer: "干式熟成肉类的理想相对湿度在75%至85%之间。如果湿度过低（低于75%），表面脱水过快，会形成一层阻碍内部水分蒸发的硬壳。如果湿度过高（高于85%），则会增加滋生霉菌和变质 ponder 的风险。"
  },
  {
    question: "为什么每公斤的可用单价会增加这么多？",
    answer: "因为水分流失和修剪去皮导致重量减少，最终的可食用重量小于起始重量。而购买整块肉的总成本保持不变，因此最终可食用部分的每公斤单价会随着重量损耗成比例上升。"
  }
];

const howTo = [
  {
    name: "输入起始重量",
    text: "输入干式熟成开始前整块肉的初始重量。"
  },
  {
    name: "设置熟成天数",
    text: "选择熟成的总天数，通常在1至60天之间。"
  },
  {
    name: "调整相对湿度",
    text: "设置熟成库的湿度（理想为75%至85%）以决定水分蒸发速度。"
  },
  {
    name: "输入原始单价",
    text: "提供生肉的每公斤价格，以便与最终熟成后的实际价格进行对比。"
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
  slug: 'dry-aging-meat-estimator',
  title,
  description,
  faqTitle: '常见问题',
  ui: {
    title: '干式熟成计算器',
    subtitle: '模拟重量损耗并计算最终可用成本',
    startWeightLabel: '起始重量',
    daysLabel: '熟成时间',
    pricePerKgLabel: '原始价格',
    humidityLabel: '相对湿度',
    finalWeightLabel: '最终可用重量',
    yieldLabel: '总可用步留率',
    originalCostLabel: '初始总成本',
    finalCostPerKgLabel: '最终可用价格',
    moistureLossLabel: '水分蒸发流失',
    trimmingLossLabel: '外皮修剪损耗',
    warningLowHumidity: '警告：湿度低于75%。表面可能脱水过快，导致表面硬化。',
    warningHighHumidity: '警告：湿度高于85%。细菌变质或产生有害霉菌的风险增加。',
    timelineTitle: '干式熟成进度时间轴',
    timelineInfoText: '点击时间轴以预览肉块的物理外观变化'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '干式熟成肉品的科学与经济学',
      level: 2
    },
    {
      type: 'paragraph',
      html: '干式熟成（Dry Aging）是一门结合了微生物学、生物化学和物理学的烹饪艺术，旨在将普通的牛肉部位转化为肉质柔嫩、风味浓郁的顶级美味。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '75-85%',
          label: '理想湿度',
          icon: 'mdi:water-percent'
        },
        {
          value: '1-3°C',
          label: '最佳温度',
          icon: 'mdi:thermometer'
        },
        {
          value: '15%',
          label: '修剪损耗率',
          icon: 'mdi:knife'
        },
        {
          value: '30-45天',
          label: '标准熟成期',
          icon: 'mdi:clock-outline'
        }
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
