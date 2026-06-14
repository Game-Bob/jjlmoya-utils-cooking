import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Kalkulator Pektin dan Pengental Selai untuk Gel Sempurna Setiap Saat';
const description = 'Hitung dengan tepat berapa banyak pektin, asam sitrat, dan gula yang dibutuhkan buah Anda untuk mencapai kekentalan selai yang sempurna. Hindari selai yang terlalu cair atau terlalu kenyal dengan perhitungan kimia yang presisi.';

const faq = [
  {
    question: 'Mengapa pektin membuat selai mengental?',
    answer: 'Pektin adalah polisakarida alami yang ditemukan di dinding sel buah. Ketika dipanaskan dengan gula dan asam (pH 2,8-3,5), molekul pektin membentuk jaringan gel tiga dimensi yang menjebak air dan gula, menciptakan tekstur selai yang mudah dioles.',
  },
  {
    question: 'Apa perbedaan antara pektin HM dan LM?',
    answer: 'Pektin High Methoxyl (HM) membutuhkan setidaknya 60% gula dan pH di bawah 3,5 untuk mengental - ideal untuk selai tradisional. Pektin Low Methoxyl (LM) mengental melalui ion kalsium alih-alih gula, memungkinkan selai rendah gula atau bebas gula.',
  },
  {
    question: 'Mengapa selai saya kadang-kadang menjadi cair?',
    answer: 'Selai yang cair biasanya disebabkan oleh pektin yang tidak mencukupi (buah secara alami kekurangan pektin), asam yang tidak mencukupi (pH terlalu tinggi untuk pengentalan), atau gula yang tidak cukup (untuk pektin HM). Pengenceran berlebihan dengan air atau pemasakan yang kurang juga dapat mencegah pengentalan.',
  },
  {
    question: 'Bisakah saya menggunakan jus lemon sebagai pengganti bubuk asam sitrat?',
    answer: 'Ya. Kalkulator ini mengonversi asam sitrat menjadi setara jus lemon. Sekitar 25 ml jus lemon memberikan keasaman yang sama dengan 1 g asam sitrat. Jus lemon juga menambahkan rasa segar pada selai.',
  },
  {
    question: 'Buah apa yang secara alami tinggi pektin?',
    answer: 'Apel, quince, blackberry, cranberry, dan gooseberry secara alami kaya akan pektin dan sering kali tidak memerlukan pektin tambahan. Buah yang belum matang juga mengandung lebih banyak pektin daripada buah yang sudah matang penuh.',
  },
];

const howTo = [
  {
    name: 'Pilih buah Anda',
    text: 'Pilih buah yang akan Anda gunakan untuk membuat selai. Setiap buah memiliki tingkat pektin dan keasaman alami yang berbeda yang menentukan bahan tambahan apa yang diperlukan.',
  },
  {
    name: 'Timbang buah yang sudah disiapkan',
    text: 'Masukkan berat buah yang sudah dibersihkan dan dipotong dalam gram. Penimbangan yang akurat sangat penting untuk pembuatan selai yang presisi.',
  },
  {
    name: 'Pilih jenis pektin Anda',
    text: 'Pilih Klasik (HM) untuk selai tradisional tinggi gula, atau Rendah Gula (LM) jika Anda ingin selai yang lebih sehat dengan gula rendah yang diaktifkan oleh kalsium.',
  },
  {
    name: 'Tinjau resep sempurna Anda',
    text: 'Kalkulator menampilkan gram tepat bubuk pektin, asam sitrat (atau jus lemon), dan gula yang dibutuhkan. Tambahkan ini selama memasak untuk hasil yang pasti mengental.',
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
  slug: 'kalkulator-pektin-selai',
  title: 'Kalkulator Pektin & Pengental Selai',
  description: 'Hitung dengan tepat berapa banyak pektin, asam sitrat, dan gula yang dibutuhkan buah Anda untuk mencapai kekentalan selai yang sempurna - tidak ada lagi selai yang terlalu cair atau terlalu kenyal.',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  ui: {
    title: 'Kalkulator Pektin & Pengental Selai',
    subtitle: 'Kimia gel presisi untuk selai yang sempurna',
    fruitLabel: 'Pilih Buah Anda',
    allFruits: 'Semua',
    highPectin: 'Pektin Tinggi',
    mediumPectin: 'Pektin Sedang',
    lowPectin: 'Pektin Rendah',
    weightLabel: 'Berat Buah',
    weightPlaceholder: 'mis. 1000',
    weightUnitMetric: 'g',
    weightUnitImperial: 'oz',
    pectinTypeLabel: 'Jenis Pektin',
    pectinHM: 'Klasik (HM)',
    pectinLM: 'Rendah Gula (LM)',
    sugarModeLabel: 'Mode Gula',
    sugarModeAuto: 'Otomatis',
    sugarModeManual: 'Manual',
    sugarLabel: 'Berat Gula',
    sugarPlaceholder: 'mis. 650',
    recipeTitle: 'Resep',
    pectinNeeded: 'Pektin',
    citricAcidNeeded: 'Asam Sitrat',
    lemonJuiceNeeded: 'Jus Lemon',
    sugarNeeded: 'Gula',
    totalYield: 'Total Hasil',
    sugarPercent: 'Gula',
    sugarLow: 'Rendah',
    sugarIdeal: 'Ideal',
    sugarHigh: 'Tinggi',
    sugarOfFruit: 'dari berat buah',
    sugarOfTotal: 'dari total',
    statusPerfect: 'Gel Sempurna',
    statusPerfectDesc: 'Rasio Anda seimbang. Selai akan mengental dengan indah dengan tekstur halus, mudah dioles, dan kilau cemerlang.',
    statusSlightlyThin: 'Sedikit Cair',
    statusSlightlyThinDesc: 'Selai mungkin mengental dengan lembut. Pertimbangkan untuk menambahkan lebih banyak pektin atau mengurangi kadar air untuk gel yang lebih kencang.',
    statusTooThin: 'Terlalu Cair - Risiko Selai Encer',
    statusTooThinDesc: 'Tanpa penyesuaian, selai ini kemungkinan akan tetap cair. Tingkatkan gula (untuk HM) atau tambahkan lebih banyak pektin.',
    statusTooStiff: 'Terlalu Kaku',
    statusTooStiffDesc: 'Gel mungkin menjadi kenyal. Kurangi pektin setengahnya atau tingkatkan sedikit berat buah.',
    dropTestTitle: 'Tes Piring Dingin',
    dropTestHow: 'Teteskan pada piring dingin',
    dropStatusLabel: 'Hasil',
    dropTestPerfect: 'Akan mengental. Tetesan berkerut dan bertahan',
    dropTestThin: 'Cair. Tetesan meluncur turun dari piring',
    dropTestStiff: 'Terlalu kaku. Hampir tidak bergerak',
    dropPlateLabel: 'piring',
    dropDropLabel: 'tetesan',
    sugarAutoHint: 'dihitung otomatis',
    sugarManualHint: 'masukkan jumlah',
    unitLabel: 'Sistem Pengukuran',
    metricLabel: 'Metrik (g)',
    imperialLabel: 'Imperial (oz)',
    disclaimer: 'Timbang semua bahan dengan timbangan dapur digital untuk hasil terbaik. Pengukuran volumetrik tidak dapat diandalkan untuk pembuatan selai.',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Ilmu Lengkap Pengentalan Selai: Keseimbangan Pektin, Asam, dan Gula',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pembuatan selai adalah perpotongan yang tepat antara kimia dan memasak. Pada intinya, transformasi bubur buah menjadi gel yang kencang dan dapat dioles bergantung pada keseimbangan yang tepat dari tiga molekul: <strong>pektin</strong> (agen pengental), <strong>asam</strong> (katalis yang mengaktifkan pektin), dan <strong>gula</strong> (agen dehidrasi yang menarik air dari rantai pektin). Tanpa rasio yang tepat, Anda akan mendapatkan sup buah atau balok kenyal.',
    },
    {
      type: 'title',
      text: 'Bagaimana Pektin Membentuk Jaringan Gel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pektin adalah polisakarida kompleks yang terutama terdiri dari unit asam galakturonat, ditemukan di lamela tengah dinding sel tanaman. Dalam keadaan alaminya, molekul pektin bermuatan negatif dan saling tolak, tetap terlarut dalam air buah. Untuk membentuk gel, tiga kondisi harus terpenuhi secara bersamaan: (1) cukup gula harus ada untuk bersaing mendapatkan molekul air, mendehidrasi untaian pektin; (2) pH harus turun di bawah 3,5, menetralkan muatan negatif melalui protonasi gugus karboksil; dan (3) suhu harus melebihi 104-105°C untuk melarutkan dan mengaktifkan pektin sepenuhnya. Ketika kondisi ini selaras, untaian pektin membentuk zona persimpangan - wilayah di mana rantai berasosiasi melalui ikatan hidrogen dan interaksi hidrofobik - menciptakan jaringan tiga dimensi seperti spons yang terus menerus yang menjebak jus buah dan sirup gula.',
    },
    {
      type: 'title',
      text: 'Pektin High Methoxyl (HM) vs. Low Methoxyl (LM)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pektin diklasifikasikan berdasarkan derajat esterifikasinya (DE), yaitu persentase gugus karboksil yang diesterifikasi dengan metanol. <strong>Pektin High Methoxyl (HM)</strong> (DE > 50%) membutuhkan minimal 55-65% padatan terlarut (gula) dan pH antara 2,8 dan 3,5 untuk membentuk gel. Ini adalah pektin klasik yang digunakan dalam resep selai tradisional. Tanpa cukup gula, pektin HM membentuk gel yang lemah atau tidak ada sama sekali. <strong>Pektin Low Methoxyl (LM)</strong> (DE < 50%) mengental melalui mekanisme yang berbeda: ia berikatan silang melalui ion kalsium divalen (Ca²⁺) yang menjembatani antara gugus karboksil bebas. Pektin LM dapat mengental dengan sedikit atau tanpa gula tambahan, membuatnya ideal untuk selai rendah kalori, ramah diabetes, atau dengan pemanis alami. Beberapa pektin LM juga mentolerir rentang pH yang lebih luas hingga 5,5, berguna untuk buah rendah asam seperti ara dan pir.',
    },
    {
      type: 'title',
      text: 'Kandungan Pektin Alami di Berbagai Varietas Buah',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tidak semua buah diciptakan sama dalam hal pektin. Buah-buahan terbagi dalam tiga kategori berdasarkan tingkat pektin dan asam alaminya. Memahami di mana buah Anda berada pada spektrum ini menentukan apakah Anda perlu menambahkan bubuk pektin atau asam sitrat.',
    },
    {
      type: 'table',
      headers: ['Tingkat Pektin', 'Tingkat Keasaman', 'Contoh Buah', 'Pektin Tambahan Diperlukan'],
      rows: [
        ['Tinggi', 'Tinggi', 'Apel, Cranberry, Gooseberry', '0% (tidak ada)'],
        ['Tinggi', 'Sedang/Rendah', 'Quince, Blackberry', '0% (tidak ada)'],
        ['Sedang', 'Tinggi', 'Raspberry, Loganberry', '0,3% dari berat buah'],
        ['Sedang', 'Sedang', 'Plum, Aprikot', '0,3% dari berat buah'],
        ['Sedang', 'Rendah', 'Blueberry', '0,3% dari berat buah'],
        ['Rendah', 'Tinggi', 'Ceri, Anggur', '0,6% dari berat buah'],
        ['Rendah', 'Sedang', 'Persik, Mangga', '0,6% dari berat buah'],
        ['Rendah', 'Rendah', 'Stroberi, Pir, Ara', '0,6% dari berat buah'],
      ],
    },
    {
      type: 'title',
      text: 'Peran Penting pH dalam Pengentalan Selai',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'pH campuran selai bisa dibilang merupakan variabel yang paling sering diabaikan dalam pengawetan rumahan. Pada pH di atas 3,8, gugus karboksil pada pektin tetap terionisasi (bermuatan negatif), menciptakan tolakan elektrostatik yang mencegah pembentukan gel terlepas dari berapa banyak gula atau pektin yang Anda tambahkan. Ketika pH turun di bawah 3,5 melalui penambahan asam sitrat atau jus lemon, gugus-gugus ini menjadi terprotonasi, memungkinkan pembentukan ikatan hidrogen antara rantai pektin yang berdekatan. Zona pengentalan optimal adalah antara pH 2,8 dan 3,2. Di bawah pH 2,8, gel menjadi rapuh dan mungkin menunjukkan sineresis (cairan yang menangis). Di atas pH 3,5, sineresis juga terjadi, dan gel terlalu lemah. Inilah mengapa buah rendah asam seperti stroberi dan ara hampir selalu membutuhkan asam sitrat tambahan - pH alami mereka terlalu tinggi untuk mengaktifkan pektin dengan benar.',
    },
    {
      type: 'title',
      text: 'Konsentrasi Gula dan Pengaruhnya terhadap Kekuatan Gel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gula memiliki dua fungsi dalam selai pektin HM. Pertama, gula sangat higroskopis - ia bersaing ketat dengan pektin untuk molekul air, menarik lapisan hidrasi dari untaian pektin dan memaksa mereka untuk berinteraksi satu sama lain. Kedua, gula menaikkan titik didih campuran, memungkinkan selai mencapai titik pengentalan 104-105°C. Pada konsentrasi gula 65%, rantai pektin cukup terdehidrasi untuk membentuk gel yang kuat. Di bawah 60%, gel melemah secara linear. Di atas 68%, selai dapat mengkristal saat mendingin karena gula melebihi batas kelarutannya. Untuk selai pektin LM, gula hanya berperan sebagai perasa karena pengentalan bergantung pada jembatan kalsium. Kandungan gula bisa serendah 5-10% dalam selai pektin LM yang dimaniskan dengan pemanis non-nutritif.',
    },
    {
      type: 'title',
      text: 'Asam Sitrat vs. Jus Lemon: Konversi dan Praktik Terbaik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Asam sitrat (C₆H₈O₇) adalah asam utama yang digunakan dalam pembuatan selai komersial karena terstandarisasi, tidak berasa, dan presisi. Jus lemon mengandung sekitar 5% asam sitrat berdasarkan berat, ditambah asam malat dan asam askorbat (vitamin C). <strong>1 gram asam sitrat murni kira-kira setara dengan 25 ml jus lemon segar</strong> dalam hal kekuatan menurunkan pH. Namun, jus lemon juga menambah volume cairan, yang harus diperhitungkan dalam total kadar air. Untuk hasil yang paling konsisten, gunakan bubuk asam sitrat yang dilarutkan dalam sedikit air. Saat menggunakan jus lemon, perhitungkan tambahan 20-30 ml cairan yang perlu dididihkan untuk mencapai titik pengentalan.',
    },
    {
      type: 'title',
      text: 'Tes Piring Dingin: Metode Visual untuk Menentukan Titik Pengentalan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tes piring dingin tradisional (juga disebut tes kerut atau tes piring) tetap menjadi salah satu metode paling andal untuk pembuat selai rumahan. Letakkan piring keramik kecil di dalam freezer selama 10 menit sebelum Anda mulai memasak. Ketika Anda yakin selai telah mencapai titik pengentalannya, teteskan satu sendok teh selai panas ke piring dingin dan biarkan mendingin selama 30 detik. Dorong tepi tetesan dengan ujung jari Anda: jika permukaannya berkerut dengan jelas dan tetesan mempertahankan bentuknya, titik gel telah tercapai. Jika mengalir bebas, lanjutkan merebus selama 2-3 menit dan uji lagi. Kalkulator ini mensimulasikan tes itu secara visual, menunjukkan kepada Anda apakah rasio resep Anda akan lulus tes piring bahkan sebelum Anda mulai memasak.',
    },
    {
      type: 'title',
      text: 'Pemecahan Masalah: Mengapa Selai Gagal dan Cara Memperbaikinya',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Selai cair (gagal mengental setelah dingin):</strong> Penyebab paling umum adalah perebusan yang tidak cukup - campuran tidak pernah mencapai 104-105°C. Rebus kembali selai, tambahkan 1-2 g asam sitrat per kg buah dan uji dengan metode piring dingin. Sebagai alternatif, larutkan 5 g bubuk pektin dalam air dingin, aduk ke dalam selai saat mendidih, dan masak selama 2 menit tambahan.',
        '<strong>Selai kenyal atau terlalu kaku:</strong> Terlalu banyak pektin yang ditambahkan relatif terhadap berat buah, atau selai direbus terlalu lama melebihi 106°C, merusak jaringan pektin menjadi struktur yang kencang dan rapuh. Untuk menyelamatkan, panaskan kembali perlahan dengan 100-200 ml jus apel atau air untuk mengencerkan konsentrasi pektin.',
        '<strong>Sineresis (air menangis dari gel):</strong> Ini menunjukkan asam berlebihan (pH di bawah 2,8) atau gula di atas 68%, yang keduanya menyebabkan jaringan pektin berkontraksi dan mengeluarkan air. Tambahkan sedikit soda kue (natrium bikarbonat) untuk menaikkan pH secara bertahap.',
        '<strong>Kristalisasi (tekstur berpasir):</strong> Konsentrasi gula melebihi kelarutan, atau kristal gula yang tidak larut bertindak sebagai tempat nukleasi. Aduk terus-menerus selama perebusan akhir dan tambahkan 1 sendok makan sirup jagung atau glukosa, yang menghambat kristalisasi.',
        '<strong>Jamur di permukaan selama penyimpanan:</strong> Selai kurang matang (tidak mencapai suhu steril), mengandung terlalu sedikit gula (di bawah 60% untuk pektin HM), atau stoples tidak disterilkan dengan benar. Selalu gunakan stoples yang disterilkan dan proses dalam penangas air selama 10 menit.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
