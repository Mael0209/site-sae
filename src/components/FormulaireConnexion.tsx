import {useContext, useState} from "react";
import {type tUserContext, UserContext, type Utilisateur} from "../utils.ts";
import {mockUtilisateurs} from "../JeuEssai.ts";

const verifierUtilisateur = (context: tUserContext | null, mail: string, mdp: string) => {
    const found: Utilisateur | undefined = mockUtilisateurs.find(u => u.email == mail && u.mdp == mdp)

    context?.setUser(found ? found : context.user);
}

export default function FormulaireConnexion() {
    const [mail, setMail] = useState<string>("")
    const [pwd, setPwd] = useState<string>("")
    const context = useContext(UserContext);

    return (
        <>
            <form className="mt-5 d-flex flex-column justify-content-center" onSubmit={e => {
                e.preventDefault();
                verifierUtilisateur(context, mail, pwd);
                setMail("");
                setPwd("");
            }}>
                <input className="m-2" type="email" placeholder="Mail" value={mail}
                       onChange={e => setMail(e.target.value)}/>
                <input className="m-2" type="password" placeholder="Mot de passe" value={pwd}
                       onChange={e => setPwd(e.target.value)}/>
                <button>Valider</button>
            </form>
        </>
    )
}