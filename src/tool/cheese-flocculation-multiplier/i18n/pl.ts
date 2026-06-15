import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Kalkulator Mnoznika Flokulacji Sera';
const description = 'Znajdz dokladny moment ciecia skrzepu w rzemie slniczym serowarstwie. Uzyj metody mnoznika flokulacji, aby obliczyc czas krzepniecia, kontrolowac wilgotnosc i poprawic wydajnosc sera za pomoca naszego bezplatnego kalkulatora.';
const faq = [
  {
    question: 'Czym jest metoda flokulacji w serowarstwie?',
    answer: 'Metoda flokulacji to technika sluzaca do okreslenia precyzyjnego momentu ciecia skrzepu. Mierzy czas od dodania podpuszczki do pierwszego oznaki zelowania (flokulacji) i mnozy ten czas przez okreslony czynnik w zaleznosci od stylu sera.'
  },
  {
    question: 'Jak wykryc punkt flokulacji?',
    answer: 'Najczestsza metoda to metoda miseczki. Umiesc mala, wysterylizowana, lekka plastikowa miseczke na powierzchni mleka po dodaniu podpuszczki. Delikatnie opukuj lub krec nia co minute. Na poczatku obraca sie swobodnie. Moment, w ktorym miseczka przestaje sie obracac lub stawia opor, poniewaz mleko zaczelo zelowac, to punkt flokulacji.'
  },
  {
    question: 'Dlaczego moment ciecia skrzepu jest tak wazny?',
    answer: 'Ciecie skrzepu we wlasciwym momencie kontroluje synereze (utrate wilgoci). Zbyt wczesne ciecie powoduje kruchy skrzep, utrate tluszczu i niska wydajnosc. Zbyt pozne ciecie daje twardy skrzep, ktory zatrzymuje zbyt duzo wilgoci lub nie odsacza sie prawidlowo, prowadzac do kwasnego, przegrzanego sera.'
  },
  {
    question: 'Co to jest mnoznik flokulacji?',
    answer: 'Mnoznik to czynnik liczbowy stosowany do podstawowego czasu flokulacji w celu obliczenia calkowitego czasu krzepniecia przed cieciem. Standardowe mnozniki wahaja sie od 2.0x (sery suche, takie jak Parmesan) do 5.0x lub 6.0x (sery wilgotne, takie jak Camembert).'
  },
  {
    question: 'Jak temperatura i moc podpuszczki wplywaja na flokulacje?',
    answer: 'Wyzsze temperatury i mocniejsza podpuszczka przyspieszaja flokulacje, co oznacza, ze mleko zeluje szybciej. Poniewaz calkowity czas ciecia jest wprost proporcjonalny do czasu flokulacji, metoda mnoznika automatycznie kompensuje te zmiany, zapewniajac stale wlasciwosci skrzepu.'
  }
];

const howTo = [
  {
    name: 'Dodaj podpuszczke i uruchom stoper',
    text: 'Dokladnie wymieszaj podpuszczke, a nastepnie natychmiast uruchom stoper Fazy 1 w kalkulatorze.'
  },
  {
    name: 'Wykonaj test miseczki',
    text: 'Umiesc lekka plastikowa miseczke na powierzchni mleka i regularnie testuj opor.'
  },
  {
    name: 'Zanotuj punkt flokulacji',
    text: 'W momencie, gdy miseczka stawia opor przy kreceniu lub opukiwaniu, kliknij przycisk stop, aby zarejestrowac czas flokulacji.'
  },
  {
    name: 'Wybierz typ sera lub mnoznik',
    text: 'Wybierz styl sera z bazy danych lub wprowadz wlasny mnoznik. Aplikacja oblicza calkowity czas i rozpoczyna odliczanie do ciecia.'
  },
  {
    name: 'Pokroj skrzep po sygnale',
    text: 'Gdy stoper osiagnie zero, skrzep osiagnal optymalne napiecie. Pokroj skrzep w kostke zgodnie z przepisem.'
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
} as const;

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
} as const;

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
} as const;

export const content: ToolLocaleContent = {
  slug: 'kalkulator-mnoznika-flokulacji-sera',
  title,
  description: 'Znajdz dokladny moment ciecia skrzepu w rzemie slniczym serowarstwie. Uzyj metody mnoznika flokulacji, aby obliczyc czas krzepniecia, kontrolowac wilgotnosc i poprawic wydajnosc sera za pomoca naszego bezplatnego kalkulatora.',
  faqTitle: 'Czesto Zadawane Pytania',
  ui: {
    title: 'Mnoznik Flokulacji Sera',
    subtitle: 'Znajdz idealne okno ciecia skrzepu na podstawie rzeczywistego zachowania zelowania',
    flocculationLabel: 'Podstawowy Czas Flokulacji (minuty:sekundy)',
    multiplierLabel: 'Mnoznik Flokulacji',
    cheeseTypeLabel: 'Preset Stylu Sera',
    totalCoagulationLabel: 'Calkowity Czas Krzepniecia',
    timeRemainingLabel: 'Pozostaly Czas do Ciecia',
    flocculationTimeLabel: 'Czas Flokulacji',
    moistureLabel: 'Przewidywana Wilgotnosc Skrzepu',
    customOption: 'Wlasny Mnoznik',
    startTimer: 'Uruchom Stoper Podpuszczki',
    markFlocculation: 'Zanotuj Flokulacje',
    resetTimer: 'Resetuj Stoper',
    warningTitle: 'Ostrzezenie o Jakosci Podpuszczki',
    warningText: 'Zarejestrowany czas flokulacji jest wyjatkowo krotki. Moze to wskazywac na nadmierna dawke podpuszczki lub nieprawidlowe ustawienia temperatury, co moze spowodowac gumowata texture lub gorzki smak.',
    phase1Title: 'Faza 1: Podpuszczanie i Flokulacja',
    phase2Title: 'Faza 2: Odliczanie Krzepniecia',
    phaseComplete: 'Skrzep jest gotowy do ciecia!',
    statusWaiting: 'Mieszanie podpuszczki...',
    statusFlocculated: 'Wykryto flokulacje',
    statusCoagulating: 'Krzepniecie...',
    statusReady: 'Gotowy do Ciecia',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Kiedy Ciac Skrzep: Metoda Mnoznika Flokulacji dla Idealnego Sera Kazda Partia',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Jesli kiedykolwiek zadawales sobie pytanie <strong>"kiedy powinienem ciac skrzep?"</strong> lub <strong>"skad wiem, ze skrzep jest gotowy?"</strong>, odpowiedz lezy w metodzie mnoznika flokulacji. W przeciwienstwie do przemyslowego serowarstwa, ktore opiera sie na stablych czasomierzach, rzemie slniczy serowarze mierza moment, w ktorym mleko zaczyna zelowac (punkt flokulacji) i mnoza ten czas przez czynnik specyficzny dla stylu. To ujmuje wszystkie zmienne - kwasowosc mleka, poziom wapnia, temperature, mocy podpuszczki - w jednym pomiarze. Nasz <strong>kalkulator mnoznika flokulacji sera</strong> wykonuje obliczenia, abys mogl ciac w idealnym momencie, za kazdym razem.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2.0x', label: 'Sery Twarde', icon: 'mdi:cheese' },
        { value: '3.0x', label: 'Sery Poltwarde', icon: 'mdi:cheese' },
        { value: '5.0x', label: 'Sery Miekkie', icon: 'mdi:cheese' },
        { value: '10-15m', label: 'Typowa Flokulacja', icon: 'mdi:timer-outline' }
      ]
    },
    {
      type: 'title',
      text: 'Czeste Problemy w Serowarstwie Rozwiazane przez Metode Flokulacji',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Niejednolita twardosc skrzepu:</strong> Stale czasomierze nie uwzgledniaja roznic w partiach mleka. Metoda flokulacji dostosowuje sie do rzeczywistej chemii twojego mleka.',
        '<strong>Niska wydajnosc sera:</strong> Zbyt wczesne lub zbyt pozne ciecie powoduje utrate tluszczu i bialka. Metoda mnoznika celuje w dokladne okno optymalnej retencji.',
        '<strong>Nieprawidlowa wilgotnosc:</strong> Sery twarde potrzebuja suchego skrzepu; sery miekkie potrzebuja wilgotnego skrzepu. Rozne mnozniki (2.0x do 6.0x) bezposrednio kontroluja synereze.',
        '<strong>Zmienna aktywnosc podpuszczki:</strong> Moc podpuszczki zmienia sie w czasie i pomiedzy markami. Pomiar czasu flokulacji rejestruje rzeczywista aktywnosc w twojej kadzi w tej chwili.'
      ]
    },
    {
      type: 'title',
      text: 'Jak Wykonac Test Miseczki: Krok po Kroku',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Test miseczki to najprostszy sposob wykrycia flokulacji bez specjalnego sprzetu. Po dodaniu podpuszczki i dokladnym wymieszaniu, umiesc mala wysterylizowana plastikowa miseczke lub nakretke na powierzchni mleka. Co 30 do 60 sekund delikatnie opukuj lub krec nia. Gdy mleko jest jeszcze plyne, miseczka porusza sie swobodnie. Moment, w ktorym stawia opor - to twoj <strong>punkt flokulacji</strong>. Zanotuj ten czas i wprowadz go do kalkulatora powyzej.'
    },
    {
      type: 'tip',
      title: 'Uzyj Nakretki dla Wiekszej Czuosci',
      html: 'Lekka plastikowa nakretka jest bardziej czula niz miseczka i daje wyrazniejszy punkt zatrzymania. Wysterylizuj ja we wrzatku przez 2 minuty przed uzyciem i trzymaj ja plywajaca na mleku od momentu dodania podpuszczki.'
    },
    {
      type: 'tip',
      title: 'Utrzymuj Stabilna Temperature',
      html: 'Czas flokulacji jest silnie zalezny od temperatury. Spadek o zaledwie 2C moze podwoic czas flokulacji. Utrzymuj mleko w stablej temperaturze (zazwyczaj 30-35C w zaleznosci od stylu sera) przez cala faze krzepniecia.'
    },
    {
      type: 'tip',
      title: 'Uwazaj na Bardzo Szybka Flokulacje',
      html: 'Jesli flokulacja wystapi w ciagu 8 minut (480 sekund), mogles dodac zbyt duzo podpuszczki lub temperatura mleka jest zbyt wysoka. Moze to spowodowac gumowata texture i gorzki smak. Kalkulator ostrzeze cie, jesli tak sie stanie.'
    },
    {
      type: 'title',
      text: 'Tabela Mnoznikow Flokulacji wedlug Typu Sera',
      level: 2
    },
    {
      type: 'table',
      headers: ['Styl Sera', 'Mnoznik', 'Przewidywana Wilgotnosc', 'Twardosc Ciecia', 'Potencjal Dojrzewania'],
      rows: [
        ['Parmesan, Grana', '2.0x', 'Bardzo Niska', 'Bardzo Twardy', '12+ miesiecy'],
        ['Mozzarella (swieza)', '2.0x', 'Bardzo Wysoka', 'Miekki / Rozciagliwy', 'Tylko swiezy'],
        ['Szwajcarski, Alpejski', '2.5x', 'Niska', 'Twardy', '6-12 miesiecy'],
        ['Cheddar, Gouda', '3.0x', 'Srednio-Niska', 'Twardy / Sprezysty', '3-12 miesiecy'],
        ['Ser Blekitny', '3.5x - 4.0x', 'Srednia', 'Kruchy', '2-6 miesiecy'],
        ['Camembert, Brie', '5.0x', 'Wysoka', 'Bardzo Kruchy', '3-8 tygodni'],
        ['Mleczny / Swiezy Chevre', '5.0x - 6.0x', 'Bardzo Wysoka', 'Delikatny', 'Swiezy - 2 tygodnie']
      ]
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Niski Mnoznik 2.0x to 2.5x',
          icon: 'mdi:cheese',
          description: 'Uzywany do twardych, suchych odmian sera wymagajacych niskiej retencji wilgoci.',
          highlight: false,
          points: ['Mozzarella & Parmesan: 2.0x', 'Style alpejskie: 2.5x', 'Szybki odplyw serwatki', 'Produkuje gesty, nadajacy sie do dojrzewania skrzep']
        },
        {
          title: 'Sredni Mnoznik 3.0x to 4.0x',
          icon: 'mdi:cheese',
          description: 'Standardowy zakres dla serow poltwardych, balansujacych wilgotnosc i kwasowosc.',
          highlight: true,
          points: ['Cheddar & Gouda: 3.0x', 'Sery blekitne: 3.5x do 4.0x', 'Zrownowazone wydalanie serwatki', 'Elastyczny potencjal dojrzewania']
        },
        {
          title: 'Wysoki Mnoznik 5.0x to 6.0x',
          icon: 'mdi:cheese',
          description: 'Uzywany do miekkich, kremowych, wysokowilgotnych serow.',
          highlight: false,
          points: ['Camembert & Brie: 5.0x', 'Mleczne i miekkie pleśniowe', 'Wysoka retencja wilgoci', 'Delikatny, kremowy rozwoj pasty']
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Rozwiazywanie Problemow: 3 Oznaki, ze Twoj Skrzep Nie Ustawia Sie Prawidlowo',
      html: '<strong>Flokulacja w ponizej 6 minut:</strong> Zbyt duzo podpuszczki lub mleko zbyt gorace. Zmniejsz podpuszczke o 25% w nastepnej partii. <strong>Flokulacja trwa ponad 25 minut:</strong> Podpuszczka moze byc przeterminowana, mleko zbyt zimne lub poziom wapnia zbyt niski. Dodaj chlorek wapnia. <strong>Skrzep jest sluzowaty lub kruchy w momencie ciecia:</strong> Mnoznik moze byc zbyt wysoki lub zbyt niski dla twojego stylu sera. Dopasuj w krokach co 0.5x.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Sery Twarde (Parmesan, Alpejskie)',
      html: 'Uzyj <strong>mnoznika 2.0x - 2.5x</strong>. Pokroj skrzep wczesniej dla maksymalnego wydalenia serwatki. Ten skrzep jest ciey, gdy zel jest jeszcze stosunkowo delikatny, co daje gesty, suchy skrzep idealny do dlugiego dojrzewania. Kalkulator pokaze krotszy calkowity czas krzepniecia.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Sery Poltwarde (Cheddar, Gouda)',
      html: 'Uzyj <strong>mnoznika 3.0x</strong>. Standardowy zakres dla wiekszosci rzemie slniczego serowarstwa. Balansuje retencje wilgoci z odplywem serwatki. Skrzep jest sprezysty i czysto sie pęka. Wiekszosc przepisow na ser nalezy do tej kategorii.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Sery Miekkie (Camembert, Brie)',
      html: 'Uzyj <strong>mnoznika 5.0x - 6.0x</strong>. Pozwol zelowi znacznie sie wzmocnic przed cieciem. To zatrzymuje wilgoc wewnatrz skrzepu, tworzac kremowa, smarowna texture charakterystyczna dla serow z biala pleśnia. Obchodz sie delikatnie ze skrzepem, aby uniknac utraty zatrzymanej serwatki.'
    },
    {
      type: 'title',
      text: 'Slownik Pojec dla Rzemie slniczego Serowarstwa',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Punkt Flokulacji', definition: 'Moment w procesie serowarstwa, w ktorym bialka mleka zaczynaja sie zbierac i tworzyc miekki zel.' },
        { term: 'Podpuszczka', definition: 'Kompleks enzymow (glownie chymozyna) uzywany do krzepniecia mleka, oddzielajac je na czesci stale (skrzep) i plyne (serwatke).' },
        { term: 'Synereza', definition: 'Ekstrakcja lub wydalanie cieczy z zelu, na przyklad serwatki odsaczonej ze skrzepu sera.' },
        { term: 'Czas Krzepniecia', definition: 'Calkowity czas od dodania podpuszczki do momentu, gdy skrzep jest gotowy do ciecia.' }
      ]
    },
    {
      type: 'summary',
      title: 'Kluczowe Wnioski dla Idealnego Ciecia Skrzepu',
      items: [
        'Dokladnie zmierz czas flokulacji za pomoca testu miseczki. Wprowadz go do kalkulatora powyzej.',
        'Wybierz mnoznik odpowiadajacy twojemu stylowi sera: 2.0x dla twardych, 3.0x dla poltwardych, 5.0x dla miekkich serow.',
        'Utrzymuj stable temperature mleka podczas krzepniecia. Nawet zmiana o 2C znaczaco zmienia czas flokulacji.',
        'Jesli flokulacja nastapi w ciagu 8 minut, zmniejsz ilosc podpuszczki nastepnym razem. Jesli ponad 25 minut, sprawdz swiezosc podpuszczki.',
        'Kalkulator wykonuje obliczenia, abys mogl skupic sie na technice i consistentnosci.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
