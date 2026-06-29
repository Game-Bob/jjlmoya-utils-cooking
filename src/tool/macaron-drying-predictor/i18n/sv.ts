import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Makrontorkningsprognos: Kalkylator för torktid baserat på luftfuktighet och temperatur';
const description = 'Beräkna exakt hur länge makronskal behöver torka baserat på luftfuktighet, temperatur och skalstorlek. Undvik spruckna skal och få perfekta fötter varje gång.';

const faq = [
  {
    question: 'Varför behöver makronskal torka före gräddning?',
    answer: 'Torkningen bildar en tunn hinna på ytan av makronskalet. Denna hinna är avgörande eftersom den fångar ånga under gräddningen och tvingar den att tränga ut nedåt genom fötterna istället för att spräcka toppen. Utan ordentlig torkning spricker makroner, får inga fötter eller gräddas ojämnt.',
  },
  {
    question: 'Hur påverkar luftfuktigheten makronernas torktid?',
    answer: 'Luftfuktighet är den mest kritiska faktorn. Vid hög luftfuktighet (över 60%) är luften redan mättad med fukt, vilket dramatiskt bromsar avdunstningen från skalytan. Torktiden kan fördubblas eller tredubblas jämfört med en torr dag. Vid mycket torra förhållanden (under 30%) kan skalen övertorka och bilda en tjock hinna som hindrar ordentlig höjning.',
  },
  {
    question: 'Vilken är den ideala temperaturen för att torka makronskal?',
    answer: 'Rumstemperatur mellan 20 °C och 25 °C är idealisk. Varmare luft håller mer fukt och påskyndar torkningen, maste för varmt (över 30 °C) kan göra att skalen torkar ojämnt med en hård yta och blöt insida. Svala temperaturer under 18 °C saktar ner torkningen avsevärt.',
  },
  {
    question: 'Hur påverkar skalstorleken torktiden?',
    answer: 'Större skal har mer ytarea och volym, vilket kräver proportionellt längre torkning. En 2 cm minimakron kan torka på 15 minuter, medan en 5 cm stor makron kan ta över en timme. Förhållandet är inte linjärt: en fördubbling av diametern tredubblar ungefär torktiden på grund av kvadrat-kub-förhållandet mellan ytarea och volym.',
  },
];

const howTo = [
  {
    name: 'Spritsa dina makronskal',
    text: 'Spritsa jämnstora rundlar på bakplåtspapper eller en silikonmatta. Använd en mall för jämn storlek.',
  },
  {
    name: 'Mät din omgivning',
    text: 'Kontrollera luftfuktigheten och temperaturen i ditt kök med en hygrometer och termometer.',
  },
  {
    name: 'Ange värden i kalkylatorn',
    text: 'Mata in luftfuktighet, temperatur och din skaldiameter för att få den beräknade torktiden.',
  },
  {
    name: 'Testa hinnan',
    text: 'Efter den beräknade tiden, rör lätt vid ytan på ett skal. Det ska kännas torrt och matt, inte kladdigt. Om det fastnar på fingret, ge det mer tid.',
  },
  {
    name: 'Grädda när det är klart',
    text: 'När hinnan har bildats, grädda omedelbart. Låt inte skalen stå för länge efter torkning, då kan de övertorka och spricka.',
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
  slug: 'makron-torkprognos',
  title: 'Makrontorkningsprognos',
  description: 'Beräkna exakt hur länge makronskal behöver torka baserat på luftfuktighet, temperatur och skalstorlek. Undvik spruckna skal och få perfekta fötter varje gång.',
  faqTitle: 'Vanliga frågor',
  ui: {
    humidityLabel: 'Luftfuktighet',
    humidityUnit: '%',
    tempLabel: 'Rumstemperatur',
    tempUnit: '°C',
    sizeLabel: 'Skaldiameter',
    sizeUnit: 'cm',
    dryingTimeLabel: 'Beräknad torktid',
    minutesUnit: 'min',
    readinessLabel: 'Ytberedskap',
    skinStatusReady: 'Redo att baka',
    skinStatusForming: 'Skin bildas',
    skinStatusSticky: 'Fortfarande kladdig',
    skinStatusOverDry: 'Övertorkad',
    humidityTagHigh: 'Hög luftfuktighet',
    humidityTagNormal: 'Normal luftfuktighet',
    humidityTagLow: 'Låg luftfuktighet',
    humidityDescHigh: 'Mycket fuktig dag. Torkningen tar betydligt längre tid. Använd en avfuktare eller luftkonditionerat rum om möjligt.',
    humidityDescNormal: 'Måttlig luftfuktighet. Torkningen bör fortskrida i normal takt med bra skinnbildning.',
    humidityDescLow: 'Mycket torr luft. Skalen kan torka för snabbt och riskera övertorkning. Övervaka noga och minska torktiden.',
    tempTagHot: 'Varmt rum',
    tempTagIdeal: 'Ideal rumstemperatur',
    tempTagCool: 'Svalt rum',
    sizeTagMini: 'Mini',
    sizeTagStandard: 'Standard',
    sizeTagLarge: 'Stor',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Vetenskapen bakom makrontorkning: Varför hinnbildning avgör resultatet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Makronen är ett av de mest tekniskt krävande bakverken inom franskt konditori. Dess karakteristiska släta kupol och veckade bas, känd som "foten" eller "pied", beror helt på ett kritiskt steg: torkning av de spritsade skalen före gräddning. Under vilotiden bildas en tunn proteinfilm på ytan av varje skal. Under gräddningen fångar denna hinna den expanderande ångan inuti skalet och tvingar den nedåt för att tränga ut genom basen, vilket lyfter skalet och skapar den eftertraktade foten. Utan tillräcklig torkning spränger ångan genom toppen och orsakar sprickor. Vid överdriven torkning blir hinnan för styv och skalen kan inte resa sig ordentligt.',
    },
    {
      type: 'title',
      text: 'Luftfuktighet och dess dominerande roll i torkningskinetiken',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Relativ luftfuktighet är den enskilt mest inflytelserika variabeln vid torkning av makronskal. Vid 50% relativ luftfuktighet behöver ett standard 3 cm skal vanligtvis 30-40 minuter för att utveckla en tillräcklig hinna. Vid 70% luftfuktighet kan detta förlängas till 60-90 minuter. Vid 30% luftfuktighet kan torkningen vara klar på så lite som 15-20 minuter. Fysiken bakom detta är enkel: avdunstningshastigheten är proportionell mot ångtrycksunderskottet mellan skalytan och den omgivande luften. Fuktig luft har ett mindre underskott, vilket bromsar avdunstningen. Professionella konditorier kontrollerar luftfuktigheten noggrant och har ofta särskilda makronrum vid 40-50% relativ luftfuktighet.',
    },
    {
      type: 'title',
      text: 'Referenstabell för torktid efter luftfuktighet och skalstorlek',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Luftfuktighet', '2 cm Mini', '3 cm Standard', '4 cm Stor', '5 cm Extra stor'],
      rows: [
        ['30% (Mycket torrt)', '10-15 min', '15-20 min', '25-30 min', '35-45 min'],
        ['40% (Torrt)', '15-20 min', '20-30 min', '30-40 min', '45-60 min'],
        ['50% (Måttligt)', '20-25 min', '30-40 min', '40-55 min', '55-75 min'],
        ['60% (Fuktigt)', '25-35 min', '40-55 min', '55-75 min', '75-100 min'],
        ['70% (Mycket fuktigt)', '35-50 min', '55-75 min', '75-100 min', '100-130 min'],
        ['80% (Extremt fuktigt)', '50-70 min', '75-100 min', '100-140 min', '130-180 min'],
      ],
    },
    {
      type: 'title',
      text: 'Temperaturens roll i avdunstningshastigheten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Temperaturen påverkar torkningen genom två mekanismer. För det första kan varmare luft hålla mer vattenånga, vilket ökar den potentiella avdunstningshastigheten från skalytan. För det andra ökar den molekylära kinetiska energin med temperaturen, vilket påskyndar hastigheten med vilken vattenmolekyler lämnar vätskefasen. Temperaturen påverkar dock också marängens stabilitet. Över 28 °C kan äggviteproteinerna i marängen börja destabiliseras, vilket leder till en försvagad struktur. Det ideala intervallet för makrontorkning är 20-25 °C. Under 18 °C saktar avdunstningshastigheten ner till den punkt där torkning blir opraktiskt för skal av standardstorlek.',
    },
    {
      type: 'title',
      text: 'Skalstorlek och kvadrat-kub-lagen för torkning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Skaldiametern har en icke-linjär effekt på torktiden på grund av kvadrat-kub-förhållandet mellan ytarea och volym. En 2 cm minimakron har ungefär 3,1 cm² ytarea för 0,5 cm³ volym, vilket ger ett gynnsamt yta-till-volym-förhållande på cirka 6:1. En 5 cm stor makron har cirka 19,6 cm² yta för 8,2 cm³ volym, ett förhållande på endast 2,4:1. Detta innebär att större skal har proportionellt mindre ytarea genom vilken fukt kan tränga ut, vilket dramatiskt ökar torktiden. Kalkylatorn modellerar detta med hjälp av ett potenslagssamband kalibrerat mot empiriska data från professionella konditorkök.',
    },
    {
      type: 'title',
      text: 'Felsökning av vanliga misslyckanden vid makrontorkning',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Spruckna skal utan fötter',
      html: 'Det vanligaste makronmisslyckandet. Detta indikerar nästan alltid att skalen inte torkades tillräckligt länge före gräddning. Ythinnan var för svag för att hålla kvar den expanderande ångan, som sprängde genom toppen. <strong>Lösning: Öka torktiden med 10-15 minuter och testa ytan med en lätt fingertryckning före gräddning.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Sneda eller lutande fötter',
      html: 'Ojämn torkning är boven. Om ena sidan av plåten torkar snabbare än den andra reser sig fötterna ojämnt. Detta händer ofta när plåtar placeras nära ett fönster, fläkt eller värmekälla. <strong>Lösning: Rotera plåtarna under torkningen och säkerställ jämn luftcirkulation runt alla skal.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ihåliga skal efter gräddning',
      html: 'Ihåliga skal kan bli resultatet av övertorkning, vilket skapar en hinna som är för tjock och styv. Skalet kan inte expandera ordentligt under gräddningen och lämnar en luftficka inuti. <strong>Lösning: Minska torktiden och kontrollera hinnbildningen tidigare. Ytan ska kännas torr men fortfarande ha en lätt svikt vid försiktigt tryck.</strong>',
    },
    {
      type: 'title',
      text: 'Proffstips från professionella konditorer',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Ugnsluckstekniken för fuktiga dagar',
      html: 'Extremt fuktiga dagar använder professionella kockar en teknik som kallas "ugnstorkning". Värm ugnen till lägsta möjliga inställning (vanligtvis 50 °C), stäng av den och placera sedan de spritsade makronerna inuti med luckan lite på glänt i 5-10 minuter. Detta skapar ett varmt mikroklimat med låg luftfuktighet som påskyndar hinnbildningen utan att börja grädda skalen.',
    },
    {
      type: 'tip',
      title: 'Vidröringstestet för perfekt hinna',
      html: 'Det definitiva testet för makronberedskap: rör lätt vid ytan på ett skal med en ren, torr fingertopp. Om smeten fastnar på fingret behöver den mer tid. Om ytan känns torr och matt och inte fastnar har hinnan bildats. Om ytan känns hård och skorpig utan svikt är skalen övertorkade.',
    },
    {
      type: 'tip',
      title: 'Fuktkontroll utan utrustning',
      html: 'Om du inte har en avfuktare, ställ en skål med okokt ris eller silikagelpåsar nära de torkande makronerna. Dessa torkmedel absorberar omgivande fukt och skapar ett torrare mikroklimat runt plåten. I professionella kök utan klimatkontroll kan detta enkla knep minska torktiden med 30-40% under fuktiga dagar.',
    },
    {
      type: 'title',
      text: 'Faktorn med lagrade äggvitor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lagrade äggvitor producerar mer stabila maränger som torkar mer förutsägbart. Färska äggvitor innehåller mer vatten och mindre elastisk proteinstruktur, vilket leder till svagare maränger som tar längre tid att bilda en ordentlig hinna. Professionella recept kräver äggvitor som lagrats i 24-72 timmar i rumstemperatur eller 3-5 dagar i kylskåp. Lagrade vitor förlorar ungefär 10-15% av sitt vatteninnehåll genom avdunstning, vilket koncentrerar proteinerna och förbättrar marangens styrka.',
    },
    {
      type: 'title',
      text: 'Snabbrreferens: Torktider för vanliga förhållanden',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Typiska torktider för 3 cm standardmakronskal',
      items: [
        'Luftkonditionerat kök (22 °C, 45% luftfuktighet): 25-30 minuter',
        'Vardag, fönster öppna (20 °C, 55% luftfuktighet): 35-45 minuter',
        'Sommardag, ingen AC (28 °C, 70% luftfuktighet): 60-90 minuter  -  använd ugnstorkningstekniken',
        'Uppvärmt hem vintertid (21 °C, 30% luftfuktighet): 15-20 minuter  -  se upp för övertorkning',
        'Regnig dag (18 °C, 80% luftfuktighet): 75-100 minuter  -  överväg starkt avfuktare',
        'Professionellt konditorkök (22 °C, 45% luftfuktighet, konvektion): 20-25 minuter',
      ],
    },
    {
      type: 'paragraph',
      html: 'Varje köks miljö är unik. Denna kalkylator tar hänsyn till de tre kritiska variablerna  -  luftfuktighet, temperatur och skalstorlek  -  för att ge dig en personlig torktidsprognos. Ange dina förhållanden och spritsa med självförtroende.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
