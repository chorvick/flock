import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Login />
      <Signup />
    </div>
  );
}
export default App;