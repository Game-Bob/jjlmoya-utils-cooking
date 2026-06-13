import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = '美拉德反应优化器：pH与温度褐变计算器';
const description = '精确计算每公斤食物应添加多少小苏打以加速美拉德反应。通过保持在安全碱度范围内来避免肥皂味。';

const faq = [
  {
    question: '什么是美拉德反应，为什么它在烹饪中很重要？',
    answer: '美拉德反应是氨基酸与还原糖之间发生的化学反应，赋予褐变食物独特的风味。它带来煎牛排的焦脆外壳、面包的金黄色泽、烘焙咖啡以及焦糖洋葱。该反应在140°C至165°C之间进行得最快。',
  },
  {
    question: '小苏打（碳酸氢钠）如何加速褐变？',
    answer: '小苏打提高食物表面的pH值，使其变得更碱性。在碱性环境中，美拉德反应的速度显著加快。将pH从6提升到8可以使褐变速度翻倍甚至三倍。然而，过多的小苏打会产生金属味和肥皂味的余味 -  - 这就是本计算器强制执行安全限值的原因。',
  },
  {
    question: '每公斤食物的小苏打最大安全用量是多少？',
    answer: '一般安全限值是每公斤食物1.5克小苏打。超过此阈值，异味（金属味、肥皂味或化学味）的风险会急剧增加。我们推荐的用量是最大值的一半，能在提供显著褐变加速的同时将风味风险降至最低。',
  },
  {
    question: '如果温度太低，美拉德反应会怎样？',
    answer: '在110°C以下，主要是水分蒸发，没有实质性的美拉德褐变。在110°C至140°C之间，褐变发生得很慢。最佳温度范围是140°C至180°C。超过180°C，开始发生热解 -  - 食物燃烧并产生苦涩、辛辣的化合物，而非理想的褐变风味。',
  },
];

const howTo = [
  {
    name: '称量食物',
    text: '输入您想要褐变的食物总重量（克）。',
  },
  {
    name: '设置烹饪温度',
    text: '输入您的烹饪表面温度或烤箱温度。最佳美拉德区域是140-180°C。',
  },
  {
    name: '调整小苏打用量',
    text: '滑块默认为安全最大值的一半。谨慎增加 -  - 计算器会在您进入危险区域之前警告您。',
  },
  {
    name: '查看估算的pH值和速度倍数',
    text: '计算器显示在您选择的pH水平下褐变速度比默认pH 6快多少。',
  },
  {
    name: '检查风味风险等级',
    text: '风味标签会根据估算的表面pH显示安全、注意或危险。保持在绿色区域以获得最佳效果。',
  },
  {
    name: '均匀涂抹小苏打',
    text: '将推荐用量溶解在少量水中，烹饪前刷在食物上或与食物拌匀。不均匀的分布会导致褐变斑驳。',
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'maillard-reaction-optimizer',
  title: '美拉德反应优化器',
  description: '精确计算每公斤食物应添加多少小苏打以加速美拉德反应。通过保持在安全碱度范围内来避免肥皂味。',
  faqTitle: '常见问题',
  ui: {
    title: '美拉德反应优化器',
    headerLabel: '褐变化学',
    flavorSafe: '安全pH',
    flavorCaution: '注意：碱性',
    flavorDanger: '危险：肥皂味风险',
    unitLabel: '单位',
    metricUnit: '公制',
    imperialUnit: '英制',
    weightLabel: '食物重量',
    weightUnit: 'g',
    weightOz: 'oz',
    tempLabel: '表面温度',
    tempUnit: '°C',
    degreesF: '°F',
    tempLow: '缓慢：{min} - {max}',
    tempOpt: '最佳：{min} - {max}',
    tempHigh: '热解：>{min}',
    sodaLabel: '小苏打',
    sodaUnit: 'g',
    sodaOz: 'oz',
    sodaNote: '安全最大值的一半，温和的褐变增强',
    sodaCautionNote: '接近最大值，密切关注风味',
    sodaDangerNote: '超过安全最大值，有肥皂味风险',
    sodaRecommended: '推荐小苏打用量',
    sodaMax: '安全最大值',
    speedLabel: '反应速度',
    browningLabel: '褐变进程',
    rawLabel: '生',
    goldenLabel: '金黄',
    burntLabel: '焦糊',
    phEstimated: '估算表面pH',
    timeSaved: '节省时间',
    errorTempTooLow: '温度低于110°C。美拉德反应需要至少110°C才能开始。低于此阈值，只有水分蒸发，没有实质性的褐变。',
    errorWeightTooLow: '食物重量必须大于0g。',
    footerTemplate: '<span class="mr-footer-stat"><strong>{weight}</strong><small>{wunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">在 <strong>{temp}</strong><small>{tunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{soda}</strong><small>{sunit}</small> 小苏打</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">x<strong>{multiplier}</strong> 速度</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{timeSaved}</strong>% 已节省</span>',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '美拉德反应优化器：掌握褐变的科学',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '美拉德反应是咸味烹饪的圣杯。它创造出煎牛排的深沉复杂风味、金黄面包皮和焦糖洋葱。这一以法国化学家路易斯-卡米尔·美拉德命名的反应，在氨基酸与还原糖之间产生数百种风味化合物。通过用小苏打调节pH值，你可以在不烧焦的情况下将褐变速度<strong>翻倍甚至三倍</strong>。本计算器精确显示你需要使用多少用量，并在你进入肥皂味领域之前提醒你。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '~140°C', label: '美拉德活化温度', icon: 'mdi:thermometer' },
        { value: '2-3x', label: 'pH 8时速度提升', icon: 'mdi:speedometer' },
        { value: '1.5 g/kg', label: '小苏打最大安全用量', icon: 'mdi:scale' },
        { value: 'pH 8.5', label: '肥皂味阈值', icon: 'mdi:alert-circle' },
      ],
    },
    {
      type: 'title',
      text: '按食物重量的小苏打用量表',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '使用此参考表可快速确定常见食物重量的推荐和最大小苏打用量。推荐用量为<strong>安全最大值的一半</strong>，在提供明显褐变加速的同时将风味风险降至最低。',
    },
    {
      type: 'table',
      headers: ['食物重量', '推荐用量 (g)', '安全最大值 (g)', '估算pH', '速度提升'],
      rows: [
        ['250g（1个洋葱）', '0.19 g', '0.38 g', '6.5', 'x1.2'],
        ['500g（2个洋葱）', '0.38 g', '0.75 g', '6.5', 'x1.2'],
        ['750g（3个洋葱）', '0.56 g', '1.13 g', '6.5', 'x1.2'],
        ['1000g（1 kg）', '0.75 g', '1.50 g', '7.0', 'x1.6'],
        ['1500g', '1.13 g', '2.25 g', '7.0', 'x1.6'],
        ['2000g', '1.50 g', '3.00 g', '7.0', 'x2.0'],
        ['3000g', '2.25 g', '4.50 g', '7.0', 'x2.0'],
        ['5000g', '3.75 g', '7.50 g', '7.0', 'x2.0'],
      ],
    },
    {
      type: 'title',
      text: '了解表面pH及其对褐变的影响',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '中性pH（6.0）',
          icon: 'mdi:water',
          description: '大多数生肉和蔬菜的天然pH值。美拉德反应以基准速度进行。',
          highlight: false,
          points: ['反应速度：x1.0（基准）', '全天然，无添加剂', '最适合：纯粹主义者、传统方法', '褐变较慢，有更多时间控制熟度'],
        },
        {
          title: '弱碱性（pH 7.0至7.5）',
          icon: 'mdi:flask-round-bottom',
          description: '使用推荐的小苏打用量即可达到。褐变速度明显提升，且不影响风味。',
          highlight: true,
          points: ['反应速度：x1.5-2.0', '每公斤约½茶匙（约0.75g）', '最适合：焦糖洋葱、烤蔬菜', '大多数家庭厨师的理想区间'],
        },
        {
          title: '强碱性（pH 8.0至8.5）',
          icon: 'mdi:alert',
          description: '在出现风味缺陷之前的最大实用碱度。褐变速度加倍，但需要仔细监控。',
          highlight: false,
          points: ['反应速度：x2.0-3.0', '每公斤约1茶匙（约1.5g）', '最适合：深色椒盐脆饼外壳、极致焦糖化', '上桌前品尝测试 -  - 接近肥皂味边缘'],
        },
      ],
    },
    {
      type: 'title',
      text: '温度区域及其对褐变的意义',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '温度是美拉德反应的另一个关键变量。每个区域产生根本不同的结果。了解这些阈值有助于你为烹饪目标选择合适的火候。',
    },
    {
      type: 'table',
      headers: ['区域', '温度范围', '发生了什么', '最适合'],
      rows: [
        ['水分蒸发', '110°C以下', '水分蒸发，不发生褐变', '低温慢煮、水煮、蒸'],
        ['缓慢褐变', '110-139°C', '美拉德反应缓慢开始，温和上色', '慢烤番茄、低温脱水'],
        ['最佳区域', '140-180°C', '褐变速度最快，不烧焦', '煎、烤、炸、烘焙'],
        ['热解', '180°C以上', '开始燃烧，产生苦涩辛辣化合物', '快速焦化以增加风味（谨慎使用）'],
      ],
    },
    {
      type: 'title',
      text: '常见的美拉德错误及修正方法',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '添加过多小苏打',
      html: '小苏打不是越多越好。每公斤食物超过1.5克会产生金属味、肥皂味或化学余味。过度碱化产生的风味化合物与正宗美拉德褐变产生的浓郁咸香完全不同。<strong>请坚持使用计算器显示的推荐用量。</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: '烹饪温度过低',
      html: '低于110°C，你基本上是在蒸或脱水食物 -  - 而不是褐变。美拉德反应有最低活化温度。如果你想要深沉复杂的风味，<strong>食物表面必须达到至少140°C。</strong>使用高温烹饪方法，如煎、炙烤或烤箱温度超过180°C的烘烤。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '忽视水分',
      html: '水分是美拉德反应的敌人。湿表面在水蒸发之前无法超过100°C。煎制前务必<strong>将食物完全拍干。</strong>小苏打有帮助，因为它通过分解细胞壁加速表面水分的蒸发，但它无法克服明显湿润的食物。干燥表面=更好的褐变。',
    },
    {
      type: 'title',
      text: '完美褐变的专业技巧',
      level: 3,
    },
    {
      type: 'tip',
      title: '小苏打浆液技巧',
      html: '切勿直接将干小苏打撒在食物上 -  - 它不会均匀分布。将计量好的用量溶解在1-2汤匙温水中，然后用浆液刷在食物上或与食物拌匀。这确保了整个表面碱度均匀，褐变一致。',
    },
    {
      type: 'tip',
      title: '小苏打搭配干式腌制',
      html: '小苏打和盐协同作用。在烹饪前1-24小时用盐干腌肉类，然后在入锅前涂抹小苏打浆液。盐会析出参与美拉德反应的蛋白质，而小苏打加速反应。这种组合能产生最深沉、最丰富的焦脆外壳。',
    },
    {
      type: 'tip',
      title: '洋葱焦糖化捷径',
      html: '一小撮小苏打（每个大洋葱0.3克）可以将焦糖化时间从45分钟缩短到20分钟。碱性环境更快地分解洋葱细胞壁，释放出糖和氨基酸，为美拉德反应提供燃料。但要精确 -  - 太多小苏打会使洋葱变成糊状并带有化学余味。',
    },
    {
      type: 'title',
      text: '关键褐变术语词汇表',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: '美拉德反应', definition: '氨基酸与还原糖之间发生的非酶化学反应，在熟食中产生棕色和复杂的咸香风味。在110°C以上发生，与焦糖化不同。' },
        { term: '热解', definition: '有机物质在高温（180°C以上）下的热分解。与美拉德褐变不同，热解产生苦涩、辛辣，有时甚至致癌的化合物。这是食物烧焦时发生的情况。' },
        { term: 'pH值', definition: '从0到14的标度，衡量酸性（低）或碱性（高）。中性为7。大多数生食物在pH 5.5到6.5之间。小苏打将pH提升至碱性水平，加速美拉德反应。' },
        { term: '碳酸氢钠', definition: '小苏打 -  - 一种白色结晶粉末（NaHCO₃），作为弱碱使用。在烹饪中，它提高表面pH、加速褐变、嫩化肉类，并帮助蔬菜在烹饪过程中保持色泽。' },
        { term: '碱度', definition: '溶液中和酸的能力。在美拉德加速的语境中，碱度指pH值高于7.0。过高的碱度会产生苦涩的肥皂异味。' },
        { term: '反应速度倍数', definition: '美拉德反应相对于基准（pH 6）快多少倍。倍数x2.0意味着褐变速度是原来的两倍，有效将达到相同上色效果所需的烹饪时间减半。' },
        { term: '表面pH', definition: '食物最外层发生美拉德反应处的pH值，而非内部pH。小苏打主要影响表面pH，因为在短时间烹饪中它不会深入渗透食物。' },
      ],
    },
    {
      type: 'title',
      text: '快速参考：常见食物的小苏打用量',
      level: 3,
    },
    {
      type: 'summary',
      title: '日常烹饪推荐小苏打用量',
      items: [
        '焦糖洋葱（1个大）：0.3g小苏打 -  - 时间从45分钟缩短至约20分钟',
        '烤土豆（500g）：0.4g小苏打 -  - 外皮更酥脆、更金黄',
        '煎牛排（250g）：0.2g小苏打 -  - 更短时间内获得更深色的焦脆外壳',
        '鸡翅（1kg）：0.75g小苏打 -  - 外皮更酥脆，褐变更快',
        '椒盐脆饼面团（500g面粉）：1.5g小苏打 -  - 碱液浸泡后形成深棕色外壳',
        '烤蔬菜（1kg混合）：0.75g小苏打 -  - 焦糖化更均匀',
      ],
    },
    {
      type: 'paragraph',
      html: '每种食物因其天然pH值和含水量的不同，都有不同的理想碱度水平。本计算器为您省去了猜测 -  - 输入您的确切食物重量和温度，它会给出精确的小苏打用量，让您每次都能实现完美褐变。',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
