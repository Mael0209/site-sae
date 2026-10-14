import {useContext} from "react";
import {UserContext, type Utilisateur} from "../utils.ts";
import FormulaireConnexion from "../components/FormulaireConnexion.tsx";

export default function Connexion() {
    const userContext = useContext(UserContext)
    const user: Utilisateur | null | undefined = userContext?.user;

    return (
        <>
            <h1 className={"text-center"}>Page de connexion</h1>
            <p className="text-center">{user ? `Bienvenue ${user.pseudo}` : "Pas connecté"}</p>
            {!user && <FormulaireConnexion/>}
            {user && <button onClick={() => userContext?.setUser(null)}>Se déconnecter</button>}
        </>
    )
}