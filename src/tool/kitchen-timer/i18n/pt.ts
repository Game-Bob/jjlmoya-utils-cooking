import type { ToolLocaleContent } from '../../../types';

const title = "Temporizador de Cozinha Múltiplo";
const description = "Gere múltiplos tempos de cozedura simultaneamente. Alarmes independentes, ideal para chefs e organização na cozinha (Mise en Place).";
const faq = [
  {
    question: 'Quantos temporizadores posso criar?',
    answer: 'Ilimitados. Adicione tantos quantos precisar com o botão "+". Ideal para cozinhar vários pratos simultaneamente: massa a ferver, molho a reduzir, carne a repousar e forno ligado, tudo ao mesmo tempo.',
  },
  {
    question: 'Por que é importante o tempo de repouso nas carnes?',
    answer: 'Quando corta carne acabada de sair do lume, os sucos escapam para o prato. Se repousar 5-10 minutos, as fibras relaxam e os sucos redistribuem-se. Resultado: carne suculenta em vez de seca. O repouso é cozedura passiva.',
  },
  {
    question: 'Funciona com o ecrã bloqueado?',
    answer: 'Sim, mas precisa de dar permissões de notificações. Os temporizadores continuam a correr em segundo plano e avisá-lo-ão com som e notificação do navegador mesmo que mude de separador ou bloqueie o telemóvel.',
  },
  {
    question: 'O que é a "Zona de Perigo" alimentar?',
    answer: 'Entre 5°C e 65°C as bactérias multiplicam-se rapidamente. Os alimentos cozinhados não devem estar nesta zona mais de 2 horas (1 hora se estiver >30°C). Use um temporizador para controlar o arrefecimento antes de refrigerar.',
  },
];
const howTo = [
  {
    name: 'Crie múltiplos temporizadores',
    text: 'Use o botão "+" para adicionar tantos temporizadores quantos precisar. Ideal para orquestrar vários pratos simultaneamente.',
  },
  {
    name: 'Personalize cada temporizador',
    text: 'Altere o nome de cada temporizador para identificar o que está a cozinhar: "Forno", "Arroz", "Molho", etc.',
  },
  {
    name: 'Controle pelo dock móvel',
    text: 'Nos telemóveis, os temporizadores ativos aparecem num dock deslizante na parte inferior. Pause ou reinicie diretamente por aí.',
  },
  {
    name: 'Receba notificações',
    text: 'Autorize notificações para que o navegador o avise quando o tempo terminar, mesmo que mude de separador.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
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
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'temporizador-cozinha',
  title: 'Temporizador de Cozinha Múltiplo',
  description: 'Gere múltiplos tempos de cozedura simultaneamente. Alarmes independentes, ideal para chefs e organização na cozinha (Mise en Place).',
  faqTitle: 'Perguntas Frequentes',
  bibliographyTitle: 'Referências',
  ui: {
    addTimer: 'Adicionar Temporizador',
    stopAll: 'Parar Todos',
    defaultName: 'Temporizador',
    newTimerName: 'Novo Temporizador',
    timerDefault1: 'Temporizador 1',
    timerDefault2: 'Temporizador 2',
    timerDefault3: 'Temporizador 3',
    label: 'Etiqueta',
    hours: 'Horas',
    minutes: 'Min',
    seconds: 'Seg',
    ready: 'Pronto',
    start: 'Iniciar',
    pause: 'Pausar',
    reset: 'Reset',
    addOneMin: '+1 min',
    addFiveMin: '+5 min',
    statusReady: 'Pronto',
    statusRunning: 'A correr',
    statusPaused: 'Pausado',
    statusFinished: 'TEMPO!',
    finishNotification: 'Temporizador Terminado para',
  },
  faq,
  bibliography: [
    {
      name: 'Segurança Alimentar: USDA Guidelines',
      url: 'https://www.fsis.usda.gov/',
    },
    {
      name: 'Mise en Place - A Cozinha Profissional',
      url: 'https://www.escoffier.edu/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Maestria Temporal na Cozinha',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A cozinha profissional não se baseia apenas em receitas, mas na <strong>gestão precisa do tempo</strong>. O conceito francês <em>"Mise en Place"</em> (tudo no seu lugar) inclui o tempo como um ingrediente fundamental.',
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta de <strong>Temporizador Múltiplo</strong> foi desenhada para chefs caseiros e profissionais que precisam de orquestrar uma sinfonia de pratos simultaneamente.',
    },
    {
      type: 'title',
      text: 'O Papel da Temperatura e do Tempo',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Alimento', 'Ponto de Cozedura', 'Tempo', 'Benefício'],
      rows: [
        ['Ovos escalfados', 'Gema líquida', '3-4 min', 'Proteína suave'],
        ['Ovos Mollet', 'Gema densa', '5-6 min', 'Equilíbrio de textura'],
        ['Ovos Cozidos', 'Totalmente cozido', '9-11 min', 'Máxima consistência'],
        ['Carnes - Selar', 'Alta temperatura', '1-2 min/lado', 'Reação de Maillard'],
        ['Carnes - Repouso', 'Repouso', '5-20 min', 'Redistribuição de sucos'],
      ],
    },
    {
      type: 'title',
      text: 'Segurança Alimentar: A Zona de Perigo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O tempo não afeta apenas a qualidade, mas a segurança. A "Zona de Perigo" bacteriana situa-se entre os 5°C e os 65°C. Os alimentos cozinhados não devem permanecer nesta gama por mais de <strong>2 horas</strong>.',
    },
    {
      type: 'title',
      text: 'Conselhos Profissionais de Organização',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Escalone os tempos:</strong> se tudo terminar ao mesmo tempo, ficará sobrecarregado ao empratar.',
        '<strong>Use o calor residual:</strong> desligue o lume 1-2 minutos antes de o temporizador soar.',
        '<strong>Nomeie os temporizadores:</strong> use as etiquetas para "Forno", "Arroz" ou "Molho".',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Conselho profissional:</strong> a precisão do tempo é o que diferencia um chef de um cozinheiro amador. Use a tecnologia para garantir consistência.',
    },
  ],
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
