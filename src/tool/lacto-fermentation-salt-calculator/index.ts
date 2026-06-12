import type { ToolDefinition } from '../../types';
import { lactoFermentationSalt } from './entry';

export * from './entry';

export const LACTO_FERMENTATION_SALT_TOOL: ToolDefinition = {
  entry: lactoFermentationSalt,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
