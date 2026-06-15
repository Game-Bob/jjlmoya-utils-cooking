import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "乳液稳定性与油量限量计算器";
const description = "精确了解您的蛋黄酱、蒜泥蛋黄酱或油醋汁在破乳之前可以承受多少油量。使用我们的免费乳液稳定性计算器，防止酱汁破乳。";
const faq = [
  {
    question: "在蛋黄酱破乳之前，我可以添加多少油量？",
    answer: "这取决于乳化剂。蛋黄可支持高达约78%的油量（约为水体积的3.5倍），芥末可达70%，大豆卵磷脂可达82%，聚山梨酯可达85%。使用上面的计算器，根据您的具体用量获取精确的最大值。"
  },
  {
    question: "为什么我的乳液破乳或分相了？",
    answer: "当油量体积分数超过乳化剂的最大堆积极限时，乳液就会破乳。此时，油滴被挤压得过于紧密而聚并，混合物因此分相。这个过程是瞬时的，并非渐进过程。"
  },
  {
    question: "如何修复已破乳的蛋黄酱或蒜泥蛋黄酱？",
    answer: "在一个干净的碗中放入一个新鲜蛋黄或一汤匙温水。将破乳的混合物像添加生油一样，一边不断搅拌一边缓慢滴入。上面的计算器会准确告诉您需要多少水或蛋黄。"
  },
  {
    question: "加油太快会导致乳液破乳吗？",
    answer: "加油过快可能会暂时超负荷乳化剂，但破乳的真正原因始终是相比不正确。只要您的油量比例保持在乳化剂的极限以下，无论速度如何，乳液都能保持稳定。一旦超过极限，破乳就不可避免。"
  },
  {
    question: "蛋黄和芥末作为乳化剂有什么区别？",
    answer: "蛋黄（最高78%油量）含有卵磷脂和脂蛋白，能在油滴周围形成坚固的膜。芥末（最高70%油量）依赖粘液质和蛋白质，乳化能力较弱但能增添风味。大豆卵磷脂（82%）和聚山梨酯（85%）是高效的工业级乳化剂。"
  }
];

const howTo = [
  {
    name: "选择您的乳化剂",
    text: "选择您食谱中的乳化剂 - 蛋黄用于经典蛋黄酱，芥末用于油醋汁，或大豆卵磷脂/聚山梨酯用于分子料理。每种乳化剂设定不同的最大油量极限。"
  },
  {
    name: "输入您的液相（水相）体积",
    text: "输入您水性成分的总毫升数：水、醋、柠檬汁、葡萄酒或任何水基液体。计算器会自动添加您所选乳化剂的水分含量。"
  },
  {
    name: "设定您的油量体积",
    text: "输入您计划使用的油量。使用滑块或直接输入数值。计算器会立即显示该油量能否产生稳定的乳液，还是会导致破乳。"
  },
  {
    name: "查看稳定性结果并按需修复",
    text: "查看油量体积分数指示计。如果稳定，就可以放心使用了。如果破乳，补救面板会准确告诉您需要添加多少水（以ml计）或额外添加多少个蛋黄来恢复平衡。"
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
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'emulsion-stability-calculator',
  title: '乳液稳定性与油量限量计算器',
  description: '精确了解您的蛋黄酱、蒜泥蛋黄酱或油醋汁在破乳之前可以承受多少油量。使用我们的免费乳液稳定性计算器，防止酱汁破乳。',
  faqTitle: '常见问题',
  ui: {
    title: '乳液稳定性分析器',
    subtitle: '您的酱汁在破乳之前能承受多少油量？',
    waterLabel: '水相 (ml)',
    oilLabel: '油量体积 (ml)',
    emulsifierLabel: '乳化剂类型',
    yolkOption: '蛋黄',
    mustardOption: '芥末',
    soyLecithinOption: '大豆卵磷脂',
    polysorbateOption: '聚山梨酯',
    stableStatus: '稳定乳液',
    brokenStatus: '破乳',
    ratioLabel: '油量体积分数',
    maxLimitLabel: '最大油量极限',
    fixTitle: '补救策略',
    waterFixText: '添加水以恢复相比平衡：',
    yolkFixText: '或者，使用额外蛋黄：',
    idealRangeText: '理想范围是低于74%至80%的临界堆积极限。'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '蛋黄酱或蒜泥蛋黄酱在破乳前能承受多少油量？',
      level: 2
    },
    {
      type: 'paragraph',
      html: '每位厨师都问过这个问题：<strong>为什么我的蛋黄酱破乳了？</strong>答案其实比看起来简单。乳液 - 无论是经典的蒜泥蛋黄酱、奶油般的油醋汁，还是分子料理泡沫 - 在崩塌之前只能容纳有限的油量。我们的<strong>乳液稳定性计算器</strong>会根据您的具体食材和用量，准确告诉您破乳点在哪里。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '78%',
          label: '蛋黄最大含油量',
          icon: 'mdi:egg-outline'
        },
        {
          value: '85%',
          label: '聚山梨酯极限',
          icon: 'mdi:flask-outline'
        },
        {
          value: '74%',
          label: '理论堆积率',
          icon: 'mdi:sphere'
        },
        {
          value: '15 ml',
          label: '蛋黄水分含量',
          icon: 'mdi:water'
        }
      ]
    },
    {
      type: 'title',
      text: '科学原理：乳液为什么会破乳',
      level: 2
    },
    {
      type: 'paragraph',
      html: '烹饪乳液的工作原理是将微小的油滴分散在连续的水相中。<strong>乳化剂</strong> - 如蛋黄中的卵磷脂、芥末中的粘液质、或聚山梨酯等合成表面活性剂 - 包裹每个油滴，防止其与相邻油滴融合。'
    },
    {
      type: 'paragraph',
      html: '破乳点由纯粹的几何学决定。油滴的行为如同密集堆积的小球。在给定空间内能容纳的最大球体体积 - 即<strong>开普勒猜想</strong> - 约为74%。在真实厨房系统中，使用强力乳化剂可伸展至80-85%，但一旦超过这个限度，油滴将被挤压到极致而融合，乳液瞬时崩塌。'
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: '蛋黄',
          icon: 'mdi:egg-outline',
          description: '经典蛋黄酱乳化剂。含有卵磷脂和脂蛋白。',
          highlight: true,
          points: [
            '最大油量：78%',
            '每个蛋黄约含15ml水分',
            '增加浓郁度和色泽',
            '最适合蛋黄酱和蒜泥蛋黄酱'
          ]
        },
        {
          title: '芥末',
          icon: 'mdi:shaker-outline',
          description: '依赖粘液质和种籽蛋白。增添辛辣风味。',
          points: [
            '最大油量：70%',
            '约含10ml水分',
            '乳化能力较弱',
            '油醋汁的理想选择'
          ]
        },
        {
          title: '大豆卵磷脂',
          icon: 'mdi:leaf',
          description: '高浓度植物源表面活性剂。',
          points: [
            '最大油量：82%',
            '约含5ml水分',
            '风味中性',
            '分子料理必备'
          ]
        },
        {
          title: '聚山梨酯',
          icon: 'mdi:flask-outline',
          description: '具有最大表面活性能力的合成乳化剂。',
          points: [
            '最大油量：85%',
            '约含2ml水分',
            '最高的油量耐受度',
            '用于泡沫和气泡'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['乳化剂', '最大油量 %', '每100ml水所含油量', '最佳用途'],
      rows: [
        ['蛋黄', '78%', '约355ml', '蛋黄酱、蒜泥蛋黄酱、荷兰酱'],
        ['芥末', '70%', '约233ml', '油醋汁、清淡沙拉酱'],
        ['大豆卵磷脂', '82%', '约456ml', '分子料理酱汁、泡沫'],
        ['聚山梨酯', '85%', '约567ml', '稳定泡沫、实验性烹饪']
      ]
    },
    {
      type: 'title',
      text: '如何逐步拯救破乳的乳液',
      level: 2
    },
    {
      type: 'paragraph',
      html: '如果您的蛋黄酱或酱汁已经破乳，<strong>不要扔掉</strong>。修复方法很简单 - 但前提是您理解相比。用力搅拌无济于事；您需要添加更多的连续相（水）。'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '乳液即将破乳的常见征兆',
      html: '注意观察<strong>先变稠后突然变稀</strong>、<strong>光泽表面变粗糙</strong>，或边缘出现可见的油量汇聚。如果看到这些现象中的任何一种，请立即停止加油，搅拌一茶匙冷水后再继续。'
    },
    {
      type: 'title',
      text: '每次完美乳液的实用技巧',
      level: 3
    },
    {
      type: 'tip',
      title: '温度很重要',
      html: '所有食材都应处于<strong>室温</strong>状态。冷鸡蛋或冷油量会显著增加破乳风险。开始前将食材从冰箱取出放置30分钟。'
    },
    {
      type: 'tip',
      title: '水的安全网',
      html: '如果您的食谱没有包含足够的酸（醋、柠檬汁），在开始加油之前，<strong>每个蛋黄加一茶匙冷水</strong>。这些额外的水能创造更宽的安全边际。'
    },
    {
      type: 'tip',
      title: '修复破乳的批次',
      html: '在一个干净的碗中放入一个新鲜蛋黄。加一茶匙水搅拌。然后，<strong>将破乳的混合物尽可能缓慢地滴入</strong>，就像加生油一样。一旦重新乳化，就可以更快地加入剩余部分。'
    },
    {
      type: 'title',
      text: '烹饪乳液术语表',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: '连续相',
          definition: '包裹油滴的液体 - 在蛋黄酱等水包油型乳液中，通常是水、醋或柑橘类果汁。'
        },
        {
          term: '分散相',
          definition: '被破碎成微小液滴的液体 - 在大多数烹饪乳液中为油量。添加越多，油滴堆积越紧密。'
        },
        {
          term: '体积分数',
          definition: '油量体积与总体积的比值。达到约74-85%（取决于乳化剂）时，乳液即达到其几何破乳点。'
        },
        {
          term: '聚并',
          definition: '两个或多个油滴合并成一个更大的油滴。这是触发肉眼可见乳液破乳的微观过程。'
        },
        {
          term: '相转变',
          definition: '水包油型乳液转变成油包水型乳液的临界点 - 正如从奶油制作黄油时所发生的那样。这是最终的失效模式。'
        }
      ]
    },
    {
      type: 'paragraph',
      html: '无论您是在制作经典法式蛋黄酱、蒜香浓郁的蒜泥蛋黄酱、稳定的油醋汁，还是尝试分子料理中的亲水胶体，理解<strong>油水比例</strong>都是最重要的因素。我们的计算器为您处理好数学问题，让您自信烹饪。'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
