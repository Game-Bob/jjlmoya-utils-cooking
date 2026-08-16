import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Pasta Kalıbı Ölçeklendirme Hesaplayıcı';
const description =
	'Her türlü pasta tarifini kendi kalıplarınıza uyarlayın. Yuvarlak, kare ve dikdörtgen kalıplar için dönüşüm faktörünü profesyonel hassasiyetle otomatik olarak hesaplayın.';

const faq = [
	{
		question: 'Çoğaltma faktörü tam olarak nasıl çalışır?',
		answer:
			'Faktör, hedef kalıbınızın alanının orijinal tarifteki kalıbın alanına bölünmesiyle elde edilir. Sonuç 1.5 ise, her malzemeyi bu rakamla çarpmanız gerektiği anlamına gelir.',
	},
	{
		question: 'Yuvarlak bir kalıbı kare bir kalıba dönüştürebilir miyim?',
		answer:
			'Evet, araç şekli ne olursa olsun yüzeyleri karşılaştırmak için hassas geometrik formüller kullanır. Sadece ölçüleri girin, sistem eşdeğerliği otomatik olarak yapacaktır.',
	},
	{
		question: 'Kalıpların yüksekliği ne olacak?',
		answer:
			'Bu araç en kritik faktör olan taban alanına odaklanır. Kalıbınız orijinalinden önemli ölçüde daha yüksek veya alçaksa, pişirme süresinde küçük bir ayarlama yapmanız gerekebilir.',
	},
	{
		question: 'Listeye nasıl malzeme ekleyebilirim?',
		answer:
			'Yeni bir satır eklemek için aşağıdaki düğmeye tıklayın. Adı ve orijinal ağırlığı yazın; nihai miktar anında güncellenecektir.',
	},
	{
		question: 'Çok büyük fırın tepsileri için dönüştürme güvenilir midir?',
		answer:
			'Matematiksel olarak evet, ancak çok büyük keklerin ortasının pişmesinin daha uzun süreceğini unutmayın. Fırın sıcaklığını biraz düşürmeniz gerekebilir.',
	},
];

const howTo = [
	{
		name: 'Orijinal tarif kalıbını belirleyin',
		text: 'Tarifin başlangıçta tasarlandığı kalıbın şeklini ve boyutlarını seçin.',
	},
	{
		name: 'Kendi kalıbınızı ayarlayın',
		text: 'Evdeki kalıbınızın ölçülerini girin. Sistem dönüşüm faktörünü anında hesaplayacaktır.',
	},
	{
		name: 'Malzeme ağırlık dönüştürücüsünü kullanın',
		text: 'Yeni kalıp boyutu için tam olarak ne kadar malzeme gerektiğini görmek için tarifinizi ekleyin.',
	},
	{
		name: 'Pişirme sürelerini ayarlayın',
		text: 'Kalıp boyutunu değiştirmenin genellikle pişirme süresinde ayarlama gerektirdiğini unutmayın.',
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
	slug: 'kek-kalibi-donusturucu',
	title,
	description,
	faqTitle: 'Sıkça Sorulan Sorular',
	ui: {
		originalMold: 'Orijinal Tarif Kalıbı',
		yourMold: 'Hedef Kalıbınız',
		shape: 'Kalıp Şekli',
		diameter: 'Çap',
		side: 'Kenar',
		width: 'Genişlik',
		length: 'Uzunluk',
		unit: 'Birim',
		cm: 'cm',
		inches: 'inç',
		round: 'Yuvarlak',
		square: 'Kare',
		rectangular: 'Dikdörtgen',
		resultTitle: 'Dönüşüm Sonucu',
		originalArea: 'Orijinal Alan',
		yourArea: 'Sizin Alanınız',
		multiplyingFactor: 'Dönüşüm Faktörü',
		equivalentMolds: 'Kalıplar eşdeğerdir. Aynı miktarları kullanın.',
		smallerMold: 'Kalıbınız daha küçük. Malzemeleri şu faktörle çarparak azaltın:',
		largerMold: 'Kalıbınız daha büyük. Malzemeleri şu faktörle çarparak artırın:',
		ingredientCalculator: 'Malzeme Ağırlık Ölçekleyici',
		addIngredient: 'Malzeme Ekle',
		ingredient: 'Malzeme',
		original: 'Orijinal',
		final: 'Final',
		exampleIngredient: 'Örn. Un',
		delete: 'Sil',
		originalVisualization: 'Orijinal',
		yourVisualization: 'Sizin',
		defaultIngredient1: 'Un',
		defaultIngredient2: 'Şeker',
		reduce: 'Azalt',
		increase: 'Artır',
	},

	faq,
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Kalıba Göre Tarif Ölçeklendirme Kılavuzu',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Bir tarifin miktarlarını farklı bir kalıba dönüştürmek, ideal doku, yükseklik ve nem oranını korumak için <strong>geometrik oranlara</strong> saygı duymayı gerektirir.',
		},
		{
			type: 'diagnostic',
			variant: 'info',
			title: 'Taban Alanının Sırrı',
			html: 'Doğru ölçeklendirmenin sırrı çapta değil, taban alanındadır. Yuvarlak bir kalıbın çapındaki %25\'lik bir artış, toplam alanı neredeyse iki katına çıkarır.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: 'x1.56',
					label: '20cm\'den 25cm\'ye Faktör',
					icon: 'mdi:resize',
				},
				{
					value: 'x2.25',
					label: '15cm\'den 22.5cm\'ye Faktör',
					icon: 'mdi:arrow-up-bold-outline',
				},
				{
					value: '0.64',
					label: '25cm\'den 20cm\'ye Faktör',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: 'πr²',
					label: 'Daire Alan Formülü',
					icon: 'mdi:math-compass',
				},
			],
		},
		{
			type: 'title',
			text: 'Şekil Karşılaştırması ve Fırın Verimliliği',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Yuvarlak Kalıplar',
					icon: 'mdi:circle-outline',
					description: 'Pişiriciliğin standardı. Kenardan merkeze çok eşit pişirme sunarlar.',
					points: [
						'Optimum ısı dağılımı',
						'Yüksek pandispanyalar için ideal',
						'Yarıçap kullanılarak hesaplanır',
					],
				},
				{
					title: 'Kare Kalıplar',
					icon: 'mdi:square-outline',
					description: 'Fırın alanının maksimum kullanımını sağlar. Brownie için idealdir.',
					highlight: true,
					points: [
						'Köşelerin daha hızlı pişmesi',
						'Porsiyonlaması kolay',
						'Kenar x Kenar hesaplanır',
					],
				},
				{
					title: 'Dikdörtgen Kalıplar',
					icon: 'mdi:rectangle-outline',
					description: 'Büyük tepsi kekleri için mükemmeldir. Merkezin pişkinliği izlenmelidir.',
					points: [
						'En yüksek toplam kapasite',
						'Çok amaçlı kullanım',
						'Genişlik x Uzunluk hesaplanır',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Yüzey Alanı Ölçeklendirmenin Matematiği',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Doğru ölçeklendirme faktörünü hesaplamak için taban alanlarını bu standart geometrik formüllerle karşılaştırıyoruz:',
		},
		{
			type: 'table',
			headers: ['Kalıp Şekli', 'Alan Formülü', 'Önemli Husus'],
			rows: [
				['Dairesel', 'π × Yarıçap²', 'Yarıçap çapın yarısıdır'],
				['Kare', 'Kenar × Kenar', 'Yalnızca iç ölçüler'],
				['Dikdörtgen', 'Genişlik × Uzunluk', 'Tepsi kekleri için standart'],
			],
		},
		{
			type: 'title',
			text: 'Kalıp Boyutu Değiştirilirken Yapılan Yaygın Hatalar',
			level: 3,
		},
		{
			type: 'list',
			items: [
				'<strong>Doğrusal ölçeklendirme:</strong> Çapı iki katına çıkarmak malzemeleri iki katına çıkarmaz; dört katına çıkarır.',
				'<strong>Derinliği göz ardı etmek:</strong> Derin kalıplar düşük sıcaklıkta daha uzun pişirme gerektirir.',
				'<strong>Kabartıcılar:</strong> Kabartma tozu her zaman tam doğrusal ölçeklendirme gerektirmez.',
				'<strong>Buharlaşma:</strong> Küçük miktarlar daha yüksek yüzey/hacim oranı nedeniyle daha hızlı kuruyabilir.',
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Kalıp Kapasite Sınırı',
			html: 'Hesaplanan faktör ne olursa olsun, bir kalıbı asla kapasitesinin 2/3\'ünden fazla doldurmayın.',
		},
		{
			type: 'title',
			text: 'Dönüşüm Terimleri Sözlüğü',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Dönüşüm Faktörü',
					definition: 'Tarifi yeni kalıba uyarlamak için tüm malzemeleri çarpmanız gereken sayı.',
				},
				{
					term: 'Taban Alanı',
					definition: 'Kalıp tabanının yüzey ölçümü.',
				},
				{
					term: 'Yarıçap',
					definition: 'Bir dairenin merkezinden kenarına olan uzaklık.',
				},
				{
					term: 'Isı Transferi',
					definition: 'Termal enerjinin şekil ve malzemeye bağlı olarak kalıpta nasıl hareket ettiği.',
				},
			],
		},
		{
			type: 'tip',
			html: 'Çok daha büyük bir kalıba geçerken, kenarları kurutmadan eşit ısı dağılımı sağlamak için pişirme bantları kullanın.',
		},
		{
			type: 'paragraph',
			html: 'Kalıp ölçeklendirmede uzmanlaşmak mutfakta tam bir yaratıcı özgürlük sağlar. Mükemmel sonuçlar için bu hesaplayıcıyı kullanın.',
		},
	],
	bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
