import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = '雪芭Brix计�器：糖与水果比例及冰点控制，实现完美可挖取性';
const description = '精准调控糖、果泥和水的比例，每次都能做出可挖取的雪芭。通过精确的Brix和PAC计� - ，解决质地过硬或过软的� - �题。';

const faq = [
  {
    question: '什么是Brix（白利度），为什么它在雪芭中很重要？',
    answer: 'Brix（°Bx）衡量液体溶液中溶解固形物（主要是糖）的百分比。在雪芭中，Brix值在25%到30%之� - �（理想值为28%）对获� - 合适的质地至关重要。低于25%� - �，雪芭会冻结成坚硬的冰� - ，因为糖分不足以干扰冰晶的形成。高于30%� - �，冰点降� - 太低，雪芭在标准冷冻柜中保持半液态，� - �法完全凝固。',
  },
  {
    question: '如何计� - 雪芭配方中合适的用糖量？',
    answer: '首先称量果泥的重量，并用折射仪测量其天然Brix值（或选择预设值）。将这些数据连同您想要的批次总量和目标Brix值（默认28%）输入计� - 器。计� - 器会确定需要添加多少� - 糖和水，使总混合物进入最佳的25%-30% Brix范围。它还会考虑冰点降低值（PAC），因此如果雪芭本来会过硬，您可以用葡萄糖替代部分� - 糖。',
  },
  {
    question: '为什么我自制的雪芭总是过硬或冰渣感强？',
    answer: '雪芭过硬、像冰� - 一样，几乎总是意味着总糖浓度太低（低于25% Brix）。水果中的水分冻结成大冰晶，而不是保持部分液态。解决方法：添加更多� - 糖以提高Brix值，或者用葡萄糖替代部分� - 糖 -  - 葡萄糖的� - 冻能力几乎是� - 糖的两倍（PAC 190 vs 100），且甜度低30%，因此可以在不使雪芭过甜的情况下降低冰点。',
  },
  {
    question: '在雪芭中使用� - 糖和葡萄糖有什么区别？',
    answer: '� - 糖（食糖）是标准甜味剂，PAC为100，POD为100。葡萄糖（葡萄糖粉）的PAC为190 -  - 冰点降低能力接近两倍 -  - 但甜度仅为70%（POD 70）。这意味着葡萄糖每克软化雪芭的效果远优于� - 糖，且不会过甜。当您的水果本身已经很甜� - �（例如芒果、香蕉），需要使用更强的� - 冻能力而不增加甜度，此� - �应使用葡萄糖。',
  },
  {
    question: '水果的天然糖分如何影响计� - ？',
    answer: '不同水果的天然糖含量差异很大：柠檬和青柠约2% Brix，草莓约8%，芒果和葡萄14%-18%，香蕉高达22%。计� - 器会考虑您水果的天然Brix值，这样您就不会意外地使总糖浓度偏高或偏低。这就是为什么建议使用折射仪测量实际水果的Brix值 -  - 季节性变化可能使Brix值上下浮动3-4个百分点。',
  },
];

const howTo = [
  {
    name: '称量果泥',
    text: '用克为单位精确测量果泥或果汁的重量。',
  },
  {
    name: '估� - 或测量水果Brix值',
    text: '使用折射仪获取水果的精确Brix值，或从我们的数据库中选择典型值（例如芒果：14%，草莓：8%）。',
  },
  {
    name: '在计� - 器中输入重量',
    text: '输入水果重量、水果Brix值和目标Brix值（默认为28%）。',
  },
  {
    name: '查看推荐的糖浆添加量',
    text: '计算器会立即显示为达到28% Brix目标所需添加的糖和水推荐量。',
  },
  {
    name: '根据需要调整糖的种类',
    text: '如果混合物的冰点降低值不足，可以用葡萄糖替代部分蔗糖。',
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
  slug: 'brix-sorbet-density-calculator',
  title: 'Brix雪芭密度计�器',
  description: '精准调控糖、果泥和水的比例，每次都能做出可挖取的雪芭。通过精确的Brix和PAC计� - ，解决冰渣或过软的质地� - �题。',
  faqTitle: '常见� - �题',
  ui: {
    fruitWeightLabel: '果泥重量',
    fruitBrixLabel: '水果Brix值',
    sugarWeightLabel: '� - 糖（食糖）重量',
    dextroseWeightLabel: '葡萄糖重量',
    waterWeightLabel: '添加水重量',
    targetBrixLabel: '目标Brix值',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    brixUnit: '% Bx',
    totalBrixLabel: '总混合物Brix值',
    totalWeightLabel: '总批次重量',
    totalPACLabel: '冰点降低值（PAC）',
    statusLabel: '雪芭质地描述',
    statusSoft: '过软/半液态',
    statusOptimal: '最佳可挖取性',
    statusHard: '过硬/冰渣感',
    recommendedTitle: '糖浆推荐（50%水果）',
    recommendedSugarLabel: '所需� - 糖',
    recommendedWaterLabel: '所需水',
    fruitPresetLabel: '水果预设',
    presetCustom: '自定义水果',
    presetLemon: '柠檬/青柠（2% Bx）',
    presetStrawberry: '草莓/树莓（8% Bx）',
    presetOrange: '橙子/桃子（10% Bx）',
    presetMango: '芒果/葡萄/樱桃（14% Bx）',
    presetBanana: '香蕉（21% Bx）',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '雪芭平衡的科学：Brix、PAC与固形物',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '制作专业雪芭是食品科学的实践。不同于依靠乳脂和蛋白质来构建结构和柔软度的冰淇淋，雪芭完全依赖溶解的糖和稳定剂。这些溶解糖的浓度以Brix度（°Bx）来衡量。完美的雪芭混合物需要25%到30% Brix的糖浓度。如果糖含量太低，水分会冻结成大而尖锐的针状冰晶，产生� - 糙、坚硬的冰� - 。如果糖含量太高，冰点被过度降低，雪芭在典型的家用或商用冷冻柜中会保持半液态糖浆状。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '28%',
          label: '理想目标Brix值',
          icon: 'mdi:target',
        },
        {
          value: '25-30%',
          label: '安全Brix范围',
          icon: 'mdi:gauge',
        },
        {
          value: '≈50%',
          label: '最佳水果比例',
          icon: 'mdi:fruit-grapes',
        },
        {
          value: 'PAC 100/190',
          label: '� - 糖/葡萄糖',
          icon: 'mdi:molecule',
        },
      ],
    },
    {
      type: 'title',
      text: '理解PAC：冰点降低因子',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC（Potere Anticongelante，即� - 冻能力）是西点厨师用来量化某种成分降低水冰点程度的指标。� - 糖（标准食糖）是基准参考，PAC值为100。然而，� - 糖非常甜。如果您需要添加更多固形物或增强� - 冻能力而又不使雪芭过甜，可以用葡萄糖替代一部分� - 糖。葡萄糖的PAC为190，使其在防止冰晶形成方面的效果几乎是� - 糖的两倍，而甜度仅为� - 糖的70%。',
    },
    {
      type: 'title',
      text: '�糖vs葡萄糖：为雪芭选择合适的糖',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '蔗糖（食糖）',
          icon: 'mdi:cube-outline',
          description: '标准甜味剂，所有PAC和POD计� - 的基准。提供纯净的甜味和质感。',
          points: [
            'PAC值：100（基准）',
            'POD值：100（全甜度）',
            '最适合：主要甜味剂角色',
            '赋予质感和标准质地',
          ],
        },
        {
          title: '葡萄糖（葡萄糖粉）',
          icon: 'mdi:grain',
          description: '一种单糖，冰点降低能力接近两倍，甜度明显更低。',
          highlight: true,
          points: [
            'PAC值：190（接近� - 糖的2倍）',
            'POD值：70（甜度低30%）',
            '最适合：软化硬雪芭',
            '当水果本身已经很甜� - �的理想选择',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '常见水果Brix值参考表',
      level: 3,
    },
    {
      type: 'table',
      headers: ['水果类型', '平均Brix值', '含水量', '酸度水平'],
      rows: [
        ['柠檬/青柠', '2% - 4% Bx', '非常高', '极高'],
        ['草莓/树莓', '7% - 9% Bx', '高', '中等'],
        ['橙子/桃子', '9% - 11% Bx', '中高', '低至中等'],
        ['苹果/梨', '11% - 13% Bx', '中', '低'],
        ['芒果/葡萄/樱桃', '14% - 18% Bx', '中低', '非常低'],
        ['香蕉', '20% - 22% Bx', '低', '可忽略'],
      ],
    },
    {
      type: 'title',
      text: '如何校准您的雪芭混合物',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '要平衡雪芭配方，首先测量果泥的重量和糖浓度。强烈建议使用折射仪以确保准确性，因为水果的甜度会因季节和成熟度而变化。如果没有折射仪，可以使用上表进行估� - 。获� - 这些数值后，将其输入我们的计� - 器，以确定将总混合物提升至28% Brix目标所需的糖浆（水和糖）精确用量。为获� - 最佳质地，水果占比应约为总批次重量的50%。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '为什么我的雪芭是冰渣感或太硬？',
      html: '冻结后像石头一样硬的雪芭几乎总是<strong>糖太少</strong>（Brix低于25%）。果泥中的水分结晶成大型锯齿状冰片。通过添加更多� - 糖以提高总Brix值来解决，或者用葡萄糖替代部分� - 糖以增加PAC而不使产品过甜。还要检查水果比例是否过高 -  - 水果超过60%会为糖固形物留下不足的空� - �。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '为什么我的雪芭是稀软的或无法冻结？',
      html: '保持柔软或汤状的雪芭<strong>糖太多</strong>（Brix高于30%）。冰点被过度降低，您的冷冻柜� - �法使混合物凝固。减少总糖用量，如果水果本身天然很甜（例如香蕉或芒果），则按比例减少添加的� - 糖。检查您的目标温度：家用冷冻柜运行在−18°C；适用于−12°C供应的PAC对标准冷冻柜来说过高。',
    },
    {
      type: 'tip',
      title: '用折射仪精确测量Brix值',
      html: '数� - 或光学折射仪是制作稳定雪芭的最佳单项投资。水果的成熟度因季节、品种和产地而差异巨大 -  - 六月采摘的草莓可能测� - 6°Bx，而八月的同一品种可能达到10°Bx。将一滴果泥挤到棱镜上，读取数值，然后输入计� - 器。仅凭表格猜测会产生不一致的结果。',
    },
    {
      type: 'title',
      text: '分步指�：如何使用此计�器',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>称量果泥</strong>  -  使用电子秤以克为单位精确测量过滤后的果泥或果汁的重量。',
        '<strong>测量或估� - 水果Brix值</strong>  -  使用折射仪获� - 精确值，或从下拉菜单中选择预设值（柠檬2%、草莓8%、芒果14%等）。',
        '<strong>设置目标Brix值</strong>  -  默认值为28%，是最佳甜度点。根据个人偏好在25%到30%之� - �调整。',
        '<strong>查看糖浆推荐</strong>  -  计� - 器立即显示需要添加多少� - 糖和水以达到目标。',
        '<strong>检查质地指示器</strong>  -  PAC仪表告诉您在冷冻柜温度下雪芭是过硬的、最佳可挖取的还是过软的。',
        '<strong>根据需要调整葡萄糖</strong>  -  如果雪芭预测过硬但已经足够甜，用葡萄糖替代部分� - 糖以在不增加甜度的情况下提升PAC。',
      ],
    },
    {
      type: 'title',
      text: '雪芭制作关键术语',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Brix（°Bx）',
          definition: '液体溶液中溶解固形物（主要是糖）的百分比。在雪芭中，25-30°Bx是理想质地和可挖取性的目标范围。',
        },
        {
          term: 'PAC（Potere Anticongelante）',
          definition: '� - 冻能力 -  - 衡量某种成分降低水冰点程度的指标。� - 糖的基准PAC为100；葡萄糖为190。',
        },
        {
          term: 'POD（Potere Dolcificante）',
          definition: '相对于� - 糖（基准100）的甜味能力。葡萄糖的POD为70，意味着其每克的甜度比食糖低30%。',
        },
        {
          term: '葡萄糖',
          definition: '一种单糖（葡萄糖粉），用于雪芭配方中以降低冰点，而不添加过多甜度。PAC 190，POD 70。',
        },
        {
          term: '折射仪',
          definition: '一种光学或数� - 仪器，通过读取光线在样品中的折射程度来测量液体的Brix值。对雪芭的一致性至关重要。',
        },
        {
          term: '糖浆',
          definition: '� - 糖和水按重量50/50混合，加热至溶解。是为雪芭基底添加糖的标准载体。',
        },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
