import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Her Seferinde Mükemmel Jel için Pektin ve Reçel Hesaplayıcı';
const description = 'Meyvenizin mükemmel reçel kıvamına ulaşması için tam olarak ne kadar pektin, sitrik asit ve şeker gerektiğini hesaplayın. Hassas kimya ile cıvık veya lastiksi reçellerden kaçının.';

const faq = [
  {
    question: 'Pektin neden reçelin jelleşmesini sağlar?',
    answer: 'Pektin, meyve hücre duvarlarında bulunan doğal bir polisakkarittir. Şeker ve asit (pH 2,8-3,5) ile ısıtıldığında, pektin molekülleri su ve şekeri hapseden üç boyutlu bir jel ağı oluşturarak reçelin sürülebilir dokusunu yaratır.',
  },
  {
    question: 'HM ve LM pektin arasındaki fark nedir?',
    answer: 'Yüksek Metoksil (HM) pektin, jelleşmek için en az %60 şeker ve pH 3,5\'in altında bir değer gerektirir - geleneksel reçeller için idealdir. Düşük Metoksil (LM) pektin ise şeker yerine kalsiyum iyonları aracılığıyla jelleşir, böylece düşük şekerli veya şekersiz reçeller yapılabilir.',
  },
  {
    question: 'Reçelim neden bazen cıvık oluyor?',
    answer: 'Cıvık reçel genellikle yetersiz pektin (meyve doğal olarak pektin bakımından fakirdir), yetersiz asit (jelleşme için pH çok yüksektir) veya yetersiz şekerden (HM pektin için) kaynaklanır. Aşırı su ile seyreltme veya yetersiz pişirme de reçelin tutmasını engelleyebilir.',
  },
  {
    question: 'Sitrik asit tozu yerine limon suyu kullanabilir miyim?',
    answer: 'Evet. Bu hesaplayıcı sitrik asidi limon suyu eşdeğerlerine dönüştürür. Yaklaşık 25 ml limon suyu, 1 g sitrik asit ile aynı asitliği sağlar. Limon suyu ayrıca reçellere taze bir lezzet katar.',
  },
  {
    question: 'Hangi meyveler doğal olarak pektin bakımından zengindir?',
    answer: 'Elma, ayva, böğürtlen, kızılcık ve bektaşi üzümü doğal olarak pektin bakımından zengindir ve genellikle ilave pektin gerektirmez. Olgunlaşmamış meyve de tam olgun meyveden daha fazla pektin içerir.',
  },
];

const howTo = [
  {
    name: 'Meyvenizi seçin',
    text: 'Reçel yapacağınız meyveyi seçin. Her meyvenin, hangi katkı maddelerinin gerektiğini belirleyen farklı doğal pektin ve asitlik seviyeleri vardır.',
  },
  {
    name: 'Hazırladığınız meyveyi tartın',
    text: 'Temizlenmiş, doğranmış meyvenizin ağırlığını gram cinsinden girin. Hassas reçel yapımı için doğru tartım önemlidir.',
  },
  {
    name: 'Pektin türünüzü seçin',
    text: 'Geleneksel yüksek şekerli reçel için Klasik (HM), ya da kalsiyum ile aktive edilen daha sağlıklı, şekeri azaltılmış bir reçel istiyorsanız Düşük Şeker (LM) seçin.',
  },
  {
    name: 'Mükemmel tarifinizi inceleyin',
    text: 'Hesaplayıcı, gereken tam gram pektin tozu, sitrik asit (veya limon suyu) ve şeker miktarını gösterir. Garantili bir jelleşme için bunları pişirme sırasında ekleyin.',
  },
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
  slug: 'pektin-recel-ayar-hesaplayici',
  title: 'Pektin & Reçel Hesaplayıcı',
  description: 'Meyvenizin mükemmel reçel kıvamı için tam olarak ne kadar pektin, sitrik asit ve şeker gerektiğini hesaplayın - artık cıvık veya lastiksi reçel yok.',
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
    title: 'Pektin & Reçel Hesaplayıcı',
    subtitle: 'Mükemmel reçeller için hassas jel kimyası',
    fruitLabel: 'Meyvenizi Seçin',
    allFruits: 'Tüm',
    highPectin: 'Yüksek Pektin',
    mediumPectin: 'Orta Pektin',
    lowPectin: 'Düşük Pektin',
    weightLabel: 'Meyve Ağırlığı',
    weightPlaceholder: 'örn. 1000',
    weightUnitMetric: 'g',
    weightUnitImperial: 'oz',
    pectinTypeLabel: 'Pektin Türü',
    pectinHM: 'Klasik (HM)',
    pectinLM: 'Düşük Şeker (LM)',
    sugarModeLabel: 'Şeker Modu',
    sugarModeAuto: 'Otomatik',
    sugarModeManual: 'Manuel',
    sugarLabel: 'Şeker Ağırlığı',
    sugarPlaceholder: 'örn. 650',
    recipeTitle: 'Tarif',
    pectinNeeded: 'Pektin',
    citricAcidNeeded: 'Sitrik Asit',
    lemonJuiceNeeded: 'Limon Suyu',
    sugarNeeded: 'Şeker',
    totalYield: 'Toplam Verim',
    sugarPercent: 'Şeker',
    sugarLow: 'Düşük',
    sugarIdeal: 'İdeal',
    sugarHigh: 'Yüksek',
    sugarOfFruit: 'meyve ağırlığının',
    sugarOfTotal: 'toplamın',
    statusPerfect: 'Mükemmel Jel',
    statusPerfectDesc: 'Oranlarınız dengeli. Reçel ipeksi, sürülebilir bir doku ve parlak bir ışıltıyla güzelce tutacak.',
    statusSlightlyThin: 'Hafif İnce',
    statusSlightlyThinDesc: 'Reçel yumuşak tutabilir. Daha sert bir jel için daha fazla pektin eklemeyi veya su içeriğini azaltmayı düşünün.',
    statusTooThin: 'Çok İnce - Cıvık Reçel Riski',
    statusTooThinDesc: 'Ayarlama yapılmazsa bu reçel büyük ihtimalle sıvı kalacaktır. Şekeri artırın (HM için) veya daha fazla pektin ekleyin.',
    statusTooStiff: 'Çok Sert',
    statusTooStiffDesc: 'Jel lastiksi hale gelebilir. Pektini yarıya düşürün veya meyve ağırlığını biraz artırın.',
    dropTestTitle: 'Soğuk Tabak Testi',
    dropTestHow: 'Soğutulmuş bir tabağa damlatın',
    dropStatusLabel: 'Sonuç',
    dropTestPerfect: 'Tutacak. Damla büzüşür ve şekil korur',
    dropTestThin: 'Cıvık. Tabaktan aşağı kayar',
    dropTestStiff: 'Çok sert. Neredeyse hareket etmez',
    dropPlateLabel: 'tabak',
    dropDropLabel: 'damla',
    sugarAutoHint: 'otomatik hesaplandı',
    sugarManualHint: 'miktarı girin',
    unitLabel: 'Ölçü Sistemi',
    metricLabel: 'Metrik (g)',
    imperialLabel: 'İngiliz (oz)',
    disclaimer: 'En iyi sonuçlar için tüm malzemeleri dijital mutfak terazisiyle tartın. Hacimsel ölçümler reçel yapımında güvenilmezdir.',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Reçel Tutmanın Tam Bilimi: Pektin, Asit ve Şeker Dengesi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Reçel yapımı, kimya ve pişirmenin kesin bir kesişme noktasıdır. Özünde, meyve pulpunun sert, sürülebilir bir jele dönüşmesi üç molekülün doğru dengesine bağlıdır: <strong>pektin</strong> (jelleştirici madde), <strong>asit</strong> (pektini aktive eden katalizör) ve <strong>şeker</strong> (su moleküllerini pektin zincirlerinden uzaklaştıran dehidrasyon maddesi). Doğru oranlar olmadan, ya meyve çorbası ya da lastiksi bir blok elde edersiniz.',
    },
    {
      type: 'title',
      text: 'Pektin Nasıl Bir Jel Ağı Oluşturur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pektin, öncelikle galakturonik asit birimlerinden oluşan ve bitki hücre duvarlarının orta lamelinde bulunan karmaşık bir polisakkarittir. Doğal halinde, pektin molekülleri negatif yüklüdür ve birbirini iterek meyvenin suyunda çözünmüş halde kalır. Bir jel oluşturmak için üç koşulun aynı anda sağlanması gerekir: (1) su molekülleri için rekabet edecek kadar şeker bulunmalı ve pektin zincirlerini susuzlaştırmalıdır; (2) pH 3,5\'in altına düşmeli, karboksil gruplarının protonasyonu yoluyla negatif yükleri nötrleştirmelidir; ve (3) sıcaklık, pektini tamamen çözmek ve aktive etmek için 104-105°C\'yi aşmalıdır. Bu koşullar sağlandığında, pektin zincirleri birleştirme bölgeleri oluşturur - zincirlerin hidrojen bağı ve hidrofobik etkileşimler yoluyla ilişkilendiği alanlar - meyve suyunu ve şeker şerbetini hapseden sürekli üç boyutlu süngerimsi bir ağ oluşturur.',
    },
    {
      type: 'title',
      text: 'Yüksek Metoksil (HM) ve Düşük Metoksil (LM) Pektin Karşılaştırması',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pektin, metanol ile esterleşmiş karboksil gruplarının yüzdesi olan esterleşme derecesine (DE) göre sınıflandırılır. <strong>Yüksek Metoksil (HM) pektin</strong> (DE > %50), jel oluşturmak için en az %55-65 çözünür katı madde (şeker) ve pH 2,8 ile 3,5 arasında bir değer gerektirir. Bu, geleneksel reçel tariflerinde kullanılan klasik pektindir. Yeterli şeker olmadan, HM pektin zayıf veya hiç olmayan bir jel oluşturur. <strong>Düşük Metoksil (LM) pektin</strong> (DE < %50), farklı bir mekanizma ile jelleşir: serbest karboksil grupları arasında köprü kuran iki değerli kalsiyum iyonları (Ca²⁺) aracılığıyla çapraz bağlanır. LM pektin, çok az eklenen şekerle veya hiç şeker olmadan jelleşebilir, bu da onu düşük kalorili, diyabetik dostu veya doğal olarak tatlandırılmış reçeller için ideal kılar. Bazı LM pektinler, incir ve armut gibi düşük asitli meyveler için yararlı olan pH 5,5\'e kadar daha geniş bir pH aralığını da tolere eder.',
    },
    {
      type: 'title',
      text: 'Meyve Çeşitlerine Göre Doğal Pektin İçeriği',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pektin söz konusu olduğunda tüm meyveler eşit yaratılmamıştır. Meyveler doğal pektin ve asit seviyelerine göre üç kategoriye ayrılır. Meyvenizin bu spektrumda nerede olduğunu anlamak, pektin tozu veya sitrik asit takviyesi gerekip gerekmediğini belirler.',
    },
    {
      type: 'table',
      headers: ['Pektin Seviyesi', 'Asitlik Seviyesi', 'Örnek Meyveler', 'Gereken İlave Pektin'],
      rows: [
        ['Yüksek', 'Yüksek', 'Elma, Kızılcık, Bektaşi Üzümü', '%0 (hiç)'],
        ['Yüksek', 'Orta/Düşük', 'Ayva, Böğürtlen', '%0 (hiç)'],
        ['Orta', 'Yüksek', 'Ahududu, Logan Dutu', 'Meyve ağırlığının %0,3\'ü'],
        ['Orta', 'Orta', 'Erik, Kayısı', 'Meyve ağırlığının %0,3\'ü'],
        ['Orta', 'Düşük', 'Yaban Mersini', 'Meyve ağırlığının %0,3\'ü'],
        ['Düşük', 'Yüksek', 'Kiraz, Üzüm', 'Meyve ağırlığının %0,6\'sı'],
        ['Düşük', 'Orta', 'Şeftali, Mango', 'Meyve ağırlığının %0,6\'sı'],
        ['Düşük', 'Düşük', 'Çilek, Armut, İncir', 'Meyve ağırlığinin %0,6\'sı'],
      ],
    },
    {
      type: 'title',
      text: 'Reçel Jelleşmesinde pH Değerinin Kritik Rolü',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Reçel karışımının pH değeri, ev konservesiliğinde belki de en çok göz ardı edilen değişkendir. pH 3,8\'in üzerinde, pektin üzerindeki karboksil grupları iyonize (negatif yüklü) kalarak, ne kadar şeker veya pektin eklerseniz ekleyin jel oluşumunu engelleyen elektrostatik itme yaratır. Sitrik asit veya limon suyu eklenmesiyle pH 3,5\'in altına düştüğünde, bu gruplar protonlanır ve komşu pektin zincirleri arasında hidrojen bağı oluşumuna izin verir. Optimum jelleşme bölgesi pH 2,8 ile 3,2 arasındadır. pH 2,8\'in altında, jel kırılgan hale gelir ve sinerezis (sıvı sızması) gösterebilir. pH 3,5\'in üzerinde de sinerezis görülür ve jel çok zayıftır. Bu nedenle incir ve çilek gibi düşük asitli meyveler neredeyse her zaman ilave sitrik aside ihtiyaç duyar - doğal pH değerleri pektini düzgün şekilde aktive etmek için çok yüksektir.',
    },
    {
      type: 'title',
      text: 'Şeker Konsantrasyonu ve Jel Kuvvetine Etkisi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Şeker, HM pektin reçelinde iki işlev görür. Birincisi, oldukça higroskopiktir - su molekülleri için pektinle şiddetle rekabet eder, pektin zincirlerinden hidrasyon kabuklarını çekerek onları birbirleriyle etkileşime zorlar. İkincisi, karışımın kaynama noktasını yükselterek reçelin 104-105°C tutma noktasına ulaşmasını sağlar. %65 şeker konsantasyonunda, pektin zincirleri güçlü bir jel oluşturmak için yeterince susuzlaşmıştır. %60\'ın altında, jel doğrusal olarak zayıflar. %68\'in üzerinde, şeker çözünürlük sınırını aştığında reçel soğurken kristalleşebilir. LM pektin reçellerinde, jelleşme kalsiyum köprülerine bağlı olduğundan şeker sadece lezzet rolü oynar. Besleyici olmayan tatlandırıcılarla tatlandırılmış LM pektin reçellerinde şeker içeriği %5-10 kadar düşük olabilir.',
    },
    {
      type: 'title',
      text: 'Sitrik Asit ve Limon Suyu Karşılaştırması: Dönüşüm ve En İyi Uygulamalar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sitrik asit (C₆H₈O₇), standart, tatsız ve hassas olduğu için ticari reçel üretiminde kullanılan birincil asittir. Limon suyu ağırlıkça yaklaşık %5 sitrik asit, artı malik asit ve askorbik asit (C vitamini) içerir. <strong>1 gram saf sitrik asit, pH düşürme gücü açısından yaklaşık 25 ml taze limon suyuna eşdeğerdir.</strong> Ancak limon suyu ayrıca sıvı hacmi ekler ve bu, toplam su içeriğine dahil edilmelidir. En tutarlı sonuçlar için, az miktarda suda çözülmüş toz sitrik asit kullanın. Limon suyu kullanırken, tutma noktasına ulaşmak için kaynatılıp atılması gereken ekstra 20-30 ml sıvı hesaba katılmalıdır.',
    },
    {
      type: 'title',
      text: 'Soğuk Tabak Testi: Tutma Noktasını Belirlemek İçin Görsel Bir Yöntem',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Geleneksel soğuk tabak testi (kırışıklık testi veya fincan tabağı testi olarak da adlandırılır), ev reçeli yapıcıları için en güvenilir yöntemlerden biri olmaya devam etmektedir. Pişirmeye başlamadan önce küçük bir seramik tabağı 10 dakika dondurucuya koyun. Reçelin tutma noktasına ulaştığını düşündüğünüzde, soğutulmuş tabağa bir çay kaşığı sıcak reçel damlatın ve 30 saniye soğumaya bırakın. Parmak ucuyla damlanın kenarına bastırın: yüzey belirgin şekilde büzüşür ve damla şeklini korursa, jel noktasına ulaşılmıştır. Serbestçe akıyorsa, 2-3 dakika daha kaynatmaya devam edin ve tekrar test edin. Bu hesaplayıcı, testi görsel olarak simüle ederek, pişirmeye başlamadan önce tarifinizdeki oranların tabak testini geçeceğini gösterir.',
    },
    {
      type: 'title',
      text: 'Sorun Giderme: Reçeller Neden Başarısız Olur ve Nasıl Düzeltilir',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Cıvık reçel (soğuduktan sonra tutmadı):</strong> En yaygın neden yetersiz kaynatmadır - karışım asla 104-105°C\'ye ulaşmamıştır. Reçeli yeniden kaynatın, kg meyve başına 1-2 g sitrik asit ekleyin ve soğuk tabak yöntemiyle test edin. Alternatif olarak, 5 g pektin tozunu soğuk suda çözün, kaynayan reçele çırpın ve 2 dakika daha pişirin.',
        '<strong>Lastiksi veya aşırı sert reçel:</strong> Meyve ağırlığına göre çok fazla pektin eklenmiş veya reçel 106°C\'nin üzerinde aşırı kaynatılarak pektin ağı sıkı, kırılgan bir yapıya dönüşmüştür. Kurtarmak için, 100-200 ml elma suyu veya su ile hafifçe ısıtarak pektin konsantrasyonunu seyreltin.',
        '<strong>Sinerezis (jelden su sızması):</strong> Bu, aşırı asit (pH 2,8\'in altında) veya %68\'in üzerinde şeker olduğunu gösterir; her iki durum da pektin ağının büzülmesine ve suyu sıkmasına neden olur. pH\'ı kademeli olarak yükseltmek için az miktarda karbonat (sodyum bikarbonat) ekleyin.',
        '<strong>Kristalleşme (kumlu doku):</strong> Şeker konsantrasyonu çözünürlüğü aştı veya çözünmemiş şeker kristalleri kristalleşme çekirdeği olarak hareket etti. Son kaynatma sırasında sürekli karıştırın ve kristalleşmeyi engelleyen 1 yemek kaşığı mısır şerbeti veya glukoz ekleyin.',
        '<strong>Saklama sırasında yüzeyde küf:</strong> Reçel yetersiz pişirilmiş (steril sıcaklığa ulaşmamış), çok az şeker içeriyor (HM pektin için %60\'ın altında) veya kavanozlar düzgün şekilde sterilize edilmemiştir. Daima sterilize edilmiş kavanozlar kullanın ve 10 dakika su banyosunda işleyin.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
