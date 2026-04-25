import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

const title = "科学鸡蛋计时器";
const description = "根据海拔、温度和大小，通过热力学公式计算出最完美的鸡蛋煮制时间。";
const faq = [
  {
    question: "为什么煮鸡蛋时海拔很重要？",
    answer: "水并不总是在 100°C 沸腾。在较高海拔地区，大气压较低，水会在较低温度下沸腾。例如，在海拔 2000 米处，水在约 93°C 时沸腾，这意味着相比海平面需要更长的煮制时间。在珠穆朗玛峰顶，几乎不可能煮熟一个全熟蛋。",
  },
  {
    question: "从冰箱拿出来的蛋还是常温蛋？",
    answer: "刚从冰箱（4°C）拿出来的蛋比常温（20°C）下的蛋需要更长的加热时间。两者的差异可能在 2-3 分钟左右。本计时器会根据初始温度自动调整时间。",
  },
  {
    question: "蛋黄周围为什么会出现绿圈？",
    answer: "那是硫化亚铁，是煮过头的产物。当温度超过 80°C 时间过长，蛋白中的硫会与蛋黄中的铁发生反应。它虽然无毒，但说明口感已经变差。煮完后立即浸入冰水可以防止其产生。",
  },
  {
    question: "如何轻松剥下蛋壳？",
    answer: "使用放置了 1-2 周的蛋（而非当天的新鲜蛋），开水下锅（不要冷水开始），并在煮完后立即浸入冰水。热冲击会使蛋白质收缩，从而使蛋壳更容易剥离。",
  },
];
const howTo = [
  {
    name: "选择初始温度",
    text: "选择鸡蛋是处于冰箱冷藏状态（4°C）还是常温状态（20°C）。这是指鸡蛋内部的温度。",
  },
  {
    name: "选择鸡蛋大小",
    text: "S、M、L 或 XL（73克以上）。体积大小决定了热量传递到中心点所需的时间。",
  },
  {
    name: "指定您的海拔",
    text: "手动输入或使用定位功能。海拔每升高 300 米，水的沸点约降低 1°C。",
  },
  {
    name: "进行冷水冲击",
    text: "当计时器响起时，立即将鸡蛋浸入冰水中。这可以停止余热烹饪并方便剥壳。热冲击对精准度至关重要。",
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
  slug: 'perfect-boiled-egg-timer-altitude-calculator',
  title: "科学鸡蛋计时器",
  description: "根据海拔、温度和大小，通过热力学公式计算出最完美的鸡蛋煮制时间。",
  faqTitle: "常见问题",
  ui: {
    parameters: "煮蛋参数",
    initial_temperature: "初始温度",
    fridge: "冰箱冷藏",
    ambient: "室内常温",
    egg_size: "鸡蛋大小",
    altitude: "所在海拔",
    use_location: "使用我的位置",
    altitude_help: "在高海拔地区，水的沸点较低，这会影响烹饪时长。",
    sea_level: "海平面",
    soft_cooked: "溏心蛋（流心）",
    soft_description: "蛋黄呈液态，蛋白洁白柔软。",
    mollet: "糖心蛋（软糯）",
    mollet_description: "蛋黄呈膏状，蛋白凝固。",
    hard_cooked: "全熟蛋",
    hard_description: "完全煮熟，蛋黄结实。",
  },
  faq, howTo,
  seo: [
    {
      type: 'title',
      text: '完美煮蛋大师指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '煮鸡蛋是一个<strong>应用热力学</strong>的过程。初始温度、鸡蛋大小和地理高度的精确性，决定了您得到的是丝滑的流心蛋黄，还是由于煮过头而带有绿圈的硬结蛋黄。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '62°C',
          label: '蛋白凝固点',
          icon: 'mdi:egg-outline',
        },
        {
          value: '68°C',
          label: '蛋黄凝固点',
          icon: 'mdi:egg-fried',
        },
        {
          value: '-1°C',
          label: '沸点 / 300m',
          icon: 'mdi:mountain',
        },
        {
          value: '0s',
          label: '容错误差',
          icon: 'mdi:timer-check-outline',
        },
      ],
    },
    {
      type: 'title',
      text: '不同熟度状态对比',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '溏心蛋 (Soft)',
          icon: 'mdi:coffee-outline',
          description: '蛋白部分凝固，蛋黄完全呈液态流出。',
          points: [
            '极度柔嫩的质地',
            '最适合面包蘸食',
            '煮制时间短 (3-4 分钟)',
            '由于太嫩很难剥壳',
          ],
        },
        {
          title: '糖心蛋 (Mollet)',
          icon: 'mdi:water-percent',
          description: '蛋白完全凝固，蛋黄呈奶油质感，浓稠不凝固。',
          highlight: true,
          points: [
            '美食界的顶级标准',
            '蛋黄质地如蜂蜜般顺滑',
            '蛋白富有弹性',
            '沙拉的完美搭档',
          ],
        },
        {
          title: '全熟蛋 (Hard)',
          icon: 'mdi:circle-slice-8',
          description: '完全凝固但依然细嫩，无绿圈产生。',
          points: [
            '蛋黄不透明且结实',
            '易于携带和剥壳',
            '适合制作填馅蛋',
            '必须在煮完后迅速冷却',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '随海拔变化的煮沸点',
      level: 3,
    },
    {
      type: 'table',
      headers: ['城市 / 高度', '海拔米数(m)', '沸点 (°C)', '需额外增加时间'],
      rows: [
        ['海平面（如上海）', '0m', '100°C', '0s'],
        ['昆明', '1890m', '93.7°C', '+60s'],
        ['墨西哥城', '2240m', '92.6°C', '+75s'],
        ['拉巴斯（玻利维亚）', '3640m', '88.1°C', '+140s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '出现绿圈或难以剥壳？',
      html: '绿圈是由于煮过头造成的<strong>硫化亚铁</strong>反应。如果蛋壳难剥，通常是因为鸡蛋太新鲜；较低的 pH 值使蛋白紧贴蛋皮。建议使用存放 1 周后的鸡蛋，并进行冰水冲击。',
    },
    {
      type: 'title',
      text: '鸡蛋科学小词典',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: '伴白蛋白',
          definition: '蛋白中最先凝固的蛋白质 (62°C)，形成最初的洁白结构。',
        },
        {
          term: '卵白蛋白',
          definition: '蛋白中的主要成分，需要更高热量 (80°C) 才能完全凝固。',
        },
        {
          term: '大气压',
          definition: '决定沸水温度的关键因素：气压越低温度越低。',
        },
        {
          term: '热冲击',
          definition: '立即浸入冰水中，以瞬间停止余热对鸡蛋的烹饪。',
        },
      ],
    },
    {
      type: 'tip',
      title: '加醋的小窍门',
      html: '在水中加入一勺醋。如果蛋壳不慎裂开，酸性会促使流出的蛋液迅速凝固，起到封堵裂缝的作用。',
    },
    {
      type: 'paragraph',
      html: '我们的计时器采用查尔斯·威廉姆斯（Charles Williams）方程，根据您的精确位置和鸡蛋初始状态进行秒级精准调整。',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
