import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Estabilidade de Emulsão e Limite de Óleo";
const description = "Descubra exatamente quanto óleo a sua maionese, aioli ou vinagrete pode suportar antes de cortar. Evite molhos cortados com a nossa calculadora gratuita de estabilidade de emulsão.";

const faq = [
  {
    question: "Quanto óleo posso adicionar à minha maionese antes que ela corte?",
    answer: "Depende do emulsionante. A gema de ovo suporta até ~78% de óleo (cerca de 3,5 vezes o volume de água), a mostarda até 70%, a lecitina de soja até 82% e o polisorbato até 85%. Use a calculadora acima para obter o máximo exato para as suas quantidades específicas."
  },
  {
    question: "Por que razão a minha emulsão cortou ou separou?",
    answer: "Uma emulsão corta quando a fração volumétrica de óleo excede o limite máximo de empacotamento do emulsionante. Nesse ponto, as gotas de óleo ficam tão comprimidas que se fundem e a mistura separa-se. Isto acontece instantaneamente - não é um processo gradual."
  },
  {
    question: "Como posso recuperar uma maionese ou aioli cortado?",
    answer: "Comece com uma gema de ovo fresca ou uma colher de sopa de água morna numa taça limpa. Despeje lentamente a mistura cortada enquanto bate constantemente, exatamente como se estivesse a adicionar óleo puro. A calculadora acima diz-lhe exatamente quanta água ou gema precisa."
  },
  {
    question: "Adicionar óleo demasiado rápido faz a emulsão cortar?",
    answer: "Adicionar óleo demasiado rápido pode sobrecarregar temporariamente o emulsionante, mas a causa real do corte é sempre uma proporção de fases incorreta. Se a sua fração de óleo permanecer abaixo do limite do emulsionante, a emulsão permanece estável independentemente da velocidade. Se exceder o limite, o corte é inevitável."
  },
  {
    question: "Qual é a diferença entre gema de ovo e mostarda como emulsionantes?",
    answer: "A gema de ovo (máx. 78% de óleo) contém lecitina e lipoproteínas que formam uma película robusta ao redor das gotas. A mostarda (máx. 70% de óleo) depende de mucilagens e proteínas - é mais fraca, mas adiciona sabor. A lecitina de soja (82%) e o polisorbato (85%) são emulsionantes industriais de alta eficiência."
  }
];

const howTo = [
  {
    name: "Selecione o seu emulsionante",
    text: "Escolha o emulsionante da sua receita - gema de ovo para maionese clássica, mostarda para vinagretes, ou lecitina de soja/polisorbato para culinária modernista. Cada um estabelece um limite máximo de óleo diferente."
  },
  {
    name: "Introduza o volume da fase aquosa",
    text: "Introduza os mililitros totais dos seus ingredientes aquosos: água, vinagre, sumo de limão, vinho ou qualquer líquido à base de água. A calculadora adiciona automaticamente o conteúdo de água do emulsionante escolhido."
  },
  {
    name: "Defina o seu volume de óleo",
    text: "Introduza a quantidade de óleo que planeia usar. Use o cursor ou digite o valor. A calculadora mostra instantaneamente se esta quantidade produzirá uma emulsão estável ou se a fará cortar."
  },
  {
    name: "Leia o resultado de estabilidade e corrija se necessário",
    text: "Verifique o indicador de fração volumétrica de óleo. Se estiver estável, está pronto. Se estiver cortada, o painel de resgate indica exatamente quanta água (em ml) ou quantas gemas adicionais precisa de adicionar para restaurar o equilíbrio."
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
  slug: 'emulsion-stability-calculator',
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  ui: {
    title: 'Analisador de Estabilidade de Emulsão',
    subtitle: 'Quanto óleo o seu molho pode suportar antes de cortar?',
    waterLabel: 'Fase Aquosa (ml)',
    oilLabel: 'Volume de Óleo (ml)',
    emulsifierLabel: 'Tipo de Emulsionante',
    yolkOption: 'Gema de Ovo',
    mustardOption: 'Mostarda',
    soyLecithinOption: 'Lecitina de Soja',
    polysorbateOption: 'Polisorbato',
    stableStatus: 'Emulsão Estável',
    brokenStatus: 'Emulsão Cortada',
    ratioLabel: 'Fração Volumétrica de Óleo',
    maxLimitLabel: 'Limite Máximo de Óleo',
    fixTitle: 'Estratégia de Resgate',
    waterFixText: 'Adicione água para restaurar o equilíbrio de fases:',
    yolkFixText: 'Alternativamente, use gema de ovo adicional:',
    idealRangeText: 'O intervalo ideal está abaixo do limite crítico de empacotamento de 74% a 80%.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Quanto Óleo Pode Uma Maionese ou Aioli Suportar Antes de Cortar?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Qualquer cozinheiro já se fez esta pergunta: <strong>por que razão a minha maionese cortou?</strong> A resposta é mais simples do que parece. Uma emulsão - seja um aioli clássico, um vinagrete cremoso ou uma espuma modernista - só pode conter uma quantidade finita de óleo antes de colapsar. A nossa <strong>calculadora de estabilidade de emulsão</strong> indica exatamente onde fica esse ponto de rutura, com base nos seus ingredientes e porções específicos.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '78%', label: 'Gema Máx. Óleo', icon: 'mdi:egg-outline' },
        { value: '85%', label: 'Limite Polisorbato', icon: 'mdi:flask-outline' },
        { value: '74%', label: 'Empacotamento Teórico', icon: 'mdi:sphere' },
        { value: '15 ml', label: 'Água da Gema', icon: 'mdi:water' }
      ]
    },
    {
      type: 'list',
      items: [
        '<strong>Adiciona óleo demasiado rápido</strong> - A velocidade raramente é a causa real. Se a fração de óleo permanecer abaixo do limite do emulsionante, a emulsão aguenta independentemente da velocidade de vertimento.',
        '<strong>Os seus ingredientes estão demasiado frios</strong> - Ovos ou óleo frios aumentam a viscosidade e dificultam a formação de gotas. Traga sempre os ingredientes para a temperatura ambiente.',
        '<strong>Excedeu o limite de óleo para o seu emulsionante</strong> - Cada emulsionante tem uma fração máxima de empacotamento. Gema de ovo até 78%, mostarda 70%, lecitina de soja 82% e polisorbato 85%.',
        '<strong>A sua fase aquosa é demasiado pequena</strong> - Sem água suficiente para envolver as gotas de óleo, estas não têm para onde ir senão fundirem-se entre si.'
      ]
    },
    {
      type: 'title',
      text: 'Que emulsionante deve utilizar? Uma comparação prática',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Escolher o emulsionante certo depende da sua receita, perfil de sabor e capacidade de óleo desejada. Eis como se comparam os quatro emulsionantes culinários mais comuns.'
    },
    {
      type: 'proscons',
      title: 'Gema de Ovo',
      items: [
        { pro: 'Máxima compatibilidade de sabor para molhos clássicos', con: 'Adiciona colesterol e sabor a ovo' },
        { pro: 'Contém lecitina e lipoproteínas para emulsões robustas', con: 'Requer controlo cuidadoso de temperatura' },
        { pro: 'Adiciona cor natural e riqueza', con: 'Não adequado para preparações veganas' },
        { pro: 'Funciona com até 78% de fração de óleo', con: 'Limitado a cerca de 15 ml de contribuição de água por gema' }
      ]
    },
    {
      type: 'proscons',
      title: 'Mostarda',
      items: [
        { pro: 'Adiciona sabor picante e complexidade a temperos', con: 'Capacidade máxima de óleo menor (70%)' },
        { pro: 'Amplamente disponível e fácil de usar', con: 'Poder emulsionante mais fraco do que a gema de ovo' },
        { pro: 'Funciona bem à temperatura ambiente', con: 'O sabor pode chocar com molhos delicados' },
        { pro: 'Ideal para vinagretes rápidos', con: 'Não adequado para emulsões de sabor neutro' }
      ]
    },
    {
      type: 'proscons',
      title: 'Lecitina de Soja',
      items: [
        { pro: 'Alta tolerância ao óleo (82%) para molhos estáveis', con: 'Requer pesagem precisa' },
        { pro: 'O sabor neutro não altera as receitas', con: 'Menos indulgente do que a gema de ovo' },
        { pro: 'De origem vegetal e adequado para veganos', con: 'Não é um produto básico comum na despensa doméstica' },
        { pro: 'Funciona com pequenos volumes de água', con: 'Pode criar uma textura ligeiramente artificial' }
      ]
    },
    {
      type: 'proscons',
      title: 'Polisorbato',
      items: [
        { pro: 'Maior capacidade de óleo de qualquer emulsionante (85%)', con: 'Aditivo sintético, não natural' },
        { pro: 'Cria espumas e aires ultra-estáveis', con: 'Difícil de obter para cozinha doméstica' },
        { pro: 'Funciona com uma fase aquosa mínima', con: 'Requer balança para dosagem precisa' },
        { pro: 'Ideal para cozinha modernista e experimental', con: 'Dominante se usado em excesso' }
      ]
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Gema de Ovo',
          icon: 'mdi:egg-outline',
          description: 'O emulsionante clássico da maionese. Contém lecitina e lipoproteínas.',
          highlight: true,
          points: ['Máx. óleo: 78%', '~15 ml água por gema', 'Adiciona riqueza e cor', 'Melhor para mayo e aioli']
        },
        {
          title: 'Mostarda',
          icon: 'mdi:shaker-outline',
          description: 'Depende de mucilagens e proteínas de sementes. Adiciona sabor picante.',
          points: ['Máx. óleo: 70%', '~10 ml conteúdo de água', 'Menor poder emulsionante', 'Ideal para vinagretes']
        },
        {
          title: 'Lecitina de Soja',
          icon: 'mdi:leaf',
          description: 'Tensioativo vegetal altamente concentrado.',
          points: ['Máx. óleo: 82%', '~5 ml conteúdo de água', 'Perfil de sabor neutro', 'Básico na cozinha modernista']
        },
        {
          title: 'Polisorbato',
          icon: 'mdi:flask-outline',
          description: 'Emulsionante sintético com máxima capacidade tensioativa.',
          points: ['Máx. óleo: 85%', '~2 ml conteúdo de água', 'Maior tolerância ao óleo', 'Usado em espumas e aires']
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emulsionante', 'Máx. Óleo %', 'Óleo por 100 ml Água', 'Melhor Uso'],
      rows: [
        ['Gema de Ovo', '78%', '~355 ml', 'Maionese, aioli, holandês'],
        ['Mostarda', '70%', '~233 ml', 'Vinagretes, temperos leves'],
        ['Lecitina de Soja', '82%', '~456 ml', 'Molhos modernistas, espumas'],
        ['Polisorbato', '85%', '~567 ml', 'Espumas estáveis, cozinha experimental']
      ]
    },
    {
      type: 'title',
      text: 'A Ciência: Por que as Emulsões Cortam e Como a Conjetura de Kepler Se Aplica na Cozinha',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Uma emulsão culinária funciona dispersando pequenas gotas de óleo ao longo de uma fase aquosa contínua. <strong>Os emulsionantes</strong> - como a lecitina na gema de ovo, a mucilagem na mostarda ou tensioativos sintéticos como o polisorbato - revestem cada gota e evitam que se funda com as vizinhas.'
    },
    {
      type: 'paragraph',
      html: 'O ponto de rutura é determinado pela pura geometria. As gotas de óleo comportam-se como pequenas esferas empacotadas. O volume máximo de esferas que cabe num determinado espaço - conhecido como a <strong>conjetura de Kepler</strong> - é de aproximadamente 74%. Em sistemas reais de cozinha, isto pode estender-se até 80-85% com emulsionantes potentes, mas além disso, as gotas ficam tão comprimidas que se fundem e a emulsão colapsa instantaneamente.'
    },
    {
      type: 'card',
      columns: 2,
      items: [
        {
          icon: 'mdi:egg-outline',
          title: 'Maionese e Aioli Clássicos',
          html: 'Use <strong>gema de ovo</strong> até 78% de óleo. Comece com uma gema por chávena de óleo. Adicione uma colher de chá de água ou sumo de limão antes de verter óleo para uma margem de segurança mais ampla.'
        },
        {
          icon: 'mdi:shaker-outline',
          title: 'Vinagretes e Temperos Leves',
          html: 'Use <strong>mostarda</strong> até 70% de óleo. A mucilagem da mostarda fornece emulsificação suficiente para um vinagrete temporário.'
        },
        {
          icon: 'mdi:leaf',
          title: 'Molhos Modernistas e Espumas Estáveis',
          html: 'Use <strong>lecitina de soja</strong> até 82% de óleo. Ideal para emulsões de sabor neutro onde deseja que o sabor do óleo e do ácido sobressaia.'
        },
        {
          icon: 'mdi:flask-outline',
          title: 'Espumas Experimentais e Aires',
          html: 'Use <strong>polisorbato</strong> até 85% de óleo. A escolha principal para técnicas modernistas que exigem carga máxima de óleo e estabilidade.'
        }
      ]
    },
    {
      type: 'title',
      text: 'Como Recuperar uma Emulsão Cortada Passo a Passo',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Se a sua maionese ou molho já cortou, <strong>não deite fora</strong>. A solução é simples - mas apenas se compreender a proporção de fases. Bater mais forte não ajuda; precisa de adicionar mais fase contínua (água).'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '3 Sinais Comuns de Que a Sua Emulsão Está Prestes a Cortar',
      html: 'Fique atento a um <strong>espessamento seguido de um afinamento repentino</strong> como primeiro aviso. Em seguida, procure uma <strong>superfície brilhante a tornar-se granulada</strong> ou <strong>óleo visível a acumular-se nas bordas</strong>. Se vir algum destes sinais, pare imediatamente de adicionar óleo e incorpore uma colher de chá de água fria antes de continuar.'
    },
    {
      type: 'title',
      text: 'Conselhos Práticos para Emulsões Perfeitas Sempre',
      level: 3
    },
    {
      type: 'message',
      html: '<strong>A regra de ouro:</strong> A proporção entre óleo e água conta mais do que a técnica, a temperatura ou a velocidade com que bate. Use a nossa calculadora para encontrar o seu limite exato de óleo antes de começar a bater.'
    },
    {
      type: 'tip',
      title: 'A Temperatura Conta',
      html: 'Todos os ingredientes devem estar à <strong>temperatura ambiente</strong>. Ovos ou óleo frios aumentam drasticamente o risco de cortar. Tire os ingredientes do frigorífico 30 minutos antes de começar.'
    },
    {
      type: 'tip',
      title: 'A Rede de Segurança da Água',
      html: 'Se a sua receita não incluir ácido suficiente (vinagre, sumo de limão), adicione <strong>uma colher de chá de água fria por gema de ovo</strong> antes de começar a adicionar óleo. Esta água extra cria uma margem de segurança mais ampla.'
    },
    {
      type: 'tip',
      title: 'Recuperar uma Porção Cortada',
      html: 'Coloque uma gema de ovo fresca numa taça limpa. Bata-a com uma colher de chá de água. Depois, <strong>verta a mistura cortada o mais lentamente possível</strong>, exatamente como se fosse óleo puro. Assim que se re-emulsionar, pode adicionar o resto mais rapidamente.'
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
          definition: 'O líquido que envolve as gotas - geralmente água, vinagre ou sumo de citrinos em emulsões óleo-em-água como a maionese.'
        },
        {
          term: 'Fase Dispersa',
          definition: 'O líquido subdividido em pequenas gotas - o óleo na maioria das emulsões culinárias. Quanto mais adiciona, mais comprimidas ficam as gotas.'
        },
        {
          term: 'Fração Volumétrica',
          definition: 'A proporção do volume de óleo para o volume total. A cerca de 74-85% (dependendo do emulsionante), a emulsão atinge o seu ponto de rutura geométrico.'
        },
        {
          term: 'Coalescência',
          definition: 'Quando duas ou mais gotas de óleo se fundem numa maior. Este é o processo microscópico que desencadeia um corte visível da emulsão.'
        },
        {
          term: 'Inversão de Fase',
          definition: 'O ponto em que uma emulsão óleo-em-água se transforma em água-em-óleo - como acontece ao fazer manteiga a partir de natas. Este é o modo de falha definitivo.'
        }
      ]
    },
    {
      type: 'summary',
      title: 'Pontos-Chave para Emulsões Estáveis',
      items: [
        'Cada emulsionante tem uma fração máxima de óleo: gema de ovo 78%, mostarda 70%, lecitina de soja 82%, polisorbato 85%.',
        'O ponto de rutura é determinado pela geometria (conjetura de Kepler a 74%), e não pela velocidade de bater.',
        'Comece sempre com ingredientes à temperatura ambiente e adicione uma pequena quantidade de água como margem de segurança.',
        'Uma emulsão cortada pode ser recuperada adicionando emulsionante fresco e mais fase aquosa, e não batendo com mais força.',
        'Use a nossa calculadora de estabilidade de emulsão acima para obter o limite exato de óleo para os seus ingredientes.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
