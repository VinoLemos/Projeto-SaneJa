import saneja from '../../img/logo.png';
import './Index.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

function Index() {
  return (
    <div className='main-container'>
      <div className='index-container'>
        <img src={saneja} className='index-logo' alt='Logo' />

        <div>
          <Link to='/login'>
            <Button type='highlight'>Faça Login</Button>
          </Link>
        </div>

        <div className='bottom-div'>
          <p>Não tem uma conta?</p>
          <Link to='/cadastro'>Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
