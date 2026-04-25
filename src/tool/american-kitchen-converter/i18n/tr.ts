import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Amerikan Mutfak Ölçü Dönüştürücü: Cup'tan Gram'a ve Sıcaklıklar";
const description = "Cup, yemek kaşığı ve Fahrenheit ölçülerini metrik sisteme dönüştürün. Amerikan tariflerini profesyonel hassasiyetle çözmek için pusulanız.";
const faq = [
  {
    question: "1 cup ile 250ml arasındaki fark nedir?",
    answer: "1 Amerikan cup ölçüsü 236,588ml'dir, 250ml değil. Pratik amaçlar için 240ml kullanıyoruz. Bu %4'lük fark küçük görünse de, macaron veya mus gibi hassas tariflerde sonucu etkileyebilir.",
  },
  {
    question: "Un neden her zaman aynı ağırlıkta gelmez?",
    answer: "Çünkü un zamanla ve taşıma sırasında sıkışır. Yeni elenmiş un, kilerde beklemiş un'dan daha hafiftir. Bu nedenle profesyonel fırıncılar her zaman hacim ölçmek yerine tartı kullanırlar.",
  },
  {
    question: "Tbsp ve tsp arasındaki fark nedir?",
    answer: "1 Tablespoon (Tbsp/Yemek kaşığı) = 15ml. 1 Teaspoon (tsp/Tatlı kaşığı) = 5ml. Bir yemek kaşığı, bir tatlı kaşığının 3 katıdır. Pastacılık tariflerinde, tsp ile ölçülen baharatlardaki hatalar yaygındır.",
  },
  {
    question: "US cup ile Imperial cup aynı mıdır?",
    answer: "Hayır. 1 US cup = 236ml, 1 Imperial cup (UK) = 284ml'dir. Aralarında %20 fark vardır. Çoğu Amerikan blogu US cup kullanır. Tarif belirtmemişse US olarak varsayabilirsiniz.",
  },
  {
    question: "Fırındaki 'gas 4' hangi sıcaklığa karşılık gelir?",
    answer: "Gas 4 = 180°C = 350°F. Bu İngiliz ölçeğidir. Mutfakta fırınınızdaki eşdeğer sayıyı ararız: bazıları gaz ayarı, bazıları elektronik derece kullanır.",
  },
];
const howTo = [
  {
    name: "Dönüştürme türünü seçin",
    text: "Cup'tan Gram'a, Yemek Kaşığı/Tatlı Kaşığından Gram'a veya Fahrenheit'tan Celsius'a arasında seçim yapın.",
  },
  {
    name: "Malzemeyi seçin",
    text: "Her gıdanın yoğunluğu farklıdır. Un, şeker, tereyağı: hepsi farklı ağırlıktadır.",
  },
  {
    name: "Miktarı girin",
    text: "Cup, kaşık veya derece sayısını yazın. Dönüştürücü eşdeğer değeri anında hesaplar.",
  },
  {
    name: "Tarifinizi ayarlayın",
    text: "Kesin dönüştürme ile artık Amerikan tarifini profesyonel hassasiyetle takip edebilirsiniz.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

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
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'amerikan-mutfak-olculeri-donusturucu',
  title: "Amerikan Mutfak Ölçü Dönüştürücü: Cup'tan Gram'a ve Sıcaklıklar",
  description: "Cup, yemek kaşığı ve Fahrenheit ölçülerini metrik sisteme dönüştürün. Amerikan tariflerini profesyonel hassasiyetle çözmek için pusulanız.",
  faqTitle: "Sıkça Sorulan Sorular",
  ui: {
    copied: 'Kopyalandı',
    noHistory: 'Geçmiş yok',
    load: 'Yükle',
    delete: 'Sil',
    tabCups: "Cup'tan Gram'a",
    tabSpoons: "Kaşıktan Gram'a",
    tabTemperatures: 'Sıcaklıklar',
    tabCupsAriaLabel: "Cup'tan Gram'a",
    tabSpoonsAriaLabel: "Kaşıktan Gram'a",
    tabTempsAriaLabel: 'Fırın Sıcaklıkları',
    stepSelectIngredient: 'Malzeme Seçin',
    stepHowManyCups: 'Kaç Cup?',
    stepSelectMeasure: 'Ölçü Birimi Seçin',
    stepQuantity: 'Miktar',
    stepOvenConversion: 'Fırın Dönüştürme',
    stepFrequentTemps: 'Sık Kullanılan Tarif Sıcaklıkları',
    cupFlour: 'Un',
    cupFlourSub: '120g / cup',
    cupWhiteSugar: 'Beyaz Şeker',
    cupWhiteSugarSub: '200g / cup',
    cupBrownSugar: 'Esmer Şeker',
    cupBrownSugarSub: '220g / cup',
    cupPowderSugar: 'Pudra Şekeri',
    cupPowderSugarSub: '115g / cup',
    cupButter: 'Tereyağı',
    cupButterSub: '227g / cup',
    cupCocoa: 'Kakao Tozu',
    cupCocoaSub: '85g / cup',
    cupLiquids: 'Sıvılar',
    cupLiquidsSub: '240g / cup',
    cupOats: 'Yulaf',
    cupOatsSub: '90g / cup',
    cupFlourAriaLabel: 'Un',
    cupWhiteSugarAriaLabel: 'Beyaz Şeker',
    cupBrownSugarAriaLabel: 'Esmer Şeker',
    cupPowderSugarAriaLabel: 'Pudra Şekeri',
    cupButterAriaLabel: 'Tereyağı',
    cupCocoaAriaLabel: 'Kakao',
    cupLiquidsAriaLabel: 'Sıvı',
    cupOatsAriaLabel: 'Yulaf',
    stepperMinus: 'Çıkar',
    stepperPlus: 'Ekle',
    cupsAmountLabel: 'Cup Miktarı',
    spoonQuantityLabel: 'Miktar',
    cupQuick1_4: '1/4 Cup',
    cupQuick1_3: '1/3 Cup',
    cupQuick1_2: '1/2 Cup',
    cupQuick1: '1 Cup',
    unitGrams: 'Gram',
    unitGramsML: 'Gram / Mililitre',
    spoonMeasureLabel: 'Ölçü Birimi Seçin',
    spoonTablespoon: 'Yemek Kaşığı (Tbsp)',
    spoonTeaspoon: 'Tatlı Kaşığı (tsp)',
    spoonTablespoonAriaLabel: 'Yemek kaşığı',
    spoonTeaspoonAriaLabel: 'Tatlı kaşığı',
    spoonSelectIngredient: 'Malzeme Seçin',
    spoonLeavening: 'Kabartıcı',
    spoonLeaveningSub: 'Kabartma Tozu',
    spoonSalt: 'İnce Tuz',
    spoonSaltSub: 'Mineral',
    spoonSugar: 'Beyaz Şeker',
    spoonSugarSub: 'Toz Şeker',
    spoonLiquids: 'Sıvılar',
    spoonLiquidsSub: 'Su, Yağ',
    spoonLeavingAriaLabel: 'Kabartma Tozu',
    spoonSaltAriaLabel: 'Tuz',
    spoonSugarAriaLabel: 'Beyaz Şeker',
    spoonLiquidsAriaLabel: 'Sıvı',
    spoonQuick1_4: '1/4',
    spoonQuick1_2: '1/2',
    spoonQuick1: '1',
    spoonQuick2: '2',
    tempFahrenheit: 'Fahrenheit (°F)',
    tempCelsius: 'Celsius (°C)',
    tempFahrenheitAriaLabel: 'Fahrenheit',
    tempCelsiusAriaLabel: 'Celsius',
    tempPreset275: '275°F',
    tempPreset275Desc: '135°C - Kurutma',
    tempPreset275AriaLabel: '275 Fahrenheit Ayarla',
    tempPreset325: '325°F',
    tempPreset325Desc: '165°C - Yoğun kekler',
    tempPreset325AriaLabel: '325 Fahrenheit Ayarla',
    tempPreset350: '350°F',
    tempPreset350Desc: '175°C - Standart pastalar',
    tempPreset350AriaLabel: '350 Fahrenheit Ayarla',
    tempPreset400: '400°F',
    tempPreset400Desc: '200°C - Ekmekler / Turtalar',
    tempPreset400AriaLabel: '400 Fahrenheit Ayarla',
    tempPreset425: '425°F',
    tempPreset425Desc: '220°C - Pizza / Milföy',
    tempPreset425AriaLabel: '425 Fahrenheit Ayarla',
  },
  seo: [
    {
      type: 'title',
      text: 'Amerikan Mutfak Ölçüleri Dönüştürme Rehberi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Cup\'tan gram\'a</strong> veya <strong>Fahrenheit\'tan Celsius\'a</strong> dönüştürme yapmak, uluslararası tariflerde ustalaşmanın ilk adımıdır. Amerikan mutfağı hacim ölçüsüne dayanır, bu da un gibi kuru malzemelerde %25\'e varan değişkenliklere yol açar.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '120g',
          label: '1 Cup Un',
          icon: 'mdi:grain',
        },
        {
          value: '227g',
          label: 'Bir Paket Tereyağı (Stick)',
          icon: 'mdi:cube-outline',
        },
        {
          value: '175°C',
          label: '350°F Karşılığı',
          icon: 'mdi:thermometer',
        },
        {
          value: '240ml',
          label: '1 Cup Hacmi',
          icon: 'mdi:water-percent',
        },
      ],
    },
    {
      type: 'title',
      text: 'Hacim ve Ağırlık Arasındaki Kritik Farklar',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Hacimle Ölçme (Cups)',
          icon: 'mdi:cup-water',
          description: 'ABD ev tariflerinde kullanılır. Malzemenin kapladığı alanı ölçer.',
          points: [
            'Sıkıştırmaya çok bağımlıdır',
            'Un öçümünde %20-30 hata payı yaygındır',
            'Farklı marka cup ölçüleri arasında tutarsızlık olabilir',
            'Daha fazla hassasiyet için önceden elemeyi gerektirir',
          ],
        },
        {
          title: 'Ağırlıkla Ölçme (Gram)',
          icon: 'mdi:scale-balance',
          description: 'Profesyonel pastacılık ve Avrupa standardıdır. Mutlak hassasiyet sağlar.',
          highlight: true,
          points: [
            'Her zaman +/- 1g hassasiyet',
            'Tutarlı ve tekrarlanabilir sonuçlar',
            'Daha az bulaşık (tek bir kap)',
            'Matematiksel ölçeklendirmeyi kolaylaştırır',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Yaygın Malzeme Karşılıkları',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Malzeme', '1 Cup (Hacim)', 'Gram (Ağırlık)', 'Yoğunluk'],
      rows: [
        ['Buğday Unu', '1 Cup', '120g', 'Düşük'],
        ['Beyaz Şeker', '1 Cup', '200g', 'Orta'],
        ['Esmer Şeker', '1 Cup', '220g (sıkıştırılmış)', 'Yüksek'],
        ['Tereyağı', '1 Cup (2 stick)', '227g', 'Yüksek'],
        ['Kakao Tozu', '1 Cup', '85g', 'Çok Düşük'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Kekiniz Kuru mu Çıktı?',
      html: 'Cup kullanırken yapılan en yaygın hata, ölçü kabını doğrudan un çuvalına daldırmaktır. Bu, unu sıkıştırır ve her cup için sisteme 40 grama kadar fazladan un eklemenize neden olabilir. Çözüm, hesaplayıcımızı kullanarak <strong>her zaman grama dönüştürmektir</strong>.',
    },
    {
      type: 'title',
      text: 'Amerikan Birimleri Sözlüğü',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cup (Kap)',
          definition: 'Yaklaşık 240ml\'ye eşdeğer hacim birimi. Amerikan mutfağının temelidir.',
        },
        {
          term: 'Tbsp (Tablespoon)',
          definition: 'Yemek kaşığı, 15ml veya 3 tatlı kaşığına eşdeğerdir.',
        },
        {
          term: 'tsp (Teaspoon)',
          definition: 'Tatlı kaşığı, 5ml\'ye eşdeğerdir. Kabartma tozları ve tuz için kritiktir.',
        },
        {
          term: 'Stick of Butter',
          definition: 'ABD\'de yaygın olan ve tam olarak 113.5g (yarım cup) ağırlığındaki tereyağı formatı.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Kaşık Hilesi',
      html: 'Tartınız yoksa ve MUTLAKA cup kullanmanız gerekiyorsa, kabı kaşıkla sıkıştırmadan doldurun ve bir bıçakla üzerini düzleyin. Bu, kabı daldırmaktan çok daha isabetlidir.',
    },
    {
      type: 'paragraph',
      html: 'Profesyonel bir dönüştürücü kullanmak, yabancı tariflerin yarattığı hayal kırıklığını mükemmel bir pişirme başarısına dönüştürür.',
    },
  ],
  faq: [
    {
      question: "1 cup ile 250ml arasındaki fark nedir?",
      answer: "1 Amerikan cup ölçüsü 236,588ml'dir, 250ml değil. Pratik amaçlar için 240ml kullanıyoruz. Bu %4'lük fark küçük görünse de, macaron veya mus gibi hassas tariflerde sonucu etkileyebilir.",
    },
    {
      question: "Un neden her zaman aynı ağırlıkta gelmez?",
      answer: "Çünkü un zamanla ve taşıma sırasında sıkışır. Yeni elenmiş un, kilerde beklemiş un'dan daha hafiftir. Bu nedenle profesyonel fırıncılar her zaman hacim ölçmek yerine tartı kullanırlar.",
    },
    {
      question: "Tbsp ve tsp arasındaki fark nedir?",
      answer: "1 Tablespoon (Tbsp/Yemek kaşığı) = 15ml. 1 Teaspoon (tsp/Tatlı kaşığı) = 5ml. Bir yemek kaşığı, bir tatlı kaşığının 3 katıdır. Pastacılık tariflerinde, tsp ile ölçülen baharatlardaki hatalar yaygındır.",
    },
    {
      question: "US cup ile Imperial cup aynı mıdır?",
      answer: "Hayır. 1 US cup = 236ml, 1 Imperial cup (UK) = 284ml'dir. Aralarında %20 fark vardır. Çoğu Amerikan blogu US cup kullanır. Tarif belirtmemişse US olarak varsayabilirsiniz.",
    },
    {
      question: "Fırındaki 'gas 4' hangi sıcaklığa karşılık gelir?",
      answer: "Gas 4 = 180°C = 350°F. Bu İngiliz ölçeğidir. Mutfakta fırınınızdaki eşdeğer sayıyı ararız: bazıları gaz ayarı, bazıları elektronik derece kullanır.",
    },
  ],
  howTo: [
    {
      name: "Dönüştürme türünü seçin",
      text: "Cup'tan Gram'a, Yemek Kaşığı/Tatlı Kaşığından Gram'a veya Fahrenheit'tan Celsius'a arasında seçim yapın.",
    },
    {
      name: "Malzemeyi seçin",
      text: "Her gıdanın yoğunluğu farklıdır. Un, şeker, tereyağı: hepsi farklı ağırlıktadır.",
    },
    {
      name: "Miktarı girin",
      text: "Cup, kaşık veya derece sayısını yazın. Dönüştürücü eşdeğer değeri anında hesaplar.",
    },
    {
      name: "Tarifinizi ayarlayın",
      text: "Kesin dönüştürme ile artık Amerikan tarifini profesyonel hassasiyetle takip edebilirsiniz.",
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
