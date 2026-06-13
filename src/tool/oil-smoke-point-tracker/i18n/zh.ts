import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = '食用油烟点追踪器：油炸用油寿命与降解估算';
const description = '监控油炸用油品质，估算当前烟点下降幅度。追踪使用次数、温度和食材类型，防止有害极性化合物累积。';

const faq = [
  {
    question: '为什么油炸用油的烟点会随着时间下降？',
    answer: '每次将油加热到油炸温度时，热降解、水解和氧化反应会将甘油三酯分解为游离脂肪酸（FFA）、单酰甘油和二酰甘油。这些分解产物的沸点和烟点远低于完整的甘油三酯，因此随着重复使用，油在更低的温度就会开始冒烟。',
  },
  {
    question: '什么是极性化合物？为什么受到监管？',
    answer: '极性化合物（TPC）是油炸过程中形成的降解产物。当它们超过油重的25%时，该油被视为已降解、氧化，食用有害，会产生异味并带来潜在的心血管风险。许多欧洲国家在法律上强制规定，当TPC超过25%时必须废弃油炸用油。',
  },
  {
    question: '裹粉或面粉如何影响油脂降解？',
    answer: '裹粉、面糊和散落的面粉会将食物颗粒掉入热油中。这些颗粒在超过180摄氏度的温度下会迅速焦化和碳化，释放游离脂肪酸，并作为催化剂加速热降解。土豆等清洁淀粉类食材对油脂的降解速度则慢得多。',
  },
  {
    question: '食用油重复使用的安全限度是多少？',
    answer: '一般来说，精炼的高温油（如菜籽油或花生油）在清洁条件下可重复使用5至8次。但未精炼的油，或在超过190摄氏度的高温下使用的油，或用于油炸裹粉食品的油，应在使用1至3次后废弃。',
  },
];

const howTo = [
  {
    name: '选择油炸用油类型',
    text: '从数据库列表中选择您的油品。精炼高温油的起始烟点高于未精炼的选项。',
  },
  {
    name: '追踪油炸次数',
    text: '输入当前批次油已经历的油炸总次数。',
  },
  {
    name: '输入油炸温度',
    text: '调整滑块以匹配您的油炸平均温度。超过180摄氏度的温度会加速油脂分解。',
  },
  {
    name: '识别食材裹层类型',
    text: '指定您是油炸清洁淀粉类食材，还是裹粉/面包糠类食材（后者会留下碳化残渣）。',
  },
  {
    name: '查看烟点与废弃状态',
    text: '查看已降解的烟点和废弃指示。如果油品健康进入危险区域，请立即废弃。',
  },
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent = {
  slug: 'oil-smoke-point-tracker',
  title: '食用油烟点追踪器',
  description: '监控油炸用油品质，估算当前烟点下降幅度。追踪使用次数、温度和食材类型，防止有害极性化合物累积。',
  faqTitle: '常见问题',
  ui: {
    oilPresetLabel: '油炸用油类型',
    presetAvocadoRefined: '牛油果油（精炼）',
    presetSunflowerRefined: '葵花籽油（精炼）',
    presetPeanutRefined: '花生油（精炼）',
    presetCanolaRefined: '菜籽油（精炼）',
    presetOliveEV: '特级初榨橄榄油',
    presetOlivePomace: '橄榄果渣油',
    presetCoconutUnrefined: '椰子油（未精炼）',
    presetSunflowerUnrefined: '葵花籽油（未精炼）',
    usesLabel: '油炸次数',
    tempLabel: '油炸温度',
    foodTypeLabel: '食材准备 / 裹层类型',
    optionStarch: '清洁淀粉类（土豆、法式薯条）',
    optionBreading: '裹粉、面糊或面包糠类食材',
    baseSmokePointLabel: '原始烟点',
    currentSmokePointLabel: '当前烟点（已降解）',
    polarCompoundsLabel: '极性化合物（TPC）',
    polymerizationLabel: '油脂聚合健康度',
    statusLabel: '油脂安全概况',
    statusGood: '可安全重复使用',
    statusCaution: '注意 -  - 请尽快过滤',
    statusDiscard: '请立即废弃',
    adviceGood: '油脂性质稳定。可继续油炸，但冷却后请滤除残留食物颗粒。',
    adviceCaution: '降解已开始，烟点已下降。建议过滤后最多再使用一次。',
    adviceDiscard: '已达到严重降解程度，极性化合物浓度很高。请废弃油脂，以防酸败和健康风险。',
    gaugeSafe: '安全',
    gaugeCaution: '警告',
    gaugeDiscard: '丢弃',
    limitLabel: '限制',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '油炸化学：食用油为何会降解',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '油炸是化学反应最剧烈的烹饪技术之一。当食物浸入高温油中（通常在160到190摄氏度之间），油同时暴露于热量、食物中的水分和空气中的氧气。这会触发三种截然不同的化学反应：水解（水分子打断酯键）、氧化（氧气产生氢过氧化物）和聚合（受损油分子结合成黏稠的大分子链）。随着这些反应的进行，总极性化合物（TPC）浓度升高，油脂开始分解和冒烟的温度也显著下降。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '25% TPC', label: '法定废弃上限', icon: 'mdi:alert-octagon' },
        { value: '180°C', label: '关键温度阈值', icon: 'mdi:thermometer-alert' },
        { value: '2.2倍', label: '裹粉加速衰变率', icon: 'mdi:chart-timeline-variant' },
        { value: 'FFA', label: '游离脂肪酸是主因', icon: 'mdi:molecule' },
      ],
    },
    {
      type: 'title',
      text: '极性化合物与健康法规',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '总极性化合物（TPC）是衡量油炸油脂降解程度的国际标准指标。在专业厨房中，由于安全考虑，一些国家法律禁止使用TPC浓度超过25%的油。这些极性化合物会抑制吸收、降低烹饪效率，并使炸制食品的外壳失去酥脆度。更重要的是，长期食用氧化油脂会摄入自由基和有毒化合物，与心血管问题相关。',
    },
    {
      type: 'title',
      text: '油品对比：初始烟点',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '精炼油（耐高温）',
          icon: 'mdi:shield-check',
          description: '经加工去除挥发性化合物、游离脂肪酸和杂质的油品。它们具有极高的初始烟点。',
          points: ['精炼牛油果油：270°C / 518°F', '精炼葵花籽油：232°C / 450°F', '精炼花生油：232°C / 450°F', '初始抗降解能力强'],
        },
        {
          title: '未精炼油（低温烹饪 / 风味浓郁）',
          icon: 'mdi:leaf',
          description: '冷压或初榨油，含有大量天然成分、矿物质和游离脂肪酸。',
          highlight: true,
          points: ['特级初榨橄榄油：190°C / 374°F', '未精炼椰子油：177°C / 350°F', '未精炼葵花籽油：107°C / 225°F', '在高温下降解极快'],
        },
      ],
    },
    {
      type: 'title',
      text: '油炸用油烟点与最大重复使用次数参考表',
      level: 3,
    },
    {
      type: 'table',
      headers: ['油品种类', '原始烟点（°C）', '原始烟点（°F）', '状态 / 加工方式', '建议最大使用次数'],
      rows: [
        ['牛油果油（精炼）', '270°C', '518°F', '精炼', '10至12次'],
        ['橄榄果渣油', '238°C', '460°F', '精炼', '8至10次'],
        ['葵花籽油（精炼）', '232°C', '450°F', '精炼', '6至8次'],
        ['花生油（精炼）', '232°C', '450°F', '精炼', '6至8次'],
        ['菜籽油（精炼）', '204°C', '400°F', '精炼', '5至7次'],
        ['特级初榨橄榄油', '190°C', '374°F', '冷压', '2至3次'],
        ['椰子油（未精炼）', '177°C', '350°F', '未精炼', '1至2次'],
        ['葵花籽油（未精炼）', '107°C', '225°F', '未精炼', '不适用于油炸'],
      ],
    },
    {
      type: 'title',
      text: '油脂降解的关键警示信号',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '危险：当油炸用油变成有毒物质',
      html: '如果观察到以下任何症状，请停止继续使用该油：<strong>酸败或肥皂味</strong>、颜色变深浑浊，或食物周围<strong>泡沫过多</strong>。如果油在正常烹饪温度（170-180°C）下开始冒烟，说明由于游离脂肪酸（FFA）极度累积，烟点已急剧下降。用已降解的油烹饪会将有毒的极性化合物和致癌元素转移到食物中，损害风味和健康。',
    },
    {
      type: 'title',
      text: '如何延长油炸用油品质',
      level: 3,
    },
    {
      type: 'tip',
      title: '立即滤除碳化残渣',
      html: '油炸面糊或裹粉食物会在油锅底部留下微小颗粒。这些颗粒在烹饪过程中持续焦化，作为催化剂加速油脂衰变。为减缓这一过程，请在油炸过程中随时撇去浮渣，并在<strong>每次油炸结束后</strong>，用细网筛、纱布或咖啡滤纸过滤冷却后的油。将过滤后的油储存在密封玻璃容器中，置于阴凉避光处。',
    },
    {
      type: 'title',
      text: '油炸最佳实践',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>彻底擦干食材表面</strong> -  - 多余水分会引发快速水解，将油脂分解为游离脂肪酸。',
        '<strong>避免油炸前撒盐</strong> -  - 盐会作为催化剂加速油脂氧化；应在食物离开热油后立即调味。',
        '<strong>保持最佳温度</strong> -  - 将油温维持在170°C至180°C之间。温度过高会加速热降解，过低则导致食物吸收过多油脂。',
        '<strong>不要用新油补充旧油</strong> -  - 将新油与已降解的油混合，会加速新油的分解，而非使其恢复。',
      ],
    },
    {
      type: 'title',
      text: '油炸与脂质降解术语表',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: '烟点', definition: '油脂开始持续分解并产生可见蓝烟的温度，释放丙烯醛。' },
        { term: '总极性化合物（TPC）', definition: '衡量油脂降解的全球标准指标，表示氧化化合物、游离脂肪酸和聚合物的总重量百分比。' },
        { term: '水解', definition: '水分子将甘油三酯分解为游离脂肪酸和甘油的化学反应。由食物中的水分触发。' },
        { term: '聚合', definition: '热损伤的油分子结合在一起形成大分子结构的过程，导致油脂黏度增加。' },
        { term: '游离脂肪酸（FFA）', definition: '在水解过程中从甘油三酯释放出的羧酸。它们直接降低脂肪的初始烟点。' },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
