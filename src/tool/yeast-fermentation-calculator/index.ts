import type { ToolDefinition } from '../../types';
import { yeastFermentationCalculator } from './entry';

export * from './entry';

export const YEAST_FERMENTATION_CALCULATOR_TOOL: ToolDefinition = {
  entry: yeastFermentationCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
