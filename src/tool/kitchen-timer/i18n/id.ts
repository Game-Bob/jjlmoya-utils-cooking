import type { ToolLocaleContent } from '../../../types';

const title = "Pengatur Waktu Dapur Ganda";
const description = "Kelola beberapa waktu memasak secara bersamaan. Alarm independen, ideal untuk koki dan organisasi dapur (Mise en Place).";
const faq = [
  {
    question: 'Berapa banyak timer yang bisa saya buat?',
    answer: 'Tak terbatas. Tambahkan sebanyak yang Anda butuhkan dengan tombol "+". Ideal untuk memasak beberapa hidangan sekaligus: merebus pasta, mereduksi saus, mendiamkan daging, dan oven yang menyala – semuanya sekaligus.',
  },
  {
    question: 'Mengapa waktu istirahat penting untuk daging?',
    answer: 'Saat Anda memotong daging yang baru saja diangkat dari api, sarinya akan keluar ke piring. Jika didiamkan 5-10 menit, serat-seratnya akan rileks dan sarinya akan terdistribusi kembali. Hasilnya: daging yang juicy, bukan kering.',
  },
  {
    question: 'Apakah ini berfungsi dengan layar terkunci?',
    answer: 'Ya, tetapi Anda perlu memberikan izin notifikasi. Timer tetap berjalan di latar belakang dan akan memberi tahu Anda dengan suara dan notifikasi browser meskipun Anda berpindah tab atau mengunci ponsel.',
  },
  {
    question: 'Apa itu "Zona Bahaya" makanan?',
    answer: 'Antara 5°C dan 65°C bakteri berkembang biak dengan cepat. Makanan matang tidak boleh berada di zona ini lebih dari 2 jam (1 jam jika suhu >30°C). Gunakan timer untuk memantau pendinginan.',
  },
];
const howTo = [
  {
    name: 'Buat beberapa timer',
    text: 'Gunakan tombol "+" untuk menambah timer sebanyak yang Anda butuhkan untuk mengatur berbagai hidangan.',
  },
  {
    name: 'Personalisasi setiap timer',
    text: 'Ubah nama setiap timer untuk mengidentifikasi apa yang sedang dimasak: "Oven", "Nasi", "Saus", dll.',
  },
  {
    name: 'Kontrol dari dock seluler',
    text: 'Di ponsel, timer yang aktif muncul di dock yang dapat digeser di bagian bawah. Jeda atau mulai ulang langsung dari sana.',
  },
  {
    name: 'Dapatkan notifikasi',
    text: 'Izinkan notifikasi agar browser memperingatkan Anda saat waktu habis.',
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
  slug: 'pengatur-waktu-dapur',
  title: 'Pengatur Waktu Dapur Ganda',
  description: 'Kelola beberapa waktu memasak secara bersamaan. Alarm independen, ideal untuk koki dan organisasi dapur (Mise en Place).',
  faqTitle: 'Pertanyaan Umum',
  bibliographyTitle: 'Referensi',
  ui: {
    addTimer: 'Tambah Timer',
    stopAll: 'Hentikan Semua',
    defaultName: 'Timer',
    newTimerName: 'Timer Baru',
    timerDefault1: 'Timer 1',
    timerDefault2: 'Timer 2',
    timerDefault3: 'Timer 3',
    label: 'Label',
    hours: 'Jam',
    minutes: 'Menit',
    seconds: 'Detik',
    ready: 'Siap',
    start: 'Mulai',
    pause: 'Jeda',
    reset: 'Reset',
    addOneMin: '+1 mnt',
    addFiveMin: '+5 mnt',
    statusReady: 'Siap',
    statusRunning: 'Berjalan',
    statusPaused: 'Dijeda',
    statusFinished: 'WAKTU HABIS!',
    finishNotification: 'Timer Selesai untuk',
  },
  faq,
  bibliography: [
    {
      name: 'Keamanan Pangan: USDA Guidelines',
      url: 'https://www.fsis.usda.gov/',
    },
    {
      name: 'Mise en Place - Dapur Profesional',
      url: 'https://www.escoffier.edu/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Penguasaan Waktu di Dapur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Memasak profesional bukan hanya tentang resep, tetapi tentang <strong>manajemen waktu yang tepat</strong>. Konsep Prancis <em>"Mise en Place"</em> menyertakan waktu sebagai bahan yang sangat penting.',
    },
    {
      type: 'title',
      text: 'Peran Suhu dan Waktu',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Makanan', 'Tingkat Kematangan', 'Waktu', 'Manfaat'],
      rows: [
        ['Telur Setengah Matang', 'Kuning cair', '3-4 mnt', 'Protein lembut'],
        ['Telur Mollet', 'Kuning krem', '5-6 mnt', 'Keseimbangan tekstur'],
        ['Telur Matang', 'Padat', '9-11 mnt', 'Konsistensi maksimal'],
        ['Daging - Searing', 'Suhu tinggi', '1-2 mnt/sisi', 'Reaksi Maillard'],
        ['Daging - Istirahat', 'Istirahat', '5-20 mnt', 'Distribusi sari daging'],
      ],
    },
    {
      type: 'title',
      text: 'Keamanan Pangan: Zona Bahaya',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Waktu tidak hanya mempengaruhi kualitas, tetapi juga keamanan. "Zona Bahaya" bakteri adalah antara 5°C dan 65°C. Makanan matang tidak boleh didiamkan di rentang ini lebih dari <strong>2 jam</strong>.',
    },
    {
      type: 'title',
      text: 'Tips Organisasi Profesional',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Atur waktu penyelesaian:</strong> Jika semuanya selesai bersamaan, Anda akan kewalahan saat menyajikan.',
        '<strong>Gunakan panas sisa:</strong> Matikan api 1-2 menit sebelum timer berbunyi.',
        '<strong>Beri nama timer Anda:</strong> Gunakan label untuk "Oven", "Nasi", atau "Saus".',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Tips profesional:</strong> Presisi waktu membedakan koki dari pemasak rumahan. Gunakan teknologi untuk menjamin konsistensi.',
    },
  ],
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
