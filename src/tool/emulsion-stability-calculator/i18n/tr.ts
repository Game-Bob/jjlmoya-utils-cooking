import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Emulsiyon Stabilite ve Yag Limiti Hesaplayici";
const description = "Mayonez, aioli ya da vinaigrette'inizin kesilmeden once ne kadar yag kaldirabilecegini tam olarak ogrenin. Ucretsiz emulsiyon stabilite hesaplayicimizla bolunen soslari onleyin.";
const faq = [
  {
    question: "Mayonezime kesilmeden once ne kadar yag ekleyebilirim?",
    answer: "Emulgatore baglidir. Yumurta sarisi ~%78'e kadar yagi destekler (su hacminin yaklasik 3,5 kati), hardal %70'e kadar, soya lesitini %82'ye kadar ve polisorbat %85'e kadar. Spesifik miktarlariniz icin tam maksimumu almak ustteki hesaplayiciyi kullanin."
  },
  {
    question: "Emulsiyonum neden kesildi veya ayristi?",
    answer: "Bir emulsiyon, yag hacim orani emulgatorun maksimum paketleme limitini astiginda kesilir. Bu noktada, yag damlaciklari o kadar sikisir ki birlesir ve karisim ayrilir. Bu aniden olur - kademeli bir surec degildir."
  },
  {
    question: "Kesilmis bir mayonezi veya aioliyi nasil duzeltebilirim?",
    answer: "Temiz bir kasede taze bir yumurta sarisi veya bir yemek kasigi ilik su ile baslayin. Kesilmis karisimi, cig yag ekler gibi surekli cirparak yavasca ekleyin. Yukaridaki hesaplayici tam olarak ne kadar su veya sariya ihtiyaciniz oldugunu soyler."
  },
  {
    question: "Yagi cok hizli eklemek emulsiyonun kesilmesine neden olur mu?",
    answer: "Yagi cok hizli eklemek emulgatoru gecici olarak asiri yukleyebilir, ancak kesilmenin gercek nedeni her zaman yanlis faz oranidir. Yag oraniniz emulgatorun limitinin altinda kalirsa, emulsiyon hizdan bagimsiz olarak stabil kalir. Limiti asarsa, kesilme kacinilmazdir."
  },
  {
    question: "Emulgator olarak yumurta sarisi ile hardal arasindaki fark nedir?",
    answer: "Yumurta sarisi (%78 maksimum yag), damlaciklarin etrafinda saglam bir film olusturan lesitin ve lipoproteinler icerir. Hardal (%70 maksimum yag) musilaj ve proteinlere dayanir - daha zayiftir ancak lezzet katar. Soya lesitini (%82) ve polisorbat (%85) oldukca verimli endustriyel sinif emulgatorlerdir."
  }
];

const howTo = [
  {
    name: "Emulgatorunuzu secin",
    text: "Tarifinizdeki emulgatoru secin - klasik mayonez icin yumurta sarisi, vinaigretteler icin hardal veya modernist mutfak icin soya lesitini/polisorbat. Her biri farkli bir maksimum yag limiti belirler."
  },
  {
    name: "Su fazi hacminizi girin",
    text: "Sulu bilesenlerinizin toplam mililitresini girin: su, sirke, limon suyu, sarap veya su bazli herhangi bir sivi. Hesaplayici, sectiginiz emulgatorun su icerigini otomatik olarak ekler."
  },
  {
    name: "Yag hacminizi ayarlayin",
    text: "Kullanmayi planladiginiz yag miktarini girin. Kaydiriciyi kullanin veya degeri yazin. Hesaplayici, bu miktarin stabil bir emulsiyon uretip uretmeyecegini veya kesilmeye neden olup olmayacagini aninda gosterir."
  },
  {
    name: "Stabilite sonucunu okuyun ve gerekirse duzeltin",
    text: "Yag hacim orani gostergesini kontrol edin. Stabil ise, devam edebilirsiniz. Kesilmisse, kurtarma paneli dengeyi saglamak icin ne kadar su (ml olarak) veya kac ek yumurta sarisi eklemeniz gerektigini tam olarak soyler."
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
  slug: 'emulsiyon-stabilite-hesaplayici',
  title: 'Emulsiyon Stabilite ve Yag Limiti Hesaplayici',
  description: 'Mayonez, aioli ya da vinaigrette\'inizin kesilmeden once ne kadar yag kaldirabilecegini tam olarak ogrenin. Ucretsiz emulsiyon stabilite hesaplayicimizla bolunen soslari onleyin.',
  faqTitle: 'Sikca Sorulan Sorular',
  ui: {
    title: 'Emulsiyon Stabilite Analizoru',
    subtitle: 'Sosunuz kesilmeden once ne kadar yag kaldirabilir?',
    waterLabel: 'Su Fazi (ml)',
    oilLabel: 'Yag Hacmi (ml)',
    emulsifierLabel: 'Emulgator Turu',
    yolkOption: 'Yumurta Sarisi',
    mustardOption: 'Hardal',
    soyLecithinOption: 'Soya Lesitini',
    polysorbateOption: 'Polisorbat',
    stableStatus: 'Stabil Emulsiyon',
    brokenStatus: 'Kesilmis Emulsiyon',
    ratioLabel: 'Yag Hacim Orani',
    maxLimitLabel: 'Maksimum Yag Limiti',
    fixTitle: 'Kurtarma Stratejisi',
    waterFixText: 'Faz dengesini saglamak icin su ekleyin:',
    yolkFixText: 'Alternatif olarak, ek yumurta sarisi kullanin:',
    idealRangeText: 'Ideal aralik, kritik paketleme limiti olan %74 ile %80\'in altindadir.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Bir Mayonez veya Aioli Kesilmeden Once Ne Kadar Yag Kaldirabilir?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Her asci bu soruyu sormustur: <strong>mayonezim neden kesildi?</strong> Cevap gorundugunden daha basit. Bir emulsiyon - ister klasik bir aioli, ister kremsi bir vinaigrette, isterse modernist bir kopuk olsun - cokmeden once ancak sinirli miktarda yag tutabilir. Bizim <strong>emulsiyon stabilite hesaplayicimiz</strong>, spesifik malzemelerinize ve miktarlariniza dayanarak bu kirilma noktasinin tam olarak nerede oldugunu soyler.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '78%',
          label: 'Yumurta Sarisi Maks. Yag',
          icon: 'mdi:egg-outline'
        },
        {
          value: '85%',
          label: 'Polisorbat Limiti',
          icon: 'mdi:flask-outline'
        },
        {
          value: '74%',
          label: 'Teorik Paketleme',
          icon: 'mdi:sphere'
        },
        {
          value: '15 ml',
          label: 'Sarisinin Su Icerigi',
          icon: 'mdi:water'
        }
      ]
    },
    {
      type: 'title',
      text: 'Bilim: Emulsiyonlar Neden Kesilir',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Bir mutfak emulsiyonu, kucuk yag damlaciklarini surekli bir su fazi boyunca dagitarak calisir. <strong>Emulgatorler</strong> - yumurta sarisindaki lesitin, hardaldaki musilaj veya polisorbat gibi sentetik yuzey aktif maddeler - her damlacigi kaplar ve komsulariyla birlesmesini onler.'
    },
    {
      type: 'paragraph',
      html: 'Kirilma noktasi tamamen geometri tarafindan belirlenir. Yag damlaciklari, bir araya paketlenmis kucuk kureler gibi davranir. Belirli bir alana sigdirabileceginiz maksimum kure hacmi - <strong>Kepler sanisi</strong> olarak bilinir - yaklasik %74\'tur. Gercek mutfak sistemlerinde bu, guclu emulgatorlerle %80-85\'e kadar cikabilir, ancak bunun otesinde damlaciklar o kadar sikisir ki birlesir ve emulsiyon aninda coker.'
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Yumurta Sarisi',
          icon: 'mdi:egg-outline',
          description: 'Klasik mayonez emulgatoru. Lesitin ve lipoproteinler icerir.',
          highlight: true,
          points: [
            'Maks. yag: %78',
            'Sarisi basina ~15 ml su',
            'Zenginlik ve renk katar',
            'Mayonez ve aioli icin en iyisi'
          ]
        },
        {
          title: 'Hardal',
          icon: 'mdi:shaker-outline',
          description: 'Musilaj ve tohum proteinlerine dayanir. Keskin tat katar.',
          points: [
            'Maks. yag: %70',
            '~10 ml su icerigi',
            'Daha zayif emulgator gucu',
            'Vinaigretteler icin ideal'
          ]
        },
        {
          title: 'Soya Lesitini',
          icon: 'mdi:leaf',
          description: 'Yuksek konsantre bitki bazli yuzey aktif madde.',
          points: [
            'Maks. yag: %82',
            '~5 ml su icerigi',
            'Notr tat profili',
            'Modernist mutfak malzemesi'
          ]
        },
        {
          title: 'Polisorbat',
          icon: 'mdi:flask-outline',
          description: 'Maksimum yuzey aktif madde kapasiteli sentetik emulgator.',
          points: [
            'Maks. yag: %85',
            '~2 ml su icerigi',
            'En yuksek yag toleransi',
            'Kopuk ve havalandirmalarda kullanilir'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emulgator', 'Maks. Yag %', '100 ml Su Basina Yag', 'En Iyi Kullanim'],
      rows: [
        ['Yumurta Sarisi', '%78', '~355 ml', 'Mayonez, aioli, hollandez'],
        ['Hardal', '%70', '~233 ml', 'Vinaigretteler, hafif soslar'],
        ['Soya Lesitini', '%82', '~456 ml', 'Modernist soslar, kopukler'],
        ['Polisorbat', '%85', '~567 ml', 'Stabil kopukler, deneysel mutfak']
      ]
    },
    {
      type: 'title',
      text: 'Kesilmis Bir Emulsiyonu Adim Adim Nasil Kurtarirsiniz',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Mayoneziniz veya sosunuz kestiyse, <strong>sakin atmayin</strong>. Cozum basittir - ancak yalnizca faz oranini anlarsaniz. Daha sert cirpmak ise yaramaz; daha fazla surekli (su) fazi eklemeniz gerekir.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Emulsiyonunuzun Kesilmek Uzere Oldugunun Yaygin Isaretleri',
      html: 'Bir <strong>koyulasma ve ardindan ani incelme</strong>, <strong>parlak yuzeyin taneli hale gelmesi</strong> veya kenarlarda gorunur yag birikmesine dikkat edin. Bunlardan herhangi birini gorurseniz, hemen yag eklemeyi birakin ve devam etmeden once bir tatli kasigi soguk su cirpin.'
    },
    {
      type: 'title',
      text: 'Her Zaman Mukemmel Emulsiyonlar Icin Pratik Ipuclari',
      level: 3
    },
    {
      type: 'tip',
      title: 'Sicaklik Onemlidir',
      html: 'Tum malzemeler <strong>oda sicakliginda</strong> olmalidir. Soguk yumurta veya soguk yag, kesilme riskini onemli olcude artirir. Malzemeleri baslamadan 30 dakika once buzdolabindan cikarin.'
    },
    {
      type: 'tip',
      title: 'Su Guvenlik Agi',
      html: 'Tarifiniz yeterli asit (sirke, limon suyu) icermiyorsa, yag eklemeye baslamadan once <strong>yumurta sarisi basina bir tatli kasigi soguk su</strong> ekleyin. Bu ekstra su daha genis bir guvenlik marji olusturur.'
    },
    {
      type: 'tip',
      title: 'Kesilmis Bir Partiyi Duzeltme',
      html: 'Temiz bir kaseye taze bir yumurta sarisi koyun. Bir tatli kasigi su ile cirpin. Ardindan, <strong>kesilmis karisimi mumkun oldugunca yavasca ekleyin</strong>, tipki cig yag ekler gibi. Tekrar emulsiyon haline geldiginde, geri kalanini daha hizli ekleyebilirsiniz.'
    },
    {
      type: 'title',
      text: 'Mutfak Emulsiyon Terimleri Sozlugu',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Surekli Faz',
          definition: 'Damlaciklari cevreleyen sivi - mayonez gibi yag-su emulsiyonlarinda genellikle su, sirke veya narenciye suyu.'
        },
        {
          term: 'Dagilmis Faz',
          definition: 'Kucuk damlaciklara ayrilmis sivi - cogu mutfak emulsiyonunda yag. Ne kadar cok eklerseniz, damlaciklar o kadar siki paketlenir.'
        },
        {
          term: 'Hacim Orani',
          definition: 'Yag hacminin toplam hacme orani. Yaklasik %74-85\'te (emulgatore bagli olarak), emulsiyon geometrik kirilma noktasina ulasir.'
        },
        {
          term: 'Birlesme (Koalesans)',
          definition: 'Iki veya daha fazla yag damlaciginin daha buyuk bir damlacikta birlesmesi. Bu, gorunur bir emulsiyon kirilmasini tetikleyen mikroskobik surectir.'
        },
        {
          term: 'Faz Tersinmesi',
          definition: 'Bir yag-su emulsiyonunun su-yag emulsiyonuna donustugu nokta - kremadan tereyagi yaparken oldugu gibi. Bu, nihai basarisizlik modudur.'
        }
      ]
    },
    {
      type: 'paragraph',
      html: 'Ister klasik bir Fransiz mayonezi, ister sarimsakli bir aioli, ister stabil bir vinaigrette yapiyor olun, isterse modernist hidrokolloidlerle deney yapiyor olun, <strong>yag-su oranini</strong> anlamak en onemli faktorduer. Hesaplayicimiz matematigi halleder, boylece guvenle pisirebilirsiniz.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
