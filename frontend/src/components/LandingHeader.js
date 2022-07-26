import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function LandingHeader(props) {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ORIANTAL FLOW</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button variant="success">Sign up</Button>
        </Container>
      </Navbar>
    </header>
  );
}

export default LandingHeader;
