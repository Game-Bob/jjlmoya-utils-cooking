import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "초콜릿 템퍼링 곡선 및 시딩(접종) 가이드";
const description = "집에서 초콜릿 템퍼링을 마스터하세요. 필요한 시딩용 초콜릿(칼릿) 무게를 계산하고 다크, 밀크, 화이트 초콜릿의 단계별 열역학적 온도 곡선을 따릅니다.";
const faq = [
  {
    question: "초콜릿 템퍼링이란 무엇인가요?",
    answer: "초콜릿 템퍼링은 카카오 버터의 결정을 제어하기 위해 초콜릿을 가열, 냉각, 그리고 부드럽게 재가열하는 과정입니다. 이를 통해 지방 분자가 안정적인 V형(Beta) 결정으로 결합하게 되며, 초콜릿에 광택이 나는 윤기와 파삭한 식감을 부여하고 상온에서 쉽게 녹는 것을 방지합니다."
  },
  {
    question: "시딩(접종) 방법이란 무엇인가요?",
    answer: "시딩(seeding) 방법은 초콜릿의 일부를 녹인 후, 냉각 단계에서 이미 템퍼링되어 있는 고체 초콜릿 조각(시드 또는 칼릿)을 추가하는 방법입니다. 이 고체 결정이 템플릿 역할을 하여 녹은 지방 분자가 대리석 판 없이도 원하는 V형 결정 구조로 굳어지도록 안내합니다."
  },
  {
    question: "초콜릿에 왜 하얀 줄무늬(지방 블룸)가 생기나요?",
    answer: "하얀 선이나 반점은 지방 블룸(fat bloom)으로 알려져 있습니다. 이는 초콜릿이 올바르게 템퍼링되지 않았을 때 발생하며, 불안정한 카카오 버터 결정이 표면으로 올라와 재결정화됩니다. 먹어도 안전하지만 본래의 식감과 윤기는 잃게 됩니다."
  },
  {
    question: "이미 블룸이 생긴 초콜릿을 다시 템퍼링할 수 있나요?",
    answer: "네. 블룸은 단순한 결정의 물리적 분리일 뿐 화학적 변질이 아닙니다. 블룸이 생긴 초콜릿을 적절한 용해 온도(약 45-50°C)까지 완전히 녹이면 불안정한 결정 구조가 모두 파괴되어 템퍼링 과정을 처음부터 다시 시작할 수 있습니다."
  },
  {
    question: "주방의 습도와 온도가 템퍼링에 어떤 영향을 미치나요?",
    answer: "초콜릿은 환경에 극도로 민감합니다. 템퍼링에 이상적인 주방 온도는 18°C~22°C이며, 상대 습도는 50% 미만이어야 합니다. 습도가 높으면 초콜릿 표면에 수분이 응결되어 슈가 블룸을 유발하거나 초콜릿이 굳어 다루기 힘든 페이스트 상태가 될 수 있습니다."
  },
  {
    question: "일반 마트에서 파는 초콜릿 칩을 템퍼링에 사용할 수 있나요?",
    answer: "일반 슈퍼의 초콜릿 칩은 베이킹 시 형태를 유지하기 위해 안정제가 추가되고 카카오 버터 함량이 낮은 경우가 많습니다. 성공적인 템퍼링과 아름다운 윤기를 위해서는 카카오 버터가 31% 이상 함유된 전문 제과용 커버춰 초콜릿을 사용하는 것을 강력히 권장합니다."
  }
];

const howTo = [
  {
    name: "초콜릿 종류 선택",
    text: "다크, 밀크, 화이트 초콜릿 중 하나를 선택하여 특정 온도 임계값을 로드합니다."
  },
  {
    name: "총 중량 입력",
    text: "준비하려는 템퍼링 초콜릿의 목표 총 중량을 입력합니다."
  },
  {
    name: "용해 단계",
    text: "계산된 75%의 초콜릿을 목표 온도(예: 다크는 50°C)까지 녹여 기존의 모든 결정 구조를 파괴합니다."
  },
  {
    name: "냉각 및 시딩 단계",
    text: "녹인 초콜릿을 저으면서 냉각시키고, 나머지 25%의 고체 칼릿을 서서히 추가하며 냉각 온도에 도달할 때까지 섞습니다."
  },
  {
    name: "작업 단계",
    text: "사용하기 전에 불안정한 결정을 녹이기 위해 초콜릿을 작업 온도까지 부드럽게 가열합니다."
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'chocolate-tempering-curve-guide',
  title,
  description,
  faqTitle: '자주 묻는 질문',
  ui: {
    title: '초콜릿 템퍼링 어시스턴트',
    subtitle: '열역학 곡선 및 시딩 계산기',
    chocolateTypeLabel: '초콜릿 종류',
    totalWeightLabel: '목표 총 중량',
    meltLabel: '용해 단계',
    coolLabel: '냉각 및 시딩 단계',
    workLabel: '작업 단계',
    meltTempLabel: '용해 온도',
    coolTempLabel: '냉각 온도',
    workTempLabel: '작업 온도',
    meltWeightLabel: '녹일 무게',
    seedWeightLabel: '시딩 무게 (칼릿)',
    molecularLabel: '분자 결정 상태',
    seedingTitle: '시딩법 (25% 비율) 계산기',
    stepTitle: '템퍼링 단계',
    darkOption: '다크 초콜릿',
    milkOption: '밀크 초콜릿',
    whiteOption: '화이트 초콜릿',
    resetButton: '가이드 초기화',
    warningOverheated: '경고: 온도가 너무 높습니다! 카카오 고형분이 타거나 우유 단백질이 변성될 수 있습니다.',
    warningUnderheated: '경고: 온도가 너무 낮습니다. 안정적인 결정이 형성되지 않았거나 초콜릿이 너무 일찍 굳어버립니다.',
    interactiveInfo: '단계를 클릭하거나 온도계를 드래그하여 분자 결정 상태를 확인하세요'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '카카오 버터 결정화의 열역학',
      level: 2
    },
    {
      type: 'paragraph',
      html: '카카오 버터는 다형성이며, 이는 6가지의 서로 다른 결정 형태(I~VI)로 굳어질 수 있음을 의미합니다. 각 형태는 고유한 녹는점과 안정성을 가집니다. 템퍼링의 목적은 불안정한 I~IV형 결정을 억제하면서 안정적인 V형(Beta) 결정을 극대화하는 것입니다. V형 결정은 전문가용 초콜릿 특유의 윤기, 단단한 식감, 그리고 깨지는 느낌을 보장합니다.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'V형 결정', label: '목표 Beta 결정', icon: 'mdi:hexagon-multiple-outline' },
        { value: '25-30%', label: '시딩 비율', icon: 'mdi:scale' },
        { value: '31-32°C', label: '다크 작업 온도', icon: 'mdi:thermometer' },
        { value: '0.1-0.2C', label: '분당 냉각률', icon: 'mdi:trending-down' }
      ]
    },
    {
      type: 'title',
      text: '카카오 버터의 6가지 동질 다형 결정 형태',
      level: 2
    },
    {
      type: 'paragraph',
      html: '템퍼링 실패를 방지하려면 각 결정 형태의 열역학적 성질을 이해하는 것이 필수적입니다. 다음은 카카오 버터 결정 형태의 성질입니다 :'
    },
    {
      type: 'table',
      headers: ['결정 형태', '구조 이름', '녹는점', '안정성과 질감'],
      rows: [
        ['I형', '감마 (γ)', '17°C (62.6°F)', '극도로 불안정, 부드러움, 손 안에서 즉시 녹음, 바삭함 없음.'],
        ['II형', '알파 (α)', '21°C (69.8°F)', '불안정, 부드러움, 부서지기 쉬운 구조, 녹기 매우 쉬움.'],
        ['III형', '베타 프라임 (β\')', '25.5°C (77.9°F)', '불안정, 단단함은 있으나 톡 깨지는 느낌이 부족함, 표면이 흐림.'],
        ['IV형', '베타 프라임 (β\')', '27.3°C (81.1°F)', '불안정, 단단함은 있음, 다소 쉽게 녹음, 광택이 무딤.'],
        ['V형', '베타 (β)', '33.8°C (92.8°F)', '매우 안정, 우수한 광택, 바삭하게 톡 깨짐 (원하는 형태).'],
        ['VI형', '베타 (β)', '36.3°C (97.3°F)', '가장 안정, 단단함, 형성에 수개월이 걸림, 블룸의 원인.']
      ]
    },
    {
      type: 'title',
      text: '시딩법의 기본 원리',
      level: 2
    },
    {
      type: 'paragraph',
      html: '시딩법은 대리석 테이블 없이 초콜릿을 템퍼링하는 신뢰할 수 있는 기법입니다. 총 중량의 25%를 녹이지 않고 남겨둠으로써, 고농도의 안정적인 V형 결정을 따뜻한 초콜릿에 직접 도입하여 결정화를 유도합니다.'
    },
    {
      type: 'title',
      text: '단계별 템퍼링 곡선의 과학적 과정',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>용해 단계 (T > 40°C):</strong> 가열을 통해 기존의 모든 결정 구조(I~VI형)가 완전히 녹아 비정형의 액상 지방이 생성됩니다.',
        '<strong>냉각 및 시딩 (T ≈ 27°C):</strong> 냉각을 통해 결정화가 시작됩니다. 25%의 고체 칼릿을 추가하면 안정적인 V형 결정이 투입됩니다.',
        '<strong>작업 단계 (T ≈ 31°C):</strong> 온화하게 가열하여 냉각 중에 생성된 불안정한 IV형 결정을 녹이고 V형 결정만 남깁니다.'
      ]
    },
    {
      type: 'title',
      text: '가정에서의 초콜릿 템퍼링 실전 기법',
      level: 2
    },
    {
      type: 'paragraph',
      html: '가정에서도 훌륭한 결과물을 얻을 수 있습니다. 계산기로 분량을 정확히 측정하고 다음 방법 중 하나를 선택하세요 :'
    },
    {
      type: 'list',
      items: [
        '<strong>중탕법:</strong> 75%의 초콜릿을 내열 보울에 넣고 끓기 직전의 물이 담긴 냄비 위에 올립니다. 보울 바닥이 물에 닿지 않고 증기가 들어가지 않게 주의합니다. 녹인 후 불에서 내리고 25%의 시드를 섞습니다. 냉각 온도가 될 때까지 저으면서 식힌 후 다시 짧게 중탕하여 작업 온도로 올립니다.',
        '<strong>전자레인지법:</strong> 75%의 초콜릿을 렌지용 용기에 넣습니다. 50% 출력으로 15~30초씩 끊어가며 가열하고 중간에 잘 섞어줍니다. 녹은 후 25%의 시드를 더해 계속 저어줍니다. 5~10초씩 가열해 작업 온도로 올립니다.',
        '<strong>수비드(저온조리)법:</strong> 초콜릿을 모두 진공팩에 넣습니다. 용해 온도에서 완전히 녹입니다. 얼음을 가해 온도를 낮추고 팩을 자주 주물러 섞어줍니다. 그 후 작업 온도로 올려줍니다.'
      ]
    },
    {
      type: 'title',
      text: '템퍼링 테스트 실시 방법',
      level: 2
    },
    {
      type: 'paragraph',
      html: '초콜릿을 사용하기 전에 테스트합니다. 깨끗한 나이프 끝을 초콜릿에 담갔다 꺼내어 18-22°C의 실온에 둡니다. 템퍼링이 제대로 되었다면 3~5분 이내에 균일하게 굳고 광택과 바삭한 식감을 보여줍니다. 굳지 않는다면 다시 녹여서 진행하세요.'
    },
    {
      type: 'title',
      text: '템퍼링 문제 해결 방법',
      level: 2
    },
    {
      type: 'paragraph',
      html: '잘못된 템퍼링은 표면에 하얀 반점(지방 블룸)을 만듭니다. 이는 초콜릿을 다시 녹여 처음 단계부터 다시 시작하여 해결합니다.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
