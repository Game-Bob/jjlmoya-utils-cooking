import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = '식품 건조기 수분 추정 도구';
const description = '식품 건조 시 예상 무게 감소, 수분 증발량 및 건조 시간을 계산합니다.';

const faq = [
  {
    question: '식품 건조 시 무게 감소는 어떻게 계산되나요?',
    answer: '무게 감소는 고형분과 수분 함량을 분리하여 계산합니다. 고형분 질량은 변하지 않으므로, 목표 수분 함량을 기반으로 최종 무게를 결정합니다.'
  }
];

const howTo = [
  {
    name: '식재료 프리셋 또는 수동 수분 설정 선택',
    text: '프리셋을 선택하거나 초기 수분 함량을 직접 슬라이더로 조절해 설정합니다.'
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
  slug: 'dehydrator-moisture-estimator',
  title,
  description,
  faqTitle: '자주 묻는 질문',
  ui: {
    title: '수분 추정 도구',
    subtitle: '무게 수축 및 예상 건조 시간을 계산합니다',
    unitSystemLabel: '단위계',
    metricOption: '미터법 (g, °C)',
    imperialOption: '야드파운드법 (oz, °F)',
    ingredientLabel: '재료 프리셋',
    initialMoistureLabel: '초기 수분량 (%)',
    targetMoistureLabel: '목표 수분량 (%)',
    weightLabel: '초기 무게',
    tempLabel: '건조 온도',
    customOption: '직접 입력 / 수동',
    beefOption: '소고기 육포',
    watermelonOption: '건조 수박',
    appleOption: '건조 사과 링',
    mangoOption: '망고 슬라이스',
    mushroomOption: '버섯',
    targetWeightLabel: '목표 무게',
    waterEvaporatedLabel: '증발 수분량',
    estimatedHoursLabel: '예상 건조 시간',
    shrinkageLabel: '무게 수축'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '식품 건조 무게 수축 및 건조 시간 정밀 계산',
      level: 2
    },
    {
      type: 'paragraph',
      html: '식품 위생과 보존을 보장하기 위한 정확한 목표 수분량 도달 시점을 예측합니다.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
