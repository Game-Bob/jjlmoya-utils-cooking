import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Botulizm Konserve Güvenliği Denetleyici Termal Ölüm Hesaplayıcı";
const description = "Clostridium botulinum için termal spor azaltımı ve F0 sterilizasyon letalitesini hesaplayın. Düşük asitli ve asitli konserve güvenlik bölgelerini değerlendirin.";
const faq = [
  {
    question: "Clostridium botulinum neden evde konserve yapımında en büyük endişe kaynağıdır?",
    answer: "Clostridium botulinum, botulinum toksini üreten anaerobik, spor oluşturan bir bakteridir ve bilinen en ölümcül biyolojik maddelerden biridir. Sporlar aşırı derecede ısıya dayanıklı olup, sıcaklık yetersizse kapalı kavanozlar içindeki anaerobik koşullarda hayatta kalabilir."
  },
  {
    question: "Gıda muhafazasında pH 4.6'nın kritik önemi nedir?",
    answer: "pH değeri 4.6'nın altında olan gıdalar asitli olarak sınıflandırılır. Bu ortamlarda botulinum sporları filizlenemez veya toksin üretemez. pH değeri 4.6 veya daha yüksek olan gıdalar için, sporları yok etmek amacıyla 116 santigrat derecenin üzerinde sıcaklıklara ulaşmak amacıyla basınçlı konserve yapımı zorunludur."
  },
  {
    question: "F0 sterilizasyon letalite değeri nedir?",
    answer: "F0 değeri, 121.11 santigrat derecede eşdeğer sterilizasyon süresini ölçer. Düşük asitli gıdalar için standart sterilizasyon prosesi, spor popülasyonunda on iki basamaklı bir azalmayı temsil eden 3.0 dakika veya daha yüksek bir F0 değeri gerektirir."
  },
  {
    question: "Düşük asitli gıdalar için neden su banyosu kullanamam?",
    answer: "Su banyosu konserveciliği yalnızca kaynama noktasına (100 santigrat derece) ulaşır. Bu sıcaklık, düşük asitli gıdalardaki Clostridium botulinum'un ısıya dayanıklı sporlarını öldürmek için yetersizdir. Sporlar hayatta kalır ve oda sıcaklığında toksin üretir."
  }
];

const howTo = [
  {
    name: "Gıda asitlik seviyesini girin",
    text: "Malzemelerinizin pH değerini belirleyin ve girin. pH 4.6 veya daha yüksekse, gıda düşük asitlidir."
  },
  {
    name: "Konserve tekniğini seçin",
    text: "Muhafaza ekipmanınıza bağlı olarak su banyosu veya basınçlı konserve arasında seçim yapın."
  },
  {
    name: "Sıcaklık ve süreyi belirleyin",
    text: "Konserve işleme sıcaklığını ve kavanozların bu sıcaklıkta kaldığı süreyi dakika cinsinden girin."
  },
  {
    name: "Güvenlik teşhisini değerlendirin",
    text: "Uygunluğu onaylamak için ortaya çıkan F0 değerini, basamaklı spor azaltma sayısını ve güvenlik bölgesi göstergesini kontrol edin."
  }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'botulizm-konserve-guvenligi',
  title: 'Botulizm Konserve Güvenliği Denetleyici',
  description: 'Clostridium botulinum için termal spor azaltımı ve F0 sterilizasyon letalitesini hesaplayın. Düşük asitli ve asitli konserve güvenlik bölgelerini değerlendirin.',
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
    title: "Konserve Otoklav Monitörü",
    subtitle: "Termal ölüm teşhisi ve botulizm güvenlik değerlendiricisi",
    methodLabel: "Konserve Yöntemi",
    waterBath: "Su Banyosu Konserve",
    pressureCanner: "Basınçlı Konserve",
    tempLabel: "Konserve Sıcaklığı",
    timeLabel: "İşlem Süresi",
    phLabel: "Gıda pH Değeri",
    f0Label: "F0 Letalite Değeri",
    dLabel: "Hesaplanan D Degeri",
    sporesLabel: "Spor Popülasyonu",
    statusSafe: "Sterilizasyon Tamamlandı",
    statusMarginal: "Sınırda Sterilizasyon",
    statusUnsafe: "Yüksek Botulizm Riski",
    statusSafeDesc: "Termal letalite, hedef F0 3.0 dakikayı aşmaktadır. Sporlar tamamen devre dışı bırakılmıştır.",
    statusMarginalDesc: "İşlem kısmi deaktivasyona ulaşır ancak 12D güvenlik standardının altında kalır. Süreyi veya sıcaklığı ayarlayın.",
    statusUnsafeDesc: "İşlem Clostridium botulinum'u devre dışı bırakamaz. Su banyosundaki düşük asitli gıdalar tehlikeli olmaya devam eder.",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "dk",
    logReductionLabel: "Basamaklı Azaltma",
    dValueUnit: "dakika",
    indicatorSectionTitle: "Teşhis Göstergeleri",
    visualizerSectionTitle: "Spor Azaltma",
    f0Tooltip: "121.11°C'de dakika cinsinden eşdeğer sterilizasyon süresi. Güvenli eşik 3.0 veya daha yüksektir.",
    dTooltip: "Basamaklı azaltma süresi: mevcut sıcaklıkta sporların %90'ını yok etmek için gereken dakika cinsinden süre.",
    logReductionTooltip: "Basamaklı (10 katlı) azaltma sayısı. 12D azaltma güvenlik standardıdır.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Termal İşleme ve Spor Deaktivasyon Kinetiğinin Bilimsel Mekanizmaları',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Konservecilikte termal işleme, patojen ve bozulmaya neden olan mikroorganizmaları yok ederek ticari steriliteyi güvence altına alır. Düşük asitli gıda muhafazasında güvenlik yönergelerinin temel odağı Clostridium botulinum'dur. Botulinum sporları, vejetatif hücrelere kıyasla oldukça ısıya dayanıklıdır. Bu sporları devre dışı bırakmak, hesaplanan bir süre boyunca yüksek sıcaklık uygulayan bir termal ölüm prosesini gerektirir. Sıcaklık ve deaktivasyon hızı arasındaki matematiksel ilişki, basamakli azaltma süresi (D değeri) ve sıcaklık bağımlılık faktörü (z değeri) ile ifade edilir.",
    },
    {
      type: 'title',
      text: 'Gıda Sınıflandırılması ve Kritik pH 4.6 Güvenlik Eşiği',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "pH 4.6 değeri, muhafaza güvenliği için sınır çizgisidir. pH 4.6'nın altındaki asitli gıdalar, doğal olarak botulinum sporlarının filizlenmesini ve toksin üretimini engeller. Bu gıdalar için kaynar su banyosunda 100 santigrat derecede işleme yeterlidir. Ancak pH 4.6'nın üzerindeki düşük asitli gıdalar, buhar sıcaklığını yükseltmek ve tam termal spor yok edilmesini sağlamak için basınçlı konserve işleminden geçmelidir. Aşağıdaki tablo, yaygın malzemeler için sınıflandırmaları ve konserve yöntemlerini detaylandırmaktadır:",
    },
    {
      type: 'table',
      headers: ['Gıda Grubu', 'pH Aralığı', 'Gerekli Konserve Yöntemi', 'Yaygın Örnekler'],
      rows: [
        ['Yüksek Asitli', '4.0 Altında', 'Su Banyosu Konserve', 'Elma, Meyveler, Turunçgiller, Şeftali, Sirke Turşuları'],
        ['Asitlendirilmiş veya Orta Asitli', '4.0 ila 4.6', 'Asit Ayarlı Su Banyosu', 'Domates, İncir, Armut'],
        ['Düşük Asitli', '4.6 ve Üzeri', 'Zorunlu Basınçlı Konserve', 'Et, Deniz Ürünleri, Fasulye, Mısır, Patates, Çorbalar'],
      ],
    },
    {
      type: 'title',
      text: 'Rakım Ayarlamaları ve Kaynama Noktası Güvenlik Düzeltmeleri',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Rakım arttıkça atmosfer basıncı düşer ve suyun kaynama noktası 100 santigrat derecenin altına iner. Su banyosu konserveciliğinde bu düşük sıcaklık, sporların D değerini arttırır ve daha uzun işleme süreleri gerektirir. Basınçlı konservecilikte, hedef iç sterilizasyon sıcaklığını korumak için kadranlı veya ağırlıklı ölçü ayarları yükseltilmelidir. Aşağıda kaynama noktaları ve gerekli basınçlı konserve ayarlamaları için referans kılavuzu bulunmaktadır:',
    },
    {
      type: 'table',
      headers: ['Rakım Aralığı', 'Su Kaynama Noktası', 'Gerekli Kadranlı Ölçü Basıncı', 'Gerekli Ağırlıklı Ölçü Basıncı'],
      rows: [
        ['0 ila 300 metre', '100.0 °C', '11 PSI (121 °C)', '10 PSI (121 °C)'],
        ['300 ila 600 metre', '99.0 °C', '11 PSI (121 °C)', '15 PSI (121 °C)'],
        ['600 ila 900 metre', '98.0 °C', '12 PSI (121 °C)', '15 PSI (121 °C)'],
        ['900 ila 1200 metre', '97.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1200 ila 1500 metre', '96.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1500 ila 2000 metre', '94.5 °C', '14 PSI (121 °C)', '15 PSI (121 °C)'],
      ],
    },
    {
      type: 'title',
      text: '12D Spor Azaltma Konsepti Botulizmi Nasıl Önler',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Isı ile bakteri yok etme logaritmiktir. D değeri, belirli bir sıcaklıkta spor popülasyonunun %90'ını yok etmek için gereken süreyi temsil eder ve bu da bir basamaklı log azaltmaya eşittir. Clostridium botulinum için referans standart, 121.11 santigrat derecede 0.21 dakikalık bir D değeridir. Yüksek güvenlik marjları elde etmek için ticari standartlar, on iki basamaklı bir azaltma prosesi (12D) talep eder, yani spor popülasyonu on iki kat on azaltılır. Bu, düşük asitli gıdalarda güvenliği garanti eden 3.0 dakikalık bir hedef F0 değeri sağlar.",
    },
    {
      type: 'title',
      text: 'Pratik Ev Konserve Kılavuzu ve Güvenlik İpuçları',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Domateslerin doğal pH değeri kritik 4.6 sınırına yakın dalgalandığı için, su banyosu işleminden önce her zaman limon suyu veya sitrik asit ile asitlendirin.',
        'İşleme sürelerini asla kısaltmayın veya sıcaklıkları düşürmeyin. Termal ölüm kinetiği logaritmiktir ve küçük ayarlamalar sporların hayatta kalmasına izin verebilir.',
        'Basınçlı konserve makinelerindeki kadranlı ölçülerin doğruluğu için yıllık test edildiğinden emin olun, çünkü yanlış basınçlık okumaları iç sterilizasyon sıcaklıklarını doğrudan tehlikeye atar.',
        'Su banyolarında işleme sürelerini ayarlayarak veya basınçlı konserve makinelerinde PSI ayarlarını yükselterek rakım farklılıklarını telafi edin.',
        'Genel tarif asit içerse bile, su banyosunda et veya fasulye gibi düşük asitli malzemeler içeren karışık tarifleri konservelemekten kaçının.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
