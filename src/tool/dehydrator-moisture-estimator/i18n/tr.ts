import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Dehidratör Nem Tahmin Edici';
const description = 'Dehidratörde gıdalarınızın ne kadar ağırlık kaybedeceğini, buharlaşan su miktarını ve kuruma süresini hesaplayın.';

const faq = [
  {
    question: 'Dehidratör ağırlık kaybı nasıl hesaplanır?',
    answer: 'Ağırlık kaybı, gıdanın kuru maddesini suyundan ayırarak hesaplanır. Kuru madde miktarı sabit kaldığından, nihai ağırlık kuru maddenin 1 eksi hedef nem yüzdesine bölünmesiyle bulunur.'
  }
];

const howTo = [
  {
    name: 'Malzeme seçin veya manuel nem ayarı yapın',
    text: 'Önceden tanımlanmış bir malzeme seçin veya nem seviyesini kendiniz ayarlayın.'
  }
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
  slug: 'dehidrator-nem-tahmin-edici',
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
    title: 'Nem Tahmin Edici',
    subtitle: 'Ağırlık kaybını hesaplayın ve kuruma süresini tahmin edin',
    unitSystemLabel: 'Birim Sistemi',
    metricOption: 'Metrik (g, °C)',
    imperialOption: 'İmparatorluk (oz, °F)',
    ingredientLabel: 'Malzeme Seçimi',
    initialMoistureLabel: 'Başlangıç Nemi (%)',
    targetMoistureLabel: 'Hedef Nem (%)',
    weightLabel: 'Başlangıç Ağırlığı',
    tempLabel: 'Kurutma Sıcaklığı',
    customOption: 'Özel / Manuel',
    beefOption: 'Kurutulmuş Et (Jerky)',
    watermelonOption: 'Kurutulmuş Karpuz',
    appleOption: 'Elma Dilimleri',
    mangoOption: 'Mango Dilimleri',
    mushroomOption: 'Mantar',
    targetWeightLabel: 'Hedef Ağırlık',
    waterEvaporatedLabel: 'Buharlaşan Su',
    estimatedHoursLabel: 'Tahmini Kuruma Süresi',
    shrinkageLabel: 'Ağırlık Azalması'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Gıda Kurutmada Nem Azalması ve Süre Hesaplama',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Dehidratörde kuruttuğunuz gıdaların nihai ağırlığını ve kuruma sürelerini tahmin edin.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
