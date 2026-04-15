import type { ToolLocaleContent } from '../../../types';

const title = 'Malzeme Ölçekleyici Tarif Ayarlama';
const description = 'Tarifleri porsiyon sayısına göre otomatik olarak ölçeklendirin. Tarifinizi çarparak veya azaltarak malzeme miktarlarını karmaşa olmadan hesaplayın.';

const faq = [
  {
    question: 'Dönüştürmə faktörüm neden ondalık sayılar içeriyor?',
    answer: 'Çünkü mutfak oranları her zaman tam sayı değildir. 4 kişilik bir tarifi 7 kişiye çıkarırsanız, faktör tam olarak 1.75 olur. Malzemeler, küsuratlı olsa bile bu sayıyla çarpılır. Bu, rastgele yuvarlamaktan daha doğrudur.',
  },
  {
    question: '"1/2 çay kaşığı tuz" girersem ne olur?',
    answer: 'Araç önce sayıyı arar. "1"i miktar, "/2"yi ise birimin parçası olarak tanır. Sonuç "0.5" olur ve doğru şekilde ölçeklenir. "1/2" gibi kesirler için doğrudan "0.5" girebilirsiniz (daha net olur) veya araç bunu bölme işlemi olarak yorumlar.',
  },
  {
    question: 'Nihai sonuçları yuvarlamalı mıyım?',
    answer: 'Malzemeye bağlıdır. Un için evet. Mayalar veya baharatlar için hassasiyet daha az önemlidir (belirtilenin %75\'ine ölçeklendirin). Yumurtalar için: 2.3 alırsanız, 2 tam + üçüncünün bir kısmını (tartarak) kullanın veya yemek uygunsa 2\'ye yuvarlayın.',
  },
  {
    question: 'Porsiyonları değiştirdiğimde sonuç neden değişmiyor?',
    answer: 'Malzeme alanının boş olmadığından emin olun. Boşsa ölçeklendirecek bir şey yoktur. Ayrıca malzemelerinizdeki sayıların tanınabilir olduğunu kontrol edin (örn: "500g", "1/2 çay kaşığı").',
  },
  {
    question: 'İngiliz ölçü birimleriyle (ons, fincan) çalışır mı?',
    answer: 'Teknik olarak evet, araç sayıları okur ve ölçeklendirir. Ancak fincan ölçülerinde hassasiyet sınırlıdır (tutarsız hacim). Ölçeklendirmeden önce grama çevirmeniz önerilir.',
  },
];

const howTo = [
  {
    name: 'Porsiyonlarınızı girin',
    text: '"Orijinal" alanına tarifin kaç kişilik tasarlandığını girin. "İstenen" alanına kaç kişilik pişireceğinizi yazın.',
  },
  {
    name: 'Malzeme listenizi yapıştırın',
    text: 'Listenizi olduğu gibi kopyalayıp yapıştırın. Her malzeme bir satıra. Araç, baştaki sayıları (500g, 1/2, 2.5) tanır ve otomatik olarak ölçeklendirir.',
  },
  {
    name: 'Bağlama göre ayarlayın',
    text: 'Sonuçlar matematiksel olarak kesindir, ancak yemek yapmak bir sanattır. Baharatlar: %75\'e ölçeklendirin. Mayalar: büyük miktarlarda teorik değerden az kullanın. Pişirme süreleri asla ölçeklendirilmez.',
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
  operatingSystem: 'All',
};

export const content: ToolLocaleContent = {
  slug: 'malzeme-olcekleyici',
  title,
  description,
  ui: {
    servings: 'Porsiyonlar',
    original: 'Orijinal',
    desired: 'İstenen',
    multiplyingFactor: 'Çarpan Faktörü',
    ingredientsList: 'Malzeme Listesi',
    pasteHere: 'Listenizi buraya yapıştırın.',
    exampleLine1: 'Örn:',
    exampleLine2: '500g Un',
    exampleLine3: '300ml Su',
    exampleLine4: '10g Tuz',
    result: 'Sonuç',
    copy: 'Kopyala',
    copied: 'Kopyalandı!',
    emptyState: 'Ayarlanmış malzemeleriniz burada görünecek...',
    defaultIngredient1: '200g Un',
    defaultIngredient2: '100ml Süt',
    defaultIngredient3: '2 Yumurta',
  },
  faqTitle: 'Sıkça Sorulan Sorular',
  faq,
  bibliographyTitle: 'Kaynakça',
  bibliography: [
    {
      name: 'Harold McGee - On Food and Cooking: The Science and Lore of the Kitchen',
      url: 'https://en.wikipedia.org/wiki/Harold_McGee',
    },
    {
      name: 'The Flavor Bible by Karen Page and Andrew Dornenburg',
      url: 'https://www.flavorprints.com/',
    },
    {
      name: 'Modernist Cuisine - Bilimsel ölçeklendirme teknikleri',
      url: 'https://www.modernistcuisine.com/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Tarif Ölçeklendirme ve Dönüştürme İçin Usta Rehberi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Malzeme ölçeklendirme</strong>, profesyonel mutfaktaki en kritik ve hataya açık görevlerden biridir. Bu sadece sayıları çarpmak değil, gıdaların kimyasının ve fiziğinin hacim ve yüzey alanı değişimlerine nasıl tepki verdiğini anlamaktır.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: 'x1.75',
          label: '4\'ten 7 kişiye faktör',
          icon: 'mdi:calculator',
        },
        {
          value: '75%',
          label: 'Baharat Ayarı',
          icon: 'mdi:shaker-outline',
        },
        {
          value: '0%',
          label: 'Süre Ölçekleme',
          icon: 'mdi:timer-off',
        },
        {
          value: '100g',
          label: 'Referans Bazı',
          icon: 'mdi:weight-gram',
        },
      ],
    },
    {
      type: 'title',
      text: 'Doğrusal ve Bağlamsal Ölçeklendirme Farkları',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Matematiksel Doğrusal Ölçekleme',
          icon: 'mdi:math-log',
          description: 'Elde edilen dönüştürme faktörü ile tüm değerlerin doğrudan çarpılması.',
          points: [
            'Un ve temel sıvılar için mükemmeldir',
            'Hassas pastacılık için idealdir',
            'Küçük değişikliklerde iyi çalışır (x2, x0.5)',
            'Otomatik hesaplanması kolaydır',
          ],
        },
        {
          title: 'Mutfak Bağlamsal Ölçekleme',
          icon: 'mdi:chef-hat',
          description: 'Tat doygunluğu ve buharlaşmaya dayalı oran ayarlaması.',
          highlight: true,
          points: [
            'Aşırı tuz ve baharat kullanımını önler',
            'Buharlaşma yüzey alanını dikkate alır',
            'Mayaları kütleye göre ayarlar',
            'Şefin deneyimini ve yargısını gerektirir',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Konuk Sayısına Göre Dönüştürme Faktörleri',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Şu Porsiyondan', 'Şu Porsiyona', 'Faktör (FC)', 'Zorluk Derecesi'],
      rows: [
        ['2 kişi', '4 kişi', 'x 2.0', 'Düşük (Doğrusal)'],
        ['4 kişi', '6 kişi', 'x 1.5', 'Düşük (Doğrusal)'],
        ['4 kişi', '10 kişi', 'x 2.5', 'Orta (Baharatlara dikkat)'],
        ['4 kişi', '25 kişi', 'x 6.25', 'Yüksek (Bağlamsal)'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Bir Tarifi İki Katına Çıkarırken Sık Karşılaşılan Sorunlar',
      html: 'Ölçeklendirmeden sonra tadın çok yoğun olduğunu fark ederseniz (özellikle acı veya tuz), bu spesifik malzemelerin ölçeklemesini %75\'e indirin. Pişirme süresini asla iki katına çıkarmayın; iç sıcaklık parçanın kalınlığına göre belirlenir, toplam ağırlığa göre değil.',
    },
    {
      type: 'title',
      text: 'Standardizasyon Terminolojisi Sözlüğü',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Dönüştürme Faktörü',
          definition: 'Tüm malzemelerin çarpıldığı sayı: İstenen Miktar / Orijinal Miktar.',
        },
        {
          term: 'Pişme Kaybı',
          definition: 'Buharlaşma veya yağ kaybı nedeniyle bir malzemenin ağırlık kaybı.',
        },
        {
          term: 'Brüt ve Net Ağırlık',
          definition: 'Malzemenin temizlenmeden önceki ve sonraki ağırlığı.',
        },
        {
          term: 'Verim',
          definition: 'Ölçeklendirme ve pişirme sonrası bitmiş ürünün toplam miktarı.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Çırpılmış Yumurta Hilesi',
      html: 'Hesaplayıcı 2.3 yumurta gösteriyorsa, bir tam yumurtayı çırpın, tartın ve sadece %30\'unu kullanın. İnce pastacılıkta hassasiyeti korumanın tek yolu budur.',
    },
    {
      type: 'paragraph',
      html: 'Aracımız matematiği basitleştirir, böylece enerjinizi asıl önemli olan şeye ayırabilirsiniz: yaratıcılık ve lezzet.',
    },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
