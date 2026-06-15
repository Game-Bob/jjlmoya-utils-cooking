import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Kaasvlokkingsmultiplicator Calculator';
const description = 'Bereken exact het juiste moment om de wrongel te snijden bij ambachtelijke kaasbereiding. Gebruik de vlokkingsmultiplicator-methode om stollingstijd te berekenen, vochtgehalte te beheren en kaasopbrengst te verbeteren met onze gratis calculator.';
const faq = [
  {
    question: 'Wat is de vlokkingstest in de kaasbereiding?',
    answer: 'De vlokkingstest is een techniek om het exacte moment te bepalen waarop de wrongel gesneden moet worden. Het meet de tijd van het toevoegen van stremsel tot het eerste teken van gelering (vlokking), en vermenigvuldigt deze tijd met een specifieke factor afhankelijk van de kaassoort.'
  },
  {
    question: 'Hoe detecteer ik het vlokkingstijdstip?',
    answer: 'De meest gebruikelijke methode is de kommetjesmethode. Plaats een klein, gesteriliseerd, licht plastic kommetje op het melkoppervlak na het toevoegen van stremsel. Tik of draai het elke minuut voorzichtig. Aanvankelijk draait het vrij. Het moment dat het kommetje stopt met draaien of weerstand biedt omdat de melk begint te geleren is het vlokkingstijdstip.'
  },
  {
    question: 'Waarom is het moment van wrongelsnijden zo belangrijk?',
    answer: 'Het op het juiste moment snijden van wrongel controleert de synerese (vochtverlies). Te vroeg snijden geeft breekbare wrongel, verlies van vet en een lage opbrengst. Te laat snijden geeft een taaie wrongel die te veel vocht vasthoudt of niet goed uitlekt, wat leidt tot zure, oververzuurde kaas.'
  },
  {
    question: 'Wat is een vlokkingsmultiplicator?',
    answer: 'Een multiplier is een numerieke factor die wordt toegepast op de primaire vlokkingstijd om de totale stollingstijd te berekenen voordat er wordt gesneden. Standaardmultiplicatoren varieren van 2.0x (droge kazen zoals Parmesan) tot 5.0x of 6.0x (vochtige kazen zoals Camembert).'
  },
  {
    question: 'Hoe beinvloeden temperatuur en stremselsterkte de vlokking?',
    answer: 'Hogere temperaturen en sterker stremsel versnellen de vlokking, wat betekent dat de melk sneller geleert. Omdat de totale snijtijd echter recht evenredig is met de vlokkingstijd, compenseert de multiplicatormethode automatisch voor deze veranderingen, wat zorgt voor consistente wrongeleigenschappen.'
  }
];

const howTo = [
  {
    name: 'Voeg stremsel toe en start de timer',
    text: 'Roer je stremsel er goed door en start onmiddellijk de Fase 1-stopwatch in de calculator.'
  },
  {
    name: 'Voer de kommetjestest uit',
    text: 'Plaats een licht plastic kommetje op het melkoppervlak en test regelmatig op weerstand.'
  },
  {
    name: 'Markeer het vlokkingstijdstip',
    text: 'Op het moment dat het kommetje weerstand biedt tegen draaien of tikken, klik op de stopknop om de vlokkingstijd vast te leggen.'
  },
  {
    name: 'Selecteer je kaastype of multiplier',
    text: 'Kies een kaasstijl uit de database of voer een aangepaste multiplier in. De app berekent de totale tijd en start de aftelling voor het snijden.'
  },
  {
    name: 'Snijd de wrongel bij het signaal',
    text: 'Wanneer de timer op nul staat, heeft de wrongel de optimale spanning bereikt. Snijd de wrongel in blokjes zoals aangegeven in je recept.'
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
  slug: 'kaas-vlokkingsmultiplicator-calculator',
  title,
  description: 'Bereken exact het juiste moment om de wrongel te snijden bij ambachtelijke kaasbereiding. Gebruik de vlokkingsmultiplicator-methode om stollingstijd te berekenen, vochtgehalte te beheren en kaasopbrengst te verbeteren met onze gratis calculator.',
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    title: 'Kaasvlokkingsmultiplicator',
    subtitle: 'Vind het perfecte wrongelsnijvenster op basis van werkelijk geleringsgedrag',
    flocculationLabel: 'Primaire Vlokkingstijd (minuten:seconden)',
    multiplierLabel: 'Vlokkingsmultiplicator',
    cheeseTypeLabel: 'Kaasstijl Voorinstelling',
    totalCoagulationLabel: 'Totale Stollingstijd',
    timeRemainingLabel: 'Resterende Tijd tot Snijden',
    flocculationTimeLabel: 'Vlokkingstijd',
    moistureLabel: 'Verwachte Wrongelvochtretentie',
    customOption: 'Aangepaste Multiplier',
    startTimer: 'Start Stremsel Timer',
    markFlocculation: 'Markeer Vlokking',
    resetTimer: 'Reset Timer',
    warningTitle: 'Stremselkwaliteitswaarschuwing',
    warningText: 'De geregistreerde vlokkingstijd is uitzonderlijk kort. Dit kan wijzen op een overmatige stremseldosering of onjuiste temperatuurinstellingen, wat een rubberachtige textuur of bittere smaken kan veroorzaken.',
    phase1Title: 'Fase 1: Stremselen & Vlokking',
    phase2Title: 'Fase 2: Stollingsaftelling',
    phaseComplete: 'Wrongel is klaar om te snijden!',
    statusWaiting: 'Stremsel wordt ingeroerd...',
    statusFlocculated: 'Vlokking gedetecteerd',
    statusCoagulating: 'Aan het stollen...',
    statusReady: 'Klaar om te Snijden',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Wanneer de Wrongel Snijden: De Vlokkingsmultiplicator Methode voor Perfecte Kaas Elke Batch',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Als je jezelf ooit hebt afgevraagd <strong>"wanneer moet ik de wrongel snijden?"</strong> of <strong>"hoe weet ik dat de wrongel klaar is?"</strong>, dan ligt het antwoord in de vlokkingsmultiplicator-methode. In tegenstelling tot industrieele kaasbereiding die vertrouwt op vaste timers, meten ambachtelijke kaasmakers het moment waarop de melk voor het eerst begint te geleren (het vlokkingstijdstip) en vermenigvuldigen die tijd met een stijl-specifieke factor. Dit vangt alle variabelen - melkzuurgraad, calciumgehalte, temperatuur, stremselsterkte - in een enkele meting. Onze <strong>kaasvlokkingsmultiplicator calculator</strong> doet het rekenwerk zodat jij op het perfecte moment kunt snijden, elke keer weer.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2.0x', label: 'Harde Kazen', icon: 'mdi:cheese' },
        { value: '3.0x', label: 'Halfharde Kazen', icon: 'mdi:cheese' },
        { value: '5.0x', label: 'Zachte Kazen', icon: 'mdi:cheese' },
        { value: '10-15m', label: 'Typische Vlokkingstijd', icon: 'mdi:timer-outline' }
      ]
    },
    {
      type: 'title',
      text: 'Veelvoorkomende Kaasbereidingsproblemen Opgelost door de Vlokkingsmethode',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Inconsistente wrongelvastheid:</strong> Vaste timers kunnen geen rekening houden met batchvariaties in melk. De vlokkingsmethode past zich aan je werkelijke melkchemie aan.',
        '<strong>Lage kaasopbrengst:</strong> Te vroeg of te laat snijden veroorzaakt vet- en eiwitverlies. De multiplicatormethode richt zich op het exacte venster voor optimale retentie.',
        '<strong>Verkeerd vochtgehalte:</strong> Harde kazen hebben droge wrongel nodig; zachte kazen hebben vochtige wrongel nodig. Verschillende multiplicatoren (2.0x tot 6.0x) controleren direct de synerese.',
        '<strong>Variabele stremselactiviteit:</strong> Stremselsterkte verandert in de loop van de tijd en tussen merken. Vlokkingstijdregistratie vangt de werkelijke activiteit in je ketel op dit moment.'
      ]
    },
    {
      type: 'title',
      text: 'Hoe Voer je de Kommetjestest Uit: Stap voor Stap',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'De kommetjestest is de eenvoudigste manier om vlokking te detecteren zonder speciale apparatuur. Na het toevoegen van stremsel en grondig roeren, plaats je een klein gesteriliseerd plastic kommetje of flessendop op het melkoppervlak. Tik of draai het elke 30 tot 60 seconden voorzichtig. Terwijl de melk nog vloeibaar is, beweegt het kommetje vrij. Het moment dat het weerstand biedt - dat is je <strong>vlokkingstijdstip</strong>. Noteer deze tijd en voer hem in in de calculator hierboven.'
    },
    {
      type: 'tip',
      title: 'Gebruik een Flessendop voor Meer Gevoeligheid',
      html: 'Een lichte plastic flessendop is gevoeliger dan een kommetje en geeft een duidelijker stoppunt. Steriliseer het gedurende 2 minuten in kokend water voor gebruik en laat het vanaf het moment van stremseltoevoeging op de melk drijven.'
    },
    {
      type: 'tip',
      title: 'Houd je Temperatuur Stabiel',
      html: 'De vlokkingstijd is sterk temperatuurafhankelijk. Een daling van slechts 2C kan je vlokkingstijd verdubbelen. Houd de melk op een stabiele temperatuur (doorgaans 30-35C afhankelijk van de kaasstijl) gedurende de hele stollingsfase.'
    },
    {
      type: 'tip',
      title: 'Let op Zeer Snelle Vlokking',
      html: 'Als vlokking optreedt in minder dan 8 minuten (480 seconden), heb je mogelijk te veel stremsel toegevoegd of is je melktemperatuur te hoog. Dit kan een rubberachtige textuur en bittere smaken veroorzaken. De calculator waarschuwt je als dit gebeurt.'
    },
    {
      type: 'title',
      text: 'Vlokkingsmultiplicator Referentie per Kaastype',
      level: 2
    },
    {
      type: 'table',
      headers: ['Kaasstijl', 'Multiplier', 'Verwacht Vocht', 'Snijvastheid', 'Rijpingspotentieel'],
      rows: [
        ['Parmesan, Grana', '2.0x', 'Zeer Laag', 'Zeer Vast', '12+ maanden'],
        ['Mozzarella (vers)', '2.0x', 'Zeer Hoog', 'Zacht / Rekbaar', 'Alleen vers'],
        ['Zwitserse, Alpine', '2.5x', 'Laag', 'Vast', '6-12 maanden'],
        ['Cheddar, Gouda', '3.0x', 'Middel-Laag', 'Vast / Verend', '3-12 maanden'],
        ['Blauwschimmelkaas', '3.5x - 4.0x', 'Middel', 'Teder', '2-6 maanden'],
        ['Camembert, Brie', '5.0x', 'Hoog', 'Zeer Teder', '3-8 weken'],
        ['Melkzuur / Verse Chevre', '5.0x - 6.0x', 'Zeer Hoog', 'Delicaat', 'Vers - 2 weken']
      ]
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lage Multiplier 2.0x to 2.5x',
          icon: 'mdi:cheese',
          description: 'Gebruikt voor harde, droge kaasvarieteiten die een lage vochtretentie vereisen.',
          highlight: false,
          points: ['Mozzarella & Parmesan: 2.0x', 'Alpine stijlen: 2.5x', 'Snelle wei-afvoer', 'Levert dichte, rijping-bestendige wrongel']
        },
        {
          title: 'Medium Multiplier 3.0x to 4.0x',
          icon: 'mdi:cheese',
          description: 'Standaardbereik voor halfharde kazen die vocht en zuurgraad in balans brengen.',
          highlight: true,
          points: ['Cheddar & Gouda: 3.0x', 'Blauwschimmelkazen: 3.5x tot 4.0x', 'Gebalanceerde wei-uitdrijving', 'Flexibel rijpingspotentieel']
        },
        {
          title: 'Hoge Multiplier 5.0x to 6.0x',
          icon: 'mdi:cheese',
          description: 'Gebruikt voor zachte, romige, hoog-vochtige kazen.',
          highlight: false,
          points: ['Camembert & Brie: 5.0x', 'Melkzuur & zachte witte schimmelkorst', 'Hoge vochtretentie', 'Delicate, romige paste-ontwikkeling']
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Probleemoplossing: 3 Tekenen dat je Wrongel Niet Goed Stolt',
      html: '<strong>Vlokking in minder dan 6 minuten:</strong> Te veel stremsel of melk te heet. Verminder stremsel met 25% volgende batch. <strong>Vlokking duurt langer dan 25 minuten:</strong> Stremsel kan verlopen zijn, melk te koud, of calciumgehalte te laag. Voeg calciumchloride toe. <strong>Wrongel is slijmerig of bros op snijtijdstip:</strong> De multiplier kan te hoog of te laag zijn voor jouw kaasstijl. Pas aan met stappen van 0.5x.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Harde Kazen (Parmesan, Alpine)',
      html: 'Gebruik <strong>2.0x - 2.5x multiplier</strong>. Snijd de wrongel eerder voor maximale wei-uitdrijving. Deze wrongel wordt gesneden wanneer de gel nog relatief breekbaar is, wat een dichte, droge wrongel oplevert die ideaal is voor lange rijping. De calculator toont een kortere totale stollingstijd.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Halfharde Kazen (Cheddar, Gouda)',
      html: 'Gebruik <strong>3.0x multiplier</strong>. Het standaardbereik voor de meeste ambachtelijke kaasbereiding. Balanseert vochtretentie met wei-afvoer. Wrongel is verend en breekt schoon. De meeste kaasrecepten vallen in deze categorie.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Zachte Kazen (Camembert, Brie)',
      html: 'Gebruik <strong>5.0x - 6.0x multiplier</strong>. Laat de gel aanzienlijk versterken voordat je snijdt. Dit sluit vocht in de wrongel op, wat de romige, smeerbare textuur creert die kenmerkend is voor witte schimmelkorstkazen. Ga voorzichtig met de wrongel om om verlies van de vastgehouden wei te voorkomen.'
    },
    {
      type: 'title',
      text: 'Ambachtelijke Kaasbereiding Wrongel Woordenlijst',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Vlokkingstijdstip', definition: 'Het moment in het kaasbereidingsproces waarop melkeiwitten beginnen samen te klonteren en een zachte gel vormen.' },
        { term: 'Stremsel', definition: 'Een complex van enzymen (voornamelijk chymosine) dat wordt gebruikt om melk te laten stollen, waardoor het wordt gescheiden in vaste stoffen (wrongel) en vloeistof (wei).' },
        { term: 'Synerese', definition: 'Het uittreden of uitdrijven van een vloeistof uit een gel, zoals wei die uit kaaswrongel druipt.' },
        { term: 'Stollingstijd', definition: 'De totale duur van het toevoegen van stremsel totdat de wrongel klaar is om te worden gesneden.' }
      ]
    },
    {
      type: 'summary',
      title: 'Belangrijkste Punten voor Perfect Wrongelsnijden',
      items: [
        'Meet de vlokkingstijd nauwkeurig met behulp van de kommetjestest. Voer deze in de calculator hierboven in.',
        'Selecteer de multiplier die past bij jouw kaasstijl: 2.0x voor harde, 3.0x voor halfharde, 5.0x voor zachte kazen.',
        'Houd de melktemperatuur stabiel tijdens de stolling. Zelfs een verandering van 2C beinvloedt de vlokkingstijd aanzienlijk.',
        'Als vlokking binnen 8 minuten optreedt, verminder dan de volgende keer het stremsel. Bij meer dan 25 minuten, controleer de versheid van het stremsel.',
        'De calculator doet het rekenwerk zodat jij je kunt concentreren op techniek en consistentie.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
