import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
    return (
        <Navbar className="container-navbar" style={{ backgroundColor: "var(--nuit)" }}>
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
            </Container>
        </Navbar>
    );
}
