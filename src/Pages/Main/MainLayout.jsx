import { Outlet, Router } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import { Col, Container, Row } from "react-bootstrap";
import RouterLink from "../../components/RouterLink";
import Home from "../Home/Home";
import Footer from "../../components/Footer";

export default function MainLayout() {
    return (
        <>



            <NavigationBar />
            <Outlet />
            <Footer />
        </>
    );
}