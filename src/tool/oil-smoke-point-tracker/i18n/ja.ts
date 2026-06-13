import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = '油の発煙点トラッカー：揚げ油の寿命と劣化の推定ツール';
const description = '揚げ油の品質を監視し、現在の発煙点の低下を推定します。使用回数、温度、食材の種類を追跡して、有害な極性化合物の蓄積を防ぎます。';

const faq = [
  {
    question: '揚げ油の発煙点はなぜ時間とともに低下するのですか？',
    answer: '油を揚げ物の温度に加熱するたびに、熱分解、加水分解、酸化がトリグリセリドを遊離脂肪酸（FFA）、モノアシルグリセロール、ジアシルグリセロールに分解します。これらの分解生成物は無傷のトリグリセリドよりも沸点と発煙点がはるかに低いため、繰り返し使用すると油がより低い温度で煙を出し始めます。',
  },
  {
    question: '極性化合物とは何ですか？なぜ規制されているのですか？',
    answer: '極性化合物（TPC）は、揚げ物中に生成される分解生成物です。油の重量の25%を超えると、油は劣化し、酸化され、消費に有害と見なされ、異味や心血管リスクの可能性を引き起こします。多くのヨーロッパ諸国では、TPCが25%を超えた場合、揚げ油の廃棄を法律で義務付けています。',
  },
  {
    question: '衣や小麦粉は油の劣化にどのように影響しますか？',
    answer: 'パン粉や衣、はがれた小麦粉は、熱い油の中に食材の粒子を落とします。これらの粒子は180度以上の温度で急速に焦げて炭化し、遊離脂肪酸を放出し、熱分解を加速する触媒として作用します。ジャガイモのようなきれいなデンプンは、油の劣化をはるかに遅くします。',
  },
  {
    question: '油の再利用に関する安全な限度はどのくらいですか？',
    answer: '目安として、キャノーラ油やピーナッツ油などの精製された高温用油は、清潔な条件下で5回から8回再利用できます。ただし、未精製の油や、190度以上の温度または衣付きの食材にさらされた油は、1回から3回の使用後に廃棄する必要があります。',
  },
];

const howTo = [
  {
    name: '揚げ油の種類を選択',
    text: 'データベースリストから油を選んでください。高温用の精製油は、未精製のものよりも高い初期発煙点を持っています。',
  },
  {
    name: '揚げ物のサイクルを追跡',
    text: '現在の油のバッチが経験した揚げ物セッションの合計回数を入力します。',
  },
  {
    name: '揚げ温度を入力',
    text: 'スライダーを調整して、揚げ物セッションの平均温度に合わせます。180度を超える温度は分解を加速します。',
  },
  {
    name: '食材のコーティングの種類を特定',
    text: 'きれいなデンプン類を揚げているのか、炭化残留物を残す小麦粉や衣付きの食材を揚げているのかを指定します。',
  },
  {
    name: '発煙点と廃棄状態を確認',
    text: '劣化した発煙点と廃棄ゲージを確認します。油の健全性が危険域に入ったら直ちに廃棄してください。',
  },
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent = {
  slug: 'oil-smoke-point-tracker',
  title: '油の発煙点トラッカー',
  description: '揚げ油の品質を監視し、現在の発煙点の低下を推定します。使用回数、温度、食材の種類を追跡して、有害な極性化合物の蓄積を防ぎます。',
  faqTitle: 'よくある質問',
  ui: {
    oilPresetLabel: '揚げ油の種類',
    presetAvocadoRefined: 'アボカドオイル（精製）',
    presetSunflowerRefined: 'ひまわり油（精製）',
    presetPeanutRefined: 'ピーナッツオイル（精製）',
    presetCanolaRefined: 'キャノーラ油（精製）',
    presetOliveEV: 'エクストラバージンオリーブオイル',
    presetOlivePomace: 'オリーブポマースオイル',
    presetCoconutUnrefined: 'ココナッツオイル（未精製）',
    presetSunflowerUnrefined: 'ひまわり油（未精製）',
    usesLabel: '揚げ物サイクル（使用回数）',
    tempLabel: '揚げ温度',
    foodTypeLabel: '食材の準備 / コーティング',
    optionStarch: 'きれいなデンプン（ジャガイモ、フライドポテト）',
    optionBreading: '小麦粉、衣、またはパン粉付きの食材',
    baseSmokePointLabel: '基準発煙点',
    currentSmokePointLabel: '劣化した発煙点',
    polarCompoundsLabel: '極性化合物（TPC）',
    polymerizationLabel: '油の重合健全性',
    statusLabel: '油の安全性プロファイル',
    statusGood: '再利用可能',
    statusCaution: '注意 - まもなく濾過が必要',
    statusDiscard: '直ちに廃棄',
    adviceGood: '油の性状は安定しています。揚げ物を続けてください。ただし、冷却後に残留食材粒子を濾過してください。',
    adviceCaution: '劣化が始まっています。発煙点が低下しています。濾過して、あと1回だけ使用することをお勧めします。',
    adviceDiscard: '危険な劣化に達しました。極性化合物の濃度が高くなっています。酸敗と健康リスクを防ぐために廃棄してください。',
    gaugeSafe: '安全',
    gaugeCaution: '注意',
    gaugeDiscard: '廃棄',
    limitLabel: '限界',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '揚げ物の化学：油が劣化する理由',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '揚げ物は化学的に最も激しい調理技術のひとつです。食材を高温（通常160度から190度）の油に浸すと、油は同時に熱、食材からの水分、空気中の酸素にさらされます。これにより3つの異なる化学反応が引き起こされます：加水分解（水がエステル結合を切断）、酸化（酸素がヒドロペルオキシドを生成）、重合（劣化した分子が結合して粘性の高い鎖状構造を形成）。これらの反応が進むにつれて、総極性化合物（TPC）の濃度が上昇し、油が分解し始めて煙を出す温度が大幅に低下します。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'TPC 25%', label: '法的廃棄基準', icon: 'mdi:alert-octagon' },
        { value: '180°C', label: '臨界温度しきい値', icon: 'mdi:thermometer-alert' },
        { value: '2.2倍', label: '衣による劣化速度', icon: 'mdi:chart-timeline-variant' },
        { value: 'FFA', label: '遊離脂肪酸が原因', icon: 'mdi:molecule' },
      ],
    },
    {
      type: 'title',
      text: '極性化合物と健康規制',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '総極性化合物（TPC）は、揚げ油脂の劣化度を測定するための国際基準として機能しています。業務用厨房では、TPC濃度が25%を超える油を使用することは、安全性の懸念から複数の国で法的に禁止されています。これらの極性化合物は吸収阻害剤であり、調理効率を低下させ、揚げ衣のサクサク感を損ないます。さらに重要なことに、酸化した油を定期的に摂取することは、心血管系の問題に関連するフリーラジカルや毒性化合物の摂取につながります。',
    },
    {
      type: 'title',
      text: '油の種類の比較：初期発煙点',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '精製油（高温用）',
          icon: 'mdi:shield-check',
          description: '揮発性化合物、遊離脂肪酸、不純物を除去するために加工された油。非常に高い初期発煙点を持っています。',
          points: ['精製アボカド：270°C / 518°F', '精製ひまわり：232°C / 450°F', '精製ピーナッツ：232°C / 450°F', '初期分解に対する高い耐性'],
        },
        {
          title: '未精製油（低温用 / 風味重視）',
          icon: 'mdi:leaf',
          description: '天然成分、ミネラル、遊離脂肪酸を多く含むコールドプレスまたはバージンオイル。',
          highlight: true,
          points: ['エクストラバージンオリーブ：190°C / 374°F', '未精製ココナッツ：177°C / 350°F', '未精製ひまわり：107°C / 225°F', '熱により極めて早く劣化'],
        },
      ],
    },
    {
      type: 'title',
      text: '揚げ油の発煙点と最大再利用回数 参考表',
      level: 3,
    },
    {
      type: 'table',
      headers: ['油の種類', '基準発煙点（°C）', '基準発煙点（°F）', '状態 / 加工', '推奨最大使用回数'],
      rows: [
        ['アボカドオイル（精製）', '270°C', '518°F', '精製', '10～12回'],
        ['オリーブポマースオイル', '238°C', '460°F', '精製', '8～10回'],
        ['ひまわり油（精製）', '232°C', '450°F', '精製', '6～8回'],
        ['ピーナッツオイル（精製）', '232°C', '450°F', '精製', '6～8回'],
        ['キャノーラ油（精製）', '204°C', '400°F', '精製', '5～7回'],
        ['エクストラバージンオリーブオイル', '190°C', '374°F', 'コールドプレス', '2～3回'],
        ['ココナッツオイル（未精製）', '177°C', '350°F', '未精製', '1～2回'],
        ['ひまわり油（未精製）', '107°C', '225°F', '未精製', '揚げ物には使用しないでください'],
      ],
    },
    {
      type: 'title',
      text: '劣化した油の重大な警告サイン',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '危険：揚げ油が有毒になったとき',
      html: '以下の症状のいずれかを観察した場合は、油の再利用を続けないでください：<strong>酸敗臭や石鹸のような臭い</strong>、濃く濁った色、食材周辺の<strong>過剰な泡立ち</strong>。油が通常の調理温度（170～180°C）で煙を出し始めた場合、それは遊離脂肪酸（FFA）の極度の蓄積によって発煙点が急落したことを示しています。劣化した油で調理すると、有害な極性化合物や発がん性要素が食材に移行し、風味と健康の両方に害を及ぼします。',
    },
    {
      type: 'title',
      text: '揚げ油の品質を長持ちさせる方法',
      level: 3,
    },
    {
      type: 'tip',
      title: '炭化残留物をすぐに濾過する',
      html: '衣や小麦粉付きの食材を揚げると、フライヤーの底に沈殿する微粒子が残ります。これらの粒子は調理中も炭化し続け、油の劣化を加速する触媒として作用します。このプロセスを遅らせるために、揚げ物中は常に表面をすくい取り、<strong>冷ました油を</strong>各揚げ物セッション後に細かい網、さらし布、またはコーヒーフィルターで濾過してください。濾過した油は、暗く涼しい場所で密閉したガラス容器に保管してください。',
    },
    {
      type: 'title',
      text: '揚げ物のベストプラクティス',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>食材の表面を完全に乾かす</strong> - 過剰な水分は急速な加水分解を引き起こし、油を遊離脂肪酸に分解します。',
        '<strong>揚げる前の塩振りを避ける</strong> - 塩は油の酸化を加速する触媒として作用します。熱い油から取り出した直後に味付けしてください。',
        '<strong>最適な温度を維持する</strong> - 170°Cから180°Cの間に保ちます。それ以上に上げると熱分解が加速し、下げると食材が余分な油を吸収します。',
        '<strong>古い油に新しい油を継ぎ足さない</strong> - 新鮮な油と劣化した油を混ぜると、新しい油を回復させるどころか、その分解を加速させます。',
      ],
    },
    {
      type: 'title',
      text: '揚げ物と脂質劣化の用語集',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: '発煙点', definition: '油脂が継続的に分解し始め、アクロレインを放出しながら目に見える青みがかった煙を発生させる温度。' },
        { term: '総極性化合物（TPC）', definition: '油の劣化を示す世界的な標準指標であり、酸化化合物、FFA、ポリマーの総重量パーセントを表します。' },
        { term: '加水分解', definition: '水分子がトリグリセリドを遊離脂肪酸とグリセロールに分解する化学反応。食材の水分によって引き起こされます。' },
        { term: '重合', definition: '熱損傷を受けた油分子が結合して大きな高分子構造を形成し、油の粘度を高めるプロセス。' },
        { term: '遊離脂肪酸（FFA）', definition: '加水分解中にトリグリセリドから放出されるカルボン酸。油脂の初期発煙点を直接的に低下させます。' },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
