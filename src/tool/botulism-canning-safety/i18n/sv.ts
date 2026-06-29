import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Botulism Konservering Säkerhetskontroll Termisk Dödskalkylator";
const description = "Beräkna termisk sporminskning och F0 steriliseringseffekt för Clostridium botulinum. Bedöm områden för säker konservering av låg- och högsyrig mat.";
const faq = [
  {
    question: "Varför är Clostridium botulinum ett stort problem vid hemkonservering?",
    answer: "Clostridium botulinum är en anaerob, sporbildande bakterie som producerar botulinumtoxin, ett av de mest dödliga biologiska ämnen som är känt. Sporerna är extremt värmetåliga och kan överleva i anaeroba miljöer inuti förslutna burkar om temperaturen är otillräcklig."
  },
  {
    question: "Vilken kritisk betydelse har pH 4.6 vid livsmedelskonservering?",
    answer: "Livsmedel med ett pH under 4.6 klassificeras som syriga. I dessa miljöer kan botulinussporer inte gro eller producera toxiner. För livsmedel med pH 4.6 eller högre är tryckkonservering obligatorisk för att nå temperaturer över 116 grader Celsius för att förstöra sporerna."
  },
  {
    question: "Vad är F0 steriliseringsvärdet?",
    answer: "F0-värdet mäter den ekvivalenta steriliseringstiden vid 121.11 degrees Celsius. En standardprocess för lågsyriga livsmedel kräver ett F0-värde på 3.0 minuter eller högre, vilket motsvarar en tolvfaldig decimalminskning av sporpopulationen."
  },
  {
    question: "Varför kan jag inte använda vattenbad för lågsyrig mat?",
    answer: "Konservering i vattenbad når bara kokpunkten (100 grader Celsius). Denna temperatur är otillräcklig för att döda värmetåliga sporer av Clostridium botulinum i lågsyrig mat. Sporerna överlever och producerar toxin vid rumstemperatur."
  }
];

const howTo = [
  {
    name: "Ange livsmedlets syranivå",
    text: "Bestäm och mata in pH-värdet för dina ingredienser. Om pH-värdet är 4.6 eller högre är livsmedlet lågsyrigt."
  },
  {
    name: "Välj konserveringsmetod",
    text: "Välj mellan vattenbadskonservering eller tryckkonservering beroende på din utrustning."
  },
  {
    name: "Ange temperatur och tid",
    text: "Mata in konserveringstemperaturen och tiden i minuter som burkarna håller den temperaturen."
  },
  {
    name: "Utvärdera säkerhetsdiagnostik",
    text: "Kontrollera det resulterande F0-värdet, decimal sporminskning och säkerhetszonindikatorn för att bekräfta överensstämmelse."
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
  title: 'Botulism Konservering Säkerhetskontroll',
  description: 'Beräkna termisk sporminskning och F0 steriliseringseffekt för Clostridium botulinum. Bedöm områden för säker konservering av låg- och högsyrig mat.',
  faqTitle: 'Vanliga Frågor',
  ui: {
    title: "Konserveringsautoklavövervakning",
    subtitle: "Termisk döddiagnostik och botulism säkerhetsutvärderare",
    methodLabel: "Konserveringsmetod",
    waterBath: "Vattenbadskonservering",
    pressureCanner: "Tryckkonservering",
    tempLabel: "Konserveringstemperatur",
    timeLabel: "Processingstid",
    phLabel: "Livsmedels pH",
    f0Label: "F0 Effektvärde",
    dLabel: "Beräknat D Värde",
    sporesLabel: "Sporpopulation",
    statusSafe: "Sterilisering klar",
    statusMarginal: "Marginell sterilisering",
    statusUnsafe: "Hög botulismrisk",
    statusSafeDesc: "Termisk effekt överstiger målet F0 på 3.0 minuter. Sporer är helt deaktiverade.",
    statusMarginalDesc: "Processen når partiell deaktivering men ligger under 12D säkerhetsstandarden. Justera tid eller temperatur.",
    statusUnsafeDesc: "Processen misslyckas med att deaktivera Clostridium botulinum. Lågsyrig mat i vattenbad förblir farlig.",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "min",
    logReductionLabel: "Decimal minskning",
    dValueUnit: "minuter",
    indicatorSectionTitle: "Diagnostiska mätare",
    visualizerSectionTitle: "Sporminskning",
    f0Tooltip: "Ekvivalent steriliseringstid i minuter vid 121.11°C. Säkert gränsvärde är 3.0 eller högre.",
    dTooltip: "Decimal minskningstid: tid i minuter som krävs för att förstöra 90% av sporerna vid aktuell temperatur.",
    logReductionTooltip: "Antal decimala (10-faldiga) minskningar. En 12D minskning är säkerhetsstandarden.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Vetenskapliga Mekanismer för Termisk Beredning och Spordeaktiveringskinetik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Termisk beredning vid konservering säkerställer kommersiell sterilitet genom att förstöra patogena och fördärvande mikroorganismer. Huvudfokus för säkerhetsriktlinjer vid konservering av lågsyrig mat är Clostridium botulinum. Botulinussporer är mycket värmetåliga jämfört med vegetativa celler. För att deaktivera dessa sporer krävs en termisk dödtidsprocess som tillämpar hög temperatur under en beräknad tid. Det matematiska sambandet mellan temperatur och deaktiveringshastighet uttrycks genom decimal minskningstid (D-värde) och temperaturberoendefaktorn (z-värde).',
    },
    {
      type: 'title',
      text: 'Livsmedelsklassificering och den Kritiska pH 4.6 Säkerhetsgränsen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ett pH-värde på 4.6 är skiljelinjen för konserveringssäkerhet. Syriga livsmedel under pH 4.6 hindrar naturligt groning och toxinproduktion av botulinussporer. För dessa livsmedel räcker beredning vid 100 grader Celsius i ett kokande vattenbad. Dock måste lågsyriga livsmedel över pH 4.6 genomgå tryckkonservering för att höja ångtemperaturen och nå fullständig termisk sporförstöring. Tabellen nedan visar klassificeringar och konserveringsmetoder för vanliga ingredienser:',
    },
    {
      type: 'table',
      headers: ['Livsmedelsgrupp', 'pH-intervall', 'Krävd konserveringsmetod', 'Vanliga exempel'],
      rows: [
        ['Högsyrigt', 'Under 4.0', 'Vattenbadskonservering', 'Äpplen, Bär, Citrus, Persikor, Vinäger Inläggningar'],
        ['Syrad eller medelsyrigt', '4.0 till 4.6', 'Vattenbad med syrajustering', 'Tomater, Fikon, Päron'],
        ['Lågsyrigt', '4.6 och över', 'Obligatorisk tryckkonservering', 'Kött, Skaldjur, Bönor, Majs, Potatis, Soppor'],
      ],
    },
    {
      type: 'title',
      text: 'Höjdjusteringar och Kokpunkt Säkerhetskorrigeringar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'När höjden ökar minskar atmosfärstrycket, vilket gör att vattnets kokpunkt sjunker under 100 grader Celsius. Vid vattenbadskonservering ökar detta lägre temperatur D-värdet för sporerna, vilket kräver längre beredningstid. Vid tryckkonservering måste manometer- eller viktventilsinställningar ökas för att upprätthålla den interna målsteriliseringstemperaturen. Nedan finns referensguide för kokpunkter och krävda tryckkonserveringsjusteringar:',
    },
    {
      type: 'table',
      headers: ['Höjdintervall', 'Vattens kokpunkt', 'Krävd manometertryck', 'Krävd viktventilstryck'],
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
      text: 'Varför 12D Sporminskningskonceptet Förhindrar Botulism',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bakterieförstöring genom värme är logaritmisk. D-värdet representerar den tid som krävs vid en specifik temperatur för att förstöra 90% av sporpopulationen, vilket motsvarar en decimal logminskning. Referensstandarden för Clostridium botulinum är ett D-värde på 0.21 minuter vid 121.11 grader Celsius. För att nå höga säkerhetsmarginaler kräver kommersiella standarder en tolvfaldig decimal minskningsprocess (12D), vilket innebär att sporpopulationen minskas med tolv faktorer av tio. Detta ger ett mål F0-värde på 3.0 minuter, vilket garanterar säkerhet i lågsyriga livsmedel.',
    },
    {
      type: 'title',
      text: 'Praktiska Riktlinjer för Hemkonservering och Säkerhetstips',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Syra alltid tomater med citronsaft eller citronsyra innan vattenbadskeredning eftersom deras naturliga pH fluktuerar nära den kritiska gränsen 4.6.',
        'Förkorta aldrig beredningstider eller sänk temperaturer. Termisk dödskinetik är logaritmisk och mindre justeringar kan göra att sporer överlever.',
        'Säkerställ att manometrar på tryckkonserveringsutrustning testas årligen för noggrannhet, eftersom felaktiga tryckavläsningar direkt äventyrar interna steriliseringstemperaturer.',
        'Kompensera för höjdskillnader genom att justera beredningstider i vattenbad eller öka PSI-inställningar på tryckkonserveringsutrustning.',
        'Undvik att konservera blandade recept som innehåller lågsyriga ingredienser som kött eller bönor i ett vattenbad, även om hela receptet innehåller syra.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
