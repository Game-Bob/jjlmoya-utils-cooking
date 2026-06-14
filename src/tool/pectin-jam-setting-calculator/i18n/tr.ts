import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Her Seferinde Mukemmel Jel icin Pektin ve Recel Hesaplayici';
const description = 'Meyvenizin mukemmel recel kivamina ulasmasi icin tam olarak ne kadar pektin, sitrik asit ve seker gerektigini hesaplayin. Hassas kimya ile civik veya lastiksi recellerden kacinin.';

const faq = [
  {
    question: 'Pektin neden recelin jellesmesini saglar?',
    answer: 'Pektin, meyve hucre duvarlarinda bulunan dogal bir polisakkarittir. Seker ve asit (pH 2,8-3,5) ile isitildiginda, pektin molekulleri su ve sekeri hapseden uc boyutlu bir jel agi olusturarak recelin surulebilir dokusunu yaratir.',
  },
  {
    question: 'HM ve LM pektin arasindaki fark nedir?',
    answer: 'Yuksek Metoksil (HM) pektin, jellesmek icin en az %60 seker ve pH 3,5\'in altinda bir deger gerektirir - geleneksel receller icin idealdir. Dusuk Metoksil (LM) pektin ise seker yerine kalsiyum iyonlari araciligiyla jellesir, boylece dusuk sekerli veya sekersiz receller yapilabilir.',
  },
  {
    question: 'Recelim neden bazen civik oluyor?',
    answer: 'Civik recel genellikle yetersiz pektin (meyve dogal olarak pektin bakimindan fakirdir), yetersiz asit (jellesme icin pH cok yuksektir) veya yetersiz sekerden (HM pektin icin) kaynaklanir. Asiri su ile seyreltme veya yetersiz pisirme de recelin tutmasini engelleyebilir.',
  },
  {
    question: 'Sitrik asit tozu yerine limon suyu kullanabilir miyim?',
    answer: 'Evet. Bu hesaplayici sitrik asidi limon suyu esdegerlerine donusturur. Yaklasik 25 ml limon suyu, 1 g sitrik asit ile ayni asitligi saglar. Limon suyu ayrica recellere taze bir lezzet katar.',
  },
  {
    question: 'Hangi meyveler dogal olarak pektin bakimindan zengindir?',
    answer: 'Elma, ayva, bogurtlen, kizilcik ve bekektasi uzumu dogal olarak pektin bakimindan zengindir ve genellikle ilave pektin gerektirmez. Olgunlasmamis meyve de tam olgun meyveden daha fazla pektin icerir.',
  },
];

const howTo = [
  {
    name: 'Meyvenizi secin',
    text: 'Recel yapacaginiz meyveyi secin. Her meyvenin, hangi katki maddelerinin gerektigini belirleyen farkli dogal pektin ve asitlik seviyeleri vardir.',
  },
  {
    name: 'Hazirladiginiz meyveyi tartin',
    text: 'Temizlenmis, dogranmis meyvenizin agirligini gram cinsinden girin. Hassas recel yapimi icin dogru tartim onemlidir.',
  },
  {
    name: 'Pektin turunuzu secin',
    text: 'Geleneksel yuksek sekerli recel icin Klasik (HM), ya da kalsiyum ile aktive edilen daha saglikli, sekeri azaltilmis bir recel istiyorsaniz Dusuk Seker (LM) secin.',
  },
  {
    name: 'Mukemmel tarifinizi inceleyin',
    text: 'Hesaplayici, gereken tam gram pektin tozu, sitrik asit (veya limon suyu) ve seker miktarini gosterir. Garantili bir jellesme icin bunlari pisirme sirasinda ekleyin.',
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
  title: 'Pektin & Recel Hesaplayici',
  description: 'Meyvenizin mukemmel recel kivami icin tam olarak ne kadar pektin, sitrik asit ve seker gerektigini hesaplayin - artik civik veya lastiksi recel yok.',
  faqTitle: 'Sikca Sorulan Sorular',
  ui: {
    title: 'Pektin & Recel Hesaplayici',
    subtitle: 'Mukemmel receller icin hassas jel kimyasi',
    fruitLabel: 'Meyvenizi Secin',
    allFruits: 'Tum',
    highPectin: 'Yuksek Pektin',
    mediumPectin: 'Orta Pektin',
    lowPectin: 'Dusuk Pektin',
    weightLabel: 'Meyve Agirligi',
    weightPlaceholder: 'orn. 1000',
    weightUnitMetric: 'g',
    weightUnitImperial: 'oz',
    pectinTypeLabel: 'Pektin Turu',
    pectinHM: 'Klasik (HM)',
    pectinLM: 'Dusuk Seker (LM)',
    sugarModeLabel: 'Seker Modu',
    sugarModeAuto: 'Otomatik',
    sugarModeManual: 'Manuel',
    sugarLabel: 'Seker Agirligi',
    sugarPlaceholder: 'orn. 650',
    recipeTitle: 'Tarif',
    pectinNeeded: 'Pektin',
    citricAcidNeeded: 'Sitrik Asit',
    lemonJuiceNeeded: 'Limon Suyu',
    sugarNeeded: 'Seker',
    totalYield: 'Toplam Verim',
    sugarPercent: 'Seker',
    sugarLow: 'Dusuk',
    sugarIdeal: 'Ideal',
    sugarHigh: 'Yuksek',
    sugarOfFruit: 'meyve agirliginin',
    sugarOfTotal: 'toplamin',
    statusPerfect: 'Mukemmel Jel',
    statusPerfectDesc: 'Oranlariniz dengeli. Recel ipeksi, surulebilir bir doku ve parlak bir isiltiyla guzelce tutacak.',
    statusSlightlyThin: 'Hafif Ince',
    statusSlightlyThinDesc: 'Recel yumusak tutabilir. Daha sert bir jel icin daha fazla pektin eklemeyi veya su icerigini azaltmayi dusunun.',
    statusTooThin: 'Cok Ince - Civik Recel Riski',
    statusTooThinDesc: 'Ayarlama yapilmazsa bu recel buyuk ihtimalle sivi kalacaktir. Sekeri artirin (HM icin) veya daha fazla pektin ekleyin.',
    statusTooStiff: 'Cok Sert',
    statusTooStiffDesc: 'Jel lastiksi hale gelebilir. Pektini yariya dusurun veya meyve agirligini biraz artirin.',
    dropTestTitle: 'Soguk Tabak Testi',
    dropTestHow: 'Sogutulmus bir tabaga damlatin',
    dropStatusLabel: 'Sonuc',
    dropTestPerfect: 'Tutacak. Damla burusur ve sekil korur',
    dropTestThin: 'Civik. Tabaktan asagi kayar',
    dropTestStiff: 'Cok sert. Neredeyse hareket etmez',
    dropPlateLabel: 'tabak',
    dropDropLabel: 'damla',
    sugarAutoHint: 'otomatik hesaplandi',
    sugarManualHint: 'miktari girin',
    unitLabel: 'Olcu Sistemi',
    metricLabel: 'Metrik (g)',
    imperialLabel: 'Ingiliz (oz)',
    disclaimer: 'En iyi sonuclar icin tum malzemeleri dijital mutfak terazisiyle tartin. Hacimsel olcumler recel yapiminda guvenilmezdir.',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Recel Tutmanin Tam Bilimi: Pektin, Asit ve Seker Dengesi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Recel yapimi, kimya ve pisirmenin kesin bir kesisme noktasidir. Ozunde, meyve pulpunun sert, surulebilir bir jele donusmesi uc molekulun dogru dengesine baglidir: <strong>pektin</strong> (jellestirici madde), <strong>asit</strong> (pektini aktive eden katalizor) ve <strong>seker</strong> (su molekullerini pektin zincirlerinden uzaklastiran dehidrasyon maddesi). Dogru oranlar olmadan, ya meyve corbasi ya da lastiksi bir blok elde edersiniz.',
    },
    {
      type: 'title',
      text: 'Pektin Nasil Bir Jel Agi Olusturur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pektin, oncelikle galakturonik asit birimlerinden olusan ve bitki hucre duvarlarinin orta lamelinde bulunan karmasik bir polisakkarittir. Dogal halinde, pektin molekulleri negatif yukludur ve birbirini iterek meyvenin suyunda cozunmus halde kalir. Bir jel olusturmak icin uc kosulun ayni anda saglanmasi gerekir: (1) su molekulleri icin rekabet edecek kadar seker bulunmali ve pektin zincirlerini susuzlastirmalidir; (2) pH 3,5\'in altina dusmeli, karboksil gruplarinin protonasyonu yoluyla negatif yukleri notrlestirmelidir; ve (3) sicaklik, pektini tamamen cozmek ve aktive etmek icin 104-105°C\'yi asmalidir. Bu kosullar saglandiginda, pektin zincirleri birlestirme bolgeleri olusturur - zincirlerin hidrojen bagi ve hidrofobik etkilesimler yoluyla iliskilendigi alanlar - meyve suyunu ve seker serbetini hapseden surekli uc boyutlu sungerimsi bir ag olusturur.',
    },
    {
      type: 'title',
      text: 'Yuksek Metoksil (HM) ve Dusuk Metoksil (LM) Pektin Karsilastirmasi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pektin, metanol ile esterlesmis karboksil gruplarinin yuzdesi olan esterlesme derecesine (DE) gore siniflandirilir. <strong>Yuksek Metoksil (HM) pektin</strong> (DE > %50), jel olusturmak icin en az %55-65 cozunur kati madde (seker) ve pH 2,8 ile 3,5 arasinda bir deger gerektirir. Bu, geleneksel recel tariflerinde kullanilan klasik pektindir. Yeterli seker olmadan, HM pektin zayif veya hic olmayan bir jel olusturur. <strong>Dusuk Metoksil (LM) pektin</strong> (DE < %50), farkli bir mekanizma ile jellesir: serbest karboksil gruplari arasinda kopru kuran iki degerlikli kalsiyum iyonlari (Ca²⁺) araciligiyla capraz baglanir. LM pektin, cok az eklenen sekerle veya hic seker olmadan jellesebilir, bu da onu dusuk kalorili, diyabetik dostu veya dogal olarak tatlandirilmis receller icin ideal kilar. Bazi LM pektinler, incir ve armut gibi dusuk asitli meyveler icin yararli olan pH 5,5\'e kadar daha genis bir pH araligini da tolere eder.',
    },
    {
      type: 'title',
      text: 'Meyve Cesitlerine Gore Dogal Pektin Icerigi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pektin soz konusu oldugunda tum meyveler esit yaratilmamistir. Meyveler dogal pektin ve asit seviyelerine gore uc kategoriye ayrilir. Meyvenizin bu spektrumda nerede oldugunu anlamak, pektin tozu veya sitrik asit takviyesi gerekip gerekmedigini belirler.',
    },
    {
      type: 'table',
      headers: ['Pektin Seviyesi', 'Asitlik Seviyesi', 'Ornek Meyveler', 'Gereken Ilave Pektin'],
      rows: [
        ['Yuksek', 'Yuksek', 'Elma, Kizilcik, Bekektasi Uzumu', '%0 (hic)'],
        ['Yuksek', 'Orta/Dusuk', 'Ayva, Bogurtlen', '%0 (hic)'],
        ['Orta', 'Yuksek', 'Ahududu, Logan Dutu', 'Meyve agirliginin %0,3\'u'],
        ['Orta', 'Orta', 'Erik, Kayisi', 'Meyve agirliginin %0,3\'u'],
        ['Orta', 'Dusuk', 'Yaban Mersini', 'Meyve agirliginin %0,3\'u'],
        ['Dusuk', 'Yuksek', 'Kiraz, Uzum', 'Meyve agirliginin %0,6\'si'],
        ['Dusuk', 'Orta', 'Seftali, Mango', 'Meyve agirliginin %0,6\'si'],
        ['Dusuk', 'Dusuk', 'Cilek, Armut, Incir', 'Meyve agirliginin %0,6\'si'],
      ],
    },
    {
      type: 'title',
      text: 'Recel Jellesmesinde pH Degerinin Kritik Rolu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Recel karisiminin pH degeri, ev konservesiliginde belki de en cok goz ardi edilen degiskendir. pH 3,8\'in uzerinde, pektin uzerindeki karboksil gruplari iyonize (negatif yuklu) kalarak, ne kadar seker veya pektin eklerseniz ekleyin jel olusumunu engelleyen elektrostatik itme yaratir. Sitrik asit veya limon suyu eklenmesiyle pH 3,5\'in altina dustugunde, bu gruplar protonlanir ve komsu pektin zincirleri arasinda hidrojen bagi olusumuna izin verir. Optimum jellesme bolgesi pH 2,8 ile 3,2 arasindadir. pH 2,8\'in altinda, jel kirilgan hale gelir ve sinerezis (sivi sizmasi) gosterebilir. pH 3,5\'in uzerinde de sinerezis gorulur ve jel cok zayiftir. Bu nedenle incir ve cilek gibi dusuk asitli meyveler neredeyse her zaman ilave sitrik aside ihtiyac duyar - dogal pH degerleri pektini duzgun sekilde aktive etmek icin cok yuksektir.',
    },
    {
      type: 'title',
      text: 'Seker Konsantrasyonu ve Jel Kuvvetine Etkisi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Seker, HM pektin recelinde iki islev gorur. Birincisi, oldukca higroskopiktir - su molekulleri icin pektinle siddetle rekabet eder, pektin zincirlerinden hidrasyon kabuklarini cekerek onlari birbirleriyle etkilesime zorlar. Ikincisi, karisimin kaynama noktasini yukselterek recelin 104-105°C tutma noktasina ulasmasini saglar. %65 seker konsantrasyonunda, pektin zincirleri guclu bir jel olusturmak icin yeterince susuzlasmistir. %60\'in altinda, jel dogrusal olarak zayiflar. %68\'in uzerinde, seker cozunurluk sinirini astiginda recel sogurken kristallesebilir. LM pektin recellerinde, jellesme kalsiyum koprulerine bagli oldugundan seker sadece lezzet rolu oynar. Besleyici olmayan tatlandiricilarla tatlandirilmis LM pektin recellerinde seker icerigi %5-10 kadar dusuk olabilir.',
    },
    {
      type: 'title',
      text: 'Sitrik Asit ve Limon Suyu Karsilastirmasi: Donusum ve En Iyi Uygulamalar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sitrik asit (C₆H₈O₇), standart, tatsiz ve hassas oldugu icin ticari recel uretiminde kullanilan birincil asittir. Limon suyu agirlikca yaklasik %5 sitrik asit, arti malik asit ve askorbik asit (C vitamini) icerir. <strong>1 gram saf sitrik asit, pH dusurme gucu acisindan yaklasik 25 ml taze limon suyuna esdegerdir.</strong> Ancak limon suyu ayrica sivi hacmi ekler ve bu, toplam su icerigine dahil edilmelidir. En tutarli sonuclar icin, az miktarda suda cozulmus toz sitrik asit kullanin. Limon suyu kullanirken, tutma noktasina ulasmak icin kaynatilip atilmasi gereken ekstra 20-30 ml sivi hesaba katilmalidir.',
    },
    {
      type: 'title',
      text: 'Soguk Tabak Testi: Tutma Noktasini Belirlemek Icin Gorsel Bir Yontem',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Geleneksel soguk tabak testi (kirisiklik testi veya fincan tabagi testi olarak da adlandirilir), ev receli yapicilari icin en guvenilir yontemlerden biri olmaya devam etmektedir. Pisirmeye baslamadan once kucuk bir seramik tabagi 10 dakika dondurucuya koyun. Recelin tutma noktasina ulastigini dusundugunuzde, sogutulmus tabaga bir cay kasigi sicak recel damlatin ve 30 saniye sogumaya birakin. Parma ucuyla damlanin kenarina bastirin: yuze belirgin sekilde burusur ve damla seklini korursa, jel noktasina ulasilmistir. Serbestce akiyorsa, 2-3 dakika daha kaynatmaya devam edin ve tekrar test edin. Bu hesaplayici, testi gorsel olarak simule ederek, pisirmeye baslamadan once tarifinizdeki oranlarin tabak testini gececegini gosterir.',
    },
    {
      type: 'title',
      text: 'Sorun Giderme: Receller Neden Basarisiz Olur ve Nasil Duzeltilir',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Civik recel (soguduktan sonra tutmadi):</strong> En yaygin neden yetersiz kaynatmadir - karisim asla 104-105°C\'ye ulasmamistir. Receli yeniden kaynatin, kg meyve basina 1-2 g sitrik asit ekleyin ve soguk tabak yontemiyle test edin. Alternatif olarak, 5 g pektin tozunu soguk suda cozun, kaynayan recele cirpin ve 2 dakika daha pisirin.',
        '<strong>Lastiksi veya asiri sert recel:</strong> Meyve agirligina gore cok fazla pektin eklenmis veya recel 106°C\'nin uzerinde asiri kaynatilarak pektin agi siki, kirilgan bir yapiya donusmustur. Kurtarmak icin, 100-200 ml elma suyu veya su ile hafifce isitarak pektin konsantrasyonunu seyreltin.',
        '<strong>Sinerezis (jelden su sizmasi):</strong> Bu, asiri asit (pH 2,8\'in altinda) veya %68\'in uzerinde seker oldugunu gosterir; her ikisi de pektin aginin b uzulmesine ve suyu sikmasina neden olur. pH\'i kademeli olarak yukseltmek icin az miktarda karbonat (sodyum bikarbonat) ekleyin.',
        '<strong>Kristallesme (kumlu doku):</strong> Seker konsantrasyonu cozunurlugu asti veya cozunmemis seker kristalleri kristallesme cekirdegi olarak hareket etti. Son kaynatma sirasinda surekli karistirin ve kristallesmeyi engelleyen 1 yemek kasigi misir serbeti veya glukoz ekleyin.',
        '<strong>Saklama sirasinda yuzeyde kuf:</strong> Recel yetersiz pisirilmis (steril sicakliga ulasmamis), cok az seker iceriyor (HM pektin icin %60\'in altinda) veya kavanozlar duzgun sekilde sterilize edilmemistir. Daima sterilize edilmis kavanozlar kullanin ve 10 dakika su banyosunda isleyin.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
