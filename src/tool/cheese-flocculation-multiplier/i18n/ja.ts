import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = '凝乳係数計算ツール';
const description = '自家製チーズ製造においてカードをカットする正確なタイミングを見極めます。凝乳係数法を使用して凝固時間を計算し、水分を制御し、チーズの収量を向上させる無料の計算ツールです。';
const faq = [
  {
    question: 'チーズ製造における凝乳法とは何ですか？',
    answer: '凝乳法は、カードをカットする正確なタイミングを決定するために使用される技術です。レンネット添加から最初のゲル化の兆候（凝乳）までの時間を測定し、チーズのスタイルに応じた特定の係数を掛け合わせます。'
  },
  {
    question: '凝乳点をどのように検出しますか？',
    answer: '最も一般的な方法はボウル法です。レンネットを加えた後、小さく殺菌した軽量のプラスチックボウルをミルクの表面に置きます。1分ごとに軽くたたくか回します。最初は自由に回転します。ミルクがゲル化し始めたためにボウルが回転しなくなったり、動きに抵抗を感じたりした瞬間が凝乳点です。'
  },
  {
    question: 'カードをカットするタイミングがそれほど重要なのはなぜですか？',
    answer: '正しいタイミングでカードをカットすることで、シネレシス（水分損失）を制御します。早すぎるとカードが脆弱になり、脂肪が失われ収量が低下します。遅すぎると硬いカードになり、水分を保持しすぎたり、適切に排出されず、酸っぱく過酸化したチーズになります。'
  },
  {
    question: '凝乳係数とは何ですか？',
    answer: '係数とは、一次凝乳時間に適用してカット前の総凝固時間を計算する数値です。標準的な係数は、2.0x（Parmesanのような乾燥チーズ）から5.0xまたは6.0x（Camembertのような湿潤チーズ）の範囲です。'
  },
  {
    question: '温度とレンネットの強度は凝乳にどのように影響しますか？',
    answer: '高温と強力なレンネットは凝乳を促進し、ミルクがより速くゲル化します。しかし、総カット時間は凝乳時間に直接比例するため、係数法はこれらの変化を自動的に補正し、一貫したカード特性を保証します。'
  }
];

const howTo = [
  {
    name: 'レンネットを加えてタイマーを開始',
    text: 'レンネットをよくかき混ぜたら、すぐに計算ツールでフェーズ1のストップウォッチを開始します。'
  },
  {
    name: 'ボウルテストを実行',
    text: '軽量のプラスチックボウルをミルクの表面に置き、定期的に抵抗を確認します。'
  },
  {
    name: '凝乳点を記録',
    text: 'ボウルが回転やタッピングに抵抗する瞬間に、停止ボタンをクリックして凝乳時間を記録します。'
  },
  {
    name: 'チーズタイプまたは係数を選択',
    text: 'データベースからチーズスタイルを選択するか、カスタム係数を入力します。アプリが合計時間を計算し、カットまでのカウントダウンを開始します。'
  },
  {
    name: '合図でカードをカット',
    text: 'タイマーがゼロになったら、カードは最適な張力に達しています。レシピに指定された通りにカードを立方体にカットします。'
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
} as const;

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
} as const;

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
} as const;

export const content: ToolLocaleContent = {
  slug: 'cheese-flocculation-multiplier',
  title,
  description,
  faqTitle: 'よくある質問',
  ui: {
    title: '凝乳係数計算ツール',
    subtitle: '実際のゲル化挙動に基づいて完璧なカードカットのタイミングを見つける',
    flocculationLabel: '一次凝乳時間（分:秒）',
    multiplierLabel: '凝乳係数',
    cheeseTypeLabel: 'チーズスタイルプリセット',
    totalCoagulationLabel: '総凝固時間',
    timeRemainingLabel: 'カットまでの残り時間',
    flocculationTimeLabel: '凝乳時間',
    moistureLabel: '予想カード水分保持率',
    customOption: 'カスタム係数',
    startTimer: 'レンネットタイマー開始',
    markFlocculation: '凝乳を記録',
    resetTimer: 'タイマーリセット',
    warningTitle: 'レンネット品質警告',
    warningText: '記録された凝乳時間が異常に短いです。これは過剰なレンネット投与量または不適切な温度設定を示している可能性があり、ゴムのような食感や苦味を引き起こす可能性があります。',
    phase1Title: 'フェーズ1: レンネット添加と凝乳',
    phase2Title: 'フェーズ2: 凝固カウントダウン',
    phaseComplete: 'カードをカットする準備ができました！',
    statusWaiting: 'レンネットを攪拌中...',
    statusFlocculated: '凝乳を検出',
    statusCoagulating: '凝固中...',
    statusReady: 'カット準備完了',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'カードをカットするタイミング: 毎回完璧なチーズのための凝乳係数法',
      level: 2
    },
    {
      type: 'paragraph',
      html: '<strong>"いつカードをカットすべきか？"</strong> または <strong>"カードができたかどうかをどうやって知るか？"</strong> と自問したことがあるなら、答えは凝乳係数法にあります。固定タイマーに頼る工業的なチーズ製造とは異なり、自家製チーズ職人はミルクが最初にゲル化し始める瞬間（凝乳点）を測定し、その時間をスタイル固有の係数で掛けます。これにより、ミルクの酸性度、カルシウムレベル、温度、レンネットの強さというすべての変数を単一の測定値に取り込むことができます。当社の <strong>凝乳係数計算ツール</strong> が計算処理を行うので、毎回完璧なタイミングでカットできます。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2.0x', label: 'ハードチーズ', icon: 'mdi:cheese' },
        { value: '3.0x', label: 'セミハードチーズ', icon: 'mdi:cheese' },
        { value: '5.0x', label: 'ソフトチーズ', icon: 'mdi:cheese' },
        { value: '10-15m', label: '標準的な凝乳時間', icon: 'mdi:timer-outline' }
      ]
    },
    {
      type: 'title',
      text: '凝乳法で解決する一般的なチーズ製造の問題',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>不統一なカードの硬さ:</strong> 固定タイマーはミルクのバッチごとのばらつきを考慮できません。凝乳法は実際のミルクの化学的特性に適応します。',
        '<strong>低いチーズ収量:</strong> 早すぎるまたは遅すぎるカットは脂肪とタンパク質の損失を引き起こします。係数法は最適な保持のための正確なタイミングを狙います。',
        '<strong>誤った水分含有量:</strong> ハードチーズは乾燥したカードを必要とし、ソフトチーズは湿ったカードを必要とします。異なる係数（2.0xから6.0x）がシネレシスを直接制御します。',
        '<strong>変動するレンネット活性:</strong> レンネットの強さは時間の経過やブランド間で変化します。凝乳時間の計測は、現在のバット内の実際の活性を捉えます。'
      ]
    },
    {
      type: 'title',
      text: 'ボウルテストの実行方法: ステップバイステップ',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'ボウルテストは、特別な器具を使わずに凝乳を検出する最も簡単な方法です。レンネットを加えてよくかき混ぜた後、小さな殺菌済みのプラスチックボウルまたはボトルキャップをミルクの表面に置きます。30〜60秒ごとに軽くたたくか回します。ミルクが液体の間はボウルは自由に動きます。動きに抵抗を示した瞬間があなたの <strong>凝乳点</strong> です。この時間を記録して、上の計算ツールに入力してください。'
    },
    {
      type: 'tip',
      title: 'ボトルキャップを使用して感度を高める',
      html: '軽量のプラスチックボトルキャップはボウルよりも感度が高く、より明確な停止点を示します。使用前に沸騰したお湯で2分間殺菌し、レンネットを加えた瞬間からミルクの表面に浮かべておいてください。'
    },
    {
      type: 'tip',
      title: '温度を安定に保つ',
      html: '凝乳時間は温度に大きく依存します。わずか2Cの低下で凝乳時間が2倍になることがあります。凝固フェーズ全体を通じて、ミルクの温度を安定に保ってください（通常、チーズのスタイルに応じて30〜35C）。'
    },
    {
      type: 'tip',
      title: '非常に速い凝乳に注意',
      html: '凝乳が8分（480秒）未満で発生した場合、レンネットを入れすぎたか、ミルクの温度が高すぎる可能性があります。これにより、ゴムのような食感や苦味が生じることがあります。計算ツールは、これが発生した場合に警告します。'
    },
    {
      type: 'title',
      text: 'チーズタイプ別の凝乳係数リファレンス',
      level: 2
    },
    {
      type: 'table',
      headers: ['チーズスタイル', '係数', '予想水分量', 'カット時の硬さ', '熟成の可能性'],
      rows: [
        ['Parmesan, Grana', '2.0x', '非常に低い', '非常に硬い', '12ヶ月以上'],
        ['Mozzarella（フレッシュ）', '2.0x', '非常に高い', '柔らかい/伸びる', 'フレッシュのみ'],
        ['Swiss, Alpine', '2.5x', '低い', '硬い', '6〜12ヶ月'],
        ['Cheddar, Gouda', '3.0x', '中程度〜低い', '硬い/弾力がある', '3〜12ヶ月'],
        ['Blue Cheese', '3.5x〜4.0x', '中程度', '柔らかい', '2〜6ヶ月'],
        ['Camembert, Brie', '5.0x', '高い', '非常に柔らかい', '3〜8週間'],
        ['Lactic / Fresh Chevre', '5.0x〜6.0x', '非常に高い', 'デリケート', 'フレッシュ〜2週間']
      ]
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '低い係数（2.0x〜2.5x）',
          icon: 'mdi:cheese',
          description: '低い水分保持を必要とする硬く乾燥したチーズに使用されます。',
          highlight: false,
          points: ['MozzarellaとParmesan: 2.0x', 'Alpineスタイル: 2.5x', '速いホエイ排出', '密度が高く熟成に適したカード']
        },
        {
          title: '中間の係数（3.0x〜4.0x）',
          icon: 'mdi:cheese',
          description: '水分と酸性度のバランスを取るセミハードチーズの標準範囲。',
          highlight: true,
          points: ['CheddarとGouda: 3.0x', 'ブルーチーズ: 3.5x〜4.0x', 'バランスの取れたホエイ排出', '柔軟な熟成の可能性']
        },
        {
          title: '高い係数（5.0x〜6.0x）',
          icon: 'mdi:cheese',
          description: '柔らかくクリーミーな高水分チーズに使用されます。',
          highlight: false,
          points: ['CamembertとBrie: 5.0x', 'Lacticと柔らかい白カビチーズ', '高い水分保持', 'デリケートでクリーミーなペーストの形成']
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'トラブルシューティング: カードが適切に固まっていない3つの兆候',
      html: '<strong>6分未満での凝乳:</strong> レンネットが多すぎるか、ミルクが熱すぎます。次回はレンネットを25%減らしてください。 <strong>凝乳に25分以上かかる:</strong> レンネットが期限切れか、ミルクが冷たすぎるか、カルシウム含有量が低すぎます。塩化カルシウムを加えてください。 <strong>カット時にカードがぬるぬるまたはもろい:</strong> チーズスタイルに対して係数が高すぎるか低すぎる可能性があります。0.5x刻みで調整してください。'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'ハードチーズ（Parmesan, Alpine）',
      html: '<strong>2.0x〜2.5xの係数</strong> を使用します。最大限のホエイ排出のために早めにカードをカットします。これらのカードはゲルがまだ比較的 fragile なうちにカットされ、長期熟成に理想的な密度の高い乾燥カードを生成します。計算ツールはより短い総凝固時間を表示します。'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'セミハードチーズ（Cheddar, Gouda）',
      html: '<strong>3.0xの係数</strong> を使用します。ほとんどの自家製チーズ製造の標準範囲です。水分保持とホエイ排出のバランスを取ります。カードは弾力性があり、きれいに切れます。ほとんどのチーズレシピがこのカテゴリに該当します。'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'ソフトチーズ（Camembert, Brie）',
      html: '<strong>5.0x〜6.0xの係数</strong> を使用します。カットする前にゲルを大幅に強化させます。これによりカード内に水分が閉じ込められ、白カビチーズに特徴的なクリーミーでスプレッダブルな食感が生まれます。保持されたホエイを失わないように、カードを優しく扱ってください。'
    },
    {
      type: 'title',
      text: 'チーズ製造用語集',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: '凝乳点', definition: 'ミルクタンパク質が凝集し始めて柔らかいゲルを形成するチーズ製造プロセスの瞬間。' },
        { term: 'レンネット', definition: 'ミルクを凝固させ、固形物（カード）と液体（ホエイ）に分離するために使用される酵素複合体（主にキモシン）。' },
        { term: 'シネレシス', definition: 'ゲルからの液体の抽出または排出。例えば、チーズカードからホエイが排出されること。' },
        { term: '凝固時間', definition: 'レンネット添加からカードがカット可能になるまでの総時間。' }
      ]
    },
    {
      type: 'summary',
      title: '完璧なカードカットのための重要ポイント',
      items: [
        'ボウルテストを使用して凝乳時間を正確に測定し、上の計算ツールに入力してください。',
        'チーズスタイルに合った係数を選択: ハードチーズは2.0x、セミハードは3.0x、ソフトチーズは5.0x。',
        '凝固中はミルクの温度を安定に保ってください。わずか2Cの変化でも凝乳時間が大幅に変わります。',
        '凝乳が8分未満の場合は、次回はレンネットを減らしてください。25分を超える場合はレンネットの鮮度を確認してください。',
        '計算ツールが計算を処理するので、技術と一貫性に集中できます。'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
