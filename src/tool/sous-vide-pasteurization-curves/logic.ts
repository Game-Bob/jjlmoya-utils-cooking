export interface SousVideInput {
  bathTemp: number;
  thickness: number;
  shape: 'slab' | 'cylinder' | 'sphere';
  pathogen: 'salmonella' | 'listeria';
}

export interface SousVideResult {
  heatingMinutes: number;
  lethalityMinutes: number;
  totalMinutes: number;
  isDangerZone: boolean;
}

const SALMONELLA_POINTS: [number, number][] = [
  [54.4, 112],
  [55.0, 89],
  [56.0, 64],
  [57.0, 42],
  [58.0, 25],
  [59.0, 15],
  [60.0, 9],
  [61.0, 5],
  [62.0, 3],
  [63.0, 2],
  [64.0, 1.2],
  [65.0, 0.8],
  [70.0, 0.1]
];

const LISTERIA_POINTS: [number, number][] = [
  [54.4, 200],
  [55.0, 150],
  [56.0, 100],
  [57.0, 68],
  [58.0, 45],
  [59.0, 28],
  [60.0, 18],
  [61.0, 11],
  [62.0, 7],
  [63.0, 4.5],
  [64.0, 3.0],
  [65.0, 2.0],
  [70.0, 0.1]
];

function interpolateExponential(temp: number, points: [number, number][]): number {
  if (temp <= points[0][0]) return points[0][1];
  if (temp >= points[points.length - 1][0]) return points[points.length - 1][1];
  for (let i = 0; i < points.length - 1; i++) {
    const [t1, val1] = points[i];
    const [t2, val2] = points[i + 1];
    if (temp >= t1 && temp <= t2) {
      const log1 = Math.log(val1);
      const log2 = Math.log(val2);
      const ratio = (temp - t1) / (t2 - t1);
      return Math.exp(log1 + ratio * (log2 - log1));
    }
  }
  return points[points.length - 1][1];
}

export class SousVideLogic {
  static calculate(input: SousVideInput): SousVideResult {
    const isDangerZone = input.bathTemp < 54.4;
    
    let shapeFactor = 0.12;
    if (input.shape === 'cylinder') {
      shapeFactor = 0.047;
    } else if (input.shape === 'sphere') {
      shapeFactor = 0.03;
    }
    
    const heatingMinutes = parseFloat((shapeFactor * input.thickness * input.thickness).toFixed(1));
    
    const points = input.pathogen === 'listeria' ? LISTERIA_POINTS : SALMONELLA_POINTS;
    const rawLethality = interpolateExponential(input.bathTemp, points);
    const lethalityMinutes = parseFloat(rawLethality.toFixed(1));
    
    const totalMinutes = parseFloat((heatingMinutes + lethalityMinutes).toFixed(1));
    
    return {
      heatingMinutes,
      lethalityMinutes,
      totalMinutes,
      isDangerZone
    };
  }
}
