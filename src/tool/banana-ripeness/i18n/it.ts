import type { ToolLocaleContent } from '../../../types';

const title = "Diagnosi e Conservazione delle Banane: Guida Scientifica";
const description = "Analizza lo stato di maturazione delle tue banane con precisione scientifica. Apprendi tecniche di conservazione, la biochimica dell'etilene e l'ottimizzazione nutrizionale.";
const faq = [
  {
    question: 'Perché le banane diventano nere in frigorifero?',
    answer: "Il freddo rompe le pareti cellulari della buccia, rilasciando enzimi che ossidano i fenoli e creano polifenoli neri. Tuttavia, l'interno tende a conservarsi sodo e dolce più a lungo che all'esterno.",
  },
  {
    question: 'Come posso far maturare una banana velocemente?',
    answer: "Mettile in un sacchetto di carta chiuso con una mela o un pomodoro. Questi emettono gas etilene, che accelera la maturazione. Se hai molta fretta, puoi metterle per qualche minuto in forno a bassa temperatura.",
  },
  {
    question: 'È sicuro mangiare banane con macchie marroni?',
    answer: "Sì, assolutamente. Infatti, le macchie indicano che l'amido si è trasformato in zucchero, rendendole più dolci e digeribili. Scartale solo se presentano muffa, hanno un cattivo odore o sono eccessivamente molli.",
  },
  {
    question: "Cos'è l'etilene?",
    answer: "È un ormone vegetale in forma gassosa che regola la crescita e la maturazione. La banana è un frutto climaterico, il che significa che continua a produrre etilene e a maturare anche dopo essere stata raccolta.",
  },
];
const howTo = [
  {
    name: 'Osserva il colore',
    text: 'Esamina attentamente il colore della buccia, dal verde al marrone scuro, per determinare lo stato attuale di maturazione.',
  },
  {
    name: 'Usa il simulatore',
    text: 'Fai scorrere l\'indicatore di maturazione per vedere previsioni precise su quando sarà raggiunta la fase successiva.',
  },
  {
    name: 'Regola le condizioni',
    text: 'Modifica temperatura e umidità per vedere come influenzano la velocità di maturazione.',
  },
  {
    name: 'Applica la conservazione',
    text: 'Segui le raccomandazioni specifiche di conservazione e accelerazione in base allo stato attuale.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'diagnosi-banane',
  title: 'Diagnosi e Conservazione delle Banane: Guida Scientifica',
  description: 'Analizza lo stato di maturazione delle tue banane con precisione scientifica. Apprendi tecniche di conservazione, la biochimica dell\'etilene e l\'ottimizzazione nutrizionale.',
  faqTitle: 'Domande Frequenti',
  bibliographyTitle: 'Fonti e Riferimenti',
  ui: {
    ripesnessLabel: 'Stato di Maturazione',
    nextStageLabel: 'Prossima Tappa tra',
    daysUnit: 'Giorni',
    tempLabel: 'Temperatura',
    humidityLabel: 'Umidità',
    partnerToggleTitle: 'Accompagnamento Climaterico',
    partnerToggleSubtitle: 'Effetto etilene esterno',
    conservationTitle: 'Conservazione',
    accelerationTitle: 'Accelerazione',
    stage1Name: 'Verde Smeraldo',
    stage1Desc: 'Massimo contenuto di amido resistente. Compattezza totale.',
    stage1Conservation: 'Ambiente (18-20°C). Evitare il freddo (<12°C).',
    stage1Acceleration: 'Sacchetto di carta con una mela o un pomodoro maturo.',
    stage2Name: 'Giallo Radiante',
    stage2Desc: 'Equilibrio perfetto tra compattezza e dolcezza iniziale.',
    stage2Conservation: 'Luogo fresco, separare dal casco per frenare l\'etilene.',
    stage2Acceleration: 'Mantenere nel casco e avvolgere in plastica.',
    stage3Name: 'Maculato Dolce',
    stage3Desc: 'Picco di antiossidanti. Dolcezza intensa e consistenza cremosa.',
    stage3Conservation: 'Refrigerare per conservare la polpa (anche se la buccia scurisce).',
    stage3Acceleration: 'Calore dolce (vicino a una fonte di calore, non diretta).',
    stage4Name: 'Maturo Cannella',
    stage4Desc: 'Consistenza molto molle. Ideale per pasticceria senza zucchero.',
    stage4Conservation: 'Sbucciare e congelare immediatamente.',
    stage4Acceleration: 'Ha già raggiunto il suo massimo.',
    stage5Name: 'Passato / Fermentato',
    stage5Desc: 'Processo di degradazione avanzato.',
    stage5Conservation: 'Sconsigliato per il consumo diretto.',
    stage5Acceleration: 'N/D',
  },
  faq: [
    {
      question: 'Perché le banane diventano nere in frigorifero?',
      answer: "Il freddo rompe le pareti cellulari della buccia, rilasciando enzimi che ossidano i fenoli e creano polifenoli neri. Tuttavia, l'interno tende a conservarsi sodo e dolce più a lungo che all'esterno.",
    },
    {
      question: 'Come posso far maturare una banana velocemente?',
      answer: "Mettile in un sacchetto di carta chiuso con una mela o un pomodoro. Questi emettono gas etilene, che accelera la maturazione. Se hai molta fretta, puoi metterle per qualche minuto in forno a bassa temperatura.",
    },
    {
      question: 'È sicuro mangiare banane con macchie marroni?',
      answer: "Sì, assolutamente. Infatti, le macchie indicano che l'amido si è trasformato in zucchero, rendendole più dolci e digeribili. Scartale solo se presentano muffa, hanno un cattivo odore o sono eccessivamente molli.",
    },
    {
      question: "Cos'è l'etilene?",
      answer: "È un ormone vegetale in forma gassosa che regola la crescita e la maturazione. La banana è un frutto climaterico, il che significa che continua a produrre etilene e a maturare anche dopo essere stata raccolta.",
    },
  ],
  howTo: [
    {
      name: 'Osserva il colore',
      text: 'Esamina attentamente il colore della buccia, dal verde al marrone scuro, per determinare lo stato attuale di maturazione.',
    },
    {
      name: 'Usa il simulatore',
      text: 'Fai scorrere l\'indicatore di maturazione per vedere previsioni precise su quando sarà raggiunta la fase successiva.',
    },
    {
      name: 'Regola le condizioni',
      text: 'Modifica temperatura e umidità per vedere come influenzano la velocità di maturazione.',
    },
    {
      name: 'Applica la conservazione',
      text: 'Segui le raccomandazioni specifiche di conservazione e accelerazione in base allo stato attuale.',
    },
  ],
  bibliography: [
    {
      name: 'Ethylene and Fruit Ripening: A Biological Review',
      url: '',
    },
    {
      name: 'Biochemical Changes in Musa acuminata during Ripening (Journal of Food Science)',
      url: 'https://www.foodsciencejournal.com/assets/archives/2017/vol2issue5/2-5-31-566.pdf',
    },
    {
      name: 'The Role of Respiration in Climacteric Fruits (Scientific American)',
      url: 'https://www.nature.com/articles/226976b0',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Scienza della maturazione del Musa × paradisiaca',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La banana è uno dei frutti più consumati al mondo, ma anche uno dei più incompresi biologicamente. A differenza dei frutti non climaterici, come gli agrumi o l\'uva, la banana è un <strong>frutto climaterico</strong>. Ciò significa che continua a maturare dopo essere stata raccolta, aumentando drasticamente la sua respirazione cellulare e la produzione di un fitormone gassoso fondamentale: l\'<strong>etilene</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Da un punto di vista biochimico, la maturazione è una cascata di eventi enzimatici. Durante questo processo, enzimi come l\'amilasi scompongono i carboidrati complessi (amidi) in zuccheri semplici (fruttosio, glucosio e saccarosio). Questo cambiamento non solo altera il sapore, rendendolo più dolce, ma modifica anche la consistenza degradando la pectina delle pareti cellulari, dando origine alla morbidezza cremosa tipica della banana matura.',
    },
    {
      type: 'title',
      text: 'Il Ciclo dell\'Etilene',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'etilene funge da interruttore biologico. Una volta che il frutto ne rileva una piccola concentrazione, attiva i geni responsabili della produzione di altro etilene, creando un ciclo di feedback positivo. È per questo che una banana molto matura accelererà la maturazione di tutte le sue vicine nella fruttiera. Per rallentare questo processo, è vitale isolare gli esemplari che presentano già macchie marroni da quelli ancora verdi.',
    },
    {
      type: 'title',
      text: 'Il Mito del Frigorifero',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esiste la credenza popolare che le banane non debbano andare in frigo. La realtà è più complessa: il freddo (sotto i 12°C) causa danni da raffreddamento nelle cellule della buccia, rilasciando enzimi che ossidano i fenoli e rendono la pelle nera. Tuttavia, questo riguarda solo l\'estetica esteriore. Se l\'interno ha già raggiunto la maturità desiderata, il freddo fermerà quasi completamente l\'ammorbidimento della polpa, conservando sapore e consistenza interna per diversi giorni aggiuntivi.',
    },
    {
      type: 'title',
      text: 'Strategie Avanzate di Conservazione',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Sigillatura del Peduncolo:</strong> Avvolgere il picciolo del casco con pellicola trasparente riduce drasticamente il rilascio di etilene, estendendo la vita utile commerciale dell\'unità fino a 72 ore aggiuntive.',
    },
    {
      type: 'paragraph',
      html: '<strong>Sospensione Dinamica:</strong> Appendere le banane evita le ammaccature da pressione. I tessuti danneggiati rilasciano etilene più velocemente, creando focolai di maturazione accelerata che si propagano a tutto il frutto.',
    },
    {
      type: 'paragraph',
      html: '<strong>Crioterapia (Congelamento):</strong> Per le banane in fase 4 (marroni), il congelamento è l\'opzione migliore. Sbucciare il frutto prima di congelarlo evita che l\'umidità rimanga intrappolata, mantenendo la qualità della fibra.',
    },
    {
      type: 'title',
      text: 'Cambiamenti Nutrizionali per Fase',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Man mano che la banana matura, il suo profilo nutrizionale si trasforma radicalmente, permettendo di utilizzarla come uno strumento dietetico specifico a seconda degli obiettivi del consumatore.',
    },
    {
      type: 'table',
      headers: ['Fase', 'Amido Resistente', 'Caratteristiche', 'Beneficio Principale'],
      rows: [
        ['Verde (1-2)', '~80%', 'Molto soda, massimo contenuto di amido', 'Salute intestinale e controllo glicemico'],
        ['Gialla (3)', '~5%', 'Equilibrio tra sodezza e dolcezza', 'Energia rapida e vitamine B'],
        ['Maculata (4)', 'Minimo', 'Molto morbida, alto contenuto di zuccheri', 'Massimo potenziale antiossidante'],
        ['Marrone/Passata (5)', 'Praticamente nullo', 'Consistenza molto molle, fermentazione avanzata', 'Sconsigliata per il consumo'],
      ],
    },
    {
      type: 'title',
      text: 'Conclusione e Applicazione Pratica',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Ridurre lo spreco alimentare:</strong> La diagnosi precisa dello stato di una banana permette di identificare il momento ottimale di consumo, evitando di perdere frutti preziosi.',
        '<strong>Ottimizzare i benefici nutrizionali:</strong> Dall\'amido resistente dei frutti verdi per la salute intestinale, agli antiossidanti di quelli maculati per il massimo potenziale antiossidante.',
        '<strong>Pianificare il consumo strategico:</strong> Adatta l\'uso della banana ai tuoi obiettivi di salute: controllo glicemico, energia rapida, digestione o antiossidanti.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Allerta degradazione:</strong> Fattori esterni come umidità relativa superiore all\'85% o temperature sopra i 25°C possono accelerare drasticamente la degradazione, rendendo la banana da ottimale a immangiabile in poche ore. Questo simulatore ti aiuta ad anticipare questi cambiamenti e a pianificare strategicamente.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
