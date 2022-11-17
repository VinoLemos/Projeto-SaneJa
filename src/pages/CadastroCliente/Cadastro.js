import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import InputMask from "react-input-mask";
import validator from "validator";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Back from "../../components/Back";
import { AuthContext } from "../../context/auth";
import api from "../../api/saneja";
import "./Cadastro.css";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [telefone, setTelefone] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const [error, setError] = useState("");

  const { authenticated, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const cliente = {
    cpf: cpf,
    rg: rg,
    nome: nome,
    telefone: telefone,
    login: login,
    senha: senha,
    dataNascimento: dataNasc,
    imoveis: null,
  };

  useEffect(() => {
    if (authenticated) {
      setCpf(user.cpf);

      api.get(`/clientes/${user.cpf}`).then((response) => {
        setNome(response.data.nome);
        setTelefone(response.data.telefone);
        setCpf(response.data.cpf);
        setRg(response.data.rg);
        setLogin(response.data.login);
        setSenha(response.data.senha);
        setDataNasc(response.data.dataNascimento.split("T")[0]);
      });
    }
  }, []);

  const isFormValid = () => {
    if (!nome | !cpf | !rg | !dataNasc | !telefone | !login | !senha) {
      setError("Preencha todos os campos");
      return false;
    } else if (senha !== senhaConf) {
      setError("As senhas devem ser iguais");
      return false;
    } else if (!validator.isEmail(login)) {
      setError("Digite um login válido");
      return false;
    }
    return true;
  }

  const handleUpdate = () => {
    if (!isFormValid()) return;

    api.put(`/clientes/${cpf}`, cliente)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Dados cadastrais atualizados com sucesso!",
          confirmButtonText: "Confirmar",
          confirmButtonColor: "#6F9CB5",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Algo deu errado",
          confirmButtonText: "Corrigir dados cadastrais",
          confirmButtonColor: "#6F9CB5",
        });
      });
  } 

  const handleSignup = () => {
    if (!isFormValid()) return;

    api.post('/clientes', cliente)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Cadastro realizado com sucesso!",
          confirmButtonText: "Ir para página de login",
          confirmButtonColor: "#6F9CB5",
        });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Algo deu errado",
          confirmButtonText: "Refazer cadastro",
          confirmButtonColor: "#6F9CB5",
        });
        navigate("/cadastro");
      });
  };

  return (
    <div className="main-container">
      <Header />
      <div className="form-cadastro">
        <form>
          <h1>Dados Pessoais</h1>
          <input
            type="text"
            value={nome}
            onChange={(e) => [setNome(e.target.value), setError("")]}
            placeholder="Nome Completo"
            className="form-data-input"
          />
          <InputMask
            className="form-data-input"
            type="text"
            value={cpf}
            onChange={(e) => [
              setCpf(e.target.value.replace(/[^0-9]/g, "")),
              setError(""),
            ]} // o replace está dizendo que o campo só vai considerar numeros e o que for caractere, ele vai substituir por vazio
            placeholder="CPF"
            mask="999.999.999-99"
          />
          <InputMask
            className="form-data-input"
            type="text"
            value={rg}
            onChange={(e) => [
              setRg(e.target.value.replace(/[^0-9]/g, "")),
              setError(""),
            ]}
            mask="99.999.999-9"
            placeholder="RG"
          />
          <label>Data Nascimento</label> <br />
          <input
            type="date"
            value={dataNasc}
            onChange={(e) => [setDataNasc(e.target.value), setError("")]}
            className="form-data-input"
          />
          <InputMask
            className="form-data-input"
            value={telefone}
            onChange={(e) => [
              setTelefone(e.target.value.replace(/[^0-9]/g, "")),
              setError(""),
            ]}
            mask="(99) 99999-9999"
            placeholder="Telefone"
          />
          <input
            type="text"
            value={login}
            onChange={(e) => [setLogin(e.target.value), setError("")]}
            placeholder="Email"
            className="form-data-input"
          />
          <input
            type="password"
            autoComplete="new-password"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
            placeholder="Senha"
            className="form-data-input"
          />
          <input
            type="password"
            autoComplete="new-password"
            value={senhaConf}
            onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
            placeholder="Confirmar senha"
            className="form-data-input"
          />
          <span className="alerta-campos">{error}</span>
          <div className="div-botao">
            <input
              type="button"
              value={authenticated ? "Atualizar" : "Cadastrar"}
              className="botao-cadastro"
              onClick={authenticated ? handleUpdate : handleSignup}
            />
          </div>
          {!authenticated && <div className="link-login">
            <Link to="/login">Já tem uma conta?</Link>
          </div>}
        </form>
      </div>
      <Back />
      <Footer />
    </div>
  );
}

export default Cadastro;
