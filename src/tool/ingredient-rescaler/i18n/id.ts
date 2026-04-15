import type { ToolLocaleContent } from '../../../types';

const title = 'Pengatur Takaran Bahan & Resep';
const description = 'Ubah skala resep secara otomatis berdasarkan jumlah porsi. Hitung jumlah bahan yang tepat dengan mengalikan atau mengurangi resep Anda tanpa repot.';

const faq = [
  {
    question: 'Mengapa faktor konversi saya menyertakan desimal?',
    answer: 'Karena proporsi kuliner tidak selalu bulat. Jika Anda mengubah skala resep dari 4 orang menjadi 7 orang, faktornya tepat 1,75. Bahan-bahan dikalikan dengan angka tersebut, meskipun hasilnya berupa pecahan. Ini lebih akurat daripada pembulatan sembarangan.',
  },
  {
    question: 'Apa yang terjadi jika saya memasukkan "1/2 sdt garam"?',
    answer: 'Alat ini mencari angkanya terlebih dahulu. Ia akan mengenali "1" sebagai jumlah, lalu "/2" sebagai bagian dari satuan. Hasilnya adalah "0,5" dan akan diskalakan dengan benar. Untuk pecahan seperti "1/2", sebaiknya masukkan "0,5" secara langsung (lebih jelas) atau alat akan menginterpretasikannya sebagai pembagian.',
  },
  {
    question: 'Haruskah saya membulatkan hasil akhirnya?',
    answer: 'Tergantung pada bahannya. Untuk tepung, ya. Untuk ragi atau rempah-rempah, presisi kurang krusial (skalakan ke 75% dari yang ditentukan). Untuk telur: jika Anda mendapatkan 2,3, gunakan 2 telur utuh + bagian dari telur ketiga (ditimbang), atau bulatkan ke 2 jika masakan memungkinkan.',
  },
  {
    question: 'Mengapa hasilnya tidak berubah saat saya mengganti porsi?',
    answer: 'Pastikan kolom bahan sudah terisi. Jika kosong, tidak ada yang bisa diskalakan. Periksa juga apakah angka pada bahan Anda dapat dikenali (misalnya: "500g", "1/2 sdt").',
  },
  {
    question: 'Apakah ini berfungsi dengan ukuran imperial (ons, cangkir)?',
    answer: 'Secara teknis ya, alat ini membaca angka dan skala. Namun presisi terbatas pada ukuran cangkir (volume tidak konsisten). Disarankan untuk mengubah ke gram sebelum mengubah skala.',
  },
];

const howTo = [
  {
    name: 'Masukkan porsi Anda',
    text: 'Pada kolom "Asli", masukkan jumlah orang sesuai desain resep. Pada kolom "Tujuan", masukkan jumlah orang yang akan Anda masak.',
  },
  {
    name: 'Tempelkan daftar bahan Anda',
    text: 'Salin dan tempel daftar Anda apa adanya. Satu bahan per baris. Alat ini mengenali angka di awal (500g, 1/2, 2,5) dan mengubah skala secara otomatis.',
  },
  {
    name: 'Sesuaikan menurut konteks',
    text: 'Hasilnya akurat secara matematis, tetapi memasak adalah seni. Rempah-rempah: skalakan ke 75%. Ragi: gunakan lebih sedikit dari teori untuk jumlah besar. Waktu masak tidak pernah diskalakan.',
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
  operatingSystem: 'All',
};

export const content: ToolLocaleContent = {
  slug: 'pengatur-skala-bahan',
  title,
  description,
  ui: {
    servings: 'Porsi',
    original: 'Asli',
    desired: 'Tujuan',
    multiplyingFactor: 'Faktor Pengali',
    ingredientsList: 'Daftar Bahan',
    pasteHere: 'Tempel daftar Anda di sini.',
    exampleLine1: 'Misal:',
    exampleLine2: '500g Tepung',
    exampleLine3: '300ml Air',
    exampleLine4: '10g Garam',
    result: 'Hasil',
    copy: 'Salin',
    copied: 'Tersalin!',
    emptyState: 'Bahan-bahan yang disesuaikan akan muncul di sini...',
    defaultIngredient1: '200g Tepung',
    defaultIngredient2: '100ml Susu',
    defaultIngredient3: '2 Telur',
  },
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq,
  bibliographyTitle: 'Bibliografi',
  bibliography: [
    {
      name: 'Harold McGee - On Food and Cooking: The Science and Lore of the Kitchen',
      url: 'https://en.wikipedia.org/wiki/Harold_McGee',
    },
    {
      name: 'The Flavor Bible by Karen Page and Andrew Dornenburg',
      url: 'https://www.flavorprints.com/',
    },
    {
      name: 'Modernist Cuisine - Teknik penskalaan ilmiah',
      url: 'https://www.modernistcuisine.com/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Panduan Utama untuk Penskalaan dan Konversi Resep',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Penskalaan bahan</strong> adalah salah satu tugas paling kritis dan rentan kesalahan di dapur profesional. Ini bukan sekadar mengalikan angka, tetapi memahami bagaimana kimia dan fisika makanan bereaksi terhadap perubahan volume dan luas permukaan.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: 'x1.75',
          label: 'Faktor dari 4 ke 7 org.',
          icon: 'mdi:calculator',
        },
        {
          value: '75%',
          label: 'Penyesuaian Rempah',
          icon: 'mdi:shaker-outline',
        },
        {
          value: '0%',
          label: 'Penskalaan Waktu',
          icon: 'mdi:timer-off',
        },
        {
          value: '100g',
          label: 'Basis Referensi',
          icon: 'mdi:weight-gram',
        },
      ],
    },
    {
      type: 'title',
      text: 'Perbedaan Antara Penskalaan Linear dan Kontekstual',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Penskalaan Linear Matematis',
          icon: 'mdi:math-log',
          description: 'Perkalian langsung semua nilai dengan faktor konversi yang diperoleh.',
          points: [
            'Sangat cocok untuk tepung dan cairan dasar',
            'Ideal untuk kue presisi dingin',
            'Berfungsi baik pada perubahan kecil (x2, x0,5)',
            'Mudah dihitung secara otomatis',
          ],
        },
        {
          title: 'Penskalaan Kontekstual Dapur',
          icon: 'mdi:chef-hat',
          description: 'Penyesuaian proporsi berdasarkan saturasi rasa dan penguapan.',
          highlight: true,
          points: [
            'Menghindari kelebihan garam dan rempah',
            'Mempertimbangkan luas permukaan penguapan',
            'Menyesuaikan ragi berdasarkan massa',
            'Memerlukan pengalaman dan penilaian koki',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Faktor Konversi Berdasarkan Jumlah Tamu',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Dari Porsi', 'Ke Porsi', 'Faktor (FC)', 'Tingkat Kesulitan'],
      rows: [
        ['2 orang', '4 orang', 'x 2.0', 'Rendah (Linear)'],
        ['4 orang', '6 orang', 'x 1.5', 'Rendah (Linear)'],
        ['4 orang', '10 orang', 'x 2.5', 'Sedang (Perhatikan rempah)'],
        ['4 orang', '25 orang', 'x 6.25', 'Tinggi (Kontekstual)'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Masalah Umum Saat Melipatgandakan Resep',
      html: 'Jika Anda merasa rasanya terlalu kuat setelah penskalaan (terutama rasa pedas atau asin), kurangi skala bahan spesifik tersebut menjadi 75%. Jangan pernah melipatgandakan waktu masak; suhu internal dicapai berdasarkan ketebalan bahan, bukan berat total.',
    },
    {
      type: 'title',
      text: 'Glosarium Terminologi Standarisasi',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Faktor Konversi',
          definition: 'Angka yang digunakan sebagai pengali semua bahan: Jumlah Tujuan / Jumlah Asli.',
        },
        {
          term: 'Penyusutan Masak',
          definition: 'Kehilangan berat bahan karena penguapan atau keluarnya lemak.',
        },
        {
          term: 'Berat Kotor vs Netto',
          definition: 'Berat sebelum dan sesudah bahan dibersihkan.',
        },
        {
          term: 'Hasil (Yield)',
          definition: 'Jumlah total produk jadi setelah penskalaan dan pemasakan.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Trik Kocokan Telur',
      html: 'Jika kalkulator menunjukkan 2,3 telur, kocok satu telur utuh, timbang, dan gunakan hanya 30% dari beratnya. Ini adalah satu-satunya cara menjaga presisi pada pembuatan kue halus.',
    },
    {
      type: 'paragraph',
      html: 'Alat kami menyederhanakan matematika agar Anda dapat mencurahkan energi untuk hal yang benar-benar penting: kreativitas dan rasa.',
    },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
