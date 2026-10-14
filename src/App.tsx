import {Route, Routes} from "react-router";
import Layout from "./Layout.tsx";
import Home from "./pages/Home.tsx";
import Carte from "./pages/Carte.tsx";
import TrouverHebergement from "./pages/TrouverHebergement.tsx";
import Alertes from "./pages/Alertes.tsx";
import Connexion from "./pages/Connexion.tsx"
import Centre from "./pages/Centre.tsx"
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/refuge.css";
import "./css/App.css";
import {useState} from "react";
import {UserContext, type Utilisateur} from "./utils.ts";

export default function App() {
    const [user, setUser] = useState<Utilisateur | null>(null);

    return (
        <UserContext value={{user: user, setUser: setUser}}>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"/carte"} element={<Carte/>}/>
                    <Route path={"/trouver-centre"} element={<TrouverHebergement/>}/>
                    <Route path={"/alertes"} element={<Alertes/>}/>
                    <Route path={"/login"} element={<Connexion/>}/>
                    <Route path={"/centre/:id"} element={<Centre/>}/>
                </Route>
            </Routes>
        </UserContext>
    );
}

// TODO : Adapter la prise de données avec la vraie BDD quand disponible