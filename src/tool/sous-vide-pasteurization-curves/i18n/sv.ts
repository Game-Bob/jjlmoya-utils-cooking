import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Sous Vide Pasteuriseringstabeller';
const description = 'Beräkna den exakta tiden som krävs för säker pasteurisering mot Salmonella och Listeria vid sous vide-tillagning baserat på köttets form och tjocklek.';

const faq = [
  {
    question: 'Vad är pasteurisering vid sous vide-tillagning?',
    answer: 'Pasteurisering är processen att värma upp mat till en specifik temperatur och hålla den där tillräckligt länge för att reducera sjukdomsframkallande mikroorganismer (som Salmonella, Listeria och E. coli) till säkra nivåer. Till skillnad från sterilisering förstör det inte alla bakteriesporer men gör maten helt säker att äta.',
  },
  {
    question: 'Varför påverkar köttets tjocklek tillagningstiden så drastiskt?',
    answer: 'Värmeöverföring i mat sker genom ledning. Tiden det tar för kärnan (den kallaste punkten) att nå vattenbadets temperatur ökar kvadratiskt med tjockleken. Att fördubbla tjockleken på en köttbit fyrdubblar uppvärmningstiden.',
  },
  {
    question: 'Varför är 54.4°C (130°F) den absolut lägsta säkra sous vide-temperaturen?',
    answer: 'Vid temperaturer under 54.4°C kan vanliga livsmedelsburna patogener som Salmonella överleva och föröka sig. Om mat hålls i denna riskzon i mer än 4 timmar kan det bildas värmeresistenta toxiner som utgör en allvarlig hälsorisk.',
  },
  {
    question: 'Vad innebär en 6D- eller 6.5D-reduktion?',
    answer: 'En D-reduktion refererar till en logaritmisk minskning av bakteriepopulationen. En 6.5D-reduktion innebär att 99.99995% av patogenerna dör. Om det ursprungligen fanns 1 000 000 bakterier kommer färre än en att överleva.',
  },
  {
    question: 'Hur påverkar matens geometri uppvärmningshastigheten?',
    answer: 'Värme tränger in i en sfär från alla håll (3 dimensioner) och i en cylinder från sidorna (2 dimensioner), medan en platt skiva värms primärt från ovan- och undersidan (1 dimension). Sfärer värms snabbast, följt av cylindrar, medan platta skivor tar längst tid.',
  },
];

const howTo = [
  {
    name: 'Ställ in badets temperatur',
    text: 'Justera reglaget för att matcha vattenbadets temperatur. Högre temperaturer pasteuriserar exponentiellt snabbare.',
  },
  {
    name: 'Ange köttets tjocklek',
    text: 'Mät köttets tjockaste del i millimeter och ange det i kalkylatorn.',
  },
  {
    name: 'Välj geometri',
    text: 'Välj om din mat är formad som en platt skiva (stek, kycklingfilé), en cylinder (fläskfilé, rullad) eller en sfär (köttbulle).',
  },
  {
    name: 'Välj patogen',
    text: 'Välj Salmonella för allmän köttsäkerhet eller Listeria monocytogenes för riskgrupper eller förlängd säkerhet.',
  },
  {
    name: 'Kontrollera tillagningstiden',
    text: 'Kalkylatorn visar tid för uppvärmning samt hålltid för pasteurisering. Lägg ihop dem för den totala säkra tillagningstiden.',
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
  slug: 'sous-vide-pasteuriseringskurvor',
  title: 'Sous Vide Pasteuriseringstabeller',
  description: 'Beräkna den exakta tiden som krävs för säker pasteurisering mot Salmonella och Listeria vid sous vide-tillagning baserat på köttets form och tjocklek.',
  faqTitle: 'Vanliga frågor',
  ui: {
    title: 'Sous Vide Pasteuriseringstabeller',
    subtitle: 'Termisk letalitetskinetik och kompensation för kärntemperatur',
    bathTempLabel: 'Vattenbadstemperatur',
    thicknessLabel: 'Köttets tjocklek',
    shapeLabel: 'Köttets geometri',
    shapeSlab: 'Platt skiva (t.ex. stek, kycklingfilé)',
    shapeCylinder: 'Cylinder (t.ex. filé, rullad)',
    shapeSphere: 'Sfär (t.ex. köttbulle)',
    pathogenLabel: 'Målpatogen',
    pathogenSalmonella: 'Salmonella (Standard)',
    pathogenListeria: 'Listeria monocytogenes',
    resultsTitle: 'Säker pasteuriseringstid',
    heatingTime: 'Uppvärmningstid till badtemp i kärnan',
    lethalityTime: 'Hålltid för pasteurisering',
    totalTime: 'Total tillagningstid',
    dangerZoneTitle: 'Biologisk riskzon',
    dangerZoneDesc: 'Temperaturer under 54.4°C kan inte pasteurisera mat säkert eftersom bakterietillväxten kan överstiga avdödningstakten. Tillaga inte sous vide under denna temperatur i mer än 4 timmar.',
    chartTitle: 'Logaritmisk bakteriereduktionskurva',
    chartXLabel: 'Tid (minuter)',
    chartYLabel: 'Log-reduktion',
    disclaimer: 'Beräkningar antar starttemperatur på 5°C och termisk diffusivitet för magert kött. Verifiera alltid badets temperatur med en kalibrerad termometer.',
    minutesUnit: 'min',
    mmUnit: 'mm',
    inUnit: 'tum',
    tempUnitC: '°C',
    tempUnitF: '°F',
    systemLabel: 'Måttsystem',
    systemMetric: 'Metrisk',
    systemImperial: 'Imperial'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Vetenskapen bakom termisk letalitet vid sous vide-tillagning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sous vide-tillagning bygger på exakt temperaturkontroll för att uppnå säker konservering utan att överkoka maten. Till skillnad från traditionella metoder med hög värme som steriliserar ytor direkt, fungerar sous vide närmare tröskeln för värmedöd för vanliga patogener. För att garantera säkerheten måste vi beräkna exakt hur snabbt bakterierna inaktiveras, vilket beror på temperatur, exponeringstid och hur snabbt värmen leds in till kärnan.',
    },
    {
      type: 'title',
      text: 'Förstå D-värden och z-värden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bakteriell värmedöd är en logaritmisk process. <strong>D-värdet</strong> definieras som den tid som krävs vid en specifik temperatur för att reducera en mikrobiell population med 90% (en 1-log reduktion). <strong>z-värdet</strong> representerar den temperaturökning som krävs för att minska D-värdet med en faktor 10. För Salmonella i fågel är ett typiskt z-värde 5.5°C. Detta innebär att om pasteurisering tar 90 minuter vid 55°C, tar det cirka 9 minuter vid 60.5°C.',
    },
    {
      type: 'title',
      text: 'Värmeledning och fördröjning av kärntemperatur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mat värms inte upp omedelbart. Värmen måste ledas från vattenbadet genom vakuumpåsen och in till köttets kärna. Denna transienta värmeledning modelleras med Fouriers lag, där temperaturförändringen beror på matens termiska diffusivitet (cirka 0.14 mm²/s för magert kött) och dess geometriska form. En platt stek värms huvudsakligen från två sidor, medan en cylindrisk filé värms radiellt från alla sidor vilket påskyndar värmepenetreringen.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
