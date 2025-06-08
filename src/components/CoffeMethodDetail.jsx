import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import apiService from "../api/apiService";
import { Link, useParams } from "react-router-dom";

export default function CoffeMethodDetail() {
    const [coffeeDetail, setCoffeeDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchCoffeeDetail = async () => {
            try {
                setLoading(true);
                const data = await apiService.getCoffeeById(id);
                setCoffeeDetail(data);
            } catch (err) {
                setError("Kahve demleme yöntemi yüklenirken bir hata oluştu.");
                console.error("API Hatası:", err);
            } finally {
                setLoading(false);
            }
        };


        if (id) {
            fetchCoffeeDetail();
        } else {
            setError("Kahve ID'si bulunamadı.");
            setLoading(false);
        }
    }, [id]);

    if (loading) {
        return <Container className="text-center my-5">
            <Spinner animation='border' variant='success' />
        </Container>;
    }

    if (error) {
        return <Container className="mt-3 mb-3 p-3">Hata: {error}</Container>;
    }


    return (
        <Container className="mt-3 mb-3 shadow p-3">
            {coffeeDetail ? (
                <Card className="     gap-5">
                    <Card.Header className="text-center HeadLine">
                        <h2>{coffeeDetail.name}</h2>
                    </Card.Header>
                    <Row className="text-center  ">
                        <Col>
                            <Card.Img variant="top" sizes='sm' style={{ width: "180px", margin: 5 }} src={`/${coffeeDetail.img}`} alt={coffeeDetail.name} />
                        </Col>


                    </Row>
                    <Row className="p-3">
                        <Col>
                            <Card.Title>
                                Hakkında
                            </Card.Title>
                            <Card.Body className="text-start">
                                <p>{coffeeDetail.description}</p>
                            </Card.Body>
                        </Col>
                    </Row>
                    <Row className="p-3">
                        <Col>
                            <Card.Title>Nasıl Demlenir</Card.Title>
                            {coffeeDetail?.howToBrew?.map((brew, index) => (
                                <li key={index}>{brew} </li>
                            ))}
                            <Link to={coffeeDetail.url} className="btn mt-3 btn-warning">İzle  </Link>

                        </Col>
                    </Row>

                </Card>
            ) : (
                <p>Detay bulunamadı.</p>
            )}
        </Container>
    );
}