import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "重曹とベーキングパウダーの計算機：膨張剤と酸の中和バランス";
const description = "レシピに必要な重曹とベーキングパウダーの最適な比率を計算します。バターミルクやヨーグルトなどの酸性材料を中和し、金属っぽい後味をなくして、毎回ふんわりとした焼き上がりを実現します。";
const faq = [
  {
    question: "ベーキングパウダーの代わりに重曹を使うとき、なぜ酸が必要なのですか？",
    answer: "重曹は純粋な塩基（アルカリ）です。反応して二酸化炭素を発生させるには、酸が必要です。十分な酸がないと重曹が完全に反応せず、焼き菓子に苦みや金属っぽい風味が残ります。"
  },
  {
    question: "重曹とベーキングパウダーの違いは何ですか？",
    answer: "重曹は100%炭酸水素ナトリウム（重炭酸ソーダ）という塩基です。一方ベーキングパウダーは、重曹に加えて乾燥した酸性剤（酒石酸クリームなど）とでんぷんを含む完全な膨張剤で、自己中和するため酸を別途加える必要がありません。"
  },
  {
    question: "重曹小さじ1杯はベーキングパウダーに換算するといくらですか？",
    answer: "重曹はベーキングパウダーの約3〜4倍の膨張力があります。重曹小さじ1杯の代わりにベーキングパウダー小さじ3〜4杯が必要です。ただし、この置き換えでは酸性塩も追加されるため風味が変わることがあります。正確な換算には本計算機をご利用ください。"
  },
  {
    question: "ケーキが石けんっぽい味や金属っぽい味になるのはなぜですか？",
    answer: "石けんのような、あるいは金属のような後味は、未反応の重曹が残っている典型的なサインです。生地に重曹を完全に中和するだけの酸が足りないと、焼成後もアルカリ性の残留物が残り、化学的な不快な風味の原因となります。本計算機で完全な中和を確認しましょう。"
  },
  {
    question: "ダッチプロセスココアパウダーは酸として使えますか？",
    answer: "使えません。ダッチプロセスココアはアルカリ処理によって天然の酸味が抑えられています（pH約7〜8）。酸として作用するのは天然ココアパウダー（pH約5〜6）だけです。"
  },
  {
    question: "重曹は焼き菓子の焼き色にどう影響しますか？",
    answer: "重曹は生地のpHを上げ、アルカリ性に傾けます。pHが高いほどメイラード反応（焼き色反応）が促進され、クッキーやケーキの表面が濃いきつね色になり、香ばしい風味が深まります。"
  }
];

const howTo = [
  {
    name: "小麦粉の重量を入力",
    text: "レシピで使う小麦粉の総重量をグラムまたはオンスで入力すると、必要な総膨張力が計算されます。"
  },
  {
    name: "酸性材料を追加",
    text: "レシピに含まれる酸性材料（バターミルク、ヨーグルト、レモン汁など）を選び、それぞれの重量を入力します。"
  },
  {
    name: "pHバランスを確認",
    text: "仮想のpH天秤をチェックします。天秤が釣り合っていれば、金属臭のない最適な中和状態です。"
  },
  {
    name: "膨張剤を計量",
    text: "酸を中和するために必要な重曹の推奨量と、目標の膨らみを達成するための追加ベーキングパウダー（ブースター）の量を読み取ります。"
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'JPY' },
};

export const content: ToolLocaleContent = {
  slug: 'leavener-acid-neutralizer',
  title: '膨張剤と酸の中和計算',
  description: 'レシピに必要な重曹とベーキングパウダーの最適な比率を計算します。バターミルクやヨーグルトなどの酸性材料を中和し、金属っぽい後味をなくして、毎回ふんわりとした焼き上がりを実現します。',
  faqTitle: 'よくある質問',
  ui: {
    title: "膨張剤酸中和計算",
    subtitle: "お菓子作りの膨らみと風味を stoichiometry（化学量論）で最適化",
    flourLabel: "小麦粉の重量",
    addAcidLabel: "酸性材料を追加",
    weightLabel: "重量",
    removeButton: "削除",
    bakingSodaNeeded: "中和用の重曹",
    requiredBakingPowder: "目標膨張力",
    providedBakingPowderEquivalent: "重曹による膨張力",
    boosterBakingPowder: "追加ベーキングパウダー（ブースター）",
    resultsTitle: "計算された膨張剤",
    statusBalanced: "バランス良好",
    statusAcidic: "酸が過剰",
    statusAlkaline: "塩基が過剰",
    gramsUnit: "g",
    ouncesUnit: "oz",
    teaspoonsUnit: "小さじ",
    scaleBalanceTitle: "仮想pH天秤",
    acidListTitle: "酸性材料",
    unitLabel: "単位系",
    metricUnit: "メートル法（g）",
    imperialUnit: "ヤードポンド法（oz）",
    acid_buttermilk: "バターミルク",
    acid_yogurt: "ヨーグルト",
    acid_sour_cream: "サワークリーム",
    acid_honey: "はちみつ",
    acid_molasses: "糖蜜",
    acid_cocoa: "純ココアパウダー",
    acid_lemon_juice: "レモン汁",
    acid_vinegar: "酢",
    stoichiometryBadge: "pH化学量論",
    simulateSodaLabel: "追加重曹のシミュレーション",
    autoBalanceBtn: "自動バランス",
    sodaAddedLabel: "追加された重曹"
  },
  faq,
  howTo,
  seo: [
    {
      type: 'summary',
      title: '完璧な膨らみのための重要ポイント',
      items: [
        '重曹が反応するには酸が必要。酸が足りないと石けんのような金属臭の原因になります',
        'ベーキングパウダーは自己中和型で、ブースターとして追加の膨張力を提供します',
        '適切な膨らみを得る目安は、小麦粉重量の4%相当のベーキングパウダー換算値です',
        '下の中和表を使って、酸性材料に合った適切な重曹の量を見つけましょう'
      ]
    },
    {
      type: 'title',
      text: 'お菓子作りにおける化学膨張剤の科学',
      level: 2
    },
    {
      type: 'paragraph',
      html: '化学的膨張は<strong>酸塩基中和反応</strong>によって二酸化炭素（CO2）を発生させ、その気泡が生地のマトリックスに閉じ込められることで焼成中に膨らみます。重曹（炭酸水素ナトリウム）と酸性材料の適切な比率を守ることが何より重要です。<strong>重曹が多すぎると</strong>未反応のアルカリ分が残留し、石けんのような金属臭や黄色い変色を引き起こします。<strong>酸が多すぎると</strong>生地が膨らまず、密度が高く平たい仕上がりになります。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '3〜4倍',
          label: '重曹はベーキングパウダーより強力',
          icon: 'mdi:flash'
        },
        {
          value: '4%',
          label: '目標膨張力（小麦粉重量比）',
          icon: 'mdi:target'
        },
        {
          value: '小さじ1/4',
          label: 'バターミルク/ヨーグルト120gあたりの重曹',
          icon: 'mdi:spoon-sugar'
        },
        {
          value: '0.0125',
          label: '中和比率（乳酸性材料）',
          icon: 'mdi:scale-balance'
        }
      ]
    },
    {
      type: 'title',
      text: '重曹 vs ベーキングパウダー：完全比較',
      level: 3
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '重曹',
          icon: 'mdi:flask-outline',
          description: '純粋な炭酸水素ナトリウム（NaHCO3）。強力なアルカリ性の塩基で、CO2を発生させるには外部からの酸が必要です。',
          points: [
            'ベーキングパウダーの3〜4倍の強さ',
            '反応には酸（バターミルク、ヨーグルト、レモン汁）が必要',
            '過剰だと石けん臭と黄色い内層の原因に',
            'pHを上げ、クッキーのメイラード反応を促進',
            '単動式：混合後すぐにCO2を放出'
          ]
        },
        {
          title: 'ベーキングパウダー',
          icon: 'mdi:flask-round-bottom-outline',
          description: '重曹＋乾燥酸性塩＋でんぷんからなる完全な膨張システム。自己中和型で信頼性が高い。',
          highlight: true,
          points: [
            '自前の酸を含む（リン酸一カルシウム、SAPなど）',
            '複動式：混合時と加熱時の2段階でCO2を放出',
            '金属臭なし。pHバランス済み',
            '1gあたりの強さは弱い。重曹と同じ力には3〜4倍必要',
            '重曹だけでは小麦粉全体を持ち上げられない時のブースターに最適'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['酸性材料', '標準的な使用量', '中和に必要な重曹', '中和比率'],
      rows: [
        ['バターミルク / ヨーグルト / サワークリーム', '120g（1/2カップ）', '1.5g（小さじ1/4）', '0.0125'],
        ['レモン汁 / 酢', '15g（大さじ1）', '1.5g（小さじ1/4）', '0.1000'],
        ['純ココアパウダー', '80g（1カップ）', '3.0g（小さじ1/2）', '0.0375'],
        ['はちみつ', '340g（1カップ）', '3.0g（小さじ1/2）', '0.0088'],
        ['糖蜜', '328g（1カップ）', '3.0g（小さじ1/2）', '0.0091']
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'トラブルシューティング：膨張バランスが崩れていませんか？',
      badge: 'クイックチェック',
      html: '<strong>ケーキがしぼんだ場合：</strong>酸が多すぎるか、膨張剤全体が不足しています。CO2が生地構造が固まる前に抜けてしまいました。<br/><br/><strong>ケーキがぎっしり平たい場合：</strong>中和できる重曹量を超える酸があるか、小麦粉重量に対して総膨張力が足りません。<br/><br/><strong>石けん臭や金属臭がする場合：</strong>未反応の重曹が過剰です。酸性材料を増やすか、重曹を減らしましょう。<br/><br/><strong>黄色い斑点がある場合：</strong>溶け残った未反応重曹の塊の典型です。次回は重曹を小麦粉と一緒にふるってから使いましょう。'
    },
    {
      type: 'title',
      text: '膨張剤のバランスを整え金属臭を防ぐ方法',
      level: 3
    },
    {
      type: 'paragraph',
      html: '最高の風味と膨らみを得るには、次の手順に従ってください。<strong>まず</strong>、上の表を参考に、生地に含まれる酸性成分を完全に中和するために必要な重曹の量を求めます。<strong>次に</strong>、その重曹量をベーキングパウダー換算値に直し（4倍します）、小麦粉に必要な総膨張力と比較します。目安は小麦粉重量の<strong>4%</strong>相当のベーキングパウダー換算値です。<strong>不足する分は</strong>、中性のベーキングパウダーをブースターとして追加します。本計算機がこれらをすべて自動で行います。'
    },
    {
      type: 'list',
      icon: 'mdi:alert-circle-outline',
      items: [
        '重曹をベーキングパウダーで1:1置換しないでください。重曹は3〜4倍強力で、酸が必要です',
        '重曹は必ず粉類と一緒にふるい、苦みの原因となるダマを防ぎましょう',
        'ダッチプロセスココアは酸性ではありません。酸として使うなら純ココアパウダーを使用してください',
        'はちみつと糖蜜は弱酸性です。レモン汁に比べて1gあたりの必要重曹量はかなり少なめです',
        '混ぜたら手早く作業しましょう。化学膨張剤は液体に触れた瞬間から反応を始めます'
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: '中和比率',
          definition: '一定重量の酸性材料を完全に中和するのに必要な重曹の割合。比率が低いほど、その材料の1gあたりの酸性度は低いことを意味します。'
        },
        {
          term: '膨張力',
          definition: '膨張剤が発生できるCO2ガスの総量。ベーキングパウダー換算で表し、小麦粉重量の4%がケーキやマフィンの標準的な目標値です。'
        },
        {
          term: '複動式ベーキングパウダー',
          definition: '2段階でCO2を放出するベーキングパウダー。まず常温で液体と混ぜた時、次にオーブンの熱で反応します。より安定した膨らみが得られます。'
        },
        {
          term: 'メイラード反応',
          definition: 'アミノ酸と還元糖が反応して食品を褐色にし、複雑な風味を生み出す化学反応。重曹の過剰による高pHで促進されます。クッキーでは望ましい効果ですが、繊細なケーキでは避けたい反応です。'
        },
        {
          term: 'pHバランス',
          definition: '生地の酸性・アルカリ性の度合い。中性pH（約7）は重曹がすべて酸と反応しきった状態です。ややアルカリ性だと焼き色がつきやすく、酸性だとしっとり柔らかく仕上がります。'
        }
      ]
    },
    {
      type: 'tip',
      html: '<strong>焼き色とpHの関係：</strong>風味のためには完全な中和が大切ですが、チョコレートケーキやクッキーでは、重曹をごくわずかに多めにして生地をややアルカリ性にするのが効果的な場合もあります。pHが高いとメイラード反応が進み、色が濃く、縁がカリッとし、キャラメルのような深い風味が生まれます。繊細なバニラケーキでは、純粋でクリアな味わいを保つために正確な中和を心がけましょう。'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
