import type { CookingToolEntry, ToolDefinition } from '../../types';
import AmericanKitchenConverterComponent from './component.astro';
import AmericanKitchenConverterSEO from './seo.astro';
import AmericanKitchenConverterBibliography from './bibliography.astro';

export const americanKitchenConverter: CookingToolEntry = {
  id: 'american-kitchen-converter',
  icons: {
    bg: 'mdi:cup-outline',
    fg: 'mdi:fire',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
  },
};

export const AMERICAN_KITCHEN_CONVERTER_TOOL: ToolDefinition = {
  entry: americanKitchenConverter,
  Component: AmericanKitchenConverterComponent,
  SEOComponent: AmericanKitchenConverterSEO,
  BibliographyComponent: AmericanKitchenConverterBibliography,
};
