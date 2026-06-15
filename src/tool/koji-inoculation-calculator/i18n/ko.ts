import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "코지 접종 및 수화 계산기";
const description = "집에서 코지를 만들기 위한 완벽한 수분 함량, 포자 접종량 및 배양 온도를 계산합니다. 무료 코지 접종 및 수분 계산기로 실패한 배치를 피하세요.";
const faq = [
  {
    question: "코지 기질을 조리할 때 목표 수분 함량은 얼마인가요?",
    answer: "코지를 접종할 때 찐 쌀이나 보리의 이상적인 총 수분 함량은 30%에서 35% 사이입니다. 이는 찐 무게가 초기 건조 무게의 약 1.35배에서 1.40배에 해당합니다."
  },
  {
    question: "얼마나 많은 포자 분말(타네코지)이 필요한가요?",
    answer: "표준 접종률은 건조 기질 1kg당 표준 포자 혼합물 1g입니다. 농축 포자를 사용하는 경우 더 적게(0.5g), 희석 혼합물을 사용하는 경우 더 많이(2.0g) 필요합니다."
  },
  {
    question: "코지 배양 중 온도 조절이 중요한 이유는 무엇인가요?",
    answer: "Aspergillus oryzae는 28C에서 34C 사이에서 최적으로 성장합니다. 온도가 38C를 초과하면 곰팡이가 과열되어 성장이 중단되거나 원치 않는 녹색/검은색 포자가 생성될 수 있습니다. 20C 이하에서는 성장이 크게 느려집니다."
  },
  {
    question: "발열 단계에서는 무엇이 발생하나요?",
    answer: "배양 18~24시간 후, 코지가 빠르게 성장하기 시작하고 자체 열을 발생시킵니다. 이 발열 피크 동안 기질을 저어주고 인큐베이터 열을 낮추어 과열을 방지해야 합니다."
  }
];

const howTo = [
  {
    name: "건조 기질 무게 입력",
    text: "쌀 또는 보리의 초기 건조 무게를 입력하여 목표 수분 임계값을 설정합니다."
  },
  {
    name: "찐 무게 추적",
    text: "조리 후 실제 찐 무게를 입력합니다. 계산기가 수분 비율을 결정하고 30-35% 이상적인 범위 내에 있는지 확인합니다."
  },
  {
    name: "포자 투여량 계산",
    text: "포자 효능(표준, 농축 또는 희석)을 선택하여 접종에 필요한 정확한 포자 분말 무게를 얻습니다."
  },
  {
    name: "배양 매개변수 모니터링",
    text: "온도와 상대 습도를 조정하여 균사체 성장을 시뮬레이션하고 48시간 열 곡선 타임라인을 검토합니다."
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
  title: '코지 접종 및 수화 계산기',
  description: '집에서 코지를 만들기 위한 완벽한 수분 함량, 포자 접종량 및 배양 온도를 계산합니다. 무료 코지 접종 및 수분 계산기로 실패한 배치를 피하세요.',
  faqTitle: '자주 묻는 질문',
  ui: {
    title: '코지 접종 분석기',
    subtitle: '고체 코지 발효 매개변수 최적화',
    dryWeightLabel: '건조 기질 무게',
    steamedWeightLabel: '실제 찐 무게',
    targetRangeLabel: '목표 찐 무게 범위',
    moistureLabel: '현재 수분',
    potencyLabel: '포자 효능',
    standardPotency: '표준 포자',
    concentratedPotency: '농축',
    dilutedPotency: '희석 혼합물',
    sporeDosageLabel: '포자 투여량',
    tempLabel: '인큐베이터 온도',
    humidityLabel: '상대 습도',
    statusIdeal: '이상적인 배양',
    statusSlow: '느린 성장',
    statusInhibited: '억제 / 저온',
    statusOverheating: '과열 / 포자 형성',
    timelineTitle: '48시간 열 배양 사이클',
    stage1Name: '0-18h: 예열',
    stage2Name: '18-36h: 발열 피크',
    stage3Name: '36-48h: 성숙'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '코지 만드는 방법: Aspergillus Oryzae를 위한 완벽한 수분, 포자 투여량 및 온도',
      level: 2
    },
    {
      type: 'paragraph',
      html: '집에서 코지를 만들려면 <strong>기질 수분</strong>, <strong>포자 접종 밀도</strong>, <strong>배양 온도 조절</strong>이라는 세 가지 요소가 올바르게 작용해야 합니다. 이 중 하나라도 잘못되면 배치가 과열되거나, 접종에 실패하거나, 잘못된 곰팡이가 자랄 수 있습니다. 당사의 <strong>코지 접종 계산기</strong>는 사용자의 특정 입력을 기반으로 목표 찐 무게, 정확한 포자 투여량 및 실시간 배양 상태를 계산하여 추측을 제거합니다.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '30-35%',
          label: '목표 수분',
          icon: 'mdi:water-percent'
        },
        {
          value: '1 g/kg',
          label: '표준 포자 비율',
          icon: 'mdi:seed-outline'
        },
        {
          value: '28-34 C',
          label: '이상적인 온도',
          icon: 'mdi:thermometer'
        },
        {
          value: '48 h',
          label: '총 배양 시간',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: '수분 함량이 코지 품질을 결정하는 이유',
      level: 2
    },
    {
      type: 'paragraph',
      html: '성공적인 코지 재배에서 가장 중요한 요소는 <strong>기질 수분</strong>입니다. 쌀이나 보리를 찌면 전분 입자가 호화되어 물을 흡수하고 Aspergillus oryzae가 생성하는 효소에 접근 가능해집니다. 이상적인 수분 범위는 <strong>30%에서 35%</strong>로 좁습니다. 30% 미만이면 균사체가 성장에 충분한 물을 끌어낼 수 없고 효소 생산이 중단됩니다. 35%를 초과하면 곡물이 끈적거리고 뭉쳐져 공기 다공성이 감소하고 호기성 곰팡이가 질식합니다.'
    },
    {
      type: 'list',
      items: [
        '<strong>너무 건조함(30% 미만):</strong> 균사체 성장이 저해되고 효소 생산이 감소하며 코지가 곡물에 완전히 군집을 형성하지 못합니다.',
        '<strong>너무 습함(35% 초과):</strong> 곡물이 서로 달라붙고 공기 주머니가 붕괴되며 박테리아나 원치 않는 곰팡이가 Aspergillus oryzae를 능가할 수 있습니다.',
        '<strong>목표 범위(30-35%):</strong> 곡물이 단단하게 느껴지고 개별 알갱이가 쉽게 분리되며 균사체가 48시간 이내에 균일하게 퍼집니다.',
        '<strong>측정 방법:</strong> 건조 곡물의 무게를 재고, 찐 후 다시 무게를 잽니다. 계산기가 이 두 숫자로 정확한 수분 비율을 계산합니다.'
      ]
    },
    {
      type: 'table',
      headers: ['곡물 유형', '건조 무게', '목표 찐 무게', '불리기 시간', '찌는 시간'],
      rows: [
        ['백미(단립종)', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['백미(장립종)', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['진주 보리', '1000 g', '1350-1400 g', '4-8 h', '40-50 min'],
        ['현미', '1000 g', '1350-1400 g', '8-12 h', '45-60 min']
      ]
    },
    {
      type: 'title',
      text: '포자 접종: 얼마나 많은 타네코지가 필요하신가요?',
      level: 2
    },
    {
      type: 'paragraph',
      html: '접종 밀도는 곰팡이가 기질에 군집을 형성하는 속도와 오염 물질에 대한 경쟁력에 직접적인 영향을 미칩니다. 표준 비율은 <strong>건조 기질 1kg당 포자 혼합물 1g</strong>이지만 포자 유형에 따라 다릅니다.'
    },
    {
      type: 'proscons',
      title: '포자 유형 선택',
      items: [
        {
          pro: '표준 포자는 가장 일반적인 형태로, 초보자에게 관대하며 가정 양조 문헌에 잘 문서화되어 있습니다.',
          con: '배치당 분말량이 많고 접종에 기여하지 않는 충전제가 포함될 수 있습니다.'
        },
        {
          pro: '농축 포자는 동일한 접종에 절반의 분말을 사용하고 순도가 높으며 대량 배치에 더 경제적입니다.',
          con: '과다 투여하기 쉽고 정밀한 저울(0.01g 분해능)이 필요하며 과소 투여 시 오류 여지가 적습니다.'
        },
        {
          pro: '희석 혼합물은 넓은 표면에 쉽게 분포되고 고르지 않은 혼합에 더 관대하며 가시적인 커버를 선호하는 초보자에게 적합합니다.',
          con: '배치당 더 많은 분말을 사용하고 충전제로 인한 과도한 전분이 유입될 수 있습니다.'
        }
      ]
    },
    {
      type: 'title',
      text: '발열 열 곡선: 코지가 자체 열을 발생시키는 이유',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Aspergillus oryzae가 전분을 소비하여 단순 당으로 변환할 때 대사열을 발생시킵니다. 배양 <strong>18시간에서 36시간</strong> 사이에 생물학적 활동이 최고조에 달하여 인큐베이터 주변 온도보다 5-10C 높은 곡상 온도를 발생시키는 발열 서지를 생성합니다.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '코지가 과열되고 있다는 징후',
      html: '곡상 온도가 <strong>38C</strong>를 초과하면 곰팡이 효소가 변성되기 시작하고 균류가 생식 모드로 전환되어 <strong>녹색 또는 검은색 포자</strong>를 생성합니다. 배치에서 달콤하고 밤 같은 냄새 대신 암모니아 냄새가 납니다. 즉시 기질을 저어주고 인큐베이터 온도를 34C 이하로 낮추어야 합니다.'
    },
    {
      type: 'tip',
      title: '12시간 턴 스케줄',
      html: '18시간부터 곡상을 부수고 12시간마다 저어줍니다. 이렇게 하면 갇힌 열이 방출되고 수분이 재분배되며 균사체가 신선한 산소에 접근할 수 있습니다. 깨끗하고 소독된 손이나 멸균 숟가락을 사용하세요.'
    },
    {
      type: 'tip',
      title: '습도도 중요합니다',
      html: '배양 중 상대 습도를 <strong>65%</strong> 이상으로 유지하세요. 40% 미만에서는 기질이 건조해져 성장이 중단됩니다. 90% 이상에서는 결로가 곡물 표면의 박테리아 성장을 촉진할 수 있습니다.'
    },
    {
      type: 'tip',
      title: '자신의 코를 믿으세요',
      html: '건강한 코지는 달콤한 구운 밤이나 신선한 버섯 냄새가 납니다. 암모니아, 신맛 또는 부패 냄새가 감지되면 배치가 과열되었거나 오염되었을 수 있습니다. 영향을 받은 곡물을 즉시 제거하고 폐기하세요.'
    },
    {
      type: 'card',
      icon: 'mdi:rice',
      title: '사케 & 된장 만들기',
      html: '코지가 접종된 쌀은 <strong>사케</strong>, <strong>된장</strong>, <strong>아마자케</strong>의 기초입니다. 정확한 수분 제어는 전분-당 전환을 위한 적절한 효소 전개를 보장합니다.'
    },
    {
      type: 'card',
      icon: 'mdi:soy-sauce',
      title: '간장 & 타마리',
      html: '<strong>콩</strong> 또는 콩-밀 혼합물에서 재배된 코지는 감칠맛이 풍부한 간장을 생산하는 발효를 주도합니다. 일정한 온도는 이취를 방지합니다.'
    },
    {
      type: 'card',
      icon: 'mdi:shaker-outline',
      title: '시오코지 & 가룸',
      html: '<strong>시오코지</strong>(소금 발효 코지)와 <strong>육류 가룸</strong>은 완전히 군집화된 곡물에 의존합니다. 당사 계산기는 접종 전에 기질이 이상적인 수분 범위에 있도록 보장합니다.'
    },
    {
      type: 'title',
      text: '코지 배양 용어집',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: '타네코지',
          definition: '찐 곡물을 접종하는 데 사용되는 포자 분말. 일반적으로 Aspergillus oryzae 포자를 쌀가루와 같은 전분 담체와 혼합한 것입니다.'
        },
        {
          term: '발열 단계',
          definition: '배양 18시간에서 36시간 사이에 Aspergillus oryzae가 곡상 온도를 주변 온도 이상으로 올릴 만큼 충분한 대사열을 발생시키는 기간.'
        },
        {
          term: '호화',
          definition: '물의 존재 하에 전분을 가열하여 알갱이가 팽창하고 곰팡이가 생성하는 아밀라아제 효소에 접근 가능해지는 과정.'
        },
        {
          term: '포자 형성',
          definition: '곰팡이가 영양 성장에서 생식 모드로 전환되어 녹색이나 검은색으로 변하는 것. 이는 38C 이상의 열 스트레스에 의해 유발되며 요리용 배치를 망칩니다.'
        }
      ]
    },
    {
      type: 'summary',
      title: '완벽한 코지를 위한 핵심 요점',
      items: [
        '찐 곡물의 수분을 30-35%로 목표 설정. 계산기를 사용하여 정확한 목표 찐 무게를 찾으세요.',
        '표준 포자는 1 g/kg, 농축 포자는 0.5 g/kg, 희석 혼합물은 2 g/kg으로 접종하세요.',
        '배양 중 28-34C 및 65% 이상의 습도를 유지하세요. 18시간 후에는 12시간마다 저어주세요.',
        '18-36시간의 발열 피크를 관찰하세요. 온도가 38C를 초과하면 즉시 저어주고 열을 낮추세요.',
        '감각을 믿으세요: 달콤한 밤 향기 = 좋은 코지. 암모니아나 신 냄새 = 과열 또는 오염.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
