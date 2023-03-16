import React from "react";

import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../img/logo-name.png";

import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";
import SubmitButton from "./SubmitButton";

const Styles = styled.div`
  .navbar {
    padding: 1em;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #307d85;
    padding-right: 1.5em;

    &:hover {
      color: #41696e;
    }
  }
`;

function NavigationBar() {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="Logo Sanejá" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Link to="/">Meus Imóveis</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/agendamento">Agendar Visita Técnica</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/">Minhas Visitas</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/">Meu Perfil</Link>
            </Nav.Item>
            <Nav.Item>
              <SubmitButton text="Sair" />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default NavigationBar;
