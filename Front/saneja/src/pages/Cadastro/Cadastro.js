import './Cadastro.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Cadastro() {
    return (
        <div className="main-container">
            <Header/>
            <div className="form-cadastro">
                <h1>Dados Pessoais</h1>
                <input type="text" name="nome" placeholder="Nome" className="form-data-input"/>
                <input type="number" name="cpf" placeholder="CPF" className="form-data-input"/>
                <input type="text" name="rg" placeholder="RG" className="form-data-input"/>
                <p>Data Nascimento</p>
                <div className="div-phone-nasc">
                    <input type="date" name="dataNasc" placeholder="Nasc." />
                    <input type="phone" name="telefone" placeholder="Telefone" />
                </div>
                <input type="email" name="email" placeholder="Email" className="form-data-input"/>
                <input type="password" name="senha" placeholder="Senha" className="form-data-input"/>
                
                <div className='div-botao'>
                    <input type="button" value="Cadastrar" className='botao-cadastro' />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cadastro