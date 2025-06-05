import { Container } from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="bg-dark text-white shadow text-center py-3 mt-auto"> {/* mt-auto çok önemli! */}
            <Container>
                <p>&copy; {new Date().getFullYear()} Barista Atölyesi. Tüm Hakları Saklıdır.</p>
            </Container>
        </footer>
    );
}