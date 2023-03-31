import React from "react";
import logo from "./logo_mega.jpg";
import { Container, Nav, Navbar } from "react-bootstrap";

function Menu() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} width={30} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Remitos</Nav.Link>
            <Nav.Link href="#pricing">Stock</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Menu;
