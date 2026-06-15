import { kojiInoculationCalculator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const KOJI_INOCULATION_CALCULATOR_TOOL: ToolDefinition = {
  entry: kojiInoculationCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
