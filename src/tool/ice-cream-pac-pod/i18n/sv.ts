import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Glass PAC POD Kalkylator Cryo Formuleringsguide";
const description = "Berakna frysningskraft och sotningskraft for glass. Formulera precisa sockerprofiler, torrsubstansprocent och serveringstemperaturer.";
const faq = [
  {
    question: "Vad ar PAC inom glassframstallning?",
    answer: "PAC star for Potere Anticongelante, vilket representerar frysningskraften. Det bestammer hur mycket vatten forblir fruset vid en given serveringstemperatur och kontrollerar glassens fysiska hardhet."
  },
  {
    question: "Vad ar POD och varfor ar det viktigt?",
    answer: "POD star for Potere Dolcificante, vilket representerar den relativa sotningskraften. Det mater sothet i forhallande till sackaros (bordssocker), som har ett basvarde pa 100."
  },
  {
    question: "Varfor balanserar vi flera sockerarter i glass?",
    answer: "Olika sockerarter har unika PAC och POD egenskaper. Till exempel erbjuder dextros hog frysningskraft med matlig sothet, medan sackaros ger standardkropp och sothet. Att blanda dem mojliggor kontroll over kramigheten utan att gora produkten alltfor sot."
  },
  {
    question: "Vad ar den optimala torrsubstansprocenten for glass?",
    answer: "Den totala torrsubstansprocenten ligger vanligtvis mellan 36% och 42%. En procent under detta intervall leder till isiga texturer, medan en procent over kan resultera i sandighet eller tung munkanzla."
  }
];
const howTo = [
  {
    name: "Ange basmix och serveringstemperatur",
    text: "Definiera vikten av din flytande basmix och mata in den avsedda serveringstemperaturen vid vilken du planerar att servera glassen."
  },
  {
    name: "Ange socker mangder",
    text: "Justera reglage for olika sockerarter som sackaros, dextros, glukos, invertsocker och trehalos for att bygga ditt recept."
  },
  {
    name: "Analysera PAC och POD varden",
    text: "Jamfor de beraaknade PAC och POD vardena med de rekommenderade malvardena for din avsedda temperatur."
  },
  {
    name: "Verifiera torrsubstansforhallande och skopbarhet",
    text: "Sakerstall att den totala torrsubstansprocenten ar inom den optimala zonen och kontrollera skopbarhetsindikatorn for att forutsaga sluttexturen."
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
  description: 'Berakna frysningskraft och sotningskraft for glass. Formulera precisa sockerprofiler, torrsubstansprocent och serveringstemperaturer.',
  faqTitle: 'Vanliga Fragor',
  ui: {
    title: "Glass Cryo Kalkylator",
    subtitle: "Precisions cryo formuleringsinstrument for molekylar gastronomi",
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
    podLabel: "Sotningskraft (POD)",
    solidsLabel: "Total Torrsubstans",
    targetPacLabel: "Mal PAC",
    scoopabilityLabel: "Skopbarhetstillstand",
    stoneState: "Hart som Sten",
    creamyState: "Perfekt Kramighet",
    soupState: "Smalande Soppa",
    stoneDesc: "Frysningskraften ar for lag for denna temperatur. Blandningen kommer att frysa stenhart.",
    creamyDesc: "PAC balansen ar optimal. Glass kommer att vara skopbar och kramig.",
    soupDesc: "Frysningskraften ar for hog. Glass kommer att smalta snabbt och forbli flytande.",
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
      text: 'Vetenskapliga Principer for Glass Cryo Formulering och Glasovergangsfas Kontroll',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Glass ar en komplex flerfas termodynamisk emulsion bestaende av luftceller, fettkulor, iskristaller och en ofrusen koncentrerad serumfas. Att uppna perfekt kramighet och skopbarhet kraver noggrann kontroll av fryspunktssankningen av vattnet i blandningen. Nar temperaturen sjunker under fryspunkten borjar vatten kristalliseras till is. Koncentrationen av upplosta aumen i den aterstaende flytande serumfasen okar, vilket ytterligare sanker dess fryspunkt. Balansen mellan frusna vattenkristaller och den ofrusna sirapsfasen bestammer hardheten och slaheten hos slutprodukten.',
    },
    {
      type: 'title',
      text: 'Forsta PAC: Frysningskraft och Fryspunktssankning Matematik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC, eller Potere Anticongelante, representerar frysningskraften hos ett loust amne i forhallande till sackaros. Sackaros ar utsedd som referensstandard med ett PAC varde pa 100. Mekanismen styrs av kolligativa egenskaper, vilket innebar att fryspunktssankningen beror pa antalet aktiva molekyler upplosta i vatten, snarare an deras massa. Monosackarider som dextros (molekylvikt 180 g/mol) ger ungefar dubbelt sa manga molekyler per gram som disackarider som sackaros (molekylvikt 342 g/mol), vilket resulterar i ett PAC pa 190. Hogre PAC varden innebar att mer vatten forblir flytande vid en given temperatur, vilket forhindrar glassen fran att frysa stenhart.',
    },
    {
      type: 'title',
      text: 'Forsta POD: Sotningskraft och Sensorisk Balans',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'POD, eller Potere Dolcificante, ar ett matt som mater relativ sothet jamfort med sackaros (baslinje 100). Vid formulering av hogkvalitativ glass eller gelato ar det lika viktigt att balansera sothet som strukturell stabilitet. Om en formulerare endast anvander sackaros for att sanka fryspunkten (oka PAC), blir glassen kvalmigt sot innan den nar onskad mjukhet. For att kringga denna begransning anvander molekylar gastronomi sockerarter som dextros (POD 70), trehalos (POD 45) eller atomiserad glukos DE40 (POD 40). Dessa mojliggor anpassad konfiguration av frysningskurvan utan att overvaldiga gommen.',
    },
    {
      type: 'title',
      text: 'Jamforande Databas over Vanliga Cryo Formuleringssocker',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Sockertyp', 'Relativ PAC', 'Relativ POD', 'Torrsubstans (%)', 'Kulinarisk Anvandning'],
      rows: [
        ['Sackaros', '100', '100', '100%', 'Standardkropp, rent sot profil, standard baslinje'],
        ['Dextros', '190', '70', '100%', 'Sanker fryspunkt, okar mjukhet, minskar sothet'],
        ['Glukos DE40', '90', '40', '95%', 'Ger kropp, forhindrar omkristallisation, okar viskositet'],
        ['Invertsocker', '190', '130', '70%', 'Ger mjukhet, fukthestande egenskaper, forstarker fruktsmaker'],
        ['Trehalos', '100', '45', '90%', 'Lag sothet kroppsmedel, skyddar proteiner, ren finish'],
      ],
    },
    {
      type: 'title',
      text: 'Total Torrsubstansforhallande och Strukturell Emulsionsstabilitet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Total torrsubstans omfattar alla icke vatten element i formuleringen, inklusive fett, mjolk torrsubstans inte fett, stabiliseringsmedel, emulgeringsmedel och sockerarter. En optimal glassmix innehaller mellan 36% och 42% total torrsubstans. Om torrsubstansen ar for lag leder hog vattenhalt till stor iskristalltillvaxt och en grov textur. Om torrsubstansen ar for hog okar viskositeten overdrivet, vilket resulterar i en tung munkanzla och potentiell sandighet pa grund av laktoskristallisation.',
    },
    {
      type: 'title',
      text: 'Praktiska Steg for Framgangsrik Cryo Formulering',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bestam den avsedda serveringstemperaturen for din displaymonter. Gelato serveras typiskt vid -12 grader Celsius, medan industriell glass serveras kallare vid -18 grader Celsius.',
        'Berakna mal PAC med standardtemperaturformeln. For -12 grader Celsius ar mal PAC ungefar 216.',
        'Vajj en blandning av sockerarter. Kombinera sackaros for standard sothet, dextros for att sanka fryspunkten och glukos for att forbattra kropp och textur.',
        'Verifiera att total torrsubstans ligger inom det sakra intervallet 36% till 42% for att sakkerstalla optimal luftning och en smalt profil som ar mjuk pa tungan.'
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
