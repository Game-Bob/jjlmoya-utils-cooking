import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FermentationUI } from '../ui';

const title = "Räknare för Jäst och Jäsningstid för Bröd, Surdeg och Öl";
const description = "Uppskatta jästid för bröd, surdeg och öl utifrån temperatur, jästmängd, degstorlek och mål. Växla mellan metriska och imperiala enheter.";

const faq = [
  {
    "question": "Vad beräknar denna jäsningsräknare?",
    "answer": "Den uppskattar ett tidsfönster för bröddeg, surdeg eller öl."
  },
  {
    "question": "Varför påverkar temperaturen så mycket?",
    "answer": "Temperatur ändrar direkt jästens metabola hastighet."
  },
  {
    "question": "Vad anger jag för surdeg?",
    "answer": "Mjölvikt som satsstorlek och surdegsgrund som kulturmängd."
  },
  {
    "question": "Vad anger jag för öl?",
    "answer": "Vörtvolym i liter och torrjäst i gram."
  },
  {
    "question": "Ska jag stoppa jäsningen när tiden går ut?",
    "answer": "Nej, kontrollera degen visuellt eller mät vörtens densitet."
  },
  {
    "question": "Kan jag använda imperiala enheter?",
    "answer": "Ja, via knappen för måttsystem."
  }
];

const howTo = [
  {
    "name": "Välj läge",
    "text": "Välj bröd, surdeg eller öl."
  },
  {
    "name": "Ställ in kultur och temp",
    "text": "Välj jästtyp och arbetstemperatur."
  },
  {
    "name": "Ange sats och jäst",
    "text": "Fyll i mjöl/vört och jästmängd."
  },
  {
    "name": "Sätt målet",
    "text": "Välj degens volymökning eller utjäsning."
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
  "modeBread": "Bröd",
  "modeSourdough": "Surdeg",
  "modeBeer": "Öl",
  "modeBreadHint": "kommersiell jäst",
  "modeSourdoughHint": "vild kultur",
  "modeBeerHint": "ale eller lager",
  "temperature": "Jäsningstemperatur",
  "temperatureHelp": "Använd degens eller vörtens temperatur.",
  "systemLabel": "Måttsystem",
  "metricSystem": "Metrisk",
  "imperialSystem": "Imperial",
  "useImperial": "Använd imperial",
  "useMetric": "Använd metrisk",
  "imperialTemperatureUnit": "°F",
  "metricTemperatureUnit": "°C",
  "imperialMassUnit": "oz",
  "metricMassUnit": "g",
  "imperialFlourUnit": "oz",
  "metricFlourUnit": "g",
  "imperialWortUnit": "gal",
  "metricWortUnit": "L",
  "batchSize": "Satsstorlek",
  "batchSizeHelp": "Mjölvikt för deg eller vörtvolym för öl.",
  "flour": "Mjölvikt",
  "wort": "Vörtvolym",
  "yeastAmount": "Kulturmängd",
  "yeastAmountHelp": "Väg jäst eller surdeg.",
  "yeastType": "Kulturtyp",
  "instant": "Torrjäst instant",
  "active": "Aktiv torrjäst",
  "fresh": "Färskjäst",
  "starter": "Surdegsgrund",
  "ale": "Alejäst",
  "lager": "Lagerjäst",
  "targetRise": "Måljäsning",
  "targetAttenuation": "Målutjäsning",
  "targetHelp": "Detta är ett riktmärke, inte en automatisk garanti.",
  "riseUnit": "x volym",
  "attenuationUnit": "%",
  "presetRoom": "Rumstemp",
  "presetWarm": "Varm",
  "presetCool": "Sval",
  "presetOvernight": "Natt",
  "calculate": "Uppdatera uppskattning",
  "reset": "Återställ till bröd",
  "estimatedWindow": "Uppskattat jäsningsfönster",
  "rate": "Aktivitetsgrad",
  "pitchDensity": "Givnadstäthet",
  "status": "Mätning",
  "steady": "stabila förhållanden",
  "watch": "observera kulturen",
  "caution": "utanför optimum",
  "invalid": "ange giltiga värden",
  "steadyText": "Värdena ligger nära referensprofilen. Observera degen eller vörten.",
  "watchText": "Uppskattningen fungerar som guide, men temperaturen gör fönstret mer variabelt.",
  "cautionText": "Kombinationen avviker från referensen. Använd som en grov signal.",
  "invalidText": "Ange positiva värden.",
  "assumptions": "Visa modellantaganden",
  "assumptionsText": "Modellen använder en Q10-temperaturfaktor och sublinjär dosjustering.",
  "targetMarker": "mål",
  "riseScene": "degvolym",
  "attenuationScene": "omvandlat socker",
  "hours": "timmar",
  "days": "dagar",
  "perLiter": "g/L",
  "perGallon": "oz/gal",
  "perFlour": "av mjöl",
  "enterValid": "Ange värden för att mäta.",
  "faqTitle": "Vanliga Frågor",
  "bibliographyTitle": "Bibliografi och Referenser"
};

export const content: ToolLocaleContent<FermentationUI> = {
  slug: "jast-fermenteringstid-raknare",
  title,
  description,
  ui,
  faqTitle: ui.faqTitle,
  faq,
  bibliographyTitle: ui.bibliographyTitle,
  bibliography,
  howTo,
  seo: [
    { type: 'title', text: "Hur jäsningsuppskattningen fungerar", level: 2 },
    { type: 'paragraph', html: "Letar du efter en räknare för jästid, surdegens jäsning eller öljäsning? Detta verktyg ger ett praktiskt tidsfönster baserat på temperatur, jäst, degstorlek och mål." },
    { type: 'stats', columns: 3, items: [{ value: '3', label: "jäsningslägen", icon: 'mdi:flask-outline' }, { value: 'Q10', label: "temperaturfaktor", icon: 'mdi:thermometer' }, { value: 'range', label: "resultatformat", icon: 'mdi:arrow-expand-horizontal' }] },
    { type: 'title', text: "Faktorer som påverkar tidsfönstret", level: 3 },
    { type: 'table', headers: ["Variabel","Bröd och surdeg","Öl"], rows: [["Satsstorlek","Mjöl i gram","Vört i liter"],["Kulturmängd","Jäst eller surdeg i gram","Torrjäst i gram"],["Slutmål","Volymmultiplikator","Målutjäsning"],["Kontroll","Volym och elasticitet","Stabil densitetsmätning"]] },
    { type: 'title', text: "Varför resultatet är ett tidsintervall", level: 3 },
    { type: 'paragraph', html: "Degar med samma recept kan jäsa i olika takt på grund av temperatur och jästaktivitet. Intervallet visar denna osäkerhet." },
    { type: 'tip', title: "Använd målet som visuell indikator", html: "För deg, bedöm volymökning och luftighet. För öl, bekräfta stabil densitet med jäsmätare." },
    { type: 'paragraph', html: 'Följ temperatur och volym som praktiska kontrollpunkter under jäsningen. Tidsintervallet är en uppskattning: observera degens struktur och bekräfta att ölet jäst klart med ett stabilt mätvärde. Anteckna starttemperaturen för att kunna jämföra satser och upprepa ett bra resultat.' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
