import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import 'whatwg-fetch';

import {
  setInStorage,
  getFromStorage,
} from '../../utils/storage';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: '',
      isLoading: true,
      token: '',
      signUpFirstName: '',
      signUpLastName: '',
      signUpUsername: '',
      signUpPassword: '',
      signUpEmail: ''
    };


    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpUsername= this.onTextboxChangeSignUpUsername.bind(this);
    this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
    this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }
  

    //sign up events
    onTextboxChangeSignUpUsername(event){
      this.setState({
        signUpUsername: event.target.value,
      });
    }
    onTextboxChangeSignUpEmail(event){
      this.setState({
        signUpEmail: event.target.value,
      });
    }
    onTextboxChangeSignUpFirstName(event){
      this.setState({
        signUpFirstName: event.target.value,
      });
    }
    onTextboxChangeSignUpLastName(event){
      this.setState({
        signUpLastName: event.target.value,
      });
    }
    onTextboxChangeSignUpPassword(event){
      this.setState({
        signUpPassword: event.target.value,
      });
    }

    onSignUp() {
      // Grab state
      const {
        signUpFirstName,
        signUpLastName,
        signUpUsername,
        signUpEmail,
        signUpPassword,
      } = this.state;
      // this.setState({
      //   isLoading: true,
      // });
      // Post request to backend
      fetch('/api/account/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: signUpFirstName,
          lastName: signUpLastName,
          userName: signUpUsername,
          email: signUpEmail,
          password: signUpPassword,
        }),
      }).then(res => res.json())
        .then(json => {
          console.log('json', json);
          if (json.success) {
            this.setState({
              signUpError: json.message,
              isLoading: false,
              signUpEmail: '',
              signUpPassword: '',
            });
          } else {
            this.setState({
              signUpError: json.message,
              isLoading: false,
            });
          }
        });
    }



    render() {
      const {
        isLoading,
        token,
        signUpUsername,
        signUpFirstName,
        signUpLastName,
        signUpEmail,
        signUpPassword,
        signUpError,
      } = this.state;
      // if (isLoading) {
      //   return (<div className="container center-align"><p>Loading...</p></div>);
      // }
      if (!token) {
        return (
          <div className="container center-align">
            <div className="row left-align">
            <h4>Sign Up</h4>
              {
                (signUpError) ? (
                  <p>{signUpError}</p>
                ) : (null)
              }
              <p>Sign Up</p>
              <input
                type="text"
                placeholder="Frist name"
                value={signUpFirstName}
                onChange={this.onTextboxChangeSignUpFirstName}
              /><br />
              <input
                type="text"
                placeholder="Last name"
                value={signUpLastName}
                onChange={this.onTextboxChangeSignUpLastName}
              /><br />
              <input
                type="text"
                placeholder="Username"
                value={signUpUsername}
                onChange={this.onTextboxChangeSignUpUsername}
              /><br />
              <input
                type="email"
                placeholder="Email"
                value={signUpEmail}
                onChange={this.onTextboxChangeSignUpEmail}
              /><br />
              <input
                type="password"
                placeholder="Password"
                value={signUpPassword}
                onChange={this.onTextboxChangeSignUpPassword}
              /><br />
              <button className="btn waves-effect waves-light btn-primary" onClick={this.onSignUp}>Sign Up</button>
            </div>
          </div>
        );
      }
      return (
        <div>
          <p>Signed in</p>
        </div>
      );
    }
  }
    export default Signup;
