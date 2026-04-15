import type { ToolLocaleContent } from '../../../types';

const title = 'ケーキ型サイズ換算計算機';
const description =
	'あらゆるレシピを手持ちの型に合わせて調整。丸型、角型、長方形の変換係数をプロ仕様の精度で自動計算します。';

const faq = [
	{
		question: '変換係数はどのように計算されますか？',
		answer:
			'変換係数は、使用したい型の面積を、元のレシピの型の面積で割ることで算出されます。例えば結果が1.5であれば、各材料の分量に1.5を掛ければ正しい分量になります。',
	},
	{
		question: '丸型から角型への換算は可能ですか？',
		answer:
			'はい。このツールは正確な幾何学公式を用いて、形状に関わらず面積を比較します。サイズを入力するだけで、システムが自動的に面積を等価計算します。',
	},
	{
		question: '型の高さはどう考慮すればよいですか？',
		answer:
			'このツールは最も重要な底面積に焦点を当てています。お使いの型が元の型より極端に高かったり低かったりする場合は、焼き時間を多少調整する必要があるかもしれません。',
	},
	{
		question: '材料リストに項目を追加するには？',
		answer:
			'下部のボタンをクリックして新しい行を追加します。材料名と元の分量を入力すると、即座に換算後の分量が表示されます。',
	},
];

const howTo = [
	{
		name: '元のレシピの型を設定',
		text: '作りたいレシピが元々想定している型の形状とサイズを選択します。',
	},
	{
		name: '自分の型を設定',
		text: '手元にある型のサイズを入力します。即座に変換係数が計算されます。',
	},
	{
		name: '材料計算機を使用',
		text: 'レシピの材料を追加して、自分の型に必要な正確な分量を確認します。',
	},
	{
		name: '焼き時間を調整',
		text: 'サイズが変わると、設定温度が同じでも焼き時間が変わる場合が多いことを覚えておいてください。',
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
	slug: 'cake-molds',
	title,
	description,
	faqTitle: 'サイズ換算に関するよくある質問',
	bibliographyTitle: '参考文献・資料',

	ui: {
		originalRecipe: '元のレシピ',
		yourMold: '自分の型',
		round: '丸型',
		square: '角型',
		rectangular: '長方形',
		diameter: '直径 (cm)',
		side: '辺 (cm)',
		width: '幅 (cm)',
		length: '長さ (cm)',
		multiplyingFactor: '変換係数',
		equivalentMolds: '型は同じサイズです。そのままの分量で作れます。',
		smallerMold: '型が小さいです。材料に以下の係数を掛けて減らしてください：',
		largerMold: '型が大きいです。材料に以下の係数を掛けて増やしてください：',
		ingredientCalculator: '材料計算機',
		addIngredient: '材料を追加',
		ingredient: '材料',
		original: '元の分量',
		final: '換算後',
		exampleIngredient: '例：薄力粉',
		delete: '削除',
		originalVisualization: '元サイズ',
		yourVisualization: '自分サイズ',
		defaultIngredient1: '薄力粉',
		defaultIngredient2: '砂糖',
		reduce: '減らす',
		increase: '増やす',
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
			text: 'お菓子作りの型サイズ換算完全ガイド',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '異なるサイズの型に合わせて材料を計算することは、プロの製菓において非常に重要です。単なる勘ではなく、<strong>幾何学的な比率</strong>を守ることで、理想的な食感と焼き上がりを維持できます。',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: 'x1.56',
					label: '20cmから25cmへの係数',
					icon: 'mdi:resize',
				},
				{
					value: 'πr²',
					label: '円の面積公式',
					icon: 'mdi:math-compass',
				},
				{
					value: '0.64',
					label: '25cmから20cmへの係数',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: '2/3',
					label: '最大投入量',
					icon: 'mdi:format-vertical-align-top',
				},
			],
		},
		{
			type: 'tip',
			html: '算出された係数に関わらず、型には容量の2/3以上は入れないようにしてください。',
		},
	],
	schemas: [appSchema, faqSchema, howToSchema],
};
