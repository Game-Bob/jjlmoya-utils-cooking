import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkylator för Emulsionsstabilitet och Oljegräns";
const description = "Ta reda på exakt hur mycket olja din majonnäs, aioli eller vinägrett kan bära innan den skär sig. Förhindra spruckna såser med vår kostnadsfria kalkylator för emulsionsstabilitet.";

const faq = [
  {
    question: "Hur mycket olja kan jag tillsätta i min majonnäs innan den skär sig?",
    answer: "Det beror på emulgeringsmedlet. Äggula klarar upp till ~78 % olja (ca 3,5 gånger vattenvolymen), senap upp till 70 %, sojalecitin upp till 82 % och polysorbat upp till 85 %. Använd kalkylatorn ovan för att få den exakta maxgränsen för dina specifika mängder."
  },
  {
    question: "Varför skar sig eller separerade min emulsion?",
    answer: "En emulsion skär sig när oljans volymfraktion överskrider emulgeringsmedlets maximala packningsgräns. Vid den punkten pressas oljedropparna så tätt ihop att de sammansmälter och blandningen separerar. Detta sker omedelbart - det är inte en gradvis process."
  },
  {
    question: "Hur räddar jag en sprucken majonnäs eller aioli?",
    answer: "Börja med en färsk äggula eller en matsked ljummet vatten i en ren skål. Häll långsamt i den spruckna blandningen under ständig vispning, exakt som när du tillsätter rå olja. Kalkylatorn ovan talar om exakt hur mycket vatten eller äggula du behöver."
  },
  {
    question: "Orsakar för snabb tillsats av olja att en emulsion skär sig?",
    answer: "Att tillsätta olja för snabbt kan tillfälligt överbelasta emulgeringsmedlet, men den verkliga orsaken till att den skär sig är alltid ett felaktigt fasförhållande. Om oljefraktionen hålls under emulgeringsmedlets gräns förblir emulsionen stabil oavsett hastighet. Överskrids gränsen är sprickning oundviklig."
  },
  {
    question: "Vad är skillnaden mellan äggula och senap som emulgeringsmedel?",
    answer: "Äggula (max 78 % olja) innehåller lecitin och lipoproteiner som bildar en robust film runt dropparna. Senap (max 70 % olja) bygger på växtslem och proteiner - den är svagare men ger smak. Sojalecitin (82 %) och polysorbat (85 %) är mycket effektiva industriella emulgeringsmedel."
  }
];

const howTo = [
  {
    name: "Välj ditt emulgeringsmedel",
    text: "Välj emulgeringsmedel i ditt recept - äggula för klassisk majonnäs, senap för vinägrett, eller sojalecitin/polysorbat för modernistisk matlagning. Varje medel sätter en unik maximal oljegräns."
  },
  {
    name: "Ange volymen på din vattenfas",
    text: "Mata in totalt antal milliliter av dina vattenbaserade ingredienser: vatten, vinäger, citronsaft, vin eller annan vattenbaserad vätska. Kalkylatorn lägger automatiskt till vatteninnehållet från ditt valda emulgeringsmedel."
  },
  {
    name: "Ställ in din oljevolym",
    text: "Ange den mängd olja du planerar att använda. Använd skjutreglaget eller skriv in värdet. Kalkylatorn visar direkt om mängden ger en stabil emulsion eller får den att skära sig."
  },
  {
    name: "Läs av stabilitetsresultatet och korrigera vid behov",
    text: "Kontrollera mätaren för oljans volymfraktion. Om den är stabil är du redo. Om den skär sig visar räddningspanelen exakt hur mycket vatten (i ml) eller hur många extra äggulor du behöver tillsätta för att återställa balansen."
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
  slug: 'emulgering-stabilitekalkylator',
  title,
  description,
  faqTitle: 'Vanliga Frågor',
  ui: {
    title: 'Analysator för Emulsionsstabilitet',
    subtitle: 'Hur mycket olja klarar din sås innan den skär sig?',
    waterLabel: 'Vattenfas (ml)',
    oilLabel: 'Oljevolym (ml)',
    emulsifierLabel: 'Typ av Emulgeringsmedel',
    yolkOption: 'Äggula',
    mustardOption: 'Senap',
    soyLecithinOption: 'Sojalecitin',
    polysorbateOption: 'Polysorbat',
    stableStatus: 'Stabil Emulsion',
    brokenStatus: 'Sprucken Emulsion',
    ratioLabel: 'Oljans Volymfraktion',
    maxLimitLabel: 'Maximal Oljegräns',
    fixTitle: 'Räddningsstrategi',
    waterFixText: 'Tillsätt vatten för att återställa fasbalansen:',
    yolkFixText: 'Alternativt använd extra äggula:',
    idealRangeText: 'Det ideala intervallet ligger under den kritiska packningsgränsen på 74 % till 80 %.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Hur Mycket Olja Kan en Majonnäs eller Aioli Bära Innan Den Skär Sig?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Alla kockar har ställt sig frågan: <strong>varför skar sig min majonnäs?</strong> Svaret är enklare än det verkar. En emulsion - oavsett om det är en klassisk aioli, en krämig vinägrett eller ett modernistiskt skum - kan bara bära en ändlig mängd olja innan den kollapsar. Vår <strong>kalkylator för emulsionsstabilitet</strong> visar exakt var brytpunkten ligger baserat på dina ingredienser och proportioner.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '78%', label: 'Äggula Max Olja', icon: 'mdi:egg-outline' },
        { value: '85%', label: 'Polysorbatgräns', icon: 'mdi:flask-outline' },
        { value: '74%', label: 'Teoretisk Packning', icon: 'mdi:sphere' },
        { value: '15 ml', label: 'Vatten i Äggula', icon: 'mdi:water' }
      ]
    },
    {
      type: 'list',
      items: [
        '<strong>Du tillsätter oljan för snabbt</strong> - Hastigheten är sällan den verkliga orsaken. Om oljefraktionen hålls under emulgeringsmedlets gräns håller emulsionen oavsett hur snabbt du häller.',
        '<strong>Dina ingredienser är för kalla</strong> - Kalla ägg eller kall olja ökar viskositeten och gör det svårare för droppar att bildas. Rumstemperera alltid ingredienserna.',
        '<strong>Du har överskridit oljegränsen för ditt emulgeringsmedel</strong> - Varje medel har en maximal packningsfraktion. Äggula upp till 78 %, senap 70 %, sojalecitin 82 % och polysorbat 85 %.',
        '<strong>Din vattenfas är för liten</strong> - Utan tillräckligt med vatten som omger oljedropparna har de ingenstans att ta vägen förutom att flyta ihop.'
      ]
    },
    {
      type: 'title',
      text: 'Vilket emulgeringsmedel ska du använda? En praktisk jämförelse',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Att välja rätt emulgeringsmedel beror på ditt recept, din smakprofil och önskad oljekapacitet. Så här jämförs de fyra vanligaste kulinariska emulgeringsmedlen.'
    },
    {
      type: 'proscons',
      title: 'Äggula',
      items: [
        { pro: 'Maximal smakkompatibilitet för klassiska såser', con: 'Tillsätter kolesterol och äggsmak' },
        { pro: 'Innehåller lecitin och lipoproteiner för robusta emulsioner', con: 'Kräver noggrann temperaturkontroll' },
        { pro: 'Ger naturlig färg och fyllighet', con: 'Inte lämplig för veganska tillredningar' },
        { pro: 'Fungerar upp till 78 % oljefraktion', con: 'Begränsad till ca 15 ml vattenbidrag per äggula' }
      ]
    },
    {
      type: 'proscons',
      title: 'Senap',
      items: [
        { pro: 'Ger sting och komplexitet åt dressingar', con: 'Lägre maximal oljekapacitet (70 %)' },
        { pro: 'Lätttillgänglig och enkel att använda', con: 'Svagare emulgeringsförmåga än äggula' },
        { pro: 'Fungerar bra i rumstemperatur', con: 'Smaken kan krocka med subtila såser' },
        { pro: 'Idealisk för snabba vinägretter', con: 'Inte lämplig för emulsioner med neutral smak' }
      ]
    },
    {
      type: 'proscons',
      title: 'Sojalecitin',
      items: [
        { pro: 'Hög oljetolerans (82 %) för stabila såser', con: 'Kräver exakt vägning' },
        { pro: 'Neutral smak ändrar inte recept', con: 'Mindre förlåtande än äggula' },
        { pro: 'Växtbaserat och lämpligt för veganer', con: 'Inte en standardingrediens i hemmaköket' },
        { pro: 'Fungerar med små vattenvolymer', con: 'Kan ge en något artificiell konsistens' }
      ]
    },
    {
      type: 'proscons',
      title: 'Polysorbat',
      items: [
        { pro: 'Högsta oljekapaciteten av alla emulgeringsmedel (85 %)', con: 'Syntetisk tillsats, inte naturlig' },
        { pro: 'Skapar ultrastabila skum och luftstrukturer', con: 'Svårt att få tag på för hemmabruk' },
        { pro: 'Fungerar med en minimal vattenfas', con: 'Kräver våg för exakt dosering' },
        { pro: 'Idealisk för modernistisk och experimentell matlagning', con: 'Dominant vid överanvändning' }
      ]
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Äggula',
          icon: 'mdi:egg-outline',
          description: 'Det klassiska emulgeringsmedlet för majonnäs. Innehåller lecitin och lipoproteiner.',
          highlight: true,
          points: ['Max olja: 78%', '~15 ml vatten per äggula', 'Ger fyllighet och färg', 'Bäst för majonnäs och aioli']
        },
        {
          title: 'Senap',
          icon: 'mdi:shaker-outline',
          description: 'Bygger på växtslem och fröproteiner. Ger sting i smaken.',
          points: ['Max olja: 70%', '~10 ml vatteninnehåll', 'Svagare emulgeringsförmåga', 'Idealisk för vinägretter']
        },
        {
          title: 'Sojalecitin',
          icon: 'mdi:leaf',
          description: 'Koncentrerat växtbaserat ytaktivt ämne.',
          points: ['Max olja: 82%', '~5 ml vatteninnehåll', 'Neutral smakprofil', 'Basvara i modernistisk matlagning']
        },
        {
          title: 'Polysorbat',
          icon: 'mdi:flask-outline',
          description: 'Syntetiskt emulgeringsmedel med maximal kapacitet.',
          points: ['Max olja: 85%', '~2 ml vatteninnehåll', 'Högst oljetolerans', 'Används i skum och luftstrukturer']
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emulgeringsmedel', 'Max Olja %', 'Olja per 100 ml Vatten', 'Bästa Användning'],
      rows: [
        ['Äggula', '78%', '~355 ml', 'Majonnäs, aioli, hollandaise'],
        ['Senap', '70%', '~233 ml', 'Vinägrett, lätta dressingar'],
        ['Sojalecitin', '82%', '~456 ml', 'Modernistiska såser, skum'],
        ['Polysorbat', '85%', '~567 ml', 'Stabila skum, experimentella rätter']
      ]
    },
    {
      type: 'title',
      text: 'Vetenskapen: Varför Emulsioner Skär Sig och Keplers Förmodan i Köket',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'En kulinarisk emulsion fungerar genom att sprida ut mikroskopiska oljedroppar i en kontinuerlig vattenfas. <strong>Emulgeringsmedel</strong> - som lecitin i äggula, växtslem i senap eller syntetiska ämnen som polysorbat - omger varje droppe och förhindrar att de flyter ihop.'
    },
    {
      type: 'paragraph',
      html: 'Brytpunkten styrs av ren geometri. Oljedropparna uppträder som små packade sfärer. Den maximala volymen sfärer som får plats i ett givet utrymme - känt som <strong>Keplers förmodan</strong> - är cirka 74 %. I praktisk matlagning kan detta sträckas till 80-85 % med starka emulgeringsmedel, men därutöver pressas dropparna så hårt att de sammansmälter och emulsionen kollapsar omedelbart.'
    },
    {
      type: 'card',
      columns: 2,
      items: [
        {
          icon: 'mdi:egg-outline',
          title: 'Klassisk Majonnäs & Aioli',
          html: 'Använd <strong>äggula</strong> upp till 78 % olja. Börja med en äggula per dl olja. Tillsätt en tesked vatten eller citronsaft innan du häller i oljan för en bredare säkerhetsmarginal.'
        },
        {
          icon: 'mdi:shaker-outline',
          title: 'Vinägrett & Lätta Dressingar',
          html: 'Använd <strong>senap</strong> upp till 70 % olja. Växtslemmet i senapen ger tillräcklig emulgering för en tillfällig vinägrett.'
        },
        {
          icon: 'mdi:leaf',
          title: 'Modernistiska Såser & Stabila Skum',
          html: 'Använd <strong>sojalecitin</strong> upp till 82 % olja. Idealisk för emulsioner med neutral smak där du vill att olje- och syrasmaken ska träda fram.'
        },
        {
          icon: 'mdi:flask-outline',
          title: 'Experimentella Skum & Luftstrukturer',
          html: 'Använd <strong>polysorbat</strong> upp till 85 % olja. Förstavalet för modernistiska tekniker som kräver maximal oljemängd och skumstabilitet.'
        }
      ]
    },
    {
      type: 'title',
      text: 'Steg för Steg: Så Räddar Du en Sprucken Emulsion',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Om din majonnäs eller sås redan har skurit sig - <strong>släng den inte</strong>. Lösningen är enkel, men bara om du förstår fasförhållandet. Att vispa hårdare hjälper inte; du måste tillsätta mer kontinuerlig fas (vatten).'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '3 Vanliga Tecken på att Din Emulsion Håller på att Skära Sig',
      html: 'Håll utkik efter att den <strong>tjocknar och sedan plötsligt blir tunn</strong> som en första varning. Se därefter om den <strong>blanka ytan blir kornig</strong> eller om <strong>synlig olja samlas i kanterna</strong>. Om du ser något av detta, sluta omedelbart att tillsätta olja och vispa ner en tesked kallt vatten innan du fortsätter.'
    },
    {
      type: 'title',
      text: 'Praktiska Tips för Perfekta Emulsioner Varje Gång',
      level: 3
    },
    {
      type: 'message',
      html: '<strong>Gyllene regeln:</strong> Förhållandet mellan olja och vatten väger tyngre än teknik, temperatur eller visphastighet. Använd vår kalkylator för att hitta din exakta oljegräns innan du börjar vispa.'
    },
    {
      type: 'tip',
      title: 'Temperaturen Spelar Roll',
      html: 'Alla ingredienser bör vara <strong>rumstempererade</strong>. Kalla ägg eller kall olja ökar risken för att såsen skär sig avsevärt. Ta ut ingredienserna ur kylskåpet 30 minuter innan du börjar.'
    },
    {
      type: 'tip',
      title: 'Vatten som Säkerhetsnät',
      html: 'Om ditt recept inte innehåller tillräckligt med syra (vinäger, citronsaft), tillsätt <strong>en tesked kallt vatten per äggula</strong> innan du börjar hälla i oljan. Det extra vattnet ger en större säkerhetsmarginal.'
    },
    {
      type: 'tip',
      title: 'Rädda en Sprucken Sats',
      html: 'Lägg en färsk äggula i en ren skål. Vispa den med en tesked vatten. Häll sedan i <strong>den spruckna blandningen så långsamt som möjligt</strong>, exakt som om det vore rå olja. När den återemulgerat kan du tillsätta resten snabbare.'
    },
    {
      type: 'title',
      text: 'Kulinarisk Emulsionsordlista',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Kontinuerlig Fas',
          definition: 'Vätskan som omger oljedropparna - vanligtvis vatten, vinäger eller citrussaft i olja-i-vatten-emulsioner som majonnäs.'
        },
        {
          term: 'Dispergerad Fas',
          definition: 'Vätskan som är uppdelad i mikroskopiska droppar - oljan i de flesta kulinariska emulsioner. Ju mer du tillsätter, desto tätare packas dropparna.'
        },
        {
          term: 'Volymfraktion',
          definition: 'Förhållandet mellan oljevolym och totalvolym. Vid cirka 74-85 % (beroende på emulgeringsmedel) når emulsionen sin geometriska brytpunkt.'
        },
        {
          term: 'Koalescens',
          definition: 'När två eller flera oljedroppar flyter ihop till en större droppe. Detta är den mikroskopiska processen som orsakar att såsen skär sig synbart.'
        },
        {
          term: 'Fasinversion',
          definition: 'Punkten där en olja-i-vatten-emulsion slår om till vatten-i-olja - som när man kärnar smör av grädde.'
        }
      ]
    },
    {
      type: 'summary',
      title: 'Viktiga Punkter för Stabila Emulsioner',
      items: [
        'Varje emulgeringsmedel har en maximal oljefraktion: äggula 78 %, senap 70 %, sojalecitin 82 %, polysorbaat 85 %.',
        'Brytpunkten styrs av geometri (Keplers förmodan vid 74 %), inte av hur snabbt du vispar.',
        'Börja alltid med rumstempererade ingredienser och tillsätt lite vatten som säkerhetsbuffert.',
        'En sprucken emulsion räddas genom att tillsätta nytt emulgeringsmedel och mer vattenfas, inte genom att vispa hårdare.',
        'Använd vår kalkylator för emulsionsstabilitet ovan för att få exakt oljegräns för dina ingredienser.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
