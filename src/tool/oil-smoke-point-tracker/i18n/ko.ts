import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = '식용유 발연점 추적기: 튀김용 오일 수명 및 품질 저하 예측 도구';
const description = '튀김용 오일의 품질을 모니터링하고 현재 발연점 하락을 추정합니다. 사용 횟수, 온도, 식품 유형을 추적하여 유해한 극성 화합물 축적을 방지하세요.';

const faq = [
  {
    question: '튀김용 오일의 발연점이 시간이 지남에 따라 낮아지는 이유는 무엇인가요?',
    answer: '오일을 튀김 온도로 가열할 때마다 열분해, 가수분해, 산화 작용으로 인해 중성지방(트리글리세리드)이 유리지방산(FFA), 모노아실글리세롤, 디아실글리세롤로 분해됩니다. 이러한 분해 산물은 온전한 중성지방보다 끓는점과 발연점이 훨씬 낮기 때문에, 반복 사용할수록 더 낮은 온도에서 오일이 연기를 내기 시작합니다.',
  },
  {
    question: '극성 화합물이란 무엇이며 왜 규제 대상인가요?',
    answer: '극성 화합물(TPC)은 튀김 과정에서 생성되는 분해 산물입니다. 이 물질이 오일 중량의 25%를 초과하면 해당 오일은 분해되고 산화되어 섭취 시 유해한 것으로 간주되며, 불쾌한 맛과 잠재적인 심혈관 위험을 초래합니다. 많은 유럽 국가에서는 TPC가 25%를 초과할 경우 튀김용 오일을 폐기하도록 법적으로 규정하고 있습니다.',
  },
  {
    question: '튀김옷이나 밀가루가 오일 품질 저하에 어떤 영향을 미치나요?',
    answer: '튀김옷, 반죽, 흩어진 밀가루는 음식물 입자를 뜨거운 오일 속으로 떨어뜨립니다. 이 입자들은 180°C 이상의 온도에서 빠르게 타거나 탄화되어 유리지방산을 방출하고, 열분해를 가속하는 촉매 역할을 합니다. 감자와 같은 깨끗한 전분류 식품은 오일 분해 속도가 훨씬 느립니다.',
  },
  {
    question: '오일 재사용의 안전 한계는 어느 정도인가요?',
    answer: '일반적인 기준으로, 카놀라유나 땅콩기름과 같은 정제된 고온용 오일은 깨끗한 조건에서 5~8회까지 재사용할 수 있습니다. 그러나 비정제 오일이나 190°C 이상의 온도에 노출된 오일, 또는 튀김옷을 입힌 음식을 조리한 오일은 1~3회 사용 후 폐기해야 합니다.',
  },
];

const howTo = [
  {
    name: '튀김용 오일 종류 선택',
    text: '데이터베이스 목록에서 사용 중인 오일을 선택하세요. 정제된 고온용 오일은 비정제 오일보다 초기 발연점이 더 높습니다.',
  },
  {
    name: '튀김 횟수 기록',
    text: '현재 사용 중인 오일 배치의 총 튀김 횟수를 입력하세요.',
  },
  {
    name: '튀김 온도 입력',
    text: '슬라이더를 조정하여 튀김 세션의 평균 온도를 맞추세요. 180°C를 초과하는 온도는 오일 분해를 가속합니다.',
  },
  {
    name: '식품 코팅 유형 확인',
    text: '깨끗한 전분류 식품인지, 탄화 잔여물을 남기는 밀가루 반죽·튀김옷 음식인지 지정하세요.',
  },
  {
    name: '발연점 및 폐기 상태 확인',
    text: '저하된 발연점과 폐기 게이지를 확인하세요. 오일 상태가 위험 구간에 진입하면 즉시 폐기하십시오.',
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent = {
  slug: 'oil-smoke-point-tracker',
  title: '식용유 발연점 추적기',
  description: '튀김용 오일의 품질을 모니터링하고 현재 발연점 하락을 추정합니다. 사용 횟수, 온도, 식품 유형을 추적하여 유해한 극성 화합물 축적을 방지하세요.',
  faqTitle: '자주 묻는 질문',
  ui: {
    oilPresetLabel: '튀김용 오일 종류',
    presetAvocadoRefined: '아보카도 오일 (정제)',
    presetSunflowerRefined: '해바라기씨 오일 (정제)',
    presetPeanutRefined: '땅콩기름 (정제)',
    presetCanolaRefined: '카놀라유 (정제)',
    presetOliveEV: '엑스트라 버진 올리브 오일',
    presetOlivePomace: '올리브 포마스 오일',
    presetCoconutUnrefined: '코코넛 오일 (비정제)',
    presetSunflowerUnrefined: '해바라기씨 오일 (비정제)',
    usesLabel: '튀김 횟수',
    tempLabel: '튀김 온도',
    foodTypeLabel: '식품 준비 / 코팅',
    optionStarch: '깨끗한 전분류 (감자, 프렌치프라이)',
    optionBreading: '밀가루 반죽, 튀김옷 입힌 식품',
    baseSmokePointLabel: '기본 발연점',
    currentSmokePointLabel: '저하된 발연점',
    polarCompoundsLabel: '극성 화합물 (TPC)',
    polymerizationLabel: '오일 중합 건강도',
    statusLabel: '오일 안전 프로필',
    statusGood: '재사용 가능',
    statusCaution: '주의  -  곧 여과 필요',
    statusDiscard: '즉시 폐기하십시오',
    adviceGood: '오일 특성이 안정적입니다. 계속 튀기되, 식힌 후 잔여 음식물 입자를 걸러내십시오.',
    adviceCaution: '품질 저하가 시작되었습니다. 발연점이 낮아졌습니다. 여과 후 딱 한 번만 더 사용하시길 권장합니다.',
    adviceDiscard: '심각한 수준의 품질 저하에 도달했습니다. 극성 화합물 농도가 매우 높습니다. 산패 및 건강 위험을 방지하기 위해 오일을 폐기하십시오.',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '튀김의 화학: 오일이 분해되는 이유',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '튀김은 화학적으로 가장 격렬한 조리 기술 중 하나입니다. 식품이 고온의 오일(보통 160~190°C)에 잠기면, 오일은 열, 식품에서 나오는 수분, 공기 중 산소에 동시에 노출됩니다. 이로 인해 세 가지 뚜렷한 화학 반응이 촉발됩니다: 가수분해(물이 에스터 결합을 끊음), 산화(산소가 과산화수소물을 생성), 중합(손상된 오일 분자끼리 결합하여 점성 높은 거대분자 사슬을 형성). 이러한 반응이 진행됨에 따라 총 극성 화합물(TPC) 농도가 증가하고, 오일이 분해되어 연기를 내기 시작하는 온도가 현저히 낮아집니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'TPC 25%', label: '법적 폐기 한계치', icon: 'mdi:alert-octagon' },
        { value: '180°C', label: '임계 온도 기준점', icon: 'mdi:thermometer-alert' },
        { value: '2.2배', label: '튀김옷 분해 가속률', icon: 'mdi:chart-timeline-variant' },
        { value: 'FFA', label: '유리지방산이 주원인', icon: 'mdi:molecule' },
      ],
    },
    {
      type: 'title',
      text: '극성 화합물과 건강 규제',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '총 극성 화합물(TPC)은 튀김용 유지의 분해 수준을 측정하는 국제 표준 지표입니다. 전문 주방에서는 안전 문제로 인해 TPC 농도가 25%를 초과한 오일의 사용이 여러 국가에서 법적으로 금지되어 있습니다. 이러한 극성 화합물은 흡수 저해제 역할을 하여 조리 효율을 떨어뜨리고 튀김옷의 바삭함을 저하시킵니다. 더 중요한 점은, 산화된 오일을 지속적으로 섭취하면 활성산소와 독성 화합물이 체내에 유입되어 심혈관 질환과 연관될 수 있다는 사실입니다.',
    },
    {
      type: 'title',
      text: '오일 종류 비교: 초기 발연점',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '정제 오일 (고온용)',
          icon: 'mdi:shield-check',
          description: '휘발성 화합물, 유리지방산 및 불순물을 제거하도록 가공된 오일입니다. 매우 높은 초기 발연점을 가집니다.',
          points: ['정제 아보카도 오일: 270°C / 518°F', '정제 해바라기씨 오일: 232°C / 450°F', '정제 땅콩기름: 232°C / 450°F', '초기 분해 저항력이 높음'],
        },
        {
          title: '비정제 오일 (저온용 / 풍미 우수)',
          icon: 'mdi:leaf',
          description: '저온 압착 또는 버진 방식으로 추출되어 천연 성분, 미네랄 및 유리지방산을 다량 함유한 오일입니다.',
          highlight: true,
          points: ['엑스트라 버진 올리브 오일: 190°C / 374°F', '비정제 코코넛 오일: 177°C / 350°F', '비정제 해바라기씨 오일: 107°C / 225°F', '고온에서 극도로 빠르게 분해됨'],
        },
      ],
    },
    {
      type: 'title',
      text: '튀김용 오일 발연점 및 최대 재사용 횟수 참고표',
      level: 3,
    },
    {
      type: 'table',
      headers: ['오일 종류', '기본 발연점 (°C)', '기본 발연점 (°F)', '상태 / 가공 방식', '권장 최대 사용 횟수'],
      rows: [
        ['아보카도 오일 (정제)', '270°C', '518°F', '정제', '10~12회'],
        ['올리브 포마스 오일', '238°C', '460°F', '정제', '8~10회'],
        ['해바라기씨 오일 (정제)', '232°C', '450°F', '정제', '6~8회'],
        ['땅콩기름 (정제)', '232°C', '450°F', '정제', '6~8회'],
        ['카놀라유 (정제)', '204°C', '400°F', '정제', '5~7회'],
        ['엑스트라 버진 올리브 오일', '190°C', '374°F', '저온 압착', '2~3회'],
        ['코코넛 오일 (비정제)', '177°C', '350°F', '비정제', '1~2회'],
        ['해바라기씨 오일 (비정제)', '107°C', '225°F', '비정제', '튀김용으로 사용하지 말 것'],
      ],
    },
    {
      type: 'title',
      text: '오일 품질 저하의 주요 경고 신호',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '위험: 튀김용 오일이 독성 물질로 변할 때',
      html: '다음과 같은 증상 중 하나라도 관찰되면 오일 재사용을 중단하십시오: <strong>기름이 산패되거나 비누 냄새</strong>가 나거나, 색이 어둡고 탁해지거나, 음식 주변에 <strong>거품이 과도하게</strong> 생기는 경우입니다. 오일이 정상 조리 온도(170~180°C)에서 연기를 내기 시작한다면, 이는 유리지방산(FFA)이 극도로 축적되어 발연점이 급락했음을 의미합니다. 품질 저하된 오일로 조리하면 독성 극성 화합물과 발암성 물질이 음식에 전이되어 풍미와 건강을 모두 해칩니다.',
    },
    {
      type: 'title',
      text: '튀김용 오일 품질을 오래 유지하는 방법',
      level: 3,
    },
    {
      type: 'tip',
      title: '탄화 잔여물을 즉시 걸러내세요',
      html: '반죽이나 튀김옷을 입힌 음식을 튀기면 미세 입자가 튀김기 바닥에 가라앉습니다. 이 입자들은 조리 중에도 계속 타면서 오일 분해를 가속하는 촉매 역할을 합니다. 이 과정을 늦추려면 튀기는 동안 표면의 부유물을 항상 걷어내고, <strong>매번 튀김이 끝난 후</strong> 식힌 오일을 고운 체, 면포, 또는 커피 필터로 여과하십시오. 여과한 오일은 밀봉된 유리 용기에 담아 서늘하고 어두운 곳에 보관하세요.',
    },
    {
      type: 'title',
      text: '튀김 모범 사례',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>식품 표면의 물기를 완전히 제거하세요</strong>  -  과도한 수분은 급속한 가수분해를 유발하여 오일을 유리지방산으로 분해합니다.',
        '<strong>튀기기 전 소금을 뿌리지 마세요</strong>  -  소금은 오일 산화를 촉진하는 촉매 역할을 합니다. 뜨거운 기름에서 건져낸 직후에 간을 하세요.',
        '<strong>최적 온도를 유지하세요</strong>  -  170°C에서 180°C 사이를 유지하십시오. 온도가 높으면 열분해가 가속되고, 너무 낮으면 음식이 과도한 기름을 흡수합니다.',
        '<strong>오래된 오일에 새 오일을 보충하지 마세요</strong>  -  신선한 오일을 품질 저하된 오일과 섞으면 새 오일의 분해가 오히려 촉진됩니다.',
      ],
    },
    {
      type: 'title',
      text: '튀김 및 지질 분해 용어 해설',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: '발연점', definition: '오일이나 지방이 지속적으로 분해되기 시작하여 푸른 연기가 눈에 띄게 발생하고 아크롤레인이 방출되는 온도입니다.' },
        { term: '총 극성 화합물 (TPC)', definition: '오일 분해의 국제 표준 지표로, 산화 화합물, 유리지방산 및 중합체의 총 중량 백분율을 나타냅니다.' },
        { term: '가수분해', definition: '물 분자가 중성지방을 유리지방산과 글리세롤로 분해하는 화학 반응입니다. 식품의 수분에 의해 촉발됩니다.' },
        { term: '중합', definition: '열로 손상된 오일 분자들이 서로 결합하여 거대분자 구조를 형성함으로써 오일의 점도를 높이는 과정입니다.' },
        { term: '유리지방산 (FFA)', definition: '가수분해 과정에서 중성지방으로부터 방출된 카복실산입니다. 이 물질은 지방의 초기 발연점을 직접적으로 낮춥니다.' },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
