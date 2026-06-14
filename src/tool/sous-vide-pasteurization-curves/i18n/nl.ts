import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Sous Vide Pasteurisatiecurven Calculator';
const description = 'Bereken de exacte benodigde tijd voor veilige kernpasteurisatie tegen Salmonella en Listeria bij sous vide bereiding, rekening houdend met vleesvorm en -dikte.';

const faq = [
  {
    question: 'Wat is pasteurisatie bij sous vide koken?',
    answer: 'Pasteurisatie is het proces waarbij voedsel wordt verhit tot een specifieke temperatuur en daar lang genoeg wordt gehouden om pathogene micro-organismen (zoals Salmonella, Listeria en E. coli) tot veilige, aanvaardbare niveaus te reduceren. In tegenstelling tot sterilisatie vernietigt het niet alle bacteriële sporen, maar maakt het het voedsel wel veilig om te consumeren.',
  },
  {
    question: 'Waarom heeft de vleesdikte zo\'n dramatisch effect op de bereidingstijd?',
    answer: 'Warmteoverdracht in voedsel wordt bepaald door geleiding. De tijd die nodig is om de kern (koudste punt) van het voedsel de waterbadtemperatuur te laten bereiken, neemt kwadratisch toe met de dikte. Het verdubbelen van de dikte van een steak verlengt de opwarmtijd met ongeveer een factor vier.',
  },
  {
    question: 'Waarom wordt 54,4°C (130°F) beschouwd als de minimale veilige sous vide temperatuur?',
    answer: 'Bij temperaturen onder 54,4°C kunnen veelvoorkomende door voedsel overgedragen pathogenen zoals Salmonella overleven en zich actief vermenigvuldigen. Als voedsel langer dan 4 uur in deze "gevarenzone" wordt gehouden, kunnen hittebestendige toxinen ontstaan die ernstige voedselveiligheidsrisico\'s opleveren.',
  },
  {
    question: 'Wat is een 6D- of 6.5D-reductie?',
    answer: 'Een D-reductie verwijst naar een decimale (logaritmische) reductie van de bacteriepopulatie. Een 6.5D-reductie betekent dat 99,99995% van de doelpathogeen wordt gedood. Als er bijvoorbeeld oorspronkelijk 1.000.000 bacteriën waren, zouden er minder dan 1 overleven.',
  },
  {
    question: 'Hoe beïnvloedt de voedselgeometrie de opwarmsnelheid?',
    answer: 'Warmte dringt een bol binnen vanuit alle richtingen (3 dimensies) en een cilinder vanaf de zijkanten (2 dimensies), terwijl een vlakke plak voornamelijk vanaf de boven- en onderkant wordt verhit (1 dimensie). Hierdoor warmen bollen het snelst op, gevolgd door cilinders, en duurt het bij plakken het langst.',
  },
];

const howTo = [
  {
    name: 'Stel de badtemperatuur in',
    text: 'Stel de schuifregelaar in op de temperatuur van uw waterbad. Let op: hogere temperaturen pasteuriseren exponentieel sneller.',
  },
  {
    name: 'Geef de vleesdikte op',
    text: 'Meet het dikste deel van uw vlees in millimeters en voer dit in de calculator in.',
  },
  {
    name: 'Selecteer de geometrievorm',
    text: 'Kies of uw voedsel de vorm heeft van een vlakke plak (steak, kipfilet), een cilinder (runderhaas, ballotine) of een bol (gehaktbal).',
  },
  {
    name: 'Selecteer de doelpathogeen',
    text: 'Kies Salmonella voor standaard vlees- en gevogeltveiligheid, of Listeria monocytogenes voor risicogroepen of extra veiligheid.',
  },
  {
    name: 'Controleer de totale bereidingstijd',
    text: 'De calculator geeft de kernopwarmingstijd en de letaliteitshoudtijd weer. Tel ze bij elkaar op voor de totale veilige bereidingsduur.',
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
  slug: 'sous-vide-pasteurisatiecurven',
  title: 'Sous Vide Pasteurisatiecurven',
  description: 'Bereken de exacte benodigde tijd voor veilige kernpasteurisatie tegen Salmonella en Listeria bij sous vide bereiding, rekening houdend met vleesvorm en -dikte.',
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    title: 'Sous Vide Pasteurisatiecurven',
    subtitle: 'Thermische letaliteitskinetiek en kerntemperatuurcompensatie',
    bathTempLabel: 'Waterbadtemperatuur',
    thicknessLabel: 'Vleesdikte',
    shapeLabel: 'Vleesgeometrie',
    shapeSlab: 'Vlakke Plak (bijv. Steak, Kipfilet)',
    shapeCylinder: 'Cilinder (bijv. Haas, Roulade)',
    shapeSphere: 'Bol (bijv. Gehaktbal)',
    pathogenLabel: 'Doelpathogeen',
    pathogenSalmonella: 'Salmonella (Standaard)',
    pathogenListeria: 'Listeria monocytogenes',
    resultsTitle: 'Veilige Pasteurisatietijd',
    heatingTime: 'Kernopwarmingstijd',
    lethalityTime: 'Pathogeen Letaliteitstijd',
    totalTime: 'Totale Bereidingstijd',
    dangerZoneTitle: 'Biologische Gevarenzone',
    dangerZoneDesc: 'Temperaturen onder 54,4°C (130°F) kunnen voedsel niet veilig pasteuriseren omdat de bacteriële replicatiesnelheid de thermische sterftesnelheid kan overschrijden. Kook niet langer dan 4 uur sous vide onder deze temperatuur.',
    chartTitle: 'Logaritmische Bacteriële Reductiecurve',
    chartXLabel: 'Tijd (minuten)',
    chartYLabel: 'Log Reductie',
    disclaimer: 'Berekeningen gaan uit van een begintemperatuur van 5°C en thermische diffusie van mager vlees. Gebruik altijd een gekalibreerde digitale thermometer om de badtemperatuur te controleren.',
    minutesUnit: 'min',
    mmUnit: 'mm',
    inUnit: 'in',
    tempUnitC: '°C',
    tempUnitF: '°F',
    systemLabel: 'Meetsysteem',
    systemMetric: 'Metriek',
    systemImperial: 'Imperiaal'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Sous Vide Pasteurisatie: De Complete Veiligheidsgids voor Thuisbereiding',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sous vide koken heeft de thuiskeuken getransformeerd door perfect gegaarde steaks toegankelijk te maken voor iedereen met een dompelcirculator. Maar de methode verbergt een kritische complexiteit: bij de lage temperaturen die die perfecte medium-rare rosé rand-tot-rand produceren, opereert u millimeters boven de thermische sterftedrempel van gevaarlijke bacteriën. Deze gids legt precies uit hoe u veilige pasteurisatietijden kunt berekenen voor elk stuk vlees, bij elke temperatuur, zodat u nooit meer onvoldoende gegaarde kip of vis serveert.',
    },
    {
      type: 'title',
      text: 'Waarom Sous Vide Veiligheid Anders Is dan Traditioneel Koken',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wanneer u een kipfilet op 200°C aanbakt, bereikt het oppervlak onmiddellijk letale temperaturen en sterven bacteriën in seconden. Sous vide draait dit model om: het waterbad draait op exact de eindtemperatuur die u het voedsel wilt laten bereiken, soms zo laag als 55°C. Bij deze temperaturen is het doden van Salmonella of Listeria niet onmiddellijk  -  het is een langzaam, tijdsafhankelijk proces gemeten in minuten of zelfs uren. De USDA FSIS Appendix A-tabellen specificeren dat het bereiken van een 6,5-log reductie in Salmonella vereist dat gevogelte op 60°C ongeveer 28 minuten wordt gehouden nadat de kern de temperatuur heeft bereikt. Bij 55°C loopt deze tijd op tot bijna 90 minuten. Als u de zak eruit haalt wanneer de timer afgaat zonder rekening te houden met de letaliteitstijd, serveert u mogelijk ondergepasteuriseerd voedsel.',
    },
    {
      type: 'title',
      text: 'Praktische Sous Vide Tijden: Wat Thuiskoks Echt Nodig Hebben',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De volgende tabel weerspiegelt waar thuiskoks daadwerkelijk naar zoeken: specifieke stukken vlees, bij gangbare temperaturen, met totale tijden die zowel de opwarmvertraging als de pathogeen-letaliteitshoudtijd omvatten. Deze waarden gaan uit van een dikte van 25 mm, startend vanaf gekoelde temperatuur (5°C), gericht op een 6,5-log Salmonella-reductie.',
    },
    {
      type: 'table',
      headers: ['Voedsel', 'Badtemp', 'Kernopwarming', 'Letaliteitshoud', 'Totale Tijd', 'Resultaat'],
      rows: [
        ['Kipfilet', '60°C / 140°F', '~35 min', '~28 min', '~63 min', 'Sappig, volledig gepasteuriseerd'],
        ['Kipfilet', '65°C / 149°F', '~35 min', '~3 min', '~38 min', 'Steviger, traditionele textuur'],
        ['Zalmfilet', '50°C / 122°F', '~20 min', '~55 min', '~75 min', 'Boterzacht, doorschijnend, veilig'],
        ['Biefstuk', '55°C / 131°F', '~40 min', '~89 min', '~129 min', 'Medium-rare, oppervlak gepasteuriseerd'],
        ['Varkenshaas', '60°C / 140°F', '~35 min', '~28 min', '~63 min', 'Mals met licht roze'],
        ['Eendenborst', '57°C / 135°F', '~35 min', '~52 min', '~87 min', 'Rijk, medium, voedselveilig'],
        ['Kalkoenborst', '63°C / 145°F', '~40 min', '~9 min', '~49 min', 'Smeuïg, nooit droog'],
        ['Gehaktballen (bol)', '60°C / 140°F', '~25 min', '~28 min', '~53 min', 'Gelijkmatig gegaard'],
      ],
    },
    {
      type: 'title',
      text: 'De Logaritmische Wiskunde van Bacteriële Sterfte: D-Waarden en z-Waarden Uitgelegd',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bacteriën sterven niet allemaal tegelijk alsof u een schakelaar omzet. Thermische sterfte volgt eerste-ordekinetiek: een constante fractie van de populatie wordt per tijdseenheid bij een gegeven temperatuur gedood. De <strong>D-waarde</strong> (decimale reductietijd) is de tijd die bij een specifieke temperatuur nodig is om 90% van de aanwezige bacteriën te doden  -  een 1-log reductie. Voor Salmonella bij 60°C is de D-waarde ongeveer 4,3 minuten. De <strong>z-waarde</strong> (doorgaans 5,5°C voor Salmonella) vertelt ons hoeveel we de temperatuur moeten verhogen om het proces 10 keer sneller te maken. Verhoog het bad van 55°C naar 60,5°C, en de benodigde letaliteitstijd daalt met een factor 10  -  van 89 minuten naar ongeveer 9 minuten. Deze exponentiële relatie is waarom koken op 65°C dramatisch sneller en veiliger is dan koken op 55°C, ook al ziet het voedsel er nauwelijks anders uit.',
    },
    {
      type: 'title',
      text: 'De Gevarenzone: Waarom 54,4°C (130°F) de Absolute Ondergrens Is',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Biologisch Gevaar Onder 54,4°C (130°F)',
      html: 'Sous vide nooit langer dan 4 uur onder 54,4°C (130°F). Bij temperaturen onder deze drempel is de thermische sterftesnelheid van bacteriën zoals Salmonella en Clostridium perfringens feitelijk trager dan hun natuurlijke reproductiesnelheid. De bacteriepopulatie kan tijdens het koken groeien. Erger nog, bepaalde pathogenen zoals Bacillus cereus en Clostridium botulinum Type E kunnen hittebestendige toxinen produceren die het koken overleven. Als uw circulator 52°C aangeeft en u vlees 8 uur laat staan in de veronderstelling dat laag en langzaam veiliger is, creëert u een biologisch gevaar.',
    },
    {
      type: 'title',
      text: 'Hoe Vleesvorm en -Dikte de Bereidingstijd Bepalen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het thermisch centrum van uw voedsel  -  het laatste punt dat de doeltemperatuur bereikt  -  dicteert de totale bereidingstijd. Warmtegeleiding volgt de wet van Fourier, en de tijd voor de kern om binnen 1°C van de badtemperatuur te komen, schaalt met het <strong>kwadraat van de dikte</strong>. Verdubbel de dikte van een kipfilet van 25 mm naar 50 mm, en de opwarmingstijd verviervoudigt van 35 minuten naar ongeveer 140 minuten. Vorm is enorm belangrijk: een <strong>vlakke plak</strong> (steak, filet) wordt verhit vanaf twee tegenoverliggende oppervlakken en is de langzaamste geometrie. Een <strong>cilinder</strong> (haas, roulade) ontvangt warmte radiaal van alle kanten en warmt ongeveer 1,4 keer sneller op dan een plak van dezelfde dikte. Een <strong>bol</strong> (gehaktbal) wordt vanuit alle richtingen verhit en is de snelste geometrie, ongeveer 1,7 keer sneller dan een plak. Dit is waarom bolvormige items zoals gehaktballen of arancini verrassend snel veilige kerntemperaturen bereiken.',
    },
    {
      type: 'title',
      text: 'Salmonella vs. Listeria: Uw Doelpathogeen Kiezen',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Salmonella (Standaard)',
          icon: 'mdi:bacteria-outline',
          description: 'Meest voorkomende gevogelteverontreiniger, matig hittegevoelig, breed gebruikt als referentiepathogeen in USDA FSIS-normen.',
          points: [
            'z-waarde van 5,5°C: matig hittegevoelig',
            'Doel: 6,5-log reductie voor gevogelte, 5-log voor rundvlees',
            'D60 = 4,3 minuten: sterft relatief snel bij 60°C',
            'Veilig voor gezonde volwassenen met standaard pasteurisatietijden',
            'Surrogaat voor Salmonella enterica serovars in alle vleessoorten',
          ],
        },
        {
          title: 'Listeria monocytogenes',
          icon: 'mdi:shield-alert-outline',
          description: 'Hogere hittebestendigheid dan Salmonella. Kritisch voor kwetsbare bevolkingsgroepen waaronder zwangere vrouwen en immuungecompromitteerde personen.',
          highlight: true,
          points: [
            'Hogere hittebestendigheid dan Salmonella',
            'z-waarde van 6,0°C: vereist meer temperatuurstijging om sterfte te versnellen',
            'Doel: 6-log reductie aanbevolen',
            'D60 = 7,7 minuten: duurt bijna twee keer zo lang als Salmonella',
            'Kritisch voor zwangere vrouwen, ouderen en immuungecompromitteerde personen',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Voedselveiligheid voor Kwetsbare Bevolkingsgroepen: Wanneer Standaard Pasteurisatie Niet Genoeg Is',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zwangere vrouwen, volwassenen boven 65, chemotherapiepatiënten, transplantatieontvangers en mensen met HIV of auto-immuunaandoeningen lopen drastisch hogere risico\'s op door voedsel overgedragen ziekten. Vooral Listeria monocytogenes kan de placentabarrière passeren en miskraam, doodgeboorte of neonatale meningitis veroorzaken  -  zelfs wanneer de moeder geen symptomen vertoont. Voor deze bevolkingsgroepen is de standaard 6,5-log Salmonella-reductie onvoldoende. Selecteer Listeria als doelpathogeen en verleng de bereidingstijden dienovereenkomstig. Bij 60°C voegt de extra letaliteitstijd voor Listeria versus Salmonella ongeveer 16 extra minuten toe voor een kipfilet van 25 mm  -  een kleine tijdsinvestering voor aanzienlijke veiligheidsmarges.',
    },
    {
      type: 'title',
      text: 'Waarom de Koude Starttemperatuur Belangrijk Is: Meet Altijd Vanuit Gekoelde Toestand',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Deze calculator gaat uit van een begintemperatuur van 5°C  -  standaard koelkasttemperatuur. Als u vlees rechtstreeks uit de vriezer op -18°C neemt, duurt het aanzienlijk langer voordat de kern de doeltemperatuur bereikt. De latente smeltwarmte van ijs in bevroren spierweefsel creëert een plateau bij 0°C dat 30-50% aan de opwarmingstijd kan toevoegen. Ontdooi bevroren items altijd volledig in de koelkast voordat u sous vide gaat koken en controleer de kerntemperatuur bij aanvang. Evenzo, als u vlees 30 minuten op het aanrecht laat tempereren voordat u het vacuüm verpakt, wordt de verkorte opwarmingstijd niet door dit model weergegeven en kunt u de pasteurisatie overschrijden  -  wat veilig is maar de textuur kan beïnvloeden.',
    },
    {
      type: 'title',
      text: 'Pasteurisatie Betekent Niet Sterilisatie: Wat Overleeft',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pasteurisatie reduceert pathogenen tot niveaus die door volksgezondheidsnormen als veilig worden beschouwd  -  doorgaans een 5-log tot 7-log reductie. Het produceert geen steriel product. Bepaalde bacteriële sporen, waaronder <em>Clostridium botulinum</em> en <em>Clostridium perfringens</em>, kunnen pasteurisatietemperaturen overleven en ontkiemen als voedsel onjuist wordt bewaard. Na sous vide bereiding moet voedsel ofwel onmiddellijk worden geserveerd, boven 54,4°C worden gehouden voor service, of snel worden gekoeld in een ijsbad tot onder 4°C binnen 2 uur. Vacuümverzegelde zakken creëren een anaerobe omgeving die Clostridium botulinum ideaal vindt; laat gekookte sous vide zakken nooit op kamertemperatuur staan. Voor langere koelkastbewaring langer dan 5 dagen wordt invriezen aanbevolen.',
    },
    {
      type: 'title',
      text: 'USDA FSIS Naleving: Voldoen aan Regelgevende Normen Thuis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De USDA Food Safety and Inspection Service (FSIS) Appendix A biedt het definitieve regelgevende kader voor letaliteitsprestatie-normen in vlees- en gevogelteproducten. Deze tabellen specificeren de tijd-temperatuurcombinaties die nodig zijn voor specifieke log-reducties in Salmonella. Hoewel ontworpen voor commerciële verwerkers, kunnen thuiskoks dezelfde wetenschap gebruiken. Zo schrijft FSIS Appendix A voor dat kant-en-klaar gevogelte een 6,5-log reductie in Salmonella moet bereiken. Bij 60°C is de vereiste houdtijd nadat het gehele product de temperatuur heeft bereikt 28,1 minuten. Deze calculator implementeert het FSIS wiskundige model met behulp van eerste-orde Arrhenius-kinetiek met D-waarden en z-waarden afgeleid van peer-reviewed thermische inactiveringsstudies, aangepast voor thuisgebruik met een sous vide circulator.',
    },
    {
      type: 'title',
      text: 'Vis en Zeevruchten: Andere Regels voor Andere Eiwitten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Visspierweefsel heeft andere thermische eigenschappen dan zoogdier- of gevogeltevlees. Vis warmt sneller op door lagere dichtheid en dunnere typische stukken, maar de zorgwekkende pathogenen verschillen. Voor rauwe of licht gegaarde vis zijn <em>Vibrio</em>-soorten en <em>Anisakis</em>-parasieten de voornaamste zorgen in plaats van Salmonella. De FDA beveelt aan om vis 7 dagen bij -20°C in te vriezen vóór rauwe consumptie om parasieten te doden, en vervolgens sous vide te pasteuriseren tegen Listeria bij de uiteindelijke bereiding. Zalm gegaard op 50°C vereist ongeveer 55 minuten houdtijd voor een 6-log Listeria-reductie, wat een unieke textuur oplevert die met geen enkele andere bereidingsmethode te bereiken is. Tonijn en andere scombroïde vissen vereisen extra zorg: histamine geproduceerd door bacteriële activiteit vóór het koken is hittebestendig en wordt niet vernietigd door pasteurisatie; koop altijd sushi-kwaliteit vis van gerenommeerde leveranciers en bewaar het onder 4°C vóór het koken.',
    },
    {
      type: 'title',
      text: 'De Textuur-Veiligheid Afweging: Waarom Hogere Temperaturen Sneller Zijn maar Anders',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Elke sous vide kok staat voor dezelfde beslissing: lager en langer koken voor betere textuur, of hoger en sneller voor gemak en veiligheidsmarge. Kipfilet gegaard op 60°C produceert vlees dat zo sappig is dat het de verwachtingen van wat gevogelte kan zijn uitdaagt, maar vereist een letaliteitshoudtijd van 28 minuten na kernevenwicht voor een totale bereidingstijd van meer dan een uur. Bij 65°C pasteuriseert dezelfde borst in slechts 3 minuten houdtijd voor een totaal van 38 minuten, maar de spiervezels contraheren meer, waardoor wat vocht wordt uitgedreven. Geen van beide benaderingen is verkeerd; de calculator geeft u eenvoudig de cijfers om een geïnformeerde keuze te maken. Voor etentjes waar timing flexibel is, ga laag. Voor doordeweekse maaltijden, ga hoger. Het voedsel zal altijd veilig zijn als de berekende tijd wordt gerespecteerd.',
    },
    {
      type: 'title',
      text: 'Apparatuurkalibratie: Uw Circulator Liegt Mogelijk Tegen U',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>Controleer de temperatuur van uw dompelcirculator met een gekalibreerde digitale thermometer.</strong> Consumentencirculatoren kunnen in de loop van de tijd 1-2°C afwijken, wat aan de marges van pasteurisatie (55-58°C) het verschil kan betekenen tussen een veilige bereiding van 89 minuten en een gevaarlijke onderpasteurisatie. Test uw circulator maandelijks tegen een referentiethermometer in een goed geïsoleerde container. Een fout van 1°C bij 55°C verandert de letaliteitstijd met ongeveer 30 minuten voor Salmonella.',
    },
    {
      type: 'title',
      text: 'Meerdere Items Bereiden: Hoe het Aantal Zakken de Warmteoverdracht Beïnvloedt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een veelgemaakte fout is het laden van een sous vide bad met meerdere zakken en aannemen dat de timing berekend voor een enkel item nog steeds geldt. Water moet vrij tussen de zakken kunnen circuleren voor effectieve warmteoverdracht. Een strak gevuld bad creëert stilstaande koude zones waar zakken elkaar isoleren van het verwarmde water. Als vuistregel: laat ten minste 2 cm waterruimte tussen de zakken en verhoog bij meer dan 4 items de berekende tijd met 15-20% ter compensatie. Beter nog, gebruik een container die groot genoeg is zodat water vrij rond elke zak kan circuleren. Voor bolvormige items zoals gehaktballen neemt het geometrievoordeel aanzienlijk af als ze elkaar raken of gestapeld zijn, omdat de contactpunten de radiale warmteoverdracht blokkeren.',
    },
    {
      type: 'title',
      text: 'Snel Referentieoverzicht: Minimale Veilige Temperaturen en Tijden per Voedseltype',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Voedseltype', 'Minimale Kerntemp', 'Pasteurisatietijd bij Min Temp', 'Sneller bij', 'Aanbevolen voor'],
      rows: [
        ['Kip & Gevogelte', '60°C / 140°F', '~28 min (6,5-log Salmonella)', '65°C: ~3 min houd', 'Alle consumenten'],
        ['Varkensvlees (hele stukken)', '60°C / 140°F', '~28 min (6,5-log Salmonella)', '65°C: ~3 min houd', 'Alle consumenten'],
        ['Rundvlees (steaks, braadstukken)', '55°C / 131°F', '~89 min (6,5-log Salmonella)', '60°C: ~28 min houd', 'Gezonde volwassenen (oppervlakpasteurisatie)'],
        ['Gehakt', '60°C / 140°F', '~28 min (6,5-log Salmonella)', '65°C: onmiddellijk', 'Alle consumenten (bacteriën door het geheel gemengd)'],
        ['Vis & Zeevruchten', '50°C / 122°F', '~55 min (Listeria)', '55°C: ~22 min houd', 'Vooraf ingevroren voor parasietbestrijding'],
        ['Eieren (in de schaal)', '57°C / 135°F', '~75 min (Salmonella)', '60°C: ~28 min houd', 'Gepasteuriseerde schaaleieren'],
        ['Groenten', '85°C / 185°F', 'Niet van toepassing (enzyminactivatie)', 'N.V.T.', 'Pectineafbraak, geen zorg over pathogenen'],
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
