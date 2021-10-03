import React, { Component } from 'react';
import ContentContainer from './Content';
// import DetailContentContainer from './DetailContent';
import { inject, observer } from 'mobx-react';

import Community from '../../../../stores/Community/Community';

@inject('Community')
@observer
class index extends Component {
  render() {
    return (
      <>
        {/* {Community.state === 1 ? (
          <ContentContainer />
        ) : (
          <DetailContentContainer />
        )} */}
        <ContentContainer />
      </>
    );
  }
}

export default index;
