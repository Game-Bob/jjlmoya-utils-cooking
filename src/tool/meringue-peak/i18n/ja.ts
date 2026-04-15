import type { ToolLocaleContent } from '../../../types';

const title = "メレンゲ・卵白泡立て計算機";
const description = "卵白の重さに合わせて、フランス、イタリア、スイス式の各メレンゲに必要な砂糖の量を正確に計算します。泡立て時間の目安やプロのコツも紹介。";
const faq = [
  {
    question: '砂糖と卵白の理想的な比率は？',
    answer: '製菓における黄金律は1:2の比率です。卵白1gに対して砂糖2gを使用することで、安定したしっかりとした構造を作ることができます。',
  },
  {
    question: '「ツノが立つ（メレンゲの完成）」を見極める方法は？',
    answer: '泡立て器を持ち上げたときに、メレンゲの先端が折れ曲がらずにまっすぐ立つ状態が「しっかりとしたツノ（乾性ピーク）」です。また、表面に強い光沢があることも重要です。',
  },
  {
    question: 'デコレーションに最適なメレンゲはどれですか？',
    answer: 'イタリアンメレンゲが最も安定しています。熱いシロップを加えることで卵白のタンパク質が軽く凝固し、熱や時間経過に強い構造が作られるためです。',
  },
  {
    question: '市販の殺菌済み卵白（液卵）は使えますか？',
    answer: '使用可能ですが、生の卵白よりも泡立つのに時間がかかる傾向があります。安定させるために、ひとつまみのクリーム・オブ・ターター（酒石酸）やレモン汁を数滴加えるのがコツです。',
  },
];
const howTo = [
  {
    name: '卵白の重さを量る',
    text: 'デジタル秤を使用して、黄身が一切混ざらないように卵白のみの正確な重さを量ります。',
  },
  {
    name: '重さを入力',
    text: '量った重さを計算機に入力し、必要な砂糖の量を確認します。',
  },
  {
    name: '手法を選択',
    text: 'フランス式（基本）、イタリア式（安定）、スイス式（なめらか）の中から作るメレンゲの種類を選びます。',
  },
  {
    name: '泡立てて確認',
    text: '目安時間を参考に泡立て、しっかりとしたツノが立つまで硬さをチェックします。',
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
  slug: 'meringue-peak-calculator',
  title,
  description,
  faqTitle: 'よくある質問',
  bibliographyTitle: '参考文献',
  ui: {
    whitesLabel: '卵白の重量',
    whitesPlaceholder: '例: 120',
    whitesUnit: 'g',
    typeLabel: 'メレンゲの種類',
    typeFrench: 'フランス式',
    typeItalian: 'イタリア式',
    typeSwiss: 'スイス式',
    timesHeading: '泡立て時間の目安（中〜高速）',
    stageSpumado: '泡立ち始め',
    stageSpumadoDesc: '石鹸の泡のような大きな気泡の状態。',
    stageSoftPeaks: 'お辞儀するツノ',
    stageSoftPeaksDesc: '持ち上げた時に先端が少し曲がる状態。',
    stageStiffPeaks: 'しっかりしたツノ',
    stageStiffPeaksDesc: 'ツノが立ち、光沢がある状態。',
    frenchSugarWhite: 'グラニュー糖',
    frenchSugarPowder: '粉糖',
    frenchTip: 'フランス式は最も一般的で、焼き菓子（メレンゲクッキー）に最適です。生食には向きません。',
    frenchTime1: '1-2 分',
    frenchTime2: '3-5 分',
    frenchTime3: '7-9 分',
    italianSugarSyrup: 'シロップ用砂糖',
    italianWater: '水',
    italianTip: 'イタリア式は最も安定しています。118℃の熱いシロップで作ります。ケーキのデコレーションに最適です。',
    italianTime1: '2 分',
    italianTime2: '5 分',
    italianTime3: '10-12 分',
    swissSugarWhite: 'グラニュー糖',
    swissMaxTemp: '最高温度',
    swissTip: 'スイス式は湯せんで砂糖を溶かしながら作ります。バタークリームのベースになど汎用性が高いです。',
    swissTime1: '1-2 分',
    swissTime2: '4-6 分',
    swissTime3: '8-10 分',
    invalidWeightError: '有効な重量を入力してください',
  },
  faq,
  howTo,
  bibliography: [
    {
      name: 'Larousse Cocina: メレンゲの種類と作り方',
      url: 'https://laroussecocina.mx/palabra/merengue/',
    },
    {
      name: 'Exploratorium: Egg Science',
      url: 'https://www.exploratorium.edu/explore/cooking/egg-science',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'メレンゲと卵白泡立てのマスターガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>メレンゲのツノ</strong>を極めることは、製菓技術をプロレベルへ引き上げる第一歩です。鍵となるのは、卵白の重量に対する正確な砂糖の比率です。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1:2',
          label: '卵白：砂糖比率',
          icon: 'mdi:scale-balance',
        },
        {
          value: '118°C',
          label: 'イタリア式シロップ',
          icon: 'mdi:thermometer-high',
        },
        {
          value: '60°C',
          label: 'スイス式湯せん',
          icon: 'mdi:beaker-question-outline',
        },
        {
          value: '0%',
          label: '脂質ゼロの徹底',
          icon: 'mdi:close-circle-outline',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'フレンチメレンゲ',
          icon: 'mdi:baguette',
          description: '最もシンプルですが、安定性は低めです。',
          points: [
            '焼き菓子（メレンゲ菓子）に最適',
            '軽やかで空気を含んだ食感',
            '必ず加熱調理が必要',
            '短時間で準備可能',
          ],
        },
        {
          title: 'イタリアンメレンゲ',
          icon: 'mdi:pizza',
          description: '最も安定しており、デコレーションに向きます。',
          highlight: true,
          points: [
            'ケーキのデコレーションに最適',
            'そのまま食べても安全（殺菌済）',
            '湿気に強く、形が崩れにくい',
            '密度が高く光沢がある',
          ],
        },
        {
          title: 'スイスメレンゲ',
          icon: 'mdi:cheese',
          description: '湯せんで加熱。なめらかさが最大の特徴。',
          points: [
            'バタークリームのベースに最適',
            '非常にシルキーな質感',
            'フィリングに優秀',
            '良好な安定性',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: 'ボウルの脱脂が成功の鍵',
      html: '泡立てを始める前に、ボウルを少量の酢やレモン汁を染み込ませたペーパーで拭いてください。わずかな油分でも泡立ちを妨げます。',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
