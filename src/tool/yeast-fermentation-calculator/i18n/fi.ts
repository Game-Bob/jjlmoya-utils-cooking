import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FermentationUI } from '../ui';

const title = "Hiivan Käymisaika Laskuri Leivälle, Hapanjuurelle ja Oluelle";
const description = "Arvioi leivän kohotusaika, hapanjuuren käymisaika ja oluen käymisaika lämpötilan, hiivamäärän ja tavoitteen perusteella. Metriset ja imperiaaliset yksiköt.";

const faq = [
  {
    "question": "Mitä tämä laskuri arvioi?",
    "answer": "Se arvioi aikatauluikkunan leipätaikinalle, hapanjuurelle tai oluelle."
  },
  {
    "question": "Miksi lämpötila vaikuttaa niin paljon?",
    "answer": "Lämpötila muuttaa hiivan metabolianopeutta suoraan."
  },
  {
    "question": "Mitä syötän hapanjuurelle?",
    "answer": "Jauhopainon eräkokoina ja juuren painon viljelmän määränä."
  },
  {
    "question": "Mitä syötän oluelle?",
    "answer": "Vierremäärän litroina ja kuivahiivan grammoina."
  },
  {
    "question": "Pitäkö käyminen lopettaa ajan päätyttyä?",
    "answer": "Ei, tarkista taikina visuaalisesti tai mittaa vierteen ominaispaino."
  },
  {
    "question": "Voinko käyttää imperiaalisia yksiköitä?",
    "answer": "Kyllä, yläosan valintanapilla."
  }
];

const howTo = [
  {
    "name": "Valitse tila",
    "text": "Valitse leipä, hapanjuuri tai olut."
  },
  {
    "name": "Aseta viljelmä ja lämpötila",
    "text": "Valitse hiivatyyppi ja lämpötila."
  },
  {
    "name": "Syötä erä ja hiiva",
    "text": "Täytä jauho/vierre ja hiivamäärä."
  },
  {
    "name": "Aseta tavoite",
    "text": "Valitse kohotus tai käymisaste."
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
  "modeBread": "Leipä",
  "modeSourdough": "Hapanjuuri",
  "modeBeer": "Olut",
  "modeBreadHint": "teollinen hiiva",
  "modeSourdoughHint": "villi viljelmä",
  "modeBeerHint": "ale tai lager",
  "temperature": "Käymislämpötila",
  "temperatureHelp": "Käytä taikinan tai vierteen lämpötilaa.",
  "systemLabel": "Mittajärjestelmä",
  "metricSystem": "Metrinen",
  "imperialSystem": "Imperiaalinen",
  "useImperial": "Käytä imperiaalista",
  "useMetric": "Käytä metristä",
  "imperialTemperatureUnit": "°F",
  "metricTemperatureUnit": "°C",
  "imperialMassUnit": "oz",
  "metricMassUnit": "g",
  "imperialFlourUnit": "oz",
  "metricFlourUnit": "g",
  "imperialWortUnit": "gal",
  "metricWortUnit": "L",
  "batchSize": "Eräkoko",
  "batchSizeHelp": "Jauhomäärä taikinalle tai vierremäärä oluelle.",
  "flour": "Jauhopaino",
  "wort": "Vierremäärä",
  "yeastAmount": "Viljelmän määrä",
  "yeastAmountHelp": "Punnitse hiiva tai hapanjuuri.",
  "yeastType": "Viljelmätyyppi",
  "instant": "Kuivahiiva instant",
  "active": "Aktiivikuivahiiva",
  "fresh": "Tuorehiiva",
  "starter": "Hapanjuuri",
  "ale": "Ale-hiiva",
  "lager": "Lager-hiiva",
  "targetRise": "Tavoitekohotus",
  "targetAttenuation": "Tavoitekäymisaste",
  "targetHelp": "Tämä on tavoite, ei automaattinen takuu.",
  "riseUnit": "x tilavuus",
  "attenuationUnit": "%",
  "presetRoom": "Huoneenlämpö",
  "presetWarm": "Lämmin",
  "presetCool": "Viileä",
  "presetOvernight": "Yön yli",
  "calculate": "Päivitä arvio",
  "reset": "Palauta leipään",
  "estimatedWindow": "Arvioitu käymisikkuna",
  "rate": "Aktiivisuusnopeus",
  "pitchDensity": "Hiivaustiheys",
  "status": "Lukema",
  "steady": "vakaat olosuhteet",
  "watch": "tarkkaile viljelmää",
  "caution": "ihanteen ulkopuolella",
  "invalid": "syötä kelolliset arvot",
  "steadyText": "Syötteet ovat lähellä viiteprofiilia. Tarkkaile taikinaa tai vierrettä.",
  "watchText": "Arvio toimii oppaana, mutta lämpötila tekee ikkunasta vaihtelevan.",
  "cautionText": "Yhdistelmä poikkeaa viitteestä. Käytä karkeana signaalina.",
  "invalidText": "Syötä positiiviset arvot.",
  "assumptions": "Avaa mallin oletukset",
  "assumptionsText": "Malli käyttää Q10-lämpötilakerrointa ja sublineaarista annoskorjausta.",
  "targetMarker": "tavoite",
  "riseScene": "taikinan tilavuus",
  "attenuationScene": "muunnettu sokeri",
  "hours": "tuntia",
  "days": "päivää",
  "perLiter": "g/L",
  "perGallon": "oz/gal",
  "perFlour": "jauhoista",
  "enterValid": "Syötä arvot.",
  "faqTitle": "Usein Kysytyt Kysymykset",
  "bibliographyTitle": "Kirjallisuus ja Lähteet"
};

export const content: ToolLocaleContent<FermentationUI> = {
  slug: "hiivan-kaymisaika-laskuri",
  title,
  description,
  ui,
  faqTitle: ui.faqTitle,
  faq,
  bibliographyTitle: ui.bibliographyTitle,
  bibliography,
  howTo,
  seo: [
    { type: 'title', text: "Kuinka käymisarvio toimii", level: 2 },
    { type: 'paragraph', html: "Etsitkö laskuria hiivan käymisajalle, hapanjuuren kohotukselle tai oluen käymiselle? Tämä työkalu tarjoaa käytännöllisen aikaikkunan lämpötilan, hiivan, eräkoon ja tavoitteen perusteella." },
    { type: 'stats', columns: 3, items: [{ value: '3', label: "käymistilaa", icon: 'mdi:flask-outline' }, { value: 'Q10', label: "lämpötilakerroin", icon: 'mdi:thermometer' }, { value: 'range', label: "tulosmuoto", icon: 'mdi:arrow-expand-horizontal' }] },
    { type: 'title', text: "Aikaikkunaan vaikuttavat tekijät", level: 3 },
    { type: 'table', headers: ["Muuttuja","Leipä ja hapanjuuri","Olut"], rows: [["Eräkoko","Jauhot grammoina","Vierre litroina"],["Viljelmän määrä","Hiiva tai juuri grammoina","Kuivahiiva grammoina"],["Lopputavoite","Tilavuuskerroin","Tavoitekäymisaste"],["Tarkistus","Tilavuus ja joustavuus","Vakaa ominaispainomittaus"]] },
    { type: 'title', text: "Miksi tulos on aikaväli", level: 3 },
    { type: 'paragraph', html: "Saman reseptin taikinat voivat käydä eri tahtiin lämpötilan ja hiivan aktiivisuuden vuoksi. Väli kuvaa tätä todellista epävarmuutta." },
    { type: 'tip', title: "Käytä tavoitetta visuaalisena merkkinä", html: "Leivässä arvioi kohotusta ja ilmavutta. Oluelle varmista vakaa tiheys ominaispainomittarilla." },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
