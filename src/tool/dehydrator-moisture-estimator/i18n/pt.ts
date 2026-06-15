import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Estimador de Umidade do Desidratador';
const description = 'Estime a perda de peso, evaporação de água e tempo de secagem dos seus alimentos.';

const faq = [
  {
    question: 'Como calcular a perda de peso na desidratação?',
    answer: 'A perda de peso é calculada separando a massa sólida da água. Como a matéria sólida permanece constante, o peso final é o sólido dividido por 1 menos a porcentagem de umidade desejada.'
  }
];

const howTo = [
  {
    name: 'Selecione um ingrediente ou umidade manual',
    text: 'Escolha uma predefinição ou configure os valores iniciais de umidade.'
  }
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
  slug: 'estimador-umidade-desidratador',
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  ui: {
    title: 'Estimador de Umidade',
    subtitle: 'Calcule a perda de peso e estime o tempo de secagem',
    unitSystemLabel: 'Sistema de Unidades',
    metricOption: 'Métrico (g, °C)',
    imperialOption: 'Imperial (oz, °F)',
    ingredientLabel: 'Ingrediente',
    initialMoistureLabel: 'Umidade Inicial (%)',
    targetMoistureLabel: 'Umidade Alvo (%)',
    weightLabel: 'Peso Inicial',
    tempLabel: 'Temperatura de Secagem',
    customOption: 'Personalizado',
    beefOption: 'Carne Seca',
    watermelonOption: 'Melancia Desidratada',
    appleOption: 'Maçã Desidratada',
    mangoOption: 'Manga Desidratada',
    mushroomOption: 'Cogumelos',
    targetWeightLabel: 'Peso Final',
    waterEvaporatedLabel: 'Água Evaporada',
    estimatedHoursLabel: 'Tempo de Secagem Estimado',
    shrinkageLabel: 'Redução de Peso'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Quanto peso sua comida perderá no desidratador? Calcule o tempo de secagem e a umidade',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Quer você esteja fazendo <strong>carne seca (beef jerky)</strong>, <strong>couro de frutas (fruit leather)</strong>, <strong>rodelas de maçã seca</strong> ou <strong>melancia desidratada</strong>, a chave para resultados consistentes é entender o teor de umidade. A segurança alimentar e o armazenamento estável dependem de atingir o nível correto de umidade desejada. Nosso <strong>estimador de umidade do desidratador</strong> prevê o peso final, a evaporação da água e o tempo de secagem com base no seu ingrediente e configurações específicas.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '70%', label: 'Umidade da Carne', icon: 'mdi:food' },
        { value: '92%', label: 'Umidade da Melancia', icon: 'mdi:water' },
        { value: '10%', label: 'Objetivo para Carne Seca', icon: 'mdi:shield' },
        { value: '55°C', label: 'Temp. Média de Secagem', icon: 'mdi:thermometer' }
      ]
    },
    {
      type: 'title',
      text: 'Qual é o nível correto de umidade para alimentos desidratados?',
      level: 2
    },
    {
      type: 'table',
      headers: ['Ingrediente', 'Umidade Inicial', 'Umidade Final', 'Tempo Típico', 'Sinal de Conclusão'],
      rows: [
        ['Carne Seca', '70%', '10-15%', '4-8 h', 'Firme e dobra sem quebrar'],
        ['Rodelas de Maçã', '86%', '15-20%', '6-10 h', 'Flexível e textura de couro, sem partes pegajosas'],
        ['Fatias de Manga', '84%', '15-18%', '6-10 h', 'Mastigável, sem umidade visível'],
        ['Cogumelos', '92%', '5-8%', '4-8 h', 'Quebradiços e crocantes'],
        ['Melancia Desidratada', '92%', '10-12%', '10-16 h', 'Quebra com estalo ao dobrar']
      ]
    },
    {
      type: 'title',
      text: 'Problemas comuns de desidratação e como resolvê-los',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Endurecimento da casca (Case hardening):</strong> A camada externa seca muito rápido, aprisionando a umidade no interior. Reduza a temperatura em 5-10 °C e aumente a circulação de ar.',
        '<strong>Mofo durante o armazenamento:</strong> O alimento não foi seco até atingir uma umidade suficientemente baixa. Use a calculadora para encontrar o peso final desejado e verifique com um teste de umidade.',
        '<strong>Secagem irregular:</strong> Os pedaços foram cortados em espessuras diferentes ou o desidratador foi sobrecarregado. Corte pedaços uniformes e deixe espaço entre eles.',
        '<strong>Alimentos secos demais e quebradiços:</strong> A desidratação excessiva causa perda de sabor e textura. Verifique os níveis de umidade desejados para seu ingrediente específico.'
      ]
    },
    {
      type: 'title',
      text: 'Guia de temperatura de secagem por tipo de alimento',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'A temperatura afeta a velocidade de secagem e a qualidade dos alimentos. Temperaturas mais altas evaporam a água mais rápido, mas podem causar endurecimento da casca, perda de nutrientes e resultados irregulares. Use estas diretrizes gerais para a configuração do desidratador:'
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Temperatura Baixa 40 a 50 °C',
          icon: 'mdi:thermometer',
          description: 'Ideal para preservar enzimas, nutrientes e sabores delicados.',
          points: ['Ervas e folhas verdes', 'Cogumelos', 'Preservação de alimentos crus', 'Tempo de secagem mais longo necessário']
        },
        {
          title: 'Temperatura Média 50 a 60 °C',
          icon: 'mdi:thermometer',
          description: 'Faixa padrão para a maioria das frutas e vegetais.',
          highlight: true,
          points: ['Rodelas de maçã e fatias de manga', 'A maioria dos vegetais', 'Couros de frutas', 'Equilíbrio entre velocidade e qualidade']
        },
        {
          title: 'Temperatura Alta 60 a 70 °C',
          icon: 'mdi:thermometer',
          description: 'Usada para carne seca e alimentos densos que exigem segurança alimentar.',
          points: ['Carne seca de boi e peru', 'Vegetais de raiz densos', 'Prioridade para segurança alimentar', 'Janela de secagem mais curta']
        }
      ]
    },
    {
      type: 'tip',
      title: 'Sempre faça o pré-tratamento das frutas',
      html: 'Mergulhe maçãs, bananas e peras em suco de limão ou solução de ácido ascórbico antes de desidratar para evitar o escurecimento e preservar a cor.'
    },
    {
      type: 'tip',
      title: 'Rotacione as bandejas durante a secagem',
      html: 'Os desidratadores costumam ter pontos quentes. Rotacione as bandejas de cima para baixo e de frente para trás a cada 2-3 horas para uma secagem uniforme.'
    },
    {
      type: 'tip',
      title: 'Condicione antes de armazenar',
      html: 'Após desidratar, deixe o alimento esfriar e condicione em um recipiente fechado por 1 semana. Agite diariamente. Se surgir condensação, precisa de mais secagem.'
    },
    {
      type: 'title',
      text: 'Glossário de umidade do desidratador',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Endurecimento da casca', definition: 'Uma condição em que a superfície externa do alimento seca muito rápido, formando uma casca dura que aprisiona a umidade no interior e impede a desidratação adequada.' },
        { term: 'Atividade de água (aw)', definition: 'Uma medida da água livre disponível para o crescimento microbiano. Alimentos desidratados estáveis geralmente têm aw abaixo de 0,60.' },
        { term: 'Teor de umidade', definition: 'A porcentagem do peso da água em relação ao peso total do alimento. Usado para determinar o progresso da desidratação e os níveis desejados para a segurança alimentar.' },
        { term: 'Taxa de encolhimento', definition: 'A proporção do peso original restante após a desidratação. Uma métrica fundamental para planejar tamanhos de lote e armazenamento.' }
      ]
    },
    {
      type: 'summary',
      title: 'Principais conclusões para uma desidratação perfeita',
      items: [
        'Diferentes ingredientes têm níveis de umidade inicial muito diferentes (70-92%). Use as predefinições para estimativas precisas.',
        'A umidade final varia de acordo com o alimento: 10% para carne seca, 15-20% para frutas, 5-8% para vegetais e cogumelos.',
        'A temperatura de secagem afeta a velocidade e a qualidade. Mantenha-se na faixa de 50-60 °C para a maioria dos alimentos.',
        'O endurecimento da casca estraga a textura. Evite temperaturas acima de 70 °C e garanta uma boa circulação de ar.',
        'Sempre condicione os alimentos desidratados por 1 semana antes do armazenamento a longo prazo para garantir uma distribuição uniforme da umidade.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
