import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Glass PAC POD Kalkylator Cryo Formuleringsguide";
const description = "Beräkna frysningskraft och sötningskraft för glass. Formulera precisa sockerprofiler, torrsubstansprocent och serveringstemperaturer.";
const faq = [
  {
    question: "Vad är PAC inom glassframställning?",
    answer: "PAC står för Potere Anticongelante, vilket representerar frysningskraften. Det bestämmer hur mycket vatten förblir fruset vid en given serveringstemperatur och kontrollerar glassens fysiska hårdhet."
  },
  {
    question: "Vad är POD och varför är det viktigt?",
    answer: "POD står för Potere Dolcificante, vilket representerar den relativa sötningskraften. Det mäter söthet i förhållande till sackaros (bordssocker), som har ett basvärde på 100."
  },
  {
    question: "Varför balanserar vi flera sockerarter i glass?",
    answer: "Olika sockerarter har unika PAC och POD egenskaper. Till exempel erbjuder dextros hög frysningskraft med måttlig söthet, medan sackaros ger standardkropp och söthet. Att blanda dem möjliggör kontroll över krämigheten utan att göra produkten alltför söt."
  },
  {
    question: "Vad är den optimala torrsubstansprocenten för glass?",
    answer: "Den totala torrsubstansprocenten ligger vanligtvis mellan 36% och 42%. En procent under detta intervall leder till isiga texturer, medan en procent över kan resultera i sandighet eller tung munkänsla."
  }
];
const howTo = [
  {
    name: "Ange basmix och serveringstemperatur",
    text: "Definiera vikten av din flytande basmix och mata in den avsedda serveringstemperaturen vid vilken du planerar att servera glassen."
  },
  {
    name: "Ange socker mängder",
    text: "Justera reglage för olika sockerarter som sackaros, dextros, glukos, invertsocker och trehalos för att bygga ditt recept."
  },
  {
    name: "Analysera PAC och POD värden",
    text: "Jämför de beräknade PAC och POD värdena med de rekommenderade målvärdena för din avsedda temperatur."
  },
  {
    name: "Verifiera torrsubstansförhållande och skopbarhet",
    text: "Säkerställ att den totala torrsubstansprocenten är inom den optimala zonen och kontrollera skopbarhetsindikatorn för att förutsäga sluttexturen."
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
  slug: 'glass-pac-pod-beraknare',
  title: 'Glass PAC POD Kalkylator',
  description: 'Beräkna frysningskraft och sötningskraft för glass. Formulera precisa sockerprofiler, torrsubstansprocent och serveringstemperaturer.',
  faqTitle: 'Vanliga Frågor',
  ui: {
    title: "Glass Cryo Kalkylator",
    subtitle: "Precisions cryo formuleringsinstrument för molekylär gastronomi",
    unitLabel: "Enhetssystem",
    metricUnit: "Metriskt (gram)",
    imperialUnit: "Imperial (uns)",
    baseWeightLabel: "Basmix Vikt",
    targetTempLabel: "Serveringstemperatur",
    sucroseLabel: "Sackaros",
    dextroseLabel: "Dextros",
    glucoseLabel: "Glukos DE40",
    invertedLabel: "Invertsocker",
    trehaloseLabel: "Trehalos",
    pacLabel: "Frysningskraft (PAC)",
    podLabel: "Sötningskraft (POD)",
    solidsLabel: "Total Torrsubstans",
    targetPacLabel: "Mål PAC",
    scoopabilityLabel: "Skopbarhetstillstånd",
    stoneState: "Hårt som Sten",
    creamyState: "Perfekt Krämighet",
    soupState: "Smältande Soppa",
    stoneDesc: "Frysningskraften är för låg för denna temperatur. Blandningen kommer att frysa stenhart.",
    creamyDesc: "PAC balansen är optimal. Glass kommer att vara skopbar och krämig.",
    soupDesc: "Frysningskraften är för hög. Glass kommer att smälta snabbt och förbli flytande.",
    gLabel: "g",
    ozLabel: "oz",
    cLabel: "°C",
    fLabel: "°F",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Vetenskapliga Principer för Glass Cryo Formulering och Glasövergångsfas Kontroll',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Glass är en komplex flerfas termodynamisk emulsion bestående av luftceller, fettkulor, iskristaller och en ofrusen koncentrerad serumfas. Att uppnå perfekt krämighet och skopbarhet kräver noggrann kontroll av fryspunktssänkningen av vattnet i blandningen. När temperaturen sjunker under fryspunkten börjar vatten kristalliseras till is. Koncentrationen av upplösta ämnen i den återstående flytande serumfasen ökar, vilket ytterligare sänker dess fryspunkt. Balansen mellan frusna vattenkristaller och den ofrusna sirapsfasen bestämmer hårdheten och slätheten hos slutprodukten.',
    },
    {
      type: 'title',
      text: 'Förstå PAC: Frysningskraft och Fryspunktssänkning Matematik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC, oder Potere Anticongelante, representerar frysningskraften hos ett löst ämne i förhållande till sackaros. Sackaros är utsedd som referensstandard med ett PAC värde på 100. Mekanismen styrs av kolligativa egenskaper, vilket innebär att fryspunktssänkningen beror på antalet aktiva molekyler upplösta i vatten, snarare än deras massa. Monosackarider som dextros (molekylvikt 180 g/mol) ger ungefär dubbelt så många molekyler per gram som disackarider som sackaros (molekylvikt 342 g/mol), vilket resulterar i ett PAC på 190. Högre PAC värden innebär att mer vatten förblir flytande vid en given temperatur, vilket förhindrar glassen från att frysa stenhart.',
    },
    {
      type: 'title',
      text: 'Förstå POD: Sötningskraft och Sensorisk Balans',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'POD, eller Potere Dolcificante, är ett mått som mäter relativ söthet jämfört med sackaros (baslinje 100). Vid formulering av högkvalitativ glass eller gelato är det lika viktigt att balansera söthet som strukturell stabilitet. Om en formulerare endast använder sackaros för att sänka fryspunkten (öka PAC), blir glassen kvalmigt söt innan den når önskad mjukhet. För att kringgå denna begränsning använder molekylär gastronomi sockerarter som dextros (POD 70), trehalos (POD 45) eller atomiserad glukos DE40 (POD 40). Dessa möjliggör anpassad konfiguration av frysningskurvan utan att överväldiga gommen.',
    },
    {
      type: 'title',
      text: 'Jämförande Databas över Vanliga Cryo Formuleringssocker',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Sockertyp', 'Relativ PAC', 'Relativ POD', 'Torrsubstans (%)', 'Kulinarisk Användning'],
      rows: [
        ['Sackaros', '100', '100', '100%', 'Standardkropp, rent söt profil, standard baslinje'],
        ['Dextros', '190', '70', '100%', 'Sänker fryspunkt, ökar mjukhet, minskar söthet'],
        ['Glukos DE40', '90', '40', '95%', 'Ger kropp, förhindrar omkristallisation, ökar viskositet'],
        ['Invertsocker', '190', '130', '70%', 'Ger mjukhet, fuktbeständande egenskaper, förstärker fruktsmaker'],
        ['Trehalose', '100', '45', '90%', 'Låg söthet kroppsmedel, skyddar proteiner, ren finish'],
      ],
    },
    {
      type: 'title',
      text: 'Total Torrsubstansförhållande och Strukturell Emulsionsstabilitet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Total torrsubstans omfattar alla icke vatten element i formuleringen, inklusive fett, mjölk torrsubstans inte fett, stabiliseringsmedel, emulgeringsmedel och sockerarter. En optimal glassmix innehåller mellan 36% and 42% total torrsubstans. Om torrsubstansen är för låg leder hög vattenhalt till stor iskristalltillväxt och en grov textur. Om torrsubstansen är för hög ökar viskositeten överdrivet, vilket resulterar i en tung munkänsla och potentiell sandighet på grund av laktoskristallisation.',
    },
    {
      type: 'title',
      text: 'Praktiska Steg för Framgångsrik Cryo Formulering',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bestäm den avsedda serveringstemperaturen för din displaymonter. Gelato serveras typiskt vid -12 grader Celsius, medan industriell glass serveras kallare vid -18 grader Celsius.',
        'Beräkna mål PAC med standardtemperaturformeln. För -12 degrees Celsius är mål PAC ungefär 216.',
        'Välj en blandning av sockerarter. Kombinera sackaros för standard söthet, dextros för att sänka fryspunkten och glukos för att förbättra kropp och textur.',
        'Verifiera att total torrsubstans ligger inom det säkra intervallet 36% till 42% för att säkerställa optimal luftning och en smält profil som är mjuk på tungan.'
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
