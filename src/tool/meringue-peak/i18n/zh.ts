import type { ToolLocaleContent } from '../../../types';

const title = "蛋白霜与硬性打发计算器";
const description = "根据蛋白重量，精准计算法式、意式或瑞士蛋白霜所需的糖量。包含打发时间建议与甜品制作技巧。";
const faq = [
  {
    question: '蛋白与糖的理想比例是多少？',
    answer: '烘焙中的黄金法则比例是 1:2。每 1 克蛋白，应使用 2 克糖，以确保结构稳定且坚挺。',
  },
  {
    question: '如何判断蛋白已经打发到了“硬性发泡”？',
    answer: '硬性发泡（Stiff Peak）是指提起搅拌头时，蛋白霜形成一个竖直的尖角，且不会垂下。此外，蛋白霜应显示出非常迷人的光泽。',
  },
  {
    question: '哪种蛋白霜最适合用来装饰？',
    answer: '意式蛋白霜是三种主要类型中最稳定的。由于热糖浆会轻微烫熟蛋白中的蛋白质，形成一个更耐热且持久的结构。',
  },
  {
    question: '可以使用市售的瓶装杀菌蛋白液吗？',
    answer: '可以，但它们通常比新鲜蛋白需要更长的打发时间。一个小技巧是添加一小撮塔塔粉或几滴柠檬汁，以帮助增强稳定性。',
  },
];
const howTo = [
  {
    name: '称重蛋白',
    text: '使用电子秤获取蛋白的精准重量，确保其中没有留下一丝蛋黄。',
  },
  {
    name: '输入重量',
    text: '在计算器中输入该重量，即可获得法式、意式及瑞士式所需的对应糖量。',
  },
  {
    name: '选择工艺',
    text: '根据需求选择准备法式（基础型）、意式（稳定型）还是瑞士式（细腻型）蛋白霜。',
  },
  {
    name: '打发并检查',
    text: '参考建议的打发时间，持续检查质地直到达到稳定的硬性发泡状态。',
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
  slug: 'meringue-sugar-ratio-calculator-stiff-peaks',
  title,
  description,
  faqTitle: '常见问题',
  bibliographyTitle: '参考资料',
  ui: {
    whitesLabel: '蛋白重量',
    whitesPlaceholder: '例: 120',
    whitesUnit: 'g',
    typeLabel: '蛋白霜类型',
    typeFrench: '法式',
    typeItalian: '意式',
    typeSwiss: '瑞士式',
    timesHeading: '预计打发时间 (中高速运行)',
    stageSpumado: '鱼眼泡期',
    stageSpumadoDesc: '粗大气泡，类似于肥皂泡。',
    stageSoftPeaks: '湿性发泡',
    stageSoftPeaksDesc: '提起时尖角呈弯钩状向下。',
    stageStiffPeaks: '硬性发泡',
    stageStiffPeaksDesc: '尖角直立，质地光亮。',
    frenchSugarWhite: '细砂糖',
    frenchSugarPowder: '糖粉',
    frenchTip: '法式蛋白霜最常用且简单，非常适合烘烤马林糖或加入蛋糕糊。不建议生食。',
    frenchTime1: '1-2 分钟',
    frenchTime2: '3-5 分钟',
    frenchTime3: '7-9 分钟',
    italianSugarSyrup: '熬糖浆用糖',
    italianWater: '水',
    italianTip: '意式蛋白霜最为稳定。使用 118°C 的热糖浆冲入。非常适合装饰蛋糕，且可以直接食用。',
    italianTime1: '2 分钟',
    italianTime2: '5 分钟',
    italianTime3: '10-12 分钟',
    swissSugarWhite: '细砂糖',
    swissMaxTemp: '最高温度',
    swissTip: '瑞士蛋白霜需隔水加热至糖完全溶解。其质地非常丝滑，是制作意式奶油霜的基础。',
    swissTime1: '1-2 分钟',
    swissTime2: '4-6 分钟',
    swissTime3: '8-10 分钟',
    invalidWeightError: '请输入有效重量',
  },
  faq,
  howTo,
  bibliography: [
    {
      name: '拉鲁斯美食百科：蛋白霜类型与制作',
      url: 'https://laroussecocina.mx/palabra/merengue/',
    },
    {
      name: 'Exploratorium: Egg Science 鸡蛋的科学',
      url: 'https://www.exploratorium.edu/explore/cooking/egg-science',
    },
  ],
  seo: [
    {
      type: 'title',
      text: '蛋白霜与硬性打发大师指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '掌握<strong>硬性发泡</strong>和不同类型的蛋白霜是通往专业烘焙之路的基石。关键在于对重量的精准把握以及与糖的科学配比。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1:2',
          label: '蛋白:糖 比例',
          icon: 'mdi:scale-balance',
        },
        {
          value: '118°C',
          label: '意式热糖浆',
          icon: 'mdi:thermometer-high',
        },
        {
          value: '60°C',
          label: '瑞士隔水加热',
          icon: 'mdi:beaker-question-outline',
        },
        {
          value: '0%',
          label: '油脂 零容忍',
          icon: 'mdi:close-circle-outline',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '法式蛋白霜',
          icon: 'mdi:baguette',
          description: '最简单，但稳定性也最低。',
          points: [
            '适合烘烤 (马林糖)',
            '口感轻盈多气',
            '必须经过烘烤',
            '准备迅速',
          ],
        },
        {
          title: '意式蛋白霜',
          icon: 'mdi:pizza',
          description: '稳定性之冠。',
          highlight: true,
          points: [
            '完美适配蛋糕装饰',
            '由于烫熟因此可生食',
            '抗湿性强，不易塌陷',
            '结构致密且光亮',
          ],
        },
        {
          title: '瑞士蛋白霜',
          icon: 'mdi:cheese',
          description: '隔水加热制作。',
          points: [
            '奶油霜 (Buttercream) 基础',
            '质地极其丝滑',
            '优秀的夹心填料',
            '稳定性良好',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: '关于搅拌盆的“除油”秘诀',
      html: '在开始前，用纸巾蘸取少量白醋或柠檬汁擦拭搅拌盆。任何微笑的油脂残留都会导致蛋白无法打发。',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
