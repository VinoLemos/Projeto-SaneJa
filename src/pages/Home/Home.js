import { BiFile } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { IoMdHammer } from "react-icons/io";
import { Link } from "react-router-dom";

import classes from "./Home.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <div className={classes["page-wrap"]} id="outer-container">
        <div className={classes["center-container"]}>
          <div className={classes["home-h1"]}>
            <p className={classes["receptive"]}>
              Olá, seja bem-vindo! O que você deseja?
            </p>
          </div>
          <div className={classes["menu-box"]}>
            <button className={classes["menu-botao"]}>
              <BiFile size="42px" /> <br />
              Minhas Solicitações
            </button>
            <Link to="/agendamento">
              <button className={classes["menu-botao"]}>
                <IoMdHammer size="42px" /> <br />
                Agendar Visita Técnica
              </button>
            </Link>

            <Link to={"/dados-cadastrais"}>
              <button className={classes["menu-botao"]}>
                <FaRegEdit size="42px" /> <br />
                Atualizar Dados Cadastrais
              </button>
            </Link>
            <Link to="/imoveis">
              <button className={classes["menu-botao"]}>
                <FaHouseUser size="42px" /> <br />
                Meus Imóveis
              </button>
            </Link>

            <button className={classes["menu-botao"]}>
              <AiOutlineMessage size="42px" /> <br />
              Fale <br /> Conosco
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
