import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkulator Hasil dan Biaya Dry Aging Daging";
const description = "Hitung penurunan berat daging, sisa pemotongan kulit kering, dan biaya aktual per kilogram saat melakukan dry aging daging sapi atau daging lainnya di rumah atau di dalam ruangan khusus.";
const faq = [
  {
    question: "Berapa banyak berat yang hilang selama dry aging?",
    answer: "Selama proses dry aging standar 30 hingga 45 hari, daging kehilangan sekitar 15% hingga 25% beratnya karena penguapan air. Selain itu, sekitar 15% dari berat awal hilang saat memotong kulit luar yang kering sebelum dimasak."
  },
  {
    question: "Berapa kelembaban optimal untuk dry aging?",
    answer: "Kelembaban relatif ideal untuk dry aging daging adalah antara 75% dan 85%. Jika terlalu rendah (di bawah 75%), permukaan mengering terlalu cepat dan membentuk lapisan keras. Jika terlalu tinggi (di atas 85%), risiko jamur meningkat."
  },
  {
    question: "Mengapa harga per kilogram meningkat begitu banyak?",
    answer: "Karena kehilangan berat dari air dan potongan kulit luar, berat akhir yang dapat digunakan lebih rendah dari berat awal. Total biaya tetap sama, sehingga biaya per kilogram naik secara proporsional."
  }
];

const howTo = [
  {
    name: "Masukkan berat awal",
    text: "Masukkan berat awal potongan daging sebelum proses dry aging."
  },
  {
    name: "Atur hari pematangan",
    text: "Pilih durasi total dry aging, biasanya antara 1 dan 60 hari."
  },
  {
    name: "Sesuaikan kelembaban relatif",
    text: "Atur kelembaban ruangan Anda (ideal adalah 75% hingga 85%) untuk menentukan tingkat kehilangan air."
  },
  {
    name: "Masukkan harga awal",
    text: "Masukkan harga per kilogram daging mentah untuk membandingkannya dengan biaya hasil akhir."
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
  slug: 'estimator-pematangan-daging',
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  ui: {
    title: 'Estimator Dry Aging Daging',
    subtitle: 'Simulasikan penyusutan berat dan hitung biaya hasil akhir',
    startWeightLabel: 'Berat Awal',
    daysLabel: 'Waktu Pematangan',
    pricePerKgLabel: 'Harga Asli',
    humidityLabel: 'Kelembaban Relatif',
    finalWeightLabel: 'Berat Bersih Akhir',
    yieldLabel: 'Total Hasil Bersih',
    originalCostLabel: 'Total Biaya Awal',
    finalCostPerKgLabel: 'Harga Bersih Akhir',
    moistureLossLabel: 'Kehilangan Penguapan Air',
    trimmingLossLabel: 'Limbah Potongan Kulit Luar',
    warningLowHumidity: 'Peringatan: Kelembaban di bawah 75%. Permukaan dapat mengering terlalu cepat, menyebabkan pengerasan bagian luar.',
    warningHighHumidity: 'Peringatan: Kelembaban di atas 85%. Risiko tinggi kontaminasi bakteri atau pertumbuhan jamur berbahaya.',
    timelineTitle: 'Garis Waktu Perkembangan Dry Aging',
    timelineInfoText: 'Klik pada garis waktu untuk melihat pratinjau perubahan fisik pada potongan daging'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Sains dan Ekonomi Dry Aging Daging',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Dry aging adalah seni kuliner yang menggabungkan mikrobiologi, biokimia, dan fisika untuk mengubah potongan daging sapi standar menjadi hidangan yang empuk dan kaya rasa.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '75-85%',
          label: 'Kelembaban Ideal',
          icon: 'mdi:water-percent'
        },
        {
          value: '1-3°C',
          label: 'Suhu Optimal',
          icon: 'mdi:thermometer'
        },
        {
          value: '15%',
          label: 'Kerugian Potong',
          icon: 'mdi:knife'
        },
        {
          value: '30-45 h',
          label: 'Waktu Standar',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: 'Memahami Dinamika Penurunan Berat dan Kurva Asimptotik',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Penurunan berat selama dry aging bersifat asimptotik. Dalam 14 hari pertama, air menguap dengan cepat dari lapisan luar. Lapisan keras dan gelap (pelikel) terbentuk dan memperlambat penguapan lebih lanjut setelah 2 hingga 3 minggu.'
    },
    {
      type: 'list',
      items: [
        '<strong>Hari 1-14:</strong> Penguapan cepat. Daging kehilangan 10% hingga 12% beratnya (terutama air). Serat otot menyusut dan rasa terkonsentrasi.',
        '<strong>Hari 15-30:</strong> Penguapan melambat berkat pembentukan pelikel. Enzim (kalpain dan katepsin) mengurai kolagen lunak sehingga daging lebih empuk.',
        '<strong>Hari 30-45:</strong> Kehilangan air tambahan minimal. Perkembangan rasa gurih seperti kacang dan keju biru melalui oksidasi lemak.',
        '<strong>Kerugian Pemotongan:</strong> Setelah pematangan selesai, pelikel harus dipotong, yang menghabiskan sekitar 15% dari total berat.'
      ]
    },
    {
      type: 'title',
      text: 'Kontrol Lingkungan dalam Ruang Dry Aging',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Kualitas udara, suhu, dan kelembaban yang konsisten sangat penting. Penyimpangan dapat merusak daging.'
    },
    {
      type: 'list',
      items: [
        '<strong>Suhu:</strong> Harus tetap antara 1°C dan 3°C. Di bawah 0°C, enzim membeku; di atas 4°C, bakteri patogen berkembang.',
        '<strong>Kelembaban Relatif (RH):</strong> Rentang ideal adalah 75% hingga 85%. Di bawah 70%, terjadi pengerasan bagian luar; di atas 85%, jamur berbahaya tumbuh.',
        '<strong>Aliran Udara:</strong> Sirkulasi udara yang berkesinambungan diperlukan untuk mengeringkan permukaan secara merata.'
      ]
    },
    {
      type: 'title',
      text: 'Implikasi Biaya dan Kalkulasi Finansial Dry Aging',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Karena penguapan dan pemotongan, porsi yang dapat dimakan lebih kecil, yang meningkatkan harga efektif per kilogram.'
    },
    {
      type: 'table',
      headers: ['Durasi Pematangan', 'Ø Kerugian Penguapan', 'Ø Kerugian Potong', 'Total Hasil', 'Multiplier Biaya'],
      rows: [
        ['14 Hari', '10.5%', '15.0%', '74.5%', '1.34x'],
        ['21 Hari', '13.5%', '15.0%', '71.5%', '1.40x'],
        ['30 Hari', '17.5%', '15.0%', '67.5%', '1.48x'],
        ['45 Hari', '21.0%', '15.0%', '64.0%', '1.56x'],
        ['60 Hari', '24.0%', '15.0%', '61.0%', '1.64x']
      ]
    },
    {
      type: 'title',
      text: 'Panduan Keselamatan: Mikrobiologi dan Identifikasi Jamur Baik vs Buruk',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Dry aging yang aman mengandalkan pertumbuhan mikroflora menguntungkan (jamur dari genus <em>Thamnidium</em>, <em>Mucor</em>, <em>Rhizopus</em>). Kebersihan ketat tetap wajib diutamakan.'
    },
    {
      type: 'list',
      items: [
        '<strong>Indikator Baik:</strong> Kerak yang kering, padat, berwarna ungu tua atau cokelat tua. Lapisan jamur putih halus seperti kulit keju adalah normal.',
        '<strong>Indikator Buruk:</strong> Permukaan lengket, berlendir, atau basah. Jamur berwarna hijau, hitam, atau kekuningan. Bau busuk atau amonia menandakan pembusukan.',
        '<strong>Kebersihan:</strong> Selalu sterilkan ruangan, kait, dan rak sebelum memasukkan daging baru.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
