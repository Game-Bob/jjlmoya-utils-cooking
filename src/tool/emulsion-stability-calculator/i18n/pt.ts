import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Estabilidade de Emulsão e Limite de Óleo";
const description = "Descubra exatamente quanto óleo sua maionese, aioli ou vinaigrette pode suportar antes de quebrar. Evite molhos separados com nossa calculadora gratuita de estabilidade de emulsão.";
const faq = [
  {
    question: "Quanto óleo posso adicionar à minha maionese antes que ela quebre?",
    answer: "Depende do emulsificante. A gema de ovo suporta até ~78% de óleo (cerca de 3,5 vezes o volume de água), a mostarda até 70%, a lecitina de soja até 82% e o polissorbato até 85%. Use a calculadora acima para obter o máximo exato para suas quantidades específicas."
  },
  {
    question: "Por que minha emulsão quebrou ou separou?",
    answer: "Uma emulsão quebra quando a fração volumétrica de óleo excede o limite máximo de empacotamento do emulsificante. Nesse ponto, as gotículas de óleo são comprimidas tão fortemente que se fundem e a mistura se separa. Isso acontece instantaneamente - não é um processo gradual."
  },
  {
    question: "Como consertar uma maionese ou aioli quebrada?",
    answer: "Comece com uma gema de ovo fresca ou uma colher de sopa de água morna em uma tigela limpa. Adicione lentamente a mistura quebrada enquanto bate constantemente, exatamente como se estivesse adicionando óleo cru. A calculadora acima informa exatamente quanta água ou gema você precisa."
  },
  {
    question: "Adicionar óleo muito rápido faz uma emulsão quebrar?",
    answer: "Adicionar óleo muito rapidamente pode sobrecarregar temporariamente o emulsificante, mas a causa real da quebra é sempre uma proporção de fases incorreta. Se sua fração de óleo permanecer abaixo do limite do emulsificante, a emulsão permanece estável independentemente da velocidade. Se exceder o limite, a quebra é inevitável."
  },
  {
    question: "Qual é a diferença entre gema de ovo e mostarda como emulsificantes?",
    answer: "A gema de ovo (78% max de óleo) contém lecitina e lipoproteínas que formam um filme robusto ao redor das gotículas. A mostarda (70% max de óleo) depende de mucilagem e proteínas - é mais fraca mas adiciona sabor. A lecitina de soja (82%) e o polissorbato (85%) são emulsificantes industriais altamente eficientes."
  }
];

const howTo = [
  {
    name: "Selecione seu emulsificante",
    text: "Escolha o emulsificante em sua receita - gema de ovo para maionese clássica, mostarda para vinagretes, ou lecitina de soja/polissorbato para culinária modernista. Cada um define um limite máximo de óleo diferente."
  },
  {
    name: "Insira o volume da fase aquosa",
    text: "Insira os mililitros totais de seus ingredientes aquosos: água, vinagre, suco de limão, vinho ou qualquer líquido a base de água. A calculadora adiciona automaticamente o teor de água do emulsificante escolhido."
  },
  {
    name: "Defina seu volume de óleo",
    text: "Insira a quantidade de óleo que planeja usar. Use o controle deslizante ou digite o valor. A calculadora mostra instantaneamente se essa quantidade produzirá uma emulsão estável ou causará sua quebra."
  },
  {
    name: "Leia o resultado de estabilidade e corrija se necessário",
    text: "Verifique o indicador de fração volumétrica de óleo. Se estável, está pronto. Se quebrado, o painel de resgate informa exatamente quanta água (em ml) ou quantas gemas de ovo adicionais você precisa adicionar para restaurar o equilíbrio."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo' as const,
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
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'calculadora-estabilidade-emulsao',
  title: 'Calculadora de Estabilidade de Emulsão e Limite de Óleo',
  description: 'Descubra exatamente quanto óleo sua maionese, aioli ou vinaigrette pode suportar antes de quebrar. Evite molhos separados com nossa calculadora gratuita de estabilidade de emulsão.',
  faqTitle: 'Perguntas Frequentes',
  ui: {
    title: 'Analisador de Estabilidade de Emulsão',
    subtitle: 'Quanto óleo seu molho pode suportar antes de quebrar?',
    waterLabel: 'Fase Aquosa (ml)',
    oilLabel: 'Volume de Óleo (ml)',
    emulsifierLabel: 'Tipo de Emulsificante',
    yolkOption: 'Gema de Ovo',
    mustardOption: 'Mostarda',
    soyLecithinOption: 'Lecitina de Soja',
    polysorbateOption: 'Polissorbato',
    stableStatus: 'Emulsão Estável',
    brokenStatus: 'Emulsão Quebrada',
    ratioLabel: 'Fração Volumétrica de Óleo',
    maxLimitLabel: 'Limite Máximo de Óleo',
    fixTitle: 'Estratégia de Resgate',
    waterFixText: 'Adicione água para restaurar o equilíbrio de fases:',
    yolkFixText: 'Alternativamente, use gema de ovo adicional:',
    idealRangeText: 'A faixa ideal está abaixo do limite crítico de empacotamento de 74% a 80%.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Quanto Óleo uma Maionese ou Aioli Pode Suportar Antes de Quebrar?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Todo cozinheiro já fez esta pergunta: <strong>por que minha maionese talhou?</strong> A resposta é mais simples do que parece. Uma emulsão - seja um clássico aioli, uma vinaigrette cremosa ou uma espuma modernista - só pode conter uma quantidade finita de óleo antes de colapsar. Nossa <strong>calculadora de estabilidade de emulsão</strong> informa exatamente onde está esse ponto de quebra, com base em seus ingredientes e porções específicos.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '78%',
          label: 'Gema Max Óleo',
          icon: 'mdi:egg-outline'
        },
        {
          value: '85%',
          label: 'Limite Polissorbato',
          icon: 'mdi:flask-outline'
        },
        {
          value: '74%',
          label: 'Empacotamento Teórico',
          icon: 'mdi:sphere'
        },
        {
          value: '15 ml',
          label: 'Água da Gema',
          icon: 'mdi:water'
        }
      ]
    },
    {
      type: 'title',
      text: 'A Ciência: Por Que as Emulsões Quebram',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Uma emulsão culinária funciona dispersando minúsculas gotículas de óleo em uma fase aquosa contínua. <strong>Os emulsificantes</strong> - como a lecitina na gema de ovo, a mucilagem na mostarda ou os surfactantes sintéticos como o polissorbato - revestem cada gotícula e impedem que ela se funda com as vizinhas.'
    },
    {
      type: 'paragraph',
      html: 'O ponto de quebra é determinado pela pura geometria. As gotículas de óleo se comportam como pequenas esferas empacotadas juntas. O volume máximo de esferas que cabe em um determinado espaço - conhecido como <strong>conjectura de Kepler</strong> - é de cerca de 74%. Em sistemas de cozinha reais, isso pode se estender para 80-85% com emulsificantes poderosos, mas além disso, as gotículas são comprimidas tão fortemente que se fundem e a emulsão colapsa instantaneamente.'
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Gema de Ovo',
          icon: 'mdi:egg-outline',
          description: 'O emulsificante clássico da maionese. Contém lecitina e lipoproteínas.',
          highlight: true,
          points: [
            'Max óleo: 78%',
            '~15 ml água por gema',
            'Adiciona riqueza e cor',
            'Melhor para maionese e aioli'
          ]
        },
        {
          title: 'Mostarda',
          icon: 'mdi:shaker-outline',
          description: 'Depende de mucilagem e proteínas de sementes. Adiciona sabor picante.',
          points: [
            'Max óleo: 70%',
            '~10 ml teor de água',
            'Poder emulsificante mais fraco',
            'Ideal para vinagretes'
          ]
        },
        {
          title: 'Lecitina de Soia',
          icon: 'mdi:leaf',
          description: 'Surfactante vegetal altamente concentrado.',
          points: [
            'Max óleo: 82%',
            '~5 ml teor de água',
            'Perfil de sabor neutro',
            'Básico na culinária modernista'
          ]
        },
        {
          title: 'Polissorbato',
          icon: 'mdi:flask-outline',
          description: 'Emulsificante sintético com máxima capacidade surfactante.',
          points: [
            'Max óleo: 85%',
            '~2 ml teor de água',
            'Maior tolerância a óleo',
            'Usado em espumas e ares'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emulsificante', 'Max Óleo %', 'Óleo por 100 ml Água', 'Melhor Uso'],
      rows: [
        ['Gema de Ovo', '78%', '~355 ml', 'Maionese, aioli, holandesa'],
        ['Mostarda', '70%', '~233 ml', 'Vinagretes, molhos leves'],
        ['Lecitina de Soia', '82%', '~456 ml', 'Molhos modernistas, espumas'],
        ['Polissorbato', '85%', '~567 ml', 'Espumas estáveis, culinária experimental']
      ]
    },
    {
      type: 'title',
      text: 'Como Resgatar uma Emulsão Quebrada Passo a Passo',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Se sua maionese ou molho já talhou, <strong>não jogue fora</strong>. A solução é simples - mas apenas se você entender a proporção de fases. Bater com mais força não vai ajudar; você precisa adicionar mais da fase contínua (água).'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Sinais Comuns de Que Sua Emulsão Está Prestes a Quebrar',
      html: 'Fique atento a um <strong>espessamento seguido de adelgaçamento repentino</strong>, uma <strong>superfície brilhante ficando granulada</strong> ou óleo visível se acumulando nas bordas. Se você ver algum destes, pare de adicionar óleo imediatamente e incorpore uma colher de chá de água fria antes de continuar.'
    },
    {
      type: 'title',
      text: 'Dicas Práticas para Emulsões Perfeitas Sempre',
      level: 3
    },
    {
      type: 'tip',
      title: 'A Temperatura Importa',
      html: 'Todos os ingredientes devem estar em <strong>temperatura ambiente</strong>. Ovos ou óleo frios aumentam drasticamente o risco de quebra. Retire os ingredientes da geladeira 30 minutos antes de começar.'
    },
    {
      type: 'tip',
      title: 'A Rede de Segurança da Água',
      html: 'Se sua receita não incluir ácido suficiente (vinagre, suco de limão), adicione <strong>uma colher de chá de água fria por gema de ovo</strong> antes de começar a adicionar óleo. Esta água extra cria uma margem de segurança mais ampla.'
    },
    {
      type: 'tip',
      title: 'Consertar um Lote Talhado',
      html: 'Coloque uma gema de ovo fresca em uma tigela limpa. Bata com uma colher de chá de água. Em seguida, <strong>adicione a mistura talhada o mais lentamente possível</strong>, exatamente como se fosse óleo cru. Depois que re-emulsione, você pode adicionar o resto mais rapidamente.'
    },
    {
      type: 'title',
      text: 'Glossário Culinário de Emulsões',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Fase Contínua',
          definition: 'O líquido que envolve as gotículas - geralmente água, vinagre ou suco de cítricos em emulsões óleo-em-água como maionese.'
        },
        {
          term: 'Fase Dispersa',
          definition: 'O líquido dividido em gotículas minúsculas - óleo na maioria das emulsões culinárias. Quanto mais você adiciona, mais próximas as gotículas se empacotam.'
        },
        {
          term: 'Fração Volumétrica',
          definition: 'A proporção do volume de óleo em relação ao volume total. A cerca de 74-85% (dependendo do emulsificante), a emulsão atinge seu ponto de quebra geométrico.'
        },
        {
          term: 'Coalescência',
          definition: 'Quando duas ou mais gotículas de óleo se fundem em uma maior. Este é o processo microscópico que desencadeia uma quebra visível da emulsão.'
        },
        {
          term: 'Inversão de Fase',
          definition: 'O ponto onde uma emulsão óleo-em-água se transforma em água-em-óleo - como acontece ao fazer manteiga a partir do creme. Esta é a forma definitiva de falha.'
        }
      ]
    },
    {
      type: 'paragraph',
      html: 'Esteja você fazendo uma maionese clássica francesa, um aioli com alho, uma vinaigrette estável ou experimentando com hidrocoloides modernistas, entender a <strong>proporção óleo-água</strong> é o fator mais importante. Nossa calculadora cuida da matemática para que você possa cozinhar com confiança.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
