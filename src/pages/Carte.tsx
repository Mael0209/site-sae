import {Marker, Polygon, Popup, useMap, useMapEvents} from "react-leaflet";
import CarteComp from "../components/Carte"
import {mockCentres, mockZones} from "../JeuEssai.ts";
import {useState} from "react";
import {LatLng} from "leaflet";
import {Link} from "react-router";

function LocationMarker() {
    const [location, setLocation] = useState<LatLng | null>(null);

    useMap().locate();

    useMapEvents({
        locationfound: (l) => {
            setLocation(l.latlng)
        }
    });

    return location ? <Marker position={location}><Popup>Votre position</Popup></Marker> : null;
}

export default function Carte() {
    return (
        <div style={{display: "flex", justifyContent: "center", margin: "2em"}}>
            <CarteComp height="500px" width="900px" zoom={11}>
                {mockCentres.map(c => <Marker position={c.position}><Popup>{c.nom} <br/>
                    <Link to={"/centre/" + c.id}>Voir le centre</Link> </Popup></Marker>)}
                {mockZones.map(z => <Polygon color="red" positions={z.perimetre}><Popup>{z.nom} <br/>-
                    par {z.utilisateur.nom} {z.utilisateur.prenom} </Popup></Polygon>)}
                <LocationMarker/>
            </CarteComp>
        </div>
    )
}