import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "乳酸发酵盐计算器 生物有机科学指南";
const description = "计算干盐腌和湿盐水的精确盐百分比。平衡细菌种群，防止霉菌，掌握食品保存技术。";
const faq = [
  {
    question: "为什么盐的百分比在乳酸发酵中至关重要？",
    answer: "盐通过渗透压抑制有害病原体和霉菌，同时让耐盐的乳酸菌（LAB）茁壮成长、发酵糖分并产生乳酸。"
  },
  {
    question: "干盐腌和湿盐水有什么区别？",
    answer: "干盐腌利用食物自身的水分溶解盐（适合切碎的卷心菜）。湿盐水则添加外部水和盐，以完全浸泡整块或切块的蔬菜。"
  },
  {
    question: "我可以用含氯的自来水进行发酵吗？",
    answer: "氯会抑制细菌生长。强烈建议使用过滤水或泉水，以获得一致的发酵效果。"
  },
  {
    question: "重量百分比比体积测量更好吗？",
    answer: "是的。不同种类的盐（犹太盐、海盐、食盐）具有不同的晶体大小和密度。以克为单位称量盐可以确保精确的盐度，无论使用哪种盐。"
  }
];

const howTo = [
  {
    name: "选择发酵模式",
    text: "如果使用蔬菜的天然汁液，请选择干模式；如果添加水以覆盖食材，请选择湿模式。"
  },
  {
    name: "称量食材",
    text: "以克为单位输入蔬菜的精确重量。如果使用湿盐水，也请输入水的重量。"
  },
  {
    name: "调整目标盐度",
    text: "滑动盐度百分比控制器。为了整体安全和最佳乳酸菌生长，目标设定在2.0%至3.5%之间。"
  },
  {
    name: "称量盐",
    text: "使用电子秤测量所需盐的精确克数。将其添加到发酵容器中。"
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
  slug: 'lacto-fermentation-salt-calculator',
  title: '乳酸发酵盐计算器',
  description: '计算干盐腌和湿盐水的精确盐百分比。平衡细菌种群，防止霉菌，掌握食品保存技术。',
  faqTitle: '常见问题',
  ui: {
    title: "乳酸发酵盐计算器",
    subtitle: "生物有机保存的精确盐度控制",
    unitLabel: "测量系统",
    metricUnit: "公制 (克)",
    imperialUnit: "英制 (盎司)",
    modeLabel: "发酵模式",
    dryMode: "干盐腌",
    wetMode: "湿盐水",
    vegWeightLabel: "蔬菜重量",
    waterWeightLabel: "水的重量",
    salinityLabel: "目标盐度 (%)",
    saltGramsLabel: "所需盐量",
    fineSaltLabel: "细盐（茶匙）",
    kosherSaltLabel: "犹太盐（茶匙）",
    statusDanger: "危险区",
    statusDangerDesc: "低于2.0%的盐度不足以阻止病原体和霉菌。请提高盐度以确保安全。",
    statusOptimal: "最佳LAB区",
    statusOptimalDesc: "2.0%至3.5%之间的盐度是乳酸菌（LAB）主导和安全发酵的理想范围。",
    statusInhibited: "抑制区",
    statusInhibitedDesc: "高于3.5%的盐度会减慢或停止发酵。适用于长期保存，但会延迟细菌活动。",
    petriTitle: "微生物模拟",
    scaleTitle: "电子秤显示屏",
    disclaimer: "注意：强烈建议使用电子秤称量盐，而不是使用体积测量。",
    kosherLabel: "犹太盐",
    fineLabel: "细盐",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '乳酸发酵化学与盐度控制的终极指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '乳酸发酵是由乳酸菌（LAB）驱动的动态生物化学过程，用于保存蔬菜和水果。整个机制依赖于创造一个选择性环境，使有益细菌茁壮成长，同时抑制腐败菌、霉菌和病原体。盐度控制是实现这种生物选择性的最关键手段。',
    },
    {
      type: 'title',
      text: '盐在保存中的生物化学作用',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '当盐被添加到生蔬菜中时，它通过一种称为<strong>渗透压</strong>的物理过程发挥作用。植物细胞外部的高浓度盐通过渗透作用（质壁分离）从植物组织中吸出水分和溶解的糖。这产生了营养丰富的盐水，为乳酸菌提供了完美的燃料。同时，渗透压会使不需要的霉菌、酵母和病原菌（如<em>大肠杆菌</em>或<em>肉毒杆菌</em>）的细胞膜脱水和裂解，这些病原菌无法耐受高盐度水平。',
    },
    {
      type: 'title',
      text: '微生物演替：LAB如何定殖发酵物',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '乳酸发酵不是由单一细菌物种完成的，而是由随着酸度增加而占主导地位的不同菌株的演替完成的。在典型的蔬菜发酵中，周期分为三个不同的阶段：',
    },
    {
      type: 'list',
      items: [
        '<strong>阶段1 - 肠膜明串珠菌：</strong>这种异型发酵细菌启动发酵。它在开始时非常活跃，产生乳酸、乙酸、二氧化碳（有助于创造厌氧环境）和乙醇。它迅速降低pH值，为后续物种准备培养基。',
        '<strong>阶段2 - 植物乳杆菌和短乳杆菌：</strong>当pH降至5.0以下时，<em>肠膜明串珠菌</em>死亡，耐酸的同型发酵细菌如<em>植物乳杆菌</em>接管。它们将剩余的简单糖 exclusively 发酵成乳酸，迅速降低pH值。',
        '<strong>阶段3 - 戊糖片球菌等：</strong>在长期发酵中，这些高度耐酸的细菌继续产酸，直到糖完全耗尽或pH达到约3.5至3.8，从而无限期地稳定环境。'
      ],
    },
    {
      type: 'title',
      text: '保护蔬菜质地：果胶的联系',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '家庭发酵中的一个常见问题是变软。植物细胞由一种称为果胶的结构性多糖结合在一起。腐败微生物产生称为<strong>果胶酶</strong>的酶，这些酶分解果胶并破坏植物细胞壁，导致变软。将盐度维持在2.0%以上可直接抑制这些果胶酶的活性。此外，未精制海盐中含有的钙离子或作为氯化钙添加的钙离子可以与果胶分子交联，形成果胶酸钙，从而保持泡菜和酸菜的脆爽口感。',
    },
    {
      type: 'title',
      text: '干盐腌与湿盐水的计算',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '理解盐的计算公式至关重要。对于干盐腌（通常用于切碎的蔬菜，如酸菜用卷心菜），盐的百分比仅根据蔬菜的重量计算。对于湿盐水（用于整块或大块蔬菜，如黄瓜或胡萝卜），盐的百分比必须根据<strong>蔬菜和添加水的总重量</strong>来计算。仅根据水的重量计算盐是一个常见错误，这会稀释最终的盐度，因为蔬菜内部的水分最终会稀释盐水。',
    },
    {
      type: 'table',
      headers: ['盐度范围', '微生物学状态', '典型用途', '安全水平'],
      rows: [
        ['低于2.0%', '病原体风险 / 霉菌危险', '不推荐', '低'],
        ['2.0% - 2.5%', '最佳乳酸菌繁殖', '酸菜、泡菜、腌黄瓜', '高'],
        ['2.5% - 3.5%', '发酵缓慢 / 高质地保持', '辣酱、大蒜、根茎类蔬菜', '高'],
        ['高于3.5%', '细菌抑制 / 仅保存', '橄榄、长期熟成辣椒、高温储存', '安全但无活性'],
      ],
    },
    {
      type: 'title',
      text: '为什么称量盐比体积测量更好',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '用体积（汤匙或茶匙）测量盐是非常不准确的。食盐很细且包装紧密，一茶匙可能重达6克。相比之下，犹太盐具有带气孔的大片状晶体，每茶匙仅重约4克。粗海盐介于两者之间。使用体积测量很容易导致发酵物盐分不足而危险，或因盐分过多而完全停滞。在电子秤上以克为单位称量食材可保证一致、安全且可重复的结果。',
    },
    {
      type: 'title',
      text: '乳酸发酵的故障排除和最佳实践',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '为确保发酵成功，请始终遵循以下规则：保持所有蔬菜完全浸没在盐水下，以防止好氧霉菌生长。使用干净的容器和重物。在凉爽的室温（18°C至22°C）下发酵，以防止阶段1的细菌被排挤。如果表面形成白色薄膜，请检查是卡姆酵母（一种因接触氧气而形成的无害野生酵母）还是霉菌。霉菌是蓬松且有颜色的；如果有霉菌，发酵物应丢弃。卡姆酵母可以刮掉，但可能会影响风味。',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
