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
			'Klik tombol di bawah untuk menambah baris baru. Tulis nama dan berat asli; berat hasil skala akan diperbarui secara instan.',
	},
];

const howTo = [
	{
		name: 'Tentukan loyang resep',
		text: 'Pilih bentuk dan dimensi loyang yang digunakan dalam resep asli yang ingin Anda buat.',
	},
	{
		name: 'Atur loyang Anda sendiri',
		text: 'Masukkan ukuran loyang yang Anda miliki di rumah. Sistem akan segera menghitung faktor konversi.',
	},
	{
		name: 'Gunakan kalkulator bahan',
		text: 'Tambahkan bahan-bahan resep Anda untuk melihat jumlah persis yang Anda butuhkan untuk loyang tersebut.',
	},
	{
		name: 'Sesuaikan pemanggangan',
		text: 'Ingatlah bahwa perubahan ukuran sering kali memerlukan variasi waktu oven meskipun suhunya sama.',
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
	slug: 'skala-loyang',
	title,
	description,
	faqTitle: 'Pertanyaan Umum tentang Skala',	ui: {
		originalRecipe: 'Resep Asli',
		yourMold: 'Loyang Anda',
		round: 'Bulat',
		square: 'Persegi',
		rectangular: 'Persegi Panjang',
		diameter: 'Diameter (cm)',
		side: 'Sisi (cm)',
		width: 'Lebar (cm)',
		length: 'Panjang (cm)',
		multiplyingFactor: 'Faktor Pengali',
		equivalentMolds: 'Loyang setara. Gunakan jumlah yang sama.',
		smallerMold: 'Loyang Anda lebih kecil. Kurangi bahan dengan mengalikan',
		largerMold: 'Loyang Anda lebih besar. Tambah bahan dengan mengalikan',
		ingredientCalculator: 'Kalkulator Bahan',
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

	faq,	howTo,
	seo: [
		{
			type: 'title',
			text: 'Panduan Skala Resep Berdasarkan Loyang',
		},
		{
			type: 'paragraph',
			html: 'Mengonversi jumlah bahan untuk loyang yang berbeda memerlukan kepatuhan pada <strong>proporsi geometri</strong> untuk menjaga tekstur ideal.',
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
					value: 'πr²',
					label: 'Rumus Luas Lingkaran',
					icon: 'mdi:math-compass',
				},
				{
					value: '0.64',
					label: 'Faktor 25cm ke 20cm',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: '2/3',
					label: 'Isi Maksimal',
					icon: 'mdi:format-vertical-align-top',
				},
			],
		},
		{
			type: 'tip',
			html: 'Jangan pernah mengisi loyang lebih dari 2/3 kapasitasnya, apa pun faktor yang dihitung.',
		},
	],
  bibliography,
  schemas: [appSchema, faqSchema, howToSchema],
};
