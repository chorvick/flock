import React from "react";
import "../components/Login/login.css"


function login() {
  return (
    <main class="log">
        <div className="container left-align">
            <div className="row left-align, login">
              <h3>Missed You!</h3>
              <form className="col s6 form login-form">
                <div className="form-group left-align">
                  <label for="username-login">USERNAME</label>
                  <input className="form-input" type="text" id="username-login" />
                </div>
                <div className="form-group left-align">
                  <label for="password-login">PASSWORD</label>
                  <input className="form-input" type="password" id="password-login" />
                </div>
                <div className="form-group left-align">
                  <button className="btn waves-effect waves-light btn-primary" type="submit">login</button>
                </div>
              </form>
            </div>
            </div>
            
            
            <script src="login.js"></script>
    </main>
  );
}

export default login;