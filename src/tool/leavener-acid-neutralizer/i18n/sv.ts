import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Bikarbonat och Bakpulverkalkylator: Syraneutraliserare";
const description = "Berakna den exakta fordelningen mellan bikarbonat och bakpulver i ditt recept. Neutralisera sura ingredienser som filmjolk och yoghurt, undvik metallisk bismak och uppna perfekt resning varje gang.";
const faq = [
  {
    question: "Varfor kravs syra nar man ersatter bakpulver med bikarbonat?",
    answer: "Bikarbonat ar en ren bas. Det behover en syrakalla for att aktiveras och frigora koldioxid. Utan tillrackligt med syra reagerar inte bikarbonatet fullt ut och lamnar en bitter, metallisk smak i bakverket."
  },
  {
    question: "Vad ar skillnaden mellan bikarbonat och bakpulver?",
    answer: "Bikarbonat ar 100% natriumbikarbonat, en bas. Bakpulver ar ett komplett jasmedel som innehaller bikarbonat plus ett tort syramedel (som vinsten) och starkelse. Bakpulver ar sjalvneutraliserande."
  },
  {
    question: "Hur mycket bakpulver motsvarar 1 tesked bikarbonat?",
    answer: "Bikarbonat ar ungefar 3-4 ganger starkare an bakpulver. For att ersatta 1 tesked bikarbonat behover du cirka 3-4 teskedar bakpulver. Denna ersattning tillfor dock aven sura salter som kan paverka smaken, sa det ar bast att anvanda var kalkylator for exakta omvandlingar."
  },
  {
    question: "Varfor smakar min kaka tval eller metall?",
    answer: "En tvalig eller metallisk bismak ar det klassiska tecknet pa oreagerat bikarbonat. Nar det inte finns tillrackligt med syra i smeten for att helt neutralisera natriumbikarbonatet, finns den alkaliska resten kvar efter bakningen och ger den obehagliga kemiska smaken. Anvand var kalkylator for att sakerstalla fullstandig neutralisering."
  },
  {
    question: "Kan jag anvanda alkaliserat kakaopulver som syra?",
    answer: "Nej. Alkaliserat kakaopulver (Dutch-process) har behandlats med ett alkaliserande amne for att minska dess naturliga syrlighet (pH ~7-8). Endast naturligt kakaopulver (pH ~5-6) ar surt och kommer att neutralisera bikarbonat."
  },
  {
    question: "Hur paverkar bikarbonat bryningen av bakverk?",
    answer: "Bikarbonat hojer pH-vardet i smeten och gor den mer alkalisk. Ett hogre pH accelererar Maillard-reaktionen, vilket ger morkare skorpa och djupare smaker i kakor och mjuka kakor."
  }
];

const howTo = [
  {
    name: "Ange mjolvikt",
    text: "Ange den totala vikten av mjol i ditt recept i gram eller uns for att berakna den totalt nodvandiga jaskraften."
  },
  {
    name: "Lagg till sura ingredienser",
    text: "Valj receptets sura ingredienser (som filmjolk, yoghurt eller citronsaft) och ange deras vikter."
  },
  {
    name: "Kontrollera pH-balansen",
    text: "Observera den virtuella pH-balansskalan. En balanserad skal indikerar optimal neutralisering utan metalliska bismaker."
  },
  {
    name: "Mat upp jasmedlen",
    text: "Avlas den rekommenderade mangden bikarbonat for neutralisering och nodvandig bakpulverboost for att uppna malet for resningen."
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
  title: 'Syraneutraliserare for Bakpulver',
  description: 'Berakna den exakta fordelningen mellan bikarbonat och bakpulver i ditt recept. Neutralisera sura ingredienser som filmjolk och yoghurt, undvik metallisk bismak och uppna perfekt resning varje gang.',
  faqTitle: 'Vanliga Fragon',
  ui: {
    title: "Syraneutraliserare for Bakpulver",
    subtitle: "Exakt stokiometri for perfekt resning och smak i bakverk",
    flourLabel: "Mjolvikt",
    addAcidLabel: "Lagg till Sur Ingrediens",
    weightLabel: "Vikt",
    removeButton: "Ta Bort",
    bakingSodaNeeded: "Neutraliserat Bikarbonat",
    requiredBakingPowder: "Mal for Jasning",
    providedBakingPowderEquivalent: "Jaskraft fran Bikarbonat",
    boosterBakingPowder: "Extra Bakpulverboost",
    resultsTitle: "Beraknade Jasmedel",
    statusBalanced: "Balanserad",
    statusAcidic: "Overskott av Syra",
    statusAlkaline: "Overskott av Bas",
    gramsUnit: "g",
    ouncesUnit: "oz",
    teaspoonsUnit: "tsk",
    scaleBalanceTitle: "Virtuell pH-balans",
    acidListTitle: "Sura Ingredienser",
    unitLabel: "Matsystem",
    metricUnit: "Metriskt (g)",
    imperialUnit: "Imperialt (oz)",
    acid_buttermilk: "Filmjolk",
    acid_yogurt: "Yoghurt",
    acid_sour_cream: "Graddfil",
    acid_honey: "Honung",
    acid_molasses: "Melass",
    acid_cocoa: "Naturligt Kakaopulver",
    acid_lemon_juice: "Citronsaft",
    acid_vinegar: "Vinager",
    stoichiometryBadge: "pH-stokiometri",
    simulateSodaLabel: "Simulera tillsatt bikarbonat",
    autoBalanceBtn: "Auto-balansera",
    sodaAddedLabel: "Tillsatt bikarbonat"
  },
  faq,
  howTo,
  seo: [
    {
      type: 'summary',
      title: 'Nyckelinsikter for Perfekt Jasning',
      items: [
        'Bikarbonat behover syra for att aktiveras; utan det kommer bakverket att smaka tval och metall',
        'Bakpulver ar sjalvneutraliserande och ger extra jaskraft som boost',
        'Standardmalet ar 4% av mjolvikten i bakpulverekvivalenter for ratt resning',
        'Anvand neutraliseringstabellen nedan for att matcha dina sura ingredienser med ratt mangd bikarbonat'
      ]
    },
    {
      type: 'title',
      text: 'Kemin Bakom Kemiska Jasmedel vid Bakning',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Kemisk jasning bygger pa <strong>syra-basneutraliseringsreaktioner</strong> for att producera koldioxid (CO2), som fastnar i smetens struktur och far den att resa sig under bakningen. Att uppna ratt forhallande mellan natriumbikarbonat (bikarbonat) och sura ingredienser ar avgorande. <strong>For mycket bikarbonat</strong> leder till oreagerade alkaliska rester, vilket ger en tvalig, metallisk smak och gul missfargning. <strong>For mycket syra</strong> kan resultera i ett tungt, platt bakverk med dalig volym.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '3-4x',
          label: 'Bikarbonat starkare an bakpulver',
          icon: 'mdi:flash'
        },
        {
          value: '4%',
          label: 'Mal for jasning (% av mjolvikt)',
          icon: 'mdi:target'
        },
        {
          value: '1/4 tsk',
          label: 'Bikarbonat per 120g filmjolk/yoghurt',
          icon: 'mdi:spoon-sugar'
        },
        {
          value: '0.0125',
          label: 'Neutraliseringsforhallande (mjolksyror)',
          icon: 'mdi:scale-balance'
        }
      ]
    },
    {
      type: 'title',
      text: 'Bikarbonat vs. Bakpulver: Den Kompletta Jamforelsen',
      level: 3
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Bikarbonat',
          icon: 'mdi:flask-outline',
          description: 'Rent natriumbikarbonat (NaHCO3). En stark alkalisk bas som kraver extern syra for att aktiveras och producera CO2.',
          points: [
            '3-4x starkare an bakpulver',
            'Behover syra (filmjolk, yoghurt, citronsaft) for att reagera',
            'Overskott orsakar tvalig, metallisk smak och gult inkram',
            'Hojer pH; forstarker Maillard-bryning i kakor',
            'Enkelverkande: frigor CO2 omedelbart vid blandning'
          ]
        },
        {
          title: 'Bakpulver',
          icon: 'mdi:flask-round-bottom-outline',
          description: 'Ett komplett jassystem som innehaller bikarbonat + torra syrasalter + starkelse. Sjalvneutraliserande och tillforlitligt.',
          highlight: true,
          points: [
            'Innehaller sin egen syra (monokalciumfosfat, SAP)',
            'Dubbelverkande: frigor CO2 vid blandning OCH vid uppvarmning',
            'Ingen metallisk bismak; redan pH-balanserat',
            'Svagare per gram; anvand 3-4x mer for att matcha bikarbonat',
            'Bast som boost nar enbart bikarbonat inte kan lyfta allt mjol'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Sur Ingrediens', 'Standardvikt', 'Neutraliserat Bikarbonat', 'Neutraliseringsforhallande'],
      rows: [
        ['Filmjolk / Yoghurt / Graddfil', '120g (1/2 dl)', '1.5g (1/4 tsk)', '0.0125'],
        ['Citronsaft / Vinager', '15g (1 msk)', '1.5g (1/4 tsk)', '0.1000'],
        ['Naturligt Kakaopulver', '80g (1 dl)', '3.0g (1/2 tsk)', '0.0375'],
        ['Honung', '340g (1 dl)', '3.0g (1/2 tsk)', '0.0088'],
        ['Melass', '328g (1 dl)', '3.0g (1/2 tsk)', '0.0091']
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Felsokning: Ar Din Jasning i Obalans?',
      badge: 'Snabbkoll',
      html: '<strong>Om din kaka kollapsade:</strong> For mycket syra eller for lite jasning totalt sett; CO2 slappte ut innan strukturen satte sig.<br/><br/><strong>Om din kaka ar tung och platt:</strong> For mycket syra utan tillrackligt med bikarbonat for att neutralisera, eller otillracklig total jaskraft for mjolvikten.<br/><br/><strong>Om din kaka smakar tval eller metall:</strong> Overskott av oreagerat bikarbonat; lagg till mer sura ingredienser eller minska bikarbonatet.<br/><br/><strong>Om din kaka har gula flackar:</strong> Klassiskt tecken pa oupplost, oreagerat bikarbonat i klumpar; sikta bikarbonatet med mjolet nasta gang.'
    },
    {
      type: 'title',
      text: 'Sa Balanserar du Jasmedel och Undviker Metallisk Smak',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'For att uppna optimal smak och resning, folj denna process: <strong>Forst</strong>, bestam mangden bikarbonat som behovs for att helt neutralisera de sura komponenterna i smeten med hjalp av tabellen ovan. <strong>Sedan</strong>, omvandla bikarbonatet till bakpulverekvivalent (multiplicera med 4) och jamfor med den totala jaskraft som behovs for ditt mjol; vanligtvis <strong>4% av mjolvikten</strong> i bakpulverekvivalent. <strong>Om det finns ett underskott</strong>, lagg till den aterstaende jaskraften i form av neutralt bakpulver som boost. Var kalkylator gor allt detta automatiskt.'
    },
    {
      type: 'list',
      icon: 'mdi:alert-circle-outline',
      items: [
        'Ersatt aldrig bikarbonat 1:1 med bakpulver; bikarbonat ar 3-4x starkare och behover syra',
        'Sikta alltid bikarbonat med de torra ingredienserna for att undvika beska klumpar',
        'Alkaliserat kakao ar INTE surt; anvand naturligt kakaopulver om du forlitar dig pa kakao som syrakalla',
        'Honung och melass ar svagt sura; de behover mycket mindre bikarbonat per gram an citronsaft',
        'Arbeta snabbt efter blandning: kemisk jasning borjar reagera omedelbart vid kontakt med vatska'
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Neutraliseringsforhallande',
          definition: 'Andelen bikarbonat som behovs for att helt neutralisera en given vikt av en sur ingrediens. Lagre varden betyder att ingrediensen ar mindre sur per gram.'
        },
        {
          term: 'Jaskraft',
          definition: 'Den totala mangden CO2 som ett jasmedel kan producera. Mats i bakpulverekvivalenter, dar 4% av mjolvikten ar standardmalet for mjuka kakor och muffins.'
        },
        {
          term: 'Dubbelverkande Bakpulver',
          definition: 'Bakpulver som frigor CO2 i tva steg: forst vid blandning med vatska i rumstemperatur, och sedan vid exponering for ugnsvarme. Ger en mer tillforlitlig resning.'
        },
        {
          term: 'Maillardreaktion',
          definition: 'En kemisk reaktion mellan aminosyror och reducerande sockerarter som bryner mat och skapar komplexa smaker. Forstarks av hogre pH fran overskott av bikarbonat; onskvard i kakor, icke-onskvard i delikata mjuka kakor.'
        },
        {
          term: 'pH-balans',
          definition: 'Mattet pa surhet eller alkalinitet i smeten. Ett neutralt pH (cirka 7) innebar att allt bikarbonat har reagerat med all syra. Nagot alkaliskt gynnar bryning; surf gynnar morhet.'
        }
      ]
    },
    {
      type: 'tip',
      html: '<strong>Bryning och pH:</strong> Medan fullstandig neutralisering ar nyckeln till smak, kan en nagot alkalisk smet (pa grund av ett litet overskott av bikarbonat) vara onskvard i chokladkakor och cookies. Ett hogre pH forstarker Maillardbryningen, vilket ger morkare farger, krispigare kanter och djupare karamelltoner. For delikata vaniljkakor, sikta pa exakt neutralisering for att bevara en ren och frisk smak.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
