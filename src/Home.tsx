import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

export default function Home() {
    return (
        <>
            <h1 className="text-center">Home</h1>
            <div className={"carte"} style={{display: "flex", justifyContent: "center"}}>
                <MapContainer center={[49.892989953085916, 2.2957795839953232]} zoom={13} scrollWheelZoom={true}
                              style={{height: "100%", width: "50%"}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[49.87070212774772, 2.26409461666023]}>
                        <Popup>
                            A pretty CSS3 popup. <br/> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

        </>
    )
}