import {mockCentres} from "../JeuEssai.ts";
import {Link} from "react-router";
import type {Centre, StatutCentre} from "../utils.ts";
import {useEffect, useState} from "react";
import {Dropdown} from "react-bootstrap";

export default function TrouverHebergement() {
    const [filtre, setFiltre] = useState<StatutCentre | null>(null);
    const [listeCentres, setListeCentres] = useState<Centre[]>(mockCentres);

    useEffect(() => {
        setListeCentres(filtre == null ? mockCentres : mockCentres.filter(c => c.etat == filtre));
    }, [filtre]);

    return (
        <>
            <h1 className={"text-center"}>Trouver un hébergement</h1>
            <div className="container container-filtre m-5">
                <Dropdown>
                    <Dropdown.Toggle>{filtre == null ? "Aucun filtre" : filtre}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => {
                            setFiltre(null)
                        }}>Aucun filtre</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            setFiltre("Ouvert")
                        }}>Ouverts</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            setFiltre("Fermé")
                        }}>Fermés</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            setFiltre("Complet")
                        }}>Complets</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className={"container mt-5 d-flex justify-content-center"}>
                <ul className={"list-unstyled"}>
                    {listeCentres.map(c =>
                        <Link className={"text-decoration-none text-dark text-center"} key={c.id}
                              to={"/centre/" + c.id}>
                            <li>{c.nom}</li>
                        </Link>
                    )}
                </ul>
            </div>
        </>
    )
}