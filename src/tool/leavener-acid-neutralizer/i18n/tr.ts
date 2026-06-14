import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Karbonat ve Kabartma Tozu Hesaplayicisi: Kabartici Asit Notrleyici";
const description = "Tarifiniz icin tam karbonat ve kabartma tozu oranini hesaplayin. Yayikalti ve yogurt gibi asidik malzemeleri notrlestirin, metalik tattan kacinin ve her seferinde mukemmel kabarma elde edin.";
const faq = [
  {
    question: "Karbonat yerine kabartma tozu kullanirken neden asit gerekir?",
    answer: "Karbonat saf bir bazdir. Aktiflesmek ve karbondioksit gazi cikarmak icin bir asit kaynagina ihtiyac duyar. Yeterli asit olmadan karbonat tam olarak reaksiyona girmez ve pisirilen urunde aci, metalik bir tat birakir."
  },
  {
    question: "Karbonat ile kabartma tozu arasindaki fark nedir?",
    answer: "Karbonat %100 sodyum bikarbonattir, bir bazdir. Kabartma tozu ise eksiksiz bir kabartici olup karbonat, kuru bir asitlendirici madde (krem tartar gibi) ve nisasta icerir. Kabartma tozu kendiliginden notrlesir."
  },
  {
    question: "1 tatli kasigi karbonat kac tatli kasigi kabartma tozuna denktir?",
    answer: "Karbonat, kabartma tozundan yaklasik 3-4 kat daha gucludur. 1 tatli kasigi karbonat yerine yaklasik 3-4 tatli kasigi kabartma tozu gerekir. Ancak bu degisiklik, tadi etkileyebilecek asit tuzlari da ekler; bu yuzden hassas donusumler icin hesaplayicimizi kullanmak en iyisidir."
  },
  {
    question: "Kekim neden sabun veya metal gibi tadiyor?",
    answer: "Sabunumsu veya metalik bir tat, reaksiyona girmemis karbonatin klasik belirtisidir. Hamurda sodyum bikarbonati tamamen notrlestirmek icin yeterli asit olmadiginda, alkalin kalinti pisirme sonrasinda kalir ve o hos olmayan kimyasal tadi verir. Tam notrlestirme saglamak icin hesaplayicimizi kullanin."
  },
  {
    question: "Dutch usulu kakao tozunu asit olarak kullanabilir miyim?",
    answer: "Hayir. Dutch usulu kakao tozu, dogal asiditesini azaltmak icin alkalilestirici bir madde ile islem gormustur (pH ~7-8). Sadece dogal kakao tozu (pH ~5-6) asidiktir ve karbonati notrlestirir."
  },
  {
    question: "Karbonat, pisirilen urunlerin kizarmasini nasil etkiler?",
    answer: "Karbonat, hamurun pH degerini yukselterek daha alkalin hale getirir. Yuksek pH, Maillard kizarma reaksiyonunu hizlandirir; kurabiye ve keklerde daha koyu kabuklar ve daha derin lezzetler olusur."
  }
];

const howTo = [
  {
    name: "Un agirligini girin",
    text: "Gerekli toplam kabarma gucunu hesaplamak icin tarifinizdeki toplam un agirligini gram veya ons cinsinden girin."
  },
  {
    name: "Asidik malzemeleri ekleyin",
    text: "Tarifinizdeki asidik malzemeleri (yayikalti, yogurt veya limon suyu gibi) secin ve agirliklarini girin."
  },
  {
    name: "pH dengesini kontrol edin",
    text: "Sanal pH denge terazisini gozlemleyin. Dengeli bir terazi, metalik kotu tatlar olmadan optimum notrlestirmeyi gosterir."
  },
  {
    name: "Kabarticilari olcun",
    text: "Notrlestirme icin onerilen karbonat miktarini ve hedef kabarma seviyesine ulasmak icin gerekli kabartma tozu destegini okuyun."
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
  slug: 'asit-notrleyici-kabartma-tozu',
  title: 'Kabartici Asit Notrleyici',
  description: 'Tarifiniz icin tam karbonat ve kabartma tozu oranini hesaplayin. Yayikalti ve yogurt gibi asidik malzemeleri notrlestirin, metalik tattan kacinin ve her seferinde mukemmel kabarma elde edin.',
  faqTitle: 'Sikca Sorulan Sorular',
  ui: {
    title: "Kabartici Asit Notrleyici",
    subtitle: "Pastanede mukemmel kabarma ve lezzet icin hassas stokiyometri",
    flourLabel: "Un Agirligi",
    addAcidLabel: "Asidik Malzeme Ekle",
    weightLabel: "Agirlik",
    removeButton: "Kaldir",
    bakingSodaNeeded: "Notrlestirilmis Karbonat",
    requiredBakingPowder: "Hedef Kabarma",
    providedBakingPowderEquivalent: "Karbonatin Sagladigi Kabarma",
    boosterBakingPowder: "Ek Kabartma Tozu Destegi",
    resultsTitle: "Hesaplanan Kabarticilar",
    statusBalanced: "Dengeli",
    statusAcidic: "Asit Fazlasi",
    statusAlkaline: "Baz Fazlasi",
    gramsUnit: "g",
    ouncesUnit: "oz",
    teaspoonsUnit: "tk",
    scaleBalanceTitle: "Sanal pH Dengesi",
    acidListTitle: "Asidik Malzemeler",
    unitLabel: "Olcu Sistemi",
    metricUnit: "Metrik (g)",
    imperialUnit: "Ingiliz (oz)",
    acid_buttermilk: "Yayikalti",
    acid_yogurt: "Yogurt",
    acid_sour_cream: "Eksi Krema",
    acid_honey: "Bal",
    acid_molasses: "Pekmez",
    acid_cocoa: "Dogal Kakao Tozu",
    acid_lemon_juice: "Limon Suyu",
    acid_vinegar: "Sirke",
    stoichiometryBadge: "pH Stokiyometrisi",
    simulateSodaLabel: "Eklenen Karbonatı Simüle Et",
    autoBalanceBtn: "Otomatik Dengele",
    sodaAddedLabel: "Eklenen Karbonat"
  },
  faq,
  howTo,
  seo: [
    {
      type: 'summary',
      title: 'Mukemmel Kabarma Icin Onemli Noktalar',
      items: [
        'Karbonatin aktiflesmesi icin asit gerekir; asitsiz pisirdiginiz urun sabunumsu ve metalik tadi olur',
        'Kabartma tozu kendiliginden notrlesir ve destek olarak ekstra kabarma gucu saglar',
        'Dogru kabarma icin standart hedef, un agirliginin %4\'u kadar kabartma tozu esdegeridir',
        'Asidik malzemelerinizi dogru miktarda karbonatla eslestirmek icin asagidaki notrlestirme tablosunu kullanin'
      ]
    },
    {
      type: 'title',
      text: 'Kimyasal Kabarticilarin Kimyasi',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Kimyasal kabarma, hamur matrisinde sikisip kalarak pisirme sirasinda yukselmesini saglayan karbondioksit (CO2) gazi uretmek icin <strong>asit-baz notrlestirme reaksiyonlarina</strong> dayanir. Sodyum bikarbonat (karbonat) ile asidik malzemeler arasindaki dogru orani tutturmak cok onemlidir. <strong>Fazla karbonat</strong>, sabunumsu ve metalik tat ile sari renk bozulmasina yol acan, reaksiyona girmemis alkalin kalintiya neden olur. <strong>Fazla asit</strong> ise yogun, yassi ve az hacimli bir pisirme sonucu dogurabilir.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '3-4x',
          label: 'Karbonat kabartma tozundan daha gucludur',
          icon: 'mdi:flash'
        },
        {
          value: '4%',
          label: 'Hedef kabarma (un agirliginin yuzdesi)',
          icon: 'mdi:target'
        },
        {
          value: '1/4 tk',
          label: '120g yayikalti/yogurt basina karbonat',
          icon: 'mdi:spoon-sugar'
        },
        {
          value: '0.0125',
          label: 'Notrlestirme orani (sut asitleri)',
          icon: 'mdi:scale-balance'
        }
      ]
    },
    {
      type: 'title',
      text: 'Karbonat ve Kabartma Tozu Karsilastirmasi',
      level: 3
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Karbonat',
          icon: 'mdi:flask-outline',
          description: 'Saf sodyum bikarbonat (NaHCO3). Aktiflesmek ve CO2 uretmek icin harici asit gerektiren guclu bir alkalin baz.',
          points: [
            'Kabartma tozundan 3-4 kat daha gucludur',
            'Reaksiyon icin asit (yayikalti, yogurt, limon suyu) gerekir',
            'Fazlasi sabunumsu, metalik tat ve sari ige neden olur',
            'pH\'i yukseltir; kurabiyelerde Maillard kizarmasini artirir',
            'Tek etkili: karistirinca hemen CO2 salar'
          ]
        },
        {
          title: 'Kabartma Tozu',
          icon: 'mdi:flask-round-bottom-outline',
          description: 'Karbonat + kuru asit tuzlari + nisasta dolgusu iceren eksiksiz bir kabartma sistemi. Kendiliginden notrlesir ve guvenilirdir.',
          highlight: true,
          points: [
            'Kendi asidini icerir (monokalsiyum fosfat, SAP)',
            'Cift etkili: karistirinca VE isitinca CO2 salar',
            'Metalik tat birakmaz; pH dengesi zaten saglanmistir',
            'Gram basina daha zayiftir; karbonat gucune esdeger olmasi icin 3-4 kat fazla kullanin',
            'Karbonat tek basina tum unu kaldiramadiginda destek olarak idealdir'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Asidik Malzeme', 'Standart Agirlik', 'Notrlestirilmis Karbonat', 'Notrlestirme Orani'],
      rows: [
        ['Yayikalti / Yogurt / Eksi Krema', '120g (1/2 Su Bardagi)', '1.5g (1/4 tk)', '0.0125'],
        ['Limon Suyu / Sirke', '15g (1 yk)', '1.5g (1/4 tk)', '0.1000'],
        ['Dogal Kakao Tozu', '80g (1 Su Bardagi)', '3.0g (1/2 tk)', '0.0375'],
        ['Bal', '340g (1 Su Bardagi)', '3.0g (1/2 tk)', '0.0088'],
        ['Pekmez', '328g (1 Su Bardagi)', '3.0g (1/2 tk)', '0.0091']
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Sorun Giderme: Kabarmaniz Dengesiz mi?',
      badge: 'Hizli Kontrol',
      html: '<strong>Kekiniz coktu ise:</strong> Cok fazla asit veya genel olarak cok az kabartici; yapi oturmadan CO2 kacti.<br/><br/><strong>Kekiniz yogun ve yassi ise:</strong> Notrlestirmek icin yeterli karbonat olmadan fazla asit veya un agirligina gore yetersiz toplam kabarma gucu.<br/><br/><strong>Kekiniz sabunumsu veya metalik tadiyorsa:</strong> Reaksiyona girmemis fazla karbonat; daha fazla asidik malzeme ekleyin veya karbonati azaltin.<br/><br/><strong>Kekinizde sari lekeler varsa:</strong> Cozunmemis ve reaksiyona girmemis karbonat topaklarinin klasik belirtisi; bir dahaki sefere karbonati unla birlikte eleyin.'
    },
    {
      type: 'title',
      text: 'Kabarticilar Nasil Dengelenir ve Metalik Tat Nasil Onlenir',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'En iyi lezzet ve kabarma icin bu sureci izleyin: <strong>Once</strong>, yukaridaki tabloyu kullanarak hamurunuzun asidik bilesenlerini tamamen notrlestirmek icin gereken karbonat miktarini belirleyin. <strong>Ardindan</strong>, bu karbonati kabartma tozu esdegerine cevirin (4 ile carpin) ve ununuz icin gereken toplam kabarma gucuyle karsilastirin; genellikle <strong>un agirliginin %4\'u</strong> kadar kabartma tozu esdegeri gerekir. <strong>Eksik varsa</strong>, kalan kabarma gucunu destek olarak notr kabartma tozu seklinde ekleyin. Hesaplayicimiz tum bunlari otomatik olarak yapar.'
    },
    {
      type: 'list',
      icon: 'mdi:alert-circle-outline',
      items: [
        'Karbonati asla 1:1 kabartma tozuyla degistirmeyin; karbonat 3-4 kat daha gucludur ve asit gerektirir',
        'Aci topaklari onlemek icin karbonati her zaman kuru malzemelerle birlikte eleyin',
        'Dutch usulu kakao ASIDIK DEGILDIR; asit kaynagi olarak kakaoya guveniyorsaniz dogal kakao tozu kullanin',
        'Bal ve pekmez zayif asidiktir; gram basina limon suyundan cok daha az karbonat gerektirirler',
        'Karistirdiktan sonra hizli calisin: kimyasal kabartici siviyla temas eder etmez reaksiyona baslar'
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Notrlestirme Orani',
          definition: 'Belirli bir agirliktaki asidik malzemeyi tamamen notrlestirmek icin gereken karbonat orani. Daha dusuk oranlar, malzemenin gram basina daha az asidik oldugu anlamina gelir.'
        },
        {
          term: 'Kabarma Gucu',
          definition: 'Bir kabartici maddenin uretebilecegi toplam CO2 gazi miktari. Kabartma tozu esdegeri cinsinden olculur; kek ve muffinler icin standart hedef un agirliginin %4\'udur.'
        },
        {
          term: 'Cift Etkili Kabartma Tozu',
          definition: 'CO2\'yi iki asamada serbest birakan kabartma tozu: once oda sicakliginda siviyla karistiginda, ardindan firin isisina maruz kaldiginda. Daha guvenilir bir kabarma saglar.'
        },
        {
          term: 'Maillard Reaksiyonu',
          definition: 'Amino asitler ile indirgen sekerler arasinda gerceklesen, gidalari kizartan ve karmasik lezzetler olusturan kimyasal bir reaksiyondur. Fazla karbonatin yukselttigi pH ile guclenir; kurabiyelerde istenir, narin keklerde istenmez.'
        },
        {
          term: 'pH Dengesi',
          definition: 'Hamurun asiditesinin veya alkaliliginin olcusu. Notr bir pH (yaklasik 7), tum karbonatin tum asitle reaksiyona girdigini gosterir. Hafif alkalin kizarmayi destekler; asidik ise yumusakligi.'
        }
      ]
    },
    {
      type: 'tip',
      html: '<strong>Kizarma ve pH:</strong> Tam notrlestirme lezzet icin kilit oneme sahip olsa da, hafif alkalin bir hamur (kucuk bir karbonat fazlasindan dolayi) cikolatali keklerde ve kurabiyelerde arzu edilebilir. Yuksek pH, Maillard kizarmasini artirarak daha koyu renkler, daha citir kenarlar ve daha derin karamelize notalar olusturur. Narin vanilyali keklerde, saf ve temiz bir tadi korumak icin tam notrlestirmeyi hedefleyin.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
