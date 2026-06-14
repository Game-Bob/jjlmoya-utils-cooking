import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Bicarbonato e Fermento em Po: Neutralizador Acido Fermento";
const description = "Calcula a proporcao exata de bicarbonato de sodio e fermento em po para a sua receita. Neutraliza ingredientes acidos como leitelho e iogurte, evita o sabor residual metalico e obtenha uma fermentacao perfeita todas as vezes.";
const faq = [
  {
    question: "Por que substituir fermento em po por bicarbonato exige um acido?",
    answer: "O bicarbonato de sodio e uma base pura. Ele precisa de uma fonte acida para se ativar e libertar dioxido de carbono. Sem acido suficiente, o bicarbonato nao reage completamente, deixando um sabor amargo e metalico nos produtos de pastelaria."
  },
  {
    question: "Qual e a diferenca entre bicarbonato de sodio e fermento em po?",
    answer: "O bicarbonato de sodio e 100% bicarbonato de sodio, uma base. O fermento em po e um agente levedante completo, contendo bicarbonato mais um agente acidificante seco (como cremor de tartaro) e amido. O fermento em po e autoneutralizante."
  },
  {
    question: "Quanto fermento em po equivale a 1 colher de cha de bicarbonato?",
    answer: "O bicarbonato e cerca de 3-4 vezes mais potente que o fermento em po. Para substituir 1 colher de cha de bicarbonato, precisa de aproximadamente 3-4 colheres de cha de fermento em po. No entanto, esta substituicao tambem adiciona sais acidos que podem alterar o sabor; por isso e melhor usar a nossa calculadora para conversoes precisas."
  },
  {
    question: "Por que o meu bolo sabe a sabao ou metal?",
    answer: "Um sabor residual a sabao ou metalico e o sinal classico de bicarbonato nao reagido. Quando nao ha acido suficiente na massa para neutralizar completamente o bicarbonato, o residuo alcalino permanece apos a cozedura, conferindo aquele desagradavel sabor quimico. Use a nossa calculadora para garantir uma neutralizacao completa."
  },
  {
    question: "Posso usar cacau em po alcalino como acido?",
    answer: "Nao. O cacau em po alcalino foi tratado com um agente alcalinizante para reduzir a sua acidez natural (pH ~7-8). Apenas o cacau em po natural (pH ~5-6) e acido e neutralizara o bicarbonato."
  },
  {
    question: "Como e que o bicarbonato afeta o dourado dos produtos de pastelaria?",
    answer: "O bicarbonato aumenta o pH da massa, tornando-a mais alcalina. Um pH mais alto acelera a reacao de Maillard, resultando em crostas mais escuras e sabores mais profundos em bolachas e bolos."
  }
];

const howTo = [
  {
    name: "Insira o peso da farinha",
    text: "Introduza o peso total da farinha na sua receita em gramas ou oncas para calcular o poder levedante total necessario."
  },
  {
    name: "Adicione ingredientes acidos",
    text: "Selecione os ingredientes acidos da sua receita (como leitelho, iogurte ou sumo de limao) e introduza os seus pesos."
  },
  {
    name: "Verifique o equilibrio do pH",
    text: "Observe a balanca virtual de pH. Uma balanca equilibrada indica neutralizacao otima sem sabores metalicos indesejaveis."
  },
  {
    name: "Meca os agentes levedantes",
    text: "Leia a quantidade recomendada de bicarbonato para neutralizacao e o booster de fermento em po necessario para atingir a fermentacao desejada."
  }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'neutralizador-acido-fermento',
  title: 'Neutralizador Acido Fermento',
  description: 'Calcula a proporcao exata de bicarbonato de sodio e fermento em po para a sua receita. Neutraliza ingredientes acidos como leitelho e iogurte, evita o sabor residual metalico e obtenha uma fermentacao perfeita todas as vezes.',
  faqTitle: 'Perguntas Frequentes',
  ui: {
    title: "Neutralizador Acido Fermento",
    subtitle: "Estequiometria precisa para uma fermentacao e sabor perfeitos em pastelaria",
    flourLabel: "Peso da Farinha",
    addAcidLabel: "Adicionar Ingrediente Acido",
    weightLabel: "Peso",
    removeButton: "Remover",
    bakingSodaNeeded: "Bicarbonato Neutralizado",
    requiredBakingPowder: "Fermentacao Alvo",
    providedBakingPowderEquivalent: "Fermentacao do Bicarbonato",
    boosterBakingPowder: "Fermento em Po Booster Extra",
    resultsTitle: "Agentes Levedantes Calculados",
    statusBalanced: "Equilibrado",
    statusAcidic: "Excesso de Acido",
    statusAlkaline: "Excesso de Base",
    gramsUnit: "g",
    ouncesUnit: "oz",
    teaspoonsUnit: "colher de cha",
    scaleBalanceTitle: "Balanca de pH Virtual",
    acidListTitle: "Ingredientes Acidos",
    unitLabel: "Sistema de Medida",
    metricUnit: "Metrico (g)",
    imperialUnit: "Imperial (oz)",
    acid_buttermilk: "Leitelho",
    acid_yogurt: "Iogurte",
    acid_sour_cream: "Creme Azedo",
    acid_honey: "Mel",
    acid_molasses: "Melaco",
    acid_cocoa: "Cacau em Po Natural",
    acid_lemon_juice: "Sumo de Limao",
    acid_vinegar: "Vinagre",
    stoichiometryBadge: "Estequiometria de pH",
    simulateSodaLabel: "Simular Bicarbonato Adicionado",
    autoBalanceBtn: "Auto-Equilibrar",
    sodaAddedLabel: "Bicarbonato Adicionado"
  },
  faq,
  howTo,
  seo: [
    {
      type: 'summary',
      title: 'Pontos Chave para uma Fermentacao Perfeita',
      items: [
        'O bicarbonato precisa de acido para se ativar; sem ele, o seu produto de pastelaria tera sabor a sabao e metalico',
        'O fermento em po e autoneutralizante e fornece poder levedante extra como booster',
        'O objetivo padrao e 4% do peso da farinha em equivalente de fermento em po para uma fermentacao adequada',
        'Use a tabela de neutralizacao abaixo para associar os seus ingredientes acidos a quantidade correta de bicarbonato'
      ]
    },
    {
      type: 'title',
      text: 'A Quimica dos Agentes Levedantes na Pastelaria',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'A levedacao quimica depende de <strong>reacoes de neutralizacao acido-base</strong> para produzir dioxido de carbono (CO2), que fica retido na matriz da massa, fazendo-a crescer durante a cozedura. Alcancar a proporcao correta entre o bicarbonato de sodio e os ingredientes acidos e crucial. <strong>Bicarbonato em excesso</strong> deixa residuos alcalinos nao reagidos, que conferem um sabor a sabao e metalico e descoloracao amarela. <strong>Acido em excesso</strong> pode resultar num bolo denso e achatado com pouco volume.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '3-4x',
          label: 'Bicarbonato mais forte que fermento em po',
          icon: 'mdi:flash'
        },
        {
          value: '4%',
          label: 'Fermentacao alvo (% peso farinha)',
          icon: 'mdi:target'
        },
        {
          value: '1/4 colher de cha',
          label: 'Bicarbonato por 120g leitelho/iogurte',
          icon: 'mdi:spoon-sugar'
        },
        {
          value: '0,0125',
          label: 'Taxa de neutralizacao (acidos lacteos)',
          icon: 'mdi:scale-balance'
        }
      ]
    },
    {
      type: 'title',
      text: 'Bicarbonato vs. Fermento em Po: A Comparacao Completa',
      level: 3
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Bicarbonato de Sodio',
          icon: 'mdi:flask-outline',
          description: 'Bicarbonato de sodio puro (NaHCO3). Uma base alcalina forte que requer um acido externo para se ativar e produzir CO2.',
          points: [
            '3-4x mais potente que o fermento em po',
            'Precisa de acido (leitelho, iogurte, sumo de limao) para reagir',
            'O excesso causa sabor a sabao e metalico e miolo amarelo',
            'Aumenta o pH; realca o dourado Maillard nas bolachas',
            'Acao simples: liberta CO2 imediatamente ao contacto com liquidos'
          ]
        },
        {
          title: 'Fermento em Po',
          icon: 'mdi:flask-round-bottom-outline',
          description: 'Um sistema levedante completo contendo bicarbonato + sais acidos secos + amido. Autoneutralizante e fiavel.',
          highlight: true,
          points: [
            'Contem o seu proprio acido (fosfato monocálcico, SAP)',
            'Dupla acao: liberta CO2 quando misturado E quando aquecido',
            'Sem sabor residual metalico; pH ja equilibrado',
            'Mais fraco por grama; usar 3-4x mais para igualar o bicarbonato',
            'Ideal como booster quando o bicarbonato sozinho nao consegue levedar toda a farinha'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Ingrediente Acido', 'Peso Padrao', 'Bicarbonato Neutralizado', 'Taxa Neutralizacao'],
      rows: [
        ['Leitelho / Iogurte / Creme Azedo', '120g (1/2 Cup)', '1,5g (1/4 colher de cha)', '0,0125'],
        ['Sumo de Limao / Vinagre', '15g (1 colher de sopa)', '1,5g (1/4 colher de cha)', '0,1000'],
        ['Cacau em Po Natural', '80g (1 Cup)', '3,0g (1/2 colher de cha)', '0,0375'],
        ['Mel', '340g (1 Cup)', '3,0g (1/2 colher de cha)', '0,0088'],
        ['Melaco', '328g (1 Cup)', '3,0g (1/2 colher de cha)', '0,0091']
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Resolucao de Problemas: A Sua Fermentacao Esta Desiquilibrada?',
      badge: 'Verificacao Rapida',
      html: '<strong>Se o seu bolo abateu:</strong> Acido em excesso ou pouco levedante no geral; o CO2 escapou antes da estrutura se fixar.<br/><br/><strong>Se o seu bolo esta denso e achatado:</strong> Acido em excesso sem bicarbonato suficiente para o neutralizar, ou poder levedante total insuficiente para o peso da farinha.<br/><br/><strong>Se o seu bolo sabe a sabao ou metal:</strong> Excesso de bicarbonato nao reagido; adicione mais ingredientes acidos ou reduza o bicarbonato.<br/><br/><strong>Se o seu bolo tem manchas amarelas:</strong> Sinal classico de grumos de bicarbonato nao dissolvidos e nao reagidos; peneire o bicarbonato com a farinha na proxima vez.'
    },
    {
      type: 'title',
      text: 'Como Equilibrar os Agentes Levedantes e Evitar o Sabor Metalico',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Para obter sabor e fermentacao otimos, siga este processo: <strong>Primeiro</strong>, determine a quantidade de bicarbonato necessaria para neutralizar completamente os componentes acidos da sua massa usando a tabela acima. <strong>Depois</strong>, converta esse bicarbonato no seu equivalente em fermento em po (multiplique por 4) e compare-o com o poder levedante total necessario para a sua farinha; tipicamente <strong>4% do peso da farinha</strong> em equivalente de fermento em po. <strong>Se houver um deficit</strong>, adicione o poder levedante restante na forma de fermento em po neutro como booster. A nossa calculadora faz tudo isto automaticamente.'
    },
    {
      type: 'list',
      icon: 'mdi:alert-circle-outline',
      items: [
        'Nunca substitua bicarbonato 1:1 por fermento em po; o bicarbonato e 3-4x mais potente e precisa de acido',
        'Peneire sempre o bicarbonato com os ingredientes secos para evitar grumos amargos',
        'O cacau alcalino NAO e acido; use cacau em po natural se depender do cacau como acido',
        'Mel e melaco sao fracamente acidos; precisam de muito menos bicarbonato por grama do que o sumo de limao',
        'Trabalhe rapidamente apos misturar: a levedacao quimica comeca a reagir imediatamente ao contacto com liquidos'
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Taxa de Neutralizacao',
          definition: 'A proporcao de bicarbonato necessaria para neutralizar completamente um determinado peso de ingrediente acido. Taxas mais baixas significam que o ingrediente e menos acido por grama.'
        },
        {
          term: 'Poder Levedante',
          definition: 'A quantidade total de CO2 que um agente levedante pode produzir. Medido em equivalentes de fermento em po, onde 4% do peso da farinha e o objetivo padrao para bolos e muffins.'
        },
        {
          term: 'Fermento em Po de Dupla Acao',
          definition: 'Fermento em po que liberta CO2 em duas fases: primeiro quando misturado com liquidos a temperatura ambiente, e depois quando exposto ao calor do forno. Proporciona uma fermentacao mais fiavel.'
        },
        {
          term: 'Reacao de Maillard',
          definition: 'Uma reacao quimica entre aminoacidos e acucares redutores que escurece os alimentos e cria sabores complexos. Potenciada por um pH mais alto devido ao excesso de bicarbonato; desejavel em bolachas, indesejavel em bolos delicados.'
        },
        {
          term: 'Equilibrio do pH',
          definition: 'A medida da acidez ou alcalinidade da massa. Um pH neutro (cerca de 7) significa que todo o bicarbonato reagiu com todo o acido. Ligeiramente alcalino favorece o dourado; acido favorece a maciez.'
        }
      ]
    },
    {
      type: 'tip',
      html: '<strong>Dourado e pH:</strong> Embora a neutralizacao completa seja essencial para o sabor, uma massa ligeiramente alcalina (devido a um pequeno excesso de bicarbonato) pode ser desejavel em bolos de chocolate e bolachas. Um pH mais alto realca o dourado de Maillard, produzindo cores mais escuras, bordas mais crocantes e notas caramelizadas mais profundas. Para bolos delicados de baunilha, procure uma neutralizacao exata para preservar um sabor puro e limpo.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
