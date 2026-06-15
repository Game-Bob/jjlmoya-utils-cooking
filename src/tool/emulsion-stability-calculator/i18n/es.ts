import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Estabilidad de Emulsion y Limite de Aceite";
const description = "Descubra exactamente cuanto aceite puede soportar su mayonesa, alioli o vinagreta antes de romperse. Evite salsas cortadas con nuestra calculadora gratuita de estabilidad de emulsion.";
const faq = [
  {
    question: "Cuanto aceite puedo anadir a mi mayonesa antes de que se rompa?",
    answer: "Depende del emulsionante. La yema de huevo soporta hasta ~78% de aceite (aproximadamente 3.5 veces el volumen de agua), la mostaza hasta 70%, la lecitina de soja hasta 82% y el polisorbato hasta 85%. Use la calculadora para obtener el maximo exacto para sus cantidades especificas."
  },
  {
    question: "Por que se rompio o corto mi emulsion?",
    answer: "Una emulsion se rompe cuando la fraccion volumetrica de aceite supera el limite maximo de empaquetamiento del emulsionante. En ese punto, las gotas de aceite se comprimen tanto que se fusionan y la mezcla se separa. Esto ocurre al instante - no es un proceso gradual."
  },
  {
    question: "Como arreglo una mayonesa o alioli cortada?",
    answer: "Comience con una yema de huevo fresca o una cucharada de agua tibia en un bol limpio. Anada lentamente la mezcla cortada mientras bate constantemente, igual que si anadiera aceite crudo. La calculadora le indica exactamente cuanta agua o yema necesita."
  },
  {
    question: "Anadir aceite demasiado rapido causa que una emulsion se rompa?",
    answer: "Anadir aceite demasiado rapido puede sobrecargar temporalmente el emulsionante, pero la causa real de la ruptura es siempre una relacion de fases incorrecta. Si su fraccion de aceite se mantiene por debajo del limite del emulsionante, la emulsion permanece estable independientemente de la velocidad. Si supera el limite, la ruptura es inevitable."
  },
  {
    question: "Cual es la diferencia entre la yema de huevo y la mostaza como emulsionantes?",
    answer: "La yema de huevo (78% max. de aceite) contiene lecitina y lipoproteinas que forman una pelicula robusta alrededor de las gotas. La mostaza (70% max. de aceite) depende de mucilagos y proteinas - es mas debil pero anade sabor. La lecitina de soja (82%) y el polisorbato (85%) son emulsionantes industriales de alta eficiencia."
  }
];

const howTo = [
  {
    name: "Seleccione su emulsionante",
    text: "Elija el emulsionante en su receta - yema de huevo para mayonesa clasica, mostaza para vinagretas, o lecitina de soja/polisorbato para cocina modernista. Cada uno establece un limite maximo de aceite diferente."
  },
  {
    name: "Ingrese el volumen de la fase acuosa",
    text: "Introduzca los mililitros totales de sus ingredientes acuosos: agua, vinagre, jugo de limon, vino o cualquier liquido a base de agua. La calculadora anade automaticamente el contenido de agua de su emulsionante seleccionado."
  },
  {
    name: "Establezca su volumen de aceite",
    text: "Ingrese la cantidad de aceite que planea usar. Use el deslizador o escriba el valor. La calculadora muestra instantaneamente si esta cantidad producira una emulsion estable o causara su ruptura."
  },
  {
    name: "Lea el resultado de estabilidad y corrija si es necesario",
    text: "Revise el indicador de fraccion volumetrica de aceite. Si es estable, esta listo. Si esta roto, el panel de rescate le indica exactamente cuanta agua (en ml) o cuantas yemas de huevo adicionales necesita anadir para restaurar el equilibrio."
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
  title: 'Calculadora de Estabilidad de Emulsion y Limite de Aceite',
  description: 'Descubra exactamente cuanto aceite puede soportar su mayonesa, alioli o vinagreta antes de romperse. Evite salsas cortadas con nuestra calculadora gratuita de estabilidad de emulsion.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: 'Analizador de Estabilidad de Emulsion',
    subtitle: 'Cuanto aceite puede soportar su salsa antes de romperse?',
    waterLabel: 'Fase Acuosa (ml)',
    oilLabel: 'Volumen de Aceite (ml)',
    emulsifierLabel: 'Tipo de Emulsionante',
    yolkOption: 'Yema de Huevo',
    mustardOption: 'Mostaza',
    soyLecithinOption: 'Lecitina de Soja',
    polysorbateOption: 'Polisorbato',
    stableStatus: 'Emulsion Estable',
    brokenStatus: 'Emulsion Rota',
    ratioLabel: 'Fraccion Volumetrica de Aceite',
    maxLimitLabel: 'Limite Maximo de Aceite',
    fixTitle: 'Estrategia de Rescate',
    waterFixText: 'Anada agua para restaurar el equilibrio de fases:',
    yolkFixText: 'Alternativamente, use yema de huevo adicional:',
    idealRangeText: 'El rango ideal esta por debajo del limite critico de empaquetamiento del 74% al 80%.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Cuanto Aceite Puede Soportar una Mayonesa o Alioli Antes de Romperse?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Todo cocinero se ha hecho esta pregunta: <strong>por que se me corto la mayonesa?</strong> La respuesta es mas simple de lo que parece. Una emulsion - ya sea una alioli clasica, una vinagreta cremosa o una espuma modernista - solo puede contener una cantidad finita de aceite antes de colapsar. Nuestra <strong>calculadora de estabilidad de emulsion</strong> le indica exactamente donde esta ese punto de ruptura, segun sus ingredientes y porciones especificas.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '78%',
          label: 'Yema Max. Aceite',
          icon: 'mdi:egg-outline'
        },
        {
          value: '85%',
          label: 'Limite Polisorbato',
          icon: 'mdi:flask-outline'
        },
        {
          value: '74%',
          label: 'Empaquetamiento Teorico',
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
      type: 'title',
      text: 'La Ciencia: Por Que se Rompen las Emulsiones',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Una emulsion culinaria funciona dispersando tiny gotas de aceite a lo largo de una fase acuosa continua. <strong>Los emulsionantes</strong> - como la lecitina en la yema de huevo, el mucilago en la mostaza o los tensioactivos sinteticos como el polisorbato - recubren cada gota y evitan que se fusione con sus vecinas.'
    },
    {
      type: 'paragraph',
      html: 'El punto de ruptura esta determinado por la pura geometria. Las gotas de aceite se comportan como esferas tiny apiladas. El volumen maximo de esferas que cabe en un espacio dado - conocido como la <strong>conjetura de Kepler</strong> - es de aproximadamente 74%. En sistemas de cocina reales, esto puede extenderse al 80-85% con emulsionantes potentes, pero mas alla de eso, las gotas se comprimen tanto que se fusionan y la emulsion colapsa al instante.'
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Yema de Huevo',
          icon: 'mdi:egg-outline',
          description: 'El emulsionante clasico de mayonesa. Contiene lecitina y lipoproteinas.',
          highlight: true,
          points: [
            'Max. aceite: 78%',
            '~15 ml agua por yema',
            'Anade riqueza y color',
            'Mejor para mayo y alioli'
          ]
        },
        {
          title: 'Mostaza',
          icon: 'mdi:shaker-outline',
          description: 'Depende de mucilagos y proteinas de semillas. Anade sabor picante.',
          points: [
            'Max. aceite: 70%',
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
            'Max. aceite: 82%',
            '~5 ml contenido de agua',
            'Perfil de sabor neutro',
            'Basico en cocina modernista'
          ]
        },
        {
          title: 'Polisorbato',
          icon: 'mdi:flask-outline',
          description: 'Emulsionante sintetico con maxima capacidad tensioactiva.',
          points: [
            'Max. aceite: 85%',
            '~2 ml contenido de agua',
            'Mayor tolerancia al aceite',
            'Usado en espumas y aires'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emulsionante', 'Max. Aceite %', 'Aceite por 100 ml Agua', 'Mejor Uso'],
      rows: [
        ['Yema de Huevo', '78%', '~355 ml', 'Mayonesa, alioli, holandesa'],
        ['Mostaza', '70%', '~233 ml', 'Vinagretas, ali ligeros'],
        ['Lecitina de Soja', '82%', '~456 ml', 'Salsas modernistas, espumas'],
        ['Polisorbato', '85%', '~567 ml', 'Espumas estables, cocina experimental']
      ]
    },
    {
      type: 'title',
      text: 'Como Rescatar una Emulsion Rota Paso a Paso',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Si su mayonesa o salsa ya se ha cortado, <strong>no la tire</strong>. La solucion es sencilla - pero solo si entiende la relacion de fases. Batir con mas fuerza no ayudara; necesita anadir mas de la fase continua (agua).'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Signos Comunes de Que Su Emulsion Esta a Punto de Romperse',
      html: 'Este atento a <strong>espesamiento seguido de adelgazamiento repentino</strong>, una <strong>superficie brillante que se vuelve granulada</strong> o aceite visible acumulandose en los bordes. Si ve alguno de estos, deje de anadir aceite inmediatamente y bata una cucharadita de agua fria antes de continuar.'
    },
    {
      type: 'title',
      text: 'Consejos Practicos para Emulsiones Perfectas Siempre',
      level: 3
    },
    {
      type: 'tip',
      title: 'La Temperatura Importa',
      html: 'Todos los ingredientes deben estar a <strong>temperatura ambiente</strong>. Los huevos o el aceite frios aumentan drasticamente el riesgo de ruptura. Saque los ingredientes de la nevera 30 minutos antes de comenzar.'
    },
    {
      type: 'tip',
      title: 'La Red de Seguridad del Agua',
      html: 'Si su receta no incluye suficiente acido (vinagre, jugo de limon), anada <strong>una cucharadita de agua fria por yema de huevo</strong> antes de comenzar a anadir aceite. Esta agua extra crea un margen de seguridad mas amplio.'
    },
    {
      type: 'tip',
      title: 'Arreglar un Lote Cortado',
      html: 'Ponga una yema de huevo fresca en un bol limpio. Bata con una cucharadita de agua. Luego, <strong>anada la mezcla cortada gota a gota lo mas lentamente posible</strong>, exactamente como si fuera aceite crudo. Una vez que se re-emulsione, puede anadir el resto mas rapido.'
    },
    {
      type: 'title',
      text: 'Glosario de Emulsiones Culinarias',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Fase Continua',
          definition: 'El liquido que rodea las gotas - generalmente agua, vinagre o jugo de citricos en emulsiones de aceite en agua como la mayonesa.'
        },
        {
          term: 'Fase Dispersa',
          definition: 'El liquido dividido en gotas tiny - aceite en la mayoria de las emulsiones culinarias. Cuanto mas anade, mas juntas se empaquetan las gotas.'
        },
        {
          term: 'Fraccion Volumetrica',
          definition: 'La relacion del volumen de aceite con el volumen total. Alrededor del 74-85% (segun el emulsionante), la emulsion alcanza su punto de ruptura geometrico.'
        },
        {
          term: 'Coalescencia',
          definition: 'Cuando dos o mas gotas de aceite se fusionan en una mas grande. Este es el proceso microscopico que desencadena una ruptura visible de la emulsion.'
        },
        {
          term: 'Inversion de Fase',
          definition: 'El punto donde una emulsion de aceite en agua se convierte en agua en aceite - como ocurre al hacer mantequilla a partir de nata. Esta es la forma definitiva de fallo.'
        }
      ]
    },
    {
      type: 'paragraph',
      html: 'Ya sea que este haciendo una mayonesa francesa clasica, un alioli con ajo, una vinagreta estable o experimentando con hidrocoloides modernistas, entender la <strong>relacion aceite-agua</strong> es el factor mas importante. Nuestra calculadora maneja las matematicas para que pueda cocinar con confianza.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
