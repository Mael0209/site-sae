import type {Filtres} from "../pages/TrouverHebergement.tsx";
import DropdownFiltres from "./DropdownFiltres.tsx";

export default function SelectionFiltre({filtre, setFiltre}: {
    filtre: Filtres,
    setFiltre: React.Dispatch<React.SetStateAction<Filtres>>
}) {
    return (
        <div className="container mt-5">
            <DropdownFiltres filtre={filtre} setFiltre={setFiltre}/>
            <div>
                <input type="checkbox" id="checkbox-pmr" checked={filtre.pmr == true}
                       onChange={e => setFiltre({...filtre, pmr: e.target.checked})}/>
                <label htmlFor="checkbox-pmr">Accessible PMR</label>
            </div>
            <div>
                <input type="checkbox" id="checkbox-animaux" onChange={e => setFiltre({...filtre, animaux: e.target.checked})}/>
                <label htmlFor="checkbox-animaux">Accessible aux animaux</label>
            </div>
            <div>
                <input type="checkbox" id="checkbox-sanitaires" onChange={e => setFiltre({...filtre, sanitaires: e.target.checked})}/>
                <label htmlFor="checkbox-sanitaires">Présence de sanitaires</label>
            </div>
        </div>
    )
}