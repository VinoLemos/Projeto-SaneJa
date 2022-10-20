import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );

            if (hasUser) setUser(hasUser[0]);
        }
    }, []);

    const signin = (email, senha) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));
        const hasUser = JSON.parse(usersStorage)?.filter((user) => user.email === email);

        if (hasUser?.lenght) {
            if (hasUser[0].email === email && hasUser[0].senha === senha) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({email, token}));
                setUser({email, senha});
                return;
            } else {
                return "Email ou senha incorretos";
            }
        } else {
            return "Usuario não cadastrado";
        }
    };

    const signup = (email, senha) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));
        const hasUser = JSON.parse(usersStorage)?.filter((user) => user.email === email);

        if (hasUser?.lenght) {
            return "Já existe uma conta com esse email";
        }

        let newUser;

        if (usersStorage) {
            newUser = [...usersStorage, {email, senha}];
        } else {
            newUser = [{email, senha}];
        }

        localStorage.setItem("users_db", JSON.stringify(newUser));

        return;
    };

    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    return <AuthContext.Provider
        value={{user, signed: !!user, signin, signup, signout}}
    >
        {children}
    </AuthContext.Provider>
}