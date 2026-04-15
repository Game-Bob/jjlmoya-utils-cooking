import type { ToolLocaleContent } from '../../../types';

const title = "スマート・フライパン・セレクター：調理器具ガイド";
const description = "あなたの料理スタイルに合わせて最適なフライパンや鍋を選ぶためのインタラクティブガイド。鋳鉄 vs ステンレス vs テフロン。理想の道具を見つけましょう。";
const faq = [
  {
    question: '普段使いに最適なフライパンは何ですか？',
    answer: '多くの人にとって、高品質なステンレス製フライパンか、しっかりとシーズニングされた鋳鉄（スキレット）がベストです。ステンレスは多目的で一生使えます。鋳鉄は化学薬品を使わずに天然の非粘着性を提供します。',
  },
  {
    question: 'なぜステンレスパンに食材がくっつくのですか？',
    answer: '通常、温度が不足しているか、食材を入れるタイミングが早すぎることが原因です。「ライデンフロスト効果」を試してください。水滴が真珠のように転がるまでパンを予熱すれば準備完了です。',
  },
  {
    question: 'フライパンの安全性はどうすれば分かりますか？',
    answer: '「PFOAフリー」の表示を探してください。鋳鉄、炭素鋼、ステンレス鋼は、時間とともに劣化するコーティングがないため、最も安全で耐久性に優れた選択肢です。',
  },
  {
    question: 'フライパンを「育てる（シーズニング）」とはどういう意味ですか？',
    answer: '金属（鉄や鋼）の表面に重合したオイルの層を作るプロセスです。これにより錆から保護され、使うほどに良くなる天然の非粘着層が形成されます。',
  },
  {
    question: '良いフライパンにはいくら出すべきですか？',
    answer: '中〜高品質のフライパン2〜3点セット（ステンレスや鋳鉄）は20年以上持ちます。2年でダメになる安物を5回買うより、良いものに一度投資するほうが賢明です。量より質が重要です。',
  },
];
const howTo = [
  {
    name: '料理スタイルを選択する',
    text: '強火（焼き色をつける）、デリケート（卵料理）、煮込み料理（スロークッキング）、またはクイック料理から選びます。スタイルごとに要件が異なります。',
  },
  {
    name: '理想の素材を選択する',
    text: 'あなたのスタイルに基づいて、鉄、ステンレス、銅、テフロンの中から最適な素材を推奨します。',
  },
  {
    name: '特徴を確認する',
    text: 'メリット、デメリット、メンテナンス、耐久性を理解します。その後、予算とニーズに合った特定のフライパンを選んでください。',
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
  slug: 'cookware-guide',
  title: 'スマート・フライパン・セレクター：調理器具ガイド',
  description: 'あなたの料理スタイルに合わせて最適なフライパンや鍋を選ぶためのインタラクティブガイド。鋳鉄 vs ステンレス vs テフロン。理想の道具を見つけましょう。',
  faqTitle: 'よくある質問',
  faq,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'The Flavor Bible - Pairing, and Progress in Food',
      url: 'https://www.flavorprints.com/',
    },
    {
      name: 'On Food and Cooking - Harold McGee (料理の科学)',
      url: 'https://www.foodscience.org/',
    },
    {
      name: 'Salt Fat Acid Heat - Samin Nosrat',
      url: 'https://www.saltfatacidheat.com/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'フライパン素材の科学と実践',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'すべてのフライパンが同じではありません。素材ごとに熱伝導率や蓄熱性が異なり、食材との反応も異なります。これらの違いを理解することが、正しい道具選びの鍵となります。',
    },
    {
      type: 'title',
      text: '鋳鉄（鉄鍋）：不朽の定番',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>メリット：</strong> 極めて高い蓄熱性、均一な熱伝導、天然の非粘着性（要シーズニング）、何世代も使える。 <strong>デメリット：</strong> 重い、メンテナンスが必要、錆びやすい、予熱に時間がかかる、酸性の強い食材の長時間調理には不向き。',
    },
    {
      type: 'title',
      text: 'ステンレス：万能の道具',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>メリット：</strong> 耐久性が高い、手入れが楽、酸（ワイン、トマト）に強い、清潔に保ちやすい、比較的安価。 <strong>デメリット：</strong> 天然の非粘着性はない、予熱技術が必要、熱分布が偏ることがある（多層構造のものが推奨されます）。',
    },
    {
      type: 'title',
      text: 'テフロン/非粘着性：圧倒的な利便性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>メリット：</strong> 焦げ付かない、調理が楽、掃除が簡単、安価。 <strong>デメリット：</strong> 時間と熱で劣化する、3〜5年で交換が必要、極端な高温調理（260°C以上）は危険。',
    },
  ],
  ui: {
    cookingStyle: '普段どのように料理をしますか？',
    material: '素材の種類',
    highHeat: '強火',
    sear: '焼き目 / ソテー',
    delicate: 'デリケート',
    fry: '卵料理 / オムレツ',
    stew: '煮込み料理',
    slowCook: 'スロークッキング',
    fast: '手早く',
    quick: '時短料理',
    recommendation: 'おすすめ',
    characteristics: '特徴',
    castIron: '鋳鉄（鉄）',
    stainlessSteel: 'ステンレス',
    carbon: '炭素鋼',
    copper: '銅',
    nonstick: 'テフロン（加工）',
    advantages: 'メリット',
    disadvantages: 'デメリット',
    maintenance: 'メンテナンス',
    durability: '耐久性',
    heatRetention: '蓄熱性',
    price: '価格',
    step1: '普段どのように料理をしますか？',
    step2: '手入れのレベル',
    maintenanceLazy: '低い / 不要',
    maintenanceLazyDesc: '手間をかけずに掃除したい。',
    maintenanceCare: '標準的',
    maintenanceCareDesc: '通常の手洗い。',
    maintenanceRitual: '儀式（高い）',
    maintenanceRitualDesc: '道具を育てるのが好き。',
    idealPan: '理想のフライパン',
    selectOptions: 'オプションを選択',
    seeRecommendation: '推奨を確認するには',
    pro: 'メリット',
    con: 'デメリット',
    masterTip: '達人のアドバイス',
    defaultTip: 'ソテー用のステンレスパンと、卵用のテフロン加工パンを揃えるのが効率的なキッチンの基本です。',
    stainlessName: 'ステンレス',
    stainlessTag: 'プロ仕様の万能選手',
    stainlessPro: '一生モノで反応しない。完璧な焼き色。',
    stainlessCon: '食材がつかないために予熱（温度管理）が必要。',
    stainlessTip: 'ライデンフロスト効果：水滴が真珠のように転がれば、パンの準備は完了です。',
    nonstickName: 'テフロン / 非粘着',
    nonstickTag: '究極の手軽さ',
    nonstickPro: '何もくっつかない。掃除が非常に楽。',
    nonstickCon: '寿命が短い（2〜3年）。強火は厳禁。',
    nonstickTip: '必ず手洗いし、木製やシリコン製の道具を使うことで寿命を2倍に延ばせます。',
    castironName: '鋳鉄（鉄パン）',
    castironTag: '時代を超えた定番',
    castironPro: '驚異的な蓄熱性。一生モノ。',
    castironCon: '非常に重い。定期的なシーズニングが必要。',
    castironTip: '温まるのは遅いですが、一度温まれば戦車のよう。ステーキに最適です。',
    carbonName: '炭素鋼（鉄）',
    carbonTag: '火の上の俊敏性',
    carbonPro: 'ステンレスのような軽さで、鉄パンの性能。',
    carbonCon: '濡れたままにすると錆びる。見た目に使用感が出る。',
    carbonTip: '黒ずんで使い込まれるほど性能が上がります。最高の中華鍋の秘密です。',
    enamelName: 'ホーロー鋳鉄',
    enamelTag: 'グルメ・クオリティ',
    enamelPro: 'スロークッキングに最適。美しい外観。',
    enamelCon: '高価。ホーロー層は衝撃に弱い。',
    enamelTip: '長時間の煮込み料理に完璧。ホーロー加工により酸性食材（トマト）も問題なく調理できます。',
  },
  schemas: [faqSchema, howToSchema, appSchema],
};
