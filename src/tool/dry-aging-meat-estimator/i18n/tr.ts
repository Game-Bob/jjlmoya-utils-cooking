import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kuru Dinlendirme Et Verimi ve Maliyet Hesaplayıcı";
const description = "Evde veya dinlendirme dolabında sığır eti veya diğer etleri kuru dinlendirirken (dry aging) ağırlık kaybını, kabuk kırpma firelerini ve kilogram başına gerçek maliyeti hesaplayın.";
const faq = [
  {
    question: "Kuru dinlendirme sırasında et ne kadar ağırlık kaybeder?",
    answer: "30 ila 45 günlük standart bir kuru dinlendirme işlemi sırasında et, nem buharlaşması nedeniyle ağırlığının yaklaşık %15 ila %25'ini kaybeder. Ayrıca, pişirmeden önce kuru dış kabuğun (pellicle) kırpılması sırasında başlangıç ağırlığının yaklaşık %15'i kaybedilir."
  },
  {
    question: "Kuru dinlendirme için en uygun nem oranı nedir?",
    answer: "Etin kuru dinlendirilmesi için ideal bağıl nem oranı %75 ile %85 arasındadır. Nem çok düşükse ( %75'in altında), yüzey çok hızlı kurur ve iç kısmı hapseden sert bir kabuk oluşturur. Nem çok yüksekse (%85'in üzerinde), küf riski artar."
  },
  {
    question: "Kilogram başına fiyat neden bu kadar çok artıyor?",
    answer: "Su kaybı ve kabuk kırpma nedeniyle ağırlık kaybettiğiniz için nihai kullanılabilir ağırlık, başlangıç ağırlığından daha düşüktür. Toplam ödenen tutar aynı kalır, bu da kullanılabilir kilogram başına maliyetin kaybedilen toplam ağırlığa oranla arttığı anlamına gelir."
  }
];

const howTo = [
  {
    name: "Başlangıç ağırlığını girin",
    text: "Kuru dinlendirme işleminden önce etin başlangıç ağırlığını girin."
  },
  {
    name: "Dinlendirme gününü ayarlayın",
    text: "Genellikle 1 ila 60 gün arasında olan toplam kuru dinlendirme süresini seçin."
  },
  {
    name: "Bağıl nemi ayarlayın",
    text: "Su kaybı oranını belirlemek için dolabınızın nemini ayarlayın (%75 ila %85 arası idealdir)."
  },
  {
    name: "Başlangıç fiyatını girin",
    text: "Nihai kullanılabilir verim maliyeti ile karşılaştırmak için çiğ etin kilogram başına maliyetini girin."
  }
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
  slug: 'kuru-dinlendirme-et-hesaplayici',
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
    title: 'Kuru Dinlendirme Hesaplayıcı',
    subtitle: 'Ağırlık kaybını simüle edin ve nihai verim maliyetini hesaplayın',
    startWeightLabel: 'Başlangıç Ağırlığı',
    daysLabel: 'Dinlendirme Süresi',
    pricePerKgLabel: 'Orijinal Fiyat',
    humidityLabel: 'Bağıl Nem',
    finalWeightLabel: 'Nihai Kullanılabilir Ağırlık',
    yieldLabel: 'Toplam Kullanılabilir Verim',
    originalCostLabel: 'İlk Toplam Maliyet',
    finalCostPerKgLabel: 'Nihai Kullanılabilir Fiyat',
    moistureLossLabel: 'Nem Buharlaşma Kaybı',
    trimmingLossLabel: 'Kabuk Kırpma Firesi',
    warningLowHumidity: 'Uyarı: Nem %75\'in altında. Yüzey çok hızlı kuruyarak dış çeper sertleşmesine yol açabilir.',
    warningHighHumidity: 'Uyarı: Nem %85\'in üzerinde. Yüksek bakteriyel bozulma veya istenmeyen küf oluşumu riski.',
    timelineTitle: 'Kuru Dinlendirme İlerleme Zaman Çizelgesi',
    timelineInfoText: 'Et kesimindeki fiziksel değişimleri önizlemek için zaman çizelgesi boyunca tıklayın'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Kuru Dinlendirmenin Bilimi ve Ekonomisi',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Kuru dinlendirme (dry aging), standart sığır eti kesimlerini yumuşak ve lezzeti yoğunlaştırılmış lezzetlere dönüştürmek için mikrobiyoloji, biyokimya ve fiziği birleştiren mutfak sanatıdır.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '75-85%',
          label: 'İdeal Nem',
          icon: 'mdi:water-percent'
        },
        {
          value: '1-3°C',
          label: 'Optimal Temp',
          icon: 'mdi:thermometer'
        },
        {
          value: '15%',
          label: 'Kabuk Kırpma Firesi',
          icon: 'mdi:knife'
        },
        {
          value: '30-45 g',
          label: 'Standart Süre',
          icon: 'mdi:clock-outline'
        }
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
