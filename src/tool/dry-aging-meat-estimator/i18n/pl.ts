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
    },
    {
      type: 'title',
      text: 'Zrozumienie Dynamiki Utraty Wagi i Krzywej Asymptotycznej',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Utrata wagi podczas sezonowania ma charakter asymptotyczny. W pierwszych 14 dniach woda szybko odparowuje z zewnętrznych warstw. Tworzy się twarda, ciemna skorupa (skórka/pellicle), która spowalnia dalsze odparowywanie po 2-3 tygodniach.'
    },
    {
      type: 'list',
      items: [
        '<strong>Dni 1-14:</strong> Szybkie odparowywanie. Mięso traci od 10% do 12% swojej wagi (głównie wodę). Włókna mięśniowe kurczą się, a smaki ulegają skoncentrowaniu.',
        '<strong>Dni 15-30:</strong> Odparowywanie spowalnia dzięki utworzeniu się skórki. Enzymy (kalpainy i katepsyny) rozkładają kolagen, nadając mięsku kruchość.',
        '<strong>Dni 30-45:</strong> Minimalna dodatkowa utrata wody. Rozwój głębokich nut orzechowych i serowych (jak ser pleśniowy) w wyniku utleniania tłuszczów.',
        '<strong>Strata z Odkrawania:</strong> Po zakończeniu sezonowania zewnętrzną skorupę należy odkroić, co stanowi około 15% całkowitej wagi.'
      ]
    },
    {
      type: 'title',
      text: 'Kontrola Środowiska w Komorze Do dojrzewania',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Stała jakość powietrza, temperatura i wilgotność są kluczowe. Odchylenia mogą doprowadzić do zepsucia mięsa.'
    },
    {
      type: 'list',
      items: [
        '<strong>Temperatura:</strong> Utrzymuj od 1°C do 3°C. Poniżej 0°C enzymy zamarzają; powyżej 4°C rozwijają się bakterie chorobotwórcze.',
        '<strong>Wilgotność Względna:</strong> Idealny zakres to 75% do 85%. Poniżej 70% dochodzi do zbyt szybkiego stwardnienia powierzchni; powyżej 85% rozwijają się niepożądane pleśnie.',
        '<strong>Przepływ Powietrza:</strong> Ciągła cyrkulacja jest niezbędna do równomiernego suszenia powierzchni.'
      ]
    },
    {
      type: 'title',
      text: 'Skutki Finansowe i Obliczenia Kosztów',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Ze względu na odparowanie i odkrawanie jadalna porcja jest mniejsza, co podnosi efektywną cenę za kilogram.'
    },
    {
      type: 'table',
      headers: ['Czas Dojrzewania', 'Ø Strata Odparowania', 'Ø Odpad z Odkrawania', 'Całkowity Plon', 'Mnożnik Kosztów'],
      rows: [
        ['14 Dni', '10.5%', '15.0%', '74.5%', '1.34x'],
        ['21 Dni', '13.5%', '15.0%', '71.5%', '1.40x'],
        ['30 Dni', '17.5%', '15.0%', '67.5%', '1.48x'],
        ['45 Dni', '21.0%', '15.0%', '64.0%', '1.56x'],
        ['60 Dni', '24.0%', '15.0%', '61.0%', '1.64x']
      ]
    },
    {
      type: 'title',
      text: 'Zasady Bezpieczeństwa: Mikrobiologia i Pleśnie Dobre vs Złe',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Bezpieczne sezonowanie opiera się na rozwoju pożytecznej mikroflory (grzyby z rodzaju <em>Thamnidium</em>, <em>Mucor</em>, <em>Rhizopus</em>). Ścisła higiena jest absolutnie wymagana.'
    },
    {
      type: 'list',
      items: [
        '<strong>Dobre Wskaźniki:</strong> Sucha, twarda, ciemnofioletowa lub brunatna skórka. Cienka biała warstwa meszku pleśniowego (jak na skórce sera) jest normalna.',
        '<strong>Złe Wskaźniki:</strong> Lepkie, śliskie lub mokre powierzchnie. Pleśnie zielone, czarne lub żółtawe. Zapach amoniaku lub gnicia oznacza zepsucie.',
        '<strong>Czystość:</strong> Zawsze sterylizuj komorę, haki i półki przed umieszczeniem nowego płata mięsa.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
