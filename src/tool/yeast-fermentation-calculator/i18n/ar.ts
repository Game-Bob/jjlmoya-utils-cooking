import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FermentationUI } from '../ui';

const title = "حاسبة وقت تخمر الخميرة للخبز والعجين المخمر والبيرا";
const description = "تقدير وقت تخمر الخبز والعجين المخمر والبيرا بناءً على درجة الحرارة وكمية الخميرة وحجم الدفعة والهدف. دعم الوحدات المترية والإمبريالية.";

const faq = [
  {
    "question": "ماذا تقدّر حاسبة تخمر الخميرة هذه؟",
    "answer": "تقدّر نافذة زمنية للتخطيط لعجين الخبز أو العجين المخمر أو البيرا."
  },
  {
    "question": "لماذا تؤثر درجة الحرارة بشكل كبير على النتيجة؟",
    "answer": "تغير درجة الحرارة معدل النشاط الأيضي للخميرة بشكل مباشر."
  },
  {
    "question": "ماذا أدخل بالنسبة للعجين المخمر؟",
    "answer": "أدخل وزن الطحين كحجم الدفعة ووزن البادئ ككمية الخميرة."
  },
  {
    "question": "ماذا أدخل بالنسبة للبيرا؟",
    "answer": "أدخل حجم السائل باللتر والخميرة الجافة بالغرام."
  },
  {
    "question": "هل يجب إيقاف التخمر عند انتهاء النافذة المقدرة؟",
    "answer": "لا، افحص العجين بصرياً أو قس كثافة السائل."
  },
  {
    "question": "هل يمكنني استخدام الوحدات الإمبريالية؟",
    "answer": "نعم، عبر زر التبديل أعلى الأداة."
  }
];

const howTo = [
  {
    "name": "اختر وضع التخمر",
    "text": "حدد الخبز أو العجين المخمر أو البيرا."
  },
  {
    "name": "اضبط الخميرة والحرارة",
    "text": "اختر نوع الخميرة ودرجة حرارة العمل."
  },
  {
    "name": "أدخل الدفعة والخميرة",
    "text": "املأ طحين/سائل وكمية الخميرة."
  },
  {
    "name": "حدد الهدف",
    "text": "اختر نسبة انتفاخ العجين أو درجة التخمر."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
};

const ui: FermentationUI = {
  "modeBread": "خبز",
  "modeSourdough": "عجين مخمر",
  "modeBeer": "بيرا",
  "modeBreadHint": "خميرة تجارية",
  "modeSourdoughHint": "خميرة طبيعية",
  "modeBeerHint": "إيل أو لاغر",
  "temperature": "درجة حرارة التخمر",
  "temperatureHelp": "استخدم درجة حرارة العجين أو السائل الفعلية وليس حرارة الغرفة.",
  "systemLabel": "نظام القياس",
  "metricSystem": "متري",
  "imperialSystem": "إمبريالي",
  "useImperial": "استخدام إمبريالي",
  "useMetric": "استخدام متري",
  "imperialTemperatureUnit": "°F",
  "metricTemperatureUnit": "°C",
  "imperialMassUnit": "oz",
  "metricMassUnit": "g",
  "imperialFlourUnit": "oz",
  "metricFlourUnit": "g",
  "imperialWortUnit": "gal",
  "metricWortUnit": "L",
  "batchSize": "حجم الدفعة",
  "batchSizeHelp": "وزن الطحين للخبز أو حجم السائل للبيرا.",
  "flour": "وزن الطحين",
  "wort": "حجم السائل",
  "yeastAmount": "كمية الخميرة",
  "yeastAmountHelp": "زن الخميرة أو بادئ التخمر. للبيرا استخدم غرامات الخميرة الجافة.",
  "yeastType": "نوع الخميرة",
  "instant": "جافة فورية",
  "active": "جافة نشطة",
  "fresh": "خميرة طازجة",
  "starter": "بادئ عجين مخمر",
  "ale": "خميرة إيل",
  "lager": "خميرة لاغر",
  "targetRise": "ارتفاع الهدف",
  "targetAttenuation": "نسبة التخمر الاستهدافية",
  "targetHelp": "هذا هدف للمراقبة وليس ضماناً تلقائياً للاكتمال.",
  "riseUnit": "x الحجم",
  "attenuationUnit": "%",
  "presetRoom": "غرفة",
  "presetWarm": "دافئ",
  "presetCool": "بارد",
  "presetOvernight": "طوال الليل",
  "calculate": "تحديث التقدير",
  "reset": "إعادة ضبط للخبز",
  "estimatedWindow": "نافذة التخمر المقدرة",
  "rate": "معدل العمل",
  "pitchDensity": "كثافة التلقيح",
  "status": "القراءة",
  "steady": "ظروف مستقرة",
  "watch": "راقب العجين",
  "caution": "خارج النطاق المثالي",
  "invalid": "أدخل قيم صحيحة",
  "steadyText": "المدخلات قريبة من الملف المرجعي. راقب العجين أو السائل بدلاً من الساعة.",
  "watchText": "التقدير مفيد كدليل، ولكن الحرارة تجعل النطاق متغيراً.",
  "cautionText": "هذا الجمع بعيد عن الملف المرجعي. استخدم النتيجة كإشارة تقريبية.",
  "invalidText": "يرجى إدخال قيم موجبة.",
  "assumptions": "فتح افتراضات النموذج",
  "assumptionsText": "يطبق النموذج عامل درجة حرارة Q10 وتعديلاً فرعياً للجرعة.",
  "targetMarker": "الهدف",
  "riseScene": "حجم العجين",
  "attenuationScene": "السكر المحول",
  "hours": "ساعات",
  "days": "أيام",
  "perLiter": "g/L",
  "perGallon": "oz/gal",
  "perFlour": "من الطحين",
  "enterValid": "أدخل القيم للبدء.",
  "faqTitle": "الأسئلة الشائعة",
  "bibliographyTitle": "المراجع والمصادر"
};

export const content: ToolLocaleContent<FermentationUI> = {
  slug: "kalkulator-waqt-takhammur-alkhameera",
  title,
  description,
  ui,
  faqTitle: ui.faqTitle,
  faq,
  bibliographyTitle: ui.bibliographyTitle,
  bibliography,
  howTo,
  seo: [
    { type: 'title', text: "كيف يعمل تقدير التخمر", level: 2 },
    { type: 'paragraph', html: "هل تبحث عن حاسبة لوقت تخمر الخميرة أو العجين المخمر أو البيرا؟ توفر هذه الأداة نافذة زمنية عملية بناءً على الحرارة والخميرة وحجم الدفعة والهدف." },
    { type: 'stats', columns: 3, items: [{ value: '3', label: "أوضاع تخمر", icon: 'mdi:flask-outline' }, { value: 'Q10', label: "عامل الحرارة", icon: 'mdi:thermometer' }, { value: 'range', label: "صيغة النتيجة", icon: 'mdi:arrow-expand-horizontal' }] },
    { type: 'title', text: "العوامل المؤثرة على النافذة الزمنية", level: 3 },
    { type: 'table', headers: ["المتغير","الخبز والعجين المخمر","البيرا"], rows: [["حجم الدفعة","الطحين بالغرام","السائل باللتر"],["كمية الخميرة","الخميرة/البادئ بالغرام","الخميرة الجافة بالغرام"],["الهدف النهائي","مضاعف حجم العجين","نسبة التخمر المستهدفة"],["التحقق","الحجم والمرونة","قياس الكثافة المستقر"]] },
    { type: 'title', text: "لماذا تظهر النتيجة كنطاق زمني", level: 3 },
    { type: 'paragraph', html: "قد تتخمر الدفعات ذات الوصفة الواحدة بسرعات مختلفة بسبب تقلبات الحرارة ونشاط الخميرة. يعكس النطاق حالة عدم اليقين الواقعية." },
    { type: 'tip', title: "استخدم الهدف كعلامة بصرية", html: "بالنسبة للخبز، قيم الانتفاخ والبنية. بالنسبة للبيرا، تأكد من ثبات الكثافة بمرور الوقت." },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
