import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Monitor de Ponto de Fumaça do Óleo: Estimador de Vida Útil e Degradação do Óleo de Fritura';
const description = 'Monitore a qualidade do óleo de fritura e estime a queda atual do ponto de fumaça. Acompanhe usos, temperaturas e tipos de alimentos para prevenir o acúmulo nocivo de compostos polares.';

const faq = [
  {
    question: 'Por que o ponto de fumaça do óleo de fritura diminui com o tempo?',
    answer: 'Cada vez que o óleo é aquecido a temperaturas de fritura, a degradação térmica, a hidrólise e a oxidação decompõem os triglicerídeos em ácidos graxos livres (AGL), monoacilgliceróis e diacilgliceróis. Esses produtos de decomposição têm um ponto de ebulição e de fumaça muito mais baixo do que os triglicerídeos intactos, fazendo com que o óleo fume a temperaturas mais baixas com o uso repetido.',
  },
  {
    question: 'O que são compostos polares e por que são regulamentados?',
    answer: 'Os compostos polares (TPC) são os produtos de degradação formados durante a fritura. Quando excedem 25% do peso do óleo, o óleo é considerado degradado, oxidado e prejudicial ao consumo, causando sabores desagradáveis e potenciais riscos cardiovasculares. Muitos países europeus exigem legalmente o descarte do óleo de fritura quando o TPC excede 25%.',
  },
  {
    question: 'Como o empanamento ou a farinha afetam a degradação do óleo?',
    answer: 'Empanamentos, massas líquidas e farinha solta liberam partículas de alimentos no óleo quente. Essas partículas carbonizam rapidamente em temperaturas acima de 180 graus Celsius, liberando ácidos graxos livres e atuando como catalisadores que aceleram a degradação térmica. Amidos limpos como batatas degradam o óleo muito mais lentamente.',
  },
  {
    question: 'Qual é o limite seguro para reutilização do óleo?',
    answer: 'Como regra geral, óleos refinados para altas temperaturas, como canola ou amendoim, podem ser reutilizados de 5 a 8 vezes em condições limpas. No entanto, óleos não refinados ou óleos expostos a temperaturas acima de 190 graus Celsius ou a alimentos empanados devem ser descartados após 1 a 3 usos.',
  },
];

const howTo = [
  {
    name: 'Selecione o Tipo de Óleo de Fritura',
    text: 'Escolha seu óleo na lista do banco de dados. Óleos refinados para altas temperaturas têm um ponto de fumaça inicial mais alto do que as opções não refinadas.',
  },
  {
    name: 'Acompanhe os Ciclos de Fritura',
    text: 'Informe o número total de sessões de fritura pelas quais o lote atual de óleo passou.',
  },
  {
    name: 'Insira a Temperatura de Fritura',
    text: 'Ajuste o controle deslizante para corresponder à temperatura média das suas sessões de fritura. Temperaturas acima de 180 graus Celsius aceleram a decomposição.',
  },
  {
    name: 'Identifique o Tipo de Revestimento do Alimento',
    text: 'Especifique se você está fritando amidos limpos ou alimentos enfarinhados/empanados que deixam resíduos carbonizados.',
  },
  {
    name: 'Verifique o Ponto de Fumaça e o Status de Descarte',
    text: 'Analise o ponto de fumaça degradado e o indicador de descarte. Descarte imediatamente se a saúde do óleo entrar na zona crítica.',
  },
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent = {
  slug: 'monitor-ponto-fumaca-oleo',
  title: 'Monitor de Ponto de Fumaça do Óleo',
  description: 'Monitore a qualidade do óleo de fritura e estime a queda atual do ponto de fumaça. Acompanhe usos, temperaturas e tipos de alimentos para prevenir o acúmulo nocivo de compostos polares.',
  faqTitle: 'Perguntas Frequentes',
  ui: {
    oilPresetLabel: 'Tipo de Óleo de Fritura',
    presetAvocadoRefined: 'Óleo de Abacate (Refinado)',
    presetSunflowerRefined: 'Óleo de Girassol (Refinado)',
    presetPeanutRefined: 'Óleo de Amendoim (Refinado)',
    presetCanolaRefined: 'Óleo de Canola (Refinado)',
    presetOliveEV: 'Azeite de Oliva Extra Virgem',
    presetOlivePomace: 'Óleo de Bagaço de Oliva',
    presetCoconutUnrefined: 'Óleo de Coco (Não Refinado)',
    presetSunflowerUnrefined: 'Óleo de Girassol (Não Refinado)',
    usesLabel: 'Ciclos de Fritura (Usos)',
    tempLabel: 'Temperatura de Fritura',
    foodTypeLabel: 'Preparação / Revestimento do Alimento',
    optionStarch: 'Amido Limpo (Batatas, Batatas Fritas)',
    optionBreading: 'Alimentos Enfarinhados, à Milanesa ou Empanados',
    baseSmokePointLabel: 'Ponto de Fumaça Inicial',
    currentSmokePointLabel: 'Ponto de Fumaça Degradado',
    polarCompoundsLabel: 'Compostos Polares (TPC)',
    polymerizationLabel: 'Saúde de Polimerização do Óleo',
    statusLabel: 'Perfil de Segurança do Óleo',
    statusGood: 'SEGURO PARA REUTILIZAR',
    statusCaution: 'CUIDADO - FILTRAR EM BREVE',
    statusDiscard: 'DESCARTAR IMEDIATAMENTE',
    adviceGood: 'As propriedades do óleo estão estáveis. Continue fritando, mas filtre os resíduos de alimentos após o resfriamento.',
    adviceCaution: 'A degradação começou. O ponto de fumaça diminuiu. Recomendamos filtrar e usar apenas mais uma vez.',
    adviceDiscard: 'Degradação crítica atingida. Alta concentração de compostos polares. Descarte para prevenir rancificação e riscos à saúde.',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'A Química da Fritura por Imersão: Por que os Óleos se Degradam',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A fritura por imersão é uma das técnicas culinárias mais intensas quimicamente. Quando o alimento é submerso em óleo a altas temperaturas (tipicamente entre 160 e 190 graus Celsius), o óleo é exposto simultaneamente ao calor, à umidade do alimento e ao oxigênio do ar. Isso desencadeia três reações químicas distintas: hidrólise (a água quebrando ligações éster), oxidação (o oxigênio criando hidroperóxidos) e polimerização (moléculas degradadas se unindo em cadeias espessas e viscosas). À medida que essas reações progridem, a concentração de compostos polares totais (TPC) aumenta e a temperatura na qual o óleo começa a se decompor e fumegar diminui significativamente.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '25% TPC', label: 'Limite Legal de Descarte', icon: 'mdi:alert-octagon' },
        { value: '180°C', label: 'Limite Crítico de Temperatura', icon: 'mdi:thermometer-alert' },
        { value: '2.2x', label: 'Taxa de Decaimento por Empanamento', icon: 'mdi:chart-timeline-variant' },
        { value: 'AGL', label: 'Causa: Ácidos Graxos Livres', icon: 'mdi:molecule' },
      ],
    },
    {
      type: 'title',
      text: 'Compostos Polares e Regulamentações Sanitárias',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Os Compostos Polares Totais (TPC) servem como o padrão internacional para medir o nível de degradação das gorduras de fritura. Em cozinhas profissionais, o uso de óleo com concentração de TPC superior a 25% é legalmente proibido em vários países por questões de segurança. Esses compostos polares são inibidores de absorção, reduzem a eficiência de cozimento e degradam a crocância da crosta frita. Mais importante ainda, consumir óleo oxidado regularmente contribui para a ingestão de radicais livres e compostos tóxicos associados a problemas cardiovasculares.',
    },
    {
      type: 'title',
      text: 'Comparando Tipos de Óleo: Pontos de Fumaça Iniciais',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Óleos Refinados (Alta Temperatura)',
          icon: 'mdi:shield-check',
          description: 'Óleos processados para remover compostos voláteis, ácidos graxos livres e impurezas. Possuem pontos de fumaça iniciais excepcionalmente altos.',
          points: ['Abacate Refinado: 270°C / 518°F', 'Girassol Refinado: 232°C / 450°F', 'Amendoim Refinado: 232°C / 450°F', 'Alta resistência à degradação inicial'],
        },
        {
          title: 'Óleos Não Refinados (Baixa Temperatura / Saborosos)',
          icon: 'mdi:leaf',
          description: 'Óleos prensados a frio ou virgens contendo altas quantidades de elementos naturais, minerais e ácidos graxos livres.',
          highlight: true,
          points: ['Azeite Extra Virgem: 190°C / 374°F', 'Coco Não Refinado: 177°C / 350°F', 'Girassol Não Refinado: 107°C / 225°F', 'Degrada-se extremamente rápido sob calor'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Tabela de Referência: Ponto de Fumaça e Máximo de Reutilização do Óleo de Fritura',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Variedade de Óleo', 'Ponto de Fumaça Inicial (°C)', 'Ponto de Fumaça Inicial (°F)', 'Estado / Processamento', 'Usos Máximos Recomendados'],
      rows: [
        ['Óleo de Abacate (Refinado)', '270°C', '518°F', 'Refinado', '10 a 12 usos'],
        ['Óleo de Bagaço de Oliva', '238°C', '460°F', 'Refinado', '8 a 10 usos'],
        ['Óleo de Girassol (Refinado)', '232°C', '450°F', 'Refinado', '6 a 8 usos'],
        ['Óleo de Amendoim (Refinado)', '232°C', '450°F', 'Refinado', '6 a 8 usos'],
        ['Óleo de Canola (Refinado)', '204°C', '400°F', 'Refinado', '5 a 7 usos'],
        ['Azeite de Oliva Extra Virgem', '190°C', '374°F', 'Prensado a Frio', '2 a 3 usos'],
        ['Óleo de Coco (Não Refinado)', '177°C', '350°F', 'Não Refinado', '1 a 2 usos'],
        ['Óleo de Girassol (Não Refinado)', '107°C', '225°F', 'Não Refinado', 'Não usar para fritura por imersão'],
      ],
    },
    {
      type: 'title',
      text: 'Sinais Críticos de Alerta de Óleo Degradado',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Perigo: Quando o Óleo de Fritura se Torna Tóxico',
      html: 'Não continue reutilizando o óleo se observar qualquer um dos seguintes sintomas: <strong>cheiro rançoso ou de sabão</strong>, uma cor escura e turva, ou <strong>formação excessiva de espuma</strong> ao redor do alimento. Se o óleo começar a fumegar em temperaturas normais de cozimento (170-180°C), isso indica que o ponto de fumaça despencou devido ao acúmulo extremo de Ácidos Graxos Livres (AGL). Cozinhar com óleo degradado transfere compostos polares tóxicos e elementos cancerígenos para os alimentos, prejudicando tanto o sabor quanto a saúde.',
    },
    {
      type: 'title',
      text: 'Como Prolongar a Qualidade do Óleo de Fritura',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Filtre os Resíduos Carbonizados Imediatamente',
      html: 'Fritar massas líquidas ou alimentos enfarinhados deixa micropartículas que se depositam no fundo da fritadeira. Essas partículas continuam a carbonizar durante o cozimento, atuando como catalisadores que aceleram a degradação do óleo. Para desacelerar esse processo, sempre retire a espuma da superfície durante a fritura e <strong>filtre o óleo resfriado</strong> através de uma peneira fina, pano de algodão ou filtro de café após cada sessão de fritura. Armazene o óleo filtrado em um recipiente de vidro selado em um local escuro e fresco.',
    },
    {
      type: 'title',
      text: 'Melhores Práticas para Fritura por Imersão',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Seque bem as superfícies dos alimentos</strong> - O excesso de umidade desencadeia hidrólise rápida, decompondo o óleo em ácidos graxos livres.',
        '<strong>Evite salgar antes da fritura</strong> - O sal atua como catalisador que acelera a oxidação do óleo; tempere os alimentos imediatamente após removê-los do óleo quente.',
        '<strong>Mantenha temperaturas ideais</strong> - Fique entre 170°C e 180°C. Temperaturas mais altas aceleram a decomposição térmica, enquanto temperaturas mais baixas fazem o alimento absorver gordura em excesso.',
        '<strong>Não complete óleo velho</strong> - Misturar óleo fresco com óleo degradado acelera a decomposição do óleo novo em vez de restaurá-lo.',
      ],
    },
    {
      type: 'title',
      text: 'Glossário de Fritura por Imersão e Degradação Lipídica',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Ponto de Fumaça', definition: 'A temperatura na qual um óleo ou gordura começa a se decompor continuamente e produzir fumaça azulada visível, liberando acroleína.' },
        { term: 'Compostos Polares Totais (TPC)', definition: 'O indicador padrão global para a degradação do óleo, representando a porcentagem total em peso de compostos oxidados, AGL e polímeros.' },
        { term: 'Hidrólise', definition: 'Uma reação química na qual as moléculas de água decompõem os triglicerídeos em ácidos graxos livres e glicerol. Desencadeada pela umidade dos alimentos.' },
        { term: 'Polimerização', definition: 'O processo no qual moléculas de óleo danificadas pelo calor se unem para formar grandes estruturas macromoleculares, aumentando a viscosidade do óleo.' },
        { term: 'Ácidos Graxos Livres (AGL)', definition: 'Ácidos carboxílicos liberados dos triglicerídeos durante a hidrólise. Reduzem diretamente o ponto de fumaça inicial da gordura.' },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
