import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Botulism Konservering Sakerthetskontroll Termisk Dodskalkylator";
const description = "Berakna termisk sportminskning och F0 steriliseringseffekt for Clostridium botulinum. Bedom omraden for saker konservering av lag- och hogsyrig mat.";
const faq = [
  {
    question: "Varfor ar Clostridium botulinum ett stort problem vid hemkonservering?",
    answer: "Clostridium botulinum ar en anaerob, sportbildande bakterie som producerar botulinumtoxin, ett av de mest dodliga biologiska amnen som ar kant. Sporerna ar extremt varmetraliga och kan overleva i anaeroba miljoer inuti forslutna burkar om temperaturen ar otillracklig."
  },
  {
    question: "Vilken kritisk betydelse har pH 4.6 vid livsmedelskonservering?",
    answer: "Livsmedel med ett pH under 4.6 klassificeras som syriga. I dessa miljoer kan botulinussporer inte gro eller producera toxiner. For livsmedel med pH 4.6 eller hogre ar tryckkonservering obligatorisk for att na temperaturer over 116 grader Celsius for att forstora sporerna."
  },
  {
    question: "Vad ar F0 steriliseringsvardet?",
    answer: "F0-vardet mater den ekvivalenta steriliseringstiden vid 121.11 grader Celsius. En standardprocess for lagsyriga livsmedel kraver ett F0-varde pa 3.0 minuter eller hogre, vilket motsvarar en tolvfaldig decimalminskning av sportpopulationen."
  },
  {
    question: "Varfar kan jag inte anvanda vattenbad for lagsyrig mat?",
    answer: "Konservering i vattenbad nar bara kokpunkten (100 grader Celsius). Denna temperatur ar otillracklig for att doda varmetraliga sporer av Clostridium botulinum i lagsyrig mat. Sporerna overlever och producerar toxin vid rumstemperatur."
  }
];

const howTo = [
  {
    name: "Ange livsmedlets syraniva",
    text: "Bestam och mata in pH-vardet for dina ingredienser. Om pH-vardet ar 4.6 eller hogre ar livsmedlet lagsyrigt."
  },
  {
    name: "Valj konserveringsmetod",
    text: "Valj mellan vattenbadskonservering eller tryckkonservering beroende pa din utrustning."
  },
  {
    name: "Ange temperatur och tid",
    text: "Mat in konserveringstemperaturen och tiden i minuter som burkarna haller den temperaturen."
  },
  {
    name: "Utvardera sakerhetsdiagnostik",
    text: "Kontrollera det resulterande F0-vardet, decimal sportminskning och sakerhetszonindikatorn for att bekrlfta overlensstammelse."
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
  slug: 'botulism-konservering-sakerhet',
  title: 'Botulism Konservering Sakerthetskontroll',
  description: 'Berakna termisk sportminskning och F0 steriliseringseffekt for Clostridium botulinum. Bedom omraden for saker konservering av lag- och hogsyrig mat.',
  faqTitle: 'Vanliga Fragor',
  ui: {
    title: "Konserveringsautoklavovervakning",
    subtitle: "Termisk doddiagnostik och botulism sakerhetsutvarderare",
    methodLabel: "Konserveringsmetod",
    waterBath: "Vattenbadskonservering",
    pressureCanner: "Tryckkonservering",
    tempLabel: "Konserveringstemperatur",
    timeLabel: "Processingstid",
    phLabel: "Livsmedels pH",
    f0Label: "F0 Effektvarde",
    dLabel: "Beraknat D Varde",
    sporesLabel: "Sportpopulation",
    statusSafe: "Sterilisering klar",
    statusMarginal: "Marginell sterilisering",
    statusUnsafe: "Hog botulismrisk",
    statusSafeDesc: "Termisk effekt overstiger malet F0 pa 3.0 minuter. Sporer ar helt deaktiverade.",
    statusMarginalDesc: "Processen nar partiell deaktivering men ligger under 12D sakerhetsstandarden. Justera tid eller temperatur.",
    statusUnsafeDesc: "Processen misslyckas med att deaktivera Clostridium botulinum. Lagsyrig mat i vattenbad forblir farlig.",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "min",
    logReductionLabel: "Decimal minskning",
    dValueUnit: "minuter",
    indicatorSectionTitle: "Diagnostiska matare",
    visualizerSectionTitle: "Sportminskning",
    f0Tooltip: "Ekvivalent steriliseringstid i minuter vid 121.11°C. Sakert gransvarde ar 3.0 eller hogre.",
    dTooltip: "Decimal minskningstid: tid i minuter som kravs for att forstora 90% av sporerna vid aktuell temperatur.",
    logReductionTooltip: "Antal decimala (10-faldiga) minskningar. En 12D minskning ar sakerhetsstandarden.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Vetenskapliga Mekanismer for Termisk Beredning och Sportdeaktiveringskinetik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Termisk beredning vid konservering sakerstaller kommersiell sterilitet genom att forstora patogena och fordarvarande mikroorganismer. Huvudfokus for sakerhetsriktlinjer vid konservering av lagsyrig mat ar Clostridium botulinum. Botulinussporer ar mycket varmetraliga jamfort med vegetativa celler. For att deaktivera dessa sporer kravs en termisk dodtidsprocess som tillampar hog temperatur under en beraknad tid. Det matematiska sambandet mellan temperatur och deaktiveringshastighet uttrycks genom decimal minskningstid (D-varde) och temperaturberoendefaktorn (z-varde).',
    },
    {
      type: 'title',
      text: 'Livsmedelsklassificering och den Kritiska pH 4.6 Sakerhetsgransen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ett pH-varde pa 4.6 ar skiljelinjen for konserveringssakerhet. Syriga livsmedel under pH 4.6 hindrar naturligt groning och toxinproduktion av botulinussporer. For dessa livsmedel racker beredning vid 100 grader Celsius i ett kokande vattenbad. Dock maste lagsyriga livsmedel over pH 4.6 genomga tryckkonservering for att hoga angtemperaturen och na fullstandig termisk sportforstoring. Tabellen nedan visar klassificeringar och konserveringsmetoder for vanliga ingredienser:',
    },
    {
      type: 'table',
      headers: ['Livsmedelsgrupp', 'pH-intervall', 'Kravd konserveringsmetod', 'Vanliga exempel'],
      rows: [
        ['Hogsyrigt', 'Under 4.0', 'Vattenbadskonservering', 'Applen, Bar, Citrus, Persikor, Vinager Inlaggningar'],
        ['Syrad eller medelsyrigt', '4.0 till 4.6', 'Vattenbad med syrajustering', 'Tomater, Fikon, Paron'],
        ['Lagsyrigt', '4.6 och over', 'Obligatorisk tryckkonservering', 'Kott, Skaldjur, Bonor, Majs, Potatis, Soppor'],
      ],
    },
    {
      type: 'title',
      text: 'Hojdjusteringar och Kokpunkt Sakerhetskorrigeringar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nar hojden okar minskar atmosfantrycket, vilket gor att vattnets kokpunkt sjunker under 100 grader Celsius. Vid vattenbadskonservering oker denna lagre temperatur D-vardet for sporerna, vilket kraver langre beredningstid. Vid tryckkonservering maste manometer- eller viktventilsinstallningar okas for att uppratthalla den interna malsteriliseringstemperaturen. Nedan finns referensguide for kokpunkter och kravda tryckkonserveringsjusteringar:',
    },
    {
      type: 'table',
      headers: ['Hojdintervall', 'Vattens kokpunkt', 'Kravd manometertryck', 'Kravd viktventilstryck'],
      rows: [
        ['0 till 300 meter', '100.0 °C', '11 PSI (121 °C)', '10 PSI (121 °C)'],
        ['300 till 600 meter', '99.0 °C', '11 PSI (121 °C)', '15 PSI (121 °C)'],
        ['600 till 900 meter', '98.0 °C', '12 PSI (121 °C)', '15 PSI (121 °C)'],
        ['900 till 1200 meter', '97.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1200 till 1500 meter', '96.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1500 till 2000 meter', '94.5 °C', '14 PSI (121 °C)', '15 PSI (121 °C)'],
      ],
    },
    {
      type: 'title',
      text: 'Varfor 12D Sportminskningskonceptet Forhindrar Botulism',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bakterieforstoring genom varme ar logaritmisk. D-vardet representerar den tid som kravs vid en specifik temperatur for att forstora 90% av sportpopulationen, vilket motsvarar en decimal logminskning. Referensstandarden for Clostridium botulinum ar ett D-varde pa 0.21 minuter vid 121.11 grader Celsius. For att na hoga sakerhetsmarginaler kraver kommersiella standarder en tolvfaldig decimal minskningsprocess (12D), vilket innebar att sportpopulationen minskas med tolv faktorer av tio. Detta ger ett mal F0-varde pa 3.0 minuter, vilket garanterar sakerhet i lagsyriga livsmedel.',
    },
    {
      type: 'title',
      text: 'Praktiska Riktlinjer for Hemkonservering och Sakerhetstips',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Syra alltid tomater med citronsaft eller citronsyra innan vattenbadskeredning eftersom deras naturliga pH fluktuerar nara den kritiska gransen 4.6.',
        'Forkorta aldrig beredningstider eller sank temperaturer. Termisk dodskinetik ar logaritmisk och mindre justeringar kan gora att sporer overlever.',
        'Sakerstall att manometrar pa tryckkonserveringsutrustning testas arligen for noggrannhet, eftersom felaktiga tryckavlasningar direkt aventyrar interna steriliseringstemperaturer.',
        'Kompensera for hojdskillnader genom att justera beredningstider i vattenbad eller oka PSI-installningar pa tryckkonserveringsutrustning.',
        'Undvik att konservera blandade recept som innehaller lagsyriga ingredienser som kott eller bonor i ett vattenbad, aven om hela receptet innehaller syra.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
