import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "曲接种与水合计算器";
const description = "计算在家中制作曲的完美水分含量、孢子接种剂量和培养温度。使用我们的免费曲接种和水分计算器，避免失败的批次。";
const faq = [
  {
    question: "烹饪曲基质的目标水分含量是多少？",
    answer: "接种曲时，蒸米或大麦的理想总水分含量在30%到35%之间。这相当于蒸后重量约为初始干重的1.35倍到1.40倍。"
  },
  {
    question: "我需要多少孢子粉（种曲）？",
    answer: "标准接种率为每公斤干燥基质1克标准孢子混合物。如果使用浓缩孢子，则需要更少（0.5克），而稀释混合物则需要更多（2.0克）。"
  },
  {
    question: "为什么在曲培养期间温度控制至关重要？",
    answer: "Aspergillus oryzae在28C至34C之间生长最佳。如果温度超过38C，霉菌可能过热、停止生长或产生不希望的绿色/黑色孢子。低于20C时，生长会显著减慢。"
  },
  {
    question: "放热阶段会发生什么？",
    answer: "培养18至24小时后，曲开始快速生长并产生自身热量。在此放热高峰期间，必须搅拌基质并降低培养箱热量以防止过热。"
  }
];

const howTo = [
  {
    name: "输入干燥基质重量",
    text: "输入大米或大麦的初始干燥重量，以建立目标水分阈值。"
  },
  {
    name: "记录蒸后重量",
    text: "输入烹饪后的实际蒸后重量。计算器确定水分百分比并检查是否在30-35%的理想范围内。"
  },
  {
    name: "计算孢子剂量",
    text: "选择孢子效力（标准、浓缩或稀释）以获得接种所需的精确孢子粉重量。"
  },
  {
    name: "监测培养参数",
    text: "调节温度和相对湿度以模拟菌丝生长，并查看48小时热曲线时间线。"
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
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
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0' as const, priceCurrency: 'EUR' as const },
};

export const content: ToolLocaleContent = {
  slug: 'koji-inoculation-calculator',
  title: '曲接种与水合计算器',
  description: '计算在家中制作曲的完美水分含量、孢子接种剂量和培养温度。使用我们的免费曲接种和水分计算器，避免失败的批次。',
  faqTitle: '常见问题',
  ui: {
    title: '曲接种分析器',
    subtitle: '优化固态曲发酵参数',
    dryWeightLabel: '干燥基质重量',
    steamedWeightLabel: '实际蒸后重量',
    targetRangeLabel: '目标蒸后重量范围',
    moistureLabel: '当前水分',
    potencyLabel: '孢子效力',
    standardPotency: '标准孢子',
    concentratedPotency: '浓缩',
    dilutedPotency: '稀释混合物',
    sporeDosageLabel: '孢子剂量',
    tempLabel: '培养箱温度',
    humidityLabel: '相对湿度',
    statusIdeal: '理想培养',
    statusSlow: '生长缓慢',
    statusInhibited: '抑制 / 低温',
    statusOverheating: '过热 / 孢子形成',
    timelineTitle: '48小时热培养周期',
    stage1Name: '0-18h: 升温',
    stage2Name: '18-36h: 放热高峰',
    stage3Name: '36-48h: 成熟'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '如何制作曲: Aspergillus Oryzae的最佳水分、孢子剂量和温度',
      level: 2
    },
    {
      type: 'paragraph',
      html: '在家中制作曲需要三个条件都正确: <strong>基质水分</strong>、<strong>孢子接种密度</strong>和<strong>培养温度控制</strong>。其中任何一个出错，您的批次都可能过热、接种失败或生长出错误的霉菌。我们的<strong>曲接种计算器</strong>根据您的具体输入计算目标蒸后重量、精确孢子剂量和实时培养状态，消除了猜测。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '30-35%',
          label: '目标水分',
          icon: 'mdi:water-percent'
        },
        {
          value: '1 g/kg',
          label: '标准孢子率',
          icon: 'mdi:seed-outline'
        },
        {
          value: '28-34 C',
          label: '理想温度',
          icon: 'mdi:thermometer'
        },
        {
          value: '48 h',
          label: '总培养时间',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: '为什么水分含量决定曲的质量',
      level: 2
    },
    {
      type: 'paragraph',
      html: '成功培养曲的最重要因素是<strong>基质水分</strong>。当大米或大麦被蒸熟时，淀粉颗粒糊化并吸收水分，变得可供Aspergillus oryzae产生的酶利用。理想的水分范围很窄: <strong>30%到35%</strong>。低于30%，菌丝无法吸取足够的水分生长，酶生产停滞。高于35%，谷物变得粘稠并结块，降低空气孔隙度并窒息好氧霉菌。'
    },
    {
      type: 'list',
      items: [
        '<strong>太干（低于30%）:</strong> 菌丝生长受阻，酶产量下降，曲从未完全定殖谷物。',
        '<strong>太湿（超过35%）:</strong> 谷物粘在一起，气孔坍塌，细菌或不需要的霉菌可能胜过Aspergillus oryzae。',
        '<strong>目标范围（30-35%）:</strong> 谷物感觉坚实，个体颗粒容易分离，菌丝在48小时内均匀扩散。',
        '<strong>如何测量:</strong> 称量干燥谷物，蒸熟，然后再次称量。计算器从这两个数字计算您的精确水分百分比。'
      ]
    },
    {
      type: 'table',
      headers: ['谷物类型', '干燥重量', '目标蒸后重量', '浸泡时间', '蒸制时间'],
      rows: [
        ['白米（短粒）', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['白米（长粒）', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['珍珠大麦', '1000 g', '1350-1400 g', '4-8 h', '40-50 min'],
        ['糙米', '1000 g', '1350-1400 g', '8-12 h', '45-60 min']
      ]
    },
    {
      type: 'title',
      text: '孢子接种: 您需要多少种曲？',
      level: 2
    },
    {
      type: 'paragraph',
      html: '接种密度直接影响霉菌定殖基质的速度及其对污染物的竞争力。标准比例是<strong>每公斤干燥基质1克孢子混合物</strong>，但这因孢子类型而异。'
    },
    {
      type: 'proscons',
      title: '选择您的孢子类型',
      items: [
        {
          pro: '标准孢子是最常见的格式，对初学者宽容，并且在家庭酿造文献中有详细记录。',
          con: '每批次的粉末量较大，可能含有不贡献于接种的填充物。'
        },
        {
          pro: '浓缩孢子使用一半的粉末达到相同的接种效果，纯度更高，对于大批量更经济。',
          con: '更容易过量使用，需要精密天平（0.01克分辨率），并且剂量不足时容错空间更小。'
        },
        {
          pro: '稀释混合物易于在大表面上分布，对不均匀混合更宽容，适合喜欢可见覆盖的初学者。',
          con: '每批次使用更多粉末，可能引入填充物中的多余淀粉。'
        }
      ]
    },
    {
      type: 'title',
      text: '放热曲线: 为什么曲会产生自身热量',
      level: 2
    },
    {
      type: 'paragraph',
      html: '当Aspergillus oryzae消耗淀粉并将其转化为单糖时，会产生代谢热量。在培养的<strong>18到36小时</strong>之间，生物活动达到高峰，产生放热浪涌，可使谷物床温度比培养箱环境温度高出5-10C。'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '您的曲过热的迹象',
      html: '如果谷物床温度超过<strong>38C</strong>，霉菌酶开始变性，真菌切换到繁殖模式，产生<strong>绿色或黑色孢子</strong>。批次会闻起来像氨味而不是甜栗子味。您必须立即搅拌基质并降低培养箱温度，使其恢复到34C以下。'
    },
    {
      type: 'tip',
      title: '12小时翻动计划',
      html: '从第18小时开始，打散谷物床并每12小时搅拌一次。这样可以释放积聚的热量，重新分布水分，并为菌丝提供新鲜氧气。使用清洁消毒过的手或无菌勺子。'
    },
    {
      type: 'tip',
      title: '湿度也很重要',
      html: '培养期间保持相对湿度在<strong>65%</strong>以上。低于40%，基质干燥，生长停止。高于90%，冷凝水会促进谷物表面的细菌生长。'
    },
    {
      type: 'tip',
      title: '相信您的鼻子',
      html: '健康的曲闻起来像甜烤栗子或新鲜蘑菇。如果您检测到氨味、酸味或腐臭味，批次可能过热或已被污染。立即移除并丢弃受影响的谷物。'
    },
    {
      type: 'card',
      icon: 'mdi:rice',
      title: '清酒和味噌制作',
      html: '接种曲的米是<strong>清酒</strong>、<strong>味噌</strong>和<strong>甘酒</strong>的基础。精确的水分控制确保淀粉转化为糖的适当酶发育。'
    },
    {
      type: 'card',
      icon: 'mdi:soy-sauce',
      title: '酱油和玉露',
      html: '在<strong>大豆</strong>或大豆小麦混合物上生长的曲驱动了产生鲜味丰富的酱油的发酵过程。恒定的温度可避免异味。'
    },
    {
      type: 'card',
      icon: 'mdi:shaker-outline',
      title: '盐曲和鱼露',
      html: '<strong>盐曲</strong>（盐发酵曲）和<strong>肉类鱼露</strong>依赖于完全定殖的谷物。我们的计算器确保您的基质在接种前处于理想的水分窗口。'
    },
    {
      type: 'title',
      text: '曲培养词汇表',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: '种曲',
          definition: '用于接种蒸谷物的孢子粉。通常是Aspergillus oryzae孢子与米粉等淀粉载体混合而成。'
        },
        {
          term: '放热阶段',
          definition: '培养18至36小时之间，Aspergillus oryzae产生足够代谢热以将谷物床温度提升到环境温度以上的时期。'
        },
        {
          term: '糊化',
          definition: '在水的存在下加热淀粉，使颗粒膨胀并变得可被霉菌产生的淀粉酶利用的过程。'
        },
        {
          term: '孢子形成',
          definition: '霉菌从营养生长切换到繁殖模式，变成绿色或黑色。这是由38C以上的热应激触发的，会破坏批次用于烹饪用途。'
        }
      ]
    },
    {
      type: 'summary',
      title: '完美曲的关键要点',
      items: [
        '目标蒸谷物水分30-35%。使用计算器找到您的精确目标蒸后重量。',
        '标准孢子以1 g/kg、浓缩孢子以0.5 g/kg、稀释混合物以2 g/kg接种。',
        '培养期间保持28-34C和65%以上湿度。18小时后每12小时搅拌一次。',
        '注意18-36小时的放热高峰。如果温度超过38C，立即搅拌并降低热量。',
        '相信您的感官: 甜栗子香气 = 好曲。氨或酸味 = 过热或污染。'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
