import type { ToolLocaleContent } from "../../../types";

const title = "Calculadora de Massa de Pizza Napolitana";
const description = "Calcula as proporções exatas de farinha, água, sal e fermento para preparar a autêntica pizza napolitana em casa.";
const faq = [
  {
    question: "Qual é a hidratação ideal para a pizza napolitana?",
    answer:
      "Segundo o protocolo AVPN, a hidratação padrão é 63-67%. Para principiantes, 60-62% é mais manejável. Para pizzaiolos avançados com farinha forte (W300+), 70-75% produz massas extraordinárias mas requer técnica.",
  },
  {
    question: "Quanto tempo deve fermentar a massa?",
    answer:
      "Mínimo 24 horas no frigorífico (4°C) para ativar as enzimas. O ideal é 48-72 horas. Mais de 72 horas exige farinha muito forte (W300+) ou a massa fica ácida.",
  },
  {
    question: "Pode-se fazer com fermento seco?",
    answer:
      "Sim. O fermento seco equivale a 0.4x o fresco (1g seco = 2.5g fresco). A qualidade é semelhante, mas o fresco confere um sabor mais completo.",
  },
  {
    question: "Posso fazer pizza napolitana num forno doméstico?",
    answer:
      "Sim, mas com adaptações. Pré-aqueça ao máximo (250-280°C) com pedra refratária durante 45-60 minutos. A cozedura levará 5-7 minutos em vez de 60-90 segundos.",
  },
];
const howTo = [
  {
    name: "Calcula as proporções",
    text: "Usa esta calculadora para obteres os gramas exatos de cada ingrediente segundo o número de pizzas e o peso de cada bola.",
  },
  {
    name: "Mistura a massa",
    text: "Combina a farinha com água morna (22-25°C), sal e fermento. Amassa 8-10 minutos com batedeira ou 15-20 minutos à mão.",
  },
  {
    name: "Fermentação em bloco",
    text: "Deixa fermentar a massa inteira 1-2 horas à temperatura ambiente (20-25°C) até dobrar de volume.",
  },
  {
    name: "Divide em bolas",
    text: "Divide a massa em porções do peso indicado. Deixa repousar antes de formar as bolas finais.",
  },
  {
    name: "Fermentação longa",
    text: "Coloca as bolas em recipientes herméticos no frio (4°C) durante 24-72 horas. Este é o passo crítico para o sabor.",
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
  slug: "pizza",
  title,
  description,
  faqTitle: "Perguntas Frequentes",
  bibliographyTitle: "Referências",
  ui: {
    parameters: "Parâmetros",
    quantity: "Quantidade",
    pizzas: "pizzas",
    weight: "Peso por bola",
    small: "Pequena (180g)",
    standard: "Padrão (260g)",
    large: "Grande (350g)",
    hydration: "Hidratação",
    classic: "Clássica (55-60%)",
    modern: "Moderna (65-70%)",
    high: "Alta (75%+)",
    salt: "Sal",
    fermentation_tip_title: "Dica de Fermentação",
    fermentation_tip:
      "Para uma massa mais digestível, deixa fermentar em bloco durante 24h no frigorífico (4°C) usando <strong>0.3g</strong> de fermento fresco por cada 100g de farina.",
    your_recipe: "Tua Receita",
    fresh_yeast: "Fermento Fresco",
    dry_yeast: "Seco",
    flour: "Farinha (W260-300)",
    water: "Água",
    salt_label: "Sal Marinho",
    yeast: "Fermento",
    yeast_note: "Para 8h a 20°C",
    total_weight: "Peso Total Massa",
    approx: "aprox.",
    visual_note:
      "O tamanho visual representa o diâmetro aproximado da pizza estirada segundo o peso da bola.",
  },
  faq,
  howTo,
  bibliography: [
    {
      name: "Associazione Verace Pizza Napoletana",
      url: "https://www.pizzanapoletana.org/",
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Guia Mestre para a Massa de Pizza Napolitana',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A <strong>pizza napolitana</strong> é um legado cultural. O sucesso reside na precisão entre tempo, temperatura e hidratação.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '480°C',
          label: 'Temp. Cozedura',
          icon: 'mdi:fire',
        },
        {
          value: '60-90s',
          label: 'Tempo no Forno',
          icon: 'mdi:clock-fast',
        },
        {
          value: '65%',
          label: 'Hidratação Std.',
          icon: 'mdi:water-percent',
        },
        {
          value: 'W280',
          label: 'Força da Farinha',
          icon: 'mdi:grain',
        },
      ],
    },
    {
      type: 'tip',
      title: 'O Truque do Frigorífico',
      html: 'A fermentação de 24 horas a 4°C cria sabores complexos impossíveis de obter à temperatura ambiente.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
