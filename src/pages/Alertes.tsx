import {mockAlertes} from "../JeuEssai.ts";

export default function Alertes() {
    return (
        <>
            <h1 className="text-center">Historique des alertes</h1>
            {mockAlertes.map(a => (
                <div key={a.id} className="border border-2 p-3 m-2 rounded-3 border-danger-subtle">
                    <p>{a.message}</p>
                    <p>Emis le {a.date_publication.toLocaleDateString("fr-fr", {dateStyle: "full"})}</p>
                    <p>Actif jusqu'au {a.date_expiration.toLocaleDateString("fr-fr", {dateStyle: "full"})}</p>
                </div>
            ))}
        </>
    )
}