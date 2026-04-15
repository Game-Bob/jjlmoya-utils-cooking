import type { ToolLocaleContent } from '../../../types';

const title = "香蕉熟度诊断与保存：科学指南";
const description = "以科学精度分析香蕉的成熟状态。学习保存技术、乙烯生物化学以及营养优化方法。";
const faq = [
  {
    question: "为什么香蕉放进冰箱后会变黑？",
    answer: "低温会破坏香蕉皮的细胞壁，释放出氧化酚类物质的酶，产生黑色多酚。然而，香蕉果肉在冰箱里通常能比在室温下保持更长时间的紧实和甜度。",
  },
  {
    question: "如何让香蕉快速成熟？",
    answer: "将香蕉与一个苹果或西红柿一起放入封口的纸袋中。它们会释放乙烯气体，从而加速成熟。如果你非常赶时间，可以将它们放入低温烤箱中烘烤几分钟。",
  },
  {
    question: "吃带有褐斑的香蕉安全吗？",
    answer: "是的，完全安全。事实上，这些斑点表明淀粉已经转化为糖分，使香蕉更甜、更易消化。只有在出现霉菌、异味或过度腐烂时才需要丢弃。",
  },
  {
    question: "什么是乙烯？",
    answer: "乙烯是一种气体状的植物激素，负责调节植物生长和成熟。香蕉是一种呼吸跃变型（climacteric）水果，这意味着它在采摘后会继续产生乙烯并持续成熟。",
  },
];
const howTo = [
  {
    name: "观察颜色",
    text: "仔细检查香蕉皮的颜色，从绿色到深褐色，以确定当前的成熟状态。",
  },
  {
    name: "使用模拟器",
    text: "滑动熟度指示条，查看关于何时达到下一个阶段的精准预测。",
  },
  {
    name: "调整环境条件",
    text: "通过修改温度和湿度，观察它们如何影响香蕉的成熟速度。",
  },
  {
    name: "应用保存建议",
    text: "根据当前状态，遵循特定的保存或加速成熟建议。",
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
  slug: 'banana-ripeness',
  title: "香蕉熟度诊断与保存：科学指南",
  description: "以科学精度分析香蕉的成熟状态。学习保存技术、乙烯生物化学以及营养优化方法。",
  faqTitle: "常问问题",
  bibliographyTitle: "来源与参考文献",
  ui: {
    ripesnessLabel: "成熟状态",
    nextStageLabel: "预计进入下一阶段",
    daysUnit: "天",
    tempLabel: "温度",
    humidityLabel: "湿度",
    partnerToggleTitle: "共存熟化伙伴",
    partnerToggleSubtitle: "外部乙烯效应",
    conservationTitle: "保存技术",
    accelerationTitle: "加速熟化",
    stage1Name: "翡翠绿",
    stage1Desc: "抗性淀粉含量最高。质地非常坚硬。",
    stage1Conservation: "室温保存（18-20°C）。避免低温（<12°C）。",
    stage1Acceleration: "与苹果或熟西红柿一起放入纸袋。",
    stage2Name: "亮黄色",
    stage2Desc: "硬度与甜度初始化的完美平衡点。",
    stage2Conservation: "置于阴凉处，将果实与果梗分离以减缓乙烯传导。",
    stage2Acceleration: "保持成串状态并用塑料袋包裹。",
    stage3Name: "甜心斑点",
    stage3Desc: "抗氧化成分巅峰。甜度浓郁，质地软糯。",
    stage3Conservation: "放入冰箱保存果肉（尽管果皮会变黑）。",
    stage3Acceleration: "置于温暖处（靠近热源，避免直火）。",
    stage4Name: "肉桂褐熟",
    stage4Desc: "质地非常软烂。是无糖烘焙的理想天然代糖。",
    stage4Conservation: "剥皮后立即冷冻。",
    stage4Acceleration: "已达到成熟峰值。",
    stage5Name: "过度熟化 / 发酵",
    stage5Desc: "已进入深度降解阶段。",
    stage5Conservation: "不建议直接食用。",
    stage5Acceleration: "不适用",
  },
  faq: [
    {
      question: "为什么香蕉放进冰箱后会变黑？",
      answer: "低温会破坏香蕉皮的细胞壁，释放出氧化酚类物质的酶，产生黑色多酚。然而，香蕉果肉在冰箱里通常能比在室温下保持更长时间的紧实和甜度。",
    },
    {
      question: "如何让香蕉快速成熟？",
      answer: "将香蕉与一个苹果或西红柿一起放入封口的纸袋中。它们会释放乙烯气体，从而加速成熟。如果你非常赶时间，可以将它们放入低温烤箱中烘烤几分钟。",
    },
    {
      question: "吃带有褐斑的香蕉安全吗？",
      answer: "是的，完全安全。事实上，这些斑点表明淀粉已经转化为糖分，使香蕉更甜、更易消化。只有在出现霉菌、异味或过度腐烂时才需要丢弃。",
    },
    {
      question: "什么是乙烯？",
      answer: "乙烯是一种气体状的植物激素，负责调节植物生长和成熟。香蕉是一种呼吸跃变型（climacteric）水果，这意味着它在采摘后会继续产生乙烯并持续成熟。",
    },
  ],
  howTo: [
    {
      name: "观察颜色",
      text: "仔细检查香蕉皮的颜色，从绿色到深褐色，以确定当前的成熟状态。",
    },
    {
      name: "使用模拟器",
      text: "滑动熟度指示条，查看关于何时达到下一个阶段的精准预测。",
    },
    {
      name: "调整环境条件",
      text: "通过修改温度和湿度，观察它们如何影响香蕉的成熟速度。",
    },
    {
      name: "应用保存建议",
      text: "根据当前状态，遵循特定的保存或加速成熟建议。",
    },
  ],
  bibliography: [
    {
      name: 'Ethylene and Fruit Ripening: A Biological Review',
      url: '',
    },
    {
      name: 'Biochemical Changes in Musa acuminata during Ripening (Journal of Food Science)',
      url: 'https://www.foodsciencejournal.com/assets/archives/2017/vol2issue5/2-5-31-566.pdf',
    },
    {
      name: 'The Role of Respiration in Climacteric Fruits (Scientific American)',
      url: 'https://www.nature.com/articles/226976b0',
    },
  ],
  seo: [
    {
      type: 'title',
      text: "香蕉（Musa × paradisiaca）成熟科学",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "香蕉是世界上消费量最大的水果之一，但在生物学上也是最容易被误解的水果之一。与柑橘或葡萄等非跃变型水果不同，香蕉是一种 <strong>呼吸跃变型水果</strong>。这意味着它在采摘后仍会继续成熟，其细胞呼吸作用会剧烈增强，并产生一种关键的气体植物激素：<strong>乙烯</strong>。",
    },
    {
      type: 'paragraph',
      html: "从生化学角度看，成熟是一系列酶促反应的过程。在此过程中，诸如淀粉酶之类的酶会将复合碳水化合物（淀粉）分解为简单的糖（果糖、葡萄糖和蔗糖）。这种变化不仅改变了味道使其更甜，还通过降解细胞壁中的果胶改变了质地，形成了成熟香蕉特有的软糯细腻的口感。",
    },
    {
      type: 'title',
      text: "乙烯循环",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "乙烯充当生物开关的作用。一旦果实感应到极其微量的乙烯浓度，它就会激活产生更多乙烯的基因，从而形成正反馈调节回路。这就是为什么一根熟透的香蕉会加速果篮里周围所有香蕉的成熟。为了减缓这一过程，将已经出现褐斑的香蕉与青香蕉隔离开至关重要。",
    },
    {
      type: 'title',
      text: "冰箱存储误区",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "民间流传着香蕉绝对不能放冰箱的说法。实际情况更为复杂：低温（低于12°C）会导致香蕉皮细胞发生冷害，释放出使酚类物质氧化的酶，导致表皮变黑。然而，这仅仅影响外观美感。如果香蕉内部已经达到所需的成熟度，冷气反而会几乎完全停止果肉变软的过程，从而在额外几天内锁定其风味和内部质地。",
    },
    {
      type: 'title',
      text: "进阶保存策略",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "<strong>封口果柄：</strong> 用保鲜膜包裹成串香蕉的根部果柄，可以显著减少乙烯的释放，从而将单只香蕉的货架寿命延长多达72小时。",
    },
    {
      type: 'paragraph',
      html: "<strong>悬挂存储：</strong> 悬挂香蕉可以防止因重力挤压造成的瘀伤。受损组织释放乙烯的速度更快，会形成加速熟化的热点并向全果扩散。",
    },
    {
      type: 'paragraph',
      html: "<strong>冷冻疗法：</strong> 对于处于第4阶段（褐色）的香蕉，冷冻是最佳选择。冷冻前先去皮可以防止水分残留，从而保住纤维的品质。",
    },
    {
      type: 'title',
      text: "各阶段营养成分变化",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "随着香蕉的成熟，其营养剖面会发生剧烈变化，这使得消费者可以根据自己的健康目标将其作为特定的饮食工具。",
    },
    {
      type: 'table',
      headers: ["阶段", "抗性淀粉", "特征", "主要益处"],
      rows: [
        ["青色 (1-2)", "~80%", "质地极硬，淀粉含量最高", "肠道健康与血糖控制"],
        ["黄色 (3)", "~5%", "硬度与甜度最均衡", "快速供能与维生素B补充"],
        ["褐斑 (4)", "极少", "质地很软，含糖量极高", "抗氧化能力达到峰值"],
        ["褐色/过度熟化 (5)", "几乎为零", "极度软烂，进入发酵阶段", "不建议直接食用"],
      ],
    },
    {
      type: 'title',
      text: "结论与实践应用",
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>减少食物浪费：</strong> 精准诊断香蕉状态可以确定最佳食用时机，避免宝贵水果的损耗。',
        '<strong>优化营养收益：</strong> 根据需求选择：青香蕉的抗性淀粉有益肠道，带有斑点的香蕉可提供最强的抗氧化能力。',
        '<strong>科学规划摄入：</strong> 结合健康目标调整香蕉用途：无论是血糖控制、快速能量补给还是抗氧化需求。',
      ],
    },
    {
      type: 'tip',
      html: "<strong>降解预警：</strong> 相对湿度高于85%或温度高于25°C等外部因素会剧烈加速降解，使香蕉在几小时内从最佳状态变为不可食用。本模拟器可帮助您预判这些变化并做出科学规划。",
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
