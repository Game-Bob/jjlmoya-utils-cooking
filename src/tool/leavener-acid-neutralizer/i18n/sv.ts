import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Bikarbonat och Bakpulverkalkylator: Syraneutraliserare";
const description = "Beräkna den exakta fördelningen mellan bikarbonat och bakpulver i ditt recept. Neutralisera sura ingredienser som filmjölk och yoghurt, undvik metallisk bismak och uppnå perfekt resning varje gång.";
const faq = [
  {
    question: "Varför krävs syra när man ersätter bakpulver med bikarbonat?",
    answer: "Bikarbonat är en ren bas. Det behöver en syrakälla för att aktiveras och frigöra koldioxid. Utan tillräckligt med syra reagerar inte bikarbonatet fullt ut och lämnar en bitter, metallisk smak i bakverket."
  },
  {
    question: "Vad är skillnaden mellan bikarbonat och bakpulver?",
    answer: "Bikarbonat är 100% natriumbikarbonat, en bas. Bakpulver är ett komplett jäsmedel som innehåller bikarbonat plus ett torrt syramedel (som vinsten) och stärkelse. Bakpulver är självneutraliserande."
  },
  {
    question: "Hur mycket bakpulver motsvarar 1 tesked bikarbonat?",
    answer: "Bikarbonat är ungefär 3-4 gånger starkare än bakpulver. För att ersätta 1 tesked bikarbonat behöver du cirka 3-4 teskedar bakpulver. Denna ersättning tillför dock även sura salter som kan påverka smaken, så det är bäst att använda vår kalkylator för exakta omvandlingar."
  },
  {
    question: "Varför smakar min kaka tvål eller metall?",
    answer: "En tvålig eller metallisk bismak är det klassiska tecknet på oreagerat bikarbonat. När det inte finns tillräckligt med syra i smeten för att helt neutralisera natriumbikarbonatet, finns den alkaliska resten kvar efter bakningen och ger den obehagliga kemiska smaken. Använd vår kalkylator för att säkerställa fullständig neutralisering."
  },
  {
    question: "Kan jag använda alkaliserat kakaopulver som syra?",
    answer: "Nej. Alkaliserat kakaopulver (Dutch-process) har behandlats med ett alkaliserande ämne för att minska dess naturliga syrlighet (pH ~7-8). Endast naturligt kakaopulver (pH ~5-6) är surt och kommer att neutralisera bikarbonat."
  },
  {
    question: "Hur påverkar bikarbonat bryningen av bakverk?",
    answer: "Bikarbonat höjer pH-värdet i smeten och gör den mer alkalisk. Ett högre pH accelererar Maillard-reaktionen, vilket ger mörkare skorpa och djupare smaker i kakor och mjuka kakor."
  }
];

const howTo = [
  {
    name: "Ange mjölvikt",
    text: "Ange den totala vikten av mjöl i ditt recept i gram eller uns för att beräkna den totalt nödvändiga jäskraften."
  },
  {
    name: "Lägg till sura ingredienser",
    text: "Välj receptets sura ingredienser (som filmjölk, yoghurt eller citronsaft) und ange deras vikter."
  },
  {
    name: "Kontrollera pH-balansen",
    text: "Observera den virtuella pH-balansskalan. En balanserad skala indikerar optimal neutralisering utan metalliska bismaker."
  },
  {
    name: "Mät upp jäsmedlen",
    text: "Avläs den rekommenderade mängden bikarbonat för neutralisering och nödvändig bakpulverboost för att uppnå målet för resningen."
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
  slug: 'syraneutraliserare-bakpulver',
  title: 'Syraneutraliserare för Bakpulver',
  description: 'Beräkna den exakta fördelningen mellan bikarbonat och bakpulver i ditt recept. Neutralisera sura ingredienser som filmjölk och yoghurt, undvik metallisk bismak och uppnå perfekt resning varje gång.',
  faqTitle: 'Vanliga Frågor',
  ui: {
    title: "Syraneutraliserare för Bakpulver",
    subtitle: "Exakt stökiometri för perfekt resning och smak i bakverk",
    flourLabel: "Mjölvikt",
    addAcidLabel: "Lägg till Sur Ingrédient",
    weightLabel: "Vikt",
    removeButton: "Ta Bort",
    bakingSodaNeeded: "Neutraliserat Bikarbonat",
    requiredBakingPowder: "Mål för Jäsning",
    providedBakingPowderEquivalent: "Jäskraft från Bikarbonat",
    boosterBakingPowder: "Extra Bakpulverboost",
    resultsTitle: "Beräknade Jäsmedel",
    statusBalanced: "Balanserad",
    statusAcidic: "Överskott av Syra",
    statusAlkaline: "Överskott av Bas",
    gramsUnit: "g",
    ouncesUnit: "oz",
    teaspoonsUnit: "tsk",
    scaleBalanceTitle: "Virtuell pH-balans",
    acidListTitle: "Sura Ingredienser",
    unitLabel: "Matsystem",
    metricUnit: "Metriskt (g)",
    imperialUnit: "Imperialt (oz)",
    acid_buttermilk: "Filmjölk",
    acid_yogurt: "Yoghurt",
    acid_sour_cream: "Gräddfil",
    acid_honey: "Honung",
    acid_molasses: "Melass",
    acid_cocoa: "Naturligt Kakaopulver",
    acid_lemon_juice: "Citronsaft",
    acid_vinegar: "Vinäger",
    stoichiometryBadge: "pH-stökiometri",
    simulateSodaLabel: "Simulera tillsatt bikarbonat",
    autoBalanceBtn: "Auto-balansera",
    sodaAddedLabel: "Tillsatt bikarbonat"
  },
  faq,
  howTo,
  seo: [
    {
      type: 'summary',
      title: 'Nyckelinsikter för Perfekt Jäsning',
      items: [
        'Bikarbonat behöver syra för att aktiveras; utan det kommer bakverket att smaka tvål och metall',
        'Bakpulver är självneutraliserande och ger extra jaskraft som boost',
        'Standardmålet är 4% av mjölvikten i bakpulverekvivalenter för rätt resning',
        'Använd neutraliseringstabellen nedan för att matcha dina sura ingredienser med rätt mängd bikarbonat'
      ]
    },
    {
      type: 'title',
      text: 'Kemin Bakom Kemiska Jäsmedel vid Bakning',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Kemisk jäsning bygger på <strong>syra-basneutraliseringsreaktioner</strong> för att producera koldioxid (CO2), som fastnar i smetens struktur och får den att resa sig under bakningen. Att uppnå rätt förhållande mellan natriumbikarbonat (bikarbonat) und sura ingredienser är avgörande. <strong>För mycket bikarbonat</strong> leder till oreagerade alkaliska rester, vilket ger en tvålig, metallisk smak och gul missfärgning. <strong>För mycket syra</strong> kan resultera i ett tungt, platt bakverk med dålig volym.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '3-4x',
          label: 'Bikarbonat starkare än bakpulver',
          icon: 'mdi:flash'
        },
        {
          value: '4%',
          label: 'Mål för jäsning (% av mjölvikt)',
          icon: 'mdi:target'
        },
        {
          value: '1/4 tsk',
          label: 'Bikarbonat per 120g filmjölk/yoghurt',
          icon: 'mdi:spoon-sugar'
        },
        {
          value: '0.0125',
          label: 'Neutraliseringsförhållande (mjölksyror)',
          icon: 'mdi:scale-balance'
        }
      ]
    },
    {
      type: 'title',
      text: 'Bikarbonat vs. Bakpulver: Den Kompletta Jämförelsen',
      level: 3
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Bikarbonat',
          icon: 'mdi:flask-outline',
          description: 'Rent natriumbikarbonat (NaHCO3). En stark alkalisk bas som kräver extern syra för att aktiveras och producera CO2.',
          points: [
            '3-4x starkare än bakpulver',
            'Behöver syra (filmjölk, yoghurt, citronsaft) för att reagera',
            'Överskott orsakar tvålig, metallisk smak och gult inkråm',
            'Höjer pH; förstärker Maillard-bryning i kakor',
            'Enkelverkande: frigör CO2 omedelbart vid blandning'
          ]
        },
        {
          title: 'Bakpulver',
          icon: 'mdi:flask-round-bottom-outline',
          description: 'Ett komplett jässystem som innehåller bikarbonat + torra syrasalter + stärkelse. Självneutraliserande och tillförlitligt.',
          highlight: true,
          points: [
            'Innehåller sin egen syra (monokalciumfosfat, SAP)',
            'Dubbelverkande: frigör CO2 vid blandning OCH vid uppvärmning',
            'Ingen metallisk bismak; redan pH-balanserat',
            'Svagare per gram; använd 3-4x mer för att matcha bikarbonat',
            'Bäst som boost när enbart bikarbonat inte kan lyfta allt mjöl'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Sur Ingrédient', 'Standardvikt', 'Neutraliserat Bikarbonat', 'Neutraliseringsförhållande'],
      rows: [
        ['Filmjölk / Yoghurt / Gräddfil', '120g (1/2 dl)', '1.5g (1/4 tsk)', '0.0125'],
        ['Citronsaft / Vinäger', '15g (1 msk)', '1.5g (1/4 tsk)', '0.1000'],
        ['Naturligt Kakaopulver', '80g (1 dl)', '3.0g (1/2 tsk)', '0.0375'],
        ['Honung', '340g (1 dl)', '3.0g (1/2 tsk)', '0.0088'],
        ['Melass', '328g (1 dl)', '3.0g (1/2 tsk)', '0.0091']
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Felsökning: Är Din Jäsning i Obalans?',
      badge: 'Snabbkoll',
      html: '<strong>Om din kaka kollapsade:</strong> För mycket syra eller för lite jäsning totalt sett; CO2 släppte ut innan strukturen satte sig.<br/><br/><strong>Om din kaka är tung och platt:</strong> För mycket syra utan tillräckligt med bikarbonat för att neutralisera, eller otillräcklig total jäskraft för mjölvikten.<br/><br/><strong>Om din kaka smakar tvål eller metall:</strong> Överskott av oreagerat bikarbonat; lägg till mer sura ingredienser eller minska bikarbonatet.<br/><br/><strong>Om din kaka har gula fläckar:</strong> Klassiskt tecken på oupplöst, oreagerat bikarbonat i klumpar; sikta bikarbonatet med mjölet nästa gång.'
    },
    {
      type: 'title',
      text: 'Så Balanserar du Jäsmedel och Undviker Metallisk Smak',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'För att uppnå optimal smak och resning, följ denna process: <strong>Först</strong>, bestäm mängden bikarbonat som behövs för att helt neutralisera de sura komponenterna i smeten med hjälp av tabellen ovan. <strong>Sedan</strong>, omvandla bikarbonatet till bakpulverekvivalent (multiplicera med 4) och jämför med den totala jäskraft som behövs för ditt mjöl; vanligtvis <strong>4% av mjölvikten</strong> i bakpulverekvivalent. <strong>Om det finns ett underskott</strong>, lägg till den återstående jäskraften i form av neutralt bakpulver som boost. Vår kalkylator gör allt detta automatiskt.'
    },
    {
      type: 'list',
      icon: 'mdi:alert-circle-outline',
      items: [
        'Ersätt aldrig bikarbonat 1:1 med bakpulver; bikarbonat är 3-4x starkare och behöver syra',
        'Sikta alltid bikarbonat med de torra ingredienserna för att undvika beska klumpar',
        'Alkaliserat kakao är INTE surt; använd naturligt kakaopulver om du förlitar dig på kakao som syrakälla',
        'Honung och melass är svagt sura; de behöver mycket mindre bikarbonat per gram än citronsaft',
        'Arbeta snabbt efter blandning: kemisk jäsning börjar reagera omedelbart vid kontakt med vätska'
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Neutraliseringsförhållande',
          definition: 'Andelen bikarbonat som behövs för att helt neutralisera en given vikt av en sur ingrediens. Lägre värden betyder att ingrediensen är mindre sur per gram.'
        },
        {
          term: 'Jäskraft',
          definition: 'Den totala mängden CO2 som ett jäsmedel kan producera. Mäts i bakpulverekvivalenter, där 4% av mjölvikten är standardmålet för mjuka kakor och muffins.'
        },
        {
          term: 'Dubbelverkande Bakpulver',
          definition: 'Bakpulver som frigör CO2 i två steg: först vid blandning med vätska i rumstemperatur, och sedan vid exponering för ugnsärme. Ger en mer tillförlitlig resning.'
        },
        {
          term: 'Maillardreaktion',
          definition: 'En kemisk reaktion mellan aminosyror och reducerande sockerarter som bryner mat och skapar komplexa smaker. Förstärks av högre pH från överskott av bikarbonat; önskvärd i kakor, icke-önskvärd i delikata mjuka kakor.'
        },
        {
          term: 'pH-balans',
          definition: 'Måttet på surhet eller alkalinitet i smeten. Ett neutralt pH (cirka 7) innebär att allt bikarbonat har reagerat med all syra. Något alkaliskt gynnar bryning; surt gynnar mörhet.'
        }
      ]
    },
    {
      type: 'tip',
      html: '<strong>Bryning och pH:</strong> Medans fullständig neutralisering är nyckeln till smak, kan en något alkalisk smet (på grund av ett litet överskott av bikarbonat) vara önskvärd i chokladkakor och cookies. Ett högre pH förstärker Maillardbryningen, vilket ger mörkare färger, krispigare kanter och djupare karamelltoner. För delikata vaniljkakor, sikta på exakt neutralisering för att bevara en ren och frisk smak.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
