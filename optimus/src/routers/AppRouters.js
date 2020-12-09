import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { LoginScreen } from "../auth/LoginScreen";
import { DashboardScreen } from "../components/dashboard/DashboardScreen";

export const AppRouters = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exect path="/" component={DashboardScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
