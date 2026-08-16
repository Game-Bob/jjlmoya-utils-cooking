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
	{
		question: '計算機はグラム数を四捨五入しますか？',
		answer: 'はい。実用性を考慮して最も近い整数に四捨五入されます。わずかな丸め誤差が発酵に大きく影響することはありません。',
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
	slug: 'sourdough-tane-tsugi-keisanki',
	title,
	description,
	faqTitle: 'よくある質問',
	faq,
	howTo,
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
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '24-26°C',
					label: '最適活性温度',
					icon: 'mdi:thermometer',
				},
				{
					value: '3.8 - 4.2',
					label: '理想のpH値',
					icon: 'mdi:test-tube',
				},
				{
					value: '100%',
					label: '標準加水率',
					icon: 'mdi:water-percent',
				},
				{
					value: 'x2 - x3',
					label: 'ピーク時の膨らみ',
					icon: 'mdi:trending-up',
				},
			],
		},
		{
			type: 'title',
			text: 'サワードウ種の種類と特徴の比較',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: '液状サワードウ (加水率 100%)',
					icon: 'mdi:water',
					description: '現代の製パンで最も一般的なスタイル。混ぜやすく本こね生地にも素早く馴染みます。',
					points: [
						'発酵スピードが早い',
						'マイルドで爽やかな乳酸風味',
						'計量や種継ぎが簡単',
						'バゲットやハード系パンに最適',
					],
				},
				{
					title: '固形サワードウ (パスタ・マードレ)',
					icon: 'mdi:bread-slice-outline',
					description: 'イタリア伝統のスタイル。加水率は通常50%程度。強い発酵力を持ちます。',
					highlight: true,
					points: [
						'ゆっくりと安定した発酵',
						'酢酸の風味が際立つ',
						'リッチな生地を押し上げる強い力',
						'パネットーネやブリオッシュに最適',
					],
				},
			],
		},
		{
			type: 'title',
			text: '種継ぎ比率の数学的な意味',
			level: 3,
		},
		{
			type: 'paragraph',
			html: '比率は「元の種」に対する「小麦粉」と「水」の割合を示します。たとえば 1:2:2 は、元の種1に対して小麦粉2、水2を意味します。',
		},
		{
			type: 'table',
			headers: ['比率', '推奨される用途', '推定時間 (24°C)', '主なメリット'],
			rows: [
				['1:1:1', '毎日の維持管理', '4-6時間', '素早い手入れ'],
				['1:2:2', '仕込み前の活性化', '6-8時間', '酸味のバランス'],
				['1:5:5', '標準的なパン仕込み', '8-12時間', 'ピーク時間の予測のしやすさ'],
				['1:10:10', '長時間の種継ぎ間隔', '16-24時間', '柔軟なスケジュール管理'],
			],
		},
		{
			type: 'title',
			text: '種継ぎに使用する小麦粉の選び方',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'ライ麦全粒粉',
					icon: 'mdi:grain',
					description: '野生酵母にとってのスーパーフード。小麦よりも栄養素と酵素が豊富です。',
					points: [
						'爆発的な発酵活性力',
						'深みのある大地の香りを醸し出す',
						'酸度レベルをより安定して維持',
					],
				},
				{
					title: '白強力粉',
					icon: 'mdi:shaker-outline',
					description: 'サワードウの酸味がパン全体の味を邪魔しない、マイルドな風味を求める方に適しています。',
					points: [
						'よりニュートラルで汎用性の高い味わい',
						'気泡の観察がとても容易',
						'過発酵になりにくい',
					],
				},
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: '種が空腹（栄養不足）を起こしているサイン',
			html: '表面に暗色の液体（フゼル酒/hooch）が溜まる、強い酢臭やアセトン臭がする、あるいはピークに達したあとすぐに潰れる場合は、より高い種継ぎ比率（より多くのエサ）が必要です。',
		},
		{
			type: 'title',
			text: 'サワードウの専門用語集',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'ルヴァン (Levain)',
					definition: '元種から特定のパンレシピのために仕込む中種の呼び名。',
				},
				{
					term: 'フゼル (Hooch)',
					definition: '酵母がエサを使い果たしたときに生成されるアルコールと水の層。',
				},
				{
					term: '活性ピーク (Peak)',
					definition: '体積膨張と酵母密度が最大になる瞬間。パン生地を捏ね始める最適なタイミング。',
				},
				{
					term: '乳酸菌 (LAB)',
					definition: '風味や保存性を高める有機酸を生成する重要な微生物。',
				},
			],
		},
		{
			type: 'tip',
			title: 'フロートテスト（浮力テスト）',
			html: '種が使える状態か確かめるには、小さじ1杯の種を水の入ったグラスに落とします。浮いてくれば、十分なCO2を保持しています。',
		},
		{
			type: 'paragraph',
			html: '当計算機を使用することで、製パンプロセスを標準化し、パンの生物学的な仕組みをより深く理解できるようになります。',
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
