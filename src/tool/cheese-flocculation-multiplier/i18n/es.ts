import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calculadora Multiplicador de Floculacion para Queso';
const description = 'Encuentre el momento exacto para cortar la cuajada en la elaboracion artesanal de queso. Use el metodo del multiplicador de floculacion para calcular el tiempo de coagulacion, controlar la humedad y mejorar el rendimiento del queso con nuestra calculadora gratuita.';
const faq = [
  {
    question: 'Que es el metodo de floculacion en la elaboracion de queso?',
    answer: 'El metodo de floculacion es una tecnica utilizada para determinar el momento preciso para cortar la cuajada. Mide el tiempo desde la adicion del cuajo hasta la primera senal de gelificacion (floculacion) y multiplica este tiempo por un factor especifico segun el estilo de queso.'
  },
  {
    question: 'Como detecto el punto de floculacion?',
    answer: 'La forma mas comun es el metodo del cuenco. Coloque un cuenco pequeno, esterilizado y ligero de plastico sobre la superficie de la leche despues de anadir el cuajo. Toquelo o hagalo girar suavemente cada minuto. Inicialmente gira libremente. El momento en que el cuenco deja de girar o resiste el movimiento porque la leche ha comenzado a gelificar es el punto de floculacion.'
  },
  {
    question: 'Por que es tan critico el momento de cortar la cuajada?',
    answer: 'Cortar la cuajada en el momento correcto controla la sineresis (perdida de humedad). Cortar demasiado temprano produce cuajadas fragiles, perdida de grasa y bajo rendimiento. Cortar demasiado tarde produce una cuajada dura que retiene demasiada humedad o no drena correctamente, lo que lleva a un queso agrio y sobreacidificado.'
  },
  {
    question: 'Que es un multiplicador de floculacion?',
    answer: 'Un multiplicador es un factor numerico que se aplica al tiempo de floculacion primario para calcular el tiempo total de coagulacion antes del corte. Los multiplicadores estandar van desde 2.0x (quesos secos como Parmesan) hasta 5.0x o 6.0x (quesos humedos como Camembert).'
  },
  {
    question: 'Como afectan la temperatura y la fuerza del cuajo a la floculacion?',
    answer: 'Las temperaturas mas altas y el cuajo mas fuerte aceleran la floculacion, lo que significa que la leche gelifica mas rapido. Sin embargo, dado que el tiempo total de corte es directamente proporcional al tiempo de floculacion, el metodo del multiplicador compensa automaticamente estos cambios, garantizando propiedades consistentes de la cuajada.'
  }
];

const howTo = [
  {
    name: 'Anadir cuajo e iniciar el temporizador',
    text: 'Incorpore bien el cuajo, luego inicie inmediatamente el cronometro de Fase 1 en la calculadora.'
  },
  {
    name: 'Realizar la prueba del cuenco',
    text: 'Coloque un cuenco ligero de plastico sobre la superficie de la leche y pruebe la resistencia regularmente.'
  },
  {
    name: 'Marcar el punto de floculacion',
    text: 'En el momento en que el cuenco resista el giro o el toque, haga clic en el boton de detener para registrar el tiempo de floculacion.'
  },
  {
    name: 'Seleccionar el tipo de queso o multiplicador',
    text: 'Elija un estilo de queso de la base de datos o ingrese un multiplicador personalizado. La app calcula el tiempo total e inicia la cuenta atras para el corte.'
  },
  {
    name: 'Cortar la cuajada en la senal',
    text: 'Cuando el temporizador llegue a cero, la cuajada ha alcanzado la tension optima. Corte la cuajada en cubos como se especifica en su receta.'
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
  description: 'Encuentre el momento exacto para cortar la cuajada en la elaboracion artesanal de queso. Use el metodo del multiplicador de floculacion para calcular el tiempo de coagulacion, controlar la humedad y mejorar el rendimiento del queso con nuestra calculadora gratuita.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: 'Multiplicador de Floculacion para Queso',
    subtitle: 'Encuentre la ventana perfecta de corte de cuajada basada en el comportamiento real de gelificacion',
    flocculationLabel: 'Tiempo de Floculacion Primario (minutos:segundos)',
    multiplierLabel: 'Multiplicador de Floculacion',
    cheeseTypeLabel: 'Preestablecido de Estilo de Queso',
    totalCoagulationLabel: 'Tiempo Total de Coagulacion',
    timeRemainingLabel: 'Tiempo Restante hasta el Corte',
    flocculationTimeLabel: 'Tiempo de Floculacion',
    moistureLabel: 'Retencion de Humedad Esperada de la Cuajada',
    customOption: 'Multiplicador Personalizado',
    startTimer: 'Iniciar Temporizador de Cuajo',
    markFlocculation: 'Marcar Floculacion',
    resetTimer: 'Reiniciar Temporizador',
    warningTitle: 'Advertencia de Calidad del Cuajo',
    warningText: 'El tiempo de floculacion registrado es excepcionalmente corto. Esto puede indicar una dosis excesiva de cuajo o ajustes de temperatura incorrectos, lo que podria causar una textura gomosa o sabores amargos.',
    phase1Title: 'Fase 1: Cuajado y Floculacion',
    phase2Title: 'Fase 2: Cuenta Atras de Coagulacion',
    phaseComplete: 'La cuajada esta lista para cortar!',
    statusWaiting: 'Incorporando cuajo...',
    statusFlocculated: 'Floculacion detectada',
    statusCoagulating: 'Coagulando...',
    statusReady: 'Lista para Cortar',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Cuando cortar la cuajada: El metodo del multiplicador de floculacion para queso perfecto en cada lote',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Si alguna vez se ha preguntado <strong>"cuando debo cortar la cuajada?"</strong> o <strong>"como se si la cuajada esta lista?"</strong>, la respuesta esta en el metodo del multiplicador de floculacion. A diferencia de la elaboracion industrial de queso que se basa en temporizadores fijos, los queseros artesanales miden el momento en que la leche comienza a gelificar (el punto de floculacion) y multiplican ese tiempo por un factor especifico del estilo. Esto captura todas las variables - acidez de la leche, nivel de calcio, temperatura, fuerza del cuajo - en una sola medicion. Nuestra <strong>calculadora de multiplicador de floculacion para queso</strong> hace las matematicas para que usted pueda cortar en el momento perfecto, cada vez.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2.0x', label: 'Quesos Duros', icon: 'mdi:cheese' },
        { value: '3.0x', label: 'Quesos Semiduros', icon: 'mdi:cheese' },
        { value: '5.0x', label: 'Quesos Blandos', icon: 'mdi:cheese' },
        { value: '10-15m', label: 'Floculacion Tipica', icon: 'mdi:timer-outline' }
      ]
    },
    {
      type: 'title',
      text: 'Problemas comunes de la elaboracion de queso resueltos por el metodo de floculacion',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Firmeza inconsistente de la cuajada:</strong> Los temporizadores fijos no pueden tener en cuenta las variaciones de lote en la leche. El metodo de floculacion se adapta a la quimica real de su leche.',
        '<strong>Bajo rendimiento de queso:</strong> Cortar demasiado temprano o demasiado tarde causa perdida de grasa y proteina. El metodo del multiplicador apunta a la ventana exacta para una retencion optima.',
        '<strong>Contenido de humedad incorrecto:</strong> Los quesos duros necesitan cuajada seca; los quesos blandos necesitan cuajada humeda. Diferentes multiplicadores (2.0x a 6.0x) controlan directamente la sineresis.',
        '<strong>Actividad variable del cuajo:</strong> La fuerza del cuajo cambia con el tiempo y entre marcas. La medicion del tiempo de floculacion captura la actividad real en su cuba en este momento.'
      ]
    },
    {
      type: 'title',
      text: 'Como realizar la prueba del cuenco paso a paso',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'La prueba del cuenco es la forma mas sencilla de detectar la floculacion sin equipo especial. Despues de anadir el cuajo y remover bien, coloque un cuenco pequeno de plastico esterilizado o una tapa de botella sobre la superficie de la leche. Cada 30 a 60 segundos, toquelo o hagalo girar suavemente. Mientras la leche esta aun liquida, el cuenco se mueve libremente. En el momento en que resista el movimiento - ese es su <strong>punto de floculacion</strong>. Registre este tiempo e introduzcalo en la calculadora de arriba.'
    },
    {
      type: 'tip',
      title: 'Use una tapa de botella para mayor sensibilidad',
      html: 'Una tapa de botella de plastico ligera es mas sensible que un cuenco y da un punto de parada mas claro. Esterilicela en agua hirviendo durante 2 minutos antes de usarla, y mantengala flotando en la leche desde el momento en que anada el cuajo.'
    },
    {
      type: 'tip',
      title: 'Mantenga su temperatura estable',
      html: 'El tiempo de floculacion depende en gran medida de la temperatura. Una caida de solo 2C puede duplicar su tiempo de floculacion. Mantenga la leche a una temperatura estable (tipicamente 30-35C segun el estilo de queso) durante toda la fase de coagulacion.'
    },
    {
      type: 'tip',
      title: 'Vigile la floculacion muy rapida',
      html: 'Si la floculacion ocurre en menos de 8 minutos (480 segundos), es posible que haya anadido demasiado cuajo o que la temperatura de la leche sea demasiado alta. Esto puede causar una textura gomosa y sabores amargos. La calculadora le advertira si esto sucede.'
    },
    {
      type: 'title',
      text: 'Referencia del multiplicador de floculacion por tipo de queso',
      level: 2
    },
    {
      type: 'table',
      headers: ['Estilo de Queso', 'Multiplicador', 'Humedad Esperada', 'Firmeza de Corte', 'Potencial de Maduracion'],
      rows: [
        ['Parmesan, Grana', '2.0x', 'Muy baja', 'Muy firme', '12+ meses'],
        ['Mozzarella (fresca)', '2.0x', 'Muy alta', 'Blanda / Elastica', 'Solo fresca'],
        ['Suizo, Alpino', '2.5x', 'Baja', 'Firme', '6-12 meses'],
        ['Cheddar, Gouda', '3.0x', 'Media-baja', 'Firme / Elastic', '3-12 meses'],
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
          description: 'Se usa para variedades de queso duro y seco que requieren baja retencion de humedad.',
          highlight: false,
          points: ['Mozzarella y Parmesan: 2.0x', 'Estilos alpinos: 2.5x', 'Drenaje rapido de suero', 'Produce cuajada densa y madurable']
        },
        {
          title: 'Multiplicador Medio 3.0x to 4.0x',
          icon: 'mdi:cheese',
          description: 'Rango estandar para quesos semiduros que equilibran humedad y acidez.',
          highlight: true,
          points: ['Cheddar y Gouda: 3.0x', 'Quesos azules: 3.5x a 4.0x', 'Expulsion de suero equilibrada', 'Potencial de curacion flexible']
        },
        {
          title: 'Multiplicador Alto 5.0x to 6.0x',
          icon: 'mdi:cheese',
          description: 'Se usa para quesos blandos, cremosos y de alta humedad.',
          highlight: false,
          points: ['Camembert y Brie: 5.0x', 'Frescos y cortezas enmohecidas', 'Alta retencion de humedad', 'Desarrollo de pasta delicada y cremosa']
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Solucion de problemas: 3 senales de que su cuajada no esta cuajando bien',
      html: '<strong>Floculacion en menos de 6 minutos:</strong> Demasiado cuajo o leche demasiado caliente. Reduzca el cuajo en un 25% el proximo lote. <strong>Floculacion tarda mas de 25 minutos:</strong> El cuajo puede estar vencido, la leche demasiado fria o el contenido de calcio demasiado bajo. Anada cloruro de calcio. <strong>La cuajada es viscosa o quebradiza al cortar:</strong> El multiplicador puede ser demasiado alto o demasiado bajo para su estilo de queso. Ajuste en incrementos de 0.5x.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Quesos Duros (Parmesan, Alpino)',
      html: 'Use <strong>multiplicador 2.0x - 2.5x</strong>. Corte la cuajada antes para maxima expulsion de suero. Estas cuajadas se cortan cuando el gel es aun relativamente fragil, produciendo una cuajada densa y seca ideal para maduracion prolongada. La calculadora mostrara un tiempo de coagulacion total mas corto.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Quesos Semiduros (Cheddar, Gouda)',
      html: 'Use <strong>multiplicador 3.0x</strong>. El rango estandar para la mayoria de la elaboracion artesanal de queso. Equilibra la retencion de humedad con el drenaje de suero. La cuajada es elastica y se rompe limpiamente. La mayoria de las recetas de queso caen en esta categoria.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Quesos Blandos (Camembert, Brie)',
      html: 'Use <strong>multiplicador 5.0x - 6.0x</strong>. Permita que el gel se fortalezca significativamente antes de cortar. Esto retiene la humedad dentro de la cuajada, creando la textura cremosa y untable caracteristica de los quesos de corteza enmohecida. Maneje la cuajada con suavidad para evitar perder el suero retenido.'
    },
    {
      type: 'title',
      text: 'Glosario de cuajada para la elaboracion artesanal de queso',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Punto de Floculacion', definition: 'El momento en el proceso de elaboracion de queso en el que las proteinas de la leche comienzan a agruparse y formar un gel suave.' },
        { term: 'Cuajo', definition: 'Un complejo de enzimas (principalmente quimosina) utilizado para coagular la leche, separandola en solidos (cuajada) y liquido (suero).' },
        { term: 'Sinéresis', definition: 'La extraccion o expulsion de un liquido de un gel, como el suero que drena de la cuajada de queso.' },
        { term: 'Tiempo de Coagulacion', definition: 'La duracion total desde la adicion del cuajo hasta que la cuajada esta lista para ser cortada.' }
      ]
    },
    {
      type: 'summary',
      title: 'Conclusiones clave para el corte perfecto de la cuajada',
      items: [
        'Mida el tiempo de floculacion con precision usando la prueba del cuenco. Introduzcalo en la calculadora de arriba.',
        'Seleccione el multiplicador que coincida con su estilo de queso: 2.0x para duros, 3.0x para semiduros, 5.0x para blandos.',
        'Mantenga la temperatura de la leche estable durante la coagulacion. Incluso un cambio de 2C altera el tiempo de floculacion significativamente.',
        'Si la floculacion ocurre en menos de 8 minutos, reduzca el cuajo la proxima vez. Si supera los 25 minutos, verifique la frescura del cuajo.',
        'La calculadora maneja las matematicas para que usted pueda concentrarse en la tecnica y la consistencia.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
