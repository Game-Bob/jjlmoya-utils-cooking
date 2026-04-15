import type { ToolLocaleContent } from '../../../types';

const title = '烘焙模具换算计算器';
const description =
	'将任何烘焙食谱适配到你的模具中。自动计算圆形、方形和长方形模具的转换系数，确保专业级的精准度。';

const faq = [
	{
		question: '转换系数的具体工作原理是什么？',
		answer:
			'系数是通过你的目标模具面积除以原食谱模具面积得出的。如果结果是 1.5，意味着你需要将每种原料乘以这个数值。',
	},
	{
		question: '我可以将圆形模具换算成方形模具吗？',
		answer:
			'可以，本工具使用精确的几何公式来对比面积，无论形状如何。只需输入尺寸，系统就会自动进行面积等效换算。',
	},
	{
		question: '模具的高度会如何影响换算？',
		answer:
			'本工具专注于底面积，这是最关键的因素。如果你的模具明显比原模具高或矮，你可能需要在烘烤时间上进行微调。',
	},
	{
		question: '如何向列表中添加配料？',
		answer:
			'点击底部的按钮添加新行。输入配料名称和原始重量，换算后的重量将立即实时更新。',
	},
];

const howTo = [
	{
		name: '定义原食谱模具',
		text: '选择原食谱设计的模具形状和尺寸。',
	},
	{
		name: '设置你的自有模具',
		text: '输入你家中模具的尺寸。系统将立即计算出转换系数。',
	},
	{
		name: '使用配料计算器',
		text: '添加食谱中的配料，查看适配你现有模具的精确分量。',
	},
	{
		name: '调整烘烤设置',
		text: '请记住，即使温度保持一致，尺寸的改变通常也意味着烘烤时间的变化。',
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
	slug: 'baking-molds',
	title,
	description,
	faqTitle: '关于换算的常见问题',
	bibliographyTitle: '参考资料',

	ui: {
		originalRecipe: '原食谱',
		yourMold: '你的模具',
		round: '圆形',
		square: '方形',
		rectangular: '长方形',
		diameter: '直径 (cm)',
		side: '边长 (cm)',
		width: '宽度 (cm)',
		length: '长度 (cm)',
		multiplyingFactor: '转换系数',
		equivalentMolds: '模具大小相同。使用原配方分量即可。',
		smallerMold: '你的模具较小。请将原料分量乘以',
		largerMold: '你的模具较大。请将原料分量乘以',
		ingredientCalculator: '配料计算器',
		addIngredient: '添加配料',
		ingredient: '配料',
		original: '原重量',
		final: '换算后',
		exampleIngredient: '例：面粉',
		delete: '删除',
		originalVisualization: '原规格',
		yourVisualization: '你的',
		defaultIngredient1: '面粉',
		defaultIngredient2: '砂糖',
		reduce: '减少',
		increase: '增加',
	},

	faq,
	bibliography: [
		{
			name: 'Baking Science and Technology - E.J. Pyler',
			url: 'https://www.bakingbusiness.com/',
		},
		{
			name: 'The Professional Pastry Chef - Bo Friberg',
			url: 'https://www.wiley.com/',
		},
	],
	howTo,
	seo: [
		{
			type: 'title',
			text: '根据模具规格科学换算食谱指南',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '在专业烘焙中，将食谱适配到不同的模具必须遵循<strong>几何比例</strong>，以此来保持理想的质地和成熟度。',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: 'x1.56',
					label: '20cm换算至25cm系数',
					icon: 'mdi:resize',
				},
				{
					value: 'πr²',
					label: '圆面积公式',
					icon: 'mdi:math-compass',
				},
				{
					value: '0.64',
					label: '25cm换算至20cm系数',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: '2/3',
					label: '最高建议盛放量',
					icon: 'mdi:format-vertical-align-top',
				},
			],
		},
		{
			type: 'tip',
			html: '无论计算出的系数如何，请务必确保面糊注入量不超过模具容量的 2/3。',
		},
	],
	schemas: [appSchema, faqSchema, howToSchema],
};
