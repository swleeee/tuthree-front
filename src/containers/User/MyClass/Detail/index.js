import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import Content from './Content';

@inject('MyClass')
@observer
class index extends Component {
  componentWillUnmount = () => {
    const { MyClass } = this.props;
    console.info('unun');
    MyClass.state = 1;
  };
  render() {
    return <Content />;
  }
}

export default index;

const Container = styled.div``;
