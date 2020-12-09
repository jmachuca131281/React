import React, { useReducer, useEffect } from "react";
import { AppRouter } from "./routers/AppRouter";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init); // Se crea el reducer. El reducer a tulizar el el authReducer que se pone como primer argumento.
//   const [state, dispatch] = useReducer(reducer, initialState, init) Reducer = authReducer, initialState= obj {},  init= para leer el local estorage.

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}> // El provider permite consuming components 
      <AppRouter />
    </AuthContext.Provider>
  );
};
