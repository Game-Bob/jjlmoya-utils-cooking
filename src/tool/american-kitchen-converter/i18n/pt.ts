import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Conversor de Cozinha Americana: Cups para Gramas e Temperaturas";
const description = "Converta cups, colheres e Fahrenheit para o sistema métrico. A bússola para decifrar receitas americanas com precisão profissional.";
const faq = [
  {
    question: 'Qual é a diferença entre 1 cup e 250ml?',
    answer: '1 cup americano = 236,588ml, não 250ml. Para fins práticos, usamos 240ml. Embora pareça pequena, esta diferença de 4% pode afetar receitas sensíveis como macarons ou mousses.',
  },
  {
    question: 'Por que a farinha nem sempre pesa o mesmo?',
    answer: 'Porque a farinha se compacta com o tempo e o transporte. Uma farinha recém-peneirada pesa menos que uma que esteve na despensa. Por isso, os padeiros profissionais sempre pesam, nunca medem por volume.',
  },
  {
    question: 'Qual é a diferença entre Tbsp e tsp?',
    answer: '1 Tablespoon (Tbsp/colher de sopa) = 15ml. 1 Teaspoon (tsp/colher de chá) = 5ml. Uma colher de sopa equivale a 3 colheres de chá. Em receitas de confeitaria, erros com especiarias (medidas em tsp) são comuns.',
  },
  {
    question: 'Uma cup US é o mesmo que uma cup imperial?',
    answer: 'Não. 1 US cup = 236ml. 1 Imperial cup (UK) = 284ml. Uma diferença de 20%. A maioria dos blogs americanos usa US cups. Se a receita não especificar, assuma US.',
  },
  {
    question: 'A que temperatura corresponde o "gas 4" do forno?',
    answer: 'Gas 4 = 180°C = 350°F. É a escala britânica. Na cozinha, buscamos o número equivalente no seu forno: alguns usam gás, outros graus eletrônicos.',
  },
];
const howTo = [
  {
    name: 'Selecione o tipo de conversão',
    text: 'Escolha entre Cups para Gramas, Colheres para Gramas, ou Fahrenheit para Celsius.',
  },
  {
    name: 'Escolha o ingrediente',
    text: 'Cada alimento tem uma densidade diferente. Farinha, açúcar, manteiga: todos pesam de forma distinta.',
  },
  {
    name: 'Insira a quantidade',
    text: 'Escreva o número de cups, colheres ou graus. O conversor calcula o equivalente instantaneamente.',
  },
  {
    name: 'Ajuste sua receita',
    text: 'Com a conversão exata, agora você pode seguir a receita americana com precisão profissional.',
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
  slug: 'conversor-unidades-cozinha-americana',
  title: 'Conversor de Cozinha Americana: Cups para Gramas e Temperaturas',
  description: 'Converta cups, colheres e Fahrenheit para o sistema métrico. A bússola para decifrar receitas americanas com precisão profissional.',
  faqTitle: 'Perguntas Frequentes',
  ui: {
    copied: 'Copiado',
    noHistory: 'Sem histórico',
    load: 'Carregar',
    delete: 'Eliminar',
    tabCups: 'Cups para Gramas',
    tabSpoons: 'Colheres para Gramas',
    tabTemperatures: 'Temperaturas',
    tabCupsAriaLabel: 'Cups para Gramas',
    tabSpoonsAriaLabel: 'Colheres para Gramas',
    tabTempsAriaLabel: 'Temperaturas do Forno',
    stepSelectIngredient: 'Selecione o Ingrediente',
    stepHowManyCups: 'Quantas Cups?',
    stepSelectMeasure: 'Selecione a Medida',
    stepQuantity: 'Quantidade',
    stepOvenConversion: 'Conversão de Forno',
    stepFrequentTemps: 'Temperaturas Mais Comuns',
    cupFlour: 'Farinha',
    cupFlourSub: '120g / cup',
    cupWhiteSugar: 'Açúcar Branco',
    cupWhiteSugarSub: '200g / cup',
    cupBrownSugar: 'Açúcar Mascavo',
    cupBrownSugarSub: '220g / cup',
    cupPowderSugar: 'Açúcar de Confeiteiro',
    cupPowderSugarSub: '115g / cup',
    cupButter: 'Manteiga',
    cupButterSub: '227g / cup',
    cupCocoa: 'Cacau em Pó',
    cupCocoaSub: '85g / cup',
    cupLiquids: 'Líquidos',
    cupLiquidsSub: '240g / cup',
    cupOats: 'Aveia',
    cupOatsSub: '90g / cup',
    cupFlourAriaLabel: 'Farinha',
    cupWhiteSugarAriaLabel: 'Açúcar Branco',
    cupBrownSugarAriaLabel: 'Açúcar Mascavo',
    cupPowderSugarAriaLabel: 'Açúcar de Confeiteiro',
    cupButterAriaLabel: 'Manteiga',
    cupCocoaAriaLabel: 'Cacau',
    cupLiquidsAriaLabel: 'Líquido',
    cupOatsAriaLabel: 'Aveia',
    stepperMinus: 'Subtrair',
    stepperPlus: 'Somar',
    cupsAmountLabel: 'Quantidade de Cups',
    spoonQuantityLabel: 'Quantidade',
    cupQuick1_4: '1/4 Cup',
    cupQuick1_3: '1/3 Cup',
    cupQuick1_2: '1/2 Cup',
    cupQuick1: '1 Cup',
    unitGrams: 'Gramas',
    unitGramsML: 'Gramas / Mililitros',
    spoonMeasureLabel: 'Selecione a Medida',
    spoonTablespoon: 'Colher de Sopa (Tbsp)',
    spoonTeaspoon: 'Colher de Chá (tsp)',
    spoonTablespoonAriaLabel: 'Colher de sopa',
    spoonTeaspoonAriaLabel: 'Colher de chá',
    spoonSelectIngredient: 'Selecione o Ingrediente',
    spoonLeavening: 'Fermento',
    spoonLeaveningSub: 'Fermento em Pó',
    spoonSalt: 'Sal Fino',
    spoonSaltSub: 'Mineral',
    spoonSugar: 'Açúcar Branco',
    spoonSugarSub: 'Granulado',
    spoonLiquids: 'Líquidos',
    spoonLiquidsSub: 'Água, Óleo',
    spoonLeavingAriaLabel: 'Fermento Químico',
    spoonSaltAriaLabel: 'Sal',
    spoonSugarAriaLabel: 'Açúcar Branco',
    spoonLiquidsAriaLabel: 'Líquido',
    spoonQuick1_4: '1/4',
    spoonQuick1_2: '1/2',
    spoonQuick1: '1',
    spoonQuick2: '2',
    tempFahrenheit: 'Fahrenheit (°F)',
    tempCelsius: 'Celsius (°C)',
    tempFahrenheitAriaLabel: 'Fahrenheit',
    tempCelsiusAriaLabel: 'Celsius',
    tempPreset275: '275°F',
    tempPreset275Desc: '135°C - Secagem',
    tempPreset275AriaLabel: 'Definir 275 Fahrenheit',
    tempPreset325: '325°F',
    tempPreset325Desc: '165°C - Bolos densos',
    tempPreset325AriaLabel: 'Definir 325 Fahrenheit',
    tempPreset350: '350°F',
    tempPreset350Desc: '175°C - Padrão bolos',
    tempPreset350AriaLabel: 'Definir 350 Fahrenheit',
    tempPreset400: '400°F',
    tempPreset400Desc: '200°C - Pães / Tortas',
    tempPreset400AriaLabel: 'Definir 400 Fahrenheit',
    tempPreset425: '425°F',
    tempPreset425Desc: '220°C - Pizzas / Folhados',
    tempPreset425AriaLabel: 'Definir 425 Fahrenheit',
  },
  seo: [
    {
      type: 'title',
      text: 'Guia Maestro para o Conversor de Medidas de Cozinha Americana',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Converter <strong>cups em gramas</strong> ou <strong>Fahrenheit em Celsius</strong> é o primeiro passo para dominar as receitas internacionais. A cozinha americana baseia-se no volume, o que introduz uma variabilidade de até 25% em ingredientes secos como a farinha.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '120g',
          label: '1 Cup de Farinha',
          icon: 'mdi:grain',
        },
        {
          value: '227g',
          label: 'Stick de Manteiga',
          icon: 'mdi:cube-outline',
        },
        {
          value: '175°C',
          label: 'Equivalente 350°F',
          icon: 'mdi:thermometer',
        },
        {
          value: '240ml',
          label: 'Volume 1 Cup',
          icon: 'mdi:water-percent',
        },
      ],
    },
    {
      type: 'title',
      text: 'Diferenças Críticas entre Volume e Peso',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Medição por Volume (Cups)',
          icon: 'mdi:cup-water',
          description: 'Utilizado em receitas domésticas dos EUA. Mede o espaço que o ingrediente ocupa.',
          points: [
            'Muito dependente da compactação',
            'Erro comum de 20-30% em farinhas',
            'Inconsistente entre diferentes marcas de cups',
            'Requer peneirar antes para maior precisão',
          ],
        },
        {
          title: 'Medição por Peso (Gramas)',
          icon: 'mdi:scale-balance',
          description: 'O padrão da confeitaria profissional e europeia. Precisão absoluta.',
          highlight: true,
          points: [
            'Precisão de +/- 1g sempre',
            'Resultados consistentes e repetíveis',
            'Menos louça para lavar (apenas uma tigela)',
            'Facilita o escalonamento matemático',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Equivalências de Ingredientes Comuns',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Ingrediente', '1 Cup (Volume)', 'Gramas (Peso)', 'Densidade'],
      rows: [
        ['Farinha de Trigo', '1 Cup', '120g', 'Baixa'],
        ['Açúcar Branco', '1 Cup', '200g', 'Média'],
        ['Açúcar Mascavo', '1 Cup', '220g (compactado)', 'Alta'],
        ['Manteiga', '1 Cup (2 sticks)', '227g', 'Alta'],
        ['Cacau em Pó', '1 Cup', '85g', 'Muito Baixa'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Seu bolo ficou seco?',
      html: 'O problema mais comum ao usar cups é "mergulhar a xícara" no saco de farinha. Isso compacta o pó e você pode estar adicionando até 40g extras de farinha por cada cup. A solução é <strong>sempre converter para gramas</strong> usando nossa calculadora.',
    },
    {
      type: 'title',
      text: 'Glossário de Unidades Americanas',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cup (Xícara)',
          definition: 'Unidade de volume equivalente a cerca de 240ml. É a base da cozinha americana.',
        },
        {
          term: 'Tbsp (Tablespoon)',
          definition: 'Colher de sopa, equivalente a 15ml ou 3 teaspoons.',
        },
        {
          term: 'tsp (Teaspoon)',
          definition: 'Colher de chá, equivalente a 5ml. Crucial para fermentos e sal.',
        },
        {
          term: 'Stick of Butter',
          definition: 'Formato comum de mantequilla nos EUA que pesa exatamente 113.5g (meia cup).',
        },
      ],
    },
    {
      type: 'tip',
      title: 'O truque da Colher',
      html: 'Se você não tem balança e PRECISA usar cups, encha a xícara às colheradas sem apertar e nivele com uma faca. É muito mais preciso do que mergulhar a xícara.',
    },
    {
      type: 'paragraph',
      html: 'Usar um conversor profissional transforma a frustação das receitas estrangeiras no sucesso de um resultado perfeito.',
    },
  ],
  faq: [
    {
      question: 'Qual é a diferença entre 1 cup e 250ml?',
      answer: '1 cup americano = 236,588ml, não 250ml. Para fins práticos, usamos 240ml. Embora pareça pequena, esta diferença de 4% pode afetar receitas sensíveis como macarons ou mousses.',
    },
    {
      question: 'Por que a farinha nem sempre pesa o mesmo?',
      answer: 'Porque a farinha se compacta com o tempo e o transporte. Uma farinha recém-peneirada pesa menos que uma que esteve na despensa. Por isso, os padeiros profissionais sempre pesam, nunca medem por volume.',
    },
    {
      question: 'Qual é a diferença entre Tbsp e tsp?',
      answer: '1 Tablespoon (Tbsp/colher de sopa) = 15ml. 1 Teaspoon (tsp/colher de chá) = 5ml. Uma colher de sopa equivale a 3 colheres de chá. Em receitas de confeitaria, erros com especiarias (medidas em tsp) sono comuns.',
    },
    {
      question: 'Uma cup US é o mesmo que uma cup imperial?',
      answer: 'Não. 1 US cup = 236ml. 1 Imperial cup (UK) = 284ml. Uma diferença de 20%. A maioria dos blogs americanos usa US cups. Se a receita não especificar, assuma US.',
    },
    {
      question: 'A que temperatura corresponde o "gas 4" do forno?',
      answer: 'Gas 4 = 180°C = 350°F. É a escala britânica. Na cozinha, buscamos o número equivalente no seu forno: alguns usam gás, outros graus eletrônicos.',
    },
  ],
  howTo: [
    {
      name: 'Selecione o tipo de conversão',
      text: 'Escolha entre Cups para Gramas, Colheres para Gramas, ou Fahrenheit para Celsius.',
    },
    {
      name: 'Escolha o ingrediente',
      text: 'Cada alimento tem uma densidade diferente. Farinha, açúcar, manteiga: todos pesam de forma distinta.',
    },
    {
      name: 'Insira a quantidade',
      text: 'Escreva o número de cups, colheres ou graus. O conversor calcula o equivalente instantaneamente.',
    },
    {
      name: 'Ajuste sua receita',
      text: 'Com a conversão exata, agora você pode seguir a receita americana com precisão profissional.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
