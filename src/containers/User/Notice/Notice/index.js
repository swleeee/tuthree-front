import React, { Component } from 'react';
import ContentContainer from './Content';
import DetailContentContainer from './DetailContent';
import { inject, observer } from 'mobx-react';

import Notice from '../../../../stores/Community/Notice';

@inject('Notice')
@observer
class index extends Component {
  render() {
    return (
      <>
        {Notice.state === 1 ? <ContentContainer /> : <DetailContentContainer />}
      </>
    );
  }
}

export default index;
