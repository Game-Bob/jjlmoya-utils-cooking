import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Prediktor Pengeringan Cangkang Macaron: Kalkulator Waktu Pengeringan Berdasarkan Kelembapan & Suhu';
const description = 'Hitung dengan tepat berapa lama cangkang macaron perlu dikeringkan berdasarkan kelembapan, suhu, dan ukuran cangkang. Hindari cangkang retak dan dapatkan pied yang sempurna setiap saat.';

const faq = [
  {
    question: 'Mengapa cangkang macaron perlu dikeringkan sebelum dipanggang?',
    answer: 'Pengeringan membentuk lapisan tipis di permukaan cangkang macaron. Lapisan ini sangat penting karena menjebak uap saat pemanggangan, memaksanya keluar ke bawah melalui pied alih-alih memecahkan bagian atas. Tanpa pengeringan yang tepat, macaron akan retak, tidak memiliki pied, atau matang tidak merata.',
  },
  {
    question: 'Bagaimana kelembapan memengaruhi waktu pengeringan macaron?',
    answer: 'Kelembapan adalah faktor paling kritis. Saat kelembapan tinggi (di atas 60%), udara sudah jenuh dengan uap air, sehingga memperlambat penguapan dari permukaan cangkang secara drastis. Waktu pengeringan bisa dua hingga tiga kali lipat dibandingkan hari yang kering. Dalam kondisi sangat kering (di bawah 30%), cangkang bisa terlalu kering dan membentuk lapisan tebal yang menghambat pengembangan.',
  },
  {
    question: 'Berapa suhu ideal untuk mengeringkan cangkang macaron?',
    answer: 'Suhu ruangan antara 20°C dan 25°C adalah yang paling ideal. Udara yang lebih hangat menampung lebih banyak uap air dan mempercepat pengeringan, tetapi terlalu panas (di atas 30°C) dapat menyebabkan cangkang mengering tidak merata, dengan bagian luar keras dan bagian dalam basah. Suhu sejuk di bawah 18°C secara signifikan memperlambat pengeringan.',
  },
  {
    question: 'Bagaimana ukuran cangkang memengaruhi waktu pengeringan?',
    answer: 'Cangkang yang lebih besar memiliki luas permukaan dan volume yang lebih besar, sehingga membutuhkan waktu pengeringan yang lebih lama secara proporsional. Macaron mini 2cm mungkin kering dalam 15 menit, sementara macaron besar 5cm bisa memakan waktu lebih dari satu jam. Hubungan ini tidak linear: menggandakan diameter kira-kira melipatigakan waktu pengeringan karena hubungan kuadrat-kubik antara luas permukaan dan volume.',
  },
];

const howTo = [
  {
    name: 'Cetak cangkang macaron Anda',
    text: 'Cetak bulatan berukuran seragam di atas kertas roti atau alas silikon. Gunakan templat agar ukuran konsisten.',
  },
  {
    name: 'Ukur lingkungan Anda',
    text: 'Periksa kelembapan dan suhu dapur Anda menggunakan higrometer dan termometer.',
  },
  {
    name: 'Masukkan nilai ke kalkulator',
    text: 'Masukkan kelembapan, suhu, dan diameter cangkang untuk mendapatkan perkiraan waktu pengeringan.',
  },
  {
    name: 'Uji lapisan kulit',
    text: 'Setelah waktu yang diprediksi, sentuh permukaan cangkang dengan lembut. Seharusnya terasa kering dan doff, tidak lengket. Jika menempel di jari, beri waktu lebih lama.',
  },
  {
    name: 'Panggang saat siap',
    text: 'Begitu lapisan kulit terbentuk, segera panggang. Jangan biarkan cangkang terlalu lama setelah kering karena bisa terlalu kering dan retak.',
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
  slug: 'prediktor-pengeringan-makaron',
  title: 'Prediktor Pengeringan Cangkang Macaron',
  description: 'Hitung dengan tepat berapa lama cangkang macaron perlu dikeringkan berdasarkan kelembapan, suhu, dan ukuran cangkang. Hindari retak dan dapatkan pied sempurna setiap saat.',
  faqTitle: 'Pertanyaan Umum',
  ui: {
    humidityLabel: 'Kelembapan Ruangan',
    humidityUnit: '%',
    tempLabel: 'Suhu Ruangan',
    tempUnit: '°C',
    sizeLabel: 'Diameter Cangkang',
    sizeUnit: 'cm',
    dryingTimeLabel: 'Perkiraan Waktu Pengeringan',
    minutesUnit: 'menit',
    readinessLabel: 'Kondisi Permukaan',
    skinStatusReady: 'Siap Dipanggang',
    skinStatusForming: 'Membentuk Kulit',
    skinStatusSticky: 'Masih Lengket',
    skinStatusOverDry: 'Terlalu Kering',
    humidityTagHigh: 'Kelembapan tinggi',
    humidityTagNormal: 'Kelembapan normal',
    humidityTagLow: 'Kelembapan rendah',
    humidityDescHigh: 'Hari yang sangat lembap. Pengeringan akan memakan waktu jauh lebih lama. Gunakan dehumidifier atau ruangan ber-AC jika memungkinkan.',
    humidityDescNormal: 'Kelembapan sedang. Pengeringan seharusnya berjalan dengan kecepatan normal dengan pembentukan kulit yang baik.',
    humidityDescLow: 'Udara sangat kering. Cangkang bisa terlalu cepat kering dan berisiko over-dry. Pantau dengan cermat dan kurangi waktu pengeringan.',
    tempTagHot: 'Ruangan hangat',
    tempTagIdeal: 'Suhu ruang ideal',
    tempTagCool: 'Ruangan sejuk',
    sizeTagMini: 'Mini',
    sizeTagStandard: 'Standar',
    sizeTagLarge: 'Besar',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Ilmu di Balik Pengeringan Cangkang Macaron: Mengapa Pembentukan Kulit Menentukan Keberhasilan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Macaron adalah salah satu pastry paling menantang secara teknis dalam patisserie Prancis. Kubah halus dan dasar berkerut khasnya, yang dikenal sebagai "pied" atau "kaki", sepenuhnya bergantung pada satu langkah kritis: mengeringkan cangkang yang sudah dicetak sebelum dipanggang. Periode istirahat ini memungkinkan lapisan protein tipis terbentuk di permukaan setiap cangkang. Selama pemanggangan, lapisan ini menjebak uap yang mengembang di dalam cangkang, memaksanya turun dan keluar melalui dasar, yang mengangkat cangkang dan menciptakan pied yang didambakan. Tanpa pengeringan yang cukup, uap menerobos bagian atas, menyebabkan retakan. Dengan pengeringan berlebihan, lapisan menjadi terlalu kaku dan cangkang tidak dapat mengembang dengan baik.',
    },
    {
      type: 'title',
      text: 'Kelembapan dan Peran Dominannya dalam Kinetika Pengeringan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kelembapan relatif adalah variabel paling berpengaruh dalam pengeringan cangkang macaron. Pada kelembapan relatif 50%, cangkang standar 3cm biasanya membutuhkan 30-40 menit untuk membentuk lapisan yang memadai. Pada kelembapan 70%, ini bisa memanjang hingga 60-90 menit. Pada kelembapan 30%, pengeringan bisa selesai hanya dalam 15-20 menit. Fisika di baliknya sederhana: laju penguapan sebanding dengan defisit tekanan uap antara permukaan cangkang dan udara sekitarnya. Udara lembap memiliki defisit yang lebih kecil, sehingga memperlambat penguapan. Patisserie profesional mengontrol kelembapan dengan cermat, sering kali memiliki ruangan khusus macaron pada kelembapan relatif 40-50%.',
    },
    {
      type: 'title',
      text: 'Tabel Referensi Waktu Pengeringan Berdasarkan Kelembapan dan Ukuran Cangkang',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Kelembapan', '2cm Mini', '3cm Standar', '4cm Besar', '5cm Ekstra Besar'],
      rows: [
        ['30% (Sangat Kering)', '10-15 mnt', '15-20 mnt', '25-30 mnt', '35-45 mnt'],
        ['40% (Kering)', '15-20 mnt', '20-30 mnt', '30-40 mnt', '45-60 mnt'],
        ['50% (Sedang)', '20-25 mnt', '30-40 mnt', '40-55 mnt', '55-75 mnt'],
        ['60% (Lembap)', '25-35 mnt', '40-55 mnt', '55-75 mnt', '75-100 mnt'],
        ['70% (Sangat Lembap)', '35-50 mnt', '55-75 mnt', '75-100 mnt', '100-130 mnt'],
        ['80% (Sangat Lembap Ekstrem)', '50-70 mnt', '75-100 mnt', '100-140 mnt', '130-180 mnt'],
      ],
    },
    {
      type: 'title',
      text: 'Peran Suhu dalam Laju Penguapan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Suhu memengaruhi pengeringan melalui dua mekanisme. Pertama, udara yang lebih hangat dapat menampung lebih banyak uap air, meningkatkan laju evaporasi potensial dari permukaan cangkang. Kedua, energi kinetik molekuler meningkat seiring suhu, mempercepat laju molekul air keluar dari fase cair. Namun, suhu juga memengaruhi stabilitas meringue. Di atas 28°C, protein putih telur dalam meringue mungkin mulai tidak stabil, menyebabkan struktur yang melemah. Rentang ideal untuk pengeringan macaron adalah 20-25°C. Di bawah 18°C, laju penguapan melambat hingga pengeringan menjadi tidak praktis untuk cangkang ukuran standar.',
    },
    {
      type: 'title',
      text: 'Ukuran Cangkang dan Hukum Kuadrat-Kubik Pengeringan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Diameter cangkang memiliki efek non-linear pada waktu pengeringan karena hubungan kuadrat-kubik antara luas permukaan dan volume. Macaron mini 2cm memiliki sekitar 3,1 cm² luas permukaan untuk 0,5 cm³ volume, memberikan rasio permukaan-terhadap-volume yang menguntungkan sekitar 6:1. Macaron besar 5cm memiliki sekitar 19,6 cm² permukaan untuk 8,2 cm³ volume, rasio hanya 2,4:1. Ini berarti cangkang yang lebih besar memiliki luas permukaan yang secara proporsional lebih sedikit untuk mengeluarkan kelembapan, sehingga secara dramatis meningkatkan waktu pengeringan. Kalkulator ini memodelkannya menggunakan hubungan hukum pangkat yang dikalibrasi dengan data empiris dari dapur pastry profesional.',
    },
    {
      type: 'title',
      text: 'Mengatasi Masalah Umum Kegagalan Pengeringan Macaron',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Cangkang retak tanpa pied',
      html: 'Kegagalan macaron yang paling umum. Ini hampir selalu menunjukkan bahwa cangkang tidak cukup lama dikeringkan sebelum dipanggang. Lapisan permukaan terlalu lemah untuk menahan uap yang mengembang, yang kemudian menerobos bagian atas. <strong>Solusi: Tambah waktu pengeringan 10-15 menit dan uji permukaan dengan sentuhan ujung jari ringan sebelum memanggang.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Pied miring atau tidak rata',
      html: 'Pengeringan yang tidak merata adalah penyebabnya. Jika satu sisi loyang lebih cepat kering daripada sisi lainnya, pied akan naik tidak merata. Ini sering terjadi ketika loyang diletakkan di dekat jendela, kipas angin, atau sumber panas. <strong>Solusi: Putar loyang selama pengeringan dan pastikan sirkulasi udara merata di sekitar semua cangkang.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Cangkang kopong setelah dipanggang',
      html: 'Cangkang kopong bisa terjadi akibat pengeringan berlebihan, yang menciptakan lapisan yang terlalu tebal dan kaku. Cangkang tidak dapat mengembang dengan baik selama pemanggangan, meninggalkan celah udara di dalamnya. <strong>Solusi: Kurangi waktu pengeringan dan periksa pembentukan kulit lebih awal. Permukaan harus terasa kering tetapi masih sedikit memberi saat ditekan dengan lembut.</strong>',
    },
    {
      type: 'title',
      text: 'Tips Profesional dari Chef Patisserie',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Teknik Oven Drying untuk Hari yang Lembap',
      html: 'Pada hari yang sangat lembap, chef profesional menggunakan teknik yang disebut "oven drying". Panaskan oven ke pengaturan terendah (biasanya 50°C), matikan, lalu letakkan macaron yang sudah dicetak di dalamnya dengan pintu sedikit terbuka selama 5-10 menit. Ini menciptakan iklim mikro yang hangat dan rendah kelembapan yang mempercepat pembentukan kulit tanpa mulai memanggang cangkang.',
    },
    {
      type: 'tip',
      title: 'Tes Sentuh untuk Kulit yang Sempurna',
      html: 'Tes definitif untuk kesiapan macaron: sentuh permukaan satu cangkang dengan lembut menggunakan ujung jari yang bersih dan kering. Jika adonan menempel di jari, perlu waktu lebih. Jika permukaan terasa kering dan doff serta tidak lengket, kulit sudah terbentuk. Jika permukaan terasa keras dan kasar tanpa elastisitas, cangkang sudah terlalu kering.',
    },
    {
      type: 'tip',
      title: 'Kontrol Kelembapan Tanpa Peralatan',
      html: 'Jika tidak memiliki dehumidifier, letakkan mangkuk berisi beras mentah atau paket silica gel di dekat macaron yang sedang dikeringkan. Desikan ini menyerap kelembapan sekitar, menciptakan iklim mikro yang lebih kering di sekitar loyang. Di dapur profesional tanpa kontrol iklim, trik sederhana ini dapat memotong waktu pengeringan hingga 30-40% pada hari yang lembap.',
    },
    {
      type: 'title',
      text: 'Faktor Penuaan Putih Telur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Putih telur yang dituakan menghasilkan meringue yang lebih stabil dan mengering lebih terprediksi. Putih telur segar mengandung lebih banyak air dan struktur protein yang kurang elastis, menyebabkan meringue yang lebih lemah dan membutuhkan waktu lebih lama untuk membentuk kulit yang tepat. Resep profesional menganjurkan putih telur dituakan 24-72 jam pada suhu ruang atau 3-5 hari di dalam kulkas. Putih telur yang dituakan kehilangan sekitar 10-15% kandungan airnya melalui penguapan, mengonsentrasikan protein dan meningkatkan kekuatan meringue.',
    },
    {
      type: 'title',
      text: 'Referensi Cepat: Waktu Pengeringan untuk Kondisi Umum',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Waktu pengeringan umum untuk cangkang macaron standar 3cm',
      items: [
        'Dapur ber-AC (22°C, kelembapan 45%): 25-30 menit',
        'Hari musim semi, jendela terbuka (20°C, kelembapan 55%): 35-45 menit',
        'Hari musim panas, tanpa AC (28°C, kelembapan 70%): 60-90 menit  -  gunakan teknik oven drying',
        'Rumah berpemanas musim dingin (21°C, kelembapan 30%): 15-20 menit  -  waspadai pengeringan berlebihan',
        'Hari hujan (18°C, kelembapan 80%): 75-100 menit  -  sangat disarankan menggunakan dehumidifier',
        'Dapur pastry profesional (22°C, kelembapan 45%, konveksi): 20-25 menit',
      ],
    },
    {
      type: 'paragraph',
      html: 'Setiap lingkungan dapur itu unik. Kalkulator ini memperhitungkan tiga variabel kritis  -  kelembapan, suhu, dan ukuran cangkang  -  untuk memberi Anda prediksi waktu pengeringan yang dipersonalisasi. Masukkan kondisi Anda dan mencetaklah dengan percaya diri.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
