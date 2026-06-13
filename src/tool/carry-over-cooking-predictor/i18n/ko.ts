import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = '캐리오버 쿠킹 예측기: 열관성 계산 도구';
const description = '오븐에서 꺼낸 후 로스트의 내부 온도가 몇 도나 더 올라갈지 예측하세요. 완벽한 미디엄 레어를 위한 정확한 인출 온도를 알려드립니다.';

const faq = [
  {
    question: '캐리오버 쿠킹(잔열 조리)이란 무엇이며 왜 발생하나요?',
    answer: '캐리오버 쿠킹(열관성이라고도 함)은 음식을 오븐에서 꺼낸 후에도 내부 온도가 계속 상승하는 현상입니다. 굽는 동안 바깥층에 저장된 열이 중심부로 계속 전도됩니다. 50°C에서 꺼낸 로스트가 레스트 중에 54°C에 도달할 수 있습니다-이것이 레어와 미디엄 레어의 차이입니다.',
  },
  {
    question: '오븐 온도는 캐리오버에 어떤 영향을 미치나요?',
    answer: '높은 오븐 온도(200-250°C)는 표면과 중심부 사이에 더 큰 온도 구배를 만들어 크러스트에 더 많은 잠열을 저장합니다. 이로 인해 캐리오버 효과가 증가합니다. 120°C로 조리한 로스트는 캐리오버가 최소(약 1°C)인 반면, 220°C에서는 레스트 중 5-8°C 상승할 수 있습니다.',
  },
  {
    question: '고기의 형태는 캐리오버 계산에 영향을 미치나요?',
    answer: '네. 형태는 열 침투에 큰 영향을 미칩니다. 통째로 구운 새나 두꺼운 로스트는 표면적 대비 열용량이 크므로 더 많은 열을 유지하고 캐리오버도 더 큽니다. 스테이크 같은 평평한 부위는 표면적 대 부피 비율이 높아 빨리 식으므로 캐리오버가 최소입니다.',
  },
  {
    question: '고기를 꺼낸 후 얼마나 레스트해야 하나요?',
    answer: '레스트 시간은 무게와 형태에 따라 다릅니다. 일반적인 기준은 고기 100g당 약 1분, 최소 10분, 최대 45분입니다. 2kg 로스트는 약 16분의 레스트 시간이 필요합니다. 이 시간 동안 내부 온도가 균일해지고 캐리오버 효과가 완료됩니다.',
  },
];

const howTo = [
  {
    name: '고기 형태 선택',
    text: '가금류는 통째로 구운 새, 안심과 뼈 없는 부위는 원통형 로스트, 스테이크와 필렛은 플랫 컷을 선택하세요.',
  },
  {
    name: '무게 입력',
    text: '고기의 총 무게를 그램 단위로 입력하세요. 형태 유형별로 최소 무게가 적용됩니다.',
  },
  {
    name: '오븐 온도 설정',
    text: '실제 오븐 온도를 입력하세요. 높은 온도일수록 캐리오버 효과가 증가합니다.',
  },
  {
    name: '목표 온도 설정',
    text: '원하는 최종 내부 온도를 입력하세요(예: 소고기 미디엄 레어 54°C, 가금류 74°C).',
  },
  {
    name: '인출 온도 확인',
    text: '계산기가 레스트 후 목표 온도에 도달하기 위한 정확한 인출 시점을 알려줍니다.',
  },
  {
    name: '고기 레스트하기',
    text: '권장 시간 동안 고기를 레스트하세요. 너무 꽉 덮지 마세요. 크러스트가 물러집니다.',
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
  slug: 'carry-over-cooking-predictor',
  title: '캐리오버 쿠킹 예측기',
  description: '오븐에서 꺼낸 후 로스트의 내부 온도가 몇 도나 더 올라갈지 예측하세요. 완벽한 미디엄 레어를 위한 정확한 인출 온도를 알려드립니다.',
  faqTitle: '자주 묻는 질문',
  ui: {
    title: '캐리오버 쿠킹 예측기',
    subtitle: '정밀 로스팅을 위한 열관성 계산 도구',
    geometryLabel: '고기 형태',
    wholeBird: '통째로 구운 새 (가금류)',
    cylindricalRoast: '원통형 로스트 (안심, 뼈없는 부위)',
    flatCut: '플랫 컷 (스테이크, 필렛)',
    weightLabel: '무게',
    ovenTempLabel: '오븐 온도',
    targetTempLabel: '목표 내부 온도',
    pullTemp: '인출 온도',
    carryOver: '캐리오버',
    restTime: '레스트 시간',
    minutes: '분',
    degreesC: '°C',
    degreesF: '°F',
    unitLabel: '단위',
    metricUnit: '미터법',
    imperialUnit: '야드파운드법',
    geometryDescCylindrical: '원통형 로스트 선택됨 - 적당한 열관성과 예측 가능한 캐리오버.',
    weightG: 'g',
    weightOz: 'oz',
    errorTargetExceedsOven: '목표 온도는 오븐 온도를 초과할 수 없습니다.',
    errorOvenTooHot: '오븐 온도가 350°C를 초과합니다. 온도를 낮춰주세요.',
    errorWeightTooLow: '무게가 이 형태의 최소값보다 낮습니다.',
    errorWeightTooHigh: '무게가 이 형태의 최대값을 초과합니다.',
    pullNow: '지금 고기를 꺼내세요',
    pullAt: '인출 온도',
    toReach: '목표',
    afterRest: '레스트 후',
    carryOverWillAdd: '캐리오버 약',
    footerTemplate: '{carry} 캐리오버 · {rest} 레스트 · {weight}{wunit}, {oven} 오븐 → {target} 목표',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '캐리오버 쿠킹 예측기: 매번 완벽한 인출 온도 찾기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '캐리오버 쿠킹은 음식이 오븐을 나간 후에도 내부 온도가 계속 상승하는 현상입니다. 로스팅 중 바깥층이 열을 저장하고, 이 에너지가 레스트 중 더 차가운 중심부로 계속 전도됩니다. 50°C에서 꺼낸 두꺼운 로스트는 레스트 후 54°C에 도달할 수 있습니다-이것이 레어와 미디엄 레어의 차이입니다. 이 계산기는 로스트의 온도가 정확히 몇 도나 오를지 예측하여 정확한 순간에 꺼낼 수 있도록 도와줍니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5-8°C', label: '일반적인 캐리오버 (고온 오븐)', icon: 'mdi:thermometer' },
        { value: '1-3°C', label: '최소 캐리오버 (저온 오븐)', icon: 'mdi:thermometer-low' },
        { value: '16분', label: '2kg 로스트 레스트 시간', icon: 'mdi:clock-outline' },
        { value: '45분', label: '권장 최대 레스트 시간', icon: 'mdi:clock-alert' },
      ],
    },
    {
      type: 'title',
      text: '익힘 정도별 인출 온도 차트',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이 차트로 목표 내부 온도를 확인한 후 계산기로 정확한 인출 온도를 알아보세요. 인출 온도는 항상 목표 온도<strong>보다 낮습니다</strong>. 레스트 중에도 캐리오버 효과가 계속 조리되기 때문입니다.',
    },
    {
      type: 'table',
      headers: ['익힘 정도', '목표 온도', '인출 온도 (200°C 오븐)', '레스트 시간'],
      rows: [
        ['소고기 레어', '52°C / 126°F', '46-48°C / 115-118°F', '10-15분'],
        ['소고기 미디엄 레어', '54°C / 129°F', '48-50°C / 118-122°F', '10-15분'],
        ['소고기 미디엄', '60°C / 140°F', '54-56°C / 129-133°F', '10-15분'],
        ['소고기 웰던', '71°C / 160°F', '65-67°C / 149-153°F', '10-15분'],
        ['돼지고기 미디엄', '63°C / 145°F', '57-59°C / 135-138°F', '10-15분'],
        ['돼지고기 웰던', '71°C / 160°F', '65-67°C / 149-153°F', '10-15분'],
        ['닭고기/칠면조 가슴살', '74°C / 165°F', '68-70°C / 154-158°F', '15-20분'],
        ['닭고기/칠면조 넓적다리', '82°C / 180°F', '76-78°C / 169-172°F', '15-20분'],
        ['양고기 미디엄 레어', '54°C / 129°F', '48-50°C / 118-122°F', '10-15분'],
        ['양고기 미디엄', '60°C / 140°F', '54-56°C / 129-133°F', '10-15분'],
      ],
    },
    {
      type: 'title',
      text: '형태가 열 계산을 어떻게 바꾸는가',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '통째로 구운 새',
          icon: 'mdi:food-drumstick',
          description: '표면적 대비 최대 열용량. 두꺼운 가슴살과 넓적다리 중심부에 막대한 잠열이 저장됩니다.',
          highlight: false,
          points: ['캐리오버: 200°C 오븐에서 5-10°C', '레스트: 20-45분', '최적의 재료: 칠면조, 통닭, 오리', '목표보다 8-10°C 낮은 온도에서 인출'],
        },
        {
          title: '원통형 로스트',
          icon: 'mdi:food-steak',
          description: '가장 흔한 로스트 형태. 적당한 보온성과 예측 가능한 캐리오버 값.',
          highlight: true,
          points: ['캐리오버: 200°C 오븐에서 3-7°C', '레스트: 15-30분', '최적의 재료: 안심, 돼지 등심, 양갈비', '목표보다 5-7°C 낮은 온도에서 인출'],
        },
        {
          title: '플랫 컷',
          icon: 'mdi:food',
          description: '표면적 대 부피 비율이 높아 열이 빨리 빠져나갑니다. 캐리오버는 최소지만 여전히 중요합니다.',
          highlight: false,
          points: ['캐리오버: 200°C 오븐에서 1-3°C', '레스트: 5-15분', '최적의 재료: 스테이크, 닭가슴살, 생선 필렛', '목표보다 1-3°C 낮은 온도에서 인출'],
        },
      ],
    },
    {
      type: 'title',
      text: '흔한 캐리오버 실수와 해결 방법',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '너무 늦게 인출하기',
      html: '온도계가 목표 온도를 가리킬 때까지 기다렸다 꺼내면 캐리오버가 3-8°C 오버슛합니다. 미디엄 레어 로스트가 미디엄이나 미디엄 웰이 됩니다.<strong>반드시 목표보다 5-8°C 낮은 온도에서 꺼내세요.</strong> 이 계산기로 정확한 온도를 알아보세요.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: '너무 일찍 자르기',
      html: '꺼낸 직후 로스트를 자르면 육즙의 최대 30%가 흘러나옵니다. 온도 구배가 균일해질 시간이 없어 중심부는 설익고 바깥층은 익습니다.<strong>권장 시간만큼 충분히 레스트하세요.</strong> 호일로 느슨하게 덮으세요-꽉 싸면 김이 올라 크러스트가 물러집니다.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '오븐 온도가 너무 낮음',
      html: '낮은 오븐(150°C / 300°F 미만)은 표면과 중심부 사이의 온도 구배가 최소입니다. 즉 캐리오버 효과가 거의 없습니다. 저온 조리 시 목표 온도에 정확히 맞춰 꺼내도 오버슛 위험이 최소입니다. 그러나 크러스트 형성이 크게 줄어듭니다.',
    },
    {
      type: 'title',
      text: '완벽한 로스팅을 위한 프로 팁',
      level: 3,
    },
    {
      type: 'tip',
      title: '10도 규칙',
      html: '고온 오븐(220°C / 425°F)은 통째로 구운 새의 경우 고기 100g당 약 1°C, 원통형 로스트의 경우 100g당 약 0.7°C의 캐리오버를 추가합니다. 계산기 결과를 확인하는 기준으로 활용하세요: 220°C에서 조리한 2kg 닭고기는 약 7-9°C의 캐리오버가 예상됩니다.',
    },
    {
      type: 'tip',
      title: '레스트 위치도 중요합니다',
      html: '항상 따뜻한 접시나 도마 위에서 고기를 레스트하세요. 차가운 표면은 로스트 바닥에서 열을 빼앗아 최종 온도가 불균일해집니다. 통째로 구운 새는 가슴살이 위로 오게 놓아 육즙이 흰 살코기에 고르게 퍼지도록 하세요.',
    },
    {
      type: 'tip',
      title: '덮되, 싸지 마세요',
      html: '레스트 중에는 알루미늄 호일로 느슨하게 덮으세요. 꽉 싸면 김이 갇혀 크러스트가 눅눅해집니다. 느슨하게 덮으면 김이 빠져나가면서 열 손실을 약 30% 줄여 캐리오버 효과와 바삭한 겉면을 모두 유지합니다.',
    },
    {
      type: 'title',
      text: '주요 로스팅 용어 사전',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: '캐리오버 쿠킹 (잔열 조리)', definition: '음식을 열원에서 제거한 후에도 내부 온도가 계속 상승하는 현상. 바깥층에서 중심부로 열이 전도되어 발생한다.' },
        { term: '인출 온도', definition: '고기를 오븐에서 꺼내야 하는 내부 온도. 캐리오버를 고려하여 항상 목표 온도보다 낮게 설정한다.' },
        { term: '목표 온도', definition: '레스트 후 고기가 도달해야 할 최종 내부 온도. 서빙 온도라고도 한다.' },
        { term: '열관성', definition: '물질이 온도 변화에 저항하는 성질. 무겁고 밀도가 높은 고기일수록 열관성이 높고 캐리오버도 크다.' },
        { term: '레스트 (휴지)', definition: '조리 후 고기를 그대로 두는 시간. 열이 균일해지고 육즙이 섬유 전체에 재분배된다.' },
        { term: '온도 구배', definition: '고기 표면과 중심부 사이의 온도 차이. 구배가 클수록 캐리오버를 위한 잠열이 더 많이 저장된다.' },
        { term: '잠열', definition: '조리 중 고기 바깥층에 저장된 열에너지. 레스트 중 온도가 균일해지는 과정에서 방출된다.' },
      ],
    },
    {
      type: 'title',
      text: '빠른 참조: 권장 인출 온도',
      level: 3,
    },
    {
      type: 'summary',
      title: '완벽한 결과를 위한 인출 온도 (200°C / 400°F 오븐)',
      items: [
        '소고기 미디엄 레어: 48-50°C / 118-122°F에서 인출, 목표 54°C / 129°F',
        '소고기 미디엄: 54-56°C / 129-133°F에서 인출, 목표 60°C / 140°F',
        '돼지 등심: 57-59°C / 135-138°F에서 인출, 목표 63°C / 145°F',
        '닭가슴살: 68-70°C / 154-158°F에서 인출, 목표 74°C / 165°F',
        '통칠면조: 68-70°C / 154-158°F에서 인출, 목표 74°C / 165°F (가슴살)',
        '양갈비: 48-50°C / 118-122°F에서 인출, 목표 54°C / 129°F',
      ],
    },
    {
      type: 'paragraph',
      html: '로스트는 각각 다릅니다. 무게, 정확한 오븐 온도, 부위의 형태에 따라 수치가 달라집니다. 바로 이것이 이 계산기의 역할입니다-사용자의 특정 조건을 바탕으로 정확한 인출 온도를 계산해줍니다. 추측도, 망친 로스트도 없습니다.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
