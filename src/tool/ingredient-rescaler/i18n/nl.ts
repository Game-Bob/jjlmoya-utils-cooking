import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Ingrediënten Reclalculator Recept Aanpassen';
const description = 'Schaal recepten automatisch op basis van het aantal porties. Bereken de exacte hoeveelheden ingrediënten door je recept te vermenigvuldigen of te verkleinen.';

const faq = [
  {
    question: 'Waarom bevat mijn conversiefactor decimalen?',
    answer: 'Omdat culinaire verhoudingen niet altijd ronde getallen zijn. Als je een recept voor 4 personen opschaalt naar 7, is de factor precies 1,75. De ingrediënten worden met dat getal vermenigvuldigd, wat in breuken kan resulteren. Dit is nauwkeuriger dan willekeurig afronden.',
  },
  {
    question: 'Wat gebeurt er als ik "1/2 theelepel zout" invoer?',
    answer: 'De parser zoekt eerst naar het getal. Hij herkent "1" als hoeveelheid en "/2" als onderdeel van de eenheid. Het resultaat wordt "0,5" en wordt correct geschaald. Voor breuken zoals "1/2" kun je direct "0,5" invoeren (duidelijker), of het tool interpreteert het als een deling.',
  },
  {
    question: 'Moet ik de eindresultaten afronden?',
    answer: 'Dat hangt af van het ingrediënt. Voor bloem wel. Voor gist of kruiden is precisie minder cruciaal (schaal naar 75% van de aangegeven waarde). Voor eieren: als je 2,3 krijgt, gebruik dan 2 hele eieren + een deel van een derde (afgewogen), of rond af naar 2 als het gerecht dat toelaat.',
  },
  {
    question: 'Waarom verandert het resultaat niet als ik de porties aanpas?',
    answer: 'Zorg ervoor dat het ingrediëntenveld tekst bevat. Als het leeg is, valt er niets te schalen. Controleer ook of de getallen in je ingrediënten herkenbaar zijn (bijv. "500g", "1/2 theelepel").',
  },
  {
    question: 'Werkt het met imperiale maten (ounces, cups)?',
    answer: 'Technisch gezien wel, het tool leest getallen en schaalt. Maar bij cups is de precisie beperkt (inconsistent volume). Het wordt aanbevolen om voor het schalen om te rekenen naar grammen.',
  },
];

const howTo = [
  {
    name: 'Voer je porties in',
    text: 'Vul bij "Origineel" het aantal personen in waarvoor het recept bedoeld is. Bij "Gewenst" vul je het aantal personen in waarvoor je gaat koken.',
  },
  {
    name: 'Plak je ingrediëntenlijst',
    text: 'Kopieer en plak je lijst zoals hij is. Elk ingrediënt op een nieuwe regel. Het tool herkent getallen aan het begin (500g, 1/2, 2.5) en schaalt automatisch.',
  },
  {
    name: 'Pas aan op basis van context',
    text: 'De resultaten zijn wiskundig exact, maar koken is een kunst. Kruiden: schaal naar 75%. Gist: gebruik bij grote hoeveelheden minder dan het theoretische getal. Bereidingstijden worden nooit geschaald.',
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
  operatingSystem: 'All',
};

export const content: ToolLocaleContent = {
  slug: 'ingredienten-herschalen',
  title,
  description,
  ui: {
    servings: 'Porties',
    original: 'Origineel',
    desired: 'Gewenst',
    multiplyingFactor: 'Vermenigvuldigingsfactor',
    ingredientsList: 'Ingrediëntenlijst',
    pasteHere: 'Plak hier je lijst.',
    exampleLine1: 'Bijv:',
    exampleLine2: '500g Bloem',
    exampleLine3: '300ml Water',
    exampleLine4: '10g Zout',
    result: 'Resultaat',
    copy: 'Kopiëren',
    copied: 'Gekopieerd!',
    emptyState: 'Je aangepaste ingrediënten verschijnen hier...',
    defaultIngredient1: '200g Bloem',
    defaultIngredient2: '100ml Melk',
    defaultIngredient3: '2 Eieren',
  },
  faqTitle: 'Veelgestelde Vragen',
  faq,  howTo,
  seo: [
    {
      type: 'title',
      text: 'Meestergids voor het schalen en omzetten van recepten',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het <strong>schalen van ingrediënten</strong> is een van de meest kritische en foutgevoelige taken in de professionele keuken. Het gaat niet alleen om het vermenigvuldigen van getallen, maar om het begrijpen hoe de chemie en fysica van voedsel reageren op veranderingen in volume en oppervlakte.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: 'x1.75',
          label: 'Factor 4 naar 7 pers.',
          icon: 'mdi:calculator',
        },
        {
          value: '75%',
          label: 'Kruidenaanpassing',
          icon: 'mdi:shaker-outline',
        },
        {
          value: '0%',
          label: 'Tijdaanpassing',
          icon: 'mdi:timer-off',
        },
        {
          value: '100g',
          label: 'Referentiebasis',
          icon: 'mdi:weight-gram',
        },
      ],
    },
    {
      type: 'title',
      text: 'Verschillen tussen Lineair en Contextueel Schalen',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Wiskundig Lineair Schalen',
          icon: 'mdi:math-log',
          description: 'Directe vermenigvuldiging van alle waarden met de berekende conversiefactor.',
          points: [
            'Perfect voor bloem en basisvloeistoffen',
            'Ideaal voor precisie-patisserie',
            'Werkt goed bij kleine wijzigingen (x2, x0.5)',
            'Eenvoudig automatisch te berekenen',
          ],
        },
        {
          title: 'Contextueel Keukenschalen',
          icon: 'mdi:chef-hat',
          description: 'Aanpassing van verhoudingen op basis van smaakintensiteit en verdamping.',
          highlight: true,
          points: [
            'Voorkomt te veel zout en kruiden',
            'Houdt rekening met verdampingsoppervlak',
            'Past gist aan op basis van massa',
            'Vereist ervaring en beoordelingsvermogen',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Conversiefactoren per aantal gasten',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Van Porties', 'Naar Porties', 'Factor (FC)', 'Moeilijkheidsgraad'],
      rows: [
        ['2 personen', '4 personen', 'x 2.0', 'Laag (Lineair)'],
        ['4 personen', '6 personen', 'x 1.5', 'Laag (Lineair)'],
        ['4 personen', '10 personen', 'x 2.5', 'Gemiddeld (Let op kruiden)'],
        ['4 personen', '25 personen', 'x 6.25', 'Hoog (Contextueel)'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Veelvoorkomende problemen bij het verdubbelen van een recept',
      html: 'Als je merkt dat de smaak te intens is na het schalen (vooral bij zout of scherpe kruiden), verlaag dan de schaal van deze specifieke ingrediënten naar 75%. Verdubbel nooit de bereidingstijd; de kerntemperatuur wordt bereikt op basis van de dikte, niet het totaalgewicht.',
    },
    {
      type: 'title',
      text: 'Glossarium van Standaardisatieterminologie',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Conversiefactor',
          definition: 'Getal waarmee alle ingrediënten worden vermenigvuldigd: Gewenste hoeveelheid / Originele hoeveelheid.',
        },
        {
          term: 'Kookverlies',
          definition: 'Gewichtsverlies van een ingrediënt door verdamping of vetverlies.',
        },
        {
          term: 'Bruto vs Netto gewicht',
          definition: 'Het gewicht voor en na het schoonmaken van het ingrediënt.',
        },
        {
          term: 'Rendement',
          definition: 'Totale hoeveelheid eindproduct na het schalen en bereiden.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'De truc met het losgeklopte ei',
      html: 'Als de calculator 2,3 eieren aangeeft, klop dan een heel ei los, weeg het en gebruik alleen het overeenkomstige gewicht (30%). Dit is de enige manier voor precisie in de patisserie.',
    },
    {
      type: 'paragraph',
      html: 'Ons tool vereenvoudigt de wiskunde, zodat je je energie kunt richten op wat echt telt: creativiteit en smaak.',
    },
  ],
  bibliography,
  schemas: [appSchema, faqSchema, howToSchema],
};
