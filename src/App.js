import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <NavBar />
        </Router>
      </React.Fragment>
      <Router>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/HomePage">
            <HomePage />
          </Route>
          <Route path="/AboutPage">
            <AboutPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
