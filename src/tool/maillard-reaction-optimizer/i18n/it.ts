import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Ottimizzatore della Reazione di Maillard: Calcolatore di Imbrunimento con pH e Temperatura";
const description = 'Calcola esattamente quanto bicarbonato aggiungere per chilo di alimento per accelerare la reazione di Maillard. Evita sapori saponosi restando entro limiti di alcalinità sicuri.';

const faq = [
  {
    question: "Cos'è la reazione di Maillard e perché è importante in cucina?",
    answer: "La reazione di Maillard è una reazione chimica tra amminoacidi e zuccheri riducenti che conferisce al cibo imbrunito il suo sapore caratteristico. È responsabile della crosta sulla bistecca scottata, del colore dorato del pane, del caffè tostato e delle cipolle caramellate. La reazione avviene più rapidamente tra 140°C e 165°C.",
  },
  {
    question: "In che modo il bicarbonato (bicarbonato di sodio) accelera l'imbrunimento?",
    answer: "Il bicarbonato alza il pH della superficie dell'alimento, rendendola più alcalina. La reazione di Maillard procede significativamente più veloce in ambienti alcalini. Alzare il pH da 6 a 8 può raddoppiare o triplicare la velocità di imbrunimento. Tuttavia, troppo bicarbonato produce un retrogusto metallico e saponoso  -  ecco perché questo calcolatore impone limiti di sicurezza.",
  },
  {
    question: 'Qual è la quantità massima sicura di bicarbonato per chilogrammo di alimento?',
    answer: "Il limite di sicurezza generale è 1,5 grammi di bicarbonato per chilogrammo di alimento. Oltre questa soglia, il rischio di sapori sgradevoli (metallici, saponosi o chimici) aumenta notevolmente. La nostra quantità consigliata è la metà del massimo, che offre un'accelerazione significativa dell'imbrunimento con un rischio minimo per il sapore.",
  },
  {
    question: 'Cosa succede se la temperatura è troppo bassa per la reazione di Maillard?',
    answer: "Sotto i 110°C, si ha principalmente evaporazione dell'acqua e nessun imbrunimento di Maillard significativo. Tra 110°C e 140°C, l'imbrunimento avviene lentamente. L'intervallo di temperatura ottimale è 140°C-180°C. Sopra i 180°C, inizia la pirolisi  -  dove il cibo brucia e produce composti amari e acri invece dei desiderati aromi di imbrunimento.",
  },
];

const howTo = [
  {
    name: "Pesa l'alimento",
    text: "Inserisci il peso totale in grammi dell'alimento che vuoi imbrunire.",
  },
  {
    name: 'Imposta la temperatura di cottura',
    text: 'Inserisci la temperatura della superficie di cottura o del forno. La zona di Maillard ottimale è 140-180°C.',
  },
  {
    name: 'Regola la quantità di bicarbonato',
    text: 'Il cursore parte dalla metà del massimo sicuro. Aumenta con cautela  -  il calcolatore ti avviserà prima di raggiungere la zona di pericolo.',
  },
  {
    name: 'Leggi il pH stimato e il moltiplicatore di velocità',
    text: "Il calcolatore mostra quanto più veloce avviene l'imbrunimento al livello di pH scelto rispetto al pH predefinito di 6.",
  },
  {
    name: 'Controlla il livello di rischio per il sapore',
    text: "L'indicatore di sapore mostra sicuro, attenzione o pericolo in base al pH superficiale stimato. Rimani nella zona verde per i migliori risultati.",
  },
  {
    name: 'Applica il bicarbonato in modo uniforme',
    text: "Sciogli la quantità consigliata in poca acqua e spennella o mescola con l'alimento prima della cottura. Una distribuzione non uniforme causa un imbrunimento a chiazze.",
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
  slug: 'ottimizzatore-reazione-maillard',
  title: 'Ottimizzatore della Reazione di Maillard',
  description: 'Calcola esattamente quanto bicarbonato aggiungere per chilo di alimento per accelerare la reazione di Maillard. Evita sapori saponosi restando entro limiti di alcalinità sicuri.',
  faqTitle: 'Domande Frequenti',
  ui: {
    title: 'Ottimizzatore della Reazione di Maillard',
    headerLabel: "Chimica dell'Imbrunimento",
    flavorSafe: 'pH Sicuro',
    flavorCaution: 'Attenzione: Alcalino',
    flavorDanger: 'Pericolo: Rischio Saponoso',
    unitLabel: 'Unità',
    metricUnit: 'Metrico',
    imperialUnit: 'Imperiale',
    weightLabel: "Peso dell'Alimento",
    weightUnit: 'g',
    weightOz: 'oz',
    tempLabel: 'Temperatura Superficiale',
    tempUnit: '°C',
    degreesF: '°F',
    tempLow: 'Lento: {min} - {max}',
    tempOpt: 'Ottimale: {min} - {max}',
    tempHigh: 'Pirolisi: >{min}',
    sodaLabel: 'Bicarbonato',
    sodaUnit: 'g',
    sodaOz: 'oz',
    sodaNote: 'Metà del massimo sicuro, leggero boost di imbrunimento',
    sodaCautionNote: 'Vicino al massimo, monitorare attentamente il sapore',
    sodaDangerNote: 'Supera il massimo sicuro, rischio di sapore saponoso',
    sodaRecommended: 'Bicarbonato Consigliato',
    sodaMax: 'Massimo Sicuro',
    speedLabel: 'Velocità di Reazione',
    browningLabel: "Progressione dell'Imbrunimento",
    rawLabel: 'Crudo',
    goldenLabel: 'Dorato',
    burntLabel: 'Bruciato',
    phEstimated: 'pH Superficiale Stimato',
    timeSaved: 'Tempo Risparmiato',
    errorTempTooLow: "La temperatura è sotto i 110°C. La reazione di Maillard richiede almeno 110°C per iniziare. Sotto questa soglia, si ha solo evaporazione dell'acqua senza un imbrunimento significativo.",
    errorWeightTooLow: "Il peso dell'alimento deve essere maggiore di 0g.",
    footerTemplate: '<span class="mr-footer-stat"><strong>{weight}</strong><small>{wunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">a <strong>{temp}</strong><small>{tunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{soda}</strong><small>{sunit}</small> bicarbonato</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">x<strong>{multiplier}</strong> velocità</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{timeSaved}</strong>% risparmiato</span>',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: "Ottimizzatore della Reazione di Maillard: Domina la Scienza dell'Imbrunimento",
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La reazione di Maillard è il Santo Graal della cucina salata. Crea i sapori profondi e complessi della bistecca scottata, della crosta dorata del pane e delle cipolle caramellate. Chiamata così in onore del chimico francese Louis-Camille Maillard, questa reazione tra amminoacidi e zuccheri riducenti produce centinaia di composti aromatici. Manipolando il pH con il bicarbonato, puoi <strong>raddoppiare o triplicare</strong> la velocità di imbrunimento senza bruciare. Questo calcolatore ti mostra esattamente quanto usarne e ti avvisa prima di entrare in territorio saponoso.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '~140°C', label: 'Temperatura di attivazione di Maillard', icon: 'mdi:thermometer' },
        { value: '2-3x', label: 'Aumento di velocità a pH 8', icon: 'mdi:speedometer' },
        { value: '1,5 g/kg', label: 'Massimo sicuro di bicarbonato', icon: 'mdi:scale' },
        { value: 'pH 8,5', label: 'Soglia del sapore saponoso', icon: 'mdi:alert-circle' },
      ],
    },
    {
      type: 'title',
      text: 'Tabella di Dosaggio del Bicarbonato per Peso degli Alimenti',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Usa questa tabella di riferimento per determinare rapidamente le quantità consigliate e massime di bicarbonato per i pesi più comuni. La quantità consigliata è <strong>la metà del massimo sicuro</strong>, offrendo un'accelerazione evidente dell'imbrunimento con un rischio minimo per il sapore.",
    },
    {
      type: 'table',
      headers: ['Peso Alimento', 'Consigliato (g)', 'Massimo Sicuro (g)', 'pH Stimato', 'Boost di Velocità'],
      rows: [
        ['250g (1 cipolla)', '0,19 g', '0,38 g', '6,5', 'x1,2'],
        ['500g (2 cipolle)', '0,38 g', '0,75 g', '6,5', 'x1,2'],
        ['750g (3 cipolle)', '0,56 g', '1,13 g', '6,5', 'x1,2'],
        ['1000g (1 kg)', '0,75 g', '1,50 g', '7,0', 'x1,6'],
        ['1500g', '1,13 g', '2,25 g', '7,0', 'x1,6'],
        ['2000g', '1,50 g', '3,00 g', '7,0', 'x2,0'],
        ['3000g', '2,25 g', '4,50 g', '7,0', 'x2,0'],
        ['5000g', '3,75 g', '7,50 g', '7,0', 'x2,0'],
      ],
    },
    {
      type: 'title',
      text: "Comprendere il pH Superficiale e il Suo Effetto sull'Imbrunimento",
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'pH Neutro (6,0)',
          icon: 'mdi:water',
          description: 'Il pH naturale della maggior parte di carne e verdure crude. La reazione di Maillard procede alla velocità base.',
          highlight: false,
          points: ['Velocità di reazione: x1,0 (base)', 'Tutto naturale, senza additivi', 'Ideale per: puristi, metodi tradizionali', 'Imbrunimento più lento, più tempo per controllare la cottura'],
        },
        {
          title: 'Leggermente Alcalino (pH 7,0 a 7,5)',
          icon: 'mdi:flask-round-bottom',
          description: 'Ottenuto con la quantità consigliata di bicarbonato. Aumento evidente della velocità senza impatto sul sapore.',
          highlight: true,
          points: ['Velocità di reazione: x1,5-2,0', '½ cucchiaino per kg (circa 0,75g)', 'Ideale per: cipolle caramellate, verdure arrosto', 'Il punto dolce per la maggior parte dei cuochi casalinghi'],
        },
        {
          title: 'Altamente Alcalino (pH 8,0 a 8,5)',
          icon: 'mdi:alert',
          description: 'Massima alcalinità pratica prima che compaiano difetti di sapore. Raddoppia la velocità di imbrunimento ma richiede un monitoraggio attento.',
          highlight: false,
          points: ['Velocità di reazione: x2,0-3,0', '1 cucchiaino per kg (circa 1,5g)', 'Ideale per: croste scure di pretzel, caramellizzazione estrema', 'Assaggia prima di servire  -  al limite del saponoso'],
        },
      ],
    },
    {
      type: 'title',
      text: "Zone di Temperatura e Cosa Significano per l'Imbrunimento",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "La temperatura è l'altra variabile critica per la reazione di Maillard. Ogni zona produce risultati fondamentalmente diversi. Comprendere queste soglie ti aiuta a scegliere il livello di calore giusto per il tuo obiettivo culinario.",
    },
    {
      type: 'table',
      headers: ['Zona', 'Intervallo di Temp.', 'Cosa Succede', 'Ideale Per'],
      rows: [
        ['Evaporazione', 'Sotto i 110°C', "L'acqua evapora, nessun imbrunimento", 'Sous vide, bollitura, cottura a vapore'],
        ['Imbrunimento Lento', '110-139°C', 'Maillard inizia lentamente, sviluppo di colore delicato', 'Pomodori arrosto lento, disidratazione a bassa temperatura'],
        ['Zona Ottimale', '140-180°C', 'Massima velocità di imbrunimento senza bruciare', 'Scottatura, arrosto, frittura, cottura al forno'],
        ['Pirolisi', 'Sopra i 180°C', 'Inizia la bruciatura, si formano composti amari e acri', 'Carbonizzazione rapida per accento di sapore (usare con parsimonia)'],
      ],
    },
    {
      type: 'title',
      text: 'Errori Comuni con la Reazione di Maillard e Come Risolverli',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Aggiungere troppo bicarbonato',
      html: "Con il bicarbonato, più non è meglio. Superare 1,5g per chilogrammo di alimento introduce un retrogusto metallico, saponoso o chimico. I composti aromatici prodotti da un'eccessiva alcalinità non sono gli stessi delle note ricche e saporite del corretto imbrunimento di Maillard. <strong>Attieniti alla quantità consigliata mostrata dal calcolatore.</strong>",
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Cuocere a temperatura troppo bassa',
      html: "Sotto i 110°C, stai essenzialmente cuocendo a vapore o disidratando il cibo  -  non imbrunendolo. La reazione di Maillard ha una temperatura minima di attivazione. Se vuoi sapori profondi e complessi, <strong>la superficie dell'alimento deve raggiungere almeno 140°C.</strong> Usa un metodo di cottura ad alta temperatura come scottatura, grigliatura o arrosto sopra i 180°C di temperatura del forno.",
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: "Ignorare l'umidità",
      html: "L'acqua è nemica della reazione di Maillard. Le superfici bagnate non possono superare i 100°C finché l'acqua non evapora. <strong>Asciuga sempre completamente il cibo</strong> prima di scottarlo. Il bicarbonato aiuta perché accelera anche l'evaporazione dell'acqua superficiale rompendo le pareti cellulari, ma non può compensare un cibo visibilmente bagnato. Superfici asciutte = migliore imbrunimento.",
    },
    {
      type: 'title',
      text: 'Consigli da Pro per un Imbrunimento Perfetto',
      level: 3,
    },
    {
      type: 'tip',
      title: 'La Tecnica della Sospensione di Bicarbonato',
      html: "Non cospargere mai il bicarbonato secco direttamente sul cibo  -  non si distribuirà in modo uniforme. Sciogli la quantità misurata in 1-2 cucchiai di acqua tiepida, poi spennella o mescola la sospensione con l'alimento. Questo garantisce un'alcalinità uniforme su tutta la superficie per un imbrunimento omogeneo e costante.",
    },
    {
      type: 'tip',
      title: 'Abbina il Bicarbonato alla Salatura a Secco',
      html: 'Bicarbonato e sale funzionano in sinergia. Sala a secco la carne per 1-24 ore prima della cottura, poi applica la sospensione di bicarbonato appena prima di metterla sul fuoco. Il sale estrae le proteine che partecipano alla reazione di Maillard, mentre il bicarbonato la accelera. Questa combinazione produce la crosta più profonda e ricca.',
    },
    {
      type: 'tip',
      title: 'Trucco per Caramellare le Cipolle',
      html: "Un pizzico di bicarbonato (0,3g per cipolla grande) può ridurre il tempo di caramellizzazione da 45 a 20 minuti. L'ambiente alcalino rompe più velocemente le pareti cellulari della cipolla, rilasciando zuccheri e amminoacidi che alimentano la reazione di Maillard. Ma sii preciso  -  troppo bicarbonato trasforma le cipolle in poltiglia con un retrogusto chimico.",
    },
    {
      type: 'title',
      text: "Glossario dei Termini Chiave sull'Imbrunimento",
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Reazione di Maillard', definition: "Una reazione chimica non enzimatica tra amminoacidi e zuccheri riducenti che crea il colore bruno e i sapori complessi e saporiti nei cibi cotti. Avviene sopra i 110°C ed è distinta dalla caramellizzazione." },
        { term: 'Pirolisi', definition: "La decomposizione termica del materiale organico ad alte temperature (sopra i 180°C). A differenza dell'imbrunimento di Maillard, la pirolisi produce composti amari, acri e talvolta cancerogeni. È ciò che accade quando il cibo brucia." },
        { term: 'pH', definition: "Una scala da 0 a 14 che misura l'acidità (basso) o l'alcalinità (alto). Il neutro è 7. La maggior parte dei cibi crudi ha un pH tra 5,5 e 6,5. Il bicarbonato alza il pH a livelli alcalini, accelerando la reazione di Maillard." },
        { term: 'Bicarbonato di Sodio', definition: "Bicarbonato  -  una polvere cristallina bianca (NaHCO₃) che agisce come base debole. In cucina, alza il pH superficiale, accelera l'imbrunimento, rende la carne più tenera e aiuta le verdure a mantenere il colore durante la cottura." },
        { term: 'Alcalinità', definition: "La capacità di una soluzione di neutralizzare gli acidi. Nel contesto dell'accelerazione di Maillard, l'alcalinità si riferisce a valori di pH superiori a 7,0. L'alcalinità in eccesso produce sapori sgradevoli amari e saponosi." },
        { term: 'Moltiplicatore di Velocità di Reazione', definition: 'Quante volte più veloce procede la reazione di Maillard rispetto alla base (pH 6). Un moltiplicatore di x2,0 significa che l\'imbrunimento avviene due volte più veloce, dimezzando di fatto il tempo di cottura necessario per lo stesso sviluppo di colore.' },
        { term: 'pH Superficiale', definition: 'Il pH proprio sulla superficie del cibo dove avviene la reazione di Maillard, non il pH interno. Il bicarbonato influisce principalmente sul pH superficiale poiché non penetra in profondità nel cibo durante i tempi di cottura brevi.' },
      ],
    },
    {
      type: 'title',
      text: 'Riferimento Rapido: Bicarbonato per Alimenti Comuni',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Quantità consigliate di bicarbonato per la cucina di tutti i giorni',
      items: [
        'Cipolle caramellate (1 grande): 0,3g di bicarbonato  -  riduce il tempo da 45 a ~20 minuti',
        'Patate arrosto (500g): 0,4g di bicarbonato  -  esterno più croccante e dorato',
        'Bistecca in padella (250g): 0,2g di bicarbonato  -  crosta più scura in meno tempo',
        'Ali di pollo (1kg): 0,75g di bicarbonato  -  pelle più croccante, imbrunimento più veloce',
        'Impasto per pretzel (500g farina): 1,5g di bicarbonato  -  crosta marrone scuro dopo il bagno alcalino',
        'Verdure miste arrosto (1kg): 0,75g di bicarbonato  -  caramellizzazione più uniforme',
      ],
    },
    {
      type: 'paragraph',
      html: "Ogni alimento ha un diverso livello di alcalinità ideale in base al suo pH naturale e al contenuto di umidità. Questo calcolatore elimina le congetture dall'equazione  -  inserisci il peso esatto e la temperatura, e ti darà la quantità precisa di bicarbonato per un imbrunimento perfetto ogni volta.",
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
