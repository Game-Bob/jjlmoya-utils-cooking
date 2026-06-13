import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Previsor de Cozimento Residual: Calculadora de Inércia Térmica';
const description = 'Preveja quantos graus o seu assado continuará cozinhando depois de retirá-lo do forno. Obtenha a temperatura exata de retirada para um ponto perfeito.';

const faq = [
  {
    question: 'O que é cozimento residual e por que ele acontece?',
    answer: 'O cozimento residual, também chamado de inércia térmica, é o aumento contínuo da temperatura interna depois que o alimento é retirado do forno. O calor armazenado nas camadas externas continua conduzindo em direção ao centro. Um assado retirado a 50°C pode atingir 54°C durante o descanso - a diferença entre mal passado e ao ponto para menos.',
  },
  {
    question: 'Como a temperatura do forno afeta o cozimento residual?',
    answer: 'Temperaturas de forno mais altas (200-250°C) criam um gradiente térmico maior entre a superfície e o centro, armazenando mais calor latente na crosta. Isso aumenta o efeito residual. Um assado cozido a 120°C terá cozimento residual mínimo (~1°C), enquanto um a 220°C pode ganhar 5-8°C durante o descanso.',
  },
  {
    question: 'O formato da carne altera o cálculo do cozimento residual?',
    answer: 'Sim. A geometria afeta significativamente a penetração do calor. Aves inteiras e assados grossos têm mais massa térmica em relação à área superficial, então retêm mais calor e têm maior cozimento residual. Cortes planos como bifes têm alta relação superfície-volume e esfriam rapidamente, com cozimento residual mínimo.',
  },
  {
    question: 'Quanto tempo devo descansar a carne depois de retirá-la?',
    answer: 'O tempo de descanso depende do peso e da geometria. Uma regra geral é cerca de 1 minuto para cada 100g de carne, mínimo 10 minutos, máximo 45 minutos. Um assado de 2kg precisa de aproximadamente 16 minutos de descanso. Durante esse período, a temperatura interna se equaliza e o efeito de cozimento residual se completa.',
  },
];

const howTo = [
  {
    name: 'Selecione a geometria da carne',
    text: 'Escolha Ave Inteira para aves, Assado Cilíndrico para filés e cortes desossados, ou Corte Plano para bifes e medalhões.',
  },
  {
    name: 'Insira o peso',
    text: 'Informe o peso total do seu corte em gramas. Pesos mínimos se aplicam por tipo de geometria.',
  },
  {
    name: 'Defina a temperatura do forno',
    text: 'Insira a temperatura real do seu forno. Temperaturas mais altas aumentam o efeito de cozimento residual.',
  },
  {
    name: 'Defina sua temperatura alvo',
    text: 'Insira a temperatura interna final desejada (ex.: 54°C para carne bovina ao ponto, 74°C para aves).',
  },
  {
    name: 'Leia a temperatura de retirada',
    text: 'A calculadora informa exatamente quando retirar a carne para atingir seu alvo após o descanso.',
  },
  {
    name: 'Descanse a carne',
    text: 'Deixe a carne descansar pelo tempo recomendado. Não cubra muito apertado ou a crosta ficará mole.',
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
  slug: 'preditor-cozimento-residual',
  title: 'Previsor de Cozimento Residual',
  description: 'Preveja quantos graus o seu assado continuará cozinhando depois de retirá-lo do forno. Obtenha a temperatura exata de retirada para um ponto perfeito.',
  faqTitle: 'Perguntas Frequentes',
  ui: {
    title: 'Previsor de Cozimento Residual',
    subtitle: 'Calculadora de inércia térmica para assados de precisão',
    geometryLabel: 'Geometria da Carne',
    wholeBird: 'Ave Inteira (Frango, Peru)',
    cylindricalRoast: 'Assado Cilíndrico (Filé, Desossado)',
    flatCut: 'Corte Plano (Bife, Medalhão)',
    weightLabel: 'Peso',
    ovenTempLabel: 'Temperatura do Forno',
    targetTempLabel: 'Temperatura Interna Alvo',
    pullTemp: 'Temperatura de Retirada',
    carryOver: 'Cozimento Residual',
    restTime: 'Tempo de Descanso',
    minutes: 'min',
    degreesC: '°C',
    degreesF: '°F',
    unitLabel: 'Unidades',
    metricUnit: 'Métrico',
    imperialUnit: 'Imperial',
    geometryDescCylindrical: 'Geometria cilíndrica selecionada - inércia térmica moderada com cozimento residual previsível.',
    weightG: 'g',
    weightOz: 'oz',
    errorTargetExceedsOven: 'A temperatura alvo não pode exceder a temperatura do forno.',
    errorOvenTooHot: 'A temperatura do forno excede 350°C. Reduza a temperatura.',
    errorWeightTooLow: 'O peso está abaixo do mínimo para esta geometria.',
    errorWeightTooHigh: 'O peso excede o máximo para esta geometria.',
    pullNow: 'Retire a carne agora',
    pullAt: 'Retirar a',
    toReach: 'para atingir',
    afterRest: 'após descansar',
    carryOverWillAdd: 'O cozimento residual adicionará aproximadamente',
    footerTemplate: '{carry} residual · {rest} descanso · {weight}{wunit}, {oven} forno → {target} alvo',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Previsor de Cozimento Residual: Obtenha a Temperatura de Retirada Perfeita Toda Vez',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O cozimento residual é o aumento contínuo da temperatura interna depois que o alimento sai do forno. As camadas externas armazenam calor durante a torrefação, e essa energia continua conduzindo em direção ao centro mais frio durante o descanso. Um assado grosso retirado a 50°C pode atingir 54°C após descansar - a diferença entre mal passado e ao ponto. Esta calculadora prevê exatamente quantos graus o seu assado vai subir para que você possa retirá-lo no momento preciso.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5-8°C', label: 'Residual típico (forno quente)', icon: 'mdi:thermometer' },
        { value: '1-3°C', label: 'Residual mínimo (forno baixo)', icon: 'mdi:thermometer-low' },
        { value: '16 min', label: 'Descanso para assado de 2kg', icon: 'mdi:clock-outline' },
        { value: '45 min', label: 'Descanso máximo recomendado', icon: 'mdi:clock-alert' },
      ],
    },
    {
      type: 'title',
      text: 'Tabela de Temperaturas de Retirada por Ponto',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Use esta tabela para encontrar sua temperatura interna alvo, depois deixe a calculadora determinar a temperatura exata de retirada. Lembre-se: a temperatura de retirada é sempre <strong>menor</strong> que seu alvo porque o efeito de cozimento residual continuará cozinhando durante o descanso.',
    },
    {
      type: 'table',
      headers: ['Ponto', 'Temp. Alvo', 'Temp. Retirada (forno 200°C)', 'Tempo Descanso'],
      rows: [
        ['Bovina Mal Passada', '52°C / 126°F', '46-48°C / 115-118°F', '10-15 min'],
        ['Bovina Ao Ponto', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 min'],
        ['Bovina Médio', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 min'],
        ['Bovina Bem Passada', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 min'],
        ['Suína Ao Ponto', '63°C / 145°F', '57-59°C / 135-138°F', '10-15 min'],
        ['Suína Bem Passada', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 min'],
        ['Peito de Frango/Peru', '74°C / 165°F', '68-70°C / 154-158°F', '15-20 min'],
        ['Coxa de Frango/Peru', '82°C / 180°F', '76-78°C / 169-172°F', '15-20 min'],
        ['Cordeiro Ao Ponto', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 min'],
        ['Cordeiro Médio', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 min'],
      ],
    },
    {
      type: 'title',
      text: 'Como a Geometria Muda o Cálculo Térmico',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Ave Inteira',
          icon: 'mdi:food-drumstick',
          description: 'Máxima massa térmica em relação à área superficial. Os grossos centros do peito e da coxa armazenam enorme calor latente.',
          highlight: false,
          points: ['Residual: 5-10°C em forno a 200°C', 'Descanso: 20-45 minutos', 'Ideal para: peru, frango inteiro, pato', 'Retirar 8-10°C abaixo do alvo'],
        },
        {
          title: 'Assado Cilíndrico',
          icon: 'mdi:food-steak',
          description: 'O formato de assado mais comum. Retenção de calor moderada com valores de cozimento residual previsíveis.',
          highlight: true,
          points: ['Residual: 3-7°C em forno a 200°C', 'Descanso: 15-30 minutos', 'Ideal para: filé mignon, lombo de porco, carré de cordeiro', 'Retirar 5-7°C abaixo do alvo'],
        },
        {
          title: 'Corte Plano',
          icon: 'mdi:food',
          description: 'A alta relação superfície-volume faz o calor escapar rapidamente. O cozimento residual é mínimo, mas ainda importa.',
          highlight: false,
          points: ['Residual: 1-3°C em forno a 200°C', 'Descanso: 5-15 minutos', 'Ideal para: bifes, peito de frango, filé de peixe', 'Retirar 1-3°C abaixo do alvo'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Erros Comuns de Cozimento Residual e Como Corrigi-los',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Retirar tarde demais',
      html: 'Se você esperar até que o termômetro marque sua temperatura alvo antes de retirar, o cozimento residual vai ultrapassar em 3-8°C. Um assado ao ponto se torna médio ou bem passado. <strong>Sempre retire 5-8°C abaixo do seu alvo.</strong> Use esta calculadora para obter o número exato.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Cortar cedo demais',
      html: 'Cortar um assado imediatamente após retirá-lo libera até 30% dos sucos. O gradiente térmico não tem tempo de se equalizar, então o centro fica mal passado enquanto as camadas externas cozinham demais. <strong>Descanse pelo tempo completo recomendado.</strong> Cubra frouxamente com papel alumínio - não embale apertado ou o vapor amolecerá a crosta.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Temperatura do forno muito baixa',
      html: 'Um forno baixo (abaixo de 150°C / 300°F) cria um gradiente térmico mínimo entre a superfície e o centro. Isso significa quase nenhum efeito de cozimento residual. Se você estiver cozinhando em temperatura baixa, pode retirar na temperatura alvo exata com risco mínimo de ultrapassagem. No entanto, o desenvolvimento da crosta será significativamente reduzido.',
    },
    {
      type: 'title',
      text: 'Dicas Profissionais para Assados Perfeitos',
      level: 3,
    },
    {
      type: 'tip',
      title: 'A Regra dos 10 Graus',
      html: 'Um forno quente (220°C / 425°F) adiciona aproximadamente 1°C de cozimento residual para cada 100g de carne em aves inteiras, e 0.7°C por 100g para assados cilíndricos. Use isso como verificação cruzada com a calculadora: um frango de 2kg a 220°C deve ter cerca de 7-9°C de cozimento residual.',
    },
    {
      type: 'tip',
      title: 'A Posição de Descanso Importa',
      html: 'Sempre descanse a carne em um prato quente ou tábua de corte, não em uma superfície fria. Uma superfície fria extrairá calor da base do assado, criando temperaturas finais desiguais. Para aves inteiras, descanse com o peito para cima para que os sucos se redistribuam uniformemente pela carne branca.',
    },
    {
      type: 'tip',
      title: 'Cobrir, Não Embalar',
      html: 'Cubra frouxamente o assado com papel alumínio durante o descanso. Embalar apertado prende o vapor e deixa a crosta encharcada. Uma cobertura frouxa reduz a perda de calor em cerca de 30% enquanto permite que o vapor escape, preservando tanto o efeito de cozimento residual quanto o exterior crocante.',
    },
    {
      type: 'title',
      text: 'Glossário de Termos-Chave de Assados',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Cozimento Residual', definition: 'O aumento contínuo da temperatura interna depois que o alimento é removido da fonte de calor, causado pela condução do calor das camadas externas em direção ao centro.' },
        { term: 'Temperatura de Retirada', definition: 'A temperatura interna na qual você deve remover a carne do forno. Sempre menor que a temperatura alvo para compensar o cozimento residual.' },
        { term: 'Temperatura Alvo', definition: 'A temperatura interna final que você deseja que a carne atinja após o descanso. Também chamada de temperatura de servir.' },
        { term: 'Inércia Térmica', definition: 'A tendência de uma massa de resistir à mudança de temperatura. Cortes mais pesados e densos têm maior inércia térmica e maior cozimento residual.' },
        { term: 'Descanso', definition: 'O período após o cozimento em que a carne descansa sem ser tocada, permitindo que o calor se equalize e os sucos se redistribuam pelas fibras.' },
        { term: 'Gradiente Térmico', definition: 'A diferença de temperatura entre a superfície da carne e seu centro. Um gradiente maior armazena mais calor latente para o cozimento residual.' },
        { term: 'Calor Latente', definition: 'A energia térmica armazenada nas camadas externas da carne durante o cozimento. Essa energia é liberada à medida que a temperatura se equaliza durante o descanso.' },
      ],
    },
    {
      type: 'title',
      text: 'Referência Rápida: Temperaturas de Retirada Recomendadas',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Retire a estas temperaturas para resultados perfeitos (forno a 200°C / 400°F)',
      items: [
        'Bovina ao ponto: retirar a 48-50°C / 118-122°F, alvo 54°C / 129°F',
        'Bovina médio: retirar a 54-56°C / 129-133°F, alvo 60°C / 140°F',
        'Lombo de porco: retirar a 57-59°C / 135-138°F, alvo 63°C / 145°F',
        'Peito de frango: retirar a 68-70°C / 154-158°F, alvo 74°C / 165°F',
        'Peru inteiro: retirar a 68-70°C / 154-158°F, alvo 74°C / 165°F (peito)',
        'Carré de cordeiro: retirar a 48-50°C / 118-122°F, alvo 54°C / 129°F',
      ],
    },
    {
      type: 'paragraph',
      html: 'Cada assado é diferente. O peso, a temperatura exata do forno e o formato do corte alteram esses números. É exatamente isso que esta calculadora faz - ela recebe seus dados específicos e calcula a temperatura de retirada precisa para sua situação exata. Sem adivinhação, sem assados arruinados.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
