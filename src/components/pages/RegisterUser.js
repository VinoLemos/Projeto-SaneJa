import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";

import water from "../../img/pexels-water.mp4";

import styled from "styled-components";

const Styles = styled.div`
  #register-container {
    margin-top 8em;
    place-items: center;
  }

  video {
    object-fit: cover;
    width: 30vw;
    height: 100vh;
    position: absolute;
    z-index: -1;
  }

  h1 {
    color: #648281;
    text-shadow: 2px 2px #555;
  }

  label {
    color: #648281;
    font-weight: 600;
    text-transform: uppercase;
  }

  input {
    width: 100%;
    color: #555;
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

function RegisterUser() {
  return (
    <Styles>
      <Row>
        <Col xs={4}>
          <video src={water} autoPlay loop muted />
        </Col>
        <Col xs={8}>
          <Container id="register-container" className="d-grid text-left">
            <Form>
              <h1>Faça o cadastro</h1>
              <Form.Group>
                <Form.Label>Nome completo</Form.Label>
                <Form.Control
                  className="mb-2"
                  type="text"
                  name="nome"
                  placeholder="Digite seu nome..."
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>cpf</Form.Label>
                <Form.Control
                  className="mb-2"
                  type="text"
                  name="cpf"
                  placeholder="Digite seu CPF..."
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>rg</Form.Label>
                <Form.Control
                  className="mb-2"
                  type="text"
                  name="rg"
                  placeholder="Digite seu RG..."
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>data de nascimento</Form.Label>
                <Form.Control
                  className="mb-2"
                  type="date"
                  name="data_nascimento"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>telefone</Form.Label>
                <Form.Control className="mb-2" type="text" name="telefone" />
              </Form.Group>
              <Form.Group>
                <Form.Label>email</Form.Label>
                <Form.Control className="mb-2" type="email" name="email" />
              </Form.Group>
            </Form>
          </Container>
        </Col>
      </Row>
    </Styles>
  );
}

export default RegisterUser;
