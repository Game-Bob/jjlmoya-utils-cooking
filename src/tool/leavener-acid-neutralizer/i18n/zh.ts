import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "小苏打与泡打粉计算器：膨松剂和酸的中和平衡";
const description = "计算配方中精确的小苏打与泡打粉比例。中和酪乳、酸奶等酸性食材，避免金属余味，每次都能完美膨胀。";
const faq = [
  {
    question: "为什么用小苏打代替泡打粉需要加酸？",
    answer: "小苏打是纯碱。它需要酸来激活并释放二氧化碳。酸不足时，小苏打无法完全反应，会在烘焙品中留下苦涩的金属味。"
  },
  {
    question: "小苏打和泡打粉有什么区别？",
    answer: "小苏打是100%碳酸氢钠，一种碱。泡打粉是完整的膨松剂，含有小苏打加上干燥酸化剂（如塔塔粉）和淀粉。泡打粉可自行中和。"
  },
  {
    question: "1茶匙小苏打相当于多少泡打粉？",
    answer: "小苏打的强度大约是泡打粉的3-4倍。替代1茶匙小苏打大约需要3-4茶匙泡打粉。但这种替换也会增加酸盐，可能改变风味，建议使用本计算器进行精确换算。"
  },
  {
    question: "为什么我的蛋糕有肥皂味或金属味？",
    answer: "肥皂味或金属余味是未反应小苏打的典型标志。面糊中没有足够的酸来完全中和碳酸氢钠时，碱性残留物会在烘焙后留存，产生令人不快的化学味。请使用本计算器确保完全中和。"
  },
  {
    question: "碱化可可粉可以作为酸来使用吗？",
    answer: "不能。碱化可可粉（Dutch-process）经过碱化处理，天然酸度已降低（pH约7-8）。只有天然可可粉（pH约5-6）呈酸性，才能中和小苏打。"
  },
  {
    question: "小苏打如何影响烘焙品的上色？",
    answer: "小苏打会提高面糊的pH值，使其更偏碱性。较高的pH值会加速美拉德褐变反应，使饼干和蛋糕的表皮颜色更深、风味更浓郁。"
  }
];

const howTo = [
  {
    name: "输入面粉重量",
    text: "以克或盎司为单位输入配方中面粉的总重量，计算所需的整体膨松力。"
  },
  {
    name: "添加酸性食材",
    text: "选择配方中的酸性食材（如酪乳、酸奶或柠檬汁）并输入它们的重量。"
  },
  {
    name: "检查pH平衡",
    text: "观察虚拟pH天平。天平平衡表示中和状态最佳，没有金属余味。"
  },
  {
    name: "量取膨松剂",
    text: "读取中和小苏打的推荐用量，以及达到目标膨胀度所需的额外泡打粉助推量。"
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'CNY' },
};

export const content: ToolLocaleContent = {
  slug: 'leavener-acid-neutralizer',
  title: '膨松剂与酸的中和计算',
  description: '计算配方中精确的小苏打与泡打粉比例。中和酪乳、酸奶等酸性食材，避免金属余味，每次都能完美膨胀。',
  faqTitle: '常见问题',
  ui: {
    title: "膨松剂酸中和计算器",
    subtitle: "用化学计量学优化烘焙的膨胀与风味",
    flourLabel: "面粉重量",
    addAcidLabel: "添加酸性食材",
    weightLabel: "重量",
    removeButton: "移除",
    bakingSodaNeeded: "中和用小苏打",
    requiredBakingPowder: "目标膨松力",
    providedBakingPowderEquivalent: "小苏打贡献的膨松力",
    boosterBakingPowder: "额外泡打粉助推",
    resultsTitle: "计算出的膨松剂",
    statusBalanced: "平衡良好",
    statusAcidic: "酸过量",
    statusAlkaline: "碱过量",
    gramsUnit: "g",
    ouncesUnit: "oz",
    teaspoonsUnit: "茶匙",
    scaleBalanceTitle: "虚拟pH天平",
    acidListTitle: "酸性食材",
    unitLabel: "计量单位",
    metricUnit: "公制 (g)",
    imperialUnit: "英制 (oz)",
    acid_buttermilk: "酪乳",
    acid_yogurt: "酸奶",
    acid_sour_cream: "酸奶油",
    acid_honey: "蜂蜜",
    acid_molasses: "糖蜜",
    acid_cocoa: "天然可可粉",
    acid_lemon_juice: "柠檬汁",
    acid_vinegar: "醋",
    stoichiometryBadge: "pH化学计量",
    simulateSodaLabel: "模拟添加小苏打",
    autoBalanceBtn: "自动平衡",
    sodaAddedLabel: "已添加小苏打"
  },
  faq,
  howTo,
  seo: [
    {
      type: 'summary',
      title: '完美膨胀的关键要点',
      items: [
        '小苏打需要酸才能激活，否则烘焙品会有肥皂味和金属味',
        '泡打粉可自行中和，作为助推器提供额外膨松力',
        '标准目标为面粉重量的4%（泡打粉当量）以获得良好膨胀',
        '使用下方的中和表，为你的酸性食材匹配正确的小苏打用量'
      ]
    },
    {
      type: 'title',
      text: '烘焙中化学膨松剂的科学原理',
      level: 2
    },
    {
      type: 'paragraph',
      html: '化学膨松依靠<strong>酸碱中和反应</strong>产生二氧化碳（CO2）气体，气体被困在面糊基质中，在烘焙时使其膨胀。小苏打（碳酸氢钠）与酸性食材的正确比例至关重要。<strong>小苏打过多</strong>会导致未反应的碱性残留，产生肥皂味、金属味和黄色变色。<strong>酸过多</strong>则会导致烘焙品密实、扁平，体积不足。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '3-4倍',
          label: '小苏打比泡打粉更强',
          icon: 'mdi:flash'
        },
        {
          value: '4%',
          label: '目标膨松力（面粉重量比）',
          icon: 'mdi:target'
        },
        {
          value: '1/4茶匙',
          label: '每120g酪乳/酸奶所需小苏打',
          icon: 'mdi:spoon-sugar'
        },
        {
          value: '0.0125',
          label: '中和比率（乳酸性食材）',
          icon: 'mdi:scale-balance'
        }
      ]
    },
    {
      type: 'title',
      text: '小苏打 vs 泡打粉：完整对比',
      level: 3
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '小苏打',
          icon: 'mdi:flask-outline',
          description: '纯碳酸氢钠（NaHCO3）。一种强碱性碱，需要外部酸来激活并产生CO2。',
          points: [
            '比泡打粉强3-4倍',
            '需要酸（酪乳、酸奶、柠檬汁）才能反应',
            '过量会导致肥皂味、金属味和黄色内瓤',
            '提高pH值，增强饼干的梅拉德褐变',
            '单效型：混合后立即释放CO2'
          ]
        },
        {
          title: '泡打粉',
          icon: 'mdi:flask-round-bottom-outline',
          description: '完整的膨松系统，包含小苏打＋干燥酸盐＋淀粉。自行中和，可靠稳定。',
          highlight: true,
          points: [
            '自带酸性成分（磷酸一钙、SAP等）',
            '双效型：混合时和加热时分两阶段释放CO2',
            '无金属余味，pH已平衡',
            '每克强度较弱，需要3-4倍才能匹敌小苏打的功效',
            '当小苏打单独无法拉起全部面粉时，最适合作为助推器'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['酸性食材', '标准用量', '中和用小苏打', '中和比率'],
      rows: [
        ['酪乳 / 酸奶 / 酸奶油', '120g (1/2杯)', '1.5g (1/4茶匙)', '0.0125'],
        ['柠檬汁 / 醋', '15g (1汤匙)', '1.5g (1/4茶匙)', '0.1000'],
        ['天然可可粉', '80g (1杯)', '3.0g (1/2茶匙)', '0.0375'],
        ['蜂蜜', '340g (1杯)', '3.0g (1/2茶匙)', '0.0088'],
        ['糖蜜', '328g (1杯)', '3.0g (1/2茶匙)', '0.0091']
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '故障排查：你的膨松是否失衡？',
      badge: '快速检查',
      html: '<strong>如果蛋糕塌陷：</strong>酸太多或整体膨松剂不足，CO2在结构定型前就逃逸了。<br/><br/><strong>如果蛋糕密实扁平：</strong>酸量超过了小苏打的中和能力，或者面粉重量对应的总膨松力不足。<br/><br/><strong>如果有肥皂味或金属味：</strong>未反应的小苏打过量，增加酸性食材或减少小苏打用量。<br/><br/><strong>如果有黄色斑点：</strong>未溶解、未反应的小苏打结块的典型症状。下次请将小苏打与面粉一起过筛。'
    },
    {
      type: 'title',
      text: '如何平衡膨松剂并避免金属味',
      level: 3
    },
    {
      type: 'paragraph',
      html: '要达到最佳风味和膨胀效果，请遵循以下步骤：<strong>首先</strong>，参考上方表格确定完全中和面糊中酸性成分所需的小苏打量。<strong>然后</strong>，将该小苏打量转换为泡打粉当量（乘以4），并与面粉所需的总膨松力进行比较；标准为面粉重量的<strong>4%</strong>（泡打粉当量）。<strong>如有不足</strong>，以中性泡打粉作为助推器补充剩余膨松力。本计算器会自动完成所有这些步骤。'
    },
    {
      type: 'list',
      icon: 'mdi:alert-circle-outline',
      items: [
        '切勿将小苏打与泡打粉 1:1 替换，小苏打强度是泡打粉的 3-4 倍且需要酸',
        '小苏打务必与干性材料一起过筛，防止产生苦味结块',
        '碱化可可粉（Dutch-process）不具有酸性，如需可可提供酸请使用天然可可粉',
        '蜂蜜和糖蜜属弱酸性，每克所需的小苏打远少于柠檬汁',
        '混合后请快速操作：化学膨松剂接触液体后立即开始反应'
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: '中和比率',
          definition: '完全中和一定重量酸性食材所需的小苏打比例。比率越低，表示该食材每克的酸性越弱。'
        },
        {
          term: '膨松力',
          definition: '膨松剂能够产生的CO2气体总量。以泡打粉当量衡量，面粉重量的4%是蛋糕和松饼的标准目标。'
        },
        {
          term: '双效泡打粉',
          definition: '分两阶段释放CO2的泡打粉：首先在室温下与液体混合时，然后在烤箱加热时。能够提供更可靠的膨胀效果。'
        },
        {
          term: '梅拉德反应',
          definition: '氨基酸与还原糖之间发生的化学反应，使食物褐变并产生复杂风味。小苏打过量导致的高pH值会促进此反应。对饼干而言是理想效果，但对精致蛋糕则希望避免。'
        },
        {
          term: 'pH平衡',
          definition: '面糊酸碱度的衡量。中性pH（约7）表示所有小苏打已与所有酸完全反应。微碱性有利于上色，酸性有利于松软口感。'
        }
      ]
    },
    {
      type: 'tip',
      html: '<strong>上色与pH值：</strong>完全中和对风味至关重要，但在巧克力蛋糕和饼干中，略微过量的小苏打使面糊呈微碱性可能是理想的选择。较高的pH值会促进梅拉德褐变，产生更深的颜色、更脆的边缘和更浓郁的焦糖风味。对于精致的香草蛋糕，请力求精确中和，以保持纯净清爽的口感。'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
