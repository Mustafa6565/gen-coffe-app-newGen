import { Container } from "react-bootstrap";
import CoffeeMethodsList from "../../components/CoffeMethodList";
import HangiMethod from "../../components/HangiMethod";
import Slider from "../../components/Slider";

function Coffes() {
    return (
        <>
            <Slider />
            <CoffeeMethodsList />
            <HangiMethod />

        </>
    );
} export default Coffes;