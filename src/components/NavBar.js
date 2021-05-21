import React from "react";
import './Header.css';


function NavBar() {
  return (

    <div>
      <nav className="no-shadows">
        <div className="nav-wrapper">
          <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="fas fa-bars"></i></a>
          <nav>
            <div className="nav-wrapper">
              <a href="landing.html" className="brand-logo">Flock</a>
              <ul className="right hide-on-med-and-down">
                <li><a href="about.html">Home</a></li>
                <li><a href="contact.html">Sign In</a></li>
                <li><a href="signup.html">Sign Up</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </nav>
    </div>

  )
}
export default NavBar;