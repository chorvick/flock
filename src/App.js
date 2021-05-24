import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/Signup">
          <Signup />
        </Route>
        <Route path="/AboutPage">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;

//
