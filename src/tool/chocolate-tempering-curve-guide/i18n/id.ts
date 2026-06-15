import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Panduan kurva tempering cokelat dan metode seeding";
const description = "Kuasai tempering cokelat di rumah. Hitung berat cokelat seeding (callets) yang diperlukan dan ikuti kurva suhu termodinamika langkah demi langkah untuk cokelat hitam, susu, dan putih.";
const faq = [
  {
    "question": "Apa itu tempering cokelat ?",
    "answer": "Tempering cokelat adalah proses memanaskan, mendinginkan, dan memanaskan kembali cokelat secara perlahan untuk mengontrol kristalisasi mentega kakao. Ini memaksa molekul lemak mengkristal menjadi kristal Form V (Beta) yang stabil, memberikan cokelat kilau mengkilap, patahan yang renyah, dan mencegahnya meleleh dengan mudah pada suhu kamar."
  },
  {
    "question": "Apa itu metode seeding ?",
    "answer": "Metode seeding melibatkan pelelehan sebagian cokelat, lalu menambahkan potongan cokelat padat yang sudah ditempering (benih atau callets) selama fase pendinginan. Kristal padat ini bertindak sebagai templat, memandu molekul lemak cair untuk membeku dalam struktur kristal Form V yang diinginkan tanpa memerlukan meja marmer."
  },
  {
    "question": "Mengapa cokelat saya muncul bercak putih (fat bloom) ?",
    "answer": "Garis atau bercak putih dikenal sebagai fat bloom. Ini terjadi ketika cokelat tidak ditempering dengan benar, memungkinkan kristal mentega kakao yang tidak stabil naik ke permukaan dan mengkristal kembali. Ini masih aman untuk dimakan tetapi kehilangan tekstur dan kilaunya."
  },
  {
    "question": "Bisakah saya men-tempering cokelat yang sudah mengalami fat bloom ?",
    "answer": "Ya. Bloom murni merupakan pemisahan fisik kristal lemak atau gula, bukan kerusakan kimia. Melelehkan cokelat yang mekar sepenuhnya pada suhu leleh yang sesuai (sekitar 45-50°C) akan menghancurkan struktur kristal yang tidak stabil, memungkinkan Anda memulai kembali proses tempering dari awal."
  },
  {
    "question": "Bagaimana kelembapan dan suhu dapur memengaruhi tempering ?",
    "answer": "Cokelat sangat sensitif terhadap lingkungan. Suhu dapur yang ideal untuk tempering adalah antara 18°C dan 22°C dengan kelembapan relatif di bawah 50%. Kelembapan tinggi dapat menyebabkan kondensasi air pada cokelat, menyebabkan sugar bloom atau pengentalan cokelat menjadi pasta padat yang tidak dapat digunakan."
  },
  {
    "question": "Bisakah saya menggunakan cokelat chip biasa dari supermarket ?",
    "answer": "Cokelat chip biasa sering mengandung stabilisator dan lebih sedikit mentega kakao agar bentuknya tetap saat dipanggang. Untuk tempering yang sukses dan mengkilap, sangat disarankan menggunakan cokelat couverture profesional dengan kandungan mentega kakao minimal 31%."
  }
];

const howTo = [
  {
    "name": "Pilih jenis cokelat",
    "text": "Pilih cokelat hitam, susu, atau putih untuk memuat batas suhu spesifik."
  },
  {
    "name": "Masukkan berat total",
    "text": "Masukkan berat total target cokelat tempered yang ingin Anda siapkan."
  },
  {
    "name": "Fase melelehkan",
    "text": "Lelehkan 75% cokelat (sesuai perhitungan) ke suhu target (misalnya 50C untuk cokelat hitam) untuk memecah semua struktur kristal."
  },
  {
    "name": "Fase pendinginan dan seeding",
    "text": "Dinginkan cokelat leleh sambil mengaduk sisa 25% callets padat sampai mencapai suhu dingin."
  },
  {
    "name": "Fase kerja",
    "text": "Panaskan kembali cokelat secara perlahan ke suhu kerja untuk melelehkan kristal yang tidak stabil sebelum digunakan."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa itu tempering cokelat ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tempering cokelat adalah proses memanaskan, mendinginkan, dan memanaskan kembali cokelat secara perlahan untuk mengontrol kristalisasi mentega kakao. Ini memaksa molekul lemak mengkristal menjadi kristal Form V (Beta) yang stabil, memberikan cokelat kilau mengkilap, patahan yang renyah, dan mencegahnya meleleh dengan mudah pada suhu kamar."
      }
    },
    {
      "@type": "Question",
      "name": "Apa itu metode seeding ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Metode seeding melibatkan pelelehan sebagian cokelat, lalu menambahkan potongan cokelat padat yang sudah ditempering (benih atau callets) selama fase pendinginan. Kristal padat ini bertindak sebagai templat, memandu molekul lemak cair untuk membeku dalam struktur kristal Form V yang diinginkan tanpa memerlukan meja marmer."
      }
    },
    {
      "@type": "Question",
      "name": "Mengapa cokelat saya muncul bercak putih (fat bloom) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Garis atau bercak putih dikenal sebagai fat bloom. Ini terjadi ketika cokelat tidak ditempering dengan benar, memungkinkan kristal mentega kakao yang tidak stabil naik ke permukaan dan mengkristal kembali. Ini masih aman untuk dimakan tetapi kehilangan tekstur dan kilaunya."
      }
    },
    {
      "@type": "Question",
      "name": "Bisakah saya men-tempering cokelat yang sudah mengalami fat bloom ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya. Bloom murni merupakan pemisahan fisik kristal lemak atau gula, bukan kerusakan kimia. Melelehkan cokelat yang mekar sepenuhnya pada suhu leleh yang sesuai (sekitar 45-50°C) akan menghancurkan struktur kristal yang tidak stabil, memungkinkan Anda memulai kembali proses tempering dari awal."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana kelembapan dan suhu dapur memengaruhi tempering ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cokelat sangat sensitif terhadap lingkungan. Suhu dapur yang ideal untuk tempering adalah antara 18°C dan 22°C dengan kelembapan relatif di bawah 50%. Kelembapan tinggi dapat menyebabkan kondensasi air pada cokelat, menyebabkan sugar bloom atau pengentalan cokelat menjadi pasta padat yang tidak dapat digunakan."
      }
    },
    {
      "@type": "Question",
      "name": "Bisakah saya menggunakan cokelat chip biasa dari supermarket ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cokelat chip biasa sering mengandung stabilisator dan lebih sedikit mentega kakao agar bentuknya tetap saat dipanggang. Untuk tempering yang sukses dan mengkilap, sangat disarankan menggunakan cokelat couverture profesional dengan kandungan mentega kakao minimal 31%."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Panduan kurva tempering cokelat dan metode seeding",
  "description": "Kuasai tempering cokelat di rumah. Hitung berat cokelat seeding (callets) yang diperlukan dan ikuti kurva suhu termodinamika langkah demi langkah untuk cokelat hitam, susu, dan putih.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Pilih jenis cokelat",
      "text": "Pilih cokelat hitam, susu, atau putih untuk memuat batas suhu spesifik."
    },
    {
      "@type": "HowToStep",
      "name": "Masukkan berat total",
      "text": "Masukkan berat total target cokelat tempered yang ingin Anda siapkan."
    },
    {
      "@type": "HowToStep",
      "name": "Fase melelehkan",
      "text": "Lelehkan 75% cokelat (sesuai perhitungan) ke suhu target (misalnya 50C untuk cokelat hitam) untuk memecah semua struktur kristal."
    },
    {
      "@type": "HowToStep",
      "name": "Fase pendinginan dan seeding",
      "text": "Dinginkan cokelat leleh sambil mengaduk sisa 25% callets padat sampai mencapai suhu dingin."
    },
    {
      "@type": "HowToStep",
      "name": "Fase kerja",
      "text": "Panaskan kembali cokelat secara perlahan ke suhu kerja untuk melelehkan kristal yang tidak stabil sebelum digunakan."
    }
  ]
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Panduan kurva tempering cokelat dan metode seeding",
  "description": "Kuasai tempering cokelat di rumah. Hitung berat cokelat seeding (callets) yang diperlukan dan ikuti kurva suhu termodinamika langkah demi langkah untuk cokelat hitam, susu, dan putih.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  }
};

export const content: ToolLocaleContent = {
  slug: 'panduan-kurva-tempering-cokelat',
  title,
  description,
  faqTitle: 'Pertanyaan yang sering diajukan',
  ui: {
  "title": "Asisten Tempering Cokelat",
  "subtitle": "Kurva termodinamika dan kalkulator seeding",
  "chocolateTypeLabel": "Jenis Cokelat",
  "totalWeightLabel": "Target berat total",
  "meltLabel": "Fase Melelehkan",
  "coolLabel": "Fase Mendinginkan & Seeding",
  "workLabel": "Fase Kerja",
  "meltTempLabel": "Suhu Leleh",
  "coolTempLabel": "Suhu Dingin",
  "workTempLabel": "Suhu Kerja",
  "meltWeightLabel": "Berat untuk dilelehkan",
  "seedWeightLabel": "Berat seeding (callet)",
  "molecularLabel": "Kondisi kristalisasi molekuler",
  "seedingTitle": "Kalkulator metode seeding (porsi 25%)",
  "stepTitle": "Langkah tempering",
  "darkOption": "Cokelat Hitam",
  "milkOption": "Cokelat Susu",
  "whiteOption": "Cokelat Putih",
  "resetButton": "Atur ulang panduan",
  "warningOverheated": "Peringatan: Suhu terlalu tinggi! Anda dapat membakar padatan kakao или merusak protein susu.",
  "warningUnderheated": "Peringatan: Suhu terlalu rendah. Kristal stabil tidak terbentuk atau cokelat akan mengeras terlalu cepat.",
  "interactiveInfo": "Ketuk langkah-langkah atau geser termometer untuk melihat pratinjau fase molekuler"
},
  faq,
  howTo,
  seo: [
  {
    "type": "title",
    "text": "Termodinamika kristalisasi mentega kakao",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Mentega kakao bersifat polimorfik, artinya dapat memadat menjadi enam bentuk kristal yang berbeda (I hingga VI). Setiap bentuk memiliki titik leleh yang unik. Tujuan tempering adalah memaksimalkan kristal Form V (Beta) yang stabil. Form V memberikan kilau, tekstur kokoh, dan patahan renyah cokelat profesional."
  },
  {
    "type": "stats",
    "columns": 4,
    "items": [
      {
        "value": "Form V",
        "label": "Target kristal Beta",
        "icon": "mdi:hexagon-multiple-outline"
      },
      {
        "value": "25-30%",
        "label": "Rasio seeding",
        "icon": "mdi:scale"
      },
      {
        "value": "31-32°C",
        "label": "Suhu kerja hitam",
        "icon": "mdi:thermometer"
      },
      {
        "value": "0.1-0.2C",
        "label": "Kecepatan pendinginan/mnt",
        "icon": "mdi:trending-down"
      }
    ]
  },
  {
    "type": "title",
    "text": "Enam bentuk kristal polimorfik mentega kakao",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Memahami termodinamika setiap bentuk kristal sangat penting untuk menghindari kegagalan tempering. Berikut adalah karakteristik bentuk kristal :"
  },
  {
    "type": "table",
    "headers": [
      "Bentuk Kristal",
      "Nama Struktur",
      "Titik Leleh",
      "Stabilitas & Tekstur"
    ],
    "rows": [
      [
        "Form I",
        "Gamma (γ)",
        "17°C (62.6°F)",
        "Sangat tidak stabil, lunak, meleleh seketika di tangan, tidak renyah."
      ],
      [
        "Form II",
        "Alpha (α)",
        "21°C (69.8°F)",
        "Tidak stabil, lunak, struktur rapuh, meleleh sangat mudah."
      ],
      [
        "Form III",
        "Beta Prime (β')",
        "25.5°C (77.9°F)",
        "Tidak stabil, kokoh tapi tidak renyah, permukaan kusam."
      ],
      [
        "Form IV",
        "Beta Prime (β')",
        "27.3°C (81.1°F)",
        "Tidak stabil, kokoh, meleleh sedikit terlalu mudah, kurang kilau."
      ],
      [
        "Form V",
        "Beta (β)",
        "33.8°C (92.8°F)",
        "Sangat stabil, sangat mengkilap, patahan renyah (Bentuk yang diinginkan)."
      ],
      [
        "Form VI",
        "Beta (β)",
        "36.3°C (97.3°F)",
        "Paling stabil, keras, terbentuk berbulan-bulan, menyebabkan bloom."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Bagaimana metode seeding bekerja",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Seeding adalah teknik yang sangat andal tanpa memerlukan meja marmer. Dengan menyisakan 25% cokelat padat, kita memasukkan kristal Form V yang stabil langsung ke cokelat hangat, mengarahkan kristalisasi."
  },
  {
    "type": "title",
    "text": "Sains di balik kurva tempering langkah demi langkah",
    "level": 2
  },
  {
    "type": "list",
    "items": [
      "<strong>Fase 1: Melelehkan (T > 40°C):</strong> Pemanasan menghancurkan semua kristal (I-VI), menghasilkan lemak cair amorf.",
      "<strong>Fase 2: Pendinginan dan seeding (T ≈ 27°C):</strong> Pendinginan memulai pemadatan. Menambahkan 25% sisa cokelat padat memberi kristal Form V.",
      "<strong>Fase 3: Kerja (T ≈ 31°C):</strong> Pemanasan ringan melelehkan kristal Form IV tidak stabil yang terbentuk saat pendinginan."
    ]
  },
  {
    "type": "title",
    "text": "Metode praktis tempering di rumah",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Dapatkan hasil profesional di rumah. Ukur berat dengan tepat menggunakan kalkulator di atas :"
  },
  {
    "type": "list",
    "items": [
      "<strong>Metode benmari :</strong> Letakkan 75% cokelat di mangkuk di atas air mendidih. Jangan sampai mangkuk menyentuh air atau uap masuk. Cairkan, angkat dan masukkan 25% seeding. Aduk hingga mendingin, lalu panaskan sebentar di atas air untuk bekerja.",
      "<strong>Metode mikrogelombang :</strong> Panaskan 75% cokelat dalam interval 15-30 detik pada daya 50%. Aduk rata untuk menghindari titik panas. Masukkan 25% seeding padat saat mencair. Panaskan dalam interval 5-10 detik untuk bekerja.",
      "<strong>Metode sous vide :</strong> Masukkan semua cokelat ke dalam kantong vakum. Cairkan pada suhu leleh. Turunkan suhu dengan menambahkan es dan pijat kantong secara berkala. Panaskan ke suhu kerja."
    ]
  },
  {
    "type": "title",
    "text": "Cara melakukan uji tempering",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Uji cokelat sebelum digunakan. Celupkan ujung pisau bersih ke cokelat dan biarkan pada suhu 18-22°C. Jika ditempering, akan mengeras dalam 3-5 menit dengan kilau dan patahan renyah. Jika tidak, cairkan kembali."
  },
  {
    "type": "title",
    "text": "Mengatasi masalah tempering",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Tempering yang salah menghasilkan bercak abu-abu di permukaan. Selesaikan masalah ini dengan mencairkan cokelat kembali dan mengulangi proses."
  }
],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
