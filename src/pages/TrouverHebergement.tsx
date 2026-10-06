import {mockCentres} from "../JeuEssai.ts";
import {Link} from "react-router";

export default function TrouverHebergement() {
    return (
        <>
            <h1 className={"text-center"}>Trouver un hébergement</h1>
            <div>
                <ul>
                    {mockCentres.map(c => <Link key={c.id} to={"/centre/" + c.id}>
                        <li>{c.nom}</li>
                    </Link>)}
                </ul>
            </div>
        </>
    )
}