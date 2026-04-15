import type { ToolLocaleContent } from '../../../types';

const title = "미국식 주방 단위 변환기: 컵을 그람 및 온도로 변환";
const description = "컵(cups), 큰술(tablespoons), 화씨(Fahrenheit)를 미터법으로 변환합니다. 미국 레시피를 전문가의 정밀함으로 해석하기 위한 나침반입니다.";
const faq = [
  {
    question: '1컵(cup)과 250ml의 차이는 무엇입니까?',
    answer: '미국식 1컵은 250ml가 아니라 236.588ml입니다. 실습 목적으로는 보통 240ml를 사용합니다. 4%라는 차이가 작아 보일 수 있지만, 마카롱이나 무스처럼 민감한 레시피에서는 결과에 큰 영향을 미칠 수 있습니다.',
  },
  {
    question: '왜 밀가루는 항상 같은 무게가 나가지 않습니까?',
    answer: '밀가루는 시간이 지남에 따라, 그리고 운송 중에 압축되기 때문입니다. 갓 체에 친 밀가루는 찬장에 오래 보관된 밀가루보다 가볍습니다. 그래서 전문 제과사들은 부피를 측정하는 대신 항상 무게를 잽니다.',
  },
  {
    question: 'Tbsp와 tsp의 차이는 무엇입니까?',
    answer: '1 Tablespoon(Tbsp/큰술) = 15ml입니다. 1 Teaspoon(tsp/작은술) = 5ml입니다. 한 큰술은 작은술의 3배입니다. 베이킹 레시피에서는 작은술로 측정하는 향신료의 오차가 실패의 원인이 되는 경우가 많습니다.',
  },
  {
    question: '미국식 컵(US cup)과 영국식 컵(Imperial cup)은 같습니까?',
    answer: '아니요, 다릅니다. 1 US 컵 = 236ml이고 1 Imperial 컵(UK) = 284ml입니다. 약 20%의 차이가 납니다. 대부분의 미국 요리 블로그는 US 컵을 사용합니다. 별도의 언급이 없다면 US 컵으로 가정하세요.',
  },
  {
    question: '오븐의 "gas 4"는 몇 도에 해당합니까?',
    answer: 'Gas 4 = 180°C = 350°F입니다. 이는 영국식 가스 화력 등급입니다. 각 오븐의 사양에 맞춰 온도를 조절해야 최고의 결과를 얻을 수 있습니다.',
  },
];
const howTo = [
  {
    name: '변환 유형 선택',
    text: '컵을 그람으로, 큰술/작은술을 그람으로, 또는 화씨를 섭씨로 변환할지 선택하세요.',
  },
  {
    name: '재료 선택',
    text: '재료마다 밀도가 다릅니다. 밀가루, 설탕, 버터 등 각각의 재료에 맞춰 무게를 계산합니다.',
  },
  {
    name: '수치 입력',
    text: '컵, 스푼 개수 또는 온도를 입력하세요. 변환기가 즉시 정확한 값을 계산합니다.',
  },
  {
    name: '레시피 적용',
    text: '정확한 변환 값을 사용하여 미국 레시피를 전문가 수준으로 재현해 보세요.',
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
  slug: 'american-kitchen-units-converter',
  title: "미국식 주방 단위 변환기: 컵을 그람 및 온도로 변환",
  description: "컵(cups), 큰술(tablespoons), 화씨(Fahrenheit)를 미터법으로 변환합니다. 미국 레시피를 전문가의 정밀함으로 해석하기 위한 나침반입니다.",
  faqTitle: "자주 묻는 질문",
  bibliographyTitle: "참고 자료",
  ui: {
    copied: "복사됨",
    noHistory: "기록 없음",
    load: "불러오기",
    delete: "삭제",
    tabCups: "컵을 그람으로",
    tabSpoons: "스푼을 그람으로",
    tabTemperatures: "온도 변환",
    tabCupsAriaLabel: "컵-그람 변환",
    tabSpoonsAriaLabel: "스푼-그람 변환",
    tabTempsAriaLabel: "오븐 온도 변환",
    stepSelectIngredient: "재료 선택",
    stepHowManyCups: "몇 컵(Cups)인가요?",
    stepSelectMeasure: "측정 단위 선택",
    stepQuantity: "수량",
    stepOvenConversion: "오븐 온도 변환",
    stepFrequentTemps: "레시피 단골 온도",
    cupFlour: "밀가루",
    cupFlourSub: "120g / 컵",
    cupWhiteSugar: "백설탕",
    cupWhiteSugarSub: "200g / 컵",
    cupBrownSugar: "황설탕/흑설탕",
    cupBrownSugarSub: "220g / 컵",
    cupPowderSugar: "슈가파우더",
    cupPowderSugarSub: "115g / 컵",
    cupButter: "버터",
    cupButterSub: "227g / 컵",
    cupCocoa: "코코아 가루",
    cupCocoaSub: "85g / 컵",
    cupLiquids: "액체",
    cupLiquidsSub: "240g / 컵",
    cupOats: "오트밀",
    cupOatsSub: "90g / 컵",
    cupFlourAriaLabel: "밀가루",
    cupWhiteSugarAriaLabel: "백설탕",
    cupBrownSugarAriaLabel: "황설탕",
    cupPowderSugarAriaLabel: "슈가파우더",
    cupButterAriaLabel: "버터",
    cupCocoaAriaLabel: "코코아",
    cupLiquidsAriaLabel: "액체",
    cupOatsAriaLabel: "오트밀",
    stepperMinus: "빼기",
    stepperPlus: "더하기",
    cupsAmountLabel: "컵 수",
    spoonQuantityLabel: "분량",
    cupQuick1_4: "1/4 컵",
    cupQuick1_3: "1/3 컵",
    cupQuick1_2: "1/2 컵",
    cupQuick1: "1 컵",
    unitGrams: "그람",
    unitGramsML: "그람 / 밀리리터",
    spoonMeasureLabel: "측정 단위 선택",
    spoonTablespoon: "큰술 (Tbsp)",
    spoonTeaspoon: "작은술 (tsp)",
    spoonTablespoonAriaLabel: "큰술",
    spoonTeaspoonAriaLabel: "작은술",
    spoonSelectIngredient: "재료 선택",
    spoonLeavening: "팽창제",
    spoonLeaveningSub: "베이킹 파우더",
    spoonSalt: "고운 소금",
    spoonSaltSub: "미네랄",
    spoonSugar: "백설탕",
    spoonSugarSub: "입자형",
    spoonLiquids: "액체",
    spoonLiquidsSub: "물, 기름",
    spoonLeavingAriaLabel: "화학 팽창제",
    spoonSaltAriaLabel: "소금",
    spoonSugarAriaLabel: "백설탕",
    spoonLiquidsAriaLabel: "액체",
    spoonQuick1_4: "1/4",
    spoonQuick1_2: "1/2",
    spoonQuick1: "1",
    spoonQuick2: "2",
    tempFahrenheit: "화씨 (°F)",
    tempCelsius: "섭씨 (°C)",
    tempFahrenheitAriaLabel: "화씨",
    tempCelsiusAriaLabel: "섭씨",
    tempPreset275: "275°F",
    tempPreset275Desc: "135°C - 건조",
    tempPreset275AriaLabel: "화씨 275도 설정",
    tempPreset325: "325°F",
    tempPreset325Desc: "165°C - 묵직한 케이크",
    tempPreset325AriaLabel: "화씨 325도 설정",
    tempPreset350: "350°F",
    tempPreset350Desc: "175°C - 디저트 표준",
    tempPreset350AriaLabel: "화씨 350도 설정",
    tempPreset400: "400°F",
    tempPreset400Desc: "200°C - 빵 / 타르트",
    tempPreset400AriaLabel: "화씨 400도 설정",
    tempPreset425: "425°F",
    tempPreset425Desc: "220°C - 피자 / 페이스트리",
    tempPreset425AriaLabel: "화씨 425도 설정",
  },
  seo: [
    {
      type: 'title',
      text: "미국 주방 계량 단위 변환 가이드",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "<strong>컵을 그람으로</strong>, 또는 <strong>화씨를 섭씨로</strong> 변환하는 것은 세계적인 레시피를 마스터하기 위한 첫 걸음입니다. 미국 요리는 부피 측정을 기반으로 하므로, 밀가루와 같은 건조 재료에서는 최대 25%의 오차가 발생할 수 있습니다.",
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: "120g",
          label: "밀가루 1컵",
          icon: "mdi:grain",
        },
        {
          value: "227g",
          label: "버터 1스틱",
          icon: "mdi:cube-outline",
        },
        {
          value: "175°C",
          label: "화씨 350도 해당",
          icon: "mdi:thermometer",
        },
        {
          value: "240ml",
          label: "1컵의 부피",
          icon: "mdi:water-percent",
        },
      ],
    },
    {
      type: 'title',
      text: "부피와 무게의 결정적인 차이",
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: "부피 측정 (컵 단위)",
          icon: "mdi:cup-water",
          description: "미국 가정용 레시피에서 사용됩니다. 재료가 차지하는 공간을 측정합니다.",
          points: [
            "재료의 압축 상태에 따라 결과가 크게 달라짐",
            "밀가루 측정 시 20~30%의 오차가 흔히 발생",
            "컵 브랜드에 따라 실제 용량이 다를 수 있음",
            "정밀도를 높이려면 측정 전 가루를 체에 쳐야 함",
          ],
        },
        {
          title: "무게 측정 (그람 단위)",
          icon: "mdi:scale-balance",
          description: "전문 제과 및 유럽의 표준입니다. 절대적인 정밀도를 제공합니다.",
          highlight: true,
          points: [
            "항상 +/- 1g의 정밀도 유지",
            "일관성 있고 재현 가능한 결과",
            "설거지 거리가 줄어듦 (하나의 볼만 사용)",
            "수학적인 배합 조절이 용이함",
          ],
        },
      ],
    },
    {
      type: 'title',
      text: "주요 재료들의 변환 기준",
      level: 3,
    },
    {
      type: 'table',
      headers: ["재료", "1컵 (부피)", "그람 (무게)", "밀도"],
      rows: [
        ["밀가루", "1컵", "120g", "낮음"],
        ["백설탕", "1컵", "200g", "중간"],
        ["황설탕", "1컵", "220g (꾹꾹 담았을 때)", "높음"],
        ["버터", "1컵 (2스틱)", "227g", "높음"],
        ["코코아 가루", "1컵", "85g", "매우 낮음"],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: "케이크가 퍽퍽하게 나왔나요?",
      html: "컵을 사용할 때 가장 흔한 실수는 밀가루 포대에 직접 컵을 넣어 '퍼내는' 것입니다. 이렇게 하면 가루가 압축되어 1컵당 최대 40g의 밀가루를 더 넣게 될 수 있습니다. 해결책은 당사 변환기를 사용하여 <strong>항상 무게(그람)로 변환</strong>하는 것입니다.",
    },
    {
      type: 'title',
      text: "미국 단위 용어 사전",
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: "Cup (컵)",
          definition: "약 240ml에 해당하는 부피 단위. 미국 요리의 기본입니다.",
        },
        {
          term: "Tbsp (Tablespoon)",
          definition: "한 큰술. 15ml 또는 세 작은술에 해당합니다.",
        },
        {
          term: "tsp (Teaspoon)",
          definition: "한 작은술. 5ml에 해당. 소금이나 베이킹 파우더 측정에 필수적입니다.",
        },
        {
          term: "Stick of Butter (버터 스틱)",
          definition: "미국에서 흔한 버터 포장 단위로 하나에 113.5g(1/2컵)입니다.",
        },
      ],
    },
    {
      type: 'tip',
      title: "스푼 사용의 팁",
      html: "저울이 없어 반드시 컵을 사용해야 한다면, 밀어 넣지 말고 스푼으로 가루를 컵에 살살 채운 뒤 칼등으로 윗면을 깎아 평평하게 만드세요. 직접 퍼내는 것보다 훨씬 정확합니다.",
    },
    {
      type: 'paragraph',
      html: "전문적인 변환기를 사용하면 낯선 외국 레시피에 대한 불안감이 완벽한 베이킹의 자신감으로 바뀝니다.",
    },
  ],
  faq: [
    {
      question: '1컵(cup)과 250ml의 차이는 무엇입니까?',
      answer: '미국식 1컵은 250ml가 아니라 236.588ml입니다. 실습 목적으로는 보통 240ml를 사용합니다. 4%라는 차이가 작아 보일 수 있지만, 마카롱이나 무스처럼 민감한 레시피에서는 결과에 큰 영향을 미칠 수 있습니다.',
    },
    {
      question: '왜 밀가루는 항상 같은 무게가 나가지 않습니까?',
      answer: '밀가루는 시간이 지남에 따라, 그리고 운송 중에 압축되기 때문입니다. 갓 체에 친 밀가루는 찬장에 오래 보관된 밀가루보다 가볍습니다. 그래서 전문 제과사들은 부피를 측정하는 대신 항상 무게를 잽니다.',
    },
    {
      question: 'Tbsp와 tsp의 차이는 무엇입니까?',
      answer: '1 Tablespoon(Tbsp/큰술) = 15ml입니다. 1 Teaspoon(tsp/작은술) = 5ml입니다. 한 큰술은 작은술의 3배입니다. 베이킹 레시피에서는 작은술로 측정하는 향신료의 오차가 실패의 원인이 되는 경우가 많습니다.',
    },
    {
      question: '미국식 컵(US cup)과 영국식 컵(Imperial cup)은 같습니까?',
      answer: '아니요, 다릅니다. 1 US 컵 = 236ml이고 1 Imperial 컵(UK) = 284ml입니다. 약 20%의 차이가 납니다. 대부분의 미국 요리 블로그는 US 컵을 사용합니다. 별도의 언급이 없다면 US 컵으로 가정하세요.',
    },
    {
      question: '오븐의 "gas 4"는 몇 도에 해당합니까?',
      answer: 'Gas 4 = 180°C = 350°F입니다. 이는 영국식 가스 화력 등급입니다. 각 오븐의 사양에 맞춰 온도를 조절해야 최고의 결과를 얻을 수 있습니다.',
    },
  ],
  bibliography: [
    {
      name: 'King Arthur Baking: Ingredient Weight Chart',
      url: 'https://www.kingarthurbaking.com/learn/ingredient-weight-chart',
    },
    {
      name: 'Culinary Institute of America: Conversions and Equivalents',
      url: 'https://www.ciachef.edu/',
    },
  ],
  howTo: [
    {
      name: '변환 유형 선택',
      text: '컵을 그람으로, 큰술/작은술을 그람으로, 또는 화씨를 섭씨로 변환할지 선택하세요.',
    },
    {
      name: '재료 선택',
      text: '재료마다 밀도가 다릅니다. 밀가루, 설탕, 버터 등 각각의 재료에 맞춰 무게를 계산합니다.',
    },
    {
      name: '수치 입력',
      text: '컵, 스푼 개수 또는 온도를 입력하세요. 변환기가 즉시 정확한 값을 계산합니다.',
    },
    {
      name: '레시피 적용',
      text: '정확한 변환 값을 사용하여 미국 레시피를 전문가 수준으로 재현해 보세요.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
