import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

function LandingHeader(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ORIANTAL FLOW</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Button variant="success">Sign up</Button>
      </Container>
    </Navbar>
  );
}

export default LandingHeader;
