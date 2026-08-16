import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

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
  {
    question: "我应该使用什么面粉？",
    answer: "理想选择: Caputo Pizzeria (W260-280) 或 Manitoba (W350-400)。替代方案: 每 100g 含有 11-13g 蛋白质的任何面粉。避免将弱力面粉（W130-160）用于长时间发酵。",
  },
  {
    question: "为什么延展面团时容易破裂？",
    answer: "面筋尚未松弛。请将面团球在室温下静置 2-3 小时。如果持续破裂，说明揉面不足或面粉筋度太低。",
  },
];
const howTo = [
  {
    name: "计算比例",
    text: "使用此计算器，根据披萨数量和每个面团球的重量，获取每种配料的精确克数。",
  },
  {
    name: "揉制面团",
    text: "将面粉与温水（22-25°C）、盐和酵母混合。使用和面机揉搓 8-10 分钟，或手工揉制 15-20 分钟。",
  },
  {
    name: "基础发酵",
    text: "让整个面团在室温（20-25°C）下发酵 1-2 小时，直到体积翻倍。",
  },
  {
    name: "分割成球",
    text: "将面团分割成指定重量的份数。滚圆并在长时间发酵前静置。",
  },
  {
    name: "低温发酵",
    text: "将分好的面团球放入密封容器，在冰箱（4°C）中发酵 24-72 小时。这是提升风味和易消化性的关键步骤。",
  },
  {
    name: "延展与烘烤",
    text: "烘烤前 30 分钟从冰箱取出。由中心向外延展。在最高温度下烘烤。",
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
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '480°C',
          label: '烘烤温度',
          icon: 'mdi:fire',
        },
        {
          value: '60-90秒',
          label: '烘烤时间',
          icon: 'mdi:clock-fast',
        },
        {
          value: '65%',
          label: '标准含水量',
          icon: 'mdi:water-percent',
        },
        {
          value: 'W280',
          label: '面粉筋度',
          icon: 'mdi:grain',
        },
      ],
    },
    {
      type: 'title',
      text: '含水量的至关重要性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '含水量（水占面粉重量的百分比）决定了<strong>cornicione</strong>（饼边）的质地。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '含水量 55% 至 60%',
          icon: 'mdi:water-percent',
          description: '极易操作，非常适合初学者和家用烤箱。',
          points: [
            '面筋网络形成简单',
            '面团黏性低',
            '外壳结实酥脆',
          ],
        },
        {
          title: '含水量 63% 至 67%',
          icon: 'mdi:water',
          description: 'AVPN 标准。打造轻盈面团的完美平衡。',
          highlight: true,
          points: [
            '传统弹性质地',
            '果木窑炉的理想选择',
            '需要中等揉面技巧',
          ],
        },
        {
          title: '含水量 70%+',
          icon: 'mdi:water-plus',
          description: '带有巨型饼边的现代披萨。需要高级技巧。',
          points: [
            '极大的气孔结构',
            '非常轻盈易消化',
            '需要高筋度面粉',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '酵母种类与选择指南',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '新鲜压榨酵母',
          icon: 'mdi:bread-slice-outline',
          description: '披萨大师的传统选择。带来更复杂的风味层次。',
          points: [
            '风味更深沉清爽',
            '酶活性平衡',
            '易溶于温水',
            '保质期较短',
          ],
        },
        {
          title: '即发干酵母',
          icon: 'mdi:shaker-outline',
          description: '稳定性强且易于储存。',
          points: [
            '保质期长',
            '无需预先水化',
            '发酵力是鲜酵母的 3 倍',
            '风味相对中性',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '按 W 筋度指数选择面粉指南',
      level: 3,
    },
    {
      type: 'table',
      headers: ['面粉类型', '筋度 (W)', '发酵时间', '推荐用途'],
      rows: [
        ['低筋面粉', 'W130-180', '4-8 小时', '快速烘焙点心'],
        ['中筋面粉', 'W200-240', '8-24 小时', '快速披萨或普通面包'],
        ['高筋面粉', 'W260-320', '24-72 小时', '正宗那不勒斯披萨'],
        ['特高筋面粉', 'W350+', '72+ 小时', '超长时间发酵'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '揉面温度控制',
      html: '揉面结束时面团温度切勿超过 24°C，以免破坏面筋结构。',
    },
    {
      type: 'title',
      text: '未来披萨大师术语表',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cornicione',
          definition: '那不勒斯披萨隆起且充满气孔的饼边。',
        },
        {
          term: '熟化 (Maturation)',
          definition: '独立于发酵的酶解过程，分解蛋白质和糖类以提升风味。',
        },
        {
          term: '出筋 (Dough Development)',
          definition: '面团达到最佳弹性和韧性的时刻。',
        },
        {
          term: '水合 (Autolysis)',
          definition: '仅将面粉和水静置以促进面筋自然形成的技术。',
        },
      ],
    },
    {
      type: 'tip',
      title: '冷藏发酵技巧',
      html: '在 4°C 下冷藏发酵 24 小时可产生常温下无法获得的复杂香气。',
    },
    {
      type: 'paragraph',
      html: '我们的计算器可自动计算比例，让你全神贯注于烘焙技巧与热情。',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
