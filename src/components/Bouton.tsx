export enum varianteBouton {
    primaire = "bouton-primaire",
    secondaire = "bouton-secondaire",
    danger = "bouton-danger"
}

export default function Bouton({variante, text}: { variante: varianteBouton; text: string; }) {
    return (
        <button className={"bouton " + variante} type="button">{text}</button>
    );
}