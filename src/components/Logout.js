import React, {useContext} from 'react'
import {AuthContext} from '../context/auth'

import {AiOutlineImport} from 'react-icons/ai'

export default function Logout() {

    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    return(
        <button onClick={handleLogout} className='btn-logout'> 
            <AiOutlineImport size='30px' style={{paddingRight: '20px'}}/>Sair
        </button>
    )
}