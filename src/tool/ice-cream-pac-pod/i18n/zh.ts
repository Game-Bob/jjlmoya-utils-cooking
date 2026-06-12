import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "冰淇淋 PAC POD 计算器 低温配方指南";
const description = "计算冰淇淋的抗冻能力和甜味能力。制定精确的糖类配比、固形物百分比和供应温度。";
const faq = [
  {
    question: "冰淇淋配方中的PAC是什么？",
    answer: "PAC是Potere Anticongelante的缩写，代表抗冻能力。它决定了在给定供应温度下有多少水保持冻结状态，从而控制冰淇淋的物理硬度。"
  },
  {
    question: "什么是POD？为什么它很重要？",
    answer: "POD是Potere Dolcificante的缩写，代表相对甜味能力。它衡量相对于蔗糖（食糖）的甜度，蔗糖的基准值为100。"
  },
  {
    question: "为什么我们需要在冰淇淋中平衡多种糖类？",
    answer: "不同的糖具有独特的PAC和POD特性。例如，葡萄糖提供高抗冻能力和中等甜度，而蔗糖提供标准的质感和甜度。混合使用它们可以在不使产品过甜的情况下控制奶油感。"
  },
  {
    question: "冰淇淋的最佳固形物百分比是多少？",
    answer: "总固形物百分比通常在36%到42%之间。低于此范围的固形物百分比会导致冰渣口感，而高于此范围可能导致沙粒感或口感沉重。"
  }
];

const howTo = [
  {
    name: "设置基础混合物和供应温度",
    text: "定义基础液体混合物的重量，并输入您打算供应冰淇淋的目标供应温度。"
  },
  {
    name: "输入糖的用量",
    text: "调整蔗糖、葡萄糖、葡萄糖、转化糖和海藻糖等不同糖类的滑块来构建您的配方。"
  },
  {
    name: "分析PAC和POD值",
    text: "将计算出的PAC和POD值与您的目标温度推荐的目标值进行比较。"
  },
  {
    name: "验证固形物比例和舀取性",
    text: "确保总固形物百分比在最佳区域内，并检查舀取性指示器以预测最终质地。"
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
  slug: 'ice-cream-pac-pod',
  title: '冰淇淋 PAC POD 计算器',
  description: '计算冰淇淋的抗冻能力和甜味能力。制定精确的糖类配比、固形物百分比和供应温度。',
  faqTitle: '常见问题解答',
  ui: {
    title: "冰淇淋低温计算器",
    subtitle: "分子美食学精密低温配方仪表板",
    unitLabel: "单位系统",
    metricUnit: "公制（克）",
    imperialUnit: "英制（盎司）",
    baseWeightLabel: "基础混合物重量",
    targetTempLabel: "供应温度",
    sucroseLabel: "蔗糖",
    dextroseLabel: "葡萄糖",
    glucoseLabel: "葡萄糖 DE40",
    invertedLabel: "转化糖",
    trehaloseLabel: "海藻糖",
    pacLabel: "抗冻能力（PAC）",
    podLabel: "甜味能力（POD）",
    solidsLabel: "总固形物",
    targetPacLabel: "目标PAC",
    scoopabilityLabel: "舀取性状态",
    stoneState: "硬如石头",
    creamyState: "完美奶油感",
    soupState: "融化汤状",
    stoneDesc: "抗冻能力对于此温度过低。混合物将冻结如石头般坚硬。",
    creamyDesc: "PAC平衡最佳。冰淇淋将易于舀取并具有奶油感。",
    soupDesc: "抗冻能力过高。冰淇淋将快速融化并保持液态。",
    gLabel: "g",
    ozLabel: "oz",
    cLabel: "C",
    fLabel: "F",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '冰淇淋低温配方的科学原理与玻璃态转变控制',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '冰淇淋是由气泡、脂肪球、冰晶和未冻结浓缩血清相组成的复杂多相热力学乳状液。要达到完美的奶油感和舀取性，需要仔细控制混合物中水的凝固点降低。当温度降至冰点以下时，水开始结晶成冰。剩余液体血清中溶解溶质的浓度增加，进一步降低了其凝固点。冻结的冰晶与未冻结糖浆相之间的平衡决定了最终产品的硬度和顺滑度。',
    },
    {
      type: 'title',
      text: '理解PAC：抗冻能力与凝固点降低数学',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC（Potere Anticongelante）表示溶质相对于蔗糖的抗冻能力。蔗糖被指定为参考标准，PAC值为100。其机制由依数性控制，即凝固点降低取决于溶解在水中的活性分子数量，而不是它们的质量。葡萄糖（分子量180 g/mol）等单糖每克提供的分子数约为蔗糖（分子量342 g/mol）等二糖的两倍，产生190的PAC值。更高的PAC值意味着在给定温度下更多的水保持液态，防止冰淇淋冻结成石头般坚硬。',
    },
    {
      type: 'title',
      text: '理解POD：甜味能力与感官平衡',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'POD（Potere Dolcificante）是衡量与蔗糖（基准值100）相比相对甜度的指标。在配制高品质冰淇淋或意式冰淇淋时，甜度的平衡与结构坚固性同样重要。如果配制者仅使用蔗糖来降低凝固点（提高PAC），冰淇淋在达到所需柔软度之前就会变得过甜。为了绕过这一限制，分子美食学利用了葡萄糖（POD 70）、海藻糖（POD 45）或雾化葡萄糖DE40（POD 40）等糖类。这样可以自定义配置冷冻曲线，而不会压倒味觉。',
    },
    {
      type: 'title',
      text: '常见低温配方糖类比较数据库',
      level: 3,
    },
    {
      type: 'table',
      headers: ['糖类', '相对PAC', '相对POD', '固形物含量（%）', '烹饪用途'],
      rows: [
        ['蔗糖', '100', '100', '100%', '标准质地，清爽甜味，标准基础'],
        ['葡萄糖', '190', '70', '100%', '降低凝固点，增加柔软度，减少甜度'],
        ['葡萄糖 DE40', '90', '40', '95%', '增加质感，防止重结晶，增加粘度'],
        ['转化糖', '190', '130', '70%', '增加柔软度，保湿特性，增强水果风味'],
        ['海藻糖', '100', '45', '90%', '低甜度质感剂，保护蛋白质，清爽收尾'],
      ],
    },
    {
      type: 'title',
      text: '总固形物比例与结构乳状液稳定性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '总固形物包括配方中所有非水分元素，包括脂肪、非脂乳固形物、稳定剂、乳化剂和糖类。最佳冰淇淋混合物含有36%至42%的总固形物。如果固形物过低，高含水量会导致大冰晶生长和粗糙质地。如果固形物过高，粘度会过度增加，导致口感沉重和因乳糖结晶引起的潜在沙粒感。',
    },
    {
      type: 'title',
      text: '低温配方成功的实用步骤',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '确定展示柜的目标供应温度。意式冰淇淋通常在零下12摄氏度供应，而工业冰淇淋在零下18摄氏度更冷地供应。',
        '使用标准温度公式计算目标PAC。对于零下12摄氏度，目标PAC约为216。',
        '选择糖的混合。结合蔗糖以获得标准甜度，葡萄糖以降低凝固点，以及葡萄糖以改善质感和口感。',
        '验证总固形物是否在36%至42%的安全范围内，以确保最佳充气和在舌头上顺滑的融化特性。'
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
