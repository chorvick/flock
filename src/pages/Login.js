import React from "react";


function login() {
  return (
    <main>
        <div className="container center-align">
            <div className="row left-align">
              <h3>Missed You!</h3>
              <form className="col s12 form login-form">
                <div className="form-group left-align">
                  <label for="username-login">username:</label>
                  <input className="form-input" type="text" id="username-login" />
                </div>
                <div className="form-group left-align">
                  <label for="password-login">password:</label>
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