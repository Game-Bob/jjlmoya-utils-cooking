import type { ToolLocaleContent } from '../../../types';

const title = "바나나 숙도 진단 및 보관: 과학적 가이드";
const description = "바나나의 숙성 상태를 과학적인 정밀함으로 분석합니다. 보관 기술, 에틸렌의 생화학, 그리고 영양 최적화 방법을 배워보세요.";
const faq = [
  {
    question: '왜 바나나를 냉장고에 넣으면 검게 변하나요?',
    answer: '추위가 껍질의 세포벽을 파괴하여 페놀을 산화시키고 검은 폴리페놀을 만드는 효소를 방출하기 때문입니다. 하지만 속살은 대개 상온보다 냉장고에서 더 오랫동안 단단함과 단맛을 유지할 수 있습니다.',
  },
  {
    question: '바나나를 빨리 숙성시킬 수 있는 방법은 무엇인가요?',
    answer: '사과나 토마토와 함께 밀폐된 종이 봉투에 넣어두세요. 이들은 숙성을 촉진하는 에틸렌 가스를 방출합니다. 매우 급한 경우라면 저온의 오븐에 몇 분간 구워 인위적으로 숙성시킬 수도 있습니다.',
  },
  {
    question: '반점(슈가 스팟)이 있는 바나나를 먹어도 안전한가요?',
    answer: '네, 완전히 안전합니다. 사실 반점은 전분이 당분으로 변했다는 증거이며, 더 달콤하고 소화가 잘 되는 상태를 의미합니다. 곰팡이가 피었거나 냄새가 나거나 너무 흐물흐물한 경우에만 버리시면 됩니다.',
  },
  {
    question: '에틸렌이란 무엇인가요?',
    answer: '성장과 숙성을 조절하는 가스 형태의 식물 호르몬입니다. 바나나는 후숙 과일(Climacteric fruit)로, 수확 후에도 에틸렌을 생성하며 계속해서 익어갑니다.',
  },
];
const howTo = [
  {
    name: '색상 관찰',
    text: '녹색부터 짙은 갈색까지 껍질 색상을 주의 깊게 살펴 현재의 숙성 단계를 확인하세요.',
  },
  {
    name: '시뮬레이터 사용',
    text: '숙도 인디케이터를 슬라이드하여 다음 단계에 언제 도달할지에 대한 정확한 예측을 확인하세요.',
  },
  {
    name: '환경 조절',
    text: '온도와 습도를 변경하여 숙성 속도에 어떤 영향을 미치는지 확인해 보세요.',
  },
  {
    name: '보관법 적용',
    text: '현재 상태에 따른 구체적인 보관 및 숙성 촉진 권장 사항을 따르세요.',
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
  slug: 'banana-ripeness',
  title: "바나나 숙도 진단 및 보관: 과학적 가이드",
  description: "바나나의 숙성 상태를 과학적인 정밀함으로 분석합니다. 보관 기술, 에틸렌의 생화학, 그리고 영양 최적화 방법을 배워보세요.",
  faqTitle: "자주 묻는 질문",
  bibliographyTitle: "출처 및 참고 문헌",
  ui: {
    ripesnessLabel: "숙성 상태",
    nextStageLabel: "다음 단계까지",
    daysUnit: "일",
    tempLabel: "온도",
    humidityLabel: "습도",
    partnerToggleTitle: "후숙 파트너",
    partnerToggleSubtitle: "외부 에틸렌 효과",
    conservationTitle: "보관 방법",
    accelerationTitle: "숙성 촉진",
    stage1Name: "에메랄드 그린",
    stage1Desc: "저항성 전분 함량 최대. 매우 단단한 상태.",
    stage1Conservation: "상온 보관 (18-20°C). 냉기 (<12°C) 회避.",
    stage1Acceleration: "사과나 익은 토마토와 함께 종이 봉투에 보관.",
    stage2Name: "래디언트 옐로우",
    stage2Desc: "단단함과 단맛이 시작되는 완벽한 균형점.",
    stage2Conservation: "서늘한 곳, 에틸렌 전이를 늦추기 위해 송이에서 분리 보관.",
    stage2Acceleration: "통째로 비닐로 감싸 송이 상태 유지.",
    stage3Name: "스위트 스팟 (반점)",
    stage3Desc: "항산화 성분 정점. 진한 단맛과 크리미한 질감.",
    stage3Conservation: "과육 보호를 위해 냉장 보관 (껍질은 검게 변함).",
    stage3Acceleration: "완만한 열기 (열원 근처, 직화는 금지).",
    stage4Name: "시나몬 브라운",
    stage4Desc: "매우 부드러운 질감. 설탕 없는 베이킹에 이상적인 천연 감미료.",
    stage4Conservation: "껍질을 벗겨 즉시 냉동.",
    stage4Acceleration: "이미 최대 숙성에 도달했습니다.",
    stage5Name: "과숙 / 발효",
    stage5Desc: "부패가 진행 중인 단계.",
    stage5Conservation: "직접 섭취를 권장하지 않음.",
    stage5Acceleration: "해당 없음",
  },
  faq: [
    {
      question: '왜 바나나를 냉장고에 넣으면 검게 변하나요?',
      answer: '추위가 껍질의 세포벽을 파괴하여 페놀을 산화시키고 검은 폴리페놀을 만드는 효소를 방출하기 때문입니다. 하지만 속살은 대개 상온보다 냉장고에서 더 오랫동안 단단함과 단맛을 유지할 수 있습니다.',
    },
    {
      question: '바나나를 빨리 숙성시킬 수 있는 방법은 무엇인가요?',
      answer: '사과나 토마토와 함께 밀폐된 종이 봉투에 넣어두세요. 이들은 숙성을 촉진하는 에틸렌 가스를 방출합니다. 매우 급한 경우라면 저온의 오븐에 몇 분간 구워 인위적으로 숙성시킬 수도 있습니다.',
    },
    {
      question: '반점(슈가 스팟)이 있는 바나나를 먹어도 안전한가요?',
      answer: '네, 완전히 안전합니다. 사실 반점은 전분이 당분으로 변했다는 증거이며, 더 달콤하고 소화가 잘 되는 상태를 의미합니다. 곰팡이가 피었거나 냄새가 나거나 너무 흐물흐물한 경우에만 버리시면 됩니다.',
    },
    {
      question: '에틸렌이란 무엇인가요?',
      answer: '성장과 숙성을 조절하는 가스 형태의 식물 호르몬입니다. 바나나는 후숙 과일(Climacteric fruit)로, 수확 후에도 에틸렌을 생성하며 계속해서 익어갑니다.',
    },
  ],
  howTo: [
    {
      name: '색상 관찰',
      text: '녹색부터 짙은 갈색까지 껍질 색상을 주의 깊게 살펴 현재의 숙성 단계를 확인하세요.',
    },
    {
      name: '시뮬레이터 사용',
      text: '숙도 인디케이터를 슬라이드하여 다음 단계에 언제 도달할지에 대한 정확한 예측을 확인하세요.',
    },
    {
      name: '환경 조절',
      text: '온도와 습도를 변경하여 숙성 속도에 어떤 영향을 미치는지 확인해 보세요.',
    },
    {
      name: '보관법 적용',
      text: '현재 상태에 따른 구체적인 보관 및 숙성 촉진 권장 사항을 따르세요.',
    },
  ],
  bibliography: [
    {
      name: 'Ethylene and Fruit Ripening: A Biological Review',
      url: '',
    },
    {
      name: 'Biochemical Changes in Musa acuminata during Ripening (Journal of Food Science)',
      url: 'https://www.foodsciencejournal.com/assets/archives/2017/vol2issue5/2-5-31-566.pdf',
    },
    {
      name: 'The Role of Respiration in Climacteric Fruits (Scientific American)',
      url: 'https://www.nature.com/articles/226976b0',
    },
  ],
  seo: [
    {
      type: 'title',
      text: "바나나 (Musa × paradisiaca) 숙성의 과학",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "바나나는 세계에서 가장 많이 소비되는 과일 중 하나이지만, 생물학적으로 가장 오해를 많이 받는 과일이기도 합니다. 감귤류나 포도와 같은 비후숙 과일과 달리, 바나나는 <strong>후숙 과일(Climacteric fruit)</strong>입니다. 이는 수확 후에도 계속해서 숙성이 진행되며, 세포 호흡이 급격히 증가하고 핵심적인 가스형 식물 호르몬인 <strong>에틸렌</strong> 생성이 증가함을 의미합니다.",
    },
    {
      type: 'paragraph',
      html: "생화학적 관점에서 보면, 숙성은 일련의 효소 반응 과정입니다. 이 과정 동안 아밀라아제와 같은 효소들이 복합 탄수화물(전분)을 단순 당(과당, 포도당, 자당)으로 분해합니다. 이러한 변화는 맛을 더 달게 할 뿐만 아니라 세포벽의 펙틴을 분해하여 질감을 변화시키며, 익은 바나나 특유의 부드럽고 크리미한 질감을 만들어냅니다.",
    },
    {
      type: 'title',
      text: "에틸렌 사이클",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "에틸렌은 생물학적 스위치 역할을 합니다. 과일이 극미량의 에틸렌 농도를 감지하면 더 많은 에틸렌 생성을 담당하는 유전자를 활성화하여 양의 피드백 루프를 형성합니다. 이것이 바로 아주 잘 익은 바나나 하나가 과일 바구니 안에 있는 주변 바나나들의 숙성을 가속화하는 이유입니다. 이 과정을 늦추려면 갈색 반점이 생긴 바나나를 아직 녹색인 바나나로부터 격리하는 것이 필수적입니다.",
    },
    {
      type: 'title',
      text: "냉장 보관의 오해",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "바나나를 절대 냉장고에 넣으면 안 된다는 민간 신앙이 있습니다. 하지만 실제로는 더 복잡합니다. 저온(12°C 미만)은 껍질 세포에 냉해를 입혀 페놀을 산화시키는 효소를 방출하고 껍질을 검게 만듭니다. 하지만 이는 외관상의 미학에만 영향을 미칩니다. 만약 내부 과육이 이미 원하는 만큼 숙성되었다면, 냉기는 과육의 연화를 거의 완전히 멈춰 맛과 질감을 며칠 더 유지시켜 줍니다.",
    },
    {
      type: 'title',
      text: "고급 보관 전략",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "<strong>줄기 밀봉:</strong> 바나나 송이 끝부분을 랩으로 감싸면 에틸렌 방출이 급격히 감소하여 보관 수명을 최대 72시간까지 연장할 수 있습니다.",
    },
    {
      type: 'paragraph',
      html: "<strong>매달기 보관:</strong> 바나나를 매달아 두면 자중에 의한 눌림 손상을 방지할 있습니다. 손상된 조직은 에틸렌을 더 빨리 방출하여 숙성을 가속화하는 거점이 되는데, 매달아 두면 이를 방지하고 송이 전체의 품질을 고르게 유지할 수 있습니다.",
    },
    {
      type: 'paragraph',
      html: "<strong>냉동 보관:</strong> 4단계(갈색) 바나나의 경우 냉동이 가장 좋은 옵션입니다. 냉동 전 껍질을 벗기면 수분이 갇히는 것을 방지하여 섬유질의 품질을 보존할 수 있습니다.",
    },
    {
      type: 'title',
      text: "단계별 영양 변화",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "바나나가 익어감에 따라 영양 프로필은 근본적으로 변화하며, 이는 소비자의 목적에 따라 특정한 식이 도구로 활용될 수 있게 합니다.",
    },
    {
      type: 'table',
      headers: ["단계", "저항성 전분", "특징", "주요 이점"],
      rows: [
        ["녹색 (1-2)", "~80%", "매우 단단함, 전분 함량 최대", "장 건강 및 혈당 조절"],
        ["노란색 (3)", "~5%", "단단함과 단맛의 균형", "빠른 에너지 공급 및 비타민 B"],
        ["반점 (4)", "최소", "매우 부드러움, 당분 함량 높음", "항산화 능력 최대"],
        ["갈색/과숙 (5)", "거의 없음", "매우 흐물흐물한 질감, 발효 진행", "섭취 권장 안 함"],
      ],
    },
    {
      type: 'title',
      text: "결론 및 실전 활용",
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>음식물 쓰레기 감소:</strong> 바나나 상태를 정확히 진단하면 최적의 섭취 시점을 파악하여 귀중한 과일을 버리는 일을 방지할 수 있습니다.',
        '<strong>영양적 이점 최적화:</strong> 장 건강을 위한 녹색 바나나의 저항성 전분부터 항산화 효과를 극대화하기 위한 반점 바나나까지 목적에 맞게 선택하세요.',
        '<strong>전략적 섭취 계획:</strong> 혈당 조절, 빠른 에너지원, 소화 증진 등 건강 목표에 맞춰 바나나를 활용해 보세요.',
      ],
    },
    {
      type: 'tip',
      html: "<strong>부패 경고:</strong> 상대 습도 85% 이상 또는 온도 25°C 이상의 외부 요인은 부패를 급격히 가속화하여 단 몇 시간 만에 바나나를 먹을 수 없는 상태로 만들 수 있습니다. 본 시뮬레이터는 이러한 변화를 예측하고 전략적으로 대비하는 데 도움을 줍니다.",
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
