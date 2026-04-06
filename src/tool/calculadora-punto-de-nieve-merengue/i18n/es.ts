import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'calculadora-punto-de-nieve-merengue',
  title: 'Calculadora de Merengue y Punto de Nieve',
  description: 'Calcula la cantidad exacta de azúcar para merengue francés, italiano o suizo según el peso de tus claras. Tiempos de batido y trucos de repostería.',
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Fuentes y Referencias',
  ui: {
    whitesLabel: 'Peso de las Claras',
    whitesPlaceholder: 'Ej. 120',
    whitesUnit: 'g',
    typeLabel: 'Tipo de Merengue',
    typeFrench: 'Francés',
    typeItalian: 'Italiano',
    typeSwiss: 'Suizo',
    timesHeading: 'Tiempos Estimados (Batido a media/alta velocidad)',
    stageSpumado: 'Espumado',
    stageSpumadoDesc: 'Burbujas grandes, como jabón.',
    stageSoftPeaks: 'Pico Blando',
    stageSoftPeaksDesc: 'La punta se dobla al levantar.',
    stageStiffPeaks: 'Punto de Nieve',
    stageStiffPeaksDesc: 'Pico firme y brillante.',
    frenchSugarWhite: 'Azúcar Blanquilla',
    frenchSugarPowder: 'Azúcar Glas',
    frenchTip: 'El merengue francés es el más común y fácil, ideal para hornear suspiros o añadir a masas aireadas. No es apto para comer en crudo.',
    frenchTime1: '1-2 min',
    frenchTime2: '3-5 min',
    frenchTime3: '7-9 min',
    italianSugarSyrup: 'Azúcar para Almíbar',
    italianWater: 'Agua',
    italianTip: 'El merengue italiano es el más estable. Se hace con almíbar caliente a 118°C. Es perfecto para decorar tartas y comer directamente.',
    italianTime1: '2 min',
    italianTime2: '5 min',
    italianTime3: '10-12 min',
    swissSugarWhite: 'Azúcar Blanquilla',
    swissMaxTemp: 'Temperatura Máx',
    swissTip: 'El merengue suizo se calienta al baño maría hasta que el azúcar se disuelve. Es muy versátil y ideal para cremas de mantequilla.',
    swissTime1: '1-2 min',
    swissTime2: '4-6 min',
    swissTime3: '8-10 min',
    invalidWeightError: 'Introduce un peso válido',
  },
  faq: [
    {
      question: '¿Qué relación de azúcar y clara es la ideal?',
      answer: 'La regla de oro en repostería es el ratio 1:2. Por cada gramo de clara de huevo, se deben utilizar dos gramos de azúcar para asegurar una estructura estable y firme.',
    },
    {
      question: '¿Cómo saber si el merengue está a punto de nieve?',
      answer: 'El punto de nieve o pico firme se alcanza cuando, al levantar las varillas, el merengue forma una punta que se mantiene vertical sin doblarse. Además, el merengue debe verse muy brillante.',
    },
    {
      question: '¿Cuál es el merengue más estable para decorar?',
      answer: 'El merengue italiano es el más estable de los tres tipos principales, gracias a que el almíbar caliente cocina ligeramente las proteínas de la clara, creando una estructura más resistente al calor y al paso del tiempo.',
    },
    {
      question: '¿Se pueden usar claras pasteurizadas de bote?',
      answer: 'Sí, se pueden utilizar, pero suelen tardar un poco más en montar que las claras frescas. Un truco es añadir una pizca de cremor tártaro o unas gotas de limón para ayudar a la estabilidad.',
    },
  ],
  howTo: [
    {
      name: 'Pesar las claras',
      text: 'Utiliza una báscula digital para obtener el peso exacto de las claras de huevo sin rastro de yema.',
    },
    {
      name: 'Introducir peso',
      text: 'Escribe ese peso en nuestra calculadora para obtener las cantidades de azúcar necesarias.',
    },
    {
      name: 'Elegir técnica',
      text: 'Selecciona si vas a preparar un merengue francés (básico), italiano (estable) o suizo (sedoso).',
    },
    {
      name: 'Batir y verificar',
      text: 'Sigue los tiempos estimados y comprueba la consistencia hasta alcanzar el punto de nieve firme.',
    },
  ],
  bibliography: [
    {
      name: 'Larousse Cocina: Tipos de Merengues y cómo prepararlos',
      url: 'https://laroussecocina.mx/palabra/merengue/',
    },
    {
      name: 'Exploratorium: The Science of Cooking - Egg Science',
      url: 'https://www.exploratorium.edu/explore/cooking/egg-science',
    },
    {
      name: 'Directo al Paladar: Guía completa del Merengue Francés',
      url: 'https://www.directoalpaladar.com/curso-de-cocina/como-hacer-merengue-frances-facil-trucos-consejos-quede-perfecto',
    },
  ],
  seo: [
    {
      type: 'title',
      text: '¿Cómo hacer el merengue perfecto? Ciencia y proporciones',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El merengue es una de las preparaciones más fundamentales y, a la vez, intimidantes de la repostería clásica. Aunque sus ingredientes son engañosamente simples —claras de huevo y azúcar—, la magia reside en la técnica y en el respeto estricto por las proporciones físico-químicas. Montar claras a punto de nieve no es solo agitar un brazo o una máquina; es un proceso de desnaturalización de proteínas donde creamos una estructura capaz de atrapar millones de microburbujas de aire.',
    },
    {
      type: 'paragraph',
      html: 'Nuestra <strong>calculadora de merengue</strong> ha sido diseñada para eliminar las dudas. Ya sea que tengas tres claras sobrantes de otra receta o estés preparando una gran tarta para un evento, conocer el peso exacto del azúcar y los tiempos estimados de batido es la diferencia entre un merengue firme y brillante y un líquido triste que se desinfla en minutos.',
    },
    {
      type: 'title',
      text: 'Tipos de Merengue: ¿Cuál elegir para tu receta?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'No todos los merengues son iguales. Dependiendo de cómo apliques el azúcar y la temperatura, obtendrás texturas y estabilidades diferentes:',
    },
    {
      type: 'list',
      items: [
        '<strong>Merengue Francés:</strong> Es el más sencillo. Se baten las claras y se añade el azúcar poco a poco. Es ideal para preparar suspiros (merenguitos horneados) o pavlovas, ya que debe cocinarse necesariamente.',
        '<strong>Merengue Italiano:</strong> Considerado el más estable y seguro. El azúcar se añade en forma de almíbar a 118°C. El calor del almíbar \'cocina\' las claras, haciéndolo apto para comer sin horneado adicional. Es el preferido para decorar tartas y pies.',
        '<strong>Merengue Suizo:</strong> Se prepara calentando las claras y el azúcar al baño maría hasta los 60°C antes de batir. Tiene una consistencia muy sedosa y es la base perfecta para las cremas de mantequilla o buttercream suizo.',
      ],
    },
    {
      type: 'title',
      text: 'La Regla de Oro: Proporciones de Azúcar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La proporción estándar en casi cualquier manual de pastelería es de <strong>1:2</strong>. Esto significa que por cada gramo de clara de huevo, utilizaremos dos gramos de azúcar. Esta cantidad no es arbitraria; el azúcar actúa como estabilizador. Sin suficiente azúcar, la red de proteínas de la clara (principalmente la ovoalbúmina) se estira demasiado y termina colapsando, expulsando el agua y arruinando la mezcla.',
    },
    {
      type: 'paragraph',
      html: 'Sin embargo, dependiendo del tipo de merengue, el tipo de azúcar puede variar. En el merengue francés, por ejemplo, es común usar una mezcla de azúcar blanquilla y azúcar glas para lograr un secado superior en el horno. Nuestra calculadora desglosa estas necesidades automáticamente según el peso de tus claras.',
    },
    {
      type: 'title',
      text: 'Los 3 estados del batido: De espumoso a pico firme',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Es crucial identificar visualmente en qué punto se encuentra tu merengue para saber cuándo dejar de batir. El sobrebatido es un error común que rompe la estructura y hace que el merengue \'se corte\'.',
    },
    {
      type: 'list',
      items: [
        '<strong>Punto Espumoso:</strong> Las claras comienzan a burbujear y se vuelven blancas, pero aún son líquidas. Es el momento de empezar a añadir el azúcar.',
        '<strong>Pico Blando (Soft Peaks):</strong> Al levantar la varilla, el merengue forma una punta que se dobla suavemente hacia abajo. Ideal para mousses ligeras.',
        '<strong>Punto de Nieve / Pico Firme (Stiff Peaks):</strong> El merengue es brillante y al levantar la varilla, la punta se mantiene vertical sin moverse. Si giras el bol, el contenido no debe caer.',
      ],
    },
    {
      type: 'title',
      text: 'Factores que arruinan un merengue',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Incluso con las proporciones perfectas de nuestra calculadora, existen enemigos invisibles que pueden hacer fracasar tu preparación:',
    },
    {
      type: 'list',
      items: [
        '<strong>Grasa:</strong> Es el enemigo número uno. La más mínima gota de yema o un rastro de grasa en el bol impedirá que las claras monten. Usa recipientes de metal o vidrio, evitando el plástico que suele retener residuos grasos.',
        '<strong>Temperatura:</strong> Para el merengue francés, las claras a temperatura ambiente montan más rápido y con más volumen. Para el italiano, el control térmico del almíbar es innegociable.',
        '<strong>Humedad:</strong> El azúcar es higroscópico, lo que significa que absorbe la humedad del aire. En días muy lluviosos o húmedos, el merengue puede volverse pegajoso o costarle mucho secar en el horno.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Consejo profesional:</strong> Añade una pizca de cremor tártaro o unas gotas de limón al inicio del batido. El ácido ayuda a estabilizar la red de proteínas, haciendo que el merengue sea mucho más difícil de sobrebatir.',
    },
    {
      type: 'title',
      text: 'Preguntas frecuentes sobre el punto de nieve',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>¿Cuánto pesa una clara de huevo?</strong><br />De media, una clara de un huevo tamaño L pesa unos 30-35 gramos. No obstante, siempre recomendamos usar una báscula digital para precisión absoluta, ya que el tamaño del huevo varía considerablemente.',
    },
    {
      type: 'paragraph',
      html: '<strong>¿Se puede sobrebatir el merengue?</strong><br />Sí. Si bates demasiado una vez alcanzado el pico firme, las proteínas se aglutinarán tanto que expulsarán el agua, creando una textura granulosa y con aspecto seco. Llegado a ese punto, es difícil recuperarlo.',
    },
    {
      type: 'paragraph',
      html: '<strong>¿Por qué mi merengue \'llora\'?</strong><br />Si ves gotas de almíbar saliendo del merengue horneado, suele ser señal de que el azúcar no se disolvió correctamente durante el batido o que el horno estaba demasiado fuerte.',
    },
    {
      type: 'title',
      text: 'Usos gastronómicos del merengue',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una vez domines la técnica con nuestra herramienta, las posibilidades son infinitas. El merengue no solo es un postre en sí mismo como los suspiros o la Pavlova australiana, sino que es un componente estructural de:',
    },
    {
      type: 'list',
      items: [
        '<strong>Macarons:</strong> Requieren un merengue francés o italiano muy preciso para conseguir la \'pie\' característica.',
        '<strong>Mousses clásicas:</strong> Donde aporta la ligereza y aireado sin necesidad de añadir grasas pesadas.',
        '<strong>Soufflés:</strong> Donde el aire atrapado en las claras es el motor de la elevación en el horno.',
        '<strong>Tartas Lemon Pie:</strong> Decoradas con un merengue italiano flambeado que resiste horas sin perder la forma.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Como ves, la repostería es química aplicada. Nuestra calculadora de punto de nieve te permite centrarte en la creatividad mientras nosotros nos encargamos de las matemáticas. ¡Feliz horneado!',
    },
  ],
  schemas: [],
};
