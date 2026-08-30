import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

const title = "나폴리 피자 도우 계산기";
const description = "집에서 정통 나폴리 피자를 만들기 위해 밀가루, 물, 소금, 이스트의 정확한 비율을 계산합니다.";
const faq = [
  {
    question: "나폴리 피자의 이상적인 가수율은 얼마인가요?",
    answer: "AVPN(진정 나폴리 피자 협회) 규정에 따르면 표준 가수율은 63-67%입니다. 초보자에게는 60-62%가 다루기 쉽습니다. 강력분(W300+)을 사용하는 숙련된 피자 요리사는 70-75%로 놀라운 결과를 낼 수 있지만 기술이 필요합니다.",
  },
  {
    question: "도우는 얼마나 숙성시켜야 하나요?",
    answer: "효소를 활성화하기 위해 냉장고(4°C)에서 최소 24시간이 필요합니다. 최적은 48-72시간입니다. 72시간을 초과하려면 매우 강한 밀가루(W300+)가 필요하며, 그렇지 않으면 도우가 시어집니다.",
  },
  {
    question: "드라이 이스트로도 만들 수 있나요?",
    answer: "네. 드라이 이스트는 생이스트 양의 0.4배에 해당합니다(생이스트 2.5g = 드라이 이스트 1g). 품질은 비슷하지만, 생이스트가 더 풍부한 맛을 냅니다.",
  },
  {
    question: "가정용 오븐에서도 나폴리 피자를 만들 수 있나요?",
    answer: "네, 하지만 보완책이 필요합니다. 피자 스톤을 사용하고 최고 온도(250-280°C)로 45-60분간 예열하세요. 굽는 시간은 60-90초가 아닌 5-7분 정도 걸리지만 좋은 결과물을 얻을 수 있습니다.",
  },
  {
    question: "어떤 밀가루를 사용해야 하나요?",
    answer: "이상적: Caputo Pizzeria (W260-280) 또는 Manitoba (W350-400). 대안: 100g당 단백질 11-13g을 함유한 밀가루. 장기 숙성 시 약한 밀가루(W130-160)는 피하세요.",
  },
  {
    question: "도우를 늘릴 때 왜 찢어지나요?",
    answer: "글루텐이 이완되지 않았기 때문입니다. 도우 공을 실온에서 2-3시간 휴지시키세요. 반복된다면 반죽이 부족했거나 밀가루 힘이 약한 것입니다.",
  },
];
const howTo = [
  {
    name: "비율 계산",
    text: "이 계산기를 사용하여 피자 개수와 도우 공 무게에 따른 각 재료의 정확한 그람수를 확인하세요.",
  },
  {
    name: "반죽 섞기",
    text: "밀가루와 미지근한 물(22-25°C), 소금, 이스트를 섞습니다. 반죽기로 8-10분, 또는 손으로 15-20분간 치대주세요.",
  },
  {
    name: "1차 발효 (벌크)",
    text: "전체 반죽을 실온(20-25°C)에서 1-2시간 동안 부피가 두 배가 될 때까지 발효시킵니다.",
  },
  {
    name: "도우 공으로 분할",
    text: "반죽을 지정된 무게로 나눕니다. 둥글리기 후 장기 숙성 전 휴지시키세요.",
  },
  {
    name: "저온 숙성",
    text: "나눈 도우 공을 밀폐 용기에 담아 냉장고(4°C)에서 24-72시간 동안 숙성시킵니다. 이것이 풍미와 소화력을 높이는 핵심 단계입니다.",
  },
  {
    name: "성형 및 굽기",
    text: "굽기 30분 전에 냉장고에서 꺼내세요. 중앙에서 바깥쪽으로 성형합니다. 최고 온도에서 구워냅니다.",
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
  slug: 'neapolitan-pizza-dough-calculator-authentic-recipe',
  title,
  description,
  faqTitle: "자주 묻는 질문",
  ui: {
    parameters: "매개변수",
    quantity: "수량",
    pizzas: "개",
    weight: "도우 공 무게",
    small: "작게 (180g)",
    standard: "표준 (260g)",
    large: "크게 (350g)",
    hydration: "가수율",
    classic: "클래식 (55-60%)",
    modern: "모던 (65-70%)",
    high: "고가수 (75%+)",
    salt: "소금",
    fermentation_tip_title: "숙성 팁",
    fermentation_tip:
      "더 소화가 잘 되고 맛있는 도우를 위해, 밀가루 100g당 <strong>0.3g</strong>의 생이스트를 사용하고 냉장고(4°C)에서 24시간 숙성시키세요.",
    your_recipe: "나의 레시피",
    fresh_yeast: "생이스트",
    dry_yeast: "드라이",
    flour: "밀가루 (W260-300)",
    water: "물",
    salt_label: "바다 소금",
    yeast: "이스트",
    yeast_note: "20°C에서 8시간 숙성 기준",
    total_weight: "총 도우 무게",
    approx: "약",
    visual_note:
      "시각적 크기는 도우 공 무게에 따라 늘어난 피자의 대략적인 지름을 나타냅니다.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '정통 나폴리 피자 도우 마스터 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>나폴리 피자</strong>는 문화유산입니다. 성공은 시간, 온도, 그리고 가수율 사이의 정밀함에 달려 있습니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '480°C',
          label: '굽기 온도',
          icon: 'mdi:fire',
        },
        {
          value: '60-90초',
          label: '굽기 시간',
          icon: 'mdi:clock-fast',
        },
        {
          value: '65%',
          label: '표준 가수율',
          icon: 'mdi:water-percent',
        },
        {
          value: 'W280',
          label: '밀가루 힘',
          icon: 'mdi:grain',
        },
      ],
    },
    {
      type: 'title',
      text: '가수율의 결정적인 중요성',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '가수율(밀가루 무게 대비 물의 비율)은 <strong>코르니초네</strong>(테두리)의 식감을 결정짓습니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '가수율 55~60%',
          icon: 'mdi:water-percent',
          description: '다루기 매우 쉬우며 초보자와 가정용 오븐에 적합합니다.',
          points: [
            '쉬운 글루텐 형성',
            '끈적이지 않는 반죽',
            '바삭하고 단단한 테두리',
          ],
        },
        {
          title: '가수율 63~67%',
          icon: 'mdi:water',
          description: 'AVPN 표준. 가벼운 도우를 위한 완벽한 균형.',
          highlight: true,
          points: [
            '전통적인 탄력 있는 식감',
            '화덕 오븐에 이상적',
            '중급 이상의 반죽 기술 필요',
          ],
        },
        {
          title: '가수율 70%+',
          icon: 'mdi:water-plus',
          description: '거대한 테두리를 가진 현대적 피자. 고난도 기술이 필요합니다.',
          points: [
            '극도로 큰 공기층',
            '매우 가볍고 소화가 잘 됨',
            '매우 강한 밀가루 필요',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '이스트 종류와 올바른 선택법',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '압착 생이스트',
          icon: 'mdi:bread-slice-outline',
          description: '피자 장인들의 전통적인 선택. 더 복잡한 풍미를 선사합니다.',
          points: [
            '더 깊고 깔끔한 맛',
            '균형 잡힌 효소 활동',
            '미지근한 물에 잘 녹음',
            '짧은 유통기한',
          ],
        },
        {
          title: '인스턴트 드라이 이스트',
          icon: 'mdi:shaker-outline',
          description: '매우 안정적이고 보관이 용이합니다.',
          points: [
            '긴 유통기한',
            '사전 불리기 불필요',
            '생이스트보다 3배 강함',
            '비교적 중립적인 맛',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'W 강도 지수에 따른 밀가루 선택 가이드',
      level: 3,
    },
    {
      type: 'table',
      headers: ['밀가루 종류', '강도 (W)', '발효 시간', '추천 용도'],
      rows: [
        ['박력분계', 'W130-180', '4-8시간', '빠른 제과제빵'],
        ['중력분계', 'W200-240', '8-24시간', '빠른 피자 또는 기본 빵'],
        ['강력분계', 'W260-320', '24-72시간', '정통 나폴리 피자'],
        ['초강력분', 'W350+', '72시간 이상', '초장기 발효 도우'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '반죽 온도 관리',
      html: '글루텐 구조 손상을 막기 위해 반죽 완료 시 온도가 24°C를 넘지 않아야 합니다.',
    },
    {
      type: 'title',
      text: '피자 장인을 위한 용어집',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cornicione (코르니초네)',
          definition: '나폴리 피자의 부풀어 오르고 공기층이 많은 테두리.',
        },
        {
          term: 'Maturazione (숙성)',
          definition: '발효와는 달리 효소가 단백질과 당을 분해하여 맛과 소화력을 높이는 과정.',
        },
        {
          term: 'Incordatura (글루텐 형성)',
          definition: '반죽이 최적의 탄력과 인성을 갖추게 되는 시점.',
        },
        {
          term: 'Autolisi (오토리즈)',
          definition: '밀가루와 물만 미리 섞어 두어 글루텐 형성을 돕는 기법.',
        },
      ],
    },
    {
      type: 'tip',
      title: '냉장 숙성 팁',
      html: '4°C에서 24시간 저온 숙성하면 실온에서는 얻을 수 없는 풍부한 향미가 생성됩니다.',
    },
    {
      type: 'paragraph',
      html: '본 계산기가 정확한 비율을 자동 계산해주므로 반죽 기술과 정성에 집중할 수 있습니다.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
