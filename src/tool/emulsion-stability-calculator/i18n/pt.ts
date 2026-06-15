import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Estabilidade de Emulsao e Limite de Oleo";
const description = "Descubra exatamente quanto oleo sua maionese, aioli ou vinagrette pode suportar antes de quebrar. Evite molhos separados com nossa calculadora gratuita de estabilidade de emulsao.";
const faq = [
  {
    question: "Quanto oleo posso adicionar a minha maionese antes que ela quebre?",
    answer: "Depende do emulsificante. A gema de ovo suporta ate ~78% de oleo (cerca de 3,5 vezes o volume de agua), a mostarda ate 70%, a lecitina de soja ate 82% e o polissorbato ate 85%. Use a calculadora acima para obter o maximo exato para suas quantidades especificas."
  },
  {
    question: "Por que minha emulsao quebrou ou separou?",
    answer: "Uma emulsao quebra quando a fracao volumetrica de oleo excede o limite maximo de empacotamento do emulsificante. Nesse ponto, as goticulas de oleo sao comprimidas tao fortemente que se fundem e a mistura se separa. Isso acontece instantaneamente - nao e um processo gradual."
  },
  {
    question: "Como consertar uma maionese ou aioli quebrada?",
    answer: "Comece com uma gema de ovo fresca ou uma colher de sopa de agua mornopa em uma tigela limpa. Adicione lentamente a mistura quebrada enquanto bate constantemente, exatamente como se estivesse adicionando oleo cru. A calculadora acima informa exatamente quanta agua ou gema voce precisa."
  },
  {
    question: "Adicionar oleo muito rapido faz uma emulsao quebrar?",
    answer: "Adicionar oleo muito rapidamente pode sobrecarregar temporariamente o emulsificante, mas a causa real da quebra e sempre uma proporcao de fases incorreta. Se sua fracao de oleo permanecer abaixo do limite do emulsificante, a emulsao permanece estavel independentemente da velocidade. Se exceder o limite, a quebra e inevitavel."
  },
  {
    question: "Qual e a diferenca entre gema de ovo e mostarda como emulsificantes?",
    answer: "A gema de ovo (78% max de oleo) contem lecitina e lipoproteinas que formam um filme robusto ao redor das goticulas. A mostarda (70% max de oleo) depende de mucilagem e proteinas - e mais fraca mas adiciona sabor. A lecitina de soja (82%) e o polissorbato (85%) sao emulsificantes industriais altamente eficientes."
  }
];

const howTo = [
  {
    name: "Selecione seu emulsificante",
    text: "Escolha o emulsificante em sua receita - gema de ovo para maionese classica, mostarda para vinagretes, ou lecitina de soja/polissorbato para culinaria modernista. Cada um define um limite maximo de oleo diferente."
  },
  {
    name: "Insira o volume da fase aquosa",
    text: "Insira os mililitros totais de seus ingredientes aquosos: agua, vinagre, suco de limao, vinho ou qualquer liquido a base de agua. A calculadora adiciona automaticamente o teor de agua do emulsificante escolhido."
  },
  {
    name: "Defina seu volume de oleo",
    text: "Insira a quantidade de oleo que planeja usar. Use o controle deslizante ou digite o valor. A calculadora mostra instantaneamente se essa quantidade produzira uma emulsao estavel ou causara sua quebra."
  },
  {
    name: "Leia o resultado de estabilidade e corrija se necessario",
    text: "Verifique o indicador de fracao volumetrica de oleo. Se estavel, esta pronto. Se quebrado, o painel de resgate informa exatamente quanta agua (em ml) ou quantas gemas de ovo adicionais voce precisa adicionar para restaurar o equilibrio."
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
  title: 'Calculadora de Estabilidade de Emulsao e Limite de Oleo',
  description: 'Descubra exatamente quanto oleo sua maionese, aioli ou vinagrette pode suportar antes de quebrar. Evite molhos separados com nossa calculadora gratuita de estabilidade de emulsao.',
  faqTitle: 'Perguntas Frequentes',
  ui: {
    title: 'Analisador de Estabilidade de Emulsao',
    subtitle: 'Quanto oleo seu molho pode suportar antes de quebrar?',
    waterLabel: 'Fase Aquosa (ml)',
    oilLabel: 'Volume de Oleo (ml)',
    emulsifierLabel: 'Tipo de Emulsificante',
    yolkOption: 'Gema de Ovo',
    mustardOption: 'Mostarda',
    soyLecithinOption: 'Lecitina de Soja',
    polysorbateOption: 'Polissorbato',
    stableStatus: 'Emulsao Estavel',
    brokenStatus: 'Emulsao Quebrada',
    ratioLabel: 'Fracao Volumetrica de Oleo',
    maxLimitLabel: 'Limite Maximo de Oleo',
    fixTitle: 'Estrategia de Resgate',
    waterFixText: 'Adicione agua para restaurar o equilibrio de fases:',
    yolkFixText: 'Alternativamente, use gema de ovo adicional:',
    idealRangeText: 'A faixa ideal esta abaixo do limite critico de empacotamento de 74% a 80%.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Quanto Oleo uma Maionese ou Aioli Pode Suportar Antes de Quebrar?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Todo cozinheiro ja fez esta pergunta: <strong>por que minha maionese talhou?</strong> A resposta e mais simples do que parece. Uma emulsao - seja um classico aioli, uma vinagrette cremosa ou uma espuma modernista - so pode conter uma quantidade finita de oleo antes de colapsar. Nossa <strong>calculadora de estabilidade de emulsao</strong> informa exatamente onde esta esse ponto de quebra, com base em seus ingredientes e porcoes especificos.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '78%',
          label: 'Gema Max Oleo',
          icon: 'mdi:egg-outline'
        },
        {
          value: '85%',
          label: 'Limite Polissorbato',
          icon: 'mdi:flask-outline'
        },
        {
          value: '74%',
          label: 'Empacotamento Teorico',
          icon: 'mdi:sphere'
        },
        {
          value: '15 ml',
          label: 'Agua da Gema',
          icon: 'mdi:water'
        }
      ]
    },
    {
      type: 'title',
      text: 'A Ciencia: Por Que as Emulsoes Quebram',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Uma emulsao culinaria funciona dispersando minusculas goticulas de oleo em uma fase aquosa continua. <strong>Os emulsificantes</strong> - como a lecitina na gema de ovo, a mucilagem na mostarda ou os surfactantes sinteticos como o polissorbato - revestem cada goticula e impedem que ela se funda com as vizinhas.'
    },
    {
      type: 'paragraph',
      html: 'O ponto de quebra e determinado pela pura geometria. As goticulas de oleo se comportam como pequenas esferas empacotadas juntas. O volume maximo de esferas que cabe em um determinado espaco - conhecido como <strong>conjectura de Kepler</strong> - e de cerca de 74%. Em sistemas de cozinha reais, isso pode se estender para 80-85% com emulsificantes poderosos, mas alem disso, as goticulas sao comprimidas tao fortemente que se fundem e a emulsao colapsa instantaneamente.'
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Gema de Ovo',
          icon: 'mdi:egg-outline',
          description: 'O emulsificante classico da maionese. Contem lecitina e lipoproteinas.',
          highlight: true,
          points: [
            'Max oleo: 78%',
            '~15 ml agua por gema',
            'Adiciona riqueza e cor',
            'Melhor para maionese e aioli'
          ]
        },
        {
          title: 'Mostarda',
          icon: 'mdi:shaker-outline',
          description: 'Depende de mucilagem e proteinas de sementes. Adiciona sabor picante.',
          points: [
            'Max oleo: 70%',
            '~10 ml teor de agua',
            'Poder emulsificante mais fraco',
            'Ideal para vinagretes'
          ]
        },
        {
          title: 'Lecitina de Soja',
          icon: 'mdi:leaf',
          description: 'Surfactante vegetal altamente concentrado.',
          points: [
            'Max oleo: 82%',
            '~5 ml teor de agua',
            'Perfil de sabor neutro',
            'Basico na culinaria modernista'
          ]
        },
        {
          title: 'Polissorbato',
          icon: 'mdi:flask-outline',
          description: 'Emulsificante sintetico com maxima capacidade surfactante.',
          points: [
            'Max oleo: 85%',
            '~2 ml teor de agua',
            'Maior tolerancia a oleo',
            'Usado em espumas e ares'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emulsificante', 'Max Oleo %', 'Oleo por 100 ml Agua', 'Melhor Uso'],
      rows: [
        ['Gema de Ovo', '78%', '~355 ml', 'Maionese, aioli, holandesa'],
        ['Mostarda', '70%', '~233 ml', 'Vinagretes, molhos leves'],
        ['Lecitina de Soja', '82%', '~456 ml', 'Molhos modernistas, espumas'],
        ['Polissorbato', '85%', '~567 ml', 'Espumas estaveis, culinaria experimental']
      ]
    },
    {
      type: 'title',
      text: 'Como Resgatar uma Emulsao Quebrada Passo a Passo',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Se sua maionese ou molho ja talhou, <strong>nao jogue fora</strong>. A solucao e simples - mas apenas se voce entender a proporcao de fases. Bater com mais forca nao vai ajudar; voce precisa adicionar mais da fase continua (agua).'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Sinais Comuns de Que Sua Emulsao Esta Prestes a Quebrar',
      html: 'Fique atento a um <strong>espessamento seguido de adelgacamento repentino</strong>, uma <strong>superficie brilhante ficando granulada</strong> ou oleo visivel se acumulando nas bordas. Se voce ver algum destes, pare de adicionar oleo imediatamente e incorpore uma colher de cha de agua fria antes de continuar.'
    },
    {
      type: 'title',
      text: 'Dicas Praticas para Emulsoes Perfeitas Sempre',
      level: 3
    },
    {
      type: 'tip',
      title: 'A Temperatura Importa',
      html: 'Todos os ingredientes devem estar em <strong>temperatura ambiente</strong>. Ovos ou oleo frios aumentam drasticamente o risco de quebra. Retire os ingredientes da geladeira 30 minutos antes de comecar.'
    },
    {
      type: 'tip',
      title: 'A Rede de Seguranca da Agua',
      html: 'Se sua receita nao incluir acido suficiente (vinagre, suco de limao), adicione <strong>uma colher de cha de agua fria por gema de ovo</strong> antes de comecar a adicionar oleo. Esta agua extra cria uma margem de seguranca mais ampla.'
    },
    {
      type: 'tip',
      title: 'Consertar um Lote Talhado',
      html: 'Coloque uma gema de ovo fresca em uma tigela limpa. Bata com uma colher de cha de agua. Em seguida, <strong>adicione a mistura talhada o mais lentamente possivel</strong>, exatamente como se fosse oleo cru. Depois que re-emulsionar, voce pode adicionar o resto mais rapidamente.'
    },
    {
      type: 'title',
      text: 'Glossario Culinario de Emulsoes',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Fase Continua',
          definition: 'O liquido que envolve as goticulas - geralmente agua, vinagre ou suco de citricos em emulsoes oleo-em-agua como maionese.'
        },
        {
          term: 'Fase Dispersa',
          definition: 'O liquido dividido em goticulas minusculas - oleo na maioria das emulsoes culinarias. Quanto mais voce adiciona, mais proximas as goticulas se empacotam.'
        },
        {
          term: 'Fracao Volumetrica',
          definition: 'A proporcao do volume de oleo em relacao ao volume total. A cerca de 74-85% (dependendo do emulsificante), a emulsao atinge seu ponto de quebra geometrico.'
        },
        {
          term: 'Coalescencia',
          definition: 'Quando duas ou mais goticulas de oleo se fundem em uma maior. Este e o processo microscopico que desencadeia uma quebra visivel da emulsao.'
        },
        {
          term: 'Inversao de Fase',
          definition: 'O ponto onde uma emulsao oleo-em-agua se transforma em agua-em-oleo - como acontece ao fazer manteiga a partir do creme. Esta e a forma definitiva de falha.'
        }
      ]
    },
    {
      type: 'paragraph',
      html: 'Esteja voce fazendo uma maionese classica francesa, um aioli com alho, uma vinagrette estavel ou experimentando com hidrocoloides modernistas, entender a <strong>proporcao oleo-agua</strong> e o fator mais importante. Nossa calculadora cuida da matematica para que voce possa cozinhar com confianca.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
