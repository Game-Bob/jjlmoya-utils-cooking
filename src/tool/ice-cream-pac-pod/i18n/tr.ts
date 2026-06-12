import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Dondurma PAC POD Hesap Makinesi Kriyo Formulasyon Rehberi";
const description = "Dondurma icin anti-dondurucu gucu ve tatlandirici gucu hesaplayin. Hassas seker profilleri, kati madde yuzdesi ve servis sicakliklari olusturun.";
const faq = [
  {
    question: "Dondurma formulasyonunda PAC nedir?",
    answer: "PAC, Potere Anticongelante anlamina gelir ve anti-dondurucu gucu temsil eder. Belirli bir servis sicakliginda ne kadar suyun donmus kaldigini belirleyerek dondurmanin fiziksel sertligini kontrol eder."
  },
  {
    question: "POD nedir ve neden onemlidir?",
    answer: "POD, Potere Dolcificante anlamina gelir ve goreceli tatlandirici gucu temsil eder. Temel degeri 100 olan sakkaroza (sofra sekeri) kiyasla tatliilgi olcer."
  },
  {
    question: "Dondurmada neden birden fazla sekeri dengelemeliyiz?",
    answer: "Farkli sekerler benzersiz PAC ve POD ozelliklerine sahiptir. Ornegin, dekstroz yuksek anti-dondurucu guc ve orta duzeyde tatliilk sunarken, sakkaroz standart govde ve tatliilk saglar. Bunlari karistirmak, urunu asiri tatli yapmadan kremamsilik uzerinde kontrol saglar."
  },
  {
    question: "Dondurma icin optimum kati madde yuzdesi nedir?",
    answer: "Toplam kati madde yuzdesi genellikle %36 ile %42 arasinda degisir. Bu araligin altindaki kati madde yuzdesi buzlu dokulara yol acarken, ustundeki bir yuzde kumluluga veya agir agiz hissine neden olabilir."
  }
];

const howTo = [
  {
    name: "Temel karisimi ve servis sicakligini ayarlayin",
    text: "Temel sivi karisiminizin agirligini tanimlayin ve dondurmayi servis etmeyi planladiginiz hedef servis sicakligini girin."
  },
  {
    name: "Seker miktarlarini girin",
    text: "Sakkaroz, dekstroz, glukoz, invert seker ve trehaloz gibi farkli sekerler icin kaydiricilari ayarlayarak tarifinizi olusturun."
  },
  {
    name: "PAC ve POD degerlerini analiz edin",
    text: "Hesaplanan PAC ve POD degerlerini, hedef sicakliginiz icin onerilen hedef degerlerle karsilastirin."
  },
  {
    name: "Kati madde oranini ve kaşiklanabilirliği doğrulayin",
    text: "Toplam kati madde yuzdesinin optimum bolgede oldugundan emin olun ve nihai dokuyu tahmin etmek icin kasiklanabilirlik gostergesini kontrol edin."
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
  slug: 'dondurma-pac-pod',
  title: 'Dondurma PAC POD Hesap Makinesi',
  description: 'Dondurma icin anti-dondurucu gucu ve tatlandirici gucu hesaplayin. Hassas seker profilleri, kati madde yuzdesi ve servis sicakliklari olusturun.',
  faqTitle: 'Sikca Sorulan Sorular',
  ui: {
    title: "Dondurma Kriyo Hesap Makinesi",
    subtitle: "Molekuler gastronomi icin hassas kriyo formulasyon paneli",
    unitLabel: "Birim Sistemi",
    metricUnit: "Metrik (gram)",
    imperialUnit: "Imperial (ons)",
    baseWeightLabel: "Temel Karisim Agirligi",
    targetTempLabel: "Servis Sicakligi",
    sucroseLabel: "Sakkaroz",
    dextroseLabel: "Dekstroz",
    glucoseLabel: "Glukoz DE40",
    invertedLabel: "Invert Seker",
    trehaloseLabel: "Trehaloz",
    pacLabel: "Anti-dondurucu Guc (PAC)",
    podLabel: "Tatlandirici Guc (POD)",
    solidsLabel: "Toplam Kati Madde",
    targetPacLabel: "Hedef PAC",
    scoopabilityLabel: "Kasiklanabilirlik Durumu",
    stoneState: "Tas Gibi Sert",
    creamyState: "Mukemmel Kremamsilik",
    soupState: "Eriyen Corba",
    stoneDesc: "Anti-dondurucu guc bu sicaklik icin cok dusuk. Karisim tas gibi donacak.",
    creamyDesc: "PAC dengesi optimal. Dondurma kasiklanabilir ve kremamsi olacak.",
    soupDesc: "Anti-dondurucu guc cok yuksek. Dondurma hizla eriyecek ve sivi kalacak.",
    gLabel: "g",
    ozLabel: "oz",
    cLabel: "C",
    fLabel: "F",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Dondurma Kriyo Formulasyonunun Bilimsel Ilkeleri ve Cam Gecis Faz Kontrolu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dondurma, hava hucreleri, yag globulleri, buz kristalleri ve donmamis konsantre serum fazindan olusan karmasik bir cok fazli termodinamik emulsiyondur. Mukemmel kremamsilik ve kasiklanabilirlik elde etmek, karisimdaki suyun donma noktasi depresyonunun dikkatli kontrolunu gerektirir. Sicaklik donma noktasinin altina dustukce su buza kristallesmeye baslar. Kalan sivi serumdaki cozunmus maddelerin konsantrasyonu artar, bu da donma noktasini daha da dusurur. Donmus su kristalleri ile donmamis surup fazi arasindaki denge, nihai urunun sertligini ve puruzsuzlugunu belirler.',
    },
    {
      type: 'title',
      text: 'PAC Anlamak: Anti-dondurucu Guc ve Depresyon Matematigi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC veya Potere Anticongelante, bir cozunurun sakkaroza gore anti-dondurucu gucunu temsil eder. Sakkaroz, PAC degeri 100 olan referans standart olarak belirlenmistir. Mekanizma koligatif ozellikler tarafindan yonettilir, yani donma noktasi depresyonu, kutuphanesine degil, suda cozunmus aktif molekul sayisina baglidir. Dekstroz (molekul agirligi 180 g/mol) gibi monosakkaritler, gram basina sakkaroz (molekul agirligi 342 g/mol) gibi disakkaritlerin yaklasik iki kati kadar molekul saglayarak 190 PAC degeri uretir. Daha yuksek PAC degerleri, belirli bir sicaklikta daha fazla suyun sivi kalması anlamina gelir ve dondurmanin tas gibi donmasini onler.',
    },
    {
      type: 'title',
      text: 'POD Anlamak: Tatlandirici Guc ve Duyusal Denge',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'POD veya Potere Dolcificante, sakkaroza kiyasla goreceli tatliilgi olcen bir olcuttur (temel 100). Yuksek kaliteli dondurmalar veya gelatolar formule edilirken, tatliilgi dengelemek yapisal saglamlik kadar onemlidir. Bir formule edici, donma noktasini dusurmek (PAC artirmak) icin yalnizca sakkaroz kullanirsa, dondurma istenen yumusakliga ulasmadan once bunaltici derecede tatli hale gelir. Bu sinirlamayi asmak icin molekuler gastronomi, dekstroz (POD 70), trehaloz (POD 45) veya atomize glukoz DE40 (POD 40) gibi sekerlerden yararlanir. Bunlar, damagi bunaltmadan donma egrisinin ozel olarak yapilandirilmasina izin verir.',
    },
    {
      type: 'title',
      text: 'Yaygin Kriyo Formulasyon Sekerlerinin Karsilastirmali Veritabani',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Seker Turu', 'Nispi PAC', 'Nispi POD', 'Kati Madde Icerigi (%)', 'Mutfak Kullanimi'],
      rows: [
        ['Sakkaroz', '100', '100', '%100', 'Standart govde, temiz tatli profil, standart temel'],
        ['Dekstroz', '190', '70', '%100', 'Donma noktasini dusurur, yumusakligi artirir, tatliilgi azaltir'],
        ['Glukoz DE40', '90', '40', '%95', 'Govde ekler, yeniden kristallesmeyi onler, viskoziteyi artirir'],
        ['Invert Seker', '190', '130', '%70', 'Yumusaklik ekler, nem tutucu ozellikler, meyve aromalarini guclendirir'],
        ['Trehaloz', '100', '45', '%90', 'Dusuk tatli govde maddesi, proteinleri korur, temiz bitis'],
      ],
    },
    {
      type: 'title',
      text: 'Toplam Kati Madde Orani ve Yapisal Emulsiyon Stabilitesi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Toplam kati maddeler, formulasyondaki yaglar, yagsiz sut kati maddeleri, stabilizatorler, emulgaorler ve sekerler dahil tum susuz elementleri icerir. Optimum bir dondurma karisimi, %36 ile %42 arasinda toplam kati madde tutar. Kati maddeler cok dusukse, yuksek su icerigi buyuk buz kristali buyumesine ve kaba bir dokuya yol acar. Kati maddeler cok yuksekse, viskozite asiri artar, bu da agir bir agiz hissine ve laktoz kristallesmesi nedeniyle olasi kumluluga neden olur.',
    },
    {
      type: 'title',
      text: 'Kriyo Formulasyon Basarisi icin Pratik Adimlar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Teshir dolabinizin hedef servis sicakligini belirleyin. Gelatolar tipik olarak eksi 12 santigrat derecede servis edilirken, endustriyel dondurmalar eksi 18 santigrat derecede daha soguk servis edilir.',
        'Standart sicaklik formulunu kullanarak hedef PAC degerini hesaplayin. Eksi 12 santigrat derece icin hedef PAC yaklasik 216dir.',
        'Bir seker karisimi secin. Standart tatliilk icin sakkaroz, donma noktasini dusurmek icin dekstroz ve govde ve doku icin glukozu birlestirin.',
        'Optimal havalandirma ve dilde puruzsuz bir erime profili saglamak icin toplam kati maddelerin guvenli %36 ila %42 araliginda oldugunu dogrulayin.'
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
