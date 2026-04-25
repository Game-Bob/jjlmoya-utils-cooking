import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkulator Bezy i Ubijania Białek";
const description = "Oblicz dokładną ilość cukru do bezy francuskiej, włoskiej lub szwajcarskiej na podstawie wagi białek. Czas ubijania i triki cukiernicze.";
const faq = [
  {
    question: 'Jaka relacja cukru do białek jest idealna?',
    answer: 'Złota zasada w cukiernictwie to stosunek 1:2. Na każdy gram białka kurzego należy użyć dwóch gramów cukru, aby zapewnić stabilną i sztywną strukturę.',
  },
  {
    question: 'Jak sprawdzić, czy beza jest ubieta "na sztywno"?',
    answer: 'Szczyt sztywności osiąga się, gdy po podniesieniu mieszadeł beza tworzy czubek, który pozostaje pionowo bez zginania się. Dodatkowo powinna być bardzo lśniąca.',
  },
  {
    question: 'Która beza jest najstabilniejsza do dekoracji?',
    answer: 'Beza włoska jest najstabilniejsza z trzech głównych typów, ponieważ gorący syrop cukrowy lekko "gotuje" białka, tworząc strukturę bardziej odporną na ciepło i czas.',
  },
  {
    question: 'Czy można używać białek pasteryzowanych z kartonu?',
    answer: 'Tak, można ich używać, ale zazwyczaj ubijają się nieco dłużej niż świeże białka. Trikiem jest dodanie szczypty winianu potasu lub kilku kropel cytryny dla lepszej stabilności.',
  },
];
const howTo = [
  {
    name: 'Zważ białka',
    text: 'Użyj wagi cyfrowej, aby uzyskać dokładną wagę białek bez śladów żółtka.',
  },
  {
    name: 'Wprowadź wagę',
    text: 'Wpisz wagę do naszego kalkulatora, aby otrzymać potrzebne ilości cukru.',
  },
  {
    name: 'Wybierz technikę',
    text: 'Wybierz, czy przygotowujesz bezę francuską (podstawową), włoską (stabilną) czy szwajcarską (jedwabistą).',
  },
  {
    name: 'Ubijaj i sprawdzaj',
    text: 'Śledź szacowane czasy i sprawdzaj konsystencję, aż do osiągnięcia sztywnych wierzchołków.',
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
  slug: 'kalkulator-bezy-ubijanie-bialek',
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  ui: {
    whitesLabel: 'Waga Białek',
    whitesPlaceholder: 'Np. 120',
    whitesUnit: 'g',
    typeLabel: 'Typ Bezy',
    typeFrench: 'Francuska',
    typeItalian: 'Włoska',
    typeSwiss: 'Szwajcarska',
    timesHeading: 'Szacowane Czasy (Ubijanie na średnich/wysokich obrotach)',
    stageSpumado: 'Spienione',
    stageSpumadoDesc: 'Duże bąbelki, jak piana mydlana.',
    stageSoftPeaks: 'Miękkie Wierzchołki',
    stageSoftPeaksDesc: 'Czubek zgina się przy podnoszeniu.',
    stageStiffPeaks: 'Sztywna Piana',
    stageStiffPeaksDesc: 'Sztywny i lśniący wierzchołek.',
    frenchSugarWhite: 'Cukier Drobny',
    frenchSugarPowder: 'Cukier Puder',
    frenchTip: 'Beza francuska jest najpopularniejsza i najłatwiejsza, idealna do pieczenia bezików. Nie nadaje się do spożycia na surowo.',
    frenchTime1: '1-2 min',
    frenchTime2: '3-5 min',
    frenchTime3: '7-9 min',
    italianSugarSyrup: 'Cukier na Syrop',
    italianWater: 'Woda',
    italianTip: 'Beza włoska jest najstabilniejsza. Robi się ją z syropu o temp. 118°C. Idealna do dekoracji tortów.',
    italianTime1: '2 min',
    italianTime2: '5 min',
    italianTime3: '10-12 min',
    swissSugarWhite: 'Cukier Drobny',
    swissMaxTemp: 'Temp. Maks.',
    swissTip: 'Bezę szwajcarską podgrzewa się w kąpieli wodnej do rozpuszczenia cukru. Idealna do kremów maślanych.',
    swissTime1: '1-2 min',
    swissTime2: '4-6 min',
    swissTime3: '8-10 min',
    invalidWeightError: 'Wprowadź prawidłową wagę',
  },
  faq,
  howTo, seo: [
    {
      type: 'title',
      text: 'Mistrzowski przewodnik po ubijaniu bezy',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Opanowanie <strong>sztywnej piany</strong> i typów bezy wznosi Twoje wypieki na profesjonalny poziom. Kluczem jest precyzja wagi.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1:2',
          label: 'Ratio Białko:Cukier',
          icon: 'mdi:scale-balance',
        },
        {
          value: '118°C',
          label: 'Syrop Włoski',
          icon: 'mdi:thermometer-high',
        },
        {
          value: '60°C',
          label: 'Kąpiel Szwajcarska',
          icon: 'mdi:beaker-question-outline',
        },
        {
          value: '0%',
          label: 'Brak Tłuszczu',
          icon: 'mdi:close-circle-outline',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Beza Francuska',
          icon: 'mdi:baguette',
          description: 'Najprostsza, lecz najmniej stabilna.',
          points: [
            'Idealna do pieczenia (beziki)',
            'Lekka struktura',
            'Wymaga pieczenia',
            'Szybka',
          ],
        },
        {
          title: 'Beza Włoska',
          icon: 'mdi:pizza',
          description: 'Najbardziej stabilna.',
          highlight: true,
          points: [
            'Dla tortów i kremów',
            'Bezpieczna na surowo',
            'Odporna na wilgoć',
            'Gęsta i lśniąca',
          ],
        },
        {
          title: 'Beza Szwajcarska',
          icon: 'mdi:cheese',
          description: 'Podgrzewana na parze.',
          points: [
            'Baza do Buttercreamów',
            'Bardzo jedwabista',
            'Doskonała do nadzień',
            'Wysoka stabilność',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Triki z metalową miską',
      html: 'Przetrzyj miskę octem lub cytryną. Każdy ślad tłuszczu uniemożliwi ubicie białek.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
