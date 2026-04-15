import type { ToolLocaleContent } from '../../../types';

const title = "Mästarguide för Roux och Grundsåser";
const description = "Interaktiv Roux-kalkylator. Lär dig göra Béchamel, Velouté och Espagnole med exakta proportioner. Grunden i det klassiska franska köket.";
const faq = [
    {
      question: 'Vad är en Roux och vad används den till?',
      answer: 'Det är en blandning av fett (vanligtvis smör) och mjöl som tillagas på låg värme. Den används som basredning för franska grundsåser som Béchamel eller Velouté.',
    },
    {
      question: 'Vilken är den ideala proportionen för en Roux?',
      answer: 'Standardproportionen är 1:1 i vikt. Till exempel 50g smör och 50g mjöl. Denna blandning kan reda ca 1 liter vätska beroende på önskad tjocklek.',
    },
    {
      question: 'Vad är skillnaden mellan olika typer av Roux?',
      answer: 'Vit Roux tillagas 2-3 min (Béchamel). Ljus Roux 5-8 min (Velouté). Mörk Roux (Brown) upp till 15-20 min (Espagnole). Ju mörkare färg, desto mer nötig smak men mindre redningsförmåga.',
    },
    {
      question: 'Hur undviker jag klumpar?',
      answer: 'Gyllene regeln är motsatt temperatur: kall vätska i varm roux, eller varm vätska i kall roux. Tillsätt vätskan lite i taget och vispa konstant.',
    },
  ];
const howTo = [
  {
    name: 'Välj typ av vätska',
    text: 'Välj mellan mjölk (Béchamel), ljus buljong (Velouté), mörk buljong (Espagnole) eller tomat.',
  },
  {
    name: 'Bestäm önskad tjocklek',
    text: 'Från soppa/kräm till deg för kroketter. Kalkylatorn justerar automatiskt behoven av roux.',
  },
  {
    name: 'Ange vätskevolym',
    text: 'Ange hur många ml vätska du vill reda. Kalkylatorn berättar exakt hur mycket smör och mjöl du ska använda.',
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
  slug: 'masterguide-roux-grundsaser',
  title,
  description,
  faqTitle: 'Vanliga Frågor',
  faq,
  bibliographyTitle: 'Bibliografi',
  bibliography: [
    {
      name: 'Larousse Gastronomique',
      url: 'https://www.laroussecocina.com/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Mästarguide för Beräkning av Roux och Grundsåser',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Roux</strong> är den strukturella basen i det klassiska franska köket. Att förstå förhållandet mellan mjöl, smör och vätska är skillnaden mellan en silkeslen sås och en klumpig vätska.',
    },
  ],
  ui: {
    baseLiquid: 'Basvätska',
    volume: 'Volym',
    ml: 'ml',
    liquidType: 'Typ av vätska',
    milk: 'Mjölk',
    lightStock: 'Ljus buljong',
    darkStock: 'Mörk buljong',
    tomato: 'Tomat',
    sauceTexture: 'Sås-tjocklek',
    soup: 'Soppa / Kräm',
    normalSauce: 'Normal sås',
    thick: 'Tjock / Fyllning',
    croquette: 'Krokett / Deg',
    rouxMix: 'Roux-blandning',
    butter: 'Smör',
    flour: 'Mjöl',
    instructions: 'Instruktioner',
    sauceName: 'Typ av sås',
    ratio: 'Förhållande',
    chefTip: 'Kocktips',
    white: 'Vit',
    blond: 'Ljus',
    brown: 'Mörk',
    beurreManied: 'Beurre Manié (För sista justering)',
    recipeBechamel: "Béchamel",
    recipeVeloute: "Velouté",
    recipeEspagnole: "Espagnole",
    recipeTomato: "Tomatsås",
    tipBechamel: "Använd kall mjölk. Tillsätt gradvis eller allt på en gång om du vispar kraftigt.",
    tipVeloute: "Använd kyckling- eller fiskbuljong. Rouxen ska lukta som kaka.",
    tipEspagnole: "Rouxen ska ha färgen av choklad, utan att brännas.",
    tipTomato: "Rouxen hjälper till att ge tomaten fyllighet och mjukhet.",
    rouxWhiteLabel: "Vit Roux",
    rouxBlondLabel: "Ljus Roux",
    rouxBrownLabel: "Mörk Roux",
    descWhite: "Tillaga bara tills doften av rått mjöl försvinner. Ingen färg.",
    descBlond: "Sikta på en guldgul färg och en nötig arom.",
    descBrown: "Mycket svag värme. Chokladfärg. Kräver 10% mer vikt.",
    timeWhite: "2-3 min",
    timeBlond: "5-8 min",
    timeBrown: "15-20 min",
  },
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
