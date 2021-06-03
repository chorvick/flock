import React, { Component } from 'react';
import 'whatwg-fetch';

import {
  setInStorage,
  getFromStorage,
} from '../../utils/storage';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signInError: '',
      signInUsername: '',
      signInPassword: ''
    };

    this.onTextboxChangeSignInUsername = this.onTextboxChangeSignInUsername.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);


    this.onSignIn = this.onSignIn.bind(this);

  }
  componentDidMount() {
    const obj = getFromStorage('flock');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            });
            this.props.history.push("/event")
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }
    //sign in events
    onTextboxChangeSignInUsername(event){
      this.setState({
        signInUsername: event.target.value,
      });
    }

    onTextboxChangeSignInPassword(event){
      this.setState({
        signInPassword: event.target.value,
      });
    }
  
    afterSignin(){
      
    }

    onSignIn() {
      // Grab state
      const {
        signInUsername,
        signInPassword,
      } = this.state;
      this.setState({
        isLoading: true,
      });
      // Post request to backend
      fetch('/api/account/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: signInUsername,
          password: signInPassword,
        }),
      }).then(res => res.json())
        .then(json => {
          console.log('json', json);
          if (json.success) {
            setInStorage('flock', { token: json.token });
            this.setState({
              signInError: json.message,
              isLoading: false,
              signInPassword: '',
              signInUsername: '',
              token: json.token,
            });
            this.props.history.push("/event");
          } else {
            this.setState({
              signInError: json.message,
              isLoading: false,
            });
          }
        });
    }


    render() {
      // console.log(this.props);
      const {
        isLoading,
        token,
        signInError,
        signInUsername,
        signInPassword
      } = this.state;
      if (isLoading) {
        return (<div><p>Loading...</p></div>);
      }
      if (!token) {
        return (
            <div className="container center-align">
              <div className="row left-align">
              <h4>Missed You!</h4>
              
              {
                (signInError) ? (
                  <p>{signInError}</p>
                ) : (null)
              }
             
              <input
                type="text"
                placeholder="Username"
                value={signInUsername}
                onChange={this.onTextboxChangeSignInUsername}
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                value={signInPassword}
                onChange={this.onTextboxChangeSignInPassword}
              />
              <br />
              <button className="btn waves-effect waves-light btn-primary" onClick={this.onSignIn}>Sign In</button>
            </div>
            </div>
          )
         }

         if (token){
           return(
<h1>got it</h1>
           );

         }

    }
  }


  export default Signin;