import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Back from '../../components/Back';
import FormGroup from '../../components/FormGroup/FormGroup';
import Card from '../../components/Card/Card';
import api from '../../api/saneja';

import classes from './Visita.module.css';
import Button from '../../components/Button/Button';
import Swal from 'sweetalert2';

function Visita() {
  const [dataVisita, setDataVisita] = useState('');
  const [observacao, setObservacao] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => setIsValid(!!dataVisita), [dataVisita]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!isValid) return;

    api.post('/VisitaTecnica', {}).catch(() =>
      Swal.fire({
        icon: 'error',
        title: 'Erro ao realizar agendamento',
        confirmButtonText: 'Voltar',
        confirmButtonColor: '#6F9CB5',
      })
    );
  };

  return (
    <div>
      <Header />
      <div className='main-container'>
        <Card title='Agendamento de visita' className={classes['custom-card']}>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes['form-row']}>
              <FormGroup
                id='dataVisita'
                label='Data do Agendamento'
                input={{
                  type: 'date',
                  value: dataVisita,
                  autoComplete: 'date',
                  onChange: (e) => setDataVisita(e.target.value),
                }}
              ></FormGroup>
            </div>
            <div className={classes['form-row']}>
              <FormGroup
                id='observacao'
                label='Observação'
                input={{
                  type: 'textarea',
                  value: observacao,
                  autoComplete: 'observacao',
                  className: classes['observacao'],
                  onChange: (e) => setObservacao(e.target.value),
                }}
              ></FormGroup>
            </div>
            <Button type='highlight' disabled={!isValid}>
              Agendar Visita
            </Button>
          </form>
        </Card>
      </div>
      <Back />
      <Footer />
    </div>
  );
}

export default Visita;
