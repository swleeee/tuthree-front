import React, { Component } from 'react';
import HomeContainer from '../containers/User/Home';
import { inject, observer } from 'mobx-react';
import Common from '../stores/Common/Common';
import NavContainer from '../components/Nav';
import MovileNavContainer from '../components/MobileNav';

@inject('Common')
@observer
class Home extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div>
        {Common.width &&
          (Common.width >= 767.98 ? <NavContainer /> : <MovileNavContainer />)}
        <HomeContainer />
      </div>
    );
  }
}

// Home.propTypes = {};

export default Home;
