import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
//import { About } from "./pages/Pages";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Login />
      <Signup />
      <AboutPage />
    </div>
  );
}
export default App;
