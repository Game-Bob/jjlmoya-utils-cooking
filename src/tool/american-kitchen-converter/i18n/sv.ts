import type { ToolLocaleContent } from '../../../types';

const title = "Amerikansk Köksomvandlare: Cups till Gram och Temperaturer";
const description = "Omvandla cups, matskedar och Fahrenheit till det metriska systemet. Kompassen för att tyda amerikanska recept med professionell precision.";
const faq = [
  {
    question: 'Vad är skillnaden mellan 1 cup och 250 ml?',
    answer: '1 amerikansk cup = 236,588 ml, inte 250 ml. För praktiska ändamål använder vi 240 ml. Även om skillnaden på 4 % verkar liten, kan den påverka känsliga recept som macarons eller mousse.',
  },
  {
    question: 'Varför väger mjöl inte alltid lika mycket?',
    answer: 'Eftersom mjöl packas ihop med tiden och under transport. Ny-siktat mjöl väger mindre än mjöl som har stått i skafferiet. Därför väger professionella bagare alltid ingredienserna istället för att mäta volym.',
  },
  {
    question: 'Vad är skillnaden mellan msk (Tbsp) och tsk (tsp)?',
    answer: '1 Tablespoon (Tbsp/matsked) = 15 ml. 1 Teaspoon (tsp/tesked) = 5 ml. En matsked är tre gånger så mycket som en tesked. I bakrecept är felmarginaler vid kryddmått (som mäts i tsk) vanliga.',
  },
  {
    question: 'Är en US cup samma sak som en Imperial cup?',
    answer: 'Nej. 1 US cup = 236 ml. 1 Imperial cup (UK) = 284 ml. Det är en skillnad på 20 %. De flesta amerikanska matbloggarna använder US cups. Om receptet inte anger något annat bör du utgå från US.',
  },
  {
    question: 'Vilken temperatur motsvarar ugnens "gas 4"?',
    answer: 'Gas 4 = 180°C = 350°F. Detta är den brittiska skalan. I köket letar vi efter motsvarande värde för din ugn: vissa använder gaslägen, andra elektroniska grader.',
  },
];
const howTo = [
  {
    name: 'Välj typ av omvandling',
    text: 'Välj mellan Cups till Gram, Matskedar/Teskedar till Gram, eller Fahrenheit till Celsius.',
  },
  {
    name: 'Välj ingrediens',
    text: 'Varje livsmedel har olika densitet. Mjöl, socker, smör – alla väger olika mycket.',
  },
  {
    name: 'Ange mängd',
    text: 'Skriv in antalet cups, skedar eller grader. Omvandlaren beräknar motsvarande värde direkt.',
  },
  {
    name: 'Justera ditt recept',
    text: 'Med den exakta omvandlingen kan du nu följa det amerikanska receptet med professionell precision.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
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
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'omvandlare-amerikanska-koksenheter',
  title: 'Amerikansk Köksomvandlare: Cups till Gram och Temperaturer',
  description: 'Omvandla cups, matskedar och Fahrenheit till det metriska systemet. Kompassen för att tyda amerikanska recept med professionell precision.',
  faqTitle: 'Vanliga frågor',
  bibliographyTitle: 'Bibliografi',
  ui: {
    copied: 'Kopierat',
    noHistory: 'Ingen historik',
    load: 'Ladda',
    delete: 'Ta bort',
    tabCups: 'Cups till Gram',
    tabSpoons: 'Skedar till Gram',
    tabTemperatures: 'Temperaturer',
    tabCupsAriaLabel: 'Cups till Gram',
    tabSpoonsAriaLabel: 'Skedar till Gram',
    tabTempsAriaLabel: 'Ugnstemperaturer',
    stepSelectIngredient: 'Välj ingrediens',
    stepHowManyCups: 'Hur många Cups?',
    stepSelectMeasure: 'Välj mått',
    stepQuantity: 'Antal',
    stepOvenConversion: 'Ugnsomvandling',
    stepFrequentTemps: 'Vanliga temperaturer i recept',
    cupFlour: 'Mjöl',
    cupFlourSub: '120g / cup',
    cupWhiteSugar: 'Vitt socker',
    cupWhiteSugarSub: '200g / cup',
    cupBrownSugar: 'Farinsocker',
    cupBrownSugarSub: '220g / cup',
    cupPowderSugar: 'Florsocker',
    cupPowderSugarSub: '115g / cup',
    cupButter: 'Smör',
    cupButterSub: '227g / cup',
    cupCocoa: 'Kakaopulver',
    cupCocoaSub: '85g / cup',
    cupLiquids: 'Vätskor',
    cupLiquidsSub: '240g / cup',
    cupOats: 'Havregryn',
    cupOatsSub: '90g / cup',
    cupFlourAriaLabel: 'Mjöl',
    cupWhiteSugarAriaLabel: 'Vitt socker',
    cupBrownSugarAriaLabel: 'Farinsocker',
    cupPowderSugarAriaLabel: 'Florsocker',
    cupButterAriaLabel: 'Smör',
    cupCocoaAriaLabel: 'Kakao',
    cupLiquidsAriaLabel: 'Vätska',
    cupOatsAriaLabel: 'Havregryn',
    stepperMinus: 'Minska',
    stepperPlus: 'Öka',
    cupsAmountLabel: 'Antal cups',
    spoonQuantityLabel: 'Antal',
    cupQuick1_4: '1/4 Cup',
    cupQuick1_3: '1/3 Cup',
    cupQuick1_2: '1/2 Cup',
    cupQuick1: '1 Cup',
    unitGrams: 'Gram',
    unitGramsML: 'Gram / Milliliter',
    spoonMeasureLabel: 'Välj mått',
    spoonTablespoon: 'Matsked (msk/Tbsp)',
    spoonTeaspoon: 'Tesked (tsk/tsp)',
    spoonTablespoonAriaLabel: 'Matsked',
    spoonTeaspoonAriaLabel: 'Tesked',
    spoonSelectIngredient: 'Välj ingrediens',
    spoonLeavening: 'Jäsmedel',
    spoonLeaveningSub: 'Bakpulver',
    spoonSalt: 'Fintsalt',
    spoonSaltSub: 'Mineral',
    spoonSugar: 'Vitt socker',
    spoonSugarSub: 'Strösocker',
    spoonLiquids: 'Vätskor',
    spoonLiquidsSub: 'Vatten, olja',
    spoonLeavingAriaLabel: 'Bakpulver',
    spoonSaltAriaLabel: 'Salt',
    spoonSugarAriaLabel: 'Vitt socker',
    spoonLiquidsAriaLabel: 'Vätska',
    spoonQuick1_4: '1/4',
    spoonQuick1_2: '1/2',
    spoonQuick1: '1',
    spoonQuick2: '2',
    tempFahrenheit: 'Fahrenheit (°F)',
    tempCelsius: 'Celsius (°C)',
    tempFahrenheitAriaLabel: 'Fahrenheit',
    tempCelsiusAriaLabel: 'Celsius',
    tempPreset275: '275°F',
    tempPreset275Desc: '135°C - Torkning',
    tempPreset275AriaLabel: 'Ställ in 275 Fahrenheit',
    tempPreset325: '325°F',
    tempPreset325Desc: '165°C - Kompakt mjuka kakor',
    tempPreset325AriaLabel: 'Ställ in 325 Fahrenheit',
    tempPreset350: '350°F',
    tempPreset350Desc: '175°C - Standard bakning',
    tempPreset350AriaLabel: 'Ställ in 350 Fahrenheit',
    tempPreset400: '400°F',
    tempPreset400Desc: '200°C - Bröd / Paj',
    tempPreset400AriaLabel: 'Ställ in 400 Fahrenheit',
    tempPreset425: '425°F',
    tempPreset425Desc: '220°C - Pizza / Smördeg',
    tempPreset425AriaLabel: 'Ställ in 425 Fahrenheit',
  },
  seo: [
    {
      type: 'title',
      text: 'Mästarguide för amerikansk köksomvandlare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att omvandla <strong>cups till gram</strong> eller <strong>Fahrenheit till Celsius</strong> är det första steget för att bemästra internationella recept. Amerikansk matlagning bygger på volym, vilket medför en variation på upp till 25 % för torra ingredienser som mjöl.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '120g',
          label: '1 Cup mjöl',
          icon: 'mdi:grain',
        },
        {
          value: '227g',
          label: 'Stick smör',
          icon: 'mdi:cube-outline',
        },
        {
          value: '175°C',
          label: 'Motsvarar 350°F',
          icon: 'mdi:thermometer',
        },
        {
          value: '240ml',
          label: 'Volym 1 Cup',
          icon: 'mdi:water-percent',
        },
      ],
    },
    {
      type: 'title',
      text: 'Kritiska skillnader mellan volym och vikt',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Mätning per volym (Cups)',
          icon: 'mdi:cup-water',
          description: 'Används i amerikanska hemrecept. Mäter utrymmet ingrediensen tar upp.',
          points: [
            'Väldigt beroende av hur hårt packat det är',
            'Vanligt fel på 20-30 % för mjöl',
            'Inkonsekvent mellan olika märken på måttsatsen',
            'Kräver att man siktar mjölet först för högre precision',
          ],
        },
        {
          title: 'Mätning per vikt (Gram)',
          icon: 'mdi:scale-balance',
          description: 'Standard inom professionell bakning och Europa. Absolut precision.',
          highlight: true,
          points: [
            'Alltid precision på +/- 1g',
            'Konsekventa och repeterbara resultat',
            'Mindre disk (endast en skål)',
            'Underlättar matematisk skalning',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Motsvarigheter för vanliga ingredienser',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Ingrediens', '1 Cup (Volym)', 'Gram (Vikt)', 'Densitet'],
      rows: [
        ['Vetemjöl', '1 Cup', '120g', 'Låg'],
        ['Vitt socker', '1 Cup', '200g', 'Medel'],
        ['Farinsocker', '1 Cup', '220g (packat)', 'Hög'],
        ['Smör', '1 Cup (2 sticks)', '227g', 'Hög'],
        ['Kakaopulver', '1 Cup', '85g', 'Väldigt låg'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Blev din kaka torr?',
      html: 'Det vanligaste problemet när man använder cups är att man "doppar måttet" direkt i mjölpåsen. Det packar ihop mjölet och du kan råka tillsätta upp till 40 g extra mjöl per cup. Lösningen är att <strong>alltid omvandla till gram</strong> med vår omvandlare.',
    },
    {
      type: 'title',
      text: 'Ordlista för amerikanska enheter',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cup',
          definition: 'Volymmått motsvarande cirka 240 ml. Grunden i det amerikanska köket.',
        },
        {
          term: 'Tbsp (Tablespoon)',
          definition: 'Matsked, motsvarar 15 ml eller 3 teaspoons.',
        },
        {
          term: 'tsp (Teaspoon)',
          definition: 'Tesked, motsvarar 5 ml. Avgörande för bakpulver och salt.',
        },
        {
          term: 'Stick of Butter',
          definition: 'Vanligt format för smör i USA som väger exakt 113,5 g (en halv cup).',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Skedtricket',
      html: 'Om du inte har en våg och MÅSTE använda cups, fyll måttet med en sked utan att trycka och jämna av med en kniv. Det är mycket mer exakt än att doppa måttet.',
    },
    {
      type: 'paragraph',
      html: 'Att använda en professionell omvandlare förvandlar frustrationen över utländska recept till framgången med ett perfekt bakresultat.',
    },
  ],
  faq: [
    {
      question: 'Vad är skillnaden mellan 1 cup och 250 ml?',
      answer: '1 amerikansk cup = 236,588 ml, inte 250 ml. För praktiska ändamål använder vi 240 ml. Även om skillnaden på 4 % verkar liten, kan den påverka känsliga recept som macarons eller mousse.',
    },
    {
      question: 'Varför väger mjöl inte alltid lika mycket?',
      answer: 'Eftersom mjöl packas ihop med tiden och under transport. Ny-siktat mjöl väger mindre än mjöl som har stått i skafferiet. Därför väger professionella bagare alltid ingredienserna istället för att mäta volym.',
    },
    {
      question: 'Vad är skillnaden mellan msk (Tbsp) och tsk (tsp)?',
      answer: '1 Tablespoon (Tbsp/matsked) = 15 ml. 1 Teaspoon (tsp/tesked) = 5 ml. En matsked är tre gånger så mycket som en tesked. I bakrecept är felmarginaler vid kryddmått (som mäts i tsk) vanliga.',
    },
    {
      question: 'Är en US cup samma sak som en Imperial cup?',
      answer: 'Nej. 1 US cup = 236 ml. 1 Imperial cup (UK) = 284 ml. Det är en skillnad på 20 %. De flesta amerikanska matbloggarna använder US cups. Om receptet inte anger något annat bör du utgå från US.',
    },
    {
      question: 'Vilken temperatur motsvarar ugnens "gas 4"?',
      answer: 'Gas 4 = 180°C = 350°F. Detta är den brittiska skalan. I köket letar vi efter motsvarande värde för din ugn: vissa använder gaslägen, andra elektroniska grader.',
    },
  ],
  bibliography: [
    {
      name: 'King Arthur Baking: Ingredient Weight Chart',
      url: 'https://www.kingarthurbaking.com/learn/ingredient-weight-chart',
    },
    {
      name: 'Culinary Institute of America: Conversions and Equivalents',
      url: 'https://www.ciachef.edu/',
    },
  ],
  howTo: [
    {
      name: 'Välj typ av omvandling',
      text: 'Välj mellan Cups till Gram, Matskedar/Teskedar till Gram, eller Fahrenheit till Celsius.',
    },
    {
      name: 'Välj ingrediens',
      text: 'Varje livsmedel har olika densitet. Mjöl, socker, smör – alla väger olika mycket.',
    },
    {
      name: 'Ange mängd',
      text: 'Skriv in antalet cups, skedar eller grader. Omvandlaren beräknar motsvarande värde direkt.',
    },
    {
      name: 'Justera ditt recept',
      text: 'Med den exakta omvandlingen kan du nu följa det amerikanska receptet med professionell precision.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
