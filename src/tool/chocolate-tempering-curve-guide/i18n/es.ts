import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Curva de Templado de Chocolate y Guía de Siembra";
const description = "Domine el templado de chocolate en casa. Calcule el peso necesario de las caletas de siembra y siga las curvas de temperatura termodinámicas paso a paso para chocolate negro, con leche y blanco.";
const faq = [
  {
    question: "¿Qué es el templado del chocolate?",
    answer: "El templado es el proceso de calentar, enfriar y recalentar suavemente el chocolate para controlar la cristalización de la manteca de cacao. Esto fuerza a las moléculas de grasa a cristalizar en la estructura estable de Forma V (Beta), proporcionando un acabado brillante, un crujido limpio al partirlo y evitando que se derrita fácilmente a temperatura ambiente."
  },
  {
    question: "¿En qué consiste el método de siembra?",
    answer: "El método de siembra consiste en fundir una parte del chocolate y luego añadir chocolate sólido ya templado (semillas o caletas) durante la fase de enfriamiento. Estas caletas sólidas actúan como plantillas que guían a las moléculas de grasa fundida para que cristalicen con la estructura Forma V deseada, sin necesidad de usar una mesa de mármol."
  },
  {
    question: "¿Por qué le salen vetas blancas al chocolate (floración de grasa)?",
    answer: "Las vetas o manchas blancas se conocen como floración de grasa (fat bloom). Ocurre cuando el chocolate no se templa correctamente, lo que permite que los cristales inestables de manteca de cacao suban a la superficie y vuelvan a cristalizar. Sigue siendo seguro para el consumo, pero pierde su textura y brillo característicos."
  },
  {
    question: "¿Puedo templar chocolate que ya tiene vetas blancas (florecido)?",
    answer: "Sí. La floración es un cambio puramente físico en la disposición de los cristales de grasa o azúcar, no un deterioro químico. Calentar el chocolate florecido por completo hasta su temperatura de fusión (entre 45°C y 50°C) rompe las estructuras de cristal inestables, permitiendo iniciar el proceso de templado desde cero."
  },
  {
    question: "¿Cómo afectan la temperatura y la humedad de la cocina al templado?",
    answer: "El chocolate es sumamente sensible al entorno. La temperatura ideal de la cocina para templar debe estar entre 18°C y 22°C (64°F a 72°F) con una humedad relativa inferior al 50%. La humedad alta provoca condensación de agua sobre el chocolate, lo que puede causar que el azúcar florezca o que el chocolate se espese y se vuelva una pasta difícil de manejar."
  },
  {
    question: "¿Puedo utilizar chispas de chocolate comunes para templar?",
    answer: "Las chispas de chocolate del supermercado suelen tener estabilizantes, emulsionantes y menor cantidad de manteca de cacao para conservar su forma en el horno. Para un templado exitoso y un acabado brillante y crujiente, se recomienda encarecidamente utilizar chocolate de cobertura profesional con al menos un 31% de manteca de cacao."
  }
];

const howTo = [
  {
    name: "Seleccionar tipo de chocolate",
    text: "Elija chocolate Negro, con Leche o Blanco para cargar las temperaturas límite específicas."
  },
  {
    name: "Introducir peso total",
    text: "Escriba el peso objetivo de chocolate templado que desea preparar."
  },
  {
    name: "Fase de fusión",
    text: "Funda el 75% del chocolate (según el cálculo) hasta la temperatura objetivo (por ejemplo, 50C para chocolate negro) para romper todas las estructuras de cristal."
  },
  {
    name: "Fase de enfriamiento y siembra",
    text: "Enfríe el chocolate fundido mientras remueve e incorpora el 25% restante de caletas sólidas hasta alcanzar la temperatura de enfriamiento."
  },
  {
    name: "Fase de trabajo",
    text: "Recaliente suavemente el chocolate hasta la temperatura de trabajo para fundir los cristales inestables antes de su utilización."
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
  slug: 'guia-curva-templado-chocolate',
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: 'Asistente de Templado de Chocolate',
    subtitle: 'Curvas termodinámicas y calculadora de siembra',
    chocolateTypeLabel: 'Tipo de Chocolate',
    totalWeightLabel: 'Peso Total Objetivo',
    meltLabel: 'Fase de Fusión',
    coolLabel: 'Fase de Enfriamiento y Siembra',
    workLabel: 'Fase de Trabajo',
    meltTempLabel: 'Temp. de Fusión',
    coolTempLabel: 'Temp. de Enfriamiento',
    workTempLabel: 'Temp. de Trabajo',
    meltWeightLabel: 'Peso a Fundir',
    seedWeightLabel: 'Peso de Siembra (Caletas)',
    molecularLabel: 'Estado de Cristalización Molecular',
    seedingTitle: 'Calculadora del Método de Siembra (25%)',
    stepTitle: 'Pasos del Templado',
    darkOption: 'Chocolate Negro',
    milkOption: 'Chocolate con Leche',
    whiteOption: 'Chocolate Blanco',
    resetButton: 'Reiniciar Guía',
    warningOverheated: 'Advertencia: ¡La temperatura es demasiado alta! Puede quemar los sólidos de cacao o desnaturalizar las proteínas de la leche.',
    warningUnderheated: 'Advertencia: La temperatura es demasiado baja. No se habrán formado cristales estables o el chocolate se solidificará demasiado pronto.',
    interactiveInfo: 'Interactúe con los pasos o arrastre el termómetro para previsualizar las fases moleculares'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Termodinámica de la Cristalización de la Manteca de Cacao',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'La manteca de cacao es polimórfica, lo que significa que puede solidificarse en seis formas de cristal distintas (de la I a la VI). Cada una posee un punto de fusión y una estabilidad molecular específicos. El objetivo del templado es maximizar los cristales de Forma V (Beta) y suprimir las formas inestables de la I a la IV. Los cristales de Forma V garantizan el brillo superficial, la textura firme y el crujido limpio característicos de la chocolatería fina.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: 'Forma V',
          label: 'Cristal Beta Objetivo',
          icon: 'mdi:hexagon-multiple-outline'
        },
        {
          value: '25-30%',
          label: 'Proporción de Siembra',
          icon: 'mdi:scale'
        },
        {
          value: '31-32°C',
          label: 'Temp. Trabajo Negro',
          icon: 'mdi:thermometer'
        },
        {
          value: '0.1-0.2C',
          label: 'Enfriamiento por Minuto',
          icon: 'mdi:trending-down'
        }
      ]
    },
    {
      type: 'title',
      text: 'Las Seis Formas Polimórficas de Cristal de la Manteca de Cacao',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Comprender la termodinámica de cada forma cristalina es indispensable para evitar fallos en el templado. A continuación se describe la estructura, punto de fusión y propiedades de las distintas formas de cristal de la manteca de cacao:'
    },
    {
      type: 'table',
      headers: ['Forma de Cristal', 'Estructura Cristalina', 'Punto de Fusión', 'Estabilidad y Textura'],
      rows: [
        ['Forma I', 'Gama (γ)', '17°C (62.6°F)', 'Muy inestable, blando, se derrite al instante en la mano, sin crujido.'],
        ['Forma II', 'Alfa (α)', '21°C (69.8°F)', 'Inestable, blando, textura quebradiza, se funde con gran facilidad.'],
        ['Forma III', 'Beta Prima (β\')', '25.5°C (77.9°F)', 'Inestable, firme pero no cruje al partir, superficie mate.'],
        ['Forma IV', 'Beta Prima (β\')', '27.3°C (81.1°F)', 'Inestable, firme, se funde algo rápido, poco brillo.'],
        ['Forma V', 'Beta (β)', '33.8°C (92.8°F)', 'Altamente estable, acabado muy brillante, crujido limpio (Forma Deseada).'],
        ['Forma VI', 'Beta (β)', '36.3°C (97.3°F)', 'La más estable, duro, tarda meses en formarse, provoca floración de grasa.']
      ]
    },
    {
      type: 'title',
      text: 'Entendiendo el Método de Siembra (Siembra)',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'El método de siembra es una técnica muy fiable para templar chocolate sin necesidad de una mesa de trabajo de mármol. Al reservar el 25% del peso total del chocolate como caletas sólidas sin fundir, se introduce una alta concentración de cristales estables de Forma V directamente en el chocolate caliente. Al remover de forma continua, estas caletas actúan como plantillas que guían la cristalización uniforme de las grasas fundidas.'
    },
    {
      type: 'title',
      text: 'Ciencia Paso a Paso de la Curva de Templado',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Fase 1: Fusión (T > 40°C):</strong> Calentar el chocolate funde completamente todas las estructuras cristalinas existentes (Formas I a VI). Esto crea un estado líquido graso amorfo, que sirve como lienzo en blanco para iniciar la cristalización.',
        '<strong>Fase 2: Enfriamiento y Siembra (T ≈ 27°C):</strong> Al enfriar el chocolate hasta la zona de siembra, comienza la cristalización. Incorporar el 25% de caletas sólidas añade cristales Forma V preformados que guían al resto de las grasas para adoptar esta estructura estable.',
        '<strong>Fase 3: Recalentamiento y Trabajo (T ≈ 31°C):</strong> Recalentar ligeramente funde los cristales inestables de Forma IV que se hayan formado durante el enfriamiento. Esto deja únicamente cristales Forma V, asegurando un brillo perfecto y un crujido limpio.'
      ]
    },
    {
      type: 'title',
      text: 'Métodos Prácticos de Templado Casero',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Aunque los obradores profesionales utilizan templadoras, en casa es posible lograr resultados excelentes con estos tres métodos comunes. Use nuestra calculadora para medir sus proporciones de forma precisa:'
    },
    {
      type: 'list',
      items: [
        '<strong>Método de Baño María:</strong> Coloque el 75% del chocolate en un cuenco resistente al calor sobre una olla de agua a punto de hervir. Compruebe que la base del cuenco no toque el agua y evite que entre vapor en el chocolate. Caliente hasta la temperatura de fusión, retire del fuego, seque el cuenco por debajo e incorpore el 25% de siembra. Remueva de forma continua hasta alcanzar la temperatura de enfriamiento y recaliente brevemente sobre el baño para alcanzar la temperatura de trabajo.',
        '<strong>Método del Microondas:</strong> Coloque el 75% del chocolate en un cuenco de plástico apto para microondas. Caliente en ráfagas de 15 a 30 segundos al 50% de potencia, removiendo bien en cada pausa para repartir el calor. Cuando alcance la temperatura de fusión, añada el 25% de caletas de siembra sólidas y remueva sin parar hasta enfriar a la temperatura objetivo. Caliente en ráfagas muy breves de 5 a 10 segundos para llegar a la temperatura de trabajo.',
        '<strong>Método de Sous Vide:</strong> Coloque todo el chocolate en una bolsa de vacío sellada. Ajuste el baño de agua a la temperatura de fusión hasta fundir el chocolate por completo. Baje la temperatura del baño a la de enfriamiento (puede añadir hielo para acelerar el proceso) y manipule la bolsa con frecuencia para agitar el chocolate. Finalmente, suba la temperatura del baño a la temperatura de trabajo.'
      ]
    },
    {
      type: 'title',
      text: 'Cómo Realizar la Prueba del Templado',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Antes de verter el chocolate templado en moldes o utilizarlo para bañar dulces, debe realizar siempre una prueba. Introduzca la punta de un cuchillo limpio, una espátula de metal o una tira de papel vegetal en el chocolate. Déjelo reposar a temperatura ambiente (18-22°C / 64-72°F). Si está bien templado, se endurecerá de forma homogénea en 3 a 5 minutos, mostrando un acabado brillante, seco al tacto y un crujido limpio al doblarlo. Si sigue pegajoso o muestra vetas tras 5 minutos, el chocolate no está bien templado y debe calentarse de nuevo para reiniciar el proceso.'
    },
    {
      type: 'title',
      text: 'Solución de Problemas Frecuentes de Templado',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Si el chocolate no se templa correctamente, los cristales de manteca de cacao se separan y suben a la superficie, formando una capa blanquecina mate llamada <em>floración de grasa</em>. Si su chocolate está mate, blando o veteado, lo más seguro es que no esté templado. Puede solucionarlo calentándolo de nuevo hasta la temperatura de fusión y repitiendo el proceso desde el inicio.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
