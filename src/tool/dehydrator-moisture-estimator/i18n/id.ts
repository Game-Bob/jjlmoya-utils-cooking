import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Estimator Kelembapan Dehidrator';
const description = 'Perkirakan penurunan berat makanan, penguapan air, dan waktu pengeringan.';

const faq = [
  {
    question: 'Bagaimana cara menghitung penurunan berat selama dehidrasi?',
    answer: 'Penurunan berat dihitung dengan memisahkan bahan padat dari air. Karena berat padat konstan, berat akhir dihitung dengan membagi padatan dengan 1 dikurangi target persentase kelembapan.'
  }
];

const howTo = [
  {
    name: 'Pilih preset bahan atau kelembapan manual',
    text: 'Pilih preset atau masukkan nilai kelembapan secara manual.'
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
  slug: 'estimator-kelembapan-dehidrator',
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  ui: {
    title: 'Estimator Kelembapan',
    subtitle: 'Hitung penyusutan berat dan estimasi waktu pengeringan',
    unitSystemLabel: 'Sistem Satuan',
    metricOption: 'Metrik (g, °C)',
    imperialOption: 'Imperial (oz, °F)',
    ingredientLabel: 'Preset Bahan',
    initialMoistureLabel: 'Kelembapan Awal (%)',
    targetMoistureLabel: 'Target Kelembapan (%)',
    weightLabel: 'Berat Awal',
    tempLabel: 'Suhu Pengeringan',
    customOption: 'Kustom / Manual',
    beefOption: 'Dendeng Sapi',
    watermelonOption: 'Manisan Semangka',
    appleOption: 'Keripik Apel',
    mangoOption: 'Irisan Mangga',
    mushroomOption: 'Jamur',
    targetWeightLabel: 'Target Berat',
    waterEvaporatedLabel: 'Air Menguap',
    estimatedHoursLabel: 'Estimasi Waktu Pengeringan',
    shrinkageLabel: 'Penyusutan Berat'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Berapa banyak berat makanan Anda akan berkurang di dehydrator? Hitung waktu pengeringan dan kadar air',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Baik Anda sedang membuat <strong>dendeng (beef jerky)</strong>, <strong>manisan buah kering (fruit leather)</strong>, <strong>irisan apel kering</strong>, atau <strong>semangka kering</strong>, kunci untuk mendapatkan hasil yang konsisten adalah memahami kadar air. Keamanan pangan dan penyimpanan yang stabil bergantung pada pencapaian kadar air target yang tepat. <strong>Alat estimasi kelembapan dehidrator kami</strong> memprediksi berat akhir, penguapan air, dan waktu pengeringan berdasarkan bahan dan pengaturan spesifik Anda.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '70%', label: 'Kelembapan Daging', icon: 'mdi:food' },
        { value: '92%', label: 'Kelembapan Semangka', icon: 'mdi:water' },
        { value: '10%', label: 'Target untuk Dendeng', icon: 'mdi:shield' },
        { value: '55°C', label: 'Suhu Pengeringan Rata-rata', icon: 'mdi:thermometer' }
      ]
    },
    {
      type: 'title',
      text: 'Berapa Kadar Air yang Tepat untuk Makanan Kering?',
      level: 2
    },
    {
      type: 'table',
      headers: ['Bahan', 'Kelembapan Awal', 'Target Kelembapan', 'Waktu Khas', 'Tanda Kematangan'],
      rows: [
        ['Dendeng Sapi', '70%', '10-15%', '4-8 jam', 'Liat dan melengkung tanpa patah'],
        ['Irisan Apel', '86%', '15-20%', '6-10 jam', 'Lentur dan seperti kulit, tidak ada bagian yang lengket'],
        ['Irisan Mangga', '84%', '15-18%', '6-10 jam', 'Kenyal tanpa kelembapan yang terlihat'],
        ['Jamur', '92%', '5-8%', '4-8 jam', 'Rapuh dan garing'],
        ['Semangka Kering', '92%', '10-12%', '10-16 jam', 'Patah dengan bunyi klik saat ditekuk']
      ]
    },
    {
      type: 'title',
      text: 'Masalah Pengeringan yang Umum dan Cara Mengatasinya',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Pengerasan permukaan (Case hardening):</strong> Lapisan luar mengering terlalu cepat, menjebak kelembapan di dalam. Turunkan suhu sebesar 5-10 °C dan tingkatkan sirkulasi udara.',
        '<strong>Berjamur selama penyimpanan:</strong> Makanan tidak dikeringkan hingga kadar air yang cukup rendah. Gunakan kalkulator untuk menemukan berat target Anda dan verifikasi dengan uji kelembapan.',
        '<strong>Pengeringan tidak merata:</strong> Potongan dipotong dengan ketebalan berbeda atau dehidrator terlalu penuh. Potong potongan secara merata dan beri jarak di antaranya.',
        '<strong>Makanan terlalu kering dan rapuh:</strong> Pengeringan berlebih menyebabkan hilangnya rasa dan tekstur. Periksa kadar air target untuk bahan spesifik Anda.'
      ]
    },
    {
      type: 'title',
      text: 'Panduan Suhu Pengeringan Berdasarkan Jenis Makanan',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Suhu memengaruhi kecepatan pengeringan dan kualitas makanan. Suhu yang lebih tinggi menguapkan air lebih cepat tetapi dapat menyebabkan pengerasan permukaan, hilangnya nutrisi, dan hasil yang tidak merata. Gunakan pedoman umum ini untuk pengaturan dehidrator Anda:'
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Suhu Rendah 40 hingga 50 °C',
          icon: 'mdi:thermometer',
          description: 'Terbaik untuk menjaga enzim, nutrisi, dan rasa yang halus.',
          points: ['Herbal dan sayuran berdaun hijau', 'Jamur', 'Pengawetan makanan mentah (raw food)', 'Diperlukan waktu pengeringan yang lebih lama']
        },
        {
          title: 'Suhu Sedang 50 hingga 60 °C',
          icon: 'mdi:thermometer',
          description: 'Rentang standar untuk sebagian besar buah dan sayuran.',
          highlight: true,
          points: ['Irisan apel dan mangga', 'Sebagian besar sayuran', 'Manisan buah (fruit leather)', 'Keseimbangan kecepatan dan kualitas']
        },
        {
          title: 'Suhu Tinggi 60 hingga 70 °C',
          icon: 'mdi:thermometer',
          description: 'Digunakan untuk dendeng daging dan makanan padat yang memerlukan keamanan pangan.',
          points: ['Dendeng sapi dan kalkun', 'Sayuran akar yang padat', 'Prioritas keamanan pangan', 'Jendela pengeringan yang lebih pendek']
        }
      ]
    },
    {
      type: 'tip',
      title: 'Selalu Lakukan Praolahan pada Buah',
      html: 'Celupkan apel, pisang, dan pir ke dalam jus lemon ou larutan asam askorbat sebelum dikeringkan untuk mencegah pencokelatan dan mempertahankan warna.'
    },
    {
      type: 'tip',
      title: 'Putar Rak Selama Pengeringan',
      html: 'Dehidrator sering kali memiliki titik panas. Putar rak dari atas ke bawah dan depan ke belakang setiap 2-3 jam untuk pengeringan yang merata.'
    },
    {
      type: 'tip',
      title: 'Lakukan Pengondisian Sebelum Disimpan',
      html: 'Setelah dikeringkan, biarkan makanan mendingin dan kondisikan dalam wadah tertutup selama 1 minggu. Kocok setiap hari. Jika muncul kondensasi, makanan perlu dikeringkan lebih lama.'
    },
    {
      type: 'title',
      text: 'Glosarium Kelembapan Dehidrator',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Pengerasan Permukaan', definition: 'Kondisi di mana permukaan luar makanan mengering terlalu cepat, membentuk kulit keras yang menjebak kelembapan di dalam dan mencegah dehidrasi yang tepat.' },
        { term: 'Aktivitas Air (aw)', definition: 'Ukuran air bebas yang tersedia untuk pertumbuhan mikroba. Makanan kering yang stabil disimpan biasanya memiliki aw di bawah 0,60.' },
        { term: 'Kandungan Kelembapan', definition: 'Persentase berat air relatif terhadap total berat makanan. Digunakan untuk menentukan kemajuan dehidrasi dan tingkat target untuk keamanan pangan.' },
        { term: 'Rasio Penyusutan', definition: 'Proporsi berat asli yang tersisa setelah dehidrasi. Metrik utama untuk merencanakan ukuran batch dan penyimpanan.' }
      ]
    },
    {
      type: 'summary',
      title: 'Poin Penting untuk Pengeringan Sempurna',
      items: [
        'Bahan yang berbeda memiliki tingkat kelembapan awal yang sangat berbeda (70-92%). Gunakan prasetel untuk estimasi yang akurat.',
        'Target kelembapan bervariasi menurut makanan: 10% untuk dendeng, 15-20% untuk buah-buahan, 5-8% untuk sayuran dan jamur.',
        'Suhu pengeringan memengaruhi kecepatan dan kualitas. Tetap berada di rentang 50-60 °C untuk sebagian besar makanan.',
        'Pengerasan permukaan merusak tekstur. Hindari suhu di atas 70 °C dan pastikan sirkulasi udara yang baik.',
        'Selalu kondisikan makanan kering selama 1 minggu sebelum penyimpanan jangka panjang untuk memastikan distribusi kelembapan yang merata.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
