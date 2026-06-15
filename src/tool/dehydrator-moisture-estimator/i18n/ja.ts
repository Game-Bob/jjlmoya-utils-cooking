import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'ディハイドレーター水分量推定ツール';
const description = '食品の乾燥による重量減少、水分の蒸発量、および乾燥時間を予測します。';

const faq = [
  {
    question: '乾燥による重量減少はどのように計算されますか？',
    answer: '重量減少は、食品を固形分と水分に分けて計算します。固形分は変化しないため、目標水分率に基づいて最終重量を算出します。'
  }
];

const howTo = [
  {
    name: '食材またはカスタムの初期水分を選択します',
    text: 'プリセットを選択するか、初期水分値を手動で入力します。'
  }
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'dehydrator-moisture-estimator',
  title,
  description,
  faqTitle: 'よくある質問',
  ui: {
    title: '水分量推定ツール',
    subtitle: '重量の減少と推定乾燥時間を計算します',
    unitSystemLabel: '単位系',
    metricOption: 'メートル法 (g, °C)',
    imperialOption: 'ヤード・ポンド法 (oz, °F)',
    ingredientLabel: '食材プリセット',
    initialMoistureLabel: '初期水分量 (%)',
    targetMoistureLabel: '目標水分量 (%)',
    weightLabel: '初期重量',
    tempLabel: '乾燥温度',
    customOption: 'カスタム / 手動',
    beefOption: 'ビーフジャーキー',
    watermelonOption: '乾燥スイカ',
    appleOption: 'ドライアップル',
    mangoOption: 'ドライマンゴー',
    mushroomOption: 'キノコ類',
    targetWeightLabel: '目標重量',
    waterEvaporatedLabel: '蒸発水分量',
    estimatedHoursLabel: '推定乾燥時間',
    shrinkageLabel: '重量収縮率'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '食品はディハイドレーター（フードドライヤー）でどのくらい軽くなる？乾燥時間と水分量を計算',
      level: 2
    },
    {
      type: 'paragraph',
      html: '<strong>ビーフジャーキー</strong>、<strong>フルーツレザー</strong>、<strong>ドライアップル</strong>、<strong>ドライスイカ</strong>のいずれを作る場合でも、一貫した仕上がりの鍵は水分量を理解することです。食品安全と長期保存は、適切な目標水分量に達するかどうかにかかっています。当店の<strong>ディハイドレーター水分量計算ツール</strong>は、特定の食材や設定に基づいて、仕上がり重量、蒸発水分量、および必要な乾燥時間を予測します。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '70%', label: '肉の初期水分量', icon: 'mdi:food' },
        { value: '92%', label: 'スイカの初期水分量', icon: 'mdi:water' },
        { value: '10%', label: 'ジャーキーの目標値', icon: 'mdi:shield' },
        { value: '55°C', label: '平均乾燥温度', icon: 'mdi:thermometer' }
      ]
    },
    {
      type: 'title',
      text: '乾燥食品の適切な水分量は？',
      level: 2
    },
    {
      type: 'table',
      headers: ['食材', '初期水分量', '目標水分量', '目安時間', '乾燥完了の目安'],
      rows: [
        ['ビーフジャーキー', '70%', '10-15%', '4-8 時間', '硬く、折れ曲がっても割れない'],
        ['アップルリング', '86%', '15-20%', '6-10 時間', 'しなやかで革のような質感、ベタつきがない'],
        ['マンゴースライス', '84%', '15-18%', '6-10 時間', '歯ごたえがあり、目に見える水分がない'],
        ['キノコ類', '92%', '5-8%', '4-8 時間', '脆く、パリッとしている'],
        ['ドライスイカ', '92%', '10-12%', '10-16 時間', '曲げるとパキッと割れる']
      ]
    },
    {
      type: 'title',
      text: '食品乾燥でよくある問題と解決策',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>表面硬化 (Case hardening):</strong> 外側が早く乾きすぎて内部の水分が閉じ込められます。温度を5〜10℃下げ、空気循環を良くしてください。',
        '<strong>保存中のカビ発生:</strong> 水分が十分に下がっていません。計算ツールで目標重量を確認し、水分テストを行ってください。',
        '<strong>乾燥ムラ:</strong> 厚さがバラバラであるか、詰め込みすぎです。均一な厚さにカットし、食材同士の間隔を空けてください。',
        '<strong>乾燥しすぎ・ボロボロになる:</strong> 过乾燥は風味や食感を損ないます。各食材に適した目標水分量を確認しましょう。'
      ]
    },
    {
      type: 'title',
      text: '食品の種類別乾燥温度ガイド',
      level: 3
    },
    {
      type: 'paragraph',
      html: '温度は乾燥速度と食品の品質の両方に影響します。高温は水分を早く蒸発させますが、表面硬化や栄養素の損失、乾燥ムラを引き起こす可能性があります。ディハイドレーターの設定には以下の一般的な基準をご活用ください：'
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '低温（40〜50℃）',
          icon: 'mdi:thermometer',
          description: '酵素、栄養素、繊細な風味を守るのに最適です。',
          points: ['ハーブや葉物野菜', 'キノコ類', 'ローフードの乾燥', '長時間の乾燥が必要']
        },
        {
          title: '中温（50〜60℃）',
          icon: 'mdi:thermometer',
          description: 'ほとんどの果物や野菜に適した標準的な温度帯です。',
          highlight: true,
          points: ['アップルリングやマンゴー', 'ほとんどの野菜', 'フルーツレザー', '速度と品質のバランスが良い']
        },
        {
          title: '高温（60〜70℃）',
          icon: 'mdi:thermometer',
          description: '食品安全の確保が必要なジャーキー（肉類）や密度の高い食品に使用します。',
          points: ['ビーフおよびターキージャーキー', '密度の高い根菜類', '食品安全を最優先', '比較的短い乾燥時間']
        }
      ]
    },
    {
      type: 'tip',
      title: '果物は必ず事前処理を',
      html: 'リンゴ、バナナ、洋ナシは、乾燥前にレモン汁またはアスコルビン酸水溶液に浸すことで、変色を防ぎ色合いを保ちます。'
    },
    {
      type: 'tip',
      title: '乾燥中にトレイを回転させる',
      html: 'ディハイドレーター内には温度の偏りがあります。均一に乾燥させるため、2〜3時間おきにトレイを上下・前後にローテーションしてください。'
    },
    {
      type: 'tip',
      title: '保存前の「コンディショニング」',
      html: '乾燥後は食品を冷まし、密閉容器に1週間入れてなじませます（毎日振る）。もし結露が出たら、追加の乾燥が必要です。'
    },
    {
      type: 'title',
      text: 'ディハイドレーター水分用語集',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: '表面硬化', definition: '食品の表面が早く乾きすぎて硬い殻を作り、内部の水分を閉じ込めて適切な乾燥を妨げる現象。' },
        { term: '水分活性 (aw)', definition: '微生物の繁殖に利用可能な自由水の割合。常温保存可能な乾燥食品は、通常awが0.60未満です。' },
        { term: '水分含有率', definition: '食品全体の重量に対する水分の重量比率。乾燥の進行度や安全基準の確認に用いられます。' },
        { term: '収縮比率', definition: '乾燥後に残る元の重量の割合。仕込み量や保存スペースの計画における重要指標。' }
      ]
    },
    {
      type: 'summary',
      title: '完璧な乾燥のための重要ポイント',
      items: [
        '食材によって初期水分量は大きく異なります（70〜92%）。プリセットを使って正確に見積もりましょう。',
        '目標水分量は食材ごとに異なります：ジャーキーは10%、果物は15〜20%、野菜やキノコは5〜8%。',
        '乾燥温度は速度と品質に影響します。多くの食材で50〜60℃の範囲を使用してください。',
        '表面硬化は食感を台無しにします。70℃を超える温度を避け、良好な空気循環を確保しましょう。',
        '長期保存の前に、必ず1週間コンディショニングを行って水分を均一に分散させてください。'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
