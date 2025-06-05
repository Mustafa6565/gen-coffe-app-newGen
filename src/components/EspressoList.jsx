import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import apiService from "../api/apiService";
import LevelEspresso from "./LevelEspresso";

export default function EspressoList() {

    const [espresso, setEspresso] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [shoe, setShoe] = useState(false)
    useEffect(() => {
        const fetchEspresso = async () => {
            try {
                setLoading(true);
                const data = await apiService.getAllEspressoBeans();
                setEspresso(data);
            }
            catch (err) {
                setError("Sayfa Yüklenirken Hata Oluştu");
                console.log("Apı hatası: ", err);
            }
            finally {
                setLoading(false);
            };

        }
        fetchEspresso();
    }, [])

    if (loading) {
        return <Container className="mt-3 p-5 text-center shadow">
            <Spinner animation='border' variant='success' />
        </Container>

    }
    if (error) {
        return <Container className="mt-3 text-center text-danger shadow">
            {error}
        </Container>

    }



    return (
        <Container className="mt-3 mb-3 shadow text-center">
            <h2 className="mb-2">Espresso Çeşiteleri </h2>
            <Row className="justify-content-around text-start">
                {espresso.map((bean) => (
                    <Col key={bean.id} xs={12} md={6} lg={6} style={{ justifyContent: "center" }} className="mb-4">
                        <Card>

                            <Card.Body>

                                <Card.Title >
                                    {bean.name}
                                </Card.Title>
                                <Card.Text>

                                    {bean.history}
                                </Card.Text>
                                <Card.Title>

                                    {bean.roastLevels[0].level}
                                </Card.Title>
                                <Card.Text>
                                    Kavrum Derecesi:    {bean.roastLevels[0].scale}  <LevelEspresso rating={bean.roastLevels[0].scale} />
                                </Card.Text>
                                <Card.Text>
                                    Tadım Notları:    {bean.roastLevels[0].tastingNotes}
                                </Card.Text>
                                <Card.Title>
                                    {bean.roastLevels[1].level}
                                </Card.Title>
                                <Card.Text>
                                    Kavrum Derecesi:    {bean.roastLevels[1].scale} <LevelEspresso rating={bean.roastLevels[1].scale} />
                                </Card.Text>
                                <Card.Text>
                                    Tadım Notları:    {bean.roastLevels[1].tastingNotes}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                ))}
            </Row>
        </Container>
    );

}