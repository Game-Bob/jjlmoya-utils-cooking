import type { ToolDefinition } from './types';
import { AMERICAN_KITCHEN_CONVERTER_TOOL } from './tool/american-kitchen-converter';
import { MERENGUE_CALCULATOR_TOOL } from './tool/meringue-peak';
import { BANANA_CARE_TOOL } from './tool/banana-ripeness';
import { EGG_TIMER_TOOL } from './tool/egg-timer';
import { KITCHEN_TIMER_TOOL } from './tool/kitchen-timer';
import { PIZZA_TOOL } from './tool/pizza';
import { BRINE_TOOL } from './tool/brine';
import { MOLD_SCALER_TOOL } from './tool/mold-scaler';

export const ALL_TOOLS: ToolDefinition[] = [
  AMERICAN_KITCHEN_CONVERTER_TOOL,
  MERENGUE_CALCULATOR_TOOL,
  BANANA_CARE_TOOL,
  EGG_TIMER_TOOL,
  KITCHEN_TIMER_TOOL,
  PIZZA_TOOL,
  BRINE_TOOL,
  MOLD_SCALER_TOOL,
];

