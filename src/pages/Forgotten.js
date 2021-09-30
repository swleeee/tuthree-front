import React, { Component } from 'react';
import ForgottenContainer from '../containers/User/Forgotten';
import NavContainer from '../components/Nav.js';
import Footer from '../components/Footer';

class Forgotten extends Component {
  render() {
    return (
      <>
        {/* <NavContainer /> */}
        <ForgottenContainer />
        <Footer />
      </>
    );
  }
}

// Signup.propTypes = {};

export default Forgotten;
