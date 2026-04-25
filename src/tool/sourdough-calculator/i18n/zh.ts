import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "天然酵母（酸面种）发酵比例计算器";
const description = "自动计算酸面种、面粉和水的比例以维护你的菌种。提供预设比例或自定义比例。";
const faq = [
	{
		question: '什么是 1:1:1 比例？',
		answer: '这是在室温下维护菌种最常用的比例。意味着 1 份酸面种原种、1 份面粉和 1 份水。适用于每日喂养。',
	},
	{
		question: '什么时候使用 1:2:2 比例？',
		answer: '1:2:2 比例用于激活酸面种。它产生的发酵较慢但更可控。如果你将菌种冷藏并想要恢复其活力，这是理想的选择。',
	},
	{
		question: '什么是 1:5:5 的“完美点”（Sweet Spot）？',
		answer: '1:5:5 比例是许多烘焙师的“理想点”。它允许在室温下发酵 8-12 小时后菌种达到巅峰状态。',
	},
	{
		question: '我可以使用自定义比例吗？',
		answer: '当然可以。如果你有特定的操作流程，可以输入自己的比例。有些烘焙师使用 1:10:10 进行极慢速发酵。',
	},
];
const howTo = [
	{
		name: '输入你需要的总量',
		text: '确定食谱所需的酸面种总重量（例如，制作一个典型面包需要 300g）。',
	},
	{
		name: '选择喂养比例',
		text: '在预设比例（维护、激活、延缓、强化、理想点）中选择，或创建自定义比例。',
	},
	{
		name: '获取精确数值',
		text: '计算器将显示你需要多少原种、面粉和水。混合这些原料并按流程开始发酵。',
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
	offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
};

export const content: ToolLocaleContent = {
	slug: 'sourdough-starter-feeding-calculator-ratio-proportions',
	title,
	description,
	faqTitle: '常见问题',
	faq,  howTo,
	seo: [
		{
			type: 'title',
			text: '天然酵母（酸面种）维护与喂养大师指南',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '<strong>天然酵母</strong>不仅仅是一种配料，它是野生酵母和乳酸菌（LAB）组成的活性生态系统。制作卓越面包的关键在于菌种的健康。',
		},
	],
	ui: {
		totalAmount: '最终总量',
		refreshRatio: '喂养比例',
		maintain: '维护',
		activate: '激活',
		retard: '延缓',
		strong: '强化',
		sweetSpot: '理想点',
		custom: '自定义',
		sourdough: '酸面种',
		activeCulture: '活性原种',
		flour: '面粉',
		flourType: '高筋或全麦粉',
		water: '水',
		chlorineFree: '无氯水',
		todayFormula: '今日配方',
		hydration: '含水量 100 %',
		totalDough: '面种总量',
		mm: 'MM',
	},
  bibliography,
	schemas: [faqSchema, howToSchema, appSchema],
};
