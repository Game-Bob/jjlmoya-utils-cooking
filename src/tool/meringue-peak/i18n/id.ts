import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkulator Meringue & Pengocokan Putih Telur";
const description = "Hitung jumlah gula yang tepat untuk meringue Prancis, Italia, atau Swiss berdasarkan berat putih telur Anda. Waktu pengocokan dan tips kue.";
const faq = [
  {
    question: 'Berapa rasio gula dan putih telur yang ideal?',
    answer: 'Aturan emas dalam pembuatan kue adalah rasio 1:2. Untuk setiap gram putih telur, harus digunakan dua gram gula untuk memastikan struktur yang stabil dan kokoh.',
  },
  {
    question: 'Bagaimana cara mengetahui jika putih telur sudah kaku?',
    answer: 'Tahap kaku (stiff peak) tercapai ketika, saat mengangkat pengocok, meringue membentuk ujung yang tetap tegak tanpa membengkok. Selain itu, meringue harus terlihat sangat mengilap.',
  },
  {
    question: 'Meringue jenis apa yang paling stabil untuk dekorasi?',
    answer: 'Meringue Italia adalah yang paling stabil dari tiga jenis utama, karena sirup panas sedikit memasak protein putih telur, menciptakan struktur yang lebih tahan panas.',
  },
  {
    question: 'Bisakah menggunakan putih telur pasteurisasi dalam kemasan?',
    answer: 'Ya, bisa digunakan, tetapi biasanya membutuhkan waktu sedikit lebih lama untuk mengembang dibandingkan putih telur segar. Tipsnya adalah menambahkan sedikit cream of tartar atau beberapa tetes lemon untuk membantu stabilitas.',
  },
];
const howTo = [
  {
    name: 'Timbang putih telur',
    text: 'Gunakan timbangan digital untuk mendapatkan berat putih telur yang tepat tanpa sisa kuning telur.',
  },
  {
    name: 'Masukkan berat',
    text: 'Ketik berat tersebut ke dalam kalkulator kami untuk mendapatkan jumlah gula yang dibutuhkan.',
  },
  {
    name: 'Pilih teknik',
    text: 'Pilih apakah Anda akan membuat meringue Prancis (dasar), Italia (stabil), atau Swiss (halus).',
  },
  {
    name: 'Kocok dan verifikasi',
    text: 'Ikuti perkiraan waktu dan periksa konsistensi hingga mencapai tahap kaku.',
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
  slug: 'kalkulator-meringue-kaku',
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  ui: {
    whitesLabel: 'Berat Putih Telur',
    whitesPlaceholder: 'Mis. 120',
    whitesUnit: 'g',
    typeLabel: 'Jenis Meringue',
    typeFrench: 'Prancis',
    typeItalian: 'Italia',
    typeSwiss: 'Swiss',
    stageSpumado: 'Berbusa',
    stageSpumadoDesc: 'Gelembung besar, seperti sabun.',
    stageSoftPeaks: 'Puncak Lembut',
    stageSoftPeaksDesc: 'Ujungnya membengkok saat diangkat.',
    stageStiffPeaks: 'Puncak Kaku',
    stageStiffPeaksDesc: 'Ujung tegak dan mengilap.',
    frenchSugarWhite: 'Gula Pasir',
    frenchSugarPowder: 'Gula Halus',
    frenchTip: 'Meringue Prancis paling umum, ideal untuk dipanggang. Tidak cocok dimakan mentah.',
    frenchTime1: '1-2 mnt',
    frenchTime2: '3-5 mnt',
    frenchTime3: '7-9 mnt',
    italianSugarSyrup: 'Gula untuk Sirup',
    italianWater: 'Air',
    italianTip: 'Meringue Italia paling stabil. Dibuat dengan sirup 118°C. Sempurna untuk dekorasi kue.',
    italianTime1: '2 mnt',
    italianTime2: '5 mnt',
    italianTime3: '10-12 mnt',
    swissSugarWhite: 'Gula Pasir',
    swissMaxTemp: 'Suhu Maks',
    swissTip: 'Meringue Swiss dipanaskan dengan tim (bain marie) hingga gula larut. Ideal untuk buttercream.',
    swissTime1: '1-2 mnt',
    swissTime2: '4-6 mnt',
    swissTime3: '8-10 mnt',
    invalidWeightError: 'Masukkan berat yang valid',
  },
  faq,
  howTo, seo: [
    {
      type: 'title',
      text: 'Panduan Ahli Kalkulasi Meringue',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Menguasai <strong>putih telur kaku</strong> meningkatkan hasil kue Anda ke tingkat profesional. Kuncinya ada pada presisi berat.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1:2',
          label: 'Rasio Putih:Gula',
          icon: 'mdi:scale-balance',
        },
        {
          value: '118°C',
          label: 'Sirup Italia',
          icon: 'mdi:thermometer-high',
        },
        {
          value: '60°C',
          label: 'Bain-marie Swiss',
          icon: 'mdi:beaker-question-outline',
        },
        {
          value: '0%',
          label: 'Bebas Lemak',
          icon: 'mdi:close-circle-outline',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Meringue Prancis',
          icon: 'mdi:baguette',
          description: 'Paling sederhana namun kurang stabil.',
          points: [
            'Ideal untuk dipanggang',
            'Tekstur ringan',
            'Harus dipanggang',
            'Cepat dibuat',
          ],
        },
        {
          title: 'Meringue Italia',
          icon: 'mdi:pizza',
          description: 'Paling stabil.',
          highlight: true,
          points: [
            'Sempurna untuk dekorasi',
            'Aman dimakan mentah',
            'Tahan kelembapan',
            'Struktur padat & kilap',
          ],
        },
        {
          title: 'Meringue Swiss',
          icon: 'mdi:cheese',
          description: 'Dipanaskan tim.',
          points: [
            'Dasar Buttercream',
            'Tekstur sangat halus',
            'Bagus untuk isian',
            'Stabilitas tinggi',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Trik Wadah Logam',
      html: 'Bersihkan wadah dengan cuka atau lemon. Sisa lemak sekecil apa pun akan menghalangi putih telur mengembang.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
