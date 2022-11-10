import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Index from './pages/Index/Index';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Home from './pages/Home/Home';
import {AuthProvider, AuthContext} from './context/auth';
import React, { useContext} from 'react';

function App() {
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
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
