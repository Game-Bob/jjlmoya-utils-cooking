import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = '이스트 계산기: 생이스트, 드라이이스트, 사워도우';
const description =
	'생이스트, 드라이이스트, 사워도우 스타터를 정확하게 변환하세요. 사워도우 사용 시 완벽한 수분율을 유지하기 위한 레시피 조정 계산 기능을 제공합니다.';

const faq = [
	{
		question: '생이스트와 드라이이스트의 차이점은 무엇인가요?',
		answer:
			'생이스트는 약 70%의 수분을 함유하고 있는 반면, 드라이이스트는 약 8%를 함유하고 있습니다. 변환 비율은 드라이이스트 1 대 생이스트 3(1:3)입니다. 드라이이스트는 발효력이 강하고 보관성이 좋아 장기 보관에 유리합니다.',
	},
	{
		question: '사워도우 스타터는 얼마나 필요한가요?',
		answer:
			'사워도우 스타터는 기본적으로 수분율 100%(밀가루와 물의 양이 같음)입니다. 생이스트 1g을 대체하려면 스타터 5g이 필요합니다(1:5 비율). 스타터에 포함된 밀가루와 물의 양만큼 전체 레시피에서 차감하여 수분율을 맞춰야 합니다.',
	},
	{
		question: '사워도우를 사용할 때 왜 레시피를 조정해야 하나요?',
		answer:
			'사워도우 스타터에는 효모뿐만 아니라 밀가루와 물이 포함되어 있습니다. 스타터를 추가하는 것은 레시피에 재료를 더하는 것과 같습니다. 적절한 수분율과 반죽 구조를 유지하려면 스타터 무게의 절반만큼 밀가루와 물을 전체 레시피에서 빼야 합니다.',
	},
	{
		question: '활성 드라이이스트 대신 인스턴트 이스트를 사용해도 되나요?',
		answer:
			'인스턴트 이스트는 미세하게 분쇄된 드라이이스트의 일종입니다. 드라이이스트와 생이스트 간의 변환 비율은 동일하게 1:3입니다. 인스턴트 이스트는 입자가 고와서 수분량을 아주 약간 줄여야 할 수도 있습니다.',
	},
];

const howTo = [
	{
		name: '이스트 종류 선택',
		text: '가지고 계신 이스트의 종류를 선택하세요: 생이스트, 드라이이스트(인스턴트 또는 활성), 사워도우 스타터(수분율 100%).',
	},
	{
		name: '양 입력',
		text: '양을 그램(g) 단위로 입력하세요. 정확한 결과를 위해 가능한 한 주방 저울을 사용하는 것이 좋습니다.',
	},
	{
		name: '변환 결과 적용',
		text: '세 가지 유형 모두에 대한 해당 양이 표시됩니다. 사워도우로 변환하는 경우, 레시피에서 차감해야 할 밀가루와 물의 양을 확인하세요.',
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
	operatingSystem: 'All',
};

export const content: ToolLocaleContent = {
	slug: 'yeast-converter-fresh-dry-sourdough-starter',
	title,
	description,
	ui: {
		selectYeastType: '이스트 종류 선택',
		freshYeast: '생이스트',
		dryYeast: '드라이이스트 (인스턴트)',
		sourdough: '사워도우 스타터 (100%)',
		enterAmount: '양 입력',
		quantity: '분량',
		grams: '그램 (g)',
		ounces: '온스 (oz)',
		pounds: '파운드 (lb)',
		milligrams: '밀리그램 (mg)',
		reset: '초기화',
		conversions: '변환 결과',
		copy: '복사',
		copied: '복사되었습니다!',
		recipeAdjustment: '레시피 조정',
		flourSubtract: '밀가루 차감량:',
		waterSubtract: '물 차감량:',
	},
	faqTitle: '자주 묻는 질문',
	faq,
	bibliographyTitle: '참고 문헌 및 자료',
	howTo,
	seo: [
		{
			type: 'title',
			text: '이스트 변환 공식 및 과학적 가이드',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '<strong>이스트 변환</strong>은 일관된 베이킹 결과를 얻기 위해 필수적입니다. 상업용 이스트를 사워도우 스타터로 대체하거나 생이스트와 드라이이스트 간의 비율을 조정할 때, 정확한 비율을 이해하면 신뢰할 수 있는 발효와 균일한 품질의 빵을 만들 수 있습니다.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '1:3',
					label: '드라이 대 생이스트 비율',
					icon: 'mdi:scale',
				},
				{
					value: '1:5',
					label: '생이스트 대 사워도우',
					icon: 'mdi:flask-outline',
				},
				{
					value: '70%',
					label: '생이스트 수분 함량',
					icon: 'mdi:water-percent',
				},
				{
					value: '8%',
					label: '드라이이스트 수분 함량',
					icon: 'mdi:water-opacity',
				},
			],
		},
		{
			type: 'title',
			text: '팽창제의 종류와 특징',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: '생이스트',
					icon: 'mdi:cube',
					description: '녹말과 수분 속에 살아있는 효모 세포가 부유하고 있는 상태입니다.',
					points: [
						'효력: 100% (기준)',
						'보관 기간: 냉장 보관 시 2~3주',
						'수분 함량: 약 70%',
						'용도: 전문 베이커, 즉시 사용 시 적합',
					],
				},
				{
					title: '드라이이스트 (인스턴트)',
					icon: 'mdi:spray-bottle',
					description: '효모 세포를 건조시킨 것으로, 생이스트보다 농축되어 있습니다.',
					points: [
						'효력: 생이스트의 3배',
						'보관 기간: 미개봉 시 1~2년',
						'수분 함량: 약 8%',
						'용도: 홈베이커, 장기 보관 시 적합',
					],
				},
				{
					title: '사워도우 스타터',
					icon: 'mdi:flask-outline',
					description: '수분율 100%에서 배양된 야생 효모와 유산균 배양액입니다.',
					highlight: true,
					points: [
						'효력: 1부 = 생이스트 5부',
						'보관 기간: 관리 시 반영구적',
						'수분 함량: 50% (밀가루와 동량)',
						'용도: 복합적인 풍미, 저온 장시간 발효',
					],
				},
			],
		},
		{
			type: 'title',
			text: '변환 비율 및 계산 공식',
			level: 3,
		},
		{
			type: 'table',
			headers: ['기존 이스트', '변환 대상', '계산 공식', '예시'],
			rows: [
				['생이스트', '드라이이스트', '생이스트 ÷ 3 = 드라이', '생이스트 30g = 드라이 10g'],
				['드라이이스트', '생이스트', '드라이 × 3 = 생이스트', '드라이 10g = 생이스트 30g'],
				['생이스트', '사워도우 (100%)', '생이스트 × 5 = 사워도우', '생이스트 20g = 스타터 100g'],
				['사워도우 (100%)', '생이스트', '사워도우 ÷ 5 = 생이스트', '스타터 100g = 생이스트 20g'],
				['드라이이스트', '사워도우 (100%)', '드라이 × 15 = 사워도우', '드라이 10g = 스타터 150g'],
				['사워도우 (100%)', '드라이이스트', '사워도우 ÷ 15 = 드라이', '스타터 150g = 드라이 10g'],
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: '중요: 사워도우 사용 시 레시피 조정',
			html: '이스트를 사워도우 스타터로 대체할 때는 반드시 레시피를 조정해야 합니다. 사워도우 스타터는 무게의 50%가 밀가루, 50%가 물입니다. 변환 결과 스타터 100g이 필요하다면, 적절한 수분율을 유지하기 위해 원래 레시피에서 밀가루 50g과 물 50ml를 빼주세요.',
		},
		{
			type: 'title',
			text: '이스트 종류별 발효 특성',
			level: 3,
		},
		{
			type: 'table',
			headers: ['이스트 종류', '발효 속도', '풍미 발달', '이산화탄소 생성'],
			rows: [
				['생이스트', '빠름 (2~3시간)', '중립적~부드러움', '많고 급격함'],
				['드라이이스트', '보통 (3~4시간)', '약간 더 복합적', '일정함'],
				['사워도우', '느림 (8~48시간)', '복합적, 산미 있음', '점진적, 지속적'],
			],
		},
		{
			type: 'tip',
			title: '전문가 팁: 온도 조정',
			html: '사워도우를 이용한 저온 발효(2~4°C에서 8~16시간)는 상온 발효에 비해 월등한 풍미와 반죽 구조를 만들어냅니다. 이것이 전문 베이커리에서 장시간 발효 빵을 만들 때 사워도우를 선호하는 이유입니다.',
		},
		{
			type: 'paragraph',
			html: '이 계산기는 복잡한 수학적 계산을 단순화하여, 사용자가 베이킹 기술 연마와 풍미 개발에만 집중할 수 있도록 돕습니다.',
		},
	],

  bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
