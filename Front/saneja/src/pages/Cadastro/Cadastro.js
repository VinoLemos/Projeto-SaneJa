import React from 'react';

import './Cadastro.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import InputMask from 'react-input-mask';

import swal from 'sweetalert2';

const schema = yup.object({
    nome: yup.string().required('Nome é obrigatório'),
    cpf: yup.string().required('CPF é obrigatório').min(11, 'O CPF precisa ter 11 dígitos'),
    rg: yup.string().required('RG é obrigatório').min(9, 'O RG precisa ter 9 dígitos'),
    dataNasc: yup.string().required('Data de nasc. obrigatória'),
    telefone: yup.string().required('Telefone é obrigatório'),
    email: yup.string().email('Digite um email válido').required('Email é obrigatório'),
    senha: yup.string().required('Senha é obrigatória').min(8, 'Senha deve conter no mín. 8 dígitos'),
    confirmarSenha: yup.string().required('Confirmar a senha é obrigatório').oneOf([yup.ref('senha')], 'As senhas devem ser iguais'),
}).required();

function Cadastro() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const handleCreateUser = () => {
        swal.fire({
            icon: 'success',
            title: "Cadastro realizado com sucesso!",
            text: "Verifique seu email para confirmar o seu cadastro.",
            showConfirmButton: false,
            html: 
                "<Link to='/login'>" +
                    "<a href='/login'>Ir para a página de login</a>" +
                "</Link>"
        })
    }

    return (
        <div className="main-container">
            <Header/>
            <div id='alerta-campos'></div>
            <div className="form-cadastro">
                <form onSubmit={handleSubmit(handleCreateUser)}>
                    <h1>Dados Pessoais</h1>
                    <input type="text" name="nome" {...register("nome", { required: true })} placeholder="Nome Completo" className="form-data-input"
                        aria-invalid={errors.nome ? "true" : "false"}
                    /> <br/>
                    {errors.nome && <span className='alerta-campos'>{errors.nome?.message}</span> } <br/> 

                    <InputMask className="form-data-input"
                        name="cpf"
                        {...register("cpf", { required: true })}
                        placeholder="CPF"
                        mask="999.999.999-99"
                        aria-invalid={errors.cpf ? "true" : "false"}
                    /> <br/> 
                    {errors.cpf && <span className='alerta-campos'>{errors.cpf?.message}</span> } <br/>

                    <InputMask className="form-data-input"
                        name="rg"
                        mask="99.999.999-9"
                        {...register("rg", { required: true })}
                        placeholder="RG"
                        aria-invalid={errors.rg ? "true" : "false"}
                    /> <br/>
                    {errors.rg && <span className='alerta-campos'>{errors.rg?.message}</span> } <br/>
                    
                    <label>Data Nascimento</label> <br/>
                    <input type="date" name="dataNasc" {...register("dataNasc", { required: true })} className="form-data-input"
                        aria-invalid={errors.dataNasc? "true" : "false"}        
                    /> <br/>
                    {errors.dataNasc && <span className='alerta-campos'>{errors.dataNasc?.message}</span> } <br/>
                    
                    <InputMask className="form-data-input"
                        name="telefone"
                        mask="(99) 99999-9999"
                        {...register("telefone", { required: true })}
                        placeholder="Telefone"
                        aria-invalid={errors.telefone ? "true" : "false"}
                    /> <br/>
                    {errors.telefone && <span className='alerta-campos'>{errors.telefone?.message}</span> } <br/>
                   

                    <input type="text" name="email" {...register("email", { required: true })} placeholder="Email" className="form-data-input"
                        aria-invalid={errors.email? "true" : "false"}
                    /> <br/>
                    {errors.email && <span className='alerta-campos'>{errors.email?.message}</span> } <br/>
                    
                    <input type="password" name="senha" {...register("senha", { required: true })} placeholder="Senha" className="form-data-input"
                        aria-invalid={errors.senha? "true" : "false"}
                    /> <br/>
                    {errors.senha && <span className='alerta-campos'>{errors.senha?.message}</span> } <br/>

                    <input type="password" name="confirmarSenha" {...register("confirmarSenha", { required: true })} placeholder="Confirmar Senha" className="form-data-input"
                        aria-invalid={errors.confirmarSenha? "true" : "false"}
                    /> <br/>
                    {errors.confirmarSenha && <span className='alerta-campos'>{errors.confirmarSenha?.message}</span> } <br/>
                    
                    <div className='div-botao'>
                        <input type="submit" value="Cadastrar" className='botao-cadastro' />
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Cadastro