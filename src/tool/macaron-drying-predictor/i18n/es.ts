import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Predictor de Secado de Macarons: Calculadora de Tiempo de Secado segun Humedad y Temperatura';
const description = 'Calcula exactamente cuanto necesitan secar las tapas de macaron segun la humedad, la temperatura y el tamano. Evita las grietas y consigue un pie perfecto en cada hornada.';

const faq = [
  {
    question: '¿Por que necesitan secarse las tapas de macaron antes de hornear?',
    answer: 'El secado forma una fina pelicula en la superficie de la tapa. Esa capita es esencial porque atrapa el vapor durante el horneado, obligandolo a escapar hacia abajo a traves del pie en vez de reventar la parte superior. Sin un secado adecuado, los macarons se agrietan, no tienen pie o se hornean de forma desigual.',
  },
  {
    question: '¿Como afecta la humedad al tiempo de secado de los macarons?',
    answer: 'La humedad es el factor mas determinante. Con humedad alta (por encima del 60%), el aire ya esta saturado de agua, lo que ralentiza mucho la evaporacion de la superficie de la tapa. El tiempo de secado puede duplicarse o triplicarse respecto a un dia seco. En condiciones muy secas (por debajo del 30%), las tapas pueden secarse demasiado y desarrollar una piel tan gruesa que impide que suban bien.',
  },
  {
    question: '¿Cual es la temperatura ideal para secar las tapas de macaron?',
    answer: 'La temperatura ambiente entre 20°C y 25°C es la ideal. El aire mas calido retiene mas humedad y acelera el secado, pero si hace demasiado calor (por encima de 30°C) las tapas se secan de forma desigual, con el exterior costroso y el interior humedo. Las temperaturas frescas por debajo de 18°C ralentizan mucho el secado.',
  },
  {
    question: '¿Como afecta el tamano de la tapa al tiempo de secado?',
    answer: 'Las tapas mas grandes tienen mas superficie y volumen, por lo que necesitan proporcionalmente mas tiempo de secado. Un mini macaron de 2cm puede secarse en 15 minutos, mientras que un macaron grande de 5cm puede tardar mas de una hora. La relacion no es lineal: duplicar el diametro triplica aproximadamente el tiempo de secado debido a la relacion cuadrado-cubo entre superficie y volumen.',
  },
];

const howTo = [
  {
    name: 'Escudilla las tapas de macaron',
    text: 'Escudilla redondeles de tamano uniforme sobre papel de horno o un tapete de silicona. Usa una plantilla para mantener un tamano constante.',
  },
  {
    name: 'Mide las condiciones de tu cocina',
    text: 'Comprueba la humedad y la temperatura ambiente de tu cocina con un higrometro y un termometro.',
  },
  {
    name: 'Introduce los valores en la calculadora',
    text: 'Indica la humedad, la temperatura y el diametro de tus tapas para obtener el tiempo estimado de secado.',
  },
  {
    name: 'Prueba la piel',
    text: 'Pasado el tiempo indicado, toca suavemente la superficie de una tapa. Debe notarse seca y mate, no pegajosa. Si se pega al dedo, necesita mas tiempo.',
  },
  {
    name: 'Hornea cuando este listo',
    text: 'En cuanto se haya formado la piel, hornea de inmediato. No dejes las tapas reposar demasiado tras el secado, o se resecaran y agrietaran.',
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
  slug: 'predictor-secado-macarons',
  title: 'Predictor de Secado de Macarons',
  description: 'Calcula exactamente cuanto necesitan secar las tapas de macaron segun la humedad, la temperatura y el tamano. Evita las grietas y consigue un pie perfecto en cada hornada.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    humidityLabel: 'Humedad Ambiente',
    humidityUnit: '%',
    tempLabel: 'Temperatura Ambiente',
    tempUnit: '°C',
    sizeLabel: 'Diametro de la Tapa',
    sizeUnit: 'cm',
    dryingTimeLabel: 'Tiempo Estimado de Secado',
    minutesUnit: 'min',
    readinessLabel: 'Estado de la Superficie',
    skinStatusReady: 'Listo para Hornear',
    skinStatusForming: 'Formando Piel',
    skinStatusSticky: 'Aun Pegajoso',
    skinStatusOverDry: 'Demasiado Seco',
    humidityTagHigh: 'Humedad alta',
    humidityTagNormal: 'Humedad normal',
    humidityTagLow: 'Humedad baja',
    humidityDescHigh: 'Dia muy humedo. El secado tardara bastante mas. Usa un deshumidificador o una habitacion con aire acondicionado si es posible.',
    humidityDescNormal: 'Humedad moderada. El secado deberia avanzar a un ritmo normal, con buena formacion de piel.',
    humidityDescLow: 'Aire muy seco. Las tapas pueden secarse demasiado rapido y corren riesgo de resecarse. Vigilalas de cerca y reduce el tiempo de secado.',
    tempTagHot: 'Ambiente calido',
    tempTagIdeal: 'Temperatura ideal',
    tempTagCool: 'Ambiente fresco',
    sizeTagMini: 'Mini',
    sizeTagStandard: 'Estandar',
    sizeTagLarge: 'Grande',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'La Ciencia del Secado de las Tapas de Macaron: Por que la Formacion de la Piel Determina el Exito',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El macaron es uno de los dulces mas exigentes de la pasteleria francesa. Su caracteristica cupula lisa y su base rizada, conocida como "pie" o "pied", dependen por completo de un paso fundamental: secar las tapas antes de hornear. Este tiempo de reposo permite que se forme una fina pelicula de proteinas en la superficie de cada tapa. Durante el horneado, esa piel atrapa el vapor en expansion dentro de la tapa y lo obliga a salir hacia abajo por la base, lo que levanta la tapa y crea el deseado pie. Sin un secado suficiente, el vapor rompe la parte superior y aparecen grietas. Con un secado excesivo, la piel se vuelve demasiado rigida y las tapas no pueden subir correctamente.',
    },
    {
      type: 'title',
      text: 'La Humedad y su Papel Dominante en la Cinetica del Secado',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La humedad relativa es la variable que mas influye en el secado de las tapas de macaron. Con un 50% de humedad relativa, una tapa estandar de 3cm suele necesitar entre 30 y 40 minutos para desarrollar una piel adecuada. Con un 70% de humedad, ese tiempo puede alargarse a 60-90 minutos. Con un 30% de humedad, el secado puede completarse en apenas 15-20 minutos. La fisica que lo explica es sencilla: la velocidad de evaporacion es proporcional al deficit de presion de vapor entre la superficie de la tapa y el aire que la rodea. El aire humedo tiene un deficit menor, por lo que la evaporacion se ralentiza. Las pastelerias profesionales controlan la humedad con mucho cuidado y a menudo disponen de salas especificas para macarons mantenidas al 40-50% de humedad relativa.',
    },
    {
      type: 'title',
      text: 'Tabla de Referencia de Tiempos de Secado segun Humedad y Tamano de Tapa',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Humedad', '2cm Mini', '3cm Estandar', '4cm Grande', '5cm Extragrande'],
      rows: [
        ['30% (Muy Seco)', '10-15 min', '15-20 min', '25-30 min', '35-45 min'],
        ['40% (Seco)', '15-20 min', '20-30 min', '30-40 min', '45-60 min'],
        ['50% (Moderado)', '20-25 min', '30-40 min', '40-55 min', '55-75 min'],
        ['60% (Humedo)', '25-35 min', '40-55 min', '55-75 min', '75-100 min'],
        ['70% (Muy Humedo)', '35-50 min', '55-75 min', '75-100 min', '100-130 min'],
        ['80% (Extremadamente Humedo)', '50-70 min', '75-100 min', '100-140 min', '130-180 min'],
      ],
    },
    {
      type: 'title',
      text: 'El Papel de la Temperatura en la Velocidad de Evaporacion',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La temperatura influye en el secado mediante dos mecanismos. En primer lugar, el aire mas calido puede contener mas vapor de agua, lo que aumenta la tasa potencial de evaporacion desde la superficie de la tapa. En segundo lugar, la energia cinetica molecular aumenta con la temperatura, acelerando la velocidad a la que las moleculas de agua escapan de la fase liquida. Sin embargo, la temperatura tambien afecta a la estabilidad del merengue. Por encima de 28°C, las proteinas de la clara de huevo pueden empezar a desestabilizarse, debilitando la estructura. El rango ideal para el secado de macarons es de 20-25°C. Por debajo de 18°C, la evaporacion se ralentiza hasta el punto de que el secado se vuelve poco practico para tapas de tamano estandar.',
    },
    {
      type: 'title',
      text: 'El Tamano de la Tapa y la Ley Cuadrado-Cubo del Secado',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El diametro de la tapa tiene un efecto no lineal sobre el tiempo de secado debido a la relacion cuadrado-cubo entre superficie y volumen. Un mini macaron de 2cm tiene aproximadamente 3,1 cm² de superficie para 0,5 cm³ de volumen, lo que arroja una favorable relacion superficie-volumen de aproximadamente 6:1. Un macaron grande de 5cm tiene unos 19,6 cm² de superficie para 8,2 cm³ de volumen, una relacion de solo 2,4:1. Esto significa que las tapas mas grandes tienen proporcionalmente menos superficie por la que puede escapar la humedad, lo que aumenta mucho el tiempo de secado. La calculadora modela este fenomeno usando una ley potencial calibrada con datos empiricos de obradores de pasteleria profesional.',
    },
    {
      type: 'title',
      text: 'Solucion de Problemas Frecuentes en el Secado de Macarons',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Tapas agrietadas y sin pie',
      html: 'El fallo mas comun en los macarons. Casi siempre indica que las tapas no se secaron lo suficiente antes de hornear. La piel de la superficie era demasiado debil para contener el vapor en expansion, que escapo reventando la parte superior. <strong>Solucion: Aumenta el tiempo de secado entre 10 y 15 minutos y prueba la superficie con la yema del dedo antes de hornear.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Pie torcido o desigual',
      html: 'La causa es un secado desigual. Si un lado de la bandeja se seca mas rapido que el otro, el pie subira de forma irregular. Suele ocurrir cuando las bandejas se colocan cerca de una ventana, un ventilador o una fuente de calor. <strong>Solucion: Gira las bandejas durante el secado y asegura una circulacion de aire uniforme alrededor de todas las tapas.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tapas huecas tras el horneado',
      html: 'Las tapas huecas pueden deberse a un secado excesivo, que genera una piel demasiado gruesa y rigida. La tapa no puede expandirse correctamente durante el horneado y queda una camara de aire en el interior. <strong>Solucion: Reduce el tiempo de secado y comprueba antes la formacion de la piel. La superficie debe notarse seca pero ceder ligeramente al presionarla con suavidad.</strong>',
    },
    {
      type: 'title',
      text: 'Consejos Profesionales de Chefs Pasteleros',
      level: 3,
    },
    {
      type: 'tip',
      title: 'La Tecnica de la Puerta del Horno para Dias Humedos',
      html: 'En dias extremadamente humedos, los chefs profesionales recurren a una tecnica llamada "secado al horno". Precalienta el horno a la temperatura mas baja posible (normalmente 50°C), apagalo y coloca los macarons dentro con la puerta entreabierta durante 5-10 minutos. Esto crea un microclima calido y de baja humedad que acelera la formacion de la piel sin empezar a cocer las tapas.',
    },
    {
      type: 'tip',
      title: 'La Prueba del Tacto para una Piel Perfecta',
      html: 'La prueba definitiva para saber si los macarons estan listos: toca suavemente la superficie de una tapa con la yema del dedo limpia y seca. Si la masa se pega al dedo, necesita mas tiempo. Si la superficie se nota seca y mate y no se pega, la piel ya se ha formado. Si la superficie se nota dura y costrosa, sin ceder, las tapas estan demasiado secas.',
    },
    {
      type: 'tip',
      title: 'Control de Humedad sin Equipamiento',
      html: 'Si no dispones de deshumidificador, coloca un cuenco con arroz crudo o sobres de gel de silice cerca de los macarons mientras se secan. Estos desecantes absorben la humedad del ambiente y crean un microclima mas seco alrededor de la bandeja. En cocinas profesionales sin climatizacion, este sencillo truco puede reducir el tiempo de secado entre un 30% y un 40% en dias humedos.',
    },
    {
      type: 'title',
      text: 'El Factor del Envejecimiento de las Claras de Huevo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Las claras envejecidas producen merengues mas estables que se secan de forma mas predecible. Las claras frescas contienen mas agua y una estructura proteica menos elastica, lo que da lugar a merengues mas debiles que tardan mas en formar una piel adecuada. Las recetas profesionales recomiendan claras envejecidas entre 24 y 72 horas a temperatura ambiente, o entre 3 y 5 dias en la nevera. Las claras envejecidas pierden aproximadamente entre un 10% y un 15% de su contenido de agua por evaporacion, lo que concentra las proteinas y mejora la fuerza del merengue.',
    },
    {
      type: 'title',
      text: 'Referencia Rapida: Tiempos de Secado para Condiciones Habituales',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Tiempos de secado tipicos para tapas de macaron estandar de 3cm',
      items: [
        'Cocina con aire acondicionado (22°C, 45% humedad): 25-30 minutos',
        'Dia de primavera, ventanas abiertas (20°C, 55% humedad): 35-45 minutos',
        'Dia de verano, sin aire acondicionado (28°C, 70% humedad): 60-90 minutos  -  usa la tecnica de secado al horno',
        'Casa con calefaccion en invierno (21°C, 30% humedad): 15-20 minutos  -  vigila que no se sequen demasiado',
        'Dia lluvioso (18°C, 80% humedad): 75-100 minutos  -  recomendable usar deshumidificador',
        'Obrador de pasteleria profesional (22°C, 45% humedad, conveccion): 20-25 minutos',
      ],
    },
    {
      type: 'paragraph',
      html: 'Cada cocina es un mundo. Esta calculadora tiene en cuenta las tres variables fundamentales  -  humedad, temperatura y tamano de tapa  -  para darte una estimacion personalizada del tiempo de secado. Introduce tus condiciones y escudilla con confianza.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
