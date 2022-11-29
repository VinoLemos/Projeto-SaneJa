import { useContext } from "react";
import { AuthContext } from "../context/auth";
import header from "../img/header.png";
import Logo from "./Logo";
import Sidebar from "./Sidebar";

export default function Header() {
  const { authenticated } = useContext(AuthContext);
  return (
    <>
      <img src={header} className="header-img" alt="Imagem cabeçalho" />
      <div className={`d-flex ${authenticated ? "justify-content-between" : "justify-content-end"}`}>
        {authenticated && <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />}
        <Logo />
      </div>
    </>
  );
}
