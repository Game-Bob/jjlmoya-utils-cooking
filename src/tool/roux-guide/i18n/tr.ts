import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

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
  {
    name: 'Doğru pişirme süresini uygulayın',
    text: 'Tereyağı-un karışımınızı belirtilen seviyeye (Beyaz, Sarı veya Kahverengi) kadar pişirin.',
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
  faq,  howTo,
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
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1:1',
          label: 'Un:Yağ Oranı',
          icon: 'mdi:scale-balance',
        },
        {
          value: '3 dk',
          label: 'Beyaz Meyane Süresi',
          icon: 'mdi:timer-sand',
        },
        {
          value: '100g/L',
          label: 'Koyu Sos Oranı',
          icon: 'mdi:waves',
        },
        {
          value: '15 dk',
          label: 'Kahverengi Meyane',
          icon: 'mdi:fire',
        },
      ],
    },
    {
      type: 'title',
      text: 'Kavurma Seviyeleri ve Kıvam Verme Gücü',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Beyaz Meyane',
          icon: 'mdi:flask-round-bottom-outline',
          description: '2-3 dakika pişirilir. En güçlü koyulaştırıcı.',
          points: [
            'Beşamel için temel',
            'Maksimum koyulaştırma gücü',
            'Nötr süt lezzeti',
            'Renk değişimi yok',
          ],
        },
        {
          title: 'Sarı Meyane',
          icon: 'mdi:gold',
          description: '5-8 dakika hafif altın sarısı renge kadar pişirilir.',
          highlight: true,
          points: [
            'Velouté için temel',
            'Orta koyulaştırma gücü',
            'Hafif fındıksı aroma',
            'Açık renk stoklar için ideal',
          ],
        },
        {
          title: 'Kahverengi Meyane',
          icon: 'mdi:coffee',
          description: '15-20 dakika pişirilir. Derin kavrulmuş lezzet.',
          points: [
            'Espanyol sos için temel',
            'Daha düşük koyulaştırma gücü (-30%)',
            'Karmaşık kavrulmuş fındık lezzeti',
            'Daha akışkan doku',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'İstenen Dokuya Göre Litre Başına Meyane Ağırlığı',
      level: 3,
    },
    {
      type: 'table',
      headers: ['İstenen Doku', 'Tereyağı (g)', 'Un (g)', 'Sıvı (L)'],
      rows: [
        ['Hafif Çorba / Krema', '25g', '25g', '1 Litre'],
        ['Standart Sos', '50g', '50g', '1 Litre'],
        ['Koyu Bağlayıcı Sos', '70g', '70g', '1 Litre'],
        ['Kroket Hamuru / Dolgu', '125g', '125g', '1 Litre'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Topaklanmış Sos mu yoksa Un Tadı mı?',
      html: 'Sosunuz topaklandıysa, sıcak meyaneye sıcak sıvı eklemişsinizdir. Her zaman termal şok uygulayın (sıcak meyaneye soğuk sıvı). Un tadı geliyorsa başlangıç pişirme süresini uzatın.',
    },
    {
      type: 'title',
      text: 'Sos Teknolojisi Sözlüğü',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Dekstrinleşme',
          definition:
            'Nişastanın ısıl işlemle kısa zincirlere ayrılması. Lezzeti artırır ancak koyulaştırmayı zayıflatır.',
        },
        {
          term: 'Jelleşme',
          definition:
            'Nişasta taneciklerinin sıvıyı emerek şişmesi süreci.',
        },
        {
          term: 'Beurre Manié',
          definition:
            'Son dakikada hızlı kıvam düzeltmeleri için kullanılan soğuk un ve tereyağı karışımı.',
        },
        {
          term: 'Temel Soslar',
          definition:
            'Escoffier nin 5 temel sosu (Beşamel, Velouté, Espanyol, Hollandez ve Domates).',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Soğuk Tereyağı Hilesi (Monter au Beurre)',
      html: 'En son aşamada profesyonel bir parlaklık ve ipeksi doku için bir parça soğuk tereyağı çırpın.',
    },
    {
      type: 'paragraph',
      html: 'Meyane hesaplayıcımız soslarınızın her zaman mükemmel teknik kıvamda olmasını sağlar.',
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
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
