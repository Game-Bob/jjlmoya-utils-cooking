import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Prediktor Carry Over Cooking: Kalkulator Inersia Termal';
const description = 'Prediksi berapa derajat daging panggang Anda akan terus matang setelah dikeluarkan dari oven. Dapatkan suhu angkat yang tepat untuk medium rare yang sempurna.';

const faq = [
  {
    question: 'Apa itu carry-over cooking dan mengapa itu terjadi?',
    answer: 'Carry-over cooking, disebut juga inersia termal, adalah kenaikan suhu internal yang berlanjut setelah makanan dikeluarkan dari oven. Panas yang tersimpan di lapisan luar terus merambat ke pusat. Daging panggang yang diangkat pada 50°C bisa mencapai 54°C selama resting - perbedaan antara rare dan medium-rare.',
  },
  {
    question: 'Bagaimana suhu oven memengaruhi carry-over?',
    answer: 'Suhu oven yang lebih tinggi (200-250°C) menciptakan gradien suhu yang lebih besar antara permukaan dan inti, menyimpan lebih banyak panas laten di kerak. Ini meningkatkan efek carry-over. Daging panggang yang dimasak pada 120°C akan memiliki carry-over minimal (~1°C), sedangkan pada 220°C bisa naik 5-8°C selama resting.',
  },
  {
    question: 'Apakah bentuk daging mengubah perhitungan carry-over?',
    answer: 'Ya. Geometri secara signifikan memengaruhi penetrasi panas. Seluruh burung dan daging panggang tebal memiliki massa termal yang lebih besar relatif terhadap luas permukaan, sehingga mereka menahan lebih banyak panas dan carry-over-nya lebih besar. Potongan datar seperti steak memiliki rasio permukaan-terhadap-volume yang tinggi dan cepat dingin, dengan carry-over minimal.',
  },
  {
    question: 'Berapa lama saya harus merest daging setelah mengangkatnya?',
    answer: 'Waktu resting tergantung pada berat dan geometri. Aturan umumnya sekitar 1 menit per 100g daging, minimum 10 menit, maksimum 45 menit. Daging panggang 2 kg membutuhkan sekitar 16 menit resting. Selama waktu ini suhu internal menjadi seimbang dan efek carry-over selesai.',
  },
];

const howTo = [
  {
    name: 'Pilih geometri daging',
    text: 'Pilih Whole Bird untuk unggas, Cylindrical Roast untuk tenderloin dan potongan tanpa tulang, atau Flat Cut untuk steak dan fillet.',
  },
  {
    name: 'Masukkan berat',
    text: 'Input total berat potongan daging Anda dalam gram. Berat minimum berlaku per jenis geometri.',
  },
  {
    name: 'Atur suhu oven',
    text: 'Masukkan suhu oven Anda yang sebenarnya. Suhu yang lebih tinggi meningkatkan efek carry-over.',
  },
  {
    name: 'Atur suhu target',
    text: 'Masukkan suhu internal akhir yang diinginkan (misalnya 54°C untuk daging sapi medium-rare, 74°C untuk unggas).',
  },
  {
    name: 'Baca suhu angkat',
    text: 'Kalkulator memberi tahu Anda kapan tepatnya harus mengangkat daging untuk mencapai target setelah resting.',
  },
  {
    name: 'Rest daging',
    text: 'Biarkan daging beristirahat selama waktu yang direkomendasikan. Jangan menutup terlalu rapat atau kerak akan melunak.',
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
  slug: 'prediktor-memasak-lanjutan',
  title: 'Prediktor Carry Over Cooking',
  description: 'Prediksi berapa derajat daging panggang Anda akan terus matang setelah dikeluarkan dari oven. Dapatkan suhu angkat yang tepat untuk medium rare yang sempurna.',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  ui: {
    title: 'Prediktor Carry Over Cooking',
    subtitle: 'Kalkulator inersia termal untuk pemanggangan presisi',
    geometryLabel: 'Geometri Daging',
    wholeBird: 'Seluruh Burung (Unggas)',
    cylindricalRoast: 'Daging Panggang Silindris (Tenderloin, Tanpa Tulang)',
    flatCut: 'Potongan Datar (Steak, Fillet)',
    weightLabel: 'Berat',
    ovenTempLabel: 'Suhu Oven',
    targetTempLabel: 'Suhu Internal Target',
    pullTemp: 'Suhu Angkat',
    carryOver: 'Carry-Over',
    restTime: 'Waktu Rest',
    minutes: 'mnt',
    degreesC: '°C',
    degreesF: '°F',
    unitLabel: 'Satuan',
    metricUnit: 'Metrik',
    imperialUnit: 'Imperial',
    geometryDescCylindrical: 'Geometri daging panggang silindris dipilih - inersia termal sedang dengan carry-over yang dapat diprediksi.',
    weightG: 'g',
    weightOz: 'oz',
    errorTargetExceedsOven: 'Suhu target tidak boleh melebihi suhu oven.',
    errorOvenTooHot: 'Suhu oven melebihi 350°C. Harap turunkan suhu.',
    errorWeightTooLow: 'Berat di bawah minimum untuk geometri ini.',
    errorWeightTooHigh: 'Berat melebihi maksimum untuk geometri ini.',
    pullNow: 'Angkat daging sekarang',
    pullAt: 'Angkat pada',
    toReach: 'untuk mencapai',
    afterRest: 'setelah resting',
    carryOverWillAdd: 'Carry-over akan menambah sekitar',
    footerTemplate: '{carry} carry-over · {rest} rest · {weight}{wunit}, {oven} oven → {target} target',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Prediktor Carry-Over Cooking: Dapatkan Suhu Angkat yang Tepat Setiap Saat',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Carry-over cooking adalah kenaikan suhu internal yang berlanjut setelah makanan meninggalkan oven. Lapisan luar menyimpan panas selama pemanggangan, dan energi ini terus merambat menuju pusat yang lebih dingin selama resting. Daging panggang tebal yang diangkat pada 50°C bisa mencapai 54°C setelah resting - perbedaan antara rare dan medium-rare. Kalkulator ini memprediksi dengan tepat berapa derajat daging panggang Anda akan naik sehingga Anda dapat mengangkatnya pada saat yang tepat.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5-8°C', label: 'Carry-over tipikal (oven panas)', icon: 'mdi:thermometer' },
        { value: '1-3°C', label: 'Carry-over minimal (oven rendah)', icon: 'mdi:thermometer-low' },
        { value: '16 mnt', label: 'Waktu resting untuk daging 2kg', icon: 'mdi:clock-outline' },
        { value: '45 mnt', label: 'Rest maksimum yang direkomendasikan', icon: 'mdi:clock-alert' },
      ],
    },
    {
      type: 'title',
      text: 'Bagan Suhu Angkat berdasarkan Tingkat Kematangan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gunakan bagan ini untuk menemukan suhu internal target Anda, lalu biarkan kalkulator menentukan suhu angkat yang tepat. Ingat: suhu angkat selalu <strong>lebih rendah</strong> dari target Anda karena efek carry-over akan terus memasak selama resting.',
    },
    {
      type: 'table',
      headers: ['Tingkat Kematangan', 'Suhu Target', 'Suhu Angkat (oven 200°C)', 'Waktu Rest'],
      rows: [
        ['Daging Sapi Rare', '52°C / 126°F', '46-48°C / 115-118°F', '10-15 mnt'],
        ['Daging Sapi Medium-Rare', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 mnt'],
        ['Daging Sapi Medium', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 mnt'],
        ['Daging Sapi Well Done', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 mnt'],
        ['Daging Babi Medium', '63°C / 145°F', '57-59°C / 135-138°F', '10-15 mnt'],
        ['Daging Babi Well Done', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 mnt'],
        ['Dada Ayam/Kalkun', '74°C / 165°F', '68-70°C / 154-158°F', '15-20 mnt'],
        ['Paha Ayam/Kalkun', '82°C / 180°F', '76-78°C / 169-172°F', '15-20 mnt'],
        ['Daging Domba Medium-Rare', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 mnt'],
        ['Daging Domba Medium', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 mnt'],
      ],
    },
    {
      type: 'title',
      text: 'Bagaimana Geometri Mengubah Kalkulus Termal',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Seluruh Burung',
          icon: 'mdi:food-drumstick',
          description: 'Massa termal maksimum relatif terhadap luas permukaan. Inti dada dan paha yang tebal menyimpan panas laten yang sangat besar.',
          highlight: false,
          points: ['Carry-over: 5-10°C dari oven 200°C', 'Rest: 20-45 menit', 'Terbaik untuk: kalkun, ayam utuh, bebek', 'Angkat 8-10°C di bawah target'],
        },
        {
          title: 'Daging Panggang Silindris',
          icon: 'mdi:food-steak',
          description: 'Bentuk pemanggangan yang paling umum. Retensi panas sedang dengan nilai carry-over yang dapat diprediksi.',
          highlight: true,
          points: ['Carry-over: 3-7°C dari oven 200°C', 'Rest: 15-30 menit', 'Terbaik untuk: tenderloin, loin babi, rack domba', 'Angkat 5-7°C di bawah target'],
        },
        {
          title: 'Potongan Datar',
          icon: 'mdi:food',
          description: 'Rasio permukaan-terhadap-volume yang tinggi berarti panas cepat hilang. Carry-over minimal tetapi tetap penting.',
          highlight: false,
          points: ['Carry-over: 1-3°C dari oven 200°C', 'Rest: 5-15 menit', 'Terbaik untuk: steak, dada ayam, fillet ikan', 'Angkat 1-3°C di bawah target'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Kesalahan Carry-Over Umum dan Cara Memperbaikinya',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Terlambat mengangkat',
      html: 'Jika Anda menunggu hingga termometer membaca suhu target Anda sebelum mengangkat, carry-over akan melampaui 3-8°C. Daging panggang medium-rare menjadi medium atau medium-well. <strong>Selalu angkat 5-8°C di bawah target Anda.</strong> Gunakan kalkulator ini untuk mendapatkan angka yang tepat.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Terlalu cepat memotong',
      html: 'Memotong daging panggang segera setelah diangkat melepaskan hingga 30% sari daging. Gradien termal tidak punya waktu untuk menyamakan, sehingga bagian tengah tetap mentah sementara lapisan luar terlalu matang. <strong>Rest selama waktu yang direkomendasikan.</strong> Tutup longgar dengan foil - jangan bungkus rapat atau uap akan melunakkan kerak.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Suhu oven terlalu rendah',
      html: 'Oven bersuhu rendah (di bawah 150°C / 300°F) menciptakan gradien suhu minimal antara permukaan dan inti. Ini berarti hampir tidak ada efek carry-over. Jika Anda memasak pada suhu rendah, Anda dapat mengangkat pada suhu target yang tepat dengan risiko overshoot minimal. Namun, pengembangan kerak akan berkurang secara signifikan.',
    },
    {
      type: 'title',
      text: 'Kiat Pro untuk Pemanggangan Sempurna',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Aturan 10 Derajat',
      html: 'Oven panas (220°C / 425°F) menambahkan sekitar 1°C carry-over per 100g daging untuk seluruh burung, dan 0,7°C per 100g untuk daging panggang silindris. Gunakan ini sebagai pemeriksaan kewajaran terhadap kalkulator: ayam 2kg pada 220°C seharusnya carry-over sekitar 7-9°C.',
    },
    {
      type: 'tip',
      title: 'Posisi Resting Penting',
      html: 'Selalu istirahatkan daging di piring hangat atau talenan, bukan di permukaan dingin. Permukaan dingin akan menarik panas dari bagian bawah daging panggang, menciptakan suhu akhir yang tidak merata. Untuk seluruh burung, istirahatkan dengan dada di atas agar sari daging terdistribusi merata ke daging putih.',
    },
    {
      type: 'tip',
      title: 'Tutup, Jangan Bungkus',
      html: 'Tutup longgar daging panggang dengan aluminium foil selama resting. Membungkus rapat memerangkap uap dan membuat kerak lembek. Tutup longgar mengurangi kehilangan panas sekitar 30% sambil membiarkan uap keluar, mempertahankan efek carry-over dan bagian luar yang renyah.',
    },
    {
      type: 'title',
      text: 'Glosarium Istilah Pemanggangan Kunci',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Carry-Over Cooking', definition: 'Kenaikan suhu internal yang berlanjut setelah makanan dikeluarkan dari sumber panas, disebabkan oleh panas yang merambat dari lapisan luar ke pusat.' },
        { term: 'Suhu Angkat (Pull Temperature)', definition: 'Suhu internal saat Anda harus mengeluarkan daging dari oven. Selalu lebih rendah dari suhu target untuk memperhitungkan carry-over.' },
        { term: 'Suhu Target (Target Temperature)', definition: 'Suhu internal akhir yang Anda inginkan untuk daging setelah resting. Juga disebut suhu penyajian.' },
        { term: 'Inersia Termal (Thermal Inertia)', definition: 'Kecenderungan suatu massa untuk menolak perubahan suhu. Potongan yang lebih berat dan padat memiliki inersia termal lebih tinggi dan carry-over lebih banyak.' },
        { term: 'Resting', definition: 'Periode setelah memasak di mana daging didiamkan, memungkinkan panas menyamakan dan sari daging terdistribusi merata ke seluruh serat.' },
        { term: 'Gradien Suhu (Temperature Gradient)', definition: 'Perbedaan suhu antara permukaan daging dan intinya. Gradien yang lebih besar menyimpan lebih banyak panas laten untuk carry-over.' },
        { term: 'Panas Laten (Latent Heat)', definition: 'Energi panas yang tersimpan di lapisan luar daging selama memasak. Energi ini dilepaskan saat suhu menyamakan selama resting.' },
      ],
    },
    {
      type: 'title',
      text: 'Referensi Cepat: Suhu Angkat yang Direkomendasikan',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Angkat pada suhu ini untuk hasil sempurna (oven 200°C / 400°F)',
      items: [
        'Daging sapi medium-rare: angkat pada 48-50°C / 118-122°F, target 54°C / 129°F',
        'Daging sapi medium: angkat pada 54-56°C / 129-133°F, target 60°C / 140°F',
        'Loin babi: angkat pada 57-59°C / 135-138°F, target 63°C / 145°F',
        'Dada ayam: angkat pada 68-70°C / 154-158°F, target 74°C / 165°F',
        'Seluruh kalkun: angkat pada 68-70°C / 154-158°F, target 74°C / 165°F (dada)',
        'Rack domba: angkat pada 48-50°C / 118-122°F, target 54°C / 129°F',
      ],
    },
    {
      type: 'paragraph',
      html: 'Setiap daging panggang berbeda. Berat, suhu oven yang tepat, dan bentuk potongan semuanya menggeser angka-angka ini. Itulah tepatnya yang dilakukan kalkulator ini - ia mengambil input spesifik Anda dan menghitung suhu angkat yang presisi untuk situasi Anda. Tanpa tebak-tebakan, tanpa daging panggang yang rusak.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
