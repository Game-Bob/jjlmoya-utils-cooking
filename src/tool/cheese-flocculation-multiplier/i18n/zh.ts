import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = '奶酪絮凝倍数计算器';
const description = '在手工奶酪制作中精确找到切割凝乳的最佳时机。使用絮凝倍数法计算凝固时间、控制水分含量、提高奶酪产量，一切尽在免费计算器。';
const faq = [
  {
    question: '什么是奶酪制作中的絮凝法？',
    answer: '絮凝法是一种用于确定切割凝乳精确时机的技术。它测量从添加凝乳酶到首次出现凝胶化迹象（絮凝）的时间，并根据奶酪风格乘以特定系数。'
  },
  {
    question: '如何检测絮凝点？',
    answer: '最常见的方法是碗测法。在添加凝乳酶后，将一个小型消毒的轻质塑料碗放在牛奶表面。每隔一分钟轻轻敲击或旋转它。最初它会自由旋转。当牛奶开始凝胶化，碗停止旋转或对运动产生阻力时，即为絮凝点。'
  },
  {
    question: '为什么凝乳切割时间如此关键？',
    answer: '在正确的时间切割凝乳可以控制脱水收缩（水分流失）。切割过早会导致凝乳脆弱、脂肪流失和产量低下。切割过晚则会产生硬质凝乳，保留过多水分或无法正常排水，导致酸败、过度酸化的奶酪。'
  },
  {
    question: '什么是絮凝倍数？',
    answer: '倍数是应用于初次絮凝时间以计算切割前总凝固时间的数值系数。标准倍数范围从2.0x（干酪，如Parmesan）到5.0x或6.0x（湿润奶酪，如Camembert）。'
  },
  {
    question: '温度和凝乳酶强度如何影响絮凝？',
    answer: '更高的温度和更强的凝乳酶会加速絮凝，意味着牛奶凝胶化更快。然而，由于总切割时间与絮凝时间直接成正比，倍数法会自动补偿这些变化，确保一致的凝乳特性。'
  }
];

const howTo = [
  {
    name: '添加凝乳酶并启动计时器',
    text: '彻底搅拌凝乳酶，然后立即在计算器中启动阶段1秒表。'
  },
  {
    name: '进行碗测',
    text: '将轻质塑料碗放在牛奶表面，定期检测阻力。'
  },
  {
    name: '标记絮凝点',
    text: '在碗抵抗旋转或敲击的瞬间，点击停止按钮记录絮凝时间。'
  },
  {
    name: '选择奶酪类型或倍数',
    text: '从数据库中选择奶酪风格或输入自定义倍数。应用程序将计算总时间并启动切割倒计时。'
  },
  {
    name: '在提示时切割凝乳',
    text: '当计时器归零时，凝乳已达到最佳张力。按照配方指示将凝乳切成块状。'
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
} as const;

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
} as const;

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
} as const;

export const content: ToolLocaleContent = {
  slug: 'cheese-flocculation-multiplier',
  title,
  description,
  faqTitle: '常见问题',
  ui: {
    title: '奶酪絮凝倍数计算器',
    subtitle: '基于实际凝胶化行为找到完美的凝乳切割窗口',
    flocculationLabel: '初次絮凝时间（分:秒）',
    multiplierLabel: '絮凝倍数',
    cheeseTypeLabel: '奶酪风格预设',
    totalCoagulationLabel: '总凝固时间',
    timeRemainingLabel: '剩余切割时间',
    flocculationTimeLabel: '絮凝时间',
    moistureLabel: '预期凝乳水分保持率',
    customOption: '自定义倍数',
    startTimer: '启动凝乳酶计时器',
    markFlocculation: '标记絮凝',
    resetTimer: '重置计时器',
    warningTitle: '凝乳酶质量警告',
    warningText: '记录的絮凝时间异常短。这可能表明凝乳酶用量过多或温度设置不当，可能导致橡胶质地或苦味。',
    phase1Title: '阶段1: 添加凝乳酶与絮凝',
    phase2Title: '阶段2: 凝固倒计时',
    phaseComplete: '凝乳已准备好切割！',
    statusWaiting: '搅拌凝乳酶中...',
    statusFlocculated: '检测到絮凝',
    statusCoagulating: '凝固中...',
    statusReady: '准备切割',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '何时切割凝乳: 每批完美奶酪的絮凝倍数法',
      level: 2
    },
    {
      type: 'paragraph',
      html: '如果你曾问过自己 <strong>"我应该在什么时候切割凝乳?"</strong> 或 <strong>"如何知道凝乳准备好了?"</strong>，答案就在于絮凝倍数法。与依赖固定计时器的工业奶酪制作不同，手工奶酪师傅测量牛奶首次开始凝胶化的时刻（絮凝点），并将该时间乘以特定风格的系数。这可以将所有变量 - 牛奶酸度、钙含量、温度、凝乳酶强度 - 纳入单次测量。我们的 <strong>奶酪絮凝倍数计算器</strong> 负责数学计算，让您每次都能在完美时刻切割。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2.0x', label: '硬质奶酪', icon: 'mdi:cheese' },
        { value: '3.0x', label: '半硬质奶酪', icon: 'mdi:cheese' },
        { value: '5.0x', label: '软质奶酪', icon: 'mdi:cheese' },
        { value: '10-15m', label: '典型絮凝时间', icon: 'mdi:timer-outline' }
      ]
    },
    {
      type: 'title',
      text: '絮凝法解决的常见奶酪制作问题',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>凝乳硬度不一致:</strong> 固定计时器无法考虑牛奶批次间的差异。絮凝法会根据您实际的牛奶化学特性进行调整。',
        '<strong>奶酪产量低:</strong> 过早或过晚切割会导致脂肪和蛋白质流失。倍数法针对最佳保留的精确窗口。',
        '<strong>水分含量不当:</strong> 硬质奶酪需要干燥的凝乳；软质奶酪需要湿润的凝乳。不同的倍数（2.0x到6.0x）直接控制脱水收缩。',
        '<strong>凝乳酶活性变化:</strong> 凝乳酶强度会随时间推移和品牌间变化。絮凝计时可捕捉您奶酪缸中的实际活性。'
      ]
    },
    {
      type: 'title',
      text: '如何进行碗测: 分步指南',
      level: 3
    },
    {
      type: 'paragraph',
      html: '碗测是在没有特殊设备的情况下检测絮凝的最简单方法。添加凝乳酶并充分搅拌后，将一个小型消毒过的塑料碗或瓶盖放在牛奶表面。每隔30至60秒轻轻敲击或旋转它。当牛奶还是液体时，碗可以自由移动。当它抵抗移动的那一刻 - 就是您的 <strong>絮凝点</strong>。记录此时间并在上面的计算器中输入。'
    },
    {
      type: 'tip',
      title: '使用瓶盖提高灵敏度',
      html: '轻质塑料瓶盖比碗更灵敏，能提供更清晰的停止点。使用前在沸水中消毒2分钟，并从添加凝乳酶的那一刻起让它漂浮在牛奶上。'
    },
    {
      type: 'tip',
      title: '保持温度稳定',
      html: '絮凝时间高度依赖于温度。仅下降2C就可使絮凝时间翻倍。在整个凝固阶段保持牛奶温度稳定（通常根据奶酪风格为30-35C）。'
    },
    {
      type: 'tip',
      title: '注意非常快的絮凝',
      html: '如果絮凝在8分钟（480秒）内发生，您可能添加了过多的凝乳酶或牛奶温度过高。这可能导致橡胶质地和苦味。如果发生这种情况，计算器会发出警告。'
    },
    {
      type: 'title',
      text: '按奶酪类型划分的絮凝倍数参考',
      level: 2
    },
    {
      type: 'table',
      headers: ['奶酪风格', '倍数', '预期水分', '切割硬度', '熟成潜力'],
      rows: [
        ['Parmesan, Grana', '2.0x', '非常低', '非常硬', '12个月以上'],
        ['Mozzarella（新鲜）', '2.0x', '非常高', '柔软/有弹性', '仅新鲜'],
        ['Swiss, Alpine', '2.5x', '低', '硬', '6-12个月'],
        ['Cheddar, Gouda', '3.0x', '中低', '硬/有弹性', '3-12个月'],
        ['Blue Cheese', '3.5x-4.0x', '中等', '嫩', '2-6个月'],
        ['Camembert, Brie', '5.0x', '高', '非常嫩', '3-8周'],
        ['Lactic / Fresh Chevre', '5.0x-6.0x', '非常高', '精致', '新鲜-2周']
      ]
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '低倍数 2.0x to 2.5x',
          icon: 'mdi:cheese',
          description: '用于需要低水分保持的硬质、干燥奶酪品种。',
          highlight: false,
          points: ['Mozzarella与Parmesan: 2.0x', 'Alpine风格: 2.5x', '快速乳清排水', '产生致密、适合长期熟成的凝乳']
        },
        {
          title: '中等倍数 3.0x to 4.0x',
          icon: 'mdi:cheese',
          description: '半硬质奶酪的标准范围，平衡水分和酸度。',
          highlight: true,
          points: ['Cheddar与Gouda: 3.0x', '蓝纹奶酪: 3.5x至4.0x', '平衡的乳清排出', '灵活的熟成潜力']
        },
        {
          title: '高倍数 5.0x to 6.0x',
          icon: 'mdi:cheese',
          description: '用于柔软、奶油状的高水分奶酪。',
          highlight: false,
          points: ['Camembert与Brie: 5.0x', 'Lactic及柔软白霉奶酪', '高水分保持', '精致、奶油状质地的形成']
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '故障排除: 凝乳凝固不正常的3个迹象',
      html: '<strong>6分钟内絮凝:</strong> 凝乳酶过多或牛奶过热。下一批次将凝乳酶减少25%。 <strong>絮凝超过25分钟:</strong> 凝乳酶可能已过期、牛奶过冷或钙含量过低。添加氯化钙。 <strong>切割时凝乳粘滑或易碎:</strong> 倍数可能过高或过低，不适合您的奶酪风格。以0.5x为增量进行调整。'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: '硬质奶酪（Parmesan, Alpine）',
      html: '使用 <strong>2.0x-2.5x倍数</strong>。尽早切割凝乳以最大限度地排出乳清。这些凝乳在凝胶仍然相对脆弱时切割，产生致密、干燥的凝乳，非常适合长期熟成。计算器将显示较短的总凝固时间。'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: '半硬质奶酪（Cheddar, Gouda）',
      html: '使用 <strong>3.0x倍数</strong>。大多数手工奶酪制作的标准范围。在水分保持和乳清排水之间取得平衡。凝乳有弹性，切口干净。大多数奶酪配方都属于此类。'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: '软质奶酪（Camembert, Brie）',
      html: '使用 <strong>5.0x-6.0x倍数</strong>。在切割前让凝胶显著增强。这会将水分锁在凝乳内部，创造出白霉奶酪特有的奶油状、可涂抹的质地。小心处理凝乳，避免失去保留的乳清。'
    },
    {
      type: 'title',
      text: '奶酪制作术语表',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: '絮凝点', definition: '奶酪制作过程中牛奶蛋白质开始聚集并形成软凝胶的时刻。' },
        { term: '凝乳酶', definition: '用于凝固牛奶、将其分离为固体（凝乳）和液体（乳清）的酶复合物（主要是凝乳酶）。' },
        { term: '脱水收缩', definition: '液体从凝胶中提取或排出的过程，例如乳清从奶酪凝乳中排出。' },
        { term: '凝固时间', definition: '从添加凝乳酶到凝乳准备好切割的总持续时间。' }
      ]
    },
    {
      type: 'summary',
      title: '完美凝乳切割的关键要点',
      items: [
        '使用碗测精确测量絮凝时间。将其输入上面的计算器。',
        '选择与您的奶酪风格匹配的倍数: 硬质2.0x，半硬质3.0x，软质5.0x。',
        '在凝固过程中保持牛奶温度稳定。即使2C的变化也会显著改变絮凝时间。',
        '如果絮凝在8分钟以内，下次减少凝乳酶。如果超过25分钟，检查凝乳酶的新鲜度。',
        '计算器负责数学运算，让您可以专注于技术和一致性。'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
