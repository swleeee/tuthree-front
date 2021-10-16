import React, { Component } from 'react';
import Content from './Content';
import InnerContainer from '../../../components/InnerContainer';
import OuterContainer from '../../../components/OuterContainer';

class index extends Component {
  render() {
    return (
      <OuterContainer>
        <InnerContainer>
          <Content />
        </InnerContainer>
      </OuterContainer>
    );
  }
}

export default index;
