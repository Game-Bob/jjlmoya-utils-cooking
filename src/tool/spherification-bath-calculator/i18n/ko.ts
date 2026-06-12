import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "구형화 욕조 계산기 정밀 분자요리 가이드";
const description = "직접 및 역구형화를 위한 알긴산나트륨과 젖산칼슘의 정확한 비율을 계산합니다. 잔탄검과 구연산나트륨으로 점도와 산도를 보정합니다.";

const faq = [
  {
    question: "직접 구형화와 역구형화의 차이점은 무엇인가요?",
    answer: "직접 구형화는 알긴산나트륨을 향미 베이스에 첨가하여 칼슘 욕조에 떨어뜨리는 방식으로, 안쪽으로 계속 겔화되는 얇은 막을 형성합니다. 역구형화는 칼슘을 베이스에 첨가하여 알긴산염 욕조에 떨어뜨리며, 바깥쪽으로 자라는 막을 형성하고 헹굼 시 겔화 과정이 중단됩니다."
  },
  {
    question: "구체가 납작해지거나 가라앉지 않는 이유는 무엇인가요?",
    answer: "향미 베이스 액체가 알긴산나트륨 욕조보다 밀도가 낮으면 구체를 형성하지 않고 뜨게 됩니다. 소량의 잔탄검을 추가하면 베이스의 점도가 높아져 가라앉아 완벽한 구체를 형성할 수 있습니다."
  },
  {
    question: "구형화에서 구연산나트륨의 역할은 무엇인가요?",
    answer: "구연산나트륨은 칼슘 이온을 결합하고 pH를 높이는 격리제입니다. 베이스 액체가 고산성(pH 4.5 미만)이거나 칼슘을 함유한 경우 알긴산나트륨이 조기에 겔화됩니다. 구연산을 추가하면 이 산도가 중화됩니다."
  },
  {
    question: "칼슘 욕조에 어떤 물이든 사용할 수 있나요?",
    answer: "미네랄 함량이 높은 수돗물은 알긴산나트륨이 뭉치거나 조기에 겔화되는 원인이 될 수 있습니다. 증류수 또는 저칼슘 생수를 사용하는 것이 가장 좋습니다."
  }
];

const howTo = [
  {
    name: "구형화 방법 선택",
    text: "얇고 즉각적인 겔화를 위해 '직접법'을, 알코올, 유제품 또는 칼슘 함유 액체에는 '역방법'을 선택하세요."
  },
  {
    name: "액체 중량 입력",
    text: "향미 베이스 액체와 물 욕조의 중량을 원하는 단위로 입력하세요."
  },
  {
    name: "질감 및 산도 보정 추가",
    text: "베이스 액체가 묽은 경우 잔탄검을, 고산성인 경우 구연산나트륨을 활성화하세요."
  },
  {
    name: "재료 계량",
    text: "요약 화면에 표시된 정확한 양의 알긴산나트륨, 젖산칼슘 또는 염화칼슘 및 보정제를 계량하세요."
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
  slug: 'spherification-bath-calculator',
  title: '구형화 욕조 계산기',
  description: '직접 및 역구형화를 위한 알긴산나트륨과 젖산칼슘의 정확한 비율을 계산합니다. 잔탄검과 구연산나트륨으로 점도와 산도를 보정합니다.',
  faqTitle: '자주 묻는 질문',
  ui: {
    title: "구형화 욕조 계산기",
    subtitle: "직접 및 역구형화를 위한 정밀 비율 제어",
    unitLabel: "측정 시스템",
    metricUnit: "미터법 (g / 그램)",
    imperialUnit: "야드파운드법 (oz / 온스)",
    methodLabel: "구형화 방법",
    directMethod: "직접 구형화",
    reverseMethod: "역구형화",
    baseWeightLabel: "베이스 액체 중량",
    bathWeightLabel: "욕조 물 중량",
    xanthanLabel: "잔탄검 활성화 (점도 보정)",
    citrateLabel: "구연산나트륨 활성화 (산도 / pH 격리제)",
    recipeTitle: "계산된 레시피 요약",
    baseGellingAgent: "베이스 겔화제",
    bathGellingAgent: "욕조 겔화제",
    xanthanGum: "잔탄검 (증점제)",
    sodiumCitrate: "구연산나트륨 (완충제)",
    warningLabel: "용해도 경고",
    warningDesc: "필요한 약제 중량이 이 액체 부피의 용해 한계에 가깝거나 초과합니다. 용해에 시간이 더 걸리거나 가벼운 가온이 필요할 수 있습니다.",
    directDesc: "저칼슘 가벼운 액체에 이상적입니다. 섬세하고 얇은 껍질의 구체를 만들며 즉시 제공해야 합니다.",
    reverseDesc: "유제품, 알코올, 고칼슘 또는 산성 액체에 이상적입니다. 헹굼 후에도 겔화가 계속되지 않는 안정적인 구체를 만듭니다.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '분자 구형화와 하이드로콜로이드 겔화의 과학',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '구형화는 액체 코어를 얇은 겔 막 내부에 가두는 혁신적인 요리 기술입니다. 1940년대 산업용 포장 분야에서 시작되어 2000년대 초반 모더니스트 요리에 적용되었습니다. 기본 화학은 하이드로콜로이드의 상호 작용, 특히 알긴산나트륨 중합체가 2가 칼슘 양이온에 노출될 때의 가교 결합에 의존합니다.',
    },
    {
      type: 'title',
      text: '분자 화학: 알긴산나트륨과 칼슘 이온',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '알긴산나트륨은 다시마에서 추출한 다당류로, 베타-D-만누론산(M 블록)과 알파-L-굴루론산(G 블록)의 선형 사슬로 구성됩니다. 나트륨염 형태에서는 물에 완전히 용해되어 점성 용액을 형성합니다. 칼슘 이온(염화칼슘 또는 젖산칼슘 글루콘산염 등)이 도입되면 2가 칼슘 이온(Ca2+)이 1가 나트륨 이온(Na+)을 대체합니다. 칼슘은 두 개의 양전하를 가지고 있기 때문에 인접한 중합체 사슬의 두 G 블록에 결합하여 이들을 연결합니다. 과학적으로 <strong>계란 상자 모델</strong>로 설명되는 이 겔화 과정은 독립적인 다당류 사슬을 물과 풍미 분자를 가두는 단단한 3차원 하이드로겔 네트워크로 연결합니다.',
    },
    {
      type: 'title',
      text: '직접 구형화 대 역구형화 메커니즘',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '두 가지 주요 구형화 방법은 겔화제와 칼슘염의 배치가 달라 서로 다른 기계적 특성을 나타냅니다:',
    },
    {
      type: 'list',
      items: [
        '<strong>직접 구형화:</strong> 알긴산나트륨을 향미 베이스 액체에 용해시킨 후 칼슘 욕조(보통 1.0% 염화칼슘)에 떨어뜨립니다. 겔화는 경계에서 즉시 시작됩니다. 칼슘 이온은 작고 이동성이 높기 때문에 욕조에서 구체의 중심으로 지속적으로 이동하여 겔 막이 안쪽으로 자라게 합니다. 즉시 헹구거나 제공하지 않으면 구체가 결국 완전히 겔화되어 단단하고 고무 같은 구슬로 변합니다.',
        '<strong>역구형화:</strong> 젖산칼슘 글루콘산염(2.0%)을 향미 베이스 액체에 용해시킨 후 알긴산나트륨 욕조(0.5%)에 떨어뜨립니다. 알긴산 분자는 크고 이동 속도가 느리기 때문에 새로 형성된 겔 장벽을 쉽게 통과하지 못합니다. 대신 칼슘 이온이 바깥쪽 욕조로 이동하여 막을 바깥쪽으로 성장시킵니다. 이렇게 하면 구체를 꺼내 맑은 물에 헹구는 즉시 겔화가 중단되어 완전히 액체 상태의 코어를 무기한 보존합니다.'
      ],
    },
    {
      type: 'title',
      text: '구연산나트륨으로 산도 및 pH 장벽 극복',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '알긴산나트륨은 산에 매우 민감합니다. 향미 베이스 액체의 pH가 4.5 아래로 떨어지면 알긴산 분자가 제대로 수화되지 않습니다. 용해되지 않고 알긴산 사슬이 불용성 알긴산으로 침전되어 실 모양의 덩어리를 형성합니다. 이를 해결하기 위해 셰프는 <strong>구연산나트륨</strong>을 완충제로 사용합니다. 구연산나트륨은 수소 이온을 중화시켜 패션프루트나 라임 주스 같은 산성 재료의 pH를 임계치인 4.5 이상으로 끌어올려 알긴산이 완전히 수화되고 깨끗한 구형을 형성할 수 있게 합니다.',
    },
    {
      type: 'title',
      text: '잔탄검으로 유체 밀도 및 점도 조정',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '구체를 형성하려면 향미 베이스 액체 방울이 겔화 욕조에 완전히 잠겨야 합니다. 향미 베이스 액체가 욕조보다 밀도가 낮은 경우(역구형화 시 걸쭉한 알긴산나트륨 욕조 속 가벼운 알코올 또는 수성 쥬스 등), 표면에 떠서 납작해집니다. 소량의 <strong>잔탄검</strong>(일반적으로 0.1~0.2%)을 추가하면 베이스 액체의 점도가 높아집니다. 이 추가 점도는 방울이 욕조에 가라앉는 데 필요한 운동량을 제공하여 표면 장력이 방울을 완벽한 구체로 만들어줍니다.',
    },
    {
      type: 'table',
      headers: ['구형화 방법', '이상적인 재료', '필요 첨가제', '보관 특성', '겔 성장 방향'],
      rows: [
        ['직접법', '저칼슘 과일 주스, 맑은 육수, 달콤한 시럽', '베이스에 0.5% 알긴산나트륨, 욕조에 1.0% 염화칼슘', '즉시 제공 필요, 시간이 지나면 완전 겔화', '안쪽 (중심 방향)'],
        ['역방법', '유제품, 알코올, 고칼슘 또는 고산성 액체', '베이스에 2.0% 젖산칼슘, 욕조에 0.5% 알긴산나트륨', '매우 안정적, 기름이나 물에 수시간 보관 가능', '바깥쪽 (중심에서 멀어짐)'],
      ],
    },
    {
      type: 'title',
      text: '헹굼 및 최종 보관 단계',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '완성된 구체는 겔화 욕조에서 꺼낸 직후 깨끗한 찬물 욕조에 항상 헹구세요. 이렇게 하면 외부에 묻은 잔류 칼슘이나 알긴산이 씻겨 나가 화학 반응이 중단되고 이취(특히 염화칼슘의 약간 쓴맛)를 방지할 수 있습니다. 보관을 위해 구체를 일치하는 밀도의 액체(첨가제가 없는 향미 베이스 액체 또는 가벼운 설탕 시럽 등)에 담그세요. 이렇게 하면 삼투 현상으로 인해 물이 막을 통해 이동하여 구체가 주름지거나 터지는 것을 방지할 수 있습니다.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
