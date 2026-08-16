import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "유화 안정성 및 오일 한계량 계산기";
const description = "마요네즈, 아올리 또는 비네그레트가 분리되기 전에 보유할 수 있는 오일 양을 정확히 파악하세요. 무료 유화 안정성 계산기로 소스 분리를 방지하세요.";

const faq = [
  {
    question: "마요네즈가 분리되기 전에 오일을 얼마나 넣을 수 있나요?",
    answer: "유화제에 따라 다릅니다. 계란 노란자는 최대 ~78% 오일(물 부피의 약 3.5배), 머스터드는 70%, 대두 레시틴은 82%, 폴리소르베이트는 85%까지 지지합니다. 상단 계산기를 사용해 특정 양에 대한 정확한 최대치를 계산하세요."
  },
  {
    question: "유화액이 분리되거나 깨진 이유는 무엇인가요?",
    answer: "오일 부피 분율이 유화제의 최대 패킹 한계를 초과하면 유화액이 분리됩니다. 그 시점에서 오일 방울이 너무 조밀하게 압축되어 합쳐지고 혼합물이 분리됩니다. 이는 순식간에 발생하며 점진적인 과정이 아닙니다."
  },
  {
    question: "분리된 마요네즈나 아올리를 어떻게 복구하나요?",
    answer: "깨끗한 볼에 신선한 계란 노란자나 따뜻한 물 한 큰술로 시작하세요. 생 오일을 추가할 때와 마찬가지로 끊임없이 저으면서 분리된 혼합물을 천천히 부어주세요. 상단 계산기가 필요한 정확한 물이나 노란자 양을 알려줍니다."
  },
  {
    question: "오일을 너무 빨리 넣으면 유화액이 분리되나요?",
    answer: "오일을 너무 빨리 부으면 유화제에 일시적인 과부하가 걸릴 수 있지만, 분리의 진정한 원인은 항상 부적절한 상 비율입니다. 오일 분율이 유화제 한계 미만으로 유지되면 속도에 관계없이 안정성을 유지합니다. 한계를 초과하면 분리는 피할 수 없습니다."
  },
  {
    question: "유화제로서 계란 노란자와 머스터드의 차이점은 무엇인가요?",
    answer: "계란 노란자(최대 78% 오일)는 레시틴과 리포단백질을 함유하여 오일 방울 주위에 견고한 막을 형성합니다. 머스터드(최대 70% 오일)는 점질물과 단백질에 의존하여 유화력은 약하지만 풍미를 더합니다. 대두 레시틴(82%)과 폴리소르베이트(85%)는 효율성이 매우 높은 산업용 유화제입니다."
  }
];

const howTo = [
  {
    name: "유화제 선택",
    text: "레시피의 유화제를 선택하세요 - 클래식 마요네즈는 노란자, 비네그레트는 머스터드, 모더니스트 요리는 대두 레시틴/폴리소르베이트. 각각 다른 최대 오일 한계를 설정합니다."
  },
  {
    name: "수성 상 부피 입력",
    text: "수성 재료의 총 밀리리터를 입력하세요: 물, 식초, 레몬즙, 와인 또는 물 기반 수액. 계산기가 선택한 유화제의 수분 함량을 자동으로 추가합니다."
  },
  {
    name: "오일 부피 설정",
    text: "사용할 오일 양을 입력하세요. 슬라이더를 사용하거나 값을 직접 입력합니다. 계산기는 이 양이 안정적인 유화액을 생성할지 또는 분리를 일으킬지 즉시 보여줍니다."
  },
  {
    name: "안정성 결과 확인 및 필요 시 수정",
    text: "오일 부피 분율 게이지를 확인하세요. 안정적이면 준비 완료입니다. 분리된 경우 복구 패널이 균형을 되찾기 위해 필요한 정확한 물(ml) 또는 추가 노란자 개수를 보여줍니다."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo' as const,
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
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'emulsion-stability-calculator',
  title,
  description,
  faqTitle: '자주 묻는 질문',
  ui: {
    title: '유화 안정성 분석기',
    subtitle: '소스가 분리되기 전에 얼마나 많은 오일을 견딜 수 있나요?',
    waterLabel: '수성 상 (ml)',
    oilLabel: '오일 부피 (ml)',
    emulsifierLabel: '유화제 종류',
    yolkOption: '계란 노란자',
    mustardOption: '머스터드',
    soyLecithinOption: '대두 레시틴',
    polysorbateOption: '폴리소르베이트',
    stableStatus: '안정적인 유화액',
    brokenStatus: '분리된 유화액',
    ratioLabel: '오일 부피 분율',
    maxLimitLabel: '최대 오일 한계',
    fixTitle: '복구 전략',
    waterFixText: '상 균형을 되찾기 위해 물 추가:',
    yolkFixText: '또는 추가 계란 노란자 사용:',
    idealRangeText: '이상적인 범위는 임계 패킹 한계 74%~80% 미만입니다.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '마요네즈나 아올리는 분리되기 전에 얼마나 많은 오일을 흡수할 수 있나요?',
      level: 2
    },
    {
      type: 'paragraph',
      html: '모든 요리사는 한 번쯤 질문해 보았습니다: <strong>왜 마요네즈가 분리되었을까요?</strong> 답은 생각보다 간단합니다. 유화액 - 클래식 아올리, 크리미 비네그레트, 모더니스트 폼 등 - 은 무너지기 전까지 한정된 양의 오일만 보유할 수 있습니다. 당사의 <strong>유화 안정성 계산기</strong>는 특정 재료와 분량에 따라 분리 지점이 정확히 어디인지 보여줍니다.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '78%', label: '노란자 최대 오일', icon: 'mdi:egg-outline' },
        { value: '85%', label: '폴리소르베이트 한계', icon: 'mdi:flask-outline' },
        { value: '74%', label: '이론적 패킹률', icon: 'mdi:sphere' },
        { value: '15 ml', label: '노란자 수분량', icon: 'mdi:water' }
      ]
    },
    {
      type: 'list',
      items: [
        '<strong>오일을 너무 빠르게 투입함</strong> - 붓는 속도 자체가 진정한 원인이 되는 경우는 드뭅니다. 오일 분율이 유화제 한계 이하로 유지되면 속도와 무관하게 안정성이 유지됩니다.',
        '<strong>재료가 너무 차가움</strong> - 차가운 계란이나 오일은 점도를 높여 오일 방울 형성을 방해합니다. 재료는 항상 상온 상태로 준비하세요.',
        '<strong>유화제의 오일 한계를 초과함</strong> - 유화제마다 유지 가능한 최대 패킹 분율이 정해져 있습니다(노란자 78%, 머스터드 70%, 대두 레시틴 82%, 폴리소르베이트 85%).',
        '<strong>수성 상이 너무 적음</strong> - 오일 방울을 둘러쌀 충분한 물이 없으면 오일 방울끼리 뭉쳐 분리가 일어납니다.'
      ]
    },
    {
      type: 'title',
      text: '어떤 유화제를 사용해야 하나요? 실전 비교',
      level: 2
    },
    {
      type: 'paragraph',
      html: '올바른 유화제 선택은 레시피, 풍미 프로필 및 원하는 오일 보유량에 따라 달라집니다. 가장 흔한 4가지 조리용 유화제의 특성을 비교합니다.'
    },
    {
      type: 'proscons',
      title: '계란 노란자',
      items: [
        { pro: '클래식 소스와의 뛰어난 풍미 조화', con: '콜레스테롤과 계란 풍미가 추가됨' },
        { pro: '레시틴과 리포단백질로 견고한 유화력 형성', con: '엄격한 온도 관리가 필요함' },
        { pro: '자연스러운 노란색과 고소함 부여', con: '비건 요리에는 사용 불가' },
        { pro: '최대 78% 오일 분율까지 대응 가능', con: '노란자 1개당 수분 공급량이 약 15ml로 제한됨' }
      ]
    },
    {
      type: 'proscons',
      title: '머스터드',
      items: [
        { pro: '드레싱에 톡 쏘는 풍미와 복합성 추가', con: '최대 오일 보유 용량이 낮음(70%)' },
        { pro: '구하기 쉽고 사용이 간편함', con: '노란자에 비해 유화력이 약함' },
        { pro: '상온에서 안정적으로 작동함', con: '섬세한 맛의 소스에서는 풍미가 충돌할 수 있음' },
        { pro: '빠르게 만드는 비네그레트에 적합', con: '무맛 무취 유화액을 원할 때는 부적합' }
      ]
    },
    {
      type: 'proscons',
      title: '대두 레시틴',
      items: [
        { pro: '높은 오일 허용량(82%)으로 안정적인 소스 구현', con: '정밀한 계량이 필수적임' },
        { pro: '중성 풍미로 레시피의 맛을 해치지 않음', con: '노란자에 비해 실수에 대한 관용도가 낮음' },
        { pro: '식물성으로 비건 친화적임', con: '일반 가정 주방의 필수 항목은 아님' },
        { pro: '적은 수분량으로도 효과를 발휘함', con: '약간 인공적인 질감을 형성할 수 있음' }
      ]
    },
    {
      type: 'proscons',
      title: '폴리소르베이트',
      items: [
        { pro: '모든 유화제 중 가장 높은 오일 보유 용량(85%)', con: '합성 첨가물이며 천연 재료가 아님' },
        { pro: '극도로 안정적인 폼(거품)과 에어 작성 가능', con: '가정 요리용으로 구하기 어려움' },
        { pro: '최소한의 수성 상으로 작동함', con: '정확한 용량 투입을 위한 정밀 저울 필요' },
        { pro: '모더니스트 요리와 실험적 조리에 최적', con: '과다 사용 시 풍미를 압도함' }
      ]
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: '계란 노란자',
          icon: 'mdi:egg-outline',
          description: '클래식 마요네즈 유화제. 레시틴과 리포단백질 포함.',
          highlight: true,
          points: ['최대 오일: 78%', '노란자당 약 15ml 수분', '풍미와 색상 추가', '마요와 아올리에 최적']
        },
        {
          title: '머스터드',
          icon: 'mdi:shaker-outline',
          description: '점질물과 종자 단백질에 의존. 톡 쏘는 풍미 추가.',
          points: ['최대 오일: 70%', '약 10ml 수분 함량', '유화력은 상대적으로 약함', '비네그레트에 최적']
        },
        {
          title: '대두 레시틴',
          icon: 'mdi:leaf',
          description: '고농축 식물성 계면활성제.',
          points: ['최대 오일: 82%', '약 5ml 수분 함량', '중성적인 풍미 프로필', '모더니스트 요리의 필수품']
        },
        {
          title: '폴리소르베이트',
          icon: 'mdi:flask-outline',
          description: '최대 계면활성 능력을 가진 합성 유화제.',
          points: ['최대 오일: 85%', '약 2ml 수분 함량', '최고의 오일 내성', '폼과 에어 제조에 사용']
        }
      ]
    },
    {
      type: 'table',
      headers: ['유화제', '최대 오일 %', '물 100ml당 오일', '최적 용도'],
      rows: [
        ['계란 노란자', '78%', '약 355ml', '마요네즈, 아올리, 홀란다이즈'],
        ['머스터드', '70%', '약 233ml', '비네그레트, 가벼운 드레싱'],
        ['대두 레시틴', '82%', '약 456ml', '모더니스트 소스, 폼'],
        ['폴리소르베이트', '85%', '약 567ml', '안정적인 폼, 실험적 요리']
      ]
    },
    {
      type: 'title',
      text: '과학: 유화액이 분리되는 이유와 케플러 추측의 주방 적용',
      level: 2
    },
    {
      type: 'paragraph',
      html: '조리용 유화액은 연속적인 수성 상 전체에 미세한 오일 방울을 분산시켜 작동합니다. <strong>유화제</strong> - 노란자의 레시틴, 머스터드의 점질물, 폴리소르베이트 같은 합성 계면활성제 - 는 각 오일 방울을 코팅하여 인접한 방울과 합쳐지는 것을 막아줍니다.'
    },
    {
      type: 'paragraph',
      html: '분리 지점은 순수한 기하학에 의해 결정됩니다. 오일 방울은 촘촘히 뭉친 작은 구체처럼 행동합니다. 주어진 공간에 들어갈 수 있는 구체의 최대 부피 - <strong>케플러 추측</strong>으로 알려진 것 - 은 약 74%입니다. 실제 주방 환경에서는 강력한 유화제로 80~85%까지 늘어날 수 있지만, 그 이상이 되면 오일 방울이 극도로 압축되어 합쳐지고 유화액은 즉시 무너집니다.'
    },
    {
      type: 'card',
      columns: 2,
      items: [
        {
          icon: 'mdi:egg-outline',
          title: '클래식 마요네즈 & 아올리',
          html: '오일 78%까지는 <strong>계란 노란자</strong>를 사용하세요. 오일 1컵당 노란자 1개로 시작합니다. 오일을 붓기 전에 물이나 레몬즙 1티스푼을 넣으면 안전 마진이 넓어집니다.'
        },
        {
          icon: 'mdi:shaker-outline',
          title: '비네그레트 & 가벼운 드레싱',
          html: '오일 70%까지는 <strong>머스터드</strong>를 사용하세요. 머스터드의 점질물이 일시적인 드레싱에 필요한 유화력을 제공합니다.'
        },
        {
          icon: 'mdi:leaf',
          title: '모더니스트 소스 & 안정적인 폼',
          html: '오일 82%까지는 <strong>대두 레시틴</strong>을 사용하세요. 오일과 산의 풍미를 있는 그대로 살리고 싶은 중성적인 맛의 유화액에 최적입니다.'
        },
        {
          icon: 'mdi:flask-outline',
          title: '실험적인 폼 & 에어',
          html: '오일 85%까지는 <strong>폴리소르베이트</strong>를 사용하세요. 최고의 오일 보유량과 거품 안정성을 요구하는 모더니스트 기술에 필수적인 선택입니다.'
        }
      ]
    },
    {
      type: 'title',
      text: '분리된 유화액을 단계별로 복구하는 방법',
      level: 2
    },
    {
      type: 'paragraph',
      html: '마요네즈나 소스가 이미 분리되었더라도 <strong>버리지 마세요</strong>. 해결책은 간단합니다 - 단, 상 비율을 이해하고 있는 경우에 한합니다. 더 세게 젓는 것은 도움이 되지 않으며, 더 많은 연속 상(물)을 추가해야 합니다.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '유화액이 분리되려 할 때 나타나는 3가지 흔한 징후',
      html: '첫 번째 경고로 <strong>걸쭉해진 후 갑자기 묽어지는 현상</strong>을 주의 깊게 살피세요. 그 다음 <strong>광택 있던 표면이 거칠어지거나</strong> <strong>가장자리에 오일이 겉도는 징후</strong>를 확인합니다. 이 중 하나라도 발견되면 즉시 오일 투입을 멈추고 찬물 1티스푼을 넣고 섞은 후 재개하세요.'
    },
    {
      type: 'title',
      text: '매번 완벽한 유화액을 만드는 실전 팁',
      level: 3
    },
    {
      type: 'message',
      html: '<strong>황금률:</strong> 오일 대 물의 비율은 테크닉, 온도, 휘젓는 속도보다 훨씬 중요합니다. 저으입을 시작하기 전에 당사 계산기로 정확한 오일 한계를 확인하세요.'
    },
    {
      type: 'tip',
      title: '온도가 중요함',
      html: '모든 재료는 <strong>상온</strong> 상태여야 합니다. 차가운 계란이나 오일은 분리 위험을 극도로 높입니다. 조리 시작 30분 전에 냉장고에서 재료를 꺼내두세요.'
    },
    {
      type: 'tip',
      title: '물 안전망',
      html: '레시피에 충분한 산(식초, 레몬즙)이 포함되어 있지 않다면, 오일을 넣기 시작하기 전에 <strong>노란자 1개당 찬물 1티스푼</strong>을 미리 섞어주세요. 이 여분의 물이 더 넓은 안전 마진을 형성합니다.'
    },
    {
      type: 'tip',
      title: '분리된 분량 복구하기',
      html: '깨끗한 볼에 신선한 계란 노란자를 넣습니다. 찬물 1티스푼과 함께 잘 풀어줍니다. 그리고 <strong>분리된 혼합물을 마치 생 오일을 넣듯이 최대한 천천히 부어줍니다</strong>. 다시 유화가 이뤄지면 나머지 분량은 더 빠르게 부어도 좋습니다.'
    },
    {
      type: 'title',
      text: '조리용 유화 용어집',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: '연속 상 (Continuous Phase)',
          definition: '오일 방울을 둘러싸는 액체 - 마요네즈 같은 수중유형 유화액에서는 보통 물, 식초 또는 감귤류 즙.'
        },
        {
          term: '분산 상 (Dispersed Phase)',
          definition: '미세한 방울로 쪼개진 액체 - 대부분의 조리용 유화액에서는 오일. 추가할수록 오일 방울 사이의 거리가 좁아짐.'
        },
        {
          term: '부피 분율 (Volume Fraction)',
          definition: '전체 부피 대비 오일 부피의 비율. 약 74~85%(유화제에 따라 다름)에서 기하학적 분리점에 도달함.'
        },
        {
          term: '합일 (Coalescence)',
          definition: '둘 이상의 오일 방울이 합쳐져 더 큰 방울이 되는 현상. 눈에 보이는 유화액 분리를 유발하는 미시적 과정임.'
        },
        {
          term: '상 반전 (Phase Inversion)',
          definition: '수중유형 유화액이 유중수형으로 뒤바뀌는 시점 - 크림에서 버터를 만들 때 일어남. 최종적인 실패 형태임.'
        }
      ]
    },
    {
      type: 'summary',
      title: '안정적인 유화액 만들기의 핵심 요약',
      items: [
        '유화제마다 유지할 수 있는 최대 오일 분율이 정해져 있습니다(노란자 78%, 머스터드 70%, 대두 레시틴 82%, 폴리소르베이트 85%).',
        '분리의 한계점은 기하학적 구조(케플러 추측의 74%)에 의해 규정되며, 휘젓는 속도가 아닙니다.',
        '항상 상온의 재료로 시작하고 안전 마진으로 소량의 물을 미리 섞어둡니다.',
        '분리된 유화액은 더 세게 젓는 것이 아니라 새 유화제와 수분을 추가함으로써 복구할 수 있습니다.',
        '상단 유화 안정성 계산기를 사용해 보유한 재료에 따른 정확한 오일 한계를 확인하세요.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
