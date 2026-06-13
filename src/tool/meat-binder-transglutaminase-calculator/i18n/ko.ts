import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = '육류 바인더 트랜스글루타미나제 계산기: 분자요리 투여 가이드';
const description = '육류 접합을 위한 정확한 트랜스글루타미나제(TG) 투여량을 계산합니다. 드라이 더스팅 또는 슬러리 비율, 인큐베이션 시간 및 온도 안전 경고를 확인하세요.';

const faq = [
  {
    question: '트랜스글루타미나제란 무엇이며 어떻게 고기를 접합하나요?',
    answer: '트랜스글루타미나제(TG)는 "고기 풀(meat glue)"이라고도 불리며, 단백질의 글루타민과 라이신 아미노산 사이에 공유 결합 형성을 촉매하는 효소입니다. 고기 표면에 도포하면 별도의 조각들을 하나의 응집된 덩어리로 융합시키는 가교 결합을 생성합니다. 이 반응은 완전히 진행되기 위해 시간과 저온(2-5°C)이 필요하며, 일반적으로 6시간에서 24시간이 소요됩니다.',
  },
  {
    question: '드라이 더스팅과 슬러리 도포의 차이점은 무엇인가요?',
    answer: '드라이 더스팅은 TG 분말을 고기 무게의 0.75-1.5%만큼 직접 고기 표면에 뿌리는 방식입니다. 슬러리 방식은 TG 1부와 물 4부를 혼합하여 발라 바를 수 있는 페이스트를 만드는 것으로, 불규칙한 표면을 코팅하거나 큰 로스트나 껍질이 있는 필렛에 얇고 균일한 층을 바르는 데 이상적입니다.',
  },
  {
    question: '온도가 트랜스글루타미나제 활성에 영향을 미치나요?',
    answer: '네. TG는 2°C에서 15°C 사이에서 가장 활성이 높습니다. 더 높은 온도(최대 40°C)에서는 반응이 가속화되지만 면밀히 모니터링해야 합니다. 60°C 이상에서는 효소가 변성되어 영구적으로 비활성화됩니다: 가교 결합 반응이 완전히 중단됩니다. 결합을 유지하려면 조리 중에 TG로 접합된 고기를 항상 60°C 미만으로 유지하세요.',
  },
  {
    question: '생선이나 조개류에 트랜스글루타미나제를 사용할 수 있나요?',
    answer: '네, 하지만 생선과 조개류는 붉은 고기나 가금류에 비해 근육 단백질의 라이신과 글루타민 수치가 낮습니다. 더 높은 TG 비율(1.2-1.5%)과 더 긴 인큐베이션 시간이 필요할 수 있습니다. 섬세한 가리비나 얇은 생선 필렛의 경우 더 균일한 도포를 위해 슬러리 방식을 고려하세요.',
  },
];

const howTo = [
  {
    name: '도포 방법 선택',
    text: '로스트와 스테이크 같은 평평한 표면에는 드라이 더스팅을 선택하세요. 불규칙한 절단면, 얇은 층, 또는 껍질이 있는 단백질에는 슬러리를 선택하세요.',
  },
  {
    name: '고기 무게 입력',
    text: '접합하려는 고기 또는 단백질의 총 중량을 그램 단위로 입력하세요.',
  },
  {
    name: '단백질 종류 지정',
    text: '절단 부위에 가장 잘 맞는 단백질 종류를 선택하세요. 붉은 고기는 TG가 덜 필요하고, 생선과 조개류는 더 많이 필요합니다.',
  },
  {
    name: '인큐베이션 온도 설정',
    text: '냉장 보관 온도(2-40°C)를 입력하세요. 계산기가 필요한 접합 시간을 추정합니다.',
  },
  {
    name: 'TG 계량 및 도포',
    text: '계산된 TG 분말을 계량하세요. 더스팅하거나 슬러리를 발라 바른 후 단백질 표면을 서로 단단히 누르세요.',
  },
  {
    name: '휴지 및 냉장 보관',
    text: '비닐 필름으로 단단히 싸서 조리 전에 권장 인큐베이션 시간 동안 냉장 보관하세요.',
  },
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
  slug: 'meat-binder-transglutaminase-calculator',
  title: '육류 바인더 트랜스글루타미나제 계산기',
  description: '육류 접합을 위한 정확한 트랜스글루타미나제(TG) 투여량을 계산합니다. 드라이 더스팅 또는 슬러리 비율, 인큐베이션 시간 및 온도 안전 경고를 확인하세요.',
  faqTitle: '자주 묻는 질문',
  ui: {
    title: '육류 바인더 트랜스글루타미나제 계산기',
    subtitle: '단백질 가교 결합을 위한 분자적 정밀도',
    methodLabel: '도포 방법',
    dryMethod: '드라이 더스팅',
    slurryMethod: '슬러리 (발라 바르는 페이스트)',
    weightLabel: '고기 / 단백질 무게',
    proteinLabel: '단백질 종류',
    redMeat: '붉은 고기 (소고기, 양고기, 사냥감)',
    poultry: '가금류 (닭고기, 칠면조, 오리고기)',
    fish: '생선 (단단한 필렛, 통생선)',
    shellfish: '조개류 (가리비, 새우, 랍스터)',
    unitLabel: '측정 시스템',
    metricUnit: '미터법 (g / °C)',
    imperialUnit: '야드파운드법 (oz / °F)',
    tempLabel: '인큐베이션 온도',
    resultTitle: '투여 결과',
    tgAmount: '트랜스글루타미나제 (TG)',
    waterAmount: '물 (슬러리용)',
    totalWeight: '총 접합 중량',
    ratioLabel: 'TG 비율',
    incubationLabel: '권장 인큐베이션',
    incubationRange: '{min}시간 ~ {max}시간',
    dryDustingDesc: 'TG 분말을 고기 표면에 골고루 뿌린 후 조각들을 함께 누르세요. 평평한 절단면과 로스트에 이상적입니다.',
    slurryDesc: 'TG를 물 4부와 혼합하여 발라 바를 수 있는 페이스트를 만드세요. 불규칙한 표면, 필렛, 또는 껍질 접합에 브러시로 도포하세요.',
    enzymeDestroyed: '효소 파괴됨: 온도가 변성 임계값을 초과했습니다. 트랜스글루타미나제가 변성되어 접합되지 않습니다.',
    noWarning: '',
    hours: '시간',
    grams: 'g',
    milliliters: 'ml',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '고기 1kg당 트랜스글루타미나제를 얼마나 사용해야 하나요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '적정 용량은 단백질 종류와 도포 방법에 따라 다릅니다. 붉은 고기의 경우 중량 대비 0.75-1.0% TG(kg당 7.5-10g)를 사용하세요. 가금류는 1.0-1.2%. 생선과 조개류는 1.2-1.5%입니다. 평평한 절단면에는 드라이 더스트로 도포하거나, 불규칙한 표면에는 물 4부와 혼합하여 슬러리로 사용하세요. 정확한 측정을 위해 위 계산기에 단백질 중량을 입력하세요.',
    },
    {
      type: 'title',
      text: '드라이 더스팅 vs. 슬러리: 어떤 방법을 선택해야 하나요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '드라이 더스팅은 스테이크, 로스트, 커틀렛과 같은 평평하고 균일한 표면에 가장 효과적입니다. TG 분말을 직접 뿌리고(고기 무게의 0.75-1.5%) 조각들을 함께 누르세요. 슬러리 방법(TG 1부에 물 4부)은 균일한 도포가 중요한 불규칙한 절단면, 껍질이 있는 필렛, 또는 섬세한 가리비에 더 적합합니다. 페이스트를 바르고 조립한 후 단단히 싸매세요. 두 방법 모두 결합을 완료하기 위해 냉장 인큐베이션이 필요합니다.',
    },
    {
      type: 'title',
      text: '온도 제어가 결합의 성패를 좌우하는 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '트랜스글루타미나제는 2°C에서 5°C 사이에서 가장 효과적으로 작용하며 6:24시간에 걸쳐 강한 가교 결합을 형성합니다. 더 높은 냉장고 온도(5:15°C)에서는 반응이 3:8시간으로 빨라지지만 결합이 더 얕을 수 있습니다. 40°C 이상에서는 효소가 빠르게 변성되고, 60°C에서는 즉시 파괴됩니다: 기존 결합 형성이 중단되고 조리 중에 고기가 분리됩니다. 위 시각화 도구의 게이지로 항상 냉장 보관 온도를 모니터링하세요.',
    },
    {
      type: 'table',
      headers: ['단백질', 'TG 용량 (중량 대비 %)', '방법', '인큐베이션 (2:5°C)', '결합 강도'],
      rows: [
        ['소고기, 양고기, 사냥감', '0.75-1.0%', '드라이 더스트', '6:12시간', '매우 강함'],
        ['닭고기, 칠면조, 오리고기', '1.0-1.2%', '둘 다', '8:16시간', '강함'],
        ['연어, 대구, 농어', '1.2-1.5%', '슬러리', '12:24시간', '보통'],
        ['가리비, 새우, 랍스터', '1.0-1.5%', '슬러리', '12:24시간', '보통'],
      ],
    },
    {
      type: 'title',
      text: 'TG로 고기를 접합할 때 흔한 실수들',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>과도한 효소 사용:</strong> 1.5% 이상의 TG를 사용하면 흰색 잔여물과 분필 같은 질감이 남습니다. 과다 사용이 결합을 더 강하게 만들지는 않습니다.',
        '<strong>표면의 지방 또는 실버스킨:</strong> TG는 지방이나 결합 조직에 접합할 수 없습니다. 도포 전에 표면을 깨끗이 정리하여 근육 섬유가 드러날 때까지 손질하세요.',
        '<strong>휴지 시간 생략:</strong> 가교 결합 반응은 수 시간이 걸립니다. 조립 직후 조리하면 결합이 형성되기 전에 효소가 씻겨 나갑니다.',
        '<strong>조리 중 60°C 이상의 열:</strong> 결합은 부드러운 조리(55:58°C의 수비드가 이상적)에서는 유지되지만, 높은 시어링 온도는 접합면을 약화시킬 수 있습니다.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
