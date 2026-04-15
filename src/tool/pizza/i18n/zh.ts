import type { ToolLocaleContent } from "../../../types";

const title = "正宗那不勒斯披萨面团计算器";
const description = "计算打制正宗那不勒斯披萨所需的面粉、水、盐和酵母的精确比例。";
const faq = [
  {
    question: "那不勒斯披萨的理想含水量是多少？",
    answer: "根据 AVPN（正宗那不勒斯披萨协会）协议，标准含水量为 63-67%。对于初学者，60-62% 更易于操作。使用强力粉（W300+）的高级披萨师可以使用 70-75% 的高含水量，效果非凡但需要高超技巧。",
  },
  {
    question: "面团需要发酵多长时间？",
    answer: "在冰箱（4°C）中至少发酵 24 小时以激活酶。最佳时间为 48-72 小时。超过 72 小时则需要极强力面粉（W300+），否则面团会变酸。",
  },
  {
    question: "可以使用干酵母吗？",
    answer: "可以。干酵母的用量相当于新鲜酵母的 0.4 倍（1克干酵母 = 2.5克新鲜酵母）。两者的品质相近，但新鲜酵母能提供更丰富的风味。",
  },
  {
    question: "可以在家用烤箱制作那不勒斯披萨吗？",
    answer: "可以，但需要一些调整。使用披萨石，并在最高温度（250-280°C）下预热 45-60 分钟。烘烤时间约为 5-7 分钟，而非专业窑炉的 60-90 秒。",
  },
];
const howTo = [
  {
    name: "计算比例",
    text: "使用此计算器，根据披萨数量和每个面团球的重量，获取每种配料的精确克数。",
  },
  {
    name: "揉制面团",
    text: "将面粉与温水（22-25°C）、盐和酵母混合。使用和面机揉搓 8-10 分钟，或手工移动 15-20 分钟。",
  },
  {
    name: "低温发酵",
    text: "将分好的面团球放入密封容器，在冰箱（4°C）中发酵 24-72 小时。这是提升风味和易消化性的关键步骤。",
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
  slug: 'neapolitan-pizza-dough-calculator-authentic-recipe',
  title,
  description,
  faqTitle: "常见问题",
  bibliographyTitle: "参考资料",
  ui: {
    parameters: "参数",
    quantity: "数量",
    pizzas: "个披萨",
    weight: "每个球重量",
    small: "小型 (180g)",
    standard: "标准 (260g)",
    large: "大型 (350g)",
    hydration: "含水量",
    classic: "经典 (55-60%)",
    modern: "现代 (65-70%)",
    high: "高含水 (75%+)",
    salt: "盐",
    fermentation_tip_title: "发酵建议",
    fermentation_tip:
      "为了获得更易消化且风味更佳的面团，建议每 100g 面粉使用 <strong>0.3g</strong> 新鲜酵母，并在冰箱（4°C）中发酵 24 小时。",
    your_recipe: "你的食谱",
    fresh_yeast: "新鲜酵母",
    dry_yeast: "干酵母",
    flour: "面粉 (W260-300)",
    water: "水",
    salt_label: "海盐",
    yeast: "酵母",
    yeast_note: "在 20°C 环境下发酵 8 小时",
    total_weight: "面团总重量",
    approx: "约为",
    visual_note:
      "视觉尺寸代表根据面团球重量拉伸后的披萨大概直径。",
  },
  faq,
  howTo,
  bibliography: [
    {
      name: "Associazione Verace Pizza Napoletana",
      url: "https://www.pizzanapoletana.org/",
    },
  ],
  seo: [
    {
      type: 'title',
      text: '正宗那不勒斯披萨面团大师指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>那不勒斯披萨</strong>是文化遗产。成功在于对时间、温度和含水量的精确掌控。',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
