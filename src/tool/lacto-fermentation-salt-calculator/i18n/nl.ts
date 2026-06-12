import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Lacto Fermentatie Zoutcalculator Bio Organische Wetenschappelijke Gids";
const description = "Bereken precieze zoutpercentages voor droogzouten en natte pekelen. Breng bacteriepopulaties in evenwicht, voorkom schimmel en beheers voedselconservering.";
const faq = [
  {
    question: "Waarom is het zoutpercentage cruciaal bij lacto-fermentatie?",
    answer: "Zout onderdrukt schadelijke pathogenen en schimmels door osmotische druk, terwijl zouttolerante melkzuurbacteriën (LAB) kunnen gedijen, suikers fermenteren en melkzuur produceren."
  },
  {
    question: "Wat is het verschil tussen droogzouten en natte pekelen?",
    answer: "Droogzouten gebruikt het natuurlijke vocht van het voedsel om het zout op te lossen (ideaal voor geraspte kool). Natte pekelen voegt extern water en zout toe om hele of stukjes groente volledig onder te dompelen."
  },
  {
    question: "Kan ik gechloreerd leidingwater gebruiken voor fermentatie?",
    answer: "Chloor kan bacteriegroei remmen. Het wordt sterk aanbevolen om gefilterd of bronwater te gebruiken voor consistente fermentatieresultaten."
  },
  {
    question: "Is gewichtspercentage beter dan volumemetingen?",
    answer: "Ja. Verschillende zoutsoorten (kosher, zeezout, tafelzout) hebben variërende kristalgroottes en dichtheden. Zout in grammen wegen garandeert exacte zoutheid, ongeacht het gebruikte zouttype."
  }
];

const howTo = [
  {
    name: "Kies de fermentatiemodus",
    text: "Selecteer de Droge modus als u de natuurlijke sappen van de groente gebruikt, of de Natte modus als u water toevoegt om de ingrediënten te bedekken."
  },
  {
    name: "Weeg de ingrediënten",
    text: "Voer het exacte gewicht van de groenten in grammen in. Gebruikt u natte pekeling, voer dan ook het gewicht van het water in."
  },
  {
    name: "Pas de streefzoutheid aan",
    text: "Schuif de regelaar voor het zoutpercentage. Streef naar 2,0% tot 3,5% voor algemene veiligheid en optimale groei van melkzuurbacteriën."
  },
  {
    name: "Meet het zout",
    text: "Gebruik de digitale weegschaal om de exacte grammen zout af te meten. Voeg het toe aan uw fermentatievat."
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
  slug: 'lacto-fermentatie-zoutcalculator',
  title: 'Lacto Fermentatie Zoutcalculator',
  description: 'Bereken precieze zoutpercentages voor droogzouten en natte pekelen. Breng bacteriepopulaties in evenwicht, voorkom schimmel en beheers voedselconservering.',
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    title: "Lacto Fermentatie Zoutcalculator",
    subtitle: "Precieze zoutheidscontrole voor bio organische conservering",
    unitLabel: "Meetsysteem",
    metricUnit: "Metrisch (g / gram)",
    imperialUnit: "Imperiaal (oz / ons)",
    modeLabel: "Fermentatiemodus",
    dryMode: "Droogzouten",
    wetMode: "Natte Pekeling",
    vegWeightLabel: "Groentegewicht",
    waterWeightLabel: "Watergewicht",
    salinityLabel: "Streefzoutheid (%)",
    saltGramsLabel: "Benodigd Zout",
    fineSaltLabel: "Fijn Zout (theelepels)",
    kosherSaltLabel: "Kosher Zout (theelepels)",
    statusDanger: "Gevarenzone",
    statusDangerDesc: "Een zoutheid onder 2,0% is onvoldoende om pathogenen en schimmels te blokkeren. Verhoog de zoutheid om veiligheid te garanderen.",
    statusOptimal: "Optimale LAB-Zone",
    statusOptimalDesc: "Een zoutheid tussen 2,0% en 3,5% is ideaal voor melkzuurbacteriën (LAB) om te domineren en veilig te fermenteren.",
    statusInhibited: "Geremde Zone",
    statusInhibitedDesc: "Een zoutheid boven 3,5% vertraagt of stopt de fermentatie. Nuttig voor langdurige conservering maar vertraagt bacteriële activiteit.",
    petriTitle: "Microbiologische Simulatie",
    scaleTitle: "Digitale Weegschaal Display",
    disclaimer: "Opmerking: Het wegen van zout met een digitale weegschaal wordt sterk aanbevolen boven volumetrische metingen.",
    kosherLabel: "Kosher Zout",
    fineLabel: "Fijn Zout",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'De Ultieme Gids voor de Chemie van Lacto-Fermentatie en Zoutheidsbeheersing',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lacto-fermentatie is een dynamisch biochemisch proces dat wordt aangedreven door melkzuurbacteriën (LAB) om groenten en fruit te conserveren. Het hele mechanisme hangt af van het creëren van een selectieve omgeving waarin nuttige bacteriën gedijen, terwijl bederforganismen, schimmels en pathogenen worden onderdrukt. Zoutheidsbeheersing is de meest kritische hefboom om deze biologische selectiviteit te bereiken.',
    },
    {
      type: 'title',
      text: 'De Biochemische Werking van Zout bij Conservering',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wanneer zout aan rauwe groenten wordt toegevoegd, werkt het via een fysisch proces dat bekend staat als <strong>osmotische druk</strong>. De hoge zoutconcentratie buiten de plantencellen trekt water en opgeloste suikers uit de plantenweefsels via osmose (plasmolyse). Dit creëert een nutriëntrijke pekel die dient als perfecte brandstof voor melkzuurbacteriën. Tegelijkertijd dehydrateert en lyseert de osmotische druk de celmembranen van ongewenste schimmels, gisten en pathogene bacteriën zoals <em>Escherichia coli</em> of <em>Clostridium botulinum</em>, die verhoogde zoutheidsniveaus niet kunnen verdragen.',
    },
    {
      type: 'title',
      text: 'Microbiologische Successie: Hoe LAB Fermenten Koloniseert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lacto-fermentatie wordt niet uitgevoerd door één enkele bacteriesoort, maar door een opeenvolging van verschillende stammen die domineren naarmate de zuurgraad toeneemt. In een typische groentefermentatie verloopt de cyclus in drie afzonderlijke fasen:',
    },
    {
      type: 'list',
      items: [
        '<strong>Fase 1 - Leuconostoc mesenteroides:</strong> Deze heterofermentatieve bacterie start de fermentatie. Hij is zeer actief aan het begin en produceert melkzuur, azijnzuur, kooldioxide (dat helpt een anaerobe atmosfeer te creëren) en ethanol. Het verlaagt snel de pH en bereidt het medium voor op volgende soorten.',
        '<strong>Fase 2 - Lactobacillus plantarum en Lactobacillus brevis:</strong> Wanneer de pH onder 5,0 zakt, sterft <em>L. mesenteroides</em> af en nemen zuurtolerante homofermentatieve bacteriën zoals <em>L. plantarum</em> het over. Ze fermenteren de resterende eenvoudige suikers uitsluitend tot melkzuur, waardoor de pH snel daalt.',
        '<strong>Fase 3 - Pediococcus pentosaceus en anderen:</strong> Bij langdurige fermentaties blijven deze zeer zuurtolerante bacteriën zuur produceren totdat de suikers volledig zijn uitgeput of de pH rond 3,5 tot 3,8 is gestabiliseerd, waardoor de omgeving voor onbepaalde tijd wordt gestabiliseerd.'
      ],
    },
    {
      type: 'title',
      text: 'Bescherming van Groentestructuur: De Pectine-Connectie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een veelvoorkomend probleem bij thuisfermentatie is papperigheid. Plantencellen worden bijeengehouden door een structureel polysacharide genaamd pectine. Bederfmicro-organismen produceren enzymen genaamd <strong>pectinases</strong>, die pectine afbreken en de plantenwanden aantasten, wat papperigheid veroorzaakt. Het handhaven van een zoutheidsniveau boven 2,0% remt direct de activiteit van deze pectinase-enzymen. Bovendien kunnen calciumionen in ongeraffineerd zeezout of toegevoegd als calciumchloride crosslinks vormen met pectinemoleculen, waardoor calciumpectaat ontstaat dat augurken en zuurkool knapperig houdt.',
    },
    {
      type: 'title',
      text: 'Wiskunde van Droogzouten versus Natte Pekeling',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het begrijpen van de formule voor het berekenen van zout is cruciaal. Bij droogzouten (veelgebruikt voor geraspte groenten zoals kool voor zuurkool) wordt het zoutpercentage uitsluitend berekend op basis van het gewicht van de groente. Bij natte pekeling (gebruikt voor hele of grotere stukken groente zoals komkommers of wortelen) moet het zoutpercentage worden berekend op basis van het <strong>totale gewicht van zowel de groenten als het toegevoegde water</strong>. Het berekenen van zout op basis van alleen het watergewicht is een veelgemaakte fout die de uiteindelijke zoutheid verdundt, omdat het water in de groenten de pekel uiteindelijk verdunt.',
    },
    {
      type: 'table',
      headers: ['Zoutheidsbereik', 'Microbiologische Toestand', 'Typische Toepassingen', 'Veiligheidsniveau'],
      rows: [
        ['< 2,0%', 'Pathogeenrisico / Schimmelgevaar', 'Niet aanbevolen', 'Laag'],
        ['2,0% - 2,5%', 'Optimale Melkzuurbacteriebloei', 'Zuurkool, Kimchi, Augurken', 'Hoog'],
        ['2,5% - 3,5%', 'Vertraagde fermentatie / Hoge textuurbehoud', 'Pittige sauzen, knoflook, wortelgroenten', 'Hoog'],
        ['> 3,5%', 'Bacteriële remming / Alleen conservering', 'Olijven, lang gerijpte pepers, hoge temperatuur', 'Veilig maar inactief'],
      ],
    },
    {
      type: 'title',
      text: 'Waarom Zout Wegen Beter Is dan Volumemeting',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zout meten in volume (eetlepels of theelepels) is berucht onnauwkeurig. Tafelzout is fijn en dicht opeengepakt, een theelepel kan tot 6 gram wegen. Kosher zout daarentegen heeft grote, vlokkige kristallen met luchtgaten en weegt slechts 4 gram per theelepel. Grof zeezout zit er ergens tussenin. Het gebruik van volumemetingen kan er gemakkelijk voor zorgen dat een ferment onveilig ondergezouten of volledig gestopt raakt door overmatig zout. Ingrediënten in grammen wegen op een digitale weegschaal garandeert consistente, veilige en herhaalbare resultaten.',
    },
    {
      type: 'title',
      text: 'Probleemoplossing en Beste Praktijken bij Lacto-Fermentatie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Volg deze regels altijd voor een succesvolle fermentatie: Houd alle groenten volledig ondergedompeld onder de pekel om aerobe schimmelgroei te voorkomen. Gebruik schone vaten en gewichten. Fermenteer bij een koele kamertemperatuur (18°C tot 22°C) om te voorkomen dat fase 1-bacteriën worden verdrongen. Als zich een witte film op het oppervlak vormt, controleer dan of het Kahm-gist is (een onschadelijke wilde gist die ontstaat door blootstelling aan zuurstof) of schimmel. Schimmel is donzig en gekleurd; indien aanwezig moet het ferment worden weggegooid. Kahm-gist kan worden afgeschept, hoewel het de smaak kan beïnvloeden.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
