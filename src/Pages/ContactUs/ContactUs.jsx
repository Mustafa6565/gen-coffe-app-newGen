import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

export default function ContactUs() {
    const optionContact = [
        { id: 1, title: "Teknik Destek." },
        { id: 2, title: "Şikayet Veya Öneri." },
        { id: 3, title: "Kurumsal Destek." },
        { id: 4, title: "Diğer." },

    ]
    return (
        <Container className="mt-3 mb-3 p-3 shadow" style={{ border: "2px solid #FED8B1" }}>
            <Row className="d-flex justify-content-center">
                <Col className="" lg="8">
                    <h3 className="text-center mb-4 ">Barista Atölyesine Mesajını İlet</h3>

                    <Card>

                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        Email Adress
                                    </Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        İletişime Geçmek İstediğiniz Birimi Seçiniz.
                                    </Form.Label>
                                    <Form.Select>
                                        <option value={0}>Seçiniz</option>
                                        {optionContact.map((option) =>
                                        (
                                            <option value={option.id}>{option.title} </option>))}
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        Mesajınızı Buraya Yazınız.
                                    </Form.Label>
                                    <Form.Control as={"textArea"} rows={3} />
                                </Form.Group>
                            </Form>
                            <Button variant="warning">Mesajını Gönder</Button>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
}