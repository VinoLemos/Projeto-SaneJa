import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom'
import React, {useContext} from 'react'
import {AuthContext} from '../context/auth'

import {BiFile} from 'react-icons/bi'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineImport} from 'react-icons/ai'
import {FaRegEdit} from 'react-icons/fa'
import {FaHouseUser} from 'react-icons/fa';
import {IoMdHammer} from 'react-icons/io'

import classes from './Sidebar.module.css'

export default props => {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };
    return (
        <Menu>
            <Link to='/minhas-solicitacoes' className={classes['menu-item']}>
                <BiFile size='40px' style={{paddingRight: '20px'}}/>
                Minhas Solicitações
            </Link>
            <Link to='/cadastro-imovel' className={classes['menu-item']}>
                <AiOutlineHome size='40px' style={{paddingRight: '20px'}}/>
                Cadastrar imóvel
            </Link>
            <Link to='/agendar-visita' className={classes['menu-item']}>
                <IoMdHammer size='40px' style={{paddingRight: '20px'}}/> 
                Agendar Visita Técnica
            </Link>
            <Link to='/dados-cadastrais' className={classes['menu-item']}>
                <FaRegEdit size='40px' style={{paddingRight: '20px'}}/>
                Atualizar Dados Cadastrais
            </Link>
            <Link to='/dados-imovel' className={classes['menu-item']}>
                <FaHouseUser size='40px' style={{paddingRight: '20px'}}/>
                Editar Dados do Imóvel
            </Link>
            <button onClick={handleLogout} className={classes['btn-logout']}> 
                <AiOutlineImport size='40px' style={{paddingRight: '20px'}}/>
                Sair
            </button>
        </Menu>
    )
}