import { Card, CardHeader, Col, Container, Row } from "react-bootstrap";
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
export default function Home() {
    return (
        <>
            <div className="hero-section"> {/* Eğer CSS sınıfı kullanacaksanız */}
                <Container className="shadow  mt-3">
                    {/* 
                    <Row className="blur p-5">


                        <h1>Özenle Seçilmiş Kahve Çekirdekleri.</h1>
                        <h2>Mükemmel Demleme Teknikleri.</h2>
                        <h4>Ve </h4>
                        <h4>Kahveye Dair Herşey...</h4>
                        <span className="HeadLine">Barista Atölyesi</span>


                    </Row> */}
                    <Carousel className='rounded'>
                        <Carousel.Item>
                            <Row className="blur p-5">


                                <h1>Özenle Seçilmiş Kahve Çekirdekleri.</h1>
                                <h2>Mükemmel Demleme Teknikleri.</h2>
                                <h4>Ve </h4>
                                <h4>Kahveye Dair Herşey...</h4>
                                <span className="HeadLine">Barista Atölyesi</span>


                            </Row>
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row className="blur p-5">


                                <h1>Özenle Seçilmiş Kahve Çekirdekleri.</h1>
                                <h2>Mükemmel Demleme Teknikleri.</h2>
                                <h4>Ve </h4>
                                <h4>Kahveye Dair Herşey...</h4>
                                <span className="HeadLine">Barista Atölyesi</span>


                            </Row>
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row className="blur p-5">


                                <h1>Özenle Seçilmiş Kahve Çekirdekleri.</h1>
                                <h2>Mükemmel Demleme Teknikleri.</h2>
                                <h4>Ve </h4>
                                <h4>Kahveye Dair Herşey...</h4>
                                <span className="HeadLine">Barista Atölyesi</span>


                            </Row>
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
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