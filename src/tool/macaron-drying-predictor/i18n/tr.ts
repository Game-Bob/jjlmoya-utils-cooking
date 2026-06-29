import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Makaron Kabuğu Kuruma Tahmincisi: Nem ve Sıcaklığa Göre Kuruma Süresi Hesaplayıcısı';
const description = 'Nem, sıcaklık ve kabuk boyutuna göre makaron kabuklarının tam olarak ne kadar süre kuruması gerektiğini hesaplayın. Çatlayan kabuklardan kaçının ve her seferinde mükemmel ayak elde edin.';

const faq = [
  {
    question: 'Makaron kabukları neden pişirmeden önce kurumalıdır?',
    answer: 'Kuruma, makaron kabuğunun yüzeyinde ince bir zar oluşturur. Bu zar hayati önem taşır çünkü pişirme sırasında buharı hapse alır ve buharın üst kısmı çatlatması yerine aşağıya, ayaklardan çıkmasını sağlar. Düzgün kuruma olmazsa makaronlar çatlar, ayak oluşturmaz veya eşit pişmez.',
  },
  {
    question: 'Nem, makaron kuruma süresini nasıl etkiler?',
    answer: 'Nem en kritik faktördür. Yüksek nemde (%60 üzeri), hava zaten neme doymuştur ve kabuk yüzeyinden buharlaşmayı dramatik şekilde yavaşlatır. Kuruma süresi kuru bir güne kıyasla iki veya üç katına çıkabilir. Çok kuru koşullarda (%30 altı), kabuklar aşırı kuruyabilir ve düzgün kabarmayı engelleyen kalın bir zar oluşturabilir.',
  },
  {
    question: 'Makaron kabuklarını kurutmak için ideal sıcaklık nedir?',
    answer: '20°C ile 25°C arası oda sıcaklığı idealdir. Daha sıcak hava daha fazla nem tutar ve kurumayı hızlandırır, ancak çok sıcak (30°C üzeri) kabukların dışının sertleşip içinin ıslak kalmasına neden olabilir. 18°C altındaki serin sıcaklıklar kurumayı belirgin şekilde yavaşlatır.',
  },
  {
    question: 'Kabuk boyutu kuruma süresini nasıl etkiler?',
    answer: 'Daha büyük kabuklar daha fazla yüzey alanı ve hacme sahiptir, bu da orantılı olarak daha uzun kuruma gerektirir. 2 cm\'lik mini bir makaron 15 dakikada kuruyabilirken, 5 cm\'lik büyük bir makaron bir saatten fazla sürebilir. İlişki doğrusal değildir: çapı iki katına çıkarmak, yüzey alanı-hacim ilişkisindeki kare-küp yasası nedeniyle kuruma süresini yaklaşık üç katına çıkarır.',
  },
];

const howTo = [
  {
    name: 'Makaron kabuklarinizi sikin',
    text: 'Pisirme kagidi veya silikon mat uzerine esit buyuklukte yuvarlaklar sikin. Tutarli boyut icin bir sablon kullanin.',
  },
  {
    name: 'Ortaminizi olcun',
    text: 'Bir higrometre ve termometre kullanarak mutfaginizin nem ve sicakligini kontrol edin.',
  },
  {
    name: 'Degerleri hesaplayiciya girin',
    text: 'Tahmini kuruma suresini almak icin nem, sicaklik ve kabuk capinizi girin.',
  },
  {
    name: 'Zari test edin',
    text: 'Tahmin edilen sureden sonra bir kabugun yuzeyine hafifce dokunun. Kuru ve mat hissettirmeli, yapiskan olmamalidir. Parmaginiza yapisiyorsa biraz daha zaman verin.',
  },
  {
    name: 'Hazir olunca pisirin',
    text: 'Zar olustugunda hemen pisirin. Kabuklarin kuruduktan sonra cok uzun sure beklemesine izin vermeyin, aksi takdirde asiri kuruyup catlayabilirler.',
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
  slug: 'makaron-kuruma-tahmincisi',
  title: 'Makaron Kabugu Kuruma Tahmincisi',
  description: 'Nem, sicaklik ve kabuk boyutuna gore makaron kabuklarinin tam olarak ne kadar sure kurumasi gerektigini hesaplayin. Catlayan kabuklardan kacinin ve her seferinde mukemmel ayak elde edin.',
  faqTitle: 'Sikca Sorulan Sorular',
  ui: {
    humidityLabel: 'Ortam Nemi',
    humidityUnit: '%',
    tempLabel: 'Oda Sicakligi',
    tempUnit: 'Â°C',
    sizeLabel: 'Kabuk Capi',
    sizeUnit: 'cm',
    dryingTimeLabel: 'Tahmini Kuruma Suresi',
    minutesUnit: 'dk',
    readinessLabel: 'Yuzey Hazirligi',
    skinStatusReady: 'Pisirmeye Hazir',
    skinStatusForming: 'Kabuk Olusuyor',
    skinStatusSticky: 'Hala Yapiskan',
    skinStatusOverDry: 'Fazla Kurumus',
    humidityTagHigh: 'Yuksek nem',
    humidityTagNormal: 'Normal nem',
    humidityTagLow: 'Dusuk nem',
    humidityDescHigh: 'Cok nemli bir gun. Kuruma cok daha uzun surecek. Mumkunse nem alici veya klimali bir oda kullanin.',
    humidityDescNormal: 'Orta nem. Kuruma normal bir hizda ilerlemeli ve iyi bir kabuk olusumu saglamali.',
    humidityDescLow: 'Cok kuru hava. Kabuklar cok hizli kuruyup asiri kuruma riski tasiyabilir. Yakindan izleyin ve kuruma suresini azaltin.',
    tempTagHot: 'Sicak oda',
    tempTagIdeal: 'Ideal oda sicakligi',
    tempTagCool: 'Serin oda',
    sizeTagMini: 'Mini',
    sizeTagStandard: 'Standart',
    sizeTagLarge: 'Buyuk',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Makaron Kabugu Kurutmanin Bilimi: Zar Olusumu Neden Basariyi Belirler',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Makaron, Fransiz pastaciliginin teknik acidan en zorlu urunlerinden biridir. Kendine ozgu puruzsuz kubbesi ve "ayak" ya da "pied" olarak bilinen firfirli tabani, tamamen kritik bir adima baglidir: sikilmis kabuklarin pisirme oncesinde kurutulmasi. Bu dinlenme suresi, her kabugun yuzeyinde ince bir protein filmi olusmasini saglar. Pisirme sirasinda bu zar, kabugun icindeki genlesen buhari hapseder ve buhari asagiya, tabandan cikmaya zorlar; bu da kabugu kaldirir ve imrenilen ayagi olusturur. Yeterli kuruma olmazsa buhar ustten patlar ve catlaklara neden olur. Asiri kurumada ise zar cok sertlesir ve kabuklar duzgun kabaramaz.',
    },
    {
      type: 'title',
      text: 'Nem ve Kuruma Kinetigindeki Baskin Rolu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bagil nem, makaron kabugu kurutmasinda en etkili degiskendir. %50 bagil nemde, standart 3 cm\'lik bir kabuk yeterli zar olusumu icin genellikle 30-40 dakika gerektirir. %70 nemde bu sure 60-90 dakikaya uzayabilir. %30 nemde kuruma 15-20 dakika gibi kisa bir surede tamamlanabilir. Bunun arkasindaki fizik basittir: buharlasma hizi, kabuk yuzeyi ile cevredeki hava arasindaki buhar basinci farkiyla orantilidir. Nemli havada bu fark daha kucuktur, bu da buharlasmayi yavaslatir. Profesyonel pastaneler nemi titizlikle kontrol eder ve genellikle %40-50 bagil nemde ozel makaron odalari bulundurur.',
    },
    {
      type: 'title',
      text: 'Nem ve Kabuk Boyutuna Gore Kuruma Suresi Referans Tablosu',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Nem', '2 cm Mini', '3 cm Standart', '4 cm Buyuk', '5 cm Cok Buyuk'],
      rows: [
        ['%30 (Cok Kuru)', '10-15 dk', '15-20 dk', '25-30 dk', '35-45 dk'],
        ['%40 (Kuru)', '15-20 dk', '20-30 dk', '30-40 dk', '45-60 dk'],
        ['%50 (Orta)', '20-25 dk', '30-40 dk', '40-55 dk', '55-75 dk'],
        ['%60 (Nemli)', '25-35 dk', '40-55 dk', '55-75 dk', '75-100 dk'],
        ['%70 (Cok Nemli)', '35-50 dk', '55-75 dk', '75-100 dk', '100-130 dk'],
        ['%80 (Asiri Nemli)', '50-70 dk', '75-100 dk', '100-140 dk', '130-180 dk'],
      ],
    },
    {
      type: 'title',
      text: 'Buharlasma Hizinda Sicakligin Rolu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sicaklik kurumayi iki mekanizma uzerinden etkiler. Ilk olarak, daha sicak hava daha fazla su buhari tutabilir, bu da kabuk yuzeyinden potansiyel buharlasma hizini artirir. Ikinci olarak, molekuler kinetik enerji sicaklikla artar ve su molekullerinin sivi fazdan cikis hizini yukseltir. Ancak sicaklik beze stabilitesini de etkiler. 28Â°C\'nin uzerinde, bezedeki yumurta aki proteinleri bozulmaya baslayabilir ve yapi zayiflar. Makaron kurutma icin ideal aralik 20-25Â°C\'dir. 18Â°C\'nin altinda buharlasma hizi, standart boy kabuklar icin kurutmayi pratik olmaktan cikaracak kadar yavaslar.',
    },
    {
      type: 'title',
      text: 'Kabuk Boyutu ve Kurutmanin Kare-Kup Yasasi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kabuk capi, yuzey alani ile hacim arasindaki kare-kup iliskisi nedeniyle kuruma suresi uzerinde dogrusal olmayan bir etkiye sahiptir. 2 cm\'lik mini makaron yaklasik 3,1 cmÂ² yuzey alanina ve 0,5 cmÂ³ hacme sahiptir, bu da yaklasik 6:1 gibi elverisli bir yuzey-hacim orani verir. 5 cm\'lik buyuk bir makaron ise yaklasik 19,6 cmÂ² yuzey ve 8,2 cmÂ³ hacme sahiptir  -  oran sadece 2,4:1\'dir. Bu, daha buyuk kabuklarin nemin kacabilecegi orantili olarak daha az yuzey alanina sahip oldugu anlamina gelir ve kuruma suresini dramatik sekilde artirir. Hesaplayici bunu, profesyonel pastane mutfaklarindan alinan deneysel verilere gore kalibre edilmis bir us yasasi iliskisi kullanarak modeller.',
    },
    {
      type: 'title',
      text: 'Yaygin Makaron Kurutma Sorunlarinin Giderilmesi',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ayaksiz catlamis kabuklar',
      html: 'En yaygin makaron basarisizligi. Bu neredeyse her zaman kabuklarin pisirmeden once yeterince kurutulmadigini gosterir. Yuzey zari, genlesen buhari tutamayacak kadar zayifti ve buhar ustten patladi. <strong>Cozum: Kuruma suresini 10-15 dakika artirin ve pisirmeden once hafif bir parmak dokunusuyla yuzeyi test edin.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Egri veya yamuk ayaklar',
      html: 'Suc lu esit olmayan kurumadir. Tepsinin bir tarafi digerinden daha hizli kurursa ayaklar esit yukselmez. Bu genellikle tepsiler pencere, vantilator veya isi kaynagi yakinina yerlestirildiginde olur. <strong>Cozum: Kuruma sirasinda tepsileri dondurun ve tum kabuklarin etrafinda esit hava dolasimi saglayin.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Pistikten sonra ici bos kabuklar',
      html: 'Ici bos kabuklar, cok kalin ve sert bir zar olusturan asiri kurumadan kaynaklanabilir. Kabuk pisirme sirasinda duzgun genlesemez ve iceride hava boslugu birakir. <strong>Cozum: Kuruma suresini azaltin ve zar olusumunu daha erken kontrol edin. Yuzey kuru hissettirmeli ancak hafifce bastirildiginda hala biraz esneklik gostermelidir.</strong>',
    },
    {
      type: 'title',
      text: 'Profesyonel Pastane Seflerinden Uzman Ipuclari',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Nemli Gunler Icin Firin Kapagi Teknigi',
      html: 'Asiri nemli gunlerde profesyonel sefler "firinda kurutma" adi verilen bir teknik kullanir. Firini mumkun olan en dusuk ayara (genellikle 50Â°C) isitin, kapatin, ardindan sikilmis makaronlari kapagi hafif aralik olacak sekilde 5-10 dakika firina koyun. Bu, kabuklari pisirmeye baslamadan zar olusumunu hizlandiran sicak, dusuk nemli bir mikro iklim yaratir.',
    },
    {
      type: 'tip',
      title: 'Mukemmel Zar Icin Dokunma Testi',
      html: 'Makaron hazirliginin kesin testi: temiz, kuru bir parmak ucuyla bir kabugun yuzeyine hafifce dokunun. Hamur parmaginiza yapisiyorsa daha fazla zamana ihtiyaci vardir. Yuzey kuru ve mat hissediyor ve yapismiyorsa zar olusmustur. Yuzey sert ve kabuksu hissediyor, hic esnemiyorsa kabuklar asiri kurumustur.',
    },
    {
      type: 'tip',
      title: 'Ekipmansiz Nem Kontrolu',
      html: 'Nem aliciniz yoksa, kuruyan makaronlarin yanina bir kase pismemis pirinc veya silika jel paketleri koyun. Bu nem cekiciler ortamdaki nemi emerek tepsinin etrafinda daha kuru bir mikro iklim olusturur. Iklim kontrolu olmayan profesyonel mutfaklarda bu basit numara nemli gunlerde kuruma suresini %30-40 oraninda azaltabilir.',
    },
    {
      type: 'title',
      text: 'Yumurta Aki Dinlendirme Faktoru',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dinlendirilmis yumurta aklari, daha ongorulebilir sekilde kuruyan daha stabil bezeler uretir. Taze yumurta aklari daha fazla su ve daha az elastik protein yapisi icerir, bu da duzgun zar olusturmasi daha uzun suren daha zayif bezelere yol acar. Profesyonel tarifler oda sicakliginda 24-72 saat veya buzdolabinda 3-5 gun dinlendirilmis yumurta aklari ister. Dinlendirilmis aklar buharlasma yoluyla su iceriklerinin yaklasik %10-15\'ini kaybeder, proteinleri yogunlastirir ve beze dayanikliligini artirir.',
    },
    {
      type: 'title',
      text: 'Hizli Referans: Yaygin Kosullar Icin Kuruma Sureleri',
      level: 3,
    },
    {
      type: 'summary',
      title: '3 cm standart makaron kabuklari icin tipik kuruma sureleri',
      items: [
        'Klimali mutfak (22Â°C, %45 nem): 25-30 dakika',
        'Ilkbahar gunu, pencereler acik (20Â°C, %55 nem): 35-45 dakika',
        'Yaz gunu, klima yok (28Â°C, %70 nem): 60-90 dakika  -  firinda kurutma teknigini kullanin',
        'Kisin isitilan ev (21Â°C, %30 nem): 15-20 dakika  -  asiri kurumaya dikkat edin',
        'Yagmurlu gun (18Â°C, %80 nem): 75-100 dakika  -  nem alici kullanmaniz siddetle onerilir',
        'Profesyonel pastane mutfagi (22Â°C, %45 nem, konveksiyon): 20-25 dakika',
      ],
    },
    {
      type: 'paragraph',
      html: 'Her mutfak ortami benzersizdir. Bu hesaplayici, size kisisellestirilmis bir kuruma suresi tahmini vermek icin uc kritik degiskeni  -  nem, sicaklik ve kabuk boyutu  -  dikkate alir. Kosullarinizi girin ve guvenle sikin.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
