import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Yağ Dumanlanma Noktası Takipçisi: Kızartma Yağının Ömrü ve Bozulma Tahmincisi';
const description = 'Kızartma yağınızın kalitesini izleyin ve mevcut dumanlanma noktası düşüşlerini tahmin edin. Zararlı polar bileşik birikimini önlemek için kullanım sayısını, sıcaklıkları ve besin türlerini takip edin.';

const faq = [
  {
    question: 'Kızartma yağının dumanlanma noktası neden zamanla düşer?',
    answer: 'Yağ her kızartma sıcaklığına ısıtıldığında, termal bozunma, hidroliz ve oksidasyon trigliseritleri serbest yağ asitlerine (SYA), monoasilgliserollere ve diasilgliserollere parçalar. Bu parçalanma ürünleri, sağlam trigliseritlere kıyasla çok daha düşük kaynama ve dumanlanma noktasına sahiptir ve tekrarlanan kullanımla yağın daha düşük sıcaklıklarda dumanlanmasına neden olur.',
  },
  {
    question: 'Polar bileşikler nedir ve neden düzenlenirler?',
    answer: 'Polar bileşikler (TPC), kızartma sırasında oluşan bozunma ürünleridir. Yağ ağırlığının %25\'ini aştıklarında, yağ bozulmuş, oksitlenmiş ve tüketilmesi zararlı kabul edilir; kötü tatlara ve potansiyel kardiyovasküler risklere yol açar. Birçok Avrupa ülkesi, TPC %25\'i aştığında kızartma yağının atılmasını yasal olarak zorunlu kılar.',
  },
  {
    question: 'Paneleme veya un, yağ bozulmasını nasıl etkiler?',
    answer: 'Paneleme, hamur kaplama ve gevşek un, sıcak yağa besin parçacıkları bırakır. Bu parçacıklar 180 santigrat derecenin üzerindeki sıcaklıklarda hızla kömürleşir ve karbonize olur, serbest yağ asitleri salarak termal bozunmayı hızlandıran katalizör görevi görür. Patates gibi temiz nişastalar yağı çok daha yavaş bozar.',
  },
  {
    question: 'Yağın yeniden kullanımı için güvenli sınır nedir?',
    answer: 'Genel bir kural olarak, kanola veya fıstık gibi rafine yüksek ısı yağları temiz koşullarda 5 ila 8 kez yeniden kullanılabilir. Ancak rafine edilmemiş yağlar veya 190 santigrat derecenin üzerindeki sıcaklıklara ya da panelenmiş besinlere maruz kalan yağlar 1 ila 3 kullanımdan sonra atılmalıdır.',
  },
];

const howTo = [
  {
    name: 'Kızartma Yağı Türünü Seçin',
    text: 'Veritabanı listesinden yağınızı seçin. Yüksek ısı rafine yağları, rafine edilmemiş seçeneklere göre daha yüksek bir başlangıç dumanlanma noktasına sahiptir.',
  },
  {
    name: 'Kızartma Döngülerini Takip Edin',
    text: 'Mevcut yağ partisinin geçirdiği toplam kızartma seansı sayısını girin.',
  },
  {
    name: 'Kızartma Sıcaklığını Girin',
    text: 'Kızartma seanslarınızın ortalama sıcaklığına uyacak şekilde kaydırıcıyı ayarlayın. 180 santigrat derecenin üzerindeki sıcaklıklar bozunmayı hızlandırır.',
  },
  {
    name: 'Besin Kaplama Türünü Belirleyin',
    text: 'Temiz nişastalar mı yoksa karbonize kalıntı bırakan unlu/panelenmiş besinler mi kızarttığınızı belirtin.',
  },
  {
    name: 'Dumanlanma Noktasını ve Atılma Durumunu Kontrol Edin',
    text: 'Bozulmuş dumanlanma noktasını ve atma göstergesini inceleyin. Yağ sağlığı kritik bölgeye girerse hemen atın.',
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent = {
  slug: 'yag-dumanlanma-noktasi-takip',
  title: 'Yağ Dumanlanma Noktası Takipçisi',
  description: 'Kızartma yağınızın kalitesini izleyin ve mevcut dumanlanma noktası düşüşlerini tahmin edin. Zararlı polar bileşik birikimini önlemek için kullanım sayısını, sıcaklıkları ve besin türlerini takip edin.',
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
    oilPresetLabel: 'Kızartma Yağı Türü',
    presetAvocadoRefined: 'Avokado Yağı (Rafine)',
    presetSunflowerRefined: 'Ayçiçek Yağı (Rafine)',
    presetPeanutRefined: 'Fıstık Yağı (Rafine)',
    presetCanolaRefined: 'Kanola Yağı (Rafine)',
    presetOliveEV: 'Sızma Zeytinyağı',
    presetOlivePomace: 'Pirina Zeytinyağı',
    presetCoconutUnrefined: 'Hindistan Cevizi Yağı (Rafine Edilmemiş)',
    presetSunflowerUnrefined: 'Ayçiçek Yağı (Rafine Edilmemiş)',
    usesLabel: 'Kızartma Döngüsü (Kullanım)',
    tempLabel: 'Kızartma Sıcaklığı',
    foodTypeLabel: 'Besin Hazırlığı / Kaplama',
    optionStarch: 'Temiz Nişasta (Patates, Patates Kızartması)',
    optionBreading: 'Unlu, Hamurlu veya Panelenmiş Besinler',
    baseSmokePointLabel: 'Baz Dumanlanma Noktası',
    currentSmokePointLabel: 'Bozulmuş Dumanlanma Noktası',
    polarCompoundsLabel: 'Polar Bileşikler (TPC)',
    polymerizationLabel: 'Yağ Polimerizasyon Sağlığı',
    statusLabel: 'Yağ Güvenlik Profili',
    statusGood: 'TEKRAR KULLANILABİLİR',
    statusCaution: 'DİKKAT - YAKINDA FİLTRELEYİN',
    statusDiscard: 'DERHAL ATIN',
    adviceGood: 'Yağ özellikleri kararlıdır. Kızartmaya devam edin, ancak soğuduktan sonra kalan besin parçacıklarını filtreleyin.',
    adviceCaution: 'Bozunma başlamıştır. Dumanlanma noktası düşmüştür. Filtrelemenizi ve yalnızca bir kez daha kullanmanızı öneririz.',
    adviceDiscard: 'Kritik bozunmaya ulaşıldı. Yüksek polar bileşik konsantrasyonu. Acılaşmayı ve sağlık risklerini önlemek için atın.',
    gaugeSafe: 'Güvenli',
    gaugeCaution: 'Dikkat',
    gaugeDiscard: 'Atın',
    limitLabel: 'Limit',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Kızartma Kimyası: Yağlar Neden Bozulur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kızartma, kimyasal açıdan en yoğun pişirme tekniklerinden biridir. Besin yüksek sıcaklıklarda (tipik olarak 160 ila 190 santigrat derece) yağa daldırıldığında, yağ aynı anda ısıya, besinden gelen neme ve havadan oksijene maruz kalır. Bu, üç farklı kimyasal reaksiyonu tetikler: hidroliz (suyun ester bağlarını parçalaması), oksidasyon (oksijenin hidroperoksitler oluşturması) ve polimerizasyon (bozulmuş moleküllerin kalın, viskoz zincirler halinde bağlanması). Bu reaksiyonlar ilerledikçe, toplam polar bileşik (TPC) konsantrasyonu artar ve yağın parçalanmaya ve dumanlanmaya başladığı sıcaklık önemli ölçüde düşer.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '%25 TPC', label: 'Yasal Atma Sınırı', icon: 'mdi:alert-octagon' },
        { value: '180°C', label: 'Kritik Sıcaklık Eşiği', icon: 'mdi:thermometer-alert' },
        { value: '2,2x', label: 'Paneleme Bozunma Hızı', icon: 'mdi:chart-timeline-variant' },
        { value: 'SYA', label: 'Serbest Yağ Asitleri Sebebi', icon: 'mdi:molecule' },
      ],
    },
    {
      type: 'title',
      text: 'Polar Bileşikler ve Sağlık Düzenlemeleri',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Toplam Polar Bileşikler (TPC), kızartma yağlarının bozunma seviyesini ölçmek için uluslararası standart olarak kullanılır. Profesyonel mutfaklarda, %25\'i aşan TPC konsantrasyonuna sahip yağın kullanılması, güvenlik endişeleri nedeniyle birçok ülkede yasal olarak yasaktır. Bu polar bileşikler emilim engelleyicidir, pişirme verimliliğini azaltır ve kızarmış kabuğun gevrekliğini bozar. Daha da önemlisi, oksitlenmiş yağı düzenli olarak tüketmek, kardiyovasküler sorunlarla ilişkilendirilen serbest radikallerin ve toksik bileşiklerin alımına katkıda bulunur.',
    },
    {
      type: 'title',
      text: 'Yağ Türlerinin Karşılaştırması: Başlangıç Dumanlanma Noktaları',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Rafine Yağlar (Yüksek Isı)',
          icon: 'mdi:shield-check',
          description: 'Uçucu bileşikleri, serbest yağ asitlerini ve safsızlıkları gidermek için işlenmiş yağlar. Olağanüstü yüksek başlangıç dumanlanma noktalarına sahiptirler.',
          points: ['Rafine Avokado: 270°C / 518°F', 'Rafine Ayçiçek: 232°C / 450°F', 'Rafine Fıstık: 232°C / 450°F', 'Başlangıç bozunmasına karşı yüksek direnç'],
        },
        {
          title: 'Rafine Edilmemiş Yağlar (Düşük Isı / Aromatik)',
          icon: 'mdi:leaf',
          description: 'Yüksek miktarda doğal element, mineral ve serbest yağ asidi içeren soğuk pres veya natürel yağlar.',
          highlight: true,
          points: ['Sızma Zeytinyağı: 190°C / 374°F', 'Rafine Edilmemiş Hindistan Cevizi: 177°C / 350°F', 'Rafine Edilmemiş Ayçiçek: 107°C / 225°F', 'Isı altında son derece hızlı bozunur'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Kızartma Yağı Dumanlanma Noktası ve Maksimum Yeniden Kullanım Referans Tablosu',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Yağ Çeşidi', 'Baz Dumanlanma Noktası (°C)', 'Baz Dumanlanma Noktası (°F)', 'Durum / İşleme', 'Önerilen Maks. Kullanım'],
      rows: [
        ['Avokado Yağı (Rafine)', '270°C', '518°F', 'Rafine', '10 ila 12 kullanım'],
        ['Pirina Zeytinyağı', '238°C', '460°F', 'Rafine', '8 ila 10 kullanım'],
        ['Ayçiçek Yağı (Rafine)', '232°C', '450°F', 'Rafine', '6 ila 8 kullanım'],
        ['Fıstık Yağı (Rafine)', '232°C', '450°F', 'Rafine', '6 ila 8 kullanım'],
        ['Kanola Yağı (Rafine)', '204°C', '400°F', 'Rafine', '5 ila 7 kullanım'],
        ['Sızma Zeytinyağı', '190°C', '374°F', 'Soğuk Pres', '2 ila 3 kullanım'],
        ['Hindistan Cevizi Yağı (Rafine Edilmemiş)', '177°C', '350°F', 'Rafine Edilmemiş', '1 ila 2 kullanım'],
        ['Ayçiçek Yağı (Rafine Edilmemiş)', '107°C', '225°F', 'Rafine Edilmemiş', 'Kızartma için kullanmayın'],
      ],
    },
    {
      type: 'title',
      text: 'Bozulmuş Yağın Kritik Uyarı İşaretleri',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Tehlike: Kızartma Yağı Toksik Hale Geldiğinde',
      html: 'Aşağıdaki belirtilerden herhangi birini gözlemlerseniz yağı yeniden kullanmaya devam etmeyin: <strong>acılaşmış veya sabunsu koku</strong>, koyu ve bulanık bir renk veya besin etrafında <strong>aşırı köpürme</strong>. Yağ normal pişirme sıcaklıklarında (170-180°C) dumanlanmaya başlarsa, bu Serbest Yağ Asitlerinin (SYA) aşırı birikimi nedeniyle dumanlanma noktasının düştüğünü gösterir. Bozulmuş yağla pişirmek, toksik polar bileşikleri ve kanserojen unsurları besinlerinize aktararak hem lezzete hem de sağlığa zarar verir.',
    },
    {
      type: 'title',
      text: 'Kızartma Yağı Kalitesini Nasıl Uzatırsınız',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Karbonize Kalıntıları Hemen Filtreleyin',
      html: 'Hamurlu veya unlu besinleri kızartmak, fritözün dibine çöken mikro parçacıklar bırakır. Bu parçacıklar pişirme sırasında kömürleşmeye devam ederek yağ bozunmasını hızlandıran katalizör görevi görür. Bu süreci yavaşlatmak için, kızartma sırasında her zaman yüzeyi sıyırın ve <strong>soğumuş yağı</strong> her kızartma seansından sonra ince bir süzgeç, tülbent veya kahve filtresinden geçirin. Filtrelenmiş yağı karanlık, serin bir yerde kapalı bir cam kapta saklayın.',
    },
    {
      type: 'title',
      text: 'Kızartma İçin En İyi Uygulamalar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Besin yüzeylerini iyice kurulayın</strong> - Aşırı nem hızlı hidrolizi tetikleyerek yağı serbest yağ asitlerine parçalar.',
        '<strong>Kızartmadan önce tuzlamaktan kaçının</strong> - Tuz, yağ oksidasyonunu hızlandıran bir katalizör görevi görür; besinleri sıcak yağdan çıkardıktan hemen sonra baharatlayın.',
        '<strong>Optimum sıcaklıkları koruyun</strong> - 170°C ile 180°C arasında kalın. Daha yükseğe çıkmak termal bozunmayı hızlandırırken, daha düşüğe inmek besinin aşırı yağ çekmesine neden olur.',
        '<strong>Eski yağa taze yağ eklemeyin</strong> - Taze yağı bozulmuş yağla karıştırmak, yeni yağı yenilemek yerine bozunmasını hızlandırır.',
      ],
    },
    {
      type: 'title',
      text: 'Kızartma ve Lipid Bozunması Sözlüğü',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Dumanlanma Noktası', definition: 'Bir yağ veya katı yağın sürekli olarak parçalanmaya başladığı ve akrolein salarak görünür mavimsi duman ürettiği sıcaklık.' },
        { term: 'Toplam Polar Bileşikler (TPC)', definition: 'Yağ bozunmasının küresel standart göstergesi; oksitlenmiş bileşiklerin, SYA\'ların ve polimerlerin toplam ağırlık yüzdesini temsil eder.' },
        { term: 'Hidroliz', definition: 'Su moleküllerinin trigliseritleri serbest yağ asitlerine ve gliserole parçaladığı kimyasal bir reaksiyon. Besin nemi tarafından tetiklenir.' },
        { term: 'Polimerizasyon', definition: 'Isıdan zarar görmüş yağ moleküllerinin bir araya gelerek büyük makromoleküler yapılar oluşturduğu ve yağ viskozitesini artırdığı süreç.' },
        { term: 'Serbest Yağ Asitleri (SYA)', definition: 'Hidroliz sırasında trigliseritlerden salınan karboksilik asitler. Yağın başlangıç dumanlanma noktasını doğrudan düşürürler.' },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
