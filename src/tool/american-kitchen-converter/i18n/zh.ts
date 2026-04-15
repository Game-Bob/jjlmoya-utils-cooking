import type { ToolLocaleContent } from '../../../types';

const title = "美式厨房单位转换器：杯转克与温度换算";
const description = "将美式量杯（cups）、大勺（tablespoons）及华氏度（Fahrenheit）转换为公制单位。为您精准解读美式食谱的专业指南。";
const faq = [
  {
    question: "1杯（cup）和250毫升（ml）有什么区别？",
    answer: "美式标准的1杯等于236.588毫升，而不是250毫升。在实际烹饪中，我们通常按240毫升计算。虽然看起来只有4%的微小差异，但在制作马卡龙或慕斯等精密食谱时，这可能导致失败。",
  },
  {
    question: "为什么面粉的重量并不总是相同？",
    answer: "因为面粉会随着时间推移和运输过程而沉降压实。新鲜过筛的面粉比储存在柜子里的面粉要轻。这就是为什么专业烘焙师总是使用重量称重，而不是测量体积。",
  },
  {
    question: "Tbsp和大勺（tablespoon）/小勺（teaspoon）有什么区别？",
    answer: "1 Tablespoon (Tbsp/大勺) = 15毫升。1 Teaspoon (tsp/小勺) = 5毫升。1大勺等于3小勺。在烘焙食谱中，香料（通常以tsp测量）的微小误差往往会影响最终口味。",
  },
  {
    question: "美式量杯（US cup）和英制量杯一样吗？",
    answer: "不一样。1美制量杯 = 236毫升，而1英制量杯（英国）= 284毫升。两者相差20%。大多数美国博主使用的是美制标准。如果食谱未注明，请默认按美制计算。",
  },
  {
    question: "烤箱的“gas 4”对应多少度？",
    answer: "Gas 4 = 180°C = 350°F。这是英国常用的燃气刻度。在厨房中，请对应您烤箱的具体刻度或电子显示进行调整。",
  },
];
const howTo = [
  {
    name: "选择转换类型",
    text: "在杯转克、大勺/小勺转克或华氏度转摄氏度之间进行选择。",
  },
  {
    name: "选择食材",
    text: "不同食材的密度不同。面粉、糖、黄油：它们的容重各不相同。",
  },
  {
    name: "推入数值",
    text: "输入杯数、勺数或温度。转换器将立即计算出对应的公制数值。",
  },
  {
    name: "调整您的食谱",
    text: "有了精准的转换数值，您现在可以以专业水准制作美式食谱了。",
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
  slug: 'us-cooking-conversion-calculator-cups-to-grams-fahrenheit',
  title: "美式厨房单位转换器：杯转克与温度换算",
  description: "将美式量杯（cups）、大勺（tablespoons）及华氏度（Fahrenheit）转换为公制单位。为您精准解读美式食谱的专业指南。",
  faqTitle: "常问问题",
  bibliographyTitle: "参考资料",
  ui: {
    copied: "已复制",
    noHistory: "暂无记录",
    load: "加载",
    delete: "删除",
    tabCups: "杯转克",
    tabSpoons: "勺转克",
    tabTemperatures: "温度换算",
    tabCupsAriaLabel: "杯转克换算",
    tabSpoonsAriaLabel: "勺转克换算",
    tabTempsAriaLabel: "烤箱温度换算",
    stepSelectIngredient: "选择食材",
    stepHowManyCups: "多少杯（Cups）？",
    stepSelectMeasure: "选择计量单位",
    stepQuantity: "数量",
    stepOvenConversion: "烤箱温度转换",
    stepFrequentTemps: "常见烤箱温度",
    cupFlour: "面粉",
    cupFlourSub: "120g / 杯",
    cupWhiteSugar: "白砂糖",
    cupWhiteSugarSub: "200g / 杯",
    cupBrownSugar: "红糖/黑糖",
    cupBrownSugarSub: "220g / 杯",
    cupPowderSugar: "糖粉",
    cupPowderSugarSub: "115g / 杯",
    cupButter: "黄油",
    cupButterSub: "227g / 杯",
    cupCocoa: "可可粉",
    cupCocoaSub: "85g / 杯",
    cupLiquids: "液体",
    cupLiquidsSub: "240g / 杯",
    cupOats: "燕麦",
    cupOatsSub: "90g / 杯",
    cupFlourAriaLabel: "面粉",
    cupWhiteSugarAriaLabel: "白砂糖",
    cupBrownSugarAriaLabel: "红糖",
    cupPowderSugarAriaLabel: "糖粉",
    cupButterAriaLabel: "黄油",
    cupCocoaAriaLabel: "可可",
    cupLiquidsAriaLabel: "液体",
    cupOatsAriaLabel: "燕麦",
    stepperMinus: "减少",
    stepperPlus: "增加",
    cupsAmountLabel: "杯数",
    spoonQuantityLabel: "分量",
    cupQuick1_4: "1/4 杯",
    cupQuick1_3: "1/3 杯",
    cupQuick1_2: "1/2 杯",
    cupQuick1: "1 杯",
    unitGrams: "克",
    unitGramsML: "克 / 毫升",
    spoonMeasureLabel: "选择计量单位",
    spoonTablespoon: "大勺 (Tbsp)",
    spoonTeaspoon: "小勺 (tsp)",
    spoonTablespoonAriaLabel: "大勺",
    spoonTeaspoonAriaLabel: "小勺",
    spoonSelectIngredient: "选择食材",
    spoonLeavening: "膨松剂",
    spoonLeaveningSub: "泡打粉",
    spoonSalt: "细盐",
    spoonSaltSub: "矿物盐",
    spoonSugar: "白砂糖",
    spoonSugarSub: "颗粒状",
    spoonLiquids: "液体",
    spoonLiquidsSub: "水、油",
    spoonLeavingAriaLabel: "化学膨松剂",
    spoonSaltAriaLabel: "盐",
    spoonSugarAriaLabel: "白砂糖",
    spoonLiquidsAriaLabel: "液体",
    spoonQuick1_4: "1/4",
    spoonQuick1_2: "1/2",
    spoonQuick1: "1",
    spoonQuick2: "2",
    tempFahrenheit: "华氏度 (°F)",
    tempCelsius: "摄氏度 (°C)",
    tempFahrenheitAriaLabel: "华氏度",
    tempCelsiusAriaLabel: "摄氏度",
    tempPreset275: "275°F",
    tempPreset275Desc: "135°C - 烘干",
    tempPreset275AriaLabel: "设置为275华氏度",
    tempPreset325: "325°F",
    tempPreset325Desc: "165°C - 实心蛋糕",
    tempPreset325AriaLabel: "设置为325华氏度",
    tempPreset350: "350°F",
    tempPreset350Desc: "175°C - 甜点标准",
    tempPreset350AriaLabel: "设置为350华氏度",
    tempPreset400: "400°F",
    tempPreset400Desc: "200°C - 面包 / 塔类",
    tempPreset400AriaLabel: "设置为400华氏度",
    tempPreset425: "425°F",
    tempPreset425Desc: "220°C - 比萨 / 酥皮",
    tempPreset425AriaLabel: "设置为425华氏度",
  },
  seo: [
    {
      type: 'title',
      text: "美式厨房计量单位转换全指南",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "将<strong>量杯转换为克</strong>或<strong>华氏度转换为摄氏度</strong>是掌握国际食谱的第一步。美式烹饪高度依赖体积测量，这在面粉等干燥食材中可能引入高达25%的误差。",
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: "120g",
          label: "1量杯面粉",
          icon: "mdi:grain",
        },
        {
          value: "227g",
          label: "一条黄油 (Stick)",
          icon: "mdi:cube-outline",
        },
        {
          value: "175°C",
          label: "等同于350°F",
          icon: "mdi:thermometer",
        },
        {
          value: "240ml",
          label: "1量杯容积",
          icon: "mdi:water-percent",
        },
      ],
    },
    {
      type: 'title',
      text: "体积与重量的关键区别",
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: "按体积测量 (量杯)",
          icon: "mdi:cup-water",
          description: "常用于美国本土食谱。测量食材所占的空间。",
          points: [
            "高度依赖食材的压实程度",
            "面粉测量的常见误差达20-30%",
            "不同品牌的量杯标准可能不统一",
            "测量前需过筛以获得更高精度",
          ],
        },
        {
          title: "按重量测量 (克)",
          icon: "mdi:scale-balance",
          description: "专业烘焙和欧洲的标准。提供绝对的精准度。",
          highlight: true,
          points: [
            "始终保持 +/- 1g 的精度",
            "结果稳定且可重复",
            "减少清洗（仅需一个碗）",
            "方便进行数学化的配方缩放",
          ],
        },
      ],
    },
    {
      type: 'title',
      text: "常见食材换算基准",
      level: 3,
    },
    {
      type: 'table',
      headers: ["食材", "1量杯 (体积)", "克 (重量)", "密度"],
      rows: [
        ["小麦粉", "1量杯", "120g", "低"],
        ["白砂糖", "1量杯", "200g", "中"],
        ["红糖", "1量杯", "220g (压实后)", "高"],
        ["黄油", "1量杯 (2条)", "227g", "高"],
        ["可可粉", "1量杯", "85g", "极低"],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: "您的蛋糕做出来太干吗？",
      html: "使用量杯时最常见的问题是直接“用杯子在袋子里舀”面粉。这会压实粉末，导致您每杯面粉多加了多达40克。解决方法是<strong>始终使用我们的转换器将其换算为克</strong>。",
    },
    {
      type: 'title',
      text: "美式单位术语表",
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: "Cup (量杯)",
          definition: "体积单位，约等于240毫升。是美式烹饪的基石。",
        },
        {
          term: "Tbsp (大勺)",
          definition: "餐勺，相当于15毫升或3小勺。",
        },
        {
          term: "tsp (小勺)",
          definition: "咖啡匙，相当于5毫升。对于盐和膨松剂的用量至关重要。",
        },
        {
          term: "Stick of Butter (黄油条)",
          definition: "美国常见的黄油规格，重量准确为113.5克（半量杯）。",
        },
      ],
    },
    {
      type: 'tip',
      title: "用勺子的技巧",
      html: "如果没有秤且必须使用量杯，请用勺子将面粉松散地填入杯中，不要按压，然后用刀背刮平。这比直接用杯子舀要精准得多。",
    },
    {
      type: 'paragraph',
      html: "使用专业的转换工具将制作异国食谱的迷茫转化为烘焙完美的成就感。",
    },
  ],
  faq: [
    {
      question: "1杯（cup）和250毫升（ml）有什么区别？",
      answer: "美式标准的1杯等于236.588毫升，而不是250毫升。在实际烹饪中，我们通常按240毫升计算。虽然看起来只有4%的微小差异，但在制作马卡龙或慕斯等精密食谱时，这可能导致失败。",
    },
    {
      question: "为什么面粉的重量并不总是相同？",
      answer: "因为面粉会随着时间推移和运输过程而沉降压实。新鲜过筛的面粉比储存在柜子里的面粉要轻。这就是为什么专业烘焙师总是使用重量称重，而不是测量体积。",
    },
    {
      question: "Tbsp和大勺（tablespoon）/小勺（teaspoon）有什么区别？",
      answer: "1 Tablespoon (Tbsp/大勺) = 15毫升。1 Teaspoon (tsp/小勺) = 5毫升。1大勺等于3小勺。在烘焙食谱中，香料（通常以tsp测量）的微小误差往往会影响最终口味。",
    },
    {
      question: "美式量杯（US cup）和英制量杯一样吗？",
      answer: "不一样。1美制量杯 = 236毫升，而1英制量杯（英国）= 284毫升。两者相差20%。大多数美国博主使用的是美制标准。如果食谱未注明，请默认按美制计算。",
    },
    {
      question: "烤箱的“gas 4”对应多少度？",
      answer: "Gas 4 = 180°C = 350°F。这是英国常用的燃气刻度。在厨房中，请对应您烤箱的具体刻度或电子显示进行调整。",
    },
  ],
  bibliography: [
    {
      name: 'King Arthur Baking: Ingredient Weight Chart',
      url: 'https://www.kingarthurbaking.com/learn/ingredient-weight-chart',
    },
    {
      name: 'Culinary Institute of America: Conversions and Equivalents',
      url: 'https://www.ciachef.edu/',
    },
  ],
  howTo: [
    {
      name: "选择转换类型",
      text: "在杯转克、大勺/小勺转克或华氏度转摄氏度之间进行选择。",
    },
    {
      name: "选择食材",
      text: "不同食材的密度不同。面粉、糖、黄油：它们的容重各不相同。",
    },
    {
      name: "输入数值",
      text: "输入杯数、勺数或温度。转换器将立即计算出对应的公制数值。",
    },
    {
      name: "调整您的食谱",
      text: "有了精准的转换数值，您现在可以以专业水准制作美式食谱了。",
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
