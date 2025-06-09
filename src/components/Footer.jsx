import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer style={{ height: "30vh" }} className="bg-dark text-white shadow text-center py-3 mt-auto">
            <Container>
                <p>&copy; {new Date().getFullYear()} Barista Atölyesi. Tüm Hakları Saklıdır.</p>
                <Row>

                </Row>

            </Container>
        </footer >
    );
}