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
    },
    {
      type: 'title',
      text: '理解失重动态与渐进曲线',
      level: 2
    },
    {
      type: 'paragraph',
      html: '干式熟成过程中的重量损耗呈渐进式。在前14天内，水分从外层快速蒸发，形成一层坚硬暗沉的外壳（风干外皮 pellicle），这层外壳会在2至3周后减缓进一步的水分蒸发。'
    },
    {
      type: 'list',
      items: [
        '<strong>第1-14天：</strong> 快速蒸发期。肉块损耗约10%至12%的重量（主要是水分）。肌纤维收缩，风味物质浓缩。',
        '<strong>第15-30天：</strong> 外皮形成后蒸发放缓。内源酶（钙激活酶和组织蛋白酶）分解软化胶原蛋白，显著提升肉质嫩度。',
        '<strong>第30-45天：</strong> 水分损耗极少。脂肪氧化赋予肉质深沉的坚果香气与类似蓝纹奶酪的独特熟成风味。',
        '<strong>修剪损耗：</strong> 熟成结束后，必须修剪掉坚硬的外壳，这部分大约占肉块总重量的15%。'
      ]
    },
    {
      type: 'title',
      text: '熟成室的环境控制要素',
      level: 2
    },
    {
      type: 'paragraph',
      html: '稳定的空气质量、温度和湿度是干式熟成的生命线。任何环境偏差都可能导致肉质腐败。'
    },
    {
      type: 'list',
      items: [
        '<strong>温度控制：</strong> 必须严格保持在 1°C 至 3°C 之间。低于 0°C 会使酶活性冻结；高于 4°C 则会导致致病菌快速滋生。',
        '<strong>相对湿度 (RH)：</strong> 最佳范围为 75% 至 85%。低于 70% 会导致表面硬化（锁定内部水分）；高于 85% 则易滋生有害霉菌。',
        '<strong>空气流动：</strong> 适度且持续的空气循环能带走表面蒸发的水份，使外皮均匀形成。'
      ]
    },
    {
      type: 'title',
      text: '干式熟成的成本分析与经济计算',
      level: 2
    },
    {
      type: 'paragraph',
      html: '由于水分蒸发和外皮修剪损耗，可食用肉品的最终重量明显减少，从而推高了每公斤可食用部位的实际成本。'
    },
    {
      type: 'table',
      headers: ['熟成天数', '平均蒸发损耗', '平均修剪损耗', '最终成品率', '成本倍率'],
      rows: [
        ['14天', '10.5%', '15.0%', '74.5%', '1.34倍'],
        ['21天', '13.5%', '15.0%', '71.5%', '1.40倍'],
        ['30天', '17.5%', '15.0%', '67.5%', '1.48倍'],
        ['45天', '21.0%', '15.0%', '64.0%', '1.56倍'],
        ['60天', '24.0%', '15.0%', '61.0%', '1.64倍']
      ]
    },
    {
      type: 'title',
      text: '食品安全指南：微生物学与霉菌辨别',
      level: 2
    },
    {
      type: 'paragraph',
      html: '安全的干式熟成依赖于益生菌群（特别是 <em>Thamnidium</em>、<em>Mucor</em> 和 <em>Rhizopus</em> 属真菌）的生长。严苛的卫生操作是防止污染的前提。'
    },
    {
      type: 'list',
      items: [
        '<strong>良好征兆：</strong> 干燥、坚硬、深紫色或深褐色的外壳。表面覆盖薄薄一层白色粉状或丝状霉菌（类似奶酪外皮）属于正常且安全的现象。',
        '<strong>危险征兆：</strong> 表面发粘、呈黏液状或潮湿。出现绿色、黑色或黄色霉菌。产生酸臭味、腐臭味或氨水味表明已腐败，必须丢弃。',
        '<strong>卫生要求：</strong> 放入新肉前必须对熟成室、挂钩和网架进行全面消毒。'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
