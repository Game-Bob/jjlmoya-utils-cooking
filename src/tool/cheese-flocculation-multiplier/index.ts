import { cheeseFlocculationMultiplier } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const CHEESE_FLOCCULATION_MULTIPLIER_TOOL: ToolDefinition = {
  entry: cheeseFlocculationMultiplier,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
