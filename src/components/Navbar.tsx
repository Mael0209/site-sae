import Container from "react-bootstrap/Container";
import {Navbar, Nav} from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar className="container-navbar" style={{backgroundColor: "var(--nuit)"}} data-bs-theme="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/src/assets/refuge-logo-blanc.svg"
                        width="32%"
                        height="32%"
                        className="d-inline-block align-top"
                    />{" "}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Trouver un hébergement</Nav.Link>
                        <Nav.Link href="/">Carte des hébergements</Nav.Link>
                        <Nav.Link href="/">Historique des alertes</Nav.Link>
                        <Nav.Link href="/">Connexion</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
