import {MapContainer, TileLayer} from 'react-leaflet'
import {type CSSProperties, type ReactNode} from "react";
import {type LatLngExpression} from "leaflet";
import 'leaflet/dist/leaflet.css';

type carteProps = {
    center?: LatLngExpression,
    height: CSSProperties["height"],
    width: CSSProperties["width"],
    zoom?: number
    children?: ReactNode
}

export default function Carte({
                                  center = [49.89330470966201, 2.2966098708778597],
                                  height,
                                  width,
                                  zoom = 18,
                                  children
                              }: carteProps) {
    return (
        <>
            <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}
                          style={{height: height, width: width}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {children ? children : null}
            </MapContainer>
        </>
    )
}