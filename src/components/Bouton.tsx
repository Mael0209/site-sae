import { Button } from "react-bootstrap";

type btnStyle = "bleu" | "blanc" | "rouge" | "off";

export default function Bouton({
    type,
    text,
    isDisabled,
}: {
    type: btnStyle;
    text?: string;
    isDisabled?: boolean;
}) {
    return (
        <Button variant="info" className={"bouton" + type} disabled={isDisabled}>
            {text ? text : "bouton"}
        </Button>
    );
}
