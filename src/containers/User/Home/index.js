import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import Banner from './Banner';
import MainContainer from './Content';
import Footer from '../../../components/Footer';
import Auth from '../../../stores/Account/Auth';

@inject('Auth')
@observer
class index extends Component {
  componentDidMount = () => {
    if (localStorage.getItem('userId')) {
      Auth.loggedUserId = localStorage.getItem('userId');
      Auth.loggedUserType = localStorage.getItem('userType');
      Auth.token = localStorage.getItem('token');

      localStorage.removeItem('userId');
      localStorage.removeItem('userType');

      console.info(Auth.loggedUserType);
    }
  };
  render() {
    return (
      <>
        {/* <NavBox> */}
        {/* <NavContainer /> */}
        <Banner />
        <MainContainer />
        {/* </NavBox> */}
        <Footer />
      </>
    );
  }
}

export default index;
