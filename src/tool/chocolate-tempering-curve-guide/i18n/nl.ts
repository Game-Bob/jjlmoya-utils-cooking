import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Chocolade tempereercurve en entmethode gids";
const description = "Beheers chocolade tempereren thuis. Bereken het vereiste gewicht aan entschocolade (callets) en volg stapsgewijze thermodynamische temperatuurcurves voor donkere, melk- en witte chocolade.";
const faq = [
  {
    "question": "Wat is chocolade tempereren ?",
    "answer": "Chocolade tempereren is het proces van het gecontroleerd verwarmen, afkoelen en voorzichtig weer verwarmen van chocolade om de kristallisatie van de cacaoboter te beheersen. Dit dwingt de vetmoleculen om uit te kristalliseren in de stabiele V-vorm (Bèta). Dit geeft de chocolade een glans, een krokante knak en voorkomt dat deze snel smelt bij kamertemperatuur."
  },
  {
    "question": "Wat is de entmethode ?",
    "answer": "De entmethode (seeding) houdt in dat u een deel van de chocolade smelt en vervolgens vaste, reeds getempereerde stukjes chocolade (ent-callets) toevoegt tijdens de afkoelfase. Deze vaste stukjes dienen als structuurmal die de gesmolten vetmoleculen begeleidt om zich in de gewenste V-kristalvorm te nestelen, zonder dat er een marmeren plaat nodig is."
  },
  {
    "question": "Waarom heeft mijn chocolade witte strepen (vetbloem) ?",
    "answer": "Witte strepen of vlekken worden vetbloem (fat bloom) genoemd. Dit gebeurt wanneer chocolade niet correct is getempereerd, waardoor instabiele cacaoboterkristallen naar het oppervlak migreren en daar opnieuw kristalliseren. Het is nog steeds veilig om te eten, maar verliest zijn glans en structuur."
  },
  {
    "question": "Kan ik chocolade die al vetbloem heeft opnieuw tempereren ?",
    "answer": "Ja. Vetbloem is een puur fysieke scheiding van vet- of suikerkristallen, geen chemisch bederf. Door de chocolade volledig te smelten tot de juiste smelttemperatuur (ca. 45-50°C) lossen alle foutieve kristalstructuren op, zodat u het tempereerproces helemaal opnieuw kunt starten."
  },
  {
    "question": "Hoe beïnvloeden luchtvochtigheid en keukentemperatuur het tempereren ?",
    "answer": "Chocolade is uiterst gevoelig voor de omgeving. De ideale keukentemperatuur ligt tussen 18°C en 22°C met een relatieve luchtvochtigheid onder 50%. Een te hoge luchtvochtigheid leidt tot condensatie op de chocolade, wat suikerbloem veroorzaakt of de chocolade doet klonteren tot een dikke, onwerkbare pasta."
  },
  {
    "question": "Kan ik gewone chocoladechips uit de supermarkt gebruiken ?",
    "answer": "Standaard chocoladechips uit de supermarkt bevatten vaak extra stabilisatoren en minder cacaoboter om hun vorm te behouden tijdens het bakken. Voor een perfect glanzend resultaat met een krokante knak wordt het gebruik van professionele couverture met minstens 31% cacaoboter ten zeerste aanbevolen."
  }
];

const howTo = [
  {
    "name": "Chocoladesoort kiezen",
    "text": "Selecteer donkere, melk- of witte chocolade om de specifieke temperatuurgrenzen te laden."
  },
  {
    "name": "Totaal gewicht invoeren",
    "text": "Voer het gewenste totaal gewicht van de getempereerde chocolade in."
  },
  {
    "name": "Smeltfase",
    "text": "Smelt 75% of de chocolade (volgens berekening) tot de doeltemperatuur (bijv. 50C voor puur) om alle bestaande kristalstructuren op te lossen."
  },
  {
    "name": "Afkoel- & Entfase",
    "text": "Laat de gesmolten chocolade al roerend afkoelen terwijl u de resterende 25% vaste ent-callets toevoegt tot de afkoeltemperatuur is bereikt."
  },
  {
    "name": "Werkfase",
    "text": "Verwarm de chocolade voorzichtig tot de werktemperatuur om eventueel overgebleven instabiele kristallen op te lossen voor gebruik."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat is chocolade tempereren ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chocolade tempereren is het proces van het gecontroleerd verwarmen, afkoelen en voorzichtig weer verwarmen van chocolade om de kristallisatie van de cacaoboter te beheersen. Dit dwingt de vetmoleculen om uit te kristalliseren in de stabiele V-vorm (Bèta). Dit geeft de chocolade een glans, een krokante knak en voorkomt dat deze snel smelt bij kamertemperatuur."
      }
    },
    {
      "@type": "Question",
      "name": "Wat is de entmethode ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "De entmethode (seeding) houdt in dat u een deel van de chocolade smelt en vervolgens vaste, reeds getempereerde stukjes chocolade (ent-callets) toevoegt tijdens de afkoelfase. Deze vaste stukjes dienen als structuurmal die de gesmolten vetmoleculen begeleidt om zich in de gewenste V-kristalvorm te nestelen, zonder dat er een marmeren plaat nodig is."
      }
    },
    {
      "@type": "Question",
      "name": "Waarom heeft mijn chocolade witte strepen (vetbloem) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Witte strepen of vlekken worden vetbloem (fat bloom) genoemd. Dit gebeurt wanneer chocolade niet correct is getempereerd, waardoor instabiele cacaoboterkristallen naar het oppervlak migreren en daar opnieuw kristalliseren. Het is nog steeds veilig om te eten, maar verliest zijn glans en structuur."
      }
    },
    {
      "@type": "Question",
      "name": "Kan ik chocolade die al vetbloem heeft opnieuw tempereren ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Vetbloem is een puur fysieke scheiding van vet- of suikerkristallen, geen chemisch bederf. Door de chocolade volledig te smelten tot de juiste smelttemperatuur (ca. 45-50°C) lossen alle foutieve kristalstructuren op, zodat u het tempereerproces helemaal opnieuw kunt starten."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe beïnvloeden luchtvochtigheid en keukentemperatuur het tempereren ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chocolade is uiterst gevoelig voor de omgeving. De ideale keukentemperatuur ligt tussen 18°C en 22°C met een relatieve luchtvochtigheid onder 50%. Een te hoge luchtvochtigheid leidt tot condensatie op de chocolade, wat suikerbloem veroorzaakt of de chocolade doet klonteren tot een dikke, onwerkbare pasta."
      }
    },
    {
      "@type": "Question",
      "name": "Kan ik gewone chocoladechips uit de supermarkt gebruiken ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standaard chocoladechips uit de supermarkt bevatten vaak extra stabilisatoren en minder cacaoboter om hun vorm te behouden tijdens het bakken. Voor een perfect glanzend resultaat met een krokante knak wordt het gebruik van professionele couverture met minstens 31% cacaoboter ten zeerste aanbevolen."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Chocolade tempereercurve en entmethode gids",
  "description": "Beheers chocolade tempereren thuis. Bereken het vereiste gewicht aan entschocolade (callets) en volg stapsgewijze thermodynamische temperatuurcurves voor donkere, melk- en witte chocolade.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Chocoladesoort kiezen",
      "text": "Selecteer donkere, melk- of witte chocolade om de specifieke temperatuurgrenzen te laden."
    },
    {
      "@type": "HowToStep",
      "name": "Totaal gewicht invoeren",
      "text": "Voer het gewenste totaal gewicht van de getempereerde chocolade in."
    },
    {
      "@type": "HowToStep",
      "name": "Smeltfase",
      "text": "Smelt 75% of de chocolade (volgens berekening) tot de doeltemperatuur (bijv. 50C voor puur) om alle bestaande kristalstructuren op te lossen."
    },
    {
      "@type": "HowToStep",
      "name": "Afkoel- & Entfase",
      "text": "Laat de gesmolten chocolade al roerend afkoelen terwijl u de resterende 25% vaste ent-callets toevoegt tot de afkoeltemperatuur is bereikt."
    },
    {
      "@type": "HowToStep",
      "name": "Werkfase",
      "text": "Verwarm de chocolade voorzichtig tot de werktemperatuur om eventueel overgebleven instabiele kristallen op te lossen voor gebruik."
    }
  ]
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Chocolade tempereercurve en entmethode gids",
  "description": "Beheers chocolade tempereren thuis. Bereken het vereiste gewicht aan entschocolade (callets) en volg stapsgewijze thermodynamische temperatuurcurves voor donkere, melk- en witte chocolade.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  }
};

export const content: ToolLocaleContent = {
  slug: 'chocolade-tempereren-curve-gids',
  title,
  description,
  faqTitle: 'Veelgestelde vragen',
  ui: {
  "title": "Chocolade Tempereer Assistent",
  "subtitle": "Thermodynamische curves en ent-calculator",
  "chocolateTypeLabel": "Chocoladesoort",
  "totalWeightLabel": "Totaal gewenst gewicht",
  "meltLabel": "Smeltfase",
  "coolLabel": "Afkoel- & Entfase",
  "workLabel": "Werkfase",
  "meltTempLabel": "Smelttemp.",
  "coolTempLabel": "Afkoeltemp.",
  "workTempLabel": "Werktemp.",
  "meltWeightLabel": "Gewicht om te smelten",
  "seedWeightLabel": "Ent-gewicht (callets)",
  "molecularLabel": "Moleculaire kristallisatietoestand",
  "seedingTitle": "Entmethode calculator (25% aandeel)",
  "stepTitle": "Tempereerstappen",
  "darkOption": "Donkere Chocolade",
  "milkOption": "Melkchocolade",
  "whiteOption": "Witte Chocolade",
  "resetButton": "Gids resetten",
  "warningOverheated": "Waarschuwing: De temperatuur is te hoog! U kunt de vaste cacaobestanddelen verbranden of de melkeiwitten denatureren.",
  "warningUnderheated": "Waarschuwing: De temperatuur is te laag. Er hebben zich nog geen stabiele kristallen gevormd of de chocolade stolt te vroeg.",
  "interactiveInfo": "Interactie met de stappen of sleep de thermometer om de moleculaire fasen te bekijken"
},
  faq,
  howTo,
  seo: [
  {
    "type": "title",
    "text": "Thermodynamica van cacaoboterkristallisatie",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Cacaoboter is polymorf, wat betekent dat het kan stollen in zes verschillende kristalvormen (I tot VI). Elke vorm heeft een uniek smeltpunt en stabiliteit. Het doel van chocolade tempereren is om stabiele Form V (Bèta) kristallen te maximaliseren en instabiele vormen I tot IV te onderdrukken. Form V kristallen zorgen voor de karakteristieke glans, stevige textuur en krokante knak van professionele chocolade."
  },
  {
    "type": "stats",
    "columns": 4,
    "items": [
      {
        "value": "Form V",
        "label": "Doel Beta kristal",
        "icon": "mdi:hexagon-multiple-outline"
      },
      {
        "value": "25-30%",
        "label": "Ent-verhouding",
        "icon": "mdi:scale"
      },
      {
        "value": "31-32°C",
        "label": "Werktemp. Donker",
        "icon": "mdi:thermometer"
      },
      {
        "value": "0.1-0.2C",
        "label": "Afkoelsnelheid / min",
        "icon": "mdi:trending-down"
      }
    ]
  },
  {
    "type": "title",
    "text": "De zes polymorfe kristalvormen van cacaoboter",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Het begrijpen van de thermodynamica van elke kristalvorm is essentieel om tempereerfouten te voorkomen. Hier is een wetenschappelijk overzicht van de cacaoboterkristallen:"
  },
  {
    "type": "table",
    "headers": [
      "Kristalvorm",
      "Structuurnaam",
      "Smeltpunt",
      "Stabiliteit & Textuur"
    ],
    "rows": [
      [
        "Form I",
        "Gamma (γ)",
        "17°C (62.6°F)",
        "Zeer instabiel, zacht, smelt direct in de hand, geen knak."
      ],
      [
        "Form II",
        "Alpha (α)",
        "21°C (69.8°F)",
        "Instabiel, zacht, kruimelig, smelt zeer gemakkelijk."
      ],
      [
        "Form III",
        "Beta Prime (β')",
        "25.5°C (77.9°F)",
        "Instabiel, stevig maar mist krokante knak, mat oppervlak."
      ],
      [
        "Form IV",
        "Beta Prime (β')",
        "27.3°C (81.1°F)",
        "Instabiel, stevig, smelt iets te snel, weinig glans."
      ],
      [
        "Form V",
        "Beta (β)",
        "33.8°C (92.8°F)",
        "Zeer stabiel, glanzend oppervlak, krokante knak (Gewenste vorm)."
      ],
      [
        "Form VI",
        "Beta (β)",
        "36.3°C (97.3°F)",
        "Meest stabiel, hard, vormt zich over maanden, veroorzaakt vetbloem."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Het principe van de entmethode",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Enten is een zeer betrouwbare techniek om chocolade zonder marmeren werkblad te tempereren. Door 25% van het totaalgewicht als vaste entschocolade te bewaren, brengt u een hoge concentratie stabiele Form V kristallen in de warme chocolade. Bij het roeren werken deze callets als sjabloon waarlangs het overige vet zich netjes kristalliseert."
  },
  {
    "type": "title",
    "text": "Het tempereerproces stapsgewijs uitgelegd",
    "level": 2
  },
  {
    "type": "list",
    "items": [
      "<strong>Phase 1: Smelten (T > 40°C):</strong> Door de chocolade te verwarmen, smelten alle bestaande kristalstructuren (vormen I tot VI). Er ontstaat een amorf vloeibaar vetmengsel - het ideale startpunt.",
      "<strong>Phase 2: Afkoelen & Enten (T ≈ 27°C):</strong> Het afkoelen start de kristallisatie. De toevoeging van 25% vaste entschocolade brengt stabiele Form V kristallen in die dienen als kiemcellen.",
      "<strong>Phase 3: Opwarmen & Werken (T ≈ 31°C):</strong> Door zacht opwarmen smelten instabiele Form IV kristallen die tijdens het afkoelen zijn gevormd weg. Er blijven alleen stabiele Form V kristallen over."
    ]
  },
  {
    "type": "title",
    "text": "Praktische methoden om thuis te tempereren",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "U kunt thuis uitstekende resultaten behalen met deze drie veelgebruikte methoden. Gebruik onze calculator om uw gewichten nauwkeurig af te wegen :"
  },
  {
    "type": "list",
    "items": [
      "<strong>Au bain-marie methode :</strong> Plaats 75% van de chocolade in een hittebestendige kom boven een pan met zacht sudderend water. Zorg dat de kom het water niet raakt en er geen stoom bij de chocolade komt. Verwarm tot smelttemperatuur, haal van de pan, veeg de kom droog en roer het 25% ent-chocolade erdoor. Blijf roeren tot de afkoeltemperatuur is bereikt, verwarm dan kort weer au bain-marie tot de werktemperatuur.",
      "<strong>Magnetron methode :</strong> Doe 75% van de chocolade in een magnetronbestendige kom. Verwarm in intervallen van 15-30 seconden op 50% vermogen en roer goed tussendoor. Eenmaal gesmolten roert u de 25% entschocolade erdoor tot de afkoeltemperatuur bereikt is. Verwarm in korte ritten van 5-10 seconden tot werktemperatuur.",
      "<strong>Sous-vide methode :</strong> Doe alle chocolade in een vacuümzak. Leg de zak in het sous-vide waterbad op de smelttemperatuur. Verlaag de watertemperatuur tot de afkoeltemperatuur door ijs toe te voegen en kneed de zak regelmatig. Verhoog tot slot de temperatuur van het waterbad naar de werktemperatuur."
    ]
  },
  {
    "type": "title",
    "text": "Zo voert u de tempereringstest uit",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Test uw chocolade altijd voordat u deze gebruikt. Doop de punt van een schoon mes, spatel of een reep bakpapier in de chocolade. Laat rusten bij kamertemperatuur (18-22°C). Als het goed getempereerd is stolt het gelijkmatig binnen 3 tot 5 minuten, glanst het en knakt het schoon door. Blijft het plakkerig, dan moet u het opnieuw smelten en herhalen."
  },
  {
    "type": "title",
    "text": "Problemen met tempereren oplossen",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Als chocolade niet goed getempereerd is, treedt er vetbloem op: een doffe, grijze waas. Dit lossen we op door de chocolade opnieuw te smelten tot Phase 1 en de stappen opnieuw te doorlopen."
  }
],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
