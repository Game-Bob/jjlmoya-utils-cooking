import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Sorbet Brixkalkylator: Sockertillfruktförhållande & fryspunktkontroll för perfekt krämighet';
const description = 'Ställ in den exakta balansen mellan socker, fruktpuré och vatten för krämig sorbet varje gång. Beräkna Brix, PAC-fryspunktnedsättning och åtgärda isig eller soppig textur med exakta mätningar.';

const faq = [
  {
    question: 'Vad är Brix och varför spelar det roll i sorbet?',
    answer: 'Brix (°Bx) mäter procentandelen lösta ämnen  -  främst sockerarter  -  i en vätskelösning. I sorbeter är en Brix-nivå mellan 25% och 30% (idealt 28%) avgörande för rätt textur. Under 25% fryser sorbeten till ett stenhårt isblock eftersom det inte finns tillräckligt med socker för att störa iskristallbildningen. Över 30% sjunker fryspunkten så lågt att sorbeten förblir soppig och aldrig stelnar helt i en vanlig frys.',
  },
  {
    question: 'Hur beräknar jag rätt mängd socker för mitt sorbetrecept?',
    answer: 'Börja med att väga din fruktpuré och mäta dess naturliga Brix med en refraktometer (eller välj ett förinställt värde). Ange dessa i kalkylatorn tillsammans med önskad satsstorlek och mål-Brix (standard 28%). Kalkylatorn bestämmer hur mycket sackaros och vatten du behöver tillsätta för att få den totala blandningen inom det optimala 25-30% Brix-intervallet. Den tar också hänsyn till fryspunktnedsättningen (PAC) så att du kan byta in dextros om sorbeten annars skulle bli för hård.',
  },
  {
    question: 'Varför blir min hemmagjorda sorbet alltid för hård eller isig?',
    answer: 'En isig, stenhård sorbet betyder nästan alltid att den totala sockerkoncentrationen är för låg (under 25% Brix). Vattnet i frukten fryser till stora iskristaller istället för att förbli delvis flytande. Lösningen: tillsätt mer sackaros för att höja Brix, eller ersätt en del sackaros med dextros  -  dextros har nästan dubbel fryspunktnedsättande effekt (PAC 190 mot 100) och är 30% mindre sött, så du kan sänka fryspunkten utan att göra sorbeten sliskig.',
  },
  {
    question: 'Vad är skillnaden mellan att använda sackaros och dextros i sorbet?',
    answer: 'Sackaros (bordssocker) är standardsötningsmedlet med PAC 100 och POD 100. Dextros (glukospulver) har PAC 190  -  nästan dubbel fryspunktnedsättning  -  men bara 70% av sötman (POD 70). Detta innebär att dextros mjukar upp sorbet långt mer effektivt per gram utan att översöta. Använd dextros när din frukt redan är naturligt söt (t.ex. mango, banan) och du behöver mer fryspunktnedsättande effekt utan att tillsätta mer sötma.',
  },
  {
    question: 'Hur påverkar fruktens naturliga socker beräkningen?',
    answer: 'Olika frukter har vitt skilda naturliga sockernivåer: citroner och lime ligger runt 2% Brix, jordgubbar cirka 8%, mango och vindruvor 14-18%, och bananer upp till 22%. Kalkylatorn tar hänsyn till din frukts naturliga Brix så att du inte av misstag överskrider eller underskrider den totala sockerkoncentrationen. Det är därför det rekommenderas att använda en refraktometer för att mäta din faktiska frukt  -  säsongsvariationer kan förskjuta Brix med 3-4 enheter.',
  },
];

const howTo = [
  {
    name: 'Väg din fruktpuré',
    text: 'Mät den exakta vikten av din fruktpuré eller juice i gram.',
  },
  {
    name: 'Uppskatta eller mät fruktens Brix',
    text: 'Använd en refraktometer för att hitta den exakta Brix-halten i din frukt, eller välj ett typiskt värde från vår databas (t.ex. Mango: 14%, Jordgubbe: 8%).',
  },
  {
    name: 'Ange vikter i kalkylatorn',
    text: 'Ange din fruktvikt, fruktens Brix och mål-Brix-nivå (standard är 28%).',
  },
  {
    name: 'Granska rekommenderade sirapstillsatser',
    text: 'Kalkylatorn visar omedelbart rekommenderat socker och vatten att tillsätta för att nå 28% Brix-målet.',
  },
  {
    name: 'Justera sockertyper vid behov',
    text: 'Om blandningen saknar tillräcklig fryspunktnedsättning, introducera dextros istället för sackaros.',
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
  slug: 'brix-sorbet-densitetskalkylator',
  title: 'Brix sorbetdensitetskalkylator',
  description: 'Ställ in den exakta balansen mellan socker, fruktpuré och vatten för krämig sorbet varje gång. Åtgärda isig eller soppig textur med exakta Brix- och PAC-beräkningar.',
  faqTitle: 'Vanliga frågor',
  ui: {
    fruitWeightLabel: 'Fruktpuréns vikt',
    fruitBrixLabel: 'Fruktens Brix',
    sugarWeightLabel: 'Sackaros (socker) vikt',
    dextroseWeightLabel: 'Dextrosvikt',
    waterWeightLabel: 'Tillsatt vattenvikt',
    targetBrixLabel: 'Mål-Brix',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    brixUnit: '% Bx',
    totalBrixLabel: 'Total blandnings-Brix',
    totalWeightLabel: 'Total satsvikt',
    totalPACLabel: 'Fryspunktnedsättning (PAC)',
    statusLabel: 'Sorbetens texturprofil',
    statusSoft: 'För mjuk / Soppig',
    statusOptimal: 'Optimal krämighet',
    statusHard: 'För hård / Isig',
    recommendedTitle: 'Siraprekommendation (50% frukt)',
    recommendedSugarLabel: 'Behövd sackaros',
    recommendedWaterLabel: 'Behövt vatten',
    fruitPresetLabel: 'Fruktförval',
    presetCustom: 'Anpassad frukt',
    presetLemon: 'Citron / Lime (2% Bx)',
    presetStrawberry: 'Jordgubbe / Hallon (8% Bx)',
    presetOrange: 'Apelsin / Persika (10% Bx)',
    presetMango: 'Mango / Vindruva / Körsbär (14% Bx)',
    presetBanana: 'Banan (21% Bx)',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Vetenskapen bakom sorbetbalansering: Brix, PAC och lösta ämnen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att göra en professionell sorbet är en övning i livsmedelsvetenskap. Till skillnad från glass, som förlitar sig på mjölkfetter och proteiner för att skapa struktur och mjukhet, förlitar sig sorbet helt på lösta sockerarter och stabiliseringsmedel. Koncentrationen av dessa lösta sockerarter mäts i grader Brix (°Bx). En perfekt sorbetblandning kräver en sockerkoncentration på 25% till 30% Brix. Om sockerhalten är för låg fryser vattnet till stora, nålformade iskristaller, vilket ger ett grynigt, stenhårt block. Om den är för hög sänks fryspunkten för mycket, och sorbeten förblir en halvflytande sirap i vanliga hem- eller kommersiella frysar.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '28%',
          label: 'Idealt målBrix',
          icon: 'mdi:target',
        },
        {
          value: '25-30%',
          label: 'Säkert Brixintervall',
          icon: 'mdi:gauge',
        },
        {
          value: '≈50%',
          label: 'Optimal fruktandel',
          icon: 'mdi:fruit-grapes',
        },
        {
          value: 'PAC 100/190',
          label: 'Sackaros / Dextros',
          icon: 'mdi:molecule',
        },
      ],
    },
    {
      type: 'title',
      text: 'Förstå PAC: Faktorn för fryspunktnedsättning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC (Potere Anticongelante, eller fryspunktnedsättande förmåga) är ett mått som används av konditorer för att kvantifiera hur mycket en ingrediens sänker vattnets fryspunkt. Sackaros, eller vanligt bordssocker, är basreferensen med ett PACvärde på 100. Sackaros är dock mycket sött. Om du behöver tillsätta mer torrsubstans eller öka den fryspunktnedsättande kapaciteten utan att göra sorbeten kvalmigt söt, kan du ersätta en del av sackarosen med dextros. Dextros har ett PAC på 190, vilket gör det nästan dubbelt så effektivt som sackaros på att förhindra iskristallbildning, samtidigt som det bara är 70% så sött.',
    },
    {
      type: 'title',
      text: 'Sackaros vs Dextros: Välj rätt socker för sorbet',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Sackaros (Bordssocker)',
          icon: 'mdi:cube-outline',
          description: 'Standardsötningsmedlet och baslinjen för alla PAC- och POD-beräkningar. Ger ren sötma och kropp.',
          points: [
            'PACvärde: 100 (baslinje)',
            'PODvärde: 100 (full sötma)',
            'Bäst för: primär sötningsroll',
            'Ger kropp och standardtextur',
          ],
        },
        {
          title: 'Dextros (Glukospulver)',
          icon: 'mdi:grain',
          description: 'En monosackarid med nästan dubbel fryspunktnedsättande effekt och betydligt mindre sötma.',
          highlight: true,
          points: [
            'PACvärde: 190 (nästan 2� -  sackaros)',
            'PODvärde: 70 (30% mindre sött)',
            'Bäst för: mjuka upp hårda sorbeter',
            'Idealisk när frukten redan är mycket söt',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Referenstabell för typiska fruktBrixvärden',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Frukttyp', 'Genomsnittligt Brixvärde', 'Vatteninnehåll', 'Syrlighetsnivå'],
      rows: [
        ['Citron / Lime', '2% - 4% Bx', 'Mycket högt', 'Extremt hög'],
        ['Jordgubbe / Hallon', '7% - 9% Bx', 'Högt', 'Måttlig'],
        ['Apelsin / Persika', '9% - 11% Bx', 'Medelhögt', 'Låg-måttlig'],
        ['Äpple / Päron', '11% - 13% Bx', 'Medel', 'Låg'],
        ['Mango / Vindruva / Körsbär', '14% - 18% Bx', 'Medellågt', 'Mycket låg'],
        ['Banan', '20% - 22% Bx', 'Lågt', 'Försumbar'],
      ],
    },
    {
      type: 'title',
      text: 'Hur du kalibrerar din sorbetblandning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'För att balansera en sorbet, mät först vikten och sockerkoncentrationen i din fruktpuré. Att använda en refraktometer rekommenderas starkt för noggrannhet, eftersom fruktens sötma varierar med säsong och mognad. Om du inte har en refraktometer kan du uppskatta med hjälp av tabellen ovan. När du har dessa värden, mata in dem i vår kalkylator för att bestämma den exakta mängden sockerlag (vatten och socker) som behövs för att få den totala blandningen till målvärdet 28% Brix. För optimal textur, sikta på en fruktandel på cirka 50% av den totala satsvikten.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Varför är min sorbet isig eller för hård?',
      html: 'En sorbet som fryser stenhårt har nästan alltid <strong>för lite socker</strong> (Brix under 25%). Vattnet i fruktpurén kristalliseras till stora, vassa isflisor. Åtgärda detta genom att tillsätta mer sackaros för att höja total Brix, eller byt ut en del sackaros mot dextros för att öka PAC utan att översöta. Kontrollera också att din fruktandel inte är för hög  -  över 60% frukt lämnar otillräckligt utrymme för sockertorrsubstans.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Varför är min sorbet soppig eller fryser inte?',
      html: 'En sorbet som förblir mjuk eller soppliknande har <strong>för mycket socker</strong> (Brix över 30%). Fryspunkten har sänkts så mycket att din frys inte kan få blandningen att stelna. Minska den totala sockermängden, eller om frukten är naturligt mycket söt (t.ex. banan eller mango), använd proportionellt mindre tillsatt sackaros. Kontrollera din måltemperatur: hemfrysar går vid −18 °C; ett PAC som är lämpligt för −12 °Cservering blir för högt för standardfrysar.',
    },
    {
      type: 'tip',
      title: 'Mät Brix noggrant med en refraktometer',
      html: 'En digital eller optisk refraktometer är den enskilt bästa investeringen för konsekventa sorbeter. Fruktmognad varierar dramatiskt beroende på säsong, sort och ursprung  -  en jordgubbe i juni kan mäta 6 °Bx medan samma sort i augusti når 10 °Bx. Pressa en droppe puré på prismat, läs av värdet och mata in det i kalkylatorn. Att gissa enbart utifrån tabeller ger inkonsekventa resultat.',
    },
    {
      type: 'title',
      text: 'Steg för steg: Så använder du denna kalkylator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Väg din fruktpuré</strong>  -  Använd en digital våg för att mäta den exakta vikten av din silade fruktpuré eller juice i gram.',
        '<strong>Mät eller uppskatta fruktens Brix</strong>  -  Använd en refraktometer för precision, eller välj en förinställning från rullgardinsmenyn (Citron 2%, Jordgubbe 8%, Mango 14%, etc.).',
        '<strong>Ställ in ditt målBrix</strong>  -  Standard är 28%, den ideala sötpunkten. Justera mellan 25% och 30% beroende på dina preferenser.',
        '<strong>Granska siraprekommendationen</strong>  -  Kalkylatorn visar omedelbart hur mycket sackaros och vatten som ska tillsättas för att nå ditt mål.',
        '<strong>Kontrollera texturindikatorn</strong>  -  PACmätaren visar om sorbeten kommer att bli för hård, optimalt krämig eller för mjuk vid din frystemperatur.',
        '<strong>Justera med dextros vid behov</strong>  -  Om sorbeten förutspås bli hård men redan är tillräckligt söt, ersätt en del sackaros med dextros för att öka PAC utan att tillsätta sötma.',
      ],
    },
    {
      type: 'title',
      text: 'Viktiga sorbettermer',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Brix (°Bx)',
          definition: 'Procentandelen lösta ämnen (främst sockerarter) i en vätskelösning. I sorbeter är 25-30 °Bx målintervallet för idealisk textur och krämighet.',
        },
        {
          term: 'PAC (Potere Anticongelante)',
          definition: 'Fryspunktnedsättande förmåga  -  ett mått på hur mycket en ingrediens sänker vattnets fryspunkt. Sackaros har en baslinjePAC på 100; dextros är 190.',
        },
        {
          term: 'POD (Potere Dolcificante)',
          definition: 'Sötmansförmåga relativt sackaros (baslinje 100). Dextros har en POD på 70, vilket innebär att det är 30% mindre sött gramförgram än bordssocker.',
        },
        {
          term: 'Dextros',
          definition: 'En monosackarid (glukospulver) som används i sorbetrecept för att sänka fryspunkten utan att tillsätta överdriven sötma. PAC 190, POD 70.',
        },
        {
          term: 'Refraktometer',
          definition: 'Ett optiskt eller digitalt instrument som mäter Brixvärdet hos en vätska genom att avläsa hur ljus bryts (refrakteras) genom provet. Avgörande för sorbetkonsistens.',
        },
        {
          term: 'Sockerlag',
          definition: 'En 50/50 viktblandning av sackaros och vatten, uppvärmd tills den löses upp. Standardmetoden för att tillsätta socker till sorbetbaser.',
        },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
