import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Kalkulator Brix Sorbet: Rasio Gula ke Buah & Kontrol Titik Beku untuk Kelembutan Sempurna';
const description = 'Atur keseimbangan gula, purée buah, dan air yang tepat untuk sorbet lembut setiap saat. Hitung Brix, penurunan titik beku PAC, dan perbaiki masalah tekstur beku atau lembek dengan pengukuran presisi.';

const faq = [
  {
    question: 'Apa itu Brix dan mengapa penting dalam sorbet?',
    answer: 'Brix (°Bx) mengukur persentase padatan terlarut  -  terutama gula  -  dalam larutan cair. Dalam sorbet, kadar Brix antara 25% dan 30% (idealnya 28%) sangat penting untuk tekstur yang tepat. Di bawah 25%, sorbet membeku menjadi balok es sekeras batu karena tidak cukup gula untuk mengganggu pembentukan kristal es. Di atas 30%, titik beku turun sangat rendah sehingga sorbet tetap lembek dan tidak pernah membeku sempurna di freezer standar.',
  },
  {
    question: 'Bagaimana cara menghitung jumlah gula yang tepat untuk resep sorbet saya?',
    answer: 'Mulailah dengan menimbang purée buah Anda dan mengukur Brix alaminya dengan refraktometer (atau memilih nilai preset). Masukkan ini ke kalkulator bersama dengan ukuran adonan yang diinginkan dan target Brix (default 28%). Kalkulator menentukan berapa banyak sukrosa dan air yang perlu Anda tambahkan untuk membawa campuran total ke kisaran Brix optimal 25-30%. Kalkulator juga memperhitungkan penurunan titik beku (PAC) sehingga Anda bisa mengganti dengan dekstrosa jika sorbet akan terlalu keras.',
  },
  {
    question: 'Mengapa sorbet buatan saya selalu terlalu keras atau beku?',
    answer: 'Sorbet yang beku dan sekeras batu hampir selalu berarti konsentrasi gula total terlalu rendah (di bawah 25% Brix). Air dalam buah membeku menjadi kristal es besar alih-alih tetap sebagian cair. Solusinya: tambahkan lebih banyak sukrosa untuk menaikkan Brix, atau ganti sebagian sukrosa dengan dekstrosa  -  dekstrosa memiliki kekuatan anti-beku hampir dua kali lipat (PAC 190 vs 100) dan 30% lebih tidak manis, sehingga Anda dapat menurunkan titik beku tanpa membuat sorbet terlalu manis.',
  },
  {
    question: 'Apa perbedaan antara menggunakan sukrosa dan dekstrosa dalam sorbet?',
    answer: 'Sukrosa (gula meja) adalah pemanis standar dengan PAC 100 dan POD 100. Dekstrosa (bubuk glukosa) memiliki PAC 190  -  hampir dua kali lipat penurunan titik beku  -  tetapi hanya 70% dari kemanisan (POD 70). Ini berarti dekstrosa melembutkan sorbet jauh lebih efektif per gram tanpa membuatnya terlalu manis. Gunakan dekstrosa saat buah Anda sudah manis alami (misalnya mangga, pisang) dan Anda membutuhkan lebih banyak kekuatan anti-beku tanpa menambah kemanisan.',
  },
  {
    question: 'Bagaimana gula alami buah memengaruhi perhitungan?',
    answer: 'Buah yang berbeda memiliki kadar gula alami yang sangat bervariasi: lemon dan jeruk nipis sekitar 2% Brix, stroberi sekitar 8%, mangga dan anggur 14-18%, dan pisang hingga 22%. Kalkulator memperhitungkan Brix alami buah Anda sehingga Anda tidak secara tidak sengaja melebihi atau kekurangan konsentrasi gula total. Inilah mengapa menggunakan refraktometer untuk mengukur buah Anda disarankan  -  variasi musiman dapat menggeser Brix sebanyak 3-4 poin.',
  },
];

const howTo = [
  {
    name: 'Timbang purée buah Anda',
    text: 'Ukur berat tepat purée buah atau jus Anda dalam gram.',
  },
  {
    name: 'Perkirakan atau ukur Brix buah',
    text: 'Gunakan refraktometer untuk menemukan Brix tepat buah Anda, atau pilih nilai tipikal dari database kami (misalnya Mangga: 14%, Stroberi: 8%).',
  },
  {
    name: 'Masukkan berat ke kalkulator',
    text: 'Masukkan berat buah, Brix buah, dan target kadar Brix Anda (default adalah 28%).',
  },
  {
    name: 'Tinjau rekomendasi penambahan sirup',
    text: 'Kalkulator akan segera menampilkan gula dan air yang direkomendasikan untuk ditambahkan guna mencapai target Brix 28%.',
  },
  {
    name: 'Sesuaikan jenis gula jika perlu',
    text: 'Jika campuran kekurangan penurunan titik beku yang cukup, tambahkan dekstrosa sebagai pengganti sukrosa.',
  },
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
  slug: 'kalkulator-brix-sorbet',
  title: 'Kalkulator Densitas Brix Sorbet',
  description: 'Atur keseimbangan gula, purée buah, dan air yang tepat untuk sorbet lembut setiap saat. Perbaiki tekstur beku atau lembek dengan perhitungan Brix dan PAC yang presisi.',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  ui: {
    fruitWeightLabel: 'Berat Purée Buah',
    fruitBrixLabel: 'Brix Buah',
    sugarWeightLabel: 'Berat Sukrosa (Gula)',
    dextroseWeightLabel: 'Berat Dekstrosa',
    waterWeightLabel: 'Berat Air Tambahan',
    targetBrixLabel: 'Target Brix',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    brixUnit: '% Bx',
    totalBrixLabel: 'Brix Campuran Total',
    totalWeightLabel: 'Berat Total Adonan',
    totalPACLabel: 'Penurunan Titik Beku (PAC)',
    statusLabel: 'Profil Tekstur Sorbet',
    statusSoft: 'Terlalu Lembek / Seperti Sup',
    statusOptimal: 'Kelembutan Optimal',
    statusHard: 'Terlalu Keras / Beku',
    recommendedTitle: 'Rekomendasi Sirup (50% Buah)',
    recommendedSugarLabel: 'Sukrosa yang Diperlukan',
    recommendedWaterLabel: 'Air yang Diperlukan',
    fruitPresetLabel: 'Preset Buah',
    presetCustom: 'Buah Kustom',
    presetLemon: 'Lemon / Jeruk Nipis (2% Bx)',
    presetStrawberry: 'Stroberi / Raspberry (8% Bx)',
    presetOrange: 'Jeruk / Persik (10% Bx)',
    presetMango: 'Mangga / Anggur / Ceri (14% Bx)',
    presetBanana: 'Pisang (21% Bx)',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Ilmu Menyeimbangkan Sorbet: Brix, PAC, dan Padatan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Membuat sorbet profesional adalah latihan dalam ilmu pangan. Tidak seperti es krim, yang mengandalkan lemak susu dan protein untuk menciptakan struktur dan kelembutan, sorbet sepenuhnya bergantung pada gula terlarut dan penstabil. Konsentrasi gula terlarut ini diukur dalam derajat Brix (°Bx). Campuran sorbet yang sempurna membutuhkan konsentrasi gula 25% hingga 30% Brix. Jika kadar gula terlalu rendah, air akan membeku menjadi kristal es besar seperti jarum, menghasilkan balok keras berpasir. Jika terlalu tinggi, titik beku terlalu ditekan, dan sorbet tetap menjadi sirup semi-cair dalam freezer rumah atau komersial biasa.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '28%',
          label: 'Target Brix Ideal',
          icon: 'mdi:target',
        },
        {
          value: '25-30%',
          label: 'Kisaran Brix Aman',
          icon: 'mdi:gauge',
        },
        {
          value: '≈50%',
          label: 'Rasio Buah Optimal',
          icon: 'mdi:fruit-grapes',
        },
        {
          value: 'PAC 100/190',
          label: 'Sukrosa / Dekstrosa',
          icon: 'mdi:molecule',
        },
      ],
    },
    {
      type: 'title',
      text: 'Memahami PAC: Faktor Penurunan Titik Beku',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC (Potere Anticongelante, atau Kekuatan Anti-Beku) adalah metrik yang digunakan oleh koki pastry untuk mengukur seberapa banyak suatu bahan menurunkan titik beku air. Sukrosa, atau gula meja standar, adalah referensi dasar dengan nilai PAC 100. Namun, sukrosa sangat manis. Jika Anda perlu menambahkan lebih banyak padatan atau meningkatkan kapasitas anti-beku tanpa membuat sorbet terlalu manis, Anda dapat mengganti sebagian sukrosa dengan dekstrosa. Dekstrosa memiliki PAC 190, menjadikannya hampir dua kali lebih efektif daripada sukrosa dalam mencegah pembentukan kristal es, sementara hanya 70% kemanisannya.',
    },
    {
      type: 'title',
      text: 'Sukrosa vs Dekstrosa: Memilih Gula yang Tepat untuk Sorbet',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Sukrosa (Gula Meja)',
          icon: 'mdi:cube-outline',
          description: 'Pemanis standar dan dasar untuk semua perhitungan PAC dan POD. Memberikan kemanisan bersih dan badan.',
          points: [
            'Nilai PAC: 100 (dasar)',
            'Nilai POD: 100 (kemanisan penuh)',
            'Terbaik untuk: peran pemanis utama',
            'Menambah badan dan tekstur standar',
          ],
        },
        {
          title: 'Dekstrosa (Bubuk Glukosa)',
          icon: 'mdi:grain',
          description: 'Monosakarida dengan kekuatan penurunan titik beku hampir dua kali lipat dan kemanisan yang jauh lebih rendah.',
          highlight: true,
          points: [
            'Nilai PAC: 190 (hampir 2� -  sukrosa)',
            'Nilai POD: 70 (30% lebih tidak manis)',
            'Terbaik untuk: melembutkan sorbet keras',
            'Ideal saat buah sudah sangat manis',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Tabel Referensi Nilai Brix Buah Tipikal',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Jenis Buah', 'Nilai Brix Rata-rata', 'Kandungan Air', 'Tingkat Keasaman'],
      rows: [
        ['Lemon / Jeruk Nipis', '2% - 4% Bx', 'Sangat Tinggi', 'Sangat Tinggi Sekali'],
        ['Stroberi / Raspberry', '7% - 9% Bx', 'Tinggi', 'Sedang'],
        ['Jeruk / Persik', '9% - 11% Bx', 'Sedang-Tinggi', 'Rendah-Sedang'],
        ['Apel / Pir', '11% - 13% Bx', 'Sedang', 'Rendah'],
        ['Mangga / Anggur / Ceri', '14% - 18% Bx', 'Sedang-Rendah', 'Sangat Rendah'],
        ['Pisang', '20% - 22% Bx', 'Rendah', 'Dapat Diabaikan'],
      ],
    },
    {
      type: 'title',
      text: 'Cara Mengkalibrasi Campuran Sorbet Anda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Untuk menyeimbangkan sorbet, pertama ukur berat dan konsentrasi gula purée buah Anda. Menggunakan refraktometer sangat disarankan untuk akurasi, karena kemanisan buah bervariasi menurut musim dan kematangan. Jika Anda tidak memiliki refraktometer, Anda dapat memperkirakan menggunakan tabel di atas. Setelah Anda memiliki nilai-nilai ini, masukkan ke kalkulator kami untuk menentukan jumlah tepat sirup gula (air dan gula) yang diperlukan untuk membawa campuran keseluruhan ke target Brix 28%. Untuk tekstur optimal, targetkan proporsi buah sekitar 50% dari berat total adonan.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Mengapa Sorbet Saya Beku atau Terlalu Keras?',
      html: 'Sorbet yang membeku sekeras batu hampir selalu memiliki <strong>terlalu sedikit gula</strong> (Brix di bawah 25%). Air dalam purée buah mengkristal menjadi pecahan es besar dan tajam. Perbaiki dengan menambahkan lebih banyak sukrosa untuk menaikkan Brix total, atau ganti sebagian sukrosa dengan dekstrosa untuk meningkatkan PAC tanpa membuat terlalu manis. Periksa juga apakah proporsi buah Anda tidak terlalu tinggi  -  melebihi 60% buah menyisakan ruang yang tidak cukup untuk padatan gula.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Mengapa Sorbet Saya Lembek atau Tidak Membeku?',
      html: 'Sorbet yang tetap lembut atau seperti sup memiliki <strong>terlalu banyak gula</strong> (Brix di atas 30%). Titik beku telah ditekan begitu jauh sehingga freezer Anda tidak dapat memadatkan campuran. Kurangi total masukan gula, atau jika buahnya sangat manis alami (misalnya pisang atau mangga), gunakan lebih sedikit sukrosa tambahan secara proporsional. Periksa suhu target Anda: freezer rumah beroperasi pada −18°C; PAC yang sesuai untuk layanan −12°C akan terlalu tinggi untuk freezer standar.',
    },
    {
      type: 'tip',
      title: 'Ukur Brix dengan Akurat Menggunakan Refraktometer',
      html: 'Refraktometer digital atau optik adalah investasi terbaik untuk sorbet yang konsisten. Kematangan buah sangat bervariasi menurut musim, varietas, dan asal  -  stroberi di bulan Juni dapat mengukur 6°Bx sementara varietas yang sama di bulan Agustus mencapai 10°Bx. Teteskan setetes purée ke prisma, baca nilainya, dan masukkan ke kalkulator. Menebak hanya berdasarkan tabel akan menghasilkan hasil yang tidak konsisten.',
    },
    {
      type: 'title',
      text: 'Langkah demi Langkah: Cara Menggunakan Kalkulator Ini',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Timbang purée buah Anda</strong>  -  Gunakan timbangan digital untuk mengukur berat tepat purée buah atau jus yang telah disaring dalam gram.',
        '<strong>Ukur atau perkirakan Brix buah</strong>  -  Gunakan refraktometer untuk presisi, atau pilih preset dari dropdown (Lemon 2%, Stroberi 8%, Mangga 14%, dll.).',
        '<strong>Atur target Brix Anda</strong>  -  Default adalah 28%, titik manis ideal. Sesuaikan antara 25% dan 30% tergantung preferensi Anda.',
        '<strong>Tinjau rekomendasi sirup</strong>  -  Kalkulator langsung menampilkan berapa banyak sukrosa dan air yang perlu ditambahkan untuk mencapai target Anda.',
        '<strong>Periksa indikator tekstur</strong>  -  Meter PAC memberi tahu apakah sorbet akan terlalu keras, kelembutan optimal, atau terlalu lembut pada suhu freezer Anda.',
        '<strong>Sesuaikan dengan dekstrosa jika perlu</strong>  -  Jika sorbet diprediksi keras tetapi sudah cukup manis, ganti sebagian sukrosa dengan dekstrosa untuk meningkatkan PAC tanpa menambah kemanisan.',
      ],
    },
    {
      type: 'title',
      text: 'Istilah Penting Pembuatan Sorbet',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Brix (°Bx)',
          definition: 'Persentase padatan terlarut (terutama gula) dalam larutan cair. Dalam sorbet, 25-30°Bx adalah kisaran target untuk tekstur dan kelembutan ideal.',
        },
        {
          term: 'PAC (Potere Anticongelante)',
          definition: 'Kekuatan anti-beku  -  ukuran seberapa banyak suatu bahan menurunkan titik beku air. Sukrosa memiliki PAC dasar 100; dekstrosa adalah 190.',
        },
        {
          term: 'POD (Potere Dolcificante)',
          definition: 'Kekuatan pemanis relatif terhadap sukrosa (dasar 100). Dekstrosa memiliki POD 70, artinya 30% lebih tidak manis gram-per-gram dibandingkan gula meja.',
        },
        {
          term: 'Dekstrosa',
          definition: 'Monosakarida (bubuk glukosa) yang digunakan dalam formulasi sorbet untuk menurunkan titik beku tanpa menambah kemanisan berlebihan. PAC 190, POD 70.',
        },
        {
          term: 'Refraktometer',
          definition: 'Instrumen optik atau digital yang mengukur nilai Brix cairan dengan membaca bagaimana cahaya membelok (refraksi) melalui sampel. Penting untuk konsistensi sorbet.',
        },
        {
          term: 'Sirup Gula',
          definition: 'Campuran 50/50 berdasarkan berat sukrosa dan air, dipanaskan hingga larut. Media standar untuk menambahkan gula ke basis sorbet.',
        },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
