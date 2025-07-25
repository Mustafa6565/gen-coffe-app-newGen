import { Card, Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import apiService from "../api/apiService";
import { Link, useParams } from "react-router-dom";
import { StateControll } from "../Context/StateControl";

function CoffeMethodDetail() {
    const [coffeeDetail, setCoffeeDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { theme } = useContext(StateControll)
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
        <Container className={`shadow ${theme ? 'bg-dark text-white' : 'bg-ligth'}`} style={{ border: "2px solid #FED8B1" }}>
            {coffeeDetail ? (
                <Card data-bs-theme={theme ? "dark" : "ligth"} className={`mt-3 p-3 mb-3 shadow ${theme ? 'bg-dark' : 'bg-ligth'}`} >
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
                            <Card.Title>Özetle </Card.Title>
                            <p>{coffeeDetail.tasteProfile.summary}</p>
                            <Card.Title className="mt-2"> Kıvam</Card.Title>
                            <ul>
                                {coffeeDetail.tasteProfile.keywords.map((taste, index) => (
                                    <li key={index}>{taste} </li>
                                ))}
                            </ul>
                            <Card.Title className="mt-2"> Asidite </Card.Title>
                            <p>{coffeeDetail.tasteProfile.acidity}</p>
                            <Card.Title className="mt-2"> Tadım Notları </Card.Title>
                            <p> {coffeeDetail.tasteProfile.flavorNotes}</p>
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
export default CoffeMethodDetail;