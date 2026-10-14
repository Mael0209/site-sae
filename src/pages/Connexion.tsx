import {useContext, useEffect} from "react";
import {UserContext, type Utilisateur} from "../utils.ts";
import {mockUtilisateurs} from "../JeuEssai.ts";

export default function Connexion() {
    const userContext = useContext(UserContext)
    const user: Utilisateur | null | undefined = userContext?.user;

    useEffect(() => {
        userContext?.setUser(mockUtilisateurs[1])
    }, [])

    return (
        <>
            <h1 className={"text-center"}>Page de connexion</h1>
            <p className="text-center">{user ? `Bienvenue ${user.pseudo}` : "Pas connecté"}</p>
        </>
    )
}