import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Pectine en Jam Berekenaar voor Perfecte Gel Elke Keer';
const description = 'Bereken precies hoeveel pectine, citroenzuur en suiker uw fruit nodig heeft voor de perfecte jam. Vermijd waterige of rubberachtige confituur met precisiechemie.';

const faq = [
  {
    question: 'Waarom laat pectine jam geleren?',
    answer: 'Pectine is een natuurlijk polysacharide dat voorkomt in de celwanden van fruit. Bij verhitting met suiker en zuur (pH 2,8-3,5) vormen pectinemoleculen een driedimensionaal gelnetwerk dat water en suiker vasthoudt, waardoor de smeerbare textuur van jam ontstaat.',
  },
  {
    question: 'Wat is het verschil tussen HM- en LM-pectine?',
    answer: 'Hoog Methoxyl (HM) pectine vereist minstens 60% suiker en een pH lager dan 3,5 om te geleren - ideaal voor traditionele jam. Laag Methoxyl (LM) pectine geleert via calciumionen in plaats van suiker, waardoor suikerarme of suikervrije confituur mogelijk is.',
  },
  {
    question: 'Waarom is mijn jam soms te waterig?',
    answer: 'Waterige jam komt meestal door onvoldoende pectine (het fruit bevat er van nature te weinig), onvoldoende zuur (pH te hoog voor gelering), of te weinig suiker (voor HM-pectine). Oververdunning met water of te kort koken kunnen ook verhinderen dat de jam opstijft.',
  },
  {
    question: 'Kan ik citroensap gebruiken in plaats van citroenzuurpoeder?',
    answer: 'Ja. Deze rekenmachine rekent citroenzuur om naar citroensapequivalenten. Ongeveer 25 ml citroensap levert dezelfde zuurgraad als 1 g citroenzuur. Citroensap voegt ook een frisse smaak toe aan jam.',
  },
  {
    question: 'Welke vruchten bevatten van nature veel pectine?',
    answer: 'Appels, kweepeer, bramen, veenbessen en kruisbessen zijn van nature rijk aan pectine en hebben vaak geen extra pectine nodig. Onrijp fruit bevat ook meer pectine dan volledig rijp fruit.',
  },
];

const howTo = [
  {
    name: 'Kies uw fruit',
    text: 'Kies het fruit waarmee u jam maakt. Elke vrucht heeft andere natuurlijke pectine- en zuurgraadniveaus die bepalen welke toevoegingen nodig zijn.',
  },
  {
    name: 'Weeg uw voorbereide fruit',
    text: 'Voer het gewicht van uw schoongemaakte, gesneden fruit in grammen in. Nauwkeurig wegen is essentieel voor precisie-jam maken.',
  },
  {
    name: 'Kies uw pectinetype',
    text: 'Kies Klassiek (HM) voor traditionele jam met veel suiker, of Suikerarm (LM) als u een gezondere, suikerverlaagde confituur wilt die door calcium wordt geactiveerd.',
  },
  {
    name: 'Bekijk uw perfecte recept',
    text: 'De rekenmachine geeft exacte grammen pectinepoeder, citroenzuur (of citroensap) en benodigde suiker weer. Voeg deze toe tijdens het koken voor een gegarandeerde gelering.',
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
  slug: 'pectine-jam-berekeningscalculator',
  title: 'Pectine & Jam Berekenaar',
  description: 'Bereken precies hoeveel pectine, citroenzuur en suiker uw fruit nodig heeft voor de perfecte jam - geen waterige of rubberachtige confituur meer.',
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    title: 'Pectine & Jam Berekenaar',
    subtitle: 'Precisie gelchemie voor perfecte confituur',
    fruitLabel: 'Kies Uw Fruit',
    allFruits: 'Alle',
    highPectin: 'Hoog Pectine',
    mediumPectin: 'Gemiddeld Pectine',
    lowPectin: 'Laag Pectine',
    weightLabel: 'Fruitgewicht',
    weightPlaceholder: 'bijv. 1000',
    weightUnitMetric: 'g',
    weightUnitImperial: 'oz',
    pectinTypeLabel: 'Pectinetype',
    pectinHM: 'Klassiek (HM)',
    pectinLM: 'Suikerarm (LM)',
    sugarModeLabel: 'Suikermodus',
    sugarModeAuto: 'Auto',
    sugarModeManual: 'Handmatig',
    sugarLabel: 'Suikergewicht',
    sugarPlaceholder: 'bijv. 650',
    recipeTitle: 'Recept',
    pectinNeeded: 'Pectine',
    citricAcidNeeded: 'Citroenzuur',
    lemonJuiceNeeded: 'Citroensap',
    sugarNeeded: 'Suiker',
    totalYield: 'Totale Opbrengst',
    sugarPercent: 'Suiker',
    sugarLow: 'Laag',
    sugarIdeal: 'Ideaal',
    sugarHigh: 'Hoog',
    sugarOfFruit: 'van fruitgewicht',
    sugarOfTotal: 'van totaal',
    statusPerfect: 'Perfecte Gel',
    statusPerfectDesc: 'Uw verhoudingen zijn in balans. De jam zal prachtig opstijven met een zijdezachte, smeerbare textuur en briljante glans.',
    statusSlightlyThin: 'Iets Te Dun',
    statusSlightlyThinDesc: 'De jam kan zacht opstijven. Overweeg meer pectine toe te voegen of het watergehalte te verlagen voor een stevigere gel.',
    statusTooThin: 'Te Dun - Risico op Waterige Jam',
    statusTooThinDesc: 'Zonder aanpassing zal deze jam waarschijnlijk vloeibaar blijven. Verhoog de suiker (voor HM) of voeg meer pectine toe.',
    statusTooStiff: 'Te Stevig',
    statusTooStiffDesc: 'De gel kan rubberachtig worden. Halveer de pectine of verhoog het fruitgewicht iets.',
    dropTestTitle: 'Koud Bord Test',
    dropTestHow: 'Druppel op een gekoeld bord',
    dropStatusLabel: 'Resultaat',
    dropTestPerfect: 'Zal opstijven. De druppel rimpelt en blijft zitten',
    dropTestThin: 'Waterig. Het glijdt van het bord',
    dropTestStiff: 'Te stevig. Beweegt nauwelijks',
    dropPlateLabel: 'bord',
    dropDropLabel: 'druppel',
    sugarAutoHint: 'automatisch berekend',
    sugarManualHint: 'voer hoeveelheid in',
    unitLabel: 'Meetsysteem',
    metricLabel: 'Metriek (g)',
    imperialLabel: 'Imperiaal (oz)',
    disclaimer: 'Weeg alle ingredienten met een digitale keukenweegschaal voor de beste resultaten. Volumetrische metingen zijn onbetrouwbaar voor jam maken.',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'De Complete Wetenschap van Jam Opstijven: Pectine, Zuur en Suikerbalans',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jam maken is een precies samenspel van scheikunde en koken. In de kern hangt de transformatie van vruchtenpulp naar een stevige, smeerbare gel af van de juiste balans van drie moleculen: <strong>pectine</strong> (het geleermiddel), <strong>zuur</strong> (de katalysator die pectine activeert), en <strong>suiker</strong> (het dehydraterend middel dat water wegtrekt van pectineketens). Zonder de juiste verhoudingen eindigt u met fruitsoep of een rubberachtig blok.',
    },
    {
      type: 'title',
      text: 'Hoe Pectine een Gelnetwerk Vormt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pectine is een complex polysacharide dat voornamelijk bestaat uit galacturonzuureenheden, gevonden in de middenlamel van plantencelwanden. In de natuurlijke staat zijn pectinemoleculen negatief geladen en stoten ze elkaar af, waardoor ze opgelost blijven in het water van het fruit. Om een gel te vormen, moet gelijktijdig aan drie voorwaarden voldaan zijn: (1) er moet voldoende suiker aanwezig zijn om te concurreren voor watermoleculen, waardoor de pectineketens gedehydrateerd worden; (2) de pH moet onder de 3,5 zakken, waardoor de negatieve ladingen geneutraliseerd worden via protonatie van carboxylgroepen; en (3) de temperatuur moet boven de 104-105°C komen om de pectine volledig op te lossen en te activeren. Wanneer deze omstandigheden samenkomen, vormen pectineketens junctiezones - gebieden waar ketens associëren via waterstofbruggen en hydrofobe interacties - waardoor een continu driedimensionaal sponsachtig netwerk ontstaat dat het vruchtensap en de suikersiroop vasthoudt.',
    },
    {
      type: 'title',
      text: 'Hoog Methoxyl (HM) vs. Laag Methoxyl (LM) Pectine',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pectine wordt geclassificeerd op basis van de veresteringsgraad (DE), het percentage carboxylgroepen dat veresterd is met methanol. <strong>Hoog Methoxyl (HM) pectine</strong> (DE > 50%) vereist minimaal 55-65% oplosbare vaste stoffen (suiker) en een pH tussen 2,8 en 3,5 om een gel te vormen. Dit is de klassieke pectine die in traditionele jamrecepten wordt gebruikt. Zonder voldoende suiker vormt HM-pectine een zwakke of niet-bestaande gel. <strong>Laag Methoxyl (LM) pectine</strong> (DE < 50%) geleert via een ander mechanisme: het verknoopt via tweewaardige calciumionen (Ca²⁺) die bruggen slaan tussen vrije carboxylgroepen. LM-pectine kan geleren met weinig tot geen toegevoegde suiker, waardoor het ideaal is voor caloriearme, diabetesvriendelijke of natuurlijk gezoete confituur. Sommige LM-pectines verdragen ook een breder pH-bereik tot 5,5, handig voor zuurarme vruchten zoals vijgen en peren.',
    },
    {
      type: 'title',
      text: 'Natuurlijk Pectinegehalte bij Verschillende Fruitsoorten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Niet alle vruchten zijn gelijk als het om pectine gaat. Vruchten vallen in drie categorieën op basis van hun natuurlijke pectine- en zuurniveaus. Begrijpen waar uw fruit op dit spectrum zit, bepaalt of u moet aanvullen met pectinepoeder of citroenzuur.',
    },
    {
      type: 'table',
      headers: ['Pectineniveau', 'Zuurgraad', 'Voorbeeldvruchten', 'Extra Pectine Nodig'],
      rows: [
        ['Hoog', 'Hoog', 'Appel, Veenbes, Kruisbes', '0% (geen)'],
        ['Hoog', 'Gemiddeld/Laag', 'Kweepeer, Braam', '0% (geen)'],
        ['Gemiddeld', 'Hoog', 'Framboos, Loganbes', '0,3% van fruitgewicht'],
        ['Gemiddeld', 'Gemiddeld', 'Pruim, Abrikoos', '0,3% van fruitgewicht'],
        ['Gemiddeld', 'Laag', 'Bosbes', '0,3% van fruitgewicht'],
        ['Laag', 'Hoog', 'Kers, Druif', '0,6% van fruitgewicht'],
        ['Laag', 'Gemiddeld', 'Perzik, Mango', '0,6% van fruitgewicht'],
        ['Laag', 'Laag', 'Aardbei, Peer, Vijg', '0,6% van fruitgewicht'],
      ],
    },
    {
      type: 'title',
      text: 'De Kritieke Rol van pH bij Jamgelering',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De pH van het jammengsel is misschien wel de meest over het hoofd geziene variabele bij het thuis inmaken. Bij een pH boven 3,8 blijven de carboxylgroepen op pectine geioniseerd (negatief geladen), waardoor elektrostatische afstoting ontstaat die gelvorming verhindert, ongeacht hoeveel suiker of pectine u toevoegt. Naarmate de pH onder 3,5 zakt door toevoeging van citroenzuur of citroensap, worden deze groepen geprotoneerd, waardoor waterstofbrugvorming tussen aangrenzende pectineketens mogelijk wordt. De optimale geleringzone ligt tussen pH 2,8 en 3,2. Onder pH 2,8 wordt de gel bros en kan synerese (uittredend vocht) vertonen. Boven pH 3,5 treedt ook synerese op en is de gel te zwak. Dit is waarom zuurarme vruchten zoals vijgen en aardbeien bijna altijd extra citroenzuur nodig hebben - hun natuurlijke pH is te hoog om pectine goed te activeren.',
    },
    {
      type: 'title',
      text: 'Suikerconcentratie en Het Effect op Gelsterkte',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Suiker heeft twee functies in HM-pectinejam. Ten eerste is het sterk hygroscopisch - het concurreert fel met pectine om watermoleculen, waardoor hydratatieschillen van de pectineketens worden weggetrokken en ze gedwongen worden met elkaar te interageren. Ten tweede verhoogt het het kookpunt van het mengsel, waardoor de jam de insteltemperatuur van 104-105°C kan bereiken. Bij 65% suikerconcentratie zijn pectineketens voldoende gedehydrateerd om een sterke gel te vormen. Onder 60% verzwakt de gel lineair. Boven 68% kan de jam kristalliseren bij afkoeling wanneer suiker de oplosbaarheidsgrens overschrijdt. Voor LM-pectinejam speelt suiker alleen een smaakrol, aangezien gelering afhankelijk is van calciumoverbrugging. Het suikergehalte kan zo laag zijn als 5-10% in LM-pectineconfituur gezoet met niet-voedzame zoetstoffen.',
    },
    {
      type: 'title',
      text: 'Citroenzuur vs. Citroensap: Omrekening en Beste Werkwijzen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Citroenzuur (C₆H₈O₇) is het primaire zuur dat in commerciele jamproductie wordt gebruikt omdat het gestandaardiseerd, smaakloos en precies is. Citroensap bevat ongeveer 5% citroenzuur per gewicht, plus appelzuur en ascorbinezuur (vitamine C). <strong>1 gram puur citroenzuur komt ongeveer overeen met 25 ml vers citroensap</strong> wat betreft pH-verlagend vermogen. Citroensap voegt echter ook vloeistofvolume toe, wat meegerekend moet worden in het totale watergehalte. Gebruik voor de meest consistente resultaten citroenzuurpoeder opgelost in een kleine hoeveelheid water. Bij gebruik van citroensap moet u rekening houden met 20-30 ml extra vloeistof die moet worden ingekookt om het instelpunt te bereiken.',
    },
    {
      type: 'title',
      text: 'De Koud Bord Test: Een Visuele Methode om het Gelpunt te Bepalen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De traditionele koud bord test (ook wel de rimpeltest of schoteltest genoemd) blijft een van de meest betrouwbare methoden voor thuisjam makers. Zet een klein keramisch bord 10 minuten in de vriezer voordat u begint met koken. Wanneer u denkt dat de jam het gelpunt heeft bereikt, laat u een theelepel hete jam op het gekoelde bord vallen en laat u het 30 seconden afkoelen. Duw met uw vingertop tegen de rand van de druppel: als het oppervlak duidelijk rimpelt en de druppel zijn vorm behoudt, is het gelpunt bereikt. Als het vrijuit loopt, blijf dan 2-3 minuten koken en test opnieuw. Deze rekenmachine simuleert die test visueel en toont u of de verhoudingen van uw recept de bordtest zullen doorstaan voordat u zelfs maar begint met koken.',
    },
    {
      type: 'title',
      text: 'Probleemoplossing: Waarom Jam Mislukt en Hoe Het te Herstellen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Waterige jam (niet opgesteven na afkoeling):</strong> De meest voorkomende oorzaak is onvoldoende koken - het mengsel heeft nooit 104-105°C bereikt. Kook de jam opnieuw, voeg 1-2 g citroenzuur per kg fruit toe en test met de koud bord methode. Als alternatief lost u 5 g pectinepoeder op in koud water, klopt u dit door de kokende jam en kookt u nog 2 minuten extra.',
        '<strong>Rubberachtige of te stevige jam:</strong> Te veel pectine toegevoegd ten opzichte van het fruitgewicht, of de jam is te lang gekookt boven 106°C, waardoor het pectinenetwerk degradeert tot een strakke, brosse structuur. Om te redden, voorzichtig opwarmen met 100-200 ml appelsap of water om de pectineconcentratie te verdunnen.',
        '<strong>Synerese (water dat uit de gel treedt):</strong> Dit wijst op overmatig zuur (pH onder 2,8) of suiker boven 68%, waardoor het pectinenetwerk samentrekt en water uitperst. Voeg een kleine hoeveelheid zuiveringszout (natriumbicarbonaat) toe om de pH geleidelijk te verhogen.',
        '<strong>Kristallisatie (korrelige textuur):</strong> Suikerconcentratie overschreed de oplosbaarheid, of onopgeloste suikerkristallen fungeerden als kiemvormingsplaatsen. Roer constant tijdens de laatste kookfase en voeg 1 eetlepel maissiroop of glucose toe, die kristallisatie remt.',
        '<strong>Schimmel op het oppervlak tijdens opslag:</strong> Jam was onvoldoende gekookt (bereikte geen steriele temperatuur), bevatte te weinig suiker (onder 60% voor HM-pectine), of potten waren niet goed gesteriliseerd. Gebruik altijd gesteriliseerde potten en verwerk in een waterbad gedurende 10 minuten.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
