import React, { Component } from 'react';
import CommunityContainer from '../containers/User/Community';
import Footer from '../components/Footer';
import { inject, observer } from 'mobx-react';
import Common from '../stores/Common/Common';
import NavContainer from '../components/Nav';
import MovileNavContainer from '../components/MobileNav';

@inject('Common')
@observer
class Community extends Component {
  render() {
    return (
      <>
        {Common.width &&
          (Common.width >= 767.98 ? <NavContainer /> : <MovileNavContainer />)}
        <CommunityContainer />
        <Footer />
      </>
    );
  }
}

// Signup.propTypes = {};

export default Community;
