import type { ToolLocaleContent } from '../../../types';

const title = "Konwerter Kuchni Amerykańskiej: Szklanki na Gramy i Temperatury";
const description = "Konwertuj szklanki (cups), łyżki i stopnie Fahrenheita na system metryczny. Twój kompas do rozszyfrowania amerykańskich przepisów z profesjonalną precyzją.";
const faq = [
  {
    question: 'Jaka jest różnica między 1 szklanką (cup) a 250ml?',
    answer: '1 amerykańska szklanka (cup) = 236,588ml, a nie 250ml. W praktyce używamy 240ml. Choć ta 4% różnica wydaje się mała, może zrujnować delikatne wypieki, takie jak makaroniki czy musy.',
  },
  {
    question: 'Dlaczego mąka nie zawsze waży tyle samo?',
    answer: 'Ponieważ mąka osiada i zbija się z upływem czasu oraz podczas transportu. Świeżo przesiana mąka waży mniej niż ta, która długo stała w spiżarni. Dlatego profesjonalni cukiernicy zawsze ważą składniki, zamiast mierzyć ich objętość.',
  },
  {
    question: 'Jaka jest różnica między Tbsp a tsp?',
    answer: '1 Tablespoon (Tbsp/łyżka stołowa) = 15ml. 1 Teaspoon (tsp/łyżeczka) = 5ml. Jedna łyżka to równowartość 3 łyżeczek. W przepisach cukierniczych błędy w odmierzaniu przypraw (mierzonych w tsp) są bardzo częste.',
  },
  {
    question: 'Czy amerykańska szklanka (US cup) to to samo co szklanka imperialna?',
    answer: 'Nie. 1 US cup = 236ml. 1 Imperial cup (UK) = 284ml. To 20% różnicy. Większość amerykańskich blogów kulinarnych używa US cups. Jeśli przepis nie precyzuje inaczej, przyjmij jednostki amerykańskie.',
  },
  {
    question: 'Jakiej temperaturze odpowiada "gas 4" w piekarniku?',
    answer: 'Gas 4 = 180°C = 350°F. Jest to brytyjska skala gazowa. W kuchni szukamy odpowiednika dla Twojego piekarnika: niektóre mają pokrętła z numerami, inne elektroniczne sterowanie stopniami.',
  },
];
const howTo = [
  {
    name: 'Wybierz rodzaj konwersji',
    text: 'Wybierz między przeliczeniem szklanek na gramy, łyżek/łyżeczek na gramy lub stopni Fahrenheita na Celsjusza.',
  },
  {
    name: 'Wybierz produkt',
    text: 'Każdy produkt ma inną gęstość. Mąka, cukier, masło – każdy z nich waży inaczej w tej samej objętości.',
  },
  {
    name: 'Wpisz ilość',
    text: 'Wpisz liczbę szklanek, łyżek lub stopni. Konwerter natychmiast obliczy ekwiwalent.',
  },
  {
    name: 'Dostosuj swój przepis',
    text: 'Dzięki dokładnemu przeliczeniu możesz teraz wykonać amerykański przepis z profesjonalną precyzją.',
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
  slug: 'konwerter-jednostek-kuchni-amerykanskiej',
  title: 'Konwerter Kuchni Amerykańskiej: Szklanki na Gramy i Temperatury',
  description: 'Konwertuj szklanki (cups), łyżki i stopnie Fahrenheita na system metryczny. Twój kompas do rozszyfrowania amerykańskich przepisów z profesjonalną precyzją.',
  faqTitle: 'Często zadawane pytania',
  bibliographyTitle: 'Bibliografia',
  ui: {
    copied: 'Skopiowano',
    noHistory: 'Brak historii',
    load: 'Wczytaj',
    delete: 'Usuń',
    tabCups: 'Szklanki na Gramy',
    tabSpoons: 'Łyżki na Gramy',
    tabTemperatures: 'Temperatury',
    tabCupsAriaLabel: 'Szklanki na Gramy',
    tabSpoonsAriaLabel: 'Łyżki na Gramy',
    tabTempsAriaLabel: 'Temperatury Piekarnika',
    stepSelectIngredient: 'Wybierz Produkt',
    stepHowManyCups: 'Ile Szklanek (Cups)?',
    stepSelectMeasure: 'Wybierz Miarę',
    stepQuantity: 'Ilość',
    stepOvenConversion: 'Konwersja Piekarnika',
    stepFrequentTemps: 'Typowe Temperatury w Przepisach',
    cupFlour: 'Mąka',
    cupFlourSub: '120g / szklanka',
    cupWhiteSugar: 'Biały Cukier',
    cupWhiteSugarSub: '200g / szklanka',
    cupBrownSugar: 'Brązowy Cukier',
    cupBrownSugarSub: '220g / szklanka',
    cupPowderSugar: 'Cukier Puder',
    cupPowderSugarSub: '115g / szklanka',
    cupButter: 'Masło',
    cupButterSub: '227g / szklanka',
    cupCocoa: 'Kakao w Proszku',
    cupCocoaSub: '85g / szklanka',
    cupLiquids: 'Płyny',
    cupLiquidsSub: '240g / szklanka',
    cupOats: 'Płatki Owsiane',
    cupOatsSub: '90g / szklanka',
    cupFlourAriaLabel: 'Mąka',
    cupWhiteSugarAriaLabel: 'Biały Cukier',
    cupBrownSugarAriaLabel: 'Brązowy Cukier',
    cupPowderSugarAriaLabel: 'Cukier Puder',
    cupButterAriaLabel: 'Masło',
    cupCocoaAriaLabel: 'Kakao',
    cupLiquidsAriaLabel: 'Płyn',
    cupOatsAriaLabel: 'Płatki Owsiane',
    stepperMinus: 'Odejmij',
    stepperPlus: 'Dodaj',
    cupsAmountLabel: 'Liczba Szklanek',
    spoonQuantityLabel: 'Ilość',
    cupQuick1_4: '1/4 Szklanki',
    cupQuick1_3: '1/3 Szklanki',
    cupQuick1_2: '1/2 Szklanki',
    cupQuick1: '1 Szklanka',
    unitGrams: 'Gramy',
    unitGramsML: 'Gramy / Mililitry',
    spoonMeasureLabel: 'Wybierz Miarę',
    spoonTablespoon: 'Łyżka Stołowa (Tbsp)',
    spoonTeaspoon: 'Łyżeczka (tsp)',
    spoonTablespoonAriaLabel: 'Łyżka stołowa',
    spoonTeaspoonAriaLabel: 'Łyżeczka',
    spoonSelectIngredient: 'Wybierz Produkt',
    spoonLeavening: 'Spulchniacz',
    spoonLeaveningSub: 'Proszek do pieczenia',
    spoonSalt: 'Sól Drobna',
    spoonSaltSub: 'Mineralna',
    spoonSugar: 'Biały Cukier',
    spoonSugarSub: 'Kryształ',
    spoonLiquids: 'Płyny',
    spoonLiquidsSub: 'Woda, Olej',
    spoonLeavingAriaLabel: 'Proszek do pieczenia',
    spoonSaltAriaLabel: 'Sól',
    spoonSugarAriaLabel: 'Biały Cukier',
    spoonLiquidsAriaLabel: 'Płyn',
    spoonQuick1_4: '1/4',
    spoonQuick1_2: '1/2',
    spoonQuick1: '1',
    spoonQuick2: '2',
    tempFahrenheit: 'Fahrenheit (°F)',
    tempCelsius: 'Celsjusz (°C)',
    tempFahrenheitAriaLabel: 'Fahrenheit',
    tempCelsiusAriaLabel: 'Celsjusz',
    tempPreset275: '275°F',
    tempPreset275Desc: '135°C - Suszenie',
    tempPreset275AriaLabel: 'Ustaw 275 Fahrenheita',
    tempPreset325: '325°F',
    tempPreset325Desc: '165°C - Ciężkie ciasta',
    tempPreset325AriaLabel: 'Ustaw 325 Fahrenheita',
    tempPreset350: '350°F',
    tempPreset350Desc: '175°C - Standard wypieków',
    tempPreset350AriaLabel: 'Ustaw 350 Fahrenheita',
    tempPreset400: '400°F',
    tempPreset400Desc: '200°C - Chleby / Tartas',
    tempPreset400AriaLabel: 'Ustaw 400 Fahrenheita',
    tempPreset425: '425°F',
    tempPreset425Desc: '220°C - Pizza / Ciasto francuskie',
    tempPreset425AriaLabel: 'Ustaw 425 Fahrenheita',
  },
  seo: [
    {
      type: 'title',
      text: 'Profesjonalny Przewodnik po Konwersji Miar Kuchni Amerykańskiej',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Przeliczanie <strong>szklanek na gramy</strong> lub <strong>Fahrenheita na Celsjusza</strong> to pierwszy krok do opanowania międzynarodowych przepisów. Kuchnia amerykańska opiera się na objętości, co wprowadza zmienność do 25% w przypadku suchych składników, takich jak mąka.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '120g',
          label: '1 Szklanka Mąki',
          icon: 'mdi:grain',
        },
        {
          value: '227g',
          label: 'Kostka Masła (Stick)',
          icon: 'mdi:cube-outline',
        },
        {
          value: '175°C',
          label: 'Odpowiednik 350°F',
          icon: 'mdi:thermometer',
        },
        {
          value: '240ml',
          label: 'Objętość 1 Cup',
          icon: 'mdi:water-percent',
        },
      ],
    },
    {
      type: 'title',
      text: 'Krytyczne różnice między objętością a wagą',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Pomiar objętościowy (Szklanki/Cups)',
          icon: 'mdi:cup-water',
          description: 'Stosowany w domowych przepisach z USA. Mierzy miejsce zajmowane przez produkt.',
          points: [
            'Bardzo zależny od stopnia ubicia produktu',
            'Częsty błąd rzędu 20-30% przy mące',
            'Brak spójności między różnymi markami miarek',
            'Wymaga przesiania produktu dla większej precyzji',
          ],
        },
        {
          title: 'Pomiar wagowy (Gramy)',
          icon: 'mdi:scale-balance',
          description: 'Standard profesjonalnego cukiernictwa i rzemiosła w Europie. Absolutna precyzja.',
          highlight: true,
          points: [
            'Zawsze precyzja co do +/- 1g',
            'Spójne i powtarzalne rezultaty',
            'Mniej mycia (używasz tylko jednej miski)',
            'Ułatwia matematyczne skalowanie przepisu',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Ekwiwalenty Popularnych Składników',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Składnik', '1 Szklanka (Objętość)', 'Gramy (Waga)', 'Gęstość'],
      rows: [
        ['Mąka pszenna', '1 Szklanka', '120g', 'Niska'],
        ['Biały Cukier', '1 Szklanka', '200g', 'Średnia'],
        ['Brązowy Cukier', '1 Szklanka', '220g (ubity)', 'Wysoka'],
        ['Masło', '1 Szklanka (2 sticks)', '227g', 'Wysoka'],
        ['Kakao w Proszku', '1 Szklanka', '85g', 'Bardzo niska'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Czy Twoje ciasto wyszło zbyt suche?',
      html: 'Najczęstszym błędem przy używaniu miarek jest "nabieranie szklanką" bezpośrednio z worka z mąką. To ubija produkt i możesz dodać nawet 40g mąki za dużo na każdą szklankę. Rozwiązaniem jest <strong>zawsze przeliczać na gramy</strong> przy użyciu naszego kalkulatora.',
    },
    {
      type: 'title',
      text: 'Glosariusz Jednostek Amerykańskich',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cup (Szklanka)',
          definition: 'Jednostka objętości równa ok. 240ml. Podstawa kuchni amerykańskiej.',
        },
        {
          term: 'Tbsp (Tablespoon)',
          definition: 'Łyżka stołowa, równa 15ml lub 3 łyżeczkom.',
        },
        {
          term: 'tsp (Teaspoon)',
          definition: 'Łyżeczka do herbaty, równa 5ml. Kluczowa dla soli i proszku do pieczenia.',
        },
        {
          term: 'Stick of Butter',
          definition: 'Format masła popularny w USA, ważący dokładnie 113.5g (pół szklanki).',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Trik z łyżeczką',
      html: 'Jeśli nie masz wagi i MUSISZ użyć szklanek, napełniaj miarkę łyżką bez ugniatania, a wierzch wyrównaj nożem. To znacznie dokładniejsza metoda niż bezpośrednie nabieranie miarką.',
    },
    {
      type: 'paragraph',
      html: 'Korzystanie z profesjonalnego konwertera zamienia frustrację związaną z zagranicznymi przepisami w sukces idealnego wypieku.',
    },
  ],
  faq: [
    {
      question: 'Jaka jest różnica między 1 szklanką (cup) a 250ml?',
      answer: '1 amerykańska szklanka (cup) = 236,588ml, a nie 250ml. W praktyce używamy 240ml. Choć ta 4% różnica wydaje się mała, może zrujnować delikatne wypieki, takie jak makaroniki czy musy.',
    },
    {
      question: 'Dlaczego mąka nie zawsze waży tyle samo?',
      answer: 'Ponieważ mąka osiada i zbija się z upływem czasu oraz podczas transportu. Świeżo przesiana mąka waży mniej niż ta, która długo stała w spiżarni. Dlatego profesjonalni cukiernicy zawsze ważą składniki, zamiast mierzyć ich objętość.',
    },
    {
      question: 'Jaka jest różnica między Tbsp a tsp?',
      answer: '1 Tablespoon (Tbsp/łyżka stołowa) = 15ml. 1 Teaspoon (tsp/łyżeczka) = 5ml. Jedna łyżka to równowartość 3 łyżeczek. W przepisach cukierniczych błędy w odmierzaniu przypraw (mierzonych w tsp) są bardzo częste.',
    },
    {
      question: 'Czy amerykańska szklanka (US cup) to to samo co szklanka imperialna?',
      answer: 'Nie. 1 US cup = 236ml. 1 Imperial cup (UK) = 284ml. To 20% różnicy. Większość amerykańskich blogów kulinarnych używa US cups. Jeśli przepis nie precyzuje inaczej, przyjmij jednostki amerykańskie.',
    },
    {
      question: 'Jakiej temperaturze odpowiada "gas 4" w piekarniku?',
      answer: 'Gas 4 = 180°C = 350°F. Jest to brytyjska skala gazowa. W kuchni szukamy odpowiednika dla Twojego piekarnika: niektóre mają pokrętła z numerami, inne elektroniczne sterowanie stopniami.',
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
      name: 'Wybierz rodzaj konwersji',
      text: 'Wybierz między przeliczeniem szklanek na gramy, łyżek/łyżeczek na gramy lub stopni Fahrenheita na Celsjusza.',
    },
    {
      name: 'Wybierz produkt',
      text: 'Każdy produkt ma inną gęstość. Mąka, cukier, masło – każdy z nich waży inaczej w tej samej objętości.',
    },
    {
      name: 'Wpisz ilość',
      text: 'Wpisz liczbę szklanek, łyżek lub stopni. Konwerter natychmiast obliczy ekwiwalent.',
    },
    {
      name: 'Dostosuj swój przepis',
      text: 'Dzięki dokładnemu przeliczeniu możesz teraz wykonać amerykański przepis z profesjonalną precyzją.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
