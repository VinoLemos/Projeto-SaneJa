import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
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

  const login = (email, senha) => {
    console.log("login auth", {email, senha});

    const baseUrl = `https://localhost:7250/clientes/${email}`;

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://www.saneja.com.br/cadastro, *",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET,*",
      }
    }

    axios.get(baseUrl, config, 
      {
        crossdomain: true
      })
      .then((response) => {
      console.log(response);
      setUserEmail(response.data.login);
      setUserPwd(response.data.senha);
    }).catch((error) => {
      console.log(error)
    })

    const loggedUser = {
      email,
      senha
    };

    localStorage.setItem(user, JSON.stringify(loggedUser));

    if (userEmail === email && userPwd === senha ){
      setUser(loggedUser);
      navigate("/home");
    } 
    else if (userEmail != email || userPwd != senha){
      alert("Usuário inválido")

/*       Swal.fire({
        icon: "error",
        title: "Campos inválidos",
        confirmButtonText: "Voltar",
        confirmButtonColor: "#6F9CB5",
      }); */
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