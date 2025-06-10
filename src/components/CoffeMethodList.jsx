import React, { useContext, useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col, Spinner, CardHeader } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffes } from '../Features/Coffes/coffeeSlice';
import { StateControll } from '../Context/StateControl';

function CoffeeMethodsList() {
    const dispatch = useDispatch();
    const coffees = useSelector((state) => state.coffees.items);
    const loading = useSelector((state) => state.coffees.loading);
    const error = useSelector((state) => state.coffees.error);
    const { theme } = useContext(StateControll)
    useEffect(() => {
        if (loading === 'idle') {
            dispatch(fetchCoffes());

        }
    }, [loading, dispatch])


    if (loading === 'pending') {
        return <Container lassName={` mt-3 mb-3  p-5 my-5 text-center  shadow ${theme ? 'bg-dark' : 'bg-ligth'}`} data-bs-theme={theme ? "dark" : "ligth"}>
            <Spinner animation='border' variant='success' />
        </Container>;
    }

    if (loading === 'failed') {
        return <Container className={` mt-3 mb-3  p-5 my-5 text-center text-danger shadow ${theme ? 'bg-dark' : 'bg-ligth'}`} data-bs-theme={theme ? "dark" : "ligth"}>{error}</Container>;
    }

    return (
        <><Container className={` mt-3 mb-3 p-3 shadow ${theme ? 'bg-dark text-white' : 'bg-ligth'}`} data-bs-theme={theme ? "dark" : "ligth"} style={{ border: "2px solid #FED8B1" }}>
            <h2 className="text-center mb-4">Kahve Demleme Yöntemleri</h2>
            <Row className="justify-content-around" >
                {coffees.map((coffee) => (
                    <Col key={coffee.id} xs={4} md={3} lg={1} style={{ justifyContent: "center" }} className="mb-4">
                        <Card style={{ width: "110px", objectFit: "contain" }} className=' text-center d-flex'>
                            <Card.Header className='' style={{ fontSize: "13px" }}>
                                {coffee.name}

                            </Card.Header>
                            <Card.Img variant="top" sizes='xs' style={{ height: "150px" }} src={`/${coffee.img}`} alt={coffee.name} />

                            <Link to={`${coffee.id}`} className='btn btn-sm btn-warning '>Ayrıntılar </Link>

                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>


        </>
    );
}

export default CoffeeMethodsList;