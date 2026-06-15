import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "드라이 에이징 숙성육 수율 및 비용 계산기";
const description = "가정이나 숙성고에서 소고기 또는 기타 육류를 드라이 에이징할 때 수분 증발로 인한 무게 감소, 트리밍 손실, 실질적인 킬로그램당 비용을 계산합니다.";
const faq = [
  {
    question: "드라이 에이징 도중 고기의 무게는 얼마나 감소합니까?",
    answer: "표준적인 30~45일의 드라이 에이징 과정 동안, 고기는 수분 증발로 인해 약 15%~25%의 무게를 잃습니다. 또한, 조리 전 건조한 겉껍질(펠리클)을 다듬을 때 초기 무게의 약 15%가 추가로 손실됩니다."
  },
  {
    question: "드라이 에이징을 위한 최적의 습도는 얼마입니까?",
    answer: "육류의 드라이 에이징을 위한 이상적인 상대 습도는 75%에서 85% 사이입니다. 습도가 지나치게 낮으면 표면이 너무 빠르게 말라 굳어지며, 너무 높으면 곰팡이와 부패의 위험이 커집니다."
  },
  {
    question: "킬로그램당 가격이 왜 이렇게 많이 올라가나요?",
    answer: "수분 증발과 트리밍으로 무게가 줄어들기 때문에 최종 가식 무게는 처음 시작할 때보다 낮아집니다. 전체 구매 비용은 동일하므로 가식 부위의 킬로그램당 가격은 무게 손실에 비례하여 증가합니다."
  }
];

const howTo = [
  {
    name: "시작 무게 입력",
    text: "드라이 에이징을 시작하기 전 육류의 초기 무게를 입력합니다."
  },
  {
    name: "숙성 일수 설정",
    text: "드라이 에이징을 진행할 총 일수(보통 1일에서 60일 사이)를 선택합니다."
  },
  {
    name: "상대 습도 조정",
    text: "수분 증발 속도를 결정하기 위해 에이징 챔버의 습도(75%~85% 권장)를 설정합니다."
  },
  {
    name: "원래 가격 입력",
    text: "최종 생산 수율의 비용과 비교하기 위해 생고기의 킬로그램당 단가를 입력합니다."
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
  slug: 'dry-aging-meat-estimator',
  title,
  description,
  faqTitle: '자주 묻는 질문',
  ui: {
    title: '드라이 에이징 수율 계산기',
    subtitle: '무게 손실을 시뮬레이션하고 최종 수율 비용을 계산',
    startWeightLabel: '시작 무게',
    daysLabel: '숙성 기간',
    pricePerKgLabel: '원래 가격',
    humidityLabel: '상대 습도',
    finalWeightLabel: '최종 가식 무게',
    yieldLabel: '총 수율',
    originalCostLabel: '초기 총비용',
    finalCostPerKgLabel: '최종 가식 가격',
    moistureLossLabel: '수분 증발 손실',
    trimmingLossLabel: '외피 트리밍 폐기량',
    warningLowHumidity: '경고: 습도가 75% 미만입니다. 표면이 너무 빠르게 건조되어 케이스 하드닝(표면 경화)이 발생할 수 있습니다.',
    warningHighHumidity: '경고: 습도가 85% 초과입니다. 박테리아 부패 또는 원치 않는 곰팡이 성장 위험이 높습니다.',
    timelineTitle: '드라이 에이징 진행 타임라인',
    timelineInfoText: '타임라인을 클릭하여 육류의 물리적 변화 상태를 미리 확인해 보세요'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '드라이 에이징 숙성육의 과학과 경제성',
      level: 2
    },
    {
      type: 'paragraph',
      html: '드라이 에이징은 미생물학, 생화학, 물리학을 결합하여 표준 육류를 연하고 풍미가 농축된 진미로 바꾸는 미식 예술입니다.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '75-85%',
          label: '이상적 습도',
          icon: 'mdi:water-percent'
        },
        {
          value: '1-3°C',
          label: '최적 온도',
          icon: 'mdi:thermometer'
        },
        {
          value: '15%',
          label: '트리밍 손실',
          icon: 'mdi:knife'
        },
        {
          value: '30-45 일',
          label: '표준 숙성',
          icon: 'mdi:clock-outline'
        }
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
