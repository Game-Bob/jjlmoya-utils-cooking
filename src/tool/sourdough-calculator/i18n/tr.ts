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
	slug: 'eksi-maya',
	title,
	description,
	faqTitle: 'Sıkça Sorulan Sorular',
	faq,  howTo,
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
