import { Outlet, Router } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import { Col, Container, Row } from "react-bootstrap";
import RouterLink from "../../components/RouterLink";
import Home from "../Home/Home";
import Footer from "../../components/Footer";
import { useContext } from "react";
import { StateControll } from "../../Context/StateControl";

export default function MainLayout() {
    const { theme } = useContext(StateControll)
    return (
        <div className={`${theme ? "bg-secondary" : "bg-ligth"} pt-2`}>



            <NavigationBar />
            <Outlet />
            <Footer />
        </div>
    );
}