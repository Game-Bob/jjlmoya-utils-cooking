export type EmulsifierType = 'yolk' | 'mustard' | 'soy_lecithin' | 'polysorbate';

export interface EmulsifierDetails {
  maxFraction: number;
  baseVolume: number;
}

export const EMULSIFIERS: Record<EmulsifierType, EmulsifierDetails> = {
  yolk: {
    maxFraction: 0.78,
    baseVolume: 15,
  },
  mustard: {
    maxFraction: 0.70,
    baseVolume: 10,
  },
  soy_lecithin: {
    maxFraction: 0.82,
    baseVolume: 5,
  },
  polysorbate: {
    maxFraction: 0.85,
    baseVolume: 2,
  },
};

export interface EmulsionStatus {
  oilFraction: number;
  maxOilLimit: number;
  isBroken: boolean;
  waterNeededToFix: number;
  yolksNeededToFix: number;
}

export class EmulsionEngine {
  static calculateStatus(
    waterPhase: number,
    oil: number,
    emulsifier: EmulsifierType
  ): EmulsionStatus {
    const details = EMULSIFIERS[emulsifier];
    const totalAqueous = waterPhase + details.baseVolume;
    const totalVolume = totalAqueous + oil;

    const oilFraction = totalVolume > 0 ? oil / totalVolume : 0;
    const maxOilLimit = totalAqueous * (details.maxFraction / (1 - details.maxFraction));
    const isBroken = oilFraction >= details.maxFraction;

    let waterNeededToFix = 0;
    let yolksNeededToFix = 0;

    if (isBroken && oil > 0) {
      const requiredAqueous = oil * (1 - details.maxFraction) / details.maxFraction;
      waterNeededToFix = Math.max(0, requiredAqueous - totalAqueous);
      yolksNeededToFix = Math.ceil(waterNeededToFix / 15);
    }

    return {
      oilFraction: Number(oilFraction.toFixed(4)),
      maxOilLimit: Number(maxOilLimit.toFixed(1)),
      isBroken,
      waterNeededToFix: Number(waterNeededToFix.toFixed(1)),
      yolksNeededToFix,
    };
  }
}
