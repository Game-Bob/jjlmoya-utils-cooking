export interface AcidIngredient {
  type: string;
  weight: number;
}

export interface NeutralizerInput {
  acidIngredients: AcidIngredient[];
  flour: number;
}

export interface NeutralizerResult {
  neutralizedBakingSoda: number;
  requiredBakingPowder: number;
  providedBakingPowderEquivalent: number;
  boosterBakingPowder: number;
  bakingSodaTeaspoons: number;
  boosterBakingPowderTeaspoons: number;
}

export const ACID_RATIOS: Record<string, number> = {
  buttermilk: 1.5 / 120,
  yogurt: 1.5 / 120,
  sour_cream: 1.5 / 120,
  honey: 3 / 340,
  molasses: 3 / 328,
  cocoa: 3 / 80,
  lemon_juice: 1.5 / 15,
  vinegar: 1.5 / 15,
};

export class LeavenerLogic {
  static calculate(input: NeutralizerInput): NeutralizerResult {
    let neutralizedBakingSoda = 0;
    for (const ingredient of input.acidIngredients) {
      const ratio = ACID_RATIOS[ingredient.type] || 0;
      neutralizedBakingSoda += ingredient.weight * ratio;
    }
    
    neutralizedBakingSoda = parseFloat(neutralizedBakingSoda.toFixed(2));
    
    const requiredBakingPowder = parseFloat((input.flour * 0.04).toFixed(2));
    const providedBakingPowderEquivalent = parseFloat((neutralizedBakingSoda * 4).toFixed(2));
    const boosterBakingPowder = parseFloat(Math.max(0, requiredBakingPowder - providedBakingPowderEquivalent).toFixed(2));
    
    const bakingSodaTeaspoons = parseFloat((neutralizedBakingSoda / 6).toFixed(2));
    const boosterBakingPowderTeaspoons = parseFloat((boosterBakingPowder / 4.8).toFixed(2));
    
    return {
      neutralizedBakingSoda,
      requiredBakingPowder,
      providedBakingPowderEquivalent,
      boosterBakingPowder,
      bakingSodaTeaspoons,
      boosterBakingPowderTeaspoons,
    };
  }
}
