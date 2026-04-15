import type { ToolLocaleContent } from '../../../types';

const title = "マルチキッチンタイマー";
const description = "複数の調理時間を同時に管理。独立したアラーム機能を備え、シェフや調理の段取り（ミザンプラス）に最適です。";
const faq = [
  {
    question: 'タイマーはいくつまで作成できますか？',
    answer: '無制限に作成可能です。「+」ボタンで必要な分だけ追加してください。パスタを茹でながら、ソースを煮詰め、肉を休ませ、さらにオーブンを使うといった、複数の同時調理の管理に最適です。',
  },
  {
    question: '肉の「休ませ時間」が重要なのはなぜですか？',
    answer: '火から下ろした直後に肉を切ると、肉汁がすべて皿に溢れ出してしまいます。5〜10分間休ませることで、繊維がリラックスして肉汁が全体に再分配されます。結果として、パサつかずジューシーに仕上がります。',
  },
  {
    question: '画面がロックされていても機能しますか？',
    answer: 'はい、ただし通知の許可が必要です。タイマーはバックグラウンドで動作し続け、タブを切り替えたりスマホをロックしたりしても、サウンドとブラウザ通知でお知らせします。',
  },
  {
    question: '食品衛生上の「危険温度帯」とは何ですか？',
    answer: '5°Cから65°Cの間は細菌が急速に増殖する範囲です。調理後の食品は、この温度帯に2時間以上（周囲温度が30°C以上の場合は1時間）留めてはいけません。タイマーを使って、冷却時間を厳密に管理しましょう。',
  },
];
const howTo = [
  {
    name: '複数のタイマーを作成する',
    text: '「+」ボタンを使用して、各料理の工程に合わせて必要な数のタイマーを追加します。',
  },
  {
    name: 'タイマーをカスタマイズする',
    text: '「オーブン」「ライス」「ソース」など、名前を変更してどの工程のタイマーか一目でわかるようにします。',
  },
  {
    name: 'モバイルドックで管理する',
    text: 'モバイル端末では、アクティブなタイマーが画面下部のスライド式ドックに表示されます。そこから直接一時停止やリセットが可能です。',
  },
  {
    name: '通知をオンにする',
    text: '時間になったらブラウザが通知してくれるよう、通知設定を許可してください。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
};

export const content: ToolLocaleContent = {
  slug: 'kitchen-timer',
  title: 'マルチキッチンタイマー',
  description: '複数の調理時間を同時に管理。独立したアラーム機能を備え、シェフや調理の段取り（ミザンプラス）に最適です。',
  faqTitle: 'よくある質問',
  bibliographyTitle: '参考文献',
  ui: {
    addTimer: 'タイマーを追加',
    stopAll: 'すべて停止',
    defaultName: 'タイマー',
    newTimerName: '新規タイマー',
    timerDefault1: 'タイマー 1',
    timerDefault2: 'タイマー 2',
    timerDefault3: 'タイマー 3',
    label: 'ラベル',
    hours: '時間',
    minutes: '分',
    seconds: '秒',
    ready: '準備完了',
    start: '開始',
    pause: '一時停止',
    reset: 'リセット',
    addOneMin: '+1 分',
    addFiveMin: '+5 分',
    statusReady: '準備完了',
    statusRunning: '計測中',
    statusPaused: '一時停止中',
    statusFinished: '時間です！',
    finishNotification: 'タイマーが終了しました：',
  },
  faq,
  bibliography: [
    {
      name: '食品安全基準: USDA ガイドライン',
      url: 'https://www.fsis.usda.gov/',
    },
    {
      name: 'ミザンプラス - プロの厨房管理',
      url: 'https://www.escoffier.edu/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: '厨房における時間管理の技術',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'プロの料理の世界は、単なるレシピの集まりではありません。それは<strong>正確な時間管理</strong>の賜物です。フランス料理の概念である <em>"Mise en Place"</em>（ミザンプラス：全ての準備が整っていること）には、時間も一つの重要な材料として含まれます。',
    },
    {
      type: 'title',
      text: '温度と時間の関係性',
      level: 3,
    },
    {
      type: 'table',
      headers: ['食品', '調理状態', '目安時間', '利点'],
      rows: [
        ['半熟卵', '黄身がトロトロ', '3-4 分', 'タンパク質が柔らかい'],
        ['モレ卵', '黄身が濃厚なクリーム状', '5-6 分', '食感の絶妙なバランス'],
        ['固ゆで卵', '完全に凝固', '9-11 分', '保存性が高くしっかりした食感'],
        ['肉の焼き付け', '高温調理', '1-2 分/面', 'メイラード反応による旨味'],
        ['肉の休ませ', '余熱調理', '5-20 分', '肉汁の均一な再分配'],
      ],
    },
    {
      type: 'title',
      text: '食品安全：危険温度帯への意識',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '時間は料理の質だけでなく、安全性にも直結します。細菌が繁殖しやすい「危険温度帯」は 5°Cから65°Cです。調理済みの食品をこの温度帯に放置するのは、最大 <strong>2時間</strong> までに留めてください。',
    },
    {
      type: 'title',
      text: 'プロの組織化テクニック',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>終了時間をずらす：</strong> 全ての料理が一斉に仕上がると、盛り付けでパニックになります。意図的に数分の差をつけましょう。',
        '<strong>余熱を味方につける：</strong> タイマーが鳴る1〜2分前に火を止めてみてください。余熱で優しく熱が通ります。',
        '<strong>タイマーに名前をつける：</strong> 忙しい厨房ではどのアラームが何か忘れがちです。「オーブン」「ライス」などのラベルを活用しましょう。',
      ],
    },
    {
      type: 'tip',
      html: '<strong>プロのコツ：</strong> 時間の正確さは、シェフと素人を分ける大きな境界線です。感覚に頼りすぎず、正確なツールを使って一貫した美味しさを保証しましょう。',
    },
  ],
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
