import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = '酵母换算器：鲜酵母、干酵母和天然酵种';
const description =
	'在鲜酵母、干酵母和天然酵种（Sourdough Starter）之间进行精确换算。使用天然酵种时，自动提供配方调整建议，以保持完美的水分比例。';

const faq = [
	{
		question: '鲜酵母和干酵母有什么区别？',
		answer:
			'鲜酵母含有约 70% 的水分，而干酵母仅含约 8%。换算比例通常为：1 份干酵母等于 3 份鲜酵母。干酵母活性更集中，保质期更长，非常适合长期储存。',
	},
	{
		question: '我需要多少天然酵种？',
		answer:
			'天然酵种默认通常为 100% 含水量（粉水比例 1:1）。要替换 1 克鲜酵母，通常需要 5 克天然酵种（比例 1:5）。请务必根据酵种中含有的面粉和水分来调整原配方。',
	},
	{
		question: '为什么使用天然酵种需要调整配方？',
		answer:
			'天然酵种本身由面粉和水组成。添加酵种相当于在配方中额外增加了这些材料。为了保持正确的含水量和面团结构，必须从配方总量中扣除等量的面粉和水。',
	},
	{
		question: '我可以用速发干酵母代替活性干酵母吗？',
		answer:
			'速发干酵母（Instant Yeast）是一种研磨更细的干酵母。其与鲜酵母的换算比例依然是 1:3。由于速发酵母颗粒极细，可能需要稍微调整液体的添加方式。',
	},
];

const howTo = [
	{
		name: '选择酵母类型',
		text: '选择你手头的酵母种类：鲜酵母（压榨酵母）、干酵母（速发或活性）或天然酵种（100% 含水量）。',
	},
	{
		name: '输入用量',
		text: '以克为单位输入用量。为了获得最佳效果，建议使用厨房秤进行精确称量。',
	},
	{
		name: '查看换算结果',
		text: '工具会显示所有三种类型的对应量。如果换算为天然酵种，请注意从原配方中减去相应的面粉和水。',
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
		selectYeastType: '选择酵母类型',
		freshYeast: '鲜酵母（块状）',
		dryYeast: '干酵母（速发）',
		sourdough: '天然酵种 (100%)',
		enterAmount: '输入用量',
		quantity: '用量',
		grams: '克 (g)',
		ounces: '盎司 (oz)',
		pounds: '磅 (lb)',
		milligrams: '毫克 (mg)',
		reset: '重置',
		conversions: '换算结果',
		copy: '复制',
		copied: '已复制！',
		recipeAdjustment: '配方调整',
		flourSubtract: '面粉需扣除：',
		waterSubtract: '水分需扣除：',
	},
	faqTitle: '常见问题',
	faq,
	bibliographyTitle: '参考文献与资源',
	howTo,
	seo: [
		{
			type: 'title',
			text: '酵母换算公式与烘焙科学指南',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '<strong>酵母换算</strong>是保证烘焙成品稳定性的关键。无论您是将商业酵母替换为天然酵种，还是在鲜酵母与干酵母之间进行切换，掌握精确的比例都能确保发酵的可靠性和成品的一致性。',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '1:3',
					label: '干鲜比例',
					icon: 'mdi:scale',
				},
				{
					value: '1:5',
					label: '鲜酵母/酵种比例',
					icon: 'mdi:flask-outline',
				},
				{
					value: '70%',
					label: '鲜酵母水分',
					icon: 'mdi:water-percent',
				},
				{
					value: '8%',
					label: '干酵母水分',
					icon: 'mdi:water-opacity',
				},
			],
		},
		{
			type: 'title',
			text: '膨胀剂的类型及其特性',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: '鲜酵母（压榨酵母）',
					icon: 'mdi:cube',
					description: '悬浮在淀粉和水分中的活性酵母细胞。',
					points: [
						'效能：100%（基准）',
						'保质期：冷藏 2-3 周',
						'含水量：约 70%',
						'适用：专业烘焙师，即时使用',
					],
				},
				{
					title: '干酵母（速发）',
					icon: 'mdi:spray-bottle',
					description: '脱水的酵母细胞，浓度比鲜酵母更高。',
					points: [
						'效能：鲜酵母的 3 倍',
						'保质期：未开封 1-2 年',
						'含水量：约 8%',
						'适用：家庭烘焙，长期储存',
					],
				},
				{
					title: '天然酵种',
					icon: 'mdi:flask-outline',
					description: '100% 含水量的野生酵母与乳酸菌培养物。',
					highlight: true,
					points: [
						'效能：1 份 ＝ 鲜酵母 5 份',
						'保质期：妥善喂养可无限期保存',
						'含水量：50%（粉水等量）',
						'适用：复杂风味，慢发酵',
					],
				},
			],
		},
		{
			type: 'title',
			text: '换算比例与数学公式',
			level: 3,
		},
		{
			type: 'table',
			headers: ['原始酵母', '目标酵母', '换算公式', '示例'],
			rows: [
				['鲜酵母', '干酵母', '鲜酵母 ÷ 3 ＝ 干酵母', '30g 鲜 ＝ 10g 干'],
				['干酵母', '鲜酵母', '干酵母 × 3 ＝ 鲜酵母', '10g 干 ＝ 30g 鲜'],
				['鲜酵母', '天然酵种 (100%)', '鲜酵母 × 5 ＝ 天然酵种', '20g 鲜 ＝ 100g 酵种'],
				['天然酵种 (100%)', '鲜酵母', '天然酵种 ÷ 5 ＝ 鲜酵母', '100g 酵种 ＝ 20g 鲜'],
				['干酵母', '天然酵种 (100%)', '干酵母 × 15 ＝ 天然酵种', '10g 干 ＝ 150g 酵种'],
				['天然酵种 (100%)', '干酵母', '天然酵种 ÷ 15 ＝ 干酵母', '150g 酵种 ＝ 10g 干'],
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: '关键提示：使用天然酵种时的配方调整',
			html: '当使用天然酵种替代干/鲜酵母时，您必须调整原配方。天然酵种包含 50% 的面粉和 50% 的水。如果换算结果需要 100 克酵种，请从原配方中减去 50 克面粉和 50 毫升水，以保持正确的水分比例。',
		},
		{
			type: 'title',
			text: '不同酵母类型的发酵特性',
			level: 3,
		},
		{
			type: 'table',
			headers: ['酵母类型', '发酵速度', '风味发展', '二氧化碳产量'],
			rows: [
				['鲜酵母', '快 (2-3 小时)', '中性至清淡', '产量高且迅速'],
				['干酵母', '中 (3-4 小时)', '略显复杂', '稳定持续'],
				['天然酵种', '慢 (8-48 小时)', '复杂且带酸味', '逐渐且持久'],
			],
		},
		{
			type: 'tip',
			title: '专业技巧：温度调整',
			html: '使用天然酵种进行冷藏发酵（2-4°C，持续 8-16 小时）能产生比常温发酵更优越的风味和组织结构。这就是为什么专业面包房在制作长时发酵面包时更青睐天然酵种。',
		},
		{
			type: 'paragraph',
			html: '我们的换算器简化了繁琐的计算，让您可以专注于精进烘焙技艺和探索风味。',
		},
	],

  bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
