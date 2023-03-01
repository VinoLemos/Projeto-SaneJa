import React from "react";
import Form from "react-bootstrap/Form";

import styled from "styled-components";

import SubmitButton from "../layout/SubmitButton";

const Styles = styled.div``;

function Login() {
  return (
    <Styles>
      <div className="d-flex justify-content-center align-items-center">
        <Form className="p-4 p-sm-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              autoComplete="username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Senha"
              autoComplete="current-password"
            />
          </Form.Group>
          <Form.Group>
            <SubmitButton text="Entrar" />
          </Form.Group>
        </Form>
      </div>
    </Styles>
  );
}

export default Login;
