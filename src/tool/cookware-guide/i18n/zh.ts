import type { ToolLocaleContent } from '../../../types';

const title = "智能锅具选择器：炊具指南";
const description = "根据您的烹饪风格选择最佳锅具的互动指南。铸铁 vs 不锈钢 vs 特氟龙。找到您完美的烹饪工具。";
const faq = [
  {
    question: '哪种煎锅最适合日常使用？',
    answer: '对于大多数人来说，高质量的不锈钢煎锅或保养良好的铸铁锅是最佳选择。不锈钢功用广泛且经久耐用，而铸铁提供无化学成分的天然不粘特性。',
  },
  {
    question: '为什么食物会粘在不锈钢锅上？',
    answer: '通常是因为温度不够或放入食物过早。尝试“莱顿弗罗斯特效应”：预热锅具，直到水滴像珍珠一样在锅面滚动。这时锅就准备好了。',
  },
  {
    question: '我如何知道我的锅具是否安全？',
    answer: '寻找“无 PFOA”标签。铸铁锅、碳钢锅和不锈钢锅是最安全、最耐用的选择，因为它们没有会随时间降解的涂层。',
  },
  {
    question: '给锅“开锅”或“养锅”是什么意思？',
    answer: '这是在金属（铁或碳钢）表面形成一层聚合油脂层的过程。这能防止生锈，并形成一个随使用次数增加而性能更佳的天然不粘表面。',
  },
  {
    question: '我应该在好锅具上花多少钱？',
    answer: '一套 2-3 个中高品质的锅具（不锈钢或铸铁）可以使用 20 年以上。投资一个好锅比买 5 个只能用 2 年的便宜锅更好。质量重于数量。',
  },
];
const howTo = [
  {
    name: '选择您的烹饪风格',
    text: '在高温（煎炸/封汁）、精细烹饪（鸡蛋）、炖菜（慢炖）或快餐烹饪之间进行选择。每种风格都有不同的要求。',
  },
  {
    name: '选择理想材质',
    text: '根据您的风格，该工具将推荐最佳材质：铸铁、不锈钢、铜或特氟龙。',
  },
  {
    name: '了解特性',
    text: '理解优缺点、保养和耐用性。然后选择符合您预算和需求的特定锅具。',
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
  slug: 'cookware-selector',
  title: '智能锅具选择器：炊具指南',
  description: '根据您的烹饪风格选择最佳锅具的互动指南。铸铁 vs 不锈钢 vs 特氟龙。找到您完美的烹饪工具。',
  faqTitle: '常见问题',
  faq,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'The Flavor Bible - Pairing, and Progress in Food',
      url: 'https://www.flavorprints.com/',
    },
    {
      name: 'On Food and Cooking - Harold McGee (食物与烹饪)',
      url: 'https://www.foodscience.org/',
    },
    {
      name: 'Salt Fat Acid Heat - Samin Nosrat',
      url: 'https://www.saltfatacidheat.com/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: '锅具材质：科学与实践',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '并非所有锅具都一样。每种材质都有不同的热力学特性，影响其热量分布、耐受温度以及与食物的相互作用。理解这些差异是选择正确工具的关键。',
    },
    {
      type: 'title',
      text: '铸铁：经典之作',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>优点：</strong> 极佳的蓄热性、均匀的分布、天然不粘（养好后）、可使用数世纪、随时间推移性能更佳。 <strong>缺点：</strong> 沉重、需要保养、可能生锈、加热时间较长、不适合长时间烹饪酸性食物。',
    },
    {
      type: 'title',
      text: '不锈钢：多面手',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>优点：</strong> 耐用、无需保养、适合酸性食物（酒、番茄）、易于清洁、用途广泛、性价比高。 <strong>缺点：</strong> 天然状态下不具不粘性、需要预热技巧、热平衡不均（建议选择多层底锅具）。',
    },
    {
      type: 'title',
      text: '特氟龙/不粘涂层：方便之选',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>优点：</strong> 瞬间不粘、烹饪容易、清洁方便、价格便宜。 <strong>缺点：</strong> 随时间和温度降解、每 3-5 年需要更换、在极高温（>260°C）下不安全。',
    },
  ],
  ui: {
    cookingStyle: '您平时如何烹饪？',
    material: '材质类型',
    highHeat: '高温',
    sear: '煎炸 / 封汁',
    delicate: '精细',
    fry: '鸡蛋 / 蛋饼',
    stew: '炖菜',
    slowCook: '慢炖',
    fast: '快速',
    quick: '快餐烹饪',
    recommendation: '推荐',
    characteristics: '特性',
    castIron: '铸铁',
    stainlessSteel: '不锈钢',
    carbon: '碳钢',
    copper: '铜',
    nonstick: '不粘 (特氟龙)',
    advantages: '优点',
    disadvantages: '缺点',
    maintenance: '保养',
    durability: '耐用性',
    heatRetention: '蓄热性',
    price: '价格',
    step1: '您平时如何烹饪？',
    step2: '保养需求',
    maintenanceLazy: '低 / 无需',
    maintenanceLazyDesc: '无需复杂的清洗流程。',
    maintenanceCare: '中等',
    maintenanceCareDesc: '正常的常规手洗。',
    maintenanceRitual: '开锅仪式 (高)',
    maintenanceRitualDesc: '我享受养锅的过程。',
    idealPan: '您的理想锅具',
    selectOptions: '选择选项',
    seeRecommendation: '查看您的推荐',
    pro: '优点',
    con: '缺点',
    masterTip: '大师建议',
    defaultTip: '结合不锈钢锅进行煎炸和不粘锅烹饪鸡蛋是任何高效厨房的基础。',
    stainlessName: '不锈钢',
    stainlessTag: '专业全能型',
    stainlessPro: '经久耐用，不具反应性。完美的上色。',
    stainlessCon: '需要技巧（温度控制）以防粘连。',
    stainlessTip: '使用莱顿弗罗斯特效应：当水滴像珍珠一样滚动时，锅就准备好了。',
    nonstickName: '不粘锅',
    nonstickTag: '追求极致便利',
    nonstickPro: '完全不粘。极易清洗。',
    nonstickCon: '寿命短（2-3 年）。不适用于高温。',
    nonstickTip: '始终坚持手洗，并使用木质或硅胶餐具，可使寿命翻倍。',
    castironName: '铸铁',
    castironTag: '长盛不衰的经典',
    castironPro: '难以置信的蓄热性。传世之作。',
    castironCon: '非常沉重。需要定期养锅。',
    castironTip: '加热慢，但一旦热起来就像坦克一样无可匹敌。适合煎牛排。',
    carbonName: '碳钢',
    carbonTag: '火尖上的灵动',
    carbonPro: '像钢一样轻巧，性能接近铸铁。',
    carbonCon: '如果保持潮湿会生锈。富有年代感。',
    carbonTip: '锅越黑、越旧越好用。这是顶级中式炒锅的秘密。',
    enamelName: '珐琅铸铁',
    enamelTag: '美食级品质',
    enamelPro: '慢炖的最佳选择。美观大气。',
    enamelCon: '价格昂贵。珐琅层较脆，怕猛烈磕碰。',
    enamelTip: '完美适于长时间炖煮。珐琅层可让您无忧烹饪酸性食物（如番茄）。',
  },
  schemas: [faqSchema, howToSchema, appSchema],
};
