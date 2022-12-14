import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import InputMask from 'react-input-mask';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Back from '../../components/Back';
import { AuthContext } from '../../context/auth';
import api from '../../api/saneja';
import classes from './CadImovel.module.css';

function CadImovel() {
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cep, setCep] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [rgi, setRgi] = useState('');
  const [hidro, setHidro] = useState('');
  const [error, setError] = useState('');

  const { user } = useContext(AuthContext);
  const { rgi: rgiParam } = useParams();
  const { pathname } = useLocation();
  const isUpdate = pathname !== '/cadastro-imovel';
  const navigate = useNavigate();

  const imovel = {
    rua: rua,
    numero: numero,
    complemento: complemento,
    cep: cep,
    bairro: bairro,
    cidade: cidade,
    estado: estado,
    rgi: rgi,
    hidrometro: hidro,
    cpfProprietario: user.cpf,
  };

  useEffect(() => {
    if (!isUpdate) {
      return;
    }
    api.get(`/imoveis/${rgiParam}`).then((response) => {
      setRua(response.data.rua);
      setNumero(response.data.numero);
      setComplemento(response.data.complemento);
      setCep(response.data.cep);
      setBairro(response.data.bairro);
      setCidade(response.data.cidade);
      setEstado(response.data.estado);
      setRgi(response.data.rgi);
      setHidro(response.data.hidrometro);
    });
  }, []);

  const isFormValid = () => {
    if (
      !rua |
      !numero |
      !complemento |
      !cep |
      !bairro |
      !cidade |
      !estado |
      !rgi |
      !hidro
    ) {
      setError('Preencha todos os campos');
      return false;
    }
    return true;
  };

  const handleUpdate = () => {
    if (!isFormValid()) return;

    imovel.id = rgiParam;

    api
      .put(`/imoveis/${rgiParam}`, imovel)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Dados do im??vel atualizados com sucesso!',
          confirmButtonText: 'Confirmar',
          confirmButtonColor: '#6F9CB5',
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Algo deu errado',
          confirmButtonText: 'Corrigir dados do im??vel',
          confirmButtonColor: '#6F9CB5',
        });
      });
  };

  const handleSubmit = () => {
    if (!isFormValid()) return;

    api
      .post('/imoveis', imovel)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Cadastro realizado com sucesso!',
          confirmButtonText: 'Ir para p??gina inicial',
          confirmButtonColor: '#6F9CB5',
        });
        navigate('/imoveis');
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Algo deu errado',
          confirmButtonText: 'Refazer cadastro',
          confirmButtonColor: '#6F9CB5',
        });
        navigate('/cadastro-imovel');
      });
  };

  return (
    <>
      <Header />
      <div className='main-container'>
        <div className={classes['form-cadastro']}>
          <form>
            <h1>Dados do Im??vel</h1>
            <input
              className={classes['form-data-input']}
              type='text'
              value={rua}
              onChange={(e) => [setRua(e.target.value), setError('')]}
              placeholder='Rua'
            />
            <input
              className={classes['form-data-input']}
              type='text'
              value={numero}
              onChange={(e) => [setNumero(e.target.value), setError('')]}
              placeholder='N??'
            />
            <input
              className={classes['form-data-input']}
              type='text'
              value={complemento}
              onChange={(e) => [setComplemento(e.target.value), setError('')]}
              placeholder='Complemento'
            />
            <InputMask
              className={classes['form-data-input']}
              value={cep}
              onChange={(e) => [
                setCep(e.target.value.replace(/[^0-9]/g, '')),
                setError(''),
              ]}
              mask='99999-999'
              placeholder='CEP'
            />
            <input
              className={classes['form-data-input']}
              type='text'
              value={bairro}
              onChange={(e) => [setBairro(e.target.value), setError('')]}
              placeholder='Bairro'
            />
            <input
              className={classes['form-data-input']}
              type='text'
              value={cidade}
              onChange={(e) => [setCidade(e.target.value), setError('')]}
              placeholder='Cidade'
            />
            <input
              className={classes['form-data-input']}
              type='text'
              value={estado}
              onChange={(e) => [setEstado(e.target.value), setError('')]}
              placeholder='Estado'
            />
            <input
              className={classes['form-data-input']}
              type='text'
              value={rgi}
              onChange={(e) => [setRgi(e.target.value), setError('')]}
              placeholder='RGI'
            />
            <input
              className={classes['form-data-input']}
              type='text'
              value={hidro}
              onChange={(e) => [setHidro(e.target.value), setError('')]}
              placeholder='Hidr??metro'
            />
            <span className={classes['alerta-campos']}>{error}</span>
            <div className={classes['div-botao']}>
              <input
                type='button'
                value={rgiParam ? 'Atualizar' : 'Cadastrar'}
                className={classes['botao-cadastro']}
                onClick={rgiParam ? handleUpdate : handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
      <Back />
      <Footer />
    </>
  );
}

export default CadImovel;
