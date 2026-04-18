import { meringuePeak } from './entry';
export * from './entry';
export const MERENGUE_CALCULATOR_TOOL: ToolDefinition = {
  entry: meringuePeak,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
