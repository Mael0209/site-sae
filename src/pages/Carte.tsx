import {Marker, Popup} from "react-leaflet";
import CarteComp from "../components/Carte"

export default function Carte() {
    return (
        <div style={{ display: "flex", justifyContent: "center", margin: "2em" }}>
            <CarteComp height={"500px"} width={"900px"} zoom={11}>
                <Marker position={[49.870891804300186, 2.263787031202867]}>
                    <Popup>
                        IUT d'Amiens
                    </Popup>
                </Marker>
            </CarteComp>
        </div>
    )
}