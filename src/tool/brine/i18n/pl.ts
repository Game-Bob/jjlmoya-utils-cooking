import type { ToolLocaleContent } from "../../../types";

const title = "Kalkulator Solanki Metodą Równowagi";
const description = "Nauka o równowadze dla soczystych mięs i idealnych kiszonek. Oblicz dokładne zasolenie na podstawie całkowitej wagi produktu i wody.";
const faq = [
  {
    question: "Na czym polega metoda solanki przez równowagę?",
    answer: "Metoda równowagi oblicza ilość soli na podstawie całkowitej wagi (woda + produkt), a nie tylko samej wody. Gwarantuje to stałe stężenie soli niezależnie od ilości użytego produktu.",
  },
  {
    question: "Ile soli potrzebuję do robienia kiszonek?",
    answer: "W przypadku warzyw fermentowanych (ogórki, kapusta, kimchi) zaleca się od 2% do 3% soli. Dla mięs od 1,5% do 2%. Kalkulator poda Ci dokładną ilość na podstawie wagi Twoich składników.",
  },
  {
    question: "Czy mogę zamrozić mięso po solance?",
    answer: "Tak, to idealne rozwiązanie. Solanka chroni przed oparzeliną mrozową, a mięso jest gotowe do obróbki po rozmrożeniu. Unikaj jednak mrożenia warzyw fermentowanych, ponieważ staną się papkowate.",
  },
  {
    question: "Po co dodawać cukier do solanki?",
    answer: "Cukier pełni dwie funkcje: ułatwia reakcję Maillarda (rumienienie) na mięsie i równoważy słony smak, nie czyniąc produktu słodkim. Nie zmienia Twojej solanki w deser.",
  },
];
const howTo = [
  {
    name: "Określ swój cel",
    text: "Zdecyduj, czy robisz mięsa w solance (1,5-2%), fermentowane (2-3%), sosy (3,5%) czy konserwy długoterminowe (5%+). Każdy rodzaj wymaga innego czasu i służy innemu celowi.",
  },
  {
    name: "Zważ produkt i wodę",
    text: "Zważ dokładnie produkt (mięso, warzywa) oraz wodę. Precyzja jest kluczowa: nawet 5g różnicy zmienia wynik. Użyj wagi precyzyjnej.",
  },
  {
    name: "Oblicz za pomocą narzędzia",
    text: "Wpisz wagi do kalkulatora i dostosuj zasolenie do rodzaju produktu. Narzędzie poda Ci dokładnie, ile soli i cukru potrzebujesz.",
  },
  {
    name: "Rozpuść i wymieszaj",
    text: "Całkowicie rozpuść sól w zimnej wodzie przed dodaniem produktu. W przypadku mięs upewnij się, że solanka przykrywa całość. Kiszonki muszą być całkowicie zanurzone.",
  },
  {
    name: "Kiszenie lub peklowanie",
    text: "Przechowuj w chłodzie zależnie od rodzaju: 4-48 godzin dla mięs, 1-3 tygodnie dla kiszonek. Dokładny czas zależy od temperatury i Twoich upodobań.",
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
  slug: "solanka",
  title: "Kalkulator Solanki Metodą Równowagi",
  description: "Nauka o równowadze dla soczystych mięs i idealnych kiszonek. Oblicz dokładne zasolenie na podstawie całkowitej wagi produktu i wody.",
  ui: {
    calculator: "Kalkulator",
    subtitle: "Wprowadź wagi, aby obliczyć idealną równowagę.",
    productWeight: "Waga Produktu (g)",
    waterWeight: "Waga Wody (g)",
    desiredSalinity: "Pożądane Zasolenie",
    meat: "Mięsa (1,5%)",
    fermented: "Kiszonki (2,0%)",
    sauces: "Sosy (3,5%)",
    preserves: "Konserwy (5,0%)",
    addSugar: "Dodaj Cukier",
    sugarHint: "Równoważy smak i wspomaga rumienienie (50% soli)",
    saltNeeded: "Potrzebna Sól",
    sugarOptional: "Cukier (Opcjonalnie)",
    estimatedTime: "Szacowany Czas",
    product: "Produkt",
    total: "Suma",
    unitGrams: "gramy",
    timeMeatsLabel: "Czas (Mięsa)",
    timeMeatsDuration: "4 - 48 Godzin",
    timeVegetablesLabel: "Czas (Warzywa)",
    timeVegetablesDuration: "1 - 3 Tygodnie",
    timePreservesLabel: "Czas (Konserwy)",
    timePreservesDuration: "1+ Miesięcy",
  },
  faqTitle: "Często Zadawane Pytania",
  bibliographyTitle: "Źródła i Odniesienia",
  faq,
  howTo,
  bibliography: [
    {
      name: "The Noma Guide to Fermentation - René Redzepi & David Zilber",
      url: "https://www.nomacph.com/",
    },
    {
      name: "Salt, Fat, Acid, Heat - Samin Nosrat",
      url: "https://www.saltfatacidheat.com/",
    },
    {
      name: "Pollan, Michael - Cooked",
      url: "https://michaelpollan.com/",
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Mistrzowski Przewodnik po Solance przez Równowagę i Kiszeniu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Solanka przez równowagę</strong> to ostateczna technika gwarantująca soczyste i bezpieczne rezultaty. W przeciwieństwie do tradycyjnych metod, ta oblicza sól na podstawie <strong>całkowitej wagi</strong> wody i produktu, zapewniając stałe zasolenie niezależnie od objętości naczynia.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1,5 - 2%',
          label: 'Idealny Ratio Mięsa',
          icon: 'mdi:food-steak',
        },
        {
          value: '2,5 - 3%',
          label: 'Ratio Kiszonek',
          icon: 'mdi:flask-outline',
        },
        {
          value: '18-22°C',
          label: 'Temp. Fermentacji',
          icon: 'mdi:thermometer',
        },
        {
          value: '0,5%',
          label: 'Cukier Równowagi',
          icon: 'mdi:shaker-outline',
        },
      ],
    },
    {
      type: 'title',
      text: 'Różnice między Solanką Suchą a Mokrą',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Solanka Sucha (Dry Brining)',
          icon: 'mdi:shaker-outline',
          description: 'Sól nakłada się bezpośrednio na powierzchnię produktu bez użycia dodatkowej wody.',
          points: [
            'Znacznie bardziej chrupiąca skórka u drobiu',
            'Bardziej skoncentrowany smak składnika',
            'Zajmuje mniej miejsca w lodówce',
            'Idealna do steków i całych kurczaków',
          ],
        },
        {
          title: 'Solanka Mokra (Wet Brining)',
          icon: 'mdi:water',
          description: 'Produkt zanurza się w roztworze wody i soli obliczonym metodą równowagi.',
          highlight: true,
          points: [
            'Lepszy transport wilgoci',
            'Pozwala na wprowadzenie aromatów (przypraw)',
            'Bardziej równomierne peklowanie dużych kawałków',
            'Idealna do indyka, polędwicy wieprzowej i ryb',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Czasy i Zasolenie zależnie od Zastosowania',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Kategoria', 'Zasolenie (%)', 'Minimalny Czas', 'Główny Cel'],
      rows: [
        ['Drób i Wieprzowina', '1,5% - 2,0%', '12 - 24 godziny', 'Soczystość i kruchość'],
        ['Ryby Białe', '1,0% - 1,5%', '20 - 45 minut', 'Jędrność mięsa'],
        ['Lacto-fermentacja', '2,5% - 3,0%', '7 - 21 dni', 'Bezpieczeństwo mikrobiologiczne'],
        ['Sosy i Konserwy', '3,5% - 5,0%', '1+ miesiąc', 'Długoterminowa konserwacja'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Identyfikacja Problemów w Solance',
      html: 'Jeśli solanka ma brzydki zapach (nie kwaśny), pojawia się kolorowa pleśń (czarna, różowa) lub produkt staje się ekstremalnie miękki, wyrzuć go. Biały nalot na powierzchni (drożdże Kahm) jest normalny w kiszonkach i można go usunąć.',
    },
    {
      type: 'title',
      text: 'Glosariusz Eksperta od Peklowania',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Osmoza',
          definition: 'Proces fizyczny, w którym sól przenika przez komórki żywności, aby wyrównać stężenia.',
        },
        {
          term: 'Denaturacja',
          definition: 'Działanie soli na białka, które pozwala im zatrzymywać więcej wody podczas gotowania.',
        },
        {
          term: 'Drożdże Kahm',
          definition: 'Cienka biała warstwa pojawiająca się czasem na powierzchni kiszonek; jest nieszkodliwa, ale wskazuje na brak kwasowości.',
        },
        {
          term: 'Lacto-fermentacja',
          definition: 'Fermentacja beztlenowa, w której bakterie przekształcają cukry w kwas mlekowy, konserwując żywność.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Jakość Wody',
      html: 'Zawsze unikaj wody z kranu z dużą zawartością chloru, ponieważ może ona hamować wzrost dobrych bakterii w fermentacji. Używaj wody filtrowanej lub odstaw wodę na 24h.',
    },
    {
      type: 'paragraph',
      html: 'Nasz kalkulator równowagi eliminuje domysły z Twoich przepisów, pozwalając Ci gotować z pewnością profesjonalisty.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
