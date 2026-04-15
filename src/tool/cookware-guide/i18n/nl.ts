import type { ToolLocaleContent } from '../../../types';

const title = "Intelligente Pannenselector: Gids voor Kookgerei";
const description = "Interactieve gids voor het kiezen van de beste pan of pot op basis van uw kookstijl. Gietijzer vs Staal vs Teflon. Vind uw perfecte gereedschap.";
const faq = [
  {
    question: 'Wat is de beste pan voor dagelijks gebruik?',
    answer: 'Voor de meeste mensen zijn een hoogwaardige roestvrijstalen pan of een goed ingebrande gietijzeren pan het best. Staal is veelzijdig en onverslijtbaar, terwijl gusseisen een natuurlijke anti-aanbaklaag biedt zonder chemicaliën.',
  },
  {
    question: 'Waarom blijft eten plakken in een roestvrijstalen pan?',
    answer: 'Meestal komt dit door een te lage temperatuur of door het eten te vroeg in de pan te doen. Probeer het "Leidenfrost-effect": verhit de pan totdat een druppel water als een parel rondrollt. Dan is hij klaar.',
  },
  {
    question: 'Hoe weet ik of mijn pan veilig is?',
    answer: 'Zoek naar "PFOA Free" labels. Pannen van gietijzer, koolstofstaal en roestvrij staal zijn de veiligste en meest duurzame opties, omdat ze geen coatings hebben die na verloop van tijd afbreken.',
  },
  {
    question: 'Wat betekent het om een pan te "seasonen" (inbranden)?',
    answer: 'Dit is het proces waarbij een laag gepolymeriseerde olie op het metaal (ijzer of staal) wordt aangebracht. Dit beschermt tegen roest en creëert een natuurlijke anti-aanbaklaag die bij elk gebruik beter wordt.',
  },
  {
    question: 'Hoeveel moet ik uitgeven aan een goede pan?',
    answer: 'Een set van 2-3 pannen van hoge kwaliteit (roestvrij staal of gietijzer) kan meer dan 20 jaar meegaan. Het is beter om goed te investeren in één pan dan in 5 goedkope pannen die na 2 jaar versleten zijn. Kwaliteit boven kwantiteit.',
  },
];
const howTo = [
  {
    name: 'Selecteer uw kookstijl',
    text: 'Kies tussen hoog vuur (aanbraden), delicaat (eieren), stoofschotels (slowcooking) of snel koken. Elke stijl heeft andere vereisten.',
  },
  {
    name: 'Kies het ideale materiaal',
    text: 'Op basis van uw stijl zal de tool het beste materiaal aanbevelen: gietijzer, roestvrij staal, koper of teflon.',
  },
  {
    name: 'Lees de kenmerken',
    text: 'Begrijp de voor- en nadelen, onderhoud en duurzaamheid. Kies vervolgens de specifieke pan die bij uw budget en behoeften past.',
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
  slug: 'pannengids',
  title: 'Intelligente Pannenselector: Gids voor Kookgerei',
  description: 'Interactieve gids voor het kiezen van de beste pan of pot op basis van uw kookstijl. Gietijzer vs Staal vs Teflon. Vind uw perfecte gereedschap.',
  faqTitle: 'Veelgestelde Vragen',
  faq,
  bibliographyTitle: 'Bibliografie',
  bibliography: [
    {
      name: 'The Flavor Bible - Pairing, and Progress in Food',
      url: 'https://www.flavorprints.com/',
    },
    {
      name: 'On Food and Cooking - Harold McGee',
      url: 'https://www.foodscience.org/',
    },
    {
      name: 'Salt Fat Acid Heat - Samin Nosrat',
      url: 'https://www.saltfatacidheat.com/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Pannenmaterialen: Wetenschap en Praktijk',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Niet alle pannen zijn hetzelfde. Elk materiaal heeft verschillende thermodynamische eigenschappen die bepalen hoe de hitte wordt verdeeld, welke temperaturen het kan verdragen en hoe het reageert op voedsel. Het begrijpen van deze verschillen is de sleutel tot het kiezen van het juiste gereedschap.',
    },
    {
      type: 'title',
      text: 'Gietijzer: De Klassieker',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Voordelen:</strong> Uitstekende warmtevasthouding, gelijkmatige verdeling, natuurlijke anti-aanbaklaag (indien ingebrand), gaat eeuwen mee, wordt met de tijd beter. <strong>Nadelen:</strong> Zwaar, vereist onderhoud, kan roesten, duurt langer om op te warmen, niet geschikt voor langdurig koken met zuren.',
    },
    {
      type: 'title',
      text: 'Roestvrij Staal: De Veelzijdige',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Voordelen:</strong> Duurzaam, onderhoudsvrij, bestand tegen zuren (wijn, tomaten), gemakkelijk schoon te maken, veelzijdig, relatief voordelig. <strong>Nadelen:</strong> Van nature geen anti-aanbaklaag, vereist techniek (goed voorverwarmen), ongelijkmatige warmteverdeling (beter met een meerlaagse bodem).',
    },
    {
      type: 'title',
      text: 'Teflon/PTFE: De Gemakkelijke',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Voordelen:</strong> Directe anti-aanbaklaag, gemakkelijk koken, gemakkelijk schoon te maken, voordelig. <strong>Nadelen:</strong> Slijt na verloop van tijd en door hitte, moet elke 3-5 jaar worden vervangen, niet veilig bij zeer hoge temperaturen (>260°C).',
    },
  ],
  ui: {
    cookingStyle: 'Hoe kookt u meestal?',
    material: 'Type Materiaal',
    highHeat: 'Hoog Vuur',
    sear: 'Aanbraden / Dichtschroeien',
    delicate: 'Delicaat',
    fry: 'Eieren / Omeletten',
    stew: 'Stoofschotels',
    slowCook: 'Slowcooking',
    fast: 'Snel',
    quick: 'Snel Koken',
    recommendation: 'Aanbeveling',
    characteristics: 'Kenmerken',
    castIron: 'Gietijzer',
    stainlessSteel: 'Roestvrij Staal',
    carbon: 'Koolstofstaal',
    copper: 'Koper',
    nonstick: 'Anti-aanbak (Teflon)',
    advantages: 'Voordelen',
    disadvantages: 'Nadelen',
    maintenance: 'Onderhoud',
    durability: 'Duurzaamheid',
    heatRetention: 'Warmtevasthouding',
    price: 'Prijs',
    step1: 'Hoe kookt u meestal?',
    step2: 'Onderhoudsniveau',
    maintenanceLazy: 'Laag / Geen',
    maintenanceLazyDesc: 'Geen gedoe met schoonmaken.',
    maintenanceCare: 'Gemiddeld',
    maintenanceCareDesc: 'Normale handwas.',
    maintenanceRitual: 'Ritueel (Hoog)',
    maintenanceRitualDesc: 'Ik hou van het inbrandproces.',
    idealPan: 'Uw Ideale Pan',
    selectOptions: 'Selecteer opties',
    seeRecommendation: 'Om uw aanbeveling te zien',
    pro: 'PRO',
    con: 'CONTRA',
    masterTip: 'Meester-tip',
    defaultTip: 'Het combineren van een roestvrijstalen pan voor aanbraden en een anti-aanbakpan voor eieren is de basis van elke efficiënte keuken.',
    stainlessName: 'Roestvrij Staal',
    stainlessTag: 'De Alleskunner Pro',
    stainlessPro: 'Onverslijtbaar en reageert niet met voedsel. Perfect voor aanbraden.',
    stainlessCon: 'Vereist techniek (Temp.) om plakken te voorkomen.',
    stainlessTip: 'Gebruik het Leidenfrost-effect: als een druppel water als een parel rondrolt, is de pan klaar.',
    nonstickName: 'Anti-aanbak',
    nonstickTag: 'Maximaal Gemak',
    nonstickPro: 'Niets blijft plakken. Gemakkelijke reiniging.',
    nonstickCon: 'Gaat kort mee (2-3 jaar). Niet voor hoog vuur.',
    nonstickTip: 'Was hem altijd met de hand en gebruik hout/siliconen keukengerei om de levensduur te verdubbelen.',
    castironName: 'Gietijzer',
    castironTag: 'De Tijdloze Klassieker',
    castironPro: 'Ongelooflijke warmtevasthouding. Onverslijtbaar.',
    castironCon: 'Heel zwaar. Moet regelmatig worden ingebrand.',
    castironTip: 'Warmt langzaam op, maar is eenmaal heet onverslaanbaar. Ideaal voor steaks.',
    carbonName: 'Koolstofstaal',
    carbonTag: 'Wendbaarheid op het Vuur',
    carbonPro: 'Licht als staal, prestaties als gietijzer.',
    carbonCon: 'Roest als hij vochtig blijft. Rustieke uitstraling.',
    carbonTip: 'Hoe zwarter en lelijker hij wordt, hoe beter hij werkt. Het geheim van de beste woks.',
    enamelName: 'Geëmailleerd Gietijzer',
    enamelTag: 'Gourmet Kwaliteit',
    enamelPro: 'Het beste voor slowcooking. Prachtige esthetiek.',
    enamelCon: 'Heel duur. Emaille is kwetsbaar voor stoten.',
    enamelTip: 'Perfect voor eindeloze stoofschotels. De emaille laag maakt koken met zuren (tomaat) probleemloos.',
  },
  schemas: [faqSchema, howToSchema, appSchema],
};
