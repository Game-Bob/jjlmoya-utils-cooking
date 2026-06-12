export interface SpherificationInput {
  baseWeight: number;
  bathWeight: number;
  method: 'direct' | 'reverse';
  useXanthan: boolean;
  useCitrate: boolean;
}

export interface SpherificationResult {
  baseAgentName: string;
  baseAgentGrams: number;
  bathAgentName: string;
  bathAgentGrams: number;
  xanthanGrams: number;
  citrateGrams: number;
  solubilityWarning: boolean;
}

export class SpherificationLogic {
  static calculate(input: SpherificationInput): SpherificationResult {
    let baseAgentName = '';
    let baseAgentGrams = 0;
    let bathAgentName = '';
    let bathAgentGrams = 0;

    if (input.method === 'direct') {
      baseAgentName = 'Sodium Alginate';
      baseAgentGrams = parseFloat((input.baseWeight * 0.005).toFixed(3));
      bathAgentName = 'Calcium Chloride';
      bathAgentGrams = parseFloat((input.bathWeight * 0.01).toFixed(3));
    } else {
      baseAgentName = 'Calcium Lactate Gluconate';
      baseAgentGrams = parseFloat((input.baseWeight * 0.02).toFixed(3));
      bathAgentName = 'Sodium Alginate';
      bathAgentGrams = parseFloat((input.bathWeight * 0.005).toFixed(3));
    }

    const xanthanGrams = input.useXanthan ? parseFloat((input.baseWeight * 0.002).toFixed(3)) : 0;
    const citrateGrams = input.useCitrate ? parseFloat((input.baseWeight * 0.005).toFixed(3)) : 0;

    const solubilityWarning = (input.method === 'direct' && baseAgentGrams > 5) || 
                               (input.method === 'reverse' && bathAgentGrams > 10);

    return {
      baseAgentName,
      baseAgentGrams,
      bathAgentName,
      bathAgentGrams,
      xanthanGrams,
      citrateGrams,
      solubilityWarning,
    };
  }
}
