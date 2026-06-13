import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Sorbet Brix Calculator: SuikertotFruitverhouding & Vriespuntcontrole voor Perfecte Schepbaarheid';
const description = 'Stel de exacte balans van suiker, fruitpuree en water in voor elke keer schepbare sorbet. Bereken Brix, PAC-vriespuntverlaging en los ijzige of sopperige textuurproblemen op met nauwkeurige metingen.';

const faq = [
  {
    question: 'Wat is Brix en waarom is het belangrijk bij sorbet?',
    answer: 'Brix (°Bx) meet het percentage opgeloste vaste stoffen  -  voornamelijk suikers  -  in een vloeibare oplossing. Bij sorbets is een Brix-niveau tussen 25% en 30% (idealiter 28%) essentieel voor de juiste textuur. Onder 25% bevriest de sorbet tot een keihard ijzig blok omdat er niet genoeg suiker is om de vorming van ijskristallen te verstoren. Boven 30% daalt het vriespunt zo laag dat de sorbet sopperig blijft en nooit volledig opstijft in een standaard vriezer.',
  },
  {
    question: 'Hoe bereken ik de juiste hoeveelheid suiker voor mijn sorbetrecept?',
    answer: 'Begin met het wegen van je fruitpuree en het meten van de natuurlijke Brix met een refractometer (of kies een vooringestelde waarde). Voer deze in de calculator in samen met je gewenste batchgrootte en doel-Brix (standaard 28%). De calculator bepaalt hoeveel sacharose en water je moet toevoegen om de totale mix in het optimale Brix-bereik van 25-30% te brengen. Hij houdt ook rekening met de vriespuntverlaging (PAC), zodat je dextrose kunt gebruiken als de sorbet anders te hard zou zijn.',
  },
  {
    question: 'Waarom is mijn zelfgemaakte sorbet altijd te hard of ijzig?',
    answer: 'Een ijzige, keiharde sorbet betekent vrijwel altijd dat de totale suikerconcentratie te laag is (onder 25% Brix). Het water in het fruit bevriest tot grote ijskristallen in plaats van gedeeltelijk vloeibaar te blijven. De oplossing: voeg meer sacharose toe om de Brix te verhogen, of vervang een deel van de sacharose door dextrose  -  dextrose heeft bijna het dubbele antivriesvermogen (PAC 190 vs 100) en is 30% minder zoet, zodat je het vriespunt kunt verlagen zonder de sorbet plakkerig zoet te maken.',
  },
  {
    question: 'Wat is het verschil tussen het gebruik van sacharose en dextrose in sorbet?',
    answer: 'Sacharose (tafelsuiker) is de standaard zoetstof met een PAC van 100 en POD van 100. Dextrose (glucosepoeder) heeft een PAC van 190  -  bijna tweemaal de vriespuntverlaging  -  maar slechts 70% van de zoetheid (POD 70). Dit betekent dat dextrose sorbet per gram veel effectiever verzacht zonder te veel te verzoeten. Gebruik dextrose wanneer je fruit van nature al zoet is (bijv. mango, banaan) en je meer antivriesvermogen nodig hebt zonder extra zoetheid toe te voegen.',
  },
  {
    question: 'Hoe beïnvloedt de natuurlijke fruitsuiker de berekening?',
    answer: 'Verschillende vruchten hebben sterk uiteenlopende natuurlijke suikergehaltes: citroenen en limoenen zitten rond 2% Brix, aardbeien ongeveer 8%, mango\'s en druiven 14-18%, en bananen tot 22%. De calculator houdt rekening met de natuurlijke Brix van je fruit, zodat je niet per ongeluk te hoog of te laag uitkomt met de totale suikerconcentratie. Daarom wordt het gebruik van een refractometer aanbevolen om je eigen fruit te meten  -  seizoensvariaties kunnen de Brix met 3-4 punten verschuiven.',
  },
];

const howTo = [
  {
    name: 'Weeg je fruitpuree',
    text: 'Meet het exacte gewicht van je fruitpuree of sap in grammen.',
  },
  {
    name: 'Schat of meet de fruit-Brix',
    text: 'Gebruik een refractometer om de exacte Brix van je fruit te vinden, of kies een typische waarde uit onze database (bijv. Mango: 14%, Aardbei: 8%).',
  },
  {
    name: 'Voer gewichten in de calculator in',
    text: 'Voer je fruitgewicht, fruit-Brix en doel-Brix in (standaard is 28%).',
  },
  {
    name: 'Bekijk aanbevolen sirooptoevoegingen',
    text: 'De calculator toont meteen de aanbevolen hoeveelheid suiker en water om toe te voegen voor het 28% Brix-doel.',
  },
  {
    name: 'Pas suikersoorten aan indien nodig',
    text: 'Als het mengsel onvoldoende vriespuntverlaging heeft, voeg dan dextrose toe in plaats van sacharose.',
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
  slug: 'brix-sorbet-dichtheid-calculator',
  title: 'Brix Sorbet Dichtheidscalculator',
  description: 'Stel de exacte balans van suiker, fruitpuree en water in voor elke keer schepbare sorbet. Los ijzige of sopperige textuur op met nauwkeurige Brix- en PAC-berekeningen.',
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    fruitWeightLabel: 'Gewicht Fruitpuree',
    fruitBrixLabel: 'Fruit Brix',
    sugarWeightLabel: 'Gewicht Sacharose (Suiker)',
    dextroseWeightLabel: 'Gewicht Dextrose',
    waterWeightLabel: 'Gewicht Toegevoegd Water',
    targetBrixLabel: 'Doel Brix',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    brixUnit: '% Bx',
    totalBrixLabel: 'Totale Mix Brix',
    totalWeightLabel: 'Totaal Batchgewicht',
    totalPACLabel: 'Vriespuntverlaging (PAC)',
    statusLabel: 'Sorbet Textuurprofiel',
    statusSoft: 'Te Zacht / Sopperig',
    statusOptimal: 'Optimale Schepbaarheid',
    statusHard: 'Te Hard / IJzig',
    recommendedTitle: 'Siroopaanbeveling (50% Fruit)',
    recommendedSugarLabel: 'Benodigde Sacharose',
    recommendedWaterLabel: 'Benodigd Water',
    fruitPresetLabel: 'Fruit Voorinstelling',
    presetCustom: 'Aangepast Fruit',
    presetLemon: 'Citroen / Limoen (2% Bx)',
    presetStrawberry: 'Aardbei / Framboos (8% Bx)',
    presetOrange: 'Sinaasappel / Perzik (10% Bx)',
    presetMango: 'Mango / Druif / Kers (14% Bx)',
    presetBanana: 'Banaan (21% Bx)',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'De Wetenschap van Sorbet Balanceren: Brix, PAC en Vaste Stoffen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Professionele sorbet maken is een oefening in voedingswetenschap. In tegenstelling tot roomijs, dat afhankelijk is van melkvetten en eiwitten voor structuur en zachtheid, vertrouwt sorbet volledig op opgeloste suikers en stabilisatoren. De concentratie van deze opgeloste suikers wordt gemeten in graden Brix (°Bx). Een perfecte sorbetmix vereist een suikerconcentratie van 25% tot 30% Brix. Als het suikergehalte te laag is, bevriest het water tot grote, naaldachtige ijskristallen, waardoor een korrelig, keihard blok ontstaat. Is het te hoog, dan wordt het vriespunt te ver verlaagd en blijft de sorbet een halfvloeibare siroop in gewone thuis- of horecavriezers.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '28%',
          label: 'Ideale Doel-Brix',
          icon: 'mdi:target',
        },
        {
          value: '25-30%',
          label: 'Veilig Brix-bereik',
          icon: 'mdi:gauge',
        },
        {
          value: '≈50%',
          label: 'Optimale Fruitverhouding',
          icon: 'mdi:fruit-grapes',
        },
        {
          value: 'PAC 100/190',
          label: 'Sacharose / Dextrose',
          icon: 'mdi:molecule',
        },
      ],
    },
    {
      type: 'title',
      text: 'PAC Begrijpen: De Vriespuntverlagingsfactor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC (Potere Anticongelante, of Antivriesvermogen) is een maatstaf die door patissiers wordt gebruikt om te kwantificeren hoeveel een ingrediënt het vriespunt van water verlaagt. Sacharose, ofwel gewone tafelsuiker, is de basisreferentie met een PAC-waarde van 100. Sacharose is echter erg zoet. Als je meer vaste stoffen moet toevoegen of het antivriesvermogen wilt verhogen zonder de sorbet misselijkmakend zoet te maken, kun je een deel van de sacharose vervangen door dextrose. Dextrose heeft een PAC van 190, waardoor het bijna twee keer zo effectief is als sacharose in het voorkomen van ijskristalvorming, terwijl het slechts 70% zo zoet is.',
    },
    {
      type: 'title',
      text: 'Sacharose vs Dextrose: De Juiste Suiker Kiezen voor Sorbet',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Sacharose (Tafelsuiker)',
          icon: 'mdi:cube-outline',
          description: 'De standaard zoetstof en basislijn voor alle PAC- en POD-berekeningen. Zorgt voor heldere zoetheid en body.',
          points: [
            'PAC-waarde: 100 (basislijn)',
            'POD-waarde: 100 (volledige zoetheid)',
            'Beste voor: primaire zoetstofrol',
            'Voegt body en standaard textuur toe',
          ],
        },
        {
          title: 'Dextrose (Glucosepoeder)',
          icon: 'mdi:grain',
          description: 'Een monosacharide met bijna het dubbele vriespuntverlagingsvermogen en aanzienlijk minder zoetheid.',
          highlight: true,
          points: [
            'PAC-waarde: 190 (bijna 2� -  sacharose)',
            'POD-waarde: 70 (30% minder zoet)',
            'Beste voor: harde sorbets verzachten',
            'Ideaal wanneer fruit al erg zoet is',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Referentietabel Typische FruitBrixwaarden',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Fruitsoort', 'Gemiddelde Brixwaarde', 'Watergehalte', 'Zuurtegraad'],
      rows: [
        ['Citroen / Limoen', '2% - 4% Bx', 'Zeer Hoog', 'Extreem Hoog'],
        ['Aardbei / Framboos', '7% - 9% Bx', 'Hoog', 'Matig'],
        ['Sinaasappel / Perzik', '9% - 11% Bx', 'Middelhoog', 'Laag-Matig'],
        ['Appel / Peer', '11% - 13% Bx', 'Middel', 'Laag'],
        ['Mango / Druif / Kers', '14% - 18% Bx', 'Middellaag', 'Zeer Laag'],
        ['Banaan', '20% - 22% Bx', 'Laag', 'Verwaarloosbaar'],
      ],
    },
    {
      type: 'title',
      text: 'Hoe Je Je Sorbetmix Kalibreert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Om een sorbet te balanceren, meet je eerst het gewicht en de suikerconcentratie van je fruitpuree. Het gebruik van een refractometer wordt sterk aanbevolen voor nauwkeurigheid, aangezien fruitzoetheid varieert per seizoen en rijpheid. Als je geen refractometer hebt, kun je een schatting maken met behulp van de bovenstaande tabel. Zodra je deze waarden hebt, voer je ze in onze calculator in om de exacte hoeveelheid suikersiroop (water en suiker) te bepalen die nodig is om de totale mix op de doel-Brix van 28% te brengen. Voor een optimale textuur streef je naar een fruitverhouding van ongeveer 50% van het totale batchgewicht.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Waarom Is Mijn Sorbet IJzig of Te Hard?',
      html: 'Een sorbet die keihard bevriest heeft vrijwel altijd <strong>te weinig suiker</strong> (Brix onder 25%). Het water in de fruitpuree kristalliseert tot grote, scherpe ijssplinters. Los dit op door meer sacharose toe te voegen om de totale Brix te verhogen, of vervang een deel van de sacharose door dextrose om de PAC te verhogen zonder te veel te verzoeten. Controleer ook of je fruitverhouding niet te hoog is  -  meer dan 60% fruit laat onvoldoende ruimte voor suiker vaste stoffen.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Waarom Is Mijn Sorbet Sopperig of Bevriest Hij Niet?',
      html: 'Een sorbet die zacht of soepachtig blijft heeft <strong>te veel suiker</strong> (Brix boven 30%). Het vriespunt is zo ver verlaagd dat je vriezer de mix niet kan laten stollen. Verminder de totale suikerinvoer, of als het fruit van nature erg zoet is (bijv. banaan of mango), gebruik dan verhoudingsgewijs minder toegevoegde sacharose. Controleer je doeltemperatuur: thuisvriezers werken op −18°C; een PAC die geschikt is voor −12°C is te hoog voor standaard vriezers.',
    },
    {
      type: 'tip',
      title: 'Meet Brix Nauwkeurig met een Refractometer',
      html: 'Een digitale of optische refractometer is de allerbeste investering voor consistente sorbets. Fruitrijpheid varieert sterk per seizoen, variëteit en herkomst  -  een aardbei in juni kan 6°Bx meten, terwijl dezelfde variëteit in augustus 10°Bx haalt. Knijp een druppel puree op het prisma, lees de waarde af en voer deze in de calculator in. Gokken op basis van tabellen alleen levert inconsistente resultaten op.',
    },
    {
      type: 'title',
      text: 'StapvoorStap: Hoe Je Deze Calculator Gebruikt',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Weeg je fruitpuree</strong>  -  Gebruik een digitale weegschaal om het exacte gewicht van je gezeefde fruitpuree of sap in grammen te meten.',
        '<strong>Meet of schat de fruit-Brix</strong>  -  Gebruik een refractometer voor precisie, of kies een voorinstelling uit de dropdown (Citroen 2%, Aardbei 8%, Mango 14%, etc.).',
        '<strong>Stel je doel-Brix in</strong>  -  De standaard is 28%, de ideale sweet spot. Pas aan tussen 25% en 30% afhankelijk van je voorkeur.',
        '<strong>Bekijk de siroopaanbeveling</strong>  -  De calculator toont meteen hoeveel sacharose en water je moet toevoegen om je doel te bereiken.',
        '<strong>Controleer de textuurindicator</strong>  -  De PAC-meter geeft aan of de sorbet te hard, optimaal schepbaar of te zacht zal zijn bij jouw vriezertemperatuur.',
        '<strong>Pas aan met dextrose indien nodig</strong>  -  Als de sorbet naar verwachting hard wordt maar al zoet genoeg is, vervang dan een deel van de sacharose door dextrose om de PAC te verhogen zonder extra zoetheid toe te voegen.',
      ],
    },
    {
      type: 'title',
      text: 'Belangrijke Sorbettermen',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Brix (°Bx)',
          definition: 'Het percentage opgeloste vaste stoffen (voornamelijk suikers) in een vloeibare oplossing. Bij sorbets is 25-30°Bx het streefbereik voor ideale textuur en schepbaarheid.',
        },
        {
          term: 'PAC (Potere Anticongelante)',
          definition: 'Antivriesvermogen  -  een maat voor hoeveel een ingrediënt het vriespunt van water verlaagt. Sacharose heeft een basis-PAC van 100; dextrose is 190.',
        },
        {
          term: 'POD (Potere Dolcificante)',
          definition: 'Zoetkracht ten opzichte van sacharose (basislijn 100). Dextrose heeft een POD van 70, wat betekent dat het gram-voor-gram 30% minder zoet is dan tafelsuiker.',
        },
        {
          term: 'Dextrose',
          definition: 'Een monosacharide (glucosepoeder) gebruikt in sorbetformulering om het vriespunt te verlagen zonder overmatige zoetheid toe te voegen. PAC 190, POD 70.',
        },
        {
          term: 'Refractometer',
          definition: 'Een optisch of digitaal instrument dat de Brix-waarde van een vloeistof meet door te lezen hoe licht buigt (refracteert) door het monster. Essentieel voor sorbetconsistentie.',
        },
        {
          term: 'Suikersiroop',
          definition: 'Een 50/50 mengsel op gewichtsbasis van sacharose en water, verwarmd tot het is opgelost. Het standaardmiddel om suiker aan sorbetbases toe te voegen.',
        },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
