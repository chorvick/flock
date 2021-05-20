import React from "react";
import Header from "./components/Header";
import Intro from "./pages/Intro";
import Singup from "./pages/Signup";
import Login from "./pages/Login";


function App() {
  return (
    <div className="App">
      <Header />
      <Singup />
      <Login />
      <Intro />
    </div>
  );
}
export default App;
