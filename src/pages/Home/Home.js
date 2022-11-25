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
import Logo from "../../components/Logo";
import Sidebar from "../../components/Sidebar";

function Home() {
  return (
    <div>
      <Header />
      <Logo />
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div className={classes["page-wrap"]} id="outer-container">
        <div className={classes["center-container"]}>
          <div className={classes["home-h1"]}>
            <p className={classes["receptive"]}>
              Olá, seja bem-vindo! <br /> O que você deseja?
            </p>
          </div>
          <div className={classes["menu-box"]}>
            <div className={classes["menu-linha"]}>
              <button className={classes["menu-botao"]}>
                <BiFile size="25px" /> <br />
                Minhas Solicitações
              </button>
              <Link to="/agendamento">
                <button className={classes["menu-botao"]}>
                  <IoMdHammer size="25px" /> <br />
                  Agendar Visita Técnica
                </button>
              </Link>
            </div>

            <div className={classes["menu-linha"]}>
              <Link to="/cadastro-imovel">
                <button className={classes["menu-botao"]}>
                  <AiOutlineHome size="25px" /> <br />
                  Cadastrar Imóvel
                </button>
              </Link>
              <Link to={"/dados-cadastrais"}>
                <button className={classes["menu-botao"]}>
                  <FaRegEdit size="25px" /> <br />
                  Atualizar Dados Cadastrais
                </button>
              </Link>
            </div>

            <div className={classes["menu-linha"]}>
              <Link to="/dados-imovel">
                <button className={classes["menu-botao"]}>
                  <FaHouseUser size="25px" /> <br />
                  Atualizar Dados do Imóvel
                </button>
              </Link>

              <button className={classes["menu-botao"]}>
                <AiOutlineMessage size="25px" /> <br />
                Fale <br /> Conosco
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
