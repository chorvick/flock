import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./navbar.css"



function NavBar() {
  return (
    <div>
      <nav className="no-shadows">
        <div className="nav-wrapper">
          <Link to="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="fas fa-bars"></i>
          </Link>
          <nav>
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                Flock
              </Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Signup">Sign in</Link>
                </li>
                <li>
                  <Link to="/Login">Log in</Link>
                </li>
                <li>
                  <Link to="/AboutPage">About</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
