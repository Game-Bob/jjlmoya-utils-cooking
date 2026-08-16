import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "루(Roux)와 마더 소스 마스터 가이드";
const description = "대화형 루 계산기. 베샤멜, 벨루테, 에스파뇰을 정확한 비율로 만드는 방법을 배워보세요. 클래식 프랑스 요리의 기초입니다.";
const faq = [
    {
      question: '루(Roux)란 무엇이며 어디에 쓰이나요?',
      answer: '지방(주로 버터)과 밀가루를 약불에서 함께 볶은 혼합물입니다. 베샤멜이나 벨루테 같은 프랑스 마더 소스의 농도를 조절하는 기본 증점제로 사용됩니다.',
    },
    {
      question: '루의 이상적인 비율은 얼마인가요?',
      answer: '무게 기준으로 1:1이 표준입니다. 예를 들어 버터 50g에 밀가루 50g을 넣습니다. 이 양은 원하는 농도에 따라 약 1리터의 액체를 걸쭉하게 만들 수 있습니다.',
    },
    {
      question: '루의 종류에 따른 차이점은 무엇인가요?',
      answer: '화이트 루는 2-3분(베샤멜), 블론드 루는 5-8분(벨루테), 브라운 루는 15-20분(에스파뇰) 정도 볶습니다. 색이 진해질수록 견과류 향이 강해지지만 걸쭉하게 만드는 힘은 약해집니다.',
    },
    {
      question: '덩어리(응어리)가 생기지 않게 하려면 어떻게 하나요?',
      answer: '루와 액체의 온도를 정반대로 맞추는 것이 철칙입니다. 뜨거운 루에는 차가운 액체를, 차가운 루에는 뜨거운 액체를 붓습니다. 액체를 조금씩 넣으며 거품기로 계속 저어주세요.',
    },
  ];
const howTo = [
  {
    name: '액체 종류 선택',
    text: '우유(베샤멜), 화이트 스톡(벨루테), 브라운 스톡(에스파뇰) 또는 토마토 중에서 선택하세요.',
  },
  {
    name: '원하는 농도 설정',
    text: '수프나 크림부터 고로케 반죽까지. 계산기가 필요한 루의 비율을 자동으로 조정합니다.',
  },
  {
    name: '액체 용량 입력',
    text: '농도를 조절할 액체의 양을 ml 단위로 입력하세요. 계산기가 정확한 버터와 밀가루 양을 알려줍니다.',
  },
  {
    name: '적절한 가열 시간 적용',
    text: '버터와 밀가루 혼합물을 지정된 단계(화이트, 블론드, 브라운)까지 가열하세요.',
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
  slug: 'roux-ratio-calculator-thickening-sauce-guide',
  title,
  description,
  faqTitle: '자주 묻는 질문',
  faq,  howTo,
  seo: [
    {
      type: 'title',
      text: '루 및 마더 소스 계산 마스터 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>루(Roux)</strong>는 정통 프랑스 요리의 구조적 기초입니다. 밀가루, 버터, 액체 사이의 관계를 이해하는 것이 벨벳처럼 부드러운 소스와 덩어리진 소스의 차이를 결정합니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1:1',
          label: '밀가루:지방 비율',
          icon: 'mdi:scale-balance',
        },
        {
          value: '3분',
          label: '화이트 루 시간',
          icon: 'mdi:timer-sand',
        },
        {
          value: '100g/L',
          label: '걸쭉한 소스 비율',
          icon: 'mdi:waves',
        },
        {
          value: '15분',
          label: '브라운 루 시간',
          icon: 'mdi:fire',
        },
      ],
    },
    {
      type: 'title',
      text: '가열 단계별 농도 조절 능력',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '화이트 루',
          icon: 'mdi:flask-round-bottom-outline',
          description: '2-3분 가열. 가장 강력한 농도 증점제.',
          points: [
            '베샤멜 소스의 기본',
            '최대 농도 조절 능력',
            '은은한 우유 풍미',
            '색상 변화 없음',
          ],
        },
        {
          title: '블론드 루',
          icon: 'mdi:gold',
          description: '5-8분 가열하여 연한 황금빛 생성.',
          highlight: true,
          points: [
            '벨루테 소스의 기본',
            '중간 농도 조절 능력',
            '은은한 견과류 향',
            '연한 스톡에 적합',
          ],
        },
        {
          title: '브라운 루',
          icon: 'mdi:coffee',
          description: '15-20분 가열. 진한 풍미.',
          points: [
            '에스파뇰 소스의 기본',
            '낮은 농도 조절 능력 (-30%)',
            '복합적인 풍미',
            '묽은 질감',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '원하는 질감별 1L당 루 무게',
      level: 3,
    },
    {
      type: 'table',
      headers: ['원하는 질감', '버터 (g)', '밀가루 (g)', '액체 (L)'],
      rows: [
        ['묽은 수프 / 크림', '25g', '25g', '1L'],
        ['일반 소스', '50g', '50g', '1L'],
        ['그라탱용 소스', '70g', '70g', '1L'],
        ['고로케 / 반죽', '125g', '125g', '1L'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '소스에 덩어리가 생기거나 밀가루 맛이 나나요?',
      html: '소스에 덩어리가 생긴다면 뜨거운 루에 뜨거운 액체를 넣었을 가능성이 높습니다. 항상 열충격을 적용하세요. 밀가루 맛이 난다면 초기 가열 시간을 늘리세요.',
    },
    {
      type: 'title',
      text: '소스 기술 용어집',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: '덱스트린화',
          definition:
            '열에 의해 전분이 짧은 사슬로 분해되는 현상. 풍미는 좋아지지만 농도 형성 능력은 약해집니다.',
        },
        {
          term: '호화',
          definition:
            '전분 입자가 액체를 흡수하여 팽창하는 과정.',
        },
        {
          term: '뵈르 마니에',
          definition:
            '마지막에 빠르게 농도를 조절하기 위해 사용하는 차가운 밀가루와 버터의 혼합물.',
        },
        {
          term: '마더 소스',
          definition:
            '에스코피에가 정의한 5가지 기본 소스(베샤멜, 벨루테, 에스파뇰, 홀란다이즈, 토마토).',
        },
      ],
    },
    {
      type: 'tip',
      title: '차가운 버터 마무리 기법 (Monter au Beurre)',
      html: '마지막에 차가운 버터 한 조각을 넣어 저어주면 프로 수준의 윤기와 부드러운 식감을 선사합니다.',
    },
    {
      type: 'paragraph',
      html: '당사의 루 비율 계산기를 사용하면 소스가 항상 완벽한 기술적 농도를 갖추게 됩니다.',
    },
  ],
  ui: {
    baseLiquid: '기본 액체',
    volume: '용량',
    ml: 'ml',
    liquidType: '액체 종류',
    milk: '우유',
    lightStock: '화이트 스톡',
    darkStock: '브라운 스톡',
    tomato: '토마토',
    sauceTexture: '소스 농도',
    soup: '수프 / 크림',
    normalSauce: '일반 소스',
    thick: '걸쭉함 / 필링',
    croquette: '고로케 / 반죽',
    rouxMix: '루 배합',
    butter: '버터',
    flour: '밀가루',
    instructions: '만드는 법',
    sauceName: '소스 종류',
    ratio: '비율',
    chefTip: '셰프의 팁',
    white: '화이트',
    blond: '블론드',
    brown: '브라운',
    beurreManied: '뵈르 마니에 (마지막 농도 조절용)',
    recipeBechamel: "베샤멜",
    recipeVeloute: "벨루테",
    recipeEspagnole: "에스파뇰",
    recipeTomato: "토마토 소스",
    tipBechamel: "차가운 우유를 사용하세요. 처음에는 조금씩 넣고 힘차게 저어주세요.",
    tipVeloute: "닭이나 생선 스톡을 사용하세요. 루에서 쿠키 같은 향이 날 때까지 볶습니다.",
    tipEspagnole: "타지 않게 주의하며 초콜릿 색이 날 때까지 루를 볶으세요.",
    tipTomato: "루는 토마토 소스의 질감을 더 풍부하고 부드럽게 만들어 줍니다.",
    rouxWhiteLabel: "화이트 루",
    rouxBlondLabel: "블론드 루",
    rouxBrownLabel: "브라운 루",
    descWhite: "생밀가루 냄새가 나지 않을 때까지만 볶으세요. 색은 내지 않습니다.",
    descBlond: "연한 황금색과 견과류 향이 나도록 볶으세요.",
    descBrown: "약불에서 초콜릿 색이 나도록 볶으세요. 약 10% 더 많은 양이 필요합니다.",
    timeWhite: "2-3분",
    timeBlond: "5-8분",
    timeBrown: "15-20분",
  },
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
