import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Escalador de Ingredientes Ajuste de Receitas';
const description = 'Escala receitas automaticamente segundo o número de doses. Calcula as quantidades exatas de ingredientes multiplicando ou reduzindo a tua receita sem complicações.';

const faq = [
  {
    question: 'Por que o meu fator de conversão inclui decimais?',
    answer: 'Porque as proporções culinárias nem sempre são redondas. Se escalas uma receita para 4 pessoas para 7, o fator é exatamente 1.75. Os ingredientes são multiplicados por esse número, mesmo que encontres frações. É mais exato do que arredondar arbitrariamente.',
  },
  {
    question: 'O que acontece se eu inserir "1/2 colher de chá de sal"?',
    answer: 'O parser procura o número primeiro. Reconhecerá "1" como quantidade, depois "/2" como parte da unidade. O resultado será "0.5", e ao escalar será multiplicado corretamente. Para frações como "1/2", insere "0.5" diretamente (é mais claro) ou a ferramenta interpreta como divisão.',
  },
  {
    question: 'Devo arredondar os resultados finais?',
    answer: 'Depende do ingrediente. Para farinhas, sim. Para fermentos ou especiarias, a precisão importa menos (escala a 75% do indicado). Para ovos: se obtiveres 2.3, usa 2 inteiros + parte de um terceiro (pesado), ou arredonda para 2 se o prato o permitir.',
  },
  {
    question: 'Por que o resultado não muda quando altero as doses?',
    answer: 'Certifica-te de que o campo de ingredientes tem conteúdo. Se estiver vazio, não há nada para escalar. Verifica também se os números nos teus ingredientes são reconhecíveis (ex: "500g", "1/2 colher de chá").',
  },
  {
    question: 'Funciona com medidas imperiais (onzas, chávenas)?',
    answer: 'Tecnicamente sim, a ferramenta lê números e escala. Mas a precisão é limitada com chávenas (volume inconsistente). Recomenda-se converter para gramas antes de escalar.',
  },
];

const howTo = [
  {
    name: 'Insere as tuas doses',
    text: 'No campo "Original", coloca o número de pessoas para o qual a receita foi desenhada. Em "Desejado", coloca o número de pessoas para quem vais cozinhar.',
  },
  {
    name: 'Cola a tua lista de ingredientes',
    text: 'Copia e cola a tua lista tal como está. Cada ingrediente numa linha. A ferramenta reconhece números no início (500g, 1/2, 2.5) e escala automaticamente.',
  },
  {
    name: 'Ajusta segundo o contexto',
    text: 'Os resultados são matematicamente exatos, mas a cozinha é arte. Especiarias: escala a 75%. Fermentos: menos do que o teórico em grandes quantidades. Tempos: nunca se escalam.',
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
  operatingSystem: 'All',
};

export const content: ToolLocaleContent = {
  slug: 'escalador-ingredientes-receitas',
  title,
  description,
  ui: {
    servings: 'Doses',
    original: 'Original',
    desired: 'Desejado',
    multiplyingFactor: 'Fator Multiplicador',
    ingredientsList: 'Lista de Ingredientes',
    pasteHere: 'Cola aqui a tua lista.',
    exampleLine1: 'Ex:',
    exampleLine2: '500g Farinha',
    exampleLine3: '300ml Água',
    exampleLine4: '10g Sal',
    result: 'Resultado',
    copy: 'Copiar',
    copied: 'Copiado!',
    emptyState: 'Os teus ingredientes ajustados aparecerão aqui...',
    defaultIngredient1: '200g Farinha',
    defaultIngredient2: '100ml Leite',
    defaultIngredient3: '2 Ovos',
  },
  faqTitle: 'Perguntas Frequentes',
  faq,  howTo,
  seo: [
    {
      type: 'title',
      text: 'Guia Mestre para o Escalamento e Conversão de Receitas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O <strong>escalamento de ingredientes</strong> é uma das tarefas mais críticas e propensas a erros na cozinha profissional. Não se trata simplesmente de multiplicar números, mas de entender como a química e a física dos alimentos reagem a mudanças de volume e superfície.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: 'x1.75',
          label: 'Fator de 4 para 7 per.',
          icon: 'mdi:calculator',
        },
        {
          value: '75%',
          label: 'Ajuste de Especiarias',
          icon: 'mdi:shaker-outline',
        },
        {
          value: '0%',
          label: 'Escalamento de Tempo',
          icon: 'mdi:timer-off',
        },
        {
          value: '100g',
          label: 'Base de Referência',
          icon: 'mdi:weight-gram',
        },
      ],
    },
    {
      type: 'title',
      text: 'Diferenças entre Escalamento Linear e Contextual',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Escalamento Linear Matemático',
          icon: 'mdi:math-log',
          description: 'Multiplicação direta de todos os valores pelo fator de conversão obtido.',
          points: [
            'Perfeito para farinhas e líquidos base',
            'Ideal para pastelaria de precisão',
            'Funciona bem em mudanças pequenas (x2, x0.5)',
            'Fácil de calcular automaticamente',
          ],
        },
        {
          title: 'Escalamento Contextual de Cozinha',
          icon: 'mdi:chef-hat',
          description: 'Ajuste de proporções baseado na saturação de sabor e evaporação.',
          highlight: true,
          points: [
            'Evita o excesso de sal e especiarias',
            'Considera a superfície de evaporação',
            'Ajusta fermentos segundo a massa',
            'Exige experiência e critério do chef',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Fatores de Conversão por Número de Comensais',
      level: 3,
    },
    {
      type: 'table',
      headers: ['De Doses', 'Para Doses', 'Fator (FC)', 'Dificuldade'],
      rows: [
        ['2 pessoas', '4 pessoas', 'x 2.0', 'Baixa (Linear)'],
        ['4 pessoas', '6 pessoas', 'x 1.5', 'Baixa (Linear)'],
        ['4 pessoas', '10 pessoas', 'x 2.5', 'Média (Atenção às especiarias)'],
        ['4 pessoas', '25 pessoas', 'x 6.25', 'Alta (Contextual)'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Problemas Comuns ao Dobrar uma Receita',
      html: 'Se notares que o sabor é demasiado intenso após escalar (especialmente com picantes ou sal), reduz o escalamento destes ingredientes específicos a 75%. Nunca dupliques o tempo de cozedura; a temperatura interna é atingida segundo a espessura da peça.',
    },
    {
      type: 'title',
      text: 'Glossário de Terminologia de Estandardização',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Fator de Conversão',
          definition: 'Número pelo qual se multiplicam todos os ingredientes: Quantidade Desejada / Quantidade Original.',
        },
        {
          term: 'Perda de Cozedura',
          definition: 'Perda de peso de um ingrediente por evaporação ou perda de gordura.',
        },
        {
          term: 'Peso Bruto vs Líquido',
          definition: 'O peso antes e depois de limpar o ingrediente.',
        },
        {
          term: 'Rendimento',
          definition: 'Quantidade total de produto terminado após o escalamento e a cozedura.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'O truque do Ovo Batido',
      html: 'Se a calculadora indicar 2.3 ovos, bate um ovo inteiro, pesa-o e utiliza apenas 30% do peso. É a única forma de manter a precisão em pastelaria fina.',
    },
    {
      type: 'paragraph',
      html: 'A nossa ferramenta simplifica a matemática para que possas dedicar a tua energia ao que realmente importa: criatividade e sabor.',
    },
  ],
  bibliography,
  schemas: [appSchema, faqSchema, howToSchema],
};
