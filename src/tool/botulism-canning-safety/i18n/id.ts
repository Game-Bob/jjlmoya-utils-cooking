import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Botulisme Pengalengan Keamanan Pemeriksa Kalkulator Kematian Termal";
const description = "Hitung reduksi spora termal dan efikasi sterilisasi F0 untuk Clostridium botulinum. Nilai zona keamanan pengalengan asam rendah dan asam.";
const faq = [
  {
    question: "Mengapa Clostridium botulinum menjadi perhatian utama dalam pengalengan rumahan?",
    answer: "Clostridium botulinum adalah bakteri anaerobik pembentuk spora yang menghasilkan toksin botulinum, salah satu zat biologis paling mematikan. Spora sangat tahan panas dan dapat bertahan dalam kondisi anaerobik di dalam stoples tertutup jika suhu tidak mencukupi."
  },
  {
    question: "Apa signifikansi kritis pH 4.6 dalam pengawetan makanan?",
    answer: "Makanan dengan pH di bawah 4.6 diklasifikasikan sebagai asam. Di lingkungan ini, spora Botulinum tidak dapat berkecambah atau memproduksi toksin. Untuk makanan dengan pH 4.6 atau lebih tinggi, pengalengan tekanan wajib dilakukan untuk mencapai suhu di atas 116 derajat Celcius guna menghancurkan spora."
  },
  {
    question: "Apa itu nilai efikasi sterilisasi F0?",
    answer: "Nilai F0 mengukur waktu sterilisasi ekuivalen pada suhu 121.11 derajat Celcius. Proses sterilisasi standar untuk makanan asam rendah memerlukan nilai F0 3.0 menit atau lebih tinggi, yang merepresentasikan dua belas kali reduksi desimal populasi spora."
  },
  {
    question: "Mengapa saya tidak bisa menggunakan bak air untuk makanan asam rendah?",
    answer: "Pengalengan bak air hanya mencapai titik didih (100 derajat Celcius). Suhu ini tidak cukup untuk membunuh spora Clostridium botulinum yang tahan panas pada makanan asam rendah. Spora akan bertahan dan menghasilkan toksin pada suhu ruangan."
  }
];

const howTo = [
  {
    name: "Masukkan tingkat keasaman makanan",
    text: "Tentukan dan masukkan nilai pH bahan makanan Anda. Jika pH sama dengan atau lebih besar dari 4.6, makanan tersebut tergolong asam rendah."
  },
  {
    name: "Pilih teknik pengalengan",
    text: "Pilih antara pengalengan bak air atau pengalengan tekanan tergantung pada peralatan pengawetan yang Anda miliki."
  },
  {
    name: "Tentukan suhu dan durasi",
    text: "Masukkan suhu proses pengalengan dan waktu dalam menit selama stoples berada pada suhu tersebut."
  },
  {
    name: "Evaluasi diagnostik keamanan",
    text: "Periksa nilai F0 yang dihasilkan, jumlah reduksi desimal spora, dan indikator zona keamanan untuk memastikan kepatuhan."
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
  slug: 'botulisme-pengalengan-keamanan',
  title: 'Botulisme Pengalengan Keamanan Pemeriksa',
  description: 'Hitung reduksi spora termal dan efikasi sterilisasi F0 untuk Clostridium botulinum. Nilai zona keamanan pengalengan asam rendah dan asam.',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  ui: {
    title: "Monitor Autoklaf Pengalengan",
    subtitle: "Diagnostik kematian termal dan evaluator keamanan botulisme",
    methodLabel: "Metode Pengalengan",
    waterBath: "Pengalengan Bak Air",
    pressureCanner: "Pengalengan Tekanan",
    tempLabel: "Suhu Pengalengan",
    timeLabel: "Waktu Pemrosesan",
    phLabel: "pH Makanan",
    f0Label: "Nilai Efikasi F0",
    dLabel: "Nilai D Terhitung",
    sporesLabel: "Populasi Spora",
    statusSafe: "Sterilisasi Selesai",
    statusMarginal: "Sterilisasi Marjinal",
    statusUnsafe: "Risiko Botulisme Tinggi",
    statusSafeDesc: "Efikasi termal melebihi target F0 3.0 menit. Spora sepenuhnya dinonaktifkan.",
    statusMarginalDesc: "Proses mencapai penonaktifan parsial tetapi masih di bawah standar keamanan 12D. Sesuaikan waktu atau suhu.",
    statusUnsafeDesc: "Proses gagal menonaktifkan Clostridium botulinum. Makanan asam rendah dalam bak air tetap berbahaya.",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "mnt",
    logReductionLabel: "Reduksi Desimal",
    dValueUnit: "menit",
    indicatorSectionTitle: "Alat Ukur Diagnostik",
    visualizerSectionTitle: "Reduksi Spora",
    f0Tooltip: "Waktu sterilisasi ekuivalen dalam menit pada 121.11°C. Ambang batas aman adalah 3.0 atau lebih tinggi.",
    dTooltip: "Waktu reduksi desimal: durasi dalam menit yang diperlukan untuk menghancurkan 90% spora pada suhu saat ini.",
    logReductionTooltip: "Jumlah reduksi desimal (10 kali lipat). Reduksi 12D adalah standar keamanan.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Mekanisme Ilmiah Pemrosesan Termal dan Kinetika Penonaktifan Spora',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pemrosesan termal dalam pengalengan menjamin sterilitas komersial dengan menghancurkan mikroorganisme patogen dan pembusuk. Fokus utama pedoman keamanan dalam pengawetan makanan asam rendah adalah Clostridium botulinum. Spora botulinum sangat tahan panas dibandingkan dengan sel vegetatif. Menonaktifkan spora ini memerlukan proses waktu kematian termal yang menerapkan suhu tinggi selama durasi yang diperhitungkan. Hubungan matematis antara suhu dan laju penonaktifan dinyatakan melalui waktu reduksi desimal (nilai D) dan faktor ketergantungan suhu (nilai Z).',
    },
    {
      type: 'title',
      text: 'Klasifikasi Makanan dan Ambang Batas Keamanan Kritis pH 4.6',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nilai pH 4.6 adalah garis pemisah untuk keamanan pengawetan. Makanan asam di bawah pH 4.6 secara alami menghambat perkecambahan dan produksi toksin spora Botulinum. Untuk makanan ini, pemrosesan pada 100 derajat Celcius dalam bak air mendidih sudah cukup. Namun, makanan asam rendah di atas pH 4.6 harus menjalani pengalengan tekanan untuk menaikkan suhu uap dan mencapai penghancuran spora termal lengkap. Tabel di bawah merinci klasifikasi dan metode pengalengan untuk bahan umum:',
    },
    {
      type: 'table',
      headers: ['Kelompok Makanan', 'Rentang pH', 'Metode Pengalengan yang Diperlukan', 'Contoh Umum'],
      rows: [
        ['Asam Tinggi', 'Di bawah 4.0', 'Pengalengan Bak Air', 'Apel, Beri, Jeruk, Persik, Acar Cuka'],
        ['Diasamkan atau Asam Sedang', '4.0 hingga 4.6', 'Bak Air dengan Penyesuaian Asam', 'Tomat, Ara, Pir'],
        ['Asam Rendah', '4.6 dan di Atasnya', 'Pengalengan Tekanan Wajib', 'Daging, Makanan Laut, Kacang, Jagung, Kentang, Sup'],
      ],
    },
    {
      type: 'title',
      text: 'Penyesuaian Ketinggian dan Koreksi Keamanan Titik Didih',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saat ketinggian bertambah, tekanan atmosfer menurun, menyebabkan titik didih air turun di bawah 100 derajat Celcius. Dalam pengalengan bak air, suhu yang lebih rendah ini meningkatkan nilai D spora, sehingga memerlukan waktu pemrosesan yang lebih lama. Dalam pengalengan tekanan, pengaturan alat pengukur dial atau berbobot harus ditingkatkan untuk mempertahankan suhu sterilisasi internal target. Berikut adalah panduan referensi untuk titik didih dan penyesuaian pengalengan tekanan yang diperlukan:',
    },
    {
      type: 'table',
      headers: ['Rentang Ketinggian', 'Titik Didih Air', 'Tekanan Dial Gauge Diperlukan', 'Tekanan Weighted Gauge Diperlukan'],
      rows: [
        ['0 hingga 300 meter', '100.0 °C', '11 PSI (121 °C)', '10 PSI (121 °C)'],
        ['300 hingga 600 meter', '99.0 °C', '11 PSI (121 °C)', '15 PSI (121 °C)'],
        ['600 hingga 900 meter', '98.0 °C', '12 PSI (121 °C)', '15 PSI (121 °C)'],
        ['900 hingga 1200 meter', '97.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1200 hingga 1500 meter', '96.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1500 hingga 2000 meter', '94.5 °C', '14 PSI (121 °C)', '15 PSI (121 °C)'],
      ],
    },
    {
      type: 'title',
      text: 'Mengapa Konsep Reduksi Spora 12D Mencegah Botulisme',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Penghancuran bakteri oleh panas bersifat logaritmik. Nilai D mewakili waktu yang diperlukan pada suhu tertentu untuk menghancurkan 90% populasi spora, yang setara dengan satu reduksi log desimal. Standar referensi untuk Clostridium botulinum adalah nilai D 0.21 menit pada 121.11 derajat Celcius. Untuk mencapai margin keamanan yang tinggi, standar komersial menuntut proses reduksi dua belas desimal (12D), yang berarti populasi spora dikurangi sebanyak dua belas faktor sepuluh. Ini menghasilkan nilai target F0 3.0 menit, yang menjamin keamanan pada makanan asam rendah.',
    },
    {
      type: 'title',
      text: 'Panduan Pengalengan Rumahan Praktis dan Tips Keamanan',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Selalu asamkan tomat dengan jus lemon atau asam sitrat sebelum pemrosesan bak air, karena pH alaminya berfluktuasi mendekati ambang kritis 4.6.',
        'Jangan pernah mempersingkat waktu pemrosesan atau menurunkan suhu. Kinetika kematian termal bersifat logaritmik dan penyesuaian kecil dapat memungkinkan spora bertahan hidup.',
        'Pastikan alat pengukur dial pada pengaleng tekanan diuji setiap tahun untuk akurasi, karena pembacaan tekanan yang salah secara langsung membahayakan suhu sterilisasi internal.',
        'Kompensasi perbedaan ketinggian dengan menyesuaikan waktu pemrosesan di bak air atau meningkatkan pengaturan PSI pada pengaleng tekanan.',
        'Hindari pengalengan resep campuran yang mengandung bahan asam rendah seperti daging atau kacang dalam bak air, meskipun resep keseluruhan mengandung asam.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
