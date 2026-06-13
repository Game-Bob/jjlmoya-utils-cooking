import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Macaron Droogtijd Voorspeller: Calculator voor Droogtijd op Basis van Luchtvochtigheid en Temperatuur';
const description = 'Bereken precies hoe lang macaronschelpen moeten drogen op basis van luchtvochtigheid, temperatuur en formaat. Voorkom gebarsten schelpen en zorg elke keer voor perfecte voetjes.';

const faq = [
  {
    question: 'Waarom moeten macaronschelpen drogen voor het bakken?',
    answer: 'Door het drogen vormt zich een dun velletje op het oppervlak van de schelp. Dat velletje is essentieel omdat het tijdens het bakken stoom vasthoudt en die naar beneden door het voetje dwingt te ontsnappen in plaats van de bovenkant te laten barsten. Zonder voldoende droging barsten macarons, krijgen ze geen voetjes of bakken ze ongelijkmatig.',
  },
  {
    question: 'Hoe beinvloedt luchtvochtigheid de droogtijd van macarons?',
    answer: 'Luchtvochtigheid is de meest kritische factor. Bij hoge luchtvochtigheid (boven 60%) is de lucht al verzadigd met vocht, waardoor de verdamping van het schelpoppervlak drastisch vertraagt. De droogtijd kan twee tot drie keer zo lang zijn in vergelijking met een droge dag. In zeer droge omstandigheden (onder 30%) kunnen schelpen te veel drogen en een dik velletje vormen dat het goed rijzen belemmert.',
  },
  {
    question: 'Wat is de ideale temperatuur voor het drogen van macaronschelpen?',
    answer: 'Kamertemperatuur tussen 20 Ã‚Â°C en 25 Ã‚Â°C is ideaal. Warmere lucht kan meer vocht vasthouden en versnelt het drogen, maar als het te warm is (boven 30 Ã‚Â°C) drogen de schelpen ongelijkmatig: korstig van buiten en vochtig van binnen. Temperaturen onder 18 Ã‚Â°C vertragen het drogen aanzienlijk.',
  },
  {
    question: 'Hoe beinvloedt het formaat van de schelp de droogtijd?',
    answer: 'Grotere schelpen hebben meer oppervlak en volume, waardoor ze verhoudingsgewijs langer moeten drogen. Een mini macaron van 2 cm kan in 15 minuten drogen, terwijl een grote macaron van 5 cm meer dan een uur kan duren. De relatie is niet lineair: een verdubbeling van de diameter verdrievoudigt bij benadering de droogtijd door de oppervlakte-volume-verhouding.',
  },
];

const howTo = [
  {
    name: 'Spuit de macaronschelpen',
    text: 'Spuit gelijkmatige rondjes op bakpapier of een siliconenmatje. Gebruik een sjabloon voor een consistente maat.',
  },
  {
    name: 'Meet je omgeving',
    text: 'Controleer de luchtvochtigheid en temperatuur van je keuken met een hygrometer en thermometer.',
  },
  {
    name: 'Voer de waarden in de calculator in',
    text: 'Voer de luchtvochtigheid, temperatuur en de diameter van je schelp in om de geschatte droogtijd te krijgen.',
  },
  {
    name: 'Test het velletje',
    text: 'Raak na de aangegeven tijd voorzichtig het oppervlak van een schelp aan. Het moet droog en mat aanvoelen, niet plakkerig. Als het aan je vinger blijft plakken, geef het dan meer tijd.',
  },
  {
    name: 'Bak zodra het klaar is',
    text: 'Zodra het velletje gevormd is, direct bakken. Laat de schelpen niet te lang staan na het drogen, anders kunnen ze te ver doordrogen en barsten.',
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
  slug: 'macaron-droogtijd-voorspeller',
  title: 'Macaron Droogtijd Voorspeller',
  description: 'Bereken precies hoe lang macaronschelpen moeten drogen op basis van luchtvochtigheid, temperatuur en formaat. Voorkom gebarsten schelpen en zorg elke keer voor perfecte voetjes.',
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    humidityLabel: 'Luchtvochtigheid',
    humidityUnit: '%',
    tempLabel: 'Kamertemperatuur',
    tempUnit: 'Ã‚Â°C',
    sizeLabel: 'Diameter Schelp',
    sizeUnit: 'cm',
    dryingTimeLabel: 'Geschatte Droogtijd',
    minutesUnit: 'min',
    readinessLabel: 'Oppervlaktestatus',
    skinStatusReady: 'Klaar om te Bakken',
    skinStatusForming: 'Vormt Velletje',
    skinStatusSticky: 'Nog Plakkerig',
    skinStatusOverDry: 'Te Droog',
    humidityTagHigh: 'Hoge luchtvochtigheid',
    humidityTagNormal: 'Normale luchtvochtigheid',
    humidityTagLow: 'Lage luchtvochtigheid',
    humidityDescHigh: 'Erg vochtige dag. Het drogen duurt aanzienlijk langer. Gebruik indien mogelijk een luchtontvochtiger of een ruimte met airconditioning.',
    humidityDescNormal: 'Gematigde luchtvochtigheid. Het drogen verloopt in een normaal tempo met een goede vorming van het velletje.',
    humidityDescLow: 'Erg droge lucht. De schelpen kunnen te snel drogen en het risico op overdrogen is groot. Houd het goed in de gaten en verkort de droogtijd.',
    tempTagHot: 'Warme ruimte',
    tempTagIdeal: 'Ideale kamertemperatuur',
    tempTagCool: 'Koele ruimte',
    sizeTagMini: 'Mini',
    sizeTagStandard: 'Standaard',
    sizeTagLarge: 'Groot',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'De Wetenschap van het Drogen van Macaronschelpen: Waarom de Vliesvorming Bepalend is voor Succes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De macaron is een van de technisch meest veeleisende gebakjes uit de Franse patisserie. De kenmerkende gladde koepel en de gerimpelde basis, het "voetje" of "pied" genoemd, zijn volledig afhankelijk van een kritieke stap: het drogen van de gespoten schelpen voor het bakken. Tijdens deze rustperiode vormt zich een dun eiwitvlies op het oppervlak van elke schelp. Tijdens het bakken houdt dit velletje de uitzettende stoom binnenin de schelp vast, waardoor deze naar beneden door de basis moet ontsnappen. Dat tilt de schelp op en geeft het felbegeerde voetje. Zonder voldoende droging barst de stoom door de bovenkant en ontstaan er scheuren. Bij te veel droging wordt het velletje te stijf en kan de schelp niet goed rijzen.',
    },
    {
      type: 'title',
      text: 'Luchtvochtigheid en de Dominante Rol bij de Droogkinetiek',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Relatieve luchtvochtigheid is de meest invloedrijke variabele bij het drogen van macaronschelpen. Bij 50% relatieve luchtvochtigheid heeft een standaard schelp van 3 cm doorgaans 30-40 minuten nodig om een goed velletje te ontwikkelen. Bij 70% luchtvochtigheid kan dit oplopen tot 60-90 minuten. Bij 30% luchtvochtigheid kan het drogen al in 15-20 minuten klaar zijn. De fysica erachter is eenvoudig: de verdampingssnelheid is evenredig met het dampdruktekort tussen het schelpoppervlak en de omringende lucht. Vochtige lucht heeft een kleiner tekort, wat de verdamping vertraagt. Professionele patisseries beheersen de luchtvochtigheid nauwkeurig en hebben vaak aparte macaron-ruimtes met een relatieve luchtvochtigheid van 40-50%.',
    },
    {
      type: 'title',
      text: 'Referentietabel Droogtijden naar Luchtvochtigheid en Schelpformaat',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Luchtvochtigheid', '2 cm Mini', '3 cm Standaard', '4 cm Groot', '5 cm Extra Groot'],
      rows: [
        ['30% (Zeer droog)', '10-15 min', '15-20 min', '25-30 min', '35-45 min'],
        ['40% (Droog)', '15-20 min', '20-30 min', '30-40 min', '45-60 min'],
        ['50% (Gemiddeld)', '20-25 min', '30-40 min', '40-55 min', '55-75 min'],
        ['60% (Vochtig)', '25-35 min', '40-55 min', '55-75 min', '75-100 min'],
        ['70% (Zeer vochtig)', '35-50 min', '55-75 min', '75-100 min', '100-130 min'],
        ['80% (Extreem vochtig)', '50-70 min', '75-100 min', '100-140 min', '130-180 min'],
      ],
    },
    {
      type: 'title',
      text: 'De Rol van Temperatuur bij de Verdampingssnelheid',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Temperatuur beinvloedt het drogen via twee mechanismen. Ten eerste kan warmere lucht meer waterdamp vasthouden, waardoor de potentiÃƒÂ"le verdampingssnelheid van het schelpoppervlak toeneemt. Ten tweede neemt de moleculaire kinetische energie toe met de temperatuur, waardoor watermoleculen sneller uit de vloeibare fase ontsnappen. Temperatuur heeft echter ook invloed op de stabiliteit van het meringue. Boven 28 Ã‚Â°C kunnen de eiwitproteÃƒÂ¯nen in de meringue instabiel worden, wat leidt tot een verzwakte structuur. Het ideale bereik voor het drogen van macarons is 20-25 Ã‚Â°C. Onder 18 Ã‚Â°C vertraagt de verdampingssnelheid zo sterk dat drogen onpraktisch wordt voor schelpen van standaardformaat.',
    },
    {
      type: 'title',
      text: 'Schelpformaat en de Kwadraat-Kubuswet van het Drogen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De diameter van de schelp heeft een niet-lineair effect op de droogtijd door de oppervlakte-volume-verhouding. Een mini macaron van 2 cm heeft ongeveer 3,1 cmÃ‚Â² aan oppervlak voor 0,5 cmÃ‚Â³ aan volume, wat een gunstige oppervlakte-volume-verhouding van ongeveer 6:1 oplevert. Een grote macaron van 5 cm heeft ongeveer 19,6 cmÃ‚Â² aan oppervlak voor 8,2 cmÃ‚Â³ aan volume, een verhouding van slechts 2,4:1. Dit betekent dat grotere schelpen verhoudingsgewijs minder oppervlak hebben waarlangs vocht kan ontsnappen, wat de droogtijd sterk verlengt. De calculator modelleert dit met een machtsfunctie die gekalibreerd is op basis van empirische gegevens uit professionele patisseriekeukens.',
    },
    {
      type: 'title',
      text: 'Problemen Oplossen bij Veelvoorkomende Droogproblemen met Macarons',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gebarsten schelpen zonder voetje',
      html: 'De meest voorkomende macaron-mislukking. Dit wijst er vrijwel altijd op dat de schelpen niet lang genoeg hebben gedroogd voor het bakken. Het oppervlaktevelletje was te zwak om de uitzettende stoom tegen te houden, die door de bovenkant barstte. <strong>Oplossing: verleng de droogtijd met 10-15 minuten en test het oppervlak met een lichte aanraking van de vingertop voor het bakken.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Scheve of hellende voetjes',
      html: 'Ongelijkmatig drogen is de boosdoener. Als de ene kant van de bakplaat sneller droogt dan de andere, zullen de voetjes ongelijkmatig rijzen. Dit gebeurt vaak als bakplaten bij een raam, ventilator of warmtebron staan. <strong>Oplossing: draai de bakplaten tijdens het drogen en zorg voor gelijkmatige luchtcirculatie rond alle schelpen.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Holle schelpen na het bakken',
      html: 'Holle schelpen kunnen het gevolg zijn van overmatig drogen, waardoor een te dik en stijf velletje ontstaat. De schelp kan tijdens het bakken niet goed uitzetten, waardoor er een luchtholte binnenin ontstaat. <strong>Oplossing: verkort de droogtijd en controleer eerder op vliesvorming. Het oppervlak moet droog aanvoelen maar moet nog licht meegeven bij voorzichtige druk.</strong>',
    },
    {
      type: 'title',
      text: 'Pro Tips van Professionele Patisseriechefs',
      level: 3,
    },
    {
      type: 'tip',
      title: 'De Oventechniek voor Vochtige Dagen',
      html: 'Op extreem vochtige dagen gebruiken professionele chefs een techniek die "ovendrogen" heet. Verwarm de oven tot de laagst mogelijke temperatuur (meestal 50 Ã‚Â°C), schakel hem uit en zet de gespoten macarons erin met de deur op een kier gedurende 5-10 minuten. Zo ontstaat een warm, droog microklimaat dat de vliesvorming versnelt zonder dat de schelpen al beginnen te bakken.',
    },
    {
      type: 'tip',
      title: 'De Aanraaktest voor het Perfecte Velletje',
      html: 'De ultieme test om te weten of macarons klaar zijn: raak het oppervlak van een schelp voorzichtig aan met een schone, droge vingertop. Als het beslag aan je vinger blijft plakken, heeft het meer tijd nodig. Als het oppervlak droog en mat aanvoelt en niet plakt, is het velletje gevormd. Voelt het oppervlak hard en korstig aan zonder enige meeving, dan zijn de schelpen overgedroogd.',
    },
    {
      type: 'tip',
      title: 'Luchtvochtigheidsbeheersing zonder Apparatuur',
      html: 'Als je geen luchtontvochtiger hebt, zet dan een kom met ongekookte rijst of zakjes silicagel bij de drogende macarons. Deze droogmiddelen absorberen omgevingsvocht en creeren een droger microklimaat rond de bakplaat. In professionele keukens zonder klimaatbeheersing kan deze simpele truc de droogtijd op vochtige dagen met 30-40% verkorten.',
    },
    {
      type: 'title',
      text: 'De Factor van het Verouderen van Eiwit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Verouderd eiwit geeft stabielere meringues die voorspelbaarder drogen. Vers eiwit bevat meer water en een minder elastische eiwitstructuur, wat leidt tot zwakkere meringues die er langer over doen om een goed velletje te vormen. Professionele recepten vragen om eiwit dat 24-72 uur op kamertemperatuur of 3-5 dagen in de koelkast is verouderd. Verouderd eiwit verliest ongeveer 10-15% van het watergehalte door verdamping, waardoor de eiwitten zich concentreren en de meringuesterkte verbetert.',
    },
    {
      type: 'title',
      text: 'Snel Overzicht: Droogtijden voor Veelvoorkomende Omstandigheden',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Typische droogtijden voor standaard macaronschelpen van 3 cm',
      items: [
        'Keuken met airco (22 Ã‚Â°C, 45% luchtvochtigheid): 25-30 minuten',
        'Lentedag, ramen open (20 Ã‚Â°C, 55% luchtvochtigheid): 35-45 minuten',
        'Zomerdag, geen airco (28 Ã‚Â°C, 70% luchtvochtigheid): 60-90 minuten  -  gebruik de ovendroogtechniek',
        'Verwarmd huis in de winter (21 Ã‚Â°C, 30% luchtvochtigheid): 15-20 minuten  -  pas op voor overdrogen',
        'Regenachtige dag (18 Ã‚Â°C, 80% luchtvochtigheid): 75-100 minuten  -  overweeg zeker een luchtontvochtiger',
        'Professionele patisseriekeuken (22 Ã‚Â°C, 45% luchtvochtigheid, convectie): 20-25 minuten',
      ],
    },
    {
      type: 'paragraph',
      html: 'Elke keukenomgeving is uniek. Deze calculator houdt rekening met de drie kritieke variabelen  -  luchtvochtigheid, temperatuur en schelpformaat  -  om je een persoonlijke voorspelling van de droogtijd te geven. Voer je omstandigheden in en spuit met vertrouwen.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
