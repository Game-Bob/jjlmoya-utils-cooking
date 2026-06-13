import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calculadora de Transglutaminasa para Pegamento de Carne: Guía de Dosificación para Gastronomía Molecular';
const description = 'Calcule la dosis precisa de transglutaminasa (TG) para la unión de carne. Obtenga proporciones de espolvoreado seco o pasta, tiempo de incubación y alertas de seguridad de temperatura.';

const faq = [
  {
    question: '¿Qué es la transglutaminasa y cómo une la carne?',
    answer: 'La transglutaminasa (TG), también conocida como "pegamento de carne", es una enzima que cataliza la formación de enlaces covalentes entre los aminoácidos glutamina y lisina en las proteínas. Cuando se aplica a superficies de carne, crea entrecruzamientos que fusionan piezas separadas en un bloque cohesivo único. La reacción requiere tiempo y temperaturas frías (2-5 °C) para desarrollarse completamente, normalmente de 6 a 24 horas.',
  },
  {
    question: '¿Cuál es la diferencia entre el espolvoreado seco y la aplicación en pasta?',
    answer: 'El espolvoreado seco consiste en espolvorear el polvo de TG directamente sobre la superficie de la carne al 0,75:1,5 % del peso de la carne. El método de pasta mezcla una parte de TG con cuatro partes de agua para crear una pasta brushable, ideal para recubrir superficies irregulares o aplicar capas finas y uniformes en asados grandes o filetes con piel.',
  },
  {
    question: '¿Afecta la temperatura a la actividad de la transglutaminasa?',
    answer: 'Sí. La TG es más activa entre 2 °C y 15 °C. A temperaturas más altas (hasta 40 °C) la reacción se acelera pero debe monitorearse de cerca. Por encima de 60 °C, la enzima se desnaturaliza y se vuelve permanentemente inactiva: la reacción de entrecruzamiento se detiene por completo. Mantenga siempre la carne unida con TG por debajo de 60 °C durante la cocción para preservar el enlace.',
  },
  {
    question: '¿Puedo usar transglutaminasa en pescado o mariscos?',
    answer: 'Sí, pero el pescado y los mariscos tienen niveles más bajos de lisina y glutamina en sus proteínas musculares en comparación con la carne roja y las aves. Es posible que necesite una proporción más alta de TG (1,2:1,5 %) y tiempos de incubación más largos. Para vieiras delicadas o filetes de pescado finos, considere el método de pasta para una cobertura más uniforme.',
  },
];

const howTo = [
  {
    name: 'Seleccionar método de aplicación',
    text: 'Elija Espolvoreado Seco para superficies uniformes como asados y bistecs. Elija Pasta para cortes irregulares, capas finas o proteínas con piel.',
  },
  {
    name: 'Ingresar peso de la carne',
    text: 'Introduzca el peso total de la carne o proteína que desea unir en gramos.',
  },
  {
    name: 'Especificar tipo de proteína',
    text: 'Seleccione el tipo de proteína que mejor se adapte a su corte. Las carnes rojas necesitan menos TG; el pescado y los mariscos necesitan más.',
  },
  {
    name: 'Establecer temperatura de incubación',
    text: 'Ingrese la temperatura de almacenamiento en frío (2:40 °C). La calculadora estimará el tiempo de unión requerido.',
  },
  {
    name: 'Pesar y aplicar TG',
    text: 'Mida el polvo de TG calculado. Aplíquelo espolvoreando o cepillando la pasta, luego presione las superficies de proteína firmemente juntas.',
  },
  {
    name: 'Reposar y refrigerar',
    text: 'Envuelva bien en film plástico y refrigere durante el período de incubación recomendado antes de cocinar.',
  },
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
  slug: 'calculadora-transglutaminasa-pegamento-carne',
  title: 'Calculadora de Transglutaminasa para Pegamento de Carne',
  description: 'Calcule la dosis precisa de transglutaminasa (TG) para la unión de carne. Obtenga proporciones de espolvoreado seco o pasta, tiempo de incubación y alertas de seguridad de temperatura.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: 'Calculadora de Transglutaminasa para Pegamento de Carne',
    subtitle: 'Precisión molecular para el entrecruzamiento de proteínas',
    methodLabel: 'Método de Aplicación',
    dryMethod: 'Espolvoreado Seco',
    slurryMethod: 'Pasta (Pasta Brushable)',
    weightLabel: 'Peso de Carne / Proteína',
    proteinLabel: 'Tipo de Proteína',
    redMeat: 'Carne Roja (Res, Cordero, Caza)',
    poultry: 'Aves (Pollo, Pavo, Pato)',
    fish: 'Pescado (Filetes Firmes, Pescado Entero)',
    shellfish: 'Mariscos (Vieiras, Camarones, Langosta)',
    unitLabel: 'Sistema de Medición',
    metricUnit: 'Métrico (g / °C)',
    imperialUnit: 'Imperial (oz / °F)',
    tempLabel: 'Temperatura de Incubación',
    resultTitle: 'Resultados de Dosificación',
    tgAmount: 'Transglutaminasa (TG)',
    waterAmount: 'Agua (para Pasta)',
    totalWeight: 'Peso Total Unido',
    ratioLabel: 'Proporción de TG',
    incubationLabel: 'Incubación Recomendada',
    incubationRange: '{min}h a {max}h',
    dryDustingDesc: 'Espolvoree el polvo de TG uniformemente sobre la superficie de la carne, luego presione las piezas juntas. Ideal para cortes planos y asados.',
    slurryDesc: 'Mezcle TG con 4 partes de agua para crear una pasta brushable. Aplique con un pincel para superficies irregulares, filetes o unión de piel.',
    enzymeDestroyed: 'Enzima Destruida: La temperatura supera el umbral de desnaturalización. La transglutaminasa se ha desnaturalizado y no se unirá.',
    noWarning: '',
    hours: 'horas',
    grams: 'g',
    milliliters: 'ml',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '¿Cuánta transglutaminasa se debe usar por kilo de carne?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La dosis correcta depende del tipo de proteína y del método de aplicación. Para carne roja, use 0,75:1,0 % de TG en peso (7,5:10 g por kg). Para aves, 1,0:1,2 %. Para pescado y mariscos, 1,2:1,5 %. Aplique como espolvoreado seco para cortes planos o mezcle con 4 partes de agua como pasta para superficies irregulares. Ingrese el peso de la proteína en la calculadora anterior para obtener una medida exacta.',
    },
    {
      type: 'title',
      text: 'Espolvoreado seco vs. pasta: ¿qué método debería elegir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El espolvoreado seco funciona mejor en superficies planas y uniformes como bistecs, asados o filetes. Espolvoree el polvo de TG directamente (0,75:1,5 % del peso de la carne) y presione las piezas juntas. El método de pasta (1 parte de TG por 4 partes de agua) es mejor para cortes irregulares, filetes con piel o vieiras delicadas donde la cobertura uniforme es importante. Cepille la pasta, ensamble y envuelva bien. Ambos métodos requieren incubación en frío para completar la unión.',
    },
    {
      type: 'title',
      text: 'Por qué el control de temperatura decide el éxito de su unión',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La transglutaminasa funciona mejor entre 2 °C y 5 °C, formando fuertes entrecruzamientos en 6:24 horas. A temperaturas de refrigerador más altas (5:15 °C) la reacción se acelera a 3:8 horas, pero los enlaces pueden ser más superficiales. Por encima de 40 °C la enzima se desnaturaliza rápidamente, y a 60 °C se destruye instantáneamente: cualquier enlace existente deja de formarse y la carne se separará durante la cocción. Monitoree siempre su temperatura de almacenamiento en frío con el indicador en el visualizador anterior.',
    },
    {
      type: 'table',
      headers: ['Proteína', 'Dosis de TG (% del peso)', 'Método', 'Incubación (2:5 °C)', 'Fuerza del Enlace'],
      rows: [
        ['Res, Cordero, Caza', '0,75:1,0 %', 'Espolvoreado seco', '6:12 h', 'Muy fuerte'],
        ['Pollo, Pavo, Pato', '1,0:1,2 %', 'Cualquiera', '8:16 h', 'Fuerte'],
        ['Salmón, Bacalao, Lubina', '1,2:1,5 %', 'Pasta', '12:24 h', 'Moderada'],
        ['Vieiras, Camarones, Langosta', '1,0:1,5 %', 'Pasta', '12:24 h', 'Moderada'],
      ],
    },
    {
      type: 'title',
      text: 'Errores comunes al unir carne con TG',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Demasiada enzima:</strong> Usar más del 1,5 % de TG deja un residuo blanco visible y una textura calcárea. El exceso no hace que el enlace sea más fuerte.',
        '<strong>Grasa o tejido plateado en la superficie:</strong> La TG no puede unirse a la grasa o al tejido conectivo. Recorte las superficies hasta ver fibras musculares desnudas antes de aplicar.',
        '<strong>Saltarse el período de reposo:</strong> La reacción de entrecruzamiento lleva horas. Cocinar inmediatamente después del ensamblaje lavará la enzima antes de que se formen los enlaces.',
        '<strong>Calor superior a 60 °C durante la cocción:</strong> El enlace resiste la cocción suave (sous vide a 55:58 °C es ideal), pero las altas temperaturas de sellado pueden debilitar la interfaz.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
