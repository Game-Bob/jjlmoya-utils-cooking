import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

const title = "Napoli Pizza Hamuru Hesaplayıcı";
const description = "Evde gerçek Napoli pizzası hazırlamak için un, su, tuz ve maya oranlarını tam olarak hesaplayın.";
const faq = [
  {
    question: "Napoli pizzası için ideal hidrasyon nedir?",
    answer: "AVPN protokolüne göre standart hidrasyon %63-67'dir. Yeni başlayanlar için %60-62 daha yönetilebilirdir. Güçlü un (W300+) kullanan ustalar, olağanüstü sonuçlar için %70-75 seviyelerine çıkabilir.",
  },
  {
    question: "Hamur ne kadar süre mayalanmalı?",
    answer: "Enzimleri aktive etmek için buzdolabında (4°C) en az 24 saat. En iyisi 48-72 saattir. 72 saatin ötesinde çok güçlü bir un (W300+) gerekir, aksi takdirde hamur ekşir.",
  },
  {
    question: "Kuru maya ile yapılabilir mi?",
    answer: "Evet. Kuru maya, yaş mayanın 0.4 katına eşittir (1g kuru = 2.5g yaş). Kalite benzerdir ancak yaş maya daha zengin bir tat profili sunar.",
  },
  {
    question: "Ev tipi fırında Napoli pizzası yapabilir miyim?",
    answer: "Evet, ancak bazı uyarlamalarla. Fırını taşla birlikte maksimum derecede (250-280°C) 45-60 dakika ısıtın. Pişirme süresi 60-90 saniye yerine 5-7 dakika sürecektir.",
  },
  {
    question: "Hangi unu kullanmalıyım?",
    answer: "İdeal: Caputo Pizzeria (W260-280) veya Manitoba (W350-400). Alternatif: 100g'da 11-13g protein içeren herhangi bir un. Uzun mayalamalar için zayıf unlardan (W130-160) kaçının.",
  },
  {
    question: "Hamur açılırken neden yırtılır?",
    answer: "Glüten gevşememiştir. Hamur bezelerini oda sıcaklığında 2-3 saat dinlendirin. Tekrarlarsa yoğurma yetersizdir veya un çok zayıftır.",
  },
];
const howTo = [
  {
    name: "Oranları hesaplayın",
    text: "Pizza sayısına ve her bir hamur bezesinin ağırlığına göre her bir malzemenin tam gramajını almak için bu hesaplayıcıyı kullanın.",
  },
  {
    name: "Hamuru yoğurun",
    text: "Unu ılık su (22-25°C), tuz ve maya ile birleştirin. Makinede 8-10 dakika veya elle 15-20 dakika yoğurun.",
  },
  {
    name: "Toplu fermantasyon",
    text: "Tüm hamurun hacmi iki katına çıkana kadar oda sıcaklığında (20-25°C) 1-2 saat mayalanmasına izin verin.",
  },
  {
    name: "Bezeler haline getirin",
    text: "Hamuru belirtilen ağırlıkta porsiyonlara bölün. Bezeleri yuvarlamadan önce dinlendirin.",
  },
  {
    name: "Soğuk fermantasyon",
    text: "Hamur bezelerini hava almayan bir kapta 24-72 saat buzdolabında (4°C) bekletin. Lezzet ve sindirilebilirlik için kritik adım budur.",
  },
  {
    name: "Açın ve pişirin",
    text: "Pişirmeden 30 dakika önce soğuktan çıkarın. Merkezden dışarıya doğru açın. Maksimum sıcaklıkta pişirin.",
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
  slug: 'napoli-pizza-hamuru-hesaplayici',
  title,
  description,
  faqTitle: "Sıkça Sorulan Sorular",
  ui: {
    parameters: "Parametreler",
    quantity: "Miktarı",
    pizzas: "pizza",
    weight: "Beze ağırlığı",
    small: "Küçük (180g)",
    standard: "Standart (260g)",
    large: "Büyük (350g)",
    hydration: "Hidrasyon",
    classic: "Klasik (55-60%)",
    modern: "Modern (65-70%)",
    high: "Yüksek (75%+)",
    salt: "Tuz",
    fermentation_tip_title: "Mayalama İpucu",
    fermentation_tip:
      "Daha sindirilebilir bir hamur için, her 100g un için <strong>0.3g</strong> yaş maya kullanarak buzdolabında (4°C) 24 saat bekletin.",
    your_recipe: "Tarifiniz",
    fresh_yeast: "Yaş Maya",
    dry_yeast: "Kuru",
    flour: "Un (W260-300)",
    water: "Su",
    salt_label: "Deniz Tuzu",
    yeast: "Maya",
    yeast_note: "20°C'de 8 saat için",
    total_weight: "Toplam Hamur Ağırlığı",
    approx: "yakl.",
    visual_note:
      "Görsel boyut, hamur bezesinin ağırlığına göre açılan pizzanın yaklaşık çapını temsil eder.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Gerçek Napoli Pizzası Hamuru İçin Usta Rehberi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Napoli pizzası</strong> bir kültürel mirastır. Başarı; zaman, sıcaklık ve hidrasyon arasındaki milimetrik hassasiyete dayanır.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '480°C',
          label: 'Pişirme Sıcaklığı',
          icon: 'mdi:fire',
        },
        {
          value: '60-90s',
          label: 'Pişirme Süresi',
          icon: 'mdi:clock-fast',
        },
        {
          value: '%65',
          label: 'Std. Hidrasyon',
          icon: 'mdi:water-percent',
        },
        {
          value: 'W280',
          label: 'Un Gücü',
          icon: 'mdi:grain',
        },
      ],
    },
    {
      type: 'title',
      text: 'Hidrasyonun Hayati Önemi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hidrasyon (un ağırlığına göre su yüzdesi), kenarın (<strong>cornicione</strong>) dokusunu belirler.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Hidrasyon %55 ile %60',
          icon: 'mdi:water-percent',
          description: 'İşlenmesi çok kolay, yeni başlayanlar ve ev fırınları için idealdir.',
          points: [
            'Kolay glüten ağı oluşumu',
            'Daha az yapışkan hamur',
            'Sert ve çıtır kenarlar',
          ],
        },
        {
          title: 'Hidrasyon %63 ile %67',
          icon: 'mdi:water',
          description: 'AVPN standardı. Hafif bir hamur için mükemmel denge.',
          highlight: true,
          points: [
            'Geleneksel esnek doku',
            'Odun fırınları için ideal',
            'Orta düzey yoğurma becerisi gerektirir',
          ],
        },
        {
          title: 'Hidrasyon %70+',
          icon: 'mdi:water-plus',
          description: 'Devasa kenarlı modern pizzalar. İleri düzey teknik gerektirir.',
          points: [
            'Aşırı büyük gözenekler',
            'Çok hafif ve sindirimi kolay',
            'Çok güçlü unlar gerektirir',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Maya Türleri ve Doğru Seçim',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Taze Yaş Maya',
          icon: 'mdi:bread-slice-outline',
          description: 'Pizza ustalarının geleneksel tercihi. Daha karmaşık bir lezzet profili sunar.',
          points: [
            'Daha derin ve temiz lezzet',
            'Dengeli enzim aktivitesi',
            'Ilık suda kolayca çözünür',
            'Kısa raf ömrü',
          ],
        },
        {
          title: 'Instant Kuru Maya',
          icon: 'mdi:shaker-outline',
          description: 'Çok daha kararlı ve saklaması kolay.',
          points: [
            'Uzun raf ömrü',
            'Önceden suda çözdürme gerektirmez',
            'Yaş mayaya göre 3 kat daha güçlü',
            'Biraz daha nötr lezzet',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'W Güç İndeksine Göre Un Seçim Rehberi',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Un Tipi', 'Güç (W)', 'Mayalanma Süresi', 'Önerilen Kullanım'],
      rows: [
        ['Zayıf Un', 'W130-180', '4-8 saat', 'Hızlı hamur işleri'],
        ['Orta Güçlü Un', 'W200-240', '8-24 saat', 'Hızlı pizza veya basit ekmek'],
        ['Güçlü Un', 'W260-320', '24-72 saat', 'Gerçek Napoli Pizzası'],
        ['Ekstra Güçlü', 'W350+', '72+ saat', 'Çok uzun fermantasyonlar'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Yoğurma Sıcaklığı Kontrolü',
      html: 'Glüten ağının zarar görmemesi için yoğurma sonunda hamur sıcaklığı 24°C\'yi geçmemelidir.',
    },
    {
      type: 'title',
      text: 'Geleceğin Pizza Ustası İçin Sözlük',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cornicione',
          definition: 'Napoli pizzasının kabarık ve gözenekli kenarı.',
        },
        {
          term: 'Olgunlaşma',
          definition: 'Lezzet için protein ve şekerlerin parçalandığı enzim süreci.',
        },
        {
          term: 'Hamur Gelişimi',
          definition: 'Hamurun optimum esnekliğe ulaştığı an.',
        },
        {
          term: 'Otoliz',
          definition: 'Glüten oluşumunu kolaylaştırmak için sadece un ve suyun dinlendirilmesi.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Buzdolabı İpucu',
      html: '4°C\'de 24 saatlik fermantasyon, oda sıcaklığında elde edilemeyen karmaşık aromalar yaratır.',
    },
    {
      type: 'paragraph',
      html: 'Hesaplayıcımız oranları otomatikleştirir, böylece siz tutkuya ve tekniğe odaklanabilirsiniz.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
