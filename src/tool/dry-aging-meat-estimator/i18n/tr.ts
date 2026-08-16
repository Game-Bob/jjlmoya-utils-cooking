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
    },
    {
      type: 'title',
      text: 'Ağırlık Kaybı Dinamiklerini ve Asimptotik Eğriyi Anlamak',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Kuru dinlendirme sırasındaki ağırlık kaybı asimptotiktir. İlk 14 günde su dış katmanlardan hızla buharlaşır. Sert ve koyu bir kabuk (pelikül) oluşur ve 2 ila 3 hafta sonra buharlaşmayı yavaşlatır.'
    },
    {
      type: 'list',
      items: [
        '<strong>1-14. Günler:</strong> Hızlı buharlaşma. Et ağırlığının %10 ila %12\'sini (öncelikle su) kaybeder. Kas lifleri büzülür ve lezzet yoğunlaşır.',
        '<strong>15-30. Günler:</strong> Pelikül oluşumuyla buharlaşma yavaşlar. Enzimler (kalpain ve katepsin) kolajeni parçalayarak eti yumuşatır.',
        '<strong>30-45. Günler:</strong> Minimum ek su kaybı. Yağ oksidasyonu yoluyla fındıksı ve küflü peynirimsi derin lezzet notaları gelişir.',
        '<strong>Kırpma Firesi:</strong> Dinlendirme tamamlandığında dış kabuk kesilip çıkarılmalıdır; bu da toplam ağırlığın yaklaşık %15\'ine denk gelir.'
      ]
    },
    {
      type: 'title',
      text: 'Dinlendirme Dolabında Çevresel Kontroller',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Tutarlı hava kalitesi, sıcaklık ve nem hayati önem taşır. Sapmalar etin bozulmasına neden olabilir.'
    },
    {
      type: 'list',
      items: [
        '<strong>Sıcaklık:</strong> 1°C ile 3°C arasında kalmalıdır. 0°C altında enzimler donar; 4°C üzerinde patojen bakteriler ürer.',
        '<strong>Bağıl Nem (RH):</strong> İdeal aralık %75 ila %85\'tir. %70 altında dış çeper erken sertleşir; %85 üzerinde istenmeyen küfler oluşur.',
        '<strong>Hava Akışı:</strong> Yüzeyin eşit kuruması için sürekli hava sirkülasyonu gereklidir.'
      ]
    },
    {
      type: 'title',
      text: 'Mali Etkiler ve Maliyet Hesaplamaları',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Buharlaşma ve kırpma nedeniyle yenilebilir porsiyon küçülür, bu da kilogram başına efektif fiyatı artırır.'
    },
    {
      type: 'table',
      headers: ['Dinlendirme Süresi', 'Ø Buharlaşma Firesi', 'Ø Kırpma Firesi', 'Toplam Verim', 'Maliyet Çarpanı'],
      rows: [
        ['14 Gün', '10.5%', '15.0%', '74.5%', '1.34x'],
        ['21 Gün', '13.5%', '15.0%', '71.5%', '1.40x'],
        ['30 Gün', '17.5%', '15.0%', '67.5%', '1.48x'],
        ['45 Gün', '21.0%', '15.0%', '64.0%', '1.56x'],
        ['60 Gün', '24.0%', '15.0%', '61.0%', '1.64x']
      ]
    },
    {
      type: 'title',
      text: 'Güvenlik Kılavuzu: Mikrobiyoloji ve İyi vs Kötü Küf Teşhisi',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Güvenli kuru dinlendirme, yararlı mikrofloranın (<em>Thamnidium</em>, <em>Mucor</em>, <em>Rhizopus</em> cinsi küfler) gelişimine dayanır. Sıkı hijyen şarttır.'
    },
    {
      type: 'list',
      items: [
        '<strong>İyi Göstergeler:</strong> Kuru, sert, koyu mor veya kahverengi kabuk. İnce beyaz tozsu küf tabakası (peynir kabuğuna benzer) normaldir.',
        '<strong>Kötü Göstergeler:</strong> Yapışkan, kaygan veya ıslak yüzeyler. Yeşil, siyah veya sarımsı küfler. Ekşi veya amonyak kokusu bozulmayı gösterir.',
        '<strong>Temizlik:</strong> Yeni et koymadan önce dolabı, kancaları ve ızgaraları daima sterilize edin.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
