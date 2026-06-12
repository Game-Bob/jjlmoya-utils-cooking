import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Botulism Canning Safety Checker Thermal Death Calculator";
const description = "Clostridium botulinumの熱芽胞低減とF0殺菌致死率を計算します。低酸性および酸性缶詰の安全ゾーンを評価します。";
const faq = [
  {
    question: "家庭での缶詰において、なぜClostridium botulinumが重大な懸念となるのですか？",
    answer: "Clostridium botulinumは嫌気性の芽胞形成細菌で、最も致死性の高い生物毒の一つであるボツリヌス毒素を生成します。芽胞は極めて耐熱性が高く、温度が不十分な場合、密閉された瓶内の嫌気的条件下でも生存できます。"
  },
  {
    question: "食品保存においてpH 4.6が重要な意味を持つのはなぜですか？",
    answer: "pH 4.6未満の食品は酸性に分類されます。この環境ではボツリヌス菌の芽胞は発芽も毒素産生もできません。pH 4.6以上の食品については、芽胞を破壊するために116度以上の温度に達する圧力缶詰が必須です。"
  },
  {
    question: "F0殺菌致死率値とは何ですか？",
    answer: "F0値は121.11度における等価殺菌時間を測定します。標準的な低酸性殺菌プロセスでは、3.0分以上のF0値が必要であり、これは芽胞数の12桁低減（12D）に相当します。"
  },
  {
    question: "低酸性食品にウォーターバス缶詰が使えないのはなぜですか？",
    answer: "ウォーターバス缶詰は沸点（100度）までしか到達しません。この温度では低酸性食品中のClostridium botulinumの耐熱性芽胞を死滅させるには不十分です。芽胞は室温で生存し、毒素を生成します。"
  }
];

const howTo = [
  {
    name: "食品の酸度を入力",
    text: "食材のpH値を測定して入力してください。pHが4.6以上の場合、その食品は低酸性です。"
  },
  {
    name: "缶詰手法を選択",
    text: "使用する保存設備に応じて、ウォーターバス缶詰または圧力缶詰を選択してください。"
  },
  {
    name: "温度と時間を設定",
    text: "缶詰処理温度と、瓶がその温度に保たれる時間（分）を入力してください。"
  },
  {
    name: "安全性診断を評価",
    text: "結果のF0値、芽胞低減数、安全ゾーンインジケータを確認し、基準を満たしているか判断してください。"
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
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'botulism-canning-safety',
  title: 'Botulism Canning Safety Checker',
  description: 'Clostridium botulinumの熱芽胞低減とF0殺菌致死率を計算します。低酸性および酸性缶詰の安全ゾーンを評価します。',
  faqTitle: 'よくある質問',
  ui: {
    title: "缶詰用オートクレーブモニター",
    subtitle: "熱死滅診断とボツリヌス安全性評価ツール",
    methodLabel: "缶詰方法",
    waterBath: "ウォーターバス缶詰",
    pressureCanner: "圧力缶詰",
    tempLabel: "缶詰温度",
    timeLabel: "処理時間",
    phLabel: "食品pH",
    f0Label: "F0致死率値",
    dLabel: "計算D値",
    sporesLabel: "芽胞数",
    statusSafe: "殺菌完了",
    statusMarginal: "殺菌が不十分",
    statusUnsafe: "ボツリヌスリスク高",
    statusSafeDesc: "熱致死率が目標F0値3.0分を超えています。芽胞は完全に不活化されています。",
    statusMarginalDesc: "処理は部分的な不活化に達していますが、12D安全基準を下回っています。時間または温度を調整してください。",
    statusUnsafeDesc: "処理はClostridium botulinumの不活化に失敗しています。ウォーターバスでの低酸性食品は危険な状態です。",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "分",
    logReductionLabel: "対数低減",
    dValueUnit: "分",
    indicatorSectionTitle: "診断ゲージ",
    visualizerSectionTitle: "芽胞低減",
    f0Tooltip: "121.11°Cにおける等価殺菌時間（分）。安全閾値は3.0以上です。",
    dTooltip: "対数低減時間：現在の温度で芽胞の90%を破壊するのに必要な時間（分）。",
    logReductionTooltip: "10倍低減の回数。12D低減が安全基準です。",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '熱処理と芽胞不活化速度論の科学的メカニズム',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '缶詰における熱処理は、病原菌や腐敗微生物を破壊して商業的殺菌を実現します。低酸性食品保存における安全ガイドラインの主な焦点はClostridium botulinumです。ボツリヌス菌の芽胞は栄養細胞と比較して非常に耐熱性が高く、これらの芽胞を不活化するには、計算された時間高温を適用する熱死滅プロセスが必要です。温度と不活化率の数学的関係は、対数低減時間（D値）と温度依存係数（z値）で表されます。',
    },
    {
      type: 'title',
      text: '食品分類とpH 4.6の重要な安全閾値',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'pH 4.6は保存安全の分岐点です。pH 4.6未満の酸性食品は自然にボツリヌス菌の芽胞の発芽と毒素産生を抑制します。これらの食品には、沸騰水中での100度での処理で十分です。しかし、pH 4.6以上の低酸性食品は、蒸気温度を上げて完全な熱芽胞破壊を達成するために圧力缶詰を行う必要があります。以下の表は、一般的な食材の分類と缶詰方法の詳細です。',
    },
    {
      type: 'table',
      headers: ['食品グループ', 'pH範囲', '必要な缶詰方法', '一般的な例'],
      rows: [
        ['高酸性', '4.0未満', 'ウォーターバス缶詰', 'リンゴ、ベリー、柑橘類、モモ、ビネガーピクルス'],
        ['酸性調整または中酸性', '4.0～4.6', '酸調整によるウォーターバス', 'トマト、イチジク、ナシ'],
        ['低酸性', '4.6以上', '圧力缶詰（必須）', '肉類、魚介類、豆類、トウモロコシ、ジャガイモ、スープ'],
      ],
    },
    {
      type: 'title',
      text: '標高調整と沸点の安全補正',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '標高が高くなるにつれて大気圧が低下し、水の沸点が100度を下回ります。ウォーターバス缶詰では、この低温により芽胞のD値が上昇するため、より長い処理時間が必要です。圧力缶詰では、目標の内部殺菌温度を維持するために、ダイヤル式またはウェイト式ゲージの設定を上げる必要があります。以下は、沸点と必要な圧力缶詰調整の参考ガイドです。',
    },
    {
      type: 'table',
      headers: ['標高範囲', '水の沸点', '必要なダイヤルゲージ圧力', '必要なウェイトゲージ圧力'],
      rows: [
        ['0～300 m', '100.0 °C', '11 PSI（121 °C）', '10 PSI（121 °C）'],
        ['300～600 m', '99.0 °C', '11 PSI（121 °C）', '15 PSI（121 °C）'],
        ['600～900 m', '98.0 °C', '12 PSI（121 °C）', '15 PSI（121 °C）'],
        ['900～1200 m', '97.0 °C', '13 PSI（121 °C）', '15 PSI（121 °C）'],
        ['1200～1500 m', '96.0 °C', '13 PSI（121 °C）', '15 PSI（121 °C）'],
        ['1500～2000 m', '94.5 °C', '14 PSI（121 °C）', '15 PSI（121 °C）'],
      ],
    },
    {
      type: 'title',
      text: '12D芽胞低減コンセプトがボツリヌス症を防ぐ理由',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '熱による細菌の破壊は対数関数的です。D値は、特定の温度で芽胞数の90%を破壊するのに必要な時間を表し、これは1対数低減に相当します。Clostridium botulinumの基準D値は、121.11度で0.21分です。高い安全マージンを達成するために、商業基準では12対数低減プロセス（12D）が要求され、芽胞数が10の12乗分の1に低減されます。これにより目標F0値3.0分が得られ、低酸性食品の安全性が保証されます。',
    },
    {
      type: 'title',
      text: '実践的な家庭缶詰ガイドラインと安全のヒント',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'トマトは自然pHが重要な4.6の閾値付近で変動するため、ウォーターバス処理の前にレモン汁またはクエン酸で必ず酸調整してください。',
        '処理時間を短縮したり温度を下げたりしないでください。熱死滅速度論は対数関数的であり、わずかな調整でも芽胞が生存する可能性があります。',
        '圧力缶のダイヤルゲージは年に一度精度をテストしてください。誤った圧力読み取りは内部殺菌温度に直接影響します。',
        '標高差を補正するために、ウォーターバスでは処理時間を調整し、圧力缶ではPSI設定を上げてください。',
        'レシピ全体に酸が含まれていても、肉や豆類などの低酸性食材を含む混合レシピをウォーターバス缶詰にしないでください。',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
