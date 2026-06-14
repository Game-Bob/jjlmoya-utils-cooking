import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Baksoda en Bakpoeder Calculator: Zuurneutralisator Rijsmiddel";
const description = "Bereken de exacte verhouding baksoda en bakpoeder voor jouw recept. Neutraliseer zure ingredienten zoals karnemelk en yoghurt, vermijd een metaalachtige nasmaak en krijg elke keer een perfecte rijzing.";
const faq = [
  {
    question: "Waarom heeft het vervangen van bakpoeder door baksoda een zuur nodig?",
    answer: "Baksoda is een pure base. Het heeft een zure bron nodig om te activeren en koolstofdioxide vrij te geven. Zonder voldoende zuur reageert de baksoda niet volledig, wat een bittere, metaalachtige smaak in het gebak achterlaat."
  },
  {
    question: "Wat is het verschil tussen baksoda en bakpoeder?",
    answer: "Baksoda is 100% natriumbicarbonaat, een base. Bakpoeder is een compleet rijsmiddel, dat baksoda plus een droog verzuurmiddel (zoals wijnsteenzuur) en zetmeel bevat. Bakpoeder is zelfneutraliserend."
  },
  {
    question: "Hoeveel bakpoeder staat gelijk aan 1 theelepel baksoda?",
    answer: "Baksoda is ongeveer 3-4 keer sterker dan bakpoeder. Om 1 theelepel baksoda te vervangen, heb je ongeveer 3-4 theelepels bakpoeder nodig. Deze vervanging voegt echter ook zure zouten toe die de smaak kunnen beinvloeden; gebruik daarom beter onze calculator voor nauwkeurige omrekeningen."
  },
  {
    question: "Waarom smaakt mijn cake naar zeep of metaal?",
    answer: "Een zeepachtige of metaalachtige nasmaak is het klassieke teken van niet-gereageerde baksoda. Als er niet genoeg zuur in het beslag zit om het natriumbicarbonaat volledig te neutraliseren, blijft er na het bakken alkalisch residu achter, wat die onaangename chemische smaak geeft. Gebruik onze calculator voor volledige neutralisatie."
  },
  {
    question: "Kan ik cacaopoeder met alkalibehandeling als zuur gebruiken?",
    answer: "Nee. Cacaopoeder met alkalibehandeling is behandeld met een alkaliniserend middel om de natuurlijke zuurgraad te verlagen (pH ~7-8). Alleen natuurlijk cacaopoeder (pH ~5-6) is zuur en zal baksoda neutraliseren."
  },
  {
    question: "Hoe beinvloedt baksoda de bruining van gebak?",
    answer: "Baksoda verhoogt de pH van het beslag, waardoor het alkaliSCHer wordt. Een hogere pH versnelt de Maillard-bruiningsreactie, wat resulteert in donkerdere korsten en diepere smaken in koekjes en cakes."
  }
];

const howTo = [
  {
    name: "Voer het bloemgewicht in",
    text: "Voer het totale gewicht van de bloem in je recept in grammen of ons in om het totale benodigde rijsvermogen te berekenen."
  },
  {
    name: "Voeg zure ingredienten toe",
    text: "Selecteer de zure ingredienten van je recept (zoals karnemelk, yoghurt of citroensap) en voer hun gewicht in."
  },
  {
    name: "Controleer de pH-balans",
    text: "Bekijk de virtuele pH-balansschaal. Een gebalanceerde schaal geeft optimale neutralisatie aan zonder metaalachtige bijsmaken."
  },
  {
    name: "Meet de rijsmiddelen af",
    text: "Lees de aanbevolen hoeveelheid baksoda voor neutralisatie en de benodigde bakpoeder-booster om de gewenste rijzing te bereiken."
  }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'zuurneutralisator-rijsmiddel',
  title: 'Zuurneutralisator Rijsmiddel',
  description: 'Bereken de exacte verhouding baksoda en bakpoeder voor jouw recept. Neutraliseer zure ingredienten zoals karnemelk en yoghurt, vermijd een metaalachtige nasmaak en krijg elke keer een perfecte rijzing.',
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    title: "Zuurneutralisator Rijsmiddel",
    subtitle: "Precieze stoichiometrie voor perfecte rijzing en smaak in patisserie",
    flourLabel: "Bloemgewicht",
    addAcidLabel: "Zuur Ingredient Toevoegen",
    weightLabel: "Gewicht",
    removeButton: "Verwijderen",
    bakingSodaNeeded: "Geneutraliseerde Baksoda",
    requiredBakingPowder: "Doelrijsmiddel",
    providedBakingPowderEquivalent: "Rijzing uit Baksoda",
    boosterBakingPowder: "Extra Bakpoeder Booster",
    resultsTitle: "Berekende Rijsmiddelen",
    statusBalanced: "In Balans",
    statusAcidic: "Overmaat Zuur",
    statusAlkaline: "Overmaat Base",
    gramsUnit: "g",
    ouncesUnit: "oz",
    teaspoonsUnit: "theelepel",
    scaleBalanceTitle: "Virtuele pH-Balans",
    acidListTitle: "Zure Ingredienten",
    unitLabel: "Meetsysteem",
    metricUnit: "Metriek (g)",
    imperialUnit: "Imperiaal (oz)",
    acid_buttermilk: "Karnemelk",
    acid_yogurt: "Yoghurt",
    acid_sour_cream: "Zure Room",
    acid_honey: "Honing",
    acid_molasses: "Melasse",
    acid_cocoa: "Natuurlijk Cacaopoeder",
    acid_lemon_juice: "Citroensap",
    acid_vinegar: "Azijn",
    stoichiometryBadge: "pH-Stoichiometrie",
    simulateSodaLabel: "Simuleer Toegevoegde Baksoda",
    autoBalanceBtn: "Automatisch Balanceren",
    sodaAddedLabel: "Baksoda Toegevoegd"
  },
  faq,
  howTo,
  seo: [
    {
      type: 'summary',
      title: 'Kernpunten voor Perfect Rijzen',
      items: [
        'Baksoda heeft zuur nodig om te activeren; zonder zuur smaakt je baksel zeepachtig en metaalachtig',
        'Bakpoeder is zelfneutraliserend en levert extra rijsvermogen als booster',
        'De standaarddoelstelling is 4% van het bloemgewicht in bakpoederequivalent voor een goede rijzing',
        'Gebruik de neutralisatietabel hieronder om je zure ingredienten te koppelen aan de juiste hoeveelheid baksoda'
      ]
    },
    {
      type: 'title',
      text: 'De Chemie van Chemische Rijsmiddelen bij het Bakken',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Chemisch rijzen berust op <strong>zuur-base-neutralisatiereacties</strong> om koolstofdioxide (CO2) te produceren, dat gevangen raakt in de beslagmatrix en het laat rijzen tijdens het bakken. De juiste verhouding tussen natriumbicarbonaat (baksoda) en zure ingredienten is cruciaal. <strong>Te veel baksoda</strong> leidt tot niet-gereageerd alkalisch residu, wat een zeepachtige, metaalachtige smaak en gele verkleuring geeft. <strong>Te veel zuur</strong> kan resulteren in een dicht, plat baksel met weinig volume.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '3-4x',
          label: 'Baksoda sterker dan bakpoeder',
          icon: 'mdi:flash'
        },
        {
          value: '4%',
          label: 'Doelrijsmiddel (% bloemgewicht)',
          icon: 'mdi:target'
        },
        {
          value: '1/4 theelepel',
          label: 'Baksoda per 120g karnemelk/yoghurt',
          icon: 'mdi:spoon-sugar'
        },
        {
          value: '0,0125',
          label: 'Neutralisatieverhouding (zuivelzuren)',
          icon: 'mdi:scale-balance'
        }
      ]
    },
    {
      type: 'title',
      text: 'Baksoda vs. Bakpoeder: De Volledige Vergelijking',
      level: 3
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Baksoda',
          icon: 'mdi:flask-outline',
          description: 'Zuiver natriumbicarbonaat (NaHCO3). Een sterke alkalische base die een extern zuur nodig heeft om te activeren en CO2 te produceren.',
          points: [
            '3-4x sterker dan bakpoeder',
            'Heeft zuur nodig (karnemelk, yoghurt, citroensap) om te reageren',
            'Overmaat veroorzaakt zeepachtige, metaalachtige smaak en geel kruim',
            'Verhoogt de pH; versterkt Maillard-bruining in koekjes',
            'Enkelwerkend: geeft CO2 vrij onmiddellijk bij het mengen'
          ]
        },
        {
          title: 'Bakpoeder',
          icon: 'mdi:flask-round-bottom-outline',
          description: 'Een compleet rijsmiddelsysteem dat baksoda + droge zuurzouten + zetmeelvuller bevat. Zelfneutraliserend en betrouwbaar.',
          highlight: true,
          points: [
            'Bevat zijn eigen zuur (monocalciumfosfaat, SAP)',
            'Dubbelwerkend: geeft CO2 vrij bij het mengen EN bij verhitting',
            'Geen metaalachtige nasmaak; pH al in balans',
            'Zwakker per gram; gebruik 3-4x meer om baksoda te evenaren',
            'Het beste als booster wanneer baksoda alleen niet alle bloem kan laten rijzen'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Zuur Ingredient', 'Standaard Gewicht', 'Geneutraliseerde Baksoda', 'Neutralisatieverhouding'],
      rows: [
        ['Karnemelk / Yoghurt / Zure Room', '120g (1/2 Cup)', '1,5g (1/4 theelepel)', '0,0125'],
        ['Citroensap / Azijn', '15g (1 eetlepel)', '1,5g (1/4 theelepel)', '0,1000'],
        ['Natuurlijk Cacaopoeder', '80g (1 Cup)', '3,0g (1/2 theelepel)', '0,0375'],
        ['Honing', '340g (1 Cup)', '3,0g (1/2 theelepel)', '0,0088'],
        ['Melasse', '328g (1 Cup)', '3,0g (1/2 theelepel)', '0,0091']
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Probleemoplossing: Is Jouw Rijsmiddel Uit Balans?',
      badge: 'Snelle Check',
      html: '<strong>Als je cake is ingezakt:</strong> Te veel zuur of te weinig rijsmiddel in het algemeen; de CO2 ontsnapte voordat de structuur zich zette.<br/><br/><strong>Als je cake dicht en plat is:</strong> Te veel zuur zonder voldoende baksoda om het te neutraliseren, of onvoldoende totaal rijsvermogen voor het bloemgewicht.<br/><br/><strong>Als je cake zeepachtig of metaalachtig smaakt:</strong> Overmaat niet-gereageerde baksoda; voeg meer zure ingredienten toe of verminder de baksoda.<br/><br/><strong>Als je cake gele vlekken heeft:</strong> Klassiek teken van niet-opgeloste, niet-gereageerde baksoda klontjes; zeef de baksoda de volgende keer met de bloem.'
    },
    {
      type: 'title',
      text: 'Hoe Rijsmiddelen te Balanceren en Metaalsmaak te Voorkomen',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Volg dit proces voor optimale smaak en rijzing: <strong>Bepaal eerst</strong> de hoeveelheid baksoda die nodig is om de zure componenten van je beslag volledig te neutraliseren met behulp van de tabel hierboven. <strong>Reken vervolgens</strong> die baksoda om naar het bakpoederequivalent (vermenigvuldig met 4) en vergelijk het met het totale rijsvermogen dat nodig is voor je bloem; doorgaans <strong>4% van het bloemgewicht</strong> in bakpoederequivalent. <strong>Als er een tekort is</strong>, voeg dan het resterende rijsvermogen toe in de vorm van neutraal bakpoeder als booster. Onze calculator doet dit allemaal automatisch.'
    },
    {
      type: 'list',
      icon: 'mdi:alert-circle-outline',
      items: [
        'Vervang baksoda nooit 1:1 door bakpoeder; baksoda is 3-4x sterker en heeft zuur nodig',
        'Zeef baksoda altijd met de droge ingredienten om bittere klontjes te voorkomen',
        'Cacaopoeder met alkalibehandeling is NIET zuur; gebruik natuurlijk cacaopoeder als je op cacao rekent voor zuur',
        'Honing en melasse zijn zwak zuur; ze hebben veel minder baksoda per gram nodig dan citroensap',
        'Werk snel na het mengen: chemische rijsmiddelen beginnen onmiddellijk te reageren bij contact met vloeistof'
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Neutralisatieverhouding',
          definition: 'De verhouding baksoda die nodig is om een bepaald gewicht aan zuur ingredient volledig te neutraliseren. Lagere verhoudingen betekenen dat het ingredient minder zuur is per gram.'
        },
        {
          term: 'Rijsvermogen',
          definition: 'De totale hoeveelheid CO2 die een rijsmiddel kan produceren. Gemeten in bakpoederequivalenten, waarbij 4% van het bloemgewicht de standaarddoelstelling is voor cakes en muffins.'
        },
        {
          term: 'Dubbelwerkend Bakpoeder',
          definition: 'Bakpoeder dat CO2 vrijgeeft in twee fasen: eerst bij het mengen met vloeistof op kamertemperatuur, en daarna bij blootstelling aan ov Hitte. Zorgt voor een betrouwbaardere rijzing.'
        },
        {
          term: 'Maillardreactie',
          definition: 'Een chemische reactie tussen aminozuren en reducerende suikers die voedsel bruint en complexe smaken creert. Versterkt door een hogere pH door overmaat baksoda; gewenst in koekjes, ongewenst in delicate cakes.'
        },
        {
          term: 'pH-Balans',
          definition: 'De mate van zuurgraad of alkaliniteit van het beslag. Een neutrale pH (rond 7) betekent dat alle baksoda met al het zuur heeft gereageerd. Licht alkalisch bevordert bruining; zuur bevordert malsheid.'
        }
      ]
    },
    {
      type: 'tip',
      html: '<strong>Bruining en pH:</strong> Hoewel volledige neutralisatie essentieel is voor de smaak, kan een licht alkalisch beslag (door een klein overschot aan baksoda) wenselijk zijn in chocoladecakes en koekjes. Een hogere pH versterkt de Maillard-bruining, wat donkerdere kleuren, krokante randen en diepere karameltonen oplevert. Streef bij delicate vanillecakes naar exacte neutralisatie voor een pure, schone smaak.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
