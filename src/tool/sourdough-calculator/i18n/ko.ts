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
	faq,  howTo,
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
