import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkulator Wydajności i Kosztów Sezonowania Mięsa";
const description = "Oblicz stratę wagi mięsa, ilość odpadu z odkrawania suchej skórki oraz rzeczywisty koszt kilograma podczas sezonowania wołowiny na sucho w domu lub komorze.";
const faq = [
  {
    question: "Ile wagi traci mięso podczas sezonowania na dry aging?",
    answer: "Podczas standardowego procesu trwającego od 30 do 45 dni, mięso traci około 15% do 25% swojej wagi w wyniku odparowania wilgoci. Dodatkowo, około 15% początkowej wagi jest tracone przy odkrawaniu suchej zewnętrznej skórki przed gotowaniem."
  },
  {
    question: "Jaka jest optymalna wilgotność do sezonowania na sucho?",
    answer: "Idealna wilgotność względna wynosi od 75% do 85%. Jeśli wilgotność jest zbyt niska (poniżej 75%), powierzchnia wysycha zbyt szybko, tworząc twardą barierę. Jeśli jest za wysoka (powyżej 85%), rośnie ryzyko pleśni."
  },
  {
    question: "Dlaczego cena za kilogram tak bardzo rośnie?",
    answer: "Ponieważ tracisz wagę przez odparowanie i odkrawanie skórki, końcowa waga użytkowa jest niższa niż początkowa. Całkowity koszt zakupu się nie zmienia, więc cena za kilogram gotowego produktu rośnie proporcjonalnie do utraconej wagi."
  }
];

const howTo = [
  {
    name: "Wprowadź wagę początkową",
    text: "Wpisz wagę początkową mięsa przed rozpoczęciem procesu sezonowania."
  },
  {
    name: "Ustaw dni sezonowania",
    text: "Wybierz łączny czas trwania procesu, zazwyczaj od 1 do 60 dni."
  },
  {
    name: "Dostosuj wilgotność względną",
    text: "Ustaw wilgotność w swojej komorze (zalecane 75% do 85%), aby określić tempo utraty wody."
  },
  {
    name: "Wprowadź cenę początkową",
    text: "Podaj koszt za kilogram surowego mięsa, aby porównać go z końcową ceną po sezonowaniu."
  }
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
  slug: 'kalkulator-dojrzewania-miesa',
  title,
  description,
  faqTitle: 'Najczęściej zadawane pytania',
  ui: {
    title: 'Kalkulator Sezonowania Mięsa',
    subtitle: 'Symuluj utratę wagi i oblicz ostateczny koszt wydajności',
    startWeightLabel: 'Waga Początkowa',
    daysLabel: 'Czas Sezonowania',
    pricePerKgLabel: 'Cena Początkowa',
    humidityLabel: 'Wilgotność Względna',
    finalWeightLabel: 'Końcowa Waga Użytkowa',
    yieldLabel: 'Całkowita Wydajność',
    originalCostLabel: 'Początkowy Koszt Całkowity',
    finalCostPerKgLabel: 'Końcowa Cena Użytkowa',
    moistureLossLabel: 'Strata przez Odparowanie Wody',
    trimmingLossLabel: 'Odpad z Odkrawania Skórki',
    warningLowHumidity: 'Ostrzeżenie: Wilgotność poniżej 75%. Powierzchnia może wysychać zbyt szybko, powodując twardnienie zewnętrznej warstwy.',
    warningHighHumidity: 'Ostrzeżenie: Wilgotność powyżej 85%. Podwyższone ryzyko zepsucia bakteryjnego lub rozwoju niepożądanej pleśni.',
    timelineTitle: 'Oś Czasu Sezonowania na Sucho',
    timelineInfoText: 'Kliknij na osi czasu, aby zobaczyć fizyczne zmiany zachodzące w mięsie'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Nauka i Ekonomia Sezonowania Wołowiny na Sucho',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Sezonowanie na sucho to sztuka kulinarna łącząca mikrobiologię, biochemię i fizykę, która przekształca standardowe kawałki wołowiny w wyjątkowo kruche i aromatyczne rarytasy.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '75-85%',
          label: 'Optymalna Wilgotność',
          icon: 'mdi:water-percent'
        },
        {
          value: '1-3°C',
          label: 'Idealna Temp.',
          icon: 'mdi:thermometer'
        },
        {
          value: '15%',
          label: 'Odpad z Odkrawania',
          icon: 'mdi:knife'
        },
        {
          value: '30-45 d',
          label: 'Standardowy Czas',
          icon: 'mdi:clock-outline'
        }
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
