import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FermentationUI } from '../ui';

const title = "Calcolatore Tempo di Fermentazione del Lievito per Pane, Lievito Madre e Birra";
const description = "Calcola il tempo di lievitazione del pane, fermentazione del lievito madre e della birra in base a temperatura, quantità di lievito e obiettivo. Unità metriche e imperiali.";

const faq = [
  {
    "question": "Cosa stima questo calcolatore di fermentazione?",
    "answer": "Stima una finestra temporale indicativa per pane, lievito madre o birra."
  },
  {
    "question": "Perché la temperatura influisce così tanto?",
    "answer": "La temperatura modifica direttamente l'attività metabolica dei lieviti."
  },
  {
    "question": "Cosa inserire per il lievito madre?",
    "answer": "Peso farina come dimensione lotto e quantità di lievito madre come coltura."
  },
  {
    "question": "Cosa inserire per la birra?",
    "answer": "Volume del mosto in litri e grammi di lievito secco."
  },
  {
    "question": "Devo fermare la fermentazione allo scadere del tempo?",
    "answer": "No, verifica l'impasto o la densità del mosto."
  },
  {
    "question": "Posso usare unità imperiali?",
    "answer": "Sì, selezionando il pulsante del sistema di misura."
  }
];

const howTo = [
  {
    "name": "Scegli la modalità",
    "text": "Seleziona pane, lievito madre o birra."
  },
  {
    "name": "Imposta coltura e temperatura",
    "text": "Scegli tipo di lievito e temperatura di lavoro."
  },
  {
    "name": "Inserisci lotto e lievito",
    "text": "Inserisci peso farina/mosto e quantità di lievito."
  },
  {
    "name": "Imposta l'obiettivo",
    "text": "Scegli la crescita dell'impasto o l'attenuazione."
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
  "modeBread": "Pane",
  "modeSourdough": "Lievito madre",
  "modeBeer": "Birra",
  "modeBreadHint": "lievito di birra",
  "modeSourdoughHint": "coltura madre",
  "modeBeerHint": "ale o lager",
  "temperature": "Temperatura di fermentazione",
  "temperatureHelp": "Usa la temperatura dell'impasto o del mosto.",
  "systemLabel": "Sistema di misura",
  "metricSystem": "Metrico",
  "imperialSystem": "Imperiale",
  "useImperial": "Usa imperiale",
  "useMetric": "Usa metrico",
  "imperialTemperatureUnit": "°F",
  "metricTemperatureUnit": "°C",
  "imperialMassUnit": "oz",
  "metricMassUnit": "g",
  "imperialFlourUnit": "oz",
  "metricFlourUnit": "g",
  "imperialWortUnit": "gal",
  "metricWortUnit": "L",
  "batchSize": "Dimensione lotto",
  "batchSizeHelp": "Peso farina per impasto o volume mosto per birra.",
  "flour": "Peso farina",
  "wort": "Volume mosto",
  "yeastAmount": "Quantità coltura",
  "yeastAmountHelp": "Pesa il lievito o il lievito madre.",
  "yeastType": "Tipo coltura",
  "instant": "Secco istantaneo",
  "active": "Secco attivo",
  "fresh": "Lievito fresco",
  "starter": "Lievito madre",
  "ale": "Lievito ale",
  "lager": "Lievito lager",
  "targetRise": "Crescita obiettivo",
  "targetAttenuation": "Attenuazione obiettivo",
  "targetHelp": "È un traguardo di controllo, non una garanzia automatica.",
  "riseUnit": "x volume",
  "attenuationUnit": "%",
  "presetRoom": "Ambiente",
  "presetWarm": "Caldo",
  "presetCool": "Fresco",
  "presetOvernight": "Notturno",
  "calculate": "Aggiorna stima",
  "reset": "Ripristina pane",
  "estimatedWindow": "Finestra di fermentazione stimata",
  "rate": "Tasso di lavoro",
  "pitchDensity": "Tasso di inoculo",
  "status": "Lettura",
  "steady": "condizioni stabili",
  "watch": "osserva coltura",
  "caution": "fuori zona ottimale",
  "invalid": "inserisci valori validi",
  "steadyText": "I dati sono vicini al profilo di riferimento. Osserva l'impasto o il mosto.",
  "watchText": "Stima utile come guida, ma temperatura o coltura rendono la finestra variabile.",
  "cautionText": "Combinazione lontana dal profilo base. Usa come segnale orientativo.",
  "invalidText": "Inserisci valori positivi.",
  "assumptions": "Apri ipotesi modello",
  "assumptionsText": "Il modello applica un fattore temperatura Q10 e un fattore dose sublineare.",
  "targetMarker": "traguardo",
  "riseScene": "volume impasto",
  "attenuationScene": "zucchero convertito",
  "hours": "ore",
  "days": "giorni",
  "perLiter": "g/L",
  "perGallon": "oz/gal",
  "perFlour": "di farina",
  "enterValid": "Inserisci valori per iniziare.",
  "faqTitle": "Domande Frequenti",
  "bibliographyTitle": "Bibliografia e Riferimenti"
};

export const content: ToolLocaleContent<FermentationUI> = {
  slug: "calcolatore-tempo-fermentazione-lievito",
  title,
  description,
  ui,
  faqTitle: ui.faqTitle,
  faq,
  bibliographyTitle: ui.bibliographyTitle,
  bibliography,
  howTo,
  seo: [
    { type: 'title', text: "Come funziona la stima della fermentazione", level: 2 },
    { type: 'paragraph', html: "Cerchi un calcolatore per il tempo di fermentazione del lievito, lievitazione del pane o fermentazione della birra? Questo strumento fornisce una finestra temporale basata su temperatura, quantità di lievito, lotto e obiettivo." },
    { type: 'stats', columns: 3, items: [{ value: '3', label: "modalità di fermentazione", icon: 'mdi:flask-outline' }, { value: 'Q10', label: "fattore temperatura", icon: 'mdi:thermometer' }, { value: 'range', label: "formato risultato", icon: 'mdi:arrow-expand-horizontal' }] },
    { type: 'title', text: "Fattori che influenzano la stima", level: 3 },
    { type: 'table', headers: ["Variabile","Pane e lievito madre","Birra"], rows: [["Dimensione lotto","Farina in grammi","Mosto in litri"],["Quantità coltura","Lievito o madre in grammi","Lievito secco in grammi"],["Obiettivo","Moltiplicatore volume","Attenuazione obiettivo"],["Verifica reale","Volume ed elasticità","Misurazione densità stabile"]] },
    { type: 'title', text: "Perché il risultato è un intervallo di tempo", level: 3 },
    { type: 'paragraph', html: "La velocità di fermentazione varia in base a farina, vitalità dei lieviti e temperatura. L'intervallo riflette questa reale incertezza." },
    { type: 'tip', title: "Usa l'obiettivo come riferimento visivo", html: "Per il pane valuta volume e alveolatura. Per la birra conferma la densità costante con il densimetro." },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
