import React from "react";
import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import { css } from "@emotion/css";

const linkStyle = css`
  color: #fff;
  font-size: 1em;
  font-weight: 800;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0px 1em;
  display: inline-block;

  &:hover {
    color: #71a6a8;
    text-decoration: underline;
    text-underline-position: under;
  }
`;

function Footer() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: "center",
      }}
    >
      <Link to="/" className={linkStyle}>
        Inicio
      </Link>
      <Link to="/sobre" className={linkStyle}>
        Sobre
      </Link>
      <Link to="/contato" className={linkStyle}>
        Contato
      </Link>
    </Container>
  );
}

export default Footer;
