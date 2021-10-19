import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Link to="/">
            <Navbar.Brand href="#/">My API</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link to="/finance">
              <Nav.Link href="#finance">Binance</Nav.Link>
            </Link>
            <Link to="/public">
              <Nav.Link href="#public">Publics</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
