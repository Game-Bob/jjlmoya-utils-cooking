import type { ToolLocaleContent } from '../../../types';

const title = '材料スケーラー レシピ分量調整';
const description = '人数（人前）に合わせてレシピの分量を自動的にスケール調整します。レシピを倍増または縮小する際の正確な材料の分量を簡単に計算できます。';

const faq = [
  {
    question: '変換係数に小数点が含まれるのはなぜですか？',
    answer: '料理の比率は常にきれいな数字になるとは限らないからです。例えば4人用のレシピを7人用にスケールする場合、係数は正確に1.75となります。端数が出ることもありますが、その数字を掛けることで正確な分量を算出します。これは恣意的な四捨五入よりも正確です。',
  },
  {
    question: '「塩 小さじ1/2」と入力した場合はどうなりますか？',
    answer: 'ツールはまず数字を探します。「1」を数量として認識し、その後の「/2」を単位の一部として扱います。結果は「0.5」となり、正しくスケール計算されます。「1/2」のような分数の場合は、直接「0.5」と入力する方が分かりやすいですが、ツールは割り算として解釈することも可能です。',
  },
  {
    question: '最終的な結果を四捨五入すべきですか？',
    answer: '材料によります。小麦粉などは四捨五入しても良いでしょう。イーストやスパイスなどは、厳密さよりも感覚が重要になる場合があります（計算値の75%程度に抑えるのがコツです）。卵の場合、結果が2.3個となったら、2個丸ごと使い、残りの0.3は溶き卵にして重さで量るか、料理の内容に応じて2個に留めるなどの判断が必要です。',
  },
  {
    question: '人数を変えても結果が変わりません。なぜですか？',
    answer: '材料フィールドに内容が入力されているか確認してください。空の場合は計算の対象がありません。また、材料名の前に数字（例：「500g」「1/2 小さじ」）が正しく記載されているか確認してください。',
  },
  {
    question: 'ヤード・ポンド法（オンス、カップなど）でも使えますか？',
    answer: '技術的には可能です。ツールは数字を読み取ってスケール計算を行います。ただし、カップ（体積）は計測方法によって誤差が出やすいため、正確なスケーリングが必要な場合は事前にグラム（重量）に変換することをお勧めします。',
  },
];

const howTo = [
  {
    name: '分量を入力する',
    text: '「元（オリジナル）」の欄に、そのレシピが元々何人用であるかを入力します。「目標（欲しい分量）」の欄に、今回作りたい人数を入力します。',
  },
  {
    name: '材料リストを貼り付ける',
    text: 'お手持ちのリストをそのままコピー＆ペーストしてください。1行に1つの材料を記載します。ツールが先頭の数字（500g, 1/2, 2.5など）を認識し、自動で計算します。',
  },
  {
    name: '状況に合わせて微調整',
    text: '結果は数学的に正確ですが、料理は芸術です。スパイス類は計算値の75%程度にする、大規模な調理ではイーストを理論値より減らすなどの調整が有効です。なお、調理時間はスケールされません。',
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
  operatingSystem: 'All',
};

export const content: ToolLocaleContent = {
  slug: 'recipe-ingredient-scaler-converter-servings',
  title,
  description,
  ui: {
    servings: '人前（分量）',
    original: 'オリジナル',
    desired: '目標（作りたい分）',
    multiplyingFactor: '変換計数',
    ingredientsList: '材料リスト',
    pasteHere: 'ここにリストを貼り付けてください。',
    exampleLine1: '例：',
    exampleLine2: '500g 小麦粉',
    exampleLine3: '300ml 水',
    exampleLine4: '10g 塩',
    result: '計算結果',
    copy: 'コピー',
    copied: 'コピーしました！',
    emptyState: '調整された材料がここに表示されます...',
    defaultIngredient1: '200g 小麦粉',
    defaultIngredient2: '100ml 牛乳',
    defaultIngredient3: '2個 卵',
  },
  faqTitle: 'よくある質問',
  faq,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'Harold McGee - On Food and Cooking (料理の科学)',
      url: 'https://en.wikipedia.org/wiki/Harold_McGee',
    },
    {
      name: 'The Flavor Bible by Karen Page and Andrew Dornenburg',
      url: 'https://www.flavorprints.com/',
    },
    {
      name: 'Modernist Cuisine - 科学的スケーリング技術',
      url: 'https://www.modernistcuisine.com/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'レシピのスケーリングと変換：マスターガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>材料のスケーリング</strong>は、プロの現場において最も重要で、かつミスの起きやすい作業の一つです。単に数字を掛けるだけでなく、食材の化学的・物理的特性が体積や表面積の変化にどう反応するかを理解する必要があります。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: 'x1.75',
          label: '4人→7人倍率',
          icon: 'mdi:calculator',
        },
        {
          value: '75%',
          label: 'スパイスの調整',
          icon: 'mdi:shaker-outline',
        },
        {
          value: '0%',
          label: '時間のスケーリング',
          icon: 'mdi:timer-off',
        },
        {
          value: '100g',
          label: '基準重量',
          icon: 'mdi:weight-gram',
        },
      ],
    },
    {
      type: 'title',
      text: '線形スケーリングと文脈的スケーリングの違い',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '数学的な線形スケーリング',
          icon: 'mdi:math-log',
          description: '算出された変換係数をすべての材料にそのまま掛ける方法。',
          points: [
            '小麦粉やベースの水分に最適',
            '精密な製菓作業に理想的',
            '少量の変化 (x2, x0.5) で有効',
            '自動計算が容易',
          ],
        },
        {
          title: '料理における文脈的スケーリング',
          icon: 'mdi:chef-hat',
          description: '味の飽和度や蒸発率に基づいて比率を微調整する方法。',
          highlight: true,
          points: [
            '塩分や香辛料の過剰を防ぐ',
            '表面積による蒸発率を考慮する',
            '大量調理時のイースト菌を調整する',
            'シェフの経験と判断が必要',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '人数別の変換係数',
      level: 3,
    },
    {
      type: 'table',
      headers: ['現在の人数', '目標の人数', '係数 (FC)', '調整の難易度'],
      rows: [
        ['2人', '4人', 'x 2.0', '低 (線形)'],
        ['4人', '6人', 'x 1.5', '低 (線形)'],
        ['4人', '10人', 'x 2.5', '中 (香辛料に注意)'],
        ['4人', '25人', 'x 6.25', '高 (文脈的調整が必要)'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'レシピを倍にする際のよくある落とし穴',
      html: '倍量にした際に味が濃すぎると感じた場合（特に辛味や塩分）、それらの材料の増量を計算値の75%程度に留めてみてください。また、加熱時間は決して倍にしないでください。芯温は質量の総重量ではなく、食材の厚みによって決まるからです。',
    },
    {
      type: 'title',
      text: '標準化用語集',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: '変換係数 (Conversion Factor)',
          definition: 'すべての材料に掛ける数字。 目標量 ÷ オリジナル量 で算出されます。',
        },
        {
          term: '加熱損失 (Cooking Loss)',
          definition: '蒸発や脂の流出による重量減少。線形には変化しません。',
        },
        {
          term: '荒重量 vs 正味重量',
          definition: '材料を下処理する前と後の重量。常にオリジナルレシピの重量に基づきます。',
        },
        {
          term: '歩留まり (Yield)',
          definition: 'スケーリングと調理を終えた後の、最終的な製品の総量。',
        },
      ],
    },
    {
      type: 'tip',
      title: '溶き卵のテクニック',
      html: '計算で2.3個などとなった場合は、1個を溶き卵にして重さを量り、その30%分を使用してください。これが製菓において精度を保つ唯一の方法です。',
    },
    {
      type: 'paragraph',
      html: '当ツールは数学的な計算を簡素化し、あなたが最も重要な「創造性と味」にエネルギーを注げるようサポートします。',
    },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
