import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

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
	{
		question: '对于超大尺寸烤盘，换算结果可靠吗？',
		answer:
			'在数学上完全可靠，但请注意超大蛋糕中心位置需要更长时间成熟。你可能需要适当降低烤箱温度。',
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
	slug: 'cake-pan-size-converter-calculator',
	title,
	description,
	faqTitle: '关于换算的常见问题',	ui: {
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

	faq,	howTo,
	seo: [
		{
			type: 'title',
			text: '根据模具规格科学换算食谱高级指南',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '在专业烘焙中，将食谱适配到不同的模具必须遵循<strong>几何比例</strong>，以此来保持理想的质地、高度和湿度。',
		},
		{
			type: 'diagnostic',
			variant: 'info',
			title: '底面积的秘密',
			html: '正确换算的秘密在于底面积而非直径。圆形模具直径增加 25%，底面积和所需配料几乎翻倍。',
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
					value: 'x2.25',
					label: '15cm换算至22.5cm系数',
					icon: 'mdi:arrow-up-bold-outline',
				},
				{
					value: '0.64',
					label: '25cm换算至20cm系数',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: 'πr²',
					label: '圆面积公式',
					icon: 'mdi:math-compass',
				},
			],
		},
		{
			type: 'title',
			text: '模具形状对比与烘烤热效率',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: '圆形模具',
					icon: 'mdi:circle-outline',
					description: '烘焙界的标准。提供从边缘到中心极其均匀的热量传导。',
					points: [
						'最佳热量分布',
						'非常适合高戚风/海绵蛋糕',
						'通过半径计算',
					],
				},
				{
					title: '方形模具',
					icon: 'mdi:square-outline',
					description: '最大化利用烤箱空间。非常适合布朗尼和切块蛋糕。',
					highlight: true,
					points: [
						'边角成熟更快',
						'易于规整切块',
						'通过 边长 x 边长 计算',
					],
				},
				{
					title: '长方形模具',
					icon: 'mdi:rectangle-outline',
					description: '大容量烤盘蛋糕的首选。需要密切关注中心成熟度。',
					points: [
						'最高总容量',
						'用途广泛',
						'通过 宽度 x 长度 计算',
					],
				},
			],
		},
		{
			type: 'title',
			text: '面积换算背后的数学公式',
			level: 3,
		},
		{
			type: 'paragraph',
			html: '为了计算正确的换算系数，我们使用以下几何公式对比模具底面积：',
		},
		{
			type: 'table',
			headers: ['模具形状', '面积公式', '关键注意事项'],
			rows: [
				['圆形', 'π × 半径²', '半径是直径的一半'],
				['方形', '边长 × 边长', '仅测量内径尺寸'],
				['长方形', '宽度 × 长度', '片状蛋糕和布朗尼的标配'],
			],
		},
		{
			type: 'title',
			text: '更换模具尺寸时的常见误区',
			level: 3,
		},
		{
			type: 'list',
			items: [
				'<strong>线性按比例换算:</strong> 直径翻倍并不意味着配料翻倍，而是翻 4 倍。',
				'<strong>忽视模具深度:</strong> 较深的模具需要降低温度并延长烘烤时间。',
				'<strong>膨松剂用量:</strong> 泡打粉和酵母并不总是需要严格按比例线性增加。',
				'<strong>水分蒸发:</strong> 较少分量的面糊表面积占比较高，更容易受热变干。',
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: '模具容量极限',
			html: '无论计算出的系数如何，请务必确保面糊注入量不超过模具容量的 2/3。',
		},
		{
			type: 'title',
			text: '烘焙换算学术语表',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: '转换系数',
					definition: '用于乘以原食谱所有配料分量的换算数值。',
				},
				{
					term: '底面积',
					definition: '模具底部的表面积测量值。',
				},
				{
					term: '半径',
					definition: '圆心到圆周边缘的距离。',
				},
				{
					term: '热传递',
					definition: '热能在不同材质和形状的模具中的传导方式。',
				},
			],
		},
		{
			type: 'tip',
			html: '当换算到非常大的模具时，建议使用烤盘保温带或中心导热柱，以确保受热均匀。',
		},
		{
			type: 'paragraph',
			html: '掌握模具换算让你在烘焙时拥有充分的创作自由。使用此计算器获得稳定专业的烘焙成果。',
		},
	],
  bibliography,
  schemas: [appSchema, faqSchema, howToSchema],
};
