import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Maillard reactie Optimalisator: pH & Temperatuur Bruiningscalculator';
const description = 'Bereken precies hoeveel zuiveringszout je per kilo voedsel moet toevoegen om de Maillard-reactie te versnellen. Vermijd zeepachtige smaken door binnen veilige alkaliniteitsgrenzen te blijven.';

const faq = [
  {
    question: 'Wat is de Maillard-reactie en waarom is die belangrijk bij het koken?',
    answer: 'De Maillard-reactie is een chemische reactie tussen aminozuren en reducerende suikers die gebruind voedsel zijn kenmerkende smaak geeft. Het is verantwoordelijk voor de korst op gebakken biefstuk, de goudbruine kleur van brood, gebrande koffie en gekaramelliseerde uien. De reactie verloopt het snelst tussen 140°C en 165°C.',
  },
  {
    question: 'Hoe versnelt zuiveringszout (natriumbicarbonaat) het bruinen?',
    answer: 'Zuiveringszout verhoogt de pH van het voedseloppervlak, waardoor het alkalischer wordt. De Maillard-reactie verloopt aanzienlijk sneller in een alkalische omgeving. Het verhogen van de pH van 6 naar 8 kan de bruiningssnelheid verdubbelen of verdrievoudigen. Te veel zuiveringszout geeft echter een metaalachtige, zeepachtige nasmaak  -  daarom hanteert deze calculator veilige grenzen.',
  },
  {
    question: 'Wat is de maximale veilige hoeveelheid zuiveringszout per kilogram voedsel?',
    answer: 'De algemene veilige grens is 1,5 gram zuiveringszout per kilogram voedsel. Boven deze drempel neemt het risico op bijsmaken (metaalachtig, zeepachtig of chemisch) drastisch toe. Onze aanbevolen hoeveelheid is de helft van het maximum, wat een aanzienlijke versnelling van het bruinen geeft met minimaal smaakrisico.',
  },
  {
    question: 'Wat gebeurt er als de temperatuur te laag is voor de Maillard-reactie?',
    answer: `Onder 110°C is er voornamelijk waterverdamping en geen betekenisvolle Maillard-bruining. Tussen 110°C en 140°C verloopt het bruinen langzaam. Het optimale temperatuurbereik is 140°C tot 180°C. Boven 180°C begint pyrolyse  -  waarbij voedsel verbrandt en bittere, scherpe stoffen produceert in plaats van de gewenste bruiningsaroma's.`,
  },
];

const howTo = [
  {
    name: 'Weeg je voedsel',
    text: 'Voer het totale gewicht in grammen in van het voedsel dat je wilt bruinen.',
  },
  {
    name: 'Stel de kooktemperatuur in',
    text: 'Voer de temperatuur van het kookoppervlak of de oven in. De optimale Maillard-zone is 140-180°C.',
  },
  {
    name: 'Pas de hoeveelheid zuiveringszout aan',
    text: 'De schuifregelaar begint op de helft van het veilige maximum. Verhoog voorzichtig  -  de calculator waarschuwt voordat je in de gevarenzone komt.',
  },
  {
    name: 'Lees de geschatte pH en snelheidsvermenigvuldiger',
    text: 'De calculator laat zien hoeveel sneller het bruinen verloopt bij jouw gekozen pH-niveau ten opzichte van de standaard pH van 6.',
  },
  {
    name: 'Controleer het smaakrisiconiveau',
    text: 'De smaakindicator toont veilig, opletten of gevaarlijk op basis van de geschatte oppervlakte-pH. Blijf in de groene zone voor de beste resultaten.',
  },
  {
    name: 'Breng het zuiveringszout gelijkmatig aan',
    text: 'Los de aanbevolen hoeveelheid op in een kleine hoeveelheid water en borstel of meng het met het voedsel voor het koken. Ongelijkmatige verdeling veroorzaakt vlekkerig bruinen.',
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
  slug: 'maillard-reactie-optimalisator',
  title: 'Maillard reactie Optimalisator',
  description: 'Bereken precies hoeveel zuiveringszout je per kilo voedsel moet toevoegen om de Maillard-reactie te versnellen. Vermijd zeepachtige smaken door binnen veilige alkaliniteitsgrenzen te blijven.',
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    title: 'Maillard reactie Optimalisator',
    headerLabel: 'Bruiningschemie',
    flavorSafe: 'Veilige pH',
    flavorCaution: 'Let op: Alkalisch',
    flavorDanger: 'Gevaar: Zeepachtig risico',
    unitLabel: 'Eenheden',
    metricUnit: 'Metriek',
    imperialUnit: 'Imperiaal',
    weightLabel: 'Voedselgewicht',
    weightUnit: 'g',
    weightOz: 'oz',
    tempLabel: 'Oppervlaktetemperatuur',
    tempUnit: '°C',
    degreesF: '°F',
    tempLow: 'Langzaam: {min} - {max}',
    tempOpt: 'Optimaal: {min} - {max}',
    tempHigh: 'Pyrolyse: >{min}',
    sodaLabel: 'Zuiveringszout',
    sodaUnit: 'g',
    sodaOz: 'oz',
    sodaNote: 'Helft van veilig maximum, milde bruiningsboost',
    sodaCautionNote: 'Nadert maximum, houd smaak nauwlettend in de gaten',
    sodaDangerNote: 'Overschrijdt veilig maximum, risico op zeepachtige smaak',
    sodaRecommended: 'Aanbevolen Zuiveringszout',
    sodaMax: 'Veilig Maximum',
    speedLabel: 'Reactiesnelheid',
    browningLabel: 'Bruiningsvoortgang',
    rawLabel: 'Rauw',
    goldenLabel: 'Goudbruin',
    burntLabel: 'Verbrand',
    phEstimated: 'Gesch. Oppervlakte-pH',
    timeSaved: 'Tijd Bespaard',
    errorTempTooLow: 'De temperatuur is lager dan 110°C. De Maillard-reactie heeft minstens 110°C nodig om te beginnen. Onder deze drempel vindt alleen waterverdamping plaats zonder betekenisvol bruinen.',
    errorWeightTooLow: 'Voedselgewicht moet groter zijn dan 0g.',
    footerTemplate: '<span class="mr-footer-stat"><strong>{weight}</strong><small>{wunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">bij <strong>{temp}</strong><small>{tunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{soda}</strong><small>{sunit}</small> zuiveringszout</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">x<strong>{multiplier}</strong> snelheid</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{timeSaved}</strong>% bespaard</span>',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Maillard-reactie Optimalisator: Beheers de Wetenschap van het Bruinen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De Maillard-reactie is de Heilige Graal van hartig koken. Het creëert de diepe, complexe smaken van gebakken biefstuk, goudbruine broodkorst en gekaramelliseerde uien. Vernoemd naar de Franse scheikundige Louis-Camille Maillard, produceert deze reactie tussen aminozuren en reducerende suikers honderden smaakstoffen. Door de pH te manipuleren met zuiveringszout, kun je de bruiningssnelheid <strong>verdubbelen of verdrievoudigen</strong> zonder te verbranden. Deze calculator laat precies zien hoeveel je moet gebruiken en waarschuwt voordat je in zeepachtig terrein komt.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '~140°C', label: 'Maillard-activeringstemperatuur', icon: 'mdi:thermometer' },
        { value: '2-3x', label: 'Snelheidstoename bij pH 8', icon: 'mdi:speedometer' },
        { value: '1,5 g/kg', label: 'Max. veilig zuiveringszout', icon: 'mdi:scale' },
        { value: 'pH 8,5', label: 'Zeepsmaak-drempel', icon: 'mdi:alert-circle' },
      ],
    },
    {
      type: 'title',
      text: 'Doseringstabel Zuiveringszout per Voedselgewicht',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gebruik deze referentietabel om snel de aanbevolen en maximale hoeveelheden zuiveringszout voor gangbare voedselgewichten te bepalen. De aanbevolen hoeveelheid is <strong>de helft van het veilige maximum</strong>, wat een merkbare versnelling van het bruinen geeft met minimaal smaakrisico.',
    },
    {
      type: 'table',
      headers: ['Voedselgewicht', 'Aanbevolen (g)', 'Veilig Maximum (g)', 'Gesch. pH', 'Snelheidsboost'],
      rows: [
        ['250g (1 ui)', '0,19 g', '0,38 g', '6,5', 'x1,2'],
        ['500g (2 uien)', '0,38 g', '0,75 g', '6,5', 'x1,2'],
        ['750g (3 uien)', '0,56 g', '1,13 g', '6,5', 'x1,2'],
        ['1000g (1 kg)', '0,75 g', '1,50 g', '7,0', 'x1,6'],
        ['1500g', '1,13 g', '2,25 g', '7,0', 'x1,6'],
        ['2000g', '1,50 g', '3,00 g', '7,0', 'x2,0'],
        ['3000g', '2,25 g', '4,50 g', '7,0', 'x2,0'],
        ['5000g', '3,75 g', '7,50 g', '7,0', 'x2,0'],
      ],
    },
    {
      type: 'title',
      text: 'Oppervlakte-pH Begrijpen en Het Effect op Bruinen',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Neutrale pH (6,0)',
          icon: 'mdi:water',
          description: 'De natuurlijke pH van de meeste rauwe vlees- en groentesoorten. De Maillard-reactie verloopt op de basissnelheid.',
          highlight: false,
          points: ['Reactiesnelheid: x1,0 (basis)', 'Volledig natuurlijk, geen toevoegingen', 'Ideaal voor: puristen, traditionele methoden', 'Langzamer bruinen, meer tijd om gaarheid te controleren'],
        },
        {
          title: 'Licht Alkalisch (pH 7,0 tot 7,5)',
          icon: 'mdi:flask-round-bottom',
          description: 'Bereikt met de aanbevolen hoeveelheid zuiveringszout. Merkbare snelheidstoename zonder smaakimpact.',
          highlight: true,
          points: ['Reactiesnelheid: x1,5-2,0', '½ tl per kg (ong. 0,75g)', 'Ideaal voor: gekaramelliseerde uien, geroosterde groenten', 'De sweet spot voor de meeste thuiskoks'],
        },
        {
          title: 'Hoog Alkalisch (pH 8,0 tot 8,5)',
          icon: 'mdi:alert',
          description: 'Maximale praktische alkaliniteit voordat smaakdefecten optreden. Verdubbelt de bruiningssnelheid maar vereist zorgvuldige controle.',
          highlight: false,
          points: ['Reactiesnelheid: x2,0-3,0', '1 tl per kg (ong. 1,5g)', 'Ideaal voor: donkere pretzelkorsten, extreme karamellisatie', 'Proef voor het serveren  -  op de grens van zeepachtig'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Temperatuurzones en Wat Ze Betekenen voor het Bruinen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Temperatuur is de andere kritische variabele voor de Maillard-reactie. Elke zone levert fundamenteel andere resultaten op. Inzicht in deze drempels helpt je om het juiste hitteniveau voor je kookdoel te kiezen.',
    },
    {
      type: 'table',
      headers: ['Zone', 'Temp.-bereik', 'Wat Gebeurt Er', 'Ideaal Voor'],
      rows: [
        ['Verdamping', 'Onder 110°C', 'Water verdampt, geen bruining', 'Sous vide, pocheren, stomen'],
        ['Langzaam Bruinen', '110-139°C', 'Maillard begint langzaam, zachte kleurontwikkeling', 'Langzaam geroosterde tomaten, lage-temperatuur drogen'],
        ['Optimale Zone', '140-180°C', 'Maximale bruiningssnelheid zonder verbranden', 'Aanbraden, braden, frituren, bakken'],
        ['Pyrolyse', 'Boven 180°C', 'Verbranding begint, bittere scherpe stoffen ontstaan', 'Snel blakeren voor smaakaccent (spaarzaam gebruiken)'],
      ],
    },
    {
      type: 'title',
      text: 'Veelgemaakte Maillard-fouten en Hoe Ze te Herstellen',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Te veel zuiveringszout toevoegen',
      html: 'Bij zuiveringszout is meer niet beter. Meer dan 1,5g per kilogram voedsel veroorzaakt een metaalachtige, zeepachtige of chemische nasmaak. De smaakstoffen die door overmatige alkaliniteit worden geproduceerd, zijn niet hetzelfde als de rijke, hartige tonen van echte Maillard-bruining. <strong>Houd je aan de aanbevolen hoeveelheid die de calculator toont.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Koken op een te lage temperatuur',
      html: 'Onder 110°C ben je in wezen aan het stomen of drogen  -  niet aan het bruinen. De Maillard-reactie kent een minimale activeringstemperatuur. Als je diepe, complexe smaken wilt, <strong>moet het voedseloppervlak minstens 140°C bereiken.</strong> Gebruik een kookmethode op hoge temperatuur zoals aanbraden, grillen of braden boven 180°C oventemperatuur.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Vocht negeren',
      html: 'Water is de vijand van de Maillard-reactie. Natte oppervlakken kunnen de 100°C niet overschrijden totdat het water is verdampt. <strong>Dep voedsel altijd volledig droog</strong> voor het aanbraden. Zuiveringszout helpt omdat het ook de verdamping van oppervlaktewater versnelt door celwanden af te breken, maar het kan zichtbaar nat voedsel niet compenseren. Droge oppervlakken = betere bruining.',
    },
    {
      type: 'title',
      text: 'Pro-tips voor Perfect Bruinen',
      level: 3,
    },
    {
      type: 'tip',
      title: 'De Zuiveringszoutpasta techniek',
      html: 'Strooi nooit droog zuiveringszout rechtstreeks op voedsel  -  het verdeelt niet gelijkmatig. Los de afgemeten hoeveelheid op in 1-2 eetlepels warm water en borstel of meng de pasta vervolgens met het voedsel. Dit zorgt voor een gelijkmatige alkaliniteit over het hele oppervlak voor egaal en consistent bruinen.',
    },
    {
      type: 'tip',
      title: 'Combineer Zuiveringszout met Droog Pekelen',
      html: 'Zuiveringszout en zout werken synergetisch. Pekel je vlees droog met zout gedurende 1-24 uur voor het koken, en breng vervolgens de zuiveringszoutpasta aan vlak voordat het de hitte ingaat. Het zout onttrekt eiwitten die deelnemen aan de Maillard-reactie, terwijl het zuiveringszout deze versnelt. Deze combinatie levert de diepste, rijkste korst op.',
    },
    {
      type: 'tip',
      title: 'Uien karamellisatietruc',
      html: 'Een snufje zuiveringszout (0,3g per grote ui) kan de karamellisatietijd verkorten van 45 naar 20 minuten. Het alkalische milieu breekt de celwanden van de ui sneller af, waardoor suikers en aminozuren vrijkomen die de Maillard-reactie voeden. Maar wees precies  -  te veel zuiveringszout verandert uien in moes met een chemische nasmaak.',
    },
    {
      type: 'title',
      text: 'Belangrijke Bruiningstermen  -  Woordenlijst',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Maillard-reactie', definition: 'Een niet-enzymatische chemische reactie tussen aminozuren en reducerende suikers die de bruine kleur en complexe hartige smaken in gekookt voedsel creëert. Vindt plaats boven 110°C en verschilt van karamellisatie.' },
        { term: 'Pyrolyse', definition: 'De thermische ontleding van organisch materiaal bij hoge temperaturen (boven 180°C). In tegenstelling tot Maillard-bruining produceert pyrolyse bittere, scherpe en soms kankerverwekkende stoffen. Het is wat er gebeurt wanneer voedsel verbrandt.' },
        { term: 'pH', definition: 'Een schaal van 0 tot 14 die de zuurgraad (laag) of alkaliniteit (hoog) meet. Neutraal is 7. De meeste rauwe voedingsmiddelen hebben een pH tussen 5,5 en 6,5. Zuiveringszout verhoogt de pH naar alkalische niveaus, wat de Maillard-reactie versnelt.' },
        { term: 'Natriumbicarbonaat', definition: 'Zuiveringszout  -  een wit kristallijn poeder (NaHCO₃) dat werkt als een zwakke base. Bij het koken verhoogt het de oppervlakte-pH, versnelt het bruinen, maakt het vlees malser en helpt het groenten hun kleur te behouden tijdens het koken.' },
        { term: 'Alkaliniteit', definition: 'Het vermogen van een oplossing om zuren te neutraliseren. In de context van Maillard-versnelling verwijst alkaliniteit naar pH-waarden boven 7,0. Overmatige alkaliniteit veroorzaakt bittere, zeepachtige bijsmaken.' },
        { term: 'Reactiesnelheidsvermenigvuldiger', definition: 'Hoeveel keer sneller de Maillard-reactie verloopt in vergelijking met de basis (pH 6). Een vermenigvuldiger van x2,0 betekent dat het bruinen twee keer zo snel gaat, waardoor de benodigde kooktijd voor dezelfde kleurontwikkeling effectief wordt gehalveerd.' },
        { term: 'Oppervlakte-pH', definition: 'De pH aan het uiterste oppervlak van het voedsel waar de Maillard-reactie plaatsvindt, niet de interne pH. Zuiveringszout beïnvloedt voornamelijk de oppervlakte-pH omdat het tijdens korte kooktijden niet diep in het voedsel doordringt.' },
      ],
    },
    {
      type: 'title',
      text: 'Snelle Referentie: Zuiveringszout voor Gangbare Voedingsmiddelen',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Aanbevolen hoeveelheden zuiveringszout voor alledaags koken',
      items: [
        'Gekaramelliseerde uien (1 grote): 0,3g zuiveringszout  -  verkort de tijd van 45 naar ~20 minuten',
        'Geroosterde aardappelen (500g): 0,4g zuiveringszout  -  krokantere, goudbruinere buitenkant',
        'Gebakken biefstuk (250g): 0,2g zuiveringszout  -  donkerdere korst in minder tijd',
        'Kippenvleugels (1kg): 0,75g zuiveringszout  -  krokanter vel, sneller bruinen',
        'Pretzeldeeg (500g bloem): 1,5g zuiveringszout  -  diepbruine korst na alkalische dip',
        'Gemengde geroosterde groenten (1kg): 0,75g zuiveringszout  -  gelijkmatigere karamellisatie',
      ],
    },
    {
      type: 'paragraph',
      html: 'Elk voedingsmiddel heeft een ander ideaal alkaliniteitsniveau op basis van zijn natuurlijke pH en vochtgehalte. Deze calculator haalt het giswerk uit de vergelijking  -  voer het exacte gewicht en de temperatuur van je voedsel in, en hij geeft je de precieze hoeveelheid zuiveringszout voor elke keer perfect bruinen.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
