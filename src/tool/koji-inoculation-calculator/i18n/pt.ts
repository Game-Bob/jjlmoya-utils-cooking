import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Inoculação e Hidratação de Koji";
const description = "Calcule o teor de umidade perfeito, a dosagem de inoculação de esporos e a temperatura de incubação para fazer koji em casa. Evite lotes falhos com nossa calculadora gratuita de inoculação e hidratação de koji.";
const faq = [
  {
    question: "Qual é o teor de umidade ideal para cozinhar substrato de koji?",
    answer: "O teor de umidade total ideal para arroz ou cevada cozidos no vapor ao inocular Koji está entre 30% e 35%. Isso corresponde a um peso cozido no vapor de aproximadamente 1,35x a 1,40x o peso seco inicial."
  },
  {
    question: "Quanto pó de esporos (tane-koji) eu preciso?",
    answer: "A taxa de inoculação padrão é de 1 grama de mistura de esporos padrão por 1 quilograma de substrato seco. Se usar esporos concentrados, você precisa de menos (0,5 g), enquanto misturas diluídas requerem mais (2,0 g)."
  },
  {
    question: "Por que o controle de temperatura é crítico durante a incubação do koji?",
    answer: "Aspergillus oryzae cresce de forma ótima entre 28C e 34C. Se a temperatura exceder 38C, o fungo pode superaquecer, parar de crescer ou produzir esporos verdes/pretos indesejados. Abaixo de 20C, o crescimento diminui significativamente."
  },
  {
    question: "O que acontece durante a fase exotérmica?",
    answer: "Após 18 a 24 horas de incubação, o koji começa a crescer rapidamente e gera seu próprio calor. Durante esse pico exotérmico, você deve mexer o substrato e reduzir o calor do incubador para evitar superaquecimento."
  }
];

const howTo = [
  {
    name: "Insira o peso seco do substrato",
    text: "Insira o peso seco inicial do seu arroz ou cevada para estabelecer os limites de hidratacao desejados."
  },
  {
    name: "Acompanhe o peso cozido no vapor",
    text: "Insira o peso real apos o cozimento no vapor. A calculadora determina a porcentagem de umidade e verifica se esta dentro da faixa ideal de 30-35%."
  },
  {
    name: "Calcule a dosagem de esporos",
    text: "Selecione a potencia dos seus esporos (padrao, concentrada ou diluida) para obter o peso exato de po de esporos para inocular."
  },
  {
    name: "Monitore os parametros de incubacao",
    text: "Ajuste a temperatura e a umidade relativa para simular o crescimento do micelio e revise a curva termica de 48 horas."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
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
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'calculadora-inoculacao-koji',
  title: 'Calculadora de Inoculacao e Hidratacao de Koji',
  description: 'Calcule o teor de umidade perfeito, a dosagem de inoculacao de esporos e a temperatura de incubacao para fazer koji em casa. Evite lotes falhos com nossa calculadora gratuita de inoculacao e hidratacao de koji.',
  faqTitle: 'Perguntas Frequentes',
  ui: {
    title: 'Analisador de Inoculacao de Koji',
    subtitle: 'Otimize os parametros de fermentacao solida do koji',
    dryWeightLabel: 'Peso Seco do Substrato',
    steamedWeightLabel: 'Peso Real Cozido no Vapor',
    targetRangeLabel: 'Faixa de Peso Alvo no Vapor',
    moistureLabel: 'Umidade Atual',
    potencyLabel: 'Potencia dos Esporos',
    standardPotency: 'Esporos Padrao',
    concentratedPotency: 'Concentrado',
    dilutedPotency: 'Mistura Diluida',
    sporeDosageLabel: 'Dosagem de Esporos',
    tempLabel: 'Temperatura do Incubador',
    humidityLabel: 'Umidade Relativa',
    statusIdeal: 'Incubacao Ideal',
    statusSlow: 'Crescimento Lento',
    statusInhibited: 'Inibido / Frio',
    statusOverheating: 'Superaquecimento / Esporulacao',
    timelineTitle: 'Ciclo Termico de Incubacao 48h',
    stage1Name: '0-18h: Aquecimento',
    stage2Name: '18-36h: Pico Exotermico',
    stage3Name: '36-48h: Maturacao'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Como Fazer Koji: A Umidade, Dosagem de Esporos e Temperatura Perfeitas para Aspergillus Oryzae',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Fazer koji em casa requer tres coisas que funcionem corretamente: <strong>hidratacao do substrato</strong>, <strong>densidade de inoculacao de esporos</strong> e <strong>controle da temperatura de incubacao</strong>. Se alguma falhar, seu lote pode superaquecer, nao inocular ou desenvolver o fungo errado. Nossa <strong>calculadora de inoculacao de koji</strong> elimina as conjecturas calculando seu peso alvo no vapor, a dosagem exata de esporos e o status de incubacao em tempo real com base em suas entradas especificas.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '30-35%',
          label: 'Umidade Alvo',
          icon: 'mdi:water-percent'
        },
        {
          value: '1 g/kg',
          label: 'Taxa Padrao de Esporos',
          icon: 'mdi:seed-outline'
        },
        {
          value: '28-34C',
          label: 'Temperatura Ideal',
          icon: 'mdi:thermometer'
        },
        {
          value: '48 h',
          label: 'Incubacao Total',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: 'Por Que o Teor de Umidade Determina a Qualidade do Koji',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'O fator mais importante no cultivo bem-sucedido de koji e a <strong>umidade do substrato</strong>. Quando o arroz ou a cevada sao cozidos no vapor, os granulos de amido gelatinizam e absorvem agua, tornando-se acessiveis as enzimas produzidas por Aspergillus oryzae. A faixa de umidade ideal e estreita: <strong>30% a 35%</strong>. Abaixo de 30%, o micelio nao consegue extrair agua suficiente para crescer e a producao de enzimas estagna. Acima de 35%, os graos ficam pegajosos e se aglomeram, reduzindo a porosidade do ar e sufocando o fungo aerobico.'
    },
    {
      type: 'list',
      items: [
        '<strong>Muito seco (abaixo de 30%):</strong> O crescimento do micelio e atrofiado, a producao de enzimas cai e o koji nunca coloniza completamente o grao.',
        '<strong>Muito umido (acima de 35%):</strong> Os graos grudam, as bolsas de ar colapsam e bacterias ou fungos indesejados podem superar Aspergillus oryzae.',
        '<strong>Faixa alvo (30-35%):</strong> O grao parece firme, os graos individuais se separam facilmente e o micelio se espalha uniformemente dentro de 48 horas.',
        '<strong>Como medir:</strong> Pese seu grao seco, cozinhe no vapor, depois pese novamente. A calculadora calcula sua porcentagem de umidade exata a partir desses dois numeros.'
      ]
    },
    {
      type: 'table',
      headers: ['Tipo de Grao', 'Peso Seco', 'Peso Alvo no Vapor', 'Tempo de Molho', 'Tempo de Vapor'],
      rows: [
        ['Arroz Branco (grao curto)', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['Arroz Branco (grao longo)', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['Cevada Perolizada', '1000 g', '1350-1400 g', '4-8 h', '40-50 min'],
        ['Arroz Integral', '1000 g', '1350-1400 g', '8-12 h', '45-60 min']
      ]
    },
    {
      type: 'title',
      text: 'Inoculacao de Esporos: Quanto Tane-Koji Voce Precisa?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'A densidade de inoculacao afeta diretamente a rapidez com que o fungo coloniza o substrato e o quanto e competitivo contra contaminantes. A taxa padrao e de <strong>1 grama de mistura de esporos por quilograma de substrato seco</strong>, mas isso varia conforme o tipo de esporo.'
    },
    {
      type: 'proscons',
      title: 'Escolhendo Seu Tipo de Esporo',
      items: [
        {
          pro: 'Esporos padrao sao o formato mais comum, tolerantes para iniciantes e bem documentados na literatura de producao caseira.',
          con: 'Maior volume de po por lote e podem conter carga que nao contribui para a inoculacao.'
        },
        {
          pro: 'Esporos concentrados usam metade do po para a mesma inoculacao, tem maior pureza e sao mais economicos para lotes grandes.',
          con: 'Mais faceis de sobredosar, exigem uma balanca precisa (resolucao de 0,01 g) e deixam menos margem para erro se subdosados.'
        },
        {
          pro: 'Misturas diluidas distribuem-se facilmente sobre grandes superficies, sao mais tolerantes com mistura desigual e adequadas para iniciantes que preferem cobertura visivel.',
          con: 'Usam mais po por lote e podem introduzir excesso de amido da carga.'
        }
      ]
    },
    {
      type: 'title',
      text: 'A Curva de Calor Exotermico: Por Que o Koji Gera Seu Proprio Calor',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'A medida que Aspergillus oryzae consome amidos e os transforma em acucares simples, ele gera calor metabolico. Entre as horas <strong>18 e 36</strong> de incubacao, a atividade biologica atinge o pico, produzindo uma onda exotermica que pode elevar a temperatura do leito de grao em 5-10C acima da temperatura ambiente do incubador.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Sinais de Que Seu Koji Esta Superaquecendo',
      html: 'Se a temperatura do leito de grao exceder <strong>38C</strong>, as enzimas do fungo comecam a desnaturar e o fungo muda para o modo reprodutivo, produzindo <strong>esporos verdes ou pretos</strong>. O lote cheirara a amonia em vez de doce e castanha. Voce deve mexer o substrato imediatamente e reduzir a temperatura do incubador para traze-la de volta abaixo de 34C.'
    },
    {
      type: 'tip',
      title: 'O Cronograma de Virada de 12 Horas',
      html: 'A partir da hora 18, quebre o leito de grao e mexa-o a cada 12 horas. Isso libera o calor retido, redistribui a umidade e da ao micelio acesso a oxigenio fresco. Use maos limpas e desinfetadas ou uma colher esteril.'
    },
    {
      type: 'tip',
      title: 'A Umidade Tambem Importa',
      html: 'Mantenha a umidade relativa acima de <strong>65%</strong> durante a incubacao. Abaixo de 40%, o substrato seca e o crescimento para. Acima de 90%, a condensacao pode promover o crescimento bacteriano na superficie do grao.'
    },
    {
      type: 'tip',
      title: 'Confie no Seu Nariz',
      html: 'Koji saudavel cheira a castanhas assadas doces ou cogumelos frescos. Se voce detectar amonia, acidez ou podridao, o lote pode ter superaquecido ou sido contaminado. Remova e descarte o grao afetado imediatamente.'
    },
    {
      type: 'card',
      icon: 'mdi:rice',
      title: 'Producao de Sake e Miso',
      html: 'O arroz inoculado com koji e a base do <strong>sake</strong>, do <strong>miso</strong> e do <strong>amazake</strong>. O controle preciso da umidade garante o desenvolvimento enzimatico adequado para a conversao de amido em acucar.'
    },
    {
      type: 'card',
      icon: 'mdi:soy-sauce',
      title: 'Molho de Soja e Tamari',
      html: 'O koji cultivado em <strong>soja</strong> ou uma mistura de soja e trigo impulsiona a fermentacao que produz molho de soja rico em umami. A temperatura consistente evita sabores desagradaveis.'
    },
    {
      type: 'card',
      icon: 'mdi:shaker-outline',
      title: 'Shio Koji e Garum',
      html: '<strong>Shio koji</strong> (koji fermentado com sal) e <strong>garuns de carne</strong> dependem de grao completamente colonizado. Nossa calculadora garante que seu substrato esteja na janela de umidade ideal antes da inoculacao.'
    },
    {
      type: 'title',
      text: 'Glossario de Incubacao de Koji',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Tane-Koji',
          definition: 'O po de esporos usado para inocular grao cozido no vapor. Tipicamente esporos de Aspergillus oryzae misturados com um carrier de amido como farinha de arroz.'
        },
        {
          term: 'Fase Exotermica',
          definition: 'O periodo entre 18 e 36 horas de incubacao em que Aspergillus oryzae gera calor metabolico suficiente para elevar a temperatura do leito de grao acima dos niveis ambientais.'
        },
        {
          term: 'Gelatinizacao',
          definition: 'O processo de aquecer o amido na presenca de agua para que os granulos inchem e se tornem acessiveis as enzimas amilase produzidas pelo fungo.'
        },
        {
          term: 'Esporulacao',
          definition: 'Quando o fungo muda do crescimento vegetativo para o modo reprodutivo, tornando-se verde ou preto. Isso e desencadeado por estresse termico acima de 38C e estraga o lote para uso culinario.'
        }
      ]
    },
    {
      type: 'summary',
      title: 'Principais Conclusoes para um Koji Perfeito',
      items: [
        'Mire em 30-35% de umidade no grao cozido no vapor. Use a calculadora para encontrar seu peso alvo exato no vapor.',
        'Inocule a 1 g/kg para esporos padrao, 0,5 g/kg para concentrados ou 2 g/kg para misturas diluidas.',
        'Mantenha 28-34C e acima de 65% de umidade durante a incubacao. Mexa a cada 12 horas apos a hora 18.',
        'Observe o pico exotermico em 18-36 horas. Se a temperatura exceder 38C, mexa imediatamente e reduza o calor.',
        'Confie em seus sentidos: aroma doce de castanha = bom koji. Cheiro de amonia ou azedo = superaquecimento ou contaminacao.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
