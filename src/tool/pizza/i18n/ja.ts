import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

const title = "ナポリピザ生地計算機";
const description = "本場ナポリピザを自宅で作るために、小麦粉、水、塩、イーストの正確な配合を計算します。";
const faq = [
  {
    question: "ナポリピザの理想的な加水率は？",
    answer: "AVPN（真のナポリピッツァ協会）のプロトコルによると、標準的な加水率は63〜67%です。初心者には60〜62%が扱いやすく、強力粉（W300+）を使用する上級者は70〜75%で素晴らしい結果を得られますが、技術を要します。",
  },
  {
    question: "生地の熟成期間はどのくらい必要ですか？",
    answer: "酵素を活性化させるために、冷蔵庫（4°C）で最低24時間必要です。最適には48〜72時間です。72時間を超える場合は、非常に強い粉（W300+）を使用しないと生地が酸っぱくなります。",
  },
  {
    question: "ドライイーストでも作れますか？",
    answer: "はい。ドライイーストは生イーストの0.4倍の量に相当します（生2.5g = ドライ1g）。品質は同様ですが、生イーストの方がより豊かな風味をもたらします。",
  },
  {
    question: "家庭用オーブンでもナポリピザは焼けますか？",
    answer: "はい、工夫次第で可能です。ピザストーンを使い、最高温度（250〜280°C）で45〜60分間予熱します。焼き時間は60〜90秒ではなく、5〜7分程度になりますが、良好な結果が得られます。",
  },
];
const howTo = [
  {
    name: "配合を計算する",
    text: "この計算機を使用して、ピザの枚数と1玉あたりの重量に基づき、各材料の正確な重量を算出します。",
  },
  {
    name: "生地を混ぜる",
    text: "小麦粉、ぬるま湯（22〜25°C）、塩、イーストを混ぜます。ミキサーで8〜10分、または手で15〜20分こねます。",
  },
  {
    name: "低温熟成",
    text: "分割した生地玉を密閉容器に入れ、冷蔵庫（4°C）で24〜72時間熟成させます。これが風味と消化の良さを生む重要なステップです。",
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
  slug: 'neapolitan-pizza-dough-calculator-authentic-recipe',
  title,
  description,
  faqTitle: "よくある質問",
  ui: {
    parameters: "パラメータ",
    quantity: "数量",
    pizzas: "枚",
    weight: "1玉の重量",
    small: "小さい (180g)",
    standard: "標準 (260g)",
    large: "大きい (350g)",
    hydration: "加水率",
    classic: "クラシック (55-60%)",
    modern: "モダン (65-70%)",
    high: "高加水 (75%+)",
    salt: "塩",
    fermentation_tip_title: "熟成のヒント",
    fermentation_tip:
      "より消化しやすく味わい深い生地にするために、小麦粉100gあたり<strong>0.3g</strong>の生イーストを使用し、冷蔵庫（4°C）で24時間熟成させてください。",
    your_recipe: "あなたのレシピ",
    fresh_yeast: "生イースト",
    dry_yeast: "ドライ",
    flour: "小麦粉 (W260-300)",
    water: "水",
    salt_label: "海塩",
    yeast: "イースト",
    yeast_note: "20°Cで8時間熟成の場合",
    total_weight: "生地の総重量",
    approx: "約",
    visual_note:
      "視覚的なサイズは、生地玉の重量に基づいた伸ばした後のピザの推定直径を表しています。",
  },
  faq,
  howTo, seo: [
    {
      type: 'title',
      text: '本場ナポリピザ生地のマスターガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>ナポリピザ</strong>は文化遺産です。成功の鍵は、時間、温度、加水率の正確な管理にあります。',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
