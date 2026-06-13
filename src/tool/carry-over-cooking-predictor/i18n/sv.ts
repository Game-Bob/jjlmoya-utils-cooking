import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Carry Over Cooking Predictor: Värmetröghetskalkylator';
const description = 'Förutsäg hur många grader din stek fortsätter att tillagas efter att du tagit ut den ur ugnen. Få den exakta uttagstemperaturen för perfekt medium rare.';

const faq = [
  {
    question: 'Vad är carry-over cooking och varför händer det?',
    answer: 'Carry-over cooking, även kallat värmetröghet, är den fortsatta ökningen av innertemperaturen efter att maten tagits ut ur ugnen. Värme som lagrats i de yttre lagren fortsätter att ledas mot mitten. En stek som tas ut vid 50°C kan nå 54°C under vilan - skillnaden mellan rare och medium rare.',
  },
  {
    question: 'Hur påverkar ugnstemperaturen carry-over?',
    answer: 'Högre ugnstemperaturer (200-250°C) skapar en större temperaturgradient mellan ytan och kärnan, vilket lagrar mer latent värme i skorpan. Detta förstärker carry-over-effekten. En stek som tillagas vid 120°C har minimal carry-over (~1°C), medan en vid 220°C kan öka 5-8°C under vilan.',
  },
  {
    question: 'Förändrar köttets form carry-over-beräkningen?',
    answer: 'Ja. Geometrin påverkar värmeinträngningen avsevärt. Hela fåglar och tjocka stekar har mer termisk massa i förhållande till ytarean, så de behåller mer värme och har större carry-over. Platta stycken som biffar har hög yta-till-volym-kvot och kyls snabbt ner med minimal carry-over.',
  },
  {
    question: 'Hur länge bör jag låta köttet vila efter uttag?',
    answer: 'Vilotiden beror på vikt och geometri. En tumregel är ungefär 1 minut per 100 g kött, minst 10 minuter, högst 45 minuter. En stek på 2 kg behöver cirka 16 minuters vila. Under denna tid jämnas innertemperaturen ut och carry-over-effekten fullbordas.',
  },
];

const howTo = [
  {
    name: 'Välj köttets geometri',
    text: 'Välj Hela Fåglar för fågel, Cylindrisk Stek för innerfilé och benfria stycken, eller Platt Stycke för biffar och filéer.',
  },
  {
    name: 'Ange vikten',
    text: 'Ange den totala vikten av ditt stycke i gram. Minsta vikt varierar beroende på geometrityp.',
  },
  {
    name: 'Ställ in ugnstemperaturen',
    text: 'Ange din faktiska ugnstemperatur. Högre temperaturer ökar carry-over-effekten.',
  },
  {
    name: 'Ställ in måltemperaturen',
    text: 'Ange önskad slutlig innertemperatur (t.ex. 54°C för medium rare nötkött, 74°C för fågel).',
  },
  {
    name: 'Avläs uttagstemperaturen',
    text: 'Kalkylatorn talar om exakt när du ska ta ut köttet för att nå ditt mål efter vilan.',
  },
  {
    name: 'Låt köttet vila',
    text: 'Låt köttet vila under den rekommenderade tiden. Täck inte för tätt, annars blir skorpan mjuk.',
  },
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
  slug: 'tillagningsprediktor',
  title: 'Carry Over Cooking Predictor',
  description: 'Förutsäg hur många grader din stek fortsätter att tillagas efter att du tagit ut den ur ugnen. Få den exakta uttagstemperaturen för perfekt medium rare.',
  faqTitle: 'Vanliga frågor',
  ui: {
    title: 'Carry Over Cooking Predictor',
    subtitle: 'Värmetröghetskalkylator för precisionsstekning',
    geometryLabel: 'Köttets geometri',
    wholeBird: 'Hela Fåglar (Fågel)',
    cylindricalRoast: 'Cylindrisk Stek (Innerfilé, Benfri)',
    flatCut: 'Platt Stycke (Biff, Filé)',
    weightLabel: 'Vikt',
    ovenTempLabel: 'Ugnstemperatur',
    targetTempLabel: 'Mål innertemperatur',
    pullTemp: 'Uttagstemperatur',
    carryOver: 'Efterstegring',
    restTime: 'Vilotid',
    minutes: 'min',
    degreesC: '°C',
    degreesF: '°F',
    unitLabel: 'Enheter',
    metricUnit: 'Metriskt',
    imperialUnit: 'Imperial',
    geometryDescCylindrical: 'Cylindrisk stekgeometri vald - måttlig värmetröghet med förutsägbar carry-over.',
    weightG: 'g',
    weightOz: 'oz',
    errorTargetExceedsOven: 'Måltemperaturen kan inte överstiga ugnstemperaturen.',
    errorOvenTooHot: 'Ugnstemperaturen överstiger 350°C. Sänk temperaturen.',
    errorWeightTooLow: 'Vikten är under minimum för denna geometri.',
    errorWeightTooHigh: 'Vikten överstiger maximum för denna geometri.',
    pullNow: 'Ta ut köttet nu',
    pullAt: 'Ta ut vid',
    toReach: 'för att nå',
    afterRest: 'efter vila',
    carryOverWillAdd: 'Efterstegring tillför cirka',
    footerTemplate: '{carry} efterstegring · {rest} vila · {weight}{wunit}, {oven} ugn → {target} mål',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Carry-Over-Cooking-Predictor: Få den Perfekta Uttagstemperaturen Varje Gång',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Carry-over cooking är den fortsatta ökningen av innertemperaturen efter att maten lämnat ugnen. De yttre lagren lagrar värme under stekningen, och denna energi fortsätter att ledas mot den svalare kärnan under vilan. En tjock stek som tas ut vid 50°C kan nå 54°C efter vila - skillnaden mellan rare och medium rare. Denna kalkylator förutsäger exakt hur många grader din stek kommer att stiga så att du kan ta ut den vid precis rätt tidpunkt.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5-8°C', label: 'Typisk carry-over (het ugn)', icon: 'mdi:thermometer' },
        { value: '1-3°C', label: 'Minimal carry-over (låg ugn)', icon: 'mdi:thermometer-low' },
        { value: '16 min', label: 'Vilotid för 2 kg stek', icon: 'mdi:clock-outline' },
        { value: '45 min', label: 'Rekommenderad maxvila', icon: 'mdi:clock-alert' },
      ],
    },
    {
      type: 'title',
      text: 'Uttagstemperaturtabell efter Tillagningsgrad',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Använd denna tabell för att hitta din målinnertemperatur, låt sedan kalkylatorn bestämma den exakta uttagstemperaturen. Kom ihåg: uttagstemperaturen är alltid <strong>lägre</strong> än ditt mål eftersom carry-over-effekten fortsätter tillagningen under vilan.',
    },
    {
      type: 'table',
      headers: ['Tillagningsgrad', 'Måltemperatur', 'Uttagstemperatur (200°C ugn)', 'Vilotid'],
      rows: [
        ['Nötkött Rare', '52°C / 126°F', '46-48°C / 115-118°F', '10-15 min'],
        ['Nötkött Medium Rare', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 min'],
        ['Nötkött Medium', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 min'],
        ['Nötkött Well Done', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 min'],
        ['Fläskkött Medium', '63°C / 145°F', '57-59°C / 135-138°F', '10-15 min'],
        ['Fläskkött Well Done', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 min'],
        ['Kyckling/Kalkonbröst', '74°C / 165°F', '68-70°C / 154-158°F', '15-20 min'],
        ['Kyckling/Kalkonlår', '82°C / 180°F', '76-78°C / 169-172°F', '15-20 min'],
        ['Lamm Medium Rare', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 min'],
        ['Lamm Medium', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 min'],
      ],
    },
    {
      type: 'title',
      text: 'Hur Geometri Förändrar den Termiska Beräkningen',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Hela Fåglar',
          icon: 'mdi:food-drumstick',
          description: 'Maximal termisk massa i förhållande till ytarean. De tjocka bröst- och lårmusklerna lagrar enorm latent värme.',
          highlight: false,
          points: ['Carry-over: 5-10°C från en 200°C ugn', 'Vila: 20-45 minuter', 'Bäst för: kalkon, hel kyckling, anka', 'Ta ut 8-10°C under mål'],
        },
        {
          title: 'Cylindrisk Stek',
          icon: 'mdi:food-steak',
          description: 'Den vanligaste stekformen. Måttlig värmelagring med förutsägbara carry-over-värden.',
          highlight: true,
          points: ['Carry-over: 3-7°C från en 200°C ugn', 'Vila: 15-30 minuter', 'Bäst för: innerfilé, fläskfilé, lammracks', 'Ta ut 5-7°C under mål'],
        },
        {
          title: 'Platt Stycke',
          icon: 'mdi:food',
          description: 'Hög yta-till-volym-kvot innebär att värme försvinner snabbt. Carry-over är minimal men fortfarande viktig.',
          highlight: false,
          points: ['Carry-over: 1-3°C från en 200°C ugn', 'Vila: 5-15 minuter', 'Bäst för: biffar, kycklingbröst, fiskfilé', 'Ta ut 1-3°C under mål'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Vanliga Carry-Over-Misstag och Hur Man Åtgärdar Dem',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Tar ut för sent',
      html: 'Om du väntar tills termometern visar din måltemperatur innan du tar ut köttet, kommer carry-over att överskrida med 3-8°C. En medium rare stek blir medium eller medium well. <strong>Ta alltid ut 5-8°C under ditt mål.</strong> Använd denna kalkylator för att få exakt siffra.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Skär upp för tidigt',
      html: 'Att skära i en stek direkt efter uttag släpper ut upp till 30% av köttsaften. Temperaturgradienten hinner inte jämnas ut, så mitten förblir rå medan de yttre lagren blir överkokta. <strong>Vila den fulla rekommenderade tiden.</strong> Täck löst med folie - linda inte hårt, annars gör ångan skorpan mjuk.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ugnstemperatur för låg',
      html: 'En låg ugn (under 150°C / 300°F) skapar en minimal temperaturgradient mellan yta och kärna. Detta innebär nästan ingen carry-over-effekt. Om du tillagar vid låg temperatur kan du ta ut köttet vid din exakta måltemperatur med minimal risk för överskridning. Skorputvecklingen blir dock betydligt mindre.',
    },
    {
      type: 'title',
      text: 'Proffstips för Perfekt Stekning',
      level: 3,
    },
    {
      type: 'tip',
      title: '10 Gradersregeln',
      html: 'En het ugn (220°C / 425°F) tillför cirka 1°C carry-over per 100 g kött för hela fåglar, och 0,7°C per 100 g för cylindriska stekar. Använd detta som en rimlighetskontroll mot kalkylatorn: en kyckling på 2 kg vid 220°C bör ha cirka 7-9°C carry-over.',
    },
    {
      type: 'tip',
      title: 'Vilopositionen Spelar Roll',
      html: 'Låt alltid kött vila på en varm tallrik eller skärbräda, inte på en kall yta. En kall yta drar värme från botten av steken, vilket skapar ojämna sluttemperaturer. För hela fåglar, låt vila med bröstsidan uppåt så att köttsaften fördelas jämnt genom det vita köttet.',
    },
    {
      type: 'tip',
      title: 'Täck, Linda Inte',
      html: 'Täck steken löst med aluminiumfolie under vilan. Hård inpackning fångar ånga och gör skorpan blöt. En lös täckning minskar värmeförlusten med cirka 30% samtidigt som ånga kan ventileras, vilket bevarar både carry-over-effekten och den krispiga ytan.',
    },
    {
      type: 'title',
      text: 'Ordlista över Viktiga Stektermer',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Carry-Over Cooking', definition: 'Den fortsatta ökningen av innertemperaturen efter att maten avlägsnats från värmekällan, orsakad av värmeledning från de yttre lagren mot mitten.' },
        { term: 'Uttagstemperatur', definition: 'Innertemperaturen vid vilken du bör ta ut köttet ur ugnen. Alltid lägre än måltemperaturen för att ta hänsyn till carry-over.' },
        { term: 'Måltemperatur', definition: 'Den slutliga innertemperatur du vill att köttet ska nå efter vilan. Kallas även serveringstemperatur.' },
        { term: 'Värmetröghet', definition: 'En massas benägenhet att motstå temperaturförändring. Tyngre, tätare stycken har högre värmetröghet och har större carry-over.' },
        { term: 'Vila', definition: 'Perioden efter tillagning där köttet lämnas orört, vilket låter värmen jämnas ut och köttsaften omfördelas i fibrerna.' },
        { term: 'Temperaturgradient', definition: 'Skillnaden i temperatur mellan köttets yta och dess kärna. En större gradient lagrar mer latent värme för carry-over.' },
        { term: 'Latent Värme', definition: 'Värmenergin som lagras i de yttre lagren av köttet under tillagningen. Denna energi frigörs när temperaturen jämnas ut under vilan.' },
      ],
    },
    {
      type: 'title',
      text: 'Snabbreferens: Rekommenderade Uttagstemperaturer',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Ta ut vid dessa temperaturer för perfekta resultat (200°C / 400°F ugn)',
      items: [
        'Nötkött medium rare: ta ut vid 48-50°C / 118-122°F, mål 54°C / 129°F',
        'Nötkött medium: ta ut vid 54-56°C / 129-133°F, mål 60°C / 140°F',
        'Fläskfilé: ta ut vid 57-59°C / 135-138°F, mål 63°C / 145°F',
        'Kycklingbröst: ta ut vid 68-70°C / 154-158°F, mål 74°C / 165°F',
        'Hela kalkonen: ta ut vid 68-70°C / 154-158°F, mål 74°C / 165°F (bröst)',
        'Lammracks: ta ut vid 48-50°C / 118-122°F, mål 54°C / 129°F',
      ],
    },
    {
      type: 'paragraph',
      html: 'Varje stek är unik. Vikt, exakt ugnstemperatur och styckets form påverkar alla dessa siffror. Det är precis vad denna kalkylator gör - den tar dina specifika indata och beräknar den exakta uttagstemperaturen för just din situation. Inget gissande, inga förstörda stekar.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
