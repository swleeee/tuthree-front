import React, { Component } from 'react';
import CommunityContainer from '../../containers/Admin/Main/CommunityManagement';

import { inject, observer } from 'mobx-react';
import AdminNav from '../../components/AdminNav';
import MobAdminNav from '../../components/AdminMobNav';
import Common from '../../stores/Common/Common';

@inject('Common')
@observer
class Community extends Component {
  render() {
    return (
      <>
        {Common.width &&
          (Common.width >= 767.98 ? <AdminNav /> : <MobAdminNav />)}
        <CommunityContainer />
      </>
    );
  }
}

export default Community;
