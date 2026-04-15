import type { ToolLocaleContent } from '../../../types';

const title = "Meyane (Roux) ve Temel Soslar Rehberi";
const description = "Etkileşimli Meyane hesaplayıcı. Beşamel, Velouté ve Espanyol soslarını tam oranlarla yapmayı öğrenin. Klasik Fransız mutfağının temeli.";
const faq = [
    {
      question: 'Meyane (Roux) nedir ve ne işe yarar?',
      answer: 'Kısık ateşte pişirilmiş yağ (genellikle tereyağı) ve un karışımıdır. Beşamel veya Velouté gibi Fransız temel sosları için temel koyulaştırıcı madde olarak kullanılır.',
    },
    {
      question: 'Meyane için ideal oran nedir?',
      answer: 'Standart oran ağırlıkça 1:1\'dir. Örneğin, 50g tereyağı ve 50g un. Bu karışım, istenen yoğunluğa bağlı olarak yaklaşık 1 litre sıvıyı koyulaştırabilir.',
    },
    {
      question: 'Meyane çeşitleri arasındaki fark nedir?',
      answer: 'Beyaz Meyane 2-3 dk pişirilir (Beşamel). Sarı Meyane 5-8 dk (Velouté). Kahverengi Meyane 15-20 dakikaya kadar (Espanyol). Renk arttıkça fındıksı tat artar ancak koyulaştırma gücü azalır.',
    },
    {
      question: 'Topaklanmayı nasıl önlerim?',
      answer: 'Altın kural zıt sıcaklıktır: sıcak meyaneye soğuk sıvı veya soğuk meyaneye sıcak sıvı. Sıvıyı azar azar ekleyin ve sürekli çırpın.',
    },
  ];
const howTo = [
  {
    name: 'Sıvı türünü seçin',
    text: 'Süt (Beşamel), beyaz stok (Velouté), kahverengi stok (Espanyol) veya domates arasından seçim yapın.',
  },
  {
    name: 'İstenen yoğunluğu belirleyin',
    text: 'Çorbadan kroket hamuruna kadar. Hesaplayıcı gerekli meyane oranını otomatik olarak ayarlayacaktır.',
  },
  {
    name: 'Sıvı hacmini girin',
    text: 'Koyulaştırmak istediğiniz sıvının ml miktarını belirtin. Hesaplayıcı size tam olarak ne kadar tereyağı ve un kullanacağınızı söyleyecektir.',
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
  slug: 'meyane-rehberi',
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq,
  bibliographyTitle: 'Kaynakça',
  bibliography: [
    {
      name: 'Larousse Gastronomique',
      url: 'https://www.laroussecocina.com/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Meyane ve Temel Sos Hesaplama Usta Rehberi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Meyane</strong>, klasik Fransız mutfağının yapısal temelidir. Un, tereyağı ve sıvı arasındaki ilişkiyi anlamak, ipeksi bir sos ile topaklanmış bir sıvı arasındaki farktır.',
    },
  ],
  ui: {
    baseLiquid: 'Temel Sıvı',
    volume: 'Hacim',
    ml: 'ml',
    liquidType: 'Sıvı Türü',
    milk: 'Süt',
    lightStock: 'Beyaz Stok',
    darkStock: 'Kahverengi Stok',
    tomato: 'Domates',
    sauceTexture: 'Sos Yoğunluğu',
    soup: 'Çorba / Krema',
    normalSauce: 'Normal Sos',
    thick: 'Koyu / Dolgu',
    croquette: 'Kroket / Hamur',
    rouxMix: 'Meyane Karışımı',
    butter: 'Tereyağı',
    flour: 'Un',
    instructions: 'Talimatlar',
    sauceName: 'Sos Türü',
    ratio: 'Oran',
    chefTip: 'Şefin İpucu',
    white: 'Beyaz',
    blond: 'Sarı',
    brown: 'Kahverengi',
    beurreManied: 'Beurre Manié (Son düzeltmeler için)',
    recipeBechamel: "Beşamel",
    recipeVeloute: "Velouté",
    recipeEspagnole: "Espanyol",
    recipeTomato: "Domates Sosu",
    tipBechamel: "Soğuk süt kullanın. Başlangıçta yavaşça ekleyin veya hızlıca çırpın.",
    tipVeloute: "Tavuk veya balık stoğu kullanın. Meyane bisküvi gibi kokmalıdır.",
    tipEspagnole: "Meyane çikolata renginde olmalı ama yanmamalıdır.",
    tipTomato: "Meyane, domatesin son dokusuna gövde ve yumuşaklık kazandırmaya yardımcı olur.",
    rouxWhiteLabel: "Beyaz Meyane",
    rouxBlondLabel: "Sarı Meyane",
    rouxBrownLabel: "Kahverengi Meyane",
    descWhite: "Sadece çiğ un kokusu gidene kadar pişirin. Renk almasın.",
    descBlond: "Altın sarısı bir renk ve fındıksı bir koku hedefleyin.",
    descBrown: "Çok kısık ateş. Çikolata rengi. %10 daha fazla miktar gerektirir.",
    timeWhite: "2-3 dk",
    timeBlond: "5-8 dk",
    timeBrown: "15-20 dk",
  },
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
