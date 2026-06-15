import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "유화 안정성 및 오일 한도 계산기";
const description = "마요네즈, 아이올리, 비네그레트가 분리되기 전에 정확히 얼마나 많은 오일을 견딜 수 있는지 알아보세요. 무료 유화 안정성 계산기로 소스 분리를 방지하세요.";
const faq = [
  {
    question: "마요네즈가 분리되기 전에 얼마나 많은 오일을 추가할 수 있나요?",
    answer: "유화제에 따라 다릅니다. 달걀 노른자는 최대 약 78%의 오일(물 부피의 약 3.5배), 머스타드는 최대 70%, 대두 레시틴은 최대 82%, 폴리소르베이트는 최대 85%까지 지탱합니다. 위의 계산기를 사용하여 특정 양에 대한 정확한 최대치를 알아보세요."
  },
  {
    question: "제 유화가 왜 분리되거나 깨졌나요?",
    answer: "오일 부피 분율이 유화제의 최대 충전 한도를 초과하면 유화가 깨집니다. 그 시점에서는 오일 방울들이 너무 조밀하게 압축되어 서로 합쳐지고 혼합물이 분리됩니다. 이것은 점진적인 과정이 아니라 즉시 발생합니다."
  },
  {
    question: "분리된 마요네즈나 아이올리는 어떻게 복구하나요?",
    answer: "깨끗한 그릇에 신선한 달걀 노른자나 따뜻한 물 한 스푼으로 시작하세요. 분리된 혼합물을 생오일을 추가하는 것처럼 계속 저으면서 천천히 뿌려 넣으세요. 위 계산기가 필요한 물이나 노른자의 정확한 양을 알려줍니다."
  },
  {
    question: "오일을 너무 빨리 추가하면 유화가 깨지나요?",
    answer: "오일을 너무 빨리 추가하면 일시적으로 유화제에 과부하가 걸릴 수 있지만, 깨짐의 실제 원인은 항상 잘못된 상비율입니다. 오일 분율이 유화제의 한도 아래로 유지되면 속도와 관계없이 유화는 안정적으로 유지됩니다. 한도를 초과하면 깨짐은 불가피합니다."
  },
  {
    question: "유화제로서의 달걀 노른자와 머스타드의 차이점은 무엇인가요?",
    answer: "달걀 노른자(최대 78% 오일)는 레시틴과 지단백질을 함유하여 오일 방울 주위에 견고한 막을 형성합니다. 머스타드(최대 70% 오일)는 점액질과 단백질에 의존하며 약하지만 풍미를 더합니다. 대두 레시틴(82%)과 폴리소르베이트(85%)는 매우 효율적인 산업용 유화제입니다."
  }
];

const howTo = [
  {
    name: "유화제 선택",
    text: "레시피의 유화제를 선택하세요 - 클래식 마요네즈에는 달걀 노른자, 비네그레트에는 머스타드, 모더니스트 요리에는 대두 레시틴/폴리소르베이트. 각각 다른 최대 오일 한도를 설정합니다."
  },
  {
    name: "수상 부피 입력",
    text: "수성 재료의 총 밀리리터를 입력하세요: 물, 식초, 레몬즙, 와인 또는 물 기반 액체. 계산기가 선택한 유화제의 수분 함량을 자동으로 추가합니다."
  },
  {
    name: "오일 부피 설정",
    text: "사용할 오일의 양을 입력하세요. 슬라이더를 사용하거나 직접 값을 입력하세요. 계산기는 이 양이 안정적인 유화를 생성할지 아니면 깨짐을 유발할지를 즉시 표시합니다."
  },
  {
    name: "안정성 결과 확인 및 필요시 수정",
    text: "오일 부피 분율 게이지를 확인하세요. 안정적이면 문제없습니다. 깨진 경우, 복구 패널이 균형을 회복하기 위해 필요한 물(ml) 또는 추가 달걀 노른자의 정확한 개수를 알려줍니다."
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
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'emulsion-stability-calculator',
  title: '유화 안정성 및 오일 한도 계산기',
  description: '마요네즈, 아이올리, 비네그레트가 분리되기 전에 정확히 얼마나 많은 오일을 견딜 수 있는지 알아보세요. 무료 유화 안정성 계산기로 소스 분리를 방지하세요.',
  faqTitle: '자주 묻는 질문',
  ui: {
    title: '유화 안정성 분석기',
    subtitle: '소스가 깨지기 전에 얼마나 많은 오일을 견딜 수 있나요?',
    waterLabel: '수상 (ml)',
    oilLabel: '오일 부피 (ml)',
    emulsifierLabel: '유화제 유형',
    yolkOption: '달걀 노른자',
    mustardOption: '머스타드',
    soyLecithinOption: '대두 레시틴',
    polysorbateOption: '폴리소르베이트',
    stableStatus: '안정적인 유화',
    brokenStatus: '깨진 유화',
    ratioLabel: '오일 부피 분율',
    maxLimitLabel: '최대 오일 한도',
    fixTitle: '복구 전략',
    waterFixText: '상 균형을 회복하기 위해 물 추가:',
    yolkFixText: '또는 추가 달걀 노른자 사용:',
    idealRangeText: '이상적인 범위는 임계 충전 한도인 74% ~ 80% 미만입니다.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '마요네즈나 아이올리는 깨지기 전에 얼마나 많은 오일을 견딜 수 있나요?',
      level: 2
    },
    {
      type: 'paragraph',
      html: '모든 요리사가 한 번쯤 해본 질문입니다: <strong>왜 마요네즈가 분리되었을까?</strong> 답은 생각보다 간단합니다. 유화 - 클래식 아이올리, 크리미한 비네그레트, 모더니스트 폼 등 - 는 붕괴되기 전까지 한정된 양의 오일만 담을 수 있습니다. 저희의 <strong>유화 안정성 계산기</strong>는 특정 재료와 분량에 기반하여 그 깨짐 지점이 정확히 어디인지 알려줍니다.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '78%',
          label: '달걀 노른자 최대 오일',
          icon: 'mdi:egg-outline'
        },
        {
          value: '85%',
          label: '폴리소르베이트 한도',
          icon: 'mdi:flask-outline'
        },
        {
          value: '74%',
          label: '이론적 충전율',
          icon: 'mdi:sphere'
        },
        {
          value: '15 ml',
          label: '노른자 수분 함량',
          icon: 'mdi:water'
        }
      ]
    },
    {
      type: 'title',
      text: '과학: 유화가 깨지는 이유',
      level: 2
    },
    {
      type: 'paragraph',
      html: '요리에서의 유화는 미세한 오일 방울을 연속적인 수상 전체에 분산시켜 작동합니다. <strong>유화제</strong> - 달걀 노른자의 레시틴, 머스타드의 점액질, 폴리소르베이트 같은 합성 계면활성제 - 는 각 방울을 코팅하여 이웃 방울과 합쳐지는 것을 방지합니다.'
    },
    {
      type: 'paragraph',
      html: '깨짐 지점은 순수한 기하학에 의해 결정됩니다. 오일 방울은 작은 구체가 함께 채워진 것처럼 행동합니다. 주어진 공간에 채울 수 있는 구체의 최대 부피 - <strong>케플러 추측</strong>으로 알려진 것 - 는 약 74%입니다. 실제 주방 시스템에서는 강력한 유화제를 사용하면 80~85%까지 늘어날 수 있지만, 그 이상이 되면 방울이 극도로 압축되어 합쳐지고 유화가 즉시 붕괴됩니다.'
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: '달걀 노른자',
          icon: 'mdi:egg-outline',
          description: '클래식 마요네즈 유화제. 레시틴과 지단백질 함유.',
          highlight: true,
          points: [
            '최대 오일: 78%',
            '노른자당 약 15ml 수분',
            '풍부함과 색상 추가',
            '마요네즈와 아이올리에 최적'
          ]
        },
        {
          title: '머스타드',
          icon: 'mdi:shaker-outline',
          description: '점액질과 종자 단백질에 의존. 톡 쏘는 풍미 추가.',
          points: [
            '최대 오일: 70%',
            '약 10ml 수분 함량',
            '약한 유화력',
            '비네그레트에 이상적'
          ]
        },
        {
          title: '대두 레시틴',
          icon: 'mdi:leaf',
          description: '고농축 식물성 계면활성제.',
          points: [
            '최대 오일: 82%',
            '약 5ml 수분 함량',
            '중성적인 맛',
            '모더니스트 요리의 필수품'
          ]
        },
        {
          title: '폴리소르베이트',
          icon: 'mdi:flask-outline',
          description: '최대 계면활성 능력을 가진 합성 유화제.',
          points: [
            '최대 오일: 85%',
            '약 2ml 수분 함량',
            '가장 높은 오일 내성',
            '폼과 에어에 사용'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['유화제', '최대 오일 %', '물 100ml당 오일량', '최적 용도'],
      rows: [
        ['달걀 노른자', '78%', '약 355ml', '마요네즈, 아이올리, 올랜데즈'],
        ['머스타드', '70%', '약 233ml', '비네그레트, 가벼운 드레싱'],
        ['대두 레시틴', '82%', '약 456ml', '모더니스트 소스, 폼'],
        ['폴리소르베이트', '85%', '약 567ml', '안정적인 폼, 실험적 요리']
      ]
    },
    {
      type: 'title',
      text: '깨진 유화를 단계별로 복구하는 방법',
      level: 2
    },
    {
      type: 'paragraph',
      html: '마요네즈나 소스가 이미 분리되었다면, <strong>버리지 마세요</strong>. 해결 방법은 간단합니다 - 하지만 상비율을 이해해야 합니다. 더 세게 저어진다고 소용없습니다. 연속상(물)을 더 추가해야 합니다.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '유화가 곧 깨질 일반적인 징후',
      html: '<strong>걸쭉해졌다가 갑자기 묽어지는 현상</strong>, <strong>윤기 나는 표면이 거칠어지는 현상</strong>, 또는 가장자리에 눈에 띄게 오일이 고이는 현상에 주목하세요. 이러한 징후가 보이면 즉시 오일 추가를 중단하고 찬물 한 티스푼을 저어 넣은 후 계속하세요.'
    },
    {
      type: 'title',
      text: '매번 완벽한 유화를 위한 실용적인 팁',
      level: 3
    },
    {
      type: 'tip',
      title: '온도가 중요합니다',
      html: '모든 재료는 <strong>실온</strong>이어야 합니다. 차가운 달걀이나 차가운 오일은 깨짐 위험을 극적으로 증가시킵니다. 시작하기 30분 전에 재료를 냉장고에서 꺼내두세요.'
    },
    {
      type: 'tip',
      title: '물 안전망',
      html: '레시피에 충분한 산(식초, 레몬즙)이 포함되어 있지 않다면, 오일을 추가하기 시작하기 전에 <strong>달걀 노른자당 찬물 한 티스푼</strong>을 추가하세요. 이 여분의 물이 더 넓은 안전 여유를 만들어줍니다.'
    },
    {
      type: 'tip',
      title: '분리된 배치 복구하기',
      html: '깨끗한 그릇에 신선한 달걀 노른자를 넣습니다. 찬물 한 티스푼과 함께 휘젓습니다. 그런 다음, <strong>분리된 혼합물을 가능한 한 천천히 뿌려 넣습니다</strong>, 마치 생오일을 붓는 것처럼. 다시 유화되면 나머지는 더 빠르게 추가할 수 있습니다.'
    },
    {
      type: 'title',
      text: '요리 유화 용어집',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: '연속상',
          definition: '방울을 둘러싸는 액체 - 마요네즈 같은 수중유적형 유화에서는 보통 물, 식초 또는 감귤류 과즙.'
        },
        {
          term: '분산상',
          definition: '미세한 방울로 분해된 액체 - 대부분의 요리 유화에서는 오일. 더 많이 추가할수록 방울이 더 조밀하게 채워집니다.'
        },
        {
          term: '부피 분율',
          definition: '전체 부피에 대한 오일 부피의 비율. 약 74~85%(유화제에 따라 다름)에서 유화는 기하학적 깨짐 지점에 도달합니다.'
        },
        {
          term: '합체 (Coalescence)',
          definition: '둘 이상의 오일 방울이 합쳐져 더 큰 방울이 되는 현상. 이것이 눈에 보이는 유화 깨짐을 유발하는 미세한 과정입니다.'
        },
        {
          term: '상 반전 (Phase Inversion)',
          definition: '수중유적형 유화가 유중수적형으로 반전되는 지점 - 크림에서 버터를 만들 때 발생합니다. 이것이 궁극적인 실패 모드입니다.'
        }
      ]
    },
    {
      type: 'paragraph',
      html: '클래식 프렌치 마요네즈, 마늘 풍미의 아이올리, 안정적인 비네그레트를 만들거나, 모더니스트 하이드로콜로이드를 실험하든, <strong>오일과 물의 비율</strong>을 이해하는 것이 가장 중요한 요소입니다. 저희 계산기가 수학을 처리해 드리므로 자신 있게 요리할 수 있습니다.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
