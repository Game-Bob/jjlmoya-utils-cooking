import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Makrontorkningsprognos: Kalkylator for torktid baserat pa luftfuktighet och temperatur';
const description = 'Berakna exakt hur lange makronskal behover torka baserat pa luftfuktighet, temperatur och skalstorlek. Undvik spruckna skal och fa perfekta fotter varje gang.';

const faq = [
  {
    question: 'Varfor behover makronskal torka fore graddning?',
    answer: 'Torkningen bildar en tunn hinna pa ytan av makronskalet. Denna hinna ar avgorande eftersom den fangar anga under graddningen och tvingar den att tranga ut nedat genom fotterna istallet for att spracka toppen. Utan ordentlig torkning spricker makroner, far inga fotter eller graddas ojamnt.',
  },
  {
    question: 'Hur paverkar luftfuktigheten makronernas torktid?',
    answer: 'Luftfuktighet ar den mest kritiska faktorn. Vid hog luftfuktighet (over 60%) ar luften redan mattad med fukt, vilket dramatiskt bromsar avdunstningen fran skalyta. Torktiden kan fordubblas eller tredubblas jamfort med en torr dag. Vid mycket torra forhallanden (under 30%) kan skalen overtorka och bilda en tjock hinna som hindrar ordentlig hojning.',
  },
  {
    question: 'Vilken ar den ideala temperaturen for att torka makronskal?',
    answer: 'Rumstemperatur mellan 20Â°C och 25Â°C ar idealisk. Varmare luft haller mer fukt och paskyndar torkningen, men for varmt (over 30Â°C) kan gora att skalen torkar ojamnt med en hard yta och blot insida. Svala temperaturer under 18Â°C saktar ner torkningen avsevart.',
  },
  {
    question: 'Hur paverkar skalstorleken torktiden?',
    answer: 'Storre skal har mer ytarea och volym, vilket kraver proportionellt langre torkning. En 2 cm minimakron kan torka pa 15 minuter, medan en 5 cm stor makron kan ta over en timme. Forhallandet ar inte linjart: en fordubbling av diametern tredubblar ungefar torktiden pa grund av kvadrat-kub-forhallandet mellan ytarea och volym.',
  },
];

const howTo = [
  {
    name: 'Spritsa dina makronskal',
    text: 'Spritsa jamnstora rundlar pa bakplatspapper eller en silikonmatta. Anvand en mall for jamn storlek.',
  },
  {
    name: 'Mat din omgivning',
    text: 'Kontrollera luftfuktigheten och temperaturen i ditt kok med en hygrometer och termometer.',
  },
  {
    name: 'Ange varden i kalkylatorn',
    text: 'Mata in luftfuktighet, temperatur och din skaldiameter for att fa den beraknade torktiden.',
  },
  {
    name: 'Testa hinnan',
    text: 'Efter den beraknade tiden, ror latt vid ytan pa ett skal. Det ska kannas torrt och matt, inte kladdigt. Om det fastnar pa fingret, ge det mer tid.',
  },
  {
    name: 'Gradda nar det ar klart',
    text: 'Nar hinnan har bildats, graadda omedelbart. Lat inte skalen sta for lange efter torkning, da kan de overtorka och spricka.',
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
  description: 'Berakna exakt hur lange makronskal behover torka baserat pa luftfuktighet, temperatur och skalstorlek. Undvik spruckna skal och fa perfekta fotter varje gang.',
  faqTitle: 'Vanliga fragor',
  ui: {
    humidityLabel: 'Luftfuktighet',
    humidityUnit: '%',
    tempLabel: 'Rumstemperatur',
    tempUnit: 'Â°C',
    sizeLabel: 'Skaldiameter',
    sizeUnit: 'cm',
    dryingTimeLabel: 'Beraknad torktid',
    minutesUnit: 'min',
    readinessLabel: 'Ytberedskap',
    skinStatusReady: 'Redo att baka',
    skinStatusForming: 'Skin bildas',
    skinStatusSticky: 'Fortfarande kladdig',
    skinStatusOverDry: 'Overtorkad',
    humidityTagHigh: 'Hog luftfuktighet',
    humidityTagNormal: 'Normal luftfuktighet',
    humidityTagLow: 'Lag luftfuktighet',
    humidityDescHigh: 'Mycket fuktig dag. Torkningen tar betydligt langre tid. Anvand en avfuktare eller luftkonditionerat rum om mojligt.',
    humidityDescNormal: 'Mattlig luftfuktighet. Torkningen bor fortskrida i normal takt med bra skinnbildning.',
    humidityDescLow: 'Mycket torr luft. Skalen kan torka for snabbt och riskera overtorkning. Overvaka noga och minska torktiden.',
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
      text: 'Vetenskapen bakom makrontorkning: Varfor hinnbildning avgor resultatet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Makronen ar ett av de mest tekniskt kravande bakverken inom franskt konditori. Dess karakteristiska slata kupol och veckade bas, kand som "foten" eller "pied", beror helt pa ett kritiskt steg: torkning av de spritsade skalen fore graddning. Under vilotiden bildas en tunn proteinfilm pa ytan av varje skal. Under graddningen fangar denna hinna den expanderande angan inuti skalet och tvingar den nedat for att tranga ut genom basen, vilket lyfter skalet och skapar den eftertraktade foten. Utan tillracklig torkning spranger angan genom toppen och orsakar sprickor. Vid overdriven torkning blir hinnan for styv och skalen kan inte resa sig ordentligt.',
    },
    {
      type: 'title',
      text: 'Luftfuktighet och dess dominerande roll i torkningskinetiken',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Relativ luftfuktighet ar den enskilt mest inflytelserika variabeln vid torkning av makronskal. Vid 50% relativ luftfuktighet behover ett standard 3 cm skal vanligtvis 30-40 minuter for att utveckla en tillracklig hinna. Vid 70% luftfuktighet kan detta forlangas till 60-90 minuter. Vid 30% luftfuktighet kan torkningen vara klar pa sa lite som 15-20 minuter. Fysiken bakom detta ar enkel: avdunstningshastigheten ar proportionell mot angtrycksunderskottet mellan skalytan och den omgivande luften. Fuktig luft har ett mindre underskott, vilket bromsar avdunstningen. Professionella konditorier kontrollerar luftfuktigheten noggrant och har ofta sarskilda makronrum vid 40-50% relativ luftfuktighet.',
    },
    {
      type: 'title',
      text: 'Referenstabell for torktid efter luftfuktighet och skalstorlek',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Luftfuktighet', '2 cm Mini', '3 cm Standard', '4 cm Stor', '5 cm Extra stor'],
      rows: [
        ['30% (Mycket torrt)', '10-15 min', '15-20 min', '25-30 min', '35-45 min'],
        ['40% (Torrt)', '15-20 min', '20-30 min', '30-40 min', '45-60 min'],
        ['50% (Mattligt)', '20-25 min', '30-40 min', '40-55 min', '55-75 min'],
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
      html: 'Temperaturen paverkar torkningen genom tva mekanismer. For det forsta kan varmare luft halla mer vattenanga, vilket okar den potentiella avdunstningshastigheten fran skalytan. For det andra okar den molekylara kinetiska energin med temperaturen, vilket paskyndar hastigheten med vilken vattenmolekyler lamnar vatskefasen. Temperaturen paverkar dock ocksa marangens stabilitet. Over 28Â°C kan aggviteproteinerna i marangen borja destabiliseras, vilket leder till en forsvagad struktur. Det ideala intervallet for makrontorkning ar 20-25Â°C. Under 18Â°C saktar avdunstningshastigheten ner till den punkt dar torkning blir opraktisk for skal av standardstorlek.',
    },
    {
      type: 'title',
      text: 'Skalstorlek och kvadrat-kub-lagen for torkning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Skaldiametern har en icke-linjar effekt pa torktiden pa grund av kvadrat-kub-forhallandet mellan ytarea och volym. En 2 cm minimakron har ungefar 3,1 cmÂ² ytarea for 0,5 cmÂ³ volym, vilket ger ett gynnsamt yta-till-volym-forhallande pa cirka 6:1. En 5 cm stor makron har cirka 19,6 cmÂ² yta for 8,2 cmÂ³ volym, ett forhallande pa endast 2,4:1. Detta innebar att storre skal har proportionellt mindre ytarea genom vilken fukt kan tranga ut, vilket dramatiskt okar torktiden. Kalkylatorn modellerar detta med hjalp av ett potenslagssamband kalibrerat mot empiriska data fran professionella konditorkok.',
    },
    {
      type: 'title',
      text: 'Felsokning av vanliga misslyckanden vid makrontorkning',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Spruckna skal utan fotter',
      html: 'Det vanligaste makronmisslyckandet. Detta indikerar nastan alltid att skalen inte torkades tillrackligt lange fore graddning. Ythinnan var for svag for att halla kvar den expanderande angan, som sprangde genom toppen. <strong>Losning: Oka torktiden med 10-15 minuter och testa ytan med en latt fingertryckning fore graddning.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Sneda eller lutande fotter',
      html: 'Ojamn torkning ar boven. Om ena sidan av platen torkar snabbare an den andra reser sig fotterna ojamnt. Detta hander ofta nar platar placeras nara ett fonster, flakt eller varmekalla. <strong>Losning: Rotera platarna under torkningen och sakerstall jamn luftcirkulation runt alla skal.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ihaliga skal efter graddning',
      html: 'Ihaliga skal kan bli resultatet av overtorkning, vilket skapar en hinna som ar for tjock och styv. Skalet kan inte expandera ordentligt under graddningen och lamnar en luftficka inuti. <strong>Losning: Minska torktiden och kontrollera hinnbildningen tidigare. Ytan ska kannas torr men fortfarande ha en latt svikt vid forsiktigt tryck.</strong>',
    },
    {
      type: 'title',
      text: 'Proffstips fran professionella konditorer',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Ugnsluckstekniken for fuktiga dagar',
      html: 'Extremt fuktiga dagar anvander professionella kockar en teknik som kallas "ugntorkning". Varm ugnen till lagsta mojliga installning (vanligtvis 50Â°C), stang av den och placera sedan de spritsade makronerna inuti med luckan lite pa glant i 5-10 minuter. Detta skapar ett varmt mikroklimat med lag luftfuktighet som paskyndar hinnbildningen utan att borja graadda skalen.',
    },
    {
      type: 'tip',
      title: 'Vidrorningstestet for perfekt hinna',
      html: 'Det definitiva testet for makronberedskap: ror latt vid ytan pa ett skal med en ren, torr fingertopp. Om smeten fastnar pa fingret behover den mer tid. Om ytan kanns torr och matt och inte fastnar har hinnan bildats. Om ytan kanns hard och skorpig utan svikt ar skalen overtorkade.',
    },
    {
      type: 'tip',
      title: 'Fuktkontroll utan utrustning',
      html: 'Om du inte har en avfuktare, stall en skal med okokt ris eller silikagelpasar nara de torkande makronerna. Dessa torkmedel absorberar omgivande fukt och skapar ett torrare mikroklimat runt platen. I professionella kok utan klimatkontroll kan detta enkla knep minska torktiden med 30-40% under fuktiga dagar.',
    },
    {
      type: 'title',
      text: 'Faktorn med lagrade aggvitor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lagrade aggvitor producerar mer stabila maranger som torkar mer forutsagbart. Farska aggvitor innehaller mer vatten och mindre elastisk proteinstruktur, vilket leder till svagare maranger som tar langre tid att bilda en ordentlig hinna. Professionella recept kraver aggvitor som lagrats i 24-72 timmar i rumstemperatur eller 3-5 dagar i kylskap. Lagrade vitor forlorar ungefar 10-15% av sitt vatteninnehall genom avdunstning, vilket koncentrerar proteinerna och forbattrar marangens styrka.',
    },
    {
      type: 'title',
      text: 'Snabbreferens: Torktider for vanliga forhallanden',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Typiska torktider for 3 cm standardmakronskal',
      items: [
        'Luftkonditionerat kok (22Â°C, 45% luftfuktighet): 25-30 minuter',
        'Vardag, fonster oppna (20Â°C, 55% luftfuktighet): 35-45 minuter',
        'Sommardag, ingen AC (28Â°C, 70% luftfuktighet): 60-90 minuter  -  anvand ugntorkningstekniken',
        'Uppvarmt hem vintertid (21Â°C, 30% luftfuktighet): 15-20 minuter  -  se upp for overtorkning',
        'Regnig dag (18Â°C, 80% luftfuktighet): 75-100 minuter  -  overvag starkt avfuktare',
        'Professionellt konditorkok (22Â°C, 45% luftfuktighet, konvektion): 20-25 minuter',
      ],
    },
    {
      type: 'paragraph',
      html: 'Varje koks miljo ar unik. Denna kalkylator tar hansyn till de tre kritiska variablerna  -  luftfuktighet, temperatur och skalstorlek  -  for att ge dig en personlig torktidsprognos. Ange dina forhallanden och spritsa med sjalvfortroende.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
