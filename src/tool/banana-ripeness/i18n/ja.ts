import type { ToolLocaleContent } from '../../../types';

const title = "バナナの診断と保存：科学的ガイド";
const description = "バナナの熟成状態を科学的な精度で分析します。保存方法、エチレンの生化学、そして栄養の最適化について学びましょう。";
const faq = [
  {
    question: "なぜバナナは冷蔵庫に入れると黒くなるのですか？",
    answer: "寒さによって皮の細胞壁が壊れ、フェノールを酸化させて黒いポリフェノールを作る酵素が放出されるためです。しかし、果肉自体は常温よりも長く固さと甘さを保つことができます。",
  },
  {
    question: "バナナを早く熟成させるにはどうすればいいですか？",
    answer: "リンゴやトマトと一緒に紙袋に入れて密閉してください。これらはエチレンガスを放出し、熟成を促進します。急いでいる場合は、低温のオーブンに数分間入れる方法もあります。",
  },
  {
    question: "斑点（シュガースポット）のあるバナナを食べても大丈夫ですか？",
    answer: "はい、全く問題ありません。むしろ、斑点はデンプンが糖に変わった証拠であり、より甘く消化に良くなっています。カビが生えていたり、異臭がしたり、極端に柔らかすぎる場合のみ破棄してください。",
  },
  {
    question: "エチレンとは何ですか？",
    answer: "成長と熟成を調節するガス状の植物ホルモンです。バナナはクライマクテリック型の果物であり、収穫後もエチレンを放出し続け、熟成が進みます。",
  },
];
const howTo = [
  {
    name: "色を観察する",
    text: "緑から濃い茶色まで、皮の色を注意深く観察して、現在の熟成状態を判断します。",
  },
  {
    name: "シミュレーターを使う",
    text: "熟成インジケーターをスライドさせて、次の段階にいつ到達するか正確な予測を確認します。",
  },
  {
    name: "条件を調整する",
    text: "温度と湿度を変更して、熟成速度にどのような影響を与えるか確認します。",
  },
  {
    name: "保存方法を適用する",
    text: "現在の状態に基づいた、具体的な保存や熟成促進の推奨事項に従います。",
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
  slug: 'banana-ripeness',
  title: "バナナの診断と保存：科学的ガイド",
  description: "バナナの熟成状態を科学的な精度で分析します。保存方法、エチレンの生化学、そして栄養の最適化について学びましょう。",
  faqTitle: "よくある質問",
  bibliographyTitle: "出典と参考文献",
  ui: {
    ripesnessLabel: "熟成状態",
    nextStageLabel: "次の段階まで",
    daysUnit: "日",
    tempLabel: "温度",
    humidityLabel: "湿度",
    partnerToggleTitle: "熟成促進パートナー",
    partnerToggleSubtitle: "外部エチレン効果",
    conservationTitle: "保存方法",
    accelerationTitle: "熟成促進",
    stage1Name: "エメラルドグリーン",
    stage1Desc: "難消化性デンプンが最大。非常に硬い状態。",
    stage1Conservation: "常温（18-20°C）。冷気（<12°C）を避ける。",
    stage1Acceleration: "リンゴや熟したトマトと一緒に紙袋に入れる。",
    stage2Name: "ラディアントイエロー",
    stage2Desc: "硬さと甘みが始まり出す完璧なバランス。",
    stage2Conservation: "涼しい場所。房から離してエチレンの放出を抑える。",
    stage2Acceleration: "房のままプラスチックで包む。",
    stage3Name: "スイートスポット（斑点）",
    stage3Desc: "抗酸化物質のピーク。濃厚な甘みとクリーミーな食感。",
    stage3Conservation: "冷蔵して果肉を保護する（皮は黒くなります）。",
    stage3Acceleration: "穏やかな熱（熱源の近く。直接は避ける）。",
    stage4Name: "シナモンブラウン",
    stage4Desc: "非常に柔らかい質感。砂糖不使用のお菓子作りに最適。",
    stage4Conservation: "皮をむいて、すぐに冷凍する。",
    stage4Acceleration: "すでに最大熟成に達しています。",
    stage5Name: "過熟 / 発酵",
    stage5Desc: "劣化が進んだプロセス。",
    stage5Conservation: "直接の食用には適しません。",
    stage5Acceleration: "N/A",
  },
  faq: [
    {
      question: "なぜバナナは冷蔵庫に入れると黒くなるのですか？",
      answer: "寒さによって皮の細胞壁が壊れ、フェノールを酸化させて黒いポリフェノールを作る酵素が放出されるためです。しかし、果肉自体は常温よりも長く固さと甘さを保つことができます。",
    },
    {
      question: "バナナを早く熟成させるにはどうすればいいですか？",
      answer: "リンゴやトマトと一緒に紙袋に入れて密閉してください。これらはエチレンガスを放出し、熟成を促進します。急いでいる場合は、低温のオーブンに数分間入れる方法もあります。",
    },
    {
      question: "斑点（シュガースポット）のあるバナナを食べても大丈夫ですか？",
      answer: "はい、全く問題ありません。むしろ、斑点はデンプンが糖に変わった証拠であり、より甘く消化に良くなっています。カビが生えていたり、異臭がしたり、極端に柔らかすぎる場合のみ破棄してください。",
    },
    {
      question: "エチレンとは何ですか？",
      answer: "成長と熟成を調節するガス状の植物ホルモンです。バナナはクライマクテリック型の果物であり、収穫後もエチレンを放出し続け、熟成が進みます。",
    },
  ],
  howTo: [
    {
      name: "色を観察する",
      text: "緑から濃い茶色まで、皮の色を注意深く観察して、現在の熟成状態を判断します。",
    },
    {
      name: "シミュレーターを使う",
      text: "熟成インジケーターをスライドさせて、次の段階にいつ到達するか正確な予測を確認します。",
    },
    {
      name: "条件を調整する",
      text: "温度と湿度を変更して、熟成速度にどのような影響を与えるか確認します。",
    },
    {
      name: "保存方法を適用する",
      text: "現在の状態に基づいた、具体的な保存や熟成促進の推奨事項に従います。",
    },
  ],
  bibliography: [
    {
      name: 'Ethylene and Fruit Ripening: A Biological Review',
      url: '',
    },
    {
      name: 'Biochemical Changes in Musa acuminata during Ripening (Journal of Food Science)',
      url: 'https://www.foodsciencejournal.com/assets/archives/2017/vol2issue5/2-5-31-566.pdf',
    },
    {
      name: 'The Role of Respiration in Climacteric Fruits (Scientific American)',
      url: 'https://www.nature.com/articles/226976b0',
    },
  ],
  seo: [
    {
      type: 'title',
      text: "バナナ（Musa × paradisiaca）熟成の科学",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "バナナは世界で最も消費されている果物の一つですが、生物学的に最も誤解されているものの一つでもあります。柑橘類やブドウのような非クライマクテリック型の果物とは異なり、バナナは<strong>クライマクテリック型の果物</strong>です。これは、収穫後も熟成を続け、細胞呼吸と重要なガス状植物ホルモンである<strong>エチレン</strong>の生成を劇的に増加させることを意味します。",
    },
    {
      type: 'paragraph',
      html: "生化学的な観点から見ると、熟成は酵素による一連の反応です。このプロセス中にアミラーゼなどの酵素が複合炭水化物（デンプン）を単純な糖（果糖、ブドウ糖、ショ糖）に分解します。この変化は味を甘くするだけでなく、細胞壁のペクチンを分解することでテクスチャーを変化させ、熟したバナナ特有の柔らかくクリーミーな一貫性を生み出します。",
    },
    {
      type: 'title',
      text: "エチレンサイクル",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "エチレンは生物学的なスイッチとして機能します。果物がわずかな濃度を感知すると、さらに多くのエチレンを生成する責任のある遺伝子を活性化し、正のフィードバックループを作成します。これが、非常に熟したバナナがフルーツバスケット内のすべての隣人の熟成を加速させる理由です。このプロセスを遅らせるには、すでに茶色の斑点があるものをまだ緑色のものから隔離することが不可欠です。",
    },
    {
      type: 'title',
      text: "冷蔵庫の神話",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "バナナは冷蔵庫に入れてはいけないという一般的な迷信があります。現実はより複雑です。低温（12°C未満）は皮の細胞に低温障害を引き起こし、フェノールを酸化させて皮を黒くする酵素を放出させます。しかし、これは外観の美しさに影響するだけです。中身がすでに希望の熟度に達している場合、冷気は果肉の軟化をほぼ完全に停止させ、味と食感を追加で数日間維持します。",
    },
    {
      type: 'title',
      text: "高度な保存方法",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "<strong>茎のシーリング:</strong> 房の付け根をラップで包むことで、エチレンの放出が劇的に減少し、バナナの商用賞味期限を最大72時間延長できます。",
    },
    {
      type: 'paragraph',
      html: "<strong>吊り下げ保存:</strong> バナナを吊るすことで、自重による圧迫傷を防ぎます。損傷した組織はエチレンをより早く放出し、熟成を加速させるポイントとなりますが、吊るすことでこれを防ぎ、房全体で均一な状態を保てます。",
    },
    {
      type: 'paragraph',
      html: "<strong>クライオセラピー（冷凍）:</strong> ステージ4（茶色）のバナナには、冷凍が最適です。冷凍前に皮をむくことで水分が閉じ込められるのを防ぎ、繊維の質を維持できます。",
    },
    {
      type: 'title',
      text: "段階ごとの栄養変化",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "バナナが熟すにつれて栄養プロファイルは劇的に変化し、消費者の目標に応じた特定の食事ツールとして使用することができます。",
    },
    {
      type: 'table',
      headers: ["段階", "難消化性デンプン", "特徴", "主なメリット"],
      rows: [
        ["緑 (1-2)", "~80%", "非常に硬い。デンプン含有量が最大", "腸の健康と血糖コントロール"],
        ["黄色 (3)", "~5%", "硬さと甘みのバランス", "素早いエネルギー補給とビタミンB群"],
        ["斑点 (4)", "最小", "非常に柔らかい。糖分が高い", "抗酸化能力が最大"],
        ["茶色/過熟 (5)", "ほぼゼロ", "非常に柔らかい質感。発酵が進んでいる", "食用には推奨されません"],
      ],
    },
    {
      type: 'title',
      text: "結論と実践的な活用",
      level: 2,
    },
    {
      type: 'list',
      items: [
        "<strong>食品廃棄の削減:</strong> バナナの状態を正確に診断することで、最適な消費タイミングを特定し、貴重な果物の損失を防ぐことができます。",
        "<strong>栄養上のメリットの最適化:</strong> 腸の健康のための青いバナナの難消化性デンプンから、抗酸化能力を最大化するための斑点バナナの抗酸化物質まで。",
        "<strong>戦略的な摂取計画:</strong> 血糖コントロール、素早いエネルギー、消化、抗酸化など、健康目標に合わせてバナナの使い分けをしましょう。",
      ],
    },
    {
      type: 'tip',
      html: "<strong>劣化アラート:</strong> 相対湿度が85%を超えたり、温度が25°Cを超えたりするなどの外部要因は、劣化を劇的に加速させ、バナナを数時間で最適な状態から食用不可能な状態に変えてしまう可能性があります。このシミュレーターは、これらの変化を予測し、戦略的に計画を立てるのに役立ちます。",
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
