import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "乳液稳定性与油脂极限计算器";
const description = "准确了解蛋黄酱、蒜油酱或油醋汁在分离前能承受多少油脂。使用我们免费的乳液稳定性计算器，防止酱汁油水分离。";

const faq = [
  {
    question: "在蛋黄酱油水分离之前，我可以添加多少油脂？",
    answer: "这取决于乳化剂。蛋黄最多可支持约78%的油脂（约水体积的3.5倍），芥末最高支持70%，大豆卵磷脂最高支持82%，聚山梨醇酯最高支持85%。使用上方计算器可获取针对您具体用量的精确极限值。"
  },
  {
    question: "为什么我的乳液会破乳或油水分离？",
    answer: "当油脂体积分数超过乳化剂的最大紧密堆积极限时，乳液就会破乳。此时，油滴被挤压得非常紧密以至于融合在一起，混合物随之分离。这是瞬间发生的，而不是一个渐进的过程。"
  },
  {
    question: "如何修复破乳的分离蛋黄酱或蒜油酱？",
    answer: "在干净的碗中放入一个新鲜蛋黄或一汤匙温水开始。一边持续快速搅拌，一边缓缓倒入破乳的分离混合物，就像添加初始油脂一样。上方的计算器会准确告诉您需要补加多少水或蛋黄。"
  },
  {
    question: "倒油速度太快会导致乳液破乳吗？",
    answer: "倒油速度过快可能会暂时使乳化剂过载，但破乳的真正原因始终是相比例不当。只要您的油脂分率保持在乳化剂极限以下，无论倒油速度多快，乳液都能保持稳定。一旦超过极限，破乳不可避免。"
  },
  {
    question: "蛋黄和芥末作为乳化剂有什么区别？",
    answer: "蛋黄（最高78%油脂）含有卵磷脂和脂蛋白，能在油滴周围形成坚固的薄膜。芥末（最高70%油脂）依赖粘液和蛋白质 - 乳化力较弱但能增添风味。大豆卵磷脂（82%）和聚山梨醇酯（85%）则是高效的工业级乳化剂。"
  }
];

const howTo = [
  {
    name: "选择您的乳化剂",
    text: "选择配方中所用的乳化剂 - 经典蛋黄酱选蛋黄，油醋汁选芥末，现代主义烹饪选大豆卵磷脂/聚山梨醇酯。每种乳化剂设定不同的最大油脂极限。"
  },
  {
    name: "输入水相体积",
    text: "输入水性原料的总毫升数：水、醋、柠檬汁、葡萄酒或任何水基液体。计算器会自动加上所选乳化剂的含水量。"
  },
  {
    name: "设置油脂体积",
    text: "输入您计划使用的油脂用量。使用滑块或直接输入数值。计算器将即时显示该用量是会形成稳定乳液还是会导致破乳。"
  },
  {
    name: "查看稳定性结果并按需修复",
    text: "检查油脂体积分数仪表。如果显示稳定，即可开始制作。如果显示破乳，修复面板会准确告知恢复平衡所需添加的水（毫升）或额外蛋黄数量。"
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo' as const,
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
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'emulsion-stability-calculator',
  title,
  description,
  faqTitle: '常见问题',
  ui: {
    title: '乳液稳定性分析仪',
    subtitle: '您的酱汁在油水分离前能承受多少油脂？',
    waterLabel: '水相 (ml)',
    oilLabel: '油脂体积 (ml)',
    emulsifierLabel: '乳化剂类型',
    yolkOption: '蛋黄',
    mustardOption: '芥末',
    soyLecithinOption: '大豆卵磷脂',
    polysorbateOption: '聚山梨醇酯',
    stableStatus: '稳定乳液',
    brokenStatus: '破乳/油水分离',
    ratioLabel: '油脂体积分数',
    maxLimitLabel: '最大油脂极限',
    fixTitle: '救场修复策略',
    waterFixText: '添加水以恢复相平衡：',
    yolkFixText: '或使用额外的蛋黄：',
    idealRangeText: '理想范围在74%至80%的临界紧密堆积极限以下。'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '蛋黄酱或蒜油酱在破乳前能融合多少油脂？',
      level: 2
    },
    {
      type: 'paragraph',
      html: '每个厨师都曾问过这个问题：<strong>为什么我的蛋黄酱破乳油水分离了？</strong>答案比想象中更简单。无论是经典蒜油酱、浓稠油醋汁还是现代主义泡沫，乳液在崩溃前所能容纳的油脂都是有限的。我们的<strong>乳液稳定性计算器</strong>能根据您的具体原料和用量，精准指出破乳临界点所在。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '78%', label: '蛋黄最大油分', icon: 'mdi:egg-outline' },
        { value: '85%', label: '聚山梨醇酯极限', icon: 'mdi:flask-outline' },
        { value: '74%', label: '理论堆积率', icon: 'mdi:sphere' },
        { value: '15 ml', label: '蛋黄含水量', icon: 'mdi:water' }
      ]
    },
    {
      type: 'list',
      items: [
        '<strong>加油速度太快</strong> - 倾倒速度很少是真正的破乳原因。只要油脂比例保持在乳化剂极限以下，无论加油多快乳液都能保持稳定。',
        '<strong>原料温度过低</strong> - 冷藏蛋液或冷油会增加黏度，使油滴难以分散形成。请务必将原料恢复至室温。',
        '<strong>超过了乳化剂的油脂极限</strong> - 每种乳化剂都有最大堆积分率极限（蛋黄78%、芥末70%、大豆卵磷脂82%、聚山梨醇酯85%）。',
        '<strong>水相用量过少</strong> - 如果没有足够的水分包覆油滴，油滴别无选择只能相互融合。'
      ]
    },
    {
      type: 'title',
      text: '您应该选择哪种乳化剂？实用对比',
      level: 2
    },
    {
      type: 'paragraph',
      html: '选择合适的乳化剂取决于您的配方、风味需求以及期望的融油量。以下是四种最常见烹饪乳化剂的对比。'
    },
    {
      type: 'proscons',
      title: '蛋黄',
      items: [
        { pro: '与传统酱汁的风味兼容性极佳', con: '增加了胆固醇和蛋香味' },
        { pro: '含有卵磷脂和脂蛋白，可形成坚固的乳化层', con: '需要严格控制温度' },
        { pro: '赋予酱汁自然金黄的色彩与浓郁感', con: '不适合纯素食谱' },
        { pro: '最高支持78%的油脂分率', con: '每个蛋黄仅能提供约15ml的水分' }
      ]
    },
    {
      type: 'proscons',
      title: '芥末',
      items: [
        { pro: '为沙拉汁增添辛辣风味与层次感', con: '最大容油量较低（70%）' },
        { pro: '原料易得且使用方便', con: '乳化能力弱于蛋黄' },
        { pro: '在室温下表现稳定', con: '风味可能会掩盖清淡的酱汁' },
        { pro: '非常适合快速调制油醋汁', con: '不适合制作中性风味的乳液' }
      ]
    },
    {
      type: 'proscons',
      title: '大豆卵磷脂',
      items: [
        { pro: '容油容忍度高（82%），酱汁极为稳定', con: '需要精确称量用量' },
        { pro: '中性风味，完全不改变配方味道', con: '对操作容错率低于蛋黄' },
        { pro: '植物来源，适合纯素食者', con: '不是普通家庭厨房的常备调味料' },
        { pro: '极少的水量即可发挥作用', con: '可能会产生微小的质感改变' }
      ]
    },
    {
      type: 'proscons',
      title: '聚山梨醇酯',
      items: [
        { pro: '所有乳化剂中容油能力最高（85%）', con: '合成添加剂，非天然原料' },
        { pro: '可打造极度稳定的泡沫与空气感结构', con: '家庭厨房较难获取' },
        { pro: '仅需极少的水相即可工作', con: '需要高精度电子秤称量' },
        { pro: '现代主义烹饪与先锋实验料理的理想选择', con: '用量过大时风味较明显' }
      ]
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: '蛋黄',
          icon: 'mdi:egg-outline',
          description: '蛋黄酱的经典乳化剂。含有卵磷脂和脂蛋白。',
          highlight: true,
          points: ['最大油脂: 78%', '每个蛋黄约15ml水', '增添浓郁度与色泽', '蛋黄酱与蒜油酱首选']
        },
        {
          title: '芥末',
          icon: 'mdi:shaker-outline',
          description: '依赖种子粘液和蛋白质。增添辛辣风味。',
          points: ['最大油脂: 70%', '约10ml含水量', '乳化能力相对较弱', '适合快速油醋汁']
        },
        {
          title: '大豆卵磷脂',
          icon: 'mdi:leaf',
          description: '高浓度植物来源表面活性剂。',
          points: ['最大油脂: 82%', '约5ml含水量', '中性风味特征', '现代主义烹饪必备']
        },
        {
          title: '聚山梨醇酯',
          icon: 'mdi:flask-outline',
          description: '具有最大表面活性能力的合成乳化剂。',
          points: ['最大油脂: 85%', '约2ml含水量', '最高的油脂容忍度', '用于泡沫与空气感烹饪']
        }
      ]
    },
    {
      type: 'table',
      headers: ['乳化剂', '最大油脂 %', '每100ml水可融油', '最佳用途'],
      rows: [
        ['蛋黄', '78%', '约 355 ml', '蛋黄酱、蒜油酱、荷兰酱'],
        ['芥末', '70%', '约 233 ml', '油醋汁、清淡沙拉汁'],
        ['大豆卵磷脂', '82%', '约 456 ml', '现代主义酱汁、酱汁泡沫'],
        ['聚山梨醇酯', '85%', '约 567 ml', '稳定泡沫、实验先锋料理']
      ]
    },
    {
      type: 'title',
      text: '科学原理：乳液为何会破乳以及开普勒猜想在厨房的应用',
      level: 2
    },
    {
      type: 'paragraph',
      html: '烹饪乳液的作用原理是将微小的油滴分散在连续的水相中。<strong>乳化剂</strong> - 如蛋黄中的卵磷脂、芥末中的粘液或聚山梨醇酯等合成表面活性剂 - 包裹住每个油滴，防止其与相邻油滴融合。'
    },
    {
      type: 'paragraph',
      html: '破乳临界点纯粹由几何学决定。油滴的形态类似于紧密堆积的小球体。在给定空间内球体所能占据的最大体积比例 - 即著名的<strong>开普勒猜想</strong> - 约为74%。在实际厨房环境中，强效乳化剂可将其拓展至80-85%，但一旦超过该极限，油滴就会被严重挤压而融合，导致乳液瞬间崩解。'
    },
    {
      type: 'card',
      columns: 2,
      items: [
        {
          icon: 'mdi:egg-outline',
          title: '经典蛋黄酱与蒜油酱',
          html: '油脂比例在78%以内使用<strong>蛋黄</strong>。按每杯油搭配一个蛋黄开始。在倒油前加入一茶匙水或柠檬汁，可获得更宽的安全缓冲。'
        },
        {
          icon: 'mdi:shaker-outline',
          title: '油醋汁与清淡沙拉汁',
          html: '油脂比例在70%以内使用<strong>芥末</strong>。芥末中的植物粘液能为临时调味汁提供足够的乳化力。'
        },
        {
          icon: 'mdi:leaf',
          title: '现代酱汁与稳定泡沫',
          html: '油脂比例在82%以内使用<strong>大豆卵磷脂</strong>。非常适合中性风味的乳液，让油和酸的本味得到充分凸显。'
        },
        {
          icon: 'mdi:flask-outline',
          title: '实验性泡沫与空气感料理',
          html: '油脂比例在85%以内使用<strong>聚山梨醇酯</strong>。适合需要极高载油量和泡沫稳定性的现代烹饪技术。'
        }
      ]
    },
    {
      type: 'title',
      text: '一步步修复破乳油水分离的乳液',
      level: 2
    },
    {
      type: 'paragraph',
      html: '如果您的蛋黄酱或酱汁已经破乳分层，<strong>千万不要倒掉</strong>。解决方案非常简单 - 前提是您理解相比例的原理。更用力地搅拌无济于事；您需要补充更多的连续相（水）。'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '乳液即将破乳分离的3个常见征兆',
      html: '首先注意<strong>变稠后突然变稀</strong>的现象。其次观察<strong>光亮表面是否开始变粗糙</strong>，或<strong>边缘是否有可见的油脂渗出</strong>。一旦发现这些征兆，请立即停止加油，加入一茶匙冷水搅匀后再继续操作。'
    },
    {
      type: 'title',
      text: '制作完美乳液的实用技巧',
      level: 3
    },
    {
      type: 'message',
      html: '<strong>黄金法则：</strong>油水比例比搅拌手法、温度或搅拌速度更重要。在开始打发前，请使用我们的计算器找出您配方的精确油脂极限。'
    },
    {
      type: 'tip',
      title: '原料温度至关重要',
      html: '所有原料都应保持在<strong>室温</strong>。冷藏的鸡蛋或冷油会显著增加破乳风险。在开始制作前30分钟将原料从冰箱取出。'
    },
    {
      type: 'tip',
      title: '水的安全缓冲网',
      html: '如果配方中酸性液体（醋、柠檬汁）不足，请在开始加油前，<strong>按每个蛋黄加入一茶匙冷水</strong>。这部分额外的水分能提供更大的安全裕度。'
    },
    {
      type: 'tip',
      title: '修复破乳分层酱汁',
      html: '在干净的碗里放一个新鲜蛋黄，加入一茶匙冷水打散。然后<strong>尽可能缓慢地倒入破乳的分离酱汁</strong>，就像加纯油一样。一旦重新乳化成功，后续即可稍微加快倒入速度。'
    },
    {
      type: 'title',
      text: '烹饪乳液专业词汇表',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: '连续相 (Continuous Phase)',
          definition: '包裹着油滴的液体 - 在蛋黄酱等水包油型乳液中，通常是水、醋或柑橘汁。'
        },
        {
          term: '分散相 (Dispersed Phase)',
          definition: '被分散成微小油滴的液体 - 在大多数烹饪乳液中即为油脂。加入的油脂越多，油滴排列越紧密。'
        },
        {
          term: '体积分数 (Volume Fraction)',
          definition: '油脂体积占总体积的比例。在约74-85%（取决于乳化剂）时，乳液达到几何破乳临界点。'
        },
        {
          term: '合一/聚结 (Coalescence)',
          definition: '两个或多个油滴融合为一个更大油滴的过程。这是导致宏观上油水分离的微观过程。'
        },
        {
          term: '相反转 (Phase Inversion)',
          definition: '水包油型乳液反转为油包水型乳液的临界点 - 如鲜奶油打发过度变成黄油的过程。'
        }
      ]
    },
    {
      type: 'summary',
      title: '稳定乳液制作要点总结',
      items: [
        '每种乳化剂都有最大油脂堆积极限：蛋黄78%、芥末70%、大豆卵磷脂82%、聚山梨醇酯85%。',
        '破乳临界点由几何学原理（开普勒猜想74%）决定，而非搅拌速度。',
        '始终使用室温原料开始制作，并预先加入少量水分作为安全缓冲。',
        '破乳的酱汁可以通过添加新鲜乳化剂和水相来救回，而不是靠更用力地搅拌。',
        '使用上方的乳液稳定性计算器，获取针对您特定原料的精准容油极限。'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
