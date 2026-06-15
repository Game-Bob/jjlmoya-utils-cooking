import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkylator for Emulsionsstabilitet och Oljegrans";
const description = "Ta reda pa exakt hur mycket olja din majonnas, aioli eller vinagrett klarar innan den skar sig. Forhindra skurna safer med var kostnadsfria kalkylator for emulsionsstabilitet.";
const faq = [
  {
    question: "Hur mycket olja kan jag tillsatta till min majonnas innan den skar sig?",
    answer: "Det beror pa emulgeringsmedlet. Aggula klarar upp till ~78% olja (ungefar 3,5 ganger vattenvolymen), senap upp till 70%, sojalecitin upp till 82% och polysorbat upp till 85%. Anvand kalkylatorn ovan for att fa exakt maxvarde for dina specifika mangder."
  },
  {
    question: "Varfor skar sig eller separerade min emulsion?",
    answer: "En emulsion skar sig nar oljans volymfraktion overskrider emulgeringsmedlets maximala packningsgrans. Da pressas oljedropparna sa hart ihop att de smalter samman och blandningen separerar. Detta sker omedelbart - det ar inte en gradvis process."
  },
  {
    question: "Hur lagar jag en skuren majonnas eller aioli?",
    answer: "Borja med en farsk aggula eller en matsked varmt vatten i en ren skal. Ringla langsamt den skurna blandningen i skalen medan du vispar konstant, precis som om du tillsatte ra olja. Kalkylatorn ovan talar om exakt hur mycket vatten eller gula du behover."
  },
  {
    question: "Gor tillsattning av olja for snabbt att en emulsion skar sig?",
    answer: "Att tillsatta olja for snabbt kan tillfalligt overbelasta emulgeringsmedlet, men den verkliga orsaken till skarning ar alltid ett felaktigt fasforhallande. Om din oljefraktion haller sig under emulgeringsmedlets grans forblir emulsionen stabil oavsett hastighet. Om den overskrider gransen ar skarning oundviklig."
  },
  {
    question: "Vad ar skillnaden mellan aggula och senap som emulgeringsmedel?",
    answer: "Aggula (max 78% olja) innehaller lecitin och lipoproteiner som bildar ett robust filmer runt dropparna. Senap (max 70% olja) forlitar sig pa slem och proteiner - den ar svagare men tillfor smak. Sojalecitin (82%) och polysorbat (85%) ar mycket effektiva industriella emulgeringsmedel."
  }
];

const howTo = [
  {
    name: "Vajj ditt emulgeringsmedel",
    text: "Vajj det emulgeringsmedel som finns i ditt recept - aggula for klassisk majonnas, senap for vinagretter, eller sojalecitin/polysorbat for modernistisk matlagning. Varje typ anger en annan maximal oljegrans."
  },
  {
    name: "Ange din vattenfasvolym",
    text: "Ange det totala antalet milliliter av dina vattenbaserade ingredienser: vatten, vinager, citronsaft, vin eller nagon annan vattenbaserad vatska. Kalkylatorn lagger automatiskt till vatteninnehallet fran ditt valda emulgeringsmedel."
  },
  {
    name: "Stall in din oljevolym",
    text: "Ange mangden olja du planerar att anvanda. Anvand reglaget eller skriv in vardet. Kalkylatorn visar omedelbart om denna mangd ger en stabil emulsion eller far den att skara sig."
  },
  {
    name: "Las stabilitetsresultatet och atgarda vid behov",
    text: "Kontrollera mataren for oljans volymfraktion. Om den ar stabil ar du redo att ga vidare. Om den ar skuren talar raddningspanelen om exakt hur mycket vatten (i ml) eller hur manga extra aggulor du behover tillsatta for att aterstalla balansen."
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
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'kalkylator-emulsionsstabilitet',
  title: 'Kalkylator for Emulsionsstabilitet och Oljegrans',
  description: 'Ta reda pa exakt hur mycket olja din majonnas, aioli eller vinagrett klarar innan den skar sig. Forhindra skurna safer med var kostnadsfria kalkylator for emulsionsstabilitet.',
  faqTitle: 'Vanliga Fragor',
  ui: {
    title: 'Emulsionsstabilitetsanalysator',
    subtitle: 'Hur mycket olja tal din saf innan den skar sig?',
    waterLabel: 'Vattenfas (ml)',
    oilLabel: 'Oljevolym (ml)',
    emulsifierLabel: 'Typ av Emulgeringsmedel',
    yolkOption: 'Aggula',
    mustardOption: 'Senap',
    soyLecithinOption: 'Sojalecitin',
    polysorbateOption: 'Polysorbat',
    stableStatus: 'Stabil Emulsion',
    brokenStatus: 'Skuren Emulsion',
    ratioLabel: 'Oljans Volymfraktion',
    maxLimitLabel: 'Maximal Oljegrans',
    fixTitle: 'Raddningsstrategi',
    waterFixText: 'Tillsatt vatten for att aterstalla fasbalansen:',
    yolkFixText: 'Alternativt, anvand extra aggula:',
    idealRangeText: 'Idealiskt intervall ligger under den kritiska packningsgransen pa 74% till 80%.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Hur Mycket Olja Tal en Majonnas eller Aioli Innan Den Skar Sig?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Varje kock har stallt denna fraga: <strong>varfor skar sig min majonnas?</strong> Svaret ar enklare an det verkar. En emulsion - vare sig det ar en klassisk aioli, en kramig vinagrett eller ett modernistiskt skum - kan bara halla en begransad mangd olja innan den kollapsar. Var <strong>kalkylator for emulsionsstabilitet</strong> talar om exakt var den brytpunkten ligger, baserat pa dina specifika ingredienser och mangder.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '78%',
          label: 'Aggula Max Olja',
          icon: 'mdi:egg-outline'
        },
        {
          value: '85%',
          label: 'Polysorbat Grans',
          icon: 'mdi:flask-outline'
        },
        {
          value: '74%',
          label: 'Teoretisk Packning',
          icon: 'mdi:sphere'
        },
        {
          value: '15 ml',
          label: 'Gulans Vatteninnehall',
          icon: 'mdi:water'
        }
      ]
    },
    {
      type: 'title',
      text: 'Vetenskapen: Varfor Emulsioner Skar Sig',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'En kulinarisk emulsion fungerar genom att sprida sma oljedroppar i en kontinuerlig vattenfas. <strong>Emulgeringsmedel</strong> - sadana som lecitinet i aggula, slemmet i senap eller syntetiska ytaktiva anmen som polysorbat - belagger varje droppe och forhindrar att den slas samman med sina grannar.'
    },
    {
      type: 'paragraph',
      html: 'Brytpunkten bestams av ren geometri. Oljedroppar beter sig som sma klot packade tillsammans. Den maximala volymen klot som far plats i ett givet utrymme - kant som <strong>Keplers formodan</strong> - ar ungefar 74%. I verkliga kokssystem kan detta strackas till 80-85% med kraftfulla emulgeringsmedel, men darover pressas dropparna sa hart att de slas samman och emulsionen kollapsar omedelbart.'
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Aggula',
          icon: 'mdi:egg-outline',
          description: 'Det klassiska majonnasemulgeringsmedlet. Innehaller lecitin och lipoproteiner.',
          highlight: true,
          points: [
            'Max olja: 78%',
            '~15 ml vatten per gula',
            'Ger rikedom och farg',
            'Bast for majonnas och aioli'
          ]
        },
        {
          title: 'Senap',
          icon: 'mdi:shaker-outline',
          description: 'Forlitar sig pa slem och froteiner. Ger syrlig smak.',
          points: [
            'Max olja: 70%',
            '~10 ml vatteninnehall',
            'Svagare emulgeringsformaga',
            'Idealisk for vinagretter'
          ]
        },
        {
          title: 'Sojalecitin',
          icon: 'mdi:leaf',
          description: 'Hogt koncentrerat vaxthaserat ytaktivt anme.',
          points: [
            'Max olja: 82%',
            '~5 ml vatteninnehall',
            'Neutral smakprofil',
            'Modernistisk basvara'
          ]
        },
        {
          title: 'Polysorbat',
          icon: 'mdi:flask-outline',
          description: 'Syntetiskt emulgeringsmedel med maximal ytaktiv kapacitet.',
          points: [
            'Max olja: 85%',
            '~2 ml vatteninnehall',
            'Hogsta oljetolerans',
            'Anvands i skum'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emulgeringsmedel', 'Max Olja %', 'Olja per 100 ml Vatten', 'Basta Anvandning'],
      rows: [
        ['Aggula', '78%', '~355 ml', 'Majonnas, aioli, hollandaisesaf'],
        ['Senap', '70%', '~233 ml', 'Vinagretter, latta dressingar'],
        ['Sojalecitin', '82%', '~456 ml', 'Modernistiska safer, skum'],
        ['Polysorbat', '85%', '~567 ml', 'Stabila skum, experimentell matlagning']
      ]
    },
    {
      type: 'title',
      text: 'Hur Man Raddar en Skuren Emulsion Steg for Steg',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Om din majonnas eller saf redan har skurit sig, <strong>slang den inte</strong>. Losningen ar enkel - men bara om du forstar fasforhallandet. Att vispa hardare hjalper inte; du maste tillsatta mer av den kontinuerliga (vatten) fasen.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Vanliga Tecken pa att Din Emulsion ar pa Vag att Skara Sig',
      html: 'Hall utkik efter <strong>tjockning foljt av plotslig fortunning</strong>, en <strong>glansig yta som blir grynig</strong> eller synlig olja som samlas vid kanterna. Om du ser nagot av detta, sluta omedelbart tillsatta olja och vispa i en tesked kallt vatten innan du fortsatter.'
    },
    {
      type: 'title',
      text: 'Praktiska Tips for Perfekta Emulsioner Varje Gang',
      level: 3
    },
    {
      type: 'tip',
      title: 'Temperaturen Spelar Roll',
      html: 'Alla ingredienser bor vara i <strong>rumstemperatur</strong>. Kalla agg eller kall olja okar dramatiskt risken for skarning. Ta ut ingredienserna ur kylskapet 30 minuter innan du borjar.'
    },
    {
      type: 'tip',
      title: 'Vattensakerhetsnatet',
      html: 'Om ditt recept inte innehaller tillrackligt med syra (vinager, citronsaft), tillsatt <strong>en tesked kallt vatten per aggula</strong> innan du borjar tillsatta olja. Detta extra vatten skapar en bredare sakerhetsmarginal.'
    },
    {
      type: 'tip',
      title: 'Laga en Skuren Sats',
      html: 'Lagg en farsk aggula i en ren skal. Vispa den med en tesked vatten. Ringla sedan <strong>den skurna blandningen i sa langsamt som mojligt</strong>, precis som om det vore ra olja. Nar den har emulgerats om kan du tillsatta resten snabbare.'
    },
    {
      type: 'title',
      text: 'Ordlista for Kulinariska Emulsioner',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Kontinuerlig Fas',
          definition: 'Vatskan som omger dropparna - vanligtvis vatten, vinager eller citrusjuice i olja-i-vatten-emulsioner som majonnas.'
        },
        {
          term: 'Dispers Fas',
          definition: 'Vatskan som ar bruten i sma droppar - olja i de flesta kulinariska emulsioner. Ju mer du tillsatter, desto tatare packas dropparna.'
        },
        {
          term: 'Volymfraktion',
          definition: 'Forhallandet mellan oljevolym och total volym. Vid ungefar 74-85% (beroende pa emulgeringsmedel) nar emulsionen sin geometriska brytpunkt.'
        },
        {
          term: 'Koalescens',
          definition: 'Nar tva eller fler oljedroppar slas samman till en storre. Detta ar den mikroskopiska process som utloster ett synligt emulsionbrott.'
        },
        {
          term: 'Fasinversion',
          definition: 'Punkten dar en olja-i-vatten-emulsion vander till vatten-i-olja - som nar man gor smor av gradde. Detta ar det ultimata felsattet.'
        }
      ]
    },
    {
      type: 'paragraph',
      html: 'Oavsett om du gor en klassisk fransk majonnas, en vitloksaik aioli, en stabil vinagrett eller experimenterar med modernistiska hydrokolloider, ar forstaelsen av <strong>olja-till-vatten-forhallandet</strong> den enskilt viktigaste faktorn. Var kalkylator skoter matematiken sa att du kan laga mat med sjalvfortroende.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
