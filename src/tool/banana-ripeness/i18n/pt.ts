import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Diagnóstico e Conservação de Bananas: Guia Científico";
const description = "Analise o estado de maturação das suas bananas com precisão científica. Aprenda técnicas de conservação, bioquímica do etileno e otimização nutricional.";
const faq = [
  {
    question: 'Por que as bananas ficam pretas no frigorífico?',
    answer: 'O frio quebra as paredes celulares da casca, libertando enzimas que oxidam os fenóis e criam polifenóis pretos. No entanto, o interior costuma conservar-se firme e doce por mais tempo do que fora.',
  },
  {
    question: 'Como posso amadurecer uma banana rapidamente?',
    answer: 'Coloque-as num saco de papel fechado com uma maçã ou um tomate. Estes emitem gás etileno, que acelera a maturação. Se tiver muita pressa, pode colocá-las alguns minutos no forno a baixa temperatura.',
  },
  {
    question: 'É seguro comer bananas com manchas castanhas?',
    answer: 'Sim, totalmente. Na verdade, as manchas indicam que o amido se converteu em açúcar, tornando-as mais doces e digeríveis. Apenas as descarte se tiverem bolor, cheirarem mal ou estiverem excessivamente moles.',
  },
  {
    question: 'O que é o etileno?',
    answer: 'É uma hormona vegetal em forma de gás que regula o crescimento e a maturação. A banana é uma fruta climatérica, o que significa que continua a produzir etileno e a amadurecer depois de ser colhida.',
  },
];
const howTo = [
  {
    name: 'Observar a cor',
    text: 'Examine cuidadosamente a cor da casca, desde verde até castanho escuro, para determinar o estado de maturação atual.',
  },
  {
    name: 'Usar o simulador',
    text: 'Deslize o indicador de maturação para ver previsões precisas sobre quando alcançará a etapa seguinte.',
  },
  {
    name: 'Ajustar condições',
    text: 'Modifique temperatura e humidade para ver como afetam a velocidade de maturação.',
  },
  {
    name: 'Aplicar conservação',
    text: 'Siga as recomendações específicas de conservação e aceleração segundo o estado atual.',
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
  slug: 'diagnostico-bananas',
  title: 'Diagnóstico e Conservação de Bananas: Guia Científico',
  description: 'Analise o estado de maturação das suas bananas com precisão científica. Aprenda técnicas de conservação, bioquímica do etileno e otimização nutricional.',
  faqTitle: 'Perguntas Frequentes',
  ui: {
    ripesnessLabel: 'Estado de Maturação',
    nextStageLabel: 'Próxima Etapa em',
    daysUnit: 'Dias',
    tempLabel: 'Temperatura',
    humidityLabel: 'Humidade',
    partnerToggleTitle: 'Acompanhamento Climatérico',
    partnerToggleSubtitle: 'Efeito etileno externo',
    conservationTitle: 'Conservação',
    accelerationTitle: 'Aceleração',
    stage1Name: 'Verde Esmeralda',
    stage1Desc: 'Conteúdo máximo de amido resistente. Firmeza total.',
    stage1Conservation: 'Ambiente (18-20°C). Evitar frio (<12°C).',
    stage1Acceleration: 'Saco de papel com uma maçã ou tomate maduro.',
    stage2Name: 'Amarelo Radiante',
    stage2Desc: 'Equilíbrio perfeito entre firmeza e doçura inicial.',
    stage2Conservation: 'Lugar fresco, separar do cacho para travar o etileno.',
    stage2Acceleration: 'Manter no cacho e envolver em plástico.',
    stage3Name: 'Pintalgado Doce',
    stage3Desc: 'Pico de antioxidantes. Doçura intensa e textura cremosa.',
    stage3Conservation: 'Refrigerar para conservar a polpa (mesmo que a pele escureça).',
    stage3Acceleration: 'Calor suave (perto de uma fonte de calor, não direta).',
    stage4Name: 'Maduro Canela',
    stage4Desc: 'Textura muito mole. Ideal para pastelaria sem açúcar.',
    stage4Conservation: 'Descascar e congelar imediatamente.',
    stage4Acceleration: 'Já atingiu o seu máximo.',
    stage5Name: 'Passado / Fermentado',
    stage5Desc: 'Processo de degradação avançado.',
    stage5Conservation: 'Não recomendável para consumo direto.',
    stage5Acceleration: 'N/D',
  },
  faq: [
    {
      question: 'Por que as bananas ficam pretas no frigorífico?',
      answer: 'O frio quebra as paredes celulares da casca, libertando enzimas que oxidam os fenóis e criam polifenóis pretos. No entanto, o interior costuma conservar-se firme e doce por mais tempo do que fora.',
    },
    {
      question: 'Como posso amadurecer uma banana rapidamente?',
      answer: 'Coloque-as num saco de papel fechado com uma maçã ou um tomate. Estes emitem gás etileno, que acelera a maturação. Se tiver muita pressa, pode colocá-las alguns minutos no forno a baixa temperatura.',
    },
    {
      question: 'É seguro comer bananas com manchas castanhas?',
      answer: 'Sim, totalmente. Na verdade, as manchas indicam que o amido se converteu em açúcar, tornando-as mais doces e digeríveis. Apenas as descarte se tiverem bolor, cheirarem mal ou estiverem excessivamente moles.',
    },
    {
      question: 'O que é o etileno?',
      answer: 'É uma hormona vegetal em forma de gás que regula o crescimento e a maturação. A banana é uma fruta climatérica, o que significa que continua a produzir etileno e a amadurecer depois de ser colhida.',
    },
  ],
  howTo: [
    {
      name: 'Observar a cor',
      text: 'Examine cuidadosamente a cor da casca, desde verde até castanho escuro, para determinar o estado de maturação atual.',
    },
    {
      name: 'Usar el simulador',
      text: 'Deslize o indicador de maturação para ver previsões precisas sobre quando alcançará a etapa seguinte.',
    },
    {
      name: 'Ajustar condições',
      text: 'Modifique temperatura e humidade para ver como afetam a velocidade de maturação.',
    },
    {
      name: 'Aplicar conservação',
      text: 'Siga as recomendações específicas de conservação e aceleração segundo o estado atual.',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Ciência da maturação de Musa × paradisiaca',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A banana é uma das frutas mais consumidas no mundo, mas também uma das mais incompreendidas biologicamente. Ao contrário das frutas não climatéricas, como os citrinos ou as uvas, a banana é uma <strong>fruta climatérica</strong>. Isto significa que continua a amadurecer após a colheita, aumentando drasticamente a sua respiração celular e a produção de uma fitohormona gasosa fundamental: o <strong>etileno</strong>.',
    },
    {
      type: 'paragraph',
      html: 'A partir de um ponto de vista bioquímico, a maturação é uma cascata de eventos enzimáticos. Durante este processo, enzimas como a amilase decompõem os hidratos de carbono complexos (amidos) em açúcares simples (frutose, glicose e sacarose). Esta mudança não só altera o sabor, tornando-o mais doce, como também modifica a textura ao degradar a pectina das paredes celulares, resultando naquela consistência suave e cremosa que caracteriza a banana madura.',
    },
    {
      type: 'title',
      text: 'O Ciclo do Etileno',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O etileno funciona como um interruptor biológico. Assim que a fruta deteta uma pequena concentração, ativa os genes responsáveis pela produção de mais etileno, criando um ciclo de feedback positivo. É por isso que uma banana muito madura acelerará a maturação de todas as suas vizinhas na fruteira. Para abrandar este processo, é vital isolar os exemplares que já apresentem marcas castanhas daqueles que ainda estejam verdes.',
    },
    {
      type: 'title',
      text: 'O Mito do Frigorífico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Existe a crença popular de que as bananas não devem ir ao frigorífico. A realidade é mais complexa: o frio (abaixo de 12°C) causa danos por arrefecimento nas células da casca, libertando enzimas que oxidam os fenóis e tornam a pele negra. No entanto, isto apenas afeta a estética exterior. Se o interior já atingiu a maturidade desejada, o frio parará quase por completo o amolecimento da polpa, conservando o sabor e a textura interior durante vários dias adicionais.',
    },
    {
      type: 'title',
      text: 'Estratégias Avançadas de Conservação',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Selagem do Pedúnculo:</strong> Envolver a extremidade do cacho com película aderente reduz drasticamente a libertação de etileno, estendendo a vida útil comercial da unidade até 72 horas adicionais.',
    },
    {
      type: 'paragraph',
      html: '<strong>Suspensão Dinâmica:</strong> Pendurar as bananas evita as nódoas negras por pressão. Os tecidos danificados libertam etileno mais depressa, criando focos de maturação acelerada que se propagam por toda a fruta.',
    },
    {
      type: 'paragraph',
      html: '<strong>Crioterapia (Congelação):</strong> Para bananas em fase 4 (castanhas), a congelação é a melhor opção. Descascar a fruta antes de congelar evita que a humidade fique presa, mantendo a qualidade da fibra.',
    },
    {
      type: 'title',
      text: 'Alterações Nutricionais por Etapa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'À medida que a banana amadurece, o seu perfil nutricional transforma-se de maneira radical, o que permite utilizá-la como uma ferramenta dietética específica segundo os objetivos do consumidor.',
    },
    {
      type: 'table',
      headers: ['Fase', 'Amido Resistente', 'Características', 'Benefício Principal'],
      rows: [
        ['Verde (1-2)', '~80%', 'Muito firme, conteúdo máximo de amido', 'Saúde intestinal e controlo glicémico'],
        ['Amarelo (3)', '~5%', 'Equilíbrio de firmeza e doçura', 'Energia rápida e vitaminas B'],
        ['Pintalgado (4)', 'Mínimo', 'Muito mole, alto conteúdo de açúcares', 'Potencial antioxidante máximo'],
        ['Castanho/Passado (5)', 'Praticamente nulo', 'Textura muito mole, fermentação avançada', 'Não recomendável para consumo'],
      ],
    },
    {
      type: 'title',
      text: 'Conclusão e Aplicação Prática',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Reduzir desperdício alimentar:</strong> O diagnóstico preciso do estado de uma banana permite identificar o momento ideal de consumo, evitando que se percam frutas valiosas.',
        '<strong>Otimizar benefícios nutricionais:</strong> Desde o amido resistente das verdes para a saúde intestinal, até aos antioxidantes das pintalgadas para potencial antioxidante máximo.',
        '<strong>Planear consumo estratégico:</strong> Adapte o uso da banana segundo os seus objetivos de saúde: controlo glicémico, energia rápida, digestão ou antioxidantes.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Alerta de degradação:</strong> Fatores externos como humidade relativa superior a 85% ou temperaturas acima dos 25°C podem acelerar drasticamente a degradação, levando a banana de ótima a comestível em questão de horas. Este simulador ajuda-o a antecipar estas alterações e a planear estrategicamente.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
