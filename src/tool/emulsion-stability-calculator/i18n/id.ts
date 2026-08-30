import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkulator Stabilitas Emulsi dan Batas Minyak";
const description = "Cari tahu secara tepat berapa banyak minyak yang bisa ditangani mayones, aioli, atau vinaigrette Anda sebelum pecah. Cegah saus pecah dengan kalkulator stabilitas emulsi gratis kami.";
const faq = [
  {
    question: "Berapa banyak minyak yang bisa saya tambahkan ke mayones sebelum pecah?",
    answer: "Tergantung pada pengemulsi. Kuning telur mendukung hingga ~78% minyak (sekitar 3,5 kali volume air), mustard hingga 70%, lesitin kedelai hingga 82%, dan polisorbat hingga 85%. Gunakan kalkulator di atas untuk mendapatkan batas maksimum yang tepat untuk jumlah spesifik Anda."
  },
  {
    question: "Mengapa emulsi saya pecah atau terpisah?",
    answer: "Emulsi pecah ketika fraksi volume minyak melebihi batas pengepakan maksimum pengemulsi. Pada titik itu, tetesan minyak terdesak begitu rapat sehingga menyatu dan campuran terpisah. Ini terjadi secara instan - bukan proses bertahap."
  },
  {
    question: "Bagaimana cara memperbaiki mayones atau aioli yang pecah?",
    answer: "Mulailah dengan kuning telur segar atau satu sendok makan air hangat di mangkuk bersih. Tuangkan campuran yang pecah secara perlahan sambil terus dikocok, persis seperti saat Anda menambahkan minyak mentah. Kalkulator di atas memberi tahu Anda secara tepat berapa banyak air atau kuning telur yang Anda butuhkan."
  },
  {
    question: "Apakah menambahkan minyak terlalu cepat menyebabkan emulsi pecah?",
    answer: "Menambahkan minyak terlalu cepat dapat membebani pengemulsi untuk sementara, tetapi penyebab sebenarnya dari pecahnya selalu karena rasio fase yang salah. Jika fraksi minyak Anda tetap di bawah batas pengemulsi, emulsi tetap stabil terlepas dari kecepatannya. Jika melebihi batas, pecahnya tidak terhindarkan."
  },
  {
    question: "Apa perbedaan antara kuning telur dan mustard sebagai pengemulsi?",
    answer: "Kuning telur (maks. 78% minyak) mengandung lesitin dan lipoprotein yang membentuk lapisan kokoh di sekitar tetesan. Mustard (maks. 70% minyak) mengandalkan musilase dan protein - lebih lemah namun menambah rasa. Lesitin kedelai (82%) dan polisorbat (85%) adalah pengemulsi kelas industri yang sangat efisien."
  }
];

const howTo = [
  {
    name: "Pilih pengemulsi Anda",
    text: "Pilih pengemulsi dalam resep Anda - kuning telur untuk mayones klasik, mustard untuk vinaigrette, atau lesitin kedelai/polisorbat untuk masakan modernis. Masing-masing menetapkan batas minyak maksimum yang berbeda."
  },
  {
    name: "Masukkan volume fase air Anda",
    text: "Masukkan total mililiter bahan berair Anda: air, cuka, jus lemon, anggur, atau cairan berbasis air apa pun. Kalkulator secara otomatis menambahkan kandungan air dari pengemulsi yang Anda pilih."
  },
  {
    name: "Atur volume minyak Anda",
    text: "Masukkan jumlah minyak yang akan Anda gunakan. Gunakan penggeser atau ketik nilainya. Kalkulator langsung menunjukkan apakah jumlah ini akan menghasilkan emulsi yang stabil atau menyebabkannya pecah."
  },
  {
    name: "Baca hasil stabilitas dan perbaiki jika diperlukan",
    text: "Periksa indikator fraksi volume minyak. Jika stabil, Anda siap melanjutkan. Jika pecah, panel penyelamat memberi tahu Anda secara tepat berapa banyak air (dalam ml) atau berapa banyak kuning telur tambahan yang perlu ditambahkan untuk mengembalikan keseimbangan."
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
  slug: 'kalkulator-stabilitas-emulsi',
  title: 'Kalkulator Stabilitas Emulsi dan Batas Minyak',
  description: 'Cari tahu secara tepat berapa banyak minyak yang bisa ditangani mayones, aioli, atau vinaigrette Anda sebelum pecah. Cegah saus pecah dengan kalkulator stabilitas emulsi gratis kami.',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  ui: {
    title: 'Analisator Stabilitas Emulsi',
    subtitle: 'Berapa banyak minyak yang bisa ditangani saus Anda sebelum pecah?',
    waterLabel: 'Fase Air (ml)',
    oilLabel: 'Volume Minyak (ml)',
    emulsifierLabel: 'Jenis Pengemulsi',
    yolkOption: 'Kuning Telur',
    mustardOption: 'Mustard',
    soyLecithinOption: 'Lesitin Kedelai',
    polysorbateOption: 'Polisorbat',
    stableStatus: 'Emulsi Stabil',
    brokenStatus: 'Emulsi Pecah',
    ratioLabel: 'Fraksi Volume Minyak',
    maxLimitLabel: 'Batas Maksimum Minyak',
    fixTitle: 'Strategi Penyelamatan',
    waterFixText: 'Tambahkan air untuk mengembalikan keseimbangan fase:',
    yolkFixText: 'Atau, gunakan kuning telur tambahan:',
    idealRangeText: 'Kisaran ideal berada di bawah batas pengepakan kritis 74% hingga 80%.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Berapa Banyak Minyak yang Bisa Ditangani Mayones atau Aioli Sebelum Pecah?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Setiap juru masak pernah bertanya: <strong>kenapa mayones saya pecah?</strong> Jawabannya lebih sederhana dari yang terlihat. Emulsi - apakah aioli klasik, vinaigrette lembut, atau busa modernis - hanya dapat menampung jumlah minyak terbatas sebelum runtuh. <strong>Kalkulator stabilitas emulsi</strong> kami memberi tahu Anda secara tepat di mana titik pecahnya, berdasarkan bahan dan porsi spesifik Anda.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '78%',
          label: 'Maks. Minyak Kuning Telur',
          icon: 'mdi:egg-outline'
        },
        {
          value: '85%',
          label: 'Batas Polisorbat',
          icon: 'mdi:flask-outline'
        },
        {
          value: '74%',
          label: 'Pengepakan Teoritis',
          icon: 'mdi:sphere'
        },
        {
          value: '15 ml',
          label: 'Kandungan Air Kuning Telur',
          icon: 'mdi:water'
        }
      ]
    },
    {
      type: 'list',
      items: [
        '<strong>Menambahkan minyak terlalu cepat</strong> - Kecepatan jarang menjadi penyebab sebenarnya. Jika fraksi minyak tetap di bawah batas pengemulsi, emulsi akan bertahan terlepas dari kecepatan penuangan.',
        '<strong>Bahan Anda terlalu dingin</strong> - Telur atau minyak dingin meningkatkan viskositas dan membuat pembentukan tetesan lebih sulit. Selalu bawan bahan ke suhu ruangan.',
        '<strong>Melebihi batas minyak untuk pengemulsi Anda</strong> - Setiap pengemulsi memiliki fraksi pengepakan maksimum. Kuning telur hingga 78%, mustard 70%, lesitin kedelai 82%, dan polisorbat 85%.',
        '<strong>Fase air Anda terlalu kecil</strong> - Tanpa cukup air untuk mengelilingi tetesan minyak, mereka tidak memiliki tempat untuk pergi selain menyatu satu sama lain.'
      ]
    },
    {
      type: 'title',
      text: 'Pengemulsi Mana yang Harus Anda Gunakan? Perbandingan Praktis',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Memilih pengemulsi yang tepat tergantung pada resep, profil rasa, dan kapasitas minyak yang diinginkan. Berikut perbandingan empat pengemulsi kuliner paling umum.'
    },
    {
      type: 'proscons',
      title: 'Kuning Telur',
      items: [
        { pro: 'Kompatibilitas rasa tertinggi untuk saus klasik', con: 'Menambahkan kolesterol dan rasa telur' },
        { pro: 'Mengandung lesitin dan lipoprotein untuk emulsi yang kuat', con: 'Memerlukan kontrol suhu yang cermat' },
        { pro: 'Menambahkan warna alami dan kekayaan rasa', con: 'Tidak cocok untuk persiapan vegan' },
        { pro: 'Bekerja dengan fraksi minyak hingga 78%', con: 'Terbatas pada sekitar 15 ml kontribusi air per kuning telur' }
      ]
    },
    {
      type: 'proscons',
      title: 'Mustard',
      items: [
        { pro: 'Menambahkan rasa tajam dan kompleksitas pada saus', con: 'Kapasitas minyak maks lebih rendah (70%)' },
        { pro: 'Banyak tersedia dan mudah digunakan', con: 'Daya pengemulsi lebih lemah dibanding kuning telur' },
        { pro: 'Bekerja baik pada suhu ruangan', con: 'Rasa bisa berbenturan dengan saus yang halus' },
        { pro: 'Ideal untuk vinaigrette cepat', con: 'Tidak cocok untuk emulsi berasa netral' }
      ]
    },
    {
      type: 'proscons',
      title: 'Lesitin Kedelai',
      items: [
        { pro: 'Toleransi minyak tinggi (82%) untuk saus stabil', con: 'Memerlukan penimbangan presisi' },
        { pro: 'Rasa netral tidak mengubah resep', con: 'Keleluasaan lebih sedikit dibanding kuning telur' },
        { pro: 'Berbasis tanaman dan ramah vegan', con: 'Bukan bahan pokok dapur bagi sebagian besar koki rumah' },
        { pro: 'Bekerja dengan volume air kecil', con: 'Dapat menciptakan tekstur sedikit buatan' }
      ]
    },
    {
      type: 'proscons',
      title: 'Polisorbat',
      items: [
        { pro: 'Kapasitas minyak tertinggi dari pengemulsi mana pun (85%)', con: 'Bahan tambahan sintetis, bukan alami' },
        { pro: 'Menciptakan busa dan udara ultra-stabil', con: 'Sulit diperoleh untuk dapur rumah' },
        { pro: 'Bekerja dengan fase air minimal', con: 'Memerlukan timbangan untuk dosis akurat' },
        { pro: 'Ideal untuk masakan modernis dan eksperimental', con: 'Menyengat jika digunakan berlebihan' }
      ]
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Kuning Telur',
          icon: 'mdi:egg-outline',
          description: 'Pengemulsi mayones klasik. Mengandung lesitin dan lipoprotein.',
          highlight: true,
          points: [
            'Maks. minyak: 78%',
            '~15 ml air per kuning telur',
            'Menambah kekayaan dan warna',
            'Terbaik untuk mayo dan aioli'
          ]
        },
        {
          title: 'Mustard',
          icon: 'mdi:shaker-outline',
          description: 'Mengandalkan musilase dan protein biji. Menambah rasa tajam.',
          points: [
            'Maks. minyak: 70%',
            '~10 ml kandungan air',
            'Kekuatan pengemulsi lebih lemah',
            'Ideal untuk vinaigrette'
          ]
        },
        {
          title: 'Lesitin Kedelai',
          icon: 'mdi:leaf',
          description: 'Surfaktan tanaman yang sangat terkonsentrasi.',
          points: [
            'Maks. minyak: 82%',
            '~5 ml kandungan air',
            'Profil rasa netral',
            'Bahan pokok masakan modernis'
          ]
        },
        {
          title: 'Polisorbat',
          icon: 'mdi:flask-outline',
          description: 'Pengemulsi sintetis dengan kapasitas surfaktan maksimum.',
          points: [
            'Maks. minyak: 85%',
            '~2 ml kandungan air',
            'Toleransi minyak tertinggi',
            'Digunakan dalam busa dan airs'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Pengemulsi', 'Maks. % Minyak', 'Minyak per 100 ml Air', 'Penggunaan Terbaik'],
      rows: [
        ['Kuning Telur', '78%', '~355 ml', 'Mayones, aioli, hollandaise'],
        ['Mustard', '70%', '~233 ml', 'Vinaigrette, saus ringan'],
        ['Lesitin Kedelai', '82%', '~456 ml', 'Saus modernis, busa'],
        ['Polisorbat', '85%', '~567 ml', 'Busa stabil, masakan eksperimental']
      ]
    },
    {
      type: 'title',
      text: 'Ilmu Pengetahuan: Mengapa Emulsi Pecah dan Penerapan Konjektur Kepler di Dapur Anda',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Emulsi kuliner bekerja dengan menyebarkan tetesan minyak kecil ke seluruh fase air yang kontinu. <strong>Pengemulsi</strong> - seperti lesitin dalam kuning telur, musilase dalam mustard, atau surfaktan sintetis seperti polisorbat - melapisi setiap tetesan dan mencegahnya menyatu dengan tetesan tetangganya.'
    },
    {
      type: 'paragraph',
      html: 'Titik pecah ditentukan oleh geometri murni. Tetesan minyak berperilaku seperti bola-bola kecil yang tersusun rapat. Volume maksimum bola yang bisa muat dalam ruang tertentu - dikenal sebagai <strong>konjektur Kepler</strong> - adalah sekitar 74%. Dalam sistem dapur nyata, ini bisa mencapai 80-85% dengan pengemulsi yang kuat, tetapi di luar itu, tetesan terdesak begitu rapat sehingga menyatu dan emulsi runtuh secara instan.'
    },
    {
      type: 'card',
      columns: 2,
      items: [
        {
          icon: 'mdi:egg-outline',
          title: 'Mayones & Aioli Klasik',
          html: 'Gunakan <strong>kuning telur</strong> hingga 78% minyak. Mulailah dengan satu kuning telur per cangkir minyak. Tambahkan satu sendok teh air atau jus lemon sebelum menuangkan minyak untuk margin keamanan yang lebih lebar.'
        },
        {
          icon: 'mdi:shaker-outline',
          title: 'Vinaigrette & Saus Ringan',
          html: 'Gunakan <strong>mustard</strong> hingga 70% minyak. Musilase dalam mustard menyediakan pengemulsian yang cukup untuk vinaigrette sementara.'
        },
        {
          icon: 'mdi:leaf',
          title: 'Saus Modernis & Busa Stabil',
          html: 'Gunakan <strong>lesitin kedelai</strong> hingga 82% minyak. Ideal untuk emulsi berasa netral di mana Anda ingin rasa minyak dan asam menonjol tanpa gangguan.'
        },
        {
          icon: 'mdi:flask-outline',
          title: 'Busa Eksperimental & Udara',
          html: 'Gunakan <strong>polisorbat</strong> hingga 85% minyak. Pilihan utama untuk teknik hidrokoloid modernis yang membutuhkan beban minyak maksimum dan stabilitas busa.'
        }
      ]
    },
    {
      type: 'title',
      text: 'Cara Menyelamatkan Emulsi yang Pecah Langkah demi Langkah',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Jika mayones atau saus Anda sudah pecah, <strong>jangan dibuang</strong>. Perbaikannya mudah - tetapi hanya jika Anda memahami rasio fase. Mengocok lebih keras tidak akan membantu; Anda perlu menambahkan lebih banyak fase kontinu (air).'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '3 Tanda Umum Emulsi Anda Akan Segera Pecah',
      html: 'Perhatikan <strong>pengentalan diikuti penipisan mendadak</strong> sebagai peringatan pertama. Kemudian cari <strong>permukaan mengkilap berubah menjadi berbutir</strong> atau <strong>genangan minyak terlihat di tepinya</strong>. Jika Anda melihat salah satu tanda ini, segera hentikan menambahkan minyak dan kocok satu sendok teh air dingin sebelum melanjutkan.'
    },
    {
      type: 'title',
      text: 'Tips Praktis untuk Emulsi Sempurna Setiap Saat',
      level: 3
    },
    {
      type: 'message',
      html: '<strong>Aturan emas:</strong> Rasio minyak terhadap air lebih penting daripada teknik, suhu, atau kecepatan. Gunakan kalkulator kami untuk menemukan batas minyak tepat Anda sebelum mulai mengocok.'
    },
    {
      type: 'tip',
      title: 'Suhu Itu Penting',
      html: 'Semua bahan harus pada <strong>suhu ruangan</strong>. Telur atau minyak dingin secara dramatis meningkatkan risiko pecah. Keluarkan bahan dari kulkas 30 menit sebelum memulai.'
    },
    {
      type: 'tip',
      title: 'Jaring Pengaman Air',
      html: 'Jika resep Anda tidak mengandung cukup asam (cuka, jus lemon), tambahkan <strong>satu sendok teh air dingin per kuning telur</strong> sebelum mulai menambahkan minyak. Air ekstra ini menciptakan margin keamanan yang lebih lebar.'
    },
    {
      type: 'tip',
      title: 'Memperbaiki Batch yang Pecah',
      html: 'Masukkan kuning telur segar ke dalam mangkuk bersih. Kocok dengan satu sendok teh air. Kemudian, <strong>tuangkan campuran yang pecah perlahan-lahan</strong>, persis seperti minyak mentah. Setelah teremulsi kembali, Anda bisa menambahkan sisanya lebih cepat.'
    },
    {
      type: 'title',
      text: 'Glosarium Emulsi Kuliner',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Fase Kontinu',
          definition: 'Cairan yang mengelilingi tetesan - biasanya air, cuka, atau jus jeruk dalam emulsi minyak-dalam-air seperti mayones.'
        },
        {
          term: 'Fase Terdispersi',
          definition: 'Cairan yang dipecah menjadi tetesan kecil - minyak pada sebagian besar emulsi kuliner. Semakin banyak Anda tambahkan, semakin rapat tetesan tersebut tersusun.'
        },
        {
          term: 'Fraksi Volume',
          definition: 'Rasio volume minyak terhadap total volume. Pada sekitar 74-85% (tergantung pengemulsi), emulsi mencapai titik pecah geometrisnya.'
        },
        {
          term: 'Koalesensi',
          definition: 'Ketika dua atau lebih tetesan minyak bergabung menjadi satu tetesan yang lebih besar. Ini adalah proses mikroskopis yang memicu pecahnya emulsi yang terlihat.'
        },
        {
          term: 'Inversi Fase',
          definition: 'Titik di mana emulsi minyak-dalam-air berbalik menjadi air-dalam-minyak - seperti yang terjadi saat membuat mentega dari krim. Ini adalah mode kegagalan tertinggi.'
        }
      ]
    },
    {
      type: 'summary',
      title: 'Poin Kunci untuk Emulsi Stabil',
      items: [
        'Setiap pengemulsi memiliki fraksi minyak maksimum: kuning telur 78%, mustard 70%, lesitin kedelai 82%, polisorbat 85%.',
        'Titik pecah ditentukan oleh geometri (konjektur Kepler pada 74%), bukan oleh kecepatan mengocok.',
        'Selalu mulai dengan bahan suhu ruangan dan tambahkan sedikit air sebagai penyangga keamanan.',
        'Emulsi yang pecah dapat diselamatkan dengan menambahkan pengemulsi segar dan lebih banyak fase air, bukan mengocok lebih keras.',
        'Gunakan kalkulator stabilitas emulsi kami di atas untuk mendapatkan batas minyak yang tepat untuk bahan spesifik Anda.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
