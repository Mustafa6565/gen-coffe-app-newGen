import { useEffect, useState, useContext } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import apiService from "../api/apiService";
import LevelEspresso from "./LevelEspresso";
import { StateControll } from "../Context/StateControl";
import FavoriChoise from "./FavariChoise";

export default function EspressoList() {

    const { favoriteEspressoIds } = useContext(StateControll);

    const [espresso, setEspresso] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEspresso = async () => {
            try {
                setLoading(true);
                const data = await apiService.getAllEspressoBeans();
                setEspresso(data);
            } catch (err) {
                setError("Sayfa Yüklenirken Hata Oluştu");
                console.error("API hatası: ", err);
            } finally {
                setLoading(false);
            }
        };
        fetchEspresso();
    }, []);

    if (loading) {
        return (
            <Container className="mt-3 p-5 text-center shadow">
                <Spinner animation="border" variant="success" />
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="mt-3 text-center text-danger shadow">
                {error}
            </Container>
        );
    }

    return (
        <Container className="mt-3 mb-3 shadow text-center" style={{ border: "2px solid #FED8B1" }}>
            <h2 className="mb-2">Espresso Çeşitleri</h2>
            <Row className="justify-content-around text-start">
                {espresso.map((bean) => {

                    const isFavorite = favoriteEspressoIds.includes(bean.id);

                    return (
                        <Col key={bean.id} xs={12} md={6} lg={6} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{bean.name}</Card.Title>
                                    <Card.Text>{bean.history}</Card.Text>


                                    {bean.roastLevels && bean.roastLevels.map((roast, index) => (
                                        <div key={index}>
                                            <Card.Title>{roast.level}</Card.Title>
                                            <Card.Text>
                                                Kavrum Derecesi: {roast.scale}{" "}
                                                <LevelEspresso rating={roast.scale} />
                                            </Card.Text>
                                            <Card.Text>
                                                Tadım Notları: {roast.tastingNotes}
                                            </Card.Text>
                                        </div>
                                    ))}
                                </Card.Body>
                                <Card.Footer>
                                    <FavoriChoise isFavorite={isFavorite} bean={bean.id} />
                                </Card.Footer>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}