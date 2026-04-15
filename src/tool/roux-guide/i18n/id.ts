import type { ToolLocaleContent } from '../../../types';

const title = "Panduan Utama Roux dan Saus Dasar";
const description = "Kalkulator Roux interaktif. Pelajari cara membuat Bechamel, Velouté, dan Espagnole dengan proporsi yang tepat. Dasar dari masakan Prancis kelas atas.";
const faq = [
    {
      question: 'Apa itu Roux dan untuk apa fungsinya?',
      answer: 'Roux adalah campuran lemak (biasanya mentega) dan tepung yang dimasak dengan api kecil. Ini digunakan sebagai bahan pengental dasar untuk saus ibu Prancis seperti Bechamel atau Velouté.',
    },
    {
      question: 'Berapa proporsi ideal untuk Roux?',
      answer: 'Proporsi standarnya adalah 1:1 berdasarkan berat. Misalnya, 50g mentega dan 50g tepung. Campuran ini dapat mengentalkan sekitar 1 liter cairan tergantung pada kekentalan yang diinginkan.',
    },
    {
      question: 'Apa perbedaan antara jenis-jenis Roux?',
      answer: 'Roux putih dimasak selama 2-3 menit (Bechamel). Roux kuning/pirang 5-8 menit (Velouté). Roux cokelat hingga 15-20 menit (Espagnole). Semakin gelap warnanya, semakin terasa aroma kacang (nutty) tetapi daya pengentalnya berkurang.',
    },
    {
      question: 'Bagaimana cara menghindari gumpalan?',
      answer: 'Aturan emasnya adalah menggunakan suhu yang berlawanan: cairan dingin ke roux panas, atau cairan panas ke roux dingin. Tambahkan cairan sedikit demi sedikit dan kocok terus dengan pengocok kawat (whisk).',
    },
  ];
const howTo = [
  {
    name: 'Pilih jenis cairan',
    text: 'Pilih antara susu (Bechamel), kaldu terang (Velouté), kaldu gelap (Espagnole), atau tomat.',
  },
  {
    name: 'Tentukan kekentalan yang diinginkan',
    text: 'Dari sup/krim hingga adonan kroket. Kalkulator akan menyesuaikan rasio roux yang dibutuhkan secara otomatis.',
  },
  {
    name: 'Masukkan volume cairan',
    text: 'Tentukan berapa ml cairan yang perlu dikentalkan. Kalkulator akan memberi tahu Anda berapa banyak mentega dan tepung yang harus digunakan.',
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
  slug: 'panduan-roux',
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  faq,
  bibliographyTitle: 'Bibliografi',
  bibliography: [
    {
      name: 'Larousse Gastronomique',
      url: 'https://www.laroussecocina.com/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Panduan Ahli untuk Perhitungan Roux dan Saus Dasar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Roux</strong> adalah dasar struktural dari masakan klasik Prancis. Memahami hubungan antara tepung, mentega, dan cairan adalah perbedaan antara saus yang selembut beludru dan cairan yang menggumpal.',
    },
  ],
  ui: {
    baseLiquid: 'Cairan Dasar',
    volume: 'Volume',
    ml: 'ml',
    liquidType: 'Jenis Cairan',
    milk: 'Susu',
    lightStock: 'Kaldu Terang',
    darkStock: 'Kaldu Gelap',
    tomato: 'Tomat',
    sauceTexture: 'Kekentalan Saus',
    soup: 'Sup / Krim',
    normalSauce: 'Saus Normal',
    thick: 'Kental / Isian',
    croquette: 'Kroket / Adonan',
    rouxMix: 'Campuran Roux',
    butter: 'Mentega',
    flour: 'Tepung',
    instructions: 'Instruksi',
    sauceName: 'Jenis Saus',
    ratio: 'Rasio',
    chefTip: 'Tips Chef',
    white: 'Putih',
    blond: 'Kuning/Pirang',
    brown: 'Cokelat',
    beurreManied: 'Beurre Manié (Untuk koreksi di akhir)',
    recipeBechamel: "Bechamel",
    recipeVeloute: "Velouté",
    recipeEspagnole: "Espagnole",
    recipeTomato: "Saus Tomat",
    tipBechamel: "Gunakan susu dingin. Tambahkan secara bertahap atau sekaligus jika Anda mengocok dengan kuat.",
    tipVeloute: "Gunakan kaldu ayam atau ikan. Roux harus beraroma seperti biskuit.",
    tipEspagnole: "Roux harus berwarna seperti cokelat, tetapi jangan sampai gosong.",
    tipTomato: "Roux akan membantu memberikan tekstur yang lebih padat dan lembut pada hasil akhir saus tomat.",
    rouxWhiteLabel: "Roux Putih",
    rouxBlondLabel: "Roux Kuning/Pirang",
    rouxBrownLabel: "Roux Cokelat",
    descWhite: "Masak hanya sampai aroma tepung mentah hilang. Tanpa perubahan warna.",
    descBlond: "Cari warna kuning keemasan dan aroma kacang.",
    descBrown: "Api sangat kecil. Warna cokelat. Membutuhkan tambahan berat 10%.",
    timeWhite: "2-3 menit",
    timeBlond: "5-8 menit",
    timeBrown: "15-20 menit",
  },
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
