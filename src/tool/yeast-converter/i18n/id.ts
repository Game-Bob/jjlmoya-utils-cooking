import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Konverter Ragi: Segar, Kering & Sourdough';
const description =
	'Konversi antara ragi segar, ragi kering, dan starter sourdough dengan presisi. Dapatkan penyesuaian resep saat menggunakan starter sourdough untuk menjaga hidrasi sempurna.';

const faq = [
	{
		question: 'Apa perbedaan antara ragi segar dan ragi kering?',
		answer:
			'Ragi segar mengandung sekitar 70% air, sedangkan ragi kering mengandung sekitar 8%. Faktor konversinya adalah: 1 bagian ragi kering sama dengan 3 bagian ragi segar. Ragi kering lebih kuat dan tahan lama, menjadikannya ideal untuk penyimpanan jangka panjang.',
	},
	{
		question: 'Berapa banyak starter sourdough yang saya butuhkan?',
		answer:
			'Starter sourdough biasanya memiliki hidrasi 100% (bagian tepung dan air yang sama). Untuk mengganti 1g ragi segar, Anda butuh 5g starter (rasio 1:5). Selalu sesuaikan resep Anda dengan mengurangi jumlah tepung dan air yang ada dalam starter.',
	},
	{
		question: 'Mengapa saya perlu menyesuaikan resep untuk sourdough?',
		answer:
			'Starter sourdough mengandung ragi sekaligus tepung dan air. Saat Anda menambahkannya, Anda sebenarnya menambahkan bahan ke dalam resep Anda. Anda harus mengurangi jumlah tepung dan air yang setara dari total resep untuk menjaga hidrasi dan struktur yang benar.',
	},
	{
		question: 'Bisakah saya menggunakan ragi instan sebagai pengganti ragi kering aktif?',
		answer:
			'Ragi instan adalah jenis ragi kering yang digiling halus. Rasio konversinya tetap sama: 1:3 antara kering dan segar. Ragi instan mungkin memerlukan sedikit lebih sedikit cairan karena ukuran partikelnya yang halus.',
	},
];

const howTo = [
	{
		name: 'Pilih jenis ragi Anda',
		text: 'Pilih jenis ragi yang Anda miliki: Segar (ragi basah), Kering (instan atau aktif), atau Starter Sourdough (hidrasi 100%).',
	},
	{
		name: 'Masukkan jumlahnya',
		text: 'Masukkan jumlah dalam gram. Berikan angka yang presisi untuk hasil terbaik—gunakan timbangan dapur jika memungkinkan.',
	},
	{
		name: 'Terapkan konversi',
		text: 'Alat ini menunjukkan jumlah yang setara untuk ketiga jenis ragi tersebut. Jika dikonversi ke sourdough, kurangi tepung dan air dari resep Anda.',
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
	slug: 'konverter-ragi-segar-kering-sourdough',
	title,
	description,
	ui: {
		selectYeastType: 'Pilih Jenis Ragi',
		freshYeast: 'Ragi Segar (Basah)',
		dryYeast: 'Ragi Kering (Instan)',
		sourdough: 'Starter Sourdough (100%)',
		enterAmount: 'Masukkan jumlah',
		quantity: 'Kuantitas',
		grams: 'Gram (g)',
		ounces: 'Ounces (oz)',
		pounds: 'Pounds (lb)',
		milligrams: 'Miligram (mg)',
		reset: 'Reset',
		conversions: 'Konversi',
		copy: 'Salin',
		copied: 'Tersalin!',
		recipeAdjustment: 'Penyesuaian Resep',
		flourSubtract: 'Kurangi tepung:',
		waterSubtract: 'Kurangi air:',
	},
	faqTitle: 'Pertanyaan yang Sering Diajukan',
	faq,
	bibliographyTitle: 'Bibliografi & Sumber Daya',
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Formula Konversi Ragi & Panduan Sains',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '<strong>Konversi ragi</strong> sangat penting untuk konsistensi pembuatan roti. Baik Anda mengganti ragi komersial dengan starter sourdough atau menyesuaikan antara varietas segar dan kering, memahami rasio yang tepat memastikan fermentasi yang andal.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '1:3',
					label: 'Rasio Kering ke Segar',
					icon: 'mdi:scale',
				},
				{
					value: '1:5',
					label: 'Segar ke Sourdough',
					icon: 'mdi:flask-outline',
				},
				{
					value: '70%',
					label: 'Air dalam Ragi Segar',
					icon: 'mdi:water-percent',
				},
				{
					value: '8%',
					label: 'Air dalam Ragi Kering',
					icon: 'mdi:water-opacity',
				},
			],
		},
		{
			type: 'title',
			text: 'Jenis Agen Pengembang & Propertinya',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Ragi Segar (Ragi Basah)',
					icon: 'mdi:cube',
					description: 'Sel ragi hidup yang tersuspensi dalam pati dan kelembapan.',
					points: [
						'Potensi: 100% (patokan)',
						'Masa simpan: 2-3 minggu di lemari es',
						'Kandungan air: ~70%',
						'Terbaik untuk: Pembuat roti profesional, penggunaan segera',
					],
				},
				{
					title: 'Ragi Kering (Instan)',
					icon: 'mdi:spray-bottle',
					description: 'Sel ragi yang dikeringkan, lebih pekat daripada ragi segar.',
					points: [
						'Potensi: 3x ragi segar',
						'Masa simpan: 1-2 tahun sebelum dibuka',
						'Kandungan air: ~8%',
						'Terbaik untuk: Pembuat roti rumahan, penyimpanan lama',
					],
				},
				{
					title: 'Starter Sourdough',
					icon: 'mdi:flask-outline',
					description: 'Kultur ragi liar dan bakteri pada hidrasi 100%.',
					highlight: true,
					points: [
						'Potensi: 1 bagian = 5 bagian ragi segar',
						'Masa simpan: Selamanya dengan perawatan tepat',
						'Kandungan air: 50% (bagian tepung yang sama)',
						'Terbaik untuk: Rasa kompleks, fermentasi lambat',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Rasio Konversi & Formula Matematika',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Ragi Asal', 'Ragi Tujuan', 'Formula Konversi', 'Contoh'],
			rows: [
				['Ragi Segar', 'Ragi Kering', 'Segar ÷ 3 = Kering', '30g Segar = 10g Kering'],
				['Ragi Kering', 'Ragi Segar', 'Kering × 3 = Segar', '10g Kering = 30g Segar'],
				['Ragi Segar', 'Sourdough (100%)', 'Segar × 5 = Sourdough', '20g Segar = 100g Starter'],
				['Sourdough (100%)', 'Ragi Segar', 'Sourdough ÷ 5 = Segar', '100g Starter = 20g Segar'],
				['Ragi Kering', 'Sourdough (100%)', 'Kering × 15 = Sourdough', '10g Kering = 150g Starter'],
				['Sourdough (100%)', 'Ragi Kering', 'Sourdough ÷ 15 = Kering', '150g Starter = 10g Kering'],
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Kritis: Penyesuaian Resep untuk Sourdough',
			html: 'Saat mengganti ragi dengan starter sourdough, Anda HARUS menyesuaikan resep Anda. Starter sourdough terdiri dari 50% tepung dan 50% air. Jika konversi Anda membutuhkan 100g starter, kurangi 50g tepung dan 50ml air dari resep Anda untuk menjaga hidrasi yang tepat.',
		},
		{
			type: 'title',
			text: 'Karakteristik Fermentasi Berdasarkan Jenis Ragi',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Jenis Ragi', 'Kecepatan Fermentasi', 'Pengembangan Rasa', 'Produksi CO₂'],
			rows: [
				['Ragi Segar', 'Cepat (2-3 jam)', 'Netral hingga ringan', 'Tinggi dan cepat'],
				['Ragi Kering', 'Sedang (3-4 jam)', 'Sedikit lebih kompleks', 'Konsisten'],
				['Sourdough', 'Lambat (8-48 jam)', 'Kompleks, tajam', 'Bertahap, berkelanjutan'],
			],
		},
		{
			type: 'tip',
			title: 'Tips Pro: Penyesuaian Suhu',
			html: 'Fermentasi dingin dengan sourdough (2-4°C selama 8-16 jam) menghasilkan rasa dan struktur yang lebih unggul dibandingkan fermentasi hangat. Inilah sebabnya mengapa toko roti profesional lebih menyukai sourdough untuk roti yang difermentasi lama.',
		},
		{
			type: 'paragraph',
			html: 'Konverter kami menyederhanakan perhitungan matematis sehingga Anda dapat fokus pada penyempurnaan teknik pembuatan roti dan pengembangan rasa.',
		},
	],

  bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
