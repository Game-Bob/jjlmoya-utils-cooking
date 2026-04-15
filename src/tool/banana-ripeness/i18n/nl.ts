import type { ToolLocaleContent } from '../../../types';

const title = "Bananen Diagnose en Conservering: Wetenschappelijke Gids";
const description = "Analyseer de rijpheidsstatus van je bananen met wetenschappelijke precisie. Leer conserveringstechnieken, de biochemie van ethyleen en voedingsoptimalisatie.";
const faq = [
  {
    question: 'Waarom worden bananen zwart in de koelkast?',
    answer: 'De kou breekt de celwanden van de schil af, waardoor enzymen vrijkomen die fenolen oxideren en zwarte polyfenolen creëren. De binnenkant blijft echter meestal langer stevig en zoet dan buiten de koelkast.',
  },
  {
    question: 'Hoe kan ik een banaan snel laten rijpen?',
    answer: 'Leg ze in een gesloten papieren zak met een appel of een tomaat. Deze stoten ethyleengas uit, wat de rijping versnelt. Als je veel haast hebt, kun je ze een paar minuten in de oven op een lage temperatuur leggen.',
  },
  {
    question: 'Is het veilig om bananen met bruine vlekken te eten?',
    answer: 'Ja, absoluut. De vlekken geven aan dat het zetmeel is omgezet in suiker, waardoor ze zoeter en beter verteerbaar zijn. Gooi ze alleen weg als ze schimmelen, slecht ruiken of extreem zacht zijn.',
  },
  {
    question: 'Wat is ethyleen?',
    answer: 'Het is een plantenhormoon in gasvorm dat de groei en rijping reguleert. De banaan is een climacterische vrucht, wat betekent dat hij ethyleen blijft produceren en blijft rijpen nadat hij is geoogst.',
  },
];
const howTo = [
  {
    name: 'Kleur observeren',
    text: 'Bestudeer zorgvuldig de kleur van de schil, van groen tot donkerbruin, om de huidige rijpheidsstatus te bepalen.',
  },
  {
    name: 'Simulator gebruiken',
    text: 'Verschuif de rijpheidsindicator om nauwkeurige voorspellingen te zien over wanneer de volgende fase wordt bereikt.',
  },
  {
    name: 'Omstandigheden aanpassen',
    text: 'Wijzig temperatuur en vochtigheid om te zien hoe ze de rijpingssnelheid beïnvloeden.',
  },
  {
    name: 'Conservering toepassen',
    text: 'Volg de specifieke aanbevelingen voor conservering en versnelling op basis van de huidige status.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

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
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'bananen-diagnose',
  title: 'Bananen Diagnose en Conservering: Wetenschappelijke Gids',
  description: 'Analyseer de rijpheidsstatus van je bananen met wetenschappelijke precisie. Leer conserveringstechnieken, de biochemie van ethyleen en voedingsoptimalisatie.',
  faqTitle: 'Veelgestelde Vragen',
  bibliographyTitle: 'Bronnen en Referenties',
  ui: {
    ripesnessLabel: 'Rijpheidsstatus',
    nextStageLabel: 'Volgende fase over',
    daysUnit: 'Dagen',
    tempLabel: 'Temperatuur',
    humidityLabel: 'Luchtvochtigheid',
    partnerToggleTitle: 'Climacterische Begeleiding',
    partnerToggleSubtitle: 'Extern ethyleeneffect',
    conservationTitle: 'Conservering',
    accelerationTitle: 'Versnelling',
    stage1Name: 'Smaragdgroen',
    stage1Desc: 'Maximaal gehalte aan resistent zetmeel. Volledig stevig.',
    stage1Conservation: 'Kamertemperatuur (18-20°C). Vermijd kou (<12°C).',
    stage1Acceleration: 'Papieren zak met een appel of rijpe tomaat.',
    stage2Name: 'Stralend Geel',
    stage2Desc: 'Perfect evenwicht tussen stevigheid en beginnende zoetheid.',
    stage2Conservation: 'Koele plek, losmaken van de tros om ethyleen af te remmen.',
    stage2Acceleration: 'Aan de tros laten en in plastic wikkelen.',
    stage3Name: 'Zoet Gespikkeld',
    stage3Desc: 'Piek aan antioxidanten. Intense zoetheid en romige textuur.',
    stage3Conservation: 'Koelen om het vruchtvlees te behouden (ook al wordt de schil donkerder).',
    stage3Acceleration: 'Zachte warmte (bij een warmtebron, niet direct).',
    stage4Name: 'Kaneelbruin Rijp',
    stage4Desc: 'Zeer zachte textuur. Ideaal voor suikervrij bakken.',
    stage4Conservation: 'Onmiddellijk pellen en invriezen.',
    stage4Acceleration: 'Heeft het maximum al bereikt.',
    stage5Name: 'Overrijp / Gefermenteerd',
    stage5Desc: 'Geavanceerd degradatieproces.',
    stage5Conservation: 'Niet aanbevolen voor directe consumptie.',
    stage5Acceleration: 'N.v.t.',
  },
  faq: [
    {
      question: 'Waarom worden bananen zwart in de koelkast?',
      answer: 'De kou breekt de celwanden van de schil af, waardoor enzymen vrijkomen die fenolen oxideren en zwarte polyfenolen creëren. De binnenkant blijft echter meestal langer stevig en zoet dan buiten de koelkast.',
    },
    {
      question: 'Hoe kan ik een banaan snel laten rijpen?',
      answer: 'Leg ze in een gesloten papieren zak met een appel of een tomaat. Deze stoten ethyleengas uit, wat de rijping versnelt. Als je veel haast hebt, kun je ze een paar minuten in de oven op een lage temperatuur leggen.',
    },
    {
      question: 'Is het veilig om bananen met bruine vlekken te eten?',
      answer: 'Ja, absoluut. De vlekken geven aan dat het zetmeel is omgezet in suiker, waardoor ze zoeter en beter verteerbaar zijn. Gooi ze alleen weg als ze schimmelen, slecht ruiken of extreem zacht zijn.',
    },
    {
      question: 'Wat is ethyleen?',
      answer: 'Het is een plantenhormoon in gasvorm dat de groei en rijping reguleert. De banaan is een climacterische vrucht, wat betekent dat hij ethyleen blijft produceren en blijft rijpen nadat hij is geoogst.',
    },
  ],
  howTo: [
    {
      name: 'Kleur observeren',
      text: 'Bestudeer zorgvuldig de kleur van de schil, van groen tot donkerbruin, om de huidige rijpheidsstatus te bepalen.',
    },
    {
      name: 'Simulator gebruiken',
      text: 'Verschuif de rijpheidsindicator om nauwkeurige voorspellingen te zien over wanneer de volgende fase wordt bereikt.',
    },
    {
      name: 'Omstandigheden aanpassen',
      text: 'Wijzig temperatuur en vochtigheid om te zien hoe ze de rijpingssnelheid beïnvloeden.',
    },
    {
      name: 'Conservering toepassen',
      text: 'Volg de specifieke aanbevelingen voor conservering en versnelling op basis van de huidige status.',
    },
  ],
  bibliography: [
    {
      name: 'Ethylene and Fruit Ripening: A Biological Review',
      url: '',
    },
    {
      name: 'Biochemical Changes in Musa acuminata during Ripening (Journal of Food Science)',
      url: 'https://www.foodsciencejournal.com/assets/archives/2017/vol2issue5/2-5-31-566.pdf',
    },
    {
      name: 'The Role of Respiration in Climacteric Fruits (Scientific American)',
      url: 'https://www.nature.com/articles/226976b0',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Wetenschap van de rijping van Musa × paradisiaca',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De banaan is een van de meest geconsumeerde vruchten ter wereld, maar ook een van de biologisch meest onbegrepen vruchten. In tegenstelling tot niet-climacterische vruchten zoals citrusvruchten of druiven, is de banaan een <strong>climacterische vrucht</strong>. Dit betekent dat hij na de oogst doorgaat met rijpen, waarbij de celademhaling drastisch toeneemt evenals de productie van een fundamenteel gasvormig fytohormoon: <strong>ethyleen</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Vanuit biochemisch oogpunt is rijping een cascade van enzymatische gebeurtenissen. Tijdens dit proces breken enzymen zoals amylase complexe koolhydraten (zetmeel) af tot eenvoudige suikers (fructose, glucose en saccharose). Deze verandering verandert niet alleen de smaak en maakt hem zoeter, maar modificeert ook de textuur door de pectine in de celwanden af te breken, wat resulteert in de zachte en romige consistentie die kenmerkend is voor rijpe bananen.',
    },
    {
      type: 'title',
      text: 'De Ethyleencyclus',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ethyleen fungeert als een biologische schakelaar. Zodra de vrucht een kleine concentratie detecteert, activeert hij de genen die verantwoordelijk zijn voor de productie van nog meer ethyleen, waardoor een positieve feedbacklus ontstaat. Dit is de reden waarom een zeer rijpe banaan de rijping van al zijn buren in de fruitschaal versnelt. Om dit proces te vertragen, is het essentieel om exemplaren die al bruine vlekken hebben te isoleren van exemplaren die nog groen zijn.',
    },
    {
      type: 'title',
      text: 'De Mythe van de Koelkast',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Er bestaat een hardnekkig geloof dat bananen niet in de koelkast mogen. De realiteit is complexer: kou (onder 12°C) veroorzaakt kouschade aan de cellen van de schil, waardoor enzymen vrijkomen die fenolen oxideren en de schil zwart maken. Dit heeft echter alleen invloed op de uiterlijke esthetiek. Als de binnenkant de gewenste rijpheid al heeft bereikt, stopt de kou het zacht worden van het vruchtvlees bijna volledig, waardoor de smaak en textuur van de binnenkant nog enkele dagen behouden blijven.',
    },
    {
      type: 'title',
      text: 'Geavanceerde Conserveringsstrategieën',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Verzegeling van de Steel:</strong> Het omwikkelen van het uiteinde van de tros met plastic folie vermindert drastisch de afgifte van ethyleen, waardoor de commerciële houdbaarheid van de vrucht met wel 72 uur kan worden verlengd.',
    },
    {
      type: 'paragraph',
      html: '<strong>Dynamische Ophanging:</strong> Het ophangen van bananen voorkomt blauwe plekken door druk. Beschadigde weefsels laten sneller ethyleen vrij, waardoor rijpingshaarden ontstaan die zich over de hele vrucht verspreiden.',
    },
    {
      type: 'paragraph',
      html: '<strong>Cryotherapie (Invriezen):</strong> Voor bananen in fase 4 (bruin) is invriezen de beste optie. Het pellen van de vrucht vóór het invriezen voorkomt dat er vocht achterblijft, waardoor de kwaliteit van de vezels behouden blijft.',
    },
    {
      type: 'title',
      text: 'Nutritionele Veranderingen per Fase',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Naarmate de banaan rijpt, verandert zijn voedingsprofiel radicaal, waardoor hij kan worden gebruikt als een specifiek dieetinstrument, afhankelijk van de doelen van de consument.',
    },
    {
      type: 'table',
      headers: ['Fase', 'Resistent Zetmeel', 'Kenmerken', 'Belangrijkste Voordeel'],
      rows: [
        ['Groen (1-2)', '~80%', 'Zeer stevig, maximaal zetmeelgehalte', 'Gezondheid van de darmen en bloedsuikercontrole'],
        ['Geel (3)', '~5%', 'Evenwicht tussen stevigheid en zoetheid', 'Snelle energie en B-vitaminen'],
        ['Gespikkeld (4)', 'Minimaal', 'Zeer zacht, hoog suikergehalte', 'Maximaal antioxidantpotentieel'],
        ['Bruin/Overrijp (5)', 'Vrijwel nihil', 'Zeer zachte textuur, geavanceerde fermentatie', 'Niet aanbevolen voor consumptie'],
      ],
    },
    {
      type: 'title',
      text: 'Conclusie en Praktische Toepassing',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Voedselverspilling verminderen:</strong> Een nauwkeurige diagnose van de status van een banaan maakt het mogelijk om het optimale moment voor consumptie te identificeren, waardoor het verlies van waardevol fruit wordt voorkomen.',
        '<strong>Voedingsvoordelen optimaliseren:</strong> Van het resistente zetmeel in de groene exemplaren voor de darmgezondheid tot de antioxidanten in de gespikkelde voor een maximaal antioxidantpotentieel.',
        '<strong>Strategische consumptie plannen:</strong> Pas het gebruik van de banaan aan je gezondheidsdoelen aan: bloedsuikercontrole, snelle energie, spijsvertering of antioxidanten.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Waarschuwing voor degradatie:</strong> Externe factoren zoals een relatieve vochtigheid boven de 85% of temperaturen boven de 25°C kunnen de degradatie drastisch versnellen, waardoor de banaan in een kwestie van uren van optimaal naar oneetbaar gaat. Deze simulator helpt je deze veranderingen te anticiperen en strategisch te plannen.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
