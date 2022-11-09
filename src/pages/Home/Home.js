import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import './Home.css'
import Back from '../../components/Back'
import {BiFile} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {FaRegEdit} from 'react-icons/fa'
import {IoMdHammer} from 'react-icons/io'
import Logout from '../../components/Logout'
import { Link } from 'react-router-dom'

function Home() {
    return(
        <div className='main-container'>
            <Header/>
            <Logo/>
            <Logout/>
            <div className='home-h1'>
                <h1>Olá, seja bem-vindo (cliente) <br/> O que você deseja?</h1>
            </div>
            <div className='menu-box'>
                <div className='menu-linha'>
                    <button className='menu-botao'> 
                        <BiFile size='25px'/> <br/> 
                        Minhas Solicitações
                    </button>
                    <button className='menu-botao'> 
                        <IoMdHammer size='25px'/> <br/> 
                        Agendar Visita Técnica
                    </button>
                </div>

                <div className='menu-linha'>
                    <button className='menu-botao'> 
                        <AiOutlineHome size='25px'/> <br/> 
                        Editar Dados do Imóvel
                    </button>
                    <Link to={"/dados-cadastrais"}>
                        <button className='menu-botao'> 
                            <FaRegEdit size='25px'/> <br/> 
                            Atualizar Dados Cadastrais
                        </button>
                    </Link>
                </div>
                
                <div className='menu-linha'>
                    <button className='menu-botao'> 
                        <FiSettings size='25px'/> <br/> 
                        Configurações
                    </button>
                    <button className='menu-botao'> 
                        <AiOutlineMessage size='25px'/> <br/> 
                        Fale Conosco
                    </button>
                </div>
            </div>
            <Back/>
            <Footer/>
        </div>
    )
}

export default Home