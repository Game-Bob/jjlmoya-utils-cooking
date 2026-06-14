import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calculadora de Pectina y Cuajado de Mermelada para un Gel Perfecto en Cada Ocasion';
const description = 'Calcula exactamente cuanta pectina, acido citrico y azucar necesita tu fruta para lograr el cuajado perfecto de la mermelada. Evita conservas demasiado liquidas o gomosas con quimica de precision.';

const faq = [
  {
    question: 'Por que la pectina hace gelificar la mermelada?',
    answer: 'La pectina es un polisacarido natural que se encuentra en las paredes celulares de las frutas. Al calentarse con azucar y acido (pH 2,8-3,5), las moleculas de pectina forman una red tridimensional de gel que atrapa el agua y el azucar, creando la textura untable de la mermelada.',
  },
  {
    question: 'Cual es la diferencia entre pectina HM y LM?',
    answer: 'La pectina de alto metoxilo (HM) requiere al menos un 60% de azucar y un pH inferior a 3,5 para gelificar, ideal para mermeladas tradicionales. La pectina de bajo metoxilo (LM) gelifica mediante iones de calcio en lugar de azucar, permitiendo conservas bajas en azucar o sin azucar.',
  },
  {
    question: 'Por que mi mermelada a veces queda liquida?',
    answer: 'Una mermelada liquida suele deberse a pectina insuficiente (la fruta carece de ella de forma natural), acido insuficiente (pH demasiado alto para la gelificacion) o falta de azucar (para pectina HM). La dilucion excesiva con agua o una coccion insuficiente tambien pueden impedir el cuajado.',
  },
  {
    question: 'Puedo usar zumo de limon en lugar de acido citrico en polvo?',
    answer: 'Si. Esta calculadora convierte el acido citrico en equivalentes de zumo de limon. Aproximadamente 25 ml de zumo de limon proporcionan la misma acidez que 1 g de acido citrico. El zumo de limon tambien aporta sabor fresco a las mermeladas.',
  },
  {
    question: 'Que frutas son naturalmente ricas en pectina?',
    answer: 'Las manzanas, el membrillo, las moras, los arandanos rojos y las grosellas son naturalmente ricas en pectina y a menudo no requieren pectina anadida. La fruta poco madura tambien contiene mas pectina que la fruta completamente madura.',
  },
];

const howTo = [
  {
    name: 'Selecciona tu fruta',
    text: 'Elige la fruta con la que vas a hacer la mermelada. Cada fruta tiene diferentes niveles naturales de pectina y acidez que determinan que aditivos se necesitan.',
  },
  {
    name: 'Pesa la fruta preparada',
    text: 'Introduce el peso de tu fruta limpia y troceada en gramos. Un pesaje preciso es esencial para hacer mermelada con exactitud.',
  },
  {
    name: 'Elige el tipo de pectina',
    text: 'Selecciona Clasica (HM) para mermelada tradicional con alto contenido de azucar, o Baja en Azucar (LM) si quieres una conserva mas saludable y con azucar reducido activada por calcio.',
  },
  {
    name: 'Revisa tu receta perfecta',
    text: 'La calculadora indica los gramos exactos de pectina en polvo, acido citrico (o zumo de limon) y azucar necesarios. Anadelos durante la coccion para un cuajado garantizado.',
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
  slug: 'calculadora-pectina-mermelada',
  title: 'Calculadora de Pectina y Cuajado de Mermelada',
  description: 'Calcula exactamente cuanta pectina, acido citrico y azucar necesita tu fruta para lograr el cuajado perfecto de la mermelada - sin conservas liquidas ni gomosas.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: 'Calculadora de Pectina y Cuajado de Mermelada',
    subtitle: 'Quimica de gelificacion de precision para conservas perfectas',
    fruitLabel: 'Elige tu fruta',
    allFruits: 'Todas',
    highPectin: 'Alta en Pectina',
    mediumPectin: 'Media en Pectina',
    lowPectin: 'Baja en Pectina',
    weightLabel: 'Peso de la fruta',
    weightPlaceholder: 'ej. 1000',
    weightUnitMetric: 'g',
    weightUnitImperial: 'oz',
    pectinTypeLabel: 'Tipo de pectina',
    pectinHM: 'Clasica (HM)',
    pectinLM: 'Baja en Azucar (LM)',
    sugarModeLabel: 'Modo de azucar',
    sugarModeAuto: 'Auto',
    sugarModeManual: 'Manual',
    sugarLabel: 'Peso del azucar',
    sugarPlaceholder: 'ej. 650',
    recipeTitle: 'Receta',
    pectinNeeded: 'Pectina',
    citricAcidNeeded: 'Acido Citrico',
    lemonJuiceNeeded: 'Zumo de Limon',
    sugarNeeded: 'Azucar',
    totalYield: 'Rendimiento Total',
    sugarPercent: 'Azucar',
    sugarLow: 'Bajo',
    sugarIdeal: 'Ideal',
    sugarHigh: 'Alto',
    sugarOfFruit: 'del peso de la fruta',
    sugarOfTotal: 'del total',
    statusPerfect: 'Gel Perfecto',
    statusPerfectDesc: 'Tus proporciones estan equilibradas. La mermelada cuajara hermosamente con una textura sedosa y untable y un brillo esplendido.',
    statusSlightlyThin: 'Ligeramente Liquida',
    statusSlightlyThinDesc: 'La mermelada puede cuajar de forma suave. Considera anadir mas pectina o reducir el contenido de agua para un gel mas firme.',
    statusTooThin: 'Demasiado Liquida - Riesgo de Mermelada Fluida',
    statusTooThinDesc: 'Sin ajustes, esta mermelada probablemente permanecera liquida. Aumenta el azucar (para HM) o anade mas pectina.',
    statusTooStiff: 'Demasiado Firme',
    statusTooStiffDesc: 'El gel puede volverse gomoso. Reduce la pectina a la mitad o aumenta ligeramente el peso de la fruta.',
    dropTestTitle: 'Prueba del Plato Frio',
    dropTestHow: 'Dejar caer sobre un plato frio',
    dropStatusLabel: 'Resultado',
    dropTestPerfect: 'Cuajara. La gota se arruga y se mantiene',
    dropTestThin: 'Liquida. Se desliza por el plato',
    dropTestStiff: 'Demasiado firme. Apenas se mueve',
    dropPlateLabel: 'plato',
    dropDropLabel: 'gota',
    sugarAutoHint: 'calculado automaticamente',
    sugarManualHint: 'introducir cantidad',
    unitLabel: 'Sistema de Medidas',
    metricLabel: 'Metrico (g)',
    imperialLabel: 'Imperial (oz)',
    disclaimer: 'Pesa todos los ingredientes con una bascula de cocina digital para obtener los mejores resultados. Las mediciones volumetricas no son fiables para hacer mermelada.',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'La Ciencia Completa del Cuajado de Mermelada: Equilibrio de Pectina, Acido y Azucar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hacer mermelada es una interseccion precisa entre quimica y cocina. En su esencia, la transformacion de la pulpa de fruta en un gel firme y untable depende del equilibrio correcto de tres moleculas: <strong>pectina</strong> (el agente gelificante), <strong>acido</strong> (el catalizador que activa la pectina) y <strong>azucar</strong> (el agente deshidratante que extrae el agua de las cadenas de pectina). Sin las proporciones correctas, se obtiene una sopa de fruta o un bloque gomoso.',
    },
    {
      type: 'title',
      text: 'Como Forma la Pectina una Red de Gel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La pectina es un polisacarido complejo compuesto principalmente por unidades de acido galacturonico, que se encuentra en la lamina media de las paredes celulares vegetales. En su estado natural, las moleculas de pectina tienen carga negativa y se repelen entre si, permaneciendo disueltas en el agua de la fruta. Para formar un gel, deben cumplirse tres condiciones simultaneamente: (1) debe haber suficiente azucar para competir por las moleculas de agua, deshidratando las cadenas de pectina; (2) el pH debe descender por debajo de 3,5, neutralizando las cargas negativas mediante la protonacion de los grupos carboxilo; y (3) la temperatura debe superar los 104-105 C para disolver y activar completamente la pectina. Cuando estas condiciones se alinean, las cadenas de pectina forman zonas de union - regiones donde las cadenas se asocian mediante puentes de hidrogeno e interacciones hidrofobas - creando una red tridimensional continua similar a una esponja que atrapa el zumo de fruta y el almibar de azucar.',
    },
    {
      type: 'title',
      text: 'Pectina de Alto Metoxilo (HM) vs. Bajo Metoxilo (LM)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La pectina se clasifica por su grado de esterificacion (DE), que es el porcentaje de grupos carboxilo esterificados con metanol. <strong>La pectina de alto metoxilo (HM)</strong> (DE > 50%) requiere un minimo de 55-65% de solidos solubles (azucar) y un pH entre 2,8 y 3,5 para formar un gel. Esta es la pectina clasica utilizada en recetas tradicionales de mermelada. Sin suficiente azucar, la pectina HM forma un gel debil o inexistente. <strong>La pectina de bajo metoxilo (LM)</strong> (DE < 50%) gelifica mediante un mecanismo diferente: se reticula a traves de iones de calcio divalentes (Ca) que forman puentes entre los grupos carboxilo libres. La pectina LM puede gelificar con poco o ningun azucar anadido, lo que la hace ideal para conservas bajas en calorias, aptas para diabeticos o endulzadas naturalmente. Algunas pectinas LM tambien toleran un rango de pH mas amplio hasta 5,5, util para frutas de baja acidez como higos y peras.',
    },
    {
      type: 'title',
      text: 'Contenido Natural de Pectina en Diferentes Variedades de Fruta',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'No todas las frutas son iguales en cuanto a pectina. Las frutas se clasifican en tres categorias segun sus niveles naturales de pectina y acidez. Saber en que punto del espectro se encuentra tu fruta determina si necesitas suplementar con pectina en polvo o acido citrico.',
    },
    {
      type: 'table',
      headers: ['Nivel de Pectina', 'Nivel de Acidez', 'Frutas de Ejemplo', 'Pectina Anadida Necesaria'],
      rows: [
        ['Alto', 'Alto', 'Manzana, Arandano Rojo, Grosella', '0% (nada)'],
        ['Alto', 'Medio/Bajo', 'Membrillo, Mora', '0% (nada)'],
        ['Medio', 'Alto', 'Frambuesa, Loganberry', '0,3% del peso de la fruta'],
        ['Medio', 'Medio', 'Ciruela, Albaricoque', '0,3% del peso de la fruta'],
        ['Medio', 'Bajo', 'Arandano Azul', '0,3% del peso de la fruta'],
        ['Bajo', 'Alto', 'Cereza, Uva', '0,6% del peso de la fruta'],
        ['Bajo', 'Medio', 'Melocoton, Mango', '0,6% del peso de la fruta'],
        ['Bajo', 'Bajo', 'Fresa, Pera, Higo', '0,6% del peso de la fruta'],
      ],
    },
    {
      type: 'title',
      text: 'El Papel Critico del pH en la Gelificacion de la Mermelada',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El pH de la mezcla de mermelada es posiblemente la variable mas ignorada en la conservacion casera. A un pH superior a 3,8, los grupos carboxilo de la pectina permanecen ionizados (con carga negativa), creando repulsion electrostatica que impide la formacion del gel independientemente de la cantidad de azucar o pectina que se anada. Cuando el pH desciende por debajo de 3,5 mediante la adicion de acido citrico o zumo de limon, estos grupos se protonan, permitiendo la formacion de puentes de hidrogeno entre cadenas de pectina adyacentes. La zona optima de gelificacion esta entre pH 2,8 y 3,2. Por debajo de pH 2,8, el gel se vuelve quebradizo y puede mostrar sineresis (exudacion de liquido). Por encima de pH 3,5, tambien se produce sineresis y el gel es demasiado debil. Por eso las frutas de baja acidez como los higos y las fresas casi siempre necesitan acido citrico anadido: su pH natural es demasiado alto para activar la pectina correctamente.',
    },
    {
      type: 'title',
      text: 'Concentracion de Azucar y su Efecto en la Fuerza del Gel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El azucar cumple dos funciones en la mermelada con pectina HM. Primero, es altamente higroscopico: compite intensamente con la pectina por las moleculas de agua, eliminando las capas de hidratacion de las cadenas de pectina y forzandolas a interactuar entre si. Segundo, eleva el punto de ebullicion de la mezcla, permitiendo que la mermelada alcance el punto de cuajado de 104-105 C. Con una concentracion de azucar del 65%, las cadenas de pectina estan suficientemente deshidratadas para formar un gel fuerte. Por debajo del 60%, el gel se debilita linealmente. Por encima del 68%, la mermelada puede cristalizar al enfriarse cuando el azucar supera su limite de solubilidad. Para mermeladas con pectina LM, el azucar solo desempena un papel de sabor ya que la gelificacion depende de los puentes de calcio. El contenido de azucar puede ser tan bajo como 5-10% en conservas con pectina LM endulzadas con edulcorantes no nutritivos.',
    },
    {
      type: 'title',
      text: 'Acido Citrico vs. Zumo de Limon: Conversion y Buenas Practicas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El acido citrico (CHO) es el acido principal utilizado en la fabricacion comercial de mermeladas porque es estandarizado, insipido y preciso. El zumo de limon contiene aproximadamente un 5% de acido citrico en peso, ademas de acido malico y acido ascorbico (vitamina C). <strong>1 gramo de acido citrico puro equivale aproximadamente a 25 ml de zumo de limon fresco</strong> en cuanto a capacidad de reduccion del pH. Sin embargo, el zumo de limon tambien anade volumen de liquido, lo que debe tenerse en cuenta en el contenido total de agua. Para obtener los resultados mas consistentes, utiliza acido citrico en polvo disuelto en una pequena cantidad de agua. Al usar zumo de limon, ten en cuenta unos 20-30 ml adicionales de liquido que deben evaporarse para alcanzar el punto de cuajado.',
    },
    {
      type: 'title',
      text: 'La Prueba del Plato Frio: Un Metodo Visual para Determinar el Punto de Cuajado',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La tradicional prueba del plato frio (tambien llamada prueba de la arruga o del platillo) sigue siendo uno de los metodos mas fiables para los elaboradores caseros de mermelada. Coloca un plato pequeno de ceramica en el congelador durante 10 minutos antes de empezar a cocinar. Cuando creas que la mermelada ha alcanzado su punto de cuajado, deja caer una cucharadita de mermelada caliente sobre el plato frio y dejala enfriar durante 30 segundos. Empuja el borde de la gota con la yema del dedo: si la superficie se arruga de forma caracteristica y la gota mantiene su forma, se ha alcanzado el punto de gel. Si se desliza libremente, continua hirviendo durante 2-3 minutos y prueba de nuevo. Esta calculadora simula esa prueba visualmente, mostrandote si las proporciones de tu receta superaran la prueba del plato antes incluso de empezar a cocinar.',
    },
    {
      type: 'title',
      text: 'Solucion de Problemas: Por que Falla la Mermelada y Como Solucionarlo',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Mermelada liquida (no cuaja despues de enfriar):</strong> La causa mas comun es una coccion insuficiente: la mezcla nunca alcanzo los 104-105 C. Vuelve a hervir la mermelada, anadiendo 1-2 g de acido citrico por kg de fruta y comprueba con el metodo del plato frio. Alternativamente, disuelve 5 g de pectina en polvo en agua fria, incorporalo a la mermelada mientras hierve y cuece durante 2 minutos adicionales.',
        '<strong>Mermelada gomosa o demasiado firme:</strong> Se anadio demasiada pectina en relacion al peso de la fruta, o la mermelada se cocio en exceso por encima de 106 C, degradando la red de pectina en una estructura rigida y quebradiza. Para recuperarla, recalienta suavemente con 100-200 ml de zumo de manzana o agua para diluir la concentracion de pectina.',
        '<strong>Sineresis (agua que exuda del gel):</strong> Esto indica exceso de acido (pH por debajo de 2,8) o azucar por encima del 68%, lo que hace que la red de pectina se contraiga y expulse agua. Anade una pequena cantidad de bicarbonato de sodio para elevar el pH gradualmente.',
        '<strong>Cristalizacion (textura granulosa):</strong> La concentracion de azucar supero la solubilidad, o cristales de azucar no disueltos actuaron como puntos de nucleacion. Remueve constantemente durante la ebullicion final y anade 1 cucharada de jarabe de maiz o glucosa, que inhibe la cristalizacion.',
        '<strong>Moho en la superficie durante el almacenamiento:</strong> La mermelada no se cocio lo suficiente (no alcanzo la temperatura de esterilizacion), contenia demasiado poco azucar (por debajo del 60% para pectina HM) o los tarros no se esterilizaron correctamente. Utiliza siempre tarros esterilizados y procesa al bano Maria durante 10 minutos.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
