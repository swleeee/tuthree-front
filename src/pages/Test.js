import React, { Component } from 'react';
import TestTutorContainer from '../containers/User/Test';
import Footer from '../components/Footer';
import { inject, observer } from 'mobx-react';
import Common from '../stores/Common/Common';
import NavContainer from '../components/Nav';
import MovileNavContainer from '../components/MobileNav';

@inject('Common')
@observer
class Test extends Component {
  render() {
    return (
      <>
        {Common.width &&
          (Common.width >= 767.98 ? <NavContainer /> : <MovileNavContainer />)}
        <TestTutorContainer />
        <Footer />
      </>
    );
  }
}

export default Test;
