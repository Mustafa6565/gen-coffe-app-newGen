import { useState } from "react";
import RouterLink from "./RouterLink";
import { Container, Image, Nav, Navbar } from "react-bootstrap";

export default function NavigationBar() {
    const [showMenu, setShowMenu] = useState(false);

    const navigate = [
        { id: 1, title: "Home", to: "home" },
        { id: 2, title: "About Us", to: "aboutus" },
        { id: 3, title: "Coffe's", to: "coffes" },
        { id: 3, title: "Espresso's", to: "espressos" },
        { id: 4, title: "Error", to: "" },

    ]


    return (
        <div className="container-fluid">

            <Navbar collapseOnSelect className="rounded mt-2 shadow" expand="lg" bg="ligth" data-bs-theme="ligth">
                <Container>
                    <Navbar.Brand href="#home">
                        <Nav.Link href="home">
                            <span className="logo">Barista Atölyesi</span>
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
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