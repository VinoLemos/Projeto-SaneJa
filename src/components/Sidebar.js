import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom'
import React, {useContext} from 'react'
import {AuthContext} from '../context/auth'

import {BiFile} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineImport} from 'react-icons/ai'
import {FaRegEdit} from 'react-icons/fa'
import {IoMdHammer} from 'react-icons/io'

import './Sidebar.css'

export default props => {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };
    return (
        <Menu>
            <Link to='/solicitacoes' className='menu-item'>
                <BiFile size='30px' style={{paddingRight: '20px'}}/>
                Minhas Solicitações
            </Link>
            <Link to='/dadosimovel' className='menu-item'>
                <AiOutlineHome size='30px' style={{paddingRight: '20px'}}/>
                Editar Dados do Imóvel
            </Link>
            <Link to='/agendarvisita' className='menu-item'>
                <IoMdHammer size='30px' style={{paddingRight: '20px'}}/> 
                Agendar Visita Técnica
            </Link>
            <Link to='/dados-cadastrais' className='menu-item'>
                <FaRegEdit size='30px' style={{paddingRight: '20px'}}/>
                Atualizar Dados Cadastrais
            </Link>
            <Link to='/configuracoes' className='menu-item'>
                <FiSettings size='30px' style={{paddingRight: '20px'}}/>
                Configurações
            </Link>
            <button onClick={handleLogout} className='btn-logout'> 
                <AiOutlineImport size='30px' style={{paddingRight: '20px'}}/>
                Sair
            </button>
        </Menu>
    )
}