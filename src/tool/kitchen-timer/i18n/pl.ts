import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Multiminutnik Kuchenny";
const description = "Zarządzaj wieloma czasami gotowania jednocześnie. Niezależne alarmy, idealne dla szefów kuchni i organizacji pracy (Mise en Place).";
const faq = [
  {
    question: 'Ile minutników mogę stworzyć?',
    answer: 'Nieograniczoną liczbę. Dodaj tyle, ile potrzebujesz przyciskiem "+". Idealne do gotowania kilku potraw naraz: gotujący się makaron, redukujący się sos, odpoczywające mięso i pracujący piekarnik – wszystko jednocześnie.',
  },
  {
    question: 'Dlaczego odpoczynek mięsa jest ważny?',
    answer: 'Gdy kroisz mięso prosto z ognia, soki uciekają na talerz. Jeśli dasz mu odpocząć 5-10 minut, włókna rozluźnią się, a soki rozprzestrzenią ponownie. Wynik: soczyste mięso zamiast suchego.',
  },
  {
    question: 'Czy działa przy zablokowanym ekranie?',
    answer: 'Tak, ale musisz zezwolić na powiadomienia. Minutniki działają w tle i powiadomią Cię dźwiękiem oraz komunikatem przeglądarki, nawet jeśli zmienisz kartę lub zablokujesz telefon.',
  },
  {
    question: 'Co to jest spożywcza "Czerwona Strefa"?',
    answer: 'Między 5°C a 65°C bakterie mnożą się błyskawicznie. Gotowe jedzenie nie powinno przebywać w tej strefie dłużej niż 2 godziny (1 godzinę, jeśli jest powyżej 30°C). Użyj minutnika, by kontrolować czas chłodzenia.',
  },
];
const howTo = [
  {
    name: 'Twórz wiele minutników',
    text: 'Użyj przycisku "+", aby dodać tyle minutników, ile potrzebujesz do koordynacji potraw.',
  },
  {
    name: 'Personalizuj każdy minutnik',
    text: 'Zmień nazwę każdego minutnika, aby wiedzieć, co mierzy: "Piekarnik", "Ryż", "Sos" itp.',
  },
  {
    name: 'Steruj z mobilnego doku',
    text: 'Na komórkach aktywne minutniki pojawiają się w przesuwanym doku na dole. Wstrzymuj lub resetuj bezpośrednio tam.',
  },
  {
    name: 'Otrzymuj powiadomienia',
    text: 'Zezwól na powiadomienia, aby przeglądarka ostrzegła Cię, gdy czas dobiegnie końca.',
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
  slug: 'minutnik-kuchenny',
  title: 'Multiminutnik Kuchenny',
  description: 'Zarządzaj wieloma czasami gotowania jednocześnie. Niezależne alarmy, idealne dla szefów kuchni i organizacji pracy (Mise en Place).',
  faqTitle: 'Często Zadawane Pytania',
  ui: {
    addTimer: 'Dodaj Minutnik',
    stopAll: 'Zatrzymaj Wszystkie',
    defaultName: 'Minutnik',
    newTimerName: 'Nowy Minutnik',
    timerDefault1: 'Minutnik 1',
    timerDefault2: 'Minutnik 2',
    timerDefault3: 'Minutnik 3',
    label: 'Etykieta',
    hours: 'Godz',
    minutes: 'Min',
    seconds: 'Sek',
    ready: 'Gotowy',
    start: 'Start',
    pause: 'Pauza',
    reset: 'Reset',
    addOneMin: '+1 min',
    addFiveMin: '+5 min',
    statusReady: 'Gotowy',
    statusRunning: 'Działa',
    statusPaused: 'Wstrzymany',
    statusFinished: 'CZAS!',
    finishNotification: 'Minutnik zakończony dla',
  },
  faq, howTo,
  seo: [
    {
      type: 'title',
      text: 'Mistrzostwo Czasu w Kuchni',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Profesjonalne gotowanie to nie tylko przepisy, ale <strong>precyzyjne zarządzanie czasem</strong>. Francuska koncepcja <em>"Mise en Place"</em> (wszystko na swoim miejscu) traktuje czas jako brakujący składnik.',
    },
    {
      type: 'title',
      text: 'Rola Temperatury i Czasu',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Produkt', 'Stopień ugotowania', 'Czas', 'Korzyść'],
      rows: [
        ['Jajka na miękko', 'Płynne żółtko', '3-4 min', 'Delikatne białko'],
        ['Jajka Mollet', 'Kremowe żółtko', '5-6 min', 'Idealny balans'],
        ['Jajka na twardo', 'Ścięte', '9-11 min', 'Maksymalna gęstość'],
        ['Mięso - Smażenie', 'Wysoka temp.', '1-2 min/strona', 'Reakcja Maillarda'],
        ['Mięso - Odpoczynek', 'Odpoczynek', '5-20 min', 'Rozkład soków'],
      ],
    },
    {
      type: 'title',
      text: 'Bezpieczeństwo Żywności: Strefa Niebezpieczeństwa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Czas wpływa również na bezpieczeństwo. Bakteryjna "Strefa Niebezpieczeństwa" to 5°C do 65°C. Jedzenie nie powinno przebywać w niej dłużej niż <strong>2 godziny</strong>.',
    },
    {
      type: 'title',
      text: 'Porady Dotyczące Organizacji',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Stopniuj czasy zakończenia:</strong> jeśli wszystko skończy się naraz, spanikujesz przy nakładaniu.',
        '<strong>Użyj ciepła resztkowego:</strong> wyłącz ogień 1-2 minuty przed dzwonkiem.',
        '<strong>Nazwij minutniki:</strong> użyj etykiet dla "Piekarnika", "Ryżu" lub "Sosu".',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Porada eksperta:</strong> precyzja czasu odróżnia szefa kuchni od amatora. Używaj technologii, by zagwarantować powtarzalność.',
    },
  ],
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
