import type { ToolLocaleContent } from '../../../types';

const title = "Çoklu Mutfak Zamanlayıcı";
const description = "Aynı anda birden fazla pişirme süresini yönetin. Bağımsız alarmlar, şefler ve mutfak organizasyonu (Mise en Place) için ideal.";
const faq = [
  {
    question: 'Kaç tane zamanlayıcı oluşturabilirim?',
    answer: 'Sınırsız. "+" butonu ile ihtiyacınız olan her yemek için bir tane ekleyin. Aynı anda makarna haşlarken, sos çektirirken ve fırın çalışırken mükemmel organizasyon sağlar.',
  },
  {
    question: 'Etlerin dinlendirilmesi neden önemlidir?',
    answer: 'Eti ateşten alır almaz keserseniz, içindeki sular tabağa akar. 5-10 dakika dinlendirirseniz, lifler gevşer ve sular ete geri dağılır. Sonuç: kuru değil, sulu bir et.',
  },
  {
    question: 'Ekran kilitliyken çalışır mı?',
    answer: 'Evet, ancak bildirim izinlerini vermeniz gerekir. Zamanlayıcılar arka planda çalışmaya devam eder ve sekme değiştirseniz veya telefonu kilitleseniz bile sesli bildirimle sizi uyarır.',
  },
  {
    question: 'Gıda "Tehlike Bölgesi" nedir?',
    answer: '5°C ile 65°C arasında bakteriler hızla çoğalır. Pişmiş gıdalar bu bölgede 2 saatten fazla (hava 30°C üzerindeyse 1 saat) kalmamalıdır. Soğutma süresini kontrol etmek için zamanlayıcı kullanın.',
  },
];
const howTo = [
  {
    name: 'Birden fazla zamanlayıcı oluşturun',
    text: '"+" düğmesini kullanarak ihtiyacınız kadar zamanlayıcı ekleyin. Birden fazla yemeği aynı anda yönetmek için idealdir.',
  },
  {
    name: 'Zamanlayıcıları özelleştirin',
    text: 'Hangi yemeğin piştiğini anlamak için her birine "Fırın", "Pirinç", "Sos" gibi isimler verin.',
  },
  {
    name: 'Mobil dock üzerinden kontrol edin',
    text: 'Mobilde, aktif zamanlayıcılar alt kısımda kaydırılabilir bir panelde görünür. Buradan duraklatabilir veya sıfırlayabilirsiniz.',
  },
  {
    name: 'Bildirimleri alın',
    text: 'Tarayıcının süre bittiğinde sizi uyarması için bildirimlere izin verin.',
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
  slug: 'mutfak-zamanlayici',
  title: 'Çoklu Mutfak Zamanlayıcı',
  description: 'Aynı anda birden fazla pişirme süresini yönetin. Bağımsız alarmlar, şefler ve mutfak organizasyonu (Mise en Place) için ideal.',
  faqTitle: 'Sıkça Sorulan Sorular',
  bibliographyTitle: 'Referanslar',
  ui: {
    addTimer: 'Zamanlayıcı Ekle',
    stopAll: 'Hepsini Durdur',
    defaultName: 'Zamanlayıcı',
    newTimerName: 'Yeni Zamanlayıcı',
    timerDefault1: 'Zamanlayıcı 1',
    timerDefault2: 'Zamanlayıcı 2',
    timerDefault3: 'Zamanlayıcı 3',
    label: 'Etiket',
    hours: 'Saat',
    minutes: 'Dak',
    seconds: 'Sn',
    ready: 'Hazır',
    start: 'Başlat',
    pause: 'Duraklat',
    reset: 'Sıfırla',
    addOneMin: '+1 dk',
    addFiveMin: '+5 dk',
    statusReady: 'Hazır',
    statusRunning: 'Çalışıyor',
    statusPaused: 'Duraklatıldı',
    statusFinished: 'SÜRE DOLDU!',
    finishNotification: 'Zamanlayıcı bitti:',
  },
  faq,
  bibliography: [
    {
      name: 'Gıda Güvenliği: USDA Guidelines',
      url: 'https://www.fsis.usda.gov/',
    },
    {
      name: 'Mise en Place - Profesyonel Mutfak',
      url: 'https://www.escoffier.edu/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Mutfakta Zaman Yönetimi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Profesyonel mutfak sadece tariflerden ibaret değildir, <strong>hassas zaman yönetimi</strong> ile ilgilidir. Fransızca <em>"Mise en Place"</em> kavramı, zamanı da bir malzeme olarak görür.',
    },
    {
      type: 'title',
      text: 'Sıcaklık ve Zamanın Rolü',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Besin', 'Pişme Derecesi', 'Süre', 'Avantaj'],
      rows: [
        ['Rafadan Yumurta', 'Sıvı sarı', '3-4 dk', 'Yumuşak protein'],
        ['Kayısı Yumurta', 'Kremsi sarı', '5-6 dk', 'Doku dengesi'],
        ['Katı Yumurta', 'Tam pişmiş', '9-11 dk', 'Maksimum kıvam'],
        ['Et - Mühürleme', 'Yüksek ısı', '1-2 dk/taraf', 'Maillard reaksiyonu'],
        ['Et - Dinlendirme', 'Dinlenme', '5-20 dk', 'Su dağılımı'],
      ],
    },
    {
      type: 'title',
      text: 'Gıda Güvenliği: Tehlike Bölgesi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zaman sadece kaliteyi değil, güvenliği de etkiler. Bakteriyel "Tehlike Bölgesi" 5°C ile 65°C arasındadır. Pişmiş yemekler bu aralıkta <strong>2 saatten</strong> fazla kalmamalıdır.',
    },
    {
      type: 'title',
      text: 'Profesyonel Organizasyon İpuçları',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Bitiş zamanlarını kademelendirin:</strong> Her şey aynı anda biterse, servis sırasında zorlanırsınız.',
        '<strong>Kalıcı ısıyı kullanın:</strong> Makarna veya sebzeleri süre dolmadan 1-2 dakika önce ocaktan alın.',
        '<strong>Zamanlayıcıları isimlendirin:</strong> "Fırın", "Pilav" veya "Sos" gibi etiketler kullanın.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Profesyonel İpucu:</strong> Zaman hassasiyeti, bir şefi ev aşçısından ayıran şeydir. İstikrarlı sonuçlar için teknolojiyi kullanın.',
    },
  ],
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
