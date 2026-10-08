import type {Filtres} from "../pages/TrouverHebergement.tsx";
import {Dropdown} from "react-bootstrap";

export default function DropdownFiltres({filtre, setFiltre}: {
    filtre: Filtres,
    setFiltre: React.Dispatch<React.SetStateAction<Filtres>>
}) {
    return (
        <Dropdown>
            <Dropdown.Toggle>{filtre.etat == null ? "Aucun filtre" : filtre.etat}</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => {
                    const nouvFiltre: Filtres = {
                        ...filtre,
                        etat: null
                    }
                    setFiltre(nouvFiltre)
                }}>Aucun filtre</Dropdown.Item>
                <Dropdown.Item onClick={() => {
                    const nouvFiltre: Filtres = {
                        ...filtre,
                        etat: "Ouvert"
                    }
                    setFiltre(nouvFiltre)
                }}>Ouverts</Dropdown.Item>
                <Dropdown.Item onClick={() => {
                    const nouvFiltre: Filtres = {
                        ...filtre,
                        etat: "Fermé"
                    }
                    setFiltre(nouvFiltre)
                }}>Fermés</Dropdown.Item>
                <Dropdown.Item onClick={() => {
                    const nouvFiltre: Filtres = {
                        ...filtre,
                        etat: "Complet"
                    }
                    setFiltre(nouvFiltre)
                }}>Complets</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}