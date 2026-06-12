import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Sferifieringsbad Kalkylator Precision Molekylar Gastronomi Guide";
const description = "Berakna exakta forhallanden av natriumalginat och kalciumlaktat for direkt och omvand sferifiering. Korrigera viskositet och surhet med xantangummi och citrat.";

const faq = [
  {
    question: "Vad ar skillnaden mellan direkt och omvand sferifiering?",
    answer: "Vid direkt sferifiering tillsatts natriumalginat till den aromatiserade basen och droppas i ett kalciumbad, vilket skapar ett tunt membran som fortsatter att gelas inat. Vid omvand sferifiering tillsatts kalcium till basen och droppas i ett alginatbad, vilket skapar ett membran som vaxer utat och stoppar gelprocessen nar du skoljer av det."
  },
  {
    question: "Varför blir mina sfärer platta eller sjunker de inte?",
    answer: "Om den aromatiserade basvatskan ar mindre tat an natriumalginatbadet flyter den istallet for att bilda en sfar. Genom att tillsatta en liten mangd xantangummi okar du basens viskositet, vilket gor att den sjunker och bildar perfekta sfärer."
  },
  {
    question: "Vad gor natriumcitrat vid sferifiering?",
    answer: "Natriumcitrat ar ett sekvestreringsmedel som binder kalciumjoner och hojer pH-vardet. Om en basvatska ar mycket sur (pH under 4,5) eller innehaller kalcium, kommer natriumalginatet att gelas i fortid. Att tillsatta citrat neutraliserar denna surhet."
  },
  {
    question: "Kan jag anvanda vilket vatten som helst till kalciumbadet?",
    answer: "Kranvatten med hog mineralhalt kan orsaka att natriumalginat klumpar sig eller gelas i fortid. Anvand helst destillerat vatten eller kalciumfattigt flaskvatten."
  }
];

const howTo = [
  {
    name: "Välj sferifieringsmetod",
    text: "Välj Direkt for tunn, omedelbar gelning, eller Omvand for vatskor som innehaller alkohol, mejeriprodukter eller kalcium."
  },
  {
    name: "Ange vatskemangder",
    text: "Ange vikten av din aromatiserade basvatska och vattenbadet i dina foredragna enheter."
  },
  {
    name: "Lagg till textur- och surhetskorrigeringar",
    text: "Aktivera Xantangummi om din basvatska ar tunn, eller Natriumcitrat om den ar mycket sur."
  },
  {
    name: "Mat upp ingredienser",
    text: "Vag upp de exakta mangderna natriumalginat, kalciumlaktat eller klorid, och korrigeringsmedel som visas i sammanfattningen."
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
  slug: 'sferifieringsbad-kalkylator',
  title: 'Sferifieringsbad Kalkylator',
  description: 'Berakna exakta forhallanden av natriumalginat och kalciumlaktat for direkt och omvand sferifiering. Korrigera viskositet och surhet med xantangummi och citrat.',
  faqTitle: 'Vanliga Fragor',
  ui: {
    title: "Sferifieringsbad Kalkylator",
    subtitle: "Precisionskontroll av forhallanden for direkt och omvand sferifiering",
    unitLabel: "Matsystem",
    metricUnit: "Metriskt (g / gram)",
    imperialUnit: "Imperialiskt (oz / uns)",
    methodLabel: "Sferifieringsmetod",
    directMethod: "Direkt Sferifiering",
    reverseMethod: "Omvand Sferifiering",
    baseWeightLabel: "Basvatskans Vikt",
    bathWeightLabel: "Badvattnets Vikt",
    xanthanLabel: "Aktivera Xantangummi (Viskositetskorrigering)",
    citrateLabel: "Aktivera Natriumcitrat (Surhet / pH Sekvestreringsmedel)",
    recipeTitle: "Beraknad Receptsammandragning",
    baseGellingAgent: "Gelningsmedel for Bas",
    bathGellingAgent: "Gelningsmedel for Bad",
    xanthanGum: "Xantangummi (Förtjockningsmedel)",
    sodiumCitrate: "Natriumcitrat (Buffert)",
    warningLabel: "Loslighetsvarning",
    warningDesc: "Den erforderliga vikten av medlet ar nara eller overstiger loslighetsgransen for denna vatskevolym. Upplosning kan ta langre tid eller krava forsiktig uppvärmning.",
    directDesc: "Idealisk for latta vatskor med lag kalciumhalt. Skapar delikata sfärer med tunn hinna som maste serveras omedelbart.",
    reverseDesc: "Idealisk for mejeriprodukter, alkohol, kalciumrika eller sura vatskor. Skapar stabila sfärer som inte fortsatter att gelas efter skoljning.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Vetenskapen bakom Molekylar Sferifiering och Hydrokolloidgelning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sferifiering ar en revolutionerande kulinarisk teknik som inkapslar en flytande karne i ett tunt, gelat membran. Ursprungligen utvecklad inom industriell forpackning pa 1940-talet, anpassades den for det moderna köket i borjan av 2000-talet. Den underliggande kemin bygger pa vaxelverkan mellan hydrokolloider, specifikt tvarbindningen av natriumalginatpolymerer nar de exponeras for divalenta kalciumkatjoner.',
    },
    {
      type: 'title',
      text: 'Den Molekylara Kemin: Natriumalginat och Kalciumjoner',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Natriumalginat ar en polysackarid utvunnen ur bruna alger, bestaende av linjara kedjor av beta-D-mannuronsyra (M-block) och alfa-L-guluronsyra (G-block). I sin natriumsaltform ar den fullt loslig i vatten och bildar en viskos losning. Nar kalciumjoner (som kalciumklorid eller kalciumlaktatglukonat) tillfors, ersatter de divalenta kalciumjonerna (Ca2+) de monovalenta natriumjonerna (Na+). Eftersom kalcium har tva positiva laddningar binder det till tva G-block pa angransande polymerkedjor och bryggar samman dem. Denna process, vetenskapligt beskriven som <strong>aggkartongsmodellen</strong> for gelning, forbinder de oberoende polysackaridkedjorna till ett stelt, tredimensionellt hydrogelnatverk som fangar vatten och smakmolekyler.',
    },
    {
      type: 'title',
      text: 'Direkt kontra Omvand Sferifieringsmekanismer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De tva huvudmetoderna for sferifiering skiljer sig at i var gelmedlet och kalciumtillsatserna placeras, vilket leder till olika mekaniska egenskaper:',
    },
    {
      type: 'list',
      items: [
        '<strong>Direkt Sferifiering:</strong> Natriumalginat los i den aromatiserade basvatskan, som sedan droppas i ett kalciumbad (vanligtvis 1,0% kalciumklorid). Gelningen borjar omedelbart vid gransytan. Eftersom kalciumjoner ar sma och rorliga, vandrar de kontinuerligt fran badet in i sfarrens karne, vilket far gelmembranet att vaxa inat. Om sfarren inte skoljs av och serveras omedelbart, kommer den sa smaningom att gelas helt igenom och forvandlas till en fast, gummiartad pärla.',
        '<strong>Omvand Sferifiering:</strong> Kalciumlaktatglukonat (2,0%) los i den aromatiserade basvatskan, som sedan droppas i ett natriumalginatbad (0,5%). Eftersom alginatmolekyler ar stora och langsamma, kan de inte enkelt korsa den nybildade gelbarriaren. I stallet vandrar kalciumjoner utat i badet och later membranet vaxa utat. Detta stoppar gelningen omedelbart nar sfarren tas ur badet och skoljs i klart vatten, vilket bevarar en helt flytande karne pa obestamd tid.'
      ],
    },
    {
      type: 'title',
      text: 'Overvinna Surhets- och pH Barriarer med Natriumcitrat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Natriumalginat ar mycket känsligt for syra. Nar pH-vardet i en aromatiserad basvatska sjunker under 4,5 kan alginatmolekylerna inte hydratiseras ordentligt. I stallet for att losas upp faller alginatkedjorna ut som oloslig alginsyra och bildar tradliknande klumpar. For att losa detta anvander kockar <strong>natriumcitrat</strong> som buffertmedel. Natriumcitrat neutraliserar vatejonerna och hojer pH-vardet i sura ingredienser som passionsfrukt eller limejuice over den kritiska troskeln pa 4,5, vilket gor att alginatet kan hydratiseras fullstandigt och bilda rena, sfariska former.',
    },
    {
      type: 'title',
      text: 'Justera Vatskedensitet och Viskositet med Xantangummi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'For att bilda en sfar maste droppen av aromatiserad basvatska vara helt nedsankt i gelningsbadet. Om den aromatiserade basvatskan ar mindre tat an badet (som en latt alkohol eller vattenbaserad juice i ett tjockt natriumalginatbad under omvand sferifiering) kommer den att flyta pa ytan och bli tillplattad. Genom att tillsatta en ytterst liten mangd <strong>xantangummi</strong> (vanligtvis 0,1% till 0,2%) okar basvatskans viskositet. Denna extra kropp ger droppen den rorelseenergi som behovs for att sjunka i badet, sa att ytspanningen kan forma droppen till en perfekt sfar.',
    },
    {
      type: 'table',
      headers: ['Sferifieringsmetod', 'Ideala Ingredienser', 'Erforderliga Tillsatser', 'Forvaringsegenskaper', 'Gelns Tillvaxtriktning'],
      rows: [
        ['Direkt Metod', 'Kalciumfattiga fruktjuicer, klara buljonger, sota siraper', '0,5% Natriumalginat i basen, 1,0% Kalciumklorid i badet', 'Maste serveras omedelbart, gelas igenom med tiden', 'Inat (mot centrum)'],
        ['Omvand Metod', 'Mejeriprodukter, alkohol, kalciumrika eller mycket sura vatskor', '2,0% Kalciumlaktat i basen, 0,5% Natriumalginat i badet', 'Mycket stabil, kan forvaras i olja eller vatten i timmar', 'Utat (fran centrum)'],
      ],
    },
    {
      type: 'title',
      text: 'Skoljning och Sista Konserveringssteg',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Skolja alltid de fardiga sfarrena i ett bad med rent, kallt vatten omedelbart efter att du tagit upp dem ur gelningsbadet. Detta tvattar bort eventuellt kvarvarande kalcium eller alginat pa utsidan, stoppar den kemiska reaktionen och forhindrar bismaker (sarskilt den nagot bittra smaken av kalciumklorid). Vid forvaring, sank ned sfarrena i en vatska med motsvarande den (som den aromatiserade basvatskan utan tillsatser, eller en latt sockersirap) for att forhindra att vatten ror sig over membranet via osmos, vilket annars skulle kunna fa sfarrena att skrumpna eller spricka.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
