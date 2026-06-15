import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Peynir Puiltilasma Carpani Hesaplayici';
const description = 'Zanaatkar peynir yapiminda teleme kesme anini tam olarak bulun. Puiltilasma carpani yontemini kullanarak pihtilasma suresini hesaplayin, nemi kontrol edin ve ucretsiz hesaplayicimizla peynir verimini artirin.';
const faq = [
  {
    question: 'Peynir yapiminda puiltilasma yontemi nedir?',
    answer: 'Puiltilasma yontemi, telemenin kesilecegi hassas ani belirlemek icin kullanilan bir tekniktir. Mayanin eklenmesinden ilk jelatinlesme belirtisine (puiltilasma) kadar gecen sureyi olcer ve bu sureyi peynir stiline bagli olarak belirli bir carpanla carpar.'
  },
  {
    question: 'Puiltilasma noktasini nasil tespit ederim?',
    answer: 'En yaygin yontem kase yontemidir. Maya ekledikten sonra sut yuzeyine kucuk, sterilize edilmis, hafif bir plastik kase yerlestirin. Her dakika hafifce dokunun veya cevirin. Baslangicta serbestce doner. Kasenin donmayi biraktigi veya sut jelatinlesmeye basladigi icin direncli oldugu an puiltilasma noktasidir.'
  },
  {
    question: 'Teleme kesme zamani neden cok onemlidir?',
    answer: 'Telemenin dogru zamanda kesilmesi sinerezi (nem kaybini) kontrol eder. Cok erken kesmek kirilgan telmeye, yag kaybina ve dusuk verime neden olur. Cok gec kesmek, cok fazla nem tutan veya duzgun suzulemeyen sert bir telmeye yol acarak ekfi, asiri asitlenmis peynire neden olur.'
  },
  {
    question: 'Puiltilasma carpani nedir?',
    answer: 'Bir carpan, kesimden onceki toplam pihtilasma suresini hesaplamak icin birincil puiltilasma suresine uygulanan sayisal bir faktordur. Standat carpanlar 2.0x (Parmesan gibi kuru peynirler) ile 5.0x veya 6.0x (Camembert gibi nemli peynirler) arasinda degisir.'
  },
  {
    question: 'Sicaklik ve maya gucu puiltilasmayi nasil etkiler?',
    answer: 'Daha yuksek sicakliklar ve daha guclu maya puiltilasmayi hizlandirir, yani sut daha hizli jelatinlesir. Bununla birlikte, toplam kesme suresi puiltilasma suresiyle dogru orantili oldugundan, carpan yontemi bu degisiklikleri otomatik olarak telafi ederek tutarli teleme ozellikleri saglar.'
  }
];

const howTo = [
  {
    name: 'Mayayi ekleyin ve zamanlayiciyi baslatin',
    text: 'Mayanizi iyice karistirin ve hemen hesaplayicidaki Asama 1 kronometresini baslatin.'
  },
  {
    name: 'Kase testini yapin',
    text: 'Sut yuzeyine hafif bir plastik kase yerlestirin ve duzenli olarak direnc testi yapin.'
  },
  {
    name: 'Puiltilasma noktasini isaretleyin',
    text: 'Kasenin donmeye veya dokunmaya direnc gosterdigi an, puiltilasma suresini kaydetmek icin durdur dugmesine tiklayin.'
  },
  {
    name: 'Peynir tipinizi veya carpani secin',
    text: 'Veritabanindan bir peynir stili secin veya ozel bir carpan girin. Uygulama toplam sureyi hesaplar ve kesim icin geri sayimi baslatir.'
  },
  {
    name: 'Sinyalde teleme kesin',
    text: 'Zamanlayici sifira ulastiginda, teleme optimum gerginlige ulasmistir. Telemenizi tarifinizde belirtildigi gibi kupler halinde kesin.'
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
} as const;

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
} as const;

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
} as const;

export const content: ToolLocaleContent = {
  slug: 'peynir-puiltilasma-carpani-hesaplayici',
  title,
  description: 'Zanaatkar peynir yapiminda teleme kesme anini tam olarak bulun. Puiltilasma carpani yontemini kullanarak pihtilasma suresini hesaplayin, nemi kontrol edin ve ucretsiz hesaplayicimizla peynir verimini artirin.',
  faqTitle: 'Sikca Sorulan Sorular',
  ui: {
    title: 'Peynir Puiltilasma Carpani',
    subtitle: 'Gercek jelatinlesme davranisina gore mukemmel teleme kesme penceresini bulun',
    flocculationLabel: 'Birincil Puiltilasma Suresi (dakika:saniye)',
    multiplierLabel: 'Puiltilasma Carpani',
    cheeseTypeLabel: 'Peynir Stili On Ayar',
    totalCoagulationLabel: 'Toplam Pihtilasma Suresi',
    timeRemainingLabel: 'Kesime Kalan Sure',
    flocculationTimeLabel: 'Puiltilasma Suresi',
    moistureLabel: 'Beklenen Teleme Nemi Tutma',
    customOption: 'Ozel Carpan',
    startTimer: 'Maya Zamanlayicisini Baslat',
    markFlocculation: 'Puiltilasmayi Isaretle',
    resetTimer: 'Zamanlayiciyi Sifirla',
    warningTitle: 'Maya Kalitesi Uyarisi',
    warningText: 'Kaydedilen puiltilasma suresi olaganustu kisa. Bu, asiri maya dozajina veya yanlis sicaklik ayarlarina isaret ediyor olabilir, bu da lastiksi bir doku veya aci tatlara neden olabilir.',
    phase1Title: 'Asama 1: Mayalama ve Puiltilasma',
    phase2Title: 'Asama 2: Pihtilasma Geri Sayimi',
    phaseComplete: 'Teleme kesime hazir!',
    statusWaiting: 'Maya karistiriliyor...',
    statusFlocculated: 'Puiltilasma tespit edildi',
    statusCoagulating: 'Pihtilasiyor...',
    statusReady: 'Kesime Hazir',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Teleme Ne Zaman Kesilmeli: Her Partide Mukemmel Peynir Icin Puiltilasma Carpani Yontemi',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Kendinize hic <strong>"teleme ne zaman kesmaliyim?"</strong> veya <strong>"telemenin hazir oldugunu nasil anlarim?"</strong> diye sorduysaniz, cevap puiltilasma carpani yonteminde yatar. Sabit zamanlayicilara guvenen endustriyel peynir yapiminin aksine, zanaatkar peynir yapimcilar sutun ilk kez jelatinlesmeye basladigi ani (puiltilasma noktasi) olcer ve bu sureyi stile ozgu bir carpanla carpar. Bu, tum degiskenleri - sut asitligi, kalsiyum seviyesi, sicaklik, maya gucu - tek bir olcumde yakalar. <strong>Peynir puiltilasma carpani hesaplayicimiz</strong> matematigi sizin icin yapar, boylece her seferinde mukemmel anda kesebilirsiniz.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2.0x', label: 'Sert Peynirler', icon: 'mdi:cheese' },
        { value: '3.0x', label: 'Yari Sert Peynirler', icon: 'mdi:cheese' },
        { value: '5.0x', label: 'Yumusak Peynirler', icon: 'mdi:cheese' },
        { value: '10-15d', label: 'Tipik Puiltilasma', icon: 'mdi:timer-outline' }
      ]
    },
    {
      type: 'title',
      text: 'Puiltilasma Yontemiyle Cozulen Yaygin Peynir Yapimi Sorunlari',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Tutarsiz teleme sertligi:</strong> Sabit zamanlayicilar sutteki parti farkliliklarini hesaba katamaz. Puiltilasma yontemi gercek sut kimyaniza uyum saglar.',
        '<strong>Dusuk peynir verimi:</strong> Cok erken veya cok gec kesmek yag ve protein kaybina neden olur. Carpan yontemi, optimum tutma icin tam pencereyi hedefler.',
        '<strong>Yanlis nem icerigi:</strong> Sert peynirler kuru teleme gerektirir; yumusak peynirler nemli teleme gerektirir. Farkli carpanlar (2.0x ila 6.0x) sinerezi dogrudan kontrol eder.',
        '<strong>Degisken maya aktivitesi:</strong> Maya gucu zaman icinde ve markalar arasinda degisir. Puiltilasma suresi olcumu, kazinizdaki gercek aktiviteyi o an yakalar.'
      ]
    },
    {
      type: 'title',
      text: 'Kase Testi Nasil Yapilir: Adim Adim',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Kase testi, ozel ekipman olmadan puiltilasmayi tespit etmenin en basit yoludur. Maya ekledikten ve iyice karistirdiktan sonra, sut yuzeyine kucuk sterilize edilmis bir plastik kase veya sise kapagi yerlestirin. Her 30 ila 60 saniyede bir, hafifce dokunun veya cevirin. Sut henuz sivi iken kase serbestce hareket eder. Direnc gosterdigi an - bu sizin <strong>puiltilasma noktanizdir</strong>. Bu sureyi kaydedin ve yukaridaki hesaplayiciya girin.'
    },
    {
      type: 'tip',
      title: 'Daha Fazla Hassasiyet Icin Sise Kapagi Kullanin',
      html: 'Hafif bir plastik sise kapagi bir kaseden daha hassastir ve daha net bir durma noktasi verir. Kullanmadan once 2 dakika kaynar suda sterilize edin ve maya eklediginiz andan itibaren sut uzerinde yuzmesini saglayin.'
    },
    {
      type: 'tip',
      title: 'Sicakliginizi Sabit Tutun',
      html: 'Puiltilasma suresi sicakliga son derece baglidir. Sadece 2C\'lik bir dusus, puiltilasma surenizi ikiye katlayabilir. Pihtilasma asamasi boyunca sutu sabit bir sicaklikta (peynir stiline bagli olarak tipik olarak 30-35C) tutun.'
    },
    {
      type: 'tip',
      title: 'Cok Hizli Puiltilasmaya Dikkat Edin',
      html: 'Puiltilasma 8 dakikadan (480 saniye) kisa surede gerceklesirse, cok fazla maya eklemis veya sut sicakliginiz cok yuksek olabilir. Bu, lastiksi bir doku ve aci tatlara neden olabilir. Bu durumda hesaplayici sizi uyaracaktir.'
    },
    {
      type: 'title',
      text: 'Peynir Tipine Gore Puiltilasma Carpani Referansi',
      level: 2
    },
    {
      type: 'table',
      headers: ['Peynir Stili', 'Carpan', 'Beklenen Nem', 'Kesme Sertligi', 'Olgunlasma Potansiyeli'],
      rows: [
        ['Parmesan, Grana', '2.0x', 'Cok Dusuk', 'Cok Sert', '12+ ay'],
        ['Mozzarella (taze)', '2.0x', 'Cok Yuksek', 'Yumusak / Uzayabilir', 'Sadece taze'],
        ['Isvicre, Alp', '2.5x', 'Dusuk', 'Sert', '6-12 ay'],
        ['Cheddar, Gouda', '3.0x', 'Orta-Dusuk', 'Sert / Yayli', '3-12 ay'],
        ['Mavi Peynir', '3.5x - 4.0x', 'Orta', 'Hassas', '2-6 ay'],
        ['Camembert, Brie', '5.0x', 'Yuksek', 'Cok Hassas', '3-8 hafta'],
        ['Laktik / Taze Chevre', '5.0x - 6.0x', 'Cok Yuksek', 'Narin', 'Taze - 2 hafta']
      ]
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Dusuk Carpan 2.0x to 2.5x',
          icon: 'mdi:cheese',
          description: 'Dusuk nem tutmasi gerektiren sert, kuru peynir cesitleri icin kullanilir.',
          highlight: false,
          points: ['Mozzarella & Parmesan: 2.0x', 'Alp stilleri: 2.5x', 'Hizli peynir alti suyu tahliyesi', 'Yogun, olgunlasmaya uygun teleme uretir']
        },
        {
          title: 'Orta Carpan 3.0x to 4.0x',
          icon: 'mdi:cheese',
          description: 'Nemi ve asitligi dengeleyen yari sert peynirler icin standart aralik.',
          highlight: true,
          points: ['Cheddar & Gouda: 3.0x', 'Mavi peynirler: 3.5x ila 4.0x', 'Dengeli peynir alti suyu atilimi', 'Esnek kurtulma potansiyeli']
        },
        {
          title: 'Yuksek Carpan 5.0x to 6.0x',
          icon: 'mdi:cheese',
          description: 'Yumusak, kremsi, yuksek nemli peynirler icin kullanilir.',
          highlight: false,
          points: ['Camembert & Brie: 5.0x', 'Laktik ve yumusak kuflu kabuklar', 'Yuksek nem tutma', 'Narin, kremsi doku gelisimi']
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Sorun Giderme: Telemenizin Dogru Ayarlanmadigina Dair 3 Isaret',
      html: "<strong>6 dakikadan kisa surede puiltilasma:</strong> Cok fazla maya veya sut cok sicak. Sonraki partide mayayi %25 azaltin. <strong>Puiltilasma 25 dakikadan uzun suruyor:</strong> Maya son kullanma tarihi gecmis olabilir, sut cok soguk veya kalsiyum seviyesi cok dusuk olabilir. Kalsiyum klorur ekleyin. <strong>Kesme aninda teleme yapiskan veya kirilgan:</strong> Carpan, peynir stiliniz icin cok yuksek veya cok dusuk olabilir. 0.5x'lik artislarla ayarlayin."
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Sert Peynirler (Parmesan, Alp)',
      html: '<strong>2.0x - 2.5x carpan</strong> kullanin. Maksimum peynir alti suyu atilimi icin teleme daha erken kesin. Bu telmeler, jel henuz nispeten kirilganken kesilir ve uzun olgunlasma icin ideal olan yogun, kuru bir teleme uretir. Hesaplayici daha kisa bir toplam pihtilasma suresi gosterecektir.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Yari Sert Peynirler (Cheddar, Gouda)',
      html: '<strong>3.0x carpan</strong> kullanin. Cogu zanaatkar peynir yapimi icin standart aralik. Nem tutma ile peynir alti suyu tahliyesini dengeler. Teleme yaylidir ve temiz kirilir. Peynir tariflerinin cogu bu kategoriye girer.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Yumusak Peynirler (Camembert, Brie)',
      html: '<strong>5.0x - 6.0x carpan</strong> kullanin. Kesmeden once jelin onemli olcude guclenmesine izin verin. Bu, telemenin icinde nemi hapsederek kuflu kabuk peynirlerinin karakteristik ozelligi olan kremsi, surulebilir dokuyu olusturur. Tutulan peynir alti suyunu kaybetmemek icin teleme ile nazikce ilgilenin.'
    },
    {
      type: 'title',
      text: 'Zanaatkar Peynir Yapimi Teleme Sozlugu',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Puiltilasma Noktasi', definition: 'Sut proteinlerinin birbirine yapismaya ve yumusak bir jel olusturmaya basladigi peynir yapimi surecindeki an.' },
        { term: 'Maya', definition: 'Sutu pihtilastirmak, kati (teleme) ve sivi (peynir alti suyu) olarak ayirmak icin kullanilan bir enzim kompleksi (temel olarak kimozin).' },
        { term: 'Sinerez', definition: 'Bir jelin icinden peynir alti suyunun telemeden suzulmesi gibi bir sivi cikarilmasi veya atilmasi.' },
        { term: 'Pihtilasma Suresi', definition: 'Maya eklenmesinden telemenin kesilmeye hazir olana kadarki toplam sure.' }
      ]
    },
    {
      type: 'summary',
      title: 'Mukemmel Teleme Kesimi Icin Ana Cikarimlar',
      items: [
        'Kase testini kullanarak puiltilasma suresini hassas bir sekilde olcun. Yukaridaki hesaplayiciya girin.',
        'Peynir stilinize uygun carpani secin: sert peynirler icin 2.0x, yari sert peynirler icin 3.0x, yumusak peynirler icin 5.0x.',
        "Pihtilasma sirasinda sut sicakligini sabit tutun. Sadece 2C'lik bir degisim puiltilasma suresini onemli olcude degistirir.",
        'Puiltilasma 8 dakika icinde gerceklesirse, bir dahaki sefere mayayi azaltin. 25 dakikanin uzerindeyse, maya tazeligini kontrol edin.',
        'Hesaplayici matematigi sizin icin yapar, boylece teknige ve tutarliliga odaklanabilirsiniz.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
