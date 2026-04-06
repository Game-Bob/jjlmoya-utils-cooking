import type { CookingToolEntry, ToolDefinition } from '../../types';
import MeringueComponent from './component.astro';
import MeringueComponentSEO from './seo.astro';
import MeringueComponentBibliography from './bibliography.astro';

export const meringuePeak: CookingToolEntry = {
  id: 'meringue-peak',
  icons: {
    bg: 'mdi:egg',
    fg: 'mdi:fire',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const MERENGUE_CALCULATOR_TOOL: ToolDefinition = {
  entry: meringuePeak,
  Component: MeringueComponent,
  SEOComponent: MeringueComponentSEO,
  BibliographyComponent: MeringueComponentBibliography,
};
