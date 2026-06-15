import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = '치즈 응고 배수 계산기';
const description = '수제 치즈 제조에서 커드를 자를 정확한 순간을 찾아보세요. 응고 배수법을 사용하여 응고 시간을 계산하고, 수분을 조절하며, 무료 계산기로 치즈 수율을 향상시키세요.';
const faq = [
  {
    question: '치즈 제조에서 응고법이란 무엇인가요?',
    answer: '응고법은 커드를 자를 정확한 순간을 결정하는 데 사용되는 기술입니다. 레넷 첨가부터 첫 번째 겔화 징후(응고)까지의 시간을 측정하고, 치즈 스타일에 따라 특정 배수를 곱합니다.'
  },
  {
    question: '응고 시점을 어떻게 감지하나요?',
    answer: '가장 일반적인 방법은 그릇법입니다. 레넷을 첨가한 후 작고 소독된 가벼운 플라스틱 그릇을 우유 표면에 놓습니다. 매분마다 부드럽게 두드리거나 회전시킵니다. 처음에는 자유롭게 회전합니다. 우유가 겔화되기 시작하여 그릇이 회전을 멈추거나 움직임에 저항하는 순간이 응고 시점입니다.'
  },
  {
    question: '커드 절단 시간이 왜 그렇게 중요한가요?',
    answer: '올바른 순간에 커드를 자르면 시네레시스(수분 손실)를 제어할 수 있습니다. 너무 일찍 자르면 커드가 약해지고 지방이 손실되며 수율이 낮아집니다. 너무 늦게 자르면 딱딱한 커드가 되어 수분을 너무 많이 보유하거나 제대로 배출되지 않아 시큼하고 과산화된 치즈가 됩니다.'
  },
  {
    question: '응고 배수란 무엇인가요?',
    answer: '배수는 절단 전 총 응고 시간을 계산하기 위해 1차 응고 시간에 적용하는 숫자 계수입니다. 표준 배수는 2.0x(Parmesan과 같은 건조 치즈)에서 5.0x 또는 6.0x(Camembert와 같은 습윤 치즈)까지 다양합니다.'
  },
  {
    question: '온도와 레넷 강도가 응고에 어떤 영향을 미치나요?',
    answer: '더 높은 온도와 더 강한 레넷은 응고를 촉진하여 우유가 더 빨리 겔화됩니다. 그러나 총 절단 시간은 응고 시간에 직접 비례하기 때문에 배수법은 이러한 변화를 자동으로 보정하여 일관된 커드 특성을 보장합니다.'
  }
];

const howTo = [
  {
    name: '레넷을 넣고 타이머를 시작하세요',
    text: '레넷을 완전히 저은 후 즉시 계산기에서 1단계 스톱워치를 시작하세요.'
  },
  {
    name: '그릇 테스트를 수행하세요',
    text: '가벼운 플라스틱 그릇을 우유 표면에 놓고 정기적으로 저항을 확인하세요.'
  },
  {
    name: '응고 시점을 기록하세요',
    text: '그릇이 회전이나 두드림에 저항하는 순간 중지 버튼을 클릭하여 응고 시간을 기록하세요.'
  },
  {
    name: '치즈 유형 또는 배수를 선택하세요',
    text: '데이터베이스에서 치즈 스타일을 선택하거나 사용자 정의 배수를 입력하세요. 앱이 총 시간을 계산하고 절단 카운트다운을 시작합니다.'
  },
  {
    name: '신호에 맞춰 커드를 자르세요',
    text: '타이머가 0이 되면 커드가 최적의 장력에 도달했습니다. 레시피에 지정된 대로 커드를 입방체로 자르세요.'
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
} as const;

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
} as const;

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
} as const;

export const content: ToolLocaleContent = {
  slug: 'cheese-flocculation-multiplier',
  title,
  description,
  faqTitle: '자주 묻는 질문',
  ui: {
    title: '치즈 응고 배수 계산기',
    subtitle: '실제 겔화 거동을 기반으로 완벽한 커드 절단 시점 찾기',
    flocculationLabel: '1차 응고 시간(분:초)',
    multiplierLabel: '응고 배수',
    cheeseTypeLabel: '치즈 스타일 프리셋',
    totalCoagulationLabel: '총 응고 시간',
    timeRemainingLabel: '절단까지 남은 시간',
    flocculationTimeLabel: '응고 시간',
    moistureLabel: '예상 커드 수분 보유율',
    customOption: '사용자 정의 배수',
    startTimer: '레넷 타이머 시작',
    markFlocculation: '응고 기록',
    resetTimer: '타이머 재설정',
    warningTitle: '레넷 품질 경고',
    warningText: '기록된 응고 시간이 매우 짧습니다. 이는 과도한 레넷 투여량 또는 부적절한 온도 설정을 나타낼 수 있으며, 고무 같은 질감이나 쓴맛을 유발할 수 있습니다.',
    phase1Title: '1단계: 레넷 첨가 및 응고',
    phase2Title: '2단계: 응고 카운트다운',
    phaseComplete: '커드를 자를 준비가 되었습니다!',
    statusWaiting: '레넷 저는 중...',
    statusFlocculated: '응고 감지됨',
    statusCoagulating: '응고 중...',
    statusReady: '절단 준비 완료',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '커드를 자를 시기: 매 배치 완벽한 치즈를 위한 응고 배수법',
      level: 2
    },
    {
      type: 'paragraph',
      html: '<strong>"커드는 언제 잘라야 할까?"</strong> 또는 <strong>"커드가 준비되었는지 어떻게 알 수 있을까?"</strong>라고 자문해 본 적이 있다면, 답은 응고 배수법에 있습니다. 고정 타이머에 의존하는 산업용 치즈 제조와 달리, 수제 치즈 장인은 우유가 처음으로 겔화되기 시작하는 순간(응고 시점)을 측정하고 그 시간에 스타일별 계수를 곱합니다. 이는 우유 산도, 칼슘 수준, 온도, 레넷 강도 등 모든 변수를 단일 측정값에 포착합니다. 저희 <strong>치즈 응고 배수 계산기</strong>가 계산을 처리하므로 매번 완벽한 순간에 자를 수 있습니다.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2.0x', label: '경질 치즈', icon: 'mdi:cheese' },
        { value: '3.0x', label: '반경질 치즈', icon: 'mdi:cheese' },
        { value: '5.0x', label: '연질 치즈', icon: 'mdi:cheese' },
        { value: '10-15m', label: '일반적인 응고 시간', icon: 'mdi:timer-outline' }
      ]
    },
    {
      type: 'title',
      text: '응고법으로 해결하는 일반적인 치즈 제조 문제',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>일관되지 않은 커드 경도:</strong> 고정 타이머는 우유의 배치별 변동을 고려할 수 없습니다. 응고법은 실제 우유 화학적 특성에 적응합니다.',
        '<strong>낮은 치즈 수율:</strong> 너무 이르거나 늦게 자르면 지방과 단백질 손실이 발생합니다. 배수법은 최적의 보존을 위한 정확한 시점을 목표로 합니다.',
        '<strong>잘못된 수분 함량:</strong> 경질 치즈는 건조한 커드가 필요하고 연질 치즈는 촉촉한 커드가 필요합니다. 다른 배수(2.0x에서 6.0x)가 시네레시스를 직접 제어합니다.',
        '<strong>변동하는 레넷 활성:</strong> 레넷 강도는 시간이 지남에 따라 그리고 브랜드 간에 변화합니다. 응고 시간 측정은 현재 배치의 실제 활성을 포착합니다.'
      ]
    },
    {
      type: 'title',
      text: '그릇 테스트 수행 방법: 단계별 안내',
      level: 3
    },
    {
      type: 'paragraph',
      html: '그릇 테스트는 특별한 장비 없이 응고를 감지하는 가장 간단한 방법입니다. 레넷을 첨가하고 완전히 저은 후, 작은 소독된 플라스틱 그릇이나 병뚜껑을 우유 표면에 놓습니다. 30~60초마다 부드럽게 두드리거나 회전시키세요. 우유가 액체 상태인 동안 그릇은 자유롭게 움직입니다. 움직임에 저항하는 순간이 바로 <strong>응고 시점</strong>입니다. 이 시간을 기록하여 위 계산기에 입력하세요.'
    },
    {
      type: 'tip',
      title: '병뚜껑을 사용하여 민감도 높이기',
      html: '가벼운 플라스틱 병뚜껑은 그릇보다 민감도가 높아 더 명확한 중단점을 제공합니다. 사용하기 전에 끓는 물에 2분 동안 소독하고, 레넷을 첨가한 순간부터 우유 표면에 띄워 두세요.'
    },
    {
      type: 'tip',
      title: '온도를 안정적으로 유지하세요',
      html: '응고 시간은 온도에 크게 의존합니다. 단 2C만 떨어져도 응고 시간이 두 배가 될 수 있습니다. 응고 단계 전반에 걸쳐 우유 온도를 안정적으로 유지하세요(일반적으로 치즈 스타일에 따라 30~35C).'
    },
    {
      type: 'tip',
      title: '매우 빠른 응고에 주의하세요',
      html: '응고가 8분(480초) 미만으로 발생하면 레넷을 너무 많이 넣었거나 우유 온도가 너무 높을 수 있습니다. 이로 인해 고무 같은 질감과 쓴맛이 발생할 수 있습니다. 이런 경우 계산기가 경고합니다.'
    },
    {
      type: 'title',
      text: '치즈 유형별 응고 배수 참조표',
      level: 2
    },
    {
      type: 'table',
      headers: ['치즈 스타일', '배수', '예상 수분', '절단 경도', '숙성 가능성'],
      rows: [
        ['Parmesan, Grana', '2.0x', '매우 낮음', '매우 단단함', '12개월 이상'],
        ['Mozzarella(신선)', '2.0x', '매우 높음', '부드러움/늘어남', '신선만'],
        ['Swiss, Alpine', '2.5x', '낮음', '단단함', '6~12개월'],
        ['Cheddar, Gouda', '3.0x', '중간~낮음', '단단함/탄력있음', '3~12개월'],
        ['Blue Cheese', '3.5x~4.0x', '중간', '부드러움', '2~6개월'],
        ['Camembert, Brie', '5.0x', '높음', '매우 부드러움', '3~8주'],
        ['Lactic / Fresh Chevre', '5.0x~6.0x', '매우 높음', '섬세함', '신선~2주']
      ]
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '낮은 배수(2.0x~2.5x)',
          icon: 'mdi:cheese',
          description: '낮은 수분 보유가 필요한 단단하고 건조한 치즈에 사용됩니다.',
          highlight: false,
          points: ['Mozzarella와 Parmesan: 2.0x', 'Alpine 스타일: 2.5x', '빠른 유청 배출', '밀도가 높고 숙성에 적합한 커드']
        },
        {
          title: '중간 배수(3.0x~4.0x)',
          icon: 'mdi:cheese',
          description: '수분과 산도를 균형있게 맞추는 반경질 치즈의 표준 범위입니다.',
          highlight: true,
          points: ['Cheddar와 Gouda: 3.0x', '블루 치즈: 3.5x~4.0x', '균형 잡힌 유청 배출', '유연한 숙성 가능성']
        },
        {
          title: '높은 배수(5.0x~6.0x)',
          icon: 'mdi:cheese',
          description: '부드럽고 크리미한 고수분 치즈에 사용됩니다.',
          highlight: false,
          points: ['Camembert와 Brie: 5.0x', 'Lactic 및 부드러운 백색 곰팡이 치즈', '높은 수분 보유', '섬세하고 크리미한 페이스트 형성']
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '문제 해결: 커드가 제대로 굳지 않고 있다는 3가지 징후',
      html: '<strong>6분 미만의 응고:</strong> 레넷이 너무 많거나 우유가 너무 뜨겁습니다. 다음 배치에서는 레넷을 25% 줄이세요. <strong>응고에 25분 이상 소요:</strong> 레넷이 만료되었거나 우유가 너무 차갑거나 칼슘 함량이 너무 낮을 수 있습니다. 염화칼슘을 추가하세요. <strong>절단 시 커드가 미끄럽거나 부서짐:</strong> 치즈 스타일에 비해 배수가 너무 높거나 낮을 수 있습니다. 0.5x 단위로 조정하세요.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: '경질 치즈(Parmesan, Alpine)',
      html: '<strong>2.0x~2.5x 배수</strong>를 사용하세요. 최대 유청 배출을 위해 커드를 더 일찍 자르세요. 이 커드들은 겔이 아직 비교적 약할 때 절단되어 장기 숙성에 이상적인 조밀하고 건조한 커드를 생성합니다. 계산기는 더 짧은 총 응고 시간을 표시합니다.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: '반경질 치즈(Cheddar, Gouda)',
      html: '<strong>3.0x 배수</strong>를 사용하세요. 대부분의 수제 치즈 제조의 표준 범위입니다. 수분 보유와 유청 배출의 균형을 맞춥니다. 커드는 탄력이 있고 깔끔하게 절단됩니다. 대부분의 치즈 레시피가 이 범주에 속합니다.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: '연질 치즈(Camembert, Brie)',
      html: '<strong>5.0x~6.0x 배수</strong>를 사용하세요. 절단 전에 겔이 상당히 강화되도록 하세요. 이렇게 하면 커드 내부에 수분이 가둬져 백색 곰팡이 치즈 특유의 크리미하고 퍼짐성이 좋은 질감이 만들어집니다. 보유된 유청을 잃지 않도록 커드를 부드럽게 다루세요.'
    },
    {
      type: 'title',
      text: '치즈 제조 용어집',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: '응고 시점', definition: '우유 단백질이 뭉치기 시작하여 부드러운 겔을 형성하는 치즈 제조 과정의 순간입니다.' },
        { term: '레넷', definition: '우유를 응고시켜 고형물(커드)과 액체(유청)로 분리하는 데 사용되는 효소 복합체(주로 키모신)입니다.' },
        { term: '시네레시스', definition: '겔에서 액체가 추출되거나 배출되는 현상, 예를 들어 치즈 커드에서 유청이 빠져나가는 것입니다.' },
        { term: '응고 시간', definition: '레넷 첨가부터 커드를 자를 준비가 될 때까지의 총 시간입니다.' }
      ]
    },
    {
      type: 'summary',
      title: '완벽한 커드 절단을 위한 핵심 요점',
      items: [
        '그릇 테스트를 사용하여 응고 시간을 정확히 측정하고 위 계산기에 입력하세요.',
        '치즈 스타일에 맞는 배수를 선택하세요: 경질 2.0x, 반경질 3.0x, 연질 5.0x.',
        '응고 중에는 우유 온도를 안정적으로 유지하세요. 단 2C의 변화도 응고 시간을 크게 변화시킵니다.',
        '응고가 8분 미만이면 다음에 레넷을 줄이세요. 25분을 초과하면 레넷의 신선도를 확인하세요.',
        '계산기가 수학을 처리하므로 기술과 일관성에 집중할 수 있습니다.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
