import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Rendimento e Custo de Maturação a Seco";
const description = "Calcule a perda de peso da carne, o desperdício de aparagem da película e o custo real por quilograma ao maturar carne bovina a seco em casa ou em câmara.";
const faq = [
  {
    question: "Quanto peso a carne perde durante a maturação a seco (dry aging)?",
    answer: "Durante um processo padrão de maturação a seco de 30 a 45 dias, a carne perde cerca de 15% a 25% do seu peso devido à evaporação da humidade. Além disso, cerca de 15% do peso inicial é perdido ao aparar a casca exterior seca (película) antes de cozinhar."
  },
  {
    question: "Qual é a humidade ideal para a maturação a seco?",
    answer: "A humidade relativa ideal para maturar carne a seco situa-se entre 75% e 85%. Se a humidade for demasiado baixa (abaixo de 75%), a superfície seca muito rapidamente. Se for demasiado alta (acima de 85%), o risco de bolor aumenta."
  },
  {
    question: "Por que razão o preço por quilograma aumenta tanto?",
    answer: "Como se perde peso através da evaporação da água e do descarte da película, o peso útil final é inferior ao peso inicial. O custo total pago permanece o mesmo, o que significa que o custo por quilograma útil aumenta proporcionalmente ao peso total perdido."
  }
];

const howTo = [
  {
    name: "Inserir peso inicial",
    text: "Introduza o peso inicial da peça de carne antes da maturação a seco."
  },
  {
    name: "Definir dias de maturação",
    text: "Selecione a duração total da maturação a seco, normalmente entre 1 e 60 dias."
  },
  {
    name: "Ajustar a humidade relativa",
    text: "Defina a humidade da sua câmara (o ideal é 75% a 85%) para determinar a taxa de perda de água."
  },
  {
    name: "Inserir preço original",
    text: "Indique o custo por quilograma da carne fresca para compará-lo com o custo final do rendimento útil."
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
  slug: 'calculadora-maturacao-carne',
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  ui: {
    title: 'Calculadora de Maturação a Seco',
    subtitle: 'Simule a perda de peso e calcule o custo do rendimento útil final',
    startWeightLabel: 'Peso Inicial',
    daysLabel: 'Tempo de Maturação',
    pricePerKgLabel: 'Preço Original',
    humidityLabel: 'Humidade Relativa',
    finalWeightLabel: 'Peso Útil Final',
    yieldLabel: 'Rendimento Útil Total',
    originalCostLabel: 'Custo Total Inicial',
    finalCostPerKgLabel: 'Preço Útil Final',
    moistureLossLabel: 'Perda por Evaporação de Humidade',
    trimmingLossLabel: 'Desperdício por Aparagem da Película',
    warningLowHumidity: 'Aviso: A humidade está abaixo de 75%. A superfície pode secar muito rapidamente, causando endurecimento da camada externa.',
    warningHighHumidity: 'Aviso: A humidade está acima de 85%. Risco elevado de deterioração bacteriana ou crescimento de bolor indesejado.',
    timelineTitle: 'Linha de Tempo de Maturação a Seco',
    timelineInfoText: 'Clique ao longo da linha de tempo para pré-visualizar as alterações físicas na carne'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Ciência e Economia da Maturação de Carne a Seco',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'A maturação a seco (dry aging) é uma arte culinária que combina microbiologia, bioquímica e física para transformar cortes bovinos em iguarias macias e com sabor concentrado.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '75-85%',
          label: 'Humidade Ideal',
          icon: 'mdi:water-percent'
        },
        {
          value: '1-3°C',
          label: 'Temp. Ideal',
          icon: 'mdi:thermometer'
        },
        {
          value: '15%',
          label: 'Perda de Aparagem',
          icon: 'mdi:knife'
        },
        {
          value: '30-45 d',
          label: 'Tempo Padrão',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: 'Compreender a Dinâmica de Perda de Peso e a Curva Asseptótica',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'A perda de peso durante o dry aging é assintótica. Nos primeiros 14 dias, a água evapora rapidamente das camadas externas. Forma-se uma crosta dura e escura (película) que desacelera a evaporação posterior após 2 a 3 semanas.'
    },
    {
      type: 'list',
      items: [
        '<strong>Dias 1-14:</strong> Evaporação rápida. A carne perde entre 10% e 12% do seu peso (principalmente água). As fibras musculares encolhem e os sabores concentram-se.',
        '<strong>Dias 15-30:</strong> A evaporação desacelera com a formação da película. Enzimas (calpaínas e catepsinas) degradam o colagénio, tornando a carne mais macia.',
        '<strong>Dias 30-45:</strong> Perda de água adicional mínima. Desenvolvimento de notas intensas a noz e queijo azul devido à oxidação de gorduras.',
        '<strong>Perda na Aparagem:</strong> Concluída a maturação, a crosta externa deve ser cortada, representando cerca de 15% de perda do peso total.'
      ]
    },
    {
      type: 'title',
      text: 'Controlos Ambientais na Câmara de Maturação',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Qualidade do ar, temperatura e humidade constantes são cruciais. Qualquer desvio pode estragar o corte.'
    },
    {
      type: 'list',
      items: [
        '<strong>Temperatura:</strong> Deve manter-se entre 1°C e 3°C. Abaixo de 0°C as enzimas congelam; acima de 4°C desenvolvem-se bactérias patogénicas.',
        '<strong>Humidade Relativa (HR):</strong> O intervalo ideal é de 75% a 85%. Abaixo de 70% ocorre endurecimento precoce da crosta; acima de 85% crescem bolores indesejados.',
        '<strong>Fluxo de Ar:</strong> É necessária uma circulação de ar contínua para secar a superfície de forma uniforme.'
      ]
    },
    {
      type: 'title',
      text: 'Implicações Financeiras e Cálculos de Custo',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Devido à evaporação e aparagem, a porção comestível diminui, aumentando o preço efetivo por quilograma.'
    },
    {
      type: 'table',
      headers: ['Duração da Maturação', 'Ø Perda por Evaporação', 'Ø Perda na Aparagem', 'Rendimento Total', 'Multiplicador de Custo'],
      rows: [
        ['14 Dias', '10.5%', '15.0%', '74.5%', '1.34x'],
        ['21 Dias', '13.5%', '15.0%', '71.5%', '1.40x'],
        ['30 Dias', '17.5%', '15.0%', '67.5%', '1.48x'],
        ['45 Dias', '21.0%', '15.0%', '64.0%', '1.56x'],
        ['60 Dias', '24.0%', '15.0%', '61.0%', '1.64x']
      ]
    },
    {
      type: 'title',
      text: 'Diretrizes de Segurança: Microbiologia e Bolores Bons vs Maus',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Um dry aging seguro baseia-se no crescimento de microflora benéfica (fungos do género <em>Thamnidium</em>, <em>Mucor</em>, <em>Rhizopus</em>). A higiene rigorosa é indispensável.'
    },
    {
      type: 'list',
      items: [
        '<strong>Bons Indicadores:</strong> Uma crosta seca, firme, roxa escura ou castanha. Uma fina camada de bolor branco (semelhante à crosta de queijo) é normal.',
        '<strong>Maus Indicadores:</strong> Superfícies pegajosas, viscosas ou húmidas. Bolores verdes, pretos ou amarelados. Odor a amoníaco ou podridão indica deterioração.',
        '<strong>Higiene:</strong> Esterilize sempre a câmara, ganchos e prateleiras antes de colocar nova carne.'
      ]
    },
    {
      type: 'paragraph',
      html: 'Durante a maturação, registe a data de início, o peso e a temperatura. Verifique regularmente a circulação de ar e compare o peso final com a estimativa. Remova a crosta apenas depois de avaliar cuidadosamente o cheiro, a cor e a superfície da carne.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
