import { emulsionStabilityCalculator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const EMULSION_STABILITY_CALCULATOR_TOOL: ToolDefinition = {
  entry: emulsionStabilityCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
