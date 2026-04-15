import type { ToolLocaleContent } from '../../../types';

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
  faq,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    {
      name: 'Larousse Gastronomique',
      url: 'https://www.laroussecocina.com/',
    },
  ],
  howTo,
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
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
