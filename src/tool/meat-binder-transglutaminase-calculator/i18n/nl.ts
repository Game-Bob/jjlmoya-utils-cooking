import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Transglutaminase Vleesbinder Calculator: Dosering voor Moleculaire Gastronomie';
const description = 'Bereken de precieze transglutaminase (TG)-dosering voor vleesbinden. Verkrijg droge bestuiving of slurry-verhoudingen, incubatietijd en temperatuurveiligheidswaarschuwingen.';

const faq = [
  {
    question: 'Wat is transglutaminase en hoe bindt het vlees?',
    answer: 'Transglutaminase (TG), ook wel "vleeslijm" genoemd, is een enzym dat de vorming van covalente bindingen katalyseert tussen de aminozuren glutamine en lysine in eiwitten. Wanneer het op vleesopper- vlakken wordt aangebracht, creëert het verknopingen die afzonderlijke stukken samensmelten tot één samenhangende plak. De reactie heeft tijd en koude temperaturen (2:5°C) nodig om volledig te ontwikkelen, doorgaans 6 tot 24 uur.',
  },
  {
    question: 'Wat is het verschil tussen droge bestuiving en slurry-toepassing?',
    answer: 'Droge bestuiving houdt in dat het TG-poeder direct op het vleesopper- vlak wordt gestrooid bij 0,75:1,5% van het vleesgewicht. De slurry-methode mengt één deel TG met vier delen water om een borstelbare pasta te creëren, ideaal voor het bedekken van onregelmatige oppervlakken of het aanbrengen van dunne, gelijkmatige lagen op grote braadstukken of filets met huid.',
  },
  {
    question: 'Beïnvloedt de temperatuur de werking van transglutaminase?',
    answer: 'Ja. TG is het meest actief tussen 2°C en 15°C. Bij hogere temperaturen (tot 40°C) versnelt de reactie maar moet nauwlettend worden gevolgd. Boven 60°C denatureert het enzym en wordt permanent inactief: de verknopingsreactie stopt volledig. Houd TG-gebonden vlees tijdens het koken altijd onder 60°C om de binding te behouden.',
  },
  {
    question: 'Kan ik transglutaminase gebruiken op vis of schaaldieren?',
    answer: 'Ja, maar vis en schaaldieren hebben lagere niveaus van lysine en glutamine in hun spiereiwitten in vergelijking met rood vlees en gevogelte. Mogelijk hebt u een hogere TG-verhouding (1,2:1,5%) en langere incubatietijden nodig. Voor delicate sint-jakobsschelpen of dunne visfilets kunt u de slurry-methode overwegen voor een gelijkmatigere bedekking.',
  },
];

const howTo = [
  {
    name: 'Selecteer toepassingsmethode',
    text: 'Kies Droge Bestuiving voor gelijkmatige oppervlakken zoals braadstukken en biefstukken. Kies Slurry voor onregelmatige stukken, dunne lagen of eiwitten met huid.',
  },
  {
    name: 'Voer vleesgewicht in',
    text: 'Voer het totale gewicht in van het vlees of eiwit dat u wilt binden in grammen.',
  },
  {
    name: 'Specificeer eiwittype',
    text: 'Selecteer het eiwittype dat het beste bij uw stuk past. Rood vlees heeft minder TG nodig; vis en schaaldieren hebben meer nodig.',
  },
  {
    name: 'Stel incubatietemperatuur in',
    text: 'Voer de koeltemperatuur in (2:40°C). De calculator schat de benodigde bindtijd.',
  },
  {
    name: 'Weeg en breng TG aan',
    text: 'Meet het berekende TG-poeder af. Breng aan door te bestuiven of de pasta te borstelen en druk de eiwitoppervlakken stevig tegen elkaar.',
  },
  {
    name: 'Laat rusten en koel',
    text: 'Wikkel stevig in plastic folie en koel gedurende de aanbevolen incubatieperiode voordat u gaat koken.',
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
  slug: 'transglutaminase-vleesbinder-calculator',
  title: 'Transglutaminase Vleesbinder Calculator',
  description: 'Bereken de precieze transglutaminase (TG)-dosering voor vleesbinden. Verkrijg droge bestuiving of slurry-verhoudingen, incubatietijd en temperatuurveiligheidswaarschuwingen.',
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    title: 'Transglutaminase Vleesbinder Calculator',
    subtitle: 'Moleculaire precisie voor eiwitverknoping',
    methodLabel: 'Toepassingsmethode',
    dryMethod: 'Droge Bestuiving',
    slurryMethod: 'Slurry (borstelbare pasta)',
    weightLabel: 'Vlees / Eiwit Gewicht',
    proteinLabel: 'Eiwittype',
    redMeat: 'Rood Vlees (Rund, Lam, Wild)',
    poultry: 'Gevogelte (Kip, Kalkoen, Eend)',
    fish: 'Vis (Stevige Filets, Hele Vis)',
    shellfish: 'Schaaldieren (Sint-jakobsschelpen, Garnalen, Kreeft)',
    unitLabel: 'Meetsysteem',
    metricUnit: 'Metrisch (g / °C)',
    imperialUnit: 'Imperiaal (oz / °F)',
    tempLabel: 'Incubatietemperatuur',
    resultTitle: 'Doseringsresultaten',
    tgAmount: 'Transglutaminase (TG)',
    waterAmount: 'Water (voor Slurry)',
    totalWeight: 'Totaal Gebonden Gewicht',
    ratioLabel: 'TG-Verhouding',
    incubationLabel: 'Aanbevolen Incubatie',
    incubationRange: '{min}u tot {max}u',
    dryDustingDesc: 'Strooi TG-poeder gelijkmatig over het vleesopper- vlak en druk de stukken tegen elkaar. Ideaal voor platte stukken en braadstukken.',
    slurryDesc: 'Meng TG met 4 delen water om een borstelbare pasta te maken. Aanbrengen met een kwast voor onregelmatige oppervlakken, filets of huidbinding.',
    enzymeDestroyed: 'Enzym Vernietigd: Temperatuur overschrijdt de denaturatiedrempel. Transglutaminase is gedenatureerd en zal niet binden.',
    noWarning: '',
    hours: 'uur',
    grams: 'g',
    milliliters: 'ml',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Hoeveel transglutaminase moet u per kilo vlees gebruiken?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De juiste dosis hangt af van het type eiwit en de toepassingsmethode. Voor rood vlees gebruikt u 0,75:1,0% TG per gewicht (7,5:10 g per kg). Voor gevogelte 1,0:1,2%. Voor vis en schaaldieren 1,2:1,5%. Breng aan als droge bestuiving voor platte stukken of meng met 4 delen water als slurry voor onregelmatige oppervlakken. Voer uw eiwitgewicht in de bovenstaande calculator in voor een exacte meting.',
    },
    {
      type: 'title',
      text: 'Droge bestuiving vs. slurry: welke methode moet u kiezen?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Droge bestuiving werkt het beste op platte, gelijkmatige oppervlakken zoals biefstukken, braadstukken of schnitzels. Strooi het TG-poeder direct (0,75:1,5% van het vleesgewicht) en druk de stukken tegen elkaar. De slurry-methode (1 deel TG op 4 delen water) is beter voor onregelmatige stukken, filets met huid of delicate sint-jakobsschelpen waar gelijkmatige bedekking belangrijk is. Borstel de pasta op, assembleer en wikkel stevig in. Beide methoden vereisen koude incubatie om de binding te voltooien.',
    },
    {
      type: 'title',
      text: 'Waarom temperatuurcontrole uw binding maakt of breekt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Transglutaminase werkt het beste tussen 2°C en 5°C en vormt sterke verknopingen over 6:24 uur. Bij hogere koelkasttemperaturen (5:15°C) versnelt de reactie naar 3:8 uur, maar de bindingen kunnen oppervlakkiger zijn. Boven 40°C denatureert het enzym snel, en bij 60°C wordt het onmiddellijk vernietigd: bestaande bindingen stoppen met vormen en het vlees zal scheiden tijdens het koken. Controleer altijd uw koeltemperatuur met de meter in de visualizer hierboven.',
    },
    {
      type: 'table',
      headers: ['Eiwit', 'TG-dosis (% van gewicht)', 'Methode', 'Incubatie (2:5°C)', 'Bindsterkte'],
      rows: [
        ['Rund, Lam, Wild', '0,75:1,0%', 'Droog bestuiven', '6:12 u', 'Zeer sterk'],
        ['Kip, Kalkoen, Eend', '1,0:1,2%', 'Beide', '8:16 u', 'Sterk'],
        ['Zalm, Kabeljauw, Zeebaars', '1,2:1,5%', 'Slurry', '12:24 u', 'Matig'],
        ['Sint-jakobsschelpen, Garnalen, Kreeft', '1,0:1,5%', 'Slurry', '12:24 u', 'Matig'],
      ],
    },
    {
      type: 'title',
      text: 'Veelgemaakte fouten bij het binden van vlees met TG',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Te veel enzym:</strong> Meer dan 1,5% TG gebruiken laat een zichtbaar wit residu en een krijtachtige textuur achter. Het overschot maakt de binding niet sterker.',
        '<strong>Vet of zilvervlies op het oppervlak:</strong> TG kan niet binden aan vet of bindweefsel. Snijd oppervlakken schoon tot u kale spiervezels ziet voordat u aanbrengt.',
        '<strong>De rustperiode overslaan:</strong> De verknopingsreactie duurt uren. Direct na montage koken zal het enzym wegspoelen voordat bindingen zich vormen.',
        '<strong>Hitte boven 60°C tijdens het koken:</strong> De binding blijft behouden bij zacht koken (sous vide op 55:58°C is ideaal), maar hoge schroeitemperaturen kunnen de interface verzwakken.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
