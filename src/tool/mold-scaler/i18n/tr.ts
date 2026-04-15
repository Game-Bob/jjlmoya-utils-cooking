import type { ToolLocaleContent } from '../../../types';

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
		question: 'Listeye nasıl malzeme eklerim?',
		answer:
			'Yeni bir satır eklemek için alttaki düğmeye tıklayın. Malzeme adını ve orijinal ağırlığını yazın; ölçeklenen miktar anında güncellenecektir.',
	},
];

const howTo = [
	{
		name: 'Tarif kalıbını tanımlayın',
		text: 'Hazırlamak istediğiniz orijinal tarifin tasarlandığı kalıbın şeklini ve boyutlarını seçin.',
	},
	{
		name: 'Kendi kalıbınızı ayarlayın',
		text: 'Evinizdeki kalıbın ölçülerini girin. Sistem dönüşüm faktörünü hemen hesaplayacaktır.',
	},
	{
		name: 'Malzeme hesaplayıcıyı kullanın',
		text: 'Kendi kalıbınız için ihtiyacınız olan tam miktarları görmek için tarifteki malzemeleri ekleyin.',
	},
	{
		name: 'Pişirmeyi ayarlayın',
		text: 'Boyut değişikliğinin, sıcaklık aynı kalsa bile genellikle pişirme süresinde bir değişiklik gerektirdiğini unutmayın.',
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
	slug: 'kalip-olceklendirme',
	title,
	description,
	faqTitle: 'Ölçeklendirme Hakkında Sıkça Sorulan Sorular',
	bibliographyTitle: 'Bilimsel Kaynaklar ve Referanslar',

	ui: {
		originalRecipe: 'Orijinal Tarif',
		yourMold: 'Sizin Kalıbınız',
		round: 'Yuvarlak',
		square: 'Kare',
		rectangular: 'Dikdörtgen',
		diameter: 'Çap (cm)',
		side: 'Kenar (cm)',
		width: 'Genişlik (cm)',
		length: 'Uzunluk (cm)',
		multiplyingFactor: 'Çarpan Faktörü',
		equivalentMolds: 'Kalıplar eşdeğerdir. Aynı miktarları kullanın.',
		smallerMold: 'Kalıbınız daha küçük. Malzemeleri şununla çarparak azaltın:',
		largerMold: 'Kalıbınız daha büyük. Malzemeleri şununla çarparak artırın:',
		ingredientCalculator: 'Malzeme Hesaplayıcı',
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
	bibliography: [
		{
			name: 'Baking Science and Technology - E.J. Pyler',
			url: 'https://www.bakingbusiness.com/',
		},
		{
			name: 'The Professional Pastry Chef - Bo Friberg',
			url: 'https://www.wiley.com/',
		},
	],
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Kalıba Göre Tarif Ölçeklendirme Kılavuzu',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Bir tarifin miktarlarını farklı bir kalıba dönüştürmek, ideal doku ve pişme noktasını korumak için <strong>geometrik oranlara</strong> saygı duymayı gerektirir.',
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
					value: 'πr²',
					label: 'Daire Alan Formülü',
					icon: 'mdi:math-compass',
				},
				{
					value: '0.64',
					label: '25cm\'den 20cm\'ye Faktör',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: '2/3',
					label: 'Maks. Doluluk',
					icon: 'mdi:format-vertical-align-top',
				},
			],
		},
		{
			type: 'tip',
			html: 'Hesaplanan faktör ne olursa olsun, bir kalıbı asla kapasitesinin 2/3\'ünden fazla doldurmayın.',
		},
	],
	schemas: [appSchema, faqSchema, howToSchema],
};
