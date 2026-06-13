import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = '余热烹饪预测器：热惯性计算工具';
const description = '预测烤肉从烤箱取出后内部温度还会继续上升多少度。获取精确的取出温度，完美达到理想熟度。';

const faq = [
  {
    question: '什么是余热烹饪（Carry-Over Cooking）？为什么会发生？',
    answer: '余热烹饪（也称热惯性）是指食物从烤箱取出后内部温度继续上升的现象。烤制过程中积聚在外层的热量会持续向中心传导。在50°C时取出的烤肉，静置后可达54°C-这就是一成熟和三成熟之间的差异。',
  },
  {
    question: '烤箱温度如何影响余热效应？',
    answer: '较高的烤箱温度（200-250°C）会在表面和核心之间形成更大的温度梯度，在外壳中储存更多潜热，从而增强余热效应。在120°C下烤制的肉余热升温极小（约1°C），而在220°C下烤制时，静置期间可升温5-8°C。',
  },
  {
    question: '肉的形状会影响余热计算吗？',
    answer: '会的。形状会显著影响热渗透。整禽和厚块烤肉相对于表面积具有更大的热容量，因此保留更多热量，余热效应也更显著。牛排等扁平切块表面与体积之比高，冷却快，余热效应极小。',
  },
  {
    question: '取出肉后应该静置多长时间？',
    answer: '静置时间取决于重量和形状。一般规则是每100g肉约1分钟，最少10分钟，最长45分钟。一块2kg的烤肉大约需要16分钟静置。在此期间，内部温度均衡，余热效应完成。',
  },
];

const howTo = [
  {
    name: '选择肉的形状',
    text: '禽类选择「整禽」，里脊和去骨肉块选择「圆柱形烤肉」，牛排和鱼柳选择「扁平切块」。',
  },
  {
    name: '输入重量',
    text: '以克为单位输入肉的总重量。不同形状类型有各自的最小重量限制。',
  },
  {
    name: '设置烤箱温度',
    text: '输入您的实际烤箱温度。温度越高，余热效应越强。',
  },
  {
    name: '设置目标温度',
    text: '输入期望的最终内部温度（例如：牛肉三分熟54°C，家禽74°C）。',
  },
  {
    name: '读取取出温度',
    text: '计算器会告诉您何时取出肉，以便静置后达到目标温度。',
  },
  {
    name: '静置肉品',
    text: '按推荐时间让肉静置。不要包裹太紧，否则外壳会变软。',
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
  slug: 'carry-over-cooking-predictor',
  title: '余热烹饪预测器',
  description: '预测烤肉从烤箱取出后内部温度还会继续上升多少度。获取精确的取出温度，完美达到理想熟度。',
  faqTitle: '常见问题',
  ui: {
    title: '余热烹饪预测器',
    subtitle: '精准烧烤的热惯性计算工具',
    geometryLabel: '肉品形状',
    wholeBird: '整禽（家禽）',
    cylindricalRoast: '圆柱形烤肉（里脊、去骨肉块）',
    flatCut: '扁平切块（牛排、鱼柳）',
    weightLabel: '重量',
    ovenTempLabel: '烤箱温度',
    targetTempLabel: '目标内部温度',
    pullTemp: '取出温度',
    carryOver: '余热效应',
    restTime: '静置时间',
    minutes: '分钟',
    degreesC: '°C',
    degreesF: '°F',
    unitLabel: '单位',
    metricUnit: '公制',
    imperialUnit: '英制',
    geometryDescCylindrical: '已选择圆柱形烤肉-适中的热惯性，余热效应可预测。',
    weightG: 'g',
    weightOz: 'oz',
    errorTargetExceedsOven: '目标温度不能超过烤箱温度。',
    errorOvenTooHot: '烤箱温度超过350°C，请降低温度。',
    errorWeightTooLow: '重量低于此形状的最小值。',
    errorWeightTooHigh: '重量超过此形状的最大值。',
    pullNow: '立即取出肉品',
    pullAt: '取出温度',
    toReach: '达到',
    afterRest: '静置后',
    carryOverWillAdd: '余热效应约增加',
    footerTemplate: '{carry} 余热 · {rest} 静置 · {weight}{wunit}, {oven} 烤箱 → {target} 目标',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '余热烹饪预测器：每次都能找到完美的取出温度',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '余热烹饪是指食物离开烤箱后内部温度继续上升的现象。烤制过程中外层储存热量，这些能量在静置期间持续向较冷的中心传导。在50°C取出的厚块烤肉，静置后可达54°C-这就是一成熟和三分熟的区别。本计算器能精确预测烤肉温度会上升多少度，让您在最准确的时刻取出。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5-8°C', label: '典型余热效应（高温烤箱）', icon: 'mdi:thermometer' },
        { value: '1-3°C', label: '最小余热效应（低温烤箱）', icon: 'mdi:thermometer-low' },
        { value: '16分钟', label: '2kg烤肉的静置时间', icon: 'mdi:clock-outline' },
        { value: '45分钟', label: '推荐最长静置时间', icon: 'mdi:clock-alert' },
      ],
    },
    {
      type: 'title',
      text: '按熟度分类的取出温度对照表',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '使用此表格找到您的目标内部温度，然后让计算器确定精确的取出温度。请记住：取出温度始终<strong>低于</strong>目标温度，因为余热效应会在静置期间继续加热。',
    },
    {
      type: 'table',
      headers: ['熟度', '目标温度', '取出温度（200°C烤箱）', '静置时间'],
      rows: [
        ['牛肉 一成熟', '52°C / 126°F', '46-48°C / 115-118°F', '10-15分钟'],
        ['牛肉 三分熟', '54°C / 129°F', '48-50°C / 118-122°F', '10-15分钟'],
        ['牛肉 五分熟', '60°C / 140°F', '54-56°C / 129-133°F', '10-15分钟'],
        ['牛肉 全熟', '71°C / 160°F', '65-67°C / 149-153°F', '10-15分钟'],
        ['猪肉 七分熟', '63°C / 145°F', '57-59°C / 135-138°F', '10-15分钟'],
        ['猪肉 全熟', '71°C / 160°F', '65-67°C / 149-153°F', '10-15分钟'],
        ['鸡肉/火鸡胸肉', '74°C / 165°F', '68-70°C / 154-158°F', '15-20分钟'],
        ['鸡肉/火鸡腿肉', '82°C / 180°F', '76-78°C / 169-172°F', '15-20分钟'],
        ['羊肉 三分熟', '54°C / 129°F', '48-50°C / 118-122°F', '10-15分钟'],
        ['羊肉 五分熟', '60°C / 140°F', '54-56°C / 129-133°F', '10-15分钟'],
      ],
    },
    {
      type: 'title',
      text: '形状如何改变热力计算',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '整禽',
          icon: 'mdi:food-drumstick',
          description: '相对表面积而言热容量最大。厚实的胸肉和腿肉核心储存了巨大的潜热。',
          highlight: false,
          points: ['余热效应：200°C烤箱下5-10°C', '静置时间：20-45分钟', '最适合：火鸡、整鸡、鸭', '比目标温度低8-10°C时取出'],
        },
        {
          title: '圆柱形烤肉',
          icon: 'mdi:food-steak',
          description: '最常见的烤肉形状。适中的保温性，余热效应可预测。',
          highlight: true,
          points: ['余热效应：200°C烤箱下3-7°C', '静置时间：15-30分钟', '最适合：里脊、猪腰肉、羊架', '比目标温度低5-7°C时取出'],
        },
        {
          title: '扁平切块',
          icon: 'mdi:food',
          description: '表面与体积之比高，热量散失快。余热效应虽小但仍不可忽视。',
          highlight: false,
          points: ['余热效应：200°C烤箱下1-3°C', '静置时间：5-15分钟', '最适合：牛排、鸡胸肉、鱼柳', '比目标温度低1-3°C时取出'],
        },
      ],
    },
    {
      type: 'title',
      text: '常见的余热烹饪错误及其解决方法',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '取出太晚',
      html: '如果等到温度计显示目标温度才取出，余热效应会导致温度超额上升3-8°C。三分熟的烤肉会变成五分熟甚至七分熟。<strong>务必在比目标温度低5-8°C时取出。</strong>使用本计算器获取精确数值。',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: '切开太早',
      html: '取出后立即切开烤肉会导致多达30%的肉汁流失。温度梯度没有时间均衡，中心仍然偏生而外层过熟。<strong>请按照推荐时间充分静置。</strong>用锡纸松散地盖住-不要紧紧包裹，否则蒸汽会使外壳变软。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '烤箱温度过低',
      html: '低温烤箱（低于150°C / 300°F）在表面和核心之间形成的温度梯度极小。这意味着几乎没有余热效应。如果采用低温烹饪，可以在目标温度精确取出，超额升温的风险极小。但外壳的形成会显著减弱。',
    },
    {
      type: 'title',
      text: '完美烧烤的专业技巧',
      level: 3,
    },
    {
      type: 'tip',
      title: '10度法则',
      html: '高温烤箱（220°C / 425°F）下，整禽每100g肉大约增加1°C的余热升温，圆柱形烤肉每100g约增加0.7°C。可作为计算器结果的参考：220°C下烤制的2kg鸡肉，余热升温约7-9°C。',
    },
    {
      type: 'tip',
      title: '静置位置很重要',
      html: '务必在温热的盘子或砧板上静置肉品，不要放在冷表面上。冷表面会从烤肉底部吸热，导致最终温度不均匀。整禽应胸肉朝上静置，使肉汁均匀分布到白肉中。',
    },
    {
      type: 'tip',
      title: '盖而不包',
      html: '静置时用锡纸松散地盖住烤肉。紧紧包裹会锁住蒸汽，使外壳变软。松散覆盖可在让蒸汽逸出的同时减少约30%的热量损失，同时保留余热效应和酥脆的外皮。',
    },
    {
      type: 'title',
      text: '关键烧烤术语表',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: '余热烹饪 (Carry-Over Cooking)', definition: '食物从热源取出后内部温度继续上升的现象，由热量从外层向中心传导所致。' },
        { term: '取出温度', definition: '应将肉从烤箱取出的内部温度。考虑到余热效应，始终低于目标温度。' },
        { term: '目标温度', definition: '静置后肉应达到的最终内部温度。也称食用温度。' },
        { term: '热惯性', definition: '物体抵抗温度变化的性质。较重、密度较高的肉块热惯性更大，余热效应也更显著。' },
        { term: '静置', definition: '烤制后将肉静置不动的时间，使热量均衡、肉汁在纤维中重新分布。' },
        { term: '温度梯度', definition: '肉表面与核心之间的温度差。梯度越大，储存用于余热效应的潜热越多。' },
        { term: '潜热', definition: '烤制过程中储存在肉外层的热能。在静置温度均衡过程中释放出来。' },
      ],
    },
    {
      type: 'title',
      text: '快速参考：推荐取出温度',
      level: 3,
    },
    {
      type: 'summary',
      title: '完美效果建议取出温度（200°C / 400°F烤箱）',
      items: [
        '牛肉三分熟：48-50°C / 118-122°F取出，目标54°C / 129°F',
        '牛肉五分熟：54-56°C / 129-133°F取出，目标60°C / 140°F',
        '猪腰肉：57-59°C / 135-138°F取出，目标63°C / 145°F',
        '鸡胸肉：68-70°C / 154-158°F取出，目标74°C / 165°F',
        '整只火鸡：68-70°C / 154-158°F取出，目标74°C / 165°F（胸肉）',
        '羊架：48-50°C / 118-122°F取出，目标54°C / 129°F',
      ],
    },
    {
      type: 'paragraph',
      html: '每块烤肉都不同。重量、实际烤箱温度和肉块的形状都会影响这些数值。这正是本计算器的用途-它根据您的具体输入，计算出适合您的精确取出温度。无需猜测，不会翻车。',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
