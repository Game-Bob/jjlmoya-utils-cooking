import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Peynir Pıhtılaşma Çarpanı Hesaplayıcı';
const description = 'Zanaatkar peynir yapımında teleme kesme anını tam olarak bulun. Pıhtılaşma çarpanı yöntemini kullanarak pıhtılaşma süresini hesaplayın, nemi kontrol edin ve ücretsiz hesaplayıcımızla peynir verimini artırın.';
const faq = [
  {
    question: 'Peynir yapımında pıhtılaşma yöntemi nedir?',
    answer: 'Pıhtılaşma yöntemi, telemenin kesileceği hassas anı belirlemek için kullanılan bir tekniktir. Mayanın eklenmesinden ilk jelatinleşme belirtisine (pıhtılaşma) kadar geçen süreyi ölçer ve bu süreyi peynir stiline bağlı olarak belirli bir çarpanla çarpar.'
  },
  {
    question: 'Pıhtılaşma noktasını nasıl tespit ederim?',
    answer: 'En yaygın yöntem kâse yöntemidir. Maya ekledikten sonra süt yüzeyine küçük, sterilize edilmiş, hafif bir plastik kâse yerleştirin. Her dakika hafifçe dokunun veya çevirin. Başlangıçta serbestçe döner. Kâsenin dönmeyi bıraktığı veya süt jelatinleşmeye başladığı için dirençli olduğu an pıhtılaşma noktasıdır.'
  },
  {
    question: 'Teleme kesme zamanı neden çok önemlidir?',
    answer: 'Telemenin doğru zamanda kesilmesi sinerezi (nem kaybını) kontrol eder. Çok erken kesmek kırılgan telemeye, yağ kaybına ve düşük verime neden olur. Çok geç kesmek, çok fazla nem tutan veya düzgün süzülemeyen sert bir telemeye yol açarak ekşi, aşırı asitlenmiş peynire neden olur.'
  },
  {
    question: 'Pıhtılaşma çarpanı nedir?',
    answer: 'Bir çarpan, kesimden önceki toplam pıhtılaşma süresini hesaplamak için birincil pıhtılaşma süresine uygulanan sayısal bir faktördür. Standart çarpanlar 2.0x (Parmesan gibi kuru peynirler) ile 5.0x veya 6.0x (Camembert gibi nemli peynirler) arasında değişir.'
  },
  {
    question: 'Sıcaklık ve maya gücü pıhtılaşmayı nasıl etkiler?',
    answer: 'Daha yüksek sıcaklıklar ve daha güçlü maya pıhtılaşmayı hızlandırır, yani süt daha hızlı jelatinleşir. Bununla birlikte, toplam kesme süresi pıhtılaşma süresiyle doğru orantılı olduğundan, çarpan yöntemi bu değişiklikleri otomatik olarak telafi ederek tutarlı teleme özellikleri sağlar.'
  }
];

const howTo = [
  {
    name: 'Mayayı ekleyin ve zamanlayıcıyı başlatın',
    text: 'Mayanızı iyice karıştırın ve hemen hesaplayıcıdaki Aşama 1 kronometresini başlatın.'
  },
  {
    name: 'Kâse testini yapın',
    text: 'Süt yüzeyine hafif bir plastik kâse yerleştirin ve düzenli olarak direnç testi yapın.'
  },
  {
    name: 'Pıhtılaşma noktasını işaretleyin',
    text: 'Kâsenin dönmeye veya dokunmaya direnç gösterdiği an, pıhtılaşma süresini kaydetmek için durdur düğmesine tıklayın.'
  },
  {
    name: 'Peynir tipinizi veya çarpanı seçin',
    text: 'Veritabanından bir peynir stili seçin veya özel bir çarpan girin. Uygulama toplam süreyi hesaplar ve kesim için geri sayımı başlatır.'
  },
  {
    name: 'Sinyalde teleme kesin',
    text: 'Zamanlayıcı sıfıra ulaştığında, teleme optimum gerginliğe ulaşmıştır. Telemenizi tarifinizde belirtildiği gibi küpler halinde kesin.'
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
} as const;

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
} as const;

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
} as const;

export const content: ToolLocaleContent = {
  slug: 'peynir-puiltilasma-carpani-hesaplayici',
  title,
  description: 'Zanaatkar peynir yapımında teleme kesme anını tam olarak bulun. Pıhtılaşma çarpanı yöntemini kullanarak pıhtılaşma süresini hesaplayın, nemi kontrol edin ve ücretsiz hesaplayıcımızla peynir verimini artırın.',
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
    title: 'Peynir Pıhtılaşma Çarpanı',
    subtitle: 'Gerçek jelatinleşme davranışına göre mükemmel teleme kesme penceresini bulun',
    flocculationLabel: 'Birincil Pıhtılaşma Süresi (dakika:saniye)',
    multiplierLabel: 'Pıhtılaşma Çarpanı',
    cheeseTypeLabel: 'Peynir Stili Ön Ayar',
    totalCoagulationLabel: 'Toplam Pıhtılaşma Süresi',
    timeRemainingLabel: 'Kesime Kalan Süre',
    flocculationTimeLabel: 'Pıhtılaşma Süresi',
    moistureLabel: 'Beklenen Teleme Nemi Tutma',
    customOption: 'Özel Çarpan',
    startTimer: 'Maya Zamanlayıcısını Başlat',
    markFlocculation: 'Pıhtılaşmayı İşaretle',
    resetTimer: 'Zamanlayıcıyı Sıfırla',
    warningTitle: 'Maya Kalitesi Uyarısı',
    warningText: 'Kaydedilen pıhtılaşma süresi olağanüstü kısa. Bu, aşırı maya dozajına veya yanlış sıcaklık ayarlarına işaret ediyor olabilir, bu da lastiksi bir doku veya acı tatlara neden olabilir.',
    phase1Title: 'Aşama 1: Mayalama ve Pıhtılaşma',
    phase2Title: 'Aşama 2: Pıhtılaşma Geri Sayımı',
    phaseComplete: 'Teleme kesime hazır!',
    statusWaiting: 'Maya karıştırılıyor...',
    statusFlocculated: 'Pıhtılaşma tespit edildi',
    statusCoagulating: 'Pıhtılaşıyor...',
    statusReady: 'Kesime Hazır',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Teleme Ne Zaman Kesilmeli: Her Partide Mükemmel Peynir İçin Pıhtılaşma Çarpanı Yöntemi',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Kendinize hiç <strong>"teleme ne zaman kesmeliyim?"</strong> veya <strong>"telemenin hazır olduğunu nasıl anlarım?"</strong> diye sorduysanız, cevap pıhtılaşma çarpanı yönteminde yatar. Sabit zamanlayıcılara güvenen endüstriyel peynir yapımının aksine, zanaatkar peynir yapımcıları sütün ilk kez jelatinleşmeye başladığı anı (pıhtılaşma noktası) ölçer ve bu süreyi stile özgü bir çarpanla çarpar. Bu, tüm değişkenleri - süt asitliği, kalsiyum seviyesi, sıcaklık, maya gücü - tek bir ölçümde yakalar. <strong>Peynir pıhtılaşma çarpanı hesaplayıcımız</strong> matematiği sizin için yapar, böylece her seferinde mükemmel anda kesebilirsiniz.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2.0x', label: 'Sert Peynirler', icon: 'mdi:cheese' },
        { value: '3.0x', label: 'Yarı Sert Peynirler', icon: 'mdi:cheese' },
        { value: '5.0x', label: 'Yumuşak Peynirler', icon: 'mdi:cheese' },
        { value: '10-15d', label: 'Tipik Pıhtılaşma', icon: 'mdi:timer-outline' }
      ]
    },
    {
      type: 'title',
      text: 'Pıhtılaşma Yöntemiyle Çözülen Yaygın Peynir Yapımı Sorunları',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Tutarsız teleme sertliği:</strong> Sabit zamanlayıcılar sütteki parti farklılıklarını hesaba katamaz. Pıhtılaşma yöntemi gerçek süt kimyanıza uyum sağlar.',
        '<strong>Düşük peynir verimi:</strong> Çok erken veya çok geç kesmek yağ ve protein kaybına neden olur. Çarpan yöntemi, optimum tutma için tam pencereyi hedefler.',
        '<strong>Yanlış nem içeriği:</strong> Sert peynirler kuru teleme gerektirir; yumuşak peynirler nemli teleme gerektirir. Farklı çarpanlar (2.0x ila 6.0x) sinerezi doğrudan kontrol eder.',
        '<strong>Değişken maya aktivitesi:</strong> Maya gücü zaman içinde ve markalar arasında değişir. Pıhtılaşma süresi ölçümü, kazanınızdaki gerçek aktiviteyi o an yakalar.'
      ]
    },
    {
      type: 'title',
      text: 'Kâse Testi Nasıl Yapılır: Adım Adım',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Kâse testi, özel ekipman olmadan pıhtılaşmayı tespit etmenin en basit yoludur. Maya ekledikten ve iyice karıştırdıktan sonra, süt yüzeyine küçük sterilize edilmiş bir plastik kâse veya şişe kapağı yerleştirin. Her 30 ila 60 saniyede bir, hafifçe dokunun veya çevirin. Süt henüz sıvı iken kâse serbestçe hareket eder. Direnç gösterdiği an - bu sizin <strong>pıhtılaşma noktanızdır</strong>. Bu süreyi kaydedin ve yukarıdaki hesaplayıcıya girin.'
    },
    {
      type: 'tip',
      title: 'Daha Fazla Hassasiyet İçin Şişe Kapağı Kullanın',
      html: 'Hafif bir plastik şişe kapağı bir kâseden daha hassastır ve daha net bir durma noktası verir. Kullanmadan önce 2 dakika kaynar suda sterilize edin ve maya eklediğiniz andan itibaren süt üzerinde yüzmesini sağlayın.'
    },
    {
      type: 'tip',
      title: 'Sıcaklığınızı Sabit Tutun',
      html: 'Pıhtılaşma süresi sıcaklığa son derece bağlıdır. Sadece 2C\'lik bir düşüş, pıhtılaşma sürenizi ikiye katlayabilir. Pıhtılaşma aşaması boyunca sütü sabit bir sıcaklıkta (peynir stiline bağlı olarak tipik olarak 30-35C) tutun.'
    },
    {
      type: 'tip',
      title: 'Çok Hızlı Pıhtılaşmaya Dikkat Edin',
      html: 'Pıhtılaşma 8 dakikadan (480 saniye) kısa sürede gerçekleşirse, çok fazla maya eklemiş veya süt sıcaklığınız çok yüksek olabilir. Bu, lastiksi bir doku ve acı tatlara neden olabilir. Bu durumda hesaplayıcı sizi uyaracaktır.'
    },
    {
      type: 'title',
      text: 'Peynir Tipine Göre Pıhtılaşma Çarpanı Referansı',
      level: 2
    },
    {
      type: 'table',
      headers: ['Peynir Stili', 'Çarpan', 'Beklenen Nem', 'Kesme Sertliği', 'Olgunlaşma Potansiyeli'],
      rows: [
        ['Parmesan, Grana', '2.0x', 'Çok Düşük', 'Çok Sert', '12+ ay'],
        ['Mozzarella (taze)', '2.0x', 'Çok Yüksek', 'Yumuşak / Uzayabilir', 'Sadece taze'],
        ['İsviçre, Alp', '2.5x', 'Düşük', 'Sert', '6-12 ay'],
        ['Cheddar, Gouda', '3.0x', 'Orta-Düşük', 'Sert / Yaylı', '3-12 ay'],
        ['Mavi Peynir', '3.5x - 4.0x', 'Orta', 'Hassas', '2-6 ay'],
        ['Camembert, Brie', '5.0x', 'Yüksek', 'Çok Hassas', '3-8 hafta'],
        ['Laktik / Taze Chevre', '5.0x - 6.0x', 'Çok Yüksek', 'Narin', 'Taze - 2 hafta']
      ]
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Düşük Çarpan 2.0x to 2.5x',
          icon: 'mdi:cheese',
          description: 'Düşük nem tutması gerektiren sert, kuru peynir çeşitleri için kullanılır.',
          highlight: false,
          points: ['Mozzarella & Parmesan: 2.0x', 'Alp stilleri: 2.5x', 'Hızlı peynir altı suyu tahliyesi', 'Yoğun, olgunlaşmaya uygun teleme üretir']
        },
        {
          title: 'Orta Çarpan 3.0x to 4.0x',
          icon: 'mdi:cheese',
          description: 'Nemi ve asitliği dengeleyen yarı sert peynirler için standart aralık.',
          highlight: true,
          points: ['Cheddar & Gouda: 3.0x', 'Mavi peynirler: 3.5x ila 4.0x', 'Dengeli peynir altı suyu atılımı', 'Esnek kurtulma potansiyeli']
        },
        {
          title: 'Yüksek Çarpan 5.0x to 6.0x',
          icon: 'mdi:cheese',
          description: 'Yumuşak, kremsi, yüksek nemli peynirler için kullanılır.',
          highlight: false,
          points: ['Camembert & Brie: 5.0x', 'Laktik ve yumuşak küflü kabuklar', 'Yüksek nem tutma', 'Narin, kremsi doku gelişimi']
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Sorun Giderme: Telemenizin Doğru Ayarlanmadığına Dair 3 İşaret',
      html: "<strong>6 dakikadan kısa sürede pıhtılaşma:</strong> Çok fazla maya veya süt çok sıcak. Sonraki partide mayayı %25 azaltın. <strong>Pıhtılaşma 25 dakikadan uzun sürüyor:</strong> Maya son kullanma tarihi geçmiş olabilir, süt çok soğuk veya kalsiyum seviyesi çok düşük olabilir. Kalsiyum klorür ekleyin. <strong>Kesme anında teleme yapışkan veya kırılgan:</strong> Çarpan, peynir stiliniz için çok yüksek veya çok düşük olabilir. 0.5x'lik artışlarla ayarlayın."
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Sert Peynirler (Parmesan, Alp)',
      html: '<strong>2.0x - 2.5x çarpan</strong> kullanın. Maksimum peynir altı suyu atılımı için teleme daha erken kesin. Bu telemeler, jel henüz nispeten kırılgan iken kesilir ve uzun olgunlaşma için ideal olan yoğun, kuru bir teleme üretir. Hesaplayıcı daha kısa bir toplam pıhtılaşma süresi gösterecektir.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Yarı Sert Peynirler (Cheddar, Gouda)',
      html: '<strong>3.0x çarpan</strong> kullanin. Çoğu zanaatkar peynir yapımı için standart aralık. Nem tutma ile peynir altı suyu tahliyesini dengeler. Teleme yaylıdır ve temiz kırılır. Peynir tariflerinin çoğu bu kategoriye girer.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Yumuşak Peynirler (Camembert, Brie)',
      html: '<strong>5.0x - 6.0x çarpan</strong> kullanın. Kesmeden önce jelin önemli ölçüde güçlenmesine izin verin. Bu, telemenin içinde nemi hapsederek küflü kabuk peynirlerinin karakteristik özelliği olan kremsi, sürülebilir dokuyu oluşturur. Tutulan peynir altı suyunu kaybetmemek için teleme ile nazikçe ilgilenin.'
    },
    {
      type: 'title',
      text: 'Zanaatkar Peynir Yapımı Teleme Sözlüğü',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Pıhtılaşma Noktası', definition: 'Süt proteinlerinin birbirine yapışmaya ve yumuşak bir jel oluşturmaya başladığı peynir yapımı sürecindeki an.' },
        { term: 'Maya', definition: 'Sütü pıhtılaştırmak, katı (teleme) ve sıvı (peynir altı suyu) olarak ayırmak için kullanılan bir enzim kompleksi (temel olarak kimozin).' },
        { term: 'Sinerez', definition: 'Bir jelin içinden peynir altı suyunun telemeden süzülmesi gibi bir sıvı çıkarılması veya atılması.' },
        { term: 'Pıhtılaşma Süresi', definition: 'Maya eklenmesinden telemenin kesilmeye hazır olana kadarki toplam süre.' }
      ]
    },
    {
      type: 'summary',
      title: 'Mükemmel Teleme Kesimi İçin Ana Çıkarımlar',
      items: [
        'Kâse testini kullanarak pıhtılaşma süresini hassas bir şekilde ölçün. Yukarıdaki hesaplayıcıya girin.',
        'Peynir stilinize uygun çarpanı seçin: sert peynirler için 2.0x, yarı sert peynirler için 3.0x, yumuşak peynirler için 5.0x.',
        "Pıhtılaşma sırasında süt sıcaklığını sabit tutun. Sadece 2C'lik bir değişim pıhtılaşma süresini önemli ölçüde değiştirir.",
        'Pıhtılaşma 8 dakika içinde gerçekleşirse, bir dahaki sefere mayayı azaltın. 25 dakikanın üzerindeyse, maya tazeliğini kontrol edin.',
        'Hesaplayıcı matematiği sizin için yapar, böylece tekniğe ve tutarlılığa odaklanabilirsiniz.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
