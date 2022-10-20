import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import './Home.css'

function Home() {
    return(
        <div className='main-container'>
            <Header/>
            <Logo/>
            <div className='home-h1'>
                <h1>Olá, seja bem-vindo <br/> O que você deseja?</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Home