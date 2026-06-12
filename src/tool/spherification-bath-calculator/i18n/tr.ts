import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Küreleştirme Banyo Hesaplayıcı Hassas Moleküler Gastronomi Rehberi";
const description = "Doğrudan ve ters küreleştirme için sodyum aljinat ve kalsiyum laktatın tam oranlarını hesaplayın. Ksantan ve sitrat ile viskozite ve asitliği düzeltin.";

const faq = [
  {
    question: "Doğrudan ve ters küreleştirme arasındaki fark nedir?",
    answer: "Doğrudan küreleştirme, sodyum aljinatı aromalı tabana ekler ve kalsiyum banyosuna damlatır, içe doğru jelleşmeye devam eden ince bir zar oluşturur. Ters küreleştirme, tabana kalsiyum ekler ve aljinat banyosuna damlatır, dışa doğru büyüyen bir zar oluşturur ve durulandığında jelleşme sürecini durdurur."
  },
  {
    question: "Kürelerim neden düz çıkıyor veya batmıyor?",
    answer: "Aromalı taban sıvısı, sodyum aljinat banyosundan daha az yoğunsa, küre oluşturmak yerine yüzeyde yüzer. Az miktarda ksantan sakızı eklemek taban viskozitesini artırarak batmasını ve mükemmel küreler oluşturmasını sağlar."
  },
  {
    question: "Küreleştirmede sodyum sitrat ne işe yarar?",
    answer: "Sodyum sitrat, kalsiyum iyonlarını bağlayan ve pH'ı yükselten bir sekestrandır. Taban sıvısı yüksek asidikse (pH 4.5'in altında) veya kalsiyum içeriyorsa, sodyum aljinat erken jelleşir. Sitrat eklemek bu asitliği nötralize eder."
  },
  {
    question: "Kalsiyum banyosu için herhangi bir su kullanabilir miyim?",
    answer: "Yüksek mineral içeriğine sahip musluk suyu, sodyum aljinatın topaklanmasına veya erken jelleşmesine neden olabilir. Damıtılmış veya düşük kalsiyumlu şişe suyu kullanmak en iyisidir."
  }
];

const howTo = [
  {
    name: "Küreleştirme yöntemini seçin",
    text: "İnce ve anında jelleşme için Doğrudan'ı veya alkol, süt ürünleri ya da kalsiyum içeren sıvılar için Ters'i seçin."
  },
  {
    name: "Sıvı ağırlıklarını girin",
    text: "Aromalı taban sıvınızın ve su banyosunun ağırlığını tercih ettiğiniz birimlerde girin."
  },
  {
    name: "Doku ve asitlik düzeltmeleri ekleyin",
    text: "Taban sıvınız çok inceyse Ksantan Sakızı'nı veya yüksek asidikse Sodyum Sitrat'ı etkinleştirin."
  },
  {
    name: "Malzemeleri ölçün",
    text: "Özet ekranında gösterilen tam miktarlarda sodyum aljinat, kalsiyum laktat veya klorür ve düzeltme ajanlarını tartın."
  }
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
  slug: 'kurelestirme-banyo-hesaplayici',
  title: 'Küreleştirme Banyo Hesaplayıcı',
  description: 'Doğrudan ve ters küreleştirme için sodyum aljinat ve kalsiyum laktatın tam oranlarını hesaplayın. Ksantan ve sitrat ile viskozite ve asitliği düzeltin.',
  faqTitle: 'Sıkça Sorulan Sorular',
  ui: {
    title: "Küreleştirme Banyo Hesaplayıcı",
    subtitle: "Doğrudan ve ters küreleştirme için hassas oran kontrolü",
    unitLabel: "Ölçüm Sistemi",
    metricUnit: "Metrik (g / gram)",
    imperialUnit: "Imperial (oz / ons)",
    methodLabel: "Küreleştirme Yöntemi",
    directMethod: "Doğrudan Küreleştirme",
    reverseMethod: "Ters Küreleştirme",
    baseWeightLabel: "Taban Sıvı Ağırlığı",
    bathWeightLabel: "Banyo Su Ağırlığı",
    xanthanLabel: "Ksantan Sakızını Etkinleştir (Viskozite Düzeltmesi)",
    citrateLabel: "Sodyum Sitratı Etkinleştir (Asitlik / pH Sekestrantı)",
    recipeTitle: "Hesaplanan Tarif Özeti",
    baseGellingAgent: "Taban Jelleştirme Ajanı",
    bathGellingAgent: "Banyo Jelleştirme Ajanı",
    xanthanGum: "Ksantan Sakızı (Koyulaştırıcı)",
    sodiumCitrate: "Sodyum Sitrat (Tampon)",
    warningLabel: "Çözünürlük Uyarısı",
    warningDesc: "Gerekli ajan ağırlığı, bu sıvı hacmi için çözünürlük sınırına yakın veya üzerindedir. Çözünme daha uzun sürebilir veya hafif ısıtma gerektirebilir.",
    directDesc: "Düşük kalsiyumlu hafif sıvılar için idealdir. Hemen servis edilmesi gereken hassas, ince kabuklu küreler oluşturur.",
    reverseDesc: "Süt ürünleri, alkol, kalsiyum açısından zengin veya asidik sıvılar için idealdir. Durulamadan sonra jelleşmeye devam etmeyen stabil küreler oluşturur.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Moleküler Küreleştirme ve Hidrokolloid Jelleşme Bilimi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Küreleştirme, sıvı bir çekirdeği ince bir jel zarın içine hapseden devrim niteliğinde bir mutfak tekniğidir. 1940\'larda endüstriyel paketleme sektöründe ortaya çıkmış, 2000\'lerin başında modernist mutfak için uyarlanmıştır. Temel kimya, hidrokolloidlerin etkileşimlerine, özellikle de sodyum aljinat polimerlerinin iki değerlikli kalsiyum katyonlarına maruz kaldığında çapraz bağlanmasına dayanır.',
    },
    {
      type: 'title',
      text: 'Moleküler Kimya: Sodyum Aljinat ve Kalsiyum İyonları',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sodyum aljinat, beta-D-mannuronik asit (M blokları) ve alfa-L-guluronik asit (G blokları) doğrusal zincirlerinden oluşan, kahverengi deniz yosunlarından ekstrakte edilen bir polisakkarittir. Sodyum tuzu formunda suda tamamen çözünür ve viskoz bir çözelti oluşturur. Kalsiyum iyonları (kalsiyum klorür veya kalsiyum laktat glukonat gibi) eklendiğinde, iki değerlikli kalsiyum iyonları (Ca2+), tek değerlikli sodyum iyonlarının (Na+) yerini alır. Kalsiyumun iki pozitif yükü olduğu için, bitişik polimer zincirlerindeki iki G bloğuna bağlanarak onları birbirine köprüler. Bilimsel olarak <strong>yumurta kutusu modeli</strong> olarak tanımlanan bu jelleşme süreci, bağımsız polisakkarit zincirlerini, su ve aroma moleküllerini hapseden sert, üç boyutlu bir hidrojel ağına dönüştürür.',
    },
    {
      type: 'title',
      text: 'Doğrudan ve Ters Küreleştirme Mekanizmaları',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'İki ana küreleştirme yöntemi, jelleştirme ajanının ve kalsiyum tuzlarının nereye yerleştirildiği konusunda farklılık gösterir ve bu da farklı mekanik özelliklere yol açar:',
    },
    {
      type: 'list',
      items: [
        '<strong>Doğrudan Küreleştirme:</strong> Sodyum aljinat aromalı taban sıvısında çözülür ve ardından bir kalsiyum banyosuna (genellikle %1.0 kalsiyum klorür) damlatılır. Jelleşme sınırda anında başlar. Kalsiyum iyonları küçük ve hareketli olduğu için banyodan kürenin çekirdeğine sürekli göç eder ve jel zarın içe doğru büyümesine neden olur. Hemen durulanıp servis edilmezse, küre zamanla tamamen jelleşerek katı, lastiksi bir boncuğa dönüşür.',
        '<strong>Ters Küreleştirme:</strong> Kalsiyum laktat glukonat (%2.0) aromalı taban sıvısında çözülür ve ardından bir sodyum aljinat banyosuna (%0.5) damlatılır. Aljinat molekülleri büyük ve yavaş hareket ettiği için yeni oluşan jel bariyerini kolayca geçemez. Bunun yerine kalsiyum iyonları dışa doğru banyoya göç ederek zarı dışa doğru büyütür. Bu, küre çıkarılıp temiz suda durulanır durulanmaz jelleşmeyi durdurur ve tamamen sıvı bir çekirdeği süresiz olarak korur.'
      ],
    },
    {
      type: 'title',
      text: 'Sodyum Sitrat ile Asitlik ve pH Engellerini Aşmak',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sodyum aljinat aside karşı oldukça hassastır. Aromalı taban sıvısının pH\'ı 4.5\'in altına düştüğünde, aljinat molekülleri düzgün şekilde hidrate olamaz. Çözünmek yerine, aljinat zincirleri çözünmeyen aljinik asit olarak çökelir ve ipliksi topaklar oluşturur. Bunu çözmek için şefler <strong>sodyum sitratı</strong> tamponlayıcı ajan olarak kullanır. Sodyum sitrat hidrojen iyonlarını nötralize ederek çarkıfelek meyvesi veya limon suyu gibi asidik malzemelerin pH\'ını kritik 4.5 eşiğinin üzerine çıkarır ve aljinatın tamamen hidrate olmasını ve temiz, küresel şekiller oluşturmasını sağlar.',
    },
    {
      type: 'title',
      text: 'Ksantan Sakızı ile Sıvı Yoğunluğu ve Viskozitesini Ayarlama',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bir küre oluşturmak için aromalı taban sıvısı damlasının jelleşme banyosuna tamamen dalması gerekir. Aromalı taban sıvısı banyodan daha az yoğunsa (ters küreleştirme sırasında kalın bir sodyum aljinat banyosundaki hafif bir alkol veya su bazlı meyve suyu gibi), yüzeyde yüzer ve düzleşir. Az miktarda <strong>ksantan sakızı</strong> (tipik olarak %0.1 ila %0.2) eklemek taban sıvısının viskozitesini artırır. Bu ekstra kıvam, damlanın banyoya batması için gereken momentumu sağlar ve yüzey geriliminin damlayı mükemmel bir küre haline getirmesine olanak tanır.',
    },
    {
      type: 'table',
      headers: ['Küreleştirme Yöntemi', 'İdeal Malzemeler', 'Gerekli Katkı Maddeleri', 'Saklama Özellikleri', 'Jel Büyüme Yönü'],
      rows: [
        ['Doğrudan Yöntem', 'Düşük kalsiyumlu meyve suları, berrak et suları, tatlı şuruplar', 'Tabanda %0.5 Sodyum Aljinat, banyoda %1.0 Kalsiyum Klorür', 'Hemen servis edilmeli, zamanla katılaşır', 'İçe doğru (merkeze)'],
        ['Ters Yöntem', 'Süt ürünleri, alkol, yüksek kalsiyumlu veya asidik sıvılar', 'Tabanda %2.0 Kalsiyum Laktat, banyoda %0.5 Sodyum Aljinat', 'Oldukça stabil, saatlerce yağda veya suda saklanabilir', 'Dışa doğru (merkezden uzağa)'],
      ],
    },
    {
      type: 'title',
      text: 'Durulama ve Son Koruma Adımları',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bitmiş küreleri jelleşme banyosundan çıkardıktan hemen sonra temiz, soğuk su banyosunda durulayın. Bu, dışarıya yapışan kalıntı kalsiyum veya aljinatı temizleyerek kimyasal reaksiyonu durdurur ve kötü tatları (özellikle kalsiyum klorürün hafif acı tadını) önler. Saklamak için, küreleri eşleşen yoğunlukta bir sıvıya (katkı maddesi içermeyen aromalı taban sıvısı veya hafif bir şeker şurubu gibi) batırın. Bu, ozmoz yoluyla suyun zar boyunca hareket etmesini önleyerek kürelerin büzüşmesini veya patlamasını engeller.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
