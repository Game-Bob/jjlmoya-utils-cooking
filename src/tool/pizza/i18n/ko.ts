import type { ToolLocaleContent } from "../../../types";

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
    name: "저온 숙성",
    text: "나눈 도우 공을 밀폐 용기에 담아 냉장고(4°C)에서 24-72시간 동안 숙성시킵니다. 이것이 풍미와 소화력을 높이는 핵심 단계입니다.",
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
  bibliographyTitle: "참고 문헌",
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
  bibliography: [
    {
      name: "Associazione Verace Pizza Napoletana",
      url: "https://www.pizzanapoletana.org/",
    },
  ],
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
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
