import type { ToolLocaleContent } from '../../../types';

const title = "Conversor Cocina Americana Cups a Gramos y Temperaturas";
const description = "Convierte cups, tablespoons y Fahrenheit al sistema métrico. La brújula para descifrar recetas estadounidenses con precisión profesional.";
const faq = [
    {
      question: '¿Cuál es la diferencia entre 1 cup y 250ml?',
      answer: '1 cup estadounidense = 236.588ml, no 250ml. Para propósitos prácticos, usamos 240ml. Aunque parece pequeña, esta diferencia de 4% puede afectar en recetas sensibles como macarons o mousses.',
    },
    {
      question: '¿Por qué la harina no siempre pesa lo mismo?',
      answer: 'Porque la harina se compacta con el tiempo y el transporte. Una harina recién tamizada pesa menos que una que ha estado en la despensa. Por eso, los panaderos profesionales siempre pesan, nunca miden volumen.',
    },
    {
      question: '¿Cuál es la diferencia entre Tbsp y tsp?',
      answer: '1 Tablespoon (Tbsp) = 15ml. 1 Teaspoon (tsp) = 5ml. Una cucharada es 3 veces una cucharita. En recetas de repostería, los errores con especias (que se miden en tsp) son comunes.',
    },
    {
      question: '¿Es lo mismo una cup US que una cup imperial?',
      answer: 'No. 1 US cup = 236ml. 1 Imperial cup (UK) = 284ml. Una diferencia del 20%. La mayoría de blogs estadounidenses usan US cups. Si la receta no especifica, asume US.',
    },
    {
      question: '¿A qué temperatura corresponde el "gas 4" del horno?',
      answer: 'Gas 4 = 180°C = 350°F. Es la escala británica. En repostería española, buscamos el número equivalente en tu horno: algunos usan gas, otros electrónico.',
    },
  ];
const howTo = [
    {
      name: 'Selecciona el tipo de conversión',
      text: 'Elige entre Cups a Gramos, Tablespoons/Teaspoons a Gramos, o Fahrenheit a Celsius.',
    },
    {
      name: 'Escoge el ingrediente',
      text: 'Cada alimento tiene una densidad diferente. La harina, azúcar, mantequilla: todos pesan distinto.',
    },
    {
      name: 'Ingresa la cantidad',
      text: 'Escribe el número de cups, cucharas o grados. El conversor calcula el equivalente al instante.',
    },
    {
      name: 'Ajusta tu receta',
      text: 'Con la conversión exacta, ahora puedes seguir la receta estadounidense con precisión profesional.',
    },
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
  slug: 'conversor-unidades-cocina-americana',
  title: 'Conversor Cocina Americana Cups a Gramos y Temperaturas',
  description: 'Convierte cups, tablespoons y Fahrenheit al sistema métrico. La brújula para descifrar recetas estadounidenses con precisión profesional.',
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Bibliografía',
  ui: {
    copied: 'Copiado',
    noHistory: 'Sin historial',
    load: 'Cargar',
    delete: 'Eliminar',
    tabCups: 'Tazas a Gramos',
    tabSpoons: 'Cucharas a Gramos',
    tabTemperatures: 'Temperaturas',
    tabCupsAriaLabel: 'Tazas a Gramos',
    tabSpoonsAriaLabel: 'Cucharas a Gramos',
    tabTempsAriaLabel: 'Temperaturas de Horno',
    stepSelectIngredient: 'Selecciona el Ingrediente',
    stepHowManyCups: '¿Cuántas Tazas (Cups)?',
    stepSelectMeasure: 'Selecciona la Medida',
    stepQuantity: 'Cantidad',
    stepOvenConversion: 'Conversión de Horno',
    stepFrequentTemps: 'Temperaturas de Receta Frecuentes',
    cupFlour: 'Harina',
    cupFlourSub: '120g / cup',
    cupWhiteSugar: 'Azúcar Blanco',
    cupWhiteSugarSub: '200g / cup',
    cupBrownSugar: 'Azúcar Moreno',
    cupBrownSugarSub: '220g / cup',
    cupPowderSugar: 'Azúcar Glas',
    cupPowderSugarSub: '115g / cup',
    cupButter: 'Mantequilla',
    cupButterSub: '227g / cup',
    cupCocoa: 'Cacao en Polvo',
    cupCocoaSub: '85g / cup',
    cupLiquids: 'Líquidos',
    cupLiquidsSub: '240g / cup',
    cupOats: 'Avena',
    cupOatsSub: '90g / cup',
    cupFlourAriaLabel: 'Harina',
    cupWhiteSugarAriaLabel: 'Azúcar Blanco',
    cupBrownSugarAriaLabel: 'Azúcar Moreno',
    cupPowderSugarAriaLabel: 'Azúcar Glas',
    cupButterAriaLabel: 'Mantequilla',
    cupCocoaAriaLabel: 'Cacao',
    cupLiquidsAriaLabel: 'Líquido',
    cupOatsAriaLabel: 'Avena',
    stepperMinus: 'Restar',
    stepperPlus: 'Sumar',
    cupsAmountLabel: 'Cantidad de Tazas',
    spoonQuantityLabel: 'Cantidad',
    cupQuick1_4: '1/4 Cup',
    cupQuick1_3: '1/3 Cup',
    cupQuick1_2: '1/2 Cup',
    cupQuick1: '1 Cup',
    unitGrams: 'Gramos',
    unitGramsML: 'Gramos / Mililitros',
    spoonMeasureLabel: 'Selecciona la Medida',
    spoonTablespoon: 'Cucharada Grande (Tbsp)',
    spoonTeaspoon: 'Cucharadita Pequeña (tsp)',
    spoonTablespoonAriaLabel: 'Cucharada grande',
    spoonTeaspoonAriaLabel: 'Cucharadita pequeña',
    spoonSelectIngredient: 'Selecciona el Ingrediente',
    spoonLeavening: 'Levadura',
    spoonLeaveningSub: 'Polvo Hornear',
    spoonSalt: 'Sal Fina',
    spoonSaltSub: 'Mineral',
    spoonSugar: 'Azúcar Blanco',
    spoonSugarSub: 'Granulado',
    spoonLiquids: 'Líquidos',
    spoonLiquidsSub: 'Agua, Aceite',
    spoonLeavingAriaLabel: 'Levadura Química',
    spoonSaltAriaLabel: 'Sal',
    spoonSugarAriaLabel: 'Azúcar Blanco',
    spoonLiquidsAriaLabel: 'Líquido',
    spoonQuick1_4: '1/4',
    spoonQuick1_2: '1/2',
    spoonQuick1: '1',
    spoonQuick2: '2',
    tempFahrenheit: 'Fahrenheit (°F)',
    tempCelsius: 'Celsius (°C)',
    tempFahrenheitAriaLabel: 'Fahrenheit',
    tempCelsiusAriaLabel: 'Celsius',
    tempPreset275: '275°F',
    tempPreset275Desc: '135°C - Secado',
    tempPreset275AriaLabel: 'Set 275 Fahrenheit',
    tempPreset325: '325°F',
    tempPreset325Desc: '165°C - Bizcocho denso',
    tempPreset325AriaLabel: 'Set 325 Fahrenheit',
    tempPreset350: '350°F',
    tempPreset350Desc: '175°C - Estándar pasteles',
    tempPreset350AriaLabel: 'Set 350 Fahrenheit',
    tempPreset400: '400°F',
    tempPreset400Desc: '200°C - Panes / Tartas',
    tempPreset400AriaLabel: 'Set 400 Fahrenheit',
    tempPreset425: '425°F',
    tempPreset425Desc: '220°C - Pizzas / Hojaldre',
    tempPreset425AriaLabel: 'Set 425 Fahrenheit',
  },
  seo: [
    {
      type: 'title',
      text: 'Guía Maestro para el Conversor de Medidas de Cocina Americana',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Convertir <strong>cups a gramos</strong> o <strong>Fahrenheit a Celsius</strong> es el primer paso para dominar las recetas internacionales. La cocina estadounidense se basa en el volumen, lo que introduce una variabilidad de hasta el 25% en ingredientes secos como la harina.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '120g',
          label: '1 Cup de Harina',
          icon: 'mdi:grain',
        },
        {
          value: '227g',
          label: 'Stick de Mantequilla',
          icon: 'mdi:cube-outline',
        },
        {
          value: '175°C',
          label: 'Equivalente 350°F',
          icon: 'mdi:thermometer',
        },
        {
          value: '240ml',
          label: 'Volumen 1 Cup',
          icon: 'mdi:water-percent',
        },
      ],
    },
    {
      type: 'title',
      text: 'Diferencias Críticas entre Volumen y Peso',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Medición por Volumen (Cups)',
          icon: 'mdi:cup-water',
          description: 'Utilizado en recetas domésticas de EE.UU. Mide el espacio que ocupa el ingrediente.',
          points: [
            'Muy dependiente de la compactación',
            'Error común del 20-30% en harinas',
            'Inconsistente entre marcas de tazas',
            'Requiere tamizar antes para mayor precisión',
          ],
        },
        {
          title: 'Medición por Peso (Gramos)',
          icon: 'mdi:scale-balance',
          description: 'El estándar de la repostería profesional y europea. Precisión absoluta.',
          highlight: true,
          points: [
            'Precisión de +/- 1g siempre',
            'Resultados consistentes y repetibles',
            'Menos limpieza (un solo bol)',
            'Facilita el escalado matemático',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Equivalencias de Ingredientes Comunes',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Ingrediente', '1 Cup (Volumen)', 'Gramos (Peso)', 'Densidad'],
      rows: [
        ['Harina de Trigo', '1 Cup', '120g', 'Baja'],
        ['Azúcar Blanco', '1 Cup', '200g', 'Media'],
        ['Azúcar Moreno', '1 Cup', '220g (compactado)', 'Alta'],
        ['Mantequilla', '1 Cup (2 sticks)', '227g', 'Alta'],
        ['Cacao en Polvo', '1 Cup', '85g', 'Muy Baja'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '¿Tu Bizcocho ha Salido Seco?',
      html: 'El problema más común al usar cups es "hundir la taza" en el saco de harina. Esto compacta el polvo y puedes estar añadiendo hasta 40g extras de harina por cada taza. La solución es <strong>siempre convertir a gramos</strong> usando nuestra calculadora.',
    },
    {
      type: 'title',
      text: 'Glosario de Unidades Estadounidenses',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cup (Taza)',
          definition: 'Unidad de volumen equivalente a unos 240ml. Es la base de la cocina americana.',
        },
        {
          term: 'Tbsp (Tablespoon)',
          definition: 'Cucharada sopera, equivalente a 15ml o 3 teaspoons.',
        },
        {
          term: 'tsp (Teaspoon)',
          definition: 'Cucharadita de café, equivalente a 5ml. Crucial para levaduras y sal.',
        },
        {
          term: 'Stick of Butter',
          definition: 'Formato común de mantequilla en EE.UU. que pesa exactamente 113.5g (media cup).',
        },
      ],
    },
    {
      type: 'tip',
      title: 'El truco de la Cuchara',
      html: 'Si no tienes báscula y DEBES usar cups, llena la taza a cucharadas sin apretar y nivela con un cuchillo. Es mucho más preciso que hundir la taza.',
    },
    {
      type: 'paragraph',
      html: 'Usar un conversor profesional transforma la frustración de las recetas extranjeras en el éxito de un horneado perfecto.',
    },
  ],
  faq: [
    {
      question: '¿Cuál es la diferencia entre 1 cup y 250ml?',
      answer: '1 cup estadounidense = 236.588ml, no 250ml. Para propósitos prácticos, usamos 240ml. Aunque parece pequeña, esta diferencia de 4% puede afectar en recetas sensibles como macarons o mousses.',
    },
    {
      question: '¿Por qué la harina no siempre pesa lo mismo?',
      answer: 'Porque la harina se compacta con el tiempo y el transporte. Una harina recién tamizada pesa menos que una que ha estado en la despensa. Por eso, los panaderos profesionales siempre pesan, nunca miden volumen.',
    },
    {
      question: '¿Cuál es la diferencia entre Tbsp y tsp?',
      answer: '1 Tablespoon (Tbsp) = 15ml. 1 Teaspoon (tsp) = 5ml. Una cucharada es 3 veces una cucharita. En recetas de repostería, los errores con especias (que se miden en tsp) son comunes.',
    },
    {
      question: '¿Es lo mismo una cup US que una cup imperial?',
      answer: 'No. 1 US cup = 236ml. 1 Imperial cup (UK) = 284ml. Una diferencia del 20%. La mayoría de blogs estadounidenses usan US cups. Si la receta no especifica, asume US.',
    },
    {
      question: '¿A qué temperatura corresponde el "gas 4" del horno?',
      answer: 'Gas 4 = 180°C = 350°F. Es la escala británica. En repostería española, buscamos el número equivalente en tu horno: algunos usan gas, otros electrónico.',
    },
  ],
  bibliography: [
    {
      name: 'King Arthur Baking: Ingredient Weight Chart',
      url: 'https://www.kingarthurbaking.com/learn/ingredient-weight-chart',
    },
    {
      name: 'Culinary Institute of America: Conversions and Equivalents',
      url: 'https://www.ciachef.edu/',
    },
  ],
  howTo: [
    {
      name: 'Selecciona el tipo de conversión',
      text: 'Elige entre Cups a Gramos, Tablespoons/Teaspoons a Gramos, o Fahrenheit a Celsius.',
    },
    {
      name: 'Escoge el ingrediente',
      text: 'Cada alimento tiene una densidad diferente. La harina, azúcar, mantequilla: todos pesan distinto.',
    },
    {
      name: 'Ingresa la cantidad',
      text: 'Escribe el número de cups, cucharas o grados. El conversor calcula el equivalente al instante.',
    },
    {
      name: 'Ajusta tu receta',
      text: 'Con la conversión exacta, ahora puedes seguir la receta estadounidense con precisión profesional.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
