import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Sferificatiebad Calculator Precisie Moleculaire Gastronomie Gids";
const description = "Bereken exacte verhoudingen van natriumalginaat en calciumlactaat voor directe en omgekeerde sferificatie. Corrigeer viscositeit en zuurgraad met xanthaangom en citraat.";

const faq = [
  {
    question: "Wat is het verschil tussen directe en omgekeerde sferificatie?",
    answer: "Bij directe sferificatie wordt natriumalginaat aan de gearomatiseerde basis toegevoegd en in een calciumbad gedruppeld, waardoor een dun vlies ontstaat dat naar binnen blijft geleren. Bij omgekeerde sferificatie wordt calcium aan de basis toegevoegd en in een alginaatbad gedruppeld, waardoor een vlies naar buiten groeit en het geleringsproces stopt wanneer je het afspoelt."
  },
  {
    question: "Waarom worden mijn bollen plat of zakken ze niet?",
    answer: "Als de gearomatiseerde basisvloeistof minder dicht is dan het natriumalginaatbad, blijft deze drijven in plaats van een bol te vormen. Door een kleine hoeveelheid xanthaangom toe te voegen verhoog je de viscositeit van de basis, zodat deze zinkt en perfecte bollen vormt."
  },
  {
    question: "Wat doet natriumcitraat bij sferificatie?",
    answer: "Natriumcitraat is een sequestrant dat calciumionen bindt en de pH verhoogt. Als een basisvloeistof erg zuur is (pH onder 4,5) of calcium bevat, zal het natriumalginaat voortijdig geleren. Citraat toevoegen neutraliseert deze zuurgraad."
  },
  {
    question: "Kan ik elk water gebruiken voor het calciumbad?",
    answer: "Kraanwater met een hoog mineraalgehalte kan ervoor zorgen dat natriumalginaat samenklontert of voortijdig geleert. Gebruik bij voorkeur gedestilleerd water of calciumarm flessenwater."
  }
];

const howTo = [
  {
    name: "Selecteer sferificatiemethode",
    text: "Kies Direct voor dunne, onmiddellijke geling, of Omgekeerd voor vloeistoffen met alcohol, zuivel of calcium."
  },
  {
    name: "Voer vloeistofgewichten in",
    text: "Voer het gewicht van je gearomatiseerde basisvloeistof en het waterbad in je gewenste eenheden in."
  },
  {
    name: "Voeg textuur- en zuurtecorrecties toe",
    text: "Schakel Xanthaangom in als je basisvloeistof dun is, of Natriumcitraat als deze erg zuur is."
  },
  {
    name: "Meet ingrediënten af",
    text: "Weeg de exacte hoeveelheden natriumalginaat, calciumlactaat of chloride, en correctiemiddelen af zoals weergegeven in het overzicht."
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
  slug: 'sferificatiebad-berekenaar',
  title: 'Sferificatiebad Calculator',
  description: 'Bereken exacte verhoudingen van natriumalginaat en calciumlactaat voor directe en omgekeerde sferificatie. Corrigeer viscositeit en zuurgraad met xanthaangom en citraat.',
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    title: "Sferificatiebad Calculator",
    subtitle: "Precieze verhoudingscontrole voor directe en omgekeerde sferificatie",
    unitLabel: "Meetsysteem",
    metricUnit: "Metrisch (g / gram)",
    imperialUnit: "Imperiaal (oz / ounces)",
    methodLabel: "Sferificatiemethode",
    directMethod: "Directe Sferificatie",
    reverseMethod: "Omgekeerde Sferificatie",
    baseWeightLabel: "Gewicht Basisvloeistof",
    bathWeightLabel: "Gewicht Badwater",
    xanthanLabel: "Xanthaangom inschakelen (Viscositeitscorrectie)",
    citrateLabel: "Natriumcitraat inschakelen (Zuurgraad / pH Sequestrant)",
    recipeTitle: "Berekend Receptoverzicht",
    baseGellingAgent: "Gelmiddel voor Basis",
    bathGellingAgent: "Gelmiddel voor Bad",
    xanthanGum: "Xanthaangom (Verdikkingsmiddel)",
    sodiumCitrate: "Natriumcitraat (Buffer)",
    warningLabel: "Oplosbaarheidswaarschuwing",
    warningDesc: "Het vereiste gewicht van het middel ligt dicht bij of boven de oplosbaarheidsgrens voor dit vloeistofvolume. Oplossen kan langer duren of zachtjes verwarmen vereisen.",
    directDesc: "Ideaal voor lichte vloeistoffen met een laag calciumgehalte. Creëert delicate, dunvliesige bollen die onmiddellijk geserveerd moeten worden.",
    reverseDesc: "Ideaal voor zuivel, alcohol, calciumrijke of zure vloeistoffen. Creëert stabiele bollen die na het afspoelen niet verder geleren.",
    sodiumAlginate: "Natriumalginaat",
    calciumChloride: "Calciumchloride",
    calciumLactate: "Calciumlactaat",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'De Wetenschap van Moleculaire Sferificatie en Hydrocolloïdgelering',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sferificatie is een revolutionaire culinaire techniek die een vloeibare kern insluit in een dun, gelerend vlies. Oorspronkelijk ontwikkeld in de industriële verpakkingssector in de jaren 1940, werd het begin deze eeuw aangepast voor de moderne keuken. De onderliggende chemie is gebaseerd op de interacties van hydrocolloïden, met name de vernetting van natriumalginaatpolymeren bij blootstelling aan divalente calciumkationen.',
    },
    {
      type: 'title',
      text: 'De Moleculaire Chemie: Natriumalginaat en Calciumionen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Natriumalginaat is een polysacharide gewonnen uit bruin zeewier, bestaande uit lineaire ketens van bèta-D-mannuronzuur (M-blokken) en alfa-L-guluronzuur (G-blokken). In zijn natriumzoutvorm is het volledig oplosbaar in water en vormt het een viskeuze oplossing. Wanneer calciumionen (zoals calciumchloride of calciumlactaatgluconaat) worden geïntroduceerd, vervangen de divalente calciumionen (Ca2+) de monovalente natriumionen (Na+). Omdat calcium twee positieve ladingen heeft, bindt het aan twee G-blokken op aangrenzende polymeerketens en verbindt ze. Dit proces, wetenschappelijk beschreven als het <strong>eierdozenmodel</strong> van gelering, verbindt de onafhankelijke polysacharideketens tot een star, driedimensionaal hydrogelnentwerk dat water en smaakmoleculen vasthoudt.',
    },
    {
      type: 'title',
      text: 'Directe versus Omgekeerde Sferificatiemechanismen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De twee belangrijkste methoden van sferificatie verschillen in waar het gelmiddel en de calciumzouten worden geplaatst, wat leidt tot verschillende mechanische eigenschappen:',
    },
    {
      type: 'list',
      items: [
        '<strong>Directe Sferificatie:</strong> Natriumalginaat wordt opgelost in de gearomatiseerde basisvloeistof, die vervolgens in een calciumbad (meestal 1,0% calciumchloride) wordt gedruppeld. De gelering begint onmiddellijk op de grenslaag. Omdat calciumionen klein en mobiel zijn, migreren ze continu van het bad naar de kern van de bol, waardoor het gelvlies naar binnen groeit. Als de bol niet onmiddellijk wordt afgespoeld en geserveerd, geleert deze uiteindelijk volledig door en verandert in een vaste, rubberachtige parel.',
        '<strong>Omgekeerde Sferificatie:</strong> Calciumlactaatgluconaat (2,0%) wordt opgelost in de gearomatiseerde basisvloeistof, die vervolgens in een natriumalginaatbad (0,5%) wordt gedruppeld. Omdat alginaatmoleculen groot en langzaam zijn, kunnen ze de nieuw gevormde gelbarrière niet gemakkelijk passeren. In plaats daarvan migreren calciumionen naar buiten in het bad, waardoor het vlies naar buiten groeit. Dit stopt de gelering onmiddellijk zodra de bol uit het bad wordt gehaald en in helder water wordt gespoeld, waardoor een volledig vloeibare kern voor onbepaalde tijd behouden blijft.'
      ],
    },
    {
      type: 'title',
      text: 'Zuurgraad en pH Barrières Overwinnen met Natriumcitraat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Natriumalginaat is zeer gevoelig voor zuur. Wanneer de pH van een gearomatiseerde basisvloeistof onder 4,5 daalt, kunnen de alginaatmoleculen niet goed hydrateren. In plaats van op te lossen, slaan de alginaatketens neer als onoplosbaar alginezuur en vormen ze draderige klonten. Om dit op te lossen gebruiken chefs <strong>natriumcitraat</strong> als buffer. Natriumcitraat neutraliseert de waterstofionen en verhoogt de pH van zure ingrediënten zoals passievrucht of limoensap boven de kritische drempel van 4,5, waardoor het alginaat volledig kan hydrateren en schone, bolvormige structuren kan vormen.',
    },
    {
      type: 'title',
      text: 'Vloeistofdichtheid en Viscositeit Aanpassen met Xanthaangom',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Om een bol te vormen, moet de druppel gearomatiseerde basisvloeistof volledig onderdompelen in het gelbad. Als de gearomatiseerde basisvloeistof minder dicht is dan het bad (zoals een lichte alcohol of sap op waterbasis in een dik natriumalginaatbad tijdens omgekeerde sferificatie), zal deze op het oppervlak drijven en plat worden. Het toevoegen van een minuscule hoeveelheid <strong>xanthaangom</strong> (meestal 0,1% tot 0,2%) verhoogt de viscositeit van de basisvloeistof. Deze extra body geeft de druppel het nodige momentum om in het bad te zinken, zodat de oppervlaktespanning de druppel tot een perfecte bol kan vormen.',
    },
    {
      type: 'table',
      headers: ['Sferificatiemethode', 'Ideale Ingrediënten', 'Vereiste Toevoegingen', 'Bewareigenschappen', 'Groeirichting Gel'],
      rows: [
        ['Directe Methode', 'Calciumarme vruchtensappen, heldere bouillons, zoete siropen', '0,5% Natriumalginaat in basis, 1,0% Calciumchloride in bad', 'Direct serveren, geleert na verloop van tijd volledig', 'Naar binnen (naar het centrum)'],
        ['Omgekeerde Methode', 'Zuivel, alcohol, calciumrijke of sterk zure vloeistoffen', '2,0% Calciumlactaat in basis, 0,5% Natriumalginaat in bad', 'Zeer stabiel, urenlang te bewaren in olie of water', 'Naar buiten (vanaf het centrum)'],
      ],
    },
    {
      type: 'title',
      text: 'Afspoelen en Laatste Conserveringsstappen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Spoel de afgewerkte bollen altijd direct na het verwijderen uit het gelbad in een bad met schoon, koud water. Dit verwijdert achtergebleven calcium of alginaat van de buitenkant, stopt de chemische reactie en voorkomt onaangename smaken (vooral de licht bittere smaak van calciumchloride). Voor opslag kun je de bollen onderdompelen in een vloeistof met een overeenkomstige dichtheid (zoals de gearomatiseerde basisvloeistof zonder toevoegingen of een lichte suikersiroop) om te voorkomen dat water door osmose door het vlies beweegt, waardoor de bollen zouden kunnen krimpen of barsten.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
