import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

const title = "Calculadora de Salmoura por Equilíbrio";
const description = "A ciência do equilíbrio para carnes suculentas e fermentados perfeitos. Calcule a salinidade exata baseada no peso total do ingrediente e da água.";
const faq = [
  {
    question: "O que é o método de salmoura por equilíbrio?",
    answer: "O método de equilíbrio calcula o sal com base no peso total (água + ingrediente), não apenas na água. Isso garante uma concentração de sal consistente independentemente da quantidade de ingrediente utilizada.",
  },
  {
    question: "De quanto sal preciso para fazer conservas?",
    answer: "Para vegetais fermentados (pepinos, chucrute, kimchi) recomenda-se entre 2% e 3% de sal. Para carnes, entre 1,5% e 2%. A calculadora fornece a quantidade exata de acordo com o peso dos seus ingredientes.",
  },
  {
    question: "Posso congelar a carne após a salmoura?",
    answer: "Sim, é o ideal. A salmoura protege contra queimaduras de gelo e a carne estará pronta para cozinhar ao descongelar. No entanto, evite congelar vegetais fermentados, pois ficarão moles.",
  },
  {
    question: "Por que adicionar açúcar à salmoura?",
    answer: "O açúcar tem duas funções: facilita a reação de Maillard (dourado) nas carnes e equilibra o sabor salino sem tornar o produto doce. Não transforma a sua salmoura numa sobremesa.",
  },
];
const howTo = [
  {
    name: "Determine o seu objetivo",
    text: "Decida se fará carnes em salmoura (1,5-2%), fermentados (2-3%), molhos (3,5%) ou conservas de longa duração (5%+). Cada uma tem um tempo e propósito diferente.",
  },
  {
    name: "Pese o ingrediente e a água",
    text: "Pese o produto (carne, vegetais) e a água exatamente. A precisão é fundamental: mesmo 5g de diferença altera o resultado. Utilize uma balança de precisão.",
  },
  {
    name: "Calcule com a ferramenta",
    text: "Introduza os pesos na calculadora e ajuste a salinidade de acordo com o tipo de produto. A ferramenta dir-lhe-á exatamente quanto sal e açúcar necessita.",
  },
  {
    name: "Dissolva e misture",
    text: "Dissolva completamente o sal em água fria antes de adicionar o produto. Para carnes, certifique-se de que a salmoura cobre tudo. Para fermentados, o produto deve estar submerso.",
  },
  {
    name: "Fermetue ou cure",
    text: "Refrigere de acordo com o tipo: 4-48 horas para carnes, 1-3 semanas para fermentados. O tempo exato depende da temperatura e do seu gosto pessoal.",
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
  slug: "salmoura",
  title: "Calculadora de Salmoura por Equilíbrio",
  description: "A ciência do equilíbrio para carnes suculentas e fermentados perfeitos. Calcule a salinidade exata baseada no peso total do ingrediente e da água.",
  ui: {
    calculator: "Calculadora",
    subtitle: "Introduza os pesos para calcular o equilíbrio perfeito.",
    productWeight: "Peso do Produto (g)",
    waterWeight: "Peso da Água (g)",
    desiredSalinity: "Salinidade Desejada",
    meat: "Carnes (1,5%)",
    fermented: "Fermentados (2,0%)",
    sauces: "Molhos (3,5%)",
    preserves: "Conservas (5,0%)",
    addSugar: "Adicionar Açúcar",
    sugarHint: "Equilibra o sabor e ajuda a dourar (50% do sal)",
    saltNeeded: "Sal Necessário",
    sugarOptional: "Açúcar (Opcional)",
    estimatedTime: "Tempo Estimado",
    product: "Produto",
    total: "Total",
    unitGrams: "gramas",
    timeMeatsLabel: "Tempo (Carnes)",
    timeMeatsDuration: "4 - 48 Horas",
    timeVegetablesLabel: "Tempo (Vegetais)",
    timeVegetablesDuration: "1 - 3 Semanas",
    timePreservesLabel: "Tempo (Conservas)",
    timePreservesDuration: "1+ Meses",
  },
  faqTitle: "Perguntas Frequentes",  faq,
  howTo,  seo: [
    {
      type: 'title',
      text: 'Guia Mestre de Salmoura por Equilíbrio e Fermentação',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A <strong>salmoura por equilíbrio</strong> é a técnica definitiva para garantir resultados suculentos e seguros. Ao contrário dos métodos tradicionais, este calcula o sal com base no <strong>peso total</strong> da água e do produto, assegurando uma salinidade constante independentemente do volume do recipiente.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1,5 - 2%',
          label: 'Rácio Ideal Carnes',
          icon: 'mdi:food-steak',
        },
        {
          value: '2,5 - 3%',
          label: 'Rácio Fermentados',
          icon: 'mdi:flask-outline',
        },
        {
          value: '18-22°C',
          label: 'Temp. Fermentação',
          icon: 'mdi:thermometer',
        },
        {
          value: '0,5%',
          label: 'Açúcar de Equilíbrio',
          icon: 'mdi:shaker-outline',
        },
      ],
    },
    {
      type: 'title',
      text: 'Diferenças entre Salmoura Seca e Húmida',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Salmoura Seca (Dry Brining)',
          icon: 'mdi:shaker-outline',
          description: 'Aplica-se o sal diretamente sobre a superfície do produto sem usar água adicional.',
          points: [
            'Pele muito mais crocante em aves',
            'Sabor mais concentrado do ingrediente',
            'Ocupa menos espaço no frigorífico',
            'Ideal para bifes e frangos inteiros',
          ],
        },
        {
          title: 'Salmoura Húmida (Wet Brining)',
          icon: 'mdi:water',
          description: 'O produto é mergulhado numa solução de água e sal calculada por equilíbrio.',
          highlight: true,
          points: [
            'Transferência de humidade superior',
            'Permite introduzir aromas (especiarias)',
            'Cura mais uniforme em peças grandes',
            'Ideal para peru, lombo de porco e peixes',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Tempos e Salinidades segundo a Aplicação',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Categoria', 'Salinidade (%)', 'Tempo Mínimo', 'Objetivo Principal'],
      rows: [
        ['Aves e Porco', '1,5% - 2,0%', '12 - 24 horas', 'Suculência e ternura'],
        ['Peixes Brancos', '1,0% - 1,5%', '20 - 45 minutos', 'Firmeza da carne'],
        ['Lacto-fermentados', '2,5% - 3,0%', '7 - 21 dias', 'Segurança microbiológica'],
        ['Molhos e Conservas', '3,5% - 5,0%', '1+ mês', 'Preservação a longo prazo'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Identificação de Problemas na Salmoura',
      html: 'Se a salmoura apresentar um odor fétido (não ácido), bolor colorido (preto, rosa) o producto se torne extremamente mole, descarte-o. O bolor branco superficial (levedura de Kahm) é normal em fermentados e pode ser removido.',
    },
    {
      type: 'title',
      text: 'Glossário do Especialista em Curados',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Osmose',
          definition: 'Processo físico pelo qual o sal penetra nas células do alimento para equilibrar as concentrações.',
        },
        {
          term: 'Desnaturação',
          definition: 'Efeito do sal sobre as proteínas que permite que estas retenham mais água durante a cozedura.',
        },
        {
          term: 'Levedura de Kahm',
          definition: 'Camada branca e fina que aparece por vezes na superfície dos fermentados; é inofensiva, mas indica falta de acidez.',
        },
        {
          term: 'Lacto-fermentação',
          definition: 'Fermentação anaeróbica onde as bactérias convertem açúcares em ácido láctico, preservando o alimento.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Qualidade da Água',
      html: 'Evite sempre a água da torneira com muito cloro, pois pode inibir o crescimento das bactérias boas nas suas fermentações. Use água filtrada ou deixe repousar a água 24h.',
    },
    {
      type: 'paragraph',
      html: 'A nossa calculadora de equilíbrio elimina as suposições das suas receitas, permitindo-lhe cozinhar com a confiança de um profissional do setor.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
