import React from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import App from "./components/App/App";
import NotFound from "./components/App/NotFound";
import Home from "./components/Home/Home";
import Signin from "./components/Home/Signin";
import Signup from "./components/Home/Signup";
import Event from "./components/Home/Event";
import Logout from "./components/Home/Logout";
import AboutPage from "./components/AboutPage/AboutPage";
//import "./components/AboutPage/about.css";
import HelloWorld from "./components/HelloWorld/HelloWorld";

import "./styles/styles.scss";
import "materialize-css";

render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        {/* <Route path="/helloworld" component={HelloWorld}/> */}
        <Route path="/event" component={Event} />
        <Route path="/AboutPage" component={AboutPage} />
        <Route path="/logout" component={Logout} />

        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("app")
);
