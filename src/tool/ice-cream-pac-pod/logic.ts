export interface SugarInputs {
  sucrose: number;
  dextrose: number;
  glucose: number;
  inverted: number;
  trehalose: number;
}

export interface IceCreamInput {
  sugars: SugarInputs;
  baseWeight: number;
  targetTemp: number;
}

export interface IceCreamResult {
  totalPAC: number;
  totalPOD: number;
  solidsPercentage: number;
  scoopability: 'stone' | 'creamy' | 'soup';
  targetPAC: number;
}

export class IceCreamLogic {
  static sumWeight(sugars: SugarInputs): number {
    return sugars.sucrose + sugars.dextrose + sugars.glucose + sugars.inverted + sugars.trehalose;
  }

  static computeContributions(sugars: SugarInputs): { pac: number; pod: number } {
    const pac = sugars.sucrose * 1.0 + sugars.dextrose * 1.9 + sugars.glucose * 0.9 + sugars.inverted * 1.9 + sugars.trehalose * 1.0;
    const pod = sugars.sucrose * 1.0 + sugars.dextrose * 0.7 + sugars.glucose * 0.4 + sugars.inverted * 1.3 + sugars.trehalose * 0.45;
    return { pac, pod };
  }

  static computeScoopability(totalPAC: number, targetPAC: number): 'stone' | 'creamy' | 'soup' {
    const tolerance = 40;
    if (totalPAC < targetPAC - tolerance) return 'stone';
    if (totalPAC > targetPAC + tolerance) return 'soup';
    return 'creamy';
  }

  static calculate(input: IceCreamInput): IceCreamResult {
    const waterWeight = input.baseWeight * 0.7 + input.sugars.inverted * 0.3;
    const otherSolids = input.baseWeight * 0.3;
    const totalSolids = otherSolids + input.sugars.sucrose + input.sugars.dextrose + input.sugars.glucose * 0.95 + input.sugars.inverted * 0.7 + input.sugars.trehalose * 0.9;

    const totalMixWeight = input.baseWeight + IceCreamLogic.sumWeight(input.sugars);
    const contributions = IceCreamLogic.computeContributions(input.sugars);

    const totalPAC = waterWeight > 0 ? parseFloat(((contributions.pac / waterWeight) * 1000).toFixed(1)) : 0;
    const totalPOD = totalMixWeight > 0 ? parseFloat(((contributions.pod / totalMixWeight) * 100).toFixed(1)) : 0;
    const solidsPercentage = totalMixWeight > 0 ? parseFloat(((totalSolids / totalMixWeight) * 100).toFixed(1)) : 0;
    const targetPAC = Math.round(18 * Math.abs(input.targetTemp));

    return {
      totalPAC,
      totalPOD,
      solidsPercentage,
      scoopability: IceCreamLogic.computeScoopability(totalPAC, targetPAC),
      targetPAC,
    };
  }
}
