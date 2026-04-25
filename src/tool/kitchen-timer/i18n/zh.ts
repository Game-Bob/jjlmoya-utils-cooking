import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "多功能厨房计时器";
const description = "同时管理多个烹饪时间。独立闹钟设计，专业厨师必备的厨房进度组织工具（Mise en Place）。";
const faq = [
  {
    question: '我可以创建多少个计时器？',
    answer: '无限制。通过“+”按钮，你可以为每道菜添加一个计时器。非常适合同时管控多项任务：在煮面条的同时，收浓酱汁、让肉类静置、并监控烤箱。',
  },
  {
    question: '为什么肉类静置过程很重要？',
    answer: '如果肉类刚离开火焰就切开，汁水会流失。静置 5-10 分钟后，肌纤维会放松，肉汁会重新均匀分布。结果：得到多汁的口感，而非干柴的肉质。',
  },
  {
    question: '手机锁屏后计时器还工作吗？',
    answer: '是的，但你需要开启浏览器的通知权限。计时器会在后台持续运行，即使你切换标签页或锁屏手机，它也会通过声音和系统通知提醒你。',
  },
  {
    question: '什么是食品“危险温度带”？',
    answer: '细菌在 5°C 到 65°C 之间繁殖最快。烹饪后的食物在该温度区间内不应停留超过 2 小时（如果环境温度超过 30°C，则限制为 1 小时）。使用计时器来控制降温冷却的时间。',
  },
];
const howTo = [
  {
    name: '创建多个计时器',
    text: '点击“+”按钮，根据你的需要添加多个计时器。适合协调多道菜肴同步进行。',
  },
  {
    name: '个性化计时器名称',
    text: '修改每个计时器的标签以便识别正在烹饪的内容：“烤箱”、“米饭”、“酱汁”等。',
  },
  {
    name: '移动端便捷控制',
    text: '在移动端，正在运行的计时器会显示在底部可滑动的面板中。你可以直接在此暂停或重启。',
  },
  {
    name: '开启通知提醒',
    text: '授权通知权限，以便在时间结束时，即便不在当前页面，浏览器也能发出警报。',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

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
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
};

export const content: ToolLocaleContent = {
  slug: 'kitchen-timer',
  title: '多功能厨房计时器',
  description: '同时管理多个烹饪时间。独立闹钟设计，专业厨师必备的厨房进度组织工具（Mise en Place）。',
  faqTitle: '常见问题',
  ui: {
    addTimer: '添加计时器',
    stopAll: '全部停止',
    defaultName: '计时器',
    newTimerName: '新计时器',
    timerDefault1: '计时器 1',
    timerDefault2: '计时器 2',
    timerDefault3: '计时器 3',
    label: '标签',
    hours: '小时',
    minutes: '分',
    seconds: '秒',
    ready: '就绪',
    start: '开始',
    pause: '暂停',
    reset: '重置',
    addOneMin: '+1 分',
    addFiveMin: '+5 分',
    statusReady: '就绪',
    statusRunning: '运行中',
    statusPaused: '已暂停',
    statusFinished: '倒计时结束！',
    finishNotification: '计时任务已完成：',
  },
  faq, howTo,
  seo: [
    {
      type: 'title',
      text: '厨房的时间掌控艺术',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '专业烹饪不仅仅关乎食谱，更在于<strong>对时间的精准掌控</strong>。法国烹饪理念 <em>"Mise en Place"</em>（一切就绪）视时间为一种核心辅料。静置 5 分钟的牛排能锁住肉汁，而无需等待的牛排切开即会干涩。',
    },
    {
      type: 'title',
      text: '温度与时间的化学反应',
      level: 3,
    },
    {
      type: 'table',
      headers: ['食品', '烹饪程度', '建议时长', '效果'],
      rows: [
        ['溏心蛋', '流心蛋黄', '3-4 分钟', '蛋白质质地极其柔滑'],
        ['软心蛋 (Mollet)', '膏状蛋黄', '5-6 分钟', '口感与定型的完美平衡'],
        ['全熟蛋', '完全凝固', '9-11 分钟', '最大的稳定性质感'],
        ['肉类 - 美拉德反应', '大火煎制', '每面 1-2 分钟', '产生独特的焦香风味'],
        ['肉类 - 深层静置', '静置过程', '5-20 分钟', '肉汁重新分配后的多汁感'],
      ],
    },
    {
      type: 'title',
      text: '食品安全：关于危险温度带',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '时间不仅关乎美味，更关乎安全。细菌在 5°C 至 65°C 之间极易繁殖。烹饪后的食物在此温区停留不应超过 <strong>2 小时</strong>。使用精准计时器协助管控冷却入库的进度。',
    },
    {
      type: 'title',
      text: '专业级的厨房组织建议',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>错开完成时间：</strong> 如果所有菜同时完成，装盘时你会手忙脚乱。尽量规划让配菜早于主菜 5 分钟准备好。',
        '<strong>利用余热：</strong> 在计时器响铃前 1-2 分钟关闭火源。余热会温柔地完成最后的烹制。',
        '<strong>重命名你的计时器：</strong> 忙碌时容易忘记闹钟是哪道菜。使用本工具的重命名功能，标注“烤箱”、“米饭”或“酱汁”。',
      ],
    },
    {
      type: 'tip',
      html: '<strong>主厨建议：</strong> 对时间的精确把控是专业大厨与家庭主夫/主妇的分水岭。依靠科学工具而非感觉，能极大地稳定烹饪水准。',
    },
  ],
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
