import type { ToolLocaleContent } from '../../../types';

const title = '식재료 계량 계산기 레시피 분량 조절';
const description = '인분 수에 따라 레시피 분량을 자동으로 조절합니다. 복잡한 계산 없이 레시피를 곱하거나 나누어 정확한 재료 양을 확인하세요.';

const faq = [
  {
    question: '변환 계수에 왜 소수점이 포함되나요?',
    answer: '요리 비율이 항상 딱 떨어지는 정수가 아니기 때문입니다. 4인분 레시피를 7인분으로 늘릴 경우 계수는 정확히 1.75가 됩니다. 분수가 나오더라도 이 숫자를 곱하는 것이 임의로 반올림하는 것보다 훨씬 정확합니다.',
  },
  {
    question: '"소금 1/2 작은술"이라고 입력하면 어떻게 되나요?',
    answer: '도구는 먼저 숫자를 찾습니다. "1"을 수량으로 인식하고 "/2"를 단위의 일부로 처리합니다. 결과는 "0.5"가 되며 정확하게 계산됩니다. "1/2"과 같은 분수는 직접 "0.5"로 입력하는 것이 더 명확하지만, 도구가 나눗셈으로 해석할 수도 있습니다.',
  },
  {
    question: '최종 결과를 반올림해야 하나요?',
    answer: '재료에 따라 다릅니다. 밀가루 종류는 괜찮습니다. 하지만 이스트나 향신료는 정밀함보다는 비율이 중요합니다(계산값의 75% 정도로 조절하는 것을 추천합니다). 계란의 경우: 2.3개가 나오면 2개는 통째로 쓰고, 나머지 0.3은 풀어놓은 계란의 무게를 재서 사용하거나 요리에 따라 2개로 맞추는 등의 판단이 필요합니다.',
  },
  {
    question: '인분을 바꿔도 결과가 변하지 않아요.',
    answer: '재료 목록란에 내용이 있는지 확인하세요. 비어 있으면 계산할 대상이 없습니다. 또한 재료 이름 앞에 숫자(예: "500g", "1/2 작은술")가 제대로 포함되어 있는지 확인하세요.',
  },
  {
    question: '야드-파운드법(온스, 컵)도 지원하나요?',
    answer: '기술적으로는 가능합니다. 도구가 숫자를 읽어서 계산을 수행합니다. 하지만 컵(부피) 단위는 측정 방식에 따라 오차가 크므로, 정확한 계량을 위해서는 계산 전 그램(중량)으로 변환하는 것을 권장합니다.',
  },
];

const howTo = [
  {
    name: '인분 수 입력',
    text: '"원래 분량" 칸에 해당 레시피의 기준 인분을 입력합니다. "목표 분량" 칸에 실제 요리할 인분을 입력합니다.',
  },
  {
    name: '재료 목록 붙여넣기',
    text: '가지고 계신 목록을 그대로 복사해서 붙여넣으세요. 한 줄에 재료 하나씩 적습니다. 도구가 맨 앞의 숫자(500g, 1/2, 2.5)를 인식하여 자동으로 계산합니다.',
  },
  {
    name: '상황에 따른 미세 조절',
    text: '결과는 수학적으로 정확하지만 요리는 예술입니다. 향신료는 계산값의 75%만 사용하거나, 대량 조리 시 이스트를 이론값보다 줄이는 등의 조절이 유효합니다. 참고로 조리 시간은 변하지 않습니다.',
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
  operatingSystem: 'All',
};

export const content: ToolLocaleContent = {
  slug: 'recipe-ingredient-scaler-converter-servings',
  title,
  description,
  ui: {
    servings: '인분(분량)',
    original: '원래 분량',
    desired: '목표 분량',
    multiplyingFactor: '변환 계수',
    ingredientsList: '재료 목록',
    pasteHere: '여기에 목록을 붙여넣으세요.',
    exampleLine1: '예:',
    exampleLine2: '500g 밀가루',
    exampleLine3: '300ml 물',
    exampleLine4: '10g 소금',
    result: '계산 결과',
    copy: '복사',
    copied: '복사되었습니다!',
    emptyState: '조절된 재료 분량이 여기에 표시됩니다...',
    defaultIngredient1: '200g 밀가루',
    defaultIngredient2: '100ml 우유',
    defaultIngredient3: '계란 2개',
  },
  faqTitle: '자주 묻는 질문',
  faq,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    {
      name: 'Harold McGee - On Food and Cooking (음식과 요리)',
      url: 'https://en.wikipedia.org/wiki/Harold_McGee',
    },
    {
      name: 'The Flavor Bible by Karen Page and Andrew Dornenburg',
      url: 'https://www.flavorprints.com/',
    },
    {
      name: 'Modernist Cuisine - 과학적 계량 기술',
      url: 'https://www.modernistcuisine.com/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: '레시피 인분 조절 및 변환 마스터 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>식재료 계량 조절</strong>은 전문 주방에서 가장 중요하면서도 실수가 잦은 작업 중 하나입니다. 단순히 숫자를 곱하는 것이 아니라, 식재료의 화학적·물리적 특성이 부피와 표면적의 변화에 어떻게 반응하는지 이해해야 합니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: 'x1.75',
          label: '4인→7인 계수',
          icon: 'mdi:calculator',
        },
        {
          value: '75%',
          label: '향신료 비율 조절',
          icon: 'mdi:shaker-outline',
        },
        {
          value: '0%',
          label: '시간은 변하지 않음',
          icon: 'mdi:timer-off',
        },
        {
          value: '100g',
          label: '기준 환산 단위',
          icon: 'mdi:weight-gram',
        },
      ],
    },
    {
      type: 'title',
      text: '선형적 조절과 맥락적 조절의 차이',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '수학적 선형 조절',
          icon: 'mdi:math-log',
          description: '계산된 변환 계수를 모든 재료에 그대로 곱하는 방식.',
          points: [
            '밀가루나 베이스 액체류에 적합',
            '정밀한 베이킹 작업에 이상적',
            '소폭의 변화 (x2, x0.5) 시 효과적',
            '자동 계산 및 적용이 매우 용이',
          ],
        },
        {
          title: '요리에서의 맥락적 조절',
          icon: 'mdi:chef-hat',
          description: '풍미의 포화도와 증발률에 근거하여 비율을 미세 조정하는 방식.',
          highlight: true,
          points: [
            '염분이나 향신료의 과잉을 방지',
            '표면적에 따른 증발 차이를 고려',
            '대용량 조리 시 이스트 양을 조절',
            '셰프의 경험과 주관적 판단 필요',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '인원수별 변환 계수 예시',
      level: 3,
    },
    {
      type: 'table',
      headers: ['기존 인분', '목표 인분', '계수 (FC)', '조절 난이도'],
      rows: [
        ['2인분', '4인분', 'x 2.0', '낮음 (선형적)'],
        ['4인분', '6인분', 'x 1.5', '낮음 (선형적)'],
        ['4인분', '10인분', 'x 2.5', '중간 (향신료 유의)'],
        ['4인분', '25인분', 'x 6.25', '높음 (맥락적 조절)'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '레시피를 배수로 늘릴 때의 흔한 실수',
      html: '양을 늘렸을 때 맛이 너무 강하게 느껴진다면(특히 매운맛이나 짠맛), 해당 재료들의 증량을 계산값의 75% 수준으로 맞추어보세요. 또한 조리 시간은 절대 배로 늘리지 마세요. 중심부 온도는 전체 중량이 아닌 식재료의 두께에 따라 결정되기 때문입니다.',
    },
    {
      type: 'title',
      text: '표준화 용어 사전',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: '변환 계수 (Conversion Factor)',
          definition: '모든 재료에 곱해지는 숫자. 목표량 ÷ 원래량 으로 계산됩니다.',
        },
        {
          term: '조리 손실 (Cooking Loss)',
          definition: '증발이나 지방 유출로 인한 중량 감소. 선형적으로 변하지 않습니다.',
        },
        {
          term: '조중량 vs 순중량',
          definition: '손질 전과 후의 중량. 항상 원본 레시피의 중량을 기준으로 조절합니다.',
        },
        {
          term: '수율 (Yield)',
          definition: '계량 조절과 조리를 마친 후의 최종 완성품 총량.',
        },
      ],
    },
    {
      type: 'tip',
      title: '풀어놓은 계란 활용 팁',
      html: '계산상 계란이 2.3개 등이 나온다면, 1개를 완전히 풀어서 무게를 잰 뒤 그 중 30%만큼만 사용하세요. 정교한 제과 제빵에서 정밀함을 유지하는 유일한 방법입니다.',
    },
    {
      type: 'paragraph',
      html: '이 도구는 수학적 계산을 단순화하여 당신이 가장 중요한 "창의성과 맛"에 에너지를 집중할 수 있도록 돕습니다.',
    },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
