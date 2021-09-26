import React, { Component } from 'react';
import styled from 'styled-components';
import InnerContainer from '../../components/InnerContainer';
import OuterContainer from '../../components/OuterContainer';

class ContentContainer extends Component {
  render() {
    return (
      <OuterContainer>
        <InnerContainer>
          <Item>main contents~</Item>
        </InnerContainer>
      </OuterContainer>
    );
  }
}

export default ContentContainer;

const Item = styled.div`
  width: 1200px;
  height: 100px;
  border: 3px solid red;
`;
