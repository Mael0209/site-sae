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

    if (!centre) return <p>Erreur : centre non-existant</p>

    return (
        <>
            <h1 className={"text-center"}>Fiche de centre</h1>
            <div className={"fiche mt-5 d-flex flex-column flex-wrap justify-content-center"}>
                <h2>{centre.nom} : {centre.type}</h2>
                <h2>{centre.commune.nom}, {centre.code_postal}</h2>
                <h2>{centre.acces_pmr ? "Accessible PMR" : "Pas accessible PMR"}</h2>
                <h2>{centre.accueil_animaux ? "Peut accueillir des animaux" : "N'accueille pas d'animaux"}</h2>
                <h2>Places disponibles : {centre.places_dispo}</h2>
            </div>
        </>
    )
}