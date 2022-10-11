import saneja from '../img/logo.png'
import {Link} from 'react-router-dom';

function Index() {
    return(
        <div className="main-container">
            <div className="index-container">
                <h1>Bem-vindo</h1>
            </div>

            <img src={saneja} className="index-logo" alt="Logo" />

            <div>
                <Link to="/login">
                    <input type="button" value="Faça Login" className='botao'/>
                </Link>
            </div>

            <div className='bottom-div'>
                <p>Não tem uma conta?</p>
                <Link to="/cadastro">
                    <a href='/cadastro'>Cadastre-se</a>
                </Link>
            </div>
        </div>
    )
}

export default Index