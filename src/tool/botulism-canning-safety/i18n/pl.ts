import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Botulizm Konserwowanie Bezpieczenstwo Sprawdzanie Kalkulator Smierci Termicznej";
const description = "Oblicz redukcje termiczna zarodnikow i skutecznosc sterylizacji F0 dla Clostridium botulinum. Ocen strefy bezpieczenstwa konserwowania zywnosci nisko- i wysokokwasowej.";
const faq = [
  {
    question: "Dlaczego Clostridium botulinum stanowi glowny problem w domowym konserwowaniu?",
    answer: "Clostridium botulinum to beztlenowa, sporotworcza bakteria produkujaca toksyne botulinowa, jedna z najbardziej sMiertelnych substancji biologicznych. Zarodniki sa niezwykle odporne na cieplo i moga przetrwac w beztlenowych warunkach wewnatrz zamknietych sloikow, jesli temperatury sa niewystarczajace."
  },
  {
    question: "Jakie jest krytyczne znaczenie pH 4.6 w konserwowaniu zywnosci?",
    answer: "Zywnosc o pH ponizej 4.6 klasyfikowana jest jako wysokokwasowa. W takich srodowiskach zarodniki botuliny nie moga kielkowac ani wytwarzac toksyn. Dla zywnosci o pH 4.6 lub wyzszym wymagane jest konserwowanie cisnieniowe, aby osiagnac temperature powyzej 116 stopni Celsjusza i zniszczyc zarodniki."
  },
  {
    question: "Czym jest wartosc skutecznosci sterylizacji F0?",
    answer: "Wartosc F0 mierzy zastpczy czas sterylizacji w temperaturze 121.11 stopni Celsjusza. Standardowy proces sterylizacji zywnosci niskokwasowej wymaga wartosci F0 wynoszacej 3.0 minuty lub wiecej, co odpowiada dwunastokrotnej redukcji dziesietnej populacji zarodnikow."
  },
  {
    question: "Dlaczego nie moge uzywac kąpieli wodnej do zywnosci niskokwasowej?",
    answer: "Konserwowanie w kapieli wodnej osiaga jedynie temperature wrzenia (100 stopni Celsjusza). Temperatura ta jest niewystarczajaca, aby zabic odporne na cieplo zarodniki Clostridium botulinum w zywnosci niskokwasowej. Zarodniki przetrwaja i beda wytwarzac toksyne w temperaturze pokojowej."
  }
];

const howTo = [
  {
    name: "Okresl poziom kwasowosci zywnosci",
    text: "Okresl i wprowadz wartosc pH skladnikow. Jesli pH wynosi 4.6 lub wiecej, zywnosc jest niskokwasowa."
  },
  {
    name: "Wybierz technike konserwowania",
    text: "Wybierz pomiedzy kapiela wodna a konserwowaniem cisnieniowym w zaleznosci od dostpnego sprzetu."
  },
  {
    name: "Okresl temperature i czas",
    text: "Wprowadz temperature procesu konserwowania oraz czas w minutach, przez ktory sloiki pozostaja w tej temperaturze."
  },
  {
    name: "Ocen diagnostyke bezpieczenstwa",
    text: "Sprawdz wynikowa wartosc F0, liczbe dziesietnych redukcji zarodnikow oraz wskaznik strefy bezpieczenstwa, aby potwierdzic zgodnosc."
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
  slug: 'botulizm-konserwowanie-bezpieczenstwo',
  title: 'Botulizm Konserwowanie Bezpieczenstwo Sprawdzanie',
  description: 'Oblicz redukcje termiczna zarodnikow i skutecznosc sterylizacji F0 dla Clostridium botulinum. Ocen strefy bezpieczenstwa konserwowania zywnosci nisko- i wysokokwasowej.',
  faqTitle: 'Czesto Zadawane Pytania',
  ui: {
    title: "Monitor autoklawu do konserwowania",
    subtitle: "Diagnostyka smierci termicznej i ocena bezpieczenstwa botulizmu",
    methodLabel: "Metoda konserwowania",
    waterBath: "Kapiel wodna",
    pressureCanner: "Konserwowanie cisnieniowe",
    tempLabel: "Temperatura konserwowania",
    timeLabel: "Czas przetwarzania",
    phLabel: "pH zywnosci",
    f0Label: "Wartosc skutecznosci F0",
    dLabel: "Obliczona wartosc D",
    sporesLabel: "Populacja zarodnikow",
    statusSafe: "Sterylacja zakonczona",
    statusMarginal: "Sterylacja graniczna",
    statusUnsafe: "Wysokie ryzyko botulizmu",
    statusSafeDesc: "Skutecznosc termiczna przekracza docelowe F0 3.0 minuty. Zarodniki sa calkowicie dezaktywowane.",
    statusMarginalDesc: "Proces osiaga czesciowa dezaktywacje, ale pozostaje ponizej normy bezpieczenstwa 12D. Dostosuj czas lub temperature.",
    statusUnsafeDesc: "Proces nie dezaktywuje Clostridium botulinum. Zywnosc niskokwasowa w kapieli wodnej pozostaje niebezpieczna.",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "min",
    logReductionLabel: "Redukcja dziesietna",
    dValueUnit: "minuty",
    indicatorSectionTitle: "Wskazniki diagnostyczne",
    visualizerSectionTitle: "Redukcja zarodnikow",
    f0Tooltip: "Zastpczy czas sterylizacji w minutach w temperaturze 121.11°C. Bezpieczny prog to 3.0 lub wiecej.",
    dTooltip: "Czas redukcji dziesietnej: czas w minutach wymagany do zniszczenia 90% zarodnikow w danej temperaturze.",
    logReductionTooltip: "Liczba redukcji dziesietnych (10-krotnych). Redukcja 12D to standard bezpieczenstwa.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Mechanizmy Naukowe Przetwarzania Termicznego i Kinetyki Dezaktywacji Zarodnikow',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Przetwarzanie termiczne w konserwowaniu zapewnia sterlynosc handlowa poprzez niszczenie patogenow i mikroorganizmow powodujacych psucie sie zywnosci. Glownym celem wytycznych bezpieczenstwa w konserwowaniu zywnosci niskokwasowej jest Clostridium botulinum. Zarodniki botuliny sa wysoce odporne na cieplo w porownaniu z komorkami wegetatywnymi. Dezaktywacja tych zarodnikow wymaga procesu termicznego, ktory stosuje wysoka temperature przez obliczony czas. Matematyczna zaleznosc pomiedzy temperatura a szybkoscia dezaktywacji jest wyrazana przez czas redukcji dziesietnej (wartosc D) i wspolczynnik zaleznosci od temperatury (wartosc z).',
    },
    {
      type: 'title',
      text: 'Klasyfikacja Zywnosci i Krytyczny Prog Bezpieczenstwa pH 4.6',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wartosc pH 4.6 stanowi linie podzialu dla bezpieczenstwa konserwowania. Zywnosc wysokokwasowa ponizej pH 4.6 naturalnie hamuje kieikowanie i produkcje toksyn przez zarodniki botuliny. W przypadku takiej zywnosci wystarczy przetwarzanie w temperaturze 100 stopni Celsjusza we wrZacej kapieli wodnej. Jednak zywnosc niskokwasowa o pH powyzej 4.6 musi byc poddana konserwowaniu cisnieniowemu, aby podniesc temperature pary i osiagnac pelne termiczne niszczenie zarodnikow. Poni?sza tabela opisuje klasyfikacje i metody konserwowania dla typowych skladnikow:',
    },
    {
      type: 'table',
      headers: ['Grupa zywnosci', 'Zakres pH', 'Wymagana metoda konserwowania', 'Typowe przyklady'],
      rows: [
        ['Wysokokwasowa', 'Ponizej 4.0', 'Kapiel wodna', 'JabLka, Jagody, Cytrusy, Brzoskwinie, Marynaty octowe'],
        ['Zakwaszona lub sredniokwasowa', '4.0 do 4.6', 'Kapiel wodna z regulacja kwasowosci', 'Pomidory, Figi, Gruszki'],
        ['Niskokwasowa', '4.6 i powyzej', 'Obowiazkowe konserwowanie cinieniowe', 'Mieso, Owoce morza, Fasola, Kukurydza, Ziemniaki, Zupy'],
      ],
    },
    {
      type: 'title',
      text: 'Korekty Wysokosciowe i Bezpieczne Poprawki Temperatury Wrzenia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wraz ze wzrostem wysokosci cisnienie atmosferyczne maleje, co powoduje obnizenie temperatury wrzenia wody ponizej 100 stopni Celsjusza. W konserwowaniu w kapieli wodnej nizsza temperatura zwieksza wartosc D zarodnikow, wymagajac dluzszego czasu przetwarzania. W konserwowaniu cisnieniowym ustawienia manometru lub zaworu obciazeniowego musza byc zwiekszone, aby utrzymac docelowa wewnetrzna temperature sterylizacji. Ponizej znajduje sie tabela referencyjna temperatur wrzenia i wymaganych korekt konserwowania cisnieniowego:',
    },
    {
      type: 'table',
      headers: ['Zakres wysokosci', 'Temperatura wrzenia wody', 'Wymagane cisnienie manometru', 'Wymagane cisnienie zaworu obciazeniowego'],
      rows: [
        ['0 do 300 metrow', '100.0 °C', '11 PSI (121 °C)', '10 PSI (121 °C)'],
        ['300 do 600 metrow', '99.0 °C', '11 PSI (121 °C)', '15 PSI (121 °C)'],
        ['600 do 900 metrow', '98.0 °C', '12 PSI (121 °C)', '15 PSI (121 °C)'],
        ['900 do 1200 metrow', '97.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1200 do 1500 metrow', '96.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1500 do 2000 metrow', '94.5 °C', '14 PSI (121 °C)', '15 PSI (121 °C)'],
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego Koncepcja Redukcji Zarodnikow 12D Zapobiega Botulizmowi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Niszczenie bakterii przez cieplo ma charakter logarytmiczny. Wartosc D reprezentuje czas wymagany w danej temperaturze do zniszczenia 90% populacji zarodnikow, co odpowiada jednemu dziesietnemu zmniejszeniu logarytmicznemu. Standardem referencyjnym dla Clostridium botulinum jest wartosc D wynoszaca 0.21 minuty w temperaturze 121.11 stopni Celsjusza. Aby osiagnac wysokie marginesy bezpieczenstwa, standardy handlowe wymagaja procesu dwunastokrotnej redukcji dziesietnej (12D), co oznacza, ze populacja zarodnikow jest zmniejszana dwunastokrotnie. Daje to docelowa wartosc F0 wynoszaca 3.0 minuty, co gwarantuje bezpieczenstwo w zywnosci niskokwasowej.',
    },
    {
      type: 'title',
      text: 'Praktyczne Wskazowki Dotyczace Domowego Konserwowania i Porady Bezpieczenstwa',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Zawsze zakwaszaj pomidory sokiem z cytryny lub kwasem cytrynowym przed przetwarzaniem w kapieli wodnej, poniewaz ich naturalne pH waha sie blisko krytycznego progu 4.6.',
        'Nigdy nie skracaj czasu przetwarzania ani nie obnizaj temperatury. Kinetyka smierci termicznej jest logarytmiczna, a drobne zmiany moga pozwolic zarodnikom przetrwac.',
        'Upewnij sie, ze manometry na konserwatorach cinieniowych sa testowane corocznie pod k tem dokadnosci, poniewaz nieprawidlowe odczyty cinienia bezporednio zagraaja wewnetrznym temperaturom sterylizacji.',
        'Kompensuj ronice wysokosci, dostosowujc czas przetwarzania w kapielach wodnych lub zwiekszajac ustawienia PSI na konserwatorach cinieniowych.',
        'Unikaj konserwowania mieszanych przepisow zawierajacych niskokwasowe skladniki, takie jak mieso lub fasola, w kapieli wodnej, nawet jesli caly przepis zawiera kwas.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
