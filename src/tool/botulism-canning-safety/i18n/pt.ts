import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Seguranca em Conservas Botulismo Morte Termica";
const description = "Calcule a reducao termica de esporos e a letalidade de esterilizacao F0 para Clostridium botulinum. Avalie as zonas de seguranca em conservas de baixa acidez e acidas.";
const faq = [
  {
    question: "Por que o Clostridium botulinum e uma grande preocupacao em conservas caseiras?",
    answer: "Clostridium botulinum e uma bacteria anaerobia formadora de esporos que produz a toxina botulinica, uma das substancias biologicas mais letais conhecidas. Os esporos sao extremamente resistentes ao calor e podem sobreviver em condicoes anaerobicas dentro de frascos selados se as temperaturas forem insuficientes."
  },
  {
    question: "Qual e a importancia critica do pH 4.6 na conservacao de alimentos?",
    answer: "Alimentos com pH abaixo de 4.6 sao classificados como acidos. Nesses ambientes, os esporos de Botulinum nao podem germinar nem produzir toxinas. Para alimentos com pH de 4.6 ou superior, o enlatamento sob pressao e obrigatorio para atingir temperaturas acima de 116 graus Celsius e destruir os esporos."
  },
  {
    question: "O que e o valor de letalidade de esterilizacao F0?",
    answer: "O valor F0 mede o tempo de esterilizacao equivalente a 121.11 graus Celsius. Um processo padrao de esterilizacao para alimentos de baixa acidez requer um valor F0 de 3.0 minutos ou mais, representando uma reducao decimal de doze na populacao de esporos."
  },
  {
    question: "Por que nao posso usar um banho maria para alimentos de baixa acidez?",
    answer: "O enlatamento em banho maria atinge apenas o ponto de ebulicao (100 graus Celsius). Essa temperatura e insuficiente para matar os esporos termorresistentes de Clostridium botulinum em alimentos de baixa acidez. Os esporos sobrevivem e produzem toxina a temperatura ambiente."
  }
];

const howTo = [
  {
    name: "Insira o nivel de acidez do alimento",
    text: "Determine e insira o valor de pH dos seus ingredientes. Se o pH for igual ou superior a 4.6, o alimento e de baixa acidez."
  },
  {
    name: "Selecione a tecnica de enlatamento",
    text: "Escolha entre enlatamento em banho maria ou enlatamento sob pressao de acordo com seu equipamento de conservacao."
  },
  {
    name: "Defina temperatura e duracao",
    text: "Insira a temperatura de processamento e o tempo em minutos que os frascos permanecem nessa temperatura."
  },
  {
    name: "Avalie os diagnosticos de seguranca",
    text: "Verifique o valor F0 resultante, a contagem de reducao decimal de esporos e o indicador de zona de seguranca para confirmar a conformidade."
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
  slug: 'seguranca-conservas-botulismo',
  title: 'Calculadora de Seguranca em Conservas Botulismo',
  description: 'Calcule a reducao termica de esporos e a letalidade de esterilizacao F0 para Clostridium botulinum. Avalie as zonas de seguranca em conservas de baixa acidez e acidas.',
  faqTitle: 'Perguntas Frequentes',
  ui: {
    title: "Monitor de Autoclave para Conservas",
    subtitle: "Diagnosticos de morte termica e avaliador de seguranca botulinica",
    methodLabel: "Metodo de Enlatamento",
    waterBath: "Enlatamento em Banho Maria",
    pressureCanner: "Enlatamento sob Pressao",
    tempLabel: "Temperatura de Enlatamento",
    timeLabel: "Tempo de Processamento",
    phLabel: "pH do Alimento",
    f0Label: "Valor de Letalidade F0",
    dLabel: "Valor D Calculado",
    sporesLabel: "Populacao de Esporos",
    statusSafe: "Esterilizacao Completa",
    statusMarginal: "Esterilizacao Marginal",
    statusUnsafe: "Alto Risco de Botulismo",
    statusSafeDesc: "A letalidade termica excede o F0 alvo de 3.0 minutos. Os esporos estao totalmente desativados.",
    statusMarginalDesc: "O processo atinge desativacao parcial mas permanece abaixo do padrao de seguranca 12D. Ajuste o tempo ou a temperatura.",
    statusUnsafeDesc: "O processo nao desativa Clostridium botulinum. Alimentos de baixa acidez em banho maria permanecem perigosos.",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "min",
    logReductionLabel: "Reducao Decimal",
    dValueUnit: "minutos",
    indicatorSectionTitle: "Indicadores de Diagnostico",
    visualizerSectionTitle: "Reducao de Esporos",
    f0Tooltip: "Tempo de esterilizacao equivalente em minutos a 121.11°C. O limite seguro e 3.0 ou superior.",
    dTooltip: "Tempo de reducao decimal: duracao em minutos necessaria para destruir 90% dos esporos na temperatura atual.",
    logReductionTooltip: "Numero de reducoes decimais (fator 10). Uma reducao 12D e o padrao de seguranca.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Mecanismos Cientificos do Processamento Termico e da Cinetica de Desativacao de Esporos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O processamento termico em conservas garante a esterilidade comercial ao destruir microrganismos patogenicos e de deterioracao. O foco principal das diretrizes de seguranca na conservacao de alimentos de baixa acidez e o Clostridium botulinum. Os esporos de Botulinum sao altamente resistentes ao calor em comparacao com as celulas vegetativas. Desativar esses esporos requer um processo de tempo de morte termica que aplica alta temperatura durante uma duracao calculada. A relacao matematica entre temperatura e taxa de desativacao e expressa atraves do tempo de reducao decimal (valor D) e do fator de dependencia de temperatura (valor z).',
    },
    {
      type: 'title',
      text: 'Classificacao dos Alimentos e o Crucial Limiar de Seguranca pH 4.6',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um valor de pH de 4.6 e a linha divisoria para a seguranca na conservacao. Alimentos acidos abaixo de pH 4.6 inibem naturalmente a germinacao e a producao de toxina dos esporos de Botulinum. Para esses alimentos, o processamento a 100 graus Celsius em banho maria fervente e suficiente. No entanto, alimentos de baixa acidez acima de pH 4.6 devem passar por enlatamento sob pressao para elevar a temperatura do vapor e obter a destruicao termica completa dos esporos. A tabela abaixo detalha as classificacoes e metodos de enlatamento para ingredientes comuns:',
    },
    {
      type: 'table',
      headers: ['Grupo Alimentar', 'Faixa de pH', 'Metodo de Conservacao Exigido', 'Exemplos Comuns'],
      rows: [
        ['Alta Acidez', 'Abaixo de 4.0', 'Enlatamento em Banho Maria', 'Macas, Frutas Vermelhas, Citricos, Pesegos, Picles'],
        ['Acidificados ou Acidez Media', '4.0 a 4.6', 'Banho Maria com Ajuste de Acido', 'Tomates, Figos, Peras'],
        ['Baixa Acidez', '4.6 e acima', 'Enlatamento sob Pressao Obrigatorio', 'Carnes, Frutos do Mar, Feijoes, Milho, Batatas, Sopas'],
      ],
    },
    {
      type: 'title',
      text: 'Ajustes de Altitude e Correcoes de Seguranca do Ponto de Ebulicao',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A medida que a altitude aumenta, a pressao atmosferica diminui, fazendo com que o ponto de ebulicao da agua caia abaixo de 100 graus Celsius. No enlatamento em banho maria, essa temperatura mais baixa aumenta o valor D dos esporos, exigindo tempos de processamento mais longos. No enlatamento sob pressao, as configuracoes do manometro de mostrador ou de peso devem ser aumentadas para manter a temperatura interna de esterilizacao alvo. Abaixo esta o guia de referencia para pontos de ebulicao e os ajustes necessarios do enlatamento sob pressao:',
    },
    {
      type: 'table',
      headers: ['Faixa de Altitude', 'Ponto de Ebulicao da Agua', 'Pressao Exigida Manometro de Mostrador', 'Pressao Exigida Manometro de Peso'],
      rows: [
        ['0 a 300 metros', '100.0 °C', '11 PSI (121 °C)', '10 PSI (121 °C)'],
        ['300 a 600 metros', '99.0 °C', '11 PSI (121 °C)', '15 PSI (121 °C)'],
        ['600 a 900 metros', '98.0 °C', '12 PSI (121 °C)', '15 PSI (121 °C)'],
        ['900 a 1200 metros', '97.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1200 a 1500 metros', '96.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1500 a 2000 metros', '94.5 °C', '14 PSI (121 °C)', '15 PSI (121 °C)'],
      ],
    },
    {
      type: 'title',
      text: 'Por que o Conceito de Reducao de Esporos 12D Previne o Botulismo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A destruicao bacteriana pelo calor e logaritmica. O valor D representa o tempo necessario a uma temperatura especifica para destruir 90% da populacao de esporos, o que equivale a uma reducao logaritmica decimal. O padrao de referencia para Clostridium botulinum e um valor D de 0.21 minutos a 121.11 graus Celsius. Para atingir altas margens de seguranca, os padroes comerciais exigem um processo de reducao decimal de doze (12D), o que significa que a populacao de esporos e reduzida por doze fatores de dez. Isso produz um valor F0 alvo de 3.0 minutos, que garante a seguranca em alimentos de baixa acidez.',
    },
    {
      type: 'title',
      text: 'Guia Pratico de Enlatamento Caseiro e Dicas de Seguranca',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Sempre acidifique tomates com suco de limao ou acido citrico antes do processamento em banho maria, pois seu pH natural flutua proximo ao limiar critico de 4.6.',
        'Nunca reduza os tempos de processamento ou diminua as temperaturas. A cinetica de morte termica e logaritmica e pequenos ajustes podem permitir que os esporos sobrevivam.',
        'Certifique se de que os manometros de mostrador das enlatadoras sob pressao sejam testados anualmente quanto a precisao, pois leituras de pressao incorretas comprometem diretamente as temperaturas internas de esterilizacao.',
        'Compense as diferencas de altitude ajustando os tempos de processamento em banhos maria ou aumentando as configuracoes de PSI nas enlatadoras sob pressao.',
        'Evite enlatar receitas mistas contendo ingredientes de baixa acidez como carnes ou feijoes em uma enlatadora de banho maria, mesmo que a receita geral contenha acido.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
