import { Card, CardHeader, Col, Container, Row } from "react-bootstrap";
import './Home.css'
export default function Home() {
    return (
        <>
            <div className="hero-section"> {/* Eğer CSS sınıfı kullanacaksanız */}
                <Container className="shadow mt-3">

                    <Row className="blur">

                        <h2>Merhabalar</h2>
                        <h4>Özenle Seçilmiş Kahve Çekirdekleri.</h4>
                        <h5>Mükemmel Demleme Teknikleri.</h5>
                        <h5>Ve Kahveye Dair Herşey...</h5>
                        <span className="HeadLine">Barista Atölyesi</span>


                    </Row>
                    {/* <Row className="mt-2">
                        <Col className="blur me-2" lg={6}>
                            <Card  >

                                <video autoplay muted playsinline className=" relative" src="Chemex.mp4" type="video/mp4">

                                </video>

                            </Card>
                        </Col>
                    </Row> */}
                    {/* <Row className="mt-2">
                        <Col className="blur me-2">
                            <h1>col 1</h1>
                        </Col>
                        <Col className="blur me-2">
                            <h1>col 2</h1>
                        </Col>
                        <Col className="blur">
                            <h1>col 3</h1>
                        </Col>
                    </Row> */}

                </Container>
            </div>

        </>
    );
}