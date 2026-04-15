import type { ToolLocaleContent } from '../../../types';

const title = "스마트 프라이팬 선택기: 조리 도구 가이드";
const description = "요리 스타일에 맞춰 가장 적합한 팬이나 냄비를 선택하기 위한 인터랙티브 가이드. 주물 vs 스테인리스 vs 테플론. 나에게 완벽한 도구를 찾아보세요.";
const faq = [
  {
    question: '데일리로 사용하기 가장 좋은 팬은 무엇인가요?',
    answer: '대부분의 경우 고품질 스테인리스 팬이나 시즈닝이 잘 된 무쇠 팬(주물)이 가장 좋습니다. 스테인리스는 다재다능하고 반영구적이며, 무쇠는 화학 물질 없이 천연 비점착성을 제공합니다.',
  },
  {
    question: '왜 스테인리스 팬에 음식이 눌어붙나요?',
    answer: '대개 온도가 충분하지 않거나 음식을 너무 일찍 넣었기 때문입니다. "라이덴프로스트 효과"를 시도해 보세요. 물방울이 구슬처럼 굴러갈 때까지 팬을 예열하면 준비가 된 것입니다.',
  },
  {
    question: '내 팬이 안전한지 어떻게 알 수 있나요?',
    answer: '"PFOA 프리" 라벨을 확인하세요. 무쇠, 탄소강, 스테인리스 스틸은 시간이 지나도 마모되는 코팅이 없기 때문에 가장 안전하고 내구성이 뛰어난 선택입니다.',
  },
  {
    question: '팬을 "시즈닝(길들이기)"한다는 것은 무슨 뜻인가요?',
    answer: '금속(무쇠나 탄소강) 표면에 중합된 오일 막을 형성하는 과정입니다. 이는 녹을 방지하고 사용할수록 좋아지는 천연 비점착 표면을 만들어줍니다.',
  },
  {
    question: '좋은 팬에 얼마를 투자해야 할까요?',
    answer: '중상급 품질의 팬 2~3개 세트(스테인리스나 주물)는 20년 이상 사용할 수 있습니다. 2년마다 교체해야 하는 저렴한 팬을 5번 사는 것보다 좋은 팬 하나에 투자하는 것이 경제적입니다. 양보다 질이 중요합니다.',
  },
];
const howTo = [
  {
    name: '요리 스타일 선택',
    text: '강불(시어링), 섬세한 요리(계란), 찜/조림(슬로우 쿠킹) 또는 빠른 요리 중에서 선택하세요. 스타일마다 필요한 사양이 다릅니다.',
  },
  {
    name: '이상적인 소재 선택',
    text: '당신의 스타일에 맞춰 무쇠, 스테인리스, 구리 또는 테플론 중에서 최적의 소재를 추천해 드립니다.',
  },
  {
    name: '특징 확인',
    text: '장단점, 관리법 및 내구성을 이해하세요. 그다음 예산과 필요에 맞는 특정 팬을 선택하세요.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
};

export const content: ToolLocaleContent = {
  slug: 'cookware-guide',
  title: '스마트 프라이팬 선택기: 조리 도구 가이드',
  description: '요리 스타일에 맞춰 가장 적합한 팬이나 냄비를 선택하기 위한 인터랙티브 가이드. 주물 vs 스테인리스 vs 테플론. 나에게 완벽한 도구를 찾아보세요.',
  faqTitle: '자주 묻는 질문',
  faq,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    {
      name: 'The Flavor Bible - Pairing, and Progress in Food',
      url: 'https://www.flavorprints.com/',
    },
    {
      name: 'On Food and Cooking - Harold McGee',
      url: 'https://www.foodscience.org/',
    },
    {
      name: 'Salt Fat Acid Heat - Samin Nosrat',
      url: 'https://www.saltfatacidheat.com/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: '프라이팬 소재: 과학과 실제',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '모든 프라이팬이 같지는 않습니다. 소재마다 열전도율과 열보존력이 다르며 식재료와의 반응도 다릅니다. 이러한 차이를 이해하는 것이 올바른 도구를 선택하는 핵심입니다.',
    },
    {
      type: 'title',
      text: '무쇠(주물): 변치 않는 클래식',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>장점:</strong> 뛰어난 열 보존력, 균일한 열 분배, 천연 비점착성(시즈닝 시), 수 세기 동안 사용 가능. <strong>단점:</strong> 무거움, 관리가 필요함, 녹슬 수 있음, 예열에 시간이 걸림, 산성이 강한 식재료의 장시간 조리에는 부적합.',
    },
    {
      type: 'title',
      text: '스테인리스 스틸: 만능 도구',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>장점:</strong> 내구성이 높음, 관리가 쉬움, 산성(와인, 토마토)에 강함, 세척이 용이함, 다목적 사용 가능, 비교적 저렴함. <strong>단점:</strong> 천연 비점착성이 없음, 예열 기술이 필요함, 열 분배가 고르지 않을 수 있음(다층 구조 제품 권장).',
    },
    {
      type: 'title',
      text: '테플론/넌스틱: 압도적인 편의성',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>장점:</strong> 즉각적인 비점착성, 요리가 쉬움, 세척이 간편함, 저렴함. <strong>단점:</strong> 시간과 열에 의해 마모됨, 3~5년마다 교체 필요, 고온 조리(260°C 이상) 시 위험할 수 있음.',
    },
  ],
  ui: {
    cookingStyle: '평소에 어떻게 요리하시나요?',
    material: '소재 종류',
    highHeat: '강불',
    sear: '시어링 / 볶음',
    delicate: '섬세함',
    fry: '계란 / 오믈렛',
    stew: '조림/찜',
    slowCook: '슬로우 쿠킹',
    fast: '빠르게',
    quick: '간편 요리',
    recommendation: '추천',
    characteristics: '특징',
    castIron: '무쇠 (주물)',
    stainlessSteel: '스테인리스',
    carbon: '탄소강',
    copper: '구리',
    nonstick: '넌스틱 (테플론)',
    advantages: '장점',
    disadvantages: '단점',
    maintenance: '관리',
    durability: '내구성',
    heatRetention: '열 보존력',
    price: '가격',
    step1: '평소에 어떻게 요리하시나요?',
    step2: '관리 수준',
    maintenanceLazy: '낮음 / 없음',
    maintenanceLazyDesc: '복잡한 세척 과정 없이 편리한 사용.',
    maintenanceCare: '중간',
    maintenanceCareDesc: '일반적인 손세척.',
    maintenanceRitual: '의식 (높음)',
    maintenanceRitualDesc: '도구를 길들이는 과정을 즐김.',
    idealPan: '당신의 이상적인 팬',
    selectOptions: '옵션을 선택하세요',
    seeRecommendation: '추천 결과를 보려면',
    pro: '장점',
    con: '단점',
    masterTip: '전문가 팁',
    defaultTip: '시어링용 스테인리스 팬과 계란용 넌스틱 팬을 갖추는 것이 효율적인 주방의 기본입니다.',
    stainlessName: '스테인리스',
    stainlessTag: '프로급의 올라운더',
    stainlessPro: '영구적이고 반응하지 않음. 완벽한 시어링.',
    stainlessCon: '눌어붙지 않으려면 예열 기술(온도 조절)이 필요함.',
    stainlessTip: '라이덴프로스트 효과: 물방울이 구슬처럼 굴러가면 팬이 준비된 것입니다.',
    nonstickName: '넌스틱 (코팅)',
    nonstickTag: '최고의 편리함',
    nonstickPro: '무엇도 눌어붙지 않음. 매우 쉬운 세척.',
    nonstickCon: '수명이 짧음 (2~3년). 강불 사용 금지.',
    nonstickTip: '항상 손세척하고 나무나 실리콘 도구를 사용하면 수명을 두 배로 늘릴 수 있습니다.',
    castironName: '무쇠 (주물)',
    castironTag: '시대를 초월한 클래식',
    castironPro: '놀라운 열 보존력. 영구적 사용.',
    castironCon: '매우 무거움. 주기적인 시즈닝이 필요함.',
    castironTip: '달궈지는 데 오래 걸리지만 한 번 달궈지면 장갑차와 같습니다. 스테이크에 최적.',
    carbonName: '탄소강',
    carbonTag: '불 위의 민첩함',
    carbonPro: '스테인리스처럼 가볍고 무쇠 같은 성능.',
    carbonCon: '습기가 남으면 녹슬 수 있음. 빈티지한 미학.',
    carbonTip: '검게 변하고 거칠어질수록 더 잘 작동합니다. 최고의 웍이 가진 비밀입니다.',
    enamelName: '에나멜 무쇠',
    enamelTag: '고품격 품질',
    enamelPro: '슬로우 쿠킹에 최적. 아름다운 디자인.',
    enamelCon: '가격이 매우 높음. 에나멜 코팅은 충격에 취약함.',
    enamelTip: '장시간 끓이는 요리에 완벽합니다. 에나멜 코팅 덕분에 산성 재료(토마토) 요리도 문제없습니다.',
  },
  schemas: [faqSchema, howToSchema, appSchema],
};
