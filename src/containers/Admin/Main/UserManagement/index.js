import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import Content from './Content';
import AdminUser from '../../../../stores/Admin/User';

@inject('AdminUser')
@observer
class index extends Component {
  render() {
    return <>{AdminUser.state === 0 ? <Content /> : <Content />}</>;
  }
}

export default index;
