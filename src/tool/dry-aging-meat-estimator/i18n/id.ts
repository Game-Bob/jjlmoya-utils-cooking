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
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
