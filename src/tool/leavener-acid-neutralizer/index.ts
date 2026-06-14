import { leavenerAcidNeutralizer } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';
export const LEAVENER_ACID_NEUTRALIZER_TOOL: ToolDefinition = {
  entry: leavenerAcidNeutralizer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
