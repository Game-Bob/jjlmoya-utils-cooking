import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Meestergids voor Roux en Moedersauzen";
const description = "Interactieve Roux-calculator. Leer Béchamel, Velouté en Espagnole maken met exacte verhoudingen. De basis van de klassieke Franse keuken.";
const faq = [
    {
      question: 'Wat is een Roux en waarvoor dient het?',
      answer: 'Het is een mengsel van vet (meestal boter) en bloem dat op laag vuur wordt gekookt. Het wordt gebruikt als basisbindmiddel voor de Franse moedersauzen zoals Béchamel of Velouté.',
    },
    {
      question: 'Wat is de ideale verhouding voor een Roux?',
      answer: 'De standaardverhouding is 1:1 in gewicht. Bijvoorbeeld 50g boter en 50g bloem. Dit mengsel kan ongeveer 1 liter vloeistof binden, afhankelijk van de gewenste dikte.',
    },
    {
      question: 'Wat is het verschil tussen de soorten Roux?',
      answer: 'Witte Roux wordt 2-3 min gekookt (Béchamel). Blanke Roux 5-8 min (Velouté). Donkere Roux (Brown) tot 15-20 min (Espagnole). Hoe meer kleur, hoe meer nootachtige smaak, maar hoe minder bindkracht.',
    },
    {
      question: 'Hoe voorkom ik klontjes?',
      answer: 'De gulden regel is de tegenovergestelde temperatuur: koude vloeistof bij hete roux, of hete vloeistof bij koude roux. Voeg de vloeistof geleidelijk toe en roer constant met een garde.',
    },
  ];
const howTo = [
  {
    name: 'Selecteer soort vloeistof',
    text: 'Kies tussen melk (Béchamel), lichte bouillon (Velouté), donkere bouillon (Espagnole) of tomaat.',
  },
  {
    name: 'Bepaal de gewenste dikte',
    text: 'Van soep/crème tot deeg voor kroketten. De calculator past automatisch de benodigde roux-verhouding aan.',
  },
  {
    name: 'Voer vloeistofvolume in',
    text: 'Geef aan hoeveel ml vloeistof je wilt binden. De calculator vertelt je precies hoeveel boter en bloem je moet gebruiken.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'roux-gids',
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq,  howTo,
  seo: [
    {
      type: 'title',
      text: 'Meestergids voor Roux en Moedersauzen Berekening',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De <strong>roux</strong> is de structurele basis van de klassieke Franse keuken. Het begrijpen van de verhouding tussen bloem, boter en vloeistof is het verschil tussen een zijdezachte saus en een vloeistof met klontjes.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1:1',
          label: 'Verhouding Bloem:Vet',
          icon: 'mdi:scale-balance',
        },
        {
          value: '3 min',
          label: 'Tijd Witte Roux',
          icon: 'mdi:timer-sand',
        },
        {
          value: '100g/L',
          label: 'Ratio Dikke Sauzen',
          icon: 'mdi:waves',
        },
        {
          value: '15 min',
          label: 'Tijd Donkere Roux',
          icon: 'mdi:fire',
        },
      ],
    },
  ],
  ui: {
    baseLiquid: 'Basisvloeistof',
    volume: 'Volume',
    ml: 'ml',
    liquidType: 'Type Vloeistof',
    milk: 'Melk',
    lightStock: 'Lichte Bouillon',
    darkStock: 'Donkere Bouillon',
    tomato: 'Tomaat',
    sauceTexture: 'Sausdikte',
    soup: 'Soep / Crème',
    normalSauce: 'Normale Saus',
    thick: 'Dik / Vulling',
    croquette: 'Kroket / Deeg',
    rouxMix: 'Roux Mengsel',
    butter: 'Boter',
    flour: 'Bloem',
    instructions: 'Instructies',
    sauceName: 'Type Saus',
    ratio: 'Ratio',
    chefTip: 'Chef Tip',
    white: 'Wit',
    blond: 'Blond',
    brown: 'Donker',
    beurreManied: 'Beurre Manié (Voor bijsturen)',
    recipeBechamel: "Béchamel",
    recipeVeloute: "Velouté",
    recipeEspagnole: "Espagnole",
    recipeTomato: "Tomatensaus",
    tipBechamel: "Gebruik koude melk. Voeg geleidelijk toe of in één keer als je hard roert.",
    tipVeloute: "Gebruik gevogelte- of visbouillon. Laat de roux naar koekjes ruiken.",
    tipEspagnole: "De roux moet de kleur van chocolade hebben, zonder te verbranden.",
    tipTomato: "De roux helpt om de tomaat meer body en zachtheid te geven.",
    rouxWhiteLabel: "Witte Roux",
    rouxBlondLabel: "Blanke Roux",
    rouxBrownLabel: "Donkere Roux",
    descWhite: "Kook alleen tot de geur van rauwe bloem weg is. Geen kleur.",
    descBlond: "Streef naar een goudgele kleur en een nootachtig aroma.",
    descBrown: "Zeer laag vuur. Chocoladekleur. Vereist 10% meer gewicht.",
    timeWhite: "2-3 min",
    timeBlond: "5-8 min",
    timeBrown: "15-20 min",
  },
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
