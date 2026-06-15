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
      html: 'ドライエイジング（乾燥熟成）は、微生物学、生物化学、物理学を組み合わせて、通常の肉塊を柔らかく風味の凝縮されたご馳走へと変変化させる料理技術です。'
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
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
