import { Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import apiService from '../api/apiService';
import { useEffect, useState } from 'react';

function Slider() {
    const [coffees, setCoffees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoffees = async () => {
            try {
                setLoading(true);
                const data = await apiService.getAdditionalData(); // API çağrısı
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
    // Display loading or error messages
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
        <Container data-bs-theme={"dark"} className='mt-3 mb-3 p-3 shadow' style={{ border: "2px solid #FED8B1" }}>
            <Carousel interval={4000} variant='success' >
                {coffees?.tips?.map((data) => ( // Changed to implicit return with parentheses
                    <Carousel.Item className='text-center p-5' key={data.id}>
                        <Row >
                            <h3>{data.title} </h3>
                            <p>{data.content} </p>
                        </Row>
                        <Carousel.Caption>
                            {/* You can add content to Carousel.Caption if needed */}
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}

export default Slider;