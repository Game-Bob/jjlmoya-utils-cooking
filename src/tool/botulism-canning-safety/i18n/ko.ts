import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Botulism Canning Safety Checker Thermal Death Calculator";
const description = "Clostridium botulinum에 대한 열 포자 감소 및 F0 살균 치사율을 계산합니다. 저산성 및 산성 통조림 안전 구역을 평가합니다.";
const faq = [
  {
    question: "가정 통조림에서 왜 Clostridium botulinum이 주요 우려 대상인가요?",
    answer: "Clostridium botulinum은 혐기성 포자 형성 세균으로, 가장 치명적인 생물학적 물질 중 하나인 보툴리누스 독소를 생성합니다. 포자는 열에 매우 강하며, 온도가 충분하지 않으면 밀봉된 병 내부의 혐기성 조건에서 생존할 수 있습니다."
  },
  {
    question: "식품 보존에서 pH 4.6의 중요한 의미는 무엇인가요?",
    answer: "pH 4.6 미만의 식품은 산성으로 분류됩니다. 이러한 환경에서는 보툴리누스 포자가 발아하거나 독소를 생성할 수 없습니다. pH 4.6 이상의 식품의 경우, 포자를 파괴하기 위해 섭씨 116도 이상의 온도에 도달하는 압력 통조림이 필수입니다."
  },
  {
    question: "F0 살균 치사율 값이란 무엇인가요?",
    answer: "F0 값은 121.11도에서의 등가 살균 시간을 측정합니다. 표준 저산성 살균 공정에서는 3.0분 이상의 F0 값이 필요하며, 이는 포자 수의 12자리 감소(12D)에 해당합니다."
  },
  {
    question: "저산성 식품에 수조 통조림을 사용할 수 없는 이유는 무엇인가요?",
    answer: "수조 통조림은 끓는점(섭씨 100도)까지만 도달합니다. 이 온도는 저산성 식품에서 Clostridium botulinum의 내열성 포자를 죽이기에 불충분합니다. 포자는 실온에서 생존하여 독소를 생성합니다."
  }
];

const howTo = [
  {
    name: "식품 산도 입력",
    text: "식재료의 pH 값을 측정하여 입력하세요. pH가 4.6 이상이면 저산성 식품입니다."
  },
  {
    name: "통조림 방식 선택",
    text: "사용하는 보존 장비에 따라 수조 통조림 또는 압력 통조림을 선택하세요."
  },
  {
    name: "온도와 시간 설정",
    text: "통조림 처리 온도와 병이 해당 온도로 유지되는 시간(분)을 입력하세요."
  },
  {
    name: "안전 진단 평가",
    text: "결과 F0 값, 포자 감소 수, 안전 구역 표시기를 확인하여 기준 충족 여부를 판단하세요."
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
  slug: 'botulism-canning-safety',
  title: 'Botulism Canning Safety Checker',
  description: 'Clostridium botulinum에 대한 열 포자 감소 및 F0 살균 치사율을 계산합니다. 저산성 및 산성 통조림 안전 구역을 평가합니다.',
  faqTitle: '자주 묻는 질문',
  ui: {
    title: "통조림 오토클레이브 모니터",
    subtitle: "열 사멸 진단 및 보툴리누스 안전성 평가 도구",
    methodLabel: "통조림 방법",
    waterBath: "수조 통조림",
    pressureCanner: "압력 통조림",
    tempLabel: "통조림 온도",
    timeLabel: "처리 시간",
    phLabel: "식품 pH",
    f0Label: "F0 치사율 값",
    dLabel: "계산된 D 값",
    sporesLabel: "포자 수",
    statusSafe: "살균 완료",
    statusMarginal: "살균 불충분",
    statusUnsafe: "보툴리누스 위험 높음",
    statusSafeDesc: "열 치사율이 목표 F0 3.0분을 초과합니다. 포자가 완전히 불활성화되었습니다.",
    statusMarginalDesc: "처리가 부분적 불활성화에 도달했지만 12D 안전 기준에 미치지 못합니다. 시간 또는 온도를 조정하세요.",
    statusUnsafeDesc: "처리가 Clostridium botulinum을 불활성화하지 못했습니다. 수조에서 처리된 저산성 식품은 위험한 상태입니다.",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "분",
    logReductionLabel: "로그 감소",
    dValueUnit: "분",
    indicatorSectionTitle: "진단 게이지",
    visualizerSectionTitle: "포자 감소",
    f0Tooltip: "121.11°C에서의 등가 살균 시간(분). 안전 임계값은 3.0 이상입니다.",
    dTooltip: "로그 감소 시간: 현재 온도에서 포자의 90%를 파괴하는 데 필요한 시간(분).",
    logReductionTooltip: "10배 감소 횟수. 12D 감소가 안전 기준입니다.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '열처리 및 포자 불활성화 동역학의 과학적 메커니즘',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '통조림의 열처리는 병원성 및 부패 미생물을 파괴하여 상업적 살균을 보장합니다. 저산성 식품 보존에서 안전 지침의 주요 초점은 Clostridium botulinum입니다. 보툴리누스 포자는 영양 세포에 비해 열에 매우 강합니다. 이러한 포자를 불활성화하려면 계산된 시간 동안 고온을 적용하는 열 사멸 공정이 필요합니다. 온도와 불활성화 속도 간의 수학적 관계는 로그 감소 시간(D 값)과 온도 의존성 계수(z 값)로 표현됩니다.',
    },
    {
      type: 'title',
      text: '식품 분류와 중요한 pH 4.6 안전 임계값',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'pH 4.6은 보존 안전의 분기점입니다. pH 4.6 미만의 산성 식품은 자연적으로 보툴리누스 포자의 발아와 독소 생성을 억제합니다. 이러한 식품의 경우 끓는 수조에서 섭씨 100도로 처리하는 것으로 충분합니다. 그러나 pH 4.6 이상의 저산성 식품은 증기 온도를 높이고 완전한 열 포자 파괴를 달성하기 위해 압력 통조림을 거쳐야 합니다. 아래 표는 일반적인 식재료의 분류와 통조림 방법을 자세히 설명합니다.',
    },
    {
      type: 'table',
      headers: ['식품 그룹', 'pH 범위', '필요한 통조림 방법', '일반적인 예'],
      rows: [
        ['고산성', '4.0 미만', '수조 통조림', '사과, 베리, 감귤류, 복숭아, 식초 피클'],
        ['산성 조정 또는 중산성', '4.0~4.6', '산 조정 수조 통조림', '토마토, 무화과, 배'],
        ['저산성', '4.6 이상', '압력 통조림(필수)', '육류, 해산물, 콩류, 옥수수, 감자, 수프'],
      ],
    },
    {
      type: 'title',
      text: '고도 조정과 끓는점 안전 보정',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '고도가 높아짐에 따라 대기압이 낮아져 물의 끓는점이 섭씨 100도 아래로 떨어집니다. 수조 통조림에서 이 낮은 온도는 포자의 D 값을 증가시키므로 더 긴 처리 시간이 필요합니다. 압력 통조림에서는 목표 내부 살균 온도를 유지하기 위해 다이얼 또는 웨이트 게이지 설정을 높여야 합니다. 아래는 끓는점과 필요한 압력 통조림 조정에 대한 참조 가이드입니다.',
    },
    {
      type: 'table',
      headers: ['고도 범위', '물 끓는점', '필요한 다이얼 게이지 압력', '필요한 웨이트 게이지 압력'],
      rows: [
        ['0~300 m', '100.0 °C', '11 PSI(121 °C)', '10 PSI(121 °C)'],
        ['300~600 m', '99.0 °C', '11 PSI(121 °C)', '15 PSI(121 °C)'],
        ['600~900 m', '98.0 °C', '12 PSI(121 °C)', '15 PSI(121 °C)'],
        ['900~1200 m', '97.0 °C', '13 PSI(121 °C)', '15 PSI(121 °C)'],
        ['1200~1500 m', '96.0 °C', '13 PSI(121 °C)', '15 PSI(121 °C)'],
        ['1500~2000 m', '94.5 °C', '14 PSI(121 °C)', '15 PSI(121 °C)'],
      ],
    },
    {
      type: 'title',
      text: '12D 포자 감소 개념이 보툴리누스증을 예방하는 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '열에 의한 세균 파괴는 로그함수적입니다. D 값은 특정 온도에서 포자 수의 90%를 파괴하는 데 필요한 시간을 나타내며, 이는 1로그 감소에 해당합니다. Clostridium botulinum의 기준 D 값은 121.11도에서 0.21분입니다. 높은 안전 마진을 달성하기 위해 상업적 기준은 12로그 감소 공정(12D)을 요구하며, 이는 포자 수가 10의 12제곱 분의 1로 감소됨을 의미합니다. 이는 목표 F0 값 3.0분을 산출하며 저산성 식품의 안전성을 보장합니다.',
    },
    {
      type: 'title',
      text: '실용적인 가정 통조림 지침과 안전 팁',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '토마토는 자연 pH가 중요한 4.6 임계값 부근에서 변동하므로 수조 처리 전에 레몬 주스나 구연산으로 반드시 산도를 조정하세요.',
        '처리 시간을 단축하거나 온도를 낮추지 마세요. 열 사멸 동역학은 로그함수적이며 작은 조정에도 포자가 생존할 수 있습니다.',
        '압력 통조림기의 다이얼 게이지는 매년 정확도를 테스트하세요. 잘못된 압력 판독값은 내부 살균 온도에 직접적인 영향을 미칩니다.',
        '고도 차이를 보정하기 위해 수조에서는 처리 시간을 조정하고 압력 통조림에서는 PSI 설정을 높이세요.',
        '전체 레시피에 산이 포함되어 있더라도 육류나 콩류 같은 저산성 식재료가 포함된 혼합 레시피는 수조 통조림으로 처리하지 마세요.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
