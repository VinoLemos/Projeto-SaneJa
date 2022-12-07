import classes from './Login.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import FormGroup from '../../components/FormGroup/FormGroup';
import { Spinner } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Login = () => {
  const { login } = useContext(AuthContext);

  //const navigate = useNavigate();
  const [emailControl, setEmailControl] = useState({
    value: '',
    dirty: false,
    error: true,
  });
  const [senhaControl, setSenhaControl] = useState({
    value: '',
    dirty: false,
    error: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  const updateControl = (value, setFunc) => {
    setFunc({ value, dirty: true, error: !value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    login(emailControl.value, senhaControl.value)
      .catch((errorMessage) =>
        Swal.fire({
          icon: 'error',
          title: errorMessage,
          confirmButtonText: 'Voltar',
          confirmButtonColor: '#6F9CB5',
        })
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <Header />
      <div className='main-container'>
        <form>
          <Card className={classes['div-login']}>
            <FormGroup
              id='email'
              label='Email'
              input={{
                type: 'email',
                value: emailControl.value,
                autoComplete: 'username',
                onChange: (e) => updateControl(e.target.value, setEmailControl),
              }}
              invalidIf={emailControl.dirty && emailControl.error}
            ></FormGroup>
            <FormGroup
              id='senha'
              label='Senha'
              input={{
                type: 'password',
                value: senhaControl.value,
                autoComplete: 'new-password',
                onChange: (e) => updateControl(e.target.value, setSenhaControl),
              }}
              invalidIf={senhaControl.dirty && senhaControl.error}
            ></FormGroup>
            <Link to='/cadastro'>Não tem uma conta?</Link>

            <Button
              type='highlight'
              wider='true'
              onClick={handleLogin}
              disabled={isLoading || emailControl.error || senhaControl.error}
            >
              {isLoading ? <Spinner as='span' size='sm' /> : 'Entrar'}
            </Button>
          </Card>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
