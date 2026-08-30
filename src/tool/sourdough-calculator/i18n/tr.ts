import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Ekşi Maya Hesaplayıcı Fermantasyon Oranları";
const description = "Kültürünüzü korumak için ekşi maya, un ve su oranlarını otomatik olarak hesaplayın. Ön tanımlı veya özel oranlar.";
const faq = [
	{
		question: '1:1:1 oranı ne anlama gelir?',
		answer: 'Oda sıcaklığında besleme için en yaygın orandır. 1 birim ekşi maya, 1 birim un ve 1 birim su anlamına gelir. Günlük beslemeler için uygundur.',
	},
	{
		question: '1:2:2 oranını ne zaman kullanırım?',
		answer: '1:2:2 oranı ekşi mayayı aktive etmek içindir. Daha yavaş ama öngörülebilir bir fermantasyon sağlar. Buzdolabında bekleyen mayayı canlandırmak için idealdir.',
	},
	{
		question: '1:5:5 "sweet spot" nedir?',
		answer: '1:5:5 oranı birçok fırıncı için "ideal nokta"dır. Mayanın hazır hale gelmesi için oda sıcaklığında 8-12 saatlik bir fermantasyon süresi sağlar.',
	},
	{
		question: 'Özel oranlar kullanabilir miyim?',
		answer: 'Kesinlikle. Belirli bir protokolünüz varsa kendi oranlarınızı girebilirsiniz. Bazı fırıncılar çok yavaş fermantasyon için 1:10:10 kullanır.',
	},
	{
		question: 'Hesaplayıcı gramları yuvarlar mı?',
		answer: 'Evet. Pratik kullanım için en yakın tam sayıya yuvarlar. Küçük yuvarlama farkları fermantasyonu önemli ölçüde etkilemez.',
	},
];
const howTo = [
	{
		name: 'İhtiyacınız olan toplam miktarı girin',
		text: 'Tarifiniz için gereken toplam ekşi maya ağırlığını belirleyin (örneğin tipik bir ekmek için 300g).',
	},
	{
		name: 'Besleme oranını seçin',
		text: 'Ön tanımlı oranlardan (Koruma, Aktivasyon, Geciktirme, Güçlü, Sweet Spot) birini seçin veya özel bir oran oluşturun.',
	},
	{
		name: 'Tam miktarları alın',
		text: 'Hesaplayıcı size ne kadar maya, un ve su gerektiğini gösterir. Bunları karıştırın ve mayalanmaya bırakın.',
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
	offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
	slug: 'eksi-maya-hesaplayici',
	title,
	description,
	faqTitle: 'Sıkça Sorulan Sorular',
	faq,
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Ekşi Maya Bakımı ve Beslemesi İçin Usta Rehberi',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '<strong>Ekşi maya</strong> sadece bir malzeme değil, yabani mayalar ve laktik asit bakterilerinden (LAB) oluşan canlı bir ekosistemdir.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '24-26°C',
					label: 'Optimum Sıcaklık',
					icon: 'mdi:thermometer',
				},
				{
					value: '3.8 - 4.2',
					label: 'İdeal pH',
					icon: 'mdi:test-tube',
				},
				{
					value: '100%',
					label: 'Std. Hidrasyon',
					icon: 'mdi:water-percent',
				},
				{
					value: 'x2 - x3',
					label: 'Zirvede Büyüme',
					icon: 'mdi:trending-up',
				},
			],
		},
		{
			type: 'title',
			text: 'Ekşi Maya Türlerinin Karşılaştırılması',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'Sıvı Ekşi Maya (%100 Hidr.)',
					icon: 'mdi:water',
					description: 'Modern fırıncılıkta en yaygın tercih. Karıştırması ve kullanımı kolaydır.',
					points: [
						'Daha hızlı fermantasyon',
						'Daha hafif laktik lezzet',
						'Ölçmesi ve tazelemesi kolay',
						'Baget ve somun ekmekler için ideal',
					],
				},
				{
					title: 'Koyu/Sert Ekşi Maya (Pasta Madre)',
					icon: 'mdi:bread-slice-outline',
					description: 'İtalyan fırıncılığında gelenekseldir. Hidrasyon genelde %50 civarındadır.',
					highlight: true,
					points: [
						'Daha yavaş ve kararlı fermantasyon',
						'Daha asetik lezzet profili',
						'Zengin hamurlar için yüksek kabartma gücü',
						'Panettone ve Brioche için ideal',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Matematiksel Besleme Oranlarını Anlamak',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Oran, Un ve Suya kıyasla maya miktarını gösterir. Örneğin 1:2:2; 1 ölçek maya, 2 ölçek un ve 2 ölçek su demektir.',
		},
		{
			type: 'table',
			headers: ['Oran', 'Önerilen Kullanım', 'Tahmini Süre (24°C)', 'En Büyük Avantaj'],
			rows: [
				['1:1:1', 'Günlük besleme', '4-6 saat', 'Hızlı bakım'],
				['1:2:2', 'Pişirme öncesi aktivasyon', '6-8 saat', 'Asitlik dengesi'],
				['1:5:5', 'Standart ekmek kullanımı', '8-12 saat', 'Öngörülebilir zirve'],
				['1:10:10', 'Uzun süreli bekletme', '16-24 saat', 'Esnek zamanlama'],
			],
		},
		{
			type: 'title',
			text: 'Ekşi Maya Beslemesi İçin Un Seçimi',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'Tam Çavdar Unu',
					icon: 'mdi:grain',
					description: 'Yabani mayalar için süper gıda. Buğdaydan daha fazla besin ve enzim içerir.',
					points: [
						'Patlayıcı fermantasyon aktivitesi',
						'Derin, toprak aromaları katar',
						'Asitlik seviyelerini daha kararlı tutar',
					],
				},
				{
					title: 'Beyaz Buğday Unu',
					icon: 'mdi:shaker-outline',
					description: 'Mayanın ekmek lezzetini baskılamadığı daha hafif bir tat arayanlar için idealdir.',
					points: [
						'Daha nötr ve çok yönlü lezzet',
						'Çok net kabarcık gözlemi',
						'Aşırı fermantasyona daha az eğilimli',
					],
				},
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Acıkmış Bir Ekşi Mayanın Belirtileri',
			html: 'Yüzeyde koyu bir sıvı (hooch) birikmişse, yoğun bir şekilde sirke/aseton kokuyorsa veya zirveden sonra hızla çökmüşse daha yüksek bir besleme oranına ihtiyacı vardır.',
		},
		{
			type: 'title',
			text: 'Teknik Ekşi Maya Sözlüğü',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Levain',
					definition: 'Ana mayadan belirli bir ekmek tarifi için hazırlanan ön maya.',
				},
				{
					term: 'Hooch',
					definition: 'Maya besini tükettiğinde oluşan alkol ve su tabakası.',
				},
				{
					term: 'Aktivite Zirvesi',
					definition: 'Maksimum hacim ve maya yoğunluğu anı. Hamur karıştırmak için ideal an.',
				},
				{
					term: 'Laktik Asit Bakterileri (LAB)',
					definition: 'Lezzet ve raf ömrü sağlayan organik asitleri üretmekten sorumlu mikroorganizmalar.',
				},
			],
		},
		{
			type: 'tip',
			title: 'Yüzme Testi',
			html: 'Mayanızın hazır olup olmadığını kontrol etmek için bir çay kaşığı mayayı bir bardak suya bırakın: yüzüyorsa yeterli CO2 tutmuştur.',
		},
		{
			type: 'paragraph',
			html: 'Hesaplayıcımızı kullanmak pişirme sürecinizi standartlaştırmanıza ve ekmeğinizin biyolojisini daha iyi anlamanıza yardımcı olur.',
		},
	],
	ui: {
		totalAmount: 'Toplam Miktar',
		refreshRatio: 'Besleme Oranı',
		maintain: 'Koru',
		activate: 'Aktive Et',
		retard: 'Geciktir',
		strong: 'Güçlü',
		sweetSpot: 'Sweet Spot',
		custom: 'Özel',
		sourdough: 'Ekşi Maya',
		activeCulture: 'Aktif kültür',
		flour: 'Un',
		flourType: 'Güçlü veya Tam Buğday',
		water: 'Su',
		chlorineFree: 'Klorsuz',
		todayFormula: 'Günün Formülü',
		hydration: 'Hidrasyon %100',
		totalDough: 'Toplam Maya',
		mm: 'EM',
	},
  bibliography,
	schemas: [faqSchema, howToSchema, appSchema],
};
