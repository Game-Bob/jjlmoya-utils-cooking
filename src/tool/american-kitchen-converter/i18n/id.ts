import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Konverter Dapur Amerika: Cups ke Gram dan Suhu";
const description = "Konversikan cups, sendok makan, dan Fahrenheit ke sistem metrik. Kompas untuk memahami resep Amerika dengan presisi profesional.";
const faq = [
  {
    question: 'Apa perbedaan antara 1 cup dan 250ml?',
    answer: '1 cup AS = 236,588ml, bukan 250ml. Untuk tujuan praktis, kami menggunakan 240ml. Meskipun perbedaannya hanya 4%, hal ini dapat memengaruhi resep sensitif seperti macaron atau mousse.',
  },
  {
    question: 'Mengapa berat tepung tidak selalu sama?',
    answer: 'Karena tepung memadat seiring waktu dan selama transportasi. Tepung yang baru diayak beratnya lebih ringan daripada tepung yang sudah lama disimpan di lemari dapur. Itulah sebabnya pembuat roti profesional selalu menimbang, bukan mengukur volume.',
  },
  {
    question: 'Apa perbedaan antara Tbsp dan tsp?',
    answer: '1 Tablespoon (Tbsp/Sendok Makan) = 15ml. 1 Teaspoon (tsp/Sendok Teh) = 5ml. Satu sendok makan sama dengan 3 kali sendok teh. Dalam resep kue, kesalahan pada bumbu (yang diukur dalam tsp) sangat sering terjadi.',
  },
  {
    question: 'Apakah satu cup AS sama dengan satu cup imperial?',
    answer: 'Tidak. 1 US cup = 236ml. 1 Imperial cup (UK) = 284ml. Perbedaannya mencapai 20%. Kebanyakan blog AS menggunakan satuan US cups. Jika resep tidak menentukan, asumsikan itu adalah US cup.',
  },
  {
    question: 'Berapa derajat suhu untuk "gas 4" pada oven?',
    answer: 'Gas 4 = 180°C = 350°F. Ini adalah skala Inggris. Di dapur, kita mencari angka yang setara pada oven Anda: beberapa menggunakan pengaturan gas, yang lain menggunakan derajat elektronik.',
  },
];
const howTo = [
  {
    name: 'Pilih jenis konversi',
    text: 'Pilih antara Cups ke Gram, Sendok Makan/Sendok Teh ke Gram, atau Fahrenheit ke Celsius.',
  },
  {
    name: 'Pilih bahan makanan',
    text: 'Setiap bahan memiliki densitas yang berbeda. Tepung, gula, mentega: semuanya memiliki berat yang berbeda.',
  },
  {
    name: 'Masukkan jumlah',
    text: 'Ketik jumlah cup, sendok, atau derajat yang diinginkan. Konverter akan menghitung nilai setaranya secara instan.',
  },
  {
    name: 'Sesuaikan resep Anda',
    text: 'Dengan konversi yang akurat, kini Anda dapat mengikuti resep Amerika dengan presisi profesional.',
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
  slug: 'konverter-unit-dapur-amerika',
  title: 'Konverter Dapur Amerika: Cups ke Gram dan Suhu',
  description: 'Konversikan cups, sendok makan, dan Fahrenheit ke sistem metrik. Kompas untuk memahami resep Amerika dengan presisi profesional.',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  ui: {
    copied: 'Disalin',
    noHistory: 'Tidak ada riwayat',
    load: 'Muat',
    delete: 'Hapus',
    tabCups: 'Cups ke Gram',
    tabSpoons: 'Sendok ke Gram',
    tabTemperatures: 'Suhu',
    tabCupsAriaLabel: 'Cups ke Gram',
    tabSpoonsAriaLabel: 'Sendok ke Gram',
    tabTempsAriaLabel: 'Suhu Oven',
    stepSelectIngredient: 'Pilih Bahan',
    stepHowManyCups: 'Berapa Cup?',
    stepSelectMeasure: 'Pilih Ukuran',
    stepQuantity: 'Jumlah',
    stepOvenConversion: 'Konversi Oven',
    stepFrequentTemps: 'Suhu Resep yang Sering Digunakan',
    cupFlour: 'Tepung',
    cupFlourSub: '120g / cup',
    cupWhiteSugar: 'Gula Putih',
    cupWhiteSugarSub: '200g / cup',
    cupBrownSugar: 'Gula Merah',
    cupBrownSugarSub: '220g / cup',
    cupPowderSugar: 'Gula Halus',
    cupPowderSugarSub: '115g / cup',
    cupButter: 'Mentega',
    cupButterSub: '227g / cup',
    cupCocoa: 'Cokelat Bubuk',
    cupCocoaSub: '85g / cup',
    cupLiquids: 'Cairan',
    cupLiquidsSub: '240g / cup',
    cupOats: 'Gandum/Oat',
    cupOatsSub: '90g / cup',
    cupFlourAriaLabel: 'Tepung',
    cupWhiteSugarAriaLabel: 'Gula Putih',
    cupBrownSugarAriaLabel: 'Gula Merah',
    cupPowderSugarAriaLabel: 'Gula Halus',
    cupButterAriaLabel: 'Mentega',
    cupCocoaAriaLabel: 'Cokelat',
    cupLiquidsAriaLabel: 'Cairan',
    cupOatsAriaLabel: 'Gandum',
    stepperMinus: 'Kurangi',
    stepperPlus: 'Tambah',
    cupsAmountLabel: 'Jumlah Cup',
    spoonQuantityLabel: 'Jumlah',
    cupQuick1_4: '1/4 Cup',
    cupQuick1_3: '1/3 Cup',
    cupQuick1_2: '1/2 Cup',
    cupQuick1: '1 Cup',
    unitGrams: 'Gram',
    unitGramsML: 'Gram / Mililiter',
    spoonMeasureLabel: 'Pilih Ukuran',
    spoonTablespoon: 'Sendok Makan (Tbsp)',
    spoonTeaspoon: 'Sendok Teh (tsp)',
    spoonTablespoonAriaLabel: 'Sendok makan',
    spoonTeaspoonAriaLabel: 'Sendok teh',
    spoonSelectIngredient: 'Pilih Bahan',
    spoonLeavening: 'Pengembang',
    spoonLeaveningSub: 'Baking Powder',
    spoonSalt: 'Garam Halus',
    spoonSaltSub: 'Mineral',
    spoonSugar: 'Gula Putih',
    spoonSugarSub: 'Granulasi',
    spoonLiquids: 'Cairan',
    spoonLiquidsSub: 'Air, Minyak',
    spoonLeavingAriaLabel: 'Pengembang Kimia',
    spoonSaltAriaLabel: 'Garam',
    spoonSugarAriaLabel: 'Gula Putih',
    spoonLiquidsAriaLabel: 'Cairan',
    spoonQuick1_4: '1/4',
    spoonQuick1_2: '1/2',
    spoonQuick1: '1',
    spoonQuick2: '2',
    tempFahrenheit: 'Fahrenheit (°F)',
    tempCelsius: 'Celsius (°C)',
    tempFahrenheitAriaLabel: 'Fahrenheit',
    tempCelsiusAriaLabel: 'Celsius',
    tempPreset275: '275°F',
    tempPreset275Desc: '135°C - Pengeringan',
    tempPreset275AriaLabel: 'Atur 275 Fahrenheit',
    tempPreset325: '325°F',
    tempPreset325Desc: '165°C - Kue padat',
    tempPreset325AriaLabel: 'Atur 325 Fahrenheit',
    tempPreset350: '350°F',
    tempPreset350Desc: '175°C - Standar kue',
    tempPreset350AriaLabel: 'Atur 350 Fahrenheit',
    tempPreset400: '400°F',
    tempPreset400Desc: '200°C - Roti / Pai',
    tempPreset400AriaLabel: 'Atur 400 Fahrenheit',
    tempPreset425: '425°F',
    tempPreset425Desc: '220°C - Pizza / Pastry',
    tempPreset425AriaLabel: 'Atur 425 Fahrenheit',
  },
  seo: [
    {
      type: 'title',
      text: 'Panduan Utama Konversi Ukuran Dapur Amerika',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mengonversi <strong>cup ke gram</strong> atau <strong>Fahrenheit ke Celsius</strong> adalah langkah awal untuk menguasai resep internasional. Masakan Amerika sangat bergantung pada volume, yang dapat menyebabkan variasi hingga 25% pada bahan kering seperti tepung.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '120g',
          label: '1 Cup Tepung',
          icon: 'mdi:grain',
        },
        {
          value: '227g',
          label: 'Batang Mentega (Stick)',
          icon: 'mdi:cube-outline',
        },
        {
          value: '175°C',
          label: 'Setara 350°F',
          icon: 'mdi:thermometer',
        },
        {
          value: '240ml',
          label: 'Volume 1 Cup',
          icon: 'mdi:water-percent',
        },
      ],
    },
    {
      type: 'title',
      text: 'Perbedaan Penting antara Volume dan Berat',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Pengukuran berdasarkan Volume (Cup)',
          icon: 'mdi:cup-water',
          description: 'Digunakan dalam resep rumahan di AS. Mengukur ruang yang ditempati bahan.',
          points: [
            'Sangat bergantung pada tingkat kepadatannya',
            'Kesalahan umum sebesar 20-30% pada tepung',
            'Sering tidak konsisten di antara berbagai merek cup',
            'Perlu diayak terlebih dahulu untuk presisi lebih tinggi',
          ],
        },
        {
          title: 'Pengukuran berdasarkan Berat (Gram)',
          icon: 'mdi:scale-balance',
          description: 'Standar untuk pembuatan kue profesional dan Eropa. Presisi mutlak.',
          highlight: true,
          points: [
            'Selalu memiliki presisi +/- 1g',
            'Hasil yang konsisten dan dapat diulang',
            'Lebih sedikit peralatan yang kotor (hanya satu wadah)',
            'Memudahkan perhitungan skala matematis',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Kesetaraan Bahan-bahan yang Umum',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Bahan', '1 Cup (Volume)', 'Gram (Berat)', 'Densitas'],
      rows: [
        ['Tepung Terigu', '1 Cup', '120g', 'Rendah'],
        ['Gula Putih', '1 Cup', '200g', 'Sedang'],
        ['Gula Merah', '1 Cup', '220g (dipadatkan)', 'Tinggi'],
        ['Mentega', '1 Cup (2 stick)', '227g', 'Tinggi'],
        ['Cokelat Bubuk', '1 Cup', '85g', 'Sangat Rendah'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Apakah Kue Anda Menjadi Kering?',
      html: 'Masalah yang paling umum saat menggunakan cup adalah "mendorong cup" ke dalam karung tepung. Hal ini akan memadatkan bubuk tepung dan Anda bisa menambahkan hingga 40g tepung ekstra untuk setiap cup. Solusinya adalah <strong>selalu konversikan ke gram</strong> menggunakan kalkulator kami.',
    },
    {
      type: 'title',
      text: 'Glosarium Unit Amerika',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cup (Cangkir)',
          definition: 'Unit volume yang setara dengan sekitar 240ml. Ini adalah dasar dari dapur Amerika.',
        },
        {
          term: 'Tbsp (Tablespoon)',
          definition: 'Sendok makan, setara dengan 15ml atau 3 sendok teh.',
        },
        {
          term: 'tsp (Teaspoon)',
          definition: 'Sendok teh, setara dengan 5ml. Sangat penting untuk ragi dan garam.',
        },
        {
          term: 'Stick of Butter',
          definition: 'Format umum mentega di AS yang beratnya tepat 113.5g (setengah cup).',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Trik Menggunakan Sendok',
      html: 'Jika Anda tidak memiliki timbangan dan HARUS menggunakan cup, isilah cup dengan sendok tanpa menekan-nekannya, lalu ratakan permukaannya dengan pisau. Ini jauh lebih presisi daripada langsung mencelupkan cup ke dalam tepung.',
    },
    {
      type: 'paragraph',
      html: 'Menggunakan konverter profesional akan mengubah rasa frustrasi akibat resep asing menjadi keberhasilan pembuatan kue yang sempurna.',
    },
  ],
  faq: [
    {
      question: 'Apa perbedaan antara 1 cup dan 250ml?',
      answer: '1 cup AS = 236,588ml, bukan 250ml. Untuk tujuan praktis, kami menggunakan 240ml. Meskipun perbedaannya hanya 4%, hal ini dapat memengaruhi resep sensitif seperti macaron atau mousse.',
    },
    {
      question: 'Mengapa berat tepung tidak selalu sama?',
      answer: 'Karena tepung memadat seiring waktu dan selama transportasi. Tepung yang baru diayak beratnya lebih ringan daripada tepung yang sudah lama disimpan di lemari dapur. Itulah sebabnya pembuat roti profesional selalu menimbang, bukan mengukur volume.',
    },
    {
      question: 'Apa perbedaan antara Tbsp dan tsp?',
      answer: '1 Tablespoon (Tbsp/Sendok Makan) = 15ml. 1 Teaspoon (tsp/Sendok Teh) = 5ml. Satu sendok makan sama dengan 3 kali sendok teh. Dalam resep kue, kesalahan pada bumbu (yang diukur dalam tsp) sangat sering terjadi.',
    },
    {
      question: 'Apakah satu cup AS sama dengan satu cup imperial?',
      answer: 'Tidak. 1 US cup = 236ml. 1 Imperial cup (UK) = 284ml. Perbedaannya mencapai 20%. Kebanyakan blog AS menggunakan satuan US cups. Jika resep tidak menentukan, asumsikan itu adalah US cup.',
    },
    {
      question: 'Berapa derajat suhu untuk "gas 4" pada oven?',
      answer: 'Gas 4 = 180°C = 350°F. Ini adalah skala Inggris. Di dapur, kita mencari angka yang setara pada oven Anda: beberapa menggunakan pengaturan gas, yang lain menggunakan derajat elektronik.',
    },
  ],
  howTo: [
    {
      name: 'Pilih jenis konversi',
      text: 'Pilih antara Cups ke Gram, Sendok Makan/Sendok Teh ke Gram, atau Fahrenheit ke Celsius.',
    },
    {
      name: 'Pilih bahan makanan',
      text: 'Setiap bahan memiliki densitas yang berbeda. Tepung, gula, mentega: semuanya memiliki berat yang berbeda.',
    },
    {
      name: 'Masukkan jumlah',
      text: 'Ketik jumlah cup, sendok, atau derajat yang diinginkan. Konverter akan menghitung nilai setaranya secara instan.',
    },
    {
      name: 'Sesuaikan resep Anda',
      text: 'Dengan konversi yang akurat, kini Anda dapat mengikuti resep Amerika dengan presisi profesional.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
