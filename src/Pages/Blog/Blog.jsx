import { useContext, useEffect } from "react";
import { Accordion, Badge, Button, ButtonGroup, Card, CardFooter, Col, Container, Row } from "react-bootstrap";
import { StateControll } from "../../Context/StateControl";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogPost } from "../../Features/Coffes/coffeeSlice";
import { FaUserAlt } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa6";

export default function Blog() {

    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs.items);
    const loading = useSelector((state) => state.blogs.loading);
    const error = useSelector((state) => state.blogs.error);

    useEffect(() => {
        if (loading === 'idle') {
            dispatch(fetchBlogPost());

        }
    }, [loading, dispatch])





    const { theme } = useContext(StateControll);
    return (
        <Container className={`shadow mt-3 mb-3 p-3 ${theme ? 'bg-dark' : 'bg-ligth'}`} data-bs-theme={theme ? 'dark' : 'ligth'}>
            <Row className="d-flex justify-content-center">
                <Col lg={8} md={12} sm={3} className="">
                    {blogs.map((blog) => (
                        <Card data-bs-theme={theme ? 'dark' : 'ligth'} className="mt-3 shadow">


                            <Card >
                                <Row className="">
                                    <Col lg={4} md={4} >
                                        <Card.Img src={blog.img} />

                                    </Col>
                                    <Col lg={8} md={8} sm={10}>
                                        <Card.Body>
                                            <Card.Title>{blog.title}</Card.Title>

                                            <Card.Text className="mt-5">{blog.content} </Card.Text>
                                        </Card.Body>
                                        <Card.Text className="mt-5 text-color-yellow"><FaUserAlt className="mb-1 me-1" /> {blog.author}</Card.Text>

                                    </Col>
                                </Row>
                                <CardFooter>
                                    <Row>

                                        <Col className="text-start" >
                                            <Card.Text> <BsFillCalendarDateFill className="me-2 mb-1" /> {blog.date}  </Card.Text>

                                        </Col>
                                        <Col className="text-end" >
                                            <ButtonGroup aria-label="Basic example">
                                                <Button variant='warning'>

                                                    <FaComment />
                                                    <Badge className="ms-1" bg="danger">25</Badge>
                                                </Button>
                                                <Button variant='warning'>
                                                    <MdOutlineFavorite />
                                                    <Badge className="ms-1" bg="danger">12</Badge>
                                                </Button>
                                            </ButtonGroup>
                                        </Col>
                                    </Row>

                                </CardFooter>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header eventKey={0}> ayrıntılar</Accordion.Header>
                                        <Accordion.Body>
                                            {blog.detailedContent}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card>

                        </Card>))}
                </Col>
            </Row>
        </Container>
    );
}