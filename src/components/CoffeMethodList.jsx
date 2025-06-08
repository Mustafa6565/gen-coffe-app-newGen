import React, { useEffect, useState } from 'react';
import apiService from '../api/apiService'; // apiService'i import edin
import { Card, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffes } from '../Features/Coffes/coffeeSlice';

function CoffeeMethodsList() {
    const dispatch = useDispatch();
    const coffees = useSelector((state) => state.coffees.items);
    const loading = useSelector((state) => state.coffees.loading);
    const error = useSelector((state) => state.coffees.error);

    useEffect(() => {
        if (loading === 'idle') {
            dispatch(fetchCoffes());

        }
    }, [loading, dispatch])



    if (loading === 'pending') {
        return <Container className="text-center my-5">
            <Spinner animation='border' variant='success' />
        </Container>;
    }

    if (loading === 'failed') {
        return <Container className="text-center p-5 my-5 text-danger">{error}</Container>;
    }

    return (
        <><Container className="mt-3 mb-3  shadow ">
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