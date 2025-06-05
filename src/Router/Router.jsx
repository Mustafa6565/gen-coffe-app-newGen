import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Pages/Main/MainLayout";
import Coffes from "../Pages/Coffes/Coffes";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Login from "../Pages/Login/Login";
import Espressos from "../Pages/Espressos/Espressos";

export const Router = createBrowserRouter([
    { index: true, element: <MainLayout /> },
    {
        path: "/", element: <MainLayout />, children: [
            { index: true, element: <Home /> },
            { path: "home", element: <Home /> },
            { path: "coffes", element: <Coffes /> },
            { path: "espressos", element: <Espressos /> },
            { path: "aboutus", element: <AboutUs /> },
            { path: "login", element: <Login /> },

        ]
    }
])