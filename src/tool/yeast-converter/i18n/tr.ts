import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Maya Dönüştürücü: Yaş, Kuru ve Ekşi Maya';
const description =
	'Yaş maya, kuru maya ve ekşi maya başlatıcı arasında hassas dönüşüm yapın. Ekşi maya kullanırken mükemmel hidrasyonu korumak için tarif ayarlamalarını alın.';

const faq = [
	{
		question: 'Yaş maya ile kuru maya arasındaki fark nedir?',
		answer:
			'Yaş maya yaklaşık %70 su içerirken, kuru maya yaklaşık %8 su içerir. Dönüşüm faktörü şöyledir: 1 birim kuru maya, 3 birim yaş mayaya eşittir. Kuru maya daha konsantredir ve raf ömrü daha uzundur, bu da onu stoklamak için ideal kılar.',
	},
	{
		question: 'Ne kadar ekşi maya başlatıcıya ihtiyacım var?',
		answer:
			'Ekşi maya başlatıcı varsayılan olarak %100 hidrasyona sahiptir (eşit miktarda un ve su). 1g yaş mayayı değiştirmek için 5g ekşi mayaya ihtiyacınız vardır (1:5 oranı). Başlatıcıdaki un ve suyu tarifinizden çıkararak her zaman ayarlama yapın.',
	},
	{
		question: 'Ekşi maya için neden tarifimi ayarlamam gerekiyor?',
		answer:
			'Ekşi maya başlatıcı hem maya hem de un ve su içerir. Onu eklediğinizde tarifinize aslında ekstra un ve su eklemiş olursunuz. Doğru hidrasyon ve yapıyı korumak için toplam miktardan eşdeğer un ve suyu çıkarmalısınız.',
	},
	{
		question: 'Aktif kuru maya yerine instant maya kullanabilir miyim?',
		answer:
			'İnstant maya, ince öğütülmüş bir kuru maya türüdür. Dönüşüm oranı yaş mayaya göre aynıdır (1:3). İnstant maya, ince yapısı nedeniyle bazen biraz daha az sıvı gerektirebilir.',
	},
];

const howTo = [
	{
		name: 'Maya tipinizi seçin',
		text: 'Elinizdeki maya türünü seçin: Yaş (küp maya), Kuru (instant veya aktif) veya Ekşi Maya (%100 hidrasyon).',
	},
	{
		name: 'Miktarı girin',
		text: 'Miktarı gram cinsinden girin. En iyi sonuçlar için hassas olun; mümkünse mutfak tartısı kullanın.',
	},
	{
		name: 'Dönüşümleri uygulayın',
		text: 'Araç size her üç tür için eşdeğer miktarları gösterir. Ekşi mayaya dönüştürüyorsanız, tarifinizden un ve suyu düşmeyi unutmayın.',
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
	slug: 'maya-donusturucu-yas-kuru-eksi-maya',
	title,
	description,
	ui: {
		selectYeastType: 'Maya Tipini Seçin',
		freshYeast: 'Yaş Maya (Küp)',
		dryYeast: 'Kuru Maya (İnstant)',
		sourdough: 'Ekşi Maya (%100)',
		enterAmount: 'Miktarı girin',
		quantity: 'Miktar',
		grams: 'Gram (g)',
		ounces: 'Ons (oz)',
		pounds: 'Libre (lb)',
		milligrams: 'Miligram (mg)',
		reset: 'Sıfırla',
		conversions: 'Dönüşümler',
		copy: 'Kopyala',
		copied: 'Kopyalandı!',
		recipeAdjustment: 'Tarif Ayarlaması',
		flourSubtract: 'Un çıkarın:',
		waterSubtract: 'Su çıkarın:',
	},
	faqTitle: 'Sıkça Sorulan Sorular',
	faq,
	bibliographyTitle: 'Kaynakça ve Kaynaklar',
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Maya Dönüşüm Formülleri ve Bilimsel Rehber',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '<strong>Maya dönüşümü</strong>, pişirme tutarlılığı için esastır. Ticari mayayı ekşi maya ile değiştirirken veya yaş ve kuru çeşitler arasında geçiş yaparken, kesin oranları anlamak güvenilir fermantasyon sağlar.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '1:3',
					label: 'Kuru / Yaş Oranı',
					icon: 'mdi:scale',
				},
				{
					value: '1:5',
					label: 'Yaş / Ekşi Maya',
					icon: 'mdi:flask-outline',
				},
				{
					value: '%70',
					label: 'Yaş Mayadaki Su',
					icon: 'mdi:water-percent',
				},
				{
					value: '%8',
					label: 'Kuru Mayadaki Su',
					icon: 'mdi:water-opacity',
				},
			],
		},
		{
			type: 'title',
			text: 'Maya Türleri ve Özellikleri',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Yaş Maya (Küp Maya)',
					icon: 'mdi:cube',
					description: 'Nişasta ve nem içinde asılı duran canlı maya hücreleri.',
					points: [
						'Güç: %100 (baz)',
						'Raf ömrü: Buzdolabında 2-3 hafta',
						'Su içeriği: ~%70',
						'En iyi kullanım: Profesyonel fırıncılar, anında kullanım',
					],
				},
				{
					title: 'Kuru Maya (İnstant)',
					icon: 'mdi:spray-bottle',
					description: 'Kurutulmuş, yaş mayadan daha konsantre maya hücreleri.',
					points: [
						'Güç: Yaş mayanın 3 katı',
						'Raf ömrü: Açılmamış halde 1-2 yıl',
						'Su içeriği: ~%8',
						'En iyi kullanım: Ev fırıncıları, uzun süreli saklama',
					],
				},
				{
					title: 'Ekşi Maya',
					icon: 'mdi:flask-outline',
					description: '%100 hidrasyonda yabani maya ve bakteri kültürü.',
					highlight: true,
					points: [
						'Güç: 1 birim = 5 birim yaş maya',
						'Raf ömrü: Bakımla süresiz',
						'Su içeriği: %50 (eşit parça un)',
						'En iyi kullanım: Karmaşık lezzet, yavaş fermantasyon',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Dönüşüm Oranları ve Matematiksel Formül',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Kaynak Maya', 'Hedef Maya', 'Dönüşüm Formülü', 'Örnek'],
			rows: [
				['Yaş Maya', 'Kuru Maya', 'Yaş ÷ 3 = Kuru', '30g Yaş = 10g Kuru'],
				['Kuru Maya', 'Yaş Maya', 'Kuru × 3 = Yaş', '10g Kuru = 30g Yaş'],
				['Yaş Maya', 'Ekşi Maya (%100)', 'Yaş × 5 = Ekşi Maya', '20g Yaş = 100g Başlatıcı'],
				['Ekşi Maya (%100)', 'Yaş Maya', 'Ekşi Maya ÷ 5 = Yaş', '100g Başlatıcı = 20g Yaş'],
				['Kuru Maya', 'Ekşi Maya (%100)', 'Kuru × 15 = Ekşi Maya', '10g Kuru = 150g Başlatıcı'],
				['Ekşi Maya (%100)', 'Kuru Maya', 'Ekşi Maya ÷ 15 = Kuru', '150g Başlatıcı = 10g Kuru'],
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Kritik: Ekşi Maya İçin Tarif Ayarlaması',
			html: 'Mayayı ekşi maya ile değiştirdiğinizde, tarifinizi ayarlamanız ŞARTTIR. Ekşi maya %50 un ve %50 su içerir. Dönüşümünüz 100g ekşi maya gerektiriyorsa, doğru hidrasyonu korumak için tarifinizden 50g un ve 50ml su çıkarın.',
		},
		{
			type: 'title',
			text: 'Maya Türlerine Göre Fermantasyon Karakteristikleri',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Maya Türü', 'Fermantasyon Hızı', 'Lezzet Gelişimi', 'CO₂ Üretimi'],
			rows: [
				['Yaş Maya', 'Hızlı (2-3 saat)', 'Nötr - hafif', 'Yüksek ve hızlı'],
				['Kuru Maya', 'Orta (3-4 saat)', 'Biraz daha karmaşık', 'Tutarlı'],
				['Ekşi Maya', 'Yavaş (8-48 saat)', 'Karmaşık, ekşimsi', 'Kademeli, sürekli'],
			],
		},
		{
			type: 'tip',
			title: 'Profesyonel İpucu: Sıcaklık Ayarları',
			html: 'Ekşi maya ile soğuk fermantasyon (8-16 saat boyunca 2-4°C), sıcak fermantasyona göre üstün lezzet ve yapı geliştirir. Profesyonel fırınların uzun fermente ekmekler için ekşi mayayı tercih etme nedeni budur.',
		},
		{
			type: 'paragraph',
			html: 'Dönüştürücümüz matematiği basitleştirir, böylece siz pişirme tekniğinize ve lezzet geliştirmeye odaklanabilirsiniz.',
		},
	],

  bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
