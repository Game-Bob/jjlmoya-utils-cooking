import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Transglutaminas Köttbindare Kalkylator: Doseringsguide för Molekylär Gastronomi';
const description = 'Beräkna exakt dosering av transglutaminas (TG) för köttbindning. Få torrdamning eller slurry-förhållanden, inkubationstid och temperatursäkerhetsvarningar.';

const faq = [
  {
    question: 'Vad är transglutaminas och hur binder det kött?',
    answer: 'Transglutaminas (TG), även känt som "köttlim", är ett enzym som katalyserar bildandet av kovalenta bindningar mellan aminosyrorna glutamin och lysin i proteiner. När det appliceras på köttytor skapar det tvärbindningar som sammanfogar separata bitar till en sammanhängande helhet. Reaktionen kräver tid och kalla temperaturer (2:5°C) för att utvecklas fullt ut, vanligtvis 6 till 24 timmar.',
  },
  {
    question: 'Vad är skillnaden mellan torrdamning och slurry-applicering?',
    answer: 'Torrdamning innebär att strö TG-pulver direkt på köttytan med 0,75:1,5 % av köttets vikt. Slurry-metoden blandar en del TG med fyra delar vatten för att skapa en penslingsbar pasta, idealisk för att täcka ojämna ytor eller applicera tunna, jämna lager på stora stekar eller filéer med skinn.',
  },
  {
    question: 'Påverkar temperaturen transglutaminasets aktivitet?',
    answer: 'Ja. TG är mest aktivt mellan 2°C och 15°C. Vid högre temperaturer (upp till 40°C) accelererar reaktionen men måste övervakas noggrant. Över 60°C denatureras enzymet och blir permanent inaktivt: tvärbindningsreaktionen upphör helt. Håll alltid TG-bundet kött under 60°C under tillagning för att bevara bindningen.',
  },
  {
    question: 'Kan jag använda transglutaminas på fisk eller skaldjur?',
    answer: 'Ja, men fisk och skaldjur har lägre nivåer av lysin och glutamin i sina muskelproteiner jämfört med rött kött och fågel. Du kan behöva ett högre TG-förhållande (1,2:1,5 %) och längre inkubationstider. För känsliga pilgrimsmusslor eller tunna fiskfiléer, överväg slurry-metoden för jämnare täckning.',
  },
];

const howTo = [
  {
    name: 'Välj appliceringsmetod',
    text: 'Välj Torrdamning för jämna ytor som stekar och rostbiffar. Välj Slurry för ojämna styckningsdelar, tunna lager eller protein med skinn.',
  },
  {
    name: 'Ange köttvikt',
    text: 'Mata in den totala vikten av köttet eller proteinet du vill binda i gram.',
  },
  {
    name: 'Specificera proteintyp',
    text: 'Välj den proteintyp som bäst matchar ditt stycke. Rött kött behöver mindre TG; fisk och skaldjur behöver mer.',
  },
  {
    name: 'Ställ in inkubationstemperatur',
    text: 'Ange kylförvaringstemperaturen (2:40°C). Kalkylatorn uppskattar den nödvändiga bindningstiden.',
  },
  {
    name: 'Väg och applicera TG',
    text: 'Mät upp den beräknade mängden TG-pulver. Applicera genom damning eller pensling av slurry, tryck sedan köttytorna stadigt mot varandra.',
  },
  {
    name: 'Vila och kyl',
    text: 'Slå in tätt i plastfolie och kyl under den rekommenderade inkubationsperioden före tillagning.',
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
  slug: 'transglutaminase-kottbindare-kalkylator',
  title: 'Transglutaminas Köttbindare Kalkylator',
  description: 'Beräkna exakt dosering av transglutaminas (TG) för köttbindning. Få torrdamning eller slurry-förhållanden, inkubationstid och temperatursäkerhetsvarningar.',
  faqTitle: 'Vanliga Frågor',
  ui: {
    title: 'Transglutaminas Köttbindare Kalkylator',
    subtitle: 'Molekylär precision för proteintvärbindning',
    methodLabel: 'Appliceringsmetod',
    dryMethod: 'Torrdamning',
    slurryMethod: 'Slurry (Penslingsbar Pasta)',
    weightLabel: 'Kött / Protein Vikt',
    proteinLabel: 'Proteintyp',
    redMeat: 'Rött Kött (Nötkött, Lamm, Vilt)',
    poultry: 'Fågel (Kyckling, Kalkon, Anka)',
    fish: 'Fisk (Fasta Filéer, Hela Fiskar)',
    shellfish: 'Skaldjur (Pilgrimsmusslor, Räkor, Hummer)',
    unitLabel: 'Mätsystem',
    metricUnit: 'Metriskt (g / °C)',
    imperialUnit: 'Imperie (oz / °F)',
    tempLabel: 'Inkubationstemperatur',
    resultTitle: 'Doseringsresultat',
    tgAmount: 'Transglutaminas (TG)',
    waterAmount: 'Vatten (för Slurry)',
    totalWeight: 'Total Bunden Vikt',
    ratioLabel: 'TG-förhållande',
    incubationLabel: 'Rekommenderad Inkubation',
    incubationRange: '{min}h till {max}h',
    dryDustingDesc: 'Strö TG-pulver jämnt över köttytan, tryck sedan bitarna mot varandra. Idealisk för platta styckningsdelar och stekar.',
    slurryDesc: 'Blanda TG med 4 delar vatten för att skapa en penslingsbar pasta. Applicera med pensel för ojämna ytor, filéer eller skinnbindning.',
    enzymeDestroyed: 'Enzym Förstört: Temperaturen överstiger denatureringströskeln. Transglutaminaset har denaturerats och kommer inte att binda.',
    noWarning: '',
    hours: 'timmar',
    grams: 'g',
    milliliters: 'ml',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Hur mycket transglutaminas ska du använda per kilo kött?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Rätt dos beror på typen av protein och appliceringsmetoden. För rött kött, använd 0,75:1,0 % TG av vikten (7,5:10 g per kg). För fågel, 1,0:1,2 %. För fisk och skaldjur, 1,2:1,5 %. Applicera som torrdamning för platta styckningsdelar eller blanda med 4 delar vatten som slurry för ojämna ytor. Ange din proteinvikt i kalkylatorn ovan för att få exakta mått.',
    },
    {
      type: 'title',
      text: 'Torrdamning vs. slurry: vilken metod ska du välja?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Torrdamning fungerar bäst på plana, jämna ytor som biffar, stekar eller kotletter. Strö TG-pulvret direkt (0,75:1,5 % av köttvikten) och tryck bitarna mot varandra. Slurry-metoden (1 del TG till 4 delar vatten) är bättre för ojämna styckningsdelar, filéer med skinn eller känsliga pilgrimsmusslor där jämn täckning är viktig. Pensla på pastan, montera och slå in tätt. Båda metoderna kräver kall inkubation för att fullborda bindningen.',
    },
    {
      type: 'title',
      text: 'Varför temperaturkontroll avgör din bindning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Transglutaminas fungerar bäst mellan 2°C och 5°C och bildar starka tvärbindningar under 6:24 timmar. Vid högre kylskåpstemperaturer (5:15°C) accelererar reaktionen till 3:8 timmar, men bindningarna kan bli ytligare. Över 40°C denatureras enzymet snabbt, och vid 60°C förstörs det omedelbart: befintliga bindningar slutar bildas och köttet separeras under tillagning. Övervaka alltid din kylförvaringstemperatur med mätaren i visualiseringsverktyget ovan.',
    },
    {
      type: 'table',
      headers: ['Protein', 'TG-dos (% av vikt)', 'Metod', 'Inkubation (2:5°C)', 'Bindningsstyrka'],
      rows: [
        ['Nötkött, Lamm, Vilt', '0,75:1,0 %', 'Torrdamning', '6:12 h', 'Mycket stark'],
        ['Kyckling, Kalkon, Anka', '1,0:1,2 %', 'Båda', '8:16 h', 'Stark'],
        ['Lax, Torsk, Havsabborre', '1,2:1,5 %', 'Slurry', '12:24 h', 'Måttlig'],
        ['Pilgrimsmusslor, Räkor, Hummer', '1,0:1,5 %', 'Slurry', '12:24 h', 'Måttlig'],
      ],
    },
    {
      type: 'title',
      text: 'Vanliga misstag vid bindning av kött med TG',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>För mycket enzym:</strong> Att använda mer än 1,5 % TG lämnar en synlig vit beläggning och en kritig konsistens. Överskottet gör inte bindningen starkare.',
        '<strong>Fett eller silverskinn på ytan:</strong> TG kan inte binda till fett eller bindväv. Trimma ytor rena tills nakna muskelfibrer syns före applicering.',
        '<strong>Hoppa över viloperioden:</strong> Tvärbindningsreaktionen tar timmar. Tillagning direkt efter montering sköljer bort enzymet innan bindningar hinner bildas.',
        '<strong>Värme över 60°C under tillagning:</strong> Bindningen håller vid skonsam tillagning (sous vide vid 55:58°C är idealiskt), men höga stekningstemperaturer kan försvaga gränsytan.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
