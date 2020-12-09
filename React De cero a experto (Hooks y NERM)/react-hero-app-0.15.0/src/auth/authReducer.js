import { types } from "../types/types";

// const state = { // Estado del asuario si esta autenticado.
//     name: 'Fernando',
//     logged: true
// }

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login: // Importamos el objeto type y agregamos la acción "Login"
      return {
        ...action.payload, // Retorna todo lo que venga de actíon.payload para mandar el usuario, correo, etc.
        logged: true,
      };

    case types.logout:
      return {
        logged: false, // Solo retorna el estado en false.
      };

    default:
      return state; // Aunque no se haga nada siempre devuelte el state.
  }
};
