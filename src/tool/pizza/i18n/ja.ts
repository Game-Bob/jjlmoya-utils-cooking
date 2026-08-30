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
  {
    question: "どんな小麦粉を使うべきですか？",
    answer: "理想的: Caputo Pizzeria (W260-280) や Manitoba (W350-400)。代替案: 100gあたり11-13gのタンパク質を含む小麦粉。長時間熟成には弱い粉（W130-160）を避けてください。",
  },
  {
    question: "伸ばすときに生地が破れるのはなぜですか？",
    answer: "グルテンが緩んでいません。生地玉を rumstemperatur（室温）で2〜3時間休ませてください。繰り返す場合は、こね不足か粉が弱すぎます。",
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
    name: "一次発酵（バルク）",
    text: "生地全体を室温（20〜25°C）で1〜2時間、容積が2倍になるまで発酵させます。",
  },
  {
    name: "生地玉に分割",
    text: "生地を指定の重量に分割し、丸めて休ませます。",
  },
  {
    name: "低温熟成",
    text: "分割した生地玉を密閉容器に入れ、冷蔵庫（4°C）で24〜72時間熟成させます。これが風味と消化の良さを生む重要なステップです。",
  },
  {
    name: "伸ばして焼く",
    text: "焼く30分前に冷蔵庫から出します。中心から外側に向かって伸ばし、最高温度で焼き上げます。",
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
  howTo,
  seo: [
    {
      type: 'title',
      text: '本場ナポリピザ生地のマスターガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>ナポリピザ</strong>は文化遺産です。成功の鍵は、時間、温度、加水率の正確な管理にあります。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '480°C',
          label: '焼成温度',
          icon: 'mdi:fire',
        },
        {
          value: '60-90秒',
          label: '焼成時間',
          icon: 'mdi:clock-fast',
        },
        {
          value: '65%',
          label: '標準加水率',
          icon: 'mdi:water-percent',
        },
        {
          value: 'W280',
          label: '小麦粉の強度',
          icon: 'mdi:grain',
        },
      ],
    },
    {
      type: 'title',
      text: '加水率の極めて重要な役割',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '加水率（粉の重量に対する水の割合）は、<strong>コルニチョーネ</strong>（縁の立ち上がり）の食感を左右します。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '加水率 55〜60%',
          icon: 'mdi:water-percent',
          description: '扱いやすく、初心者や家庭用オーブンに最適です。',
          points: [
            'グルテンの形成が容易',
            'ベタつきにくい生地',
            'サクッとした固めの縁',
          ],
        },
        {
          title: '加水率 63〜67%',
          icon: 'mdi:water',
          description: 'AVPN標準。軽い生地のための完璧なバランス。',
          highlight: true,
          points: [
            '伝統的なもちもち食感',
            '薪窯に最適',
            '中級以上のこね技術が必要',
          ],
        },
        {
          title: '加水率 70%以上',
          icon: 'mdi:water-plus',
          description: '巨大な気泡を持つ現代風ピザ。高度な技術を要します。',
          points: [
            '極めて大きな気泡',
            '非常に軽く消化が良い',
            '超強力粉が必要',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'イーストの種類と選び方',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '生イースト',
          icon: 'mdi:bread-slice-outline',
          description: 'ピッツァイオーロ伝統の選択。より複雑な風味を生み出します。',
          points: [
            'より深みのあるクリアな風味',
            '酵素のバランスが良い',
            'ぬるま湯に溶けやすい',
            '賞味期限が短い',
          ],
        },
        {
          title: 'インスタントドライイースト',
          icon: 'mdi:shaker-outline',
          description: '安定しており保存が簡単。常備用に最適。',
          points: [
            '長期保存が可能',
            '予備発酵が不要',
            '生イーストの3倍の発酵力',
            '比較的マイルドな風味',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'W値（粉の強度）による小麦粉選択ガイド',
      level: 3,
    },
    {
      type: 'table',
      headers: ['小麦粉の種類', '強度 (W)', '発酵時間', '推奨用途'],
      rows: [
        ['薄力・薄手粉', 'W130-180', '4-8時間', '短時間のお菓子・パン'],
        ['中力粉', 'W200-240', '8-24時間', '時短ピザや一般的なパン'],
        ['強力粉', 'W260-320', '24-72時間', '本場ナポリピザ'],
        ['超強力粉', 'W350+', '72時間以上', '超長時間熟成・超高加水'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'こね上げ温度の管理',
      html: 'こね上がりの生地温度が24°Cを超えないように注意してください。グルテン構造が破壊されます。',
    },
    {
      type: 'title',
      text: 'ピッツァ職人のための用語集',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cornicione (コルニチョーネ)',
          definition: 'ナポリピザの空気をたっぷり含んだ高い縁のこと。',
        },
        {
          term: 'Maturazione (熟成)',
          definition: '発酵とは異なり、酵素がタンパク質や糖を decompositions して風味と消化性を高めるプロセス。',
        },
        {
          term: 'Incordatura (グルテンのつながり)',
          definition: '生地が最適な弾力と伸びを持つ状態に達すること。',
        },
        {
          term: 'Autolisi (オートリーズ)',
          definition: '粉と水だけで休ませ、グルテン形成を促進させる技法。',
        },
      ],
    },
    {
      type: 'tip',
      title: '冷蔵庫熟成のコツ',
      html: '4°Cで24時間低温熟成させることで、常温では得られない複雑で芳醇な香りが生まれます。',
    },
    {
      type: 'paragraph',
      html: '当計算機で正確な配合を算出し、職人技と情熱を込めたピザ作りをお楽しみください。',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
