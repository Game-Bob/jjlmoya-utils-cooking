import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "사워도우 계산기: 발효 비율";
const description = "사워도우 스타터, 밀가루, 물의 비율을 자동으로 계산하여 배양액을 관리하세요. 사전 설정된 비율 또는 맞춤형 비율을 제공합니다.";
const faq = [
	{
		question: '1:1:1 비율은 무엇을 의미하나요?',
		answer: '상온에서 스타터를 유지하기 위한 가장 일반적인 비율입니다. 스타터 1부, 밀가루 1부, 물 1부를 의미하며 매일 먹이주기를 할 때 유용합니다.',
	},
	{
		question: '1:2:2 비율은 언제 사용하나요?',
		answer: '스타터를 활성화할 때 사용합니다. 발효가 느리지만 예측 가능하게 진행되며, 냉장 보관했던 스타터를 깨울 때 이상적입니다.',
	},
	{
		question: '1:5:5 "스윗 스폿" 비율이란?',
		answer: '많은 제빵사들이 선호하는 이상적인 비율입니다. 상온에서 8-12시간 정도 발효하여 스타터가 최고점에 도달할 때 사용하기 좋습니다.',
	},
	{
		question: '맞춤형 비율을 사용할 수 있나요?',
		answer: '물론입니다. 특정 방식이 있다면 직접 수치를 입력할 수 있습니다. 매우 느린 발효를 위해 1:10:10 비율을 사용하기도 합니다.',
	},
	{
		question: '계산기가 그람수를 반올림하나요?',
		answer: '네. 실용성을 위해 가장 가까운 정수로 반올림됩니다. 약간의 반올림 차이는 발효에 큰 영향을 미치지 않습니다.',
	},
];
const howTo = [
	{
		name: '필요한 총량 입력',
		text: '레시피에 필요한 사워도우의 총 무게를 설정하세요 (예: 일반적인 빵 한 덩이에 300g).',
	},
	{
		name: '먹이주기 비율 선택',
		text: '사전 설정된 비율(유지, 활성화, 지연, 강력, 스윗 스폿) 중에서 선택하거나 직접 만드세요.',
	},
	{
		name: '정확한 분량 확인',
		text: '계산기가 필요한 스타터, 밀가루, 물의 양을 보여줍니다. 이를 섞어 발효시키면 됩니다.',
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
	slug: 'sourdough-starter-feeding-calculator-ratio-proportions',
	title,
	description,
	faqTitle: '자주 묻는 질문',
	faq,
	howTo,
	seo: [
		{
			type: 'title',
			text: '사워도우 유지 및 먹이주기 마스터 가이드',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '<strong>사워도우</strong>는 단순한 재료가 아니라 야생 효모와 유산균(LAB)이 살아있는 생태계입니다. 훌륭한 빵을 만드는 비결은 이 배양액의 건강 상태에 달려 있습니다.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '24-26°C',
					label: '최적 활성 온도',
					icon: 'mdi:thermometer',
				},
				{
					value: '3.8 - 4.2',
					label: '이상적인 pH',
					icon: 'mdi:test-tube',
				},
				{
					value: '100%',
					label: '표준 가수율',
					icon: 'mdi:water-percent',
				},
				{
					value: 'x2 - x3',
					label: '피크 시 부풀음',
					icon: 'mdi:trending-up',
				},
			],
		},
		{
			type: 'title',
			text: '사워도우 배양액 유형 비교',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: '액상 사워도우 (가수율 100%)',
					icon: 'mdi:water',
					description: '현대 아티잔 제빵에서 가장 흔히 사용되는 형태. 섞기 쉽고 반죽에 잘 융합됩니다.',
					points: [
						'더 빠른 발효 속도',
						'부드러운 유산균 풍미',
						'계량 및 먹이주기가 용이함',
						'바게트 및 사워도우 빵에 이상적',
					],
				},
				{
					title: '되직한 사워도우 (파스타 마드레)',
					icon: 'mdi:bread-slice-outline',
					description: '이탈리아 전통 방식. 가수율은 보통 50% 수준. 부풀리는 힘이 강함.',
					highlight: true,
					points: [
						'더 느리고 안정적인 발효',
						'초산(식초) 풍미가 강조됨',
						'리치한 반죽을 띄우는 강한 힘',
						'파네토네 및 브리오슈에 이상적',
					],
				},
			],
		},
		{
			type: 'title',
			text: '수학적 먹이주기 비율의 이해',
			level: 3,
		},
		{
			type: 'paragraph',
			html: '비율은 밀가루와 물 대비 스타터(어미종)의 비율을 나타냅니다. 예: 1:2:2는 스타터 1부에 밀가루 2부, 물 2부를 의미합니다.',
		},
		{
			type: 'table',
			headers: ['비율', '추천 용도', '예상 시간 (24°C)', '주요 장점'],
			rows: [
				['1:1:1', '매일 먹이주기', '4-6시간', '빠른 케어'],
				['1:2:2', '반죽 전 활성화', '6-8시간', '산도 균형'],
				['1:5:5', '표준 빵 반죽용', '8-12시간', '예측 가능한 피크'],
				['1:10:10', '장기 지연 발효', '16-24시간', '유연한 일정 관리'],
			],
		},
		{
			type: 'title',
			text: '사워도우 먹이주기를 위한 밀가루 선택',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: '통호밀가루',
					icon: 'mdi:grain',
					description: '야생 효모를 위한 슈퍼푸드. 일반 밀가루보다 영양소와 효소가 풍부함.',
					points: [
						'폭발적인 발효 활성력',
						'깊고 구수한 풍미 형성',
						'산도 수준을 안정적으로 유지',
					],
				},
				{
					title: '백강력분',
					icon: 'mdi:shaker-outline',
					description: '사워도우 특유의 산미가 빵의 풍미를 압도하지 않기를 원하는 경우에 적합.',
					points: [
						'더 중립적이고 다재다능한 맛',
						'기포 관찰이 매우 쉬움',
						'과발효 가능성이 적음',
					],
				},
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: '사워도우 배고픔의 신호',
			html: '표면에 어두운 액체(후치/hooch)가 고이거나 강한 식초/아세톤 냄새가 나고, 피크 도달 후 rapidement 주저앉는다면 더 높은 먹이주기 비율이 필요합니다.',
		},
		{
			type: 'title',
			text: '사워도우 전문 용어집',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: '르방 (Levain)',
					definition: '어미종에서 떼어내 특정 빵 레시피를 위해 별도로 준비한 사전 발효종.',
				},
				{
					term: '후치 (Hooch)',
					definition: '배양액이 먹이를 모두 소비했을 때 생기는 알코올 및 수분층.',
				},
				{
					term: '활성 피크 (Peak)',
					definition: '부피 부풀음과 효모 밀도가 최대에 달하는 순간. 반죽을 시작하기에 가장 좋은 시점.',
				},
				{
					term: '유산균 (LAB)',
					definition: '유기산을 생성하여 특유의 풍미를 내고 보존성을 높여주는 미생물.',
				},
			],
		},
		{
			type: 'tip',
			title: '플로팅 테스트 (부력 테스트)',
			html: '스타터가 준비되었는지 확인하려면 물이 담긴 컵에 1티스푼을 떨어뜨려 보세요. 떠오른다면 CO2가 충분히 차 있는 상태입니다.',
		},
		{
			type: 'paragraph',
			html: '계산기를 활용하면 제빵 과정을 표준화하고 빵의 생물학적 원리를 더 잘 이해할 수 있습니다.',
		},
	],
	ui: {
		totalAmount: '최종 완성량',
		refreshRatio: '먹이주기 비율',
		maintain: '유지',
		activate: '활성화',
		retard: '지연',
		strong: '강력',
		sweetSpot: '스윗 스폿',
		custom: '맞춤형',
		sourdough: '사워도우',
		activeCulture: '활성 스타터',
		flour: '밀가루',
		flourType: '강력분 또는 통밀가루',
		water: '물',
		chlorineFree: '염소 없는 물',
		todayFormula: '오늘의 배합',
		hydration: '가수율 100 %',
		totalDough: '총 반죽량',
		mm: 'MM',
	},
  bibliography,
	schemas: [faqSchema, howToSchema, appSchema],
};
