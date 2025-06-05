import { Container, FormGroup, Form, FormLabel, Button, Row, Col, Card } from "react-bootstrap";

export default function Login() {
    return (

        <Container className="mt-3 mb-3">

            <Row>
                <Col >
                    <div className="container-fluid d-flex justify-content-center">
                        <Form className="m-3 p-5 shadow w-6/12 h-auto">
                            <FormLabel>
                                <h2 className="text-secondary"> Giriş Yap</h2>
                            </FormLabel>
                            <FormGroup className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    Email Adress
                                </Form.Label>
                                <Form.Control type="email" placeholder="Email Gir...">

                                </Form.Control>

                            </FormGroup>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>


    );

}