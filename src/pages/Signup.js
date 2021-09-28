import React, { Component } from 'react';
import SignupContainer from '../containers/Signup';
import NavContainer from '../components/Nav.js';
import Footer from '../components/Footer';

class Signup extends Component {
  render() {
    return (
      <>
        {/* <NavContainer /> */}
        <SignupContainer />
        <Footer />
      </>
    );
  }
}

// Signup.propTypes = {};

export default Signup;
