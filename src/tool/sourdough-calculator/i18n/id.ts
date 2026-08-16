import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

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
	{
		question: 'Apakah kalkulator pembulatan gram?',
		answer: 'Ya. Kalkulator membulatkan ke angka bulat terdekat untuk kepraktisan. Perbedaan pembulatan kecil tidak akan mempengaruhi fermentasi secara signifikan.',
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
	slug: 'kalkulator-ragi-sourdough',
	title,
	description,
	faqTitle: 'Pertanyaan Umum',
	faq,
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
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '24-26°C',
					label: 'Suhu Optimum',
					icon: 'mdi:thermometer',
				},
				{
					value: '3.8 - 4.2',
					label: 'pH Ideal',
					icon: 'mdi:test-tube',
				},
				{
					value: '100%',
					label: 'Hidrasi Std.',
					icon: 'mdi:water-percent',
				},
				{
					value: 'x2 - x3',
					label: 'Pertumbuhan di Puncak',
					icon: 'mdi:trending-up',
				},
			],
		},
		{
			type: 'title',
			text: 'Perbandingan Jenis Kultur Sourdough',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'Sourdough Cair (100% Hidrasi)',
					icon: 'mdi:water',
					description: 'Pilihan paling umum dalam pembuatan roti artisan modern. Mudah dicampur dan digunakan.',
					points: [
						'Kecepatan fermentasi lebih cepat',
						'Profil rasa lebih asam laktat (halus)',
						'Mudah diukur dan disegarkan',
						'Ideal untuk baguette dan roti tawar',
					],
				},
				{
					title: 'Sourdough Padat (Pasta Madre)',
					icon: 'mdi:bread-slice-outline',
					description: 'Tradisional di Italia. Hidrasi biasanya sekitar 50%. Memiliki daya kembang kuat.',
					highlight: true,
					points: [
						'Fermentasi lebih lambat dan stabil',
						'Profil rasa lebih asam asetat',
						'Daya kembang lebih besar untuk adonan kaya',
						'Ideal untuk Panettone dan Brioche',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Memahami Rasio Matematika Penyegaran',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Rasio menunjukkan bagian inokulum terhadap Tepung dan Air. Contoh: 1:2:2 berarti 1 bagian kultur untuk 2 bagian tepung dan 2 bagian air.',
		},
		{
			type: 'table',
			headers: ['Rasio', 'Penggunaan Direkomendasikan', 'Estimasi Waktu (24°C)', 'Keuntungan Utama'],
			rows: [
				['1:1:1', 'Pemberian makan harian', '4-6 jam', 'Perawatan cepat'],
				['1:2:2', 'Aktivasi sebelum memanggang', '6-8 jam', 'Keseimbangan keasaman'],
				['1:5:5', 'Penggunaan adonan standar', '8-12 jam', 'Puncak terprediksi'],
				['1:10:10', 'Penundaan jangka panjang', '16-24 jam', 'Manajemen jadwal fleksibel'],
			],
		},
		{
			type: 'title',
			text: 'Pemilihan Tepung untuk Pemeliharaan Sourdough',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'Tepung Rye/Gandum Hitam Utuh',
					icon: 'mdi:grain',
					description: 'Makanan super untuk ragi liar. Mengandung lebih banyak nutrisi dan enzim daripada gandum biasa.',
					points: [
						'Aktivitas fermentasi yang sangat cepat',
						'Memberikan aroma yang dalam dan khas',
						'Menjaga tingkat keasaman lebih stabil',
					],
				},
				{
					title: 'Tepung Gandum Putih',
					icon: 'mdi:shaker-outline',
					description: 'Ideal bagi yang menginginkan rasa lebih lembut di mana sourdough tidak mendominasi roti.',
					points: [
						'Rasa lebih netral dan serbaguna',
						'Pengamatan gelembung yang sangat jelas',
						'Kurang rentan terhadap over-fermentasi',
					],
				},
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Tanda-tanda Sourdough Lapar',
			html: 'Jika timbul cairan gelap (hooch) di permukaan, berbau cuka/aseton yang kuat, atau mengempis dengan cepat setelah puncak, ia memerlukan rasio pemberian makan yang lebih tinggi.',
		},
		{
			type: 'title',
			text: 'Glosarium Teknis Sourdough',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Levain',
					definition: 'Biang adonan yang disiapkan dari ragi induk untuk resep roti tertentu.',
				},
				{
					term: 'Hooch',
					definition: 'Lapisan alkohol dan air yang terakumulasi saat kultur kehabisan sumber makanan.',
				},
				{
					term: 'Puncak Aktivitas',
					definition: 'Momen ekspansi maksimum dan kepadatan ragi. Waktu ideal untuk menguleni adonan.',
				},
				{
					term: 'Bakteri Asam Laktat (LAB)',
					definition: 'Mikroorganisme yang bertanggung jawab menghasilkan asam organik untuk rasa dan daya simpan.',
				},
			],
		},
		{
			type: 'tip',
			title: 'Tes Apung',
			html: 'Untuk memeriksa apakah sourdough siap, jatuhkan satu sendok teh ke dalam segelas air: jika mengapung, ia menahan cukup CO2.',
		},
		{
			type: 'paragraph',
			html: 'Menggunakan kalkulator kami memungkinkan Anda melembagakan proses pembuatan roti dan memahami biologi roti Anda lebih baik.',
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
  bibliography,
	schemas: [faqSchema, howToSchema, appSchema],
};
