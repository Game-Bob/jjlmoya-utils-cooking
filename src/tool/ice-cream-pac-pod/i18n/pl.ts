import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkulator PAC POD Lodow Przewodnik Formulacji Kriogenicznej";
const description = "Oblicz sile przeciwzamrozeniowa i sile slodzaca dla lodow. Formuluj precyzyjne profile cukrow, procent zawartosci substancji stalych i temperatury podawania.";
const faq = [
  {
    question: "Czym jest PAC w formulacji lodow?",
    answer: "PAC oznacza Potere Anticongelante, czyli sile przeciwzamrozeniowa. Okresla, ile wody pozostaje zamarzniete w danej temperaturze podawania, kontrolujac fizyczna twardosc lodow."
  },
  {
    question: "Czym jest POD i dlaczego ma znaczenie?",
    answer: "POD oznacza Potere Dolcificante, czyli wzgledna sile slodzaca. Mierzy slodycz w porownaniu do sacharozy (cukru stolowego), ktora ma wartosc bazowa 100."
  },
  {
    question: "Dlaczego rownowazymy wiele cukrow w lodach?",
    answer: "Rozne cukry maja unikalne cechy PAC i POD. Na przykład dekstroza oferuje wysoka sile przeciwzamrozeniowa przy umiarkowanej slodyczy, podczas gdy sacharoza zapewnia standardowy korpus i slodycz. Ich mieszanie pozwala kontrolowac kremowosc bez czynienia produktu zbyt slodkim."
  },
  {
    question: "Jaki jest optymalny procent substancji stalych dla lodow?",
    answer: "Calkowity procent substancji stalych zazwyczaj wynosi od 36% do 42%. Procent ponizej tego zakresu prowadzi do lodowatych tekstur, a procent powyzej moze skutkowac piaskowatoscia lub ciezkim odczuciem w ustach."
  }
];
const howTo = [
  {
    name: "Ustaw mieszanke bazowa i temperature podawania",
    text: "Okresl wage swojej plynnej mieszanki bazowej i wprowadz docelowa temperature podawania, w ktorej zamierzasz serwowac lody."
  },
  {
    name: "Wprowadz ilosci cukru",
    text: "Dostosuj suwaki dla roznych cukrow, takich jak sacharoza, dekstroza, glukoza, cukier inwertowany i trehaloza, aby zbudowac swoj przepis."
  },
  {
    name: "Analizuj wartosci PAC i POD",
    text: "Porownaj obliczone wartosci PAC i POD z docelowymi wartosciami zalecanymi dla twojej docelowej temperatury."
  },
  {
    name: "Zweryfikuj stosunek substancji stalych i nabieralnosc",
    text: "Upewnij sie, ze calkowity procent substancji stalych miesci sie w optymalnej strefie i sprawdz wskaznik nabieralnosci, aby przewidziec koncowa teksture."
  }
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
  slug: 'lody-kalkulator-pac-pod',
  title: 'Kalkulator PAC POD Lodow',
  description: 'Oblicz sile przeciwzamrozeniowa i sile slodzaca dla lodow. Formuluj precyzyjne profile cukrow, procent zawartosci substancji stalych i temperatury podawania.',
  faqTitle: 'Czesto Zadawane Pytania',
  ui: {
    title: "Kalkulator Kriogeniczny Lodow",
    subtitle: "Panel precyzyjnej formulacji kriogenicznej dla gastronomii molekularnej",
    unitLabel: "System Jednostek",
    metricUnit: "Metryczny (gramy)",
    imperialUnit: "Imperialny (uncje)",
    baseWeightLabel: "Waga Mieszanki Bazowej",
    targetTempLabel: "Temperatura Podawania",
    sucroseLabel: "Sacharoza",
    dextroseLabel: "Dekstroza",
    glucoseLabel: "Glukoza DE40",
    invertedLabel: "Cukier Inwertowany",
    trehaloseLabel: "Trehaloza",
    pacLabel: "Sila Przeciwzamrozeniowa (PAC)",
    podLabel: "Sila Slodzaca (POD)",
    solidsLabel: "Substancje Stale",
    targetPacLabel: "Docelowy PAC",
    scoopabilityLabel: "Stan Nabieralnosci",
    stoneState: "Twardy jak Kamien",
    creamyState: "Idealna Kremowosc",
    soupState: "Topniejaca Zupa",
    stoneDesc: "Sila przeciwzamrozeniowa jest zbyt niska dla tej temperatury. Mieszanka zamarznie na kamien.",
    creamyDesc: "Rownowaga PAC jest optymalna. Lody beda nabieralne i kremowe.",
    soupDesc: "Sila przeciwzamrozeniowa jest zbyt wysoka. Lody szybko sie stopia i pozostana plymne.",
    gLabel: "g",
    ozLabel: "oz",
    cLabel: "°C",
    fLabel: "°F",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Naukowe Podstawy Kriogenicznej Formulacji Lodow i Kontroli Fazy Przejscia Szklistego',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lody to zlozona wielofazowa emulsja termodynamiczna skladajaca sie z komorek powietrza, kuleczek tluszczu, kryształkow lodu i nie zamarznietej zageszczonej fazy surowicy. Osiagniecie idealnej kremowosci i nabieralnosci wymaga starannej kontroli obnizenia punktu zamarzania wody w mieszance. Gdy temperatura spada ponizej punktu zamarzania, woda zaczyna krystalizowac w lod. Stezenie rozpuszczonych substancji w pozostalej cieklej surowicy wzrasta, co dodatkowo obniza jej punkt zamarzania. Rownowaga pomiedzy zamarznietymi kryształkami wody a nie zamarznieta faza syropu okresla twardosc i gladkosc koncowego produktu.',
    },
    {
      type: 'title',
      text: 'Zrozumiec PAC: Sila Przeciwzamrozeniowa i Matematyka Depresji',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC, czyli Potere Anticongelante, reprezentuje sile przeciwzamrozeniowa substancji rozpuszczonej wzgledem sacharozy. Sacharoza jest wyznaczona jako standard odniesienia z wartoscia PAC 100. Mechanizm jest rzadzony przez wlasciwosci koligatywne, co oznacza, ze obnizenie punktu zamarzania zalezy od liczby aktywnych czasteczek rozpuszczonych w wodzie, a nie od ich masy. Monosacharydy, takie jak dekstroza (masa czasteczkowa 180 g/mol), dostarczaja okolo dwa razy wiecej czasteczek na gram niz disacharydy, takie jak sacharoza (masa czasteczkowa 342 g/mol), co daje PAC 190. Wyzsze wartosci PAC oznaczaja, ze wiecej wody pozostaje plymne w danej temperaturze, zapobiegajac zamarznieciu lodow na kamien.',
    },
    {
      type: 'title',
      text: 'Zrozumiec POD: Sila Slodzaca i Rownowaga Sensoryczna',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'POD, czyli Potere Dolcificante, to miara wzglednej slodyczy w porownaniu z sacharoza (wartosc bazowa 100). Podczas formulowania wysokiej jakosci lodow lub gelato, rownowazenie slodyczy jest tak samo wazne jak strukturalna stabilnosc. Jesli formulator uzywa tylko sacharozy do obnizenia punktu zamarzania (zwiekszenia PAC), lody stana sie mdlaco slodkie, zanim osiagna pozadana miekkosc. Aby ominac to ograniczenie, gastronomia molekularna wykorzystuje cukry takie jak dekstroza (POD 70), trehaloza (POD 45) lub atomizowana glukoza DE40 (POD 40). Pozwalaja one na konfiguracje krzywej zamarzania bez przytlaczania podniebienia.',
    },
    {
      type: 'title',
      text: 'Baza Danych Porownawcza Popularnych Cukrow do Formulacji Kriogenicznej',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Rodzaj Cukru', 'Wzgledny PAC', 'Wzgledny POD', 'Zawartosc Substancji Stalych (%)', 'Zastosowanie Kulinarne'],
      rows: [
        ['Sacharoza', '100', '100', '100%', 'Standardowy korpus, czysty profil slodki, standardowa linia bazowa'],
        ['Dekstroza', '190', '70', '100%', 'Obniza punkt zamarzania, zwieksza miekkosc, zmniejsza slodycz'],
        ['Glukoza DE40', '90', '40', '95%', 'Dodaje korpusu, zapobiega rekrystalizacji, zwieksza lepkosc'],
        ['Cukier Inwertowany', '190', '130', '70%', 'Dodaje miekkosci, wlasciwosci nawilzajace, wzmacnia smaki owocowe'],
        ['Trehaloza', '100', '45', '90%', 'Srodek korpusowy o niskiej slodyczy, chroni bialka, czysty final'],
      ],
    },
    {
      type: 'title',
      text: 'Stosunek Calkowitych Substancji Stalych i Stabilnosc Strukturalna Emulsji',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Calkowite substancje stale obejmuja wszystkie elementy nie wodne w formulacji, w tym tluszcze, beztluszczowa substancje sucha mleka, stabilizatory, emulgatory i cukry. Optymalna mieszanka lodow zawiera od 36% do 42% calkowitych substancji stalych. Jesli substancje stale sa zbyt niskie, wysoka zawartosc wody prowadzi do wzrostu duzych kryształkow lodu i grubej tekstury. Jesli substancje stale sa zbyt wysokie, lepkosc nadmiernie wzrasta, co skutkuje ciezkim odczuciem w ustach i potencjalna piaskowatoscia spowodowana krystalizacja laktozy.',
    },
    {
      type: 'title',
      text: 'Praktyczne Kroki do Sukcesu w Formulacji Kriogenicznej',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Okresl docelowa temperature podawania swojej gabloty chlodniczej. Gelato jest zazwyczaj podawane w temperaturze -12 stopni Celsjusza, podczas gdy lody przemyslowe sa podawane chlodniejsze w temperaturze -18 stopni Celsjusza.',
        'Oblicz docelowy PAC za pomoca standardowego wzoru temperatury. Dla temperatury -12 stopni Celsjusza docelowy PAC wynosi około 216.',
        'Wybierz mieszanke cukrow. Polacz sacharoze dla standardowej slodyczy, dekstroze do obnizenia punktu zamarzania i glukoze do poprawy korpusu i tekstury.',
        'Sprawdz, czy calkowite substancje stale mieszcza sie w bezpiecznym zakresie od 36% do 42%, aby zapewnic optymalne napowietrzenie i profil topnienia lagodny dla jezyka.'
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
