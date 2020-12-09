import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
// import { AuthContext } from "../../auth/AuthContext";
// import { types } from "../../types/types";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {navbar} from '../ui/navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="bg-dark" id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/facturar"
          >
            Facturar
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </ul>
      </div>
    <Link className="navbar-brand ml-3" to="/">
      Optimus
    </Link>
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul className="navbar-nav ml-auto">
        {/* <span className="nav-item nav-link text-info">{name}</span> */}
        <span className="nav-item nav-link text-info">name</span>

        {/* <button className="nav-item nav-link btn" onClick={handleLogout}> */}
        <button className="nav-item nav-link btn" >
          Logout
        </button>
      </ul>
    </div>
  </nav> 
  );
};


{/* <div className="navbar navbar-dark navbar-expand-lg bg-dark mb-4">
      <div className="bg-dark" id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li>
            <a>
              <li>Dashboard</li>
            </a>
          </li>
          <a >
            <li>Facturar</li>
          </a>
          <a >
            <li>Catálogo</li>
          </a>
          <a >
            <li>Reportes</li>
          </a>
          <a >
            <li>Configuración</li>
          </a>
          <a >
            <li>Guías</li>
          </a>
        </ul>
      </div>
      <span className="navbar-brand mr-auto ml-3">Optimus</span>
      <spam className="navbar-nav mt-2"> José </spam>
      <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt"></i>
        <span> Salir</span>
      </button>
    </div> */}
