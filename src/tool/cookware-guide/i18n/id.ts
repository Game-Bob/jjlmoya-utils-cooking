import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Pemilih Wajan Pintar: Panduan Peralatan Masak";
const description = "Panduan interaktif untuk memilih wajan atau panci terbaik sesuai gaya memasak Anda. Besi vs Baja vs Teflon. Temukan alat masak yang sempurna.";
const faq = [
  {
    question: 'Wajan apa yang terbaik untuk penggunaan sehari-hari?',
    answer: 'Bagi kebanyakan orang, wajan baja tahan karat (stainless steel) berkualitas tinggi atau wajan besi cor (cast iron) yang diproses (seasoned) dengan baik adalah yang terbaik. Baja bersifat serbaguna dan tahan selamanya, sementara besi menawarkan sifat anti-lengket alami tanpa bahan kimia.',
  },
  {
    question: 'Mengapa makanan menempel di baja tahan karat?',
    answer: 'Biasanya karena kurang panas atau memasukkan makanan terlalu dini. Coba "efek Leidenfrost": panaskan wajan sampai setetes air menggelinding seperti mutiara. Itulah saat wajan siap.',
  },
  {
    question: 'Bagaimana saya tahu jika wajan saya aman?',
    answer: 'Cari label "PFOA Free". Wajan besi, baja karbon, dan baja tahan karat adalah pilihan teraman dan paling tahan lama karena tidak memiliki lapisan yang terdegradasi seiring waktu.',
  },
  {
    question: 'Apa arti dari "seasoning" (membumbui/merawat) wajan?',
    answer: 'Ini adalah proses menciptakan lapisan minyak terpolimerisasi di atas logam (besi atau karbon). Ini melindungi dari karat dan menciptakan permukaan anti-lengket alami yang membaik setiap kali digunakan.',
  },
  {
    question: 'Berapa banyak yang harus saya keluarkan untuk wajan yang bagus?',
    answer: 'Satu set isi 2-3 wajan berkualitas menengah ke atas (stainless steel atau besi) bisa bertahan lebih dari 20 tahun. Lebih baik berinvestasi pada satu wajan berkualitas daripada membeli 5 wajan murah yang hanya bertahan 2 tahun. Kualitas lebih utama daripada kuantitas.',
  },
];
const howTo = [
  {
    name: 'Pilih gaya memasak Anda',
    text: 'Pilih antara api tinggi (menumis/sear), halus (telur), semur (masakan lambat), atau memasak cepat. Setiap gaya memiliki persyaratan berbeda.',
  },
  {
    name: 'Pilih bahan yang ideal',
    text: 'Berdasarkan gaya Anda, alat ini akan merekomendasikan bahan terbaik: besi, baja tahan karat, tembaga, atau teflon.',
  },
  {
    name: 'Baca karakteristiknya',
    text: 'Pahami keuntungan, kerugian, perawatan, dan daya tahan. Kemudian pilih wajan spesifik yang sesuai dengan anggaran dan kebutuhan Anda.',
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
  slug: 'panduan-wajan',
  title: 'Pemilih Wajan Pintar: Panduan Peralatan Masak',
  description: 'Panduan interaktif untuk memilih wajan atau panci terbaik sesuai gaya memasak Anda. Besi vs Baja vs Teflon. Temukan alat masak yang sempurna.',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq,  howTo,
  seo: [
    {
      type: 'title',
      text: 'Bahan Wajan: Sains dan Praktik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tidak semua wajan diciptakan sama. Setiap bahan memiliki sifat termodinamika berbeda yang memengaruhi cara mendistribusikan panas, suhu yang dapat ditahan, dan cara berinteraksi dengan makanan. Memahami perbedaan ini adalah kunci untuk memilih alat yang tepat.',
    },
    {
      type: 'title',
      text: 'Besi Cor (Cast Iron): Si Klasik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Keuntungan:</strong> Retensi panas yang sangat baik, distribusi merata, anti-lengket alami (jika dirawat), tahan berabad-abad, semakin baik seiring waktu. <strong>Kerugian:</strong> Berat, memerlukan perawatan, bisa berkarat, lebih lambat panas, tidak cocok untuk masakan asam dalam waktu lama.',
    },
    {
      type: 'title',
      text: 'Baja Tahan Karat (Stainless Steel): Si Serbaguna',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Keuntungan:</strong> Tahan lama, bebas perawatan, cocok untuk bahan asam (anggur, tomat), mudah dibersihkan, serbaguna, relatif ekonomis. <strong>Kerugian:</strong> Tidak anti-lengket secara alami, memerlukan teknik (pemanasan yang tepat), distribusi panas yang mungkin tidak merata (kecuali memiliki dasar berlapis).',
    },
    {
      type: 'title',
      text: 'Teflon/PTFE: Si Praktis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Keuntungan:</strong> Anti-lengket instan, mudah memasak, mudah dibersihkan, ekonomis. <strong>Kerugian:</strong> Terdegradasi berdasarkan waktu dan suhu, perlu diganti setiap 3-5 tahun, tidak aman pada suhu yang sangat tinggi (&gt;260°C).',
    },
  ],
  ui: {
    cookingStyle: 'Bagaimana Anda biasanya memasak?',
    material: 'Jenis Bahan',
    highHeat: 'Api Tinggi',
    sear: 'Menumis / Sear',
    delicate: 'Halus',
    fry: 'Telur / Dadar',
    stew: 'Semur',
    slowCook: 'Masakan Lambat',
    fast: 'Cepat',
    quick: 'Masak Cepat',
    recommendation: 'Rekomendasi',
    characteristics: 'Karakteristik',
    castIron: 'Besi Cor',
    stainlessSteel: 'Baja Tahan Karat',
    carbon: 'Baja Karbon',
    copper: 'Tembaga',
    nonstick: 'Anti-lengket (Teflon)',
    advantages: 'Keuntungan',
    disadvantages: 'Kerugian',
    maintenance: 'Perawatan',
    durability: 'Daya Tahan',
    heatRetention: 'Retensi Panas',
    price: 'Harga',
    step1: 'Bagaimana Anda biasanya memasak?',
    step2: 'Tingkat Perawatan',
    maintenanceLazy: 'Rendah / Tanpa',
    maintenanceLazyDesc: 'Tanpa kerumitan pencucian.',
    maintenanceCare: 'Sedang',
    maintenanceCareDesc: 'Cuci tangan secara normal.',
    maintenanceRitual: 'Ritual (Tinggi)',
    maintenanceRitualDesc: 'Saya menyukai proses perawatan (seasoning).',
    idealPan: 'Wajan Ideal Anda',
    selectOptions: 'Pilih opsi',
    seeRecommendation: 'Untuk melihat rekomendasi',
    pro: 'KELEBIHAN',
    con: 'KEKURANGAN',
    masterTip: 'Tips Master',
    defaultTip: 'Menggabungkan pilihan baja untuk menumis dan anti-lengket untuk telur adalah dasar dari dapur yang efisien.',
    stainlessName: 'Baja Tahan Karat',
    stainlessTag: 'Si Serba Bisa Pro',
    stainlessPro: 'Abadi dan tidak reaktif. Menumis dengan sempurna.',
    stainlessCon: 'Memerlukan teknik (Suhu) agar tidak lengket.',
    stainlessTip: 'Gunakan efek Leidenfrost: Saat setetes air menggulung seperti mutiara, wajan siap.',
    nonstickName: 'Anti-lengket',
    nonstickTag: 'Kenyamanan Maksimal',
    nonstickPro: 'Tidak ada yang menempel. Sangat mudah dibersihkan.',
    nonstickCon: 'Daya tahan singkat (2-3 tahun). Tidak untuk api tinggi.',
    nonstickTip: 'Selalu cuci dengan tangan dan gunakan alat kayu/silikon untuk menggandakan umur pakainya.',
    castironName: 'Besi Cor',
    castironTag: 'Si Klasik Sepanjang Masa',
    castironPro: 'Retensi panas yang luar biasa. Tahan selamanya.',
    castironCon: 'Sangat berat. Memerlukan perawatan bumbu (seasoning) rutin.',
    castironTip: 'Memanas secara perlahan, namun satu kali panas, ia sangat kuat. Ideal untuk steak.',
    carbonName: 'Baja Karbon',
    carbonTag: 'Kelincahan di Atas Api',
    carbonPro: 'Ringan seperti baja, performa seperti besi cor.',
    carbonCon: 'Akan berkarat jika dibiarkan lembap. Estetika yang sederhana.',
    carbonTip: 'Semakin hitam dan buruk kelihatannya, semakin baik ia bekerja. Itulah rahasia wok terbaik.',
    enamelName: 'Besi Cor Enamel',
    enamelTag: 'Kualitas Gourmet',
    enamelPro: 'Terbaik untuk masakan lambat. Estetika yang indah.',
    enamelCon: 'Sangat mahal. Lapisan enamel rapuh terhadap benturan keras.',
    enamelTip: 'Sangat cocok untuk semur yang lama. Lapisan enamel memungkinkan memasak bahan asam (tomat) tanpa masalah.',
  },
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
