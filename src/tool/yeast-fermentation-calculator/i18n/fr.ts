import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FermentationUI } from '../ui';

const title = "Calculateur de Temps de Fermentation de la Levure pour Pain, Levain et Bière";
const description = "Estimez le temps de pousse du pain, de fermentation du levain et de la bière selon la température, la quantité de levure et l'objectif. Unités métriques et impériales.";

const faq = [
  {
    "question": "Que calcule ce calculateur de fermentation ?",
    "answer": "Il estime une plage horaire indicative pour le pain, le levain ou la bière."
  },
  {
    "question": "Pourquoi la température change-t-elle autant le résultat ?",
    "answer": "La température modifie directement l'activité métabolique des levures."
  },
  {
    "question": "Que saisir pour le levain ?",
    "answer": "Le poids de farine comme taille du lot et le levain comme quantité de culture."
  },
  {
    "question": "Que saisir pour la bière ?",
    "answer": "Le volume de moût en litres et la levure sèche en grammes."
  },
  {
    "question": "Faut-il arrêter la fermentation à la fin de la fenêtre ?",
    "answer": "Non, vérifiez physiquement la pâte ou mesurez la densité du moût."
  },
  {
    "question": "Puis-je utiliser les unités impériales ?",
    "answer": "Oui, via le bouton de bascule du système de mesure."
  }
];

const howTo = [
  {
    "name": "Choisir le mode",
    "text": "Sélectionnez pain, levain ou bière."
  },
  {
    "name": "Régler la température et la culture",
    "text": "Indiquez le type de levure et la température."
  },
  {
    "name": "Saisir le lot et la levure",
    "text": "Entrez la farine/moût et la quantité de levure."
  },
  {
    "name": "Définir l'objectif",
    "text": "Choisissez le gonflement de la pâte ou l'atténuation."
  }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({ '@type': 'Question' as const, name: item.question, acceptedAnswer: { '@type': 'Answer' as const, text: item.answer } })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howTo.map((step) => ({ '@type': 'HowToStep' as const, name: step.name, text: step.text })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
};

const ui: FermentationUI = {
  "modeBread": "Pain",
  "modeSourdough": "Levain",
  "modeBeer": "Bière",
  "modeBreadHint": "levure commerciale",
  "modeSourdoughHint": "culture sauvage",
  "modeBeerHint": "ale ou lager",
  "temperature": "Température de fermentation",
  "temperatureHelp": "Utilisez la température de la pâte ou du moût.",
  "systemLabel": "Système de mesure",
  "metricSystem": "Métrique",
  "imperialSystem": "Impérial",
  "useImperial": "Utiliser impérial",
  "useMetric": "Utiliser métrique",
  "imperialTemperatureUnit": "°F",
  "metricTemperatureUnit": "°C",
  "imperialMassUnit": "oz",
  "metricMassUnit": "g",
  "imperialFlourUnit": "oz",
  "metricFlourUnit": "g",
  "imperialWortUnit": "gal",
  "metricWortUnit": "L",
  "batchSize": "Taille du lot",
  "batchSizeHelp": "Poids de farine pour la pâte ou volume de moût pour la bière.",
  "flour": "Poids de farine",
  "wort": "Volume de moût",
  "yeastAmount": "Quantité de culture",
  "yeastAmountHelp": "Pesez la levure ou le levain.",
  "yeastType": "Type de culture",
  "instant": "Sèche instantanée",
  "active": "Sèche active",
  "fresh": "Levure fraîche",
  "starter": "Levain",
  "ale": "Levure ale",
  "lager": "Levure lager",
  "targetRise": "Pousse cible",
  "targetAttenuation": "Atténuation cible",
  "targetHelp": "C'est une cible de contrôle, pas une garantie automatique.",
  "riseUnit": "x volume",
  "attenuationUnit": "%",
  "presetRoom": "Ambiante",
  "presetWarm": "Chaude",
  "presetCool": "Fraîche",
  "presetOvernight": "Nuit",
  "calculate": "Mettre à jour l'estimation",
  "reset": "Réinitialiser sur pain",
  "estimatedWindow": "Fenêtre de fermentation estimée",
  "rate": "Taux d'activité",
  "pitchDensity": "Taux d'ensemencement",
  "status": "Lecture",
  "steady": "conditions stables",
  "watch": "observer la culture",
  "caution": "hors zone optimale",
  "invalid": "entrez des valeurs valides",
  "steadyText": "Les données sont proches du profil de référence. Observez la pâte ou le moût.",
  "watchText": "Estimation utile comme guide, mais la température ou culture rendent la fenêtre variable.",
  "cautionText": "Combinaison éloignée du profil de référence. Utilisez comme signal approximatif.",
  "invalidText": "Veuillez saisir des valeurs positives.",
  "assumptions": "Ouvrir les hypothèses du modèle",
  "assumptionsText": "Le modèle applique un facteur Q10 de température et un ajustement sublinéaire de dose.",
  "targetMarker": "cible",
  "riseScene": "volume de pâte",
  "attenuationScene": "sucre converti",
  "hours": "heures",
  "days": "jours",
  "perLiter": "g/L",
  "perGallon": "oz/gal",
  "perFlour": "de farine",
  "enterValid": "Saisissez des valeurs.",
  "faqTitle": "Foire Aux Questions",
  "bibliographyTitle": "Bibliographie et Références"
};

export const content: ToolLocaleContent<FermentationUI> = {
  slug: "calculateur-temps-fermentation-levure",
  title,
  description,
  ui,
  faqTitle: ui.faqTitle,
  faq,
  bibliographyTitle: ui.bibliographyTitle,
  bibliography,
  howTo,
  seo: [
    { type: 'title', text: "Comment fonctionne l'estimation de fermentation", level: 2 },
    { type: 'paragraph', html: "Vous cherchez un calculateur de temps de pousse du pain, de fermentation du levain ou de la bière ? Cet outil vous donne une plage pratique basée sur la température, la quantité de levure, la taille du lot et l'objectif." },
    { type: 'stats', columns: 3, items: [{ value: '3', label: "modes de fermentation", icon: 'mdi:flask-outline' }, { value: 'Q10', label: "facteur température", icon: 'mdi:thermometer' }, { value: 'range', label: "format de résultat", icon: 'mdi:arrow-expand-horizontal' }] },
    { type: 'title', text: "Paramètres influençant l'estimation", level: 3 },
    { type: 'table', headers: ["Variable","Pain et levain","Bière"], rows: [["Taille du lot","Farine en grammes","Moût en litres"],["Quantité de culture","Levure ou levain en grammes","Levure sèche en grammes"],["Objectif","Multiplicateur de volume","Atténuation cible"],["Vérification","Volume et élasticité","Mesure de densité stable"]] },
    { type: 'title', text: "Pourquoi le résultat est une plage horaire", level: 3 },
    { type: 'paragraph', html: "La vitesse de fermentation varie selon les Farines, la vitalité des levures et la température. La plage reflète cette variabilité réelle." },
    { type: 'tip', title: "Utiliser l'objectif comme repère visuel", html: "Pour le pain, observez la pousse et l'alvéolage. Pour la bière, validez par la stabilité de la densité." },
    { type: 'paragraph', html: 'Pendant la fermentation, utilisez la température et le volume comme repères pratiques. La durée reste une estimation: observez la structure de la pâte et confirmez la fin de la fermentation de la bière par une mesure stable.' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
