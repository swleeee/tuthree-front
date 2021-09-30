import React, { Component } from 'react';
import MainContainer from '../../containers/Admin/Main';
// import Footer from '../../components/Footer';
import AdminNav from '../../components/AdminNav';

class Main extends Component {
  render() {
    return (
      <>
        <AdminNav />
        <MainContainer />
      </>
    );
  }
}

// Signup.propTypes = {};

export default Main;
