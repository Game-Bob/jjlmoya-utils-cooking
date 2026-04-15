import type { ToolLocaleContent } from '../../../types';

const title = "Muz Olgunluk Teşhisi ve Saklama: Bilimsel Kılavuz";
const description = "Muzlarınızın olgunluk durumunu bilimsel hassasiyetle analiz edin. Saklama tekniklerini, etilen biyokimyasını ve besin optimizasyonunu öğrenin.";
const faq = [
  {
    question: "Muzlar buzdolabında neden kararır?",
    answer: "Soğuk, kabuğun hücre duvarlarını kırarak fenolleri oksitleyen ve siyah polifenoller oluşturan enzimleri serbest bırakır. Ancak iç kısım genellikle dışarıya göre daha uzun süre sert ve tatlı kalır.",
  },
  {
    question: "Bir muzu nasıl hızlı olgunlaştırabilirim?",
    answer: "Onları bir elma veya domatesle birlikte kapalı bir kağıt torbaya koyun. Bunlar, olgunlaşmayı hızlandıran etilen gazı yayar. Çok aceleniz varsa, onları düşük sıcaklıkta birkaç dakika fırına atabilirsiniz.",
  },
  {
    question: "Kahverengi lekeli muzları yemek güvenli midir?",
    answer: "Evet, kesinlikle. Aslında lekeler, nişastanın şekere dönüştüğünü gösterir, bu da onları daha tatlı ve sindirimi kolay hale getirir. Sadece küflenmişlerse, kötü kokuyorlarsa veya aşırı yumuşaklarsa atın.",
  },
  {
    question: "Etilen nedir?",
    answer: "Büyümeyi ve olgunlaşmayı düzenleyen gaz halindeki bir bitki hormonudur. Muz klimakterik bir meyvedir, yani toplandıktan sonra da etilen üretmeye ve olgunlaşmaya devam eder.",
  },
];
const howTo = [
  {
    name: "Rengi gözlemleyin",
    text: "Mevcut olgunluk durumunu belirlemek için kabuğun rengini yeşilden koyu kahverengiye kadar dikkatlice inceleyin.",
  },
  {
    name: "Simülatörü kullanın",
    text: "Bir sonraki aşamaya ne zaman ulaşılacağına dair kesin tahminleri görmek için olgunluk göstergesini kaydırın.",
  },
  {
    name: "Koşulları ayarlayın",
    text: "Sıcaklık ve nemin olgunlaşma hızını nasıl etkilediğini görmek için bunları değiştirin.",
  },
  {
    name: "Saklama yöntemlerini uygulayın",
    text: "Mevcut duruma göre özel saklama ve hızlandırma önerilerini takip edin.",
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
  slug: 'muz-teshisi',
  title: "Muz Olgunluk Teşhisi ve Saklama: Bilimsel Kılavuz",
  description: "Muzlarınızın olgunluk durumunu bilimsel hassasiyetle analiz edin. Saklama tekniklerini, etilen biyokimyasını ve besin optimizasyonunu öğrenin.",
  faqTitle: "Sıkça Sorulan Sorular",
  bibliographyTitle: "Kaynaklar ve Referanslar",
  ui: {
    ripesnessLabel: "Olgunluk Durumu",
    nextStageLabel: "Sonraki Aşama",
    daysUnit: "Gün",
    tempLabel: "Sıcaklık",
    humidityLabel: "Nem",
    partnerToggleTitle: "Klimakterik Eşlik",
    partnerToggleSubtitle: "Dış etilen etkisi",
    conservationTitle: "Saklama",
    accelerationTitle: "Hızlandırma",
    stage1Name: "Zümrüt Yeşili",
    stage1Desc: "Maksimum dirençli nişasta içeriği. Tam sertlik.",
    stage1Conservation: "Oda sıcaklığı (18-20°C). Soğuktan kaçının (<12°C).",
    stage1Acceleration: "Bir elma veya olgun domates ile kağıt torba.",
    stage2Name: "Parlak Sarı",
    stage2Desc: "Sertlik ve başlangıç tatlılığı arasında mükemmel denge.",
    stage2Conservation: "Serin yer, etileni frenlemek için salkımdan ayırın.",
    stage2Acceleration: "Salkımda tutun ve plastiğe sarın.",
    stage3Name: "Tatlı Benekli",
    stage3Desc: "Antioksidan zirvesi. Yoğun tatlılık ve kremsi doku.",
    stage3Conservation: "İç kısmı korumak için buzdolabına koyun (kabuk kararsa bile).",
    stage3Acceleration: "Hafif ısı (ısı kaynağına yakın, doğrudan değil).",
    stage4Name: "Tarçın Kahverengi Olgun",
    stage4Desc: "Çok yumuşak doku. Şekersiz pastacılık için ideal.",
    stage4Conservation: "Hemen soyun ve dondurun.",
    stage4Acceleration: "Zaten maksimuma ulaştı.",
    stage5Name: "Geçmiş / Fermente",
    stage5Desc: "Gelişmiş bozulma süreci.",
    stage5Conservation: "Doğrudan tüketim için önerilmez.",
    stage5Acceleration: "N/A",
  },
  faq: [
    {
      question: "Muzlar buzdolabında neden kararır?",
      answer: "Soğuk, kabuğun hücre duvarlarını kırarak fenolleri oksitleyen ve siyah polifenoller oluşturan enzimleri serbest bırakır. Ancak iç kısım genellikle dışarıya göre daha uzun süre sert ve tatlı kalır.",
    },
    {
      question: "Bir muzu nasıl hızlı olgunlaştırabilirim?",
      answer: "Onları bir elma veya domatesle birlikte kapalı bir kağıt torbaya koyun. Bunlar, olgunlaşmayı hızlandıran etilen gazı yayar. Çok aceleniz varsa, onları düşük sıcaklıkta birkaç dakika fırına atabilirsiniz.",
    },
    {
      question: "Kahverengi lekeli muzları yemek güvenli midir?",
      answer: "Evet, kesinlikle. Aslında lekeler, nişastanın şekere dönüştüğünü gösterir, bu da onları daha tatlı ve sindirimi kolay hale getirir. Sadece küflenmişlerse, kötü kokuyorlarsa veya aşırı yumuşaklarsa atın.",
    },
    {
      question: "Etilen nedir?",
      answer: "Büyümeyi ve olgunlaşmayı düzenleyen gaz halindeki bir bitki hormonudur. Muz klimakterik bir meyvedir, yani toplandıktan sonra da etilen üretmeye ve olgunlaşmaya devam eder.",
    },
  ],
  howTo: [
    {
      name: "Rengi gözlemleyin",
      text: "Mevcut olgunluk durumunu belirlemek için kabuğun rengini yeşilden koyu kahverengiye kadar dikkatlice inceleyin.",
    },
    {
      name: "Simülatörü kullanın",
      text: "Bir sonraki aşamaya ne zaman ulaşılacağına dair kesin tahminleri görmek için olgunluk göstergesini kaydırın.",
    },
    {
      name: "Koşulları ayarlayın",
      text: "Sıcaklık ve nemin olgunlaşma hızını nasıl etkilediğini görmek için bunları değiştirin.",
    },
    {
      name: "Saklama yöntemlerini uygulayın",
      text: "Mevcut duruma göre özel saklama ve hızlandırma önerilerini takip edin.",
    },
  ],
  bibliography: [
    {
      name: 'Ethylene and Fruit Ripening: A Biological Review',
      url: '',
    },
    {
      name: 'Biochemical Changes in Musa acuminata during Ripening (Journal of Food Science)',
      url: 'https://www.foodsciencejournal.com/assets/archives/2017/vol2issue5/2-5-31-566.pdf',
    },
    {
      name: 'The Role of Respiration in Climacteric Fruits (Scientific American)',
      url: 'https://www.nature.com/articles/226976b0',
    },
  ],
  seo: [
    {
      type: 'title',
      text: "Musa × paradisiaca Olgunlaşma Bilimi",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Muz, dünyada en çok tüketilen meyvelerden biridir, ancak aynı zamanda biyolojik olarak en çok yanlış anlaşılanlardan biridir. Turunçgiller veya üzüm gibi klimakterik olmayan meyvelerin aksine muz, <strong>klimakterik bir meyvedir</strong>. Bu, toplandıktan sonra olgunlaşmaya devam ettiği, hücresel solunumunu ve temel bir gaz halindeki bitki hormonu olan <strong>etilen</strong> üretimini dramatik bir şekilde artırdığı anlamına gelir.",
    },
    {
      type: 'paragraph',
      html: "Biyokimyasal bir bakış açısından olgunlaşma, enzimatik olaylar silsilesidir. Bu süreçte amilaz gibi enzimler karmaşık karbonhidratları (nişastaları) basit şekerlere (fruktoz, glikoz ve sakaroz) dönüştürür. Bu değişim sadece tadı değiştirerek daha tatlı hale getirmekle kalmaz, aynı zamanda hücre duvarlarındaki pektini parçalayarak olgun muzun karakteristik özelliği olan o yumuşak ve kremsi dokuyu oluşturur.",
    },
    {
      type: 'title',
      text: "Etilen Döngüsü",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Etilen biyolojik bir anahtar görevi görür. Meyve küçük bir konsantrasyon algıladığında, daha fazla etilen üretiminden sorumlu genleri aktive ederek pozitif bir geri besleme döngüsü oluşturur. Bu nedenle çok olgun bir muz, meyvelikteki tüm komşularının olgunlaşmasını hızlandırır. Bu süreci yavaşlatmak için, üzerinde kahverengi benekler oluşmuş olanları hala yeşil olanlardan ayırmak hayati önem taşır.",
    },
    {
      type: 'title',
      text: "Buzdolabı Efsanesi",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Muzların buzdolabına girmemesi gerektiğine dair yaygın bir inanış vardır. Gerçek daha karmaşıktır: Soğuk (12°C'nin altı), kabuk hücrelerinde soğuk zararına neden olarak fenolleri oksitleyen ve kabuğu siyah yapan enzimleri serbest bırakır. Ancak bu sadece dış görünüşü etkiler. İç kısım zaten istenen olgunluğa ulaşmışsa, soğuk iç dokunun yumuşamasını neredeyse tamamen durdurarak tadı ve dokuyu birkaç gün daha korur.",
    },
    {
      type: 'title',
      text: "İleri Saklama Stratejileri",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "<strong>Sap Sızdırmazlığı:</strong> Salkım ucunu streç filmle sarmak etilen salınımını dramatik bir şekilde azaltır ve meyvenin ticari raf ömrünü 72 saate kadar uzatır.",
    },
    {
      type: 'paragraph',
      html: "<strong>Dinamik Askılama:</strong> Muzları asmak basınç kaynaklı ezilmeleri önler. Hasarlı dokular etileni daha hızlı salarak meyvenin tamamına yayılan hızlandırılmış olgunlaşma odakları oluşturur.",
    },
    {
      type: 'paragraph',
      html: "<strong>Kriyoterapi (Dondurma):</strong> 4. aşamadaki (kahverengi) muzlar için dondurmak en iyi seçenektir. Meyveyi dondurmadan önce soymak, nemin hapsolmasını önleyerek lif kalitesini korur.",
    },
    {
      type: 'title',
      text: "Aşamalara Göre Besinsel Değişimler",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Muz olgunlaştıkça besin profili radikal bir şekilde dönüşür, bu da tüketicinin hedeflerine göre spesifik bir diyet aracı olarak kullanılmasına olanak tanır.",
    },
    {
      type: 'table',
      headers: ['Aşama', 'Dirençli Nişasta', 'Özellikler', 'Temel Fayda'],
      rows: [
        ['Yeşil (1-2)', '~%80', 'Çok sert, maksimum nişasta içeriği', 'Bağırsak sağlığı ve glisemik kontrol'],
        ['Sarı (3)', '~%5', 'Sertlik ve tatlılık dengesi', 'Hızlı enerji ve B vitaminleri'],
        ['Benekli (4)', 'Minimum', 'Çok yumuşak, yüksek şeker içeriği', 'Maksimum antioksidan potansiyeli'],
        ['Kahverengi/Geçmiş (5)', 'Yok denecek kadar az', 'Çok yumuşak doku, gelişmiş fermantasyon', 'Tüketim için önerilmez'],
      ],
    },
    {
      type: 'title',
      text: "Sonuç ve Pratik Uygulama",
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Gıda israfını azaltın:</strong> Bir muzun durumunun kesin teşhisi, optimum tüketim anının belirlenmesini sağlayarak değerli meyvelerin israfını önler.',
        '<strong>Besinsel faydaları optimize edin:</strong> Bağırsak sağlığı için yeşil muzların dirençli nişastasından, maksimum antioksidan potansiyeli için benekli olanların antioksidanlarına kadar.',
        '<strong>Stratejik tüketimi planlayın:</strong> Muz kullanımını sağlık hedeflerinize göre uyarlayın: glisemik kontrol, hızlı enerji, sindirim veya antioksidanlar.',
      ],
    },
    {
      type: 'tip',
      html: "<strong>Bozulma Uyarısı:</strong> %85'in üzerindeki bağıl nem veya 25°C'nin üzerindeki sıcaklıklar gibi dış faktörler bozulmayı dramatik bir şekilde hızlandırarak muzun birkaç saat içinde optimum durumdan yenilemez duruma gelmesine neden olabilir. Bu simülatör, bu değişiklikleri öngörmenize ve stratejik planlama yapmanıza yardımcı olur.",
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
