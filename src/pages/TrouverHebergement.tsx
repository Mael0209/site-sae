import {mockCentres} from "../JeuEssai.ts";
import {Link} from "react-router";
import type {Centre, StatutCentre} from "../utils.ts";
import {useEffect, useState} from "react";
import SelectionFiltre from "../components/SelectionFiltre.tsx";
import {Col, Row} from "react-bootstrap";

export type Filtres = {
    etat: StatutCentre | null;
    pmr: boolean | null;
    animaux: boolean | null;
    sanitaires: boolean | null;
}

export default function TrouverHebergement() {
    const [listeCentres, setListeCentres] = useState<Centre[]>(mockCentres);
    const [filtre, setFiltre] = useState<Filtres>({etat: null, pmr: null, animaux: null, sanitaires: null})

    useEffect(() => {
        const {pmr, animaux, sanitaires, etat} = filtre;
        let nouvList: Centre[] = etat == null ? mockCentres : mockCentres.filter(c => c.etat == etat)

        if (pmr) {
            nouvList = nouvList.filter(c => c.acces_pmr == pmr)
        }

        if (animaux) {
            nouvList = nouvList.filter(c => c.accueil_animaux == animaux)
        }

        if (sanitaires) {
            nouvList = nouvList.filter(c => c.sanitaire == sanitaires)
        }

        setListeCentres(nouvList);
    }, [filtre]);

    return (
        <>
            <h1 className={"text-center"}>Trouver un hébergement</h1>
            <hr className="container border-2 rounded" />
            <Row>
                <Col xs={6}>
                    <SelectionFiltre filtre={filtre} setFiltre={setFiltre}/>
                </Col>
                <Col xs={6}>
                    <div className={"container mt-5 d-flex justify-content-start"}>
                        <ul className={"list-unstyled"}>
                            {listeCentres.map(c =>
                                <Link className={"text-decoration-none text-dark text-center"} key={c.id}
                                      to={"/centre/" + c.id}>
                                    <li>{c.nom}</li>
                                </Link>
                            )}
                        </ul>
                    </div>
                </Col>
            </Row>
        </>
    )
}