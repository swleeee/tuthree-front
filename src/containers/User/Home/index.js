import React, { Component } from 'react';
import styled from 'styled-components';

import Banner from './Banner';
import MainContainer from './Content';
import Footer from '../../../components/Footer';

class index extends Component {
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
