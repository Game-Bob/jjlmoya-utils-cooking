import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = '베이킹 틀 사이즈 변환 계산기';
const description =
	'모든 베이킹 레시피를 내 틀에 맞게 조절하세요. 원형, 정사각형, 직사각형 틀의 변환 계수를 전문가급 정밀도로 자동 계산해 드립니다.';

const faq = [
	{
		question: '변환 계수는 정확히 어떻게 계산되나요?',
		answer:
			'계수는 "목표 틀 면적"을 "원래 레시피 틀 면적"으로 나누어 산출됩니다. 결과가 1.5라면 모든 재료의 양에 1.5를 곱하면 됩니다.',
	},
	{
		question: '원형 틀을 정사각형 틀로 변환할 수 있나요?',
		answer:
			'네, 이 도구는 형태에 관계없이 면적을 비교하기 위해 정밀한 기하학 공식을 사용합니다. 치수만 입력하면 시스템이 자동으로 면적 동등성을 계산합니다.',
	},
	{
		question: '틀의 높이는 어떻게 고려되나요?',
		answer:
			'이 도구는 가장 중요한 바닥 면적에 집중합니다. 내 틀이 원본보다 훨씬 높거나 낮다면 온도와 관계없이 굽는 시간을 약간 조정해야 할 수도 있습니다.',
	},
	{
		question: '재료 목록에 항목을 추가하는 방법은?',
		answer:
			'하단 버튼을 클릭하여 새 행을 추가하세요. 재료 이름과 원래 무게를 적으면 변환된 양이 즉시 실시간으로 업데이트됩니다.',
	},
	{
		question: '매우 큰 오븐 팬에 대한 변환도 신뢰할 수 있나요?',
		answer:
			'수학적으로는 정확하지만, 매우 큰 케이크는 중앙까지 익는 데 훨씬 오랜 시간이 걸립니다. 오븐 온도를 약간 낮추는 조정을 고려하세요.',
	},
];

const howTo = [
	{
		name: '원래 레시피 틀 설정',
		text: '만들고자 하는 원래 레시피가 기준으로 삼은 틀의 형태와 치수를 선택합니다.',
	},
	{
		name: '내 틀 설정',
		text: '집에 가지고 있는 틀의 치수를 입력하세요. 시스템이 즉시 변환 계수를 계산합니다.',
	},
	{
		name: '재료 계산기 활용',
		text: '레시피의 재료를 추가하여 내 틀에 필요한 정확한 양을 확인하세요.',
	},
	{
		name: '굽기 조절',
		text: '사이즈가 변하면 온도가 같더라도 굽는 시간이 달라지는 경우가 많다는 점을 기억하세요.',
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
	slug: 'cake-pan-size-converter-calculator',
	title,
	description,
	faqTitle: '사이즈 조절 관련 자주 묻는 질문',	ui: {
		originalRecipe: '원래 레시피',
		yourMold: '내 틀',
		round: '원형',
		square: '정사각형',
		rectangular: '직사각형',
		diameter: '지름 (cm)',
		side: '변 (cm)',
		width: '너비 (cm)',
		length: '길이 (cm)',
		multiplyingFactor: '변환 계수',
		equivalentMolds: '틀 사이즈가 같습니다. 그대로 조리하세요.',
		smallerMold: '틀이 더 작습니다. 재료에 다음 계수를 곱해 줄이세요:',
		largerMold: '틀이 더 큽니다. 재료에 다음 계수를 곱해 늘리세요:',
		ingredientCalculator: '재료 계산기',
		addIngredient: '재료 추가',
		ingredient: '재료',
		original: '원래 양',
		final: '변환 결과',
		exampleIngredient: '예: 밀가루',
		delete: '삭제',
		originalVisualization: '원본',
		yourVisualization: '내 것',
		defaultIngredient1: '밀가루',
		defaultIngredient2: '설탕',
		reduce: '축소',
		increase: '확대',
	},

	faq,	howTo,
	seo: [
		{
			type: 'title',
			text: '베이킹 틀 사이즈별 레시피 변환 고급 가이드',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '레시피를 다른 틀에 맞춰 변환할 때는 <strong>기하학적 비율</strong>을 지키는 것이 매우 중요합니다. 그래야만 이상적인 식감, 높이, 수분감을 유지할 수 있습니다.',
		},
		{
			type: 'diagnostic',
			variant: 'info',
			title: '바닥 면적의 비밀',
			html: '올바른 변환의 비밀은 지름이 아닌 바닥 면적에 있습니다. 원형 틀의 지름이 25% 증가하면 전체 면적과 필요한 재료량은 거의 두 배가 됩니다.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: 'x1.56',
					label: '20cm→25cm 계수',
					icon: 'mdi:resize',
				},
				{
					value: 'x2.25',
					label: '15cm→22.5cm 계수',
					icon: 'mdi:arrow-up-bold-outline',
				},
				{
					value: '0.64',
					label: '25cm→20cm 계수',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: 'πr²',
					label: '원 면적 공식',
					icon: 'mdi:math-compass',
				},
			],
		},
		{
			type: 'title',
			text: '틀 형태 비교 및 열효율성',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: '원형 틀',
					icon: 'mdi:circle-outline',
					description: '베이킹의 표준입니다. 가장자리에서 중앙으로 매우 균일하게 열이 전달됩니다.',
					points: [
						'최적의 열분배',
						'높은 스펀지 케이크에 이상적',
						'반지름을 기준으로 계산',
					],
				},
				{
					title: '정사각형 틀',
					icon: 'mdi:square-outline',
					description: '오븐 공간 활용을 극대화합니다. 브라우니와 깔끔한 사각 컷팅에 좋습니다.',
					highlight: true,
					points: [
						'모서리가 더 빠르게 익음',
						'자르기 쉬움',
						'한 변 x 한 변으로 계산',
					],
				},
				{
					title: '직사각형 틀',
					icon: 'mdi:rectangle-outline',
					description: '대형 시트 케이크에 완벽합니다. 중앙부 익힘 상태 확인이 필요합니다.',
					points: [
						'가장 높은 총 용량',
						'다용도 활용',
						'가로 x 세로로 계산',
					],
				},
			],
		},
		{
			type: 'title',
			text: '면적 계산의 수학적 원리',
			level: 3,
		},
		{
			type: 'paragraph',
			html: '올바른 변환 계수를 계산하기 위해 다음 기하학 공식을 사용하여 바닥 면적을 비교합니다:',
		},
		{
			type: 'table',
			headers: ['틀 형태', '면적 공식', '핵심 고려사항'],
			rows: [
				['원형', 'π × 반지름²', '반지름은 지름의 절반입니다'],
				['정사각형', '한 변 × 한 변', '내부 치수만 사용하세요'],
				['직사각형', '가로 × 세로', '시트 케이크 및 브라우니의 표준'],
			],
		},
		{
			type: 'title',
			text: '틀 사이즈 변경 시 흔한 실수',
			level: 3,
		},
		{
			type: 'list',
			items: [
				'<strong>단순 비례 계산:</strong> 지름을 두 배로 늘려도 재료는 두 배가 아니라 4배가 됩니다.',
				'<strong>높이 무시:</strong> 깊은 틀은 낮은 온도에서 더 오래 구워야 합니다.',
				'<strong>팽창제 양:</strong> 베이킹파우더가 항상 완벽하게 비례하여 늘어나는 것은 아닙니다.',
				'<strong>수분 증발:</strong> 적은 양의 반죽은 표면적 비율이 높아 더 빠르게 건조될 수 있습니다.',
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: '틀 용량 한계',
			html: '계산된 계수와 관계없이, 틀의 2/3 이상 내용물을 채우지 않도록 주의하세요.',
		},
		{
			type: 'title',
			text: '변환 용어집',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: '변환 계수',
					definition: '새로운 틀에 레시피를 맞추기 위해 모든 재료에 곱해야 하는 숫자.',
				},
				{
					term: '바닥 면적',
					definition: '틀 바닥의 표면적 측정값.',
				},
				{
					term: '반지름',
					definition: '원의 중심에서 가장자리까지의 거리.',
				},
				{
					term: '열전달',
					definition: '열에너지가 틀의 형태와 재질에 따라 이동하는 방식.',
				},
			],
		},
		{
			type: 'tip',
			html: '훨씬 큰 틀로 변경할 때는 중앙까지 균일하게 열이 전달되도록 전용 벨트나 힐링 코어를 활용하세요.',
		},
		{
			type: 'paragraph',
			html: '틀 변환법을 마스터하면 어떤 레시피든 자유롭게 조절할 수 있습니다. 이 계산기를 통해 전문적인 결과를 만들어보세요.',
		},
	],
  bibliography,
  schemas: [appSchema, faqSchema, howToSchema],
};
