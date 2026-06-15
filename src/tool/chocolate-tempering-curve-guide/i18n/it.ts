import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Curva di temperaggio del cioccolato e guida all'innesto";
const description = "Domina il temperaggio del cioccolato a casa. Calcola il peso delle gocce di innesto richieste e segui le curve di temperatura termodinamiche passo dopo passo per cioccolato fondente, al latte e bianco.";
const faq = [
  {
    "question": "Cos'è il temperaggio del cioccolato ?",
    "answer": "Il temperaggio è il processo di riscaldamento, raffreddamento e leggero riscaldamento del cioccolato per controllare la cristallizzazione del burro di cacao. Questo costringe le molecole di grasso a cristallizzare in cristalli stabili di forma V (Beta), dando al cioccolato un aspetto lucido, uno spacco netto ed evitando che si sciolga facilmente a temperatura ambiente."
  },
  {
    "question": "Cos'è il metodo dell'innesto ?",
    "answer": "Il metodo dell'innesto (seeding) consiste nello sciogliere una parte del cioccolato e poi aggiungere cioccolato solido già temperato (semi o gocce) durante la fase di raffreddamento. Questi cristalli stabili fungono da modello, guidando le molecole di grasso fuso a solidificarsi nella struttura cristallina desiderata di forma V senza richiedere un tavolo di marmo."
  },
  {
    "question": "Perché il mio cioccolato ha delle striature bianche (fioritura del burro di cacao) ?",
    "answer": "Le striature o macchie bianche sono chiamate fioritura del burro di cacao (fat bloom). Ciò accade quando il cioccolato non è temperato correttamente, consentendo ai cristalli di burro di cacao instabili di migrare in superficie e ricristallizzare. È ancora sicuro da mangiare ma perde consistenza e lucentezza."
  },
  {
    "question": "Posso temperare di nuovo il cioccolato che ha già la fioritura bianca ?",
    "answer": "Sì. La fioritura è una semplice separazione fisica dei cristalli di grasso o zucchero, non un deterioramento chimico. Sciogliere completamente il cioccolato a una temperatura di fusione adeguata (circa 45-50°C) rompe tutte le strutture cristalline instabili, permettendoti di ricominciare il processo da capo."
  },
  {
    "question": "In che modo l'umidità e la temperatura della cucina influenzano il temperaggio ?",
    "answer": "Il cioccolato è estremamente sensibile all'ambiente. La temperatura ideale della cucina si colloca tra i 18°C e i 22°C con un'umidità relativa inferiore al 50%. Un'elevata umidità può causare condensa d'acqua sul cioccolato, portando a fioritura dello zucchero o al blocco del cioccolato in una pasta densa e inutilizzabile."
  },
  {
    "question": "Posso usare le normali gocce di cioccolato da supermercato ?",
    "answer": "Le gocce di cioccolato da supermercato contengono spesso stabilizzanti e meno burro di cacao per mantenere la forma in cottura. Per un temperaggio perfetto, lucido e dal taglio netto, si consiglia vivamente di utilizzare cioccolato di copertura professionale con almeno il 31% di burro di cacao."
  }
];

const howTo = [
  {
    "name": "Scegliere il tipo di cioccolato",
    "text": "Seleziona cioccolato fondente, al latte o bianco per caricare i limiti di temperatura specifici."
  },
  {
    "name": "Inserire il peso totale",
    "text": "Inserisci il peso totale desiderato del cioccolato da preparare."
  },
  {
    "name": "Fase di fusione",
    "text": "Sciogli il 75% del cioccolato (come calcolato) alla temperatura target (es. 50C per il fondente) per rompere tutte le strutture cristalline."
  },
  {
    "name": "Fase di raffreddamento e innesto",
    "text": "Raffredda il cioccolato fuso mentre mescoli il restante 25% di gocce solide fino a raggiungere la temperatura di raffreddamento."
  },
  {
    "name": "Fase di lavorazione",
    "text": "Riscalda delicatamente il cioccolato alla temperatura di lavorazione per sciogliere i cristalli instabili prima dell'uso."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Cos'è il temperaggio del cioccolato ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il temperaggio è il processo di riscaldamento, raffreddamento e leggero riscaldamento del cioccolato per controllare la cristallizzazione del burro di cacao. Questo costringe le molecole di grasso a cristallizzare in cristalli stabili di forma V (Beta), dando al cioccolato un aspetto lucido, uno spacco netto ed evitando che si sciolga facilmente a temperatura ambiente."
      }
    },
    {
      "@type": "Question",
      "name": "Cos'è il metodo dell'innesto ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il metodo dell'innesto (seeding) consiste nello sciogliere una parte del cioccolato e poi aggiungere cioccolato solido già temperato (semi o gocce) durante la fase di raffreddamento. Questi cristalli stabili fungono da modello, guidando le molecole di grasso fuso a solidificarsi nella struttura cristallina desiderata di forma V senza richiedere un tavolo di marmo."
      }
    },
    {
      "@type": "Question",
      "name": "Perché il mio cioccolato ha delle striature bianche (fioritura del burro di cacao) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le striature o macchie bianche sono chiamate fioritura del burro di cacao (fat bloom). Ciò accade quando il cioccolato non è temperato correttamente, consentendo ai cristalli di burro di cacao instabili di migrare in superficie e ricristallizzare. È ancora sicuro da mangiare ma perde consistenza e lucentezza."
      }
    },
    {
      "@type": "Question",
      "name": "Posso temperare di nuovo il cioccolato che ha già la fioritura bianca ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì. La fioritura è una semplice separazione fisica dei cristalli di grasso o zucchero, non un deterioramento chimico. Sciogliere completamente il cioccolato a una temperatura di fusione adeguata (circa 45-50°C) rompe tutte le strutture cristalline instabili, permettendoti di ricominciare il processo da capo."
      }
    },
    {
      "@type": "Question",
      "name": "In che modo l'umidità e la temperatura della cucina influenzano il temperaggio ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il cioccolato è estremamente sensibile all'ambiente. La temperatura ideale della cucina si colloca tra i 18°C e i 22°C con un'umidità relativa inferiore al 50%. Un'elevata umidità può causare condensa d'acqua sul cioccolato, portando a fioritura dello zucchero o al blocco del cioccolato in una pasta densa e inutilizzabile."
      }
    },
    {
      "@type": "Question",
      "name": "Posso usare le normali gocce di cioccolato da supermercato ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le gocce di cioccolato da supermercato contengono spesso stabilizzanti e meno burro di cacao per mantenere la forma in cottura. Per un temperaggio perfetto, lucido e dal taglio netto, si consiglia vivamente di utilizzare cioccolato di copertura professionale con almeno il 31% di burro di cacao."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Curva di temperaggio del cioccolato e guida all'innesto",
  "description": "Domina il temperaggio del cioccolato a casa. Calcola il peso delle gocce di innesto richieste e segui le curve di temperatura termodinamiche passo dopo passo per cioccolato fondente, al latte e bianco.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Scegliere il tipo di cioccolato",
      "text": "Seleziona cioccolato fondente, al latte o bianco per caricare i limiti di temperatura specifici."
    },
    {
      "@type": "HowToStep",
      "name": "Inserire il peso totale",
      "text": "Inserisci il peso totale desiderato del cioccolato da preparare."
    },
    {
      "@type": "HowToStep",
      "name": "Fase di fusione",
      "text": "Sciogli il 75% del cioccolato (come calcolato) alla temperatura target (es. 50C per il fondente) per rompere tutte le strutture cristalline."
    },
    {
      "@type": "HowToStep",
      "name": "Fase di raffreddamento e innesto",
      "text": "Raffredda il cioccolato fuso mentre mescoli il restante 25% di gocce solide fino a raggiungere la temperatura di raffreddamento."
    },
    {
      "@type": "HowToStep",
      "name": "Fase di lavorazione",
      "text": "Riscalda delicatamente il cioccolato alla temperatura di lavorazione per sciogliere i cristalli instabili prima dell'uso."
    }
  ]
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Curva di temperaggio del cioccolato e guida all'innesto",
  "description": "Domina il temperaggio del cioccolato a casa. Calcola il peso delle gocce di innesto richieste e segui le curve di temperatura termodinamiche passo dopo passo per cioccolato fondente, al latte e bianco.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  }
};

export const content: ToolLocaleContent = {
  slug: 'guida-curva-temperaggio-cioccolato',
  title,
  description,
  faqTitle: 'Domande frequenti',
  ui: {
  "title": "Assistente Temperaggio Cioccolato",
  "subtitle": "Curve termodinamiche e calcolatore d'innesto",
  "chocolateTypeLabel": "Tipo di Cioccolato",
  "totalWeightLabel": "Peso totale desiderato",
  "meltLabel": "Fase di Fusione",
  "coolLabel": "Fase di Raffreddamento & Innesto",
  "workLabel": "Fase di Lavorazione",
  "meltTempLabel": "Temp. di Fusione",
  "coolTempLabel": "Temp. di Raffreddamento",
  "workTempLabel": "Temp. di Lavorazione",
  "meltWeightLabel": "Peso da fondere",
  "seedWeightLabel": "Peso di innesto (gocce)",
  "molecularLabel": "Stato di cristallizzazione molecolare",
  "seedingTitle": "Calcolatore del metodo di innesto (25%)",
  "stepTitle": "Fasi di temperaggio",
  "darkOption": "Cioccolato Fondente",
  "milkOption": "Cioccolato al Latte",
  "whiteOption": "Cioccolato Bianco",
  "resetButton": "Reinizializza la guida",
  "warningOverheated": "Attenzione: La temperatura è troppo alta! Rischi di bruciare i solidi del cacao o denaturare le proteine del latte.",
  "warningUnderheated": "Attenzione: La temperatura è troppo bassa. I cristalli stabili non si saranno formati o il cioccolato si solidificherà troppo presto.",
  "interactiveInfo": "Interagisci con le fasi o trascina il termometro per visualizzare gli stati molecolari"
},
  faq,
  howTo,
  seo: [
  {
    "type": "title",
    "text": "Termodinamica della cristallizzazione del burro di cacao",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Il burro di cacao è polimorfo, il che significa che può solidificarsi in sei forme cristalline diverse (da I a VI). Ciascuna forma ha un punto di fusione e una stabilità molecolare unici. Lo scopo del temperaggio è massimizzare i cristalli di forma V (Beta) sopprimendo le forme instabili da I a IV. I cristalli di forma V garantiscono la lucentezza, la consistenza soda e lo spacco netto tipici del cioccolato professionale."
  },
  {
    "type": "stats",
    "columns": 4,
    "items": [
      {
        "value": "Forma V",
        "label": "Cristallo Beta target",
        "icon": "mdi:hexagon-multiple-outline"
      },
      {
        "value": "25-30%",
        "label": "Rapporto di innesto",
        "icon": "mdi:scale"
      },
      {
        "value": "31-32°C",
        "label": "Temp. lavoro fondente",
        "icon": "mdi:thermometer"
      },
      {
        "value": "0.1-0.2C",
        "label": "Raffreddamento al min",
        "icon": "mdi:trending-down"
      }
    ]
  },
  {
    "type": "title",
    "text": "Le sei forme cristalline del burro di cacao",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Comprendere la termodinamica di ciascuna forma cristallina è essenziale per evitare fallimenti nel temperaggio. Ecco la descrizione scientifica delle forme del burro di cacao :"
  },
  {
    "type": "table",
    "headers": [
      "Forma",
      "Nome struttura",
      "Punto di fusione",
      "Stabilità e consistenza"
    ],
    "rows": [
      [
        "Forma I",
        "Gamma (γ)",
        "17°C (62.6°F)",
        "Molto instabile, morbido, si scioglie subito in mano, senza spacco."
      ],
      [
        "Forma II",
        "Alpha (α)",
        "21°C (69.8°F)",
        "Instabile, morbido, struttura friabile, si scioglie facilmente."
      ],
      [
        "Forma III",
        "Beta Prime (β')",
        "25.5°C (77.9°F)",
        "Instabile, sodo ma manca di spacco netto, superficie opaca."
      ],
      [
        "Forma IV",
        "Beta Prime (β')",
        "27.3°C (81.1°F)",
        "Instabile, sodo, si scioglie un po' troppo facilmente, poco lucido."
      ],
      [
        "Forma V",
        "Beta (β)",
        "33.8°C (92.8°F)",
        "Molto stabile, lucentezza eccezionale, spacco netto (Forma desiderata)."
      ],
      [
        "Forma VI",
        "Beta (β)",
        "36.3°C (97.3°F)",
        "La più stabile, duro, si sviluppa in mesi, causa la fioritura."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Comprendere il metodo dell'innesto",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "L'innesto è una tecnica estremamente affidabile per temperare il cioccolato senza disporre di un tavolo di marmo. Riservando il 25% del peso totale sotto forma di cioccolato solido non fuso, si introduce un'alta concentrazione di cristalli stabili di forma V direttamente nel cioccolato caldo. Mescolando, questi semi guidano il cioccolato fuso a copiare questa struttura."
  },
  {
    "type": "title",
    "text": "La scienza della curva di temperaggio passo dopo passo",
    "level": 2
  },
  {
    "type": "list",
    "items": [
      "<strong>Fase 1: Fusione (T > 40°C):</strong> Riscaldare il cioccolato scioglie tutte le strutture cristalline esistenti (forme da I a VI). Si crea uno stato di grasso liquido amorfo, ideale come punto di partenza.",
      "<strong>Fase 2: Raffreddamento e innesto (T ≈ 27°C):</strong> Il raffreddamento avvia la cristallizzazione. L'aggiunta del 25% di gocce solide introduce cristalli stabili di forma V che fungono da guida per la ricristallizzazione.",
      "<strong>Fase 3: Riscaldamento e lavoro (T ≈ 31°C):</strong> Il leggero riscaldamento scioglie i cristalli instabili di forma IV creatisi durante il raffreddamento. Rimangono solo i cristalli stabili di forma V, garantendo lucentezza e durezza."
    ]
  },
  {
    "type": "title",
    "text": "Metodi pratici di temperaggio casalingo",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "È possibile ottenere risultati eccezionali a casa utilizzando uno di questi tre metodi comuni. Usa il nostro calcolatore per pesare gli ingredienti con precisione :"
  },
  {
    "type": "list",
    "items": [
      "<strong>Metodo a bagnomaria :</strong> Metti il 75% del cioccolato in una ciotola resistente al calore sopra una pentola d'acqua che sobbolle. Assicurati che il fondo della ciotola non tocchi l'acqua e che il vapore non entri nel cioccolato. Riscalda fino alla temperatura di fusione, togli dal fuoco, asciuga il fondo della ciotola e unisci il 25% di cioccolato d'innesto. Mescola costantemente fino a raffreddamento, poi rimetti brevemente a bagnomaria per raggiungere la temperatura di lavoro.",
      "<strong>Metodo al microonde :</strong> Metti il 75% del cioccolato in una ciotola di plastica adatta al microonde. Riscalda a intervalli di 15-30 secondi al 50% di potenza, mescolando bene per evitare surriscaldamenti. Una volta sciolto, unisci il 25% di innesto solido e mescola continuamente. Riscalda a brevi rullate di 5-10 secondi fino alla temperatura di lavorazione.",
      "<strong>Metodo sous vide :</strong> Inserisci tutto il cioccolato in un sacchetto sottovuoto. Imposta il bagno termostatico sous vide alla temperatura di fusione fino a scioglierlo del tutto. Abbassa la temperatura a quella di raffreddamento aggiungendo ghiaccio e massaggia spesso il sacchetto. Infine, aumenta alla temperatura di lavoro."
    ]
  },
  {
    "type": "title",
    "text": "Come eseguire il test di temperaggio",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Prima di versare il cioccolato negli stampi o usarlo per coprire dolci, fai sempre un test. Immergi la punta di un coltello pulito, di una spatola o di una striscia di carta forno nel cioccolato. Lascia riposare a temperatura ambiente (18-22°C). Se temperato correttamente, il cioccolato si solidificherà uniformemente in 3-5 minuti, mostrando una superficie lucida, asciutta al tatto e uno spacco netto. Se rimane appiccicoso dopo 5 minuti, non è temperato e va rifuso."
  },
  {
    "type": "title",
    "text": "Risoluzione dei problemi di temperaggio",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Se il cioccolato non è temperato correttamente, il burro di cacao si separa e migra in superficie, creando un velo bianco chiamato <em>fioritura</em>. Se il cioccolato è opaco o molle, significa che non è temperato. Risolvi il problema sciogliendolo di nuovo e ricominciando il processo."
  }
],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
