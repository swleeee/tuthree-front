import React, { Component } from 'react';
import ContentContainer from './Content';
import { inject, observer } from 'mobx-react';

import Notice from '../../../../stores/Community/Notice';

@inject('Notice')
@observer
class index extends Component {
  componentDidMount = () => {
    Notice.init();
  };
  render() {
    return <ContentContainer />;
  }
}

export default index;
