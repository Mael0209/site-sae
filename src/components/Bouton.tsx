import type {MouseEventHandler} from "react";

export enum varianteBouton {
    primaire = "bouton-primaire",
    secondaire = "bouton-secondaire",
    danger = "bouton-danger"
}

export default function Bouton({variante, text, onClick}: {
    variante: varianteBouton;
    text: string;
    onClick?: MouseEventHandler
}) {
    return (
        <button className={"bouton " + variante} type="button" onClick={onClick}>{text}</button>
    );
}