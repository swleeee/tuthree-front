import React, { Component } from 'react';
import MainContainer from '../../containers/Admin/Main';

import { inject, observer } from 'mobx-react';
import AdminNav from '../../components/AdminNav';
import MobAdminNav from '../../components/AdminMobNav';
import Common from '../../stores/Common/Common';

@inject('Common')
@observer
class Main extends Component {
  render() {
    return (
      <>
        {Common.width &&
          (Common.width >= 767.98 ? <AdminNav /> : <MobAdminNav />)}
        <MainContainer />
      </>
    );
  }
}

// Signup.propTypes = {};

export default Main;
