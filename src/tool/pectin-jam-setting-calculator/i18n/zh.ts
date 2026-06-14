import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = '果胶与果酱凝固计算器 每次都能完美凝胶';
const description = '精确计算水果所需的果胶、柠檬酸和糖的用量，实现完美的果酱凝固。通过精确的化学计算，避免果酱过稀或过硬。';

const faq = [
  {
    question: '为什么果胶能让果酱凝固？',
    answer: '果胶是水果细胞壁中的天然多糖。当与糖和酸（pH 2.8-3.5）一起加热时，果胶分子形成三维凝胶网络，将水和糖包裹其中，创造出果酱的可涂抹质地。',
  },
  {
    question: 'HM果胶和LM果胶有什么区别？',
    answer: '高甲氧基（HM）果胶需要至少60%的糖和pH低于3.5才能凝胶，适合传统果酱。低甲氧基（LM）果胶通过钙离子而非糖来凝胶，可用于低糖或无糖果酱。',
  },
  {
    question: '为什么我的果酱有时会太稀？',
    answer: '果酱太稀通常是由于果胶不足（水果天然缺乏果胶）、酸不足（pH过高无法凝胶）或糖不足（对于HM果胶）。过度加水稀释或加热不足也会阻碍凝固。',
  },
  {
    question: '可以用柠檬汁代替柠檬酸粉末吗？',
    answer: '可以。本计算器将柠檬酸换算为等量的柠檬汁。约25毫升柠檬汁提供的酸度相当于1克柠檬酸。柠檬汁还能为果酱增添清新风味。',
  },
  {
    question: '哪些水果天然果胶含量高？',
    answer: '苹果、榅桲、黑莓、蔓越莓和醋栗天然富含果胶，通常不需要额外添加果胶。未完全成熟的水果也比完全成熟的水果含有更多的果胶。',
  },
];

const howTo = [
  {
    name: '选择水果',
    text: '选择您要制作果酱的水果。每种水果具有不同的天然果胶和酸度水平，这决定了需要添加什么辅料。',
  },
  {
    name: '称量准备好的水果',
    text: '输入已清洗、切好的水果重量（克）。精确称量对于精准制作果酱至关重要。',
  },
  {
    name: '选择果胶类型',
    text: '传统高糖果酱选择经典（HM）型，如果想要由钙激活的更健康的低糖果酱，则选择低糖（LM）型。',
  },
  {
    name: '查看完美配方',
    text: '计算器会输出所需的精确果胶粉末、柠檬酸（或柠檬汁）和糖的克数。在烹饪过程中加入这些，确保凝固成功。',
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
  slug: 'pectin-jam-setting-calculator',
  title: '果胶与果酱凝固计算器',
  description: '精确计算水果所需的果胶、柠檬酸和糖的用量，实现完美的果酱凝固 - 不再有太稀或太硬的果酱。',
  faqTitle: '常见问题',
  ui: {
    title: '果胶与果酱凝固计算器',
    subtitle: '完美果酱的精密凝胶化学',
    fruitLabel: '选择水果',
    allFruits: '全部',
    highPectin: '高果胶',
    mediumPectin: '中等果胶',
    lowPectin: '低果胶',
    weightLabel: '水果重量',
    weightPlaceholder: '例如 1000',
    weightUnitMetric: '克',
    weightUnitImperial: '盎司',
    pectinTypeLabel: '果胶类型',
    pectinHM: '经典（HM）',
    pectinLM: '低糖（LM）',
    sugarModeLabel: '糖模式',
    sugarModeAuto: '自动',
    sugarModeManual: '手动',
    sugarLabel: '糖的重量',
    sugarPlaceholder: '例如 650',
    recipeTitle: '配方',
    pectinNeeded: '果胶',
    citricAcidNeeded: '柠檬酸',
    lemonJuiceNeeded: '柠檬汁',
    sugarNeeded: '糖',
    totalYield: '总产量',
    sugarPercent: '糖',
    sugarLow: '低',
    sugarIdeal: '理想',
    sugarHigh: '高',
    sugarOfFruit: '占水果重量',
    sugarOfTotal: '占总重',
    statusPerfect: '完美凝胶',
    statusPerfectDesc: '您的配比平衡。果酱将完美凝固，质地丝滑、易于涂抹、光泽明亮。',
    statusSlightlyThin: '略微偏稀',
    statusSlightlyThinDesc: '果酱可能会偏软凝固。考虑增加果胶用量或减少水分以获得更坚实的凝胶。',
    statusTooThin: '太稀 - 有流质果酱风险',
    statusTooThinDesc: '如果不调整，此果酱很可能会保持液态。增加糖量（HM果胶）或添加更多果胶。',
    statusTooStiff: '太硬',
    statusTooStiffDesc: '凝胶可能会变得像橡胶一样。将果胶减半或略微增加水果重量。',
    dropTestTitle: '冷盘测试',
    dropTestHow: '滴在冷盘上',
    dropStatusLabel: '结果',
    dropTestPerfect: '会凝固。液滴起皱并保持形状',
    dropTestThin: '流质。从盘子上滑落',
    dropTestStiff: '太硬。几乎不流动',
    dropPlateLabel: '盘子',
    dropDropLabel: '液滴',
    sugarAutoHint: '自动计算',
    sugarManualHint: '输入用量',
    unitLabel: '计量系统',
    metricLabel: '公制（克）',
    imperialLabel: '英制（盎司）',
    disclaimer: '使用数字厨房秤称量所有食材以获得最佳效果。体积测量对于制作果酱不可靠。',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '果酱凝固的完整科学：果胶、酸和糖的平衡',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '果酱制作是化学与烹饪的精确交叉。其核心在于，果肉转变为坚实可涂抹的凝胶依赖于三种分子的正确平衡：<strong>果胶</strong>（凝胶剂）、<strong>酸</strong>（激活果胶的催化剂）和<strong>糖</strong>（将水从果胶链中拉出的脱水剂）。如果没有正确的配比，最终得到的要么是水果汤，要么是橡胶块。',
    },
    {
      type: 'title',
      text: '果胶如何形成凝胶网络',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '果胶是一种主要由半乳糖醛酸单元组成的复杂多糖，存在于植物细胞壁的中层。在天然状态下，果胶分子带负电荷并相互排斥，保持溶解在水果的水分中。要形成凝胶，必须同时满足三个条件：（1）必须有足够的糖来竞争水分子，使果胶链脱水；（2）pH必须降至3.5以下，通过羧基的质子化中和负电荷；（3）温度必须超过104-105°C以完全溶解和激活果胶。当这些条件满足时，果胶链形成连接区域 - 链通过氢键和疏水相互作用结合的区域 - 创建一个连续的三维海绵状网络，将果汁和糖浆包裹其中。',
    },
    {
      type: 'title',
      text: '高甲氧基（HM）果胶与低甲氧基（LM）果胶',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '果胶按其酯化度（DE）分类，即被甲醇酯化的羧基百分比。<strong>高甲氧基（HM）果胶</strong>（DE > 50%）需要至少55-65%的可溶性固形物（糖）和pH在2.8至3.5之间才能形成凝胶。这是传统果酱配方中使用的经典果胶。没有足够的糖，HM果胶会形成弱凝胶或根本不凝胶。<strong>低甲氧基（LM）果胶</strong>（DE < 50%）通过不同的机制凝胶：它通过二价钙离子（Ca²⁺）在游离羧基之间桥接进行交联。LM果胶可以在添加很少或不添加糖的情况下凝胶，非常适合低热量、适合糖尿病患者或天然甜味的果酱。一些LM果胶还能耐受高达5.5的更宽pH范围，适用于无花果和梨等低酸水果。',
    },
    {
      type: 'title',
      text: '不同水果品种的天然果胶含量',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '并非所有水果的果胶含量都相同。水果根据其天然果胶和酸度水平分为三类。了解您的水果在这个谱系中的位置决定了是否需要添加果胶粉末或柠檬酸。',
    },
    {
      type: 'table',
      headers: ['果胶水平', '酸度水平', '示例水果', '需要添加的果胶'],
      rows: [
        ['高', '高', '苹果、蔓越莓、醋栗', '0%（无需）'],
        ['高', '中/低', '榅桲、黑莓', '0%（无需）'],
        ['中', '高', '覆盆子、罗甘莓', '水果重量的0.3%'],
        ['中', '中', '李子、杏', '水果重量的0.3%'],
        ['中', '低', '蓝莓', '水果重量的0.3%'],
        ['低', '高', '樱桃、葡萄', '水果重量的0.6%'],
        ['低', '中', '桃、芒果', '水果重量的0.6%'],
        ['低', '低', '草莓、梨、无花果', '水果重量的0.6%'],
      ],
    },
    {
      type: 'title',
      text: 'pH在果酱凝胶中的关键作用',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '果酱混合物的pH值可以说是家庭果酱制作中最容易被忽视的变量。当pH高于3.8时，果胶上的羧基保持离子化（带负电荷），产生静电排斥，无论添加多少糖或果胶都会阻止凝胶形成。当通过添加柠檬酸或柠檬汁使pH降至3.5以下时，这些基团被质子化，使得相邻果胶链之间能够形成氢键。最佳凝胶区域在pH 2.8至3.2之间。低于pH 2.8时，凝胶变脆并可能出现脱水收缩（渗液）。高于pH 3.5时，也会发生脱水收缩，且凝胶太弱。这就是为什么草莓和无花果等低酸水果几乎总是需要添加柠檬酸 - 它们的天然pH太高，无法正常激活果胶。',
    },
    {
      type: 'title',
      text: '糖浓度及其对凝胶强度的影响',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '糖在HM果胶果酱中有两个作用。首先，糖具有高吸湿性 - 它强烈地与果胶争夺水分子，将水合层从果胶链上拉开，迫使它们相互结合。其次，糖提高了混合物的沸点，使果酱能够达到104-105°C的凝固点。在65%的糖浓度下，果胶链充分脱水，形成强韧的凝胶。低于60%时，凝胶强度线性减弱。高于68%时，糖可能超过其溶解度极限，在冷却时结晶。对于LM果胶果酱，糖只起调味作用，因为凝胶化依赖于钙桥。使用非营养性甜味剂增甜的LM果胶果酱中，糖含量可低至5-10%。',
    },
    {
      type: 'title',
      text: '柠檬酸与柠檬汁：换算与最佳实践',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '柠檬酸（C₆H₈O₇）是商业果酱制作中使用的主要酸，因为它标准化、无味且精确。柠檬汁按重量计约含5%的柠檬酸，外加苹果酸和抗坏血酸（维生素C）。<strong>1克纯柠檬酸在降低pH的能力上大约相当于25毫升新鲜柠檬汁</strong>。然而，柠檬汁还会增加液体体积，这必须计入总含水量中。为了获得最一致的结果，请使用溶解在少量水中的柠檬酸粉末。使用柠檬汁时，需额外考虑需要煮沸蒸发的20-30毫升液体才能达到凝固点。',
    },
    {
      type: 'title',
      text: '冷盘测试：判断凝固点的视觉方法',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '传统的冷盘测试（也称为皱纹测试或碟子测试）仍然是家庭果酱制作者最可靠的方法之一。在开始烹饪前，将一个小瓷盘放入冰箱冷冻10分钟。当您认为果酱已达到凝固点时，将一茶匙热果酱滴在冷盘上，冷却30秒。用指尖推动液滴边缘：如果表面明显起皱且液滴保持形状，则已达到凝胶点。如果自由流动，继续煮沸2-3分钟后再测试。本计算器以视觉方式模拟该测试，在您开始烹饪之前就显示您的配方配比是否能通过冷盘测试。',
    },
    {
      type: 'title',
      text: '故障排除：果酱失败的原因及修复方法',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>流质果酱（冷却后未凝固）：</strong>最常见的原因是煮沸不足 - 混合物从未达到104-105°C。重新煮沸果酱，每公斤水果添加1-2克柠檬酸，并用冷盘法测试。或者，将5克果胶粉溶解在冷水中，在沸腾时搅入果酱中，再煮2分钟。',
        '<strong>橡胶状或过硬的果酱：</strong>相对于水果重量添加了过多果胶，或果酱过度煮沸超过106°C，使果胶网络降解为紧密脆性的结构。要挽救，用100-200毫升苹果汁或水轻轻重新加热以稀释果胶浓度。',
        '<strong>脱水收缩（凝胶中渗出水）：</strong>这表明酸过多（pH低于2.8）或糖超过68%，两者都会导致果胶网络收缩并挤出水分。加入少量小苏打（碳酸氢钠）以逐步提高pH值。',
        '<strong>结晶（颗粒质地）：</strong>糖浓度超过溶解度，或未溶解的糖晶体充当了成核位点。在最后煮沸过程中不断搅拌，并加入1汤匙玉米糖浆或葡萄糖，这能抑制结晶。',
        '<strong>储存期间表面发霉：</strong>果酱加热不足（未达到杀菌温度）、糖含量过低（HM果胶低于60%）或瓶子未正确消毒。始终使用已消毒的瓶子，并在水浴中处理10分钟。',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
