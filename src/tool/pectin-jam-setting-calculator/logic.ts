export interface FruitData {
  name: string;
  pectin: 'high' | 'medium' | 'low';
  acidity: 'high' | 'medium' | 'low';
  moisture: number;
  color: string;
  emoji: string;
}

export const FRUIT_DATABASE: Record<string, FruitData> = {
  apple: { name: 'Apple', pectin: 'high', acidity: 'high', moisture: 0.84, color: '#dc2626', emoji: '' },
  quince: { name: 'Quince', pectin: 'high', acidity: 'medium', moisture: 0.84, color: '#ea580c', emoji: '' },
  blackberry: { name: 'Blackberry', pectin: 'high', acidity: 'low', moisture: 0.88, color: '#7c3aed', emoji: '' },
  cranberry: { name: 'Cranberry', pectin: 'high', acidity: 'high', moisture: 0.87, color: '#be123c', emoji: '' },
  gooseberry: { name: 'Gooseberry', pectin: 'high', acidity: 'high', moisture: 0.88, color: '#65a30d', emoji: '' },
  plum: { name: 'Plum', pectin: 'medium', acidity: 'medium', moisture: 0.85, color: '#7c3aed', emoji: '' },
  apricot: { name: 'Apricot', pectin: 'medium', acidity: 'medium', moisture: 0.86, color: '#d97706', emoji: '' },
  blueberry: { name: 'Blueberry', pectin: 'medium', acidity: 'low', moisture: 0.84, color: '#4f46e5', emoji: '' },
  raspberry: { name: 'Raspberry', pectin: 'medium', acidity: 'high', moisture: 0.87, color: '#e11d48', emoji: '' },
  peach: { name: 'Peach', pectin: 'low', acidity: 'medium', moisture: 0.89, color: '#d97706', emoji: '' },
  strawberry: { name: 'Strawberry', pectin: 'low', acidity: 'low', moisture: 0.92, color: '#e11d48', emoji: '' },
  pear: { name: 'Pear', pectin: 'low', acidity: 'low', moisture: 0.84, color: '#65a30d', emoji: '' },
  fig: { name: 'Fig', pectin: 'low', acidity: 'low', moisture: 0.79, color: '#92400e', emoji: '' },
  cherry: { name: 'Cherry', pectin: 'low', acidity: 'high', moisture: 0.82, color: '#be123c', emoji: '' },
  grape: { name: 'Grape', pectin: 'low', acidity: 'high', moisture: 0.81, color: '#7c3aed', emoji: '' },
  mango: { name: 'Mango', pectin: 'low', acidity: 'medium', moisture: 0.83, color: '#d97706', emoji: '' },
};

export interface JamInput {
  fruitType: string;
  fruitWeight: number;
  pectinType: 'HM' | 'LM';
  sugarWeight?: number;
}

export interface JamResult {
  pectinGrams: number;
  citricAcidGrams: number;
  lemonJuiceMl: number;
  sugarGrams: number;
  totalYield: number;
  sugarPercentage: number;
  status: 'perfect' | 'slightly-thin' | 'too-thin' | 'too-stiff';
  fruitColor: string;
}

export class JamLogic {
  static calculate(input: JamInput): JamResult {
    const fruit = FRUIT_DATABASE[input.fruitType] ?? FRUIT_DATABASE['strawberry']!;
    const fw = Math.max(10, input.fruitWeight);

    const pectinGrams = JamLogic.computePectin(fw, fruit.pectin);
    const citricAcidGrams = JamLogic.computeCitric(fw, fruit.acidity);
    const lemonJuiceMl = parseFloat((citricAcidGrams * 15).toFixed(0));
    const sugarGrams = JamLogic.computeSugar(input, fw);
    const cookedFruit = parseFloat((fw * 0.55).toFixed(0));
    const totalYield = parseFloat((cookedFruit + sugarGrams + pectinGrams + citricAcidGrams).toFixed(0));
    const sugarPercentage = parseFloat(((sugarGrams / totalYield) * 100).toFixed(1));
    const status = JamLogic.computeStatus(input.pectinType, sugarPercentage, fruit.pectin, pectinGrams);

    return {
      pectinGrams, citricAcidGrams, lemonJuiceMl, sugarGrams,
      totalYield, sugarPercentage, status, fruitColor: fruit.color,
    };
  }

  private static computePectin(fw: number, pectin: string): number {
    if (pectin === 'high') return 0;
    if (pectin === 'medium') return parseFloat((fw * 0.003).toFixed(1));
    return parseFloat((fw * 0.006).toFixed(1));
  }

  private static computeCitric(fw: number, acidity: string): number {
    if (acidity === 'high') return 0;
    if (acidity === 'medium') return parseFloat((fw * 0.003).toFixed(1));
    return parseFloat((fw * 0.008).toFixed(1));
  }

  private static computeSugar(input: JamInput, fw: number): number {
    if (input.sugarWeight != null) return input.sugarWeight;
    if (input.pectinType === 'LM') return parseFloat((fw * 0.1).toFixed(0));
    return parseFloat((fw * 1.0).toFixed(0));
  }

  private static computeStatus(
    pectinType: string, sugarPct: number, pectin: string, pectinGrams: number
  ): JamResult['status'] {
    const hasEnoughPectin = pectin !== 'low' || pectinGrams > 0;
    if (pectinType === 'HM') {
      if (sugarPct >= 60 && hasEnoughPectin) return 'perfect';
      return sugarPct >= 50 ? 'slightly-thin' : 'too-thin';
    }
    if (hasEnoughPectin) return 'perfect';
    return pectinGrams > 0 ? 'slightly-thin' : 'too-thin';
  }
}
