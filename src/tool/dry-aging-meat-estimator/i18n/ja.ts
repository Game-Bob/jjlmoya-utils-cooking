import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "ドライエイジング熟成肉の歩留まり・コスト計算機";
const description = "自宅や熟成庫での牛肉などのドライエイジング（乾燥熟成）において、水分蒸発による重量減少、トリミング（外皮の除去）のロス、および実質的なキログラム単価を計算します。";
const faq = [
  {
    question: "ドライエイジング中、肉はどれくらい重量が減少しますか？",
    answer: "標準的な30〜45日間のドライエイジングプロセスでは、水分の蒸発により肉の重量が約15%〜25%減少します。さらに、調理前に乾燥した外皮（ペリクル）をトリミングする際に、初期重量の約15%が失われます。"
  },
  {
    question: "ドライエイジングに最適な湿度は何％ですか？",
    answer: "乾燥熟成肉の理想的な相対湿度は75%〜85%です。湿度が低すぎる（75%未満）と表面が乾燥しすぎて内部に水分が閉じ込められます。湿度が高すぎる（85%超）とカビや腐敗のリスクが高まります。"
  },
  {
    question: "なぜ可食部のキログラム単価がこれほど上昇するのですか？",
    answer: "水分蒸発とトリミングにより重量が失われるため、最終的に使用できる重量は初期重量よりも少なくなります。全体の購入費用は変わらないため、可食部1kgあたりの実質価格は重量減少に比例して高くなります。"
  }
];

const howTo = [
  {
    name: "初期重量を入力",
    text: "ドライエイジングを開始する前の肉塊の初期重量を入力します。"
  },
  {
    name: "熟成日数を設定",
    text: "熟成の総日数を通常1日〜60日の間で選択します。"
  },
  {
    name: "相対湿度を調整",
    text: "熟成庫の湿度（理想は75%〜85%）を設定し、水分の蒸発速度を決定します。"
  },
  {
    name: "元の価格を入力",
    text: "原料肉の1kgあたりの価格を入力し、最終歩留まりのコストと比較します。"
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'dry-aging-meat-estimator',
  title,
  description,
  faqTitle: 'よくある質問',
  ui: {
    title: '熟成肉コスト計算機',
    subtitle: '重量減少をシミュレートし、最終的な歩留まりコストを計算',
    startWeightLabel: '初期重量',
    daysLabel: '熟成日数',
    pricePerKgLabel: '元の価格',
    humidityLabel: '相対湿度',
    finalWeightLabel: '最終可食重量',
    yieldLabel: '総歩留まり率',
    originalCostLabel: '初期総コスト',
    finalCostPerKgLabel: '最終可食価格',
    moistureLossLabel: '水分蒸発ロス',
    trimmingLossLabel: 'トリミング（外皮）廃棄ロス',
    warningLowHumidity: '警告: 湿度が75%未満です。表面が急速に乾燥し、ケースハードニング（表面硬化）を引き起こす可能性があります。',
    warningHighHumidity: '警告: 湿度が85%を超えています。細菌繁殖や不要なカビの発生リスクが高まります。',
    timelineTitle: 'ドライエイジング進行タイムライン',
    timelineInfoText: 'タイムライン上をクリックすると、肉の物理的変化のプレビューを表示します'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'ドライエイジング肉の科学と経済性',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'ドライエイジング（乾燥熟成）は、微生物学、生物化学、物理学を組み合わせて、通常の肉塊を柔らかく風味の凝縮されたご馳走へと変化させる料理技術です。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '75-85%',
          label: '理想の湿度',
          icon: 'mdi:water-percent'
        },
        {
          value: '1-3°C',
          label: '最適な温度',
          icon: 'mdi:thermometer'
        },
        {
          value: '15%',
          label: 'トリミングロス',
          icon: 'mdi:knife'
        },
        {
          value: '30-45日',
          label: '標準的な熟成',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: '重量減少のメカニズムと漸近曲線の理解',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'ドライエイジング中の重量減少は漸近的です。最初の14日間で水分が急速に蒸発し、硬く暗い表面層（ペリクル）が形成され、2〜3週間後には水分蒸発が緩やかになります。'
    },
    {
      type: 'list',
      items: [
        '<strong>1〜14日目:</strong> 急速な蒸発。肉は重量の10%〜12%（主に水分）を失います。筋繊維が収縮し、旨味が凝縮されます。',
        '<strong>15〜30日目:</strong> ペリクルの形成により蒸発が緩やかになります。酵素（カルパインやカテプシン）がコラーゲンを分解し、肉が柔らかくなります。',
        '<strong>30〜45日目:</strong> 水分減少は最小限。脂質の酸化によりナッツやブルーチーズのような深い熟成香が発生します。',
        '<strong>トリミングロス:</strong> 熟成終了後、外側の硬いペリクルを切り落とす必要があり、全体重量の約15%が除去されます。'
      ]
    },
    {
      type: 'title',
      text: '熟成庫における環境管理',
      level: 2
    },
    {
      type: 'paragraph',
      html: '安定した空気の質、温度、湿度の管理が不可欠です。環境のブレは肉の腐敗や失敗につながります。'
    },
    {
      type: 'list',
      items: [
        '<strong>温度管理:</strong> 1°C〜3°Cを維持する必要があります。0°C未満では酵素の働きが停止し、4°Cを超えると病原菌が繁殖します。',
        '<strong>相対湿度 (RH):</strong> 理想は75%〜85%です。70%未満ではケースハードニングが発生し、85%を超えると有害なカビが発生しやすくなります。',
        '<strong>風速:</strong> 表面を均一に乾燥させるため、穏やかな空気循環が必要です。'
      ]
    },
    {
      type: 'title',
      text: 'コストへの影響と収益性の計算',
      level: 2
    },
    {
      type: 'paragraph',
      html: '蒸発とトリミングにより可食部が減少し、実質的なキログラムあたりの単価が上昇します。'
    },
    {
      type: 'table',
      headers: ['熟成期間', '平均蒸発ロス', '平均トリミングロス', '最終歩留まり', 'コスト倍率'],
      rows: [
        ['14日', '10.5%', '15.0%', '74.5%', '1.34倍'],
        ['21日', '13.5%', '15.0%', '71.5%', '1.40倍'],
        ['30日', '17.5%', '15.0%', '67.5%', '1.48倍'],
        ['45日', '21.0%', '15.0%', '64.0%', '1.56倍'],
        ['60日', '24.0%', '15.0%', '61.0%', '1.64倍']
      ]
    },
    {
      type: 'title',
      text: '安全ガイドライン: 微生物学と善玉菌・悪玉菌の識別',
      level: 2
    },
    {
      type: 'paragraph',
      html: '安全な熟成は有用微生物（<em>Thamnidium</em>、<em>Mucor</em>、<em>Rhizopus</em>属のカビ）の働きに依存しています。厳重な衛生管理が不可欠です。'
    },
    {
      type: 'list',
      items: [
        '<strong>良い兆候:</strong> 乾燥して硬く、濃い紫〜茶色の表面。白い粉状・糸状のカビ（チーズの皮に似たもの）は正常で安全です。',
        '<strong>悪い兆候:</strong> 表面のベタつき、ヌメリ、濡れ。緑色・黒色・黄色系のカビ。アンモニア臭や腐敗臭がする場合は破棄してください。',
        '<strong>清潔さ:</strong> 新しい肉を入れる前に、必ず熟成庫、フック、ラックを消毒してください。'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
