import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/saneja';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPwd, setUserPwd] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const login = async (email, senha) => {
    return api
      .get(`/clientes/GetByEmail/${email}`)
      .then(({ data: userResponse }) => {
        setUserEmail(userResponse.login);
        setUserPwd(userResponse.senha);

        const loggedUser = {
          email,
          senha,
          cpf: userResponse.cpf,
          id: userResponse.id,
        };

        if (userResponse.login === email && userResponse.senha === senha) {
          localStorage.setItem('user', JSON.stringify(loggedUser));
          setUser(loggedUser);
          navigate('/home');
        } else if (userEmail != email || userPwd != senha) {
          return Promise.reject('Usuário ou senha incorreto');
        }
        return Promise.resolve();
      });
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };
  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
