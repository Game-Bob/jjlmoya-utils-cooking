import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "麹接種・加水計算ツール";
const description = "自宅で麹を作るための最適な水分量、胞子接種量、培養温度を計算します。失敗したバッチを避けるための無料の麹接種・加水計算ツールです。";
const faq = [
  {
    question: "麹基質を調理する際の目標水分量は？",
    answer: "麹を接種する際の蒸し米または大麦の理想的な総水分量は30%から35%です。これは蒸し重量が初期乾燥重量の約1.35倍から1.40倍に相当します。"
  },
  {
    question: "どのくらいの胞子粉末（タネ麹）が必要ですか？",
    answer: "標準的な接種率は、乾燥基質1kgあたり標準胞子ミックス1gです。濃縮胞子を使用する場合はより少なく（0.5g）、希釈ミックスを使用する場合はより多く（2.0g）必要です。"
  },
  {
    question: "麹培養中に温度管理が重要なのはなぜですか？",
    answer: "Aspergillus oryzaeは28Cから34Cの間で最適に成長します。温度が38Cを超えると、カビが過熱して成長が止まったり、望ましくない緑色や黒色の胞子を生成したりする可能性があります。20C以下では成長が大幅に遅くなります。"
  },
  {
    question: "発熱相では何が起こりますか？",
    answer: "培養開始から18～24時間後、麹は急速に成長し始め、自身で熱を発生します。この発熱ピーク時には、基質を攪拌し、インキュベーターの加熱を下げて過熱を防ぐ必要があります。"
  }
];

const howTo = [
  {
    name: "乾燥基質の重量を入力",
    text: "米または大麦の初期乾燥重量を入力して、目標加水閾値を設定します。"
  },
  {
    name: "蒸し重量を記録",
    text: "調理後の実際の蒸し重量を入力します。計算機が水分率を算出し、30-35%の理想範囲内にあるかどうかを確認します。"
  },
  {
    name: "胞子投与量を計算",
    text: "胞子の効力（標準、濃縮、または希釈）を選択して、接種に必要な胞子粉末の正確な重量を求めます。"
  },
  {
    name: "培養パラメータを監視",
    text: "温度と相対湿度を調整して菌糸の成長をシミュレートし、48時間の熱カーブタイムラインを確認します。"
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
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
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0' as const, priceCurrency: 'EUR' as const },
};

export const content: ToolLocaleContent = {
  slug: 'koji-inoculation-calculator',
  title: '麹接種・加水計算ツール',
  description: '自宅で麹を作るための最適な水分量、胞子接種量、培養温度を計算します。失敗したバッチを避けるための無料の麹接種・加水計算ツールです。',
  faqTitle: 'よくある質問',
  ui: {
    title: '麹接種分析ツール',
    subtitle: '固体麹発酵パラメータの最適化',
    dryWeightLabel: '乾燥基質重量',
    steamedWeightLabel: '実際の蒸し重量',
    targetRangeLabel: '目標蒸し重量範囲',
    moistureLabel: '現在の水分量',
    potencyLabel: '胞子の効力',
    standardPotency: '標準胞子',
    concentratedPotency: '濃縮',
    dilutedPotency: '希釈ミックス',
    sporeDosageLabel: '胞子投与量',
    tempLabel: 'インキュベーター温度',
    humidityLabel: '相対湿度',
    statusIdeal: '理想的な培養',
    statusSlow: '成長が遅い',
    statusInhibited: '抑制 / 低温',
    statusOverheating: '過熱 / 胞子形成',
    timelineTitle: '48時間熱培養サイクル',
    stage1Name: '0-18h: 加温',
    stage2Name: '18-36h: 発熱ピーク',
    stage3Name: '36-48h: 成熟'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '麹の作り方: Aspergillus Oryzaeに最適な水分、胞子投与量、温度',
      level: 2
    },
    {
      type: 'paragraph',
      html: '自宅で麹を作るには、<strong>基質の加水</strong>、<strong>胞子接種密度</strong>、<strong>培養温度管理</strong>の3つが重要です。これらのいずれかが間違っていると、バッチが過熱したり、接種に失敗したり、間違ったカビが生えたりする可能性があります。当社の<strong>麹接種計算ツール</strong>は、入力内容に基づいて目標蒸し重量、正確な胞子投与量、リアルタイムの培養ステータスを計算し、推測作業を排除します。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '30-35%',
          label: '目標水分量',
          icon: 'mdi:water-percent'
        },
        {
          value: '1 g/kg',
          label: '標準胞子率',
          icon: 'mdi:seed-outline'
        },
        {
          value: '28-34 C',
          label: '理想的な温度',
          icon: 'mdi:thermometer'
        },
        {
          value: '48 h',
          label: '総培養時間',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: '水分含有量が麹の品質を左右する理由',
      level: 2
    },
    {
      type: 'paragraph',
      html: '麹栽培を成功させるための最も重要な要素は<strong>基質の水分</strong>です。米や大麦を蒸すと、デンプン粒子が糊化して水分を吸収し、Aspergillus oryzaeが生成する酵素が利用できるようになります。理想的な水分範囲は<strong>30%から35%</strong>と狭いです。30%未満では菌糸が成長に十分な水分を引き出せず、酵素生産が停止します。35%を超えると穀粒がべたついて凝集し、空気の多孔性が低下して好気性カビが窒息します。'
    },
    {
      type: 'list',
      items: [
        '<strong>乾燥しすぎ（30%未満）:</strong> 菌糸の成長が阻害され、酵素生産が低下し、麹が穀粒に完全にコロニーを形成することがありません。',
        '<strong>湿りすぎ（35%超）:</strong> 穀粒がくっつき、空気の隙間がなくなり、細菌や望ましくないカビがAspergillus oryzaeよりも優勢になる可能性があります。',
        '<strong>目標範囲（30-35%）:</strong> 穀粒は固く、一粒一粒が簡単に分離し、菌糸が48時間以内に均一に広がります。',
        '<strong>測定方法:</strong> 乾燥穀物の重量を量り、蒸してから再度重量を量ります。計算機はこれら2つの数値から正確な水分率を計算します。'
      ]
    },
    {
      type: 'table',
      headers: ['穀物の種類', '乾燥重量', '目標蒸し重量', '浸漬時間', '蒸し時間'],
      rows: [
        ['白米（短粒種）', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['白米（長粒種）', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['押麦', '1000 g', '1350-1400 g', '4-8 h', '40-50 min'],
        ['玄米', '1000 g', '1350-1400 g', '8-12 h', '45-60 min']
      ]
    },
    {
      type: 'title',
      text: '胞子接種: どれだけのタネ麹が必要ですか？',
      level: 2
    },
    {
      type: 'paragraph',
      html: '接種密度は、カビが基質にコロニーを形成する速さと、コンタミに対する競争力に直接影響します。標準的な割合は<strong>乾燥基質1kgあたり胞子ミックス1g</strong>ですが、これは胞子の種類によって異なります。'
    },
    {
      type: 'proscons',
      title: '胞子の種類の選択',
      items: [
        {
          pro: '標準胞子は最も一般的な形式で、初心者に寛容で、自家醸造の文献でよく文書化されています。',
          con: 'バッチあたりの粉末量が多く、接種に寄与しない充填剤が含まれる可能性があります。'
        },
        {
          pro: '濃縮胞子は同じ接種に半分の粉末を使用し、純度が高く、大量バッチに経済的です。',
          con: '過剰投与しやすく、精密な秤（0.01 g分解能）が必要で、過小投与時のエラー許容範囲が狭くなります。'
        },
        {
          pro: '希釈ミックスは大きな表面に均一に分散しやすく、不均一な混合に寛容で、目に見える被覆を好む初心者に適しています。',
          con: 'バッチあたりより多くの粉末を使用し、充填剤から余分なデンプンが混入する可能性があります。'
        }
      ]
    },
    {
      type: 'title',
      text: '発熱カーブ: 麹が自身で熱を発生する理由',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Aspergillus oryzaeがデンプンを消費して単糖に変換する際、代謝熱を発生します。培養の<strong>18時間から36時間</strong>の間で生物学的活動がピークに達し、インキュベーターの周囲温度より5-10C高い穀床温度を発生させる発熱サージを生成します。'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '麹が過熱している兆候',
      html: '穀床温度が<strong>38C</strong>を超えると、カビの酵素が変性し始め、真菌は生殖モードに切り替わり、<strong>緑色または黒色の胞子</strong>を生成します。バッチは甘くて栗のような香りではなく、アンモニアのような臭いがします。直ちに基質を攪拌し、インキュベーター温度を34C以下に下げる必要があります。'
    },
    {
      type: 'tip',
      title: '12時間ごとのターンスケジュール',
      html: '18時間目から、穀床をほぐして12時間ごとに攪拌します。これにより、閉じ込められた熱が放出され、水分が再分配され、菌糸が新鮮な酸素にアクセスできるようになります。清潔で消毒した手または滅菌スプーンを使用してください。'
    },
    {
      type: 'tip',
      title: '湿度も重要',
      html: '培養中は相対湿度を<strong>65%</strong>以上に保ってください。40%未満では基質が乾燥して成長が止まります。90%を超えると結露が穀粒表面の細菌増殖を促進する可能性があります。'
    },
    {
      type: 'tip',
      title: '自分の鼻を信じる',
      html: '健康な麹は甘く焼けた栗や新鮮なキノコのような香りがします。アンモニア、酸っぱさ、腐敗臭を検出した場合、バッチが過熱または汚染された可能性があります。影響を受けた穀粒を直ちに取り除き廃棄してください。'
    },
    {
      type: 'card',
      icon: 'mdi:rice',
      title: '日本酒と味噌作り',
      html: '麹を接種した米は<strong>日本酒</strong>、<strong>味噌</strong>、<strong>甘酒</strong>の基礎です。正確な水分管理により、デンプンから糖への変換に適切な酵素開発が保証されます。'
    },
    {
      type: 'card',
      icon: 'mdi:soy-sauce',
      title: '醤油とタマリ',
      html: '<strong>大豆</strong>または大豆と小麦のブレンドで育てた麹が、うま味豊かな醤油を生成する発酵を促進します。一定の温度により異味を避けられます。'
    },
    {
      type: 'card',
      icon: 'mdi:shaker-outline',
      title: '塩麹とガルム',
      html: '<strong>塩麹</strong>（塩発酵麹）や<strong>ミートガルム</strong>は完全にコロニーを形成した穀粒に依存します。当計算ツールは、接種前に基質が理想的な水分範囲にあることを保証します。'
    },
    {
      type: 'title',
      text: '麹培養用語集',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'タネ麹',
          definition: '蒸し穀物に接種するための胞子粉末。通常はAspergillus oryzaeの胞子を米粉などのデンプンキャリアと混合したもの。'
        },
        {
          term: '発熱相',
          definition: '培養18時間から36時間の間に、Aspergillus oryzaeが代謝熱を十分に発生して穀床温度を周囲温度より上昇させる期間。'
        },
        {
          term: '糊化',
          definition: '水の存在下でデンプンを加熱し、顆粒を膨潤させてカビが生成するアミラーゼ酵素が利用できるようにするプロセス。'
        },
        {
          term: '胞子形成',
          definition: 'カビが栄養成長から生殖モードに切り替わり、緑色または黒色に変わること。これは38C以上の熱ストレスによって引き起こされ、料理用としてのバッチを台無しにする。'
        }
      ]
    },
    {
      type: 'summary',
      title: '完璧な麹のための重要ポイント',
      items: [
        '蒸した穀物の水分を30-35%に目標設定。計算ツールを使用して正確な目標蒸し重量を見つけてください。',
        '標準胞子は1 g/kg、濃縮胞子は0.5 g/kg、希釈ミックスは2 g/kgで接種してください。',
        '培養中は28-34C、湿度65%以上を維持。18時間経過後は12時間ごとに攪拌してください。',
        '18-36時間の発熱ピークに注意。温度が38Cを超えた場合は直ちに攪拌し、加熱を下げてください。',
        '感覚を信じて: 甘い栗の香り = 良い麹。アンモニアや酸っぱい臭い = 過熱または汚染。'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
