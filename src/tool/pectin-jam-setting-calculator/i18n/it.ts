import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calcolatore di Pectina e Addensamento della Marmellata per un Gel Perfetto Ogni Volta';
const description = 'Calcola esattamente quanta pectina, acido citrico e zucchero servono alla tua frutta per ottenere la perfetta consistenza della marmellata. Evita conserve troppo liquide o gommose con la chimica di precisione.';

const faq = [
  {
    question: 'Perché la pectina fa gelificare la marmellata?',
    answer: 'La pectina è un polisaccaride naturale presente nelle pareti cellulari dei frutti. Quando viene riscaldata con zucchero e acido (pH 2,8-3,5), le molecole di pectina formano una rete tridimensionale di gel che intrappola acqua e zucchero, creando la consistenza spalmabile della marmellata.',
  },
  {
    question: 'Qual è la differenza tra pectina HM e LM?',
    answer: 'La pectina ad alto metossile (HM) richiede almeno il 60% di zucchero e un pH inferiore a 3,5 per gelificare - ideale per le marmellate tradizionali. La pectina a basso metossile (LM) gelifica tramite ioni calcio invece dello zucchero, consentendo conserve a basso contenuto di zucchero o senza zucchero.',
  },
  {
    question: 'Perché la mia marmellata a volte risulta troppo liquida?',
    answer: 'Una marmellata liquida deriva tipicamente da pectina insufficiente (il frutto ne è naturalmente povero), acido insufficiente (pH troppo alto per la gelificazione) o zucchero insufficiente (per pectina HM). Anche un\'eccessiva diluizione con acqua o una cottura insufficiente possono impedire la presa.',
  },
  {
    question: 'Posso usare succo di limone al posto dell\'acido citrico in polvere?',
    answer: 'Sì. Questo calcolatore converte l\'acido citrico in equivalenti di succo di limone. Circa 25 ml di succo di limone forniscono la stessa acidità di 1 g di acido citrico. Il succo di limone aggiunge anche un aroma fresco alle marmellate.',
  },
  {
    question: 'Quali frutti sono naturalmente ricchi di pectina?',
    answer: 'Mele, mele cotogne, more, mirtilli rossi e uva spina sono naturalmente ricchi di pectina e spesso non richiedono pectina aggiunta. Anche la frutta non completamente matura contiene più pectina di quella perfettamente matura.',
  },
];

const howTo = [
  {
    name: 'Seleziona il tuo frutto',
    text: 'Scegli il frutto con cui stai preparando la marmellata. Ogni frutto ha diversi livelli naturali di pectina e acidità che determinano quali additivi sono necessari.',
  },
  {
    name: 'Pesa il tuo frutto preparato',
    text: 'Inserisci il peso del tuo frutto pulito e tagliato in grammi. Una pesatura accurata è essenziale per una marmellata di precisione.',
  },
  {
    name: 'Scegli il tipo di pectina',
    text: 'Seleziona Classica (HM) per una marmellata tradizionale ad alto contenuto di zucchero, o Basso Zucchero (LM) per una conserva più sana, a ridotto contenuto di zucchero attivata dal calcio.',
  },
  {
    name: 'Esamina la tua ricetta perfetta',
    text: 'Il calcolatore indica gli esatti grammi di pectina in polvere, acido citrico (o succo di limone) e zucchero necessari. Aggiungili durante la cottura per una presa garantita.',
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
  slug: 'calcolatore-pectina-marmellata',
  title: 'Calcolatore di Pectina e Addensamento Marmellata',
  description: 'Calcola esattamente quanta pectina, acido citrico e zucchero servono alla tua frutta per ottenere la perfetta consistenza della marmellata - mai più conserve liquide o gommose.',
  faqTitle: 'Domande Frequenti',
  ui: {
    title: 'Calcolatore di Pectina e Addensamento Marmellata',
    subtitle: 'Chimica di gelificazione di precisione per conserve perfette',
    fruitLabel: 'Scegli il tuo frutto',
    allFruits: 'Tutti',
    highPectin: 'Alta Pectina',
    mediumPectin: 'Media Pectina',
    lowPectin: 'Bassa Pectina',
    weightLabel: 'Peso della frutta',
    weightPlaceholder: 'es. 1000',
    weightUnitMetric: 'g',
    weightUnitImperial: 'oz',
    pectinTypeLabel: 'Tipo di pectina',
    pectinHM: 'Classica (HM)',
    pectinLM: 'Basso Zucchero (LM)',
    sugarModeLabel: 'Modalità zucchero',
    sugarModeAuto: 'Auto',
    sugarModeManual: 'Manuale',
    sugarLabel: 'Peso dello zucchero',
    sugarPlaceholder: 'es. 650',
    recipeTitle: 'Ricetta',
    pectinNeeded: 'Pectina',
    citricAcidNeeded: 'Acido Citrico',
    lemonJuiceNeeded: 'Succo di Limone',
    sugarNeeded: 'Zucchero',
    totalYield: 'Resa Totale',
    sugarPercent: 'Zucchero',
    sugarLow: 'Basso',
    sugarIdeal: 'Ideale',
    sugarHigh: 'Alto',
    sugarOfFruit: 'del peso della frutta',
    sugarOfTotal: 'del totale',
    statusPerfect: 'Gel Perfetto',
    statusPerfectDesc: 'Le tue proporzioni sono equilibrate. La marmellata si addenserà meravigliosamente con una consistenza setosa e spalmabile e una brillante lucentezza.',
    statusSlightlyThin: 'Leggermente Fluida',
    statusSlightlyThinDesc: 'La marmellata potrebbe addensarsi delicatamente. Valuta di aggiungere più pectina o ridurre il contenuto d\'acqua per un gel più compatto.',
    statusTooThin: 'Troppo Fluida - Rischio Marmellata Liquida',
    statusTooThinDesc: 'Senza aggiustamenti, questa marmellata resterà probabilmente liquida. Aumenta lo zucchero (per HM) o aggiungi più pectina.',
    statusTooStiff: 'Troppo Compatta',
    statusTooStiffDesc: 'Il gel potrebbe diventare gommoso. Riduci la pectina della metà o aumenta leggermente il peso della frutta.',
    dropTestTitle: 'Prova del Piattino Freddo',
    dropTestHow: 'Versa su un piattino freddo',
    dropStatusLabel: 'Risultato',
    dropTestPerfect: 'Si addenserà. La goccia si increspa e mantiene la forma',
    dropTestThin: 'Fluida. Scivola giù dal piattino',
    dropTestStiff: 'Troppo compatta. Si muove appena',
    dropPlateLabel: 'piattino',
    dropDropLabel: 'goccia',
    sugarAutoHint: 'calcolato automaticamente',
    sugarManualHint: 'inserisci quantità',
    unitLabel: 'Sistema di Misura',
    metricLabel: 'Metrico (g)',
    imperialLabel: 'Imperiale (oz)',
    disclaimer: 'Pesa tutti gli ingredienti con una bilancia da cucina digitale per ottenere i migliori risultati. Le misurazioni volumetriche non sono affidabili per la preparazione della marmellata.',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'La Scienza Completa dell\'Addensamento della Marmellata: Equilibrio tra Pectina, Acido e Zucchero',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Preparare la marmellata è una precisa intersezione tra chimica e cucina. Alla base, la trasformazione della polpa di frutta in un gel compatto e spalmabile dipende dal corretto equilibrio di tre molecole: <strong>pectina</strong> (l\'agente gelificante), <strong>acido</strong> (il catalizzatore che attiva la pectina) e <strong>zucchero</strong> (l\'agente disidratante che sottrae acqua alle catene di pectina). Senza le giuste proporzioni, si ottiene una zuppa di frutta o un blocco gommoso.',
    },
    {
      type: 'title',
      text: 'Come la Pectina Forma una Rete di Gel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La pectina è un polisaccaride complesso composto principalmente da unità di acido galatturonico, presente nella lamella mediana delle pareti cellulari vegetali. Allo stato naturale, le molecole di pectina sono cariche negativamente e si respingono a vicenda, rimanendo disciolte nell\'acqua del frutto. Per formare un gel, devono verificarsi simultaneamente tre condizioni: (1) deve esserci abbastanza zucchero per competere con le molecole d\'acqua, disidratando i filamenti di pectina; (2) il pH deve scendere sotto 3,5, neutralizzando le cariche negative tramite protonazione dei gruppi carbossilici; e (3) la temperatura deve superare i 104-105 °C per sciogliere e attivare completamente la pectina. Quando queste condizioni si allineano, i filamenti di pectina formano zone di giunzione - regioni in cui le catene si associano tramite legami a idrogeno e interazioni idrofobiche - creando una rete tridimensionale continua simile a una spugna che intrappola il succo di frutta e lo sciroppo di zucchero.',
    },
    {
      type: 'title',
      text: 'Pectina ad Alto Metossile (HM) vs. Basso Metossile (LM)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La pectina è classificata in base al suo grado di esterificazione (DE), ovvero la percentuale di gruppi carbossilici esterificati con metanolo. <strong>La pectina ad alto metossile (HM)</strong> (DE > 50%) richiede un minimo di 55-65% di solidi solubili (zucchero) e un pH tra 2,8 e 3,5 per formare un gel. Questa è la pectina classica usata nelle ricette tradizionali di marmellata. Senza abbastanza zucchero, la pectina HM forma un gel debole o inesistente. <strong>La pectina a basso metossile (LM)</strong> (DE < 50%) gelifica tramite un meccanismo diverso: si reticola attraverso ioni calcio bivalenti (Ca) che formano ponti tra i gruppi carbossilici liberi. La pectina LM può gelificare con poco o nessun zucchero aggiunto, rendendola ideale per conserve ipocaloriche, adatte ai diabetici o dolcificate naturalmente. Alcune pectine LM tollerano anche un intervallo di pH più ampio fino a 5,5, utile per i frutti a bassa acidità come fichi e pere.',
    },
    {
      type: 'title',
      text: 'Contenuto Naturale di Pectina nelle Diverse Varietà di Frutta',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Non tutti i frutti sono uguali per quanto riguarda la pectina. I frutti si suddividono in tre categorie in base ai loro livelli naturali di pectina e acidità. Capire dove si colloca il tuo frutto in questo spettro determina se devi integrare con pectina in polvere o acido citrico.',
    },
    {
      type: 'table',
      headers: ['Livello di Pectina', 'Livello di Acidità', 'Frutti di Esempio', 'Pectina Aggiunta Necessaria'],
      rows: [
        ['Alto', 'Alto', 'Mela, Mirtillo Rosso, Uva Spina', '0% (nessuna)'],
        ['Alto', 'Medio/Basso', 'Mela Cotogna, Mora', '0% (nessuna)'],
        ['Medio', 'Alto', 'Lampone, Loganberry', '0,3% del peso della frutta'],
        ['Medio', 'Medio', 'Prugna, Albicocca', '0,3% del peso della frutta'],
        ['Medio', 'Basso', 'Mirtillo', '0,3% del peso della frutta'],
        ['Basso', 'Alto', 'Ciliegia, Uva', '0,6% del peso della frutta'],
        ['Basso', 'Medio', 'Pesca, Mango', '0,6% del peso della frutta'],
        ['Basso', 'Basso', 'Fragola, Pera, Fico', '0,6% del peso della frutta'],
      ],
    },
    {
      type: 'title',
      text: 'Il Ruolo Critico del pH nella Gelificazione della Marmellata',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il pH della miscela di marmellata è probabilmente la variabile più trascurata nella conservazione casalinga. A un pH superiore a 3,8, i gruppi carbossilici della pectina rimangono ionizzati (carichi negativamente), creando una repulsione elettrostatica che impedisce la formazione del gel indipendentemente dalla quantità di zucchero o pectina aggiunti. Quando il pH scende sotto 3,5 grazie all\'aggiunta di acido citrico o succo di limone, questi gruppi si protonano, consentendo la formazione di legami a idrogeno tra le catene di pectina adiacenti. La zona ottimale di gelificazione è tra pH 2,8 e 3,2. Sotto pH 2,8, il gel diventa fragile e può mostrare sineresi (essudazione di liquido). Sopra pH 3,5, si verifica altresì sineresi e il gel è troppo debole. Ecco perché i frutti a bassa acidità come fichi e fragole necessitano quasi sempre di acido citrico aggiunto - il loro pH naturale è troppo alto per attivare correttamente la pectina.',
    },
    {
      type: 'title',
      text: 'Concentrazione di Zucchero e suo Effetto sulla Forza del Gel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lo zucchero svolge due funzioni nella marmellata con pectina HM. In primo luogo, è altamente igroscopico - compete intensamente con la pectina per le molecole d\'acqua, sottraendo gli strati di idratazione dai filamenti di pectina e costringendoli a interagire tra loro. In secondo luogo, eleva il punto di ebollizione della miscela, permettendo alla marmellata di raggiungere il punto di presa di 104-105 °C. Con una concentrazione di zucchero del 65%, le catene di pectina sono sufficientemente disidratate per formare un gel forte. Sotto il 60%, il gel si indebolisce linearmente. Sopra il 68%, la marmellata può cristallizzare durante il raffreddamento quando lo zucchero supera il suo limite di solubilità. Per le marmellate con pectina LM, lo zucchero svolge solo un ruolo aromatico poiché la gelificazione dipende dai ponti di calcio. Il contenuto di zucchero può essere anche solo del 5-10% nelle conserve con pectina LM dolcificate con edulcoranti non nutritivi.',
    },
    {
      type: 'title',
      text: 'Acido Citrico vs. Succo di Limone: Conversione e Buone Pratiche',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'acido citrico (C₆H₈O₇) è l\'acido principale utilizzato nella produzione commerciale di marmellate perché è standardizzato, insapore e preciso. Le jus de citron contiene circa il 5% di acido citrico in peso, oltre ad acido malico e acido ascorbico (vitamina C). <strong>1 grammo di acido citrico puro equivale approssimativamente a 25 ml di succo di limone fresco</strong> in termini di potere abbassante del pH. Tuttavia, il succo di limone aggiunge anche volume di liquido, che deve essere considerato nel contenuto totale di acqua. Per i risultati più costanti, utilizzare acido citrico in polvere sciolto in una piccola quantità d\'acqua. Quando si utilizza succo di limone, considerare 20-30 ml extra di liquido che devono essere evaporati per raggiungere il punto di presa.',
    },
    {
      type: 'title',
      text: 'La Prova del Piattino Freddo: Un Metodo Visivo per Determinare il Punto di Presa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La tradizionale prova del piattino freddo (chiamata anche prova della grinza o prova del piattino) rimane uno dei metodi più affidabili per i produttori casalinghi di marmellata. Metti un piccolo piattino di ceramica nel congelatore per 10 minuti prima di iniziare a cucinare. Quando pensi che la marmellata abbia raggiunto il suo punto di presa, versa un cucchiaino di marmellata calda sul piattino freddo e lascia raffreddare per 30 secondi. Spingi il bordo della goccia con la punta del dito: se la superficie si increspa distintamente e la goccia mantiene la sua forma, il punto di gel è stato raggiunto. Se scorre liberamente, continua a bollire per 2-3 minuti e prova di nuovo. Questo calcolatore simula visivamente quel test, mostrandoti se le proporzioni della tua ricetta supereranno la prova del piattino prima ancora di iniziare a cucinare.',
    },
    {
      type: 'title',
      text: 'Risoluzione dei Problemi: Perché le Marmellate Falliscono e Come Risolverli',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Marmellata liquida (non si è addensata dopo il raffreddamento):</strong> La causa più comune è una bollitura insufficiente - la miscela non ha mai raggiunto i 104-105 °C. Ribollire la marmellata, aggiungendo 1-2 g di acido citrico per kg di frutta e testando con il metodo del piattino freddo. In alternativa, sciogliere 5 g di pectina in polvere in acqua fredda, incorporarla nella marmellata in ebollizione e cuocere per altri 2 minuti.',
        '<strong>Marmellata gommosa o troppo compatta:</strong> È stata aggiunta troppa pectina rispetto al peso della frutta, o la marmellata è stata troppo cotta oltre i 106 °C, degradando la rete di pectina in una struttura rigida e fragile. Per recuperare, riscaldare delicatamente con 100-200 ml di succo di mela o acqua per diluire la concentrazione di pectina.',
        '<strong>Sineresi (acqua che cola dal gel):</strong> Ciò indica un eccesso di acido (pH inferiore a 2,8) o zucchero superiore al 68%, che fanno contrarre la rete di pectina ed espellere acqua. Aggiungere una piccola quantità di bicarbonato di sodio per aumentare gradualmente il pH.',
        '<strong>Cristallizzazione (consistenza granulosa):</strong> La concentrazione di zucchero ha superato la solubilità, o cristalli di zucchero non disciolti hanno agito come siti di nucleazione. Mescolare costantemente durante l\'ebollizione finale e aggiungere 1 cucchiaio di sciroppo di mais o glucosio, che inibisce la cristallizzazione.',
        '<strong>Muffa in superficie durante la conservazione:</strong> La marmellata è stata poco cotta (non ha raggiunto la temperatura di sterilizzazione), conteneva troppo poco zucchero (sotto il 60% per pectina HM) o i vasetti non sono stati sterilizzati correttamente. Utilizzare sempre vasetti sterilizzati e trattare a bagnomaria per 10 minuti.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
