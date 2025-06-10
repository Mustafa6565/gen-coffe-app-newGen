import { Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import apiService from '../api/apiService';
import { useContext, useEffect, useState } from 'react';
import { StateControll } from '../Context/StateControl';

function Slider() {
    const [coffees, setCoffees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { theme } = useContext(StateControll)
    useEffect(() => {
        const fetchCoffees = async () => {
            try {
                setLoading(true);
                const data = await apiService.getAdditionalData();
                setCoffees(data);
            } catch (err) {
                setError("Kahve demleme yöntemleri yüklenirken bir hata oluştu.");
                console.error("API Hatası:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchCoffees();
    }, []);
    console.log(coffees)

    if (loading) {
        return (
            <Container className='mt-3 mb-3 p-3 shadow'>
                <p>Yükleniyor...</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className='mt-3 mb-3 p-3 shadow'>
                <p style={{ color: 'red' }}>{error}</p>
            </Container>
        );
    }

    return (
        <Container data-bs-theme={theme ? "ligth" : "dark"} className={`mt-3 mb-3 p-3 shadow ${theme ? 'bg-dark' : 'bg-ligth'}`} style={{ border: "2px solid #FED8B1" }}>
            <Carousel interval={4000} >
                {coffees?.tips?.map((data) => (
                    <Carousel.Item className='text-center p-4' key={data.id}>
                        <Row className='text-color-white '  >
                            <h5>{data.title} </h5>
                            <p>{data.content} </p>
                        </Row>

                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}

export default Slider;