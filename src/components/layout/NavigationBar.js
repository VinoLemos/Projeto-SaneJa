import React from "react";

import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../img/logo-name.png";

import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    padding: 1em;
    background-color: #71a6a8;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
    color: #555;
    padding-right: 1em;

    &:hover {
      color: #a7dadc;
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
              <Link to="/">Inicio</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/sobre">Sobre</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contato">Contato</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default NavigationBar;
