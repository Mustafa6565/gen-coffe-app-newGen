import { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCoffee, FaHeart, FaHandsHelping, FaLeaf } from "react-icons/fa"; // İkonlar için react-icons kütüphanesini kurmanız gerekebilir: npm install react-icons
import { StateControll } from "../../Context/StateControl";

export default function AboutUs() {
    const { theme } = useContext(StateControll)

    return (
        <Container className={` mt-3 mb-3 p-3 shadow ${theme ? 'bg-dark text-white' : 'bg-ligth'}`} data-bs-theme={theme ? "dark" : "ligth"} style={{ border: "2px solid #FED8B1" }}>
            <h1 className="text-center mb-4 HeadLine">Barista Atölyesi Hakkında</h1>
            <p className="text-center lead mb-5">
                Kahveye olan tutkumuzla yola çıktık ve bu tutkuyu sizlerle paylaşmak için Barista Atölyesi'ni kurduk.
                Amacımız, her yudumda mükemmelliği sunmak ve kahve dünyasının zenginliğini keşfetmenize yardımcı olmaktır.
            </p>

            <Row className="mb-5">
                <Col md={6} className="mb-4">
                    <Card className="h-100 p-3">
                        <Card.Body>
                            <h3 className="text-center mb-3">Biz Kimiz?</h3>
                            <p>
                                Barista Atölyesi olarak, kahvenin sadece bir içecekten çok daha fazlası olduğuna inanıyoruz.
                                O, bir sanat, bir kültür ve her damak zevkine hitap edebilecek sonsuz bir keşif alanı.
                                En kaliteli çekirdekleri özenle seçiyor, her bir demleme yönteminin inceliklerini araştırıyor ve
                                bu bilgiyi, her seviyeden kahve severle paylaşmaktan gurur duyuyoruz.
                            </p>
                            <p>
                                İster yeni başlayan bir kahve meraklısı olun, ister deneyimli bir barista, sitemizde
                                kendinize uygun demleme yöntemlerini, kahve çeşitlerini ve tat profillerini bulabileceksiniz.
                                Misyonumuz, kahve bilginizi zenginleştirmek ve evinizde bile profesyonel kalitede kahveler demlemenizi sağlamaktır.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mb-4">
                    <Card className="h-100 p-3">
                        <Card.Body>
                            <h3 className="text-center mb-3">Misyonumuz ve Değerlerimiz</h3>
                            <ul className="list-unstyled">
                                <li className="d-flex align-items-start mb-3">
                                    <FaHeart size={24} className="me-3 text-danger flex-shrink-0" />
                                    <div>
                                        <strong>Tutku ve Kalite:</strong> Kahveye olan derin tutkumuzla hareket ediyor, en taze ve kaliteli çekirdekleri sizlere sunmayı hedefliyoruz.
                                    </div>
                                </li>
                                <li className="d-flex align-items-start mb-3">
                                    <FaHandsHelping size={24} className="me-3 text-primary flex-shrink-0" />
                                    <div>
                                        <strong>Bilgi Paylaşımı:</strong> Kahve demleme sanatının inceliklerini, anlaşılır ve erişilebilir bir dille herkesle paylaşmayı önemsiyoruz.
                                    </div>
                                </li>
                                <li className="d-flex align-items-start mb-3">
                                    <FaLeaf size={24} className="me-3 text-success flex-shrink-0" />
                                    <div>
                                        <strong>Sürdürülebilirlik:</strong> Kahve çekirdeklerimizin kaynağını önemsiyor, etik ve sürdürülebilir üretim yapan çiftçileri desteklemeyi amaçlıyoruz.
                                    </div>
                                </li>
                                <li className="d-flex align-items-start mb-3">
                                    <FaCoffee size={24} className="me-3 text-warning flex-shrink-0" />
                                    <div>
                                        <strong>Keşif ve Deneyim:</strong> Her fincanın arkasındaki hikayeyi ve farklı tat profillerini keşfetmeniz için size rehberlik ediyoruz.
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="text-center mt-5">
                <Col>
                    <h2 className="mb-4 HeadLine">Bize Katılın!</h2>
                    <p className="lead">
                        Kahve yolculuğunuzda size eşlik etmekten mutluluk duyarız.
                        Sitemizdeki demleme rehberlerini inceleyin, en sevdiğiniz kahve türünü keşfedin
                        ve mükemmel fincanınızı demlemeye başlayın.
                    </p>
                    <p>
                        Sorularınız mı var? Önerileriniz mi var? Bize her zaman ulaşmaktan çekinmeyin!
                    </p>
                    <a href="contactus" className="btn btn-dark btn-lg mt-3">İletişime Geçin</a>
                </Col>
            </Row>
        </Container>
    );
}