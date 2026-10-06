import Container from "react-bootstrap/Container";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router";

export default function NavBar() {
    return (
        <Navbar className="container-navbar" style={{backgroundColor: "var(--nuit)"}} data-bs-theme="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt=""
                        src="/src/assets/refuge-logo-blanc.svg"
                        width="32%"
                        height="32%"
                        className="d-inline-block align-top"
                    />{" "}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/trouver-logement">Trouver un hébergement</Nav.Link>
                        <Nav.Link as={Link} to="/carte">Carte des hébergements</Nav.Link>
                        <Nav.Link as={Link} to="/">Historique des alertes</Nav.Link>
                        <Nav.Link as={Link} to="/">Connexion</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
