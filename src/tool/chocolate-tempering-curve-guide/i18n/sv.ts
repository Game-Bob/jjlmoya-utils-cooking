import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Chokladtemperering: temperaturschema och ympningsmetod";
const description = "Bemästra chokladtemperering hemma. Beräkna vikten för ympningschoklad (knappar) och följ steg-för-steg termodynamiska temperaturkurvor för mörk, mjölk- och vit choklad.";
const faq = [
  {
    "question": "Vad är chokladtemperering ?",
    "answer": "Temperering är processen att värma, kyla och försiktigt återvärma choklad för att kontrollera kristallisationen av kakaosmöret. Detta tvingar fettmolekylerna att kristallisera i stabila Form V (Beta)-kristaller, vilket ger chokladen en glänsande yta, ett rent knäck och förhindrar att den smälter lätt vid rumstemperatur."
  },
  {
    "question": "Vad är ympningsmetoden ?",
    "answer": "Ympningsmetoden (seeding) innebär att man smälter en del av chokladen och sedan tillsätter fast, redan tempererad choklad (ympningsknappar) under avkylningsfasen. Dessa fasta kristaller fungerar som en mall och guidar det smälta fettet att stelna i den önskade Form V-strukturen utan marmorskiva."
  },
  {
    "question": "Varför får min choklad vita ränder (fettutfällning) ?",
    "answer": "Vita strimmor eller fläckar kallas fettutfällning (fat bloom). Det uppstår när chokladen inte har tempererats korrekt, vilket gör att instabila kakaosmörkristaller vandrar upp till ytan och omkristalliserar. Den är fortfarande ätbar men förlorar glans och textur."
  },
  {
    "question": "Kan jag temperera choklad som redan har fettutfällning ?",
    "answer": "Ja. Fettutfällning är en rent fysisk separation av kristaller, inte ett kemiskt fördärv. Genom att smälta chokladen helt till smälttemperaturen (ca 45-50°C) bryts de instabila kristallerna ner, vilket låter dig starta processen från början."
  },
  {
    "question": "Hur påverkar luftfuktighet och temperatur tempereringen ?",
    "answer": "Choklad är extremt känslig för sin omgivning. Den idealiska rumstemperaturen är 18-22°C och luftfuktigheten bör ligga under 50%. Hög fuktighet kan orsaka kondens på chokladen, vilket leder till sockerutfällning och gör chokladen tjock och obrukbar."
  },
  {
    "question": "Kan jag använda vanliga chokladknappar från mataffären ?",
    "answer": "Vanliga chokladknappar innehåller ofta stabiliseringsmedel och mindre kakaosmör för att hålla formen under gräddning. För ett glänsande resultat med rent knäck rekommenderas professionell kuverturchoklad med minst 31% kakaosmör."
  }
];

const howTo = [
  {
    "name": "Välja chokladtyp",
    "text": "Välj mörk, mjölk- eller vit choklad för att ladda rätt temperaturvärden."
  },
  {
    "name": "Ange totalvikt",
    "text": "Ange önskad totalvikt för den tempererade chokladen."
  },
  {
    "name": "Smältfas",
    "text": "Smält 75% av chokladen (enligt beräkning) till smälttemperaturen (t.ex. 50C för mörk) för att bryta ner kristallerna."
  },
  {
    "name": "Avkylnings- & ympfas",
    "text": "Låt chokladen svalna under omrörning samtidigt som du tillsätter resterande 25% fast ympchoklad."
  },
  {
    "name": "Arbetsfas",
    "text": "Värm försiktigt upp chokladen till arbetstemperatur för att smälta bort eventuella instabila kristaller före användning."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Vad är chokladtemperering ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Temperering är processen att värma, kyla och försiktigt återvärma choklad för att kontrollera kristallisationen av kakaosmöret. Detta tvingar fettmolekylerna att kristallisera i stabila Form V (Beta)-kristaller, vilket ger chokladen en glänsande yta, ett rent knäck och förhindrar att den smälter lätt vid rumstemperatur."
      }
    },
    {
      "@type": "Question",
      "name": "Vad är ympningsmetoden ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ympningsmetoden (seeding) innebär att man smälter en del av chokladen och sedan tillsätter fast, redan tempererad choklad (ympningsknappar) under avkylningsfasen. Dessa fasta kristaller fungerar som en mall och guidar det smälta fettet att stelna i den önskade Form V-strukturen utan marmorskiva."
      }
    },
    {
      "@type": "Question",
      "name": "Varför får min choklad vita ränder (fettutfällning) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vita strimmor eller fläckar kallas fettutfällning (fat bloom). Det uppstår när chokladen inte har tempererats korrekt, vilket gör att instabila kakaosmörkristaller vandrar upp till ytan och omkristalliserar. Den är fortfarande ätbar men förlorar glans och textur."
      }
    },
    {
      "@type": "Question",
      "name": "Kan jag temperera choklad som redan har fettutfällning ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Fettutfällning är en rent fysisk separation av kristaller, inte ett kemiskt fördärv. Genom att smälta chokladen helt till smälttemperaturen (ca 45-50°C) bryts de instabila kristallerna ner, vilket låter dig starta processen från början."
      }
    },
    {
      "@type": "Question",
      "name": "Hur påverkar luftfuktighet och temperatur tempereringen ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Choklad är extremt känslig för sin omgivning. Den idealiska rumstemperaturen är 18-22°C och luftfuktigheten bör ligga under 50%. Hög fuktighet kan orsaka kondens på chokladen, vilket leder till sockerutfällning och gör chokladen tjock och obrukbar."
      }
    },
    {
      "@type": "Question",
      "name": "Kan jag använda vanliga chokladknappar från mataffären ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vanliga chokladknappar innehåller ofta stabiliseringsmedel och mindre kakaosmör för att hålla formen under gräddning. För ett glänsande resultat med rent knäck rekommenderas professionell kuverturchoklad med minst 31% kakaosmör."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Chokladtemperering: temperaturschema och ympningsmetod",
  "description": "Bemästra chokladtemperering hemma. Beräkna vikten för ympningschoklad (knappar) och följ steg-för-steg termodynamiska temperaturkurvor för mörk, mjölk- och vit choklad.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Välja chokladtyp",
      "text": "Välj mörk, mjölk- eller vit choklad för att ladda rätt temperaturvärden."
    },
    {
      "@type": "HowToStep",
      "name": "Ange totalvikt",
      "text": "Ange önskad totalvikt för den tempererade chokladen."
    },
    {
      "@type": "HowToStep",
      "name": "Smältfas",
      "text": "Smält 75% av chokladen (enligt beräkning) till smälttemperaturen (t.ex. 50C för mörk) för att bryta ner kristallerna."
    },
    {
      "@type": "HowToStep",
      "name": "Avkylnings- & ympfas",
      "text": "Låt chokladen svalna under omrörning samtidigt som du tillsätter resterande 25% fast ympchoklad."
    },
    {
      "@type": "HowToStep",
      "name": "Arbetsfas",
      "text": "Värm försiktigt upp chokladen till arbetstemperatur för att smälta bort eventuella instabila kristaller före användning."
    }
  ]
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Chokladtemperering: temperaturschema och ympningsmetod",
  "description": "Bemästra chokladtemperering hemma. Beräkna vikten för ympningschoklad (knappar) och följ steg-för-steg termodynamiska temperaturkurvor för mörk, mjölk- och vit choklad.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  }
};

export const content: ToolLocaleContent = {
  slug: 'choklad-temperering-kurva-guide',
  title,
  description,
  faqTitle: 'Vanliga frågor',
  ui: {
  "title": "Chokladtempererings-Assistent",
  "subtitle": "Termodynamiska kurvor och ympningskalkylator",
  "chocolateTypeLabel": "Chokladtyp",
  "totalWeightLabel": "Önskad totalvikt",
  "meltLabel": "Smältfas",
  "coolLabel": "Avkylnings- & Ympfas",
  "workLabel": "Arbetsfas",
  "meltTempLabel": "Smälttemp.",
  "coolTempLabel": "Avkylningstemp.",
  "workTempLabel": "Arbetstemp.",
  "meltWeightLabel": "Vikt att smälta",
  "seedWeightLabel": "Ympningsvikt (knappar)",
  "molecularLabel": "Molekylärt kristalltillstånd",
  "seedingTitle": "Ympningskalkylator (25% andel)",
  "stepTitle": "Tempereringssteg",
  "darkOption": "Mörk Choklad",
  "milkOption": "Mjölkchoklad",
  "whiteOption": "Vit Choklad",
  "resetButton": "Återställ guide",
  "warningOverheated": "Varning: Temperaturen är för hög! Du kan bränna kakaomassan eller denaturera mjölkproteinerna.",
  "warningUnderheated": "Varning: Temperaturen är för låg. Stabila kristaller har inte bildats eller chokladen stelnar för tidigt.",
  "interactiveInfo": "Klicka på stegen eller dra termometern för att förhandsgranska molekylära faser"
},
  faq,
  howTo,
  seo: [
  {
    "type": "title",
    "text": "Termodynamiken bakom kakaosmörets kristallisation",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Kakaosmör är polymorft, vilket innebär att det kan stelna i sex olika kristallformer (I till VI). Varje form har olika smältpunkt och stabilitet. Målet med tempereringen är att maximera Form V (Beta)-kristaller. Form V ger glans, fasthet och chokladens karakteristiska knäck."
  },
  {
    "type": "stats",
    "columns": 4,
    "items": [
      {
        "value": "Form V",
        "label": "Mål Beta-kristall",
        "icon": "mdi:hexagon-multiple-outline"
      },
      {
        "value": "25-30%",
        "label": "Ympningsförhållande",
        "icon": "mdi:scale"
      },
      {
        "value": "31-32°C",
        "label": "Arbetstemp. Mörk",
        "icon": "mdi:thermometer"
      },
      {
        "value": "0.1-0.2C",
        "label": "Avkylningstakt/min",
        "icon": "mdi:trending-down"
      }
    ]
  },
  {
    "type": "title",
    "text": "De sex polymorfa kristallformerna hos kakaosmör",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Att förstå termodynamiken bakom kristallformerna är nyckeln till framgångsrik temperering. Här är egenskaperna :"
  },
  {
    "type": "table",
    "headers": [
      "Kristallform",
      "Strukturellt namn",
      "Smältpunkt",
      "Stabilitet & Textur"
    ],
    "rows": [
      [
        "Form I",
        "Gamma (γ)",
        "17°C (62.6°F)",
        "Mycket instabil, mjuk, smälter direkt i handen, inget knäck."
      ],
      [
        "Form II",
        "Alpha (α)",
        "21°C (69.8°F)",
        "Instabil, mjuk, smulig struktur, smälter lätt."
      ],
      [
        "Form III",
        "Beta Prime (β')",
        "25.5°C (77.9°F)",
        "Instabil, fast men saknar rent knäck, matt yta."
      ],
      [
        "Form IV",
        "Beta Prime (β')",
        "27.3°C (81.1°F)",
        "Instabil, fast, smälter lite för lätt, dålig glans."
      ],
      [
        "Form V",
        "Beta (β)",
        "33.8°C (92.8°F)",
        "Mycket stabil, fin glans, rent knäck (Önskad form)."
      ],
      [
        "Form VI",
        "Beta (β)",
        "36.3°C (97.3°F)",
        "Mest stabil, hård, bildas under månader, orsakar fettutfällning."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Ympningsmetodens princip",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Ympning är en mycket pålitlig teknik för hemakocken. Genom att spara 25% av chokladen i fast form tillförs en hög koncentration stabila Form V-kristaller till den varma chokladen, vilket styr stelnandet."
  },
  {
    "type": "title",
    "text": "Steg-för-steg vetenskap bakom tempereringskurvan",
    "level": 2
  },
  {
    "type": "list",
    "items": [
      "<strong>Fas 1: Smältning (T > 40°C):</strong> Uppvärmning smälter alla kristaller (I till VI) och ger ett amorft flytande tillstånd.",
      "<strong>Fas 2: Avkylning & ympning (T ≈ 27°C):</strong> Avkylningen startar stelnandet. Tillsats av 25% fast choklad tillför Form V-kristaller.",
      "<strong>Fas 3: Arbete (T ≈ 31°C):</strong> Lätt uppvärmning smälter bort de instabila Form IV-kristallerna och lämnar enbart Form V."
    ]
  },
  {
    "type": "title",
    "text": "Praktiska metoder för temperering hemma",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Du kan nå professionella resultat hemma. Väg ingredienserna noggrant med vår kalkylator :"
  },
  {
    "type": "list",
    "items": [
      "<strong>Vattenbad :</strong> Smält 75% av chokladen i en skål över sjudande vatten. Låt inte skålen röra vattnet och hindra ånga från att komma in. Ta från värmen och rör ner 25% ympchoklad under avkylning. Värm kort till arbetstemperatur.",
      "<strong>Mikrovågsugn :</strong> Smält 75% av chokladen i intervaller på 15-30s vid 50% effekt. Rör ner 25% fast choklad. Värm i intervaller om 5-10s till arbetstemperatur.",
      "<strong>Sous vide :</strong> Lägg chokladen i en vakuumpåse. Smält i vattenbadet. Sänk temperaturen med is och krama påsen regelbundet. Höj till arbetstemperatur."
    ]
  },
  {
    "type": "title",
    "text": "Hur man gör ett tempereringstest",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Testa chokladen före användning. Doppa spetsen av en kniv i chokladen och låt ligga i rumstemperatur (18-22°C). Om tempererad stelnar den på 3-5 minuter med glans och knäck. Annars, smält om."
  },
  {
    "type": "title",
    "text": "Felsökning av tempereringsproblem",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Felaktig temperering ger gråa ränder. Detta löses genom att smälta om chokladen till Fas 1 och göra om processen."
  }
],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
