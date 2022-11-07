import logo from '../img/logo-nome.png'

function Logo() {
    return(
        <div className='main-container'>
            <img src={logo} alt="Nome logo" className='logo-img'/>
        </div>
    )
}

export default Logo