import { createContext } from "react";

export const AuthContext = createContext();

// Se crea el contex para compartir el reducer por toda la app.
// La primera palabra va en mayuscula por que es un hoc.