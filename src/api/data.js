// CoffeData.js içeriğini buraya kopyalayın
import CoffeData from '../data/CoffeData'; // Eğer CoffeData'yı ayrı bir yerden alıyorsanız
import EspressoBeanData from '../data/EspressoBeanData'; // Eğer EspressoBeanData'yı ayrı bir yerden alıyorsanız

// Blog Yazıları için Örnek Veri
const BlogPostsData = [
    {
        id: 'blog-1',
        title: "Evde Mükemmel Espresso Yapmanın Sırları",
        author: "Kahve Uzmanı",
        date: "2024-05-28",
        category: "Espresso Teknikleri",
        content: "Espresso makinenizi doğru kullanmak, çekirdek seçimi, öğütme inceliği ve demleme süresi gibi faktörler mükemmel espresso için kritik öneme sahiptir...",
        tags: ["espresso", "evde kahve", "teknik"],
        img: "/blog_espresso.jpg" // Opsiyonel: Blog görseli
    },
    {
        id: 'blog-2',
        title: "Cold Brew vs. Cold Drip: Farklar ve Tercihler",
        author: "Demleme Sanatçısı",
        date: "2024-05-20",
        category: "Soğuk Kahve",
        content: "Cold Brew ve Cold Drip, soğuk kahve demleme yöntemleridir ancak süreçleri ve sonuçları farklıdır. Hangisi size uygun?",
        tags: ["cold brew", "cold drip", "karşılaştırma"],
        img: "/blog_coldbrew.jpg"
    },
    {
        id: 'blog-3',
        title: "Farklı Kahve Kavurma Seviyeleri ve Tat Notları",
        author: "Kavrum Uzmanı",
        date: "2024-06-01",
        category: "Kahve Bilgisi",
        content: "Açık, orta, koyu kavrum... Her biri kahvenin kendine özgü tat profilini nasıl etkiler? En sevdiklerinizi keşfedin.",
        tags: ["kavurma", "tat notları", "kahve bilimi"],
        img: "/blog_roast.jpg"
    }
];

// Kullanıcı Verileri için Örnek Veri (Basit Tutulmuş)
const UsersData = [
    {
        id: 'user-1',
        username: "kahve_sever",
        email: "kahvesever@example.com",
        role: "user", // "user", "admin", "barista"
        registeredAt: "2023-01-15"
    },
    {
        id: 'user-2',
        username: "prof_barista",
        email: "probarista@example.com",
        role: "barista",
        registeredAt: "2022-11-01"
    },
    {
        id: 'user-3',
        username: "admin_user",
        email: "admin@example.com",
        role: "admin",
        registeredAt: "2021-08-10"
    }
];

// Barista Atölyesi için Eklemek İstediğiniz Diğer Veriler:
// Örneğin, Barista İpuçları, Kurslar veya Etkinlikler
const AdditionalData = {
    tips: [

        { id: 'tip-1', title: "Espresso Akışını Ayarlamak", content: "Mükemmel akış için öğütme inceliği anahtardır." },
        { id: 'tip-2', title: "Süt Köpürtme Teknikleri", content: "Latte art için pürüzsüz ve parlak süt köpüğü..." },
        { id: 'tip-3', title: "French Press İle Demleme", content: "Kalın öğütülmüş kahve ve doğru demleme süresi zengin bir tat sunar." },
        { id: 'tip-4', title: "Chemex Kullanımı", content: "Temiz ve berrak bir kahve deneyimi için Chemex filtre kağıtları önemli." },
        { id: 'tip-5', title: "V60 Dökme Kahve", content: "Kontrollü döküş ve doğru su sıcaklığı, en iyi V60 sonuçlarını verir." },
        { id: 'tip-6', title: "Kahve Çekirdeklerini Saklama", content: "Çekirdekleri hava almayan, ışık görmeyen serin ve kuru bir yerde saklayın." },
        { id: 'tip-7', title: "Su Kalitesinin Önemi", content: "Kahve demlemede kullanılan suyun kalitesi, tadı büyük ölçüde etkiler." },
        { id: 'tip-8', title: "Tazelik Takibi", content: "Yeni kavrulmuş kahve çekirdekleri, demleme sonrası en iyi aromayı verir." },
        { id: 'tip-9', title: "Soğuk Demleme (Cold Brew)", content: "Uzun demleme süresiyle pürüzsüz ve az asitli kahve elde edin." },
        { id: 'tip-10', title: "Moka Pot Kullanımı", content: "Yoğun ve espresso benzeri bir kahve için Moka Pot idealdir." }

    ],
    courses: [
        { id: 'course-1', name: "Temel Barista Eğitimi", duration: "2 Gün", price: "XXX TL" },
        { id: 'course-2', name: "İleri Latte Art", duration: "1 Gün", price: "YYY TL" }
    ],
    events: [
        { id: 'event-1', name: "Kahve Tadım Etkinliği", date: "2024-07-10", location: "Online" }
    ]
};

// Tüm verileri dışa aktarın
const apiData = {
    coffees: CoffeData,
    espressoBeans: EspressoBeanData,
    blogPosts: BlogPostsData,
    users: UsersData,
    additional: AdditionalData
};

export default apiData;