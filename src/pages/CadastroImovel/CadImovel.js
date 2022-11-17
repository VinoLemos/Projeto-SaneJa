import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import InputMask from "react-input-mask";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Back from "../../components/Back";
import { AuthContext } from "../../context/auth";
import api from "../../api/saneja";
import "../CadastroCliente/Cadastro.css";

function CadImovel() {
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [rgi, setRgi] = useState("");
  const [hidro, setHidro] = useState("");
  const [error, setError] = useState("");

  const { user } = useContext(AuthContext);
  const url = window.location;
  const navigate = useNavigate();

  const imovel = {
    rua: rua,
    numero: numero,
    complemento: complemento,
    cep: cep,
    bairro: bairro,
    cidade: cidade,
    estado: estado,
    rgi: rgi,
    hidro: hidro
  };

  useEffect(() => {

    api.get(`/imoveis/${rgi}`).then((response) => {
      setRua(response.data.rua);
      setNumero(response.data.numero);
      setComplemento(response.data.complemento);
      setCep(response.data.cep);
      setBairro(response.data.bairro);
      setCidade(response.data.cidade);
      setEstado(response.data.estado);
      setRgi(response.data.rgi);
      setHidro(response.data.hidro);
    });

  }, []);

  const isFormValid = () => {
    if (!rua | !numero | !complemento | !cep | !bairro | !cidade | !estado | !rgi | !hidro ) {
      setError("Preencha todos os campos");
      return false;
    } 
    return true;
  }

  const handleUpdate = () => {
    if (!isFormValid()) return;

    api.put(`/imoveis/${rgi}`, imovel)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Dados do imóvel atualizados com sucesso!",
          confirmButtonText: "Confirmar",
          confirmButtonColor: "#6F9CB5",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Algo deu errado",
          confirmButtonText: "Corrigir dados do imóvel",
          confirmButtonColor: "#6F9CB5",
        });
      });
  } 

  const handleSubmit = () => {
    if (!isFormValid()) return;

    api.post('/imoveis', imovel, user.cpf)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Cadastro realizado com sucesso!",
          confirmButtonText: "Ir para página inicial",
          confirmButtonColor: "#6F9CB5",
        });
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Algo deu errado",
          confirmButtonText: "Refazer cadastro",
          confirmButtonColor: "#6F9CB5",
        });
        navigate("/cadastro-imovel");
      });
  };

  return (
    <div className="main-container">
      <Header />
      <div className="form-cadastro">
        <form>
          <h1>Dados do Imóvel</h1>
          <input
            type="text"
            value={rua}
            onChange={(e) => [setRua(e.target.value), setError("")]}
            placeholder="Rua"
            className="form-data-input"
          />
          <input
            className="form-data-input"
            type="text"
            value={numero}
            onChange={(e) => [setNumero(e.target.value), setError("")]}
            placeholder="Nº"
          />
          <input
            className="form-data-input"
            type="text"
            value={complemento}
            onChange={(e) => [setComplemento(e.target.value), setError("")]}
            placeholder="Complemento"
          />
          <InputMask
            className="form-data-input"
            value={cep}
            onChange={(e) => [
              setCep(e.target.value.replace(/[^0-9]/g, "")),
              setError(""),
            ]}
            mask="99999-999"
            placeholder="CEP"
          />
          <input
            type="text"
            value={bairro}
            onChange={(e) => [setBairro(e.target.value), setError("")]}
            placeholder="Bairro"
            className="form-data-input"
          />
          <input
            type="text"
            value={cidade}
            onChange={(e) => [setCidade(e.target.value), setError("")]}
            placeholder="Cidade"
            className="form-data-input"
          />
          <input
            type="text"
            value={estado}
            onChange={(e) => [setEstado(e.target.value), setError("")]}
            placeholder="Estado"
            className="form-data-input"
          />
          <input
            type="text"
            value={rgi}
            onChange={(e) => [setRgi(e.target.value), setError("")]}
            placeholder="RGI"
            className="form-data-input"
          />
          <input
            type="text"
            value={hidro}
            onChange={(e) => [setHidro(e.target.value), setError("")]}
            placeholder="Hidrômetro"
            className="form-data-input"
          />
          <span className="alerta-campos">{error}</span>
          <div className="div-botao">
            <input
              type="button"
              value={url === '/dados-imovel' ? "Atualizar" : "Cadastrar"}
              className="botao-cadastro"
              onClick={url === 'dados-imovel' ? handleUpdate : handleSubmit}
            />
          </div>
        </form>
      </div>
      <Back />
      <Footer />
    </div>
  );
}

export default CadImovel;
