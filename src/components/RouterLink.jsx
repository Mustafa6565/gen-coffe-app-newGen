import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function RouterLink({ link }) {
    return (
        <>
            <li className={`nav-item ms-3`}>
                <Nav.Link
                    href={link.to}
                >
                    {link.title}
                </Nav.Link>
            </li>
        </>

    );
}