import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calculadora de Curvas de Pasteurização Sous Vide';
const description = 'Calcule o tempo exato necessário para uma pasteurização segura do centro contra Salmonella e Listeria no cozimento sous vide, considerando o formato e a espessura da carne.';

const faq = [
  {
    question: 'O que é pasteurização no cozimento sous vide?',
    answer: 'A pasteurização é o processo de aquecer o alimento a uma temperatura específica e mantê-lo ali por tempo suficiente para reduzir os microrganismos patogênicos (como Salmonella, Listeria e E. coli) a níveis seguros e aceitáveis. Diferente da esterilização, ela não destrói todos os esporos bacterianos, mas torna o alimento seguro para consumo.',
  },
  {
    question: 'Por que a espessura da carne afeta tão dramaticamente o tempo de cozimento?',
    answer: 'A transferência de calor nos alimentos é governada pela condução. O tempo necessário para que o centro (ponto mais frio) do alimento atinja a temperatura do banho-maria aumenta quadraticamente com a espessura. Dobrar a espessura de um bife aumenta o tempo de aquecimento em aproximadamente quatro vezes.',
  },
  {
    question: 'Por que 54,4°C (130°F) é considerada a temperatura mínima segura para sous vide?',
    answer: 'Em temperaturas abaixo de 54,4°C, patógenos comuns transmitidos por alimentos, como Salmonella, podem sobreviver e se multiplicar ativamente. Se o alimento for mantido nesta "zona de perigo" por mais de 4 horas, podem se formar toxinas termorresistentes, representando riscos severos à segurança alimentar.',
  },
  {
    question: 'O que é uma redução de 6D ou 6,5D?',
    answer: 'Uma redução D refere-se a uma redução decimal (logarítmica) na população bacteriana. Uma redução de 6,5D significa que 99,99995% do patógeno alvo é eliminado. Por exemplo, se originalmente havia 1.000.000 de bactérias, menos de 1 sobreviveria.',
  },
  {
    question: 'Como a geometria do alimento altera a taxa de aquecimento?',
    answer: 'O calor penetra uma esfera de todas as direções (3 dimensões) e um cilindro pelos lados (2 dimensões), enquanto uma placa plana é aquecida principalmente por cima e por baixo (1 dimensão). Assim, as esferas aquecem mais rápido, seguidas pelos cilindros, com as placas levando o maior tempo.',
  },
];

const howTo = [
  {
    name: 'Defina a temperatura do banho',
    text: 'Ajuste o controle deslizante para corresponder à temperatura do seu banho-maria. Note que temperaturas mais altas pasteurizam exponencialmente mais rápido.',
  },
  {
    name: 'Especifique a espessura da carne',
    text: 'Meça a parte mais grossa da sua carne em milímetros e insira o valor na calculadora.',
  },
  {
    name: 'Selecione o formato geométrico',
    text: 'Escolha se o seu alimento tem o formato de uma placa plana (bife, peito de frango), um cilindro (lombo bovino, ballotine) ou uma esfera (almôndega).',
  },
  {
    name: 'Selecione o patógeno alvo',
    text: 'Escolha Salmonella para segurança padrão em carnes e aves, ou Listeria monocytogenes para pessoas de alto risco ou segurança adicional.',
  },
  {
    name: 'Verifique o tempo total de cozimento',
    text: 'A calculadora mostra o tempo de aquecimento do centro e o tempo de manutenção para letalidade. Some-os para obter a duração total de cozimento seguro.',
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'curvas-pasteurizacao-sous-vide',
  title: 'Curvas de Pasteurização Sous Vide',
  description: 'Calcule o tempo exato necessário para uma pasteurização segura do centro contra Salmonella e Listeria no cozimento sous vide, considerando o formato e a espessura da carne.',
  faqTitle: 'Perguntas Frequentes',
  ui: {
    title: 'Curvas de Pasteurização Sous Vide',
    subtitle: 'Cinética de letalidade térmica e compensação da temperatura do centro',
    bathTempLabel: 'Temperatura do Banho-Maria',
    thicknessLabel: 'Espessura da Carne',
    shapeLabel: 'Geometria da Carne',
    shapeSlab: 'Placa Plana (ex.: Bife, Peito de Frango)',
    shapeCylinder: 'Cilindro (ex.: Lombo, Roulade)',
    shapeSphere: 'Esfera (ex.: Almôndega)',
    pathogenLabel: 'Patógeno Alvo',
    pathogenSalmonella: 'Salmonella (Padrão)',
    pathogenListeria: 'Listeria monocytogenes',
    resultsTitle: 'Tempo de Pasteurização Segura',
    heatingTime: 'Tempo de Aquecimento do Centro',
    lethalityTime: 'Tempo de Letalidade do Patógeno',
    totalTime: 'Tempo Total de Cozimento',
    dangerZoneTitle: 'Zona de Perigo Biológico',
    dangerZoneDesc: 'Temperaturas abaixo de 54,4°C (130°F) não podem pasteurizar alimentos com segurança porque as taxas de reprodução bacteriana podem superar as taxas de morte térmica. Não cozinhe em sous vide abaixo desta temperatura por mais de 4 horas.',
    chartTitle: 'Curva de Redução Bacteriana Logarítmica',
    chartXLabel: 'Tempo (minutos)',
    chartYLabel: 'Redução Logarítmica',
    disclaimer: 'Os cálculos assumem temperatura inicial de 5°C e difusividade térmica de carne magra. Use sempre um termômetro digital calibrado para verificar a temperatura do banho.',
    minutesUnit: 'min',
    mmUnit: 'mm',
    inUnit: 'pol',
    tempUnitC: '°C',
    tempUnitF: '°F',
    systemLabel: 'Sistema de Medida',
    systemMetric: 'Métrico',
    systemImperial: 'Imperial'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Pasteurização Sous Vide: O Guia Completo de Segurança para Cozinheiros Domésticos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A cozinha sous vide transformou as cozinhas domésticas ao tornar acessível a qualquer pessoa com um circulador de imersão bifes impossíveis de passar do ponto. Mas o método esconde uma complexidade crítica: nas temperaturas baixas que produzem aquele tom rosado perfeito de mal passado de ponta a ponta, você está operando milímetros acima do limiar de morte térmica de bactérias perigosas. Este guia explica exatamente como calcular tempos de pasteurização seguros para qualquer corte de carne, a qualquer temperatura, para que nunca mais sirva frango ou peixe mal cozido.',
    },
    {
      type: 'title',
      text: 'Por que a Segurança no Sous Vide é Diferente do Cozimento Tradicional',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quando você sela um peito de frango a 200°C, a superfície atinge temperaturas letais instantaneamente e as bactérias morrem em segundos. O sous vide inverte esse modelo: o banho-maria opera na temperatura final exata que você quer que o alimento atinja, às vezes tão baixa quanto 55°C. Nessas temperaturas, matar Salmonella ou Listeria não é instantâneo  -  é um processo lento, dependente do tempo, medido em minutos ou até horas. As tabelas do USDA FSIS Appendix A especificam que alcançar uma redução de 6,5-log de Salmonella requer manter a carne de ave a 60°C por aproximadamente 28 minutos após o centro atingir a temperatura. A 55°C, esse tempo se estende para quase 90 minutos. Se você retirar o saco quando o temporizador apitar sem contabilizar o tempo de letalidade, pode estar servindo alimentos subpasteurizados.',
    },
    {
      type: 'title',
      text: 'Tempos Reais de Sous Vide: O que os Cozinheiros Domésticos Realmente Precisam',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A tabela a seguir reflete o que os cozinheiros domésticos realmente procuram: cortes específicos de carne, em temperaturas comuns, com tempos totais que incluem tanto o atraso de aquecimento quanto o tempo de manutenção para letalidade do patógeno. Estes valores assumem uma espessura de 25mm, partindo da temperatura de refrigeração (5°C), visando uma redução de 6,5-log de Salmonella.',
    },
    {
      type: 'table',
      headers: ['Alimento', 'Temp. Banho', 'Aquecimento do Centro', 'Manutenção Letalidade', 'Tempo Total', 'Resultado'],
      rows: [
        ['Peito de Frango', '60°C / 140°F', '~35 min', '~28 min', '~63 min', 'Suculento, totalmente pasteurizado'],
        ['Peito de Frango', '65°C / 149°F', '~35 min', '~3 min', '~38 min', 'Mais firme, textura tradicional'],
        ['Filé de Salmão', '50°C / 122°F', '~20 min', '~55 min', '~75 min', 'Amanteigado, translúcido, seguro'],
        ['Bife Bovino', '55°C / 131°F', '~40 min', '~89 min', '~129 min', 'Mal passado, superfície pasteurizada'],
        ['Lombo de Porco', '60°C / 140°F', '~35 min', '~28 min', '~63 min', 'Macio com leve tom rosado'],
        ['Peito de Pato', '57°C / 135°F', '~35 min', '~52 min', '~87 min', 'Rico, ao ponto, seguro'],
        ['Peito de Peru', '63°C / 145°F', '~40 min', '~9 min', '~49 min', 'Úmido, nunca seco'],
        ['Almôndegas (esfera)', '60°C / 140°F', '~25 min', '~28 min', '~53 min', 'Cozimento uniforme'],
      ],
    },
    {
      type: 'title',
      text: 'A Matemática Logarítmica da Morte Bacteriana: D-Values e z-Values Explicados',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'As bactérias não morrem todas de uma vez como se fosse um interruptor. A morte térmica segue uma cinética de primeira ordem: uma fração constante da população é eliminada por unidade de tempo a uma dada temperatura. O <strong>D-value</strong> (tempo de redução decimal) é o tempo necessário a uma temperatura específica para matar 90% das bactérias presentes  -  uma redução de 1-log. Para Salmonella a 60°C, o D-value é de aproximadamente 4,3 minutos. O <strong>z-value</strong> (tipicamente 5,5°C para Salmonella) nos diz quanto precisamos aumentar a temperatura para tornar o processo 10 vezes mais rápido. Aumente o banho de 55°C para 60,5°C e o tempo de letalidade necessário cai por um fator de 10  -  de 89 minutos para cerca de 9 minutos. Essa relação exponencial explica por que cozinhar a 65°C é dramaticamente mais rápido e seguro do que cozinhar a 55°C, mesmo que o alimento pareça praticamente igual.',
    },
    {
      type: 'title',
      text: 'A Zona de Perigo: Por que 54,4°C (130°F) é o Limite Mínimo Absoluto',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Perigo Biológico Abaixo de 54,4°C (130°F)',
      html: 'Nunca faça sous vide abaixo de 54,4°C (130°F) por mais de 4 horas. Em temperaturas abaixo desse limiar, a taxa de morte térmica de bactérias como Salmonella e Clostridium perfringens é na verdade mais lenta do que sua taxa de reprodução natural. A população bacteriana pode crescer durante o cozimento. Pior ainda, certos patógenos como Bacillus cereus e Clostridium botulinum Tipo E podem produzir toxinas termoestáveis que sobrevivem ao cozimento. Se o seu circulador marcar 52°C e você deixar a carne por 8 horas achando que baixo e lento é mais seguro, você está criando um perigo biológico.',
    },
    {
      type: 'title',
      text: 'Como o Formato e a Espessura da Carne Dominam o Tempo de Cozimento',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O centro térmico do seu alimento  -  o último ponto a atingir a temperatura alvo  -  dita o tempo total de cozimento. A condução de calor segue a lei de Fourier, e o tempo para o centro chegar a 1°C da temperatura do banho escala com o <strong>quadrado da espessura</strong>. Dobre a espessura de um peito de frango de 25mm para 50mm e o tempo de aquecimento quadruplica de 35 minutos para aproximadamente 140 minutos. O formato importa enormemente: uma <strong>placa plana</strong> (bife, filé) aquece a partir de duas superfícies opostas e é a geometria mais lenta. Um <strong>cilindro</strong> (lombo, roulade) recebe calor radialmente de todos os lados e aquece cerca de 1,4 vezes mais rápido que uma placa da mesma espessura. Uma <strong>esfera</strong> (almôndega) aquece de todas as direções e é a geometria mais rápida, cerca de 1,7 vezes mais rápido que uma placa. É por isso que itens esféricos como almôndegas ou arancini atingem temperaturas seguras no centro surpreendentemente rápido.',
    },
    {
      type: 'title',
      text: 'Salmonella vs. Listeria: Escolhendo o Patógeno Alvo',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Salmonella (Padrão)',
          icon: 'mdi:bacteria-outline',
          description: 'Contaminante mais comum em aves, moderadamente sensível ao calor, amplamente utilizado como patógeno de referência nas normas USDA FSIS.',
          points: [
            'z-value de 5,5°C: moderadamente sensível ao calor',
            'Alvo: redução de 6,5-log para aves, 5-log para carne bovina',
            'D60 = 4,3 minutos: morre relativamente rápido a 60°C',
            'Seguro para adultos saudáveis com tempos de pasteurização padrão',
            'Substituto para sorovares de Salmonella enterica em todos os tipos de carne',
          ],
        },
        {
          title: 'Listeria monocytogenes',
          icon: 'mdi:shield-alert-outline',
          description: 'Maior resistência térmica que a Salmonella. Crítico para populações vulneráveis incluindo gestantes e pessoas imunocomprometidas.',
          highlight: true,
          points: [
            'Maior resistência térmica que a Salmonella',
            'z-value de 6,0°C: requer maior aumento de temperatura para acelerar a eliminação',
            'Alvo: redução de 6-log recomendada',
            'D60 = 7,7 minutos: leva quase o dobro do tempo que a Salmonella',
            'Crítico para gestantes, idosos e pessoas imunocomprometidas',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Segurança Alimentar para Populações Vulneráveis: Quando a Pasteurização Padrão Não é Suficiente',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gestantes, adultos acima de 65 anos, pacientes em quimioterapia, transplantados e pessoas com HIV ou condições autoimunes enfrentam riscos dramaticamente maiores de doenças transmitidas por alimentos. A Listeria monocytogenes em particular pode atravessar a barreira placentária e causar aborto espontâneo, natimorto ou meningite neonatal  -  mesmo quando a mãe não apresenta sintomas. Para estas populações, a redução padrão de 6,5-log de Salmonella é insuficiente. Selecione Listeria como patógeno alvo e estenda os tempos de cozimento de acordo. A 60°C, o tempo adicional de letalidade para Listeria versus Salmonella adiciona aproximadamente 16 minutos extras para um peito de frango de 25mm  -  um pequeno investimento de tempo para margens de segurança substanciais.',
    },
    {
      type: 'title',
      text: 'Por que a Temperatura Inicial Fria Importa: Meça Sempre a Partir da Refrigeração',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esta calculadora assume uma temperatura inicial de 5°C  -  temperatura padrão de geladeira. Se você retirar a carne diretamente do congelador a -18°C, o centro levará significativamente mais tempo para atingir a temperatura alvo. O calor latente de fusão do gelo dentro do tecido muscular congelado cria um platô a 0°C que pode adicionar 30-50% ao tempo de aquecimento. Sempre descongele completamente itens congelados na geladeira antes do cozimento sous vide e verifique a temperatura inicial do centro. Da mesma forma, se você deixar a carne sobre a bancada para temperar por 30 minutos antes de embalar, o tempo de aquecimento reduzido não é capturado por este modelo e você pode ultrapassar a pasteurização  -  o que é seguro, mas pode afetar a textura.',
    },
    {
      type: 'title',
      text: 'Pasteurização Não Significa Esterilização: O que Sobrevive',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A pasteurização reduz os patógenos a níveis considerados seguros pelos padrões de saúde pública  -  tipicamente uma redução de 5-log a 7-log. Ela não produz um produto estéril. Certos esporos bacterianos, incluindo <em>Clostridium botulinum</em> e <em>Clostridium perfringens</em>, podem sobreviver às temperaturas de pasteurização e germinar se o alimento for armazenado inadequadamente. Após o cozimento sous vide, o alimento deve ser servido imediatamente, mantido acima de 54,4°C para serviço, ou resfriado rapidamente em banho de gelo para abaixo de 4°C em até 2 horas. Sacos selados a vácuo criam um ambiente anaeróbico que o Clostridium botulinum considera ideal; nunca deixe sacos de sous vide cozidos em temperatura ambiente. Para armazenamento prolongado em geladeira além de 5 dias, recomenda-se o congelamento.',
    },
    {
      type: 'title',
      text: 'Conformidade com USDA FSIS: Atendendo aos Padrões Regulatórios em Casa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O USDA Food Safety and Inspection Service (FSIS) Appendix A fornece o quadro regulatório definitivo para os padrões de desempenho de letalidade em produtos cárneos e de aves. Estas tabelas especificam as combinações de tempo-temperatura necessárias para reduções logarítmicas específicas em Salmonella. Embora projetadas para processadores comerciais, os cozinheiros domésticos podem usar a mesma ciência. Por exemplo, o FSIS Appendix A determina que aves prontas para consumo atinjam uma redução de 6,5-log em Salmonella. A 60°C, o tempo de manutenção necessário após todo o produto atingir a temperatura é de 28,1 minutos. Esta calculadora implementa o modelo matemático FSIS usando cinética de Arrhenius de primeira ordem com D-values e z-values derivados de estudos de inativação térmica revisados por pares, adaptados para uso doméstico com circulador sous vide.',
    },
    {
      type: 'title',
      text: 'Peixes e Frutos do Mar: Regras Diferentes para Proteínas Diferentes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O músculo do peixe tem propriedades térmicas diferentes das carnes de mamíferos ou aves. O peixe aquece mais rápido devido à menor densidade e cortes tipicamente mais finos, mas os patógenos relevantes são diferentes. Para peixe cru ou levemente cozido, espécies de <em>Vibrio</em> e parasitas <em>Anisakis</em> são as principais preocupações em vez de Salmonella. A FDA recomenda congelar o peixe a -20°C por 7 dias antes do consumo cru para matar parasitas, e depois pasteurizar no sous vide contra Listeria no cozimento final. Salmão cozido a 50°C requer aproximadamente 55 minutos de tempo de manutenção para uma redução de 6-log de Listeria, produzindo uma textura única impossível de obter com qualquer outro método de cozimento. Atum e outros peixes escombroidos requerem cuidado adicional: a histamina produzida pela ação bacteriana antes do cozimento é termoestável e não é destruída pela pasteurização; sempre obtenha peixe de qualidade sushi de fornecedores confiáveis e mantenha-o abaixo de 4°C antes de cozinhar.',
    },
    {
      type: 'title',
      text: 'O Dilema Textura-Segurança: Por que Temperaturas Mais Altas São Mais Rápidas mas Diferentes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Todo cozinheiro de sous vide enfrenta a mesma decisão: cozinhar mais baixo e mais longo para melhor textura, ou cozinhar mais alto e mais rápido por conveniência e margem de segurança. Peito de frango cozido a 60°C produz uma carne tão suculenta que desafia as expectativas do que a carne de ave pode ser, mas requer 28 minutos de manutenção de letalidade após a equalização do centro, para um tempo total de cozimento de mais de uma hora. A 65°C, o mesmo peito pasteuriza em apenas 3 minutos de manutenção para um total de 38 minutos, mas as fibras musculares se contraem mais, expelindo parte da umidade. Nenhuma das abordagens está errada; a calculadora simplesmente fornece os números para que você faça uma escolha informada. Para jantares onde o tempo é flexível, vá baixo. Para refeições durante a semana, vá mais alto. O alimento estará sempre seguro se o tempo calculado for respeitado.',
    },
    {
      type: 'title',
      text: 'Calibração do Equipamento: Seu Circulador Pode Estar Mentindo para Você',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>Verifique a temperatura do seu circulador de imersão com um termômetro digital calibrado.</strong> Circuladores domésticos podem desviar de 1 a 2°C ao longo do tempo, o que nas margens da pasteurização (55-58°C) pode significar a diferença entre um cozimento seguro de 89 minutos e uma subpasteurização perigosa. Teste seu circulador contra um termômetro de referência em um recipiente bem isolado uma vez por mês. Um erro de 1°C a 55°C altera o tempo de letalidade em aproximadamente 30 minutos para Salmonella.',
    },
    {
      type: 'title',
      text: 'Cozinhando Vários Itens: Como a Quantidade de Sacos Afeta a Transferência de Calor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um erro comum é carregar o banho sous vide com vários sacos e assumir que o tempo calculado para um único item ainda se aplica. A água deve circular livremente entre os sacos para uma transferência de calor eficaz. Um banho muito cheio cria zonas frias estagnadas onde os sacos isolam uns aos outros da água aquecida. Como regra geral, deixe pelo menos 2cm de espaço de água entre os sacos, e se cozinhar mais de 4 itens, aumente o tempo calculado em 15-20% para compensar. Melhor ainda, use um recipiente grande o suficiente para que a água possa circular livremente ao redor de cada saco. Para itens esféricos como almôndegas, a vantagem da geometria diminui significativamente se estiverem se tocando ou empilhados, pois os pontos de contato bloqueiam a transferência de calor radial.',
    },
    {
      type: 'title',
      text: 'Referência Rápida: Temperaturas e Tempos Mínimos Seguros por Tipo de Alimento',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Tipo de Alimento', 'Temp. Mínima no Centro', 'Tempo de Pasteurização na Temp. Mínima', 'Mais Rápido a', 'Recomendado para'],
      rows: [
        ['Frango e Aves', '60°C / 140°F', '~28 min (6,5-log Salmonella)', '65°C: ~3 min manutenção', 'Todos os consumidores'],
        ['Porco (cortes inteiros)', '60°C / 140°F', '~28 min (6,5-log Salmonella)', '65°C: ~3 min manutenção', 'Todos os consumidores'],
        ['Bovino (bifes, assados)', '55°C / 131°F', '~89 min (6,5-log Salmonella)', '60°C: ~28 min manutenção', 'Adultos saudáveis (pasteurização superficial)'],
        ['Carne Moída', '60°C / 140°F', '~28 min (6,5-log Salmonella)', '65°C: imediato', 'Todos os consumidores (bactérias misturadas por todo o produto)'],
        ['Peixes e Frutos do Mar', '50°C / 122°F', '~55 min (Listeria)', '55°C: ~22 min manutenção', 'Pré-congelados para controle de parasitas'],
        ['Ovos (com casca)', '57°C / 135°F', '~75 min (Salmonella)', '60°C: ~28 min manutenção', 'Ovos com casca pasteurizados'],
        ['Vegetais', '85°C / 185°F', 'Não se aplica (inativação enzimática)', 'N/D', 'Degradação de pectina, sem risco de patógenos'],
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
