import type { ToolLocaleContent } from '../../../types';

const title = '食材缩放器 食谱份量调整';
const description = '根据份量自动缩放食谱。通过乘算或减算快速计算精确的食材用量，无需复杂换算。';

const faq = [
  {
    question: '为什么我的转换系数包含小数点？',
    answer: '因为烹饪比例并不总是整数。如果你将 4 人份的食谱缩放到 7 人份，系数正是 1.75。食材将乘以该数字，即使产生分数也比随意舍入更精确。',
  },
  {
    question: '输入“1/2 茶勺盐”会发生什么？',
    answer: '工具会优先识别数字。它将“1”识别为数量，将“/2”识别为单位的一部分。结果将是“0.5”，并进行正确的缩放。对于类似“1/2”的分数，建议直接输入“0.5”或通过除法逻辑识别。',
  },
  {
    question: '我应该对最终结果进行四舍五入吗？',
    answer: '这取决于食材。面粉类可以；但对于酵母或香料，精确度略次要（建议缩放到理论值的 75%）。关于鸡蛋：如果得到 2.3，建议使用 2 个全蛋 + 第 3 个鸡蛋的一部分（称重），或根据菜品情况舍入为 2。',
  },
  {
    question: '更改份量后结果没有变化，为什么？',
    answer: '请确保食材列表框中有内容。如果为空，则无法进行缩放。同时检查你的食材前是否有可识别的数字（如“500g”、“1/2 茶勺”）。',
  },
  {
    question: '它支持英制单位（盎司、杯）吗？',
    answer: '技术上是支持的，工具读取数字并进行缩放。但由于“杯”等体积单位的一致性较差，建议缩放前先转换为克。',
  },
];

const howTo = [
  {
    name: '输入份量',
    text: '在“原始”字段输入食谱设计的初始人数。在“目标”字段输入你实际要烹饪的人数。',
  },
  {
    name: '粘贴食材清单',
    text: '直接复制并粘贴清单。每行一个食材。工具会自动识别开头的数字（500g, 1/2, 2.5）并自动缩放。',
  },
  {
    name: '根据环境调整',
    text: '结果在数学上是精确的，但烹饪是艺术。香料建议缩放到 75%。大量制作时，酵母用量通常少于理论值。注意：烹饪时间从不随比例缩放。',
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
  operatingSystem: 'All',
};

export const content: ToolLocaleContent = {
  slug: 'recipe-ingredient-scaler-converter-servings',
  title,
  description,
  ui: {
    servings: '份量',
    original: '原始',
    desired: '目标',
    multiplyingFactor: '转换倍数',
    ingredientsList: '食材清单',
    pasteHere: '在此粘贴你的清单',
    exampleLine1: '例：',
    exampleLine2: '500g 面粉',
    exampleLine3: '300ml 水',
    exampleLine4: '10g 盐',
    result: '计算结果',
    copy: '复制',
    copied: '已复制',
    emptyState: '调整后的食材将显示在这里...',
    defaultIngredient1: '200g 面粉',
    defaultIngredient2: '100ml 牛奶',
    defaultIngredient3: '2 个鸡蛋',
  },
  faqTitle: '常见问题',
  faq,
  bibliographyTitle: '参考资料',
  bibliography: [
    {
      name: 'Harold McGee - On Food and Cooking (食物与烹饪科学)',
      url: 'https://en.wikipedia.org/wiki/Harold_McGee',
    },
    {
      name: 'The Flavor Bible by Karen Page and Andrew Dornenburg',
      url: 'https://www.flavorprints.com/',
    },
    {
      name: 'Modernist Cuisine - 科学缩放技术',
      url: 'https://www.modernistcuisine.com/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: '食谱缩放与转换大师指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>食材缩放</strong>是专业厨房中最关键且最易出错的任务之一。它不仅仅是数字的乘算，更涉及理解食物的化学和物理属性在体积和表面积变化时如何反应。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: 'x1.75',
          label: '4人变7人系数',
          icon: 'mdi:calculator',
        },
        {
          value: '75%',
          label: '香料调整比例',
          icon: 'mdi:shaker-outline',
        },
        {
          value: '0%',
          label: '时间不参与缩放',
          icon: 'mdi:timer-off',
        },
        {
          value: '100g',
          label: '参考基准单位',
          icon: 'mdi:weight-gram',
        },
      ],
    },
    {
      type: 'title',
      text: '线性缩放与环境缩放的区别',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '数学线性缩放',
          icon: 'mdi:math-log',
          description: '将所有数值直接乘以计算出的转换系数。',
          points: [
            '最适合面粉和基础液体',
            '精密精细烘焙的理想选择',
            '适用于小范围变化 (x2, x0.5)',
            '易于自动化精确计算',
          ],
        },
        {
          title: '厨房环境缩放',
          icon: 'mdi:chef-hat',
          description: '基于风味饱和度和水分蒸发率进行比例微调。',
          highlight: true,
          points: [
            '防止由于比例过大导致盐和香料过重',
            '考虑容器表面积带来的蒸发差异',
            '根据面团质量调整酵母活性',
            '需要主厨的经验和主观判断',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '基于用餐人数的转换系数',
      level: 3,
    },
    {
      type: 'table',
      headers: ['原始份量', '目标份量', '系数 (FC)', '调整难度'],
      rows: [
        ['2 人份', '4 人份', 'x 2.0', '低 (线性)'],
        ['4 人份', '6 人份', 'x 1.5', '低 (线性)'],
        ['4 人份', '10 人份', 'x 2.5', '中 (留意香料)'],
        ['4 人份', '25 人份', 'x 6.25', '高 (环境调整)'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '翻倍烹饪时的常见陷阱',
      html: '如果你发现缩放后口味过重（尤其是辣味或咸味），请将这些特定食材的缩放比例降至理论值的 75%。切勿翻倍烹饪时间；核心温度取决于食材厚度而非总重。',
    },
    {
      type: 'title',
      text: '标准化术语表',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: '转换系数 (Conversion Factor)',
          definition: '所有食材乘以的常数：目标用量 / 原始用量。',
        },
        {
          term: '烹饪损耗',
          definition: '由于蒸发或油脂流失导致的食材重量减少，非完全线性变化。',
        },
        {
          term: '毛重 vs 净重',
          definition: '食材处理前后的重量。我们始终基于原始食谱重量缩放。',
        },
        {
          term: '产出率 (Yield)',
          definition: '经过缩放和烹饪后最终成品的总重量或总量。',
        },
      ],
    },
    {
      type: 'tip',
      title: '溶打鸡蛋的小技巧',
      html: '如果计算得出 2.3 个鸡蛋，请打散一个蛋并称重，仅取其 30% 比例。这是保持高级西点精确度的唯一方法。',
    },
    {
      type: 'paragraph',
      html: '本工具简化了数学运算，让你能百分之百投入到最重要的事：创意与风味。',
    },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
