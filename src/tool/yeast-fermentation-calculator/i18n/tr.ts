import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FermentationUI } from '../ui';

const title = "Ekmek, Ekşi Maya ve Bira için Maya Fermentasyon Süresi Hesaplayıcı";
const description = "Sıcaklık, maya miktarı, hamur büyüklüğü ve hedefe göre ekmek kabarma süresi, ekşi maya ve bira fermentasyon süresini tahmin edin. Metrik ve emperyal.";

const faq = [
  {
    "question": "Bu hesaplayıcı neyi tahmin eder?",
    "answer": "Ekmek hamuru, ekşi maya veya bira için planlama zaman penceresini tahmin eder."
  },
  {
    "question": "Sıcaklık sonucu neden bu kadar etkiler?",
    "answer": "Sıcaklık mayanın metabolizma hızını doğrudan değiştirir."
  },
  {
    "question": "Ekşi maya için ne girmeliyim?",
    "answer": "Parti boyutuna un ağırlığını, kültür miktarına ekşi maya ağırlığını girin."
  },
  {
    "question": "Bira için ne girmeliyim?",
    "answer": "Şıra hacmini litre ve kuru mayayı gram olarak girin."
  },
  {
    "question": "Süre bittiğinde fermentasyonu durdurmalı mıyım?",
    "answer": "Hayır, hamuru görsel olarak kontrol edin veya şıra yoğunluğunu ölçün."
  },
  {
    "question": "Emperyal birimleri kullanabilir miyim?",
    "answer": "Evet, üstteki birim değiştirme düğmesiyle."
  }
];

const howTo = [
  {
    "name": "Mod seçin",
    "text": "Ekmek, ekşi maya veya bira seçin."
  },
  {
    "name": "Kültür ve sıcaklığı ayarlayın",
    "text": "Maya türünü ve sıcaklığı girin."
  },
  {
    "name": "Parti ve mayayı girin",
    "text": "Un/şıra ve maya miktarını doldurun."
  },
  {
    "name": "Hedefi belirleyin",
    "text": "Hamur kabarmasını veya fermentasyon derecesini seçin."
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
  "modeBread": "Ekmek",
  "modeSourdough": "Ekşi Maya",
  "modeBeer": "Bira",
  "modeBreadHint": "ticari maya",
  "modeSourdoughHint": "vahşi kültür",
  "modeBeerHint": "ale veya lager",
  "temperature": "Fermentasyon sıcaklığı",
  "temperatureHelp": "Oda sıcaklığını değil, hamur veya şıranın gerçek sıcaklığını kullanın.",
  "systemLabel": "Ölçü sistemi",
  "metricSystem": "Metrik",
  "imperialSystem": "Emperyal",
  "useImperial": "Emperyal kullan",
  "useMetric": "Metrik kullan",
  "imperialTemperatureUnit": "°F",
  "metricTemperatureUnit": "°C",
  "imperialMassUnit": "oz",
  "metricMassUnit": "g",
  "imperialFlourUnit": "oz",
  "metricFlourUnit": "g",
  "imperialWortUnit": "gal",
  "metricWortUnit": "L",
  "batchSize": "Parti boyutu",
  "batchSizeHelp": "Ekmek için un ağırlığı, bira için şıra hacmi.",
  "flour": "Un ağırlığı",
  "wort": "Şıra hacmi",
  "yeastAmount": "Kültür miktarı",
  "yeastAmountHelp": "Maya veya ekşi mayayı tartın. Bira için kuru maya ağırlığı.",
  "yeastType": "Kültür türü",
  "instant": "Instand kuru",
  "active": "Aktif kuru",
  "fresh": "Yaş maya",
  "starter": "Ekşi maya ana kültür",
  "ale": "Ale mayası",
  "lager": "Lager mayası",
  "targetRise": "Hedef kabarma",
  "targetAttenuation": "Hedef fermentasyon derecesi",
  "targetHelp": "Bu bir kontrol hedefidir, otomatik bir garanti değildir.",
  "riseUnit": "x hacim",
  "attenuationUnit": "%",
  "presetRoom": "Oda",
  "presetWarm": "Sıcak",
  "presetCool": "Serin",
  "presetOvernight": "Gece boyu",
  "calculate": "Tahmini güncelle",
  "reset": "Ekmeğe sıfırla",
  "estimatedWindow": "Tahmini fermentasyon penceresi",
  "rate": "Çalışma hızı",
  "pitchDensity": "Maya aşılama yoğunluğu",
  "status": "Okuma",
  "steady": "kararlı koşullar",
  "watch": "kültürü gözlemleyin",
  "caution": "ideal bölge dışında",
  "invalid": "geçerli değerler girin",
  "steadyText": "Girdiler referans profile yakın. Saat yerine hamuru veya şırayı gözlemleyin.",
  "watchText": "Tahmin bir rehberdir, ancak sıcaklık pencereyi değişken kılar.",
  "cautionText": "Bu kombinasyon referanstan uzak. Kaba bir sinyal olarak kullanın.",
  "invalidText": "Pozitif değerler girin.",
  "assumptions": "Model varsayımlarını aç",
  "assumptionsText": "Model Q10 sıcaklık faktörü ve alt doğrusal doz düzeltmesi uygular.",
  "targetMarker": "hedef",
  "riseScene": "hamur hacmi",
  "attenuationScene": "dönüştürülen şeker",
  "hours": "saat",
  "days": "gün",
  "perLiter": "g/L",
  "perGallon": "oz/gal",
  "perFlour": "un oranı",
  "enterValid": "Değer girin.",
  "faqTitle": "Sıkça Sorulan Sorular",
  "bibliographyTitle": "Kaynakça ve Kaynaklar"
};

export const content: ToolLocaleContent<FermentationUI> = {
  slug: "maya-fermentasyon-suresi-hesaplama",
  title,
  description,
  ui,
  faqTitle: ui.faqTitle,
  faq,
  bibliographyTitle: ui.bibliographyTitle,
  bibliography,
  howTo,
  seo: [
    { type: 'title', text: "Fermentasyon tahmini nasıl çalışır?", level: 2 },
    { type: 'paragraph', html: "Maya fermentasyon süresi hesaplayıcı, ekşi maya kabarma tahmini veya bira fermentasyon rehberi mi arıyorsunuz? Bu araç sıcaklık, maya, parti boyutu ve hedefe dayalı pratik bir zaman penceresi sunar." },
    { type: 'stats', columns: 3, items: [{ value: '3', label: "fermentasyon modu", icon: 'mdi:flask-outline' }, { value: 'Q10', label: "sıcaklık faktörü", icon: 'mdi:thermometer' }, { value: 'range', label: "sonuç formatı", icon: 'mdi:arrow-expand-horizontal' }] },
    { type: 'title', text: "Zaman penceresini etkileyen değişkenler", level: 3 },
    { type: 'table', headers: ["Değişken","Ekmek ve ekşi maya","Bira"], rows: [["Parti boyutu","Gram cinsinden un","Litre cinsinden şıra"],["Kültür miktarı","Gram cinsinden maya/ekşi maya","Gram cinsinden kuru maya"],["Nihai hedef","Hamur hacim çarpanı","Hedef fermentasyon derecesi"],["Kontrol","Hacim ve esneklik","Kararlı yoğunluk ölçümü"]] },
    { type: 'title', text: "Sonuç neden bir zaman aralığıdır?", level: 3 },
    { type: 'paragraph', html: "Aynı reçetedeki hamurlar sıcaklık dalgalanmaları ve maya canlılığı nedeniyle farklı hızlarda kabarabilir. Aralık bu belirsizliği yansıtır." },
    { type: 'tip', title: "Hedefi görsel bir ipucu olarak kullanın", html: "Ekmek için hacim ve dokuyu değerlendirin. Bira için hidrometre ile kararlı yoğunluğu doğrulayın." },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
