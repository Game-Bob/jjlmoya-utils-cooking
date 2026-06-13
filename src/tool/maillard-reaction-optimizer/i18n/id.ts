import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Optimizer Reaksi Maillard: Kalkulator Pencokelatan pH & Suhu';
const description = 'Hitung dengan tepat berapa banyak soda kue yang perlu ditambahkan per kilo makanan untuk mempercepat reaksi Maillard. Hindari rasa sabun dengan tetap berada dalam batas alkalinitas yang aman.';

const faq = [
  {
    question: 'Apa itu reaksi Maillard dan mengapa penting dalam memasak?',
    answer: 'Reaksi Maillard adalah reaksi kimia antara asam amino dan gula pereduksi yang memberikan rasa khas pada makanan yang kecokelatan. Reaksi ini bertanggung jawab atas kerak pada steak panggang, warna keemasan roti, kopi sangrai, dan bawang karamel. Reaksi ini berlangsung paling cepat antara 140°C dan 165°C.',
  },
  {
    question: 'Bagaimana soda kue (natrium bikarbonat) mempercepat pencokelatan?',
    answer: 'Soda kue menaikkan pH permukaan makanan, membuatnya lebih basa. Reaksi Maillard berlangsung jauh lebih cepat dalam lingkungan basa. Menaikkan pH dari 6 ke 8 dapat menggandakan atau melipatgandakan kecepatan pencokelatan. Namun, terlalu banyak soda kue menghasilkan rasa pahit logam dan sabun  -  itulah sebabnya kalkulator ini memberlakukan batas aman.',
  },
  {
    question: 'Berapa jumlah maksimum soda kue yang aman per kilogram makanan?',
    answer: 'Batas aman umum adalah 1,5 gram soda kue per kilogram makanan. Di atas ambang ini, risiko rasa tidak enak (logam, sabun, atau kimia) meningkat drastis. Jumlah yang kami rekomendasikan adalah setengah dari batas maksimum, yang memberikan percepatan pencokelatan signifikan dengan risiko rasa minimal.',
  },
  {
    question: 'Apa yang terjadi jika suhu terlalu rendah untuk reaksi Maillard?',
    answer: 'Di bawah 110°C, yang terjadi terutama adalah penguapan air dan tidak ada pencokelatan Maillard yang berarti. Antara 110°C dan 140°C, pencokelatan terjadi perlahan. Rentang suhu optimal adalah 140°C hingga 180°C. Di atas 180°C, pirolisis dimulai  -  makanan terbakar dan menghasilkan senyawa pahit dan menyengat, bukan rasa pencokelatan yang diinginkan.',
  },
];

const howTo = [
  {
    name: 'Timbang makanan Anda',
    text: 'Masukkan berat total makanan yang ingin Anda cokelatkan dalam gram.',
  },
  {
    name: 'Atur suhu memasak',
    text: 'Masukkan suhu permukaan memasak atau suhu oven Anda. Zona Maillard optimal adalah 140-180°C.',
  },
  {
    name: 'Sesuaikan jumlah soda kue',
    text: 'Slider default berada di setengah batas aman maksimum. Naikkan dengan hati-hati  -  kalkulator akan memperingatkan Anda sebelum mencapai zona bahaya.',
  },
  {
    name: 'Baca perkiraan pH dan pengali kecepatan',
    text: 'Kalkulator menunjukkan seberapa cepat pencokelatan terjadi pada level pH yang Anda pilih dibandingkan pH default 6.',
  },
  {
    name: 'Periksa tingkat risiko rasa',
    text: 'Label rasa menunjukkan aman, waspada, atau bahaya berdasarkan perkiraan pH permukaan. Tetap di zona hijau untuk hasil terbaik.',
  },
  {
    name: 'Oleskan soda kue secara merata',
    text: 'Larutkan jumlah yang direkomendasikan dalam sedikit air dan oleskan atau aduk dengan makanan sebelum dimasak. Distribusi yang tidak merata menyebabkan pencokelatan belang.',
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'optimizer-reaksi-maillard',
  title: 'Optimizer Reaksi Maillard',
  description: 'Hitung dengan tepat berapa banyak soda kue yang perlu ditambahkan per kilo makanan untuk mempercepat reaksi Maillard. Hindari rasa sabun dengan tetap berada dalam batas alkalinitas yang aman.',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  ui: {
    title: 'Optimizer Reaksi Maillard',
    headerLabel: 'Kimia Pencokelatan',
    flavorSafe: 'pH Aman',
    flavorCaution: 'Waspada: Basa',
    flavorDanger: 'Bahaya: Risiko Sabun',
    unitLabel: 'Satuan',
    metricUnit: 'Metrik',
    imperialUnit: 'Imperial',
    weightLabel: 'Berat Makanan',
    weightUnit: 'g',
    weightOz: 'oz',
    tempLabel: 'Suhu Permukaan',
    tempUnit: '°C',
    degreesF: '°F',
    tempLow: 'Lambat: {min} - {max}',
    tempOpt: 'Optimal: {min} - {max}',
    tempHigh: 'Pirolisis: >{min}',
    sodaLabel: 'Soda Kue',
    sodaUnit: 'g',
    sodaOz: 'oz',
    sodaNote: 'Setengah dari batas aman maksimum, dorongan pencokelatan ringan',
    sodaCautionNote: 'Mendekati maksimum, pantau rasa dengan saksama',
    sodaDangerNote: 'Melebihi batas aman maksimum, risiko rasa sabun',
    sodaRecommended: 'Soda Kue yang Direkomendasikan',
    sodaMax: 'Batas Aman Maksimum',
    speedLabel: 'Kecepatan Reaksi',
    browningLabel: 'Progres Pencokelatan',
    rawLabel: 'Mentah',
    goldenLabel: 'Keemasan',
    burntLabel: 'Gosong',
    phEstimated: 'Perk. pH Permukaan',
    timeSaved: 'Waktu Dihemat',
    errorTempTooLow: 'Suhu di bawah 110°C. Reaksi Maillard memerlukan setidaknya 110°C untuk dimulai. Di bawah ambang ini, hanya terjadi penguapan air tanpa pencokelatan yang berarti.',
    errorWeightTooLow: 'Berat makanan harus lebih dari 0g.',
    footerTemplate: '<span class="mr-footer-stat"><strong>{weight}</strong><small>{wunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">pada <strong>{temp}</strong><small>{tunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{soda}</strong><small>{sunit}</small> soda kue</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">x<strong>{multiplier}</strong> kecepatan</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{timeSaved}</strong>% dihemat</span>',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Optimizer Reaksi Maillard: Kuasai Ilmu Pencokelatan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Reaksi Maillard adalah cawan suci masakan gurih. Reaksi ini menciptakan rasa yang dalam dan kompleks dari steak panggang, kerak roti keemasan, dan bawang karamel. Dinamai dari kimiawan Prancis Louis-Camille Maillard, reaksi antara asam amino dan gula pereduksi ini menghasilkan ratusan senyawa rasa. Dengan memanipulasi pH menggunakan soda kue, Anda dapat <strong>menggandakan atau melipatgandakan</strong> kecepatan pencokelatan tanpa membakar. Kalkulator ini menunjukkan dengan tepat berapa banyak yang harus digunakan dan memperingatkan Anda sebelum melewati batas ke wilayah rasa sabun.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '~140°C', label: 'Suhu aktivasi Maillard', icon: 'mdi:thermometer' },
        { value: '2-3x', label: 'Peningkatan kecepatan pada pH 8', icon: 'mdi:speedometer' },
        { value: '1.5 g/kg', label: 'Batas aman maks soda kue', icon: 'mdi:scale' },
        { value: 'pH 8.5', label: 'Ambang rasa sabun', icon: 'mdi:alert-circle' },
      ],
    },
    {
      type: 'title',
      text: 'Tabel Dosis Soda Kue berdasarkan Berat Makanan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gunakan tabel referensi ini untuk dengan cepat menentukan jumlah soda kue yang direkomendasikan dan maksimum untuk berat makanan umum. Jumlah yang direkomendasikan adalah <strong>setengah dari batas aman maksimum</strong>, memberikan percepatan pencokelatan yang nyata dengan risiko rasa minimal.',
    },
    {
      type: 'table',
      headers: ['Berat Makanan', 'Rekomendasi (g)', 'Batas Aman Maks (g)', 'Perk. pH', 'Peningkatan Kecepatan'],
      rows: [
        ['250g（1 bawang）', '0.19 g', '0.38 g', '6.5', 'x1.2'],
        ['500g（2 bawang）', '0.38 g', '0.75 g', '6.5', 'x1.2'],
        ['750g（3 bawang）', '0.56 g', '1.13 g', '6.5', 'x1.2'],
        ['1000g（1 kg）', '0.75 g', '1.50 g', '7.0', 'x1.6'],
        ['1500g', '1.13 g', '2.25 g', '7.0', 'x1.6'],
        ['2000g', '1.50 g', '3.00 g', '7.0', 'x2.0'],
        ['3000g', '2.25 g', '4.50 g', '7.0', 'x2.0'],
        ['5000g', '3.75 g', '7.50 g', '7.0', 'x2.0'],
      ],
    },
    {
      type: 'title',
      text: 'Memahami pH Permukaan dan Pengaruhnya terhadap Pencokelatan',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'pH Netral（6.0）',
          icon: 'mdi:water',
          description: 'pH alami sebagian besar daging mentah dan sayuran. Reaksi Maillard berlangsung pada kecepatan dasar.',
          highlight: false,
          points: ['Kecepatan reaksi: x1.0 (dasar)', 'Sepenuhnya alami, tanpa aditif', 'Terbaik untuk: puris, metode tradisional', 'Pencokelatan lebih lambat, lebih banyak waktu mengontrol kematangan'],
        },
        {
          title: 'Basa Ringan（pH 7.0 hingga 7.5）',
          icon: 'mdi:flask-round-bottom',
          description: 'Dicapai dengan jumlah soda kue yang direkomendasikan. Peningkatan kecepatan yang nyata tanpa dampak rasa.',
          highlight: true,
          points: ['Kecepatan reaksi: x1.5-2.0', '½ sdt per kg (sekitar 0.75g)', 'Terbaik untuk: bawang karamel, sayuran panggang', 'Titik ideal untuk sebagian besar juru masak rumahan'],
        },
        {
          title: 'Basa Tinggi（pH 8.0 hingga 8.5）',
          icon: 'mdi:alert',
          description: 'Alkalinitas praktis maksimum sebelum cacat rasa muncul. Menggandakan kecepatan pencokelatan tetapi memerlukan pemantauan cermat.',
          highlight: false,
          points: ['Kecepatan reaksi: x2.0-3.0', '1 sdt per kg (sekitar 1.5g)', 'Terbaik untuk: kerak pretzel gelap, karamelisasi ekstrem', 'Tes rasa sebelum disajikan  -  mendekati batas rasa sabun'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Zona Suhu dan Artinya bagi Pencokelatan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Suhu adalah variabel penting lainnya untuk reaksi Maillard. Setiap zona menghasilkan hasil yang berbeda secara fundamental. Memahami ambang-ambang ini membantu Anda memilih tingkat panas yang tepat untuk tujuan memasak Anda.',
    },
    {
      type: 'table',
      headers: ['Zona', 'Rentang Suhu', 'Apa yang Terjadi', 'Terbaik Untuk'],
      rows: [
        ['Penguapan', 'Di bawah 110°C', 'Air menguap, tidak terjadi pencokelatan', 'Sous vide, poaching, mengukus'],
        ['Pencokelatan Lambat', '110-139°C', 'Maillard dimulai perlahan, perkembangan warna lembut', 'Tomat panggang lambat, dehidrasi suhu rendah'],
        ['Zona Optimal', '140-180°C', 'Kecepatan pencokelatan maksimum tanpa membakar', 'Membakar, memanggang, menggoreng, baking'],
        ['Pirolisis', 'Di atas 180°C', 'Pembakaran dimulai, senyawa pahit menyengat terbentuk', 'Pengarangan cepat untuk aksen rasa (gunakan secukupnya)'],
      ],
    },
    {
      type: 'title',
      text: 'Kesalahan Umum Maillard dan Cara Memperbaikinya',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Menambahkan terlalu banyak soda kue',
      html: 'Lebih banyak tidak selalu lebih baik dengan soda kue. Melebihi 1,5g per kilogram makanan menimbulkan rasa pahit logam, sabun, atau kimia. Senyawa rasa yang dihasilkan oleh alkalinitas berlebihan tidak sama dengan rasa gurih kaya dari pencokelatan Maillard yang tepat. <strong>Patuhi jumlah yang direkomendasikan yang ditunjukkan oleh kalkulator.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Memasak pada suhu terlalu rendah',
      html: 'Di bawah 110°C, Anda pada dasarnya sedang mengukus atau mendehidrasi makanan  -  bukan mencokelatkannya. Reaksi Maillard memiliki suhu aktivasi minimum. Jika Anda menginginkan rasa yang dalam dan kompleks, <strong>permukaan makanan harus mencapai setidaknya 140°C.</strong> Gunakan metode memasak panas tinggi seperti membakar, memanggang dengan api atas, atau memanggang oven di atas 180°C.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Mengabaikan kelembapan',
      html: 'Air adalah musuh reaksi Maillard. Permukaan basah tidak dapat melebihi 100°C sampai airnya menguap. Selalu <strong>keringkan makanan sepenuhnya</strong> sebelum membakar. Soda kue membantu karena juga mempercepat penguapan air permukaan dengan memecah dinding sel, tetapi tidak dapat mengatasi makanan yang terlihat basah. Permukaan kering = pencokelatan lebih baik.',
    },
    {
      type: 'title',
      text: 'Tips Pro untuk Pencokelatan Sempurna',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Teknik Bubur Soda Kue',
      html: 'Jangan pernah menaburkan soda kue kering langsung ke makanan  -  tidak akan terdistribusi merata. Larutkan jumlah yang diukur dalam 1-2 sendok makan air hangat, lalu oleskan atau aduk bubur tersebut dengan makanan. Ini memastikan alkalinitas seragam di seluruh permukaan untuk pencokelatan yang merata dan konsisten.',
    },
    {
      type: 'tip',
      title: 'Padukan Soda Kue dengan Penggaraman Kering',
      html: 'Soda kue dan garam bekerja secara sinergis. Garami kering daging Anda dengan garam selama 1-24 jam sebelum dimasak, lalu oleskan bubur soda kue tepat sebelum terkena panas. Garam menarik keluar protein yang berpartisipasi dalam reaksi Maillard, sementara soda kue mempercepatnya. Kombinasi ini menghasilkan kerak yang paling dalam dan kaya.',
    },
    {
      type: 'tip',
      title: 'Trik Karamelisasi Bawang',
      html: 'Sejumput soda kue (0,3g per bawang besar) dapat mengurangi waktu karamelisasi dari 45 menit menjadi 20 menit. Lingkungan basa memecah dinding sel bawang lebih cepat, melepaskan gula dan asam amino yang menjadi bahan bakar reaksi Maillard. Tapi harus tepat  -  terlalu banyak soda kue mengubah bawang menjadi bubur dengan rasa pahit kimia.',
    },
    {
      type: 'title',
      text: 'Glosarium Istilah Kunci Pencokelatan',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Reaksi Maillard', definition: 'Reaksi kimia non-enzimatik antara asam amino dan gula pereduksi yang menciptakan warna cokelat dan rasa gurih kompleks pada makanan yang dimasak. Terjadi di atas 110°C dan berbeda dari karamelisasi.' },
        { term: 'Pirolisis', definition: 'Dekomposisi termal bahan organik pada suhu tinggi (di atas 180°C). Tidak seperti pencokelatan Maillard, pirolisis menghasilkan senyawa pahit, menyengat, dan terkadang karsinogenik. Inilah yang terjadi saat makanan terbakar.' },
        { term: 'pH', definition: 'Skala dari 0 hingga 14 yang mengukur keasaman (rendah) atau alkalinitas (tinggi). Netral adalah 7. Sebagian besar makanan mentah berada antara pH 5,5 dan 6,5. Soda kue menaikkan pH ke tingkat basa, mempercepat reaksi Maillard.' },
        { term: 'Natrium Bikarbonat', definition: 'Soda kue  -  bubuk kristal putih (NaHCO₃) yang bertindak sebagai basa ringan. Dalam memasak, ia menaikkan pH permukaan, mempercepat pencokelatan, mengempukkan daging, dan membantu sayuran mempertahankan warna selama dimasak.' },
        { term: 'Alkalinitas', definition: 'Kapasitas larutan untuk menetralkan asam. Dalam konteks percepatan Maillard, alkalinitas mengacu pada nilai pH di atas 7,0. Alkalinitas berlebih menghasilkan rasa pahit dan sabun yang tidak enak.' },
        { term: 'Pengali Kecepatan Reaksi', definition: 'Berapa kali lebih cepat reaksi Maillard berlangsung dibandingkan dengan dasar (pH 6). Pengali x2,0 berarti pencokelatan terjadi dua kali lebih cepat, secara efektif mengurangi separuh waktu memasak yang dibutuhkan untuk perkembangan warna yang sama.' },
        { term: 'pH Permukaan', definition: 'pH tepat di permukaan makanan tempat reaksi Maillard terjadi, bukan pH internal. Soda kue terutama memengaruhi pH permukaan karena tidak menembus jauh ke dalam makanan selama waktu memasak singkat.' },
      ],
    },
    {
      type: 'title',
      text: 'Referensi Cepat: Soda Kue untuk Makanan Umum',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Jumlah soda kue yang direkomendasikan untuk masakan sehari hari',
      items: [
        'Bawang karamel (1 besar): 0,3g soda kue  -  mengurangi waktu dari 45 menjadi ~20 menit',
        'Kentang panggang (500g): 0,4g soda kue  -  bagian luar lebih renyah dan keemasan',
        'Steak panggang wajan (250g): 0,2g soda kue  -  kerak lebih gelap dalam waktu lebih singkat',
        'Sayap ayam (1kg): 0,75g soda kue  -  kulit lebih renyah, pencokelatan lebih cepat',
        'Adonan pretzel (500g tepung): 1,5g soda kue  -  kerak cokelat tua setelah celupan basa',
        'Sayuran panggang (1kg campuran): 0,75g soda kue  -  karamelisasi lebih merata',
      ],
    },
    {
      type: 'paragraph',
      html: 'Setiap makanan memiliki tingkat alkalinitas ideal yang berbeda berdasarkan pH alami dan kadar airnya. Kalkulator ini menghilangkan tebak-tebakan  -  masukkan berat dan suhu makanan Anda yang tepat, dan kalkulator akan memberi Anda jumlah soda kue yang presisi untuk pencokelatan sempurna setiap saat.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
