import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Diagnosis dan Konservasi Pisang: Panduan Ilmiah";
const description = "Analisis status kematangan pisang Anda dengan presisi ilmiah. Pelajari teknik konservasi, biokimia etilen, dan optimalisasi nutrisi.";
const faq = [
  {
    question: 'Mengapa pisang menjadi hitam di dalam kulkas?',
    answer: 'Suhu dingin merusak dinding sel kulit, melepaskan enzim yang mengoksidasi fenol dan menciptakan polifenol hitam. Namun, bagian dalamnya biasanya tetap kokoh dan manis lebih lama daripada jika diletakkan di luar.',
  },
  {
    question: 'Bagaimana cara mematangkan pisang dengan cepat?',
    answer: 'Masukkan pisang ke dalam kantong kertas tertutup bersama apel atau tomat. Buah-buah ini mengeluarkan gas etilen yang mempercepat kematangan. Jika Anda sangat terburu-buru, Anda bisa memasukkannya ke dalam oven dengan suhu rendah selama beberapa menit.',
  },
  {
    question: 'Apakah aman memakan pisang dengan bintik-bintik cokelat?',
    answer: 'Ya, sangat aman. Bahkan, bintik-bintik tersebut menandakan bahwa pati telah berubah menjadi gula, membuatnya lebih manis dan mudah dicerna. Buang saja jika terdapat jamur, berbau tidak sedap, atau terlalu lembek.',
  },
  {
    question: 'Apa itu etilen?',
    answer: 'Etilen adalah hormon tumbuhan berbentuk gas yang mengatur pertumbuhan dan kematangan. Pisang adalah buah klimakterik, yang berarti ia terus memproduksi etilen dan terus matang setelah dipanen.',
  },
];
const howTo = [
  {
    name: 'Amati warnanya',
    text: 'Periksa warna kulit dengan teliti, dari hijau hingga cokelat tua, untuk menentukan status kematangan saat ini.',
  },
  {
    name: 'Gunakan simulator',
    text: 'Geser indikator kematangan untuk melihat prediksi akurat kapan tahap berikutnya akan tercapai.',
  },
  {
    name: 'Sesuaikan kondisi',
    text: 'Ubah suhu dan kelembapan untuk melihat bagaimana pengaruhnya terhadap kecepatan kematangan.',
  },
  {
    name: 'Terapkan konservasi',
    text: 'Ikuti rekomendasi spesifik untuk konservasi dan akselerasi berdasarkan status saat ini.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
};

export const content: ToolLocaleContent = {
  slug: 'diagnosis-pisang',
  title: 'Diagnosis dan Konservasi Pisang: Panduan Ilmiah',
  description: 'Analisis status kematangan pisang Anda dengan presisi ilmiah. Pelajari teknik konservasi, biokimia etilen, dan optimalisasi nutrisi.',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  ui: {
    ripesnessLabel: 'Status Kematangan',
    nextStageLabel: 'Tahap Berikutnya dalam',
    daysUnit: 'Hari',
    tempLabel: 'Suhu',
    humidityLabel: 'Kelembapan',
    partnerToggleTitle: 'Pendampingan Klimakterik',
    partnerToggleSubtitle: 'Efek etilen eksternal',
    conservationTitle: 'Konservasi',
    accelerationTitle: 'Akselerasi',
    stage1Name: 'Hijau Zamrud',
    stage1Desc: 'Kandungan pati resisten maksimal. Sangat kokoh.',
    stage1Conservation: 'Suhu ruangan (18-20°C). Hindari dingin (<12°C).',
    stage1Acceleration: 'Kantong kertas dengan apel atau tomat matang.',
    stage2Name: 'Kuning Cerah',
    stage2Desc: 'Keseimbangan sempurna antara kekokohan dan rasa manis awal.',
    stage2Conservation: 'Tempat sejuk, pisahkan dari sisir untuk menahan etilen.',
    stage2Acceleration: 'Biarkan bersatu dalam sisir dan bungkus dengan plastik.',
    stage3Name: 'Bintik Manis',
    stage3Desc: 'Puncak antioksidan. Rasa manis intens dan tekstur lembut.',
    stage3Conservation: 'Masukkan ke kulkas untuk menjaga daging buah (meskipun kulitnya menghitam).',
    stage3Acceleration: 'Suhu hangat (dekat sumber panas, tidak langsung).',
    stage4Name: 'Matang Kecokelatan',
    stage4Desc: 'Tekstur sangat lembut. Ideal untuk kue tanpa gula.',
    stage4Conservation: 'Kupas dan segera bekukan.',
    stage4Acceleration: 'Sudah mencapai titik maksimal.',
    stage5Name: 'Busuk / Terfermentasi',
    stage5Desc: 'Proses degradasi lanjut.',
    stage5Conservation: 'Tidak disarankan untuk konsumsi langsung.',
    stage5Acceleration: 'N/A',
  },
  faq: [
    {
      question: 'Mengapa pisang menjadi hitam di dalam kulkas?',
      answer: 'Suhu dingin merusak dinding sel kulit, melepaskan enzim yang mengoksidasi fenol dan menciptakan polifenol hitam. Namun, bagian dalamnya biasanya tetap kokoh dan manis lebih lama daripada jika diletakkan di luar.',
    },
    {
      question: 'Bagaimana cara mematangkan pisang dengan cepat?',
      answer: 'Masukkan pisang ke dalam kantong kertas tertutup bersama apel atau tomat. Buah-buah ini mengeluarkan gas etilen yang mempercepat kematangan. Jika Anda sangat terburu-buru, Anda bisa memasukkannya ke dalam oven dengan suhu rendah selama beberapa menit.',
    },
    {
      question: 'Apakah aman memakan pisang dengan bintik-bintik cokelat?',
      answer: 'Ya, sangat aman. Bahkan, bintik-bintik tersebut menandakan bahwa pati telah berubah menjadi gula, membuatnya lebih manis and mudah dicerna. Buang saja jika terdapat jamur, berbau tidak sedap, atau terlalu lembek.',
    },
    {
      question: 'Apa itu etilen?',
      answer: 'Etilen adalah hormon tumbuhan berbentuk gas yang mengatur pertumbuhan dan kematangan. Pisang adalah buah klimakterik, yang berarti ia terus memproduksi etilen dan terus matang setelah dipanen.',
    },
  ],
  howTo: [
    {
      name: 'Amati warnanya',
      text: 'Periksa warna kulit dengan teliti, dari hijau hingga cokelat tua, untuk menentukan status kematangan saat ini.',
    },
    {
      name: 'Gunakan simulator',
      text: 'Geser indikator kematangan untuk melihat prediksi akurat kapan tahap berikutnya akan tercapai.',
    },
    {
      name: 'Sesuaikan kondisi',
      text: 'Ubah suhu dan kelembapan untuk melihat bagaimana pengaruhnya terhadap kecepatan kematangan.',
    },
    {
      name: 'Terapkan konservasi',
      text: 'Ikuti rekomendasi spesifik untuk konservasi dan akselerasi berdasarkan status saat ini.',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Sains Kematangan Musa × paradisiaca',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pisang adalah salah satu buah yang paling banyak dikonsumsi di dunia, tetapi juga salah satu yang paling sering disalahpahami secara biologis. Berbeda dengan buah non-klimakterik, seperti jeruk atau anggur, pisang merupakan <strong>buah klimakterik</strong>. Ini berarti ia terus matang setelah dipanen, meningkatkan respirasi sel secara drastis dan memproduksi fitohormon gas yang fundamental: <strong>etilen</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Dari sudut pandang biokimia, kematangan adalah serangkaian peristiwa enzimatik. Selama proses ini, enzim seperti amilase memecah karbohidrat kompleks (pati) menjadi gula sederhana (fruktosa, glukosa, dan sukrosa). Perubahan ini tidak hanya mengubah rasa menjadi lebih manis, tetapi juga memodifikasi tekstur dengan mendegradasi pektin di dinding sel, menghasilkan konsistensi lembut dan krem yang menjadi ciri khas pisang matang.',
    },
    {
      type: 'title',
      text: 'Siklus Etilen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Etilen berfungsi sebagai sakelar biologis. Begitu buah mendeteksi konsentrasi kecil, ia mengaktifkan gen yang bertanggung jawab untuk memproduksi lebih banyak etilen, menciptakan loop umpan balik positif. Inilah sebabnya mengapa pisang yang sangat matang akan mempercepat kematangan semua tetangganya di wadah buah. Untuk memperlambat proses ini, sangat penting untuk memisahkan pisang yang sudah memiliki bintik-bintik cokelat dari yang masih hijau.',
    },
    {
      type: 'title',
      text: 'Mitos Lemari Es',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ada kepercayaan populer bahwa pisang tidak boleh masuk ke kulkas. Kenyataannya lebih kompleks: suhu dingin (di bawah 12°C) menyebabkan kerusakan akibat pendinginan pada sel-sel kulit, melepaskan enzim yang mengoksidasi fenol dan membuat kulit menjadi hitam. Namun, hal ini hanya memengaruhi estetika luar. Jika bagian dalamnya sudah mencapai kematangan yang diinginkan, suhu dingin hampir sepenuhnya menghentikan pelembekan daging buah, menjaga rasa dan tekstur bagian dalam selama beberapa hari tambahan.',
    },
    {
      type: 'title',
      text: 'Strategi Konservasi Lanjut',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Penyegelan Pedunkulus:</strong> Membungkus ujung sisir pisang dengan pembungkus plastik (film) secara drastis mengurangi pelepasan etilen, memperpanjang masa simpan komersial unit tersebut hingga 72 jam tambahan.',
    },
    {
      type: 'paragraph',
      html: '<strong>Penyuspensian Dinamis:</strong> Menggantung pisang mencegah memar akibat tekanan. Jaringan yang rusak melepaskan etilen lebih cepat, menciptakan pusat-pusat kematangan yang dipercepat dan menyebar ke seluruh buah.',
    },
    {
      type: 'paragraph',
      html: '<strong>Krioterapi (Pembekuan):</strong> Untuk pisang pada fase 4 (cokelat), pembekuan adalah pilihan terbaik. Mengupas buah sebelum dibekukan mencegah kelembapan terperangkap, menjaga kualitas serat.',
    },
    {
      type: 'title',
      text: 'Perubahan Nutrisi per Tahap',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Seiring matangnya pisang, profil nutrisinya berubah secara radikal, yang memungkinkan untuk digunakan sebagai alat diet spesifik sesuai dengan tujuan konsumen.',
    },
    {
      type: 'table',
      headers: ['Fase', 'Pati Resisten', 'Karakteristik', 'Manfaat Utama'],
      rows: [
        ['Hijau (1-2)', '~80%', 'Sangat kokoh, kandungan pati maksimal', 'Kesehatan pencernaan dan kontrol glikemik'],
        ['Kuning (3)', '~5%', 'Keseimbangan kekokohan dan rasa manis', 'Energi cepat dan vitamin B'],
        ['Berbintik (4)', 'Minimal', 'Sangat lembut, kandungan gula tinggi', 'Potensi antioksidan maksimal'],
        ['Cokelat/Busuk (5)', 'Hampir nol', 'Tekstur sangat lembek, fermentasi lanjut', 'Tidak disarankan untuk konsumsi'],
      ],
    },
    {
      type: 'title',
      text: 'Kesimpulan dan Penerapan Praktis',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Mengurangi limbah makanan:</strong> Diagnosis status pisang yang tepat memungkinkan identifikasi momen konsumsi yang optimal, mencegah kerugian buah yang berharga.',
        '<strong>Mengoptimalkan manfaat nutrisi:</strong> Dari pati resisten pada pisang hijau untuk kesehatan pencernaan, hingga antioksidan pada pisang berbintik untuk potensi antioksidan maksimal.',
        '<strong>Merencanakan konsumsi strategis:</strong> Sesuaikan penggunaan pisang berdasarkan tujuan kesehatan Anda: kontrol glikemik, energi cepat, pencernaan, atau antioksidan.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Peringatan degradasi:</strong> Faktor eksternal seperti kelembapan relatif di atas 85% atau suhu di atas 25°C dapat mempercepat degradasi secara drastis, mengubah pisang dari kondisi optimal menjadi tidak layak makan dalam hitungan jam. Simulator ini membantu Anda mengantisipasi perubahan ini dan merencanakan secara strategis.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
