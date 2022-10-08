import logo from '../img/logo-nome.png'

function Login() {
    return(
        <div>
            <img src={logo} alt="Nome logo" className='Logo-nome'/>

            <div className="div-login">
                <label>Email</label> <br/>
                <input type="email" name="email" /> <br/>
                <label>Senha</label> <br/>
                <input type="password" name="senha" />
                <p>Esqueci minha senha</p>
                <div>
                    <input type="button" value="Entrar" className='botao'/>
                </div>
            </div>

        </div>
    )
}

export default Login