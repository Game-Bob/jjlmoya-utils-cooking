import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calculadora de Transglutaminase para Ligação de Carne: Guia de Dosagem para Gastronomia Molecular';
const description = 'Calcule a dosagem precisa de transglutaminase (TG) para ligação de carne. Obtenha proporções para aplicação seca ou pasta, tempo de incubação e alertas de segurança de temperatura.';

const faq = [
  {
    question: 'O que é transglutaminase e como ela liga a carne?',
    answer: 'A transglutaminase (TG), também conhecida como "cola de carne", é uma enzima que catalisa a formação de ligações covalentes entre os aminoácidos glutamina e lisina nas proteínas. Quando aplicada às superfícies da carne, cria ligações cruzadas que fundem peças separadas numa única peça coesa. A reação requer tempo e temperaturas frias (2:5°C) para se desenvolver completamente, tipicamente de 6 a 24 horas.',
  },
  {
    question: 'Qual é a diferença entre a aplicação seca e a pasta?',
    answer: 'A aplicação seca envolve polvilhar o pó de TG diretamente sobre a superfície da carne a 0,75:1,5% do peso da carne. O método de pasta mistura uma parte de TG com quatro partes de água para criar uma pasta aplicável com pincel, ideal para cobrir superfícies irregulares ou aplicar camadas finas e uniformes em assados grandes ou filés com pele.',
  },
  {
    question: 'A temperatura afeta a atividade da transglutaminase?',
    answer: 'Sim. A TG é mais ativa entre 2°C e 15°C. Em temperaturas mais altas (até 40°C) a reação acelera, mas deve ser monitorizada de perto. Acima de 60°C, a enzima desnatura e torna-se permanentemente inativa: a reação de ligação cruzada para completamente. Mantenha sempre a carne ligada com TG abaixo de 60°C durante o cozimento para preservar a ligação.',
  },
  {
    question: 'Posso usar transglutaminase em peixe ou marisco?',
    answer: 'Sim, mas o peixe e o marisco têm níveis mais baixos de lisina e glutamina nas suas proteínas musculares em comparação com a carne vermelha e as aves. Poderá ser necessário uma proporção mais elevada de TG (1,2:1,5%) e tempos de incubação mais longos. Para vieiras delicadas ou filés de peixe finos, considere o método de pasta para uma cobertura mais uniforme.',
  },
];

const howTo = [
  {
    name: 'Selecionar método de aplicação',
    text: 'Escolha Aplicação Seca para superfícies uniformes como assados e bifes. Escolha Pasta para cortes irregulares, camadas finas ou proteínas com pele.',
  },
  {
    name: 'Inserir peso da carne',
    text: 'Introduza o peso total da carne ou proteína que deseja ligar em gramas.',
  },
  {
    name: 'Especificar tipo de proteína',
    text: 'Selecione o tipo de proteína que melhor corresponde ao seu corte. Carnes vermelhas precisam de menos TG; peixe e marisco precisam de mais.',
  },
  {
    name: 'Definir temperatura de incubação',
    text: 'Introduza a temperatura de armazenamento frio (2:40°C). A calculadora estimará o tempo de ligação necessário.',
  },
  {
    name: 'Pesar e aplicar TG',
    text: 'Meça o pó de TG calculado. Aplique polvilhando ou pincelando a pasta e pressione as superfícies da proteína firmemente uma contra a outra.',
  },
  {
    name: 'Repousar e refrigerar',
    text: 'Embale firmemente em filme plástico e refrigere pelo período de incubação recomendado antes de cozinhar.',
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
  slug: 'calculadora-transglutaminase-ligacao-carne',
  title: 'Calculadora de Transglutaminase para Ligação de Carne',
  description: 'Calcule a dosagem precisa de transglutaminase (TG) para ligação de carne. Obtenha proporções para aplicação seca ou pasta, tempo de incubação e alertas de segurança de temperatura.',
  faqTitle: 'Perguntas Frequentes',
  ui: {
    title: 'Calculadora de Transglutaminase para Ligação de Carne',
    subtitle: 'Precisão molecular para ligação cruzada de proteínas',
    methodLabel: 'Método de Aplicação',
    dryMethod: 'Aplicação Seca',
    slurryMethod: 'Pasta (Aplicável com Pincel)',
    weightLabel: 'Peso da Carne / Proteína',
    proteinLabel: 'Tipo de Proteína',
    redMeat: 'Carne Vermelha (Vaca, Borrego, Caça)',
    poultry: 'Aves (Frango, Peru, Pato)',
    fish: 'Peixe (Filés Firmes, Peixe Inteiro)',
    shellfish: 'Marisco (Vieiras, Camarão, Lagosta)',
    unitLabel: 'Sistema de Medida',
    metricUnit: 'Métrico (g / °C)',
    imperialUnit: 'Imperial (oz / °F)',
    tempLabel: 'Temperatura de Incubação',
    resultTitle: 'Resultados de Dosagem',
    tgAmount: 'Transglutaminase (TG)',
    waterAmount: 'Água (para Pasta)',
    totalWeight: 'Peso Total Ligado',
    ratioLabel: 'Proporção de TG',
    incubationLabel: 'Incubação Recomendada',
    incubationRange: '{min}h a {max}h',
    dryDustingDesc: 'Polvilhe o pó de TG uniformemente sobre a superfície da carne e pressione as peças juntas. Ideal para cortes planos e assados.',
    slurryDesc: 'Misture TG com 4 partes de água para criar uma pasta aplicável com pincel. Aplique com um pincel para superfícies irregulares, filés ou colagem de pele.',
    enzymeDestroyed: 'Enzima Destruída: A temperatura excede o limiar de desnaturação. A transglutaminase está desnaturada e não ligará.',
    noWarning: '',
    hours: 'horas',
    grams: 'g',
    milliliters: 'ml',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Quanta transglutaminase deve usar por quilo de carne?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A dose correta depende do tipo de proteína e do método de aplicação. Para carne vermelha, use 0,75:1,0% de TG em peso (7,5:10 g por kg). Para aves, 1,0:1,2%. Para peixe e marisco, 1,2:1,5%. Aplique como pó seco para cortes planos ou misture com 4 partes de água como pasta para superfícies irregulares. Introduza o peso da sua proteína na calculadora acima para obter uma medida exata.',
    },
    {
      type: 'title',
      text: 'Aplicação seca vs. pasta: qual método deve escolher?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A aplicação seca funciona melhor em superfícies planas e uniformes como bifes, assados ou bife panado. Polvilhe o pó de TG diretamente (0,75:1,5% do peso da carne) e pressione as peças juntas. O método de pasta (1 parte de TG para 4 partes de água) é melhor para cortes irregulares, filés com pele ou vieiras delicadas onde a cobertura uniforme é importante. Pincele a pasta, monte e embale firmemente. Ambos os métodos requerem incubação fria para completar a ligação.',
    },
    {
      type: 'title',
      text: 'Porque o controlo de temperatura define o sucesso da sua ligação',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A transglutaminase funciona melhor entre 2°C e 5°C, formando ligações cruzadas fortes ao longo de 6:24 horas. Em temperaturas de frigorífico mais altas (5:15°C) a reação acelera para 3:8 horas, mas as ligações podem ser mais superficiais. Acima de 40°C a enzima desnatura rapidamente, e a 60°C é destruída instantaneamente: quaisquer ligações existentes param de se formar e a carne separar-se-á durante o cozimento. Monitorize sempre a temperatura do seu armazenamento frio com o indicador no visualizador acima.',
    },
    {
      type: 'table',
      headers: ['Proteína', 'Dose de TG (% do peso)', 'Método', 'Incubação (2:5°C)', 'Força da Ligação'],
      rows: [
        ['Vaca, Borrego, Caça', '0,75:1,0%', 'Pó seco', '6:12 h', 'Muito forte'],
        ['Frango, Peru, Pato', '1,0:1,2%', 'Qualquer', '8:16 h', 'Forte'],
        ['Salmão, Bacalhau, Robalo', '1,2:1,5%', 'Pasta', '12:24 h', 'Moderada'],
        ['Vieiras, Camarão, Lagosta', '1,0:1,5%', 'Pasta', '12:24 h', 'Moderada'],
      ],
    },
    {
      type: 'title',
      text: 'Erros comuns ao ligar carne com TG',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Demasiada enzima:</strong> Usar mais de 1,5% de TG deixa um resíduo branco visível e uma textura farinhenta. O excesso não torna a ligação mais forte.',
        '<strong>Gordura ou pele prateada na superfície:</strong> A TG não consegue ligar-se a gordura ou tecido conjuntivo. Aparc as superfícies até ver fibras musculares nuas antes de aplicar.',
        '<strong>Ignorar o período de repouso:</strong> A reação de ligação cruzada leva horas. Cozinhar imediatamente após a montagem lavará a enzima antes de as ligações se formarem.',
        '<strong>Calor acima de 60°C durante o cozimento:</strong> A ligação mantém-se durante cozimento suave (sous vide a 55:58°C é ideal), mas temperaturas altas de selagem podem enfraquecer a interface.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
