import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkylator för Emulsionsstabilitet och Oljegräns";
const description = "Ta reda på exakt hur mycket olja din majonnäs, aioli eller vinägrett klarar innan den skär sig. Förhindra skurna såser med vår kostnadsfria kalkylator för emulsionsstabilitet.";
const faq = [
  {
    question: "Hur mycket olja kan jag tillsätta till min majonnäs innan den skär sig?",
    answer: "Det beror på emulgeringsmedlet. Äggula klarar upp till ~78% olja (ungefär 3,5 gånger vattenvolymen), senap upp till 70%, sojalecitin upp till 82% och polysorbat upp till 85%. Använd kalkylatorn ovan för att få exakt maxvärde för dina specifika mängder."
  },
  {
    question: "Varför skär sig eller separerade min emulsion?",
    answer: "En emulsion skär sig när oljans volymfraktion överskrider emulgeringsmedlets maximala packningsgräns. Då pressas oljedropparna så hårt ihop att de smälter samman och blandningen separerar. Detta sker omedelbart - det är inte en gradvis process."
  },
  {
    question: "Hur lagar jag en skuren majonnäs eller aioli?",
    answer: "Börja med en färsk äggula eller en matsked varmt vatten in a ren skål. Ringla långsamt den skurna blandningen i skålen medan du vispar konstant, precis som om du tillsatte rå olja. Kalkylatorn ovan talar om exakt hur mycket vatten eller gula du behöver."
  },
  {
    question: "Gör tillsättning av olja för snabbt att en emulsion skär sig?",
    answer: "Att tillsätta olja för snabbt kan tillfälligt överbelasta emulgeringsmedlet, maste den verkliga orsaken till skärning är alltid ett felaktigt fasförhållande. Om din oljefraktion håller sig under emulgeringsmedlets gräns förblir emulsionen stabil oavsett hastighet. Om den överskrider gränsen är skärning oundviklig."
  },
  {
    question: "Vad är skillnaden mellan äggula och senap som emulgeringsmedel?",
    answer: "Äggula (max 78% olja) innehåller lecitin och lipoproteine som bildar ett robust filmer runt dropparna. Senap (max 70% olja) förlitar sig på slem och proteiner - den är svagare men tillför smak. Sojalecitin (82%) och polysorbat (85%) är mycket effektiva industriella emulgeringsmedel."
  }
];

const howTo = [
  {
    name: "Välj ditt emulgeringsmedel",
    text: "Välj det emulgeringsmedel som finns i ditt recept - äggula för klassisk majonnäs, senap för vinägretter, eller sojalecitin/polysorbat för modernistisk matlagning. Varje typ anger en annan maximal oljegräns."
  },
  {
    name: "Ange din vattenfasvolym",
    text: "Ange det totala antalet milliliter av dina vattenbaserade ingredienser: vatten, vinäger, citronsaft, vin eller någon annan vattenbaserad vätska. Kalkylatorn lägger automatiskt till vatteninnehållet från ditt valda emulgeringsmedel."
  },
  {
    name: "Ställ in din oljevolym",
    text: "Ange mängden olja du planerar att använda. Använd reglaget eller skriv in värdet. Kalkylatorn visar omedelbart om denna mängd ger en stabil emulsion eller får den att skära sig."
  },
  {
    name: "Läs stabilitetsresultatet och åtgärda vid behov",
    text: "Kontrollera mätaren för oljans volymfraktion. Om den är stabil är du redo att gå vidare. Om den är skuren talar räddningspanelen om exakt hur mycket vatten (i ml) oder hur många extra äggulor du behöver tillsätta för att återställa balansen."
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
  slug: 'kalkylator-emulsionsstabilitet',
  title: 'Kalkylator för Emulsionsstabilitet och Oljegräns',
  description: 'Ta reda på exakt hur mycket olja din majonnäs, aioli eller vinägrett klarar innan den skär sig. Förhindra skurna såser med vår kostnadsfria kalkylator för emulsionsstabilitet.',
  faqTitle: 'Vanliga Frågor',
  ui: {
    title: 'Emulsionsstabilitetsanalysator',
    subtitle: 'Hur mycket olja tål din sås innan den skär sig?',
    waterLabel: 'Vattenfas (ml)',
    oilLabel: 'Oljevolym (ml)',
    emulsifierLabel: 'Typ av Emulgeringsmedel',
    yolkOption: 'Äggula',
    mustardOption: 'Senap',
    soyLecithinOption: 'Sojalecitin',
    polysorbateOption: 'Polysorbat',
    stableStatus: 'Stabil Emulsion',
    brokenStatus: 'Skuren Emulsion',
    ratioLabel: 'Oljans Volymfraktion',
    maxLimitLabel: 'Maximal Oljegräns',
    fixTitle: 'Räddningsstrategi',
    waterFixText: 'Tillsätt vatten för att återställa fasbalansen:',
    yolkFixText: 'Alternativt, använd extra äggula:',
    idealRangeText: 'Idealiskt intervall ligger under den kritiska packningsgränsen på 74% till 80%.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Hur Mycket Olja Tål en Majonnäs eller Aioli Innan Den Skär Sig?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Varje kock har ställt denna fråga: <strong>varför skär sig min majonnäs?</strong> Svaret är enklare än det verkar. En emulsion - vare sig det är en klassisk aioli, en krämig vinägrett eller ett modernistiskt skum - kan bara hålla en begränsad mängd olja innan den kollapsar. Vår <strong>kalkylator för emulsionsstabilitet</strong> talar om exakt var den brytpunkten ligger, baserat på dina specifika ingredienser och mängder.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '78%',
          label: 'Äggula Max Olja',
          icon: 'mdi:egg-outline'
        },
        {
          value: '85%',
          label: 'Polysorbat Gräns',
          icon: 'mdi:flask-outline'
        },
        {
          value: '74%',
          label: 'Teoretisk Packning',
          icon: 'mdi:sphere'
        },
        {
          value: '15 ml',
          label: 'Gulans Vatteninnehåll',
          icon: 'mdi:water'
        }
      ]
    },
    {
      type: 'title',
      text: 'Vetenskapen: Varför Emulsioner Skär Sig',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'En kulinarisk emulsion fungerar genom att sprida små oljedroppar i en kontinuerlig vattenfas. <strong>Emulgeringsmedel</strong> - sådana som lecitinet i äggula, slemmet i senap oder syntetiska ytaktiva ämnen som polysorbat - belägger varje droppe och förhindrar att den slås samman med sina grannar.'
    },
    {
      type: 'paragraph',
      html: 'Brytpunkten bestäms av ren geometri. Oljedroppar beter sig som små klot packade tillsammans. Den maximala volymen klot som får plats i ett givet utrymme - känt som <strong>Keplers förmodan</strong> - är ungefär 74%. I verkliga kökssystem kan detta sträckas till 80-85% med kraftfulla emulgeringsmedel, men därutöver pressas dropparna så hårt att de slås samman och emulsionen kollapsar omedelbart.'
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Äggula',
          icon: 'mdi:egg-outline',
          description: 'Det klassiska majonnäsemulgeringsmedlet. Innehåller lecitin och lipoproteiner.',
          highlight: true,
          points: [
            'Max olja: 78%',
            '~15 ml vatten per gula',
            'Ger rikedom och färg',
            'Bäst för majonnäs och aioli'
          ]
        },
        {
          title: 'Senap',
          icon: 'mdi:shaker-outline',
          description: 'Förlitar sig på slem och proteiner. Ger syrlig smak.',
          points: [
            'Max olja: 70%',
            '~10 ml vatteninnehåll',
            'Svagare emulgeringsförmåga',
            'Idealisk för vinägretter'
          ]
        },
        {
          title: 'Sojalecitin',
          icon: 'mdi:leaf',
          description: 'Högt koncentrerat växtbaserat ytaktivt ämne.',
          points: [
            'Max olja: 82%',
            '~5 ml vatteninnehåll',
            'Neutral smakprofil',
            'Modernistisk basvara'
          ]
        },
        {
          title: 'Polysorbat',
          icon: 'mdi:flask-outline',
          description: 'Syntetiskt emulgeringsmedel med maximal ytaktiv kapacitet.',
          points: [
            'Max olja: 85%',
            '~2 ml vatteninnehåll',
            'Högsta oljetolerans',
            'Används i skum'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emulgeringsmedel', 'Max Olje %', 'Olja per 100 ml Vatten', 'Bästa Användning'],
      rows: [
        ['Äggula', '78%', '~355 ml', 'Majonnäs, aioli, hollandaisesås'],
        ['Senap', '70%', '~233 ml', 'Vinägretter, lätta dressingar'],
        ['Sojalecitin', '82%', '~456 ml', 'Modernistiska såser, skum'],
        ['Polysorbat', '85%', '~567 ml', 'Stabila skum, experimentell matlagning']
      ]
    },
    {
      type: 'title',
      text: 'Hur Man Räddar en Skuren Emulsion Steg för Steg',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Om din majonnäs eller sås redan har skurit sig, <strong>släng den inte</strong>. Lösningen är enkel - men bara om du förstår fasförhållandet. Att vispa hårdare hjälper inte; du måste tillsätta mer av den kontinuerliga (vatten) fasen.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Vanliga Tecken på att Din Emulsion är på Väg att Skära Sig',
      html: 'Håll utkik efter <strong>tjockning följt av plötslig förtunning</strong>, en <strong>glansig yta som blir grynig</strong> eller synlig olja som samlas vid kanterna. Om du ser något av detta, sluta omedelbart tillsätta olja och vispa i en tesked kallt vatten innan du fortsätter.'
    },
    {
      type: 'title',
      text: 'Praktiska Tips för Perfekta Emulsioner Varje Gång',
      level: 3
    },
    {
      type: 'tip',
      title: 'Temperaturen Spelar Roll',
      html: 'Alla ingredienser bör vara i <strong>rumstemperatur</strong>. Kalla ägg eller kall olja ökar dramatiskt risken för skärning. Ta ut ingredienserna ur kylskåpet 30 minuter innan du börjar.'
    },
    {
      type: 'tip',
      title: 'Vattensäkerhetsnätet',
      html: 'Om ditt recept inte innehåller tillräckligt med syra (vinäger, citronsaft), tillsätt <strong>en tesked kallt vatten per äggula</strong> innan du börjar tillsätta olja. Detta extra vatten skapar en bredare säkerhetsmarginal.'
    },
    {
      type: 'tip',
      title: 'Laga en Skuren Sats',
      html: 'Lägg en färsk äggula i en ren skål. Vispa den med en tesked vatten. Ringla sedan <strong>den skurna blandningen i så långsamt som möjligt</strong>, precis som om det vore rå olja. När den har emulgerats om kan du tillsätta resten snabbare.'
    },
    {
      type: 'title',
      text: 'Ordlista för Kulinariska Emulsioner',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Kontinuerlig Fas',
          definition: 'Vätskan som omger dropparna - vanligtvis vatten, vinäger eller citrusjuice i olja-i-vatten-emulsioner som majonnäs.'
        },
        {
          term: 'Dispers Fas',
          definition: 'Vätskan som är bruten i små droppar - olja i de flesta kulinariska emulsioner. Ju mer du tillsätter, desto tätare packas dropparna.'
        },
        {
          term: 'Volymfraktion',
          definition: 'Förhållandet mellan oljevolym och total volym. Vid ungefär 74-85% (beroende på emulgeringsmedel) når emulsionen sin geometriska brytpunkt.'
        },
        {
          term: 'Koalescens',
          definition: 'När två eller fler oljedroppar slås samman till en större. Detta är den mikroskopiska process som utlöser ett synligt emulsionbrott.'
        },
        {
          term: 'Fasinversion',
          definition: 'Punkten där en olja-i-vatten-emulsion vänder till vatten-i-olja - som när man gör smör av grädde. Detta är det ultimata felsättet.'
        }
      ]
    },
    {
      type: 'paragraph',
      html: 'Oavsett om du gör en klassisk fransk majonnäs, en vitlöks-aioli, en stabil vinägrett eller experimenterar med modernistiska hydrokolloider, är förståelsen av <strong>olja-till-vatten-förhållandet</strong> den enskilt viktigaste faktorn. Vår kalkylator sköter matematiken så att du kan laga mat med självförtroende.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
