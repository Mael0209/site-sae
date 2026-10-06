import {Marker, Popup, useMapEvents} from "react-leaflet";
import CarteComp from "../components/Carte"
import {useState} from "react";
import type {LatLngExpression} from "leaflet";

function OnClick() {
    const [position, setPosition] = useState<LatLngExpression|null>(null)
    const map = useMapEvents({
        click: () => {
            map.locate()
        },
        locationfound: (loc) => {
            map.setView(loc.latlng, map.getZoom());
            setPosition(loc.latlng);
        }
    })
    return position==null ? null: (
        <Marker position={position}>
            <Popup >
                localisation
            </Popup>
        </Marker>
    )
}

export default function Carte() {
    return (
        <div style={{display: "flex", justifyContent: "center", margin: "2em"}}>
            <CarteComp height={"500px"} width={"900px"} zoom={11}>
                <Marker draggable position={[49.89061578961882, 2.2978581957670614]}>
                    <Popup>
                        Amiens
                    </Popup>
                </Marker>
                <OnClick/>
            </CarteComp>
        </div>
    )
}