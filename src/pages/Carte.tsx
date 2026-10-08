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
    const [useLocation, setUseLocation] = useState<boolean>(false);
    const [afficherZones, setAfficherZones] = useState<boolean>(false);
    const [afficherCentres, setAfficherCentres] = useState<boolean>(true);


    return (
        <>
            <div className="d-flex align-items-center flex-column">
                <div>
                    <input type="checkbox" id="use-location" checked={useLocation}
                           onClick={e => setUseLocation(e.currentTarget.checked)}/>
                    <label htmlFor="use-location">Utiliser la localisation</label>
                </div>
                <div>
                    <input type="checkbox" id="show-zones" checked={afficherZones}
                           onClick={e => setAfficherZones(e.currentTarget.checked)}/>
                    <label htmlFor="show-zones">Afficher zones</label>
                </div>
                <div>
                    <input type="checkbox" id="show-centres" checked={afficherCentres}
                           onClick={e => setAfficherCentres(e.currentTarget.checked)}/>
                    <label htmlFor="show-centres">Afficher centres</label>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center", margin: "2em"}}>
                <CarteComp height="500px" width="900px" zoom={11}>
                    {afficherCentres && mockCentres.map(c => <Marker position={c.position}><Popup>{c.nom} <br/>
                        <Link to={"/centre/" + c.id}>Voir le centre</Link> </Popup></Marker>)}
                    {afficherZones && mockZones.map(z => <Polygon color="red" positions={z.perimetre}><Popup>{z.nom}
                        <br/>-
                        par {z.utilisateur.nom} {z.utilisateur.prenom} </Popup></Polygon>)}
                    {useLocation && <LocationMarker/>}
                </CarteComp>
            </div>
        </>
    )
}