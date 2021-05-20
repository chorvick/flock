import React from "react";
import './Header.css';

function Header() {
  return (
    <div className="container-fluid">
      <div className="row text-center justify-content-center">
        <nav className="navbar navbar-expand-lg sticky-top">
          <a id="brand" className="navbar-brand p-2" href="index.html">FLOCK</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  justify-content-end" id="navbarText">
            <ul className="navbar-nav ml-4">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Logout">Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
