import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Segurança em Conservas Botulismo Morte Térmica";
const description = "Calcule a redução térmica de esporos e a letalidade de esterilização F0 para Clostridium botulinum. Avalie as zonas de segurança em conservas de baixa acidez e ácidas.";
const faq = [
  {
    question: "Por que o Clostridium botulinum é uma grande preocupação em conservas caseiras?",
    answer: "Clostridium botulinum é uma bactéria anaeróbia formadora de esporos que produz a toxina botulínica, uma das substâncias biológicas mais letais conhecidas. Os esporos são extremamente resistentes ao calor e podem sobreviver em condições anaeróbicas dentro de frascos selados se as temperaturas forem insuficientes."
  },
  {
    question: "Qual é a importância crítica do pH 4.6 na conservação de alimentos?",
    answer: "Alimentos com pH abaixo de 4.6 são classificados como ácidos. Nesses ambientes, os esporos de Botulinum não podem germinar nem produzir toxinas. Para alimentos com pH de 4.6 ou superior, o enlatamento sob pressão é obrigatório para atingir temperaturas acima de 116 graus Celsius e destruir os esporos."
  },
  {
    question: "O que é o valor de letalidade de esterilização F0?",
    answer: "O valor F0 mede o tempo de esterilização equivalente a 121.11 graus Celsius. Um processo padrão de esterilização para alimentos de baixa acidez requer um valor F0 de 3.0 minutos ou mais, representando uma redução decimal de doze na população de esporos."
  },
  {
    question: "Por que não posso usar um banho-maria para alimentos de baixa acidez?",
    answer: "O enlatamento em banho-maria atinge apenas o ponto de ebulição (100 graus Celsius). Essa temperatura é insuficiente para matar os esporos termorresistentes de Clostridium botulinum em alimentos de baixa acidez. Os esporos sobrevivem e produzem toxina a temperatura ambiente."
  }
];

const howTo = [
  {
    name: "Insira o nível de acidez do alimento",
    text: "Determine e insira o valor de pH dos seus ingredientes. Se o pH for igual ou superior a 4.6, o alimento é de baixa acidez."
  },
  {
    name: "Selecione a técnica de enlatamento",
    text: "Escolha entre enlatamento em banho-maria ou enlatamento sob pressão de acordo com seu equipamento de conservação."
  },
  {
    name: "Defina temperatura e duração",
    text: "Insira a temperatura de processamento e o tempo em minutos que os frascos permanecem nessa temperatura."
  },
  {
    name: "Avalie os diagnósticos de segurança",
    text: "Verifique o valor F0 resultante, a contagem de redução decimal de esporos e o indicador de zona de segurança para confirmar a conformidade."
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
  title: 'Calculadora de Segurança em Conservas Botulismo',
  description: 'Calcule a redução térmica de esporos e a letalidade de esterilização F0 para Clostridium botulinum. Avalie as zonas de segurança em conservas de baixa acidez e ácidas.',
  faqTitle: 'Perguntas Frequentes',
  ui: {
    title: "Monitor de Autoclave para Conservas",
    subtitle: "Diagnósticos de morte térmica e avaliador de segurança botulínica",
    methodLabel: "Método de Enlatamento",
    waterBath: "Enlatamento em Banho-Marie",
    pressureCanner: "Enlatamento sob Pressão",
    tempLabel: "Temperatura de Enlatamento",
    timeLabel: "Tempo de Processamento",
    phLabel: "pH do Alimento",
    f0Label: "Valor de Letalidade F0",
    dLabel: "Valor D Calculado",
    sporesLabel: "População de Esporos",
    statusSafe: "Esterilização Completa",
    statusMarginal: "Esterilização Marginal",
    statusUnsafe: "Alto Risco de Botulismo",
    statusSafeDesc: "A letalidade térmica excede o F0 alvo de 3.0 minutos. Os esporos estão totalmente desativados.",
    statusMarginalDesc: "O processo atinge desativação parcial mas permanece abaixo do padrão de segurança 12D. Ajuste o tempo ou a temperatura.",
    statusUnsafeDesc: "O processo não desativa Clostridium botulinum. Alimentos de baixa acidez em banho-maria permanecem perigosos.",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "min",
    logReductionLabel: "Redução Decimal",
    dValueUnit: "minutos",
    indicatorSectionTitle: "Indicadores de Diagnóstico",
    visualizerSectionTitle: "Redução de Esporos",
    f0Tooltip: "Tempo de esterilização equivalente em minutos a 121.11°C. O limite seguro é 3.0 ou superior.",
    dTooltip: "Tempo de redução decimal: duração em minutos necessária para destruir 90% dos esporos na temperatura atual.",
    logReductionTooltip: "Número de reduções decimais (fator 10). Uma redução 12D é o padrão de segurança.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Mecanismos Científicos do Processamento Térmico e da Cinética de Desativação de Esporos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O processamento térmico em conservas garante a esterilidade comercial ao destruir microrganismos patogênicos e de deterioração. O foco principal das diretrizes de segurança na conservação de alimentos de baixa acidez é o Clostridium botulinum. Os esporos de Botulinum são altamente resistentes ao calor em comparação com as células vegetativas. Desativar esses esporos requer um processo de tempo de morte térmica que aplica alta temperatura durante uma duração calculada. A relação matemática entre temperatura e taxa de desativação é expressa através do tempo de redução decimal (valor D) e do fator de dependência de temperatura (valor z).',
    },
    {
      type: 'title',
      text: 'Classificação dos Alimentos e o Crucial Limiar de Segurança pH 4.6',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um valor de pH de 4.6 é a linha divisória para a segurança na conservação. Alimentos ácidos abaixo de pH 4.6 inibem naturalmente a germinação e a produção de toxina dos esporos de Botulinum. Para esses alimentos, o processamento a 100 degrees Celsius em banho-maria fervente é suficiente. No entanto, alimentos de baixa acidez acima de pH 4.6 devem passar por enlatamento sob pressão para elevar a temperatura do vapor e obter a destruição térmica completa dos esporos. A tabela abaixo detalha as classificações e métodos de enlatamento para ingredientes comuns:',
    },
    {
      type: 'table',
      headers: ['Grupo Alimentar', 'Faixa de pH', 'Método de Conservação Exigido', 'Exemplos Comuns'],
      rows: [
        ['Alta Acidez', 'Abaixo de 4.0', 'Enlatamento em Banho-Marie', 'Maçãs, Frutas Vermelhas, Cítricos, Pêssegos, Picles'],
        ['Acidificados ou Acidez Média', '4.0 a 4.6', 'Banho-Marie com Ajuste de Ácido', 'Tomates, Figos, Pêras'],
        ['Baixa Acidez', '4.6 e acima', 'Enlatamento sob Pressão Obrigatório', 'Carnes, Frutos do Mar, Feijões, Milho, Batatas, Sopas'],
      ],
    },
    {
      type: 'title',
      text: 'Ajustes de Altitude e Correções de Segurança do Ponto de Ebulição',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'À medida que a altitude aumenta, a pressão atmosférica diminui, fazendo com que o ponto de ebulição da água caia abaixo de 100 graus Celsius. No enlatamento em banho-maria, essa temperatura mais baixa aumenta o valor D dos esporos, exigindo tempos de processamento mais longos. No enlatamento sob pressão, as configurações do manômetro de mostrador ou de peso devem ser aumentadas para manter a temperatura interna de esterilização alvo. Abaixo está o guia de referência para pontos de ebulição e os ajustes necessários do enlatamento sob pressão:',
    },
    {
      type: 'table',
      headers: ['Faixa de Altitude', 'Ponto de Ebulição da Água', 'Pressão Exigida Manômetro de Mostrador', 'Pressão Exigida Manômetro de Peso'],
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
      text: 'Por que o Conceito de Redução de Esporos 12D Previne o Botulismo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A destruição bacteriana pelo calor é logaritmica. O valor D representa o tempo necessário a uma temperatura específica para destruir 90% da população de esporos, o que equivale a uma redução logarítmica decimal. O padrão de referência para Clostridium botulinum é um valor D de 0.21 minutos a 121.11 graus Celsius. Para atingir altas margens de segurança, os padrões comerciais exigem um processo de redução decimal de doze (12D), o que significa que a população de esporos é reduzida por doze fatores de dez. Isso produz um valor F0 alvo de 3.0 minutos, que garante a segurança em alimentos de baixa acidez.',
    },
    {
      type: 'title',
      text: 'Guia Prático de Enlatamento Caseiro e Dicas de Segurança',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Sempre acidifique tomates com suco de limão ou ácido cítrico antes do processamento em banho-maria, pois seu pH natural flutua próximo ao limiar crítico de 4.6.',
        'Nunca reduza os tempos de processamento ou diminua as temperaturas. A cinética de morte térmica é logarítmica e pequenos ajustes podem permitir que os esporos sobrevivam.',
        'Certifique-se de que os manômetros de mostrador das enlatadoras sob pressão sejam testados anualmente quanto à precisão, pois leituras de pressão incorretas comprometem diretamente as temperaturas internas de esterilização.',
        'Compense as diferenças de altitude ajustando os tempos de processamento em banhos-maria ou aumentando as configurações de PSI nas enlatadoras sob pressão.',
        'Evite enlatar receitas mistas contendo ingredientes de baixa acidez como carnes ou feijões em uma enlatadora de banho-maria, mesmo que a receita geral contenha ácido.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
