import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Kalkulator Multiplikator Flokulasi Keju';
const description = 'Temukan momen yang tepat untuk memotong dadih dalam pembuatan keju artisan. Gunakan metode multiplikator flokulasi untuk menghitung waktu koagulasi, mengontrol kelembaban, dan meningkatkan hasil keju dengan kalkulator gratis kami.';
const faq = [
  {
    question: 'Apa itu metode flokulasi dalam pembuatan keju?',
    answer: 'Metode flokulasi adalah teknik yang digunakan untuk menentukan momen yang tepat untuk memotong dadih. Metode ini mengukur waktu dari penambahan rennet hingga tanda pertama gelasi (flokulasi), dan mengalikan waktu ini dengan faktor tertentu tergantung pada jenis keju.'
  },
  {
    question: 'Bagaimana cara mendeteksi titik flokulasi?',
    answer: 'Cara yang paling umum adalah metode mangkuk. Tempatkan mangkuk plastik kecil, steril, dan ringan di permukaan susu setelah menambahkan rennet. Ketuk atau putar dengan lembut setiap menit. Awalnya, mangkuk akan berputar bebas. Saat mangkuk berhenti berputar atau melawan gerakan karena susu mulai menggel adalah titik flokulasi.'
  },
  {
    question: 'Mengapa waktu pemotongan dadih sangat kritis?',
    answer: 'Memotong dadih pada waktu yang tepat mengontrol sineresis (kehilangan kelembaban). Memotong terlalu awal menghasilkan dadih yang rapuh, kehilangan lemak, dan hasil yang rendah. Memotong terlalu lambat menghasilkan dadih keras yang menahan terlalu banyak kelembaban atau gagal mengering dengan benar, menyebabkan keju asam dan terlalu terasamkan.'
  },
  {
    question: 'Apa itu multiplikator flokulasi?',
    answer: 'Multiplikator adalah faktor numerik yang diterapkan pada waktu flokulasi primer untuk menghitung total waktu koagulasi sebelum pemotongan. Multiplikator standar berkisar dari 2.0x (keju kering seperti Parmesan) hingga 5.0x atau 6.0x (keju lembab seperti Camembert).'
  },
  {
    question: 'Bagaimana suhu dan kekuatan rennet mempengaruhi flokulasi?',
    answer: 'Suhu yang lebih tinggi dan rennet yang lebih kuat mempercepat flokulasi, yang berarti susu menggel lebih cepat. Namun, karena total waktu pemotongan berbanding lurus dengan waktu flokulasi, metode multiplikator secara otomatis mengkompensasi perubahan ini, memastikan sifat dadih yang konsisten.'
  }
];

const howTo = [
  {
    name: 'Tambahkan rennet dan mulai timer',
    text: 'Aduk rennet Anda secara menyeluruh, lalu segera mulai stopwatch Fase 1 di kalkulator.'
  },
  {
    name: 'Lakukan tes mangkuk',
    text: 'Tempatkan mangkuk plastik ringan di permukaan susu dan uji resistensi secara teratur.'
  },
  {
    name: 'Tandai titik flokulasi',
    text: 'Saat mangkuk melawan putaran atau sentuhan, klik tombol stop untuk mencatat waktu flokulasi.'
  },
  {
    name: 'Pilih jenis keju atau multiplikator Anda',
    text: 'Pilih gaya keju dari database atau masukkan multiplikator kustom. Aplikasi menghitung total waktu dan memulai hitung mundur untuk pemotongan.'
  },
  {
    name: 'Potong dadih saat sinyal',
    text: 'Ketika timer mencapai nol, dadih telah mencapai ketegangan optimal. Potong dadih menjadi kubus sesuai resep Anda.'
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
} as const;

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
} as const;

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
} as const;

export const content: ToolLocaleContent = {
  slug: 'kalkulator-multiplikator-flokulasi-keju',
  title,
  description: 'Temukan momen yang tepat untuk memotong dadih dalam pembuatan keju artisan. Gunakan metode multiplikator flokulasi untuk menghitung waktu koagulasi, mengontrol kelembaban, dan meningkatkan hasil keju dengan kalkulator gratis kami.',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  ui: {
    title: 'Multiplikator Flokulasi Keju',
    subtitle: 'Temukan jendela pemotongan dadih yang sempurna berdasarkan perilaku gelasi yang sebenarnya',
    flocculationLabel: 'Waktu Flokulasi Primer (menit:detik)',
    multiplierLabel: 'Multiplikator Flokulasi',
    cheeseTypeLabel: 'Praset Gaya Keju',
    totalCoagulationLabel: 'Total Waktu Koagulasi',
    timeRemainingLabel: 'Sisa Waktu hingga Pemotongan',
    flocculationTimeLabel: 'Waktu Flokulasi',
    moistureLabel: 'Retensi Kelembaban Dadih yang Diharapkan',
    customOption: 'Multiplikator Kustom',
    startTimer: 'Mulai Timer Rennet',
    markFlocculation: 'Tandai Flokulasi',
    resetTimer: 'Atur Ulang Timer',
    warningTitle: 'Peringatan Kualitas Rennet',
    warningText: 'Waktu flokulasi yang tercatat sangat singkat. Ini mungkin menunjukkan dosis rennet yang berlebihan atau pengaturan suhu yang salah, yang dapat menyebabkan tekstur kenyal atau rasa pahit.',
    phase1Title: 'Fase 1: Penambahan Rennet dan Flokulasi',
    phase2Title: 'Fase 2: Hitung Mundur Koagulasi',
    phaseComplete: 'Dadih siap dipotong!',
    statusWaiting: 'Mengaduk rennet...',
    statusFlocculated: 'Flokulasi terdeteksi',
    statusCoagulating: 'Mengkoagulasi...',
    statusReady: 'Siap Dipotong',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Kapan Memotong Dadih: Metode Multiplikator Flokulasi untuk Keju Sempurna Setiap Batch',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Jika Anda pernah bertanya pada diri sendiri <strong>"kapan saya harus memotong dadih?"</strong> atau <strong>"bagaimana saya tahu dadih sudah siap?"</strong>, jawabannya terletak pada metode multiplikator flokulasi. Tidak seperti pembuatan keju industri yang mengandalkan timer tetap, pembuat keju artisan mengukur saat susu mulai menggel (titik flokulasi) dan mengalikan waktu itu dengan faktor spesifik gaya keju. Ini menangkap semua variabel - keasaman susu, tingkat kalsium, suhu, kekuatan rennet - dalam satu pengukuran. <strong>Kalkulator multiplikator flokulasi keju</strong> kami yang mengerjakan matematika sehingga Anda dapat memotong pada momen yang sempurna, setiap saat.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2.0x', label: 'Keju Keras', icon: 'mdi:cheese' },
        { value: '3.0x', label: 'Keju Medium Keras', icon: 'mdi:cheese' },
        { value: '5.0x', label: 'Keju Lunak', icon: 'mdi:cheese' },
        { value: '10-15m', label: 'Flokulasi Khas', icon: 'mdi:timer-outline' }
      ]
    },
    {
      type: 'title',
      text: 'Masalah Pembuatan Keju Umum yang Dipecahkan oleh Metode Flokulasi',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Kekerasan dadih yang tidak konsisten:</strong> Timer tetap tidak dapat memperhitungkan variasi batch dalam susu. Metode flokulasi beradaptasi dengan kimia susu Anda yang sebenarnya.',
        '<strong>Hasil keju yang rendah:</strong> Memotong terlalu awal atau terlalu lambat menyebabkan hilangnya lemak dan protein. Metode multiplikator menargetkan jendela yang tepat untuk retensi optimal.',
        '<strong>Kadar kelembaban yang salah:</strong> Keju keras membutuhkan dadih kering; keju lunak membutuhkan dadih lembab. Multiplikator yang berbeda (2.0x hingga 6.0x) secara langsung mengontrol sineresis.',
        '<strong>Aktivitas rennet yang bervariasi:</strong> Kekuatan rennet berubah seiring waktu dan antar merek. Pengaturan waktu flokulasi menangkap aktivitas sebenarnya di tangki Anda saat ini.'
      ]
    },
    {
      type: 'title',
      text: 'Cara Melakukan Tes Mangkuk: Langkah demi Langkah',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Tes mangkuk adalah cara termudah untuk mendeteksi flokulasi tanpa peralatan khusus. Setelah menambahkan rennet dan mengaduk secara menyeluruh, tempatkan mangkuk plastik kecil yang disterilkan atau tutup botol di permukaan susu. Setiap 30 hingga 60 detik, ketuk atau putar dengan lembut. Saat susu masih cair, mangkuk bergerak bebas. Saat mangkuk melawan gerakan - itulah <strong>titik flokulasi</strong> Anda. Catat waktu ini dan masukkan ke dalam kalkulator di atas.'
    },
    {
      type: 'tip',
      title: 'Gunakan Tutup Botol untuk Sensitivitas Lebih',
      html: 'Tutup botol plastik ringan lebih sensitif daripada mangkuk dan memberikan titik berhenti yang lebih jelas. Sterilkan dalam air mendidih selama 2 menit sebelum digunakan, dan biarkan mengapung di susu sejak Anda menambahkan rennet.'
    },
    {
      type: 'tip',
      title: 'Jaga Suhu Anda Tetap Stabil',
      html: 'Waktu flokulasi sangat tergantung pada suhu. Penurunan hanya 2C dapat menggandakan waktu flokulasi Anda. Jaga susu pada suhu yang stabil (biasanya 30-35C tergantung pada gaya keju) selama fase koagulasi.'
    },
    {
      type: 'tip',
      title: 'Perhatikan Flokulasi yang Sangat Cepat',
      html: 'Jika flokulasi terjadi dalam waktu kurang dari 8 menit (480 detik), Anda mungkin telah menambahkan terlalu banyak rennet atau suhu susu Anda terlalu tinggi. Ini dapat menyebabkan tekstur kenyal dan rasa pahit. Kalkulator akan memperingatkan Anda jika ini terjadi.'
    },
    {
      type: 'title',
      text: 'Referensi Multiplikator Flokulasi berdasarkan Jenis Keju',
      level: 2
    },
    {
      type: 'table',
      headers: ['Gaya Keju', 'Multiplikator', 'Kelembaban Diharapkan', 'Kekerasan Potong', 'Potensi Penuaan'],
      rows: [
        ['Parmesan, Grana', '2.0x', 'Sangat Rendah', 'Sangat Keras', '12+ bulan'],
        ['Mozzarella (segar)', '2.0x', 'Sangat Tinggi', 'Lunak / Kenyal', 'Hanya segar'],
        ['Swiss, Alpine', '2.5x', 'Rendah', 'Keras', '6-12 bulan'],
        ['Cheddar, Gouda', '3.0x', 'Sedang-Rendah', 'Keras / Lentur', '3-12 bulan'],
        ['Keju Biru', '3.5x - 4.0x', 'Sedang', 'Lembut', '2-6 bulan'],
        ['Camembert, Brie', '5.0x', 'Tinggi', 'Sangat Lembut', '3-8 minggu'],
        ['Laktik / Chevre Segar', '5.0x - 6.0x', 'Sangat Tinggi', 'Halus', 'Segar - 2 minggu']
      ]
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Multiplikator Rendah 2.0x to 2.5x',
          icon: 'mdi:cheese',
          description: 'Digunakan untuk varietas keju keras dan kering yang membutuhkan retensi kelembaban rendah.',
          highlight: false,
          points: ['Mozzarella & Parmesan: 2.0x', 'Gaya Alpine: 2.5x', 'Drainase whey cepat', 'Menghasilkan dadih padat yang dapat ditua']
        },
        {
          title: 'Multiplikator Sedang 3.0x to 4.0x',
          icon: 'mdi:cheese',
          description: 'Kisaran standar untuk keju Medium Keras yang menyeimbangkan kelembaban dan keasaman.',
          highlight: true,
          points: ['Cheddar & Gouda: 3.0x', 'Keju biru: 3.5x hingga 4.0x', 'Ekspulsi whey seimbang', 'Potensi pemeraman yang fleksibel']
        },
        {
          title: 'Multiplikator Tinggi 5.0x to 6.0x',
          icon: 'mdi:cheese',
          description: 'Digunakan untuk keju lunak, creamy, dan kelembaban tinggi.',
          highlight: false,
          points: ['Camembert & Brie: 5.0x', 'Laktik & kulit bloom lunak', 'Retensi kelembaban tinggi', 'Pengembangan pasta yang halus dan creamy']
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Pemecahan Masalah: 3 Tanda Dadih Anda Tidak Mengatur dengan Benar',
      html: '<strong>Flokulasi dalam waktu kurang dari 6 menit:</strong> Terlalu banyak rennet atau susu terlalu panas. Kurangi rennet sebesar 25% pada batch berikutnya. <strong>Flokulasi memakan waktu lebih dari 25 menit:</strong> Rennet mungkin kedaluwarsa, susu terlalu dingin, atau kadar kalsium terlalu rendah. Tambahkan kalsium klorida. <strong>Dadih berlendir atau rapuh pada waktu pemotongan:</strong> Multiplikator mungkin terlalu tinggi atau terlalu rendah untuk gaya keju Anda. Sesuaikan dengan kenaikan 0.5x.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Keju Keras (Parmesan, Alpine)',
      html: 'Gunakan <strong>multiplikator 2.0x - 2.5x</strong>. Potong dadih lebih awal untuk ekspulsi whey maksimum. Dadih ini dipotong ketika gel masih relatif rapuh, menghasilkan dadih yang padat dan kering yang ideal untuk penuaan panjang. Kalkulator akan menunjukkan total waktu koagulasi yang lebih pendek.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Keju Medium Keras (Cheddar, Gouda)',
      html: 'Gunakan <strong>multiplikator 3.0x</strong>. Kisaran standar untuk sebagian besar pembuatan keju artisan. Menyeimbangkan retensi kelembaban dengan drainase whey. Dadih kenyal dan pecah bersih. Sebagian besar resep keju termasuk dalam kategori ini.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Keju Lunak (Camembert, Brie)',
      html: 'Gunakan <strong>multiplikator 5.0x - 6.0x</strong>. Biarkan gel menguat secara signifikan sebelum dipotong. Ini mengunci kelembaban di dalam dadih, menciptakan tekstur creamy dan mudah dioles yang menjadi ciri khas keju kulit bloom. Tangani dadih dengan lembut untuk menghindari kehilangan whey yang tertahan.'
    },
    {
      type: 'title',
      text: 'Glosarium Dadih Pembuatan Keju Artisan',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Titik Flokulasi', definition: 'Saat dalam proses pembuatan keju di mana protein susu mulai menggumpal dan membentuk gel lunak.' },
        { term: 'Rennet', definition: 'Kompleks enzim (terutama kimosin) yang digunakan untuk menggumpalkan susu, memisahkannya menjadi padatan (dadih) dan cairan (whey).' },
        { term: 'Sineresis', definition: 'Ekstraksi atau pengeluaran cairan dari gel, seperti whey yang mengalir dari dadih keju.' },
        { term: 'Waktu Koagulasi', definition: 'Total durasi dari penambahan rennet hingga dadih siap dipotong.' }
      ]
    },
    {
      type: 'summary',
      title: 'Poin Penting untuk Pemotongan Dadih yang Sempurna',
      items: [
        'Ukur waktu flokulasi secara tepat menggunakan tes mangkuk. Masukkan ke dalam kalkulator di atas.',
        'Pilih multiplikator yang sesuai dengan gaya keju Anda: 2.0x untuk keju keras, 3.0x untuk Medium Keras, 5.0x untuk keju lunak.',
        'Jaga suhu susu tetap stabil selama koagulasi. Bahkan perubahan 2C mengubah waktu flokulasi secara signifikan.',
        'Jika flokulasi terjadi dalam waktu kurang dari 8 menit, kurangi rennet lain kali. Jika lebih dari 25 menit, periksa kesegaran rennet.',
        'Kalkulator mengerjakan matematika sehingga Anda dapat fokus pada teknik dan konsistensi.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
