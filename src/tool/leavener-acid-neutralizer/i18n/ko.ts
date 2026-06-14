import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "베이킹소다와 베이킹파우더 계산기：팽창제와 산의 중화 밸런스";
const description = "레시피에 꼭 맞는 베이킹소다와 베이킹파우더의 최적 비율을 계산합니다. 버터밀크나 요거트 같은 산성 재료를 중화시켜 금속성 뒷맛을 없애고 매번 완벽한 부풀림을 실현합니다.";
const faq = [
  {
    question: "베이킹파우더 대신 베이킹소다를 쓸 때 왜 산이 필요한가요?",
    answer: "베이킹소다는 순수한 염기입니다. 이산화탄소를 발생시키려면 산이 반드시 필요합니다. 산이 충분하지 않으면 베이킹소다가 완전히 반응하지 못하고, 구워진 결과물에 쓴맛과 금속성 향이 남습니다."
  },
  {
    question: "베이킹소다와 베이킹파우더의 차이는 무엇인가요?",
    answer: "베이킹소다는 100% 탄산수소나트륨(중조)이라는 염기입니다. 반면 베이킹파우더는 베이킹소다에 건조 산성제(주석산크림 등)와 전분을 더한 완전한 팽창제로, 자체 중화되므로 산을 따로 넣을 필요가 없습니다."
  },
  {
    question: "베이킹소다 1작은술은 베이킹파우더로 얼마인가요?",
    answer: "베이킹소다는 베이킹파우더보다 약 3~4배 강력합니다. 베이킹소다 1작은술을 대체하려면 베이킹파우더 약 3~4작은술이 필요합니다. 다만 이렇게 바꾸면 산성염도 함께 들어가 풍미가 달라질 수 있으므로, 정확한 환산은 저희 계산기를 이용하세요."
  },
  {
    question: "케이크에서 비누 맛이나 금속 맛이 나는 이유는 뭔가요?",
    answer: "비누나 금속 같은 뒷맛은 미반응 베이킹소다의 전형적인 신호입니다. 반죽에 베이킹소다를 완전히 중화할 만큼 산이 부족하면, 구운 후에도 알칼리성 잔류물이 남아 불쾌한 화학적 풍미를 냅니다. 저희 계산기로 완전한 중화를 확인하세요."
  },
  {
    question: "더치프로세스 코코아파우더를 산으로 쓸 수 있나요?",
    answer: "아니요. 더치프로세스 코코아는 알칼리 처리로 천연 산도가 낮아져 있습니다(pH 약 7~8). 산으로 작용하는 것은 천연 코코아파우더(pH 약 5~6)뿐입니다."
  },
  {
    question: "베이킹소다는 구운 과자의 갈변에 어떤 영향을 주나요?",
    answer: "베이킹소다는 반죽의 pH를 높여 알칼리성으로 만듭니다. pH가 높을수록 마이야르 갈변 반응이 촉진되어, 쿠키나 케이크의 껍질이 더 진한 갈색이 되고 풍미가 깊어집니다."
  }
];

const howTo = [
  {
    name: "밀가루 무게 입력",
    text: "레시피에 사용하는 밀가루 총 무게를 그램 또는 온스로 입력하면 필요한 총 팽창력이 계산됩니다."
  },
  {
    name: "산성 재료 추가",
    text: "레시피에 포함된 산성 재료(버터밀크, 요거트, 레몬즙 등)를 선택하고 각각의 무게를 입력하세요."
  },
  {
    name: "pH 밸런스 확인",
    text: "가상의 pH 저울을 확인합니다. 저울이 균형을 이루면 금속성 이취 없이 최적으로 중화된 상태입니다."
  },
  {
    name: "팽창제 계량",
    text: "산을 중화하는 데 필요한 베이킹소다 권장량과, 목표 부풀림을 달성하기 위한 추가 베이킹파우더(부스터) 양을 읽어냅니다."
  }
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'KRW' },
};

export const content: ToolLocaleContent = {
  slug: 'leavener-acid-neutralizer',
  title: '팽창제와 산의 중화 계산',
  description: '레시피에 꼭 맞는 베이킹소다와 베이킹파우더의 최적 비율을 계산합니다. 버터밀크나 요거트 같은 산성 재료를 중화시켜 금속성 뒷맛을 없애고 매번 완벽한 부풀림을 실현합니다.',
  faqTitle: '자주 묻는 질문',
  ui: {
    title: "팽창제 산중화 계산",
    subtitle: "제과의 부풀림과 풍미를 화학량론으로 최적화",
    flourLabel: "밀가루 무게",
    addAcidLabel: "산성 재료 추가",
    weightLabel: "무게",
    removeButton: "삭제",
    bakingSodaNeeded: "중화용 베이킹소다",
    requiredBakingPowder: "목표 팽창력",
    providedBakingPowderEquivalent: "베이킹소다에 의한 팽창력",
    boosterBakingPowder: "추가 베이킹파우더 부스터",
    resultsTitle: "계산된 팽창제",
    statusBalanced: "균형 양호",
    statusAcidic: "산 과잉",
    statusAlkaline: "염기 과잉",
    gramsUnit: "g",
    ouncesUnit: "oz",
    teaspoonsUnit: "작은술",
    scaleBalanceTitle: "가상 pH 저울",
    acidListTitle: "산성 재료",
    unitLabel: "단위계",
    metricUnit: "미터법 (g)",
    imperialUnit: "야드파운드법 (oz)",
    acid_buttermilk: "버터밀크",
    acid_yogurt: "요거트",
    acid_sour_cream: "사워크림",
    acid_honey: "꿀",
    acid_molasses: "당밀",
    acid_cocoa: "천연 코코아파우더",
    acid_lemon_juice: "레몬즙",
    acid_vinegar: "식초",
    stoichiometryBadge: "pH 화학량론",
    simulateSodaLabel: "베이킹소다 추가 시뮬레이션",
    autoBalanceBtn: "자동 밸런스",
    sodaAddedLabel: "추가된 베이킹소다"
  },
  faq,
  howTo,
  seo: [
    {
      type: 'summary',
      title: '완벽한 부풀림을 위한 핵심 포인트',
      items: [
        '베이킹소다가 반응하려면 산이 필요합니다. 산이 부족하면 비누 같은 금속성 냄새의 원인이 됩니다',
        '베이킹파우더는 자체 중화형이며, 부스터로서 추가 팽창력을 제공합니다',
        '적절한 부풀림의 기준은 밀가루 무게의 4%에 해당하는 베이킹파우더 환산치입니다',
        '아래 중화 표를 참고하여 산성 재료에 맞는 적절한 베이킹소다 양을 찾으세요'
      ]
    },
    {
      type: 'title',
      text: '제과에서의 화학 팽창제 과학',
      level: 2
    },
    {
      type: 'paragraph',
      html: '화학적 팽창은 <strong>산염기 중화 반응</strong>에 의해 이산화탄소(CO2)를 발생시키고, 그 기포가 반죽 매트릭스에 갇혀 구워지는 동안 부풀어 오르는 원리입니다. 베이킹소다(탄산수소나트륨)와 산성 재료의 정확한 비율을 맞추는 것이 가장 중요합니다. <strong>베이킹소다가 너무 많으면</strong> 미반응 알칼리 성분이 남아 비누 맛, 금속성 향, 노란 변색을 유발합니다. <strong>산이 너무 많으면</strong> 반죽이 제대로 부풀지 않고 밀도가 높고 납작한 결과물이 됩니다.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '3~4배',
          label: '베이킹소다는 베이킹파우더보다 강력함',
          icon: 'mdi:flash'
        },
        {
          value: '4%',
          label: '목표 팽창력 (밀가루 무게 대비)',
          icon: 'mdi:target'
        },
        {
          value: '1/4작은술',
          label: '버터밀크/요거트 120g당 베이킹소다',
          icon: 'mdi:spoon-sugar'
        },
        {
          value: '0.0125',
          label: '중화 비율 (유산 재료)',
          icon: 'mdi:scale-balance'
        }
      ]
    },
    {
      type: 'title',
      text: '베이킹소다 vs 베이킹파우더：완전 비교',
      level: 3
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '베이킹소다',
          icon: 'mdi:flask-outline',
          description: '순수한 탄산수소나트륨(NaHCO3). 강력한 알칼리성 염기로, CO2를 발생시키려면 외부의 산이 필요합니다.',
          points: [
            '베이킹파우더의 3~4배 강력',
            '반응에는 산(버터밀크, 요거트, 레몬즙)이 필요',
            '과잉 시 비누 맛과 노란 내부 조직의 원인',
            'pH를 높여 쿠키의 마이야르 반응 촉진',
            '단동식：혼합 즉시 CO2 방출'
          ]
        },
        {
          title: '베이킹파우더',
          icon: 'mdi:flask-round-bottom-outline',
          description: '베이킹소다 + 건조 산성염 + 전분으로 구성된 완전한 팽창 시스템. 자체 중화형으로 신뢰도가 높습니다.',
          highlight: true,
          points: [
            '자체 산 포함 (인산일칼슘, SAP 등)',
            '복동식：혼합 시와 가열 시의 2단계로 CO2 방출',
            '금속성 뒷맛 없음. pH 균형 완료',
            '1g당 강도는 약함. 베이킹소다와 동등한 힘을 내려면 3~4배 필요',
            '베이킹소다만으로 밀가루 전체를 부풀리기 어려울 때 부스터로 최적'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['산성 재료', '표준 사용량', '중화용 베이킹소다', '중화 비율'],
      rows: [
        ['버터밀크 / 요거트 / 사워크림', '120g (1/2컵)', '1.5g (1/4작은술)', '0.0125'],
        ['레몬즙 / 식초', '15g (1큰술)', '1.5g (1/4작은술)', '0.1000'],
        ['천연 코코아파우더', '80g (1컵)', '3.0g (1/2작은술)', '0.0375'],
        ['꿀', '340g (1컵)', '3.0g (1/2작은술)', '0.0088'],
        ['당밀', '328g (1컵)', '3.0g (1/2작은술)', '0.0091']
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '문제 해결：팽창 밸런스가 무너지지 않았나요?',
      badge: '빠른 체크',
      html: '<strong>케이크가 주저앉았다면：</strong>산이 너무 많거나 팽창제가 전체적으로 부족합니다. CO2가 반죽 구조가 굳기 전에 빠져나갔습니다.<br/><br/><strong>케이크가 꽉 차고 납작하다면：</strong>중화할 수 있는 베이킹소다 양을 초과하는 산이 있거나, 밀가루 무게 대비 총 팽창력이 부족합니다.<br/><br/><strong>비누 맛이나 금속 맛이 난다면：</strong>미반응 베이킹소다가 과잉입니다. 산성 재료를 늘리거나 베이킹소다를 줄이세요.<br/><br/><strong>노란 반점이 보이면：</strong>녹지 않은 미반응 베이킹소다 덩어리의 전형적인 신호입니다. 다음에는 베이킹소다를 밀가루와 함께 체 쳐서 사용하세요.'
    },
    {
      type: 'title',
      text: '팽창제 밸런스를 맞추고 금속 냄새를 방지하는 방법',
      level: 3
    },
    {
      type: 'paragraph',
      html: '최상의 풍미와 부풀림을 얻으려면 다음 순서를 따르세요.<strong>먼저</strong>, 위 표를 참고하여 반죽의 산성 성분을 완전히 중화하는 데 필요한 베이킹소다 양을 구합니다.<strong>다음으로</strong>, 그 베이킹소다 양을 베이킹파우더 환산치로 변환하고(4배 곱함) 밀가루에 필요한 총 팽창력과 비교합니다. 기준은 밀가루 무게의 <strong>4%</strong>에 해당하는 베이킹파우더 환산치입니다.<strong>부족한 만큼</strong> 중성 베이킹파우더를 부스터로 추가합니다. 저희 계산기가 이 모든 과정을 자동으로 처리합니다.'
    },
    {
      type: 'list',
      icon: 'mdi:alert-circle-outline',
      items: [
        '베이킹소다를 베이킹파우더로 1:1 대체하지 마세요. 베이킹소다는 3~4배 강하며 산이 필요합니다',
        '베이킹소다는 반드시 가루 재료와 함께 체 쳐서 쓴맛 덩어리를 방지하세요',
        '더치프로세스 코코아는 산성이 아닙니다. 산으로 사용하려면 천연 코코아파우더를 쓰세요',
        '꿀과 당밀은 약산성입니다. 레몬즙에 비해 1g당 필요한 베이킹소다 양이 훨씬 적습니다',
        '섞은 후에는 신속히 작업하세요. 화학 팽창제는 액체에 닿는 순간부터 반응을 시작합니다'
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: '중화 비율',
          definition: '일정 무게의 산성 재료를 완전히 중화하는 데 필요한 베이킹소다의 비율. 비율이 낮을수록 그 재료의 1g당 산도가 낮다는 뜻입니다.'
        },
        {
          term: '팽창력',
          definition: '팽창제가 발생시킬 수 있는 CO2 가스의 총량. 베이킹파우더 환산으로 나타내며, 밀가루 무게의 4%가 케이크와 머핀의 표준 목표치입니다.'
        },
        {
          term: '복동식 베이킹파우더',
          definition: '2단계로 CO2를 방출하는 베이킹파우더. 먼저 상온에서 액체와 섞일 때, 다음으로 오븐의 열에서 반응합니다. 보다 안정된 부풀림을 얻을 수 있습니다.'
        },
        {
          term: '마이야르 반응',
          definition: '아미노산과 환원당이 반응하여 식품을 갈색으로 만들고 복합적인 풍미를 생성하는 화학 반응. 베이킹소다 과잉으로 인한 높은 pH에서 촉진됩니다. 쿠키에서는 바람직하지만, 섬세한 케이크에서는 피하는 것이 좋습니다.'
        },
        {
          term: 'pH 밸런스',
          definition: '반죽의 산성·알칼리성 정도. 중성 pH(약 7)는 베이킹소다가 모든 산과 반응을 마친 상태입니다. 약알칼리성은 갈변을 촉진하고, 산성은 부드럽고 촉촉한 식감을 줍니다.'
        }
      ]
    },
    {
      type: 'tip',
      html: '<strong>갈변과 pH의 관계：</strong>풍미를 위해서는 완전한 중화가 중요하지만, 초콜릿 케이크나 쿠키에서는 베이킹소다를 아주 약간 더 넣어 반죽을 약알칼리성으로 만드는 것이 효과적일 때도 있습니다. pH가 높으면 마이야르 반응이 진행되어 색이 진해지고, 가장자리가 바삭해지며, 카라멜 같은 깊은 풍미가 생깁니다. 섬세한 바닐라 케이크에서는 순수하고 깔끔한 맛을 위해 정확한 중화를 목표로 하세요.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
