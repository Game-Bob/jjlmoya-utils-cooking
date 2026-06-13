import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = '셔   Brix 계산기: 완벽한 스쿱질감을 위한 설탕 과일 비율 및 빙점 제어';
const description = '매번 스쿱 가능한 셔� - 을 위한 정확한 설탕, 과일 퓌레, 물의 균형을 맞추세요. Brix, PAC 빙점 강하를 계산하고 정밀한 측정으로 얼음 결정이나 묽은 식감 문제를 해결하세요.';

const faq = [
  {
    question: 'Brix란 무� - �이며 셔� - � - �서 왜 중요한가요?',
    answer: 'Brix(°Bx)는 액체 용액� - � 용해된 고형분(주로 당류)의 비율을 측정합니다. 셔� - � - �서는 25%� - �서 30% 사이(이상적으로는 28%)의 Brix 수준이 적절한 식감을 위해 필수적입니다. 25% 미만이면 얼음 결정 형성을 방해할 충분한 설탕이 � - �어 셔� - 이 딱딱하게 얼어붙습니다. 30%를 초과하면 빙점이 너무 낮아져 일반 냉동고� - �서 완전히 굳지 않고 묽은 상태로 남습니다.',
  },
  {
    question: '셔� -  레시피� - � 적합한 설탕 양을 어떻게 계산하나요?',
    answer: '먼저 과일 퓌레의 무게를 재고 굴절계로 천� - � Brix를 측정하세요(또는 프리셋 값을 선택). 이를 원하는 배치 크기 및 목표 Brix(기본값 28%)와 함께 계산기� - � 입력합니다. 계산기는 전체 혼합물이 최적의 25-30% Brix 범위� - � 도달하기 위해 필요한 자당과 물의 양을 결정합니다. 또한 빙점 강하(PAC)를 고려하므로 셔� - 이 너무 단단할 경우 포도당으로 대체할 수 있습니다.',
  },
  {
    question: '집� - �서 만든 셔� - 이 항상 너무 딱딱하거나 얼음 결정이 생기는 이유는 무� - �인가요?',
    answer: '얼음 결정이 생기고 딱딱한 셔� - 은 거의 항상 총 당도가 너무 낮다는 의미입니다(25% Brix 미만). 과일 속 수분이 부분적으로 액체 상태를 유지하지 못하고 큰 얼음 결정으로 얼어붙기 때문입니다. 해결법: 자당을 추가하� - � Brix를 높이거나, 일부 자당을 포도당으로 대체하세요. 포도당은 빙점 강하력이 거의 두 배(PAC 190 vs 100)이며 단맛은 30% 덜하기 때문� - � 셔� - 이 과하게 달아지지 않으면서 빙점을 낮출 수 있습니다.',
  },
  {
    question: '셔� - � - �서 자당과 포도당 사용의 차이점은 무� - �인가요?',
    answer: '자당(설탕)은 PAC 100, POD 100의 표준 감미료입니다. 포도당(글루코스 파우더)은 PAC 190으로 빙점 강하력이 거의 두 배이지만 단맛은 70%(POD 70)� - � 불과합니다. 즉, 포도당은 그램당 훨씬 효과적으로 셔� - 을 부드럽게 하면서 과도한 단맛을 더하지 않습니다. 과일이 이미 천� - �적으로 달콤할 때(예: 망고, 바나나) 단맛을 추가하지 않고 빙점 강하력이 더 필요할 때 포도당을 사용하세요.',
  },
  {
    question: '과일의 천� - � 당도가 계산� - � 어떤 영향을 미치나요?',
    answer: '과일마다 천� - � 당도가 크게 다릅니다: 레몬과 라임은 약 2% Brix, 딸기는 약 8%, 망고와 포도는 14-18%, 바나나는 최대 22%입니다. 계산기는 과일의 천� - � Brix를 반영하� - � 총 당도를 과도하게 초과하거나 부족하게 맞추는 일이 � - �도록 합니다. 이것이 굴절계로 실제 과일을 측정하는 것이 권장되는 이유입니다  -  계절적 변화로 Brix가 3-4포인트 변동될 수 있습니다.',
  },
];

const howTo = [
  {
    name: '과일 퓌레 무게 측정',
    text: '과일 퓌레 또는 주스의 정확한 무게를 그램 단위로 측정하세요.',
  },
  {
    name: '과일 Brix 측정 또는 추정',
    text: '굴절계를 사용하  � 과일의 정확한 Brix를 확인하거나, 데이터베이스  �서 일반적인 값을 선택하세요(예: 망고: 14%, 딸기: 8%).',
  },
  {
    name: '계산기� - � 중량 입력',
    text: '과일 중량, 과일 Brix, 목표 Brix 수준(기본값 28%)을 입력하세요.',
  },
  {
    name: '권장 시럽 추가량 확인',
    text: '계산기가 즉시 28% Brix 목표 달성  � 필요한 설탕과 물의 양을 표시합니다.',
  },
  {
    name: '필요시 당류 종류 조정',
    text: '혼합물의 빙점 강하가 충분하지 않다면 자당 대신 포도당을 도입하세요.',
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
  slug: 'brix-sorbet-density-calculator',
  title: 'Brix 셔   밀도 계산기',
  description: '매번 스쿱 가능한 셔� - 을 위한 정확한 설탕, 과일 퓌레, 물의 균형을 맞추세요. 정밀한 Brix 및 PAC 계산으로 얼음 결정이나 묽은 식감을 해결하세요.',
  faqTitle: '자주 묻는 질문',
  ui: {
    fruitWeightLabel: '과일 퓌레 중량',
    fruitBrixLabel: '과일 Brix',
    sugarWeightLabel: '자당(설탕) 중량',
    dextroseWeightLabel: '포도당 중량',
    waterWeightLabel: '추가 물 중량',
    targetBrixLabel: '목표 Brix',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    brixUnit: '% Bx',
    totalBrixLabel: '전체 혼합물 Brix',
    totalWeightLabel: '전체 배치 중량',
    totalPACLabel: '빙점 강하 (PAC)',
    statusLabel: '셔� -  식감 프로필',
    statusSoft: '너무 부드러움 / 묽음',
    statusOptimal: '최적 스쿱질감',
    statusHard: '너무 딱딱함 / 얼음 결정',
    recommendedTitle: '시럽 권장량 (과일 50%)',
    recommendedSugarLabel: '필요 자당',
    recommendedWaterLabel: '필요 물',
    fruitPresetLabel: '과일 프리셋',
    presetCustom: '사용자 지정 과일',
    presetLemon: '레몬 / 라임 (2% Bx)',
    presetStrawberry: '딸기 / 라즈베리 (8% Bx)',
    presetOrange: '오렌지 / 복숭아 (10% Bx)',
    presetMango: '망고 / 포도 / 체리 (14% Bx)',
    presetBanana: '바나나 (21% Bx)',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '셔   균형의 과학: Brix, PAC, 그리고 고형분',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '프로페셔널한 셔� -  제조는 식품 과학의 실천입니다. 유지방과 단백질로 구조와 부드러움을 만드는 아이스크림과 달리, 셔� - 은 전적으로 용해된 당류와 안정제� - � 의존합니다. 이 용해된 당류의 농도는 Brix 도수(°Bx)로 측정됩니다. 완벽한 셔� -  혼합물은 25%� - �서 30% Brix의 당도를 필요로 합니다. 당도가 너무 낮으면 물이 크고 바늘 같은 얼음 결정으로 얼어 거칠고 딱딱한 덩어리가 됩니다. 너무 높으면 빙점이 지나치게 낮아져 일반 가정용 또는 � - �소용 냉동고� - �서 셔� - 이 반액체 시럽 상태로 남게 됩니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '28%',
          label: '이상적인 목표 Brix',
          icon: 'mdi:target',
        },
        {
          value: '25-30%',
          label: '안전한 Brix 범위',
          icon: 'mdi:gauge',
        },
        {
          value: '≈50%',
          label: '최적 과일 비율',
          icon: 'mdi:fruit-grapes',
        },
        {
          value: 'PAC 100/190',
          label: '자당 / 포도당',
          icon: 'mdi:molecule',
        },
      ],
    },
    {
      type: 'title',
      text: 'PAC 이해하기: 빙점 강하 요소',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC(Potere Anticongelante, 즉 빙점 강하력)는 페이스트리 셰프가 재료가 물의 빙점을 얼마나 낮추는지 정량화하는 데 사용하는 지표입니다. 자당(일반 설탕)은 PAC 값 100의 기준점입니다. 그러나 자당은 매우 달콤합니다. 셔� - 을 과도하게 달게 하지 않으면서 더 많은 고형분을 추가하거나 빙점 강하력을 높� - �야 한다면, 자당의 일부를 포도당으로 대체할 수 있습니다. 포도당은 PAC 190으로 얼음 결정 형성을 방지하는 데 자당보다 거의 두 배 효과적이며, 단맛은 70%� - � 불과합니다.',
    },
    {
      type: 'title',
      text: '자당 vs 포도당: 셔   �   � 적합한 당류 선택',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '자당 (설탕)',
          icon: 'mdi:cube-outline',
          description: '모든 PAC 및 POD 계산의 기준이 되는 표준 감미료. 깔끔한 단맛과 바디감을 제공합니다.',
          points: [
            'PAC 값: 100 (기준)',
            'POD 값: 100 (완전한 단맛)',
            '적합한 용도: 주 감미료 � - �할',
            '바디감과 표준 식감 부� - �',
          ],
        },
        {
          title: '포도당 (글루코스 파우더)',
          icon: 'mdi:grain',
          description: '빙점 강하력이 거의 두 배이고 단맛이 현저히 적은 단당류.',
          highlight: true,
          points: [
            'PAC 값: 190 (자당의 약 2배)',
            'POD 값: 70 (단맛 30% 적음)',
            '적합한 용도: 딱딱한 셔� -  부드럽게 하기',
            '과일이 이미 매우 달콤할 때 이상적',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '일반적인 과일 Brix 값 참조표',
      level: 3,
    },
    {
      type: 'table',
      headers: ['과일 종류', '평균 Brix 값', '수분 함량', '산도 수준'],
      rows: [
        ['레몬 / 라임', '2% - 4% Bx', '매우 높음', '극도로 높음'],
        ['딸기 / 라즈베리', '7% - 9% Bx', '높음', '보통'],
        ['오렌지 / 복숭아', '9% - 11% Bx', '중간-높음', '낮음-보통'],
        ['사과 / 배', '11% - 13% Bx', '중간', '낮음'],
        ['망고 / 포도 / 체리', '14% - 18% Bx', '중간-낮음', '매우 낮음'],
        ['바나나', '20% - 22% Bx', '낮음', '무시할 수준'],
      ],
    },
    {
      type: 'title',
      text: '셔   혼합물 조정 방법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '셔� - 의 균형을 맞추려면 먼저 과일 퓌레의 무게와 당도를 측정하세요. 과일의 단맛은 계절과 숙성도� - � 따라 달라지므로 정확성을 위해 굴절계 사용을 강력히 권장합니다. 굴절계가 � - �다면 위의 표를 참고하� - � 추정할 수 있습니다. 값이 준비되면 계산기� - � 입력하� - � 전체 혼합물을 목표 28% Brix로 맞추기 위해 필요한 시럽(물과 설탕)의 정확한 양을 확인하세요. 최적의 식감을 위해 총 배치 중량의 약 50%를 과일 비율로 목표하세요.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '셔벗이 너무 딱딱하거나 얼음 결정이 생기는 이유는?',
      html: '딱딱하게 어는 셔� - 은 거의 항상 <strong>설탕이 너무 적습니다</strong>(Brix 25% 미만). 과일 퓌레의 수분이 크고 거친 얼음 조각으로 결정화됩니다. 자당을 더 추가하� - � 총 Brix를 높이거나, 과도한 단맛 � - �이 PAC를 높이기 위해 일부 자당을 포도당으로 교체하세요. 또한 과일 비율이 너무 높지 않은지 확인하세요  -  60%를 초과하면 당류 고형분이 들어갈 � - �지가 부족합니다.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '셔벗이 묽거나 얼지 않는 이유는?',
      html: '부드럽거나 묽은 상태로 남는 셔� - 은 <strong>설탕이 너무 많습니다</strong>(Brix 30% 초과). 빙점이 지나치게 낮아져 냉동고가 혼합물을 고체화할 수 � - �습니다. 총 설탕 투입량을 줄이거나, 과일이 천� - �적으로 매우 달콤하다면(예: 바나나, 망고) 추가 자당을 비례적으로 줄이세요. 목표 온도를 확인하세요: 가정용 냉동고는 −18°C� - �서 작동합니다. −12°C 서빙� - � 적합한 PAC는 일반 냉동고� - � 너무 높습니다.',
    },
    {
      type: 'tip',
      title: '굴절계로 Brix 정확하게 측정하기',
      html: '디지털 또는 광학식 굴절계는 일관된 셔� - 을 위한 최고의 투자입니다. 과일 숙성도는 계절, 품종, 원산지� - � 따라 크게 달라집니다  -  6월의 딸기는 6°Bx로 측정되지만 같은 품종이 8월� - �는 10°Bx� - � 도달할 수 있습니다. 퓌레 한 방울을 프리즘� - � 떨어뜨리고 값을 읽어 계산기� - � 입력하세요. 표만으로 추측하면 일관되지 않은 결과가 나옵니다.',
    },
    {
      type: 'title',
      text: '단계별 가이드: 이 계산기 사용 방법',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>과일 퓌레 무게 측정</strong>  -  디지털 저울을 사용하� - � 체� - � 거른 과일 퓌레 또는 주스의 정확한 무게를 그램 단위로 측정하세요.',
        '<strong>과일 Brix 측정 또는 추정</strong>  -  정밀 측정을 위해 굴절계를 사용하거나, 드롭다운� - �서 프리셋을 선택하세요(레몬 2%, 딸기 8%, 망고 14% 등).',
        '<strong>목표 Brix 설정</strong>  -  기본값은 이상적인 지점인 28%입니다. 취향� - � 따라 25%� - �서 30% 사이로 조정하세요.',
        '<strong>시럽 권장량 확인</strong>  -  계산기가 목표 달성� - � 필요한 자당과 물의 양을 즉시 표시합니다.',
        '<strong>식감 표시기 확인</strong>  -  PAC 미터가 냉동고 온도� - �서 셔� - 이 너무 딱딱할지, 최적의 스쿱질감일지, 너무 부드러울지 알려줍니다.',
        '<strong>필요시 포도당으로 조정</strong>  -  셔� - 이 딱딱할 것으로 예측되지만 이미 충분히 달콤하다면, 일부 자당을 포도당으로 교체하� - � 단맛을 추가하지 않고 PAC를 높이세요.',
      ],
    },
    {
      type: 'title',
      text: '주요 셔   제조 용어',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Brix (°Bx)',
          definition: '액체 용액� - � 용해된 고형분(주로 당류)의 비율. 셔� - � - �서 이상적인 식감과 스쿱질감을 위한 목표 범위는 25-30°Bx입니다.',
        },
        {
          term: 'PAC (Potere Anticongelante)',
          definition: '빙점 강하력  -  재료가 물의 빙점을 얼마나 낮추는지 측정하는 지표. 자당은 기준 PAC 100, 포도당은 190입니다.',
        },
        {
          term: 'POD (Potere Dolcificante)',
          definition: '자당(기준 100) 대비 감미력. 포도당은 POD 70으로, 설탕보다 그램당 단맛이 30% 적습니다.',
        },
        {
          term: '포도당',
          definition: '과도한 단맛을 추가하지 않으면서 빙점을 낮추기 위해 셔� -  배합� - � 사용되는 단당류(글루코스 파우더). PAC 190, POD 70.',
        },
        {
          term: '굴절계',
          definition: '빛이 시료를 통과할 때 굴절되는 정도를 읽어 액체의 Brix 값을 측정하는 광학식 또는 디지털 기기. 셔� - 의 일관성을 위해 필수적입니다.',
        },
        {
          term: '시럽',
          definition: '자당과 물을 중량 기준 50/50으로 혼합하� - � 용해될 때까지 가� - �한 것. 셔� -  베이스� - � 설탕을 첨가하는 표준 수단.',
        },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
