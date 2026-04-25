import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "天然酵母（サワードウ）計算機：発酵比率";
const description = "サワードウ（種継ぎ）、小麦粉、水の分量を自動計算します。プリセットされた比率またはカスタム比率で、種を最適な状態に保ちます。";
const faq = [
	{
		question: '1:1:1 の比率とはどういう意味ですか？',
		answer: '常温で種を維持するために最も一般的な比率です。「元の種：小麦粉：水」が1:1:1であることを意味します。毎日種継ぎをする場合に適しています。',
	},
	{
		question: 'どんな時に 1:2:2 を使いますか？',
		answer: '種を活性化させたい時に使います。1:1:1よりも発酵はゆっくり進みますが、より安定した結果が得られます。冷蔵保存していた種を使い始める時に最適です。',
	},
	{
		question: '1:5:5 の「スウィートスポット」とは？',
		answer: '多くのパン職人にとって理想的な比率（スウィートスポット）です。常温で8〜12時間かけて発酵が進み、使用するタイミングをコントロールしやすくなります。',
	},
	{
		question: 'カスタム比率を使用できますか？',
		answer: 'もちろんです。独自の作り方（プロトコル）がある場合は、好きな数値を入力できます。非常にゆっくり発酵させたい場合は 1:10:10 なども使われます。',
	},
];
const howTo = [
	{
		name: '必要な総量を入力',
		text: 'レシピで必要なサワードウの総重量を入力します（例：一般的な食パン1斤分なら300gなど）。',
	},
	{
		name: '種継ぎ比率を選択',
		text: 'プリセット（維持、活性化、遅延、強力、スウィートスポット）から選ぶか、カスタム設定します。',
	},
	{
		name: '正確な分量を確認',
		text: '計算機が「元の種」「小麦粉」「水」の正確な重量を表示します。これらを混ぜ合わせ、決まった時間発酵させます。',
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
	offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
};

export const content: ToolLocaleContent = {
	slug: 'sourdough-starter-feeding-calculator-ratio-proportions',
	title,
	description,
	faqTitle: 'よくある質問',
	faq,  howTo,
	seo: [
		{
			type: 'title',
			text: 'サワードウ（天然酵母）の維持と種継ぎのマスターガイド',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '<strong>サワードウ</strong>は単なる材料ではなく、野生酵母と乳酸菌（LAB）の生きたエコシステムです。素晴らしいパンを作る鍵は、この種の健康状態をいかに管理するかにあります。',
		},
	],
	ui: {
		totalAmount: '最終的な量',
		refreshRatio: '種継ぎ比率',
		maintain: '維持',
		activate: '活性化',
		retard: '遅延',
		strong: '強力',
		sweetSpot: 'スウィートスポット',
		custom: 'カスタム',
		sourdough: 'サワードウ（種）',
		activeCulture: '元の種',
		flour: '小麦粉',
		flourType: '強力粉または全粒粉',
		water: '水',
		chlorineFree: '塩素を含まない水',
		todayFormula: '今日の配合',
		hydration: '加水率 100 %',
		totalDough: '種の総量',
		mm: 'MM',
	},
  bibliography,
	schemas: [faqSchema, howToSchema, appSchema],
};
