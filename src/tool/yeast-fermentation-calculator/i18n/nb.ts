import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FermentationUI } from '../ui';

const title = "Gjær Fermenteringstid Kalkulator for Brød, Surdeig og Øl";
const description = "Estimer hevetid for brød, surdeig og øl ut fra temperatur, gjærmengde, batchstørrelse og mål. Måleenheter i metrisk og imperial.";

const faq = [
  {
    "question": "Hva beregner denne kalkulatoren?",
    "answer": "Den estimerer et tidsvindu for brøddeig, surdeig eller øl."
  },
  {
    "question": "Hvorfor påvirker temperaturen så mye?",
    "answer": "Temperatur endrer gjærens metabolske hastighet direkte."
  },
  {
    "question": "Hva oppgir jeg for surdeig?",
    "answer": "Melvekt som batchstørrelse og starter som kulturmengde."
  },
  {
    "question": "Hva oppgir jeg for øl?",
    "answer": "Vørtervolum i liter og tørrgjær i gram."
  },
  {
    "question": "Skal fermenteringen stoppes når tiden går ut?",
    "answer": "Nei, sjekk deigen visuelt eller mål vørterens egenvekt."
  },
  {
    "question": "Kan jeg bruke imperiale enheter?",
    "answer": "Ja, via knappen øverst."
  }
];

const howTo = [
  {
    "name": "Velg modus",
    "text": "Velg brød, surdeig eller øl."
  },
  {
    "name": "Still inn kultur og temp",
    "text": "Velg gjærtype og temperatur."
  },
  {
    "name": "Oppgi batch og gjær",
    "text": "Fyll ut mel/vørter og gjærmengde."
  },
  {
    "name": "Sett målet",
    "text": "Velg deigens heving eller utgjæring."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
};

const ui: FermentationUI = {
  "modeBread": "Brød",
  "modeSourdough": "Surdeig",
  "modeBeer": "Øl",
  "modeBreadHint": "kommersiell gjær",
  "modeSourdoughHint": "vill kultur",
  "modeBeerHint": "ale eller lager",
  "temperature": "Fermenteringstemperatur",
  "temperatureHelp": "Bruk deigens eller vørterens temperatur.",
  "systemLabel": "Målesystem",
  "metricSystem": "Metrisk",
  "imperialSystem": "Imperial",
  "useImperial": "Bruk imperial",
  "useMetric": "Bruk metrisk",
  "imperialTemperatureUnit": "°F",
  "metricTemperatureUnit": "°C",
  "imperialMassUnit": "oz",
  "metricMassUnit": "g",
  "imperialFlourUnit": "oz",
  "metricFlourUnit": "g",
  "imperialWortUnit": "gal",
  "metricWortUnit": "L",
  "batchSize": "Batchstørrelse",
  "batchSizeHelp": "Melvekt for deig eller vørtervolum for øl.",
  "flour": "Melvekt",
  "wort": "Vørtervolum",
  "yeastAmount": "Kulturmengde",
  "yeastAmountHelp": "Veid gjær eller surdeigsstarter.",
  "yeastType": "Kulturtype",
  "instant": "Tørrgjær instant",
  "active": "Aktiv tørrgjær",
  "fresh": "Fersk gjær",
  "starter": "Surdeigsstarter",
  "ale": "Alegjær",
  "lager": "Lagergjær",
  "targetRise": "Målheving",
  "targetAttenuation": "Målutgjæring",
  "targetHelp": "Dette er et kontrollmål, ikke en automatisk garanti.",
  "riseUnit": "x volum",
  "attenuationUnit": "%",
  "presetRoom": "Romtemp",
  "presetWarm": "Varm",
  "presetCool": "Kjølig",
  "presetOvernight": "Natten over",
  "calculate": "Oppdater estimat",
  "reset": "Nullstill til brød",
  "estimatedWindow": "Estimert fermenteringsvindu",
  "rate": "Aktivitetsrate",
  "pitchDensity": "Gjæringstetthet",
  "status": "Avlesning",
  "steady": "stabile forhold",
  "watch": "observer kulturen",
  "caution": "utenfor optimum",
  "invalid": "oppgi gyldige verdier",
  "steadyText": "Verdiene ligger nær referansen. Observer deigen eller vørteren.",
  "watchText": "Estimatet fungerer som guide, men temperaturen gjør vinduet variabelt.",
  "cautionText": "Kombinasjonen avviker fra referansen. Bruk som et grovt signal.",
  "invalidText": "Oppgi positive verdier.",
  "assumptions": "Åpne modellantakelser",
  "assumptionsText": "Modellen bruker en Q10-temperaturfaktor og sublineær dosejustering.",
  "targetMarker": "mål",
  "riseScene": "deigvolum",
  "attenuationScene": "omdannet sukker",
  "hours": "timer",
  "days": "dager",
  "perLiter": "g/L",
  "perGallon": "oz/gal",
  "perFlour": "av mel",
  "enterValid": "Oppgi verdier.",
  "faqTitle": "Ofte Stilte Spørsmål",
  "bibliographyTitle": "Bibliografi og Referanser"
};

export const content: ToolLocaleContent<FermentationUI> = {
  slug: "gjaeryt-fermenteringstid-kalkulator",
  title,
  description,
  ui,
  faqTitle: ui.faqTitle,
  faq,
  bibliographyTitle: ui.bibliographyTitle,
  bibliography,
  howTo,
  seo: [
    { type: 'title', text: "Slik fungerer fermenteringsestimatet", level: 2 },
    { type: 'paragraph', html: "Leter du etter en kalkulator for fermenteringstid, hevetid for surdeig eller ølgjæring? Dette verktøyet gir et praktisk tidsvindu basert på temperatur, gjær, batchstørrelse og mål." },
    { type: 'stats', columns: 3, items: [{ value: '3', label: "fermenteringsmoduser", icon: 'mdi:flask-outline' }, { value: 'Q10', label: "temperaturfaktor", icon: 'mdi:thermometer' }, { value: 'range', label: "resultatformat", icon: 'mdi:arrow-expand-horizontal' }] },
    { type: 'title', text: "Faktorer som påvirker tidsvinduet", level: 3 },
    { type: 'table', headers: ["Variabel","Brød og surdeig","Øl"], rows: [["Batchstørrelse","Mel i gram","Vørter i liter"],["Kulturmengde","Gjær eller starter i gram","Tørrgjær i gram"],["Sluttmål","Volummultiplikator","Målutgjæring"],["Kontroll","Volum og elastisitet","Stabil egenvektmåling"]] },
    { type: 'title', text: "Hvorfor resultatet er et tidsintervall", level: 3 },
    { type: 'paragraph', html: "Deiger med samme oppskrift kan heve i forskjellig tempo pga. temperatur og gjæraktivitet. Intervallet viser denne usikkerheten." },
    { type: 'tip', title: "Bruk målet som visuell indikator", html: "For deig, vurder volum og luftighet. For øl, bekreft stabil egenvekt med hydrometer." },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
