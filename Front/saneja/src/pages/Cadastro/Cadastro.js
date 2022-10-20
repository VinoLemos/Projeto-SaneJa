import { useState } from 'react';
import './Cadastro.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import InputMask from 'react-input-mask';
import {Link, useNavigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert2';

const Cadastro = () => {

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [dataNasc, setDataNasc] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConf, setSenhaConf] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const {signup} = useAuth();

    const handleSignup = () => {
        if (!nome | !cpf | !rg | !dataNasc | !telefone | !email | !senha) {
            setError("Preencha todos os campos");
            return;
        } else if (senha !== senhaConf) {
            setError("As senhas devem ser iguais");
            return;
        }

        const res = signup(email, senha);

        if (res) {
            setError(res);
            return;
        }

        swal.fire({
            icon: 'success',
            title: "Cadastro realizado com sucesso!",
            confirmButtonText: "Ir para página de login",
            confirmButtonColor: "#6F9CB5"
        })
        navigate("/login");
    }

    return (
        <div className="main-container">
            <Header/>
            <div className="form-cadastro">
                <form >
                    <h1>Dados Pessoais</h1>
                    <input 
                        type="text" 
                        value={nome} 
                        onChange={(e) => [setNome(e.target.value), setError("")]}
                        placeholder="Nome Completo" 
                        className="form-data-input"
                    /> 

                    <InputMask className="form-data-input"
                        type="text" 
                        value={cpf}
                        onChange={(e) => [setCpf(e.target.value), setError("")]}
                        placeholder="CPF"
                        mask="999.999.999-99"
                    /> 

                    <InputMask className="form-data-input"
                        type="text" 
                        value={rg}
                        onChange={(e) => [setRg(e.target.value), setError("")]}
                        mask="99.999.999-9"
                        placeholder="RG"
                    /> 
                    
                    <label>Data Nascimento</label> <br/>
                    <input 
                        type="date" 
                        value={dataNasc} 
                        onChange={(e) => [setDataNasc(e.target.value), setError("")]}
                        className="form-data-input"
                    /> 
                    
                    
                    <InputMask className="form-data-input"
                        value={telefone}
                        onChange={(e) => [setTelefone(e.target.value), setError("")]}
                        mask="(99) 99999-9999"
                        placeholder="Telefone"
                    /> 
                    
                    <input 
                        type="text" 
                        value={email} 
                        onChange={(e) => [setEmail(e.target.value), setError("")]}
                        placeholder="Email" 
                        className="form-data-input"
                    /> 
                    
                    <input 
                        type="password" 
                        value={senha} 
                        onChange={(e) => [setSenha(e.target.value), setError("")]}
                        placeholder="Senha" 
                        className="form-data-input"
                    />

                    <input 
                        type="password" 
                        value={senhaConf} 
                        onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
                        placeholder="Confirmar senha" 
                        className="form-data-input"
                    />

                    <span className='alerta-campos'>{error}</span>
                    
                    <div className='div-botao'>
                        <input type="button" value="Cadastrar" className='botao-cadastro' onClick={handleSignup} />
                    </div>
                    <div className='link-login'>
                        <Link to="/login">
                            <a href='/login'>Já tem uma conta?</a>
                        </Link>
                    </div>
                    
                </form>
            </div>
            <Footer/>
        </div>
    )
};

export default Cadastro