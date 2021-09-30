import React, { Component } from 'react';
import SignupContainer from '../containers/User/Signup';
import Footer from '../components/Footer';
import { inject, observer } from 'mobx-react';
import Common from '../stores/Common/Common';
import NavContainer from '../components/Nav';
import MovileNavContainer from '../components/MobileNav';

@inject('Common')
@observer
class Signup extends Component {
  render() {
    return (
      <>
        {Common.width &&
          (Common.width >= 767.98 ? <NavContainer /> : <MovileNavContainer />)}
        <SignupContainer />
        <Footer />
      </>
    );
  }
}

// Signup.propTypes = {};

export default Signup;
