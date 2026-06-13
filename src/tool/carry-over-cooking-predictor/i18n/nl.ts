import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Carry Over Cooking Predictor: Thermische Traagheid Calculator';
const description = 'Voorspel hoeveel graden uw braadstuk nog doorgaart nadat u het uit de oven haalt. Bepaal de exacte uittrektemperatuur voor een perfecte medium rare.';

const faq = [
  {
    question: 'Wat is carry-over-koken en waarom gebeurt het?',
    answer: 'Carry-over-koken, ook wel thermische traagheid genoemd, is het verdere stijgen van de kerntemperatuur nadat het vlees uit de oven is gehaald. Warmte die in de buitenste lagen is opgeslagen, geleidt verder naar het centrum. Een braadstuk dat bij 50°C wordt uitgenomen, kan tijdens het rusten 54°C bereiken - het verschil tussen rare en medium-rare.',
  },
  {
    question: 'Hoe beïnvloedt de ov temperatuur de carry-over?',
    answer: 'Hogere ov temperaturen (200-250°C) zorgen voor een grotere temperatuurgradiënt tussen het oppervlak en de kern, waardoor er meer latente warmte in de korst wordt opgeslagen. Dit versterkt het carry-over-effect. Een braadstuk dat op 120°C wordt gegaard, heeft een minimale carry-over (~1°C), terwijl een stuk op 220°C tijdens het rusten 5-8°C kan stijgen.',
  },
  {
    question: 'Verandert de vorm van het vlees de carry-over-berekening?',
    answer: 'Ja. Geometrie heeft een grote invloed op de warmtepenetratie. Hele vogels en dikke braadstukken hebben meer thermische massa ten opzichte van het oppervlak, waardoor ze meer warmte vasthouden en sterker doorgaren. Platte stukken zoals steaks hebben een hoge oppervlakte-inhoudsverhouding, koelen snel af en hebben een minimale carry-over.',
  },
  {
    question: 'Hoe lang moet ik het vlees laten rusten na het uittrekken?',
    answer: 'De rusttijd hangt af van gewicht en geometrie. Een vuistregel is ongeveer 1 minuut per 100 g vlees, minimaal 10 minuten, maximaal 45 minuten. Een braadstuk van 2 kg heeft ongeveer 16 minuten rust nodig. Gedurende deze tijd stabiliseert de kerntemperatuur zich en voltooit het carry-over-effect zich.',
  },
];

const howTo = [
  {
    name: 'Selecteer de vleesgeometrie',
    text: 'Kies Hele Vogel voor gevogelte, Cilindrisch Braadstuk voor filets en botloze stukken, of Platte Snede voor steaks en filets.',
  },
  {
    name: 'Voer het gewicht in',
    text: 'Voer het totale gewicht van uw stuk vlees in grammen in. Per geometrietype gelden minimumgewichten.',
  },
  {
    name: 'Stel de ov temperatuur in',
    text: 'Voer uw werkelijke ov temperatuur in. Hogere temperaturen versterken het carry-over-effect.',
  },
  {
    name: 'Stel uw doeltemperatuur in',
    text: 'Voer de gewenste eindkerntemperatuur in (bijv. 54°C voor medium-rare rundvlees, 74°C voor gevogelte).',
  },
  {
    name: 'Lees de uittrektemperatuur af',
    text: 'De calculator vertelt u precies wanneer u het vlees moet uittrekken om uw doel na het rusten te bereiken.',
  },
  {
    name: 'Laat het vlees rusten',
    text: 'Laat het vlees rusten gedurende de aanbevolen tijd. Dek het niet te strak af, anders wordt de korst zacht.',
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
  slug: 'nagaren-voorspeller',
  title: 'Carry Over Cooking Predictor',
  description: 'Voorspel hoeveel graden uw braadstuk nog doorgaart nadat u het uit de oven haalt. Bepaal de exacte uittrektemperatuur voor een perfecte medium rare.',
  faqTitle: 'Veelgestelde vragen',
  ui: {
    title: 'Carry Over Cooking Predictor',
    subtitle: 'Thermische traagheidscalculator voor precisie braden',
    geometryLabel: 'Vleesgeometrie',
    wholeBird: 'Hele Vogel (Gevogelte)',
    cylindricalRoast: 'Cilindrisch Braadstuk (Filet, Botloos)',
    flatCut: 'Platte Snede (Steak, Filet)',
    weightLabel: 'Gewicht',
    ovenTempLabel: 'Ov Temperatuur',
    targetTempLabel: 'Doel Kerntemperatuur',
    pullTemp: 'Uittrektemperatuur',
    carryOver: 'Doorgaren',
    restTime: 'Rusttijd',
    minutes: 'min',
    degreesC: '°C',
    degreesF: '°F',
    unitLabel: 'Eenheden',
    metricUnit: 'Metrisch',
    imperialUnit: 'Imperiaal',
    geometryDescCylindrical: 'Cilindrische braadgeometrie geselecteerd - matige thermische traagheid met voorspelbare carry-over.',
    weightG: 'g',
    weightOz: 'oz',
    errorTargetExceedsOven: 'Doeltemperatuur kan de ov temperatuur niet overschrijden.',
    errorOvenTooHot: 'Ov temperatuur overschrijdt 350°C. Verlaag de temperatuur.',
    errorWeightTooLow: 'Gewicht is lager dan het minimum voor deze geometrie.',
    errorWeightTooHigh: 'Gewicht overschrijdt het maximum voor deze geometrie.',
    pullNow: 'Trek het vlees er nu uit',
    pullAt: 'Uittrekken op',
    toReach: 'om te bereiken',
    afterRest: 'na rusten',
    carryOverWillAdd: 'Carry-over voegt ongeveer toe',
    footerTemplate: '{carry} doorgaren · {rest} rusten · {weight}{wunit}, {oven} oven → {target} doel',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Carry-Over-Cooking-Predictor: Elke Keer de Perfecte Uittrektemperatuur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Carry-over-koken is het verdere stijgen van de kerntemperatuur nadat het vlees de oven verlaat. De buitenste lagen slaan warmte op tijdens het braden, en deze energie geleidt tijdens het rusten verder naar de koelere kern. Een dik braadstuk dat bij 50°C wordt uitgenomen, kan na rusten 54°C bereiken - het verschil tussen rare en medium-rare. Deze calculator voorspelt exact hoeveel graden uw braadstuk nog zal stijgen, zodat u het op het juiste moment kunt uittrekken.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5-8°C', label: 'Typische carry-over (hete oven)', icon: 'mdi:thermometer' },
        { value: '1-3°C', label: 'Minimale carry-over (lage oven)', icon: 'mdi:thermometer-low' },
        { value: '16 min', label: 'Rusttijd voor 2 kg braadstuk', icon: 'mdi:clock-outline' },
        { value: '45 min', label: 'Maximaal aanbevolen rust', icon: 'mdi:clock-alert' },
      ],
    },
    {
      type: 'title',
      text: 'Uittrektemperatuurtabel per Gaarheid',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gebruik deze tabel om uw doelkerntemperatuur te vinden en laat de calculator vervolgens de exacte uittrektemperatuur bepalen. Onthoud: de uittrektemperatuur is altijd <strong>lager</strong> dan uw doel, omdat het carry-over-effect tijdens het rusten blijft garen.',
    },
    {
      type: 'table',
      headers: ['Gaarheid', 'Doeltemperatuur', 'Uittrektemperatuur (200°C oven)', 'Rusttijd'],
      rows: [
        ['Rundvlees Rare', '52°C / 126°F', '46-48°C / 115-118°F', '10-15 min'],
        ['Rundvlees Medium-Rare', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 min'],
        ['Rundvlees Medium', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 min'],
        ['Rundvlees Well Done', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 min'],
        ['Varkensvlees Medium', '63°C / 145°F', '57-59°C / 135-138°F', '10-15 min'],
        ['Varkensvlees Well Done', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 min'],
        ['Kip/Kalkoenborst', '74°C / 165°F', '68-70°C / 154-158°F', '15-20 min'],
        ['Kip/Kalkoenbout', '82°C / 180°F', '76-78°C / 169-172°F', '15-20 min'],
        ['Lamsvlees Medium-Rare', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 min'],
        ['Lamsvlees Medium', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 min'],
      ],
    },
    {
      type: 'title',
      text: 'Hoe Geometrie de Thermische Berekening Verandert',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Hele Vogel',
          icon: 'mdi:food-drumstick',
          description: 'Maximale thermische massa ten opzichte van het oppervlak. De dikke borst- en boutkernen slaan enorme latente warmte op.',
          highlight: false,
          points: ['Carry-over: 5-10°C bij een 200°C oven', 'Rusten: 20-45 minuten', 'Beste voor: kalkoen, hele kip, eend', '8-10°C onder doel uittrekken'],
        },
        {
          title: 'Cilindrisch Braadstuk',
          icon: 'mdi:food-steak',
          description: 'De meest voorkomende braadvorm. Matige warmte vasthouden met voorspelbare carry-over-waarden.',
          highlight: true,
          points: ['Carry-over: 3-7°C bij een 200°C oven', 'Rusten: 15-30 minuten', 'Beste voor: filet, varkenslende, lamskroon', '5-7°C onder doel uittrekken'],
        },
        {
          title: 'Platte Snede',
          icon: 'mdi:food',
          description: 'Hoge oppervlakte-inhoudsverhouding betekent dat warmte snel ontsnapt. Carry-over is minimaal maar nog steeds van belang.',
          highlight: false,
          points: ['Carry-over: 1-3°C bij een 200°C oven', 'Rusten: 5-15 minuten', 'Beste voor: steaks, kipfilet, visfilet', '1-3°C onder doel uittrekken'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Veelvoorkomende Carry-Over-Fouten en Hoe Ze te Verhelpen',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Te laat uittrekken',
      html: 'Als u wacht tot de thermometer uw doeltemperatuur aangeeft voordat u uittrekt, zal de carry-over 3-8°C overschieten. Een medium-rare braadstuk wordt medium of medium-well. <strong>Trek altijd 5-8°C onder uw doel uit.</strong> Gebruik deze calculator om de exacte waarde te krijgen.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Te snel aansnijden',
      html: 'Het direct aansnijden van een braadstuk na het uittrekken laat tot 30% van het vleessap ontsnappen. De thermische gradiënt heeft geen tijd om zich gelijk te trekken, waardoor de kern ondergaar blijft terwijl de buitenste lagen overgaar raken. <strong>Rust de volledig aanbevolen tijd.</strong> Dek losjes af met folie - niet strak inpakken, anders wordt de korst zacht door de stoom.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ov temperatuur te laag',
      html: 'Een lage oven (onder 150°C / 300°F) creëert een minimale temperatuurgradiënt tussen oppervlak en kern. Dit betekent vrijwel geen carry-over-effect. Als u op lage temperatuur gaart, kunt u op uw exacte doeltemperatuur uittrekken met minimaal risico op overschrijding. De korstontwikkeling zal echter aanzienlijk minder zijn.',
    },
    {
      type: 'title',
      text: 'Professionele Tips voor Perfect Braden',
      level: 3,
    },
    {
      type: 'tip',
      title: 'De 10 Gradenregel',
      html: 'Een hete oven (220°C / 425°F) voegt bij hele vogels ongeveer 1°C carry-over per 100 g vlees toe, en bij cilindrische braadstukken 0,7°C per 100 g. Gebruik dit als sanity check tegen de calculator: een kip van 2 kg bij 220°C zou ongeveer 7-9°C moeten doorgaren.',
    },
    {
      type: 'tip',
      title: 'Rustpositie is Belangrijk',
      html: 'Laat vlees altijd rusten op een warm bord of snijplank, niet op een koud oppervlak. Een koud oppervlak onttrekt warmte aan de onderkant van het braadstuk, wat leidt tot ongelijkmatige eindtemperaturen. Laat hele vogels met de borst omhoog rusten, zodat het vleessap gelijkmatig door het witte vlees wordt herverdeeld.',
    },
    {
      type: 'tip',
      title: 'Afdekken, Niet Inpakken',
      html: 'Dek het braadstuk tijdens het rusten losjes af met aluminiumfolie. Strak inpakken vangt stoom op en maakt de korst zompig. Een losse afdekking vermindert het warmteverlies met ongeveer 30% terwijl stoom kan ontsnappen, wat zowel het carry-over-effect als de knapperige buitenkant behoudt.',
    },
    {
      type: 'title',
      text: 'Verklarende Woordenlijst Braadtermen',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Carry-Over-Koken', definition: 'Het verdere stijgen van de kerntemperatuur nadat het voedsel van de warmtebron is verwijderd, veroorzaakt door warmtegeleiding van de buitenste lagen naar het centrum.' },
        { term: 'Uittrektemperatuur', definition: 'De kerntemperatuur waarbij u het vlees uit de oven moet halen. Altijd lager dan de doeltemperatuur om rekening te houden met carry-over.' },
        { term: 'Doeltemperatuur', definition: 'De uiteindelijke kerntemperatuur die het vlees na het rusten moet bereiken. Ook wel serveertemperatuur genoemd.' },
        { term: 'Thermische Traagheid', definition: 'De neiging van een massa om temperatuurverandering te weerstaan. Zwaardere, dichtere stukken hebben een hogere thermische traagheid en garen sterker door.' },
        { term: 'Rusten', definition: 'De periode na het garen waarin het vlees ongemoeid wordt gelaten, zodat de warmte kan egaliseren en het vleessap zich door de vezels kan herverdelen.' },
        { term: 'Temperatuurgradiënt', definition: 'Het temperatuurverschil tussen het oppervlak van het vlees en de kern. Een grotere gradiënt slaat meer latente warmte op voor carry-over.' },
        { term: 'Latente Warmte', definition: 'De warmte-energie die tijdens het garen in de buitenste lagen van het vlees wordt opgeslagen. Deze energie komt vrij wanneer de temperatuur tijdens het rusten egaliseert.' },
      ],
    },
    {
      type: 'title',
      text: 'Snelle Referentie: Aanbevolen Uittrektemperaturen',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Trek bij deze temperaturen uit voor perfecte resultaten (200°C / 400°F oven)',
      items: [
        'Rundvlees medium-rare: uittrekken op 48-50°C / 118-122°F, doel 54°C / 129°F',
        'Rundvlees medium: uittrekken op 54-56°C / 129-133°F, doel 60°C / 140°F',
        'Varkenslende: uittrekken op 57-59°C / 135-138°F, doel 63°C / 145°F',
        'Kipfilet: uittrekken op 68-70°C / 154-158°F, doel 74°C / 165°F',
        'Hele kalkoen: uittrekken op 68-70°C / 154-158°F, doel 74°C / 165°F (borst)',
        'Lamskroon: uittrekken op 48-50°C / 118-122°F, doel 54°C / 129°F',
      ],
    },
    {
      type: 'paragraph',
      html: 'Elk braadstuk is anders. Gewicht, exacte ov temperatuur en de vorm van het stuk verplaatsen deze waarden. Dat is precies wat deze calculator doet - hij neemt uw specifieke invoer en berekent de precieze uittrektemperatuur voor uw exacte situatie. Geen giswerk, geen verpeste braadstukken.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
