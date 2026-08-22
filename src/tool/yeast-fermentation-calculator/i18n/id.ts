import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FermentationUI } from '../ui';

const title = "Kalkulator Waktu Fermentasi Ragi untuk Roti, Sourdough, dan Bir";
const description = "Estimasi waktu pembuktian roti, fermentasi sourdough, dan fermentasi bir dari suhu, jumlah ragi, ukuran kumpulan, dan target. Unit metrik dan imperial.";

const faq = [
  {
    "question": "Apa yang diestimasi oleh kalkulator ini?",
    "answer": "Estimasi jendela perencanaan untuk adonan roti, sourdough, atau bir."
  },
  {
    "question": "Mengapa suhu sangat memengaruhi hasil?",
    "answer": "Suhu secara langsung mengubah tingkat metabolisme ragi."
  },
  {
    "question": "Apa yang harus dimasukkan untuk sourdough?",
    "answer": "Berat tepung sebagai ukuran batch dan berat starter sebagai jumlah kultur."
  },
  {
    "question": "Apa yang harus dimasukkan untuk bir?",
    "answer": "Volume wort dalam liter dan ragi kering dalam gram."
  },
  {
    "question": "Apakah fermentasi harus dihentikan saat jendela berakhir?",
    "answer": "Tidak, periksa adonan secara visual atau ukur gravitasi wort."
  },
  {
    "question": "Dapatkah saya menggunakan unit imperial?",
    "answer": "Ya, melalui tombol sakelar sistem pengukuran."
  }
];

const howTo = [
  {
    "name": "Pilih mode",
    "text": "Pilih roti, sourdough, atau bir."
  },
  {
    "name": "Atur kultur dan suhu",
    "text": "Pilih jenis ragi dan suhu kerja."
  },
  {
    "name": "Masukkan batch dan ragi",
    "text": "Isi tepung/wort dan jumlah ragi."
  },
  {
    "name": "Tentukan target",
    "text": "Pilih kenaikan adonan atau atenuasi."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
};

const ui: FermentationUI = {
  "modeBread": "Roti",
  "modeSourdough": "Sourdough",
  "modeBeer": "Bir",
  "modeBreadHint": "ragi komersial",
  "modeSourdoughHint": "kultur liar",
  "modeBeerHint": "ale atau lager",
  "temperature": "Suhu fermentasi",
  "temperatureHelp": "Gunakan suhu adonan atau wort.",
  "systemLabel": "Sistem pengukuran",
  "metricSystem": "Metrik",
  "imperialSystem": "Imperial",
  "useImperial": "Gunakan imperial",
  "useMetric": "Gunakan metrik",
  "imperialTemperatureUnit": "°F",
  "metricTemperatureUnit": "°C",
  "imperialMassUnit": "oz",
  "metricMassUnit": "g",
  "imperialFlourUnit": "oz",
  "metricFlourUnit": "g",
  "imperialWortUnit": "gal",
  "metricWortUnit": "L",
  "batchSize": "Ukuran batch",
  "batchSizeHelp": "Berat tepung untuk roti atau volume wort untuk bir.",
  "flour": "Berat tepung",
  "wort": "Volume wort",
  "yeastAmount": "Jumlah kultur",
  "yeastAmountHelp": "Timbang ragi atau starter.",
  "yeastType": "Jenis kultur",
  "instant": "Kering instan",
  "active": "Kering aktif",
  "fresh": "Ragi basah",
  "starter": "Starter sourdough",
  "ale": "Ragi ale",
  "lager": "Ragi lager",
  "targetRise": "Target kenaikan",
  "targetAttenuation": "Target atenuasi",
  "targetHelp": "Ini adalah garis target, bukan jaminan otomatis.",
  "riseUnit": "x volume",
  "attenuationUnit": "%",
  "presetRoom": "Ruangan",
  "presetWarm": "Hangat",
  "presetCool": "Sejuk",
  "presetOvernight": "Semalaman",
  "calculate": "Perbarui estimasi",
  "reset": "Reset ke roti",
  "estimatedWindow": "Jendela fermentasi terestimasi",
  "rate": "Tingkat kerja",
  "pitchDensity": "Kepadatan pitching",
  "status": "Pembacaan",
  "steady": "kondisi stabil",
  "watch": "amati kultur",
  "caution": "di luar zona optimal",
  "invalid": "masukkan nilai valid",
  "steadyText": "Input mendekati profil referensi. Amati adonan atau wort.",
  "watchText": "Estimasi berguna sebagai panduan, tetapi suhu membuat jendela bervariasi.",
  "cautionText": "Kombinasi jauh dari profil dasar. Gunakan sebagai sinyal kasar.",
  "invalidText": "Masukkan nilai positif.",
  "assumptions": "Buka asumsi model",
  "assumptionsText": "Model menggunakan faktor suhu Q10 dan penyesuaian dosis sublinear.",
  "targetMarker": "target",
  "riseScene": "volume adonan",
  "attenuationScene": "gula terkonversi",
  "hours": "jam",
  "days": "hari",
  "perLiter": "g/L",
  "perGallon": "oz/gal",
  "perFlour": "dari tepung",
  "enterValid": "Masukkan nilai.",
  "faqTitle": "Pertanyaan yang Sering Diajukan",
  "bibliographyTitle": "Bibliografi dan Referensi"
};

export const content: ToolLocaleContent<FermentationUI> = {
  slug: "kalkulator-waktu-fermentasi-ragi",
  title,
  description,
  ui,
  faqTitle: ui.faqTitle,
  faq,
  bibliographyTitle: ui.bibliographyTitle,
  bibliography,
  howTo,
  seo: [
    { type: 'title', text: "Cara kerja estimasi fermentasi", level: 2 },
    { type: 'paragraph', html: "Mencari kalkulator waktu fermentasi ragi, estimasi waktu sourdough, atau panduan fermentasi bir? Alat ini menyediakan jendela waktu praktis berdasarkan suhu, ragi, ukuran batch, dan target." },
    { type: 'stats', columns: 3, items: [{ value: '3', label: "mode fermentasi", icon: 'mdi:flask-outline' }, { value: 'Q10', label: "faktor suhu", icon: 'mdi:thermometer' }, { value: 'range', label: "format hasil", icon: 'mdi:arrow-expand-horizontal' }] },
    { type: 'title', text: "Faktor yang memengaruhi jendela waktu", level: 3 },
    { type: 'table', headers: ["Variabel","Roti dan sourdough","Bir"], rows: [["Ukuran batch","Tepung dalam gram","Wort dalam liter"],["Jumlah kultur","Ragi atau starter dalam gram","Ragi kering dalam gram"],["Target akhir","Pengali volume adonan","Target atenuasi"],["Verifikasi","Volume dan elastisitas","Pengukuran gravitasi stabil"]] },
    { type: 'title', text: "Mengapa hasilnya berupa rentang waktu", level: 3 },
    { type: 'paragraph', html: "Adonan dengan resep sama dapat berfermentasi pada kecepatan berbeda karena fluktuasi suhu dan vitalitas ragi. Rentang menunjukkan ketidakpastian ini." },
    { type: 'tip', title: "Gunakan target sebagai petunjuk visual", html: "Untuk roti, amati kenaikan volume dan kelembutan adonan. Untuk bir, konfirmasikan gravitasi stabil dengan hidrometer." },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
