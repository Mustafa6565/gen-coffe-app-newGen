import { Container, FormGroup, Form, FormLabel, Button, Row, Col, Card } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Login() {
    return (
        <Container className="mt-3 shadow p-3 mb-3">
            <Row className="text-center justify-content-center"> {/* Ortalamak için justify-content-center eklendi */}
                <Col lg={6} md={8} sm={10} xs={12} className="mb-4"> {/* Küçük ekranlarda daha iyi görünmesi için md ve sm eklendi */}
                    <Card>
                        <Card.Header as={"h3"}>
                            Giriş Yap
                        </Card.Header>
                        <Card.Body>
                            <Form className="m-3 p-3 text-start"> {/* padding azaltıldı */}
                                <FormGroup className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>
                                        Email Adress
                                    </Form.Label>
                                    <Form.Control type="email" placeholder="Email Gir..." />
                                </FormGroup>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Beni Hatırla" /> {/* Label güncellendi */}
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100"> {/* Buton tam genişlik yapıldı */}
                                    Giriş Yap
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>


                <Col lg={6} md={8} sm={10} xs={12}>
                    <Card className="h-100 d-flex flex-column">
                        <Card.Header as={"h3"}>
                            Veya ile Giriş Yap
                        </Card.Header>
                        <Card.Body className="d-flex flex-column justify-content-center">
                            <div className="d-grid gap-2">
                                <Button variant="outline-warning" className="mb-2">
                                    Google ile Giriş Yap
                                    <FcGoogle className="ms-2" />

                                </Button>
                                <Button variant="outline-primary" className="mb-2">

                                    Facebook ile Giriş Yap
                                    <FaFacebook className="ms-2" />
                                </Button>
                                <Button variant="outline-dark" className="mb-2">

                                    Twitter ile Giriş Yap
                                    < FaXTwitter className="ms-2" />
                                </Button>

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
