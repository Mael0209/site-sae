import {MapContainer, Marker, Polygon, Popup, TileLayer} from 'react-leaflet'
import Bouton, {varianteBouton} from "../components/Bouton.tsx";
import type {LatLngExpression} from "leaflet";

const positions: LatLngExpression[] = [
    [49.89733319134947, 2.2915148943449015],
    [49.89258213065571, 2.31085240530827],
    [49.887309064479, 2.3075245545843424],
    [49.88898955470408, 2.2882769855324305]
]

export default function Home() {
    return (
        <>
            <h1 className="text-center">Home</h1>
            <div className={"carte"} style={{display: "flex", justifyContent: "center"}}>
                <MapContainer center={[49.884991050716685, 2.2926841388416674]} zoom={13} scrollWheelZoom={true}
                              style={{height: "500px", width: "800px"}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[49.87070212774772, 2.26409461666023]}>
                        <Popup>
                            IUT d'Amiens
                        </Popup>
                    </Marker>
                    <Marker position={[49.89061204147421, 2.3080642060530874]}>
                        <Popup>
                            Gare
                        </Popup>
                    </Marker>
                    <Polygon positions={positions} color="green"/>
                </MapContainer>
            </div>
            <Bouton variante={varianteBouton.primaire} text={"Trouver un hébergement"}/>

        </>
    )
}