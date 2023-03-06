import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import water from "../../img/pexels-water.mp4";
import logo from "../../img/logo.png";

import styled from "styled-components";
import SubmitButton from "../layout/SubmitButton";

const Styles = styled.div`
  #main-container {
    place-items: center center;
  }

  img {
    margin-top: 6em;
    margin-bottom: 2em;
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

  p {
    color: #555;
    font-weight: 500;
    font-size: 0.6em;
    text-align: right;
  }

  svg {
    font-size: 1.5em;
    color: #648281;
    cursor: pointer;
  }

  a {
    color: #648281;
    text-decoration: none;
  }

  span {
    display: flex;
    color: #bf6560;
    margin-bottom: 0.5em;
  }
`;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => console.log(data);

  return (
    <Styles>
      <Row>
        <Col xs={4}>
          <video src={water} autoPlay loop muted />
        </Col>
        <Col xs={8}>
          <Container id="main-container" className="d-grid text-center ">
            <Form>
              <img src={logo} alt="Logo Sanejá" />
              <h1 className="fs-3 mb-4">Faça o login</h1>

              <Form.Group>
                <Form.Control
                  className="mb-2"
                  type="email"
                  name="email"
                  size="lg"
                  placeholder="Email"
                  autoComplete="username"
                  {...register("email", {
                    required: "Email obrigatório",
                    pattern: {
                      value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
                      message: "Email incompleto ou inválido",
                    },
                  })}
                />
                {errors.email && <span>{errors.email.message}</span>}
              </Form.Group>

              <Form.Group>
                <Form.Control
                  className="mb-2"
                  type="password"
                  name="senha"
                  size="lg"
                  placeholder="Senha"
                  autoComplete="current-password"
                  {...register("senha", {
                    required: "Senha obrigatória",
                    minLength: {
                      value: 4,
                      message: "Senha precisa ter entre 4 e 8 caracteres",
                    },
                  })}
                />
                {errors.senha && <span>{errors.senha.message}</span>}
              </Form.Group>
              <p>
                Ainda não tem conta? <Link to="/">Cadastre-se</Link>
              </p>

              <SubmitButton
                text="Entrar"
                btnStyle="btn--secondary"
                btnSize="btn--x-large"
                onClick={handleSubmit(onSubmit)}
              />
            </Form>
          </Container>
        </Col>
      </Row>
    </Styles>
  );
}

export default Login;
