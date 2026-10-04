import NavBar from "./components/Navbar";
import {images} from "./utils";
import Bouton, {varianteBouton} from "./components/Bouton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/refuge.css";
import "./css/App.css";

export default function App() {
    return (
        <>
            <NavBar/>
            <div className="images text-center">
                <img alt="logo" src={images.alerte}/>
                <img alt="logo" src={images.animaux}/>
                <img alt="logo" src={images.horloge}/>
                <img alt="logo" src={images.places}/>
                <img alt="logo" src={images.pmr}/>
                <img alt="logo" src={images.position}/>
                <img alt="logo" src={images.restauration}/>
                <img alt="logo" src={images.sanitaires}/>
            </div>
            <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "center", marginBlock: "2em"}}>
                <Bouton variante={varianteBouton.primaire} text="Trouver un hébergement"/>
                <Bouton variante={varianteBouton.secondaire} text="Utiliser ma position"/>
                <Bouton variante={varianteBouton.danger} text="Fermer le centre"/>
            </div>
        </>
    );
}
