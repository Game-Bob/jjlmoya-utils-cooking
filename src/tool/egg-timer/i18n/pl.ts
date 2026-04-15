import type { ToolLocaleContent } from "../../../types";

const title = "Naukowy Minutnik do Jajek";
const description = "Kalkulator termodynamiczny do idealnego gotowania jajek na podstawie wysokości, temperatury i rozmiaru.";
const faq = [
  {
    question: "Dlaczego wysokość nad poziomem morza ma znaczenie przy gotowaniu jajek?",
    answer: "Woda nie zawsze wrze w 100°C. Na większych wysokościach ciśnienie atmosferyczne jest niższe, przez co woda wrze w niższej temperaturze. Na wysokości 2000 m n.p.m. wrze w ok. 93°C, co wymaga dłuższego czasu gotowania niż na poziomie morza. Na Mount Everest ugotowanie jajka na twardo jest niemożliwe.",
  },
  {
    question: "Jajko z lodówki czy o temperaturze pokojowej?",
    answer: "Jajko z lodówki (4°C) potrzebuje więcej czasu niż to o temperaturze pokojowej (20°C). Różnica może wynosić 2-3 minuty. Ten kalkulator automatycznie dostosowuje czas na podstawie temperatury początkowej.",
  },
  {
    question: "Dlaczego wokół żółtka pojawia się zielona obwódka?",
    answer: "To siarczek żelaza, wynik zbyt długiego gotowania. Gdy temperatura przekracza 80°C przez zbyt długi czas, siarka z białka reaguje z żelazem z żółtka. Nie jest to toksyczne, ale świadczy o przeciągnięciu czasu. Aby tego uniknąć, zastosuj natychmiastową kąpiel lodową.",
  },
  {
    question: "Jak łatwo obrać jajko?",
    answer: "Używaj jajek mających 1-2 tygodnie (nie prosto od kury), wkładaj je do wrzącej wody (nie zaczynaj od zimnej) i zanurz w lodowatej wodzie natychmiast po zakończeniu gotowania. Szok termiczny powoduje skurczenie jajka i ułatwia obieranie.",
  },
];
const howTo = [
  {
    name: "Wybierz temperaturę początkową",
    text: "Wybierz, czy Twoje jajko jest z lodówki (4°C) czy o temperaturze pokojowej (20°C). Chodzi o temperaturę wewnątrz jajka.",
  },
  {
    name: "Wybierz rozmiar jajka",
    text: "S (małe, 53g), M (średnie, 58g), L (duże, 63g) lub XL (bardzo duże, 73g). Rozmiar określa, jak długo ciepło dociera do środka.",
  },
  {
    name: "Określ swoją wysokość",
    text: "Wprowadź ręcznie lub użyj lokalizacji. Każde 300 m w górę obniża punkt wrzenia wody o ok. 1°C.",
  },
  {
    name: "Zastosuj szok termiczny",
    text: "Gdy minutnik zadzwoni, natychmiast zanurz jajka w wodzie z lodem. To zatrzymuje gotowanie i ułatwia obieranie. Szok termiczny jest kluczowy dla precyzji.",
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
  slug: "jajka",
  title: "Naukowy Minutnik do Jajek",
  description: "Kalkulator termodynamiczny do idealnego gotowania jajek na podstawie wysokości, temperatury i rozmiaru.",
  faqTitle: "Często Zadawane Pytania",
  bibliographyTitle: "Referencje Naukowe",
  ui: {
    parameters: "Parametry",
    initial_temperature: "Temperatura Początkowa",
    fridge: "Lodówka",
    ambient: "Pokojowa",
    egg_size: "Rozmiar Jajka",
    altitude: "Wysokość",
    use_location: "Użyj mojej lokalizacji",
    altitude_help: "Woda wrze w niższej temperaturze na większych wysokościach, co wpływa na czas gotowania.",
    sea_level: "Morze",
    soft_cooked: "Na miękko",
    soft_description: "Płynne żółtko, białko ścięte i delikatne.",
    mollet: "Mollet (Półmiękko)",
    mollet_description: "Kremowe żółtko, stałe białko.",
    hard_cooked: "Na twardo",
    hard_description: "Całkowicie ugotowane, stałe żółtko.",
  },
  faq,
  bibliography: [
    {
      name: "The Science of Boiling an Egg - Charles D. H. Williams",
      url: "https://newton.ex.ac.uk/teaching/CDHW/Egg/",
    },
    {
      name: "The Food Lab: The Science of the Best Hard Boiled Eggs - J. Kenji López-Alt",
      url: "https://www.seriouseats.com/the-food-lab-hard-boiled-eggs-recipe",
    },
    {
      name: "The Food Lab: Perfect Soft Boiled Eggs",
      url: "https://www.seriouseats.com/soft-boiled-eggs-recipe",
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Mistrzowski przewodnik po idealnym gotowaniu jajek',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gotowanie jajka to ćwiczenie z <strong>termodynamiki stosowanej</strong>. Precyzja temperatury początkowej, rozmiaru jajka i wysokości geograficznej decyduje o tym, czy otrzymasz jedwabiste płynne żółtko, czy przejawione jajko z niechcianą zieloną obwódką.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '62°C',
          label: 'Ścinanie białka',
          icon: 'mdi:egg-outline',
        },
        {
          value: '68°C',
          label: 'Ścinanie żółtka',
          icon: 'mdi:egg-fried',
        },
        {
          value: '-1°C',
          label: 'Wrzenie / 300m',
          icon: 'mdi:mountain',
        },
        {
          value: '0s',
          label: 'Tolerancja błędu',
          icon: 'mdi:timer-check-outline',
        },
      ],
    },
    {
      type: 'title',
      text: 'Porównanie stopni ugotowania',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Jajko na miękko',
          icon: 'mdi:coffee-outline',
          description: 'Białko częściowo ścięte, żółtko całkowicie płynne.',
          points: [
            'Bardzo delikatna tekstura',
            'Idealne do maczania chleba',
            'Krótki czas (3-4 min)',
            'Trudne do obrania',
          ],
        },
        {
          title: 'Jajko Mollet / Półmiękko',
          icon: 'mdi:water-percent',
          description: 'Stałe białko i kremowe żółtko, gęste ale nie twarde.',
          highlight: true,
          points: [
            'Standard gourmet',
            'Żółtko o konsystencji miodu',
            'Elastyczna i stała osłonka',
            'Idealne do sałatek',
          ],
        },
        {
          title: 'Jajko na twardo',
          icon: 'mdi:circle-slice-8',
          description: 'Całkowicie stałe, ale delikatne, bez zielonej obwódki.',
          points: [
            'Żółtko matowe i stałe',
            'Łatwe do transportu i obrania',
            'Idealne do nadziewania',
            'Wymaga szybkiego studzenia',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Punkt wrzenia zależnie od wysokości',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Miasto / Wysokość', 'Metry (n.p.m.)', 'Wrzenie (°C)', 'Dodatkowy czas'],
      rows: [
        ['Poziom morza (Gdańsk)', '0m', '100°C', '0s'],
        ['Madryt', '650m', '97.8°C', '+25s'],
        ['Meksyk', '2240m', '92.6°C', '+75s'],
        ['La Paz (Boliwia)', '3640m', '88.1°C', '+140s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Zielona obwódka czy trudne obieranie?',
      html: 'Zielona obwódka to <strong>siarczek żelaza</strong> spowodowany zbyt długim gotowaniem. Jeśli jajko źle się obiera, jest zbyt świeże; niskie pH sprawia, że białko mocno przywiera do błony. Używaj jajek tygodniowych i szoku w lodzie.',
    },
    {
      type: 'title',
      text: 'Glosariusz nauki o jajku',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Owotransferyna',
          definition: 'Białko, które ścina się jako pierwsze (62°C), nadając początkową strukturę.',
        },
        {
          term: 'Owalbumina',
          definition: 'Główne białko wymagające więcej ciepła (80°C) do całkowitego ścięcia.',
        },
        {
          term: 'Ciśnienie atmosferyczne',
          definition: 'Czynnik określający temperaturę wrzącej wody.',
        },
        {
          term: 'Szok termiczny',
          definition: 'Zanurzenie w lodowatej wodzie, aby natychmiast zatrzymać gotowanie.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Triki z octem',
      html: 'Dodaj odrobinę octu do wody. Jeśli skorupka pęknie, kwas pomoże białku szybko się ściąć i uszczelnić pęknięcie.',
    },
    {
      type: 'paragraph',
      html: 'Nasz minutnik wykorzystuje równanie Charlesa Williamsa, aby dopasować każdą sekundę do Twojej lokalizacji i temperatury w lodówce.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
