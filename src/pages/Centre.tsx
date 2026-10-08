import {Link, useParams} from "react-router";
import {mockCentres} from "../JeuEssai.ts";
import {type Centre} from "../utils.ts";
import {useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import Bouton, {varianteBouton} from "../components/Bouton.tsx";

export default function Centre() {
    const [centre, setCentre] = useState<Centre | undefined>(undefined);
    const id: number = Number(useParams().id)

    useEffect(() => {
        setCentre(mockCentres.find(c => c.id === id))
    })

    if (!centre) return <p>Erreur : centre pas trouvé ou non-existant</p>

    return (
        <>
            <h1 className={"text-center"}>{centre.nom}</h1>
            <div className="d-flex justify-content-center">
                <Card className="m-3 text-center" style={{width: "50%"}}>
                    <Card.Header className="text-center">{centre.nom}</Card.Header>
                    <Card.Body>
                        <Card.Title
                            style={{color: centre.etat == "Ouvert" ? "var(--ouvert-texte)" : centre.etat == "Complet" ? "var(--complet-texte)" : "var(--ferme-texte)"}}>{centre.etat}</Card.Title>
                        <Card.Text>{centre.adresse} {centre.code_postal} {centre.commune.nom}</Card.Text>
                        <Card.Text>
                            Informations :
                            <ul className="list-unstyled">
                                <li>Places disponibles : {centre.places_dispo}</li>
                                <li>Accessible aux PMR : {centre.acces_pmr ? "oui" : "non"}</li>
                                <li>Accessible aux animaux : {centre.accueil_animaux ? "oui" : "non"}</li>
                                <li>Sanitaires : {centre.sanitaire ? "oui" : "non"}</li>
                            </ul>
                        </Card.Text>
                        <Card.Footer>
                            <Link to="/carte">
                                <Bouton variante={varianteBouton.secondaire} text="Voir sur la carte"/>
                            </Link>
                        </Card.Footer>
                        <p>Responsable : {centre.responsable.nom} {centre.responsable.prenom}</p>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}