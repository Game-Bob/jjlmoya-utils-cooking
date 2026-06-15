import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkylator for Koji Inokulering och Hydrering";
const description = "Berakna den perfekta fuktigheten, spordinokuleringsdosen och inkubationstemperaturen for att gora koji hemma. Undvik misslyckade satser med var gratis kalkylator for koji inokulering och hydrering.";
const faq = [
  {
    question: "Vad ar den idealiska fuktigheten for att koka koji substrat?",
    answer: "Den ideala totala fuktigheten for angad ris eller korn vid inokulering av koji ar mellan 30% och 35%. Detta motsvarar en angad vikt pa cirka 1,35x till 1,40x den ursprungliga torrvikten."
  },
  {
    question: "Hur mycket spor pulver (tane-koji) behover jag?",
    answer: "Standard inokuleringsgraden ar 1 gram standard sporblandning per 1 kilogram tort substrat. Om du anvander koncentrerade sporer behover du mindre (0,5 g), medan utspadda blandningar kraver mer (2,0 g)."
  },
  {
    question: "Varfor ar temperaturkontroll kritisk under koji inkubation?",
    answer: "Aspergillus oryzae vaxer optimalt mellan 28C och 34C. Om temperaturen overstiger 38C kan mögel överhettas, sluta vaxa eller producera oonskade grona/svarta sporer. Under 20C saktar tillvaxten avsevärt."
  },
  {
    question: "Vad hander under den exoterma fasen?",
    answer: "Efter 18 till 24 timmars inkubation borjar koji vaxa snabbt och genererar sin egen värme. Under denna exoterma topp maste du rora om substratet och sanka inkubatorns värme for att forhindra overhettning."
  }
];

const howTo = [
  {
    name: "Ange torr substratvikt",
    text: "Ange den ursprungliga torrvikten av ditt ris eller korn for att fastställa målvarden for hydrering."
  },
  {
    name: "Spar angad vikt",
    text: "Ange den faktiska angade vikten efter tillagning. Kalkylatorn bestammer fuktprocenten och kontrollerar om den ligger inom det ideala intervallet 30-35%."
  },
  {
    name: "Berakna spordos",
    text: "Välj din sporstyrka (standard, koncentrerad eller utspädd) for att fa den exakta vikten av spor pulver for inokulering."
  },
  {
    name: "Overvaka inkubationsparametrar",
    text: "Justera temperatur och relativ fuktighet for att simulera mycelietillvaxt och granska den 48-timmars termiska kurvans tidslinje."
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
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'kalkylator-koji-inokulering',
  title: 'Kalkylator for Koji Inokulering och Hydrering',
  description: 'Berakna den perfekta fuktigheten, spordinokuleringsdosen och inkubationstemperaturen for att gora koji hemma. Undvik misslyckade satser med var gratis kalkylator for koji inokulering och hydrering.',
  faqTitle: 'Vanliga Fragor',
  ui: {
    title: 'Koji Inokuleringsanalysator',
    subtitle: 'Optimera parametrar for fermentation av koji i fast form',
    dryWeightLabel: 'Torr Substratvikt',
    steamedWeightLabel: 'Faktisk Angad Vikt',
    targetRangeLabel: 'Målvikt for Angning',
    moistureLabel: 'Aktuell Fuktighet',
    potencyLabel: 'Sporstyrka',
    standardPotency: 'Standard Sporer',
    concentratedPotency: 'Koncentrerad',
    dilutedPotency: 'Utspadd Blandning',
    sporeDosageLabel: 'Spordos',
    tempLabel: 'Inkubationstemperatur',
    humidityLabel: 'Relativ Fuktighet',
    statusIdeal: 'Ideal Inkubation',
    statusSlow: 'Langsam Tillvaxt',
    statusInhibited: 'Hammad / Kallt',
    statusOverheating: 'Overhettning / Sporulering',
    timelineTitle: '48h Termisk Inkubationscykel',
    stage1Name: '0-18h: Uppvärmning',
    stage2Name: '18-36h: Exoterm Topp',
    stage3Name: '36-48h: Mognad'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Hur Man Gör Koji: Perfekt Fuktighet, Spordos och Temperatur for Aspergillus Oryzae',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Att gora koji hemma kraver att tre saker blir ratt: <strong>substrathydrering</strong>, <strong>sporinokuleringsdensitet</strong> och <strong>temperaturkontroll under inkubation</strong>. Om något av dessa blir fel kan din sats överhettas, misslyckas med inokulering eller växa fel mögel. Var <strong>kalkylator for koji inokulering</strong> tar bort gasandet genom att berakna din målvikt for angning, exakt spordos och realtidsinkubationsstatus baserat på dina specifika varden.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '30-35%',
          label: 'Malfuktighet',
          icon: 'mdi:water-percent'
        },
        {
          value: '1 g/kg',
          label: 'Standard Spor Grad',
          icon: 'mdi:seed-outline'
        },
        {
          value: '28-34°C',
          label: 'Ideal Temperatur',
          icon: 'mdi:thermometer'
        },
        {
          value: '48 h',
          label: 'Total Inkubation',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: 'Varfor Fuktighet Bestammer Kvaliteten på Koji',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Den enskilt viktigaste faktorn for lyckad koji odling är <strong>substratfuktighet</strong>. När ris eller korn ångas gelatiniseras stärkelsekornen och absorberar vatten, vilket gör dem tillgängliga för enzymerna som produceras av Aspergillus oryzae. Det ideala fuktighetsintervallet är smalt: <strong>30% till 35%</strong>. Under 30% kan myceliet inte dra tillräckligt med vatten för att växa och enzymproduktionen stannar. Över 35% blir kornen klibbiga och klumpar ihop sig, vilket minskar luftporositeten och kväver den aeroba mögeln.'
    },
    {
      type: 'list',
      items: [
        '<strong>För torrt (under 30%):</strong> Mycelietillväxten hämmas, enzymproduktionen sjunker och koji koloniserar aldrig kornet helt.',
        '<strong>För vått (över 35%):</strong> Kornen klibbar ihop, luftfickor kollapsar och bakterier eller oönskade mögelsvampar kan konkurrera ut Aspergillus oryzae.',
        '<strong>Målintervall (30-35%):</strong> Kornet känns fast, enskilda korn separeras lätt och myceliet sprider sig jämnt inom 48 timmar.',
        '<strong>Hur man mäter:</strong> Väg ditt torra spannmål, ånga det, väg igen. Kalkylatorn beräknar din exakta fuktighetsprocent från dessa två siffror.'
      ]
    },
    {
      type: 'table',
      headers: ['Spannmålstyp', 'Torrvikt', 'Målvikt för Ångning', 'Blötläggningstid', 'Ångtid'],
      rows: [
        ['Vitt Ris (kortkornigt)', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['Vitt Ris (långkornigt)', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['Pärlkorn', '1000 g', '1350-1400 g', '4-8 h', '40-50 min'],
        ['Brunris', '1000 g', '1350-1400 g', '8-12 h', '45-60 min']
      ]
    },
    {
      type: 'title',
      text: 'Sporinokulering: Hur Mycket Tane-Koji Behöver Du?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Inokuleringsdensiteten påverkar direkt hur snabbt mögeln koloniserar substratet och hur konkurrenskraftig den är mot föroreningar. Standardgraden är <strong>1 gram sporblandning per kilogram torrt substrat</strong>, men detta varierar beroende på sportyp.'
    },
    {
      type: 'proscons',
      title: 'Välja Din Sportyp',
      items: [
        {
          pro: 'Standard sporer är det vanligaste formatet, förlåtande för nybörjare och väldokumenterade i hembryggningslitteraturen.',
          con: 'Högre pulvervolym per sats och kan innehålla fyllmedel som inte bidrar till inokulering.'
        },
        {
          pro: 'Koncentrerade sporer använder hälften så mycket pulver för samma inokulering, har högre renhet och är mer ekonomiska för stora satser.',
          con: 'Lättare att överdosera, kräver en precis våg (0,01 g upplösning) och ger mindre utrymme för fel vid underdosering.'
        },
        {
          pro: 'Utspädda blandningar fördelas lätt över stora ytor, är mer förlåtande vid ojämn blandning och passar nybörjare som föredrar synlig täckning.',
          con: 'Använder mer pulver per sats och kan introducera överskott av stärkelse från fyllmedel.'
        }
      ]
    },
    {
      type: 'title',
      text: 'Den Exoterma Värmekurvan: Varför Koji Genererar Sin Egen Värme',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'När Aspergillus oryzae förbrukar stärkelse och omvandlar den till enkla sockerarter genererar den metabolisk värme. Mellan timme <strong>18 och 36</strong> av inkubationen når den biologiska aktiviteten sin topp, vilket producerar en exoterm stöt som kan höja kornbäddens temperatur med 5-10°C över inkubatorns omgivningstemperatur.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Tecken på Att Din Koji Överhettas',
      html: 'Om kornbäddens temperatur överstiger <strong>38°C</strong> börjar mögelenzynerna denatureras och svampen växlar till reproduktionsläge, vilket producerar <strong>gröna eller svarta sporer</strong>. Satsen kommer att lukta ammoniak istället för sött och nötigt. Du måste omedelbart röra om substratet och sänka inkubatorns temperatur för att få tillbaka den under 34°C.'
    },
    {
      type: 'tip',
      title: '12 Timmars Vändningsschema',
      html: 'Börja vid timme 18, bryt upp kornbädden och rör om var 12:e timme. Detta frigör instängd värme, omfördelar fukt och ger myceliet tillgång till färskt syre. Använd rena, sanerade händer eller en steril sked.'
    },
    {
      type: 'tip',
      title: 'Fuktighet Spelar Också Roll',
      html: 'Håll relativ fuktighet över <strong>65%</strong> under inkubation. Under 40% torkar substratet ut och tillväxten stoppar. Över 90% kan kondensation främja bakterietillväxt på kornets yta.'
    },
    {
      type: 'tip',
      title: 'Lita På Din Näsa',
      html: 'Frisk koji luktar söta rostade kastanjer eller färska svampar. Om du känner ammoniak, surhet eller röta kan satsen ha överhettats eller blivit förorenad. Ta bort och kasta angripet spannmål omedelbart.'
    },
    {
      type: 'card',
      icon: 'mdi:rice',
      title: 'Sake & Miso Framställning',
      html: 'Koji inokulerat ris är grunden för <strong>sake</strong>, <strong>miso</strong> och <strong>amazake</strong>. Noggrann fuktighetskontroll säkerställer korrekt enzymutveckling för omvandling av stärkelse till socker.'
    },
    {
      type: 'card',
      icon: 'mdi:soy-sauce',
      title: 'Sojasås & Tamari',
      html: 'Koji odlat på <strong>sojabönor</strong> eller en sojaböna-veteblandning driver fermentationen som producerar umamirik sojasås. Jämn temperatur förhindrar bismaker.'
    },
    {
      type: 'card',
      icon: 'mdi:shaker-outline',
      title: 'Shio Koji & Garum',
      html: '<strong>Shio koji</strong> (saltfermenterad koji) och <strong>köttgarums</strong> förlitar sig på fullt koloniserat spannmål. Vår kalkylator säkerställer att ditt substrat är i det ideala fuktighetsfönstret före inokulering.'
    },
    {
      type: 'title',
      text: 'Ordlista för Koji Inkubation',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Tane-Koji',
          definition: 'Sporpulvret som används för att inokulera ångat spannmål. Vanligtvis Aspergillus oryzae sporer blandade med en stärkelsebärare som rismjöl.'
        },
        {
          term: 'Exoterm Fas',
          definition: 'Perioden mellan 18 och 36 timmars inkubation när Aspergillus oryzae genererar tillräckligt med metabolisk värme för att höja kornbäddens temperatur över omgivningsnivån.'
        },
        {
          term: 'Gelatinisering',
          definition: 'Processen att värma stärkelse i närvaro av vatten så att kornen sväller och blir tillgängliga för amylasenzymer som produceras av mögeln.'
        },
        {
          term: 'Sporulering',
          definition: 'När mögeln växlar från vegetativ tillväxt till reproduktionsläge och blir grön eller svart. Detta utlöses av värmestress över 38°C och förstör satsen för kulinarisk användning.'
        }
      ]
    },
    {
      type: 'summary',
      title: 'Viktiga Slutsatser för Perfekt Koji',
      items: [
        'Sikta på 30-35% fuktighet i ångat spannmål. Använd kalkylatorn för att hitta din exakta målvikt för ångning.',
        'Inokulera med 1 g/kg för standard sporer, 0,5 g/kg för koncentrerade eller 2 g/kg för utspädda blandningar.',
        'Håll 28-34°C och över 65% luftfuktighet under inkubation. Rör om var 12:e timme efter timme 18.',
        'Håll utkik efter den exoterma toppen vid 18-36 timmar. Om temperaturen överstiger 38°C, rör om omedelbart och sänk värmen.',
        'Lita på dina sinnen: söt kastanjelukt = bra koji. Ammoniak eller sur lukt = överhettning eller förorening.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
