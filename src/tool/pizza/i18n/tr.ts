import type { ToolLocaleContent } from "../../../types";

const title = "Napoli Pizza Hamuru Hesaplayıcı";
const description = "Evde gerçek Napoli pizzası hazırlamak için un, su, tuz ve maya oranlarını tam olarak hesaplayın.";
const faq = [
  {
    question: "Napoli pizzası için ideal hidrasyon nedir?",
    answer: "AVPN protokolüne göre standart hidrasyon %63-67'dir. Yeni başlayanlar için %60-62 daha yönetilebilirdir. Güçlü un (W300+) kullanan ustalar, olağanüstü sonuçlar için %70-75 seviyelerine çıkabilir.",
  },
  {
    question: "Hamur ne kadar süre mayalanmalı?",
    answer: "Enzimleri aktive etmek için buzdolabında (4°C) en az 24 saat. En iyisi 48-72 saattir. 72 saatin ötesinde çok güçlü bir un (W300+) gerekir, aksi takdirde hamur ekşir.",
  },
  {
    question: "Kuru maya ile yapılabilir mi?",
    answer: "Evet. Kuru maya, yaş mayanın 0.4 katına eşittir (1g kuru = 2.5g yaş). Kalite benzerdir ancak yaş maya daha zengin bir tat profili sunar.",
  },
  {
    question: "Ev tipi fırında Napoli pizzası yapabilir miyim?",
    answer: "Evet, ancak bazı uyarlamalarla. Fırını taşla birlikte maksimum derecede (250-280°C) 45-60 dakika ısıtın. Pişirme süresi 60-90 saniye yerine 5-7 dakika sürecektir.",
  },
];
const howTo = [
  {
    name: "Oranları hesaplayın",
    text: "Pizza sayısına ve her bir hamur bezesinin ağırlığına göre her bir malzemenin tam gramajını almak için bu hesaplayıcıyı kullanın.",
  },
  {
    name: "Hamuru yoğurun",
    text: "Unu ılık su (22-25°C), tuz ve maya ile birleştirin. Makinede 8-10 dakika veya elle 15-20 dakika yoğurun.",
  },
  {
    name: "Soğuk fermantasyon",
    text: "Hamur bezelerini hava almayan bir kapta 24-72 saat buzdolabında (4°C) bekletin. Lezzet ve sindirilebilirlik için kritik adım budur.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: "pizza",
  title,
  description,
  faqTitle: "Sıkça Sorulan Sorular",
  bibliographyTitle: "Referanslar",
  ui: {
    parameters: "Parametreler",
    quantity: "Miktarı",
    pizzas: "pizza",
    weight: "Beze ağırlığı",
    small: "Küçük (180g)",
    standard: "Standart (260g)",
    large: "Büyük (350g)",
    hydration: "Hidrasyon",
    classic: "Klasik (55-60%)",
    modern: "Modern (65-70%)",
    high: "Yüksek (75%+)",
    salt: "Tuz",
    fermentation_tip_title: "Mayalama İpucu",
    fermentation_tip:
      "Daha sindirilebilir bir hamur için, her 100g un için <strong>0.3g</strong> yaş maya kullanarak buzdolabında (4°C) 24 saat bekletin.",
    your_recipe: "Tarifiniz",
    fresh_yeast: "Yaş Maya",
    dry_yeast: "Kuru",
    flour: "Un (W260-300)",
    water: "Su",
    salt_label: "Deniz Tuzu",
    yeast: "Maya",
    yeast_note: "20°C'de 8 saat için",
    total_weight: "Toplam Hamur Ağırlığı",
    approx: "yakl.",
    visual_note:
      "Görsel boyut, hamur bezesinin ağırlığına göre açılan pizzanın yaklaşık çapını temsil eder.",
  },
  faq,
  howTo,
  bibliography: [
    {
      name: "Associazione Verace Pizza Napoletana",
      url: "https://www.pizzanapoletana.org/",
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Gerçek Napoli Pizzası Hamuru İçin Usta Rehberi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Napoli pizzası</strong> bir kültürel mirastır. Başarı; zaman, sıcaklık ve hidrasyon arasındaki milimetrik hassasiyete dayanır.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
