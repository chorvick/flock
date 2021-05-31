import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";




function Header() {
  return (
    <div>
      <nav className="no-shadows">
        <div className="nav-wrapper">
          <Link to="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="fas fa-bars"></i>
          </Link>
          <nav>
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo center">
                Flock
              </Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/signup">SIGN UP</Link>
                </li>
                <li>
                  <Link to="/signin">LOG IN</Link>
                </li>
                <li>
                  <Link to="/AboutPage">ABOUT</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </nav>
    </div>
  );
}
export default Header;
