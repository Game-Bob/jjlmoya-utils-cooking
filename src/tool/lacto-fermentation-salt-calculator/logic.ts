export interface FermentationInput {
  vegWeight: number;
  waterWeight: number;
  salinity: number;
  mode: 'dry' | 'wet';
}

export interface FermentationResult {
  saltGrams: number;
  status: 'danger' | 'optimal' | 'inhibited';
  fineTeaspoons: number;
  kosherTeaspoons: number;
}

export class FermentationLogic {
  static calculate(input: FermentationInput): FermentationResult {
    const totalWeight = input.mode === 'dry' ? input.vegWeight : (input.vegWeight + input.waterWeight);
    const saltGrams = Math.max(0, parseFloat(((totalWeight * input.salinity) / 100).toFixed(2)));
    
    let status: 'danger' | 'optimal' | 'inhibited' = 'optimal';
    if (input.salinity < 2.0) {
      status = 'danger';
    } else if (input.salinity > 3.5) {
      status = 'inhibited';
    }

    const fineTeaspoons = Math.max(0, parseFloat((saltGrams / 5.7).toFixed(1)));
    const kosherTeaspoons = Math.max(0, parseFloat((saltGrams / 4.3).toFixed(1)));

    return {
      saltGrams,
      status,
      fineTeaspoons,
      kosherTeaspoons,
    };
  }
}
