import { useEffect, useState, useContext } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import apiService from "../api/apiService";
import LevelEspresso from "./LevelEspresso";
import { StateControll } from "../Context/StateControl";
import FavoriChoise from "./FavariChoise";
import { useDispatch, useSelector } from "react-redux";
import { fetchEspressos } from "../Features/Coffes/coffeeSlice";

export default function EspressoList() {

    const { favoriteEspressoIds, theme } = useContext(StateControll);


    const dispatch = useDispatch();


    const espressos = useSelector((state) => state.espressos.items)
    const loading = useSelector((state) => state.espressos.loading)
    const error = useSelector((state) => state.espressos.error)

    useEffect(() => {
        if (loading === 'idle') {
            dispatch(fetchEspressos())
        }
    }, [dispatch, loading])


    if (loading === 'idle') {
        return (
            <Container className="mt-3 p-5 text-center shadow">
                <Spinner animation="border" variant="success" />
            </Container>
        );
    }

    if (loading === 'failed') {
        return (
            <Container className="mt-3 text-center text-danger shadow">
                {error}
            </Container>
        );
    }

    return (
        <Container className={` mt-3 mb-3 p-3 shadow ${theme ? 'bg-dark text-white' : 'bg-ligth'}`} data-bs-theme={theme ? "dark" : "ligth"} style={{ border: "2px solid #FED8B1" }}>
            <h3>Espreeso Çekirdekleri</h3>

            <Row className="justify-content-around text-start ">
                {espressos.map((bean) => {

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