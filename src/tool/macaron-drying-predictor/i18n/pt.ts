import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Predictor de Secagem de Conchas de Macaron: Calculadora de Tempo de Secagem por Umidade e Temperatura';
const description = 'Calcule exatamente quanto tempo as conchas de macaron precisam para secar com base na umidade, temperatura e tamanho. Evite conchas rachadas e garanta um pe perfeito todas as vezes.';

const faq = [
  {
    question: 'Por que as conchas de macaron precisam secar antes de assar?',
    answer: 'A secagem forma uma pelicula fina na superficie da concha. Essa pelicula e essencial porque retem o vapor durante a cozedura, forcando-o a escapar para baixo atraves do pe em vez de rachar o topo. Sem uma secagem adequada, os macarons racham, nao formam o pe ou assam de forma irregular.',
  },
  {
    question: 'Como a umidade afeta o tempo de secagem dos macarons?',
    answer: 'A umidade e o fator mais critico. Com umidade elevada (acima de 60%), o ar ja esta saturado de umidade, retardando drasticamente a evaporacao da superficie da concha. O tempo de secagem pode duplicar ou triplicar em comparacao com um dia seco. Em condicoes muito secas (abaixo de 30%), as conchas podem secar demais e desenvolver uma pelicula espessa que impede o crescimento adequado.',
  },
  {
    question: 'Qual e a temperatura ideal para secar as conchas de macaron?',
    answer: 'A temperatura ambiente entre 20 Â°C e 25 Â°C e ideal. O ar mais quente retem mais umidade e acelera a secagem, mas se estiver muito quente (acima de 30 Â°C) as conchas podem secar de forma irregular, com exterior crocante e interior humido. Temperaturas abaixo de 18 Â°C retardam significativamente a secagem.',
  },
  {
    question: 'Como o tamanho da concha afeta o tempo de secagem?',
    answer: 'Conchas maiores tem mais area de superficie e volume, exigindo uma secagem proporcionalmente mais longa. Um mini macaron de 2 cm pode secar em 15 minutos, enquanto um macaron grande de 5 cm pode levar mais de uma hora. A relacao nao e linear: duplicar o diametro praticamente triplica o tempo de secagem devido a relacao superficie-volume.',
  },
];

const howTo = [
  {
    name: 'Modele as conchas de macaron',
    text: 'Modele discos de tamanho uniforme sobre papel manteiga ou um tapete de silicone. Use um gabarito para manter o tamanho consistente.',
  },
  {
    name: 'Meca o seu ambiente',
    text: 'Verifique a umidade e a temperatura da sua cozinha usando um higrometro e um termometro.',
  },
  {
    name: 'Insira os valores na calculadora',
    text: 'Insira a umidade, a temperatura e o diametro da concha para obter o tempo estimado de secagem.',
  },
  {
    name: 'Teste a pelicula',
    text: 'Apos o tempo indicado, toque levemente a superficie de uma concha. Deve estar seca e opaca, nao pegajosa. Se grudar no dedo, deixe secar mais um pouco.',
  },
  {
    name: 'Asse quando estiver pronto',
    text: 'Assim que a pelicula estiver formada, asse imediatamente. Nao deixe as conchas descansarem muito apos a secagem, ou podem secar demais e rachar.',
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
  slug: 'predictor-secagem-macaron',
  title: 'Predictor de Secagem de Conchas de Macaron',
  description: 'Calcule exatamente quanto tempo as conchas de macaron precisam para secar com base na umidade, temperatura e tamanho. Evite conchas rachadas e garanta um pe perfeito todas as vezes.',
  faqTitle: 'Perguntas Frequentes',
  ui: {
    humidityLabel: 'Umidade Ambiente',
    humidityUnit: '%',
    tempLabel: 'Temperatura Ambiente',
    tempUnit: 'Â°C',
    sizeLabel: 'Diametro da Concha',
    sizeUnit: 'cm',
    dryingTimeLabel: 'Tempo Estimado de Secagem',
    minutesUnit: 'min',
    readinessLabel: 'Estado da Superficie',
    skinStatusReady: 'Pronto para Assar',
    skinStatusForming: 'Pelicula em Formacao',
    skinStatusSticky: 'Ainda Pegajoso',
    skinStatusOverDry: 'Seco Demais',
    humidityTagHigh: 'Umidade alta',
    humidityTagNormal: 'Umidade normal',
    humidityTagLow: 'Umidade baixa',
    humidityDescHigh: 'Dia muito umido. A secagem vai demorar muito mais. Se possivel, use um desumidificador ou um ambiente com ar condicionado.',
    humidityDescNormal: 'Umidade moderada. A secagem deve prosseguir em ritmo normal, com boa formacao da pelicula.',
    humidityDescLow: 'Ar muito seco. As conchas podem secar rapido demais e ha risco de secagem excessiva. Monitore de perto e reduza o tempo de secagem.',
    tempTagHot: 'Sala quente',
    tempTagIdeal: 'Temperatura ideal',
    tempTagCool: 'Sala fria',
    sizeTagMini: 'Mini',
    sizeTagStandard: 'Padrao',
    sizeTagLarge: 'Grande',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'A Ciencia da Secagem das Conchas de Macaron: Por Que a Pelicula Determina o Sucesso',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O macaron e um dos doces tecnicamente mais exigentes da patisserie francesa. A sua cupula lisa caracteristica e a base franzida, conhecida como "pe" ou "pied", dependem inteiramente de uma etapa critica: a secagem das conchas modeladas antes de assar. Este periodo de repouso permite que se forme uma fina pelicula proteica na superficie de cada concha. Durante a cozedura, essa pelicula retem o vapor em expansao dentro da concha, forcando-o a sair para baixo atraves da base, o que levanta a concha e cria o tao desejado pe. Sem secagem adequada, o vapor rompe o topo, causando rachaduras. Com secagem excessiva, a pelicula fica rigida demais e as conchas nao conseguem crescer corretamente.',
    },
    {
      type: 'title',
      text: 'A Umidade e Seu Papel Dominante na Cinetica de Secagem',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A umidade relativa e a variavel mais influente na secagem das conchas de macaron. Com 50% de umidade relativa, uma concha padrao de 3 cm geralmente precisa de 30-40 minutos para desenvolver uma pelicula adequada. Com 70% de umidade, esse tempo pode se estender para 60-90 minutos. Com 30% de umidade, a secagem pode se completar em apenas 15-20 minutos. A fisica por tras disso e simples: a taxa de evaporacao e proporcional ao deficit de pressao de vapor entre a superficie da concha e o ar ao redor. O ar umido tem um deficit menor, retardando a evaporacao. As patisseries profissionais controlam a umidade meticulosamente, muitas vezes mantendo salas dedicadas aos macarons com umidade relativa de 40-50%.',
    },
    {
      type: 'title',
      text: 'Tabela de Referencia de Tempos de Secagem por Umidade e Tamanho da Concha',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Umidade', '2 cm Mini', '3 cm Padrao', '4 cm Grande', '5 cm Extra Grande'],
      rows: [
        ['30% (Muito seco)', '10-15 min', '15-20 min', '25-30 min', '35-45 min'],
        ['40% (Seco)', '15-20 min', '20-30 min', '30-40 min', '45-60 min'],
        ['50% (Moderado)', '20-25 min', '30-40 min', '40-55 min', '55-75 min'],
        ['60% (Umido)', '25-35 min', '40-55 min', '55-75 min', '75-100 min'],
        ['70% (Muito umido)', '35-50 min', '55-75 min', '75-100 min', '100-130 min'],
        ['80% (Extremamente umido)', '50-70 min', '75-100 min', '100-140 min', '130-180 min'],
      ],
    },
    {
      type: 'title',
      text: 'O Papel da Temperatura na Taxa de Evaporacao',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A temperatura afeta a secagem atraves de dois mecanismos. Primeiro, o ar mais quente pode reter mais vapor de agua, aumentando a taxa potencial de evaporacao da superficie da concha. Segundo, a energia cinetica molecular aumenta com a temperatura, acelerando a velocidade com que as moleculas de agua escapam da fase liquida. No entanto, a temperatura tambem afeta a estabilidade do merengue. Acima de 28 Â°C, as proteinas da clara de ovo no merengue podem comecar a se desestabilizar, resultando em uma estrutura enfraquecida. A faixa ideal para secagem de macarons e de 20-25 Â°C. Abaixo de 18 Â°C, a taxa de evaporacao desacelera a ponto de a secagem se tornar impraticavel para conchas de tamanho padrao.',
    },
    {
      type: 'title',
      text: 'Tamanho da Concha e a Lei do Quadrado-Cubo na Secagem',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O diametro da concha tem um efeito nao linear no tempo de secagem devido a relacao superficie-volume. Um mini macaron de 2 cm tem aproximadamente 3,1 cmÂ² de area de superficie para 0,5 cmÂ³ de volume, resultando em uma relacao superficie-volume favoravel de cerca de 6:1. Um macaron grande de 5 cm tem cerca de 19,6 cmÂ² de superficie para 8,2 cmÂ³ de volume, uma relacao de apenas 2,4:1. Isso significa que conchas maiores tem proporcionalmente menos area de superficie pela qual a umidade pode escapar, aumentando drasticamente o tempo de secagem. A calculadora modela isso usando uma relacao de lei de potencia calibrada com dados empiricos de cozinhas profissionais de patisserie.',
    },
    {
      type: 'title',
      text: 'Resolvendo Falhas Comuns na Secagem de Macarons',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Conchas rachadas sem pe',
      html: 'A falha mais comum nos macarons. Quase sempre indica que as conchas nao secaram tempo suficiente antes de assar. A pelicula superficial estava muito fraca para conter o vapor em expansao, que rompeu o topo. <strong>Solucao: aumente o tempo de secagem em 10-15 minutos e teste a superficie com um leve toque da ponta do dedo antes de assar.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Pe torto ou inclinado',
      html: 'A causa e a secagem desigual. Se um lado da bandeja seca mais rapido que o outro, o pe crescera de forma irregular. Isso costuma acontecer quando as bandejas ficam perto de janelas, ventiladores ou fontes de calor. <strong>Solucao: gire as bandejas durante a secagem e garanta circulacao de ar uniforme ao redor de todas as conchas.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Conchas ocas apos assar',
      html: 'Conchas ocas podem resultar de secagem excessiva, que cria uma pelicula muito espessa e rigida. A concha nao consegue expandir corretamente durante a cozedura, deixando um espaco vazio no interior. <strong>Solucao: reduza o tempo de secagem e verifique a formacao da pelicula mais cedo. A superficie deve estar seca, mas ainda ceder ligeiramente ao toque suave.</strong>',
    },
    {
      type: 'title',
      text: 'Dicas Profissionais de Chefs de Patisserie',
      level: 3,
    },
    {
      type: 'tip',
      title: 'A Tecnica do Forno para Dias Umidos',
      html: 'Em dias extremamente umidos, chefs profissionais usam uma tecnica chamada "secagem no forno". Preaqueca o forno na temperatura mais baixa possivel (geralmente 50 Â°C), desligue-o e coloque os macarons modelados la dentro com a porta entreaberta por 5-10 minutos. Isso cria um microclima quente e de baixa umidade que acelera a formacao da pelicula sem comecar a assar as conchas.',
    },
    {
      type: 'tip',
      title: 'O Teste do Toque para uma Pelicula Perfeita',
      html: 'O teste definitivo para saber se os macarons estao prontos: toque levemente a superficie de uma concha com a ponta do dedo limpa e seca. Se a massa grudar no dedo, precisa de mais tempo. Se a superficie estiver seca e opaca e nao grudar, a pelicula se formou. Se a superficie estiver dura e crocante, sem ceder, as conchas secaram demais.',
    },
    {
      type: 'tip',
      title: 'Controle de Umidade sem Equipamento',
      html: 'Se voce nao tem um desumidificador, coloque uma tigela de arroz cru ou pacotinhos de silica gel perto dos macarons durante a secagem. Esses dessecantes absorvem a umidade ambiente, criando um microclima mais seco ao redor da bandeja. Em cozinhas profissionais sem controle climatico, esse truque simples pode reduzir o tempo de secagem em 30-40% em dias umidos.',
    },
    {
      type: 'title',
      text: 'O Fator do Envelhecimento das Claras de Ovo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Claras de ovo envelhecidas produzem merengues mais estaveis que secam de forma mais previsivel. As claras frescas contem mais agua e uma estrutura proteica menos elastica, resultando em merengues mais fracos que demoram mais para formar uma pelicula adequada. Receitas profissionais pedem claras envelhecidas por 24-72 horas em temperatura ambiente ou 3-5 dias na geladeira. As claras envelhecidas perdem aproximadamente 10-15% do seu conteudo de agua por evaporacao, concentrando as proteinas e melhorando a resistencia do merengue.',
    },
    {
      type: 'title',
      text: 'Referencia Rapida: Tempos de Secagem para Condicoes Comuns',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Tempos tipicos de secagem para conchas de macaron padrao de 3 cm',
      items: [
        'Cozinha climatizada (22 Â°C, 45% umidade): 25-30 minutos',
        'Dia de primavera, janelas abertas (20 Â°C, 55% umidade): 35-45 minutos',
        'Dia de verao, sem ar condicionado (28 Â°C, 70% umidade): 60-90 minutos  -  use a tecnica de secagem no forno',
        'Casa aquecida no inverno (21 Â°C, 30% umidade): 15-20 minutos  -  cuidado com a secagem excessiva',
        'Dia chuvoso (18 Â°C, 80% umidade): 75-100 minutos  -  considere seriamente usar desumidificador',
        'Cozinha profissional de patisserie (22 Â°C, 45% umidade, conveccao): 20-25 minutos',
      ],
    },
    {
      type: 'paragraph',
      html: 'Cada cozinha e um ambiente unico. Esta calculadora considera as tres variaveis criticas  -  umidade, temperatura e tamanho da concha  -  para lhe dar uma previsao personalizada do tempo de secagem. Insira suas condicoes e modele com confianca.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
