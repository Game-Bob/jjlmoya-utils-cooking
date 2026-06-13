import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Kalkulator Transglutaminazy Wiążącej Mięso: Poradnik Dozowania w Gastronomii Molekularnej';
const description = 'Oblicz precyzyjne dawkowanie transglutaminazy (TG) do wiązania mięsa. Uzyskaj proporcje do suchego opylania lub zawiesiny, czas inkubacji oraz ostrzeżenia temperaturowe.';

const faq = [
  {
    question: 'Czym jest transglutaminaza i jak wiąże mięso?',
    answer: 'Transglutaminaza (TG), znana również jako "klej do mięsa", jest enzymem katalizującym tworzenie wiązań kowalencyjnych między aminokwasami glutaminą i lizyną w białkach. Po nałożeniu na powierzchnię mięsa tworzy połączenia krzyżowe, które łączą oddzielne kawałki w jednolitą całość. Reakcja wymaga czasu i niskich temperatur (2:5°C), by w pełni się rozwinąć: zazwyczaj od 6 do 24 godzin.',
  },
  {
    question: 'Jaka jest różnica między suchym opylaniem a aplikacją zawiesiny?',
    answer: 'Suche opylanie polega na posypaniu proszkiem TG bezpośrednio powierzchni mięsa w ilości 0,75:1,5% masy mięsa. Metoda zawiesiny polega na zmieszaniu jednej części TG z czterema częściami wody w celu uzyskania pasty do nakładania pędzlem: idealnej do pokrywania nieregularnych powierzchni lub nakładania cienkich, równomiernych warstw na duże pieczenie lub filety ze skórą.',
  },
  {
    question: 'Czy temperatura wpływa na aktywność transglutaminazy?',
    answer: 'Tak. TG jest najbardziej aktywna między 2°C a 15°C. W wyższych temperaturach (do 40°C) reakcja przyspiesza, ale wymaga ścisłego monitorowania. Powyżej 60°C enzym ulega denaturacji i staje się trwale nieaktywny: reakcja sieciowania całkowicie ustaje. Podczas gotowania zawsze utrzymuj mięso związane TG poniżej 60°C, aby zachować wiązanie.',
  },
  {
    question: 'Czy mogę używać transglutaminazy do ryb lub skorupiaków?',
    answer: 'Tak, ale ryby i skorupiaki mają niższy poziom lizyny i glutaminy w białkach mięśniowych w porównaniu do czerwonego mięsa i drobiu. Może być potrzebny wyższy stosunek TG (1,2:1,5%) oraz dłuższy czas inkubacji. W przypadku delikatnych przegrzebków lub cienkich filetów rybnych rozważ metodę zawiesiny dla bardziej równomiernego pokrycia.',
  },
];

const howTo = [
  {
    name: 'Wybierz metodę aplikacji',
    text: 'Wybierz Suche opylanie do równych powierzchni, takich jak pieczenie i steki. Wybierz Zawiesinę do nieregularnych kawałków, cienkich warstw lub białek ze skórą.',
  },
  {
    name: 'Podaj wagę mięsa',
    text: 'Wprowadź całkowitą wagę mięsa lub białka, które chcesz związać, w gramach.',
  },
  {
    name: 'Określ rodzaj białka',
    text: 'Wybierz rodzaj białka najlepiej pasujący do twojego kawałka. Czerwone mięsa wymagają mniej TG; ryby i skorupiaki potrzebują więcej.',
  },
  {
    name: 'Ustaw temperaturę inkubacji',
    text: 'Wprowadź temperaturę przechowywania w chłodni (2:40°C). Kalkulator oszacuje wymagany czas wiązania.',
  },
  {
    name: 'Odważ i nałóż TG',
    text: 'Odmierz obliczoną ilość proszku TG. Nałóż przez opylenie lub rozprowadzenie zawiesiny pędzlem, a następnie mocno dociśnij powierzchnie białek do siebie.',
  },
  {
    name: 'Odstaw i schłódź',
    text: 'Zawiń szczelnie w folię spożywczą i schłódź przez zalecany okres inkubacji przed gotowaniem.',
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
  slug: 'kalkulator-transglutaminazy-wiazacej-mieso',
  title: 'Kalkulator Transglutaminazy Wiążącej Mięso',
  description: 'Oblicz precyzyjne dawkowanie transglutaminazy (TG) do wiązania mięsa. Uzyskaj proporcje do suchego opylania lub zawiesiny, czas inkubacji oraz ostrzeżenia temperaturowe.',
  faqTitle: 'Najczęściej Zadawane Pytania',
  ui: {
    title: 'Kalkulator Transglutaminazy Wiążącej Mięso',
    subtitle: 'Molekularna precyzja sieciowania białek',
    methodLabel: 'Metoda Aplikacji',
    dryMethod: 'Suche Opylanie',
    slurryMethod: 'Zawiesina (Pasta do Nakładania)',
    weightLabel: 'Waga Mięsa / Białka',
    proteinLabel: 'Rodzaj Białka',
    redMeat: 'Czerwone Mięso (Wołowina, Jagnięcina, Dziczyzna)',
    poultry: 'Drób (Kurczak, Indyk, Kaczka)',
    fish: 'Ryby (Twarde Filety, Całe Ryby)',
    shellfish: 'Skorupiaki (Przegrzebki, Krewetki, Homary)',
    unitLabel: 'System Miar',
    metricUnit: 'Metryczne (g / °C)',
    imperialUnit: 'Imperialne (oz / °F)',
    tempLabel: 'Temperatura Inkubacji',
    resultTitle: 'Wyniki Dozowania',
    tgAmount: 'Transglutaminaza (TG)',
    waterAmount: 'Woda (do Zawiesiny)',
    totalWeight: 'Całkowita Waga Związana',
    ratioLabel: 'Stosunek TG',
    incubationLabel: 'Zalecana Inkubacja',
    incubationRange: '{min}h do {max}h',
    dryDustingDesc: 'Rozsyp proszek TG równomiernie po powierzchni mięsa, a następnie dociśnij kawałki do siebie. Idealne do płaskich kawałków i pieczeni.',
    slurryDesc: 'Wymieszaj TG z 4 częściami wody, aby uzyskać pastę do nakładania pędzlem. Nakładaj pędzlem na nieregularne powierzchnie, filety lub do łączenia skóry.',
    enzymeDestroyed: 'Enzym Zniszczony: Temperatura przekracza próg denaturacji. Transglutaminaza uległa denaturacji i nie będzie wiązać.',
    noWarning: '',
    hours: 'godzin',
    grams: 'g',
    milliliters: 'ml',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Ile transglutaminazy należy użyć na kilogram mięsa?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Odpowiednia dawka zależy od rodzaju białka i metody aplikacji. Dla czerwonego mięsa użyj 0,75:1,0% TG wagowo (7,5:10 g na kg). Dla drobiu 1,0:1,2%. Dla ryb i skorupiaków 1,2:1,5%. Nakładaj przez suche opylanie na płaskie kawałki lub zmieszaj z 4 częściami wody jako zawiesinę na nieregularne powierzchnie. Wprowadź wagę swojego białka w kalkulatorze powyżej, aby uzyskać dokładne pomiary.',
    },
    {
      type: 'title',
      text: 'Suche opylanie a zawiesina: którą metodę wybrać?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Suche opylanie działa najlepiej na płaskich, równych powierzchniach, takich jak steki, pieczenie czy kotlety. Posyp proszkiem TG bezpośrednio (0,75:1,5% masy mięsa) i dociśnij kawałki do siebie. Metoda zawiesiny (1 część TG na 4 części wody) jest lepsza do nieregularnych kawałków, filetów ze skórą lub delikatnych przegrzebków, gdzie liczy się równomierne pokrycie. Nałóż pastę pędzlem, złóż i szczelnie zawiń. Obie metody wymagają inkubacji w niskiej temperaturze, aby wiązanie zostało zakończone.',
    },
    {
      type: 'title',
      text: 'Dlaczego kontrola temperatury decyduje o powodzeniu wiązania',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Transglutaminaza działa najlepiej między 2°C a 5°C, tworząc silne wiązania krzyżowe w ciągu 6:24 godzin. W wyższych temperaturach lodówki (5:15°C) reakcja przyspiesza do 3:8 godzin, ale wiązania mogą być płytsze. Powyżej 40°C enzym szybko ulega denaturacji, a przy 60°C zostaje zniszczony natychmiast: wszelkie istniejące wiązania przestają się tworzyć, a mięso rozdzieli się podczas gotowania. Zawsze monitoruj temperaturę przechowywania za pomocą wskaźnika w wizualizatorze powyżej.',
    },
    {
      type: 'table',
      headers: ['Białko', 'Dawka TG (% masy)', 'Metoda', 'Inkubacja (2:5°C)', 'Siła wiązania'],
      rows: [
        ['Wołowina, Jagnięcina, Dziczyzna', '0,75:1,0%', 'Suche opylanie', '6:12 h', 'Bardzo silne'],
        ['Kurczak, Indyk, Kaczka', '1,0:1,2%', 'Dowolna', '8:16 h', 'Silne'],
        ['Łosoś, Dorsz, Labraks', '1,2:1,5%', 'Zawiesina', '12:24 h', 'Umiarkowane'],
        ['Przegrzebki, Krewetki, Homary', '1,0:1,5%', 'Zawiesina', '12:24 h', 'Umiarkowane'],
      ],
    },
    {
      type: 'title',
      text: 'Najczęstsze błędy przy wiązaniu mięsa TG',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Zbyt dużo enzymu:</strong> Użycie ponad 1,5% TG pozostawia widoczny biały nalot i kredową konsystencję. Nadmiar nie wzmacnia wiązania.',
        '<strong>Tłuszcz lub srebrzysta skóra na powierzchni:</strong> TG nie wiąże się z tłuszczem ani tkanką łączną. Przytnij powierzchnie do gołych włókien mięśniowych przed aplikacją.',
        '<strong>Pomijanie okresu odpoczynku:</strong> Reakcja sieciowania trwa godzin. Gotowanie natychmiast po złożeniu wypłucze enzym, zanim utworzą się wiązania.',
        '<strong>Ogrzewanie powyżej 60°C podczas gotowania:</strong> Wiązanie utrzymuje się podczas delikatnego gotowania (sous vide w 55:58°C jest idealne), ale wysokie temperatury smażenia mogą osłabić połączenie.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
