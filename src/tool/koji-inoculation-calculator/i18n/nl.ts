import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Koji Inoculatie en Hydratie Calculator";
const description = "Bereken het perfecte vochtgehalte, de sporendosering en de incubatietemperatuur voor het thuis maken van koji. Voorkom mislukte batches met onze gratis koji inoculatie en hydratie calculator.";
const faq = [
  {
    question: "Wat is het ideale vochtgehalte voor het stomen van koji substraat?",
    answer: "Het ideale totale vochtgehalte voor gestoomde rijst of gerst bij het inoculeren van koji ligt tussen 30% en 35%. Dit komt overeen met een gestoomd gewicht van ongeveer 1,35x tot 1,40x het initiele droge gewicht."
  },
  {
    question: "Hoeveel sporenpoeder (tane-koji) heb ik nodig?",
    answer: "De standaard inoculatiesnelheid is 1 gram standaard sporenmix per 1 kilogram droog substraat. Bij geconcentreerde sporen heb je minder nodig (0,5 g), terwijl verdunde mengsels meer vereisen (2,0 g)."
  },
  {
    question: "Waarom is temperatuurregeling essentieel tijdens koji incubatie?",
    answer: "Aspergillus oryzae groeit optimaal tussen 28C en 34C. Als de temperatuur boven 38C komt, kan de schimmel oververhit raken, stoppen met groeien of ongewenste groene/zwarte sporen produceren. Onder 20C vertraagt de groei aanzienlijk."
  },
  {
    question: "Wat gebeurt er tijdens de exotherme fase?",
    answer: "Na 18 tot 24 uur incubatie begint de koji snel te groeien en genereert het zijn eigen warmte. Tijdens deze exotherme piek moet je het substraat roeren en de broedwarmte verlagen om oververhitting te voorkomen."
  }
];

const howTo = [
  {
    name: "Voer droog substraatgewicht in",
    text: "Voer het initiele droge gewicht van je rijst of gerst in om de gewenste hydratatiedrempels te bepalen."
  },
  {
    name: "Volg gestoomd gewicht",
    text: "Voer het werkelijke gestoomde gewicht na het koken in. De calculator berekent het vochtpercentage en controleert of het binnen het ideale bereik van 30-35% valt."
  },
  {
    name: "Bereken sporendosering",
    text: "Selecteer je sporensterkte (standaard, geconcentreerd of verdund) om het exacte gewicht aan sporenpoeder voor inoculatie te verkrijgen."
  },
  {
    name: "Bewaak incubatieparameters",
    text: "Pas temperatuur en relatieve luchtvochtigheid aan om de myceliumgroei te simuleren en bekijk de 48-uurs thermische curve tijdlijn."
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
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'koji-inoculatie-calculator',
  title: 'Koji Inoculatie en Hydratie Calculator',
  description: 'Bereken het perfecte vochtgehalte, de sporendosering en de incubatietemperatuur voor het thuis maken van koji. Voorkom mislukte batches met onze gratis koji inoculatie en hydratie calculator.',
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    title: 'Koji Inoculatie Analyse',
    subtitle: 'Optimaliseer vaste stof koji fermentatieparameters',
    dryWeightLabel: 'Droog Substraatgewicht',
    steamedWeightLabel: 'Werkelijk Gestoomd Gewicht',
    targetRangeLabel: 'Doelgestoomd Gewichtsbereik',
    moistureLabel: 'Huidig Vochtgehalte',
    potencyLabel: 'Sporensterkte',
    standardPotency: 'Standaard Sporen',
    concentratedPotency: 'Geconcentreerd',
    dilutedPotency: 'Verdunde Mix',
    sporeDosageLabel: 'Sporendosering',
    tempLabel: 'Broedtemperatuur',
    humidityLabel: 'Relatieve Luchtvochtigheid',
    statusIdeal: 'Ideale Incubatie',
    statusSlow: 'Langzame Groei',
    statusInhibited: 'Geremd / Koud',
    statusOverheating: 'Oververhit / Sporulatie',
    timelineTitle: '48u Thermische Incubatiecyclus',
    stage1Name: '0-18u: Opwarmen',
    stage2Name: '18-36u: Exotherme Piek',
    stage3Name: '36-48u: Rijping'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Zo Maak Je Koji: Het Perfecte Vocht, Sporendosering en Temperatuur voor Aspergillus Oryzae',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Het thuis maken van koji vereist dat drie dingen goed gaan: <strong>substraathydratie</strong>, <strong>sporendichtheid bij inoculatie</strong> en <strong>temperatuurregeling tijdens incubatie</strong>. Als een van deze verkeerd gaat, kan je batch oververhit raken, niet inoculeren of de verkeerde schimmel kweken. Onze <strong>koji inoculatie calculator</strong> neemt het giswerk weg door je doelgestoomd gewicht, exacte sporendosering en realtime incubatiestatus te berekenen op basis van jouw specifieke invoer.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '30-35%',
          label: 'Doelvochtgehalte',
          icon: 'mdi:water-percent'
        },
        {
          value: '1 g/kg',
          label: 'Standaard Sporensnelheid',
          icon: 'mdi:seed-outline'
        },
        {
          value: '28-34°C',
          label: 'Ideale Temperatuur',
          icon: 'mdi:thermometer'
        },
        {
          value: '48 h',
          label: 'Totale Incubatie',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: 'Waarom Vochtgehalte de Kwaliteit van Koji Bepaalt',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'De belangrijkste factor voor succesvolle koji teelt is <strong>substraatvocht</strong>. Wanneer rijst of gerst wordt gestoomd, gelatiniseren de zetmeelkorrels en nemen water op, waardoor ze toegankelijk worden voor de enzymen die door Aspergillus oryzae worden geproduceerd. Het ideale vochtbereik is smal: <strong>30% tot 35%</strong>. Onder 30% kan het mycelium niet genoeg water onttrekken om te groeien en stagneert de enzymproductie. Boven 35% worden de korrels plakkerig en klonteren samen, waardoor de luchtporositeit afneemt en de aeroob schimmel verstikt raakt.'
    },
    {
      type: 'list',
      items: [
        '<strong>Te droog (onder 30%):</strong> Myceliumgroei wordt belemmerd, enzymproductie daalt en de koji koloniseert de korrel nooit volledig.',
        '<strong>Te nat (boven 35%):</strong> Korrels plakken aan elkaar, luchtpockets storten in en bacterien of ongewenste schimmels kunnen Aspergillus oryzae overwoekeren.',
        '<strong>Doelbereik (30-35%):</strong> De korrel voelt stevig aan, individuele korrels zijn gemakkelijk te scheiden en het mycelium verspreidt zich gelijkmatig binnen 48 uur.',
        '<strong>Hoe te meten:</strong> Weeg je droge graan, stoom het en weeg opnieuw. De calculator berekent je exacte vochtpercentage uit deze twee getallen.'
      ]
    },
    {
      type: 'table',
      headers: ['Graansoort', 'Droog Gewicht', 'Doelgestoomd Gewicht', 'Weektijd', 'Stoomtijd'],
      rows: [
        ['Witte Rijst (korte korrel)', '1000 g', '1350-1400 g', '2-4 u', '30-40 min'],
        ['Witte Rijst (lange korrel)', '1000 g', '1350-1400 g', '2-4 u', '30-40 min'],
        ['Parelgort', '1000 g', '1350-1400 g', '4-8 u', '40-50 min'],
        ['Bruine Rijst', '1000 g', '1350-1400 g', '8-12 u', '45-60 min']
      ]
    },
    {
      type: 'title',
      text: 'Sporeninoculatie: Hoeveel Tane-Koji Heb Je Nodig?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'De inoculatiedichtheid beinvloedt direct hoe snel de schimmel het substraat koloniseert en hoe competitief het is tegen verontreinigingen. De standaardhoeveelheid is <strong>1 gram sporenmix per kilogram droog substraat</strong>, maar dit varieert per sporentype.'
    },
    {
      type: 'proscons',
      title: 'Je Sporentype Kiezen',
      items: [
        {
          pro: 'Standaard sporen zijn het meest gangbare formaat, vergevingsgezind voor beginners en goed gedocumenteerd in thuisbrouw literatuur.',
          con: 'Hoger poedervolume per batch en kan vulstof bevatten die niet bijdraagt aan inoculatie.'
        },
        {
          pro: 'Geconcentreerde sporen gebruiken de helft poeder voor dezelfde inoculatie, hebben een hogere zuiverheid en zijn economischer voor grote batches.',
          con: 'Gemakkelijker te overdoseren, vereist een precieze weegschaal (0,01 g resolutie) en laat minder ruimte voor fouten bij onderdosering.'
        },
        {
          pro: 'Verdunde mengsels verdelen gemakkelijk over grote oppervlakken, zijn vergevingsgezinder bij ongelijkmatig mengen en geschikt voor beginners die de voorkeur geven aan zichtbare bedekking.',
          con: 'Gebruikt meer poeder per batch en kan overtollig zetmeel van vulstof introduceren.'
        }
      ]
    },
    {
      type: 'title',
      text: 'De Exotherme Warmtecurve: Waarom Koji Zijn Eigen Warmte Genereert',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Terwijl Aspergillus oryzae zetmeel verbruikt en omzet in eenvoudige suikers, genereert het metabolische warmte. Tussen <strong>18 en 36 uur</strong> incubatie bereikt de biologische activiteit een piek, wat een exotherme golf produceert die de temperatuur van het graanbed met 5-10C boven de omgevingstemperatuur van de broedstoof kan verhogen.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Tekenen Dat Je Koji Oververhit Raakt',
      html: 'Als de temperatuur van het graanbed boven <strong>38C</strong> uitkomt, beginnen de schimmelenzymen te denatureren en schakelt de schimmel over naar reproductieve modus, waarbij <strong>groene of zwarte sporen</strong> worden geproduceerd. De batch ruikt dan ammoniakachtig in plaats van zoet en nootachtig. Je moet het substraat onmiddellijk roeren en de broedtemperatuur verlagen om het terug onder 34C te brengen.'
    },
    {
      type: 'tip',
      title: 'Het 12 Uur Keerschema',
      html: 'Begin vanaf uur 18 het graanbed te breken en roer het elke 12 uur. Dit laat opgesloten warmte ontsnappen, verdeelt het vocht en geeft het mycelium toegang tot verse zuurstof. Gebruik schone, ontsmette handen of een steriele lepel.'
    },
    {
      type: 'tip',
      title: 'Luchtvochtigheid Is Ook Belangrijk',
      html: 'Houd de relatieve luchtvochtigheid boven <strong>65%</strong> tijdens incubatie. Onder 40% droogt het substraat uit en stopt de groei. Boven 90% kan condensatie bacteriegroei op het graanoppervlak bevorderen.'
    },
    {
      type: 'tip',
      title: 'Vertrouw Op Je Neus',
      html: 'Gezonde koji ruikt naar zoete geroosterde kastanjes of verse paddenstoelen. Als je ammoniak, zurigheid of bederf ruikt, is de batch mogelijk oververhit of besmet. Verwijder en gooi aangetast graan onmiddellijk weg.'
    },
    {
      type: 'card',
      icon: 'mdi:rice',
      title: 'Sake & Miso Maken',
      html: 'Koji geinoculeerde rijst is de basis voor <strong>sake</strong>, <strong>miso</strong> en <strong>amazake</strong>. Precieze vochtregeling zorgt voor een goede enzymontwikkeling voor de omzetting van zetmeel naar suiker.'
    },
    {
      type: 'card',
      icon: 'mdi:soy-sauce',
      title: 'Sojasaus & Tamari',
      html: 'Koji gekweekt op <strong>sojabonen</strong> of een sojaboon-tarwemengsel drijft de fermentatie die umami-rijke sojasaus produceert. Constante temperatuur voorkomt bijsmaken.'
    },
    {
      type: 'card',
      icon: 'mdi:shaker-outline',
      title: 'Shio Koji & Garum',
      html: '<strong>Shio koji</strong> (zoutgefermenteerde koji) en <strong>vleesgarums</strong> vertrouwen op volledig gekoloniseerd graan. Onze calculator zorgt dat je substraat in het ideale vochtvenster zit voor inoculatie.'
    },
    {
      type: 'title',
      text: 'Koji Incubatie Verklarende Woordenlijst',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Tane-Koji',
          definition: 'Het sporenpoeder dat wordt gebruikt om gestoomd graan te inoculeren. Meestal Aspergillus oryzae sporen gemengd met een zetmeeldrager zoals rijstmeel.'
        },
        {
          term: 'Exotherme Fase',
          definition: 'De periode tussen 18 en 36 uur incubatie waarin Aspergillus oryzae genoeg metabolische warmte genereert om de temperatuur van het graanbed boven de omgevingstemperatuur te verhogen.'
        },
        {
          term: 'Gelatinisatie',
          definition: 'Het proces van het verhitten van zetmeel in aanwezigheid van water zodat de korrels opzwellen en toegankelijk worden voor amylase-enzymen die door de schimmel worden geproduceerd.'
        },
        {
          term: 'Sporulatie',
          definition: 'Wanneer de schimmel overschakelt van vegetatieve groei naar reproductieve modus en groen of zwart wordt. Dit wordt veroorzaakt door hittestress boven 38C en verpest de batch voor culinair gebruik.'
        }
      ]
    },
    {
      type: 'summary',
      title: 'Belangrijkste Punten voor Perfecte Koji',
      items: [
        'Streef naar 30-35% vocht in gestoomd graan. Gebruik de calculator om je exacte gestoomde gewichtsdoel te vinden.',
        'Inoculeer met 1 g/kg voor standaard sporen, 0,5 g/kg voor geconcentreerd of 2 g/kg voor verdunde mengsels.',
        'Houd 28-34C en boven 65% luchtvochtigheid tijdens incubatie. Roer elke 12 uur na uur 18.',
        'Let op de exotherme piek bij 18-36 uur. Als de temperatuur boven 38C komt, roer dan onmiddellijk en verlaag de warmte.',
        'Vertrouw op je zintuigen: zoete kastanjegeur = goede koji. Ammoniak of zure geur = oververhitting of besmetting.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
