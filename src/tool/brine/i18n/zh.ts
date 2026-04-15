import type { ToolLocaleContent } from "../../../types";

const title = "平衡盐水计算器";
const description = "实现多汁肉类与完美发酵的平衡科学。根据食材和水的总重量计算精确的盐度。";
const faq = [
  {
    question: "什么是平衡盐水法（Equilibrium Brining）？",
    answer: "平衡法是根据总重量（水+食材）而非仅根据水量来计算盐量。这保证了无论您使用多少食材，都能获得一致的盐分浓度。",
  },
  {
    question: "做泡菜需要多少盐？",
    answer: "对于发酵蔬菜（酸黄瓜、酸菜、泡菜），建议盐度在 2% 到 3% 之间。对于肉类，建议在 1.5% 到 2% 之间。计算器会根据您的食材重量给出精确数值。",
  },
  {
    question: "经过盐水腌制后的肉可以冷冻吗？",
    answer: "可以，这是理想的选择。盐水能防止冷冻灼伤，解冻后肉已腌制好可直接烹饪。但请避免冷冻发酵蔬菜，因为它们会变软变烂。",
  },
  {
    question: "为什么要向盐水中加糖？",
    answer: "糖有两个作用：促进肉类的美拉德反应（上色）以及平衡咸味，而不会让产品变甜。它不会让您的盐水变成甜点。",
  },
];
const howTo = [
  {
    name: "确定您的目标",
    text: "决定是进行肉类盐腌（1.5-2%）、发酵（2-3%）、调制酱汁（3.5%）还是长期保存（5%+）。每种目标所需的时间和用途都不同。",
  },
  {
    name: "称重食材和水",
    text: "精确称量产品（肉、蔬菜）和水的重量。精准度至关重要：即使 5 克的偏差也会改变结果。请使用精密天平。",
  },
  {
    name: "使用工具计算",
    text: "在计算器中输入重量，并根据产品类型调整盐度。工具会准确告知您需要多少盐和糖。",
  },
  {
    name: "溶解并混合",
    text: "在放入食材前，将盐完全溶解在冷水中。腌制肉类时，确保盐水淹没整块肉。腌制发酵食品时，食材必须完全压没在水平面下。",
  },
  {
    name: "发酵或腌制",
    text: "根据类型进行冷藏或静置：肉类 4-48 小时，发酵食品 1-3 周。确切时间取决于环境温度和个人口味。",
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
  slug: 'equilibrium-brining-calculator-meat-fermentation-ratios',
  title: "平衡盐水计算器",
  description: "实现多汁肉类与完美发酵的平衡科学。根据食材和水的总重量计算精确的盐度。",
  ui: {
    calculator: "计算器",
    subtitle: "输入重量以计算完美平衡。",
    productWeight: "食材重量 (g)",
    waterWeight: "水量 (g)",
    desiredSalinity: "目标盐度",
    meat: "肉类 (1.5%)",
    fermented: "发酵食品 (2.0%)",
    sauces: "酱汁 (3.5%)",
    preserves: "保存食品 (5.0%)",
    addSugar: "添加糖",
    sugarHint: "平衡风味并促进上色（取盐量的 50%）",
    saltNeeded: "需盐量",
    sugarOptional: "糖（可选）",
    estimatedTime: "预计时间",
    product: "产品",
    total: "总计",
    unitGrams: "克",
    timeMeatsLabel: "时长（肉类）",
    timeMeatsDuration: "4 - 48 小时",
    timeVegetablesLabel: "时长（蔬菜）",
    timeVegetablesDuration: "1 - 3 周",
    timePreservesLabel: "时长（保存食品）",
    timePreservesDuration: "1 个月以上",
  },
  faqTitle: "常见问题",
  bibliographyTitle: "来源与参考文献",
  faq,
  howTo,
  bibliography: [
    {
      name: "The Noma Guide to Fermentation - René Redzepi & David Zilber",
      url: "https://www.nomacph.com/",
    },
    {
      name: "Salt, Fat, Acid, Heat - Samin Nosrat",
      url: "https://www.saltfatacidheat.com/",
    },
    {
      name: "Pollan, Michael - Cooked",
      url: "https://michaelpollan.com/",
    },
  ],
  seo: [
    {
      type: 'title',
      text: '平衡盐水与发酵大师指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>平衡盐水法</strong>是保证多汁且安全效果的终极技术。与传统方法不同，它基于水和产品的<strong>总重量</strong>来计算盐量，确保无论容器体积如何，盐度都能保持恒定。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1.5 - 2%',
          label: '肉类理想比例',
          icon: 'mdi:food-steak',
        },
        {
          value: '2.5 - 3%',
          label: '发酵比例',
          icon: 'mdi:flask-outline',
        },
        {
          value: '18-22°C',
          label: '发酵温度',
          icon: 'mdi:thermometer',
        },
        {
          value: '0.5%',
          label: '平衡加糖量',
          icon: 'mdi:shaker-outline',
        },
      ],
    },
    {
      type: 'title',
      text: '干腌与湿腌的区别',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '干腌 (Dry Brining)',
          icon: 'mdi:shaker-outline',
          description: '将盐直接抹在食材表面，不添加额外水分。',
          points: [
            '禽类表皮更脆',
            '食材风味更浓缩',
            '占用冰箱空间更小',
            '适合牛排和整鸡',
          ],
        },
        {
          title: '湿腌 (Wet Brining)',
          icon: 'mdi:water',
          description: '将食材浸泡在按平衡法计算好的盐水中。',
          highlight: true,
          points: [
            '水分保持力极其卓越',
            '方便添加香料调味',
            '大块食材腌制更均匀',
            '适合火鸡、猪里脊和鱼肉',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '应用场景对应时长与盐度',
      level: 3,
    },
    {
      type: 'table',
      headers: ['名称', '盐度 (%)', '最小耗时', '主要目的'],
      rows: [
        ['禽类与猪肉', '1.5% - 2.0%', '12 - 24 小时', '保持多汁与鲜嫩'],
        ['白肉鱼', '1.0% - 1.5%', '20 - 45 分钟', '稳固肉质'],
        ['乳酸发酵', '2.5% - 3.0%', '7 - 21 天', '微生物安全'],
        ['酱汁与保存食品', '3.5% - 5.0%', '1个月以上', '长期保存'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '盐水质量判定',
      html: '如果盐水发出恶臭（非发酵酸味）、出现彩色霉菌（黑色、粉黄色）或食材变得极度软烂，请立即丢弃。表面出现的白色薄膜（产膜酵母）在发酵过程中属于正常现象，可以撇除。',
    },
    {
      type: 'title',
      text: '腌制专家术语表',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: '渗透作用',
          definition: '盐分进入食品细胞以平衡浓度的物理过程。',
        },
        {
          term: '变性',
          definition: '盐对蛋白质的作用，使其在烹饪过程中能锁住更多水分。',
        },
        {
          term: '产膜酵母',
          definition: '有时出现在发酵液表面的白色薄层；虽然无害但表明酸度不足。',
        },
        {
          term: '乳酸发酵',
          definition: '在无氧环境下，细菌将糖转化为乳酸从而保存食材的过程。',
        },
      ],
    },
    {
      type: 'tip',
      title: '水质要求',
      html: '避免使用氯含量高的自来水，因为氯会抑制发酵中有益菌的生长。请使用过滤水或将自来水静置 24 小时后再使用。',
    },
    {
      type: 'paragraph',
      html: '我们的平衡计算器为您排除配方中的不确定因素，让您像专业大厨一样充满信心地烹饪。',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
