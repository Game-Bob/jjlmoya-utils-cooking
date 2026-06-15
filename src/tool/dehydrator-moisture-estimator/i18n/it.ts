import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calcolatore di Umidità per Essiccatore';
const description = "Stima la perdita di peso, l'evaporazione dell'acqua e il tempo di essiccazione dei cibi.";

const faq = [
  {
    question: "Come si calcola la perdita di peso durante l'essiccazione?",
    answer: "La perdita di peso si calcola separando il contenuto solido dall'acqua. Poiché la massa solida rimane costante, il peso finale si calcola dividendo la parte solida per 1 meno la percentuale di umidità desiderata."
  }
];

const howTo = [
  {
    name: "Seleziona un ingrediente o imposta l'umidità manuale",
    text: "Scegli un preset o configura la kelembapan iniziale a piacere."
  }
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
  slug: 'calcolatore-umidita-essiccatore',
  title,
  description,
  faqTitle: 'Domande Frequenti',
  ui: {
    title: 'Calcolatore di Umidità',
    subtitle: 'Calcola la riduzione del peso e stima il tempo di essiccazione',
    unitSystemLabel: 'Sistema di Unità',
    metricOption: 'Metrico (g, °C)',
    imperialOption: 'Imperiale (oz, °F)',
    ingredientLabel: 'Ingrediente',
    initialMoistureLabel: 'Umidità Iniziale (%)',
    targetMoistureLabel: 'Umidità Target (%)',
    weightLabel: 'Peso Iniziale',
    tempLabel: 'Temperatura di Essiccazione',
    customOption: 'Personalizzato',
    beefOption: 'Carne Secca',
    watermelonOption: 'Anguria Essiccata',
    appleOption: 'Mele Essiccate',
    mangoOption: 'Mango Essiccato',
    mushroomOption: 'Funghi',
    targetWeightLabel: 'Peso Target',
    waterEvaporatedLabel: 'Acqua Evaporata',
    estimatedHoursLabel: 'Tempo di Essiccazione Stimato',
    shrinkageLabel: 'Calo di Peso'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Quanto peso perderà il tuo cibo nell\'essiccatore? Calcola tempo di essiccazione e umidità',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Che tu stia preparando <strong>carne secca (beef jerky)</strong>, <strong>sfoglie di frutta</strong>, <strong>rondelle di mela essiccate</strong> o <strong>anguria disidratata</strong>, la chiave per ottenere risultati costanti è comprendere il contenuto di umidità. La sicurezza alimentare e la conservazione a lungo termine dipendono dal raggiungimento del corretto livello di umidità target. Il nostro <strong>stimatore di umidità dell\'essiccatore</strong> prevede il peso finale, l\'evaporazione dell\'acqua e il tempo di essiccazione in base al tuo ingrediente specifico e alle tue impostazioni.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '70%', label: 'Umidità della Carne', icon: 'mdi:food' },
        { value: '92%', label: 'Umidità dell\'Anguria', icon: 'mdi:water' },
        { value: '10%', label: 'Target per Carne Secca', icon: 'mdi:shield' },
        { value: '55°C', label: 'Temp. Media Essiccazione', icon: 'mdi:thermometer' }
      ]
    },
    {
      type: 'title',
      text: 'Qual è il giusto livello di umidità per i cibi essiccati?',
      level: 2
    },
    {
      type: 'table',
      headers: ['Ingrediente', 'Umidità Iniziale', 'Umidità Target', 'Tempo Tipico', 'Segnale di Prontezza'],
      rows: [
        ['Carne Secca', '70%', '10-15%', '4-8 ore', 'Consistenza dura, si piega senza spezzarsi'],
        ['Rondelle di Mela', '86%', '15-20%', '6-10 ore', 'Flessibile e gommosa, senza parti appiccicose'],
        ['Fette di Mango', '84%', '15-18%', '6-10 ore', 'Masticabile senza umidità visibile'],
        ['Funghi', '92%', '5-8%', '4-8 ore', 'Fragili e croccanti'],
        ['Anguria Disidratata', '92%', '10-12%', '10-16 ore', 'Si spezza nettamente quando piegata']
      ]
    },
    {
      type: 'title',
      text: 'Problemi comuni di essiccazione e come risolverli',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Indurimento superficiale (Case hardening):</strong> Lo strato esterno si asciuga troppo velocemente, intrappolando l\'umidità all\'interno. Riduci la temperatura di 5-10 °C e aumenta la circolazione dell\'aria.',
        '<strong>Muffa durante la conservazione:</strong> Il cibo non è stato essiccato a un livello di umidità sufficientemente basso. Usa il calcolatore per trovare il peso target e verifica con un test di umidità.',
        '<strong>Essiccazione non uniforme:</strong> I pezzi sono stati tagliati a spessori diversi o l\'essiccatore è sovraccarico. Taglia pezzi uniformi e lascia spazio tra di loro.',
        '<strong>Cibo troppo secco e fragile:</strong> Un\'essiccazione eccessiva causa la perdita di sapore e consistenza. Controlla i livelli di umidità target per il tuo ingrediente specifico.'
      ]
    },
    {
      type: 'title',
      text: 'Guia alle temperature di essiccazione per tipo di cibo',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'La temperatura influenza sia la velocità di essiccazione che la qualità degli alimenti. Temperature più elevate fanno evaporare l\'acqua più velocemente ma possono causare indurimento superficiale, perdita di nutrienti e risultati non uniformi. Usa queste linee guida generali per l\'essiccatore:'
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Bassa temperatura da 40 a 50 °C',
          icon: 'mdi:thermometer',
          description: 'Ideale per preservare enzimi, nutrienti e aromi delicati.',
          points: ['Erbe e verdure a foglia', 'Funghi', 'Conservazione dei cibi crudi', 'Richiede tempi di essiccazione più lunghi']
        },
        {
          title: 'Media temperatura da 50 a 60 °C',
          icon: 'mdi:thermometer',
          description: 'Intervallo standard per la maggior parte di frutta e verdura.',
          highlight: true,
          points: ['Rondelles di mela e fette di mango', 'La maggior parte delle verdure', 'Sfoglie di frutta', 'Bilanciamento tra velocità e qualità']
        },
        {
          title: 'Alta temperatura da 60 a 70 °C',
          icon: 'mdi:thermometer',
          description: 'Utilizzata per carne secca e alimenti densi che richiedono sicurezza alimentare.',
          points: ['Carne secca di manzo e tacchino', 'Ortaggi a radice densi', 'Priorità di sicurezza alimentare', 'Finestra di essiccazione più breve']
        }
      ]
    },
    {
      type: 'tip',
      title: 'Tratta sempre la frutta in anticipo',
      html: 'Immergi mele, banane e pere in succo di limone o in una soluzione di acido ascorbico prima di essiccarle per prevenire l\'annerimento e preservare il colore.'
    },
    {
      type: 'tip',
      title: 'Ruota i vassoi durante l\'essiccazione',
      html: 'Gli essiccatori hanno spesso punti più caldi. Ruota i vassoi dall\'alto in basso e da davanti a dietro ogni 2-3 ore per un\'essiccazione uniforme.'
    },
    {
      type: 'tip',
      title: 'Condiziona prima di conservare',
      html: 'Dopo l\'essiccazione, lascia raffreddare il cibo e condizionalo in un contenitore sigillato per 1 settimana. Scuoti ogni giorno. Se appare condensa, serve altra essiccazione.'
    },
    {
      type: 'title',
      text: 'Glossario dell\'umidità nell\'essiccazione',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Indurimento superficiale', definition: 'Una condizione in cui la superficie esterna del cibo si asciuga troppo rapidamente, formando un guscio duro che intrappola l\'umidità all\'interno e impedisce una corretta disidratazione.' },
        { term: 'Attività dell\'acqua (aw)', definition: 'Una misura dell\'acqua libera disponibile per la crescita microbiano. I cibi essiccati stabili a scaffale hanno tipicamente un valore aw inferiore a 0,60.' },
        { term: 'Contenuto di umidità', definition: 'La percentuale del peso dell\'acqua rispetto al peso totale del cibo. Utilizzata per determinare il progresso dell\'essiccazione e i livelli target per la sicurezza alimentare.' },
        { term: 'Rapporto di restringimento', definition: 'La proporzione del peso originale che rimane dopo la disidratazione. Una metrica chiave per pianificare la dimensione dei lotti e la conservazione.' }
      ]
    },
    {
      type: 'summary',
      title: 'Punti chiave per un\'essiccazione perfetta',
      items: [
        'Ingredienti diversi hanno livelli di umidità iniziale molto diversi (70-92%). Usa i preset per stime accurate.',
        'L\'umidità target varia in base al cibo: 10% per carne secca, 15-20% per frutta, 5-8% per verdure e funghi.',
        'La temperatura influisce sia sulla velocità che sulla qualità. Rimani nell\'intervallo 50-60 °C per la maggior parte dei cibi.',
        'L\'indurimento superficiale rovina la consistenza. Evita temperature superiori a 70 °C e garantisci una buona circolazione dell\'aria.',
        'Condiziona sempre i cibi essiccati per 1 settimana prima della conservazione a lungo termine per garantire una distribuzione uniforme dell\'umidità.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
