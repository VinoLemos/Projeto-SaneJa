import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Styles = styled.div`
  .row-bottom {
    position: absolute;
    bottom: 0;
  }

  a {
    font-size: 1.2em;
    padding: 0.5em;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;

    &:hover {
      color: #71a6a8;
      text-decoration: underline;
      text-underline-position: under;
    }
  }
`;

function Footer() {
  return (
    <Styles>
      <Container className="text-center">
        <Row className="row-bottom">
          <Col className="text-center py-3">
            <Link to="/">Inicio</Link>
          </Col>
          <Col className="text-center py-3">
            <Link to="/sobre">Sobre</Link>
          </Col>
          <Col className="text-center py-3">
            <Link to="/contato">Contato</Link>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}

export default Footer;
