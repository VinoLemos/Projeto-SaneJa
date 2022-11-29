import React, { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Back from "../../components/Back";
import "./Visita.css";
// import { DropdownButton, Dropdown } from "react-bootstrap";

function Visita() {
  // const [visitType, setVisitType] = useState("");

  // const selectTipoHandler = event => {
  //   setVisitType(event.target.innerText);
  // }

  return (
    <div>
      <Header />
      <div className="page-wrap" id="outer-container">
        <div className="center-container">
          <div className="visita-h1">
            <h1>Agendar Visita Técnica</h1>
          </div>
          <div className="container-agendamento">
            <div className="div-agendamento">
              <div>
                <label className="form-label" htmlFor="date">Data</label>
                <input className="form-input" id="date" type="date"></input>
              </div>
              {/* <div>
                <label className="form-label" htmlFor="time">Hora</label>
                <input className="form-input" id="time" type="time"></input>
              </div> */}
            </div>
            <div className="container-tipo-visita">
              {/* <DropdownButton
                className="select-tipo"
                title={visitType || "Selecione o tipo de visita"}
              >
                <Dropdown.Item onClick={selectTipoHandler}>Visita Técnica</Dropdown.Item>
                <Dropdown.Item onClick={selectTipoHandler}>Retorno para Avaliação</Dropdown.Item>
                <Dropdown.Item onClick={selectTipoHandler}> Retorno Após Notificação</Dropdown.Item>
              </DropdownButton> */}
              <div className="comments">
                <label className="form-label" htmlFor="comments">Observações</label>
                <textarea id="comments" className="campo-observacoes"></textarea>
              </div>
            </div>
          </div>
          <div className="btn">
            <input type="button" value="Agendar" className="botao-cadastro" />
          </div>
        </div>
      </div>
      <Back />
      <Footer />
    </div>
  );
}

export default Visita;
