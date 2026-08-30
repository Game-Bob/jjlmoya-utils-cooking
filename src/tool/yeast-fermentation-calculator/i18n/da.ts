import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FermentationUI } from '../ui';

const title = "Gær Fermenteringstid Beregner til Brød, Surdej og Øl";
const description = "Estimer hævetid for brød, surdej og øl ud fra temperatur, gærmængde, batchstørrelse og mål. Skift mellem metriske og imperiale enheder.";

const faq = [
  {
    "question": "Hvad beregner denne gæringsberegner?",
    "answer": "Den estimerer et tidsvindue for brøddej, surdej eller øl."
  },
  {
    "question": "Hvorfor påvirker temperaturen så meget?",
    "answer": "Temperatur ændrer gærens metaboliske hastighed direkte."
  },
  {
    "question": "Hvad indtaster jeg for surdej?",
    "answer": "Melvægt som batchstørrelse og surdej som kulturmængde."
  },
  {
    "question": "Hvad indtaster jeg for øl?",
    "answer": "Urtvolumen i liter og tørgær i gram."
  },
  {
    "question": "Skal gæringen stoppes når tiden udløber?",
    "answer": "Nej, tjek dejen visuelt eller mål urtens vægtfylde."
  },
  {
    "question": "Kan jeg bruge imperiale enheder?",
    "answer": "Ja, via knappen øverst."
  }
];

const howTo = [
  {
    "name": "Vælg tilstand",
    "text": "Vælg brød, surdej eller øl."
  },
  {
    "name": "Indstil kultur og temp",
    "text": "Vælg gærtype og temperatur."
  },
  {
    "name": "Angiv batch og gær",
    "text": "Udfyld mel/urt og gærmængde."
  },
  {
    "name": "Sæt målet",
    "text": "Vælg dejens hævning eller forgæring."
  }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({ '@type': 'Question' as const, name: item.question, acceptedAnswer: { '@type': 'Answer' as const, text: item.answer } })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howTo.map((step) => ({ '@type': 'HowToStep' as const, name: step.name, text: step.text })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
};

const ui: FermentationUI = {
  "modeBread": "Brød",
  "modeSourdough": "Surdej",
  "modeBeer": "Øl",
  "modeBreadHint": "kommerciel gær",
  "modeSourdoughHint": "vild kultur",
  "modeBeerHint": "ale eller lager",
  "temperature": "Fermenteringstemperatur",
  "temperatureHelp": "Brug dejens eller urtens temperatur.",
  "systemLabel": "Målesystem",
  "metricSystem": "Metrisk",
  "imperialSystem": "Imperial",
  "useImperial": "Brug imperial",
  "useMetric": "Brug metrisk",
  "imperialTemperatureUnit": "°F",
  "metricTemperatureUnit": "°C",
  "imperialMassUnit": "oz",
  "metricMassUnit": "g",
  "imperialFlourUnit": "oz",
  "metricFlourUnit": "g",
  "imperialWortUnit": "gal",
  "metricWortUnit": "L",
  "batchSize": "Batchstørrelse",
  "batchSizeHelp": "Melvægt for dej eller urtvolumen for øl.",
  "flour": "Melvægt",
  "wort": "Urtvolumen",
  "yeastAmount": "Kulturmængde",
  "yeastAmountHelp": "Vej gær eller surdej.",
  "yeastType": "Kulturtype",
  "instant": "Tørgær instant",
  "active": "Aktiv tørgær",
  "fresh": "Frisk gær",
  "starter": "Surdej",
  "ale": "Alegær",
  "lager": "Lagergær",
  "targetRise": "Målhævning",
  "targetAttenuation": "Målforgæring",
  "targetHelp": "Dette er et pejlemærke, ikke en automatisk garanti.",
  "riseUnit": "x volumen",
  "attenuationUnit": "%",
  "presetRoom": "Stuetemp",
  "presetWarm": "Varm",
  "presetCool": "Kølig",
  "presetOvernight": "Natten over",
  "calculate": "Opdater estimat",
  "reset": "Nulstil til brød",
  "estimatedWindow": "Estimeret fermenteringsvindue",
  "rate": "Aktivitetsrate",
  "pitchDensity": "Gæringsrate",
  "status": "Aflæsning",
  "steady": "stabile forhold",
  "watch": "observer kulturen",
  "caution": "uden for optimum",
  "invalid": "indtast gyldige værdier",
  "steadyText": "Værdierne ligger tæt på referencen. Observer dejen eller urten.",
  "watchText": "Estimatet fungerer som guide, men temperaturen gør vinduet variabelt.",
  "cautionText": "Kombinationen afviger fra referencen. Brug som et groft signal.",
  "invalidText": "Indtast positive værdier.",
  "assumptions": "Åbn modelantagelser",
  "assumptionsText": "Modellen anvender en Q10-temperaturfaktor og sublineær dosisjustering.",
  "targetMarker": "mål",
  "riseScene": "dejvolumen",
  "attenuationScene": "omdannet sukker",
  "hours": "timer",
  "days": "dage",
  "perLiter": "g/L",
  "perGallon": "oz/gal",
  "perFlour": "af mel",
  "enterValid": "Indtast værdier.",
  "faqTitle": "Ofte Stillede Spørgsmål",
  "bibliographyTitle": "Bibliografi og Referencer"
};

export const content: ToolLocaleContent<FermentationUI> = {
  slug: "gaer-fermenteringstid-beregner",
  title,
  description,
  ui,
  faqTitle: ui.faqTitle,
  faq,
  bibliographyTitle: ui.bibliographyTitle,
  bibliography,
  howTo,
  seo: [
    { type: 'title', text: "Sådan fungerer gæringsestimatet", level: 2 },
    { type: 'paragraph', html: "Leder du efter en beregner til gæringstid, hævetid for surdej eller ølgæring? Dette værktøj giver et praktisk tidsvindue baseret på temperatur, gær, batchstørrelse og mål." },
    { type: 'stats', columns: 3, items: [{ value: '3', label: "gæringstilstande", icon: 'mdi:flask-outline' }, { value: 'Q10', label: "temperaturfaktor", icon: 'mdi:thermometer' }, { value: 'range', label: "resultatformat", icon: 'mdi:arrow-expand-horizontal' }] },
    { type: 'title', text: "Faktorer der påvirker tidsvinduet", level: 3 },
    { type: 'table', headers: ["Variabel","Brød og surdej","Øl"], rows: [["Batchstørrelse","Mel i gram","Urt i liter"],["Kulturmængde","Gær eller surdej i gram","Tørgær i gram"],["Slutmål","Volumenmultiplikator","Målforgæring"],["Kontrol","Volumen og elasticitet","Stabil vægtfyldemåling"]] },
    { type: 'title', text: "Hvorfor resultatet er et tidsinterval", level: 3 },
    { type: 'paragraph', html: "Deje med samme opskrift kan hæve i forskelligt tempo pga. temperatur og gæraktivitet. Intervallet visar denne usikkerhed." },
    { type: 'tip', title: "Brug målet som visuel indikator", html: "For dej, vurder volumen og luftighed. For øl, bekræft stabil vægtfylde med hydrometer." },
    { type: 'paragraph', html: 'Brug temperatur og volumen som praktiske kontrolpunkter under hævningen. Et tidsinterval er kun en vurdering, så se efter dejens struktur og bekræft øllets afslutning med en stabil måling. Notér også starttemperaturen, så du lettere kan sammenligne forskellige portioner og gentage et godt resultat.' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
