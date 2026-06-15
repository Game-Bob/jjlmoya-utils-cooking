import { chocolateTemperingCurveGuide } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const CHOCOLATE_TEMPERING_CURVE_GUIDE_TOOL: ToolDefinition = {
  entry: chocolateTemperingCurveGuide,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
