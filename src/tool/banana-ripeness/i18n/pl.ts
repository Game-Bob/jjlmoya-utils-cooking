import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Diagnostyka i Konserwacja Bananów: Przewodnik Naukowy";
const description = "Analizuj stan dojrzałości swoich bananów z naukową precyzją. Poznaj techniki konserwacji, biochemię etylenu i optymalizację składników odżywczych.";
const faq = [
  {
    question: 'Dlaczego banany czernieją w lodówce?',
    answer: 'Zimno niszczy ściany komórkowe skórki, uwalniając enzymy, które utleniają fenole i tworzą czarne polifenole. Niemniej jednak wnętrze zazwyczaj pozostaje jędrne i słodkie przez dłuższy czas niż poza lodówką.',
  },
  {
    question: 'Jak mogę szybko przyspieszyć dojrzewanie banana?',
    answer: 'Umieść je w zamkniętej papierowej torbie z jabłkiem lub pomidorem. Emitują one etylen w postaci gazu, który przyspiesza dojrzewanie. Jeśli bardzo Ci się spieszy, możesz włożyć je na kilka minut do piekarnika o niskiej temperaturze.',
  },
  {
    question: 'Czy jedzenie bananów z brązowymi plamkami jest bezpieczne?',
    answer: 'Tak, całkowicie. Plamki wskazują na to, że skrobia została przekształcona w cukier, dzięki czemu owoce są słodsze i łatwiej strawne. Wyrzuć je tylko wtedy, gdy pojawi się pleśń, mają nieprzyjemny zapach lub są nadmiernie miękkie.',
  },
  {
    question: 'Co to jest etylen?',
    answer: 'To hormon roślinny w postacie gazu, który reguluje wzrost i dojrzewanie. Banan jest owocem klimakterycznym, co oznacza, że nadal wytwarza etylen i dojrzewa po zebraniu.',
  },
];
const howTo = [
  {
    name: 'Obserwuj kolor',
    text: 'Uważnie sprawdź kolor skórki, od zielonego po ciemnobrązowy, aby określić aktualny stan dojrzałości.',
  },
  {
    name: 'Używaj symulatora',
    text: 'Przesuwaj wskaźnik dojrzałości, aby zobaczyć dokładne prognozy dotyczące tego, kiedy zostanie osiągnięty kolejny etap.',
  },
  {
    name: 'Dostosuj warunki',
    text: 'Zmieniaj temperaturę i wilgotność, aby zobaczyć, jak wpływają na szybkość dojrzewania.',
  },
  {
    name: 'Zastosuj konserwację',
    text: 'Postępuj zgodnie ze szczegółowymi zaleceniami dotyczącymi konserwacji i przyspieszania w zależności od aktualnego stanu.',
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
  slug: 'diagnostyka-bananow',
  title: 'Diagnostyka i Konserwacja Bananów: Przewodnik Naukowy',
  description: 'Analizuj stan dojrzałości swoich bananów z naukową precyzją. Poznaj techniki konserwacji, biochemię etylenu i optymalizację składników odżywczych.',
  faqTitle: 'Często Zadawane Pytania',
  ui: {
    ripesnessLabel: 'Stan Dojrzałości',
    nextStageLabel: 'Kolejny Etap za',
    daysUnit: 'Dni',
    tempLabel: 'Temperatura',
    humidityLabel: 'Wilgotność',
    partnerToggleTitle: 'Towarzystwo Klimakteryczne',
    partnerToggleSubtitle: 'Zewnętrzny efekt etylenu',
    conservationTitle: 'Konserwacja',
    accelerationTitle: 'Przyspieszenie',
    stage1Name: 'Szmaragdowa Zieleń',
    stage1Desc: 'Maksymalna zawartość skrobi opornej. Pełna twardość.',
    stage1Conservation: 'Temperatura pokojowa (18-20°C). Unikać zimna (<12°C).',
    stage1Acceleration: 'Papierowa torba z jabłkiem lub dojrzałym pomidorem.',
    stage2Name: 'Promienna Żółć',
    stage2Desc: 'Idealna równowaga między twardością a początkową słodyczą.',
    stage2Conservation: 'Chłodne miejsce, odseparować od kiści, aby spowolnić etylen.',
    stage2Acceleration: 'Trzymać w kiści i owinąć folią.',
    stage3Name: 'Słodka Nakrapiana',
    stage3Desc: 'Szczyt zawartości przeciwutleniaczy. Intensywna słodycz i kremowa tekstura.',
    stage3Conservation: 'Przechowywać w lodówce, aby zachować miąższ (nawet jeśli skórka ściemnieje).',
    stage3Acceleration: 'Delikatne ciepło (w pobliżu źródła ciepła, ale nie bezpośrednio).',
    stage4Name: 'Cynamonowy Brąz',
    stage4Desc: 'Bardzo miękka tekstura. Idealne do wypieków bez cukru.',
    stage4Conservation: 'Obrać i natychmiast zamrozić.',
    stage4Acceleration: 'Osiągnął już swoje maksimum.',
    stage5Name: 'Przejrzały / Sfermentowany',
    stage5Desc: 'Zaawansowany proces degradacji.',
    stage5Conservation: 'Niezalecany do bezpośredniego spożycia.',
    stage5Acceleration: 'N/D',
  },
  faq: [
    {
      question: 'Dlaczego banany czernieją w lodówce?',
      answer: 'Zimno niszczy ściany komórkowe skórki, uwalniając enzymy, które utleniają fenole i tworzą czarne polifenole. Niemniej jednak wnętrze zazwyczaj pozostaje jędrne i słodkie przez dłuższy czas niż poza lodówką.',
    },
    {
      question: 'Jak mogę szybko przyspieszyć dojrzewanie banana?',
      answer: 'Umieść je w zamkniętej papierowej torbie z jabłkiem lub pomidorem. Emitują one etylen w postaci gazu, który przyspiesza dojrzewanie. Jeśli bardzo Ci się spieszy, możesz włożyć je na kilka minut do piekarnika o niskiej temperaturze.',
    },
    {
      question: 'Czy jedzenie bananów z brązowymi plamkami jest bezpieczne?',
      answer: 'Tak, całkowicie. Plamki wskazują na to, że skrobia została przekształcona w cukier, dzięki czemu owoce są słodsze i łatwiej strawne. Wyrzuć je tylko wtedy, gdy pojawi się pleśń, mają nieprzyjemny zapach lub są nadmiernie miękkie.',
    },
    {
      question: 'Co to jest etylen?',
      answer: 'To hormon roślinny w postacie gazu, który reguluje wzrost i dojrzewanie. Banan jest owocem klimakterycznym, co oznacza, że nadal wytwarza etylen i dojrzewa po zebraniu.',
    },
  ],
  howTo: [
    {
      name: 'Obserwuj kolor',
      text: 'Uważnie sprawdź kolor skórki, od zielonego po ciemnobrązowy, aby określić aktualny stan dojrzałości.',
    },
    {
      name: 'Używaj symulatora',
      text: 'Przesuwaj wskaźnik dojrzałości, aby zobaczyć dokładne prognozy dotyczące tego, kiedy zostanie osiągnięty kolejny etap.',
    },
    {
      name: 'Dostosuj warunki',
      text: 'Zmieniaj temperaturę i wilgotność, aby zobaczyć, jak wpływają na szybkość dojrzewania.',
    },
    {
      name: 'Zastosuj konserwację',
      text: 'Postępuj zgodnie ze szczegółowymi zaleceniami dotyczącymi konserwacji i przyspieszania w zależności od aktualnego stanu.',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Nauka o dojrzewaniu Musa × paradisiaca',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Banan jest jednym z najczęściej spożywanych owoców na świecie, ale także jednym z najbardziej niezrozumianych pod względem biologicznym. W przeciwieństwie do owoców nieklimakterycznych, takich jak cytrusy czy winogrona, banan jest <strong>owocem klimakterycznym</strong>. Oznacza to, że po zebraniu kontynuuje dojrzewanie, drastycznie zwiększając oddychanie komórkowe i produkcję kluczowego gazowego fitohormonu: <strong>etylenu</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Z biochemistycznego punktu widzenia dojrzewanie to kaskada zdarzeń enzymatycznych. W tym procesie enzymy, takie jak amylaza, rozkładają węglowodany złożone (skrobię) na cukry proste (fruktozę, glukozę i sacharozę). Zmiana ta nie tylko zmienia smak na słodszy, ale także modyfikuje teksturę poprzez degradację pektyny w ścianach komórkowych, co skutkuje miękką, kremową konsystencją charakterystyczną dla dojrzałego banana.',
    },
    {
      type: 'title',
      text: 'Cykl Etylenowy',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Etylen działa jak biologiczny przełącznik. Gdy tylko owoc wykryje niewielkie stężenie, aktywuje geny odpowiedzialne za produkcję jeszcze większej ilości etylenu, tworząc pętlę dodatniego sprzężenia zwrotnego. Dlatego bardzo dojrzały banan przyspieszy dojrzewanie wszystkich swoich sąsiadów w misce z owocami. Aby spowolnić ten proces, kluczowe jest odizolowanie egzemplarzy z brązowymi plamkami od tych, które są jeszcze zielone.',
    },
    {
      type: 'title',
      text: 'Mit Lodówki',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Istnieje powszechne przekonanie, że banany nie powinny trafiać do lodówki. Rzeczywistość jest bardziej złożona: zimno (poniżej 12°C) powoduje uszkodzenia z powodu wychłodzenia komórek skórki, co uwalnia enzymy utleniające fenole i sprawia, że skórka czernieje. Dotyczy to jednak tylko estetyki zewnętrznej. Jeśli wnętrze osiągnęło już pożądaną dojrzałość, zimno niemal całkowicie zatrzyma mięknięcie miąższu, zachowując smak i teksturę środka przez kilka dodatkowych dni.',
    },
    {
      type: 'title',
      text: 'Zaawansowane Strategie Konserwacji',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Uszczelnianie Szypułki:</strong> Owinięcie końcówki kiści folią spożywczą drastycznie zmniejsza uwalnianie etylenu, przedłużając trwałość handlową owocu nawet o 72 dodatkowe godziny.',
    },
    {
      type: 'paragraph',
      html: '<strong>Dynamiczne Zawieszenie:</strong> Wieszanie bananów zapobiega powstawaniu obić pod wpływem ciężaru. Uszkodzone tkanki szybciej uwalniają etylen, tworząc ogniska przyspieszonego dojrzewania rozprzestrzeniające się na cały owoc.',
    },
    {
      type: 'paragraph',
      html: '<strong>Krioterapia (Zamrażanie):</strong> W przypadku bananów w fazie 4 (brązowe), zamrażanie jest najlepszą opcją. Obieranie owoców przed zamrożeniem zapobiega uwięzieniu wilgoci, co pozwala zachować jakość błonnika.',
    },
    {
      type: 'title',
      text: 'Zmiany Nutraceutyczne w Zależności od Etapu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W miarę dojrzewania banana jego profil odżywczy ulega radykalnej transformacji, co pozwala na wykorzystanie go jako konkretnego narzędzia dietetycznego w zależności od celów konsumenta.',
    },
    {
      type: 'table',
      headers: ['Faza', 'Skrobia Oporna', 'Charakterystyka', 'Główna Korzyść'],
      rows: [
        ['Zielona (1-2)', '~80%', 'Bardzo twardy, maks. zawartość skrobi', 'Zdrowie jelit i kontrola glikemii'],
        ['Żółta (3)', '~5%', 'Równowaga twardości i słodyczy', 'Szybka energia i witaminy z grupy B'],
        ['Nakrapiana (4)', 'Minimalna', 'Bardzo miękka, wysoka zawartość cukrów', 'Maksymalny potencjał przeciwutleniający'],
        ['Brązowa/Przejrzała (5)', 'Prawie zerowa', 'Bardzo miękka tekstura, zaawansowana fermentacja', 'Niezalecany do spożycia'],
      ],
    },
    {
      type: 'title',
      text: 'Podsumowanie i Zastosowanie Praktyczne',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Zmniejszenie marnowania żywności:</strong> Precyzyjna diagnostyka stanu banana pozwala określić optymalny moment spożycia, zapobiegając utracie wartościowych owoców.',
        '<strong>Optymalizacja korzyści odżywczych:</strong> Od skrobi opornej z zielonych owoców dla zdrowia jelit, po przeciwutleniacze z nakrapianych dla maksymalnego potencjału antyoksydacyjnego.',
        '<strong>Planowanie strategicznego spożycia:</strong> Dostosuj użycie bananów do swoich celów zdrowotnych: kontrola glikemii, szybka energia, trawienie czy przeciwutleniacze.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Alert degradacji:</strong> Czynniki zewnętrzne, takie jak wilgotność względna powyżej 85% lub temperatury powyżej 25°C, mogą drastycznie przyspieszyć degradację, sprawiając, że banan w ciągu kilku godzin przejdzie ze stanu optymalnego do niejadalnego. Ten symulator pomoże Ci przewidzieć te zmiany i planować strategicznie.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
