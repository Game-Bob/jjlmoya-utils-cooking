import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "아이스크림 PAC POD 계산기 저온 제법 가이드";
const description = "아이스크림의 항동결력과 감미력을 계산합니다. 정확한 당 프로필, 고형분 비율, 서빙 온도를 설계합니다.";
const faq = [
  {
    question: "아이스크림 배합에서 PAC란 무엇인가요?",
    answer: "PAC는 Potere Anticongelante의 약자로 항동결력을 나타냅니다. 주어진 서빙 온도에서 얼마나 많은 물이 얼어 있는 상태로 유지되는지를 결정하여 아이스크림의 물리적 경도를 제어합니다."
  },
  {
    question: "POD란 무엇이며 왜 중요한가요?",
    answer: "POD는 Potere Dolcificante의 약자로 상대적 감미력을 나타냅니다. 기준값 100을 가진 자당(설탕)에 비해 단맛을 측정합니다."
  },
  {
    question: "아이스크림에서 여러 당을 균형 맞추는 이유는 무엇인가요?",
    answer: "서로 다른 당은 고유한 PAC 및 POD 특성을 가지고 있습니다. 예를 들어, 포도당은 적당한 단맛과 높은 항동결력을 제공하는 반면, 자당은 표준적인 바디와 단맛을 제공합니다. 이들을 혼합하면 제품이 지나치게 달아지지 않으면서 크리미함을 제어할 수 있습니다."
  },
  {
    question: "아이스크림의 최적 고형분 비율은 어떻게 되나요?",
    answer: "총 고형분 비율은 일반적으로 36%에서 42% 사이입니다. 이 범위 아래의 고형분 비율은 얼음 같은 질감을 초래하고, 위의 비율은 모래알 같은 느낌이나 무거운 질감을 유발할 수 있습니다."
  }
];

const howTo = [
  {
    name: "베이스 혼합물과 서빙 온도 설정",
    text: "베이스 액체 혼합물의 중량을 정의하고 아이스크림을 서빙하려는 목표 서빙 온도를 입력합니다."
  },
  {
    name: "당의 양 입력",
    text: "자당, 포도당, 포도당, 전화당, 트레할로스 등 다양한 당의 슬라이더를 조정하여 레시피를 구성합니다."
  },
  {
    name: "PAC 및 POD 값 분석",
    text: "계산된 PAC 및 POD 값을 목표 온도에 권장되는 목표 값과 비교합니다."
  },
  {
    name: "고형분 비율과 푸기 용이성 확인",
    text: "총 고형분 비율이 최적 범위 내에 있는지 확인하고 푸기 용이성 표시기를 확인하여 최종 질감을 예측합니다."
  }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
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
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'ice-cream-pac-pod',
  title: '아이스크림 PAC POD 계산기',
  description: '아이스크림의 항동결력과 감미력을 계산합니다. 정확한 당 프로필, 고형분 비율, 서빙 온도를 설계합니다.',
  faqTitle: '자주 묻는 질문',
  ui: {
    title: "아이스크림 저온 계산기",
    subtitle: "분자 요리를 위한 정밀 저온 배합 대시보드",
    unitLabel: "단위 시스템",
    metricUnit: "미터법 (그램)",
    imperialUnit: "야드파운드법 (온스)",
    baseWeightLabel: "베이스 혼합물 중량",
    targetTempLabel: "서빙 온도",
    sucroseLabel: "자당",
    dextroseLabel: "포도당",
    glucoseLabel: "글루코스 DE40",
    invertedLabel: "전화당",
    trehaloseLabel: "트레할로스",
    pacLabel: "항동결력 (PAC)",
    podLabel: "감미력 (POD)",
    solidsLabel: "총 고형분",
    targetPacLabel: "목표 PAC",
    scoopabilityLabel: "푸기 용이성 상태",
    stoneState: "돌처럼 단단함",
    creamyState: "완벽한 크리미함",
    soupState: "녹는 수프",
    stoneDesc: "이 온도에 대해 항동결력이 너무 낮습니다. 혼합물이 돌처럼 얼 것입니다.",
    creamyDesc: "PAC 균형이 최적입니다. 아이스크림이 푸기 쉽고 크리미해집니다.",
    soupDesc: "항동결력이 너무 높습니다. 아이스크림이 빨리 녹고 액체 상태로 남습니다.",
    gLabel: "g",
    ozLabel: "oz",
    cLabel: "C",
    fLabel: "F",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '아이스크림 저온 배합의 과학적 원리와 유리 전이상 제어',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '아이스크림은 기포, 지방 구체, 얼음 결정, 비동결 농축 혈청상으로 구성된 복잡한 다상 열역학적 에멀젼입니다. 완벽한 크리미함과 푸기 용이성을 달성하려면 혼합물 내 물의 어는점 내림을 주의 깊게 제어해야 합니다. 온도가 빙점 아래로 떨어지면 물이 얼음으로 결정화되기 시작합니다. 남아 있는 액체 혈청의 용해된 용질 농도가 증가하여 어는점을 더욱 낮춥니다. 얼어붙은 얼음 결정과 비동결 시럽상 사이의 균형이 최종 제품의 경도와 매끄러움을 결정합니다.',
    },
    {
      type: 'title',
      text: 'PAC 이해: 항동결력과 내림의 수학',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC(Potere Anticongelante)는 자당에 대한 용질의 항동결력을 나타냅니다. 자당은 PAC 값 100의 기준 표준으로 지정됩니다. 그 메커니즘은 총괄성에 의해 지배되며, 어는점 내림은 용질의 질량이 아니라 물에 용해된 활성 분자의 수에 의존합니다. 포도당(분자량 180 g/mol)과 같은 단당류는 자당(분자량 342 g/mol)과 같은 이당류보다 그램당 약 2배 많은 분자를 제공하여 PAC 190을 생성합니다. 높은 PAC 값은 주어진 온도에서 더 많은 물이 액체 상태로 유지된다는 것을 의미하며, 아이스크림이 돌처럼 단단하게 얼지 않도록 방지합니다.',
    },
    {
      type: 'title',
      text: 'POD 이해: 감미력과 관능적 균형',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'POD(Potere Dolcificante)는 자당(기준값 100)과 비교한 상대적 단맛을 측정하는 지표입니다. 고품질 아이스크림이나 젤라토를 배합할 때 단맛의 균형은 구조적 견고성만큼 중요합니다. 배합자가 어는점을 낮추기 위해(PAC를 높이기 위해) 자당만 사용하면 아이스크림은 원하는 부드러움에 도달하기 전에 느끼할 정도로 달아집니다. 이 한계를 극복하기 위해 분자 요리학에서는 포도당(POD 70), 트레할로스(POD 45) 또는 미립화 글루코스 DE40(POD 40)과 같은 당을 활용합니다. 이들은 미각을 압도하지 않으면서 동결 곡선을 맞춤 설정할 수 있게 합니다.',
    },
    {
      type: 'title',
      text: '일반적인 저온 배합 당류의 비교 데이터베이스',
      level: 3,
    },
    {
      type: 'table',
      headers: ['당 종류', '상대 PAC', '상대 POD', '고형분 함량 (%)', '요리적 용도'],
      rows: [
        ['자당', '100', '100', '100%', '표준 바디, 깔끔한 단맛 프로필, 표준 베이스'],
        ['포도당', '190', '70', '100%', '어는점 낮춤, 부드러움 증가, 단맛 감소'],
        ['글루코스 DE40', '90', '40', '95%', '바디 추가, 재결정화 방지, 점도 증가'],
        ['전화당', '190', '130', '70%', '부드러움 추가, 흡습 특성, 과일 향미 강화'],
        ['트레할로스', '100', '45', '90%', '저단맛 바디제, 단백질 보호, 깔끔한 마무리'],
      ],
    },
    {
      type: 'title',
      text: '총 고형분 비율과 구조적 에멀젼 안정성',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '총 고형분에는 지방, 무지유 고형분, 안정제, 유화제 및 당을 포함한 배합의 모든 비수분 요소가 포함됩니다. 최적의 아이스크림 혼합물은 36%에서 42%의 총 고형분을 유지합니다. 고형분이 너무 낮으면 높은 수분 함량이 큰 얼음 결정 성장과 거친 질감으로 이어집니다. 고형분이 너무 높으면 점도가 과도하게 증가하여 무거운 질감과 유당 결정화로 인한 잠재적 모래알 같은 느낌이 발생합니다.',
    },
    {
      type: 'title',
      text: '저온 배합 성공을 위한 실용적 단계',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '진열 캐비닛의 목표 서빙 온도를 결정합니다. 젤라토는 일반적으로 영하 12도씨에서 제공되는 반면, 산업용 아이스크림은 영하 18도씨에서 더 차갑게 제공됩니다.',
        '표준 온도 공식을 사용하여 목표 PAC를 계산합니다. 영하 12도씨의 경우 목표 PAC는 약 216입니다.',
        '당 블렌드를 선택합니다. 표준 단맛을 위해 자당, 어는점을 낮추기 위해 포도당, 바디와 질감을 개선하기 위해 글루코스를 결합합니다.',
        '최적의 통기와 혀 위에서의 부드러운 용융 프로필을 보장하기 위해 총 고형분이 안전한 36%에서 42% 범위 내에 있는지 확인합니다.'
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
