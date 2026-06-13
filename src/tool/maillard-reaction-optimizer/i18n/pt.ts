import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Otimizador da Reação de Maillard: Calculadora de Douramento por pH e Temperatura';
const description = 'Calcule exatamente quanto bicarbonato de sódio adicionar por quilo de alimento para acelerar a reação de Maillard. Evite sabores a sabão respeitando os limites seguros de alcalinidade.';

const faq = [
  {
    question: 'O que é a reação de Maillard e por que é importante na culinária?',
    answer: 'A reação de Maillard é uma reação química entre aminoácidos e açúcares redutores que dá ao alimento dourado o seu sabor característico. É responsável pela crosta do bife selado, pela cor dourada do pão, pelo café torrado e pelas cebolas caramelizadas. A reação ocorre mais rapidamente entre 140°C e 165°C.',
  },
  {
    question: 'Como o bicarbonato de sódio acelera o douramento?',
    answer: 'O bicarbonato de sódio eleva o pH da superfície do alimento, tornando-a mais alcalina. A reação de Maillard ocorre significativamente mais rápido em ambientes alcalinos. Elevar o pH de 6 para 8 pode duplicar ou triplicar a velocidade de douramento. No entanto, bicarbonato em excesso produz um sabor residual metálico e a sabão  -  é por isso que esta calculadora impõe limites seguros.',
  },
  {
    question: 'Qual é a quantidade máxima segura de bicarbonato de sódio por quilograma de alimento?',
    answer: 'O limite seguro geral é de 1,5 gramas de bicarbonato de sódio por quilograma de alimento. Acima deste valor, o risco de sabores desagradáveis (metálicos, a sabão ou químicos) aumenta drasticamente. A nossa quantidade recomendada é metade do máximo, o que proporciona uma aceleração significativa do douramento com risco mínimo para o sabor.',
  },
  {
    question: 'O que acontece se a temperatura for demasiado baixa para a reação de Maillard?',
    answer: 'Abaixo de 110°C, ocorre principalmente evaporação da água e nenhum douramento de Maillard significativo. Entre 110°C e 140°C, o douramento ocorre lentamente. A faixa de temperatura ideal é de 140°C a 180°C. Acima de 180°C, começa a pirólise  -  onde o alimento queima e produz compostos amargos e acres em vez dos desejados sabores de douramento.',
  },
];

const howTo = [
  {
    name: 'Pese o alimento',
    text: 'Insira o peso total em gramas do alimento que pretende dourar.',
  },
  {
    name: 'Defina a temperatura de cozedura',
    text: 'Insira a temperatura da superfície de cozedura ou do forno. A zona ideal de Maillard é 140-180°C.',
  },
  {
    name: 'Ajuste a quantidade de bicarbonato',
    text: 'O controlo deslizante começa a metade do máximo seguro. Aumente com cuidado  -  a calculadora avisará antes de atingir a zona de perigo.',
  },
  {
    name: 'Leia o pH estimado e o multiplicador de velocidade',
    text: 'A calculadora mostra quanto mais rápido o douramento ocorre no nível de pH escolhido em comparação com o pH padrão de 6.',
  },
  {
    name: 'Verifique o nível de risco para o sabor',
    text: 'O indicador de sabor mostra seguro, atenção ou perigo com base no pH superficial estimado. Mantenha-se na zona verde para obter os melhores resultados.',
  },
  {
    name: 'Aplique o bicarbonato uniformemente',
    text: 'Dissolva a quantidade recomendada numa pequena quantidade de água e pincele ou envolva o alimento antes de cozinhar. Uma distribuição irregular causa um douramento desigual.',
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
  slug: 'otimizador-reacao-maillard',
  title: 'Otimizador da Reação de Maillard',
  description: 'Calcule exatamente quanto bicarbonato de sódio adicionar por quilo de alimento para acelerar a reação de Maillard. Evite sabores a sabão respeitando os limites seguros de alcalinidade.',
  faqTitle: 'Perguntas Frequentes',
  ui: {
    title: 'Otimizador da Reação de Maillard',
    headerLabel: 'Química do Douramento',
    flavorSafe: 'pH Seguro',
    flavorCaution: 'Atenção: Alcalino',
    flavorDanger: 'Perigo: Risco de Sabão',
    unitLabel: 'Unidades',
    metricUnit: 'Métrico',
    imperialUnit: 'Imperial',
    weightLabel: 'Peso do Alimento',
    weightUnit: 'g',
    weightOz: 'oz',
    tempLabel: 'Temperatura da Superfície',
    tempUnit: '°C',
    degreesF: '°F',
    tempLow: 'Lento: {min} - {max}',
    tempOpt: 'Ideal: {min} - {max}',
    tempHigh: 'Pirólise: >{min}',
    sodaLabel: 'Bicarbonato',
    sodaUnit: 'g',
    sodaOz: 'oz',
    sodaNote: 'Metade do máximo seguro, impulso suave de douramento',
    sodaCautionNote: 'Aproximando-se do máximo, monitorize o sabor com atenção',
    sodaDangerNote: 'Excede o máximo seguro, risco de sabor a sabão',
    sodaRecommended: 'Bicarbonato Recomendado',
    sodaMax: 'Máximo Seguro',
    speedLabel: 'Velocidade de Reação',
    browningLabel: 'Progressão do Douramento',
    rawLabel: 'Cru',
    goldenLabel: 'Dourado',
    burntLabel: 'Queimado',
    phEstimated: 'pH Estimado da Superfície',
    timeSaved: 'Tempo Poupado',
    errorTempTooLow: 'A temperatura está abaixo de 110°C. A reação de Maillard requer pelo menos 110°C para começar. Abaixo deste limite, ocorre apenas evaporação da água sem douramento significativo.',
    errorWeightTooLow: 'O peso do alimento deve ser superior a 0g.',
    footerTemplate: '<span class="mr-footer-stat"><strong>{weight}</strong><small>{wunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">a <strong>{temp}</strong><small>{tunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{soda}</strong><small>{sunit}</small> bicarbonato</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">x<strong>{multiplier}</strong> velocidade</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{timeSaved}</strong>% poupado</span>',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Otimizador da Reação de Maillard: Domine a Ciência do Douramento',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A reação de Maillard é o Santo Graal da cozinha salgada. Cria os sabores profundos e complexos do bife selado, da crosta dourada do pão e das cebolas caramelizadas. Batizada em homenagem ao químico francês Louis-Camille Maillard, esta reação entre aminoácidos e açúcares redutores produz centenas de compostos de sabor. Ao manipular o pH com bicarbonato de sódio, pode <strong>duplicar ou triplicar</strong> a velocidade de douramento sem queimar. Esta calculadora mostra exatamente quanto usar e avisa antes de entrar no território do sabão.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '~140°C', label: 'Temperatura de ativação de Maillard', icon: 'mdi:thermometer' },
        { value: '2-3x', label: 'Aumento de velocidade a pH 8', icon: 'mdi:speedometer' },
        { value: '1,5 g/kg', label: 'Máximo seguro de bicarbonato', icon: 'mdi:scale' },
        { value: 'pH 8,5', label: 'Limiar do sabor a sabão', icon: 'mdi:alert-circle' },
      ],
    },
    {
      type: 'title',
      text: 'Tabela de Dosagem de Bicarbonato por Peso do Alimento',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Use esta tabela de referência para determinar rapidamente as quantidades recomendadas e máximas de bicarbonato para pesos comuns de alimentos. A quantidade recomendada é <strong>metade do máximo seguro</strong>, proporcionando uma aceleração notável do douramento com risco mínimo para o sabor.',
    },
    {
      type: 'table',
      headers: ['Peso do Alimento', 'Recomendado (g)', 'Máximo Seguro (g)', 'pH Estimado', 'Aumento de Velocidade'],
      rows: [
        ['250g (1 cebola)', '0,19 g', '0,38 g', '6,5', 'x1,2'],
        ['500g (2 cebolas)', '0,38 g', '0,75 g', '6,5', 'x1,2'],
        ['750g (3 cebolas)', '0,56 g', '1,13 g', '6,5', 'x1,2'],
        ['1000g (1 kg)', '0,75 g', '1,50 g', '7,0', 'x1,6'],
        ['1500g', '1,13 g', '2,25 g', '7,0', 'x1,6'],
        ['2000g', '1,50 g', '3,00 g', '7,0', 'x2,0'],
        ['3000g', '2,25 g', '4,50 g', '7,0', 'x2,0'],
        ['5000g', '3,75 g', '7,50 g', '7,0', 'x2,0'],
      ],
    },
    {
      type: 'title',
      text: 'Compreender o pH da Superfície e o Seu Efeito no Douramento',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'pH Neutro (6,0)',
          icon: 'mdi:water',
          description: 'O pH natural da maioria das carnes e vegetais crus. A reação de Maillard ocorre à velocidade base.',
          highlight: false,
          points: ['Velocidade de reação: x1,0 (base)', 'Totalmente natural, sem aditivos', 'Ideal para: puristas, métodos tradicionais', 'Douramento mais lento, mais tempo para controlar o ponto'],
        },
        {
          title: 'Ligeiramente Alcalino (pH 7,0 a 7,5)',
          icon: 'mdi:flask-round-bottom',
          description: 'Obtido com a quantidade recomendada de bicarbonato. Aumento notável de velocidade sem impacto no sabor.',
          highlight: true,
          points: ['Velocidade de reação: x1,5-2,0', '½ colher de chá por kg (aprox. 0,75g)', 'Ideal para: cebolas caramelizadas, legumes assados', 'O ponto ideal para a maioria dos cozinheiros caseiros'],
        },
        {
          title: 'Altamente Alcalino (pH 8,0 a 8,5)',
          icon: 'mdi:alert',
          description: 'Alcalinidade prática máxima antes de surgirem defeitos de sabor. Duplica a velocidade de douramento mas requer monitorização cuidadosa.',
          highlight: false,
          points: ['Velocidade de reação: x2,0-3,0', '1 colher de chá por kg (aprox. 1,5g)', 'Ideal para: crostas escuras de pretzel, caramelização extrema', 'Prove antes de servir  -  no limite do sabão'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Zonas de Temperatura e o Que Significam para o Douramento',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A temperatura é a outra variável crítica para a reação de Maillard. Cada zona produz resultados fundamentalmente diferentes. Compreender estes limites ajuda-o a escolher o nível de calor certo para o seu objetivo culinário.',
    },
    {
      type: 'table',
      headers: ['Zona', 'Faixa de Temp.', 'O Que Acontece', 'Ideal Para'],
      rows: [
        ['Evaporação', 'Abaixo de 110°C', 'A água evapora, sem douramento', 'Sous vide, escalfar, cozer a vapor'],
        ['Douramento Lento', '110-139°C', 'Maillard começa lentamente, desenvolvimento suave de cor', 'Tomate assado lentamente, desidratação a baixa temperatura'],
        ['Zona Ideal', '140-180°C', 'Velocidade máxima de douramento sem queimar', 'Selar, assar, fritar, cozer no forno'],
        ['Pirólise', 'Acima de 180°C', 'Começa a queima, formam-se compostos amargos e acres', 'Chamuscar rápido para acentuar sabor (usar com moderação)'],
      ],
    },
    {
      type: 'title',
      text: 'Erros Comuns de Maillard e Como Corrigi-los',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Adicionar bicarbonato em excesso',
      html: 'Com bicarbonato, mais não é melhor. Exceder 1,5g por quilograma de alimento introduz um sabor residual metálico, a sabão ou químico. Os compostos de sabor produzidos por alcalinidade excessiva não são os mesmos das notas ricas e saborosas do douramento de Maillard correto. <strong>Respeite a quantidade recomendada pela calculadora.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Cozinhar a temperatura demasiado baixa',
      html: 'Abaixo de 110°C, está essencialmente a cozer a vapor ou a desidratar o alimento  -  não a dourá-lo. A reação de Maillard tem uma temperatura mínima de ativação. Se quer sabores profundos e complexos, <strong>a superfície do alimento deve atingir pelo menos 140°C.</strong> Use um método de cozedura a alta temperatura como selar, gratinar ou assar acima de 180°C de temperatura do forno.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ignorar a humidade',
      html: 'A água é inimiga da reação de Maillard. Superfícies molhadas não podem ultrapassar os 100°C até a água evaporar. <strong>Seque sempre completamente o alimento</strong> antes de selar. O bicarbonato ajuda porque também acelera a evaporação da água superficial ao quebrar as paredes celulares, mas não consegue compensar alimentos visivelmente molhados. Superfícies secas = melhor douramento.',
    },
    {
      type: 'title',
      text: 'Dicas Profissionais para um Douramento Perfeito',
      level: 3,
    },
    {
      type: 'tip',
      title: 'A Técnica da Pasta de Bicarbonato',
      html: 'Nunca polvilhe bicarbonato seco diretamente sobre o alimento  -  não se distribuirá uniformemente. Dissolva a quantidade medida em 1-2 colheres de sopa de água morna e depois pincele ou envolva o alimento com a pasta. Isto garante alcalinidade uniforme em toda a superfície para um douramento homogéneo e consistente.',
    },
    {
      type: 'tip',
      title: 'Combine Bicarbonato com Cura Seca',
      html: 'Bicarbonato e sal funcionam em sinergia. Cure a seco a carne com sal durante 1-24 horas antes de cozinhar, depois aplique a pasta de bicarbonato imediatamente antes de ir ao lume. O sal extrai proteínas que participam na reação de Maillard, enquanto o bicarbonato a acelera. Esta combinação produz a crosta mais profunda e rica.',
    },
    {
      type: 'tip',
      title: 'Truque para Caramelizar Cebolas',
      html: 'Uma pitada de bicarbonato (0,3g por cebola grande) pode reduzir o tempo de caramelização de 45 para 20 minutos. O ambiente alcalino quebra mais rapidamente as paredes celulares da cebola, libertando açúcares e aminoácidos que alimentam a reação de Maillard. Mas seja preciso  -  bicarbonato em excesso transforma as cebolas em papa com sabor residual químico.',
    },
    {
      type: 'title',
      text: 'Glossário de Termos Essenciais sobre Douramento',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Reação de Maillard', definition: 'Uma reação química não enzimática entre aminoácidos e açúcares redutores que cria a cor acastanhada e os sabores complexos e saborosos nos alimentos cozinhados. Ocorre acima de 110°C e é distinta da caramelização.' },
        { term: 'Pirólise', definition: 'A decomposição térmica de material orgânico a altas temperaturas (acima de 180°C). Ao contrário do douramento de Maillard, a pirólise produz compostos amargos, acres e por vezes cancerígenos. É o que acontece quando o alimento queima.' },
        { term: 'pH', definition: 'Uma escala de 0 a 14 que mede a acidez (baixo) ou alcalinidade (alto). Neutro é 7. A maioria dos alimentos crus tem pH entre 5,5 e 6,5. O bicarbonato eleva o pH para níveis alcalinos, acelerando a reação de Maillard.' },
        { term: 'Bicarbonato de Sódio', definition: 'Bicarbonato  -  um pó cristalino branco (NaHCO₃) que atua como uma base fraca. Na culinária, eleva o pH da superfície, acelera o douramento, torna a carne mais tenra e ajuda os vegetais a manter a cor durante a cozedura.' },
        { term: 'Alcalinidade', definition: 'A capacidade de uma solução para neutralizar ácidos. No contexto da aceleração de Maillard, alcalinidade refere-se a valores de pH acima de 7,0. Alcalinidade em excesso produz sabores amargos e a sabão.' },
        { term: 'Multiplicador de Velocidade de Reação', definition: 'Quantas vezes mais rápido a reação de Maillard ocorre em comparação com a base (pH 6). Um multiplicador de x2,0 significa que o douramento acontece duas vezes mais rápido, reduzindo efetivamente para metade o tempo de cozedura necessário para o mesmo desenvolvimento de cor.' },
        { term: 'pH da Superfície', definition: 'O pH exatamente na superfície do alimento onde ocorre a reação de Maillard, não o pH interno. O bicarbonato afeta principalmente o pH da superfície, uma vez que não penetra profundamente no alimento durante tempos de cozedura curtos.' },
      ],
    },
    {
      type: 'title',
      text: 'Referência Rápida: Bicarbonato para Alimentos Comuns',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Quantidades recomendadas de bicarbonato para a cozinha do dia a dia',
      items: [
        'Cebolas caramelizadas (1 grande): 0,3g de bicarbonato  -  reduz o tempo de 45 para ~20 minutos',
        'Batatas assadas (500g): 0,4g de bicarbonato  -  exterior mais crocante e dourado',
        'Bife na frigideira (250g): 0,2g de bicarbonato  -  crosta mais escura em menos tempo',
        'Asas de frango (1kg): 0,75g de bicarbonato  -  pele mais crocante, douramento mais rápido',
        'Massa de pretzel (500g farinha): 1,5g de bicarbonato  -  crosta castanha escura após banho alcalino',
        'Legumes assados mistos (1kg): 0,75g de bicarbonato  -  caramelização mais uniforme',
      ],
    },
    {
      type: 'paragraph',
      html: 'Cada alimento tem um nível de alcalinidade ideal diferente com base no seu pH natural e teor de humidade. Esta calculadora elimina as suposições da equação  -  insira o peso exato do alimento e a temperatura, e ela dar-lhe-á a quantidade precisa de bicarbonato para um douramento perfeito sempre.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
