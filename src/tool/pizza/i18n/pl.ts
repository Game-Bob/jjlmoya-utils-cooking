import type { ToolLocaleContent } from "../../../types";

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
    name: "Zimna fermentacja",
    text: "Umieść kulki ciasta w szczelnym pojemniku w lodówce (4°C) na 24-72 godziny. To kluczowy krok dla smaku i lekkostrawności.",
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
  bibliographyTitle: "Referencje",
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
  bibliography: [
    {
      name: "Associazione Verace Pizza Napoletana",
      url: "https://www.pizzanapoletana.org/",
    },
  ],
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
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
