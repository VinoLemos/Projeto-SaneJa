import {BiFile} from 'react-icons/bi'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {FaRegEdit} from 'react-icons/fa'
import {FaHouseUser} from 'react-icons/fa';
import {IoMdHammer} from 'react-icons/io'
import { Link } from 'react-router-dom'

import './Home.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import Back from '../../components/Back'
import Sidebar from '../../components/Sidebar'

function Home() {
    return(
        <div>
            <Header/>
            <Logo/>
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div className='page-wrap' id='outer-container'>
                <div className='center-container'>
                    <div className='home-h1'>
                        <h1>Olá, seja bem-vindo! <br/> O que você deseja?</h1>
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
                    <Link to="/cadastro-imovel">
                        <button className='menu-botao'> 
                            <AiOutlineHome size='25px'/> <br/> 
                            Cadastrar Imóvel
                        </button>
                    </Link>
                    <Link to={"/dados-cadastrais"}>
                        <button className='menu-botao'> 
                            <FaRegEdit size='25px'/> <br/> 
                            Atualizar Dados Cadastrais
                        </button>
                    </Link>
                </div>
                
                <div className='menu-linha'>
                    <Link to="/dados-imovel">
                        <button className='menu-botao'> 
                            <FaHouseUser size='25px'/> <br/> 
                            Atualizar Dados do Imóvel
                        </button>
                    </Link>
                    
                    <button className='menu-botao'> 
                        <AiOutlineMessage size='25px'/> <br/> 
                        Fale <br/> Conosco
                    </button>
                        
                    </div>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home