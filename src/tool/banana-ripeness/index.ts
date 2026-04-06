import type { CookingToolEntry, ToolDefinition } from '../../types';
import BananaComponent from './component.astro';
import BananaComponentSEO from './seo.astro';
import BananaComponentBibliography from './bibliography.astro';

export const bananaCare: CookingToolEntry = {
  id: 'banana-ripeness',
  icons: {
    bg: 'mdi:fruit-watermelon',
    fg: 'mdi:leaf',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const BANANA_CARE_TOOL: ToolDefinition = {
  entry: bananaCare,
  Component: BananaComponent,
  SEOComponent: BananaComponentSEO,
  BibliographyComponent: BananaComponentBibliography,
};
