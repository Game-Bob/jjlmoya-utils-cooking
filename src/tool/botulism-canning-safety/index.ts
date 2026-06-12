import type { ToolDefinition } from '../../types';
import { botulismCanningSafety } from './entry';

export * from './entry';

export const BOTULISM_CANNING_SAFETY_TOOL: ToolDefinition = {
  entry: botulismCanningSafety,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
