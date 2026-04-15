import type { ToolLocaleContent } from "../../../types";

const title = "平衡塩水計算機";
const description = "ジューシーな肉と完璧な発酵食品のための、バランスの科学。食材と水の総重量に基づいた正確な塩分濃度を計算します。";
const faq = [
  {
    question: "平衡塩水法（平衡ブライニング）とは何ですか？",
    answer: "平衡法とは、水の量だけでなく、総重量（水＋食材）に基づいて塩分を計算する方法です。これにより、食材の量に関わらず、常に一定の塩分濃度が保証されます。",
  },
  {
    question: "ピクルスを作るのにどれくらいの塩が必要ですか？",
    answer: "発酵野菜（きゅうり、ザワークラウト、キムチ）の場合、2%から3%の塩分が推奨されます。肉の場合は1.5%から2%です。この計算機は、食材の重量に応じて正確な量を算出します。",
  },
  {
    question: "塩水に浸けた後、肉を冷凍できますか？",
    answer: "はい、理想的です。塩水は冷凍焼けを防ぎ、解凍後すぐに調理できる状態になります。ただし、発酵野菜は冷凍すると食感が損なわれるため避けてください。",
  },
  {
    question: "なぜ塩水に砂糖を加えるのですか？",
    answer: "砂糖には2つの役割があります。肉のメイラード反応（焼き色）を促進することと、製品を甘くすることなく塩味のバランスを整えることです。デザートのように甘くなるわけではありません。",
  },
];
const howTo = [
  {
    name: "目的を決める",
    text: "肉の塩水漬け（1.5-2%）、発酵（2-3%）、ソース（3.5%）、長期保存（5%以上）など、目的に合わせて濃度を決めます。それぞれ期間と用途が異なります。",
  },
  {
    name: "食材と水を計量する",
    text: "食材（肉、野菜）と水を正確に計量します。5gの差でも結果が変わるため、精密な秤を使用することが重要です。",
  },
  {
    name: "ツールで計算する",
    text: "重量を計算機に入力し、製品の種類に合わせて塩分濃度を調整します。必要な塩と砂糖の正確な量が表示されます。",
  },
  {
    name: "溶かして混ぜる",
    text: "食材を入れる前に、塩を冷水に完全に溶かします。肉の場合は全体が浸かるようにし、発酵食品の場合は重石などで完全に沈めます。",
  },
  {
    name: "発酵・熟成させる",
    text: "用途に合わせて冷蔵保存します。肉は4〜48時間、発酵食品は1〜3週間が目安です。正確な期間は温度や好みによって調整してください。",
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
  slug: "brine",
  title: "平衡塩水計算機",
  description: "ジューシーな肉と完璧な発酵食品のための、バランスの科学。食材と水の総重量に基づいた正確な塩分濃度を計算します。",
  ui: {
    calculator: "計算機",
    subtitle: "重量を入力して、完璧なバランスを計算します。",
    productWeight: "食材の重量 (g)",
    waterWeight: "水の重量 (g)",
    desiredSalinity: "希望の塩分濃度",
    meat: "肉類 (1.5%)",
    fermented: "発酵食品 (2.0%)",
    sauces: "ソース類 (3.5%)",
    preserves: "保存食 (5.0%)",
    addSugar: "砂糖を加える",
    sugarHint: "味のバランスを整え、焼き色を助けます（塩の50%）",
    saltNeeded: "必要な塩",
    sugarOptional: "砂糖（オプション）",
    estimatedTime: "推定時間",
    product: "食材",
    total: "合計",
    unitGrams: "g",
    timeMeatsLabel: "期間（肉類）",
    timeMeatsDuration: "4 - 48 時間",
    timeVegetablesLabel: "期間（野菜類）",
    timeVegetablesDuration: "1 - 3 週間",
    timePreservesLabel: "期間（保存食）",
    timePreservesDuration: "1ヶ月以上",
  },
  faqTitle: "よくある質問",
  bibliographyTitle: "出典と参考文献",
  faq,
  howTo,
  bibliography: [
    {
      name: "The Noma Guide to Fermentation - René Redzepi & David Zilber",
      url: "https://www.nomacph.com/",
    },
    {
      name: "Salt, Fat, Acid, Heat - Samin Nosrat",
      url: "https://www.saltfatacidheat.com/",
    },
    {
      name: "Pollan, Michael - Cooked",
      url: "https://michaelpollan.com/",
    },
  ],
  seo: [
    {
      type: 'title',
      text: '平衡塩水と発酵のマスターガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>平衡塩水法</strong>は、ジューシーで安全な結果を保証するための究極のテクニックです。従来のレシピとは異なり、水と食材の<strong>総重量</strong>に基づいて塩分を計算するため、容器の大きさに関わらず一定の塩分濃度を保つことができます。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1.5 - 2%',
          label: '肉の理想比率',
          icon: 'mdi:food-steak',
        },
        {
          value: '2.5 - 3%',
          label: '発酵の比率',
          icon: 'mdi:flask-outline',
        },
        {
          value: '18-22°C',
          label: '発酵温度',
          icon: 'mdi:thermometer',
        },
        {
          value: '0.5%',
          label: '平衡砂糖量',
          icon: 'mdi:shaker-outline',
        },
      ],
    },
    {
      type: 'title',
      text: 'ドライ・ブライニングとウェット・ブライニングの違い',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'ドライ・ブライニング（乾式）',
          icon: 'mdi:shaker-outline',
          description: '水を使わず、食材の表面に直接塩を塗布する方法です。',
          points: [
            '鶏肉の皮が非常にパリッと仕上がる',
            '食材本来の味がより濃縮される',
            '冷蔵庫の場所を取らない',
            'ステーキや丸鶏のローストに最適',
          ],
        },
        {
          title: 'ウェット・ブライニング（湿式）',
          icon: 'mdi:water',
          description: '食材を、平衡法で計算された塩水に浸ける方法です。',
          highlight: true,
          points: [
            '水分保持力が格段に向上する',
            'スパイスなどの香りを移しやすい',
            '大きな塊肉でも均一に塩が回る',
            '七面鳥、豚ロース、魚に最適',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '用途別の期間と塩分濃度',
      level: 3,
    },
    {
      type: 'table',
      headers: ['カテゴリー', '塩分濃度 (%)', '最小期間', '主な目的'],
      rows: [
        ['鳥肉・豚肉', '1.5% - 2.0%', '12 - 24 時間', 'ジューシーさと柔らかさ'],
        ['白身魚', '1.0% - 1.5%', '20 - 45 分間', '身の引き締め'],
        ['乳酸発酵', '2.5% - 3.0%', '7 - 21 日間', '微生物学的安全性'],
        ['ソース・保存食', '3.5% - 5.0%', '1ヶ月以上', '長期保存'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '塩水漬けのトラブルシューティング',
      html: '塩水が悪臭（酸っぱい臭いではなく腐敗臭）を放ったり、色付きのカビ（黒、ピンク）が発生したり、食材が極端に柔らかくなった場合は、廃棄してください。表面の白い膜（産膜酵母）は発酵過程では正常であり、取り除くことができます。',
    },
    {
      type: 'title',
      text: '熟成・加工用語集',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: '浸透圧',
          definition: '濃度を均一にしようとして、塩分が食品の細胞内に浸透していく物理的なプロセス。',
        },
        {
          term: '変性',
          definition: '塩がタンパク質に作用し、調理中に水分をより多く保持できるようにする効果。',
        },
        {
          term: '産膜酵母（カーム・イースト）',
          definition: '発酵食品の表面に現れる薄い白い層。無害ですが、酸度が不足していることを示します。',
        },
        {
          term: '乳酸発酵',
          definition: 'バクテリアが糖分を乳酸に変え、食品を保存可能にする嫌気性発酵。',
        },
      ],
    },
    {
      type: 'tip',
      title: '水の質について',
      html: '塩素の多い水道水は、発酵に必要な善玉菌の増殖を妨げる可能性があるため避けましょう。ろ過した水を使用するか、水道水を24時間汲み置いてから使用してください。',
    },
    {
      type: 'paragraph',
      html: 'この平衡計算機を使えば、経験に頼ることなく、プロのような確信を持って料理を仕上げることができます。',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
