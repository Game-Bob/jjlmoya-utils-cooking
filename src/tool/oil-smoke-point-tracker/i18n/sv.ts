import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Oljerökpunktsspårare: Uppskattning av frityroljans livslängd & nedbrytning';
const description = 'Övervaka frityroljans kvalitet och uppskatta aktuell rökpunktsförsämring. Följ användningar, temperaturer och livsmedelstyper för att förhindra skadlig ansamling av polära föreningar.';

const faq = [
  {
    question: 'Varför sjunker frityroljans rökpunkt över tid?',
    answer: 'Varje gång olja hettas upp till friteringstemperaturer bryter termisk nedbrytning, hydrolys och oxidation ner triglycerider till fria fettsyror (FFA), monoacylglyceroler och diacylglyceroler. Dessa nedbrytningsprodukter har mycket lägre kok- och rökpunkt än intakta triglycerider, vilket gör att oljan börjar ryka vid lägre temperaturer vid upprepad användning.',
  },
  {
    question: 'Vad är polära föreningar och varför är de reglerade?',
    answer: 'Polära föreningar (TPC) är de nedbrytningsprodukter som bildas under fritering. När de överstiger 25 % av oljans vikt anses oljan vara nedbruten, oxiderad och skadlig att konsumera, vilket orsakar bismaker och potentiella kardiovaskulära risker. Många europeiska länder kräver enligt lag att frityrolja kasseras när TPC överstiger 25 %.',
  },
  {
    question: 'Hur påverkar panering eller mjöl oljans nedbrytning?',
    answer: 'Panering, frityrsmet och lösa mjölpartiklar lämnar matrester i den heta oljan. Dessa partiklar förkolnar snabbt vid temperaturer över 180 grader Celsius, frigör fria fettsyror och fungerar som katalysatorer som påskyndar termisk nedbrytning. Rena stärkelserika livsmedel som potatis bryter ner oljan mycket långsammare.',
  },
  {
    question: 'Vad är den säkra gränsen för återanvändning av olja?',
    answer: 'Som tumregel kan raffinerade högvärmeoljor som raps- eller jordnötsolja återanvändas 5 till 8 gånger under rena förhållanden. Oraffinerade oljor eller oljor som utsatts för temperaturer över 190 grader Celsius eller panerade livsmedel bör dock kasseras efter 1 till 3 användningar.',
  },
];

const howTo = [
  {
    name: 'Välj typ av frityrolja',
    text: 'Välj din olja från databaslistan. Raffinerade högvärmeoljor har en högre startrökpunkt än oraffinerade alternativ.',
  },
  {
    name: 'Följ friteringscykler',
    text: 'Ange det totala antalet friteringsomgångar den aktuella oljebatchen har genomgått.',
  },
  {
    name: 'Ange friteringstemperatur',
    text: 'Justera reglaget för att matcha medeltemperaturen för dina friteringsomgångar. Temperaturer över 180 grader Celsius påskyndar nedbrytningen.',
  },
  {
    name: 'Identifiera typ av matbeläggning',
    text: 'Ange om du friterar rena stärkelserika livsmedel eller panerade/bröade livsmedel som lämnar förkolnade rester.',
  },
  {
    name: 'Kontrollera rökpunkt & kasseringsstatus',
    text: 'Granska den försämrade rökpunkten och kasseringsmätaren. Kassera omedelbart om oljehälsan hamnar i den kritiska zonen.',
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
  slug: 'olje-roekpunkt-matare',
  title: 'Oljerökpunktsspårare',
  description: 'Övervaka frityroljans kvalitet och uppskatta aktuell rökpunktsförsämring. Följ användningar, temperaturer och livsmedelstyper för att förhindra skadlig ansamling av polära föreningar.',
  faqTitle: 'Vanliga frågor',
  ui: {
    oilPresetLabel: 'Typ av frityrolja',
    presetAvocadoRefined: 'Avokadoolja (Raffinerad)',
    presetSunflowerRefined: 'Solrosolja (Raffinerad)',
    presetPeanutRefined: 'Jordnötsolja (Raffinerad)',
    presetCanolaRefined: 'Rapsolja (Raffinerad)',
    presetOliveEV: 'Extra Jungfruolivolja',
    presetOlivePomace: 'Olivpulpolja',
    presetCoconutUnrefined: 'Kokosolja (Oraffinerad)',
    presetSunflowerUnrefined: 'Solrosolja (Oraffinerad)',
    usesLabel: 'Friteringscykler (Användningar)',
    tempLabel: 'Friteringstemperatur',
    foodTypeLabel: 'Livsmedelsberedning / Panering',
    optionStarch: 'Ren stärkelse (Potatis, Pommes Frites)',
    optionBreading: 'Panerade, frityrsmet eller bröade livsmedel',
    baseSmokePointLabel: 'Startrökpunkt',
    currentSmokePointLabel: 'Försämrad rökpunkt',
    polarCompoundsLabel: 'Polära föreningar (TPC)',
    polymerizationLabel: 'Oljans polymerisationshälsa',
    statusLabel: 'Oljesäkerhetsprofil',
    statusGood: 'SÄKER ATT ÅTERANVÄNDA',
    statusCaution: 'VARNING - FILTRERA SNART',
    statusDiscard: 'KASSERA OMEDELBART',
    adviceGood: 'Oljans egenskaper är stabila. Fortsätt fritera, men filtrera bort matrester efter avsvalning.',
    adviceCaution: 'Nedbrytningen har påbörjats. Rökpunkten har sjunkit. Vi rekommenderar filtrering och endast ytterligare en användning.',
    adviceDiscard: 'Kritisk nedbrytning har uppnåtts. Hög koncentration av polära föreningar. Kassera för att förhindra härskning och hälsorisker.',
    gaugeSafe: 'Säker',
    gaugeCaution: 'Varning',
    gaugeDiscard: 'Kassera',
    limitLabel: 'Gräns',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Kemin bakom fritering: Varför oljor bryts ner',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Fritering är en av de mest kemiskt intensiva matlagningsteknikerna. När mat sänks ner i olja vid höga temperaturer (vanligtvis mellan 160 och 190 grader Celsius) utsätts oljan samtidigt för värme, fukt från maten och syre från luften. Detta utlöser tre distinkta kemiska reaktioner: hydrolys (vatten bryter esterbindningar), oxidation (syre skapar hydroperoxider) och polymerisation (nedbrutna molekyler binder samman till tjocka, viskösa kedjor). När dessa reaktioner fortgår ökar koncentrationen av totala polära föreningar (TPC), och temperaturen vid vilken oljan börjar brytas ner och ryka sjunker betydligt.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '25% TPC', label: 'Lagstadgad kasseringsgräns', icon: 'mdi:alert-octagon' },
        { value: '180°C', label: 'Kritisk temperaturtröskel', icon: 'mdi:thermometer-alert' },
        { value: '2,2x', label: 'Nedbrytningshastighet panering', icon: 'mdi:chart-timeline-variant' },
        { value: 'FFA', label: 'Fria fettsyror orsakar', icon: 'mdi:molecule' },
      ],
    },
    {
      type: 'title',
      text: 'Polära föreningar och hälsoregleringar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Totala polära föreningar (TPC) fungerar som internationell standard för att mäta nedbrytningsgraden hos friteringsfetter. I professionella kök är användning av olja med en TPC-koncentration över 25 % lagligt förbjuden i flera länder på grund av säkerhetsrisker. Dessa polära föreningar är absorptionshämmare, minskar tillagningseffektiviteten och försämrar den friterade ytans krispighet. Ännu viktigare är att regelbunden konsumtion av oxiderad olja bidrar till intag av fria radikaler och toxiska föreningar som är förknippade med kardiovaskulära problem.',
    },
    {
      type: 'title',
      text: 'Jämförelse av oljetyper: Startrökpunkter',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Raffinerade oljor (Högvärme)',
          icon: 'mdi:shield-check',
          description: 'Oljor som bearbetats för att avlägsna flyktiga föreningar, fria fettsyror och orenheter. De har exceptionellt höga startrökpunkter.',
          points: ['Raffinerad avokado: 270°C / 518°F', 'Raffinerad solros: 232°C / 450°F', 'Raffinerad jordnöt: 232°C / 450°F', 'Hög motståndskraft mot initial nedbrytning'],
        },
        {
          title: 'Oraffinerade oljor (Lågvärme / Smakrika)',
          icon: 'mdi:leaf',
          description: 'Kallpressade eller jungfruoljor som innehåller höga mängder naturliga ämnen, mineraler och fria fettsyror.',
          highlight: true,
          points: ['Extra jungfruoliv: 190°C / 374°F', 'Oraffinerad kokos: 177°C / 350°F', 'Oraffinerad solros: 107°C / 225°F', 'Bryts ner extremt snabbt under värme'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Referenstabell för frityroljas rökpunkt & maximal återanvändning',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Oljesort', 'Startrökpunkt (°C)', 'Startrökpunkt (°F)', 'Tillstånd / Bearbetning', 'Rekommenderad max användning'],
      rows: [
        ['Avokadoolja (Raffinerad)', '270°C', '518°F', 'Raffinerad', '10 till 12 användningar'],
        ['Olivpulpolja', '238°C', '460°F', 'Raffinerad', '8 till 10 användningar'],
        ['Solrosolja (Raffinerad)', '232°C', '450°F', 'Raffinerad', '6 till 8 användningar'],
        ['Jordnötsolja (Raffinerad)', '232°C', '450°F', 'Raffinerad', '6 till 8 användningar'],
        ['Rapsolja (Raffinerad)', '204°C', '400°F', 'Raffinerad', '5 till 7 användningar'],
        ['Extra Jungfruolivolja', '190°C', '374°F', 'Kallpressad', '2 till 3 användningar'],
        ['Kokosolja (Oraffinerad)', '177°C', '350°F', 'Oraffinerad', '1 till 2 användningar'],
        ['Solrosolja (Oraffinerad)', '107°C', '225°F', 'Oraffinerad', 'Använd inte för fritering'],
      ],
    },
    {
      type: 'title',
      text: 'Kritiska varningstecken på nedbruten olja',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Fara: När frityrolja blir giftig',
      html: 'Fortsätt inte återanvända olja om du observerar något av följande symptom: <strong>härsken eller tvålliknande lukt</strong>, mörk och grumlig färg, eller <strong>överdriven skumning</strong> runt maten. Om oljan börjar ryka vid normala tillagningstemperaturer (170-180°C) indikerar det att rökpunkten har störtdykt på grund av extrem ansamling av fria fettsyror (FFA). Matlagning med nedbruten olja överför toxiska polära föreningar och cancerogena ämnen till din mat, vilket skadar både smak och hälsa.',
    },
    {
      type: 'title',
      text: 'Så förlänger du frityroljans kvalitet',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Filtrera bort förkolnade rester omedelbart',
      html: 'Fritering av panerade eller mjölade livsmedel lämnar mikropartiklar som sjunker till botten av fritösen. Dessa partiklar fortsätter att förkolna under tillagningen och fungerar som katalysatorer som påskyndar oljenedbrytningen. För att bromsa denna process, skumma alltid ytan under fritering och <strong>filtrera den avsvalnade oljan</strong> genom ett finmaskigt nät, ostduk eller kaffefilter efter varje friteringsomgång. Förvara filtrerad olja i en försluten glasbehållare på en mörk, sval plats.',
    },
    {
      type: 'title',
      text: 'Bästa praxis för fritering',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Torka matytorna noggrant</strong> - Överflödig fukt utlöser snabb hydrolys och bryter ner oljan till fria fettsyror.',
        '<strong>Undvik att salta före fritering</strong> - Salt fungerar som en katalysator som påskyndar oljeoxidation; krydda maten omedelbart efter att den tagits upp ur den heta oljan.',
        '<strong>Håll optimala temperaturer</strong> - Håll dig mellan 170°C och 180°C. Högre temperaturer påskyndar termisk nedbrytning, medan lägre temperaturer gör att maten absorberar för mycket fett.',
        '<strong>Fyll inte på gammal olja med ny</strong> - Att blanda färsk olja med nedbruten olja påskyndar nedbrytningen av den nya oljan istället för att återställa den.',
      ],
    },
    {
      type: 'title',
      text: 'Ordlista för fritering & lipidnedbrytning',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Rökpunkt', definition: 'Temperaturen vid vilken en olja eller ett fett börjar brytas ner kontinuerligt och producera synlig blåaktig rök och frigör akrolein.' },
        { term: 'Totala polära föreningar (TPC)', definition: 'Den globala standardindikatorn för oljenedbrytning, som representerar den totala viktprocenten av oxiderade föreningar, FFA och polymerer.' },
        { term: 'Hydrolys', definition: 'En kemisk reaktion där vattenmolekyler bryter ner triglycerider till fria fettsyror och glycerol. Utlöses av fukt från livsmedel.' },
        { term: 'Polymerisation', definition: 'Processen där värmeskadade oljemolekyler sammanfogas för att bilda stora makromolekylära strukturer, vilket ökar oljans viskositet.' },
        { term: 'Fria fettsyror (FFA)', definition: 'Karboxylsyror som frigörs från triglycerider under hydrolys. De sänker direkt fettets startrökpunkt.' },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
