import type { ToolLocaleContent } from "../../../types";

const title = "Kalkulator Larutan Garam Keseimbangan";
const description = "Ilmu keseimbangan untuk daging yang juicy dan fermentasi yang sempurna. Hitung salinitas tepat berdasarkan berat total bahan dan air.";
const faq = [
  {
    question: "Apa itu metode larutan garam keseimbangan (equilibrium brining)?",
    answer: "Metode keseimbangan menghitung garam berdasarkan berat total (air + bahan), bukan hanya airnya saja. Ini menjamin konsentrasi garam yang konsisten tanpa mempedulikan jumlah bahan yang Anda gunakan.",
  },
  {
    question: "Berapa banyak garam yang saya butuhkan untuk membuat acar?",
    answer: "Untuk sayuran fermentasi (timun, sauerkraut, kimchi) disarankan antara 2% dan 3% garam. Untuk daging, antara 1,5% dan 2%. Kalkulator memberikan jumlah tepat sesuai dengan berat bahan Anda.",
  },
  {
    question: "Bisakah saya membekukan daging setelah direndam air garam?",
    answer: "Ya, itu sangat ideal. Rendering air garam melindungi dari freezer burn dan daging akan siap dimasak saat dicairkan. Namun, hindari membekukan sayuran fermentasi karena akan menjadi lembek.",
  },
  {
    question: "Mengapa menambahkan gula ke dalam air garam?",
    answer: "Gula memiliki dua fungsi: memudahkan reaksi Maillard (pencokelatan) pada daging dan menyeimbangkan rasa asin tanpa membuat produk terasa manis. Ini tidak mengubah rendaman Anda menjadi pencuci mulut.",
  },
];
const howTo = [
  {
    name: "Tentukan tujuan Anda",
    text: "Putuskan apakah Anda akan membuat daging rendam garam (1,5-2%), fermentasi (2-3%), saus (3,5%) atau pengawetan jangka panjang (5%+). Masing-masing memiliki waktu dan tujuan yang berbeda.",
  },
  {
    name: "Timbang bahan dan air",
    text: "Timbang produk (daging, sayuran) dan air dengan tepat. Presisi sangat penting: perbedaan 5g saja sudah mengubah hasilnya. Gunakan timbangan digital presisi.",
  },
  {
    name: "Hitung dengan alat ini",
    text: "Masukkan berat ke dalam kalkulator dan sesuaikan kadar garam sesuai jenis produk Anda. Alat ini akan memberi tahu Anda secara tepat berapa banyak garam dan gula yang dibutuhkan.",
  },
  {
    name: "Larutkan dan campur",
    text: "Larutkan garam sepenuhnya dalam air dingin sebelum memasukkan produk. Untuk daging, pastikan air garam merendam seluruh bagian. Untuk fermentasi, bahan harus terendam sepenuhnya di bawah air.",
  },
  {
    name: "Fermentasi atau diamkan",
    text: "Simpan di lemari es sesuai jenisnya: 4-48 jam untuk daging, 1-3 minggu untuk fermentasi. Waktu tepatnya bergantung pada suhu dan selera pribadi Anda.",
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
  slug: "larutan-garam",
  title: "Kalkulator Larutan Garam Keseimbangan",
  description: "Ilmu keseimbangan untuk daging yang juicy dan fermentasi yang sempurna. Hitung salinitas tepat berdasarkan berat total bahan dan air.",
  ui: {
    calculator: "Kalkulator",
    subtitle: "Masukkan berat untuk menghitung keseimbangan sempurna.",
    productWeight: "Berat Produk (g)",
    waterWeight: "Berat Air (g)",
    desiredSalinity: "Salinitas yang Diinginkan",
    meat: "Daging (1,5%)",
    fermented: "Fermentasi (2,0%)",
    sauces: "Saus (3,5%)",
    preserves: "Pengawetan (5,0%)",
    addSugar: "Tambah Gula",
    sugarHint: "Menyeimbangkan rasa dan membantu pencokelatan (50% dari garam)",
    saltNeeded: "Garam yang Dibutuhkan",
    sugarOptional: "Gula (Opsional)",
    estimatedTime: "Perkiraan Waktu",
    product: "Produk",
    total: "Total",
    unitGrams: "gram",
    timeMeatsLabel: "Waktu (Daging)",
    timeMeatsDuration: "4 - 48 Jam",
    timeVegetablesLabel: "Waktu (Sayuran)",
    timeVegetablesDuration: "1 - 3 Minggu",
    timePreservesLabel: "Waktu (Pengawetan)",
    timePreservesDuration: "1+ Bulan",
  },
  faqTitle: "Pertanyaan yang Sering Diajukan",
  bibliographyTitle: "Sumber dan Referensi",
  faq,
  howTo,
  bibliography: [
    {
      name: "The Noma Guide to Fermentation - René Redzepi & David Zilber",
      url: "https://www.nomacph.com/",
    },
    {
      name: "Salt, Fat, Acid, Heat - Samin Nosrat",
      url: "https://www.saltfatacidheat.com/",
    },
    {
      name: "Pollan, Michael - Cooked",
      url: "https://michaelpollan.com/",
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Panduan Utama Larutan Garam Keseimbangan dan Fermentasi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Larutan garam keseimbangan (equilibrium brine)</strong> adalah teknik definitif untuk menjamin hasil yang juicy dan aman. Berbeda dengan metode tradisional, teknik ini menghitung garam berdasarkan <strong>berat total</strong> air dan produk, memastikan salinitas yang konstan terlepas dari volume wadahnya.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1,5 - 2%',
          label: 'Rasio Ideal Daging',
          icon: 'mdi:food-steak',
        },
        {
          value: '2,5 - 3%',
          label: 'Rasio Fermentasi',
          icon: 'mdi:flask-outline',
        },
        {
          value: '18-22°C',
          label: 'Suhu Fermentasi',
          icon: 'mdi:thermometer',
        },
        {
          value: '0,5%',
          label: 'Gula Keseimbangan',
          icon: 'mdi:shaker-outline',
        },
      ],
    },
    {
      type: 'title',
      text: 'Perbedaan Rendaman Garam Kering dan Basah',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Rendaman Kering (Dry Brining)',
          icon: 'mdi:shaker-outline',
          description: 'Garam dioleskan langsung ke permukaan produk tanpa menggunakan air tambahan.',
          points: [
            'Kulit unggas jauh lebih renyah',
            'Rasa asli bahan lebih terkonsentrasi',
            'Memakan lebih sedikit ruang di kulkas',
            'Ideal untuk steak dan ayam utuh',
          ],
        },
        {
          title: 'Rendaman Basah (Wet Brining)',
          icon: 'mdi:water',
          description: 'Produk direndam dalam larutan air dan garam yang dihitung berdasarkan keseimbangan.',
          highlight: true,
          points: [
            'Transfer kelembapan yang lebih baik',
            'Memungkinkan penambahan aroma (rempah)',
            'Penggaraman lebih merata pada potongan besar',
            'Ideal untuk kalkun, babi, dan ikan',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Waktu dan Salinitas Menurut Aplikasi',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Kategori', 'Salinitas (%)', 'Waktu Minimum', 'Tujuan Utama'],
      rows: [
        ['Unggas dan Babi', '1,5% - 2,0%', '12 - 24 jam', 'Kecairan dan keempukan'],
        ['Ikan Putih', '1,0% - 1,5%', '20 - 45 menit', 'Kekokohan daging'],
        ['Lacto-fermentasi', '2,5% - 3,0%', '7 - 21 hari', 'Keamanan mikrobiologis'],
        ['Saus dan Pengawetan', '3,5% - 5,0%', '1+ bulan', 'Pengawetan jangka panjang'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Identifikasi Masalah pada Larutan Garam',
      html: 'Jika larutan garam berbau busuk (bukan asam), muncul jamur berwarna (hitam, merah muda) atau produk menjadi sangat lunak, segera buang. Jamur putih di permukaan (ragi Kahm) adalah normal pada fermentasi dan dapat disisihkan.',
    },
    {
      type: 'title',
      text: 'Glosarium Ahli Pengawetan',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Osmosis',
          definition: 'Proses fisik di mana garam menembus ke dalam sel makanan untuk menyeimbangkan konsentrasi.',
        },
        {
          term: 'Denaturasi',
          definition: 'Efek garam pada protein yang memungkinkan protein menahan lebih banyak air selama memasak.',
        },
        {
          term: 'Ragi Kahm',
          definition: 'Lapisan putih tipis yang terkadang muncul di permukaan fermentasi; tidak berbahaya tetapi menunjukkan kurangnya keasaman.',
        },
        {
          term: 'Lacto-fermentasi',
          definition: 'Fermentasi anaerobik di mana bakteri mengubah gula menjadi asam laktat, mengawetkan makanan.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Kualitas Air',
      html: 'Selalu hindari air keran dengan banyak kaporit karena dapat menghambat pertumbuhan bakteri baik dalam fermentasi Anda. Gunakan air saringan atau diamkan air selama 24 jam.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator keseimbangan kami menghilangkan keraguan dari resep Anda, memungkinkan Anda memasak dengan kepercayaan diri seorang profesional.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
