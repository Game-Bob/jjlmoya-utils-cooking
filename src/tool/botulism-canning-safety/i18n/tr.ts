import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Botulizm Konserve Guvenligi Denetleyici Termal Olum Hesaplayici";
const description = "Clostridium botulinum icin termal spor azaltimi ve F0 sterilizasyon letalitesini hesaplayin. Dusuk asitli ve asitli konserve guvenlik bolgelerini degerlendirin.";
const faq = [
  {
    question: "Clostridium botulinum neden evde konserve yapiminda en buyuk endise kaynagidir?",
    answer: "Clostridium botulinum, botulinum toksini ureten anaerobik, spor olusturan bir bakteridir ve bilinen en olucu biyolojik maddelerden biridir. Sporlar asiri derecede isiya dayanikli olup, sicaklik yetersizse kapali kavanozlar icindeki anaerobik kosullarda hayatta kalabilir."
  },
  {
    question: "Gida muhafazasinda pH 4.6'nin kritik onemi nedir?",
    answer: "pH degeri 4.6'nin altinda olan gidalar asitli olarak siniflandirilir. Bu ortamlarda botulinum sporlari filizlenemez veya toksin uretemez. pH degeri 4.6 veya daha yuksek olan gidalar icin, sporlari yok etmek amaciyla 116 santigrat derecenin uzerinde sicakliklara ulasmak amaciyla basincli konserve yapimi zorunludur."
  },
  {
    question: "F0 sterilizasyon letalite degeri nedir?",
    answer: "F0 degeri, 121.11 santigrat derecede esdeger sterilizasyon suresini olcer. Dusuk asitli gidalar icin standart sterilizasyon prosesi, spor popilasyonunda on iki basamakli bir azalmayi temsil eden 3.0 dakika veya daha yuksek bir F0 degeri gerektirir."
  },
  {
    question: "Dusuk asitli gidalar icin neden su banyosu kullanamam?",
    answer: "Su banyosu konserveciligi yalnizca kaynama noktasina (100 santigrat derece) ulasir. Bu sicaklik, dusuk asitli gidalardaki Clostridium botulinum'un isiya dayanikli sporlarini oldurmek icin yetersizdir. Sporlar hayatta kalir ve oda sicakliginda toksin uretir."
  }
];

const howTo = [
  {
    name: "Gida asitlik seviyesini girin",
    text: "Malzemelerinizin pH degerini belirleyin ve girin. pH 4.6 veya daha yuksekse, gida dusuk asitlidir."
  },
  {
    name: "Konserve teknigini secin",
    text: "Muhafaza ekipmaniniza bagli olarak su banyosu veya basincli konserve arasinda secim yapin."
  },
  {
    name: "Sicaklik ve sureyi belirleyin",
    text: "Konserve isleme sicakligini ve kavanozlarin bu sicaklikta kaldigi sureyi dakika cinsinden girin."
  },
  {
    name: "Guvenlik teshisini degerlendirin",
    text: "Uygunlugu onaylamak icin ortaya cikan F0 degerini, basamakli spor azaltma sayisini ve guvenlik bolgesi gostergesini kontrol edin."
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
  title: 'Botulizm Konserve Guvenligi Denetleyici',
  description: 'Clostridium botulinum icin termal spor azaltimi ve F0 sterilizasyon letalitesini hesaplayin. Dusuk asitli ve asitli konserve guvenlik bolgelerini degerlendirin.',
  faqTitle: 'Sikca Sorulan Sorular',
  ui: {
    title: "Konserve Otoklav Monitru",
    subtitle: "Termal olum teshisi ve botulizm guvenlik degerlendiricisi",
    methodLabel: "Konserve Yontemi",
    waterBath: "Su Banyosu Konserve",
    pressureCanner: "Basincli Konserve",
    tempLabel: "Konserve Sicakligi",
    timeLabel: "Islem Suresi",
    phLabel: "Gida pH Degeri",
    f0Label: "F0 Letalite Degeri",
    dLabel: "Hesaplanan D Degeri",
    sporesLabel: "Spor Populasyonu",
    statusSafe: "Sterilizasyon Tamamlandi",
    statusMarginal: "Sinirda Sterilizasyon",
    statusUnsafe: "Yuksek Botulizm Riski",
    statusSafeDesc: "Termal letalite, hedef F0 3.0 dakikayi asmaktadir. Sporlar tamamen devre disi birakilmistir.",
    statusMarginalDesc: "Islem kismi deaktivasyona ulasir ancak 12D guvenlik standardinin altinda kalir. Sureyi veya sicakligi ayarlayin.",
    statusUnsafeDesc: "Islem Clostridium botulinum'u devre disi birakamaz. Su banyosundaki dusuk asitli gidalar tehlikeli olmaya devam eder.",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "dk",
    logReductionLabel: "Basamakli Azaltma",
    dValueUnit: "dakika",
    indicatorSectionTitle: "Teshis Gostergeleri",
    visualizerSectionTitle: "Spor Azaltma",
    f0Tooltip: "121.11°C'de dakika cinsinden esdeger sterilizasyon suresi. Guvenli esik 3.0 veya daha yuksektir.",
    dTooltip: "Basamakli azaltma suresi: mevcut sicaklikta sporlarin %90'ini yok etmek icin gereken dakika cinsinden sure.",
    logReductionTooltip: "Basamakli (10 katli) azaltma sayisi. 12D azaltma guvenlik standardidir.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Termal Isleme ve Spor Deaktivasyon Kinetiginin Bilimsel Mekanizmalari',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Konservecilikte termal isleme, patojen ve bozulmaya neden olan mikroorganizmalari yok ederek ticari steriliteyi guvence altina alir. Dusuk asitli gida muhafazasinda guvenlik yonergelerinin temel odagi Clostridium botulinum'dur. Botulinum sporlari, vejetatif hucrelere kiyasla oldukca isiya dayaniklidir. Bu sporlari devre disi birakmak, hesaplanan bir sure boyunca yuksek sicaklik uygulayan bir termal olum prosesini gerektirir. Sicaklik ve deaktivasyon hizi arasindaki matematiksel iliski, basamakli azaltma suresi (D degeri) ve sicaklik bagimlilik faktoru (z degeri) ile ifade edilir.",
    },
    {
      type: 'title',
      text: 'Gida Siniflandirmasi ve Kritik pH 4.6 Guvenlik Esigi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "pH 4.6 degeri, muhafaza guvenligi icin sinir cizgisidir. pH 4.6'nin altindaki asitli gidalar, dogal olarak botulinum sporlarinin filizlenmesini ve toksin uretimini engeller. Bu gidalar icin kaynar su banyosunda 100 santigrat derecede isleme yeterlidir. Ancak pH 4.6'nin uzerindeki dusuk asitli gidalar, buhar sicakligini yukseltmek ve tam termal spor yok edilmesini saglamak icin basincli konserve isleminden gecmelidir. Asagidaki tablo, yaygin malzemeler icin siniflandirmalari ve konserve yontemlerini detaylandirmaktadir:",
    },
    {
      type: 'table',
      headers: ['Gida Grubu', 'pH Araligi', 'Gerekli Konserve Yontemi', 'Yaygin Ornekler'],
      rows: [
        ['Yuksek Asitli', '4.0 Altinda', 'Su Banyosu Konserve', 'Elma, Meyveler, Turuncgiller, Seftali, Sirke Tursulari'],
        ['Asitlendirilmis veya Orta Asitli', '4.0 ila 4.6', 'Asit Ayarli Su Banyosu', 'Domates, Incir, Armut'],
        ['Dusuk Asitli', '4.6 ve Uzeri', 'Zorunlu Basincli Konserve', 'Et, Deniz Urunleri, Fasulye, Misir, Patates, Corbalar'],
      ],
    },
    {
      type: 'title',
      text: 'Rakim Ayarlamalari ve Kaynama Noktasi Guvenlik Duzeltmeleri',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Rakim arttikca atmosfer basinci duser ve suyun kaynama noktasi 100 santigrat derecenin altina iner. Su banyosu konserveciliginde bu dusuk sicaklik, sporlarin D degerini arttirir ve daha uzun isleme sureleri gerektirir. Basincli konservecilikte, hedef ic sterilizasyon sicakligini korumak icin kadranli veya agirlikli olcu ayarlari yukseltilmelidir. Asagida kaynama noktalari ve gerekli basincli konserve ayarlamalari icin referans kilavuzu bulunmaktadir:',
    },
    {
      type: 'table',
      headers: ['Rakim Araligi', 'Su Kaynama Noktasi', 'Gerekli Kadranli Olcu Basinci', 'Gerekli Agirlikli Olcu Basinci'],
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
      text: '12D Spor Azaltma Konsepti Botulizmi Nasil Onler',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Isi ile bakteri yok etme logaritmiktir. D degeri, belirli bir sicaklikta spor popilasyonunun %90'ini yok etmek icin gereken sureyi temsil eder ve bu da bir basamakli log azaltmaya esittir. Clostridium botulinum icin referans standart, 121.11 santigrat derecede 0.21 dakikalik bir D degeridir. Yuksek guvenlik marjlari elde etmek icin ticari standartlar, on iki basamakli bir azaltma prosesi (12D) talep eder, yani spor popilasyonu on iki kat on azaltilir. Bu, dusuk asitli gidalarda guvenligi garanti eden 3.0 dakikalik bir hedef F0 degeri saglar.",
    },
    {
      type: 'title',
      text: 'Pratik Ev Konserve Kilavuzu ve Guvenlik Ipuclari',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Domateslerin dogal pH degeri kritik 4.6 sinirina yakin dalgalandigi icin, su banyosu isleminden once her zaman limon suyu veya sitrik asit ile asitlendirin.',
        'Isleme surelerini asla kisaltmayin veya sicakliklari dusurmeyin. Termal olum kinetigi logaritmiktir ve kucuk ayarlamalar sporlarin hayatta kalmasina izin verebilir.',
        'Basincli konserve makinelerindeki kadranli olculerin dogrulugu icin yillik test edildiginden emin olun, cunku yanlis basinclik okumalari ic sterilizasyon sicakliklarini dogrudan tehlikeye atar.',
        'Su banyolarinda isleme surelerini ayarlayarak veya basincli konserve makinelerinde PSI ayarlarini yukselterek rakim farkliliklarini telafi edin.',
        'Genel tarif asit icerse bile, su banyosunda et veya fasulye gibi dusuk asitli malzemeler iceren karisik tarifleri konservelemekten kacinin.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
