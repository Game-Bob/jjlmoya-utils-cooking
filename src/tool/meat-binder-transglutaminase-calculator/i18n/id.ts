import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Kalkulator Transglutaminase Perekat Daging: Panduan Dosis Gastronomi Molekuler';
const description = 'Hitung dosis transglutaminase (TG) yang tepat untuk merekatkan daging. Dapatkan rasio dry dusting atau slurry, waktu inkubasi, dan peringatan keamanan suhu.';

const faq = [
  {
    question: 'Apa itu transglutaminase dan bagaimana cara merekatkan daging?',
    answer: 'Transglutaminase (TG), juga dikenal sebagai "lem daging," adalah enzim yang mengkatalisis pembentukan ikatan kovalen antara asam amino glutamin dan lisin dalam protein. Ketika diaplikasikan pada permukaan daging, enzim ini menciptakan ikatan silang yang menyatukan potongan-potongan terpisah menjadi satu kesatuan yang padat. Reaksi ini membutuhkan waktu dan suhu dingin (2-5°C) untuk berkembang sempurna, biasanya 6 hingga 24 jam.',
  },
  {
    question: 'Apa perbedaan antara dry dusting dan aplikasi slurry?',
    answer: 'Dry dusting melibatkan penaburan bubuk TG langsung ke permukaan daging sebanyak 0,75-1,5% dari berat daging. Metode slurry mencampurkan satu bagian TG dengan empat bagian air untuk membuat pasta yang bisa dioleskan, ideal untuk melapisi permukaan yang tidak rata atau mengaplikasikan lapisan tipis dan merata pada daging panggang besar atau fillet berkulit.',
  },
  {
    question: 'Apakah suhu mempengaruhi aktivitas transglutaminase?',
    answer: 'Ya. TG paling aktif antara 2°C dan 15°C. Pada suhu yang lebih tinggi (hingga 40°C) reaksi akan berakselerasi tetapi harus dipantau secara ketat. Di atas 60°C, enzim akan terdenaturasi dan menjadi tidak aktif secara permanen: reaksi ikatan silang berhenti total. Selalu jaga daging yang direkatkan dengan TG di bawah 60°C selama pemasakan untuk mempertahankan ikatan.',
  },
  {
    question: 'Bisakah saya menggunakan transglutaminase pada ikan atau kerang?',
    answer: 'Ya, tetapi ikan dan kerang memiliki kadar lisin dan glutamin yang lebih rendah dalam protein ototnya dibandingkan daging merah dan unggas. Anda mungkin memerlukan rasio TG yang lebih tinggi (1,2-1,5%) dan waktu inkubasi yang lebih lama. Untuk kerang scallop yang lembut atau fillet ikan tipis, pertimbangkan metode slurry untuk cakupan yang lebih merata.',
  },
];

const howTo = [
  {
    name: 'Pilih metode aplikasi',
    text: 'Pilih Dry Dusting untuk permukaan rata seperti daging panggang dan steak. Pilih Slurry untuk potongan tidak rata, lapisan tipis, atau protein berkulit.',
  },
  {
    name: 'Masukkan berat daging',
    text: 'Masukkan total berat daging atau protein yang ingin Anda rekatkan dalam gram.',
  },
  {
    name: 'Tentukan jenis protein',
    text: 'Pilih jenis protein yang paling sesuai dengan potongan Anda. Daging merah membutuhkan lebih sedikit TG; ikan dan kerang membutuhkan lebih banyak.',
  },
  {
    name: 'Atur suhu inkubasi',
    text: 'Masukkan suhu penyimpanan dingin (2-40°C). Kalkulator akan memperkirakan waktu pengikatan yang diperlukan.',
  },
  {
    name: 'Timbang dan aplikasikan TG',
    text: 'Ukur bubuk TG yang telah dihitung. Aplikasikan dengan menaburkan atau mengoleskan slurry, lalu tekan permukaan protein bersama-sama dengan kuat.',
  },
  {
    name: 'Diamkan dan dinginkan',
    text: 'Bungkus rapat dengan plastik wrap dan dinginkan selama periode inkubasi yang disarankan sebelum dimasak.',
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
  slug: 'kalkulator-transglutaminase-perekat-daging',
  title: 'Kalkulator Transglutaminase Perekat Daging',
  description: 'Hitung dosis transglutaminase (TG) yang tepat untuk merekatkan daging. Dapatkan rasio dry dusting atau slurry, waktu inkubasi, dan peringatan keamanan suhu.',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  ui: {
    title: 'Kalkulator Transglutaminase Perekat Daging',
    subtitle: 'Presisi molekuler untuk ikatan silang protein',
    methodLabel: 'Metode Aplikasi',
    dryMethod: 'Dry Dusting',
    slurryMethod: 'Slurry (Pasta yang Dapat Dioleskan)',
    weightLabel: 'Berat Daging / Protein',
    proteinLabel: 'Jenis Protein',
    redMeat: 'Daging Merah (Sapi, Domba, Game)',
    poultry: 'Unggas (Ayam, Kalkun, Bebek)',
    fish: 'Ikan (Fillet Padat, Ikan Utuh)',
    shellfish: 'Kerang (Scallop, Udang, Lobster)',
    unitLabel: 'Sistem Pengukuran',
    metricUnit: 'Metrik (g / °C)',
    imperialUnit: 'Imperial (oz / °F)',
    tempLabel: 'Suhu Inkubasi',
    resultTitle: 'Hasil Dosis',
    tgAmount: 'Transglutaminase (TG)',
    waterAmount: 'Air (untuk Slurry)',
    totalWeight: 'Total Berat yang Direkatkan',
    ratioLabel: 'Rasio TG',
    incubationLabel: 'Inkubasi yang Direkomendasikan',
    incubationRange: '{min} jam hingga {max} jam',
    dryDustingDesc: 'Taburkan bubuk TG secara merata di atas permukaan daging, lalu tekan potongan bersama-sama. Ideal untuk potongan datar dan daging panggang.',
    slurryDesc: 'Campur TG dengan 4 bagian air untuk membuat pasta yang bisa dioleskan. Aplikasikan dengan kuas untuk permukaan tidak rata, fillet, atau perekatan kulit.',
    enzymeDestroyed: 'Enzim Hancur: Suhu melebihi ambang denaturasi. Transglutaminase telah terdenaturasi dan tidak akan merekat.',
    noWarning: '',
    hours: 'jam',
    grams: 'g',
    milliliters: 'ml',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Berapa banyak transglutaminase yang harus digunakan per kilo daging?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dosis yang tepat tergantung pada jenis protein dan metode aplikasi. Untuk daging merah, gunakan 0,75:1,0% TG dari berat (7,5:10 g per kg). Untuk unggas, 1,0:1,2%. Untuk ikan dan kerang, 1,2:1,5%. Aplikasikan sebagai dry dust untuk potongan datar atau campur dengan 4 bagian air sebagai slurry untuk permukaan tidak rata. Masukkan berat protein Anda di kalkulator di atas untuk mendapatkan pengukuran yang tepat.',
    },
    {
      type: 'title',
      text: 'Dry dusting vs. slurry: metode mana yang harus Anda pilih?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dry dusting paling baik digunakan pada permukaan datar dan rata seperti steak, daging panggang, atau cutlet. Taburkan bubuk TG langsung (0,75:1,5% dari berat daging) dan tekan potongan bersama-sama. Metode slurry (1 bagian TG dengan 4 bagian air) lebih baik untuk potongan tidak rata, fillet berkulit, atau kerang scallop yang lembut di mana cakupan merata sangat penting. Oleskan pasta, rakit, dan bungkus rapat. Kedua metode memerlukan inkubasi dingin untuk menyelesaikan ikatan.',
    },
    {
      type: 'title',
      text: 'Mengapa kontrol suhu menentukan keberhasilan atau kegagalan ikatan Anda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Transglutaminase bekerja paling baik antara 2°C dan 5°C, membentuk ikatan silang yang kuat selama 6:24 jam. Pada suhu kulkas yang lebih tinggi (5:15°C) reaksi dipercepat menjadi 3:8 jam, tetapi ikatannya mungkin lebih dangkal. Di atas 40°C enzim terdenaturasi dengan cepat, dan pada 60°C enzim hancur seketika: ikatan yang ada berhenti terbentuk dan daging akan terpisah saat dimasak. Selalu pantau suhu penyimpanan dingin Anda dengan indikator di visualiser di atas.',
    },
    {
      type: 'table',
      headers: ['Protein', 'Dosis TG (% dari berat)', 'Metode', 'Inkubasi (2:5°C)', 'Kekuatan Ikatan'],
      rows: [
        ['Sapi, Domba, Game', '0,75:1,0%', 'Dry dust', '6:12 jam', 'Sangat kuat'],
        ['Ayam, Kalkun, Bebek', '1,0:1,2%', 'Keduanya', '8:16 jam', 'Kuat'],
        ['Salmon, Kod, Sea Bass', '1,2:1,5%', 'Slurry', '12:24 jam', 'Sedang'],
        ['Scallop, Udang, Lobster', '1,0:1,5%', 'Slurry', '12:24 jam', 'Sedang'],
      ],
    },
    {
      type: 'title',
      text: 'Kesalahan umum saat merekatkan daging dengan TG',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Terlalu banyak enzim:</strong> Menggunakan lebih dari 1,5% TG meninggalkan residu putih yang terlihat dan tekstur berkapur. Kelebihan tidak membuat ikatan lebih kuat.',
        '<strong>Lemak atau silver skin di permukaan:</strong> TG tidak dapat merekatkan lemak atau jaringan ikat. Bersihkan permukaan hingga terlihat serat otot sebelum mengaplikasikan.',
        '<strong>Melewatkan waktu istirahat:</strong> Reaksi ikatan silang membutuhkan waktu berjam-jam. Memasak segera setelah perakitan akan menghanyutkan enzim sebelum ikatan terbentuk.',
        '<strong>Panas di atas 60°C saat memasak:</strong> Ikatan bertahan melalui pemasakan lembut (sous vide pada 55:58°C ideal), tetapi suhu searing yang tinggi dapat melemahkan antarmuka.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
