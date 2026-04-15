import type { ToolLocaleContent } from "../../../types";

const title = "Vetenskapligt Äggur";
const description = "Termodynamisk kalkylator för perfekt kokta ägg baserat på höjd, temperatur och storlek.";
const faq = [
  {
    question: "Varför spelar höjden roll när man kokar ägg?",
    answer: "Vatten kokar inte alltid vid 100°C. På högre höjder är det atmosfäriska trycket lägre, vilket gör att vatten kokar vid en lägre temperatur. På 2000 meters höjd kokar vatten vid ca 93°C, vilket kräver längre tid än vid havsnivå. På Mount Everest är det omöjligt att koka ett hårdkokt ägg.",
  },
  {
    question: "Ägg från kylen eller rumstemperatur?",
    answer: "Ett ägg från kylen (4°C) behöver mer tid än ett rumstempererat ägg (20°C). Skillnaden kan vara 2-3 minuter. Denna kalkylator justerar tiden automatiskt baserat på starttemperaturen.",
  },
  {
    question: "Varför bildas en grön ring runt gulan?",
    answer: "Det är järnsulfid, ett resultat av överkokning. När ägget är över 80°C för länge reagerar svavlet i vitan med järnet i gulan. Det är inte giftigt, men det indikerar att koktiden var för lång. Använd ett isbad direkt för att undvika det.",
  },
  {
    question: "Hur skalar jag ett ägg enkelt?",
    answer: "Använd ägg som är 1-2 veckor gamla (inte nylagda), lägg dem direkt i kokande vatten (inte kallt) och sänk ner dem i isvatten omedelbart efter kokning. Temperaturchocken gör att ägget drar ihop sig och underlättar skalningen.",
  },
];
const howTo = [
  {
    name: "Välj starttemperatur",
    text: "Välj om ditt ägg är kylskåpskallt (4°C) eller rumstempererat (20°C). Detta avser äggets innertemperatur.",
  },
  {
    name: "Välj äggstorlek",
    text: "S (litet, 53g), M (mellan, 58g), L (stort, 63g), eller XL (extra stort, 73g). Storleken avgör hur lång tid det tar för värmen att nå mitten.",
  },
  {
    name: "Ange din höjd",
    text: "Ange din höjd manuellt eller använd din position. För var 300:e höjdmeter sjunker vattnets kokpunkt med ca 1°C.",
  },
  {
    name: "Tillämpa temperaturchock",
    text: "När timern ringer, sänk omedelbart ner ägget i isvatten. Detta stoppar kokningen och underlättar skalningen. Chocken är avgörande för precisionen.",
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
  slug: "aggur",
  title: "Vetenskapligt Äggur",
  description: "Termodynamisk kalkylator för perfekt kokta ägg baserat på höjd, temperatur och storlek.",
  faqTitle: "Vanliga Frågor",
  bibliographyTitle: "Vetenskapliga Referenser",
  ui: {
    parameters: "Parametrar",
    initial_temperature: "Starttemperatur",
    fridge: "Kylskåp",
    ambient: "Rumstemp.",
    egg_size: "Äggstorlek",
    altitude: "Höjd",
    use_location: "Använd min plats",
    altitude_help: "Vatten kokar vid lägre temperatur på högre höjder, vilket påverkar koktiden.",
    sea_level: "Havet",
    soft_cooked: "Löskokt",
    soft_description: "Rinnig gula, vit och mjuk vita.",
    mollet: "Mollet (Krämig gula)",
    mollet_description: "Krämig gula, fast vita.",
    hard_cooked: "Hårdkokt",
    hard_description: "Helt tillagat, fast gula.",
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
      text: 'Mästarguide för att koka det perfekta ägget',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att koka ett ägg är en övning i <strong>tillämpad termodynamik</strong>. Precisionen i starttemperatur, storlek och höjd avgör om du får en silkeslen gula eller ett överkokt ägg med en oönskad grön ring.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '62°C',
          label: 'Vitan koagulerar',
          icon: 'mdi:egg-outline',
        },
        {
          value: '68°C',
          label: 'Gulan koagulerar',
          icon: 'mdi:egg-fried',
        },
        {
          value: '-1°C',
          label: 'Kokpunkt / 300m',
          icon: 'mdi:mountain',
        },
        {
          value: '0s',
          label: 'Feltolerans',
          icon: 'mdi:timer-check-outline',
        },
      ],
    },
    {
      type: 'title',
      text: 'Jämförelse av kokningsgrader',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Löskokt Ägg',
          icon: 'mdi:coffee-outline',
          description: 'Vitan delvis fast och gulan helt rinnig.',
          points: [
            'Mycket delikat textur',
            'Idealisk för att doppa bröd',
            'Snabb koktid (3-4 min)',
            'Svår att skala',
          ],
        },
        {
          title: 'Mollet ägg / Krämigt',
          icon: 'mdi:water-percent',
          description: 'Fast vita och krämig gula, trögflytande men inte fast.',
          highlight: true,
          points: [
            'Gourmetstandarden',
            'Gula med honungskonsistens',
            'Elastiskt och fast hölje',
            'Perfekt för sallader',
          ],
        },
        {
          title: 'Hårdkokt Ägg',
          icon: 'mdi:circle-slice-8',
          description: 'Helt fast men mör, utan grön ring.',
          points: [
            'Gulan matt och fast',
            'Lätt att transportera och skala',
            'Idealisk för fyllning',
            'Kräver snabb avkylning',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Kokpunkt baserat på höjd',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Plats / Höjd', 'Meter (ö.h.)', 'Kokpunkt (°C)', 'Extratid'],
      rows: [
        ['Havsnivå (Stockholm)', '0m', '100°C', '0s'],
        ['Madrid', '650m', '97.8°C', '+25s'],
        ['Mexico City', '2240m', '92.6°C', '+75s'],
        ['La Paz (Bolivia)', '3640m', '88.1°C', '+140s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Grön ring eller svårskalat?',
      html: 'Den gröna ringen är <strong>järnsulfid</strong> orsakad av överkokning. Om ägget är svårt att skala är det ofta för färskt; det låga pH-värdet gör att vitan klibbar vid hinnan. Använd 1 vecka gamla ägg och isbad.',
    },
    {
      type: 'title',
      text: 'Ordlista för äggvetenskap',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ovotransferrin',
          definition: 'Protein i vitan som koagulerar först (62°C) och ger den vita grundstrukturen.',
        },
        {
          term: 'Ovalbumin',
          definition: 'Huvudproteinet som kräver mer värme (80°C) för fullständig fasthet.',
        },
        {
          term: 'Atmosfäriskt tryck',
          definition: 'Faktor som avgör temperaturen på det kokande vattnet.',
        },
        {
          term: 'Temperaturchock',
          definition: 'Nedsänkning i isvatten för att omedelbart stoppa restvärmen.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Vinägertricket',
      html: 'Tillsätt en skvätt vinäger i vattnet. Om skalet spricker hjälper syran till att koagulera vitan snabbt så att sprickan förseglas.',
    },
    {
      type: 'paragraph',
      html: 'Vårt äggur använder Charles Williams ekvation för att justera varje sekund baserat på din exakta plats och kylskåpstemperatur.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
