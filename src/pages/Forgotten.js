import React, { Component } from 'react';
import ForgottenContainer from '../containers/User/Forgotten';
import Footer from '../components/Footer';

import { inject, observer } from 'mobx-react';
import Common from '../stores/Common/Common';
import NavContainer from '../components/Nav';
import MovileNavContainer from '../components/MobileNav';

@inject('Common')
@observer
class Forgotten extends Component {
  render() {
    return (
      <>
        {Common.width &&
          (Common.width >= 767.98 ? <NavContainer /> : <MovileNavContainer />)}

        <ForgottenContainer />
        <Footer />
      </>
    );
  }
}

// Signup.propTypes = {};

export default Forgotten;
