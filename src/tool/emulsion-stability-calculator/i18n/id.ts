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
      type: 'title',
      text: 'Ilmu Pengetahuan: Mengapa Emulsi Pecah',
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
      title: 'Tanda Umum Emulsi Anda Akan Segera Pecah',
      html: 'Perhatikan <strong>pengentalan diikuti penipisan mendadak</strong>, <strong>permukaan mengkilap berubah menjadi berbutir</strong>, atau genangan minyak terlihat di tepinya. Jika Anda melihat salah satu dari ini, segera hentikan menambahkan minyak dan kocok satu sendok teh air dingin sebelum melanjutkan.'
    },
    {
      type: 'title',
      text: 'Tips Praktis untuk Emulsi Sempurna Setiap Saat',
      level: 3
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
      type: 'paragraph',
      html: 'Baik Anda membuat mayones Prancis klasik, aioli bawang putih, vinaigrette stabil, atau bereksperimen dengan hidrokoloid modernis, memahami <strong>rasio minyak-ke-air</strong> adalah faktor terpenting. Kalkulator kami menangani perhitungannya sehingga Anda bisa memasak dengan percaya diri.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
