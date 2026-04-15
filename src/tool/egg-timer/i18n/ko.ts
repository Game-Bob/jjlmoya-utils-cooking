import type { ToolLocaleContent } from "../../../types";

const title = "과학적인 계란 타이머";
const description = "고도, 온도, 크기에 따른 완벽한 계란 삶기를 위한 열력학 계산기입니다.";
const faq = [
  {
    question: "계란을 삶을 때 고도가 왜 중요한가요?",
    answer: "물은 항상 100°C에서 끓지 않습니다. 고도가 높을수록 기압이 낮아져 물이 낮은 온도에서 끓게 됩니다. 예를 들어 해발 2000m에서는 물이 약 93°C에서 끓기 때문에 해수면 지역보다 더 오래 삶아야 합니다. 에베레스트 정상(끓는점 약 70°C)에서는 완숙 계란을 만드는 것이 불가능합니다.",
  },
  {
    question: "냉장고 계란인가요, 상온 계란인가요?",
    answer: "냉장고에서 갓 꺼낸 계란(4°C)은 상온의 계란(20°C)보다 더 많은 조리 시간이 필요합니다. 그 차이는 2~3분에 달할 수 있습니다. 이 계산기는 초기 온도에 맞춰 시간을 자동으로 조절합니다.",
  },
  {
    question: "노른자 주변에 왜 녹색 테두리가 생기나요?",
    answer: "이것은 황화철 현상으로, 너무 오래 삶았을 때 나타납니다. 내부 온도가 80°C를 넘어서 너무 오래 지속되면 흰자의 황 성분이 노른자의 철 성분과 반응합니다. 독성은 없으나 조리 시간이 초과되었음을 의미합니다. 삶은 직후 얼음물에 담가 이를 방지하세요.",
  },
  {
    question: "계란 껍질을 쉽게 까는 방법은?",
    answer: "갓 낳은 신선한 계란보다는 1~2주 정도 지난 계란을 사용하고, 찬물부터 시작하지 말고 끓는 물에 넣어 삶으세요. 완료 즉시 얼음물에 담가 히트 쇼크(열 충격)를 주면 내용물이 수축되어 껍질이 잘 벗겨집니다.",
  },
];
const howTo = [
  {
    name: "초기 온도 선택",
    text: "계란이 냉장 상태(4°C)인지 상온 상태(20°C)인지 선택하세요. 이는 계란의 내부 온도를 의미합니다.",
  },
  {
    name: "계란 크기 선택",
    text: "S(소), M(중), L(대), XL(특대) 중 선택하세요. 크기에 따라 열이 중심부까지 전달되는 시간이 달라집니다.",
  },
  {
    name: "고도 지정",
    text: "현재 위치의 고도를 직접 입력하거나 위치 정보를 활용하세요. 고도가 300m 높아질 때마다 물의 끓는점은 약 1°C씩 낮아집니다.",
  },
  {
    name: "열 충격(히트 쇼크) 적용",
    text: "타이머가 종료되면 즉시 얼음물에 계란을 담그세요. 이는 잔열 조리를 멈추게 하고 껍질을 쉽게 깔 수 있게 합니다. 정확도를 위해 필수적인 과정입니다.",
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
  slug: 'perfect-boiled-egg-timer-altitude-calculator',
  title: "과학적인 계란 타이머",
  description: "고도, 온도, 크기에 따른 완벽한 계란 삶기를 위한 열력학 계산기입니다.",
  faqTitle: "자주 묻는 질문",
  bibliographyTitle: "과학적 참고 문헌",
  ui: {
    parameters: "조리 파라미터",
    initial_temperature: "초기 온도",
    fridge: "냉장",
    ambient: "상온",
    egg_size: "계란 크기",
    altitude: "현재 고도",
    use_location: "내 위치 사용",
    altitude_help: "높은 고도에서는 물의 끓는점이 낮아져 조리 시간에 영향을 줍니다.",
    sea_level: "해수면",
    soft_cooked: "반숙 (주르륵)",
    soft_description: "노른자는 액체 상태, 흰자는 부드럽고 하얗게 익음.",
    mollet: "반숙 (쫀쫀함)",
    mollet_description: "노른자는 크림 상태, 흰자는 단단함.",
    hard_cooked: "완숙",
    hard_description: "완전히 익음, 노른자가 단단함.",
  },
  faq,
  bibliography: [
    {
      name: "The Science of Boiling an Egg - Charles D. H. Williams",
      url: "https://newton.ex.ac.uk/teaching/CDHW/Egg/",
    },
    {
      name: "The Food Lab: The Science of the Best Hard Boiled Eggs - J. Kenji López-Alt",
      url: "https://www.seriouseats.com/the-food-lab-hard-boiled-eggs-recipe",
    },
    {
      name: "The Food Lab: Perfect Soft Boiled Eggs",
      url: "https://www.seriouseats.com/soft-boiled-eggs-recipe",
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: '완벽한 계란 삶기를 위한 마스터 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '계란을 삶는 것은 <strong>응용 열역학</strong>의 한 과정입니다. 초기 온도, 크기, 지형적 고도의 정밀함이 실크 같은 반숙 노른자를 만들지, 아니면 녹색 테두리가 생겨버린 퍽퍽한 완숙 노른자를 만들지 결정합니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '62°C',
          label: '흰자 응고 온도',
          icon: 'mdi:egg-outline',
        },
        {
          value: '68°C',
          label: '노른자 응고 온도',
          icon: 'mdi:egg-fried',
        },
        {
          value: '-1°C',
          label: '끓는점 / 300m',
          icon: 'mdi:mountain',
        },
        {
          value: '0초',
          label: '허용 오차',
          icon: 'mdi:timer-check-outline',
        },
      ],
    },
    {
      type: 'title',
      text: '조리 상태 비교',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '반숙 (Soft / 런니)',
          icon: 'mdi:coffee-outline',
          description: '흰자는 부분적으로 익고 노른자는 완전히 액체인 상태.',
          points: [
            '매우 섬세한 질감',
            '빵을 찍어 먹기에 이상적',
            '짧은 조리 시간 (3-4분)',
            '껍질을 까기가 매우 어려움',
          ],
        },
        {
          title: '반숙 (Mollet / 커스터드)',
          icon: 'mdi:water-percent',
          description: '흰자는 단단하고 노른자는 크림처럼 농도가 짙은 상태.',
          highlight: true,
          points: [
            '미식가의 표준',
            '꿀 같은 질감의 노른자',
            '탄력 있고 매끄러운 흰자',
            '샐러드 토핑으로 완벽함',
          ],
        },
        {
          title: '완숙 (Hard)',
          icon: 'mdi:circle-slice-8',
          description: '완전히 익었지만 퍽퍽하지 않고 녹색 테두리가 없는 상태.',
          points: [
            '노른자가 불투명하고 단단함',
            '운반 및 껍질 제거가 용이함',
            '도시락이나 속 재료로 적합',
            '빠른 얼음물 냉각 필수',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '고도별 물의 끓는점 변화',
      level: 3,
    },
    {
      type: 'table',
      headers: ['도시 / 고도', '해발 높이(m)', '끓는점 (°C)', '추가 시간'],
      rows: [
        ['해수면 레벨 (인천)', '0m', '100°C', '0초'],
        ['평창', '700m', '97.6°C', '+28초'],
        ['멕시코 시티', '2240m', '92.6°C', '+75초'],
        ['라파스 (볼리비아)', '3640m', '88.1°C', '+140초'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '녹색 테두리가 생기거나 잘 안 벗겨지나요?',
      html: '녹색 테두리는 과조리로 인한 <strong>황화철</strong> 반응입니다. 만약 껍질이 잘 안 벗겨진다면 계란이 너무 신선하기 때문입니다. 낮은 pH 농도가 흰자를 막에 밀착시킵니다. 1주일 정도 지난 계란을 사용하고 얼음물 샤워를 꼭 하세요.',
    },
    {
      type: 'title',
      text: '계란 과학 용어 사전',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: '오보트랜스페린',
          definition: '흰자 단백질 중 가장 먼저 응고(62°C)되어 구조를 형성하는 성분.',
        },
        {
          term: '오브알부민',
          definition: '완전한 고체화를 위해 더 높은 열(80°C)이 필요한 주요 단백질.',
        },
        {
          term: '기압',
          definition: '지형에 따라 물이 끓는 온도를 결정하는 지배적인 요인.',
        },
        {
          term: '열 충격 (Heat Shock)',
          definition: '잔열 조리를 즉각 멈추기 위해 얼음물에 담그는 행위.',
        },
      ],
    },
    {
      type: 'tip',
      title: '식초의 마법',
      html: '물에 식초 한 스푼을 넣으세요. 껍질에 금이 가더라도 산성 성분이 흘러나오는 흰자를 빨리 굳게 하여 틈새를 메워줍니다.',
    },
    {
      type: 'paragraph',
      html: '우리의 타이머는 찰스 윌리엄스 방정식을 사용하여 위치와 냉장고 상태에 맞춰 1초 단위까지 정밀하게 조정합니다.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
