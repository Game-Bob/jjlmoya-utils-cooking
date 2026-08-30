import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Kalkulator Skala Loyang Kue';
const description =
	'Sesuaikan resep kue apa pun dengan loyang Anda. Hitung faktor konversi secara otomatis untuk loyang bulat, persegi, dan persegi panjang dengan presisi profesional.';

const faq = [
	{
		question: 'Bagaimana cara kerja faktor pengali?',
		answer:
			'Faktor diperoleh dengan membagi luas loyang target dengan luas loyang resep asli. Jika hasilnya 1.5, berarti Anda harus mengalikan setiap bahan dengan angka tersebut.',
	},
	{
		question: 'Bisakah saya mengonversi loyang bulat ke loyang persegi?',
		answer:
			'Ya, alat ini menggunakan rumus geometri yang tepat untuk membandingkan permukaan tanpa memandang bentuknya. Cukup masukkan ukurannya dan sistem akan melakukan sinkronisasi otomatis.',
	},
	{
		question: 'Bagaimana dengan tinggi loyang?',
		answer:
			'Alat ini berfokus pada luas dasar loyang. Jika loyang Anda jauh lebih tinggi atau lebih pendek dari aslinya, Anda mungkin perlu sedikit penyesuaian pada waktu pemanggangan.',
	},
	{
		question: 'Bagaimana cara menambahkan bahan ke daftar?',
		answer:
			'Klik tombol di bawah untuk menambah baris baru. Ketik nama dan berat asli; kolom hasil akhir akan langsung diperbarui.',
	},
	{
		question: 'Apakah konversi andal untuk loyang yang sangat besar?',
		answer:
			'Secara matematis ya, tetapi ingat bahwa kue yang sangat besar membutuhkan waktu lebih lama untuk matang di bagian tengah. Anda mungkin perlu sedikit menurunkan suhu oven.',
	},
];

const howTo = [
	{
		name: 'Tentukan loyang resep asli',
		text: 'Pilih bentuk dan dimensi loyang yang awalnya dirancang untuk resep tersebut.',
	},
	{
		name: 'Atur loyang Anda',
		text: 'Masukkan ukuran loyang yang Anda miliki. Sistem akan langsung menghitung faktor pengali.',
	},
	{
		name: 'Gunakan pengonversi berat bahan',
		text: 'Tambahkan bahan resep Anda untuk melihat jumlah pasti yang dibutuhkan untuk ukuran loyang baru.',
	},
	{
		name: 'Sesuaikan waktu memanggang',
		text: 'Ingat bahwa mengubah ukuran loyang biasanya memerlukan penyesuaian waktu memanggang.',
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
	slug: 'pengubah-ukuran-loyang-kue',
	title,
	description,
	faqTitle: 'Pertanyaan Umum',
	ui: {
		originalMold: 'Loyang Resep Asli',
		yourMold: 'Loyang Target Anda',
		shape: 'Bentuk Loyang',
		diameter: 'Diameter',
		side: 'Sisi',
		width: 'Lebar',
		length: 'Panjang',
		unit: 'Satuan',
		cm: 'cm',
		inches: 'inci',
		round: 'Bulat',
		square: 'Persegi',
		rectangular: 'Persegi Panjang',
		resultTitle: 'Hasil Konversi',
		originalArea: 'Luas Asli',
		yourArea: 'Luas Anda',
		multiplyingFactor: 'Faktor Pengali',
		equivalentMolds: 'Ukuran loyang setara. Gunakan jumlah bahan yang sama.',
		smallerMold: 'Loyang Anda lebih kecil. Kurangi bahan dengan mengalikannya dengan',
		largerMold: 'Loyang Anda lebih besar. Tambah bahan dengan mengalikannya dengan',
		ingredientCalculator: 'Pengonversi Berat Bahan',
		addIngredient: 'Tambah Bahan',
		ingredient: 'Bahan',
		original: 'Asli',
		final: 'Hasil Akhir',
		exampleIngredient: 'Mis. Tepung',
		delete: 'Hapus',
		originalVisualization: 'Asli',
		yourVisualization: 'Milik Anda',
		defaultIngredient1: 'Tepung',
		defaultIngredient2: 'Gula',
		reduce: 'Kurangi',
		increase: 'Tambah',
	},

	faq,
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Panduan Lanjutan Skala Resep Berdasarkan Loyang',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Mengonversi jumlah bahan untuk loyang yang berbeda memerlukan kepatuhan pada <strong>proporsi geometri</strong> untuk menjaga tekstur, tinggi, dan kelembapan ideal.',
		},
		{
			type: 'diagnostic',
			variant: 'info',
			title: 'Rahasia Luas Permukaan',
			html: 'Rahasia konversi yang tepat terletak pada luas permukaan alas, bukan diameter. Peningkatan diameter sebesar 25% hampir menggandakan total luas permukaan.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: 'x1.56',
					label: 'Faktor 20cm ke 25cm',
					icon: 'mdi:resize',
				},
				{
					value: 'x2.25',
					label: 'Faktor 15cm ke 22.5cm',
					icon: 'mdi:arrow-up-bold-outline',
				},
				{
					value: '0.64',
					label: 'Faktor 25cm ke 20cm',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: 'πr²',
					label: 'Rumus Luas Lingkaran',
					icon: 'mdi:math-compass',
				},
			],
		},
		{
			type: 'title',
			text: 'Perbandingan Bentuk dan Efisiensi Oven',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Loyang Bulat',
					icon: 'mdi:circle-outline',
					description: 'Standar dalam memanggang. Memberikan pematangan yang sangat merata dari pinggir ke tengah.',
					points: [
						'Distribusi panas optimal',
						'Ideal untuk bolu tinggi',
						'Dihitung menggunakan jari-jari',
					],
				},
				{
					title: 'Loyang Persegi',
					icon: 'mdi:square-outline',
					description: 'Memaksimalkan penggunaan ruang oven. Ideal untuk brownie.',
					highlight: true,
					points: [
						'Pematangan sudut lebih cepat',
						'Mudah dipotong rapi',
						'Dihitung Sisi x Sisi',
					],
				},
				{
					title: 'Loyang Persegi Panjang',
					icon: 'mdi:rectangle-outline',
					description: 'Sangat cocok untuk kue nampan besar. Memerlukan pemantauan bagian tengah.',
					points: [
						'Kapasitas total tertinggi',
						'Penggunaan serbaguna',
						'Dihitung Lebar x Panjang',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Matematika di Balik Konversi Luas',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Untuk menghitung faktor konversi yang benar, kita membandingkan luas alas menggunakan rumus geometri berikut:',
		},
		{
			type: 'table',
			headers: ['Bentuk Loyang', 'Rumus Luas', 'Pertimbangan Utama'],
			rows: [
				['Lingkaran', 'π × Jari-jari²', 'Jari-jari adalah setengah dari diameter'],
				['Persegi', 'Sisi × Sisi', 'Hanya ukuran bagian dalam'],
				['Persegi Panjang', 'Lebar × Panjang', 'Standar untuk kue nampan'],
			],
		},
		{
			type: 'title',
			text: 'Kesalahan Umum Saat Mengubah Ukuran Loyang',
			level: 3,
		},
		{
			type: 'list',
			items: [
				'<strong>Konversi linier:</strong> Menggandakan diameter tidak menggandakan bahan; melainkan melipatgandakannya menjadi 4 kali lipat.',
				'<strong>Mengabaikan kedalaman:</strong> Loyang dalam memerlukan waktu lebih lama pada suhu lebih rendah.',
				'<strong>Pengembang:</strong> Baking powder tidak selalu membutuhkan konversi linier sempurna.',
				'<strong>Penguapan:</strong> Adonan dalam jumlah kecil bisa lebih cepat kering.',
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Batas Kapasitas Loyang',
			html: 'Jangan pernah mengisi loyang lebih dari 2/3 kapasitasnya, apa pun faktor yang dihitung.',
		},
		{
			type: 'title',
			text: 'Glosarium Istilah Konversi',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Faktor Pengali',
					definition: 'Angka yang harus Anda kalikan ke semua bahan resep.',
				},
				{
					term: 'Luas Alas',
					definition: 'Pengukuran luas permukaan bagian bawah loyang.',
				},
				{
					term: 'Jari-jari (Radius)',
					definition: 'Jarak dari titik tengah ke tepi lingkaran.',
				},
				{
					term: 'Perpindahan Panas',
					definition: 'Cara energi termal bergerak melalui loyang berdasarkan bentuk dan bahan.',
				},
			],
		},
		{
			type: 'tip',
			html: 'Saat berpindah ke loyang yang jauh lebih besar, gunakan sabuk pemanggang untuk pemerataan panas.',
		},
		{
			type: 'paragraph',
			html: 'Menguasai penyesuaian loyang memberi Anda kebebasan berkreasi. Gunakan kalkulator ini untuk hasil profesional.',
		},
	],
	bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
