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
      text: '食物在食物脱水机中会减轻多少重量？计算烘干时间和水分含量',
      level: 2
    },
    {
      type: 'paragraph',
      html: '无论您是在制作<strong>牛肉干 (beef jerky)</strong>、<strong>果皮丹 (fruit leather)</strong>、<strong>苹果干</strong>还是<strong>脱水西瓜</strong>，获得稳定品质的关键都在于了解水分含量。食品安全和长期保存取决于达到正确的目标水分级别。我们的<strong>食物脱水机水分估算工具</strong>可根据您的具体食材和设置，预测最终重量、水分蒸发量以及所需的烘干时间。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '70%', label: '肉类水分', icon: 'mdi:food' },
        { value: '92%', label: '西瓜水分', icon: 'mdi:water' },
        { value: '10%', label: '牛肉干目标值', icon: 'mdi:shield' },
        { value: '55°C', label: '平均烘干温度', icon: 'mdi:thermometer' }
      ]
    },
    {
      type: 'title',
      text: '脱水食物的合适水分含量是多少？',
      level: 2
    },
    {
      type: 'table',
      headers: ['食材', '初始水分', '目标水分', '常见烘干时间', '干燥完成标志'],
      rows: [
        ['牛肉干', '70%', '10-15%', '4-8 小时', '韧性强，可弯曲而不折断'],
        ['苹果圈', '86%', '15-20%', '6-10 小时', '柔韧呈皮革状，无粘手感'],
        ['芒果片', '84%', '15-18%', '6-10 小时', '有嚼劲，无肉眼可见水分'],
        ['蘑菇', '92%', '5-8%', '4-8 小时', '易碎且清脆'],
        ['脱水西瓜', '92%', '10-12%', '10-16 小时', '弯曲时会清脆折断']
      ]
    },
    {
      type: 'title',
      text: '食品脱水常见问题及解决方案',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>表面硬化 (Case hardening)：</strong> 外层干燥过快，将水分锁在内部。将温度降低 5-10 °C 并增加空气流通。',
        '<strong>储存期间发霉：</strong> 食物未干燥到足够低的水分含量。使用计算器找出您的目标重量，并通过水分测试进行确认。',
        '<strong>烘干不均匀：</strong> 切片厚度不一或脱水机超载。切成均匀的片，并留出足够的间隔。',
        '<strong>食物过干且易碎：</strong> 过度脱水会导致风味和质地流失。检查您特定食材的目标水分级别。'
      ]
    },
    {
      type: 'title',
      text: '按食物类型划分的烘干温度指南',
      level: 3
    },
    {
      type: 'paragraph',
      html: '温度既影响烘干速度，也影响食物品质。较高的温度使水分蒸发更快，但可能会导致表面硬化、营养流失和干燥不均匀。脱水机设置请参考以下通用指南：'
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '低温 40 至 50 °C',
          icon: 'mdi:thermometer',
          description: '最适合保留酶、营养成分和细腻的风味。',
          points: ['草药和绿叶蔬菜', '蘑菇', '生食 (raw food) 保存', '需要较长的烘干时间']
        },
        {
          title: '中温 50 至 60 °C',
          icon: 'mdi:thermometer',
          description: '大多数水果和蔬菜的标准温度范围。',
          highlight: true,
          points: ['苹果圈和芒果片', '大多数蔬菜', '果皮丹', '速度与品质的平衡']
        },
        {
          title: '高温 60 至 70 °C',
          icon: 'mdi:thermometer',
          description: '用于肉干和需要确保食品安全的高密度食物。',
          points: ['牛肉和火鸡肉干', '致密的根茎类蔬菜', '食品安全优先', '烘干时间较短']
        }
      ]
    },
    {
      type: 'tip',
      title: '水果切片前要进行预处理',
      html: '苹果、香蕉和梨在烘干前，浸入柠檬汁或抗坏血酸溶液中，以防止氧化变褐并保持色泽。'
    },
    {
      type: 'tip',
      title: '烘干过程中旋转托盘',
      html: '脱水机内部常有热量不均的区域。每 2-3 小时将托盘上下、前后旋转交换一次，以实现均匀烘干。'
    },
    {
      type: 'tip',
      title: '储存前进行均化（回潮）',
      html: '烘干后让食物冷却，并在密闭容器中均化 1 周。每天摇晃。如果出现冷凝水，说明需要继续烘干。'
    },
    {
      type: 'title',
      text: '食物脱水水分词汇表',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: '表面硬化', definition: '食物外表面干燥过快，形成坚硬的外壳，从而将水分锁在内部，阻碍完全脱水的状态。' },
        { term: '水分活度', definition: '微生物生长可利用的游离水测量值。耐储存的脱水食物，其水分活度 (aw) 通常低于 0.60。' },
        { term: '水分含量', definition: '水分重量占食物总重量的百分比。用于确定脱水进度和食品安全的目标水平。' },
        { term: '收缩率', definition: '脱水后剩余的原重量比例。规划单批制作量和储存的关键指标。' }
      ]
    },
    {
      type: 'summary',
      title: '完美脱水的关键要点',
      items: [
        '不同的食材初始水分含量差异极大 (70-92%)。使用预设可获得准确的估算。',
        '目标水分因食物而异：肉干为 10%，水果为 15-20%，蔬菜和蘑菇为 5-8%。',
        '烘干温度影响速度与品质。大多数食物请保持在 50-60 °C 范围内。',
        '表面硬化会破坏口感。避免温度超过 70 °C，并确保良好的空气流通。',
        '长期储存前，务必将脱水食物均化 1 周，以确保水分分布均匀。'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
