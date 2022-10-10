import logo from '../img/logo-nome.png'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Login() {
    return(
        <div className='main-container'>
            <Header/>
            <img src={logo} alt="Nome logo" className='logo-nome'/>

            <div className="div-login">
                <label>Email</label> <br/>
                <input type="email" name="email" className='data-input' /> <br/>
                <label>Senha</label> <br/>
                <input type="password" name="senha" className='data-input' />
                <a href='/' >Esqueci minha senha</a>
                <div>
                    <input type="button" value="Entrar" className='botao'/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login