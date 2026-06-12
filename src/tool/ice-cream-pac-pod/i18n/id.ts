import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkulator PAC POD Es Krim Panduan Formulasi Kriogenik";
const description = "Hitung daya anti beku dan daya pemanis untuk es krim. Formulasikan profil gula yang presisi, persentase padatan, dan suhu penyajian.";
const faq = [
  {
    question: "Apa itu PAC dalam formulasi es krim?",
    answer: "PAC adalah singkatan dari Potere Anticongelante, yang merepresentasikan daya anti beku. Ini menentukan seberapa banyak air tetap membeku pada suhu penyajian tertentu, mengontrol kekerasan fisik es krim."
  },
  {
    question: "Apa itu POD dan mengapa penting?",
    answer: "POD adalah singkatan dari Potere Dolcificante, yang merepresentasikan daya pemanis relatif. Ini mengukur kemanisan relatif terhadap sukrosa (gula pasir), yang memiliki nilai dasar 100."
  },
  {
    question: "Mengapa kita perlu menyeimbangkan banyak gula dalam es krim?",
    answer: "Gula yang berbeda memiliki karakteristik PAC dan POD yang unik. Contohnya, dekstrosa menawarkan daya anti beku tinggi dengan kemanisan sedang, sementara sukrosa memberikan body dan rasa manis standar. Mencampurnya memungkinkan kontrol atas kriminess tanpa membuat produk terlalu manis."
  },
  {
    question: "Berapa persentase padatan optimal untuk es krim?",
    answer: "Persentase total padatan biasanya berkisar antara 36% dan 42%. Persentase padatan di bawah kisaran ini menyebabkan tekstur berair, sementara di atasnya dapat mengakibatkan tekstur berpasir atau rasa berat di mulut."
  }
];

const howTo = [
  {
    name: "Atur basis campuran dan suhu penyajian",
    text: "Tentukan berat campuran cair dasar Anda dan masukkan suhu penyajian target di mana Anda ingin menyajikan es krim."
  },
  {
    name: "Masukkan jumlah gula",
    text: "Sesuaikan slider untuk berbagai gula seperti sukrosa, dekstrosa, glukosa, gula invert, dan trehalosa untuk membangun resep Anda."
  },
  {
    name: "Analisis nilai PAC dan POD",
    text: "Bandingkan nilai PAC dan POD yang terhitung dengan nilai target yang direkomendasikan untuk suhu target Anda."
  },
  {
    name: "Verifikasi rasio padatan dan scoopability",
    text: "Pastikan persentase total padatan berada dalam zona optimal dan periksa indikator scoopability untuk memprediksi tekstur akhir."
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
  slug: 'es-krim-pac-pod',
  title: 'Kalkulator PAC POD Es Krim',
  description: 'Hitung daya anti beku dan daya pemanis untuk es krim. Formulasikan profil gula yang presisi, persentase padatan, dan suhu penyajian.',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  ui: {
    title: "Kalkulator Kriogenik Es Krim",
    subtitle: "Dasbor formulasi kriogenik presisi untuk gastronomi molekuler",
    unitLabel: "Sistem Satuan",
    metricUnit: "Metrik (gram)",
    imperialUnit: "Imperial (ons)",
    baseWeightLabel: "Berat Campuran Dasar",
    targetTempLabel: "Suhu Penyajian",
    sucroseLabel: "Sukrosa",
    dextroseLabel: "Dekstrosa",
    glucoseLabel: "Glukosa DE40",
    invertedLabel: "Gula Invert",
    trehaloseLabel: "Trehalosa",
    pacLabel: "Daya Anti Beku (PAC)",
    podLabel: "Daya Pemanis (POD)",
    solidsLabel: "Total Padatan",
    targetPacLabel: "PAC Target",
    scoopabilityLabel: "Status Scoopability",
    stoneState: "Keras Seperti Batu",
    creamyState: "Kriminess Sempurna",
    soupState: "Meleleh Seperti Sup",
    stoneDesc: "Daya anti beku terlalu rendah untuk suhu ini. Campuran akan membeku sangat keras.",
    creamyDesc: "Keseimbangan PAC optimal. Es krim akan mudah disendok dan creamy.",
    soupDesc: "Daya anti beku terlalu tinggi. Es krim akan meleleh cepat dan tetap cair.",
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
      text: 'Prinsip Ilmiah Formulasi Kriogenik Es Krim dan Kontrol Fase Transisi Gelas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Es krim adalah emulsi termodinamika multifase kompleks yang terdiri dari sel udara, globul lemak, kristal es, dan fase serum pekat yang tidak membeku. Mencapai kriminess dan scoopability yang sempurna membutuhkan kontrol hati-hati terhadap depresi titik beku air dalam campuran. Saat suhu turun di bawah titik beku, air mulai mengkristal menjadi es. Konsentrasi zat terlarut dalam serum cair yang tersisa meningkat, yang selanjutnya menurunkan titik bekunya. Keseimbangan antara kristal air beku dan fase sirup yang tidak membeku menentukan kekerasan dan kehalusan produk akhir.',
    },
    {
      type: 'title',
      text: 'Memahami PAC: Daya Anti Beku dan Matematika Depresi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC, atau Potere Anticongelante, merepresentasikan daya anti beku suatu zat terlarut relatif terhadap sukrosa. Sukrosa ditetapkan sebagai standar referensi dengan nilai PAC 100. Mekanismenya diatur oleh sifat koligatif, artinya depresi titik beku bergantung pada jumlah molekul aktif yang terlarut dalam air, bukan pada massanya. Monosakarida seperti dekstrosa (berat molekul 180 g/mol) menyediakan sekitar dua kali lebih banyak molekul per gram dibandingkan disakarida seperti sukrosa (berat molekul 342 g/mol), menghasilkan PAC 190. Nilai PAC yang lebih tinggi berarti lebih banyak air tetap cair pada suhu tertentu, mencegah es krim membeku keras seperti batu.',
    },
    {
      type: 'title',
      text: 'Memahami POD: Daya Pemanis dan Keseimbangan Sensorik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'POD, atau Potere Dolcificante, adalah metrik yang mengukur kemanisan relatif dibandingkan sukrosa (dasar 100). Saat memformulasi es krim atau gelato berkualitas tinggi, menyeimbangkan kemanisan sama pentingnya dengan kekokohan struktural. Jika seorang formulator hanya menggunakan sukrosa untuk menurunkan titik beku (meningkatkan PAC), es krim akan menjadi terlalu manis sebelum mencapai kelembutan yang diinginkan. Untuk mengatasi keterbatasan ini, gastronomi molekuler memanfaatkan gula seperti dekstrosa (POD 70), trehalosa (POD 45), atau glukosa teratomisasi DE40 (POD 40). Ini memungkinkan konfigurasi kurva pembekuan tanpa membebani lidah.',
    },
    {
      type: 'title',
      text: 'Database Perbandingan Gula Formulasi Kriogenik Umum',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Jenis Gula', 'PAC Relatif', 'POD Relatif', 'Kadar Padatan (%)', 'Kegunaan Kuliner'],
      rows: [
        ['Sukrosa', '100', '100', '100%', 'Body standar, profil manis bersih, dasar standar'],
        ['Dekstrosa', '190', '70', '100%', 'Menurunkan titik beku, meningkatkan kelembutan, mengurangi rasa manis'],
        ['Glukosa DE40', '90', '40', '95%', 'Menambah body, mencegah rekristalisasi, meningkatkan viskositas'],
        ['Gula Invert', '190', '130', '70%', 'Menambah kelembutan, sifat humektan, meningkatkan rasa buah'],
        ['Trehalosa', '100', '45', '90%', 'Agen body rendah manis, melindungi protein, akhir bersih'],
      ],
    },
    {
      type: 'title',
      text: 'Rasio Total Padatan dan Stabilitas Emulsi Struktural',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Total padatan mencakup semua elemen non-air dalam formulasi, termasuk lemak, padatan susu tanpa lemak, stabilisator, pengemulsi, dan gula. Campuran es krim optimal memiliki total padatan antara 36% dan 42%. Jika padatan terlalu rendah, kandungan air yang tinggi menyebabkan pertumbuhan kristal es besar dan tekstur kasar. Jika padatan terlalu tinggi, viskositas meningkat berlebihan, menghasilkan rasa berat di mulut dan potensi rasa berpasir akibat kristalisasi laktosa.',
    },
    {
      type: 'title',
      text: 'Langkah Praktis untuk Keberhasilan Formulasi Kriogenik',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Tentukan suhu penyajian target lemari pajang Anda. Gelato biasanya disajikan pada minus 12 derajat Celcius, sementara es krim industri disajikan lebih dingin pada minus 18 derajat Celcius.',
        'Hitung PAC target menggunakan rumus suhu standar. Untuk minus 12 derajat Celcius, PAC target sekitar 216.',
        'Pilih campuran gula. Kombinasikan sukrosa untuk kemanisan standar, dekstrosa untuk menurunkan titik beku, dan glukosa untuk meningkatkan body dan tekstur.',
        'Verifikasi bahwa total padatan berada dalam kisaran aman 36% hingga 42% untuk memastikan aerasi optimal dan profil leleh yang halus di lidah.'
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
