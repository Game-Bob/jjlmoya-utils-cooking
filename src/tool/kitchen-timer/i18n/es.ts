import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Temporizador de Cocina Múltiple";
const description = "Gestiona múltiples tiempos de cocción simultáneamente. Alarmas independientes, ideal para chefs y organización en la cocina (Mise en Place).";
const faq = [
		{
			question: '¿Cuántos temporizadores puedo crear?',
			answer:
				'Ilimitados. Añade tantos como necesites con el botón \'+\'. Ideal para cocinar varios platos simultáneamente: pasta hirviendo, salsa reduciéndose, carne reposando, y horno funcionando, todo a la vez.',
		},
		{
			question: '¿Por qué es importante el tiempo de reposo en carnes?',
			answer:
				'Cuando cortas carne recién salida del fuego, los jugos escapan al plato. Si reposas 5-10 minutos, las fibras se relajan y los jugos se redistribuyen. Resultado: carne jugosa en lugar de seca. El reposo es cocción pasiva.',
		},
		{
			question: '¿Funciona con la pantalla bloqueada?',
			answer:
				'Sí, pero necesitas dar permisos de notificaciones. Los temporizadores siguen corriendo en segundo plano y te avisarán con sonido y notificación del navegador incluso si cambias de pestaña o bloqueas el móvil.',
		},
		{
			question: '¿Qué es la \'Zona de Peligro\' alimentaria?',
			answer:
				'Entre 5°C y 65°C las bacterias se multiplican rápidamente. Los alimentos cocinados no deben estar en esta zona más de 2 horas (1 hora si hace >30°C). Usa un temporizador para controlar el enfriamiento antes de refrigerar.',
		},
	];
const howTo = [
		{
			name: 'Crea múltiples temporizadores',
			text: 'Usa el botón \'+\' para añadir tantos temporizadores como necesites. Ideal para orquestar varios platos simultáneamente.',
		},
		{
			name: 'Personaliza cada temporizador',
			text: 'Cambia el nombre de cada temporizador para identificar qué está cocinando: \'Horno\', \'Arroz\', \'Salsa\', etc.',
		},
		{
			name: 'Controla desde el dock móvil',
			text: 'En móviles, los temporizadores activos aparecen en un dock deslizable en la parte inferior. Pausa o reinicia directamente desde ahí.',
		},
		{
			name: 'Recibe notificaciones',
			text: 'Autoriza notificaciones para que el navegador te avise cuando se acabe el tiempo, incluso si cambias de pestaña.',
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
	slug: 'temporizador-cocina',
	title: 'Temporizador de Cocina Múltiple',
	description:
		'Gestiona múltiples tiempos de cocción simultáneamente. Alarmas independientes, ideal para chefs y organización en la cocina (Mise en Place).',
	faqTitle: 'Preguntas Frecuentes',	ui: {
		addTimer: 'Añadir Temporizador',
		stopAll: 'Detener Todas',
		defaultName: 'Temporizador',
		newTimerName: 'Nuevo Temporizador',
		timerDefault1: 'Temporizador 1',
		timerDefault2: 'Temporizador 2',
		timerDefault3: 'Temporizador 3',
		label: 'Etiqueta',
		hours: 'Horas',
		minutes: 'Min',
		seconds: 'Seg',
		ready: 'Listo',
		start: 'Iniciar',
		pause: 'Pausar',
		reset: 'Reset',
		addOneMin: '+1 min',
		addFiveMin: '+5 min',
		statusReady: 'Listo',
		statusRunning: 'Corriendo',
		statusPaused: 'Pausado',
		statusFinished: '¡TIEMPO!',
		finishNotification: 'Temporizador Terminado para',
	},

	faq: [
		{
			question: '¿Cuántos temporizadores puedo crear?',
			answer:
				'Ilimitados. Añade tantos como necesites con el botón \'+\'. Ideal para cocinar varios platos simultáneamente: pasta hirviendo, salsa reduciéndose, carne reposando, y horno funcionando, todo a la vez.',
		},
		{
			question: '¿Por qué es importante el tiempo de reposo en carnes?',
			answer:
				'Cuando cortas carne recién salida del fuego, los jugos escapan al plato. Si reposas 5-10 minutos, las fibras se relajan y los jugos se redistribuyen. Resultado: carne jugosa en lugar de seca. El reposo es cocción pasiva.',
		},
		{
			question: '¿Funciona con la pantalla bloqueada?',
			answer:
				'Sí, pero necesitas dar permisos de notificaciones. Los temporizadores siguen corriendo en segundo plano y te avisarán con sonido y notificación del navegador incluso si cambias de pestaña o bloqueas el móvil.',
		},
		{
			question: '¿Qué es la \'Zona de Peligro\' alimentaria?',
			answer:
				'Entre 5°C y 65°C las bacterias se multiplican rápidamente. Los alimentos cocinados no deben estar en esta zona más de 2 horas (1 hora si hace >30°C). Usa un temporizador para controlar el enfriamiento antes de refrigerar.',
		},
	],	howTo: [
		{
			name: 'Crea múltiples temporizadores',
			text: 'Usa el botón \'+\' para añadir tantos temporizadores como necesites. Ideal para orquestar varios platos simultáneamente.',
		},
		{
			name: 'Personaliza cada temporizador',
			text: 'Cambia el nombre de cada temporizador para identificar qué está cocinando: \'Horno\', \'Arroz\', \'Salsa\', etc.',
		},
		{
			name: 'Controla desde el dock móvil',
			text: 'En móviles, los temporizadores activos aparecen en un dock deslizable en la parte inferior. Pausa o reinicia directamente desde ahí.',
		},
		{
			name: 'Recibe notificaciones',
			text: 'Autoriza notificaciones para que el navegador te avise cuando se acabe el tiempo, incluso si cambias de pestaña.',
		},
	],
  seo: [
		{
			type: 'title',
			text: 'Maestría Temporal en la Cocina',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'La cocina profesional no se basa solo en recetas, sino en la <strong>gestión precisa del tiempo</strong>. El concepto francés <em>"Mise en Place"</em> (todo en su lugar) incluye el tiempo como un ingrediente más. Un filete que reposa 5 minutos redistribuye sus jugos y se vuelve tierno; uno que no reposa, los pierde al primer corte.',
		},
		{
			type: 'paragraph',
			html: 'Esta herramienta de <strong>Temporizador Múltiple</strong> ha sido diseñada para chefs caseros y profesionales que necesitan orquestar una sinfonía de platos: la pasta hirviendo, el asado en el horno, y la reducción de salsa, todo ocurriendo simultáneamente.',
		},
		{
			type: 'title',
			text: 'El Papel de la Temperatura y el Tiempo',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Cocinar es esencialmente aplicar calor durante un tiempo determinado para transformar la estructura química de los alimentos. La desnaturalización de las proteínas y la reacción de Maillard (que da el color dorado y sabor) dependen críticamente del cronómetro.',
		},
		{
			type: 'table',
			headers: ['Alimento', 'Punto de Cocción', 'Tiempo', 'Beneficio'],
			rows: [
				['Huevos Pasados por agua', 'Yema líquida', '3-4 min', 'Proteína suave, fácil digestión'],
				['Huevos Mollet', 'Yema densa', '5-6 min', 'Balance perfecto entre textura'],
				['Huevos Duros', 'Cuajado total', '9-11 min', 'Máxima consistencia'],
				['Carnes - Sellado', 'Alta temperatura', '1-2 min/lado', 'Reacción Maillard, jugosidad'],
				['Carnes - Reposo fino', 'Reposo', '5 min', 'Redistribución de jugos'],
				['Carnes - Reposo grande', 'Reposo', '15-20 min', 'Fibras relajadas'],
			],
		},
		{
			type: 'title',
			text: 'Seguridad Alimentaria: La Zona de Peligro',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'El tiempo no solo afecta la calidad, sino la seguridad. La "Zona de Peligro" bacteriana se sitúa entre los 5°C y los 65°C. Los alimentos cocinados no deben permanecer en este rango por más de <strong>2 horas</strong> (o 1 hora si la temperatura ambiente supera los 30°C). Usa un temporizador para controlar el enfriamiento antes de guardar la comida en la nevera.',
		},
		{
			type: 'title',
			text: 'Consejos Profesionales de Organización',
			level: 3,
		},
		{
			type: 'list',
			items: [
				'<strong>Escalona los tiempos de finalización:</strong> Si todo termina a la vez, te agobiarás emplatando. Intenta que los acompañamientos estén listos 5 minutos antes que el plato principal.',
				'<strong>Usa el calor residual:</strong> Apaga el fuego de las verduras o pastas 1-2 minutos antes de que el temporizador suene. El calor residual terminará la cocción suavemente.',
				'<strong>Nombra tus temporizadores:</strong> En una cocina ajetreada es fácil olvidar qué alarma es cual. Usa la función de renombrado de esta herramienta para etiquetar \'Horno\', \'Arroz\', o \'Salsa\'.',
			],
		},
		{
			type: 'tip',
			html: '<strong>Consejo profesional:</strong> La precisión del tiempo es lo que diferencia a un chef de un cocinero casero. Invierte en un buen temporizador y úsalo siempre. La experiencia te dice cuándo algo "se ve listo", pero el tiempo te garantiza consistencia.',
		},
	],
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
