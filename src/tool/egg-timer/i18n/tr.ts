import type { ToolLocaleContent } from "../../../types";

const title = "Bilimsel Yumurta Zamanlayıcı";
const description = "Rakım, sıcaklık ve boyuta göre mükemmel yumurta pişirme için termodinamik hesaplayıcı.";
const faq = [
  {
    question: "Yumurta haşlarken rakım neden önemlidir?",
    answer: "Su her zaman 100°C'de kaynamaz. Yükseklik arttıkça atmosfer basıncı düşer ve su daha düşük sıcaklıkta kaynar. Örneğin, 2000 metrede su yaklaşık 93°C'de kaynar, bu da deniz seviyesine göre daha uzun pişirme süresi gerektirir. Everest'in tepesinde katı yumurta pişirmek imkansızdır.",
  },
  {
    question: "Buzdolabı yumurtası mı yoksa oda sıcaklığı mı?",
    answer: "Buzdolabından çıkan bir yumurta (4°C), oda sıcaklığındaki (20°C) bir yumurtadan daha fazla zamana ihtiyaç duyar. Fark 2-3 dakika olabilir. Bu hesaplayıcı, zamanı başlangıç sıcaklığına göre otomatik olarak ayarlar.",
  },
  {
    question: "Yumurta sarısının etrafında neden yeşil bir halka oluşur?",
    answer: "Bu, aşırı pişmenin bir sonucu olan demir sülfürdür. Yumurta çok uzun süre 80°C'nin üzerinde kaldığında, beyazdaki kükürt sarıdaki demirle reaksiyona girer. Toksik değildir ancak sürenin aşıldığını gösterir. Bunu önlemek için hemen buz banyosu yapın.",
  },
  {
    question: "Yumurtayı nasıl kolayca soyabilirim?",
    answer: "1-2 haftalık yumurtalar kullanın (günlük taze değil), kaynayan suya koyun (soğuktan başlamayın) ve biter bitmez buzlu suya daldırın. Isıl şok yumurtayı büzer ve soymayı kolaylaştırır.",
  },
];
const howTo = [
  {
    name: "Başlangıç sıcaklığını seçin",
    text: "Yumurtanın buzdolabında (4°C) mi yoksa oda sıcaklığında (20°C) mi olduğunu seçin. Bu, yumurtanın iç sıcaklığıdır.",
  },
  {
    name: "Yumurta boyutunu seçin",
    text: "S (küçük, 53g), M (orta, 58g), L (büyük, 63g) veya XL (çok büyük, 73g). Boyut, ısının merkeze ulaşma süresini belirler.",
  },
  {
    name: "Rakımınızı belirtin",
    text: "Manuel olarak girin veya konumunuzu kullanın. Her 300 metrede suyun kaynama noktası yaklaşık 1°C düşer.",
  },
  {
    name: "Isıl şok uygulayın",
    text: "Zamanlayıcı çaldığında yumurtayı hemen buzlu suya koyun. Bu, pişmeyi durdurur ve soymayı kolaylaştırır. Doğruluk için şok kritiktir.",
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
  slug: "yumurta-zamanlayici",
  title: "Bilimsel Yumurta Zamanlayıcı",
  description: "Rakım, sıcaklık ve boyuta göre mükemmel yumurta pişirme için termodinamik hesaplayıcı.",
  faqTitle: "Sıkça Sorulan Sorular",
  bibliographyTitle: "Bilimsel Kaynaklar",
  ui: {
    parameters: "Parametreler",
    initial_temperature: "Başlangıç Sıcaklığı",
    fridge: "Buzdolabı",
    ambient: "Oda Sıcaklığı",
    egg_size: "Yumurta Boyutu",
    altitude: "Rakım",
    use_location: "Konumumu kullan",
    altitude_help: "Su yüksek rakımlarda daha düşük sıcaklıkta kaynar, bu da pişirme süresini etkiler.",
    sea_level: "Deniz",
    soft_cooked: "Rafadan",
    soft_description: "Sıvı sarı, beyaz ve yumuşak beyaz kısım.",
    mollet: "Kayısı (Mollet)",
    mollet_description: "Kremsi sarı, katı beyaz kısım.",
    hard_cooked: "Katı",
    hard_description: "Tamamen pişmiş, katı sarı kısım.",
  },
  faq,
  bibliography: [
    {
      name: "The Science of Boiling an Egg - Charles D. H. Williams",
      url: "https://newton.ex.ac.uk/teaching/CDHW/Egg/",
    },
    {
      name: "The Food Lab: The Science of the Best Hard Boiled Eggs - J. Kenji López-Alt",
      url: "https://www.seriouseats.com/the-food-lab-hard-boiled-eggs-recipe",
    },
    {
      name: "The Food Lab: Perfect Soft Boiled Eggs",
      url: "https://www.seriouseats.com/soft-boiled-eggs-recipe",
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Mükemmel Yumurta Pişirmek İçin Usta Rehberi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir yumurta pişirmek <strong>uygulamalı bir termodinamik</strong> egzersizidir. Başlangıç sıcaklığı, yumurta boyutu ve coğrafi rakımdaki hassasiyet, ipeksi sıvı bir sarı mı yoksa istenmeyen yeşil halkalı aşırı pişmiş bir katı mı elde edeceğinizi belirler.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '62°C',
          label: 'Beyaz Pıhtılaşması',
          icon: 'mdi:egg-outline',
        },
        {
          value: '68°C',
          label: 'Sarı Pıhtılaşması',
          icon: 'mdi:egg-fried',
        },
        {
          value: '-1°C',
          label: 'Kaynama / 300m',
          icon: 'mdi:mountain',
        },
        {
          value: '0s',
          label: 'Hata Payı',
          icon: 'mdi:timer-check-outline',
        },
      ],
    },
    {
      type: 'title',
      text: 'Pişirme Durumlarının Karşılaştırılması',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Rafadan Yumurta',
          icon: 'mdi:coffee-outline',
          description: 'Beyaz kısım kısmen katılaşmış, sarı kısım tamamen sıvıdır.',
          points: [
            'Çok hassas doku',
            'Ekmek banmak için ideal',
            'Hızlı pişirme (3-4 dk)',
            'Soyması zordur',
          ],
        },
        {
          title: 'Kayısı (Mollet) Yumurta',
          icon: 'mdi:water-percent',
          description: 'Beyaz kısım katı ve sarı kısım kremsidir, yoğundur ama katı değildir.',
          highlight: true,
          points: [
            'Gurme standardı',
            'Bal kıvamında sarı',
            'Esnek ve katı dış yüzey',
            'Salatalar için mükemmel',
          ],
        },
        {
          title: 'Katı / Haşlanmış Yumurta',
          icon: 'mdi:circle-slice-8',
          description: 'Tamamen katı ama yumuşak, yeşil halkasız.',
          points: [
            'Mat ve katı sarı kısım',
            'Taşıması ve soyması kolay',
            'Doldurmak için ideal',
            'Hızlı soğutma gerektirir',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Rakıma Göre Kaynama Noktası',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Şehir / Rakım', 'Metre (msnm)', 'Kaynama (°C)', 'Ek Süre'],
      rows: [
        ['Deniz Seviyesi', '0m', '100°C', '0s'],
        ['Madrid', '650m', '97.8°C', '+25s'],
        ['Mexico City', '2240m', '92.6°C', '+75s'],
        ['La Paz (Bolivya)', '3640m', '88.1°C', '+140s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Yeşil halka mı yoksa soyması zor mu?',
      html: 'Yeşil halka, aşırı pişmenin neden olduğu <strong>demir sülfürdür</strong>. Yumurta iyi soyulmuyorsa çok taze olduğu içindir; düşük pH akın membrana yapışmasına neden olur. 1 haftalık yumurta ve buzlu su kullanın.',
    },
    {
      type: 'title',
      text: 'Yumurta Bilimi Sözlüğü',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ovotransferrin',
          definition: 'Beyazdaki ilk pıhtılaşan (62°C) ve ilk beyaz yapıyı veren protein.',
        },
        {
          term: 'Ovalbümin',
          definition: 'Tam katılık için daha fazla ısı (80°C) gerektiren ana protein.',
        },
        {
          term: 'Atmosfer Basıncı',
          definition: 'Kaynayan suyun sıcaklığını belirleyen faktör.',
        },
        {
          term: 'Isıl Şok',
          definition: 'Kalan pişmeyi anında durdurmak için buzlu suya daldırma.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Sirke Hilesi',
      html: 'Suya bir miktar sirke ekleyin. Kabuk çatlarsa, asit dışarı çıkan akın hızla pıhtılaşmasına yardımcı olarak çatlağı kapatacaktır.',
    },
    {
      type: 'paragraph',
      html: 'Zamanlayıcımız, her saniyeyi tam konumunuza ve buzdolabı durumunuza göre ayarlamak için Charles Williams denklemini kullanır.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
