import { Container, FormGroup, Form, FormLabel, Button, Row, Col, Card } from "react-bootstrap";

export default function Login() {
    return (

        <Container className="mt-3  shadow  p-3 mb-3">

            <Row className="text-center">
                <Col className="" lg={6}>
                    <Card>
                        <Card.Header as={"h3"}>
                            Giriş Yap
                        </Card.Header>
                        <Card.Body>

                            <Form className="m-3 p-5 text-start ">

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
                        </Card.Body>
                    </Card>
                </Col>
                <Col>

                </Col>
            </Row>
        </Container>


    );

}