import logo from '../../img/logo-nome.png'
import './Login.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth'

const Login = () => {
    const { login } = useContext(AuthContext);

    //const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email | !senha) {
            setError("Preencha todos os campos");
            return;
        }

        console.log("submit", {email, senha});
        login(email,senha);
    }
    
    return(
        <div className='main-container'>
            <Header/>
            <img src={logo} alt="Nome logo" className='logo-nome'/>

            <form>
                <div className="div-login">
                    <label>Email</label> <br/>
                    <input type="email" className='data-input' 
                        value={email}
                        autoComplete="username"
                        onChange={(e) => [setEmail(e.target.value), setError("")]}
                    /> <br/>
                    <label>Senha</label> <br/>
                    <input type="password" className='data-input' 
                        value={senha}
                        autoComplete="new-password"
                        onChange={(e) => [setSenha(e.target.value), setError("")]}
                    />
                    <span className='alerta-campos'>{error}</span>
                    <Link to="/cadastro">
                        Não tem uma conta?
                    </Link>
                    <div>
                        <input type="button" value="Entrar" className='botao' onClick={handleLogin}/>
                    </div>
                </div>
            </form>
            <Footer/>
        </div>
    )
}

export default Login