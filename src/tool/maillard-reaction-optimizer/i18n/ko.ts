import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = '마이야르 반응 최적화 도구: pH 및 온도 기반 갈변 계산기';
const description = '마이야르 반응을 촉진하기 위해 식품 1kg당 첨가할 베이킹소다의 정확한 양을 계산합니다. 안전한 알칼리도 한계 내에서 유지하여 비누 맛을 방지하세요.';

const faq = [
  {
    question: '마이야르 반응이란 무엇이며, 요리에서 왜 중요할까요?',
    answer: '마이야르 반응은 아미노산과 환원당 사이의 화학 반응으로, 갈변된 음식에 독특한 풍미를 부여합니다. 구운 스테이크의 크러스트, 빵의 황금빛 껍질, 로스팅 커피, 캐러멜화된 양파는 모두 이 반응의 결과입니다. 반응은 140°C에서 165°C 사이에서 가장 빠르게 일어납니다.',
  },
  {
    question: '베이킹소다(탄산수소나트륨)는 어떻게 갈변을 촉진하나요?',
    answer: '베이킹소다는 식품 표면의 pH를 높여 더 알칼리성으로 만듭니다. 마이야르 반응은 알칼리성 환경에서 현저히 빠르게 진행됩니다. pH를 6에서 8로 올리면 갈변 속도가 2배에서 3배까지 빨라질 수 있습니다. 그러나 베이킹소다를 너무 많이 넣으면 금속성의 비누 같은 뒷맛이 남습니다. 그래서 이 계산기가 안전 한계를 적용하는 것입니다.',
  },
  {
    question: '식품 1kg당 베이킹소다의 최대 안전 사용량은 얼마인가요?',
    answer: '일반적인 안전 한계는 식품 1kg당 베이킹소다 1.5g입니다. 이 임계값을 초과하면 이취(금속성, 비누 맛, 화학적 맛)의 위험이 급격히 증가합니다. 저희가 권장하는 양은 최대량의 절반으로, 이취 위험을 최소화하면서 충분한 갈변 촉진 효과를 제공합니다.',
  },
  {
    question: '마이야르 반응에 온도가 너무 낮으면 어떻게 되나요?',
    answer: '110°C 미만에서는 주로 수분 증발만 일어나며 의미 있는 마이야르 갈변은 발생하지 않습니다. 110°C에서 140°C 사이에서는 갈변이 서서히 일어납니다. 최적 온도 범위는 140°C에서 180°C입니다. 180°C를 초과하면 열분해(피롤리시스)가 시작되어, 음식이 타면서 바람직한 갈변 풍미 대신 쓰고 자극적인 화합물이 생성됩니다.',
  },
];

const howTo = [
  {
    name: '식품 무게 측정',
    text: '갈변시키고자 하는 식품의 총 무게를 그램 단위로 입력하세요.',
  },
  {
    name: '조리 온도 설정',
    text: '조리 표면 온도 또는 오븐 온도를 입력하세요. 마이야르 반응 최적 구간은 140~180°C입니다.',
  },
  {
    name: '베이킹소다 양 조절',
    text: '슬라이더는 기본적으로 안전 최대량의 절반으로 설정되어 있습니다. 조심스럽게 늘리세요. 위험 구간에 도달하기 전에 계산기가 경고합니다.',
  },
  {
    name: '예상 pH 및 속도 배율 확인',
    text: '계산기는 선택한 pH 수준에서 갈변이 기본 pH 6 대비 얼마나 더 빠르게 진행되는지 보여줍니다.',
  },
  {
    name: '풍미 위험 수준 확인',
    text: '풍미 배지는 예상 표면 pH에 따라 안전, 주의, 위험을 표시합니다. 최상의 결과를 위해 녹색 구간을 유지하세요.',
  },
  {
    name: '베이킹소다를 고르게 도포',
    text: '권장량의 베이킹소다를 소량의 물에 녹여 조리 전에 음식에 붓으로 바르거나 버무리세요. 불균일하게 분포되면 얼룩덜룩한 갈변이 생깁니다.',
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
  slug: 'maillard-reaction-optimizer',
  title: '마이야르 반응 최적화 도구',
  description: '마이야르 반응을 촉진하기 위해 식품 1kg당 첨가할 베이킹소다의 정확한 양을 계산합니다. 안전한 알칼리도 한계 내에서 유지하여 비누 맛을 방지하세요.',
  faqTitle: '자주 묻는 질문',
  ui: {
    title: '마이야르 반응 최적화 도구',
    headerLabel: '갈변 화학',
    flavorSafe: '안전 pH',
    flavorCaution: '주의: 알칼리성',
    flavorDanger: '위험: 비누 맛 가능성',
    unitLabel: '단위',
    metricUnit: '미터법',
    imperialUnit: '야드파운드법',
    weightLabel: '식품 무게',
    weightUnit: 'g',
    weightOz: 'oz',
    tempLabel: '표면 온도',
    tempUnit: '°C',
    degreesF: '°F',
    tempLow: '느림: {min} ~ {max}',
    tempOpt: '최적: {min} ~ {max}',
    tempHigh: '열분해: >{min}',
    sodaLabel: '베이킹소다',
    sodaUnit: 'g',
    sodaOz: 'oz',
    sodaNote: '안전 최대량의 절반, 부드러운 갈변 촉진',
    sodaCautionNote: '최대량에 근접 중, 풍미를 주의 깊게 확인',
    sodaDangerNote: '안전 최대량 초과, 비누 맛 위험',
    sodaRecommended: '권장 베이킹소다',
    sodaMax: '안전 최대량',
    speedLabel: '반응 속도',
    browningLabel: '갈변 진행도',
    rawLabel: '생(生)',
    goldenLabel: '황금빛',
    burntLabel: '탄 것',
    phEstimated: '예상 표면 pH',
    timeSaved: '절약 시간',
    errorTempTooLow: '온도가 110°C 미만입니다. 마이야르 반응이 시작되려면 최소 110°C가 필요합니다. 이 임계값 미만에서는 수분 증발만 일어나며 의미 있는 갈변은 발생하지 않습니다.',
    errorWeightTooLow: '식품 무게는 0g보다 커야 합니다.',
    footerTemplate: '<span class="mr-footer-stat"><strong>{weight}</strong><small>{wunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{temp}</strong><small>{tunit}</small>에서</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">베이킹소다 <strong>{soda}</strong><small>{sunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">속도 x<strong>{multiplier}</strong></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{timeSaved}</strong>% 절약</span>',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '마이야르 반응 최적화 도구: 갈변의 과학을 마스터하세요',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '마이야르 반응은 풍미 있는 요리의 성배입니다. 구운 스테이크, 황금빛 빵 껍질, 캐러멜화된 양파의 깊고 복합적인 풍미를 만들어냅니다. 프랑스 화학자 루이-카미유 마이야르의 이름을 딴 이 반응은 아미노산과 환원당 사이에서 일어나 수백 가지 풍미 화합물을 생성합니다. 베이킹소다로 pH를 조절하면, 태우지 않고도 갈변 속도를 <strong>2배에서 3배</strong>까지 높일 수 있습니다. 이 계산기는 정확한 사용량을 알려주고 비누 맛 영역에 도달하기 전에 경고합니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '약 140°C', label: '마이야르 활성 온도', icon: 'mdi:thermometer' },
        { value: '2~3배', label: 'pH 8에서 속도 증가', icon: 'mdi:speedometer' },
        { value: '1.5 g/kg', label: '베이킹소다 최대 안전량', icon: 'mdi:scale' },
        { value: 'pH 8.5', label: '비누 맛 임계값', icon: 'mdi:alert-circle' },
      ],
    },
    {
      type: 'title',
      text: '식품 무게별 베이킹소다 용량 차트',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이 참조표를 사용하여 일반적인 식품 무게별 권장량과 최대량을 빠르게 확인하세요. 권장량은 <strong>안전 최대량의 절반</strong>으로, 이취 위험을 최소화하면서 눈에 띄는 갈변 촉진 효과를 제공합니다.',
    },
    {
      type: 'table',
      headers: ['식품 무게', '권장량 (g)', '안전 최대량 (g)', '예상 pH', '속도 향상'],
      rows: [
        ['250g (양파 1개)', '0.19 g', '0.38 g', '6.5', 'x1.2'],
        ['500g (양파 2개)', '0.38 g', '0.75 g', '6.5', 'x1.2'],
        ['750g (양파 3개)', '0.56 g', '1.13 g', '6.5', 'x1.2'],
        ['1000g (1 kg)', '0.75 g', '1.50 g', '7.0', 'x1.6'],
        ['1500g', '1.13 g', '2.25 g', '7.0', 'x1.6'],
        ['2000g', '1.50 g', '3.00 g', '7.0', 'x2.0'],
        ['3000g', '2.25 g', '4.50 g', '7.0', 'x2.0'],
        ['5000g', '3.75 g', '7.50 g', '7.0', 'x2.0'],
      ],
    },
    {
      type: 'title',
      text: '표면 pH와 갈변에 미치는 영향 이해하기',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '중성 pH (6.0)',
          icon: 'mdi:water',
          description: '대부분의 생고기와 채소의 자연적인 pH입니다. 마이야르 반응이 기준 속도로 진행됩니다.',
          highlight: false,
          points: ['반응 속도: x1.0 (기준)', '완전 자연식, 무첨가', '적합 대상: 전통 방식 선호자', '갈변이 느려 익힘 정도를 더 잘 조절 가능'],
        },
        {
          title: '약알칼리성 (pH 7.0 ~ 7.5)',
          icon: 'mdi:flask-round-bottom',
          description: '권장량의 베이킹소다로 달성됩니다. 풍미에 영향 없이 눈에 띄는 속도 향상.',
          highlight: true,
          points: ['반응 속도: x1.5~2.0', '1kg당 1/2 tsp (약 0.75g)', '적합 대상: 캐러멜 양파, 구운 채소', '대부분의 가정 요리사에게 최적의 균형점'],
        },
        {
          title: '고알칼리성 (pH 8.0 ~ 8.5)',
          icon: 'mdi:alert',
          description: '풍미 결함이 나타나기 전의 실질적 최대 알칼리도입니다. 갈변 속도가 두 배가 되지만 세심한 관리가 필요합니다.',
          highlight: false,
          points: ['반응 속도: x2.0~3.0', '1kg당 1 tsp (약 1.5g)', '적합 대상: 진한 프레첼 크러스트, 극단적 캐러멜화', '서빙 전에 반드시 맛보세요  -  비누 맛 경계선'],
        },
      ],
    },
    {
      type: 'title',
      text: '온도 구간별 갈변 의미',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '온도는 마이야르 반응의 또 다른 핵심 변수입니다. 각 구간은 근본적으로 다른 결과를 낳습니다. 이 임계값을 이해하면 요리 목표에 맞는 적절한 열 수준을 선택할 수 있습니다.',
    },
    {
      type: 'table',
      headers: ['구간', '온도 범위', '일어나는 현상', '적합한 용도'],
      rows: [
        ['증발', '110°C 미만', '수분이 증발하고 갈변은 일어나지 않음', '수비드, 포칭, 찜'],
        ['느린 갈변', '110~139°C', '마이야르 반응이 서서히 시작, 부드러운 색상 발현', '저온 로스트 토마토, 저온 건조'],
        ['최적 구간', '140~180°C', '태우지 않고 최대 갈변 속도', '굽기, 로스팅, 튀기기, 베이킹'],
        ['열분해', '180°C 초과', '연소 시작, 쓰고 자극적인 화합물 형성', '풍미 액센트를 위한 빠른 태움 (아껴서 사용)'],
      ],
    },
    {
      type: 'title',
      text: '마이야르 반응에서 흔한 실수와 해결법',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '베이킹소다 과다 사용',
      html: '베이킹소다는 많다고 좋은 것이 아닙니다. 식품 1kg당 1.5g을 초과하면 금속성, 비누 맛, 또는 화학적 뒷맛이 생깁니다. 과도한 알칼리성으로 생성된 풍미 화합물은 올바른 마이야르 갈변에서 나오는 풍부하고 감칠맛 나는 풍미와 다릅니다. <strong>계산기가 표시하는 권장량을 지키세요.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: '조리 온도가 너무 낮음',
      html: '110°C 미만에서는 사실상 찌거나 건조시키는 것일 뿐, 갈변이 아닙니다. 마이야르 반응에는 최소 활성화 온도가 있습니다. 깊고 복합적인 풍미를 원한다면, <strong>식품 표면이 최소 140°C에 도달해야 합니다.</strong> 굽기, 브로일링, 180°C 이상의 오븐 로스팅과 같은 고온 조리법을 사용하세요.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '수분 무시하기',
      html: '수분은 마이야르 반응의 적입니다. 젖은 표면은 수분이 증발할 때까지 100°C를 넘을 수 없습니다. 굽기 전에 <strong>반드시 식품의 물기를 완전히 제거하세요.</strong> 베이킹소다는 세포벽을 분해하여 표면 수분의 증발도 촉진하므로 도움이 되지만, 눈에 띄게 젖은 식품을 보완할 수는 없습니다. 건조한 표면 = 더 나은 갈변입니다.',
    },
    {
      type: 'title',
      text: '완벽한 갈변을 위한 프로 팁',
      level: 3,
    },
    {
      type: 'tip',
      title: '베이킹소다 슬러리 기법',
      html: '마른 베이킹소다를 음식에 직접 뿌리지 마세요. 균일하게 분포되지 않습니다. 계량한 양을 1~2큰술의 따뜻한 물에 녹인 다음, 슬러리를 붓으로 바르거나 음식에 버무리세요. 이렇게 하면 표면 전체에 균일한 알칼리성이 적용되어 고르고 일관된 갈변을 보장합니다.',
    },
    {
      type: 'tip',
      title: '베이킹소다와 드라이 브라이닝을 함께 사용하기',
      html: '베이킹소다와 소금은 시너지 효과를 냅니다. 조리 1~24시간 전에 고기를 소금으로 드라이 브라이닝한 후, 불에 올리기 직전에 베이킹소다 슬러리를 바르세요. 소금은 마이야르 반응에 참여하는 단백질을 끌어내고, 베이킹소다는 반응을 가속화합니다. 이 조합은 가장 깊고 풍부한 크러스트를 만들어냅니다.',
    },
    {
      type: 'tip',
      title: '양파 캐러멜화 시간 단축 꿀팁',
      html: '베이킹소다 한 꼬집(큰 양파 1개당 0.3g)으로 캐러멜화 시간을 45분에서 20분으로 단축할 수 있습니다. 알칼리성 환경이 양파의 세포벽을 더 빨리 분해하여 마이야르 반응을 촉진하는 당분과 아미노산을 방출합니다. 그러나 정확성이 중요합니다. 베이킹소다가 너무 많으면 양파가 으깨지고 화학적 뒷맛이 남습니다.',
    },
    {
      type: 'title',
      text: '갈변 핵심 용어집',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: '마이야르 반응', definition: '아미노산과 환원당 사이의 비효소적 화학 반응으로, 조리된 식품에 갈색과 복합적인 풍미를 부여합니다. 110°C 이상에서 발생하며 캐러멜화와는 구별됩니다.' },
        { term: '열분해 (피롤리시스)', definition: '고온(180°C 초과)에서 유기 물질이 열적으로 분해되는 현상입니다. 마이야르 갈변과 달리, 열분해는 쓰고 자극적이며 때로는 발암성 화합물을 생성합니다. 음식이 탈 때 일어나는 현상입니다.' },
        { term: 'pH', definition: '0에서 14까지의 척도로 산성(낮음) 또는 알칼리성(높음)을 측정합니다. 중성은 7입니다. 대부분의 생식품은 pH 5.5~6.5 사이에 있습니다. 베이킹소다는 pH를 알칼리성 수준으로 높여 마이야르 반응을 촉진합니다.' },
        { term: '탄산수소나트륨', definition: '베이킹소다  -  약염기로 작용하는 백색 결정성 분말(NaHCO₃)입니다. 요리에서는 표면 pH를 높이고, 갈변을 촉진하며, 고기를 연하게 하고, 조리 중 채소의 색상을 유지하는 데 도움을 줍니다.' },
        { term: '알칼리도', definition: '용액이 산을 중화하는 능력입니다. 마이야르 반응 촉진의 맥락에서, 알칼리도는 pH 7.0 이상의 값을 의미합니다. 과도한 알칼리도는 쓰고 비누 같은 이취를 생성합니다.' },
        { term: '반응 속도 배율', definition: '마이야르 반응이 기준(pH 6) 대비 몇 배 더 빠르게 진행되는지를 나타냅니다. 배율 x2.0은 갈변이 두 배 빠르게 일어난다는 의미로, 동일한 색상 발현에 필요한 조리 시간이 실질적으로 절반으로 줄어듭니다.' },
        { term: '표면 pH', definition: '마이야르 반응이 일어나는 식품의 바로 표면 pH로, 내부 pH와는 다릅니다. 베이킹소다는 짧은 조리 시간 동안 식품 깊숙이 침투하지 않으므로 주로 표면 pH에 영향을 미칩니다.' },
      ],
    },
    {
      type: 'title',
      text: '간편 참조: 일상 식품별 베이킹소다 사용량',
      level: 3,
    },
    {
      type: 'summary',
      title: '일상 요리를 위한 권장 베이킹소다 양',
      items: [
        '캐러멜 양파 (대 1개): 베이킹소다 0.3g  -  45분에서 약 20분으로 단축',
        '구운 감자 (500g): 베이킹소다 0.4g  -  더 바삭하고 황금빛 외관',
        '팬 시어 스테이크 (250g): 베이킹소다 0.2g  -  더 짧은 시간에 더 진한 크러스트',
        '치킨 윙 (1kg): 베이킹소다 0.75g  -  더 바삭한 껍질, 더 빠른 갈변',
        '프레첼 반죽 (밀가루 500g): 베이킹소다 1.5g  -  알칼리 딥 후 진한 갈색 크러스트',
        '구운 채소 (1kg 믹스): 베이킹소다 0.75g  -  더 균일한 캐러멜화',
      ],
    },
    {
      type: 'paragraph',
      html: '모든 식품은 고유한 자연 pH와 수분 함량에 따라 이상적인 알칼리도 수준이 다릅니다. 이 계산기는 추측을 배제합니다. 정확한 식품 무게와 온도를 입력하면 매번 완벽한 갈변을 위한 정밀한 베이킹소다 양을 알려드립니다.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
