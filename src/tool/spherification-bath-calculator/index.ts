import type { ToolDefinition } from '../../types';
import { spherificationBath } from './entry';

export * from './entry';

export const SPHERIFICATION_BATH_TOOL: ToolDefinition = {
  entry: spherificationBath,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
