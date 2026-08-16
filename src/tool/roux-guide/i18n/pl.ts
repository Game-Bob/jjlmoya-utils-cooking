import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Mistrzowski przewodnik po zasmażce Roux i sosach bazowych";
const description = "Interaktywny kalkulator zasmażki Roux. Naucz się przygotowywać sos Béchamel, Velouté i Espagnole z dokładnymi proporcjami. Podstawa kuchni francuskiej.";
const faq = [
    {
      question: 'Co to jest Roux (zasmażka) i do czego służy?',
      answer: 'To mieszanka tłuszczu (zwykle masła) i mąki gotowana na małym ogniu. Służy jako baza zagęszczająca do francuskich sosów matczynych, takich jak beszamel czy velouté.',
    },
    {
      question: 'Jaka jest idealna proporcja dla zasmażki Roux?',
      answer: 'Standardowa proporcja to 1:1 wagowo. Na przykład 50g masła i 50g mąki. Taka mieszanka może zagęścić około 1 litr płynu, zależnie od pożądanej gęstości.',
    },
    {
      question: 'Jaka jest różnica między rodzajami zasmażki Roux?',
      answer: 'Roux białe gotuje się 2-3 min (Beszamel). Złote 5-8 min (Velouté). Ciemne do 15-20 min (Sos Hiszpański). Im ciemniejszy kolor, tym bardziej orzechowy smak, ale mniejsza siła zagęszczania.',
    },
    {
      question: 'Jak unikać grudek?',
      answer: 'Złota zasada to przeciwstawne temperatury: zimny płyn do gorącej zasmażki lub gorący płyn do zimnej zasmażki. Płyn dodawaj powoli i stale mieszaj rózgą.',
    },
  ];
const howTo = [
  {
    name: 'Wybierz rodzaj płynu',
    text: 'Wybierz mleko (Beszamel), jasny bulion (Velouté), ciemny bulion (Espagnole) lub pomidory.',
  },
  {
    name: 'Określ pożądaną gęstość',
    text: 'Od zupy/kremu po ciasto na krokiety. Kalkulator automatycznie dostosuje potrzebną ilość zasmażki.',
  },
  {
    name: 'Wprowadź objętość płynu',
    text: 'Określ, ile ml płynu chcesz zagęścić. Kalkulator poda dokładną ilość masła i mąki.',
  },
  {
    name: 'Zastosuj odpowiedni czas gotowania',
    text: 'Gotuj mieszankę masła i mąki do określonego stopnia (Biała, Złota lub Ciemna).',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
};

export const content: ToolLocaleContent = {
  slug: 'przewodnik-roux',
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq,  howTo,
  seo: [
    {
      type: 'title',
      text: 'Mistrzowski przewodnik po obliczaniu zasmażki Roux i sosów bazowych',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Zasmażka Roux</strong> to strukturalna podstawa klasycznej kuchni francuskiej. Zrozumienie relacji między mąką, masłem i płynem to różnica między aksamitnym sosem a płynem z grudkami.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1:1',
          label: 'Proporcja Mąka:Tłuszcz',
          icon: 'mdi:scale-balance',
        },
        {
          value: '3 min',
          label: 'Czas białej Roux',
          icon: 'mdi:timer-sand',
        },
        {
          value: '100g/L',
          label: 'Ratio gęstych sosów',
          icon: 'mdi:waves',
        },
        {
          value: '15 min',
          label: 'Czas ciemnej Roux',
          icon: 'mdi:fire',
        },
      ],
    },
    {
      type: 'title',
      text: 'Stopnie wysmażenia i siła zagęszczania',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Biała Zasmażka',
          icon: 'mdi:flask-round-bottom-outline',
          description: 'Gotowana 2-3 minuty. Najsilniejszy zagęszczacz.',
          points: [
            'Baza do Beszamelu',
            'Maksymalna siła zagęszczania',
            'Neutralny mleczny smak',
            'Brak zmiany koloru',
          ],
        },
        {
          title: 'Złota Zasmażka',
          icon: 'mdi:gold',
          description: 'Gotowana 5-8 minut do jasnozłoceistego koloru.',
          highlight: true,
          points: [
            'Baza do Velouté',
            'Średnia siła zagęszczania',
            'Lekki orzechowy aromat',
            'Idealna do jasnych bulionów',
          ],
        },
        {
          title: 'Ciemna Zasmażka',
          icon: 'mdi:coffee',
          description: 'Gotowana 15-20 minut. Głęboki prażony smak.',
          points: [
            'Baza do sosu Espagnole',
            'Mniejsza siła zagęszczania (-30%)',
            'Złożony prażony smak',
            'Bardziej płynna konsystencja',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Waga Roux na litr według pożądanej gęstości',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Pożądana gęstość', 'Masło (g)', 'Mąka (g)', 'Płyn (L)'],
      rows: [
        ['Lekka Zupa / Krem', '25g', '25g', '1 Litr'],
        ['Standardowy Sos', '50g', '50g', '1 Litr'],
        ['Sos do Zapiekanek', '70g', '70g', '1 Litr'],
        ['Ciasto na Krokiety', '125g', '125g', '1 Litr'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Sos z grudkami lub smakiem mąki?',
      html: 'Jeśli sos ma grudki, dodano gorący płyn do gorącego roux. Zawsze stosuj szok termiczny (zimny płyn na gorące roux). Jeśli czuć mąkę, wydłuż czas gotowania.',
    },
    {
      type: 'title',
      text: 'Słowniczek technologii sosów',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Dekstrynizacja',
          definition:
            'Termiczny rozpad skrobi na krótkie łańcuchy. Zwiększa smak, ale osłabia zagęszczanie.',
        },
        {
          term: 'Kleikowanie',
          definition:
            'Proces, w którym ziarna skrobi wchłaniają płyn i pęcznieją.',
        },
        {
          term: 'Beurre Manié',
          definition:
            'Zimna mieszanka mąki i masła do szybkiej korekty na końcu.',
        },
        {
          term: 'Sosy Matki',
          definition:
            '5 podstawowych sosów Escoffiera (Beszamel, Velouté, Espagnole, Holenderski i Pomidorowy).',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Sposób na zimne masło (Monter au Beurre)',
      html: 'Na samym końcu wmieszaj kawałek zimnego masła dla gładkości i połysku.',
    },
    {
      type: 'paragraph',
      html: 'Nasz kalkulator zasmażki gwarantuje idealną konsystencję sosu.',
    },
  ],
  ui: {
    baseLiquid: 'Płyn bazowy',
    volume: 'Objętość',
    ml: 'ml',
    liquidType: 'Rodzaj płynu',
    milk: 'Mleko',
    lightStock: 'Jasny bulion',
    darkStock: 'Ciemny bulion',
    tomato: 'Pomidory',
    sauceTexture: 'Gęstość sosu',
    soup: 'Zupa / Krem',
    normalSauce: 'Normalny sos',
    thick: 'Gęsty / Nadzienie',
    croquette: 'Krokiety / Ciasto',
    rouxMix: 'Mieszanka Roux',
    butter: 'Masło',
    flour: 'Mąka',
    instructions: 'Instrukcje',
    sauceName: 'Rodzaj sosu',
    ratio: 'Proporcja',
    chefTip: 'Porada szefa',
    white: 'Biała',
    blond: 'Złota',
    brown: 'Ciemna',
    beurreManied: 'Beurre Manié (Do korekty na końcu)',
    recipeBechamel: "Beszamel",
    recipeVeloute: "Velouté",
    recipeEspagnole: "Espagnole",
    recipeTomato: "Sos pomidorowy",
    tipBechamel: "Używaj zimnego mleka. Dodawaj stopniowo lub naraz, jeśli mocno mieszasz.",
    tipVeloute: "Używaj bulionu drobiowego lub rybnego. Zasmażka powinna pachnieć herbatnikami.",
    tipEspagnole: "Zasmażka powinna mieć kolor czekolady, ale nie może się przypalić.",
    tipTomato: "Zasmażka pomoże nadać pomidorom odpowiednią strukturę i gładkość.",
    rouxWhiteLabel: "Zasmażka biała",
    rouxBlondLabel: "Zasmażka złota",
    rouxBrownLabel: "Zasmażka ciemna",
    descWhite: "Gotuj tylko do utraty zapachu surowej mąki. Nie zmieniaj koloru.",
    descBlond: "Dąż do złotego koloru i orzechowego aromatu.",
    descBrown: "Bardzo mały ogień. Kolor czekolady. Wymaga 10% większej wagi.",
    timeWhite: "2-3 min",
    timeBlond: "5-8 min",
    timeBrown: "15-20 min",
  },
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
