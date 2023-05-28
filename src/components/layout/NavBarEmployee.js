import React from "react";

import { Nav, Navbar } from "react-bootstrap";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import styled from "styled-components";
import { css } from "@emotion/css";

import logo from "../../img/logo-name.png";

const NavBarStyle = styled.div`
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

  .navbar-toggler,
  .navbar-toggler:focus,
  .navbar-toggler:active,
  .navbar-toggler-icon:focus {
    outline: none;
    background-color: rgba(250, 250, 250, 0.4);
    box-shadow: none;
    border: 0;
  }
`;

function NavBarEmployee() {
  return (
    <NavBarStyle>
      <Navbar
        expand="lg"
        className={css`
          width: 100vw;
          background-size: cover;
          background-image: url("https://images.pexels.com/photos/689326/pexels-photo-689326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
        `}
      >
        <Navbar.Brand>
          <img src={logo} alt="Logo Sanejá" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Button variant="contained">Sair</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavBarStyle>
  );
}

export default NavBarEmployee;
