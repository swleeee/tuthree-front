import React, { Component } from 'react';
import AdminContainer from '../../containers/Admin';
import Footer from '../../components/Footer';

class Admin extends Component {
  render() {
    return (
      <>
        {/* <NavContainer /> */}
        <AdminContainer />
        <Footer />
      </>
    );
  }
}

// Signup.propTypes = {};

export default Admin;
