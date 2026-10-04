import NavBar from "./components/Navbar";
import {images} from "./utils";
import Bouton, {varianteBouton} from "./components/Bouton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/refuge.css";
import "./css/App.css";
import {Route, Routes} from "react-router";
import Layout from "./Layout.tsx";
import Home from "./Home.tsx";

export default function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<Home/>}/>
            </Route>

        </Routes>
    );
}
