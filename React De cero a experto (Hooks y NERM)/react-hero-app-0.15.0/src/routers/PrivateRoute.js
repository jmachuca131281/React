import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest // Operador rest, pra pasar 
}) => {
  // console.log(rest.location.pathname); // Para verificar que es lo que esta trayendo el rest
  localStorage.setItem("lastPath", rest.location.pathname);

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
