import type { ToolLocaleContent } from "../../../types";

const title = "科学的なエッグタイマー";
const description = "標高、温度、サイズに基づいた、完璧なゆで卵を作るための熱力学計算機。";
const faq = [
  {
    question: "ゆで卵をる際に標高が重要なのはなぜですか？",
    answer: "水は常に100°Cで沸騰するわけではありません。標高が高くなると気圧が下がり、沸点が低くなります。例えば、標高2000mでは約93°Cで沸騰するため、海面（0m）よりも調理に時間がかかります。エベレスト山頂（沸点約70°C）では、固ゆで卵を作ることは不可能です。",
  },
  {
    question: "冷蔵庫の卵か、常温の卵か？",
    answer: "冷蔵庫から出したばかりの卵（4°C）は、常温の卵（20°C）よりも加熱に時間がかかります。その差は2〜3分になることもあります。この計算機は、初期温度に合わせて自動的に時間を調整します。",
  },
  {
    question: "黄身の周りに緑色の輪ができるのはなぜですか？",
    answer: "これは硫化第一鉄で、茹で過ぎの結果です。80°C以上の状態が長く続くと、白身の硫黄が黄身の鉄分と反応します。毒性はありませんが、茹で過ぎのサインです。茹で上がったらすぐに氷水に取ることで防げます。",
  },
  {
    question: "卵の殻を簡単にむくには？",
    answer: "産みたての新鮮な卵ではなく、1〜2週間経ったものを使用してください。また、水からではなく沸騰したお湯から茹で始め、終了後はすぐに氷水に浸けます。温度変化（ヒートショック）で中身が収縮し、膜が剥がれやすくなります。",
  },
];
const howTo = [
  {
    name: "初期温度を選択する",
    text: "卵が冷蔵庫の状態（4°C）か、常温（20°C）かを選択します。これは卵の内部温度のことです。",
  },
  {
    name: "卵のサイズを選択する",
    text: "S、M、L、またはXL（73g以上）から選択します。サイズによって、中心まで熱が伝わる時間が変わります。",
  },
  {
    name: "標高を指定する",
    text: "手動で入力するか、位置情報を使用して標高を取得します。標高が300m上がるごとに沸点は約1°C下がります。",
  },
  {
    name: "ヒートショックを与える",
    text: "タイマーが鳴ったら、すぐに氷水に卵を沈めます。これにより余熱での調理が止まり、殻がむきやすくなります。正確な仕上げにはこの工程が不可欠です。",
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
  slug: "yude-tamago",
  title: "科学的なエッグタイマー",
  description: "標高、温度、サイズに基づいた、完璧なゆで卵を作るための熱力学計算機。",
  faqTitle: "よくある質問",
  bibliographyTitle: "科学的リファレンス",
  ui: {
    parameters: "パラメータ",
    initial_temperature: "初期温度",
    fridge: "冷蔵庫",
    ambient: "常温",
    egg_size: "サイズ",
    altitude: "標高",
    use_location: "現在地を使用",
    altitude_help: "高い標高では沸点が下がり、調理時間に影響します。",
    sea_level: "海面",
    soft_cooked: "半熟（トロトロ）",
    soft_description: "白身は固まり、黄身は液状。",
    mollet: "半熟（ねっとり）",
    mollet_description: "黄身がクリーム状、白身はしっかり。",
    hard_cooked: "固ゆで",
    hard_description: "完全に火が通り、黄身も固い。",
  },
  faq,
  bibliography: [
    {
      name: "The Science of Boiling an Egg - Charles D. H. Williams",
      url: "https://newton.ex.ac.uk/teaching/CDHW/Egg/",
    },
    {
      name: "The Food Lab: The Science of the Best Hard Boiled Eggs - J. Kenji López-Alt",
      url: "https://www.seriouseats.com/the-food-lab-hard-boiled-eggs-recipe",
    },
    {
      name: "The Food Lab: Perfect Soft Boiled Eggs",
      url: "https://www.seriouseats.com/soft-boiled-eggs-recipe",
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: '完璧なゆで卵のためのマスターガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '卵を茹でることは、<strong>応用熱力学</strong>の演習です。初期温度、サイズ、標高を正確に把握することで、シルクのような黄身にするか、茹で過ぎで緑色の輪ができた黄身にするかが決まります。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '62°C',
          label: '白身の凝固',
          icon: 'mdi:egg-outline',
        },
        {
          value: '68°C',
          label: '黄身の凝固',
          icon: 'mdi:egg-fried',
        },
        {
          value: '-1°C',
          label: '沸点 / 300m',
          icon: 'mdi:mountain',
        },
        {
          value: '0s',
          label: '許容誤差',
          icon: 'mdi:timer-check-outline',
        },
      ],
    },
    {
      type: 'title',
      text: '茹で加減の比較',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '半熟（ソフト）',
          icon: 'mdi:coffee-outline',
          description: '白身は一部固まり、黄身は完全に液体。',
          points: [
            '非常に繊細な食感',
            'パンを浸すのに最適',
            '短時間調理 (3-4分)',
            '殻をむくのが難しい',
          ],
        },
        {
          title: 'モレ（Mollet）',
          icon: 'mdi:water-percent',
          description: '白身は固まり、黄身はクリーミーで濃厚。',
          highlight: true,
          points: [
            'グルメの標準',
            '蜂蜜のような質感の黄身',
            '弾力のある白身',
            'サラダに最適',
          ],
        },
        {
          title: '固ゆで',
          icon: 'mdi:circle-slice-8',
          description: '完全に固まっているが、パサつかない仕上がり。',
          points: [
            '黄身が不透明でしっかり',
            '持ち運びや殻むきが容易',
            'フィリングに最適',
            '迅速な冷却が必要',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '標高による沸点の変化',
      level: 3,
    },
    {
      type: 'table',
      headers: ['都市 / 標高', 'メートル', '沸点 (°C)', '追加時間'],
      rows: [
        ['海抜（東京）', '0m', '100°C', '0s'],
        ['長野市', '370m', '98.8°C', '+15s'],
        ['メキシコシティ', '2240m', '92.6°C', '+75s'],
        ['ラパス（ボリビア）', '3640m', '88.1°C', '+140s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '緑色の輪や殻がむきにくい問題',
      html: '緑色の輪は<strong>硫化第一鉄</strong>で、茹で過ぎが原因です。殻がうまくむけないのは新鮮すぎるためで、pHが低いと白身が膜に密着します。1週間経った卵を使い、氷水でヒートショックを与えてください。',
    },
    {
      type: 'title',
      text: '卵の科学用語集',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'オボトランスフェリン',
          definition: '白身の中で最初に凝固するタンパク質（62°C）。',
        },
        {
          term: 'オボアルブミン',
          definition: '主要なタンパク質で、完全に固まるにはより高い熱（80°C）が必要。',
        },
        {
          term: '大気圧',
          definition: '水の沸騰温度を決定する要因。',
        },
        {
          term: 'ヒートショック',
          definition: '余熱による調理を瞬時に止めるための氷水への浸漬。',
        },
      ],
    },
    {
      type: 'tip',
      title: 'お酢のトリック',
      html: 'お湯に少量の酢を加えてください。殻にヒビが入っても、酸が白身を素早く凝固させ、ヒビを塞いでくれます。',
    },
    {
      type: 'paragraph',
      html: '私たちのタイマーはチャールズ・ウィリアムズの計算式を使用し、あなたの所在地と冷蔵庫の状態に合わせて秒単位で調整します。',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
