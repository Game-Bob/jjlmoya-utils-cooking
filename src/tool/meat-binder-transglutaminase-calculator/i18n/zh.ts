import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = '肉类粘合剂 转谷氨酰胺酶计算器: 分子美食学剂量指南';
const description = '计算肉类粘合用转谷氨酰胺酶（TG）的精确剂量。获取干撒或浆料比例、孵化时间和温度安全警报。';

const faq = [
  {
    question: '什么是转谷氨酰胺酶？它如何粘合肉类？',
    answer: '转谷氨酰胺酶（TG），也被称为"肉胶"，是一种催化蛋白质中谷氨酰胺和赖氨酸之间共价键形成的酶。当涂抹在肉类表面时，它会形成交联键，将分离的肉片融合成一块完整的整体。该反应需要时间和低温（2-5°C）才能完全发展，通常需要6到24小时。',
  },
  {
    question: '干撒法和浆料法有什么区别？',
    answer: '干撒法是将TG粉末直接撒在肉表面，用量为肉重的0.75-1.5%。浆料法是将一份TG与四份水混合制成可刷涂的糊状物，非常适合覆盖不规则表面或为大型烤肉和带皮鱼片涂抹薄而均匀的层。',
  },
  {
    question: '温度会影响转谷氨酰胺酶的活性吗？',
    answer: '是的。TG在2°C至15°C之间活性最高。在较高温度（最高40°C）下反应会加速，但必须密切监控。超过60°C时，酶会变性并永久失活: 交联反应完全停止。烹饪期间始终将TG粘合的肉保持在60°C以下以保持结合。',
  },
  {
    question: '我可以在鱼或贝类上使用转谷氨酰胺酶吗？',
    answer: '可以，但与红肉和家禽相比，鱼和贝类的肌肉蛋白质中赖氨酸和谷氨酰胺含量较低。您可能需要更高的TG比例（1.2-1.5%）和更长的孵化时间。对于精致的扇贝或薄鱼片，建议使用浆料法以实现更均匀的覆盖。',
  },
];

const howTo = [
  {
    name: '选择应用方法',
    text: '对于烤肉和牛排等均匀表面，选择干撒法。对于不规则切割、薄层或带皮蛋白质，选择浆料法。',
  },
  {
    name: '输入肉类重量',
    text: '输入您要粘合的肉类或蛋白质的总重量（克）。',
  },
  {
    name: '指定蛋白质类型',
    text: '选择最符合您切割部位的蛋白质类型。红肉需要较少的TG；鱼和贝类需要更多。',
  },
  {
    name: '设置孵化温度',
    text: '输入冷藏温度（2-40°C）。计算器将估算所需的结合时间。',
  },
  {
    name: '称量并涂抹TG',
    text: '称量计算出的TG粉末。通过撒粉或刷涂浆料的方式涂抹，然后将蛋白质表面紧紧压在一起。',
  },
  {
    name: '静置冷藏',
    text: '用保鲜膜紧紧包裹，在推荐的孵化期间冷藏，然后进行烹饪。',
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
  slug: 'meat-binder-transglutaminase-calculator',
  title: '肉类粘合剂 转谷氨酰胺酶计算器',
  description: '计算肉类粘合用转谷氨酰胺酶（TG）的精确剂量。获取干撒或浆料比例、孵化时间和温度安全警报。',
  faqTitle: '常见问题',
  ui: {
    title: '肉类粘合剂 转谷氨酰胺酶计算器',
    subtitle: '蛋白质交联的分子级精度',
    methodLabel: '应用方法',
    dryMethod: '干撒法',
    slurryMethod: '浆料法（可刷涂糊状物）',
    weightLabel: '肉类 / 蛋白质重量',
    proteinLabel: '蛋白质类型',
    redMeat: '红肉（牛肉、羊肉、野味）',
    poultry: '禽肉（鸡肉、火鸡、鸭肉）',
    fish: '鱼类（硬质鱼片、整鱼）',
    shellfish: '贝类（扇贝、虾、龙虾）',
    unitLabel: '测量系统',
    metricUnit: '公制 (g / °C)',
    imperialUnit: '英制 (oz / °F)',
    tempLabel: '孵化温度',
    resultTitle: '剂量结果',
    tgAmount: '转谷氨酰胺酶（TG）',
    waterAmount: '水（用于浆料）',
    totalWeight: '粘合后总重量',
    ratioLabel: 'TG比例',
    incubationLabel: '推荐孵化时间',
    incubationRange: '{min}小时至{max}小时',
    dryDustingDesc: '将TG粉末均匀撒在肉表面，然后将肉片压在一起。适用于扁平切割和烤肉。',
    slurryDesc: '将TG与4份水混合制成可刷涂的糊状物。用刷子涂抹于不规则表面、鱼片或皮粘合。',
    enzymeDestroyed: '酶已破坏: 温度超过变性阈值。转谷氨酰胺酶已变性，无法粘合。',
    noWarning: '',
    hours: '小时',
    grams: 'g',
    milliliters: 'ml',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '每公斤肉应该使用多少转谷氨酰胺酶？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '合适的剂量取决于蛋白质的类型和应用方法。对于红肉，按重量使用0.75-1.0%的TG（每公斤7.5-10克）。对于禽肉，1.0-1.2%。对于鱼类和贝类，1.2-1.5%。对于扁平切割部位采用干撒法，或与4份水混合制成浆料用于不规则表面。在上方计算器中输入您的蛋白质重量以获得精确测量值。',
    },
    {
      type: 'title',
      text: '干撒法 vs. 浆料法：应该选择哪种方法？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '干撒法最适合牛排、烤肉或肉排等平坦均匀的表面。直接撒上TG粉末（肉重的0.75-1.5%）并将肉片压在一起。浆料法（1份TG加4份水）更适合不规则切割、带皮鱼片或需要均匀覆盖的精致扇贝。刷上糊状物，组装并紧紧包裹。两种方法都需要低温孵化以完成结合。',
    },
    {
      type: 'title',
      text: '为什么温度控制决定粘合的成败',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '转谷氨酰胺酶在2°C至5°C之间效果最佳，在6:24小时内形成强交联键。在较高冰箱温度（5:15°C）下，反应加速至3:8小时，但结合可能较浅。超过40°C时酶迅速变性，在60°C时立即被破坏: 任何现有交联停止形成，肉将在烹饪过程中分离。始终通过上方可视化工具中的仪表监控您的冷藏温度。',
    },
    {
      type: 'table',
      headers: ['蛋白质', 'TG剂量（重量百分比）', '方法', '孵化时间（2:5°C）', '结合强度'],
      rows: [
        ['牛肉、羊肉、野味', '0.75-1.0%', '干撒', '6:12小时', '非常强'],
        ['鸡肉、火鸡、鸭肉', '1.0-1.2%', '两者均可', '8:16小时', '强'],
        ['三文鱼、鳕鱼、海鲈鱼', '1.2-1.5%', '浆料', '12:24小时', '中等'],
        ['扇贝、虾、龙虾', '1.0-1.5%', '浆料', '12:24小时', '中等'],
      ],
    },
    {
      type: 'title',
      text: '使用TG粘合肉时的常见错误',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>酶用量过多：</strong>使用超过1.5%的TG会留下可见的白色残留物和白垩质地。过量使用不会使结合更强。',
        '<strong>表面有脂肪或银皮：</strong>TG无法结合脂肪或结缔组织。涂抹前将表面修剪干净，直到露出裸露的肌纤维。',
        '<strong>跳过静置期：</strong>交联反应需要数小时。组装后立即烹饪会在交联形成之前将酶冲走。',
        '<strong>烹饪时温度超过60°C：</strong>结合在低温烹饪中保持（55:58°C的真空低温烹饪是理想的），但高温煎烤会削弱结合界面。',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
