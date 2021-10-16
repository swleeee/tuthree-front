import React, { Component } from 'react';
import MyClassContainer from '../containers/User/MyClass';
import Footer from '../components/Footer';
import { inject, observer } from 'mobx-react';
import Common from '../stores/Common/Common';
import NavContainer from '../components/Nav';
import MovileNavContainer from '../components/MobileNav';

@inject('Common')
@observer
class MyClass extends Component {
  render() {
    return (
      <>
        {Common.width &&
          (Common.width >= 767.98 ? <NavContainer /> : <MovileNavContainer />)}
        <MyClassContainer />
        <Footer />
      </>
    );
  }
}

export default MyClass;
