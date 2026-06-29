import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Spherification Bath Calculator Precision Molecular Gastronomy Guide";
const description = "Calcola i rapporti esatti di alginato di sodio e lattato di calcio per la sferificazione diretta e inversa. Correggi viscosità e acidità con xantano e citrato.";

const faq = [
  {
    question: "Qual è la differenza tra sferificazione diretta e inversa?",
    answer: "La sferificazione diretta aggiunge alginato di sodio alla base aromatizzata e la fa gocciolare in un bagno di calcio, creando una membrana sottile che continua a gelificare verso l'interno. La sferificazione inversa aggiunge calcio alla base e la fa gocciolare in un bagno di alginato, creando una membrana che cresce verso l'esterno, fermando il processo di gelificazione quando viene risciacquata."
  },
  {
    question: "Perché le mie sfere vengono piatte o non affondano?",
    answer: "Se il liquido di base aromatizzato è meno denso del bagno di alginato di sodio, galleggia invece di formare una sfera. Aggiungendo una piccola quantità di gomma xantana aumenti la viscosità della base, permettendole di affondare e formare sfere perfette."
  },
  {
    question: "Cosa fa il citrato di sodio nella sferificazione?",
    answer: "Il citrato di sodio è un sequestrante che lega gli ioni di calcio e aumenta il pH. Se un liquido di base è altamente acido (pH inferiore a 4,5) o contiene calcio, l'alginato di sodio gelifica prematuramente. L'aggiunta di citrato neutralizza questa acidità."
  },
  {
    question: "Posso usare qualsiasi acqua per il bagno di calcio?",
    answer: "L'acqua del rubinetto con un alto contenuto di minerali può far sì che l'alginato di sodio si aggreghi o gelifichi prematuramente. È meglio usare acqua distillata o acqua in bottiglia a basso contenuto di calcio."
  }
];

const howTo = [
  {
    name: "Seleziona il metodo di sferificazione",
    text: "Scegli Diretta per una gelificazione sottile e immediata, o Inversa per liquidi contenenti alcol, latticini o calcio."
  },
  {
    name: "Inserisci i pesi dei liquidi",
    text: "Inserisci il peso del tuo liquido di base aromatizzato e del bagno d'acqua nelle unità preferite."
  },
  {
    name: "Aggiungi correzioni di consistenza e acidità",
    text: "Attiva la Gomma Xantana se il tuo liquido di base è sottile, o il Citrato di Sodio se è altamente acido."
  },
  {
    name: "Misure gli ingredienti",
    text: "Pesa le quantità esatte di alginato di sodio, lattato o cloruro di calcio e agenti correttivi mostrate nel riepilogo."
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
  slug: 'calcolatore-bagno-sferificazione',
  title: 'Calcolatore Bagno di Sferificazione',
  description: 'Calcola i rapporti esatti di alginato di sodio e lattato di calcio per la sferificazione diretta e inversa. Correggi viscosità e acidità con xantano e citrato.',
  faqTitle: 'Domande Frequenti',
  ui: {
    title: "Calcolatore Bagno di Sferificazione",
    subtitle: "Controllo di precisione dei rapporti per sferificazione diretta e inversa",
    unitLabel: "Sistema di Misura",
    metricUnit: "Metrico (g / grammi)",
    imperialUnit: "Imperiale (oz / once)",
    methodLabel: "Metodo di Sferificazione",
    directMethod: "Sferificazione Diretta",
    reverseMethod: "Sferificazione Inversa",
    baseWeightLabel: "Peso del Liquido di Base",
    bathWeightLabel: "Peso dell'Acqua del Bagno",
    xanthanLabel: "Attiva Gomma Xantana (Correzione di Viscosità)",
    citrateLabel: "Attiva Citrato di Sodio (Acidità / Sequestrante pH)",
    recipeTitle: "Riepilogo Ricetta Calcolata",
    baseGellingAgent: "Agente Gelificante di Base",
    bathGellingAgent: "Agente Gelificante del Bagno",
    xanthanGum: "Gomma Xantana (Addensante)",
    sodiumCitrate: "Citrato di Sodio (Tampone)",
    warningLabel: "Avvertenza di Solubilità",
    warningDesc: "Il peso dell'agente richiesto è vicino o supera il limite di solubilità per questo volume di liquido. Lo scioglimento potrebbe richiedere più tempo o necessitare di un leggero riscaldamento.",
    directDesc: "Ideale per liquidi leggeri con basso contenuto di calcio. Crea sfere delicate dalla pelle sottile che devono essere servite immediatamente.",
    reverseDesc: "Ideale per latticini, alcol, liquidi ricchi di calcio o acidi. Crea sfere stabili che non continuano a gelificare dopo il risciacquo.",
    sodiumAlginate: "Alginato di Sodio",
    calciumChloride: "Cloruro di Calcio",
    calciumLactate: "Lattato di Calcio",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: "La scienza della sferificazione molecolare e della gelificazione degli idrocolloidi",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "La sferificazione è una tecnica culinaria rivoluzionaria che incapsula un nucleo liquido all'interno di una membrana gelificata sottile. Originata nel settore degli imballaggi industriali negli anni '40, è stata adattata alla cucina modernista nei primi anni 2000. La chimica sottostante si basa sulle interazioni degli idrocolloidi, in particolare sulla reticolazione dei polimeri di alginato di sodio quando esposti a cationi di calcio bivalenti.",
    },
    {
      type: 'title',
      text: 'La chimica molecolare: alginato di sodio e ioni di calcio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'alginato di sodio è un polisaccaride estratto dalle alghe brune, composto da catene lineari di acido beta-D-mannuronico (blocchi M) e acido alpha-L-guluronico (blocchi G). Nella sua forma di sale di sodio, è completamente solubile in acqua, formando una soluzione viscosa. Quando vengono introdotti ioni di calcio (como cloruro di calcio o lattato gluconato di calcio), gli ioni di calcio bivalenti (Ca2+) sostituiscono gli ioni di sodio monovalenti (Na+). Poiché il calcio ha due cariche positive, si lega a due blocchi G su catene polimeriche adiacenti, collegandole insieme. Questo processo, scientificamente descritto come il <strong>modello a scatola di uova</strong> della gelificazione, lega le catene di polisaccaridi indipendenti in una rete di idrogel tridimensionale rigida che intrappola acqua e molecole aromatiche.',
    },
    {
      type: 'title',
      text: 'Meccanismi della sferificazione diretta rispetto a quella inversa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I due metodi principali di sferificazione differiscono per il posizionamento dell\'agente gelificante e dei sali di calcio, portando a diverse proprietà meccaniche:',
    },
    {
      type: 'list',
      items: [
        '<strong>Sferificazione Diretta:</strong> L\'alginato di sodio viene sciolto nel liquido de base aromatizzato, che viene poi fatto gocciolare in un bagno di calcio (di solito 1,0% di cloruro di calcio). La gelificazione inizia istantaneamente al confine. Poiché gli ioni di calcio sono piccoli e mobili, migrano continuamente dal bagno al nucleo della sfera, facendo crescere la membrana di gel verso l\'interno. Se non viene risciacquata e servita immediatamente, la sfera gelifica completamente, trasformandosi in una perla solida e gommosa.',
        '<strong>Sferificazione Inversa:</strong> Il lattato gluconato di calcio (2,0%) viene sciolto nel liquido di base aromatizzato, che viene poi fatto gocciolare in un bagno di alginato di sodio (0,5%). Poiché le molecole di alginato sono grandi e lente, non possono facilmente attraversare la barriera di gel appena formata. Invece, gli ioni di calcio migrano verso l\'esterno nel bagno, facendo crescere la membrana verso l\'esterno. Questo arresta immediatamente la gelificazione una volta che la sfera viene rimossa e risciacquata in acqua chiara, preservando un nucleo completamente liquido a tempo indeterminato.'
      ],
    },
    {
      type: 'title',
      text: 'Superare le barriere di acidità e pH con il citrato di sodio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'alginato di sodio è altamente sensibile all\'acido. Quando il pH di un liquido di base aromatizzato scende al di sotto di 4,5, le molecole di alginato non riescono a idratarsi correttamente. Invece di dissolversi, le catene di alginato precipitano in acido alginico insolubile, formando grumi filamentosi. Per risolvere questo problema, gli chef utilizzano il <strong>citrato di sodio</strong> come agente tampone. Il citrato di sodio neutralizza gli ioni di idrogeno, aumentando il pH di ingredienti acidi come il succo di passion fruit o di lime al di sopra della soglia critica di 4,5, consentendo all\'alginato di idratarsi completamente e formare forme sferiche pulite.',
    },
    {
      type: 'title',
      text: 'Regolazione di densità e viscosità con la gomma xantana',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Per formare una sfera, la goccia di liquido di base aromatizzato deve immergersi completamente nel bagno di gelificazione. Se il liquido di base aromatizzato è meno denso del bagno (come un alcol leggero o un succo a base d\'acqua in un denso bagno di alginato di sodio durante la sferificazione inversa), galleggia sulla superficie, appiattendosi. L\'aggiunta di una piccolissima quantità di <strong>gomma xantana</strong> (tipicamente 0,1% a 0,2%) aumenta la viscosità del liquido di base. Questa consistenza extra fornisce lo slancio necessario per far affondare la goccia nel bagno, permettendo alla tensione superficiale di trasformare la goccia in una sfera perfetta.',
    },
    {
      type: 'table',
      headers: ['Metodo di Sferificazione', 'Ingredienti Ideali', 'Additivi Richiesti', 'Caratteristiche di Conservazione', 'Direzione di Crescita del Gel'],
      rows: [
        ['Metodo Diretto', 'Succhi di frutta a basso calcio, brodi chiari, sciroppi dolci', '0,5% Alginato di Sodio nella base, 1,0% Cloruro di Calcio nel bagno', 'Da servire immediatamente, gelifica completamente nel tempo', 'Verso l\'interno (verso il centro)'],
        ['Metodo Inverso', 'Latticini, alcol, liquidi ricchi di calcio o altamente acidi', '2,0% Lattato di Calcio nella base, 0,5% Alginato di Sodio nel bagno', 'Altamente stabile, conservabile in olio o acqua per ore', 'Verso l\'esterno (dal centro)'],
      ],
    },
    {
      type: 'title',
      text: 'Risciacquo e conservazione finale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Risciacqua sempre le sfere finite in un bagno di acqua pulita e fredda immediatamente dopo averle rimosse dal bagno di gelificazione. Questo rimuove eventuali residui di calcio o alginato sulla superficie, fermando la reazione chimica e prevenendo sapori sgradevoli (in particolare il sapore leggermente amaro del cloruro di calcio). Per la conservazione, immergi le sfere in un liquido di densità corrispondente (come il liquido di base aromatizzato senza additivi o uno sciroppo di zucchero leggero) per evitare che l\'acqua attraversi la membrana per osmosi, il che potrebbe far raggrinzire o scoppiare le sfere.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
