import type { ToolLocaleContent } from '../../../types';

const title = "머랭 및 계란 동결(머랭) 계산기";
const description = "계란 흰자 무게에 맞춰 프랑스식, 이탈리아식, 스위스식 머랭에 필요한 설탕량을 정확하게 계산합니다. 휘핑 시간과 베이킹 팁까지 확인하세요.";
const faq = [
  {
    question: '설탕과 흰자의 가장 이상적인 비율은 무엇인가요?',
    answer: '제과에서의 황금비율은 1:2입니다. 계란 흰자 1g당 설탕 2g을 사용해야 안정적이고 단단한 구조를 형성할 수 있습니다.',
  },
  {
    question: '머랭이 "단단한 뿔(완성)" 상태인지 어떻게 아나요?',
    answer: '휘퍼를 들어 올렸을 때 머랭 끝이 휘어지지 않고 수직으로 뾰족하게 서 있는 상태가 "단단한 뿔(Dry Peak)"입니다. 또한 머랭에서 광택이 나야 합니다.',
  },
  {
    question: '장식용으로 가장 안정적인 머랭은 무엇인가요?',
    answer: '이탈리아식 머랭이 세 가지 중 가장 안정적입니다. 뜨거운 시럽이 흰자의 단백질을 살짝 익혀주어 열과 시간에 강한 구조를 만들기 때문입니다.',
  },
  {
    question: '팩에 든 살균 흰자액을 사용해도 되나요?',
    answer: '네, 가능합니다. 다만 신선한 흰자보다 거품이 올라오는 데 시간이 조금 더 걸릴 수 있습니다. 안정을 돕기 위해 크림 오브 타르타르나 레몬즙을 몇 방울 넣는 것이 팁입니다.',
  },
];
const howTo = [
  {
    name: '흰자 무게 측정',
    text: '노른자가 섞이지 않도록 주의하며 디지털 저울로 흰자만의 정확한 무게를 잽니다.',
  },
  {
    name: '무게 입력',
    text: '측정한 무게를 계산기에 입력하여 각 머랭 방식별 필요한 설탕량을 확인합니다.',
  },
  {
    name: '방식 선택',
    text: '프랑스식(기본), 이탈리아식(안정), 스위스식(부드러움) 중 만들고자 하는 머랭을 선택합니다.',
  },
  {
    name: '휘핑 및 확인',
    text: '안내된 예상 시간을 참고하여 휘핑하고, 단단한 뿔이 생길 때까지 농도를 체크합니다.',
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
  slug: 'meringue-peak-calculator',
  title,
  description,
  faqTitle: '자주 묻는 질문',
  bibliographyTitle: '참고 문헌',
  ui: {
    whitesLabel: '흰자 무게',
    whitesPlaceholder: '예: 120',
    whitesUnit: 'g',
    typeLabel: '머랭 종류',
    typeFrench: '프랑스식',
    typeItalian: '이탈리아식',
    typeSwiss: '스위스식',
    timesHeading: '예상 휘핑 시간 (중/고속 휘핑 기준)',
    stageSpumado: '잔거품 상태',
    stageSpumadoDesc: '비누 거품 같은 큰 기포가 생기는 단계.',
    stageSoftPeaks: '부드러운 뿔',
    stageSoftPeaksDesc: '끝이 아래로 살짝 휘어지는 단계.',
    stageStiffPeaks: '단단한 뿔',
    stageStiffPeaksDesc: '끝이 뾰족하고 광택이 나는 단계.',
    frenchSugarWhite: '백설탕',
    frenchSugarPowder: '슈가파우더',
    frenchTip: '프랑스식은 가장 일반적이고 쉬우며, 머랭 쿠키 구이에 적합합니다. 생으로 먹기에는 적합하지 않습니다.',
    frenchTime1: '1-2 분',
    frenchTime2: '3-5 분',
    frenchTime3: '7-9 분',
    italianSugarSyrup: '시럽용 설탕',
    italianWater: '물',
    italianTip: '이탈리아식은 가장 안정적입니다. 118°C의 시럽을 부어 만듭니다. 케이크 장식용으로 완벽합니다.',
    italianTime1: '2 분',
    italianTime2: '5 분',
    italianTime3: '10-12 분',
    swissSugarWhite: '백설탕',
    swissMaxTemp: '최고 온도',
    swissTip: '스위스식은 설탕이 녹을 때까지 중탕하여 만듭니다. 버터크림의 베이스 등으로 활용도가 높습니다.',
    swissTime1: '1-2 분',
    swissTime2: '4-6 분',
    swissTime3: '8-10 분',
    invalidWeightError: '올바른 무게를 입력하세요',
  },
  faq,
  howTo,
  bibliography: [
    {
      name: 'Larousse Cocina: 머랭의 종류와 제조법',
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
      text: '완벽한 머랭을 위한 마스터 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>머랭의 뿔</strong>을 제대로 세우는 것은 제과 기술을 프로 수준으로 올리는 기초입니다. 핵심은 흰자 무게에 따른 정확한 설탕 비율입니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1:2',
          label: '흰자:설탕 비율',
          icon: 'mdi:scale-balance',
        },
        {
          value: '118°C',
          label: '이탈리아식 시럽',
          icon: 'mdi:thermometer-high',
        },
        {
          value: '60°C',
          label: '스위스식 중탕',
          icon: 'mdi:beaker-question-outline',
        },
        {
          value: '0%',
          label: '유분 제로',
          icon: 'mdi:close-circle-outline',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '프렌치 머랭',
          icon: 'mdi:baguette',
          description: '가장 간단하지만 안정성은 낮습니다.',
          points: [
            '굽는 머랭(쿠키)에 적합',
            '가볍고 공기층이 많은 식감',
            '반드시 익혀서 섭취',
            '빠른 준비 가능',
          ],
        },
        {
          title: '이탈리안 머랭',
          icon: 'mdi:pizza',
          description: '안정성이 가장 높습니다.',
          highlight: true,
          points: [
            '케이크 장식에 완벽함',
            '시럽으로 익혀 생식 가능',
            '습기에 강하고 형태 유지 우수',
            '밀도 있고 윤기 나는 구조',
          ],
        },
        {
          title: '스위스 머랭',
          icon: 'mdi:cheese',
          description: '중탕으로 가열. 부드러움이 특징.',
          points: [
            '버터크림 베이스로 적합',
            '매우 실키한 질감',
            '충전물(필링)로 우수',
            '양호한 안정성',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: '볼 탈지 팁',
      html: '휘핑을 시작하기 전, 볼을 레몬즙이나 식초로 닦아주세요. 아주 적은 유분이라도 흰자가 올라오는 것을 방해합니다.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
