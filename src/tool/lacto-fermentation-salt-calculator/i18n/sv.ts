import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Lacto Fermentering Saltkalkylator Bio Organisk Vetenskaplig Guide";
const description = "Beräkna exakta saltprocent för torrsaltning och våtbetning. Balansera bakteriepopulationer, förhindra mögel och bemästra livsmedelskonservering.";
const faq = [
  {
    question: "Varför är saltprocenten avgörande vid lacto-fermentering?",
    answer: "Salt undertrycker skadliga patogener och mögel genom osmotiskt tryck samtidigt som salttoleranta mjölksyrabakterier (LAB) kan frodas, fermentera sockerarter och producera mjölksyra."
  },
  {
    question: "Vad är skillnaden mellan torrsaltning och våtbetning?",
    answer: "Torrsaltning använder matens egen fukt för att lösa saltet (idealiskt för riven kål). Våtbetning tillsätter externt vatten och salt för att helt täcka hela eller bitar av grönsaker."
  },
  {
    question: "Kan jag använda klorerat kranvatten för fermentering?",
    answer: "Klor kan hämma bakterietillväxt. Det rekommenderas starkt att använda filtrerat eller källvatten för konsekventa fermenteringsresultat."
  },
  {
    question: "Är viktprocent bättre än volymmätningar?",
    answer: "Ja. Olika salttyper (kosher, havssalt, bordssalt) har varierande kristallstorlekar och densiteter. Att väga salt i gram garanterar exakt salthalt oavsett vilken salttyp som används."
  }
];

const howTo = [
  {
    name: "Välj fermenteringsläge",
    text: "Välj Torrt läge om du använder grönsakernas egna juicer, eller Vått läge om du tillsätter vatten för att täcka ingredienserna."
  },
  {
    name: "Väg ingredienserna",
    text: "Ange den exakta vikten av grönsakerna i gram. Om du använder våtbetning, ange även vattnets vikt."
  },
  {
    name: "Justera målsalthalten",
    text: "Skjut salthaltsreglaget. Sikta på 2,0% till 3,5% för allmän säkerhet och optimal tillväxt av mjölksyrabakterier."
  },
  {
    name: "Mät upp saltet",
    text: "Använd den digitala vågen för att mäta upp de exakta grammen salt som behövs. Tillsätt det i ditt fermenteringskärl."
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
  slug: 'lacto-fermentering-saltkalkylator',
  title: 'Lacto Fermentering Saltkalkylator',
  description: 'Beräkna exakta saltprocent för torrsaltning och våtbetning. Balansera bakteriepopulationer, förhindra mögel och bemästra livsmedelskonservering.',
  faqTitle: 'Vanliga Frågor',
  ui: {
    title: "Lacto Fermentering Saltkalkylator",
    subtitle: "Precis salthaltskontroll för bio organisk konservering",
    unitLabel: "Mätsystem",
    metricUnit: "Metriskt (g / gram)",
    imperialUnit: "Imperial (oz / uns)",
    modeLabel: "Fermenteringsläge",
    dryMode: "Torrsaltning",
    wetMode: "Våtbetning",
    vegWeightLabel: "Grönsaksvikt",
    waterWeightLabel: "Vattenvikt",
    salinityLabel: "Målsalthalt (%)",
    saltGramsLabel: "Erforderligt Salt",
    fineSaltLabel: "Fint Salt (teskedar)",
    kosherSaltLabel: "Kosher Salt (teskedar)",
    statusDanger: "Riskzon",
    statusDangerDesc: "En salthalt under 2,0% är otillräcklig för att blockera patogener och mögel. Öka salthalten för att garantera säkerheten.",
    statusOptimal: "Optimal LAB-zon",
    statusOptimalDesc: "Salthalt mellan 2,0% och 3,5% är idealisk för att mjölksyrabakterier (LAB) ska dominera och fermentera säkert.",
    statusInhibited: "Hämmad Zon",
    statusInhibitedDesc: "Salthalt över 3,5% saktar ner eller stoppar fermenteringen. Användbart för långtidskonservering men fördröjer bakteriell aktivitet.",
    petriTitle: "Mikrobiologisk Simulering",
    scaleTitle: "Digital Vågdisplay",
    disclaimer: "Obs! Att väga salt med en digital våg rekommenderas starkt framför volymetriska mätningar.",
    kosherLabel: "Kosher Salt",
    fineLabel: "Fint Salt",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Den Ultimata Guiden till Kemien Bakom Lacto-Fermentering och Salthaltskontroll',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lacto-fermentering är en dynamisk biokemisk process som drivs av mjölksyrabakterier (LAB) för att konservera grönsaker och frukt. Hela mekanismen bygger på att skapa en selektiv miljö där nyttiga bakterier frodas medan fördärvsorganismer, mögel och patogener undertrycks. Salthaltskontroll är den mest kritiska faktorn för att uppnå denna biologiska selektivitet.',
    },
    {
      type: 'title',
      text: 'Saltets Biokemiska Verkan vid Konservering',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'När salt tillsätts till råa grönsaker verkar det genom en fysikalisk process som kallas <strong>osmotiskt tryck</strong>. Den höga saltkoncentrationen utanför växtcellerna drar ut vatten och lösta sockerarter från växtvävnaderna genom osmos (plasmolys). Detta skapar en näringsrik lag som fungerar som perfekt bränsle för mjölksyrabakterierna. Samtidigt dehydrerar och lyserar det osmotiska trycket cellmembranen hos oönskade mögel, jästsvampar och patogena bakterier som <em>Escherichia coli</em> eller <em>Clostridium botulinum</em>, som inte tål förhöjda salthaltsnivåer.',
    },
    {
      type: 'title',
      text: 'Mikrobiologisk Succession: Hur LAB Koloniserar Ferment',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lacto-fermentering utförs inte av en enda bakterieart, utan av en följd av olika stammar som dominerar allt eftersom surheten ökar. I en typisk grönsaksfermentering sker cykeln i tre distinkta faser:',
    },
    {
      type: 'list',
      items: [
        '<strong>Fas 1 - Leuconostoc mesenteroides:</strong> Denna heterofermentativa bakterie initierar fermenteringen. Den är mycket aktiv i början och producerar mjölksyra, ättiksyra, koldioxid (som hjälper till att skapa en anaerob atmosfär) och etanol. Den sänker snabbt pH-värdet och förbereder mediet för efterföljande arter.',
        '<strong>Fas 2 - Lactobacillus plantarum och Lactobacillus brevis:</strong> När pH-värdet sjunker under 5,0 dör <em>L. mesenteroides</em> och syratoleranta homofermentativa bakterier som <em>L. plantarum</em> tar över. De fermenterar de återstående enkla sockerarterna uteslutande till mjölksyra, vilket sänker pH-värdet snabbt.',
        '<strong>Fas 3 - Pediococcus pentosaceus och andra:</strong> Vid långtidsfermentering fortsätter dessa mycket syratoleranta bakterier att producera syra tills sockerarterna är helt uttömda eller pH-värdet når cirka 3,5 till 3,8, vilket stabiliserar miljön på obestämd tid.'
      ],
    },
    {
      type: 'title',
      text: 'Skydd av Grönsakstextur: Pektinkopplingen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ett vanligt problem vid hemfermentering är lösaktighet. Växtceller hålls samman av en strukturell polysackarid som kallas pektin. Fördärvsmikroorganismer producerar enzymer som kallas <strong>pektinaser</strong>, som bryter ner pektin och förstör väggarna, vilket orsakar lösaktighet. Att upprätthålla en salthalt över 2,0% hämmar direkt aktiviteten hos dessa pektinasenzymer. Dessutom kan kalciumjoner som finns i oraffinerat havssalt eller tillsätts som kalciumklorid bilda tvärbindningar med pektinmolekyler och bilda kalciumpektat, vilket håller pickles och surkål knapriga.',
    },
    {
      type: 'title',
      text: 'Matematik för Torrsaltning vs Våtbetning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Att förstå formeln för att beräkna salt är avgörande. Vid torrsaltning (vanligt för rivna grönsaker som kål till surkål) beräknas saltprocenten enbart baserat på grönsakernas vikt. Vid våtbetning (används för hela eller större bitar av grönsaker som gurka eller morötter) måste saltprocenten beräknas baserat på <strong>totalvikten av både grönsaker och tillsatt vatten</strong>. Att beräkna salt baserat enbart på vattenvikten är ett vanligt misstag som späder ut den slutliga salthalten, eftersom vattnet inuti grönsakerna så småningom späder ut lagen.',
    },
    {
      type: 'table',
      headers: ['Salthaltsintervall', 'Mikrobiologiskt Tillstånd', 'Typiska Användningar', 'Säkerhetsnivå'],
      rows: [
        ['< 2,0%', 'Patogenrisk / Mögelfara', 'Rekommenderas inte', 'Låg'],
        ['2,0% - 2,5%', 'Optimal Mjölksyrabakterieblomning', 'Surkål, Kimchi, Inlagd gurka', 'Hög'],
        ['2,5% - 3,5%', 'Långsam fermentering / Hög texturbevarande', 'Starka såser, vitlök, rotfrukter', 'Hög'],
        ['> 3,5%', 'Bakteriehämning / Endast konservering', 'Oliver, långlagrad paprika, hög temperatur', 'Säker men inaktiv'],
      ],
    },
    {
      type: 'title',
      text: 'Varför Väga Salt är Bättre än Volymmätning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Att mäta salt i volym (matskedar eller teskedar) är notoriskt opålitligt. Bordssalt är fint och packas tätt, en tesked kan väga upp till 6 gram. Kosher salt har däremot stora, flagiga kristaller med luftfickor och väger så lite som 4 gram per tesked. Grovt havssalt ligger någonstans däremellan. Att använda volymmätningar kan lätt leda till att en fermentering blir farligt undersaltad eller helt avstannad på grund av översaltning. Att väga ingredienser i gram på en digital våg garanterar konsekventa, säkra och repeterbara resultat.',
    },
    {
      type: 'title',
      text: 'Felsökning och Bästa Praxis vid Lacto-Fermentering',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'För att säkerställa en framgångsrik fermentering, följ alltid dessa regler: Håll alla grönsaker helt nedsänkta under lagen för att förhindra aerob mögeltillväxt. Använd rena kärl och vikter. Fermentera vid sval rumstemperatur (18°C till 22°C) för att förhindra att fas 1-bakterier konkurreras ut. Om en vit film bildas på ytan, kontrollera om det är Kahm-jäst (en ofarlig vildjäst som bildas vid syreexponering) eller mögel. Mögel är luddigt och färgat; om det finns bör fermentet kasseras. Kahm-jäst kan skrapas bort, även om det kan påverka smaken.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
