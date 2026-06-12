import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkulator Mandi Sferifikasi Panduan Gastronomi Molekuler Presisi";
const description = "Hitung rasio eksak natrium alginat dan kalsium laktat untuk sferifikasi langsung dan terbalik. Koreksi viskositas dan keasaman dengan xanthan dan sitrat.";

const faq = [
  {
    question: "Apa perbedaan antara sferifikasi langsung dan terbalik?",
    answer: "Sferifikasi langsung menambahkan natrium alginat ke basis beraroma dan meneteskannya ke dalam kalsium bath, menciptakan membran tipis yang terus mengeras ke dalam. Sferifikasi terbalik menambahkan kalsium ke basis dan meneteskannya ke dalam alginat bath, menciptakan membran yang tumbuh ke luar, menghentikan proses pengerasan saat dibilas."
  },
  {
    question: "Mengapa bola saya menjadi pipih atau tidak tenggelam?",
    answer: "Jika cairan basis beraroma kurang padat dibandingkan natrium alginat bath, ia akan mengapung alih-alih membentuk bola. Menambahkan sedikit xanthan gum meningkatkan viskositas basis, memungkinkannya tenggelam dan membentuk bola sempurna."
  },
  {
    question: "Apa fungsi natrium sitrat dalam sferifikasi?",
    answer: "Natrium sitrat adalah sekuestran yang mengikat ion kalsium dan menaikkan pH. Jika cairan basis sangat asam (pH di bawah 4,5) atau mengandung kalsium, natrium alginat akan mengeras sebelum waktunya. Menambahkan sitrat menetralkan keasaman ini."
  },
  {
    question: "Bisakah saya menggunakan air apa pun untuk kalsium bath?",
    answer: "Air keran dengan kandungan mineral tinggi dapat menyebabkan natrium alginat menggumpal atau mengeras sebelum waktunya. Sebaiknya gunakan air suling atau air kemasan rendah kalsium."
  }
];

const howTo = [
  {
    name: "Pilih metode sferifikasi",
    text: "Pilih Langsung untuk pengerasan tipis dan segera, atau Terbalik untuk cairan yang mengandung alkohol, susu, atau kalsium."
  },
  {
    name: "Masukkan berat cairan",
    text: "Masukkan berat cairan basis beraroma dan bath air dalam satuan yang Anda inginkan."
  },
  {
    name: "Tambahkan koreksi tekstur dan keasaman",
    text: "Aktifkan Xanthan Gum jika cairan basis Anda encer, atau Natrium Sitrat jika sangat asam."
  },
  {
    name: "Ukur bahan bahan",
    text: "Timbang jumlah eksak natrium alginat, kalsium laktat atau klorida, dan agen koreksi yang ditampilkan pada ringkasan."
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
  slug: 'kalkulator-mandi-sferifikasi',
  title: 'Kalkulator Mandi Sferifikasi',
  description: 'Hitung rasio eksak natrium alginat dan kalsium laktat untuk sferifikasi langsung dan terbalik. Koreksi viskositas dan keasaman dengan xanthan dan sitrat.',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  ui: {
    title: "Kalkulator Mandi Sferifikasi",
    subtitle: "Kontrol rasio presisi untuk sferifikasi langsung dan terbalik",
    unitLabel: "Sistem Pengukuran",
    metricUnit: "Metrik (g / gram)",
    imperialUnit: "Imperial (oz / ons)",
    methodLabel: "Metode Sferifikasi",
    directMethod: "Sferifikasi Langsung",
    reverseMethod: "Sferifikasi Terbalik",
    baseWeightLabel: "Berat Cairan Basis",
    bathWeightLabel: "Berat Air Bath",
    xanthanLabel: "Aktifkan Xanthan Gum (Koreksi Viskositas)",
    citrateLabel: "Aktifkan Natrium Sitrat (Keasaman / Sekuestran pH)",
    recipeTitle: "Ringkasan Resep yang Dihitung",
    baseGellingAgent: "Agen Pengeras Basis",
    bathGellingAgent: "Agen Pengeras Bath",
    xanthanGum: "Xanthan Gum (Pengental)",
    sodiumCitrate: "Natrium Sitrat (Buffer)",
    warningLabel: "Peringatan Kelarutan",
    warningDesc: "Berat agen yang diperlukan mendekati atau melebihi batas kelarutan untuk volume cairan ini. Pelarutan mungkin memakan waktu lebih lama atau memerlukan pemanasan ringan.",
    directDesc: "Ideal untuk cairan ringan dengan kandungan kalsium rendah. Menciptakan bola berlapis tipis dan lembut yang harus segera disajikan.",
    reverseDesc: "Ideal untuk susu, alkohol, cairan kaya kalsium, atau asam. Menciptakan bola stabil yang tidak terus mengeras setelah dibilas.",
    sodiumAlginate: "Natrium Alginat",
    calciumChloride: "Kalsium Klorida",
    calciumLactate: "Kalsium Laktat",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Ilmu Sferifikasi Molekuler dan Pengerasan Hidrokoloid',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sferifikasi adalah teknik kuliner revolusioner yang mengenkapsulasi inti cair di dalam membran tipis yang mengeras. Berasal dari sektor pengemasan industri pada tahun 1940-an, teknik ini diadaptasi untuk masakan modernis pada awal tahun 2000-an. Kimia yang mendasarinya bergantung pada interaksi hidrokoloid, khususnya ikatan silang polimer natrium alginat saat terpapar kation kalsium divalen.',
    },
    {
      type: 'title',
      text: 'Kimia Molekuler: Natrium Alginat dan Ion Kalsium',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Natrium alginat adalah polisakarida yang diekstraksi dari rumput laut coklat, terdiri dari rantai linier asam beta-D-manuronat (blok M) dan asam alfa-L-guluronat (blok G). Dalam bentuk garam natriumnya, ia sepenuhnya larut dalam air, membentuk larutan kental. Ketika ion kalsium (seperti kalsium klorida atau kalsium laktat glukonat) diperkenalkan, ion kalsium divalen (Ca2+) menggantikan ion natrium monovalen (Na+). Karena kalsium memiliki dua muatan positif, ia mengikat dua blok G pada rantai polimer yang berdekatan, menjembatani mereka bersama. Proses ini, secara ilmiah digambarkan sebagai <strong>model kotak telur</strong> pengerasan, menghubungkan rantai polisakarida independen menjadi jaringan hidrogel tiga dimensi yang kaku yang menjebak molekul air dan rasa.',
    },
    {
      type: 'title',
      text: 'Mekanisme Sferifikasi Langsung versus Sferifikasi Terbalik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dua metode utama sferifikasi berbeda dalam di mana agen pengeras dan garam kalsium ditempatkan, menghasilkan sifat mekanik yang berbeda:',
    },
    {
      type: 'list',
      items: [
        '<strong>Sferifikasi Langsung:</strong> Natrium alginat dilarutkan dalam cairan basis beraroma, yang kemudian diteteskan ke dalam kalsium bath (biasanya 1,0% kalsium klorida). Pengerasan dimulai seketika di batas. Karena ion kalsium kecil dan bergerak, mereka terus bermigrasi dari bath ke inti bola, menyebabkan membran gel tumbuh ke dalam. Jika tidak segera dibilas dan disajikan, bola pada akhirnya akan mengeras sepenuhnya, berubah menjadi manik-manik padat dan kenyal.',
        '<strong>Sferifikasi Terbalik:</strong> Kalsium laktat glukonat (2,0%) dilarutkan dalam cairan basis beraroma, yang kemudian diteteskan ke dalam natrium alginat bath (0,5%). Karena molekul alginat besar dan bergerak lambat, mereka tidak dapat dengan mudah melintasi penghalang gel yang baru terbentuk. Sebaliknya, ion kalsium bermigrasi ke luar ke dalam bath, menumbuhkan membran ke luar. Ini menghentikan pengerasan segera setelah bola diangkat dan dibilas dalam air bersih, mempertahankan inti yang sepenuhnya cair untuk waktu yang tidak terbatas.'
      ],
    },
    {
      type: 'title',
      text: 'Mengatasi Hambatan Keasaman dan pH dengan Natrium Sitrat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Natrium alginat sangat sensitif terhadap asam. Ketika pH cairan basis beraroma turun di bawah 4,5, molekul alginat tidak dapat terhidrasi dengan benar. Alih-alih larut, rantai alginat mengendap menjadi asam alginat yang tidak larut, membentuk gumpalan berserabut. Untuk mengatasinya, koki menggunakan <strong>natrium sitrat</strong> sebagai agen penyangga. Natrium sitrat menetralkan ion hidrogen, menaikkan pH bahan asam seperti markisa atau jus jeruk nipis di atas ambang kritis 4,5, memungkinkan alginat terhidrasi sepenuhnya dan membentuk bentuk bola yang bersih.',
    },
    {
      type: 'title',
      text: 'Menyesuaikan Densitas dan Viskositas Cairan dengan Xanthan Gum',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Untuk membentuk bola, tetesan cairan basis beraroma harus terendam sepenuhnya dalam bath pengeras. Jika cairan basis beraroma kurang padat dibandingkan bath (seperti alkohol ringan atau jus berbasis air dalam natrium alginat bath kental selama sferifikasi terbalik), ia akan mengapung di permukaan, menjadi pipih. Menambahkan sedikit <strong>xanthan gum</strong> (biasanya 0,1% hingga 0,2%) meningkatkan viskositas cairan basis. Body ekstra ini memberikan momentum yang diperlukan agar tetesan tenggelam ke dalam bath, memungkinkan tegangan permukaan menarik tetesan menjadi bola sempurna.',
    },
    {
      type: 'table',
      headers: ['Metode Sferifikasi', 'Bahan Ideal', 'Aditif yang Diperlukan', 'Karakteristik Penyimpanan', 'Arah Pertumbuhan Gel'],
      rows: [
        ['Metode Langsung', 'Jus buah rendah kalsium, kaldu bening, sirup manis', '0,5% Natrium Alginat di basis, 1,0% Kalsium Klorida di bath', 'Harus segera disajikan, mengeras sepenuhnya seiring waktu', 'Ke dalam (menuju pusat)'],
        ['Metode Terbalik', 'Susu, alkohol, cairan tinggi kalsium, atau sangat asam', '2,0% Kalsium Laktat di basis, 0,5% Natrium Alginat di bath', 'Sangat stabil, dapat disimpan dalam minyak atau air selama berjam-jam', 'Ke luar (jauh dari pusat)'],
      ],
    },
    {
      type: 'title',
      text: 'Pembilasan dan Langkah Pengawetan Akhir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Selalu bilas bola jadi dalam bath air bersih dan dingin segera setelah mengeluarkannya dari bath pengeras. Ini membersihkan sisa kalsium atau alginat yang menempel di bagian luar, menghentikan reaksi kimia dan mencegah rasa tidak sedap (terutama rasa pahit ringan dari kalsium klorida). Untuk penyimpanan, rendam bola dalam cairan dengan densitas yang cocok (seperti cairan basis beraroma tanpa aditif, atau sirup gula ringan) untuk mencegah air bergerak melintasi membran melalui osmosis, yang dapat menyebabkan bola mengerut atau pecah.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
