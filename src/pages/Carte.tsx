import {Marker, Polygon, Popup} from "react-leaflet";
import CarteComp from "../components/Carte"
import {mockCentres, mockZones} from "../JeuEssai.ts";

export default function Carte() {
    return (
        <div style={{display: "flex", justifyContent: "center", margin: "2em"}}>
            <CarteComp height="500px" width="900px" zoom={11}>
                {mockCentres.map(c => <Marker position={c.position}><Popup>{c.nom}</Popup></Marker>)}
                {mockZones.map(z => <Polygon color="red" positions={z.perimetre}><Popup>{z.nom} <br/>-
                    par {z.utilisateur.nom} {z.utilisateur.prenom} </Popup></Polygon>)}
            </CarteComp>
        </div>
    )
}