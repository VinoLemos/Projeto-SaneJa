import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Index from './pages/Index/Index';
import Login from './pages/Login/Login';
import Cadastro from './pages/CadastroCliente/Cadastro';
import Home from './pages/Home/Home';
import {AuthProvider, AuthContext} from './context/auth';
import React, { useContext} from 'react';
import CadImovel from './pages/CadastroImovel/CadImovel';
import Imoveis from './pages/Imoveis/Imoveis';
import Visita from './pages/Visita/Visita';

const Private = ({children}) => {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <div className='loading'>Carregando...</div>;
  }

  if(!authenticated) {
    return <Navigate to="/login"/>
  }

  return children;
};

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index/>} exact/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route 
              path="/home" 
              element={
              <Private>
                <Home/>
              </Private>}
            />
            <Route 
              path="/dados-cadastrais" 
              element={
              <Private>
                <Cadastro/>
              </Private>}
            />
            <Route 
              path="/cadastro-imovel" 
              element={
              <Private>
                <CadImovel/>
              </Private>}
            />
            <Route 
              path="/imoveis" 
              element={
              <Private>
                <Imoveis/>
              </Private>}
            />
            <Route 
              path="/imoveis/:rgi" 
              element={
              <Private>
                <CadImovel/>
              </Private>}
            />
            <Route 
              path="/agendamento" 
              element={
              <Private>
                <Visita/>
              </Private>}
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
