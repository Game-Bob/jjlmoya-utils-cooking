import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Kalkylator for Ostflockningsmultiplikator';
const description = 'Hitta den exakta tidpunkten for att skara ostmassan vid konstnarlig osttillverkning. Anvand flockningsmultiplikatormetoden for att berakna koaguleringstid, kontrollera fuktighet och forbattra ostutbytet med var gratis kalkylator.';
const faq = [
  {
    question: 'Vad ar flockningsmetoden inom osttillverkning?',
    answer: 'Flockningsmetoden ar en teknik for att bestamma den precisa tidpunkten for att skara ostmassan. Den mater tiden fran tillsattning av lop till det forsta tecknet pa gelning (flockning) och multiplicerar denna tid med en specifik faktor beroende pa oststilen.'
  },
  {
    question: 'Hur upptacker jag flockningspunkten?',
    answer: 'Det vanligaste sattet ar skalsmetoden. Placera en liten, steriliserad, latt plastskal pa mjolkytan efter att ha tillsatt lop. Tryck eller snurra pa den forsiktigt varje minut. Inledningsvis snurrar den fritt. Ogonsblicket da skalen slutar snurra eller motstar rorelse eftersom mjolken borjat gelera ar flockningspunkten.'
  },
  {
    question: 'Varfor ar tidpunkten for att skara ostmassan sa kritisk?',
    answer: 'Att skara ostmassan vid ratt tidpunkt kontrollerar syneresis (fuktforlust). Att skara for tidigt resulterar i skor ostmassa, forlust av fett och lagt utbyte. Att skara for sent ger en seg ostmassa som haller kvar for mycket fukt eller inte drarneras ordentligt, vilket leder till sur, over-forand ost.'
  },
  {
    question: 'Vad ar en flockningsmultiplikator?',
    answer: 'En multiplikator ar en numerisk faktor som tillampas pa den primara flockningstiden for att berakna den totala koaguleringstiden fore skarning. Standardmultiplikatorer varierar fran 2.0x (torra ostar som Parmesan) till 5.0x eller 6.0x (fuktiga ostar som Camembert).'
  },
  {
    question: 'Hur paverkar temperatur och lopstyrka flockningen?',
    answer: 'Hogre temperaturer och starkare lop accelererar flockningen, vilket innebar att mjolken gelar snabbare. Men eftersom den totala skarningstiden ar direkt proportionell mot flockningstiden, kompenserar multiplikatormetoden automatiskt for dessa forandringar, vilket sakerstaller konsekventa ostmassaegenskaper.'
  }
];

const howTo = [
  {
    name: 'Tillsatt lop och starta tidtagaren',
    text: 'Ror i ditt lop ordentligt och starta omedelbart Fas 1-stoppuret i kalkylatorn.'
  },
  {
    name: 'Utfor skaltestet',
    text: 'Placera en latt plastskal pa mjolkytan och testa regelbundet for motstand.'
  },
  {
    name: 'Markera flockningspunkten',
    text: 'I ogonsblicket da skalen motstar snurrning eller tryck, klicka pa stoppknappen for att registrera flockningstiden.'
  },
  {
    name: 'Valj din osttyp eller multiplikator',
    text: 'Valj en oststil fran databasen eller ange en anpassad multiplikator. Appen beraknar den totala tiden och paborjar nedrakningen for skarning.'
  },
  {
    name: 'Skara ostmassan vid signalen',
    text: 'Nar tidtagaren nuddar noll har ostmassan uppnatt optimal spanning. Skara ostmassan i tarningar enligt ditt recept.'
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
} as const;

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
} as const;

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
} as const;

export const content: ToolLocaleContent = {
  slug: 'kalkylator-ost-flockningsmultiplikator',
  title,
  description: 'Hitta den exakta tidpunkten for att skara ostmassan vid konstnarlig osttillverkning. Anvand flockningsmultiplikatormetoden for att berakna koaguleringstid, kontrollera fuktighet och forbattra ostutbytet med var gratis kalkylator.',
  faqTitle: 'Vanliga Fragor',
  ui: {
    title: 'Ostflockningsmultiplikator',
    subtitle: 'Hitta det perfekta ostmassan skarningsfonstret baserat pa faktiskt gelbeteende',
    flocculationLabel: 'Primar Flockningstid (minuter:sekunder)',
    multiplierLabel: 'Flockningsmultiplikator',
    cheeseTypeLabel: 'Oststil Forinstalld',
    totalCoagulationLabel: 'Total Koaguleringstid',
    timeRemainingLabel: 'Aterstaende Tid till Skarning',
    flocculationTimeLabel: 'Flockningstid',
    moistureLabel: 'Forvantad Ostmassans Fuktretention',
    customOption: 'Anpassad Multiplikator',
    startTimer: 'Starta Lop-tidtagare',
    markFlocculation: 'Markera Flockning',
    resetTimer: 'Aterstall Tidtagare',
    warningTitle: 'Lopkvalitetsvarning',
    warningText: 'Den registrerade flockningstiden ar exceptionellt kort. Detta kan tyda pa en overdriven lopdos eller felaktig temperaturinstallning, vilket kan orsaka en gummiaktig konsistens eller bittra smaker.',
    phase1Title: 'Fas 1: Lopsattning och Flockning',
    phase2Title: 'Fas 2: Koaguleringsnedrakning',
    phaseComplete: 'Ostmassan ar redo att skaras!',
    statusWaiting: 'Ror i lop...',
    statusFlocculated: 'Flockning upptackt',
    statusCoagulating: 'Koagulerar...',
    statusReady: 'Redo att Skara',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Nar Ska Man Skara Ostmassan: Flockningsmultiplikatormetoden for Perfekt Ost Varje Batch',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Om du nagon gang har fragat dig <strong>"nar ska jag skara ostmassan?"</strong> eller <strong>"hur vet jag att ostmassan ar redo?"</strong>, ligger svaret i flockningsmultiplikatormetoden. Till skillnad fran industriell osttillverkning som forlitar sig pa fasta tidtagare, mater konstnarliga osttillverkare ogonblicket da mjolken borjar gelera (flockningspunkten) och multiplicerar den tiden med en stilspecifik faktor. Detta fangar alla variabler - mjolksyra, kalciumniva, temperatur, lopstyrka - i en enda matning. Var <strong>kalkylator for ostflockningsmultiplikator</strong> utfor matematiken sa du kan skara vid det perfekta ogonblicket, varje gang.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2.0x', label: 'Harda Ostar', icon: 'mdi:cheese' },
        { value: '3.0x', label: 'Halvharda Ostar', icon: 'mdi:cheese' },
        { value: '5.0x', label: 'Mjuka Ostar', icon: 'mdi:cheese' },
        { value: '10-15m', label: 'Typisk Flockning', icon: 'mdi:timer-outline' }
      ]
    },
    {
      type: 'title',
      text: 'Vanliga Osttillverkningsproblem Losta av Flockningsmetoden',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Inkonsekvent ostmassans fasthet:</strong> Fasta tidtagare kan inte ta hansyn till batchvariationer i mjolk. Flockningsmetoden anpassar sig till din faktiska mjolkemi.',
        '<strong>Lag ostutbyte:</strong> Att skara for tidigt eller for sent orsakar fett- och proteinforlust. Multiplikatormetoden riktar in sig pa det exakta fonstret for optimal retention.',
        '<strong>Fel fuktinnehall:</strong> Harda ostar behover torr ostmassa; mjuka ostar behover fuktig ostmassa. Olika multiplikatorer (2.0x till 6.0x) kontrollerar direkt syneresis.',
        '<strong>Varierande lopaktivitet:</strong> Lopstyrkan andras over tid och mellan marken. Flockningstidsmatning fangar den faktiska aktiviteten i ditt kar just nu.'
      ]
    },
    {
      type: 'title',
      text: 'Hur Man Utfor Skaltestet: Steg for Steg',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Skaltestet ar det enklaste sattet att upptacka flockning utan speciell utrustning. Efter att ha tillsatt lop och rort ordentligt, placera en liten steriliserad plastskal eller flasklock pa mjolkytan. Var 30:e till 60:e sekund, tryck eller snurra den forsiktigt. Medan mjolken fortfarande ar flytande, ror sig skalen fritt. Ogonsblicket da den motstar rorelse - det ar din <strong>flockningspunkt</strong>. Registrera denna tid och mata in den i kalkylatorn ovan.'
    },
    {
      type: 'tip',
      title: 'Anvand ett Flasklock for Okad Kanslighet',
      html: 'Ett latt plastflasklock ar mer kansligt an en skal och ger en tydligare stoppunkt. Sterilisera det i kokande vatten i 2 minuter fore anvandning, och lat det flyta pa mjolken fran ogonblicket du tillsatter lop.'
    },
    {
      type: 'tip',
      title: 'Hall Din Temperatur Stabil',
      html: 'Flockningstiden ar starkt temperaturberoende. En dropp pa bara 2C kan fordubbla din flockningstid. Hall mjolken vid en stabil temperatur (vanligtvis 30-35C beroende pa oststil) under hela koaguleringsfasen.'
    },
    {
      type: 'tip',
      title: 'Vakta pa Mycket Snabb Flockning',
      html: 'Om flockning intraffar pa under 8 minuter (480 sekunder) kan du ha tillsatt for mycket lop eller sa ar din mjolktemperatur for hog. Detta kan orsaka en gummiaktig konsistens och bittra smaker. Kalkylatorn kommer att varna dig om detta hander.'
    },
    {
      type: 'title',
      text: 'Flockningsmultiplikatorreferens efter Osttyp',
      level: 2
    },
    {
      type: 'table',
      headers: ['Oststil', 'Multiplikator', 'Forvantad Fukt', 'Skarningsfasthet', 'Mognadspotential'],
      rows: [
        ['Parmesan, Grana', '2.0x', 'Mycket Lag', 'Mycket Fast', '12+ manader'],
        ['Mozzarella (farsk)', '2.0x', 'Mycket Hog', 'Mjuk / Tojbar', 'Endast farsk'],
        ['Schweizisk, Alpin', '2.5x', 'Lag', 'Fast', '6-12 manader'],
        ['Cheddar, Gouda', '3.0x', 'Medel-Lag', 'Fast / Fjädrande', '3-12 manader'],
        ['Blastommeost', '3.5x - 4.0x', 'Medel', 'Mor', '2-6 manader'],
        ['Camembert, Brie', '5.0x', 'Hog', 'Mycket Mor', '3-8 veckor'],
        ['Mjolksyra / Farsk Chevre', '5.0x - 6.0x', 'Mycket Hog', 'Delikat', 'Farsk - 2 veckor']
      ]
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lag Multiplikator 2.0x to 2.5x',
          icon: 'mdi:cheese',
          description: 'Anvands for harda, torra ostsorter som kraver lag fuktretention.',
          highlight: false,
          points: ['Mozzarella & Parmesan: 2.0x', 'Alpina stilar: 2.5x', 'Snabb vassledranering', 'Producerar tata, mogningsbara ostmassor']
        },
        {
          title: 'Medel Multiplikator 3.0x to 4.0x',
          icon: 'mdi:cheese',
          description: 'Standardintervall for halvharda ostar som balanserar fukt och syra.',
          highlight: true,
          points: ['Cheddar & Gouda: 3.0x', 'Blastommeostar: 3.5x till 4.0x', 'Balanserad vassleutpressning', 'Flexibel mognadspotential']
        },
        {
          title: 'Hog Multiplikator 5.0x to 6.0x',
          icon: 'mdi:cheese',
          description: 'Anvands for mjuka, kramiga, hogfuktiga ostar.',
          highlight: false,
          points: ['Camembert & Brie: 5.0x', 'Mjolksyra & mjuka vitmogelostar', 'Hog fuktretention', 'Delikat, kramig pasteutveckling']
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Felsokning: 3 Tecken pa att Din Ostmassa Inte Stelnar Rätt',
      html: '<strong>Flockning pa under 6 minuter:</strong> For mycket lop eller mjolken for varm. Minska lop med 25% nasta batch. <strong>Flockning tar over 25 minuter:</strong> Lop kan vara utganget, mjolken for kall, eller kalciumhalten for lag. Tillsatt kalciumklorid. <strong>Ostmassan ar slemmig eller sprod vid skarningstidpunkten:</strong> Multiplikatorn kan vara for hog eller for lag for din oststil. Justera i steg om 0.5x.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Harda Ostar (Parmesan, Alpine)',
      html: 'Anvand <strong>2.0x - 2.5x multiplikator</strong>. Skara ostmassan tidigare for maximal vassleutpressning. Denna ostmassa skars nar gelen fortfarande ar relativt skor, vilket producerar en tat, torr ostmassa idealisk for lang mognad. Kalkylatorn visar en kortare total koaguleringstid.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Halvharda Ostar (Cheddar, Gouda)',
      html: 'Anvand <strong>3.0x multiplikator</strong>. Standardintervall for det mesta av konstnarlig osttillverkning. Balanserar fuktretention med vassledranering. Ostmassan ar fjädrande och bryts rent. De flesta ostecept faller inom denna kategori.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Mjuka Ostar (Camembert, Brie)',
      html: 'Anvand <strong>5.0x - 6.0x multiplikator</strong>. Lat gelen styrkas avsevärt innan skarning. Detta laser in fukt inuti ostmassan och skapar den kramiga, bredbara konsistensen som kännetecknar vitmogelostar. Hantera ostmassan forsiktigt for att undvika att forlora den kvarhallna vasslen.'
    },
    {
      type: 'title',
      text: 'Ordlista for Konstnarlig Osttillverkning',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Flockningspunkt', definition: 'Ogonblicket i osttillverkningsprocessen da mjolkproteiner borjar klumpa ihop sig och bilda en mjuk gel.' },
        { term: 'Lop', definition: 'Ett komplex av enzymer (framst chymosin) som anvands for att koagulera mjolk och separera den i fasta anmen (ostmassa) och vatska (vassle).' },
        { term: 'Syneresis', definition: 'Extraktion eller utpressning av en vatska fran en gel, till exempel vassle som draneras fran ostmassor.' },
        { term: 'Koaguleringstid', definition: 'Den totala tiden fran lop-tillsattning tills ostmassan ar redo att skaras.' }
      ]
    },
    {
      type: 'summary',
      title: 'Viktiga Slutsatser for Perfekt Ostmassanskarning',
      items: [
        'Mat flockningstiden precis med skal testet. Mata in den i kalkylatorn ovan.',
        'Valj den multiplikator som matchar din oststil: 2.0x for harda, 3.0x for halvharda, 5.0x for mjuka ostar.',
        'Hall mjolktemperaturen stabil under koagulering. Aven en forandring pa 2C forandrar flockningstiden avsevärt.',
        'Om flockning intraffar inom 8 minuter, minska lop nasta gang. Om over 25 minuter, kontrollera lopets farskhet.',
        'Kalkylatorn utfor matematiken sa du kan fokusera pa teknik och konsekvens.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
