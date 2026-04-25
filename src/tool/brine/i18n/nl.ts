import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

const title = "Evenwichtspekel Calculator";
const description = "De wetenschap van balans voor sappig vlees en perfecte fermenten. Bereken het exacte zoutgehalte op basis van het totaalgewicht van ingrediënt en water.";
const faq = [
  {
    question: "Wat is de evenwichtspekel-methode?",
    answer: "De evenwichtsmethode berekent het zout op basis van het totaalgewicht (water + ingrediënt), niet alleen het water. Dit garandeert een consistente zoutconcentratie, ongeacht de hoeveelheid ingrediënt die u gebruikt.",
  },
  {
    question: "Hoeveel zout heb ik nodig voor tafelzuren?",
    answer: "Voor gefermenteerde groenten (augurken, zuurkool, kimchi) wordt tussen 2% en 3% zout aanbevolen. Voor vlees tussen 1,5% en 2%. De calculator geeft u de exacte hoeveelheid op basis van het gewicht van uw ingrediënten.",
  },
  {
    question: "Kan ik het vlees invriezen na het pekelen?",
    answer: "Ja, dat is ideaal. De pekel beschermt tegen vriesbrand en het vlees is klaar om te bereiden na het ontdooien. Vermijd echter het invriezen van gefermenteerde groenten, omdat ze dan zompig worden.",
  },
  {
    question: "Waarom suiker toevoegen aan de pekel?",
    answer: "Suiker heeft twee functies: het vergemakkelijkt de Maillard-reactie (bruining) bij vlees en brengt de zoute smaak in balans zonder het product zoet te laten smaken. Het maakt van uw pekel geen dessert.",
  },
];
const howTo = [
  {
    name: "Bepaal uw doel",
    text: "Beslis of u vlees gaat pekelen (1,5-2%), gaat fermenteren (2-3%), sauzen gaat maken (3,5%) of langdurige conserven gaat maken (5%+). Elk type heeft een andere tijdsduur en een ander doel.",
  },
  {
    name: "Weeg ingrediënt en water",
    text: "Weeg het product (vlees, groenten) en het water exact af. Precisie is essentieel: zelfs 5g verschil verandert het resultaat. Gebruik een precisieweegschaal.",
  },
  {
    name: "Bereken met de tool",
    text: "Voer de gewichten in de calculator in en pas het zoutgehalte aan op basis van uw producttype. De tool vertelt u precies hoeveel zout en suiker u nodig heeft.",
  },
  {
    name: "Oplossen en mengen",
    text: "Los het zout volledig op in koud water voordat u het product toevoegt. Zorg er bij vlees voor dat de pekel alles bedekt. Bij fermenten moet het product ondergedompeld zijn.",
  },
  {
    name: "Fermenteren of pekelen",
    text: "Koel afhankelijk van het type: 4-48 uur voor vlees, 1-3 weken voor fermenten. De exacte tijd hangt af van de temperatuur en uw persoonlijke smaak.",
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
  slug: "pekel",
  title: "Evenwichtspekel Calculator",
  description: "De wetenschap van balans voor sappig vlees en perfecte fermenten. Bereken het exacte zoutgehalte op basis van het totaalgewicht van ingrediënt en water.",
  ui: {
    calculator: "Calculator",
    subtitle: "Voer de gewichten in om de perfecte balans te berekenen.",
    productWeight: "Productgewicht (g)",
    waterWeight: "Watergewicht (g)",
    desiredSalinity: "Gewenste Saliniteit",
    meat: "Vlees (1,5%)",
    fermented: "Fermenten (2,0%)",
    sauces: "Sauzen (3,5%)",
    preserves: "Conserven (5,0%)",
    addSugar: "Suiker toevoegen",
    sugarHint: "Brengt de smaak in balans en helpt bij het bruinen (50% van het zout)",
    saltNeeded: "Benodigd Zout",
    sugarOptional: "Suiker (Optioneel)",
    estimatedTime: "Geschatte Tijd",
    product: "Product",
    total: "Totaal",
    unitGrams: "gram",
    timeMeatsLabel: "Tijd (Vlees)",
    timeMeatsDuration: "4 - 48 Uur",
    timeVegetablesLabel: "Tijd (Groenten)",
    timeVegetablesDuration: "1 - 3 Weken",
    timePreservesLabel: "Tijd (Conserven)",
    timePreservesDuration: "1+ Maanden",
  },
  faqTitle: "Veelgestelde Vragen",  faq,
  howTo,  seo: [
    {
      type: 'title',
      text: 'Meestergids voor Evenwichtspekel en Fermentatie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Evenwichtspekel</strong> is de ultieme techniek voor sappige en veilige resultaten. In tegenstelling tot traditionele methoden, berekent deze het zout op basis van het <strong>totaalgewicht</strong> van water en product, wat zorgt voor een constante saliniteit ongeacht het volume van de bak.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1,5 - 2%',
          label: 'Ideale Ratio Vlees',
          icon: 'mdi:food-steak',
        },
        {
          value: '2,5 - 3%',
          label: 'Ratio Fermenten',
          icon: 'mdi:flask-outline',
        },
        {
          value: '18-22°C',
          label: 'Fermentatietemp.',
          icon: 'mdi:thermometer',
        },
        {
          value: '0,5%',
          label: 'Evenwichtssuiker',
          icon: 'mdi:shaker-outline',
        },
      ],
    },
    {
      type: 'title',
      text: 'Verschillen tussen Droog- en Nat Pekelen',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Droog Pekelen (Dry Brining)',
          icon: 'mdi:shaker-outline',
          description: 'Het zout wordt direct op het oppervlak van het product aangebracht zonder extra water te gebruiken.',
          points: [
            'Veel krokantere huid bij gevogelte',
            'Geconcentreerdere smaak van het ingrediënt',
            'Neemt minder ruimte in de koelkast in',
            'Ideaal voor steaks en hele kippen',
          ],
        },
        {
          title: 'Nat Pekelen (Wet Brining)',
          icon: 'mdi:water',
          description: 'Het product wordt ondergedompeld in een oplossing van water en zout berekend op basis van evenwicht.',
          highlight: true,
          points: [
            'Superieure vochtoverdracht',
            'Maakt het mogelijk om aroma\'s (specerijen) toe te voegen',
            'Gelijkmatigere pekeling bij grote stukken',
            'Ideaal voor kalkoen, varkenshaas en vis',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Tijden en Saliniteit per Toepassing',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Categorie', 'Saliniteit (%)', 'Minimumtijd', 'Hoofddoel'],
      rows: [
        ['Gevogelte en Varken', '1,5% - 2,0%', '12 - 24 uur', 'Sappigheid en malsheid'],
        ['Witte Vis', '1,0% - 1,5%', '20 - 45 minuten', 'Stevigheid van het vlees'],
        ['Lacto-fermenten', '2,5% - 3,0%', '7 - 21 dagen', 'Microbiologische veiligheid'],
        ['Sauzen en Conserven', '3,5% - 5,0%', '1+ maand', 'Langetermijnconservering'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Problemen Identificeren bij het Pekelen',
      html: 'Als de pekel een ranzige geur heeft (niet zuur), gekleurde schimmel (zwart, roze) vertoont of het product extreem zacht wordt, gooi het dan weg. Witte oppervlakteschimmel (Kahm-gist) is normaal bij fermenten en kan worden verwijderd.',
    },
    {
      type: 'title',
      text: 'Glossarium van de Pebelexpert',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Osmose',
          definition: 'Fysisch proces waarbij het zout in de cellen van het voedsel dringt om de concentraties in evenwicht te brengen.',
        },
        {
          term: 'Denaturatie',
          definition: 'Effect van zout op eiwitten waardoor deze tijdens het koken meer water kunnen vasthouden.',
        },
        {
          term: 'Kahm-gist',
          definition: 'Dunne witte laag die soms op het oppervlak van fermenten verschijnt; het is onschadelijk maar duidt op een gebrek aan zuurgraad.',
        },
        {
          term: 'Lacto-fermentatie',
          definition: 'Anaerobe fermentatie waarbij bacteriën suikers omzetten in melkzuur, waardoor het voedsel wordt geconserveerd.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Waterkwaliteit',
      html: 'Vermijd altijd kraanwater met veel chloor, omdat dit de groei van goede bacteriën in uw fermentaties kan remmen. Gebruik gefilterd water of laat het water 24 uur staan.',
    },
    {
      type: 'paragraph',
      html: 'Onze evenwichtscalculator haalt het giswerk uit uw recepten, zodat u kunt koken met het vertrouwen van een sectorprofessional.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
