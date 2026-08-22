import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FermentationUI } from '../ui';

const title = "Gist Fermentatietijd Rekenmachine voor Brood, Desem en Bier";
const description = "Schat de rijstijd van brood, zuurdesem en bier op basis van temperatuur, hoeveelheid gist, batchgrootte en doelwaarde. Metrisch en imperiaal.";

const faq = [
  {
    "question": "Wat berekent deze gist fermentatie rekenmachine?",
    "answer": "Het schat een planningsvenster voor brooddeeg, zuurdesem of bier."
  },
  {
    "question": "Waarom heeft temperatuur zo'n grote invloed?",
    "answer": "Temperatuur verandert de stofwisselingssnelheid van gist rechtstreeks."
  },
  {
    "question": "Wat voer ik in voor zuurdesem?",
    "answer": "Meelgewicht als batchgrootte en startergewicht als cultuurhoeveelheid."
  },
  {
    "question": "Wat voer ik in voor bier?",
    "answer": "Wortvolume in liters en droge gist in grammen."
  },
  {
    "question": "Moet ik stoppen als het venster afloopt?",
    "answer": "Nee, controleer het deeg visueel of meet het soortelijk gewicht."
  },
  {
    "question": "Kan ik imperiale eenheden gebruiken?",
    "answer": "Ja, via de schakelknop bovenin."
  }
];

const howTo = [
  {
    "name": "Kies een modus",
    "text": "Selecteer brood, zuurdesem of bier."
  },
  {
    "name": "Stel cultuur en temperatuur in",
    "text": "Kies gisttype en werktemperatuur."
  },
  {
    "name": "Voer batch en gist in",
    "text": "Vul meel/wort en gisthoeveelheid in."
  },
  {
    "name": "Bepaal het doel",
    "text": "Kies gewenste deegrijzing of vergisting."
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
  "modeBread": "Brood",
  "modeSourdough": "Zuurdesem",
  "modeBeer": "Bier",
  "modeBreadHint": "commerciële gist",
  "modeSourdoughHint": "wilde cultuur",
  "modeBeerHint": "ale of lager",
  "temperature": "Fermentatietemperatuur",
  "temperatureHelp": "Gebruik de temperatuur van de deeg- of wortmassa.",
  "systemLabel": "Meetstelsel",
  "metricSystem": "Metrisch",
  "imperialSystem": "Imperiaal",
  "useImperial": "Gebruik imperiaal",
  "useMetric": "Gebruik metrisch",
  "imperialTemperatureUnit": "°F",
  "metricTemperatureUnit": "°C",
  "imperialMassUnit": "oz",
  "metricMassUnit": "g",
  "imperialFlourUnit": "oz",
  "metricFlourUnit": "g",
  "imperialWortUnit": "gal",
  "metricWortUnit": "L",
  "batchSize": "Batchgrootte",
  "batchSizeHelp": "Meelgewicht voor deeg of wortvolume voor bier.",
  "flour": "Meelgewicht",
  "wort": "Wortvolume",
  "yeastAmount": "Cultuurhoeveelheid",
  "yeastAmountHelp": "Weeg de gist of desem.",
  "yeastType": "Cultuurtype",
  "instant": "Instant droge gist",
  "active": "Actieve droge gist",
  "fresh": "Verse gist",
  "starter": "Desem starter",
  "ale": "Ale gist",
  "lager": "Lager gist",
  "targetRise": "Doelrijzing",
  "targetAttenuation": "Doelvergisting",
  "targetHelp": "Dit is het richtpunt, geen automatische garantie.",
  "riseUnit": "x volume",
  "attenuationUnit": "%",
  "presetRoom": "Kamer",
  "presetWarm": "Warm",
  "presetCool": "Koel",
  "presetOvernight": "Nacht",
  "calculate": "Schatting bijwerken",
  "reset": "Herstellen naar brood",
  "estimatedWindow": "Geschat fermentatievenster",
  "rate": "Activiteitssnelheid",
  "pitchDensity": "Entdichtheid",
  "status": "Meting",
  "steady": "stabiele omstandigheden",
  "watch": "cultuur observeren",
  "caution": "buiten optimaal bereik",
  "invalid": "voer geldige waarden in",
  "steadyText": "Invoer ligt dicht bij het referentieprofiel. Let op de massa in plaats van de klok.",
  "watchText": "Schatting dient als leidraad, maar temperatuur maakt het venster variabel.",
  "cautionText": "Combinatie wijkt sterk af van referentie. Gebruik als globaal signaal.",
  "invalidText": "Voer positieve waarden in.",
  "assumptions": "Modeloverwegingen openen",
  "assumptionsText": "Het model gebruikt een Q10-temperatuurfactor en sublineaire dosiscorrectie.",
  "targetMarker": "doel",
  "riseScene": "deegvolume",
  "attenuationScene": "suiker omgezet",
  "hours": "uur",
  "days": "dagen",
  "perLiter": "g/L",
  "perGallon": "oz/gal",
  "perFlour": "van meel",
  "enterValid": "Voer waarden in voor meting.",
  "faqTitle": "Veelgestelde Vragen",
  "bibliographyTitle": "Bibliografie en Referenties"
};

export const content: ToolLocaleContent<FermentationUI> = {
  slug: "gist-fermentatietijd-rekenmachine",
  title,
  description,
  ui,
  faqTitle: ui.faqTitle,
  faq,
  bibliographyTitle: ui.bibliographyTitle,
  bibliography,
  howTo,
  seo: [
    { type: 'title', text: "Hoe de fermentatieschatting werkt", level: 2 },
    { type: 'paragraph', html: "Zoek je een rekenmachine voor gist fermentatietijd, zuurdesem rijstijd of bier vergisting? Deze tool biedt een praktisch tijdsvenster gebaseerd op temperatuur, gist, batchgrootte en doelwaarde." },
    { type: 'stats', columns: 3, items: [{ value: '3', label: "fermentatiemodi", icon: 'mdi:flask-outline' }, { value: 'Q10', label: "temperatuurfactor", icon: 'mdi:thermometer' }, { value: 'range', label: "resultaatformaat", icon: 'mdi:arrow-expand-horizontal' }] },
    { type: 'title', text: "Variabelen die het tijdsvenster beïnvloeden", level: 3 },
    { type: 'table', headers: ["Variabele","Brood en zuurdesem","Bier"], rows: [["Batchgrootte","Meel in grammen","Wort in liters"],["Cultuurhoeveelheid","Gist of desem in grammen","Droge gist in grammen"],["Einddoel","Deegvolumefactor","Doelvergisting"],["Controle","Volume en elasticiteit","Stabiele dichtheidsmeting"]] },
    { type: 'title', text: "Waarom het resultaat een bereik is", level: 3 },
    { type: 'paragraph', html: "Twee degen met hetzelfde recept kunnen door temperatuurschommelingen en gistvitaliteit in een ander tempo rijpen. De spanne toont deze onzekerheit." },
    { type: 'tip', title: "Gebruik het doel als visuele indicator", html: "Let bij deeg op volumetoename en luchtigheid. Bij bier op een stabiel hydrometerniveau." },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
