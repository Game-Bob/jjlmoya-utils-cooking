import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

const title = "Kalkulator Adonan Pizza Neapolitan";
const description = "Hitung proporsi tepung, air, garam, dan ragi yang tepat untuk membuat pizza Neapolitan asli di rumah.";
const faq = [
  {
    question: "Berapa hidrasi ideal untuk pizza Neapolitan?",
    answer: "Menurut protokol AVPN, hidrasi standar adalah 63-67%. Untuk pemula, 60-62% lebih mudah ditangani. Untuk pembuat pizza mahir dengan tepung kuat (W300+), 70-75% menghasilkan adonan yang luar biasa tetapi membutuhkan teknik.",
  },
  {
    question: "Berapa lama adonan harus difermentasi?",
    answer: "Minimal 24 jam di kulkas (4°C) untuk mengaktifkan enzim. Optimalnya adalah 48-72 jam. Lebih dari 72 jam, Anda membutuhkan tepung yang sangat kuat (W300+) atau adonan akan menjadi asam.",
  },
  {
    question: "Bisakah menggunakan ragi kering?",
    answer: "Ya. Ragi kering setara dengan 0,4x ragi segar (1g kering = 2,5g segar). Kualitasnya serupa, tetapi ragi segar memberikan profil rasa yang lebih lengkap.",
  },
  {
    question: "Bisakah saya membuat pizza Neapolitan di oven rumah?",
    answer: "Ya, tetapi dengan penyesuaian. Panaskan oven secara maksimal (250-280°C) dengan batu pizza selama 45-60 menit. Pemanggangan akan memakan waktu 5-7 menit, bukan 60-90 detik.",
  },
  {
    question: "Tepung apa yang harus saya gunakan?",
    answer: "Ideal: Caputo Pizzeria (W260-280) atau Manitoba (W350-400). Alternatif: Tepung apa pun dengan 11-13g protein per 100g. Hindari tepung lemah (W130-160) untuk fermentasi panjang.",
  },
  {
    question: "Mengapa adonan robek saat diregangkan?",
    answer: "Gluten belum rileks. Biarkan bola adonan istirahat 2-3 jam pada suhu ruang. Jika terus berulang, pengulengan kurang atau tepung terlalu lemah.",
  },
];
const howTo = [
  {
    name: "Hitung proporsi",
    text: "Gunakan kalkulator ini untuk mendapatkan gram akurat dari setiap bahan berdasarkan jumlah pizza dan berat setiap bola adonan.",
  },
  {
    name: "Campur adonan",
    text: "Campurkan tepung dengan air suam-suam kuku (22-25°C), garam, dan ragi. Uleni selama 8-10 menit dengan mikser atau 15-20 menit dengan tangan.",
  },
  {
    name: "Fermentasi utama",
    text: "Biarkan seluruh adonan fermentasi 1-2 jam pada suhu ruang (20-25°C) hingga mengembang dua kali lipat.",
  },
  {
    name: "Bagi menjadi bola",
    text: "Bagi adonan menjadi porsian sesuai berat. Istirahatkan sebelum membentuk bola adonan.",
  },
  {
    name: "Fermentasi dingin",
    text: "Tempatkan bola adonan dalam wadah kedap udara di kulkas (4°C) selama 24-72 jam. Ini adalah langkah kritis untuk rasa dan daya cerna.",
  },
  {
    name: "Regangkan dan panggang",
    text: "Keluarkan dari kulkas 30 menit sebelumnya. Regangkan dari tengah ke luar. Panggang pada suhu maksimal.",
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
  slug: 'kalkulator-adonan-pizza-neapolitan',
  title,
  description,
  faqTitle: "Pertanyaan Umum",
  ui: {
    parameters: "Parameter",
    quantity: "Jumlah",
    pizzas: "pizza",
    weight: "Berat per bola",
    small: "Kecil (180g)",
    standard: "Standar (260g)",
    large: "Besar (350g)",
    hydration: "Hidrasi",
    classic: "Klasik (55-60%)",
    modern: "Modern (65-70%)",
    high: "Tinggi (75%+)",
    salt: "Garam",
    fermentation_tip_title: "Tips Fermentasi",
    fermentation_tip:
      "Untuk adonan yang lebih mudah dicerna, biarkan fermentasi selama 24 jam di kulkas (4°C) menggunakan <strong>0,3g</strong> ragi segar untuk setiap 100g tepung.",
    your_recipe: "Resep Anda",
    fresh_yeast: "Ragi Segar",
    dry_yeast: "Kering",
    flour: "Tepung (W260-300)",
    water: "Air",
    salt_label: "Garam Laut",
    yeast: "Ragi",
    yeast_note: "Untuk 8 jam pada 20°C",
    total_weight: "Total Berat Adonan",
    approx: "sekitar",
    visual_note:
      "Ukuran visual mewakili perkiraan diameter pizza yang diregangkan berdasarkan berat bola adonan.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Panduan Ahli Adonan Pizza Neapolitan Asli',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Pizza Neapolitan</strong> adalah warisan budaya. Kesuksesan terletak pada presisi antara waktu, suhu, dan hidrasi.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '480°C',
          label: 'Suhu Panggang',
          icon: 'mdi:fire',
        },
        {
          value: '60-90s',
          label: 'Waktu Pemanggangan',
          icon: 'mdi:clock-fast',
        },
        {
          value: '65%',
          label: 'Hidrasi Std.',
          icon: 'mdi:water-percent',
        },
        {
          value: 'W280',
          label: 'Kekuatan Tepung',
          icon: 'mdi:grain',
        },
      ],
    },
    {
      type: 'title',
      text: 'Pentingnya Pentingnya Hidrasi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hidrasi (persentase air terhadap berat tepung) menentukan tekstur <strong>cornicione</strong> (pinggiran).',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Hidrasi 55 hingga 60%',
          icon: 'mdi:water-percent',
          description: 'Sangat mudah ditangani, ideal untuk pemula dan oven rumah.',
          points: [
            'Pembentukan jaring gluten mudah',
            'Adonan tidak terlalu lengket',
            'Pinggiran kokoh dan renyah',
          ],
        },
        {
          title: 'Hidrasi 63 hingga 67%',
          icon: 'mdi:water',
          description: 'Standar AVPN. Keseimbangan sempurna untuk adonan ringan.',
          highlight: true,
          points: [
            'Tekstur elastis tradisional',
            'Ideal untuk oven kayu',
            'Membutuhkan keterampilan menguleni sedang',
          ],
        },
        {
          title: 'Hidrasi 70%+',
          icon: 'mdi:water-plus',
          description: 'Pizza modern dengan pinggiran raksasa. Membutuhkan teknik lanjutan.',
          points: [
            'Rongga udara sangat besar',
            'Sangat ringan dan mudah dicerna',
            'Membutuhkan tepung sangat kuat',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Jenis Ragi dan Cara Memilihnya',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ragi Segar Tekan',
          icon: 'mdi:bread-slice-outline',
          description: 'Pilihan tradisional pembuat pizza. Memberikan profil rasa yang lebih kompleks.',
          points: [
            'Rasa lebih dalam dan bersih',
            'Aktivitas enzim seimbang',
            'Mudah larut dalam air hangat',
            'Masa simpan singkat',
          ],
        },
        {
          title: 'Ragi Kering Instan',
          icon: 'mdi:shaker-outline',
          description: 'Jauh lebih stabil dan mudah disimpan.',
          points: [
            'Masa simpan lama',
            'Tidak perlu rehidrasi awal',
            'Tiga kali lebih kuat dari ragi segar',
            'Rasa sedikit lebih netral',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Panduan Pemilihan Tepung Berdasarkan Indeks Kekuatan W',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Jenis Tepung', 'Kekuatan (W)', 'Waktu Fermentasi', 'Penggunaan Direkomendasikan'],
      rows: [
        ['Tepung Lemah', 'W130-180', '4-8 jam', 'Kue cepat'],
        ['Kekuatan Sedang', 'W200-240', '8-24 jam', 'Pizza cepat atau roti biasa'],
        ['Tepung Kuat', 'W260-320', '24-72 jam', 'Pizza Neapolitan Asli'],
        ['Ekstra Kuat', 'W350+', '72+ jam', 'Fermentasi sangat panjang'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Kontrol Suhu Pengulengan',
      html: 'Adonan tidak boleh melebihi 24°C pada akhir pengulengan agar jaring gluten tidak rusak.',
    },
    {
      type: 'title',
      text: 'Glosarium Pembuat Pizza Masa Depan',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cornicione',
          definition: 'Pinggiran pizza Neapolitan yang mengembang dan berongga.',
        },
        {
          term: 'Maturasi',
          definition: 'Proses enzimatis pemecahan protein dan gula untuk rasa dan daya cerna.',
        },
        {
          term: 'Pengembangan Adonan',
          definition: 'Titik di mana adonan mencapai elastisitas optimal.',
        },
        {
          term: 'Autolisis',
          definition: 'Istirahat tepung dan air saja untuk memfasilitasi pembentukan gluten.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Trik Kulkas',
      html: 'Fermentasi selama 24 jam pada suhu 4°C menciptakan senyawa aromatik kompleks.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator kami mengotomatiskan proporsi sehingga Anda dapat fokus pada teknik dan passion.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
