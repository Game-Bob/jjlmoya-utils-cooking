import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Lakto Fermantasyon Tuz Hesaplayıcı Biyo Organik Bilimsel Rehber";
const description = "Kuru tuzlama ve ıslak salamura için hassas tuz yüzdeleri hesaplayın. Bakteri popülasyonlarını dengeleyin, küflenmeyi önleyin ve gıda muhafazasında ustalaşın.";
const faq = [
  {
    question: "Lakto fermantasyonda tuz yüzdesi neden kritiktir?",
    answer: "Tuz, ozmotik basınç yoluyla zararlı patojenleri ve küfleri baskılarken, tuza toleranslı Laktik Asit Bakterilerinin (LAB) gelişmesine, şekerleri fermente etmesine ve laktik asit üretmesine izin verir."
  },
  {
    question: "Kuru tuzlama ve ıslak salamura arasındaki fark nedir?",
    answer: "Kuru tuzlama, tuzu çözmek için gıdanın kendi nemini kullanır (rendelenmiş lahana için idealdir). Islak salamura, bütün veya parça sebzeleri tamamen batırmak için dışarıdan su ve tuz ekler."
  },
  {
    question: "Klorlu musluk suyunu fermantasyon için kullanabilir miyim?",
    answer: "Klor bakteri üremesini engelleyebilir. Tutarlı fermantasyon sonuçları için filtrelenmiş veya kaynak suyu kullanılması şiddetle tavsiye edilir."
  },
  {
    question: "Ağırlık yüzdesi hacim ölçümlerinden daha mı iyidir?",
    answer: "Evet. Farklı tuz türleri (Koser, deniz tuzu, sofra tuzu) farklı kristal boyutlarına ve yoğunluklara sahiptir. Tuzu gram cinsinden tartmak, kullanılan tuz türünden bağımsız olarak kesin tuzluluk sağlar."
  }
];

const howTo = [
  {
    name: "Fermantasyon modunu seçin",
    text: "Sebzelerin kendi sularını kullanıyorsanız Kuru modu veya malzemeleri kaplamak için su ekliyorsanız Islak modu seçin."
  },
  {
    name: "Malzemeleri tartın",
    text: "Sebzelerin gram cinsinden tam ağırlığını girin. Islak salamura kullanıyorsanız, suyun ağırlığını da girin."
  },
  {
    name: "Hedef tuzluluğu ayarlayın",
    text: "Tuzluluk yüzdesi kontrolünü kaydırın. Genel güvenlik ve optimal laktik asit bakteri büyümesi için %2,0 ile %3,5 arasını hedefleyin."
  },
  {
    name: "Tuzu ölçün",
    text: "Gereken tam gram tuzu ölçmek için dijital teraziyi kullanın. Fermantasyon kabınıza ekleyin."
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
  slug: 'lakto-fermantasyon-tuz-hesaplayici',
  title: 'Lakto Fermantasyon Tuz Hesaplayıcı',
  description: 'Kuru tuzlama ve ıslak salamura için hassas tuz yüzdeleri hesaplayın. Bakteri popülasyonlarını dengeleyin, küflenmeyi önleyin ve gıda muhafazasında ustalaşın.',
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
    title: "Lakto Fermantasyon Tuz Hesaplayıcı",
    subtitle: "Biyo organik muhafaza için hassas tuzluluk kontrolü",
    unitLabel: "Ölçüm Sistemi",
    metricUnit: "Metrik (g / gram)",
    imperialUnit: "Imperial (oz / ons)",
    modeLabel: "Fermantasyon Modu",
    dryMode: "Kuru Tuzlama",
    wetMode: "Islak Salamura",
    vegWeightLabel: "Sebze Ağırlığı",
    waterWeightLabel: "Su Ağırlığı",
    salinityLabel: "Hedef Tuzluluk (%)",
    saltGramsLabel: "Gerekli Tuz",
    fineSaltLabel: "İnce Tuz (çay kaşığı)",
    kosherSaltLabel: "Koser Tuz (çay kaşığı)",
    statusDanger: "Tehlike Bölgesi",
    statusDangerDesc: "%2,0'nin altındaki tuzluluk patojenleri ve küfleri engellemek için yetersizdir. Güvenliği sağlamak için tuzluluğu artırın.",
    statusOptimal: "Optimal LAB Bölgesi",
    statusOptimalDesc: "%2,0 ile %3,5 arasındaki tuzluluk, Laktik Asit Bakterilerinin (LAB) baskın olması ve güvenli bir şekilde fermente olması için idealdir.",
    statusInhibited: "Engellenmiş Bölge",
    statusInhibitedDesc: "%3,5'in üzerindeki tuzluluk fermantasyonu yavaşlatır veya durdurur. Uzun süreli muhafaza için kullanışlıdır ancak bakteri aktivitesini geciktirir.",
    petriTitle: "Mikrobiyolojik Simülasyon",
    scaleTitle: "Dijital Terazi Ekranı",
    disclaimer: "Not: Hacimsel ölçümler yerine dijital terazi kullanarak tuz tartmak şiddetle tavsiye edilir.",
    kosherLabel: "Koser Tuz",
    fineLabel: "İnce Tuz",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Lakto-Fermantasyon Kimyası ve Tuzluluk Kontrolü Nihai Rehberi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lakto-fermantasyon, sebze ve meyveleri muhafaza etmek için Laktik Asit Bakterileri (LAB) tarafından yürütülen dinamik bir biyokimyasal süreçtir. Tüm mekanizma, faydalı bakterilerin gelişirken bozulma organizmalarının, küflerin ve patojenlerin baskılandığı seçici bir ortam yaratmaya bağlıdır. Tuzluluk kontrolü, bu biyolojik seçiciliği elde etmek için en kritik araçtır.',
    },
    {
      type: 'title',
      text: 'Muhafazada Tuzun Biyokimyasal Etkisi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tuz çiğ sebzelere uygulandığında, <strong>ozmotik basınç</strong> olarak bilinen fiziksel bir süreçle çalışır. Bitki hücrelerinin dışındaki yüksek tuz konsantrasyonu, ozmoz yoluyla (plazmoliz) bitki dokularından su ve çözünmüş şekerleri çeker. Bu, Laktik Asit Bakterileri için mükemmel yakıt görevi gören besin açısından zengin bir salamura oluşturur. Aynı zamanda ozmotik basınç, yüksek tuzluluk seviyelerine tolerans gösteremeyen <em>Escherichia coli</em> veya <em>Clostridium botulinum</em> gibi istenmeyen küflerin, mayaların ve patojenik bakterilerin hücre zarlarını susuz bırakır ve parçalar.',
    },
    {
      type: 'title',
      text: 'Mikrobiyolojik Süksesyon: LAB Fermantları Nasıl Kolonize Eder',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lakto-fermantasyon tek bir bakteri türü tarafından değil, asitlik arttıkça baskın hale gelen farklı suşların birbirini izlemesiyle gerçekleştirilir. Tipik bir sebze fermantasyonunda döngü üç farklı aşamada gerçekleşir:',
    },
    {
      type: 'list',
      items: [
        '<strong>Aşama 1 - Leuconostoc mesenteroides:</strong> Bu heterofermentatif bakteri fermantasyonu başlatır. Başlangıçta çok aktiftir; laktik asit, asetik asit, karbondioksit (anaerobik bir atmosfer oluşturmaya yardımcı olur) ve etanol üretir. pH\'ı hızla düşürerek ortamı sonraki türler için hazırlar.',
        '<strong>Aşama 2 - Lactobacillus plantarum ve Lactobacillus brevis:</strong> pH 5,0\'in altına düştüğünde, <em>L. mesenteroides</em> ölür ve <em>L. plantarum</em> gibi aside toleranslı homofermentatif bakteriler devralır. Kalan basit şekerleri yalnızca laktik aside fermente ederek pH\'ı hızla düşürürler.',
        '<strong>Aşama 3 - Pediococcus pentosaceus ve diğerleri:</strong> Uzun süreli fermantasyonlarda, bu yüksek derecede aside toleranslı bakteriler, şekerler tamamen tükenene veya pH yaklaşık 3,5 ila 3,8\'e ulaşana kadar asit üretmeye devam ederek ortamı süresiz olarak stabilize eder.'
      ],
    },
    {
      type: 'title',
      text: 'Sebze Dokusunu Koruma: Pekün Bağlantısı',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ev fermantasyonunda yaygın bir sorun yumuşamadır. Bitki hücreleri, pektin adı verilen yapısal bir polisakkarit tarafından bir arada tutulur. Bozulma mikroorganizmaları, <strong>pektinazlar</strong> adı verilen enzimler üretir; bunlar pektini parçalar ve bitki duvarlarına zarar vererek yumuşamaya neden olur. Tuzluluk seviyesini %2,0\'nin üzerinde tutmak, bu pektinaz enzimlerinin aktivitesini doğrudan inhibe eder. Ayrıca, rafine edilmemiş deniz tuzunda bulunan veya kalsiyum klorür olarak eklenen kalsiyum iyonları, pektin molekülleriyle çapraz bağlanarak kalsiyum pektat oluşturabilir; bu da turşuları ve lahana turşusunu gevrek tutar.',
    },
    {
      type: 'title',
      text: 'Kuru Tuzlama ve Islak Salamura Matematiği',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tuz hesaplama formülünü anlamak kritik öneme sahiptir. Kuru tuzlama için (genellikle lahana turşusunda olduğu gibi rendelenmiş sebzeler için kullanılır), tuz yüzdesi yalnızca sebzenin ağırlığına göre hesaplanır. Islak salamura için (salatalık veya havuç gibi bütün veya büyük parça sebzeler için kullanılır), tuz yüzdesi <strong>hem sebzelerin hem de eklenen suyun toplam ağırlığına</strong> göre hesaplanmalıdır. Tuzu yalnızca su ağırlığına göre hesaplamak, nihai tuzluluğu seyrelten yaygın bir hatadır, çünkü sebzelerin içindeki su sonunda salamuranın seyrelmesine neden olur.',
    },
    {
      type: 'table',
      headers: ['Tuzluluk Aralığı', 'Mikrobiyolojik Durum', 'Tipik Kullanım Alanları', 'Güvenlik Seviyesi'],
      rows: [
        ['< %2,0', 'Patojen Riski / Küf Tehlikesi', 'Önerilmez', 'Düşük'],
        ['%2,0 - %2,5', 'Optimal Laktik Asit Bakteri Çoğalması', 'Lahana turşusu, Kimchi, Salatalık turşusu', 'Yüksek'],
        ['%2,5 - %3,5', 'Yavaş fermantasyon / Yüksek doku koruma', 'Acı soslar, sarımsak, kök sebzeler', 'Yüksek'],
        ['> %3,5', 'Bakteri inhibisyonu / Sadece muhafaza', 'Zeytin, uzun süre olgunlaştırılmış biberler, yüksek sıcaklık', 'Güvenli ancak etkisiz'],
      ],
    },
    {
      type: 'title',
      text: 'Tuzu Tartmak Neden Hacim Ölçümünden Daha İyidir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tuzu hacimle (yemek kaşığı veya çay kaşığı) ölçmek son derece güvenilmezdir. Sofra tuzu incedir ve sıkıca paketlenir, bir çay kaşığı 6 grama kadar gelebilir. Buna karşılık, Koşer tuzu, hava cepleri olan büyük, pul pul kristallere sahiptir ve çay kaşığı başına yalnızca 4 gram ağırlığındadır. Kaba deniz tuzu bu ikisinin arasında bir yerdedir. Hacim ölçümleri kullanmak, bir fermantasyonun tehlikeli şekilde az tuzlanmasına veya aşırı tuzlama nedeniyle tamamen durmasına kolayca neden olabilir. Malzemeleri dijital terazide gram cinsinden tartmak, tutarlı, güvenli ve tekrarlanabilir sonuçlar garanti eder.',
    },
    {
      type: 'title',
      text: 'Lakto-Fermantasyonda Sorun Giderme ve En İyi Uygulamalar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Başarılı bir fermantasyon sağlamak için her zaman şu kurallara uyun: Aerobik küf oluşumunu önlemek için tüm sebzeleri salamura altında tamamen batık tutun. Temiz kaplar ve ağırlıklar kullanın. Faz 1 bakterilerinin geride kalmasını önlemek için serin oda sıcaklığında (18°C ila 22°C) fermente edin. Yüzeyde beyaz bir film oluşursa, bunun Kahm mayası mı (oksijene maruz kalma nedeniyle oluşan zararsız bir yabani maya) yoksa küf mü olduğunu kontrol edin. Küf tüylü ve renklidir; mevcutsa fermantasyon atılmalıdır. Kahm mayası kazınarak çıkarılabilir, ancak tadı etkileyebilir.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
