import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Pektin och Syltberaknare for Perfekt Gel Varje Gang';
const description = 'Berakna exakt hur mycket pektin, citronsyra och socker din frukt behover for att uppna den perfekta sylten. Undvik rinnig eller gummiaktig konservering med precisionskemi.';

const faq = [
  {
    question: 'Varfor far pektin sylt att gelera?',
    answer: 'Pektin ar en naturlig polysackarid som finns i fruktens cellvaggar. Vid upphettning med socker och syra (pH 2,8-3,5) bildar pektinmolekyler ett tredimensionellt gelnatverk som fangar vatten och socker, vilket skapar syltens bredbara konsistens.',
  },
  {
    question: 'Vad ar skillnaden mellan HM- och LM-pektin?',
    answer: 'Hogmetoxyl (HM) pektin kraver minst 60% socker och ett pH under 3,5 for att gelera - idealiskt for traditionell sylt. Lagmetoxyl (LM) pektin gelerar via kalciumjoner istallet for socker, vilket mojliggor sylt med lagt sockerinnehall eller helt utan socker.',
  },
  {
    question: 'Varfor blir min sylt ibland rinnig?',
    answer: 'Rinnig sylt beror vanligtvis pa otillrackligt pektin (frukten saknar det naturligt), otillracklig syra (for hogt pH for gelering) eller for lite socker (for HM-pektin). Overutspadning med vatten eller for kort koktid kan ocksa forhindra att sylten stelnar.',
  },
  {
    question: 'Kan jag anvanda citronsaft istallet for citronsyrapulver?',
    answer: 'Ja. Denna kalkylator omvandlar citronsyra till citronsaftsekvivalenter. Cirka 25 ml citronsaft ger samma surhet som 1 g citronsyra. Citronsaft tillfor ocksa farsk smak till sylten.',
  },
  {
    question: 'Vilka frukter ar naturligt rika pa pektin?',
    answer: 'Applen, kvitten, bjornbar, tranbar och krusbar ar naturligt rika pa pektin och kraver ofta inget tillsatt pektin. Omogen frukt innehaller ocksa mer pektin an helt mogen frukt.',
  },
];

const howTo = [
  {
    name: 'Valj din frukt',
    text: 'Valj den frukt du gor sylt med. Varje frukt har olika naturliga pektin- och surhetsnivaer som bestammer vilka tillsatser som behovs.',
  },
  {
    name: 'Vag din forberedda frukt',
    text: 'Ange vikten pa din rengjorda, hackade frukt i gram. Noggrann vagning ar avgorande for precisionssyltning.',
  },
  {
    name: 'Valj din pektintyp',
    text: 'Valj Klassisk (HM) for traditionell sylt med hogt sockerinnehall, eller Lagt Socker (LM) om du vill ha en halsosammare, sockerreducerad konservering aktiverad av kalcium.',
  },
  {
    name: 'Granska ditt perfekta recept',
    text: 'Kalkylatorn visar exakta gram pektinpulver, citronsyra (eller citronsaft) och socker som behovs. Tillsatt dessa under kokningen for en garanterad gelering.',
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
  slug: 'pektin-sylt-installningskalkylator',
  title: 'Pektin & Syltberaknare',
  description: 'Berakna exakt hur mycket pektin, citronsyra och socker din frukt behover for perfekt sylt - inte langre rinnig eller gummiaktig konservering.',
  faqTitle: 'Vanliga Fragor',
  ui: {
    title: 'Pektin & Syltberaknare',
    subtitle: 'Precisionsgelkemi for perfekt konservering',
    fruitLabel: 'Valj Din Frukt',
    allFruits: 'Alla',
    highPectin: 'Hogt Pektin',
    mediumPectin: 'Medel Pektin',
    lowPectin: 'Lagt Pektin',
    weightLabel: 'Fruktvikt',
    weightPlaceholder: 't.ex. 1000',
    weightUnitMetric: 'g',
    weightUnitImperial: 'oz',
    pectinTypeLabel: 'Pektintyp',
    pectinHM: 'Klassisk (HM)',
    pectinLM: 'Lagt Socker (LM)',
    sugarModeLabel: 'Sockerlage',
    sugarModeAuto: 'Auto',
    sugarModeManual: 'Manuell',
    sugarLabel: 'Sockervikt',
    sugarPlaceholder: 't.ex. 650',
    recipeTitle: 'Recept',
    pectinNeeded: 'Pektin',
    citricAcidNeeded: 'Citronsyra',
    lemonJuiceNeeded: 'Citronsaft',
    sugarNeeded: 'Socker',
    totalYield: 'Total Mangd',
    sugarPercent: 'Socker',
    sugarLow: 'Lagt',
    sugarIdeal: 'Idealiskt',
    sugarHigh: 'Hogt',
    sugarOfFruit: 'av fruktvikt',
    sugarOfTotal: 'av totalt',
    statusPerfect: 'Perfekt Gel',
    statusPerfectDesc: 'Dina proportioner ar balanserade. Sylten kommer att stelna vackert med en silkeslen, bredbar konsistens och briljant glans.',
    statusSlightlyThin: 'Ngot Tunn',
    statusSlightlyThinDesc: 'Sylten kan stelna mjukt. Overvag att tillsatta mer pektin eller minska vatteninnehallet for en fastare gel.',
    statusTooThin: 'For Tunn - Risk for Rinnig Sylt',
    statusTooThinDesc: 'Utan justering kommer denna sylt sannolikt forbli flytande. Oka sockret (for HM) eller tillsatt mer pektin.',
    statusTooStiff: 'For Styv',
    statusTooStiffDesc: 'Gelen kan bli gummiaktig. Halvera pektinet eller oka fruktvikten nagot.',
    dropTestTitle: 'Kallt Tallrikstest',
    dropTestHow: 'Droppa pa en kyld tallrik',
    dropStatusLabel: 'Resultat',
    dropTestPerfect: 'Kommer stelna. Droppen skrynklas och haller',
    dropTestThin: 'Rinnig. Den glider nerfor tallriken',
    dropTestStiff: 'For styv. Ror sig knappt',
    dropPlateLabel: 'tallrik',
    dropDropLabel: 'droppe',
    sugarAutoHint: 'auto-beraknad',
    sugarManualHint: 'ange mangd',
    unitLabel: 'Matsystem',
    metricLabel: 'Metrisk (g)',
    imperialLabel: 'Imperial (oz)',
    disclaimer: 'Vag alla ingredienser med en digital koksvaag for basta resultat. Volymmatningar ar opalitliga for syltning.',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Den Fullstandiga Vetenskapen om Syltgelering: Pektin-, Syra- och Sockerbalans',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Syltning ar en precis skarningspunkt mellan kemi och matlagning. I grunden beror omvandlingen av fruktmassa till en fast, bredbar gel pa den korrekta balansen av tre molekyler: <strong>pektin</strong> (geleringsmedlet), <strong>syra</strong> (katalysatorn som aktiverar pektin) och <strong>socker</strong> (det dehydratiserande medlet som drar bort vatten fran pektinkedjor). Utan ratt proportioner far du antingen fruktsoppa eller ett gummiaktigt block.',
    },
    {
      type: 'title',
      text: 'Hur Pektin Bildar ett Gelnatverk',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pektin ar en komplex polysackarid som huvudsakligen bestar av galakturonsyraenheter och finns i mittlamellen i vaxtcellvaggarna. I sitt naturliga tillstand ar pektinmolekyler negativt laddade och stoter bort varandra, vilket haller dem upplosta i fruktens vatten. For att bilda en gel maste tre villkor uppfyllas samtidigt: (1) tillrackligt med socker maste finnas for att konkurrera om vattenmolekyler, vilket dehydratiserar pektinkedjorna; (2) pH maste sjunka under 3,5, vilket neutraliserar de negativa laddningarna via protonering av karboxylgrupper; och (3) temperaturen maste overstiga 104-105°C for att helt losa upp och aktivera pektinet. Nar dessa forhallanden sammanfaller bildar pektinkedjor kopplingszoner - omraden dar kedjor associeras via vatebindningar och hydrofoba interaktioner - vilket skapar ett kontinuerligt tredimensionellt svampliktande natverk som fangar fruktjuicen och sockersirapen.',
    },
    {
      type: 'title',
      text: 'Hogmetoxyl (HM) vs. Lagmetoxyl (LM) Pektin',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pektin klassificeras efter forestringsgrad (DE), vilket ar andelen karboxylgrupper som forestrats med metanol. <strong>Hogmetoxyl (HM) pektin</strong> (DE > 50%) kraver minst 55-65% losliga fasta amnen (socker) och ett pH mellan 2,8 och 3,5 for att bilda en gel. Detta ar det klassiska pektinet som anvands i traditionella syltrecept. Utan tillrackligt socker bildar HM-pektin en svag eller obefintlig gel. <strong>Lagmetoxyl (LM) pektin</strong> (DE < 50%) gelerar via en annan mekanism: det tvarbinder via tva-varda kalciumjoner (Ca²⁺) som bryggar mellan fria karboxylgrupper. LM-pektin kan gelera med lite eller inget tillsatt socker, vilket gor det idealiskt for kalorisnal, diabetesvanlig eller naturligt sotad konservering. Vissa LM-pektiner tolererar aven ett bredare pH-omrade upp till 5,5, anvandbart for lag-syra frukter som fikon och paron.',
    },
    {
      type: 'title',
      text: 'Naturligt Pektininnehall Bland Fruktsorter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Alla frukter ar inte lika nar det galler pektin. Frukter faller in i tre kategorier baserat pa deras naturliga pektin- och syranivaer. Att forsta var din frukt befinner sig pa detta spektrum avgor om du behover komplettera med pektinpulver eller citronsyra.',
    },
    {
      type: 'table',
      headers: ['Pektinniva', 'Syreniva', 'Exempelfrukter', 'Tillsatt Pektin Behovs'],
      rows: [
        ['Hog', 'Hog', 'Apple, Tranbar, Krusbar', '0% (inget)'],
        ['Hog', 'Medel/Lag', 'Kvitten, Bjornbar', '0% (inget)'],
        ['Medel', 'Hog', 'Hallon, Loganbar', '0,3% av fruktvikt'],
        ['Medel', 'Medel', 'Plommon, Aprikos', '0,3% av fruktvikt'],
        ['Medel', 'Lag', 'Blabar', '0,3% av fruktvikt'],
        ['Lag', 'Hog', 'Korsbar, Vindruva', '0,6% av fruktvikt'],
        ['Lag', 'Medel', 'Persika, Mango', '0,6% av fruktvikt'],
        ['Lag', 'Lag', 'Jordgubbe, Paron, Fikon', '0,6% av fruktvikt'],
      ],
    },
    {
      type: 'title',
      text: 'Den Kritiska Rollen for pH i Syltgelering',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Syltblandningens pH ar mojligen den mest forbisedda variabeln vid hemsyltning. Vid ett pH over 3,8 forblir karboxylgrupperna pa pektin joniserade (negativt laddade), vilket skapar elektrostatisk repulsion som forhindrar gelbildning oavsett hur mycket socker eller pektin du tillsatter. Nar pH sjunker under 3,5 genom tillsats av citronsyra eller citronsaft blir dessa grupper protonerade, vilket mojliggor vatebindningsbildning mellan intilliggande pektinkedjor. Den optimala geleringszonen ligger mellan pH 2,8 och 3,2. Under pH 2,8 blir gelen sprod och kan uppvisa syneres (lackage av vatska). Over pH 3,5 forekommer aven syneres och gelen ar for svag. Darfor behover lag-syra frukter som fikon och jordgubbar nastan alltid extra citronsyra - deras naturliga pH ar for hogt for att aktivera pektin korrekt.',
    },
    {
      type: 'title',
      text: 'Sockerkoncentration och Dess Effekt pa Gelstyrka',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Socker har tva funktioner i HM-pektinsylt. For det forsta ar det starkt hygroskopiskt - det konkurrerar kraftigt med pektin om vattenmolekyler, drar bort hydratiseringsskal fran pektinkedjorna och tvingar dem att interagera med varandra istallet. For det andra hojer det blandningens kokpunkt, vilket gor att sylten kan na stelningspunkten 104-105°C. Vid 65% sockerkoncentration ar pektinkedjorna tillrackligt dehydratiserade for att bilda en stark gel. Under 60% forsvagas gelen linjart. Over 68% kan sylten kristallisera vid avkylning nar socker overstiger sin loslighetsgrans. For LM-pektinsylt spelar socker endast en smakroll eftersom geleringen beror pa kalciumoverbryggning. Sockerinnehallet kan vara sa lagt som 5-10% i LM-pektinsylt sotad med icke-narande sotningsmedel.',
    },
    {
      type: 'title',
      text: 'Citronsyra vs. Citronsaft: Omvandling och Basta Praxis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Citronsyra (C₆H₈O₇) ar den primara syran som anvands i kommersiell syltproduktion eftersom den ar standardiserad, smaklos och precis. Citronsaft innehaller cirka 5% citronsyra i vikt, plus appelsyra och askorbinsyra (C-vitamin). <strong>1 gram ren citronsyra motsvarar ungefar 25 ml farsk citronsaft</strong> i pH-sankande formaga. Citronsaft tillfor dock aven vatskevolym, vilket maste beaktas i den totala vattenhalten. For mest konsekventa resultat, anvand citronsyrapulver upplost i en liten mangd vatten. Vid anvandning av citronsaft, rakna med ytterligare 20-30 ml vatska som maste kokas bort for att na stelningspunkten.',
    },
    {
      type: 'title',
      text: 'Det Kalla Tallrikstestet: En Visuell Metod for att Bestamma Stelningspunkten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Det traditionella kalla tallrikstestet (aven kallat skrynkeltestet eller fatprovet) ar fortfarande en av de mest palitliga metoderna for hemsyltare. Ställ en liten keramisk tallrik i frysen i 10 minuter innan du borjar koka. Nar du tror att sylten har natt sin stelningspunkt, droppa en tesked varm sylt pa den kylda tallriken och lat den svalna i 30 sekunder. Tryck pa kanten av droppen med fingertoppen: om ytan skrynklas tydligt och droppen haller sin form har gelpunkten natts. Om den rinner fritt, fortsatt koka i 2-3 minuter och testa igen. Denna kalkylator simulerar testet visuellt och visar dig om ditt recepts proportioner kommer att klara tallrikstestet innan du ens borjar koka.',
    },
    {
      type: 'title',
      text: 'Felsokning: Varfor Sylt Misslyckas och Hur Man Fixar Det',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Rinnig sylt (stelnade inte efter avkylning):</strong> Den vanligaste orsaken ar otillracklig kokning - blandningen nadde aldrig 104-105°C. Koka om sylten, tillsatt 1-2 g citronsyra per kg frukt och testa med det kalla tallrikstestet. Alternativt, los upp 5 g pektinpulver i kallt vatten, vispa i den kokande sylten och koka i ytterligare 2 minuter.',
        '<strong>Gummiaktig eller for styv sylt:</strong> For mycket pektin tillsattes i forhallande till fruktvikten, eller sylten overkokades over 106°C, vilket bryter ner pektinnatverket till en tat, sprod struktur. For att radda, varm forsiktigt upp med 100-200 ml appeljuice eller vatten for att spada ut pektinkoncentrationen.',
        '<strong>Syneres (vatten lackage fran gelen):</strong> Detta tyder pa overdriven syra (pH under 2,8) eller socker over 68%, vilket far pektinnatverket att dra ihop sig och pressa ut vatten. Tillsatt en liten mangd bikarbonat (natriumvatekarbonat) for att hoja pH gradvis.',
        '<strong>Kristallisering (grynig konsistens):</strong> Sockerkoncentrationen oversteg losligheten, eller olosta sockerkristaller fungerade som kristallisationskarnor. Ror standigt under den sista kokningen och tillsatt 1 matsked majssirap eller glukos, vilket hammar kristallisering.',
        '<strong>Mogel pa ytan under forvaring:</strong> Sylten var underkokt (naddes inte steril temperatur), inneholl for lite socker (under 60% for HM-pektin), eller burkarna var inte ordentligt steriliserade. Anvand alltid steriliserade burkar och vattenbadsbehandla i 10 minuter.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
