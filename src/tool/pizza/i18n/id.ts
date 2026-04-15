import type { ToolLocaleContent } from "../../../types";

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
    name: "Fermentasi dingin",
    text: "Tempatkan bola adonan dalam wadah kedap udara di kulkas (4°C) selama 24-72 jam. Ini adalah langkah kritis untuk rasa dan daya cerna.",
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
  slug: 'kalkulator-dough-pizza-napolitana',
  title,
  description,
  faqTitle: "Pertanyaan Umum",
  bibliographyTitle: "Referensi",
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
  bibliography: [
    {
      name: "Associazione Verace Pizza Napoletana",
      url: "https://www.pizzanapoletana.org/",
    },
  ],
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
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
