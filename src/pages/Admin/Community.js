import React, { Component } from 'react';
import CommunityContainer from '../../containers/Admin/Main/CommunityManagement';
import AdminNav from '../../components/AdminNav';

class Community extends Component {
  render() {
    return (
      <>
        <AdminNav />
        <CommunityContainer />
      </>
    );
  }
}

export default Community;
