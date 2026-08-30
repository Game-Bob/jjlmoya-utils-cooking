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
    name: 'Voer het volume vloeistof in',
    text: 'Specificeer hoeveel ml vloeistof u wilt binden. De calculator geeft u de exacte hoeveelheden boter en bloem.',
  },
  {
    name: 'Pas de juiste kooktijd toe',
    text: 'Kook het boter-bloemmengsel tot het gespecificeerde niveau (Wit, Blond of Donker).',
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
    {
      type: 'title',
      text: 'Niveaus van Roosteren en Bindkracht',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Witte Roux',
          icon: 'mdi:flask-round-bottom-outline',
          description: 'Gekookt gedurende 2-3 minuten. De krachtigste binder.',
          points: [
            'Basis voor Béchamel',
            'Maximale bindkracht',
            'Neutrale melksmaak',
            'Geen zichtbare kleurverandering',
          ],
        },
        {
          title: 'Blonde Roux',
          icon: 'mdi:gold',
          description: 'Gekookt gedurende 5-8 minuten tot een lichtgouden tint.',
          highlight: true,
          points: [
            'Basis voor Velouté',
            'Middelgrote bindkracht',
            'Licht nootachtig aroma',
            'Ideaal voor lichte fonds',
          ],
        },
        {
          title: 'Donkere Roux',
          icon: 'mdi:coffee',
          description: 'Gekookt gedurende 15-20 minuten. Diep geroosterd smaakprofiel.',
          points: [
            'Basis voor Espagnolesaus',
            'Minder bindkracht (-30%)',
            'Complex geroosterde noot smaak',
            'Vloeibaardere textuur',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Roux Gewicht per Liter per Gewenste Textuur',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Gewenste Textuur', 'Boter (g)', 'Bloem (g)', 'Vloeistof (L)'],
      rows: [
        ['Lichte Soep / Creme', '25g', '25g', '1 Liter'],
        ['Standaard Saus', '50g', '50g', '1 Liter'],
        ['Gebonden Saus', '70g', '70g', '1 Liter'],
        ['Kroketten Deeg', '125g', '125g', '1 Liter'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Klonterige Saus of Bloemsmaak?',
      html: 'Als uw saus klontert, heeft u hete vloeistof aan een hete roux toegevoegd. Pas altijd thermische shock toe (koude vloeistof op hete roux). Als het naar bloem smaakt, verleng dan de initiële kooktijd.',
    },
    {
      type: 'title',
      text: 'Glossarium van Saustechnologie',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Dextrinisatie',
          definition:
            'De thermische afbraak van zetmeel in korte ketens. Verhoogt smaak maar vermindert binding.',
        },
        {
          term: 'Verstijfseling',
          definition:
            'Het proces waarbij zetmeelkorrels vloeistof absorberen en uitzetten.',
        },
        {
          term: 'Beurre Manié',
          definition:
            'Koud mengsel van bloem en boter gebruikt voor snelle correcties aan het einde.',
        },
        {
          term: 'Moedersauzen',
          definition:
            'Escoffiers 5 basissauzen (Béchamel, Velouté, Espagnole, Hollandaise en Tomaten).',
        },
      ],
    },
    {
      type: 'tip',
      title: 'De Koude Boter Truc (Monter au Beurre)',
      html: 'Roer er op het einde een klontje koude boter door voor een professionele glans.',
    },
    {
      type: 'paragraph',
      html: 'Onze roux calculator garandeert een perfecte technische textuur.',
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
