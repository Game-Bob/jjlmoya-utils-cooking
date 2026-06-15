import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'ディハイドレーター水分量推定ツール';
const description = '食品の乾燥による重量減少、水分の蒸発量、および乾燥時間を予測します。';

const faq = [
  {
    question: '乾燥による重量減少はどのように計算されますか？',
    answer: '重量減少は、食品を固形分と水分に分けて計算します。固形分は変化しないため、目標水分率に基づいて最終重量を算出します。'
  }
];

const howTo = [
  {
    name: '食材またはカスタムの初期水分を選択します',
    text: 'プリセットを選択するか、初期水分値を手動で入力します。'
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
  slug: 'dehydrator-moisture-estimator',
  title,
  description,
  faqTitle: 'よくある質問',
  ui: {
    title: '水分量推定ツール',
    subtitle: '重量の減少と推定乾燥時間を計算します',
    unitSystemLabel: '単位系',
    metricOption: 'メートル法 (g, °C)',
    imperialOption: 'ヤード・ポンド法 (oz, °F)',
    ingredientLabel: '食材プリセット',
    initialMoistureLabel: '初期水分量 (%)',
    targetMoistureLabel: '目標水分量 (%)',
    weightLabel: '初期重量',
    tempLabel: '乾燥温度',
    customOption: 'カスタム / 手動',
    beefOption: 'ビーフジャーキー',
    watermelonOption: '乾燥スイカ',
    appleOption: 'ドライアップル',
    mangoOption: 'ドライマンゴー',
    mushroomOption: 'キノコ類',
    targetWeightLabel: '目標重量',
    waterEvaporatedLabel: '蒸発水分量',
    estimatedHoursLabel: '推定乾燥時間',
    shrinkageLabel: '重量収縮率'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '食品乾燥における収縮率と乾燥時間の計算',
      level: 2
    },
    {
      type: 'paragraph',
      html: '適切な目標水分量への到達予測により、ディハイドレーターのスペースとスケジュールを最適化します。'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
