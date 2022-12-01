import logo from "../../img/logo-nome.png";
import classes from "./Login.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import FormGroup from "../../components/FormGroup/FormGroup";
import { Spinner } from "react-bootstrap";

const Login = () => {
  const { login } = useContext(AuthContext);

  //const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email | !senha) {
      setError("Preencha todos os campos");
      setIsLoading(false);
      return;
    }

    console.log("submit", { email, senha });
    login(email, senha).then(() => setIsLoading(false));
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <form>
          <Card className={classes["div-login"]}>
            <FormGroup
              label="Email"
              input={{
                type: "email",
                value: email,
                autoComplete: "username",
                onChange: (e) => [setEmail(e.target.value), setError("")],
              }}
            ></FormGroup>
            <FormGroup
              label="Senha"
              input={{
                type: "password",
                value: senha,
                autoComplete: "new-password",
                onChange: (e) => [setSenha(e.target.value), setError("")],
              }}
            ></FormGroup>
            <span className="alerta-campos">{error}</span>
            <Link to="/cadastro">Não tem uma conta?</Link>

            <Button type="highlight" wider onClick={handleLogin} disabled={isLoading}>
              {isLoading ? <Spinner as="span" size="sm"/> : 'Entrar'}
            </Button>
          </Card>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
