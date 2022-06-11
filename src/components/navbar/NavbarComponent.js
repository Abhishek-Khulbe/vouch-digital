import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./NavbarComponent.css";

export default function NavbarComponent() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          ATools<span>.</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <div className="btnContainer">
          <Button variant="primary" size="sm">
            Start Free Trial
          </Button>
          <Button variant="secondary" size="sm">
            Login
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}
