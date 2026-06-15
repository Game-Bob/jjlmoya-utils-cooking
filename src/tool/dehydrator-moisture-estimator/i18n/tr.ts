import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Dehidratör Nem Tahmin Edici';
const description = 'Dehidratörde gıdalarınızın ne kadar ağırlık kaybedeceğini, buharlaşan su miktarını ve kuruma süresini hesaplayın.';

const faq = [
  {
    question: 'Dehidratör ağırlık kaybı nasıl hesaplanır?',
    answer: 'Ağırlık kaybı, gıdanın kuru maddesini suyundan ayırarak hesaplanır. Kuru madde miktarı sabit kaldığından, nihai ağırlık kuru maddenin 1 eksi hedef nem yüzdesine bölünmesiyle bulunur.'
  }
];

const howTo = [
  {
    name: 'Malzeme seçin veya manuel nem ayarı yapın',
    text: 'Önceden tanımlanmış bir malzeme seçin veya nem seviyesini kendiniz ayarlayın.'
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
  slug: 'dehidrator-nem-tahmin-edici',
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
    title: 'Nem Tahmin Edici',
    subtitle: 'Ağırlık kaybını hesaplayın ve kuruma süresini tahmin edin',
    unitSystemLabel: 'Birim Sistemi',
    metricOption: 'Metrik (g, °C)',
    imperialOption: 'İmparatorluk (oz, °F)',
    ingredientLabel: 'Malzeme Seçimi',
    initialMoistureLabel: 'Başlangıç Nemi (%)',
    targetMoistureLabel: 'Hedef Nem (%)',
    weightLabel: 'Başlangıç Ağırlığı',
    tempLabel: 'Kurutma Sıcaklığı',
    customOption: 'Özel / Manuel',
    beefOption: 'Kurutulmuş Et (Jerky)',
    watermelonOption: 'Kurutulmuş Karpuz',
    appleOption: 'Elma Dilimleri',
    mangoOption: 'Mango Dilimleri',
    mushroomOption: 'Mantar',
    targetWeightLabel: 'Hedef Ağırlık',
    waterEvaporatedLabel: 'Buharlaşan Su',
    estimatedHoursLabel: 'Tahmini Kuruma Süresi',
    shrinkageLabel: 'Ağırlık Azalması'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Yiyecekleriniz dehidratörde ne kadar ağırlık kaybedecek? Kuruma süresi ve nem oranını hesaplayın',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'İster <strong>kuru et (beef jerky)</strong>, <strong>meyve pestili</strong>, <strong>elma kurusu</strong> veya <strong>karpuz kurusu</strong> yapıyor olun, tutarlı sonuçlar elde etmenin anahtarı nem içeriğini anlamaktır. Gıda güvenliği ve uzun süreli saklama, doğru hedef nem seviyesine ulaşılmasına bağlıdır. <strong>Dehidratör nem hesaplama aracımız</strong>, kullandığınız malzemeye ve ayarlara göre nihai ağırlığı, buharlaşan su miktarını ve kuruma süresini tahmin eder.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '70%', label: 'Et Nem Oranı', icon: 'mdi:food' },
        { value: '92%', label: 'Karpuz Nem Oranı', icon: 'mdi:water' },
        { value: '10%', label: 'Kuru Et Hedefi', icon: 'mdi:shield' },
        { value: '55°C', label: 'Ort. Kurutma Sıcaklığı', icon: 'mdi:thermometer' }
      ]
    },
    {
      type: 'title',
      text: 'Kurutulmuş Gıdalar İçin Doğru Nem Seviyesi Nedir?',
      level: 2
    },
    {
      type: 'table',
      headers: ['Malzeme', 'Başlangıç Nemi', 'Hedef Nem', 'Tipik Süre', 'Kuruluk Belirtisi'],
      rows: [
        ['Kuru Et', '70%', '10-15%', '4-8 saat', 'Serttir ve kırılmadan bükülebilir'],
        ['Elma Dilimleri', '86%', '15-20%', '6-10 saat', 'Yumuşak ve deri gibi, yapışkan bölge yok'],
        ['Mango Dilimleri', '84%', '15-18%', '6-10 saat', 'Çiğnenebilir kıvamda, görünür nem yok'],
        ['Mantar', '92%', '5-8%', '4-8 saat', 'Gevrek ve çıtır'],
        ['Karpuz Kurusu', '92%', '10-12%', '10-16 saat', 'Büküldüğünde çıt sesiyle kırılır']
      ]
    },
    {
      type: 'title',
      text: 'Sık Karşılaşılan Kurutma Sorunları ve Çözümleri',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Dış yüzey sertleşmesi (Case hardening):</strong> Dış tabaka çok hızlı kuruyarak nemi içeride hapseder. Sıcaklığı 5-10 °C düşürün ve hava sirkülasyonunu artırın.',
        '<strong>Depolama sırasında küflenme:</strong> Gıda yeterince düşük bir nem oranına kadar kurutulmamıştır. Hedef ağırlığınızı bulmak için hesaplayıcıyı kullanın ve nem testiyle doğrulayın.',
        '<strong>Düzensiz kuruma:</strong> Parçalar farklı kalınlıklarda kesilmiş veya dehidratör aşırı doldurulmuştur. Parçaları eşit kalınlıkta kesin ve aralarında boşluk bırakın.',
        '<strong>Gıdanın aşırı kuru ve kırılgan olması:</strong> Gereğinden fazla kurutma lezzet ve doku kaybına neden olur. Kullandığınız malzemeye özel hedef nem seviyelerini kontrol edin.'
      ]
    },
    {
      type: 'title',
      text: 'Gıda Türüne Göre Kurutma Sıcaklığı Kılavuzu',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Sıcaklık hem kuruma hızını hem de gıda kalitesini etkiler. Yüksek sıcaklıklar suyu daha hızlı buharlaştırır ancak yüzey sertleşmesine, besin kaybına ve düzensiz sonuçlara yol açabilir. Dehidratör ayarınız için şu genel yönergeleri kullanın:'
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Düşük Sıcaklık 40 - 50 °C',
          icon: 'mdi:thermometer',
          description: 'Enzimleri, besin değerlerini ve hassas aromaları korumak için en iyisidir.',
          points: ['Otlar ve yapraklı yeşillikler', 'Mantarlar', 'Çiğ gıda (raw food) koruma', 'Daha uzun kuruma süresi gerekir']
        },
        {
          title: 'Orta Sıcaklık 50 - 60 °C',
          icon: 'mdi:thermometer',
          description: 'Çoğu meyve ve sebze için standart aralık.',
          highlight: true,
          points: ['Elma ve mango dilimleri', 'Sebzelerin çoğu', 'Meyve pestilleri', 'Denge kuruma hızı ve kalite']
        },
        {
          title: 'Yüksek Sıcaklık 60 - 70 °C',
          icon: 'mdi:thermometer',
          description: 'Kuru et ve gıda güvenliği gerektiren yoğun gıdalar için kullanılır.',
          points: ['Dana ve hindi eti kurusu', 'Yoğun kök sebzeler', 'Gıda güvenliği önceliği', 'Daha kısa kurutma aralığı']
        }
      ]
    },
    {
      type: 'tip',
      title: 'Meyveleri Her Zaman Ön İşlemden Geçirin',
      html: 'Kararmayı önlemek ve rengi korumak için elma, muz ve armutları kurutmadan önce limon suyu veya askorbik asit solüsyonuna batırın.'
    },
    {
      type: 'tip',
      title: 'Kurutma Sırasında Tepsileri Döndürün',
      html: 'Dehidratörlerde genellikle daha sıcak bölgeler bulunur. Eşit kuruma sağlamak için tepsileri her 2-3 saatte bir yukarıdan aşağıya ve önden arkaya doğru döndürün.'
    },
    {
      type: 'tip',
      title: 'Saklamadan Önce Terletin (Şartlandırın)',
      html: 'Kurutma işleminden sonra gıdayı soğumaya bırakın ve ağzı kapalı bir kapta 1 hafta bekletin (terletin). Her gün sallayın. Nemlenme görülürse kurutmaya devam edin.'
    },
    {
      type: 'title',
      text: 'Dehidratör Nem Terimleri Sözlüğü',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Dış Yüzey Sertleşmesi', definition: 'Gıdanın dış yüzeyinin çok hızlı kurumasıyla, nemi içeride hapseden ve düzgün dehidrasyonu önleyen sert bir kabuk oluşturması durumu.' },
        { term: 'Su Aktivitesi (aw)', definition: 'Mikrobiyal büyüme için kullanılabilir serbest suyun ölçüsü. Raf ömrü uzun kurutulmuş gıdaların su aktivitesi genellikle 0.60\'ın altındadır.' },
        { term: 'Nem İçeriği', definition: 'Toplam gıda ağırlığına kıyasla su ağırlığının yüzdesi. Dehidrasyon sürecini ve gıda güvenliği hedeflerini belirlemek için kullanılır.' },
        { term: 'Büzülme Oranı', definition: 'Kurutma işleminden sonra kalan orijinal ağırlığın oranı. Parti boyutlarını ve depolamayı planlamak için anahtar bir ölçüm.' }
      ]
    },
    {
      type: 'summary',
      title: 'Kusursuz Kurutma İçin Önemli İpuçları',
      items: [
        'Farklı malzemelerin başlangıç nem seviyeleri çok farklıdır (%70-92). Doğru tahminler için hazır ayarları kullanın.',
        'Hedef nem gıdaya göre değişir: Kuru et için %10, meyveler için %15-20, sebze ve mantarlar için %5-8.',
        'Kurutma sıcaklığı hem hızı hem de kaliteyi etkiler. Çoğu gıda için 50-60 °C aralığında kalın.',
        'Yüzey sertleşmesi dokuyu bozar. 70 °C üzerindeki sıcaklıklardan kaçının ve iyi hava sirkülasyonu sağlayın.',
        'Nemin eşit dağılmasını sağlamak için kurutulmuş gıdaları uzun süreli depolamadan önce her zaman 1 hafta şartlandırın.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
