import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import Sidebar from '../../components/Sidebar'
import Back from "../../components/Back"
import './Visita.css'

function Visita() {
    return(
       <div>
            <Header/>
            <Logo/>
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div className='page-wrap' id='outer-container'>
                <div className='center-container'>
                    <div className='visita-h1'>
                        <h1>Agendar Visita Técnica</h1>
                    </div>
                    <div className='container-agendamento'>
                        <div className='div-agendamento'>
                            <div>
                            Data: <br/><input type='date'></input>
                            </div>
                            <div>
                            Hora: <br/><input type='time'></input>
                            </div>
                        </div>
                        <div className='container-tipo-visita'>
                            <p>Selecione o tipo de visita:</p>
                            <select className='select-tipo'>
                                <option>Visita Técnica</option>
                                <option>Retorno para Avaliação</option>
                                <option>Retorno Após Notificação</option>
                            </select>
                            <p>Observações:</p>
                            <textarea className='campo-observacoes'></textarea>
                        </div>
                    </div>
                    <div className='btn'>
                        <input
                            type="button"
                            value={"Agendar"}
                            className="botao-cadastro"
                        />
                    </div>
                    
                </div>
            </div>
            <Back />
            <Footer/>
       </div> 
    )
}

export default Visita