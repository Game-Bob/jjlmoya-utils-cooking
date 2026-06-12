import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "IJs PAC POD Calculator Cryo Formulatie Gids";
const description = "Bereken antivrieskracht en zoetkracht voor ijs. Formuleer precise suikerprofielen, vaste stof percentage en serveertemperaturen.";
const faq = [
  {
    question: "Wat is PAC in ijsbereiding?",
    answer: "PAC staat voor Potere Anticongelante, wat de antivrieskracht vertegenwoordigt. Het bepaalt hoeveel water bevroren blijft bij een bepaalde serveertemperatuur en controleert de fysieke hardheid van het ijs."
  },
  {
    question: "Wat is POD en waarom is het belangrijk?",
    answer: "POD staat voor Potere Dolcificante, wat de relatieve zoetkracht weergeeft. Het meet de zoetheid ten opzichte van sucrose (tafelsuiker), dat een basiswaarde van 100 heeft."
  },
  {
    question: "Waarom gebruiken we meerdere suikers in ijs?",
    answer: "Verschillende suikers hebben unieke PAC en POD eigenschappen. Dextrose biedt bijvoorbeeld hoge antivrieskracht met matige zoetheid, terwijl sucrose standaard body en zoetheid levert. Door ze te mengen kunt u de romigheid controleren zonder het product te zoet te maken."
  },
  {
    question: "Wat is het optimale vaste stof percentage voor ijs?",
    answer: "Het totale vaste stof percentage ligt typisch tussen 36% en 42%. Een percentage onder dit bereik leidt tot ijzige texturen, terwijl een percentage erboven kan resulteren in zandigheid of een zwaar mondgevoel."
  }
];
const howTo = [
  {
    name: "Stel de basismix en serveertemperatuur in",
    text: "Bepaal het gewicht van uw vloeibare basismix en voer de beoogde serveertemperatuur in waartegen u het ijs wilt serveren."
  },
  {
    name: "Voer suikerhoeveelheden in",
    text: "Pas schuifregelaars aan voor verschillende suikers zoals sucrose, dextrose, glucose, invertsuiker en trehalose om uw recept samen te stellen."
  },
  {
    name: "Analyseer PAC en POD waarden",
    text: "Vergelijk de berekende PAC en POD waarden met de aanbevolen streefwaarden voor uw beoogde temperatuur."
  },
  {
    name: "Controleer vaste stof verhouding en schepbaarheid",
    text: "Zorg dat het totale vaste stof percentage binnen de optimale zone valt en controleer de schepbaarheidsindicator om de uiteindelijke textuur te voorspellen."
  }
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
  slug: 'ijs-pac-pod-rekentool',
  title: 'IJs PAC POD Calculator',
  description: 'Bereken antivrieskracht en zoetkracht voor ijs. Formuleer precise suikerprofielen, vaste stof percentage en serveertemperaturen.',
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    title: "IJs Cryo Calculator",
    subtitle: "Precisie cryo formulatie dashboard voor moleculaire gastronomie",
    unitLabel: "Eenheidssysteem",
    metricUnit: "Metrisch (gram)",
    imperialUnit: "Imperiaal (ounces)",
    baseWeightLabel: "Basis Mix Gewicht",
    targetTempLabel: "Serveertemperatuur",
    sucroseLabel: "Sucrose",
    dextroseLabel: "Dextrose",
    glucoseLabel: "Glucose DE40",
    invertedLabel: "Invertsuiker",
    trehaloseLabel: "Trehalose",
    pacLabel: "Antivrieskracht (PAC)",
    podLabel: "Zoetkracht (POD)",
    solidsLabel: "Totale Vaste Stoffen",
    targetPacLabel: "Doel PAC",
    scoopabilityLabel: "Schepbaarheidstoestand",
    stoneState: "Hard als Steen",
    creamyState: "Perfecte Romigheid",
    soupState: "Smeltende Soep",
    stoneDesc: "De antivrieskracht is te laag voor deze temperatuur. Het mengsel zal keihard bevriezen.",
    creamyDesc: "De PAC balans is optimaal. Het ijs zal schepbaar en romig zijn.",
    soupDesc: "De antivrieskracht is te hoog. Het ijs zal snel smelten en vloeibaar blijven.",
    gLabel: "g",
    ozLabel: "oz",
    cLabel: "°C",
    fLabel: "°F",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Wetenschappelijke Principes van IJs Cryo Formulatie en Glasovergang Fase Controle',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'IJs is een complexe multifase thermodynamische emulsie bestaande uit luchtcellen, vetbolletjes, ijskristallen en een ongeconcentreerde serumfase. Het bereiken van perfecte romigheid en schepbaarheid vereist zorgvuldige controle van de vriespuntverlaging van het water in het mengsel. Naarmate de temperatuur onder het vriespunt daalt, begint water te kristalliseren tot ijs. De concentratie van opgeloste stoffen in het resterende vloeibare serum neemt toe, wat het vriespunt verder verlaagt. De balans tussen bevroren waterkristallen en de niet bevroren siroopfase bepaalt de hardheid en gladheid van het eindproduct.',
    },
    {
      type: 'title',
      text: 'PAC Begrijpen: Antivrieskracht en Depressie Wiskunde',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC, of Potere Anticongelante, vertegenwoordigt de antivrieskracht van een opgeloste stof ten opzichte van sucrose. Sucrose is aangewezen als referentiestandaard met een PAC waarde van 100. Het mechanisme wordt beheerst door colligatieve eigenschappen, wat betekent dat de vriespuntverlaging afhangt van het aantal actieve moleculen opgelost in water, niet van hun massa. Monosachariden zoals dextrose (molecuulgewicht 180 g/mol) leveren ongeveer twee keer zoveel moleculen per gram als disachariden zoals sucrose (molecuulgewicht 342 g/mol), wat resulteert in een PAC van 190. Hogere PAC waarden betekenen dat meer water vloeibaar blijft bij een bepaalde temperatuur, waardoor het ijs niet keihard bevriest.',
    },
    {
      type: 'title',
      text: 'POD Begrijpen: Zoetkracht en Sensorische Balans',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'POD, of Potere Dolcificante, is een metriek die relatieve zoetheid meet in vergelijking met sucrose (basislijn van 100). Bij het formuleren van hoogwaardige ijs of gelato is het balanceren van zoetheid net zo belangrijk als structurele stevigheid. Als een formuleerder alleen sucrose gebruikt om het vriespunt te verlagen (PAC verhogen), wordt het ijs misselijkmakend zoet voordat het de gewenste zachtheid bereikt. Om deze beperking te omzeilen, gebruikt moleculaire gastronomie suikers zoals dextrose (POD 70), trehalose (POD 45) of vernevelde glucose DE40 (POD 40). Deze maken maatwerk configuratie van de vriescurve mogelijk zonder het gehemelte te overweldigen.',
    },
    {
      type: 'title',
      text: 'Vergelijkende Database van Gangbare Cryo Formulatie Suikers',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Suikertype', 'Relatieve PAC', 'Relatieve POD', 'Vaste Stof Gehalte (%)', 'Culinaire Toepassing'],
      rows: [
        ['Sucrose', '100', '100', '100%', 'Standaard body, schoon zoet profiel, standaard basislijn'],
        ['Dextrose', '190', '70', '100%', 'Verlaagt vriespunt, verhoogt zachtheid, vermindert zoetheid'],
        ['Glucose DE40', '90', '40', '95%', 'Voegt body toe, voorkomt herkristallisatie, verhoogt viscositeit'],
        ['Invertsuiker', '190', '130', '70%', 'Voegt zachtheid toe, bevochtigende eigenschappen, versterkt fruitsmaken'],
        ['Trehalose', '100', '45', '90%', 'Lage zoetheid body middel, beschermt eiwitten, schone afdronk'],
      ],
    },
    {
      type: 'title',
      text: 'Totale Vaste Stof Verhouding en Structurele Emulsie Stabiliteit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Totale vaste stoffen omvatten alle niet water elementen in de formulatie, inclusief vetten, melk vaste stoffen niet vet, stabilisatoren, emulgatoren en suikers. Een optimale ijsmix heeft tussen 36% en 42% totale vaste stoffen. Als vaste stoffen te laag zijn, leidt het hoge watergehalte tot grote ijskristalgroei en een grove textuur. Als vaste stoffen te hoog zijn, neemt de viscositeit overmatig toe, wat resulteert in een zwaar mondgevoel en mogelijke zandigheid door lactosokristallisatie.',
    },
    {
      type: 'title',
      text: 'Praktische Stappen voor Succesvolle Cryo Formulatie',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bepaal de beoogde serveertemperatuur van uw toonbank. Gelato wordt typisch geserveerd bij -12 graden Celsius, terwijl industrieel ijs kouder wordt geserveerd bij -18 graden Celsius.',
        'Bereken de doel PAC met behulp van de standaard temperatuurformule. Voor -12 graden Celsius is de doel PAC ongeveer 216.',
        'Selecteer een mengsel van suikers. Combineer sucrose voor standaard zoetheid, dextrose om het vriespunt te verlagen en glucose om body en textuur te verbeteren.',
        'Controleer of de totale vaste stoffen binnen het veilige bereik van 36% tot 42% vallen voor optimale beluchting en een smeltprofiel dat zacht is op de tong.'
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
