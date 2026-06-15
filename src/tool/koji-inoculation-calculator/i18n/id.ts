import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkulator Inokulasi dan Hidrasi Koji";
const description = "Hitung kadar air, dosis inokulasi spora, dan suhu inkubasi yang sempurna untuk membuat koji di rumah. Hindari batch gagal dengan kalkulator inokulasi dan hidrasi koji gratis kami.";
const faq = [
  {
    question: "Berapa target kadar air untuk memasak substrat koji?",
    answer: "Kadar air total ideal untuk nasi atau barley kukus saat menginokulasi Koji adalah antara 30% dan 35%. Ini setara dengan berat kukus sekitar 1,35x hingga 1,40x dari berat kering awal."
  },
  {
    question: "Berapa banyak bubuk spora (tane-koji) yang saya butuhkan?",
    answer: "Tingkat inokulasi standar adalah 1 gram campuran spora standar per 1 kilogram substrat kering. Jika menggunakan spora pekat, Anda perlu lebih sedikit (0,5g), sedangkan campuran encer membutuhkan lebih banyak (2,0g)."
  },
  {
    question: "Mengapa kontrol suhu sangat penting selama inkubasi koji?",
    answer: "Aspergillus oryzae tumbuh optimal antara 28C dan 34C. Jika suhu melebihi 38C, jamur bisa kepanasan, berhenti tumbuh, atau menghasilkan spora hijau/hitam yang tidak diinginkan. Di bawah 20C, pertumbuhan melambat secara signifikan."
  },
  {
    question: "Apa yang terjadi selama fase eksotermik?",
    answer: "Setelah 18 hingga 24 jam inkubasi, koji mulai tumbuh dengan cepat dan menghasilkan panasnya sendiri. Selama puncak eksotermik ini, Anda harus mengaduk substrat dan menurunkan panas inkubator untuk mencegah panas berlebih."
  }
];

const howTo = [
  {
    name: "Masukkan berat substrat kering",
    text: "Masukkan berat kering awal nasi atau barley Anda untuk menentukan ambang hidrasi target."
  },
  {
    name: "Lacak berat kukus",
    text: "Masukkan berat kukus aktual setelah dimasak. Kalkulator menentukan persentase air dan memeriksa apakah berada dalam kisaran ideal 30-35%."
  },
  {
    name: "Hitung dosis spora",
    text: "Pilih potensi spora Anda (standar, pekat, atau encer) untuk mendapatkan berat tepat bubuk spora yang akan diinokulasi."
  },
  {
    name: "Pantau parameter inkubasi",
    text: "Sesuaikan suhu dan kelembaban relatif untuk mensimulasikan pertumbuhan miselium dan tinjau garis waktu kurva termal 48 jam."
  }
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
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'kalkulator-inokulasi-koji',
  title: 'Kalkulator Inokulasi dan Hidrasi Koji',
  description: 'Hitung kadar air, dosis inokulasi spora, dan suhu inkubasi yang sempurna untuk membuat koji di rumah. Hindari batch gagal dengan kalkulator inokulasi dan hidrasi koji gratis kami.',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  ui: {
    title: 'Analisator Inokulasi Koji',
    subtitle: 'Optimalkan parameter fermentasi koji fase padat',
    dryWeightLabel: 'Berat Substrat Kering',
    steamedWeightLabel: 'Berat Kukus Aktual',
    targetRangeLabel: 'Kisaran Berat Kukus Target',
    moistureLabel: 'Kadar Air Saat Ini',
    potencyLabel: 'Potensi Spora',
    standardPotency: 'Spora Standar',
    concentratedPotency: 'Pekat',
    dilutedPotency: 'Campuran Encer',
    sporeDosageLabel: 'Dosis Spora',
    tempLabel: 'Suhu Inkubator',
    humidityLabel: 'Kelembaban Relatif',
    statusIdeal: 'Inkubasi Ideal',
    statusSlow: 'Pertumbuhan Lambat',
    statusInhibited: 'Terhambat / Dingin',
    statusOverheating: 'Kepanasan / Sporulasi',
    timelineTitle: 'Siklus Inkubasi Termal 48 Jam',
    stage1Name: '0-18j: Pemanasan',
    stage2Name: '18-36j: Puncak Eksotermik',
    stage3Name: '36-48j: Pematangan'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Cara Membuat Koji: Kadar Air, Dosis Spora, dan Suhu Sempurna untuk Aspergillus Oryzae',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Membuat koji di rumah membutuhkan tiga hal yang harus beres: <strong>hidrasi substrat</strong>, <strong>kepadatan inokulasi spora</strong>, dan <strong>kontrol suhu inkubasi</strong>. Jika salah satu dari ini salah, batch Anda bisa kepanasan, gagal diinokulasi, atau menumbuhkan jamur yang salah. <strong>Kalkulator inokulasi koji</strong> kami menghilangkan dugaan dengan menghitung berat kukus target, dosis spora yang tepat, dan status inkubasi waktu nyata berdasarkan input spesifik Anda.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '30-35%',
          label: 'Target Kadar Air',
          icon: 'mdi:water-percent'
        },
        {
          value: '1 g/kg',
          label: 'Tingkat Spora Standar',
          icon: 'mdi:seed-outline'
        },
        {
          value: '28-34°C',
          label: 'Suhu Ideal',
          icon: 'mdi:thermometer'
        },
        {
          value: '48 j',
          label: 'Total Inkubasi',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: 'Mengapa Kadar Air Menentukan Kualitas Koji',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Faktor terpenting dalam budidaya koji yang berhasil adalah <strong>kadar air substrat</strong>. Saat nasi atau barley dikukus, granula pati mengalami gelatinisasi dan menyerap air, menjadi dapat diakses oleh enzim yang diproduksi oleh Aspergillus oryzae. Kisaran kelembaban ideal sempit: <strong>30% hingga 35%</strong>. Di bawah 30%, miselium tidak dapat menarik cukup air untuk tumbuh dan produksi enzim terhenti. Di atas 35%, butiran menjadi lengket dan menggumpal, mengurangi porositas udara dan membuat jamur aerobik mati lemas.'
    },
    {
      type: 'list',
      items: [
        '<strong>Terlalu kering (di bawah 30%):</strong> Pertumbuhan miselium terhambat, produksi enzim menurun, dan koji tidak pernah sepenuhnya mengkolonisasi butiran.',
        '<strong>Terlalu basah (di atas 35%):</strong> Butiran saling menempel, kantong udara runtuh, dan bakteri atau jamur yang tidak diinginkan dapat mengalahkan Aspergillus oryzae.',
        '<strong>Kisaran target (30-35%):</strong> Butiran terasa padat, setiap butiran mudah dipisahkan, dan miselium menyebar merata dalam 48 jam.',
        '<strong>Cara mengukur:</strong> Timbang butiran kering Anda, kukus, lalu timbang lagi. Kalkulator menghitung persentase kadar air tepat Anda dari dua angka ini.'
      ]
    },
    {
      type: 'table',
      headers: ['Jenis Butiran', 'Berat Kering', 'Berat Kukus Target', 'Waktu Rendam', 'Waktu Kukus'],
      rows: [
        ['Beras Putih (butir pendek)', '1000 g', '1350-1400 g', '2-4 j', '30-40 mnt'],
        ['Beras Putih (butir panjang)', '1000 g', '1350-1400 g', '2-4 j', '30-40 mnt'],
        ['Barley Mutiara', '1000 g', '1350-1400 g', '4-8 j', '40-50 mnt'],
        ['Beras Merah', '1000 g', '1350-1400 g', '8-12 j', '45-60 mnt']
      ]
    },
    {
      type: 'title',
      text: 'Inokulasi Spora: Berapa Banyak Tane-Koji yang Anda Butuhkan?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Kepadatan inokulasi secara langsung mempengaruhi seberapa cepat jamur mengkolonisasi substrat dan seberapa kompetitifnya terhadap kontaminan. Tingkat standar adalah <strong>1 gram campuran spora per kilogram substrat kering</strong>, tetapi ini bervariasi menurut jenis spora.'
    },
    {
      type: 'proscons',
      title: 'Memilih Jenis Spora Anda',
      items: [
        {
          pro: 'Spora standar adalah format yang paling umum, mudah digunakan untuk pemula, dan terdokumentasi dengan baik dalam literatur pembuatan bir rumahan.',
          con: 'Volume bubuk lebih tinggi per batch dan mungkin mengandung bahan pengisi yang tidak berkontribusi pada inokulasi.'
        },
        {
          pro: 'Spora pekat menggunakan setengah bubuk untuk inokulasi yang sama, memiliki kemurnian lebih tinggi, dan lebih ekonomis untuk batch besar.',
          con: 'Lebih mudah overdosis, membutuhkan timbangan presisi (resolusi 0,01 g), dan meninggalkan lebih sedikit ruang untuk kesalahan jika dosis kurang.'
        },
        {
          pro: 'Campuran encer mudah didistribusikan di permukaan luas, lebih mudah digunakan dengan pencampuran tidak merata, dan cocok untuk pemula yang lebih suka cakupan terlihat.',
          con: 'Menggunakan lebih banyak bubuk per batch dan dapat memasukkan pati berlebih dari bahan pengisi.'
        }
      ]
    },
    {
      type: 'title',
      text: 'Kurva Panas Eksotermik: Mengapa Koji Menghasilkan Panasnya Sendiri',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Saat Aspergillus oryzae mengonsumsi pati dan mengubahnya menjadi gula sederhana, ia menghasilkan panas metabolik. Antara jam <strong>18 dan 36</strong> inkubasi, aktivitas biologis mencapai puncaknya, menghasilkan lonjakan eksotermik yang dapat menaikkan suhu hamparan butiran 5-10C di atas suhu lingkungan inkubator.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Tanda Tanda Koji Anda Kepanasan',
      html: 'Jika suhu hamparan butiran melebihi <strong>38C</strong>, enzim jamur mulai terdenaturasi dan jamur beralih ke mode reproduksi, menghasilkan <strong>spora hijau atau hitam</strong>. Batch akan berbau seperti amonia bukan manis dan kacangan. Anda harus segera mengaduk substrat dan menurunkan suhu inkubator untuk membawanya kembali di bawah 34C.'
    },
    {
      type: 'tip',
      title: 'Jadwal Pembalikan 12 Jam',
      html: 'Mulai pada jam 18, pecahkan hamparan butiran dan aduk setiap 12 jam. Ini melepaskan panas terperangkap, mendistribusikan kembali kelembaban, dan memberi miselium akses ke oksigen segar. Gunakan tangan bersih yang disanitasi atau sendok steril.'
    },
    {
      type: 'tip',
      title: 'Kelembaban Juga Penting',
      html: 'Jaga kelembaban relatif di atas <strong>65%</strong> selama inkubasi. Di bawah 40%, substrat mengering dan pertumbuhan berhenti. Di atas 90%, kondensasi dapat mendorong pertumbuhan bakteri pada permukaan butiran.'
    },
    {
      type: 'tip',
      title: 'Percayai Hidung Anda',
      html: 'Koji yang sehat berbau seperti kacang kastanye panggang manis atau jamur segar. Jika Anda mendeteksi amonia, rasa asam, atau busuk, batch mungkin telah kepanasan atau terkontaminasi. Segera buang dan singkirkan butiran yang terpengaruh.'
    },
    {
      type: 'card',
      icon: 'mdi:rice',
      title: 'Pembuatan Sake & Miso',
      html: 'Beras yang diinokulasi koji adalah fondasi <strong>sake</strong>, <strong>miso</strong>, dan <strong>amazake</strong>. Kontrol kelembaban yang presisi memastikan perkembangan enzim yang tepat untuk konversi pati menjadi gula.'
    },
    {
      type: 'card',
      icon: 'mdi:soy-sauce',
      title: 'Kecap & Tamari',
      html: 'Koji yang ditumbuhkan pada <strong>kedelai</strong> atau campuran kedelai-gandum mendorong fermentasi yang menghasilkan kecap kaya umami. Suhu yang konsisten menghindari rasa yang tidak diinginkan.'
    },
    {
      type: 'card',
      icon: 'mdi:shaker-outline',
      title: 'Shio Koji & Garum',
      html: '<strong>Shio koji</strong> (koji fermentasi garam) dan <strong>garum daging</strong> bergantung pada butiran yang sepenuhnya terk colonization. Kalkulator kami memastikan substrat Anda berada dalam jendela kelembaban ideal sebelum inokulasi.'
    },
    {
      type: 'title',
      text: 'Glosarium Inkubasi Koji',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Tane-Koji',
          definition: 'Bubuk spora yang digunakan untuk menginokulasi butiran kukus. Biasanya spora Aspergillus oryzae dicampur dengan pembawa pati seperti tepung beras.'
        },
        {
          term: 'Fase Eksotermik',
          definition: 'Periode antara 18 dan 36 jam inkubasi ketika Aspergillus oryzae menghasilkan cukup panas metabolik untuk menaikkan suhu hamparan butiran di atas tingkat lingkungan.'
        },
        {
          term: 'Gelatinisasi',
          definition: 'Proses memanaskan pati dengan adanya air sehingga granula membengkak dan menjadi dapat diakses oleh enzim amilase yang diproduksi oleh jamur.'
        },
        {
          term: 'Sporulasi',
          definition: 'Ketika jamur beralih dari pertumbuhan vegetatif ke mode reproduksi, berubah menjadi hijau atau hitam. Ini dipicu oleh stres panas di atas 38C dan merusak batch untuk penggunaan kuliner.'
        }
      ]
    },
    {
      type: 'summary',
      title: 'Poin Penting untuk Koji Sempurna',
      items: [
        'Targetkan 30-35% kadar air dalam butiran kukus. Gunakan kalkulator untuk menemukan target berat kukus yang tepat.',
        'Inokulasi pada 1 g/kg untuk spora standar, 0,5 g/kg untuk pekat, atau 2 g/kg untuk campuran encer.',
        'Pertahankan 28-34C dan di atas 65% kelembaban selama inkubasi. Aduk setiap 12 jam setelah jam 18.',
        'Perhatikan puncak eksotermik pada 18-36 jam. Jika suhu melebihi 38C, segera aduk dan turunkan panas.',
        'Percayai indra Anda: aroma kastanye manis = koji baik. Bau amonia atau asam = kepanasan atau kontaminasi.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
