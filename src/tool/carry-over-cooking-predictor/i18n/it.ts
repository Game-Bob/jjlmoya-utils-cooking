import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calcolatore di Cottura Residua: Calcolatore di Inerzia Termica';
const description = 'Prevedi di quanti gradi il tuo arrosto continuerà a cuocere dopo averlo estratto dal forno. Ottieni la temperatura di sfornatura esatta per una cottura media perfetta.';

const faq = [
  {
    question: 'Cos\'è la cottura residua e perché avviene?',
    answer: 'La cottura residua, chiamata anche inerzia termica, è il continuo aumento della temperatura interna dopo che il cibo è stato rimosso dal forno. Il calore immagazzinato negli strati esterni continua a condursi verso il centro. Un arrosto sfornato a 50°C può raggiungere 54°C durante il riposo - la differenza tra al sangue e cottura media.',
  },
  {
    question: 'In che modo la temperatura del forno influisce sulla cottura residua?',
    answer: 'Temperature del forno più elevate (200-250°C) creano un gradiente termico maggiore tra la superficie e il cuore, immagazzinando più calore latente nella crosta. Questo aumenta l\'effetto residuo. Un arrosto cotto a 120°C avrà una cottura residua minima (~1°C), mentre uno a 220°C può guadagnare 5-8°C durante il riposo.',
  },
  {
    question: 'La forma della carne cambia il calcolo della cottura residua?',
    answer: 'Sì. La geometria influisce significativamente sulla penetrazione del calore. I volatili interi e gli arrosti spessi hanno più massa termica rispetto alla superficie, quindi trattengono più calore e hanno una maggiore cottura residua. I tagli piatti come le bistecche hanno un alto rapporto superficie-volume e si raffreddano rapidamente, con una cottura residua minima.',
  },
  {
    question: 'Per quanto tempo devo far riposare la carne dopo averla sfornata?',
    answer: 'Il tempo di riposo dipende dal peso e dalla geometria. Una regola generale è di circa 1 minuto per ogni 100g di carne, minimo 10 minuti, massimo 45 minuti. Un arrosto di 2kg necessita di circa 16 minuti di riposo. Durante questo periodo la temperatura interna si equalizza e l\'effetto di cottura residua si completa.',
  },
];

const howTo = [
  {
    name: 'Seleziona la geometria della carne',
    text: 'Scegli Volatile Intero per il pollame, Arrosto Cilindrico per filetti e tagli disossati, o Taglio Piatto per bistecche e medaglioni.',
  },
  {
    name: 'Inserisci il peso',
    text: 'Inserisci il peso totale del tuo taglio in grammi. Si applicano pesi minimi per ogni tipo di geometria.',
  },
  {
    name: 'Imposta la temperatura del forno',
    text: 'Inserisci la temperatura effettiva del tuo forno. Temperature più alte aumentano l\'effetto di cottura residua.',
  },
  {
    name: 'Imposta la temperatura target',
    text: 'Inserisci la temperatura interna finale desiderata (es. 54°C per manzo a cottura media, 74°C per il pollame).',
  },
  {
    name: 'Leggi la temperatura di sfornatura',
    text: 'Il calcolatore ti dice esattamente quando sfornare la carne per raggiungere il tuo target dopo il riposo.',
  },
  {
    name: 'Fai riposare la carne',
    text: 'Lascia riposare la carne per il tempo consigliato. Non coprirla troppo strettamente o la crosta si ammorbidirà.',
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
  slug: 'predittore-cottura-residua',
  title: 'Calcolatore di Cottura Residua',
  description: 'Prevedi di quanti gradi il tuo arrosto continuerà a cuocere dopo averlo estratto dal forno. Ottieni la temperatura di sfornatura esatta per una cottura media perfetta.',
  faqTitle: 'Domande Frequenti',
  ui: {
    title: 'Calcolatore di Cottura Residua',
    subtitle: 'Calcolatore di inerzia termica per arrosti di precisione',
    geometryLabel: 'Geometria della Carne',
    wholeBird: 'Volatile Intero (Pollo, Tacchino)',
    cylindricalRoast: 'Arrosto Cilindrico (Filetto, Disossato)',
    flatCut: 'Taglio Piatto (Bistecca, Medaglione)',
    weightLabel: 'Peso',
    ovenTempLabel: 'Temperatura del Forno',
    targetTempLabel: 'Temperatura Interna Target',
    pullTemp: 'Temperatura di Sfornatura',
    carryOver: 'Cottura Residua',
    restTime: 'Tempo di Riposo',
    minutes: 'min',
    degreesC: '°C',
    degreesF: '°F',
    unitLabel: 'Unità',
    metricUnit: 'Metrico',
    imperialUnit: 'Imperiale',
    geometryDescCylindrical: 'Geometria cilindrica selezionata - inerzia termica moderata con cottura residua prevedibile.',
    weightG: 'g',
    weightOz: 'oz',
    errorTargetExceedsOven: 'La temperatura target non può superare la temperatura del forno.',
    errorOvenTooHot: 'La temperatura del forno supera i 350°C. Abbassa la temperatura.',
    errorWeightTooLow: 'Il peso è inferiore al minimo per questa geometria.',
    errorWeightTooHigh: 'Il peso supera il massimo per questa geometria.',
    pullNow: 'Sforna la carne ora',
    pullAt: 'Sfornare a',
    toReach: 'per raggiungere',
    afterRest: 'dopo il riposo',
    carryOverWillAdd: 'La cottura residua aggiungerà circa',
    footerTemplate: '{carry} residua · {rest} riposo · {weight}{wunit}, {oven} forno → {target} target',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Calcolatore di Cottura Residua: Ottieni la Temperatura di Sfornatura Perfetta Ogni Volta',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La cottura residua è il continuo aumento della temperatura interna dopo che il cibo esce dal forno. Gli strati esterni immagazzinano calore durante la cottura, e questa energia continua a condursi verso il centro più freddo durante il riposo. Un arrosto spesso sfornato a 50°C può raggiungere 54°C dopo il riposo - la differenza tra al sangue e cottura media. Questo calcolatore prevede esattamente di quanti gradi salirà il tuo arrosto in modo che tu possa sfornarlo al momento preciso.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5-8°C', label: 'Residuo tipico (forno caldo)', icon: 'mdi:thermometer' },
        { value: '1-3°C', label: 'Residuo minimo (forno basso)', icon: 'mdi:thermometer-low' },
        { value: '16 min', label: 'Riposo per arrosto di 2kg', icon: 'mdi:clock-outline' },
        { value: '45 min', label: 'Riposo massimo consigliato', icon: 'mdi:clock-alert' },
      ],
    },
    {
      type: 'title',
      text: 'Tabella delle Temperature di Sfornatura per Grado di Cottura',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Usa questa tabella per trovare la tua temperatura interna target, poi lascia che il calcolatore determini la temperatura di sfornatura esatta. Ricorda: la temperatura di sfornatura è sempre <strong>inferiore</strong> al tuo target perché l\'effetto di cottura residua continuerà la cottura durante il riposo.',
    },
    {
      type: 'table',
      headers: ['Grado di Cottura', 'Temp. Target', 'Temp. Sfornatura (forno 200°C)', 'Tempo Riposo'],
      rows: [
        ['Manzo al Sangue', '52°C / 126°F', '46-48°C / 115-118°F', '10-15 min'],
        ['Manzo Cottura Media', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 min'],
        ['Manzo Media Cottura', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 min'],
        ['Manzo Ben Cotto', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 min'],
        ['Maiale Cottura Media', '63°C / 145°F', '57-59°C / 135-138°F', '10-15 min'],
        ['Maiale Ben Cotto', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 min'],
        ['Petto di Pollo/Tacchino', '74°C / 165°F', '68-70°C / 154-158°F', '15-20 min'],
        ['Coscia di Pollo/Tacchino', '82°C / 180°F', '76-78°C / 169-172°F', '15-20 min'],
        ['Agnello Cottura Media', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 min'],
        ['Agnello Media Cottura', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 min'],
      ],
    },
    {
      type: 'title',
      text: 'Come la Geometria Cambia il Calcolo Termico',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Volatile Intero',
          icon: 'mdi:food-drumstick',
          description: 'Massa termica massima rispetto alla superficie. I grossi centri di petto e coscia immagazzinano un enorme calore latente.',
          highlight: false,
          points: ['Residuo: 5-10°C da forno a 200°C', 'Riposo: 20-45 minuti', 'Ideale per: tacchino, pollo intero, anatra', 'Sfornare 8-10°C sotto il target'],
        },
        {
          title: 'Arrosto Cilindrico',
          icon: 'mdi:food-steak',
          description: 'La forma di arrosto più comune. Ritenzione di calore moderata con valori di cottura residua prevedibili.',
          highlight: true,
          points: ['Residuo: 3-7°C da forno a 200°C', 'Riposo: 15-30 minuti', 'Ideale per: filetto, lonza di maiale, carré d\'agnello', 'Sfornare 5-7°C sotto il target'],
        },
        {
          title: 'Taglio Piatto',
          icon: 'mdi:food',
          description: 'L\'alto rapporto superficie-volume fa sì che il calore si disperda rapidamente. La cottura residua è minima ma conta comunque.',
          highlight: false,
          points: ['Residuo: 1-3°C da forno a 200°C', 'Riposo: 5-15 minuti', 'Ideale per: bistecche, petto di pollo, filetto di pesce', 'Sfornare 1-3°C sotto il target'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Errori Comuni di Cottura Residua e Come Risolverli',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Sfornare troppo tardi',
      html: 'Se aspetti che il termometro segni la tua temperatura target prima di sfornare, la cottura residua supererà di 3-8°C. Un arrosto a cottura media diventa media cottura o ben cotto. <strong>Sforna sempre 5-8°C sotto il tuo target.</strong> Usa questo calcolatore per ottenere il numero esatto.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Tagliare troppo presto',
      html: 'Tagliare un arrosto immediatamente dopo averlo sfornato rilascia fino al 30% dei succhi. Il gradiente termico non ha tempo di equalizzarsi, quindi il centro rimane crudo mentre gli strati esterni si scuociono. <strong>Rispetta il tempo di riposo completo consigliato.</strong> Copri leggermente con alluminio - non avvolgere stretto o il vapore ammorbidirà la crosta.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Temperatura del forno troppo bassa',
      html: 'Un forno basso (sotto i 150°C / 300°F) crea un gradiente termico minimo tra superficie e cuore. Questo significa quasi nessun effetto di cottura residua. Se cucini a bassa temperatura, puoi sfornare alla tua temperatura target esatta con rischio minimo di superamento. Tuttavia, lo sviluppo della crosta sarà significativamente ridotto.',
    },
    {
      type: 'title',
      text: 'Consigli Professionali per un Arrosto Perfetto',
      level: 3,
    },
    {
      type: 'tip',
      title: 'La Regola dei 10 Gradi',
      html: 'Un forno caldo (220°C / 425°F) aggiunge circa 1°C di cottura residua per ogni 100g di carne per i volatili interi, e 0.7°C per 100g per gli arrosti cilindrici. Usalo come verifica incrociata con il calcolatore: un pollo di 2kg a 220°C dovrebbe avere circa 7-9°C di cottura residua.',
    },
    {
      type: 'tip',
      title: 'La Posizione di Riposo Conta',
      html: 'Fai sempre riposare la carne su un piatto caldo o un tagliere, non su una superficie fredda. Una superficie fredda sottrarrà calore dalla base dell\'arrosto, creando temperature finali disomogenee. Per i volatili interi, riposa con il petto verso l\'alto in modo che i succhi si ridistribuiscano uniformemente nella carne bianca.',
    },
    {
      type: 'tip',
      title: 'Coprire, Non Avvolgere',
      html: 'Copri leggermente l\'arrosto con alluminio durante il riposo. Avvolgere stretto intrappola il vapore e rende la crosta molle. Una copertura leggera riduce la perdita di calore di circa il 30% permettendo al vapore di fuoriuscire, preservando sia l\'effetto di cottura residua che l\'esterno croccante.',
    },
    {
      type: 'title',
      text: 'Glossario dei Termini Chiave della Cottura al Forno',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Cottura Residua', definition: 'Il continuo aumento della temperatura interna dopo che il cibo è stato rimosso dalla fonte di calore, causato dalla conduzione del calore dagli strati esterni verso il centro.' },
        { term: 'Temperatura di Sfornatura', definition: 'La temperatura interna alla quale rimuovere la carne dal forno. Sempre inferiore alla temperatura target per compensare la cottura residua.' },
        { term: 'Temperatura Target', definition: 'La temperatura interna finale che si desidera che la carne raggiunga dopo il riposo. Chiamata anche temperatura di servizio.' },
        { term: 'Inerzia Termica', definition: 'La tendenza di una massa a resistere ai cambiamenti di temperatura. I tagli più pesanti e densi hanno un\'inerzia termica maggiore e una cottura residua più pronunciata.' },
        { term: 'Riposo', definition: 'Il periodo dopo la cottura in cui la carne riposa indisturbata, permettendo al calore di equalizzarsi e ai succhi di redistribuirsi nelle fibre.' },
        { term: 'Gradiente Termico', definition: 'La differenza di temperatura tra la superficie della carne e il suo cuore. Un gradiente maggiore immagazzina più calore latente per la cottura residua.' },
        { term: 'Calore Latente', definition: 'L\'energia termica immagazzinata negli strati esterni della carne durante la cottura. Questa energia viene rilasciata mentre la temperatura si equalizza durante il riposo.' },
      ],
    },
    {
      type: 'title',
      text: 'Riferimento Rapido: Temperature di Sfornatura Consigliate',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Sforna a queste temperature per risultati perfetti (forno a 200°C / 400°F)',
      items: [
        'Manzo cottura media: sfornare a 48-50°C / 118-122°F, target 54°C / 129°F',
        'Manzo media cottura: sfornare a 54-56°C / 129-133°F, target 60°C / 140°F',
        'Lonza di maiale: sfornare a 57-59°C / 135-138°F, target 63°C / 145°F',
        'Petto di pollo: sfornare a 68-70°C / 154-158°F, target 74°C / 165°F',
        'Tacchino intero: sfornare a 68-70°C / 154-158°F, target 74°C / 165°F (petto)',
        'Carré d\'agnello: sfornare a 48-50°C / 118-122°F, target 54°C / 129°F',
      ],
    },
    {
      type: 'paragraph',
      html: 'Ogni arrosto è diverso. Il peso, la temperatura esatta del forno e la forma del taglio modificano tutti questi numeri. Questo è esattamente ciò che fa questo calcolatore - prende i tuoi dati specifici e calcola la temperatura di sfornatura precisa per la tua situazione esatta. Niente congetture, niente arrosti rovinati.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
