import type { ToolLocaleContent } from '../../../types';

const title = "Timer da Cucina Multiplo";
const description = "Gestisci più tempi di cottura contemporaneamente. Allarmi indipendenti, ideale per chef e per l'organizzazione in cucina (Mise en Place).";
const faq = [
  {
    question: 'Quanti timer posso creare?',
    answer: 'Illimitati. Aggiungine quanti ne vuoi con il pulsante "+". Ideale per cucinare più piatti contemporaneamente: pasta che bolle, salsa che restringe, carne che riposa e forno acceso, tutto insieme.',
  },
  {
    question: 'Perché è importante il tempo di riposo per la carne?',
    answer: 'Quando tagli la carne appena tolta dal fuoco, i succhi fuoriescono nel piatto. Se la lasci riposare 5-10 minuti, le fibre si rilassano e i succhi si ridistribuiscono. Risultato: carne succosa invece che secca. Il riposo è cottura passiva.',
  },
  {
    question: 'Funziona con lo schermo bloccato?',
    answer: 'Sì, ma devi concedere i permessi per le notifiche. I timer continuano a scorrere in background e ti avviseranno con un suono e una notifica del browser anche se cambi scheda o blocchi il cellulare.',
  },
  {
    question: 'Cos\'è la "Zona di Pericolo" alimentare?',
    answer: 'Tra i 5°C e i 65°C i batteri si moltiplicano rapidamente. Gli alimenti cotti non dovrebbero stare in questa zona per più di 2 ore (1 ora se la temperatura è >30°C). Usa un timer per controllare il raffreddamento prima di refrigerare.',
  },
];
const howTo = [
  {
    name: 'Crea più timer',
    text: 'Usa il pulsante "+" per aggiungere tutti i timer di cui hai bisogno. Ideale per coordinare più piatti contemporaneamente.',
  },
  {
    name: 'Personalizza ogni timer',
    text: 'Cambia il nome di ogni timer per identificare cosa stai cucinando: "Forno", "Riso", "Salsa", ecc.',
  },
  {
    name: 'Controlla dal dock mobile',
    text: 'Sui dispositivi mobili, i timer attivi appaiono in un dock scorrevole nella parte inferiore. Metti in pausa o riavvia direttamente da lì.',
  },
  {
    name: 'Ricevi notifiche',
    text: 'Autorizza le notifiche affinché il browser ti avvisi quando scade il tempo, anche se cambi scheda.',
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
  slug: 'timer-cucina',
  title: 'Timer da Cucina Multiplo',
  description: 'Gestisci più tempi di cottura contemporaneamente. Allarmi indipendenti, ideale per chef e per l\'organizzazione in cucina (Mise en Place).',
  faqTitle: 'Domande Frequenti',
  bibliographyTitle: 'Riferimenti',
  ui: {
    addTimer: 'Aggiungi Timer',
    stopAll: 'Ferma Tutti',
    defaultName: 'Timer',
    newTimerName: 'Nuovo Timer',
    timerDefault1: 'Timer 1',
    timerDefault2: 'Timer 2',
    timerDefault3: 'Timer 3',
    label: 'Etichetta',
    hours: 'Ore',
    minutes: 'Min',
    seconds: 'Sec',
    ready: 'Pronto',
    start: 'Avvia',
    pause: 'Pausa',
    reset: 'Reset',
    addOneMin: '+1 min',
    addFiveMin: '+5 min',
    statusReady: 'Pronto',
    statusRunning: 'In corso',
    statusPaused: 'In pausa',
    statusFinished: 'TEMPO!',
    finishNotification: 'Timer terminato per',
  },
  faq,
  bibliography: [
    {
      name: 'Sicurezza Alimentare: USDA Guidelines',
      url: 'https://www.fsis.usda.gov/',
    },
    {
      name: 'Mise en Place - La Cucina Professionale',
      url: 'https://www.escoffier.edu/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Maestria Temporale in Cucina',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La cucina professionale non si basa solo su ricette, ma sulla <strong>gestione precisa del tempo</strong>. Il concetto francese <em>"Mise en Place"</em> (ogni cosa al suo posto) include il tempo come un ingrediente fondamentale.',
    },
    {
      type: 'paragraph',
      html: 'Questo strumento <strong>Timer Multiplo</strong> è stato progettato per chef amatoriali e professionisti che devono coordinare una sinfonia di piatti contemporaneamente.',
    },
    {
      type: 'title',
      text: 'Il Ruolo di Temperatura e Tempo',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Alimento', 'Punto di Cottura', 'Tempo', 'Vantaggio'],
      rows: [
        ['Uovo alla coque', 'Tuorlo liquido', '3-4 min', 'Proteina morbida, digeribile'],
        ['Uovo Barzotto', 'Tuorlo denso', '5-6 min', 'Equilibrio di consistenza'],
        ['Uovo Sodo', 'Sodo', '9-11 min', 'Massima densità'],
        ['Carne - Rosolatura', 'Alta temperatura', '1-2 min/lato', 'Reazione di Maillard'],
        ['Carne - Riposo', 'Riposo', '5-20 min', 'Ridistribuzione succhi'],
      ],
    },
    {
      type: 'title',
      text: 'Sicurezza Alimentare: La Zona di Pericolo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il tempo influisce anche sulla sicurezza. La "Zona di Pericolo" batterica è tra i 5°C e i 65°C. Gli alimenti non dovrebbero restare in questo intervallo per più di <strong>2 ore</strong>.',
    },
    {
      type: 'title',
      text: 'Consigli Professionali di Organizzazione',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Scagliona i tempi:</strong> se tutto finisce insieme, sarà difficile impiattare con cura.',
        '<strong>Usa il calore residuo:</strong> spegni il fuoco 1-2 minuti prima della fine del timer.',
        '<strong>Nomina i timer:</strong> usa le etichette per "Forno", "Riso" o "Salsa".',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Consiglio professionale:</strong> la precisione del tempo distingue uno chef da un cuoco amatoriale. Affidati allo strumento per garantire costanza nei tuoi piatti.',
    },
  ],
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
