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
		question: '什么是 1:5:5 的"完美点"（Sweet Spot）？',
		answer: '1:5:5 比例是许多烘焙师的"理想点"。它允许在室温下发酵 8-12 小时后菌种达到巅峰状态。',
	},
	{
		question: '我可以使用自定义比例吗？',
		answer: '当然可以。如果你有特定的操作流程，可以输入自己的比例。有些烘焙师使用 1:10:10 进行极慢速发酵。',
	},
	{
		question: '计算器会对克数进行四舍五入吗？',
		answer: '是的。出于实用性考量，数值会四舍五入到最接近的整数。微小的舍入差异不会对发酵产生明显影响。',
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
	faq,
	howTo,
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
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '24-26°C',
					label: '最佳活性温度',
					icon: 'mdi:thermometer',
				},
				{
					value: '3.8 - 4.2',
					label: '理想 pH 值',
					icon: 'mdi:test-tube',
				},
				{
					value: '100%',
					label: '标准含水量',
					icon: 'mdi:water-percent',
				},
				{
					value: 'x2 - x3',
					label: '巅峰膨胀率',
					icon: 'mdi:trending-up',
				},
			],
		},
		{
			type: 'title',
			text: '不同天然酵母菌种类型对比',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: '液体酸面种 (100% 含水量)',
					icon: 'mdi:water',
					description: '现代手工烘焙中最常见的选择。易于搅拌和融入主面团。',
					points: [
						'发酵速度更快',
						'呈现较温和的乳酸风味',
						'易于称量和续种喂养',
						'法棍和乡村面包的理想选择',
					],
				},
				{
					title: '固体酸面种 (Pasta Madre)',
					icon: 'mdi:bread-slice-outline',
					description: '传统意式烘焙特色。含水量通常在 50% 左右。爆发力强。',
					highlight: true,
					points: [
						'发酵更慢且更稳定',
						'酸爽的乙酸风味更突出',
						'为重油重糖面团提供强大顶升力',
						'潘妮托妮 (Panettone) 和布里欧修理想选择',
					],
				},
			],
		},
		{
			type: 'title',
			text: '理解数学喂养比例',
			level: 3,
		},
		{
			type: 'paragraph',
			html: '比例代表原种（Inoculum）与面粉及水的相对份数。例如 1:2:2 表示 1 份原种加上 2 份面粉和 2 份水。',
		},
		{
			type: 'table',
			headers: ['比例', '推荐用途', '预计时间 (24°C)', '核心优势'],
			rows: [
				['1:1:1', '日常维护', '4-6 小时', '快速喂养'],
				['1:2:2', '烘焙前激活', '6-8 小时', '酸度平衡'],
				['1:5:5', '标准烘焙面团使用', '8-12 小时', '可预测的巅峰时间'],
				['1:10:10', '长时间延缓发酵', '16-24 小时', '灵活的时间安排'],
			],
		},
		{
			type: 'title',
			text: '酸面种喂养的面粉选择',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: '全麦裸麦粉（黑麦粉）',
					icon: 'mdi:grain',
					description: '野生酵母的超级食物。比普通小麦含有更多营养素和酶。',
					points: [
						'爆发性的发酵活性',
						'带来深沉的土地香气',
						'更好地维持酸度稳定',
					],
				},
				{
					title: '白高筋小麦粉',
					icon: 'mdi:shaker-outline',
					description: '适合寻求较温和风味、不希望酵母酸味主导面包风味的人士。',
					points: [
						'风味更中性百搭',
						'非常直观地观察气孔',
						'不易发生过发酵',
					],
				},
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: '天然酵母饥饿的信号',
			html: '如果表面出现暗色液体（Hooch）、散发出强烈的醋味或丙酮味，或者在达到巅峰后迅速塌陷，则需要更高的喂养比例。',
		},
		{
			type: 'title',
			text: '天然酵母专业术语表',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Levain (波兰种/酵头)',
					definition: '从母种中取出并为特定面包食谱单独准备的酵头。',
				},
				{
					term: 'Hooch (酸水/酒精层)',
					definition: '当菌种消耗完所有养分后在表面积聚的水与酒精层。',
				},
				{
					term: '活性巅峰 (Activity Peak)',
					definition: '体积膨胀和酵母密度达到最大的时刻。混合面团的最佳节点。',
				},
				{
					term: '乳酸菌 (LAB)',
					definition: '负责产生有机酸以赋予面包独特风味并延长保质期的微生物。',
				},
			],
		},
		{
			type: 'tip',
			title: '浮力测试 (Float Test)',
			html: '要检查酵母是否可以使用，取一茶匙放入装水的玻璃杯中：如果浮起来，说明它锁住了足够的 CO2。',
		},
		{
			type: 'paragraph',
			html: '使用我们的计算器可以标准化你的烘焙流程，并更深入地理解面包的生物学原理。',
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
