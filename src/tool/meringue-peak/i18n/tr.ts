import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Beze ve Kar Beyazı Noktası Hesaplayıcı";
const description = "Yumurta aklarınızın ağırlığına göre Fransız, İtalyan veya İsviçre bezesi için gereken tam şeker miktarını hesaplayın. Çırpma süreleri ve pastacılık ipuçları.";
const faq = [
  {
    question: 'En ideal şeker ve yumurta akı oranı nedir?',
    answer: 'Pastacılıkta altın kural 1:2 oranıdır. Sabit ve sağlam bir yapı sağlamak için her gram yumurta akı için iki gram şeker kullanılmalıdır.',
  },
  {
    question: 'Bezenin "kar beyazı" (sert tepe) noktasına geldiğini nasıl anlarım?',
    answer: 'Çırpıcıyı kaldırdığınızda beze bükülmeden dikey duran bir tepe oluşturuyorsa sert tepe noktasına ulaşılmış demektir. Ayrıca beze çok parlak görünmelidir.',
  },
  {
    question: 'Süsleme için en stabil beze hangisidir?',
    answer: 'İtalyan bezesi üç ana tür arasında en stabil olanıdır. Sıcak şerbet yumurta akındaki proteinleri hafifçe pişirerek ısıya ve zamana karşı daha dayanıklı bir yapı oluşturur.',
  },
  {
    question: 'Pastörize şişe yumurta akı kullanılabilir mi?',
    answer: 'Evet, kullanılabilir ancak taze yumurta aklarına göre kabarık hale gelmesi biraz daha uzun sürebilir. Stabiliteye yardımcı olması için bir tutam krem tartar veya birkaç damla limon eklemek faydalı bir ipucudur.',
  },
];
const howTo = [
  {
    name: 'Akları tartın',
    text: 'Yumurta aklarının içinde hiç sarı kalmadığından emin olarak dijital tartı ile kesin ağırlığını bulun.',
  },
  {
    name: 'Ağırlığı girin',
    text: 'Gerekli şeker miktarlarını bulmak için bu ağırlığı hesaplayıcımıza yazın.',
  },
  {
    name: 'Tekniği seçin',
    text: 'Fransız (temel), İtalyan (stabil) veya İsviçre (ipeksi) beze hazırlayıp hazırlamayacağınızı seçin.',
  },
  {
    name: 'Çırpın ve kontrol edin',
    text: 'Tahmini süreleri takip edin ve sert tepe noktasına ulaşana kadar kıvamı kontrol edin.',
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
  slug: 'beze-kar-beyazi-hesaplayici',
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
    whitesLabel: 'Yumurta Akı Ağırlığı',
    whitesPlaceholder: 'Örn. 120',
    whitesUnit: 'g',
    typeLabel: 'Beze Türü',
    typeFrench: 'Fransız',
    typeItalian: 'İtalyan',
    typeSwiss: 'İsviçre',
    timesHeading: 'Tahmini Süreler (Orta/yüksek hızda çırpma)',
    stageSpumado: 'Köpürüyor',
    stageSpumadoDesc: 'Sabun köpüğü gibi büyük baloncuklar.',
    stageSoftPeaks: 'Yumuşak Tepe',
    stageSoftPeaksDesc: 'Uç kısmı kaldırıldığında bükülür.',
    stageStiffPeaks: 'Sert Tepe (Kar Beyazı)',
    stageStiffPeaksDesc: 'Sabit ve parlak tepe.',
    frenchSugarWhite: 'Toz Şeker',
    frenchSugarPowder: 'Pudra Şekeri',
    frenchTip: 'Fransız bezesi en yaygın ve kolay olanıdır, beze (mereng) pişirmek için idealdir. Çiğ tüketime uygun değildir.',
    frenchTime1: '1-2 dk',
    frenchTime2: '3-5 dk',
    frenchTime3: '7-9 dk',
    italianSugarSyrup: 'Şerbet Şekeri',
    italianWater: 'Su',
    italianTip: 'İtalyan bezesi en stabil olanıdır. 118°C\'deki sıcak şerbetle yapılır. Pasta süslemesi için mükemmeldir.',
    italianTime1: '2 dk',
    italianTime2: '5 dk',
    italianTime3: '10-12 dk',
    swissSugarWhite: 'Toz Şeker',
    swissMaxTemp: 'Maks Sıc.',
    swissTip: 'İsviçre bezesi, şeker eriyene kadar benmaride ısıtılır. Çok yönlüdür ve tereyağlı kremalar (buttercream) için idealdir.',
    swissTime1: '1-2 dk',
    swissTime2: '4-6 dk',
    swissTime3: '8-10 dk',
    invalidWeightError: 'Geçerli bir ağırlık girin',
  },
  faq,
  howTo, seo: [
    {
      type: 'title',
      text: 'Beze ve Kar Beyazı Noktası İçin Usta Rehberi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Kar beyazı</strong> noktasında uzmanlaşmak ve farklı beze türlerini bilmek, pastacılığınızı profesyonel bir seviyeye taşır. Anahtar, ağırlığın hassasiyetidir.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1:2',
          label: 'Ak:Şeker Oranı',
          icon: 'mdi:scale-balance',
        },
        {
          value: '118°C',
          label: 'İtalyan Şerbeti',
          icon: 'mdi:thermometer-high',
        },
        {
          value: '60°C',
          label: 'İsviçre Benmarisi',
          icon: 'mdi:beaker-question-outline',
        },
        {
          value: '0%',
          label: 'Yağ Toleransı',
          icon: 'mdi:close-circle-outline',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Fransız Bezesi',
          icon: 'mdi:baguette',
          description: 'En basit ama en az stabil olanıdır.',
          points: [
            'Pişirmek için ideal (bezeler)',
            'Hafif ve havadar doku',
            'Pişirme zorunludur',
            'Hazırlaması hızlı',
          ],
        },
        {
          title: 'İtalyan Bezesi',
          icon: 'mdi:pizza',
          description: 'En stabil olanıdır.',
          highlight: true,
          points: [
            'Pasta süsleme için kusursuz',
            'Çiğ yemeye uygun (pişmiş sayılır)',
            'Neme karşı dirençli',
            'Yoğun ve parlak yapı',
          ],
        },
        {
          title: 'İsviçre Bezesi',
          icon: 'mdi:cheese',
          description: 'Benmaride ısıtılarak yapılır.',
          points: [
            'Buttercream bazıdır',
            'Çok ipeksi doku',
            'Dolgular için mükemmel',
            'İyi stabilite',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Metal Kap İpucu',
      html: 'Başlamadan önce kabınızı sirke veya limonla temizleyin. En ufak yağ izi yumurta aklarının kabarmasını engeller.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
