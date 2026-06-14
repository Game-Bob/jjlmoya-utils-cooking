import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkulator Soda Kue dan Baking Powder: Penetral Asam Pengembang";
const description = "Hitung rasio soda kue dan baking powder yang tepat untuk resep Anda. Netralkan bahan asam seperti buttermilk dan yogurt, hindari rasa logam, dan dapatkan ketinggian sempurna setiap saat.";
const faq = [
  {
    question: "Mengapa mengganti baking powder dengan soda kue memerlukan asam?",
    answer: "Soda kue adalah basa murni. Ia memerlukan sumber asam untuk aktif dan melepaskan gas karbon dioksida. Tanpa asam yang cukup, soda kue tidak akan bereaksi sepenuhnya dan meninggalkan rasa pahit dan logam pada hasil pangangan."
  },
  {
    question: "Apa perbedaan antara soda kue dan baking powder?",
    answer: "Soda kue adalah 100% natrium bikarbonat, sebuah basa. Baking powder adalah pengembang lengkap yang mengandung soda kue, bahan pengasam kering (seperti krim tartar), dan pati. Baking powder bersifat menetralkan sendiri."
  },
  {
    question: "Berapa banyak baking powder yang setara dengan 1 sendok teh soda kue?",
    answer: "Soda kue kira-kira 3-4 kali lebih kuat daripada baking powder. Untuk mengganti 1 sendok teh soda kue, Anda perlu sekitar 3-4 sendok teh baking powder. Namun, penggantian ini juga menambahkan garam asam yang dapat mengubah rasa; jadi sebaiknya gunakan kalkulator kami untuk konversi yang tepat."
  },
  {
    question: "Mengapa kue saya terasa seperti sabun atau logam?",
    answer: "Rasa seperti sabun atau logam adalah tanda klasik soda kue yang tidak bereaksi. Ketika tidak ada cukup asam dalam adonan untuk menetralkan natrium bikarbonat sepenuhnya, residu alkali tetap ada setelah dipanggang dan memberikan rasa kimia yang tidak enak. Gunakan kalkulator kami untuk memastikan penetralan sempurna."
  },
  {
    question: "Bisakah saya menggunakan bubuk kakao Dutch-process sebagai asam?",
    answer: "Tidak. Bubuk kakao Dutch-process telah diolah dengan zat alkali yang mengurangi keasaman alaminya (pH ~7-8). Hanya bubuk kakao alami (pH ~5-6) yang bersifat asam dan akan menetralkan soda kue."
  },
  {
    question: "Bagaimana soda kue mempengaruhi kecokelatan hasil pangangan?",
    answer: "Soda kue meningkatkan pH adonan, membuatnya lebih alkali. pH yang lebih tinggi mempercepat reaksi pencokelatan Maillard, menghasilkan kulit yang lebih gelap dan rasa yang lebih dalam pada kue kering dan bolu."
  }
];

const howTo = [
  {
    name: "Masukkan berat tepung",
    text: "Masukkan berat total tepung dalam resep Anda dalam gram atau ons untuk menghitung total daya pengembang yang diperlukan."
  },
  {
    name: "Tambahkan bahan asam",
    text: "Pilih bahan asam dalam resep Anda (seperti buttermilk, yogurt, atau jus lemon) dan masukkan beratnya."
  },
  {
    name: "Periksa keseimbangan pH",
    text: "Amati skala keseimbangan pH virtual. Skala yang seimbang menunjukkan penetralan optimal tanpa rasa logam yang tidak enak."
  },
  {
    name: "Ukur bahan pengembang",
    text: "Baca jumlah soda kue yang direkomendasikan untuk penetralan dan tambahan baking powder yang diperlukan untuk mencapai ketinggian target."
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
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'penetral-asam-pengembang',
  title: 'Penetral Asam Pengembang',
  description: 'Hitung rasio soda kue dan baking powder yang tepat untuk resep Anda. Netralkan bahan asam seperti buttermilk dan yogurt, hindari rasa logam, dan dapatkan ketinggian sempurna setiap saat.',
  faqTitle: 'Pertanyaan Umum',
  ui: {
    title: "Penetral Asam Pengembang",
    subtitle: "Stoikiometri tepat untuk ketinggian dan rasa kue yang sempurna",
    flourLabel: "Berat Tepung",
    addAcidLabel: "Tambah Bahan Asam",
    weightLabel: "Berat",
    removeButton: "Hapus",
    bakingSodaNeeded: "Soda Kue Ternetralkan",
    requiredBakingPowder: "Target Pengembangan",
    providedBakingPowderEquivalent: "Pengembangan dari Soda Kue",
    boosterBakingPowder: "Tambahan Baking Powder",
    resultsTitle: "Pengembang Terhitung",
    statusBalanced: "Seimbang",
    statusAcidic: "Kelebihan Asam",
    statusAlkaline: "Kelebihan Basa",
    gramsUnit: "g",
    ouncesUnit: "oz",
    teaspoonsUnit: "sdt",
    scaleBalanceTitle: "Keseimbangan pH Virtual",
    acidListTitle: "Bahan Asam",
    unitLabel: "Sistem Pengukuran",
    metricUnit: "Metrik (g)",
    imperialUnit: "Imperial (oz)",
    acid_buttermilk: "Buttermilk",
    acid_yogurt: "Yogurt",
    acid_sour_cream: "Krim Asam",
    acid_honey: "Madu",
    acid_molasses: "Molase",
    acid_cocoa: "Bubuk Kakao Alami",
    acid_lemon_juice: "Jus Lemon",
    acid_vinegar: "Cuka",
    stoichiometryBadge: "Stoikiometri pH",
    simulateSodaLabel: "Simulasikan Soda Kue yang Ditambahkan",
    autoBalanceBtn: "Keseimbangan Otomatis",
    sodaAddedLabel: "Soda Kue Ditambahkan"
  },
  faq,
  howTo,
  seo: [
    {
      type: 'summary',
      title: 'Poin Penting untuk Pengembangan Sempurna',
      items: [
        'Soda kue perlu asam untuk aktif; tanpanya, hasil pangangan Anda akan terasa seperti sabun dan logam',
        'Baking powder menetralkan sendiri dan memberikan daya pengembang ekstra sebagai tambahan',
        'Target standar adalah 4% dari berat tepung dalam setara baking powder untuk ketinggian yang tepat',
        'Gunakan tabel penetralan di bawah untuk mencocokkan bahan asam Anda dengan jumlah soda kue yang tepat'
      ]
    },
    {
      type: 'title',
      text: 'Kimia Bahan Pengembang dalam Pembuatan Kue',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Pengembangan kimia mengandalkan <strong>reaksi penetralan asam-basa</strong> untuk menghasilkan gas karbon dioksida (CO2), yang terperangkap dalam matriks adonan dan menyebabkannya naik selama dipanggang. Mencapai rasio yang tepat antara natrium bikarbonat (soda kue) dan bahan asam sangat penting. <strong>Terlalu banyak soda</strong> menghasilkan residu alkali yang tidak bereaksi, yang memberikan rasa sabun, logam, dan perubahan warna kuning. <strong>Terlalu banyak asam</strong> dapat menghasilkan kue yang padat, datar, dengan volume yang buruk.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '3-4x',
          label: 'Soda kue lebih kuat dari baking powder',
          icon: 'mdi:flash'
        },
        {
          value: '4%',
          label: 'Target pengembangan (% dari berat tepung)',
          icon: 'mdi:target'
        },
        {
          value: '1/4 sdt',
          label: 'Soda kue per 120g buttermilk/yogurt',
          icon: 'mdi:spoon-sugar'
        },
        {
          value: '0.0125',
          label: 'Rasio penetralan (asam susu)',
          icon: 'mdi:scale-balance'
        }
      ]
    },
    {
      type: 'title',
      text: 'Soda Kue vs. Baking Powder: Perbandingan Lengkap',
      level: 3
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Soda Kue',
          icon: 'mdi:flask-outline',
          description: 'Natrium bikarbonat murni (NaHCO3). Basa alkali kuat yang memerlukan asam eksternal untuk aktif dan menghasilkan CO2.',
          points: [
            '3-4x lebih kuat dari baking powder',
            'Perlu asam (buttermilk, yogurt, jus lemon) untuk bereaksi',
            'Kelebihan menyebabkan rasa sabun, logam, dan remah kuning',
            'Menaikkan pH; meningkatkan pencokelatan Maillard pada kue kering',
            'Bereaksi tunggal: melepaskan CO2 segera setelah dicampur'
          ]
        },
        {
          title: 'Baking Powder',
          icon: 'mdi:flask-round-bottom-outline',
          description: 'Sistem pengembang lengkap yang mengandung soda kue + garam asam kering + pati pengisi. Menetralkan sendiri dan dapat diandalkan.',
          highlight: true,
          points: [
            'Mengandung asam sendiri (monokalsium fosfat, SAP)',
            'Bereaksi ganda: melepaskan CO2 saat dicampur DAN saat dipanaskan',
            'Tanpa rasa logam; pH sudah seimbang',
            'Lebih lemah per gram; gunakan 3-4x lebih banyak untuk menyamai kekuatan soda',
            'Terbaik sebagai tambahan saat soda saja tidak bisa mengangkat semua tepung'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Bahan Asam', 'Berat Standar', 'Soda Kue Ternetralkan', 'Rasio Penetralan'],
      rows: [
        ['Buttermilk / Yogurt / Krim Asam', '120g (1/2 Cangkir)', '1.5g (1/4 sdt)', '0.0125'],
        ['Jus Lemon / Cuka', '15g (1 sdm)', '1.5g (1/4 sdt)', '0.1000'],
        ['Bubuk Kakao Alami', '80g (1 Cangkir)', '3.0g (1/2 sdt)', '0.0375'],
        ['Madu', '340g (1 Cangkir)', '3.0g (1/2 sdt)', '0.0088'],
        ['Molase', '328g (1 Cangkir)', '3.0g (1/2 sdt)', '0.0091']
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Pemecahan Masalah: Apakah Pengembangan Anda Tidak Seimbang?',
      badge: 'Cek Cepat',
      html: '<strong>Jika kue Anda ambruk:</strong> Terlalu banyak asam atau terlalu sedikit pengembang secara keseluruhan; CO2 keluar sebelum struktur mengeras.<br/><br/><strong>Jika kue Anda padat dan datar:</strong> Terlalu banyak asam tanpa cukup soda kue untuk menetralkannya, atau total daya pengembang tidak mencukupi untuk berat tepung.<br/><br/><strong>Jika kue Anda terasa seperti sabun atau logam:</strong> Kelebihan soda kue yang tidak bereaksi; tambahkan lebih banyak bahan asam atau kurangi soda.<br/><br/><strong>Jika kue Anda memiliki bintik kuning:</strong> Tanda klasik gumpalan soda kue yang tidak larut dan tidak bereaksi; ayak soda Anda bersama tepung lain kali.'
    },
    {
      type: 'title',
      text: 'Cara Menyeimbangkan Pengembang dan Menghindari Rasa Logam',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Untuk mencapai rasa dan ketinggian optimal, ikuti proses ini: <strong>Pertama</strong>, tentukan jumlah soda kue yang diperlukan untuk menetralkan sepenuhnya komponen asam adonan Anda menggunakan tabel di atas. <strong>Selanjutnya</strong>, ubah soda kue tersebut menjadi setara baking powder (kalikan dengan 4) dan bandingkan dengan total daya pengembang yang dibutuhkan untuk tepung Anda; biasanya <strong>4% dari berat tepung</strong> dalam setara baking powder. <strong>Jika ada kekurangan</strong>, tambahkan sisa daya pengembang dalam bentuk baking powder netral sebagai tambahan. Kalkulator kami melakukan semua ini secara otomatis.'
    },
    {
      type: 'list',
      icon: 'mdi:alert-circle-outline',
      items: [
        'Jangan pernah mengganti soda kue 1:1 dengan baking powder; soda 3-4x lebih kuat dan perlu asam',
        'Selalu ayak soda kue bersama bahan kering untuk mencegah gumpalan pahit',
        'Kakao Dutch-process TIDAK asam; gunakan bubuk kakao alami jika mengandalkan kakao sebagai sumber asam',
        'Madu dan molase bersifat asam lemah; mereka perlu jauh lebih sedikit soda per gram daripada jus lemon',
        'Bekerja cepat setelah mencampur: pengembang kimia mulai bereaksi segera setelah kontak dengan cairan'
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Rasio Penetralan',
          definition: 'Proporsi soda kue yang diperlukan untuk menetralkan sepenuhnya berat tertentu bahan asam. Rasio yang lebih rendah berarti bahan tersebut kurang asam per gram.'
        },
        {
          term: 'Daya Pengembang',
          definition: 'Jumlah total gas CO2 yang dapat dihasilkan oleh bahan pengembang. Diukur dalam setara baking powder, di mana 4% dari berat tepung adalah target standar untuk bolu dan muffin.'
        },
        {
          term: 'Baking Powder Bereaksi Ganda',
          definition: 'Baking powder yang melepaskan CO2 dalam dua tahap: pertama saat dicampur dengan cairan pada suhu ruang, dan kedua saat terkena panas oven. Memberikan ketinggian yang lebih andal.'
        },
        {
          term: 'Reaksi Maillard',
          definition: 'Reaksi kimia antara asam amino dan gula pereduksi yang mencokelatkan makanan dan menciptakan rasa kompleks. Diperkuat oleh pH tinggi dari kelebihan soda kue; diinginkan pada kue kering, tidak diinginkan pada bolu lembut.'
        },
        {
          term: 'Keseimbangan pH',
          definition: 'Ukuran keasaman atau kebasaan adonan. pH netral (sekitar 7) berarti semua soda kue telah bereaksi dengan semua asam. Sedikit alkali mendukung pencokelatan; asam mendukung kelembutan.'
        }
      ]
    },
    {
      type: 'tip',
      html: '<strong>Pencokelatan dan pH:</strong> Meskipun penetralan sempurna adalah kunci untuk rasa, adonan yang sedikit alkali (karena sedikit kelebihan soda kue) bisa diinginkan pada bolu cokelat dan kue kering. pH yang lebih tinggi meningkatkan pencokelatan Maillard, menghasilkan warna lebih gelap, pinggiran lebih renyah, dan nada karamel yang lebih dalam. Untuk bolu vanila yang lembut, targetkan penetralan tepat untuk mempertahankan rasa murni dan bersih.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
