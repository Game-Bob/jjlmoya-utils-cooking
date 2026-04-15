import type { ToolLocaleContent } from '../../../types';

const title = "Kalkulator Sourdough Rasio Fermentasi";
const description = "Hitung otomatis proporsi sourdough, tepung, dan air untuk menjaga kultur Anda. Rasio standar atau khusus.";
const faq = [
	{
		question: 'Apa itu rasio 1:1:1?',
		answer: 'Ini adalah rasio paling umum untuk menjaga sourdough pada suhu ruang. Artinya 1 bagian sourdough, 1 bagian tepung, dan 1 bagian air. Berguna untuk penyegaran harian.',
	},
	{
		question: 'Kapan saya menggunakan 1:2:2?',
		answer: 'Rasio 1:2:2 adalah untuk mengaktifkan sourdough. Menghasilkan fermentasi yang lebih lambat tetapi dapat diprediksi. Ideal jika Anda menyimpan kultur di kulkas.',
	},
	{
		question: 'Apa itu "sweet spot" 1:5:5?',
		answer: 'Rasio 1:5:5 adalah "sweet spot" bagi banyak pembuat roti. Memungkinkan fermentasi 8-12 jam pada suhu ruang sebelum sourdough siap.',
	},
	{
		question: 'Bisakah saya menggunakan rasio khusus?',
		answer: 'Tentu saja. Jika Anda memiliki protokol spesifik, Anda dapat memasukkan rasio Anda sendiri. Beberapa pembuat roti menggunakan 1:10:10 untuk fermentasi yang sangat lambat.',
	},
];
const howTo = [
	{
		name: 'Masukkan jumlah total yang Anda butuhkan',
		text: 'Tentukan berat total sourdough yang dibutuhkan untuk resep Anda (misal: 300g untuk roti standar).',
	},
	{
		name: 'Pilih rasio penyegaran',
		text: 'Pilih di antara rasio yang tersedia (Jaga, Aktifkan, Perlambat, Kuat, Sweet Spot) atau buat yang khusus.',
	},
	{
		name: 'Dapatkan jumlah yang akurat',
		text: 'Kalkulator akan menunjukkan kepada Anda berapa banyak ragi sourdough, tepung, dan air yang Anda butuhkan. Campurkan dan biarkan terfermentasi.',
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
	slug: 'sourdough',
	title,
	description,
	faqTitle: 'Pertanyaan Umum',
	faq,
	bibliographyTitle: 'Bibliografi',
	bibliography: [
		{
			name: 'Tartine Bread - Chad Robertson',
			url: 'https://www.penguinrandomhouse.com/books/310016/tartine-bread-by-chad-robertson/',
		},
	],
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Panduan Ahli untuk Pemeliharaan dan Penyegaran Sourdough',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '<strong>Sourdough</strong> bukan sekadar bahan, ia adalah ekosistem hidup dari ragi liar dan bakteri asam laktat (LAB). Kunci dari roti yang luar biasa terletak pada kesehatan kultur ini.',
		},
	],
	ui: {
		totalAmount: 'Jumlah Akhir',
		refreshRatio: 'Rasio Penyegaran',
		maintain: 'Jaga',
		activate: 'Aktifkan',
		retard: 'Perlambat',
		strong: 'Kuat',
		sweetSpot: 'Sweet Spot',
		custom: 'Khusus',
		sourdough: 'Sourdough',
		activeCulture: 'Kultur aktif',
		flour: 'Tepung',
		flourType: 'Kuat atau Whole Wheat',
		water: 'Air',
		chlorineFree: 'Tanpa klorin',
		todayFormula: 'Formula Hari Ini',
		hydration: 'Hidrasi 100 %',
		totalDough: 'Total Adonan',
		mm: 'SD',
	},
	schemas: [faqSchema, howToSchema, appSchema],
};
