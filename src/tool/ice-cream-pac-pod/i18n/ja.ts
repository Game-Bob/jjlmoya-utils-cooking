import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "アイスクリーム PAC POD 計算機 低温製法ガイド";
const description = "アイスクリームの抗凍結力と甘味力を計算します。正確な糖プロファイル、固形分率、提供温度を設計します。";
const faq = [
  {
    question: "アイスクリームの配合におけるPACとは何ですか？",
    answer: "PACはPotere Anticongelanteの略で、抗凍結力を表します。これは、特定の提供温度でどれだけの水分が凍結したままかを決定し、アイスクリームの物理的な硬さを制御します。"
  },
  {
    question: "PODとは何ですか？なぜ重要なのですか？",
    answer: "PODはPotere Dolcificanteの略で、相対的な甘味力を表します。基準値100を持つショ糖（砂糖）に対する甘さを測定します。"
  },
  {
    question: "アイスクリームで複数の糖をバランスするのはなぜですか？",
    answer: "異なる糖は独自のPACおよびPOD特性を持ちます。例えば、ブドウ糖は適度な甘さで高い抗凍結力を提供し、ショ糖は標準的なボディと甘さを提供します。これらを混合することで、製品を過度に甘くすることなくクリーミーさを制御できます。"
  },
  {
    question: "アイスクリームの最適な固形分率は？",
    answer: "総固形分率は通常36%から42%の範囲です。この範囲を下回る固形分率は氷のような食感につながり、上回るとざらつきや重い口当たりの原因となります。"
  }
];

const howTo = [
  {
    name: "ベースミックスと提供温度の設定",
    text: "ベース液状ミックスの重量を定義し、アイスクリームを提供する予定の目標提供温度を入力します。"
  },
  {
    name: "糖の量を入力",
    text: "ショ糖、ブドウ糖、ブドウ糖、転化糖、トレハロースなどの異なる糖のスライダーを調整してレシピを構築します。"
  },
  {
    name: "PACとPODの値を分析",
    text: "計算されたPAC値とPOD値を、目標温度に対して推奨される目標値と比較します。"
  },
  {
    name: "固形分比率とすくいやすさを確認",
    text: "総固形分率が最適ゾーン内にあることを確認し、すくいやすさインジケーターをチェックして最終的な食感を予測します。"
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
  slug: 'ice-cream-pac-pod',
  title: 'アイスクリーム PAC POD 計算機',
  description: 'アイスクリームの抗凍結力と甘味力を計算します。正確な糖プロファイル、固形分率、提供温度を設計します。',
  faqTitle: 'よくある質問',
  ui: {
    title: "アイスクリーム低温計算機",
    subtitle: "分子ガストロノミーのための精密低温配合ダッシュボード",
    unitLabel: "単位系",
    metricUnit: "メートル法（グラム）",
    imperialUnit: "ヤードポンド法（オンス）",
    baseWeightLabel: "ベースミックス重量",
    targetTempLabel: "提供温度",
    sucroseLabel: "ショ糖",
    dextroseLabel: "ブドウ糖",
    glucoseLabel: "グルコース DE40",
    invertedLabel: "転化糖",
    trehaloseLabel: "トレハロース",
    pacLabel: "抗凍結力（PAC）",
    podLabel: "甘味力（POD）",
    solidsLabel: "総固形分",
    targetPacLabel: "目標PAC",
    scoopabilityLabel: "すくいやすさ状態",
    stoneState: "石のように硬い",
    creamyState: "完璧なクリーミーさ",
    soupState: "溶けるスープ",
    stoneDesc: "抗凍結力がこの温度に対して低すぎます。ミックスが石のように凍結します。",
    creamyDesc: "PACのバランスが最適です。アイスクリームはすくいやすくクリーミーになります。",
    soupDesc: "抗凍結力が高すぎます。アイスクリームはすぐに溶けて液体のままになります。",
    gLabel: "g",
    ozLabel: "oz",
    cLabel: "C",
    fLabel: "F",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'アイスクリーム低温配合の科学原理とガラス転移相制御',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'アイスクリームは、気泡、脂肪球、氷結晶、および非凍結濃縮血清相からなる複雑な多相熱力学エマルジョンです。完璧なクリーミーさとすくいやすさを達成するには、ミックス内の水の凝固点降下を注意深く制御する必要があります。温度が氷点下に下がると、水は氷に結晶化し始めます。残りの液体血清中の溶解溶質の濃度が上昇し、さらにその凝固点を低下させます。凍結した氷結晶と非凍結シロップ相のバランスが、最終製品の硬さと滑らかさを決定します。',
    },
    {
      type: 'title',
      text: 'PACの理解：抗凍結力と降下の数学',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC（Potere Anticongelante）は、ショ糖に対する溶質の抗凍結力を表します。ショ糖はPAC値100の参照基準として指定されています。そのメカニズムは束一的性質によって支配されており、凝固点降下は溶質の質量ではなく、水に溶解した活性分子の数に依存します。ブドウ糖（分子量180 g/mol）のような単糖類は、ショ糖（分子量342 g/mol）のような二糖類よりも1グラムあたり約2倍の分子を提供し、PAC 190をもたらします。高いPAC値は、所定の温度でより多くの水が液体のままであることを意味し、アイスクリームが石のように凍結するのを防ぎます。',
    },
    {
      type: 'title',
      text: 'PODの理解：甘味力と感覚バランス',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'POD（Potere Dolcificante）は、ショ糖（基準値100）と比較した相対的な甘さを測定する指標です。高品質のアイスクリームやジェラートを配合する際、甘さのバランスは構造的堅牢性と同じくらい重要です。配合者が凝固点を下げる（PACを上げる）ためにショ糖のみを使用すると、アイスクリームは望ましい柔らかさに達する前に胸やけするほど甘くなります。この制限を回避するために、分子ガストロノミーではブドウ糖（POD 70）、トレハロース（POD 45）、または微粒化グルコースDE40（POD 40）などの糖を利用します。これらは味覚を圧倒することなく凍結曲線のカスタム設定を可能にします。',
    },
    {
      type: 'title',
      text: '一般的な低温配合糖類の比較データベース',
      level: 3,
    },
    {
      type: 'table',
      headers: ['糖の種類', '相対PAC', '相対POD', '固形分含有率（%）', '料理上の用途'],
      rows: [
        ['ショ糖', '100', '100', '100%', '標準的なボディ、すっきりとした甘味プロファイル、標準ベース'],
        ['ブドウ糖', '190', '70', '100%', '凝固点を下げる、柔らかさを増す、甘さを抑える'],
        ['グルコース DE40', '90', '40', '95%', 'ボディを追加、再結晶化を防ぐ、粘度を高める'],
        ['転化糖', '190', '130', '70%', '柔らかさを追加、保湿特性、フルーツ風味を強化'],
        ['トレハロース', '100', '45', '90%', '低甘味ボディ剤、タンパク質保護、すっきりとした後味'],
      ],
    },
    {
      type: 'title',
      text: '総固形分比率と構造的エマルジョン安定性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '総固形分には、脂肪、無脂乳固形分、安定剤、乳化剤、糖など、配合中のすべての非水分要素が含まれます。最適なアイスクリームミックスは36%から42%の総固形分を保持します。固形分が低すぎると、高い水分含有量が大きな氷結晶の成長と粗いテクスチャーにつながります。固形分が高すぎると、粘度が過度に上昇し、重い口当たりと乳糖結晶化による潜在的なざらつきが生じます。',
    },
    {
      type: 'title',
      text: '低温配合成功のための実践的ステップ',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '陳列ケースの目標提供温度を決定します。ジェラートは通常マイナス12℃で提供され、工業用アイスクリームはマイナス18℃でより冷たく提供されます。',
        '標準温度式を使用して目標PACを計算します。マイナス12℃の場合、目標PACは約216です。',
        '糖のブレンドを選択します。標準的な甘さにはショ糖、凝固点を下げるにはブドウ糖、ボディと食感を向上させるにはグルコースを組み合わせます。',
        '最適なエアレーションと舌の上での滑らかな溶融プロファイルを確保するために、総固形分が安全な36%から42%の範囲内にあることを確認します。'
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
