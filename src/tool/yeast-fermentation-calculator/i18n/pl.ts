import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FermentationUI } from '../ui';

const title = "Kalkulator Czasu Fermentacji Drożdży do Chleba, Zakwasu i Piwa";
const description = "Oszacuj czas wyrastania chleba, fermentacji zakwasu i piwa w zależności od temperatury, ilości drożdży i celu. Jednostki metryczne i imperialne.";

const faq = [
  {
    "question": "Co szacuje ten kalkulator fermentacji?",
    "answer": "Szacuje okno czasowe dla ciasta chlebowego, zakwasu lub piwa."
  },
  {
    "question": "Dlaczego temperatura tak bardzo wpływa na wynik?",
    "answer": "Temperatura bezpośrednio zmienia tempo metabolizmu drożdży."
  },
  {
    "question": "Co wpisać dla zakwasu?",
    "answer": "Masę mąki jako wsad i masę zakwasu jako ilość kultury."
  },
  {
    "question": "Co wpisać dla piwa?",
    "answer": "Objętość brzeczki w litrach i drożdże suche w gramach."
  },
  {
    "question": "Czy kończyć fermentację gdy mija szacowany czas?",
    "answer": "Nie, zweryfikuj ciasto wizualnie lub zmierz gęstość brzeczki."
  },
  {
    "question": "Czy mogę używać jednostek imperialnych?",
    "answer": "Tak, przełącznikiem na górze narzędzia."
  }
];

const howTo = [
  {
    "name": "Wybierz tryb",
    "text": "Wybierz chleb, zakwas lub piwo."
  },
  {
    "name": "Ustaw kulturę i temperaturę",
    "text": "Wybierz typ drożdży i temperaturę."
  },
  {
    "name": "Wpisz wsad i drożdże",
    "text": "Podaj mąkę/brzeczkę oraz ilość drożdży."
  },
  {
    "name": "Ustal cel",
    "text": "Wybierz wzrost ciasta lub odfermentowanie."
  }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({ '@type': 'Question' as const, name: item.question, acceptedAnswer: { '@type': 'Answer' as const, text: item.answer } })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howTo.map((step) => ({ '@type': 'HowToStep' as const, name: step.name, text: step.text })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
};

const ui: FermentationUI = {
  "modeBread": "Chleb",
  "modeSourdough": "Zakwas",
  "modeBeer": "Piwo",
  "modeBreadHint": "drożdże komercyjne",
  "modeSourdoughHint": "dzika kultura",
  "modeBeerHint": "ale lub lager",
  "temperature": "Temperatura fermentacji",
  "temperatureHelp": "Użyj temperatury ciasta lub brzeczki.",
  "systemLabel": "Jednostki",
  "metricSystem": "Metryczne",
  "imperialSystem": "Imperialne",
  "useImperial": "Użyj imperialnych",
  "useMetric": "Użyj metrycznych",
  "imperialTemperatureUnit": "°F",
  "metricTemperatureUnit": "°C",
  "imperialMassUnit": "oz",
  "metricMassUnit": "g",
  "imperialFlourUnit": "oz",
  "metricFlourUnit": "g",
  "imperialWortUnit": "gal",
  "metricWortUnit": "L",
  "batchSize": "Wielkość wsadu",
  "batchSizeHelp": "Masa mąki dla ciasta lub objętość brzeczki dla piwa.",
  "flour": "Masa mąki",
  "wort": "Objętość brzeczki",
  "yeastAmount": "Ilość kultury",
  "yeastAmountHelp": "Zważ drożdże lub zakwas.",
  "yeastType": "Typ kultury",
  "instant": "Suche błyskawiczne",
  "active": "Suche aktywne",
  "fresh": "Świeże drożdże",
  "starter": "Zakwas",
  "ale": "Drożdże ale",
  "lager": "Drożdże lager",
  "targetRise": "Docelowy wzrost",
  "targetAttenuation": "Docelowe odfermentowanie",
  "targetHelp": "To cel kontrolny, a nie automatyczna gwarancja.",
  "riseUnit": "x objętość",
  "attenuationUnit": "%",
  "presetRoom": "Pokojowa",
  "presetWarm": "Ciepła",
  "presetCool": "Chłodna",
  "presetOvernight": "Nocna",
  "calculate": "Aktualizuj szacunek",
  "reset": "Resetuj do chleba",
  "estimatedWindow": "Szacowane okno fermentacji",
  "rate": "Tempo pracy",
  "pitchDensity": "Gęstość zadawania",
  "status": "Odczyt",
  "steady": "warunki stabilne",
  "watch": "obserwuj kulturę",
  "caution": "poza optymum",
  "invalid": "wprowadź poprawne dane",
  "steadyText": "Dane są blisko profilu referencyjnego. Obserwuj ciasto lub brzeczkę.",
  "watchText": "Szacunek służy jako przewodnik, ale temperatura czyni okno zmiennym.",
  "cautionText": "Kombinacja odbiega od profilu bazowego. Traktuj jako sygnał orientacyjny.",
  "invalidText": "Wprowadź wartości dodatnie.",
  "assumptions": "Założenia modelu",
  "assumptionsText": "Model stosuje współczynnik temperatury Q10 i subliniową korektę dawki.",
  "targetMarker": "cel",
  "riseScene": "objętość ciasta",
  "attenuationScene": "przekonwertowany cukier",
  "hours": "godziny",
  "days": "dni",
  "perLiter": "g/L",
  "perGallon": "oz/gal",
  "perFlour": "mąki",
  "enterValid": "Wprowadź dane.",
  "faqTitle": "Często Zadawane Pytania",
  "bibliographyTitle": "Bibliografia i Źródła"
};

export const content: ToolLocaleContent<FermentationUI> = {
  slug: "kalkulator-czasu-fermentacji-drozdzy",
  title,
  description,
  ui,
  faqTitle: ui.faqTitle,
  faq,
  bibliographyTitle: ui.bibliographyTitle,
  bibliography,
  howTo,
  seo: [
    { type: 'title', text: "Jak działa szacowanie fermentacji", level: 2 },
    { type: 'paragraph', html: "Szukasz kalkulatora czasu fermentacji drożdży, wyrastania zakwasu lub piwa? To narzędzie zapewnia praktyczne okno czasowe na podstawie temperatury, drożdży, wielkości wsadu i celu." },
    { type: 'stats', columns: 3, items: [{ value: '3', label: "tryby fermentacji", icon: 'mdi:flask-outline' }, { value: 'Q10', label: "czynnik temperatury", icon: 'mdi:thermometer' }, { value: 'range', label: "format wyniku", icon: 'mdi:arrow-expand-horizontal' }] },
    { type: 'title', text: "Czynniki wpływające na okno czasowe", level: 3 },
    { type: 'table', headers: ["Zmienna","Chleb i zakwas","Piwo"], rows: [["Wielkość wsadu","Mąka w gramach","Brzeczka w litrach"],["Ilość kultury","Drożdże/zakwas w gramach","Drożdże suche w gramach"],["Cel końcowy","Mnożnik objętości ciasta","Docelowe odfermentowanie"],["Kontrola","Objętość i elastyczność","Stabilny pomiar gęstości"]] },
    { type: 'title', text: "Dlaczego wynik jest zakresem czasowym", level: 3 },
    { type: 'paragraph', html: "Ciasta o tym samym przepisie mogą fermentować w różnym tempie z powodu wahań temperatury i witalności drożdży. Zakres ukazuje tę niepewność." },
    { type: 'tip', title: "Używaj celu jako wskaźnika wizualnego", html: "Dla ciasta oceniaj wzrost i strukturę. Dla piwa potwierdź stały odczyt spławikiem." },
    { type: 'paragraph', html: 'Podczas fermentacji traktuj temperaturę i objętość jako praktyczne punkty kontroli. Przedział czasu jest oceną, dlatego obserwuj strukturę ciasta i potwierdź koniec fermentacji piwa stabilnym pomiarem.' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
