import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Estabilidad de Emulsión y Límite de Aceite";
const description = "Descubra exactamente cuánto aceite puede soportar su mayonesa, alioli o vinagreta antes de romperse. Evite salsas cortadas con nuestra calculadora gratuita de estabilidad de emulsión.";
const faq = [
  {
    question: "¿Cuánto aceite puedo añadir a mi mayonesa antes de que se rompa?",
    answer: "Depende del emulsionante. La yema de huevo soporta hasta ~78% de aceite (aproximadamente 3.5 veces el volumen de agua), la mostaza hasta 70%, la lecitina de soja hasta 82% y el polisorbato hasta 85%. Use la calculadora para obtener el máximo exacto para sus cantidades específicas."
  },
  {
    question: "¿Por qué se rompió o cortó mi emulsión?",
    answer: "Una emulsión se rompe cuando la fracción volumétrica de aceite supera el límite máximo de empaquetamiento del emulsionante. En ese punto, las gotas de aceite se comprimen tanto que se fusionan y la mezcla se separa. Esto ocurre al instante - no es un proceso gradual."
  },
  {
    question: "¿Cómo arreglo una mayonesa o alioli cortada?",
    answer: "Comience con una yema de huevo fresca o una cucharada de agua tibia en un bol limpio. Añada lentamente la mezcla cortada mientras bate constantemente, igual que si añadiera aceite crudo. La calculadora le indica exactamente cuánta agua o yema necesita."
  },
  {
    question: "¿Añadir aceite demasiado rápido causa que una emulsión se rompa?",
    answer: "Añadir aceite demasiado rápido puede sobrecargar temporalmente el emulsionante, pero la causa real de la ruptura es siempre una relación de fases incorrecta. Si su fracción de aceite se mantiene por debajo del límite del emulsionante, la emulsión permanece estable independientemente de la velocidad. Si supera el límite, la ruptura es inevitable."
  },
  {
    question: "¿Cuál es la diferencia entre la yema de huevo y la mostaza como emulsionantes?",
    answer: "La yema de huevo (78% máx. de aceite) contiene lecitina y lipoproteínas que forman una película robusta alrededor de las gotas. La mostaza (70% máx. de aceite) depende de mucílagos y proteínas - es más débil pero añade sabor. La lecitina de soja (82%) y el polisorbato (85%) son emulsionantes industriales de alta eficiencia."
  }
];

const howTo = [
  {
    name: "Seleccione su emulsionante",
    text: "Elija el emulsionante en su receta - yema de huevo para mayonesa clásica, mostaza para vinagretas, o lecitina de soja/polisorbato para cocina modernista. Cada uno establece un límite máximo de aceite diferente."
  },
  {
    name: "Ingrese el volumen de la fase acuosa",
    text: "Introduzca los mililitros totales de sus ingredientes acuosos: agua, vinagre, jugo de limón, vino o cualquier líquido a base de agua. La calculadora añade automáticamente el contenido de agua de su emulsionante seleccionado."
  },
  {
    name: "Establezca su volumen de aceite",
    text: "Ingrese la cantidad de aceite que planea usar. Use el deslizador o escriba el valor. La calculadora muestra instantáneamente si esta cantidad producirá una emulsión stable o causará su ruptura."
  },
  {
    name: "Lea el resultado de estabilidad y corrija si es necesario",
    text: "Revise el indicador de fracción volumétrica de aceite. Si es estable, está listo. Si está roto, el panel de rescate le indica exactamente cuánta agua (en ml) o cuántas yemas de huevo adicionales necesita añadir para restaurar el equilibrio."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo' as const,
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
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'calculadora-estabilidad-emulsion',
  title: 'Calculadora de Estabilidad de Emulsión y Límite de Aceite',
  description: 'Descubra exactamente cuánto aceite puede soportar su mayonesa, alioli o vinagreta antes de romperse. Evite salsas cortadas con nuestra calculadora gratuita de estabilidad de emulsión.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: 'Analizador de Estabilidad de Emulsión',
    subtitle: '¿Cuánto aceite puede soportar su salsa antes de romperse?',
    waterLabel: 'Fase Acuosa (ml)',
    oilLabel: 'Volumen de Aceite (ml)',
    emulsifierLabel: 'Tipo de Emulsionante',
    yolkOption: 'Yema de Huevo',
    mustardOption: 'Mostaza',
    soyLecithinOption: 'Lecitina de Soja',
    polysorbateOption: 'Polisorbato',
    stableStatus: 'Emulsión Estable',
    brokenStatus: 'Emulsión Rota',
    ratioLabel: 'Fracción Volumétrica de Aceite',
    maxLimitLabel: 'Límite Máximo de Aceite',
    fixTitle: 'Estrategia de Rescate',
    waterFixText: 'Añada agua para restaurar el equilibrio de fases:',
    yolkFixText: 'Alternativamente, use yema de huevo adicional:',
    idealRangeText: 'El rango ideal está por debajo del límite crítico de empaquetamiento del 74% al 80%.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '¿Cuánto Aceite Puede Soportar una Mayonesa o Alioli Antes de Romperse?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Todo cocinero se ha hecho esta pregunta: <strong>¿por qué se me cortó la mayonesa?</strong> La respuesta es más simple de lo que parece. Una emulsión - ya sea una alioli clásica, una vinagreta cremosa o una espuma modernista - solo puede contener una cantidad finita de aceite antes de colapsar. Nuestra <strong>calculadora de estabilidad de emulsión</strong> le indica exactamente dónde está ese punto de ruptura, según sus ingredientes y porciones específicas.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '78%',
          label: 'Yema Máx. Aceite',
          icon: 'mdi:egg-outline'
        },
        {
          value: '85%',
          label: 'Límite Polisorbato',
          icon: 'mdi:flask-outline'
        },
        {
          value: '74%',
          label: 'Empaquetamiento Teórico',
          icon: 'mdi:sphere'
        },
        {
          value: '15 ml',
          label: 'Agua de la Yema',
          icon: 'mdi:water'
        }
      ]
    },
    {
      type: 'list',
      items: [
        '<strong>Añade aceite demasiado rápido</strong> - La velocidad raramente es la causa real. Si la fracción de aceite se mantiene bajo el límite del emulsionante, la emulsión aguantará sin importar la velocidad de vertido.',
        '<strong>Los ingredientes están demasiado fríos</strong> - Los huevos o el aceite fríos aumentan la viscosidad y dificultan la formación de gotas. Siempre lleve los ingredientes a temperatura ambiente.',
        '<strong>Excedió el límite de aceite para su emulsionante</strong> - Cada emulsionante tiene una fracción máxima de empaquetamiento. Yema de huevo hasta 78%, mostaza 70%, lecitina de soja 82% y polisorbato 85%.',
        '<strong>Su fase acuosa es demasiado pequeña</strong> - Sin suficiente agua para rodear las gotas de aceite, estas no tienen a dónde ir excepto fusionarse entre sí.'
      ]
    },
    {
      type: 'title',
      text: '¿Qué emulsionante debería usar? Comparativa práctica',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Elegir el emulsionante adecuado depende de su receta, perfil de sabor y capacidad de aceite deseada. Así se comparan los cuatro emulsionantes culinarios más comunes.'
    },
    {
      type: 'proscons',
      title: 'Yema de Huevo',
      items: [
        { pro: 'Máxima compatibilidad de sabor para salsas clásicas', con: 'Añade colesterol y sabor a huevo' },
        { pro: 'Contiene lecitina y lipoproteínas para emulsiones robustas', con: 'Requiere control cuidadoso de temperatura' },
        { pro: 'Añade color natural y riqueza', con: 'No apto para preparaciones veganas' },
        { pro: 'Funciona con hasta 78% de fracción de aceite', con: 'Limitado a unos 15 ml de aporte de agua por yema' }
      ]
    },
    {
      type: 'proscons',
      title: 'Mostaza',
      items: [
        { pro: 'Añade sabor picante y complejidad a aliños', con: 'Capacidad máxima de aceite menor (70%)' },
        { pro: 'Ampliamente disponible y fácil de usar', con: 'Poder emulsionante más débil que la yema de huevo' },
        { pro: 'Funciona bien a temperatura ambiente', con: 'El sabor puede chocar con salsas delicadas' },
        { pro: 'Ideal para vinagretas rápidas', con: 'No apto para emulsiones de sabor neutro' }
      ]
    },
    {
      type: 'proscons',
      title: 'Lecitina de Soja',
      items: [
        { pro: 'Alta tolerancia al aceite (82%) para salsas estables', con: 'Requiere pesaje preciso' },
        { pro: 'El sabor neutro no altera las recetas', con: 'Menos indulgente que la yema de huevo' },
        { pro: 'De origen vegetal y apto para veganos', con: 'No es un básico de despensa común en casa' },
        { pro: 'Funciona con volúmenes de agua reducidos', con: 'Puede crear una textura ligeramente artificial' }
      ]
    },
    {
      type: 'proscons',
      title: 'Polisorbato',
      items: [
        { pro: 'Máxima capacidad de aceite de cualquier emulsionante (85%)', con: 'Aditivo sintético, no natural' },
        { pro: 'Crea espumas y aires ultraestables', con: 'Difícil de conseguir para cocinas caseras' },
        { pro: 'Funciona con una fase acuosa mínima', con: 'Requiere báscula para una dosificación precisa' },
        { pro: 'Ideal para cocina modernista y experimental', con: 'Dominante si se usa en exceso' }
      ]
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Yema de Huevo',
          icon: 'mdi:egg-outline',
          description: 'El emulsionante clásico de mayonesa. Contiene lecitina y lipoproteínas.',
          highlight: true,
          points: [
            'Máx. aceite: 78%',
            '~15 ml agua por yema',
            'Añade riqueza y color',
            'Mejor para mayo y alioli'
          ]
        },
        {
          title: 'Mostaza',
          icon: 'mdi:shaker-outline',
          description: 'Depende de mucílagos y proteínas de semillas. Añade sabor picante.',
          points: [
            'Máx. aceite: 70%',
            '~10 ml contenido de agua',
            'Menor poder emulsionante',
            'Ideal para vinagretas'
          ]
        },
        {
          title: 'Lecitina de Soja',
          icon: 'mdi:leaf',
          description: 'Tensioactivo vegetal altamente concentrado.',
          points: [
            'Máx. aceite: 82%',
            '~5 ml contenido de agua',
            'Perfil de sabor neutro',
            'Básico en cocina modernista'
          ]
        },
        {
          title: 'Polisorbato',
          icon: 'mdi:flask-outline',
          description: 'Emulsionante sintético con máxima capacidad tensioactiva.',
          points: [
            'Máx. aceite: 85%',
            '~2 ml contenido de agua',
            'Mayor tolerancia al aceite',
            'Usado en espumas y aires'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emulsionante', 'Máx. Aceite %', 'Aceite por 100 ml Agua', 'Mejor Uso'],
      rows: [
        ['Yema de Huevo', '78%', '~355 ml', 'Mayonesa, alioli, holandesa'],
        ['Mostaza', '70%', '~233 ml', 'Vinagretas, aliños ligeros'],
        ['Lecitina de Soja', '82%', '~456 ml', 'Salsas modernistas, espumas'],
        ['Polisorbato', '85%', '~567 ml', 'Espumas estables, cocina experimental']
      ]
    },
    {
      type: 'title',
      text: 'La Ciencia: Por qué se rompen las emulsiones y cómo la conjetura de Kepler se aplica a su cocina',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Una emulsión culinaria funciona dispersando pequeñas gotas de aceite a lo largo de una fase acuosa continua. <strong>Los emulsionantes</strong> - como la lecitina en la yema de huevo, el mucílago en la mostaza o los tensioactivos sintéticos como el polisorbato - recubren cada gota y evitan que se fusione con sus vecinas.'
    },
    {
      type: 'paragraph',
      html: 'El punto de ruptura está determinado por la pura geometría. Las gotas de aceite se comportan como pequeñas esferas apiladas. El volumen máximo de esferas que cabe en un espacio dado - conocido como la <strong>conjetura de Kepler</strong> - es de aproximadamente 74%. En sistemas de cocina reales, esto puede extenderse al 80-85% con emulsionantes potentes, pero más allá de eso, las gotas se comprimen tanto que se fusionan y la emulsión colapsa al instante.'
    },
    {
      type: 'card',
      columns: 2,
      items: [
        {
          icon: 'mdi:egg-outline',
          title: 'Mayonesa y Alioli Clásicos',
          html: 'Use <strong>yema de huevo</strong> hasta un 78% de aceite. Comience con una yema por taza de aceite. Añada una cucharadita de agua o jugo de limón antes de verter aceite para un margen de seguridad más amplio.'
        },
        {
          icon: 'mdi:shaker-outline',
          title: 'Vinagretas y Aliños Ligeros',
          html: 'Use <strong>mostaza</strong> hasta un 70% de aceite. El mucílago de la mostaza proporciona suficiente emulsificación para una vinagreta temporal.'
        },
        {
          icon: 'mdi:leaf',
          title: 'Salsas Modernistas y Espumas Estables',
          html: 'Use <strong>lecitina de soja</strong> hasta un 82% de aceite. Ideal para emulsiones de sabor neutro donde desea que brille el sabor del aceite y del ácido.'
        },
        {
          icon: 'mdi:flask-outline',
          title: 'Espumas Experimentales y Aires',
          html: 'Use <strong>polisorbato</strong> hasta un 85% de aceite. La opción preferida para técnicas modernistas que requieren máxima carga de aceite y estabilidad.'
        }
      ]
    },
    {
      type: 'title',
      text: 'Cómo rescatar una emulsión rota paso a paso',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Si su mayonesa o salsa ya se ha cortado, <strong>no la tire</strong>. La solución es sencilla - pero solo si entiende la relación de fases. Batir con más fuerza no ayudará; necesita añadir más de la fase continua (agua).'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '3 signos de que su emulsión está a punto de romperse',
      html: 'Esté atento a <strong>espesamiento seguido de adelgazamiento repentino</strong>, una <strong>superficie brillante que se vuelve granulada</strong> o aceite visible acumulándose en los bordes. Si ve alguno de estos, deje de añadir aceite inmediatamente y bata una cucharadita de agua fría antes de continuar.'
    },
    {
      type: 'title',
      text: 'Consejos prácticos para emulsiones perfectas siempre',
      level: 3
    },
    {
      type: 'message',
      html: '<strong>La regla de oro:</strong> La relación de aceite y agua importa más que la técnica o la velocidad. Use nuestra calculadora para encontrar su límite exacto antes de batir.'
    },
    {
      type: 'tip',
      title: 'La Temperatura Importa',
      html: 'Todos los ingredientes deben estar a <strong>temperatura ambiente</strong>. Los huevos o el aceite fríos aumentan drásticamente el riesgo de ruptura. Saque los ingredientes de la nevera 30 minutos antes de comenzar.'
    },
    {
      type: 'tip',
      title: 'La Red de Seguridad del Agua',
      html: 'Si su receta no incluye suficiente ácido (vinagre, jugo de limón), añada <strong>una cucharadita de agua fría por yema de huevo</strong> antes de comenzar a añadir aceite. Esta agua extra crea un margen de seguridad más amplio.'
    },
    {
      type: 'tip',
      title: 'Arreglar un Lote Cortado',
      html: 'Ponga una yema de huevo fresca en un bol limpio. Bata con una cucharadita de agua. Luego, <strong>añada la mezcla cortada gota a gota lo más lentamente posible</strong>, exactamente como si fuera aceite crudo. Una vez que se re-emulsione, puede añadir el resto más rápido.'
    },
    {
      type: 'title',
      text: 'Glosario de emulsiones culinarias',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Fase Continua',
          definition: 'El líquido que rodea las gotas - generalmente agua, vinagre o jugo de cítricos en emulsiones de aceite en agua como la mayonesa.'
        },
        {
          term: 'Fase Dispersa',
          definition: 'El líquido dividido en pequeñas gotas - aceite en la mayoría de las emulsiones culinarias. Cuanto más añade, más juntas se empaquetan las gotas.'
        },
        {
          term: 'Fracción Volumétrica',
          definition: 'La relación del volumen de aceite con el volumen total. Alrededor del 74-85% (según el emulsionante), la emulsión alcanza su punto de ruptura geométrico.'
        },
        {
          term: 'Coalescencia',
          definition: 'Cuando dos o más gotas de aceite se fusionan en una más grande. Este es el proceso microscópico que desencadena una ruptura visible de la emulsión.'
        },
        {
          term: 'Inversión de Fase',
          definition: 'El punto donde una emulsión de aceite en agua se convierte en agua en aceite - como ocurre al hacer mantequilla a partir de nata. Esta es la forma definitiva de fallo.'
        }
      ]
    },
    {
      type: 'summary',
      title: 'Puntos Clave para Emulsiones Estables',
      items: [
        'Cada emulsionante tiene una fracción máxima de aceite: yema de huevo 78%, mostaza 70%, lecitina de soja 82%, polisorbato 85%.',
        'El punto de ruptura está determinado por la geometría (conjetura de Kepler al 74%), no por la velocidad de batido.',
        'Comience siempre con ingredientes a temperatura ambiente y añada una pequeña cantidad de agua como margen de seguridad.',
        'Una emulsión rota se rescata añadiendo emulsionante fresco y más fase acuosa, no batiendo más fuerte.',
        'Use nuestra calculadora de estabilidad de emulsión para obtener el límite exacto para sus ingredientes.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
