import type { ToolLocaleContent } from "../../../types";

const title = "Denge Salamura Hesaplayıcı";
const description = "Sulu etler ve mükemmel fermente ürünler için denge bilimi. Ürün ve suyun toplam ağırlığına göre tam tuzluluk oranını hesaplayın.";
const faq = [
  {
    question: "Denge salamura yöntemi nedir?",
    answer: "Denge yöntemi, tuzu sadece su miktarına göre değil, toplam ağırlığa (su + ürün) göre hesaplar. Bu, kullandığınız ürün miktarından bağımsız olarak tutarlı bir tuz konsantrasyonu garanti eder.",
  },
  {
    question: "Turşu yapmak için ne kadar tuz gerekir?",
    answer: "Fermente sebzeler (salatalık, lahana turşusu, kimchi) için %2 ile %3 arası tuz önerilir. Etler için ise %1,5 ile %2 arası idealdir. Hesaplayıcı, malzemelerinizin ağırlığına göre size tam miktarı verir.",
  },
  {
    question: "Salamuradan sonra eti dondurabilir miyim?",
    answer: "Evet, bu idealdir. Salamura, dondurucu yanığına karşı koruma sağlar ve et çözüldüğünde pişirmeye hazır olur. Ancak fermente sebzeleri dondurmaktan kaçının, çünkü püre haline gelirler.",
  },
  {
    question: "Salamuraya neden şeker eklenir?",
    answer: "Şekerin iki işlevi vardır: Etlerde Maillard reaksiyonunu (kahverengileşme) kolaylaştırır ve ürünü şekerli yapmadan tuz tadını dengeler. Salamuranızı bir tatlıya dönüştürmez.",
  },
];
const howTo = [
  {
    name: "Hedefinizi belirleyin",
    text: "Et salamurası (%1,5-2), fermente (%2-3), sos (%3,5) veya uzun süreli konserve (%5+) yapıp yapmayacağınıza karar verin. Her birinin süresi ve amacı farklıdır.",
  },
  {
    name: "Ürünü ve suyu tartın",
    text: "Ürünü (et, sebze) ve suyu tam olarak tartın. Hassasiyet kritiktir: 5 gramlık bir fark bile sonucu değiştirir. Hassas terazi kullanın.",
  },
  {
    name: "Araçla hesaplayın",
    text: "Ağırlıkları hesaplayıcıya girin ve ürün türünüze göre tuzluluk oranını ayarlayın. Araç size tam olarak ne kadar tuz ve şeker gerektiğini söyleyecektir.",
  },
  {
    name: "Çözün ve karıştırın",
    text: "Ürünü eklemeden önce tuzu soğuk suda tamamen çözün. Etler için salamuranın her yerini kapladığından emin olun. Fermenteler için ürün suyun altında kalmalıdır.",
  },
  {
    name: "Fermente edin veya dinlendirin",
    text: "Türe göre buzdolabında bekletin: Etler için 4-48 saat, fermenteler için 1-3 hafta. Tam süre sıcaklığa ve kişisel zevkinize bağlıdır.",
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
  slug: "salamura",
  title: "Denge Salamura Hesaplayıcı",
  description: "Sulu etler ve mükemmel fermente ürünler için denge bilimi. Ürün ve suyun toplam ağırlığına göre tam tuzluluk oranını hesaplayın.",
  ui: {
    calculator: "Hesaplayıcı",
    subtitle: "Mükemmel dengeyi hesaplamak için ağırlıkları girin.",
    productWeight: "Ürün Ağırlığı (g)",
    waterWeight: "Su Ağırlığı (g)",
    desiredSalinity: "İstenen Tuzluluk",
    meat: "Etler (%1,5)",
    fermented: "Fermenteler (%2,0)",
    sauces: "Soslar (%3,5)",
    preserves: "Konserveler (%5,0)",
    addSugar: "Şeker Ekle",
    sugarHint: "Tadı dengeler ve kızarmaya yardımcı olur (tuzun %50'si kadar)",
    saltNeeded: "Gerekli Tuz",
    sugarOptional: "Şeker (İsteğe Bağlı)",
    estimatedTime: "Tahmini Süre",
    product: "Ürün",
    total: "Toplam",
    unitGrams: "gram",
    timeMeatsLabel: "Süre (Etler)",
    timeMeatsDuration: "4 - 48 Saat",
    timeVegetablesLabel: "Süre (Sebzeler)",
    timeVegetablesDuration: "1 - 3 Hafta",
    timePreservesLabel: "Süre (Konserveler)",
    timePreservesDuration: "1+ Ay",
  },
  faqTitle: "Sıkça Sorulan Sorular",
  bibliographyTitle: "Kaynaklar ve Referanslar",
  faq,
  howTo,
  bibliography: [
    {
      name: "The Noma Guide to Fermentation - René Redzepi & David Zilber",
      url: "https://www.nomacph.com/",
    },
    {
      name: "Salt, Fat, Acid, Heat - Samin Nosrat",
      url: "https://www.saltfatacidheat.com/",
    },
    {
      name: "Pollan, Michael - Cooked",
      url: "https://michaelpollan.com/",
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Denge Salamura ve Fermantasyon Uzman Kılavuzu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Denge salamura</strong>, sulu ve güvenli sonuçlar garanti etmek için nihai tekniktir. Geleneksel yöntemlerin aksine, tuz miktarını su ve ürünün <strong>toplam ağırlığına</strong> göre hesaplayarak kap hacminden bağımsız olarak sabit bir tuzluluk sağlar.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '%1,5 - 2',
          label: 'İdeal Et Oranı',
          icon: 'mdi:food-steak',
        },
        {
          value: '%2,5 - 3',
          label: 'Fermente Oranı',
          icon: 'mdi:flask-outline',
        },
        {
          value: '18-22°C',
          label: 'Fermantasyon Sıcaklığı',
          icon: 'mdi:thermometer',
        },
        {
          value: '%0,5',
          label: 'Denge Şekeri',
          icon: 'mdi:shaker-outline',
        },
      ],
    },
    {
      type: 'title',
      text: 'Kuru ve Islak Salamura Arasındaki Farklar',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Kuru Salamura (Dry Brining)',
          icon: 'mdi:shaker-outline',
          description: 'Tuz, ilave su kullanmadan doğrudan ürünün yüzeyine uygulanır.',
          points: [
            'Kümes hayvanlarında çok daha çıtır deri',
            'Malzemenin daha yoğun aroması',
            'Buzdolabında daha az yer kaplar',
            'Biftekler ve bütün tavuklar için idealdir',
          ],
        },
        {
          title: 'Islak Salamura (Wet Brining)',
          icon: 'mdi:water',
          description: 'Ürün, denge prensibiyle hesaplanmış su ve tuz çözeltisine daldırılır.',
          highlight: true,
          points: [
            'Üstün nem transferi',
            'Aromalar (baharatlar) eklemeye izin verir',
            'Büyük parçalarda daha homojen kürleme',
            'Hindi, domuz fileto ve balıklar için idealdir',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Uygulamaya Göre Süreler ve Tuzluluk Oranları',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Kategori', 'Tuzluluk (%)', 'Minimum Süre', 'Ana Hedef'],
      rows: [
        ['Kümes Hayvanları ve Et', '%1,5 - %2,0', '12 - 24 saat', 'Suluk ve yumuşaklık'],
        ['Beyaz Balıklar', '%1,0 - %1,5', '20 - 45 dakika', 'Etin sıkılığı'],
        ['Laktik Fermantasyon', '%2,5 - %3,0', '7 - 21 gün', 'Mikrobiyolojik güvenlik'],
        ['Soslar ve Konserveler', '%3,5 - %5,0', '1+ ay', 'Uzun süreli koruma'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Salamurada Sorun Belirleme',
      html: 'Salamura kötü kokuyorsa (asidik değil, kokuşmuş), renkli küfler (siyah, pembe) oluşmuşsa veya ürün aşırı yumuşamışsa, atın. Beyaz yüzeysel küf (Kahm mayası) fermente ürünlerde normaldir ve temizlenebilir.',
    },
    {
      type: 'title',
      text: 'Kürleme Uzmanı Sözlüğü',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Osmoz',
          definition: 'Tuzun, konsantrasyonları dengelemek için gıda hücrelerine nüfuz ettiği fiziksel süreç.',
        },
        {
          term: 'Denatürasyon',
          definition: 'Tuzun proteinler üzerindeki etkisi; pişirme sırasında proteinlerin daha fazla su tutmasını sağlar.',
        },
        {
          term: 'Kahm Mayası',
          definition: 'Fermentelerin yüzeyinde bazen görünen ince beyaz tabaka; zararsızdır ancak asitlik eksikliğini gösterir.',
        },
        {
          term: 'Lakto-fermantasyon',
          definition: 'Bakterilerin şekerleri laktik aside dönüştürerek gıdayı koruduğu anaerobik fermantasyon.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Su Kalitesi',
      html: 'Fermantasyonlarınızdaki iyi bakterilerin büyümesini engelleyebileceği için çok klorlu musluk suyundan her zaman kaçının. Filtrelenmiş su kullanın veya suyu 24 saat dinlendirin.',
    },
    {
      type: 'paragraph',
      html: 'Denge hesaplayıcımız, tariflerinizdeki tahmin yürütme işini ortadan kaldırarak bir sektör profesyoneli güveniyle yemek yapmanızı sağlar.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
