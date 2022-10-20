import logo from '../../img/logo-nome.png'
import './Login.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Login = () => {
    const {signin} = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos");
            return;
        }

        const res = signin(email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/home");
    }
    
    return(
        <div className='main-container'>
            <Header/>
            <img src={logo} alt="Nome logo" className='logo-nome'/>

            <div className="div-login">
                <label>Email</label> <br/>
                <input type="email" className='data-input' 
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                /> <br/>
                <label>Senha</label> <br/>
                <input type="password" className='data-input' 
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <span className='alerta-campos'>{error}</span>
                <Link to="/cadastro">
                    <a href='/cadastro'>Não tem uma conta?</a>
                </Link>
                <div>
                    <input type="button" value="Entrar" className='botao' onClick={handleLogin}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login