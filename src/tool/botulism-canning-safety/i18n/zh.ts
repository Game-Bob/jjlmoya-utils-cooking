import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Botulism Canning Safety Checker Thermal Death Calculator";
const description = "计算肉毒杆菌的热孢子 reduction 和 F0 灭菌致死率。评估低酸和酸性罐头食品安全区域。";
const faq = [
  {
    question: "为什么肉毒梭菌是家庭罐装中的主要担忧？",
    answer: "肉毒梭菌是一种厌氧性芽孢形成细菌，能产生肉毒毒素，这是已知最致命的生物物质之一。芽孢具有极强的耐热性，在温度不足的情况下，可以在密封罐内的厌氧环境中存活。"
  },
  {
    question: "pH值4.6在食品保存中的关键意义是什么？",
    answer: "pH值低于4.6的食品被归类为酸性。在这种环境中，肉毒杆菌芽孢无法萌发或产生毒素。对于pH值为4.6或更高的食品，必须使用压力罐装以达到116摄氏度以上的温度来摧毁芽孢。"
  },
  {
    question: "什么是F0灭菌致死率值？",
    answer: "F0值衡量的是在121.11摄氏度下的等效灭菌时间。标准的低酸性灭菌过程要求F0值达到3.0分钟或更高，相当于芽孢数量的12个十进制减少（12D）。"
  },
  {
    question: "为什么不能在低酸性食品中使用水浴罐装？",
    answer: "水浴罐装只能达到沸点（100摄氏度）。这个温度不足以杀死低酸性食品中肉毒梭菌的耐热芽孢。芽孢会在室温下存活并产生毒素。"
  }
];

const howTo = [
  {
    name: "输入食材酸度",
    text: "测定并输入食材的pH值。如果pH值等于或大于4.6，则该食品为低酸性。"
  },
  {
    name: "选择罐装方法",
    text: "根据您的保存设备，选择水浴罐装或压力罐装。"
  },
  {
    name: "设定温度和时间",
    text: "输入罐装处理温度以及罐体保持在该温度下的时间（分钟）。"
  },
  {
    name: "评估安全诊断",
    text: "检查得出的F0值、芽孢减少次数和安全区域指示器，以确认是否符合标准。"
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
  slug: 'botulism-canning-safety',
  title: 'Botulism Canning Safety Checker',
  description: '计算肉毒杆菌的热孢子 reduction 和 F0 灭菌致死率。评估低酸和酸性罐头食品安全区域。',
  faqTitle: '常见问题',
  ui: {
    title: "罐装高压灭菌监测器",
    subtitle: "热致死诊断和肉毒杆菌安全评估工具",
    methodLabel: "罐装方法",
    waterBath: "水浴罐装",
    pressureCanner: "压力罐装",
    tempLabel: "罐装温度",
    timeLabel: "处理时间",
    phLabel: "食品pH值",
    f0Label: "F0致死率值",
    dLabel: "计算D值",
    sporesLabel: "芽孢数量",
    statusSafe: "灭菌完成",
    statusMarginal: "灭菌不充分",
    statusUnsafe: "肉毒杆菌高风险",
    statusSafeDesc: "热致死率超过目标F0值3.0分钟。芽孢已完全失活。",
    statusMarginalDesc: "处理达到部分失活，但低于12D安全标准。请调整时间或温度。",
    statusUnsafeDesc: "处理未能使肉毒梭菌失活。水浴中的低酸性食品处于危险状态。",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "分钟",
    logReductionLabel: "对数减少",
    dValueUnit: "分钟",
    indicatorSectionTitle: "诊断仪表",
    visualizerSectionTitle: "芽孢减少",
    f0Tooltip: "在121.11°C下的等效灭菌时间（分钟）。安全阈值为3.0或更高。",
    dTooltip: "对数减少时间：在当前温度下破坏90%芽孢所需的时间（分钟）。",
    logReductionTooltip: "十倍减少的次数。12D减少是安全标准。",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '热处理和芽孢失活动力学的科学机制',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '罐装中的热处理通过破坏病原菌和腐败微生物来确保商业无菌。低酸性食品保存安全指南的主要焦点是肉毒梭菌。与营养细胞相比，肉毒杆菌芽孢具有极高的耐热性。要使这些芽孢失活，需要在一个计算好的时间内施以高温的热致死过程。温度与失活速率之间的数学关系通过对数减少时间（D值）和温度依赖系数（z值）来表示。',
    },
    {
      type: 'title',
      text: '食品分类和关键的pH 4.6安全阈值',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'pH值4.6是保存安全的分界线。pH值低于4.6的酸性食品自然抑制肉毒杆菌芽孢的萌发和毒素产生。对于这些食品，在沸水浴中于100摄氏度下处理就足够了。然而，pH值4.6及以上的低酸性食品必须经过压力罐装以提高蒸汽温度，实现完全的热芽孢破坏。下表详细列出了常见食材的分类和罐装方法。',
    },
    {
      type: 'table',
      headers: ['食品组别', 'pH范围', '所需罐装方法', '常见示例'],
      rows: [
        ['高酸性', '低于4.0', '水浴罐装', '苹果、浆果、柑橘、桃子、醋泡菜'],
        ['酸化或中酸性', '4.0至4.6', '酸调整水浴罐装', '番茄、无花果、梨'],
        ['低酸性', '4.6及以上', '必须压力罐装', '肉类、海鲜、豆类、玉米、土豆、汤类'],
      ],
    },
    {
      type: 'title',
      text: '海拔调整和沸点安全修正',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '随着海拔升高，大气压降低，导致水的沸点降至100摄氏度以下。在水浴罐装中，这个较低的温度会增加芽孢的D值，因此需要更长的处理时间。在压力罐装中，必须提高表盘式或重锤式压力表的设置，以维持目标内部灭菌温度。以下是沸点和所需压力罐装调整的参考指南。',
    },
    {
      type: 'table',
      headers: ['海拔范围', '水的沸点', '所需表盘式压力表压力', '所需重锤式压力表压力'],
      rows: [
        ['0至300米', '100.0 °C', '11 PSI（121 °C）', '10 PSI（121 °C）'],
        ['300至600米', '99.0 °C', '11 PSI（121 °C）', '15 PSI（121 °C）'],
        ['600至900米', '98.0 °C', '12 PSI（121 °C）', '15 PSI（121 °C）'],
        ['900至1200米', '97.0 °C', '13 PSI（121 °C）', '15 PSI（121 °C）'],
        ['1200至1500米', '96.0 °C', '13 PSI（121 °C）', '15 PSI（121 °C）'],
        ['1500至2000米', '94.5 °C', '14 PSI（121 °C）', '15 PSI（121 °C）'],
      ],
    },
    {
      type: 'title',
      text: '12D芽孢减少概念如何预防肉毒中毒',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '热对细菌的破坏是对数性的。D值表示在特定温度下摧毁90%芽孢数量所需的时间，这相当于一个十进制的对数减少。肉毒梭菌的参考D值是0.21分钟（在121.11摄氏度下）。为了实现高安全裕度，商业标准要求进行十二个十进制减少的过程（12D），意味着芽孢数量减少10的12次方分之一。这产生了3.0分钟的目标F0值，保证了低酸性食品的安全性。',
    },
    {
      type: 'title',
      text: '实用家庭罐装指南和安全提示',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '番茄的天然pH值在关键4.6阈值附近波动，因此在用水浴处理前务必用柠檬汁或柠檬酸进行酸化处理。',
        '切勿缩短处理时间或降低温度。热致死动力学是对数性的，微小的调整也可能让芽孢存活下来。',
        '确保压力罐上的表盘式压力表每年进行准确度测试，因为错误的压力读数会直接影响内部灭菌温度。',
        '通过调整水浴中的处理时间或增加压力罐的PSI设置来补偿海拔差异。',
        '即使整个食谱含有酸性成分，也要避免在水浴罐中处理含有肉类或豆类等低酸性食材的混合食谱。',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
