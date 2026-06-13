import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Olie Rookpunt Tracker: Levensduur & Afbraak Schatter voor Frituurolie';
const description = 'Bewaak de kwaliteit van frituurolie en schat de huidige daling van het rookpunt. Houd gebruik, temperaturen en voedselsoorten bij om schadelijke ophoping van polaire verbindingen te voorkomen.';

const faq = [
  {
    question: 'Waarom daalt het rookpunt van frituurolie na verloop van tijd?',
    answer: 'Elke keer dat olie wordt verhit tot frituurtemperaturen, breken thermische afbraak, hydrolyse en oxidatie triglyceriden af tot vrije vetzuren (FFA), monoacylglycerolen en diacylglycerolen. Deze afbraakproducten hebben een veel lager kook- en rookpunt dan intacte triglyceriden, waardoor de olie bij herhaald gebruik bij lagere temperaturen gaat roken.',
  },
  {
    question: 'Wat zijn polaire verbindingen en waarom worden ze gereguleerd?',
    answer: 'Polaire verbindingen (TPC) zijn de afbraakproducten die tijdens het frituren worden gevormd. Wanneer ze meer dan 25% van het oliegewicht bedragen, wordt de olie als afgebroken, geoxideerd en schadelijk voor consumptie beschouwd, wat bijsmaak en potentiële cardiovasculaire risico\'s veroorzaakt. Veel Europese landen verplichten wettelijk het weggooien van frituurolie wanneer de TPC meer dan 25% bedraagt.',
  },
  {
    question: 'Hoe beïnvloeden paneermeel of bloem de afbraak van olie?',
    answer: 'Paneren, beslag en losse bloem laten voedseldeeltjes in de hete olie vallen. Deze deeltjes verkolen snel bij temperaturen boven 180 graden Celsius, waarbij vrije vetzuren vrijkomen en ze fungeren als katalysatoren die de thermische afbraak versnellen. Schone zetmelen zoals aardappelen breken olie veel langzamer af.',
  },
  {
    question: 'Wat is de veilige limiet voor hergebruik van olie?',
    answer: 'Als vuistregel kunnen geraffineerde oliën voor hoge verhitting, zoals koolzaad of pinda, 5 tot 8 keer worden hergebruikt onder schone omstandigheden. Ongeraffineerde oliën of oliën die worden blootgesteld aan temperaturen boven 190 graden Celsius of gepaneerd voedsel moeten echter na 1 tot 3 keer gebruik worden weggegooid.',
  },
];

const howTo = [
  {
    name: 'Selecteer het Type Frituurolie',
    text: 'Kies uw olie uit de databaselijst. Geraffineerde oliën voor hoge verhitting hebben een hoger startrookpunt dan ongeraffineerde opties.',
  },
  {
    name: 'Houd Frituurcycli Bij',
    text: 'Voer het totale aantal frituursessies in dat de huidige partij olie heeft ondergaan.',
  },
  {
    name: 'Voer de Frituurtemperatuur In',
    text: 'Pas de schuifregelaar aan om de gemiddelde temperatuur van uw frituursessies te laten overeenkomen. Temperaturen boven 180 graden Celsius versnellen de afbraak.',
  },
  {
    name: 'Identificeer het Type Voedselcoating',
    text: 'Geef aan of u schone zetmelen frituurt of met bloem/paneermeel bereide voedingsmiddelen die koolstofhoudende resten achterlaten.',
  },
  {
    name: 'Controleer Rookpunt & Wegwerpstatus',
    text: 'Bekijk het afgebroken rookpunt en de wegwerpmeter. Gooi onmiddellijk weg als de oliekwaliteit de kritieke zone bereikt.',
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent = {
  slug: 'olie-rookpunt-tracker',
  title: 'Olie Rookpunt Tracker',
  description: 'Bewaak de kwaliteit van frituurolie en schat de huidige daling van het rookpunt. Houd gebruik, temperaturen en voedselsoorten bij om schadelijke ophoping van polaire verbindingen te voorkomen.',
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    oilPresetLabel: 'Type Frituurolie',
    presetAvocadoRefined: 'Avocado-olie (Geraffineerd)',
    presetSunflowerRefined: 'Zonnebloemolie (Geraffineerd)',
    presetPeanutRefined: 'Pindaolie (Geraffineerd)',
    presetCanolaRefined: 'Koolzaadolie (Geraffineerd)',
    presetOliveEV: 'Extra Vierge Olijfolie',
    presetOlivePomace: 'Olijfpulp-olie',
    presetCoconutUnrefined: 'Kokosolie (Ongeraffineerd)',
    presetSunflowerUnrefined: 'Zonnebloemolie (Ongeraffineerd)',
    usesLabel: 'Frituurcycli (Gebruik)',
    tempLabel: 'Frituurtemperatuur',
    foodTypeLabel: 'Voedselbereiding / Coating',
    optionStarch: 'Schoon Zetmeel (Aardappelen, Friet)',
    optionBreading: 'Gepaneerd, Beslag of Gebloemd Voedsel',
    baseSmokePointLabel: 'Basis Rookpunt',
    currentSmokePointLabel: 'Afgebroken Rookpunt',
    polarCompoundsLabel: 'Polaire Verbindingen (TPC)',
    polymerizationLabel: 'Oliepolymerisatie Gezondheid',
    statusLabel: 'Olie Veiligheidsprofiel',
    statusGood: 'VEILIG OM TE HERGEBRUIKEN',
    statusCaution: 'LET OP - SNEL FILTEREN',
    statusDiscard: 'DIRECT WEGGOOIEN',
    adviceGood: 'De olie-eigenschappen zijn stabiel. Blijf frituren, maar filter voedselresten na afkoeling.',
    adviceCaution: 'De afbraak is begonnen. Het rookpunt is gedaald. We raden aan te filteren en slechts één keer meer te gebruiken.',
    adviceDiscard: 'Kritieke afbraak bereikt. Hoge concentratie polaire verbindingen. Weggooien om ranzigheid en gezondheidsrisico\'s te voorkomen.',
    gaugeSafe: 'Veilig',
    gaugeCaution: 'Let op',
    gaugeDiscard: 'Weggooien',
    limitLabel: 'Limiet',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'De Chemie van Frituren: Waarom Oliën Afbreken',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Frituren is een van de meest chemisch intense kooktechnieken. Wanneer voedsel wordt ondergedompeld in olie op hoge temperaturen (meestal tussen 160 en 190 graden Celsius), wordt de olie gelijktijdig blootgesteld aan hitte, vocht uit het voedsel en zuurstof uit de lucht. Dit veroorzaakt drie verschillende chemische reacties: hydrolyse (water dat esterbindingen afbreekt), oxidatie (zuurstof dat hydroperoxiden creëert) en polymerisatie (afgebroken moleculen die zich binden tot dikke, viskeuze ketens). Naarmate deze reacties vorderen, neemt de concentratie van totale polaire verbindingen (TPC) toe en daalt de temperatuur waarbij de olie begint af te breken en te roken aanzienlijk.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '25% TPC', label: 'Wettelijke Wegwerplimiet', icon: 'mdi:alert-octagon' },
        { value: '180°C', label: 'Kritieke Temperatuurdrempel', icon: 'mdi:thermometer-alert' },
        { value: '2.2x', label: 'Vervalsnelheid bij Paneren', icon: 'mdi:chart-timeline-variant' },
        { value: 'VVS', label: 'Oorzaak: Vrije Vetzuren', icon: 'mdi:molecule' },
      ],
    },
    {
      type: 'title',
      text: 'Polaire Verbindingen en Gezondheidsvoorschriften',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Totale Polaire Verbindingen (TPC) dienen als de internationale standaard voor het meten van het afbraakniveau van frituurvetten. In professionele keukens is het gebruik van olie met een TPC-concentratie van meer dan 25% in verschillende landen wettelijk verboden vanwege veiligheidszorgen. Deze polaire verbindingen zijn absorptieremmers, verminderen de kookefficiëntie en tasten de knapperigheid van de gefrituurde korst aan. Belangrijker is dat het regelmatig consumeren van geoxideerde olie bijdraagt aan de inname van vrije radicalen en giftige stoffen die in verband worden gebracht met cardiovasculaire problemen.',
    },
    {
      type: 'title',
      text: 'Soorten Olie Vergeleken: Start Rookpunten',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Geraffineerde Oliën (Hoge Verhitting)',
          icon: 'mdi:shield-check',
          description: 'Oliën die zijn bewerkt om vluchtige stoffen, vrije vetzuren en onzuiverheden te verwijderen. Ze hebben uitzonderlijk hoge startrookpunten.',
          points: ['Geraffineerde Avocado: 270°C / 518°F', 'Geraffineerde Zonnebloem: 232°C / 450°F', 'Geraffineerde Pinda: 232°C / 450°F', 'Hoge weerstand tegen initiële afbraak'],
        },
        {
          title: 'Ongeraffineerde Oliën (Lage Verhitting / Smaakvol)',
          icon: 'mdi:leaf',
          description: 'Koudgeperste of vierge oliën met hoge gehaltes aan natuurlijke elementen, mineralen en vrije vetzuren.',
          highlight: true,
          points: ['Extra Vierge Olijf: 190°C / 374°F', 'Ongeraffineerde Kokos: 177°C / 350°F', 'Ongeraffineerde Zonnebloem: 107°C / 225°F', 'Breekt extreem snel af onder hitte'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Frituurolie Rookpunt & Maximale Hergebruik Referentietabel',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Oliesoort', 'Basis Rookpunt (°C)', 'Basis Rookpunt (°F)', 'Staat / Verwerking', 'Aanbevolen Max. Gebruik'],
      rows: [
        ['Avocado-olie (Geraffineerd)', '270°C', '518°F', 'Geraffineerd', '10 tot 12 keer'],
        ['Olijfpulp-olie', '238°C', '460°F', 'Geraffineerd', '8 tot 10 keer'],
        ['Zonnebloemolie (Geraffineerd)', '232°C', '450°F', 'Geraffineerd', '6 tot 8 keer'],
        ['Pindaolie (Geraffineerd)', '232°C', '450°F', 'Geraffineerd', '6 tot 8 keer'],
        ['Koolzaadolie (Geraffineerd)', '204°C', '400°F', 'Geraffineerd', '5 tot 7 keer'],
        ['Extra Vierge Olijfolie', '190°C', '374°F', 'Koudgeperst', '2 tot 3 keer'],
        ['Kokosolie (Ongeraffineerd)', '177°C', '350°F', 'Ongeraffineerd', '1 tot 2 keer'],
        ['Zonnebloemolie (Ongeraffineerd)', '107°C', '225°F', 'Ongeraffineerd', 'Niet gebruiken voor frituren'],
      ],
    },
    {
      type: 'title',
      text: 'Kritieke Waarschuwingssignalen van Afgebroken Olie',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gevaar: Wanneer Frituurolie Giftig Wordt',
      html: 'Blijf olie niet hergebruiken als u een van de volgende symptomen waarneemt: <strong>ranzige of zeepachtige geur</strong>, een donkere en troebele kleur, of <strong>overmatige schuimvorming</strong> rond het voedsel. Als de olie begint te roken bij normale kooktemperaturen (170-180°C), geeft dit aan dat het rookpunt is ingestort door extreme ophoping van Vrije Vetzuren (VVS). Koken met afgebroken olie brengt giftige polaire verbindingen en kankerverwekkende elementen over in uw voedsel, wat zowel de smaak als de gezondheid schaadt.',
    },
    {
      type: 'title',
      text: 'Hoe U de Kwaliteit van Frituurolie Kunt Verlengen',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Filter Verkoolde Resten Onmiddellijk',
      html: 'Het frituren van beslag of gepaneerd voedsel laat microdeeltjes achter die op de bodem van de friteuse bezinken. Deze deeltjes blijven verkolen tijdens het koken en fungeren als katalysatoren die het oliebederf versnellen. Om dit proces te vertragen, schep altijd het oppervlak af tijdens het frituren en <strong>filter de afgekoelde olie</strong> door een fijne zeef, kaasdoek of koffiefilter na elke afzonderlijke frituursessie. Bewaar gefilterde olie in een afgesloten glazen container op een donkere, koele plaats.',
    },
    {
      type: 'title',
      text: 'Beste Praktijken voor Frituren',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Droog voedseloppervlakken grondig</strong> - Overtollig vocht veroorzaakt snelle hydrolyse, waardoor olie wordt afgebroken tot vrije vetzuren.',
        '<strong>Vermijd zouten vóór het frituren</strong> - Zout werkt als katalysator die de olie-oxidatie versnelt; breng voedsel op smaak onmiddellijk na het uit de hete olie halen.',
        '<strong>Houd optimale temperaturen aan</strong> - Blijf tussen 170°C en 180°C. Hoger gaan versnelt de thermische afbraak, terwijl lager ervoor zorgt dat voedsel overtollig vet absorbeert.',
        '<strong>Vul oude olie niet bij</strong> - Het mengen van verse olie met afgebroken olie versnelt de afbraak van de nieuwe olie in plaats van deze te herstellen.',
      ],
    },
    {
      type: 'title',
      text: 'Woordenlijst Frituren & Vetafbraak',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Rookpunt', definition: 'De temperatuur waarbij een olie of vet continu begint af te breken en zichtbare blauwachtige rook produceert, waarbij acroleïne vrijkomt.' },
        { term: 'Totale Polaire Verbindingen (TPC)', definition: 'De wereldwijde standaardindicator voor oliebederf, die het totale gewichtspercentage van geoxideerde verbindingen, VVS en polymeren weergeeft.' },
        { term: 'Hydrolyse', definition: 'Een chemische reactie waarbij watermoleculen triglyceriden afbreken tot vrije vetzuren en glycerol. Veroorzaakt door vocht uit voedsel.' },
        { term: 'Polymerisatie', definition: 'Het proces waarbij hittebeschadigde oliemoleculen samenkomen tot grote macromoleculaire structuren, waardoor de viscositeit van de olie toeneemt.' },
        { term: 'Vrije Vetzuren (VVS)', definition: 'Carbonzuren die vrijkomen uit triglyceriden tijdens hydrolyse. Ze verlagen direct het startrookpunt van het vet.' },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
