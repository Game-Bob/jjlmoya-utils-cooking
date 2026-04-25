import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "ルー（Roux）と基本ソースのマスターガイド";
const description = "インタラクティブなルー計算機。ベシャメル、ベルーテ、エスパニョールを正確な分量で作る方法を学びましょう。フランス料理の基本です。";
const faq = [
    {
      question: 'ルー（Roux）とは何ですか？何に使われますか？',
      answer: '脂（通常はバター）と小麦粉を弱火で炒め合わせたものです。ベシャメルやベルーテなどのフランス料理の基本ソース（マザーソース）の粘り気を出すためのベースとして使われます。',
    },
    {
      question: 'ルーの理想的な比率は？',
      answer: '重量比で1:1が標準です。例えば、バター50gに対して小麦粉50gです。この分量で、希望の濃度によりますが、約1リットルの液体にとろみをつけることができます。',
    },
    {
      question: 'ルーの種類による違いは何ですか？',
      answer: 'ホワイトルーは2〜3分（ベシャメル用）、ブロンドルーは5〜8分（ベルーテ用）、ブラウンルーは15〜20分（エスパニョール用）炒めます。色が濃くなるほど香ばしさが増しますが、とろみをつける力は弱まります。',
    },
    {
      question: 'ダマ（塊）を防ぐにはどうすればいいですか？',
      answer: 'ルーと液体の「温度差」をつけるのが鉄則です。熱いルーには冷たい液体を、または冷たいルーには熱い液体を合わせます。液体を少しずつ加え、泡立て器で常に混ぜ続けてください。',
    },
  ];
const howTo = [
  {
    name: '液体の種類を選択',
    text: '牛乳（ベシャメル）、白いだし（ベルーテ）、茶色いだし（エスパニョール）、またはトマトから選びます。',
  },
  {
    name: '希望の濃度を決める',
    text: 'スープやクリームから、コロッケの種（生地）まで。計算機が必要なルーの比率を自動的に調整します。',
  },
  {
    name: '液体の量を入力',
    text: 'とろみをつけたい液体の量をml単位で指定します。計算機が正確なバターと小麦粉の使用量を示します。',
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
  slug: 'roux-ratio-calculator-thickening-sauce-guide',
  title,
  description,
  faqTitle: 'よくある質問',
  faq,  howTo,
  seo: [
    {
      type: 'title',
      text: 'ルーと基本ソース計算のマスターガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>ルー</strong>は古典的なフランス料理の骨組みとなるベースです。小麦粉、バター、液体の関係を理解することが、滑らかなソースと、ダマができたり粉っぽさが残ったりするソースの分かれ道となります。',
    },
  ],
  ui: {
    baseLiquid: 'ベースとなる液体',
    volume: '量',
    ml: 'ml',
    liquidType: '液体の種類',
    milk: '牛乳',
    lightStock: '白いだし',
    darkStock: '茶色いだし',
    tomato: 'トマト',
    sauceTexture: 'ソースの濃度',
    soup: 'スープ / クリーム',
    normalSauce: '通常のソース',
    thick: '濃いめ / フィリング',
    croquette: 'コロッケ / 生地',
    rouxMix: 'ルーの配合',
    butter: 'バター',
    flour: '小麦粉',
    instructions: '作り方',
    sauceName: 'ソースの種類',
    ratio: '比率',
    chefTip: 'シェフのコツ',
    white: 'ホワイト',
    blond: 'ブロンド',
    brown: 'ブラウン',
    beurreManied: 'ブール・マニエ（仕上げの調整用）',
    recipeBechamel: "ベシャメル",
    recipeVeloute: "ベルーテ",
    recipeEspagnole: "エスパニョール",
    recipeTomato: "トマトソース",
    tipBechamel: "冷たい牛乳を使用してください。最初は少しずつ加え、ダマにならないようによく混ぜます。",
    tipVeloute: "鶏や魚のだしを使用します。ルーがクッキーのような香ばしい匂いになるまで炒めます。",
    tipEspagnole: "焦がさないように注意しながら、チョコレート色になるまでルーを炒めます。",
    tipTomato: "ルーを加えることで、トマトソースにコクとなめらかな質感を与えます。",
    rouxWhiteLabel: "ホワイトルー",
    rouxBlondLabel: "ブロンドルー",
    rouxBrownLabel: "ブラウンルー",
    descWhite: "粉っぽさがなくなるまで炒めます。色はつけません。",
    descBlond: "薄い金色になり、ナッツのような香りがするまで炒めます。",
    descBrown: "ごく弱火で炒めます。チョコレート色。通常より10%多めの分量が必要です。",
    timeWhite: "2〜3 分",
    timeBlond: "5〜8 分",
    timeBrown: "15〜20 分",
  },
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
