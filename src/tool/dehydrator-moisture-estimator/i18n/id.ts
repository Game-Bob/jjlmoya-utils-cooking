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
      text: 'Hitung Penyusutan dan Waktu Dehidrasi Makanan',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Optimalkan ruang pengeringan dan jadwal pengeringan makanan Anda dengan perhitungan akurat.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
