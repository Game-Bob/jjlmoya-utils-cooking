import type { ToolLocaleContent } from "../../../types";

const title = "평형 염수 계산기";
const description = "촉촉한 고기와 완벽한 발효를 위한 평형의 과학. 식재료와 물의 총 중량에 기초한 정확한 염도를 계산하세요.";
const faq = [
  {
    question: "평형 염수법(Equilibrium Brining)이란 무엇인가요?",
    answer: "평형법은 물의 양만이 아니라 총 중량(물 + 식재료)을 기준으로 소금 양을 계산하는 방식입니다. 이를 통해 식재료의 양과 상관없이 항상 일정한 소금 농도를 보장할 수 있습니다.",
  },
  {
    question: "절임(피클)을 만들 때 소금이 얼마나 필요한가요?",
    answer: "발효 채소(오이피클, 사워크라우트, 김치)의 경우 2%에서 3% 사이의 염도를 권장합니다. 육류의 경우 1.5%에서 2% 사이가 적당합니다. 계산기에 재료 무게를 입력하면 정확한 양을 알려줍니다.",
  },
  {
    question: "염지 후 고기를 냉동해도 되나요?",
    answer: "네, 아주 이상적입니다. 염수는 냉동 화상(Freezer burn)으로부터 고기를 보호하며, 해동 후 즉시 요리할 수 있는 상태가 됩니다. 단, 발효 채소는 냉동 시 조직이 파괴되어 흐물흐물해지므로 피하세요.",
  },
  {
    question: "염수에 설탕을 넣는 이유는 무엇인가요?",
    answer: "설탕은 두 가지 역할을 합니다. 육류의 마이야르 반응(갈색 내기)을 돕고, 음식을 달게 만들지 않으면서도 짠맛의 밸런스를 잡아줍니다. 염수를 디저트로 만드는 것이 아닙니다.",
  },
];
const howTo = [
  {
    name: "목표 설정",
    text: "육류 염지(1.5-2%), 발효(2-3%), 소스(3.5%) 또는 장기 보존식(5% 이상) 중 무엇을 할지 결정하세요. 용도에 따라 기간과 목적이 다릅니다.",
  },
  {
    name: "재료와 물의 무게 측정",
    text: "제품(고기, 채소)과 물의 무게를 정확히 측정하세요. 5g의 차이도 결과를 바꿀 수 있으므로 정밀 저울을 사용하는 것이 중요합니다.",
  },
  {
    name: "계산기 활용",
    text: "측정된 무게를 계산기에 입력하고 제품 유형에 맞춰 염도를 조절하세요. 필요한 소금과 설탕의 정확한 양이 계산됩니다.",
  },
  {
    name: "용해 및 혼합",
    text: "재료를 넣기 전에 소금을 찬물에 완전히 녹이세요. 육류의 경우 전체가 잠기도록 하고, 발효식품은 재료가 수면 위로 떠오르지 않게 눌러주어야 합니다.",
  },
  {
    name: "발효 및 숙성",
    text: "용도에 따라 냉장 보관하세요. 육류는 4~48시간, 발효식품은 1~3주 정도가 소요됩니다. 정확한 기간은 온도와 취향에 따라 달라집니다.",
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
  slug: "brine",
  title: "평형 염수 계산기",
  description: "촉촉한 고기와 완벽한 발효를 위한 평형의 과학. 식재료와 물의 총 중량에 기초한 정확한 염도를 계산하세요.",
  ui: {
    calculator: "계산기",
    subtitle: "중량을 입력하여 완벽한 평형을 계산하세요.",
    productWeight: "제품 중량 (g)",
    waterWeight: "물의 중량 (g)",
    desiredSalinity: "희망 염도",
    meat: "육류 (1.5%)",
    fermented: "발효식품 (2.0%)",
    sauces: "소스 (3.5%)",
    preserves: "보존식 (5.0%)",
    addSugar: "설탕 추가",
    sugarHint: "맛의 균형을 맞추고 마이야르 반응을 돕습니다 (소금의 50%)",
    saltNeeded: "필요 소금량",
    sugarOptional: "설탕 (옵션)",
    estimatedTime: "예상 시간",
    product: "제품",
    total: "합계",
    unitGrams: "g",
    timeMeatsLabel: "기간 (육류)",
    timeMeatsDuration: "4 - 48 시간",
    timeVegetablesLabel: "기간 (채소류)",
    timeVegetablesDuration: "1 - 3 주",
    timePreservesLabel: "기간 (보존식)",
    timePreservesDuration: "1개월 이상",
  },
  faqTitle: "자주 묻는 질문",
  bibliographyTitle: "출처 및 참고 문헌",
  faq,
  howTo,
  bibliography: [
    {
      name: "The Noma Guide to Fermentation - René Redzepi & David Zilber",
      url: "https://www.nomacph.com/",
    },
    {
      name: "Salt, Fat, Acid, Heat - Samin Nosrat",
      url: "https://www.saltfatacidheat.com/",
    },
    {
      name: "Pollan, Michael - Cooked",
      url: "https://michaelpollan.com/",
    },
  ],
  seo: [
    {
      type: 'title',
      text: '평형 염수와 발효 마스터 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>평형 염수법</strong>은 촉촉하고 안전한 결과를 보장하는 궁극의 기술입니다. 전통적인 방식과 달리 물과 제품의 <strong>총 중량</strong>으로 소금을 계산하여, 용기 크기와 상관없이 일정한 염도를 유지할 수 있습니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1.5 - 2%',
          label: '육류 이상적 비율',
          icon: 'mdi:food-steak',
        },
        {
          value: '2.5 - 3%',
          label: '발효 최적 비율',
          icon: 'mdi:flask-outline',
        },
        {
          value: '18-22°C',
          label: '권장 발효 온도',
          icon: 'mdi:thermometer',
        },
        {
          value: '0.5%',
          label: '밸런스 설탕량',
          icon: 'mdi:shaker-outline',
        },
      ],
    },
    {
      type: 'title',
      text: '건식 염지와 습식 염지의 차이',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '건식 염지 (Dry Brining)',
          icon: 'mdi:shaker-outline',
          description: '물을 사용하지 않고 제품 표면에 직접 소금을 도포하는 방식입니다.',
          points: [
            '가금류의 껍질이 훨씬 바삭해짐',
            '식재료 본연의 맛이 응축됨',
            '냉장고 공간을 적게 차지함',
            '스테이크나 통닭 구이에 이상적',
          ],
        },
        {
          title: '습식 염지 (Wet Brining)',
          icon: 'mdi:water',
          description: '제품을 평형법으로 계산된 소금물에 담그는 방식입니다.',
          highlight: true,
          points: [
            '수분 전달력이 매우 뛰어남',
            '향신료 등의 향을 입히기 쉬움',
            '큰 덩어리 고기도 균일하게 염지됨',
            '칠면조, 돼지 등심, 생선에 이상적',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '용도별 기간 및 추천 염도',
      level: 3,
    },
    {
      type: 'table',
      headers: ['카테고리', '염도 (%)', '최소 기간', '주요 목적'],
      rows: [
        ['가금류 및 돼지', '1.5% - 2.0%', '12 - 24 시간', '수분 유지와 부드러움'],
        ['흰살 생선', '1.0% - 1.5%', '20 - 45 분', '살의 단단함 유지'],
        ['젖산 발효', '2.5% - 3.0%', '7 - 21 일', '미생물학적 안전성'],
        ['소스 및 보존식', '3.5% - 5.0%', '1개월 이상', '장기 보존'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '염수 상태 점검 및 식별',
      html: '만약 염수에서 악취(발효된 신향이 아닌 부패향)가 나거나, 유색 곰팡이(검은색, 분홍색)가 피거나, 재료가 너무 흐물흐물해졌다면 즉시 버리세요. 표면의 하얀 막(산막효모, Kahm yeast)은 발효 과정에서 정상이며 걷어내면 됩니다.',
    },
    {
      type: 'title',
      text: '염지 및 가공 전문가 용어 사전',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: '삼투압',
          definition: '농도를 맞추기 위해 소분이 식품 세포 안으로 침투하는 물리적 과정.',
        },
        {
          term: '변성',
          definition: '소금이 단백질에 작용하여 조리 중 수분을 더 많이 머금게 하는 효과.',
        },
        {
          term: '산막효모',
          definition: '발효액 표면에 생기는 얇은 하얀 층. 무해하지만 산도가 부족함을 나타냅니다.',
        },
        {
          term: '젖산 발효',
          definition: '박테리아가 당분을 젖산으로 바꾸어 식품을 보존 가능하게 하는 혐기성 발효.',
        },
      ],
    },
    {
      type: 'tip',
      title: '물의 성질',
      html: '염소 성분이 많은 수돗물은 유익균의 성장을 방해할 수 있으므로 피하세요. 정수된 물을 사용하거나 수돗물을 24시간 정도 받아두어 염소를 날린 후 사용하세요.',
    },
    {
      type: 'paragraph',
      html: '이 평형 계산기는 레시피의 불확실성을 제거하여, 전문가와 같은 확신을 가지고 요리할 수 있게 도와줍니다.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
