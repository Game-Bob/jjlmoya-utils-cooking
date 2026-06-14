import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calcolatore di Curve di Pastorizzazione Sous Vide';
const description = 'Calcola il tempo esatto necessario per una pastorizzazione sicura al cuore contro Salmonella e Listeria nella cottura sous vide, tenendo conto di forma e spessore della carne.';

const faq = [
  {
    question: 'Cos\'è la pastorizzazione nella cottura sous vide?',
    answer: 'La pastorizzazione è il processo di riscaldamento degli alimenti a una temperatura specifica e il loro mantenimento per un tempo sufficiente a ridurre i microrganismi patogeni (come Salmonella, Listeria ed E. coli) a livelli sicuri e accettabili. A differenza della sterilizzazione, non distrugge tutte le spore batteriche ma rende l\'alimento sicuro per il consumo.',
  },
  {
    question: 'Perché lo spessore della carne influisce così tanto sul tempo di cottura?',
    answer: 'Il trasferimento di calore negli alimenti avviene per conduzione. Il tempo necessario perché il cuore (il punto più freddo) raggiunga la temperatura del bagno termostatico aumenta quadraticamente con lo spessore. Raddoppiare lo spessore di una bistecca quadruplica approssimativamente il tempo di riscaldamento.',
  },
  {
    question: 'Perché 54,4°C (130°F) è considerata la temperatura minima di sicurezza per il sous vide?',
    answer: 'Al di sotto di 54,4°C, patogeni comuni come Salmonella possono sopravvivere e moltiplicarsi attivamente. Se il cibo rimane in questa "zona di pericolo" per più di 4 ore, possono formarsi tossine termoresistenti, con gravi rischi per la sicurezza alimentare.',
  },
  {
    question: 'Cos\'è una riduzione 6D o 6,5D?',
    answer: 'Una riduzione D si riferisce a una riduzione decimale (logaritmica) della popolazione batterica. Una riduzione 6,5D significa che il 99,99995% del patogeno target viene eliminato. Ad esempio, se c\'erano 1.000.000 di batteri inizialmente, ne sopravvivrebbe meno di 1.',
  },
  {
    question: 'In che modo la geometria dell\'alimento influisce sulla velocità di riscaldamento?',
    answer: 'Il calore penetra in una sfera da tutte le direzioni (3 dimensioni) e in un cilindro dai lati (2 dimensioni), mentre una lastra piana viene riscaldata principalmente dall\'alto e dal basso (1 dimensione). Quindi le sfere si riscaldano più velocemente, seguite dai cilindri, mentre le lastre impiegano più tempo.',
  },
];

const howTo = [
  {
    name: 'Imposta la temperatura del bagno',
    text: 'Regola il cursore per adattarlo alla temperatura del tuo bagno termostatico. Temperature più alte pastorizzano in modo esponenzialmente più rapido.',
  },
  {
    name: 'Specifica lo spessore della carne',
    text: 'Misura la parte più spessa della carne in millimetri e inserisci il valore nel calcolatore.',
  },
  {
    name: 'Seleziona la forma geometrica',
    text: 'Scegli se il tuo alimento ha forma di lastra piana (bistecca, petto di pollo), cilindro (filetto di manzo, ballotine) o sfera (polpetta).',
  },
  {
    name: 'Seleziona il patogeno target',
    text: 'Scegli Salmonella per la sicurezza standard di carni e pollame, oppure Listeria monocytogenes per soggetti ad alto rischio o per un margine di sicurezza esteso.',
  },
  {
    name: 'Verifica il tempo totale di cottura',
    text: 'Il calcolatore restituisce il tempo di riscaldamento al cuore e il tempo di mantenimento per la letalità. Sommali per ottenere la durata totale di cottura in sicurezza.',
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
  slug: 'curve-pastorizzazione-sous-vide',
  title: 'Curve di Pastorizzazione Sous Vide',
  description: 'Calcola il tempo esatto necessario per una pastorizzazione sicura al cuore contro Salmonella e Listeria nella cottura sous vide, tenendo conto di forma e spessore della carne.',
  faqTitle: 'Domande Frequenti',
  ui: {
    title: 'Curve di Pastorizzazione Sous Vide',
    subtitle: 'Cinetica di letalità termica e compensazione della temperatura al cuore',
    bathTempLabel: 'Temperatura del Bagno Termostatico',
    thicknessLabel: 'Spessore della Carne',
    shapeLabel: 'Geometria della Carne',
    shapeSlab: 'Lastra Piana (es. Bistecca, Petto di Pollo)',
    shapeCylinder: 'Cilindro (es. Filetto, Roulade)',
    shapeSphere: 'Sfera (es. Polpetta)',
    pathogenLabel: 'Patogeno Target',
    pathogenSalmonella: 'Salmonella (Standard)',
    pathogenListeria: 'Listeria monocytogenes',
    resultsTitle: 'Tempo di Pastorizzazione Sicura',
    heatingTime: 'Tempo di Riscaldamento al Cuore',
    lethalityTime: 'Tempo di Letalità del Patogeno',
    totalTime: 'Tempo Totale di Cottura',
    dangerZoneTitle: 'Zona di Pericolo Biologico',
    dangerZoneDesc: 'Temperature inferiori a 54,4°C (130°F) non possono pastorizzare in sicurezza perché il tasso di replicazione batterica può superare il tasso di morte termica. Non cuocere sous vide al di sotto di questa temperatura per più di 4 ore.',
    chartTitle: 'Curva di Riduzione Batterica Logaritmica',
    chartXLabel: 'Tempo (minuti)',
    chartYLabel: 'Riduzione Logaritmica',
    disclaimer: 'I calcoli assumono una temperatura iniziale di 5°C e la diffusività termica della carne magra. Usa sempre un termometro digitale calibrato per verificare la temperatura del bagno.',
    minutesUnit: 'min',
    mmUnit: 'mm',
    inUnit: 'in',
    tempUnitC: '°C',
    tempUnitF: '°F',
    systemLabel: 'Sistema di Misura',
    systemMetric: 'Metrico',
    systemImperial: 'Imperiale'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Pastorizzazione Sous Vide: La Guida Completa alla Sicurezza per Chi Cucina a Casa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La cottura sous vide ha trasformato le cucine domestiche, rendendo accessibile a chiunque possieda un circolatore ad immersione la possibilità di ottenere bistecche impossibili da stracuocere. Ma il metodo nasconde una complessità critica: alle basse temperature che producono quella perfetta cottura media al rosa da bordo a bordo, si opera a pochi millimetri sopra la soglia di morte termica dei batteri pericolosi. Questa guida spiega esattamente come calcolare i tempi di pastorizzazione sicura per qualsiasi taglio di carne, a qualsiasi temperatura, per non servire mai più pollo o pesce poco cotti.',
    },
    {
      type: 'title',
      text: 'Perché la Sicurezza nel Sous Vide È Diversa dalla Cucina Tradizionale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quando rosoli un petto di pollo a 200°C, la superficie raggiunge istantaneamente temperature letali e i batteri muoiono in pochi secondi. Il sous vide ribalta questo modello: il bagno termostatico opera esattamente alla temperatura finale desiderata per l\'alimento, a volte fino a soli 55°C. A queste temperature, eliminare Salmonella o Listeria non è immediato  -  è un processo lento, tempo-dipendente, misurato in minuti o addirittura ore. Le tabelle USDA FSIS Appendix A specificano che per ottenere una riduzione di 6,5 log di Salmonella nel pollame occorre mantenerlo a 60°C per circa 28 minuti dopo che il cuore ha raggiunto la temperatura. A 55°C, questo tempo si allunga fino a quasi 90 minuti. Se togli il sacchetto quando suona il timer senza considerare il tempo di letalità, potresti servire cibo non adeguatamente pastorizzato.',
    },
    {
      type: 'title',
      text: 'Tempi Reali di Cottura Sous Vide: Quello che Serve Davvero a Chi Cucina a Casa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La tabella seguente riflette ciò che i cuochi casalinghi cercano realmente: tagli specifici di carne, a temperature comuni, con tempi totali che includono sia il ritardo di riscaldamento sia il tempo di mantenimento per la letalità del patogeno. Questi valori presuppongono uno spessore di 25mm, a partire da temperatura di frigorifero (5°C), con obiettivo una riduzione di 6,5 log di Salmonella.',
    },
    {
      type: 'table',
      headers: ['Alimento', 'Temperatura Bagno', 'Riscaldamento Cuore', 'Mantenimento Letalità', 'Tempo Totale', 'Risultato'],
      rows: [
        ['Petto di Pollo', '60°C / 140°F', '~35 min', '~28 min', '~63 min', 'Succoso, completamente pastorizzato'],
        ['Petto di Pollo', '65°C / 149°F', '~35 min', '~3 min', '~38 min', 'Più compatto, consistenza tradizionale'],
        ['Filetto di Salmone', '50°C / 122°F', '~20 min', '~55 min', '~75 min', 'Burroso, traslucido, sicuro'],
        ['Bistecca di Manzo', '55°C / 131°F', '~40 min', '~89 min', '~129 min', 'Media al sangue, superficie pastorizzata'],
        ['Filetto di Maiale', '60°C / 140°F', '~35 min', '~28 min', '~63 min', 'Tenero con leggero rosato'],
        ['Petto d\'Anatra', '57°C / 135°F', '~35 min', '~52 min', '~87 min', 'Ricco, cottura media, sicuro'],
        ['Petto di Tacchino', '63°C / 145°F', '~40 min', '~9 min', '~49 min', 'Umido, mai asciutto'],
        ['Polpette (sfera)', '60°C / 140°F', '~25 min', '~28 min', '~53 min', 'Cottura uniforme'],
      ],
    },
    {
      type: 'title',
      text: 'La Matematica Logaritmica della Morte Batterica: Spiegazione dei Valori D e dei Valori z',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I batteri non muoiono tutti insieme come un interruttore che si spegne. La morte termica segue una cinetica del primo ordine: una frazione costante della popolazione viene eliminata per ogni unità di tempo a una data temperatura. Il <strong>valore D</strong> (tempo di riduzione decimale) è il tempo necessario a una temperatura specifica per uccidere il 90% dei batteri presenti  -  una riduzione di 1 log. Per Salmonella a 60°C, il valore D è di circa 4,3 minuti. Il <strong>valore z</strong> (tipicamente 5,5°C per Salmonella) indica di quanto dobbiamo alzare la temperatura per rendere il processo 10 volte più veloce. Alza il bagno da 55°C a 60,5°C e il tempo di letalità richiesto si riduce di un fattore 10  -  da 89 minuti a circa 9 minuti. Questa relazione esponenziale spiega perché cuocere a 65°C è drasticamente più veloce e sicuro che cuocere a 55°C, anche se l\'alimento ha un aspetto quasi identico.',
    },
    {
      type: 'title',
      text: 'La Zona di Pericolo: Perché 54,4°C (130°F) È il Limite Invalicabile',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Rischio Biologico Sotto i 54,4 °C (130 °F)',
      html: 'Non cuocere mai sous vide al di sotto di 54,4 °C (130 °F) per più di 4 ore. A temperature inferiori a questa soglia, il tasso di morte termica di batteri come Salmonella e Clostridium perfringens è più lento del loro tasso naturale di riproduzione. La popolazione batterica può crescere durante la cottura. Ancora peggio, alcuni patogeni come Bacillus cereus e Clostridium botulinum di Tipo E possono produrre tossine termostabili che sopravvivono alla cottura. Se il tuo circolatore segna 52 °C e lasci la carne per 8 ore pensando che una temperatura più bassa e tempi lunghi siano più sicuri, stai creando un rischio biologico.',
    },
    {
      type: 'title',
      text: 'Come Forma e Spessore della Carne Determinano il Tempo di Cottura',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il centro termico dell\'alimento  -  l\'ultimo punto a raggiungere la temperatura target  -  determina il tempo totale di cottura. La conduzione del calore segue la legge di Fourier e il tempo perché il cuore arrivi a 1°C dalla temperatura del bagno scala con il <strong>quadrato dello spessore</strong>. Raddoppia lo spessore di un petto di pollo da 25mm a 50mm e il tempo di riscaldamento quadruplica, passando da 35 minuti a circa 140 minuti. La forma ha un impatto enorme: una <strong>lastra piana</strong> (bistecca, filetto) si riscalda da due superfici opposte ed è la geometria più lenta. Un <strong>cilindro</strong> (filetto, roulade) riceve calore radialmente da tutti i lati e si riscalda circa 1,4 volte più velocemente di una lastra dello stesso spessore. Una <strong>sfera</strong> (polpetta) si riscalda da tutte le direzioni ed è la geometria più veloce, circa 1,7 volte più rapida di una lastra. Ecco perché gli elementi sferici come polpette o arancini raggiungono temperature al cuore sicure sorprendentemente in fretta.',
    },
    {
      type: 'title',
      text: 'Salmonella vs. Listeria: Scegliere il Patogeno di Riferimento',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Salmonella (Standard)',
          icon: 'mdi:bacteria-outline',
          description: 'Il contaminante più comune nel pollame, moderatamente termosensibile, ampiamente utilizzato come patogeno di riferimento negli standard USDA FSIS.',
          points: [
            'Valore z di 5,5 °C: moderatamente termosensibile',
            'Target: riduzione di 6,5 log per il pollame, 5 log per il manzo',
            'D₆₀ = 4,3 minuti: muore relativamente in fretta a 60 °C',
            'Sicuro per adulti sani con i tempi di pastorizzazione standard',
            'Surrogato per i sierotipi di Salmonella enterica in tutti i tipi di carne',
          ],
        },
        {
          title: 'Listeria monocytogenes',
          icon: 'mdi:shield-alert-outline',
          description: 'Maggiore resistenza al calore rispetto a Salmonella. Critica per le popolazioni vulnerabili, incluse donne in gravidanza e soggetti immunocompromessi.',
          highlight: true,
          points: [
            'Maggiore resistenza termica rispetto a Salmonella',
            'Valore z di 6,0 °C: richiede un aumento di temperatura maggiore per accelerare l\'eliminazione',
            'Target: riduzione di 6 log raccomandata',
            'D₆₀ = 7,7 minuti: richiede quasi il doppio del tempo rispetto a Salmonella',
            'Critica per donne in gravidanza, anziani e soggetti immunocompromessi',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Sicurezza Alimentare per Popolazioni Vulnerabili: Quando la Pastorizzazione Standard Non Basta',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Donne in gravidanza, adulti sopra i 65 anni, pazienti in chemioterapia, trapiantati e persone con HIV o patologie autoimmuni affrontano rischi notevolmente più elevati dalle malattie di origine alimentare. Listeria monocytogenes in particolare può attraversare la barriera placentare e causare aborto spontaneo, parto prematuro o meningite neonatale  -  anche quando la madre è asintomatica. Per queste popolazioni, la riduzione standard di 6,5 log di Salmonella è insufficiente. Seleziona Listeria come patogeno target e prolunga di conseguenza i tempi di cottura. A 60°C, il tempo di letalità aggiuntivo per Listeria rispetto a Salmonella aggiunge circa 16 minuti extra per un petto di pollo da 25mm  -  un piccolo investimento di tempo per margini di sicurezza considerevoli.',
    },
    {
      type: 'title',
      text: 'Perché la Temperatura di Partenza a Freddo È Importante: Misurare Sempre da Refrigerato',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Questo calcolatore presuppone una temperatura iniziale di 5°C  -  la temperatura standard del frigorifero. Se prendi la carne direttamente dal congelatore a -18°C, il cuore impiegherà molto più tempo per raggiungere la temperatura target. Il calore latente di fusione del ghiaccio all\'interno del tessuto muscolare congelato crea un plateau a 0°C che può aggiungere dal 30 al 50% al tempo di riscaldamento. Scongela sempre completamente gli alimenti congelati in frigorifero prima della cottura sous vide e verifica la temperatura iniziale al cuore. Allo stesso modo, se lasci la carne sul bancone a temperare per 30 minuti prima di insacchettarla, il tempo di riscaldamento ridotto non è contemplato da questo modello e potresti superare la pastorizzazione  -  il che è sicuro ma potrebbe influire sulla consistenza.',
    },
    {
      type: 'title',
      text: 'Pastorizzazione Non Significa Sterilizzazione: Cosa Sopravvive',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La pastorizzazione riduce i patogeni a livelli considerati sicuri dagli standard di salute pubblica  -  tipicamente una riduzione da 5 a 7 log. Non produce un prodotto sterile. Alcune spore batteriche, tra cui <em>Clostridium botulinum</em> e <em>Clostridium perfringens</em>, possono sopravvivere alle temperature di pastorizzazione e germinare se il cibo non viene conservato correttamente. Dopo la cottura sous vide, l\'alimento deve essere servito immediatamente, mantenuto sopra i 54,4°C per il servizio, o raffreddato rapidamente in un bagno di ghiaccio fino a sotto i 4°C entro 2 ore. I sacchetti sottovuoto creano un ambiente anaerobico ideale per Clostridium botulinum; non lasciare mai i sacchetti cotti sous vide a temperatura ambiente. Per una conservazione in frigorifero superiore a 5 giorni, si raccomanda la congelazione.',
    },
    {
      type: 'title',
      text: 'Conformità USDA FSIS: Rispettare gli Standard Normativi a Casa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'USDA Food Safety and Inspection Service (FSIS) Appendix A fornisce il quadro normativo di riferimento per gli standard di prestazione della letalità nei prodotti a base di carne e pollame. Queste tabelle specificano le combinazioni tempo-temperatura richieste per specifiche riduzioni logaritmiche di Salmonella. Sebbene concepite per i produttori commerciali, i cuochi casalinghi possono utilizzare la stessa scienza. Ad esempio, l\'FSIS Appendix A prescrive che il pollame pronto al consumo raggiunga una riduzione di 6,5 log di Salmonella. A 60°C, il tempo di mantenimento richiesto dopo che l\'intero prodotto ha raggiunto la temperatura è di 28,1 minuti. Questo calcolatore implementa il modello matematico FSIS utilizzando la cinetica di Arrhenius del primo ordine con valori D e valori z derivati da studi di inattivazione termica sottoposti a revisione paritaria, adattati per l\'uso con circolatori sous vide domestici.',
    },
    {
      type: 'title',
      text: 'Pesce e Frutti di Mare: Regole Diverse per Proteine Diverse',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il muscolo del pesce ha proprietà termiche diverse rispetto alla carne di mammiferi o volatili. Il pesce si riscalda più velocemente per via della minore densità e dei tagli tipicamente più sottili, ma i patogeni rilevanti sono diversi. Per il pesce crudo o cotto leggermente, le specie di <em>Vibrio</em> e i parassiti <em>Anisakis</em> sono le preoccupazioni principali, più che Salmonella. La FDA raccomanda di congelare il pesce a -20°C per 7 giorni prima del consumo crudo per eliminare i parassiti, quindi pastorizzare sous vide contro Listeria nella cottura finale. Il salmone cotto a 50°C richiede circa 55 minuti di mantenimento per una riduzione di 6 log di Listeria, producendo una consistenza unica impossibile da ottenere con qualsiasi altro metodo di cottura. Il tonno e altri pesci scombroidi richiedono ulteriore attenzione: l\'istamina prodotta dall\'azione batterica prima della cottura è termostabile e non viene distrutta dalla pastorizzazione; rifornisciti sempre di pesce di qualità sushi da fornitori affidabili e mantienilo sotto i 4°C prima della cottura.',
    },
    {
      type: 'title',
      text: 'Il Compromesso tra Consistenza e Sicurezza: Perché Temperature Più Alte Sono Più Veloci ma Diverse',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ogni cuoco sous vide affronta la stessa decisione: cuocere a temperatura più bassa e più a lungo per una consistenza migliore, oppure a temperatura più alta e più velocemente per praticità e margine di sicurezza. Il petto di pollo cotto a 60°C produce una carne così succosa da sfidare le aspettative su cosa possa essere il pollame, ma richiede un mantenimento di letalità di 28 minuti dopo l\'equilibrio termico al cuore, per un tempo totale di oltre un\'ora. A 65°C, lo stesso petto pastorizza in soli 3 minuti di mantenimento per un totale di 38 minuti, ma le fibre muscolari si contraggono di più, espellendo parte dell\'umidità. Nessuno dei due approcci è sbagliato; il calcolatore ti fornisce semplicemente i numeri per fare una scelta consapevole. Per cene tra amici dove i tempi sono flessibili, scegli temperature più basse. Per i pasti infrasettimanali, vai più alto. Il cibo sarà sempre sicuro se il tempo calcolato viene rispettato.',
    },
    {
      type: 'title',
      text: 'Calibrazione dell\'Attrezzatura: Il Tuo Circolatore Potrebbe Mentirti',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>Verifica la temperatura del tuo circolatore ad immersione con un termometro digitale calibrato.</strong> I circolatori domestici possono derivare di 1-2°C nel tempo, il che ai margini della pastorizzazione (55-58°C) può fare la differenza tra una cottura sicura di 89 minuti e una pericolosa sotto-pastorizzazione. Testa il tuo circolatore contro un termometro di riferimento in un contenitore ben isolato una volta al mese. Un errore di 1°C a 55°C modifica il tempo di letalità di circa 30 minuti per Salmonella.',
    },
    {
      type: 'title',
      text: 'Cuocere Più Elementi: Come il Numero di Sacchetti Influisce sul Trasferimento di Calore',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un errore comune è caricare il bagno sous vide con più sacchetti e presumere che i tempi calcolati per un singolo elemento siano ancora validi. L\'acqua deve circolare liberamente tra i sacchetti per un efficace trasferimento di calore. Un bagno troppo pieno crea zone fredde stagnanti dove i sacchetti si isolano a vicenda dall\'acqua riscaldata. Come regola pratica, lascia almeno 2cm di spazio d\'acqua tra i sacchetti e, se cuoci più di 4 elementi, aumenta il tempo calcolato del 15-20% per compensare. Meglio ancora, usa un contenitore abbastanza grande da permettere all\'acqua di circolare liberamente intorno a ogni sacchetto. Per elementi sferici come le polpette, il vantaggio geometrico si riduce significativamente se sono a contatto o impilati, poiché i punti di contatto bloccano il trasferimento radiale del calore.',
    },
    {
      type: 'title',
      text: 'Guida Rapida: Temperature e Tempi Minimi di Sicurezza per Tipo di Alimento',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Tipo di Alimento', 'Temperatura Minima al Cuore', 'Tempo di Pastorizzazione a Temp. Minima', 'Più Veloce a', 'Raccomandato per'],
      rows: [
        ['Pollo e Pollame', '60°C / 140°F', '~28 min (6,5 log Salmonella)', '65°C: ~3 min mantenimento', 'Tutti i consumatori'],
        ['Maiale (tagli interi)', '60°C / 140°F', '~28 min (6,5 log Salmonella)', '65°C: ~3 min mantenimento', 'Tutti i consumatori'],
        ['Manzo (bistecche, arrosti)', '55°C / 131°F', '~89 min (6,5 log Salmonella)', '60°C: ~28 min mantenimento', 'Adulti sani (pastorizzazione superficiale)'],
        ['Carne Macinata di Manzo', '60°C / 140°F', '~28 min (6,5 log Salmonella)', '65°C: immediato', 'Tutti i consumatori (batteri distribuiti ovunque)'],
        ['Pesce e Frutti di Mare', '50°C / 122°F', '~55 min (Listeria)', '55°C: ~22 min mantenimento', 'Pre-congelato per controllo parassiti'],
        ['Uova (con guscio)', '57°C / 135°F', '~75 min (Salmonella)', '60°C: ~28 min mantenimento', 'Uova pastorizzate con guscio'],
        ['Verdure', '85°C / 185°F', 'Non applicabile (inattivazione enzimatica)', 'N/D', 'Degradazione pectina, nessun rischio patogeno'],
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
