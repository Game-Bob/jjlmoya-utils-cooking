import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkulator Garam Fermentasi Laktasi Panduan Ilmiah Bio Organik";
const description = "Hitung persentase garam yang presisi untuk penggaraman kering dan perendaman basah. Seimbangkan populasi bakteri, cegah jamur, dan kuasai pengawetan makanan.";
const faq = [
  {
    question: "Mengapa persentase garam sangat penting dalam fermentasi laktasi?",
    answer: "Garam menekan patogen berbahaya dan jamur melalui tekanan osmotik sambil memungkinkan Bakteri Asam Laktat (LAB) yang toleran garam untuk berkembang, memfermentasi gula, dan menghasilkan asam laktat."
  },
  {
    question: "Apa perbedaan antara penggaraman kering dan perendaman basah?",
    answer: "Penggaraman kering menggunakan kelembaban alami makanan untuk melarutkan garam (ideal untuk kol parut). Perendaman basah menambahkan air eksternal dan garam untuk merendam seluruh sayuran atau potongan sayuran."
  },
  {
    question: "Bisakah saya menggunakan air keran berklorin untuk fermentasi?",
    answer: "Klorin dapat menghambat pertumbuhan bakteri. Sangat disarankan untuk menggunakan air saring atau mata air untuk hasil fermentasi yang konsisten."
  },
  {
    question: "Apakah persentase berat lebih baik daripada pengukuran volume?",
    answer: "Ya. Berbagai jenis garam (Kosher, garam laut, garam meja) memiliki ukuran kristal dan kepadatan yang bervariasi. Menimbang garam dalam gram memastikan salinitas yang tepat terlepas dari jenis garam yang digunakan."
  }
];

const howTo = [
  {
    name: "Pilih mode fermentasi",
    text: "Pilih mode Kering jika Anda mengandalkan jus sayuran alami, atau mode Basah jika menambahkan air untuk menutupi bahan."
  },
  {
    name: "Timbang bahan",
    text: "Masukkan berat tepat sayuran dalam gram. Jika menggunakan perendaman basah, masukkan juga berat air."
  },
  {
    name: "Sesuaikan target salinitas",
    text: "Geser kontrol persentase salinitas. Targetkan 2,0% hingga 3,5% untuk keamanan umum dan pertumbuhan bakteri asam laktat yang optimal."
  },
  {
    name: "Ukur garam",
    text: "Gunakan timbangan digital untuk mengukur gram garam yang tepat. Tambahkan ke wadah fermentasi Anda."
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
  slug: 'kalkulator-garam-fermentasi-laktasi',
  title: 'Kalkulator Garam Fermentasi Laktasi',
  description: 'Hitung persentase garam yang presisi untuk penggaraman kering dan perendaman basah. Seimbangkan populasi bakteri, cegah jamur, dan kuasai pengawetan makanan.',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  ui: {
    title: "Kalkulator Garam Fermentasi Laktasi",
    subtitle: "Kontrol salinitas presisi untuk pengawetan bio organik",
    unitLabel: "Sistem Pengukuran",
    metricUnit: "Metrik (g / gram)",
    imperialUnit: "Imperial (oz / ons)",
    modeLabel: "Mode Fermentasi",
    dryMode: "Penggaraman Kering",
    wetMode: "Perendaman Basah",
    vegWeightLabel: "Berat Sayuran",
    waterWeightLabel: "Berat Air",
    salinityLabel: "Salinitas Target (%)",
    saltGramsLabel: "Garam Diperlukan",
    fineSaltLabel: "Garam Halus (sendok teh)",
    kosherSaltLabel: "Garam Kosher (sendok teh)",
    statusDanger: "Zona Berbahaya",
    statusDangerDesc: "Salinitas di bawah 2,0% tidak cukup untuk memblokir patogen dan jamur. Tingkatkan salinitas untuk memastikan keamanan.",
    statusOptimal: "Zona LAB Optimal",
    statusOptimalDesc: "Salinitas antara 2,0% dan 3,5% ideal bagi Bakteri Asam Laktat (LAB) untuk mendominasi dan memfermentasi dengan aman.",
    statusInhibited: "Zona Terhambat",
    statusInhibitedDesc: "Salinitas di atas 3,5% memperlambat atau menghentikan fermentasi. Berguna untuk pengawetan jangka panjang tetapi menunda aktivitas bakteri.",
    petriTitle: "Simulasi Mikrobiologis",
    scaleTitle: "Tampilan Timbangan Digital",
    disclaimer: "Catatan: Menimbang garam menggunakan timbangan digital sangat disarankan daripada pengukuran volumetrik.",
    kosherLabel: "Garam Kosher",
    fineLabel: "Garam Halus",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Panduan Utama Kimia Fermentasi Laktasi dan Kontrol Salinitas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Fermentasi laktasi adalah proses biokimia dinamis yang didorong oleh Bakteri Asam Laktat (LAB) untuk mengawetkan sayuran dan buah-buahan. Seluruh mekanisme bergantung pada penciptaan lingkungan selektif di mana bakteri menguntungkan berkembang sementara organisme pembusuk, jamur, dan patogen ditekan. Kontrol salinitas adalah tuas paling penting untuk mencapai selektivitas biologis ini.',
    },
    {
      type: 'title',
      text: 'Aksi Biokimia Garam dalam Pengawetan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ketika garam diperkenalkan ke sayuran mentah, ia bekerja melalui proses fisik yang dikenal sebagai <strong>tekanan osmotik</strong>. Konsentrasi garam yang tinggi di luar sel tanaman menarik air dan gula terlarut dari jaringan tanaman melalui osmosis (plasmolisis). Ini menciptakan air garam kaya nutrisi yang berfungsi sebagai bahan bakar sempurna bagi Bakteri Asam Laktat. Bersamaan dengan itu, tekanan osmotik mengeringkan dan melisiskan membran sel jamur yang tidak diinginkan, ragi, dan bakteri patogen seperti <em>Escherichia coli</em> atau <em>Clostridium botulinum</em>, yang tidak dapat mentolerir tingkat salinitas yang tinggi.',
    },
    {
      type: 'title',
      text: 'Suksesi Mikrobiologis: Bagaimana LAB Mengkolonisasi Fermentasi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Fermentasi laktasi tidak dilakukan oleh satu spesies bakteri tunggal, tetapi oleh suksesi strain berbeda yang mendominasi seiring meningkatnya keasaman. Dalam fermentasi sayuran tipikal, siklus terjadi dalam tiga fase berbeda:',
    },
    {
      type: 'list',
      items: [
        '<strong>Fase 1 - Leuconostoc mesenteroides:</strong> Bakteri heterofermentatif ini memulai fermentasi. Ia sangat aktif di awal, menghasilkan asam laktat, asam asetat, karbon dioksida (yang membantu menciptakan atmosfer anaerobik), dan etanol. Ia dengan cepat menurunkan pH, menyiapkan media untuk spesies berikutnya.',
        '<strong>Fase 2 - Lactobacillus plantarum dan Lactobacillus brevis:</strong> Saat pH turun di bawah 5,0, <em>L. mesenteroides</em> mati dan bakteri homofermentatif toleran asam seperti <em>L. plantarum</em> mengambil alih. Mereka memfermentasi sisa gula sederhana secara eksklusif menjadi asam laktat, menurunkan pH dengan cepat.',
        '<strong>Fase 3 - Pediococcus pentosaceus dan lainnya:</strong> Dalam fermentasi jangka panjang, bakteri yang sangat toleran asam ini terus memproduksi asam hingga gula benar-benar habis atau pH mencapai sekitar 3,5 hingga 3,8, menstabilkan lingkungan tanpa batas.'
      ],
    },
    {
      type: 'title',
      text: 'Melindungi Tekstur Sayuran: Koneksi Pektin',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Satu masalah umum dalam fermentasi rumahan adalah kelembekan. Sel-sel tanaman disatukan oleh polisakarida struktural yang disebut pektin. Mikroorganisme pembusuk menghasilkan enzim yang disebut <strong>pektinase</strong>, yang memecah pektin dan merusak dinding tanaman, menyebabkan kelembekan. Mempertahankan tingkat salinitas di atas 2,0% secara langsung menghambat aktivitas enzim pektinase ini. Selain itu, ion kalsium yang ada dalam garam laut tidak dimurnikan atau ditambahkan sebagai kalsium klorida dapat berikatan silang dengan molekul pektin, membentuk kalsium pektat, yang menjaga acar dan asinan kubis tetap renyah.',
    },
    {
      type: 'title',
      text: 'Matematika Penggaraman Kering vs Perendaman Basah',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Memahami rumus untuk menghitung garam sangat penting. Untuk penggaraman kering (biasa digunakan untuk sayuran parut seperti kubis untuk asinan), persentase garam dihitung semata-mata berdasarkan berat sayuran. Untuk perendaman basah (digunakan untuk sayuran utuh atau potongan besar seperti mentimun atau wortel), persentase garam harus dihitung berdasarkan <strong>berat total sayuran dan air yang ditambahkan</strong>. Menghitung garam berdasarkan berat air saja adalah kesalahan umum yang mengencerkan salinitas akhir, karena air di dalam sayuran pada akhirnya mengencerkan air garam.',
    },
    {
      type: 'table',
      headers: ['Rentang Salinitas', 'Keadaan Mikrobiologis', 'Penggunaan Khas', 'Tingkat Keamanan'],
      rows: [
        ['< 2,0%', 'Risiko Patogen / Bahaya Jamur', 'Tidak direkomendasikan', 'Rendah'],
        ['2,0% - 2,5%', 'Mekar Bakteri Asam Laktat Optimal', 'Asinan kubis, Kimchi, Acar mentimun', 'Tinggi'],
        ['2,5% - 3,5%', 'Fermentasi lambat / Retensi tekstur tinggi', 'Saus pedas, bawang putih, sayuran akar', 'Tinggi'],
        ['> 3,5%', 'Inhibisi bakteri / Hanya pengawetan', 'Zaitun, paprika yang dimatangkan lama, suhu tinggi', 'Aman tapi tidak aktif'],
      ],
    },
    {
      type: 'title',
      text: 'Mengapa Menimbang Garam Lebih Baik daripada Mengukur Volume',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mengukur garam berdasarkan volume (sendok makan atau sendok teh) terkenal tidak akurat. Garam meja halus dan padat, satu sendok teh bisa memiliki berat hingga 6 gram. Sebaliknya, garam Kosher memiliki kristal besar seperti serpihan dengan kantong udara, dengan berat hanya 4 gram per sendok teh. Garam laut kasar berada di suatu tempat di antaranya. Menggunakan pengukuran volume dapat dengan mudah menyebabkan fermentasi menjadi terlalu rendah garam yang tidak aman atau berhenti total karena kelebihan garam. Menimbang bahan dalam gram pada timbangan digital menjamin hasil yang konsisten, aman, dan dapat diulang.',
    },
    {
      type: 'title',
      text: 'Pemecahan Masalah dan Praktik Terbaik Fermentasi Laktasi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Untuk memastikan fermentasi yang sukses, selalu ikuti aturan ini: Jaga semua sayuran tetap terendam sepenuhnya di bawah air garam untuk mencegah jamur aerobik tumbuh. Gunakan wadah dan pemberat yang bersih. Fermentasi pada suhu ruangan yang sejuk (18°C hingga 22°C) untuk mencegah bakteri fase 1 dikalahkan. Jika lapisan putih terbentuk di permukaan, periksa apakah itu ragi Kahm (ragi liar tidak berbahaya yang terbentuk karena paparan oksigen) atau jamur. Jamur berbulu dan berwarna-warni; jika ada, fermentasi harus dibuang. Ragi Kahm dapat dikikis, meskipun dapat mempengaruhi rasa.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
