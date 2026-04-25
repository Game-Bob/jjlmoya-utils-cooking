import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'イースト換算：生イースト・ドライイースト・サワードウ';
const description =
	'生イースト、ドライイースト、サワードウスターターを正確に換算します。サワードウを使用する際のレシピ調整計算機能により、完璧な加水率を維持できます。';

const faq = [
	{
		question: '生イーストとドライイーストの違いは何ですか？',
		answer:
			'生イーストは約70%の水分を含んでいますが、ドライイーストは約8%です。換算係数は、ドライ1に対して生イースト3の割合（1:3）です。ドライイーストは力強く保存性が高いため、長期保存に適しています。',
	},
	{
		question: 'サワードウスターターはどのくらい必要ですか？',
		answer:
			'サワードウスターターは通常、加水率100%（粉と水が同量）です。生イースト1gを置き換えるには、5gのスターターが必要です（1:5の比率）。スターターに含まれる粉と水の分を、必ず元のレシピから差し引いて調整してください。',
	},
	{
		question: 'サワードウを使うとき、なぜレシピの調整が必要なのですか？',
		answer:
			'サワードウスターターには、酵母だけでなく粉と水が含まれています。追加すると、レシピにそれらの材料も加わることになります。適切な加水率と構造を保つために、スターター分の粉と水を全体の量から差し引く必要があります。',
	},
	{
		question: 'アクティブドライイーストの代わりにインスタントイーストを使えますか？',
		answer:
			'インスタントイーストは細かく粉砕されたドライイーストの一種です。換算比率は、ドライと生イーストの間で変わらず1:3です。インスタントイーストは粒子が細かいため、水分量をわずかに減らす必要がある場合があります。',
	},
];

const howTo = [
	{
		name: 'イーストの種類を選択',
		text: '手元にあるイーストの種類を選びます：生イースト、ドライイースト（インスタントまたはアクティブ）、サワードウスターター（加水率100%）。',
	},
	{
		name: '分量を入力',
		text: 'グラム単位で分量を入力します。正確な結果を得るために、可能な限りキッチンスケールを使用してください。',
	},
	{
		name: '換算結果を確認',
		text: '3つのタイプすべての相当量が表示されます。サワードウに換算する場合は、レシピから差し引くべき粉と水の量を確認してください。',
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
		selectYeastType: 'イーストの種類を選択',
		freshYeast: '生イースト',
		dryYeast: 'ドライイースト (インスタント)',
		sourdough: 'サワードウスターター (100%)',
		enterAmount: '分量を入力',
		quantity: '分量',
		grams: 'グラム (g)',
		ounces: 'オンス (oz)',
		pounds: 'ポンド (lb)',
		milligrams: 'ミリグラム (mg)',
		reset: 'リセット',
		conversions: '換算結果',
		copy: 'コピー',
		copied: 'コピーしました',
		recipeAdjustment: 'レシピの調整',
		flourSubtract: '粉から差し引く量：',
		waterSubtract: '水から差し引く量：',
	},
	faqTitle: 'よくある質問',
	faq,
	bibliographyTitle: '参考文献とリソース',
	howTo,
	seo: [
		{
			type: 'title',
			text: 'イースト換算の計算式と科学的ガイド',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '<strong>イーストの換算</strong>は、パン作りの一貫性を保つために不可欠です。市販のイーストをサワードウに置き換える場合でも、生イーストとドライイーストの間で調整する場合でも、正確な比率を理解することで、信頼性の高い発酵と安定した結果が得られます。',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '1:3',
					label: 'ドライ対生イースト比',
					icon: 'mdi:scale',
				},
				{
					value: '1:5',
					label: '生イースト対サワードウ',
					icon: 'mdi:flask-outline',
				},
				{
					value: '70%',
					label: '生イーストの水分量',
					icon: 'mdi:water-percent',
				},
				{
					value: '8%',
					label: 'ドライイーストの水分量',
					icon: 'mdi:water-opacity',
				},
			],
		},
		{
			type: 'title',
			text: '膨張剤の種類とその特性',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: '生イースト',
					icon: 'mdi:cube',
					description: 'デンプンと水分の中に浮遊する生きた酵母細胞。',
					points: [
						'効力：100%（基準）',
						'保存期間：冷蔵で2〜3週間',
						'水分含有量：約70%',
						'最適：プロのパン職人、即時使用',
					],
				},
				{
					title: 'ドライイースト (インスタント)',
					icon: 'mdi:spray-bottle',
					description: '乾燥させた酵母細胞。生イーストよりも濃縮されています。',
					points: [
						'効力：生イーストの3倍',
						'保存期間：未開封で1〜2年',
						'水分含有量：約8%',
						'最適：ホームベーカー、長期保存',
					],
				},
				{
					title: 'サワードウスターター',
					icon: 'mdi:flask-outline',
					description: '加水率100%の野生酵母と乳酸菌の培養物。',
					highlight: true,
					points: [
						'効力：1部 ＝ 生イースト5部',
						'保存期間：手入れをすれば半永久的',
						'水分含有量：50%（粉と同量）',
						'最適：複雑な風味、スロー発酵',
					],
				},
			],
		},
		{
			type: 'title',
			text: '換算比率と計算式',
			level: 3,
		},
		{
			type: 'table',
			headers: ['元のイースト', '換算先', '計算式', '例'],
			rows: [
				['生イースト', 'ドライイースト', '生 ÷ 3 ＝ ドライ', '生30g ＝ ドライ10g'],
				['ドライイースト', '生イースト', 'ドライ × 3 ＝ 生', 'ドライ10g ＝ 生30g'],
				['生イースト', 'サワードウ (100%)', '生 × 5 ＝ サワードウ', '生20g ＝ スターター100g'],
				['サワードウ (100%)', '生イースト', 'サワードウ ÷ 5 ＝ 生', 'スターター100g ＝ 生20g'],
				['ドライイースト', 'サワードウ (100%)', 'ドライ × 15 ＝ サワードウ', 'ドライ10g ＝ スターター150g'],
				['サワードウ (100%)', 'ドライイースト', 'サワードウ ÷ 15 ＝ ドライ', 'スターター150g ＝ ドライ10g'],
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: '重要：サワードウ使用時のレシピ調整',
			html: 'イーストをサワードウスターターに置き換える場合は、必ずレシピを調整してください。サワードウスターターの重量の50%は粉、50%は水です。換算で100gのスターターが必要な場合は、適切な加水率を保つために元のレシピから粉50gと水50mlを差し引いてください。',
		},
		{
			type: 'title',
			text: 'イーストの種類による発酵特性',
			level: 3,
		},
		{
			type: 'table',
			headers: ['イーストの種類', '発酵速度', '風味の発達', '二酸化炭素生成量'],
			rows: [
				['生イースト', '速い (2〜3時間)', 'ニュートラル〜穏やか', '多く、急速'],
				['ドライイースト', '中程度 (3〜4時間)', 'やや複雑', '安定している'],
				['サワードウ', '遅い (8〜48時間)', '複雑、酸味がある', '緩やか、持続的'],
			],
		},
		{
			type: 'tip',
			title: 'プロのコツ：温度調整',
			html: 'サワードウによる低温長時間発酵（2〜4°Cで8〜16時間）は、高温発酵に比べて優れた風味と構造を発達させます。これが、プロのベーカリーが長時間発酵パンにサワードウを好む理由です。',
		},
		{
			type: 'paragraph',
			html: '当換算ツールは計算を簡素化します。パン作りの技術向上と風味の追求に集中してください。',
		},
	],

  bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
