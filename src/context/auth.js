import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const login = (email, senha) => {
    console.log("login auth", {email, senha});

    const loggedUser = {
      cpf: '123',
      email,
    };

    localStorage.setItem('user', JSON.stringify(loggedUser));

    if (senha === "123") {
      setUser(loggedUser);
      navigate("/home");
    }

  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem('user');
    setUser(null);
    navigate("/login");
  };
    return (
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}