import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calculadora Multiplicador de Floculación para Queso';
const description = 'Encuentre el momento exacto para cortar la cuajada en la elaboración artesanal de queso. Use el método del multiplicador de floculación para calcular el tiempo de coagulación, controlar la humedad y mejorar el rendimiento del queso con nuestra calculadora gratuita.';
const faq = [
  {
    question: '¿Qué es el método de floculación en la elaboración de queso?',
    answer: 'El método de floculación es una técnica utilizada para determinar el momento preciso para cortar la cuajada. Mide el tiempo desde la adición del cuajo hasta la primera señal de gelificación (floculación) y multiplica este tiempo por un factor específico según el estilo de queso.'
  },
  {
    question: '¿Cómo detecto el punto de floculación?',
    answer: 'La forma más común es el método del cuenco. Coloque un cuenco pequeño, esterilizado y ligero de plástico sobre la superficie de la leche después de añadir el cuajo. Toquelo o hágalo girar suavemente cada minuto. Inicialmente gira libremente. El momento en que el cuenco deja de girar o resiste el movimiento porque la leche ha comenzado a gelificar es el punto de floculación.'
  },
  {
    question: '¿Por qué es tan crítico el momento de cortar la cuajada?',
    answer: 'Cortar la cuajada en el momento correcto controla la sinéresis (pérdida de humedad). Cortar demasiado temprano produce cuajadas frágiles, pérdida de grasa y bajo rendimiento. Cortar demasiado tarde produce una cuajada dura que retiene demasiada humedad o no drena correctamente, lo que lleva a un queso agrio y sobreacidificado.'
  },
  {
    question: '¿Qué es un multiplicador de floculación?',
    answer: 'Un multiplicador es un factor numérico que se aplica al tiempo de floculación primario para calcular el tiempo total de coagulación antes del corte. Los multiplicadores estándar van desde 2.0x (quesos secos como Parmesan) hasta 5.0x o 6.0x (quesos húmedos como Camembert).'
  },
  {
    question: '¿Cómo afectan la temperatura y la fuerza del cuajo a la floculación?',
    answer: 'Las temperaturas más altas y el cuajo más fuerte aceleran la floculación, lo que significa que la leche gelifica más rápido. Sin embargo, dado que el tiempo total de corte es directamente proporcional al tiempo de floculación, el método del multiplicador compensa automáticamente estos cambios, garantizando propiedades consistentes de la cuajada.'
  }
];

const howTo = [
  {
    name: 'Añadir cuajo e iniciar el temporizador',
    text: 'Incorpore bien el cuajo, luego inicie inmediatamente el cronómetro de Fase 1 en la calculadora.'
  },
  {
    name: 'Realizar la prueba del cuenco',
    text: 'Coloque un cuenco ligero de plástico sobre la superficie de la leche y pruebe la resistencia regularmente.'
  },
  {
    name: 'Marcar el punto de floculación',
    text: 'En el momento en que el cuenco resista el giro o el toque, haga clic en el botón de detener para registrar el tiempo de floculación.'
  },
  {
    name: 'Seleccionar el tipo de queso o multiplicador',
    text: 'Elija un estilo de queso de la base de datos o ingrese un multiplicador personalizado. La app calcula el tiempo total e inicia la cuenta atrás para el corte.'
  },
  {
    name: 'Cortar la cuajada en la señal',
    text: 'Cuando el temporizador llegue a cero, la cuajada ha alcanzado la tensión óptima. Corte la cuajada en cubos como se especifica en su receta.'
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
  slug: 'calculadora-multiplicador-floculacion-queso',
  title,
  description: 'Encuentre el momento exacto para cortar la cuajada en la elaboración artesanal de queso. Use el método del multiplicador de floculación para calcular el tiempo de coagulación, controlar la humedad y mejorar el rendimiento del queso con nuestra calculadora gratuita.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: 'Multiplicador de Floculación para Queso',
    subtitle: 'Encuentre la ventana perfecta de corte de cuajada basada en el comportamiento real de gelificación',
    flocculationLabel: 'Tiempo de Floculación Primario (minutos:segundos)',
    multiplierLabel: 'Multiplicador de Floculación',
    cheeseTypeLabel: 'Preestablecido de Estilo de Queso',
    totalCoagulationLabel: 'Tiempo Total de Coagulación',
    timeRemainingLabel: 'Tiempo Restante hasta el Corte',
    flocculationTimeLabel: 'Tiempo de Floculación',
    moistureLabel: 'Retención de Humedad Esperada de la Cuajada',
    customOption: 'Multiplicador Personalizado',
    startTimer: 'Iniciar Temporizador de Cuajo',
    markFlocculation: 'Marcar Floculación',
    resetTimer: 'Reiniciar Temporizador',
    warningTitle: 'Advertencia de Calidad del Cuajo',
    warningText: 'El tiempo de floculación registrado es excepcionalmente corto. Esto puede indicar una dosis excesiva de cuajo o ajustes de temperatura incorrectos, lo que podría causar una textura gomosa o sabores amargos.',
    phase1Title: 'Fase 1: Cuajado y Floculación',
    phase2Title: 'Fase 2: Cuenta Atrás de Coagulación',
    phaseComplete: '¡La cuajada está lista para cortar!',
    statusWaiting: 'Incorporando cuajo...',
    statusFlocculated: 'Floculación detectada',
    statusCoagulating: 'Coagulando...',
    statusReady: 'Lista para Cortar',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Cuándo cortar la cuajada: El método del multiplicador de floculación para queso perfecto en cada lote',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Si alguna vez se ha preguntado <strong>"¿cuándo debo cortar la cuajada?"</strong> o <strong>"¿cómo sé si la cuajada está lista?"</strong>, la respuesta está en el método del multiplicador de floculación. A diferencia de la elaboración industrial de queso que se basa en temporizadores fijos, los queseros artesanales miden el momento en que la leche comienza a gelificar (el punto de floculación) y multiplican ese tiempo por un factor específico del estilo. Esto captura todas las variables - acidez de la leche, nivel de calcio, temperatura, fuerza del cuajo - en una sola medición. Nuestra <strong>calculadora de multiplicador de floculación para queso</strong> hace las matemáticas para que usted pueda cortar en el momento perfecto, cada vez.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2.0x', label: 'Quesos Duros', icon: 'mdi:cheese' },
        { value: '3.0x', label: 'Quesos Semiduros', icon: 'mdi:cheese' },
        { value: '5.0x', label: 'Quesos Blandos', icon: 'mdi:cheese' },
        { value: '10-15m', label: 'Floculación Típica', icon: 'mdi:timer-outline' }
      ]
    },
    {
      type: 'title',
      text: 'Problemas comunes de la elaboración de queso resueltos por el método de floculación',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Firmeza inconsistente de la cuajada:</strong> Los temporizadores fijos no pueden tener en cuenta las variaciones de lote en la leche. El método de floculación se adapta a la química real de su leche.',
        '<strong>Bajo rendimiento de queso:</strong> Cortar demasiado temprano o demasiado tarde causa pérdida de grasa y proteína. El método del multiplicador apunta a la ventana exacta para una retención óptima.',
        '<strong>Contenido de humedad incorrecto:</strong> Los quesos duros necesitan cuajada seca; los quesos blandos necesitan cuajada húmeda. Diferentes multiplicadores (2.0x a 6.0x) controlan directamente la sinéresis.',
        '<strong>Actividad variable del cuajo:</strong> La fuerza del cuajo cambia con el tiempo y entre marcas. La medición del tiempo de floculación captura la actividad real en su cuba en este momento.'
      ]
    },
    {
      type: 'title',
      text: 'Cómo realizar la prueba del cuenco paso a paso',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'La prueba del cuenco es la forma más sencilla de detectar la floculación sin equipo especial. Después de añadir el cuajo y remover bien, coloque un cuenco pequeño de plástico esterilizado o una tapa de botella sobre la superficie de la leche. Cada 30 a 60 segundos, tóquelo o hágalo girar suavemente. Mientras la leche está aún líquida, el cuenco se mueve libremente. En el momento en que resista el movimiento - ese es su <strong>punto de floculación</strong>. Registre este tiempo e introdúzcalo en la calculadora de arriba.'
    },
    {
      type: 'tip',
      title: 'Use una tapa de botella para mayor sensibilidad',
      html: 'Una tapa de botella de plástico ligera es más sensible que un cuenco y da un punto de parada más claro. Esterilícela en agua hirviendo durante 2 minutos antes de usarla, y manténgala flotando en la leche desde el momento en que añada el cuajo.'
    },
    {
      type: 'tip',
      title: 'Mantenga su temperatura estable',
      html: 'El tiempo de floculación depende en gran medida de la temperatura. Una caída de solo 2C puede duplicar su tiempo de floculación. Mantenga la leche a una temperatura estable (típicamente 30-35C según el estilo de queso) durante toda la fase de coagulación.'
    },
    {
      type: 'tip',
      title: 'Vigile la floculación muy rápida',
      html: 'Si la floculación ocurre en menos de 8 minutos (480 segundos), es posible que haya añadido demasiado cuajo o que la temperatura de la leche sea demasiado alta. Esto puede causar una textura gomosa y sabores amargos. La calculadora le advertirá si esto sucede.'
    },
    {
      type: 'title',
      text: 'Referencia del multiplicador de floculación por tipo de queso',
      level: 2
    },
    {
      type: 'table',
      headers: ['Estilo de Queso', 'Multiplicador', 'Humedad Esperada', 'Firmeza de Corte', 'Potencial de Maduración'],
      rows: [
        ['Parmesan, Grana', '2.0x', 'Muy baja', 'Muy firme', '12+ meses'],
        ['Mozzarella (fresca)', '2.0x', 'Muy alta', 'Blanda / Elástica', 'Solo fresca'],
        ['Suizo, Alpino', '2.5x', 'Baja', 'Firme', '6-12 meses'],
        ['Cheddar, Gouda', '3.0x', 'Media-baja', 'Firme / Elástica', '3-12 meses'],
        ['Queso Azul', '3.5x - 4.0x', 'Media', 'Tierna', '2-6 meses'],
        ['Camembert, Brie', '5.0x', 'Alta', 'Muy tierna', '3-8 semanas'],
        ['Fresco / Chevre', '5.0x - 6.0x', 'Muy alta', 'Delicada', 'Fresco - 2 semanas']
      ]
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Multiplicador Bajo 2.0x to 2.5x',
          icon: 'mdi:cheese',
          description: 'Se usa para variedades de queso duro y seco que requieren baja retención de humedad.',
          highlight: false,
          points: ['Mozzarella y Parmesan: 2.0x', 'Estilos alpinos: 2.5x', 'Drenaje rápido de suero', 'Produce cuajada densa y madurable']
        },
        {
          title: 'Multiplicador Medio 3.0x to 4.0x',
          icon: 'mdi:cheese',
          description: 'Rango estándar para quesos semiduros que equilibran humedad y acidez.',
          highlight: true,
          points: ['Cheddar y Gouda: 3.0x', 'Quesos azules: 3.5x a 4.0x', 'Expulsión de suero equilibrada', 'Potencial de curación flexible']
        },
        {
          title: 'Multiplicador Alto 5.0x to 6.0x',
          icon: 'mdi:cheese',
          description: 'Se usa para quesos blandos, cremosos y de alta humedad.',
          highlight: false,
          points: ['Camembert y Brie: 5.0x', 'Frescos y cortezas enmohecidas', 'Alta retención de humedad', 'Desarrollo de pasta delicada y cremosa']
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Solución de problemas: 3 señales de que su cuajada no está cuajando bien',
      html: '<strong>Floculación en menos de 6 minutos:</strong> Demasiado cuajo o leche demasiado caliente. Reduzca el cuajo en un 25% el próximo lote. <strong>Floculación tarda más de 25 minutos:</strong> El cuajo puede estar vencido, la leche demasiado fría o el contenido de calcio demasiado bajo. Añada cloruro de calcio. <strong>La cuajada es viscosa o quebradiza al cortar:</strong> El multiplicador puede ser demasiado alto o demasiado bajo para su estilo de queso. Ajuste en incrementos de 0.5x.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Quesos Duros (Parmesan, Alpino)',
      html: 'Use <strong>multiplicador 2.0x - 2.5x</strong>. Corte la cuajada antes para máxima expulsión de suero. Estas cuajadas se cortan cuando el gel es aún relativamente frágil, produciendo una cuajada densa y seca ideal para maduración prolongada. La calculadora mostrará un tiempo de coagulación total más corto.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Quesos Semiduros (Cheddar, Gouda)',
      html: 'Use <strong>multiplicador 3.0x</strong>. El rango estándar para la mayoría de la elaboración artesanal de queso. Equilibra la retención de humedad con el drenaje de suero. La cuajada es elástica y se rompe limpiamente. La mayoría de las recetas de queso caen en esta categoría.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Quesos Blandos (Camembert, Brie)',
      html: 'Use <strong>multiplicador 5.0x - 6.0x</strong>. Permita que el gel se fortalezca significativamente antes de cortar. Esto retiene la humedad dentro de la cuajada, creando la textura cremosa y untable característica de los quesos de corteza enmohecida. Maneje la cuajada con suavidad para evitar perder el suero retenido.'
    },
    {
      type: 'title',
      text: 'Glosario de cuajada para la elaboración artesanal de queso',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Punto de Floculación', definition: 'El momento en el proceso de elaboración de queso en el que las proteínas de la leche comienzan a agruparse y formar un gel suave.' },
        { term: 'Cuajo', definition: 'Un complejo de enzimas (principalmente quimosina) utilizado para coagular la leche, separándola en sólidos (cuajada) y líquido (suero).' },
        { term: 'Sinéresis', definition: 'La extracción o expulsión de un líquido de un gel, como el suero que drena de la cuajada de queso.' },
        { term: 'Tiempo de Coagulación', definition: 'La duración total desde la adición del cuajo hasta que la cuajada está lista para ser cortada.' }
      ]
    },
    {
      type: 'summary',
      title: 'Conclusiones clave para el corte perfecto de la cuajada',
      items: [
        'Mida el tiempo de floculación con precisión usando la prueba del cuenco. Introdúzcalo en la calculadora de arriba.',
        'Seleccione el multiplicador que coincida con su estilo de queso: 2.0x para duros, 3.0x para semiduros, 5.0x para blandos.',
        'Mantenga la temperatura de la leche estable durante la coagulación. Incluso un cambio de 2C altera el tiempo de floculación significativamente.',
        'Si la floculación ocurre en menos de 8 minutos, reduzca el cuajo la próxima vez. Si supera los 25 minutos, verifique la frescura del cuajo.',
        'La calculadora maneja las matemáticas para que usted pueda concentrarse en la técnica y la consistencia.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
