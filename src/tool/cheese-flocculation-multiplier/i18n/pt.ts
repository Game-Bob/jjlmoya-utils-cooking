import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calculadora Multiplicador de Floculacao do Queijo';
const description = 'Encontre o momento exato para cortar a coalhada na fabricacao artesanal de queijo. Use o metodo do multiplicador de floculacao para calcular o tempo de coagulacao, controlar a umidade e melhorar o rendimento do queijo com nossa calculadora gratuita.';
const faq = [
  {
    question: 'O que e o metodo de floculacao na fabricacao de queijo?',
    answer: 'O metodo de floculacao e uma tecnica usada para determinar o momento preciso para cortar a coalhada. Ele mede o tempo desde a adicao do coalho ate o primeiro sinal de gelificacao (floculacao) e multiplica esse tempo por um fator especifico dependendo do estilo de queijo.'
  },
  {
    question: 'Como detectar o ponto de floculacao?',
    answer: 'A maneira mais comum e o metodo da tigela. Coloque uma tigela pequena, esterilizada e leve de plastico na superficie do leite apos adicionar o coalho. Toque ou gire suavemente a cada minuto. Inicialmente, ela gira livremente. O momento em que a tigela para de girar ou resiste ao movimento porque o leite comecou a gelificar e o ponto de floculacao.'
  },
  {
    question: 'Por que o momento de cortar a coalhada e tao critico?',
    answer: 'Cortar a coalhada no momento correto controla a sinerese (perda de umidade). Cortar cedo demais resulta em coalhada fragil, perda de gordura e baixo rendimento. Cortar tarde demais produz uma coalhada dura que retem umidade em excesso ou nao drena corretamente, levando a um queijo azedo e superacidificado.'
  },
  {
    question: 'O que e um multiplicador de floculacao?',
    answer: 'Um multiplicador e um fator numerico aplicado ao tempo de floculacao primario para calcular o tempo total de coagulacao antes do corte. Os multiplicadores padrao variam de 2.0x (queijos secos como Parmesan) a 5.0x ou 6.0x (queijos umidos como Camembert).'
  },
  {
    question: 'Como a temperatura e a forca do coalho afetam a floculacao?',
    answer: 'Temperaturas mais altas e coalho mais forte aceleram a floculacao, o que significa que o leite gelifica mais rapido. No entanto, como o tempo total de corte e diretamente proporcional ao tempo de floculacao, o metodo do multiplicador compensa automaticamente essas mudancas, garantindo propriedades consistentes da coalhada.'
  }
];

const howTo = [
  {
    name: 'Adicionar o coalho e iniciar o cronometro',
    text: 'Misture bem o coalho e inicie imediatamente o cronometro da Fase 1 na calculadora.'
  },
  {
    name: 'Realizar o teste da tigela',
    text: 'Coloque uma tigela de plastico leve sobre a superficie do leite e teste a resistencia regularmente.'
  },
  {
    name: 'Marcar o ponto de floculacao',
    text: 'No momento em que a tigela resistir ao giro ou toque, clique no botao de parada para registrar o tempo de floculacao.'
  },
  {
    name: 'Selecionar o tipo de queijo ou multiplicador',
    text: 'Escolha um estilo de queijo do banco de dados ou insira um multiplicador personalizado. O app calcula o tempo total e inicia a contagem regressiva para o corte.'
  },
  {
    name: 'Cortar a coalhada no sinal',
    text: 'Quando o cronometro chegar a zero, a coalhada atingiu a tensao otima. Corte a coalhada em cubos conforme especificado em sua receita.'
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
  slug: 'calculadora-multiplicador-floculacao-queijo',
  title,
  description: 'Encontre o momento exato para cortar a coalhada na fabricacao artesanal de queijo. Use o metodo do multiplicador de floculacao para calcular o tempo de coagulacao, controlar a umidade e melhorar o rendimento do queijo com nossa calculadora gratuita.',
  faqTitle: 'Perguntas Frequentes',
  ui: {
    title: 'Multiplicador de Floculacao do Queijo',
    subtitle: 'Encontre a janela perfeita de corte da coalhada baseada no comportamento real de gelificacao',
    flocculationLabel: 'Tempo de Floculacao Primario (minutos:segundos)',
    multiplierLabel: 'Multiplicador de Floculacao',
    cheeseTypeLabel: 'Predefinicao de Estilo de Queijo',
    totalCoagulationLabel: 'Tempo Total de Coagulacao',
    timeRemainingLabel: 'Tempo Restante ate o Corte',
    flocculationTimeLabel: 'Tempo de Floculacao',
    moistureLabel: 'Retencao de Umidade Esperada da Coalhada',
    customOption: 'Multiplicador Personalizado',
    startTimer: 'Iniciar Cronometro do Coalho',
    markFlocculation: 'Marcar Floculacao',
    resetTimer: 'Reiniciar Cronometro',
    warningTitle: 'Aviso de Qualidade do Coalho',
    warningText: 'O tempo de floculacao registrado e excepcionalmente curto. Isso pode indicar uma dose excessiva de coalho ou configuracoes de temperatura incorretas, o que pode causar textura borrachuda ou sabores amargos.',
    phase1Title: 'Fase 1: Coalhada e Floculacao',
    phase2Title: 'Fase 2: Contagem Regressiva de Coagulacao',
    phaseComplete: 'A coalhada esta pronta para cortar!',
    statusWaiting: 'Misturando o coalho...',
    statusFlocculated: 'Floculacao detectada',
    statusCoagulating: 'Coagulando...',
    statusReady: 'Pronta para Cortar',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Quando cortar a coalhada: O metodo do multiplicador de floculacao para queijo perfeito em cada lote',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Se voce ja se perguntou <strong>"quando devo cortar a coalhada?"</strong> ou <strong>"como saber se a coalhada esta pronta?"</strong>, a resposta esta no metodo do multiplicador de floculacao. Diferente da fabricacao industrial de queijo que depende de temporizadores fixos, os queijeiros artesanais medem o momento em que o leite comeca a gelificar (o ponto de floculacao) e multiplicam esse tempo por um fator especifico do estilo. Isso captura todas as variaveis - acidez do leite, nivel de calcio, temperatura, forca do coalho - em uma unica medicao. Nossa <strong>calculadora de multiplicador de floculacao do queijo</strong> faz a matematica para que voce possa cortar no momento perfeito, toda vez.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2.0x', label: 'Queijos Duros', icon: 'mdi:cheese' },
        { value: '3.0x', label: 'Queijos Semiduros', icon: 'mdi:cheese' },
        { value: '5.0x', label: 'Queijos Macios', icon: 'mdi:cheese' },
        { value: '10-15m', label: 'Floculacao Tipica', icon: 'mdi:timer-outline' }
      ]
    },
    {
      type: 'title',
      text: 'Problemas comuns na fabricacao de queijo resolvidos pelo metodo de floculacao',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Firmeza inconsistente da coalhada:</strong> Temporizadores fixos nao podem considerar variacoes de lote no leite. O metodo de floculacao se adapta a quimica real do seu leite.',
        '<strong>Baixo rendimento de queijo:</strong> Cortar cedo ou tarde demais causa perda de gordura e proteina. O metodo do multiplicador visa a janela exata para retencao otima.',
        '<strong>Teor de umidade incorreto:</strong> Queijos duros precisam de coalhada seca; queijos macios precisam de coalhada umida. Diferentes multiplicadores (2.0x a 6.0x) controlam diretamente a sinerese.',
        '<strong>Atividade variavel do coalho:</strong> A forca do coalho muda ao longo do tempo e entre marcas. A medicao do tempo de floculacao captura a atividade real no seu tanque agora.'
      ]
    },
    {
      type: 'title',
      text: 'Como realizar o teste da tigela passo a passo',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'O teste da tigela e a maneira mais simples de detectar a floculacao sem equipamento especial. Apos adicionar o coalho e misturar bem, coloque uma tigela pequena de plastico esterilizada ou uma tampa de garrafa sobre a superficie do leite. A cada 30 a 60 segundos, toque ou gire suavemente. Enquanto o leite ainda esta liquido, a tigela se move livremente. No momento em que ela resistir ao movimento - esse e o seu <strong>ponto de floculacao</strong>. Registre esse tempo e insira-o na calculadora acima.'
    },
    {
      type: 'tip',
      title: 'Use uma tampa de garrafa para maior sensibilidade',
      html: 'Uma tampa de garrafa de plastico leve e mais sensivel que uma tigela e fornece um ponto de parada mais claro. Esterilize-a em agua fervente por 2 minutos antes de usar e mantenha-a flutuando no leite desde o momento em que adicionar o coalho.'
    },
    {
      type: 'tip',
      title: 'Mantenha sua temperatura estavel',
      html: 'O tempo de floculacao e altamente dependente da temperatura. Uma queda de apenas 2C pode dobrar seu tempo de floculacao. Mantenha o leite a uma temperatura estavel (tipicamente 30-35C dependendo do estilo de queijo) durante toda a fase de coagulacao.'
    },
    {
      type: 'tip',
      title: 'Fique atento a floculacao muito rapida',
      html: 'Se a floculacao ocorrer em menos de 8 minutos (480 segundos), voce pode ter adicionado muito coalho ou a temperatura do leite esta muito alta. Isso pode causar textura borrachuda e sabores amargos. A calculadora vai alerta-lo se isso acontecer.'
    },
    {
      type: 'title',
      text: 'Referencia do multiplicador de floculacao por tipo de queijo',
      level: 2
    },
    {
      type: 'table',
      headers: ['Estilo de Queijo', 'Multiplicador', 'Umidade Esperada', 'Firmeza de Corte', 'Potencial de Maturacao'],
      rows: [
        ['Parmesan, Grana', '2.0x', 'Muito baixa', 'Muito firme', '12+ meses'],
        ['Mozzarella (fresca)', '2.0x', 'Muito alta', 'Macia / Esticavel', 'So fresca'],
        ['Suico, Alpino', '2.5x', 'Baixa', 'Firme', '6-12 meses'],
        ['Cheddar, Gouda', '3.0x', 'Media-baixa', 'Firme / Elastic', '3-12 meses'],
        ['Queijo Azul', '3.5x - 4.0x', 'Media', 'Tenra', '2-6 meses'],
        ['Camembert, Brie', '5.0x', 'Alta', 'Muito tenra', '3-8 semanas'],
        ['Fresco / Chevre', '5.0x - 6.0x', 'Muito alta', 'Delicada', 'Fresco - 2 semanas']
      ]
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Multiplicador Baixo 2.0x to 2.5x',
          icon: 'mdi:cheese',
          description: 'Usado para variedades de queijo duro e seco que requerem baixa retencao de umidade.',
          highlight: false,
          points: ['Mozzarella e Parmesan: 2.0x', 'Estilos alpinos: 2.5x', 'Drenagem rapida do soro', 'Produz coalhada densa e maturavel']
        },
        {
          title: 'Multiplicador Medio 3.0x to 4.0x',
          icon: 'mdi:cheese',
          description: 'Faixa padrao para queijos semiduros equilibrando umidade e acidez.',
          highlight: true,
          points: ['Cheddar e Gouda: 3.0x', 'Queijos azuis: 3.5x a 4.0x', 'Expulsao equilibrada do soro', 'Potencial de cura flexivel']
        },
        {
          title: 'Multiplicador Alto 5.0x to 6.0x',
          icon: 'mdi:cheese',
          description: 'Usado para queijos macios, cremosos e de alta umidade.',
          highlight: false,
          points: ['Camembert e Brie: 5.0x', 'Queijos frescos e de casca florida', 'Alta retencao de umidade', 'Desenvolvimento de pasta delicada e cremosa']
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Solucao de problemas: 3 sinais de que sua coalhada nao esta coagulando direito',
      html: '<strong>Floculacao em menos de 6 minutos:</strong> Muito coalho ou leite muito quente. Reduza o coalho em 25% no proximo lote. <strong>A floculacao leva mais de 25 minutos:</strong> O coalho pode estar vencido, o leite muito frio ou o teor de calcio muito baixo. Adicione cloreto de calcio. <strong>A coalhada esta viscosa ou quebradica na hora do corte:</strong> O multiplicador pode estar muito alto ou muito baixo para o seu estilo de queijo. Ajuste em incrementos de 0.5x.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Queijos Duros (Parmesan, Alpino)',
      html: 'Use o <strong>multiplicador 2.0x - 2.5x</strong>. Corte a coalhada mais cedo para maxima expulsao de soro. Essas coalhadas sao cortadas quando o gel ainda esta relativamente fragil, produzindo uma coalhada densa e seca ideal para longa maturacao. A calculadora mostrara um tempo total de coagulacao mais curto.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Queijos Semiduros (Cheddar, Gouda)',
      html: 'Use o <strong>multiplicador 3.0x</strong>. A faixa padrao para a maioria da fabricacao artesanal de queijo. Equilibra a retencao de umidade com a drenagem do soro. A coalhada e elastica e se rompe limpiamente. A maioria das receitas de queijo se enquadra nesta categoria.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Queijos Macios (Camembert, Brie)',
      html: 'Use o <strong>multiplicador 5.0x - 6.0x</strong>. Permita que o gel se fortaleça significativamente antes de cortar. Isso retem a umidade dentro da coalhada, criando a textura cremosa e espalhavel caracteristica dos queijos de casca florida. Manuseie a coalhada delicadamente para evitar perder o soro retido.'
    },
    {
      type: 'title',
      text: 'Glossario da coalhada para fabricacao artesanal de queijo',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Ponto de Floculacao', definition: 'O momento no processo de fabricacao de queijo em que as proteinas do leite comecam a se aglomerar e formar um gel macio.' },
        { term: 'Coalho', definition: 'Um complexo de enzimas (principalmente quimosina) usado para coagular o leite, separando-o em solidos (coalhada) e liquido (soro).' },
        { term: 'Sinerese', definition: 'A extracao ou expulsao de um liquido de um gel, como o soro drenando da coalhada de queijo.' },
        { term: 'Tempo de Coagulacao', definition: 'A duracao total desde a adicao do coalho ate que a coalhada esteja pronta para ser cortada.' }
      ]
    },
    {
      type: 'summary',
      title: 'Principais conclusoes para o corte perfeito da coalhada',
      items: [
        'Meça o tempo de floculacao com precisao usando o teste da tigela. Insira-o na calculadora acima.',
        'Selecione o multiplicador que corresponde ao seu estilo de queijo: 2.0x para duros, 3.0x para semiduros, 5.0x para macios.',
        'Mantenha a temperatura do leite estavel durante a coagulacao. Mesmo uma mudanca de 2C altera o tempo de floculacao significativamente.',
        'Se a floculacao acontecer em menos de 8 minutos, reduza o coalho na proxima vez. Se ultrapassar 25 minutos, verifique o frescor do coalho.',
        'A calculadora lida com a matematica para que voce possa se concentrar na tecnica e na consistencia.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
