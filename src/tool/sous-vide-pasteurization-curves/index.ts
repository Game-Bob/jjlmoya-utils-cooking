import type { ToolDefinition } from '../../types';
import { sousVidePasteurization } from './entry';

export * from './entry';

export const SOUS_VIDE_PASTEURIZATION_TOOL: ToolDefinition = {
  entry: sousVidePasteurization,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
