import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'メイラード反応オプティマイザー：pHと温度による焼き色計算ツール';
const description = 'メイラード反応を促進するために、食品1kgあたりに加える重曹の量を正確に計算します。安全なアルカリ性の範囲内に収めることで、石鹸のような不快な風味を防ぎます。';

const faq = [
  {
    question: 'メイラード反応とは何で、なぜ料理において重要なのでしょうか？',
    answer: 'メイラード反応とは、アミノ酸と還元糖の間で起こる化学反応で、焼き目のついた食品に独特の風味を与えます。ステーキの焼き目、パンの黄金色のクラスト、焙煎コーヒー、キャラメル状の玉ねぎはすべてこの反応によるものです。反応は140°Cから165°Cの間で最も速く進行します。',
  },
  {
    question: '重曹（炭酸水素ナトリウム）はどのように焼き色を加速させるのですか？',
    answer: '重曹は食品表面のpHを上昇させ、アルカリ性に傾けます。メイラード反応はアルカリ性環境で著しく速く進行します。pHを6から8に上げると、焼き色のスピードが2倍から3倍になることもあります。ただし、重曹を入れすぎると金属的で石鹸のような後味が残ります。そのため、この計算ツールでは安全な上限を適用しています。',
  },
  {
    question: '食品1kgあたりの重曹の安全な最大量はどれくらいですか？',
    answer: '一般的な安全上限は食品1kgあたり重曹1.5gです。この閾値を超えると、異味（金属臭、石鹸臭、薬品臭）のリスクが急激に高まります。当ツールの推奨量は最大量の半分で、異味のリスクを最小限に抑えながら十分な焼き色加速効果が得られます。',
  },
  {
    question: 'メイラード反応にとって温度が低すぎるとどうなりますか？',
    answer: '110°C未満では主に水分の蒸発が起こるだけで、意味のあるメイラード反応による焼き色はつきません。110°Cから140°Cの間ではゆっくりと焼き色がつきます。最適な温度範囲は140°Cから180°Cです。180°Cを超えると熱分解（ピロリシス）が始まり、食品が焦げて望ましい焼き色の風味ではなく、苦くて刺激的な化合物が生成されます。',
  },
];

const howTo = [
  {
    name: '食品の重さを量る',
    text: '焼き色をつけたい食品の総重量をグラム単位で入力します。',
  },
  {
    name: '調理温度を設定する',
    text: '調理面またはオーブンの温度を入力します。メイラード反応の最適ゾーンは140〜180°Cです。',
  },
  {
    name: '重曹の量を調整する',
    text: 'スライダーは初期設定で安全な最大量の半分に設定されています。慎重に増やしてください。危険ゾーンに近づくと計算ツールが警告を表示します。',
  },
  {
    name: '推定pHと速度倍率を確認する',
    text: '計算ツールは、選択したpHレベルでの焼き色の進行速度が、標準のpH 6と比べてどれだけ速いかを表示します。',
  },
  {
    name: '風味リスクレベルをチェックする',
    text: '風味バッジは、推定表面pHに基づいて「安全」「注意」「危険」を表示します。最良の結果を得るには緑のゾーンにとどめてください。',
  },
  {
    name: '重曹を均一に塗布する',
    text: '推奨量の重曹を少量の水に溶かし、調理前に食品に刷毛で塗るか和えます。不均一に分布すると焼き色にムラが出ます。',
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'meirudo-hannou-saitekika',
  title: 'メイラード反応オプティマイザー',
  description: 'メイラード反応を促進するために、食品1kgあたりに加える重曹の量を正確に計算します。安全なアルカリ性の範囲内に収めることで、石鹸のような不快な風味を防ぎます。',
  faqTitle: 'よくある質問',
  ui: {
    title: 'メイラード反応オプティマイザー',
    headerLabel: '焼き色の化学',
    flavorSafe: '安全なpH',
    flavorCaution: '注意：アルカリ性',
    flavorDanger: '危険：石鹸風味のリスク',
    unitLabel: '単位',
    metricUnit: 'メートル法',
    imperialUnit: 'ヤード・ポンド法',
    weightLabel: '食品の重さ',
    weightUnit: 'g',
    weightOz: 'oz',
    tempLabel: '表面温度',
    tempUnit: '°C',
    degreesF: '°F',
    tempLow: '低速：{min} ～ {max}',
    tempOpt: '最適：{min} ～ {max}',
    tempHigh: '熱分解：>{min}',
    sodaLabel: '重曹',
    sodaUnit: 'g',
    sodaOz: 'oz',
    sodaNote: '安全な最大量の半分、穏やかな焼き色促進',
    sodaCautionNote: '最大量に接近中、風味を注意深く監視',
    sodaDangerNote: '安全な最大量を超過、石鹸風味のリスクあり',
    sodaRecommended: '推奨重曹量',
    sodaMax: '安全な最大量',
    speedLabel: '反応速度',
    browningLabel: '焼き色の進行',
    rawLabel: '生',
    goldenLabel: 'きつね色',
    burntLabel: '焦げ',
    phEstimated: '推定表面pH',
    timeSaved: '短縮時間',
    errorTempTooLow: '温度が110°C未満です。メイラード反応が始まるには最低110°Cが必要です。この閾値以下では、水分の蒸発のみが起こり、意味のある焼き色はつきません。',
    errorWeightTooLow: '食品の重さは0gより大きい必要があります。',
    footerTemplate: '<span class="mr-footer-stat"><strong>{weight}</strong><small>{wunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{temp}</strong><small>{tunit}</small>で</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">重曹<strong>{soda}</strong><small>{sunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">速度x<strong>{multiplier}</strong></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{timeSaved}</strong>%短縮</span>',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'メイラード反応オプティマイザー：焼き色の科学を極める',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'メイラード反応は、旨味を伴う料理における聖杯とも言えます。焼き目のついたステーキ、パンの黄金色のクラスト、キャラメル状の玉ねぎの深く複雑な風味を生み出します。フランスの化学者ルイ＝カミーユ・メイラードにちなんで名付けられたこの反応は、アミノ酸と還元糖の間で起こり、何百もの風味化合物を生成します。重曹でpHを調整することにより、焦がすことなく焼き色のスピードを<strong>2倍から3倍</strong>に高めることができます。この計算ツールは正確な使用量を示し、石鹸風味の領域に入る前に警告を出します。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '約140°C', label: 'メイラード反応開始温度', icon: 'mdi:thermometer' },
        { value: '2～3倍', label: 'pH 8での速度向上', icon: 'mdi:speedometer' },
        { value: '1.5 g/kg', label: '重曹の安全最大量', icon: 'mdi:scale' },
        { value: 'pH 8.5', label: '石鹸風味の閾値', icon: 'mdi:alert-circle' },
      ],
    },
    {
      type: 'title',
      text: '食品重量別 重曹添加量早見表',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'この早見表を使って、一般的な食品重量ごとの推奨量と最大量をすばやく確認できます。推奨量は<strong>安全な最大量の半分</strong>で、異味のリスクを最小限に抑えながら十分な焼き色加速効果が得られます。',
    },
    {
      type: 'table',
      headers: ['食品重量', '推奨量 (g)', '安全最大量 (g)', '推定pH', '速度倍率'],
      rows: [
        ['250g（玉ねぎ1個）', '0.19 g', '0.38 g', '6.5', 'x1.2'],
        ['500g（玉ねぎ2個）', '0.38 g', '0.75 g', '6.5', 'x1.2'],
        ['750g（玉ねぎ3個）', '0.56 g', '1.13 g', '6.5', 'x1.2'],
        ['1000g（1 kg）', '0.75 g', '1.50 g', '7.0', 'x1.6'],
        ['1500g', '1.13 g', '2.25 g', '7.0', 'x1.6'],
        ['2000g', '1.50 g', '3.00 g', '7.0', 'x2.0'],
        ['3000g', '2.25 g', '4.50 g', '7.0', 'x2.0'],
        ['5000g', '3.75 g', '7.50 g', '7.0', 'x2.0'],
      ],
    },
    {
      type: 'title',
      text: '表面pHと焼き色への影響を理解する',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '中性 pH（6.0）',
          icon: 'mdi:water',
          description: 'ほとんどの生肉や野菜の自然なpHです。メイラード反応は基準速度で進行します。',
          highlight: false,
          points: ['反応速度：x1.0（基準）', '完全に天然、添加物なし', '最適な用途：純粋主義者、伝統的な調理法', '焼き色がゆっくりつくため、火加減の調整に余裕がある'],
        },
        {
          title: '弱アルカリ性（pH 7.0～7.5）',
          icon: 'mdi:flask-round-bottom',
          description: '推奨量の重曹で達成されます。風味に影響を与えずに顕著な速度向上が得られます。',
          highlight: true,
          points: ['反応速度：x1.5～2.0', '1kgあたり小さじ1/2（約0.75g）', '最適な用途：キャラメル玉ねぎ、ロースト野菜', 'ほとんどの家庭料理人にとって最適なバランス'],
        },
        {
          title: '高アルカリ性（pH 8.0～8.5）',
          icon: 'mdi:alert',
          description: '風味に欠陥が現れる前の実用的な最大アルカリ性です。焼き色の速度は2倍になりますが、注意深い監視が必要です。',
          highlight: false,
          points: ['反応速度：x2.0～3.0', '1kgあたり小さじ1（約1.5g）', '最適な用途：濃いプレッツェルのクラスト、極端なキャラメル化', '提供前に味見を  -  石鹸風味との境界線上'],
        },
      ],
    },
    {
      type: 'title',
      text: '温度帯と焼き色への意味',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '温度はメイラード反応にとってもう一つの重要な変数です。各温度帯は根本的に異なる結果をもたらします。これらの閾値を理解することで、調理の目的に合った適切な熱レベルを選ぶことができます。',
    },
    {
      type: 'table',
      headers: ['温度帯', '温度範囲', '何が起こるか', '最適な用途'],
      rows: [
        ['蒸発', '110°C未満', '水分が蒸発し、焼き色はつかない', '真空調理、ポーチ、蒸し料理'],
        ['低速焼成', '110～139°C', 'メイラード反応がゆっくり始まり、穏やかな色づき', '低温ローストトマト、低温乾燥'],
        ['最適ゾーン', '140～180°C', '焦がさずに最大の焼き色速度', '焼く、ロースト、揚げる、オーブン焼き'],
        ['熱分解', '180°C超', '焦げが始まり、苦く刺激的な化合物が生成', '風味のアクセントとしての素早い焦がし（控えめに使用）'],
      ],
    },
    {
      type: 'title',
      text: 'メイラード反応でよくある失敗とその解決法',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '重曹を入れすぎている',
      html: '重曹は多ければ良いというものではありません。食品1kgあたり1.5gを超えると、金属的、石鹸的、または化学的な後味が生じます。過剰なアルカリ性で生成される風味化合物は、適切なメイラード焼成による豊かで旨味のある風味とは異なります。<strong>計算ツールが表示する推奨量を守ってください。</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: '調理温度が低すぎる',
      html: '110°C未満では、実質的に蒸すか乾燥させているだけで、焼き色はつきません。メイラード反応には最低限の活性化温度があります。深く複雑な風味を求めるなら、<strong>食品の表面が最低140°Cに達する必要があります。</strong>焼く、炙る、180°C以上のオーブンでローストするなど、高温調理法を使ってください。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '水分を無視している',
      html: '水分はメイラード反応の敵です。濡れた表面は水分が蒸発するまで100°Cを超えることができません。焼く前には<strong>必ず食品の水気を完全に拭き取ってください。</strong>重曹は細胞壁を分解して表面水分の蒸発も促進するため役立ちますが、目に見えて濡れた食品を補うことはできません。乾いた表面 = より良い焼き色です。',
    },
    {
      type: 'title',
      text: '完璧な焼き色のためのプロのコツ',
      level: 3,
    },
    {
      type: 'tip',
      title: '重曹スラリーのテクニック',
      html: '乾いた重曹を食品に直接ふりかけてはいけません。均一に分布しません。計量した重曹を大さじ1～2杯のぬるま湯に溶かし、そのスラリーを刷毛で塗るか食品と和えてください。これにより表面全体に均一なアルカリ性が行き渡り、ムラのない一貫した焼き色が得られます。',
    },
    {
      type: 'tip',
      title: '重曹とドライブライニングを組み合わせる',
      html: '重曹と塩は相乗的に作用します。調理の1～24時間前に肉を塩でドライブライニングし、火にかける直前に重曹スラリーを塗ります。塩はメイラード反応に関与するタンパク質を引き出し、重曹は反応を加速します。この組み合わせにより、最も深く豊かなクラストが生まれます。',
    },
    {
      type: 'tip',
      title: '玉ねぎのキャラメル化を時短する裏技',
      html: '重曹をひとつまみ（大玉ねぎ1個あたり0.3g）加えることで、キャラメル化の時間を45分から20分に短縮できます。アルカリ性環境が玉ねぎの細胞壁をより速く分解し、メイラード反応を促進する糖類とアミノ酸を放出します。ただし精密さが重要です。重曹が多すぎると玉ねぎがドロドロになり、化学的な後味が残ります。',
    },
    {
      type: 'title',
      text: '焼き色に関する重要用語集',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'メイラード反応', definition: 'アミノ酸と還元糖の間で起こる非酵素的な化学反応で、調理食品に茶色の色合いと複雑で旨味のある風味をもたらします。110°C以上で発生し、カラメル化とは異なります。' },
        { term: '熱分解（ピロリシス）', definition: '高温（180°C以上）での有機物の熱分解です。メイラード反応による焼き色とは異なり、熱分解では苦く刺激的で、時に発がん性のある化合物が生成されます。これは食品が焦げたときに起こる現象です。' },
        { term: 'pH', definition: '0から14までの尺度で、酸性度（低い）またはアルカリ性度（高い）を測定します。中性は7です。ほとんどの生鮮食品はpH 5.5から6.5の間にあります。重曹はpHをアルカリ性に上昇させ、メイラード反応を加速します。' },
        { term: '炭酸水素ナトリウム', definition: '重曹  -  弱塩基として作用する白色の結晶性粉末（NaHCO₃）です。調理においては、表面pHを上昇させ、焼き色を加速し、肉を柔らかくし、野菜の調理中の色保持を助けます。' },
        { term: 'アルカリ性', definition: '溶液が酸を中和する能力のことです。メイラード反応加速の文脈では、pH 7.0を超える値のことを指します。過剰なアルカリ性は苦く石鹸のような異味を生み出します。' },
        { term: '反応速度倍率', definition: 'メイラード反応が基準値（pH 6）と比較して何倍速く進行するかを示します。倍率x2.0は焼き色が2倍の速さでつくことを意味し、同じ色合いに達するまでの調理時間を実質的に半減させます。' },
        { term: '表面pH', definition: 'メイラード反応が起こる食品のごく表面のpHであり、内部のpHではありません。重曹は短時間の調理では食品の奥深くまで浸透しないため、主に表面pHに影響を与えます。' },
      ],
    },
    {
      type: 'title',
      text: '早見表：よく使う食品の重曹添加量',
      level: 3,
    },
    {
      type: 'summary',
      title: '日常の調理に推奨する重曹の量',
      items: [
        'キャラメル玉ねぎ（大1個）：重曹0.3g  -  45分から約20分に短縮',
        'ローストポテト（500g）：重曹0.4g  -  よりカリッと黄金色の外側に',
        'フライパンステーキ（250g）：重曹0.2g  -  短時間でより濃いクラストに',
        '手羽先（1kg）：重曹0.75g  -  よりパリッとした皮、焼き色も早く',
        'プレッツェル生地（小麦粉500g）：重曹1.5g  -  アルカリ液浸漬で濃い茶色のクラストに',
        'ロースト野菜（1kgミックス）：重曹0.75g  -  より均一なキャラメル化',
      ],
    },
    {
      type: 'paragraph',
      html: '食品ごとに、その自然なpHと水分含有量に基づいた理想的なアルカリ性レベルがあります。この計算ツールは当て推量を排除します。正確な食品重量と温度を入力するだけで、毎回完璧な焼き色のための正確な重曹の量が表示されます。',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
