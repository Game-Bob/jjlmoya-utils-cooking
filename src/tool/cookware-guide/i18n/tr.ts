import type { ToolLocaleContent } from '../../../types';

const title = "Akıllı Tencere Seçici: Mutfak Gereçleri Rehberi";
const description = "Pişirme tarzınıza göre en iyi tava veya tencereyi seçmeniz için etkileşimli rehber. Döküm vs Çelik vs Teflon. Mükemmel aracınızı bulun.";
const faq = [
  {
    question: 'Günlük kullanım için en iyi tava hangisidir?',
    answer: 'Çoğu kişi için yüksek kaliteli paslanmaz çelik bir tava veya iyi işlenmiş (seasoned) bir dökme demir tava en iyisidir. Çelik çok yönlü ve ömürlüdür, döküm ise kimyasal içermeyen doğal bir yapışmazlık sunar.',
  },
  {
    question: 'Paslanmaz çelikte yemek neden yapışır?',
    answer: 'Genellikle yetersiz ısıdan veya yemeğin çok erken konulmasından kaynaklanır. "Leidenfrost etkisini" deneyin: Bir damla su tava üzerinde inci gibi yuvarlanana kadar tavayı ısıtın. O zaman hazırdır.',
  },
  {
    question: 'Tavamın güvenli olup olmadığını nasıl anlarım?',
    answer: '"PFOA İçermez" etiketlerine bakın. Döküm, karbon çelik ve paslanmaz çelik tavalar, zamanla bozulan kaplamalara sahip olmadıkları için en güvenli ve en dayanıklı seçeneklerdir.',
  },
  {
    question: 'Bir tavayı "işlemek" (seasoning) ne demektir?',
    answer: 'Metal (dökme demir veya karbon çelik) üzerinde polimerize yağ tabakası oluşturma işlemidir. Bu, paslanmaya karşı korur ve her kullanımda iyileşen doğal bir yapışmaz yüzey oluşturur.',
  },
  {
    question: 'İyi bir tava için ne kadar harcamalıyım?',
    answer: '2-3 adet orta-yüksek kaliteli tava seti (paslanmaz çelik veya döküm) 20 yıldan fazla dayanabilir. 2 yıl dayanan 5 ucuz tava yerine, kaliteli bir tavaya bir kez yatırım yapmak daha iyidir. Nicelikten ziyade nitelik.',
  },
];
const howTo = [
  {
    name: 'Pişirme tarzınızı seçin',
    text: 'Yüksek ateş (mühürleme), hassas (yumurta), tencere yemekleri (yavaş pişirme) veya hızlı mutfak arasında seçim yapın. Her tarzın farklı gereksinimleri vardır.',
  },
  {
    name: 'İdeal malzemeyi seçin',
    text: 'Tarzınıza bağlı olarak araç size en iyi malzemeyi önerecektir: döküm, paslanmaz çelik, bakır veya teflon.',
  },
  {
    name: 'Özellikleri inceleyin',
    text: 'Avantajları, dezavantajları, bakım ve dayanıklılığı anlayın. Ardından bütçenize ve ihtiyaçlarınıza uygun spesifik tavayı seçin.',
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
  slug: 'tava-rehberi',
  title: 'Akıllı Tencere Seçici: Mutfak Gereçleri Rehberi',
  description: 'Pişirme tarzınıza göre en iyi tava veya tencereyi seçmeniz için etkileşimli rehber. Döküm vs Çelik vs Teflon. Mükemmel aracınızı bulun.',
  faqTitle: 'Sıkça Sorulan Sorular',
  faq,
  bibliographyTitle: 'Kaynakça',
  bibliography: [
    {
      name: 'The Flavor Bible - Pairing, and Progress in Food',
      url: 'https://www.flavorprints.com/',
    },
    {
      name: 'On Food and Cooking - Harold McGee',
      url: 'https://www.foodscience.org/',
    },
    {
      name: 'Salt Fat Acid Heat - Samin Nosrat',
      url: 'https://www.saltfatacidheat.com/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Tava Malzemeleri: Bilim ve Uygulama',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tüm tavalar aynı değildir. Her malzemenin ısıyı nasıl dağıttığını, hangi sıcaklıklara dayandığını ve gıdayla nasıl etkileşime girdiğini etkileyen farklı termodinamik özellikleri vardır. Bu farkları anlamak, doğru aracı seçmenin anahtarıdır.',
    },
    {
      type: 'title',
      text: 'Dökme Demir: Klasik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Avantajlar:</strong> Mükemmel ısı tutma, eşit dağılım, doğal yapışmazlık (işlendiğinde), yüzyıllarca dayanır, zamanla iyileşir. <strong>Dezavantajlar:</strong> Ağırdır, bakım gerektirir, paslanabilir, ısınması uzun sürer, uzun süreli asidik pişirmeler için uygun değildir.',
    },
    {
      type: 'title',
      text: 'Paslanmaz Çelik: Çok Yönlü',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Avantajlar:</strong> Dayanıklıdır, bakım gerektirmez, asidik gıdalara (şarap, domates) uygundur, temizlemesi kolaydır, çok yönlüdür, nispeten ekonomiktir. <strong>Dezavantajlar:</strong> Doğal olarak yapışmaz değildir, teknik gerektirir (iyi ısıtma), ısı dağılımı eşit olmayabilir (çok katmanlı tabanlı olanlar daha iyidir).',
    },
    {
      type: 'title',
      text: 'Teflon/PTFE: Kullanışlı',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Avantajlar:</strong> Anında yapışmazlık, pişirme kolaylığı, temizleme kolaylığı, ekonomiktir. <strong>Dezavantajlar:</strong> Zamanla ve ısıyla bozulur, her 3-5 yılda bir değiştirilmesi gerekir, çok yüksek sıcaklıklarda (>260°C) güvenli değildir.',
    },
  ],
  ui: {
    cookingStyle: 'Genelde nasıl yemek yaparsınız?',
    material: 'Malzeme Türü',
    highHeat: 'Yüksek Ateş',
    sear: 'Mühürleme / Kızartma',
    delicate: 'Hassas',
    fry: 'Yumurta / Omlet',
    stew: 'Tencere Yemekleri',
    slowCook: 'Yavaş Pişirme',
    fast: 'Hızlı',
    quick: 'Hızlı Mutfak',
    recommendation: 'Öneri',
    characteristics: 'Özellikler',
    castIron: 'Dökme Demir',
    stainlessSteel: 'Paslanmaz Çelik',
    carbon: 'Karbon Çelik',
    copper: 'Bakır',
    nonstick: 'Yapışmaz (Teflon)',
    advantages: 'Avantajlar',
    disadvantages: 'Dezavantajlar',
    maintenance: 'Bakım',
    durability: 'Dayanıklılık',
    heatRetention: 'Isı Tutma',
    price: 'Fiyat',
    step1: 'Genelde nasıl yemek yaparsınız?',
    step2: 'Bakım Seviyesi',
    maintenanceLazy: 'Düşük / Yok',
    maintenanceLazyDesc: 'Yıkama zahmeti yok.',
    maintenanceCare: 'Orta',
    maintenanceCareDesc: 'Normal elde yıkama.',
    maintenanceRitual: 'Ritüel (Yüksek)',
    maintenanceRitualDesc: 'İşleme/yağlama sürecinden keyif alırım.',
    idealPan: 'İdeal Tavanız',
    selectOptions: 'Seçenekleri belirleyin',
    seeRecommendation: 'Önerinizi görmek için',
    pro: 'ARTISI',
    con: 'EKSİSİ',
    masterTip: 'Usta İpucu',
    defaultTip: 'Kızartma için çelik bir seçenek ile yumurta için yapışmaz bir seçeneği birleştirmek, her verimli mutfağın temelidir.',
    stainlessName: 'Paslanmaz Çelik',
    stainlessTag: 'Pro Çok Yönlü',
    stainlessPro: 'Ömürlüktür ve reaksiyona girmez. Mükemmel mühürleme.',
    stainlessCon: 'Yapışmaması için teknik (Isı ayarı) gerektirir.',
    stainlessTip: 'Leidenfrost etkisini kullanın: Bir damla su inci gibi yuvarlandığında tava hazırdır.',
    nonstickName: 'Yapışmaz',
    nonstickTag: 'Maksimum Konfor',
    nonstickPro: 'Hiçbir şey yapışmaz. Kolay temizlik.',
    nonstickCon: 'Ömrü kısadır (2-3 yıl). Yüksek ateşte kullanılmaz.',
    nonstickTip: 'Her zaman elde yıkayın ve ömrünü ikiye katlamak için tahta/silikon gereçler kullanın.',
    castironName: 'Dökme Demir',
    castironTag: 'Eskimeyen Klasik',
    castironPro: 'İnanılmaz ısı tutma. Ömürlük.',
    castironCon: 'Çok ağırdır. Düzenli yağlama gerektirir.',
    castironTip: 'Yavaş ısınır ama bir kez ısındığında tank gibidir. Biftekler için idealdir.',
    carbonName: 'Karbon Çelik',
    carbonTag: 'Ateş Üstünde Çeviklik',
    carbonPro: 'Çelik kadar hafif, döküm kadar performanslı.',
    carbonCon: 'Nemli bırakılırsa paslanır. Estetiği zamanla değişir.',
    carbonTip: 'Ne kadar kararır ve çirkinleşirse o kadar iyi çalışır. En iyi wokların sırrı budur.',
    enamelName: 'Emaye Döküm',
    enamelTag: 'Gurme Kalitesi',
    enamelPro: 'Yavaş pişirme için en iyisi. Harika estetik.',
    enamelCon: 'Çok pahalıdır. Emaye sert darbelere karşı kırılgandır.',
    enamelTip: 'Bitmek bilmeyen tencere yemekleri için mükemmeldir. Emaye sayesinde asidik (domates) gıdalar sorunsuz pişirilir.',
  },
  schemas: [faqSchema, howToSchema, appSchema],
};
