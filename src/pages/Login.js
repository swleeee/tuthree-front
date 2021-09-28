import React, { Component } from 'react';
import LoginContainer from '../containers/Login';
import NavContainer from '../components/Nav.js';
import Footer from '../components/Footer';

class Login extends Component {
  render() {
    return (
      <>
        {/* <NavContainer /> */}
        <LoginContainer />
        <Footer />
      </>
    );
  }
}

// Signup.propTypes = {};

export default Login;
