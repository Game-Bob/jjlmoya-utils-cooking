import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Emulsiestabiliteit en Olielimiet Calculator";
const description = "Ontdek precies hoeveel olie je mayonaise, aioli of vinaigrette aankan voordat hij breekt. Voorkom gebroken sauzen met onze gratis emulsiestabiliteit calculator.";
const faq = [
  {
    question: "Hoeveel olie kan ik aan mijn mayonaise toevoegen voordat hij breekt?",
    answer: "Dat hangt af van de emulgator. Eigeel ondersteunt tot ~78% olie (ongeveer 3,5x het watervolume), mosterd tot 70%, sojalecithine tot 82% en polysorbaat tot 85%. Gebruik de calculator hierboven om het exacte maximum voor jouw specifieke hoeveelheden te krijgen."
  },
  {
    question: "Waarom is mijn emulsie gebroken of gescheiden?",
    answer: "Een emulsie breekt wanneer de olievolumefractie de maximale pakkingslimiet van de emulgator overschrijdt. Op dat punt worden de oliedruppeltjes zo strak samengedrukt dat ze samensmelten en het mengsel scheidt. Dit gebeurt onmiddellijk - het is geen geleidelijk proces."
  },
  {
    question: "Hoe repareer ik een gebroken mayonaise of aioli?",
    answer: "Begin met een vers eigeel of een eetlepel warm water in een schone kom. Druppel het gebroken mengsel er langzaam bij terwijl je constant klopt, precies zoals je rauwe olie zou toevoegen. De calculator hierboven vertelt je precies hoeveel water of eigeel je nodig hebt."
  },
  {
    question: "Kan te snel olie toevoegen een emulsie doen breken?",
    answer: "Te snel olie toevoegen kan de emulgator tijdelijk overladen, maar de echte oorzaak van breken is altijd een verkeerde fasenverhouding. Als je oliefractie onder de limiet van de emulgator blijft, blijft de emulsie stabiel, ongeacht de snelheid. Als het de limiet overschrijdt, is breken onvermijdelijk."
  },
  {
    question: "Wat is het verschil tussen eigeel en mosterd als emulgatoren?",
    answer: "Eigeel (78% max olie) bevat lecithine en lipoproteinen die een robuuste film rond druppeltjes vormen. Mosterd (70% max olie) vertrouwt op slijmstoffen en eiwitten - het is zwakker maar voegt smaak toe. Sojalecithine (82%) en polysorbaat (85%) zijn zeer efficiente industrieele emulgatoren."
  }
];

const howTo = [
  {
    name: "Kies je emulgator",
    text: "Selecteer de emulgator in je recept - eigeel voor klassieke mayo, mosterd voor vinaigrettes, of sojalecithine/polysorbaat voor modernistische keuken. Elke emulgator heeft een andere maximale olielimiet."
  },
  {
    name: "Voer je waterfasevolume in",
    text: "Vul het totale aantal milliliters van je waterige ingredienten in: water, azijn, citroensap, wijn of andere vloeistoffen op waterbasis. De calculator telt automatisch het watergehalte van je gekozen emulgator erbij."
  },
  {
    name: "Stel je olievolume in",
    text: "Voer de hoeveelheid olie in die je wilt gebruiken. Gebruik de schuifregelaar of typ de waarde. De calculator toont meteen of deze hoeveelheid een stabiele emulsie oplevert of dat hij zal breken."
  },
  {
    name: "Lees het stabiliteitsresultaat en herstel indien nodig",
    text: "Controleer de olievolumefractiemeter. Bij stabiel kun je aan de slag. Bij gebroken vertelt het herstelpaneel je precies hoeveel water (in ml) of hoeveel extra eierdooiers je moet toevoegen om het evenwicht te herstellen."
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
  slug: 'emulsiestabiliteit-calculator',
  title: 'Emulsiestabiliteit en Olielimiet Calculator',
  description: 'Ontdek precies hoeveel olie je mayonaise, aioli of vinaigrette aankan voordat hij breekt. Voorkom gebroken sauzen met onze gratis emulsiestabiliteit calculator.',
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    title: 'Emulsiestabiliteitsanalyse',
    subtitle: 'Hoeveel olie kan jouw saus aan voordat hij breekt?',
    waterLabel: 'Waterfase (ml)',
    oilLabel: 'Olievolume (ml)',
    emulsifierLabel: 'Type Emulgator',
    yolkOption: 'Eigeel',
    mustardOption: 'Mosterd',
    soyLecithinOption: 'Sojalecithine',
    polysorbateOption: 'Polysorbaat',
    stableStatus: 'Stabiele Emulsie',
    brokenStatus: 'Gebroken Emulsie',
    ratioLabel: 'Olievolumefractie',
    maxLimitLabel: 'Maximale Olielimiet',
    fixTitle: 'Herstelstrategie',
    waterFixText: 'Voeg water toe om de fasenbalans te herstellen:',
    yolkFixText: 'Gebruik eventueel extra eigeel:',
    idealRangeText: 'Het ideale bereik ligt onder de kritische pakkingslimiet van 74% tot 80%.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Hoeveel Olie Kan een Mayonaise of Aioli Aan Voor Hij Breekt?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Elke kok heeft zich dit afgevraagd: <strong>waarom is mijn mayonaise gebroken?</strong> Het antwoord is eenvoudiger dan het lijkt. Een emulsie - of het nu een klassieke aioli, een romige vinaigrette of een modernistisch schuim is - kan maar een beperkte hoeveelheid olie bevatten voordat hij instort. Onze <strong>emulsiestabiliteit calculator</strong> vertelt je precies waar dat breekpunt ligt, op basis van jouw specifieke ingredienten en porties.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '78%',
          label: 'Eigeel Max Olie',
          icon: 'mdi:egg-outline'
        },
        {
          value: '85%',
          label: 'Polysorbaatlimiet',
          icon: 'mdi:flask-outline'
        },
        {
          value: '74%',
          label: 'Theoretische Pakking',
          icon: 'mdi:sphere'
        },
        {
          value: '15 ml',
          label: 'Watergehalte Eigeel',
          icon: 'mdi:water'
        }
      ]
    },
    {
      type: 'title',
      text: 'De Wetenschap: Waarom Emulsies Breken',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Een culinaire emulsie werkt door kleine oliedruppeltjes te verspreiden door een continue waterfase. <strong>Emulgatoren</strong> - zoals de lecithine in eigeel, de slijmstoffen in mosterd of synthetische oppervlakteactieve stoffen zoals polysorbaat - bedekken elk druppeltje en voorkomen dat het samensmelt met zijn buren.'
    },
    {
      type: 'paragraph',
      html: 'Het breekpunt wordt bepaald door pure geometrie. Oliedruppeltjes gedragen zich als kleine bolletjes die samengepakt zijn. Het maximale volume aan bollen dat in een bepaalde ruimte past - bekend als <strong>Keplers vermoeden</strong> - is ongeveer 74%. In echte keukensystemen kan dit met krachtige emulgatoren worden opgerekt tot 80-85%, maar daarboven worden de druppeltjes zo strak samengedrukt dat ze samensmelten en de emulsie onmiddellijk instort.'
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Eigeel',
          icon: 'mdi:egg-outline',
          description: 'De klassieke mayonaise-emulgator. Bevat lecithine en lipoproteinen.',
          highlight: true,
          points: [
            'Max olie: 78%',
            '~15 ml water per eigeel',
            'Geeft rijkdom en kleur',
            'Beste voor mayo en aioli'
          ]
        },
        {
          title: 'Mosterd',
          icon: 'mdi:shaker-outline',
          description: 'Vertrouwt op slijmstoffen en zaadeiwitten. Geeft een pittige smaak.',
          points: [
            'Max olie: 70%',
            '~10 ml watergehalte',
            'Zwakker emulgerend vermogen',
            'Ideaal voor vinaigrettes'
          ]
        },
        {
          title: 'Sojalecithine',
          icon: 'mdi:leaf',
          description: 'Hooggeconcentreerde plantaardige oppervlakteactieve stof.',
          points: [
            'Max olie: 82%',
            '~5 ml watergehalte',
            'Neutraal smaakprofiel',
            'Modernistische keuken basics'
          ]
        },
        {
          title: 'Polysorbaat',
          icon: 'mdi:flask-outline',
          description: 'Synthetische emulgator met maximale oppervlakteactieve capaciteit.',
          points: [
            'Max olie: 85%',
            '~2 ml watergehalte',
            'Hoogste olietolerantie',
            'Gebruikt in schuimen en airs'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emulgator', 'Max Olie %', 'Olie per 100 ml Water', 'Beste Gebruik'],
      rows: [
        ['Eigeel', '78%', '~355 ml', 'Mayonaise, aioli, hollandaisesaus'],
        ['Mosterd', '70%', '~233 ml', 'Vinaigrettes, lichte dressings'],
        ['Sojalecithine', '82%', '~456 ml', 'Modernistische sauzen, schuimen'],
        ['Polysorbaat', '85%', '~567 ml', 'Stabiele schuimen, experimentele keuken']
      ]
    },
    {
      type: 'title',
      text: 'Hoe Herstel je een Gebroken Emulsie Stap voor Stap',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Als je mayonaise of saus al gebroken is, <strong>gooi het dan niet weg</strong>. De reparatie is eenvoudig - maar alleen als je de fasenverhouding begrijpt. Harder mixen helpt niet; je moet meer van de continue (water)fase toevoegen.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Veelvoorkomende Tekenen dat je Emulsie Op Breekpunt Staat',
      html: 'Let op <strong>verdikking gevolgd door plotselinge verdunning</strong>, een <strong>glanzend oppervlak dat korrelig wordt</strong> of zichtbare olie die zich ophoopt aan de randen. Als je een van deze signalen ziet, stop dan onmiddellijk met het toevoegen van olie en klop een theelepel koud water erdoor voordat je verder gaat.'
    },
    {
      type: 'title',
      text: 'Praktische Tips voor Elke Keer Perfecte Emulsies',
      level: 3
    },
    {
      type: 'tip',
      title: 'Temperatuur is Belangrijk',
      html: 'Alle ingredienten moeten op <strong>kamertemperatuur</strong> zijn. Koude eieren of koude olie verhogen het risico op breken dramatisch. Haal de ingredienten 30 minuten van tevoren uit de koelkast.'
    },
    {
      type: 'tip',
      title: 'Het Water Vangnet',
      html: 'Als je recept niet genoeg zuur bevat (azijn, citroensap), voeg dan <strong>een theelepel koud water per eigeel</strong> toe voordat je begint met het toevoegen van olie. Dit extra water creert een grotere veiligheidsmarge.'
    },
    {
      type: 'tip',
      title: 'Herstel een Gebroken Batch',
      html: 'Doe een vers eigeel in een schone kom. Klop het met een theelepel water. Druppel vervolgens <strong>het gebroken mengsel er zo langzaam mogelijk bij</strong>, precies alsof het rauwe olie is. Zodra het opnieuw emulgeert, kun je de rest sneller toevoegen.'
    },
    {
      type: 'title',
      text: 'Culinaire Emulsie Verklarende Woordenlijst',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Continue Fase',
          definition: 'De vloeistof die de druppeltjes omringt - meestal water, azijn of citrussap in olie-in-water-emulsies zoals mayonaise.'
        },
        {
          term: 'Gedispergeerde Fase',
          definition: 'De vloeistof die is opgebroken in kleine druppeltjes - de olie in de meeste culinaire emulsies. Hoe meer je toevoegt, hoe dichter de druppeltjes op elkaar gepakt zitten.'
        },
        {
          term: 'Volumefractie',
          definition: 'De verhouding van olievolume tot totaalvolume. Bij ongeveer 74-85% (afhankelijk van de emulgator) bereikt de emulsie zijn geometrische breekpunt.'
        },
        {
          term: 'Coalescentie',
          definition: 'Wanneer twee of meer oliedruppeltjes samensmelten tot een grotere. Dit is het microscopische proces dat een zichtbare emulsiebreek veroorzaakt.'
        },
        {
          term: 'Fase Inversie',
          definition: 'Het punt waarop een olie-in-water-emulsie omslaat naar water-in-olie - zoals gebeurt bij het maken van boter uit room. Dit is de ultieme faalmodus.'
        }
      ]
    },
    {
      type: 'paragraph',
      html: 'Of je nu een klassieke Franse mayonaise, een knoflookachtige aioli, een stabiele vinaigrette maakt of experimenteert met modernistische hydrocolloiden, het begrijpen van de <strong>olie-waterverhouding</strong> is veruit de belangrijkste factor. Onze calculator doet het rekenwerk zodat jij met vertrouwen kunt koken.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
