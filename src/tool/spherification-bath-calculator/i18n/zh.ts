import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "球化浴计算器 精准分子美食指南";
const description = "计算直接和反向球化过程中海藻酸钠和乳酸钙的精确比例。使用黄原胶和柠檬酸钠校正粘度和酸度。";

const faq = [
  {
    question: "直接球化和反向球化有什么区别？",
    answer: "直接球化是将海藻酸钠加入调味基液中，滴入钙浴，形成一层薄膜并持续向内凝胶。反向球化是将钙加入基液中，滴入藻酸盐浴，形成向外生长的薄膜，冲洗时凝胶过程即停止。"
  },
  {
    question: "为什么我的球体变扁或无法下沉？",
    answer: "如果调味基液密度低于海藻酸钠浴，它会浮在表面而无法形成球体。加入少量黄原胶可增加基液粘度，使其下沉并形成完美的球体。"
  },
  {
    question: "柠檬酸钠在球化中起什么作用？",
    answer: "柠檬酸钠是一种螯合剂，可结合钙离子并提高pH值。如果基液呈强酸性（pH低于4.5）或含有钙，海藻酸钠会提前凝胶。加入柠檬酸可中和这种酸度。"
  },
  {
    question: "钙浴可以用任何水吗？",
    answer: "矿物质含量高的自来水会导致海藻酸钠结块或提前凝胶。最好使用蒸馏水或低钙瓶装水。"
  }
];

const howTo = [
  {
    name: "选择球化方法",
    text: "选择「直接法」可获得薄而即时的凝胶效果，或选择「反向法」用于含酒精、乳制品或钙的液体。"
  },
  {
    name: "输入液体重量",
    text: "以首选单位输入调味基液和水浴的重量。"
  },
  {
    name: "添加质地和酸度校正",
    text: "如果基液过稀，启用黄原胶；如果基液呈强酸性，启用柠檬酸钠。"
  },
  {
    name: "称量材料",
    text: "按照摘要显示上显示的精确重量，称量海藻酸钠、乳酸钙或氯化钙以及校正剂。"
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
  slug: 'spherification-bath-calculator',
  title: '球化浴计算器',
  description: '计算直接和反向球化过程中海藻酸钠和乳酸钙的精确比例。使用黄原胶和柠檬酸钠校正粘度和酸度。',
  faqTitle: '常见问题',
  ui: {
    title: "球化浴计算器",
    subtitle: "直接和反向球化的精确比例控制",
    unitLabel: "测量系统",
    metricUnit: "公制 (g / 克)",
    imperialUnit: "英制 (oz / 盎司)",
    methodLabel: "球化方法",
    directMethod: "直接球化",
    reverseMethod: "反向球化",
    baseWeightLabel: "基液重量",
    bathWeightLabel: "浴水重量",
    xanthanLabel: "启用黄原胶 (粘度校正)",
    citrateLabel: "启用柠檬酸钠 (酸度 / pH螯合剂)",
    recipeTitle: "计算结果摘要",
    baseGellingAgent: "基液胶凝剂",
    bathGellingAgent: "浴液胶凝剂",
    xanthanGum: "黄原胶 (增稠剂)",
    sodiumCitrate: "柠檬酸钠 (缓冲剂)",
    warningLabel: "溶解度警告",
    warningDesc: "所需试剂重量接近或超过该液体体积的溶解度极限。溶解可能需要更长时间或需要轻微加热。",
    directDesc: "适用于低钙轻质液体。可制作出细腻薄皮的球体，需立即食用。",
    reverseDesc: "适用于乳制品、酒精、高钙或酸性液体。可制作出稳定的球体，冲洗后不会继续凝胶。",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '分子球化与水状胶体凝胶的科学',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '球化是一种革命性的烹饪技术，将液体核心封装在薄薄的凝胶膜内。它起源于1940年代的工业包装领域，在2000年代初期被引入现代料理。其基础化学依赖于水状胶体的相互作用，特别是海藻酸钠聚合物在接触二价钙离子时的交联反应。',
    },
    {
      type: 'title',
      text: '分子化学：海藻酸钠与钙离子',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '海藻酸钠是一种从褐色海藻中提取的多糖，由β-D-甘露糖醛酸（M嵌段）和α-L-古罗糖醛酸（G嵌段）的线性链组成。在其钠盐形式下，它完全溶于水，形成粘稠溶液。当引入钙离子（如氯化钙或乳酸葡萄糖酸钙）时，二价钙离子（Ca2+）取代单价钠离子（Na+）。由于钙带有两个正电荷，它与相邻聚合物链上的两个G嵌段结合，将它们桥接在一起。这一在科学上被称为<strong>蛋盒模型</strong>的凝胶化过程，将独立的多糖链连接成一个刚性的三维水凝胶网络，从而锁住水和风味分子。',
    },
    {
      type: 'title',
      text: '直接球化与反向球化的机制对比',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '两种主要的球化方法在胶凝剂和钙盐的放置位置上有所不同，从而导致不同的机械特性：',
    },
    {
      type: 'list',
      items: [
        '<strong>直接球化：</strong>将海藻酸钠溶解在调味基液中，然后滴入钙浴（通常为1.0%氯化钙）。凝胶从边界立即开始。由于钙离子体积小且易于移动，它们会不断从浴液迁移到球体核心，导致凝胶膜向内生长。如果未立即冲洗和食用，球体最终会完全凝胶化，变成坚硬、有弹性的珠子。',
        '<strong>反向球化：</strong>将乳酸葡萄糖酸钙（2.0%）溶解在调味基液中，然后滴入海藻酸钠浴（0.5%）。由于藻酸盐分子大且移动缓慢，它们很难穿过新形成的凝胶屏障。相反，钙离子向外迁移至浴液，使膜向外生长。一旦将球体取出并在清水中冲洗，凝胶过程立即停止，从而无限期地保留完全液态的核心。'
      ],
    },
    {
      type: 'title',
      text: '利用柠檬酸钠克服酸度和pH障碍',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '海藻酸钠对酸高度敏感。当调味基液的pH降至4.5以下时，藻酸盐分子无法正常水合。它们不会溶解，反而会沉淀为不溶性藻酸，形成丝状团块。为了解决这个问题，厨师使用<strong>柠檬酸钠</strong>作为缓冲剂。柠檬酸钠中和氢离子，将百香果汁或青柠汁等酸性食材的pH提升至临界值4.5以上，使藻酸盐能够完全水合并形成干净的球形。',
    },
    {
      type: 'title',
      text: '使用黄原胶调节液体密度和粘度',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '要形成球体，调味基液的液滴必须完全浸没在凝胶浴中。如果调味基液的密度低于浴液（例如反向球化过程中，轻质酒精或水性果汁在浓稠的海藻酸钠浴中），它会浮在表面并变扁。添加极少量的<strong>黄原胶</strong>（通常为0.1%至0.2%）可增加基液的粘度。这种额外的稠度提供了液滴沉入浴液所需的动量，使表面张力将液滴拉成完美的球形。',
    },
    {
      type: 'table',
      headers: ['球化方法', '理想食材', '所需添加剂', '储存特性', '凝胶生长方向'],
      rows: [
        ['直接法', '低钙果汁、清汤、甜糖浆', '基液中0.5%海藻酸钠，浴液中1.0%氯化钙', '需立即食用，随时间完全凝胶', '向内（朝向中心）'],
        ['反向法', '乳制品、酒精、高钙或高酸性液体', '基液中2.0%乳酸钙，浴液中0.5%海藻酸钠', '高度稳定，可在油或水中保存数小时', '向外（远离中心）'],
      ],
    },
    {
      type: 'title',
      text: '冲洗和最终保存步骤',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '从凝胶浴中取出成品球体后，务必立即在干净的冷水中冲洗。这样可以洗掉附着在外部的残留钙或藻酸盐，停止化学反应并防止异味（尤其是氯化钙的微苦味）。储存时，将球体浸入密度匹配的液体中（例如不含添加剂的调味基液或淡糖浆），以防止水分通过渗透作用穿过膜，从而导致球体萎缩或破裂。',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
