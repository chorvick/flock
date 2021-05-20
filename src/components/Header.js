import React from "react";
import './Header.css';

function Header() {
  return (

    <nav className="no-shadows">
      <div className="nav-wrapper">
        <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="fas fa-bars"></i></a>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Flock</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="about.html">ABOUT</a></li>
              <li><a href="contact.html">LOG IN</a></li>
              <li><a href="signup.html">SIGN UP</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </nav>
  )
};

export default Header;