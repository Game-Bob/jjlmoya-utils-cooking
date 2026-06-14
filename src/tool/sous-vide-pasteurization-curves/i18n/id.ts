import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Kalkulator Kurva Pasteurisasi Sous Vide';
const description = 'Hitung waktu tepat yang diperlukan untuk pasteurisasi inti yang aman terhadap Salmonella dan Listeria dalam masakan sous vide, dengan mempertimbangkan bentuk dan ketebalan daging.';

const faq = [
  {
    question: 'Apa itu pasteurisasi dalam masakan sous vide?',
    answer: 'Pasteurisasi adalah proses memanaskan makanan ke suhu tertentu dan menahannya di sana cukup lama untuk mengurangi mikroorganisme patogen (seperti Salmonella, Listeria, dan E. coli) ke tingkat yang aman dan dapat diterima. Berbeda dengan sterilisasi, pasteurisasi tidak menghancurkan semua spora bakteri tetapi membuat makanan aman untuk dikonsumsi.',
  },
  {
    question: 'Mengapa ketebalan daging sangat memengaruhi waktu memasak?',
    answer: 'Perpindahan panas dalam makanan diatur oleh konduksi. Waktu yang diperlukan agar inti (titik terdingin) makanan mencapai suhu water bath meningkat secara kuadratik seiring ketebalan. Menggandakan ketebalan steak meningkatkan waktu pemanasan sekitar empat kali lipat.',
  },
  {
    question: 'Mengapa 54,4°C (130°F) dianggap sebagai suhu minimum sous vide yang aman?',
    answer: 'Pada suhu di bawah 54,4°C, patogen bawaan makanan umum seperti Salmonella dapat bertahan hidup dan berkembang biak secara aktif. Jika makanan disimpan di "zona bahaya" ini selama lebih dari 4 jam, toksin yang tahan panas dapat terbentuk, menimbulkan risiko keamanan pangan yang parah.',
  },
  {
    question: 'Apa itu reduksi 6D atau 6,5D?',
    answer: 'Reduksi D mengacu pada reduksi desimal (logaritmik) dalam populasi bakteri. Reduksi 6,5D berarti 99,99995% patogen target terbunuh. Misalnya, jika awalnya ada 1.000.000 bakteri, kurang dari 1 yang akan bertahan hidup.',
  },
  {
    question: 'Bagaimana geometri makanan memengaruhi laju pemanasan?',
    answer: 'Panas menembus bola dari semua arah (3 dimensi) dan silinder dari sisi-sisinya (2 dimensi), sedangkan lempengan datar dipanaskan terutama dari atas dan bawah (1 dimensi). Dengan demikian, bola memanas paling cepat, diikuti silinder, dengan lempengan memakan waktu paling lama.',
  },
];

const howTo = [
  {
    name: 'Atur suhu water bath',
    text: 'Sesuaikan slider agar sesuai dengan suhu water bath Anda. Perhatikan bahwa suhu yang lebih tinggi mempasteurisasi secara eksponensial lebih cepat.',
  },
  {
    name: 'Tentukan ketebalan daging',
    text: 'Ukur bagian paling tebal dari daging Anda dalam milimeter dan masukkan ke dalam kalkulator.',
  },
  {
    name: 'Pilih bentuk geometri',
    text: 'Pilih apakah makanan Anda berbentuk lempengan datar (steak, dada ayam), silinder (tenderloin sapi, ballotine), atau bola (bakso).',
  },
  {
    name: 'Pilih patogen target',
    text: 'Pilih Salmonella untuk keamanan daging dan unggas standar, atau Listeria monocytogenes untuk individu berisiko tinggi atau keamanan ekstra.',
  },
  {
    name: 'Tinjau total waktu memasak',
    text: 'Kalkulator menampilkan waktu pemanasan inti dan waktu penahanan letalitas. Jumlahkan keduanya untuk total durasi memasak yang aman.',
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
  slug: 'kurva-pasteurisasi-sous-vide',
  title: 'Kurva Pasteurisasi Sous Vide',
  description: 'Hitung waktu tepat yang diperlukan untuk pasteurisasi inti yang aman terhadap Salmonella dan Listeria dalam masakan sous vide, dengan mempertimbangkan bentuk dan ketebalan daging.',
  faqTitle: 'Pertanyaan Umum',
  ui: {
    title: 'Kurva Pasteurisasi Sous Vide',
    subtitle: 'Kinetika letalitas termal dan kompensasi suhu inti',
    bathTempLabel: 'Suhu Water Bath',
    thicknessLabel: 'Ketebalan Daging',
    shapeLabel: 'Geometri Daging',
    shapeSlab: 'Lempengan Datar (contoh: Steak, Dada Ayam)',
    shapeCylinder: 'Silinder (contoh: Tenderloin, Roulade)',
    shapeSphere: 'Bola (contoh: Bakso)',
    pathogenLabel: 'Patogen Target',
    pathogenSalmonella: 'Salmonella (Standar)',
    pathogenListeria: 'Listeria monocytogenes',
    resultsTitle: 'Waktu Pasteurisasi Aman',
    heatingTime: 'Waktu Pemanasan Inti',
    lethalityTime: 'Waktu Letalitas Patogen',
    totalTime: 'Total Waktu Memasak',
    dangerZoneTitle: 'Zona Bahaya Biologis',
    dangerZoneDesc: 'Suhu di bawah 54,4°C (130°F) tidak dapat mempasteurisasi makanan dengan aman karena laju replikasi bakteri dapat melebihi laju kematian termal. Jangan memasak sous vide di bawah suhu ini selama lebih dari 4 jam.',
    chartTitle: 'Kurva Reduksi Bakteri Logaritmik',
    chartXLabel: 'Waktu (menit)',
    chartYLabel: 'Reduksi Log',
    disclaimer: 'Perhitungan mengasumsikan suhu awal 5°C dan difusivitas termal daging tanpa lemak. Selalu gunakan termometer digital terkalibrasi untuk memverifikasi suhu water bath.',
    minutesUnit: 'mnt',
    mmUnit: 'mm',
    inUnit: 'inci',
    tempUnitC: '°C',
    tempUnitF: '°F',
    systemLabel: 'Sistem Pengukuran',
    systemMetric: 'Metrik',
    systemImperial: 'Imperial'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Pasteurisasi Sous Vide: Panduan Keamanan Lengkap untuk Koki Rumahan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Memasak sous vide telah mengubah dapur rumahan dengan membuat steak yang tidak mungkin terlalu matang dapat diakses oleh siapa saja yang memiliki immersion circulator. Namun metode ini menyembunyikan kompleksitas kritis: pada suhu rendah yang menghasilkan warna pink merata sempurna untuk medium-rare, Anda beroperasi hanya beberapa milimeter di atas ambang kematian termal bakteri berbahaya. Panduan ini menjelaskan secara tepat cara menghitung waktu pasteurisasi yang aman untuk setiap potongan daging, pada suhu berapa pun, sehingga Anda tidak pernah menyajikan ayam atau ikan yang kurang matang lagi.',
    },
    {
      type: 'title',
      text: 'Mengapa Keamanan Sous Vide Berbeda dari Memasak Tradisional',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saat Anda memanggang dada ayam pada suhu 200°C, permukaannya mencapai suhu letal secara instan dan bakteri mati dalam hitungan detik. Sous vide membalik model ini: water bath beroperasi pada suhu akhir yang persis Anda inginkan untuk makanan, terkadang serendah 55°C. Pada suhu ini, membunuh Salmonella atau Listeria tidak instan  -  ini adalah proses lambat yang bergantung pada waktu, diukur dalam menit atau bahkan jam. Tabel USDA FSIS Appendix A menetapkan bahwa mencapai reduksi 6,5-log Salmonella memerlukan menahan unggas pada suhu 60°C selama sekitar 28 menit setelah inti mencapai suhu. Pada 55°C, waktu ini membentang hingga hampir 90 menit. Jika Anda mengeluarkan kantong saat timer berbunyi tanpa memperhitungkan waktu letalitas, Anda mungkin menyajikan makanan yang kurang dipasteurisasi.',
    },
    {
      type: 'title',
      text: 'Waktu Sous Vide Dunia Nyata: Apa yang Sebenarnya Dibutuhkan Koki Rumahan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tabel berikut mencerminkan apa yang sebenarnya dicari oleh koki rumahan: potongan daging spesifik, pada suhu umum, dengan total waktu yang mencakup jeda pemanasan dan waktu penahanan letalitas patogen. Nilai-nilai ini mengasumsikan ketebalan 25mm, mulai dari suhu lemari es (5°C), menargetkan reduksi 6,5-log Salmonella.',
    },
    {
      type: 'table',
      headers: ['Makanan', 'Suhu Bath', 'Pemanasan Inti', 'Penahanan Letalitas', 'Total Waktu', 'Hasil'],
      rows: [
        ['Dada Ayam', '60°C / 140°F', '~35 mnt', '~28 mnt', '~63 mnt', 'Juicy, terpasteurisasi penuh'],
        ['Dada Ayam', '65°C / 149°F', '~35 mnt', '~3 mnt', '~38 mnt', 'Lebih padat, tekstur tradisional'],
        ['Fillet Salmon', '50°C / 122°F', '~20 mnt', '~55 mnt', '~75 mnt', 'Lembut seperti mentega, transparan, aman'],
        ['Steak Sapi', '55°C / 131°F', '~40 mnt', '~89 mnt', '~129 mnt', 'Medium-rare, permukaan terpasteurisasi'],
        ['Tenderloin Babi', '60°C / 140°F', '~35 mnt', '~28 mnt', '~63 mnt', 'Empuk dengan sedikit warna pink'],
        ['Dada Bebek', '57°C / 135°F', '~35 mnt', '~52 mnt', '~87 mnt', 'Kaya rasa, medium, aman pangan'],
        ['Dada Kalkun', '63°C / 145°F', '~40 mnt', '~9 mnt', '~49 mnt', 'Lembap, tidak pernah kering'],
        ['Bakso (bola)', '60°C / 140°F', '~25 mnt', '~28 mnt', '~53 mnt', 'Matang merata'],
      ],
    },
    {
      type: 'title',
      text: 'Matematika Logaritmik Kematian Bakteri: D-Value dan z-Value Dijelaskan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bakteri tidak mati sekaligus seperti membalik sakelar. Kematian termal mengikuti kinetika orde pertama: fraksi konstan dari populasi terbunuh per unit waktu pada suhu tertentu. <strong>D-value</strong> (waktu reduksi desimal) adalah waktu yang diperlukan pada suhu tertentu untuk membunuh 90% bakteri yang ada  -  reduksi 1-log. Untuk Salmonella pada 60°C, D-value sekitar 4,3 menit. <strong>z-value</strong> (biasanya 5,5°C untuk Salmonella) memberi tahu kita berapa banyak kita perlu menaikkan suhu untuk membuat proses 10 kali lebih cepat. Naikkan suhu bath dari 55°C ke 60,5°C, dan waktu letalitas yang diperlukan turun dengan faktor 10  -  dari 89 menit menjadi sekitar 9 menit. Hubungan eksponensial inilah mengapa memasak pada 65°C secara dramatis lebih cepat dan lebih aman daripada memasak pada 55°C, meskipun makanannya terlihat hampir tidak berbeda.',
    },
    {
      type: 'title',
      text: 'Zona Bahaya: Mengapa 54,4°C (130°F) Adalah Batas Minimum Mutlak',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Bahaya Biologis di Bawah 54,4 C (130 F)',
      html: 'Jangan pernah memasak sous vide di bawah 54,4 C (130 F) selama lebih dari 4 jam. Pada suhu di bawah ambang ini, laju kematian termal bakteri seperti Salmonella dan Clostridium perfringens sebenarnya lebih lambat daripada laju reproduksi alaminya. Populasi bakteri dapat tumbuh selama memasak. Lebih buruk lagi, patogen tertentu seperti Bacillus cereus dan Clostridium botulinum Tipe E dapat menghasilkan toksin tahan panas yang bertahan dari pemasakan. Jika circulator Anda membaca 52 C dan Anda meninggalkan daging selama 8 jam dengan anggapan rendah dan lambat lebih aman, Anda menciptakan bahaya biologis.',
    },
    {
      type: 'title',
      text: 'Bagaimana Bentuk dan Ketebalan Daging Mendominasi Waktu Memasak',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pusat termal makanan Anda  -  titik terakhir yang mencapai suhu target  -  menentukan total waktu memasak. Konduksi panas mengikuti hukum Fourier, dan waktu bagi inti untuk mencapai dalam 1°C dari suhu bath berskala dengan <strong>kuadrat ketebalan</strong>. Gandakan ketebalan dada ayam dari 25mm menjadi 50mm, dan waktu pemanasan menjadi empat kali lipat dari 35 menit menjadi sekitar 140 menit. Bentuk sangat penting: <strong>lempengan datar</strong> (steak, fillet) dipanaskan dari dua permukaan berlawanan dan merupakan geometri paling lambat. <strong>Silinder</strong> (tenderloin, roulade) menerima panas secara radial dari semua sisi dan memanas sekitar 1,4 kali lebih cepat daripada lempengan dengan ketebalan yang sama. <strong>Bola</strong> (bakso) memanas dari semua arah dan merupakan geometri tercepat, sekitar 1,7 kali lebih cepat daripada lempengan. Inilah mengapa item bulat seperti bakso atau arancini mencapai suhu inti aman dengan sangat cepat.',
    },
    {
      type: 'title',
      text: 'Salmonella vs. Listeria: Memilih Patogen Target Anda',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Salmonella (Standar)',
          icon: 'mdi:bacteria-outline',
          description: 'Kontaminan unggas paling umum, cukup sensitif terhadap panas, banyak digunakan sebagai patogen referensi dalam standar USDA FSIS.',
          points: [
            'z-value 5,5 C: cukup sensitif terhadap panas',
            'Target: reduksi 6,5-log untuk unggas, 5-log untuk sapi',
            'D60 = 4,3 menit: mati relatif cepat pada 60 C',
            'Aman untuk dewasa sehat dengan waktu pasteurisasi standar',
            'Pengganti untuk serovar Salmonella enterica di semua jenis daging',
          ],
        },
        {
          title: 'Listeria monocytogenes',
          icon: 'mdi:shield-alert-outline',
          description: 'Ketahanan panas lebih tinggi daripada Salmonella. Kritis untuk populasi rentan termasuk wanita hamil dan individu dengan sistem kekebalan tubuh lemah.',
          highlight: true,
          points: [
            'Ketahanan panas lebih tinggi daripada Salmonella',
            'z-value 6,0 C: memerlukan peningkatan suhu lebih besar untuk mempercepat pembunuhan',
            'Target: reduksi 6-log direkomendasikan',
            'D60 = 7,7 menit: memakan waktu hampir dua kali lipat dari Salmonella',
            'Kritis untuk wanita hamil, lansia, dan individu dengan sistem kekebalan lemah',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Keamanan Pangan untuk Populasi Rentan: Ketika Pasteurisasi Standar Tidak Cukup',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wanita hamil, dewasa di atas 65 tahun, pasien kemoterapi, penerima transplantasi, dan orang dengan HIV atau kondisi autoimun menghadapi risiko yang jauh lebih tinggi dari penyakit bawaan makanan. Listeria monocytogenes khususnya dapat melintasi barier plasenta dan menyebabkan keguguran, lahir mati, atau meningitis neonatal  -  bahkan ketika ibu tidak menunjukkan gejala. Untuk populasi ini, reduksi standar 6,5-log Salmonella tidak mencukupi. Pilih Listeria sebagai patogen target dan perpanjang waktu memasak sesuai. Pada 60°C, waktu letalitas tambahan untuk Listeria versus Salmonella menambah sekitar 16 menit ekstra untuk dada ayam 25mm  -  investasi waktu kecil untuk margin keamanan yang substansial.',
    },
    {
      type: 'title',
      text: 'Mengapa Suhu Awal Dingin Penting: Selalu Ukur dari Suhu Lemari Es',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kalkulator ini mengasumsikan suhu awal 5°C  -  suhu lemari es standar. Jika Anda mengambil daging langsung dari freezer pada -18°C, inti akan memakan waktu jauh lebih lama untuk mencapai suhu target. Panas laten dari es yang mencair di dalam jaringan otot beku menciptakan plateau pada 0°C yang dapat menambah 30-50% waktu pemanasan. Selalu cairkan item beku sepenuhnya di lemari es sebelum memasak sous vide dan verifikasi suhu awal inti. Demikian pula, jika Anda meninggalkan daging di meja untuk menyesuaikan suhu selama 30 menit sebelum memasukkan ke kantong, pengurangan waktu pemanasan tidak ditangkap oleh model ini dan Anda mungkin melebihi pasteurisasi  -  yang aman tetapi dapat memengaruhi tekstur.',
    },
    {
      type: 'title',
      text: 'Pasteurisasi Tidak Berarti Sterilisasi: Apa yang Bertahan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pasteurisasi mengurangi patogen ke tingkat yang dianggap aman oleh standar kesehatan masyarakat  -  biasanya reduksi 5-log hingga 7-log. Ini tidak menghasilkan produk steril. Spora bakteri tertentu, termasuk <em>Clostridium botulinum</em> dan <em>Clostridium perfringens</em>, dapat bertahan dari suhu pasteurisasi dan berkecambah jika makanan disimpan dengan tidak benar. Setelah memasak sous vide, makanan harus segera disajikan, ditahan di atas 54,4°C untuk penyajian, atau didinginkan cepat dalam ice bath hingga di bawah 4°C dalam waktu 2 jam. Kantong vakum-seal menciptakan lingkungan anaerobik yang ideal bagi Clostridium botulinum; jangan pernah meninggalkan kantong sous vide yang sudah dimasak pada suhu ruangan. Untuk penyimpanan lemari es lebih dari 5 hari, pembekuan direkomendasikan.',
    },
    {
      type: 'title',
      text: 'Kepatuhan USDA FSIS: Memenuhi Standar Regulasi di Rumah',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'USDA Food Safety and Inspection Service (FSIS) Appendix A menyediakan kerangka regulasi definitif untuk standar kinerja letalitas dalam produk daging dan unggas. Tabel-tabel ini menentukan kombinasi waktu-suhu yang diperlukan untuk reduksi log spesifik pada Salmonella. Meskipun dirancang untuk pemroses komersial, koki rumahan dapat menggunakan ilmu yang sama. Misalnya, FSIS Appendix A menetapkan bahwa unggas siap santap harus mencapai reduksi 6,5-log Salmonella. Pada 60°C, waktu penahanan yang diperlukan setelah seluruh produk mencapai suhu adalah 28,1 menit. Kalkulator ini menerapkan model matematika FSIS menggunakan kinetika Arrhenius orde pertama dengan D-value dan z-value yang berasal dari studi inaktivasi termal yang ditinjau sejawat, diadaptasi untuk penggunaan immersion circulator sous vide rumahan.',
    },
    {
      type: 'title',
      text: 'Ikan dan Makanan Laut: Aturan Berbeda untuk Protein Berbeda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Daging ikan memiliki sifat termal yang berbeda dari daging mamalia atau unggas. Ikan memanas lebih cepat karena kepadatan lebih rendah dan potongan khas yang lebih tipis, tetapi patogen yang menjadi perhatian berbeda. Untuk ikan mentah atau setengah matang, spesies <em>Vibrio</em> dan parasit <em>Anisakis</em> adalah perhatian utama daripada Salmonella. FDA merekomendasikan membekukan ikan pada -20°C selama 7 hari sebelum konsumsi mentah untuk membunuh parasit, kemudian mempasteurisasi sous vide terhadap Listeria pada pemasakan akhir. Salmon yang dimasak pada 50°C memerlukan sekitar 55 menit waktu penahanan untuk reduksi 6-log Listeria, menghasilkan tekstur unik yang tidak mungkin dicapai dengan metode memasak lainnya. Tuna dan ikan scombroid lainnya memerlukan perhatian tambahan: histamin yang diproduksi oleh aksi bakteri sebelum pemasakan bersifat tahan panas dan tidak dihancurkan oleh pasteurisasi; selalu dapatkan ikan kualitas sushi dari pemasok terpercaya dan simpan di bawah 4°C sebelum dimasak.',
    },
    {
      type: 'title',
      text: 'Pertukaran Tekstur-Keamanan: Mengapa Suhu Lebih Tinggi Lebih Cepat tetapi Berbeda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Setiap koki sous vide menghadapi keputusan yang sama: masak lebih rendah dan lebih lama untuk tekstur lebih baik, atau masak lebih tinggi dan lebih cepat untuk kenyamanan dan margin keamanan. Dada ayam yang dimasak pada 60°C menghasilkan daging yang begitu juicy sehingga menantang ekspektasi tentang seperti apa unggas seharusnya, tetapi memerlukan penahanan letalitas 28 menit setelah ekuilibrasi inti untuk total waktu masak lebih dari satu jam. Pada 65°C, dada yang sama terpasteurisasi hanya dalam 3 menit waktu penahanan dengan total 38 menit, tetapi serat otot berkontraksi lebih banyak, mengeluarkan sebagian kelembapan. Tidak ada pendekatan yang salah; kalkulator hanya memberi Anda angka untuk membuat pilihan yang terinformasi. Untuk pesta makan malam di mana waktu fleksibel, pilih suhu rendah. Untuk makan malam hari kerja, pilih suhu lebih tinggi. Makanan akan selalu aman jika waktu yang dihitung dihormati.',
    },
    {
      type: 'title',
      text: 'Kalibrasi Peralatan: Circulator Anda Mungkin Berbohong kepada Anda',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>Verifikasi suhu immersion circulator Anda dengan termometer digital terkalibrasi.</strong> Circulator konsumen dapat melenceng 1-2°C seiring waktu, yang pada batas pasteurisasi (55-58°C) dapat berarti perbedaan antara pemasakan aman 89 menit dan under-pasteurisasi yang berbahaya. Uji circulator Anda terhadap termometer referensi dalam wadah terisolasi baik sebulan sekali. Kesalahan 1°C pada 55°C mengubah waktu letalitas sekitar 30 menit untuk Salmonella.',
    },
    {
      type: 'title',
      text: 'Memasak Beberapa Item: Bagaimana Jumlah Kantong Memengaruhi Perpindahan Panas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kesalahan umum adalah memuat water bath sous vide dengan banyak kantong dan mengasumsikan waktu yang dihitung untuk satu item masih berlaku. Air harus bersirkulasi bebas di antara kantong untuk perpindahan panas yang efektif. Water bath yang dipadatkan rapat menciptakan zona dingin stagnan di mana kantong saling mengisolasi dari air yang dipanaskan. Sebagai aturan praktis, sisakan setidaknya 2cm ruang air di antara kantong, dan jika memasak lebih dari 4 item, tingkatkan waktu yang dihitung sebesar 15-20% untuk mengkompensasi. Lebih baik lagi, gunakan wadah yang cukup besar sehingga air dapat bersirkulasi bebas di sekitar setiap kantong. Untuk item bulat seperti bakso, keunggulan geometri berkurang secara signifikan jika mereka bersentuhan atau bertumpuk, karena titik kontak menghalangi perpindahan panas radial.',
    },
    {
      type: 'title',
      text: 'Referensi Cepat: Suhu dan Waktu Aman Minimum per Jenis Makanan',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Jenis Makanan', 'Suhu Inti Min', 'Waktu Pasteurisasi pada Suhu Min', 'Lebih Cepat pada', 'Direkomendasikan untuk'],
      rows: [
        ['Ayam & Unggas', '60°C / 140°F', '~28 mnt (6,5-log Salmonella)', '65°C: ~3 mnt penahanan', 'Semua konsumen'],
        ['Babi (potongan utuh)', '60°C / 140°F', '~28 mnt (6,5-log Salmonella)', '65°C: ~3 mnt penahanan', 'Semua konsumen'],
        ['Sapi (steak, roast)', '55°C / 131°F', '~89 mnt (6,5-log Salmonella)', '60°C: ~28 mnt penahanan', 'Dewasa sehat (pasteurisasi permukaan)'],
        ['Daging Sapi Giling', '60°C / 140°F', '~28 mnt (6,5-log Salmonella)', '65°C: langsung', 'Semua konsumen (bakteri tercampur merata)'],
        ['Ikan & Makanan Laut', '50°C / 122°F', '~55 mnt (Listeria)', '55°C: ~22 mnt penahanan', 'Dibekukan terlebih dahulu untuk kontrol parasit'],
        ['Telur (dalam cangkang)', '57°C / 135°F', '~75 mnt (Salmonella)', '60°C: ~28 mnt penahanan', 'Telur cangkang terpasteurisasi'],
        ['Sayuran', '85°C / 185°F', 'Tidak berlaku (inaktivasi enzim)', 'N/A', 'Pemecahan pektin, tidak ada kekhawatiran patogen'],
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
