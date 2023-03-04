import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";

import water from "../../img/pexels-water.mp4";
import logo from "../../img/logo.png";

import styled from "styled-components";
import SubmitButton from "../layout/SubmitButton";

const Styles = styled.div`
  #main-container {
    place-items: center center;
  }

  #form-container {
    max-width: 350px;
  }

  h1 {
    color: #648281;
    text-shadow: 2px 2px #555;
  }

  video {
    object-fit: cover;
    width: 30vw;
    height: 100vh;
    position: absolute;
    z-index: -1;
  }

  input {
    border-radius: 3px;
    padding: 12px;
    background-color: rgba(94, 109, 110, 0.2);
    border: 1px solid rgba(94, 109, 110, 0.3);
  }

  .form-control:focus {
    background-color: rgba(94, 109, 110, 0.2);
    color: #555;
    border-color: #555;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1),
      0 0 8px rgba(94, 109, 110, 1);
  }
`;

function Login() {
  return (
    <Styles>
      <Row>
        <Col xs={4}>
          <video src={water} autoPlay loop muted />
        </Col>
        <Col xs={8}>
          <Container id="main-container" className="d-grid h-100 text-center">
            <Form id="form-container">
              <img src={logo} alt="Logo Sanejá" className="mb-4 mt-4" />
              <h1 className="fs-3 mb-4">Faça o login</h1>
              <Form.Group>
                <Form.Control
                  className="mb-3"
                  type="email"
                  size="lg"
                  placeholder="Email"
                  autoComplete="username"
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  className="mb-3"
                  type="password"
                  size="lg"
                  placeholder="Senha"
                  autoComplete="current-password"
                />
              </Form.Group>
              <SubmitButton
                text="Entrar"
                btnStyle="btn--secondary"
                btnSize="btn--x-large"
              />
            </Form>
          </Container>
        </Col>
      </Row>
    </Styles>
  );
}

export default Login;
