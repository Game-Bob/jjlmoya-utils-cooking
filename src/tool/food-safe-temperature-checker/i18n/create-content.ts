import type { SEOSection } from '../../../types';
import type { FoodSafetyCheckerLocaleContent, FoodSafetyCheckerUI } from '../entry';
import { bibliography } from '../bibliography';

export interface FoodSafetyLocaleCopy {
  title: string;
  description: string;
  ui: FoodSafetyCheckerUI;
  faqTitle: string;
  faq: FoodSafetyCheckerLocaleContent['faq'];
  howTo: FoodSafetyCheckerLocaleContent['howTo'];
  seoCopy: FoodSafetySeoCopy;
}

export interface FoodSafetySeoCopy {
  uiBadge: string;
  readTitle: string;
  readText: string;
  donenessTitle: string;
  donenessText: string;
  tableHeaders: [string, string, string];
  tableRows: [string, string, string][];
  measureTitle: string;
  measureText: string;
  limitsTitle: string;
  limitsText: string;
  offlineTitle: string;
  offlineText: string;
}

function createSeo(copy: FoodSafetySeoCopy): SEOSection[] {
  return [
    { type: 'title' as const, text: copy.readTitle, level: 2 as const },
    { type: 'paragraph' as const, html: copy.readText },
    { type: 'title' as const, text: copy.donenessTitle, level: 3 as const },
    { type: 'paragraph' as const, html: copy.donenessText },
    { type: 'table' as const, headers: copy.tableHeaders, rows: copy.tableRows },
    { type: 'title' as const, text: copy.measureTitle, level: 3 as const },
    { type: 'paragraph' as const, html: copy.measureText },
    { type: 'diagnostic' as const, variant: 'warning' as const, title: copy.limitsTitle, icon: 'mdi:alert-outline', badge: copy.uiBadge, html: copy.limitsText },
    { type: 'title' as const, text: copy.offlineTitle, level: 3 as const },
    { type: 'paragraph' as const, html: copy.offlineText },
  ];
}

export function createFoodSafetyContent(copy: FoodSafetyLocaleCopy, locale: string): FoodSafetyCheckerLocaleContent {
  const slugs: Record<string, string> = {
    en: 'food-safe-temperature-checker',
    de: 'sichere-lebensmitteltemperatur-pruefen',
    es: 'comprobador-temperatura-segura-alimentos',
    fr: 'verificateur-temperature-aliments',
    id: 'pemeriksa-suhu-aman-makanan',
    it: 'controllo-temperatura-alimenti',
    ja: 'food-safe-temperature-checker',
    ko: 'food-safe-temperature-checker',
    nl: 'veilige-voedseltemperatuur-controleren',
    pl: 'kontrola-bezpiecznej-temperatury-zywnosci',
    pt: 'verificador-temperatura-segura-alimentos',
    ru: 'proverka-bezopasnoj-temperatury-pishchi',
    sv: 'kontroll-saker-mattemperatur',
    tr: 'gida-guvenli-sicaklik-kontrolu',
    zh: 'food-safe-temperature-checker',
  };
  const faqSchema = {
    '@context': 'https://schema.org' as const,
    '@type': 'FAQPage' as const,
    mainEntity: copy.faq.map((item) => ({
      '@type': 'Question' as const,
      name: item.question,
      acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
    })),
  };
  const howToSchema = {
    '@context': 'https://schema.org' as const,
    '@type': 'HowTo' as const,
    name: copy.title,
    description: copy.description,
    step: copy.howTo.map((step) => ({
      '@type': 'HowToStep' as const,
      name: step.name,
      text: step.text,
    })),
  };
  const appSchema = {
    '@context': 'https://schema.org' as const,
    '@type': 'SoftwareApplication' as const,
    name: copy.title,
    description: copy.description,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
    inLanguage: locale,
  };

  return {
    slug: slugs[locale] ?? slugs.en,
    title: copy.title,
    description: copy.description,
    ui: copy.ui,
    seo: createSeo(copy.seoCopy),
    faqTitle: copy.faqTitle,
    faq: copy.faq,
    bibliography,
    howTo: copy.howTo,
    schemas: [faqSchema, howToSchema, appSchema],
  };
}
