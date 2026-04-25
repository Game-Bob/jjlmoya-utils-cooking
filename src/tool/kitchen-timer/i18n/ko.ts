import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "멀티 주방 타이머";
const description = "여러 요리 시간을 동시에 관리하세요. 독립적인 알람 기능으로 셰프와 전문적인 주방 관리(Mise en Place)에 적합합니다.";
const faq = [
  {
    question: '타이머를 몇 개까지 만들 수 있나요?',
    answer: '제한이 없습니다. "+" 버튼으로 필요한 만큼 추가하세요. 파스타를 삶으면서 소스를 졸이고, 고기를 레스팅하며 오븐을 확인하는 등 여러 작업을 동시에 관리할 때 필수적입니다.',
  },
  {
    question: '고기의 레스팅(Resting) 시간이 왜 중요한가요?',
    answer: '불에서 막 꺼낸 고기를 바로 자르면 육즙이 밖으로 다 빠져나갑니다. 5~10분 정도 레스팅하면 섬유질이 이완되고 육즙이 전체적으로 골고루 퍼집니다. 결과적으로 퍽퍽하지 않고 촉촉한 고기를 얻을 수 있습니다.',
  },
  {
    question: '화면이 잠겨 있어도 작동하나요?',
    answer: '네, 하지만 알림 권한을 승인해야 합니다. 타이머는 백그라운드에서 계속 실행되며, 탭을 바꾸거나 폰을 잠궈도 사운드와 브라우저 알림으로 시간을 알려줍니다.',
  },
  {
    question: '식품 위생의 "위험 온도대"란 무엇인가요?',
    answer: '5°C에서 65°C 사이는 박테리아가 빠르게 증식하는 구간입니다. 조리된 음식은 이 온도대에 2시간 이상(주변 온도가 30°C 이상일 경우 1시간) 머물러서는 안 됩니다. 타이머로 냉각 시간을 관리하세요.',
  },
];
const howTo = [
  {
    name: '다중 타이머 생성',
    text: '"+" 버튼을 사용하여 여러 요리 과정을 한꺼번에 관리할 수 있는 타이머들을 추가하세요.',
  },
  {
    name: '각 타이머 이름 설정',
    text: '어떤 요리인지 식별할 수 있도록 타이머 이름을 "오븐", "쌀", "소스" 등으로 변경하세요.',
  },
  {
    name: '모바일 도크 컨트롤',
    text: '모바일에서는 진행 중인 타이머가 하단의 슬라이드 도크에 표시됩니다. 바로 일시정지하거나 리셋할 수 있습니다.',
  },
  {
    name: '알림 받기',
    text: '시간이 종료되었을 때 브라우저가 경고를 줄 수 있도록 알림 설정을 승인하세요.',
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
  slug: 'kitchen-timer',
  title: '멀티 주방 타이머',
  description: '여러 요리 시간을 동시에 관리하세요. 독립적인 알람 기능으로 셰프와 전문적인 주방 관리(Mise en Place)에 적합합니다.',
  faqTitle: '자주 묻는 질문',
  ui: {
    addTimer: '타이머 추가',
    stopAll: '모두 중지',
    defaultName: '타이머',
    newTimerName: '새 타이머',
    timerDefault1: '타이머 1',
    timerDefault2: '타이머 2',
    timerDefault3: '타이머 3',
    label: '라벨',
    hours: '시간',
    minutes: '분',
    seconds: '초',
    ready: '준비 완료',
    start: '시작',
    pause: '일시정지',
    reset: '리셋',
    addOneMin: '+1 분',
    addFiveMin: '+5 분',
    statusReady: '대기',
    statusRunning: '진행 중',
    statusPaused: '일시정지',
    statusFinished: '시간 종료!',
    finishNotification: '타이머가 완료되었습니다: ',
  },
  faq, howTo,
  seo: [
    {
      type: 'title',
      text: '주방에서의 시간 관리 예술',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '전문적인 요리는 단순한 레시피가 아니라 <strong>정확한 시간 관리</strong>의 결과물입니다. 프랑스 요리 개념인 <em>"Mise en Place"</em>(미장플라스: 준비 완료)에는 시간도 중요한 재료로 포함됩니다. 5분간 레스팅한 스테이크는 육즙을 품고 부드러워지지만, 기다림 없는 고기는 육즙을 잃게 됩니다.',
    },
    {
      type: 'title',
      text: '온도와 시간의 상관관계',
      level: 3,
    },
    {
      type: 'table',
      headers: ['식재료', '조리 상태', '권장 시간', '효과'],
      rows: [
        ['반숙 계란', '주르륵 흐르는 노른자', '3-4 분', '매우 부드러운 단백질 질감'],
        ['몰레 계란 (Mollet)', '진한 크림 노른자', '5-6 분', '식감과 농도의 완벽한 균형'],
        ['완숙 계란', '완전히 익음', '9-11 분', '최상의 고형 질감'],
        ['고기 - 시어링', '강한 불', '면당 1-2 분', '마야르 반응을 통한 풍미 생성'],
        ['고기 - 레스팅', '잔열 관리', '5-20 분', '육즙의 균일한 재배치'],
      ],
    },
    {
      type: 'title',
      text: '식품 안전: 위험 온도대 관리',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '시간은 맛뿐만 아니라 안전에도 직결됩니다. 박테리아가 가장 활발히 증식하는 "위험 온도대"는 5°C에서 65°C 사이입니다. 조리된 음식은 이 온도에서 <strong>2시간</strong> 이상 방치해서는 안 됩니다. 타이머를 활용해 냉각 및 보관 시간을 철저히 관리하세요.',
    },
    {
      type: 'title',
      text: '전문적인 주방 조직 팁',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>완료 시간을 엇갈리게 설정하세요:</strong> 모든 요리가 동시에 끝나면 플레이팅할 때 당황하게 됩니다. 부재료가 메인 요리보다 5분 일찍 준비되도록 맞춰보세요.',
        '<strong>잔열을 활용하세요:</strong> 타이머 종료 1~2분 전에 불을 꺼보세요. 잔열이 요리를 부드럽게 마무리해줍니다.',
        '<strong>타이머에 이름을 붙이세요:</strong> 바쁜 주방에서는 어떤 알람이 울리는지 잊기 쉽습니다. "오븐", "밥", "소스" 등의 라벨 기능을 활용하세요.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>전문가 제언:</strong> 시간의 정밀함은 전문 셰프와 일반 요리사를 가르는 차이점입니다. 감각에만 의존하지 말고 정확한 도구를 사용하여 일관성 있는 맛을 유지하세요.',
    },
  ],
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
