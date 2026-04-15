import type { ToolLocaleContent } from '../../../types';

const title = "アメリカン・キッチン・コンバーター：カップからグラム、温度への換算";
const description = "アメリカのカップ、大さじ、ファーレンハイト（華氏）をメートル法に換算します。アメリカのレシピをプロの精度で読み解くためのツールです。";
const faq = [
  {
    question: "1カップと250mlの違いは何ですか？",
    answer: "アメリカの1カップは236.588mlであり、250mlではありません。実用上は240mlとして計算します。わずか4%の差に思えますが、マカロンやムースのような繊細なレシピでは大きな影響を与える可能性があります。",
  },
  {
    question: "なぜ小麦粉の重さはいつも同じではないのですか？",
    answer: "小麦粉は時間の経過や輸送中に圧縮されるためです。ふるいたての小麦粉は、棚に置いてあったものより軽くなります。そのため、プロの料理人は体積ではなく、常に重さを量ります。",
  },
  {
    question: "Tbspとtspの違いは何ですか？",
    answer: "1 Tablespoon（大さじ）= 15ml、1 Teaspoon（小さじ）= 5mlです。大さじは小さじの3倍です。製菓レシピでは、小さじで量るスパイスの誤差が失敗の原因になることがよくあります。",
  },
  {
    question: "USカップと英国のインペリアルカップは同じですか？",
    answer: "いいえ。アメリカの1カップは236mlですが、英国の1カップは284mlです。20%もの差があります。多くのアメリカのブログはUSカップを使用しています。特に指示がない場合は、USカップだと考えてください。",
  },
  {
    question: "オーブンの「ガス4」は何度に相当しますか？",
    answer: "ガス4 = 180°C = 350°Fです。これはイギリスの目盛りです。お使いのオーブンの仕様を確認して、最適な設定に調整してください。",
  },
];
const howTo = [
  {
    name: "換算の種類を選択する",
    text: "カップからグラム、大さじ・小さじからグラム、華氏から摂氏の中から選択します。",
  },
  {
    name: "材料を選ぶ",
    text: "材料ごとに密度が異なります。小麦粉、砂糖、バターなど、それぞれの密度に合わせて換算します。",
  },
  {
    name: "分量を入力する",
    text: "カップ数、スプーン数、または温度を入力します。コンバーターが瞬時に値を算出します。",
  },
  {
    name: "レシピを調整する",
    text: "正確な換算値を使用して、アメリカのレシピをプロの精度で再現しましょう。",
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
  slug: 'us-cooking-conversion-calculator-cups-to-grams-fahrenheit',
  title: "アメリカン・キッチン・コンバーター：カップからグラム、温度への換算",
  description: "アメリカのカップ、大さじ、ファーレンハイト（華氏）をメートル法に換算します。アメリカのレシピをプロの精度で読み解くためのツールです。",
  faqTitle: "よくある質問",
  bibliographyTitle: "参考資料",
  ui: {
    copied: "コピーしました",
    noHistory: "履歴なし",
    load: "読み込み",
    delete: "削除",
    tabCups: "カップからグラム",
    tabSpoons: "スプーンからグラム",
    tabTemperatures: "温度",
    tabCupsAriaLabel: "カップからグラム換算",
    tabSpoonsAriaLabel: "スプーンからグラム換算",
    tabTempsAriaLabel: "オーブン温度換算",
    stepSelectIngredient: "材料を選択",
    stepHowManyCups: "何カップですか？",
    stepSelectMeasure: "単位を選択",
    stepQuantity: "分量",
    stepOvenConversion: "温度換算",
    stepFrequentTemps: "よく使われるオーブン温度",
    cupFlour: "小麦粉",
    cupFlourSub: "120g / カップ",
    cupWhiteSugar: "白砂糖",
    cupWhiteSugarSub: "200g / カップ",
    cupBrownSugar: "ブラウンシュガー",
    cupBrownSugarSub: "220g / カップ",
    cupPowderSugar: "粉砂糖",
    cupPowderSugarSub: "115g / カップ",
    cupButter: "バター",
    cupButterSub: "227g / カップ",
    cupCocoa: "ココアパウダー",
    cupCocoaSub: "85g / カップ",
    cupLiquids: "液体",
    cupLiquidsSub: "240g / カップ",
    cupOats: "オートミール",
    cupOatsSub: "90g / カップ",
    cupFlourAriaLabel: "小麦粉",
    cupWhiteSugarAriaLabel: "白砂糖",
    cupBrownSugarAriaLabel: "ブラウンシュガー",
    cupPowderSugarAriaLabel: "粉砂糖",
    cupButterAriaLabel: "バター",
    cupCocoaAriaLabel: "ココア",
    cupLiquidsAriaLabel: "液体",
    cupOatsAriaLabel: "オートミール",
    stepperMinus: "減らす",
    stepperPlus: "増やす",
    cupsAmountLabel: "カップ数",
    spoonQuantityLabel: "分量",
    cupQuick1_4: "1/4 カップ",
    cupQuick1_3: "1/3 カップ",
    cupQuick1_2: "1/2 カップ",
    cupQuick1: "1 カップ",
    unitGrams: "グラム",
    unitGramsML: "グラム / ミリリットル",
    spoonMeasureLabel: "単位を選択",
    spoonTablespoon: "大さじ (Tbsp)",
    spoonTeaspoon: "小さじ (tsp)",
    spoonTablespoonAriaLabel: "大さじ",
    spoonTeaspoonAriaLabel: "小さじ",
    spoonSelectIngredient: "材料を選択",
    spoonLeavening: "膨らし粉",
    spoonLeaveningSub: "ベーキングパウダー",
    spoonSalt: "食塩",
    spoonSaltSub: "精製塩",
    spoonSugar: "白砂糖",
    spoonSugarSub: "グラニュー糖",
    spoonLiquids: "液体",
    spoonLiquidsSub: "水、油",
    spoonLeavingAriaLabel: "膨らし粉",
    spoonSaltAriaLabel: "塩",
    spoonSugarAriaLabel: "白砂糖",
    spoonLiquidsAriaLabel: "液体",
    spoonQuick1_4: "1/4",
    spoonQuick1_2: "1/2",
    spoonQuick1: "1",
    spoonQuick2: "2",
    tempFahrenheit: "ファーレンハイト (華氏)",
    tempCelsius: "摂氏 (°C)",
    tempFahrenheitAriaLabel: "華氏",
    tempCelsiusAriaLabel: "摂氏",
    tempPreset275: "275°F",
    tempPreset275Desc: "135°C - 乾燥用",
    tempPreset275AriaLabel: "華氏275度に設定",
    tempPreset325: "325°F",
    tempPreset325Desc: "165°C - 密度の高いケーキ",
    tempPreset325AriaLabel: "華氏325度に設定",
    tempPreset350: "350°F",
    tempPreset350Desc: "175°C - スイーツ標準",
    tempPreset350AriaLabel: "華氏350度に設定",
    tempPreset400: "400°F",
    tempPreset400Desc: "200°C - パン / タルト",
    tempPreset400AriaLabel: "華氏400度に設定",
    tempPreset425: "425°F",
    tempPreset425Desc: "220°C - ピザ / パイ生地",
    tempPreset425AriaLabel: "華氏425度に設定",
  },
  seo: [
    {
      type: 'title',
      text: "アメリカの計量単位換算マスターガイド",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "<strong>カップからグラム</strong>、または<strong>華氏から摂氏</strong>への換算は、海外のレシピをマスターするための第一歩です。アメリカの料理は体積（ボリューム）ベースであるため、小麦粉などの乾燥材料では最大25%の誤差が生じることがあります。",
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: "120g",
          label: "小麦粉 1カップ",
          icon: "mdi:grain",
        },
        {
          value: "227g",
          label: "バター 1スティック",
          icon: "mdi:cube-outline",
        },
        {
          value: "175°C",
          label: "華氏350度相当",
          icon: "mdi:thermometer",
        },
        {
          value: "240ml",
          label: "1カップの容量",
          icon: "mdi:water-percent",
        },
      ],
    },
    {
      type: 'title',
      text: "体積と重量の決定的な違い",
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: "体積による計量 (カップ)",
          icon: "mdi:cup-water",
          description: "アメリカの家庭用レシピで一般的。材料が占める空間を量ります。",
          points: [
            "材料の詰まり具合に大きく左右される",
            "小麦粉では20〜30%の誤差が一般的",
            "カップのブランドによって容量が異なる場合がある",
            "精度を高めるには、計量前にふるう必要がある",
          ],
        },
        {
          title: "重量による計量 (グラム)",
          icon: "mdi:scale-balance",
          description: "プロの製菓やヨーロッパの標準。絶対的な精度を提供します。",
          highlight: true,
          points: [
            "常に +/- 1g の精度",
            "一貫性があり、再現性の高い結果",
            "洗い物が少ない（ボウル1つで済む）",
            "数学的な倍量計算が容易",
          ],
        },
      ],
    },
    {
      type: 'title',
      text: "一般的な材料の換算基準",
      level: 3,
    },
    {
      type: 'table',
      headers: ["材料", "1カップ (体積)", "グラム (重量)", "密度"],
      rows: [
        ["小麦粉", "1カップ", "120g", "低"],
        ["白砂糖", "1カップ", "200g", "中"],
        ["ブラウンシュガー", "1カップ", "220g (詰め込んだ場合)", "高"],
        ["バター", "1カップ (2スティック)", "227g", "高"],
        ["ココアパウダー", "1カップ", "85g", "極低"],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: "ケーキがパサパサになっていませんか？",
      html: "カップを使う際によくある失敗は、小麦粉の袋に「直接カップを突っ込んで」すくうことです。これにより粉が圧縮され、1カップあたり最大40gも多くの小麦粉を入れてしまうことがあります。解決策は、当ツールの計算機を使用して<strong>常にグラムに換算すること</strong>です。",
    },
    {
      type: "title",
      text: "アメリカ独自の単位用語集",
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: "Cup（カップ）",
          definition: "約240mlに相当する体積単位。アメリカ料理の基本単位です。",
        },
        {
          term: "Tbsp（大さじ）",
          definition: "大さじ1杯。15mlまたは小さじ3杯に相当します。",
        },
        {
          term: "tsp（小さじ）",
          definition: "小さじ1杯。5mlに相当。塩やベーキングパウダーの計量に不可解です。",
        },
        {
          term: "Stick of Butter（バタースティック）",
          definition: "アメリカのバターの一般的な形状。1つで113.5g（1/2カップ）です。",
        },
      ],
    },
    {
      type: 'tip',
      title: "スプーンを使うコツ",
      html: "はかりがなく、どうしてもカップを使わなければならない場合は、粉を押し込まずにスプーンでふんわりとカップに入れ、ナイフの背などで平らにならしてください。直接すくうよりもはるかに正確です。",
    },
    {
      type: 'paragraph',
      html: "プロ仕様のコンバーターを使用することで、海外レシピの不安が完璧な仕上がりの喜びに変わります。",
    },
  ],
  faq: [
    {
      question: "1カップと250mlの違いは何ですか？",
      answer: "アメリカの1カップは236.588mlであり、250mlではありません。実用上は240mlとして計算します。わずか4%の差に思えますが、マカロンやムースのような繊細なレシピでは大きな影響を与える可能性があります。",
    },
    {
      question: "なぜ小麦粉の重さはいつも同じではないのですか？",
      answer: "小麦粉は時間の経過や輸送中に圧縮されるためです。ふるいたての小麦粉は、棚に置いてあったものより軽くなります。そのため、プロの料理人は体積ではなく、常に重さを量ります。",
    },
    {
      question: "Tbspとtspの違いは何ですか？",
      answer: "1 Tablespoon（大さじ）= 15ml、1 Teaspoon（小さじ）= 5mlです。大さじは小さじの3倍です。製菓レシピでは、小さじで量るスパイスの誤差が失敗の原因になることがよくあります。",
    },
    {
      question: "USカップと英国のインペリアルカップは同じですか？",
      answer: "いいえ。アメリカの1カップは236mlですが、英国の1カップは284mlです。20%もの差があります。多くのアメリカのブログはUSカップを使用しています。特に指示がない場合は、USカップだと考えてください。",
    },
    {
      question: "オーブンの「ガス4」は何度に相当しますか？",
      answer: "ガス4 = 180°C = 350°Fです。これはイギリスの目盛りです。お使いのオーブンの仕様を確認して、最適な設定に調整してください。",
    },
  ],
  bibliography: [
    {
      name: 'King Arthur Baking: Ingredient Weight Chart',
      url: 'https://www.kingarthurbaking.com/learn/ingredient-weight-chart',
    },
    {
      name: 'Culinary Institute of America: Conversions and Equivalents',
      url: 'https://www.ciachef.edu/',
    },
  ],
  howTo: [
    {
      name: "換算の種類を選択する",
      text: "カップからグラム、大さじ・小さじからグラム、華氏から摂氏の中から選択します。",
    },
    {
      name: "材料を選ぶ",
      text: "材料ごとに密度が異なります。小麦粉、砂糖、バターなど、それぞれの密度に合わせて換算します。",
    },
    {
      name: "分量を入力する",
      text: "カップ数、スプーン数、または温度を入力します。コンバーターが瞬時に値を算出します。",
    },
    {
      name: "レシピを調整する",
      text: "正確な換算値を使用して、アメリカのレシピをプロの精度で再現しましょう。",
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
