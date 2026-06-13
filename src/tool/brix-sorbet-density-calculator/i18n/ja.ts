import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'ソルベ Brix 計  機：砂糖と果物の比率・凝固点制御で最高のすくいやすさを';
const description = 'すくいやすいソルベを毎回作るための、砂糖・フルーツピューレ・水の正確なバランスを調整できます。Brix・PAC 凝固点降下を計� - � - 、氷っぽい・水っぽい食感の問題を精密な測定で解決� - ます。';

const faq = [
  {
    question: 'Brix とは何ですか？ソルベにおいてなぜ重要なので� - ょうか？',
    answer: 'Brix（°Bx）は液体溶液中の溶解固形分（主に糖類）の割合を測定する単位です。ソルベでは、25% ～ 30%（理想的には 28%）の Brix レベルが適切な食感に不可欠です。25% 未満では、氷の結晶形成を妨げるのに十分な糖分がないため、ソルベは岩のように硬い氷の塊になります。30% を超えると、凝固点が下がりすぎて、通常の冷凍庫ではソルベが水っぽく固まらない状態になります。',
  },
  {
    question: 'ソルベのレシピに適切な砂糖の量を計� - するにはどうすればよいですか？',
    answer: 'まず、フルーツピューレの重量を量り、屈折計で自然な Brix 値を測定� - ます（または� - リセット値を選択� - ます）。これらを希望のバッチサイズと目標 Brix（デフォルトは 28%）とともに計� - 機に入力� - ます。計� - 機は、全体の混合物を最適な 25% ～ 30% Brix 範囲にするために必要なスクロースと水の量を� - 出� - ます。また、凝固点降下（PAC）も考慮するため、ソルベが硬くなりすぎる場合にデキストロースに置き換えることもできます。',
  },
  {
    question: '自家製ソルベがいつも硬すぎたり氷っぽくなったりするのはなぜですか？',
    answer: '氷っぽく岩のように硬いソルベは、ほとんどの場合、総糖分濃度が低すぎる（25% Brix 未満）ことを意味� - ます。果物中の水分が部分的に液体のままではなく、大きな氷の結晶に凍って� - まいます。解決策：スクロースを追加� - て Brix を上げるか、スクロースの一部をデキストロースに置き換えます。デキストロースは凝固防止力がほぼ 2 倍（PAC 190 vs 100）あり、甘さが 30% 少ないため、ソルベがくどくなることなく凝固点を下げられます。',
  },
  {
    question: 'ソルベにおけるスクロースとデキストロースの使用の違いは何ですか？',
    answer: 'スクロース（砂糖）は PAC 100、POD 100 の標準的な甘味料です。デキストロース（グルコースパウダー）は PAC 190 で、凝固点降下力が約 2 倍ですが、甘さは 70%（POD 70）� - かありません。つまり、デキストロースは甘くなりすぎることなく、1 グラムあたりでより効果的にソルベを柔らかく� - ます。果物がすでに自然に甘い場合（マンゴー、バナナなど）に、甘さを追加せずにより多くの凝固防止力が必要なときにデキストロースを使用� - ます。',
  },
  {
    question: '果物の天然糖分は計� - にどのように影響� - ますか？',
    answer: '果物によって天然糖度は大きく異なります。レモンやライムは約 2% Brix、イチゴは約 8%、マンゴーやブドウは 14% ～ 18%、バナナは最大 22% です。計� - 機は果物の天然 Brix を考慮するため、誤って総糖分濃度を過剰または不足させることがありません。そのため、実際の果物を屈折計で測定することが推奨されます  -  季節変動により Brix が 3 ～ 4 ポイント変動することがあります。',
  },
];

const howTo = [
  {
    name: 'フルーツピューレの重量を量る',
    text: 'フルーツピューレまたはジュースの正確な重量をグラムで測定�  ます。',
  },
  {
    name: '果物の Brix を推定または測定する',
    text: '屈折計を使用�  て果物の正確な Brix を求めるか、データベースから代表的な値を選択�  ます（例：マンゴー 14%、イチゴ 8%）。',
  },
  {
    name: '計� - 機に重量を入力する',
    text: '果物の重量、果物の Brix、目標 Brix レベル（デフォルトは 28%）を入力�  ます。',
  },
  {
    name: '推奨シロッ� - 添加量を確認する',
    text: '計  機は目標 28% Brix に到達するために推奨される砂糖と水の量を即座に表示�  ます。',
  },
  {
    name: '必要に応じて砂糖の種類を調整する',
    text: '混合物の凝固点降下が不十分な場合は、スクロースの代わりにデキストロースを導入�  ます。',
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
  slug: 'brix-sorbet-density-calculator',
  title: 'Brix ソルベ密度計  機',
  description: 'いつでもすくいやすいソルベのために、砂糖・フルーツピューレ・水の正確なバランスを調整。Brix と PAC の精密計� - で氷っぽい・水っぽい食感を修正� - ます。',
  faqTitle: 'よくある質問',
  ui: {
    fruitWeightLabel: 'フルーツピューレの重量',
    fruitBrixLabel: '果物の Brix',
    sugarWeightLabel: 'スクロース（砂糖）の重量',
    dextroseWeightLabel: 'デキストロースの重量',
    waterWeightLabel: '追加水分の重量',
    targetBrixLabel: '目標 Brix',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    brixUnit: '% Bx',
    totalBrixLabel: '総混合 Brix',
    totalWeightLabel: '総バッチ重量',
    totalPACLabel: '凝固点降下 (PAC)',
    statusLabel: 'ソルベ食感� - ロファイル',
    statusSoft: '柔らかすぎ / 水っぽい',
    statusOptimal: '最適なすくいやすさ',
    statusHard: '硬すぎ / 氷っぽい',
    recommendedTitle: 'シロッ� - 推奨（果物 50%）',
    recommendedSugarLabel: '必要なスクロース',
    recommendedWaterLabel: '必要な水',
    fruitPresetLabel: 'フルーツ� - リセット',
    presetCustom: 'カスタムフルーツ',
    presetLemon: 'レモン / ライム (2% Bx)',
    presetStrawberry: 'イチゴ / ラズベリー (8% Bx)',
    presetOrange: 'オレンジ / 桃 (10% Bx)',
    presetMango: 'マンゴー / ブドウ / チェリー (14% Bx)',
    presetBanana: 'バナナ (21% Bx)',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'ソルベ調整の科学：Brix、PAC、固形分',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '� - ロフェッショナルなソルベ作りは食品科学の実践です。乳脂肪やタンパク質を利用� - て構造と柔らかさを生み出すアイスクリームとは異なり、ソルベは完全に溶解糖類と安定剤に依存� - ます。これらの溶解糖類の濃度は Brix 度（°Bx）で測定されます。完璧なソルベの配合には 25% ～ 30% Brix の糖分濃度が必要です。糖分が少なすぎると、水分が大きく針状の氷の結晶に凍り、ザラザラで岩のように硬い塊になります。多すぎると凝固点が下がりすぎて、一般的な家庭用または業務用冷凍庫ではソルベが半液体のシロッ� - 状のままになります。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '28%',
          label: '理想的な目標 Brix',
          icon: 'mdi:target',
        },
        {
          value: '25-30%',
          label: '安全な Brix 範囲',
          icon: 'mdi:gauge',
        },
        {
          value: '≈50%',
          label: '最適な果物比率',
          icon: 'mdi:fruit-grapes',
        },
        {
          value: 'PAC 100/190',
          label: 'スクロース / デキストロース',
          icon: 'mdi:molecule',
        },
      ],
    },
    {
      type: 'title',
      text: 'PAC を理解する：凝固点降下係数',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC（Potere Anticongelante、凝固防止力）は、パティシエが材料が水の凝固点をどれだけ下げるかを定量化するために使用する指標です。スクロース（標準的な砂糖）は PAC 値 100 の基準です。� - か� - 、スクロースは非常に甘いため、甘くなりすぎずにより多くの固形分を追加� - たり凝固防止力を高めたりする必要がある場合は、スクロースの一部をデキストロースに置き換えることができます。デキストロースは PAC 190 で、氷の結晶形成を防ぐ効果がスクロースの約 2 倍あり、甘さはわずか 70% です。',
    },
    {
      type: 'title',
      text: 'スクロース vs デキストロース：ソルベに適  た砂糖の選び方',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'スクロース（砂糖）',
          icon: 'mdi:cube-outline',
          description: 'すべての PAC および POD 計� - の基準となる標準的な甘味料です。クリーンな甘さとコクを提供� - ます。',
          points: [
            'PAC 値：100（基準値）',
            'POD 値：100（完全な甘さ）',
            '最適な用途：主要甘味料',
            'コクと標準的な食感を付与',
          ],
        },
        {
          title: 'デキストロース（グルコースパウダー）',
          icon: 'mdi:grain',
          description: '凝固点降下力が約 2 倍で、甘さが大幅に少ない単糖類です。',
          highlight: true,
          points: [
            'PAC 値：190（スクロースの約 2 倍）',
            'POD 値：70（甘さ 30% 減）',
            '最適な用途：硬いソルベの軟化',
            '果物がすでに非常に甘い場合に最適',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '代表的な果物の Brix 値 参考表',
      level: 3,
    },
    {
      type: 'table',
      headers: ['果物の種類', '平均 Brix 値', '水分含有量', '酸度レベル'],
      rows: [
        ['レモン / ライム', '2% - 4% Bx', '非常に高い', '極めて高い'],
        ['イチゴ / ラズベリー', '7% - 9% Bx', '高い', '中程度'],
        ['オレンジ / 桃', '9% - 11% Bx', '中〜高', '低〜中程度'],
        ['リンゴ / 洋ナシ', '11% - 13% Bx', '中程度', '低い'],
        ['マンゴー / ブドウ / チェリー', '14% - 18% Bx', '中〜低', '非常に低い'],
        ['バナナ', '20% - 22% Bx', '低い', '無視できる程度'],
      ],
    },
    {
      type: 'title',
      text: 'ソルベ配合の調整方法',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ソルベを調整するには、まずフルーツピューレの重量と糖分濃度を測定� - ます。果物の甘さは季節や熟度によって変動するため、精度を高めるには屈折計の使用を強く推奨� - ます。屈折計がない場合は、上記の表を使って推定できます。これらの値が� - られたら、計� - 機に入力� - て、全体の混合物を目標の 28% Brix にするために必要なシロッ� - （水と砂糖）の正確な量を求めます。最適な食感を� - るには、総バッチ重量の約 50% を果物の割合とすることを目指� - てください。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'ソルベが氷っぽい・硬すぎるのはなぜ？',
      html: '岩のように硬く凍るソルベは、ほぼ常に<strong>糖分が少なすぎます</strong>（Brix が 25% 未満）。フルーツピューレ中の水分が大きくギザギザ� - た氷の破片に結晶化� - ます。スクロースを追加� - て総 Brix を上げるか、スクロースの一部をデキストロースに置き換えて甘くなりすぎずに PAC を高めることで修正� - ます。また、果物の割合が高すぎないか（60% を超えると糖固形分の余地が不足� - ます）も確認� - てください。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'ソルベが水っぽい・凍らないのはなぜ？',
      html: '柔らかいまままたはスー� - 状のままのソルベは、<strong>糖分が多すぎます</strong>（Brix が 30% 超）。凝固点が下がりすぎて、冷凍庫で混合物が固まらなくなっています。総糖分入力を減らすか、果物がもともと非常に甘い場合（バナナやマンゴーなど）は追加スクロースを比例的に減ら� - ます。目標温度を確認� - てください：家庭用冷凍庫は −18°C で動作� - ます。−12°C での提供に適� - た PAC は標準的な冷凍庫には高すぎます。',
    },
    {
      type: 'tip',
      title: '屈折計で Brix を正確に測定する',
      html: 'デジタルまたは光学式の屈折計は、一貫� - たソルベを作るための最も優れた投資です。果物の熟度は季節、品種、産地によって劇的に変動� - ます  -  6 月のイチゴが 6°Bx でも、同じ品種の 8 月のものは 10°Bx に達� - ます。ピューレを一滴� - リズムに垂ら� - 、値を読み取り、計� - 機に入力� - ます。表だけで推定すると、一貫性のない結果になります。',
    },
    {
      type: 'title',
      text: 'ステッ  バイステッ  ：この計  機の使い方',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>フルーツピューレの重量を量る</strong>  -  デジタルスケールを使用� - て、漉� - たフルーツピューレまたはジュースの正確な重量をグラムで測定� - ます。',
        '<strong>果物の Brix を測定または推定する</strong>  -  精度を求める場合は屈折計を使用するか、ドロッ� - ダウンから� - リセットを選択� - ます（レモン 2%、イチゴ 8%、マンゴー 14% など）。',
        '<strong>目標 Brix を設定する</strong>  -  デフォルトは理想的な最適値である 28% です。好みに応じて 25% ～ 30% の間で調整� - ます。',
        '<strong>シロッ� - 推奨値を確認する</strong>  -  計� - 機が目標に到達するために必要なスクロースと水の量を即座に表示� - ます。',
        '<strong>食感インジケーターを確認する</strong>  -  PAC メーターが、冷凍庫の温度でソルベが硬すぎるか、最適なすくいやすさか、柔らかすぎるかを示� - ます。',
        '<strong>必要に応じてデキストロースで調整する</strong>  -  ソルベが硬くなると予測されるがすでに十分甘い場合は、スクロースの一部をデキストロースに置き換えて、甘さを追加せずに PAC を高めます。',
      ],
    },
    {
      type: 'title',
      text: 'ソルベ作りの重要用語',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Brix (°Bx)',
          definition: '液体溶液中の溶解固形分（主に糖類）の割合。ソルベでは、25-30°Bx が理想的な食感とすくいやすさの目標範囲です。',
        },
        {
          term: 'PAC（Potere Anticongelante）',
          definition: '凝固防止力  -  材料が水の凝固点をどれだけ下げるかを示す指標。スクロースは基準 PAC 100、デキストロースは 190 です。',
        },
        {
          term: 'POD（Potere Dolcificante）',
          definition: 'スクロース（基準 100）に対する甘味力。デキストロースの POD は 70 で、砂糖と比較� - てグラムあたり 30% 甘さが少ないことを意味� - ます。',
        },
        {
          term: 'デキストロース',
          definition: 'ソルベ配合において、過度な甘さを加えずに凝固点を下げるために使用される単糖類（グルコースパウダー）。PAC 190、POD 70。',
        },
        {
          term: '屈折計',
          definition: 'サン� - ル中の光の屈折（曲がり方）を読み取ることで液体の Brix 値を測定する光学式またはデジタル式の機器。ソルベの一貫性に不可欠です。',
        },
        {
          term: 'シロッ� - ',
          definition: 'スクロースと水を重量比 50/50 で加熱溶解させたもの。ソルベベースに砂糖を添加するための標準的な手段です。',
        },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
