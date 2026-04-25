import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Banandiagnos och Konservering: Vetenskaplig Guide";
const description = "Analysera mognadsstatusen för dina bananer med vetenskaplig precision. Lär dig konserveringstekniker, biokemin bakom eten och näringsoptimering.";
const faq = [
  {
    question: 'Varför blir bananer svarta i kylen?',
    answer: 'Kylan bryter ner skalets cellväggar, vilket frigör enzymer som oxiderar fenoler och skapar svarta polyfenoler. Insidan brukar dock hålla sig fast och söt längre än utanför kylen.',
  },
  {
    question: 'Hur kan jag mogna en banan snabbt?',
    answer: 'Lägg dem i en stängd papperspåse med ett äpple eller en tomat. Dessa avger etengas som påskyndar mognaden. Om du har väldigt bråttom kan du lägga dem några minuter i ugnen på låg temperatur.',
  },
  {
    question: 'Är det säkert att äta bananer med bruna fläckar?',
    answer: 'Ja, absolut. Fläckarna tyder faktiskt på att stärkelsen har omvandlats till socker, vilket gör dem sötare och mer lättsmälta. Släng dem bara om de har mögel, luktar illa eller är extremt mjuka.',
  },
  {
    question: 'Vad är eten?',
    answer: 'Det är ett växthormon i gasform som reglerar tillväxt och mognad. Bananen är en klimakterisk frukt, vilket innebär att den fortsätter att producera eten och mogna efter att den har skördats.',
  },
];
const howTo = [
  {
    name: 'Observera färgen',
    text: 'Granska noga färgen på skalet, från grönt till mörkbrunt, för att avgöra den aktuella mognadsstatusen.',
  },
  {
    name: 'Använd simulatorn',
    text: 'Dra i mognadsindikatorn för att se exakta prognoser om när nästa steg uppnås.',
  },
  {
    name: 'Justera förhållanden',
    text: 'Ändra temperatur och luftfuktighet för att se hur de påverkar mognadsfarten.',
  },
  {
    name: 'Tillämpa konservering',
    text: 'Följ specifika rekommendationer för konservering och påskyndning baserat på aktuell status.',
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
  slug: 'banandiagnos',
  title: 'Banandiagnos och Konservering: Vetenskaplig Guide',
  description: 'Analysera mognadsstatusen för dina bananer med vetenskaplig precision. Lär dig konserveringstekniker, biokemin bakom eten och näringsoptimering.',
  faqTitle: 'Vanliga frågor',
  ui: {
    ripesnessLabel: 'Mognadsstatus',
    nextStageLabel: 'Nästa steg om',
    daysUnit: 'Dagar',
    tempLabel: 'Temperatur',
    humidityLabel: 'Luftfuktighet',
    partnerToggleTitle: 'Klimakteriskt sällskap',
    partnerToggleSubtitle: 'Extern eteneffekt',
    conservationTitle: 'Konservering',
    accelerationTitle: 'Påskyndning',
    stage1Name: 'Smaragdgrön',
    stage1Desc: 'Maximalt innehåll av resistent stärkelse. Full fasthet.',
    stage1Conservation: 'Rumstemperatur (18-20°C). Undvik kyla (<12°C).',
    stage1Acceleration: 'Papperspåse med ett äpple eller en mogen tomat.',
    stage2Name: 'Strålande gul',
    stage2Desc: 'Perfekt balans mellan fasthet och begynnande sötma.',
    stage2Conservation: 'Sval plats, separera från klasen för att bromsa etenet.',
    stage2Acceleration: 'Ha kvar i klasen och linda in i plast.',
    stage3Name: 'Sött fläckig',
    stage3Desc: 'Topp i antioxidanter. Intensiv sötma och krämig textur.',
    stage3Conservation: 'Kyl för att bevara fruktköttet (även om skalet mörkna).',
    stage3Acceleration: 'Mjuk värme (nära en värmekälla, inte direkt).',
    stage4Name: 'Kanelbrunt mogen',
    stage4Desc: 'Väldigt mjuk textur. Idealisk för sockerfri bakning.',
    stage4Conservation: 'Skala och frys in omedelbart.',
    stage4Acceleration: 'Har redan nått sitt maximum.',
    stage5Name: 'Övermogen / Fermenterad',
    stage5Desc: 'Avancerad nedbrytningsprocess.',
    stage5Conservation: 'Rekommenderas inte för direkt förtäring.',
    stage5Acceleration: 'N/A',
  },
  faq: [
    {
      question: 'Varför blir bananer svarta i kylen?',
      answer: 'Kylan bryter ned skalets cellväggar, vilket frigör enzymer som oxiderar fenoler och skapar svarta polyfenoler. Insidan brukar dock hålla sig fast och söt längre än utanför kylen.',
    },
    {
      question: 'Hur kan jag mogna en banan snabbt?',
      answer: 'Lägg dem i en stängd papperspåse med ett äpple eller en tomat. Dessa avger etengas som påskyndar mognaden. Om du har väldigt bråttom kan du lägga dem några minuter i ugnen på låg temperatur.',
    },
    {
      question: 'Är det säkert att äta bananer med bruna fläckar?',
      answer: 'Ja, absolut. Fläckarna tyder faktiskt på att stärkelsen har omvandlats till socker, vilket gör dem sötare och mer lättsmälta. Släng dem bara om de har mögel, luktar illa eller är extremt mjuka.',
    },
    {
      question: 'Vad är eten?',
      answer: 'Det är ett växthormon i gasform som reglerar tillväxt och mognad. Bananen är en klimakterisk frukt, vilket innebär att den fortsätter att producera eten och mogna efter att den har skördats.',
    },
  ],
  howTo: [
    {
      name: 'Observera färgen',
      text: 'Granska noga färgen på skalet, från grönt till mörkbrunt, för att avgöra den aktuella mognadsstatusen.',
    },
    {
      name: 'Använd simulatorn',
      text: 'Dra i mognadsindikatorn för att se exakta prognoser om när nästa steg uppnås.',
    },
    {
      name: 'Justera förhållanden',
      text: 'Ändra temperatur och luftfuktighet för att se hur de påverkar mognadsfarten.',
    },
    {
      name: 'Tillämpa konservering',
      text: 'Följ specifika rekommendationer för konservering och påskyndning baserat på aktuell status.',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Vetenskapen om mognad hos Musa × paradisiaca',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bananen är en av världens mest konsumerade frukter, men också en av de mest biologiskt missförstådda. Till skillnad från icke-klimakteriska frukter, som citrusfrukter eller druvor, är bananen en <strong>klimakterisk frukt</strong>. Det betyder att den fortsätter att mogna efter att den har skördats, genom att drastiskt öka sin cellandning och produktionen av ett grundläggande gasformigt växthormon: <strong>eten</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Ur en biokemisk synvinkel är mognaden en kaskad av enzymatiska händelser. Under denna process bryter enzymer som amylas ner komplexa kolhydrater (stärkelse) till enkla sockerarter (fruktos, glukos och sackaros). Denna förändring ändrar inte bara smaken och gör den sötare, utan modifierar också texturen genom att bryta ner pektinet i cellväggarna, vilket ger den där mjuka och krämiga konsistensen som kännetecknar den mogna bananen.',
    },
    {
      type: 'title',
      text: 'Etencykeln',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Eten fungerar som en biologisk strömbrytare. Så snart frukten upptäcker en liten koncentration aktiverar den generna som ansvarar för produktionen av ännu mer eten, vilket skapar en positiv återkopplingsloop. Det är därför en välmogen banan påskyndar mognaden för alla sina grannar i fruktskålen. För att sakta ner denna process är det avgörande att isolera exemplar som redan har bruna fläckar från de som fortfarande är gröna.',
    },
    {
      type: 'title',
      text: 'Myten om kylskåpet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Det finns en utbredd tro att bananer inte bör vara i kylen. Verkligheten är mer komplex: kyla (under 12°C) orsakar kylskador på skalets celler, vilket frigör enzymer som oxiderar fenoler och gör skalet svart. Detta påverkar dock bara det yttre utseendet. Om insidan redan har nått önskad mognad, kommer kylan nästan helt stoppa mjukgörandet av fruktköttet och bevara smaken och texturen i flera extra dagar.',
    },
    {
      type: 'title',
      text: 'Avancerade konserveringsstrategier',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Försegling av stjälken:</strong> Att linda in änden av klasen med plastfolie minskar drastiskt utsläppet av eten, vilket förlänger enhetens kommersiella hållbarhet med upp till 72 extra timmar.',
    },
    {
      type: 'paragraph',
      html: '<strong>Dynamisk upphängning:</strong> Att hänga upp bananer förhindrar tryckskador. Skadad vävnad frigör eten snabbare, vilket skapar härdar av påskyndad mognad som sprider sig till hela frukten.',
    },
    {
      type: 'paragraph',
      html: '<strong>Kryoterapi (Infrysning):</strong> För bananer i fas 4 (bruna) är infrysning det bästa alternativet. Att skala frukten innan infrysning förhindrar att fukt stängs in, vilket bevarar fiberkvaliteten.',
    },
    {
      type: 'title',
      text: 'Näringsmässiga förändringar per fas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Allt eftersom bananen mognar förändras dess näringsprofil radikalt, vilket gör det möjligt att använda den som ett specifikt kostverktyg beroende på konsumentens mål.',
    },
    {
      type: 'table',
      headers: ['Fas', 'Resistent stärkelse', 'Egenskaper', 'Främsta fördel'],
      rows: [
        ['Grön (1-2)', '~80%', 'Väldigt fast, maximalt stärkelseinnehåll', 'Tarmhälsa och glykemisk kontroll'],
        ['Gul (3)', '~5%', 'Balans mellan fasthet och sötma', 'Snabb energi och B-vitaminer'],
        ['Fläckig (4)', 'Minimal', 'Väldigt mjuk, högt sockerinnehåll', 'Maximal antioxidantpotential'],
        ['Brun/Övermogen (5)', 'Praktiskt taget noll', 'Väldigt mjuk textur, avancerad fermentering', 'Rekommenderas inte för förtäring'],
      ],
    },
    {
      type: 'title',
      text: 'Slutsats och praktisk tillämpning',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Minska matsvinn:</strong> En exakt diagnos av en banans status gör det möjligt att identifiera den optimala tidpunkten för konsumtion, vilket förhindrar att värdefulla frukter går förlorade.',
        '<strong>Optimera näringsfördelar:</strong> Från den resistenta stärkelsen i de gröna för tarmhälsan, till antioxidanterna i de fläckiga för maximal antioxidantpotential.',
        '<strong>Planera strategisk konsumtion:</strong> Anpassa användningen av bananen efter dina hälsomål: glykemisk kontroll, snabb energi, matsmältning eller antioxidanter.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Nedbrytningsvarning:</strong> Externa faktorer som en relativ luftfuktighet över 85 % eller temperaturer över 25°C kan påskynda nedbrytningen drastiskt, vilket gör att bananen går från optimal till oätlig på bara några timmar. Denna simulator hjälper dig att förutse dessa förändringar och planera strategiskt.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
