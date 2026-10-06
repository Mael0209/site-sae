import {useParams} from "react-router";
import {mockCentres} from "../JeuEssai.ts";
import {type Centre} from "../utils.ts";
import {useEffect, useState} from "react";

export default function Centre() {
    const [centre, setCentre] = useState<Centre | undefined>(undefined);
    const id: number = Number(useParams().id)

    useEffect(() => {
        setCentre(mockCentres.find(c => c.id === id))
    })

    if (!centre) return <p>Erreur : centre pas trouvé ou non-existant</p>

    return (
        <>
            <h1 className={"text-center"}>Fiche de centre</h1>
            <div className={"fiche mt-5 d-flex flex-column flex-wrap justify-content-center"}>
                <h2>{centre.nom} : {centre.type}</h2>
                <h2>{centre.commune.nom}, {centre.code_postal}</h2>
                <h2>Accessible aux PMR : {centre.acces_pmr ? "oui" : "non"}</h2>
                <h2>Accueil des animaux : {centre.accueil_animaux ? "oui" : "non"}</h2>
                <h2>Présence de sanitaires : {centre.sanitaire ? "oui" : "non"}</h2>
                <h2>Places disponibles : {centre.places_dispo}</h2>
                <h2>Etat : {centre.etat}</h2>
            </div>
        </>
    )
}