import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Koji Asilama ve Hidrasyon Hesaplayici";
const description = "Evde koji yapimi icin mukemmel nem icerigini, spor asilama dozajini ve inkubasyon sicakligini hesaplayin. Ucretsiz koji asilama ve hidrasyon hesaplayicimizla basarisiz partilerden kacinin.";
const faq = [
  {
    question: "Koji substratini pisirmek icin hedef nem icerigi nedir?",
    answer: "Koji asilarken bugulanmis pirinc veya arpa icin ideal toplam nem icerigi %30 ile %35 arasindadir. Bu, baslangic kuru agirligin yaklasik 1,35x ila 1,40x i kadar bir bugulanmis agirliga karsilik gelir."
  },
  {
    question: "Ne kadar spor tozuna (tane-koji) ihtiyacim var?",
    answer: "Standart asilama orani, 1 kilogram kuru substrat basina 1 gram standart spor karisimidir. Konsantre spor kullaniyorsaniz daha azina (0,5 g) ihtiyac duyarsiniz, seyreltilmis karisimlar ise daha fazlasini (2,0 g) gerektirir."
  },
  {
    question: "Koji inkubasyonu sirasinda sicaklik kontrolu neden kritiktir?",
    answer: "Aspergillus oryzae, 28C ile 34C arasinda optimum sekilde büyür. Sicaklik 38C'yi asarsa, küf asiri isinabilir, büyümesi durabilir veya istenmeyen yesil/siyah sporlar uretebilir. 20C'nin altinda büyüme belirgin sekilde yavaslar."
  },
  {
    question: "Ekzotermik faz sirasinda ne olur?",
    answer: "18 ila 24 saatlik inkubasyondan sonra koji hizla büyümeye baslar ve kendi isisini uretir. Bu ekzotermik pik sirasinda, asiri isinmayi onlemek icin substrati karistirmali ve inkubator isisini dusurmelisiniz."
  }
];

const howTo = [
  {
    name: "Kuru substrat agirligini girin",
    text: "Hedef hidrasyon esiklerini belirlemek icin pirinc veya arpanizin baslangic kuru agirligini girin."
  },
  {
    name: "Bugulanmis agirligi takip edin",
    text: "Pisirme sonrasi gercek bugulanmis agirligi girin. Hesaplayici nem yuzdesini belirler ve %30-35 ideal araliginda olup olmadigini kontrol eder."
  },
  {
    name: "Spor dozajini hesaplayin",
    text: "Asilama icin tam spor tozu agirligini elde etmek uzere spor gucunuzu (standart, konsantre veya seyreltilmis) secin."
  },
  {
    name: "Inkubasyon parametrelerini izleyin",
    text: "Misel büyumesini simule etmek icin sicakligi ve bagil nemi ayarlayin ve 48 saatlik termal egri zaman cetvelini inceleyin."
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
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'koji-asilama-hesaplayici',
  title: 'Koji Asilama ve Hidrasyon Hesaplayici',
  description: 'Evde koji yapimi icin mukemmel nem icerigini, spor asilama dozajini ve inkubasyon sicakligini hesaplayin. Ucretsiz koji asilama ve hidrasyon hesaplayicimizla basarisiz partilerden kacinin.',
  faqTitle: 'Sikca Sorulan Sorular',
  ui: {
    title: 'Koji Asilama Analizoru',
    subtitle: 'Kati hal koji fermentasyon parametrelerini optimize edin',
    dryWeightLabel: 'Kuru Substrat Agirligi',
    steamedWeightLabel: 'Gercek Bugulanmis Agirlik',
    targetRangeLabel: 'Hedef Bugulanmis Agirlik Araligi',
    moistureLabel: 'Mevcut Nem',
    potencyLabel: 'Spor Gucu',
    standardPotency: 'Standart Sporlar',
    concentratedPotency: 'Konsantre',
    dilutedPotency: 'Seyreltilmis Karisim',
    sporeDosageLabel: 'Spor Dozaji',
    tempLabel: 'Inkubator Sicakligi',
    humidityLabel: 'Bagil Nem',
    statusIdeal: 'Ideal Inkubasyon',
    statusSlow: 'Yavas Buyume',
    statusInhibited: 'Engellenmis / Soguk',
    statusOverheating: 'Asiri Isinma / Sporulasyon',
    timelineTitle: '48s Termal Inkubasyon Döngüsü',
    stage1Name: '0-18s: Isitma',
    stage2Name: '18-36s: Ekzotermik Pik',
    stage3Name: '36-48s: Olgunlasma'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Koji Nasil Yapilir: Aspergillus Oryzae icin Mukemmel Nem, Spor Dozaji ve Sicaklik',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Evde koji yapmak uc seyin dogru olmasini gerektirir: <strong>substrat hidrasyonu</strong>, <strong>spor asilama yogunlugu</strong> ve <strong>inkubasyon sicaklik kontrolu</strong>. Bunlardan herhangi biri yanlis olursa partiniz asiri isinabilir, asilama basarisiz olabilir veya yanlis kuf ureyebilir. <strong>Koji asilama hesaplayicimiz</strong>, ozel girdilerinize gore hedef bugulanmis agirliginizi, tam spor dozajinizi ve gercek zamanli inkubasyon durumunuzu hesaplayarak tahmin yurutmeyi ortadan kaldirir.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '30-35%',
          label: 'Hedef Nem',
          icon: 'mdi:water-percent'
        },
        {
          value: '1 g/kg',
          label: 'Standart Spor Orani',
          icon: 'mdi:seed-outline'
        },
        {
          value: '28-34°C',
          label: 'Ideal Sicaklik',
          icon: 'mdi:thermometer'
        },
        {
          value: '48 s',
          label: 'Toplam Inkubasyon',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: 'Nem Icerigi Koji Kalitesini Neden Belirler',
      level: 2
    },
    {
      type: 'paragraph',
      html: "Basitli koji yetistiriciliginde en onemli faktor <strong>substrat nemidir</strong>. Pirinc veya arpa bugulandiginda, nisasta granulleri jelatinlesir ve suyu emer, Aspergillus oryzae tarafindan uretilen enzimler icin erisilebilir hale gelir. Ideal nem araligi dardir: <strong>%30 ila %35</strong>. %30'un altinda, misel buyumek icin yeterli suyu cekemez ve enzim uretimi durur. %35'in uzerinde, taneler yapiskan hale gelir ve birbirine yapisarak hava gozenekliligini azaltir ve aerobik kufu bogar."
    },
    {
      type: 'list',
      items: [
        '<strong>Cok kuru (%30 alti):</strong> Misel buyumesi engellenir, enzim uretimi duser ve koji taneyi tamamen kolonize edemez.',
        '<strong>Cok islak (%35 ustu):</strong> Taneler birbirine yapisir, hava cepleri coker ve bakteriler veya istenmeyen kufler Aspergillus oryzae yi geride birakabilir.',
        '<strong>Hedef aralik (%30-35):</strong> Tane sikidir, tek tek taneler kolayca ayrilir ve misel 48 saat icinde esit sekilde yayilir.',
        '<strong>Nasil olculur:</strong> Kuru tahilinizi tartin, bugulayin, ardindan tekrar tartin. Hesaplayici, bu iki sayidan tam nem yuzdenizi hesaplar.'
      ]
    },
    {
      type: 'table',
      headers: ['Tahil Turu', 'Kuru Agirlik', 'Hedef Bugulanmis Agirlik', 'Islatma Suresi', 'Bugulama Suresi'],
      rows: [
        ['Beyaz Pirinc (kisa taneli)', '1000 g', '1350-1400 g', '2-4 s', '30-40 dk'],
        ['Beyaz Pirinc (uzun taneli)', '1000 g', '1350-1400 g', '2-4 s', '30-40 dk'],
        ['Inci Arpa', '1000 g', '1350-1400 g', '4-8 s', '40-50 dk'],
        ['Kahverengi Pirinc', '1000 g', '1350-1400 g', '8-12 s', '45-60 dk']
      ]
    },
    {
      type: 'title',
      text: 'Spor Asilama: Ne Kadar Tane-Koji Ihtiyaciniz Var?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Asilama yogunlugu, kufun substrati ne kadar hizli kolonize ettigini ve kirleticilere karsi ne kadar rekabetci oldugunu dogrudan etkiler. Standart oran <strong>kilogram kuru substrat basina 1 gram spor karisimidir</strong>, ancak bu spor turune gore degisir.'
    },
    {
      type: 'proscons',
      title: 'Spor Turunuzu Secme',
      items: [
        {
          pro: 'Standart sporlar en yaygin formattir, yeni baslayanlar icin affedicidir ve evde bira yapimi literaturunde iyi belgelenmistir.',
          con: 'Parti basina daha yuksek toz hacmi ve asilamaya katkida bulunmayan dolgu maddesi icerebilir.'
        },
        {
          pro: 'Konsantre sporlar ayni asilama icin yari miktarda toz kullanir, daha yuksek safliga sahiptir ve buyuk partiler icin daha ekonomiktir.',
          con: 'Asiri dozajlamasi daha kolaydir, hassas bir terazi (0,01 g cozunurluk) gerektirir ve dusuk dozaj durumunda hata payi daha azdir.'
        },
        {
          pro: 'Seyreltilmis karisimlar genis yuzeylere kolayca dagilir, esit olmayan karistirmada daha affedicidir ve gorunur kaplamayi tercih eden yeni baslayanlar icin uygundur.',
          con: 'Parti basina daha fazla toz kullanir ve dolgu maddesinden fazla nisasta ekleyebilir.'
        }
      ]
    },
    {
      type: 'title',
      text: 'Ekzotermik Isi Egrisi: Koji Neden Kendi Isisini Uretir',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Aspergillus oryzae nisastalari tuketip basit sekerlere donustururken metabolik isi uretir. Inkubasyonun <strong>18 ve 36</strong> saatleri arasinda biyolojik aktivite zirve yapar ve tahil yataginin sicakligini inkubator ortam sicakliginin 5-10C uzerine cikarabilecek bir ekzotermik dalga uretir.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Kojinizin Asiri Isindigina Dair Isaretler',
      html: 'Tahil yatagi sicakligi <strong>38C</strong> yu gecerse, kuf enzimleri denature olmaya baslar ve mantar, <strong>yesil veya siyah sporlar</strong> ureterek ureme moduna gecer. Parti tatli ve kestane gibi kokmak yerine amonyak benzeri kokacaktir. Substrati hemen karistirmali ve inkubator sicakligini dusurerek 34C altina getirmelisiniz.'
    },
    {
      type: 'tip',
      title: '12 Saatlik Donus Programi',
      html: '18. saatten baslayarak tahil yatagini kirin ve her 12 saatte bir karistirin. Bu, sıkısan isiyi serbest birakir, nemi yeniden dagitir ve miselin temiz oksijene erismesini saglar. Temiz, dezenfekte edilmis eller veya steril bir kasik kullanin.'
    },
    {
      type: 'tip',
      title: 'Nem de Onemlidir',
      html: 'Inkubasyon sirasinda bagil nemi <strong>%65</strong> in uzerinde tutun. %40 in altinda substrat kurur ve buyume durur. %90 in uzerinde yogusma, tahil yuzeyinde bakteri uremesini tesvik edebilir.'
    },
    {
      type: 'tip',
      title: 'Burnunuza Guvenin',
      html: 'Saglikli koji, tatli kavrulmus kestane veya taze mantar gibi kokar. Amonyak, ek silik veya curume kokusu alirsaniz, parti asiri isinmis veya kirlenmis olabilir. Etkilenen tahili hemen cikarin ve atin.'
    },
    {
      type: 'card',
      icon: 'mdi:rice',
      title: 'Sake ve Miso Yapimi',
      html: 'Koji asilanmis pirinc, <strong>sake</strong>, <strong>miso</strong> ve <strong>amazake</strong> nin temelidir. Hassas nem kontrolu, nisastan seker donusumu icin dogru enzim gelisimini saglar.'
    },
    {
      type: 'card',
      icon: 'mdi:soy-sauce',
      title: 'Soya Sosu ve Tamari',
      html: '<strong>Soya fasulyesi</strong> veya soya fasulyesi-bugday karisimi uzerinde yetistirilen koji, umami zengini soya sosu ureten fermentasyonu yonlendirir. Tutarli sicaklik, istenmeyen tatlarin onune gecer.'
    },
    {
      type: 'card',
      icon: 'mdi:shaker-outline',
      title: 'Shio Koji ve Garum',
      html: '<strong>Shio koji</strong> (tuzla fermente koji) ve <strong>et garumu</strong>, tamamen kolonize olmus tahila dayanir. Hesaplayicimiz, asilama oncesinde substratinizin ideal nem araliginda olmasini saglar.'
    },
    {
      type: 'title',
      text: 'Koji Inkubasyon Sozlugu',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Tane-Koji',
          definition: 'Bugulanmis tahili asilamak icin kullanilan spor tozu. Genellikle pirinc unu gibi bir nisasta tasiyicisi ile karistirilmis Aspergillus oryzae sporlari.'
        },
        {
          term: 'Ekzotermik Faz',
          definition: 'Aspergillus oryzae nin tahil yatagi sicakligini ortam seviyesinin uzerine cikarmak icin yeterli metabolik isi urettigi inkubasyonun 18 ila 36 saatleri arasindaki donem.'
        },
        {
          term: 'Jelatinizasyon',
          definition: 'Nisastanin su varliginda isitilarak granullerin sismesi ve kuf tarafindan uretilen amilaz enzimleri icin erisilebilir hale gelmesi surecidir.'
        },
        {
          term: 'Sporulasyon',
          definition: 'Kufun vejetatif buyumeden ureme moduna gecerek yesil veya siyah renge donusmesi. Bu, 38C uzerindeki isi stresiyle tetiklenir ve partiyi mutfak kullanimi icin bozar.'
        }
      ]
    },
    {
      type: 'summary',
      title: 'Mukemmel Koji icin Temel Cikarimlar',
      items: [
        'Bugulanmis tahilde %30-35 nemi hedefleyin. Tam bugulanmis agirlik hedefinizi bulmak icin hesaplayiciyi kullanin.',
        'Standart sporlar icin 1 g/kg, konsantre icin 0,5 g/kg veya seyreltilmis karisimlar icin 2 g/kg oraninda asilama yapin.',
        'Inkubasyon sirasinda 28-34C ve %65 in uzerinde nem tutun. 18. saatten sonra her 12 saatte bir karistirin.',
        '18-36 saatteki ekzotermik piki izleyin. Sicaklik 38C yi gecerse hemen karistirin ve isiyi dusurun.',
        'Duyulariniza guvenin: tatli kestane aromasi = iyi koji. Amonyak veya ek si koku = asiri isinma veya kirlenme.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
