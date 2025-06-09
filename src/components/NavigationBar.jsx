import { useContext, useState } from "react";
import RouterLink from "./RouterLink";
import { Badge, Button, Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { StateControll } from "../Context/StateControl";

export default function NavigationBar() {
    const [showMenu, setShowMenu] = useState(false);
    const { favoriteEspressoIds } = useContext(StateControll)
    const navigate = [
        { id: 1, title: "Home", to: "/home" },
        { id: 2, title: "About Us", to: "/aboutus" },
        { id: 5, title: "İletişim", to: "/contactus" },


    ]
    function handleShowModal() {
        setShowMenu(!showMenu)
    }

    return (
        <div className="container-fluid">

            <Navbar collapseOnSelect className="rounded mt-2 shadow" expand="lg" bg="ligth" data-bs-theme="ligth" style={{ border: "2px solid #FED8B1" }}>
                <Container>
                    <Navbar.Brand href="/home">

                        <span className="logo">Barista Atölyesi</span>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav>
                            <NavDropdown title="Coffe's">
                                <NavDropdown.Item style={{ border: "2px solid #FED8B1 ", borderBottom: "none" }} href="/coffes">
                                    Demleme YÖntemleri
                                </NavDropdown.Item>
                                <NavDropdown.Item style={{ border: "2px solid #FED8B1 ", borderTop: "none" }} href="/espressos">
                                    Espresso Çekirdeği
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className="me-auto">

                            {navigate.map((link) => (
                                <RouterLink key={link.id} link={link} />
                            ))}

                        </Nav>
                        <Nav>
                            <Nav.Link href="/login">Giriş Yap</Nav.Link>
                            <Nav.Link href="#register">Kayıt Ol</Nav.Link>
                        </Nav>



                    </Navbar.Collapse>
                    <Button className="ms-2" href="/favoriler" variant={"warning"}>
                        Favoriler
                        <Badge className="ms-1" bg="dark">{favoriteEspressoIds.length}</Badge>

                    </Button>

                </Container>
            </Navbar>

            {/* <div className="navbar bg-body-tertiary navbar-expand-lg  border rounded mt-2 d-flex justify-center">
                <div className="container d-flex justify-center">

                    <div className="logo ">
                        <span style={{ fontFamily: "Sixtyfour Convergence Variable", fontStyle: "-moz-initial" }}>BaristaAtölyesi</span>
                    </div>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {navigate.map((link) => (
                                <RouterLink key={link.id} link={link} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div> */}

        </div>
    );
}