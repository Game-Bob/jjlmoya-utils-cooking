import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Inoculacion e Hidratacion de Koji";
const description = "Calcule el contenido de humedad perfecto, la dosis de inoculacion de esporas y la temperatura de incubacion para hacer koji en casa. Evite lotes fallidos con nuestra calculadora gratuita de inoculacion e hidratacion de koji.";
const faq = [
  {
    question: "Cual es el contenido de humedad objetivo para cocinar sustrato de koji?",
    answer: "El contenido de humedad total ideal para arroz o cebada al vapor al inocular Koji esta entre 30% y 35%. Esto corresponde a un peso al vapor de aproximadamente 1,35x a 1,40x el peso seco inicial."
  },
  {
    question: "Cuanto polvo de esporas (tane-koji) necesito?",
    answer: "La tasa de inoculacion estandar es de 1 gramo de mezcla de esporas estandar por 1 kilogramo de sustrato seco. Si usa esporas concentradas, necesita menos (0,5 g), mientras que las mezclas diluidas requieren mas (2,0 g)."
  },
  {
    question: "Por que es critico el control de temperatura durante la incubacion del koji?",
    answer: "Aspergillus oryzae crece optimamente entre 28C y 34C. Si la temperatura supera los 38C, el moho puede sobrecalentarse, dejar de crecer o producir esporas verdes/negras no deseadas. Por debajo de 20C, el crecimiento se ralentiza significativamente."
  },
  {
    question: "Que sucede durante la fase exotermica?",
    answer: "Despues de 18 a 24 horas de incubacion, el koji comienza a crecer rapidamente y genera su propio calor. Durante este pico exotermico, debe remover el sustrato y reducir el calor del incubador para evitar el sobrecalentamiento."
  }
];

const howTo = [
  {
    name: "Ingrese el peso seco del sustrato",
    text: "Ingrese el peso seco inicial de su arroz o cebada para establecer los umbrales de hidratacion objetivo."
  },
  {
    name: "Registre el peso al vapor",
    text: "Ingrese el peso real al vapor despues de cocinar. La calculadora determina el porcentaje de humedad y verifica si se encuentra dentro del rango ideal de 30-35%."
  },
  {
    name: "Calcule la dosis de esporas",
    text: "Seleccione la potencia de sus esporas (estandar, concentrada o diluida) para obtener el peso exacto de polvo de esporas para inocular."
  },
  {
    name: "Monitoree los parametros de incubacion",
    text: "Ajuste la temperatura y la humedad relativa para simular el crecimiento del micelio y revise la curva termica de 48 horas."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
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
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'calculadora-inoculacion-koji',
  title: 'Calculadora de Inoculacion e Hidratacion de Koji',
  description: 'Calcule el contenido de humedad perfecto, la dosis de inoculacion de esporas y la temperatura de incubacion para hacer koji en casa. Evite lotes fallidos con nuestra calculadora gratuita de inoculacion e hidratacion de koji.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: 'Analizador de Inoculacion de Koji',
    subtitle: 'Optimice los parametros de fermentacion solida de koji',
    dryWeightLabel: 'Peso Seco del Sustrato',
    steamedWeightLabel: 'Peso Real al Vapor',
    targetRangeLabel: 'Rango de Peso al Vapor Objetivo',
    moistureLabel: 'Humedad Actual',
    potencyLabel: 'Potencia de Esporas',
    standardPotency: 'Esporas Estandar',
    concentratedPotency: 'Concentrado',
    dilutedPotency: 'Mezcla Diluida',
    sporeDosageLabel: 'Dosis de Esporas',
    tempLabel: 'Temperatura del Incubador',
    humidityLabel: 'Humedad Relativa',
    statusIdeal: 'Incubacion Ideal',
    statusSlow: 'Crecimiento Lento',
    statusInhibited: 'Inhibido / Frio',
    statusOverheating: 'Sobrecalentamiento / Esporulacion',
    timelineTitle: 'Ciclo Termico de Incubacion 48h',
    stage1Name: '0-18h: Calentamiento',
    stage2Name: '18-36h: Pico Exotermico',
    stage3Name: '36-48h: Maduracion'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Como Hacer Koji: La Humedad, Dosis de Esporas y Temperatura Perfectas para Aspergillus Oryzae',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Hacer koji en casa requiere tres cosas que funcionen correctamente: <strong>hidratacion del sustrato</strong>, <strong>densidad de inoculacion de esporas</strong> y <strong>control de temperatura de incubacion</strong>. Si alguna falla, su lote puede sobrecalentarse, no inocularse o desarrollar el moho equivocado. Nuestra <strong>calculadora de inoculacion de koji</strong> elimina las conjeturas calculando su peso al vapor objetivo, la dosis exacta de esporas y el estado de incubacion en tiempo real segun sus datos.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '30-35%',
          label: 'Humedad Objetivo',
          icon: 'mdi:water-percent'
        },
        {
          value: '1 g/kg',
          label: 'Tasa Estandar de Esporas',
          icon: 'mdi:seed-outline'
        },
        {
          value: '28-34C',
          label: 'Temperatura Ideal',
          icon: 'mdi:thermometer'
        },
        {
          value: '48 h',
          label: 'Incubacion Total',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: 'Por Que el Contenido de Humedad Determina la Calidad del Koji',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'El factor mas importante en el cultivo exitoso de koji es la <strong>humedad del sustrato</strong>. Cuando el arroz o la cebada se cuecen al vapor, los granulos de almidon se gelatinizan y absorben agua, volviendose accesibles a las enzimas producidas por Aspergillus oryzae. El rango de humedad ideal es estrecho: <strong>30% a 35%</strong>. Por debajo del 30%, el micelio no puede absorber suficiente agua para crecer y la produccion de enzimas se detiene. Por encima del 35%, los granos se vuelven pegajosos y se agrupan, reduciendo la porosidad del aire y asfixiando el moho aerobico.'
    },
    {
      type: 'list',
      items: [
        '<strong>Demasiado seco (menos del 30%):</strong> El crecimiento del micelio se atrofia, la produccion de enzimas disminuye y el koji nunca coloniza completamente el grano.',
        '<strong>Demasiado humedo (mas del 35%):</strong> Los granos se pegan, las bolsas de aire colapsan y las bacterias o mohos no deseados pueden superar a Aspergillus oryzae.',
        '<strong>Rango objetivo (30-35%):</strong> El grano se siente firme, los granos individuales se separan facilmente y el micelio se extiende uniformemente en 48 horas.',
        '<strong>Como medir:</strong> Pese su grano seco, cocine al vapor, luego pese nuevamente. La calculadora calcula su porcentaje de humedad exacto a partir de estos dos numeros.'
      ]
    },
    {
      type: 'table',
      headers: ['Tipo de Grano', 'Peso Seco', 'Peso al Vapor Objetivo', 'Tiempo de Remojo', 'Tiempo de Vapor'],
      rows: [
        ['Arroz Blanco (grano corto)', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['Arroz Blanco (grano largo)', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['Cebada Perlada', '1000 g', '1350-1400 g', '4-8 h', '40-50 min'],
        ['Arroz Integral', '1000 g', '1350-1400 g', '8-12 h', '45-60 min']
      ]
    },
    {
      type: 'title',
      text: 'Inoculacion de Esporas: Cuanto Tane-Koji Necesita?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'La densidad de inoculacion afecta directamente la rapidez con que el moho coloniza el sustrato y que tan competitivo es contra contaminantes. La tasa estandar es de <strong>1 gramo de mezcla de esporas por kilogramo de sustrato seco</strong>, pero esto varia segun el tipo de espora.'
    },
    {
      type: 'proscons',
      title: 'Eligiendo Su Tipo de Espora',
      items: [
        {
          pro: 'Las esporas estandar son el formato mas comun, tolerantes para principiantes y bien documentadas en la literatura de elaboracion casera.',
          con: 'Mayor volumen de polvo por lote y pueden contener relleno que no contribuye a la inoculacion.'
        },
        {
          pro: 'Las esporas concentradas usan la mitad del polvo para la misma inoculacion, tienen mayor pureza y son mas economicas para lotes grandes.',
          con: 'Mas faciles de sobredosificar, requieren una bascula precisa (resolucion de 0,01 g) y dejan menos margen de error si se subdosifican.'
        },
        {
          pro: 'Las mezclas diluidas se distribuyen facilmente sobre superficies grandes, son mas tolerantes con la mezcla desigual y son adecuadas para principiantes que prefieren cobertura visible.',
          con: 'Usan mas polvo por lote y pueden introducir exceso de almidon del relleno.'
        }
      ]
    },
    {
      type: 'title',
      text: 'La Curva de Calor Exotermico: Por Que el Koji Genera Su Propio Calor',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'A medida que Aspergillus oryzae consume almidones y los transforma en azucares simples, genera calor metabolico. Entre las horas <strong>18 y 36</strong> de incubacion, la actividad biologica alcanza su punto maximo, produciendo un aumento exotermico que puede elevar la temperatura del lecho de grano 5-10C por encima de la temperatura ambiente del incubador.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Senales de Que Su Koji Se Sobrecalienta',
      html: 'Si la temperatura del lecho de grano supera los <strong>38C</strong>, las enzimas del moho comienzan a desnaturalizarse y el hongo cambia a modo reproductivo, produciendo <strong>esporas verdes o negras</strong>. El lote olera a amoniaco en lugar de dulce y a castanas. Debe remover el sustrato inmediatamente y reducir la temperatura del incubador para llevarla por debajo de 34C.'
    },
    {
      type: 'tip',
      title: 'El Programa de Volteo de 12 Horas',
      html: 'A partir de la hora 18, rompa el lecho de grano y remuevalo cada 12 horas. Esto libera el calor atrapado, redistribuye la humedad y da al micelio acceso a oxigeno fresco. Use manos limpias y desinfectadas o una cuchara esteril.'
    },
    {
      type: 'tip',
      title: 'La Humedad Tambien Importa',
      html: 'Mantenga la humedad relativa por encima del <strong>65%</strong> durante la incubacion. Por debajo del 40%, el sustrato se seca y el crecimiento se detiene. Por encima del 90%, la condensacion puede promover el crecimiento bacteriano en la superficie del grano.'
    },
    {
      type: 'tip',
      title: 'Confie en Su Nariz',
      html: 'El koji saludable huele a castanas asadas dulces o a champinones frescos. Si detecta amoniaco, acidez o podredumbre, el lote puede haberse sobrecalentado o contaminado. Retire y deseche el grano afectado inmediatamente.'
    },
    {
      type: 'card',
      icon: 'mdi:rice',
      title: 'Elaboracion de Sake y Miso',
      html: 'El arroz inoculado con koji es la base del <strong>sake</strong>, <strong>miso</strong> y <strong>amazake</strong>. El control preciso de la humedad asegura el desarrollo adecuado de enzimas para la conversion de almidon en azucar.'
    },
    {
      type: 'card',
      icon: 'mdi:soy-sauce',
      title: 'Salsa de Soja y Tamari',
      html: 'El koji cultivado en <strong>soja</strong> o una mezcla de soja y trigo impulsa la fermentacion que produce salsa de soja rica en umami. La temperatura constante evita sabores desagradables.'
    },
    {
      type: 'card',
      icon: 'mdi:shaker-outline',
      title: 'Shio Koji y Garum',
      html: '<strong>Shio koji</strong> (koji fermentado con sal) y <strong>garums de carne</strong> dependen del grano completamente colonizado. Nuestra calculadora asegura que su sustrato este en la ventana de humedad ideal antes de la inoculacion.'
    },
    {
      type: 'title',
      text: 'Glosario de Incubacion de Koji',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Tane-Koji',
          definition: 'El polvo de esporas utilizado para inocular grano al vapor. Tipicamente esporas de Aspergillus oryzae mezcladas con un portador de almidon como harina de arroz.'
        },
        {
          term: 'Fase Exotermica',
          definition: 'El periodo entre 18 y 36 horas de incubacion en el que Aspergillus oryzae genera suficiente calor metabolico para elevar la temperatura del lecho de grano por encima de los niveles ambiente.'
        },
        {
          term: 'Gelatinizacion',
          definition: 'El proceso de calentar el almidon en presencia de agua para que los granulos se hinchen y se vuelvan accesibles a las enzimas amilasa producidas por el moho.'
        },
        {
          term: 'Esporulacion',
          definition: 'Cuando el moho cambia del crecimiento vegetativo al modo reproductivo, volviendose verde o negro. Esto es desencadenado por el estres termico por encima de 38C y arruina el lote para uso culinario.'
        }
      ]
    },
    {
      type: 'summary',
      title: 'Conclusiones Clave para un Koji Perfecto',
      items: [
        'Apunte a 30-35% de humedad en el grano al vapor. Use la calculadora para encontrar su peso al vapor objetivo exacto.',
        'Inocule a 1 g/kg para esporas estandar, 0,5 g/kg para concentradas o 2 g/kg para mezclas diluidas.',
        'Mantenga 28-34C y mas del 65% de humedad durante la incubacion. Remueva cada 12 horas despues de la hora 18.',
        'Vigile el pico exotermico a las 18-36 horas. Si la temperatura supera los 38C, remueva inmediatamente y baje el calor.',
        'Confie en sus sentidos: aroma dulce a castanas = buen koji. Olor a amoniaco o agrio = sobrecalentamiento o contaminacion.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
