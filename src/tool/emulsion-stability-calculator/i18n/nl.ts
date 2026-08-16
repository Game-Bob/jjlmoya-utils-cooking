import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Emulsiestabiliteit en Olie Limiet Calculator";
const description = "Ontdek exact hoeveel olie uw mayonaise, aioli of vinaigrette kan verdragen voordat deze schift. Voorkom geschifte sauzen met onze gratis emulsiestabiliteit calculator.";

const faq = [
  {
    question: "Hoeveel olie kan ik aan mijn mayonaise toevoegen voordat deze schift?",
    answer: "Dit hangt af van de emulsifier. Eigeel ondersteunt tot ~78% olie (ongeveer 3,5 keer het watervolume), mosterd tot 70%, sojalecitine tot 82% en polysorbaat tot 85%. Gebruik de calculator hierboven voor het exacte maximum voor uw specifieke hoeveelheden."
  },
  {
    question: "Waarom is mijn emulsie geschift of gescheiden?",
    answer: "Een emulsie schift wanneer de volumefractie van olie de maximale pakkingslimiet van de emulsifier overschrijdt. Op dat punt worden de oliedruppels zo dicht op elkaar gedrukt dat ze samensmelten en het mengsel scheidt. Dit gebeurt onmiddellijk - het is geen geleidelijk proces."
  },
  {
    question: "Hoe herstel ik een geschifte mayonaise of aioli?",
    answer: "Begin met een vers eigeel of een eetlepel warm water in een schone kom. Giet het geschifte mengsel er langzaam bij terwijl u voortdurend klopt, precies zoals bij het toevoegen van olie. De calculator hierboven vertelt u exact hoeveel water of eigeel u nodig heeft."
  },
  {
    question: "Veroorzaakt te snel olie toevoegen dat een emulsie schift?",
    answer: "Te snel olie toevoegen kan de emulsifier tijdelijk overbelasten, maar de werkelijke oorzaak van schiften is altijd een onjuiste faseverhouding. Als uw oliefractie onder de limiet van de emulsifier blijft, blijft de emulsie stabiel, ongeacht de snelheid. Als u de limiet overschrijdt, is schiften onvermijdelijk."
  },
  {
    question: "Wat is het verschil tussen eigeel en mosterd als emulsifiers?",
    answer: "Eigeel (max 78% olie) bevat lecitine en lipoproteïnen die een robuuste film rond de druppels vormen. Mosterd (max 70% olie) vertrouwt op slijmstoffen en eiwitten - het is zwakker maar voegt smaak toe. Sojalecitine (82%) en polysorbaat (85%) zijn zeer efficiënte industriële emulsifiers."
  }
];

const howTo = [
  {
    name: "Selecteer uw emulsifier",
    text: "Kies de emulsifier in uw recept - eigeel voor klassieke mayonaise, mosterd voor vinaigrettes, of sojalecitine/polysorbaat voor modernistische gerechten. Elk stelt een andere maximale olielimiet in."
  },
  {
    name: "Voer het volume van uw waterfase in",
    text: "Voer de totale milliliters van uw waterige ingrediënten in: water, azijn, citroensap, wijn of een andere vloeistof op waterbasis. De calculator voegt automatisch het watergehalte van uw gekozen emulsifier toe."
  },
  {
    name: "Stel uw olievolume in",
    text: "Voer de hoeveelheid olie in die u wilt gebruiken. Gebruik de schuifregelaar of typ de waarde in. De calculator toont direct of deze hoeveelheid een stabiele emulsie oplevert of laat schiften."
  },
  {
    name: "Lees het stabiliteitsresultaat en corrigeer indien nodig",
    text: "Controleer de indicator voor de olievakfractie. Als deze stabiel is, bent u klaar. Als deze geschift is, vertelt het reddingspaneel u precies hoeveel water (in ml) of hoeveel extra eigeel u moet toevoegen om het evenwicht te herstellen."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo' as const,
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
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'emulsie-stabiliteit-calculator',
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    title: 'Emulsiestabiliteit Analysator',
    subtitle: 'Hoeveel olie kan uw saus verdragen voordat deze schift?',
    waterLabel: 'Waterfase (ml)',
    oilLabel: 'Olievolume (ml)',
    emulsifierLabel: 'Type Emulsifier',
    yolkOption: 'Eigeel',
    mustardOption: 'Mosterd',
    soyLecithinOption: 'Sojalecitine',
    polysorbateOption: 'Polysorbaat',
    stableStatus: 'Stabiele Emulsie',
    brokenStatus: 'Geschifte Emulsie',
    ratioLabel: 'Olievolumefractie',
    maxLimitLabel: 'Maximale Olielimiet',
    fixTitle: 'Reddingsstrategie',
    waterFixText: 'Voeg water toe om de fasebalans te herstellen:',
    yolkFixText: 'Of gebruik extra eigeel:',
    idealRangeText: 'Het ideale bereik ligt onder de kritische pakkingslimiet van 74% tot 80%.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Hoeveel Olie Kan een Mayonaise of Aioli Verdragen Voordat Deze Schift?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Elke kok heeft zichzelf deze vraag gesteld: <strong>waarom is mijn mayonaise geschift?</strong> Het antwoord is simpeler dan het lijkt. Een emulsie - of het nu een klassieke aioli, een romige vinaigrette of een modernistisch schuim is - kan slechts een eindige hoeveelheid olie bevatten voordat deze instort. Onze <strong>emulsiestabiliteit calculator</strong> toont u precies waar dat breekpunt ligt, op basis van uw specifieke ingrediënten en porties.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '78%', label: 'Eigeel Max Olie', icon: 'mdi:egg-outline' },
        { value: '85%', label: 'Polysorbaat Limiet', icon: 'mdi:flask-outline' },
        { value: '74%', label: 'Theoretische Pakking', icon: 'mdi:sphere' },
        { value: '15 ml', label: 'Water in Eigeel', icon: 'mdi:water' }
      ]
    },
    {
      type: 'list',
      items: [
        '<strong>U voegt de olie te snel toe</strong> - Snelheid is zelden de echte oorzaak. Als de oliefractie onder de limiet van de emulsifier blijft, houdt de emulsie stand, hoe snel u ook giet.',
        '<strong>Uw ingrediënten zijn te koud</strong> - Koude eieren of koude olie verhogen de viscositeit en maken druppelvorming moeilijker. Breng ingrediënten altijd op kamertemperatuur.',
        '<strong>U heeft de olielimiet van uw emulsifier overschreden</strong> - Elke emulsifier heeft een maximale pakkingsfractie. Eigeel tot 78%, mosterd 70%, sojalecitine 82% en polysorbaat 85%.',
        '<strong>Uw waterfase is te klein</strong> - Zonder voldoende water om de oliedruppels te omhullen, kunnen ze nergens heen behalve samensmelten.'
      ]
    },
    {
      type: 'title',
      text: 'Welke emulsifier moet u gebruiken? Een praktische vergelijking',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Het kiezen van de juiste emulsifier hangt af van uw recept, smaakprofiel en gewenste oliecapaciteit. Zo verhouden de vier meest voorkomende culinaire emulsifiers zich tot elkaar.'
    },
    {
      type: 'proscons',
      title: 'Eigeel',
      items: [
        { pro: 'Maximale smaakcompatibiliteit voor klassieke sauzen', con: 'Voegt cholesterol en eismaak toe' },
        { pro: 'Bevat lecitine en lipoproteïnen voor robuuste emulsies', con: 'Vereist zorgvuldige temperatuurcontrole' },
        { pro: 'Voegt natuurlijke kleur en rijkdom toe', con: 'Niet geschikt voor veganistische bereidingen' },
        { pro: 'Werkt tot 78% oliefractie', con: 'Beperkt tot ongeveer 15 ml waterbijdrage per eigeel' }
      ]
    },
    {
      type: 'proscons',
      title: 'Mosterd',
      items: [
        { pro: 'Voegt pittige smaak en complexiteit toe aan dressings', con: 'Lagere max oliecapaciteit (70%)' },
        { pro: 'Breed verkrijgbaar en gemakkelijk te gebruiken', con: 'Zwakker emulgerend vermogen dan eigeel' },
        { pro: 'Werkt goed op kamertemperatuur', con: 'Smaak kan botsen met delicate sauzen' },
        { pro: 'Ideaal voor snelle vinaigrettes', con: 'Niet geschikt voor neutraal smakende emulsies' }
      ]
    },
    {
      type: 'proscons',
      title: 'Sojalecitine',
      items: [
        { pro: 'Hoge olietolerantie (82%) voor stabiele sauzen', con: 'Vereist nauwkeurig wegen' },
        { pro: 'Neutrale smaak verandert recepten niet', con: 'Minder verefelijk dan eigeel' },
        { pro: 'Plantaardig en veganistisch vriendelijk', con: 'Geen standaard keukenkastjesartikel voor de meeste thuiskoks' },
        { pro: 'Werkt met kleine watervolumes', con: 'Kan een licht kunstmatige textuur creëren' }
      ]
    },
    {
      type: 'proscons',
      title: 'Polysorbaat',
      items: [
        { pro: 'Hoogste oliecapaciteit van elke emulsifier (85%)', con: 'Synthetisch additief, niet natuurlijk' },
        { pro: 'Creëert ultra-stabiele schuimen en airs', con: 'Moeilijk verkrijgbaar voor thuisgebruik' },
        { pro: 'Werkt met een minimale waterfase', con: 'Vereist een weegschaal voor nauwkeurige dosering' },
        { pro: 'Ideaal voor modernistische en experimentele gerechten', con: 'Overheersend bij overmatig gebruik' }
      ]
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Eigeel',
          icon: 'mdi:egg-outline',
          description: 'De klassieke mayonaise-emulsifier. Bevat lecitine en lipoproteïnen.',
          highlight: true,
          points: ['Max olie: 78%', '~15 ml water per eigeel', 'Voegt rijkdom en kleur toe', 'Beste voor mayo en aioli']
        },
        {
          title: 'Mosterd',
          icon: 'mdi:shaker-outline',
          description: 'Vertrouwt op slijmstoffen en zaadeiwitten. Voegt pittige smaak toe.',
          points: ['Max olie: 70%', '~10 ml watergehalte', 'Zwakker emulgerend vermogen', 'Ideaal voor vinaigrettes']
        },
        {
          title: 'Sojalecitine',
          icon: 'mdi:leaf',
          description: 'Geconcentreerde plantaardige surfactant.',
          points: ['Max olie: 82%', '~5 ml watergehalte', 'Neutraal smaakprofiel', 'Standaard in modernistische keuken']
        },
        {
          title: 'Polysorbaat',
          icon: 'mdi:flask-outline',
          description: 'Synthetische emulsifier met maximale surfactantcapaciteit.',
          points: ['Max olie: 85%', '~2 ml watergehalte', 'Hoogste olietolerantie', 'Gebruikt in schuimen en airs']
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emulsifier', 'Max Olie %', 'Olie per 100 ml Water', 'Beste Toepassing'],
      rows: [
        ['Eigeel', '78%', '~355 ml', 'Mayonaise, aioli, hollandaise'],
        ['Mosterd', '70%', '~233 ml', 'Vinaigrettes, lichte dressings'],
        ['Sojalecitine', '82%', '~456 ml', 'Modernistische sauzen, schuimen'],
        ['Polysorbaat', '85%', '~567 ml', 'Stabiele schuimen, experimentele gerechten']
      ]
    },
    {
      type: 'title',
      text: 'De Wetenschap: Waarom Emulsies Schiften en de Kepler-vermoeden in de Keuken',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Een culinaire emulsie werkt door kleine oliedruppels te dispergeren in een continue waterfase. <strong>Emulsifiers</strong> - zoals lecitine in eigeel, slijmstoffen in mosterd of synthetische surfactanten zoals polysorbaat - omhullen elke druppel en voorkomen dat deze samensmelt met buren.'
    },
    {
      type: 'paragraph',
      html: 'Het breekpunt wordt bepaald door pure geometrie. Oliedruppels gedragen zich als kleine opgestapelde bollen. Het maximale volume van bollen dat in een gegeven ruimte past - bekend als het <strong>Kepler-vermoeden</strong> - is ongeveer 74%. In echte keukensystemen kan dit worden uitgerekt tot 80-85% met krachtige emulsifiers, maar daarboven worden de druppels zo samengedrukt dat ze samensmelten en de emulsie onmiddellijk instort.'
    },
    {
      type: 'card',
      columns: 2,
      items: [
        {
          icon: 'mdi:egg-outline',
          title: 'Klassieke Mayonaise & Aioli',
          html: 'Gebruik <strong>eigeel</strong> tot 78% olie. Begin met één eigeel per kopje olie. Voeg een theelepel water of citroensap toe voordat u olie giet voor een bredere veiligheidsmarge.'
        },
        {
          icon: 'mdi:shaker-outline',
          title: 'Vinaigrettes & Lichte Dressings',
          html: 'Gebruik <strong>mosterd</strong> tot 70% olie. De slijmstoffen in mosterd bieden voldoende emulsificatie voor een tijdelijke dressing.'
        },
        {
          icon: 'mdi:leaf',
          title: 'Modernistische Sauzen & Stabiele Schuimen',
          html: 'Gebruik <strong>sojalecitine</strong> tot 82% olie. Ideaal voor neutraal smakende emulsies waar u wilt dat de olie- en zuursmaak doorschijnt.'
        },
        {
          icon: 'mdi:flask-outline',
          title: 'Experimentele Schuimen & Airs',
          html: 'Gebruik <strong>polysorbaat</strong> tot 85% olie. De eerste keuze voor modernistische technieken die maximale oliebelasting en schuimstabiliteit vereisen.'
        }
      ]
    },
    {
      type: 'title',
      text: 'Stap voor Stap een Geschifte Emulsie Redden',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Als uw mayonaise of saus al is geschift, <strong>gooi deze dan niet weg</strong>. De oplossing is eenvoudig - maar alleen als u de faseverhouding begrijpt. Harder kloppen helpt niet; u moet meer continue fase (water) toevoegen.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '3 Veelvoorkomende Tekenen dat Uw Emulsie Gaat Schiften',
      html: 'Let op <strong>indikken gevolgd door plotseling verdunnen</strong> als eerste waarschuwing. Kijk vervolgens naar een <strong>glanzend oppervlak dat korrelig wordt</strong> of <strong>zichtbare olie die zich aan de randen verzamelt</strong>. Als u een van deze ziet, stop dan direct met olie toevoegen en klop er een theelepel koud water door voordat u verdergaat.'
    },
    {
      type: 'title',
      text: 'Praktische Tips voor Elke Keer Perfecte Emulsies',
      level: 3
    },
    {
      type: 'message',
      html: '<strong>De gouden regel:</strong> De verhouding tussen olie en water is belangrijker dan techniek, temperatuur of klopsnelheid. Gebruik onze calculator om uw exacte olielimiet te vinden voordat u begint te kloppen.'
    },
    {
      type: 'tip',
      title: 'Temperatuur is Belangrijk',
      html: 'Alle ingrediënten moeten op <strong>kamertemperatuur</strong> zijn. Koude eieren of koude olie verhogen het risico op schiften aanzienlijk. Haal ingrediënten 30 minuten voor aanvang uit de koelkast.'
    },
    {
      type: 'tip',
      title: 'Het Water Veiligheidsnet',
      html: 'Als uw recept niet genoeg zuur (azijn, citroensap) bevat, voeg dan <strong>één theelepel koud water per eigeel</strong> toe voordat u olie begint toe te voegen. Dit extra water creëert een bredere veiligheidsmarge.'
    },
    {
      type: 'tip',
      title: 'Een Geschifte Batch Herstellen',
      html: 'Doe een vers eigeel in een schone kom. Klop het met een theelepel water. Giet vervolgens <strong>het geschifte mengsel zo langzaam mogelijk erbij</strong>, precies alsof het rauwe olie is. Zodra het weer emulgeert, kunt u de rest sneller toevoegen.'
    },
    {
      type: 'title',
      text: 'Culinaire Emulsie Woordenlijst',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Continue Fase',
          definition: 'De vloeistof die de druppels omringt - meestal water, azijn of citrussap in olie-in-water emulsies zoals mayonaise.'
        },
        {
          term: 'Gedispergeerde Fase',
          definition: 'De vloeistof die is opgedeeld in kleine druppels - olie in de meeste culinaire emulsies. Hoe meer u toevoegt, hoe dichter de druppels op elkaar zitten.'
        },
        {
          term: 'Volumefractie',
          definition: 'De verhouding van olievolume tot het totale volume. Bij ongeveer 74-85% (afhankelijk van de emulsifier) bereikt de emulsie zijn geometrische breekpunt.'
        },
        {
          term: 'Coalescentie',
          definition: 'Wanneer twee of meer oliedruppels samensmelten tot één grotere druppel. Dit is het microscopische proces dat een zichtbare schifting veroorzaakt.'
        },
        {
          term: 'Fase-inversie',
          definition: 'Het punt waarop een olie-in-water emulsie omslaat naar water-in-olie - zoals gebeurt bij het maken van boter uit room. Dit is de ultieme faalmodus.'
        }
      ]
    },
    {
      type: 'summary',
      title: 'Kernpunten voor Stabiele Emulsies',
      items: [
        'Elke emulsifier heeft een maximale oliefractie: eigeel 78%, mosterd 70%, sojalecitine 82%, polysorbaat 85%.',
        'Het breekpunt wordt bepaald door geometrie (Kepler-vermoeden op 74%), niet door klopsnelheid.',
        'Begin altijd met ingrediënten op kamertemperatuur en voeg een kleine hoeveelheid water toe als veiligheidsbuffer.',
        'Een geschifte emulsie kan worden gered door verse emulsifier en meer waterfase toe te voegen, niet door harder te kloppen.',
        'Gebruik onze emulsiestabiliteit calculator hierboven om de exacte olielimiet voor uw ingrediënten te krijgen.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
