import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Kalkulator Pektyn i Dzemu dla Idealnego Zelowania za Kazdym Razem';
const description = 'Oblicz dokladnie ile pektyny, kwasu cytrynowego i cukru potrzebuja Twoje owoce, aby osiagnac idealny dzem. Unikaj rzadkich lub gumowatych przetworow dzieki precyzyjnej chemii.';

const faq = [
  {
    question: 'Dlaczego pektyna powoduje zelowanie dzemu?',
    answer: 'Pektyna to naturalny polisacharyd wystepujacy w scianach komorkowych owocow. Podczas ogrzewania z cukrem i kwasem (pH 2,8-3,5) czasteczki pektyny tworza trojwymiarowa siec zelowa, ktora zatrzymuje wode i cukier, tworzac smarowna konsystencje dzemu.',
  },
  {
    question: 'Jaka jest roznica miedzy pektyna HM a LM?',
    answer: 'Wysokometoksylowana (HM) pektyna wymaga co najmniej 60% cukru i pH ponizej 3,5 do zelowania - idealna do tradycyjnych dzemow. Niskometoksylowana (LM) pektyna zeluje za pomoca jonow wapnia zamiast cukru, umozliwiajac przygotowanie przetworow niskocukrowych lub bezcukrowych.',
  },
  {
    question: 'Dlaczego moj dzem czasami wychodzi rzadki?',
    answer: 'Rzadki dzem zazwyczaj wynika z niedostatecznej ilosci pektyny (owoc naturalnie jej nie zawiera), niedostatecznej ilosci kwasu (pH zbyt wysokie dla zelowania) lub zbyt malej ilosci cukru (dla pektyny HM). Nadmierne rozcienczenie woda lub niedogotowanie rowniez moga uniemozliwic scinanie.',
  },
  {
    question: 'Czy moge uzyc soku z cytryny zamiast proszku kwasu cytrynowego?',
    answer: 'Tak. Ten kalkulator przelicza kwas cytrynowy na rownowazniki soku z cytryny. Około 25 ml soku z cytryny zapewnia taka sama kwasowosc jak 1 g kwasu cytrynowego. Sok z cytryny dodaje rowniez swiezego smaku dzemom.',
  },
  {
    question: 'Ktore owoce sa naturalnie bogate w pektyne?',
    answer: 'Jablka, pigwa, jezyny, zurawina i agrest sa naturalnie bogate w pektyne i czesto nie wymagaja dodatku pektyny. Niedojrzale owoce rowniez zawieraja wiecej pektyny niz owoce w pelni dojrzale.',
  },
];

const howTo = [
  {
    name: 'Wybierz swoje owoce',
    text: 'Wybierz owoce, z ktorych robisz dzem. Kazdy owoc ma rozne naturalne poziomy pektyny i kwasowosci, ktore okreslaja, jakie dodatki sa potrzebne.',
  },
  {
    name: 'Zwaz przygotowane owoce',
    text: 'Wprowadz wage oczyszczonych, pokrojonych owocow w gramach. Dokladne wazenie jest kluczowe dla precyzyjnego przygotowania dzemu.',
  },
  {
    name: 'Wybierz rodzaj pektyny',
    text: 'Wybierz Klasyczna (HM) dla tradycyjnego dzemu wysokocukrowego lub Niskocukrowa (LM) dla zdrowszego, niskocukrowego przetworu aktywowanego wapniem.',
  },
  {
    name: 'Sprawdz swoj idealny przepis',
    text: 'Kalkulator podaje dokladne gramy pektyny w proszku, kwasu cytrynowego (lub soku z cytryny) oraz potrzebny cukier. Dodaj je podczas gotowania dla gwarantowanego zelowania.',
  },
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
  slug: 'kalkulator-pektyny-dzemu',
  title: 'Kalkulator Pektyn i Dzemu',
  description: 'Oblicz dokladnie ile pektyny, kwasu cytrynowego i cukru potrzebuja Twoje owoce dla idealnego dzemu - nigdy wiecej rzadkich ani gumowatych przetworow.',
  faqTitle: 'Czesto Zadawane Pytania',
  ui: {
    title: 'Kalkulator Pektyn i Dzemu',
    subtitle: 'Precyzyjna chemia zelu dla idealnych przetworow',
    fruitLabel: 'Wybierz Owoce',
    allFruits: 'Wszystkie',
    highPectin: 'Wysoka Pektyna',
    mediumPectin: 'Srednia Pektyna',
    lowPectin: 'Niska Pektyna',
    weightLabel: 'Waga Owocow',
    weightPlaceholder: 'np. 1000',
    weightUnitMetric: 'g',
    weightUnitImperial: 'oz',
    pectinTypeLabel: 'Rodzaj Pektyny',
    pectinHM: 'Klasyczna (HM)',
    pectinLM: 'Niskocukrowa (LM)',
    sugarModeLabel: 'Tryb Cukru',
    sugarModeAuto: 'Auto',
    sugarModeManual: 'Reczny',
    sugarLabel: 'Waga Cukru',
    sugarPlaceholder: 'np. 650',
    recipeTitle: 'Przepis',
    pectinNeeded: 'Pektyna',
    citricAcidNeeded: 'Kwas Cytrynowy',
    lemonJuiceNeeded: 'Sok z Cytryny',
    sugarNeeded: 'Cukier',
    totalYield: 'Calkowita Wydajnosc',
    sugarPercent: 'Cukier',
    sugarLow: 'Niski',
    sugarIdeal: 'Idealny',
    sugarHigh: 'Wysoki',
    sugarOfFruit: 'wagi owocow',
    sugarOfTotal: 'calkowitej',
    statusPerfect: 'Idealny Zel',
    statusPerfectDesc: 'Twoje proporcje sa zrownowazone. Dzem pieknie zastygnie o jedwabistej, smarownej konsystencji i blyszczacym polysku.',
    statusSlightlyThin: 'Lekko Rzadki',
    statusSlightlyThinDesc: 'Dzem moze scinac sie miekkim zelem. Rozwaz dodanie wiekszej ilosci pektyny lub zmniejszenie zawartosci wody dla twardszego zelu.',
    statusTooThin: 'Za Rzadki - Ryzyko Rzadkiego Dzemy',
    statusTooThinDesc: 'Bez korekty ten dzem prawdopodobnie pozostanie plynny. Zwieksz ilosc cukru (dla HM) lub dodaj wiecej pektyny.',
    statusTooStiff: 'Za Twardy',
    statusTooStiffDesc: 'Zel moze stac sie gumowaty. Zmniejsz ilosc pektyny o polowe lub nieco zwieksz wage owocow.',
    dropTestTitle: 'Test Zimnego Talerza',
    dropTestHow: 'Upusc krople na schlodzony talerz',
    dropStatusLabel: 'Wynik',
    dropTestPerfect: 'Scina sie. Kropla marszczy sie i trzyma',
    dropTestThin: 'Rzadki. Splywa z talerza',
    dropTestStiff: 'Za twardy. Ledwo sie porusza',
    dropPlateLabel: 'talerz',
    dropDropLabel: 'kropla',
    sugarAutoHint: 'auto-obliczone',
    sugarManualHint: 'wprowadz ilosc',
    unitLabel: 'System Miar',
    metricLabel: 'Metryczny (g)',
    imperialLabel: 'Imperialny (oz)',
    disclaimer: 'Waz wszystkie skladniki na cyfrowej wadze kuchennej dla najlepszych rezultatow. Pomiary objetosciowe sa niemiarodajne przy przygotowaniu dzemu.',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Pelna Nauka o Scinaniu Dzemy: Rownowaga Pektyny, Kwasu i Cukru',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Przygotowanie dzemu to precyzyjne przeciecie chemii i gotowania. W swoim sednie, przeksztalcenie pulpy owocowej w staly, smarowny zel zalezy od wlasciwej rownowagi trzech czasteczek: <strong>pektyny</strong> (czynnika zelujacego), <strong>kwasu</strong> (katalizatora aktywujacego pektyne) i <strong>cukru</strong> (czynnika odwadniajacego, ktory odciaga wode od lancuchow pektynowych). Bez odpowiednich proporcji skonczysz z zupa owocowa lub gumowatym blokiem.',
    },
    {
      type: 'title',
      text: 'Jak Pektyna Tworzy Siec Zelowa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pektyna jest zlozonym polisacharydem zlozonym glownie z jednostek kwasu galakturonowego, znajdujacym sie w blaszce srodkowej scian komorkowych roslin. W stanie naturalnym czasteczki pektyny sa naladowane ujemnie i odpychaja sie wzajemnie, pozostajac rozpuszczone w wodzie owocu. Aby utworzyc zel, musza byc jednoczesnie spelnione trzy warunki: (1) musi byc wystarczajaca ilosc cukru, aby konkurowac o czasteczki wody, odwadniajac lancuchy pektyny; (2) pH musi spasc ponizej 3,5, neutralizujac ladunki ujemne poprzez protonowanie grup karboksylowych; i (3) temperatura musi przekroczyc 104-105°C, aby calkowicie rozpuscic i aktywowac pektyne. Gdy te warunki zostana spelnione, lancuchy pektyny tworza strefy polaczen - obszary, w ktorych lancuchy lacza sie poprzez wiazania wodorowe i oddzialywania hydrofobowe - tworzac ciagla trojwymiarowa gabczasta siec, ktora zatrzymuje sok owocowy i syrop cukrowy.',
    },
    {
      type: 'title',
      text: 'Wysokometoksylowana (HM) vs. Niskometoksylowana (LM) Pektyna',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pektyna jest klasyfikowana wedlug stopnia estryfikacji (DE), czyli procentu grup karboksylowych zestryfikowanych metanolem. <strong>Wysokometoksylowana (HM) pektyna</strong> (DE > 50%) wymaga co najmniej 55-65% rozpuszczalnych substancji stalych (cukru) i pH miedzy 2,8 a 3,5 do utworzenia zelu. To klasyczna pektyna stosowana w tradycyjnych przepisach na dzem. Bez wystarczajacej ilosci cukru pektyna HM tworzy slaby lub nieistniejacy zel. <strong>Niskometoksylowana (LM) pektyna</strong> (DE < 50%) zeluje poprzez inny mechanizm: sieciuje za pomoca dwuwartosciowych jonow wapnia (Ca²⁺), ktore tworza mostki miedzy wolnymi grupami karboksylowymi. Pektyna LM moze zelowac z niewielka iloscia dodanego cukru lub bez niego, co czyni ja idealna do niskokalorycznych, przyjaznych dla diabetykow lub naturalnie slodzonych przetworow. Niektore pektyny LM toleruja rowniez szerszy zakres pH do 5,5, przydatny dla owocow niskokwasowych, takich jak figi i gruszki.',
    },
    {
      type: 'title',
      text: 'Naturalna Zawartosc Pektyny w Roznych Odmianach Owocow',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nie wszystkie owoce sa rowne pod wzgledem pektyny. Owoce dziela sie na trzy kategorie w zaleznosci od ich naturalnego poziomu pektyny i kwasu. Zrozumienie, gdzie na tym spektrum znajduje sie Twoj owoc, okresla, czy musisz uzupelnic go pektyna w proszku lub kwasem cytrynowym.',
    },
    {
      type: 'table',
      headers: ['Poziom Pektyny', 'Poziom Kwasowosci', 'Przykladowe Owoce', 'Potrzebna Dodana Pektyna'],
      rows: [
        ['Wysoki', 'Wysoki', 'Jablko, Zurawina, Agrest', '0% (brak)'],
        ['Wysoki', 'Sredni/Niski', 'Pigwa, Jezyna', '0% (brak)'],
        ['Sredni', 'Wysoki', 'Malina, Logana', '0,3% wagi owocow'],
        ['Sredni', 'Sredni', 'Sliwka, Morela', '0,3% wagi owocow'],
        ['Sredni', 'Niski', 'Borowka', '0,3% wagi owocow'],
        ['Niski', 'Wysoki', 'Wisnia, Winogrona', '0,6% wagi owocow'],
        ['Niski', 'Sredni', 'Brzoskwinia, Mango', '0,6% wagi owocow'],
        ['Niski', 'Niski', 'Truskawka, Gruszka, Figa', '0,6% wagi owocow'],
      ],
    },
    {
      type: 'title',
      text: 'Krytyczna Rola pH w Zelowaniu Dzemy',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'pH mieszanki dzemowej jest prawdopodobnie najbardziej pomijana zmienna w domowym przetworstwie. Przy pH powyzej 3,8 grupy karboksylowe pektyny pozostaja zjonizowane (naladowane ujemnie), tworzac odpychanie elektrostatyczne, ktore zapobiega tworzeniu sie zelu niezaleznie od ilosci dodanego cukru lub pektyny. Gdy pH spada ponizej 3,5 poprzez dodanie kwasu cytrynowego lub soku z cytryny, grupy te ulegaja protonowaniu, umozliwiajac tworzenie wiazan wodorowych miedzy sasiednimi lancuchami pektyny. Optymalna strefa zelowania znajduje sie miedzy pH 2,8 a 3,2. Ponizej pH 2,8 zel staje sie kruchy i moze wykazywac synereze (wyciekanie plynu). Powyzej pH 3,5 rowniez wystepuje synereza, a zel jest zbyt slaby. Dlatego owoce niskokwasowe, takie jak figi i truskawki, prawie zawsze potrzebuja dodatku kwasu cytrynowego - ich naturalne pH jest zbyt wysokie, aby prawidlowo aktywowac pektyne.',
    },
    {
      type: 'title',
      text: 'Koncentracja Cukru i Jej Wplyw na Sile Zelowania',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cukier pelni dwie funkcje w dzemie z pektyna HM. Po pierwsze, jest silnie higroskopijny - zaciekle konkuruje z pektyna o czasteczki wody, odciagajac otoczki hydratacyjne od lancuchow pektyny i zmuszajac je do interakcji ze soba. Po drugie, podnosi temperature wrzenia mieszanki, umozliwiajac dzemowi osiagniecie punktu scinania 104-105°C. Przy 65% stezeniu cukru lancuchy pektyny sa wystarczajaco odwodnione, aby utworzyc mocny zel. Ponizej 60% zel slabnie liniowo. Powyzej 68% dzem moze krystalizowac przy chlodzeniu, gdy cukier przekracza granice rozpuszczalnosci. W przypadku dzemow z pektyna LM cukier pelni jedynie role smakowa, poniewaz zelowanie zalezy od mostkow wapniowych. Zawartosc cukru w przetworach z pektyna LM slodzonych nieodzywczymi substancjami slodzacymi moze byc tak niska jak 5-10%.',
    },
    {
      type: 'title',
      text: 'Kwas Cytrynowy vs. Sok z Cytryny: Przelicznik i Najlepsze Praktyki',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kwas cytrynowy (C₆H₈O₇) jest podstawowym kwasem stosowanym w komercyjnej produkcji dzemu, poniewaz jest standaryzowany, bezsmakowy i precyzyjny. Sok z cytryny zawiera okolo 5% kwasu cytrynowego w stosunku do wagi, a takze kwas jablkowy i askorbinowy (witamina C). <strong>1 gram czystego kwasu cytrynowego odpowiada w przyblizeniu 25 ml swiezego soku z cytryny</strong> pod wzgledem zdolnosci obnizania pH. Jednak sok z cytryny dodaje rowniez objetosc plynu, ktora nalezy uwzglednic w calkowitej zawartosci wody. Dla najbardziej spojnych rezultatow nalezy uzywac kwasu cytrynowego w proszku rozpuszczonego w niewielkiej ilosci wody. Przy stosowaniu soku z cytryny nalezy uwzglednic dodatkowe 20-30 ml plynu, ktory musi zostac odparowany, aby osiagnac punkt scinania.',
    },
    {
      type: 'title',
      text: 'Test Zimnego Talerza: Wizualna Metoda Okreslania Punktu Scinania',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tradycyjny test zimnego talerza (nazywany rowniez testem marszczenia lub testem spodka) pozostaje jedna z najbardziej niezawodnych metod dla domowych tworcow dzemow. Wstaw maly ceramiczny talerz do zamrazarki na 10 minut przed rozpoczeciem gotowania. Gdy uznasz, ze dzem osiagnal punkt scinania, upusc lyzeczke goracego dzemu na schlodzony talerz i pozostaw do ostygniecia na 30 sekund. Przycisnij krawedz kropli opuszkiem palca: jesli powierzchnia wyraznie sie marszczy i kropla zachowuje swoj ksztalt, punkt zelu zostal osiagniety. Jesli kropla swobodnie splywa, kontynuuj gotowanie przez 2-3 minuty i przetestuj ponownie. Ten kalkulator wizualnie symuluje ten test, pokazujac, czy proporcje Twojego przepisu przejda test talerza jeszcze przed rozpoczeciem gotowania.',
    },
    {
      type: 'title',
      text: 'Rozwiazywanie Problemow: Dlaczego Dzemy Sie Nie Udaja i Jak To Naprawic',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Rzadki dzem (nie scial sie po ostygnieciu):</strong> Najczestsza przyczyna jest niedostateczne gotowanie - mieszanka nigdy nie osiagnela 104-105°C. Ponownie zagotuj dzem, dodajac 1-2 g kwasu cytrynowego na kg owocow i testujac metoda zimnego talerza. Alternatywnie rozpusc 5 g pektyny w proszku w zimnej wodzie, wmieszaj do gotujacego sie dzemu i gotuj przez dodatkowe 2 minuty.',
        '<strong>Gumowaty lub zbyt twardy dzem:</strong> Dodano zbyt duzo pektyny wzgledem wagi owocow lub dzem zostal przegotowany powyzej 106°C, degradujac siec pektynowa do ciasnej, kruchej struktury. Aby uratowac, delikatnie podgrzej ze 100-200 ml soku jablkowego lub wody, aby rozcienczyc koncentracje pektyny.',
        '<strong>Synereza (wyciekanie wody z zelu):</strong> Wskazuje to na nadmiar kwasu (pH ponizej 2,8) lub cukru powyzej 68%, ktore powoduja kurczenie sie sieci pektynowej i wyciskanie wody. Dodaj niewielka ilosc sody oczyszczonej (wodoroweglanu sodu), aby stopniowo podniesc pH.',
        '<strong>Krystalizacja (ziarnista konsystencja):</strong> Koncentracja cukru przekroczyla rozpuszczalnosc lub nierozpuszczone krysztaly cukru dzialaly jako zarodki krystalizacji. Mieszaj stale podczas koncowego gotowania i dodaj 1 lyzke syropu kukurydzianego lub glukozy, ktore hamuja krystalizacje.',
        '<strong>Plesn na powierzchni podczas przechowywania:</strong> Dzem byl niedogotowany (nie osiagnal temperatury sterylnej), zawieral za malo cukru (ponizej 60% dla pektyny HM) lub sloiki nie byly odpowiednio wysterylizowane. Zawsze uzywaj wysterylizowanych sloikow i pasteryzuj w laźni wodnej przez 10 minut.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
