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
      text: '식품 건조기에서 음식 무게가 얼마나 줄어들까요? 건조 시간과 수분량 계산',
      level: 2
    },
    {
      type: 'paragraph',
      html: '<strong>육포(beef jerky)</strong>, <strong>과일 가죽(fruit leather)</strong>, <strong>말린 사과 링</strong>, <strong>말린 수박</strong> 중 무엇을 만들든 일관된 결과를 얻는 열쇠는 수분 함량을 이해하는 것입니다. 식품 안전과 장기 보존은 올바른 목표 수분 함량에 도달하는지 여부에 달려 있습니다. 저희 <strong>식품 건조기 수분 계산기</strong>는 특정 재료와 설정에 따라 최종 무게, 증발 수분량, 예상 건조 시간을 예측합니다.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '70%', label: '육류 수분 함량', icon: 'mdi:food' },
        { value: '92%', label: '수박 수분 함량', icon: 'mdi:water' },
        { value: '10%', label: '육포 목표 수분', icon: 'mdi:shield' },
        { value: '55°C', label: '평균 건조 온도', icon: 'mdi:thermometer' }
      ]
    },
    {
      type: 'title',
      text: '건조 식품의 적절한 수분 함량은 얼마인가요?',
      level: 2
    },
    {
      type: 'table',
      headers: ['재료', '초기 수분', '목표 수분', '일반적인 시간', '건조 완료 징후'],
      rows: [
        ['육포', '70%', '10-15%', '4-8 시간', '단단하고 부러지지 않게 구부러짐'],
        ['사과 링', '86%', '15-20%', '6-10 시간', '유연하고 가죽 같은 질감, 끈적이는 부분 없음'],
        ['망고 슬라이스', '84%', '15-18%', '6-10 시간', '눈에 보이는 수분 없이 쫄깃함'],
        ['버섯', '92%', '5-8%', '4-8 시간', '쉽게 부서지고 바삭함'],
        ['말린 수박', '92%', '10-12%', '10-16 시간', '구부렸을 때 딱 소리가 나며 부러짐']
      ]
    },
    {
      type: 'title',
      text: '흔히 발생하는 건조 문제와 해결 방법',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>표면 경화(Case hardening):</strong> 겉면이 너무 빨리 건조되어 내부 수분이 갇히는 현상입니다. 온도를 5-10 °C 낮추고 공기 순환을 높이십시오.',
        '<strong>보관 중 곰팡이 발생:</strong> 음식을 충분히 건조하지 않았습니다. 계산기를 사용하여 목표 무게를 파악하고 수분 테스트로 확인하십시오.',
        '<strong>불균일한 건조:</strong> 조각의 두께가 다르거나 건조기가 과부하 상태입니다. 균일한 두께로 자르고 공간을 띄워 두십시오.',
        '<strong>식품이 너무 건조하고 바스러짐:</strong> 과도한 건조는 풍미와 질감을 해칩니다. 특정 재료에 맞는 목표 수분 함량을 확인하십시오.'
      ]
    },
    {
      type: 'title',
      text: '식품 종류별 건조 온도 가이드',
      level: 3
    },
    {
      type: 'paragraph',
      html: '온도는 건조 속도와 식품의 품질 모두에 영향을 미칩니다. 온도가 높을수록 물이 더 빨리 증발하지만 표면 경화, 영양소 손실, 불균일한 결과를 초래할 수 있습니다. 건조기 설정 시 다음 일반 지침을 참조하십시오:'
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '저온 40~50 °C',
          icon: 'mdi:thermometer',
          description: '효소, 영양소 및 섬세한 풍미를 보존하는 데 가장 적합합니다.',
          points: ['허브 및 잎채소', '버섯', '생식 식품 보존', '더 긴 건조 시간 필요']
        },
        {
          title: '중온 50~60 °C',
          icon: 'mdi:thermometer',
          description: '대부분의 과일과 채소에 적용되는 표준 범위입니다.',
          highlight: true,
          points: ['사과 링 및 망고 슬라이스', '대부분의 채소', '과일 가죽', '속도와 품질의 균형']
        },
        {
          title: '고온 60~70 °C',
          icon: 'mdi:thermometer',
          description: '육포 및 식품 안전이 강조되는 밀도 높은 식품에 사용됩니다.',
          points: ['소고기 및 칠면조 육포', '밀도 높은 뿌리채소', '식품 안전 최우선', '짧은 건조 시간']
        }
      ]
    },
    {
      type: 'tip',
      title: '과일은 항상 전처리하십시오',
      html: '갈변을 방지하고 색상을 보존하려면 건조하기 전에 사과, 바나나, 배를 레몬즙이나 아스코르브산 용액에 담그십시오.'
    },
    {
      type: 'tip',
      title: '건조 중 트레이 회전',
      html: '건조기에는 흔히 열이 집중되는 위치가 있습니다. 균일한 건조를 위해 2-3시간마다 트레이를 위아래, 앞뒤로 바꾸어 주십시오.'
    },
    {
      type: 'tip',
      title: '보관 전 컨디셔닝',
      html: '건조 후 음식을 식히고 밀폐 용기에서 1주일 동안 컨디셔닝(수분 균일화)합니다. 매일 흔들어 주십시오. 결로가 발생하면 더 건조해야 합니다.'
    },
    {
      type: 'title',
      text: '식품 건조 수분 용어 사전',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: '표면 경화', definition: '식품 표면이 너무 빨리 건조되어 딱딱한 껍질을 형성하고, 이로 인해 내부 수분이 갇혀 올바른 건조를 방해하는 상태.' },
        { term: '수분 활성도(aw)', definition: '미생물 성장에 이용 가능한 자유수의 척도. 장기 보존이 가능한 건조 식품은 일반적으로 aw가 0.60 미만입니다.' },
        { term: '수분 함량', definition: '식품 총 무게에 대한 수분 무게의 백분율. 건조 진행 상황과 식품 안전 목표 수준을 판별하는 데 사용됩니다.' },
        { term: '수축 비율', definition: '건조 후 남아 있는 원래 무게의 비율. 배치 크기 및 보관 계획을 세우는 핵심 지표.' }
      ]
    },
    {
      type: 'summary',
      title: '완벽한 건조를 위한 요약',
      items: [
        '재료마다 초기 수분 함량이 크게 다릅니다(70-92%). 정확한 추정을 위해 프리셋을 사용하십시오.',
        '목표 수분은 식품에 따라 다릅니다: 육포는 10%, 과일은 15-20%, 채소와 버섯은 5-8%.',
        '건조 온도는 속도와 품질에 영향을 미칩니다. 대부분의 식품은 50-60 °C 범위를 유지하십시오.',
        '표면 경화는 질감을 망칩니다. 70 °C를 초과하는 온도를 피하고 통풍이 잘 되도록 하십시오.',
        '장기 보관 전에 항상 1주일간 컨디셔션을 거쳐 수분이 골고루 분산되도록 하십시오.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
