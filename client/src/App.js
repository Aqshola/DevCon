import React from "react";
import "./App.css";
import Landing from "./components/layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Nav from "./components/layout/Nav";
const App = () => (
  <Router>
    <Nav />
    <Route exact path="/" component={Landing} />
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </Router>
);
export default App;