export interface ChocolateConfig {
  name: string;
  melt: number;
  cool: number;
  work: number;
}

export const CHOCOLATE_DATABASE: Record<string, ChocolateConfig> = {
  dark: {
    name: 'Dark Chocolate',
    melt: 50,
    cool: 28,
    work: 32,
  },
  milk: {
    name: 'Milk Chocolate',
    melt: 45,
    cool: 27,
    work: 30,
  },
  white: {
    name: 'White Chocolate',
    melt: 43,
    cool: 26,
    work: 29,
  },
};

export const TEMPERING_STEPS = [
  {
    step: 1,
    name: 'Melt',
    description: 'Heat chocolate to break all existing crystal structures.',
    molecular: 'At this temperature, all crystal forms (I through VI) are completely melted, creating a completely fluid liquid of fat and sugar.',
  },
  {
    step: 2,
    name: 'Cool & Seed',
    description: 'Cool chocolate down and add seed callets to initiate crystallization.',
    molecular: 'Cooling allows crystal form IV and V to seed. Adding stable tempered chocolate seeds (callets) introduces form V crystals directly.',
  },
  {
    step: 3,
    name: 'Work',
    description: 'Reheat slightly to melt away unstable crystals while keeping form V.',
    molecular: 'Slightly raising the temperature melts any unstable Form IV crystals that grew during cooling, leaving pure Form V beta crystals for the perfect snap.',
  },
];
