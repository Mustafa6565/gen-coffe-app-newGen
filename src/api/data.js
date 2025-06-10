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
        detailedContent: "Evde gerçek bir barista gibi espresso hazırlamak, dikkat ve biraz pratik gerektirir. Öncelikle, **espresso makinenizin temizliği** çok önemlidir; düzenli kireç çözme ve grup başlığını temizleme, her demlemede tutarlı lezzet sağlar. **Çekirdek seçimi**, espressonun kalitesini doğrudan etkiler; taze kavrulmuş, yüksek kaliteli Arabica çekirdekleri genellikle en iyi sonuçları verir. Öğütme, espressonun anahtarıdır; **öğütme inceliği** (genellikle ince, pudra kıvamında) suyun kahveyle temas süresini belirler ve doğru ekstraksiyonu sağlar. Ayrıca, öğütülmüş kahvenin sepete eşit ve sıkıca (tampingle) yerleştirilmesi, suyun tüm kahveden eşit geçişi için hayati önem taşır. **Demleme süresi**, ideal olarak 25-30 saniye arasında olmalı ve bu süre içinde yaklaşık 30-40 ml espresso elde edilmelidir. Çok hızlı veya çok yavaş akış, öğütme inceliğinin veya sıkıştırmanın ayarlanması gerektiğini gösterir. Son olarak, **sıcaklık kontrolü** (90-96°C arası) ve doğru basınç (9 bar) da mükemmel bir espresso için vazgeçilmezdir.",
        tags: ["espresso", "evde kahve", "teknik"],
        img: "/img/blog_espresso.png" // Opsiyonel: Blog görseli
    },
    {
        id: 'blog-2',
        title: "Cold Brew vs. Cold Drip: Farklar ve Tercihler",
        author: "Demleme Sanatçısı",
        date: "2024-05-20",
        category: "Soğuk Kahve",
        content: "Cold Brew ve Cold Drip, soğuk kahve demleme yöntemleridir ancak süreçleri ve sonuçları farklıdır. Hangisi size uygun?",
        detailedContent: "Soğuk kahve dünyasında iki popüler yöntem olan **Cold Brew** ve **Cold Drip**, farklı demleme süreçleri ve lezzet profilleri sunar. **Cold Brew**, genellikle iri öğütülmüş kahvenin oda sıcaklığındaki suda 12-24 saat boyunca bekletilmesiyle yapılır. Bu uzun demleme süresi, kahvenin asiditesini düşürerek daha pürüzsüz, az acı ve yoğun bir tat profili yaratır. Genellikle konsantre olarak hazırlanır ve su veya süt ile seyreltilerek tüketilir. Tadı daha çikolatalı ve karamelize notalar içerebilir. Öte yandan, **Cold Drip** (veya Hollanda Kahvesi), kahvenin üzerine damla damla soğuk suyun yavaşça damlatılmasıyla hazırlanır. Bu yöntem, özel bir demleme ekipmanı gerektirir ve süreç daha yavaş, genellikle 3-12 saat sürer. Cold Drip, Cold Brew'a göre daha parlak, daha az gövdeli ve tat notalarını (meyvemsi, çiçeksi) daha belirgin şekilde ortaya çıkaran bir kahve üretir. Hangi yöntemi tercih edeceğiniz, kişisel damak zevkinize ve demleme süresine ayırabileceğiniz zamana bağlıdır.",
        tags: ["cold brew", "cold drip", "karşılaştırma"],
        img: "/img/blog_coldbrew.png"
    },
    {
        id: 'blog-3',
        title: "Farklı Kahve Kavurma Seviyeleri ve Tat Notları",
        author: "Kavrum Uzmanı",
        date: "2024-06-01",
        category: "Kahve Bilgisi",
        content: "Açık, orta, koyu kavrum... Her biri kahvenin kendine özgü tat profilini nasıl etkiler? En sevdiklerinizi keşfedin.",
        detailedContent: "Kahve çekirdeklerinin kavrulma seviyesi, nihai içeceğin lezzet profilini kökten değiştirir. Üç ana kavurma seviyesi bulunur: **Açık Kavrum (Light Roast)**, çekirdeklerin ilk çatlaktan sonra hemen sonlandırıldığı bir kavurma derecesidir. Bu kavurma, kahvenin orijinal çekirdek özelliklerini, yani toprağın ve bölgenin kendine özgü meyvemsi, çiçeksi veya narenciye notalarını en belirgin şekilde korur. Asiditesi yüksek, gövdesi hafiftir. **Orta Kavrum (Medium Roast)**, çekirdeklerin ikinci çatlağın başlamasından önce sonlandırılmasıyla elde edilir. Bu kavurma seviyesi, kahvenin parlak asiditesini korurken aynı zamanda tatlılık ve karamel notaları geliştirir. En dengeli ve popüler kavurma derecesidir. **Koyu Kavrum (Dark Roast)** ise çekirdeklerin ikinci çatlağa kadar veya sonrasında kavrulmasıdır. Bu, kahvenin yağlarının yüzeye çıkmasına ve çekirdeklerin neredeyse siyahlaşmasına neden olur. Daha az asitli, daha yoğun gövdeli ve genellikle acı, isli, çikolatalı veya kavrulmuş fındık notaları taşıyan bir lezzet profili sunar. Hangi kavurma seviyesinin size uygun olduğunu anlamak için farklı kavrumları denemek ve kendi damak zevkinizi keşfetmek önemlidir.",
        tags: ["kavurma", "tat notları", "kahve bilimi"],
        img: "/img/blog_roast.png"
    },
    {
        id: 'blog-4',
        title: "V60 ile Mükemmel Damlatma Kahvesi Demleme Rehberi",
        author: "Filtre Kahve Sever",
        date: "2024-06-05",
        category: "Filtre Kahve",
        content: "Hario V60 ile evde profesyonel kalitede filtre kahve demlemek için adım adım rehber. Su sıcaklığı, öğütme boyutu ve dökme teknikleri...",
        detailedContent: "Hario V60, evde kaliteli filtre kahve demlemenin en popüler ve etkili yollarından biridir. Mükemmel bir V60 demlemesi için birkaç önemli faktöre dikkat etmek gerekir. İlk olarak, **doğru öğütme boyutu** kritiktir; V60 için orta-ince, deniz tuzu kıvamında bir öğütme idealdir. Çok ince olursa kahve acı olur, çok kalın olursa tadı sulu kalır. İkinci olarak, **su sıcaklığı** 90-96°C arasında olmalıdır. Tam kaynamış suyu biraz bekletmek bu aralığı yakalamanıza yardımcı olur. Demleme sürecine başlarken, filtrenizi sıcak suyla ıslatmak (ki bu aynı zamanda kağıt tadını giderir) ve ardından öğütülmüş kahvenizi V60'a eklemek gerekir. İlk döküş, **'bloom' (çiçeklenme)** aşamasıdır: kahvenin üzerine ağırlığının yaklaşık iki katı kadar su dökülür ve 30-45 saniye beklenir. Bu, kahvenin içindeki gazların serbest kalmasını sağlar. Ardından, suyu spiral hareketlerle yavaş ve eşit bir şekilde dökerek demlemeye devam edilir. Toplam demleme süresi genellikle 2:30 ile 3:30 dakika arasında olmalıdır. Bu adımları dikkatlice takip ederek, V60 ile evde berrak, aromatik ve lezzetli bir filtre kahve demleyebilirsiniz.",
        tags: ["v60", "filtre kahve", "demleme rehberi"],
        img: "/img/blog_v60.png"
    },
    {
        id: 'blog-5',
        title: "Kahve Çekirdeği Öğütücü Seçimi: Ev Kullanımı İçin İpuçları",
        author: "Ekipman Uzmanı",
        date: "2024-05-15",
        category: "Ekipman",
        content: "Bıçaklı mı, değirmenli mi? Konik mi, düz bıçaklı mı? Doğru kahve öğütücü seçimi, kahve lezzetini nasıl etkiler?",
        detailedContent: "Mükemmel bir kahve demlemenin ilk adımı, doğru **kahve öğütücüyü** seçmektir. Öğütücüler temelde iki kategoriye ayrılır: bıçaklı öğütücüler ve değirmenli öğütücüler. **Bıçaklı öğütücüler** (genellikle baharat öğütücü olarak da kullanılır), kahve çekirdeklerini kesme ve parçalama prensibiyle çalışır. Bu, düzensiz boyutlarda kahve partikülleri üretir ve demleme sırasında acı veya zayıf bir tada yol açabilir. Genellikle daha uygun fiyatlıdır ancak kahve kalitesi için tavsiye edilmez. **Değirmenli öğütücüler** ise (burr grinders), kahve çekirdeklerini iki aşındırıcı yüzey arasında öğüterek daha tutarlı ve homojen bir öğütme sağlar. Değirmenli öğütücüler de kendi içinde **konik (conical)** ve **düz bıçaklı (flat burr)** olarak ikiye ayrılır. Konik öğütücüler genellikle daha sessiz, daha az ısı üretir ve daha az kahve atığı bırakır. Düz bıçaklı öğütücüler ise son derece tutarlı bir öğütme sağlar ancak daha fazla ısı ve ses çıkarabilir. Hangi demleme yöntemini kullandığınıza (espresso için ince, filtre kahve için orta, French Press için kalın öğütme) ve bütçenize göre doğru değirmenli öğütücüyü seçmek, kahve deneyiminizi büyük ölçüde iyileştirecektir.",
        tags: ["öğütücü", "ekipman", "kahve hazırlığı"],
        img: "/img/blog_grinder.png"
    },
    {
        id: 'blog-6',
        title: "Sürdürülebilir Kahve Yetiştiriciliği: Geleceğe Bir Bakış",
        author: "Yeşil Kahve Aktivisti",
        date: "2024-04-29",
        category: "Sürdürülebilirlik",
        content: "Kahve sektöründe sürdürülebilir uygulamaların önemi, çiftçiler ve çevre üzerindeki etkileri...",
        detailedContent: "Sürdürülebilir kahve yetiştiriciliği, hem çevresel dengeyi korumak hem de kahve çiftçilerinin ve topluluklarının refahını sağlamak açısından kritik bir öneme sahiptir. Bu yaklaşım, tek yönlü tarım yerine **biyoçeşitliliği destekleyen gölgeli tarım yöntemlerini** teşvik eder, toprağın sağlığını korur ve erozyonu önler. Ayrıca, **su kaynaklarının bilinçli kullanılmasını** ve kimyasal gübre/pestisit kullanımının minimuma indirilmesini hedefler. **Etik kahve ticareti** de sürdürülebilirliğin ayrılmaz bir parçasıdır. Bu, çiftçilere adil ücret ödenmesini, güvenli çalışma koşulları sağlanmasını ve çocuk işçiliğinin önlenmesini içerir. Fair Trade, Rainforest Alliance ve UTZ Certified gibi sertifikasyon programları, tüketicilerin sürdürülebilir ve etik kaynaklardan gelen kahveyi kolayca tanımasına yardımcı olur. Sürdürülebilir kahve tüketimi, sadece daha lezzetli bir fincan kahve içmekle kalmaz, aynı zamanda gezegenimize ve kahve üretiminde yer alan insanlara karşı sorumluluğumuzu da yerine getirir.",
        tags: ["sürdürülebilirlik", "etik kahve", "çevre"],
        img: "/img/blog_sustainable.png"
    },
    {
        id: 'blog-7',
        title: "Kahve Tadım Notları Nasıl Alınır?",
        author: "Tadımcı",
        date: "2024-06-08",
        category: "Tadım",
        content: "Kahvedeki farklı tat profillerini (meyvemsi, çikolatalı, topraksı vb.) nasıl ayırt edersiniz? Profesyonel tadımcılar gibi not alın.",
        detailedContent: "Kahve tadımı, sadece lezzetli bir içecek içmekten çok daha fazlasıdır; kahvedeki karmaşık aromaları, tatları ve hisleri keşfetme sanatıdır. Profesyonel tadımcılar (cupper'lar), **kahve tadım çarkını** kullanarak çeşitli tat notalarını tanımlar ve derecelendirirler. Tadım yaparken ilk adım, kahvenin **aromasını** (kuru ve ıslak aroma) değerlendirmektir. Ardından, bir yudum alırken **ağız hissi (gövde)** (hafif, orta, tam) ve **asidite** (parlak, keskin, pürüzsüz) değerlendirilir. Asidite, kahvenin parlaklığı ve canlılığı için önemlidir. Daha sonra, kahvedeki **tat notları** ayırt edilir. Bunlar meyvemsi (çilek, narenciye), çiçeksi (yasemin, gül), çikolatalı (sütlü, bitter), fındıksı (badem, fındık), baharatlı (tarçın, karanfil) veya topraksı gibi çok çeşitli olabilir. Tadım notlarınızı tutarken, her bir özelliği spesifik kelimelerle tanımlamak ve hislerinizi not etmek, damak zevkinizi geliştirmenize ve kahve tercihlerinizde daha bilinçli olmanıza yardımcı olacaktır. Pratik yaparak ve farklı kahveleri tadarak bu beceriyi geliştirebilirsiniz.",
        tags: ["tadım", "lezzet profili", "kahve kültürü"],
        img: "/img/blog_tasting.png"
    },
    {
        id: 'blog-8',
        title: "Latte Art'a Başlangıç: Temel Teknikler",
        author: "Barista Eğitmeni",
        date: "2024-05-25",
        category: "Barista Teknikleri",
        content: "Espresso ve sütün mükemmel uyumuyla kalpler, yapraklar ve daha fazlasını nasıl yapacağınızı öğrenin.",
        detailedContent: "Latte art, bir fincan kahveyi sanat eserine dönüştürmenin keyifli bir yoludur. Temelini, doğru kıvamda hazırlanmış espresso ve kremsi dokulu süt oluşturur. İlk adım, **sütü doğru şekilde buharlamaktır**. Sütü 60-65°C'ye kadar ısıtırken, buhar çubuğunu sütün yüzeyine yakın tutarak hava kabarcıklarını önlemeli ve pürüzsüz, ipeksi bir mikro köpük elde etmelisiniz. Süt, parlak ve hafifçe kalın olmalı, büyük kabarcıklar içermemelidir. İkinci adım, **espresso'nun kalitesidir**; taze demlenmiş, kadifemsi ve yoğun bir espresso, sütün üzerinde şekil oluşturmak için mükemmel bir zemin sağlar. Latte art için dökme tekniği de kritiktir: Süt sürahisini fincana yaklaştırarak (yaklaşık 1-2 cm) döküşe başlanır. Süt akışı hızlandıkça, fincanı hafifçe eğerek ve sürahiyi ileri-geri hareket ettirerek kalp, rozetta (yaprak) veya lale gibi desenler oluşturulur. Bu süreç, pratik ve sabır gerektirir, ancak temel teknikleri öğrendikten sonra kendi yaratıcı desenlerinizi denemeye başlayabilirsiniz.",
        tags: ["latte art", "barista", "süt köpürtme"],
        img: "/img/blog_latteart.png"
    },
    {
        id: 'blog-9',
        title: "Türk Kahvesi Demlemenin İncelikleri",
        author: "Geleneksel Kahve Sever",
        date: "2024-06-03",
        category: "Geleneksel Yöntemler",
        content: "Közde mi, ocakta mı? Bol köpüklü, tam kıvamında bir Türk kahvesi için püf noktaları.",
        detailedContent: "Türk kahvesi, yüzyıllardır süregelen eşsiz bir demleme geleneğidir ve kendine has incelikleri vardır. Mükemmel bir Türk kahvesi için öncelikle **çok ince öğütülmüş kahve** kullanmak şarttır; un kadar ince olmalıdır. **Su miktarı** genellikle fincan ölçüsüne göre ayarlanır (bir fincan kahve için bir fincan su). Kahve, su ve isteğe bağlı şeker, **cezveye** konur ve iyice karıştırılır. Demleme süreci, Türk kahvesinin karakteristiğidir. Geleneksel olarak **közde** veya **kısık ateşte** yavaş yavaş pişirilir. Bu yavaş pişirme, kahvenin aromasının tam olarak salınmasını ve üzerinde zengin bir köpük oluşmasını sağlar. Kaynamaya başladığında oluşan köpük, fincanlara paylaştırılır ve ardından kahve kalan kısmı cezvede biraz daha kaynatılıp fincanlara eklenir. Asla harlı ateşte kaynatılmamalıdır, aksi takdirde köpüğü kaybolur ve acı bir tat alır. Bol köpüklü, koyu kıvamlı ve yoğun aromalı bir Türk kahvesi, bu geleneksel yöntemlere sadık kalarak elde edilir.",
        tags: ["türk kahvesi", "geleneksel", "demleme"],
        img: "/img/blog_turkkahvesi.png"
    },
    {
        id: 'blog-10',
        title: "Evde Yeşil Kahve Kavurma: Adımlar ve İpuçları",
        author: "Ev Kavurucusu",
        date: "2024-05-18",
        category: "Kavurma",
        content: "Kendi yeşil kahve çekirdeklerinizi evde kavurarak taze ve kişiselleştirilmiş bir deneyim yaşayın. İlk çatlaktan sonra neler olur?",
        detailedContent: "Evde yeşil kahve çekirdeklerini kavurmak, kahve deneyiminizi tamamen kişiselleştirmek için harika bir yoldur. Bu süreç, size kendi zevkinize göre kavurma seviyesini ayarlama özgürlüğü verir. Başlamak için **yeşil kahve çekirdeklerine** ve bir kavurma ekipmanına ihtiyacınız var. Bu, bir popkorn makinesi, dökme demir tava veya özel bir kahve kavurma makinesi olabilir. Kavurma sırasında **iyi bir havalandırma** sağlamak önemlidir, çünkü kahve kavrulurken duman ve hoş olmayan kokular yayabilir. Kavurma süreci boyunca çekirdeklerin rengi yeşilden sarıya, açık kahverengiye, koyu kahverengiye doğru değişir. İki ana 'çatlama' sesi vardır: **İlk çatlama ('first crack')**, çekirdeklerin içindeki suyun buharlaşmasıyla meydana gelir ve yaklaşık 190-200°C civarında duyulur. Bu, açık kavrumların başlangıcıdır. İlk çatlamadan sonra kavurmaya devam ettikçe, kahvenin asiditesi azalır, gövdesi artar ve tatlılığı gelişir. **İkinci çatlama ('second crack')**, daha hafif ve tıkırtılı bir sesle duyulur ve yaklaşık 220-230°C civarında gerçekleşir. Bu aşamadan sonra koyu kavrumlar başlar ve kahvenin yüzeyinde yağlar belirmeye başlar. İkinci çatlamaya kadar kavurmak, daha bitter ve dumanlı tatlar verir. Kavurma tamamlandığında, çekirdekleri hızla soğutmak (örneğin bir fana yayarak) kavurma sürecini durdurmak ve aşırı kavrulmayı önlemek için hayati önem taşır. Bu adımları deneyerek kendi mükemmel kavrumunuzu bulabilirsiniz.",
        tags: ["yeşil kahve", "evde kavurma", "kavurma teknikleri"],
        img: "/img/blog_greencoffee.png"
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