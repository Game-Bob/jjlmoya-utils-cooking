import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

const title = "Kalkulator Ciasta na Pizzę Neapolitańską";
const description = "Oblicz dokładne proporcje mąki, wody, soli i drożdży, aby przygotować autentyczną pizzę neapolitańską w domu.";
const faq = [
  {
    question: "Jakie jest idealne nawodnienie dla pizzy neapolitańskiej?",
    answer: "Zgodnie z protokołem AVPN, standardowe nawodnienie wynosi 63-67%. Dla osób początkujących 60-62% jest łatwiejsze w obsłudze. Zaawansowani pizzaioli używający silnej mąki (W300+) mogą stosować 70-75% dla uzyskania nadzwyczajnych efektów.",
  },
  {
    question: "Jak długo ciasto powinno fermentować?",
    answer: "Minimum 24 godziny w lodówce (4°C), aby aktywować enzymy. Optymalny czas to 48-72 godziny. Powyżej 72 godzin potrzebna jest bardzo silna mąka (W300+), inaczej ciasto stanie się kwaśne.",
  },
  {
    question: "Czy można użyć drożdży suchych?",
    answer: "Tak. Drożdże suche odpowiadają 0,4x ilości drożdży świeżych (1g suchych = 2,5g świeżych). Jakość jest zbliżona, ale świeże drożdże dają pełniejszy profil smakowy.",
  },
  {
    question: "Czy mogę zrobić pizzę neapolitańską w domowym piekarniku?",
    answer: "Tak, ale z pewnymi modyfikacjami. Rozgrzej piekarnik do maksimum (250-280°C) z kamieniem do pizzy przez 45-60 minut. Pieczenie potrwa 5-7 minut zamiast 60-90 sekund.",
  },
  {
    question: "Jakiej mąki powinienem użyć?",
    answer: "Idealnie: Caputo Pizzeria (W260-280) lub Manitoba (W350-400). Alternatywa: dowolna mąka o zawartości 11-13g białka na 100g. Unikaj słabych mąk (W130-160) do długich fermentacji.",
  },
  {
    question: "Dlaczego ciasto rwie się podczas rozciągania?",
    answer: "Gluten nie uległ rozluźnieniu. Pozwól kulkom ciasta odpocząć 2-3 godziny w temperaturze pokojowej. Jeśli to się powtarza, wyrabianie było niewystarczające lub mąka jest zbyt słaba.",
  },
];
const howTo = [
  {
    name: "Oblicz proporcje",
    text: "Użyj tego kalkulatora, aby otrzymać dokładną wagę każdego składnika w zależności od liczby pizz i wagi każdej kulki ciasta.",
  },
  {
    name: "Wymieszaj składniki",
    text: "Połącz mąkę z letnią wodą (22-25°C), solą i drożdżami. Wyrabiaj 8-10 minut mikserem lub 15-20 minut ręcznie.",
  },
  {
    name: "Fermentacja w masie",
    text: "Pozwól całemu ciastu fermentować 1-2 godziny w temperaturze pokojowej (20-25°C), aż podwoi swoją objętość.",
  },
  {
    name: "Podział na kulki",
    text: "Podziel ciasto na porcje o wskazanej wadze. Formuj kulki i pozwól im odpocząć przed długą fermentacją.",
  },
  {
    name: "Zimna fermentacja",
    text: "Umieść kulki ciasta w szczelnym pojemniku w lodówce (4°C) na 24-72 godziny. To kluczowy krok dla smaku i lekkostrawności.",
  },
  {
    name: "Rozciąganie i pieczenie",
    text: "Wyjmij z lodówki 30 minut wcześniej. Rozciągaj od środka na zewnątrz. Piecz w maksymalnej temperaturze.",
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
};

export const content: ToolLocaleContent = {
  slug: 'kalkulator-ciasta-pizza-napoletanskiej',
  title,
  description,
  faqTitle: "Często Zadawane Pytania",
  ui: {
    parameters: "Parametry",
    quantity: "Ilość",
    pizzas: "pizz",
    weight: "Waga kulki",
    small: "Mała (180g)",
    standard: "Standard (260g)",
    large: "Duża (350g)",
    hydration: "Nawodnienie (Hydracja)",
    classic: "Klasyczna (55-60%)",
    modern: "Nowoczesna (65-70%)",
    high: "Wysoka (75%+)",
    salt: "Sól",
    fermentation_tip_title: "Wskazówka dotycząca fermentacji",
    fermentation_tip:
      "Dla lżejszego ciasta pozostaw je w lodówce (4°C) na 24h, używając <strong>0,3g</strong> świeżych drożdży na każde 100g mąki.",
    your_recipe: "Twój przepis",
    fresh_yeast: "Drożdże świeże",
    dry_yeast: "Suche",
    flour: "Mąka (W260-300)",
    water: "Woda",
    salt_label: "Sól morska",
    yeast: "Drożdże",
    yeast_note: "Na 8h w 20°C",
    total_weight: "Całkowita waga ciasta",
    approx: "ok.",
    visual_note:
      "Rozmiar wizualny reprezentuje przybliżoną średnicę pizzy po rozciągnięciu w zależności od wagi kulki.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Mistrzowski przewodnik po cieście na pizzę neapolitańską',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Pizza neapolitańska</strong> to dziedzictwo kulturowe. Sukces zależy od precyzji w czasie, temperaturze i nawodnieniu.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '480°C',
          label: 'Temp. pieczenia',
          icon: 'mdi:fire',
        },
        {
          value: '60-90s',
          label: 'Czas w piecu',
          icon: 'mdi:clock-fast',
        },
        {
          value: '65%',
          label: 'Std. nawodnienie',
          icon: 'mdi:water-percent',
        },
        {
          value: 'W280',
          label: 'Siła mąki',
          icon: 'mdi:grain',
        },
      ],
    },
    {
      type: 'title',
      text: 'Kluczowe znaczenie nawodnienia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nawodnienie (procent wody w stosunku do wagi mąki) decyduje o teksturze brzegów <strong>cornicione</strong>.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Nawodnienie 55 do 60%',
          icon: 'mdi:water-percent',
          description: 'Bardzo łatwe w obsłudze ciasto, idealne dla początkujących i piekarników domowych.',
          points: [
            'Łatwe tworzenie siatki glutenowej',
            'Mniej lepkie ciasto',
            'Chrupiąca i jędrna skórka',
          ],
        },
        {
          title: 'Nawodnienie 63 do 67%',
          icon: 'mdi:water',
          description: 'Standard AVPN. Idealna równowaga dla lekkiego ciasta.',
          highlight: true,
          points: [
            'Tradycyjna elastyczna struktura',
            'Idealne do pieców opalanych drewnem',
            'Wymaga średniej wprawy',
          ],
        },
        {
          title: 'Nawodnienie 70%+',
          icon: 'mdi:water-plus',
          description: 'Nowoczesne pizze z olbrzymimi brzegami. Wymaga zaawansowanej techniki.',
          points: [
            'Ekstremalnie duże pęcherze powietrza',
            'Wyjątkowo lekkie i lekkostrawne',
            'Wymaga bardzo silnych mąk',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Rodzaje drożdży i jak je wybierać',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Świeże drożdże piekarskie',
          icon: 'mdi:bread-slice-outline',
          description: 'Tradycyjny wybór mistrzów pizzy. Daje bardziej złożony profil smakowy.',
          points: [
            'Głębszy i czystszy smak',
            'Zrównoważona aktywność enzymatyczna',
            'Łatwo rozpuszczają się w wodzie',
            'Krótki termin przydatności',
          ],
        },
        {
          title: 'Suche drożdże instant',
          icon: 'mdi:shaker-outline',
          description: 'Znacznie bardziej stabilne i łatwe w przechowywaniu.',
          points: [
            'Długi termin przydatności',
            'Brak potrzeby wcześniejszego uwadniania',
            'Trzy razy silniejsze niż świeże',
            'Barziej neutralny smak',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Przewodnik po doborze mąki według wskaźnika siły W',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Typ mąki', 'Siła (W)', 'Czas fermentacji', 'Zalecane zastosowanie'],
      rows: [
        ['Słaba mąka', 'W130-180', '4-8 godzin', 'Szybkie wypieki'],
        ['Średnia siła', 'W200-240', '8-24 godzin', 'Szybka pizza lub prosty chleb'],
        ['Silna mąka', 'W260-320', '24-72 godzin', 'Autentyczna Pizza Neapolitańska'],
        ['Ekstra silna', 'W350+', '72+ godzin', 'Bardzo długa fermentacja'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Kontrola temperatury wyrabiania',
      html: 'Ciasto na koniec wyrabiania nie powinno przekraczać 24°C, aby nie uszkodzić siatki glutenowej.',
    },
    {
      type: 'title',
      text: 'Słowniczek przyszłego mistrza pizzy',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cornicione',
          definition: 'Wyrośnięty i puszysty brzeg pizzy neapolitańskiej.',
        },
        {
          term: 'Dojrzewanie',
          definition: 'Proces enzymatyczny rozkładu białek i cukrów dający smak i lekkość.',
        },
        {
          term: 'Rozwój ciasta',
          definition: 'Moment, w którym ciasto osiąga optymalną elastyczność.',
        },
        {
          term: 'Autoliza',
          definition: 'Odpoczynek samej mąki z wodą ułatwiający tworzenie glutenu.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Trik z lodówką',
      html: 'Fermentacja trwająca 24 godziny w temperaturze 4°C tworzy złożone związki aromatyczne.',
    },
    {
      type: 'paragraph',
      html: 'Nasz kalkulator automatyzuje wyliczenia, dzięki czemu możesz skupić się na pasji i technice.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
