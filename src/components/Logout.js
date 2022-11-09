import {AiOutlineImport} from 'react-icons/ai'
import React, {useContext} from 'react'
import {AuthContext} from '../context/auth'

export default function Logout() {

    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    return(
        <button onClick={handleLogout} className='botao-logout'>
            <AiOutlineImport/> Sair
        </button>
    )
}