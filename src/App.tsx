import NavBar from "./components/Navbar";
import {images} from "./utils";
import Bouton from "./components/Bouton";
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
                <Bouton type="bleu" text="Trouver un hébergement"/>
                <Bouton type="blanc" text="Utiliser ma position"/>
                <Bouton type="rouge" text="Fermer le centre" isDisabled/>
            </div>
        </>
    );
}
