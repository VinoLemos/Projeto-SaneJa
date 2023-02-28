import React from "react";

import { Nav, Navbar } from "react-bootstrap";

import logo from "../../img/logo-name.png";

import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    padding: 1em;
    background-color: #a7dadc;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #555;

    &:hover {
      color: #71a6a8;
    }
  }
`;

function NavigationBar() {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo Sanejá" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link href="/">Inicio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/sobre">Sobre</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contato">Contato</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default NavigationBar;
