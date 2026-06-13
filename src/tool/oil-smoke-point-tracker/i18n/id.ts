import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Pelacak Titik Asap Minyak: Estimator Umur & Degradasi Minyak Goreng';
const description = 'Pantau kualitas minyak goreng dan perkirakan penurunan titik asap saat ini. Lacak penggunaan, suhu, dan jenis makanan untuk mencegah akumulasi senyawa polar berbahaya.';

const faq = [
  {
    question: 'Mengapa titik asap minyak goreng menurun seiring waktu?',
    answer: 'Setiap kali minyak dipanaskan hingga suhu menggoreng, degradasi termal, hidrolisis, dan oksidasi memecah trigliserida menjadi asam lemak bebas (FFA), monoasilgliserol, dan diasilgliserol. Produk pemecahan ini memiliki titik didih dan titik asap yang jauh lebih rendah daripada trigliserida utuh, menyebabkan minyak berasap pada suhu yang lebih rendah dengan penggunaan berulang.',
  },
  {
    question: 'Apa itu senyawa polar dan mengapa diatur?',
    answer: 'Senyawa polar (TPC) adalah produk degradasi yang terbentuk selama menggoreng. Ketika melebihi 25% dari berat minyak, minyak dianggap terdegradasi, teroksidasi, dan berbahaya untuk dikonsumsi, menyebabkan rasa tidak enak dan potensi risiko kardiovaskular. Banyak negara Eropa secara hukum mewajibkan pembuangan minyak goreng ketika TPC melebihi 25%.',
  },
  {
    question: 'Bagaimana pelapisan tepung atau adonan memengaruhi degradasi minyak?',
    answer: 'Pelapisan tepung roti, adonan, dan tepung lepas menjatuhkan partikel makanan ke dalam minyak panas. Partikel ini dengan cepat menghangus dan mengarbonisasi pada suhu di atas 180 derajat Celcius, melepaskan asam lemak bebas dan bertindak sebagai katalis yang mempercepat degradasi termal. Pati bersih seperti kentang mendegradasi minyak jauh lebih lambat.',
  },
  {
    question: 'Berapa batas aman untuk penggunaan ulang minyak?',
    answer: 'Sebagai aturan praktis, minyak panas tinggi yang dimurnikan seperti kanola atau kacang dapat digunakan kembali 5 hingga 8 kali dalam kondisi bersih. Namun, minyak yang tidak dimurnikan atau minyak yang terpapar suhu di atas 190 derajat Celcius atau makanan berlapis tepung harus dibuang setelah 1 hingga 3 kali penggunaan.',
  },
];

const howTo = [
  {
    name: 'Pilih Jenis Minyak Goreng',
    text: 'Pilih minyak Anda dari daftar basis data. Minyak panas tinggi yang dimurnikan memiliki titik asap awal yang lebih tinggi daripada opsi yang tidak dimurnikan.',
  },
  {
    name: 'Lacak Siklus Menggoreng',
    text: 'Masukkan jumlah total sesi menggoreng yang telah dialami oleh batch minyak saat ini.',
  },
  {
    name: 'Masukkan Suhu Menggoreng',
    text: 'Sesuaikan penggeser untuk mencocokkan suhu rata-rata sesi menggoreng Anda. Suhu di atas 180 derajat Celcius mempercepat pemecahan.',
  },
  {
    name: 'Identifikasi Jenis Lapisan Makanan',
    text: 'Tentukan apakah Anda menggoreng pati bersih atau makanan berlapis tepung/tepung roti yang meninggalkan residu terkarbonisasi.',
  },
  {
    name: 'Periksa Titik Asap & Status Pembuangan',
    text: 'Tinjau titik asap terdegradasi dan pengukur pembuangan. Segera buang jika kesehatan minyak memasuki zona kritis.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent = {
  slug: 'pelacak-titik-asap-minyak',
  title: 'Pelacak Titik Asap Minyak',
  description: 'Pantau kualitas minyak goreng dan perkirakan penurunan titik asap saat ini. Lacak penggunaan, suhu, dan jenis makanan untuk mencegah akumulasi senyawa polar berbahaya.',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  ui: {
    oilPresetLabel: 'Jenis Minyak Goreng',
    presetAvocadoRefined: 'Minyak Alpukat (Dimurnikan)',
    presetSunflowerRefined: 'Minyak Bunga Matahari (Dimurnikan)',
    presetPeanutRefined: 'Minyak Kacang (Dimurnikan)',
    presetCanolaRefined: 'Minyak Kanola (Dimurnikan)',
    presetOliveEV: 'Minyak Zaitun Extra Virgin',
    presetOlivePomace: 'Minyak Zaitun Pomace',
    presetCoconutUnrefined: 'Minyak Kelapa (Tidak Dimurnikan)',
    presetSunflowerUnrefined: 'Minyak Bunga Matahari (Tidak Dimurnikan)',
    usesLabel: 'Siklus Menggoreng (Penggunaan)',
    tempLabel: 'Suhu Menggoreng',
    foodTypeLabel: 'Persiapan / Lapisan Makanan',
    optionStarch: 'Pati Bersih (Kentang, Kentang Goreng)',
    optionBreading: 'Makanan Bertepung, Beradonan, atau Berlapis Tepung Roti',
    baseSmokePointLabel: 'Titik Asap Dasar',
    currentSmokePointLabel: 'Titik Asap Terdegradasi',
    polarCompoundsLabel: 'Senyawa Polar (TPC)',
    polymerizationLabel: 'Kesehatan Polimerisasi Minyak',
    statusLabel: 'Profil Keamanan Minyak',
    statusGood: 'AMAN DIGUNAKAN KEMBALI',
    statusCaution: 'HATI-HATI - SEGERA SARING',
    statusDiscard: 'SEGERA BUANG',
    adviceGood: 'Sifat minyak stabil. Lanjutkan menggoreng, tetapi saring partikel makanan sisa setelah dingin.',
    adviceCaution: 'Degradasi telah dimulai. Titik asap telah menurun. Kami sarankan menyaring dan hanya menggunakan satu kali lagi.',
    adviceDiscard: 'Degradasi kritis tercapai. Konsentrasi senyawa polar tinggi. Buang untuk mencegah ketengikan dan risiko kesehatan.',
    gaugeSafe: 'Aman',
    gaugeCaution: 'Peringatan',
    gaugeDiscard: 'Buang',
    limitLabel: 'Batas',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Kimia Menggoreng: Mengapa Minyak Terdegradasi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Menggoreng adalah salah satu teknik memasak yang paling intens secara kimia. Ketika makanan direndam dalam minyak pada suhu tinggi (biasanya antara 160 dan 190 derajat Celcius), minyak secara bersamaan terpapar panas, kelembapan dari makanan, dan oksigen dari udara. Ini memicu tiga reaksi kimia yang berbeda: hidrolisis (air memecah ikatan ester), oksidasi (oksigen menciptakan hidroperoksida), dan polimerisasi (molekul terdegradasi bergabung menjadi rantai tebal dan kental). Seiring berjalannya reaksi ini, konsentrasi total senyawa polar (TPC) meningkat, dan suhu di mana minyak mulai terurai dan berasap turun secara signifikan.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'TPC 25%', label: 'Batas Pembuangan Legal', icon: 'mdi:alert-octagon' },
        { value: '180\u00b0C', label: 'Ambang Suhu Kritis', icon: 'mdi:thermometer-alert' },
        { value: '2,2x', label: 'Laju Peluruhan Pelapisan', icon: 'mdi:chart-timeline-variant' },
        { value: 'FFA', label: 'Penyebab Asam Lemak Bebas', icon: 'mdi:molecule' },
      ],
    },
    {
      type: 'title',
      text: 'Senyawa Polar dan Regulasi Kesehatan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Total Senyawa Polar (TPC) berfungsi sebagai standar internasional untuk mengukur tingkat degradasi lemak goreng. Di dapur profesional, menggunakan minyak dengan konsentrasi TPC melebihi 25% dilarang secara hukum di beberapa negara karena masalah keamanan. Senyawa polar ini adalah penghambat penyerapan, mengurangi efisiensi memasak, dan menurunkan kerenyahan kerak gorengan. Lebih penting lagi, mengonsumsi minyak teroksidasi secara teratur berkontribusi pada konsumsi radikal bebas dan senyawa beracun yang terkait dengan masalah kardiovaskular.',
    },
    {
      type: 'title',
      text: 'Membandingkan Jenis Minyak: Titik Asap Awal',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Minyak Dimurnikan (Panas Tinggi)',
          icon: 'mdi:shield-check',
          description: 'Minyak yang diproses untuk menghilangkan senyawa volatil, asam lemak bebas, dan kotoran. Memiliki titik asap awal yang sangat tinggi.',
          points: ['Alpukat Dimurnikan: 270\u00b0C / 518\u00b0F', 'Bunga Matahari Dimurnikan: 232\u00b0C / 450\u00b0F', 'Kacang Dimurnikan: 232\u00b0C / 450\u00b0F', 'Ketahanan tinggi terhadap pemecahan awal'],
        },
        {
          title: 'Minyak Tidak Dimurnikan (Panas Rendah / Beraroma)',
          icon: 'mdi:leaf',
          description: 'Minyak cold-pressed atau virgin yang mengandung jumlah tinggi elemen alami, mineral, dan asam lemak bebas.',
          highlight: true,
          points: ['Zaitun Extra Virgin: 190\u00b0C / 374\u00b0F', 'Kelapa Tidak Dimurnikan: 177\u00b0C / 350\u00b0F', 'Bunga Matahari Tidak Dimurnikan: 107\u00b0C / 225\u00b0F', 'Terdegradasi sangat cepat di bawah panas'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Titik Asap Minyak Goreng & Tabel Referensi Penggunaan Ulang Maksimum',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Varietas Minyak', 'Titik Asap Dasar (\u00b0C)', 'Titik Asap Dasar (\u00b0F)', 'Kondisi / Pemrosesan', 'Maks. Penggunaan yang Direkomendasikan'],
      rows: [
        ['Minyak Alpukat (Dimurnikan)', '270\u00b0C', '518\u00b0F', 'Dimurnikan', '10 hingga 12 kali'],
        ['Minyak Zaitun Pomace', '238\u00b0C', '460\u00b0F', 'Dimurnikan', '8 hingga 10 kali'],
        ['Minyak Bunga Matahari (Dimurnikan)', '232\u00b0C', '450\u00b0F', 'Dimurnikan', '6 hingga 8 kali'],
        ['Minyak Kacang (Dimurnikan)', '232\u00b0C', '450\u00b0F', 'Dimurnikan', '6 hingga 8 kali'],
        ['Minyak Kanola (Dimurnikan)', '204\u00b0C', '400\u00b0F', 'Dimurnikan', '5 hingga 7 kali'],
        ['Minyak Zaitun Extra Virgin', '190\u00b0C', '374\u00b0F', 'Cold-Pressed', '2 hingga 3 kali'],
        ['Minyak Kelapa (Tidak Dimurnikan)', '177\u00b0C', '350\u00b0F', 'Tidak Dimurnikan', '1 hingga 2 kali'],
        ['Minyak Bunga Matahari (Tidak Dimurnikan)', '107\u00b0C', '225\u00b0F', 'Tidak Dimurnikan', 'Jangan gunakan untuk menggoreng'],
      ],
    },
    {
      type: 'title',
      text: 'Tanda Peringatan Kritis Minyak Terdegradasi',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Bahaya: Ketika Minyak Goreng Menjadi Beracun',
      html: 'Jangan terus menggunakan kembali minyak jika Anda mengamati gejala berikut: <strong>bau tengik atau seperti sabun</strong>, warna gelap dan keruh, atau <strong>busa berlebihan</strong> di sekitar makanan. Jika minyak mulai berasap pada suhu memasak normal (170-180\u00b0C), ini menunjukkan titik asap telah merosot karena akumulasi Asam Lemak Bebas (FFA) yang ekstrem. Memasak dengan minyak terdegradasi mentransfer senyawa polar beracun dan unsur karsinogenik ke dalam makanan Anda, merusak rasa dan kesehatan.',
    },
    {
      type: 'title',
      text: 'Cara Memperpanjang Kualitas Minyak Goreng',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Saring Residu Terkarbonisasi Segera',
      html: 'Menggoreng makanan beradonan atau bertepung meninggalkan partikel mikro yang mengendap di dasar penggorengan. Partikel ini terus menghangus selama memasak, bertindak sebagai katalis yang mempercepat peluruhan minyak. Untuk memperlambat proses ini, selalu saring permukaan selama menggoreng, dan <strong>saring minyak yang sudah dingin</strong> melalui saringan halus, kain katun tipis, atau saringan kopi setelah setiap sesi menggoreng. Simpan minyak yang sudah disaring dalam wadah kaca tertutup di tempat yang gelap dan sejuk.',
    },
    {
      type: 'title',
      text: 'Praktik Terbaik untuk Menggoreng',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Keringkan permukaan makanan secara menyeluruh</strong> - Kelembapan berlebih memicu hidrolisis cepat, memecah minyak menjadi asam lemak bebas.',
        '<strong>Hindari memberi garam sebelum menggoreng</strong> - Garam bertindak sebagai katalis yang mempercepat oksidasi minyak; bumbui makanan segera setelah diangkat dari minyak panas.',
        '<strong>Pertahankan suhu optimal</strong> - Tetap antara 170\u00b0C dan 180\u00b0C. Lebih tinggi mempercepat pemecahan termal, sementara lebih rendah menyebabkan makanan menyerap minyak berlebih.',
        '<strong>Jangan menambahkan minyak baru ke minyak lama</strong> - Mencampur minyak segar dengan minyak terdegradasi mempercepat pemecahan minyak baru alih-alih memulihkannya.',
      ],
    },
    {
      type: 'title',
      text: 'Glosarium Menggoreng & Degradasi Lipid',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Titik Asap', definition: 'Suhu di mana minyak atau lemak mulai terus menerus terurai dan menghasilkan asap kebiruan yang terlihat, melepaskan akrolein.' },
        { term: 'Total Senyawa Polar (TPC)', definition: 'Indikator standar global untuk degradasi minyak, mewakili persentase berat total senyawa teroksidasi, FFA, dan polimer.' },
        { term: 'Hidrolisis', definition: 'Reaksi kimia di mana molekul air memecah trigliserida menjadi asam lemak bebas dan gliserol. Dipicu oleh kelembapan makanan.' },
        { term: 'Polimerisasi', definition: 'Proses di mana molekul minyak yang rusak akibat panas bergabung membentuk struktur makromolekul besar, meningkatkan viskositas minyak.' },
        { term: 'Asam Lemak Bebas (FFA)', definition: 'Asam karboksilat yang dilepaskan dari trigliserida selama hidrolisis. Secara langsung menurunkan titik asap awal lemak.' },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
