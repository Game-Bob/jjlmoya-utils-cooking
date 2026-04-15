import type { ToolLocaleContent } from "../../../types";

const title = "Wetenschappelijke Eierwekker";
const description = "Thermodynamische rekenhulp voor het perfect koken van eieren op basis van hoogte, temperatuur en grootte.";
const faq = [
  {
    question: "Waarom is de hoogte belangrijk bij het koken van eieren?",
    answer: "Water kookt niet altijd bij 100°C. Op grotere hoogte is de luchtdruk lager, waardoor water bij een lagere temperatuur kookt. Op 2000 meter kookt water bijvoorbeeld rond de 93°C, wat betekent dat het langer duurt om een ei te koken dan op zeeniveau. Op de Mount Everest is het onmogelijk om een hardgekookt ei te maken.",
  },
  {
    question: "Ei uit de koelkast of op kamertemperatuur?",
    answer: "Een ei uit de koelkast (4°C) heeft meer tijd nodig dan een ei op kamertemperatuur (20°C). Het verschil kan 2-3 minuten zijn. Deze calculator past de tijd automatisch aan op basis van de begintemperatuur.",
  },
  {
    question: "Waarom verschijnt er een groene ring rond de eidooier?",
    answer: "Dat is ijzersulfide, het resultaat van te lang koken. Wanneer het ei te lang boven de 80°C blijft, reageert de zwavel in het eiwit met het ijzer in de dooier. Het is niet giftig, maar een teken van overkoken. Gebruik direct een ijsbad om dit te voorkomen.",
  },
  {
    question: "Hoe kan ik een ei gemakkelijk pellen?",
    answer: "Gebruik eieren die 1-2 weken oud zijn (niet kakelvers), begin met kokend water (niet koud opzetten) en dompel ze direct na het koken onder in ijswater. De temperatuurshock laat het ei krimpen en maakt het pellen makkelijker.",
  },
];
const howTo = [
  {
    name: "Selecteer de begintemperatuur",
    text: "Kies of je ei uit de koelkast (4°C) komt of op kamertemperatuur (20°C) is. Dit gaat om de kerntemperatuur van het ei.",
  },
  {
    name: "Kies de grootte van het ei",
    text: "S (klein, 53g), M (medium, 58g), L (groot, 63g), of XL (extra groot, 73g). De grootte bepaalt hoe lang de hitte nodig heeft om de kern te bereiken.",
  },
  {
    name: "Geef de hoogte op",
    text: "Voer handmatig de hoogte in of gebruik je locatie. Voor elke 300 meter stijging daalt het kookpunt van water met ongeveer 1°C.",
  },
  {
    name: "Pas een temperatuurshock toe",
    text: "Wanneer de timer gaat, dompel je het ei direct onder in ijswater. Dit stopt het kookproces en maakt het pellen makkelijker. De shock is cruciaal voor precisie.",
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
  slug: "eieren",
  title: "Wetenschappelijke Eierwekker",
  description: "Thermodynamische rekenhulp voor het perfect koken van eieren op basis van hoogte, temperatuur en grootte.",
  faqTitle: "Veelgestelde Vragen",
  bibliographyTitle: "Wetenschappelijke Referenties",
  ui: {
    parameters: "Parameters",
    initial_temperature: "Begintemperatuur",
    fridge: "Koelkast",
    ambient: "Kamertemp.",
    egg_size: "Eigrootte",
    altitude: "Hoogte",
    use_location: "Gebruik mijn locatie",
    altitude_help: "Water kookt op lagere temperatuur op grotere hoogte, wat de kooktijd beïnvloedt.",
    sea_level: "Zee",
    soft_cooked: "Zachtgekookt",
    soft_description: "Vloeibare dooier, wit en zacht eiwit.",
    mollet: "Mollet (Zachte dooier)",
    mollet_description: "Cremige dooier, stevig eiwit.",
    hard_cooked: "Hardgekookt",
    hard_description: "Volledig gaar, stevige dooier.",
  },
  faq,
  bibliography: [
    {
      name: "The Science of Boiling an Egg - Charles D. H. Williams",
      url: "https://newton.ex.ac.uk/teaching/CDHW/Egg/",
    },
    {
      name: "The Food Lab: The Science of the Best Hard Boiled Eggs - J. Kenji López-Alt",
      url: "https://www.seriouseats.com/the-food-lab-hard-boiled-eggs-recipe",
    },
    {
      name: "The Food Lab: Perfect Soft Boiled Eggs",
      url: "https://www.seriouseats.com/soft-boiled-eggs-recipe",
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Meestergids voor het perfect koken van een ei',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een ei koken is een oefening in <strong>toegepaste thermodynamica</strong>. De precisie van de begintemperatuur, de grootte van het ei en de geografische hoogte bepalen of je een zijdezachte vloeibare dooier krijgt of een overgekookt ei met de ongewenste groene ring.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '62°C',
          label: 'Stollen Eiwit',
          icon: 'mdi:egg-outline',
        },
        {
          value: '68°C',
          label: 'Stollen Dooier',
          icon: 'mdi:egg-fried',
        },
        {
          value: '-1°C',
          label: 'Kookpunt / 300m',
          icon: 'mdi:mountain',
        },
        {
          value: '0s',
          label: 'Foutmarge',
          icon: 'mdi:timer-check-outline',
        },
      ],
    },
    {
      type: 'title',
      text: 'Vergelijking van kookstadia',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Zachtgekookt Ei',
          icon: 'mdi:coffee-outline',
          description: 'Eiwit gedeeltelijk gestold en dooier volledig vloeibaar.',
          points: [
            'Zeer delicate textuur',
            'Ideaal om brood in te dippen',
            'Korte kooktijd (3-4 min)',
            'Moeilijk te pellen',
          ],
        },
        {
          title: 'Mollet Ei / Wasachtig',
          icon: 'mdi:water-percent',
          description: 'Stevig eiwit en cremige dooier, dik maar niet vast.',
          highlight: true,
          points: [
            'De gourmet standaard',
            'Dooier met textuur van honing',
            'Elastische en stevige buitenkant',
            'Perfect voor salades',
          ],
        },
        {
          title: 'Hardgekookt Ei',
          icon: 'mdi:circle-slice-8',
          description: 'Volledig vast maar mals, zonder groene ring.',
          points: [
            'Dooier mat en stevig',
            'Makkelijk mee te nemen en te pellen',
            'Ideaal voor vullingen',
            'Vereist snel afkoelen',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Kookpunt op basis van Hoogte',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Stad / Hoogte', 'Meters (boven zeeniveau)', 'Kookpunt (°C)', 'Extra Tijd'],
      rows: [
        ['Zeeniveau (Amsterdam)', '0m', '100°C', '0s'],
        ['Madrid', '650m', '97.8°C', '+25s'],
        ['Mexico-Stad', '2240m', '92.6°C', '+75s'],
        ['La Paz (Bolivia)', '3640m', '88.1°C', '+140s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Groene ring of moeilijk te pellen?',
      html: 'De groene ring is <strong>ijzersulfide</strong> veroorzaakt door overkoken. Als het ei niet goed pelt, is het te vers; de lage pH zorgt dat het eiwit aan de membraan plakt. Gebruik eieren van 1 week oud en een ijsbad.',
    },
    {
      type: 'title',
      text: 'Glossarium van de Eierwetenschap',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ovotransferrine',
          definition: 'Eiwit dat als eerste stolt (62°C) en de witte basisstructuur geeft.',
        },
        {
          term: 'Ovalbumine',
          definition: 'Belangrijkste proteïne dat meer hitte (80°C) nodig heeft voor volledige stevigheid.',
        },
        {
          term: 'Luchtdruk',
          definition: 'Factor die de temperatuur van kokend water bepaalt.',
        },
        {
          term: 'Temperatuurshock',
          definition: 'Onderdompeling in ijswater om het naggaren direct te stoppen.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'De azijn truc',
      html: 'Voeg een scheut azijn toe aan het water. Als de schaal barst, helpt het zuur om het ontsnappende eiwit direct te stollen, waardoor de barst wordt gedicht.',
    },
    {
      type: 'paragraph',
      html: 'Onze eierwekker gebruikt de Charles Williams-vergelijking om elke seconde aan te passen op basis van je exacte locatie en koelkastruimte.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
