import React from "react";


function Signup() {
  return (
    <main>
        <div className="container center-align">
            <div className="row left-align">
                <h3>Sign Up</h3>
                <form className=" col s12 form signup-form">
                    <div className="form-group left-align">
                        <label for="last-signup">first name:</label>
                        <input className="form-input" type="text" id="first-signup" />
                    </div>
                    <div className="form-group left-align">
                        <label for="first-signup">last name:</label>
                        <input className="form-input" type="text" id="last-signup" />
                    </div>
                    <div className="form-group left-align">
                        <label for="username-signup">username:</label>
                        <input className="form-input" type="text" id="username-signup" />
                    </div>
                    <div className="form-group left-align">
                        <label for="password-signup">password:</label>
                        <input className="form-input" type="password" id="password-signup" />
                    </div>
                    <div className="form-group left-align">
                        <button className="btn waves-effect waves-light btn-primary" type="submit">Sign up</button>
                    </div>
                </form>
            </div>
        </div>

        <script src="signup.js"></script>
    </main>

  );
}

export default Signup;