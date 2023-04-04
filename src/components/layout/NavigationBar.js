import React from "react";

import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../img/logo-name.png";

import SubmitButton from "./SubmitButton";

import styled from "styled-components";
import { css } from "@emotion/css";
import "bootstrap/dist/css/bootstrap.min.css";

const Styles = styled.div`
  .navbar {
    padding: 1em;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 2px 2px #333;
    padding: 8px;

    &:hover {
      backdrop-filter: blur(10px);
      box-shadow: 0 0 15px rgba(253, 253, 253, 0.5);
    }
  }
`;

function NavigationBar() {
  return (
    <Styles>
      <Navbar
        expand="lg"
        className={css`
          width: 100vw;
          background-size: cover;
          background-image: url("https://images.pexels.com/photos/689326/pexels-photo-689326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
        `}
      >
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="Logo Sanejá" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Link to="/imoveis">Meus Imóveis</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/agendamento">Agendar Visita Técnica</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/">Minhas Visitas</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/perfil">Meu Perfil</Link>
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
