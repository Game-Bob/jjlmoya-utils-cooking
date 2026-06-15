import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "乳液安定性とオイル限界量計算機";
const description = "マヨネーズ、アイオリ、ビネグレットが分離する前に、どのくらいの油を加えられるかを正確に把握。この無料の乳液安定性計算機で、ソースの分離を防ぎます。";
const faq = [
  {
    question: "マヨネーズが分離する前に、どれだけ油を加えられますか？",
    answer: "乳化剤によって異なります。卵黄は約78%（水の量の約3.5倍）、マスタードは70%、大豆レシチンは82%、ポリソルベートは85%までの油を支えます。上の計算機を使って、あなたの特定の量に対する正確な最大値を算出してください。"
  },
  {
    question: "乳液がなぜ分離し破壊されたのですか？",
    answer: "乳液は、油の体積分率が乳化剤の最大充填限界を超えると破壊されます。その時点で、油滴が非常に密に押しつぶされて融合し、混合物が分離します。これは瞬間的に起こり、徐々に進行するプロセスではありません。"
  },
  {
    question: "分離したマヨネーズやアイオリをどうやって修復しますか？",
    answer: "清潔なボウルに新鮮な卵黄または大さじ1杯のぬるま湯を入れます。そして、まるで生の油を加えるときのように、分離した混合物を絶えず泡立てながらゆっくりと注ぎます。上の計算機が必要な水または卵黄の正確な量を教えてくれます。"
  },
  {
    question: "油を入れすぎると乳液は破壊されますか？",
    answer: "油をあまりに速く加えると一時的に乳化剤に負荷がかかりますが、破壊の真の原因は常に不適切な相比にあります。油分率が乳化剤の限界以下に留まれば、速度に関係なく乳液は安定を保ちます。限界を超えれば、破壊は避けられません。"
  },
  {
    question: "乳化剤としての卵黄とマスタードの違いは何ですか？",
    answer: "卵黄（最大油分78%）はレシチンとリポタンパク質を含み、油滴の周りに強固な被膜を形成します。マスタード（最大油分70%）は粘質物とタンパク質に依存し、乳化力は弱いですが風味を加えます。大豆レシチン（82%）とポリソルベート（85%）は非常に効率的な工業用乳化剤です。"
  }
];

const howTo = [
  {
    name: "乳化剤を選択",
    text: "レシピで使う乳化剤を選んでください - クラシックマヨネーズには卵黄、ビネグレットにはマスタード、モダニスト料理には大豆レシチン/ポリソルベート。それぞれ異なる最大油量の限界値を設定します。"
  },
  {
    name: "水相の量を入力",
    text: "水性材料の総ミリリットル数を入力します：水、酢、レモン汁、ワイン、または水ベースの液体。計算機が選択した乳化剤の水分含有量を自動的に追加します。"
  },
  {
    name: "油の量を設定",
    text: "使用予定の油の量を入力します。スライダーを使うか、値を直接入力してください。計算機は、この量で安定した乳液が得られるか、それとも破壊するかを即座に表示します。"
  },
  {
    name: "安定性の結果を確認し、必要に応じて修正",
    text: "油の体積分率ゲージを確認してください。安定なら問題ありません。破壊している場合は、レスキューパネルがバランスを回復するために必要な水（ml）または追加の卵黄の正確な数を表示します。"
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
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'emulsion-stability-calculator',
  title: '乳液安定性とオイル限界量計算機',
  description: 'マヨネーズ、アイオリ、ビネグレットが分離する前に、どのくらいの油を加えられるかを正確に把握。この無料の乳液安定性計算機で、ソースの分離を防ぎます。',
  faqTitle: 'よくある質問',
  ui: {
    title: '乳液安定性アナライザー',
    subtitle: 'あなたのソースは、破壊する前にどのくらいの油に耐えられますか？',
    waterLabel: '水相 (ml)',
    oilLabel: '油の量 (ml)',
    emulsifierLabel: '乳化剤の種類',
    yolkOption: '卵黄',
    mustardOption: 'マスタード',
    soyLecithinOption: '大豆レシチン',
    polysorbateOption: 'ポリソルベート',
    stableStatus: '安定な乳液',
    brokenStatus: '破壊した乳液',
    ratioLabel: '油の体積分率',
    maxLimitLabel: '最大油量限界',
    fixTitle: 'レスキュー手法',
    waterFixText: '相を戻すために水を追加：',
    yolkFixText: 'または、追加の卵黄を使用：',
    idealRangeText: '理想的な範囲は臨界充填限界74〜80%未満です。'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'マヨネーズやアイオリは、分離する前にどれだけの油を吸収できるのか？',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'すべての料理人が一度は疑問に思ったことがあるでしょう：<strong>なぜマヨネーズが分離したのか？</strong>答えは見た目よりずっとシンプルです。乳液 - クラシックなアイオリ、クリーミーなビネグレット、モダニストなフォームのいずれも - は、崩壊するまでに有限の量の油しか保持できません。当サイトの<strong>乳液安定性計算機</strong>を使えば、使用する材料と量に基づいて、その限界点が正確にどこにあるかを瞬時に算出できます。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '78%',
          label: '卵黄 最大油量',
          icon: 'mdi:egg-outline'
        },
        {
          value: '85%',
          label: 'ポリソルベート限界',
          icon: 'mdi:flask-outline'
        },
        {
          value: '74%',
          label: '理論充填率',
          icon: 'mdi:sphere'
        },
        {
          value: '15 ml',
          label: '卵黄の水分量',
          icon: 'mdi:water'
        }
      ]
    },
    {
      type: 'title',
      text: '科学：なぜ乳液は破壊するのか',
      level: 2
    },
    {
      type: 'paragraph',
      html: '料理における乳液は、連続した水相の中に微小な油滴を分散させることで機能します。<strong>乳化剤</strong> - 卵黄のレシチン、マスタードの粘質物、ポリソルベートなどの合成界面活性剤 - は各油滴をコーティングし、隣同士が融合するのを防ぎます。'
    },
    {
      type: 'paragraph',
      html: '破壊点は純粋な幾何学によって決定されます。油滴は小さな球が密集したように振る舞います。与えられた空間に詰め込める球の最大体積 - <strong>ケプラー予想</strong>として知られるもの - は約74%です。実際の調理現場では、強力な乳化剤を使えば80〜85%まで伸ばせますが、それを超えると油滴が極限まで圧縮されて融合し、乳液は瞬時に崩壊します。'
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: '卵黄',
          icon: 'mdi:egg-outline',
          description: '古典的マヨネーズの乳化剤。レシチンとリポタンパク質を含む。',
          highlight: true,
          points: [
            '最大油量：78%',
            '卵黄あたり約15mlの水分',
            'コクと色を加える',
            'マヨネーズとアイオリに最適'
          ]
        },
        {
          title: 'マスタード',
          icon: 'mdi:shaker-outline',
          description: '粘質物と種子タンパク質に依存。ピリッとした風味を加える。',
          points: [
            '最大油量：70%',
            '約10mlの水分含有',
            '乳化力はやや弱い',
            'ビネグレットに最適'
          ]
        },
        {
          title: '大豆レシチン',
          icon: 'mdi:leaf',
          description: '高濃度の植物由来界面活性剤。',
          points: [
            '最大油量：82%',
            '約5mlの水分含有',
            '中性の風味',
            'モダニスト料理の定番'
          ]
        },
        {
          title: 'ポリソルベート',
          icon: 'mdi:flask-outline',
          description: '最大の界面活性能力を持つ合成乳化剤。',
          points: [
            '最大油量：85%',
            '約2mlの水分含有',
            '最高の油耐性',
            'フォームやエアに使用'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['乳化剤', '最大油量 %', '水100mlあたりの油量', '最適な用途'],
      rows: [
        ['卵黄', '78%', '約355ml', 'マヨネーズ、アイオリ、オランデーズ'],
        ['マスタード', '70%', '約233ml', 'ビネグレット、軽めのドレッシング'],
        ['大豆レシチン', '82%', '約456ml', 'モダニストソース、フォーム'],
        ['ポリソルベート', '85%', '約567ml', '安定フォーム、実験的料理']
      ]
    },
    {
      type: 'title',
      text: '破壊した乳液を段階的に救う方法',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'マヨネーズやソースがすでに分離してしまった場合でも、<strong>捨てないでください</strong>。修正手法は簡単です - ただし、相比を理解している場合に限ります。強く混ぜても効果はありません。連続相（水）を追加する必要があります。'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '乳液が破壊しそうな一般的なサイン',
      html: '<strong>とろみがついた後に突然ゆるくなる</strong>、<strong>つややかな表面がざらつく</strong>、または縁に油が浮いてくるのが見えたら注意してください。これらの兆候が見られたら、すぐに油を加えるのを止め、小さじ1杯の冷水を泡立ててから再開しましょう。'
    },
    {
      type: 'title',
      text: '毎回完璧な乳液を実現する実用的なコツ',
      level: 3
    },
    {
      type: 'tip',
      title: '温度が重要',
      html: 'すべての材料は<strong>室温</strong>にしてください。冷えた卵や冷えた油は、破壊のリスクを劇的に高めます。材料は開始30分前に冷蔵庫から出しておきましょう。'
    },
    {
      type: 'tip',
      title: '水のセーフティネット',
      html: 'レシピに十分な酸（酢、レモン汁）が含まれていない場合は、油を加え始める前に<strong>卵黄1個につき小さじ1杯の冷水</strong>を加えてください。この余分な水がより広い安全マージンを作り出します。'
    },
    {
      type: 'tip',
      title: '分離したバッチの修正',
      html: '清潔なボウルに新鮮な卵黄を入れます。小さじ1杯の水と一緒に泡立てます。そして、<strong>分離した混合物をできるだけゆっくりと注ぎます</strong>、まるで生の油を加えるかのように。再乳化したら、残りはより速く加えても大丈夫です。'
    },
    {
      type: 'title',
      text: '料理用乳液用語集',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: '連続相',
          definition: '油滴を囲む液体 - マヨネーズのような水中油滴型乳液では、通常は水、酢、または柑橘類の果汁。'
        },
        {
          term: '分散相',
          definition: '微小な滴に分解された液体 - ほとんどの料理用乳液では油。加える量が増えるほど、油滴同士の距離が狭まる。'
        },
        {
          term: '体積分率',
          definition: '全容量に対する油の容量の比率。約74〜85%（乳化剤による）で、乳液は幾何学的な破壊点に達する。'
        },
        {
          term: '合一（ごういつ）',
          definition: '2つ以上の油滴が合わさってより大きな油滴になること。これが目に見える乳液の破壊を引き起こす微視的プロセスである。'
        },
        {
          term: '相反転',
          definition: '水中油滴型乳液が油中水滴型に反転する点 - クリームからバターを作るときに起こる。これが最終的な破壊モードである。'
        }
      ]
    },
    {
      type: 'paragraph',
      html: 'クラシックなフレンチマヨネーズ、ガーリック風味のアイオリ、安定したビネグレット、あるいはモダニストなハイドロコロイドの実験のいずれを作るにしても、<strong>油と水の比率</strong>を理解することが最も重要な要素です。この計算機が計算を処理するので、自信を持って調理に臨めます。'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
