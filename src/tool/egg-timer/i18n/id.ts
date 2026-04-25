import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

const title = "Timer Telur Ilmiah";
const description = "Kalkulator termodinamika untuk memasak telur yang sempurna berdasarkan ketinggian, suhu, dan ukuran.";
const faq = [
  {
    question: "Mengapa ketinggian (altitude) berpengaruh saat merebus telur?",
    answer: "Air tidak selalu mendidih pada suhu 100°C. Pada ketinggian yang lebih tinggi, tekanan atmosfer lebih rendah, sehingga air mendidih pada suhu yang lebih rendah pula. Misalnya pada ketinggian 2000m, air mendidih pada suhu sekitar 93°C, sehingga membutuhkan waktu lebih lama untuk matang. Di puncak Everest, mustahil untuk memasak telur rebus yang keras.",
  },
  {
    question: "Telur dari kulkas atau suhu ruang?",
    answer: "Telur dari kulkas (4°C) membutuhkan waktu lebih lama daripada telur suhu ruang (20°C). Perbedaannya bisa mencapai 2-3 menit. Kalkulator ini menyesuaikan waktu secara otomatis berdasarkan suhu awal telur.",
  },
  {
    question: "Mengapa muncul lingkaran hijau di sekitar kuning telur?",
    answer: "Itu adalah feros sulfida, akibat dari memasak terlalu lama (overcooking). Saat suhu melebihi 80°C terlalu lama, belerang dalam putih telur bereaksi dengan zat besi dalam kuning telur. Ini tidak beracun, tapi menandakan waktu masak yang berlebih. Gunakan air es segera untuk mencegahnya.",
  },
  {
    question: "Bagaimana cara mengupas telur dengan mudah?",
    answer: "Gunakan telur yang sudah berusia 1-2 minggu (bukan telur segar hari ini), mulai dengan air mendidih (jangan dari air dingin), dan rendam dalam air es segera setelah selesai. Shock termal akan menyusutkan telur dan memudahkan proses pengupasan.",
  },
];
const howTo = [
  {
    name: "Pilih suhu awal",
    text: "Pilih apakah telur Anda dari kulkas (4°C) atau suhu ruang (20°C). Ini adalah suhu internal telur.",
  },
  {
    name: "Pilih ukuran telur",
    text: "S (kecil, 53g), M (sedang, 58g), L (besar, 63g), atau XL (sangat besar, 73g). Ukuran menentukan berapa lama panas mencapai area tengah telur.",
  },
  {
    name: "Tentukan ketinggian Anda",
    text: "Masukkan secara manual atau gunakan lokasi Anda. Setiap kenaikan 300m, titik didih air turun sekitar 1°C.",
  },
  {
    name: "Gunakan shock termal",
    text: "Saat timer berbunyi, segera rendam telur dalam air es. Ini menghentikan proses memasak dan memudahkan pengupasan. Shock termal sangat penting untuk presisi.",
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
  slug: "telur",
  title: "Timer Telur Ilmiah",
  description: "Kalkulator termodinamika untuk memasak telur yang sempurna berdasarkan ketinggian, suhu, dan ukuran.",
  faqTitle: "Pertanyaan yang Sering Diajukan",
  ui: {
    parameters: "Parameter",
    initial_temperature: "Suhu Awal",
    fridge: "Kulkas",
    ambient: "Suhu Ruang",
    egg_size: "Ukuran Telur",
    altitude: "Ketinggian",
    use_location: "Gunakan lokasi saya",
    altitude_help: "Air mendidih pada suhu lebih rendah di ketinggian yang lebih tinggi, memengaruhi waktu memasak.",
    sea_level: "Laut",
    soft_cooked: "Setengah Matang",
    soft_description: "Kuning cair, putih lembut.",
    mollet: "Mollet (Kuning kental)",
    mollet_description: "Kuning krem, putih padat.",
    hard_cooked: "Matang/Hard",
    hard_description: "Matang sepenuhnya, kuning padat.",
  },
  faq, howTo,
  seo: [
    {
      type: 'title',
      text: 'Panduan Master Memasak Telur dengan Sempurna',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Memasak telur adalah latihan <strong>termodinamika terapan</strong>. Presisi dalam suhu awal, ukuran telur, dan ketinggian geografis menentukan apakah Anda akan mendapatkan kuning telur cair yang lembut atau hasil yang terlalu matang dengan lingkaran hijau yang tidak diinginkan.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '62°C',
          label: 'Koagulasi Putih',
          icon: 'mdi:egg-outline',
        },
        {
          value: '68°C',
          label: 'Koagulasi Kuning',
          icon: 'mdi:egg-fried',
        },
        {
          value: '-1°C',
          label: 'Didih / 300m',
          icon: 'mdi:mountain',
        },
        {
          value: '0s',
          label: 'Toleransi Error',
          icon: 'mdi:timer-check-outline',
        },
      ],
    },
    {
      type: 'title',
      text: 'Perbandingan Tingkat Kematangan',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Telur Setengah Matang',
          icon: 'mdi:coffee-outline',
          description: 'Putih telur matang sebagian dan kuning telur cair sepenuhnya.',
          points: [
            'Tekstur sangat halus',
            'Sangat cocok untuk celupan roti',
            'Masak cepat (3-4 mnt)',
            'Sulit dikupas',
          ],
        },
        {
          title: 'Telur Mollet / Kental',
          icon: 'mdi:water-percent',
          description: 'Putih telur padat dan kuning telur krem, kental tapi tidak keras.',
          highlight: true,
          points: [
            'Standar gourmet',
            'Kuning telur sehalus madu',
            'Bagian luar elastis dan padat',
            'Sempurna untuk salad',
          ],
        },
        {
          title: 'Telur Rebus Matang',
          icon: 'mdi:circle-slice-8',
          description: 'Padat sepenuhnya namun lembut, tanpa lingkaran hijau.',
          points: [
            'Kuning telur buram dan padat',
            'Mudah dibawa dan dikupas',
            'Ideal untuk isian',
            'Membutuhkan pendinginan cepat',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Titik Didih Berdasarkan Ketinggian',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Kota / Ketinggian', 'Meter (mdpl)', 'Titik Didih (°C)', 'Waktu Tambahan'],
      rows: [
        ['Tingkat Laut', '0m', '100°C', '0s'],
        ['Bandung', '700m', '97.6°C', '+28s'],
        ['Mexico City', '2240m', '92.6°C', '+75s'],
        ['La Paz (Bolivia)', '3640m', '88.1°C', '+140s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Lingkaran hijau atau sulit dikupas?',
      html: 'Lingkaran hijau adalah <strong>feros sulfida</strong> yang disebabkan oleh overcooking. Jika telur sulit dikupas, biasanya karena terlalu segar; pH rendah membuat putih telur menempel pada membran. Gunakan telur berusia 1 minggu dan shock termal dalam es.',
    },
    {
      type: 'title',
      text: 'Glosarium Sains Telur',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ovotransferrin',
          definition: 'Protein putih telur yang membeku pertama (62°C), memberikan struktur putih awal.',
        },
        {
          term: 'Ovalbumin',
          definition: 'Protein utama yang membutuhkan lebih banyak panas (80°C) untuk kepadatan total.',
        },
        {
          term: 'Tekanan Atmosfer',
          definition: 'Faktor yang menentukan suhu air mendidih.',
        },
        {
          term: 'Shock Termal',
          definition: 'Perendaman dalam air es untuk menghentikan sisa panas secara instan.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Trik Cuka',
      html: 'Tambahkan sedikit cuka ke dalam air. Jika cangkang retak, asam akan membantu putih telur membeku dengan cepat, menutup retakan tersebut.',
    },
    {
      type: 'paragraph',
      html: 'Timer kami menggunakan persamaan Charles Williams untuk menyesuaikan setiap detik berdasarkan lokasi tepat Anda dan kondisi suhu telur.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
