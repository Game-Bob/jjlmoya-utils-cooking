import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Bicarbonato y Polvo de Hornear: Neutralizador de Ácidos para Levadura";
const description = "Calcula la proporción exacta de bicarbonato y polvo de hornear para tu receta. Neutraliza ingredientes ácidos como suero de mantequilla y yogur, evita el regusto metálico y consigue un leudado perfecto en cada horneado.";
const faq = [
  {
    question: "¿Por qué al sustituir polvo de hornear por bicarbonato hace falta un ácido?",
    answer: "El bicarbonato sódico es una base pura. Necesita una fuente ácida para activarse y liberar dióxido de carbono. Sin suficiente ácido, el bicarbonato no reacciona por completo y deja un sabor amargo y metálico en el producto horneado."
  },
  {
    question: "¿Cuál es la diferencia entre bicarbonato y polvo de hornear?",
    answer: "El bicarbonato es 100% bicarbonato de sodio, una base. El polvo de hornear es un leudante completo que contiene bicarbonato más un agente acidificante seco (como cremor tártaro) y almidón. El polvo de hornear se auto-neutraliza."
  },
  {
    question: "¿Cuánto polvo de hornear equivale a 1 cucharadita de bicarbonato?",
    answer: "El bicarbonato es entre 3 y 4 veces más potente que el polvo de hornear. Para reemplazar 1 cucharadita de bicarbonato necesitas aproximadamente 3 o 4 cucharaditas de polvo de hornear. Sin embargo, esta sustitución también añade sales ácidas que pueden alterar el sabor, así que lo mejor es usar nuestra calculadora para obtener conversiones precisas."
  },
  {
    question: "¿Por qué mi bizcocho sabe a jabón o a metal?",
    answer: "Un regusto a jabón o metálico es el signo clásico de bicarbonato sin reaccionar. Cuando no hay suficiente ácido en la masa para neutralizar por completo el bicarbonato de sodio, el residuo alcalino permanece tras el horneado y produce ese sabor químico desagradable. Usa nuestra calculadora para garantizar una neutralización completa."
  },
  {
    question: "¿Puedo usar cacao en polvo alcalinizado como ácido?",
    answer: "No. El cacao alcalinizado (proceso holandés) ha sido tratado con un agente alcalinizante para reducir su acidez natural (pH ~7-8). Solo el cacao en polvo natural (pH ~5-6) es ácido y neutralizará el bicarbonato."
  },
  {
    question: "¿Cómo afecta el bicarbonato al dorado de los productos horneados?",
    answer: "El bicarbonato aumenta el pH de la masa, haciéndola más alcalina. Un pH más alto acelera la reacción de Maillard, lo que produce cortezas más oscuras y sabores más profundos en galletas y bizcochos."
  }
];

const howTo = [
  {
    name: "Introduce el peso de la harina",
    text: "Indica el peso total de harina de tu receta en gramos u onzas para calcular la potencia leudante total necesaria."
  },
  {
    name: "Añade los ingredientes ácidos",
    text: "Selecciona los ingredientes ácidos de tu receta (como suero de mantequilla, yogur o zumo de limón) e introduce sus pesos."
  },
  {
    name: "Comprueba el equilibrio de pH",
    text: "Observa la balanza virtual de pH. Una balanza equilibrada indica una neutralización óptima sin sabores metálicos indeseados."
  },
  {
    name: "Mide los leudantes",
    text: "Lee la cantidad recomendada de bicarbonato para la neutralización y el refuerzo de polvo de hornear necesario para alcanzar el leudado objetivo."
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
  slug: 'neutralizador-acido-levadura',
  title: 'Neutralizador de Ácidos para Levadura',
  description: 'Calcula la proporción exacta de bicarbonato y polvo de hornear para tu receta. Neutraliza ingredientes ácidos como suero de mantequilla y yogur, evita el regusto metálico y consigue un leudado perfecto en cada horneado.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: "Neutralizador de Ácidos para Levadura",
    subtitle: "Estequiometría precisa para un leudado y sabor perfectos en repostería",
    flourLabel: "Peso de Harina",
    addAcidLabel: "Añadir Ingrediente Ácido",
    weightLabel: "Peso",
    removeButton: "Eliminar",
    bakingSodaNeeded: "Bicarbonato Neutralizante",
    requiredBakingPowder: "Leudado Objetivo",
    providedBakingPowderEquivalent: "Leudado del Bicarbonato",
    boosterBakingPowder: "Refuerzo Extra de Polvo de Hornear",
    resultsTitle: "Leudantes Calculados",
    statusBalanced: "Equilibrado",
    statusAcidic: "Exceso de Ácido",
    statusAlkaline: "Exceso de Base",
    gramsUnit: "g",
    ouncesUnit: "oz",
    teaspoonsUnit: "cdta",
    scaleBalanceTitle: "Balanza Virtual de pH",
    acidListTitle: "Ingredientes Ácidos",
    unitLabel: "Sistema de Medida",
    metricUnit: "Métrico (g)",
    imperialUnit: "Imperial (oz)",
    acid_buttermilk: "Suero de Mantequilla",
    acid_yogurt: "Yogur",
    acid_sour_cream: "Crema Agria",
    acid_honey: "Miel",
    acid_molasses: "Melaza",
    acid_cocoa: "Cacao Natural en Polvo",
    acid_lemon_juice: "Zumo de Limón",
    acid_vinegar: "Vinagre"
  },
  faq,
  howTo,
  seo: [
    {
      type: 'summary',
      title: 'Puntos Clave para un Leudado Perfecto',
      items: [
        'El bicarbonato necesita ácido para activarse; sin él, tus horneados sabrán a jabón y a metal',
        'El polvo de hornear se auto-neutraliza y aporta potencia leudante extra como refuerzo',
        'El objetivo estándar es un 4% del peso de harina en equivalente de polvo de hornear para un buen leudado',
        'Usa la tabla de neutralización a continuación para emparejar tus ingredientes ácidos con la cantidad correcta de bicarbonato'
      ]
    },
    {
      type: 'title',
      text: 'La Química de los Leudantes Químicos en Repostería',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'El leudado químico se basa en <strong>reacciones de neutralización ácido-base</strong> que producen dióxido de carbono (CO2), el cual queda atrapado en la matriz de la masa y la hace subir durante el horneado. Lograr la proporción correcta entre bicarbonato de sodio e ingredientes ácidos es crucial. <strong>Demasiado bicarbonato</strong> deja residuos alcalinos sin reaccionar que producen sabor a jabón, regusto metálico y manchas amarillas. <strong>Demasiado ácido</strong> puede dar como resultado un horneado denso, plano y con poco volumen.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '3-4x',
          label: 'Bicarbonato más potente que el polvo de hornear',
          icon: 'mdi:flash'
        },
        {
          value: '4%',
          label: 'Leudado objetivo (% del peso de harina)',
          icon: 'mdi:target'
        },
        {
          value: '1/4 cdta',
          label: 'Bicarbonato por cada 120g de suero/yogur',
          icon: 'mdi:spoon-sugar'
        },
        {
          value: '0.0125',
          label: 'Ratio de neutralización (ácidos lácteos)',
          icon: 'mdi:scale-balance'
        }
      ]
    },
    {
      type: 'title',
      text: 'Bicarbonato vs. Polvo de Hornear: Comparativa Completa',
      level: 3
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Bicarbonato de Sodio',
          icon: 'mdi:flask-outline',
          description: 'Bicarbonato de sodio puro (NaHCO3). Una base alcalina fuerte que requiere un ácido externo para activarse y producir CO2.',
          points: [
            'De 3 a 4 veces más potente que el polvo de hornear',
            'Necesita ácido (suero, yogur, zumo de limón) para reaccionar',
            'El exceso causa sabor a jabón, regusto metálico y miga amarilla',
            'Eleva el pH; potencia el dorado Maillard en galletas',
            'Acción simple: libera CO2 inmediatamente al mezclar'
          ]
        },
        {
          title: 'Polvo de Hornear',
          icon: 'mdi:flask-round-bottom-outline',
          description: 'Un sistema leudante completo que contiene bicarbonato + sales ácidas secas + almidón. Auto-neutralizable y fiable.',
          highlight: true,
          points: [
            'Contiene su propio ácido (fosfato monocálcico, pirofosfato ácido de sodio)',
            'Doble acción: libera CO2 al mezclar Y al calentar',
            'Sin regusto metálico; pH ya equilibrado',
            'Menos potente por gramo; usar 3-4 veces más para igualar al bicarbonato',
            'Ideal como refuerzo cuando el bicarbonato solo no puede leudar toda la harina'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Ingrediente Ácido', 'Peso Estándar', 'Bicarbonato Neutralizante', 'Ratio de Neutralización'],
      rows: [
        ['Suero / Yogur / Crema Agria', '120g (1/2 Taza)', '1.5g (1/4 cdta)', '0.0125'],
        ['Zumo de Limón / Vinagre', '15g (1 cda)', '1.5g (1/4 cdta)', '0.1000'],
        ['Cacao Natural en Polvo', '80g (1 Taza)', '3.0g (1/2 cdta)', '0.0375'],
        ['Miel', '340g (1 Taza)', '3.0g (1/2 cdta)', '0.0088'],
        ['Melaza', '328g (1 Taza)', '3.0g (1/2 cdta)', '0.0091']
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Solución de Problemas: ¿Esta tu Leudado Desequilibrado?',
      badge: 'Chequeo Rápido',
      html: '<strong>Si tu bizcocho se hundió:</strong> Demasiado ácido o muy poco leudante en general; el CO2 escapó antes de que la estructura cuajara.<br/><br/><strong>Si tu bizcocho es denso y plano:</strong> Demasiado ácido sin suficiente bicarbonato para neutralizarlo, o potencia leudante total insuficiente para el peso de harina.<br/><br/><strong>Si tu bizcocho sabe a jabón o metal:</strong> Exceso de bicarbonato sin reaccionar; añade más ingredientes ácidos o reduce el bicarbonato.<br/><br/><strong>Si tu bizcocho tiene manchas amarillas:</strong> Signo clásico de grumos de bicarbonato sin disolver y sin reaccionar; tamiza el bicarbonato con la harina la próxima vez.'
    },
    {
      type: 'title',
      text: 'Cómo Equilibrar Leudantes y Evitar el Sabor Metálico',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Para conseguir un sabor y un leudado óptimos, sigue este proceso: <strong>Primero</strong>, determina la cantidad de bicarbonato necesaria para neutralizar por completo los componentes ácidos de tu masa usando la tabla anterior. <strong>Después</strong>, convierte ese bicarbonato a su equivalente en polvo de hornear (multiplica por 4) y compáralo con la potencia leudante total que necesita tu harina; normalmente <strong>el 4% del peso de harina</strong> en equivalente de polvo de hornear. <strong>Si hay un déficit</strong>, añade la potencia leudante restante en forma de polvo de hornear neutro como refuerzo. Nuestra calculadora hace todo esto automáticamente.'
    },
    {
      type: 'list',
      icon: 'mdi:alert-circle-outline',
      items: [
        'Nunca sustituyas bicarbonato 1:1 por polvo de hornear; el bicarbonato es 3-4 veces más potente y necesita ácido',
        'Tamiza siempre el bicarbonato con los ingredientes secos para evitar grumos amargos',
        'El cacao alcalinizado NO es ácido; usa cacao natural en polvo si dependes del cacao como fuente de ácido',
        'La miel y la melaza son ácidos débiles; necesitan mucho menos bicarbonato por gramo que el zumo de limón',
        'Trabaja rápido tras mezclar: la levadura química empieza a reaccionar inmediatamente al contacto con el líquido'
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ratio de Neutralización',
          definition: 'La proporción de bicarbonato necesaria para neutralizar por completo un peso dado de ingrediente ácido. Ratios más bajos significan que el ingrediente es menos ácido por gramo.'
        },
        {
          term: 'Potencia Leudante',
          definition: 'La cantidad total de gas CO2 que un agente leudante puede producir. Se mide en equivalentes de polvo de hornear, donde el 4% del peso de harina es el objetivo estándar para bizcochos y magdalenas.'
        },
        {
          term: 'Polvo de Hornear de Doble Acción',
          definition: 'Polvo de hornear que libera CO2 en dos etapas: primero al mezclarse con líquido a temperatura ambiente, y después al exponerse al calor del horno. Proporciona un leudado más fiable.'
        },
        {
          term: 'Reacción de Maillard',
          definition: 'Una reacción química entre aminoácidos y azúcares reductores que dora los alimentos y crea sabores complejos. Se potencia con un pH más alto debido al exceso de bicarbonato; deseable en galletas, indeseable en bizcochos delicados.'
        },
        {
          term: 'Equilibrio de pH',
          definition: 'La medida de acidez o alcalinidad de la masa. Un pH neutro (alrededor de 7) significa que todo el bicarbonato ha reaccionado con todo el ácido. Ligeramente alcalino favorece el dorado; ácido favorece la ternura.'
        }
      ]
    },
    {
      type: 'tip',
      html: '<strong>Dorado y pH:</strong> Aunque la neutralización completa es clave para el sabor, una masa ligeramente alcalina (por un pequeño exceso de bicarbonato) puede ser deseable en bizcochos de chocolate y galletas. Un pH más alto potencia el dorado de Maillard, produciendo colores más oscuros, bordes más crujientes y notas caramelizadas más profundas. Para bizcochos delicados de vainilla, busca la neutralización exacta para conservar un sabor puro y limpio.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
