import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Maillard Reaksiyonu Optimize Edici: pH ve Sıcaklık Kızartma Hesaplayıcısı';
const description = 'Maillard reaksiyonunu hızlandırmak için kilo başına tam olarak ne kadar karbonat eklemeniz gerektiğini hesaplayın. Güvenli alkalinite sınırları içinde kalarak sabunsu tatlardan kaçının.';

const faq = [
  {
    question: 'Maillard reaksiyonu nedir ve yemek pişirmede neden önemlidir?',
    answer: 'Maillard reaksiyonu, amino asitler ile indirgen şekerler arasında gerçekleşen ve kızarmış yiyeceğe kendine özgü lezzetini veren kimyasal bir reaksiyondur. Mühürlenmiş bifteğin kabuğundan, ekmeğin altın renginden, kavrulmuş kahveden ve karamelize soğandan sorumludur. Reaksiyon en hızlı 140°C ile 165°C arasında gerçekleşir.',
  },
  {
    question: 'Karbonat (sodyum bikarbonat) kızarmayı nasıl hızlandırır?',
    answer: 'Karbonat, yiyecek yüzeyinin pH değerini yükselterek daha alkali hale getirir. Maillard reaksiyonu alkali ortamlarda belirgin şekilde daha hızlı ilerler. pH\'ı 6\'dan 8\'e çıkarmak kızarma hızını iki veya üç katına çıkarabilir. Ancak fazla karbonat metalik, sabunsu bir tat bırakır  -  bu hesaplayıcının güvenli sınırları zorunlu kılmasının nedeni budur.',
  },
  {
    question: 'Kilogram yiyecek başına maksimum güvenli karbonat miktarı nedir?',
    answer: 'Genel güvenli sınır, kilogram yiyecek başına 1,5 gram karbonattır. Bu eşiğin ötesinde, kötü tat (metalik, sabunsu veya kimyasal tatlar) riski dramatik şekilde artar. Önerdiğimiz miktar, maksimumun yarısıdır ve minimum lezzet riskiyle önemli ölçüde kızarma hızlanması sağlar.',
  },
  {
    question: 'Sıcaklık Maillard reaksiyonu için çok düşük olursa ne olur?',
    answer: '110°C\'nin altında, esas olarak su buharlaşması gerçekleşir ve anlamlı bir Maillard kızarması olmaz. 110°C ile 140°C arasında kızarma yavaş gerçekleşir. Optimum sıcaklık aralığı 140°C ila 180°C\'dir. 180°C\'nin üzerinde piroliz başlar  -  yiyecek yanar ve arzu edilen kızarma aromaları yerine acı, yakıcı bileşikler üretir.',
  },
];

const howTo = [
  {
    name: 'Yiyeceğinizi tartın',
    text: 'Kızartmak istediğiniz yiyeceğin toplam ağırlığını gram cinsinden girin.',
  },
  {
    name: 'Pişirme sıcaklığını ayarlayın',
    text: 'Pişirme yüzeyi veya fırın sıcaklığınızı girin. Optimum Maillard bölgesi 140-180°C\'dir.',
  },
  {
    name: 'Karbonat miktarını ayarlayın',
    text: 'Kaydırıcı varsayılan olarak güvenli maksimumun yarısındadır. Dikkatli artırın  -  hesaplayıcı, tehlike bölgesine ulaşmadan önce sizi uyarır.',
  },
  {
    name: 'Tahmini pH ve hız çarpanını okuyun',
    text: 'Hesaplayıcı, seçtiğiniz pH seviyesinde kızarmanın varsayılan pH 6\'ya kıyasla ne kadar hızlı gerçekleştiğini gösterir.',
  },
  {
    name: 'Lezzet risk seviyesini kontrol edin',
    text: 'Lezzet göstergesi, tahmini yüzey pH\'ına göre güvenli, dikkat veya tehlike durumunu gösterir. En iyi sonuçlar için yeşil bölgede kalın.',
  },
  {
    name: 'Karbonatı eşit şekilde uygulayın',
    text: 'Önerilen miktarı az miktarda suda çözün ve pişirmeden önce yiyeceğe fırçayla sürün veya karıştırın. Eşit olmayan dağılım, düzensiz kızarmaya neden olur.',
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
  slug: 'maillard-reaksiyonu-optimize-edici',
  title: 'Maillard Reaksiyonu Optimize Edici',
  description: 'Maillard reaksiyonunu hızlandırmak için kilo başına tam olarak ne kadar karbonat eklemeniz gerektiğini hesaplayın. Güvenli alkalinite sınırları içinde kalarak sabunsu tatlardan kaçının.',
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
    title: 'Maillard Reaksiyonu Optimize Edici',
    headerLabel: 'Kızartma Kimyası',
    flavorSafe: 'Güvenli pH',
    flavorCaution: 'Dikkat: Alkali',
    flavorDanger: 'Tehlike: Sabunsu Tat Riski',
    unitLabel: 'Birimler',
    metricUnit: 'Metrik',
    imperialUnit: 'İmparatorluk',
    weightLabel: 'Yiyecek Ağırlığı',
    weightUnit: 'g',
    weightOz: 'oz',
    tempLabel: 'Yüzey Sıcaklığı',
    tempUnit: '°C',
    degreesF: '°F',
    tempLow: 'Yavaş: {min} - {max}',
    tempOpt: 'Optimal: {min} - {max}',
    tempHigh: 'Piroliz: >{min}',
    sodaLabel: 'Karbonat',
    sodaUnit: 'g',
    sodaOz: 'oz',
    sodaNote: 'Güvenli maksimumun yarısı, hafif kızarma desteği',
    sodaCautionNote: 'Maksimuma yaklaşılıyor, tadı yakından izleyin',
    sodaDangerNote: 'Güvenli maksimumu aşıyor, sabunsu tat riski',
    sodaRecommended: 'Önerilen Karbonat',
    sodaMax: 'Güvenli Maksimum',
    speedLabel: 'Reaksiyon Hızı',
    browningLabel: 'Kızarma İlerlemesi',
    rawLabel: 'Çiğ',
    goldenLabel: 'Altın',
    burntLabel: 'Yanmış',
    phEstimated: 'Tah. Yüzey pH',
    timeSaved: 'Kazanılan Süre',
    errorTempTooLow: 'Sıcaklık 110°C\'nin altında. Maillard reaksiyonunun başlaması için en az 110°C gerekir. Bu eşiğin altında, anlamlı bir kızarma olmadan sadece su buharlaşması gerçekleşir.',
    errorWeightTooLow: 'Yiyecek ağırlığı 0g\'dan büyük olmalıdır.',
    footerTemplate: '<span class="mr-footer-stat"><strong>{weight}</strong><small>{wunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{temp}</strong><small>{tunit}</small> sıcaklıkta</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{soda}</strong><small>{sunit}</small> karbonat</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">x<strong>{multiplier}</strong> hız</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{timeSaved}</strong>% tasarruf</span>',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Maillard Reaksiyonu Optimize Edici: Kızartma Biliminde Ustalaşın',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Maillard reaksiyonu, tuzlu yemek pişirmenin Kutsal Kasesidir. Mühürlenmiş bifteğin, altın ekmek kabuğunun ve karamelize soğanın derin, karmaşık lezzetlerini yaratır. Adını Fransız kimyager Louis-Camille Maillard\'dan alan bu reaksiyon, amino asitler ile indirgen şekerler arasında yüzlerce lezzet bileşiği üretir. Karbonat ile pH\'ı değiştirerek, yakmadan kızarma hızını <strong>iki veya üç katına</strong> çıkarabilirsiniz. Bu hesaplayıcı tam olarak ne kadar kullanacağınızı gösterir ve sabunsu bölgeye geçmeden önce sizi uyarır.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '~140°C', label: 'Maillard aktivasyon sıcaklığı', icon: 'mdi:thermometer' },
        { value: '2-3x', label: 'pH 8\'de hız artışı', icon: 'mdi:speedometer' },
        { value: '1,5 g/kg', label: 'Maks. güvenli karbonat', icon: 'mdi:scale' },
        { value: 'pH 8,5', label: 'Sabunsu tat eşiği', icon: 'mdi:alert-circle' },
      ],
    },
    {
      type: 'title',
      text: 'Yiyecek Ağırlığına Göre Karbonat Dozaj Tablosu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Yaygın yiyecek ağırlıkları için önerilen ve maksimum karbonat miktarlarını hızlıca belirlemek için bu referans tablosunu kullanın. Önerilen miktar, <strong>güvenli maksimumun yarısıdır</strong> ve minimum lezzet riskiyle gözle görülür kızarma hızlanması sağlar.',
    },
    {
      type: 'table',
      headers: ['Yiyecek Ağırlığı', 'Önerilen (g)', 'Güvenli Maks. (g)', 'Tah. pH', 'Hız Artışı'],
      rows: [
        ['250g (1 soğan)', '0,19 g', '0,38 g', '6,5', 'x1,2'],
        ['500g (2 soğan)', '0,38 g', '0,75 g', '6,5', 'x1,2'],
        ['750g (3 soğan)', '0,56 g', '1,13 g', '6,5', 'x1,2'],
        ['1000g (1 kg)', '0,75 g', '1,50 g', '7,0', 'x1,6'],
        ['1500g', '1,13 g', '2,25 g', '7,0', 'x1,6'],
        ['2000g', '1,50 g', '3,00 g', '7,0', 'x2,0'],
        ['3000g', '2,25 g', '4,50 g', '7,0', 'x2,0'],
        ['5000g', '3,75 g', '7,50 g', '7,0', 'x2,0'],
      ],
    },
    {
      type: 'title',
      text: 'Yüzey pH\'ını ve Kızarma Üzerindeki Etkisini Anlamak',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Nötr pH (6,0)',
          icon: 'mdi:water',
          description: 'Çoğu çiğ et ve sebzenin doğal pH\'ı. Maillard reaksiyonu temel hızda ilerler.',
          highlight: false,
          points: ['Reaksiyon hızı: x1,0 (temel)', 'Tamamen doğal, katkısız', 'En iyisi: püristler, geleneksel yöntemler', 'Daha yavaş kızarma, pişkinliği kontrol etmek için daha fazla zaman'],
        },
        {
          title: 'Hafif Alkali (pH 7,0 ila 7,5)',
          icon: 'mdi:flask-round-bottom',
          description: 'Önerilen karbonat miktarıyla elde edilir. Lezzet etkisi olmadan gözle görülür hız artışı.',
          highlight: true,
          points: ['Reaksiyon hızı: x1,5-2,0', 'Kg başına ½ çay kaşığı (yak. 0,75g)', 'En iyisi: karamelize soğan, fırın sebzeler', 'Çoğu ev aşçısı için ideal nokta'],
        },
        {
          title: 'Yüksek Alkali (pH 8,0 ila 8,5)',
          icon: 'mdi:alert',
          description: 'Lezzet kusurları ortaya çıkmadan önceki maksimum pratik alkalinite. Kızarma hızını ikiye katlar ancak dikkatli izleme gerektirir.',
          highlight: false,
          points: ['Reaksiyon hızı: x2,0-3,0', 'Kg başına 1 çay kaşığı (yak. 1,5g)', 'En iyisi: koyu pretzel kabukları, aşırı karamelizasyon', 'Servis etmeden önce tadın  -  sabunsu sınırda'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Sıcaklık Bölgeleri ve Kızarma İçin Anlamları',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sıcaklık, Maillard reaksiyonu için diğer kritik değişkendir. Her bölge temelde farklı sonuçlar üretir. Bu eşikleri anlamak, pişirme hedefiniz için doğru ısı seviyesini seçmenize yardımcı olur.',
    },
    {
      type: 'table',
      headers: ['Bölge', 'Sıcaklık Aralığı', 'Ne Olur', 'En İyisi İçin'],
      rows: [
        ['Buharlaşma', '110°C Altı', 'Su buharlaşır, kızarma olmaz', 'Sous vide, haşlama, buharda pişirme'],
        ['Yavaş Kızarma', '110-139°C', 'Maillard yavaşça başlar, hafif renk gelişimi', 'Yavaş kavrulmuş domates, düşük sıcaklıkta kurutma'],
        ['Optimal Bölge', '140-180°C', 'Yakmadan maksimum kızarma hızı', 'Mühürleme, fırınlama, kızartma, pişirme'],
        ['Piroliz', '180°C Üstü', 'Yanma başlar, acı yakıcı bileşikler oluşur', 'Lezzet vurgusu için hızlı kömürleştirme (idareli kullanın)'],
      ],
    },
    {
      type: 'title',
      text: 'Yaygın Maillard Hataları ve Nasıl Düzeltilir',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Çok fazla karbonat eklemek',
      html: 'Karbonatta fazlası daha iyi değildir. Kilogram yiyecek başına 1,5g\'ı aşmak metalik, sabunsu veya kimyasal bir tat bırakır. Aşırı alkalinitenin ürettiği lezzet bileşikleri, doğru Maillard kızarmasının zengin, tuzlu notalarıyla aynı değildir. <strong>Hesaplayıcının gösterdiği önerilen miktara sadık kalın.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Çok düşük sıcaklıkta pişirmek',
      html: '110°C\'nin altında, esasen yiyeceğinizi buharda pişiriyor veya kurutuyorsunuz  -  kızartmıyorsunuz. Maillard reaksiyonunun bir minimum aktivasyon sıcaklığı vardır. Derin, karmaşık lezzetler istiyorsanız, <strong>yiyeceğin yüzeyi en az 140°C\'ye ulaşmalıdır.</strong> Mühürleme, ızgara veya 180°C üzeri fırın gibi yüksek ısıda bir pişirme yöntemi kullanın.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Nemi göz ardı etmek',
      html: 'Su, Maillard reaksiyonunun düşmanıdır. Islak yüzeyler, su buharlaşana kadar 100°C\'yi aşamaz. Mühürlemeden önce <strong>yiyeceği her zaman tamamen kurulayın.</strong> Karbonat yardımcı olur çünkü hücre duvarlarını parçalayarak yüzey suyunun buharlaşmasını da hızlandırır, ancak gözle görülür şekilde ıslak yiyeceğin üstesinden gelemez. Kuru yüzeyler = daha iyi kızarma.',
    },
    {
      type: 'title',
      text: 'Mükemmel Kızarma İçin Profesyonel İpuçları',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Karbonat Bulamacı Tekniği',
      html: 'Kuru karbonatı asla doğrudan yiyeceğin üzerine serpmeyin  -  eşit dağılmaz. Ölçülen miktarı 1-2 yemek kaşığı ılık suda çözün, ardından bulamacı yiyeceğe fırçayla sürün veya karıştırın. Bu, eşit ve tutarlı kızarma için tüm yüzeyde homojen alkalinite sağlar.',
    },
    {
      type: 'tip',
      title: 'Karbonatı Kuru Tuzlama ile Eşleştirin',
      html: 'Karbonat ve tuz sinerjik çalışır. Eti pişirmeden 1-24 saat önce tuzla kuru olarak marine edin, ardından karbonat bulamacını ateşe temas etmeden hemen önce uygulayın. Tuz, Maillard reaksiyonuna katılan proteinleri çekerken, karbonat onu hızlandırır. Bu kombinasyon en derin, en zengin kabuğu üretir.',
    },
    {
      type: 'tip',
      title: 'Soğan Karamelizasyon Hilesi',
      html: 'Bir tutam karbonat (büyük soğan başına 0,3g), karamelizasyon süresini 45 dakikadan 20 dakikaya düşürebilir. Alkali ortam, soğan hücre duvarlarını daha hızlı parçalayarak Maillard reaksiyonunu besleyen şekerleri ve amino asitleri serbest bırakır. Ancak hassas olun  -  fazla karbonat, soğanı kimyasal bir tat bırakan lapaya dönüştürür.',
    },
    {
      type: 'title',
      text: 'Temel Kızarma Terimleri Sözlüğü',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Maillard Reaksiyonu', definition: 'Pişmiş yiyeceklerde kahverengi rengi ve karmaşık tuzlu lezzetleri oluşturan, amino asitler ile indirgen şekerler arasındaki enzimatik olmayan kimyasal reaksiyon. 110°C\'nin üzerinde gerçekleşir ve karamelizasyondan farklıdır.' },
        { term: 'Piroliz', definition: 'Organik maddenin yüksek sıcaklıklarda (180°C üzeri) termal ayrışması. Maillard kızarmasından farklı olarak piroliz, acı, yakıcı ve bazen kanserojen bileşikler üretir. Yiyecek yandığında olan şey budur.' },
        { term: 'pH', definition: 'Asitliği (düşük) veya alkaliniteyi (yüksek) ölçen 0 ila 14 arası bir ölçek. Nötr değer 7\'dir. Çoğu çiğ yiyecek pH 5,5 ile 6,5 arasındadır. Karbonat, pH\'ı alkali seviyelere yükselterek Maillard reaksiyonunu hızlandırır.' },
        { term: 'Sodyum Bikarbonat', definition: 'Karbonat  -  hafif bir baz görevi gören beyaz kristal toz (NaHCO₃). Yemek pişirmede yüzey pH\'ını yükseltir, kızarmayı hızlandırır, eti yumuşatır ve sebzelerin pişirme sırasında rengini korumasına yardımcı olur.' },
        { term: 'Alkalinite', definition: 'Bir çözeltinin asitleri nötralize etme kapasitesi. Maillard hızlanması bağlamında alkalinite, 7,0\'ın üzerindeki pH değerlerini ifade eder. Aşırı alkalinite, acı, sabunsu kötü tatlar üretir.' },
        { term: 'Reaksiyon Hızı Çarpanı', definition: 'Maillard reaksiyonunun temel seviyeye (pH 6) kıyasla kaç kat daha hızlı ilerlediğini gösterir. x2,0 çarpanı, kızarmanın iki kat hızlı gerçekleştiği ve aynı renk gelişimi için gereken pişirme süresini etkili şekilde yarıya indirdiği anlamına gelir.' },
        { term: 'Yüzey pH\'ı', definition: 'Maillard reaksiyonunun gerçekleştiği yiyeceğin tam yüzeyindeki pH, iç pH değil. Karbonat, kısa pişirme sürelerinde yiyeceğin derinliklerine nüfuz etmediği için esas olarak yüzey pH\'ını etkiler.' },
      ],
    },
    {
      type: 'title',
      text: 'Hızlı Referans: Yaygın Yiyecekler İçin Karbonat',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Günlük yemek pişirme için önerilen karbonat miktarları',
      items: [
        'Karamelize soğan (1 büyük): 0,3g karbonat  -  süreyi 45 dakikadan ~20 dakikaya düşürür',
        'Fırın patates (500g): 0,4g karbonat  -  daha çıtır, daha altın sarısı dış yüzey',
        'Tavada mühürlenmiş biftek (250g): 0,2g karbonat  -  daha kısa sürede daha koyu kabuk',
        'Tavuk kanadı (1kg): 0,75g karbonat  -  daha çıtır deri, daha hızlı kızarma',
        'Pretzel hamuru (500g un): 1,5g karbonat  -  alkali banyo sonrası koyu kahverengi kabuk',
        'Fırın sebzeler (1kg karışık): 0,75g karbonat  -  daha homojen karamelizasyon',
      ],
    },
    {
      type: 'paragraph',
      html: 'Her yiyeceğin, doğal pH\'ına ve nem içeriğine bağlı olarak farklı bir ideal alkalinite seviyesi vardır. Bu hesaplayıcı tahmin işini ortadan kaldırır  -  tam yiyecek ağırlığınızı ve sıcaklığınızı girin, her seferinde mükemmel kızarma için kesin karbonat miktarını size versin.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
