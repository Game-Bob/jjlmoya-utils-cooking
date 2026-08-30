import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

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
	{
		question: '非常に大きな天板への換算も正確ですか？',
		answer:
			'数学的には正確ですが、非常に大きなケーキは中央部まで火が通るのに時間がかかります。オーブンの温度を少し下げて調整することをおすすめします。',
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
	slug: 'cake-pan-size-converter-calculator',
	title,
	description,
	faqTitle: 'サイズ換算に関するよくある質問',	ui: {
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

	faq,	howTo,
	seo: [
		{
			type: 'title',
			text: 'お菓子作りの型サイズ換算完全ガイド',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '異なるサイズの型に合わせて材料を計算することは、プロの製菓において非常に重要です。単なる勘ではなく、<strong>幾何学的な比率</strong>を守ることで、理想的な食感、高さ、水分量を維持できます。',
		},
		{
			type: 'diagnostic',
			variant: 'info',
			title: '底面積の秘密',
			html: '適切な換算の秘密は直径ではなく底面積にあります。丸型の直径を25%大きくすると、底面積と必要な材料はほぼ倍増します。',
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
					value: 'x2.25',
					label: '15cmから22.5cmへの係数',
					icon: 'mdi:arrow-up-bold-outline',
				},
				{
					value: '0.64',
					label: '25cmから20cmへの係数',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: 'πr²',
					label: '円の面積公式',
					icon: 'mdi:math-compass',
				},
			],
		},
		{
			type: 'title',
			text: '型の形状比較と熱効率',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: '丸型',
					icon: 'mdi:circle-outline',
					description: '製菓の王道。外側から中央に向かって非常に均一に火が通ります。',
					points: [
						'最適な熱分散',
						'背の高いスポンジに最適',
						'半径から計算',
					],
				},
				{
					title: '角型',
					icon: 'mdi:square-outline',
					description: 'オーブン内のスペースを最大限に活用。ブラウニーや四角いカットに最適。',
					highlight: true,
					points: [
						'四隅の火通りが早い',
						'切り分けが容易',
						'一辺 x 一辺で計算',
					],
				},
				{
					title: '長方形型',
					icon: 'mdi:rectangle-outline',
					description: '天板ケーキやシートケーキに最適。中央の焼き上がりチェックが必要です。',
					points: [
						'最大級の容量',
						'多目的な用途',
						'幅 x 奥行きで計算',
					],
				},
			],
		},
		{
			type: 'title',
			text: '底面積計算の数学的根拠',
			level: 3,
		},
		{
			type: 'paragraph',
			html: '正確な換算倍率を計算するため、以下の幾何学公式を用いて底面積を比較します：',
		},
		{
			type: 'table',
			headers: ['型の形状', '面積公式', '重要な注意点'],
			rows: [
				['丸型', 'π × 半径²', '半径は直径の半分です'],
				['角型', '一辺 × 一辺', '内寸のみを使用してください'],
				['長方形型', '幅 × 奥行き', 'シートケーキやブラウニーの標準'],
			],
		},
		{
			type: 'title',
			text: '型サイズ変更時のよくある失敗',
			level: 3,
		},
		{
			type: 'list',
			items: [
				'<strong>単純な比例計算:</strong> 直径を2倍にしても材料は2倍ではなく、4倍になります。',
				'<strong>型の深さの軽視:</strong> 深い型は低温でじっくり焼く必要があります。',
				'<strong>膨張剤の量:</strong> ベーキングパウダーは必ずしも単純な倍率計算通りにいかない場合があります。',
				'<strong>水分蒸発:</strong> 少量の生地は表面積の比率が高いため乾燥しやすくなります。',
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: '型の容量限界',
			html: '計算結果に関わらず、生地の膨らみを考慮して型には8分目（2/3）以上入れないでください。',
		},
		{
			type: 'title',
			text: '製菓・幾何学用語集',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: '換算倍率',
					definition: '新しい型にレシピを適応させるために、すべての材料に掛ける数値。',
				},
				{
					term: '底面積',
					definition: '型の底面の測定値。お菓子作りにおいて生地量を決める最も重要な要素です。',
				},
				{
					term: '半径',
					definition: '円の中心から端までの距離。公式πr²の必須数値。',
				},
				{
					term: '熱伝導',
					definition: '熱エネルギーが型を通じて移動する仕組み。形状や材質によって大きく異なります。',
				},
			],
		},
		{
			type: 'tip',
			html: '非常に大きな型に変更する場合は、周りが焦げずに中央まで均一に焼けるようロールケーキ用帯やヒートコアをご活用ください。',
		},
		{
			type: 'paragraph',
			html: '型の換算マスターになれば、どんな型でもレシピを自由自在にアレンジできます。この計算機を使ってプロのような仕上がりを目指しましょう。',
		},
	],
  bibliography,
  schemas: [appSchema, faqSchema, howToSchema],
};
