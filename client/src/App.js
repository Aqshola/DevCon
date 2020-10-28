import React, { useEffect } from "react";
import "./App.css";
import Landing from "./components/layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Nav from "./components/layout/Nav";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile-forms/CreateProfile";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./action/auth";
import PrivateRoute from "./components/routing/PrivateRoute";
import EditProfile from "./components/profile-forms/EditProfile";
import AddExperience from "./components/profile-forms/AddExperience";
import AddEducation from "./components/profile-forms/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";

if (localStorage.token) {
  setAuthToken(localStorage.getItem("token"));
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/profile/:id" component={Profile} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/create-profile" component={CreateProfile} />
          <PrivateRoute path="/edit-profile" component={EditProfile} />
          <PrivateRoute path="/add-experience" component={AddExperience} />
          <PrivateRoute path="/add-education" component={AddEducation} />
          <PrivateRoute path="/posts" component={Posts} />
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
