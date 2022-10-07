import saneja from '../img/logo.png'

function Index() {
    return(
        <div className="App">
            <div>
                <h1>Bem-vindo</h1>
            </div>

            <img src={saneja} className="index-logo" alt="Logo" />

            <div>
                <input type="button" value="Faça Login" className='botao' onClick="#"/>
            </div>

            <div>
                <p>Não tem uma conta?</p>
                <p>Cadastre-se</p>
            </div>
        </div>
    )
}

export default Index