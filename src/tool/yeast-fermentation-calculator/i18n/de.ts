import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FermentationUI } from '../ui';

const title = "Hefe Gärzeit Rechner für Brot, Sauerteig und Bier";
const description = "Schätzen Sie die Gehzeit von Brot, Sauerteig und Bier anhand von Temperatur, Hefemenge, Chargengröße und Zielvolumen oder Vergärungsgrad. Wechseln Sie zwischen metrischen und imperialen Einheiten.";

const faq = [
  {
    "question": "Was schätzt dieser Hefegärzeit-Rechner?",
    "answer": "Er schätzt ein Planungsfenster für Brotteig, Sauerteig oder Bier anhand eines transparenten Ratenmodells."
  },
  {
    "question": "Warum beeinflusst die Temperatur das Ergebnis so stark?",
    "answer": "Temperatur verändert die Stoffwechselrate der Hefe direkt. Ein Q10-Temperaturfaktor weitet das Fenster bei Abweichungen aus."
  },
  {
    "question": "Was gebe ich beim Sauerteig ein?",
    "answer": "Das Mehlgewicht als Chargengröße und das Anstellgut als Kulturmenge."
  },
  {
    "question": "Was gebe ich bei Bier ein?",
    "answer": "Das Würzevolumen in Litern und die Trockenhefe in Gramm."
  },
  {
    "question": "Soll ich die Gärung beenden, wenn das Fenster abläuft?",
    "answer": "Nein. Nutzen Sie es als Signal zur visuellen Teigprüfung oder Dichtemessung."
  },
  {
    "question": "Kann ich imperiale Einheiten verwenden?",
    "answer": "Ja, über die Umschaltung oben im Werkzeug."
  }
];

const howTo = [
  {
    "name": "Gärmodus wählen",
    "text": "Wählen Sie Brot, Sauerteig oder Bier für entsprechende Einheiten."
  },
  {
    "name": "Kultur und Temperatur einstellen",
    "text": "Hefetyp und Arbeitstemperatur wählen."
  },
  {
    "name": "Chargengröße und Hefe eingeben",
    "text": "Mehl/Würze und Hefemenge angeben."
  },
  {
    "name": "Zielpunkt festlegen",
    "text": "Teigvergrößerung oder Vergärungsgrad wählen."
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
  "modeBread": "Brot",
  "modeSourdough": "Sauerteig",
  "modeBeer": "Bier",
  "modeBreadHint": "Reinzuchthefe",
  "modeSourdoughHint": "Wilde Kultur",
  "modeBeerHint": "Ale oder Lager",
  "temperature": "Gärtemperatur",
  "temperatureHelp": "Nutzen Sie die Teig- oder Würzetemperatur, nicht die Raumtemperatur.",
  "systemLabel": "Maßsystem",
  "metricSystem": "Metrisch",
  "imperialSystem": "Imperial",
  "useImperial": "Imperial nutzen",
  "useMetric": "Metrisch nutzen",
  "imperialTemperatureUnit": "°F",
  "metricTemperatureUnit": "°C",
  "imperialMassUnit": "oz",
  "metricMassUnit": "g",
  "imperialFlourUnit": "oz",
  "metricFlourUnit": "g",
  "imperialWortUnit": "gal",
  "metricWortUnit": "L",
  "batchSize": "Chargengröße",
  "batchSizeHelp": "Mehlgewicht für Teig oder Würzevolumen für Bier.",
  "flour": "Mehlgewicht",
  "wort": "Würzevolumen",
  "yeastAmount": "Kulturmenge",
  "yeastAmountHelp": "Wiegen Sie Hefe oder Anstellgut. Für Bier Trockenhefe in Grammen angeben.",
  "yeastType": "Kulturtyp",
  "instant": "Trockenhefe (Instant)",
  "active": "Aktivtrockenhefe",
  "fresh": "Frischhefe",
  "starter": "Anstellgut",
  "ale": "Ale-Hefe",
  "lager": "Lager-Hefe",
  "targetRise": "Ziel-Teigvergrößerung",
  "targetAttenuation": "Ziel-Vergärungsgrad",
  "targetHelp": "Dies ist der Zielpunkt, keine alleinige Garantie für Reife.",
  "riseUnit": "x Volumen",
  "attenuationUnit": "%",
  "presetRoom": "Raum",
  "presetWarm": "Warm",
  "presetCool": "Kühl",
  "presetOvernight": "Über Nacht",
  "calculate": "Schätzung aktualisieren",
  "reset": "Auf Brot zurücksetzen",
  "estimatedWindow": "Geschätztes Gärfenster",
  "rate": "Aktivitätsrate",
  "pitchDensity": "Anstellgutdichte",
  "status": "Anzeige",
  "steady": "Stabile Bedingungen",
  "watch": "Kultur beobachten",
  "caution": "Außerhalb des Optimums",
  "invalid": "Gültige Werte eingeben",
  "steadyText": "Die Eingaben liegen nahe am Referenzprofil. Teig oder Würze beobachten statt auf die Uhr zu schauen.",
  "watchText": "Schätzung dient als Orientierung, Kultur oder Temperatur machen das Fenster jedoch variabler.",
  "cautionText": "Diese Kombination weicht stark vom Referenzprofil ab. Nur als grobes Signal nutzen.",
  "invalidText": "Bitte positive Werte für Temperatur, Menge und Ziel eingeben.",
  "assumptions": "Modell-Annahmen öffnen",
  "assumptionsText": "Das Modell passt die Aktivitätsrate transparent an ein Referenzprofil an. Die Temperatur nutzt einen Q10-Faktor.",
  "targetMarker": "Ziel",
  "riseScene": "Teigvolumen",
  "attenuationScene": "Zucker vergärt",
  "hours": "Stunden",
  "days": "Tage",
  "perLiter": "g/L",
  "perGallon": "oz/gal",
  "perFlour": "vom Mehl",
  "enterValid": "Werte eingeben für Messung.",
  "faqTitle": "Häufig gestellte Fragen",
  "bibliographyTitle": "Literatur und Referenzen"
};

export const content: ToolLocaleContent<FermentationUI> = {
  slug: "hefe-garzeit-rechner",
  title,
  description,
  ui,
  faqTitle: ui.faqTitle,
  faq,
  bibliographyTitle: ui.bibliographyTitle,
  bibliography,
  howTo,
  seo: [
    { type: 'title', text: "Wie die Gärzeitschätzung funktioniert", level: 2 },
    { type: 'paragraph', html: "Suchst du einen Hefe Gärzeit Rechner, eine Sauerteig Reifezeit Schätzung oder einen Bier Gärführung Leitfaden? Dieses Tool bietet ein praktisches Zeitfenster aus Temperatur, Kulturmenge, Chargengröße und Zielwert." },
    { type: 'stats', columns: 3, items: [{ value: '3', label: "Gärmodi", icon: 'mdi:flask-outline' }, { value: 'Q10', label: "Temperaturfaktor", icon: 'mdi:thermometer' }, { value: 'range', label: "Ergebnisformat", icon: 'mdi:arrow-expand-horizontal' }] },
    { type: 'title', text: "Einflussfaktoren auf das Gärfenster", level: 3 },
    { type: 'table', headers: ["Eingabe","Brot und Sauerteig","Bier"], rows: [["Chargengröße","Mehl in Gramm","Würze in Litern"],["Kulturmenge","Hefe/Anstellgut in Gramm","Trockenhefe in Gramm"],["Zielpunkt","Teigvolumen-Faktor","Ziel-Vergärungsgrad"],["Prüfung","Volumen und Elastizität","Stabile Dichtemessung"]] },
    { type: 'title', text: "Warum das Ergebnis als Spanne angegeben wird", level: 3 },
    { type: 'paragraph', html: "Zwei Teige mit gleichem Rezept können je nach Vitalität und Temperatur unterschiedlich schnell gären. Das Fenster zeigt diese Unsicherheit transparent an." },
    { type: 'tip', title: "Zielwert als visuellen Anhaltspunkt nutzen", html: "Achten Sie beim Teig auf Volumen und Porigkeit, beim Bier auf konstante Messwerte." },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
