import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "락토 발효 소금 계산기 바이오 오가닉 과학 가이드";
const description = "건식 염장과 습식 염수에 대한 정밀한 소금 비율을 계산합니다. 박테리아 개체군의 균형을 맞추고, 곰팡이를 방지하며, 식품 보존을 마스터하세요.";
const faq = [
  {
    question: "락토 발효에서 소금 비율이 중요한 이유는 무엇인가요?",
    answer: "소금은 삼투압을 통해 유해한 병원균과 곰팡이를 억제하는 동시에 내염성 유산균(LAB)이 번성하고, 당을 발효시키며, 유산을 생성할 수 있도록 합니다."
  },
  {
    question: "건식 염장과 습식 염수의 차이점은 무엇인가요?",
    answer: "건식 염장은 식품 자체의 수분을 이용해 소금을 녹입니다(강판에 간 양배추에 이상적). 습식 염수는 외부 물과 소금을 추가하여 통째로 또는 조각낸 야채를 완전히 잠기게 합니다."
  },
  {
    question: "염소 처리된 수돗물을 발효에 사용할 수 있나요?",
    answer: "염소는 박테리아 성장을 억제할 수 있습니다. 일관된 발효 결과를 위해 여과수 또는 샘물을 사용하는 것이 좋습니다."
  },
  {
    question: "중량 백분율이 부피 측정보다 더 나은가요?",
    answer: "네. 소금 종류(코셔 소금, 천일염, 식탁용 소금)에 따라 결정 크기와 밀도가 다릅니다. 소금을 그램 단위로 계량하면 사용하는 소금 종류에 관계없이 정확한 염도를 보장합니다."
  }
];

const howTo = [
  {
    name: "발효 모드 선택",
    text: "야채의 자연즙을 사용하는 경우 건식 모드를, 재료를 덮기 위해 물을 추가하는 경우 습식 모드를 선택하세요."
  },
  {
    name: "재료 계량",
    text: "야채의 정확한 중량을 그램 단위로 입력하세요. 습식 염수를 사용하는 경우 물의 중량도 입력하세요."
  },
  {
    name: "목표 염도 조정",
    text: "염도 백분율 컨트롤을 슬라이드하세요. 일반적인 안전과 최적의 유산균 성장을 위해 2.0%~3.5%를 목표로 하세요."
  },
  {
    name: "소금 계량",
    text: "디지털 저울을 사용하여 필요한 정확한 소금 그램을 측정하세요. 발효 용기에 추가하세요."
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
  slug: 'lacto-fermentation-salt-calculator',
  title: '락토 발효 소금 계산기',
  description: '건식 염장과 습식 염수에 대한 정밀한 소금 비율을 계산합니다. 박테리아 개체군의 균형을 맞추고, 곰팡이를 방지하며, 식품 보존을 마스터하세요.',
  faqTitle: '자주 묻는 질문',
  ui: {
    title: "락토 발효 소금 계산기",
    subtitle: "바이오 오가닉 보존을 위한 정밀 염도 제어",
    unitLabel: "측정 시스템",
    metricUnit: "미터법 (g / 그램)",
    imperialUnit: "야드파운드법 (oz / 온스)",
    modeLabel: "발효 모드",
    dryMode: "건식 염장",
    wetMode: "습식 염수",
    vegWeightLabel: "야채 중량",
    waterWeightLabel: "물 중량",
    salinityLabel: "목표 염도 (%)",
    saltGramsLabel: "필요 소금량",
    fineSaltLabel: "고운 소금 (티스푼)",
    kosherSaltLabel: "코셔 소금 (티스푼)",
    statusDanger: "위험 구역",
    statusDangerDesc: "2.0% 미만의 염도는 병원균과 곰팡이를 차단하기에 불충분합니다. 안전을 보장하려면 염도를 높이세요.",
    statusOptimal: "최적 LAB 구역",
    statusOptimalDesc: "2.0%~3.5%의 염도는 유산균(LAB)이 우세하게 번성하고 안전하게 발효하기에 이상적입니다.",
    statusInhibited: "억제 구역",
    statusInhibitedDesc: "3.5% 이상의 염도는 발효를 늦추거나 중단시킵니다. 장기 보관에 유용하지만 박테리아 활동을 지연시킵니다.",
    petriTitle: "미생물 시뮬레이션",
    scaleTitle: "디지털 저울 디스플레이",
    disclaimer: "참고: 부피 측정보다 디지털 저울을 사용한 소금 계량을 강력히 권장합니다.",
    kosherLabel: "코셔 소금",
    fineLabel: "고운 소금",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '락토 발효 화학과 염도 제어의 궁극적인 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '락토 발효는 유산균(LAB)이 야채와 과일을 보존하기 위해 추진하는 역동적인 생화학적 과정입니다. 전체 메커니즘은 유익한 박테리아가 번성하는 반면 부패균, 곰팡이 및 병원균이 억제되는 선택적 환경을 조성하는 데 달려 있습니다. 염도 제어는 이러한 생물학적 선택성을 달성하기 위한 가장 중요한 수단입니다.',
    },
    {
      type: 'title',
      text: '보존에서 소금의 생화학적 작용',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '소금이 생야채에 도입되면 <strong>삼투압</strong>으로 알려진 물리적 과정을 통해 작용합니다. 식물 세포 외부의 높은 소금 농도는 삼투(원형질 분리)를 통해 식물 조직에서 물과 용해된 당을 끌어냅니다. 이는 유산균을 위한 완벽한 연료 역할을 하는 영양이 풍부한 염수를 생성합니다. 동시에 삼투압은 <em>대장균</em>이나 <em>보툴리누스균</em>과 같은 원치 않는 곰팡이, 효모 및 병원성 박테리아의 세포막을 탈수시키고 용해시킵니다. 이들은 높은 염도 수준을 견딜 수 없습니다.',
    },
    {
      type: 'title',
      text: '미생물 천이: LAB가 발효를 지배하는 방법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '락토 발효는 단일 박테리아 종에 의해 수행되는 것이 아니라 산도가 증가함에 따라 우세해지는 다양한 균주의 천이에 의해 진행됩니다. 전형적인 야채 발효에서 주기는 세 가지 뚜렷한 단계로 진행됩니다:',
    },
    {
      type: 'list',
      items: [
        '<strong>1단계 - Leuconostoc mesenteroides:</strong> 이 혼합발효성 박테리아가 발효를 시작합니다. 초기에 매우 활동적이며 유산, 아세트산, 이산화탄소(혐기성 환경 조성에 도움) 및 에탄올을 생성합니다. pH를 빠르게 낮추어 후속 종을 위한 배지를 준비합니다.',
        '<strong>2단계 - Lactobacillus plantarum 및 Lactobacillus brevis:</strong> pH가 5.0 아래로 떨어지면 <em>L. mesenteroides</em>는 죽고 <em>L. plantarum</em>과 같은 내산성 단일발효성 박테리아가 우세해집니다. 남은 단순당을 오직 유산으로만 발효시켜 pH를 빠르게 낮춥니다.',
        '<strong>3단계 - Pediococcus pentosaceus 및 기타:</strong> 장기 발효에서 이러한 고내산성 박테리아는 당이 완전히 고갈되거나 pH가 약 3.5~3.8에 도달할 때까지 산을 계속 생성하여 환경을 무기한 안정화시킵니다.'
      ],
    },
    {
      type: 'title',
      text: '야채 질감 보호: 펙틴 연결',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '가정 발효에서 흔한 문제 중 하나는 물러짐입니다. 식물 세포는 펙틴이라는 구조적 다당류에 의해 함께 유지됩니다. 부패 미생물은 <strong>펙티나제</strong>라는 효소를 생성하여 펙틴을 분해하고 식물 벽을 손상시켜 물러짐을 유발합니다. 염도를 2.0% 이상으로 유지하면 이러한 펙티나제 효소의 활동을 직접 억제합니다. 또한 정제되지 않은 천일염에 포함된 칼슘 이온이나 염화칼슘으로 첨가된 칼슘 이온은 펙틴 분자와 가교 결합하여 펙틴산칼슘을 형성하며, 이는 피클과 자우어크라우트를 아삭하게 유지합니다.',
    },
    {
      type: 'title',
      text: '건식 염장과 습식 염수의 계산',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '소금 계산 공식을 이해하는 것이 중요합니다. 건식 염장(자우어크라우트용 강판 양배추 등에 일반적으로 사용)의 경우 소금 비율은 야채의 중량만을 기준으로 계산됩니다. 습식 염수(오이나 당근 등 통째로 또는 큰 조각의 야채에 사용)의 경우 소금 비율은 <strong>야채와 추가된 물의 총 중량</strong>을 기준으로 계산해야 합니다. 물의 중량만을 기준으로 소금을 계산하는 것은 최종 염도를 희석시키는 흔한 실수입니다. 야채 내부의 수분이 결국 염수를 희석시키기 때문입니다.',
    },
    {
      type: 'table',
      headers: ['염도 범위', '미생물학적 상태', '일반적인 용도', '안전 수준'],
      rows: [
        ['2.0% 미만', '병원균 위험 / 곰팡이 위험', '권장되지 않음', '낮음'],
        ['2.0% - 2.5%', '최적 유산균 증식', '자우어크라우트, 김치, 오이 피클', '높음'],
        ['2.5% - 3.5%', '발효 지연 / 높은 질감 유지', '핫 소스, 마늘, 뿌리 채소', '높음'],
        ['3.5% 초과', '박테리아 억제 / 보존 전용', '올리브, 장기 숙성 고추, 고온 보관', '안전하지만 비활성'],
      ],
    },
    {
      type: 'title',
      text: '소금을 계량하는 것이 부피 측정보다 나은 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '부피(테이블스푼 또는 티스푼)로 소금을 측정하는 것은 매우 부정확합니다. 식탁용 소금은 미세하고 촘촘하게 포장되어 티스푼 하나가 최대 6그램까지 나갈 수 있습니다. 반면 코셔 소금은 공기 주머니가 있는 크고 플레이크 모양의 결정체로 티스푼당 약 4그램에 불과합니다. 굵은 천일염은 그 중간 정도입니다. 부피 측정을 사용하면 발효물이 위험할 정도로 소금이 부족하거나 과염으로 완전히 중단될 수 있습니다. 디지털 저울로 재료를 그램 단위로 계량하면 일관되고 안전하며 재현 가능한 결과를 보장합니다.',
    },
    {
      type: 'title',
      text: '락토 발효 문제 해결 및 모범 사례',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '성공적인 발효를 보장하려면 항상 다음 규칙을 따르세요: 호기성 곰팡이 성장을 방지하기 위해 모든 야채를 염수 아래에 완전히 잠긴 상태로 유지하세요. 깨끗한 용기와 무게추를 사용하세요. 1단계 박테리아가 밀려나는 것을 방지하기 위해 서늘한 실온(18°C~22°C)에서 발효하세요. 표면에 흰색 막이 형성되면 칸막이스트(산소 노출로 인해 형성되는 무해한 야생 효모)인지 곰팡이인지 확인하세요. 곰팡이는 솜털 같고 색깔이 있습니다. 곰팡이가 있으면 발효물을 폐기해야 합니다. 칸막이스트는 긁어낼 수 있지만 맛에 영향을 줄 수 있습니다.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
