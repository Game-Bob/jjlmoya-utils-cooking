import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Bicarbonato y Polvo de Hornear: Neutralizador de Acidos para Levadura";
const description = "Calcula la proporcion exacta de bicarbonato y polvo de hornear para tu receta. Neutraliza ingredientes acidos como suero de mantequilla y yogur, evita el regusto metalico y consigue un leudado perfecto en cada horneado.";
const faq = [
  {
    question: "Por que al sustituir polvo de hornear por bicarbonato hace falta un acido?",
    answer: "El bicarbonato sodico es una base pura. Necesita una fuente acida para activarse y liberar dioxido de carbono. Sin suficiente acido, el bicarbonato no reacciona por completo y deja un sabor amargo y metalico en el producto horneado."
  },
  {
    question: "Cual es la diferencia entre bicarbonato y polvo de hornear?",
    answer: "El bicarbonato es 100% bicarbonato de sodio, una base. El polvo de hornear es un leudante completo que contiene bicarbonato mas un agente acidificante seco (como cremor tartaro) y almidon. El polvo de hornear se auto-neutraliza."
  },
  {
    question: "Cuanto polvo de hornear equivale a 1 cucharadita de bicarbonato?",
    answer: "El bicarbonato es entre 3 y 4 veces mas potente que el polvo de hornear. Para reemplazar 1 cucharadita de bicarbonato necesitas aproximadamente 3 o 4 cucharaditas de polvo de hornear. Sin embargo, esta sustitucion tambien anade sales acidas que pueden alterar el sabor, asi que lo mejor es usar nuestra calculadora para obtener conversiones precisas."
  },
  {
    question: "Por que mi bizcocho sabe a jabon o a metal?",
    answer: "Un regusto a jabon o metalico es el signo clasico de bicarbonato sin reaccionar. Cuando no hay suficiente acido en la masa para neutralizar por completo el bicarbonato de sodio, el residuo alcalino permanece tras el horneado y produce ese sabor quimico desagradable. Usa nuestra calculadora para garantizar una neutralizacion completa."
  },
  {
    question: "Puedo usar cacao en polvo alcalinizado como acido?",
    answer: "No. El cacao alcalinizado (proceso holandes) ha sido tratado con un agente alcalinizante para reducir su acidez natural (pH ~7-8). Solo el cacao en polvo natural (pH ~5-6) es acido y neutralizara el bicarbonato."
  },
  {
    question: "Como afecta el bicarbonato al dorado de los productos horneados?",
    answer: "El bicarbonato aumenta el pH de la masa, haciendola mas alcalina. Un pH mas alto acelera la reaccion de Maillard, lo que produce cortezas mas oscuras y sabores mas profundos en galletas y bizcochos."
  }
];

const howTo = [
  {
    name: "Introduce el peso de la harina",
    text: "Indica el peso total de harina de tu receta en gramos u onzas para calcular la potencia leudante total necesaria."
  },
  {
    name: "Añade los ingredientes acidos",
    text: "Selecciona los ingredientes acidos de tu receta (como suero de mantequilla, yogur o zumo de limon) e introduce sus pesos."
  },
  {
    name: "Comprueba el equilibrio de pH",
    text: "Observa la balanza virtual de pH. Una balanza equilibrada indica una neutralizacion optima sin sabores metalicos indeseados."
  },
  {
    name: "Mide los leudantes",
    text: "Lee la cantidad recomendada de bicarbonato para la neutralizacion y el refuerzo de polvo de hornear necesario para alcanzar el leudado objetivo."
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
  title: 'Neutralizador de Acidos para Levadura',
  description: 'Calcula la proporcion exacta de bicarbonato y polvo de hornear para tu receta. Neutraliza ingredientes acidos como suero de mantequilla y yogur, evita el regusto metalico y consigue un leudado perfecto en cada horneado.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: "Neutralizador de Acidos para Levadura",
    subtitle: "Estequiometria precisa para un leudado y sabor perfectos en reposteria",
    flourLabel: "Peso de Harina",
    addAcidLabel: "Anadir Ingrediente Acido",
    weightLabel: "Peso",
    removeButton: "Eliminar",
    bakingSodaNeeded: "Bicarbonato Neutralizante",
    requiredBakingPowder: "Leudado Objetivo",
    providedBakingPowderEquivalent: "Leudado del Bicarbonato",
    boosterBakingPowder: "Refuerzo Extra de Polvo de Hornear",
    resultsTitle: "Leudantes Calculados",
    statusBalanced: "Equilibrado",
    statusAcidic: "Exceso de Acido",
    statusAlkaline: "Exceso de Base",
    gramsUnit: "g",
    ouncesUnit: "oz",
    teaspoonsUnit: "cdta",
    scaleBalanceTitle: "Balanza Virtual de pH",
    acidListTitle: "Ingredientes Acidos",
    unitLabel: "Sistema de Medida",
    metricUnit: "Metrico (g)",
    imperialUnit: "Imperial (oz)",
    acid_buttermilk: "Suero de Mantequilla",
    acid_yogurt: "Yogur",
    acid_sour_cream: "Crema Agria",
    acid_honey: "Miel",
    acid_molasses: "Melaza",
    acid_cocoa: "Cacao Natural en Polvo",
    acid_lemon_juice: "Zumo de Limon",
    acid_vinegar: "Vinagre"
  },
  faq,
  howTo,
  seo: [
    {
      type: 'summary',
      title: 'Puntos Clave para un Leudado Perfecto',
      items: [
        'El bicarbonato necesita acido para activarse; sin el, tus horneados sabran a jabon y a metal',
        'El polvo de hornear se auto-neutraliza y aporta potencia leudante extra como refuerzo',
        'El objetivo estandar es un 4% del peso de harina en equivalente de polvo de hornear para un buen leudado',
        'Usa la tabla de neutralizacion a continuacion para emparejar tus ingredientes acidos con la cantidad correcta de bicarbonato'
      ]
    },
    {
      type: 'title',
      text: 'La Quimica de los Leudantes Quimicos en Reposteria',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'El leudado quimico se basa en <strong>reacciones de neutralizacion acido-base</strong> que producen dioxido de carbono (CO2), el cual queda atrapado en la matriz de la masa y la hace subir durante el horneado. Lograr la proporcion correcta entre bicarbonato de sodio e ingredientes acidos es crucial. <strong>Demasiado bicarbonato</strong> deja residuos alcalinos sin reaccionar que producen sabor a jabon, regusto metalico y manchas amarillas. <strong>Demasiado acido</strong> puede dar como resultado un horneado denso, plano y con poco volumen.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '3-4x',
          label: 'Bicarbonato mas potente que el polvo de hornear',
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
          label: 'Ratio de neutralizacion (acidos lacteos)',
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
          description: 'Bicarbonato de sodio puro (NaHCO3). Una base alcalina fuerte que requiere un acido externo para activarse y producir CO2.',
          points: [
            'De 3 a 4 veces mas potente que el polvo de hornear',
            'Necesita acido (suero, yogur, zumo de limon) para reaccionar',
            'El exceso causa sabor a jabon, regusto metalico y miga amarilla',
            'Eleva el pH; potencia el dorado Maillard en galletas',
            'Accion simple: libera CO2 inmediatamente al mezclar'
          ]
        },
        {
          title: 'Polvo de Hornear',
          icon: 'mdi:flask-round-bottom-outline',
          description: 'Un sistema leudante completo que contiene bicarbonato + sales acidas secas + almidon. Auto-neutralizable y fiable.',
          highlight: true,
          points: [
            'Contiene su propio acido (fosfato monocálcico, pirofosfato acido de sodio)',
            'Doble accion: libera CO2 al mezclar Y al calentar',
            'Sin regusto metalico; pH ya equilibrado',
            'Menos potente por gramo; usar 3-4 veces mas para igualar al bicarbonato',
            'Ideal como refuerzo cuando el bicarbonato solo no puede leudar toda la harina'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Ingrediente Acido', 'Peso Estandar', 'Bicarbonato Neutralizante', 'Ratio de Neutralizacion'],
      rows: [
        ['Suero / Yogur / Crema Agria', '120g (1/2 Taza)', '1.5g (1/4 cdta)', '0.0125'],
        ['Zumo de Limon / Vinagre', '15g (1 cda)', '1.5g (1/4 cdta)', '0.1000'],
        ['Cacao Natural en Polvo', '80g (1 Taza)', '3.0g (1/2 cdta)', '0.0375'],
        ['Miel', '340g (1 Taza)', '3.0g (1/2 cdta)', '0.0088'],
        ['Melaza', '328g (1 Taza)', '3.0g (1/2 cdta)', '0.0091']
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Solucion de Problemas: Esta tu Leudado Desequilibrado?',
      badge: 'Chequeo Rapido',
      html: '<strong>Si tu bizcocho se hundio:</strong> Demasiado acido o muy poco leudante en general; el CO2 escapo antes de que la estructura cuajara.<br/><br/><strong>Si tu bizcocho es denso y plano:</strong> Demasiado acido sin suficiente bicarbonato para neutralizarlo, o potencia leudante total insuficiente para el peso de harina.<br/><br/><strong>Si tu bizcocho sabe a jabon o metal:</strong> Exceso de bicarbonato sin reaccionar; anade mas ingredientes acidos o reduce el bicarbonato.<br/><br/><strong>Si tu bizcocho tiene manchas amarillas:</strong> Signo clasico de grumos de bicarbonato sin disolver y sin reaccionar; tamiza el bicarbonato con la harina la proxima vez.'
    },
    {
      type: 'title',
      text: 'Como Equilibrar Leudantes y Evitar el Sabor Metalico',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Para conseguir un sabor y un leudado optimos, sigue este proceso: <strong>Primero</strong>, determina la cantidad de bicarbonato necesaria para neutralizar por completo los componentes acidos de tu masa usando la tabla anterior. <strong>Despues</strong>, convierte ese bicarbonato a su equivalente en polvo de hornear (multiplica por 4) y comparalo con la potencia leudante total que necesita tu harina; normalmente <strong>el 4% del peso de harina</strong> en equivalente de polvo de hornear. <strong>Si hay un deficit</strong>, anade la potencia leudante restante en forma de polvo de hornear neutro como refuerzo. Nuestra calculadora hace todo esto automaticamente.'
    },
    {
      type: 'list',
      icon: 'mdi:alert-circle-outline',
      items: [
        'Nunca sustituyas bicarbonato 1:1 por polvo de hornear; el bicarbonato es 3-4 veces mas potente y necesita acido',
        'Tamiza siempre el bicarbonato con los ingredientes secos para evitar grumos amargos',
        'El cacao alcalinizado NO es acido; usa cacao natural en polvo si dependes del cacao como fuente de acido',
        'La miel y la melaza son acidos debiles; necesitan mucho menos bicarbonato por gramo que el zumo de limon',
        'Trabaja rapido tras mezclar: la levadura quimica empieza a reaccionar inmediatamente al contacto con el liquido'
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ratio de Neutralizacion',
          definition: 'La proporcion de bicarbonato necesaria para neutralizar por completo un peso dado de ingrediente acido. Ratios mas bajos significan que el ingrediente es menos acido por gramo.'
        },
        {
          term: 'Potencia Leudante',
          definition: 'La cantidad total de gas CO2 que un agente leudante puede producir. Se mide en equivalentes de polvo de hornear, donde el 4% del peso de harina es el objetivo estandar para bizcochos y magdalenas.'
        },
        {
          term: 'Polvo de Hornear de Doble Accion',
          definition: 'Polvo de hornear que libera CO2 en dos etapas: primero al mezclarse con liquido a temperatura ambiente, y despues al exponerse al calor del horno. Proporciona un leudado mas fiable.'
        },
        {
          term: 'Reaccion de Maillard',
          definition: 'Una reaccion quimica entre aminoacidos y azucares reductores que dora los alimentos y crea sabores complejos. Se potencia con un pH mas alto debido al exceso de bicarbonato; deseable en galletas, indeseable en bizcochos delicados.'
        },
        {
          term: 'Equilibrio de pH',
          definition: 'La medida de acidez o alcalinidad de la masa. Un pH neutro (alrededor de 7) significa que todo el bicarbonato ha reaccionado con todo el acido. Ligeramente alcalino favorece el dorado; acido favorece la ternura.'
        }
      ]
    },
    {
      type: 'tip',
      html: '<strong>Dorado y pH:</strong> Aunque la neutralizacion completa es clave para el sabor, una masa ligeramente alcalina (por un pequeno exceso de bicarbonato) puede ser deseable en bizcochos de chocolate y galletas. Un pH mas alto potencia el dorado de Maillard, produciendo colores mas oscuros, bordes mas crujientes y notas caramelizadas mas profundas. Para bizcochos delicados de vainilla, busca la neutralizacion exacta para conservar un sabor puro y limpio.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
